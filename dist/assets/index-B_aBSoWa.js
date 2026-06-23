(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function a(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=a(o);fetch(o.href,c)}})();function Ab(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Id={exports:{}},Ss={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0;function A5(){if(Q0)return Ss;Q0=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function a(r,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var f in o)f!=="key"&&(c[f]=o[f])}else c=o;return o=c.ref,{$$typeof:t,type:r,key:u,ref:o!==void 0?o:null,props:c}}return Ss.Fragment=e,Ss.jsx=a,Ss.jsxs=a,Ss}var Z0;function R5(){return Z0||(Z0=1,Id.exports=A5()),Id.exports}var d=R5(),qd={exports:{}},me={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ey;function N5(){if(ey)return me;ey=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),x=Symbol.iterator;function w(R){return R===null||typeof R!="object"?null:(R=x&&R[x]||R["@@iterator"],typeof R=="function"?R:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,E={};function k(R,I,ee){this.props=R,this.context=I,this.refs=E,this.updater=ee||S}k.prototype.isReactComponent={},k.prototype.setState=function(R,I){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,I,"setState")},k.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function O(){}O.prototype=k.prototype;function A(R,I,ee){this.props=R,this.context=I,this.refs=E,this.updater=ee||S}var B=A.prototype=new O;B.constructor=A,T(B,k.prototype),B.isPureReactComponent=!0;var G=Array.isArray;function W(){}var q={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function M(R,I,ee){var ie=ee.ref;return{$$typeof:t,type:R,key:I,ref:ie!==void 0?ie:null,props:ee}}function Y(R,I){return M(R.type,I,R.props)}function K(R){return typeof R=="object"&&R!==null&&R.$$typeof===t}function oe(R){var I={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(ee){return I[ee]})}var je=/\/+/g;function Ce(R,I){return typeof R=="object"&&R!==null&&R.key!=null?oe(""+R.key):I.toString(36)}function ge(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(W,W):(R.status="pending",R.then(function(I){R.status==="pending"&&(R.status="fulfilled",R.value=I)},function(I){R.status==="pending"&&(R.status="rejected",R.reason=I)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function V(R,I,ee,ie,fe){var be=typeof R;(be==="undefined"||be==="boolean")&&(R=null);var Ae=!1;if(R===null)Ae=!0;else switch(be){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(R.$$typeof){case t:case e:Ae=!0;break;case y:return Ae=R._init,V(Ae(R._payload),I,ee,ie,fe)}}if(Ae)return fe=fe(R),Ae=ie===""?"."+Ce(R,0):ie,G(fe)?(ee="",Ae!=null&&(ee=Ae.replace(je,"$&/")+"/"),V(fe,I,ee,"",function(J){return J})):fe!=null&&(K(fe)&&(fe=Y(fe,ee+(fe.key==null||R&&R.key===fe.key?"":(""+fe.key).replace(je,"$&/")+"/")+Ae)),I.push(fe)),1;Ae=0;var dt=ie===""?".":ie+":";if(G(R))for(var qe=0;qe<R.length;qe++)ie=R[qe],be=dt+Ce(ie,qe),Ae+=V(ie,I,ee,be,fe);else if(qe=w(R),typeof qe=="function")for(R=qe.call(R),qe=0;!(ie=R.next()).done;)ie=ie.value,be=dt+Ce(ie,qe++),Ae+=V(ie,I,ee,be,fe);else if(be==="object"){if(typeof R.then=="function")return V(ge(R),I,ee,ie,fe);throw I=String(R),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function Q(R,I,ee){if(R==null)return R;var ie=[],fe=0;return V(R,ie,"","",function(be){return I.call(ee,be,fe++)}),ie}function te(R){if(R._status===-1){var I=R._result;I=I(),I.then(function(ee){(R._status===0||R._status===-1)&&(R._status=1,R._result=ee)},function(ee){(R._status===0||R._status===-1)&&(R._status=2,R._result=ee)}),R._status===-1&&(R._status=0,R._result=I)}if(R._status===1)return R._result.default;throw R._result}var pe=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var I=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(I))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)},xe={map:Q,forEach:function(R,I,ee){Q(R,function(){I.apply(this,arguments)},ee)},count:function(R){var I=0;return Q(R,function(){I++}),I},toArray:function(R){return Q(R,function(I){return I})||[]},only:function(R){if(!K(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};return me.Activity=v,me.Children=xe,me.Component=k,me.Fragment=a,me.Profiler=o,me.PureComponent=A,me.StrictMode=r,me.Suspense=m,me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,me.__COMPILER_RUNTIME={__proto__:null,c:function(R){return q.H.useMemoCache(R)}},me.cache=function(R){return function(){return R.apply(null,arguments)}},me.cacheSignal=function(){return null},me.cloneElement=function(R,I,ee){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var ie=T({},R.props),fe=R.key;if(I!=null)for(be in I.key!==void 0&&(fe=""+I.key),I)!X.call(I,be)||be==="key"||be==="__self"||be==="__source"||be==="ref"&&I.ref===void 0||(ie[be]=I[be]);var be=arguments.length-2;if(be===1)ie.children=ee;else if(1<be){for(var Ae=Array(be),dt=0;dt<be;dt++)Ae[dt]=arguments[dt+2];ie.children=Ae}return M(R.type,fe,ie)},me.createContext=function(R){return R={$$typeof:u,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:c,_context:R},R},me.createElement=function(R,I,ee){var ie,fe={},be=null;if(I!=null)for(ie in I.key!==void 0&&(be=""+I.key),I)X.call(I,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(fe[ie]=I[ie]);var Ae=arguments.length-2;if(Ae===1)fe.children=ee;else if(1<Ae){for(var dt=Array(Ae),qe=0;qe<Ae;qe++)dt[qe]=arguments[qe+2];fe.children=dt}if(R&&R.defaultProps)for(ie in Ae=R.defaultProps,Ae)fe[ie]===void 0&&(fe[ie]=Ae[ie]);return M(R,be,fe)},me.createRef=function(){return{current:null}},me.forwardRef=function(R){return{$$typeof:f,render:R}},me.isValidElement=K,me.lazy=function(R){return{$$typeof:y,_payload:{_status:-1,_result:R},_init:te}},me.memo=function(R,I){return{$$typeof:g,type:R,compare:I===void 0?null:I}},me.startTransition=function(R){var I=q.T,ee={};q.T=ee;try{var ie=R(),fe=q.S;fe!==null&&fe(ee,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(W,pe)}catch(be){pe(be)}finally{I!==null&&ee.types!==null&&(I.types=ee.types),q.T=I}},me.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},me.use=function(R){return q.H.use(R)},me.useActionState=function(R,I,ee){return q.H.useActionState(R,I,ee)},me.useCallback=function(R,I){return q.H.useCallback(R,I)},me.useContext=function(R){return q.H.useContext(R)},me.useDebugValue=function(){},me.useDeferredValue=function(R,I){return q.H.useDeferredValue(R,I)},me.useEffect=function(R,I){return q.H.useEffect(R,I)},me.useEffectEvent=function(R){return q.H.useEffectEvent(R)},me.useId=function(){return q.H.useId()},me.useImperativeHandle=function(R,I,ee){return q.H.useImperativeHandle(R,I,ee)},me.useInsertionEffect=function(R,I){return q.H.useInsertionEffect(R,I)},me.useLayoutEffect=function(R,I){return q.H.useLayoutEffect(R,I)},me.useMemo=function(R,I){return q.H.useMemo(R,I)},me.useOptimistic=function(R,I){return q.H.useOptimistic(R,I)},me.useReducer=function(R,I,ee){return q.H.useReducer(R,I,ee)},me.useRef=function(R){return q.H.useRef(R)},me.useState=function(R){return q.H.useState(R)},me.useSyncExternalStore=function(R,I,ee){return q.H.useSyncExternalStore(R,I,ee)},me.useTransition=function(){return q.H.useTransition()},me.version="19.2.7",me}var ty;function uf(){return ty||(ty=1,qd.exports=N5()),qd.exports}var _=uf();const As=Ab(_);var Fd={exports:{}},js={},Gd={exports:{}},Kd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny;function O5(){return ny||(ny=1,(function(t){function e(V,Q){var te=V.length;V.push(Q);e:for(;0<te;){var pe=te-1>>>1,xe=V[pe];if(0<o(xe,Q))V[pe]=Q,V[te]=xe,te=pe;else break e}}function a(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var Q=V[0],te=V.pop();if(te!==Q){V[0]=te;e:for(var pe=0,xe=V.length,R=xe>>>1;pe<R;){var I=2*(pe+1)-1,ee=V[I],ie=I+1,fe=V[ie];if(0>o(ee,te))ie<xe&&0>o(fe,ee)?(V[pe]=fe,V[ie]=te,pe=ie):(V[pe]=ee,V[I]=te,pe=I);else if(ie<xe&&0>o(fe,te))V[pe]=fe,V[ie]=te,pe=ie;else break e}}return Q}function o(V,Q){var te=V.sortIndex-Q.sortIndex;return te!==0?te:V.id-Q.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;t.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();t.unstable_now=function(){return u.now()-f}}var m=[],g=[],y=1,v=null,x=3,w=!1,S=!1,T=!1,E=!1,k=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function B(V){for(var Q=a(g);Q!==null;){if(Q.callback===null)r(g);else if(Q.startTime<=V)r(g),Q.sortIndex=Q.expirationTime,e(m,Q);else break;Q=a(g)}}function G(V){if(T=!1,B(V),!S)if(a(m)!==null)S=!0,W||(W=!0,oe());else{var Q=a(g);Q!==null&&ge(G,Q.startTime-V)}}var W=!1,q=-1,X=5,M=-1;function Y(){return E?!0:!(t.unstable_now()-M<X)}function K(){if(E=!1,W){var V=t.unstable_now();M=V;var Q=!0;try{e:{S=!1,T&&(T=!1,O(q),q=-1),w=!0;var te=x;try{t:{for(B(V),v=a(m);v!==null&&!(v.expirationTime>V&&Y());){var pe=v.callback;if(typeof pe=="function"){v.callback=null,x=v.priorityLevel;var xe=pe(v.expirationTime<=V);if(V=t.unstable_now(),typeof xe=="function"){v.callback=xe,B(V),Q=!0;break t}v===a(m)&&r(m),B(V)}else r(m);v=a(m)}if(v!==null)Q=!0;else{var R=a(g);R!==null&&ge(G,R.startTime-V),Q=!1}}break e}finally{v=null,x=te,w=!1}Q=void 0}}finally{Q?oe():W=!1}}}var oe;if(typeof A=="function")oe=function(){A(K)};else if(typeof MessageChannel<"u"){var je=new MessageChannel,Ce=je.port2;je.port1.onmessage=K,oe=function(){Ce.postMessage(null)}}else oe=function(){k(K,0)};function ge(V,Q){q=k(function(){V(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return x},t.unstable_next=function(V){switch(x){case 1:case 2:case 3:var Q=3;break;default:Q=x}var te=x;x=Q;try{return V()}finally{x=te}},t.unstable_requestPaint=function(){E=!0},t.unstable_runWithPriority=function(V,Q){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var te=x;x=V;try{return Q()}finally{x=te}},t.unstable_scheduleCallback=function(V,Q,te){var pe=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?pe+te:pe):te=pe,V){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=te+xe,V={id:y++,callback:Q,priorityLevel:V,startTime:te,expirationTime:xe,sortIndex:-1},te>pe?(V.sortIndex=te,e(g,V),a(m)===null&&V===a(g)&&(T?(O(q),q=-1):T=!0,ge(G,te-pe))):(V.sortIndex=xe,e(m,V),S||w||(S=!0,W||(W=!0,oe()))),V},t.unstable_shouldYield=Y,t.unstable_wrapCallback=function(V){var Q=x;return function(){var te=x;x=Q;try{return V.apply(this,arguments)}finally{x=te}}}})(Kd)),Kd}var iy;function D5(){return iy||(iy=1,Gd.exports=O5()),Gd.exports}var Yd={exports:{}},jt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ay;function M5(){if(ay)return jt;ay=1;var t=uf();function e(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var r={d:{f:a,r:function(){throw Error(e(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,g,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:m,containerInfo:g,implementation:y}}var u=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,jt.createPortal=function(m,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return c(m,g,null,y)},jt.flushSync=function(m){var g=u.T,y=r.p;try{if(u.T=null,r.p=2,m)return m()}finally{u.T=g,r.p=y,r.d.f()}},jt.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(m,g))},jt.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},jt.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var y=g.as,v=f(y,g.crossOrigin),x=typeof g.integrity=="string"?g.integrity:void 0,w=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?r.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:w}):y==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:w,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},jt.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=f(g.as,g.crossOrigin);r.d.M(m,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(m)},jt.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,v=f(y,g.crossOrigin);r.d.L(m,y,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},jt.preloadModule=function(m,g){if(typeof m=="string")if(g){var y=f(g.as,g.crossOrigin);r.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(m)},jt.requestFormReset=function(m){r.d.r(m)},jt.unstable_batchedUpdates=function(m,g){return m(g)},jt.useFormState=function(m,g,y){return u.H.useFormState(m,g,y)},jt.useFormStatus=function(){return u.H.useHostTransitionStatus()},jt.version="19.2.7",jt}var ry;function L5(){if(ry)return Yd.exports;ry=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Yd.exports=M5(),Yd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sy;function z5(){if(sy)return js;sy=1;var t=D5(),e=uf(),a=L5();function r(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function c(n){var i=n,s=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(s=i.return),n=i.return;while(n)}return i.tag===3?s:null}function u(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function f(n){if(n.tag===31){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function m(n){if(c(n)!==n)throw Error(r(188))}function g(n){var i=n.alternate;if(!i){if(i=c(n),i===null)throw Error(r(188));return i!==n?null:n}for(var s=n,l=i;;){var h=s.return;if(h===null)break;var p=h.alternate;if(p===null){if(l=h.return,l!==null){s=l;continue}break}if(h.child===p.child){for(p=h.child;p;){if(p===s)return m(h),n;if(p===l)return m(h),i;p=p.sibling}throw Error(r(188))}if(s.return!==l.return)s=h,l=p;else{for(var b=!1,j=h.child;j;){if(j===s){b=!0,s=h,l=p;break}if(j===l){b=!0,l=h,s=p;break}j=j.sibling}if(!b){for(j=p.child;j;){if(j===s){b=!0,s=p,l=h;break}if(j===l){b=!0,l=p,s=h;break}j=j.sibling}if(!b)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?n:i}function y(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=y(n),i!==null)return i;n=n.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),A=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),M=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),K=Symbol.iterator;function oe(n){return n===null||typeof n!="object"?null:(n=K&&n[K]||n["@@iterator"],typeof n=="function"?n:null)}var je=Symbol.for("react.client.reference");function Ce(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===je?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case T:return"Fragment";case k:return"Profiler";case E:return"StrictMode";case G:return"Suspense";case W:return"SuspenseList";case M:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case S:return"Portal";case A:return n.displayName||"Context";case O:return(n._context.displayName||"Context")+".Consumer";case B:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case q:return i=n.displayName||null,i!==null?i:Ce(n.type)||"Memo";case X:i=n._payload,n=n._init;try{return Ce(n(i))}catch{}}return null}var ge=Array.isArray,V=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},pe=[],xe=-1;function R(n){return{current:n}}function I(n){0>xe||(n.current=pe[xe],pe[xe]=null,xe--)}function ee(n,i){xe++,pe[xe]=n.current,n.current=i}var ie=R(null),fe=R(null),be=R(null),Ae=R(null);function dt(n,i){switch(ee(be,i),ee(fe,n),ee(ie,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?w0(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=w0(i),n=S0(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}I(ie),ee(ie,n)}function qe(){I(ie),I(fe),I(be)}function J(n){n.memoizedState!==null&&ee(Ae,n);var i=ie.current,s=S0(i,n.type);i!==s&&(ee(fe,n),ee(ie,s))}function le(n){fe.current===n&&(I(ie),I(fe)),Ae.current===n&&(I(Ae),vs._currentValue=te)}var Fe,ht;function Ye(n){if(Fe===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Fe=i&&i[1]||"",ht=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Fe+n+ht}var Jt=!1;function En(n,i){if(!n||Jt)return"";Jt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var F=function(){throw Error()};if(Object.defineProperty(F.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(F,[])}catch(P){var U=P}Reflect.construct(n,[],F)}else{try{F.call()}catch(P){U=P}n.call(F.prototype)}}else{try{throw Error()}catch(P){U=P}(F=n())&&typeof F.catch=="function"&&F.catch(function(){})}}catch(P){if(P&&U&&typeof P.stack=="string")return[P.stack,U.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),b=p[0],j=p[1];if(b&&j){var C=b.split(`
`),z=j.split(`
`);for(h=l=0;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;for(;h<z.length&&!z[h].includes("DetermineComponentFrameRoot");)h++;if(l===C.length||h===z.length)for(l=C.length-1,h=z.length-1;1<=l&&0<=h&&C[l]!==z[h];)h--;for(;1<=l&&0<=h;l--,h--)if(C[l]!==z[h]){if(l!==1||h!==1)do if(l--,h--,0>h||C[l]!==z[h]){var H=`
`+C[l].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=l&&0<=h);break}}}finally{Jt=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?Ye(s):""}function sw(n,i){switch(n.tag){case 26:case 27:case 5:return Ye(n.type);case 16:return Ye("Lazy");case 13:return n.child!==i&&i!==null?Ye("Suspense Fallback"):Ye("Suspense");case 19:return Ye("SuspenseList");case 0:case 15:return En(n.type,!1);case 11:return En(n.type.render,!1);case 1:return En(n.type,!0);case 31:return Ye("Activity");default:return""}}function Qf(n){try{var i="",s=null;do i+=sw(n,s),s=n,n=n.return;while(n);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Cc=Object.prototype.hasOwnProperty,Ac=t.unstable_scheduleCallback,Rc=t.unstable_cancelCallback,ow=t.unstable_shouldYield,lw=t.unstable_requestPaint,Bt=t.unstable_now,cw=t.unstable_getCurrentPriorityLevel,Zf=t.unstable_ImmediatePriority,em=t.unstable_UserBlockingPriority,so=t.unstable_NormalPriority,uw=t.unstable_LowPriority,tm=t.unstable_IdlePriority,dw=t.log,hw=t.unstable_setDisableYieldValue,Rr=null,Pt=null;function di(n){if(typeof dw=="function"&&hw(n),Pt&&typeof Pt.setStrictMode=="function")try{Pt.setStrictMode(Rr,n)}catch{}}var Vt=Math.clz32?Math.clz32:pw,fw=Math.log,mw=Math.LN2;function pw(n){return n>>>=0,n===0?32:31-(fw(n)/mw|0)|0}var oo=256,lo=262144,co=4194304;function qi(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function uo(n,i,s){var l=n.pendingLanes;if(l===0)return 0;var h=0,p=n.suspendedLanes,b=n.pingedLanes;n=n.warmLanes;var j=l&134217727;return j!==0?(l=j&~p,l!==0?h=qi(l):(b&=j,b!==0?h=qi(b):s||(s=j&~n,s!==0&&(h=qi(s))))):(j=l&~p,j!==0?h=qi(j):b!==0?h=qi(b):s||(s=l&~n,s!==0&&(h=qi(s)))),h===0?0:i!==0&&i!==h&&(i&p)===0&&(p=h&-h,s=i&-i,p>=s||p===32&&(s&4194048)!==0)?i:h}function Nr(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function gw(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nm(){var n=co;return co<<=1,(co&62914560)===0&&(co=4194304),n}function Nc(n){for(var i=[],s=0;31>s;s++)i.push(n);return i}function Or(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function yw(n,i,s,l,h,p){var b=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var j=n.entanglements,C=n.expirationTimes,z=n.hiddenUpdates;for(s=b&~s;0<s;){var H=31-Vt(s),F=1<<H;j[H]=0,C[H]=-1;var U=z[H];if(U!==null)for(z[H]=null,H=0;H<U.length;H++){var P=U[H];P!==null&&(P.lane&=-536870913)}s&=~F}l!==0&&im(n,l,0),p!==0&&h===0&&n.tag!==0&&(n.suspendedLanes|=p&~(b&~i))}function im(n,i,s){n.pendingLanes|=i,n.suspendedLanes&=~i;var l=31-Vt(i);n.entangledLanes|=i,n.entanglements[l]=n.entanglements[l]|1073741824|s&261930}function am(n,i){var s=n.entangledLanes|=i;for(n=n.entanglements;s;){var l=31-Vt(s),h=1<<l;h&i|n[l]&i&&(n[l]|=i),s&=~h}}function rm(n,i){var s=i&-i;return s=(s&42)!==0?1:Oc(s),(s&(n.suspendedLanes|i))!==0?0:s}function Oc(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Dc(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function sm(){var n=Q.p;return n!==0?n:(n=window.event,n===void 0?32:F0(n.type))}function om(n,i){var s=Q.p;try{return Q.p=n,i()}finally{Q.p=s}}var hi=Math.random().toString(36).slice(2),gt="__reactFiber$"+hi,At="__reactProps$"+hi,Sa="__reactContainer$"+hi,Mc="__reactEvents$"+hi,vw="__reactListeners$"+hi,bw="__reactHandles$"+hi,lm="__reactResources$"+hi,Dr="__reactMarker$"+hi;function Lc(n){delete n[gt],delete n[At],delete n[Mc],delete n[vw],delete n[bw]}function ja(n){var i=n[gt];if(i)return i;for(var s=n.parentNode;s;){if(i=s[Sa]||s[gt]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(n=A0(n);n!==null;){if(s=n[gt])return s;n=A0(n)}return i}n=s,s=n.parentNode}return null}function _a(n){if(n=n[gt]||n[Sa]){var i=n.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return n}return null}function Mr(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(r(33))}function ka(n){var i=n[lm];return i||(i=n[lm]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function ft(n){n[Dr]=!0}var cm=new Set,um={};function Fi(n,i){Ta(n,i),Ta(n+"Capture",i)}function Ta(n,i){for(um[n]=i,n=0;n<i.length;n++)cm.add(i[n])}var xw=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),dm={},hm={};function ww(n){return Cc.call(hm,n)?!0:Cc.call(dm,n)?!1:xw.test(n)?hm[n]=!0:(dm[n]=!0,!1)}function ho(n,i,s){if(ww(i))if(s===null)n.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+s)}}function fo(n,i,s){if(s===null)n.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+s)}}function Vn(n,i,s,l){if(l===null)n.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(i,s,""+l)}}function Qt(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function fm(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Sw(n,i,s){var l=Object.getOwnPropertyDescriptor(n.constructor.prototype,i);if(!n.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,p=l.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(b){s=""+b,p.call(this,b)}}),Object.defineProperty(n,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(b){s=""+b},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function zc(n){if(!n._valueTracker){var i=fm(n)?"checked":"value";n._valueTracker=Sw(n,i,""+n[i])}}function mm(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return n&&(l=fm(n)?n.checked?"true":"false":n.value),n=l,n!==s?(i.setValue(n),!0):!1}function mo(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var jw=/[\n"\\]/g;function Zt(n){return n.replace(jw,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Uc(n,i,s,l,h,p,b,j){n.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?n.type=b:n.removeAttribute("type"),i!=null?b==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+Qt(i)):n.value!==""+Qt(i)&&(n.value=""+Qt(i)):b!=="submit"&&b!=="reset"||n.removeAttribute("value"),i!=null?Bc(n,b,Qt(i)):s!=null?Bc(n,b,Qt(s)):l!=null&&n.removeAttribute("value"),h==null&&p!=null&&(n.defaultChecked=!!p),h!=null&&(n.checked=h&&typeof h!="function"&&typeof h!="symbol"),j!=null&&typeof j!="function"&&typeof j!="symbol"&&typeof j!="boolean"?n.name=""+Qt(j):n.removeAttribute("name")}function pm(n,i,s,l,h,p,b,j){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(n.type=p),i!=null||s!=null){if(!(p!=="submit"&&p!=="reset"||i!=null)){zc(n);return}s=s!=null?""+Qt(s):"",i=i!=null?""+Qt(i):s,j||i===n.value||(n.value=i),n.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=j?n.checked:!!l,n.defaultChecked=!!l,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(n.name=b),zc(n)}function Bc(n,i,s){i==="number"&&mo(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function Ea(n,i,s,l){if(n=n.options,i){i={};for(var h=0;h<s.length;h++)i["$"+s[h]]=!0;for(s=0;s<n.length;s++)h=i.hasOwnProperty("$"+n[s].value),n[s].selected!==h&&(n[s].selected=h),h&&l&&(n[s].defaultSelected=!0)}else{for(s=""+Qt(s),i=null,h=0;h<n.length;h++){if(n[h].value===s){n[h].selected=!0,l&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function gm(n,i,s){if(i!=null&&(i=""+Qt(i),i!==n.value&&(n.value=i),s==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=s!=null?""+Qt(s):""}function ym(n,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if(ge(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=Qt(i),n.defaultValue=s,l=n.textContent,l===s&&l!==""&&l!==null&&(n.value=l),zc(n)}function Ca(n,i){if(i){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=i;return}}n.textContent=i}var _w=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vm(n,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":l?n.setProperty(i,s):typeof s!="number"||s===0||_w.has(i)?i==="float"?n.cssFloat=s:n[i]=(""+s).trim():n[i]=s+"px"}function bm(n,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(n=n.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&s[h]!==l&&vm(n,h,l)}else for(var p in i)i.hasOwnProperty(p)&&vm(n,p,i[p])}function Pc(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kw=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Tw=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function po(n){return Tw.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Hn(){}var Vc=null;function Hc(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Aa=null,Ra=null;function xm(n){var i=_a(n);if(i&&(n=i.stateNode)){var s=n[At]||null;e:switch(n=i.stateNode,i.type){case"input":if(Uc(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Zt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==n&&l.form===n.form){var h=l[At]||null;if(!h)throw Error(r(90));Uc(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===n.form&&mm(l)}break e;case"textarea":gm(n,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Ea(n,!!s.multiple,i,!1)}}}var $c=!1;function wm(n,i,s){if($c)return n(i,s);$c=!0;try{var l=n(i);return l}finally{if($c=!1,(Aa!==null||Ra!==null)&&(nl(),Aa&&(i=Aa,n=Ra,Ra=Aa=null,xm(i),n)))for(i=0;i<n.length;i++)xm(n[i])}}function Lr(n,i){var s=n.stateNode;if(s===null)return null;var l=s[At]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ic=!1;if($n)try{var zr={};Object.defineProperty(zr,"passive",{get:function(){Ic=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{Ic=!1}var fi=null,qc=null,go=null;function Sm(){if(go)return go;var n,i=qc,s=i.length,l,h="value"in fi?fi.value:fi.textContent,p=h.length;for(n=0;n<s&&i[n]===h[n];n++);var b=s-n;for(l=1;l<=b&&i[s-l]===h[p-l];l++);return go=h.slice(n,1<l?1-l:void 0)}function yo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function vo(){return!0}function jm(){return!1}function Rt(n){function i(s,l,h,p,b){this._reactName=s,this._targetInst=h,this.type=l,this.nativeEvent=p,this.target=b,this.currentTarget=null;for(var j in n)n.hasOwnProperty(j)&&(s=n[j],this[j]=s?s(p):p[j]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?vo:jm,this.isPropagationStopped=jm,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=vo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=vo)},persist:function(){},isPersistent:vo}),i}var Gi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bo=Rt(Gi),Ur=v({},Gi,{view:0,detail:0}),Ew=Rt(Ur),Fc,Gc,Br,xo=v({},Ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Br&&(Br&&n.type==="mousemove"?(Fc=n.screenX-Br.screenX,Gc=n.screenY-Br.screenY):Gc=Fc=0,Br=n),Fc)},movementY:function(n){return"movementY"in n?n.movementY:Gc}}),_m=Rt(xo),Cw=v({},xo,{dataTransfer:0}),Aw=Rt(Cw),Rw=v({},Ur,{relatedTarget:0}),Kc=Rt(Rw),Nw=v({},Gi,{animationName:0,elapsedTime:0,pseudoElement:0}),Ow=Rt(Nw),Dw=v({},Gi,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Mw=Rt(Dw),Lw=v({},Gi,{data:0}),km=Rt(Lw),zw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pw(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Bw[n])?!!i[n]:!1}function Yc(){return Pw}var Vw=v({},Ur,{key:function(n){if(n.key){var i=zw[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=yo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Uw[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yc,charCode:function(n){return n.type==="keypress"?yo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?yo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Hw=Rt(Vw),$w=v({},xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tm=Rt($w),Iw=v({},Ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yc}),qw=Rt(Iw),Fw=v({},Gi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gw=Rt(Fw),Kw=v({},xo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Yw=Rt(Kw),Xw=v({},Gi,{newState:0,oldState:0}),Ww=Rt(Xw),Jw=[9,13,27,32],Xc=$n&&"CompositionEvent"in window,Pr=null;$n&&"documentMode"in document&&(Pr=document.documentMode);var Qw=$n&&"TextEvent"in window&&!Pr,Em=$n&&(!Xc||Pr&&8<Pr&&11>=Pr),Cm=" ",Am=!1;function Rm(n,i){switch(n){case"keyup":return Jw.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nm(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Na=!1;function Zw(n,i){switch(n){case"compositionend":return Nm(i);case"keypress":return i.which!==32?null:(Am=!0,Cm);case"textInput":return n=i.data,n===Cm&&Am?null:n;default:return null}}function e2(n,i){if(Na)return n==="compositionend"||!Xc&&Rm(n,i)?(n=Sm(),go=qc=fi=null,Na=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Em&&i.locale!=="ko"?null:i.data;default:return null}}var t2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Om(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!t2[n.type]:i==="textarea"}function Dm(n,i,s,l){Aa?Ra?Ra.push(l):Ra=[l]:Aa=l,i=cl(i,"onChange"),0<i.length&&(s=new bo("onChange","change",null,s,l),n.push({event:s,listeners:i}))}var Vr=null,Hr=null;function n2(n){p0(n,0)}function wo(n){var i=Mr(n);if(mm(i))return n}function Mm(n,i){if(n==="change")return i}var Lm=!1;if($n){var Wc;if($n){var Jc="oninput"in document;if(!Jc){var zm=document.createElement("div");zm.setAttribute("oninput","return;"),Jc=typeof zm.oninput=="function"}Wc=Jc}else Wc=!1;Lm=Wc&&(!document.documentMode||9<document.documentMode)}function Um(){Vr&&(Vr.detachEvent("onpropertychange",Bm),Hr=Vr=null)}function Bm(n){if(n.propertyName==="value"&&wo(Hr)){var i=[];Dm(i,Hr,n,Hc(n)),wm(n2,i)}}function i2(n,i,s){n==="focusin"?(Um(),Vr=i,Hr=s,Vr.attachEvent("onpropertychange",Bm)):n==="focusout"&&Um()}function a2(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return wo(Hr)}function r2(n,i){if(n==="click")return wo(i)}function s2(n,i){if(n==="input"||n==="change")return wo(i)}function o2(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ht=typeof Object.is=="function"?Object.is:o2;function $r(n,i){if(Ht(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var s=Object.keys(n),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var h=s[l];if(!Cc.call(i,h)||!Ht(n[h],i[h]))return!1}return!0}function Pm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Vm(n,i){var s=Pm(n);n=0;for(var l;s;){if(s.nodeType===3){if(l=n+s.textContent.length,n<=i&&l>=i)return{node:s,offset:i-n};n=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Pm(s)}}function Hm(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Hm(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function $m(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=mo(n.document);i instanceof n.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)n=i.contentWindow;else break;i=mo(n.document)}return i}function Qc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var l2=$n&&"documentMode"in document&&11>=document.documentMode,Oa=null,Zc=null,Ir=null,eu=!1;function Im(n,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;eu||Oa==null||Oa!==mo(l)||(l=Oa,"selectionStart"in l&&Qc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ir&&$r(Ir,l)||(Ir=l,l=cl(Zc,"onSelect"),0<l.length&&(i=new bo("onSelect","select",null,i,s),n.push({event:i,listeners:l}),i.target=Oa)))}function Ki(n,i){var s={};return s[n.toLowerCase()]=i.toLowerCase(),s["Webkit"+n]="webkit"+i,s["Moz"+n]="moz"+i,s}var Da={animationend:Ki("Animation","AnimationEnd"),animationiteration:Ki("Animation","AnimationIteration"),animationstart:Ki("Animation","AnimationStart"),transitionrun:Ki("Transition","TransitionRun"),transitionstart:Ki("Transition","TransitionStart"),transitioncancel:Ki("Transition","TransitionCancel"),transitionend:Ki("Transition","TransitionEnd")},tu={},qm={};$n&&(qm=document.createElement("div").style,"AnimationEvent"in window||(delete Da.animationend.animation,delete Da.animationiteration.animation,delete Da.animationstart.animation),"TransitionEvent"in window||delete Da.transitionend.transition);function Yi(n){if(tu[n])return tu[n];if(!Da[n])return n;var i=Da[n],s;for(s in i)if(i.hasOwnProperty(s)&&s in qm)return tu[n]=i[s];return n}var Fm=Yi("animationend"),Gm=Yi("animationiteration"),Km=Yi("animationstart"),c2=Yi("transitionrun"),u2=Yi("transitionstart"),d2=Yi("transitioncancel"),Ym=Yi("transitionend"),Xm=new Map,nu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nu.push("scrollEnd");function fn(n,i){Xm.set(n,i),Fi(i,[n])}var So=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},en=[],Ma=0,iu=0;function jo(){for(var n=Ma,i=iu=Ma=0;i<n;){var s=en[i];en[i++]=null;var l=en[i];en[i++]=null;var h=en[i];en[i++]=null;var p=en[i];if(en[i++]=null,l!==null&&h!==null){var b=l.pending;b===null?h.next=h:(h.next=b.next,b.next=h),l.pending=h}p!==0&&Wm(s,h,p)}}function _o(n,i,s,l){en[Ma++]=n,en[Ma++]=i,en[Ma++]=s,en[Ma++]=l,iu|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function au(n,i,s,l){return _o(n,i,s,l),ko(n)}function Xi(n,i){return _o(n,null,null,i),ko(n)}function Wm(n,i,s){n.lanes|=s;var l=n.alternate;l!==null&&(l.lanes|=s);for(var h=!1,p=n.return;p!==null;)p.childLanes|=s,l=p.alternate,l!==null&&(l.childLanes|=s),p.tag===22&&(n=p.stateNode,n===null||n._visibility&1||(h=!0)),n=p,p=p.return;return n.tag===3?(p=n.stateNode,h&&i!==null&&(h=31-Vt(s),n=p.hiddenUpdates,l=n[h],l===null?n[h]=[i]:l.push(i),i.lane=s|536870912),p):null}function ko(n){if(50<ds)throw ds=0,fd=null,Error(r(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var La={};function h2(n,i,s,l){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(n,i,s,l){return new h2(n,i,s,l)}function ru(n){return n=n.prototype,!(!n||!n.isReactComponent)}function In(n,i){var s=n.alternate;return s===null?(s=$t(n.tag,i,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=i,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&65011712,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,i=n.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function Jm(n,i){n.flags&=65011714;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,i=s.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function To(n,i,s,l,h,p){var b=0;if(l=n,typeof n=="function")ru(n)&&(b=1);else if(typeof n=="string")b=y5(n,s,ie.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case M:return n=$t(31,s,i,h),n.elementType=M,n.lanes=p,n;case T:return Wi(s.children,h,p,i);case E:b=8,h|=24;break;case k:return n=$t(12,s,i,h|2),n.elementType=k,n.lanes=p,n;case G:return n=$t(13,s,i,h),n.elementType=G,n.lanes=p,n;case W:return n=$t(19,s,i,h),n.elementType=W,n.lanes=p,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case A:b=10;break e;case O:b=9;break e;case B:b=11;break e;case q:b=14;break e;case X:b=16,l=null;break e}b=29,s=Error(r(130,n===null?"null":typeof n,"")),l=null}return i=$t(b,s,i,h),i.elementType=n,i.type=l,i.lanes=p,i}function Wi(n,i,s,l){return n=$t(7,n,l,i),n.lanes=s,n}function su(n,i,s){return n=$t(6,n,null,i),n.lanes=s,n}function Qm(n){var i=$t(18,null,null,0);return i.stateNode=n,i}function ou(n,i,s){return i=$t(4,n.children!==null?n.children:[],n.key,i),i.lanes=s,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var Zm=new WeakMap;function tn(n,i){if(typeof n=="object"&&n!==null){var s=Zm.get(n);return s!==void 0?s:(i={value:n,source:i,stack:Qf(i)},Zm.set(n,i),i)}return{value:n,source:i,stack:Qf(i)}}var za=[],Ua=0,Eo=null,qr=0,nn=[],an=0,mi=null,Cn=1,An="";function qn(n,i){za[Ua++]=qr,za[Ua++]=Eo,Eo=n,qr=i}function ep(n,i,s){nn[an++]=Cn,nn[an++]=An,nn[an++]=mi,mi=n;var l=Cn;n=An;var h=32-Vt(l)-1;l&=~(1<<h),s+=1;var p=32-Vt(i)+h;if(30<p){var b=h-h%5;p=(l&(1<<b)-1).toString(32),l>>=b,h-=b,Cn=1<<32-Vt(i)+h|s<<h|l,An=p+n}else Cn=1<<p|s<<h|l,An=n}function lu(n){n.return!==null&&(qn(n,1),ep(n,1,0))}function cu(n){for(;n===Eo;)Eo=za[--Ua],za[Ua]=null,qr=za[--Ua],za[Ua]=null;for(;n===mi;)mi=nn[--an],nn[an]=null,An=nn[--an],nn[an]=null,Cn=nn[--an],nn[an]=null}function tp(n,i){nn[an++]=Cn,nn[an++]=An,nn[an++]=mi,Cn=i.id,An=i.overflow,mi=n}var yt=null,$e=null,Ee=!1,pi=null,rn=!1,uu=Error(r(519));function gi(n){var i=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fr(tn(i,n)),uu}function np(n){var i=n.stateNode,s=n.type,l=n.memoizedProps;switch(i[gt]=n,i[At]=l,s){case"dialog":Se("cancel",i),Se("close",i);break;case"iframe":case"object":case"embed":Se("load",i);break;case"video":case"audio":for(s=0;s<fs.length;s++)Se(fs[s],i);break;case"source":Se("error",i);break;case"img":case"image":case"link":Se("error",i),Se("load",i);break;case"details":Se("toggle",i);break;case"input":Se("invalid",i),pm(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Se("invalid",i);break;case"textarea":Se("invalid",i),ym(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||b0(i.textContent,s)?(l.popover!=null&&(Se("beforetoggle",i),Se("toggle",i)),l.onScroll!=null&&Se("scroll",i),l.onScrollEnd!=null&&Se("scrollend",i),l.onClick!=null&&(i.onclick=Hn),i=!0):i=!1,i||gi(n,!0)}function ip(n){for(yt=n.return;yt;)switch(yt.tag){case 5:case 31:case 13:rn=!1;return;case 27:case 3:rn=!0;return;default:yt=yt.return}}function Ba(n){if(n!==yt)return!1;if(!Ee)return ip(n),Ee=!0,!1;var i=n.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||Cd(n.type,n.memoizedProps)),s=!s),s&&$e&&gi(n),ip(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));$e=C0(n)}else if(i===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));$e=C0(n)}else i===27?(i=$e,Ri(n.type)?(n=Dd,Dd=null,$e=n):$e=i):$e=yt?on(n.stateNode.nextSibling):null;return!0}function Ji(){$e=yt=null,Ee=!1}function du(){var n=pi;return n!==null&&(Mt===null?Mt=n:Mt.push.apply(Mt,n),pi=null),n}function Fr(n){pi===null?pi=[n]:pi.push(n)}var hu=R(null),Qi=null,Fn=null;function yi(n,i,s){ee(hu,i._currentValue),i._currentValue=s}function Gn(n){n._currentValue=hu.current,I(hu)}function fu(n,i,s){for(;n!==null;){var l=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),n===s)break;n=n.return}}function mu(n,i,s,l){var h=n.child;for(h!==null&&(h.return=n);h!==null;){var p=h.dependencies;if(p!==null){var b=h.child;p=p.firstContext;e:for(;p!==null;){var j=p;p=h;for(var C=0;C<i.length;C++)if(j.context===i[C]){p.lanes|=s,j=p.alternate,j!==null&&(j.lanes|=s),fu(p.return,s,n),l||(b=null);break e}p=j.next}}else if(h.tag===18){if(b=h.return,b===null)throw Error(r(341));b.lanes|=s,p=b.alternate,p!==null&&(p.lanes|=s),fu(b,s,n),b=null}else b=h.child;if(b!==null)b.return=h;else for(b=h;b!==null;){if(b===n){b=null;break}if(h=b.sibling,h!==null){h.return=b.return,b=h;break}b=b.return}h=b}}function Pa(n,i,s,l){n=null;for(var h=i,p=!1;h!==null;){if(!p){if((h.flags&524288)!==0)p=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var b=h.alternate;if(b===null)throw Error(r(387));if(b=b.memoizedProps,b!==null){var j=h.type;Ht(h.pendingProps.value,b.value)||(n!==null?n.push(j):n=[j])}}else if(h===Ae.current){if(b=h.alternate,b===null)throw Error(r(387));b.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(n!==null?n.push(vs):n=[vs])}h=h.return}n!==null&&mu(i,n,s,l),i.flags|=262144}function Co(n){for(n=n.firstContext;n!==null;){if(!Ht(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Zi(n){Qi=n,Fn=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function vt(n){return ap(Qi,n)}function Ao(n,i){return Qi===null&&Zi(n),ap(n,i)}function ap(n,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Fn===null){if(n===null)throw Error(r(308));Fn=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else Fn=Fn.next=i;return s}var f2=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(s,l){n.push(l)}};this.abort=function(){i.aborted=!0,n.forEach(function(s){return s()})}},m2=t.unstable_scheduleCallback,p2=t.unstable_NormalPriority,it={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pu(){return{controller:new f2,data:new Map,refCount:0}}function Gr(n){n.refCount--,n.refCount===0&&m2(p2,function(){n.controller.abort()})}var Kr=null,gu=0,Va=0,Ha=null;function g2(n,i){if(Kr===null){var s=Kr=[];gu=0,Va=bd(),Ha={status:"pending",value:void 0,then:function(l){s.push(l)}}}return gu++,i.then(rp,rp),i}function rp(){if(--gu===0&&Kr!==null){Ha!==null&&(Ha.status="fulfilled");var n=Kr;Kr=null,Va=0,Ha=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function y2(n,i){var s=[],l={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return n.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<s.length;h++)(0,s[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),l}var sp=V.S;V.S=function(n,i){Ig=Bt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&g2(n,i),sp!==null&&sp(n,i)};var ea=R(null);function yu(){var n=ea.current;return n!==null?n:Be.pooledCache}function Ro(n,i){i===null?ee(ea,ea.current):ee(ea,i.pool)}function op(){var n=yu();return n===null?null:{parent:it._currentValue,pool:n}}var $a=Error(r(460)),vu=Error(r(474)),No=Error(r(542)),Oo={then:function(){}};function lp(n){return n=n.status,n==="fulfilled"||n==="rejected"}function cp(n,i,s){switch(s=n[s],s===void 0?n.push(i):s!==i&&(i.then(Hn,Hn),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,dp(n),n;default:if(typeof i.status=="string")i.then(Hn,Hn);else{if(n=Be,n!==null&&100<n.shellSuspendCounter)throw Error(r(482));n=i,n.status="pending",n.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,dp(n),n}throw na=i,$a}}function ta(n){try{var i=n._init;return i(n._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(na=s,$a):s}}var na=null;function up(){if(na===null)throw Error(r(459));var n=na;return na=null,n}function dp(n){if(n===$a||n===No)throw Error(r(483))}var Ia=null,Yr=0;function Do(n){var i=Yr;return Yr+=1,Ia===null&&(Ia=[]),cp(Ia,n,i)}function Xr(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function Mo(n,i){throw i.$$typeof===x?Error(r(525)):(n=Object.prototype.toString.call(i),Error(r(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function hp(n){function i(D,N){if(n){var L=D.deletions;L===null?(D.deletions=[N],D.flags|=16):L.push(N)}}function s(D,N){if(!n)return null;for(;N!==null;)i(D,N),N=N.sibling;return null}function l(D){for(var N=new Map;D!==null;)D.key!==null?N.set(D.key,D):N.set(D.index,D),D=D.sibling;return N}function h(D,N){return D=In(D,N),D.index=0,D.sibling=null,D}function p(D,N,L){return D.index=L,n?(L=D.alternate,L!==null?(L=L.index,L<N?(D.flags|=67108866,N):L):(D.flags|=67108866,N)):(D.flags|=1048576,N)}function b(D){return n&&D.alternate===null&&(D.flags|=67108866),D}function j(D,N,L,$){return N===null||N.tag!==6?(N=su(L,D.mode,$),N.return=D,N):(N=h(N,L),N.return=D,N)}function C(D,N,L,$){var ce=L.type;return ce===T?H(D,N,L.props.children,$,L.key):N!==null&&(N.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===X&&ta(ce)===N.type)?(N=h(N,L.props),Xr(N,L),N.return=D,N):(N=To(L.type,L.key,L.props,null,D.mode,$),Xr(N,L),N.return=D,N)}function z(D,N,L,$){return N===null||N.tag!==4||N.stateNode.containerInfo!==L.containerInfo||N.stateNode.implementation!==L.implementation?(N=ou(L,D.mode,$),N.return=D,N):(N=h(N,L.children||[]),N.return=D,N)}function H(D,N,L,$,ce){return N===null||N.tag!==7?(N=Wi(L,D.mode,$,ce),N.return=D,N):(N=h(N,L),N.return=D,N)}function F(D,N,L){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=su(""+N,D.mode,L),N.return=D,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case w:return L=To(N.type,N.key,N.props,null,D.mode,L),Xr(L,N),L.return=D,L;case S:return N=ou(N,D.mode,L),N.return=D,N;case X:return N=ta(N),F(D,N,L)}if(ge(N)||oe(N))return N=Wi(N,D.mode,L,null),N.return=D,N;if(typeof N.then=="function")return F(D,Do(N),L);if(N.$$typeof===A)return F(D,Ao(D,N),L);Mo(D,N)}return null}function U(D,N,L,$){var ce=N!==null?N.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return ce!==null?null:j(D,N,""+L,$);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case w:return L.key===ce?C(D,N,L,$):null;case S:return L.key===ce?z(D,N,L,$):null;case X:return L=ta(L),U(D,N,L,$)}if(ge(L)||oe(L))return ce!==null?null:H(D,N,L,$,null);if(typeof L.then=="function")return U(D,N,Do(L),$);if(L.$$typeof===A)return U(D,N,Ao(D,L),$);Mo(D,L)}return null}function P(D,N,L,$,ce){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return D=D.get(L)||null,j(N,D,""+$,ce);if(typeof $=="object"&&$!==null){switch($.$$typeof){case w:return D=D.get($.key===null?L:$.key)||null,C(N,D,$,ce);case S:return D=D.get($.key===null?L:$.key)||null,z(N,D,$,ce);case X:return $=ta($),P(D,N,L,$,ce)}if(ge($)||oe($))return D=D.get(L)||null,H(N,D,$,ce,null);if(typeof $.then=="function")return P(D,N,L,Do($),ce);if($.$$typeof===A)return P(D,N,L,Ao(N,$),ce);Mo(N,$)}return null}function ne(D,N,L,$){for(var ce=null,Re=null,se=N,ve=N=0,ke=null;se!==null&&ve<L.length;ve++){se.index>ve?(ke=se,se=null):ke=se.sibling;var Ne=U(D,se,L[ve],$);if(Ne===null){se===null&&(se=ke);break}n&&se&&Ne.alternate===null&&i(D,se),N=p(Ne,N,ve),Re===null?ce=Ne:Re.sibling=Ne,Re=Ne,se=ke}if(ve===L.length)return s(D,se),Ee&&qn(D,ve),ce;if(se===null){for(;ve<L.length;ve++)se=F(D,L[ve],$),se!==null&&(N=p(se,N,ve),Re===null?ce=se:Re.sibling=se,Re=se);return Ee&&qn(D,ve),ce}for(se=l(se);ve<L.length;ve++)ke=P(se,D,ve,L[ve],$),ke!==null&&(n&&ke.alternate!==null&&se.delete(ke.key===null?ve:ke.key),N=p(ke,N,ve),Re===null?ce=ke:Re.sibling=ke,Re=ke);return n&&se.forEach(function(Li){return i(D,Li)}),Ee&&qn(D,ve),ce}function ue(D,N,L,$){if(L==null)throw Error(r(151));for(var ce=null,Re=null,se=N,ve=N=0,ke=null,Ne=L.next();se!==null&&!Ne.done;ve++,Ne=L.next()){se.index>ve?(ke=se,se=null):ke=se.sibling;var Li=U(D,se,Ne.value,$);if(Li===null){se===null&&(se=ke);break}n&&se&&Li.alternate===null&&i(D,se),N=p(Li,N,ve),Re===null?ce=Li:Re.sibling=Li,Re=Li,se=ke}if(Ne.done)return s(D,se),Ee&&qn(D,ve),ce;if(se===null){for(;!Ne.done;ve++,Ne=L.next())Ne=F(D,Ne.value,$),Ne!==null&&(N=p(Ne,N,ve),Re===null?ce=Ne:Re.sibling=Ne,Re=Ne);return Ee&&qn(D,ve),ce}for(se=l(se);!Ne.done;ve++,Ne=L.next())Ne=P(se,D,ve,Ne.value,$),Ne!==null&&(n&&Ne.alternate!==null&&se.delete(Ne.key===null?ve:Ne.key),N=p(Ne,N,ve),Re===null?ce=Ne:Re.sibling=Ne,Re=Ne);return n&&se.forEach(function(C5){return i(D,C5)}),Ee&&qn(D,ve),ce}function Ue(D,N,L,$){if(typeof L=="object"&&L!==null&&L.type===T&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case w:e:{for(var ce=L.key;N!==null;){if(N.key===ce){if(ce=L.type,ce===T){if(N.tag===7){s(D,N.sibling),$=h(N,L.props.children),$.return=D,D=$;break e}}else if(N.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===X&&ta(ce)===N.type){s(D,N.sibling),$=h(N,L.props),Xr($,L),$.return=D,D=$;break e}s(D,N);break}else i(D,N);N=N.sibling}L.type===T?($=Wi(L.props.children,D.mode,$,L.key),$.return=D,D=$):($=To(L.type,L.key,L.props,null,D.mode,$),Xr($,L),$.return=D,D=$)}return b(D);case S:e:{for(ce=L.key;N!==null;){if(N.key===ce)if(N.tag===4&&N.stateNode.containerInfo===L.containerInfo&&N.stateNode.implementation===L.implementation){s(D,N.sibling),$=h(N,L.children||[]),$.return=D,D=$;break e}else{s(D,N);break}else i(D,N);N=N.sibling}$=ou(L,D.mode,$),$.return=D,D=$}return b(D);case X:return L=ta(L),Ue(D,N,L,$)}if(ge(L))return ne(D,N,L,$);if(oe(L)){if(ce=oe(L),typeof ce!="function")throw Error(r(150));return L=ce.call(L),ue(D,N,L,$)}if(typeof L.then=="function")return Ue(D,N,Do(L),$);if(L.$$typeof===A)return Ue(D,N,Ao(D,L),$);Mo(D,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,N!==null&&N.tag===6?(s(D,N.sibling),$=h(N,L),$.return=D,D=$):(s(D,N),$=su(L,D.mode,$),$.return=D,D=$),b(D)):s(D,N)}return function(D,N,L,$){try{Yr=0;var ce=Ue(D,N,L,$);return Ia=null,ce}catch(se){if(se===$a||se===No)throw se;var Re=$t(29,se,null,D.mode);return Re.lanes=$,Re.return=D,Re}finally{}}}var ia=hp(!0),fp=hp(!1),vi=!1;function bu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xu(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function bi(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function xi(n,i,s){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(Oe&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=ko(n),Wm(n,null,s),i}return _o(n,l,i,s),ko(n)}function Wr(n,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=n.pendingLanes,s|=l,i.lanes=s,am(n,s)}}function wu(n,i){var s=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var h=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var b={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};p===null?h=p=b:p=p.next=b,s=s.next}while(s!==null);p===null?h=p=i:p=p.next=i}else h=p=i;s={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=i:n.next=i,s.lastBaseUpdate=i}var Su=!1;function Jr(){if(Su){var n=Ha;if(n!==null)throw n}}function Qr(n,i,s,l){Su=!1;var h=n.updateQueue;vi=!1;var p=h.firstBaseUpdate,b=h.lastBaseUpdate,j=h.shared.pending;if(j!==null){h.shared.pending=null;var C=j,z=C.next;C.next=null,b===null?p=z:b.next=z,b=C;var H=n.alternate;H!==null&&(H=H.updateQueue,j=H.lastBaseUpdate,j!==b&&(j===null?H.firstBaseUpdate=z:j.next=z,H.lastBaseUpdate=C))}if(p!==null){var F=h.baseState;b=0,H=z=C=null,j=p;do{var U=j.lane&-536870913,P=U!==j.lane;if(P?(_e&U)===U:(l&U)===U){U!==0&&U===Va&&(Su=!0),H!==null&&(H=H.next={lane:0,tag:j.tag,payload:j.payload,callback:null,next:null});e:{var ne=n,ue=j;U=i;var Ue=s;switch(ue.tag){case 1:if(ne=ue.payload,typeof ne=="function"){F=ne.call(Ue,F,U);break e}F=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=ue.payload,U=typeof ne=="function"?ne.call(Ue,F,U):ne,U==null)break e;F=v({},F,U);break e;case 2:vi=!0}}U=j.callback,U!==null&&(n.flags|=64,P&&(n.flags|=8192),P=h.callbacks,P===null?h.callbacks=[U]:P.push(U))}else P={lane:U,tag:j.tag,payload:j.payload,callback:j.callback,next:null},H===null?(z=H=P,C=F):H=H.next=P,b|=U;if(j=j.next,j===null){if(j=h.shared.pending,j===null)break;P=j,j=P.next,P.next=null,h.lastBaseUpdate=P,h.shared.pending=null}}while(!0);H===null&&(C=F),h.baseState=C,h.firstBaseUpdate=z,h.lastBaseUpdate=H,p===null&&(h.shared.lanes=0),ki|=b,n.lanes=b,n.memoizedState=F}}function mp(n,i){if(typeof n!="function")throw Error(r(191,n));n.call(i)}function pp(n,i){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)mp(s[n],i)}var qa=R(null),Lo=R(0);function gp(n,i){n=ti,ee(Lo,n),ee(qa,i),ti=n|i.baseLanes}function ju(){ee(Lo,ti),ee(qa,qa.current)}function _u(){ti=Lo.current,I(qa),I(Lo)}var It=R(null),sn=null;function wi(n){var i=n.alternate;ee(Ze,Ze.current&1),ee(It,n),sn===null&&(i===null||qa.current!==null||i.memoizedState!==null)&&(sn=n)}function ku(n){ee(Ze,Ze.current),ee(It,n),sn===null&&(sn=n)}function yp(n){n.tag===22?(ee(Ze,Ze.current),ee(It,n),sn===null&&(sn=n)):Si()}function Si(){ee(Ze,Ze.current),ee(It,It.current)}function qt(n){I(It),sn===n&&(sn=null),I(Ze)}var Ze=R(0);function zo(n){for(var i=n;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Nd(s)||Od(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Kn=0,ye=null,Le=null,at=null,Uo=!1,Fa=!1,aa=!1,Bo=0,Zr=0,Ga=null,v2=0;function Xe(){throw Error(r(321))}function Tu(n,i){if(i===null)return!1;for(var s=0;s<i.length&&s<n.length;s++)if(!Ht(n[s],i[s]))return!1;return!0}function Eu(n,i,s,l,h,p){return Kn=p,ye=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,V.H=n===null||n.memoizedState===null?eg:$u,aa=!1,p=s(l,h),aa=!1,Fa&&(p=bp(i,s,l,h)),vp(n),p}function vp(n){V.H=ns;var i=Le!==null&&Le.next!==null;if(Kn=0,at=Le=ye=null,Uo=!1,Zr=0,Ga=null,i)throw Error(r(300));n===null||rt||(n=n.dependencies,n!==null&&Co(n)&&(rt=!0))}function bp(n,i,s,l){ye=n;var h=0;do{if(Fa&&(Ga=null),Zr=0,Fa=!1,25<=h)throw Error(r(301));if(h+=1,at=Le=null,n.updateQueue!=null){var p=n.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}V.H=tg,p=i(s,l)}while(Fa);return p}function b2(){var n=V.H,i=n.useState()[0];return i=typeof i.then=="function"?es(i):i,n=n.useState()[0],(Le!==null?Le.memoizedState:null)!==n&&(ye.flags|=1024),i}function Cu(){var n=Bo!==0;return Bo=0,n}function Au(n,i,s){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~s}function Ru(n){if(Uo){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Uo=!1}Kn=0,at=Le=ye=null,Fa=!1,Zr=Bo=0,Ga=null}function kt(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return at===null?ye.memoizedState=at=n:at=at.next=n,at}function et(){if(Le===null){var n=ye.alternate;n=n!==null?n.memoizedState:null}else n=Le.next;var i=at===null?ye.memoizedState:at.next;if(i!==null)at=i,Le=n;else{if(n===null)throw ye.alternate===null?Error(r(467)):Error(r(310));Le=n,n={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},at===null?ye.memoizedState=at=n:at=at.next=n}return at}function Po(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function es(n){var i=Zr;return Zr+=1,Ga===null&&(Ga=[]),n=cp(Ga,n,i),i=ye,(at===null?i.memoizedState:at.next)===null&&(i=i.alternate,V.H=i===null||i.memoizedState===null?eg:$u),n}function Vo(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return es(n);if(n.$$typeof===A)return vt(n)}throw Error(r(438,String(n)))}function Nu(n){var i=null,s=ye.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=ye.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Po(),ye.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(n),l=0;l<n;l++)s[l]=Y;return i.index++,s}function Yn(n,i){return typeof i=="function"?i(n):i}function Ho(n){var i=et();return Ou(i,Le,n)}function Ou(n,i,s){var l=n.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var h=n.baseQueue,p=l.pending;if(p!==null){if(h!==null){var b=h.next;h.next=p.next,p.next=b}i.baseQueue=h=p,l.pending=null}if(p=n.baseState,h===null)n.memoizedState=p;else{i=h.next;var j=b=null,C=null,z=i,H=!1;do{var F=z.lane&-536870913;if(F!==z.lane?(_e&F)===F:(Kn&F)===F){var U=z.revertLane;if(U===0)C!==null&&(C=C.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),F===Va&&(H=!0);else if((Kn&U)===U){z=z.next,U===Va&&(H=!0);continue}else F={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},C===null?(j=C=F,b=p):C=C.next=F,ye.lanes|=U,ki|=U;F=z.action,aa&&s(p,F),p=z.hasEagerState?z.eagerState:s(p,F)}else U={lane:F,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},C===null?(j=C=U,b=p):C=C.next=U,ye.lanes|=F,ki|=F;z=z.next}while(z!==null&&z!==i);if(C===null?b=p:C.next=j,!Ht(p,n.memoizedState)&&(rt=!0,H&&(s=Ha,s!==null)))throw s;n.memoizedState=p,n.baseState=b,n.baseQueue=C,l.lastRenderedState=p}return h===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function Du(n){var i=et(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=n;var l=s.dispatch,h=s.pending,p=i.memoizedState;if(h!==null){s.pending=null;var b=h=h.next;do p=n(p,b.action),b=b.next;while(b!==h);Ht(p,i.memoizedState)||(rt=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),s.lastRenderedState=p}return[p,l]}function xp(n,i,s){var l=ye,h=et(),p=Ee;if(p){if(s===void 0)throw Error(r(407));s=s()}else s=i();var b=!Ht((Le||h).memoizedState,s);if(b&&(h.memoizedState=s,rt=!0),h=h.queue,zu(jp.bind(null,l,h,n),[n]),h.getSnapshot!==i||b||at!==null&&at.memoizedState.tag&1){if(l.flags|=2048,Ka(9,{destroy:void 0},Sp.bind(null,l,h,s,i),null),Be===null)throw Error(r(349));p||(Kn&127)!==0||wp(l,i,s)}return s}function wp(n,i,s){n.flags|=16384,n={getSnapshot:i,value:s},i=ye.updateQueue,i===null?(i=Po(),ye.updateQueue=i,i.stores=[n]):(s=i.stores,s===null?i.stores=[n]:s.push(n))}function Sp(n,i,s,l){i.value=s,i.getSnapshot=l,_p(i)&&kp(n)}function jp(n,i,s){return s(function(){_p(i)&&kp(n)})}function _p(n){var i=n.getSnapshot;n=n.value;try{var s=i();return!Ht(n,s)}catch{return!0}}function kp(n){var i=Xi(n,2);i!==null&&Lt(i,n,2)}function Mu(n){var i=kt();if(typeof n=="function"){var s=n;if(n=s(),aa){di(!0);try{s()}finally{di(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:n},i}function Tp(n,i,s,l){return n.baseState=s,Ou(n,Le,typeof l=="function"?l:Yn)}function x2(n,i,s,l,h){if(qo(n))throw Error(r(485));if(n=i.action,n!==null){var p={payload:h,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){p.listeners.push(b)}};V.T!==null?s(!0):p.isTransition=!1,l(p),s=i.pending,s===null?(p.next=i.pending=p,Ep(i,p)):(p.next=s.next,i.pending=s.next=p)}}function Ep(n,i){var s=i.action,l=i.payload,h=n.state;if(i.isTransition){var p=V.T,b={};V.T=b;try{var j=s(h,l),C=V.S;C!==null&&C(b,j),Cp(n,i,j)}catch(z){Lu(n,i,z)}finally{p!==null&&b.types!==null&&(p.types=b.types),V.T=p}}else try{p=s(h,l),Cp(n,i,p)}catch(z){Lu(n,i,z)}}function Cp(n,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Ap(n,i,l)},function(l){return Lu(n,i,l)}):Ap(n,i,s)}function Ap(n,i,s){i.status="fulfilled",i.value=s,Rp(i),n.state=s,i=n.pending,i!==null&&(s=i.next,s===i?n.pending=null:(s=s.next,i.next=s,Ep(n,s)))}function Lu(n,i,s){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,Rp(i),i=i.next;while(i!==l)}n.action=null}function Rp(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function Np(n,i){return i}function Op(n,i){if(Ee){var s=Be.formState;if(s!==null){e:{var l=ye;if(Ee){if($e){t:{for(var h=$e,p=rn;h.nodeType!==8;){if(!p){h=null;break t}if(h=on(h.nextSibling),h===null){h=null;break t}}p=h.data,h=p==="F!"||p==="F"?h:null}if(h){$e=on(h.nextSibling),l=h.data==="F!";break e}}gi(l)}l=!1}l&&(i=s[0])}}return s=kt(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Np,lastRenderedState:i},s.queue=l,s=Jp.bind(null,ye,l),l.dispatch=s,l=Mu(!1),p=Hu.bind(null,ye,!1,l.queue),l=kt(),h={state:i,dispatch:null,action:n,pending:null},l.queue=h,s=x2.bind(null,ye,h,p,s),h.dispatch=s,l.memoizedState=n,[i,s,!1]}function Dp(n){var i=et();return Mp(i,Le,n)}function Mp(n,i,s){if(i=Ou(n,i,Np)[0],n=Ho(Yn)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=es(i)}catch(b){throw b===$a?No:b}else l=i;i=et();var h=i.queue,p=h.dispatch;return s!==i.memoizedState&&(ye.flags|=2048,Ka(9,{destroy:void 0},w2.bind(null,h,s),null)),[l,p,n]}function w2(n,i){n.action=i}function Lp(n){var i=et(),s=Le;if(s!==null)return Mp(i,s,n);et(),i=i.memoizedState,s=et();var l=s.queue.dispatch;return s.memoizedState=n,[i,l,!1]}function Ka(n,i,s,l){return n={tag:n,create:s,deps:l,inst:i,next:null},i=ye.updateQueue,i===null&&(i=Po(),ye.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=n.next=n:(l=s.next,s.next=n,n.next=l,i.lastEffect=n),n}function zp(){return et().memoizedState}function $o(n,i,s,l){var h=kt();ye.flags|=n,h.memoizedState=Ka(1|i,{destroy:void 0},s,l===void 0?null:l)}function Io(n,i,s,l){var h=et();l=l===void 0?null:l;var p=h.memoizedState.inst;Le!==null&&l!==null&&Tu(l,Le.memoizedState.deps)?h.memoizedState=Ka(i,p,s,l):(ye.flags|=n,h.memoizedState=Ka(1|i,p,s,l))}function Up(n,i){$o(8390656,8,n,i)}function zu(n,i){Io(2048,8,n,i)}function S2(n){ye.flags|=4;var i=ye.updateQueue;if(i===null)i=Po(),ye.updateQueue=i,i.events=[n];else{var s=i.events;s===null?i.events=[n]:s.push(n)}}function Bp(n){var i=et().memoizedState;return S2({ref:i,nextImpl:n}),function(){if((Oe&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}function Pp(n,i){return Io(4,2,n,i)}function Vp(n,i){return Io(4,4,n,i)}function Hp(n,i){if(typeof i=="function"){n=n();var s=i(n);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function $p(n,i,s){s=s!=null?s.concat([n]):null,Io(4,4,Hp.bind(null,i,n),s)}function Uu(){}function Ip(n,i){var s=et();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Tu(i,l[1])?l[0]:(s.memoizedState=[n,i],n)}function qp(n,i){var s=et();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Tu(i,l[1]))return l[0];if(l=n(),aa){di(!0);try{n()}finally{di(!1)}}return s.memoizedState=[l,i],l}function Bu(n,i,s){return s===void 0||(Kn&1073741824)!==0&&(_e&261930)===0?n.memoizedState=i:(n.memoizedState=s,n=Fg(),ye.lanes|=n,ki|=n,s)}function Fp(n,i,s,l){return Ht(s,i)?s:qa.current!==null?(n=Bu(n,s,l),Ht(n,i)||(rt=!0),n):(Kn&42)===0||(Kn&1073741824)!==0&&(_e&261930)===0?(rt=!0,n.memoizedState=s):(n=Fg(),ye.lanes|=n,ki|=n,i)}function Gp(n,i,s,l,h){var p=Q.p;Q.p=p!==0&&8>p?p:8;var b=V.T,j={};V.T=j,Hu(n,!1,i,s);try{var C=h(),z=V.S;if(z!==null&&z(j,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var H=y2(C,l);ts(n,i,H,Kt(n))}else ts(n,i,l,Kt(n))}catch(F){ts(n,i,{then:function(){},status:"rejected",reason:F},Kt())}finally{Q.p=p,b!==null&&j.types!==null&&(b.types=j.types),V.T=b}}function j2(){}function Pu(n,i,s,l){if(n.tag!==5)throw Error(r(476));var h=Kp(n).queue;Gp(n,h,i,te,s===null?j2:function(){return Yp(n),s(l)})}function Kp(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:te},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:s},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function Yp(n){var i=Kp(n);i.next===null&&(i=n.alternate.memoizedState),ts(n,i.next.queue,{},Kt())}function Vu(){return vt(vs)}function Xp(){return et().memoizedState}function Wp(){return et().memoizedState}function _2(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var s=Kt();n=bi(s);var l=xi(i,n,s);l!==null&&(Lt(l,i,s),Wr(l,i,s)),i={cache:pu()},n.payload=i;return}i=i.return}}function k2(n,i,s){var l=Kt();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},qo(n)?Qp(i,s):(s=au(n,i,s,l),s!==null&&(Lt(s,n,l),Zp(s,i,l)))}function Jp(n,i,s){var l=Kt();ts(n,i,s,l)}function ts(n,i,s,l){var h={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(qo(n))Qp(i,h);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var b=i.lastRenderedState,j=p(b,s);if(h.hasEagerState=!0,h.eagerState=j,Ht(j,b))return _o(n,i,h,0),Be===null&&jo(),!1}catch{}finally{}if(s=au(n,i,h,l),s!==null)return Lt(s,n,l),Zp(s,i,l),!0}return!1}function Hu(n,i,s,l){if(l={lane:2,revertLane:bd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},qo(n)){if(i)throw Error(r(479))}else i=au(n,s,l,2),i!==null&&Lt(i,n,2)}function qo(n){var i=n.alternate;return n===ye||i!==null&&i===ye}function Qp(n,i){Fa=Uo=!0;var s=n.pending;s===null?i.next=i:(i.next=s.next,s.next=i),n.pending=i}function Zp(n,i,s){if((s&4194048)!==0){var l=i.lanes;l&=n.pendingLanes,s|=l,i.lanes=s,am(n,s)}}var ns={readContext:vt,use:Vo,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useLayoutEffect:Xe,useInsertionEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useSyncExternalStore:Xe,useId:Xe,useHostTransitionStatus:Xe,useFormState:Xe,useActionState:Xe,useOptimistic:Xe,useMemoCache:Xe,useCacheRefresh:Xe};ns.useEffectEvent=Xe;var eg={readContext:vt,use:Vo,useCallback:function(n,i){return kt().memoizedState=[n,i===void 0?null:i],n},useContext:vt,useEffect:Up,useImperativeHandle:function(n,i,s){s=s!=null?s.concat([n]):null,$o(4194308,4,Hp.bind(null,i,n),s)},useLayoutEffect:function(n,i){return $o(4194308,4,n,i)},useInsertionEffect:function(n,i){$o(4,2,n,i)},useMemo:function(n,i){var s=kt();i=i===void 0?null:i;var l=n();if(aa){di(!0);try{n()}finally{di(!1)}}return s.memoizedState=[l,i],l},useReducer:function(n,i,s){var l=kt();if(s!==void 0){var h=s(i);if(aa){di(!0);try{s(i)}finally{di(!1)}}}else h=i;return l.memoizedState=l.baseState=h,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:h},l.queue=n,n=n.dispatch=k2.bind(null,ye,n),[l.memoizedState,n]},useRef:function(n){var i=kt();return n={current:n},i.memoizedState=n},useState:function(n){n=Mu(n);var i=n.queue,s=Jp.bind(null,ye,i);return i.dispatch=s,[n.memoizedState,s]},useDebugValue:Uu,useDeferredValue:function(n,i){var s=kt();return Bu(s,n,i)},useTransition:function(){var n=Mu(!1);return n=Gp.bind(null,ye,n.queue,!0,!1),kt().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,s){var l=ye,h=kt();if(Ee){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),Be===null)throw Error(r(349));(_e&127)!==0||wp(l,i,s)}h.memoizedState=s;var p={value:s,getSnapshot:i};return h.queue=p,Up(jp.bind(null,l,p,n),[n]),l.flags|=2048,Ka(9,{destroy:void 0},Sp.bind(null,l,p,s,i),null),s},useId:function(){var n=kt(),i=Be.identifierPrefix;if(Ee){var s=An,l=Cn;s=(l&~(1<<32-Vt(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Bo++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=v2++,i="_"+i+"r_"+s.toString(32)+"_";return n.memoizedState=i},useHostTransitionStatus:Vu,useFormState:Op,useActionState:Op,useOptimistic:function(n){var i=kt();i.memoizedState=i.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Hu.bind(null,ye,!0,s),s.dispatch=i,[n,i]},useMemoCache:Nu,useCacheRefresh:function(){return kt().memoizedState=_2.bind(null,ye)},useEffectEvent:function(n){var i=kt(),s={impl:n};return i.memoizedState=s,function(){if((Oe&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},$u={readContext:vt,use:Vo,useCallback:Ip,useContext:vt,useEffect:zu,useImperativeHandle:$p,useInsertionEffect:Pp,useLayoutEffect:Vp,useMemo:qp,useReducer:Ho,useRef:zp,useState:function(){return Ho(Yn)},useDebugValue:Uu,useDeferredValue:function(n,i){var s=et();return Fp(s,Le.memoizedState,n,i)},useTransition:function(){var n=Ho(Yn)[0],i=et().memoizedState;return[typeof n=="boolean"?n:es(n),i]},useSyncExternalStore:xp,useId:Xp,useHostTransitionStatus:Vu,useFormState:Dp,useActionState:Dp,useOptimistic:function(n,i){var s=et();return Tp(s,Le,n,i)},useMemoCache:Nu,useCacheRefresh:Wp};$u.useEffectEvent=Bp;var tg={readContext:vt,use:Vo,useCallback:Ip,useContext:vt,useEffect:zu,useImperativeHandle:$p,useInsertionEffect:Pp,useLayoutEffect:Vp,useMemo:qp,useReducer:Du,useRef:zp,useState:function(){return Du(Yn)},useDebugValue:Uu,useDeferredValue:function(n,i){var s=et();return Le===null?Bu(s,n,i):Fp(s,Le.memoizedState,n,i)},useTransition:function(){var n=Du(Yn)[0],i=et().memoizedState;return[typeof n=="boolean"?n:es(n),i]},useSyncExternalStore:xp,useId:Xp,useHostTransitionStatus:Vu,useFormState:Lp,useActionState:Lp,useOptimistic:function(n,i){var s=et();return Le!==null?Tp(s,Le,n,i):(s.baseState=n,[n,s.queue.dispatch])},useMemoCache:Nu,useCacheRefresh:Wp};tg.useEffectEvent=Bp;function Iu(n,i,s,l){i=n.memoizedState,s=s(l,i),s=s==null?i:v({},i,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var qu={enqueueSetState:function(n,i,s){n=n._reactInternals;var l=Kt(),h=bi(l);h.payload=i,s!=null&&(h.callback=s),i=xi(n,h,l),i!==null&&(Lt(i,n,l),Wr(i,n,l))},enqueueReplaceState:function(n,i,s){n=n._reactInternals;var l=Kt(),h=bi(l);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=xi(n,h,l),i!==null&&(Lt(i,n,l),Wr(i,n,l))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var s=Kt(),l=bi(s);l.tag=2,i!=null&&(l.callback=i),i=xi(n,l,s),i!==null&&(Lt(i,n,s),Wr(i,n,s))}};function ng(n,i,s,l,h,p,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,p,b):i.prototype&&i.prototype.isPureReactComponent?!$r(s,l)||!$r(h,p):!0}function ig(n,i,s,l){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==n&&qu.enqueueReplaceState(i,i.state,null)}function ra(n,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(n=n.defaultProps){s===i&&(s=v({},s));for(var h in n)s[h]===void 0&&(s[h]=n[h])}return s}function ag(n){So(n)}function rg(n){console.error(n)}function sg(n){So(n)}function Fo(n,i){try{var s=n.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function og(n,i,s){try{var l=n.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Fu(n,i,s){return s=bi(s),s.tag=3,s.payload={element:null},s.callback=function(){Fo(n,i)},s}function lg(n){return n=bi(n),n.tag=3,n}function cg(n,i,s,l){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var p=l.value;n.payload=function(){return h(p)},n.callback=function(){og(i,s,l)}}var b=s.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(n.callback=function(){og(i,s,l),typeof h!="function"&&(Ti===null?Ti=new Set([this]):Ti.add(this));var j=l.stack;this.componentDidCatch(l.value,{componentStack:j!==null?j:""})})}function T2(n,i,s,l,h){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Pa(i,s,h,!0),s=It.current,s!==null){switch(s.tag){case 31:case 13:return sn===null?il():s.alternate===null&&We===0&&(We=3),s.flags&=-257,s.flags|=65536,s.lanes=h,l===Oo?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),gd(n,l,h)),!1;case 22:return s.flags|=65536,l===Oo?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),gd(n,l,h)),!1}throw Error(r(435,s.tag))}return gd(n,l,h),il(),!1}if(Ee)return i=It.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==uu&&(n=Error(r(422),{cause:l}),Fr(tn(n,s)))):(l!==uu&&(i=Error(r(423),{cause:l}),Fr(tn(i,s))),n=n.current.alternate,n.flags|=65536,h&=-h,n.lanes|=h,l=tn(l,s),h=Fu(n.stateNode,l,h),wu(n,h),We!==4&&(We=2)),!1;var p=Error(r(520),{cause:l});if(p=tn(p,s),us===null?us=[p]:us.push(p),We!==4&&(We=2),i===null)return!0;l=tn(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,n=h&-h,s.lanes|=n,n=Fu(s.stateNode,l,n),wu(s,n),!1;case 1:if(i=s.type,p=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ti===null||!Ti.has(p))))return s.flags|=65536,h&=-h,s.lanes|=h,h=lg(h),cg(h,n,s,l),wu(s,h),!1}s=s.return}while(s!==null);return!1}var Gu=Error(r(461)),rt=!1;function bt(n,i,s,l){i.child=n===null?fp(i,null,s,l):ia(i,n.child,s,l)}function ug(n,i,s,l,h){s=s.render;var p=i.ref;if("ref"in l){var b={};for(var j in l)j!=="ref"&&(b[j]=l[j])}else b=l;return Zi(i),l=Eu(n,i,s,b,p,h),j=Cu(),n!==null&&!rt?(Au(n,i,h),Xn(n,i,h)):(Ee&&j&&lu(i),i.flags|=1,bt(n,i,l,h),i.child)}function dg(n,i,s,l,h){if(n===null){var p=s.type;return typeof p=="function"&&!ru(p)&&p.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=p,hg(n,i,p,l,h)):(n=To(s.type,null,l,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,!ed(n,h)){var b=p.memoizedProps;if(s=s.compare,s=s!==null?s:$r,s(b,l)&&n.ref===i.ref)return Xn(n,i,h)}return i.flags|=1,n=In(p,l),n.ref=i.ref,n.return=i,i.child=n}function hg(n,i,s,l,h){if(n!==null){var p=n.memoizedProps;if($r(p,l)&&n.ref===i.ref)if(rt=!1,i.pendingProps=l=p,ed(n,h))(n.flags&131072)!==0&&(rt=!0);else return i.lanes=n.lanes,Xn(n,i,h)}return Ku(n,i,s,l,h)}function fg(n,i,s,l){var h=l.children,p=n!==null?n.memoizedState:null;if(n===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(p=p!==null?p.baseLanes|s:s,n!==null){for(l=i.child=n.child,h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~p}else l=0,i.child=null;return mg(n,i,p,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&Ro(i,p!==null?p.cachePool:null),p!==null?gp(i,p):ju(),yp(i);else return l=i.lanes=536870912,mg(n,i,p!==null?p.baseLanes|s:s,s,l)}else p!==null?(Ro(i,p.cachePool),gp(i,p),Si(),i.memoizedState=null):(n!==null&&Ro(i,null),ju(),Si());return bt(n,i,h,s),i.child}function is(n,i){return n!==null&&n.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function mg(n,i,s,l,h){var p=yu();return p=p===null?null:{parent:it._currentValue,pool:p},i.memoizedState={baseLanes:s,cachePool:p},n!==null&&Ro(i,null),ju(),yp(i),n!==null&&Pa(n,i,l,!0),i.childLanes=h,null}function Go(n,i){return i=Yo({mode:i.mode,children:i.children},n.mode),i.ref=n.ref,n.child=i,i.return=n,i}function pg(n,i,s){return ia(i,n.child,null,s),n=Go(i,i.pendingProps),n.flags|=2,qt(i),i.memoizedState=null,n}function E2(n,i,s){var l=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,n===null){if(Ee){if(l.mode==="hidden")return n=Go(i,l),i.lanes=536870912,is(null,n);if(ku(i),(n=$e)?(n=E0(n,rn),n=n!==null&&n.data==="&"?n:null,n!==null&&(i.memoizedState={dehydrated:n,treeContext:mi!==null?{id:Cn,overflow:An}:null,retryLane:536870912,hydrationErrors:null},s=Qm(n),s.return=i,i.child=s,yt=i,$e=null)):n=null,n===null)throw gi(i);return i.lanes=536870912,null}return Go(i,l)}var p=n.memoizedState;if(p!==null){var b=p.dehydrated;if(ku(i),h)if(i.flags&256)i.flags&=-257,i=pg(n,i,s);else if(i.memoizedState!==null)i.child=n.child,i.flags|=128,i=null;else throw Error(r(558));else if(rt||Pa(n,i,s,!1),h=(s&n.childLanes)!==0,rt||h){if(l=Be,l!==null&&(b=rm(l,s),b!==0&&b!==p.retryLane))throw p.retryLane=b,Xi(n,b),Lt(l,n,b),Gu;il(),i=pg(n,i,s)}else n=p.treeContext,$e=on(b.nextSibling),yt=i,Ee=!0,pi=null,rn=!1,n!==null&&tp(i,n),i=Go(i,l),i.flags|=4096;return i}return n=In(n.child,{mode:l.mode,children:l.children}),n.ref=i.ref,i.child=n,n.return=i,n}function Ko(n,i){var s=i.ref;if(s===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(n===null||n.ref!==s)&&(i.flags|=4194816)}}function Ku(n,i,s,l,h){return Zi(i),s=Eu(n,i,s,l,void 0,h),l=Cu(),n!==null&&!rt?(Au(n,i,h),Xn(n,i,h)):(Ee&&l&&lu(i),i.flags|=1,bt(n,i,s,h),i.child)}function gg(n,i,s,l,h,p){return Zi(i),i.updateQueue=null,s=bp(i,l,s,h),vp(n),l=Cu(),n!==null&&!rt?(Au(n,i,p),Xn(n,i,p)):(Ee&&l&&lu(i),i.flags|=1,bt(n,i,s,p),i.child)}function yg(n,i,s,l,h){if(Zi(i),i.stateNode===null){var p=La,b=s.contextType;typeof b=="object"&&b!==null&&(p=vt(b)),p=new s(l,p),i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=qu,i.stateNode=p,p._reactInternals=i,p=i.stateNode,p.props=l,p.state=i.memoizedState,p.refs={},bu(i),b=s.contextType,p.context=typeof b=="object"&&b!==null?vt(b):La,p.state=i.memoizedState,b=s.getDerivedStateFromProps,typeof b=="function"&&(Iu(i,s,b,l),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(b=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),b!==p.state&&qu.enqueueReplaceState(p,p.state,null),Qr(i,l,p,h),Jr(),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(n===null){p=i.stateNode;var j=i.memoizedProps,C=ra(s,j);p.props=C;var z=p.context,H=s.contextType;b=La,typeof H=="object"&&H!==null&&(b=vt(H));var F=s.getDerivedStateFromProps;H=typeof F=="function"||typeof p.getSnapshotBeforeUpdate=="function",j=i.pendingProps!==j,H||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(j||z!==b)&&ig(i,p,l,b),vi=!1;var U=i.memoizedState;p.state=U,Qr(i,l,p,h),Jr(),z=i.memoizedState,j||U!==z||vi?(typeof F=="function"&&(Iu(i,s,F,l),z=i.memoizedState),(C=vi||ng(i,s,C,l,U,z,b))?(H||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(i.flags|=4194308)):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=z),p.props=l,p.state=z,p.context=b,l=C):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{p=i.stateNode,xu(n,i),b=i.memoizedProps,H=ra(s,b),p.props=H,F=i.pendingProps,U=p.context,z=s.contextType,C=La,typeof z=="object"&&z!==null&&(C=vt(z)),j=s.getDerivedStateFromProps,(z=typeof j=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(b!==F||U!==C)&&ig(i,p,l,C),vi=!1,U=i.memoizedState,p.state=U,Qr(i,l,p,h),Jr();var P=i.memoizedState;b!==F||U!==P||vi||n!==null&&n.dependencies!==null&&Co(n.dependencies)?(typeof j=="function"&&(Iu(i,s,j,l),P=i.memoizedState),(H=vi||ng(i,s,H,l,U,P,C)||n!==null&&n.dependencies!==null&&Co(n.dependencies))?(z||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,P,C),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,P,C)),typeof p.componentDidUpdate=="function"&&(i.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof p.componentDidUpdate!="function"||b===n.memoizedProps&&U===n.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&U===n.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=P),p.props=l,p.state=P,p.context=C,l=H):(typeof p.componentDidUpdate!="function"||b===n.memoizedProps&&U===n.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&U===n.memoizedState||(i.flags|=1024),l=!1)}return p=l,Ko(n,i),l=(i.flags&128)!==0,p||l?(p=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:p.render(),i.flags|=1,n!==null&&l?(i.child=ia(i,n.child,null,h),i.child=ia(i,null,s,h)):bt(n,i,s,h),i.memoizedState=p.state,n=i.child):n=Xn(n,i,h),n}function vg(n,i,s,l){return Ji(),i.flags|=256,bt(n,i,s,l),i.child}var Yu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xu(n){return{baseLanes:n,cachePool:op()}}function Wu(n,i,s){return n=n!==null?n.childLanes&~s:0,i&&(n|=Gt),n}function bg(n,i,s){var l=i.pendingProps,h=!1,p=(i.flags&128)!==0,b;if((b=p)||(b=n!==null&&n.memoizedState===null?!1:(Ze.current&2)!==0),b&&(h=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,n===null){if(Ee){if(h?wi(i):Si(),(n=$e)?(n=E0(n,rn),n=n!==null&&n.data!=="&"?n:null,n!==null&&(i.memoizedState={dehydrated:n,treeContext:mi!==null?{id:Cn,overflow:An}:null,retryLane:536870912,hydrationErrors:null},s=Qm(n),s.return=i,i.child=s,yt=i,$e=null)):n=null,n===null)throw gi(i);return Od(n)?i.lanes=32:i.lanes=536870912,null}var j=l.children;return l=l.fallback,h?(Si(),h=i.mode,j=Yo({mode:"hidden",children:j},h),l=Wi(l,h,s,null),j.return=i,l.return=i,j.sibling=l,i.child=j,l=i.child,l.memoizedState=Xu(s),l.childLanes=Wu(n,b,s),i.memoizedState=Yu,is(null,l)):(wi(i),Ju(i,j))}var C=n.memoizedState;if(C!==null&&(j=C.dehydrated,j!==null)){if(p)i.flags&256?(wi(i),i.flags&=-257,i=Qu(n,i,s)):i.memoizedState!==null?(Si(),i.child=n.child,i.flags|=128,i=null):(Si(),j=l.fallback,h=i.mode,l=Yo({mode:"visible",children:l.children},h),j=Wi(j,h,s,null),j.flags|=2,l.return=i,j.return=i,l.sibling=j,i.child=l,ia(i,n.child,null,s),l=i.child,l.memoizedState=Xu(s),l.childLanes=Wu(n,b,s),i.memoizedState=Yu,i=is(null,l));else if(wi(i),Od(j)){if(b=j.nextSibling&&j.nextSibling.dataset,b)var z=b.dgst;b=z,l=Error(r(419)),l.stack="",l.digest=b,Fr({value:l,source:null,stack:null}),i=Qu(n,i,s)}else if(rt||Pa(n,i,s,!1),b=(s&n.childLanes)!==0,rt||b){if(b=Be,b!==null&&(l=rm(b,s),l!==0&&l!==C.retryLane))throw C.retryLane=l,Xi(n,l),Lt(b,n,l),Gu;Nd(j)||il(),i=Qu(n,i,s)}else Nd(j)?(i.flags|=192,i.child=n.child,i=null):(n=C.treeContext,$e=on(j.nextSibling),yt=i,Ee=!0,pi=null,rn=!1,n!==null&&tp(i,n),i=Ju(i,l.children),i.flags|=4096);return i}return h?(Si(),j=l.fallback,h=i.mode,C=n.child,z=C.sibling,l=In(C,{mode:"hidden",children:l.children}),l.subtreeFlags=C.subtreeFlags&65011712,z!==null?j=In(z,j):(j=Wi(j,h,s,null),j.flags|=2),j.return=i,l.return=i,l.sibling=j,i.child=l,is(null,l),l=i.child,j=n.child.memoizedState,j===null?j=Xu(s):(h=j.cachePool,h!==null?(C=it._currentValue,h=h.parent!==C?{parent:C,pool:C}:h):h=op(),j={baseLanes:j.baseLanes|s,cachePool:h}),l.memoizedState=j,l.childLanes=Wu(n,b,s),i.memoizedState=Yu,is(n.child,l)):(wi(i),s=n.child,n=s.sibling,s=In(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,n!==null&&(b=i.deletions,b===null?(i.deletions=[n],i.flags|=16):b.push(n)),i.child=s,i.memoizedState=null,s)}function Ju(n,i){return i=Yo({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function Yo(n,i){return n=$t(22,n,null,i),n.lanes=0,n}function Qu(n,i,s){return ia(i,n.child,null,s),n=Ju(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function xg(n,i,s){n.lanes|=i;var l=n.alternate;l!==null&&(l.lanes|=i),fu(n.return,i,s)}function Zu(n,i,s,l,h,p){var b=n.memoizedState;b===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:h,treeForkCount:p}:(b.isBackwards=i,b.rendering=null,b.renderingStartTime=0,b.last=l,b.tail=s,b.tailMode=h,b.treeForkCount=p)}function wg(n,i,s){var l=i.pendingProps,h=l.revealOrder,p=l.tail;l=l.children;var b=Ze.current,j=(b&2)!==0;if(j?(b=b&1|2,i.flags|=128):b&=1,ee(Ze,b),bt(n,i,l,s),l=Ee?qr:0,!j&&n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&xg(n,s,i);else if(n.tag===19)xg(n,s,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(h){case"forwards":for(s=i.child,h=null;s!==null;)n=s.alternate,n!==null&&zo(n)===null&&(h=s),s=s.sibling;s=h,s===null?(h=i.child,i.child=null):(h=s.sibling,s.sibling=null),Zu(i,!1,h,s,p,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&zo(n)===null){i.child=h;break}n=h.sibling,h.sibling=s,s=h,h=n}Zu(i,!0,s,null,p,l);break;case"together":Zu(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function Xn(n,i,s){if(n!==null&&(i.dependencies=n.dependencies),ki|=i.lanes,(s&i.childLanes)===0)if(n!==null){if(Pa(n,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(r(153));if(i.child!==null){for(n=i.child,s=In(n,n.pendingProps),i.child=s,s.return=i;n.sibling!==null;)n=n.sibling,s=s.sibling=In(n,n.pendingProps),s.return=i;s.sibling=null}return i.child}function ed(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&Co(n)))}function C2(n,i,s){switch(i.tag){case 3:dt(i,i.stateNode.containerInfo),yi(i,it,n.memoizedState.cache),Ji();break;case 27:case 5:J(i);break;case 4:dt(i,i.stateNode.containerInfo);break;case 10:yi(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,ku(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(wi(i),i.flags|=128,null):(s&i.child.childLanes)!==0?bg(n,i,s):(wi(i),n=Xn(n,i,s),n!==null?n.sibling:null);wi(i);break;case 19:var h=(n.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Pa(n,i,s,!1),l=(s&i.childLanes)!==0),h){if(l)return wg(n,i,s);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ee(Ze,Ze.current),l)break;return null;case 22:return i.lanes=0,fg(n,i,s,i.pendingProps);case 24:yi(i,it,n.memoizedState.cache)}return Xn(n,i,s)}function Sg(n,i,s){if(n!==null)if(n.memoizedProps!==i.pendingProps)rt=!0;else{if(!ed(n,s)&&(i.flags&128)===0)return rt=!1,C2(n,i,s);rt=(n.flags&131072)!==0}else rt=!1,Ee&&(i.flags&1048576)!==0&&ep(i,qr,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(n=ta(i.elementType),i.type=n,typeof n=="function")ru(n)?(l=ra(n,l),i.tag=1,i=yg(null,i,n,l,s)):(i.tag=0,i=Ku(null,i,n,l,s));else{if(n!=null){var h=n.$$typeof;if(h===B){i.tag=11,i=ug(null,i,n,l,s);break e}else if(h===q){i.tag=14,i=dg(null,i,n,l,s);break e}}throw i=Ce(n)||n,Error(r(306,i,""))}}return i;case 0:return Ku(n,i,i.type,i.pendingProps,s);case 1:return l=i.type,h=ra(l,i.pendingProps),yg(n,i,l,h,s);case 3:e:{if(dt(i,i.stateNode.containerInfo),n===null)throw Error(r(387));l=i.pendingProps;var p=i.memoizedState;h=p.element,xu(n,i),Qr(i,l,null,s);var b=i.memoizedState;if(l=b.cache,yi(i,it,l),l!==p.cache&&mu(i,[it],s,!0),Jr(),l=b.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){i=vg(n,i,l,s);break e}else if(l!==h){h=tn(Error(r(424)),i),Fr(h),i=vg(n,i,l,s);break e}else{switch(n=i.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for($e=on(n.firstChild),yt=i,Ee=!0,pi=null,rn=!0,s=fp(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Ji(),l===h){i=Xn(n,i,s);break e}bt(n,i,l,s)}i=i.child}return i;case 26:return Ko(n,i),n===null?(s=D0(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ee||(s=i.type,n=i.pendingProps,l=ul(be.current).createElement(s),l[gt]=i,l[At]=n,xt(l,s,n),ft(l),i.stateNode=l):i.memoizedState=D0(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return J(i),n===null&&Ee&&(l=i.stateNode=R0(i.type,i.pendingProps,be.current),yt=i,rn=!0,h=$e,Ri(i.type)?(Dd=h,$e=on(l.firstChild)):$e=h),bt(n,i,i.pendingProps.children,s),Ko(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&Ee&&((h=l=$e)&&(l=a5(l,i.type,i.pendingProps,rn),l!==null?(i.stateNode=l,yt=i,$e=on(l.firstChild),rn=!1,h=!0):h=!1),h||gi(i)),J(i),h=i.type,p=i.pendingProps,b=n!==null?n.memoizedProps:null,l=p.children,Cd(h,p)?l=null:b!==null&&Cd(h,b)&&(i.flags|=32),i.memoizedState!==null&&(h=Eu(n,i,b2,null,null,s),vs._currentValue=h),Ko(n,i),bt(n,i,l,s),i.child;case 6:return n===null&&Ee&&((n=s=$e)&&(s=r5(s,i.pendingProps,rn),s!==null?(i.stateNode=s,yt=i,$e=null,n=!0):n=!1),n||gi(i)),null;case 13:return bg(n,i,s);case 4:return dt(i,i.stateNode.containerInfo),l=i.pendingProps,n===null?i.child=ia(i,null,l,s):bt(n,i,l,s),i.child;case 11:return ug(n,i,i.type,i.pendingProps,s);case 7:return bt(n,i,i.pendingProps,s),i.child;case 8:return bt(n,i,i.pendingProps.children,s),i.child;case 12:return bt(n,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,yi(i,i.type,l.value),bt(n,i,l.children,s),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Zi(i),h=vt(h),l=l(h),i.flags|=1,bt(n,i,l,s),i.child;case 14:return dg(n,i,i.type,i.pendingProps,s);case 15:return hg(n,i,i.type,i.pendingProps,s);case 19:return wg(n,i,s);case 31:return E2(n,i,s);case 22:return fg(n,i,s,i.pendingProps);case 24:return Zi(i),l=vt(it),n===null?(h=yu(),h===null&&(h=Be,p=pu(),h.pooledCache=p,p.refCount++,p!==null&&(h.pooledCacheLanes|=s),h=p),i.memoizedState={parent:l,cache:h},bu(i),yi(i,it,h)):((n.lanes&s)!==0&&(xu(n,i),Qr(i,null,null,s),Jr()),h=n.memoizedState,p=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),yi(i,it,l)):(l=p.cache,yi(i,it,l),l!==h.cache&&mu(i,[it],s,!0))),bt(n,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function Wn(n){n.flags|=4}function td(n,i,s,l,h){if((i=(n.mode&32)!==0)&&(i=!1),i){if(n.flags|=16777216,(h&335544128)===h)if(n.stateNode.complete)n.flags|=8192;else if(Xg())n.flags|=8192;else throw na=Oo,vu}else n.flags&=-16777217}function jg(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!B0(i))if(Xg())n.flags|=8192;else throw na=Oo,vu}function Xo(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?nm():536870912,n.lanes|=i,Ja|=i)}function as(n,i){if(!Ee)switch(n.tailMode){case"hidden":i=n.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function Ie(n){var i=n.alternate!==null&&n.alternate.child===n.child,s=0,l=0;if(i)for(var h=n.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=l,n.childLanes=s,i}function A2(n,i,s){var l=i.pendingProps;switch(cu(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(i),null;case 1:return Ie(i),null;case 3:return s=i.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Gn(it),qe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(Ba(i)?Wn(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,du())),Ie(i),null;case 26:var h=i.type,p=i.memoizedState;return n===null?(Wn(i),p!==null?(Ie(i),jg(i,p)):(Ie(i),td(i,h,null,l,s))):p?p!==n.memoizedState?(Wn(i),Ie(i),jg(i,p)):(Ie(i),i.flags&=-16777217):(n=n.memoizedProps,n!==l&&Wn(i),Ie(i),td(i,h,n,l,s)),null;case 27:if(le(i),s=be.current,h=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==l&&Wn(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return Ie(i),null}n=ie.current,Ba(i)?np(i):(n=R0(h,l,s),i.stateNode=n,Wn(i))}return Ie(i),null;case 5:if(le(i),h=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==l&&Wn(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return Ie(i),null}if(p=ie.current,Ba(i))np(i);else{var b=ul(be.current);switch(p){case 1:p=b.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:p=b.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":p=b.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":p=b.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":p=b.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof l.is=="string"?b.createElement("select",{is:l.is}):b.createElement("select"),l.multiple?p.multiple=!0:l.size&&(p.size=l.size);break;default:p=typeof l.is=="string"?b.createElement(h,{is:l.is}):b.createElement(h)}}p[gt]=i,p[At]=l;e:for(b=i.child;b!==null;){if(b.tag===5||b.tag===6)p.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===i)break e;for(;b.sibling===null;){if(b.return===null||b.return===i)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}i.stateNode=p;e:switch(xt(p,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Wn(i)}}return Ie(i),td(i,i.type,n===null?null:n.memoizedProps,i.pendingProps,s),null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==l&&Wn(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(n=be.current,Ba(i)){if(n=i.stateNode,s=i.memoizedProps,l=null,h=yt,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}n[gt]=i,n=!!(n.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||b0(n.nodeValue,s)),n||gi(i,!0)}else n=ul(n).createTextNode(l),n[gt]=i,i.stateNode=n}return Ie(i),null;case 31:if(s=i.memoizedState,n===null||n.memoizedState!==null){if(l=Ba(i),s!==null){if(n===null){if(!l)throw Error(r(318));if(n=i.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(557));n[gt]=i}else Ji(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ie(i),n=!1}else s=du(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=s),n=!0;if(!n)return i.flags&256?(qt(i),i):(qt(i),null);if((i.flags&128)!==0)throw Error(r(558))}return Ie(i),null;case 13:if(l=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(h=Ba(i),l!==null&&l.dehydrated!==null){if(n===null){if(!h)throw Error(r(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(r(317));h[gt]=i}else Ji(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ie(i),h=!1}else h=du(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(qt(i),i):(qt(i),null)}return qt(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,n=n!==null&&n.memoizedState!==null,s&&(l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),p=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==h&&(l.flags|=2048)),s!==n&&s&&(i.child.flags|=8192),Xo(i,i.updateQueue),Ie(i),null);case 4:return qe(),n===null&&jd(i.stateNode.containerInfo),Ie(i),null;case 10:return Gn(i.type),Ie(i),null;case 19:if(I(Ze),l=i.memoizedState,l===null)return Ie(i),null;if(h=(i.flags&128)!==0,p=l.rendering,p===null)if(h)as(l,!1);else{if(We!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(p=zo(n),p!==null){for(i.flags|=128,as(l,!1),n=p.updateQueue,i.updateQueue=n,Xo(i,n),i.subtreeFlags=0,n=s,s=i.child;s!==null;)Jm(s,n),s=s.sibling;return ee(Ze,Ze.current&1|2),Ee&&qn(i,l.treeForkCount),i.child}n=n.sibling}l.tail!==null&&Bt()>el&&(i.flags|=128,h=!0,as(l,!1),i.lanes=4194304)}else{if(!h)if(n=zo(p),n!==null){if(i.flags|=128,h=!0,n=n.updateQueue,i.updateQueue=n,Xo(i,n),as(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!Ee)return Ie(i),null}else 2*Bt()-l.renderingStartTime>el&&s!==536870912&&(i.flags|=128,h=!0,as(l,!1),i.lanes=4194304);l.isBackwards?(p.sibling=i.child,i.child=p):(n=l.last,n!==null?n.sibling=p:i.child=p,l.last=p)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Bt(),n.sibling=null,s=Ze.current,ee(Ze,h?s&1|2:s&1),Ee&&qn(i,l.treeForkCount),n):(Ie(i),null);case 22:case 23:return qt(i),_u(),l=i.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(Ie(i),i.subtreeFlags&6&&(i.flags|=8192)):Ie(i),s=i.updateQueue,s!==null&&Xo(i,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),n!==null&&I(ea),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Gn(it),Ie(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function R2(n,i){switch(cu(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Gn(it),qe(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return le(i),null;case 31:if(i.memoizedState!==null){if(qt(i),i.alternate===null)throw Error(r(340));Ji()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 13:if(qt(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(r(340));Ji()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return I(Ze),null;case 4:return qe(),null;case 10:return Gn(i.type),null;case 22:case 23:return qt(i),_u(),n!==null&&I(ea),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return Gn(it),null;case 25:return null;default:return null}}function _g(n,i){switch(cu(i),i.tag){case 3:Gn(it),qe();break;case 26:case 27:case 5:le(i);break;case 4:qe();break;case 31:i.memoizedState!==null&&qt(i);break;case 13:qt(i);break;case 19:I(Ze);break;case 10:Gn(i.type);break;case 22:case 23:qt(i),_u(),n!==null&&I(ea);break;case 24:Gn(it)}}function rs(n,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var h=l.next;s=h;do{if((s.tag&n)===n){l=void 0;var p=s.create,b=s.inst;l=p(),b.destroy=l}s=s.next}while(s!==h)}}catch(j){Me(i,i.return,j)}}function ji(n,i,s){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var p=h.next;l=p;do{if((l.tag&n)===n){var b=l.inst,j=b.destroy;if(j!==void 0){b.destroy=void 0,h=i;var C=s,z=j;try{z()}catch(H){Me(h,C,H)}}}l=l.next}while(l!==p)}}catch(H){Me(i,i.return,H)}}function kg(n){var i=n.updateQueue;if(i!==null){var s=n.stateNode;try{pp(i,s)}catch(l){Me(n,n.return,l)}}}function Tg(n,i,s){s.props=ra(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(l){Me(n,i,l)}}function ss(n,i){try{var s=n.ref;if(s!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof s=="function"?n.refCleanup=s(l):s.current=l}}catch(h){Me(n,i,h)}}function Rn(n,i){var s=n.ref,l=n.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(h){Me(n,i,h)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){Me(n,i,h)}else s.current=null}function Eg(n){var i=n.type,s=n.memoizedProps,l=n.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(h){Me(n,n.return,h)}}function nd(n,i,s){try{var l=n.stateNode;Q2(l,n.type,s,i),l[At]=i}catch(h){Me(n,n.return,h)}}function Cg(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Ri(n.type)||n.tag===4}function id(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Cg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Ri(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ad(n,i,s){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(n,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(n),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Hn));else if(l!==4&&(l===27&&Ri(n.type)&&(s=n.stateNode,i=null),n=n.child,n!==null))for(ad(n,i,s),n=n.sibling;n!==null;)ad(n,i,s),n=n.sibling}function Wo(n,i,s){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?s.insertBefore(n,i):s.appendChild(n);else if(l!==4&&(l===27&&Ri(n.type)&&(s=n.stateNode),n=n.child,n!==null))for(Wo(n,i,s),n=n.sibling;n!==null;)Wo(n,i,s),n=n.sibling}function Ag(n){var i=n.stateNode,s=n.memoizedProps;try{for(var l=n.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);xt(i,l,s),i[gt]=n,i[At]=s}catch(p){Me(n,n.return,p)}}var Jn=!1,st=!1,rd=!1,Rg=typeof WeakSet=="function"?WeakSet:Set,mt=null;function N2(n,i){if(n=n.containerInfo,Td=yl,n=$m(n),Qc(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else e:{s=(s=n.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var h=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var b=0,j=-1,C=-1,z=0,H=0,F=n,U=null;t:for(;;){for(var P;F!==s||h!==0&&F.nodeType!==3||(j=b+h),F!==p||l!==0&&F.nodeType!==3||(C=b+l),F.nodeType===3&&(b+=F.nodeValue.length),(P=F.firstChild)!==null;)U=F,F=P;for(;;){if(F===n)break t;if(U===s&&++z===h&&(j=b),U===p&&++H===l&&(C=b),(P=F.nextSibling)!==null)break;F=U,U=F.parentNode}F=P}s=j===-1||C===-1?null:{start:j,end:C}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ed={focusedElem:n,selectionRange:s},yl=!1,mt=i;mt!==null;)if(i=mt,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,mt=n;else for(;mt!==null;){switch(i=mt,p=i.alternate,n=i.flags,i.tag){case 0:if((n&4)!==0&&(n=i.updateQueue,n=n!==null?n.events:null,n!==null))for(s=0;s<n.length;s++)h=n[s],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&p!==null){n=void 0,s=i,h=p.memoizedProps,p=p.memoizedState,l=s.stateNode;try{var ne=ra(s.type,h);n=l.getSnapshotBeforeUpdate(ne,p),l.__reactInternalSnapshotBeforeUpdate=n}catch(ue){Me(s,s.return,ue)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,s=n.nodeType,s===9)Rd(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Rd(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(r(163))}if(n=i.sibling,n!==null){n.return=i.return,mt=n;break}mt=i.return}}function Ng(n,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Zn(n,s),l&4&&rs(5,s);break;case 1:if(Zn(n,s),l&4)if(n=s.stateNode,i===null)try{n.componentDidMount()}catch(b){Me(s,s.return,b)}else{var h=ra(s.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(h,i,n.__reactInternalSnapshotBeforeUpdate)}catch(b){Me(s,s.return,b)}}l&64&&kg(s),l&512&&ss(s,s.return);break;case 3:if(Zn(n,s),l&64&&(n=s.updateQueue,n!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{pp(n,i)}catch(b){Me(s,s.return,b)}}break;case 27:i===null&&l&4&&Ag(s);case 26:case 5:Zn(n,s),i===null&&l&4&&Eg(s),l&512&&ss(s,s.return);break;case 12:Zn(n,s);break;case 31:Zn(n,s),l&4&&Mg(n,s);break;case 13:Zn(n,s),l&4&&Lg(n,s),l&64&&(n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(s=V2.bind(null,s),s5(n,s))));break;case 22:if(l=s.memoizedState!==null||Jn,!l){i=i!==null&&i.memoizedState!==null||st,h=Jn;var p=st;Jn=l,(st=i)&&!p?ei(n,s,(s.subtreeFlags&8772)!==0):Zn(n,s),Jn=h,st=p}break;case 30:break;default:Zn(n,s)}}function Og(n){var i=n.alternate;i!==null&&(n.alternate=null,Og(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&Lc(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Ge=null,Nt=!1;function Qn(n,i,s){for(s=s.child;s!==null;)Dg(n,i,s),s=s.sibling}function Dg(n,i,s){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(Rr,s)}catch{}switch(s.tag){case 26:st||Rn(s,i),Qn(n,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:st||Rn(s,i);var l=Ge,h=Nt;Ri(s.type)&&(Ge=s.stateNode,Nt=!1),Qn(n,i,s),ps(s.stateNode),Ge=l,Nt=h;break;case 5:st||Rn(s,i);case 6:if(l=Ge,h=Nt,Ge=null,Qn(n,i,s),Ge=l,Nt=h,Ge!==null)if(Nt)try{(Ge.nodeType===9?Ge.body:Ge.nodeName==="HTML"?Ge.ownerDocument.body:Ge).removeChild(s.stateNode)}catch(p){Me(s,i,p)}else try{Ge.removeChild(s.stateNode)}catch(p){Me(s,i,p)}break;case 18:Ge!==null&&(Nt?(n=Ge,k0(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,s.stateNode),rr(n)):k0(Ge,s.stateNode));break;case 4:l=Ge,h=Nt,Ge=s.stateNode.containerInfo,Nt=!0,Qn(n,i,s),Ge=l,Nt=h;break;case 0:case 11:case 14:case 15:ji(2,s,i),st||ji(4,s,i),Qn(n,i,s);break;case 1:st||(Rn(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Tg(s,i,l)),Qn(n,i,s);break;case 21:Qn(n,i,s);break;case 22:st=(l=st)||s.memoizedState!==null,Qn(n,i,s),st=l;break;default:Qn(n,i,s)}}function Mg(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{rr(n)}catch(s){Me(i,i.return,s)}}}function Lg(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{rr(n)}catch(s){Me(i,i.return,s)}}function O2(n){switch(n.tag){case 31:case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new Rg),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new Rg),i;default:throw Error(r(435,n.tag))}}function Jo(n,i){var s=O2(n);i.forEach(function(l){if(!s.has(l)){s.add(l);var h=H2.bind(null,n,l);l.then(h,h)}})}function Ot(n,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var h=s[l],p=n,b=i,j=b;e:for(;j!==null;){switch(j.tag){case 27:if(Ri(j.type)){Ge=j.stateNode,Nt=!1;break e}break;case 5:Ge=j.stateNode,Nt=!1;break e;case 3:case 4:Ge=j.stateNode.containerInfo,Nt=!0;break e}j=j.return}if(Ge===null)throw Error(r(160));Dg(p,b,h),Ge=null,Nt=!1,p=h.alternate,p!==null&&(p.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)zg(i,n),i=i.sibling}var mn=null;function zg(n,i){var s=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Ot(i,n),Dt(n),l&4&&(ji(3,n,n.return),rs(3,n),ji(5,n,n.return));break;case 1:Ot(i,n),Dt(n),l&512&&(st||s===null||Rn(s,s.return)),l&64&&Jn&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var h=mn;if(Ot(i,n),Dt(n),l&512&&(st||s===null||Rn(s,s.return)),l&4){var p=s!==null?s.memoizedState:null;if(l=n.memoizedState,s===null)if(l===null)if(n.stateNode===null){e:{l=n.type,s=n.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":p=h.getElementsByTagName("title")[0],(!p||p[Dr]||p[gt]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=h.createElement(l),h.head.insertBefore(p,h.querySelector("head > title"))),xt(p,l,s),p[gt]=n,ft(p),l=p;break e;case"link":var b=z0("link","href",h).get(l+(s.href||""));if(b){for(var j=0;j<b.length;j++)if(p=b[j],p.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&p.getAttribute("rel")===(s.rel==null?null:s.rel)&&p.getAttribute("title")===(s.title==null?null:s.title)&&p.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){b.splice(j,1);break t}}p=h.createElement(l),xt(p,l,s),h.head.appendChild(p);break;case"meta":if(b=z0("meta","content",h).get(l+(s.content||""))){for(j=0;j<b.length;j++)if(p=b[j],p.getAttribute("content")===(s.content==null?null:""+s.content)&&p.getAttribute("name")===(s.name==null?null:s.name)&&p.getAttribute("property")===(s.property==null?null:s.property)&&p.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&p.getAttribute("charset")===(s.charSet==null?null:s.charSet)){b.splice(j,1);break t}}p=h.createElement(l),xt(p,l,s),h.head.appendChild(p);break;default:throw Error(r(468,l))}p[gt]=n,ft(p),l=p}n.stateNode=l}else U0(h,n.type,n.stateNode);else n.stateNode=L0(h,l,n.memoizedProps);else p!==l?(p===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):p.count--,l===null?U0(h,n.type,n.stateNode):L0(h,l,n.memoizedProps)):l===null&&n.stateNode!==null&&nd(n,n.memoizedProps,s.memoizedProps)}break;case 27:Ot(i,n),Dt(n),l&512&&(st||s===null||Rn(s,s.return)),s!==null&&l&4&&nd(n,n.memoizedProps,s.memoizedProps);break;case 5:if(Ot(i,n),Dt(n),l&512&&(st||s===null||Rn(s,s.return)),n.flags&32){h=n.stateNode;try{Ca(h,"")}catch(ne){Me(n,n.return,ne)}}l&4&&n.stateNode!=null&&(h=n.memoizedProps,nd(n,h,s!==null?s.memoizedProps:h)),l&1024&&(rd=!0);break;case 6:if(Ot(i,n),Dt(n),l&4){if(n.stateNode===null)throw Error(r(162));l=n.memoizedProps,s=n.stateNode;try{s.nodeValue=l}catch(ne){Me(n,n.return,ne)}}break;case 3:if(fl=null,h=mn,mn=dl(i.containerInfo),Ot(i,n),mn=h,Dt(n),l&4&&s!==null&&s.memoizedState.isDehydrated)try{rr(i.containerInfo)}catch(ne){Me(n,n.return,ne)}rd&&(rd=!1,Ug(n));break;case 4:l=mn,mn=dl(n.stateNode.containerInfo),Ot(i,n),Dt(n),mn=l;break;case 12:Ot(i,n),Dt(n);break;case 31:Ot(i,n),Dt(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Jo(n,l)));break;case 13:Ot(i,n),Dt(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Zo=Bt()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Jo(n,l)));break;case 22:h=n.memoizedState!==null;var C=s!==null&&s.memoizedState!==null,z=Jn,H=st;if(Jn=z||h,st=H||C,Ot(i,n),st=H,Jn=z,Dt(n),l&8192)e:for(i=n.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(s===null||C||Jn||st||sa(n)),s=null,i=n;;){if(i.tag===5||i.tag===26){if(s===null){C=s=i;try{if(p=C.stateNode,h)b=p.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{j=C.stateNode;var F=C.memoizedProps.style,U=F!=null&&F.hasOwnProperty("display")?F.display:null;j.style.display=U==null||typeof U=="boolean"?"":(""+U).trim()}}catch(ne){Me(C,C.return,ne)}}}else if(i.tag===6){if(s===null){C=i;try{C.stateNode.nodeValue=h?"":C.memoizedProps}catch(ne){Me(C,C.return,ne)}}}else if(i.tag===18){if(s===null){C=i;try{var P=C.stateNode;h?T0(P,!0):T0(C.stateNode,!1)}catch(ne){Me(C,C.return,ne)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break e;for(;i.sibling===null;){if(i.return===null||i.return===n)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=n.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Jo(n,s))));break;case 19:Ot(i,n),Dt(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Jo(n,l)));break;case 30:break;case 21:break;default:Ot(i,n),Dt(n)}}function Dt(n){var i=n.flags;if(i&2){try{for(var s,l=n.return;l!==null;){if(Cg(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var h=s.stateNode,p=id(n);Wo(n,p,h);break;case 5:var b=s.stateNode;s.flags&32&&(Ca(b,""),s.flags&=-33);var j=id(n);Wo(n,j,b);break;case 3:case 4:var C=s.stateNode.containerInfo,z=id(n);ad(n,z,C);break;default:throw Error(r(161))}}catch(H){Me(n,n.return,H)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Ug(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;Ug(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function Zn(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Ng(n,i.alternate,i),i=i.sibling}function sa(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:ji(4,i,i.return),sa(i);break;case 1:Rn(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Tg(i,i.return,s),sa(i);break;case 27:ps(i.stateNode);case 26:case 5:Rn(i,i.return),sa(i);break;case 22:i.memoizedState===null&&sa(i);break;case 30:sa(i);break;default:sa(i)}n=n.sibling}}function ei(n,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=n,p=i,b=p.flags;switch(p.tag){case 0:case 11:case 15:ei(h,p,s),rs(4,p);break;case 1:if(ei(h,p,s),l=p,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(z){Me(l,l.return,z)}if(l=p,h=l.updateQueue,h!==null){var j=l.stateNode;try{var C=h.shared.hiddenCallbacks;if(C!==null)for(h.shared.hiddenCallbacks=null,h=0;h<C.length;h++)mp(C[h],j)}catch(z){Me(l,l.return,z)}}s&&b&64&&kg(p),ss(p,p.return);break;case 27:Ag(p);case 26:case 5:ei(h,p,s),s&&l===null&&b&4&&Eg(p),ss(p,p.return);break;case 12:ei(h,p,s);break;case 31:ei(h,p,s),s&&b&4&&Mg(h,p);break;case 13:ei(h,p,s),s&&b&4&&Lg(h,p);break;case 22:p.memoizedState===null&&ei(h,p,s),ss(p,p.return);break;case 30:break;default:ei(h,p,s)}i=i.sibling}}function sd(n,i){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&Gr(s))}function od(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Gr(n))}function pn(n,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Bg(n,i,s,l),i=i.sibling}function Bg(n,i,s,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:pn(n,i,s,l),h&2048&&rs(9,i);break;case 1:pn(n,i,s,l);break;case 3:pn(n,i,s,l),h&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Gr(n)));break;case 12:if(h&2048){pn(n,i,s,l),n=i.stateNode;try{var p=i.memoizedProps,b=p.id,j=p.onPostCommit;typeof j=="function"&&j(b,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(C){Me(i,i.return,C)}}else pn(n,i,s,l);break;case 31:pn(n,i,s,l);break;case 13:pn(n,i,s,l);break;case 23:break;case 22:p=i.stateNode,b=i.alternate,i.memoizedState!==null?p._visibility&2?pn(n,i,s,l):os(n,i):p._visibility&2?pn(n,i,s,l):(p._visibility|=2,Ya(n,i,s,l,(i.subtreeFlags&10256)!==0||!1)),h&2048&&sd(b,i);break;case 24:pn(n,i,s,l),h&2048&&od(i.alternate,i);break;default:pn(n,i,s,l)}}function Ya(n,i,s,l,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var p=n,b=i,j=s,C=l,z=b.flags;switch(b.tag){case 0:case 11:case 15:Ya(p,b,j,C,h),rs(8,b);break;case 23:break;case 22:var H=b.stateNode;b.memoizedState!==null?H._visibility&2?Ya(p,b,j,C,h):os(p,b):(H._visibility|=2,Ya(p,b,j,C,h)),h&&z&2048&&sd(b.alternate,b);break;case 24:Ya(p,b,j,C,h),h&&z&2048&&od(b.alternate,b);break;default:Ya(p,b,j,C,h)}i=i.sibling}}function os(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=n,l=i,h=l.flags;switch(l.tag){case 22:os(s,l),h&2048&&sd(l.alternate,l);break;case 24:os(s,l),h&2048&&od(l.alternate,l);break;default:os(s,l)}i=i.sibling}}var ls=8192;function Xa(n,i,s){if(n.subtreeFlags&ls)for(n=n.child;n!==null;)Pg(n,i,s),n=n.sibling}function Pg(n,i,s){switch(n.tag){case 26:Xa(n,i,s),n.flags&ls&&n.memoizedState!==null&&v5(s,mn,n.memoizedState,n.memoizedProps);break;case 5:Xa(n,i,s);break;case 3:case 4:var l=mn;mn=dl(n.stateNode.containerInfo),Xa(n,i,s),mn=l;break;case 22:n.memoizedState===null&&(l=n.alternate,l!==null&&l.memoizedState!==null?(l=ls,ls=16777216,Xa(n,i,s),ls=l):Xa(n,i,s));break;default:Xa(n,i,s)}}function Vg(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function cs(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];mt=l,$g(l,n)}Vg(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Hg(n),n=n.sibling}function Hg(n){switch(n.tag){case 0:case 11:case 15:cs(n),n.flags&2048&&ji(9,n,n.return);break;case 3:cs(n);break;case 12:cs(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,Qo(n)):cs(n);break;default:cs(n)}}function Qo(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];mt=l,$g(l,n)}Vg(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:ji(8,i,i.return),Qo(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Qo(i));break;default:Qo(i)}n=n.sibling}}function $g(n,i){for(;mt!==null;){var s=mt;switch(s.tag){case 0:case 11:case 15:ji(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Gr(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,mt=l;else e:for(s=n;mt!==null;){l=mt;var h=l.sibling,p=l.return;if(Og(l),l===s){mt=null;break e}if(h!==null){h.return=p,mt=h;break e}mt=p}}}var D2={getCacheForType:function(n){var i=vt(it),s=i.data.get(n);return s===void 0&&(s=n(),i.data.set(n,s)),s},cacheSignal:function(){return vt(it).controller.signal}},M2=typeof WeakMap=="function"?WeakMap:Map,Oe=0,Be=null,we=null,_e=0,De=0,Ft=null,_i=!1,Wa=!1,ld=!1,ti=0,We=0,ki=0,oa=0,cd=0,Gt=0,Ja=0,us=null,Mt=null,ud=!1,Zo=0,Ig=0,el=1/0,tl=null,Ti=null,ct=0,Ei=null,Qa=null,ni=0,dd=0,hd=null,qg=null,ds=0,fd=null;function Kt(){return(Oe&2)!==0&&_e!==0?_e&-_e:V.T!==null?bd():sm()}function Fg(){if(Gt===0)if((_e&536870912)===0||Ee){var n=lo;lo<<=1,(lo&3932160)===0&&(lo=262144),Gt=n}else Gt=536870912;return n=It.current,n!==null&&(n.flags|=32),Gt}function Lt(n,i,s){(n===Be&&(De===2||De===9)||n.cancelPendingCommit!==null)&&(Za(n,0),Ci(n,_e,Gt,!1)),Or(n,s),((Oe&2)===0||n!==Be)&&(n===Be&&((Oe&2)===0&&(oa|=s),We===4&&Ci(n,_e,Gt,!1)),Nn(n))}function Gg(n,i,s){if((Oe&6)!==0)throw Error(r(327));var l=!s&&(i&127)===0&&(i&n.expiredLanes)===0||Nr(n,i),h=l?U2(n,i):pd(n,i,!0),p=l;do{if(h===0){Wa&&!l&&Ci(n,i,0,!1);break}else{if(s=n.current.alternate,p&&!L2(s)){h=pd(n,i,!1),p=!1;continue}if(h===2){if(p=i,n.errorRecoveryDisabledLanes&p)var b=0;else b=n.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;e:{var j=n;h=us;var C=j.current.memoizedState.isDehydrated;if(C&&(Za(j,b).flags|=256),b=pd(j,b,!1),b!==2){if(ld&&!C){j.errorRecoveryDisabledLanes|=p,oa|=p,h=4;break e}p=Mt,Mt=h,p!==null&&(Mt===null?Mt=p:Mt.push.apply(Mt,p))}h=b}if(p=!1,h!==2)continue}}if(h===1){Za(n,0),Ci(n,i,0,!0);break}e:{switch(l=n,p=h,p){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:Ci(l,i,Gt,!_i);break e;case 2:Mt=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(h=Zo+300-Bt(),10<h)){if(Ci(l,i,Gt,!_i),uo(l,0,!0)!==0)break e;ni=i,l.timeoutHandle=j0(Kg.bind(null,l,s,Mt,tl,ud,i,Gt,oa,Ja,_i,p,"Throttled",-0,0),h);break e}Kg(l,s,Mt,tl,ud,i,Gt,oa,Ja,_i,p,null,-0,0)}}break}while(!0);Nn(n)}function Kg(n,i,s,l,h,p,b,j,C,z,H,F,U,P){if(n.timeoutHandle=-1,F=i.subtreeFlags,F&8192||(F&16785408)===16785408){F={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Hn},Pg(i,p,F);var ne=(p&62914560)===p?Zo-Bt():(p&4194048)===p?Ig-Bt():0;if(ne=b5(F,ne),ne!==null){ni=p,n.cancelPendingCommit=ne(t0.bind(null,n,i,p,s,l,h,b,j,C,H,F,null,U,P)),Ci(n,p,b,!z);return}}t0(n,i,p,s,l,h,b,j,C)}function L2(n){for(var i=n;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var h=s[l],p=h.getSnapshot;h=h.value;try{if(!Ht(p(),h))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ci(n,i,s,l){i&=~cd,i&=~oa,n.suspendedLanes|=i,n.pingedLanes&=~i,l&&(n.warmLanes|=i),l=n.expirationTimes;for(var h=i;0<h;){var p=31-Vt(h),b=1<<p;l[p]=-1,h&=~b}s!==0&&im(n,s,i)}function nl(){return(Oe&6)===0?(hs(0),!1):!0}function md(){if(we!==null){if(De===0)var n=we.return;else n=we,Fn=Qi=null,Ru(n),Ia=null,Yr=0,n=we;for(;n!==null;)_g(n.alternate,n),n=n.return;we=null}}function Za(n,i){var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,t5(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),ni=0,md(),Be=n,we=s=In(n.current,null),_e=i,De=0,Ft=null,_i=!1,Wa=Nr(n,i),ld=!1,Ja=Gt=cd=oa=ki=We=0,Mt=us=null,ud=!1,(i&8)!==0&&(i|=i&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=i;0<l;){var h=31-Vt(l),p=1<<h;i|=n[h],l&=~p}return ti=i,jo(),s}function Yg(n,i){ye=null,V.H=ns,i===$a||i===No?(i=up(),De=3):i===vu?(i=up(),De=4):De=i===Gu?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Ft=i,we===null&&(We=1,Fo(n,tn(i,n.current)))}function Xg(){var n=It.current;return n===null?!0:(_e&4194048)===_e?sn===null:(_e&62914560)===_e||(_e&536870912)!==0?n===sn:!1}function Wg(){var n=V.H;return V.H=ns,n===null?ns:n}function Jg(){var n=V.A;return V.A=D2,n}function il(){We=4,_i||(_e&4194048)!==_e&&It.current!==null||(Wa=!0),(ki&134217727)===0&&(oa&134217727)===0||Be===null||Ci(Be,_e,Gt,!1)}function pd(n,i,s){var l=Oe;Oe|=2;var h=Wg(),p=Jg();(Be!==n||_e!==i)&&(tl=null,Za(n,i)),i=!1;var b=We;e:do try{if(De!==0&&we!==null){var j=we,C=Ft;switch(De){case 8:md(),b=6;break e;case 3:case 2:case 9:case 6:It.current===null&&(i=!0);var z=De;if(De=0,Ft=null,er(n,j,C,z),s&&Wa){b=0;break e}break;default:z=De,De=0,Ft=null,er(n,j,C,z)}}z2(),b=We;break}catch(H){Yg(n,H)}while(!0);return i&&n.shellSuspendCounter++,Fn=Qi=null,Oe=l,V.H=h,V.A=p,we===null&&(Be=null,_e=0,jo()),b}function z2(){for(;we!==null;)Qg(we)}function U2(n,i){var s=Oe;Oe|=2;var l=Wg(),h=Jg();Be!==n||_e!==i?(tl=null,el=Bt()+500,Za(n,i)):Wa=Nr(n,i);e:do try{if(De!==0&&we!==null){i=we;var p=Ft;t:switch(De){case 1:De=0,Ft=null,er(n,i,p,1);break;case 2:case 9:if(lp(p)){De=0,Ft=null,Zg(i);break}i=function(){De!==2&&De!==9||Be!==n||(De=7),Nn(n)},p.then(i,i);break e;case 3:De=7;break e;case 4:De=5;break e;case 7:lp(p)?(De=0,Ft=null,Zg(i)):(De=0,Ft=null,er(n,i,p,7));break;case 5:var b=null;switch(we.tag){case 26:b=we.memoizedState;case 5:case 27:var j=we;if(b?B0(b):j.stateNode.complete){De=0,Ft=null;var C=j.sibling;if(C!==null)we=C;else{var z=j.return;z!==null?(we=z,al(z)):we=null}break t}}De=0,Ft=null,er(n,i,p,5);break;case 6:De=0,Ft=null,er(n,i,p,6);break;case 8:md(),We=6;break e;default:throw Error(r(462))}}B2();break}catch(H){Yg(n,H)}while(!0);return Fn=Qi=null,V.H=l,V.A=h,Oe=s,we!==null?0:(Be=null,_e=0,jo(),We)}function B2(){for(;we!==null&&!ow();)Qg(we)}function Qg(n){var i=Sg(n.alternate,n,ti);n.memoizedProps=n.pendingProps,i===null?al(n):we=i}function Zg(n){var i=n,s=i.alternate;switch(i.tag){case 15:case 0:i=gg(s,i,i.pendingProps,i.type,void 0,_e);break;case 11:i=gg(s,i,i.pendingProps,i.type.render,i.ref,_e);break;case 5:Ru(i);default:_g(s,i),i=we=Jm(i,ti),i=Sg(s,i,ti)}n.memoizedProps=n.pendingProps,i===null?al(n):we=i}function er(n,i,s,l){Fn=Qi=null,Ru(i),Ia=null,Yr=0;var h=i.return;try{if(T2(n,h,i,s,_e)){We=1,Fo(n,tn(s,n.current)),we=null;return}}catch(p){if(h!==null)throw we=h,p;We=1,Fo(n,tn(s,n.current)),we=null;return}i.flags&32768?(Ee||l===1?n=!0:Wa||(_e&536870912)!==0?n=!1:(_i=n=!0,(l===2||l===9||l===3||l===6)&&(l=It.current,l!==null&&l.tag===13&&(l.flags|=16384))),e0(i,n)):al(i)}function al(n){var i=n;do{if((i.flags&32768)!==0){e0(i,_i);return}n=i.return;var s=A2(i.alternate,i,ti);if(s!==null){we=s;return}if(i=i.sibling,i!==null){we=i;return}we=i=n}while(i!==null);We===0&&(We=5)}function e0(n,i){do{var s=R2(n.alternate,n);if(s!==null){s.flags&=32767,we=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(n=n.sibling,n!==null)){we=n;return}we=n=s}while(n!==null);We=6,we=null}function t0(n,i,s,l,h,p,b,j,C){n.cancelPendingCommit=null;do rl();while(ct!==0);if((Oe&6)!==0)throw Error(r(327));if(i!==null){if(i===n.current)throw Error(r(177));if(p=i.lanes|i.childLanes,p|=iu,yw(n,s,p,b,j,C),n===Be&&(we=Be=null,_e=0),Qa=i,Ei=n,ni=s,dd=p,hd=h,qg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,$2(so,function(){return s0(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=V.T,V.T=null,h=Q.p,Q.p=2,b=Oe,Oe|=4;try{N2(n,i,s)}finally{Oe=b,Q.p=h,V.T=l}}ct=1,n0(),i0(),a0()}}function n0(){if(ct===1){ct=0;var n=Ei,i=Qa,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=V.T,V.T=null;var l=Q.p;Q.p=2;var h=Oe;Oe|=4;try{zg(i,n);var p=Ed,b=$m(n.containerInfo),j=p.focusedElem,C=p.selectionRange;if(b!==j&&j&&j.ownerDocument&&Hm(j.ownerDocument.documentElement,j)){if(C!==null&&Qc(j)){var z=C.start,H=C.end;if(H===void 0&&(H=z),"selectionStart"in j)j.selectionStart=z,j.selectionEnd=Math.min(H,j.value.length);else{var F=j.ownerDocument||document,U=F&&F.defaultView||window;if(U.getSelection){var P=U.getSelection(),ne=j.textContent.length,ue=Math.min(C.start,ne),Ue=C.end===void 0?ue:Math.min(C.end,ne);!P.extend&&ue>Ue&&(b=Ue,Ue=ue,ue=b);var D=Vm(j,ue),N=Vm(j,Ue);if(D&&N&&(P.rangeCount!==1||P.anchorNode!==D.node||P.anchorOffset!==D.offset||P.focusNode!==N.node||P.focusOffset!==N.offset)){var L=F.createRange();L.setStart(D.node,D.offset),P.removeAllRanges(),ue>Ue?(P.addRange(L),P.extend(N.node,N.offset)):(L.setEnd(N.node,N.offset),P.addRange(L))}}}}for(F=[],P=j;P=P.parentNode;)P.nodeType===1&&F.push({element:P,left:P.scrollLeft,top:P.scrollTop});for(typeof j.focus=="function"&&j.focus(),j=0;j<F.length;j++){var $=F[j];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}yl=!!Td,Ed=Td=null}finally{Oe=h,Q.p=l,V.T=s}}n.current=i,ct=2}}function i0(){if(ct===2){ct=0;var n=Ei,i=Qa,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=V.T,V.T=null;var l=Q.p;Q.p=2;var h=Oe;Oe|=4;try{Ng(n,i.alternate,i)}finally{Oe=h,Q.p=l,V.T=s}}ct=3}}function a0(){if(ct===4||ct===3){ct=0,lw();var n=Ei,i=Qa,s=ni,l=qg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?ct=5:(ct=0,Qa=Ei=null,r0(n,n.pendingLanes));var h=n.pendingLanes;if(h===0&&(Ti=null),Dc(s),i=i.stateNode,Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(Rr,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=V.T,h=Q.p,Q.p=2,V.T=null;try{for(var p=n.onRecoverableError,b=0;b<l.length;b++){var j=l[b];p(j.value,{componentStack:j.stack})}}finally{V.T=i,Q.p=h}}(ni&3)!==0&&rl(),Nn(n),h=n.pendingLanes,(s&261930)!==0&&(h&42)!==0?n===fd?ds++:(ds=0,fd=n):ds=0,hs(0)}}function r0(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,Gr(i)))}function rl(){return n0(),i0(),a0(),s0()}function s0(){if(ct!==5)return!1;var n=Ei,i=dd;dd=0;var s=Dc(ni),l=V.T,h=Q.p;try{Q.p=32>s?32:s,V.T=null,s=hd,hd=null;var p=Ei,b=ni;if(ct=0,Qa=Ei=null,ni=0,(Oe&6)!==0)throw Error(r(331));var j=Oe;if(Oe|=4,Hg(p.current),Bg(p,p.current,b,s),Oe=j,hs(0,!1),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(Rr,p)}catch{}return!0}finally{Q.p=h,V.T=l,r0(n,i)}}function o0(n,i,s){i=tn(s,i),i=Fu(n.stateNode,i,2),n=xi(n,i,2),n!==null&&(Or(n,2),Nn(n))}function Me(n,i,s){if(n.tag===3)o0(n,n,s);else for(;i!==null;){if(i.tag===3){o0(i,n,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ti===null||!Ti.has(l))){n=tn(s,n),s=lg(2),l=xi(i,s,2),l!==null&&(cg(s,l,i,n),Or(l,2),Nn(l));break}}i=i.return}}function gd(n,i,s){var l=n.pingCache;if(l===null){l=n.pingCache=new M2;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(s)||(ld=!0,h.add(s),n=P2.bind(null,n,i,s),i.then(n,n))}function P2(n,i,s){var l=n.pingCache;l!==null&&l.delete(i),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,Be===n&&(_e&s)===s&&(We===4||We===3&&(_e&62914560)===_e&&300>Bt()-Zo?(Oe&2)===0&&Za(n,0):cd|=s,Ja===_e&&(Ja=0)),Nn(n)}function l0(n,i){i===0&&(i=nm()),n=Xi(n,i),n!==null&&(Or(n,i),Nn(n))}function V2(n){var i=n.memoizedState,s=0;i!==null&&(s=i.retryLane),l0(n,s)}function H2(n,i){var s=0;switch(n.tag){case 31:case 13:var l=n.stateNode,h=n.memoizedState;h!==null&&(s=h.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),l0(n,s)}function $2(n,i){return Ac(n,i)}var sl=null,tr=null,yd=!1,ol=!1,vd=!1,Ai=0;function Nn(n){n!==tr&&n.next===null&&(tr===null?sl=tr=n:tr=tr.next=n),ol=!0,yd||(yd=!0,q2())}function hs(n,i){if(!vd&&ol){vd=!0;do for(var s=!1,l=sl;l!==null;){if(n!==0){var h=l.pendingLanes;if(h===0)var p=0;else{var b=l.suspendedLanes,j=l.pingedLanes;p=(1<<31-Vt(42|n)+1)-1,p&=h&~(b&~j),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(s=!0,h0(l,p))}else p=_e,p=uo(l,l===Be?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||Nr(l,p)||(s=!0,h0(l,p));l=l.next}while(s);vd=!1}}function I2(){c0()}function c0(){ol=yd=!1;var n=0;Ai!==0&&e5()&&(n=Ai);for(var i=Bt(),s=null,l=sl;l!==null;){var h=l.next,p=u0(l,i);p===0?(l.next=null,s===null?sl=h:s.next=h,h===null&&(tr=s)):(s=l,(n!==0||(p&3)!==0)&&(ol=!0)),l=h}ct!==0&&ct!==5||hs(n),Ai!==0&&(Ai=0)}function u0(n,i){for(var s=n.suspendedLanes,l=n.pingedLanes,h=n.expirationTimes,p=n.pendingLanes&-62914561;0<p;){var b=31-Vt(p),j=1<<b,C=h[b];C===-1?((j&s)===0||(j&l)!==0)&&(h[b]=gw(j,i)):C<=i&&(n.expiredLanes|=j),p&=~j}if(i=Be,s=_e,s=uo(n,n===i?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,s===0||n===i&&(De===2||De===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&Rc(l),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||Nr(n,s)){if(i=s&-s,i===n.callbackPriority)return i;switch(l!==null&&Rc(l),Dc(s)){case 2:case 8:s=em;break;case 32:s=so;break;case 268435456:s=tm;break;default:s=so}return l=d0.bind(null,n),s=Ac(s,l),n.callbackPriority=i,n.callbackNode=s,i}return l!==null&&l!==null&&Rc(l),n.callbackPriority=2,n.callbackNode=null,2}function d0(n,i){if(ct!==0&&ct!==5)return n.callbackNode=null,n.callbackPriority=0,null;var s=n.callbackNode;if(rl()&&n.callbackNode!==s)return null;var l=_e;return l=uo(n,n===Be?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(Gg(n,l,i),u0(n,Bt()),n.callbackNode!=null&&n.callbackNode===s?d0.bind(null,n):null)}function h0(n,i){if(rl())return null;Gg(n,i,!0)}function q2(){n5(function(){(Oe&6)!==0?Ac(Zf,I2):c0()})}function bd(){if(Ai===0){var n=Va;n===0&&(n=oo,oo<<=1,(oo&261888)===0&&(oo=256)),Ai=n}return Ai}function f0(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:po(""+n)}function m0(n,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,n.id&&s.setAttribute("form",n.id),i.parentNode.insertBefore(s,i),n=new FormData(n),s.parentNode.removeChild(s),n}function F2(n,i,s,l,h){if(i==="submit"&&s&&s.stateNode===h){var p=f0((h[At]||null).action),b=l.submitter;b&&(i=(i=b[At]||null)?f0(i.formAction):b.getAttribute("formAction"),i!==null&&(p=i,b=null));var j=new bo("action","action",null,l,h);n.push({event:j,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ai!==0){var C=b?m0(h,b):new FormData(h);Pu(s,{pending:!0,data:C,method:h.method,action:p},null,C)}}else typeof p=="function"&&(j.preventDefault(),C=b?m0(h,b):new FormData(h),Pu(s,{pending:!0,data:C,method:h.method,action:p},p,C))},currentTarget:h}]})}}for(var xd=0;xd<nu.length;xd++){var wd=nu[xd],G2=wd.toLowerCase(),K2=wd[0].toUpperCase()+wd.slice(1);fn(G2,"on"+K2)}fn(Fm,"onAnimationEnd"),fn(Gm,"onAnimationIteration"),fn(Km,"onAnimationStart"),fn("dblclick","onDoubleClick"),fn("focusin","onFocus"),fn("focusout","onBlur"),fn(c2,"onTransitionRun"),fn(u2,"onTransitionStart"),fn(d2,"onTransitionCancel"),fn(Ym,"onTransitionEnd"),Ta("onMouseEnter",["mouseout","mouseover"]),Ta("onMouseLeave",["mouseout","mouseover"]),Ta("onPointerEnter",["pointerout","pointerover"]),Ta("onPointerLeave",["pointerout","pointerover"]),Fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Fi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Y2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fs));function p0(n,i){i=(i&4)!==0;for(var s=0;s<n.length;s++){var l=n[s],h=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var b=l.length-1;0<=b;b--){var j=l[b],C=j.instance,z=j.currentTarget;if(j=j.listener,C!==p&&h.isPropagationStopped())break e;p=j,h.currentTarget=z;try{p(h)}catch(H){So(H)}h.currentTarget=null,p=C}else for(b=0;b<l.length;b++){if(j=l[b],C=j.instance,z=j.currentTarget,j=j.listener,C!==p&&h.isPropagationStopped())break e;p=j,h.currentTarget=z;try{p(h)}catch(H){So(H)}h.currentTarget=null,p=C}}}}function Se(n,i){var s=i[Mc];s===void 0&&(s=i[Mc]=new Set);var l=n+"__bubble";s.has(l)||(g0(i,n,2,!1),s.add(l))}function Sd(n,i,s){var l=0;i&&(l|=4),g0(s,n,l,i)}var ll="_reactListening"+Math.random().toString(36).slice(2);function jd(n){if(!n[ll]){n[ll]=!0,cm.forEach(function(s){s!=="selectionchange"&&(Y2.has(s)||Sd(s,!1,n),Sd(s,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ll]||(i[ll]=!0,Sd("selectionchange",!1,i))}}function g0(n,i,s,l){switch(F0(i)){case 2:var h=S5;break;case 8:h=j5;break;default:h=Bd}s=h.bind(null,i,s,n),h=void 0,!Ic||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?n.addEventListener(i,s,{capture:!0,passive:h}):n.addEventListener(i,s,!0):h!==void 0?n.addEventListener(i,s,{passive:h}):n.addEventListener(i,s,!1)}function _d(n,i,s,l,h){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var j=l.stateNode.containerInfo;if(j===h)break;if(b===4)for(b=l.return;b!==null;){var C=b.tag;if((C===3||C===4)&&b.stateNode.containerInfo===h)return;b=b.return}for(;j!==null;){if(b=ja(j),b===null)return;if(C=b.tag,C===5||C===6||C===26||C===27){l=p=b;continue e}j=j.parentNode}}l=l.return}wm(function(){var z=p,H=Hc(s),F=[];e:{var U=Xm.get(n);if(U!==void 0){var P=bo,ne=n;switch(n){case"keypress":if(yo(s)===0)break e;case"keydown":case"keyup":P=Hw;break;case"focusin":ne="focus",P=Kc;break;case"focusout":ne="blur",P=Kc;break;case"beforeblur":case"afterblur":P=Kc;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=_m;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=Aw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=qw;break;case Fm:case Gm:case Km:P=Ow;break;case Ym:P=Gw;break;case"scroll":case"scrollend":P=Ew;break;case"wheel":P=Yw;break;case"copy":case"cut":case"paste":P=Mw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=Tm;break;case"toggle":case"beforetoggle":P=Ww}var ue=(i&4)!==0,Ue=!ue&&(n==="scroll"||n==="scrollend"),D=ue?U!==null?U+"Capture":null:U;ue=[];for(var N=z,L;N!==null;){var $=N;if(L=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||L===null||D===null||($=Lr(N,D),$!=null&&ue.push(ms(N,$,L))),Ue)break;N=N.return}0<ue.length&&(U=new P(U,ne,null,s,H),F.push({event:U,listeners:ue}))}}if((i&7)===0){e:{if(U=n==="mouseover"||n==="pointerover",P=n==="mouseout"||n==="pointerout",U&&s!==Vc&&(ne=s.relatedTarget||s.fromElement)&&(ja(ne)||ne[Sa]))break e;if((P||U)&&(U=H.window===H?H:(U=H.ownerDocument)?U.defaultView||U.parentWindow:window,P?(ne=s.relatedTarget||s.toElement,P=z,ne=ne?ja(ne):null,ne!==null&&(Ue=c(ne),ue=ne.tag,ne!==Ue||ue!==5&&ue!==27&&ue!==6)&&(ne=null)):(P=null,ne=z),P!==ne)){if(ue=_m,$="onMouseLeave",D="onMouseEnter",N="mouse",(n==="pointerout"||n==="pointerover")&&(ue=Tm,$="onPointerLeave",D="onPointerEnter",N="pointer"),Ue=P==null?U:Mr(P),L=ne==null?U:Mr(ne),U=new ue($,N+"leave",P,s,H),U.target=Ue,U.relatedTarget=L,$=null,ja(H)===z&&(ue=new ue(D,N+"enter",ne,s,H),ue.target=L,ue.relatedTarget=Ue,$=ue),Ue=$,P&&ne)t:{for(ue=X2,D=P,N=ne,L=0,$=D;$;$=ue($))L++;$=0;for(var ce=N;ce;ce=ue(ce))$++;for(;0<L-$;)D=ue(D),L--;for(;0<$-L;)N=ue(N),$--;for(;L--;){if(D===N||N!==null&&D===N.alternate){ue=D;break t}D=ue(D),N=ue(N)}ue=null}else ue=null;P!==null&&y0(F,U,P,ue,!1),ne!==null&&Ue!==null&&y0(F,Ue,ne,ue,!0)}}e:{if(U=z?Mr(z):window,P=U.nodeName&&U.nodeName.toLowerCase(),P==="select"||P==="input"&&U.type==="file")var Re=Mm;else if(Om(U))if(Lm)Re=s2;else{Re=a2;var se=i2}else P=U.nodeName,!P||P.toLowerCase()!=="input"||U.type!=="checkbox"&&U.type!=="radio"?z&&Pc(z.elementType)&&(Re=Mm):Re=r2;if(Re&&(Re=Re(n,z))){Dm(F,Re,s,H);break e}se&&se(n,U,z),n==="focusout"&&z&&U.type==="number"&&z.memoizedProps.value!=null&&Bc(U,"number",U.value)}switch(se=z?Mr(z):window,n){case"focusin":(Om(se)||se.contentEditable==="true")&&(Oa=se,Zc=z,Ir=null);break;case"focusout":Ir=Zc=Oa=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,Im(F,s,H);break;case"selectionchange":if(l2)break;case"keydown":case"keyup":Im(F,s,H)}var ve;if(Xc)e:{switch(n){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else Na?Rm(n,s)&&(ke="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(ke="onCompositionStart");ke&&(Em&&s.locale!=="ko"&&(Na||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&Na&&(ve=Sm()):(fi=H,qc="value"in fi?fi.value:fi.textContent,Na=!0)),se=cl(z,ke),0<se.length&&(ke=new km(ke,n,null,s,H),F.push({event:ke,listeners:se}),ve?ke.data=ve:(ve=Nm(s),ve!==null&&(ke.data=ve)))),(ve=Qw?Zw(n,s):e2(n,s))&&(ke=cl(z,"onBeforeInput"),0<ke.length&&(se=new km("onBeforeInput","beforeinput",null,s,H),F.push({event:se,listeners:ke}),se.data=ve)),F2(F,n,z,s,H)}p0(F,i)})}function ms(n,i,s){return{instance:n,listener:i,currentTarget:s}}function cl(n,i){for(var s=i+"Capture",l=[];n!==null;){var h=n,p=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||p===null||(h=Lr(n,s),h!=null&&l.unshift(ms(n,h,p)),h=Lr(n,i),h!=null&&l.push(ms(n,h,p))),n.tag===3)return l;n=n.return}return[]}function X2(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function y0(n,i,s,l,h){for(var p=i._reactName,b=[];s!==null&&s!==l;){var j=s,C=j.alternate,z=j.stateNode;if(j=j.tag,C!==null&&C===l)break;j!==5&&j!==26&&j!==27||z===null||(C=z,h?(z=Lr(s,p),z!=null&&b.unshift(ms(s,z,C))):h||(z=Lr(s,p),z!=null&&b.push(ms(s,z,C)))),s=s.return}b.length!==0&&n.push({event:i,listeners:b})}var W2=/\r\n?/g,J2=/\u0000|\uFFFD/g;function v0(n){return(typeof n=="string"?n:""+n).replace(W2,`
`).replace(J2,"")}function b0(n,i){return i=v0(i),v0(n)===i}function ze(n,i,s,l,h,p){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Ca(n,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Ca(n,""+l);break;case"className":fo(n,"class",l);break;case"tabIndex":fo(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":fo(n,s,l);break;case"style":bm(n,l,p);break;case"data":if(i!=="object"){fo(n,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){n.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(s);break}l=po(""+l),n.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(s==="formAction"?(i!=="input"&&ze(n,i,"name",h.name,h,null),ze(n,i,"formEncType",h.formEncType,h,null),ze(n,i,"formMethod",h.formMethod,h,null),ze(n,i,"formTarget",h.formTarget,h,null)):(ze(n,i,"encType",h.encType,h,null),ze(n,i,"method",h.method,h,null),ze(n,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(s);break}l=po(""+l),n.setAttribute(s,l);break;case"onClick":l!=null&&(n.onclick=Hn);break;case"onScroll":l!=null&&Se("scroll",n);break;case"onScrollEnd":l!=null&&Se("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(r(60));n.innerHTML=s}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}s=po(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(s,""+l):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":l===!0?n.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(s,l):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(s,l):n.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(s):n.setAttribute(s,l);break;case"popover":Se("beforetoggle",n),Se("toggle",n),ho(n,"popover",l);break;case"xlinkActuate":Vn(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Vn(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Vn(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Vn(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Vn(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Vn(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Vn(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Vn(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Vn(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ho(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=kw.get(s)||s,ho(n,s,l))}}function kd(n,i,s,l,h,p){switch(s){case"style":bm(n,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(r(60));n.innerHTML=s}}break;case"children":typeof l=="string"?Ca(n,l):(typeof l=="number"||typeof l=="bigint")&&Ca(n,""+l);break;case"onScroll":l!=null&&Se("scroll",n);break;case"onScrollEnd":l!=null&&Se("scrollend",n);break;case"onClick":l!=null&&(n.onclick=Hn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!um.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),i=s.slice(2,h?s.length-7:void 0),p=n[At]||null,p=p!=null?p[s]:null,typeof p=="function"&&n.removeEventListener(i,p,h),typeof l=="function")){typeof p!="function"&&p!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(i,l,h);break e}s in n?n[s]=l:l===!0?n.setAttribute(s,""):ho(n,s,l)}}}function xt(n,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",n),Se("load",n);var l=!1,h=!1,p;for(p in s)if(s.hasOwnProperty(p)){var b=s[p];if(b!=null)switch(p){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:ze(n,i,p,b,s,null)}}h&&ze(n,i,"srcSet",s.srcSet,s,null),l&&ze(n,i,"src",s.src,s,null);return;case"input":Se("invalid",n);var j=p=b=h=null,C=null,z=null;for(l in s)if(s.hasOwnProperty(l)){var H=s[l];if(H!=null)switch(l){case"name":h=H;break;case"type":b=H;break;case"checked":C=H;break;case"defaultChecked":z=H;break;case"value":p=H;break;case"defaultValue":j=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(r(137,i));break;default:ze(n,i,l,H,s,null)}}pm(n,p,j,C,z,b,h,!1);return;case"select":Se("invalid",n),l=b=p=null;for(h in s)if(s.hasOwnProperty(h)&&(j=s[h],j!=null))switch(h){case"value":p=j;break;case"defaultValue":b=j;break;case"multiple":l=j;default:ze(n,i,h,j,s,null)}i=p,s=b,n.multiple=!!l,i!=null?Ea(n,!!l,i,!1):s!=null&&Ea(n,!!l,s,!0);return;case"textarea":Se("invalid",n),p=h=l=null;for(b in s)if(s.hasOwnProperty(b)&&(j=s[b],j!=null))switch(b){case"value":l=j;break;case"defaultValue":h=j;break;case"children":p=j;break;case"dangerouslySetInnerHTML":if(j!=null)throw Error(r(91));break;default:ze(n,i,b,j,s,null)}ym(n,l,h,p);return;case"option":for(C in s)if(s.hasOwnProperty(C)&&(l=s[C],l!=null))switch(C){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ze(n,i,C,l,s,null)}return;case"dialog":Se("beforetoggle",n),Se("toggle",n),Se("cancel",n),Se("close",n);break;case"iframe":case"object":Se("load",n);break;case"video":case"audio":for(l=0;l<fs.length;l++)Se(fs[l],n);break;case"image":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"embed":case"source":case"link":Se("error",n),Se("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in s)if(s.hasOwnProperty(z)&&(l=s[z],l!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:ze(n,i,z,l,s,null)}return;default:if(Pc(i)){for(H in s)s.hasOwnProperty(H)&&(l=s[H],l!==void 0&&kd(n,i,H,l,s,void 0));return}}for(j in s)s.hasOwnProperty(j)&&(l=s[j],l!=null&&ze(n,i,j,l,s,null))}function Q2(n,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,p=null,b=null,j=null,C=null,z=null,H=null;for(P in s){var F=s[P];if(s.hasOwnProperty(P)&&F!=null)switch(P){case"checked":break;case"value":break;case"defaultValue":C=F;default:l.hasOwnProperty(P)||ze(n,i,P,null,l,F)}}for(var U in l){var P=l[U];if(F=s[U],l.hasOwnProperty(U)&&(P!=null||F!=null))switch(U){case"type":p=P;break;case"name":h=P;break;case"checked":z=P;break;case"defaultChecked":H=P;break;case"value":b=P;break;case"defaultValue":j=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(r(137,i));break;default:P!==F&&ze(n,i,U,P,l,F)}}Uc(n,b,j,C,z,H,p,h);return;case"select":P=b=j=U=null;for(p in s)if(C=s[p],s.hasOwnProperty(p)&&C!=null)switch(p){case"value":break;case"multiple":P=C;default:l.hasOwnProperty(p)||ze(n,i,p,null,l,C)}for(h in l)if(p=l[h],C=s[h],l.hasOwnProperty(h)&&(p!=null||C!=null))switch(h){case"value":U=p;break;case"defaultValue":j=p;break;case"multiple":b=p;default:p!==C&&ze(n,i,h,p,l,C)}i=j,s=b,l=P,U!=null?Ea(n,!!s,U,!1):!!l!=!!s&&(i!=null?Ea(n,!!s,i,!0):Ea(n,!!s,s?[]:"",!1));return;case"textarea":P=U=null;for(j in s)if(h=s[j],s.hasOwnProperty(j)&&h!=null&&!l.hasOwnProperty(j))switch(j){case"value":break;case"children":break;default:ze(n,i,j,null,l,h)}for(b in l)if(h=l[b],p=s[b],l.hasOwnProperty(b)&&(h!=null||p!=null))switch(b){case"value":U=h;break;case"defaultValue":P=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(r(91));break;default:h!==p&&ze(n,i,b,h,l,p)}gm(n,U,P);return;case"option":for(var ne in s)if(U=s[ne],s.hasOwnProperty(ne)&&U!=null&&!l.hasOwnProperty(ne))switch(ne){case"selected":n.selected=!1;break;default:ze(n,i,ne,null,l,U)}for(C in l)if(U=l[C],P=s[C],l.hasOwnProperty(C)&&U!==P&&(U!=null||P!=null))switch(C){case"selected":n.selected=U&&typeof U!="function"&&typeof U!="symbol";break;default:ze(n,i,C,U,l,P)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ue in s)U=s[ue],s.hasOwnProperty(ue)&&U!=null&&!l.hasOwnProperty(ue)&&ze(n,i,ue,null,l,U);for(z in l)if(U=l[z],P=s[z],l.hasOwnProperty(z)&&U!==P&&(U!=null||P!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(r(137,i));break;default:ze(n,i,z,U,l,P)}return;default:if(Pc(i)){for(var Ue in s)U=s[Ue],s.hasOwnProperty(Ue)&&U!==void 0&&!l.hasOwnProperty(Ue)&&kd(n,i,Ue,void 0,l,U);for(H in l)U=l[H],P=s[H],!l.hasOwnProperty(H)||U===P||U===void 0&&P===void 0||kd(n,i,H,U,l,P);return}}for(var D in s)U=s[D],s.hasOwnProperty(D)&&U!=null&&!l.hasOwnProperty(D)&&ze(n,i,D,null,l,U);for(F in l)U=l[F],P=s[F],!l.hasOwnProperty(F)||U===P||U==null&&P==null||ze(n,i,F,U,l,P)}function x0(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Z2(){if(typeof performance.getEntriesByType=="function"){for(var n=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var h=s[l],p=h.transferSize,b=h.initiatorType,j=h.duration;if(p&&j&&x0(b)){for(b=0,j=h.responseEnd,l+=1;l<s.length;l++){var C=s[l],z=C.startTime;if(z>j)break;var H=C.transferSize,F=C.initiatorType;H&&x0(F)&&(C=C.responseEnd,b+=H*(C<j?1:(j-z)/(C-z)))}if(--l,i+=8*(p+b)/(h.duration/1e3),n++,10<n)break}}if(0<n)return i/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var Td=null,Ed=null;function ul(n){return n.nodeType===9?n:n.ownerDocument}function w0(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function S0(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function Cd(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ad=null;function e5(){var n=window.event;return n&&n.type==="popstate"?n===Ad?!1:(Ad=n,!0):(Ad=null,!1)}var j0=typeof setTimeout=="function"?setTimeout:void 0,t5=typeof clearTimeout=="function"?clearTimeout:void 0,_0=typeof Promise=="function"?Promise:void 0,n5=typeof queueMicrotask=="function"?queueMicrotask:typeof _0<"u"?function(n){return _0.resolve(null).then(n).catch(i5)}:j0;function i5(n){setTimeout(function(){throw n})}function Ri(n){return n==="head"}function k0(n,i){var s=i,l=0;do{var h=s.nextSibling;if(n.removeChild(s),h&&h.nodeType===8)if(s=h.data,s==="/$"||s==="/&"){if(l===0){n.removeChild(h),rr(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")ps(n.ownerDocument.documentElement);else if(s==="head"){s=n.ownerDocument.head,ps(s);for(var p=s.firstChild;p;){var b=p.nextSibling,j=p.nodeName;p[Dr]||j==="SCRIPT"||j==="STYLE"||j==="LINK"&&p.rel.toLowerCase()==="stylesheet"||s.removeChild(p),p=b}}else s==="body"&&ps(n.ownerDocument.body);s=h}while(s);rr(i)}function T0(n,i){var s=n;n=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(n===0)break;n--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||n++;s=l}while(s)}function Rd(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Rd(s),Lc(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function a5(n,i,s,l){for(;n.nodeType===1;){var h=s;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[Dr])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(p=n.getAttribute("rel"),p==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(p!==h.rel||n.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||n.getAttribute("title")!==(h.title==null?null:h.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(p=n.getAttribute("src"),(p!==(h.src==null?null:h.src)||n.getAttribute("type")!==(h.type==null?null:h.type)||n.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&p&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var p=h.name==null?null:""+h.name;if(h.type==="hidden"&&n.getAttribute("name")===p)return n}else return n;if(n=on(n.nextSibling),n===null)break}return null}function r5(n,i,s){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=on(n.nextSibling),n===null))return null;return n}function E0(n,i){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!i||(n=on(n.nextSibling),n===null))return null;return n}function Nd(n){return n.data==="$?"||n.data==="$~"}function Od(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function s5(n,i){var s=n.ownerDocument;if(n.data==="$~")n._reactRetry=i;else if(n.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function on(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return n}var Dd=null;function C0(n){n=n.nextSibling;for(var i=0;n;){if(n.nodeType===8){var s=n.data;if(s==="/$"||s==="/&"){if(i===0)return on(n.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}n=n.nextSibling}return null}function A0(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return n;i--}else s!=="/$"&&s!=="/&"||i++}n=n.previousSibling}return null}function R0(n,i,s){switch(i=ul(s),n){case"html":if(n=i.documentElement,!n)throw Error(r(452));return n;case"head":if(n=i.head,!n)throw Error(r(453));return n;case"body":if(n=i.body,!n)throw Error(r(454));return n;default:throw Error(r(451))}}function ps(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Lc(n)}var ln=new Map,N0=new Set;function dl(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var ii=Q.d;Q.d={f:o5,r:l5,D:c5,C:u5,L:d5,m:h5,X:m5,S:f5,M:p5};function o5(){var n=ii.f(),i=nl();return n||i}function l5(n){var i=_a(n);i!==null&&i.tag===5&&i.type==="form"?Yp(i):ii.r(n)}var nr=typeof document>"u"?null:document;function O0(n,i,s){var l=nr;if(l&&typeof i=="string"&&i){var h=Zt(i);h='link[rel="'+n+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),N0.has(h)||(N0.add(h),n={rel:n,crossOrigin:s,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),xt(i,"link",n),ft(i),l.head.appendChild(i)))}}function c5(n){ii.D(n),O0("dns-prefetch",n,null)}function u5(n,i){ii.C(n,i),O0("preconnect",n,i)}function d5(n,i,s){ii.L(n,i,s);var l=nr;if(l&&n&&i){var h='link[rel="preload"][as="'+Zt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+Zt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+Zt(s.imageSizes)+'"]')):h+='[href="'+Zt(n)+'"]';var p=h;switch(i){case"style":p=ir(n);break;case"script":p=ar(n)}ln.has(p)||(n=v({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:n,as:i},s),ln.set(p,n),l.querySelector(h)!==null||i==="style"&&l.querySelector(gs(p))||i==="script"&&l.querySelector(ys(p))||(i=l.createElement("link"),xt(i,"link",n),ft(i),l.head.appendChild(i)))}}function h5(n,i){ii.m(n,i);var s=nr;if(s&&n){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+Zt(l)+'"][href="'+Zt(n)+'"]',p=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=ar(n)}if(!ln.has(p)&&(n=v({rel:"modulepreload",href:n},i),ln.set(p,n),s.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(ys(p)))return}l=s.createElement("link"),xt(l,"link",n),ft(l),s.head.appendChild(l)}}}function f5(n,i,s){ii.S(n,i,s);var l=nr;if(l&&n){var h=ka(l).hoistableStyles,p=ir(n);i=i||"default";var b=h.get(p);if(!b){var j={loading:0,preload:null};if(b=l.querySelector(gs(p)))j.loading=5;else{n=v({rel:"stylesheet",href:n,"data-precedence":i},s),(s=ln.get(p))&&Md(n,s);var C=b=l.createElement("link");ft(C),xt(C,"link",n),C._p=new Promise(function(z,H){C.onload=z,C.onerror=H}),C.addEventListener("load",function(){j.loading|=1}),C.addEventListener("error",function(){j.loading|=2}),j.loading|=4,hl(b,i,l)}b={type:"stylesheet",instance:b,count:1,state:j},h.set(p,b)}}}function m5(n,i){ii.X(n,i);var s=nr;if(s&&n){var l=ka(s).hoistableScripts,h=ar(n),p=l.get(h);p||(p=s.querySelector(ys(h)),p||(n=v({src:n,async:!0},i),(i=ln.get(h))&&Ld(n,i),p=s.createElement("script"),ft(p),xt(p,"link",n),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(h,p))}}function p5(n,i){ii.M(n,i);var s=nr;if(s&&n){var l=ka(s).hoistableScripts,h=ar(n),p=l.get(h);p||(p=s.querySelector(ys(h)),p||(n=v({src:n,async:!0,type:"module"},i),(i=ln.get(h))&&Ld(n,i),p=s.createElement("script"),ft(p),xt(p,"link",n),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(h,p))}}function D0(n,i,s,l){var h=(h=be.current)?dl(h):null;if(!h)throw Error(r(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=ir(s.href),s=ka(h).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=ir(s.href);var p=ka(h).hoistableStyles,b=p.get(n);if(b||(h=h.ownerDocument||h,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(n,b),(p=h.querySelector(gs(n)))&&!p._p&&(b.instance=p,b.state.loading=5),ln.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},ln.set(n,s),p||g5(h,n,s,b.state))),i&&l===null)throw Error(r(528,""));return b}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ar(s),s=ka(h).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,n))}}function ir(n){return'href="'+Zt(n)+'"'}function gs(n){return'link[rel="stylesheet"]['+n+"]"}function M0(n){return v({},n,{"data-precedence":n.precedence,precedence:null})}function g5(n,i,s,l){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=n.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),xt(i,"link",s),ft(i),n.head.appendChild(i))}function ar(n){return'[src="'+Zt(n)+'"]'}function ys(n){return"script[async]"+n}function L0(n,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=n.querySelector('style[data-href~="'+Zt(s.href)+'"]');if(l)return i.instance=l,ft(l),l;var h=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),ft(l),xt(l,"style",h),hl(l,s.precedence,n),i.instance=l;case"stylesheet":h=ir(s.href);var p=n.querySelector(gs(h));if(p)return i.state.loading|=4,i.instance=p,ft(p),p;l=M0(s),(h=ln.get(h))&&Md(l,h),p=(n.ownerDocument||n).createElement("link"),ft(p);var b=p;return b._p=new Promise(function(j,C){b.onload=j,b.onerror=C}),xt(p,"link",l),i.state.loading|=4,hl(p,s.precedence,n),i.instance=p;case"script":return p=ar(s.src),(h=n.querySelector(ys(p)))?(i.instance=h,ft(h),h):(l=s,(h=ln.get(p))&&(l=v({},s),Ld(l,h)),n=n.ownerDocument||n,h=n.createElement("script"),ft(h),xt(h,"link",l),n.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,hl(l,s.precedence,n));return i.instance}function hl(n,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,p=h,b=0;b<l.length;b++){var j=l[b];if(j.dataset.precedence===i)p=j;else if(p!==h)break}p?p.parentNode.insertBefore(n,p.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(n,i.firstChild))}function Md(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function Ld(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var fl=null;function z0(n,i,s){if(fl===null){var l=new Map,h=fl=new Map;h.set(s,l)}else h=fl,l=h.get(s),l||(l=new Map,h.set(s,l));if(l.has(n))return l;for(l.set(n,null),s=s.getElementsByTagName(n),h=0;h<s.length;h++){var p=s[h];if(!(p[Dr]||p[gt]||n==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var b=p.getAttribute(i)||"";b=n+b;var j=l.get(b);j?j.push(p):l.set(b,[p])}}return l}function U0(n,i,s){n=n.ownerDocument||n,n.head.insertBefore(s,i==="title"?n.querySelector("head > title"):null)}function y5(n,i,s){if(s===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return n=i.disabled,typeof i.precedence=="string"&&n==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function B0(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function v5(n,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var h=ir(l.href),p=i.querySelector(gs(h));if(p){i=p._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(n.count++,n=ml.bind(n),i.then(n,n)),s.state.loading|=4,s.instance=p,ft(p);return}p=i.ownerDocument||i,l=M0(l),(h=ln.get(h))&&Md(l,h),p=p.createElement("link"),ft(p);var b=p;b._p=new Promise(function(j,C){b.onload=j,b.onerror=C}),xt(p,"link",l),s.instance=p}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(n.count++,s=ml.bind(n),i.addEventListener("load",s),i.addEventListener("error",s))}}var zd=0;function b5(n,i){return n.stylesheets&&n.count===0&&gl(n,n.stylesheets),0<n.count||0<n.imgCount?function(s){var l=setTimeout(function(){if(n.stylesheets&&gl(n,n.stylesheets),n.unsuspend){var p=n.unsuspend;n.unsuspend=null,p()}},6e4+i);0<n.imgBytes&&zd===0&&(zd=62500*Z2());var h=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&gl(n,n.stylesheets),n.unsuspend)){var p=n.unsuspend;n.unsuspend=null,p()}},(n.imgBytes>zd?50:800)+i);return n.unsuspend=s,function(){n.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function ml(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gl(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var pl=null;function gl(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,pl=new Map,i.forEach(x5,n),pl=null,ml.call(n))}function x5(n,i){if(!(i.state.loading&4)){var s=pl.get(n);if(s)var l=s.get(null);else{s=new Map,pl.set(n,s);for(var h=n.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<h.length;p++){var b=h[p];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(s.set(b.dataset.precedence,b),l=b)}l&&s.set(null,l)}h=i.instance,b=h.getAttribute("data-precedence"),p=s.get(b)||l,p===l&&s.set(null,h),s.set(b,h),this.count++,l=ml.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),p?p.parentNode.insertBefore(h,p.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(h,n.firstChild)),i.state.loading|=4}}var vs={$$typeof:A,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function w5(n,i,s,l,h,p,b,j,C){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Nc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nc(0),this.hiddenUpdates=Nc(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=p,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function P0(n,i,s,l,h,p,b,j,C,z,H,F){return n=new w5(n,i,s,b,C,z,H,F,j),i=1,p===!0&&(i|=24),p=$t(3,null,null,i),n.current=p,p.stateNode=n,i=pu(),i.refCount++,n.pooledCache=i,i.refCount++,p.memoizedState={element:l,isDehydrated:s,cache:i},bu(p),n}function V0(n){return n?(n=La,n):La}function H0(n,i,s,l,h,p){h=V0(h),l.context===null?l.context=h:l.pendingContext=h,l=bi(i),l.payload={element:s},p=p===void 0?null:p,p!==null&&(l.callback=p),s=xi(n,l,i),s!==null&&(Lt(s,n,i),Wr(s,n,i))}function $0(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<i?s:i}}function Ud(n,i){$0(n,i),(n=n.alternate)&&$0(n,i)}function I0(n){if(n.tag===13||n.tag===31){var i=Xi(n,67108864);i!==null&&Lt(i,n,67108864),Ud(n,67108864)}}function q0(n){if(n.tag===13||n.tag===31){var i=Kt();i=Oc(i);var s=Xi(n,i);s!==null&&Lt(s,n,i),Ud(n,i)}}var yl=!0;function S5(n,i,s,l){var h=V.T;V.T=null;var p=Q.p;try{Q.p=2,Bd(n,i,s,l)}finally{Q.p=p,V.T=h}}function j5(n,i,s,l){var h=V.T;V.T=null;var p=Q.p;try{Q.p=8,Bd(n,i,s,l)}finally{Q.p=p,V.T=h}}function Bd(n,i,s,l){if(yl){var h=Pd(l);if(h===null)_d(n,i,l,vl,s),G0(n,l);else if(k5(h,n,i,s,l))l.stopPropagation();else if(G0(n,l),i&4&&-1<_5.indexOf(n)){for(;h!==null;){var p=_a(h);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var b=qi(p.pendingLanes);if(b!==0){var j=p;for(j.pendingLanes|=2,j.entangledLanes|=2;b;){var C=1<<31-Vt(b);j.entanglements[1]|=C,b&=~C}Nn(p),(Oe&6)===0&&(el=Bt()+500,hs(0))}}break;case 31:case 13:j=Xi(p,2),j!==null&&Lt(j,p,2),nl(),Ud(p,2)}if(p=Pd(l),p===null&&_d(n,i,l,vl,s),p===h)break;h=p}h!==null&&l.stopPropagation()}else _d(n,i,l,null,s)}}function Pd(n){return n=Hc(n),Vd(n)}var vl=null;function Vd(n){if(vl=null,n=ja(n),n!==null){var i=c(n);if(i===null)n=null;else{var s=i.tag;if(s===13){if(n=u(i),n!==null)return n;n=null}else if(s===31){if(n=f(i),n!==null)return n;n=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return vl=n,null}function F0(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(cw()){case Zf:return 2;case em:return 8;case so:case uw:return 32;case tm:return 268435456;default:return 32}default:return 32}}var Hd=!1,Ni=null,Oi=null,Di=null,bs=new Map,xs=new Map,Mi=[],_5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function G0(n,i){switch(n){case"focusin":case"focusout":Ni=null;break;case"dragenter":case"dragleave":Oi=null;break;case"mouseover":case"mouseout":Di=null;break;case"pointerover":case"pointerout":bs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":xs.delete(i.pointerId)}}function ws(n,i,s,l,h,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[h]},i!==null&&(i=_a(i),i!==null&&I0(i)),n):(n.eventSystemFlags|=l,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function k5(n,i,s,l,h){switch(i){case"focusin":return Ni=ws(Ni,n,i,s,l,h),!0;case"dragenter":return Oi=ws(Oi,n,i,s,l,h),!0;case"mouseover":return Di=ws(Di,n,i,s,l,h),!0;case"pointerover":var p=h.pointerId;return bs.set(p,ws(bs.get(p)||null,n,i,s,l,h)),!0;case"gotpointercapture":return p=h.pointerId,xs.set(p,ws(xs.get(p)||null,n,i,s,l,h)),!0}return!1}function K0(n){var i=ja(n.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){n.blockedOn=i,om(n.priority,function(){q0(s)});return}}else if(i===31){if(i=f(s),i!==null){n.blockedOn=i,om(n.priority,function(){q0(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function bl(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var s=Pd(n.nativeEvent);if(s===null){s=n.nativeEvent;var l=new s.constructor(s.type,s);Vc=l,s.target.dispatchEvent(l),Vc=null}else return i=_a(s),i!==null&&I0(i),n.blockedOn=s,!1;i.shift()}return!0}function Y0(n,i,s){bl(n)&&s.delete(i)}function T5(){Hd=!1,Ni!==null&&bl(Ni)&&(Ni=null),Oi!==null&&bl(Oi)&&(Oi=null),Di!==null&&bl(Di)&&(Di=null),bs.forEach(Y0),xs.forEach(Y0)}function xl(n,i){n.blockedOn===i&&(n.blockedOn=null,Hd||(Hd=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,T5)))}var wl=null;function X0(n){wl!==n&&(wl=n,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){wl===n&&(wl=null);for(var i=0;i<n.length;i+=3){var s=n[i],l=n[i+1],h=n[i+2];if(typeof l!="function"){if(Vd(l||s)===null)continue;break}var p=_a(s);p!==null&&(n.splice(i,3),i-=3,Pu(p,{pending:!0,data:h,method:s.method,action:l},l,h))}}))}function rr(n){function i(C){return xl(C,n)}Ni!==null&&xl(Ni,n),Oi!==null&&xl(Oi,n),Di!==null&&xl(Di,n),bs.forEach(i),xs.forEach(i);for(var s=0;s<Mi.length;s++){var l=Mi[s];l.blockedOn===n&&(l.blockedOn=null)}for(;0<Mi.length&&(s=Mi[0],s.blockedOn===null);)K0(s),s.blockedOn===null&&Mi.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var h=s[l],p=s[l+1],b=h[At]||null;if(typeof p=="function")b||X0(s);else if(b){var j=null;if(p&&p.hasAttribute("formAction")){if(h=p,b=p[At]||null)j=b.formAction;else if(Vd(h)!==null)continue}else j=b.action;typeof j=="function"?s[l+1]=j:(s.splice(l,3),l-=3),X0(s)}}}function W0(){function n(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(b){return h=b})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,h=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function $d(n){this._internalRoot=n}Sl.prototype.render=$d.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=Kt();H0(s,l,n,i,null,null)},Sl.prototype.unmount=$d.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;H0(n.current,2,null,n,null,null),nl(),i[Sa]=null}};function Sl(n){this._internalRoot=n}Sl.prototype.unstable_scheduleHydration=function(n){if(n){var i=sm();n={blockedOn:null,target:n,priority:i};for(var s=0;s<Mi.length&&i!==0&&i<Mi[s].priority;s++);Mi.splice(s,0,n),s===0&&K0(n)}};var J0=e.version;if(J0!=="19.2.7")throw Error(r(527,J0,"19.2.7"));Q.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(r(188)):(n=Object.keys(n).join(","),Error(r(268,n)));return n=g(i),n=n!==null?y(n):null,n=n===null?null:n.stateNode,n};var E5={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{Rr=jl.inject(E5),Pt=jl}catch{}}return js.createRoot=function(n,i){if(!o(n))throw Error(r(299));var s=!1,l="",h=ag,p=rg,b=sg;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(p=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError)),i=P0(n,1,!1,null,null,s,l,null,h,p,b,W0),n[Sa]=i.current,jd(n),new $d(i)},js.hydrateRoot=function(n,i,s){if(!o(n))throw Error(r(299));var l=!1,h="",p=ag,b=rg,j=sg,C=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(p=s.onUncaughtError),s.onCaughtError!==void 0&&(b=s.onCaughtError),s.onRecoverableError!==void 0&&(j=s.onRecoverableError),s.formState!==void 0&&(C=s.formState)),i=P0(n,1,!0,i,s??null,l,h,C,p,b,j,W0),i.context=V0(null),s=i.current,l=Kt(),l=Oc(l),h=bi(l),h.callback=null,xi(s,h,l),s=l,i.current.lanes=s,Or(i,s),Nn(i),n[Sa]=i.current,jd(n),new Sl(i)},js.version="19.2.7",js}var oy;function U5(){if(oy)return Fd.exports;oy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Fd.exports=z5(),Fd.exports}var B5=U5();const P5=Ab(B5);/**
 * react-router v7.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var df=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Rb=/^[\\/]{2}/;function V5(t,e){return e+t.replace(/\\/g,"/")}var ly="popstate";function cy(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function H5(t={}){function e(r,o){var g;let c=(g=o.state)==null?void 0:g.masked,{pathname:u,search:f,hash:m}=c||r.location;return _h("",{pathname:u,search:f,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default",c?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function a(r,o){return typeof o=="string"?o:Hs(o)}return I5(e,a,null,t)}function Ke(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function kn(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function $5(){return Math.random().toString(36).substring(2,10)}function uy(t,e){return{usr:t.state,key:t.key,idx:e,masked:t.mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function _h(t,e,a=null,r,o){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Sr(e):e,state:a,key:e&&e.key||r||$5(),mask:o}}function Hs({pathname:t="/",search:e="",hash:a=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function Sr(t){let e={};if(t){let a=t.indexOf("#");a>=0&&(e.hash=t.substring(a),t=t.substring(0,a));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function I5(t,e,a,r={}){let{window:o=document.defaultView,v5Compat:c=!1}=r,u=o.history,f="POP",m=null,g=y();g==null&&(g=0,u.replaceState({...u.state,idx:g},""));function y(){return(u.state||{idx:null}).idx}function v(){f="POP";let E=y(),k=E==null?null:E-g;g=E,m&&m({action:f,location:T.location,delta:k})}function x(E,k){f="PUSH";let O=cy(E)?E:_h(T.location,E,k);g=y()+1;let A=uy(O,g),B=T.createHref(O.mask||O);try{u.pushState(A,"",B)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;o.location.assign(B)}c&&m&&m({action:f,location:T.location,delta:1})}function w(E,k){f="REPLACE";let O=cy(E)?E:_h(T.location,E,k);g=y();let A=uy(O,g),B=T.createHref(O.mask||O);u.replaceState(A,"",B),c&&m&&m({action:f,location:T.location,delta:0})}function S(E){return q5(o,E)}let T={get action(){return f},get location(){return t(o,u)},listen(E){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(ly,v),m=E,()=>{o.removeEventListener(ly,v),m=null}},createHref(E){return e(o,E)},createURL:S,encodeLocation(E){let k=S(E);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:x,replace:w,go(E){return u.go(E)}};return T}function q5(t,e,a=!1){let r="http://localhost";t&&(r=t.location.origin!=="null"?t.location.origin:t.location.href),Ke(r,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:Hs(e);return o=o.replace(/ $/,"%20"),!a&&Rb.test(o)&&(o=r+o),new URL(o,r)}function Nb(t,e,a="/"){return F5(t,e,a,!1)}function F5(t,e,a,r,o){let c=typeof e=="string"?Sr(e):e,u=ci(c.pathname||"/",a);if(u==null)return null;let f=G5(t),m=null,g=iS(u);for(let y=0;m==null&&y<f.length;++y)m=nS(f[y],g,r);return m}function G5(t){let e=Ob(t);return K5(e),e}function Ob(t,e=[],a=[],r="",o=!1){let c=(u,f,m=o,g)=>{let y={relativePath:g===void 0?u.path||"":g,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(r)&&m)return;Ke(y.relativePath.startsWith(r),`Absolute route path "${y.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(r.length)}let v=Sn([r,y.relativePath]),x=a.concat(y);u.children&&u.children.length>0&&(Ke(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Ob(u.children,e,x,v,m)),!(u.path==null&&!u.index)&&e.push({path:v,score:eS(v,u.index),routesMeta:x.map((w,S)=>{let[T,E]=Lb(w.relativePath,w.caseSensitive,S===x.length-1);return{...w,matcher:T,compiledParams:E}})})};return t.forEach((u,f)=>{var m;if(u.path===""||!((m=u.path)!=null&&m.includes("?")))c(u,f);else for(let g of Db(u.path))c(u,f,!0,g)}),e}function Db(t){let e=t.split("/");if(e.length===0)return[];let[a,...r]=e,o=a.endsWith("?"),c=a.replace(/\?$/,"");if(r.length===0)return o?[c,""]:[c];let u=Db(r.join("/")),f=[];return f.push(...u.map(m=>m===""?c:[c,m].join("/"))),o&&f.push(...u),f.map(m=>t.startsWith("/")&&m===""?"/":m)}function K5(t){t.sort((e,a)=>e.score!==a.score?a.score-e.score:tS(e.routesMeta.map(r=>r.childrenIndex),a.routesMeta.map(r=>r.childrenIndex)))}var Y5=/^:[\w-]+$/,X5=3,W5=2,J5=1,Q5=10,Z5=-2,dy=t=>t==="*";function eS(t,e){let a=t.split("/"),r=a.length;return a.some(dy)&&(r+=Z5),e&&(r+=W5),a.filter(o=>!dy(o)).reduce((o,c)=>o+(Y5.test(c)?X5:c===""?J5:Q5),r)}function tS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,o)=>r===e[o])?t[t.length-1]-e[e.length-1]:0}function nS(t,e,a=!1){let{routesMeta:r}=t,o={},c="/",u=[];for(let f=0;f<r.length;++f){let m=r[f],g=f===r.length-1,y=c==="/"?e:e.slice(c.length)||"/",v={path:m.relativePath,caseSensitive:m.caseSensitive,end:g},x=m.matcher&&m.compiledParams?Mb(v,y,m.matcher,m.compiledParams):Xl(v,y),w=m.route;if(!x&&g&&a&&!r[r.length-1].route.index&&(x=Xl({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},y)),!x)return null;Object.assign(o,x.params),u.push({params:o,pathname:Sn([c,x.pathname]),pathnameBase:sS(Sn([c,x.pathnameBase])),route:w}),x.pathnameBase!=="/"&&(c=Sn([c,x.pathnameBase]))}return u}function Xl(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[a,r]=Lb(t.path,t.caseSensitive,t.end);return Mb(t,e,a,r)}function Mb(t,e,a,r){let o=e.match(a);if(!o)return null;let c=o[0],u=c.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:r.reduce((g,{paramName:y,isOptional:v},x)=>{if(y==="*"){let S=f[x]||"";u=c.slice(0,c.length-S.length).replace(/(.)\/+$/,"$1")}const w=f[x];return v&&!w?g[y]=void 0:g[y]=(w||"").replace(/%2F/g,"/"),g},{}),pathname:c,pathnameBase:u,pattern:t}}function Lb(t,e=!1,a=!0){kn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],o="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,m,g,y)=>{if(r.push({paramName:f,isOptional:m!=null}),m){let v=y.charAt(g+u.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(r.push({paramName:"*"}),o+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?o+="\\/*$":t!==""&&t!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function iS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return kn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function ci(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let a=e.endsWith("/")?e.length-1:e.length,r=t.charAt(a);return r&&r!=="/"?null:t.slice(a)||"/"}function aS(t,e="/"){let{pathname:a,search:r="",hash:o=""}=typeof t=="string"?Sr(t):t,c;return a?(a=zb(a),a.startsWith("/")?c=hy(a.substring(1),"/"):c=hy(a,e)):c=e,{pathname:c,search:oS(r),hash:lS(o)}}function hy(t,e){let a=Wl(e).split("/");return t.split("/").forEach(o=>{o===".."?a.length>1&&a.pop():o!=="."&&a.push(o)}),a.length>1?a.join("/"):"/"}function Xd(t,e,a,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function rS(t){return t.filter((e,a)=>a===0||e.route.path&&e.route.path.length>0)}function hf(t){let e=rS(t);return e.map((a,r)=>r===e.length-1?a.pathname:a.pathnameBase)}function pc(t,e,a,r=!1){let o;typeof t=="string"?o=Sr(t):(o={...t},Ke(!o.pathname||!o.pathname.includes("?"),Xd("?","pathname","search",o)),Ke(!o.pathname||!o.pathname.includes("#"),Xd("#","pathname","hash",o)),Ke(!o.search||!o.search.includes("#"),Xd("#","search","hash",o)));let c=t===""||o.pathname==="",u=c?"/":o.pathname,f;if(u==null)f=a;else{let v=e.length-1;if(!r&&u.startsWith("..")){let x=u.split("/");for(;x[0]==="..";)x.shift(),v-=1;o.pathname=x.join("/")}f=v>=0?e[v]:"/"}let m=aS(o,f),g=u&&u!=="/"&&u.endsWith("/"),y=(c||u===".")&&a.endsWith("/");return!m.pathname.endsWith("/")&&(g||y)&&(m.pathname+="/"),m}var zb=t=>t.replace(/[\\/]{2,}/g,"/"),Sn=t=>zb(t.join("/")),Wl=t=>t.replace(/\/+$/,""),sS=t=>Wl(t).replace(/^\/*/,"/"),oS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,lS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,cS=class{constructor(t,e,a,r=!1){this.status=t,this.statusText=e||"",this.internal=r,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}};function uS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function dS(t){let e=t.map(a=>a.route.path).filter(Boolean);return Sn(e)||"/"}var Ub=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Bb(t,e){let a=t;if(typeof a!="string"||!df.test(a))return{absoluteURL:void 0,isExternal:!1,to:a};let r=a,o=!1;if(Ub)try{let c=new URL(window.location.href),u=Rb.test(a)?new URL(V5(a,c.protocol)):new URL(a),f=ci(u.pathname,e);u.origin===c.origin&&f!=null?a=f+u.search+u.hash:o=!0}catch{kn(!1,`<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:o,to:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Pb=["POST","PUT","PATCH","DELETE"];new Set(Pb);var hS=["GET",...Pb];new Set(hS);var fS=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function mS(t){try{return fS.includes(new URL(t).protocol)}catch{return!1}}var jr=_.createContext(null);jr.displayName="DataRouter";var gc=_.createContext(null);gc.displayName="DataRouterState";var Vb=_.createContext(!1);function pS(){return _.useContext(Vb)}var Hb=_.createContext({isTransitioning:!1});Hb.displayName="ViewTransition";var gS=_.createContext(new Map);gS.displayName="Fetchers";var yS=_.createContext(null);yS.displayName="Await";var Wt=_.createContext(null);Wt.displayName="Navigation";var Zs=_.createContext(null);Zs.displayName="Location";var Bn=_.createContext({outlet:null,matches:[],isDataRoute:!1});Bn.displayName="Route";var ff=_.createContext(null);ff.displayName="RouteError";var $b="REACT_ROUTER_ERROR",vS="REDIRECT",bS="ROUTE_ERROR_RESPONSE";function xS(t){if(t.startsWith(`${$b}:${vS}:{`))try{let e=JSON.parse(t.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function wS(t){if(t.startsWith(`${$b}:${bS}:{`))try{let e=JSON.parse(t.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new cS(e.status,e.statusText,e.data)}catch{}}function SS(t,{relative:e}={}){Ke(_r(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:r}=_.useContext(Wt),{hash:o,pathname:c,search:u}=eo(t,{relative:e}),f=c;return a!=="/"&&(f=c==="/"?a:Sn([a,c])),r.createHref({pathname:f,search:u,hash:o})}function _r(){return _.useContext(Zs)!=null}function Ct(){return Ke(_r(),"useLocation() may be used only in the context of a <Router> component."),_.useContext(Zs).location}var Ib="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function qb(t){_.useContext(Wt).static||_.useLayoutEffect(t)}function ui(){let{isDataRoute:t}=_.useContext(Bn);return t?LS():jS()}function jS(){Ke(_r(),"useNavigate() may be used only in the context of a <Router> component.");let t=_.useContext(jr),{basename:e,navigator:a}=_.useContext(Wt),{matches:r}=_.useContext(Bn),{pathname:o}=Ct(),c=JSON.stringify(hf(r)),u=_.useRef(!1);return qb(()=>{u.current=!0}),_.useCallback((m,g={})=>{if(kn(u.current,Ib),!u.current)return;if(typeof m=="number"){a.go(m);return}let y=pc(m,JSON.parse(c),o,g.relative==="path");t==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:Sn([e,y.pathname])),(g.replace?a.replace:a.push)(y,g.state,g)},[e,a,c,o,t])}_.createContext(null);function eo(t,{relative:e}={}){let{matches:a}=_.useContext(Bn),{pathname:r}=Ct(),o=JSON.stringify(hf(a));return _.useMemo(()=>pc(t,JSON.parse(o),r,e==="path"),[t,o,r,e])}function _S(t,e){return Fb(t,e)}function Fb(t,e,a){var E;Ke(_r(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=_.useContext(Wt),{matches:o}=_.useContext(Bn),c=o[o.length-1],u=c?c.params:{},f=c?c.pathname:"/",m=c?c.pathnameBase:"/",g=c&&c.route;{let k=g&&g.path||"";Kb(f,!g||k.endsWith("*")||k.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${k}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${k}"> to <Route path="${k==="/"?"*":`${k}/*`}">.`)}let y=Ct(),v;if(e){let k=typeof e=="string"?Sr(e):e;Ke(m==="/"||((E=k.pathname)==null?void 0:E.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${k.pathname}" was given in the \`location\` prop.`),v=k}else v=y;let x=v.pathname||"/",w=x;if(m!=="/"){let k=m.replace(/^\//,"").split("/");w="/"+x.replace(/^\//,"").split("/").slice(k.length).join("/")}let S=a&&a.state.matches.length?a.state.matches.map(k=>Object.assign(k,{route:a.manifest[k.route.id]||k.route})):Nb(t,{pathname:w});kn(g||S!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),kn(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let T=AS(S&&S.map(k=>Object.assign({},k,{params:Object.assign({},u,k.params),pathname:Sn([m,r.encodeLocation?r.encodeLocation(k.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?m:Sn([m,r.encodeLocation?r.encodeLocation(k.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:k.pathnameBase])})),o,a);return e&&T?_.createElement(Zs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...v},navigationType:"POP"}},T):T}function kS(){let t=MS(),e=uS(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),a=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},u=null;return console.error("Error handled by React Router default ErrorBoundary:",t),u=_.createElement(_.Fragment,null,_.createElement("p",null,"💿 Hey developer 👋"),_.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",_.createElement("code",{style:c},"ErrorBoundary")," or"," ",_.createElement("code",{style:c},"errorElement")," prop on your route.")),_.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},e),a?_.createElement("pre",{style:o},a):null,u)}var TS=_.createElement(kS,null),Gb=class extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const a=wS(t.digest);a&&(t=a)}let e=t!==void 0?_.createElement(Bn.Provider,{value:this.props.routeContext},_.createElement(ff.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?_.createElement(ES,{error:t},e):e}};Gb.contextType=Vb;var Wd=new WeakMap;function ES({children:t,error:e}){let{basename:a}=_.useContext(Wt);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=xS(e.digest);if(r){let o=Wd.get(e);if(o)throw o;let c=Bb(r.location,a),u=c.absoluteURL||c.to;if(mS(u))throw new Error("Invalid redirect location");if(Ub&&!Wd.get(e))if(c.isExternal||r.reloadDocument)window.location.href=u;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:r.replace}));throw Wd.set(e,f),f}return _.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u}`})}}return t}function CS({routeContext:t,match:e,children:a}){let r=_.useContext(jr);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),_.createElement(Bn.Provider,{value:t},a)}function AS(t,e=[],a){let r=a==null?void 0:a.state;if(t==null){if(!r)return null;if(r.errors)t=r.matches;else if(e.length===0&&!r.initialized&&r.matches.length>0)t=r.matches;else return null}let o=t,c=r==null?void 0:r.errors;if(c!=null){let y=o.findIndex(v=>v.route.id&&(c==null?void 0:c[v.route.id])!==void 0);Ke(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),o=o.slice(0,Math.min(o.length,y+1))}let u=!1,f=-1;if(a&&r){u=r.renderFallback;for(let y=0;y<o.length;y++){let v=o[y];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(f=y),v.route.id){let{loaderData:x,errors:w}=r,S=v.route.loader&&!x.hasOwnProperty(v.route.id)&&(!w||w[v.route.id]===void 0);if(v.route.lazy||S){a.isStatic&&(u=!0),f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}}let m=a==null?void 0:a.onError,g=r&&m?(y,v)=>{var x,w;m(y,{location:r.location,params:((w=(x=r.matches)==null?void 0:x[0])==null?void 0:w.params)??{},pattern:dS(r.matches),errorInfo:v})}:void 0;return o.reduceRight((y,v,x)=>{let w,S=!1,T=null,E=null;r&&(w=c&&v.route.id?c[v.route.id]:void 0,T=v.route.errorElement||TS,u&&(f<0&&x===0?(Kb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,E=null):f===x&&(S=!0,E=v.route.hydrateFallbackElement||null)));let k=e.concat(o.slice(0,x+1)),O=()=>{let A;return w?A=T:S?A=E:v.route.Component?A=_.createElement(v.route.Component,null):v.route.element?A=v.route.element:A=y,_.createElement(CS,{match:v,routeContext:{outlet:y,matches:k,isDataRoute:r!=null},children:A})};return r&&(v.route.ErrorBoundary||v.route.errorElement||x===0)?_.createElement(Gb,{location:r.location,revalidation:r.revalidation,component:T,error:w,children:O(),routeContext:{outlet:null,matches:k,isDataRoute:!0},onError:g}):O()},null)}function mf(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function RS(t){let e=_.useContext(jr);return Ke(e,mf(t)),e}function NS(t){let e=_.useContext(gc);return Ke(e,mf(t)),e}function OS(t){let e=_.useContext(Bn);return Ke(e,mf(t)),e}function pf(t){let e=OS(t),a=e.matches[e.matches.length-1];return Ke(a.route.id,`${t} can only be used on routes that contain a unique "id"`),a.route.id}function DS(){return pf("useRouteId")}function MS(){var r;let t=_.useContext(ff),e=NS("useRouteError"),a=pf("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[a]}function LS(){let{router:t}=RS("useNavigate"),e=pf("useNavigate"),a=_.useRef(!1);return qb(()=>{a.current=!0}),_.useCallback(async(o,c={})=>{kn(a.current,Ib),a.current&&(typeof o=="number"?await t.navigate(o):await t.navigate(o,{fromRouteId:e,...c}))},[t,e])}var fy={};function Kb(t,e,a){!e&&!fy[t]&&(fy[t]=!0,kn(!1,a))}_.memo(zS);function zS({routes:t,manifest:e,future:a,state:r,isStatic:o,onError:c}){return Fb(t,void 0,{manifest:e,state:r,isStatic:o,onError:c})}function US({to:t,replace:e,state:a,relative:r}){Ke(_r(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=_.useContext(Wt);kn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=_.useContext(Bn),{pathname:u}=Ct(),f=ui(),m=pc(t,hf(c),u,r==="path"),g=JSON.stringify(m);return _.useEffect(()=>{f(JSON.parse(g),{replace:e,state:a,relative:r})},[f,g,r,e,a]),null}function cn(t){Ke(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function BS({basename:t="/",children:e=null,location:a,navigationType:r="POP",navigator:o,static:c=!1,useTransitions:u}){Ke(!_r(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=t.replace(/^\/*/,"/"),m=_.useMemo(()=>({basename:f,navigator:o,static:c,useTransitions:u,future:{}}),[f,o,c,u]);typeof a=="string"&&(a=Sr(a));let{pathname:g="/",search:y="",hash:v="",state:x=null,key:w="default",mask:S}=a,T=_.useMemo(()=>{let E=ci(g,f);return E==null?null:{location:{pathname:E,search:y,hash:v,state:x,key:w,mask:S},navigationType:r}},[f,g,y,v,x,w,r,S]);return kn(T!=null,`<Router basename="${f}"> is not able to match the URL "${g}${y}${v}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:_.createElement(Wt.Provider,{value:m},_.createElement(Zs.Provider,{children:e,value:T}))}function PS({children:t,location:e}){return _S(kh(t),e)}function kh(t,e=[]){let a=[];return _.Children.forEach(t,(r,o)=>{if(!_.isValidElement(r))return;let c=[...e,o];if(r.type===_.Fragment){a.push.apply(a,kh(r.props.children,c));return}Ke(r.type===cn,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ke(!r.props.index||!r.props.children,"An index route cannot have child routes.");let u={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(u.children=kh(r.props.children,c)),a.push(u)}),a}var Bl="get",Pl="application/x-www-form-urlencoded";function yc(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function VS(t){return yc(t)&&t.tagName.toLowerCase()==="button"}function HS(t){return yc(t)&&t.tagName.toLowerCase()==="form"}function $S(t){return yc(t)&&t.tagName.toLowerCase()==="input"}function IS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function qS(t,e){return t.button===0&&(!e||e==="_self")&&!IS(t)}var _l=null;function FS(){if(_l===null)try{new FormData(document.createElement("form"),0),_l=!1}catch{_l=!0}return _l}var GS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Jd(t){return t!=null&&!GS.has(t)?(kn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Pl}"`),null):t}function KS(t,e){let a,r,o,c,u;if(HS(t)){let f=t.getAttribute("action");r=f?ci(f,e):null,a=t.getAttribute("method")||Bl,o=Jd(t.getAttribute("enctype"))||Pl,c=new FormData(t)}else if(VS(t)||$S(t)&&(t.type==="submit"||t.type==="image")){let f=t.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=t.getAttribute("formaction")||f.getAttribute("action");if(r=m?ci(m,e):null,a=t.getAttribute("formmethod")||f.getAttribute("method")||Bl,o=Jd(t.getAttribute("formenctype"))||Jd(f.getAttribute("enctype"))||Pl,c=new FormData(f,t),!FS()){let{name:g,type:y,value:v}=t;if(y==="image"){let x=g?`${g}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else g&&c.append(g,v)}}else{if(yc(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=Bl,r=null,o=Pl,u=t}return c&&o==="text/plain"&&(u=c,c=void 0),{action:r,method:a.toLowerCase(),encType:o,formData:c,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function gf(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Yb(t,e,a,r){let o=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return a?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${r}`:o.pathname=`${o.pathname}.${r}`:o.pathname==="/"?o.pathname=`_root.${r}`:e&&ci(o.pathname,e)==="/"?o.pathname=`${Wl(e)}/_root.${r}`:o.pathname=`${Wl(o.pathname)}.${r}`,o}async function YS(t,e){if(t.id in e)return e[t.id];try{let a=await import(t.module);return e[t.id]=a,a}catch(a){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function XS(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function WS(t,e,a){let r=await Promise.all(t.map(async o=>{let c=e.routes[o.route.id];if(c){let u=await YS(c,a);return u.links?u.links():[]}return[]}));return ej(r.flat(1).filter(XS).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function my(t,e,a,r,o,c){let u=(m,g)=>a[g]?m.route.id!==a[g].route.id:!0,f=(m,g)=>{var y;return a[g].pathname!==m.pathname||((y=a[g].route.path)==null?void 0:y.endsWith("*"))&&a[g].params["*"]!==m.params["*"]};return c==="assets"?e.filter((m,g)=>u(m,g)||f(m,g)):c==="data"?e.filter((m,g)=>{var v;let y=r.routes[m.route.id];if(!y||!y.hasLoader)return!1;if(u(m,g)||f(m,g))return!0;if(m.route.shouldRevalidate){let x=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((v=a[0])==null?void 0:v.params)||{},nextUrl:new URL(t,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function JS(t,e,{includeHydrateFallback:a}={}){return QS(t.map(r=>{let o=e.routes[r.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),a&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function QS(t){return[...new Set(t)]}function ZS(t){let e={},a=Object.keys(t).sort();for(let r of a)e[r]=t[r];return e}function ej(t,e){let a=new Set;return new Set(e),t.reduce((r,o)=>{let c=JSON.stringify(ZS(o));return a.has(c)||(a.add(c),r.push({key:c,link:o})),r},[])}function yf(){let t=_.useContext(jr);return gf(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function tj(){let t=_.useContext(gc);return gf(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var vf=_.createContext(void 0);vf.displayName="FrameworkContext";function vc(){let t=_.useContext(vf);return gf(t,"You must render this element inside a <HydratedRouter> element"),t}function nj(t,e){let a=_.useContext(vf),[r,o]=_.useState(!1),[c,u]=_.useState(!1),{onFocus:f,onBlur:m,onMouseEnter:g,onMouseLeave:y,onTouchStart:v}=e,x=_.useRef(null);_.useEffect(()=>{if(t==="render"&&u(!0),t==="viewport"){let T=k=>{k.forEach(O=>{u(O.isIntersecting)})},E=new IntersectionObserver(T,{threshold:.5});return x.current&&E.observe(x.current),()=>{E.disconnect()}}},[t]),_.useEffect(()=>{if(r){let T=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(T)}}},[r]);let w=()=>{o(!0)},S=()=>{o(!1),u(!1)};return a?t!=="intent"?[c,x,{}]:[c,x,{onFocus:_s(f,w),onBlur:_s(m,S),onMouseEnter:_s(g,w),onMouseLeave:_s(y,S),onTouchStart:_s(v,w)}]:[!1,x,{}]}function _s(t,e){return a=>{t&&t(a),a.defaultPrevented||e(a)}}function ij({page:t,...e}){let a=pS(),{nonce:r}=vc(),{router:o}=yf(),c=_.useMemo(()=>Nb(o.routes,t,o.basename),[o.routes,t,o.basename]);return c?(e.nonce==null&&r&&(e={...e,nonce:r}),a?_.createElement(rj,{page:t,matches:c,...e}):_.createElement(sj,{page:t,matches:c,...e})):null}function aj(t){let{manifest:e,routeModules:a}=vc(),[r,o]=_.useState([]);return _.useEffect(()=>{let c=!1;return WS(t,e,a).then(u=>{c||o(u)}),()=>{c=!0}},[t,e,a]),r}function rj({page:t,matches:e,...a}){let r=Ct(),{future:o}=vc(),{basename:c}=yf(),u=_.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let f=Yb(t,c,o.v8_trailingSlashAwareDataRequests,"rsc"),m=!1,g=[];for(let y of e)typeof y.route.shouldRevalidate=="function"?m=!0:g.push(y.route.id);return m&&g.length>0&&f.searchParams.set("_routes",g.join(",")),[f.pathname+f.search]},[c,o.v8_trailingSlashAwareDataRequests,t,r,e]);return _.createElement(_.Fragment,null,u.map(f=>_.createElement("link",{key:f,rel:"prefetch",as:"fetch",href:f,...a})))}function sj({page:t,matches:e,...a}){let r=Ct(),{future:o,manifest:c,routeModules:u}=vc(),{basename:f}=yf(),{loaderData:m,matches:g}=tj(),y=_.useMemo(()=>my(t,e,g,c,r,"data"),[t,e,g,c,r]),v=_.useMemo(()=>my(t,e,g,c,r,"assets"),[t,e,g,c,r]),x=_.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let T=new Set,E=!1;if(e.forEach(O=>{var B;let A=c.routes[O.route.id];!A||!A.hasLoader||(!y.some(G=>G.route.id===O.route.id)&&O.route.id in m&&((B=u[O.route.id])!=null&&B.shouldRevalidate)||A.hasClientLoader?E=!0:T.add(O.route.id))}),T.size===0)return[];let k=Yb(t,f,o.v8_trailingSlashAwareDataRequests,"data");return E&&T.size>0&&k.searchParams.set("_routes",e.filter(O=>T.has(O.route.id)).map(O=>O.route.id).join(",")),[k.pathname+k.search]},[f,o.v8_trailingSlashAwareDataRequests,m,r,c,y,e,t,u]),w=_.useMemo(()=>JS(v,c),[v,c]),S=aj(v);return _.createElement(_.Fragment,null,x.map(T=>_.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...a})),w.map(T=>_.createElement("link",{key:T,rel:"modulepreload",href:T,...a})),S.map(({key:T,link:E})=>_.createElement("link",{key:T,nonce:a.nonce,...E,crossOrigin:E.crossOrigin??a.crossOrigin})))}function oj(...t){return e=>{t.forEach(a=>{typeof a=="function"?a(e):a!=null&&(a.current=e)})}}var lj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{lj&&(window.__reactRouterVersion="7.18.0")}catch{}function cj({basename:t,children:e,useTransitions:a,window:r}){let o=_.useRef();o.current==null&&(o.current=H5({window:r,v5Compat:!0}));let c=o.current,[u,f]=_.useState({action:c.action,location:c.location}),m=_.useCallback(g=>{a===!1?f(g):_.startTransition(()=>f(g))},[a]);return _.useLayoutEffect(()=>c.listen(m),[c,m]),_.createElement(BS,{basename:t,children:e,location:u.location,navigationType:u.action,navigator:c,useTransitions:a})}var bf=_.forwardRef(function({onClick:e,discover:a="render",prefetch:r="none",relative:o,reloadDocument:c,replace:u,mask:f,state:m,target:g,to:y,preventScrollReset:v,viewTransition:x,defaultShouldRevalidate:w,...S},T){let{basename:E,navigator:k,useTransitions:O}=_.useContext(Wt),A=typeof y=="string"&&df.test(y),B=Bb(y,E);y=B.to;let G=SS(y,{relative:o}),W=Ct(),q=null;if(f){let ge=pc(f,[],W.mask?W.mask.pathname:"/",!0);E!=="/"&&(ge.pathname=ge.pathname==="/"?E:Sn([E,ge.pathname])),q=k.createHref(ge)}let[X,M,Y]=nj(r,S),K=fj(y,{replace:u,mask:f,state:m,target:g,preventScrollReset:v,relative:o,viewTransition:x,defaultShouldRevalidate:w,useTransitions:O});function oe(ge){e&&e(ge),ge.defaultPrevented||K(ge)}let je=!(B.isExternal||c),Ce=_.createElement("a",{...S,...Y,href:(je?q:void 0)||B.absoluteURL||G,onClick:je?oe:e,ref:oj(T,M),target:g,"data-discover":!A&&a==="render"?"true":void 0});return X&&!A?_.createElement(_.Fragment,null,Ce,_.createElement(ij,{page:G})):Ce});bf.displayName="Link";var uj=_.forwardRef(function({"aria-current":e="page",caseSensitive:a=!1,className:r="",end:o=!1,style:c,to:u,viewTransition:f,children:m,...g},y){let v=eo(u,{relative:g.relative}),x=Ct(),w=_.useContext(gc),{navigator:S,basename:T}=_.useContext(Wt),E=w!=null&&vj(v)&&f===!0,k=S.encodeLocation?S.encodeLocation(v).pathname:v.pathname,O=x.pathname,A=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;a||(O=O.toLowerCase(),A=A?A.toLowerCase():null,k=k.toLowerCase()),A&&T&&(A=ci(A,T)||A);const B=k!=="/"&&k.endsWith("/")?k.length-1:k.length;let G=O===k||!o&&O.startsWith(k)&&O.charAt(B)==="/",W=A!=null&&(A===k||!o&&A.startsWith(k)&&A.charAt(k.length)==="/"),q={isActive:G,isPending:W,isTransitioning:E},X=G?e:void 0,M;typeof r=="function"?M=r(q):M=[r,G?"active":null,W?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let Y=typeof c=="function"?c(q):c;return _.createElement(bf,{...g,"aria-current":X,className:M,ref:y,style:Y,to:u,viewTransition:f},typeof m=="function"?m(q):m)});uj.displayName="NavLink";var dj=_.forwardRef(({discover:t="render",fetcherKey:e,navigate:a,reloadDocument:r,replace:o,state:c,method:u=Bl,action:f,onSubmit:m,relative:g,preventScrollReset:y,viewTransition:v,defaultShouldRevalidate:x,...w},S)=>{let{useTransitions:T}=_.useContext(Wt),E=gj(),k=yj(f,{relative:g}),O=u.toLowerCase()==="get"?"get":"post",A=typeof f=="string"&&df.test(f),B=G=>{if(m&&m(G),G.defaultPrevented)return;G.preventDefault();let W=G.nativeEvent.submitter,q=(W==null?void 0:W.getAttribute("formmethod"))||u,X=()=>E(W||G.currentTarget,{fetcherKey:e,method:q,navigate:a,replace:o,state:c,relative:g,preventScrollReset:y,viewTransition:v,defaultShouldRevalidate:x});T&&a!==!1?_.startTransition(()=>X()):X()};return _.createElement("form",{ref:S,method:O,action:k,onSubmit:r?m:B,...w,"data-discover":!A&&t==="render"?"true":void 0})});dj.displayName="Form";function hj(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Xb(t){let e=_.useContext(jr);return Ke(e,hj(t)),e}function fj(t,{target:e,replace:a,mask:r,state:o,preventScrollReset:c,relative:u,viewTransition:f,defaultShouldRevalidate:m,useTransitions:g}={}){let y=ui(),v=Ct(),x=eo(t,{relative:u});return _.useCallback(w=>{if(qS(w,e)){w.preventDefault();let S=a!==void 0?a:Hs(v)===Hs(x),T=()=>y(t,{replace:S,mask:r,state:o,preventScrollReset:c,relative:u,viewTransition:f,defaultShouldRevalidate:m});g?_.startTransition(()=>T()):T()}},[v,y,x,a,r,o,e,t,c,u,f,m,g])}var mj=0,pj=()=>`__${String(++mj)}__`;function gj(){let{router:t}=Xb("useSubmit"),{basename:e}=_.useContext(Wt),a=DS(),r=t.fetch,o=t.navigate;return _.useCallback(async(c,u={})=>{let{action:f,method:m,encType:g,formData:y,body:v}=KS(c,e);if(u.navigate===!1){let x=u.fetcherKey||pj();await r(x,a,u.action||f,{defaultShouldRevalidate:u.defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:y,body:v,formMethod:u.method||m,formEncType:u.encType||g,flushSync:u.flushSync})}else await o(u.action||f,{defaultShouldRevalidate:u.defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:y,body:v,formMethod:u.method||m,formEncType:u.encType||g,replace:u.replace,state:u.state,fromRouteId:a,flushSync:u.flushSync,viewTransition:u.viewTransition})},[r,o,e,a])}function yj(t,{relative:e}={}){let{basename:a}=_.useContext(Wt),r=_.useContext(Bn);Ke(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),c={...eo(t||".",{relative:e})},u=Ct();if(t==null){c.search=u.search;let f=new URLSearchParams(c.search),m=f.getAll("index");if(m.some(y=>y==="")){f.delete("index"),m.filter(v=>v).forEach(v=>f.append("index",v));let y=f.toString();c.search=y?`?${y}`:""}}return(!t||t===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(c.pathname=c.pathname==="/"?a:Sn([a,c.pathname])),Hs(c)}function vj(t,{relative:e}={}){let a=_.useContext(Hb);Ke(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Xb("useViewTransitionState"),o=eo(t,{relative:e});if(!a.isTransitioning)return!1;let c=ci(a.currentLocation.pathname,r)||a.currentLocation.pathname,u=ci(a.nextLocation.pathname,r)||a.nextLocation.pathname;return Xl(o.pathname,u)!=null||Xl(o.pathname,c)!=null}function xf(){const t=ui(),a=Ct().pathname==="/",[r,o]=_.useState(!1),[c,u]=_.useState(!1),[f,m]=_.useState("");_.useEffect(()=>{const y=()=>o(window.scrollY>40);return window.addEventListener("scroll",y),()=>window.removeEventListener("scroll",y)},[]),_.useEffect(()=>{document.querySelectorAll('a[href^="#"]').forEach(y=>{y.addEventListener("click",function(v){v.preventDefault();const x=document.querySelector(this.getAttribute("href"));x&&x.scrollIntoView({behavior:"smooth"})})})},[]);const g=()=>u(!1);return _.useEffect(()=>(c?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[c]),_.useEffect(()=>{const y=v=>{v.key==="Escape"&&g()};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[]),d.jsxs(d.Fragment,{children:[d.jsxs("nav",{className:r?"scrolled":"",children:[d.jsxs("div",{className:"logo",children:[d.jsx("div",{className:"logo-icon",children:"F"}),d.jsx("h1",{children:"FrameX"})]}),d.jsx("ul",{children:a?d.jsxs(d.Fragment,{children:[d.jsx("li",{children:d.jsx("a",{href:"#features",onClick:g,children:"Features"})}),d.jsx("li",{children:d.jsx("a",{href:"#community",onClick:g,children:"Community"})}),d.jsx("li",{children:d.jsx("a",{href:"#about",onClick:g,children:"About"})}),d.jsx("li",{children:d.jsx("a",{href:"#pricing",onClick:g,children:"Pricing"})})]}):d.jsx("li",{children:d.jsx(bf,{to:"/",className:"back-home-link",onClick:g,children:"← Back to Home"})})}),d.jsxs("div",{className:"nav-right",children:[a&&d.jsxs("div",{className:"auth-buttons",children:[d.jsx("button",{className:"login",onClick:()=>t("/login"),children:"Log In"}),d.jsx("button",{className:"get-started",onClick:()=>t("/login"),children:"Get Started"})]}),d.jsx("button",{className:"menu-toggle",onClick:()=>u(!c),"aria-label":"Toggle menu",children:d.jsx("i",{className:`menu-toggle-icon ${c?"fas fa-times":"fas fa-bars"}`})})]}),d.jsx("style",{children:`
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
            .signup,
            .get-started {
                display: none;
            }
        }
      `})]}),d.jsx("div",{className:`mobile-backdrop ${c?"active":""}`,onClick:g}),d.jsxs("div",{className:`mobile-drawer ${c?"active":""}`,children:[d.jsx("button",{className:"drawer-close",onClick:g,"aria-label":"Close menu",children:d.jsx("i",{className:"fas fa-times"})}),d.jsxs("div",{className:"drawer-menu-items",children:[d.jsx("a",{href:"#features",className:f==="features"?"active":"",onClick:()=>{m("features"),g()},children:"Features"}),d.jsx("a",{href:"#community",className:f==="community"?"active":"",onClick:()=>{m("community"),g()},children:"Community"}),d.jsx("a",{href:"#about",className:f==="about"?"active":"",onClick:()=>{m("about"),g()},children:"About"}),d.jsx("a",{href:"#pricing",className:f==="pricing"?"active":"",onClick:()=>{m("pricing"),g()},children:"Pricing"}),d.jsx("a",{href:"#get-started",className:"drawer-cta",onClick:g,children:"Get Started"})]})]})]})}function wf(){return d.jsxs("footer",{children:[d.jsxs("div",{className:"footer-content",children:[d.jsxs("div",{className:"footer-logo",children:[d.jsx("div",{className:"logo-icon",children:"F"}),d.jsx("h2",{children:"FrameX"})]}),d.jsxs("div",{className:"footer-links",children:[d.jsx("a",{href:"#",children:"Privacy Policy"}),d.jsx("a",{href:"/terms",children:"Terms of Service"}),d.jsx("a",{href:"#",children:"Contact Us"})]})]}),d.jsx("div",{className:"footer-divider"}),d.jsx("p",{children:"© 2026 FrameX. All rights reserved."}),d.jsx("style",{children:`
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
      `})]})}function bj(){const[t,e]=_.useState(!1);return _.useEffect(()=>{document.title="FrameX | Share Your World in Frames"},[]),_.useEffect(()=>{const a=document.querySelectorAll(".reveal"),r=new IntersectionObserver(m=>{m.forEach(g=>{g.isIntersecting&&(g.target.classList.add("visible"),r.unobserve(g.target))})},{threshold:.1,rootMargin:"0px 0px -60px 0px"});a.forEach(m=>r.observe(m)),document.querySelectorAll(".feature-card").forEach(m=>{m.addEventListener("mousemove",g=>{const y=m.getBoundingClientRect(),v=(g.clientX-y.left)/y.width*100,x=(g.clientY-y.top)/y.height*100;m.style.setProperty("--mouse-x",v+"%"),m.style.setProperty("--mouse-y",x+"%")})});const c=document.querySelectorAll(".hero-stat"),u=m=>{const g=(m.clientX/window.innerWidth-.5)*6,y=(m.clientY/window.innerHeight-.5)*6;c.forEach((v,x)=>{const w=x===0?1:-.8;v.style.transform=`translate(${g*w}px, ${y*w}px)`})};window.addEventListener("mousemove",u);const f=document.querySelector(".hero-media");if(f){const m=new IntersectionObserver(([g])=>{g.isIntersecting&&(g.target.classList.add("card-entered"),m.unobserve(g.target))},{threshold:.1,rootMargin:"0px 0px -40px 0px"});return m.observe(f),()=>{r.disconnect(),window.removeEventListener("mousemove",u),m.disconnect()}}return()=>{r.disconnect(),window.removeEventListener("mousemove",u)}},[]),d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"aurora-bg"}),d.jsx(xf,{}),d.jsxs("section",{className:"hero",id:"hero",children:[d.jsxs("div",{className:"hero-content",children:[d.jsxs("div",{className:"hero-badge",children:[d.jsx("span",{children:"New"}),"Now available on iOS & Android"]}),d.jsxs("h1",{children:["Share Your World",d.jsx("br",{}),"in ",d.jsx("span",{className:"gradient-text",children:"Every Frame"})]}),d.jsx("p",{children:"Discover, create, and connect with short videos and photos. Join millions of creators sharing their stories through the lens."}),d.jsxs("div",{className:"cta-buttons",children:[d.jsxs("a",{href:"#get-started",className:"btn-primary",children:["Get Started ",d.jsx("i",{className:"fas fa-arrow-right"})]}),d.jsxs("a",{href:"#download",className:"btn-secondary",children:[d.jsx("i",{className:"fas fa-mobile-alt"})," Download App"]}),d.jsxs("a",{href:"#community",className:"btn-secondary",children:[d.jsx("i",{className:"fas fa-play"})," Explore Community"]})]})]}),d.jsxs("div",{className:"hero-media",children:[d.jsxs("div",{className:"glass-card-stack",children:[d.jsxs("div",{className:"glass-card",children:[d.jsx("div",{className:"glass-card-decoration"}),d.jsx("div",{className:"glass-card-icon",children:d.jsx("i",{className:"fas fa-video"})}),d.jsx("h3",{children:"Short Videos"}),d.jsx("p",{children:"Create and watch short, engaging videos"})]}),d.jsxs("div",{className:"glass-card",children:[d.jsx("div",{className:"glass-card-decoration glass-card-decoration--2"}),d.jsx("div",{className:"glass-card-icon",children:d.jsx("i",{className:"fas fa-camera"})}),d.jsx("h3",{children:"Photo Sharing"}),d.jsx("p",{children:"Share moments with high-quality photos"})]}),d.jsxs("div",{className:"glass-card",children:[d.jsx("div",{className:"glass-card-icon",children:d.jsx("i",{className:"fas fa-users"})}),d.jsx("h3",{children:"Community"}),d.jsx("p",{children:"Connect with creators worldwide"})]})]}),d.jsxs("div",{className:"hero-stat hero-stat--1",children:[d.jsx("strong",{children:"10M+"}),d.jsx("span",{children:"Active Users"})]}),d.jsxs("div",{className:"hero-stat hero-stat--2",children:[d.jsx("strong",{children:"4.8★"}),d.jsx("span",{children:"App Rating"})]})]})]}),d.jsxs("section",{id:"features",className:"features",children:[d.jsxs("div",{className:"features-header reveal",children:[d.jsx("span",{className:"section-label",children:"Features"}),d.jsx("h2",{children:"Built for Creators"}),d.jsx("p",{children:"Everything you need to capture, edit, and share your perspective with the world."})]}),d.jsx("div",{className:"feature-cards",children:[{icon:"fa-video",title:"Short Videos",desc:"Create and watch short, engaging videos on any topic. Our smart editor makes it effortless."},{icon:"fa-camera",title:"Photo Sharing",desc:"Share moments with high-quality photos and professional-grade filters built right in."},{icon:"fa-users",title:"Community",desc:"Connect with creators and friends from around the world. Your audience is waiting."}].map((a,r)=>d.jsxs("div",{className:`feature-card reveal reveal-delay-${r+1}`,children:[d.jsx("div",{className:"feature-icon",children:d.jsx("i",{className:`fas ${a.icon}`})}),d.jsx("h3",{children:a.title}),d.jsx("p",{children:a.desc})]},a.title))})]}),!t&&d.jsx("div",{className:"browser-bar",children:d.jsxs("div",{className:"browser-bar-content",children:[d.jsxs("div",{className:"browser-bar-text",children:[d.jsx("span",{className:"browser-bar-icon",children:d.jsx("i",{className:"fas fa-mobile-alt"})}),d.jsx("span",{children:"Continue in browser for the full experience"})]}),d.jsxs("button",{className:"browser-bar-btn",children:["Continue ",d.jsx("i",{className:"fas fa-arrow-right"})]}),d.jsx("button",{className:"browser-bar-close",onClick:()=>e(!0),"aria-label":"Dismiss",children:d.jsx("i",{className:"fas fa-times"})})]})}),d.jsxs("section",{id:"community",className:"community",children:[d.jsx("h2",{className:"reveal",children:"Join Our Community"}),d.jsx("p",{className:"reveal reveal-delay-1",children:"Follow us on social media and be part of the FrameX movement."}),d.jsx("div",{className:"social-links reveal reveal-delay-2",children:["instagram","twitter","tiktok","facebook","youtube"].map(a=>d.jsx("a",{href:"#",className:"social-link","aria-label":a.charAt(0).toUpperCase()+a.slice(1),children:d.jsx("i",{className:`fab fa-${a}`})},a))})]}),d.jsx("section",{id:"download",className:"download",children:d.jsxs("div",{className:"download-glass reveal",children:[d.jsx("span",{className:"section-label",children:"Get the App"}),d.jsx("h2",{children:"Download FrameX Now"}),d.jsx("p",{children:"Available on iOS and Android. Start sharing your story today."}),d.jsxs("div",{className:"download-buttons",children:[d.jsxs("a",{href:"#",className:"app-store",children:[d.jsx("i",{className:"fab fa-apple fa-lg"})," App Store"]}),d.jsxs("a",{href:"#",className:"google-play",children:[d.jsx("i",{className:"fab fa-google-play fa-lg"})," Google Play"]})]})]})}),d.jsx(wf,{}),d.jsx("style",{children:`
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
      `})]})}function xj(){_.useEffect(()=>{const a=new IntersectionObserver(r=>{r.forEach(o=>{o.isIntersecting&&o.target.classList.add("visible")})},{threshold:.1});return document.querySelectorAll(".reveal").forEach(r=>a.observe(r)),()=>a.disconnect()},[]);const t=[{name:"Alex Chen",role:"CEO & Founder",icon:"fa-user-tie"},{name:"Sarah Mitchell",role:"CTO",icon:"fa-laptop-code"},{name:"David Park",role:"Head of Design",icon:"fa-paint-brush"},{name:"Emily Rodriguez",role:"VP of Engineering",icon:"fa-cogs"}],e=[{icon:"fa-bolt",title:"Lightning Fast",desc:"Optimized for speed with sub-second response times across all platforms."},{icon:"fa-shield-alt",title:"Secure by Design",desc:"End-to-end encryption with enterprise-grade security protocols."},{icon:"fa-layer-group",title:"Modular Architecture",desc:"Plugin-based system that grows with your creative workflow."},{icon:"fa-robot",title:"AI-Powered",desc:"Intelligent suggestions and automation that learn from your style."}];return d.jsxs(d.Fragment,{children:[d.jsx(xf,{}),d.jsx("div",{className:"aurora-bg"}),d.jsxs("main",{className:"about-page",children:[d.jsxs("section",{className:"about-hero",children:[d.jsx("div",{className:"about-hero-bg-glow"}),d.jsxs("div",{className:"about-hero-content",children:[d.jsx("span",{className:"section-label reveal",children:"About FrameX"}),d.jsxs("h1",{className:"about-hero-title reveal reveal-delay-1",children:["Redefining ",d.jsx("span",{className:"lemon-text",children:"Creative"})," Boundaries"]}),d.jsx("p",{className:"about-hero-sub reveal reveal-delay-2",children:"We believe great design should be effortless. FrameX brings together cutting-edge AI, real-time collaboration, and intuitive tools to empower creators worldwide."}),d.jsxs("div",{className:"about-hero-stats reveal reveal-delay-3",children:[d.jsxs("div",{className:"stat-item",children:[d.jsx("span",{className:"stat-number",children:"50K+"}),d.jsx("span",{className:"stat-label",children:"Active Users"})]}),d.jsx("div",{className:"stat-divider"}),d.jsxs("div",{className:"stat-item",children:[d.jsx("span",{className:"stat-number",children:"99.9%"}),d.jsx("span",{className:"stat-label",children:"Uptime"})]}),d.jsx("div",{className:"stat-divider"}),d.jsxs("div",{className:"stat-item",children:[d.jsx("span",{className:"stat-number",children:"120+"}),d.jsx("span",{className:"stat-label",children:"Countries"})]})]})]})]}),d.jsx("section",{className:"about-section",id:"our-story",children:d.jsxs("div",{className:"about-container",children:[d.jsx("span",{className:"section-label reveal",children:"Our Story"}),d.jsx("h2",{className:"section-title reveal",children:"How FrameX Began"}),d.jsxs("div",{className:"story-card glass reveal reveal-delay-1",children:[d.jsx("div",{className:"story-icon",children:d.jsx("i",{className:"fas fa-quote-left"})}),d.jsx("p",{className:"story-text",children:"FrameX was born in 2023 from a simple observation: creative tools were either powerful but complex, or simple but limiting. Our founders—engineers, designers, and artists—set out to build something different: a platform that combines professional-grade capabilities with an intuitive, joyful experience."}),d.jsx("p",{className:"story-text",children:"What started as a small project in a co-working space has grown into a global community of creators. Today, FrameX powers workflows for freelance designers, creative agencies, and enterprise teams across 120+ countries."}),d.jsxs("div",{className:"story-meta",children:[d.jsxs("span",{children:[d.jsx("i",{className:"fas fa-calendar"})," Founded 2023"]}),d.jsxs("span",{children:[d.jsx("i",{className:"fas fa-users"})," Team of 48"]}),d.jsxs("span",{children:[d.jsx("i",{className:"fas fa-globe"})," Global Reach"]})]})]})]})}),d.jsx("section",{className:"about-section",id:"mission-vision",children:d.jsxs("div",{className:"about-container",children:[d.jsx("span",{className:"section-label reveal",children:"Mission & Vision"}),d.jsx("h2",{className:"section-title reveal",children:"What Drives Us"}),d.jsxs("div",{className:"mv-grid",children:[d.jsxs("div",{className:"mv-card glass reveal reveal-delay-1",children:[d.jsx("div",{className:"mv-icon",children:d.jsx("i",{className:"fas fa-bullseye"})}),d.jsx("h3",{children:"Our Mission"}),d.jsx("p",{children:"To democratize creative technology by building tools that are powerful enough for professionals yet accessible enough for beginners. We remove barriers, not features."})]}),d.jsxs("div",{className:"mv-card glass reveal reveal-delay-2",children:[d.jsx("div",{className:"mv-icon",children:d.jsx("i",{className:"fas fa-eye"})}),d.jsx("h3",{children:"Our Vision"}),d.jsx("p",{children:"A world where anyone can bring their creative vision to life without wrestling with software. We envision FrameX as the invisible bridge between imagination and creation."})]})]})]})}),d.jsx("section",{className:"about-section",id:"what-makes-us-different",children:d.jsxs("div",{className:"about-container",children:[d.jsx("span",{className:"section-label reveal",children:"Why FrameX"}),d.jsx("h2",{className:"section-title reveal",children:"What Makes Us Different"}),d.jsx("div",{className:"features-grid",children:e.map((a,r)=>d.jsxs("div",{className:`feature-card glass reveal reveal-delay-${r+1}`,children:[d.jsx("div",{className:"feature-card-icon",children:d.jsx("i",{className:`fas ${a.icon}`})}),d.jsx("h3",{children:a.title}),d.jsx("p",{children:a.desc})]},a.title))})]})}),d.jsx("section",{className:"about-section",id:"team",children:d.jsxs("div",{className:"about-container",children:[d.jsx("span",{className:"section-label reveal",children:"Leadership"}),d.jsx("h2",{className:"section-title reveal",children:"Meet the Team"}),d.jsx("div",{className:"team-grid",children:t.map((a,r)=>d.jsxs("div",{className:`team-card glass reveal reveal-delay-${r+1}`,children:[d.jsx("div",{className:"team-avatar",children:d.jsx("i",{className:`fas ${a.icon}`})}),d.jsx("h3",{children:a.name}),d.jsx("p",{className:"team-role",children:a.role})]},a.name))})]})}),d.jsx("section",{className:"about-section",id:"info",children:d.jsxs("div",{className:"about-container",children:[d.jsx("span",{className:"section-label reveal",children:"Snapshot"}),d.jsx("h2",{className:"section-title reveal",children:"Startup at a Glance"}),d.jsx("div",{className:"info-card glass reveal reveal-delay-1",children:d.jsxs("div",{className:"info-grid",children:[d.jsxs("div",{className:"info-item",children:[d.jsx("i",{className:"fas fa-calendar-alt"}),d.jsx("span",{className:"info-label",children:"Founded"}),d.jsx("span",{className:"info-value",children:"2023"})]}),d.jsxs("div",{className:"info-item",children:[d.jsx("i",{className:"fas fa-map-pin"}),d.jsx("span",{className:"info-label",children:"Headquarters"}),d.jsx("span",{className:"info-value",children:"San Francisco, CA"})]}),d.jsxs("div",{className:"info-item",children:[d.jsx("i",{className:"fas fa-user-friends"}),d.jsx("span",{className:"info-label",children:"Team Size"}),d.jsx("span",{className:"info-value",children:"48 Members"})]}),d.jsxs("div",{className:"info-item",children:[d.jsx("i",{className:"fas fa-trophy"}),d.jsx("span",{className:"info-label",children:"Funding"}),d.jsx("span",{className:"info-value",children:"Series A"})]}),d.jsxs("div",{className:"info-item",children:[d.jsx("i",{className:"fas fa-rocket"}),d.jsx("span",{className:"info-label",children:"Stage"}),d.jsx("span",{className:"info-value",children:"Growth"})]}),d.jsxs("div",{className:"info-item",children:[d.jsx("i",{className:"fas fa-handshake"}),d.jsx("span",{className:"info-label",children:"Partners"}),d.jsx("span",{className:"info-value",children:"20+"})]})]})})]})}),d.jsx("section",{className:"about-section",id:"contact",children:d.jsxs("div",{className:"about-container",children:[d.jsx("span",{className:"section-label reveal",children:"Contact"}),d.jsx("h2",{className:"section-title reveal",children:"Get In Touch"}),d.jsxs("div",{className:"contact-content glass reveal reveal-delay-1",children:[d.jsx("p",{className:"contact-text",children:"Have a question, partnership idea, or just want to say hello? We'd love to hear from you."}),d.jsxs("div",{className:"contact-links",children:[d.jsxs("a",{href:"mailto:hello@framex.com",className:"contact-link",children:[d.jsx("i",{className:"fas fa-envelope"})," hello@framex.com"]}),d.jsxs("a",{href:"tel:+1234567890",className:"contact-link",children:[d.jsx("i",{className:"fas fa-phone"})," +1 (234) 567-890"]}),d.jsxs("a",{href:"#",className:"contact-link",children:[d.jsx("i",{className:"fas fa-map-marker-alt"})," San Francisco, CA"]})]})]})]})}),d.jsx("section",{className:"about-section",id:"social",children:d.jsxs("div",{className:"about-container",children:[d.jsx("span",{className:"section-label reveal",children:"Community"}),d.jsx("h2",{className:"section-title reveal",children:"Follow Our Journey"}),d.jsxs("div",{className:"social-grid reveal reveal-delay-1",children:[d.jsxs("a",{href:"#",className:"social-link glass",children:[d.jsx("i",{className:"fab fa-twitter"})," Twitter / X"]}),d.jsxs("a",{href:"#",className:"social-link glass",children:[d.jsx("i",{className:"fab fa-github"})," GitHub"]}),d.jsxs("a",{href:"#",className:"social-link glass",children:[d.jsx("i",{className:"fab fa-linkedin-in"})," LinkedIn"]}),d.jsxs("a",{href:"#",className:"social-link glass",children:[d.jsx("i",{className:"fab fa-discord"})," Discord"]}),d.jsxs("a",{href:"#",className:"social-link glass",children:[d.jsx("i",{className:"fab fa-youtube"})," YouTube"]}),d.jsxs("a",{href:"#",className:"social-link glass",children:[d.jsx("i",{className:"fab fa-instagram"})," Instagram"]})]})]})})]}),d.jsx(wf,{}),d.jsx("style",{children:`
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
      `})]})}function bc(t,e){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a}function wj(t,e,a,r){function o(c){return c instanceof a?c:new a(function(u){u(c)})}return new(a||(a=Promise))(function(c,u){function f(y){try{g(r.next(y))}catch(v){u(v)}}function m(y){try{g(r.throw(y))}catch(v){u(v)}}function g(y){y.done?c(y.value):o(y.value).then(f,m)}g((r=r.apply(t,e||[])).next())})}const Sj=t=>t?(...e)=>t(...e):(...e)=>fetch(...e);class Sf extends Error{constructor(e,a="FunctionsError",r){super(e),this.name=a,this.context=r}toJSON(){return{name:this.name,message:this.message,context:this.context}}}class jj extends Sf{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class py extends Sf{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class gy extends Sf{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var Th;(function(t){t.Any="any",t.ApNortheast1="ap-northeast-1",t.ApNortheast2="ap-northeast-2",t.ApSouth1="ap-south-1",t.ApSoutheast1="ap-southeast-1",t.ApSoutheast2="ap-southeast-2",t.CaCentral1="ca-central-1",t.EuCentral1="eu-central-1",t.EuWest1="eu-west-1",t.EuWest2="eu-west-2",t.EuWest3="eu-west-3",t.SaEast1="sa-east-1",t.UsEast1="us-east-1",t.UsWest1="us-west-1",t.UsWest2="us-west-2"})(Th||(Th={}));class _j{constructor(e,{headers:a={},customFetch:r,region:o=Th.Any}={}){this.url=e,this.headers=a,this.region=o,this.fetch=Sj(r)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return wj(this,arguments,void 0,function*(a,r={}){var o;let c,u;try{const{headers:f,method:m,body:g,signal:y,timeout:v}=r;let x={},{region:w}=r;w||(w=this.region);const S=new URL(`${this.url}/${a}`);w&&w!=="any"&&(x["x-region"]=w,S.searchParams.set("forceFunctionRegion",w));let T;g&&(f&&!Object.prototype.hasOwnProperty.call(f,"Content-Type")||!f)?typeof Blob<"u"&&g instanceof Blob||g instanceof ArrayBuffer?(x["Content-Type"]="application/octet-stream",T=g):typeof g=="string"?(x["Content-Type"]="text/plain",T=g):typeof FormData<"u"&&g instanceof FormData?T=g:(x["Content-Type"]="application/json",T=JSON.stringify(g)):g&&typeof g!="string"&&!(typeof Blob<"u"&&g instanceof Blob)&&!(g instanceof ArrayBuffer)&&!(typeof FormData<"u"&&g instanceof FormData)?T=JSON.stringify(g):T=g;let E=y;v&&(u=new AbortController,c=setTimeout(()=>u.abort(),v),y?(E=u.signal,y.addEventListener("abort",()=>u.abort())):E=u.signal);const k=yield this.fetch(S.toString(),{method:m||"POST",headers:Object.assign(Object.assign(Object.assign({},x),this.headers),f),body:T,signal:E}).catch(G=>{throw new jj(G)}),O=k.headers.get("x-relay-error");if(O&&O==="true")throw new py(k);if(!k.ok)throw new gy(k);let A=((o=k.headers.get("Content-Type"))!==null&&o!==void 0?o:"text/plain").split(";")[0].trim(),B;return A==="application/json"?B=yield k.json():A==="application/octet-stream"||A==="application/pdf"?B=yield k.blob():A==="text/event-stream"?B=k:A==="multipart/form-data"?B=yield k.formData():B=yield k.text(),{data:B,error:null,response:k}}catch(f){return{data:null,error:f,response:f instanceof gy||f instanceof py?f.context:void 0}}finally{c&&clearTimeout(c)}})}}const Wb=3,yy=t=>Math.min(1e3*2**t,3e4),kj=[520,503],Jb=["GET","HEAD","OPTIONS"];var vy=class extends Error{constructor(t){super(t.message),this.name="PostgrestError",this.details=t.details,this.hint=t.hint,this.code=t.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};function by(t,e){return new Promise(a=>{if(e!=null&&e.aborted){a();return}const r=setTimeout(()=>{e==null||e.removeEventListener("abort",o),a()},t);function o(){clearTimeout(r),a()}e==null||e.addEventListener("abort",o)})}function Tj(t,e,a,r){return!(!r||a>=Wb||!Jb.includes(t)||!kj.includes(e))}var Ej=class{constructor(t){var e,a,r,o,c;this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=t.method,this.url=t.url,this.headers=new Headers(t.headers),this.schema=t.schema,this.body=t.body,this.shouldThrowOnError=(e=t.shouldThrowOnError)!==null&&e!==void 0?e:!1,this.signal=t.signal,this.isMaybeSingle=(a=t.isMaybeSingle)!==null&&a!==void 0?a:!1,this.shouldStripNulls=(r=t.shouldStripNulls)!==null&&r!==void 0?r:!1,this.urlLengthLimit=(o=t.urlLengthLimit)!==null&&o!==void 0?o:8e3,this.retryEnabled=(c=t.retry)!==null&&c!==void 0?c:!0,t.fetch?this.fetch=t.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get("Accept")==="text/csv")throw new Error("stripNulls() cannot be used with csv()");return this.shouldStripNulls=!0,this}setHeader(t,e){return this.headers=new Headers(this.headers),this.headers.set(t,e),this}retry(t){return this.retryEnabled=t,this}then(t,e){var a=this;if(this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json"),this.shouldStripNulls){const u=this.headers.get("Accept");u==="application/vnd.pgrst.object+json"?this.headers.set("Accept","application/vnd.pgrst.object+json;nulls=stripped"):(!u||u==="application/json")&&this.headers.set("Accept","application/vnd.pgrst.array+json;nulls=stripped")}const r=this.fetch;let c=(async()=>{let u=0;for(;;){const g={};a.headers.forEach((v,x)=>{g[x]=v}),u>0&&(g["X-Retry-Count"]=String(u));let y;try{y=await r(a.url.toString(),{method:a.method,headers:g,body:JSON.stringify(a.body,(v,x)=>typeof x=="bigint"?x.toString():x),signal:a.signal})}catch(v){if((v==null?void 0:v.name)==="AbortError"||(v==null?void 0:v.code)==="ABORT_ERR"||!Jb.includes(a.method))throw v;if(a.retryEnabled&&u<Wb){const x=yy(u);u++,await by(x,a.signal);continue}throw v}if(Tj(a.method,y.status,u,a.retryEnabled)){var f,m;const v=(f=(m=y.headers)===null||m===void 0?void 0:m.get("Retry-After"))!==null&&f!==void 0?f:null,x=v!==null?Math.max(0,parseInt(v,10)||0)*1e3:yy(u);await y.text(),u++,await by(x,a.signal);continue}return await a.processResponse(y)}})();return this.shouldThrowOnError||(c=c.catch(u=>{var f;let m="",g="",y="";const v=u==null?void 0:u.cause;if(v){var x,w,S,T;const O=(x=v==null?void 0:v.message)!==null&&x!==void 0?x:"",A=(w=v==null?void 0:v.code)!==null&&w!==void 0?w:"";m=`${(S=u==null?void 0:u.name)!==null&&S!==void 0?S:"FetchError"}: ${u==null?void 0:u.message}`,m+=`

Caused by: ${(T=v==null?void 0:v.name)!==null&&T!==void 0?T:"Error"}: ${O}`,A&&(m+=` (${A})`),v!=null&&v.stack&&(m+=`
${v.stack}`)}else{var E;m=(E=u==null?void 0:u.stack)!==null&&E!==void 0?E:""}const k=this.url.toString().length;return(u==null?void 0:u.name)==="AbortError"||(u==null?void 0:u.code)==="ABORT_ERR"?(y="",g="Request was aborted (timeout or manual cancellation)",k>this.urlLengthLimit&&(g+=`. Note: Your request URL is ${k} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):((v==null?void 0:v.name)==="HeadersOverflowError"||(v==null?void 0:v.code)==="UND_ERR_HEADERS_OVERFLOW")&&(y="",g="HTTP headers exceeded server limits (typically 16KB)",k>this.urlLengthLimit&&(g+=`. Your request URL is ${k} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${(f=u==null?void 0:u.name)!==null&&f!==void 0?f:"FetchError"}: ${u==null?void 0:u.message}`,details:m,hint:g,code:y},data:null,count:null,status:0,statusText:""}})),c.then(t,e)}async processResponse(t){var e=this;let a=null,r=null,o=null,c=t.status,u=t.statusText;if(t.ok){var f,m;if(e.method!=="HEAD"){var g;const x=await t.text();if(x!=="")if(e.headers.get("Accept")==="text/csv")r=x;else if(e.headers.get("Accept")&&(!((g=e.headers.get("Accept"))===null||g===void 0)&&g.includes("application/vnd.pgrst.plan+text")))r=x;else try{r=JSON.parse(x)}catch{if(a={message:x},r=null,e.shouldThrowOnError)throw new vy({message:x,details:"",hint:"",code:""})}}const y=(f=e.headers.get("Prefer"))===null||f===void 0?void 0:f.match(/count=(exact|planned|estimated)/),v=(m=t.headers.get("content-range"))===null||m===void 0?void 0:m.split("/");y&&v&&v.length>1&&(o=parseInt(v[1])),e.isMaybeSingle&&Array.isArray(r)&&(r.length>1?(a={code:"PGRST116",details:`Results contain ${r.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},r=null,o=null,c=406,u="Not Acceptable"):r.length===1?r=r[0]:r=null)}else{const y=await t.text();try{a=JSON.parse(y),Array.isArray(a)&&t.status===404&&(r=[],a=null,c=200,u="OK")}catch{t.status===404&&y===""?(c=204,u="No Content"):a={message:y}}if(a&&e.shouldThrowOnError)throw new vy(a)}return{success:a===null,error:a,data:r,count:o,status:c,statusText:u}}returns(){return this}overrideTypes(){return this}},Cj=class extends Ej{throwOnError(){return super.throwOnError()}select(t){let e=!1;const a=(t??"*").split("").map(r=>/\s/.test(r)&&!e?"":(r==='"'&&(e=!e),r)).join("");return this.url.searchParams.set("select",a),this.headers.append("Prefer","return=representation"),this}order(t,{ascending:e=!0,nullsFirst:a,foreignTable:r,referencedTable:o=r}={}){const c=o?`${o}.order`:"order",u=this.url.searchParams.get(c);return this.url.searchParams.set(c,`${u?`${u},`:""}${t}.${e?"asc":"desc"}${a===void 0?"":a?".nullsfirst":".nullslast"}`),this}limit(t,{foreignTable:e,referencedTable:a=e}={}){const r=typeof a>"u"?"limit":`${a}.limit`;return this.url.searchParams.set(r,`${t}`),this}range(t,e,{foreignTable:a,referencedTable:r=a}={}){const o=typeof r>"u"?"offset":`${r}.offset`,c=typeof r>"u"?"limit":`${r}.limit`;return this.url.searchParams.set(o,`${t}`),this.url.searchParams.set(c,`${e-t+1}`),this}abortSignal(t){return this.signal=t,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:t=!1,verbose:e=!1,settings:a=!1,buffers:r=!1,wal:o=!1,format:c="text"}={}){var u;const f=[t?"analyze":null,e?"verbose":null,a?"settings":null,r?"buffers":null,o?"wal":null].filter(Boolean).join("|"),m=(u=this.headers.get("Accept"))!==null&&u!==void 0?u:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${c}; for="${m}"; options=${f};`),c==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(t){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${t}`),this}};const xy=new RegExp("[,()]");var dr=class extends Cj{throwOnError(){return super.throwOnError()}eq(t,e){return this.url.searchParams.append(t,`eq.${e}`),this}neq(t,e){return this.url.searchParams.append(t,`neq.${e}`),this}gt(t,e){return this.url.searchParams.append(t,`gt.${e}`),this}gte(t,e){return this.url.searchParams.append(t,`gte.${e}`),this}lt(t,e){return this.url.searchParams.append(t,`lt.${e}`),this}lte(t,e){return this.url.searchParams.append(t,`lte.${e}`),this}like(t,e){return this.url.searchParams.append(t,`like.${e}`),this}likeAllOf(t,e){return this.url.searchParams.append(t,`like(all).{${e.join(",")}}`),this}likeAnyOf(t,e){return this.url.searchParams.append(t,`like(any).{${e.join(",")}}`),this}ilike(t,e){return this.url.searchParams.append(t,`ilike.${e}`),this}ilikeAllOf(t,e){return this.url.searchParams.append(t,`ilike(all).{${e.join(",")}}`),this}ilikeAnyOf(t,e){return this.url.searchParams.append(t,`ilike(any).{${e.join(",")}}`),this}regexMatch(t,e){return this.url.searchParams.append(t,`match.${e}`),this}regexIMatch(t,e){return this.url.searchParams.append(t,`imatch.${e}`),this}is(t,e){return this.url.searchParams.append(t,`is.${e}`),this}isDistinct(t,e){return this.url.searchParams.append(t,`isdistinct.${e}`),this}in(t,e){const a=Array.from(new Set(e)).map(r=>typeof r=="string"&&xy.test(r)?`"${r}"`:`${r}`).join(",");return this.url.searchParams.append(t,`in.(${a})`),this}notIn(t,e){const a=Array.from(new Set(e)).map(r=>typeof r=="string"&&xy.test(r)?`"${r}"`:`${r}`).join(",");return this.url.searchParams.append(t,`not.in.(${a})`),this}contains(t,e){return typeof e=="string"?this.url.searchParams.append(t,`cs.${e}`):Array.isArray(e)?this.url.searchParams.append(t,`cs.{${e.join(",")}}`):this.url.searchParams.append(t,`cs.${JSON.stringify(e)}`),this}containedBy(t,e){return typeof e=="string"?this.url.searchParams.append(t,`cd.${e}`):Array.isArray(e)?this.url.searchParams.append(t,`cd.{${e.join(",")}}`):this.url.searchParams.append(t,`cd.${JSON.stringify(e)}`),this}rangeGt(t,e){return this.url.searchParams.append(t,`sr.${e}`),this}rangeGte(t,e){return this.url.searchParams.append(t,`nxl.${e}`),this}rangeLt(t,e){return this.url.searchParams.append(t,`sl.${e}`),this}rangeLte(t,e){return this.url.searchParams.append(t,`nxr.${e}`),this}rangeAdjacent(t,e){return this.url.searchParams.append(t,`adj.${e}`),this}overlaps(t,e){return typeof e=="string"?this.url.searchParams.append(t,`ov.${e}`):this.url.searchParams.append(t,`ov.{${e.join(",")}}`),this}textSearch(t,e,{config:a,type:r}={}){let o="";r==="plain"?o="pl":r==="phrase"?o="ph":r==="websearch"&&(o="w");const c=a===void 0?"":`(${a})`;return this.url.searchParams.append(t,`${o}fts${c}.${e}`),this}match(t){return Object.entries(t).filter(([e,a])=>a!==void 0).forEach(([e,a])=>{this.url.searchParams.append(e,`eq.${a}`)}),this}not(t,e,a){return this.url.searchParams.append(t,`not.${e}.${a}`),this}or(t,{foreignTable:e,referencedTable:a=e}={}){const r=a?`${a}.or`:"or";return this.url.searchParams.append(r,`(${t})`),this}filter(t,e,a){return this.url.searchParams.append(t,`${e}.${a}`),this}},Aj=class{constructor(t,{headers:e={},schema:a,fetch:r,urlLengthLimit:o=8e3,retry:c}){this.url=t,this.headers=new Headers(e),this.schema=a,this.fetch=r,this.urlLengthLimit=o,this.retry=c}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(t,e){const{head:a=!1,count:r}=e??{},o=a?"HEAD":"GET";let c=!1;const u=(t??"*").split("").map(g=>/\s/.test(g)&&!c?"":(g==='"'&&(c=!c),g)).join(""),{url:f,headers:m}=this.cloneRequestState();return f.searchParams.set("select",u),r&&m.append("Prefer",`count=${r}`),new dr({method:o,url:f,headers:m,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(t,{count:e,defaultToNull:a=!0}={}){var r;const o="POST",{url:c,headers:u}=this.cloneRequestState();if(e&&u.append("Prefer",`count=${e}`),a||u.append("Prefer","missing=default"),Array.isArray(t)){const f=t.reduce((m,g)=>m.concat(Object.keys(g)),[]);if(f.length>0){const m=[...new Set(f)].map(g=>`"${g}"`);c.searchParams.set("columns",m.join(","))}}return new dr({method:o,url:c,headers:u,schema:this.schema,body:t,fetch:(r=this.fetch)!==null&&r!==void 0?r:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(t,{onConflict:e,ignoreDuplicates:a=!1,count:r,defaultToNull:o=!0}={}){var c;const u="POST",{url:f,headers:m}=this.cloneRequestState();if(m.append("Prefer",`resolution=${a?"ignore":"merge"}-duplicates`),e!==void 0&&f.searchParams.set("on_conflict",e),r&&m.append("Prefer",`count=${r}`),o||m.append("Prefer","missing=default"),Array.isArray(t)){const g=t.reduce((y,v)=>y.concat(Object.keys(v)),[]);if(g.length>0){const y=[...new Set(g)].map(v=>`"${v}"`);f.searchParams.set("columns",y.join(","))}}return new dr({method:u,url:f,headers:m,schema:this.schema,body:t,fetch:(c=this.fetch)!==null&&c!==void 0?c:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(t,{count:e}={}){var a;const r="PATCH",{url:o,headers:c}=this.cloneRequestState();return e&&c.append("Prefer",`count=${e}`),new dr({method:r,url:o,headers:c,schema:this.schema,body:t,fetch:(a=this.fetch)!==null&&a!==void 0?a:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:t}={}){var e;const a="DELETE",{url:r,headers:o}=this.cloneRequestState();return t&&o.append("Prefer",`count=${t}`),new dr({method:a,url:r,headers:o,schema:this.schema,fetch:(e=this.fetch)!==null&&e!==void 0?e:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};function $s(t){"@babel/helpers - typeof";return $s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$s(t)}function Rj(t,e){if($s(t)!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var r=a.call(t,e);if($s(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Nj(t){var e=Rj(t,"string");return $s(e)=="symbol"?e:e+""}function Oj(t,e,a){return(e=Nj(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function wy(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),a.push.apply(a,r)}return a}function kl(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?wy(Object(a),!0).forEach(function(r){Oj(t,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):wy(Object(a)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(a,r))})}return t}var Dj=class Qb{constructor(e,{headers:a={},schema:r,fetch:o,timeout:c,urlLengthLimit:u=8e3,retry:f}={}){this.url=e,this.headers=new Headers(a),this.schemaName=r,this.urlLengthLimit=u;const m=o??globalThis.fetch;c!==void 0&&c>0?this.fetch=(g,y)=>{const v=new AbortController,x=setTimeout(()=>v.abort(),c),w=y==null?void 0:y.signal;if(w){if(w.aborted)return clearTimeout(x),m(g,y);const S=()=>{clearTimeout(x),v.abort()};return w.addEventListener("abort",S,{once:!0}),m(g,kl(kl({},y),{},{signal:v.signal})).finally(()=>{clearTimeout(x),w.removeEventListener("abort",S)})}return m(g,kl(kl({},y),{},{signal:v.signal})).finally(()=>clearTimeout(x))}:this.fetch=m,this.retry=f}from(e){if(!e||typeof e!="string"||e.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new Aj(new URL(`${this.url}/${e}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(e){return new Qb(this.url,{headers:this.headers,schema:e,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}rpc(e,a={},{head:r=!1,get:o=!1,count:c}={}){var u;let f;const m=new URL(`${this.url}/rpc/${e}`);let g;const y=w=>w!==null&&typeof w=="object"&&(!Array.isArray(w)||w.some(y)),v=r&&Object.values(a).some(y);v?(f="POST",g=a):r||o?(f=r?"HEAD":"GET",Object.entries(a).filter(([w,S])=>S!==void 0).map(([w,S])=>[w,Array.isArray(S)?`{${S.join(",")}}`:`${S}`]).forEach(([w,S])=>{m.searchParams.append(w,S)})):(f="POST",g=a);const x=new Headers(this.headers);return v?x.set("Prefer",c?`count=${c},return=minimal`:"return=minimal"):c&&x.set("Prefer",`count=${c}`),new dr({method:f,url:m,headers:x,schema:this.schemaName,body:g,fetch:(u=this.fetch)!==null&&u!==void 0?u:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};class Mj{constructor(){}static detectEnvironment(){var e;if(typeof WebSocket<"u")return{type:"native",wsConstructor:WebSocket};const a=globalThis;if(typeof globalThis<"u"&&typeof a.WebSocket<"u")return{type:"native",wsConstructor:a.WebSocket};const r=typeof global<"u"?global:void 0;if(r&&typeof r.WebSocket<"u")return{type:"native",wsConstructor:r.WebSocket};if(typeof globalThis<"u"&&typeof a.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&a.EdgeRuntime||typeof navigator<"u"&&(!((e=navigator.userAgent)===null||e===void 0)&&e.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};const o=globalThis.process;if(o){const c=o.versions;if(c&&c.node){const u=c.node,f=parseInt(u.replace(/^v/,"").split(".")[0]);return f>=22?typeof globalThis.WebSocket<"u"?{type:"native",wsConstructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${f} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${f} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const e=this.detectEnvironment();if(e.wsConstructor)return e.wsConstructor;let a=e.error||"WebSocket not supported in this environment.";throw e.workaround&&(a+=`

Suggested solution: ${e.workaround}`),new Error(a)}static isWebSocketSupported(){try{const e=this.detectEnvironment();return e.type==="native"||e.type==="ws"}catch{return!1}}}const Lj="2.108.2",zj=`realtime-js/${Lj}`,Uj="1.0.0",Zb="2.0.0",Bj=Zb,Pj=1e4,Vj=100,Bi={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},ex={close:"phx_close",error:"phx_error",join:"phx_join",leave:"phx_leave",access_token:"access_token"},Eh={connecting:"connecting",closing:"closing",closed:"closed"};class Hj{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=e??[]}encode(e,a){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&typeof e.payload.event=="string")return a(this._binaryEncodeUserBroadcastPush(e));let r=[e.join_ref,e.ref,e.topic,e.event,e.payload];return a(JSON.stringify(r))}_binaryEncodeUserBroadcastPush(e){var a;return this._isArrayBuffer((a=e.payload)===null||a===void 0?void 0:a.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){var a,r;const o=(r=(a=e.payload)===null||a===void 0?void 0:a.payload)!==null&&r!==void 0?r:new ArrayBuffer(0);return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,o)}_encodeJsonUserBroadcastPush(e){var a,r;const o=(r=(a=e.payload)===null||a===void 0?void 0:a.payload)!==null&&r!==void 0?r:{},u=new TextEncoder().encode(JSON.stringify(o)).buffer;return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,u)}_encodeUserBroadcastPush(e,a,r){var o,c;const u=e.topic,f=(o=e.ref)!==null&&o!==void 0?o:"",m=(c=e.join_ref)!==null&&c!==void 0?c:"",g=e.payload.event,y=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},v=Object.keys(y).length===0?"":JSON.stringify(y);if(m.length>255)throw new Error(`joinRef length ${m.length} exceeds maximum of 255`);if(f.length>255)throw new Error(`ref length ${f.length} exceeds maximum of 255`);if(u.length>255)throw new Error(`topic length ${u.length} exceeds maximum of 255`);if(g.length>255)throw new Error(`userEvent length ${g.length} exceeds maximum of 255`);if(v.length>255)throw new Error(`metadata length ${v.length} exceeds maximum of 255`);const x=this.USER_BROADCAST_PUSH_META_LENGTH+m.length+f.length+u.length+g.length+v.length,w=new ArrayBuffer(this.HEADER_LENGTH+x);let S=new DataView(w),T=0;S.setUint8(T++,this.KINDS.userBroadcastPush),S.setUint8(T++,m.length),S.setUint8(T++,f.length),S.setUint8(T++,u.length),S.setUint8(T++,g.length),S.setUint8(T++,v.length),S.setUint8(T++,a),Array.from(m,k=>S.setUint8(T++,k.charCodeAt(0))),Array.from(f,k=>S.setUint8(T++,k.charCodeAt(0))),Array.from(u,k=>S.setUint8(T++,k.charCodeAt(0))),Array.from(g,k=>S.setUint8(T++,k.charCodeAt(0))),Array.from(v,k=>S.setUint8(T++,k.charCodeAt(0)));var E=new Uint8Array(w.byteLength+r.byteLength);return E.set(new Uint8Array(w),0),E.set(new Uint8Array(r),w.byteLength),E.buffer}decode(e,a){if(this._isArrayBuffer(e)){let r=this._binaryDecode(e);return a(r)}if(typeof e=="string"){const r=JSON.parse(e),[o,c,u,f,m]=r;return a({join_ref:o,ref:c,topic:u,event:f,payload:m})}return a({})}_binaryDecode(e){const a=new DataView(e),r=a.getUint8(0),o=new TextDecoder;switch(r){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(e,a,o)}}_decodeUserBroadcast(e,a,r){const o=a.getUint8(1),c=a.getUint8(2),u=a.getUint8(3),f=a.getUint8(4);let m=this.HEADER_LENGTH+4;const g=r.decode(e.slice(m,m+o));m=m+o;const y=r.decode(e.slice(m,m+c));m=m+c;const v=r.decode(e.slice(m,m+u));m=m+u;const x=e.slice(m,e.byteLength),w=f===this.JSON_ENCODING?JSON.parse(r.decode(x)):x,S={type:this.BROADCAST_EVENT,event:y,payload:w};return u>0&&(S.meta=JSON.parse(v)),{join_ref:null,ref:null,topic:g,event:this.BROADCAST_EVENT,payload:S}}_isArrayBuffer(e){var a;return e instanceof ArrayBuffer||((a=e==null?void 0:e.constructor)===null||a===void 0?void 0:a.name)==="ArrayBuffer"}_pick(e,a){return!e||typeof e!="object"?{}:Object.fromEntries(Object.entries(e).filter(([r])=>a.includes(r)))}}var He;(function(t){t.abstime="abstime",t.bool="bool",t.date="date",t.daterange="daterange",t.float4="float4",t.float8="float8",t.int2="int2",t.int4="int4",t.int4range="int4range",t.int8="int8",t.int8range="int8range",t.json="json",t.jsonb="jsonb",t.money="money",t.numeric="numeric",t.oid="oid",t.reltime="reltime",t.text="text",t.time="time",t.timestamp="timestamp",t.timestamptz="timestamptz",t.timetz="timetz",t.tsrange="tsrange",t.tstzrange="tstzrange"})(He||(He={}));const Sy=(t,e,a={})=>{var r;const o=(r=a.skipTypes)!==null&&r!==void 0?r:[];return e?Object.keys(e).reduce((c,u)=>(c[u]=$j(u,t,e,o),c),{}):{}},$j=(t,e,a,r)=>{const o=e.find(f=>f.name===t),c=o==null?void 0:o.type,u=a[t];return c&&!r.includes(c)?tx(c,u):Ch(u)},tx=(t,e)=>{if(t.charAt(0)==="_"){const a=t.slice(1,t.length);return Gj(e,a)}switch(t){case He.bool:return Ij(e);case He.float4:case He.float8:case He.int2:case He.int4:case He.int8:case He.numeric:case He.oid:return qj(e);case He.json:case He.jsonb:return Fj(e);case He.timestamp:return Kj(e);case He.abstime:case He.date:case He.daterange:case He.int4range:case He.int8range:case He.money:case He.reltime:case He.text:case He.time:case He.timestamptz:case He.timetz:case He.tsrange:case He.tstzrange:return Ch(e);default:return Ch(e)}},Ch=t=>t,Ij=t=>{switch(t){case"t":return!0;case"f":return!1;default:return t}},qj=t=>{if(typeof t=="string"){const e=parseFloat(t);if(!Number.isNaN(e))return e}return t},Fj=t=>{if(typeof t=="string")try{return JSON.parse(t)}catch{return t}return t},Gj=(t,e)=>{if(typeof t!="string")return t;const a=t.length-1,r=t[a];if(t[0]==="{"&&r==="}"){let c;const u=t.slice(1,a);try{c=JSON.parse("["+u+"]")}catch{c=u?u.split(","):[]}return c.map(f=>tx(e,f))}return t},Kj=t=>typeof t=="string"?t.replace(" ","T"):t,nx=t=>{const e=new URL(t);return e.protocol=e.protocol.replace(/^ws/i,"http"),e.pathname=e.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),e.pathname===""||e.pathname==="/"?e.pathname="/api/broadcast":e.pathname=e.pathname+"/api/broadcast",e.href};var Ms=t=>typeof t=="function"?t:function(){return t},Yj=typeof self<"u"?self:null,hr=typeof window<"u"?window:null,Dn=Yj||hr||globalThis,Xj="2.0.0",Wj=1e4,Jj=1e3,Mn={connecting:0,open:1,closing:2,closed:3},zt={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},si={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave"},Ah={longpoll:"longpoll",websocket:"websocket"},Qj={complete:4},Rh="base64url.bearer.phx.",Tl=class{constructor(t,e,a,r){this.channel=t,this.event=e,this.payload=a||function(){return{}},this.receivedResp=null,this.timeout=r,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(t){this.timeout=t,this.reset(),this.send()}send(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(t,e){return this.hasReceived(t)&&e(this.receivedResp.response),this.recHooks.push({status:t,callback:e}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:t,response:e,_ref:a}){this.recHooks.filter(r=>r.status===t).forEach(r=>r.callback(e))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,t=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=t,this.matchReceive(t)}),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}hasReceived(t){return this.receivedResp&&this.receivedResp.status===t}trigger(t,e){this.channel.trigger(this.refEvent,{status:t,response:e})}},ix=class{constructor(t,e){this.callback=t,this.timerCalc=e,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}},Zj=class{constructor(t,e,a){this.state=zt.closed,this.topic=t,this.params=Ms(e||{}),this.socket=a,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new Tl(this,si.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new ix(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive("ok",()=>{this.state=zt.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(r=>r.send()),this.pushBuffer=[]}),this.joinPush.receive("error",r=>{this.state=zt.errored,this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,r),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log("channel",`close ${this.topic}`),this.state=zt.closed,this.socket.remove(this)}),this.onError(r=>{this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,r),this.isJoining()&&this.joinPush.reset(),this.state=zt.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive("timeout",()=>{this.socket.hasLogger()&&this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),new Tl(this,si.leave,Ms({}),this.timeout).send(),this.state=zt.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(si.reply,(r,o)=>{this.trigger(this.replyEventName(o),r)})}join(t=this.timeout){if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=t,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(t=>t.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=zt.closed,this.bindings=[]}onClose(t){this.on(si.close,t)}onError(t){return this.on(si.error,e=>t(e))}on(t,e){let a=this.bindingRef++;return this.bindings.push({event:t,ref:a,callback:e}),a}off(t,e){this.bindings=this.bindings.filter(a=>!(a.event===t&&(typeof e>"u"||e===a.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(t,e,a=this.timeout){if(e=e||{},!this.joinedOnce)throw new Error(`tried to push '${t}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let r=new Tl(this,t,function(){return e},a);return this.canPush()?r.send():(r.startTimeout(),this.pushBuffer.push(r)),r}leave(t=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=zt.leaving;let e=()=>{this.socket.hasLogger()&&this.socket.log("channel",`leave ${this.topic}`),this.trigger(si.close,"leave")},a=new Tl(this,si.leave,Ms({}),t);return a.receive("ok",()=>e()).receive("timeout",()=>e()),a.send(),this.canPush()||a.trigger("ok",{}),a}onMessage(t,e,a){return e}filterBindings(t,e,a){return!0}isMember(t,e,a,r){return this.topic!==t?!1:r&&r!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:t,event:e,payload:a,joinRef:r}),!1):!0}joinRef(){return this.joinPush.ref}rejoin(t=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=zt.joining,this.joinPush.resend(t))}trigger(t,e,a,r){let o=this.onMessage(t,e,a,r);if(e&&!o)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");let c=this.bindings.filter(u=>u.event===t&&this.filterBindings(u,e,a));for(let u=0;u<c.length;u++)c[u].callback(o,a,r||this.joinRef())}replyEventName(t){return`chan_reply_${t}`}isClosed(){return this.state===zt.closed}isErrored(){return this.state===zt.errored}isJoined(){return this.state===zt.joined}isJoining(){return this.state===zt.joining}isLeaving(){return this.state===zt.leaving}},Jl=class{static request(t,e,a,r,o,c,u){if(Dn.XDomainRequest){let f=new Dn.XDomainRequest;return this.xdomainRequest(f,t,e,r,o,c,u)}else if(Dn.XMLHttpRequest){let f=new Dn.XMLHttpRequest;return this.xhrRequest(f,t,e,a,r,o,c,u)}else{if(Dn.fetch&&Dn.AbortController)return this.fetchRequest(t,e,a,r,o,c,u);throw new Error("No suitable XMLHttpRequest implementation found")}}static fetchRequest(t,e,a,r,o,c,u){let f={method:t,headers:a,body:r},m=null;return o&&(m=new AbortController,setTimeout(()=>m.abort(),o),f.signal=m.signal),Dn.fetch(e,f).then(g=>g.text()).then(g=>this.parseJSON(g)).then(g=>u&&u(g)).catch(g=>{g.name==="AbortError"&&c?c():u&&u(null)}),m}static xdomainRequest(t,e,a,r,o,c,u){return t.timeout=o,t.open(e,a),t.onload=()=>{let f=this.parseJSON(t.responseText);u&&u(f)},c&&(t.ontimeout=c),t.onprogress=()=>{},t.send(r),t}static xhrRequest(t,e,a,r,o,c,u,f){t.open(e,a,!0),t.timeout=c;for(let[m,g]of Object.entries(r))t.setRequestHeader(m,g);return t.onerror=()=>f&&f(null),t.onreadystatechange=()=>{if(t.readyState===Qj.complete&&f){let m=this.parseJSON(t.responseText);f(m)}},u&&(t.ontimeout=u),t.send(o),t}static parseJSON(t){if(!t||t==="")return null;try{return JSON.parse(t)}catch{return console&&console.log("failed to parse JSON response",t),null}}static serialize(t,e){let a=[];for(var r in t){if(!Object.prototype.hasOwnProperty.call(t,r))continue;let o=e?`${e}[${r}]`:r,c=t[r];typeof c=="object"?a.push(this.serialize(c,o)):a.push(encodeURIComponent(o)+"="+encodeURIComponent(c))}return a.join("&")}static appendParams(t,e){if(Object.keys(e).length===0)return t;let a=t.match(/\?/)?"&":"?";return`${t}${a}${this.serialize(e)}`}},e_=t=>{let e="",a=new Uint8Array(t),r=a.byteLength;for(let o=0;o<r;o++)e+=String.fromCharCode(a[o]);return btoa(e)},sr=class{constructor(t,e){e&&e.length===2&&e[1].startsWith(Rh)&&(this.authToken=atob(e[1].slice(Rh.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(t),this.readyState=Mn.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(t){return t.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+Ah.websocket),"$1/"+Ah.longpoll)}endpointURL(){return Jl.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(t,e,a){this.close(t,e,a),this.readyState=Mn.connecting}ontimeout(){this.onerror("timeout"),this.closeAndRetry(1005,"timeout",!1)}isActive(){return this.readyState===Mn.open||this.readyState===Mn.connecting}poll(){const t={Accept:"application/json"};this.authToken&&(t["X-Phoenix-AuthToken"]=this.authToken),this.ajax("GET",t,null,()=>this.ontimeout(),e=>{if(e){var{status:a,token:r,messages:o}=e;if(a===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,"session_gone",!1);return}this.token=r}else a=0;switch(a){case 200:o.forEach(c=>{setTimeout(()=>this.onmessage({data:c}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=Mn.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,"forbidden",!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,"internal server error",500);break;default:throw new Error(`unhandled poll status ${a}`)}})}send(t){typeof t!="string"&&(t=e_(t)),this.currentBatch?this.currentBatch.push(t):this.awaitingBatchAck?this.batchBuffer.push(t):(this.currentBatch=[t],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(t){this.awaitingBatchAck=!0,this.ajax("POST",{"Content-Type":"application/x-ndjson"},t.join(`
`),()=>this.onerror("timeout"),e=>{this.awaitingBatchAck=!1,!e||e.status!==200?(this.onerror(e&&e.status),this.closeAndRetry(1011,"internal server error",!1)):this.batchBuffer.length>0&&(this.batchSend(this.batchBuffer),this.batchBuffer=[])})}close(t,e,a){for(let o of this.reqs)o.abort();this.readyState=Mn.closed;let r=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:t,reason:e,wasClean:a});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<"u"?this.onclose(new CloseEvent("close",r)):this.onclose(r)}ajax(t,e,a,r,o){let c,u=()=>{this.reqs.delete(c),r()};c=Jl.request(t,this.endpointURL(),e,a,this.timeout,u,f=>{this.reqs.delete(c),this.isActive()&&o(f)}),this.reqs.add(c)}},t_=class Rs{constructor(e,a={}){let r=a.events||{state:"presence_state",diff:"presence_diff"};this.state={},this.pendingDiffs=[],this.channel=e,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(r.state,o=>{let{onJoin:c,onLeave:u,onSync:f}=this.caller;this.joinRef=this.channel.joinRef(),this.state=Rs.syncState(this.state,o,c,u),this.pendingDiffs.forEach(m=>{this.state=Rs.syncDiff(this.state,m,c,u)}),this.pendingDiffs=[],f()}),this.channel.on(r.diff,o=>{let{onJoin:c,onLeave:u,onSync:f}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(o):(this.state=Rs.syncDiff(this.state,o,c,u),f())})}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}list(e){return Rs.list(this.state,e)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(e,a,r,o){let c=this.clone(e),u={},f={};return this.map(c,(m,g)=>{a[m]||(f[m]=g)}),this.map(a,(m,g)=>{let y=c[m];if(y){let v=g.metas.map(T=>T.phx_ref),x=y.metas.map(T=>T.phx_ref),w=g.metas.filter(T=>x.indexOf(T.phx_ref)<0),S=y.metas.filter(T=>v.indexOf(T.phx_ref)<0);w.length>0&&(u[m]=g,u[m].metas=w),S.length>0&&(f[m]=this.clone(y),f[m].metas=S)}else u[m]=g}),this.syncDiff(c,{joins:u,leaves:f},r,o)}static syncDiff(e,a,r,o){let{joins:c,leaves:u}=this.clone(a);return r||(r=function(){}),o||(o=function(){}),this.map(c,(f,m)=>{let g=e[f];if(e[f]=this.clone(m),g){let y=e[f].metas.map(x=>x.phx_ref),v=g.metas.filter(x=>y.indexOf(x.phx_ref)<0);e[f].metas.unshift(...v)}r(f,g,m)}),this.map(u,(f,m)=>{let g=e[f];if(!g)return;let y=m.metas.map(v=>v.phx_ref);g.metas=g.metas.filter(v=>y.indexOf(v.phx_ref)<0),o(f,g,m),g.metas.length===0&&delete e[f]}),e}static list(e,a){return a||(a=function(r,o){return o}),this.map(e,(r,o)=>a(r,o))}static map(e,a){return Object.getOwnPropertyNames(e).map(r=>a(r,e[r]))}static clone(e){return JSON.parse(JSON.stringify(e))}},El={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(t,e){if(t.payload.constructor===ArrayBuffer)return e(this.binaryEncode(t));{let a=[t.join_ref,t.ref,t.topic,t.event,t.payload];return e(JSON.stringify(a))}},decode(t,e){if(t.constructor===ArrayBuffer)return e(this.binaryDecode(t));{let[a,r,o,c,u]=JSON.parse(t);return e({join_ref:a,ref:r,topic:o,event:c,payload:u})}},binaryEncode(t){let{join_ref:e,ref:a,event:r,topic:o,payload:c}=t,u=this.META_LENGTH+e.length+a.length+o.length+r.length,f=new ArrayBuffer(this.HEADER_LENGTH+u),m=new DataView(f),g=0;m.setUint8(g++,this.KINDS.push),m.setUint8(g++,e.length),m.setUint8(g++,a.length),m.setUint8(g++,o.length),m.setUint8(g++,r.length),Array.from(e,v=>m.setUint8(g++,v.charCodeAt(0))),Array.from(a,v=>m.setUint8(g++,v.charCodeAt(0))),Array.from(o,v=>m.setUint8(g++,v.charCodeAt(0))),Array.from(r,v=>m.setUint8(g++,v.charCodeAt(0)));var y=new Uint8Array(f.byteLength+c.byteLength);return y.set(new Uint8Array(f),0),y.set(new Uint8Array(c),f.byteLength),y.buffer},binaryDecode(t){let e=new DataView(t),a=e.getUint8(0),r=new TextDecoder;switch(a){case this.KINDS.push:return this.decodePush(t,e,r);case this.KINDS.reply:return this.decodeReply(t,e,r);case this.KINDS.broadcast:return this.decodeBroadcast(t,e,r)}},decodePush(t,e,a){let r=e.getUint8(1),o=e.getUint8(2),c=e.getUint8(3),u=this.HEADER_LENGTH+this.META_LENGTH-1,f=a.decode(t.slice(u,u+r));u=u+r;let m=a.decode(t.slice(u,u+o));u=u+o;let g=a.decode(t.slice(u,u+c));u=u+c;let y=t.slice(u,t.byteLength);return{join_ref:f,ref:null,topic:m,event:g,payload:y}},decodeReply(t,e,a){let r=e.getUint8(1),o=e.getUint8(2),c=e.getUint8(3),u=e.getUint8(4),f=this.HEADER_LENGTH+this.META_LENGTH,m=a.decode(t.slice(f,f+r));f=f+r;let g=a.decode(t.slice(f,f+o));f=f+o;let y=a.decode(t.slice(f,f+c));f=f+c;let v=a.decode(t.slice(f,f+u));f=f+u;let x=t.slice(f,t.byteLength),w={status:v,response:x};return{join_ref:m,ref:g,topic:y,event:si.reply,payload:w}},decodeBroadcast(t,e,a){let r=e.getUint8(1),o=e.getUint8(2),c=this.HEADER_LENGTH+2,u=a.decode(t.slice(c,c+r));c=c+r;let f=a.decode(t.slice(c,c+o));c=c+o;let m=t.slice(c,t.byteLength);return{join_ref:null,ref:null,topic:u,event:f,payload:m}}},n_=class{constructor(t,e={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=e.timeout||Wj,this.transport=e.transport||Dn.WebSocket||sr,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=e.longPollFallbackMs,this.fallbackTimer=null;let a=null;try{a=Dn&&Dn.sessionStorage}catch{}this.sessionStore=e.sessionStorage||a,this.establishedConnections=0,this.defaultEncoder=El.encode.bind(El),this.defaultDecoder=El.decode.bind(El),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=e.binaryType||"arraybuffer",this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport!==sr?(this.encode=e.encode||this.defaultEncoder,this.decode=e.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder);let r=null;hr&&hr.addEventListener&&(hr.addEventListener("pagehide",o=>{this.conn&&(this.disconnect(),r=this.connectClock)}),hr.addEventListener("pageshow",o=>{r===this.connectClock&&(r=null,this.connect())}),hr.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=e.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=e.autoSendHeartbeat??!0,this.heartbeatCallback=e.heartbeatCallback??(()=>{}),this.rejoinAfterMs=o=>e.rejoinAfterMs?e.rejoinAfterMs(o):[1e3,2e3,5e3][o-1]||1e4,this.reconnectAfterMs=o=>e.reconnectAfterMs?e.reconnectAfterMs(o):[10,50,100,150,200,250,500,1e3,2e3][o-1]||5e3,this.logger=e.logger||null,!this.logger&&e.debug&&(this.logger=(o,c,u)=>{console.log(`${o}: ${c}`,u)}),this.longpollerTimeout=e.longpollerTimeout||2e4,this.params=Ms(e.params||{}),this.endPoint=`${t}/${Ah.websocket}`,this.vsn=e.vsn||Xj,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new ix(()=>{if(this.pageHidden){this.log("Not reconnecting as page is hidden!"),this.teardown();return}this.teardown(async()=>{e.beforeReconnect&&await e.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=e.authToken}getLongPollTransport(){return sr}replaceTransport(t){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&(this.conn.close(),this.conn=null),this.transport=t}protocol(){return location.protocol.match(/^https/)?"wss":"ws"}endPointURL(){let t=Jl.appendParams(Jl.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return t.charAt(0)!=="/"?t:t.charAt(1)==="/"?`${this.protocol()}:${t}`:`${this.protocol()}://${location.host}${t}`}disconnect(t,e,a){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,t&&t()},e,a)}connect(t){t&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=Ms(t)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==sr?this.connectWithFallback(sr,this.longPollFallbackMs):this.transportConnect())}log(t,e,a){this.logger&&this.logger(t,e,a)}hasLogger(){return this.logger!==null}onOpen(t){let e=this.makeRef();return this.stateChangeCallbacks.open.push([e,t]),e}onClose(t){let e=this.makeRef();return this.stateChangeCallbacks.close.push([e,t]),e}onError(t){let e=this.makeRef();return this.stateChangeCallbacks.error.push([e,t]),e}onMessage(t){let e=this.makeRef();return this.stateChangeCallbacks.message.push([e,t]),e}onHeartbeat(t){this.heartbeatCallback=t}ping(t){if(!this.isConnected())return!1;let e=this.makeRef(),a=Date.now();this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:e});let r=this.onMessage(o=>{o.ref===e&&(this.off([r]),t(Date.now()-a))});return!0}transportName(t){switch(t){case sr:return"LongPoll";default:return t.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let t;this.authToken&&(t=["phoenix",`${Rh}${btoa(this.authToken).replace(/=/g,"")}`]),this.conn=new this.transport(this.endPointURL(),t),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=e=>this.onConnError(e),this.conn.onmessage=e=>this.onConnMessage(e),this.conn.onclose=e=>this.onConnClose(e)}getSession(t){return this.sessionStore&&this.sessionStore.getItem(t)}storeSession(t,e){this.sessionStore&&this.sessionStore.setItem(t,e)}connectWithFallback(t,e=2500){clearTimeout(this.fallbackTimer);let a=!1,r=!0,o,c,u=this.transportName(t),f=m=>{this.log("transport",`falling back to ${u}...`,m),this.off([o,c]),r=!1,this.replaceTransport(t),this.transportConnect()};if(this.getSession(`phx:fallback:${u}`))return f("memorized");this.fallbackTimer=setTimeout(f,e),c=this.onError(m=>{this.log("transport","error",m),r&&!a&&(clearTimeout(this.fallbackTimer),f(m))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(a=!0,!r){let m=this.transportName(t);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${m}`,"true"),this.log("transport",`established ${m} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(f,e),this.ping(m=>{this.log("transport","connected to primary after",m),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log("transport",`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks("open")}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(t){this.log("error","error in heartbeat callback",t)}this.triggerChanError(new Error("heartbeat timeout")),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),Jj,"heartbeat timeout")}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(t,e,a){if(!this.conn)return t&&t();const r=this.conn;this.waitForBufferDone(r,()=>{e?r.close(e,a||""):r.close(),this.waitForSocketClosed(r,()=>{this.conn===r&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),t&&t()})})}waitForBufferDone(t,e,a=1){if(a===5||!t.bufferedAmount){e();return}setTimeout(()=>{this.waitForBufferDone(t,e,a+1)},150*a)}waitForSocketClosed(t,e,a=1){if(a===5||t.readyState===Mn.closed){e();return}setTimeout(()=>{this.waitForSocketClosed(t,e,a+1)},150*a)}onConnClose(t){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log("transport","close",t),this.triggerChanError(t),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks("close",t)}onConnError(t){this.hasLogger()&&this.log("transport","error",t);let e=this.transport,a=this.establishedConnections;this.triggerStateCallbacks("error",t,e,a),(e===this.transport||a>0)&&this.triggerChanError(t)}triggerChanError(t){this.channels.forEach(e=>{e.isErrored()||e.isLeaving()||e.isClosed()||e.trigger(si.error,t)})}connectionState(){switch(this.conn&&this.conn.readyState){case Mn.connecting:return"connecting";case Mn.open:return"open";case Mn.closing:return"closing";default:return"closed"}}isConnected(){return this.connectionState()==="open"}remove(t){this.off(t.stateChangeRefs),this.channels=this.channels.filter(e=>e!==t)}off(t){for(let e in this.stateChangeCallbacks)this.stateChangeCallbacks[e]=this.stateChangeCallbacks[e].filter(([a])=>t.indexOf(a)===-1)}channel(t,e={}){let a=new Zj(t,e,this);return this.channels.push(a),a}push(t){if(this.hasLogger()){let{topic:e,event:a,payload:r,ref:o,join_ref:c}=t;this.log("push",`${e} ${a} (${c}, ${o})`,r)}this.isConnected()?this.encode(t,e=>this.conn.send(e)):this.sendBuffer.push(()=>this.encode(t,e=>this.conn.send(e)))}makeRef(){let t=this.ref+1;return t===this.ref?this.ref=0:this.ref=t,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(t){this.log("error","error in heartbeat callback",t)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(t){this.log("error","error in heartbeat callback",t)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(t=>t()),this.sendBuffer=[])}onConnMessage(t){this.decode(t.data,e=>{let{topic:a,event:r,payload:o,ref:c,join_ref:u}=e;if(c&&c===this.pendingHeartbeatRef){const f=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(o.status==="ok"?"ok":"error",f)}catch(m){this.log("error","error in heartbeat callback",m)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log("receive",`${o.status||""} ${a} ${r} ${c&&"("+c+")"||""}`.trim(),o);for(let f=0;f<this.channels.length;f++){const m=this.channels[f];m.isMember(a,r,o,u)&&m.trigger(r,o,c,u)}this.triggerStateCallbacks("message",e)})}triggerStateCallbacks(t,...e){try{this.stateChangeCallbacks[t].forEach(([a,r])=>{try{r(...e)}catch(o){this.log("error",`error in ${t} callback`,o)}})}catch(a){this.log("error",`error triggering ${t} callbacks`,a)}}leaveOpenTopic(t){let e=this.channels.find(a=>a.topic===t&&(a.isJoined()||a.isJoining()));e&&(this.hasLogger()&&this.log("transport",`leaving duplicate topic "${t}"`),e.leave())}};class Ls{constructor(e,a){const r=a_(a);this.presence=new t_(e.getChannel(),r),this.presence.onJoin((o,c,u)=>{const f=Ls.onJoinPayload(o,c,u);e.getChannel().trigger("presence",f)}),this.presence.onLeave((o,c,u)=>{const f=Ls.onLeavePayload(o,c,u);e.getChannel().trigger("presence",f)}),this.presence.onSync(()=>{e.getChannel().trigger("presence",{event:"sync"})})}get state(){return Ls.transformState(this.presence.state)}static transformState(e){return e=i_(e),Object.getOwnPropertyNames(e).reduce((a,r)=>{const o=e[r];return a[r]=Vl(o),a},{})}static onJoinPayload(e,a,r){const o=jy(a),c=Vl(r);return{event:"join",key:e,currentPresences:o,newPresences:c}}static onLeavePayload(e,a,r){const o=jy(a),c=Vl(r);return{event:"leave",key:e,currentPresences:o,leftPresences:c}}}function Vl(t){return t.metas.map(e=>(e.presence_ref=e.phx_ref,delete e.phx_ref,delete e.phx_ref_prev,e))}function i_(t){return JSON.parse(JSON.stringify(t))}function a_(t){return(t==null?void 0:t.events)&&{events:t.events}}function jy(t){return t!=null&&t.metas?Vl(t):[]}var _y;(function(t){t.SYNC="sync",t.JOIN="join",t.LEAVE="leave"})(_y||(_y={}));class r_{get state(){return this.presenceAdapter.state}constructor(e,a){this.channel=e,this.presenceAdapter=new Ls(this.channel.channelAdapter,a)}}function s_(t){if(t instanceof Error)return t;if(typeof t=="string")return new Error(t);if(t&&typeof t=="object"){const e=t;if(typeof e.code=="number"){const a=typeof e.reason=="string"&&e.reason?` (${e.reason})`:"";return new Error(`socket closed: ${e.code}${a}`,{cause:t})}return new Error("channel error: transport failure",{cause:t})}return new Error("channel error: connection lost")}class o_{constructor(e,a,r){const o=l_(r);this.channel=e.getSocket().channel(a,o),this.socket=e}get state(){return this.channel.state}set state(e){this.channel.state=e}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(e,a){return this.channel.on(e,a)}off(e,a){this.channel.off(e,a)}subscribe(e){return this.channel.join(e)}unsubscribe(e){return this.channel.leave(e)}teardown(){this.channel.teardown()}onClose(e){this.channel.onClose(e)}onError(e){return this.channel.onError(e)}push(e,a,r){let o;try{o=this.channel.push(e,a,r)}catch{throw new Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>Vj){const c=this.channel.pushBuffer.shift();c.cancelTimeout(),this.socket.log("channel",`discarded push due to buffer overflow: ${c.event}`,c.payload())}return o}updateJoinPayload(e){const a=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},a),e)}canPush(){return this.socket.isConnected()&&this.state===Bi.joined}isJoined(){return this.state===Bi.joined}isJoining(){return this.state===Bi.joining}isClosed(){return this.state===Bi.closed}isLeaving(){return this.state===Bi.leaving}updateFilterBindings(e){this.channel.filterBindings=e}updatePayloadTransform(e){this.channel.onMessage=e}getChannel(){return this.channel}}function l_(t){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},t.config)}}var ky;(function(t){t.ALL="*",t.INSERT="INSERT",t.UPDATE="UPDATE",t.DELETE="DELETE"})(ky||(ky={}));var pr;(function(t){t.BROADCAST="broadcast",t.PRESENCE="presence",t.POSTGRES_CHANGES="postgres_changes",t.SYSTEM="system"})(pr||(pr={}));var oi;(function(t){t.SUBSCRIBED="SUBSCRIBED",t.TIMED_OUT="TIMED_OUT",t.CLOSED="CLOSED",t.CHANNEL_ERROR="CHANNEL_ERROR"})(oi||(oi={}));class zs{get state(){return this.channelAdapter.state}set state(e){this.channelAdapter.state=e}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(e,a={config:{}},r){var o,c;if(this.topic=e,this.params=a,this.socket=r,this.bindings={},this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},a.config),this.channelAdapter=new o_(this.socket.socketAdapter,e,this.params),this.presence=new r_(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=nx(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&(!((c=(o=this.params.config)===null||o===void 0?void 0:o.broadcast)===null||c===void 0)&&c.replay))throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(e,a=this.timeout){var r,o,c;if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){const{config:{broadcast:u,presence:f,private:m}}=this.params,g=(o=(r=this.bindings.postgres_changes)===null||r===void 0?void 0:r.map(w=>w.filter))!==null&&o!==void 0?o:[],y=!!this.bindings[pr.PRESENCE]&&this.bindings[pr.PRESENCE].length>0||((c=this.params.config.presence)===null||c===void 0?void 0:c.enabled)===!0,v={},x={broadcast:u,presence:Object.assign(Object.assign({},f),{enabled:y}),postgres_changes:g,private:m};this.socket.accessTokenValue&&(v.access_token=this.socket.accessTokenValue),this._onError(w=>{e==null||e(oi.CHANNEL_ERROR,s_(w))}),this._onClose(()=>e==null?void 0:e(oi.CLOSED)),this.updateJoinPayload(Object.assign({config:x},v)),this._updateFilterMessage(),this.channelAdapter.subscribe(a).receive("ok",async({postgres_changes:w})=>{if(this.socket._isManualToken()||this.socket.setAuth(),w===void 0){e==null||e(oi.SUBSCRIBED);return}this._updatePostgresBindings(w,e)}).receive("error",w=>{this.state=Bi.errored;const S=Object.values(w).join(", ")||"error";e==null||e(oi.CHANNEL_ERROR,new Error(S,{cause:w}))}).receive("timeout",()=>{e==null||e(oi.TIMED_OUT)})}return this}_updatePostgresBindings(e,a){var r;const o=this.bindings.postgres_changes,c=(r=o==null?void 0:o.length)!==null&&r!==void 0?r:0,u=[];for(let f=0;f<c;f++){const m=o[f],{filter:{event:g,schema:y,table:v,filter:x}}=m,w=e&&e[f];if(w&&w.event===g&&zs.isFilterValueEqual(w.schema,y)&&zs.isFilterValueEqual(w.table,v)&&zs.isFilterValueEqual(w.filter,x))u.push(Object.assign(Object.assign({},m),{id:w.id}));else{this.unsubscribe(),this.state=Bi.errored,a==null||a(oi.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=u,this.state!=Bi.errored&&a&&a(oi.SUBSCRIBED)}presenceState(){return this.presence.state}async track(e,a={}){return await this.send({type:"presence",event:"track",payload:e},a.timeout||this.timeout)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,a,r){const o=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),c=e===pr.PRESENCE||e===pr.POSTGRES_CHANGES;if(o&&c)throw this.socket.log("channel",`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`),new Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(e,a,r)}async httpSend(e,a,r={}){var o;if(a==null)return Promise.reject(new Error("Payload is required for httpSend()"));const c=a instanceof ArrayBuffer||ArrayBuffer.isView(a),u={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":c?"application/octet-stream":"application/json"};this.socket.accessTokenValue&&(u.Authorization=`Bearer ${this.socket.accessTokenValue}`);const f=new URL(this.broadcastEndpointURL);f.pathname+=`/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e)}`,this.private&&f.searchParams.set("private","true");const m={method:"POST",headers:u,body:c?a:JSON.stringify(a)},g=await this._fetchWithTimeout(f.toString(),m,(o=r.timeout)!==null&&o!==void 0?o:this.timeout);if(g.status===202)return{success:!0};if(g.status===404)return Promise.reject(new Error("httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md"));let y=g.statusText;try{const v=await g.json();y=v.error||v.message||y}catch{}return Promise.reject(new Error(y))}async send(e,a={}){var r,o;if(!this.channelAdapter.canPush()&&e.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:c,payload:u}=e,f={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(f.Authorization=`Bearer ${this.socket.accessTokenValue}`);const m={method:"POST",headers:f,body:JSON.stringify({messages:[{topic:this.subTopic,event:c,payload:u,private:this.private}]})};try{const g=await this._fetchWithTimeout(this.broadcastEndpointURL,m,(r=a.timeout)!==null&&r!==void 0?r:this.timeout);return await((o=g.body)===null||o===void 0?void 0:o.cancel()),g.ok?"ok":"error"}catch(g){return g instanceof Error&&g.name==="AbortError"?"timed out":"error"}}else return new Promise(c=>{var u,f,m;const g=this.channelAdapter.push(e.type,e,a.timeout||this.timeout);e.type==="broadcast"&&!(!((m=(f=(u=this.params)===null||u===void 0?void 0:u.config)===null||f===void 0?void 0:f.broadcast)===null||m===void 0)&&m.ack)&&c("ok"),g.receive("ok",()=>c("ok")),g.receive("error",()=>c("error")),g.receive("timeout",()=>c("timed out"))})}updateJoinPayload(e){this.channelAdapter.updateJoinPayload(e)}async unsubscribe(e=this.timeout){return new Promise(a=>{this.channelAdapter.unsubscribe(e).receive("ok",()=>a("ok")).receive("timeout",()=>a("timed out")).receive("error",()=>a("error"))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(e,a,r){const o=new AbortController,c=setTimeout(()=>o.abort(),r),u=await this.socket.fetch(e,Object.assign(Object.assign({},a),{signal:o.signal}));return clearTimeout(c),u}_on(e,a,r){const o=e.toLocaleLowerCase(),c=this.channelAdapter.on(e,r),u={type:o,filter:a,callback:r,ref:c};return this.bindings[o]?this.bindings[o].push(u):this.bindings[o]=[u],this._updateFilterMessage(),this}_onClose(e){this.channelAdapter.onClose(e)}_onError(e){this.channelAdapter.onError(e)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((e,a,r)=>{var o,c,u,f,m,g,y;const v=e.event.toLocaleLowerCase();if(this._notThisChannelEvent(v,r))return!1;const x=(o=this.bindings[v])===null||o===void 0?void 0:o.find(w=>w.ref===e.ref);if(!x)return!0;if(["broadcast","presence","postgres_changes"].includes(v))if("id"in x){const w=x.id,S=(c=x.filter)===null||c===void 0?void 0:c.event;return w&&((u=a.ids)===null||u===void 0?void 0:u.includes(w))&&(S==="*"||(S==null?void 0:S.toLocaleLowerCase())===((f=a.data)===null||f===void 0?void 0:f.type.toLocaleLowerCase()))}else{const w=(g=(m=x==null?void 0:x.filter)===null||m===void 0?void 0:m.event)===null||g===void 0?void 0:g.toLocaleLowerCase();return w==="*"||w===((y=a==null?void 0:a.event)===null||y===void 0?void 0:y.toLocaleLowerCase())}else return x.type.toLocaleLowerCase()===v})}_notThisChannelEvent(e,a){const{close:r,error:o,leave:c,join:u}=ex;return a&&[r,o,c,u].includes(e)&&a!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((e,a,r)=>{if(typeof a=="object"&&"ids"in a){const o=a.data,{schema:c,table:u,commit_timestamp:f,type:m,errors:g}=o;return Object.assign(Object.assign({},{schema:c,table:u,commit_timestamp:f,eventType:m,new:{},old:{},errors:g}),this._getPayloadRecords(o))}return a})}copyBindings(e){if(this.joinedOnce)throw new Error("cannot copy bindings into joined channel");for(const a in e.bindings)for(const r of e.bindings[a])this._on(r.type,r.filter,r.callback)}static isFilterValueEqual(e,a){return(e??void 0)===(a??void 0)}_getPayloadRecords(e){const a={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(a.new=Sy(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(a.old=Sy(e.columns,e.old_record)),a}}class c_{constructor(e,a){this.socket=new n_(e,a)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(e){this.socket.heartbeatCallback=e}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(e,a,r,o=1e4){return new Promise(c=>{setTimeout(()=>c("timeout"),o),this.socket.disconnect(()=>{e(),c("ok")},a,r)})}push(e){this.socket.push(e)}log(e,a,r){this.socket.log(e,a,r)}makeRef(){return this.socket.makeRef()}onOpen(e){this.socket.onOpen(e)}onClose(e){this.socket.onClose(e)}onError(e){this.socket.onError(e)}onMessage(e){this.socket.onMessage(e)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==Eh.connecting}isDisconnecting(){return this.socket.connectionState()==Eh.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}}const Ty={HEARTBEAT_INTERVAL:25e3},u_=[1e3,2e3,5e3,1e4],d_=1e4;function h_(){const t=new Map;return{get length(){return t.size},clear(){t.clear()},getItem(e){return t.has(e)?t.get(e):null},key(e){var a;return(a=Array.from(t.keys())[e])!==null&&a!==void 0?a:null},removeItem(e){t.delete(e)},setItem(e,a){t.set(e,String(a))}}}function f_(){try{if(typeof globalThis<"u"&&globalThis.sessionStorage)return globalThis.sessionStorage}catch{}return h_()}const m_=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class p_{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(e,a){var r;if(this.channels=new Array,this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint="",this.headers={},this.params={},this.ref=0,this.serializer=new Hj,this._manuallySetToken=!1,this._authPromise=null,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=c=>c?(...u)=>c(...u):(...u)=>fetch(...u),!(!((r=a==null?void 0:a.params)===null||r===void 0)&&r.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=a.params.apikey;const o=this._initializeOptions(a);this.socketAdapter=new c_(e,o),this.httpEndpoint=nx(e),this.fetch=this._resolveFetch(a==null?void 0:a.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(e){const a=e.message;throw a.includes("Node.js")?new Error(`${a}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${a}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(e,a){return this._cancelPendingDisconnect(),this.isDisconnecting()?"ok":await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},e,a)}getChannels(){return this.channels}async removeChannel(e){const a=await e.unsubscribe();return a==="ok"&&e.teardown(),a}async removeAllChannels(){const e=this.channels.map(async r=>{const o=await r.unsubscribe();return r.teardown(),o}),a=await Promise.all(e);return await this.disconnect(),a}log(e,a,r){this.socketAdapter.log(e,a,r)}connectionState(){return this.socketAdapter.connectionState()||Eh.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(e,a={config:{}}){const r=`realtime:${e}`,o=this.getChannels().find(c=>c.topic===r);if(o)return o;{const c=new zs(`realtime:${e}`,a,this);return this._cancelPendingDisconnect(),this.channels.push(c),c}}push(e){this.socketAdapter.push(e)}async setAuth(e=null){this._authPromise=this._performAuth(e);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(e){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(e)}_makeRef(){return this.socketAdapter.makeRef()}_remove(e){this.channels=this.channels.filter(a=>a.topic!==e.topic),this.channels.length===0&&(this.log("transport","no channels remaining, scheduling disconnect"),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){if(this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0){this.log("transport","disconnecting immediately - no channels"),this.disconnect();return}this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log("transport","deferred disconnect fired - no channels, disconnecting"),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log("transport",`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log("transport","pending disconnect cancelled - channel activity detected"),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(e=null){let a,r=!1;if(e)a=e,r=!0;else if(this.accessToken)try{a=await this.accessToken()}catch(o){this.log("error","Error fetching access token from callback",o),a=this.accessTokenValue}else a=this.accessTokenValue;r?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=a&&(this.accessTokenValue=a,this.channels.forEach(o=>{const c={access_token:a,version:zj};a&&o.updateJoinPayload(c),o.joinedOnce&&o.channelAdapter.isJoined()&&o.channelAdapter.push(ex.access_token,{access_token:a})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e="general"){this._isManualToken()||this.setAuth().catch(a=>{this.log("error",`Error setting auth in ${e}`,a)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(a=>{this.log("error","error waiting for auth on connect",a)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(e=>{e.ref&&e.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(e){return(a,r)=>{a=="sent"&&this._setAuthSafely(),e&&e(a,r)}}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=a=>{this.log("worker","worker error",a.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=a=>{a.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_workerObjectUrl(e){let a;if(e)a=e;else{const r=new Blob([m_],{type:"application/javascript"});a=URL.createObjectURL(r)}return a}_initializeOptions(e){var a,r,o,c,u,f,m,g,y,v,x,w;this.worker=(a=e==null?void 0:e.worker)!==null&&a!==void 0?a:!1,this.accessToken=(r=e==null?void 0:e.accessToken)!==null&&r!==void 0?r:null;const S={};S.timeout=(o=e==null?void 0:e.timeout)!==null&&o!==void 0?o:Pj,S.heartbeatIntervalMs=(c=e==null?void 0:e.heartbeatIntervalMs)!==null&&c!==void 0?c:Ty.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=(u=e==null?void 0:e.disconnectOnEmptyChannelsAfterMs)!==null&&u!==void 0?u:2*((f=e==null?void 0:e.heartbeatIntervalMs)!==null&&f!==void 0?f:Ty.HEARTBEAT_INTERVAL),S.transport=(m=e==null?void 0:e.transport)!==null&&m!==void 0?m:Mj.getWebSocketConstructor(),S.params=e==null?void 0:e.params,S.logger=e==null?void 0:e.logger,S.heartbeatCallback=this._wrapHeartbeatCallback(e==null?void 0:e.heartbeatCallback),S.sessionStorage=(g=e==null?void 0:e.sessionStorage)!==null&&g!==void 0?g:f_(),S.reconnectAfterMs=(y=e==null?void 0:e.reconnectAfterMs)!==null&&y!==void 0?y:(O=>u_[O-1]||d_);let T,E;const k=(v=e==null?void 0:e.vsn)!==null&&v!==void 0?v:Bj;switch(k){case Uj:T=(O,A)=>A(JSON.stringify(O)),E=(O,A)=>A(JSON.parse(O));break;case Zb:T=this.serializer.encode.bind(this.serializer),E=this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${S.vsn}`)}if(S.vsn=k,S.encode=(x=e==null?void 0:e.encode)!==null&&x!==void 0?x:T,S.decode=(w=e==null?void 0:e.decode)!==null&&w!==void 0?w:E,S.beforeReconnect=this._reconnectAuth.bind(this),(e!=null&&e.logLevel||e!=null&&e.log_level)&&(this.logLevel=e.logLevel||e.log_level,S.params=Object.assign(Object.assign({},S.params),{log_level:this.logLevel})),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=e==null?void 0:e.workerUrl,S.autoSendHeartbeat=!this.worker}return S}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}}var Is=class extends Error{constructor(t,e){var a;super(t),this.name="IcebergError",this.status=e.status,this.icebergType=e.icebergType,this.icebergCode=e.icebergCode,this.details=e.details,this.isCommitStateUnknown=e.icebergType==="CommitStateUnknownException"||[500,502,504].includes(e.status)&&((a=e.icebergType)==null?void 0:a.includes("CommitState"))===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function g_(t,e,a){const r=new URL(e,t);if(a)for(const[o,c]of Object.entries(a))c!==void 0&&r.searchParams.set(o,c);return r.toString()}async function y_(t){return!t||t.type==="none"?{}:t.type==="bearer"?{Authorization:`Bearer ${t.token}`}:t.type==="header"?{[t.name]:t.value}:t.type==="custom"?await t.getHeaders():{}}function v_(t){const e=t.fetchImpl??globalThis.fetch;return{async request({method:a,path:r,query:o,body:c,headers:u}){const f=g_(t.baseUrl,r,o),m=await y_(t.auth),g=await e(f,{method:a,headers:{...c?{"Content-Type":"application/json"}:{},...m,...u},body:c?JSON.stringify(c):void 0}),y=await g.text(),v=(g.headers.get("content-type")||"").includes("application/json"),x=v&&y?JSON.parse(y):y;if(!g.ok){const w=v?x:void 0,S=w==null?void 0:w.error;throw new Is((S==null?void 0:S.message)??`Request failed with status ${g.status}`,{status:g.status,icebergType:S==null?void 0:S.type,icebergCode:S==null?void 0:S.code,details:w})}return{status:g.status,headers:g.headers,data:x}}}}function Cl(t){return t.join("")}var b_=class{constructor(t,e=""){this.client=t,this.prefix=e}async listNamespaces(t){const e=t?{parent:Cl(t.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:e})).data.namespaces.map(r=>({namespace:r}))}async createNamespace(t,e){const a={namespace:t.namespace,properties:e==null?void 0:e.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:a})).data}async dropNamespace(t){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${Cl(t.namespace)}`})}async loadNamespaceMetadata(t){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Cl(t.namespace)}`})).data.properties}}async namespaceExists(t){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${Cl(t.namespace)}`}),!0}catch(e){if(e instanceof Is&&e.status===404)return!1;throw e}}async createNamespaceIfNotExists(t,e){try{return await this.createNamespace(t,e)}catch(a){if(a instanceof Is&&a.status===409)return;throw a}}};function or(t){return t.join("")}var x_=class{constructor(t,e="",a){this.client=t,this.prefix=e,this.accessDelegation=a}async listTables(t){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${or(t.namespace)}/tables`})).data.identifiers}async createTable(t,e){const a={};return this.accessDelegation&&(a["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${or(t.namespace)}/tables`,body:e,headers:a})).data.metadata}async updateTable(t,e){const a=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${or(t.namespace)}/tables/${t.name}`,body:e});return{"metadata-location":a.data["metadata-location"],metadata:a.data.metadata}}async dropTable(t,e){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${or(t.namespace)}/tables/${t.name}`,query:{purgeRequested:String((e==null?void 0:e.purge)??!1)}})}async loadTable(t){const e={};return this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${or(t.namespace)}/tables/${t.name}`,headers:e})).data.metadata}async tableExists(t){const e={};this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${or(t.namespace)}/tables/${t.name}`,headers:e}),!0}catch(a){if(a instanceof Is&&a.status===404)return!1;throw a}}async createTableIfNotExists(t,e){try{return await this.createTable(t,e)}catch(a){if(a instanceof Is&&a.status===409)return await this.loadTable({namespace:t.namespace,name:e.name});throw a}}},w_=class{constructor(t){var r;let e="v1";t.catalogName&&(e+=`/${t.catalogName}`);const a=t.baseUrl.endsWith("/")?t.baseUrl:`${t.baseUrl}/`;this.client=v_({baseUrl:a,auth:t.auth,fetchImpl:t.fetch}),this.accessDelegation=(r=t.accessDelegation)==null?void 0:r.join(","),this.namespaceOps=new b_(this.client,e),this.tableOps=new x_(this.client,e,this.accessDelegation)}async listNamespaces(t){return this.namespaceOps.listNamespaces(t)}async createNamespace(t,e){return this.namespaceOps.createNamespace(t,e)}async dropNamespace(t){await this.namespaceOps.dropNamespace(t)}async loadNamespaceMetadata(t){return this.namespaceOps.loadNamespaceMetadata(t)}async listTables(t){return this.tableOps.listTables(t)}async createTable(t,e){return this.tableOps.createTable(t,e)}async updateTable(t,e){return this.tableOps.updateTable(t,e)}async dropTable(t,e){await this.tableOps.dropTable(t,e)}async loadTable(t){return this.tableOps.loadTable(t)}async namespaceExists(t){return this.namespaceOps.namespaceExists(t)}async tableExists(t){return this.tableOps.tableExists(t)}async createNamespaceIfNotExists(t,e){return this.namespaceOps.createNamespaceIfNotExists(t,e)}async createTableIfNotExists(t,e){return this.tableOps.createTableIfNotExists(t,e)}};function qs(t){"@babel/helpers - typeof";return qs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qs(t)}function S_(t,e){if(qs(t)!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var r=a.call(t,e);if(qs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function j_(t){var e=S_(t,"string");return qs(e)=="symbol"?e:e+""}function __(t,e,a){return(e=j_(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function Ey(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),a.push.apply(a,r)}return a}function he(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?Ey(Object(a),!0).forEach(function(r){__(t,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Ey(Object(a)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(a,r))})}return t}var xc=class extends Error{constructor(t,e="storage",a,r){super(t),this.__isStorageError=!0,this.namespace=e,this.name=e==="vectors"?"StorageVectorsError":"StorageError",this.status=a,this.statusCode=r}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function wc(t){return typeof t=="object"&&t!==null&&"__isStorageError"in t}var Nh=class extends xc{constructor(t,e,a,r="storage"){super(t,r,e,a),this.name=r==="vectors"?"StorageVectorsApiError":"StorageApiError",this.status=e,this.statusCode=a}toJSON(){return he({},super.toJSON())}},ax=class extends xc{constructor(t,e,a="storage"){super(t,a),this.name=a==="vectors"?"StorageVectorsUnknownError":"StorageUnknownError",this.originalError=e}};function Ql(t,e,a){const r=he({},t),o=e.toLowerCase();for(const c of Object.keys(r))c.toLowerCase()===o&&delete r[c];return r[o]=a,r}function k_(t){const e={};for(const[a,r]of Object.entries(t))e[a.toLowerCase()]=r;return e}const T_=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),E_=t=>{if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Oh=t=>{if(Array.isArray(t))return t.map(a=>Oh(a));if(typeof t=="function"||t!==Object(t))return t;const e={};return Object.entries(t).forEach(([a,r])=>{const o=a.replace(/([-_][a-z])/gi,c=>c.toUpperCase().replace(/[-_]/g,""));e[o]=Oh(r)}),e},C_=t=>!t||typeof t!="string"||t.length===0||t.length>100||t.trim()!==t||t.includes("/")||t.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(t),Cy=t=>{if(typeof t=="object"&&t!==null){const e=t;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error;if(typeof e.error=="object"&&e.error!==null){const a=e.error;if(typeof a.message=="string")return a.message}}return JSON.stringify(t)},A_=async(t,e,a,r)=>{if(t!==null&&typeof t=="object"&&"json"in t&&typeof t.json=="function"){const o=t;let c=parseInt(String(o.status),10);Number.isFinite(c)||(c=500),o.json().then(u=>{const f=(u==null?void 0:u.statusCode)||(u==null?void 0:u.code)||c+"";e(new Nh(Cy(u),c,f,r))}).catch(()=>{const u=c+"";e(new Nh(o.statusText||`HTTP ${c} error`,c,u,r))})}else e(new ax(Cy(t),t,r))},R_=(t,e,a,r)=>{const o={method:t,headers:(e==null?void 0:e.headers)||{}};if(t==="GET"||t==="HEAD"||!r)return he(he({},o),a);if(E_(r)){var c;const u=(e==null?void 0:e.headers)||{};let f;for(const[m,g]of Object.entries(u))m.toLowerCase()==="content-type"&&(f=g);o.headers=Ql(u,"Content-Type",(c=f)!==null&&c!==void 0?c:"application/json"),o.body=JSON.stringify(r)}else o.body=r;return e!=null&&e.duplex&&(o.duplex=e.duplex),he(he({},o),a)};async function ks(t,e,a,r,o,c,u){return new Promise((f,m)=>{t(a,R_(e,r,o,c)).then(g=>{if(!g.ok)throw g;if(r!=null&&r.noResolveJson)return g;if(u==="vectors"){const y=g.headers.get("content-type");if(g.headers.get("content-length")==="0"||g.status===204)return{};if(!y||!y.includes("application/json"))return{}}return g.json()}).then(g=>f(g)).catch(g=>A_(g,m,r,u))})}function rx(t="storage"){return{get:async(e,a,r,o)=>ks(e,"GET",a,r,o,void 0,t),post:async(e,a,r,o,c)=>ks(e,"POST",a,o,c,r,t),put:async(e,a,r,o,c)=>ks(e,"PUT",a,o,c,r,t),head:async(e,a,r,o)=>ks(e,"HEAD",a,he(he({},r),{},{noResolveJson:!0}),o,void 0,t),remove:async(e,a,r,o,c)=>ks(e,"DELETE",a,o,c,r,t)}}const N_=rx("storage"),{get:Fs,post:xn,put:Dh,head:O_,remove:jf}=N_,Yt=rx("vectors");var kr=class{constructor(t,e={},a,r="storage"){this.shouldThrowOnError=!1,this.url=t,this.headers=k_(e),this.fetch=T_(a),this.namespace=r}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(t,e){return this.headers=Ql(this.headers,t,e),this}async handleOperation(t){var e=this;try{return{data:await t(),error:null}}catch(a){if(e.shouldThrowOnError)throw a;if(wc(a))return{data:null,error:a};throw a}}};let sx;sx=Symbol.toStringTag;var D_=class{constructor(t,e){this.downloadFn=t,this.shouldThrowOnError=e,this[sx]="StreamDownloadBuilder",this.promise=null}then(t,e){return this.getPromise().then(t,e)}catch(t){return this.getPromise().catch(t)}finally(t){return this.getPromise().finally(t)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var t=this;try{return{data:(await t.downloadFn()).body,error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(wc(e))return{data:null,error:e};throw e}}};let ox;ox=Symbol.toStringTag;var M_=class{constructor(t,e){this.downloadFn=t,this.shouldThrowOnError=e,this[ox]="BlobDownloadBuilder",this.promise=null}asStream(){return new D_(this.downloadFn,this.shouldThrowOnError)}then(t,e){return this.getPromise().then(t,e)}catch(t){return this.getPromise().catch(t)}finally(t){return this.getPromise().finally(t)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var t=this;try{return{data:await(await t.downloadFn()).blob(),error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(wc(e))return{data:null,error:e};throw e}}};const L_={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},Ay={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};var z_=class extends kr{constructor(t,e={},a,r){super(t,e,r,"storage"),this.bucketId=a}async uploadOrUpdate(t,e,a,r){var o=this;return o.handleOperation(async()=>{let c;const u=he(he({},Ay),r);let f=he(he({},o.headers),t==="POST"&&{"x-upsert":String(u.upsert)});const m=u.metadata;if(typeof Blob<"u"&&a instanceof Blob?(c=new FormData,c.append("cacheControl",u.cacheControl),m&&c.append("metadata",o.encodeMetadata(m)),c.append("",a)):typeof FormData<"u"&&a instanceof FormData?(c=a,c.has("cacheControl")||c.append("cacheControl",u.cacheControl),m&&!c.has("metadata")&&c.append("metadata",o.encodeMetadata(m))):(c=a,f["cache-control"]=`max-age=${u.cacheControl}`,f["content-type"]=u.contentType,m&&(f["x-metadata"]=o.toBase64(o.encodeMetadata(m))),(typeof ReadableStream<"u"&&c instanceof ReadableStream||c&&typeof c=="object"&&"pipe"in c&&typeof c.pipe=="function")&&!u.duplex&&(u.duplex="half")),r!=null&&r.headers)for(const[x,w]of Object.entries(r.headers))f=Ql(f,x,w);const g=o._removeEmptyFolders(e),y=o._getFinalPath(g),v=await(t=="PUT"?Dh:xn)(o.fetch,`${o.url}/object/${y}`,c,he({headers:f},u!=null&&u.duplex?{duplex:u.duplex}:{}));return{path:g,id:v.Id,fullPath:v.Key}})}async upload(t,e,a){return this.uploadOrUpdate("POST",t,e,a)}async uploadToSignedUrl(t,e,a,r){var o=this;const c=o._removeEmptyFolders(t),u=o._getFinalPath(c),f=new URL(o.url+`/object/upload/sign/${u}`);return f.searchParams.set("token",e),o.handleOperation(async()=>{let m;const g=he(he({},Ay),r);let y=he(he({},o.headers),{"x-upsert":String(g.upsert)});const v=g.metadata;if(typeof Blob<"u"&&a instanceof Blob?(m=new FormData,m.append("cacheControl",g.cacheControl),v&&m.append("metadata",o.encodeMetadata(v)),m.append("",a)):typeof FormData<"u"&&a instanceof FormData?(m=a,m.has("cacheControl")||m.append("cacheControl",g.cacheControl),v&&!m.has("metadata")&&m.append("metadata",o.encodeMetadata(v))):(m=a,y["cache-control"]=`max-age=${g.cacheControl}`,y["content-type"]=g.contentType,v&&(y["x-metadata"]=o.toBase64(o.encodeMetadata(v))),(typeof ReadableStream<"u"&&m instanceof ReadableStream||m&&typeof m=="object"&&"pipe"in m&&typeof m.pipe=="function")&&!g.duplex&&(g.duplex="half")),r!=null&&r.headers)for(const[x,w]of Object.entries(r.headers))y=Ql(y,x,w);return{path:c,fullPath:(await Dh(o.fetch,f.toString(),m,he({headers:y},g!=null&&g.duplex?{duplex:g.duplex}:{}))).Key}})}async createSignedUploadUrl(t,e){var a=this;return a.handleOperation(async()=>{let r=a._getFinalPath(t);const o=he({},a.headers);e!=null&&e.upsert&&(o["x-upsert"]="true");const c=await xn(a.fetch,`${a.url}/object/upload/sign/${r}`,{},{headers:o}),u=new URL(a.url+c.url),f=u.searchParams.get("token");if(!f)throw new xc("No token returned by API");return{signedUrl:u.toString(),path:t,token:f}})}async update(t,e,a){return this.uploadOrUpdate("PUT",t,e,a)}async move(t,e,a){var r=this;return r.handleOperation(async()=>await xn(r.fetch,`${r.url}/object/move`,{bucketId:r.bucketId,sourceKey:t,destinationKey:e,destinationBucket:a==null?void 0:a.destinationBucket},{headers:r.headers}))}async copy(t,e,a){var r=this;return r.handleOperation(async()=>({path:(await xn(r.fetch,`${r.url}/object/copy`,{bucketId:r.bucketId,sourceKey:t,destinationKey:e,destinationBucket:a==null?void 0:a.destinationBucket},{headers:r.headers})).Key}))}async createSignedUrl(t,e,a){var r=this;return r.handleOperation(async()=>{let o=r._getFinalPath(t);const c=typeof(a==null?void 0:a.transform)=="object"&&a.transform!==null&&Object.keys(a.transform).length>0;let u=await xn(r.fetch,`${r.url}/object/sign/${o}`,he({expiresIn:e},c?{transform:a.transform}:{}),{headers:r.headers});const f=new URLSearchParams;a!=null&&a.download&&f.set("download",a.download===!0?"":a.download),(a==null?void 0:a.cacheNonce)!=null&&f.set("cacheNonce",String(a.cacheNonce));const m=f.toString();return{signedUrl:encodeURI(`${r.url}${u.signedURL}${m?`&${m}`:""}`)}})}async createSignedUrls(t,e,a){var r=this;return r.handleOperation(async()=>{const o=await xn(r.fetch,`${r.url}/object/sign/${r.bucketId}`,{expiresIn:e,paths:t},{headers:r.headers}),c=new URLSearchParams;a!=null&&a.download&&c.set("download",a.download===!0?"":a.download),(a==null?void 0:a.cacheNonce)!=null&&c.set("cacheNonce",String(a.cacheNonce));const u=c.toString();return o.map(f=>he(he({},f),{},{signedUrl:f.signedURL?encodeURI(`${r.url}${f.signedURL}${u?`&${u}`:""}`):null}))})}download(t,e,a){const r=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image/authenticated":"object",o=new URLSearchParams;e!=null&&e.transform&&this.applyTransformOptsToQuery(o,e.transform),(e==null?void 0:e.cacheNonce)!=null&&o.set("cacheNonce",String(e.cacheNonce));const c=o.toString(),u=this._getFinalPath(t),f=()=>Fs(this.fetch,`${this.url}/${r}/${u}${c?`?${c}`:""}`,{headers:this.headers,noResolveJson:!0},a);return new M_(f,this.shouldThrowOnError)}async info(t){var e=this;const a=e._getFinalPath(t);return e.handleOperation(async()=>Oh(await Fs(e.fetch,`${e.url}/object/info/${a}`,{headers:e.headers})))}async exists(t){var e=this;const a=e._getFinalPath(t);try{return await O_(e.fetch,`${e.url}/object/${a}`,{headers:e.headers}),{data:!0,error:null}}catch(o){if(e.shouldThrowOnError)throw o;if(wc(o)){var r;const c=o instanceof Nh?o.status:o instanceof ax?(r=o.originalError)===null||r===void 0?void 0:r.status:void 0;if(c!==void 0&&[400,404].includes(c))return{data:!1,error:o}}throw o}}getPublicUrl(t,e){const a=this._getFinalPath(t),r=new URLSearchParams;e!=null&&e.download&&r.set("download",e.download===!0?"":e.download),e!=null&&e.transform&&this.applyTransformOptsToQuery(r,e.transform),(e==null?void 0:e.cacheNonce)!=null&&r.set("cacheNonce",String(e.cacheNonce));const o=r.toString(),c=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image":"object";return{data:{publicUrl:encodeURI(`${this.url}/${c}/public/${a}`)+(o?`?${o}`:"")}}}async remove(t){var e=this;return e.handleOperation(async()=>await jf(e.fetch,`${e.url}/object/${e.bucketId}`,{prefixes:t},{headers:e.headers}))}async list(t,e,a){var r=this;return r.handleOperation(async()=>{const o=he(he(he({},L_),e),{},{prefix:t||""});return await xn(r.fetch,`${r.url}/object/list/${r.bucketId}`,o,{headers:r.headers},a)})}async listV2(t,e){var a=this;return a.handleOperation(async()=>{const r=he({},t);return await xn(a.fetch,`${a.url}/object/list-v2/${a.bucketId}`,r,{headers:a.headers},e)})}encodeMetadata(t){return JSON.stringify(t)}toBase64(t){return typeof Buffer<"u"?Buffer.from(t).toString("base64"):btoa(t)}_getFinalPath(t){return`${this.bucketId}/${t.replace(/^\/+/,"")}`}_removeEmptyFolders(t){return t.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}applyTransformOptsToQuery(t,e){return e.width&&t.set("width",e.width.toString()),e.height&&t.set("height",e.height.toString()),e.resize&&t.set("resize",e.resize),e.format&&t.set("format",e.format),e.quality&&t.set("quality",e.quality.toString()),t}};const U_="2.108.2",to={"X-Client-Info":`storage-js/${U_}`};var B_=class extends kr{constructor(t,e={},a,r){const o=new URL(t);r!=null&&r.useNewHostname&&/supabase\.(co|in|red)$/.test(o.hostname)&&!o.hostname.includes("storage.supabase.")&&(o.hostname=o.hostname.replace("supabase.","storage.supabase."));const c=o.href.replace(/\/$/,""),u=he(he({},to),e);super(c,u,a,"storage")}async listBuckets(t){var e=this;return e.handleOperation(async()=>{const a=e.listBucketOptionsToQueryString(t);return await Fs(e.fetch,`${e.url}/bucket${a}`,{headers:e.headers})})}async getBucket(t){var e=this;return e.handleOperation(async()=>await Fs(e.fetch,`${e.url}/bucket/${t}`,{headers:e.headers}))}async createBucket(t,e={public:!1}){var a=this;return a.handleOperation(async()=>await xn(a.fetch,`${a.url}/bucket`,{id:t,name:t,type:e.type,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:a.headers}))}async updateBucket(t,e){var a=this;return a.handleOperation(async()=>await Dh(a.fetch,`${a.url}/bucket/${t}`,{id:t,name:t,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:a.headers}))}async emptyBucket(t){var e=this;return e.handleOperation(async()=>await xn(e.fetch,`${e.url}/bucket/${t}/empty`,{},{headers:e.headers}))}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await jf(e.fetch,`${e.url}/bucket/${t}`,{},{headers:e.headers}))}listBucketOptionsToQueryString(t){const e={};return t&&("limit"in t&&(e.limit=String(t.limit)),"offset"in t&&(e.offset=String(t.offset)),t.search&&(e.search=t.search),t.sortColumn&&(e.sortColumn=t.sortColumn),t.sortOrder&&(e.sortOrder=t.sortOrder)),Object.keys(e).length>0?"?"+new URLSearchParams(e).toString():""}},P_=class extends kr{constructor(t,e={},a){const r=t.replace(/\/$/,""),o=he(he({},to),e);super(r,o,a,"storage")}async createBucket(t){var e=this;return e.handleOperation(async()=>await xn(e.fetch,`${e.url}/bucket`,{name:t},{headers:e.headers}))}async listBuckets(t){var e=this;return e.handleOperation(async()=>{const a=new URLSearchParams;(t==null?void 0:t.limit)!==void 0&&a.set("limit",t.limit.toString()),(t==null?void 0:t.offset)!==void 0&&a.set("offset",t.offset.toString()),t!=null&&t.sortColumn&&a.set("sortColumn",t.sortColumn),t!=null&&t.sortOrder&&a.set("sortOrder",t.sortOrder),t!=null&&t.search&&a.set("search",t.search);const r=a.toString(),o=r?`${e.url}/bucket?${r}`:`${e.url}/bucket`;return await Fs(e.fetch,o,{headers:e.headers})})}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await jf(e.fetch,`${e.url}/bucket/${t}`,{},{headers:e.headers}))}from(t){var e=this;if(!C_(t))throw new xc("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");const a=new w_({baseUrl:this.url,catalogName:t,auth:{type:"custom",getHeaders:async()=>e.headers},fetch:this.fetch}),r=this.shouldThrowOnError;return new Proxy(a,{get(o,c){const u=o[c];return typeof u!="function"?u:async(...f)=>{try{return{data:await u.apply(o,f),error:null}}catch(m){if(r)throw m;return{data:null,error:m}}}}})}},V_=class extends kr{constructor(t,e={},a){const r=t.replace(/\/$/,""),o=he(he({},to),{},{"Content-Type":"application/json"},e);super(r,o,a,"vectors")}async createIndex(t){var e=this;return e.handleOperation(async()=>await Yt.post(e.fetch,`${e.url}/CreateIndex`,t,{headers:e.headers})||{})}async getIndex(t,e){var a=this;return a.handleOperation(async()=>await Yt.post(a.fetch,`${a.url}/GetIndex`,{vectorBucketName:t,indexName:e},{headers:a.headers}))}async listIndexes(t){var e=this;return e.handleOperation(async()=>await Yt.post(e.fetch,`${e.url}/ListIndexes`,t,{headers:e.headers}))}async deleteIndex(t,e){var a=this;return a.handleOperation(async()=>await Yt.post(a.fetch,`${a.url}/DeleteIndex`,{vectorBucketName:t,indexName:e},{headers:a.headers})||{})}},H_=class extends kr{constructor(t,e={},a){const r=t.replace(/\/$/,""),o=he(he({},to),{},{"Content-Type":"application/json"},e);super(r,o,a,"vectors")}async putVectors(t){var e=this;if(t.vectors.length<1||t.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return e.handleOperation(async()=>await Yt.post(e.fetch,`${e.url}/PutVectors`,t,{headers:e.headers})||{})}async getVectors(t){var e=this;return e.handleOperation(async()=>await Yt.post(e.fetch,`${e.url}/GetVectors`,t,{headers:e.headers}))}async listVectors(t){var e=this;if(t.segmentCount!==void 0){if(t.segmentCount<1||t.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(t.segmentIndex!==void 0&&(t.segmentIndex<0||t.segmentIndex>=t.segmentCount))throw new Error(`segmentIndex must be between 0 and ${t.segmentCount-1}`)}return e.handleOperation(async()=>await Yt.post(e.fetch,`${e.url}/ListVectors`,t,{headers:e.headers}))}async queryVectors(t){var e=this;return e.handleOperation(async()=>await Yt.post(e.fetch,`${e.url}/QueryVectors`,t,{headers:e.headers}))}async deleteVectors(t){var e=this;if(t.keys.length<1||t.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return e.handleOperation(async()=>await Yt.post(e.fetch,`${e.url}/DeleteVectors`,t,{headers:e.headers})||{})}},$_=class extends kr{constructor(t,e={},a){const r=t.replace(/\/$/,""),o=he(he({},to),{},{"Content-Type":"application/json"},e);super(r,o,a,"vectors")}async createBucket(t){var e=this;return e.handleOperation(async()=>await Yt.post(e.fetch,`${e.url}/CreateVectorBucket`,{vectorBucketName:t},{headers:e.headers})||{})}async getBucket(t){var e=this;return e.handleOperation(async()=>await Yt.post(e.fetch,`${e.url}/GetVectorBucket`,{vectorBucketName:t},{headers:e.headers}))}async listBuckets(t={}){var e=this;return e.handleOperation(async()=>await Yt.post(e.fetch,`${e.url}/ListVectorBuckets`,t,{headers:e.headers}))}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await Yt.post(e.fetch,`${e.url}/DeleteVectorBucket`,{vectorBucketName:t},{headers:e.headers})||{})}},I_=class extends $_{constructor(t,e={}){super(t,e.headers||{},e.fetch)}from(t){return new q_(this.url,this.headers,t,this.fetch)}async createBucket(t){var e=()=>super.createBucket,a=this;return e().call(a,t)}async getBucket(t){var e=()=>super.getBucket,a=this;return e().call(a,t)}async listBuckets(t={}){var e=()=>super.listBuckets,a=this;return e().call(a,t)}async deleteBucket(t){var e=()=>super.deleteBucket,a=this;return e().call(a,t)}},q_=class extends V_{constructor(t,e,a,r){super(t,e,r),this.vectorBucketName=a}async createIndex(t){var e=()=>super.createIndex,a=this;return e().call(a,he(he({},t),{},{vectorBucketName:a.vectorBucketName}))}async listIndexes(t={}){var e=()=>super.listIndexes,a=this;return e().call(a,he(he({},t),{},{vectorBucketName:a.vectorBucketName}))}async getIndex(t){var e=()=>super.getIndex,a=this;return e().call(a,a.vectorBucketName,t)}async deleteIndex(t){var e=()=>super.deleteIndex,a=this;return e().call(a,a.vectorBucketName,t)}index(t){return new F_(this.url,this.headers,this.vectorBucketName,t,this.fetch)}},F_=class extends H_{constructor(t,e,a,r,o){super(t,e,o),this.vectorBucketName=a,this.indexName=r}async putVectors(t){var e=()=>super.putVectors,a=this;return e().call(a,he(he({},t),{},{vectorBucketName:a.vectorBucketName,indexName:a.indexName}))}async getVectors(t){var e=()=>super.getVectors,a=this;return e().call(a,he(he({},t),{},{vectorBucketName:a.vectorBucketName,indexName:a.indexName}))}async listVectors(t={}){var e=()=>super.listVectors,a=this;return e().call(a,he(he({},t),{},{vectorBucketName:a.vectorBucketName,indexName:a.indexName}))}async queryVectors(t){var e=()=>super.queryVectors,a=this;return e().call(a,he(he({},t),{},{vectorBucketName:a.vectorBucketName,indexName:a.indexName}))}async deleteVectors(t){var e=()=>super.deleteVectors,a=this;return e().call(a,he(he({},t),{},{vectorBucketName:a.vectorBucketName,indexName:a.indexName}))}},G_=class extends B_{constructor(t,e={},a,r){super(t,e,a,r)}from(t){return new z_(this.url,this.headers,t,this.fetch)}get vectors(){return new I_(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new P_(this.url+"/iceberg",this.headers,this.fetch)}};const lx="2.108.2",li=30*1e3,Ns=3,Qd=Ns*li,K_=2*li,Y_="http://localhost:9999",X_="supabase.auth.token",W_={"X-Client-Info":`gotrue-js/${lx}`},Mh="X-Supabase-Api-Version",cx={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},J_=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,Q_=600*1e3;class Gs extends Error{constructor(e,a,r){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=a,this.code=r}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}}function Z(t){return typeof t=="object"&&t!==null&&"__isAuthError"in t}class Z_ extends Gs{constructor(e,a,r){super(e,a,r),this.name="AuthApiError",this.status=a,this.code=r}}function ek(t){return Z(t)&&t.name==="AuthApiError"}class wn extends Gs{constructor(e,a){super(e),this.name="AuthUnknownError",this.originalError=a}}class Pn extends Gs{constructor(e,a,r,o){super(e,r,o),this.name=a,this.status=r}}class pt extends Pn{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function Al(t){return Z(t)&&t.name==="AuthSessionMissingError"}class lr extends Pn{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class Rl extends Pn{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class Nl extends Pn{constructor(e,a=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=a}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}function tk(t){return Z(t)&&t.name==="AuthImplicitGrantRedirectError"}class Ry extends Pn{constructor(e,a=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=a}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}class nk extends Pn{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}}class Lh extends Pn{constructor(e,a){super(e,"AuthRetryableFetchError",a,void 0)}}function Ny(t){return Z(t)&&t.name==="AuthRetryableFetchError"}class Oy extends Pn{constructor(e="Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)"){super(e,"AuthRefreshDiscardedError",409,void 0)}}function ik(t){return Z(t)&&t.name==="AuthRefreshDiscardedError"}class Dy extends Pn{constructor(e,a,r){super(e,"AuthWeakPasswordError",a,"weak_password"),this.reasons=r}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}}class Zl extends Pn{constructor(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}}const ec="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),My=` 	
\r=`.split(""),ak=(()=>{const t=new Array(128);for(let e=0;e<t.length;e+=1)t[e]=-1;for(let e=0;e<My.length;e+=1)t[My[e].charCodeAt(0)]=-2;for(let e=0;e<ec.length;e+=1)t[ec[e].charCodeAt(0)]=e;return t})();function Ly(t,e,a){if(t!==null)for(e.queue=e.queue<<8|t,e.queuedBits+=8;e.queuedBits>=6;){const r=e.queue>>e.queuedBits-6&63;a(ec[r]),e.queuedBits-=6}else if(e.queuedBits>0)for(e.queue=e.queue<<6-e.queuedBits,e.queuedBits=6;e.queuedBits>=6;){const r=e.queue>>e.queuedBits-6&63;a(ec[r]),e.queuedBits-=6}}function ux(t,e,a){const r=ak[t];if(r>-1)for(e.queue=e.queue<<6|r,e.queuedBits+=6;e.queuedBits>=8;)a(e.queue>>e.queuedBits-8&255),e.queuedBits-=8;else{if(r===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(t)}"`)}}function zy(t){const e=[],a=u=>{e.push(String.fromCodePoint(u))},r={utf8seq:0,codepoint:0},o={queue:0,queuedBits:0},c=u=>{ok(u,r,a)};for(let u=0;u<t.length;u+=1)ux(t.charCodeAt(u),o,c);return e.join("")}function rk(t,e){if(t<=127){e(t);return}else if(t<=2047){e(192|t>>6),e(128|t&63);return}else if(t<=65535){e(224|t>>12),e(128|t>>6&63),e(128|t&63);return}else if(t<=1114111){e(240|t>>18),e(128|t>>12&63),e(128|t>>6&63),e(128|t&63);return}throw new Error(`Unrecognized Unicode codepoint: ${t.toString(16)}`)}function sk(t,e){for(let a=0;a<t.length;a+=1){let r=t.charCodeAt(a);if(r>55295&&r<=56319){const o=(r-55296)*1024&65535;r=(t.charCodeAt(a+1)-56320&65535|o)+65536,a+=1}rk(r,e)}}function ok(t,e,a){if(e.utf8seq===0){if(t<=127){a(t);return}for(let r=1;r<6;r+=1)if((t>>7-r&1)===0){e.utf8seq=r;break}if(e.utf8seq===2)e.codepoint=t&31;else if(e.utf8seq===3)e.codepoint=t&15;else if(e.utf8seq===4)e.codepoint=t&7;else throw new Error("Invalid UTF-8 sequence");e.utf8seq-=1}else if(e.utf8seq>0){if(t<=127)throw new Error("Invalid UTF-8 sequence");e.codepoint=e.codepoint<<6|t&63,e.utf8seq-=1,e.utf8seq===0&&a(e.codepoint)}}function br(t){const e=[],a={queue:0,queuedBits:0},r=o=>{e.push(o)};for(let o=0;o<t.length;o+=1)ux(t.charCodeAt(o),a,r);return new Uint8Array(e)}function lk(t){const e=[];return sk(t,a=>e.push(a)),new Uint8Array(e)}function ga(t){const e=[],a={queue:0,queuedBits:0},r=o=>{e.push(o)};return t.forEach(o=>Ly(o,a,r)),Ly(null,a,r),e.join("")}function ck(t){return Math.round(Date.now()/1e3)+t}function uk(){return Symbol("auth-callback")}const _t=()=>typeof window<"u"&&typeof document<"u",la={tested:!1,writable:!1},dx=()=>{if(!_t())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(la.tested)return la.writable;const t=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(t,t),globalThis.localStorage.removeItem(t),la.tested=!0,la.writable=!0}catch{la.tested=!0,la.writable=!1}return la.writable};function dk(t){const e={},a=new URL(t);if(a.hash&&a.hash[0]==="#")try{new URLSearchParams(a.hash.substring(1)).forEach((o,c)=>{e[c]=o})}catch{}return a.searchParams.forEach((r,o)=>{e[o]=r}),e}const hx=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),hk=t=>typeof t=="object"&&t!==null&&"status"in t&&"ok"in t&&"json"in t&&typeof t.json=="function",fr=async(t,e,a)=>{await t.setItem(e,JSON.stringify(a))},gn=async(t,e)=>{const a=await t.getItem(e);if(!a)return null;try{return JSON.parse(a)}catch{return null}},tt=async(t,e)=>{await t.removeItem(e)};class Sc{constructor(){this.promise=new Sc.promiseConstructor((e,a)=>{this.resolve=e,this.reject=a})}}Sc.promiseConstructor=Promise;function Ol(t){const e=t.split(".");if(e.length!==3)throw new Zl("Invalid JWT structure");for(let r=0;r<e.length;r++)if(!J_.test(e[r]))throw new Zl("JWT not in base64url format");return{header:JSON.parse(zy(e[0])),payload:JSON.parse(zy(e[1])),signature:br(e[2]),raw:{header:e[0],payload:e[1]}}}async function fk(t){return await new Promise(e=>{setTimeout(()=>e(null),t)})}function mk(t,e){return new Promise((r,o)=>{(async()=>{for(let c=0;c<1/0;c++)try{const u=await t(c);if(!e(c,null,u)){r(u);return}}catch(u){if(!e(c,u)){o(u);return}}})()})}function pk(t){return("0"+t.toString(16)).substr(-2)}function gk(){const e=new Uint32Array(56);if(typeof crypto>"u"){const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",r=a.length;let o="";for(let c=0;c<56;c++)o+=a.charAt(Math.floor(Math.random()*r));return o}return crypto.getRandomValues(e),Array.from(e,pk).join("")}async function yk(t){const a=new TextEncoder().encode(t),r=await crypto.subtle.digest("SHA-256",a),o=new Uint8Array(r);return Array.from(o).map(c=>String.fromCharCode(c)).join("")}async function vk(t){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),t;const a=await yk(t);return btoa(a).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function ca(t,e,a=!1){const r=gk();let o=r;a&&(o+="/recovery"),await fr(t,`${e}-code-verifier`,o);const c=await vk(r);return[c,r===c?"plain":"s256"]}const bk=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function xk(t){const e=t.headers.get(Mh);if(!e||!e.match(bk))return null;try{return new Date(`${e}T00:00:00.0Z`)}catch{return null}}function wk(t){if(!t)throw new Error("Missing exp claim");const e=Math.floor(Date.now()/1e3);if(t<=e)throw new Error("JWT has expired")}function Sk(t){switch(t){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const jk=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function ai(t){if(!jk.test(t))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function vn(t){if(!t.passkey)throw new Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).")}function Zd(){const t={};return new Proxy(t,{get:(e,a)=>{if(a==="__isUserNotAvailableProxy")return!0;if(typeof a=="symbol"){const r=a.toString();if(r==="Symbol(Symbol.toPrimitive)"||r==="Symbol(Symbol.toStringTag)"||r==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${a}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,a)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${a}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,a)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${a}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function _k(t,e){return new Proxy(t,{get:(a,r,o)=>{if(r==="__isInsecureUserWarningProxy")return!0;if(typeof r=="symbol"){const c=r.toString();if(c==="Symbol(Symbol.toPrimitive)"||c==="Symbol(Symbol.toStringTag)"||c==="Symbol(util.inspect.custom)"||c==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(a,r,o)}return!e.value&&typeof r=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),e.value=!0),Reflect.get(a,r,o)}})}function Uy(t){return JSON.parse(JSON.stringify(t))}const ha=t=>{if(typeof t=="object"&&t!==null){const e=t;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error}return JSON.stringify(t)},kk=[500,501,502,503,504,520,521,522,523,524,525,526,527,528,529,530];async function By(t){var e;if(!hk(t))throw new Lh(ha(t),0);if(kk.includes(t.status))throw new Lh(ha(t),t.status);let a;try{a=await t.json()}catch(c){throw new wn(ha(c),c)}let r;const o=xk(t);if(o&&o.getTime()>=cx["2024-01-01"].timestamp&&typeof a=="object"&&a&&typeof a.code=="string"?r=a.code:typeof a=="object"&&a&&typeof a.error_code=="string"&&(r=a.error_code),r){if(r==="weak_password")throw new Dy(ha(a),t.status,((e=a.weak_password)===null||e===void 0?void 0:e.reasons)||[]);if(r==="session_not_found")throw new pt}else if(typeof a=="object"&&a&&typeof a.weak_password=="object"&&a.weak_password&&Array.isArray(a.weak_password.reasons)&&a.weak_password.reasons.length&&a.weak_password.reasons.reduce((c,u)=>c&&typeof u=="string",!0))throw new Dy(ha(a),t.status,a.weak_password.reasons);throw new Z_(ha(a),t.status||500,r)}const Tk=(t,e,a,r)=>{const o={method:t,headers:(e==null?void 0:e.headers)||{}};return t==="GET"?o:(o.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e==null?void 0:e.headers),o.body=JSON.stringify(r),Object.assign(Object.assign({},o),a))};async function re(t,e,a,r){var o;const c=Object.assign({},r==null?void 0:r.headers);c[Mh]||(c[Mh]=cx["2024-01-01"].name),r!=null&&r.jwt&&(c.Authorization=`Bearer ${r.jwt}`);const u=(o=r==null?void 0:r.query)!==null&&o!==void 0?o:{};r!=null&&r.redirectTo&&(u.redirect_to=r.redirectTo);const f=Object.keys(u).length?"?"+new URLSearchParams(u).toString():"",m=await Ek(t,e,a+f,{headers:c,noResolveJson:r==null?void 0:r.noResolveJson},{},r==null?void 0:r.body);return r!=null&&r.xform?r==null?void 0:r.xform(m):{data:Object.assign({},m),error:null}}async function Ek(t,e,a,r,o,c){const u=Tk(e,r,o,c);let f;try{f=await t(a,Object.assign({},u))}catch(m){throw console.error(m),new Lh(ha(m),0)}if(f.ok||await By(f),r!=null&&r.noResolveJson)return f;try{return await f.json()}catch(m){await By(m)}}function un(t){var e;let a=null;Rk(t)&&(a=Object.assign({},t),t.expires_at||(a.expires_at=ck(t.expires_in)));const r=(e=t.user)!==null&&e!==void 0?e:typeof(t==null?void 0:t.id)=="string"?t:null;return{data:{session:a,user:r},error:null}}function Py(t){const e=un(t);return!e.error&&t.weak_password&&typeof t.weak_password=="object"&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.message&&typeof t.weak_password.message=="string"&&t.weak_password.reasons.reduce((a,r)=>a&&typeof r=="string",!0)&&(e.data.weak_password=t.weak_password),e}function Pi(t){var e;return{data:{user:(e=t.user)!==null&&e!==void 0?e:t},error:null}}function Ck(t){return{data:t,error:null}}function Ak(t){const{action_link:e,email_otp:a,hashed_token:r,redirect_to:o,verification_type:c}=t,u=bc(t,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),f={action_link:e,email_otp:a,hashed_token:r,redirect_to:o,verification_type:c},m=Object.assign({},u);return{data:{properties:f,user:m},error:null}}function Vy(t){return t}function Rk(t){return!!t.access_token&&!!t.refresh_token&&!!t.expires_in}const eh=["global","local","others"];class Nk{constructor({url:e="",headers:a={},fetch:r,experimental:o}){this.url=e,this.headers=a,this.fetch=hx(r),this.experimental=o??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(e,a=eh[0]){if(eh.indexOf(a)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${eh.join(", ")}`);try{return await re(this.fetch,"POST",`${this.url}/logout?scope=${a}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(r){if(Z(r))return{data:null,error:r};throw r}}async inviteUserByEmail(e,a={}){try{return await re(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:a.data},headers:this.headers,redirectTo:a.redirectTo,xform:Pi})}catch(r){if(Z(r))return{data:{user:null},error:r};throw r}}async generateLink(e){try{const{options:a}=e,r=bc(e,["options"]),o=Object.assign(Object.assign({},r),a);return"newEmail"in r&&(o.new_email=r==null?void 0:r.newEmail,delete o.newEmail),await re(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:o,headers:this.headers,xform:Ak,redirectTo:a==null?void 0:a.redirectTo})}catch(a){if(Z(a))return{data:{properties:null,user:null},error:a};throw a}}async createUser(e){try{return await re(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:Pi})}catch(a){if(Z(a))return{data:{user:null},error:a};throw a}}async listUsers(e){var a,r,o,c,u,f,m;try{const g={nextPage:null,lastPage:0,total:0},y=await re(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(r=(a=e==null?void 0:e.page)===null||a===void 0?void 0:a.toString())!==null&&r!==void 0?r:"",per_page:(c=(o=e==null?void 0:e.perPage)===null||o===void 0?void 0:o.toString())!==null&&c!==void 0?c:""},xform:Vy});if(y.error)throw y.error;const v=await y.json(),x=(u=y.headers.get("x-total-count"))!==null&&u!==void 0?u:0,w=(m=(f=y.headers.get("link"))===null||f===void 0?void 0:f.split(","))!==null&&m!==void 0?m:[];return w.length>0&&(w.forEach(S=>{const T=parseInt(S.split(";")[0].split("=")[1].substring(0,1)),E=JSON.parse(S.split(";")[1].split("=")[1]);g[`${E}Page`]=T}),g.total=parseInt(x)),{data:Object.assign(Object.assign({},v),g),error:null}}catch(g){if(Z(g))return{data:{users:[]},error:g};throw g}}async getUserById(e){ai(e);try{return await re(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:Pi})}catch(a){if(Z(a))return{data:{user:null},error:a};throw a}}async updateUserById(e,a){ai(e);try{return await re(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:a,headers:this.headers,xform:Pi})}catch(r){if(Z(r))return{data:{user:null},error:r};throw r}}async deleteUser(e,a=!1){ai(e);try{return await re(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:a},xform:Pi})}catch(r){if(Z(r))return{data:{user:null},error:r};throw r}}async _listFactors(e){ai(e.userId);try{const{data:a,error:r}=await re(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:o=>({data:{factors:o},error:null})});return{data:a,error:r}}catch(a){if(Z(a))return{data:null,error:a};throw a}}async _deleteFactor(e){ai(e.userId),ai(e.id);try{return{data:await re(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(a){if(Z(a))return{data:null,error:a};throw a}}async _listOAuthClients(e){var a,r,o,c,u,f,m;try{const g={nextPage:null,lastPage:0,total:0},y=await re(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(r=(a=e==null?void 0:e.page)===null||a===void 0?void 0:a.toString())!==null&&r!==void 0?r:"",per_page:(c=(o=e==null?void 0:e.perPage)===null||o===void 0?void 0:o.toString())!==null&&c!==void 0?c:""},xform:Vy});if(y.error)throw y.error;const v=await y.json(),x=(u=y.headers.get("x-total-count"))!==null&&u!==void 0?u:0,w=(m=(f=y.headers.get("link"))===null||f===void 0?void 0:f.split(","))!==null&&m!==void 0?m:[];return w.length>0&&(w.forEach(S=>{const T=parseInt(S.split(";")[0].split("=")[1].substring(0,1)),E=JSON.parse(S.split(";")[1].split("=")[1]);g[`${E}Page`]=T}),g.total=parseInt(x)),{data:Object.assign(Object.assign({},v),g),error:null}}catch(g){if(Z(g))return{data:{clients:[]},error:g};throw g}}async _createOAuthClient(e){try{return await re(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(Z(a))return{data:null,error:a};throw a}}async _getOAuthClient(e){try{return await re(this.fetch,"GET",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(Z(a))return{data:null,error:a};throw a}}async _updateOAuthClient(e,a){try{return await re(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${e}`,{body:a,headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(Z(r))return{data:null,error:r};throw r}}async _deleteOAuthClient(e){try{return await re(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(a){if(Z(a))return{data:null,error:a};throw a}}async _regenerateOAuthClientSecret(e){try{return await re(this.fetch,"POST",`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(Z(a))return{data:null,error:a};throw a}}async _listCustomProviders(e){try{const a={};return e!=null&&e.type&&(a.type=e.type),await re(this.fetch,"GET",`${this.url}/admin/custom-providers`,{headers:this.headers,query:a,xform:r=>{var o;return{data:{providers:(o=r==null?void 0:r.providers)!==null&&o!==void 0?o:[]},error:null}}})}catch(a){if(Z(a))return{data:{providers:[]},error:a};throw a}}async _createCustomProvider(e){try{return await re(this.fetch,"POST",`${this.url}/admin/custom-providers`,{body:e,headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(Z(a))return{data:null,error:a};throw a}}async _getCustomProvider(e){try{return await re(this.fetch,"GET",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(Z(a))return{data:null,error:a};throw a}}async _updateCustomProvider(e,a){try{return await re(this.fetch,"PUT",`${this.url}/admin/custom-providers/${e}`,{body:a,headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(Z(r))return{data:null,error:r};throw r}}async _deleteCustomProvider(e){try{return await re(this.fetch,"DELETE",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(a){if(Z(a))return{data:null,error:a};throw a}}async _adminListPasskeys(e){vn(this.experimental),ai(e.userId);try{return await re(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/passkeys`,{headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(Z(a))return{data:null,error:a};throw a}}async _adminDeletePasskey(e){vn(this.experimental),ai(e.userId),ai(e.passkeyId);try{return await re(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(a){if(Z(a))return{data:null,error:a};throw a}}}function Hy(t={}){return{getItem:e=>t[e]||null,setItem:(e,a)=>{t[e]=a},removeItem:e=>{delete t[e]}}}globalThis&&dx()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");class Ok extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}function Dk(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function fx(t){if(!/^0x[a-fA-F0-9]{40}$/.test(t))throw new Error(`@supabase/auth-js: Address "${t}" is invalid.`);return t.toLowerCase()}function Mk(t){return parseInt(t,16)}function Lk(t){const e=new TextEncoder().encode(t);return"0x"+Array.from(e,r=>r.toString(16).padStart(2,"0")).join("")}function zk(t){var e;const{chainId:a,domain:r,expirationTime:o,issuedAt:c=new Date,nonce:u,notBefore:f,requestId:m,resources:g,scheme:y,uri:v,version:x}=t;{if(!Number.isInteger(a))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${a}`);if(!r)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(u&&u.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${u}`);if(!v)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(x!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${x}`);if(!((e=t.statement)===null||e===void 0)&&e.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${t.statement}`)}const w=fx(t.address),S=y?`${y}://${r}`:r,T=t.statement?`${t.statement}
`:"",E=`${S} wants you to sign in with your Ethereum account:
${w}

${T}`;let k=`URI: ${v}
Version: ${x}
Chain ID: ${a}${u?`
Nonce: ${u}`:""}
Issued At: ${c.toISOString()}`;if(o&&(k+=`
Expiration Time: ${o.toISOString()}`),f&&(k+=`
Not Before: ${f.toISOString()}`),m&&(k+=`
Request ID: ${m}`),g){let O=`
Resources:`;for(const A of g){if(!A||typeof A!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${A}`);O+=`
- ${A}`}k+=O}return`${E}
${k}`}class ot extends Error{constructor({message:e,code:a,cause:r,name:o}){var c;super(e,{cause:r}),this.__isWebAuthnError=!0,this.name=(c=o??(r instanceof Error?r.name:void 0))!==null&&c!==void 0?c:"Unknown Error",this.code=a}toJSON(){return{name:this.name,message:this.message,code:this.code}}}class tc extends ot{constructor(e,a){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:a,message:e}),this.name="WebAuthnUnknownError",this.originalError=a}}function Uk({error:t,options:e}){var a,r,o;const{publicKey:c}=e;if(!c)throw Error("options was missing required publicKey property");if(t.name==="AbortError"){if(e.signal instanceof AbortSignal)return new ot({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:t})}else if(t.name==="ConstraintError"){if(((a=c.authenticatorSelection)===null||a===void 0?void 0:a.requireResidentKey)===!0)return new ot({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:t});if(e.mediation==="conditional"&&((r=c.authenticatorSelection)===null||r===void 0?void 0:r.userVerification)==="required")return new ot({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:t});if(((o=c.authenticatorSelection)===null||o===void 0?void 0:o.userVerification)==="required")return new ot({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:t})}else{if(t.name==="InvalidStateError")return new ot({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:t});if(t.name==="NotAllowedError")return new ot({message:t.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t});if(t.name==="NotSupportedError")return c.pubKeyCredParams.filter(f=>f.type==="public-key").length===0?new ot({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:t}):new ot({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:t});if(t.name==="SecurityError"){const u=window.location.hostname;if(mx(u)){if(c.rp.id!==u)return new ot({message:`The RP ID "${c.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:t})}else return new ot({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:t})}else if(t.name==="TypeError"){if(c.user.id.byteLength<1||c.user.id.byteLength>64)return new ot({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:t})}else if(t.name==="UnknownError")return new ot({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:t})}return new ot({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t})}function Bk({error:t,options:e}){const{publicKey:a}=e;if(!a)throw Error("options was missing required publicKey property");if(t.name==="AbortError"){if(e.signal instanceof AbortSignal)return new ot({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:t})}else{if(t.name==="NotAllowedError")return new ot({message:t.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t});if(t.name==="SecurityError"){const r=window.location.hostname;if(mx(r)){if(a.rpId!==r)return new ot({message:`The RP ID "${a.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:t})}else return new ot({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:t})}else if(t.name==="UnknownError")return new ot({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:t})}return new ot({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t})}class Pk{createNewAbortSignal(){if(this.controller){const a=new Error("Cancelling existing WebAuthn API call for new one");a.name="AbortError",this.controller.abort(a)}const e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){const e=new Error("Manually cancelling existing WebAuthn API call");e.name="AbortError",this.controller.abort(e),this.controller=void 0}}}const zh=new Pk;function $y(t){if(!t)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(t);const{challenge:e,user:a,excludeCredentials:r}=t,o=bc(t,["challenge","user","excludeCredentials"]),c=br(e).buffer,u=Object.assign(Object.assign({},a),{id:br(a.id).buffer}),f=Object.assign(Object.assign({},o),{challenge:c,user:u});if(r&&r.length>0){f.excludeCredentials=new Array(r.length);for(let m=0;m<r.length;m++){const g=r[m];f.excludeCredentials[m]=Object.assign(Object.assign({},g),{id:br(g.id).buffer,type:g.type||"public-key",transports:g.transports})}}return f}function Iy(t){if(!t)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(t);const{challenge:e,allowCredentials:a}=t,r=bc(t,["challenge","allowCredentials"]),o=br(e).buffer,c=Object.assign(Object.assign({},r),{challenge:o});if(a&&a.length>0){c.allowCredentials=new Array(a.length);for(let u=0;u<a.length;u++){const f=a[u];c.allowCredentials[u]=Object.assign(Object.assign({},f),{id:br(f.id).buffer,type:f.type||"public-key",transports:f.transports})}}return c}function qy(t){var e;if("toJSON"in t&&typeof t.toJSON=="function")return t.toJSON();const a=t;return{id:t.id,rawId:t.id,response:{attestationObject:ga(new Uint8Array(t.response.attestationObject)),clientDataJSON:ga(new Uint8Array(t.response.clientDataJSON))},type:"public-key",clientExtensionResults:t.getClientExtensionResults(),authenticatorAttachment:(e=a.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function Fy(t){var e;if("toJSON"in t&&typeof t.toJSON=="function")return t.toJSON();const a=t,r=t.getClientExtensionResults(),o=t.response;return{id:t.id,rawId:t.id,response:{authenticatorData:ga(new Uint8Array(o.authenticatorData)),clientDataJSON:ga(new Uint8Array(o.clientDataJSON)),signature:ga(new Uint8Array(o.signature)),userHandle:o.userHandle?ga(new Uint8Array(o.userHandle)):void 0},type:"public-key",clientExtensionResults:r,authenticatorAttachment:(e=a.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function mx(t){return t==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(t)}function nc(){var t,e;return!!(_t()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((t=navigator==null?void 0:navigator.credentials)===null||t===void 0?void 0:t.create)=="function"&&typeof((e=navigator==null?void 0:navigator.credentials)===null||e===void 0?void 0:e.get)=="function")}async function px(t){try{const e=await navigator.credentials.create(t);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new tc("Browser returned unexpected credential type",e)}:{data:null,error:new tc("Empty credential response",e)}}catch(e){return{data:null,error:Uk({error:e,options:t})}}}async function gx(t){try{const e=await navigator.credentials.get(t);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new tc("Browser returned unexpected credential type",e)}:{data:null,error:new tc("Empty credential response",e)}}catch(e){return{data:null,error:Bk({error:e,options:t})}}}const Vk={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},Hk={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function ic(...t){const e=o=>o!==null&&typeof o=="object"&&!Array.isArray(o),a=o=>o instanceof ArrayBuffer||ArrayBuffer.isView(o),r={};for(const o of t)if(o)for(const c in o){const u=o[c];if(u!==void 0)if(Array.isArray(u))r[c]=u;else if(a(u))r[c]=u;else if(e(u)){const f=r[c];e(f)?r[c]=ic(f,u):r[c]=ic(u)}else r[c]=u}return r}function $k(t,e){return ic(Vk,t,e||{})}function Ik(t,e){return ic(Hk,t,e||{})}class qk{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:"webauthn"}))}async _challenge({factorId:e,webauthn:a,friendlyName:r,signal:o},c){var u;try{const{data:f,error:m}=await this.client.mfa.challenge({factorId:e,webauthn:a});if(!f)return{data:null,error:m};const g=o??zh.createNewAbortSignal();if(f.webauthn.type==="create"){const{user:y}=f.webauthn.credential_options.publicKey;if(!y.name){const v=r;if(v)y.name=`${y.id}:${v}`;else{const w=(await this.client.getUser()).data.user,S=((u=w==null?void 0:w.user_metadata)===null||u===void 0?void 0:u.name)||(w==null?void 0:w.email)||(w==null?void 0:w.id)||"User";y.name=`${y.id}:${S}`}}y.displayName||(y.displayName=y.name)}switch(f.webauthn.type){case"create":{const y=$k(f.webauthn.credential_options.publicKey,c==null?void 0:c.create),{data:v,error:x}=await px({publicKey:y,signal:g});return v?{data:{factorId:e,challengeId:f.id,webauthn:{type:f.webauthn.type,credential_response:v}},error:null}:{data:null,error:x}}case"request":{const y=Ik(f.webauthn.credential_options.publicKey,c==null?void 0:c.request),{data:v,error:x}=await gx(Object.assign(Object.assign({},f.webauthn.credential_options),{publicKey:y,signal:g}));return v?{data:{factorId:e,challengeId:f.id,webauthn:{type:f.webauthn.type,credential_response:v}},error:null}:{data:null,error:x}}}}catch(f){return Z(f)?{data:null,error:f}:{data:null,error:new wn("Unexpected error in challenge",f)}}}async _verify({challengeId:e,factorId:a,webauthn:r}){return this.client.mfa.verify({factorId:a,challengeId:e,webauthn:r})}async _authenticate({factorId:e,webauthn:{rpId:a=typeof window<"u"?window.location.hostname:void 0,rpOrigins:r=typeof window<"u"?[window.location.origin]:void 0,signal:o}={}},c){if(!a)return{data:null,error:new Gs("rpId is required for WebAuthn authentication")};try{if(!nc())return{data:null,error:new wn("Browser does not support WebAuthn",null)};const{data:u,error:f}=await this.challenge({factorId:e,webauthn:{rpId:a,rpOrigins:r},signal:o},{request:c});if(!u)return{data:null,error:f};const{webauthn:m}=u;return this._verify({factorId:e,challengeId:u.challengeId,webauthn:{type:m.type,rpId:a,rpOrigins:r,credential_response:m.credential_response}})}catch(u){return Z(u)?{data:null,error:u}:{data:null,error:new wn("Unexpected error in authenticate",u)}}}async _register({friendlyName:e,webauthn:{rpId:a=typeof window<"u"?window.location.hostname:void 0,rpOrigins:r=typeof window<"u"?[window.location.origin]:void 0,signal:o}={}},c){if(!a)return{data:null,error:new Gs("rpId is required for WebAuthn registration")};try{if(!nc())return{data:null,error:new wn("Browser does not support WebAuthn",null)};const{data:u,error:f}=await this._enroll({friendlyName:e});if(!u)return await this.client.mfa.listFactors().then(y=>{var v;return(v=y.data)===null||v===void 0?void 0:v.all.find(x=>x.factor_type==="webauthn"&&x.friendly_name===e&&x.status!=="unverified")}).then(y=>y?this.client.mfa.unenroll({factorId:y==null?void 0:y.id}):void 0),{data:null,error:f};const{data:m,error:g}=await this._challenge({factorId:u.id,friendlyName:u.friendly_name,webauthn:{rpId:a,rpOrigins:r},signal:o},{create:c});return m?this._verify({factorId:u.id,challengeId:m.challengeId,webauthn:{rpId:a,rpOrigins:r,type:m.webauthn.type,credential_response:m.webauthn.credential_response}}):{data:null,error:g}}catch(u){return Z(u)?{data:null,error:u}:{data:null,error:new wn("Unexpected error in register",u)}}}}Dk();const Fk={url:Y_,storageKey:X_,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:W_,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}},cr={};class Ks{get jwks(){var e,a;return(a=(e=cr[this.storageKey])===null||e===void 0?void 0:e.jwks)!==null&&a!==void 0?a:{keys:[]}}set jwks(e){cr[this.storageKey]=Object.assign(Object.assign({},cr[this.storageKey]),{jwks:e})}get jwks_cached_at(){var e,a;return(a=(e=cr[this.storageKey])===null||e===void 0?void 0:e.cachedAt)!==null&&a!==void 0?a:Number.MIN_SAFE_INTEGER}set jwks_cached_at(e){cr[this.storageKey]=Object.assign(Object.assign({},cr[this.storageKey]),{cachedAt:e})}constructor(e){var a,r,o;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.lastRefreshFailure=null,this._sessionRemovalEpoch=0,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lock=null,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const c=Object.assign(Object.assign({},Fk),e);if(this.storageKey=c.storageKey,this.instanceID=(a=Ks.nextInstanceID[this.storageKey])!==null&&a!==void 0?a:0,Ks.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!c.debug,typeof c.debug=="function"&&(this.logger=c.debug),this.instanceID>0&&_t()){const u=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(u),this.logDebugMessages&&console.trace(u)}if(this.persistSession=c.persistSession,this.autoRefreshToken=c.autoRefreshToken,this.experimental=(r=c.experimental)!==null&&r!==void 0?r:{},this.admin=new Nk({url:c.url,headers:c.headers,fetch:c.fetch,experimental:this.experimental}),this.url=c.url,this.headers=c.headers,this.fetch=hx(c.fetch),this.detectSessionInUrl=c.detectSessionInUrl,this.flowType=c.flowType,this.hasCustomAuthorizationHeader=c.hasCustomAuthorizationHeader,this.throwOnError=c.throwOnError,this.lockAcquireTimeout=c.lockAcquireTimeout,c.lock!=null&&(this.lock=c.lock),this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new qk(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(c.storage?this.storage=c.storage:dx()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=Hy(this.memoryStorage)),c.userStorage&&(this.userStorage=c.userStorage)):(this.memoryStorage={},this.storage=Hy(this.memoryStorage)),_t()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(u){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",u)}(o=this.broadcastChannel)===null||o===void 0||o.addEventListener("message",async u=>{this._debug("received broadcast notification from other tab or client",u),(u.data.event==="TOKEN_REFRESHED"||u.data.event==="SIGNED_IN")&&(this.lastRefreshFailure=null);try{await this._notifyAllSubscribers(u.data.event,u.data.session,!1)}catch(f){this._debug("#broadcastChannel","error",f)}})}c.skipAutoInitialize||this.initialize().catch(u=>{this._debug("#initialize()","error",u)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${lx}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()):await this._initialize())(),await this.initializePromise)}async _initialize(){var e;try{let a={},r="none";if(_t()&&(a=dk(window.location.href),this._isImplicitGrantCallback(a)?r="implicit":await this._isPKCECallback(a)&&(r="pkce")),_t()&&this.detectSessionInUrl&&r!=="none"){const{data:o,error:c}=await this._getSessionFromURL(a,r);if(c){if(this._debug("#_initialize()","error detecting session from URL",c),tk(c)){const m=(e=c.details)===null||e===void 0?void 0:e.code;if(m==="identity_already_exists"||m==="identity_not_found"||m==="single_identity_not_deletable")return{error:c}}return{error:c}}const{session:u,redirectType:f}=o;return this._debug("#_initialize()","detected session in URL",u,"redirect type",f),await this._saveSession(u),setTimeout(async()=>{f==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",u):await this._notifyAllSubscribers("SIGNED_IN",u)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(a){return Z(a)?this._returnResult({error:a}):this._returnResult({error:new wn("Unexpected error during initialization",a)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var a,r,o;try{const c=await re(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(r=(a=e==null?void 0:e.options)===null||a===void 0?void 0:a.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:(o=e==null?void 0:e.options)===null||o===void 0?void 0:o.captchaToken}},xform:un}),{data:u,error:f}=c;if(f||!u)return this._returnResult({data:{user:null,session:null},error:f});const m=u.session,g=u.user;return u.session&&(await this._saveSession(u.session),await this._notifyAllSubscribers("SIGNED_IN",m)),this._returnResult({data:{user:g,session:m},error:null})}catch(c){if(Z(c))return this._returnResult({data:{user:null,session:null},error:c});throw c}}async signUp(e){var a,r,o;try{let c;if("email"in e){const{email:y,password:v,options:x}=e;let w=null,S=null;this.flowType==="pkce"&&([w,S]=await ca(this.storage,this.storageKey)),c=await re(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:x==null?void 0:x.emailRedirectTo,body:{email:y,password:v,data:(a=x==null?void 0:x.data)!==null&&a!==void 0?a:{},gotrue_meta_security:{captcha_token:x==null?void 0:x.captchaToken},code_challenge:w,code_challenge_method:S},xform:un})}else if("phone"in e){const{phone:y,password:v,options:x}=e;c=await re(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:y,password:v,data:(r=x==null?void 0:x.data)!==null&&r!==void 0?r:{},channel:(o=x==null?void 0:x.channel)!==null&&o!==void 0?o:"sms",gotrue_meta_security:{captcha_token:x==null?void 0:x.captchaToken}},xform:un})}else throw new Rl("You must provide either an email or phone number and a password");const{data:u,error:f}=c;if(f||!u)return await tt(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:f});const m=u.session,g=u.user;return u.session&&(await this._saveSession(u.session),await this._notifyAllSubscribers("SIGNED_IN",m)),this._returnResult({data:{user:g,session:m},error:null})}catch(c){if(await tt(this.storage,`${this.storageKey}-code-verifier`),Z(c))return this._returnResult({data:{user:null,session:null},error:c});throw c}}async signInWithPassword(e){try{let a;if("email"in e){const{email:c,password:u,options:f}=e;a=await re(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:c,password:u,gotrue_meta_security:{captcha_token:f==null?void 0:f.captchaToken}},xform:Py})}else if("phone"in e){const{phone:c,password:u,options:f}=e;a=await re(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:c,password:u,gotrue_meta_security:{captcha_token:f==null?void 0:f.captchaToken}},xform:Py})}else throw new Rl("You must provide either an email or phone number and a password");const{data:r,error:o}=a;if(o)return this._returnResult({data:{user:null,session:null},error:o});if(!r||!r.session||!r.user){const c=new lr;return this._returnResult({data:{user:null,session:null},error:c})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers("SIGNED_IN",r.session)),this._returnResult({data:Object.assign({user:r.user,session:r.session},r.weak_password?{weakPassword:r.weak_password}:null),error:o})}catch(a){if(Z(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async signInWithOAuth(e){var a,r,o,c;return await this._handleProviderSignIn(e.provider,{redirectTo:(a=e.options)===null||a===void 0?void 0:a.redirectTo,scopes:(r=e.options)===null||r===void 0?void 0:r.scopes,queryParams:(o=e.options)===null||o===void 0?void 0:o.queryParams,skipBrowserRedirect:(c=e.options)===null||c===void 0?void 0:c.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this.lock!=null?this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(e)):this._exchangeCodeForSession(e)}async signInWithWeb3(e){const{chain:a}=e;switch(a){case"ethereum":return await this.signInWithEthereum(e);case"solana":return await this.signInWithSolana(e);default:throw new Error(`@supabase/auth-js: Unsupported chain "${a}"`)}}async signInWithEthereum(e){var a,r,o,c,u,f,m,g,y,v,x;let w,S;if("message"in e)w=e.message,S=e.signature;else{const{chain:T,wallet:E,statement:k,options:O}=e;let A;if(_t())if(typeof E=="object")A=E;else{const M=window;if("ethereum"in M&&typeof M.ethereum=="object"&&"request"in M.ethereum&&typeof M.ethereum.request=="function")A=M.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof E!="object"||!(O!=null&&O.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");A=E}const B=new URL((a=O==null?void 0:O.url)!==null&&a!==void 0?a:window.location.href),G=await A.request({method:"eth_requestAccounts"}).then(M=>M).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!G||G.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const W=fx(G[0]);let q=(r=O==null?void 0:O.signInWithEthereum)===null||r===void 0?void 0:r.chainId;if(!q){const M=await A.request({method:"eth_chainId"});q=Mk(M)}const X={domain:B.host,address:W,statement:k,uri:B.href,version:"1",chainId:q,nonce:(o=O==null?void 0:O.signInWithEthereum)===null||o===void 0?void 0:o.nonce,issuedAt:(u=(c=O==null?void 0:O.signInWithEthereum)===null||c===void 0?void 0:c.issuedAt)!==null&&u!==void 0?u:new Date,expirationTime:(f=O==null?void 0:O.signInWithEthereum)===null||f===void 0?void 0:f.expirationTime,notBefore:(m=O==null?void 0:O.signInWithEthereum)===null||m===void 0?void 0:m.notBefore,requestId:(g=O==null?void 0:O.signInWithEthereum)===null||g===void 0?void 0:g.requestId,resources:(y=O==null?void 0:O.signInWithEthereum)===null||y===void 0?void 0:y.resources};w=zk(X),S=await A.request({method:"personal_sign",params:[Lk(w),W]})}try{const{data:T,error:E}=await re(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:w,signature:S},!((v=e.options)===null||v===void 0)&&v.captchaToken?{gotrue_meta_security:{captcha_token:(x=e.options)===null||x===void 0?void 0:x.captchaToken}}:null),xform:un});if(E)throw E;if(!T||!T.session||!T.user){const k=new lr;return this._returnResult({data:{user:null,session:null},error:k})}return T.session&&(await this._saveSession(T.session),await this._notifyAllSubscribers("SIGNED_IN",T.session)),this._returnResult({data:Object.assign({},T),error:E})}catch(T){if(Z(T))return this._returnResult({data:{user:null,session:null},error:T});throw T}}async signInWithSolana(e){var a,r,o,c,u,f,m,g,y,v,x,w;let S,T;if("message"in e)S=e.message,T=e.signature;else{const{chain:E,wallet:k,statement:O,options:A}=e;let B;if(_t())if(typeof k=="object")B=k;else{const W=window;if("solana"in W&&typeof W.solana=="object"&&("signIn"in W.solana&&typeof W.solana.signIn=="function"||"signMessage"in W.solana&&typeof W.solana.signMessage=="function"))B=W.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof k!="object"||!(A!=null&&A.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");B=k}const G=new URL((a=A==null?void 0:A.url)!==null&&a!==void 0?a:window.location.href);if("signIn"in B&&B.signIn){const W=await B.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},A==null?void 0:A.signInWithSolana),{version:"1",domain:G.host,uri:G.href}),O?{statement:O}:null));let q;if(Array.isArray(W)&&W[0]&&typeof W[0]=="object")q=W[0];else if(W&&typeof W=="object"&&"signedMessage"in W&&"signature"in W)q=W;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in q&&"signature"in q&&(typeof q.signedMessage=="string"||q.signedMessage instanceof Uint8Array)&&q.signature instanceof Uint8Array)S=typeof q.signedMessage=="string"?q.signedMessage:new TextDecoder().decode(q.signedMessage),T=q.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in B)||typeof B.signMessage!="function"||!("publicKey"in B)||typeof B!="object"||!B.publicKey||!("toBase58"in B.publicKey)||typeof B.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");S=[`${G.host} wants you to sign in with your Solana account:`,B.publicKey.toBase58(),...O?["",O,""]:[""],"Version: 1",`URI: ${G.href}`,`Issued At: ${(o=(r=A==null?void 0:A.signInWithSolana)===null||r===void 0?void 0:r.issuedAt)!==null&&o!==void 0?o:new Date().toISOString()}`,...!((c=A==null?void 0:A.signInWithSolana)===null||c===void 0)&&c.notBefore?[`Not Before: ${A.signInWithSolana.notBefore}`]:[],...!((u=A==null?void 0:A.signInWithSolana)===null||u===void 0)&&u.expirationTime?[`Expiration Time: ${A.signInWithSolana.expirationTime}`]:[],...!((f=A==null?void 0:A.signInWithSolana)===null||f===void 0)&&f.chainId?[`Chain ID: ${A.signInWithSolana.chainId}`]:[],...!((m=A==null?void 0:A.signInWithSolana)===null||m===void 0)&&m.nonce?[`Nonce: ${A.signInWithSolana.nonce}`]:[],...!((g=A==null?void 0:A.signInWithSolana)===null||g===void 0)&&g.requestId?[`Request ID: ${A.signInWithSolana.requestId}`]:[],...!((v=(y=A==null?void 0:A.signInWithSolana)===null||y===void 0?void 0:y.resources)===null||v===void 0)&&v.length?["Resources",...A.signInWithSolana.resources.map(q=>`- ${q}`)]:[]].join(`
`);const W=await B.signMessage(new TextEncoder().encode(S),"utf8");if(!W||!(W instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");T=W}}try{const{data:E,error:k}=await re(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:S,signature:ga(T)},!((x=e.options)===null||x===void 0)&&x.captchaToken?{gotrue_meta_security:{captcha_token:(w=e.options)===null||w===void 0?void 0:w.captchaToken}}:null),xform:un});if(k)throw k;if(!E||!E.session||!E.user){const O=new lr;return this._returnResult({data:{user:null,session:null},error:O})}return E.session&&(await this._saveSession(E.session),await this._notifyAllSubscribers("SIGNED_IN",E.session)),this._returnResult({data:Object.assign({},E),error:k})}catch(E){if(Z(E))return this._returnResult({data:{user:null,session:null},error:E});throw E}}async _exchangeCodeForSession(e){const a=await gn(this.storage,`${this.storageKey}-code-verifier`),[r,o]=(a??"").split("/");try{if(!r&&this.flowType==="pkce")throw new nk;const{data:c,error:u}=await re(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:r},xform:un});if(await tt(this.storage,`${this.storageKey}-code-verifier`),u)throw u;if(!c||!c.session||!c.user){const f=new lr;return this._returnResult({data:{user:null,session:null,redirectType:null},error:f})}return c.session&&(await this._saveSession(c.session),await this._notifyAllSubscribers(o==="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",c.session)),this._returnResult({data:Object.assign(Object.assign({},c),{redirectType:o??null}),error:u})}catch(c){if(await tt(this.storage,`${this.storageKey}-code-verifier`),Z(c))return this._returnResult({data:{user:null,session:null,redirectType:null},error:c});throw c}}async signInWithIdToken(e){try{const{options:a,provider:r,token:o,access_token:c,nonce:u}=e,f=await re(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:r,id_token:o,access_token:c,nonce:u,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:un}),{data:m,error:g}=f;if(g)return this._returnResult({data:{user:null,session:null},error:g});if(!m||!m.session||!m.user){const y=new lr;return this._returnResult({data:{user:null,session:null},error:y})}return m.session&&(await this._saveSession(m.session),await this._notifyAllSubscribers("SIGNED_IN",m.session)),this._returnResult({data:m,error:g})}catch(a){if(Z(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async signInWithOtp(e){var a,r,o,c,u;try{if("email"in e){const{email:f,options:m}=e;let g=null,y=null;this.flowType==="pkce"&&([g,y]=await ca(this.storage,this.storageKey));const{error:v}=await re(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:f,data:(a=m==null?void 0:m.data)!==null&&a!==void 0?a:{},create_user:(r=m==null?void 0:m.shouldCreateUser)!==null&&r!==void 0?r:!0,gotrue_meta_security:{captcha_token:m==null?void 0:m.captchaToken},code_challenge:g,code_challenge_method:y},redirectTo:m==null?void 0:m.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:v})}if("phone"in e){const{phone:f,options:m}=e,{data:g,error:y}=await re(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:f,data:(o=m==null?void 0:m.data)!==null&&o!==void 0?o:{},create_user:(c=m==null?void 0:m.shouldCreateUser)!==null&&c!==void 0?c:!0,gotrue_meta_security:{captcha_token:m==null?void 0:m.captchaToken},channel:(u=m==null?void 0:m.channel)!==null&&u!==void 0?u:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:g==null?void 0:g.message_id},error:y})}throw new Rl("You must provide either an email or phone number.")}catch(f){if(await tt(this.storage,`${this.storageKey}-code-verifier`),Z(f))return this._returnResult({data:{user:null,session:null},error:f});throw f}}async verifyOtp(e){var a,r;try{let o,c;"options"in e&&(o=(a=e.options)===null||a===void 0?void 0:a.redirectTo,c=(r=e.options)===null||r===void 0?void 0:r.captchaToken);const{data:u,error:f}=await re(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:c}}),redirectTo:o,xform:un});if(f)throw f;if(!u)throw new Error("An error occurred on token verification.");const m=u.session,g=u.user;return m!=null&&m.access_token&&(await this._saveSession(m),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",m)),this._returnResult({data:{user:g,session:m},error:null})}catch(o){if(Z(o))return this._returnResult({data:{user:null,session:null},error:o});throw o}}async signInWithSSO(e){var a,r,o,c,u;try{let f=null,m=null;this.flowType==="pkce"&&([f,m]=await ca(this.storage,this.storageKey));const g=await re(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:(r=(a=e.options)===null||a===void 0?void 0:a.redirectTo)!==null&&r!==void 0?r:void 0}),!((o=e==null?void 0:e.options)===null||o===void 0)&&o.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:f,code_challenge_method:m}),headers:this.headers,xform:Ck});return!((c=g.data)===null||c===void 0)&&c.url&&_t()&&!(!((u=e.options)===null||u===void 0)&&u.skipBrowserRedirect)&&window.location.assign(g.data.url),this._returnResult(g)}catch(f){if(await tt(this.storage,`${this.storageKey}-code-verifier`),Z(f))return this._returnResult({data:null,error:f});throw f}}async reauthenticate(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate()):await this._reauthenticate()}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:a},error:r}=e;if(r)throw r;if(!a)throw new pt;const{error:o}=await re(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:a.access_token});return this._returnResult({data:{user:null,session:null},error:o})})}catch(e){if(Z(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){try{const a=`${this.url}/resend`;if("email"in e){const{email:r,type:o,options:c}=e;let u=null,f=null;this.flowType==="pkce"&&([u,f]=await ca(this.storage,this.storageKey));const{error:m}=await re(this.fetch,"POST",a,{headers:this.headers,body:{email:r,type:o,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken},code_challenge:u,code_challenge_method:f},redirectTo:c==null?void 0:c.emailRedirectTo});return m&&await tt(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:m})}else if("phone"in e){const{phone:r,type:o,options:c}=e,{data:u,error:f}=await re(this.fetch,"POST",a,{headers:this.headers,body:{phone:r,type:o,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:u==null?void 0:u.message_id},error:f})}throw new Rl("You must provide either an email or phone number and a type")}catch(a){if(await tt(this.storage,`${this.storageKey}-code-verifier`),Z(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async getSession(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async e=>e)):await this._useSession(async e=>e)}async _acquireLock(e,a){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const r=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),o=(async()=>(await r,await a()))();return this.pendingInLock.push((async()=>{try{await o}catch{}})()),o}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const r=a();for(this.pendingInLock.push((async()=>{try{await r}catch{}})()),await r;this.pendingInLock.length;){const o=[...this.pendingInLock];await Promise.all(o),this.pendingInLock.splice(0,o.length)}return await r}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const a=await this.__loadSession();return await e(a)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lock!=null&&!this.lockAcquired&&this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null;const a=await gn(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",a),a!==null&&(this._isValidSession(a)?e=a:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const r=e.expires_at?e.expires_at*1e3-Date.now()<Qd:!1;if(this._debug("#__loadSession()",`session has${r?"":" not"} expired`,"expires_at",e.expires_at),!r){if(this.userStorage){const u=await gn(this.userStorage,this.storageKey+"-user");u!=null&&u.user?e.user=u.user:e.user=Zd()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){const u={value:this.suppressGetSessionWarning};e.user=_k(e.user,u),u.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:e},error:null}}const{data:o,error:c}=await this._callRefreshToken(e.refresh_token);if(c){if(!!(e.expires_at&&e.expires_at*1e3>Date.now())){const f=await gn(this.storage,this.storageKey);if(f&&f.refresh_token===e.refresh_token)return this._returnResult({data:{session:e},error:null})}return this._returnResult({data:{session:null},error:c})}return this._returnResult({data:{session:o},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(e){if(e)return await this._getUser(e);await this.initializePromise;let a;return this.lock!=null?a=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser()):a=await this._getUser(),a.data.user&&(this.suppressGetSessionWarning=!0),a}async _getUser(e){try{return e?await re(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:Pi}):await this._useSession(async a=>{var r,o,c;const{data:u,error:f}=a;if(f)throw f;return!(!((r=u.session)===null||r===void 0)&&r.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new pt}:await re(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(c=(o=u.session)===null||o===void 0?void 0:o.access_token)!==null&&c!==void 0?c:void 0,xform:Pi})})}catch(a){if(Z(a))return Al(a)&&(await this._removeSession(),await tt(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:a});throw a}}async updateUser(e,a={}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(e,a)):await this._updateUser(e,a)}async _updateUser(e,a={}){try{return await this._useSession(async r=>{const{data:o,error:c}=r;if(c)throw c;if(!o.session)throw new pt;const u=o.session;let f=null,m=null;this.flowType==="pkce"&&e.email!=null&&([f,m]=await ca(this.storage,this.storageKey));const{data:g,error:y}=await re(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:a==null?void 0:a.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:f,code_challenge_method:m}),jwt:u.access_token,xform:Pi});if(y)throw y;return u.user=g.user,await this._saveSession(u),await this._notifyAllSubscribers("USER_UPDATED",u),this._returnResult({data:{user:u.user},error:null})})}catch(r){if(await tt(this.storage,`${this.storageKey}-code-verifier`),Z(r))return this._returnResult({data:{user:null},error:r});throw r}}async setSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(e)):await this._setSession(e)}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new pt;const a=Date.now()/1e3;let r=a,o=!0,c=null;const{payload:u}=Ol(e.access_token);if(u.exp&&(r=u.exp,o=r<=a),o){const{data:f,error:m}=await this._callRefreshToken(e.refresh_token);if(m)return this._returnResult({data:{user:null,session:null},error:m});if(!f)return{data:{user:null,session:null},error:null};c=f}else{const{data:f,error:m}=await this._getUser(e.access_token);if(m)return this._returnResult({data:{user:null,session:null},error:m});c={access_token:e.access_token,refresh_token:e.refresh_token,user:f.user,token_type:"bearer",expires_in:r-a,expires_at:r},await this._saveSession(c),await this._notifyAllSubscribers("SIGNED_IN",c)}return this._returnResult({data:{user:c.user,session:c},error:null})}catch(a){if(Z(a))return this._returnResult({data:{session:null,user:null},error:a});throw a}}async refreshSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(e)):await this._refreshSession(e)}async _refreshSession(e){try{return await this._useSession(async a=>{var r;if(!e){const{data:u,error:f}=a;if(f)throw f;e=(r=u.session)!==null&&r!==void 0?r:void 0}if(!(e!=null&&e.refresh_token))throw new pt;const{data:o,error:c}=await this._callRefreshToken(e.refresh_token);return c?this._returnResult({data:{user:null,session:null},error:c}):o?this._returnResult({data:{user:o.user,session:o},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(a){if(Z(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async _getSessionFromURL(e,a){var r;try{if(!_t())throw new Nl("No browser detected.");if(e.error||e.error_description||e.error_code)throw new Nl(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"});switch(a){case"implicit":if(this.flowType==="pkce")throw new Ry("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new Nl("Not a valid implicit grant flow url.");break;default:}if(a==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code)throw new Ry("No code detected.");const{data:A,error:B}=await this._exchangeCodeForSession(e.code);if(B)throw B;const G=new URL(window.location.href);return G.searchParams.delete("code"),window.history.replaceState(window.history.state,"",G.toString()),{data:{session:A.session,redirectType:(r=A.redirectType)!==null&&r!==void 0?r:null},error:null}}const{provider_token:o,provider_refresh_token:c,access_token:u,refresh_token:f,expires_in:m,expires_at:g,token_type:y}=e;if(!u||!m||!f||!y)throw new Nl("No session defined in URL");const v=Math.round(Date.now()/1e3),x=parseInt(m);let w=v+x;g&&(w=parseInt(g));const S=w-v;S*1e3<=li&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${S}s, should have been closer to ${x}s`);const T=w-x;v-T>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",T,w,v):v-T<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",T,w,v);const{data:E,error:k}=await this._getUser(u);if(k)throw k;const O={provider_token:o,provider_refresh_token:c,access_token:u,expires_in:x,expires_at:w,refresh_token:f,token_type:y,user:E.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:O,redirectType:e.type},error:null})}catch(o){if(Z(o))return this._returnResult({data:{session:null,redirectType:null},error:o});throw o}}_isImplicitGrantCallback(e){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),e):!!(e.access_token||e.error||e.error_description||e.error_code)}async _isPKCECallback(e){const a=await gn(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&a)}async signOut(e={scope:"global"}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(e)):await this._signOut(e)}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async a=>{var r;const{data:o,error:c}=a;if(c&&!Al(c))return this._returnResult({error:c});const u=(r=o.session)===null||r===void 0?void 0:r.access_token;if(u){const{error:f}=await this.admin.signOut(u,e);if(f&&!(ek(f)&&(f.status===404||f.status===401||f.status===403)||Al(f)))return this._returnResult({error:f})}return e!=="others"&&(await this._removeSession(),await tt(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({error:null})})}onAuthStateChange(e){const a=uk(),r={id:a,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",a),this.stateChangeEmitters.delete(a)}};return this._debug("#onAuthStateChange()","registered callback with id",a),this.stateChangeEmitters.set(a,r),(async()=>(await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(a)}):await this._emitInitialSession(a)))(),{data:{subscription:r}}}async _emitInitialSession(e){return await this._useSession(async a=>{var r,o;try{const{data:{session:c},error:u}=a;if(u)throw u;await((r=this.stateChangeEmitters.get(e))===null||r===void 0?void 0:r.callback("INITIAL_SESSION",c)),this._debug("INITIAL_SESSION","callback id",e,"session",c)}catch(c){await((o=this.stateChangeEmitters.get(e))===null||o===void 0?void 0:o.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",c),Al(c)?console.warn(c):console.error(c)}})}async resetPasswordForEmail(e,a={}){let r=null,o=null;this.flowType==="pkce"&&([r,o]=await ca(this.storage,this.storageKey,!0));try{return await re(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:r,code_challenge_method:o,gotrue_meta_security:{captcha_token:a.captchaToken}},headers:this.headers,redirectTo:a.redirectTo})}catch(c){if(await tt(this.storage,`${this.storageKey}-code-verifier`),Z(c))return this._returnResult({data:null,error:c});throw c}}async getUserIdentities(){var e;try{const{data:a,error:r}=await this.getUser();if(r)throw r;return this._returnResult({data:{identities:(e=a.user.identities)!==null&&e!==void 0?e:[]},error:null})}catch(a){if(Z(a))return this._returnResult({data:null,error:a});throw a}}async linkIdentity(e){return"token"in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){var a;try{const{data:r,error:o}=await this._useSession(async c=>{var u,f,m,g,y;const{data:v,error:x}=c;if(x)throw x;const w=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(u=e.options)===null||u===void 0?void 0:u.redirectTo,scopes:(f=e.options)===null||f===void 0?void 0:f.scopes,queryParams:(m=e.options)===null||m===void 0?void 0:m.queryParams,skipBrowserRedirect:!0});return await re(this.fetch,"GET",w,{headers:this.headers,jwt:(y=(g=v.session)===null||g===void 0?void 0:g.access_token)!==null&&y!==void 0?y:void 0})});if(o)throw o;return _t()&&!(!((a=e.options)===null||a===void 0)&&a.skipBrowserRedirect)&&window.location.assign(r==null?void 0:r.url),this._returnResult({data:{provider:e.provider,url:r==null?void 0:r.url},error:null})}catch(r){if(Z(r))return this._returnResult({data:{provider:e.provider,url:null},error:r});throw r}}async linkIdentityIdToken(e){return await this._useSession(async a=>{var r;try{const{error:o,data:{session:c}}=a;if(o)throw o;const{options:u,provider:f,token:m,access_token:g,nonce:y}=e,v=await re(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(r=c==null?void 0:c.access_token)!==null&&r!==void 0?r:void 0,body:{provider:f,id_token:m,access_token:g,nonce:y,link_identity:!0,gotrue_meta_security:{captcha_token:u==null?void 0:u.captchaToken}},xform:un}),{data:x,error:w}=v;return w?this._returnResult({data:{user:null,session:null},error:w}):!x||!x.session||!x.user?this._returnResult({data:{user:null,session:null},error:new lr}):(x.session&&(await this._saveSession(x.session),await this._notifyAllSubscribers("USER_UPDATED",x.session)),this._returnResult({data:x,error:w}))}catch(o){if(await tt(this.storage,`${this.storageKey}-code-verifier`),Z(o))return this._returnResult({data:{user:null,session:null},error:o});throw o}})}async unlinkIdentity(e){try{return await this._useSession(async a=>{var r,o;const{data:c,error:u}=a;if(u)throw u;return await re(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(o=(r=c.session)===null||r===void 0?void 0:r.access_token)!==null&&o!==void 0?o:void 0})})}catch(a){if(Z(a))return this._returnResult({data:null,error:a});throw a}}async _refreshAccessToken(e){const a="#_refreshAccessToken()";this._debug(a,"begin");try{const r=Date.now();return await mk(async o=>(o>0&&await fk(200*Math.pow(2,o-1)),this._debug(a,"refreshing attempt",o),await re(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:un})),(o,c)=>{const u=200*Math.pow(2,o);return c&&Ny(c)&&Date.now()+u-r<li})}catch(r){if(this._debug(a,"error",r),Z(r))return this._returnResult({data:{session:null,user:null},error:r});throw r}finally{this._debug(a,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,a){const r=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:a.redirectTo,scopes:a.scopes,queryParams:a.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",a,"url",r),_t()&&!a.skipBrowserRedirect&&window.location.assign(r),{data:{provider:e,url:r},error:null}}async _recoverAndRefresh(){var e,a;const r="#_recoverAndRefresh()";this._debug(r,"begin");try{const o=await gn(this.storage,this.storageKey);if(o&&this.userStorage){let u=await gn(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!u&&(u={user:o.user},await fr(this.userStorage,this.storageKey+"-user",u)),o.user=(e=u==null?void 0:u.user)!==null&&e!==void 0?e:Zd()}else if(o&&!o.user&&!o.user){const u=await gn(this.storage,this.storageKey+"-user");u&&(u!=null&&u.user)?(o.user=u.user,await tt(this.storage,this.storageKey+"-user"),await fr(this.storage,this.storageKey,o)):o.user=Zd()}if(this._debug(r,"session from storage",o),!this._isValidSession(o)){this._debug(r,"session is not valid"),o!==null&&await this._removeSession();return}const c=((a=o.expires_at)!==null&&a!==void 0?a:1/0)*1e3-Date.now()<Qd;if(this._debug(r,`session has${c?"":" not"} expired with margin of ${Qd}s`),c){if(this.autoRefreshToken&&o.refresh_token){const{error:u}=await this._callRefreshToken(o.refresh_token);u&&(ik(u)?this._debug(r,"refresh discarded by commit guard",u):this._debug(r,"refresh failed",u))}}else if(o.user&&o.user.__isUserNotAvailableProxy===!0)try{const{data:u,error:f}=await this._getUser(o.access_token);!f&&(u!=null&&u.user)?(o.user=u.user,await this._saveSession(o),await this._notifyAllSubscribers("SIGNED_IN",o)):this._debug(r,"could not get user data, skipping SIGNED_IN notification")}catch(u){console.error("Error getting user data:",u),this._debug(r,"error getting user data, skipping SIGNED_IN notification",u)}else await this._notifyAllSubscribers("SIGNED_IN",o)}catch(o){this._debug(r,"error",o),console.error(o);return}finally{this._debug(r,"end")}}async _callRefreshToken(e){var a,r;if(!e)throw new pt;if(this.refreshingDeferred)return this.refreshingDeferred.promise;if(this.lastRefreshFailure&&this.lastRefreshFailure.refreshToken===e&&Date.now()<this.lastRefreshFailure.expiresAt)return this._debug("#_callRefreshToken()","returning cached failure (cooldown active)"),this.lastRefreshFailure.result;const o="#_callRefreshToken()";this._debug(o,"begin");try{this.refreshingDeferred=new Sc;const c=await gn(this.storage,this.storageKey),{data:u,error:f}=await this._refreshAccessToken(e);if(f)throw f;if(!u.session)throw new pt;const m=await gn(this.storage,this.storageKey);if(c!==null&&(m===null||m.refresh_token!==c.refresh_token)){this._debug(o,"commit guard: storage changed since refresh started, discarding rotated tokens",{startedWith:"present",nowHolds:m?"replaced":"cleared"});const x={data:null,error:new Oy};return this.refreshingDeferred.resolve(x),x}const y=this._sessionRemovalEpoch;if(await this._saveSession(u.session),this._sessionRemovalEpoch!==y){this._debug(o,"commit guard (post-save): _removeSession ran during _saveSession, undoing write"),await tt(this.storage,this.storageKey),this.userStorage&&await tt(this.userStorage,this.storageKey+"-user");const x={data:null,error:new Oy};return this.refreshingDeferred.resolve(x),x}await this._notifyAllSubscribers("TOKEN_REFRESHED",u.session);const v={data:u.session,error:null};return this.lastRefreshFailure=null,this.refreshingDeferred.resolve(v),v}catch(c){if(this._debug(o,"error",c),Z(c)){const u={data:null,error:c};if(!Ny(c)){const f=await gn(this.storage,this.storageKey);!!(f!=null&&f.expires_at&&f.expires_at*1e3>Date.now())?this._debug(o,"proactive refresh failed, access token still valid — preserving session"):await this._removeSession()}return this.lastRefreshFailure={refreshToken:e,result:u,expiresAt:Date.now()+K_},(a=this.refreshingDeferred)===null||a===void 0||a.resolve(u),u}throw(r=this.refreshingDeferred)===null||r===void 0||r.reject(c),c}finally{this.refreshingDeferred=null,this._debug(o,"end")}}async _notifyAllSubscribers(e,a,r=!0){const o=`#_notifyAllSubscribers(${e})`;this._debug(o,"begin",a,`broadcast = ${r}`);try{this.broadcastChannel&&r&&this.broadcastChannel.postMessage({event:e,session:a});const c=[],u=Array.from(this.stateChangeEmitters.values()).map(async f=>{try{await f.callback(e,a)}catch(m){c.push(m)}});if(await Promise.all(u),c.length>0){for(let f=0;f<c.length;f+=1)console.error(c[f]);throw c[0]}}finally{this._debug(o,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0,await tt(this.storage,`${this.storageKey}-code-verifier`);const a=Object.assign({},e),r=a.user&&a.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!r&&a.user&&await fr(this.userStorage,this.storageKey+"-user",{user:a.user});const o=Object.assign({},a);delete o.user;const c=Uy(o);await fr(this.storage,this.storageKey,c)}else{const o=Uy(a);await fr(this.storage,this.storageKey,o)}}async _removeSession(){this._sessionRemovalEpoch+=1,this._debug("#_removeSession()"),this.lastRefreshFailure=null,this.suppressGetSessionWarning=!1,await tt(this.storage,this.storageKey),await tt(this.storage,this.storageKey+"-code-verifier"),await tt(this.storage,this.storageKey+"-user"),this.userStorage&&await tt(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&_t()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",e)}catch(a){console.error("removing visibilitychange callback failed",a)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval(()=>this._autoRefreshTokenTick(),li);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e);const a=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=a,a&&typeof a=="object"&&typeof a.unref=="function"?a.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(a)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e);const a=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,a&&clearTimeout(a)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async dispose(){var e;this._removeVisibilityChangedCallback(),await this._stopAutoRefresh(),(e=this.broadcastChannel)===null||e===void 0||e.close(),this.broadcastChannel=null,this.stateChangeEmitters.clear()}async _autoRefreshTokenTick(){if(this._debug("#_autoRefreshTokenTick()","begin"),this.lock!=null){try{await this._acquireLock(0,async()=>{try{const e=Date.now();try{return await this._useSession(async a=>{const{data:{session:r}}=a;if(!r||!r.refresh_token||!r.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const o=Math.floor((r.expires_at*1e3-e)/li);this._debug("#_autoRefreshTokenTick()",`access token expires in ${o} ticks, a tick lasts ${li}ms, refresh threshold is ${Ns} ticks`),o<=Ns&&await this._callRefreshToken(r.refresh_token)})}catch(a){console.error("Auto refresh tick failed with error. This is likely a transient error.",a)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e instanceof Ok)this._debug("auto refresh token tick lock not available");else throw e}return}if(this.refreshingDeferred!==null){this._debug("#_autoRefreshTokenTick()","refresh already in flight, skipping");return}try{const e=Date.now();try{await this._useSession(async a=>{const{data:{session:r}}=a;if(!r||!r.refresh_token||!r.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const o=Math.floor((r.expires_at*1e3-e)/li);this._debug("#_autoRefreshTokenTick()",`access token expires in ${o} ticks, a tick lasts ${li}ms, refresh threshold is ${Ns} ticks`),o<=Ns&&await this._callRefreshToken(r.refresh_token)})}catch(a){console.error("Auto refresh tick failed with error. This is likely a transient error.",a)}}finally{this._debug("#_autoRefreshTokenTick()","end")}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!_t()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(e){this._debug("#visibilityChangedCallback","error",e)}},window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const a=`#_onVisibilityChanged(${e})`;if(this._debug(a,"visibilityState",document.visibilityState),document.visibilityState==="visible"){if(this.autoRefreshToken&&this._startAutoRefresh(),!e)if(await this.initializePromise,this.lock!=null)await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!=="visible"){this._debug(a,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()});else{if(document.visibilityState!=="visible"){this._debug(a,"visibilityState is no longer visible, skipping recovery");return}await this._recoverAndRefresh()}}else document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,a,r){const o=[`provider=${encodeURIComponent(a)}`];if(r!=null&&r.redirectTo&&o.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),r!=null&&r.scopes&&o.push(`scopes=${encodeURIComponent(r.scopes)}`),this.flowType==="pkce"){const[c,u]=await ca(this.storage,this.storageKey),f=new URLSearchParams({code_challenge:`${encodeURIComponent(c)}`,code_challenge_method:`${encodeURIComponent(u)}`});o.push(f.toString())}if(r!=null&&r.queryParams){const c=new URLSearchParams(r.queryParams);o.push(c.toString())}return r!=null&&r.skipBrowserRedirect&&o.push(`skip_http_redirect=${r.skipBrowserRedirect}`),`${e}?${o.join("&")}`}async _unenroll(e){try{return await this._useSession(async a=>{var r;const{data:o,error:c}=a;return c?this._returnResult({data:null,error:c}):await re(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(r=o==null?void 0:o.session)===null||r===void 0?void 0:r.access_token})})}catch(a){if(Z(a))return this._returnResult({data:null,error:a});throw a}}async _enroll(e){try{return await this._useSession(async a=>{var r,o;const{data:c,error:u}=a;if(u)return this._returnResult({data:null,error:u});const f=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:e.factorType==="totp"?{issuer:e.issuer}:{}),{data:m,error:g}=await re(this.fetch,"POST",`${this.url}/factors`,{body:f,headers:this.headers,jwt:(r=c==null?void 0:c.session)===null||r===void 0?void 0:r.access_token});return g?this._returnResult({data:null,error:g}):(e.factorType==="totp"&&m.type==="totp"&&(!((o=m==null?void 0:m.totp)===null||o===void 0)&&o.qr_code)&&(m.totp.qr_code=`data:image/svg+xml;utf-8,${m.totp.qr_code}`),this._returnResult({data:m,error:null}))})}catch(a){if(Z(a))return this._returnResult({data:null,error:a});throw a}}async _verify(e){const a=async()=>{try{return await this._useSession(async r=>{var o;const{data:c,error:u}=r;if(u)return this._returnResult({data:null,error:u});const f=Object.assign({challenge_id:e.challengeId},"webauthn"in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type==="create"?qy(e.webauthn.credential_response):Fy(e.webauthn.credential_response)})}:{code:e.code}),{data:m,error:g}=await re(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:f,headers:this.headers,jwt:(o=c==null?void 0:c.session)===null||o===void 0?void 0:o.access_token});return g?this._returnResult({data:null,error:g}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+m.expires_in},m)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",m),this._returnResult({data:m,error:g}))})}catch(r){if(Z(r))return this._returnResult({data:null,error:r});throw r}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,a):a()}async _challenge(e){const a=async()=>{try{return await this._useSession(async r=>{var o;const{data:c,error:u}=r;if(u)return this._returnResult({data:null,error:u});const f=await re(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:(o=c==null?void 0:c.session)===null||o===void 0?void 0:o.access_token});if(f.error)return f;const{data:m}=f;if(m.type!=="webauthn")return{data:m,error:null};switch(m.webauthn.type){case"create":return{data:Object.assign(Object.assign({},m),{webauthn:Object.assign(Object.assign({},m.webauthn),{credential_options:Object.assign(Object.assign({},m.webauthn.credential_options),{publicKey:$y(m.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},m),{webauthn:Object.assign(Object.assign({},m.webauthn),{credential_options:Object.assign(Object.assign({},m.webauthn.credential_options),{publicKey:Iy(m.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(r){if(Z(r))return this._returnResult({data:null,error:r});throw r}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,a):a()}async _challengeAndVerify(e){const{data:a,error:r}=await this._challenge({factorId:e.factorId});return r?this._returnResult({data:null,error:r}):await this._verify({factorId:e.factorId,challengeId:a.id,code:e.code})}async _listFactors(){var e;const{data:{user:a},error:r}=await this.getUser();if(r)return{data:null,error:r};const o={all:[],phone:[],totp:[],webauthn:[]};for(const c of(e=a==null?void 0:a.factors)!==null&&e!==void 0?e:[])o.all.push(c),c.status==="verified"&&o[c.factor_type].push(c);return{data:o,error:null}}async _getAuthenticatorAssuranceLevel(e){var a,r,o,c;if(e)try{const{payload:w}=Ol(e);let S=null;w.aal&&(S=w.aal);let T=S;const{data:{user:E},error:k}=await this.getUser(e);if(k)return this._returnResult({data:null,error:k});((r=(a=E==null?void 0:E.factors)===null||a===void 0?void 0:a.filter(B=>B.status==="verified"))!==null&&r!==void 0?r:[]).length>0&&(T="aal2");const A=w.amr||[];return{data:{currentLevel:S,nextLevel:T,currentAuthenticationMethods:A},error:null}}catch(w){if(Z(w))return this._returnResult({data:null,error:w});throw w}const{data:{session:u},error:f}=await this.getSession();if(f)return this._returnResult({data:null,error:f});if(!u)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:m}=Ol(u.access_token);let g=null;m.aal&&(g=m.aal);let y=g;((c=(o=u.user.factors)===null||o===void 0?void 0:o.filter(w=>w.status==="verified"))!==null&&c!==void 0?c:[]).length>0&&(y="aal2");const x=m.amr||[];return{data:{currentLevel:g,nextLevel:y,currentAuthenticationMethods:x},error:null}}async _getAuthorizationDetails(e){try{return await this._useSession(async a=>{const{data:{session:r},error:o}=a;return o?this._returnResult({data:null,error:o}):r?await re(this.fetch,"GET",`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:r.access_token,xform:c=>({data:c,error:null})}):this._returnResult({data:null,error:new pt})})}catch(a){if(Z(a))return this._returnResult({data:null,error:a});throw a}}async _approveAuthorization(e,a){try{return await this._useSession(async r=>{const{data:{session:o},error:c}=r;if(c)return this._returnResult({data:null,error:c});if(!o)return this._returnResult({data:null,error:new pt});const u=await re(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:o.access_token,body:{action:"approve"},xform:f=>({data:f,error:null})});return u.data&&u.data.redirect_url&&_t()&&!(a!=null&&a.skipBrowserRedirect)&&window.location.assign(u.data.redirect_url),u})}catch(r){if(Z(r))return this._returnResult({data:null,error:r});throw r}}async _denyAuthorization(e,a){try{return await this._useSession(async r=>{const{data:{session:o},error:c}=r;if(c)return this._returnResult({data:null,error:c});if(!o)return this._returnResult({data:null,error:new pt});const u=await re(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:o.access_token,body:{action:"deny"},xform:f=>({data:f,error:null})});return u.data&&u.data.redirect_url&&_t()&&!(a!=null&&a.skipBrowserRedirect)&&window.location.assign(u.data.redirect_url),u})}catch(r){if(Z(r))return this._returnResult({data:null,error:r});throw r}}async _listOAuthGrants(){try{return await this._useSession(async e=>{const{data:{session:a},error:r}=e;return r?this._returnResult({data:null,error:r}):a?await re(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:a.access_token,xform:o=>({data:o,error:null})}):this._returnResult({data:null,error:new pt})})}catch(e){if(Z(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async a=>{const{data:{session:r},error:o}=a;return o?this._returnResult({data:null,error:o}):r?(await re(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:r.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new pt})})}catch(a){if(Z(a))return this._returnResult({data:null,error:a});throw a}}async fetchJwk(e,a={keys:[]}){let r=a.keys.find(f=>f.kid===e);if(r)return r;const o=Date.now();if(r=this.jwks.keys.find(f=>f.kid===e),r&&this.jwks_cached_at+Q_>o)return r;const{data:c,error:u}=await re(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(u)throw u;return!c.keys||c.keys.length===0||(this.jwks=c,this.jwks_cached_at=o,r=c.keys.find(f=>f.kid===e),!r)?null:r}async getClaims(e,a={}){try{let r=e;if(!r){const{data:w,error:S}=await this.getSession();if(S||!w.session)return this._returnResult({data:null,error:S});r=w.session.access_token}const{header:o,payload:c,signature:u,raw:{header:f,payload:m}}=Ol(r);if(!(a!=null&&a.allowExpired))try{wk(c.exp)}catch(w){throw new Zl(w instanceof Error?w.message:"JWT validation failed")}const g=!o.alg||o.alg.startsWith("HS")||!o.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(o.kid,a!=null&&a.keys?{keys:a.keys}:a==null?void 0:a.jwks);if(!g){const{error:w}=await this.getUser(r);if(w)throw w;return{data:{claims:c,header:o,signature:u},error:null}}const y=Sk(o.alg),v=await crypto.subtle.importKey("jwk",g,y,!0,["verify"]);if(!await crypto.subtle.verify(y,v,u,lk(`${f}.${m}`)))throw new Zl("Invalid JWT signature");return{data:{claims:c,header:o,signature:u},error:null}}catch(r){if(Z(r))return this._returnResult({data:null,error:r});throw r}}async signInWithPasskey(e){var a,r,o;vn(this.experimental);try{if(!nc())return this._returnResult({data:null,error:new wn("Browser does not support WebAuthn",null)});const{data:c,error:u}=await this._startPasskeyAuthentication({options:{captchaToken:(a=e==null?void 0:e.options)===null||a===void 0?void 0:a.captchaToken}});if(u||!c)return this._returnResult({data:null,error:u});const f=Iy(c.options),m=(o=(r=e==null?void 0:e.options)===null||r===void 0?void 0:r.signal)!==null&&o!==void 0?o:zh.createNewAbortSignal(),{data:g,error:y}=await gx({publicKey:f,signal:m});if(y||!g)return this._returnResult({data:null,error:y??new wn("WebAuthn ceremony failed",null)});const v=Fy(g);return this._verifyPasskeyAuthentication({challengeId:c.challenge_id,credential:v})}catch(c){if(Z(c))return this._returnResult({data:null,error:c});throw c}}async registerPasskey(e){var a,r;vn(this.experimental);try{if(!nc())return this._returnResult({data:null,error:new wn("Browser does not support WebAuthn",null)});const{data:o,error:c}=await this._startPasskeyRegistration();if(c||!o)return this._returnResult({data:null,error:c});const u=$y(o.options),f=(r=(a=e==null?void 0:e.options)===null||a===void 0?void 0:a.signal)!==null&&r!==void 0?r:zh.createNewAbortSignal(),{data:m,error:g}=await px({publicKey:u,signal:f});if(g||!m)return this._returnResult({data:null,error:g??new wn("WebAuthn ceremony failed",null)});const y=qy(m);return this._verifyPasskeyRegistration({challengeId:o.challenge_id,credential:y})}catch(o){if(Z(o))return this._returnResult({data:null,error:o});throw o}}async _startPasskeyRegistration(){vn(this.experimental);try{return await this._useSession(async e=>{const{data:{session:a},error:r}=e;if(r)return this._returnResult({data:null,error:r});if(!a)return this._returnResult({data:null,error:new pt});const{data:o,error:c}=await re(this.fetch,"POST",`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:a.access_token,body:{}});return c?this._returnResult({data:null,error:c}):this._returnResult({data:o,error:null})})}catch(e){if(Z(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyRegistration(e){vn(this.experimental);try{return await this._useSession(async a=>{const{data:{session:r},error:o}=a;if(o)return this._returnResult({data:null,error:o});if(!r)return this._returnResult({data:null,error:new pt});const{data:c,error:u}=await re(this.fetch,"POST",`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:r.access_token,body:{challenge_id:e.challengeId,credential:e.credential}});return u?this._returnResult({data:null,error:u}):this._returnResult({data:c,error:null})})}catch(a){if(Z(a))return this._returnResult({data:null,error:a});throw a}}async _startPasskeyAuthentication(e){var a;vn(this.experimental);try{const{data:r,error:o}=await re(this.fetch,"POST",`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:(a=e==null?void 0:e.options)===null||a===void 0?void 0:a.captchaToken}}});return o?this._returnResult({data:null,error:o}):this._returnResult({data:r,error:null})}catch(r){if(Z(r))return this._returnResult({data:null,error:r});throw r}}async _verifyPasskeyAuthentication(e){vn(this.experimental);try{const{data:a,error:r}=await re(this.fetch,"POST",`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:e.challengeId,credential:e.credential},xform:un});return r?this._returnResult({data:null,error:r}):(a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",a.session)),this._returnResult({data:a,error:null}))}catch(a){if(Z(a))return this._returnResult({data:null,error:a});throw a}}async _listPasskeys(){vn(this.experimental);try{return await this._useSession(async e=>{const{data:{session:a},error:r}=e;if(r)return this._returnResult({data:null,error:r});if(!a)return this._returnResult({data:null,error:new pt});const{data:o,error:c}=await re(this.fetch,"GET",`${this.url}/passkeys`,{headers:this.headers,jwt:a.access_token,xform:u=>({data:u,error:null})});return c?this._returnResult({data:null,error:c}):this._returnResult({data:o,error:null})})}catch(e){if(Z(e))return this._returnResult({data:null,error:e});throw e}}async _updatePasskey(e){vn(this.experimental);try{return await this._useSession(async a=>{const{data:{session:r},error:o}=a;if(o)return this._returnResult({data:null,error:o});if(!r)return this._returnResult({data:null,error:new pt});const{data:c,error:u}=await re(this.fetch,"PATCH",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:r.access_token,body:{friendly_name:e.friendlyName}});return u?this._returnResult({data:null,error:u}):this._returnResult({data:c,error:null})})}catch(a){if(Z(a))return this._returnResult({data:null,error:a});throw a}}async _deletePasskey(e){vn(this.experimental);try{return await this._useSession(async a=>{const{data:{session:r},error:o}=a;if(o)return this._returnResult({data:null,error:o});if(!r)return this._returnResult({data:null,error:new pt});const{error:c}=await re(this.fetch,"DELETE",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:r.access_token,noResolveJson:!0});return c?this._returnResult({data:null,error:c}):this._returnResult({data:null,error:null})})}catch(a){if(Z(a))return this._returnResult({data:null,error:a});throw a}}}Ks.nextInstanceID={};const Gk=Ks,Kk="2.108.2";let Os="",ac;if(typeof Deno<"u"){var th;Os="deno",ac=(th=Deno.version)===null||th===void 0?void 0:th.deno}else if(typeof document<"u")Os="web";else if(typeof navigator<"u"&&navigator.product==="ReactNative")Os="react-native";else{var nh;Os="node",ac=typeof process<"u"?(nh=process.version)===null||nh===void 0?void 0:nh.replace(/^v/,""):void 0}const yx=[`runtime=${Os}`];ac&&yx.push(`runtime-version=${ac}`);const Yk={"X-Client-Info":`supabase-js/${Kk}; ${yx.join("; ")}`},Xk={headers:Yk},Wk={schema:"public"},Jk={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},Qk={},Zk={enabled:!1,respectSamplingDecision:!0};function eT(t,e,a,r){function o(c){return c instanceof a?c:new a(function(u){u(c)})}return new(a||(a=Promise))(function(c,u){function f(y){try{g(r.next(y))}catch(v){u(v)}}function m(y){try{g(r.throw(y))}catch(v){u(v)}}function g(y){y.done?c(y.value):o(y.value).then(f,m)}g((r=r.apply(t,[])).next())})}let ih=null;const tT="@opentelemetry/api";function nT(){return ih===null&&(ih=import(tT).catch(()=>null)),ih}function iT(){return eT(this,void 0,void 0,function*(){try{const t=yield nT();if(!t||!t.propagation||!t.context)return null;const e={};t.propagation.inject(t.context.active(),e);const a=e.traceparent;return a?{traceparent:a,tracestate:e.tracestate,baggage:e.baggage}:null}catch{return null}})}function aT(t){if(!t||typeof t!="string")return null;const e=t.split("-");if(e.length!==4)return null;const[a,r,o,c]=e;if(a.length!==2||r.length!==32||o.length!==16||c.length!==2)return null;const u=/^[0-9a-f]+$/i;return!u.test(a)||!u.test(r)||!u.test(o)||!u.test(c)||r==="00000000000000000000000000000000"||o==="0000000000000000"?null:{version:a,traceId:r,parentId:o,traceFlags:c,isSampled:(parseInt(c,16)&1)===1}}function rT(t,e){if(!t||!e||e.length===0)return!1;let a;if(t instanceof URL)a=t;else try{a=new URL(t)}catch{return!1}for(const r of e)try{if(typeof r=="string"){if(sT(a.hostname,r))return!0}else if(r instanceof RegExp){if(r.test(a.hostname))return!0}else if(typeof r=="function"&&r(a))return!0}catch{continue}return!1}function sT(t,e){if(e===t)return!0;if(e.startsWith("*.")){const a=e.slice(2);if(t.endsWith(a)&&(t===a||t.endsWith("."+a)))return!0}return!1}function oT(t){const e=[];try{const a=new URL(t);e.push(a.hostname)}catch{}return e.push("*.supabase.co","*.supabase.in"),e.push("localhost","127.0.0.1","[::1]"),e}function Ys(t){"@babel/helpers - typeof";return Ys=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ys(t)}function lT(t,e){if(Ys(t)!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var r=a.call(t,e);if(Ys(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function cT(t){var e=lT(t,"string");return Ys(e)=="symbol"?e:e+""}function uT(t,e,a){return(e=cT(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function Gy(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),a.push.apply(a,r)}return a}function Je(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?Gy(Object(a),!0).forEach(function(r){uT(t,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Gy(Object(a)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(a,r))})}return t}const dT=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),hT=()=>Headers,fT=(t,e,a,r,o)=>{const c=dT(r),u=hT(),f=(o==null?void 0:o.enabled)===!0,m=(o==null?void 0:o.respectSamplingDecision)!==!1,g=f?oT(e):null;return async(y,v)=>{var x;const w=(x=await a())!==null&&x!==void 0?x:t;let S=new u(v==null?void 0:v.headers);if(S.has("apikey")||S.set("apikey",t),S.has("Authorization")||S.set("Authorization",`Bearer ${w}`),g){const T=await mT(y,g,m);T&&(T.traceparent&&!S.has("traceparent")&&S.set("traceparent",T.traceparent),T.tracestate&&!S.has("tracestate")&&S.set("tracestate",T.tracestate),T.baggage&&!S.has("baggage")&&S.set("baggage",T.baggage))}return c(y,Je(Je({},v),{},{headers:S}))}};async function mT(t,e,a){if(!rT(typeof t=="string"||t instanceof URL?t:t.url,e))return null;const r=await iT();if(!r||!r.traceparent)return null;if(a){const o=aT(r.traceparent);if(o&&!o.isSampled)return null}return r}function Ky(t){return typeof t=="boolean"?{enabled:t}:t}function pT(t){return t.endsWith("/")?t:t+"/"}function gT(t,e){var a,r,o,c,u,f;const{db:m,auth:g,realtime:y,global:v}=t,{db:x,auth:w,realtime:S,global:T}=e,E=Ky(t.tracePropagation),k=Ky(e.tracePropagation),O={db:Je(Je({},x),m),auth:Je(Je({},w),g),realtime:Je(Je({},S),y),storage:{},global:Je(Je(Je({},T),v),{},{headers:Je(Je({},(a=T==null?void 0:T.headers)!==null&&a!==void 0?a:{}),(r=v==null?void 0:v.headers)!==null&&r!==void 0?r:{})}),tracePropagation:{enabled:(o=(c=E==null?void 0:E.enabled)!==null&&c!==void 0?c:k==null?void 0:k.enabled)!==null&&o!==void 0?o:!1,respectSamplingDecision:(u=(f=E==null?void 0:E.respectSamplingDecision)!==null&&f!==void 0?f:k==null?void 0:k.respectSamplingDecision)!==null&&u!==void 0?u:!0},accessToken:async()=>""};return t.accessToken?O.accessToken=t.accessToken:delete O.accessToken,O}function yT(t){const e=t==null?void 0:t.trim();if(!e)throw new Error("supabaseUrl is required.");if(!e.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(pT(e))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var vT=class extends Gk{constructor(t){super(t)}},bT=class{constructor(t,e,a){var r,o;this.supabaseUrl=t,this.supabaseKey=e;const c=yT(t);if(!e)throw new Error("supabaseKey is required.");this.realtimeUrl=new URL("realtime/v1",c),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",c),this.storageUrl=new URL("storage/v1",c),this.functionsUrl=new URL("functions/v1",c);const u=`sb-${c.hostname.split(".")[0]}-auth-token`,f={db:Wk,realtime:Qk,auth:Je(Je({},Jk),{},{storageKey:u}),global:Xk,tracePropagation:Zk},m=gT(a??{},f);if(this.settings=m,this.storageKey=(r=m.auth.storageKey)!==null&&r!==void 0?r:"",this.headers=(o=m.global.headers)!==null&&o!==void 0?o:{},m.accessToken)this.accessToken=m.accessToken,this.auth=new Proxy({},{get:(y,v)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(v)} is not possible`)}});else{var g;this.auth=this._initSupabaseAuthClient((g=m.auth)!==null&&g!==void 0?g:{},this.headers,m.global.fetch)}this.fetch=fT(e,t,this._getAccessToken.bind(this),m.global.fetch,m.tracePropagation),this.realtime=this._initRealtimeClient(Je({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},m.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(y=>this.realtime.setAuth(y)).catch(y=>console.warn("Failed to set initial Realtime auth token:",y)),this.rest=new Dj(new URL("rest/v1",c).href,{headers:this.headers,schema:m.db.schema,fetch:this.fetch,timeout:m.db.timeout,urlLengthLimit:m.db.urlLengthLimit}),this.storage=new G_(this.storageUrl.href,this.headers,this.fetch,a==null?void 0:a.storage),m.accessToken||this._listenForAuthEvents()}get functions(){return new _j(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(t){return this.rest.from(t)}schema(t){return this.rest.schema(t)}rpc(t,e={},a={head:!1,get:!1,count:void 0}){return this.rest.rpc(t,e,a)}channel(t,e={config:{}}){return this.realtime.channel(t,e)}getChannels(){return this.realtime.getChannels()}removeChannel(t){return this.realtime.removeChannel(t)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var t=this,e,a;if(t.accessToken)return await t.accessToken();const{data:r}=await t.auth.getSession();return(e=(a=r.session)===null||a===void 0?void 0:a.access_token)!==null&&e!==void 0?e:t.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:t,persistSession:e,detectSessionInUrl:a,storage:r,userStorage:o,storageKey:c,flowType:u,lock:f,debug:m,throwOnError:g,experimental:y,lockAcquireTimeout:v,skipAutoInitialize:x},w,S){const T={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new vT({url:this.authUrl.href,headers:Je(Je({},T),w),storageKey:c,autoRefreshToken:t,persistSession:e,detectSessionInUrl:a,storage:r,userStorage:o,flowType:u,lock:f,debug:m,throwOnError:g,experimental:y,fetch:S,lockAcquireTimeout:v,skipAutoInitialize:x,hasCustomAuthorizationHeader:Object.keys(this.headers).some(E=>E.toLowerCase()==="authorization")})}_initRealtimeClient(t){return new p_(this.realtimeUrl.href,Je(Je({},t),{},{params:Je(Je({},{apikey:this.supabaseKey}),t==null?void 0:t.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((t,e)=>{this._handleTokenChanged(t,"CLIENT",e==null?void 0:e.access_token)})}_handleTokenChanged(t,e,a){(t==="TOKEN_REFRESHED"||t==="SIGNED_IN")&&this.changedAccessToken!==a?(this.changedAccessToken=a,this.realtime.setAuth(a)):t==="SIGNED_OUT"&&(this.realtime.setAuth(),e=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}};const xT=(t,e,a)=>new bT(t,e,a);function wT(){if(typeof window<"u")return!1;const t=globalThis.process;if(!t)return!1;const e=t.version;if(e==null)return!1;const a=e.match(/^v(\d+)\./);return a?parseInt(a[1],10)<=18:!1}wT()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const ST="https://nestgoiyryhcmwtdeoou.supabase.co",jT="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lc3Rnb2l5cnloY213dGRlb291Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxNjI3MTUsImV4cCI6MjA5NzczODcxNX0.TJv9KqIl-2TZFsaEB3Lr0TzWKGR9GG1pE6abmr1FwYw",de=xT(ST,jT),Yy=t=>{let e;const a=new Set,r=(g,y)=>{const v=typeof g=="function"?g(e):g;if(!Object.is(v,e)){const x=e;e=y??(typeof v!="object"||v===null)?v:Object.assign({},e,v),a.forEach(w=>w(e,x))}},o=()=>e,f={setState:r,getState:o,getInitialState:()=>m,subscribe:g=>(a.add(g),()=>a.delete(g))},m=e=t(r,o,f);return f},_T=(t=>t?Yy(t):Yy),kT=t=>t;function TT(t,e=kT){const a=As.useSyncExternalStore(t.subscribe,As.useCallback(()=>e(t.getState()),[t,e]),As.useCallback(()=>e(t.getInitialState()),[t,e]));return As.useDebugValue(a),a}const Xy=t=>{const e=_T(t),a=r=>TT(e,r);return Object.assign(a,e),a},Tr=(t=>t?Xy(t):Xy),Tn=Tr((t,e)=>({user:null,session:null,profile:null,isLoading:!0,error:null,initialize:async()=>{try{const{data:{session:a},error:r}=await de.auth.getSession();if(r)throw r;if(a){const{data:o}=await de.from("profiles").select("*").eq("id",a.user.id).single();t({user:a.user,session:a,profile:o||null,isLoading:!1})}else t({user:null,session:null,profile:null,isLoading:!1});de.auth.onAuthStateChange(async(o,c)=>{if(c){const{data:u}=await de.from("profiles").select("*").eq("id",c.user.id).single();t({user:c.user,session:c,profile:u||null})}else t({user:null,session:null,profile:null})})}catch(a){t({isLoading:!1,error:a.message})}},signIn:async(a,r)=>{const{data:o,error:c}=await de.auth.signInWithPassword({email:a,password:r});if(c)throw c;return o},signUp:async(a,r,o={})=>{const{data:c,error:u}=await de.auth.signUp({email:a,password:r,options:{data:o}});if(u)throw u;return c},signOut:async()=>{const{error:a}=await de.auth.signOut();if(a)throw a;t({user:null,session:null,profile:null})},updateProfile:async a=>{const{user:r}=e();if(!r)throw new Error("Not authenticated");const{data:o,error:c}=await de.from("profiles").update(a).eq("id",r.id).select().single();if(c)throw c;return t({profile:o}),o}}));function ET(){const t=ui(),{signIn:e,signUp:a}=Tn(),[r,o]=_.useState(!1),[c,u]=_.useState(""),[f,m]=_.useState(""),[g,y]=_.useState(""),[v,x]=_.useState(!1),[w,S]=_.useState(null);_.useEffect(()=>{document.title=r?"Sign Up | FrameX":"Log In | FrameX"},[r]);const T=async k=>{k.preventDefault(),x(!0),S(null);try{r?(await a(c,f,{username:g||c.split("@")[0]}),alert("Check your email for the confirmation link!"),o(!1)):(await e(c,f),t("/home"))}catch(O){S(O.message)}finally{x(!1)}},E=async k=>{try{await de.auth.signInWithOAuth({provider:k})}catch(O){S(O.message)}};return d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"aurora-bg"}),d.jsx(xf,{}),d.jsx("section",{className:"auth-section",children:d.jsxs("div",{className:"auth-glass",children:[d.jsxs("div",{className:"auth-header",children:[d.jsx("span",{className:"section-label",children:r?"Get Started":"Welcome Back"}),d.jsx("h1",{children:r?"Sign Up":"Log In"}),d.jsx("p",{children:r?"Create your FrameX account":"Sign in to continue to FrameX"})]}),w&&d.jsx("div",{className:"auth-error",children:w}),d.jsxs("form",{className:"auth-form",onSubmit:T,children:[r&&d.jsxs("div",{className:"form-group",children:[d.jsxs("label",{htmlFor:"username",children:[d.jsx("i",{className:"fas fa-user"})," Username"]}),d.jsx("input",{id:"username",type:"text",placeholder:"yourname",value:g,onChange:k=>y(k.target.value)})]}),d.jsxs("div",{className:"form-group",children:[d.jsxs("label",{htmlFor:"email",children:[d.jsx("i",{className:"fas fa-envelope"})," Email"]}),d.jsx("input",{id:"email",type:"email",placeholder:"you@example.com",value:c,onChange:k=>u(k.target.value),required:!0})]}),d.jsxs("div",{className:"form-group",children:[d.jsxs("label",{htmlFor:"password",children:[d.jsx("i",{className:"fas fa-lock"})," Password"]}),d.jsx("input",{id:"password",type:"password",placeholder:r?"Create a password":"Enter your password",value:f,onChange:k=>m(k.target.value),required:!0,minLength:6})]}),d.jsx("button",{type:"submit",className:"btn-primary auth-submit",disabled:v,children:v?d.jsxs("span",{children:[d.jsx("i",{className:"fas fa-spinner fa-spin"})," ",r?"Creating account...":"Signing in..."]}):d.jsxs("span",{children:[r?"Create Account":"Sign In"," ",d.jsx("i",{className:"fas fa-arrow-right"})]})})]}),d.jsx("div",{className:"auth-divider",children:d.jsx("span",{children:"or continue with"})}),d.jsxs("div",{className:"social-auth",children:[d.jsxs("button",{className:"social-auth-btn",onClick:()=>E("google"),children:[d.jsx("i",{className:"fab fa-google"})," Google"]}),d.jsxs("button",{className:"social-auth-btn",onClick:()=>E("apple"),children:[d.jsx("i",{className:"fab fa-apple"})," Apple"]}),d.jsxs("button",{className:"social-auth-btn",onClick:()=>E("github"),children:[d.jsx("i",{className:"fab fa-github"})," GitHub"]})]}),d.jsx("p",{className:"auth-footer-text",children:r?d.jsxs(d.Fragment,{children:["Already have an account? ",d.jsx("a",{href:"#",onClick:k=>{k.preventDefault(),o(!1),S(null)},children:"Log In"})]}):d.jsxs(d.Fragment,{children:["Don't have an account? ",d.jsx("a",{href:"#",onClick:k=>{k.preventDefault(),o(!0),S(null)},children:"Sign Up"})]})})]})}),d.jsx(wf,{}),d.jsx("style",{children:`
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
      `})]})}const nt={menu:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),d.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),d.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),search:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"11",cy:"11",r:"8"}),d.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),bell:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),d.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),plus:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),d.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),home:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M3 12l9-9 9 9"}),d.jsx("path",{d:"M5 10v9a1 1 0 001 1h3v-5h6v5h3a1 1 0 001-1v-9"})]}),chat:d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})}),communities:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),d.jsx("circle",{cx:"9",cy:"7",r:"4"}),d.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),d.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),explore:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"12",cy:"12",r:"10"}),d.jsx("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"})]}),notification:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"}),d.jsx("polyline",{points:"13 2 13 9 20 9"})]}),settings:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"12",cy:"12",r:"3"}),d.jsx("path",{d:"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"})]}),logout:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"}),d.jsx("polyline",{points:"16 17 21 12 16 7"}),d.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),close:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),d.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),attachment:d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"})}),emoji:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"12",cy:"12",r:"10"}),d.jsx("path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}),d.jsx("line",{x1:"9",y1:"9",x2:"9.01",y2:"9"}),d.jsx("line",{x1:"15",y1:"9",x2:"15.01",y2:"9"})]}),mic:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z"}),d.jsx("path",{d:"M19 10v2a7 7 0 01-14 0v-2"}),d.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"22"})]}),send:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),d.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]}),checkAll:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("polyline",{points:"17 6 7 16 2 11"}),d.jsx("polyline",{points:"22 6 12 16 9 13"})]}),reply:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("polyline",{points:"9 17 4 12 9 7"}),d.jsx("path",{d:"M20 18v-2a4 4 0 00-4-4H4"})]}),logo:"F"},ur=[{id:1,name:"Your Story",avatar:"",online:!0,unread:!1,isOwn:!0,stories:[{id:101,type:"gradient",gradient:"linear-gradient(135deg, #C6FF00, #00E5FF)",duration:5e3}]},{id:2,name:"Luna",avatar:"",online:!0,unread:!0,stories:[{id:201,type:"gradient",gradient:"linear-gradient(135deg, #f093fb, #f5576c)",duration:5e3},{id:202,type:"gradient",gradient:"linear-gradient(135deg, #4facfe, #00f2fe)",duration:4e3}]},{id:3,name:"Marcus",avatar:"",online:!0,unread:!0,stories:[{id:301,type:"gradient",gradient:"linear-gradient(135deg, #a18cd1, #fbc2eb)",duration:5e3}]},{id:4,name:"Sofia",avatar:"",online:!1,unread:!1,stories:[{id:401,type:"gradient",gradient:"linear-gradient(135deg, #fccb90, #d57eeb)",duration:4e3}]},{id:5,name:"Kai",avatar:"",online:!0,unread:!0,stories:[{id:501,type:"gradient",gradient:"linear-gradient(135deg, #667eea, #764ba2)",duration:5e3}]},{id:6,name:"Zara",avatar:"",online:!1,unread:!1,stories:[{id:601,type:"gradient",gradient:"linear-gradient(135deg, #89f7fe, #66a6ff)",duration:4e3}]},{id:7,name:"Jules",avatar:"",online:!0,unread:!0,stories:[{id:701,type:"gradient",gradient:"linear-gradient(135deg, #f43b47, #453a94)",duration:5e3}]}];function CT({stories:t,userIndex:e,storyIndex:a,onClose:r,onNext:o,onPrev:c}){const u=t[e];if(!u||!u.stories[a])return null;const f=u.stories[a];(a+1)/u.stories.length*100;const m=g=>(g==null?void 0:g.split(" ").map(y=>y[0]).join("").toUpperCase().slice(0,2))||"?";return d.jsx("div",{className:"story-viewer-overlay",onClick:r,children:d.jsxs("div",{className:"story-viewer",onClick:g=>g.stopPropagation(),children:[d.jsxs("div",{className:"story-viewer-header",children:[d.jsx("div",{className:"story-viewer-progress",children:u.stories.map((g,y)=>d.jsx("div",{className:`story-progress-bar ${y<=a?"active":""} ${y===a?"animating":""}`},y))}),d.jsxs("div",{className:"story-viewer-user",children:[d.jsx("div",{className:"story-viewer-avatar",style:{background:u.gradient||"rgba(255,255,255,0.1)"},children:u.avatar?d.jsx("img",{src:u.avatar,alt:""}):d.jsx("span",{children:m(u.name)})}),d.jsx("span",{className:"story-viewer-name",children:u.name}),d.jsx("span",{className:"story-viewer-time",children:"Just now"})]}),d.jsx("button",{className:"story-viewer-close",onClick:r,children:nt.close})]}),d.jsx("div",{className:"story-viewer-content",style:{background:f.gradient||"#1a1a2e"},children:d.jsxs("div",{className:"story-viewer-text",children:[u.name,"'s Story"]})}),d.jsxs("div",{className:"story-viewer-tap-areas",children:[d.jsx("div",{className:"story-tap-left",onClick:g=>{g.stopPropagation(),c()}}),d.jsx("div",{className:"story-tap-right",onClick:g=>{g.stopPropagation(),o()}})]})]})})}function AT({users:t}){if(!t||t.length===0)return null;const e=t.length===1?`${t[0]} is typing...`:`${t.length} people are typing...`;return d.jsxs("div",{className:"typing-indicator",children:[d.jsxs("div",{className:"typing-dots",children:[d.jsx("span",{className:"typing-dot"}),d.jsx("span",{className:"typing-dot"}),d.jsx("span",{className:"typing-dot"})]}),d.jsx("span",{className:"typing-label",children:e})]})}function RT({date:t}){const e=new Date,a=new Date(t),r=e.toDateString()===a.toDateString(),o=new Date(e);o.setDate(o.getDate()-1);const c=o.toDateString()===a.toDateString();let u=r?"Today":c?"Yesterday":a.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"});return d.jsx("div",{className:"date-divider",children:d.jsx("span",{children:u})})}const Wy=`
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
`;function NT(){var dt,qe;const t=ui(),[e,a]=_.useState(null),[r,o]=_.useState(!0),[c,u]=_.useState(null),[f,m]=_.useState(""),[g,y]=_.useState([]),[v,x]=_.useState([]),[w,S]=_.useState(!1),[T,E]=_.useState(!1),[k,O]=_.useState(0),[A,B]=_.useState(0),[G,W]=_.useState([]),[q,X]=_.useState(!1),[M,Y]=_.useState([]),[K,oe]=_.useState(!1),je=_.useRef(null),Ce=_.useRef(null);_.useEffect(()=>{document.title="Chat — FrameX",(async()=>{try{const{data:{session:le}}=await de.auth.getSession();if(!le){t("/login");return}a(le.user)}catch{console.warn("Auth check failed, running in offline mode"),a({id:"offline",email:"guest@framex.app"})}o(!1)})()},[t]),_.useEffect(()=>{if(!e||e.id==="offline"){x([{id:"general",name:"general",display_name:"# general"},{id:"random",name:"random",display_name:"# random"}]),u({id:"general",name:"general",display_name:"# general"});return}(async()=>{try{const{data:le}=await de.from("channels").select("*").order("name");le&&(x(le),!c&&le.length>0&&u(le[0]))}catch(le){console.warn("Failed to fetch channels:",le),x([{id:"general",name:"general",display_name:"# general"}]),u({id:"general",name:"general",display_name:"# general"})}})()},[e]),_.useEffect(()=>{if(!c)return;(async()=>{try{if((e==null?void 0:e.id)==="offline"){y([{id:"1",content:"Welcome to FrameX Chat! 🎉",user_id:"system",created_at:new Date().toISOString(),profiles:{display_name:"FrameX",username:"framex"}},{id:"2",content:"Select a story to view it. This is a demo environment.",user_id:"system",created_at:new Date(Date.now()-6e4).toISOString(),profiles:{display_name:"FrameX",username:"framex"}}]);return}const{data:le}=await de.from("messages").select("*, profiles(*)").eq("channel_id",c.id).order("created_at",{ascending:!0}).limit(100);le&&y(le)}catch{console.warn("Failed to load messages")}})()},[c,e]),_.useEffect(()=>{if(!c||(e==null?void 0:e.id)==="offline")return;let J;return(async()=>{try{J=de.channel(`messages:${c.id}`).on("postgres_changes",{event:"INSERT",schema:"public",table:"messages",filter:`channel_id=eq.${c.id}`},Fe=>{const ht=Fe.new;ht.user_id!==(e==null?void 0:e.id)&&de.from("profiles").select("*").eq("id",ht.user_id).single().then(({data:Ye})=>{y(Jt=>[...Jt,{...ht,profiles:Ye}])}).catch(()=>{y(Ye=>[...Ye,ht])})}).subscribe()}catch{console.warn("Realtime subscription failed")}})(),()=>{J&&de.removeChannel(J)}},[c,e]),_.useEffect(()=>{var J;(J=je.current)==null||J.scrollIntoView({behavior:"smooth"})},[g]),_.useEffect(()=>{const J=le=>{le.key==="Escape"&&S(!1)};return window.addEventListener("keydown",J),()=>window.removeEventListener("keydown",J)},[]),_.useEffect(()=>(w?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[w]),_.useEffect(()=>{if(!T)return;const J=ur[k];if(!J)return;const le=J.stories[A];if(!le)return;const Fe=setTimeout(()=>{xe()},le.duration||5e3);return()=>clearTimeout(Fe)},[T,k,A]);const ge=_.useCallback(async()=>{if(!(!e||e.id==="offline")){oe(!0);try{const{data:J}=await de.from("follows").select("follower_id").eq("following_id",e.id),{data:le}=await de.from("follows").select("following_id").eq("follower_id",e.id),Fe=(J||[]).map(En=>En.follower_id),ht=(le||[]).map(En=>En.following_id);if(Fe.length===0){Y([]),oe(!1);return}const{data:Ye}=await de.from("profiles").select("id, username, display_name, avatar_url, bio, is_verified").in("id",Fe),Jt=(Ye||[]).map(En=>({...En,isFriend:ht.includes(En.id),isFollower:!0}));Y(Jt)}catch(J){console.warn("Failed to fetch panel users:",J),Y([])}oe(!1)}},[e]);_.useEffect(()=>{q&&ge()},[q,ge]),_.useEffect(()=>{if(!e||e.id==="offline")return;let J;try{J=de.channel("follows-changes").on("postgres_changes",{event:"*",schema:"public",table:"follows"},()=>{q&&ge()}).subscribe()}catch{console.warn("Realtime follows subscription failed")}return()=>{J&&de.removeChannel(J)}},[e,q,ge]);const V=_.useCallback(async J=>{if(J==null||J.preventDefault(),!f.trim()||!c)return;const le=f.trim();if(m(""),(e==null?void 0:e.id)==="offline"){y(Fe=>[...Fe,{id:`msg-${Date.now()}`,content:le,user_id:"offline",created_at:new Date().toISOString(),profiles:{display_name:"You",username:"you"}}]);return}try{await de.from("messages").insert({channel_id:c.id,user_id:e.id,content:le})}catch{console.warn("Failed to send message")}},[f,c,e]),Q=_.useCallback(async()=>{try{await de.auth.signOut()}catch{}t("/login")},[t]),te=_.useCallback(J=>{O(J),B(0),E(!0)},[]),pe=_.useCallback(()=>{E(!1)},[]),xe=_.useCallback(()=>{const J=ur[k];J&&(A<J.stories.length-1?B(le=>le+1):k<ur.length-1?(O(le=>le+1),B(0)):E(!1))},[k,A]),R=_.useCallback(()=>{var J;A>0?B(le=>le-1):k>0&&(O(le=>le-1),B(((J=ur[k-1])==null?void 0:J.stories.length)-1||0))},[k,A]),I=J=>J&&J.split(" ").map(le=>le[0]).join("").toUpperCase().slice(0,2)||"?",ee=J=>{const le=new Date(J),ht=new Date-le,Ye=Math.floor(ht/6e4),Jt=Math.floor(ht/36e5);return Ye<1?"Now":Ye<60?`${Ye}m`:Jt<24?le.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):le.toLocaleDateString([],{month:"short",day:"numeric"})},ie=g.reduce((J,le,Fe)=>{const ht=new Date(le.created_at).toDateString(),Ye=Fe>0?new Date(g[Fe-1].created_at).toDateString():null;return ht!==Ye&&J.push({type:"date",date:le.created_at}),J.push({type:"message",msg:le,isOwn:le.user_id===(e==null?void 0:e.id)}),J},[]);if(r)return d.jsxs("div",{className:"chat-page",children:[d.jsx("style",{children:Wy}),d.jsxs("div",{className:"chat-loading",children:[d.jsx("div",{className:"loading-spinner"}),d.jsx("span",{children:"Loading chat..."})]})]});const fe=(c==null?void 0:c.display_name)||(c==null?void 0:c.name)||"Select a channel",be=((dt=e==null?void 0:e.user_metadata)==null?void 0:dt.full_name)||(e==null?void 0:e.email)||"User",Ae=I(be);return d.jsxs("div",{className:"chat-page",children:[d.jsx("style",{children:Wy}),d.jsxs("header",{className:"chat-header",children:[d.jsxs("div",{className:"chat-header-left",children:[d.jsx("button",{className:"hamburger-btn",onClick:()=>S(!0),"aria-label":"Open menu",children:nt.menu}),d.jsx("button",{className:"header-logo",onClick:()=>t("/"),children:nt.logo})]}),d.jsxs("div",{className:"chat-header-center",onClick:()=>{((c==null?void 0:c.name)==="general"||(c==null?void 0:c.display_name)==="# general")&&X(J=>!J)},style:{cursor:(c==null?void 0:c.name)==="general"?"pointer":"default"},children:[d.jsx("h2",{children:fe}),(c==null?void 0:c.name)==="general"&&d.jsx("svg",{className:"channel-dropdown-arrow",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"14",height:"14",children:d.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),d.jsxs("div",{className:"chat-header-right",children:[d.jsx("button",{className:"header-btn","aria-label":"Search",children:nt.search}),d.jsxs("button",{className:"header-btn","aria-label":"Notifications",children:[nt.bell,d.jsx("span",{className:"notification-badge"})]}),d.jsx("button",{className:"header-btn chat-new-btn","aria-label":"New chat",children:nt.plus})]})]}),q&&d.jsx("div",{className:"user-panel-overlay",onClick:()=>X(!1)}),d.jsx("div",{className:`user-panel ${q?"user-panel-open":""}`,children:d.jsxs("div",{className:"user-panel-inner",children:[d.jsxs("div",{className:"user-panel-header",children:[d.jsx("h3",{children:"Channel Members"}),d.jsx("button",{className:"user-panel-close-btn",onClick:()=>X(!1),"aria-label":"Close panel",children:nt.close})]}),d.jsx("div",{className:"user-panel-body",children:K?d.jsx("div",{className:"user-panel-loading",children:d.jsx("div",{className:"user-panel-spinner"})}):M.length===0?d.jsxs("div",{className:"user-panel-empty",children:[d.jsxs("svg",{className:"user-panel-empty-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),d.jsx("circle",{cx:"9",cy:"7",r:"4"}),d.jsx("line",{x1:"22",y1:"6",x2:"22",y2:"12"}),d.jsx("line",{x1:"19",y1:"9",x2:"25",y2:"9"})]}),d.jsx("p",{children:"You are alone"}),d.jsx("span",{children:"Follow others to see them here"})]}):d.jsx("div",{className:"user-panel-list",children:M.map(J=>d.jsxs("div",{className:"user-panel-item",onClick:()=>{X(!1)},children:[d.jsx("div",{className:"user-panel-avatar",children:J.avatar_url?d.jsx("img",{src:J.avatar_url,alt:"",loading:"lazy"}):d.jsx("span",{className:"user-panel-avatar-fallback",children:(J.display_name||J.username||"?")[0].toUpperCase()})}),d.jsxs("div",{className:"user-panel-info",children:[d.jsxs("div",{className:"user-panel-name-row",children:[d.jsx("span",{className:"user-panel-name",children:J.display_name||J.username||"Unknown"}),J.is_verified&&d.jsx("svg",{className:"user-panel-verified",viewBox:"0 0 24 24",fill:"currentColor",width:"14",height:"14",children:d.jsx("path",{d:"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"})})]}),d.jsxs("div",{className:"user-panel-handle",children:["@",J.username]})]}),J.isFriend&&d.jsx("span",{className:"user-panel-badge",children:"Friend"})]},J.id))})})]})}),d.jsx("div",{className:`sidebar-overlay ${w?"open":""}`,onClick:()=>S(!1)}),d.jsxs("aside",{className:`chat-sidebar ${w?"open":""}`,children:[d.jsxs("div",{className:"sidebar-profile",children:[d.jsxs("div",{className:"sidebar-avatar",children:[(qe=e==null?void 0:e.user_metadata)!=null&&qe.avatar_url?d.jsx("img",{src:e.user_metadata.avatar_url,alt:""}):Ae,d.jsx("span",{className:"status-dot"})]}),d.jsxs("div",{className:"sidebar-user-info",children:[d.jsx("div",{className:"sidebar-username",children:be}),d.jsx("div",{className:"sidebar-status",children:"● Online"})]})]}),d.jsxs("nav",{className:"sidebar-nav",children:[d.jsx("div",{className:"sidebar-section-label",children:"Menu"}),d.jsxs("button",{className:"sidebar-nav-item active",onClick:()=>{S(!1),t("/chat")},children:[nt.chat,d.jsx("span",{className:"sidebar-nav-label",children:"Chats"})]}),d.jsxs("button",{className:"sidebar-nav-item",onClick:()=>{S(!1),t("/home")},children:[nt.home,d.jsx("span",{className:"sidebar-nav-label",children:"Home"})]}),d.jsxs("button",{className:"sidebar-nav-item",onClick:()=>{S(!1),t("/communities")},children:[nt.communities,d.jsx("span",{className:"sidebar-nav-label",children:"Communities"})]}),d.jsxs("button",{className:"sidebar-nav-item",onClick:()=>{S(!1),t("/explore")},children:[nt.explore,d.jsx("span",{className:"sidebar-nav-label",children:"Explore"})]}),d.jsx("div",{className:"sidebar-section-label",children:"Preferences"}),d.jsxs("button",{className:"sidebar-nav-item",onClick:()=>{S(!1),t("/notifications")},children:[nt.notification,d.jsx("span",{className:"sidebar-nav-label",children:"Notifications"})]}),d.jsxs("button",{className:"sidebar-nav-item",onClick:()=>{S(!1),t("/settings")},children:[nt.settings,d.jsx("span",{className:"sidebar-nav-label",children:"Settings"})]})]}),d.jsxs("div",{className:"sidebar-bottom",children:[d.jsxs("button",{className:"sidebar-logout",onClick:Q,children:[nt.logout,d.jsx("span",{children:"Log Out"})]}),d.jsx("div",{className:"sidebar-version",children:"FrameX v1.0.0"})]})]}),d.jsx("main",{className:"chat-main",children:c?g.length===0?d.jsx("div",{className:"messages-container",children:d.jsxs("div",{className:"empty-state",children:[d.jsx("div",{className:"empty-state-icon",children:nt.chat}),d.jsx("h3",{children:"No messages yet"}),d.jsx("p",{children:"Start the conversation. Send a message to begin chatting."})]})}):d.jsxs("div",{className:"messages-container",children:[ie.map((J,le)=>{var Ye,Jt;if(J.type==="date")return d.jsx(RT,{date:J.date},`date-${le}`);const{msg:Fe,isOwn:ht}=J;return d.jsxs("div",{className:`chat-msg-wrapper ${ht?"outgoing":"incoming"}`,children:[d.jsxs("div",{className:"chat-msg-bubble",children:[!ht&&d.jsx("div",{style:{fontSize:12,fontWeight:600,color:"var(--chat-accent)",marginBottom:2},children:((Ye=Fe.profiles)==null?void 0:Ye.display_name)||((Jt=Fe.profiles)==null?void 0:Jt.username)||"Unknown"}),d.jsx("div",{children:Fe.content})]}),d.jsxs("div",{className:"chat-msg-meta",children:[d.jsx("span",{className:"chat-msg-time",children:ee(Fe.created_at)}),ht&&d.jsx("span",{className:"chat-msg-receipt",children:nt.checkAll})]}),d.jsx("div",{style:{display:"flex",gap:6,alignItems:"center"},children:d.jsxs("button",{className:"chat-msg-reply",children:[nt.reply," Reply"]})}),d.jsxs("div",{className:"chat-msg-reactions",children:[d.jsx("span",{className:"msg-reaction",children:"❤️"}),d.jsx("span",{className:"msg-reaction",children:"🔥"}),d.jsx("span",{className:"msg-reaction",children:"👍"})]})]},Fe.id)}),G.length>0&&d.jsx(AT,{users:G}),d.jsx("div",{ref:je})]}):d.jsx("div",{className:"messages-container",children:d.jsxs("div",{className:"channel-selector",children:[d.jsx("h3",{children:"Channels"}),v.map(J=>d.jsxs("button",{className:"channel-item",onClick:()=>u(J),children:[d.jsx("div",{className:"channel-avatar",children:"#"}),d.jsxs("div",{className:"channel-info",children:[d.jsx("div",{className:"channel-name",children:J.display_name||`# ${J.name}`}),d.jsx("div",{className:"channel-preview",children:"Tap to view messages"})]}),d.jsx("div",{className:"channel-meta"})]},J.id))]})})}),d.jsx("div",{className:"chat-composer-wrapper",children:d.jsxs("form",{className:"chat-composer",onSubmit:V,children:[d.jsx("button",{type:"button",className:"composer-btn","aria-label":"Attach file",children:nt.attachment}),d.jsx("input",{ref:Ce,className:"composer-input",type:"text",placeholder:c?`Message ${c.display_name||c.name||"channel"}...`:"Select a channel to start chatting",value:f,onChange:J=>m(J.target.value),disabled:!c,"aria-label":"Message input"}),d.jsx("button",{type:"button",className:"composer-btn","aria-label":"Add emoji",children:nt.emoji}),d.jsx("button",{type:"button",className:"composer-btn","aria-label":"Voice message",children:nt.mic}),d.jsx("button",{type:"submit",className:"composer-btn send-btn",disabled:!f.trim()||!c,"aria-label":"Send message",children:nt.send})]})}),d.jsx("div",{className:"stories-rail-wrapper",children:d.jsx("div",{className:"stories-rail",children:ur.map((J,le)=>d.jsxs("div",{className:"story-avatar-wrapper",style:{"--story-index":le},onClick:()=>te(le),children:[d.jsx("div",{className:`story-avatar-ring ${J.unread?"unread":"seen"}`,children:d.jsxs("div",{className:"story-avatar-inner",children:[J.avatar?d.jsx("img",{src:J.avatar,alt:""}):I(J.name),J.online&&d.jsx("span",{className:"story-online-dot"})]})}),d.jsx("span",{className:"story-avatar-name",children:J.name})]},J.id))})}),T&&d.jsx(CT,{stories:ur,userIndex:k,storyIndex:A,onClose:pe,onNext:xe,onPrev:R})]})}const _f=_.createContext({});function kf(t){const e=_.useRef(null);return e.current===null&&(e.current=t()),e.current}const OT=typeof window<"u",vx=OT?_.useLayoutEffect:_.useEffect,jc=_.createContext(null);function Tf(t,e){t.indexOf(e)===-1&&t.push(e)}function rc(t,e){const a=t.indexOf(e);a>-1&&t.splice(a,1)}const Un=(t,e,a)=>a>e?e:a<t?t:a;let Ef=()=>{};const Hi={},bx=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),xx=t=>typeof t=="object"&&t!==null,wx=t=>/^0[^.\s]+$/u.test(t);function Sx(t){let e;return()=>(e===void 0&&(e=t()),e)}const hn=t=>t,no=(...t)=>t.reduce((e,a)=>r=>a(e(r))),Xs=(t,e,a)=>{const r=e-t;return r?(a-t)/r:1};class Cf{constructor(){this.subscriptions=[]}add(e){return Tf(this.subscriptions,e),()=>rc(this.subscriptions,e)}notify(e,a,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,a,r);else for(let c=0;c<o;c++){const u=this.subscriptions[c];u&&u(e,a,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Xt=t=>t*1e3,dn=t=>t/1e3,jx=(t,e)=>e?t*(1e3/e):0,_x=(t,e,a)=>(((1-3*a+3*e)*t+(3*a-6*e))*t+3*e)*t,DT=1e-7,MT=12;function LT(t,e,a,r,o){let c,u,f=0;do u=e+(a-e)/2,c=_x(u,r,o)-t,c>0?a=u:e=u;while(Math.abs(c)>DT&&++f<MT);return u}function io(t,e,a,r){if(t===e&&a===r)return hn;const o=c=>LT(c,0,1,t,a);return c=>c===0||c===1?c:_x(o(c),e,r)}const kx=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Tx=t=>e=>1-t(1-e),Ex=io(.33,1.53,.69,.99),Af=Tx(Ex),Cx=kx(Af),Ax=t=>t>=1?1:(t*=2)<1?.5*Af(t):.5*(2-Math.pow(2,-10*(t-1))),Rf=t=>1-Math.sin(Math.acos(t)),Rx=Tx(Rf),Nx=kx(Rf),zT=io(.42,0,1,1),UT=io(0,0,.58,1),Ox=io(.42,0,.58,1),BT=t=>Array.isArray(t)&&typeof t[0]!="number",Dx=t=>Array.isArray(t)&&typeof t[0]=="number",PT={linear:hn,easeIn:zT,easeInOut:Ox,easeOut:UT,circIn:Rf,circInOut:Nx,circOut:Rx,backIn:Af,backInOut:Cx,backOut:Ex,anticipate:Ax},VT=t=>typeof t=="string",Jy=t=>{if(Dx(t)){Ef(t.length===4);const[e,a,r,o]=t;return io(e,a,r,o)}else if(VT(t))return PT[t];return t},Dl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function HT(t,e){let a=new Set,r=new Set,o=!1,c=!1;const u=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1};function m(y){u.has(y)&&(g.schedule(y),t()),y(f)}const g={schedule:(y,v=!1,x=!1)=>{const S=x&&o?a:r;return v&&u.add(y),S.add(y),y},cancel:y=>{r.delete(y),u.delete(y)},process:y=>{if(f=y,o){c=!0;return}o=!0;const v=a;a=r,r=v,a.forEach(m),a.clear(),o=!1,c&&(c=!1,g.process(y))}};return g}const $T=40;function Mx(t,e){let a=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},c=()=>a=!0,u=Dl.reduce((A,B)=>(A[B]=HT(c),A),{}),{setup:f,read:m,resolveKeyframes:g,preUpdate:y,update:v,preRender:x,render:w,postRender:S}=u,T=()=>{const A=Hi.useManualTiming,B=A?o.timestamp:performance.now();a=!1,A||(o.delta=r?1e3/60:Math.max(Math.min(B-o.timestamp,$T),1)),o.timestamp=B,o.isProcessing=!0,f.process(o),m.process(o),g.process(o),y.process(o),v.process(o),x.process(o),w.process(o),S.process(o),o.isProcessing=!1,a&&e&&(r=!1,t(T))},E=()=>{a=!0,r=!0,o.isProcessing||t(T)};return{schedule:Dl.reduce((A,B)=>{const G=u[B];return A[B]=(W,q=!1,X=!1)=>(a||E(),G.schedule(W,q,X)),A},{}),cancel:A=>{for(let B=0;B<Dl.length;B++)u[Dl[B]].cancel(A)},state:o,steps:u}}const{schedule:Ve,cancel:$i,state:wt,steps:ah}=Mx(typeof requestAnimationFrame<"u"?requestAnimationFrame:hn,!0);let Hl;function IT(){Hl=void 0}const Tt={now:()=>(Hl===void 0&&Tt.set(wt.isProcessing||Hi.useManualTiming?wt.timestamp:performance.now()),Hl),set:t=>{Hl=t,queueMicrotask(IT)}},Lx=t=>e=>typeof e=="string"&&e.startsWith(t),zx=Lx("--"),qT=Lx("var(--"),Nf=t=>qT(t)?FT.test(t.split("/*")[0].trim()):!1,FT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Qy(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const Er={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ws={...Er,transform:t=>Un(0,1,t)},Ml={...Er,default:1},Us=t=>Math.round(t*1e5)/1e5,Of=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function GT(t){return t==null}const KT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Df=(t,e)=>a=>!!(typeof a=="string"&&KT.test(a)&&a.startsWith(t)||e&&!GT(a)&&Object.prototype.hasOwnProperty.call(a,e)),Ux=(t,e,a)=>r=>{if(typeof r!="string")return r;const[o,c,u,f]=r.match(Of);return{[t]:parseFloat(o),[e]:parseFloat(c),[a]:parseFloat(u),alpha:f!==void 0?parseFloat(f):1}},YT=t=>Un(0,255,t),rh={...Er,transform:t=>Math.round(YT(t))},ya={test:Df("rgb","red"),parse:Ux("red","green","blue"),transform:({red:t,green:e,blue:a,alpha:r=1})=>"rgba("+rh.transform(t)+", "+rh.transform(e)+", "+rh.transform(a)+", "+Us(Ws.transform(r))+")"};function XT(t){let e="",a="",r="",o="";return t.length>5?(e=t.substring(1,3),a=t.substring(3,5),r=t.substring(5,7),o=t.substring(7,9)):(e=t.substring(1,2),a=t.substring(2,3),r=t.substring(3,4),o=t.substring(4,5),e+=e,a+=a,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(a,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Uh={test:Df("#"),parse:XT,transform:ya.transform},ao=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),ri=ao("deg"),zn=ao("%"),ae=ao("px"),WT=ao("vh"),JT=ao("vw"),Zy={...zn,parse:t=>zn.parse(t)/100,transform:t=>zn.transform(t*100)},gr={test:Df("hsl","hue"),parse:Ux("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:a,alpha:r=1})=>"hsla("+Math.round(t)+", "+zn.transform(Us(e))+", "+zn.transform(Us(a))+", "+Us(Ws.transform(r))+")"},lt={test:t=>ya.test(t)||Uh.test(t)||gr.test(t),parse:t=>ya.test(t)?ya.parse(t):gr.test(t)?gr.parse(t):Uh.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?ya.transform(t):gr.transform(t),getAnimatableNone:t=>{const e=lt.parse(t);return e.alpha=0,lt.transform(e)}},QT=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function ZT(t){var e,a;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Of))==null?void 0:e.length)||0)+(((a=t.match(QT))==null?void 0:a.length)||0)>0}const Bx="number",Px="color",eE="var",tE="var(",ev="${}",nE=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function xr(t){const e=t.toString(),a=[],r={color:[],number:[],var:[]},o=[];let c=0;const f=e.replace(nE,m=>(lt.test(m)?(r.color.push(c),o.push(Px),a.push(lt.parse(m))):m.startsWith(tE)?(r.var.push(c),o.push(eE),a.push(m)):(r.number.push(c),o.push(Bx),a.push(parseFloat(m))),++c,ev)).split(ev);return{values:a,split:f,indexes:r,types:o}}function iE(t){return xr(t).values}function Vx({split:t,types:e}){const a=t.length;return r=>{let o="";for(let c=0;c<a;c++)if(o+=t[c],r[c]!==void 0){const u=e[c];u===Bx?o+=Us(r[c]):u===Px?o+=lt.transform(r[c]):o+=r[c]}return o}}function aE(t){return Vx(xr(t))}const rE=t=>typeof t=="number"?0:lt.test(t)?lt.getAnimatableNone(t):t,sE=(t,e)=>typeof t=="number"?e!=null&&e.trim().endsWith("/")?t:0:rE(t);function oE(t){const e=xr(t);return Vx(e)(e.values.map((r,o)=>sE(r,e.split[o])))}const jn={test:ZT,parse:iE,createTransformer:aE,getAnimatableNone:oE};function sh(t,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?t+(e-t)*6*a:a<1/2?e:a<2/3?t+(e-t)*(2/3-a)*6:t}function lE({hue:t,saturation:e,lightness:a,alpha:r}){t/=360,e/=100,a/=100;let o=0,c=0,u=0;if(!e)o=c=u=a;else{const f=a<.5?a*(1+e):a+e-a*e,m=2*a-f;o=sh(m,f,t+1/3),c=sh(m,f,t),u=sh(m,f,t-1/3)}return{red:Math.round(o*255),green:Math.round(c*255),blue:Math.round(u*255),alpha:r}}function sc(t,e){return a=>a>0?e:t}const Pe=(t,e,a)=>t+(e-t)*a,oh=(t,e,a)=>{const r=t*t,o=a*(e*e-r)+r;return o<0?0:Math.sqrt(o)},cE=[Uh,ya,gr],uE=t=>cE.find(e=>e.test(t));function tv(t){const e=uE(t);if(!e)return!1;let a=e.parse(t);return e===gr&&(a=lE(a)),a}const nv=(t,e)=>{const a=tv(t),r=tv(e);if(!a||!r)return sc(t,e);const o={...a};return c=>(o.red=oh(a.red,r.red,c),o.green=oh(a.green,r.green,c),o.blue=oh(a.blue,r.blue,c),o.alpha=Pe(a.alpha,r.alpha,c),ya.transform(o))},Bh=new Set(["none","hidden"]);function dE(t,e){return Bh.has(t)?a=>a<=0?t:e:a=>a>=1?e:t}function hE(t,e){return a=>Pe(t,e,a)}function Mf(t){return typeof t=="number"?hE:typeof t=="string"?Nf(t)?sc:lt.test(t)?nv:pE:Array.isArray(t)?Hx:typeof t=="object"?lt.test(t)?nv:fE:sc}function Hx(t,e){const a=[...t],r=a.length,o=t.map((c,u)=>Mf(c)(c,e[u]));return c=>{for(let u=0;u<r;u++)a[u]=o[u](c);return a}}function fE(t,e){const a={...t,...e},r={};for(const o in a)t[o]!==void 0&&e[o]!==void 0&&(r[o]=Mf(t[o])(t[o],e[o]));return o=>{for(const c in r)a[c]=r[c](o);return a}}function mE(t,e){const a=[],r={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const c=e.types[o],u=t.indexes[c][r[c]],f=t.values[u]??0;a[o]=f,r[c]++}return a}const pE=(t,e)=>{const a=jn.createTransformer(e),r=xr(t),o=xr(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?Bh.has(t)&&!o.values.length||Bh.has(e)&&!r.values.length?dE(t,e):no(Hx(mE(r,o),o.values),a):sc(t,e)};function $x(t,e,a){return typeof t=="number"&&typeof e=="number"&&typeof a=="number"?Pe(t,e,a):Mf(t)(t,e)}const gE=t=>{const e=({timestamp:a})=>t(a);return{start:(a=!0)=>Ve.update(e,a),stop:()=>$i(e),now:()=>wt.isProcessing?wt.timestamp:Tt.now()}},Ix=(t,e,a=10)=>{let r="";const o=Math.max(Math.round(e/a),2);for(let c=0;c<o;c++)r+=Math.round(t(c/(o-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},oc=2e4;function Lf(t){let e=0;const a=50;let r=t.next(e);for(;!r.done&&e<oc;)e+=a,r=t.next(e);return e>=oc?1/0:e}function yE(t,e=100,a){const r=a({...t,keyframes:[0,e]}),o=Math.min(Lf(r),oc);return{type:"keyframes",ease:c=>r.next(o*c).value/e,duration:dn(o)}}const Qe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Ph(t,e){return t*Math.sqrt(1-e*e)}const vE=12;function bE(t,e,a){let r=a;for(let o=1;o<vE;o++)r=r-t(r)/e(r);return r}const lh=.001;function xE({duration:t=Qe.duration,bounce:e=Qe.bounce,velocity:a=Qe.velocity,mass:r=Qe.mass}){let o,c,u=1-e;u=Un(Qe.minDamping,Qe.maxDamping,u),t=Un(Qe.minDuration,Qe.maxDuration,dn(t)),u<1?(o=g=>{const y=g*u,v=y*t,x=y-a,w=Ph(g,u),S=Math.exp(-v);return lh-x/w*S},c=g=>{const v=g*u*t,x=v*a+a,w=Math.pow(u,2)*Math.pow(g,2)*t,S=Math.exp(-v),T=Ph(Math.pow(g,2),u);return(-o(g)+lh>0?-1:1)*((x-w)*S)/T}):(o=g=>{const y=Math.exp(-g*t),v=(g-a)*t+1;return-lh+y*v},c=g=>{const y=Math.exp(-g*t),v=(a-g)*(t*t);return y*v});const f=5/t,m=bE(o,c,f);if(t=Xt(t),isNaN(m))return{stiffness:Qe.stiffness,damping:Qe.damping,duration:t};{const g=Math.pow(m,2)*r;return{stiffness:g,damping:u*2*Math.sqrt(r*g),duration:t}}}const wE=["duration","bounce"],SE=["stiffness","damping","mass"];function iv(t,e){return e.some(a=>t[a]!==void 0)}function jE(t){let e={velocity:Qe.velocity,stiffness:Qe.stiffness,damping:Qe.damping,mass:Qe.mass,isResolvedFromDuration:!1,...t};if(!iv(t,SE)&&iv(t,wE))if(e.velocity=0,t.visualDuration){const a=t.visualDuration,r=2*Math.PI/(a*1.2),o=r*r,c=2*Un(.05,1,1-(t.bounce||0))*Math.sqrt(o);e={...e,mass:Qe.mass,stiffness:o,damping:c}}else{const a=xE({...t,velocity:0});e={...e,...a,mass:Qe.mass},e.isResolvedFromDuration=!0}return e}function lc(t=Qe.visualDuration,e=Qe.bounce){const a=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:r,restDelta:o}=a;const c=a.keyframes[0],u=a.keyframes[a.keyframes.length-1],f={done:!1,value:c},{stiffness:m,damping:g,mass:y,duration:v,velocity:x,isResolvedFromDuration:w}=jE({...a,velocity:-dn(a.velocity||0)}),S=x||0,T=g/(2*Math.sqrt(m*y)),E=u-c,k=dn(Math.sqrt(m/y)),O=Math.abs(E)<5;r||(r=O?Qe.restSpeed.granular:Qe.restSpeed.default),o||(o=O?Qe.restDelta.granular:Qe.restDelta.default);let A,B,G,W,q,X;if(T<1)G=Ph(k,T),W=(S+T*k*E)/G,A=Y=>{const K=Math.exp(-T*k*Y);return u-K*(W*Math.sin(G*Y)+E*Math.cos(G*Y))},q=T*k*W+E*G,X=T*k*E-W*G,B=Y=>Math.exp(-T*k*Y)*(q*Math.sin(G*Y)+X*Math.cos(G*Y));else if(T===1){A=K=>u-Math.exp(-k*K)*(E+(S+k*E)*K);const Y=S+k*E;B=K=>Math.exp(-k*K)*(k*Y*K-S)}else{const Y=k*Math.sqrt(T*T-1);A=Ce=>{const ge=Math.exp(-T*k*Ce),V=Math.min(Y*Ce,300);return u-ge*((S+T*k*E)*Math.sinh(V)+Y*E*Math.cosh(V))/Y};const K=(S+T*k*E)/Y,oe=T*k*K-E*Y,je=T*k*E-K*Y;B=Ce=>{const ge=Math.exp(-T*k*Ce),V=Math.min(Y*Ce,300);return ge*(oe*Math.sinh(V)+je*Math.cosh(V))}}const M={calculatedDuration:w&&v||null,velocity:Y=>Xt(B(Y)),next:Y=>{if(!w&&T<1){const oe=Math.exp(-T*k*Y),je=Math.sin(G*Y),Ce=Math.cos(G*Y),ge=u-oe*(W*je+E*Ce),V=Xt(oe*(q*je+X*Ce));return f.done=Math.abs(V)<=r&&Math.abs(u-ge)<=o,f.value=f.done?u:ge,f}const K=A(Y);if(w)f.done=Y>=v;else{const oe=Xt(B(Y));f.done=Math.abs(oe)<=r&&Math.abs(u-K)<=o}return f.value=f.done?u:K,f},toString:()=>{const Y=Math.min(Lf(M),oc),K=Ix(oe=>M.next(Y*oe).value,Y,30);return Y+"ms "+K},toTransition:()=>{}};return M}lc.applyToOptions=t=>{const e=yE(t,100,lc);return t.ease=e.ease,t.duration=Xt(e.duration),t.type="keyframes",t};const _E=5;function qx(t,e,a){const r=Math.max(e-_E,0);return jx(a-t(r),e-r)}function Vh({keyframes:t,velocity:e=0,power:a=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:c=500,modifyTarget:u,min:f,max:m,restDelta:g=.5,restSpeed:y}){const v=t[0],x={done:!1,value:v},w=X=>f!==void 0&&X<f||m!==void 0&&X>m,S=X=>f===void 0?m:m===void 0||Math.abs(f-X)<Math.abs(m-X)?f:m;let T=a*e;const E=v+T,k=u===void 0?E:u(E);k!==E&&(T=k-v);const O=X=>-T*Math.exp(-X/r),A=X=>k+O(X),B=X=>{const M=O(X),Y=A(X);x.done=Math.abs(M)<=g,x.value=x.done?k:Y};let G,W;const q=X=>{w(x.value)&&(G=X,W=lc({keyframes:[x.value,S(x.value)],velocity:qx(A,X,x.value),damping:o,stiffness:c,restDelta:g,restSpeed:y}))};return q(0),{calculatedDuration:null,next:X=>{let M=!1;return!W&&G===void 0&&(M=!0,B(X),q(X)),G!==void 0&&X>=G?W.next(X-G):(!M&&B(X),x)}}}function kE(t,e,a){const r=[],o=a||Hi.mix||$x,c=t.length-1;for(let u=0;u<c;u++){let f=o(t[u],t[u+1]);if(e){const m=Array.isArray(e)?e[u]||hn:e;f=no(m,f)}r.push(f)}return r}function TE(t,e,{clamp:a=!0,ease:r,mixer:o}={}){const c=t.length;if(Ef(c===e.length),c===1)return()=>e[0];if(c===2&&e[0]===e[1])return()=>e[1];const u=t[0]===t[1];t[0]>t[c-1]&&(t=[...t].reverse(),e=[...e].reverse());const f=kE(e,r,o),m=f.length,g=y=>{if(u&&y<t[0])return e[0];let v=0;if(m>1)for(;v<t.length-2&&!(y<t[v+1]);v++);const x=Xs(t[v],t[v+1],y);return f[v](x)};return a?y=>g(Un(t[0],t[c-1],y)):g}function EE(t,e){const a=t[t.length-1];for(let r=1;r<=e;r++){const o=Xs(0,e,r);t.push(Pe(a,1,o))}}function CE(t){const e=[0];return EE(e,t.length-1),e}function AE(t,e){return t.map(a=>a*e)}function RE(t,e){return t.map(()=>e||Ox).splice(0,t.length-1)}function Bs({duration:t=300,keyframes:e,times:a,ease:r="easeInOut"}){const o=BT(r)?r.map(Jy):Jy(r),c={done:!1,value:e[0]},u=AE(a&&a.length===e.length?a:CE(e),t),f=TE(u,e,{ease:Array.isArray(o)?o:RE(e,o)});return{calculatedDuration:t,next:m=>(c.value=f(m),c.done=m>=t,c)}}const NE=t=>t!==null;function _c(t,{repeat:e,repeatType:a="loop"},r,o=1){const c=t.filter(NE),f=o<0||e&&a!=="loop"&&e%2===1?0:c.length-1;return!f||r===void 0?c[f]:r}const OE={decay:Vh,inertia:Vh,tween:Bs,keyframes:Bs,spring:lc};function Fx(t){typeof t.type=="string"&&(t.type=OE[t.type])}class zf{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,a){return this.finished.then(e,a)}}const DE=t=>t/100;class cc extends zf{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,o;const{motionValue:a}=this.options;a&&a.updatedAt!==Tt.now()&&this.tick(Tt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(r=this.options).onStop)==null||o.call(r))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;Fx(e);const{type:a=Bs,repeat:r=0,repeatDelay:o=0,repeatType:c,velocity:u=0}=e;let{keyframes:f}=e;const m=a||Bs;m!==Bs&&typeof f[0]!="number"&&(this.mixKeyframes=no(DE,$x(f[0],f[1])),f=[0,100]);const g=m({...e,keyframes:f});c==="mirror"&&(this.mirroredGenerator=m({...e,keyframes:[...f].reverse(),velocity:-u})),g.calculatedDuration===null&&(g.calculatedDuration=Lf(g));const{calculatedDuration:y}=g;this.calculatedDuration=y,this.resolvedDuration=y+o,this.totalDuration=this.resolvedDuration*(r+1)-o,this.generator=g}updateTime(e){const a=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=a}tick(e,a=!1){const{generator:r,totalDuration:o,mixKeyframes:c,mirroredGenerator:u,resolvedDuration:f,calculatedDuration:m}=this;if(this.startTime===null)return r.next(0);const{delay:g=0,keyframes:y,repeat:v,repeatType:x,repeatDelay:w,type:S,onUpdate:T,finalKeyframe:E}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),a?this.currentTime=e:this.updateTime(e);const k=this.currentTime-g*(this.playbackSpeed>=0?1:-1),O=this.playbackSpeed>=0?k<0:k>o;this.currentTime=Math.max(k,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let A=this.currentTime,B=r;if(v){const X=Math.min(this.currentTime,o)/f;let M=Math.floor(X),Y=X%1;!Y&&X>=1&&(Y=1),Y===1&&M--,M=Math.min(M,v+1),!!(M%2)&&(x==="reverse"?(Y=1-Y,w&&(Y-=w/f)):x==="mirror"&&(B=u)),A=Un(0,1,Y)*f}let G;O?(this.delayState.value=y[0],G=this.delayState):G=B.next(A),c&&!O&&(G.value=c(G.value));let{done:W}=G;!O&&m!==null&&(W=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const q=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&W);return q&&S!==Vh&&(G.value=_c(y,this.options,E,this.speed)),T&&T(G.value),q&&this.finish(),G}then(e,a){return this.finished.then(e,a)}get duration(){return dn(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+dn(e)}get time(){return dn(this.currentTime)}set time(e){e=Xt(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const a=this.generator.next(e).value;return qx(r=>this.generator.next(r).value,e,a)}get speed(){return this.playbackSpeed}set speed(e){const a=this.playbackSpeed!==e;a&&this.driver&&this.updateTime(Tt.now()),this.playbackSpeed=e,a&&this.driver&&(this.time=dn(this.currentTime))}play(){var o,c;if(this.isStopped)return;const{driver:e=gE,startTime:a}=this.options;this.driver||(this.driver=e(u=>this.tick(u))),(c=(o=this.options).onPlay)==null||c.call(o);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=a??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Tt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,a;this.notifyFinished(),this.teardown(),this.state="finished",(a=(e=this.options).onComplete)==null||a.call(e)}cancel(){var e,a;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(a=(e=this.options).onCancel)==null||a.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var a;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(a=this.driver)==null||a.stop(),e.observe(this)}}function ME(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const va=t=>t*180/Math.PI,Hh=t=>{const e=va(Math.atan2(t[1],t[0]));return $h(e)},LE={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Hh,rotateZ:Hh,skewX:t=>va(Math.atan(t[1])),skewY:t=>va(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},$h=t=>(t=t%360,t<0&&(t+=360),t),av=Hh,rv=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),sv=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),zE={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:rv,scaleY:sv,scale:t=>(rv(t)+sv(t))/2,rotateX:t=>$h(va(Math.atan2(t[6],t[5]))),rotateY:t=>$h(va(Math.atan2(-t[2],t[0]))),rotateZ:av,rotate:av,skewX:t=>va(Math.atan(t[4])),skewY:t=>va(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Ih(t){return t.includes("scale")?1:0}function qh(t,e){if(!t||t==="none")return Ih(e);const a=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,o;if(a)r=zE,o=a;else{const f=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=LE,o=f}if(!o)return Ih(e);const c=r[e],u=o[1].split(",").map(BE);return typeof c=="function"?c(u):u[c]}const UE=(t,e)=>{const{transform:a="none"}=getComputedStyle(t);return qh(a,e)};function BE(t){return parseFloat(t.trim())}const Cr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ar=new Set([...Cr,"pathRotation"]),ov=t=>t===Er||t===ae,PE=new Set(["x","y","z"]),VE=Cr.filter(t=>!PE.has(t));function HE(t){const e=[];return VE.forEach(a=>{const r=t.getValue(a);r!==void 0&&(e.push([a,r.get()]),r.set(a.startsWith("scale")?1:0))}),e}const Vi={width:({x:t},{paddingLeft:e="0",paddingRight:a="0",boxSizing:r})=>{const o=t.max-t.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(a)},height:({y:t},{paddingTop:e="0",paddingBottom:a="0",boxSizing:r})=>{const o=t.max-t.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(a)},top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>qh(e,"x"),y:(t,{transform:e})=>qh(e,"y")};Vi.translateX=Vi.x;Vi.translateY=Vi.y;const xa=new Set;let Fh=!1,Gh=!1,Kh=!1;function Gx(){if(Gh){const t=Array.from(xa).filter(r=>r.needsMeasurement),e=new Set(t.map(r=>r.element)),a=new Map;e.forEach(r=>{const o=HE(r);o.length&&(a.set(r,o),r.render())}),t.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=a.get(r);o&&o.forEach(([c,u])=>{var f;(f=r.getValue(c))==null||f.set(u)})}),t.forEach(r=>r.measureEndState()),t.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Gh=!1,Fh=!1,xa.forEach(t=>t.complete(Kh)),xa.clear()}function Kx(){xa.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Gh=!0)})}function $E(){Kh=!0,Kx(),Gx(),Kh=!1}class Uf{constructor(e,a,r,o,c,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=a,this.name=r,this.motionValue=o,this.element=c,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(xa.add(this),Fh||(Fh=!0,Ve.read(Kx),Ve.resolveKeyframes(Gx))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:a,element:r,motionValue:o}=this;if(e[0]===null){const c=o==null?void 0:o.get(),u=e[e.length-1];if(c!==void 0)e[0]=c;else if(r&&a){const f=r.readValue(a,u);f!=null&&(e[0]=f)}e[0]===void 0&&(e[0]=u),o&&c===void 0&&o.set(e[0])}ME(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),xa.delete(this)}cancel(){this.state==="scheduled"&&(xa.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const IE=t=>t.startsWith("--");function Yx(t,e,a){IE(e)?t.style.setProperty(e,a):t.style[e]=a}const qE={};function Xx(t,e){const a=Sx(t);return()=>qE[e]??a()}const FE=Xx(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Wx=Xx(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ds=([t,e,a,r])=>`cubic-bezier(${t}, ${e}, ${a}, ${r})`,lv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ds([0,.65,.55,1]),circOut:Ds([.55,0,1,.45]),backIn:Ds([.31,.01,.66,-.59]),backOut:Ds([.33,1.53,.69,.99])};function Jx(t,e){if(t)return typeof t=="function"?Wx()?Ix(t,e):"ease-out":Dx(t)?Ds(t):Array.isArray(t)?t.map(a=>Jx(a,e)||lv.easeOut):lv[t]}function GE(t,e,a,{delay:r=0,duration:o=300,repeat:c=0,repeatType:u="loop",ease:f="easeOut",times:m}={},g=void 0){const y={[e]:a};m&&(y.offset=m);const v=Jx(f,o);Array.isArray(v)&&(y.easing=v);const x={delay:r,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:c+1,direction:u==="reverse"?"alternate":"normal"};return g&&(x.pseudoElement=g),t.animate(y,x)}function Qx(t){return typeof t=="function"&&"applyToOptions"in t}function KE({type:t,...e}){return Qx(t)&&Wx()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class Zx extends zf{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:a,name:r,keyframes:o,pseudoElement:c,allowFlatten:u=!1,finalKeyframe:f,onComplete:m}=e;this.isPseudoElement=!!c,this.allowFlatten=u,this.options=e,Ef(typeof e.type!="string");const g=KE(e);this.animation=GE(a,r,o,g,c),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!c){const y=_c(o,this.options,f,this.speed);this.updateMotionValue&&this.updateMotionValue(y),Yx(a,r,y),this.animation.cancel()}m==null||m(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,a;(a=(e=this.animation).finish)==null||a.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var a,r,o;const e=(a=this.options)==null?void 0:a.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((o=(r=this.animation).commitStyles)==null||o.call(r))}get duration(){var a,r;const e=((r=(a=this.animation.effect)==null?void 0:a.getComputedTiming)==null?void 0:r.call(a).duration)||0;return dn(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+dn(e)}get time(){return dn(Number(this.animation.currentTime)||0)}set time(e){const a=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Xt(e),a&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:a,rangeEnd:r,observe:o}){var c;return this.allowFlatten&&((c=this.animation.effect)==null||c.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&FE()?(this.animation.timeline=e,a&&(this.animation.rangeStart=a),r&&(this.animation.rangeEnd=r),hn):o(this)}}const e1={anticipate:Ax,backInOut:Cx,circInOut:Nx};function YE(t){return t in e1}function XE(t){typeof t.ease=="string"&&YE(t.ease)&&(t.ease=e1[t.ease])}const ch=10;class WE extends Zx{constructor(e){XE(e),Fx(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:a,onUpdate:r,onComplete:o,element:c,...u}=this.options;if(!a)return;if(e!==void 0){a.set(e);return}const f=new cc({...u,autoplay:!1}),m=Math.max(ch,Tt.now()-this.startTime),g=Un(0,ch,m-ch),y=f.sample(m).value,{name:v}=this.options;c&&v&&Yx(c,v,y),a.setWithVelocity(f.sample(Math.max(0,m-g)).value,y,g),f.stop()}}const cv=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(jn.test(t)||t==="0")&&!t.startsWith("url("));function JE(t){const e=t[0];if(t.length===1)return!0;for(let a=0;a<t.length;a++)if(t[a]!==e)return!0}function QE(t,e,a,r){const o=t[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const c=t[t.length-1],u=cv(o,e),f=cv(c,e);return!u||!f?!1:JE(t)||(a==="spring"||Qx(a))&&r}function Yh(t){t.duration=0,t.type="keyframes"}const t1=new Set(["opacity","clipPath","filter","transform"]),ZE=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function eC(t){for(let e=0;e<t.length;e++)if(typeof t[e]=="string"&&ZE.test(t[e]))return!0;return!1}const tC=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),nC=Sx(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function iC(t){var v;const{motionValue:e,name:a,repeatDelay:r,repeatType:o,damping:c,type:u,keyframes:f}=t;if(!(((v=e==null?void 0:e.owner)==null?void 0:v.current)instanceof HTMLElement))return!1;const{onUpdate:g,transformTemplate:y}=e.owner.getProps();return nC()&&a&&(t1.has(a)||tC.has(a)&&eC(f))&&(a!=="transform"||!y)&&!g&&!r&&o!=="mirror"&&c!==0&&u!=="inertia"}const aC=40;class rC extends zf{constructor({autoplay:e=!0,delay:a=0,type:r="keyframes",repeat:o=0,repeatDelay:c=0,repeatType:u="loop",keyframes:f,name:m,motionValue:g,element:y,...v}){var S;super(),this.stop=()=>{var T,E;this._animation&&(this._animation.stop(),(T=this.stopTimeline)==null||T.call(this)),(E=this.keyframeResolver)==null||E.cancel()},this.createdAt=Tt.now();const x={autoplay:e,delay:a,type:r,repeat:o,repeatDelay:c,repeatType:u,name:m,motionValue:g,element:y,...v},w=(y==null?void 0:y.KeyframeResolver)||Uf;this.keyframeResolver=new w(f,(T,E,k)=>this.onKeyframesResolved(T,E,x,!k),m,g,y),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(e,a,r,o){var k,O;this.keyframeResolver=void 0;const{name:c,type:u,velocity:f,delay:m,isHandoff:g,onUpdate:y}=r;this.resolvedAt=Tt.now();let v=!0;QE(e,c,u,f)||(v=!1,(Hi.instantAnimations||!m)&&(y==null||y(_c(e,r,a))),e[0]=e[e.length-1],Yh(r),r.repeat=0);const w={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>aC?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:a,...r,keyframes:e},S=v&&!g&&iC(w),T=(O=(k=w.motionValue)==null?void 0:k.owner)==null?void 0:O.current;let E;if(S)try{E=new WE({...w,element:T})}catch{E=new cc(w)}else E=new cc(w);E.finished.then(()=>{this.notifyFinished()}).catch(hn),this.pendingTimeline&&(this.stopTimeline=E.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=E}get finished(){return this._animation?this.animation.finished:this._finished}then(e,a){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),$E()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function n1(t,e,a,r=0,o=1){const c=Array.from(t).sort((g,y)=>g.sortNodePosition(y)).indexOf(e),u=t.size,f=(u-1)*r;return typeof a=="function"?a(c,u):o===1?c*r:f-c*r}const uv=30,sC=t=>!isNaN(parseFloat(t));class oC{constructor(e,a={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var c;const o=Tt.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((c=this.events.change)==null||c.notify(this.current),this.dependents))for(const u of this.dependents)u.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=a.owner}setCurrent(e){this.current=e,this.updatedAt=Tt.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=sC(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,a){this.events[e]||(this.events[e]=new Cf);const r=this.events[e].add(a);return e==="change"?()=>{r(),Ve.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,a){this.passiveEffect=e,this.stopPassiveEffect=a}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,a,r){this.set(a),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,a=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,a&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Tt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>uv)return 0;const a=Math.min(this.updatedAt-this.prevUpdatedAt,uv);return jx(parseFloat(this.current)-parseFloat(this.prevFrameValue),a)}start(e){return this.stop(),new Promise(a=>{this.hasAnimated=!0,this.animation=e(a),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,a;(e=this.dependents)==null||e.clear(),(a=this.events.destroy)==null||a.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function wr(t,e){return new oC(t,e)}function i1(t,e){if(t!=null&&t.inherit&&e){const{inherit:a,...r}=t;return{...e,...r}}return t}function Bf(t,e){const a=(t==null?void 0:t[e])??(t==null?void 0:t.default)??t;return a!==t?i1(a,t):a}const lC={type:"spring",stiffness:500,damping:25,restSpeed:10},cC=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),uC={type:"keyframes",duration:.8},dC={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},hC=(t,{keyframes:e})=>e.length>2?uC:Ar.has(t)?t.startsWith("scale")?cC(e[1]):lC:dC,fC=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function mC(t){for(const e in t)if(!fC.has(e))return!0;return!1}const Pf=(t,e,a,r={},o,c)=>u=>{const f=Bf(r,t)||{},m=f.delay||r.delay||0;let{elapsed:g=0}=r;g=g-Xt(m);const y={keyframes:Array.isArray(a)?a:[null,a],ease:"easeOut",velocity:e.getVelocity(),...f,delay:-g,onUpdate:x=>{e.set(x),f.onUpdate&&f.onUpdate(x)},onComplete:()=>{u(),f.onComplete&&f.onComplete()},name:t,motionValue:e,element:c?void 0:o};mC(f)||Object.assign(y,hC(t,y)),y.duration&&(y.duration=Xt(y.duration)),y.repeatDelay&&(y.repeatDelay=Xt(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let v=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(Yh(y),y.delay===0&&(v=!0)),(Hi.instantAnimations||Hi.skipAnimations||o!=null&&o.shouldSkipAnimations||f.skipAnimations)&&(v=!0,Yh(y),y.delay=0),y.allowFlatten=!f.type&&!f.ease,v&&!c&&e.get()!==void 0){const x=_c(y.keyframes,f);if(x!==void 0){Ve.update(()=>{y.onUpdate(x),y.onComplete()});return}}return f.isSync?new cc(y):new rC(y)},pC=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function gC(t){const e=pC.exec(t);if(!e)return[,];const[,a,r,o]=e;return[`--${a??r}`,o]}function a1(t,e,a=1){const[r,o]=gC(t);if(!r)return;const c=window.getComputedStyle(e).getPropertyValue(r);if(c){const u=c.trim();return bx(u)?parseFloat(u):u}return Nf(o)?a1(o,e,a+1):o}function dv(t){const e=[{},{}];return t==null||t.values.forEach((a,r)=>{e[0][r]=a.get(),e[1][r]=a.getVelocity()}),e}function Vf(t,e,a,r){if(typeof e=="function"){const[o,c]=dv(r);e=e(a!==void 0?a:t.custom,o,c)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[o,c]=dv(r);e=e(a!==void 0?a:t.custom,o,c)}return e}function wa(t,e,a){const r=t.getProps();return Vf(r,e,a!==void 0?a:r.custom,t)}const r1=new Set(["width","height","top","left","right","bottom",...Cr]),Xh=t=>Array.isArray(t);function yC(t,e,a){t.hasValue(e)?t.getValue(e).set(a):t.addValue(e,wr(a))}function vC(t){return Xh(t)?t[t.length-1]||0:t}function bC(t,e){const a=wa(t,e);let{transitionEnd:r={},transition:o={},...c}=a||{};c={...c,...r};for(const u in c){const f=vC(c[u]);yC(t,u,f)}}const St=t=>!!(t&&t.getVelocity);function xC(t){return!!(St(t)&&t.add)}function Wh(t,e){const a=t.getValue("willChange");if(xC(a))return a.add(e);if(!a&&Hi.WillChange){const r=new Hi.WillChange("auto");t.addValue("willChange",r),r.add(e)}}function Hf(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const wC="framerAppearId",s1="data-"+Hf(wC);function o1(t){return t.props[s1]}function SC({protectedKeys:t,needsAnimating:e},a){const r=t.hasOwnProperty(a)&&e[a]!==!0;return e[a]=!1,r}function l1(t,e,{delay:a=0,transitionOverride:r,type:o}={}){let{transition:c,transitionEnd:u,...f}=e;const m=t.getDefaultTransition();c=c?i1(c,m):m;const g=c==null?void 0:c.reduceMotion,y=c==null?void 0:c.skipAnimations;r&&(c=r);const v=[],x=o&&t.animationState&&t.animationState.getState()[o],w=c==null?void 0:c.path;w&&w.animateVisualElement(t,f,c,a,v);for(const S in f){const T=t.getValue(S,t.latestValues[S]??null),E=f[S];if(E===void 0||x&&SC(x,S))continue;const k={delay:a,...Bf(c||{},S)};y&&(k.skipAnimations=!0);const O=T.get();if(O!==void 0&&!T.isAnimating()&&!Array.isArray(E)&&E===O&&!k.velocity){Ve.update(()=>T.set(E));continue}let A=!1;if(window.MotionHandoffAnimation){const W=o1(t);if(W){const q=window.MotionHandoffAnimation(W,S,Ve);q!==null&&(k.startTime=q,A=!0)}}Wh(t,S);const B=g??t.shouldReduceMotion;T.start(Pf(S,T,E,B&&r1.has(S)?{type:!1}:k,t,A));const G=T.animation;G&&v.push(G)}if(u){const S=()=>Ve.update(()=>{u&&bC(t,u)});v.length?Promise.all(v).then(S):S()}return v}function Jh(t,e,a={}){var m;const r=wa(t,e,a.type==="exit"?(m=t.presenceContext)==null?void 0:m.custom:void 0);let{transition:o=t.getDefaultTransition()||{}}=r||{};a.transitionOverride&&(o=a.transitionOverride);const c=r?()=>Promise.all(l1(t,r,a)):()=>Promise.resolve(),u=t.variantChildren&&t.variantChildren.size?(g=0)=>{const{delayChildren:y=0,staggerChildren:v,staggerDirection:x}=o;return jC(t,e,g,y,v,x,a)}:()=>Promise.resolve(),{when:f}=o;if(f){const[g,y]=f==="beforeChildren"?[c,u]:[u,c];return g().then(()=>y())}else return Promise.all([c(),u(a.delay)])}function jC(t,e,a=0,r=0,o=0,c=1,u){const f=[];for(const m of t.variantChildren)m.notify("AnimationStart",e),f.push(Jh(m,e,{...u,delay:a+(typeof r=="function"?0:r)+n1(t.variantChildren,m,r,o,c)}).then(()=>m.notify("AnimationComplete",e)));return Promise.all(f)}function _C(t,e,a={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(c=>Jh(t,c,a));r=Promise.all(o)}else if(typeof e=="string")r=Jh(t,e,a);else{const o=typeof e=="function"?wa(t,e,a.custom):e;r=Promise.all(l1(t,o,a))}return r.then(()=>{t.notify("AnimationComplete",e)})}const kC={test:t=>t==="auto",parse:t=>t},c1=t=>e=>e.test(t),u1=[Er,ae,zn,ri,JT,WT,kC],hv=t=>u1.find(c1(t));function TC(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||wx(t):!0}const EC=new Set(["brightness","contrast","saturate","opacity"]);function CC(t){const[e,a]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=a.match(Of)||[];if(!r)return t;const o=a.replace(r,"");let c=EC.has(e)?1:0;return r!==a&&(c*=100),e+"("+c+o+")"}const AC=/\b([a-z-]*)\(.*?\)/gu,Qh={...jn,getAnimatableNone:t=>{const e=t.match(AC);return e?e.map(CC).join(" "):t}},Zh={...jn,getAnimatableNone:t=>{const e=jn.parse(t);return jn.createTransformer(t)(e.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},fv={...Er,transform:Math.round},RC={rotate:ri,pathRotation:ri,rotateX:ri,rotateY:ri,rotateZ:ri,scale:Ml,scaleX:Ml,scaleY:Ml,scaleZ:Ml,skew:ri,skewX:ri,skewY:ri,distance:ae,translateX:ae,translateY:ae,translateZ:ae,x:ae,y:ae,z:ae,perspective:ae,transformPerspective:ae,opacity:Ws,originX:Zy,originY:Zy,originZ:ae},uc={borderWidth:ae,borderTopWidth:ae,borderRightWidth:ae,borderBottomWidth:ae,borderLeftWidth:ae,borderRadius:ae,borderTopLeftRadius:ae,borderTopRightRadius:ae,borderBottomRightRadius:ae,borderBottomLeftRadius:ae,width:ae,maxWidth:ae,height:ae,maxHeight:ae,top:ae,right:ae,bottom:ae,left:ae,inset:ae,insetBlock:ae,insetBlockStart:ae,insetBlockEnd:ae,insetInline:ae,insetInlineStart:ae,insetInlineEnd:ae,padding:ae,paddingTop:ae,paddingRight:ae,paddingBottom:ae,paddingLeft:ae,paddingBlock:ae,paddingBlockStart:ae,paddingBlockEnd:ae,paddingInline:ae,paddingInlineStart:ae,paddingInlineEnd:ae,margin:ae,marginTop:ae,marginRight:ae,marginBottom:ae,marginLeft:ae,marginBlock:ae,marginBlockStart:ae,marginBlockEnd:ae,marginInline:ae,marginInlineStart:ae,marginInlineEnd:ae,fontSize:ae,backgroundPositionX:ae,backgroundPositionY:ae,...RC,zIndex:fv,fillOpacity:Ws,strokeOpacity:Ws,numOctaves:fv},NC={...uc,color:lt,backgroundColor:lt,outlineColor:lt,fill:lt,stroke:lt,borderColor:lt,borderTopColor:lt,borderRightColor:lt,borderBottomColor:lt,borderLeftColor:lt,filter:Qh,WebkitFilter:Qh,mask:Zh,WebkitMask:Zh},d1=t=>NC[t],OC=new Set([Qh,Zh]);function h1(t,e){let a=d1(t);return OC.has(a)||(a=jn),a.getAnimatableNone?a.getAnimatableNone(e):void 0}const DC=new Set(["auto","none","0"]);function MC(t,e,a){let r=0,o;for(;r<t.length&&!o;){const c=t[r];typeof c=="string"&&!DC.has(c)&&xr(c).values.length&&(o=t[r]),r++}if(o&&a)for(const c of e)t[c]=h1(a,o)}class LC extends Uf{constructor(e,a,r,o,c){super(e,a,r,o,c,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:a,name:r}=this;if(!a||!a.current)return;super.readKeyframes();for(let y=0;y<e.length;y++){let v=e[y];if(typeof v=="string"&&(v=v.trim(),Nf(v))){const x=a1(v,a.current);x!==void 0&&(e[y]=x),y===e.length-1&&(this.finalKeyframe=v)}}if(this.resolveNoneKeyframes(),!r1.has(r)||e.length!==2)return;const[o,c]=e,u=hv(o),f=hv(c),m=Qy(o),g=Qy(c);if(m!==g&&Vi[r]){this.needsMeasurement=!0;return}if(u!==f)if(ov(u)&&ov(f))for(let y=0;y<e.length;y++){const v=e[y];typeof v=="string"&&(e[y]=parseFloat(v))}else Vi[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:a}=this,r=[];for(let o=0;o<e.length;o++)(e[o]===null||TC(e[o]))&&r.push(o);r.length&&MC(e,r,a)}measureInitialState(){const{element:e,unresolvedKeyframes:a,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Vi[r](e.measureViewportBox(),window.getComputedStyle(e.current)),a[0]=this.measuredOrigin;const o=a[a.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var f;const{element:e,name:a,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const o=e.getValue(a);o&&o.jump(this.measuredOrigin,!1);const c=r.length-1,u=r[c];r[c]=Vi[a](e.measureViewportBox(),window.getComputedStyle(e.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),(f=this.removedTransforms)!=null&&f.length&&this.removedTransforms.forEach(([m,g])=>{e.getValue(m).set(g)}),this.resolveNoneKeyframes()}}function f1(t,e,a){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let r=document;const o=(a==null?void 0:a[t])??r.querySelectorAll(t);return o?Array.from(o):[]}return Array.from(t).filter(r=>r!=null)}const ef=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function $l(t){return xx(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:$f}=Mx(queueMicrotask,!1),bn={x:!1,y:!1};function m1(){return bn.x||bn.y}function zC(t){return t==="x"||t==="y"?bn[t]?null:(bn[t]=!0,()=>{bn[t]=!1}):bn.x||bn.y?null:(bn.x=bn.y=!0,()=>{bn.x=bn.y=!1})}function p1(t,e){const a=f1(t),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[a,o,()=>r.abort()]}function UC(t){return!(t.pointerType==="touch"||m1())}function BC(t,e,a={}){const[r,o,c]=p1(t,a);return r.forEach(u=>{let f=!1,m=!1,g;const y=()=>{u.removeEventListener("pointerleave",S)},v=E=>{g&&(g(E),g=void 0),y()},x=E=>{f=!1,window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",x),m&&(m=!1,v(E))},w=()=>{f=!0,window.addEventListener("pointerup",x,o),window.addEventListener("pointercancel",x,o)},S=E=>{if(E.pointerType!=="touch"){if(f){m=!0;return}v(E)}},T=E=>{if(!UC(E))return;m=!1;const k=e(u,E);typeof k=="function"&&(g=k,u.addEventListener("pointerleave",S,o))};u.addEventListener("pointerenter",T,o),u.addEventListener("pointerdown",w,o)}),c}const g1=(t,e)=>e?t===e?!0:g1(t,e.parentElement):!1,If=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,PC=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function VC(t){return PC.has(t.tagName)||t.isContentEditable===!0}const HC=new Set(["INPUT","SELECT","TEXTAREA"]);function $C(t){return HC.has(t.tagName)||t.isContentEditable===!0}const Il=new WeakSet;function mv(t){return e=>{e.key==="Enter"&&t(e)}}function uh(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const IC=(t,e)=>{const a=t.currentTarget;if(!a)return;const r=mv(()=>{if(Il.has(a))return;uh(a,"down");const o=mv(()=>{uh(a,"up")}),c=()=>uh(a,"cancel");a.addEventListener("keyup",o,e),a.addEventListener("blur",c,e)});a.addEventListener("keydown",r,e),a.addEventListener("blur",()=>a.removeEventListener("keydown",r),e)};function pv(t){return If(t)&&!m1()}const gv=new WeakSet;function qC(t,e,a={}){const[r,o,c]=p1(t,a),u=f=>{const m=f.currentTarget;if(!pv(f)||gv.has(f))return;Il.add(m),a.stopPropagation&&gv.add(f);const g=e(m,f),y=(w,S)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",x),Il.has(m)&&Il.delete(m),pv(w)&&typeof g=="function"&&g(w,{success:S})},v=w=>{y(w,m===window||m===document||a.useGlobalTarget||g1(m,w.target))},x=w=>{y(w,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",x,o)};return r.forEach(f=>{(a.useGlobalTarget?window:f).addEventListener("pointerdown",u,o),$l(f)&&(f.addEventListener("focus",g=>IC(g,o)),!VC(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),c}function qf(t){return xx(t)&&"ownerSVGElement"in t}const ql=new WeakMap;let Ui;const y1=(t,e,a)=>(r,o)=>o&&o[0]?o[0][t+"Size"]:qf(r)&&"getBBox"in r?r.getBBox()[e]:r[a],FC=y1("inline","width","offsetWidth"),GC=y1("block","height","offsetHeight");function KC({target:t,borderBoxSize:e}){var a;(a=ql.get(t))==null||a.forEach(r=>{r(t,{get width(){return FC(t,e)},get height(){return GC(t,e)}})})}function YC(t){t.forEach(KC)}function XC(){typeof ResizeObserver>"u"||(Ui=new ResizeObserver(YC))}function WC(t,e){Ui||XC();const a=f1(t);return a.forEach(r=>{let o=ql.get(r);o||(o=new Set,ql.set(r,o)),o.add(e),Ui==null||Ui.observe(r)}),()=>{a.forEach(r=>{const o=ql.get(r);o==null||o.delete(e),o!=null&&o.size||Ui==null||Ui.unobserve(r)})}}const Fl=new Set;let yr;function JC(){yr=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};Fl.forEach(e=>e(t))},window.addEventListener("resize",yr)}function QC(t){return Fl.add(t),yr||JC(),()=>{Fl.delete(t),!Fl.size&&typeof yr=="function"&&(window.removeEventListener("resize",yr),yr=void 0)}}function yv(t,e){return typeof t=="function"?QC(t):WC(t,e)}function ZC(t){return qf(t)&&t.tagName==="svg"}const eA=[...u1,lt,jn],tA=t=>eA.find(c1(t)),vv=()=>({translate:0,scale:1,origin:0,originPoint:0}),vr=()=>({x:vv(),y:vv()}),bv=()=>({min:0,max:0}),ut=()=>({x:bv(),y:bv()}),nA=new WeakMap;function kc(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Js(t){return typeof t=="string"||Array.isArray(t)}const Ff=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Gf=["initial",...Ff];function Tc(t){return kc(t.animate)||Gf.some(e=>Js(t[e]))}function v1(t){return!!(Tc(t)||t.variants)}function iA(t,e,a){for(const r in e){const o=e[r],c=a[r];if(St(o))t.addValue(r,o);else if(St(c))t.addValue(r,wr(o,{owner:t}));else if(c!==o)if(t.hasValue(r)){const u=t.getValue(r);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=t.getStaticValue(r);t.addValue(r,wr(u!==void 0?u:o,{owner:t}))}}for(const r in a)e[r]===void 0&&t.removeValue(r);return e}const tf={current:null},b1={current:!1},aA=typeof window<"u";function rA(){if(b1.current=!0,!!aA)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>tf.current=t.matches;t.addEventListener("change",e),e()}else tf.current=!1}const xv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let dc={};function x1(t){dc=t}function sA(){return dc}class oA{scrapeMotionValuesFromProps(e,a,r){return{}}constructor({parent:e,props:a,presenceContext:r,reducedMotionConfig:o,skipAnimations:c,blockInitialAnimation:u,visualState:f},m={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Uf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=Tt.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,Ve.render(this.render,!1,!0))};const{latestValues:g,renderState:y}=f;this.latestValues=g,this.baseTarget={...g},this.initialValues=a.initial?{...g}:{},this.renderState=y,this.parent=e,this.props=a,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.skipAnimationsConfig=c,this.options=m,this.blockInitialAnimation=!!u,this.isControllingVariants=Tc(a),this.isVariantNode=v1(a),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...x}=this.scrapeMotionValuesFromProps(a,{},this);for(const w in x){const S=x[w];g[w]!==void 0&&St(S)&&S.set(g[w])}}mount(e){var a,r;if(this.hasBeenMounted)for(const o in this.initialValues)(a=this.values.get(o))==null||a.jump(this.initialValues[o]),this.latestValues[o]=this.initialValues[o];this.current=e,nA.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,c)=>this.bindToMotionValue(c,o)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(b1.current||rA(),this.shouldReduceMotion=tf.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),$i(this.notifyUpdate),$i(this.render),this.valueSubscriptions.forEach(a=>a()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const a in this.events)this.events[a].clear();for(const a in this.features){const r=this.features[a];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,a){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),a.accelerate&&t1.has(e)&&this.current instanceof HTMLElement){const{factory:u,keyframes:f,times:m,ease:g,duration:y}=a.accelerate,v=new Zx({element:this.current,name:e,keyframes:f,times:m,ease:g,duration:Xt(y)}),x=u(v);this.valueSubscriptions.set(e,()=>{x(),v.cancel()});return}const r=Ar.has(e);r&&this.onBindTransform&&this.onBindTransform();const o=a.on("change",u=>{this.latestValues[e]=u,this.props.onUpdate&&Ve.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let c;typeof window<"u"&&window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,e,a)),this.valueSubscriptions.set(e,()=>{o(),c&&c()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in dc){const a=dc[e];if(!a)continue;const{isEnabled:r,Feature:o}=a;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const c=this.features[e];c.isMounted?c.update():(c.mount(),c.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ut()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,a){this.latestValues[e]=a}update(e,a){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=a;for(let r=0;r<xv.length;r++){const o=xv[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const c="on"+o,u=e[c];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=iA(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const a=this.getClosestVariantNode();if(a)return a.variantChildren&&a.variantChildren.add(e),()=>a.variantChildren.delete(e)}addValue(e,a){const r=this.values.get(e);a!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,a),this.values.set(e,a),this.latestValues[e]=a.get())}removeValue(e){this.values.delete(e);const a=this.valueSubscriptions.get(e);a&&(a(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,a){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&a!==void 0&&(r=wr(a===null?void 0:a,{owner:this}),this.addValue(e,r)),r}readValue(e,a){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(bx(r)||wx(r))?r=parseFloat(r):!tA(r)&&jn.test(a)&&(r=h1(e,a)),this.setBaseTarget(e,St(r)?r.get():r)),St(r)?r.get():r}setBaseTarget(e,a){this.baseTarget[e]=a}getBaseTarget(e){var c;const{initial:a}=this.props;let r;if(typeof a=="string"||typeof a=="object"){const u=Vf(this.props,a,(c=this.presenceContext)==null?void 0:c.custom);u&&(r=u[e])}if(a&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!St(o)?o:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,a){return this.events[e]||(this.events[e]=new Cf),this.events[e].add(a)}notify(e,...a){this.events[e]&&this.events[e].notify(...a)}scheduleRenderMicrotask(){$f.render(this.render)}}class w1 extends oA{constructor(){super(...arguments),this.KeyframeResolver=LC}sortInstanceNodePosition(e,a){return e.compareDocumentPosition(a)&2?1:-1}getBaseTargetFromProps(e,a){const r=e.style;return r?r[a]:void 0}removeValueFromRenderState(e,{vars:a,style:r}){delete a[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;St(e)&&(this.childSubscription=e.on("change",a=>{this.current&&(this.current.textContent=`${a}`)}))}}class Ii{constructor(e){this.isMounted=!1,this.node=e}update(){}}function S1({top:t,left:e,right:a,bottom:r}){return{x:{min:e,max:a},y:{min:t,max:r}}}function lA({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function cA(t,e){if(!e)return t;const a=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:a.y,left:a.x,bottom:r.y,right:r.x}}function dh(t){return t===void 0||t===1}function nf({scale:t,scaleX:e,scaleY:a}){return!dh(t)||!dh(e)||!dh(a)}function fa(t){return nf(t)||j1(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function j1(t){return wv(t.x)||wv(t.y)}function wv(t){return t&&t!=="0%"}function hc(t,e,a){const r=t-a,o=e*r;return a+o}function Sv(t,e,a,r,o){return o!==void 0&&(t=hc(t,o,r)),hc(t,a,r)+e}function af(t,e=0,a=1,r,o){t.min=Sv(t.min,e,a,r,o),t.max=Sv(t.max,e,a,r,o)}function _1(t,{x:e,y:a}){af(t.x,e.translate,e.scale,e.originPoint),af(t.y,a.translate,a.scale,a.originPoint)}const jv=.999999999999,_v=1.0000000000001;function uA(t,e,a,r=!1){var f;const o=a.length;if(!o)return;e.x=e.y=1;let c,u;for(let m=0;m<o;m++){c=a[m],u=c.projectionDelta;const{visualElement:g}=c.options;g&&g.props.style&&g.props.style.display==="contents"||(r&&c.options.layoutScroll&&c.scroll&&c!==c.root&&(Ln(t.x,-c.scroll.offset.x),Ln(t.y,-c.scroll.offset.y)),u&&(e.x*=u.x.scale,e.y*=u.y.scale,_1(t,u)),r&&fa(c.latestValues)&&Gl(t,c.latestValues,(f=c.layout)==null?void 0:f.layoutBox))}e.x<_v&&e.x>jv&&(e.x=1),e.y<_v&&e.y>jv&&(e.y=1)}function Ln(t,e){t.min+=e,t.max+=e}function kv(t,e,a,r,o=.5){const c=Pe(t.min,t.max,o);af(t,e,a,c,r)}function Tv(t,e){return typeof t=="string"?parseFloat(t)/100*(e.max-e.min):t}function Gl(t,e,a){const r=a??t;kv(t.x,Tv(e.x,r.x),e.scaleX,e.scale,e.originX),kv(t.y,Tv(e.y,r.y),e.scaleY,e.scale,e.originY)}function k1(t,e){return S1(cA(t.getBoundingClientRect(),e))}function dA(t,e,a){const r=k1(t,a),{scroll:o}=e;return o&&(Ln(r.x,o.offset.x),Ln(r.y,o.offset.y)),r}const hA={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},fA=Cr.length;function mA(t,e,a){let r="",o=!0;for(let u=0;u<fA;u++){const f=Cr[u],m=t[f];if(m===void 0)continue;let g=!0;if(typeof m=="number")g=m===(f.startsWith("scale")?1:0);else{const y=parseFloat(m);g=f.startsWith("scale")?y===1:y===0}if(!g||a){const y=ef(m,uc[f]);if(!g){o=!1;const v=hA[f]||f;r+=`${v}(${y}) `}a&&(e[f]=y)}}const c=t.pathRotation;return c&&(o=!1,r+=`rotate(${ef(c,uc.pathRotation)}) `),r=r.trim(),a?r=a(e,o?"":r):o&&(r="none"),r}function Kf(t,e,a){const{style:r,vars:o,transformOrigin:c}=t;let u=!1,f=!1;for(const m in e){const g=e[m];if(Ar.has(m)){u=!0;continue}else if(zx(m)){o[m]=g;continue}else{const y=ef(g,uc[m]);m.startsWith("origin")?(f=!0,c[m]=y):r[m]=y}}if(e.transform||(u||a?r.transform=mA(e,t.transform,a):r.transform&&(r.transform="none")),f){const{originX:m="50%",originY:g="50%",originZ:y=0}=c;r.transformOrigin=`${m} ${g} ${y}`}}function T1(t,{style:e,vars:a},r,o){const c=t.style;let u;for(u in e)c[u]=e[u];o==null||o.applyProjectionStyles(c,r);for(u in a)c.setProperty(u,a[u])}function Ev(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Ts={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(ae.test(t))t=parseFloat(t);else return t;const a=Ev(t,e.target.x),r=Ev(t,e.target.y);return`${a}% ${r}%`}},pA={correct:(t,{treeScale:e,projectionDelta:a})=>{const r=t,o=jn.parse(t);if(o.length>5)return r;const c=jn.createTransformer(t),u=typeof o[0]!="number"?1:0,f=a.x.scale*e.x,m=a.y.scale*e.y;o[0+u]/=f,o[1+u]/=m;const g=Pe(f,m,.5);return typeof o[2+u]=="number"&&(o[2+u]/=g),typeof o[3+u]=="number"&&(o[3+u]/=g),c(o)}},rf={borderRadius:{...Ts,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ts,borderTopRightRadius:Ts,borderBottomLeftRadius:Ts,borderBottomRightRadius:Ts,boxShadow:pA};function E1(t,{layout:e,layoutId:a}){return Ar.has(t)||t.startsWith("origin")||(e||a!==void 0)&&(!!rf[t]||t==="opacity")}function Yf(t,e,a){var u;const r=t.style,o=e==null?void 0:e.style,c={};if(!r)return c;for(const f in r)(St(r[f])||o&&St(o[f])||E1(f,t)||((u=a==null?void 0:a.getValue(f))==null?void 0:u.liveStyle)!==void 0)&&(c[f]=r[f]);return c}function gA(t){return window.getComputedStyle(t)}class yA extends w1{constructor(){super(...arguments),this.type="html",this.renderInstance=T1}readValueFromInstance(e,a){var r;if(Ar.has(a))return(r=this.projection)!=null&&r.isProjecting?Ih(a):UE(e,a);{const o=gA(e),c=(zx(a)?o.getPropertyValue(a):o[a])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(e,{transformPagePoint:a}){return k1(e,a)}build(e,a,r){Kf(e,a,r.transformTemplate)}scrapeMotionValuesFromProps(e,a,r){return Yf(e,a,r)}}const vA={offset:"stroke-dashoffset",array:"stroke-dasharray"},bA={offset:"strokeDashoffset",array:"strokeDasharray"};function xA(t,e,a=1,r=0,o=!0){t.pathLength=1;const c=o?vA:bA;t[c.offset]=`${-r}`,t[c.array]=`${e} ${a}`}const wA=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function C1(t,{attrX:e,attrY:a,attrScale:r,pathLength:o,pathSpacing:c=1,pathOffset:u=0,...f},m,g,y){if(Kf(t,f,g),m){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:v,style:x}=t;v.transform&&(x.transform=v.transform,delete v.transform),(x.transform||v.transformOrigin)&&(x.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),x.transform&&(x.transformBox=(y==null?void 0:y.transformBox)??"fill-box",delete v.transformBox);for(const w of wA)v[w]!==void 0&&(x[w]=v[w],delete v[w]);e!==void 0&&(v.x=e),a!==void 0&&(v.y=a),r!==void 0&&(v.scale=r),o!==void 0&&xA(v,o,c,u,!1)}const A1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),R1=t=>typeof t=="string"&&t.toLowerCase()==="svg";function SA(t,e,a,r){T1(t,e,void 0,r);for(const o in e.attrs)t.setAttribute(A1.has(o)?o:Hf(o),e.attrs[o])}function N1(t,e,a){const r=Yf(t,e,a);for(const o in t)if(St(t[o])||St(e[o])){const c=Cr.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[c]=t[o]}return r}class jA extends w1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ut}getBaseTargetFromProps(e,a){return e[a]}readValueFromInstance(e,a){if(Ar.has(a)){const r=d1(a);return r&&r.default||0}return a=A1.has(a)?a:Hf(a),e.getAttribute(a)}scrapeMotionValuesFromProps(e,a,r){return N1(e,a,r)}build(e,a,r){C1(e,a,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,a,r,o){SA(e,a,r,o)}mount(e){this.isSVGTag=R1(e.tagName),super.mount(e)}}const _A=Gf.length;function O1(t){if(!t)return;if(!t.isControllingVariants){const a=t.parent?O1(t.parent)||{}:{};return t.props.initial!==void 0&&(a.initial=t.props.initial),a}const e={};for(let a=0;a<_A;a++){const r=Gf[a],o=t.props[r];(Js(o)||o===!1)&&(e[r]=o)}return e}function D1(t,e){if(!Array.isArray(e))return!1;const a=e.length;if(a!==t.length)return!1;for(let r=0;r<a;r++)if(e[r]!==t[r])return!1;return!0}const kA=[...Ff].reverse(),TA=Ff.length;function EA(t){return e=>Promise.all(e.map(({animation:a,options:r})=>_C(t,a,r)))}function CA(t){let e=EA(t),a=Cv(),r=!0,o=!1;const c=g=>(y,v)=>{var w;const x=wa(t,v,g==="exit"?(w=t.presenceContext)==null?void 0:w.custom:void 0);if(x){const{transition:S,transitionEnd:T,...E}=x;y={...y,...E,...T}}return y};function u(g){e=g(t)}function f(g){const{props:y}=t,v=O1(t.parent)||{},x=[],w=new Set;let S={},T=1/0;for(let k=0;k<TA;k++){const O=kA[k],A=a[O],B=y[O]!==void 0?y[O]:v[O],G=Js(B),W=O===g?A.isActive:null;W===!1&&(T=k);let q=B===v[O]&&B!==y[O]&&G;if(q&&(r||o)&&t.manuallyAnimateOnMount&&(q=!1),A.protectedKeys={...S},!A.isActive&&W===null||!B&&!A.prevProp||kc(B)||typeof B=="boolean")continue;if(O==="exit"&&A.isActive&&W!==!0){A.prevResolvedValues&&(S={...S,...A.prevResolvedValues});continue}const X=AA(A.prevProp,B);let M=X||O===g&&A.isActive&&!q&&G||k>T&&G,Y=!1;const K=Array.isArray(B)?B:[B];let oe=K.reduce(c(O),{});W===!1&&(oe={});const{prevResolvedValues:je={}}=A,Ce={...je,...oe},ge=te=>{M=!0,w.has(te)&&(Y=!0,w.delete(te)),A.needsAnimating[te]=!0;const pe=t.getValue(te);pe&&(pe.liveStyle=!1)};for(const te in Ce){const pe=oe[te],xe=je[te];if(S.hasOwnProperty(te))continue;let R=!1;Xh(pe)&&Xh(xe)?R=!D1(pe,xe)||X:R=pe!==xe,R?pe!=null?ge(te):w.add(te):pe!==void 0&&w.has(te)?ge(te):A.protectedKeys[te]=!0}A.prevProp=B,A.prevResolvedValues=oe,A.isActive&&(S={...S,...oe}),(r||o)&&t.blockInitialAnimation&&(M=!1);const V=q&&X;M&&(!V||Y)&&x.push(...K.map(te=>{const pe={type:O};if(typeof te=="string"&&(r||o)&&!V&&t.manuallyAnimateOnMount&&t.parent){const{parent:xe}=t,R=wa(xe,te);if(xe.enteringChildren&&R){const{delayChildren:I}=R.transition||{};pe.delay=n1(xe.enteringChildren,t,I)}}return{animation:te,options:pe}}))}if(w.size){const k={};if(typeof y.initial!="boolean"){const O=wa(t,Array.isArray(y.initial)?y.initial[0]:y.initial);O&&O.transition&&(k.transition=O.transition)}w.forEach(O=>{const A=t.getBaseTarget(O),B=t.getValue(O);B&&(B.liveStyle=!0),k[O]=A??null}),x.push({animation:k})}let E=!!x.length;return r&&(y.initial===!1||y.initial===y.animate)&&!t.manuallyAnimateOnMount&&(E=!1),r=!1,o=!1,E?e(x):Promise.resolve()}function m(g,y){var x;if(a[g].isActive===y)return Promise.resolve();(x=t.variantChildren)==null||x.forEach(w=>{var S;return(S=w.animationState)==null?void 0:S.setActive(g,y)}),a[g].isActive=y;const v=f(g);for(const w in a)a[w].protectedKeys={};return v}return{animateChanges:f,setActive:m,setAnimateFunction:u,getState:()=>a,reset:()=>{a=Cv(),o=!0}}}function AA(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!D1(e,t):!1}function ua(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Cv(){return{animate:ua(!0),whileInView:ua(),whileHover:ua(),whileTap:ua(),whileDrag:ua(),whileFocus:ua(),exit:ua()}}function sf(t,e){t.min=e.min,t.max=e.max}function yn(t,e){sf(t.x,e.x),sf(t.y,e.y)}function Av(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const M1=1e-4,RA=1-M1,NA=1+M1,L1=.01,OA=0-L1,DA=0+L1;function Et(t){return t.max-t.min}function MA(t,e,a){return Math.abs(t-e)<=a}function Rv(t,e,a,r=.5){t.origin=r,t.originPoint=Pe(e.min,e.max,t.origin),t.scale=Et(a)/Et(e),t.translate=Pe(a.min,a.max,t.origin)-t.originPoint,(t.scale>=RA&&t.scale<=NA||isNaN(t.scale))&&(t.scale=1),(t.translate>=OA&&t.translate<=DA||isNaN(t.translate))&&(t.translate=0)}function Ps(t,e,a,r){Rv(t.x,e.x,a.x,r?r.originX:void 0),Rv(t.y,e.y,a.y,r?r.originY:void 0)}function Nv(t,e,a,r=0){const o=r?Pe(a.min,a.max,r):a.min;t.min=o+e.min,t.max=t.min+Et(e)}function LA(t,e,a,r){Nv(t.x,e.x,a.x,r==null?void 0:r.x),Nv(t.y,e.y,a.y,r==null?void 0:r.y)}function Ov(t,e,a,r=0){const o=r?Pe(a.min,a.max,r):a.min;t.min=e.min-o,t.max=t.min+Et(e)}function fc(t,e,a,r){Ov(t.x,e.x,a.x,r==null?void 0:r.x),Ov(t.y,e.y,a.y,r==null?void 0:r.y)}function Dv(t,e,a,r,o){return t-=e,t=hc(t,1/a,r),o!==void 0&&(t=hc(t,1/o,r)),t}function zA(t,e=0,a=1,r=.5,o,c=t,u=t){if(zn.test(e)&&(e=parseFloat(e),e=Pe(u.min,u.max,e/100)-u.min),typeof e!="number")return;let f=Pe(c.min,c.max,r);t===c&&(f-=e),t.min=Dv(t.min,e,a,f,o),t.max=Dv(t.max,e,a,f,o)}function Mv(t,e,[a,r,o],c,u){zA(t,e[a],e[r],e[o],e.scale,c,u)}const UA=["x","scaleX","originX"],BA=["y","scaleY","originY"];function Lv(t,e,a,r){Mv(t.x,e,UA,a?a.x:void 0,r?r.x:void 0),Mv(t.y,e,BA,a?a.y:void 0,r?r.y:void 0)}function zv(t){return t.translate===0&&t.scale===1}function z1(t){return zv(t.x)&&zv(t.y)}function Uv(t,e){return t.min===e.min&&t.max===e.max}function PA(t,e){return Uv(t.x,e.x)&&Uv(t.y,e.y)}function Bv(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function U1(t,e){return Bv(t.x,e.x)&&Bv(t.y,e.y)}function Pv(t){return Et(t.x)/Et(t.y)}function Vv(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function On(t){return[t("x"),t("y")]}function VA(t,e,a){let r="";const o=t.x.translate/e.x,c=t.y.translate/e.y,u=(a==null?void 0:a.z)||0;if((o||c||u)&&(r=`translate3d(${o}px, ${c}px, ${u}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),a){const{transformPerspective:g,rotate:y,pathRotation:v,rotateX:x,rotateY:w,skewX:S,skewY:T}=a;g&&(r=`perspective(${g}px) ${r}`),y&&(r+=`rotate(${y}deg) `),v&&(r+=`rotate(${v}deg) `),x&&(r+=`rotateX(${x}deg) `),w&&(r+=`rotateY(${w}deg) `),S&&(r+=`skewX(${S}deg) `),T&&(r+=`skewY(${T}deg) `)}const f=t.x.scale*e.x,m=t.y.scale*e.y;return(f!==1||m!==1)&&(r+=`scale(${f}, ${m})`),r||"none"}const B1=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],HA=B1.length,Hv=t=>typeof t=="string"?parseFloat(t):t,$v=t=>typeof t=="number"||ae.test(t);function $A(t,e,a,r,o,c){o?(t.opacity=Pe(0,a.opacity??1,IA(r)),t.opacityExit=Pe(e.opacity??1,0,qA(r))):c&&(t.opacity=Pe(e.opacity??1,a.opacity??1,r));for(let u=0;u<HA;u++){const f=B1[u];let m=Iv(e,f),g=Iv(a,f);if(m===void 0&&g===void 0)continue;m||(m=0),g||(g=0),m===0||g===0||$v(m)===$v(g)?(t[f]=Math.max(Pe(Hv(m),Hv(g),r),0),(zn.test(g)||zn.test(m))&&(t[f]+="%")):t[f]=g}(e.rotate||a.rotate)&&(t.rotate=Pe(e.rotate||0,a.rotate||0,r))}function Iv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const IA=P1(0,.5,Rx),qA=P1(.5,.95,hn);function P1(t,e,a){return r=>r<t?0:r>e?1:a(Xs(t,e,r))}function FA(t,e,a){const r=St(t)?t:wr(t);return r.start(Pf("",r,e,a)),r.animation}function Qs(t,e,a,r={passive:!0}){return t.addEventListener(e,a,r),()=>t.removeEventListener(e,a)}const GA=(t,e)=>t.depth-e.depth;class KA{constructor(){this.children=[],this.isDirty=!1}add(e){Tf(this.children,e),this.isDirty=!0}remove(e){rc(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(GA),this.isDirty=!1,this.children.forEach(e)}}function YA(t,e){const a=Tt.now(),r=({timestamp:o})=>{const c=o-a;c>=e&&($i(r),t(c-e))};return Ve.setup(r,!0),()=>$i(r)}function Kl(t){return St(t)?t.get():t}class XA{constructor(){this.members=[]}add(e){Tf(this.members,e);for(let a=this.members.length-1;a>=0;a--){const r=this.members[a];if(r===e||r===this.lead||r===this.prevLead)continue;const o=r.instance;(!o||o.isConnected===!1)&&!r.snapshot&&(rc(this.members,r),r.unmount())}e.scheduleRender()}remove(e){if(rc(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const a=this.members[this.members.length-1];a&&this.promote(a)}}relegate(e){var a;for(let r=this.members.indexOf(e)-1;r>=0;r--){const o=this.members[r];if(o.isPresent!==!1&&((a=o.instance)==null?void 0:a.isConnected)!==!1)return this.promote(o),!0}return!1}promote(e,a){var o;const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.updateSnapshot(),e.scheduleRender();const{layoutDependency:c}=r.options,{layoutDependency:u}=e.options;(c===void 0||c!==u)&&(e.resumeFrom=r,a&&(r.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),(o=e.root)!=null&&o.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var a,r,o,c,u;(r=(a=e.options).onExitComplete)==null||r.call(a),(u=(o=e.resumingFrom)==null?void 0:(c=o.options).onExitComplete)==null||u.call(c)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const Yl={hasAnimatedSinceResize:!0,hasEverUpdated:!1},hh=["","X","Y","Z"],WA=1e3;let JA=0;function fh(t,e,a,r){const{latestValues:o}=e;o[t]&&(a[t]=o[t],e.setStaticValue(t,0),r&&(r[t]=0))}function V1(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const a=o1(e);if(window.MotionHasOptimisedAnimation(a,"transform")){const{layout:o,layoutId:c}=t.options;window.MotionCancelOptimisedAnimation(a,"transform",Ve,!(o||c))}const{parent:r}=t;r&&!r.hasCheckedOptimisedAppear&&V1(r)}function H1({attachResizeListener:t,defaultParent:e,measureScroll:a,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(u={},f=e==null?void 0:e()){this.id=JA++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(e4),this.nodes.forEach(s4),this.nodes.forEach(o4),this.nodes.forEach(t4)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new KA)}addEventListener(u,f){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new Cf),this.eventHandlers.get(u).add(f)}notifyListeners(u,...f){const m=this.eventHandlers.get(u);m&&m.notify(...f)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=qf(u)&&!ZC(u),this.instance=u;const{layoutId:f,layout:m,visualElement:g}=this.options;if(g&&!g.current&&g.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(m||f)&&(this.isLayoutDirty=!0),t){let y,v=0;const x=()=>this.root.updateBlockedByResize=!1;Ve.read(()=>{v=window.innerWidth}),t(u,()=>{const w=window.innerWidth;w!==v&&(v=w,this.root.updateBlockedByResize=!0,y&&y(),y=YA(x,250),Yl.hasAnimatedSinceResize&&(Yl.hasAnimatedSinceResize=!1,this.nodes.forEach(Gv)))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&g&&(f||m)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:v,hasRelativeLayoutChanged:x,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||g.getDefaultTransition()||h4,{onLayoutAnimationStart:T,onLayoutAnimationComplete:E}=g.getProps(),k=!this.targetLayout||!U1(this.targetLayout,w),O=!v&&x;if(this.options.layoutRoot||this.resumeFrom||O||v&&(k||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const A={...Bf(S,"layout"),onPlay:T,onComplete:E};(g.shouldReduceMotion||this.options.layoutRoot)&&(A.delay=0,A.type=!1),this.startAnimation(A),this.setAnimationOrigin(y,O,A.path)}else v||Gv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),$i(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(l4),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&V1(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const v=this.path[y];v.shouldResetTransform=!0,(typeof v.latestValues.x=="string"||typeof v.latestValues.y=="string")&&(v.isLayoutDirty=!0),v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:f,layout:m}=this.options;if(f===void 0&&!m)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const m=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),m&&this.nodes.forEach(i4),this.nodes.forEach(qv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Fv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(a4),this.nodes.forEach(r4),this.nodes.forEach(QA),this.nodes.forEach(ZA)):this.nodes.forEach(Fv),this.clearAllSnapshots();const f=Tt.now();wt.delta=Un(0,1e3/60,f-wt.timestamp),wt.timestamp=f,wt.isProcessing=!0,ah.update.process(wt),ah.preRender.process(wt),ah.render.process(wt),wt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,$f.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(n4),this.sharedNodes.forEach(c4)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ve.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ve.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Et(this.snapshot.measuredBox.x)&&!Et(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=ut()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(f=!1),f&&this.instance){const m=r(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:m,offset:a(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!z1(this.projectionDelta),m=this.getTransformTemplate(),g=m?m(this.latestValues,""):void 0,y=g!==this.prevTransformTemplateValue;u&&this.instance&&(f||fa(this.latestValues)||y)&&(o(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const f=this.measurePageBox();let m=this.removeElementScroll(f);return u&&(m=this.removeTransform(m)),f4(m),{animationId:this.root.animationId,measuredBox:f,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){var g;const{visualElement:u}=this.options;if(!u)return ut();const f=u.measureViewportBox();if(!(((g=this.scroll)==null?void 0:g.wasRoot)||this.path.some(m4))){const{scroll:y}=this.root;y&&(Ln(f.x,y.offset.x),Ln(f.y,y.offset.y))}return f}removeElementScroll(u){var m;const f=ut();if(yn(f,u),(m=this.scroll)!=null&&m.wasRoot)return f;for(let g=0;g<this.path.length;g++){const y=this.path[g],{scroll:v,options:x}=y;y!==this.root&&v&&x.layoutScroll&&(v.wasRoot&&yn(f,u),Ln(f.x,v.offset.x),Ln(f.y,v.offset.y))}return f}applyTransform(u,f=!1,m){var y,v;const g=m||ut();yn(g,u);for(let x=0;x<this.path.length;x++){const w=this.path[x];!f&&w.options.layoutScroll&&w.scroll&&w!==w.root&&(Ln(g.x,-w.scroll.offset.x),Ln(g.y,-w.scroll.offset.y)),fa(w.latestValues)&&Gl(g,w.latestValues,(y=w.layout)==null?void 0:y.layoutBox)}return fa(this.latestValues)&&Gl(g,this.latestValues,(v=this.layout)==null?void 0:v.layoutBox),g}removeTransform(u){var m;const f=ut();yn(f,u);for(let g=0;g<this.path.length;g++){const y=this.path[g];if(!fa(y.latestValues))continue;let v;y.instance&&(nf(y.latestValues)&&y.updateSnapshot(),v=ut(),yn(v,y.measurePageBox())),Lv(f,y.latestValues,(m=y.snapshot)==null?void 0:m.layoutBox,v)}return fa(this.latestValues)&&Lv(f,this.latestValues),f}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==wt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var w;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==f;if(!(u||m&&this.isSharedProjectionDirty||this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:v}=this.options;if(!this.layout||!(y||v))return;this.resolvedRelativeTargetAt=wt.timestamp;const x=this.getClosestProjectingParent();x&&this.linkedParentVersion!==x.layoutVersion&&!x.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&x&&x.layout?this.createRelativeTarget(x,this.layout.layoutBox,x.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ut(),this.targetWithTransforms=ut()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),LA(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):yn(this.target,this.layout.layoutBox),_1(this.target,this.targetDelta)):yn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?this.createRelativeTarget(x,this.target,x.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||nf(this.parent.latestValues)||j1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(u,f,m){this.relativeParent=u,this.linkedParentVersion=u.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ut(),this.relativeTargetOrigin=ut(),fc(this.relativeTargetOrigin,f,m,this.options.layoutAnchor||void 0),yn(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var S;const u=this.getLead(),f=!!this.resumingFrom||this!==u;let m=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(m=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===wt.timestamp&&(m=!1),m)return;const{layout:g,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||y))return;yn(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,x=this.treeScale.y;uA(this.layoutCorrected,this.treeScale,this.path,f),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=ut());const{target:w}=u;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Av(this.prevProjectionDelta.x,this.projectionDelta.x),Av(this.prevProjectionDelta.y,this.projectionDelta.y)),Ps(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==x||!Vv(this.projectionDelta.x,this.prevProjectionDelta.x)||!Vv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var f;if((f=this.options.visualElement)==null||f.scheduleRender(),u){const m=this.getStack();m&&m.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=vr(),this.projectionDelta=vr(),this.projectionDeltaWithTransform=vr()}setAnimationOrigin(u,f=!1,m){const g=this.snapshot,y=g?g.latestValues:{},v={...this.latestValues},x=vr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const w=ut(),S=g?g.source:void 0,T=this.layout?this.layout.source:void 0,E=S!==T,k=this.getStack(),O=!k||k.members.length<=1,A=!!(E&&!O&&this.options.crossfade===!0&&!this.path.some(d4));this.animationProgress=0;let B;const G=m==null?void 0:m.interpolateProjection(u);this.mixTargetDelta=W=>{const q=W/1e3,X=G==null?void 0:G(q);X?(x.x.translate=X.x,x.x.scale=Pe(u.x.scale,1,q),x.x.origin=u.x.origin,x.x.originPoint=u.x.originPoint,x.y.translate=X.y,x.y.scale=Pe(u.y.scale,1,q),x.y.origin=u.y.origin,x.y.originPoint=u.y.originPoint):(Kv(x.x,u.x,q),Kv(x.y,u.y,q)),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(fc(w,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),u4(this.relativeTarget,this.relativeTargetOrigin,w,q),B&&PA(this.relativeTarget,B)&&(this.isProjectionDirty=!1),B||(B=ut()),yn(B,this.relativeTarget)),E&&(this.animationValues=v,$A(v,y,this.latestValues,q,A,O)),X&&X.rotate!==void 0&&(this.animationValues||(this.animationValues=v),this.animationValues.pathRotation=X.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=q},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){var f,m,g;this.notifyListeners("animationStart"),(f=this.currentAnimation)==null||f.stop(),(g=(m=this.resumingFrom)==null?void 0:m.currentAnimation)==null||g.stop(),this.pendingAnimation&&($i(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ve.update(()=>{Yl.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=wr(0)),this.motionValue.jump(0,!1),this.currentAnimation=FA(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:y=>{this.mixTargetDelta(y),u.onUpdate&&u.onUpdate(y)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(WA),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:f,target:m,layout:g,latestValues:y}=u;if(!(!f||!m||!g)){if(this!==u&&this.layout&&g&&$1(this.options.animationType,this.layout.layoutBox,g.layoutBox)){m=this.target||ut();const v=Et(this.layout.layoutBox.x);m.x.min=u.target.x.min,m.x.max=m.x.min+v;const x=Et(this.layout.layoutBox.y);m.y.min=u.target.y.min,m.y.max=m.y.min+x}yn(f,m),Gl(f,y),Ps(this.projectionDeltaWithTransform,this.layoutCorrected,f,y)}}registerSharedNode(u,f){this.sharedNodes.has(u)||this.sharedNodes.set(u,new XA),this.sharedNodes.get(u).add(f);const g=f.options.initialPromotionConfig;f.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(f):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var f;const{layoutId:u}=this.options;return u?((f=this.getStack())==null?void 0:f.lead)||this:this}getPrevLead(){var f;const{layoutId:u}=this.options;return u?(f=this.getStack())==null?void 0:f.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:f,preserveFollowOpacity:m}={}){const g=this.getStack();g&&g.promote(this,m),u&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let f=!1;const{latestValues:m}=u;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(f=!0),!f)return;const g={};m.z&&fh("z",u,g,this.animationValues);for(let y=0;y<hh.length;y++)fh(`rotate${hh[y]}`,u,g,this.animationValues),fh(`skew${hh[y]}`,u,g,this.animationValues);u.render();for(const y in g)u.setStaticValue(y,g[y]),this.animationValues&&(this.animationValues[y]=g[y]);u.scheduleRender()}applyProjectionStyles(u,f){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const m=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=Kl(f==null?void 0:f.pointerEvents)||"",u.transform=m?m(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=Kl(f==null?void 0:f.pointerEvents)||""),this.hasProjected&&!fa(this.latestValues)&&(u.transform=m?m({},""):"none",this.hasProjected=!1);return}u.visibility="";const y=g.animationValues||g.latestValues;this.applyTransformsToTarget();let v=VA(this.projectionDeltaWithTransform,this.treeScale,y);m&&(v=m(y,v)),u.transform=v;const{x,y:w}=this.projectionDelta;u.transformOrigin=`${x.origin*100}% ${w.origin*100}% 0`,g.animationValues?u.opacity=g===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:u.opacity=g===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const S in rf){if(y[S]===void 0)continue;const{correct:T,applyTo:E,isCSSVariable:k}=rf[S],O=v==="none"?y[S]:T(y[S],g);if(E){const A=E.length;for(let B=0;B<A;B++)u[E[B]]=O}else k?this.options.visualElement.renderState.vars[S]=O:u[S]=O}this.options.layoutId&&(u.pointerEvents=g===this?Kl(f==null?void 0:f.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var f;return(f=u.currentAnimation)==null?void 0:f.stop()}),this.root.nodes.forEach(qv),this.root.sharedNodes.clear()}}}function QA(t){t.updateLayout()}function ZA(t){var a;const e=((a=t.resumeFrom)==null?void 0:a.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=t.layout,{animationType:c}=t.options,u=e.source!==t.layout.source;if(c==="size")On(v=>{const x=u?e.measuredBox[v]:e.layoutBox[v],w=Et(x);x.min=r[v].min,x.max=x.min+w});else if(c==="x"||c==="y"){const v=c==="x"?"y":"x";sf(u?e.measuredBox[v]:e.layoutBox[v],r[v])}else $1(c,e.layoutBox,r)&&On(v=>{const x=u?e.measuredBox[v]:e.layoutBox[v],w=Et(r[v]);x.max=x.min+w,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[v].max=t.relativeTarget[v].min+w)});const f=vr();Ps(f,r,e.layoutBox);const m=vr();u?Ps(m,t.applyTransform(o,!0),e.measuredBox):Ps(m,r,e.layoutBox);const g=!z1(f);let y=!1;if(!t.resumeFrom){const v=t.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:x,layout:w}=v;if(x&&w){const S=t.options.layoutAnchor||void 0,T=ut();fc(T,e.layoutBox,x.layoutBox,S);const E=ut();fc(E,r,w.layoutBox,S),U1(T,E)||(y=!0),v.options.layoutRoot&&(t.relativeTarget=E,t.relativeTargetOrigin=T,t.relativeParent=v)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:e,delta:m,layoutDelta:f,hasLayoutChanged:g,hasRelativeLayoutChanged:y})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function e4(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function t4(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function n4(t){t.clearSnapshot()}function qv(t){t.clearMeasurements()}function i4(t){t.isLayoutDirty=!0,t.updateLayout()}function Fv(t){t.isLayoutDirty=!1}function a4(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function r4(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Gv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function s4(t){t.resolveTargetDelta()}function o4(t){t.calcProjection()}function l4(t){t.resetSkewAndRotation()}function c4(t){t.removeLeadSnapshot()}function Kv(t,e,a){t.translate=Pe(e.translate,0,a),t.scale=Pe(e.scale,1,a),t.origin=e.origin,t.originPoint=e.originPoint}function Yv(t,e,a,r){t.min=Pe(e.min,a.min,r),t.max=Pe(e.max,a.max,r)}function u4(t,e,a,r){Yv(t.x,e.x,a.x,r),Yv(t.y,e.y,a.y,r)}function d4(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const h4={duration:.45,ease:[.4,0,.1,1]},Xv=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Wv=Xv("applewebkit/")&&!Xv("chrome/")?Math.round:hn;function Jv(t){t.min=Wv(t.min),t.max=Wv(t.max)}function f4(t){Jv(t.x),Jv(t.y)}function $1(t,e,a){return t==="position"||t==="preserve-aspect"&&!MA(Pv(e),Pv(a),.2)}function m4(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const p4=H1({attachResizeListener:(t,e)=>Qs(t,"resize",e),measureScroll:()=>{var t,e;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),mh={current:void 0},I1=H1({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!mh.current){const t=new p4({});t.mount(window),t.setOptions({layoutScroll:!0}),mh.current=t}return mh.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Xf=_.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function Qv(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function g4(...t){return e=>{let a=!1;const r=t.map(o=>{const c=Qv(o,e);return!a&&typeof c=="function"&&(a=!0),c});if(a)return()=>{for(let o=0;o<r.length;o++){const c=r[o];typeof c=="function"?c():Qv(t[o],null)}}}}function y4(...t){return _.useCallback(g4(...t),t)}class v4 extends _.Component{getSnapshotBeforeUpdate(e){const a=this.props.childRef.current;if($l(a)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=a.offsetParent,o=$l(r)&&r.offsetWidth||0,c=$l(r)&&r.offsetHeight||0,u=getComputedStyle(a),f=this.props.sizeRef.current;f.height=parseFloat(u.height),f.width=parseFloat(u.width),f.top=a.offsetTop,f.left=a.offsetLeft,f.right=o-f.width-f.left,f.bottom=c-f.height-f.top,f.direction=u.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function b4({children:t,isPresent:e,anchorX:a,anchorY:r,root:o,pop:c}){var x;const u=_.useId(),f=_.useRef(null),m=_.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:g}=_.useContext(Xf),y=((x=t.props)==null?void 0:x.ref)??(t==null?void 0:t.ref),v=y4(f,y);return _.useInsertionEffect(()=>{const{width:w,height:S,top:T,left:E,right:k,bottom:O,direction:A}=m.current;if(e||c===!1||!f.current||!w||!S)return;const B=A==="rtl",G=a==="left"?B?`right: ${k}`:`left: ${E}`:B?`left: ${E}`:`right: ${k}`,W=r==="bottom"?`bottom: ${O}`:`top: ${T}`;f.current.dataset.motionPopId=u;const q=document.createElement("style");g&&(q.nonce=g);const X=o??document.head;return X.appendChild(q),q.sheet&&q.sheet.insertRule(`
          [data-motion-pop-id="${u}"] {
            position: absolute !important;
            width: ${w}px !important;
            height: ${S}px !important;
            ${G}px !important;
            ${W}px !important;
          }
        `),()=>{var M;(M=f.current)==null||M.removeAttribute("data-motion-pop-id"),X.contains(q)&&X.removeChild(q)}},[e]),d.jsx(v4,{isPresent:e,childRef:f,sizeRef:m,pop:c,children:c===!1?t:_.cloneElement(t,{ref:v})})}const x4=({children:t,initial:e,isPresent:a,onExitComplete:r,custom:o,presenceAffectsLayout:c,mode:u,anchorX:f,anchorY:m,root:g})=>{const y=kf(w4),v=_.useId();let x=!0,w=_.useMemo(()=>(x=!1,{id:v,initial:e,isPresent:a,custom:o,onExitComplete:S=>{y.set(S,!0);for(const T of y.values())if(!T)return;r&&r()},register:S=>(y.set(S,!1),()=>y.delete(S))}),[a,y,r]);return c&&x&&(w={...w}),_.useMemo(()=>{y.forEach((S,T)=>y.set(T,!1))},[a]),_.useEffect(()=>{!a&&!y.size&&r&&r()},[a]),t=d.jsx(b4,{pop:u==="popLayout",isPresent:a,anchorX:f,anchorY:m,root:g,children:t}),d.jsx(jc.Provider,{value:w,children:t})};function w4(){return new Map}function q1(t=!0){const e=_.useContext(jc);if(e===null)return[!0,null];const{isPresent:a,onExitComplete:r,register:o}=e,c=_.useId();_.useEffect(()=>{if(t)return o(c)},[t]);const u=_.useCallback(()=>t&&r&&r(c),[c,r,t]);return!a&&r?[!1,u]:[!0]}const Ll=t=>t.key||"";function Zv(t){const e=[];return _.Children.forEach(t,a=>{_.isValidElement(a)&&e.push(a)}),e}const _n=({children:t,custom:e,initial:a=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:c="sync",propagate:u=!1,anchorX:f="left",anchorY:m="top",root:g})=>{const[y,v]=q1(u),x=_.useMemo(()=>Zv(t),[t]),w=u&&!y?[]:x.map(Ll),S=_.useRef(!0),T=_.useRef(x),E=kf(()=>new Map),k=_.useRef(new Set),[O,A]=_.useState(x),[B,G]=_.useState(x);vx(()=>{S.current=!1,T.current=x;for(let X=0;X<B.length;X++){const M=Ll(B[X]);w.includes(M)?(E.delete(M),k.current.delete(M)):E.get(M)!==!0&&E.set(M,!1)}},[B,w.length,w.join("-")]);const W=[];if(x!==O){let X=[...x];for(let M=0;M<B.length;M++){const Y=B[M],K=Ll(Y);w.includes(K)||(X.splice(M,0,Y),W.push(Y))}return c==="wait"&&W.length&&(X=W),G(Zv(X)),A(x),null}const{forceRender:q}=_.useContext(_f);return d.jsx(d.Fragment,{children:B.map(X=>{const M=Ll(X),Y=u&&!y?!1:x===B||w.includes(M),K=()=>{if(k.current.has(M))return;if(E.has(M))k.current.add(M),E.set(M,!0);else return;let oe=!0;E.forEach(je=>{je||(oe=!1)}),oe&&(q==null||q(),G(T.current),u&&(v==null||v()),r&&r())};return d.jsx(x4,{isPresent:Y,initial:!S.current||a?void 0:!1,custom:e,presenceAffectsLayout:o,mode:c,root:g,onExitComplete:Y?void 0:K,anchorX:f,anchorY:m,children:X},M)})})},F1=_.createContext({strict:!1}),eb={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let tb=!1;function S4(){if(tb)return;const t={};for(const e in eb)t[e]={isEnabled:a=>eb[e].some(r=>!!a[r])};x1(t),tb=!0}function G1(){return S4(),sA()}function j4(t){const e=G1();for(const a in t)e[a]={...e[a],...t[a]};x1(e)}const _4=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function mc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||_4.has(t)}let K1=t=>!mc(t);function k4(t){typeof t=="function"&&(K1=e=>e.startsWith("on")?!mc(e):t(e))}try{k4(require("@emotion/is-prop-valid").default)}catch{}function T4(t,e,a){const r={};for(const o in t)o==="values"&&typeof t.values=="object"||St(t[o])||(K1(o)||a===!0&&mc(o)||!e&&!mc(o)||t.draggable&&o.startsWith("onDrag"))&&(r[o]=t[o]);return r}const Ec=_.createContext({});function E4(t,e){if(Tc(t)){const{initial:a,animate:r}=t;return{initial:a===!1||Js(a)?a:void 0,animate:Js(r)?r:void 0}}return t.inherit!==!1?e:{}}function C4(t){const{initial:e,animate:a}=E4(t,_.useContext(Ec));return _.useMemo(()=>({initial:e,animate:a}),[nb(e),nb(a)])}function nb(t){return Array.isArray(t)?t.join(" "):t}const Wf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Y1(t,e,a){for(const r in e)!St(e[r])&&!E1(r,a)&&(t[r]=e[r])}function A4({transformTemplate:t},e){return _.useMemo(()=>{const a=Wf();return Kf(a,e,t),Object.assign({},a.vars,a.style)},[e])}function R4(t,e){const a=t.style||{},r={};return Y1(r,a,t),Object.assign(r,A4(t,e)),r}function N4(t,e){const a={},r=R4(t,e);return t.drag&&t.dragListener!==!1&&(a.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(a.tabIndex=0),a.style=r,a}const X1=()=>({...Wf(),attrs:{}});function O4(t,e,a,r){const o=_.useMemo(()=>{const c=X1();return C1(c,e,R1(r),t.transformTemplate,t.style),{...c.attrs,style:{...c.style}}},[e]);if(t.style){const c={};Y1(c,t.style,t),o.style={...c,...o.style}}return o}const D4=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Jf(t){return typeof t!="string"||t.includes("-")?!1:!!(D4.indexOf(t)>-1||/[A-Z]/u.test(t))}function M4(t,e,a,{latestValues:r},o,c=!1,u){const m=(u??Jf(t)?O4:N4)(e,r,o,t),g=T4(e,typeof t=="string",c),y=t!==_.Fragment?{...g,...m,ref:a}:{},{children:v}=e,x=_.useMemo(()=>St(v)?v.get():v,[v]);return _.createElement(t,{...y,children:x})}function L4({scrapeMotionValuesFromProps:t,createRenderState:e},a,r,o){return{latestValues:z4(a,r,o,t),renderState:e()}}function z4(t,e,a,r){const o={},c=r(t,{});for(const x in c)o[x]=Kl(c[x]);let{initial:u,animate:f}=t;const m=Tc(t),g=v1(t);e&&g&&!m&&t.inherit!==!1&&(u===void 0&&(u=e.initial),f===void 0&&(f=e.animate));let y=a?a.initial===!1:!1;y=y||u===!1;const v=y?f:u;if(v&&typeof v!="boolean"&&!kc(v)){const x=Array.isArray(v)?v:[v];for(let w=0;w<x.length;w++){const S=Vf(t,x[w]);if(S){const{transitionEnd:T,transition:E,...k}=S;for(const O in k){let A=k[O];if(Array.isArray(A)){const B=y?A.length-1:0;A=A[B]}A!==null&&(o[O]=A)}for(const O in T)o[O]=T[O]}}}return o}const W1=t=>(e,a)=>{const r=_.useContext(Ec),o=_.useContext(jc),c=()=>L4(t,e,r,o);return a?c():kf(c)},U4=W1({scrapeMotionValuesFromProps:Yf,createRenderState:Wf}),B4=W1({scrapeMotionValuesFromProps:N1,createRenderState:X1}),P4=Symbol.for("motionComponentSymbol");function V4(t,e,a){const r=_.useRef(a);_.useInsertionEffect(()=>{r.current=a});const o=_.useRef(null);return _.useCallback(c=>{var f;c&&((f=t.onMount)==null||f.call(t,c)),e&&(c?e.mount(c):e.unmount());const u=r.current;if(typeof u=="function")if(c){const m=u(c);typeof m=="function"&&(o.current=m)}else o.current?(o.current(),o.current=null):u(c);else u&&(u.current=c)},[e])}const J1=_.createContext({});function mr(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function H4(t,e,a,r,o,c){var A,B;const{visualElement:u}=_.useContext(Ec),f=_.useContext(F1),m=_.useContext(jc),g=_.useContext(Xf),y=g.reducedMotion,v=g.skipAnimations,x=_.useRef(null),w=_.useRef(!1);r=r||f.renderer,!x.current&&r&&(x.current=r(t,{visualState:e,parent:u,props:a,presenceContext:m,blockInitialAnimation:m?m.initial===!1:!1,reducedMotionConfig:y,skipAnimations:v,isSVG:c}),w.current&&x.current&&(x.current.manuallyAnimateOnMount=!0));const S=x.current,T=_.useContext(J1);S&&!S.projection&&o&&(S.type==="html"||S.type==="svg")&&$4(x.current,a,o,T);const E=_.useRef(!1);_.useInsertionEffect(()=>{S&&E.current&&S.update(a,m)});const k=a[s1],O=_.useRef(!!k&&typeof window<"u"&&!((A=window.MotionHandoffIsComplete)!=null&&A.call(window,k))&&((B=window.MotionHasOptimisedAnimation)==null?void 0:B.call(window,k)));return vx(()=>{w.current=!0,S&&(E.current=!0,window.MotionIsMounted=!0,S.updateFeatures(),S.scheduleRenderMicrotask(),O.current&&S.animationState&&S.animationState.animateChanges())}),_.useEffect(()=>{S&&(!O.current&&S.animationState&&S.animationState.animateChanges(),O.current&&(queueMicrotask(()=>{var G;(G=window.MotionHandoffMarkAsComplete)==null||G.call(window,k)}),O.current=!1),S.enteringChildren=void 0)}),S}function $4(t,e,a,r){const{layoutId:o,layout:c,drag:u,dragConstraints:f,layoutScroll:m,layoutRoot:g,layoutAnchor:y,layoutCrossfade:v}=e;t.projection=new a(t.latestValues,e["data-framer-portal-id"]?void 0:Q1(t.parent)),t.projection.setOptions({layoutId:o,layout:c,alwaysMeasureLayout:!!u||f&&mr(f),visualElement:t,animationType:typeof c=="string"?c:"both",initialPromotionConfig:r,crossfade:v,layoutScroll:m,layoutRoot:g,layoutAnchor:y})}function Q1(t){if(t)return t.options.allowProjection!==!1?t.projection:Q1(t.parent)}function ph(t,{forwardMotionProps:e=!1,type:a}={},r,o){r&&j4(r);const c=a?a==="svg":Jf(t),u=c?B4:U4;function f(g,y){let v;const x={..._.useContext(Xf),...g,layoutId:I4(g)},{isStatic:w}=x,S=C4(g),T=u(g,w);if(!w&&typeof window<"u"){q4();const E=F4(x);v=E.MeasureLayout,S.visualElement=H4(t,T,x,o,E.ProjectionNode,c)}return d.jsxs(Ec.Provider,{value:S,children:[v&&S.visualElement?d.jsx(v,{visualElement:S.visualElement,...x}):null,M4(t,g,V4(T,S.visualElement,y),T,w,e,c)]})}f.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const m=_.forwardRef(f);return m[P4]=t,m}function I4({layoutId:t}){const e=_.useContext(_f).id;return e&&t!==void 0?e+"-"+t:t}function q4(t,e){_.useContext(F1).strict}function F4(t){const e=G1(),{drag:a,layout:r}=e;if(!a&&!r)return{};const o={...a,...r};return{MeasureLayout:a!=null&&a.isEnabled(t)||r!=null&&r.isEnabled(t)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function G4(t,e){if(typeof Proxy>"u")return ph;const a=new Map,r=(c,u)=>ph(c,u,t,e),o=(c,u)=>r(c,u);return new Proxy(o,{get:(c,u)=>u==="create"?r:(a.has(u)||a.set(u,ph(u,void 0,t,e)),a.get(u))})}const K4=(t,e)=>e.isSVG??Jf(t)?new jA(e):new yA(e,{allowProjection:t!==_.Fragment});class Y4 extends Ii{constructor(e){super(e),e.animationState||(e.animationState=CA(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();kc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:a}=this.node.prevProps||{};e!==a&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let X4=0;class W4 extends Ii{constructor(){super(...arguments),this.id=X4++,this.isExitComplete=!1}update(){var c;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:a}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;if(e&&r===!1){if(this.isExitComplete){const{initial:u,custom:f}=this.node.getProps();if(typeof u=="string"||typeof u=="object"&&u!==null&&!Array.isArray(u)){const m=wa(this.node,u,f);if(m){const{transition:g,transitionEnd:y,...v}=m;for(const x in v)(c=this.node.getValue(x))==null||c.jump(v[x])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const o=this.node.animationState.setActive("exit",!e);a&&!e&&o.then(()=>{this.isExitComplete=!0,a(this.id)})}mount(){const{register:e,onExitComplete:a}=this.node.presenceContext||{};a&&a(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const J4={animation:{Feature:Y4},exit:{Feature:W4}};function ro(t){return{point:{x:t.pageX,y:t.pageY}}}const Q4=t=>e=>If(e)&&t(e,ro(e));function Vs(t,e,a,r){return Qs(t,e,Q4(a),r)}const Z1=({current:t})=>t?t.ownerDocument.defaultView:null,ib=(t,e)=>Math.abs(t-e);function Z4(t,e){const a=ib(t.x,e.x),r=ib(t.y,e.y);return Math.sqrt(a**2+r**2)}const ab=new Set(["auto","scroll"]);class ew{constructor(e,a,{transformPagePoint:r,contextWindow:o=window,dragSnapToOrigin:c=!1,distanceThreshold:u=3,element:f}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=w=>{this.handleScroll(w.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=zl(this.lastRawMoveEventInfo,this.transformPagePoint));const w=gh(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,T=Z4(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!T)return;const{point:E}=w,{timestamp:k}=wt;this.history.push({...E,timestamp:k});const{onStart:O,onMove:A}=this.handlers;S||(O&&O(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),A&&A(this.lastMoveEvent,w)},this.handlePointerMove=(w,S)=>{this.lastMoveEvent=w,this.lastRawMoveEventInfo=S,this.lastMoveEventInfo=zl(S,this.transformPagePoint),Ve.update(this.updatePoint,!0)},this.handlePointerUp=(w,S)=>{this.end();const{onEnd:T,onSessionEnd:E,resumeAnimation:k}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&k&&k(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const O=gh(w.type==="pointercancel"?this.lastMoveEventInfo:zl(S,this.transformPagePoint),this.history);this.startEvent&&T&&T(w,O),E&&E(w,O)},!If(e))return;this.dragSnapToOrigin=c,this.handlers=a,this.transformPagePoint=r,this.distanceThreshold=u,this.contextWindow=o||window;const m=ro(e),g=zl(m,this.transformPagePoint),{point:y}=g,{timestamp:v}=wt;this.history=[{...y,timestamp:v}];const{onSessionStart:x}=a;x&&x(e,gh(g,this.history)),this.removeListeners=no(Vs(this.contextWindow,"pointermove",this.handlePointerMove),Vs(this.contextWindow,"pointerup",this.handlePointerUp),Vs(this.contextWindow,"pointercancel",this.handlePointerUp)),f&&this.startScrollTracking(f)}startScrollTracking(e){let a=e.parentElement;for(;a;){const r=getComputedStyle(a);(ab.has(r.overflowX)||ab.has(r.overflowY))&&this.scrollPositions.set(a,{x:a.scrollLeft,y:a.scrollTop}),a=a.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const a=this.scrollPositions.get(e);if(!a)return;const r=e===window,o=r?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},c={x:o.x-a.x,y:o.y-a.y};c.x===0&&c.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=c.x,this.lastMoveEventInfo.point.y+=c.y):this.history.length>0&&(this.history[0].x-=c.x,this.history[0].y-=c.y),this.scrollPositions.set(e,o),Ve.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),$i(this.updatePoint)}}function zl(t,e){return e?{point:e(t.point)}:t}function rb(t,e){return{x:t.x-e.x,y:t.y-e.y}}function gh({point:t},e){return{point:t,delta:rb(t,tw(e)),offset:rb(t,eR(e)),velocity:tR(e,.1)}}function eR(t){return t[0]}function tw(t){return t[t.length-1]}function tR(t,e){if(t.length<2)return{x:0,y:0};let a=t.length-1,r=null;const o=tw(t);for(;a>=0&&(r=t[a],!(o.timestamp-r.timestamp>Xt(e)));)a--;if(!r)return{x:0,y:0};r===t[0]&&t.length>2&&o.timestamp-r.timestamp>Xt(e)*2&&(r=t[1]);const c=dn(o.timestamp-r.timestamp);if(c===0)return{x:0,y:0};const u={x:(o.x-r.x)/c,y:(o.y-r.y)/c};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function nR(t,{min:e,max:a},r){return e!==void 0&&t<e?t=r?Pe(e,t,r.min):Math.max(t,e):a!==void 0&&t>a&&(t=r?Pe(a,t,r.max):Math.min(t,a)),t}function sb(t,e,a){return{min:e!==void 0?t.min+e:void 0,max:a!==void 0?t.max+a-(t.max-t.min):void 0}}function iR(t,{top:e,left:a,bottom:r,right:o}){return{x:sb(t.x,a,o),y:sb(t.y,e,r)}}function ob(t,e){let a=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([a,r]=[r,a]),{min:a,max:r}}function aR(t,e){return{x:ob(t.x,e.x),y:ob(t.y,e.y)}}function rR(t,e){let a=.5;const r=Et(t),o=Et(e);return o>r?a=Xs(e.min,e.max-r,t.min):r>o&&(a=Xs(t.min,t.max-o,e.min)),Un(0,1,a)}function sR(t,e){const a={};return e.min!==void 0&&(a.min=e.min-t.min),e.max!==void 0&&(a.max=e.max-t.min),a}const of=.35;function oR(t=of){return t===!1?t=0:t===!0&&(t=of),{x:lb(t,"left","right"),y:lb(t,"top","bottom")}}function lb(t,e,a){return{min:cb(t,e),max:cb(t,a)}}function cb(t,e){return typeof t=="number"?t:t[e]||0}const lR=new WeakMap;class cR{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ut(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:a=!1,distanceThreshold:r}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const c=v=>{a&&this.snapToCursor(ro(v).point),this.stopAnimation()},u=(v,x)=>{const{drag:w,dragPropagation:S,onDragStart:T}=this.getProps();if(w&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=zC(w),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=x,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),On(k=>{let O=this.getAxisMotionValue(k).get()||0;if(zn.test(O)){const{projection:A}=this.visualElement;if(A&&A.layout){const B=A.layout.layoutBox[k];B&&(O=Et(B)*(parseFloat(O)/100))}}this.originPoint[k]=O}),T&&Ve.update(()=>T(v,x),!1,!0),Wh(this.visualElement,"transform");const{animationState:E}=this.visualElement;E&&E.setActive("whileDrag",!0)},f=(v,x)=>{this.latestPointerEvent=v,this.latestPanInfo=x;const{dragPropagation:w,dragDirectionLock:S,onDirectionLock:T,onDrag:E}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:k}=x;if(S&&this.currentDirection===null){this.currentDirection=dR(k),this.currentDirection!==null&&T&&T(this.currentDirection);return}this.updateAxis("x",x.point,k),this.updateAxis("y",x.point,k),this.visualElement.render(),E&&Ve.update(()=>E(v,x),!1,!0)},m=(v,x)=>{this.latestPointerEvent=v,this.latestPanInfo=x,this.stop(v,x),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>{const{dragSnapToOrigin:v}=this.getProps();(v||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:y}=this.getProps();this.panSession=new ew(e,{onSessionStart:c,onStart:u,onMove:f,onSessionEnd:m,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:r,contextWindow:Z1(this.visualElement),element:this.visualElement.current})}stop(e,a){const r=e||this.latestPointerEvent,o=a||this.latestPanInfo,c=this.isDragging;if(this.cancel(),!c||!o||!r)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:f}=this.getProps();f&&Ve.postRender(()=>f(r,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:a}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),a&&a.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,a,r){const{drag:o}=this.getProps();if(!r||!Ul(e,o,this.currentDirection))return;const c=this.getAxisMotionValue(e);let u=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(u=nR(u,this.constraints[e],this.elastic[e])),c.set(u)}resolveConstraints(){var c;const{dragConstraints:e,dragElastic:a}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(c=this.visualElement.projection)==null?void 0:c.layout,o=this.constraints;e&&mr(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=iR(r.layoutBox,e):this.constraints=!1,this.elastic=oR(a),o!==this.constraints&&!mr(e)&&r&&this.constraints&&!this.hasMutatedConstraints&&On(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=sR(r.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:a}=this.getProps();if(!e||!mr(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;o.root&&(o.root.scroll=void 0,o.root.updateScroll());const c=dA(r,o.root,this.visualElement.getTransformPagePoint());let u=aR(o.layout.layoutBox,c);if(a){const f=a(lA(u));this.hasMutatedConstraints=!!f,f&&(u=S1(f))}return u}startAnimation(e){const{drag:a,dragMomentum:r,dragElastic:o,dragTransition:c,dragSnapToOrigin:u,onDragTransitionEnd:f}=this.getProps(),m=this.constraints||{},g=On(y=>{if(!Ul(y,a,this.currentDirection))return;let v=m&&m[y]||{};(u===!0||u===y)&&(v={min:0,max:0});const x=o?200:1e6,w=o?40:1e7,S={type:"inertia",velocity:r?e[y]:0,bounceStiffness:x,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...c,...v};return this.startAxisValueAnimation(y,S)});return Promise.all(g).then(f)}startAxisValueAnimation(e,a){const r=this.getAxisMotionValue(e);return Wh(this.visualElement,e),r.start(Pf(e,r,0,a,this.visualElement,!1))}stopAnimation(){On(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const a=`_drag${e.toUpperCase()}`,o=this.visualElement.getProps()[a];return o||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){On(a=>{const{drag:r}=this.getProps();if(!Ul(a,r,this.currentDirection))return;const{projection:o}=this.visualElement,c=this.getAxisMotionValue(a);if(o&&o.layout){const{min:u,max:f}=o.layout.layoutBox[a],m=c.get()||0;c.set(e[a]-Pe(u,f,.5)+m)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:a}=this.getProps(),{projection:r}=this.visualElement;if(!mr(a)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};On(u=>{const f=this.getAxisMotionValue(u);if(f&&this.constraints!==!1){const m=f.get();o[u]=rR({min:m,max:m},this.constraints[u])}});const{transformTemplate:c}=this.visualElement.getProps();this.visualElement.current.style.transform=c?c({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),On(u=>{if(!Ul(u,e,null))return;const f=this.getAxisMotionValue(u),{min:m,max:g}=this.constraints[u];f.set(Pe(m,g,o[u]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;lR.set(this.visualElement,this);const e=this.visualElement.current,a=Vs(e,"pointerdown",g=>{const{drag:y,dragListener:v=!0}=this.getProps(),x=g.target,w=x!==e&&$C(x);y&&v&&!w&&this.start(g)});let r;const o=()=>{const{dragConstraints:g}=this.getProps();mr(g)&&g.current&&(this.constraints=this.resolveRefConstraints(),r||(r=uR(e,g.current,()=>this.scalePositionWithinConstraints())))},{projection:c}=this.visualElement,u=c.addEventListener("measure",o);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),Ve.read(o);const f=Qs(window,"resize",()=>this.scalePositionWithinConstraints()),m=c.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:y})=>{this.isDragging&&y&&(On(v=>{const x=this.getAxisMotionValue(v);x&&(this.originPoint[v]+=g[v].translate,x.set(x.get()+g[v].translate))}),this.visualElement.render())}));return()=>{f(),a(),u(),m&&m(),r&&r()}}getProps(){const e=this.visualElement.getProps(),{drag:a=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:c=!1,dragElastic:u=of,dragMomentum:f=!0}=e;return{...e,drag:a,dragDirectionLock:r,dragPropagation:o,dragConstraints:c,dragElastic:u,dragMomentum:f}}}function ub(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function uR(t,e,a){const r=yv(t,ub(a)),o=yv(e,ub(a));return()=>{r(),o()}}function Ul(t,e,a){return(e===!0||e===t)&&(a===null||a===t)}function dR(t,e=10){let a=null;return Math.abs(t.y)>e?a="y":Math.abs(t.x)>e&&(a="x"),a}class hR extends Ii{constructor(e){super(e),this.removeGroupControls=hn,this.removeListeners=hn,this.controls=new cR(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||hn}update(){const{dragControls:e}=this.node.getProps(),{dragControls:a}=this.node.prevProps||{};e!==a&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const yh=t=>(e,a)=>{t&&Ve.update(()=>t(e,a),!1,!0)};class fR extends Ii{constructor(){super(...arguments),this.removePointerDownListener=hn}onPointerDown(e){this.session=new ew(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Z1(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:a,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:yh(e),onStart:yh(a),onMove:yh(r),onEnd:(c,u)=>{delete this.session,o&&Ve.postRender(()=>o(c,u))}}}mount(){this.removePointerDownListener=Vs(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let vh=!1;class mR extends _.Component{componentDidMount(){const{visualElement:e,layoutGroup:a,switchLayoutGroup:r,layoutId:o}=this.props,{projection:c}=e;c&&(a.group&&a.group.add(c),r&&r.register&&o&&r.register(c),vh&&c.root.didUpdate(),c.addEventListener("animationComplete",()=>{this.safeToRemove()}),c.setOptions({...c.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Yl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:a,visualElement:r,drag:o,isPresent:c}=this.props,{projection:u}=r;return u&&(u.isPresent=c,e.layoutDependency!==a&&u.setOptions({...u.options,layoutDependency:a}),vh=!0,o||e.layoutDependency!==a||a===void 0||e.isPresent!==c?u.willUpdate():this.safeToRemove(),e.isPresent!==c&&(c?u.promote():u.relegate()||Ve.postRender(()=>{const f=u.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:a}=this.props,{projection:r}=e;r&&(r.options.layoutAnchor=a,r.root.didUpdate(),$f.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:a,switchLayoutGroup:r}=this.props,{projection:o}=e;vh=!0,o&&(o.scheduleCheckAfterUnmount(),a&&a.group&&a.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function nw(t){const[e,a]=q1(),r=_.useContext(_f);return d.jsx(mR,{...t,layoutGroup:r,switchLayoutGroup:_.useContext(J1),isPresent:e,safeToRemove:a})}const pR={pan:{Feature:fR},drag:{Feature:hR,ProjectionNode:I1,MeasureLayout:nw}};function db(t,e,a){const{props:r}=t;t.animationState&&r.whileHover&&t.animationState.setActive("whileHover",a==="Start");const o="onHover"+a,c=r[o];c&&Ve.postRender(()=>c(e,ro(e)))}class gR extends Ii{mount(){const{current:e}=this.node;e&&(this.unmount=BC(e,(a,r)=>(db(this.node,r,"Start"),o=>db(this.node,o,"End"))))}unmount(){}}class yR extends Ii{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=no(Qs(this.node.current,"focus",()=>this.onFocus()),Qs(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function hb(t,e,a){const{props:r}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&r.whileTap&&t.animationState.setActive("whileTap",a==="Start");const o="onTap"+(a==="End"?"":a),c=r[o];c&&Ve.postRender(()=>c(e,ro(e)))}class vR extends Ii{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:a,propagate:r}=this.node.props;this.unmount=qC(e,(o,c)=>(hb(this.node,c,"Start"),(u,{success:f})=>hb(this.node,u,f?"End":"Cancel")),{useGlobalTarget:a,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const lf=new WeakMap,bh=new WeakMap,bR=t=>{const e=lf.get(t.target);e&&e(t)},xR=t=>{t.forEach(bR)};function wR({root:t,...e}){const a=t||document;bh.has(a)||bh.set(a,{});const r=bh.get(a),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(xR,{root:t,...e})),r[o]}function SR(t,e,a){const r=wR(e);return lf.set(t,a),r.observe(t),()=>{lf.delete(t),r.unobserve(t)}}const jR={some:0,all:1};class _R extends Ii{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var m;(m=this.stopObserver)==null||m.call(this);const{viewport:e={}}=this.node.getProps(),{root:a,margin:r,amount:o="some",once:c}=e,u={root:a?a.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:jR[o]},f=g=>{const{isIntersecting:y}=g;if(this.isInView===y||(this.isInView=y,c&&!y&&this.hasEnteredView))return;y&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",y);const{onViewportEnter:v,onViewportLeave:x}=this.node.getProps(),w=y?v:x;w&&w(g)};this.stopObserver=SR(this.node.current,u,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:a}=this.node;["amount","margin","root"].some(kR(e,a))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function kR({viewport:t={}},{viewport:e={}}={}){return a=>t[a]!==e[a]}const TR={inView:{Feature:_R},tap:{Feature:vR},focus:{Feature:yR},hover:{Feature:gR}},ER={layout:{ProjectionNode:I1,MeasureLayout:nw}},CR={...J4,...TR,...pR,...ER},Te=G4(CR,K4),AR=[{id:"own",name:"Your Story",avatar:null,isOwn:!0,unread:!1,online:!0},{id:"u1",name:"Luna",avatar:"https://i.pravatar.cc/150?u=luna",unread:!0,online:!0},{id:"u2",name:"Max",avatar:"https://i.pravatar.cc/150?u=max",unread:!0,online:!0},{id:"u3",name:"Zara",avatar:"https://i.pravatar.cc/150?u=zara",unread:!1,online:!0},{id:"u4",name:"Kai",avatar:"https://i.pravatar.cc/150?u=kai",unread:!0,online:!1},{id:"u5",name:"Nova",avatar:"https://i.pravatar.cc/150?u=nova",unread:!1,online:!1},{id:"u6",name:"Rey",avatar:"https://i.pravatar.cc/150?u=rey",unread:!0,online:!0},{id:"u7",name:"Elise",avatar:"https://i.pravatar.cc/150?u=elise",unread:!1,online:!1},{id:"u8",name:"Theo",avatar:"https://i.pravatar.cc/150?u=theo",unread:!0,online:!0}],fb=["linear-gradient(135deg, #f093fb, #f5576c)","linear-gradient(135deg, #4facfe, #00f2fe)","linear-gradient(135deg, #a18cd1, #fbc2eb)","linear-gradient(135deg, #fccb90, #d57eeb)","linear-gradient(135deg, #667eea, #764ba2)","linear-gradient(135deg, #89f7fe, #66a6ff)","linear-gradient(135deg, #f43b47, #453a94)","linear-gradient(135deg, #11998e, #38ef7d)"];function RR(t){return fb[t%fb.length]}function NR(t){return t.charAt(0).toUpperCase()}function OR(){const t=_.useRef(null),[e,a]=_.useState(!1),[r,o]=_.useState(0),[c,u]=_.useState(0),f=v=>{a(!0),o(v.pageX-t.current.offsetLeft),u(t.current.scrollLeft)},m=()=>a(!1),g=()=>a(!1),y=v=>{if(!e)return;v.preventDefault();const w=(v.pageX-t.current.offsetLeft-r)*1.5;t.current.scrollLeft=c-w};return d.jsxs("div",{className:"stories-section",children:[d.jsx("div",{className:"stories-header",children:d.jsx("span",{className:"stories-title",children:"Stories"})}),d.jsx("div",{ref:t,className:"stories-scroll",onMouseDown:f,onMouseUp:m,onMouseLeave:g,onMouseMove:y,children:AR.map((v,x)=>{const w=RR(x),S=NR(v.name),T=v.unread;return d.jsxs(Te.div,{className:`story-item ${T?"unread":""}`,whileTap:{scale:.92},whileHover:{y:-2},transition:{type:"spring",stiffness:400,damping:17},children:[d.jsxs("div",{className:"story-avatar-ring",style:{background:w},children:[d.jsx("div",{className:"story-avatar-inner",children:v.avatar?d.jsx("img",{src:v.avatar,alt:v.name}):d.jsx("span",{className:"story-avatar-text",children:S})}),v.isOwn&&d.jsx("span",{className:"story-plus-badge",children:"+"})]}),d.jsx("span",{className:"story-name",children:v.name}),v.online&&d.jsx("span",{className:"story-online-dot"})]},v.id)})}),d.jsx("style",{children:DR})]})}const DR=`
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
`,cf=Tr(()=>({createPost:async({content:t,image_url:e,video_url:a,type:r="text"})=>{const{data:o,error:c}=await de.from("posts").insert({content:t,image_url:e,video_url:a,type:r}).select(`
        *,
        profiles:user_id (id, username, display_name, avatar_url, is_verified)
      `).single();if(c)throw c;return o},deletePost:async t=>{const{error:e}=await de.from("posts").update({is_deleted:!0}).eq("id",t);if(e)throw e},likePost:async t=>{const{error:e}=await de.from("likes").insert({post_id:t});if(e)throw e},unlikePost:async t=>{const{error:e}=await de.from("likes").delete().eq("post_id",t);if(e)throw e},addComment:async({postId:t,content:e,parentId:a=null})=>{const r={post_id:t,content:e};a&&(r.parent_id=a);const{data:o,error:c}=await de.from("comments").insert(r).select(`
        *,
        profiles:user_id (id, username, display_name, avatar_url, is_verified)
      `).single();if(c)throw c;return o},deleteComment:async t=>{const{error:e}=await de.from("comments").update({is_deleted:!0}).eq("id",t);if(e)throw e},repostPost:async({postId:t,quoteText:e=null})=>{const a={post_id:t};e&&(a.quote_text=e);const{data:r,error:o}=await de.from("reposts").insert(a).select().single();if(o)throw o;return r},undoRepost:async t=>{const{error:e}=await de.from("reposts").delete().eq("post_id",t);if(e)throw e}}));function MR(t){const e=Date.now()-t,a=Math.floor(e/6e4);if(a<1)return"Just now";if(a<60)return`${a}m ago`;const r=Math.floor(a/60);if(r<24)return`${r}h ago`;const o=Math.floor(r/24);return o<7?`${o}d ago`:new Date(t).toLocaleDateString()}function mb(t){return t>=1e6?(t/1e6).toFixed(1)+"M":t>=1e3?(t/1e3).toFixed(1)+"K":t.toString()}const Es={heart:t=>d.jsx("svg",{viewBox:"0 0 24 24",fill:t?"#ff4d6d":"none",stroke:t?"#ff4d6d":"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{filter:t?"drop-shadow(0 0 6px rgba(255,77,109,0.4))":"none"},children:d.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"})}),comment:d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})}),share:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"18",cy:"5",r:"3"}),d.jsx("circle",{cx:"6",cy:"12",r:"3"}),d.jsx("circle",{cx:"18",cy:"19",r:"3"}),d.jsx("line",{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}),d.jsx("line",{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"})]}),bookmark:t=>d.jsx("svg",{viewBox:"0 0 24 24",fill:t?"#CCFF00":"none",stroke:t?"#CCFF00":"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"})}),dots:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"12",cy:"12",r:"1"}),d.jsx("circle",{cx:"19",cy:"12",r:"1"}),d.jsx("circle",{cx:"5",cy:"12",r:"1"})]})};function iw({post:t}){const[e,a]=_.useState(t.liked),[r,o]=_.useState(t.saved),[c,u]=_.useState(t.likes),[f,m]=_.useState(0),g=cf(S=>S.likePost),y=cf(S=>S.unlikePost),v=()=>{e?(a(!1),u(S=>S-1),y(t.id).catch(()=>{a(!0),u(S=>S+1)})):(a(!0),u(S=>S+1),m(S=>S+1),g(t.id).catch(()=>{a(!1),u(S=>S-1)}))},x=()=>o(S=>!S),w=S=>S.charAt(0).toUpperCase();return d.jsxs(Te.div,{className:"feed-post",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:300,damping:25},children:[d.jsxs("div",{className:"post-header",children:[d.jsx("div",{className:"post-avatar",style:{background:t.avatarColor},children:d.jsx("span",{children:w(t.username)})}),d.jsxs("div",{className:"post-user-info",children:[d.jsx("span",{className:"post-username",children:t.username}),d.jsxs("span",{className:"post-handle",children:[t.handle," · ",MR(t.timestamp)]})]}),d.jsx("button",{className:"post-more-btn",children:Es.dots})]}),d.jsx("div",{className:"post-content",children:d.jsx("p",{children:t.content})}),t.images&&t.images.length>0&&d.jsx("div",{className:`post-images ${t.images.length>1?"multi":""}`,children:t.images.map((S,T)=>d.jsx(Te.div,{className:"post-image-wrap",whileHover:{scale:1.01},transition:{type:"spring",stiffness:300,damping:20},children:d.jsx("img",{src:S,alt:`Post image ${T+1}`,loading:"lazy"})},T))}),d.jsxs("div",{className:"post-stats",children:[d.jsxs("span",{className:"post-stat",children:[d.jsx("span",{style:{color:e?"#ff4d6d":void 0},children:mb(c)})," likes"]}),d.jsxs("span",{className:"post-stat",children:[mb(t.comments)," comments"]})]}),d.jsxs("div",{className:"post-actions",children:[d.jsxs(Te.button,{className:`post-action ${e?"liked":""}`,onClick:v,whileTap:{scale:.8},children:[d.jsx(Te.span,{initial:e?{scale:.5}:!1,animate:{scale:1},transition:{type:"spring",stiffness:500,damping:15},className:"post-action-icon",children:Es.heart(e)},f),d.jsx("span",{children:"Like"})]}),d.jsxs("button",{className:"post-action",children:[d.jsx("span",{className:"post-action-icon",children:Es.comment}),d.jsx("span",{children:"Comment"})]}),d.jsxs("button",{className:"post-action",children:[d.jsx("span",{className:"post-action-icon",children:Es.share}),d.jsx("span",{children:"Share"})]}),d.jsxs(Te.button,{className:`post-action ${r?"saved":""}`,onClick:x,whileTap:{scale:.8},children:[d.jsx("span",{className:"post-action-icon",children:Es.bookmark(r)}),d.jsx("span",{children:"Save"})]})]}),d.jsx("style",{children:LR})]})}const LR=`
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
`,xh=10,ba=Tr((t,e)=>({posts:[],isLoading:!1,isRefreshing:!1,hasMore:!0,page:0,fetchFeed:async({refresh:a=!1}={})=>{const{page:r,hasMore:o,isLoading:c,isRefreshing:u}=e();if(c||u||!a&&!o)return;t(a?{isRefreshing:!0}:{isLoading:!0});const f=a?0:r,m=f*xh,g=m+xh-1;try{const{data:y,error:v,count:x}=await de.from("posts").select(`
          *,
          profiles:user_id (id, username, display_name, avatar_url, is_verified),
          likes_count:likes(count),
          comments_count:comments(count)
        `,{count:"exact"}).eq("is_deleted",!1).order("created_at",{ascending:!1}).range(m,g);if(v)throw v;const w=(y||[]).map(T=>{var E,k,O,A;return{...T,likes:((k=(E=T.likes_count)==null?void 0:E[0])==null?void 0:k.count)??0,comments:((A=(O=T.comments_count)==null?void 0:O[0])==null?void 0:A.count)??0,isLiked:!1}}),S=m+xh<(x||0);t(a?{posts:w,page:1,hasMore:S,isRefreshing:!1,isLoading:!1}:T=>({posts:[...T.posts,...w],page:f+1,hasMore:S,isLoading:!1}))}catch(y){t({isRefreshing:!1,isLoading:!1}),console.error("Feed fetch error:",y.message)}},refreshFeed:()=>e().fetchFeed({refresh:!0}),addPostOptimistic:a=>{t(r=>({posts:[a,...r.posts]}))},removePostOptimistic:a=>{t(r=>({posts:r.posts.filter(o=>o.id!==a)}))},updatePostInFeed:(a,r)=>{t(o=>({posts:o.posts.map(c=>c.id===a?{...c,...r}:c)}))}}));function zR({onClose:t}){const[e,a]=_.useState(""),[r,o]=_.useState(""),[c,u]=_.useState(!1),[f,m]=_.useState(""),g=Tn(k=>k.user),y=Tn(k=>k.profile),v=cf(k=>k.createPost),x=ba(k=>k.fetchFeed),w=_.useRef(null),S=async()=>{const k=e.trim();if(k){u(!0),m("");try{await v({content:k,image_url:r.trim()||null}),a(""),o(""),x({refresh:!0}),t&&t()}catch(O){m(O.message||"Failed to create post")}finally{u(!1)}}},T=(y==null?void 0:y.avatar_color)||"#CCFF00",E=(y==null?void 0:y.display_name)||(y==null?void 0:y.username)||(g==null?void 0:g.email)||"User";return d.jsxs(Te.div,{className:"post-composer-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:k=>{k.target===k.currentTarget&&t&&t()},children:[d.jsxs(Te.div,{className:"post-composer",initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},transition:{type:"spring",stiffness:300,damping:25},children:[d.jsxs("div",{className:"post-composer-header",children:[d.jsx("h3",{children:"Create Post"}),d.jsx("button",{className:"post-composer-close",onClick:t,children:"×"})]}),d.jsxs("div",{className:"post-composer-body",children:[d.jsx("div",{className:"post-composer-avatar",style:{background:T},children:E.charAt(0).toUpperCase()}),d.jsx("textarea",{ref:w,className:"post-composer-textarea",placeholder:"What's on your mind?",value:e,onChange:k=>a(k.target.value),maxLength:2e3,autoFocus:!0})]}),d.jsx("div",{className:"post-composer-image",children:d.jsx("input",{className:"post-composer-image-input",placeholder:"Add image URL (optional)",value:r,onChange:k=>o(k.target.value)})}),f&&d.jsx("p",{className:"post-composer-error",children:f}),d.jsxs("div",{className:"post-composer-footer",children:[d.jsxs("span",{className:"post-composer-count",children:[e.length,"/2000"]}),d.jsx("button",{className:"post-composer-submit",onClick:S,disabled:!e.trim()||c,children:c?"Posting...":"Post"})]})]}),d.jsx("style",{children:UR})]})}const UR=`
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
`;function wh(){return d.jsxs("div",{className:"feed-post-skeleton",children:[d.jsxs("div",{className:"skeleton-header",children:[d.jsx("div",{className:"skeleton-circle"}),d.jsxs("div",{className:"skeleton-lines",children:[d.jsx("div",{className:"skeleton-line w-40"}),d.jsx("div",{className:"skeleton-line w-24"})]})]}),d.jsxs("div",{className:"skeleton-body",children:[d.jsx("div",{className:"skeleton-line w-100"}),d.jsx("div",{className:"skeleton-line w-80"})]}),d.jsx("div",{className:"skeleton-image"}),d.jsxs("div",{className:"skeleton-actions",children:[d.jsx("div",{className:"skeleton-line w-20"}),d.jsx("div",{className:"skeleton-line w-20"}),d.jsx("div",{className:"skeleton-line w-20"})]}),d.jsx("style",{children:BR})]})}const BR=`
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
`;function PR(t,{threshold:e=.5,enabled:a=!0}={}){const r=_.useRef(null);_.useEffect(()=>{if(!a)return;const c=r.current;if(!c)return;const u=new IntersectionObserver(f=>{f[0].isIntersecting&&t()},{threshold:e});return u.observe(c),()=>u.disconnect()},[t,e,a]);const o=_.useCallback(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]);return{sentinelRef:r,scrollToTop:o}}function VR(){const[t,e]=_.useState([]),[a,r]=_.useState({});_.useEffect(()=>{const c=de.channel("realtime-feed").on("postgres_changes",{event:"INSERT",schema:"public",table:"posts"},async u=>{var y,v,x,w;const{data:f,error:m}=await de.from("posts").select(`
              *,
              profiles:user_id (id, username, display_name, avatar_url, is_verified),
              likes_count:likes(count),
              comments_count:comments(count)
            `).eq("id",u.new.id).single();if(m||!f)return;const g={...f,likes:((v=(y=f.likes_count)==null?void 0:y[0])==null?void 0:v.count)??0,comments:((w=(x=f.comments_count)==null?void 0:x[0])==null?void 0:w.count)??0,isLiked:!1};e(S=>S.some(T=>T.id===g.id)?S:[g,...S])}).subscribe();return()=>{de.removeChannel(c)}},[]);const o=_.useCallback(()=>e([]),[]);return{newPosts:t,postUpdates:a,clearNewPosts:o,feedEvents:[]}}const HR={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08}}},$R={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:100,damping:20}}},pb=["#CCFF00","#FF6B6B","#4ECDC4","#A78BFA","#FFD93D","#6BCB77"];function IR(t){const e=t.profiles||{},a=e.display_name||e.username||"user";return{id:t.id,username:a,handle:"@"+(e.username||"user"),avatarColor:pb[((t.id||"").charCodeAt(0)||0)%pb.length],timestamp:t.created_at?new Date(t.created_at).getTime():Date.now(),content:t.content||"",images:t.image_url?[t.image_url]:[],likes:t.likes??0,comments:t.comments??0,liked:t.isLiked??!1,saved:!1}}function qR(){const[t,e]=_.useState(!0),[a,r]=_.useState(!1),o=ba(E=>E.posts),c=ba(E=>E.isLoading),u=ba(E=>E.hasMore),f=ba(E=>E.fetchFeed),{newPosts:m,clearNewPosts:g}=VR();_.useEffect(()=>{f({refresh:!0}).then(()=>e(!1))},[f]);const y=_.useCallback(()=>{!c&&u&&f()},[c,u,f]),{sentinelRef:v,scrollToTop:x}=PR(y,{enabled:!t&&u}),w=()=>{e(!0),f({refresh:!0}).then(()=>e(!1))},S=()=>{g(),w(),x()},T=_.useMemo(()=>o.map(IR),[o]);return d.jsxs("div",{className:"feed-container",children:[d.jsxs("div",{className:"feed-header",children:[d.jsx("h1",{className:"feed-title",children:"Home"}),d.jsxs("div",{className:"feed-header-actions",children:[d.jsx("button",{className:"feed-compose-btn",onClick:()=>r(!0),"aria-label":"Create post",children:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"18",height:"18",children:[d.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),d.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})}),d.jsx("button",{className:"feed-refresh-btn",onClick:w,"aria-label":"Refresh",children:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("polyline",{points:"23 4 23 10 17 10"}),d.jsx("path",{d:"M20.49 15a9 9 0 11-2.12-9.36L23 10"})]})})]})]}),t?d.jsxs("div",{className:"feed-posts",children:[d.jsx(wh,{}),d.jsx(wh,{}),d.jsx(wh,{})]}):d.jsxs(Te.div,{className:"feed-posts",variants:HR,initial:"hidden",animate:"visible",children:[d.jsx(OR,{}),d.jsxs(_n,{mode:"popLayout",children:[m.length>0&&d.jsx(Te.div,{className:"feed-new-posts-banner",initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},onClick:S,children:d.jsxs("span",{children:[m.length," new post",m.length>1?"s":""," available"]})},"new-posts-banner"),T.map(E=>d.jsx(Te.div,{variants:$R,layout:!0,children:d.jsx(iw,{post:E})},E.id))]}),c&&d.jsxs("div",{className:"feed-loading-more",children:[d.jsx("div",{className:"feed-loading-dot"}),d.jsx("div",{className:"feed-loading-dot"}),d.jsx("div",{className:"feed-loading-dot"})]}),d.jsx("div",{ref:v,className:"feed-sentinel"}),!u&&!c&&T.length>0&&d.jsx("p",{className:"feed-end",children:"You're all caught up! 🎉"})]}),d.jsx(_n,{children:a&&d.jsx(zR,{onClose:()=>r(!1)})}),d.jsx("style",{children:`
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
      `})]})}const FR=Tr((t,e)=>({onlineUserIds:new Set,setOnlineUsers:a=>{t({onlineUserIds:new Set(a)})},addOnlineUser:a=>{t(r=>{const o=new Set(r.onlineUserIds);return o.add(a),{onlineUserIds:o}})},removeOnlineUser:a=>{t(r=>{const o=new Set(r.onlineUserIds);return o.delete(a),{onlineUserIds:o}})},isOnline:a=>e().onlineUserIds.has(a)}));function GR(t){const[e,a]=_.useState(null),o=FR(c=>c.onlineUserIds).has(t);return _.useEffect(()=>{const c=async()=>{const{count:f}=await de.from("follows").select("id",{count:"exact",head:!0}).eq("following_id",t);f!==null&&a(f)};c();const u=de.channel(`profile-follows-${t}`).on("postgres_changes",{event:"*",schema:"public",table:"follows",filter:`following_id=eq.${t}`},()=>c()).subscribe();return()=>{de.removeChannel(u)}},[t]),{liveFollowerCount:e,isOnline:o}}const KR={username:"ZenX",handle:"@zenx",avatarColor:"#CCFF00",bio:"Building the future of social • Creator • Designer • Code artist",website:"zenx.design",posts:"42",followers:12800,following:382},YR=[{id:"p1",userId:"u2",images:["https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600"],content:"exploring new design frontiers with framex",likes:234},{id:"p2",userId:"u2",images:[],content:"just shipped a massive update to the grid system — responsiveness is next level",likes:189},{id:"p3",userId:"u2",images:["https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600"],content:"neon vibes only tonight",likes:312},{id:"p4",userId:"u2",images:[],content:"thinking about the future of real-time collaborative design tools",likes:156},{id:"p5",userId:"u2",images:["https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=600"],content:"new visual identity dropping soon",likes:278}];function Sh(t){return t>=1e6?(t/1e6).toFixed(1)+"M":t>=1e3?(t/1e3).toFixed(1)+"K":t.toString()}function XR(){const[t,e]=_.useState("grid"),[a,r]=_.useState("posts"),{liveFollowerCount:o,isOnline:c}=GR("u2"),u=KR,f=YR.filter(K=>K.userId==="u2"),m=ui(),[g,y]=_.useState(!1),[v,x]=_.useState(!1),[w,S]=_.useState(!1),[T,E]=_.useState(null),[k,O]=_.useState({avatar_url:"",cover_url:"",full_name:"",username:"",bio:"",website:""}),A=_.useRef(null),B=_.useRef(null),G=Tn(K=>K.profile),W=Tn(K=>K.updateProfile),q=(K,oe)=>{E({type:K,message:oe}),setTimeout(()=>E(null),3e3)},X=async(K,oe)=>{if(!K)return null;x(!0);try{const je=K.name.split(".").pop(),Ce=`${Date.now()}_${Math.random().toString(36).substring(2)}.${je}`,{error:ge}=await de.storage.from(oe).upload(Ce,K);if(ge)throw ge;const{data:{publicUrl:V}}=de.storage.from(oe).getPublicUrl(Ce);return V}catch(je){return q("error",je.message||"Failed to upload image"),null}finally{x(!1)}},M=async()=>{S(!0);try{const K={};k.full_name&&(K.full_name=k.full_name),k.username&&(K.username=k.username),k.bio&&(K.bio=k.bio),k.website&&(K.website=k.website),k.avatar_url&&(K.avatar_url=k.avatar_url),k.cover_url&&(K.cover_url=k.cover_url),await W(K),q("success","Profile updated successfully!"),y(!1)}catch(K){q("error",K.message||"Failed to update profile")}finally{S(!1)}},Y=[{id:"posts",label:"Posts"},{id:"likes",label:"Likes"},{id:"saved",label:"Saved"}];return d.jsxs(Te.div,{className:"profile-page",initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[d.jsxs("div",{className:"profile-header",children:[d.jsx("div",{className:"profile-cover",children:d.jsx("div",{className:"profile-cover-bg"})}),d.jsxs("div",{className:"profile-info",children:[d.jsxs("div",{className:"profile-avatar-section",children:[d.jsxs("div",{className:"profile-avatar",style:{background:u.avatarColor,position:"relative"},children:[d.jsx("span",{children:u.username.charAt(0).toUpperCase()}),d.jsx("span",{className:`profile-status-badge ${c?"online":"offline"}`})]}),d.jsxs("div",{className:"profile-actions",children:[d.jsx(Te.button,{className:"profile-settings-btn",onClick:()=>m("/settings"),"aria-label":"Settings",whileHover:{scale:1.05},whileTap:{scale:.92,rotate:15},transition:{type:"spring",stiffness:400,damping:17},children:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"20",height:"20",children:[d.jsx("circle",{cx:"12",cy:"12",r:"3"}),d.jsx("path",{d:"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"})]})}),d.jsx(Te.button,{className:"profile-edit-btn",onClick:()=>{G&&O({avatar_url:G.avatar_url||"",cover_url:G.cover_url||"",full_name:G.full_name||"",username:G.username||"",bio:G.bio||"",website:G.website||""}),y(!0)},whileHover:{scale:1.02},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:17},children:"Edit Profile"})]})]}),d.jsxs("div",{className:"profile-details",children:[d.jsx("h1",{className:"profile-name",children:u.username}),d.jsx("span",{className:"profile-handle",children:u.handle}),d.jsx("p",{className:"profile-bio",children:u.bio}),d.jsxs("a",{className:"profile-website",href:`https://${u.website}`,target:"_blank",rel:"noopener noreferrer",children:[d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"14",height:"14",children:[d.jsx("circle",{cx:"12",cy:"12",r:"10"}),d.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),d.jsx("path",{d:"M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"})]}),u.website]})]}),d.jsxs("div",{className:"profile-stats",children:[d.jsxs("div",{className:"profile-stat",children:[d.jsx("span",{className:"profile-stat-value",children:Sh(u.posts)}),d.jsx("span",{className:"profile-stat-label",children:"Posts"})]}),d.jsxs("div",{className:"profile-stat",children:[d.jsx("span",{className:"profile-stat-value",children:Sh(o||u.followers)}),d.jsx("span",{className:"profile-stat-label",children:"Followers"})]}),d.jsxs("div",{className:"profile-stat",children:[d.jsx("span",{className:"profile-stat-value",children:Sh(u.following)}),d.jsx("span",{className:"profile-stat-label",children:"Following"})]})]})]})]}),d.jsxs("div",{className:"profile-tabs",children:[Y.map(K=>d.jsxs("button",{className:`profile-tab ${a===K.id?"active":""}`,onClick:()=>r(K.id),children:[K.label,a===K.id&&d.jsx(Te.div,{className:"profile-tab-underline",layoutId:"tab-underline"})]},K.id)),d.jsxs("div",{className:"profile-view-toggle",children:[d.jsx("button",{className:`view-btn ${t==="grid"?"active":""}`,onClick:()=>e("grid"),children:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),d.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),d.jsx("rect",{x:"3",y:"14",width:"7",height:"7"}),d.jsx("rect",{x:"14",y:"14",width:"7",height:"7"})]})}),d.jsx("button",{className:`view-btn ${t==="list"?"active":""}`,onClick:()=>e("list"),children:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),d.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),d.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),d.jsx("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),d.jsx("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),d.jsx("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]})})]})]}),d.jsxs(_n,{mode:"wait",children:[a==="posts"&&d.jsx(Te.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:"profile-content",children:t==="grid"?d.jsx("div",{className:"profile-grid",children:f.length>0?f.map(K=>d.jsxs(Te.div,{className:"profile-grid-item",whileHover:{scale:1.02},transition:{type:"spring",stiffness:300,damping:20},children:[K.images[0]?d.jsx("img",{src:K.images[0],alt:"",loading:"lazy"}):d.jsx("div",{className:"grid-item-text",children:d.jsxs("p",{children:[K.content.substring(0,60),"..."]})}),d.jsx("div",{className:"grid-item-overlay",children:d.jsxs("span",{children:[K.likes," ❤"]})})]},K.id)):d.jsx("div",{className:"profile-empty",children:d.jsx("p",{children:"No posts yet"})})}):d.jsx("div",{className:"profile-list",children:f.length>0?f.map(K=>d.jsx(iw,{post:K},K.id)):d.jsx("div",{className:"profile-empty",children:d.jsx("p",{children:"No posts yet"})})})},"posts"),a==="likes"&&d.jsx(Te.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:"profile-content",children:d.jsx("div",{className:"profile-empty",children:d.jsx("p",{children:"No liked posts yet"})})},"likes"),a==="saved"&&d.jsx(Te.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:"profile-content",children:d.jsx("div",{className:"profile-empty",children:d.jsx("p",{children:"No saved posts yet"})})},"saved")]}),d.jsx(_n,{children:g&&d.jsx(Te.div,{className:"edit-modal-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>y(!1),children:d.jsxs(Te.div,{className:"edit-modal",initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},transition:{type:"spring",stiffness:300,damping:25},onClick:K=>K.stopPropagation(),children:[d.jsxs("div",{className:"edit-modal-header",children:[d.jsx("h2",{children:"Edit Profile"}),d.jsx(Te.button,{className:"edit-modal-close",onClick:()=>y(!1),whileHover:{scale:1.1},whileTap:{scale:.9},children:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"20",height:"20",children:[d.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),d.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),d.jsxs("div",{className:"edit-modal-body",children:[d.jsxs("div",{className:"edit-field",children:[d.jsx("label",{children:"Profile Picture"}),d.jsxs("div",{className:"image-upload-area",onClick:()=>{var K;return(K=A.current)==null?void 0:K.click()},children:[k.avatar_url?d.jsx("img",{src:k.avatar_url,alt:"Avatar",className:"image-preview"}):d.jsxs("div",{className:"image-upload-placeholder",children:[d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"24",height:"24",children:[d.jsx("path",{d:"M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"}),d.jsx("circle",{cx:"12",cy:"13",r:"4"})]}),d.jsx("span",{children:"Tap to change"})]}),v&&d.jsx("div",{className:"image-upload-spinner"})]}),d.jsx("input",{ref:A,type:"file",accept:"image/*",hidden:!0,onChange:async K=>{var Ce;const oe=(Ce=K.target.files)==null?void 0:Ce[0];if(!oe)return;const je=await X(oe,"avatars");je&&O(ge=>({...ge,avatar_url:je}))}})]}),d.jsxs("div",{className:"edit-field",children:[d.jsx("label",{children:"Cover Image"}),d.jsx("div",{className:"cover-upload-area",onClick:()=>{var K;return(K=B.current)==null?void 0:K.click()},children:k.cover_url?d.jsx("img",{src:k.cover_url,alt:"Cover",className:"cover-preview"}):d.jsxs("div",{className:"image-upload-placeholder",children:[d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"24",height:"24",children:[d.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),d.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),d.jsx("polyline",{points:"21 15 16 10 5 21"})]}),d.jsx("span",{children:"Tap to change cover"})]})}),d.jsx("input",{ref:B,type:"file",accept:"image/*",hidden:!0,onChange:async K=>{var Ce;const oe=(Ce=K.target.files)==null?void 0:Ce[0];if(!oe)return;const je=await X(oe,"covers");je&&O(ge=>({...ge,cover_url:je}))}})]}),d.jsxs("div",{className:"edit-field",children:[d.jsx("label",{children:"Name"}),d.jsx("input",{type:"text",value:k.full_name,onChange:K=>O(oe=>({...oe,full_name:K.target.value})),placeholder:"Your full name"})]}),d.jsxs("div",{className:"edit-field",children:[d.jsx("label",{children:"Username"}),d.jsx("input",{type:"text",value:k.username,onChange:K=>O(oe=>({...oe,username:K.target.value})),placeholder:"Your username"})]}),d.jsxs("div",{className:"edit-field",children:[d.jsx("label",{children:"Bio"}),d.jsx("textarea",{value:k.bio,onChange:K=>O(oe=>({...oe,bio:K.target.value})),placeholder:"Tell your story",rows:3})]}),d.jsxs("div",{className:"edit-field",children:[d.jsx("label",{children:"Website"}),d.jsx("input",{type:"text",value:k.website,onChange:K=>O(oe=>({...oe,website:K.target.value})),placeholder:"yourwebsite.com"})]})]}),d.jsxs("div",{className:"edit-modal-footer",children:[d.jsx(Te.button,{className:"edit-btn-cancel",onClick:()=>y(!1),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Cancel"}),d.jsx(Te.button,{className:"edit-btn-save",onClick:M,disabled:w,whileHover:{scale:1.02},whileTap:{scale:.98},children:w?"Saving...":"Save Changes"})]})]})})}),d.jsx(_n,{children:T&&d.jsxs(Te.div,{className:`toast toast-${T.type}`,initial:{opacity:0,y:50,x:20},animate:{opacity:1,y:0,x:0},exit:{opacity:0,y:20,x:20},transition:{type:"spring",stiffness:300,damping:25},children:[T.type==="success"?d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"18",height:"18",children:[d.jsx("path",{d:"M22 11.08V12a10 10 0 11-5.93-9.14"}),d.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}):d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"18",height:"18",children:[d.jsx("circle",{cx:"12",cy:"12",r:"10"}),d.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),d.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),d.jsx("span",{children:T.message})]})}),d.jsx("style",{children:WR})]})}const WR=`
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
`,Cs={search:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"11",cy:"11",r:"8"}),d.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),users:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),d.jsx("circle",{cx:"9",cy:"7",r:"4"}),d.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),d.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),plus:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),d.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),hash:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("line",{x1:"4",y1:"9",x2:"20",y2:"9"}),d.jsx("line",{x1:"4",y1:"15",x2:"20",y2:"15"}),d.jsx("line",{x1:"10",y1:"3",x2:"8",y2:"21"}),d.jsx("line",{x1:"16",y1:"3",x2:"14",y2:"21"})]})},JR=["All","Gaming","Art","Music","Tech","Photography","Fitness","Fashion"],QR=[{name:"Pixel Art Masters",members:"12.4k",category:"Art",desc:"A community for pixel art enthusiasts and digital artists.",color:"#ff6b6b"},{name:"Cyber Gamers",members:"8.7k",category:"Gaming",desc:"Discuss the latest games, strategies, and esports.",color:"#ffa502"},{name:"Synthwave Producers",members:"5.2k",category:"Music",desc:"Create and share synthwave, retrowave, and chill beats.",color:"#7bed9f"},{name:"Code Brigade",members:"15.3k",category:"Tech",desc:"Web dev, AI, open source — all things code.",color:"#70a1ff"},{name:"Lens Culture",members:"6.8k",category:"Photography",desc:"Share your best shots and photography techniques.",color:"#ff6348"},{name:"Neon Fitness",members:"4.1k",category:"Fitness",desc:"Push your limits with the neon fitness crew.",color:"#a29bfe"},{name:"Digital Canvas",members:"9.5k",category:"Art",desc:"Digital painting, 3D modeling, and concept art.",color:"#55efc4"},{name:"Vaporwave Lounge",members:"3.9k",category:"Music",desc:"Chill aesthetics, vaporwave, and lo-fi vibes.",color:"#fd79a8"}];function ZR(){const[t,e]=_.useState("All"),[a,r]=_.useState(""),o=QR.filter(c=>{const u=t==="All"||c.category===t,f=c.name.toLowerCase().includes(a.toLowerCase())||c.desc.toLowerCase().includes(a.toLowerCase());return u&&f});return d.jsxs("div",{className:"page-enter",children:[d.jsxs("div",{className:"communities-page",children:[d.jsxs("div",{className:"page-header",children:[d.jsx("h1",{children:"Communities"}),d.jsx("p",{children:"Discover and join communities that match your interests"})]}),d.jsxs("div",{className:"search-bar glass",children:[Cs.search,d.jsx("input",{type:"text",placeholder:"Search communities...",value:a,onChange:c=>r(c.target.value)})]}),d.jsx("div",{className:"category-pills",children:JR.map(c=>d.jsxs("button",{className:`pill ${t===c?"active":""}`,onClick:()=>e(c),children:[c==="All"?null:d.jsx("span",{className:"pill-icon",children:Cs.hash}),c]},c))}),o.length===0?d.jsxs("div",{className:"empty-state glass",children:[Cs.search,d.jsx("h3",{children:"No communities found"}),d.jsx("p",{children:"Try adjusting your search or filter"})]}):d.jsxs("div",{className:"communities-grid",children:[o.map((c,u)=>d.jsxs("div",{className:"community-card glass",children:[d.jsxs("div",{className:"community-card-header",style:{background:`linear-gradient(135deg, ${c.color}22, ${c.color}44)`},children:[d.jsx("div",{className:"community-avatar",style:{background:c.color},children:c.name.charAt(0)}),d.jsx("span",{className:"community-category",children:c.category})]}),d.jsxs("div",{className:"community-card-body",children:[d.jsx("h3",{children:c.name}),d.jsx("p",{children:c.desc}),d.jsx("div",{className:"community-meta",children:d.jsxs("span",{children:[Cs.users," ",c.members," members"]})})]}),d.jsx("div",{className:"community-card-footer",children:d.jsx("button",{className:"join-community-btn",children:"Join Community"})})]},u)),d.jsxs("div",{className:"community-card create-card glass",children:[d.jsx("div",{className:"create-card-icon",children:Cs.plus}),d.jsx("h3",{children:"Create Community"}),d.jsx("p",{children:"Start your own community and bring people together"}),d.jsx("button",{className:"create-community-btn",children:"Get Started"})]})]})]}),d.jsx("style",{children:`
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
      `})]})}const eN=[{tag:"framex",posts:"2.4K"},{tag:"design",posts:"1.8K"},{tag:"coding",posts:"1.2K"},{tag:"uiux",posts:"892"},{tag:"react",posts:"756"},{tag:"photography",posts:"654"},{tag:"art",posts:"543"},{tag:"music",posts:"432"}],tN=[{handle:"@creativemind",name:"Creative Mind",avatarColor:"#CCFF00",followers:"12.4K"},{handle:"@designpro",name:"Design Pro",avatarColor:"#FF6B6B",followers:"8.7K"},{handle:"@codemaster",name:"Code Master",avatarColor:"#4ECDC4",followers:"6.2K"},{handle:"@artistico",name:"Artistico",avatarColor:"#A78BFA",followers:"5.1K"}],gb=["#CCFF00","#FF6B6B","#4ECDC4","#A78BFA","#FFD93D","#6BCB77"];function nN(){const[t]=_.useState(eN),[e,a]=_.useState(tN);return _.useEffect(()=>{(async()=>{try{const{data:o}=await de.from("profiles").select("username, display_name").limit(4);o&&o.length>0&&a(o.map((c,u)=>({handle:`@${c.username||c.display_name}`,name:c.display_name||c.username,avatarColor:gb[u%gb.length],followers:`${Math.floor(Math.random()*10+1)}.${Math.floor(Math.random()*9)}K`})))}catch{}})()},[]),{trendData:t,trendingCreators:e}}const iN=[{id:"1",imageUrl:"https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600",username:"creativemind",avatarColor:"#CCFF00",likes:234,comments:18,isVideo:!1},{id:"2",imageUrl:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",username:"designpro",avatarColor:"#FF6B6B",likes:189,comments:24,isVideo:!1},{id:"3",imageUrl:"https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600",username:"codemaster",avatarColor:"#4ECDC4",likes:312,comments:42,isVideo:!1},{id:"4",imageUrl:"https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600",username:"artistico",avatarColor:"#A78BFA",likes:156,comments:11,isVideo:!0},{id:"5",imageUrl:"https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=600",username:"pixelator",avatarColor:"#FFD93D",likes:278,comments:33,isVideo:!1},{id:"6",imageUrl:"https://images.unsplash.com/photo-1563089145-599997674d42?w=600",username:"neonwave",avatarColor:"#6BCB77",likes:445,comments:67,isVideo:!1},{id:"7",imageUrl:"https://images.unsplash.com/photo-1557683316-973673baf926?w=600",username:"cyberpunk",avatarColor:"#FF6B6B",likes:523,comments:89,isVideo:!0},{id:"8",imageUrl:"https://images.unsplash.com/photo-1574169208507-84376144848b?w=600",username:"abstractor",avatarColor:"#CCFF00",likes:167,comments:14,isVideo:!1},{id:"9",imageUrl:"https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600",username:"dreamcast",avatarColor:"#A78BFA",likes:398,comments:55,isVideo:!1}],yb=[{type:"trend",label:"FrameX",sub:"Trending"},{type:"trend",label:"Design",sub:"12.4K posts"},{type:"trend",label:"React",sub:"8.2K posts"},{type:"trend",label:"UI/UX",sub:"6.7K posts"},{type:"community",label:"Pixel Artists",sub:"12.4K members"},{type:"community",label:"Code Crew",sub:"8.2K members"},{type:"community",label:"Synthwave",sub:"6.7K members"},{type:"community",label:"Neo Creators",sub:"15.1K members"}],aN=[{tag:"framex",posts:"2.4K"},{tag:"design",posts:"1.8K"},{tag:"coding",posts:"1.2K"},{tag:"uiux",posts:"892"},{tag:"react",posts:"756"},{tag:"photography",posts:"654"},{tag:"art",posts:"543"},{tag:"music",posts:"432"}],rN=[{id:"for-you",label:"For You",icon:"✨"},{id:"trending",label:"Trending",icon:"🔥"},{id:"photos",label:"Photos",icon:"📷"},{id:"videos",label:"Videos",icon:"🎬"},{id:"communities",label:"Communities",icon:"👥"},{id:"technology",label:"Tech",icon:"💻"},{id:"gaming",label:"Gaming",icon:"🎮"},{id:"art",label:"Art",icon:"🎨"},{id:"music",label:"Music",icon:"🎵"}],vb=[{handle:"@creativemind",name:"Creative Mind",avatarColor:"#CCFF00",followers:"12.4K"},{handle:"@designpro",name:"Design Pro",avatarColor:"#FF6B6B",followers:"8.7K"},{handle:"@codemaster",name:"Code Master",avatarColor:"#4ECDC4",followers:"6.2K"},{handle:"@artistico",name:"Artistico",avatarColor:"#A78BFA",followers:"5.1K"}],bb=[{name:"Pixel Artists",icon:"🎨",members:"12.4K"},{name:"Code Crew",icon:"💻",members:"8.2K"},{name:"Synthwave",icon:"🎵",members:"6.7K"},{name:"Neo Creators",icon:"✨",members:"15.1K"},{name:"Photo Masters",icon:"📷",members:"9.3K"},{name:"Gaming Hub",icon:"🎮",members:"11.8K"},{name:"Design Talk",icon:"🎨",members:"7.5K"}],sN=()=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"20",height:"20",children:[d.jsx("circle",{cx:"11",cy:"11",r:"8"}),d.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),oN=()=>d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"16",height:"16",children:d.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"})}),lN=()=>d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"16",height:"16",children:d.jsx("path",{d:"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"})}),cN=()=>d.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"24",height:"24",children:d.jsx("path",{d:"M8 5v14l11-7z"})}),uN={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.04}}},dN={hidden:{opacity:0,y:20,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:100,damping:18}}};function hN(){const[t,e]=_.useState(!0),[a,r]=_.useState("for-you"),[o,c]=_.useState(""),[u,f]=_.useState(!1),{trendData:m,trendingCreators:g}=nN(),[y,v]=_.useState({}),[x,w]=_.useState({}),S=_.useRef(null),T=_.useRef(null),E=_.useRef(null);_.useEffect(()=>{const M=setTimeout(()=>e(!1),1800);return()=>clearTimeout(M)},[]);const k=ba(M=>M.posts),O=ba(M=>M.fetchFeed),A=_.useMemo(()=>{if((k==null?void 0:k.length)>0){const M=["#CCFF00","#FF6B6B","#4ECDC4","#A78BFA","#FFD93D","#6BCB77"];return k.filter(Y=>Y.image_url||Y.video_url).map((Y,K)=>{var oe,je;return{id:Y.id,imageUrl:Y.image_url||"https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600",username:((oe=Y.profiles)==null?void 0:oe.username)||((je=Y.profiles)==null?void 0:je.display_name)||"user",avatarColor:M[K%M.length],likes:Y.likes??0,comments:Y.comments??0,isVideo:!!Y.video_url}})}return iN},[k]);_.useEffect(()=>{k!=null&&k.length||O()},[]),_.useEffect(()=>{const M=Y=>{S.current&&!S.current.contains(Y.target)&&f(!1)};return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[]);const B=_.useMemo(()=>{if(!o.trim())return yb;const M=o.toLowerCase();return yb.filter(Y=>Y.label.toLowerCase().includes(M)||Y.sub.toLowerCase().includes(M))},[o]),G=M=>{v(Y=>({...Y,[M]:!Y[M]}))},W=M=>{w(Y=>({...Y,[M]:!Y[M]}))},q=M=>{switch(M){case"user":return"👤";case"hashtag":return"#️⃣";case"post":return"📄";case"community":return"👥";default:return"•"}},X=()=>d.jsx("div",{className:"explore-skeleton-grid",children:Array.from({length:6}).map((M,Y)=>d.jsx("div",{className:"explore-skeleton-item",style:{height:Y%3===0?280:Y%3===1?200:240},children:d.jsx("div",{className:"explore-shimmer"})},Y))});return d.jsxs("div",{className:"explore-page",children:[d.jsxs("div",{className:"explore-search-wrapper",ref:S,children:[d.jsxs("div",{className:`explore-search ${u?"explore-search-focused":""}`,children:[d.jsx(sN,{}),d.jsx("input",{type:"text",placeholder:"Search posts, creators, hashtags...",value:o,onChange:M=>c(M.target.value),onFocus:()=>f(!0)}),o&&d.jsx("button",{className:"explore-search-clear",onClick:()=>c(""),children:"✕"})]}),d.jsx(_n,{children:u&&(B==null?void 0:B.length)>0&&d.jsx(Te.div,{className:"explore-suggestions",initial:{opacity:0,y:-8},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.2},children:B.map((M,Y)=>d.jsxs(Te.div,{className:"explore-suggestion-item",initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:Y*.03},children:[d.jsx("span",{className:"explore-suggestion-icon",children:q(M.type)}),d.jsxs("div",{className:"explore-suggestion-info",children:[d.jsx("span",{className:"explore-suggestion-label",children:M.label}),d.jsx("span",{className:"explore-suggestion-sub",children:M.sub})]})]},`${M.type}-${M.label}`))})})]}),d.jsx("div",{className:"explore-hashtags-wrapper",children:d.jsx("div",{className:"explore-hashtags",ref:T,children:((m==null?void 0:m.length)>0?m:aN).map(M=>d.jsxs("button",{className:"explore-hashtag-pill",children:[d.jsx("span",{className:"explore-hashtag-sign",children:"#"}),M.tag,d.jsx("span",{className:"explore-hashtag-count",children:M.posts})]},M.tag))})}),d.jsx("div",{className:"explore-tabs-wrapper",children:d.jsxs("div",{className:"explore-tabs",ref:E,children:[rN.map(M=>d.jsxs("button",{className:`explore-tab ${a===M.id?"explore-tab-active":""}`,onClick:()=>r(M.id),children:[d.jsx("span",{className:"explore-tab-icon",children:M.icon}),d.jsx("span",{className:"explore-tab-label",children:M.label})]},M.id)),d.jsx(Te.div,{className:"explore-tab-indicator",layoutId:"active-tab",transition:{type:"spring",stiffness:400,damping:30}})]})}),d.jsxs("div",{className:"explore-content",children:[d.jsx("div",{className:"explore-grid-section",children:t?d.jsx(X,{}):d.jsx(Te.div,{className:"explore-masonry",variants:uN,initial:"hidden",animate:"visible",children:d.jsx(_n,{mode:"popLayout",children:A.map(M=>d.jsx(Te.div,{className:"explore-masonry-item",variants:dN,layout:!0,exit:{opacity:0,scale:.9,transition:{duration:.2}},children:d.jsxs("div",{className:"explore-masonry-img-wrap",children:[d.jsx("img",{src:M.imageUrl,alt:`by ${M.username}`,loading:"lazy"}),M.isVideo&&d.jsx("div",{className:"explore-video-badge",children:d.jsx(cN,{})}),d.jsxs("div",{className:"explore-masonry-overlay",children:[d.jsxs("div",{className:"explore-masonry-stats",children:[d.jsxs("span",{children:[d.jsx(oN,{})," ",M.likes>=1e3?`${(M.likes/1e3).toFixed(1)}K`:M.likes]}),d.jsxs("span",{children:[d.jsx(lN,{})," ",M.comments]})]}),d.jsxs("div",{className:"explore-masonry-creator",children:[d.jsx("span",{className:"explore-masonry-avatar",style:{background:M.avatarColor},children:M.username.charAt(0)}),d.jsx("span",{className:"explore-masonry-username",children:M.username})]})]})]})},M.id))})},a)}),d.jsxs("aside",{className:"explore-sidebar",children:[d.jsxs("div",{className:"explore-sidebar-section",children:[d.jsx("h3",{className:"explore-sidebar-title",children:"Trending Creators"}),d.jsx("div",{className:"explore-creators-list",children:((g==null?void 0:g.length)>0?g:vb).map(M=>d.jsxs("div",{className:"explore-creator-row",children:[d.jsx("div",{className:"explore-creator-avatar",style:{background:M.avatarColor},children:M.name.charAt(0)}),d.jsxs("div",{className:"explore-creator-info",children:[d.jsx("span",{className:"explore-creator-name",children:M.name}),d.jsx("span",{className:"explore-creator-handle",children:M.handle}),d.jsxs("span",{className:"explore-creator-followers",children:[M.followers," followers"]})]}),d.jsx("button",{className:`explore-follow-btn ${y[M.handle]?"explore-following":""}`,onClick:()=>G(M.handle),children:y[M.handle]?"Following":"Follow"})]},M.handle))})]}),d.jsxs("div",{className:"explore-sidebar-section",children:[d.jsx("h3",{className:"explore-sidebar-title",children:"Suggested Communities"}),d.jsx("div",{className:"explore-communities-list",children:bb.slice(0,5).map(M=>d.jsxs("div",{className:"explore-community-row",children:[d.jsx("span",{className:"explore-community-icon",children:M.icon}),d.jsxs("div",{className:"explore-community-info",children:[d.jsx("span",{className:"explore-community-name",children:M.name}),d.jsxs("span",{className:"explore-community-members",children:[M.members," members"]})]}),d.jsx("button",{className:`explore-join-btn ${x[M.name]?"explore-joined":""}`,onClick:()=>W(M.name),children:x[M.name]?"Joined":"Join"})]},M.name))})]})]})]}),d.jsxs("div",{className:"explore-mobile-section",children:[d.jsx("h3",{className:"explore-mobile-title",children:"Trending Creators"}),d.jsx("div",{className:"explore-mobile-scroll",children:((g==null?void 0:g.length)>0?g:vb).map(M=>d.jsxs("div",{className:"explore-mobile-creator",children:[d.jsx("div",{className:"explore-mobile-creator-avatar",style:{background:M.avatarColor},children:M.name.charAt(0)}),d.jsx("span",{className:"explore-mobile-creator-name",children:M.name}),d.jsx("span",{className:"explore-mobile-creator-followers",children:M.followers}),d.jsx("button",{className:`explore-mobile-follow-btn ${y[M.handle]?"explore-following":""}`,onClick:()=>G(M.handle),children:y[M.handle]?"Following":"Follow"})]},M.handle))})]}),d.jsxs("div",{className:"explore-mobile-section",children:[d.jsx("h3",{className:"explore-mobile-title",children:"Suggested Communities"}),d.jsx("div",{className:"explore-mobile-scroll",children:bb.slice(0,6).map(M=>d.jsxs("div",{className:"explore-mobile-community",children:[d.jsx("span",{className:"explore-mobile-community-icon",children:M.icon}),d.jsx("span",{className:"explore-mobile-community-name",children:M.name}),d.jsx("span",{className:"explore-mobile-community-members",children:M.members}),d.jsx("button",{className:`explore-mobile-join-btn ${x[M.name]?"explore-joined":""}`,onClick:()=>W(M.name),children:x[M.name]?"Joined":"Join"})]},M.name))})]}),d.jsx("style",{children:`
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
      `})]})}const ma=Tr((t,e)=>({notifications:[],unreadCount:0,isLoading:!1,fetchNotifications:async()=>{t({isLoading:!0});try{const{data:a,error:r}=await de.from("notifications").select(`
          *,
          actor:actor_id (id, username, display_name, avatar_url)
        `).order("created_at",{ascending:!1}).limit(50);if(r)throw r;const o=(a||[]).filter(c=>!c.is_read).length;t({notifications:a||[],unreadCount:o,isLoading:!1})}catch(a){t({isLoading:!1}),console.error("Fetch notifications error:",a.message)}},addNotificationRealtime:a=>{t(r=>r.notifications.some(c=>c.id===a.id)?r:{notifications:[a,...r.notifications],unreadCount:r.unreadCount+(a.is_read?0:1)})},markAsRead:async a=>{const{error:r}=await de.from("notifications").update({is_read:!0}).eq("id",a);if(r){console.error("Mark as read error:",r.message);return}t(o=>({notifications:o.notifications.map(c=>c.id===a?{...c,is_read:!0}:c),unreadCount:Math.max(0,o.unreadCount-1)}))},markAllAsRead:async()=>{const{error:a}=await de.from("notifications").update({is_read:!0}).eq("is_read",!1);if(a){console.error("Mark all as read error:",a.message);return}t(r=>({notifications:r.notifications.map(o=>({...o,is_read:!0})),unreadCount:0}))}}));function fN(){const t=Tn(m=>m.user),e=ma(m=>m.notifications),a=ma(m=>m.unreadCount),r=ma(m=>m.fetchNotifications),o=ma(m=>m.markAllAsRead),c=ma(m=>m.addNotificationRealtime),[u,f]=_.useState([]);return _.useEffect(()=>{r()},[r]),_.useEffect(()=>{if(!t)return;const m=de.channel("realtime-notifications").on("postgres_changes",{event:"INSERT",schema:"public",table:"notifications",filter:`user_id=eq.${t.id}`},async g=>{const{data:y,error:v}=await de.from("notifications").select("*, actor:actor_id (id, username, display_name, avatar_url)").eq("id",g.new.id).single();v||!y||(f(x=>x.some(w=>w.id===y.id)?x:[y,...x]),c(y))}).subscribe();return()=>{de.removeChannel(m)}},[t,c]),{liveNotifications:u,unreadCount:a,markAllAsRead:o,notificationEvents:e}}const pa={heartFilled:d.jsx("svg",{viewBox:"0 0 24 24",fill:"#ff6464",stroke:"#ff6464",strokeWidth:"2",children:d.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"})}),user:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}),d.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),messageCircle:d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"})}),users:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),d.jsx("circle",{cx:"9",cy:"7",r:"4"}),d.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),d.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),checkAll:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("polyline",{points:"9 11 12 14 22 4"}),d.jsx("path",{d:"M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"}),d.jsx("polyline",{points:"9 11 12 14 22 4"})]}),bellOff:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M13.73 21a2 2 0 01-3.46 0"}),d.jsx("path",{d:"M18.63 13A17.89 17.89 0 0118 8"}),d.jsx("path",{d:"M6.26 6.26A5.86 5.86 0 006 8c0 7-3 9-3 9h14"}),d.jsx("path",{d:"M18 8a6 6 0 00-9.33-5"}),d.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}),tag:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"}),d.jsx("line",{x1:"7",y1:"7",x2:"7.01",y2:"7"})]})},xb={heart:pa.heartFilled,user:pa.user,message:pa.messageCircle,users:pa.users,tag:pa.tag};function mN(){const{notificationState:t=[],unreadCount:e,markAllAsRead:a}=fN(),[r,o]=_.useState(!1),c=a,u=t.filter(m=>{const g=m.time.match(/(\d+)([mh])/);if(!g)return!1;const[,y,v]=g;return v==="m"?parseInt(y)<60:v==="h"?parseInt(y)<24:!1}),f=t.filter(m=>{const g=m.time.match(/(\d+)([dh])/);if(!g)return!0;const[,y,v]=g;return v==="h"?parseInt(y)>=1:!0});return r||t.length===0?d.jsxs("div",{className:"page-enter",children:[d.jsx("div",{className:"notifications-page",children:d.jsxs("div",{className:"empty-state glass",children:[d.jsx("div",{className:"empty-icon",children:pa.bellOff}),d.jsx("h3",{children:"All caught up!"}),d.jsx("p",{children:"No new notifications. You're up to date."})]})}),d.jsx("style",{children:wb})]}):d.jsxs("div",{className:"page-enter",children:[d.jsxs("div",{className:"notifications-page",children:[d.jsxs("div",{className:"page-header",children:[d.jsxs("div",{className:"page-header-left",children:[d.jsx("h1",{children:"Notifications"}),e>0&&d.jsx("span",{className:"unread-badge",children:e})]}),d.jsxs("button",{className:"mark-all-btn",onClick:c,disabled:e===0,children:[pa.checkAll," Mark all as read"]})]}),u.length>0&&d.jsxs("div",{className:"notif-section",children:[d.jsx("h2",{className:"notif-section-title",children:"Today"}),d.jsx("div",{className:"notif-list",children:d.jsx(_n,{mode:"popLayout",children:u.map((m,g)=>d.jsxs(Te.div,{layout:!0,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{type:"spring",stiffness:300,damping:25},className:`notif-item glass ${m.read?"notif-read":""}`,children:[d.jsx("div",{className:"notif-icon",style:{background:m.read?"var(--surface)":"color-mix(in srgb, var(--accent) 10%, transparent)"},children:xb[m.icon]}),d.jsxs("div",{className:"notif-content",children:[d.jsx("p",{className:"notif-text",children:m.text}),d.jsx("span",{className:"notif-time",children:m.time})]}),!m.read&&d.jsx("div",{className:"notif-dot"})]},`today-${m.type}-${g}`))})})]}),d.jsxs("div",{className:"notif-section",children:[d.jsx("h2",{className:"notif-section-title",children:"Earlier"}),d.jsx("div",{className:"notif-list",children:d.jsx(_n,{mode:"popLayout",children:f.map((m,g)=>d.jsxs(Te.div,{layout:!0,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,x:20},transition:{duration:.2},className:"notif-item glass notif-read",children:[d.jsx("div",{className:"notif-icon",style:{background:"var(--surface)"},children:xb[m.icon]}),d.jsxs("div",{className:"notif-content",children:[d.jsx("p",{className:"notif-text",children:m.text}),d.jsx("span",{className:"notif-time",children:m.time})]})]},`earlier-${m.type}-${g}`))})})]})]}),d.jsx("style",{children:wb})]})}const wb=`
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
`,Sb=Tr(t=>({metrics:null,isLoading:!1,dateRange:"7d",fetchMetrics:async(e="7d")=>{t({isLoading:!0,dateRange:e});const a=new Date;let r;switch(e){case"24h":r=new Date(a-1440*60*1e3);break;case"7d":r=new Date(a-10080*60*1e3);break;case"30d":r=new Date(a-720*60*60*1e3);break;case"90d":r=new Date(a-2160*60*60*1e3);break;default:r=new Date(a-10080*60*1e3)}try{const[o,c,u,f]=await Promise.allSettled([de.from("posts").select("id",{count:"exact",head:!0}).gte("created_at",r.toISOString()),de.from("likes").select("id",{count:"exact",head:!0}).gte("created_at",r.toISOString()),de.from("comments").select("id",{count:"exact",head:!0}).gte("created_at",r.toISOString()),de.from("follows").select("id",{count:"exact",head:!0}).gte("created_at",r.toISOString())]),m={posts:o.status==="fulfilled"?o.value.count??0:0,likes:c.status==="fulfilled"?c.value.count??0:0,comments:u.status==="fulfilled"?u.value.count??0:0,follows:f.status==="fulfilled"?f.value.count??0:0};t({metrics:m,isLoading:!1})}catch(o){t({isLoading:!1}),console.error("Fetch metrics error:",o.message)}},getMetricHistory:async(e="posts",a="7d")=>{const r=new Date;let o;switch(a){case"24h":o=new Date(r-1440*60*1e3);break;case"7d":o=new Date(r-10080*60*1e3);break;case"30d":o=new Date(r-720*60*60*1e3);break;case"90d":o=new Date(r-2160*60*60*1e3);break;default:o=new Date(r-10080*60*1e3)}const u={posts:"posts",likes:"likes",comments:"comments",follows:"follows"}[e];if(!u)return[];try{const{data:f,error:m}=await de.from(u).select("created_at").gte("created_at",o.toISOString()).order("created_at",{ascending:!0});if(m)throw m;const g={},y=a==="24h"?3600*1e3:1440*60*1e3;for(const v of f||[]){const w=new Date(Math.floor(new Date(v.created_at).getTime()/y)*y).toISOString();g[w]=(g[w]||0)+1}return Object.entries(g).map(([v,x])=>({date:v,value:x}))}catch(f){return console.error(`Fetch ${e} history error:`,f.message),[]}}}));function pN(){const t=Sb(a=>a.metrics),e=Sb(a=>a.fetchMetrics);return _.useEffect(()=>{t||e()},[t,e]),{analyticsData:t}}const jb={connecting:{color:"#fbbf24",label:"Connecting...",pulse:!0},connected:{color:"#22c55e",label:"Connected",pulse:!1},disconnected:{color:"#ef4444",label:"Disconnected",pulse:!1},reconnecting:{color:"#f97316",label:"Reconnecting...",pulse:!0}};function aw({variant:t="sidebar"}){const[e,a]=_.useState(!1),r=_.useRef(null);_.useEffect(()=>()=>clearTimeout(r.current),[]);const{connectionStatus:o,isFallbackMode:c}=window.__FRAMEX_REALTIME__||{connectionStatus:"connecting",isFallbackMode:!0};_.useEffect(()=>{a(!0),clearTimeout(r.current),o==="connected"&&(r.current=setTimeout(()=>a(!1),3e3))},[o]);const u=jb[o]||jb.connecting;return t==="sidebar"?d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",cursor:"pointer",position:"relative"},title:`${u.label}${c?" (Simulated)":""}`,children:[d.jsx("span",{style:{width:8,height:8,borderRadius:"50%",backgroundColor:u.color,boxShadow:u.pulse?`0 0 6px ${u.color}`:"none",animation:u.pulse?"connectionPulse 1.5s ease-in-out infinite":"none",flexShrink:0}}),d.jsx("span",{style:{fontSize:11,color:"var(--text-secondary, rgba(255,255,255,0.4))",fontFamily:"monospace"},children:u.label}),c&&d.jsx("span",{style:{fontSize:9,padding:"1px 5px",borderRadius:4,backgroundColor:"var(--surface, rgba(255,255,255,0.05))",color:"var(--text-secondary, rgba(255,255,255,0.4))"},children:"SIM"})]}):d.jsx("div",{style:{position:"relative",width:20,height:20,display:"flex",alignItems:"center",justifyContent:"center"},title:`${u.label}${c?" (Simulated)":""}`,children:d.jsx("span",{style:{width:6,height:6,borderRadius:"50%",backgroundColor:u.color,boxShadow:u.pulse?`0 0 6px ${u.color}`:"none",animation:u.pulse?"connectionPulse 1.5s ease-in-out infinite":"none"}})})}const gN={liveViewers:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),d.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),activeUsers:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),d.jsx("circle",{cx:"9",cy:"7",r:"4"}),d.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),d.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),totalUsers:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("path",{d:"M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"}),d.jsx("circle",{cx:"9",cy:"7",r:"4"}),d.jsx("path",{d:"M22 21v-2a4 4 0 00-3-3.87"}),d.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),postsPerMinute:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),d.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),d.jsx("line",{x1:"9",y1:"21",x2:"9",y2:"9"})]}),engagementRate:d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:d.jsx("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})}),dailyActiveUsers:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),d.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),d.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),d.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),newSignupsToday:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("path",{d:"M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),d.jsx("circle",{cx:"8.5",cy:"7",r:"4"}),d.jsx("line",{x1:"20",y1:"8",x2:"20",y2:"14"}),d.jsx("line",{x1:"23",y1:"11",x2:"17",y2:"11"})]}),avgSessionDuration:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[d.jsx("circle",{cx:"12",cy:"12",r:"10"}),d.jsx("polyline",{points:"12 6 12 12 16 14"})]})},yN={liveViewers:"Live Viewers",activeUsers:"Active Users",totalUsers:"Total Users",postsPerMinute:"Posts / Min",engagementRate:"Engagement Rate",dailyActiveUsers:"DAU",newSignupsToday:"New Signups",avgSessionDuration:"Avg Session"},vN={liveViewers:"#CCFF00",activeUsers:"#60a5fa",totalUsers:"#a78bfa",postsPerMinute:"#f472b6",engagementRate:"#34d399",dailyActiveUsers:"#fbbf24",newSignupsToday:"#fb923c",avgSessionDuration:"#22d3ee"};function bN({value:t,color:e}){const a=Array.from({length:20},(o,c)=>{const u=t*(1+(Math.random()-.5)*.4);return{x:c*5,y:30-u/100*25}}),r=a.map((o,c)=>`${c===0?"M":"L"}${o.x},${o.y}`).join(" ");return d.jsxs("svg",{width:"100",height:"30",style:{flexShrink:0},children:[d.jsx("path",{d:r,fill:"none",stroke:e,strokeWidth:"1.5",opacity:"0.6"}),a.map((o,c)=>d.jsx("circle",{cx:o.x,cy:o.y,r:"1.5",fill:e,opacity:"0.4"},c))]})}function _b({metricKey:t,metric:e,index:a}){var u,f;const r=vN[t]||"#CCFF00",o=typeof e.current=="number"?e.current.toLocaleString():e.current,c=(f=(u=e.change)==null?void 0:u.startsWith)==null?void 0:f.call(u,"+");return d.jsxs(Te.div,{className:"analytics-card glass",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:a*.05,type:"spring",stiffness:100},children:[d.jsxs("div",{className:"analytics-card-header",children:[d.jsx("div",{className:"analytics-card-icon",style:{background:`${r}15`,color:r},children:gN[t]}),d.jsx("span",{className:"analytics-card-change",style:{color:c?"#34d399":"#f87171"},children:e.change})]}),d.jsx("div",{className:"analytics-card-value",children:o}),d.jsx("div",{className:"analytics-card-label",children:yN[t]}),d.jsx(bN,{value:typeof e.current=="number"?e.current:parseInt(e.current)||50,color:r})]})}function xN(){const{analyticsData:t}=pN(),[e,a]=_.useState("1h"),r=Object.entries(t),o=r.slice(0,4),c=r.slice(4);return d.jsxs("div",{className:"page-enter",children:[d.jsxs("div",{className:"analytics-dashboard",children:[d.jsxs("div",{className:"analytics-header",children:[d.jsxs("div",{children:[d.jsx("h1",{className:"analytics-title",children:"Live Analytics"}),d.jsx("p",{className:"analytics-subtitle",children:"Real-time dashboard metrics"})]}),d.jsxs("div",{className:"analytics-header-right",children:[d.jsx(aw,{variant:"sidebar"}),d.jsx("div",{className:"analytics-time-selector",children:["1h","24h","7d","30d"].map(u=>d.jsx("button",{className:`analytics-time-btn ${e===u?"active":""}`,onClick:()=>a(u),children:u},u))})]})]}),d.jsx("div",{className:"analytics-primary-grid",children:o.map(([u,f],m)=>d.jsx(_b,{metricKey:u,metric:f,index:m},u))}),d.jsx("div",{className:"analytics-secondary-grid",children:c.map(([u,f],m)=>d.jsx(_b,{metricKey:u,metric:f,index:m+4},u))}),d.jsxs("div",{className:"analytics-footer glass",children:[d.jsx("div",{className:"analytics-footer-dot"}),d.jsx("span",{children:"All metrics updating in real-time • Auto-refresh enabled"})]})]}),d.jsx("style",{children:wN})]})}const wN=`
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
`,rw=_.createContext(),kb="framex-theme",SN={"--bg":"#08080f","--bg-alt":"#0c0c18","--text":"#ffffff","--text-secondary":"rgba(255,255,255,0.4)","--surface":"rgba(255,255,255,0.05)","--surface-hover":"rgba(255,255,255,0.10)","--border":"rgba(255,255,255,0.08)","--accent":"#CCFF00","--accent-text":"#08080f","--danger":"#ff4d4d","--glass-bg":"rgba(255,255,255,0.05)","--glass-border":"rgba(255,255,255,0.08)"},jN={"--bg":"#ffffff","--bg-alt":"#f5f5f7","--text":"#111111","--text-secondary":"rgba(0,0,0,0.45)","--surface":"rgba(0,0,0,0.03)","--surface-hover":"rgba(0,0,0,0.06)","--border":"rgba(0,0,0,0.08)","--accent":"#a0cc00","--accent-text":"#ffffff","--danger":"#e03030","--glass-bg":"rgba(255,255,255,0.7)","--glass-border":"rgba(0,0,0,0.06)"};function Tb(t){const e=t==="light"?jN:SN,a=document.documentElement;Object.entries(e).forEach(([r,o])=>a.style.setProperty(r,o)),a.setAttribute("data-theme",t)}function jh(){return typeof window>"u"?"dark":window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}function _N({children:t}){const[e,a]=_.useState(()=>{try{const f=localStorage.getItem(kb);if(f==="dark"||f==="light"||f==="system")return f}catch{}return"dark"}),[r,o]=_.useState(()=>e==="system"?jh():e),c=_.useCallback(f=>{a(f);try{localStorage.setItem(kb,f)}catch{}},[]),u=Ct();return _.useEffect(()=>{u.pathname==="/"?Tb("dark"):Tb(r)},[r,u.pathname]),_.useEffect(()=>{o(e==="system"?jh():e)},[e]),_.useEffect(()=>{if(e!=="system")return;const f=window.matchMedia("(prefers-color-scheme: dark)"),m=()=>o(jh());return f.addEventListener("change",m),()=>f.removeEventListener("change",m)},[e]),_.useEffect(()=>{const f=document.createElement("style");f.textContent=`
      *, *::before, *::after {
        transition: background-color 0.3s ease, color 0.3s ease,
                    border-color 0.3s ease, box-shadow 0.3s ease,
                    backdrop-filter 0.3s ease !important;
      }
    `,f.id="theme-transition-style";const m=document.getElementById("theme-transition-style");m&&m.remove(),document.head.appendChild(f);const g=setTimeout(()=>{const y=document.getElementById("theme-transition-style");y&&y.remove()},400);return()=>{clearTimeout(g);const y=document.getElementById("theme-transition-style");y&&y.remove()}},[r]),d.jsx(rw.Provider,{value:{theme:e,setTheme:c,resolvedTheme:r},children:t})}function kN(){const t=_.useContext(rw);if(!t)throw new Error("useTheme must be used within ThemeProvider");return t}const Ut={dark:d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"})}),light:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"12",cy:"12",r:"5"}),d.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),d.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),d.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),d.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),d.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),d.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),d.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),d.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),system:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),d.jsx("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),d.jsx("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]}),user:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}),d.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),lock:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),d.jsx("path",{d:"M7 11V7a5 5 0 0110 0v4"})]}),bell:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"}),d.jsx("path",{d:"M13.73 21a2 2 0 01-3.46 0"})]}),shield:d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),chevronRight:d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("polyline",{points:"9 18 15 12 9 6"})}),helpCircle:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"12",cy:"12",r:"10"}),d.jsx("path",{d:"M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"}),d.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),info:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"12",cy:"12",r:"10"}),d.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),d.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),fileText:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"}),d.jsx("polyline",{points:"14 2 14 8 20 8"}),d.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),d.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),d.jsx("polyline",{points:"10 9 9 9 8 9"})]}),logOut:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"}),d.jsx("polyline",{points:"16 17 21 12 16 7"}),d.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),check:d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("polyline",{points:"20 6 9 17 4 12"})})},TN=[{id:"dark",label:"Dark",icon:Ut.dark},{id:"light",label:"Light",icon:Ut.light},{id:"system",label:"System",icon:Ut.system}],EN=[{id:"edit-profile",label:"Edit Profile",icon:Ut.user},{id:"privacy",label:"Privacy Settings",icon:Ut.lock},{id:"notifications",label:"Notification Settings",icon:Ut.bell},{id:"security",label:"Security Settings",icon:Ut.shield}],CN=[{id:"contact",label:"Contact Us",icon:Ut.helpCircle},{id:"about",label:"About FrameX",icon:Ut.info},{id:"terms",label:"Terms & Privacy Policy",icon:Ut.fileText}],AN={initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5}};function RN(){const{theme:t,setTheme:e}=kN(),{signOut:a}=Tn(),r=ui(),o=async()=>{try{await a(),r("/login")}catch{}};return d.jsxs(Te.div,{className:"settings-page",...AN,children:[d.jsxs("div",{className:"page-header",children:[d.jsx("h1",{children:"Settings"}),d.jsx("p",{children:"Manage your account and preferences"})]}),d.jsxs("div",{className:"settings-card glass",children:[d.jsx("h3",{className:"settings-card-title",children:"Appearance"}),d.jsx("div",{className:"theme-options",children:TN.map(c=>d.jsxs("button",{className:`theme-card ${t===c.id?"active":""}`,onClick:()=>e(c.id),children:[d.jsx("div",{className:"theme-card-icon",children:c.icon}),d.jsx("span",{className:"theme-card-label",children:c.label}),t===c.id&&d.jsx("div",{className:"theme-card-check",children:Ut.check})]},c.id))})]}),d.jsxs("div",{className:"settings-card glass",children:[d.jsx("h3",{className:"settings-card-title",children:"Account"}),d.jsx("div",{className:"settings-items",children:EN.map(c=>d.jsxs("div",{className:"settings-item",children:[d.jsx("div",{className:"settings-item-icon",children:c.icon}),d.jsx("div",{className:"settings-item-content",children:d.jsx("span",{className:"settings-item-label",children:c.label})}),d.jsx("div",{className:"settings-item-arrow",children:Ut.chevronRight})]},c.id))})]}),d.jsxs("div",{className:"settings-card glass",children:[d.jsx("h3",{className:"settings-card-title",children:"Support"}),d.jsx("div",{className:"settings-items",children:CN.map(c=>d.jsxs("div",{className:"settings-item",children:[d.jsx("div",{className:"settings-item-icon",children:c.icon}),d.jsx("div",{className:"settings-item-content",children:d.jsx("span",{className:"settings-item-label",children:c.label})}),d.jsx("div",{className:"settings-item-arrow",children:Ut.chevronRight})]},c.id))})]}),d.jsxs("div",{className:"logout-section",children:[d.jsxs("button",{className:"logout-btn",onClick:o,children:[Ut.logOut," Logout"]}),d.jsx("span",{className:"version",children:"FrameX v1.0.0"})]}),d.jsx("style",{children:`
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
      `})]})}class NN extends _.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,a){console.error("ErrorBoundary caught:",e,a)}render(){return this.state.error?d.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#08080f",color:"#fff",fontFamily:"system-ui, sans-serif",padding:"2rem"},children:d.jsxs("div",{style:{maxWidth:480,padding:"2rem",background:"rgba(255,255,255,0.04)",borderRadius:16,border:"1px solid rgba(255,255,255,0.08)"},children:[d.jsx("h2",{style:{margin:"0 0 0.75rem",fontSize:"1.25rem"},children:"Something went wrong"}),d.jsx("p",{style:{color:"rgba(255,255,255,0.5)",fontSize:"0.85rem",margin:0},children:this.state.error.message})]})}):this.props.children}}function zi({children:t}){const{user:e,isLoading:a}=Tn(),r=Ct();return a?d.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#08080f",color:"#fff",fontFamily:"system-ui, sans-serif",flexDirection:"column",gap:"1rem"},children:[d.jsx("div",{className:"auth-spinner"}),d.jsx("p",{style:{color:"rgba(255,255,255,0.4)",fontSize:"0.9rem"},children:"Loading..."}),d.jsx("style",{children:`
          .auth-spinner {
            width: 32px; height: 32px;
            border: 2px solid rgba(255,255,255,0.06);
            border-top-color: #CCFF00;
            border-radius: 50%;
            animation: spin 0.7s linear infinite;
          }
          @keyframes spin { to { transform: rotate(360deg); } }
        `})]}):e?t:d.jsx(US,{to:"/login",state:{from:r},replace:!0})}const ON=[{path:"/home",label:"Home",icon:"home"},{path:"/explore",label:"Explore",icon:"explore"},{path:"/chat",label:"Chats",icon:"chat"},{path:"/notifications",label:"Alerts",icon:"bell"},{path:"/profile",label:"Profile",icon:"user"}],Eb={home:t=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:t?"currentColor":"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M3 12l9-9 9 9"}),d.jsx("path",{d:"M5 10v9a1 1 0 001 1h3v-5h6v5h3a1 1 0 001-1v-9"})]}),explore:t=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"12",cy:"12",r:"10"}),d.jsx("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"})]}),chat:t=>d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})}),bell:t=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),d.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),user:t=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}),d.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),plus:()=>d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),d.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})};function DN(){const t=ui(),e=Ct(),{unreadCount:a}=ma(),[r,o]=_.useState(!0),c=_.useRef(0);return _.useEffect(()=>{const u=()=>{const f=window.scrollY;f>c.current&&f>60?o(!1):o(!0),c.current=f};return window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[]),d.jsx(_n,{children:r&&d.jsxs(Te.nav,{className:"bottom-nav",initial:{y:100},animate:{y:0},exit:{y:100},transition:{type:"spring",stiffness:300,damping:30},children:[d.jsx("div",{className:"bottom-nav-inner",children:ON.map(u=>{const f=e.pathname===u.path;return d.jsxs("button",{className:`bottom-nav-item ${f?"active":""}`,onClick:()=>{e.pathname!==u.path&&(window.scrollTo({top:0,behavior:"smooth"}),t(u.path))},children:[d.jsxs("span",{className:"nav-icon-wrap",children:[Eb[u.icon](f),u.path==="/notifications"&&a>0&&d.jsx("span",{className:"bottom-nav-badge",children:a>99?"99+":a})]}),d.jsx("span",{className:"nav-label-text",children:u.label})]},u.path)})}),d.jsx("button",{className:"create-btn",onClick:()=>t("/home"),"aria-label":"Create post",children:Eb.plus()}),d.jsx("style",{children:MN})]})})}const MN=`
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
`,Cb={home:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M3 12l9-9 9 9"}),d.jsx("path",{d:"M5 10v9a1 1 0 001 1h3v-5h6v5h3a1 1 0 001-1v-9"})]}),explore:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"12",cy:"12",r:"10"}),d.jsx("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"})]}),communities:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),d.jsx("circle",{cx:"9",cy:"7",r:"4"}),d.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),d.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),chat:d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})}),notification:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),d.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),settings:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"12",cy:"12",r:"3"}),d.jsx("path",{d:"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"})]}),analytics:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M18 20V10"}),d.jsx("path",{d:"M12 20V4"}),d.jsx("path",{d:"M6 20v-6"})]}),profile:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}),d.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),logout:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"}),d.jsx("polyline",{points:"16 17 21 12 16 7"}),d.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]})},LN=[{path:"/home",label:"Home",icon:"home"},{path:"/explore",label:"Explore",icon:"explore"},{path:"/communities",label:"Communities",icon:"communities"},{path:"/chat",label:"Chats",icon:"chat"},{path:"/notifications",label:"Notifications",icon:"notification"},{path:"/profile",label:"Profile",icon:"profile"},{path:"/analytics",label:"Analytics",icon:"analytics"},{path:"/settings",label:"Settings",icon:"settings"}],zN={"/home":"Home","/explore":"Explore","/communities":"Communities","/chat":"Chats","/notifications":"Notifications","/profile":"Profile","/analytics":"Analytics","/settings":"Settings"},UN={initial:{opacity:0,y:12},animate:{opacity:1,y:0,transition:{duration:.3,ease:"easeOut"}},exit:{opacity:0,y:-12,transition:{duration:.2,ease:"easeIn"}}};function da({children:t}){var g,y,v,x;const{user:e,profile:a,signOut:r}=Tn(),o=ui(),c=Ct(),u=zN[c.pathname]||"FrameX",{unreadCount:f}=ma(),m=async()=>{await r(),o("/login")};return d.jsxs("div",{className:"app-layout",children:[d.jsxs("aside",{className:"desktop-sidebar",children:[d.jsxs("div",{className:"sidebar-brand",onClick:()=>o("/home"),children:[d.jsx("span",{className:"sidebar-logo-mark",children:"F"}),d.jsx("span",{className:"sidebar-logo-text",children:"FrameX"})]}),d.jsx("nav",{className:"sidebar-nav-main",children:LN.map(w=>d.jsxs("button",{className:`sidebar-nav-item ${c.pathname===w.path?"active":""}`,onClick:()=>o(w.path),children:[d.jsx("span",{className:"sidebar-nav-icon",children:Cb[w.icon]}),d.jsx("span",{className:"sidebar-nav-label",children:w.label}),w.path==="/notifications"&&f>0&&d.jsx("span",{className:"sidebar-notif-badge",children:f>99?"99+":f})]},w.path))}),d.jsx(aw,{variant:"sidebar"}),d.jsx("div",{className:"sidebar-divider"}),d.jsxs("div",{className:"sidebar-profile-section",onClick:()=>o("/profile"),children:[d.jsx("div",{className:"sidebar-profile-avatar",style:{background:(a==null?void 0:a.avatar_color)||"var(--accent)"},children:((g=a==null?void 0:a.username)==null?void 0:g[0])||((v=(y=e==null?void 0:e.email)==null?void 0:y[0])==null?void 0:v.toUpperCase())||"?"}),d.jsxs("div",{className:"sidebar-profile-info",children:[d.jsx("span",{className:"sidebar-profile-name",children:(a==null?void 0:a.username)||((x=e==null?void 0:e.email)==null?void 0:x.split("@")[0])||"User"}),d.jsxs("span",{className:"sidebar-profile-handle",children:["@",(a==null?void 0:a.username)||"user"]})]})]}),d.jsxs("button",{className:"sidebar-logout-btn",onClick:m,children:[d.jsx("span",{className:"sidebar-nav-icon",children:Cb.logout}),d.jsx("span",{className:"sidebar-nav-label",children:"Log Out"})]})]}),d.jsxs("div",{className:"app-main",children:[d.jsx("header",{className:"mobile-header",children:d.jsxs("div",{className:"mobile-header-left",onClick:()=>o("/home"),children:[d.jsx("span",{className:"mobile-header-logo",children:"F"}),d.jsx("span",{className:"mobile-header-title",children:u})]})}),d.jsx("main",{className:"app-content",children:d.jsx(_n,{mode:"wait",children:d.jsx(Te.div,{variants:UN,initial:"initial",animate:"animate",exit:"exit",children:t},c.pathname)})})]}),d.jsx(DN,{}),d.jsx("style",{children:`
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
      `})]})}function BN(){const{isLoading:t}=Tn();return t?d.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#08080f",color:"#fff",fontFamily:"system-ui, sans-serif",flexDirection:"column",gap:"1rem"},children:[d.jsx("div",{className:"app-loading-spinner"}),d.jsx("p",{style:{color:"rgba(255,255,255,0.4)",fontSize:"0.9rem"},children:"Loading..."}),d.jsx("style",{children:`
          .app-loading-spinner {
            width: 32px; height: 32px;
            border: 2px solid rgba(255,255,255,0.06);
            border-top-color: #CCFF00;
            border-radius: 50%;
            animation: spin 0.7s linear infinite;
          }
          @keyframes spin { to { transform: rotate(360deg); } }
        `})]}):d.jsx(NN,{children:d.jsx(_N,{children:d.jsxs(PS,{children:[d.jsx(cn,{path:"/",element:d.jsx(bj,{})}),d.jsx(cn,{path:"/about",element:d.jsx(xj,{})}),d.jsx(cn,{path:"/login",element:d.jsx(ET,{})}),d.jsx(cn,{path:"/chat",element:d.jsx(zi,{children:d.jsx(NT,{})})}),d.jsx(cn,{path:"/home",element:d.jsx(zi,{children:d.jsx(da,{children:d.jsx(qR,{})})})}),d.jsx(cn,{path:"/profile",element:d.jsx(zi,{children:d.jsx(da,{children:d.jsx(XR,{})})})}),d.jsx(cn,{path:"/communities",element:d.jsx(zi,{children:d.jsx(da,{children:d.jsx(ZR,{})})})}),d.jsx(cn,{path:"/explore",element:d.jsx(zi,{children:d.jsx(da,{children:d.jsx(hN,{})})})}),d.jsx(cn,{path:"/notifications",element:d.jsx(zi,{children:d.jsx(da,{children:d.jsx(mN,{})})})}),d.jsx(cn,{path:"/settings",element:d.jsx(zi,{children:d.jsx(da,{children:d.jsx(RN,{})})})}),d.jsx(cn,{path:"/analytics",element:d.jsx(zi,{children:d.jsx(da,{children:d.jsx(xN,{})})})})]})})})}Tn.getState().initialize();P5.createRoot(document.getElementById("root")).render(d.jsx(As.StrictMode,{children:d.jsx(cj,{children:d.jsx(BN,{})})}));
