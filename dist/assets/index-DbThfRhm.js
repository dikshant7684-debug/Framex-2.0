(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function a(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=a(o);fetch(o.href,l)}})();function Yb(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var uh={exports:{}},Gs={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var my;function M5(){if(my)return Gs;my=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function a(r,o,l){var d=null;if(l!==void 0&&(d=""+l),o.key!==void 0&&(d=""+o.key),"key"in o){l={};for(var h in o)h!=="key"&&(l[h]=o[h])}else l=o;return o=l.ref,{$$typeof:t,type:r,key:d,ref:o!==void 0?o:null,props:l}}return Gs.Fragment=e,Gs.jsx=a,Gs.jsxs=a,Gs}var gy;function z5(){return gy||(gy=1,uh.exports=M5()),uh.exports}var u=z5(),dh={exports:{}},ke={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yy;function U5(){if(yy)return ke;yy=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),x=Symbol.iterator;function w(R){return R===null||typeof R!="object"?null:(R=x&&R[x]||R["@@iterator"],typeof R=="function"?R:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function k(R,G,ee){this.props=R,this.context=G,this.refs=T,this.updater=ee||j}k.prototype.isReactComponent={},k.prototype.setState=function(R,G){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,G,"setState")},k.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function C(){}C.prototype=k.prototype;function N(R,G,ee){this.props=R,this.context=G,this.refs=T,this.updater=ee||j}var z=N.prototype=new C;z.constructor=N,E(z,k.prototype),z.isPureReactComponent=!0;var J=Array.isArray;function Q(){}var D={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function H(R,G,ee){var te=ee.ref;return{$$typeof:t,type:R,key:G,ref:te!==void 0?te:null,props:ee}}function X(R,G){return H(R.type,G,R.props)}function se(R){return typeof R=="object"&&R!==null&&R.$$typeof===t}function oe(R){var G={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(ee){return G[ee]})}var Se=/\/+/g;function Ne(R,G){return typeof R=="object"&&R!==null&&R.key!=null?oe(""+R.key):G.toString(36)}function je(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(Q,Q):(R.status="pending",R.then(function(G){R.status==="pending"&&(R.status="fulfilled",R.value=G)},function(G){R.status==="pending"&&(R.status="rejected",R.reason=G)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function M(R,G,ee,te,fe){var _e=typeof R;(_e==="undefined"||_e==="boolean")&&(R=null);var Z=!1;if(R===null)Z=!0;else switch(_e){case"bigint":case"string":case"number":Z=!0;break;case"object":switch(R.$$typeof){case t:case e:Z=!0;break;case y:return Z=R._init,M(Z(R._payload),G,ee,te,fe)}}if(Z)return fe=fe(R),Z=te===""?"."+Ne(R,0):te,J(fe)?(ee="",Z!=null&&(ee=Z.replace(Se,"$&/")+"/"),M(fe,G,ee,"",function(tt){return tt})):fe!=null&&(se(fe)&&(fe=X(fe,ee+(fe.key==null||R&&R.key===fe.key?"":(""+fe.key).replace(Se,"$&/")+"/")+Z)),G.push(fe)),1;Z=0;var ge=te===""?".":te+":";if(J(R))for(var pe=0;pe<R.length;pe++)te=R[pe],_e=ge+Ne(te,pe),Z+=M(te,G,ee,_e,fe);else if(pe=w(R),typeof pe=="function")for(R=pe.call(R),pe=0;!(te=R.next()).done;)te=te.value,_e=ge+Ne(te,pe++),Z+=M(te,G,ee,_e,fe);else if(_e==="object"){if(typeof R.then=="function")return M(je(R),G,ee,te,fe);throw G=String(R),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return Z}function ne(R,G,ee){if(R==null)return R;var te=[],fe=0;return M(R,te,"","",function(_e){return G.call(ee,_e,fe++)}),te}function ie(R){if(R._status===-1){var G=R._result;G=G(),G.then(function(ee){(R._status===0||R._status===-1)&&(R._status=1,R._result=ee)},function(ee){(R._status===0||R._status===-1)&&(R._status=2,R._result=ee)}),R._status===-1&&(R._status=0,R._result=G)}if(R._status===1)return R._result.default;throw R._result}var ye=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)},be={map:ne,forEach:function(R,G,ee){ne(R,function(){G.apply(this,arguments)},ee)},count:function(R){var G=0;return ne(R,function(){G++}),G},toArray:function(R){return ne(R,function(G){return G})||[]},only:function(R){if(!se(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};return ke.Activity=v,ke.Children=be,ke.Component=k,ke.Fragment=a,ke.Profiler=o,ke.PureComponent=N,ke.StrictMode=r,ke.Suspense=p,ke.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,ke.__COMPILER_RUNTIME={__proto__:null,c:function(R){return D.H.useMemoCache(R)}},ke.cache=function(R){return function(){return R.apply(null,arguments)}},ke.cacheSignal=function(){return null},ke.cloneElement=function(R,G,ee){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var te=E({},R.props),fe=R.key;if(G!=null)for(_e in G.key!==void 0&&(fe=""+G.key),G)!q.call(G,_e)||_e==="key"||_e==="__self"||_e==="__source"||_e==="ref"&&G.ref===void 0||(te[_e]=G[_e]);var _e=arguments.length-2;if(_e===1)te.children=ee;else if(1<_e){for(var Z=Array(_e),ge=0;ge<_e;ge++)Z[ge]=arguments[ge+2];te.children=Z}return H(R.type,fe,te)},ke.createContext=function(R){return R={$$typeof:d,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:l,_context:R},R},ke.createElement=function(R,G,ee){var te,fe={},_e=null;if(G!=null)for(te in G.key!==void 0&&(_e=""+G.key),G)q.call(G,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(fe[te]=G[te]);var Z=arguments.length-2;if(Z===1)fe.children=ee;else if(1<Z){for(var ge=Array(Z),pe=0;pe<Z;pe++)ge[pe]=arguments[pe+2];fe.children=ge}if(R&&R.defaultProps)for(te in Z=R.defaultProps,Z)fe[te]===void 0&&(fe[te]=Z[te]);return H(R,_e,fe)},ke.createRef=function(){return{current:null}},ke.forwardRef=function(R){return{$$typeof:h,render:R}},ke.isValidElement=se,ke.lazy=function(R){return{$$typeof:y,_payload:{_status:-1,_result:R},_init:ie}},ke.memo=function(R,G){return{$$typeof:m,type:R,compare:G===void 0?null:G}},ke.startTransition=function(R){var G=D.T,ee={};D.T=ee;try{var te=R(),fe=D.S;fe!==null&&fe(ee,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(Q,ye)}catch(_e){ye(_e)}finally{G!==null&&ee.types!==null&&(G.types=ee.types),D.T=G}},ke.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},ke.use=function(R){return D.H.use(R)},ke.useActionState=function(R,G,ee){return D.H.useActionState(R,G,ee)},ke.useCallback=function(R,G){return D.H.useCallback(R,G)},ke.useContext=function(R){return D.H.useContext(R)},ke.useDebugValue=function(){},ke.useDeferredValue=function(R,G){return D.H.useDeferredValue(R,G)},ke.useEffect=function(R,G){return D.H.useEffect(R,G)},ke.useEffectEvent=function(R){return D.H.useEffectEvent(R)},ke.useId=function(){return D.H.useId()},ke.useImperativeHandle=function(R,G,ee){return D.H.useImperativeHandle(R,G,ee)},ke.useInsertionEffect=function(R,G){return D.H.useInsertionEffect(R,G)},ke.useLayoutEffect=function(R,G){return D.H.useLayoutEffect(R,G)},ke.useMemo=function(R,G){return D.H.useMemo(R,G)},ke.useOptimistic=function(R,G){return D.H.useOptimistic(R,G)},ke.useReducer=function(R,G,ee){return D.H.useReducer(R,G,ee)},ke.useRef=function(R){return D.H.useRef(R)},ke.useState=function(R){return D.H.useState(R)},ke.useSyncExternalStore=function(R,G,ee){return D.H.useSyncExternalStore(R,G,ee)},ke.useTransition=function(){return D.H.useTransition()},ke.version="19.2.7",ke}var vy;function Df(){return vy||(vy=1,dh.exports=U5()),dh.exports}var S=Df();const Zs=Yb(S);var hh={exports:{}},Ks={},fh={exports:{}},ph={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var by;function B5(){return by||(by=1,(function(t){function e(M,ne){var ie=M.length;M.push(ne);e:for(;0<ie;){var ye=ie-1>>>1,be=M[ye];if(0<o(be,ne))M[ye]=ne,M[ie]=be,ie=ye;else break e}}function a(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var ne=M[0],ie=M.pop();if(ie!==ne){M[0]=ie;e:for(var ye=0,be=M.length,R=be>>>1;ye<R;){var G=2*(ye+1)-1,ee=M[G],te=G+1,fe=M[te];if(0>o(ee,ie))te<be&&0>o(fe,ee)?(M[ye]=fe,M[te]=ie,ye=te):(M[ye]=ee,M[G]=ie,ye=G);else if(te<be&&0>o(fe,ie))M[ye]=fe,M[te]=ie,ye=te;else break e}}return ne}function o(M,ne){var ie=M.sortIndex-ne.sortIndex;return ie!==0?ie:M.id-ne.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var d=Date,h=d.now();t.unstable_now=function(){return d.now()-h}}var p=[],m=[],y=1,v=null,x=3,w=!1,j=!1,E=!1,T=!1,k=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function z(M){for(var ne=a(m);ne!==null;){if(ne.callback===null)r(m);else if(ne.startTime<=M)r(m),ne.sortIndex=ne.expirationTime,e(p,ne);else break;ne=a(m)}}function J(M){if(E=!1,z(M),!j)if(a(p)!==null)j=!0,Q||(Q=!0,oe());else{var ne=a(m);ne!==null&&je(J,ne.startTime-M)}}var Q=!1,D=-1,q=5,H=-1;function X(){return T?!0:!(t.unstable_now()-H<q)}function se(){if(T=!1,Q){var M=t.unstable_now();H=M;var ne=!0;try{e:{j=!1,E&&(E=!1,C(D),D=-1),w=!0;var ie=x;try{t:{for(z(M),v=a(p);v!==null&&!(v.expirationTime>M&&X());){var ye=v.callback;if(typeof ye=="function"){v.callback=null,x=v.priorityLevel;var be=ye(v.expirationTime<=M);if(M=t.unstable_now(),typeof be=="function"){v.callback=be,z(M),ne=!0;break t}v===a(p)&&r(p),z(M)}else r(p);v=a(p)}if(v!==null)ne=!0;else{var R=a(m);R!==null&&je(J,R.startTime-M),ne=!1}}break e}finally{v=null,x=ie,w=!1}ne=void 0}}finally{ne?oe():Q=!1}}}var oe;if(typeof N=="function")oe=function(){N(se)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,Ne=Se.port2;Se.port1.onmessage=se,oe=function(){Ne.postMessage(null)}}else oe=function(){k(se,0)};function je(M,ne){D=k(function(){M(t.unstable_now())},ne)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(M){M.callback=null},t.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<M?Math.floor(1e3/M):5},t.unstable_getCurrentPriorityLevel=function(){return x},t.unstable_next=function(M){switch(x){case 1:case 2:case 3:var ne=3;break;default:ne=x}var ie=x;x=ne;try{return M()}finally{x=ie}},t.unstable_requestPaint=function(){T=!0},t.unstable_runWithPriority=function(M,ne){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var ie=x;x=M;try{return ne()}finally{x=ie}},t.unstable_scheduleCallback=function(M,ne,ie){var ye=t.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?ye+ie:ye):ie=ye,M){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=ie+be,M={id:y++,callback:ne,priorityLevel:M,startTime:ie,expirationTime:be,sortIndex:-1},ie>ye?(M.sortIndex=ie,e(m,M),a(p)===null&&M===a(m)&&(E?(C(D),D=-1):E=!0,je(J,ie-ye))):(M.sortIndex=be,e(p,M),j||w||(j=!0,Q||(Q=!0,oe()))),M},t.unstable_shouldYield=X,t.unstable_wrapCallback=function(M){var ne=x;return function(){var ie=x;x=ne;try{return M.apply(this,arguments)}finally{x=ie}}}})(ph)),ph}var xy;function P5(){return xy||(xy=1,fh.exports=B5()),fh.exports}var mh={exports:{}},Ht={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wy;function V5(){if(wy)return Ht;wy=1;var t=Df();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var r={d:{f:a,r:function(){throw Error(e(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(p,m,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:p,containerInfo:m,implementation:y}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ht.createPortal=function(p,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return l(p,m,null,y)},Ht.flushSync=function(p){var m=d.T,y=r.p;try{if(d.T=null,r.p=2,p)return p()}finally{d.T=m,r.p=y,r.d.f()}},Ht.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Ht.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Ht.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var y=m.as,v=h(y,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,w=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:w}):y==="script"&&r.d.X(p,{crossOrigin:v,integrity:x,fetchPriority:w,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Ht.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=h(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Ht.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,v=h(y,m.crossOrigin);r.d.L(p,y,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Ht.preloadModule=function(p,m){if(typeof p=="string")if(m){var y=h(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Ht.requestFormReset=function(p){r.d.r(p)},Ht.unstable_batchedUpdates=function(p,m){return p(m)},Ht.useFormState=function(p,m,y){return d.H.useFormState(p,m,y)},Ht.useFormStatus=function(){return d.H.useHostTransitionStatus()},Ht.version="19.2.7",Ht}var Sy;function $5(){if(Sy)return mh.exports;Sy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),mh.exports=V5(),mh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jy;function H5(){if(jy)return Ks;jy=1;var t=P5(),e=Df(),a=$5();function r(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var i=n,s=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(s=i.return),n=i.return;while(n)}return i.tag===3?s:null}function d(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function h(n){if(n.tag===31){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function p(n){if(l(n)!==n)throw Error(r(188))}function m(n){var i=n.alternate;if(!i){if(i=l(n),i===null)throw Error(r(188));return i!==n?null:n}for(var s=n,c=i;;){var f=s.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){s=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===s)return p(f),n;if(g===c)return p(f),i;g=g.sibling}throw Error(r(188))}if(s.return!==c.return)s=f,c=g;else{for(var b=!1,_=f.child;_;){if(_===s){b=!0,s=f,c=g;break}if(_===c){b=!0,c=f,s=g;break}_=_.sibling}if(!b){for(_=g.child;_;){if(_===s){b=!0,s=g,c=f;break}if(_===c){b=!0,c=g,s=f;break}_=_.sibling}if(!b)throw Error(r(189))}}if(s.alternate!==c)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?n:i}function y(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=y(n),i!==null)return i;n=n.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),N=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),X=Symbol.for("react.memo_cache_sentinel"),se=Symbol.iterator;function oe(n){return n===null||typeof n!="object"?null:(n=se&&n[se]||n["@@iterator"],typeof n=="function"?n:null)}var Se=Symbol.for("react.client.reference");function Ne(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===Se?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case E:return"Fragment";case k:return"Profiler";case T:return"StrictMode";case J:return"Suspense";case Q:return"SuspenseList";case H:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case j:return"Portal";case N:return n.displayName||"Context";case C:return(n._context.displayName||"Context")+".Consumer";case z:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case D:return i=n.displayName||null,i!==null?i:Ne(n.type)||"Memo";case q:i=n._payload,n=n._init;try{return Ne(n(i))}catch{}}return null}var je=Array.isArray,M=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},ye=[],be=-1;function R(n){return{current:n}}function G(n){0>be||(n.current=ye[be],ye[be]=null,be--)}function ee(n,i){be++,ye[be]=n.current,n.current=i}var te=R(null),fe=R(null),_e=R(null),Z=R(null);function ge(n,i){switch(ee(_e,i),ee(fe,n),ee(te,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?B0(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=B0(i),n=P0(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}G(te),ee(te,n)}function pe(){G(te),G(fe),G(_e)}function tt(n){n.memoizedState!==null&&ee(Z,n);var i=te.current,s=P0(i,n.type);i!==s&&(ee(fe,n),ee(te,s))}function $e(n){fe.current===n&&(G(te),G(fe)),Z.current===n&&(G(Z),Hs._currentValue=ie)}var Ke,bt;function Ee(n){if(Ke===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Ke=i&&i[1]||"",bt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ke+n+bt}var ct=!1;function wn(n,i){if(!n||ct)return"";ct=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(i){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(V){var P=V}Reflect.construct(n,[],W)}else{try{W.call()}catch(V){P=V}n.call(W.prototype)}}else{try{throw Error()}catch(V){P=V}(W=n())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(V){if(V&&P&&typeof V.stack=="string")return[V.stack,P.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=c.DetermineComponentFrameRoot(),b=g[0],_=g[1];if(b&&_){var A=b.split(`
`),B=_.split(`
`);for(f=c=0;c<A.length&&!A[c].includes("DetermineComponentFrameRoot");)c++;for(;f<B.length&&!B[f].includes("DetermineComponentFrameRoot");)f++;if(c===A.length||f===B.length)for(c=A.length-1,f=B.length-1;1<=c&&0<=f&&A[c]!==B[f];)f--;for(;1<=c&&0<=f;c--,f--)if(A[c]!==B[f]){if(c!==1||f!==1)do if(c--,f--,0>f||A[c]!==B[f]){var F=`
`+A[c].replace(" at new "," at ");return n.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",n.displayName)),F}while(1<=c&&0<=f);break}}}finally{ct=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?Ee(s):""}function Wi(n,i){switch(n.tag){case 26:case 27:case 5:return Ee(n.type);case 16:return Ee("Lazy");case 13:return n.child!==i&&i!==null?Ee("Suspense Fallback"):Ee("Suspense");case 19:return Ee("SuspenseList");case 0:case 15:return wn(n.type,!1);case 11:return wn(n.type.render,!1);case 1:return wn(n.type,!0);case 31:return Ee("Activity");default:return""}}function ca(n){try{var i="",s=null;do i+=Wi(n,s),s=n,n=n.return;while(n);return i}catch(c){return`
Error generating stack: `+c.message+`
`+c.stack}}var za=Object.prototype.hasOwnProperty,vi=t.unstable_scheduleCallback,I=t.unstable_cancelCallback,de=t.unstable_shouldYield,Je=t.unstable_requestPaint,Be=t.unstable_now,qt=t.unstable_getCurrentPriorityLevel,Jt=t.unstable_ImmediatePriority,xt=t.unstable_UserBlockingPriority,Sn=t.unstable_NormalPriority,Re=t.unstable_LowPriority,Dt=t.unstable_IdlePriority,Jc=t.log,Qc=t.unstable_setDisableYieldValue,Ua=null,Ft=null;function Un(n){if(typeof Jc=="function"&&Qc(n),Ft&&typeof Ft.setStrictMode=="function")try{Ft.setStrictMode(Ua,n)}catch{}}var $t=Math.clz32?Math.clz32:Oe,Y=Math.log,re=Math.LN2;function Oe(n){return n>>>=0,n===0?32:31-(Y(n)/re|0)|0}var Ie=256,Ae=262144,Tt=4194304;function mt(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function nt(n,i,s){var c=n.pendingLanes;if(c===0)return 0;var f=0,g=n.suspendedLanes,b=n.pingedLanes;n=n.warmLanes;var _=c&134217727;return _!==0?(c=_&~g,c!==0?f=mt(c):(b&=_,b!==0?f=mt(b):s||(s=_&~n,s!==0&&(f=mt(s))))):(_=c&~g,_!==0?f=mt(_):b!==0?f=mt(b):s||(s=c&~n,s!==0&&(f=mt(s)))),f===0?0:i!==0&&i!==f&&(i&g)===0&&(g=f&-f,s=i&-i,g>=s||g===32&&(s&4194048)!==0)?i:f}function Qt(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function Xi(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bi(){var n=Tt;return Tt<<=1,(Tt&62914560)===0&&(Tt=4194304),n}function xi(n){for(var i=[],s=0;31>s;s++)i.push(n);return i}function jn(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function wi(n,i,s,c,f,g){var b=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var _=n.entanglements,A=n.expirationTimes,B=n.hiddenUpdates;for(s=b&~s;0<s;){var F=31-$t(s),W=1<<F;_[F]=0,A[F]=-1;var P=B[F];if(P!==null)for(B[F]=null,F=0;F<P.length;F++){var V=P[F];V!==null&&(V.lane&=-536870913)}s&=~W}c!==0&&Oo(n,c,0),g!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=g&~(b&~i))}function Oo(n,i,s){n.pendingLanes|=i,n.suspendedLanes&=~i;var c=31-$t(i);n.entangledLanes|=i,n.entanglements[c]=n.entanglements[c]|1073741824|s&261930}function wp(n,i){var s=n.entangledLanes|=i;for(n=n.entanglements;s;){var c=31-$t(s),f=1<<c;f&i|n[c]&i&&(n[c]|=i),s&=~f}}function Sp(n,i){var s=i&-i;return s=(s&42)!==0?1:Zc(s),(s&(n.suspendedLanes|i))!==0?0:s}function Zc(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function eu(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function jp(){var n=ne.p;return n!==0?n:(n=window.event,n===void 0?32:ly(n.type))}function _p(n,i){var s=ne.p;try{return ne.p=n,i()}finally{ne.p=s}}var Ba=Math.random().toString(36).slice(2),Lt="__reactFiber$"+Ba,Zt="__reactProps$"+Ba,Ji="__reactContainer$"+Ba,tu="__reactEvents$"+Ba,_1="__reactListeners$"+Ba,k1="__reactHandles$"+Ba,kp="__reactResources$"+Ba,as="__reactMarker$"+Ba;function nu(n){delete n[Lt],delete n[Zt],delete n[tu],delete n[_1],delete n[k1]}function Qi(n){var i=n[Lt];if(i)return i;for(var s=n.parentNode;s;){if(i=s[Ji]||s[Lt]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(n=G0(n);n!==null;){if(s=n[Lt])return s;n=G0(n)}return i}n=s,s=n.parentNode}return null}function Zi(n){if(n=n[Lt]||n[Ji]){var i=n.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return n}return null}function is(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(r(33))}function er(n){var i=n[kp];return i||(i=n[kp]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Nt(n){n[as]=!0}var Ep=new Set,Tp={};function Si(n,i){tr(n,i),tr(n+"Capture",i)}function tr(n,i){for(Tp[n]=i,n=0;n<i.length;n++)Ep.add(i[n])}var E1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Cp={},Ap={};function T1(n){return za.call(Ap,n)?!0:za.call(Cp,n)?!1:E1.test(n)?Ap[n]=!0:(Cp[n]=!0,!1)}function Do(n,i,s){if(T1(i))if(s===null)n.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var c=i.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+s)}}function Lo(n,i,s){if(s===null)n.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+s)}}function ua(n,i,s,c){if(c===null)n.removeAttribute(s);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(i,s,""+c)}}function _n(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Np(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function C1(n,i,s){var c=Object.getOwnPropertyDescriptor(n.constructor.prototype,i);if(!n.hasOwnProperty(i)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var f=c.get,g=c.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(b){s=""+b,g.call(this,b)}}),Object.defineProperty(n,i,{enumerable:c.enumerable}),{getValue:function(){return s},setValue:function(b){s=""+b},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function au(n){if(!n._valueTracker){var i=Np(n)?"checked":"value";n._valueTracker=C1(n,i,""+n[i])}}function Rp(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var s=i.getValue(),c="";return n&&(c=Np(n)?n.checked?"true":"false":n.value),n=c,n!==s?(i.setValue(n),!0):!1}function Mo(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var A1=/[\n"\\]/g;function kn(n){return n.replace(A1,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function iu(n,i,s,c,f,g,b,_){n.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?n.type=b:n.removeAttribute("type"),i!=null?b==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+_n(i)):n.value!==""+_n(i)&&(n.value=""+_n(i)):b!=="submit"&&b!=="reset"||n.removeAttribute("value"),i!=null?ru(n,b,_n(i)):s!=null?ru(n,b,_n(s)):c!=null&&n.removeAttribute("value"),f==null&&g!=null&&(n.defaultChecked=!!g),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?n.name=""+_n(_):n.removeAttribute("name")}function Op(n,i,s,c,f,g,b,_){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(n.type=g),i!=null||s!=null){if(!(g!=="submit"&&g!=="reset"||i!=null)){au(n);return}s=s!=null?""+_n(s):"",i=i!=null?""+_n(i):s,_||i===n.value||(n.value=i),n.defaultValue=i}c=c??f,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=_?n.checked:!!c,n.defaultChecked=!!c,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(n.name=b),au(n)}function ru(n,i,s){i==="number"&&Mo(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function nr(n,i,s,c){if(n=n.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<n.length;s++)f=i.hasOwnProperty("$"+n[s].value),n[s].selected!==f&&(n[s].selected=f),f&&c&&(n[s].defaultSelected=!0)}else{for(s=""+_n(s),i=null,f=0;f<n.length;f++){if(n[f].value===s){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function Dp(n,i,s){if(i!=null&&(i=""+_n(i),i!==n.value&&(n.value=i),s==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=s!=null?""+_n(s):""}function Lp(n,i,s,c){if(i==null){if(c!=null){if(s!=null)throw Error(r(92));if(je(c)){if(1<c.length)throw Error(r(93));c=c[0]}s=c}s==null&&(s=""),i=s}s=_n(i),n.defaultValue=s,c=n.textContent,c===s&&c!==""&&c!==null&&(n.value=c),au(n)}function ar(n,i){if(i){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=i;return}}n.textContent=i}var N1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mp(n,i,s){var c=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?c?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":c?n.setProperty(i,s):typeof s!="number"||s===0||N1.has(i)?i==="float"?n.cssFloat=s:n[i]=(""+s).trim():n[i]=s+"px"}function zp(n,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(n=n.style,s!=null){for(var c in s)!s.hasOwnProperty(c)||i!=null&&i.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var f in i)c=i[f],i.hasOwnProperty(f)&&s[f]!==c&&Mp(n,f,c)}else for(var g in i)i.hasOwnProperty(g)&&Mp(n,g,i[g])}function su(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var R1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),O1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zo(n){return O1.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function da(){}var ou=null;function lu(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ir=null,rr=null;function Up(n){var i=Zi(n);if(i&&(n=i.stateNode)){var s=n[Zt]||null;e:switch(n=i.stateNode,i.type){case"input":if(iu(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+kn(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var c=s[i];if(c!==n&&c.form===n.form){var f=c[Zt]||null;if(!f)throw Error(r(90));iu(c,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)c=s[i],c.form===n.form&&Rp(c)}break e;case"textarea":Dp(n,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&nr(n,!!s.multiple,i,!1)}}}var cu=!1;function Bp(n,i,s){if(cu)return n(i,s);cu=!0;try{var c=n(i);return c}finally{if(cu=!1,(ir!==null||rr!==null)&&(jl(),ir&&(i=ir,n=rr,rr=ir=null,Up(i),n)))for(i=0;i<n.length;i++)Up(n[i])}}function rs(n,i){var s=n.stateNode;if(s===null)return null;var c=s[Zt]||null;if(c===null)return null;s=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var ha=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uu=!1;if(ha)try{var ss={};Object.defineProperty(ss,"passive",{get:function(){uu=!0}}),window.addEventListener("test",ss,ss),window.removeEventListener("test",ss,ss)}catch{uu=!1}var Pa=null,du=null,Uo=null;function Pp(){if(Uo)return Uo;var n,i=du,s=i.length,c,f="value"in Pa?Pa.value:Pa.textContent,g=f.length;for(n=0;n<s&&i[n]===f[n];n++);var b=s-n;for(c=1;c<=b&&i[s-c]===f[g-c];c++);return Uo=f.slice(n,1<c?1-c:void 0)}function Bo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Po(){return!0}function Vp(){return!1}function en(n){function i(s,c,f,g,b){this._reactName=s,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=b,this.currentTarget=null;for(var _ in n)n.hasOwnProperty(_)&&(s=n[_],this[_]=s?s(g):g[_]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Po:Vp,this.isPropagationStopped=Vp,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),i}var ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vo=en(ji),os=v({},ji,{view:0,detail:0}),D1=en(os),hu,fu,ls,$o=v({},os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ls&&(ls&&n.type==="mousemove"?(hu=n.screenX-ls.screenX,fu=n.screenY-ls.screenY):fu=hu=0,ls=n),hu)},movementY:function(n){return"movementY"in n?n.movementY:fu}}),$p=en($o),L1=v({},$o,{dataTransfer:0}),M1=en(L1),z1=v({},os,{relatedTarget:0}),pu=en(z1),U1=v({},ji,{animationName:0,elapsedTime:0,pseudoElement:0}),B1=en(U1),P1=v({},ji,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),V1=en(P1),$1=v({},ji,{data:0}),Hp=en($1),H1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F1(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=q1[n])?!!i[n]:!1}function mu(){return F1}var G1=v({},os,{key:function(n){if(n.key){var i=H1[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Bo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?I1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mu,charCode:function(n){return n.type==="keypress"?Bo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Bo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),K1=en(G1),Y1=v({},$o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ip=en(Y1),W1=v({},os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mu}),X1=en(W1),J1=v({},ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),Q1=en(J1),Z1=v({},$o,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),e2=en(Z1),t2=v({},ji,{newState:0,oldState:0}),n2=en(t2),a2=[9,13,27,32],gu=ha&&"CompositionEvent"in window,cs=null;ha&&"documentMode"in document&&(cs=document.documentMode);var i2=ha&&"TextEvent"in window&&!cs,qp=ha&&(!gu||cs&&8<cs&&11>=cs),Fp=" ",Gp=!1;function Kp(n,i){switch(n){case"keyup":return a2.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var sr=!1;function r2(n,i){switch(n){case"compositionend":return Yp(i);case"keypress":return i.which!==32?null:(Gp=!0,Fp);case"textInput":return n=i.data,n===Fp&&Gp?null:n;default:return null}}function s2(n,i){if(sr)return n==="compositionend"||!gu&&Kp(n,i)?(n=Pp(),Uo=du=Pa=null,sr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return qp&&i.locale!=="ko"?null:i.data;default:return null}}var o2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wp(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!o2[n.type]:i==="textarea"}function Xp(n,i,s,c){ir?rr?rr.push(c):rr=[c]:ir=c,i=Nl(i,"onChange"),0<i.length&&(s=new Vo("onChange","change",null,s,c),n.push({event:s,listeners:i}))}var us=null,ds=null;function l2(n){O0(n,0)}function Ho(n){var i=is(n);if(Rp(i))return n}function Jp(n,i){if(n==="change")return i}var Qp=!1;if(ha){var yu;if(ha){var vu="oninput"in document;if(!vu){var Zp=document.createElement("div");Zp.setAttribute("oninput","return;"),vu=typeof Zp.oninput=="function"}yu=vu}else yu=!1;Qp=yu&&(!document.documentMode||9<document.documentMode)}function em(){us&&(us.detachEvent("onpropertychange",tm),ds=us=null)}function tm(n){if(n.propertyName==="value"&&Ho(ds)){var i=[];Xp(i,ds,n,lu(n)),Bp(l2,i)}}function c2(n,i,s){n==="focusin"?(em(),us=i,ds=s,us.attachEvent("onpropertychange",tm)):n==="focusout"&&em()}function u2(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ho(ds)}function d2(n,i){if(n==="click")return Ho(i)}function h2(n,i){if(n==="input"||n==="change")return Ho(i)}function f2(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var un=typeof Object.is=="function"?Object.is:f2;function hs(n,i){if(un(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var s=Object.keys(n),c=Object.keys(i);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var f=s[c];if(!za.call(i,f)||!un(n[f],i[f]))return!1}return!0}function nm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function am(n,i){var s=nm(n);n=0;for(var c;s;){if(s.nodeType===3){if(c=n+s.textContent.length,n<=i&&c>=i)return{node:s,offset:i-n};n=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=nm(s)}}function im(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?im(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function rm(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=Mo(n.document);i instanceof n.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)n=i.contentWindow;else break;i=Mo(n.document)}return i}function bu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var p2=ha&&"documentMode"in document&&11>=document.documentMode,or=null,xu=null,fs=null,wu=!1;function sm(n,i,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;wu||or==null||or!==Mo(c)||(c=or,"selectionStart"in c&&bu(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),fs&&hs(fs,c)||(fs=c,c=Nl(xu,"onSelect"),0<c.length&&(i=new Vo("onSelect","select",null,i,s),n.push({event:i,listeners:c}),i.target=or)))}function _i(n,i){var s={};return s[n.toLowerCase()]=i.toLowerCase(),s["Webkit"+n]="webkit"+i,s["Moz"+n]="moz"+i,s}var lr={animationend:_i("Animation","AnimationEnd"),animationiteration:_i("Animation","AnimationIteration"),animationstart:_i("Animation","AnimationStart"),transitionrun:_i("Transition","TransitionRun"),transitionstart:_i("Transition","TransitionStart"),transitioncancel:_i("Transition","TransitionCancel"),transitionend:_i("Transition","TransitionEnd")},Su={},om={};ha&&(om=document.createElement("div").style,"AnimationEvent"in window||(delete lr.animationend.animation,delete lr.animationiteration.animation,delete lr.animationstart.animation),"TransitionEvent"in window||delete lr.transitionend.transition);function ki(n){if(Su[n])return Su[n];if(!lr[n])return n;var i=lr[n],s;for(s in i)if(i.hasOwnProperty(s)&&s in om)return Su[n]=i[s];return n}var lm=ki("animationend"),cm=ki("animationiteration"),um=ki("animationstart"),m2=ki("transitionrun"),g2=ki("transitionstart"),y2=ki("transitioncancel"),dm=ki("transitionend"),hm=new Map,ju="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ju.push("scrollEnd");function Bn(n,i){hm.set(n,i),Si(i,[n])}var Io=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},En=[],cr=0,_u=0;function qo(){for(var n=cr,i=_u=cr=0;i<n;){var s=En[i];En[i++]=null;var c=En[i];En[i++]=null;var f=En[i];En[i++]=null;var g=En[i];if(En[i++]=null,c!==null&&f!==null){var b=c.pending;b===null?f.next=f:(f.next=b.next,b.next=f),c.pending=f}g!==0&&fm(s,f,g)}}function Fo(n,i,s,c){En[cr++]=n,En[cr++]=i,En[cr++]=s,En[cr++]=c,_u|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function ku(n,i,s,c){return Fo(n,i,s,c),Go(n)}function Ei(n,i){return Fo(n,null,null,i),Go(n)}function fm(n,i,s){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s);for(var f=!1,g=n.return;g!==null;)g.childLanes|=s,c=g.alternate,c!==null&&(c.childLanes|=s),g.tag===22&&(n=g.stateNode,n===null||n._visibility&1||(f=!0)),n=g,g=g.return;return n.tag===3?(g=n.stateNode,f&&i!==null&&(f=31-$t(s),n=g.hiddenUpdates,c=n[f],c===null?n[f]=[i]:c.push(i),i.lane=s|536870912),g):null}function Go(n){if(50<Ms)throw Ms=0,Ld=null,Error(r(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var ur={};function v2(n,i,s,c){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dn(n,i,s,c){return new v2(n,i,s,c)}function Eu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function fa(n,i){var s=n.alternate;return s===null?(s=dn(n.tag,i,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=i,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&65011712,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,i=n.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function pm(n,i){n.flags&=65011714;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,i=s.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function Ko(n,i,s,c,f,g){var b=0;if(c=n,typeof n=="function")Eu(n)&&(b=1);else if(typeof n=="string")b=j5(n,s,te.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case H:return n=dn(31,s,i,f),n.elementType=H,n.lanes=g,n;case E:return Ti(s.children,f,g,i);case T:b=8,f|=24;break;case k:return n=dn(12,s,i,f|2),n.elementType=k,n.lanes=g,n;case J:return n=dn(13,s,i,f),n.elementType=J,n.lanes=g,n;case Q:return n=dn(19,s,i,f),n.elementType=Q,n.lanes=g,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case N:b=10;break e;case C:b=9;break e;case z:b=11;break e;case D:b=14;break e;case q:b=16,c=null;break e}b=29,s=Error(r(130,n===null?"null":typeof n,"")),c=null}return i=dn(b,s,i,f),i.elementType=n,i.type=c,i.lanes=g,i}function Ti(n,i,s,c){return n=dn(7,n,c,i),n.lanes=s,n}function Tu(n,i,s){return n=dn(6,n,null,i),n.lanes=s,n}function mm(n){var i=dn(18,null,null,0);return i.stateNode=n,i}function Cu(n,i,s){return i=dn(4,n.children!==null?n.children:[],n.key,i),i.lanes=s,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var gm=new WeakMap;function Tn(n,i){if(typeof n=="object"&&n!==null){var s=gm.get(n);return s!==void 0?s:(i={value:n,source:i,stack:ca(i)},gm.set(n,i),i)}return{value:n,source:i,stack:ca(i)}}var dr=[],hr=0,Yo=null,ps=0,Cn=[],An=0,Va=null,Jn=1,Qn="";function pa(n,i){dr[hr++]=ps,dr[hr++]=Yo,Yo=n,ps=i}function ym(n,i,s){Cn[An++]=Jn,Cn[An++]=Qn,Cn[An++]=Va,Va=n;var c=Jn;n=Qn;var f=32-$t(c)-1;c&=~(1<<f),s+=1;var g=32-$t(i)+f;if(30<g){var b=f-f%5;g=(c&(1<<b)-1).toString(32),c>>=b,f-=b,Jn=1<<32-$t(i)+f|s<<f|c,Qn=g+n}else Jn=1<<g|s<<f|c,Qn=n}function Au(n){n.return!==null&&(pa(n,1),ym(n,1,0))}function Nu(n){for(;n===Yo;)Yo=dr[--hr],dr[hr]=null,ps=dr[--hr],dr[hr]=null;for(;n===Va;)Va=Cn[--An],Cn[An]=null,Qn=Cn[--An],Cn[An]=null,Jn=Cn[--An],Cn[An]=null}function vm(n,i){Cn[An++]=Jn,Cn[An++]=Qn,Cn[An++]=Va,Jn=i.id,Qn=i.overflow,Va=n}var Mt=null,it=null,Ue=!1,$a=null,Nn=!1,Ru=Error(r(519));function Ha(n){var i=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ms(Tn(i,n)),Ru}function bm(n){var i=n.stateNode,s=n.type,c=n.memoizedProps;switch(i[Lt]=n,i[Zt]=c,s){case"dialog":Le("cancel",i),Le("close",i);break;case"iframe":case"object":case"embed":Le("load",i);break;case"video":case"audio":for(s=0;s<Us.length;s++)Le(Us[s],i);break;case"source":Le("error",i);break;case"img":case"image":case"link":Le("error",i),Le("load",i);break;case"details":Le("toggle",i);break;case"input":Le("invalid",i),Op(i,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0);break;case"select":Le("invalid",i);break;case"textarea":Le("invalid",i),Lp(i,c.value,c.defaultValue,c.children)}s=c.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||c.suppressHydrationWarning===!0||z0(i.textContent,s)?(c.popover!=null&&(Le("beforetoggle",i),Le("toggle",i)),c.onScroll!=null&&Le("scroll",i),c.onScrollEnd!=null&&Le("scrollend",i),c.onClick!=null&&(i.onclick=da),i=!0):i=!1,i||Ha(n,!0)}function xm(n){for(Mt=n.return;Mt;)switch(Mt.tag){case 5:case 31:case 13:Nn=!1;return;case 27:case 3:Nn=!0;return;default:Mt=Mt.return}}function fr(n){if(n!==Mt)return!1;if(!Ue)return xm(n),Ue=!0,!1;var i=n.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||Wd(n.type,n.memoizedProps)),s=!s),s&&it&&Ha(n),xm(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));it=F0(n)}else if(i===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));it=F0(n)}else i===27?(i=it,ni(n.type)?(n=eh,eh=null,it=n):it=i):it=Mt?On(n.stateNode.nextSibling):null;return!0}function Ci(){it=Mt=null,Ue=!1}function Ou(){var n=$a;return n!==null&&(rn===null?rn=n:rn.push.apply(rn,n),$a=null),n}function ms(n){$a===null?$a=[n]:$a.push(n)}var Du=R(null),Ai=null,ma=null;function Ia(n,i,s){ee(Du,i._currentValue),i._currentValue=s}function ga(n){n._currentValue=Du.current,G(Du)}function Lu(n,i,s){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===s)break;n=n.return}}function Mu(n,i,s,c){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var g=f.dependencies;if(g!==null){var b=f.child;g=g.firstContext;e:for(;g!==null;){var _=g;g=f;for(var A=0;A<i.length;A++)if(_.context===i[A]){g.lanes|=s,_=g.alternate,_!==null&&(_.lanes|=s),Lu(g.return,s,n),c||(b=null);break e}g=_.next}}else if(f.tag===18){if(b=f.return,b===null)throw Error(r(341));b.lanes|=s,g=b.alternate,g!==null&&(g.lanes|=s),Lu(b,s,n),b=null}else b=f.child;if(b!==null)b.return=f;else for(b=f;b!==null;){if(b===n){b=null;break}if(f=b.sibling,f!==null){f.return=b.return,b=f;break}b=b.return}f=b}}function pr(n,i,s,c){n=null;for(var f=i,g=!1;f!==null;){if(!g){if((f.flags&524288)!==0)g=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var b=f.alternate;if(b===null)throw Error(r(387));if(b=b.memoizedProps,b!==null){var _=f.type;un(f.pendingProps.value,b.value)||(n!==null?n.push(_):n=[_])}}else if(f===Z.current){if(b=f.alternate,b===null)throw Error(r(387));b.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(Hs):n=[Hs])}f=f.return}n!==null&&Mu(i,n,s,c),i.flags|=262144}function Wo(n){for(n=n.firstContext;n!==null;){if(!un(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ni(n){Ai=n,ma=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function zt(n){return wm(Ai,n)}function Xo(n,i){return Ai===null&&Ni(n),wm(n,i)}function wm(n,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ma===null){if(n===null)throw Error(r(308));ma=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else ma=ma.next=i;return s}var b2=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(s,c){n.push(c)}};this.abort=function(){i.aborted=!0,n.forEach(function(s){return s()})}},x2=t.unstable_scheduleCallback,w2=t.unstable_NormalPriority,wt={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zu(){return{controller:new b2,data:new Map,refCount:0}}function gs(n){n.refCount--,n.refCount===0&&x2(w2,function(){n.controller.abort()})}var ys=null,Uu=0,mr=0,gr=null;function S2(n,i){if(ys===null){var s=ys=[];Uu=0,mr=Vd(),gr={status:"pending",value:void 0,then:function(c){s.push(c)}}}return Uu++,i.then(Sm,Sm),i}function Sm(){if(--Uu===0&&ys!==null){gr!==null&&(gr.status="fulfilled");var n=ys;ys=null,mr=0,gr=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function j2(n,i){var s=[],c={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return n.then(function(){c.status="fulfilled",c.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(c.status="rejected",c.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),c}var jm=M.S;M.S=function(n,i){s0=Be(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&S2(n,i),jm!==null&&jm(n,i)};var Ri=R(null);function Bu(){var n=Ri.current;return n!==null?n:Qe.pooledCache}function Jo(n,i){i===null?ee(Ri,Ri.current):ee(Ri,i.pool)}function _m(){var n=Bu();return n===null?null:{parent:wt._currentValue,pool:n}}var yr=Error(r(460)),Pu=Error(r(474)),Qo=Error(r(542)),Zo={then:function(){}};function km(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Em(n,i,s){switch(s=n[s],s===void 0?n.push(i):s!==i&&(i.then(da,da),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,Cm(n),n;default:if(typeof i.status=="string")i.then(da,da);else{if(n=Qe,n!==null&&100<n.shellSuspendCounter)throw Error(r(482));n=i,n.status="pending",n.then(function(c){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=c}},function(c){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=c}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,Cm(n),n}throw Di=i,yr}}function Oi(n){try{var i=n._init;return i(n._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Di=s,yr):s}}var Di=null;function Tm(){if(Di===null)throw Error(r(459));var n=Di;return Di=null,n}function Cm(n){if(n===yr||n===Qo)throw Error(r(483))}var vr=null,vs=0;function el(n){var i=vs;return vs+=1,vr===null&&(vr=[]),Em(vr,n,i)}function bs(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function tl(n,i){throw i.$$typeof===x?Error(r(525)):(n=Object.prototype.toString.call(i),Error(r(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function Am(n){function i(L,O){if(n){var U=L.deletions;U===null?(L.deletions=[O],L.flags|=16):U.push(O)}}function s(L,O){if(!n)return null;for(;O!==null;)i(L,O),O=O.sibling;return null}function c(L){for(var O=new Map;L!==null;)L.key!==null?O.set(L.key,L):O.set(L.index,L),L=L.sibling;return O}function f(L,O){return L=fa(L,O),L.index=0,L.sibling=null,L}function g(L,O,U){return L.index=U,n?(U=L.alternate,U!==null?(U=U.index,U<O?(L.flags|=67108866,O):U):(L.flags|=67108866,O)):(L.flags|=1048576,O)}function b(L){return n&&L.alternate===null&&(L.flags|=67108866),L}function _(L,O,U,K){return O===null||O.tag!==6?(O=Tu(U,L.mode,K),O.return=L,O):(O=f(O,U),O.return=L,O)}function A(L,O,U,K){var me=U.type;return me===E?F(L,O,U.props.children,K,U.key):O!==null&&(O.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===q&&Oi(me)===O.type)?(O=f(O,U.props),bs(O,U),O.return=L,O):(O=Ko(U.type,U.key,U.props,null,L.mode,K),bs(O,U),O.return=L,O)}function B(L,O,U,K){return O===null||O.tag!==4||O.stateNode.containerInfo!==U.containerInfo||O.stateNode.implementation!==U.implementation?(O=Cu(U,L.mode,K),O.return=L,O):(O=f(O,U.children||[]),O.return=L,O)}function F(L,O,U,K,me){return O===null||O.tag!==7?(O=Ti(U,L.mode,K,me),O.return=L,O):(O=f(O,U),O.return=L,O)}function W(L,O,U){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Tu(""+O,L.mode,U),O.return=L,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case w:return U=Ko(O.type,O.key,O.props,null,L.mode,U),bs(U,O),U.return=L,U;case j:return O=Cu(O,L.mode,U),O.return=L,O;case q:return O=Oi(O),W(L,O,U)}if(je(O)||oe(O))return O=Ti(O,L.mode,U,null),O.return=L,O;if(typeof O.then=="function")return W(L,el(O),U);if(O.$$typeof===N)return W(L,Xo(L,O),U);tl(L,O)}return null}function P(L,O,U,K){var me=O!==null?O.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return me!==null?null:_(L,O,""+U,K);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case w:return U.key===me?A(L,O,U,K):null;case j:return U.key===me?B(L,O,U,K):null;case q:return U=Oi(U),P(L,O,U,K)}if(je(U)||oe(U))return me!==null?null:F(L,O,U,K,null);if(typeof U.then=="function")return P(L,O,el(U),K);if(U.$$typeof===N)return P(L,O,Xo(L,U),K);tl(L,U)}return null}function V(L,O,U,K,me){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return L=L.get(U)||null,_(O,L,""+K,me);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case w:return L=L.get(K.key===null?U:K.key)||null,A(O,L,K,me);case j:return L=L.get(K.key===null?U:K.key)||null,B(O,L,K,me);case q:return K=Oi(K),V(L,O,U,K,me)}if(je(K)||oe(K))return L=L.get(U)||null,F(O,L,K,me,null);if(typeof K.then=="function")return V(L,O,U,el(K),me);if(K.$$typeof===N)return V(L,O,U,Xo(O,K),me);tl(O,K)}return null}function le(L,O,U,K){for(var me=null,Pe=null,he=O,Ce=O=0,ze=null;he!==null&&Ce<U.length;Ce++){he.index>Ce?(ze=he,he=null):ze=he.sibling;var Ve=P(L,he,U[Ce],K);if(Ve===null){he===null&&(he=ze);break}n&&he&&Ve.alternate===null&&i(L,he),O=g(Ve,O,Ce),Pe===null?me=Ve:Pe.sibling=Ve,Pe=Ve,he=ze}if(Ce===U.length)return s(L,he),Ue&&pa(L,Ce),me;if(he===null){for(;Ce<U.length;Ce++)he=W(L,U[Ce],K),he!==null&&(O=g(he,O,Ce),Pe===null?me=he:Pe.sibling=he,Pe=he);return Ue&&pa(L,Ce),me}for(he=c(he);Ce<U.length;Ce++)ze=V(he,L,Ce,U[Ce],K),ze!==null&&(n&&ze.alternate!==null&&he.delete(ze.key===null?Ce:ze.key),O=g(ze,O,Ce),Pe===null?me=ze:Pe.sibling=ze,Pe=ze);return n&&he.forEach(function(oi){return i(L,oi)}),Ue&&pa(L,Ce),me}function ve(L,O,U,K){if(U==null)throw Error(r(151));for(var me=null,Pe=null,he=O,Ce=O=0,ze=null,Ve=U.next();he!==null&&!Ve.done;Ce++,Ve=U.next()){he.index>Ce?(ze=he,he=null):ze=he.sibling;var oi=P(L,he,Ve.value,K);if(oi===null){he===null&&(he=ze);break}n&&he&&oi.alternate===null&&i(L,he),O=g(oi,O,Ce),Pe===null?me=oi:Pe.sibling=oi,Pe=oi,he=ze}if(Ve.done)return s(L,he),Ue&&pa(L,Ce),me;if(he===null){for(;!Ve.done;Ce++,Ve=U.next())Ve=W(L,Ve.value,K),Ve!==null&&(O=g(Ve,O,Ce),Pe===null?me=Ve:Pe.sibling=Ve,Pe=Ve);return Ue&&pa(L,Ce),me}for(he=c(he);!Ve.done;Ce++,Ve=U.next())Ve=V(he,L,Ce,Ve.value,K),Ve!==null&&(n&&Ve.alternate!==null&&he.delete(Ve.key===null?Ce:Ve.key),O=g(Ve,O,Ce),Pe===null?me=Ve:Pe.sibling=Ve,Pe=Ve);return n&&he.forEach(function(L5){return i(L,L5)}),Ue&&pa(L,Ce),me}function Xe(L,O,U,K){if(typeof U=="object"&&U!==null&&U.type===E&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case w:e:{for(var me=U.key;O!==null;){if(O.key===me){if(me=U.type,me===E){if(O.tag===7){s(L,O.sibling),K=f(O,U.props.children),K.return=L,L=K;break e}}else if(O.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===q&&Oi(me)===O.type){s(L,O.sibling),K=f(O,U.props),bs(K,U),K.return=L,L=K;break e}s(L,O);break}else i(L,O);O=O.sibling}U.type===E?(K=Ti(U.props.children,L.mode,K,U.key),K.return=L,L=K):(K=Ko(U.type,U.key,U.props,null,L.mode,K),bs(K,U),K.return=L,L=K)}return b(L);case j:e:{for(me=U.key;O!==null;){if(O.key===me)if(O.tag===4&&O.stateNode.containerInfo===U.containerInfo&&O.stateNode.implementation===U.implementation){s(L,O.sibling),K=f(O,U.children||[]),K.return=L,L=K;break e}else{s(L,O);break}else i(L,O);O=O.sibling}K=Cu(U,L.mode,K),K.return=L,L=K}return b(L);case q:return U=Oi(U),Xe(L,O,U,K)}if(je(U))return le(L,O,U,K);if(oe(U)){if(me=oe(U),typeof me!="function")throw Error(r(150));return U=me.call(U),ve(L,O,U,K)}if(typeof U.then=="function")return Xe(L,O,el(U),K);if(U.$$typeof===N)return Xe(L,O,Xo(L,U),K);tl(L,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,O!==null&&O.tag===6?(s(L,O.sibling),K=f(O,U),K.return=L,L=K):(s(L,O),K=Tu(U,L.mode,K),K.return=L,L=K),b(L)):s(L,O)}return function(L,O,U,K){try{vs=0;var me=Xe(L,O,U,K);return vr=null,me}catch(he){if(he===yr||he===Qo)throw he;var Pe=dn(29,he,null,L.mode);return Pe.lanes=K,Pe.return=L,Pe}finally{}}}var Li=Am(!0),Nm=Am(!1),qa=!1;function Vu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $u(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Fa(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Ga(n,i,s){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(He&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,i=Go(n),fm(n,null,s),i}return Fo(n,c,i,s),Go(n)}function xs(n,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var c=i.lanes;c&=n.pendingLanes,s|=c,i.lanes=s,wp(n,s)}}function Hu(n,i){var s=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var f=null,g=null;if(s=s.firstBaseUpdate,s!==null){do{var b={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};g===null?f=g=b:g=g.next=b,s=s.next}while(s!==null);g===null?f=g=i:g=g.next=i}else f=g=i;s={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,callbacks:c.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=i:n.next=i,s.lastBaseUpdate=i}var Iu=!1;function ws(){if(Iu){var n=gr;if(n!==null)throw n}}function Ss(n,i,s,c){Iu=!1;var f=n.updateQueue;qa=!1;var g=f.firstBaseUpdate,b=f.lastBaseUpdate,_=f.shared.pending;if(_!==null){f.shared.pending=null;var A=_,B=A.next;A.next=null,b===null?g=B:b.next=B,b=A;var F=n.alternate;F!==null&&(F=F.updateQueue,_=F.lastBaseUpdate,_!==b&&(_===null?F.firstBaseUpdate=B:_.next=B,F.lastBaseUpdate=A))}if(g!==null){var W=f.baseState;b=0,F=B=A=null,_=g;do{var P=_.lane&-536870913,V=P!==_.lane;if(V?(Me&P)===P:(c&P)===P){P!==0&&P===mr&&(Iu=!0),F!==null&&(F=F.next={lane:0,tag:_.tag,payload:_.payload,callback:null,next:null});e:{var le=n,ve=_;P=i;var Xe=s;switch(ve.tag){case 1:if(le=ve.payload,typeof le=="function"){W=le.call(Xe,W,P);break e}W=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=ve.payload,P=typeof le=="function"?le.call(Xe,W,P):le,P==null)break e;W=v({},W,P);break e;case 2:qa=!0}}P=_.callback,P!==null&&(n.flags|=64,V&&(n.flags|=8192),V=f.callbacks,V===null?f.callbacks=[P]:V.push(P))}else V={lane:P,tag:_.tag,payload:_.payload,callback:_.callback,next:null},F===null?(B=F=V,A=W):F=F.next=V,b|=P;if(_=_.next,_===null){if(_=f.shared.pending,_===null)break;V=_,_=V.next,V.next=null,f.lastBaseUpdate=V,f.shared.pending=null}}while(!0);F===null&&(A=W),f.baseState=A,f.firstBaseUpdate=B,f.lastBaseUpdate=F,g===null&&(f.shared.lanes=0),Ja|=b,n.lanes=b,n.memoizedState=W}}function Rm(n,i){if(typeof n!="function")throw Error(r(191,n));n.call(i)}function Om(n,i){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)Rm(s[n],i)}var br=R(null),nl=R(0);function Dm(n,i){n=ka,ee(nl,n),ee(br,i),ka=n|i.baseLanes}function qu(){ee(nl,ka),ee(br,br.current)}function Fu(){ka=nl.current,G(br),G(nl)}var hn=R(null),Rn=null;function Ka(n){var i=n.alternate;ee(gt,gt.current&1),ee(hn,n),Rn===null&&(i===null||br.current!==null||i.memoizedState!==null)&&(Rn=n)}function Gu(n){ee(gt,gt.current),ee(hn,n),Rn===null&&(Rn=n)}function Lm(n){n.tag===22?(ee(gt,gt.current),ee(hn,n),Rn===null&&(Rn=n)):Ya()}function Ya(){ee(gt,gt.current),ee(hn,hn.current)}function fn(n){G(hn),Rn===n&&(Rn=null),G(gt)}var gt=R(0);function al(n){for(var i=n;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Qd(s)||Zd(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ya=0,Te=null,Ye=null,St=null,il=!1,xr=!1,Mi=!1,rl=0,js=0,wr=null,_2=0;function ut(){throw Error(r(321))}function Ku(n,i){if(i===null)return!1;for(var s=0;s<i.length&&s<n.length;s++)if(!un(n[s],i[s]))return!1;return!0}function Yu(n,i,s,c,f,g){return ya=g,Te=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,M.H=n===null||n.memoizedState===null?yg:cd,Mi=!1,g=s(c,f),Mi=!1,xr&&(g=zm(i,s,c,f)),Mm(n),g}function Mm(n){M.H=Es;var i=Ye!==null&&Ye.next!==null;if(ya=0,St=Ye=Te=null,il=!1,js=0,wr=null,i)throw Error(r(300));n===null||jt||(n=n.dependencies,n!==null&&Wo(n)&&(jt=!0))}function zm(n,i,s,c){Te=n;var f=0;do{if(xr&&(wr=null),js=0,xr=!1,25<=f)throw Error(r(301));if(f+=1,St=Ye=null,n.updateQueue!=null){var g=n.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}M.H=vg,g=i(s,c)}while(xr);return g}function k2(){var n=M.H,i=n.useState()[0];return i=typeof i.then=="function"?_s(i):i,n=n.useState()[0],(Ye!==null?Ye.memoizedState:null)!==n&&(Te.flags|=1024),i}function Wu(){var n=rl!==0;return rl=0,n}function Xu(n,i,s){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~s}function Ju(n){if(il){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}il=!1}ya=0,St=Ye=Te=null,xr=!1,js=rl=0,wr=null}function Gt(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?Te.memoizedState=St=n:St=St.next=n,St}function yt(){if(Ye===null){var n=Te.alternate;n=n!==null?n.memoizedState:null}else n=Ye.next;var i=St===null?Te.memoizedState:St.next;if(i!==null)St=i,Ye=n;else{if(n===null)throw Te.alternate===null?Error(r(467)):Error(r(310));Ye=n,n={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},St===null?Te.memoizedState=St=n:St=St.next=n}return St}function sl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _s(n){var i=js;return js+=1,wr===null&&(wr=[]),n=Em(wr,n,i),i=Te,(St===null?i.memoizedState:St.next)===null&&(i=i.alternate,M.H=i===null||i.memoizedState===null?yg:cd),n}function ol(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return _s(n);if(n.$$typeof===N)return zt(n)}throw Error(r(438,String(n)))}function Qu(n){var i=null,s=Te.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var c=Te.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(i={data:c.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=sl(),Te.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(n),c=0;c<n;c++)s[c]=X;return i.index++,s}function va(n,i){return typeof i=="function"?i(n):i}function ll(n){var i=yt();return Zu(i,Ye,n)}function Zu(n,i,s){var c=n.queue;if(c===null)throw Error(r(311));c.lastRenderedReducer=s;var f=n.baseQueue,g=c.pending;if(g!==null){if(f!==null){var b=f.next;f.next=g.next,g.next=b}i.baseQueue=f=g,c.pending=null}if(g=n.baseState,f===null)n.memoizedState=g;else{i=f.next;var _=b=null,A=null,B=i,F=!1;do{var W=B.lane&-536870913;if(W!==B.lane?(Me&W)===W:(ya&W)===W){var P=B.revertLane;if(P===0)A!==null&&(A=A.next={lane:0,revertLane:0,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),W===mr&&(F=!0);else if((ya&P)===P){B=B.next,P===mr&&(F=!0);continue}else W={lane:0,revertLane:B.revertLane,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},A===null?(_=A=W,b=g):A=A.next=W,Te.lanes|=P,Ja|=P;W=B.action,Mi&&s(g,W),g=B.hasEagerState?B.eagerState:s(g,W)}else P={lane:W,revertLane:B.revertLane,gesture:B.gesture,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},A===null?(_=A=P,b=g):A=A.next=P,Te.lanes|=W,Ja|=W;B=B.next}while(B!==null&&B!==i);if(A===null?b=g:A.next=_,!un(g,n.memoizedState)&&(jt=!0,F&&(s=gr,s!==null)))throw s;n.memoizedState=g,n.baseState=b,n.baseQueue=A,c.lastRenderedState=g}return f===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function ed(n){var i=yt(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=n;var c=s.dispatch,f=s.pending,g=i.memoizedState;if(f!==null){s.pending=null;var b=f=f.next;do g=n(g,b.action),b=b.next;while(b!==f);un(g,i.memoizedState)||(jt=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),s.lastRenderedState=g}return[g,c]}function Um(n,i,s){var c=Te,f=yt(),g=Ue;if(g){if(s===void 0)throw Error(r(407));s=s()}else s=i();var b=!un((Ye||f).memoizedState,s);if(b&&(f.memoizedState=s,jt=!0),f=f.queue,ad(Vm.bind(null,c,f,n),[n]),f.getSnapshot!==i||b||St!==null&&St.memoizedState.tag&1){if(c.flags|=2048,Sr(9,{destroy:void 0},Pm.bind(null,c,f,s,i),null),Qe===null)throw Error(r(349));g||(ya&127)!==0||Bm(c,i,s)}return s}function Bm(n,i,s){n.flags|=16384,n={getSnapshot:i,value:s},i=Te.updateQueue,i===null?(i=sl(),Te.updateQueue=i,i.stores=[n]):(s=i.stores,s===null?i.stores=[n]:s.push(n))}function Pm(n,i,s,c){i.value=s,i.getSnapshot=c,$m(i)&&Hm(n)}function Vm(n,i,s){return s(function(){$m(i)&&Hm(n)})}function $m(n){var i=n.getSnapshot;n=n.value;try{var s=i();return!un(n,s)}catch{return!0}}function Hm(n){var i=Ei(n,2);i!==null&&sn(i,n,2)}function td(n){var i=Gt();if(typeof n=="function"){var s=n;if(n=s(),Mi){Un(!0);try{s()}finally{Un(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:n},i}function Im(n,i,s,c){return n.baseState=s,Zu(n,Ye,typeof c=="function"?c:va)}function E2(n,i,s,c,f){if(dl(n))throw Error(r(485));if(n=i.action,n!==null){var g={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){g.listeners.push(b)}};M.T!==null?s(!0):g.isTransition=!1,c(g),s=i.pending,s===null?(g.next=i.pending=g,qm(i,g)):(g.next=s.next,i.pending=s.next=g)}}function qm(n,i){var s=i.action,c=i.payload,f=n.state;if(i.isTransition){var g=M.T,b={};M.T=b;try{var _=s(f,c),A=M.S;A!==null&&A(b,_),Fm(n,i,_)}catch(B){nd(n,i,B)}finally{g!==null&&b.types!==null&&(g.types=b.types),M.T=g}}else try{g=s(f,c),Fm(n,i,g)}catch(B){nd(n,i,B)}}function Fm(n,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(c){Gm(n,i,c)},function(c){return nd(n,i,c)}):Gm(n,i,s)}function Gm(n,i,s){i.status="fulfilled",i.value=s,Km(i),n.state=s,i=n.pending,i!==null&&(s=i.next,s===i?n.pending=null:(s=s.next,i.next=s,qm(n,s)))}function nd(n,i,s){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do i.status="rejected",i.reason=s,Km(i),i=i.next;while(i!==c)}n.action=null}function Km(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function Ym(n,i){return i}function Wm(n,i){if(Ue){var s=Qe.formState;if(s!==null){e:{var c=Te;if(Ue){if(it){t:{for(var f=it,g=Nn;f.nodeType!==8;){if(!g){f=null;break t}if(f=On(f.nextSibling),f===null){f=null;break t}}g=f.data,f=g==="F!"||g==="F"?f:null}if(f){it=On(f.nextSibling),c=f.data==="F!";break e}}Ha(c)}c=!1}c&&(i=s[0])}}return s=Gt(),s.memoizedState=s.baseState=i,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ym,lastRenderedState:i},s.queue=c,s=pg.bind(null,Te,c),c.dispatch=s,c=td(!1),g=ld.bind(null,Te,!1,c.queue),c=Gt(),f={state:i,dispatch:null,action:n,pending:null},c.queue=f,s=E2.bind(null,Te,f,g,s),f.dispatch=s,c.memoizedState=n,[i,s,!1]}function Xm(n){var i=yt();return Jm(i,Ye,n)}function Jm(n,i,s){if(i=Zu(n,i,Ym)[0],n=ll(va)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var c=_s(i)}catch(b){throw b===yr?Qo:b}else c=i;i=yt();var f=i.queue,g=f.dispatch;return s!==i.memoizedState&&(Te.flags|=2048,Sr(9,{destroy:void 0},T2.bind(null,f,s),null)),[c,g,n]}function T2(n,i){n.action=i}function Qm(n){var i=yt(),s=Ye;if(s!==null)return Jm(i,s,n);yt(),i=i.memoizedState,s=yt();var c=s.queue.dispatch;return s.memoizedState=n,[i,c,!1]}function Sr(n,i,s,c){return n={tag:n,create:s,deps:c,inst:i,next:null},i=Te.updateQueue,i===null&&(i=sl(),Te.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=n.next=n:(c=s.next,s.next=n,n.next=c,i.lastEffect=n),n}function Zm(){return yt().memoizedState}function cl(n,i,s,c){var f=Gt();Te.flags|=n,f.memoizedState=Sr(1|i,{destroy:void 0},s,c===void 0?null:c)}function ul(n,i,s,c){var f=yt();c=c===void 0?null:c;var g=f.memoizedState.inst;Ye!==null&&c!==null&&Ku(c,Ye.memoizedState.deps)?f.memoizedState=Sr(i,g,s,c):(Te.flags|=n,f.memoizedState=Sr(1|i,g,s,c))}function eg(n,i){cl(8390656,8,n,i)}function ad(n,i){ul(2048,8,n,i)}function C2(n){Te.flags|=4;var i=Te.updateQueue;if(i===null)i=sl(),Te.updateQueue=i,i.events=[n];else{var s=i.events;s===null?i.events=[n]:s.push(n)}}function tg(n){var i=yt().memoizedState;return C2({ref:i,nextImpl:n}),function(){if((He&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}function ng(n,i){return ul(4,2,n,i)}function ag(n,i){return ul(4,4,n,i)}function ig(n,i){if(typeof i=="function"){n=n();var s=i(n);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function rg(n,i,s){s=s!=null?s.concat([n]):null,ul(4,4,ig.bind(null,i,n),s)}function id(){}function sg(n,i){var s=yt();i=i===void 0?null:i;var c=s.memoizedState;return i!==null&&Ku(i,c[1])?c[0]:(s.memoizedState=[n,i],n)}function og(n,i){var s=yt();i=i===void 0?null:i;var c=s.memoizedState;if(i!==null&&Ku(i,c[1]))return c[0];if(c=n(),Mi){Un(!0);try{n()}finally{Un(!1)}}return s.memoizedState=[c,i],c}function rd(n,i,s){return s===void 0||(ya&1073741824)!==0&&(Me&261930)===0?n.memoizedState=i:(n.memoizedState=s,n=l0(),Te.lanes|=n,Ja|=n,s)}function lg(n,i,s,c){return un(s,i)?s:br.current!==null?(n=rd(n,s,c),un(n,i)||(jt=!0),n):(ya&42)===0||(ya&1073741824)!==0&&(Me&261930)===0?(jt=!0,n.memoizedState=s):(n=l0(),Te.lanes|=n,Ja|=n,i)}function cg(n,i,s,c,f){var g=ne.p;ne.p=g!==0&&8>g?g:8;var b=M.T,_={};M.T=_,ld(n,!1,i,s);try{var A=f(),B=M.S;if(B!==null&&B(_,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var F=j2(A,c);ks(n,i,F,gn(n))}else ks(n,i,c,gn(n))}catch(W){ks(n,i,{then:function(){},status:"rejected",reason:W},gn())}finally{ne.p=g,b!==null&&_.types!==null&&(b.types=_.types),M.T=b}}function A2(){}function sd(n,i,s,c){if(n.tag!==5)throw Error(r(476));var f=ug(n).queue;cg(n,f,i,ie,s===null?A2:function(){return dg(n),s(c)})}function ug(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:ie},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:s},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function dg(n){var i=ug(n);i.next===null&&(i=n.alternate.memoizedState),ks(n,i.next.queue,{},gn())}function od(){return zt(Hs)}function hg(){return yt().memoizedState}function fg(){return yt().memoizedState}function N2(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var s=gn();n=Fa(s);var c=Ga(i,n,s);c!==null&&(sn(c,i,s),xs(c,i,s)),i={cache:zu()},n.payload=i;return}i=i.return}}function R2(n,i,s){var c=gn();s={lane:c,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},dl(n)?mg(i,s):(s=ku(n,i,s,c),s!==null&&(sn(s,n,c),gg(s,i,c)))}function pg(n,i,s){var c=gn();ks(n,i,s,c)}function ks(n,i,s,c){var f={lane:c,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(dl(n))mg(i,f);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var b=i.lastRenderedState,_=g(b,s);if(f.hasEagerState=!0,f.eagerState=_,un(_,b))return Fo(n,i,f,0),Qe===null&&qo(),!1}catch{}finally{}if(s=ku(n,i,f,c),s!==null)return sn(s,n,c),gg(s,i,c),!0}return!1}function ld(n,i,s,c){if(c={lane:2,revertLane:Vd(),gesture:null,action:c,hasEagerState:!1,eagerState:null,next:null},dl(n)){if(i)throw Error(r(479))}else i=ku(n,s,c,2),i!==null&&sn(i,n,2)}function dl(n){var i=n.alternate;return n===Te||i!==null&&i===Te}function mg(n,i){xr=il=!0;var s=n.pending;s===null?i.next=i:(i.next=s.next,s.next=i),n.pending=i}function gg(n,i,s){if((s&4194048)!==0){var c=i.lanes;c&=n.pendingLanes,s|=c,i.lanes=s,wp(n,s)}}var Es={readContext:zt,use:ol,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useLayoutEffect:ut,useInsertionEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useSyncExternalStore:ut,useId:ut,useHostTransitionStatus:ut,useFormState:ut,useActionState:ut,useOptimistic:ut,useMemoCache:ut,useCacheRefresh:ut};Es.useEffectEvent=ut;var yg={readContext:zt,use:ol,useCallback:function(n,i){return Gt().memoizedState=[n,i===void 0?null:i],n},useContext:zt,useEffect:eg,useImperativeHandle:function(n,i,s){s=s!=null?s.concat([n]):null,cl(4194308,4,ig.bind(null,i,n),s)},useLayoutEffect:function(n,i){return cl(4194308,4,n,i)},useInsertionEffect:function(n,i){cl(4,2,n,i)},useMemo:function(n,i){var s=Gt();i=i===void 0?null:i;var c=n();if(Mi){Un(!0);try{n()}finally{Un(!1)}}return s.memoizedState=[c,i],c},useReducer:function(n,i,s){var c=Gt();if(s!==void 0){var f=s(i);if(Mi){Un(!0);try{s(i)}finally{Un(!1)}}}else f=i;return c.memoizedState=c.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},c.queue=n,n=n.dispatch=R2.bind(null,Te,n),[c.memoizedState,n]},useRef:function(n){var i=Gt();return n={current:n},i.memoizedState=n},useState:function(n){n=td(n);var i=n.queue,s=pg.bind(null,Te,i);return i.dispatch=s,[n.memoizedState,s]},useDebugValue:id,useDeferredValue:function(n,i){var s=Gt();return rd(s,n,i)},useTransition:function(){var n=td(!1);return n=cg.bind(null,Te,n.queue,!0,!1),Gt().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,s){var c=Te,f=Gt();if(Ue){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),Qe===null)throw Error(r(349));(Me&127)!==0||Bm(c,i,s)}f.memoizedState=s;var g={value:s,getSnapshot:i};return f.queue=g,eg(Vm.bind(null,c,g,n),[n]),c.flags|=2048,Sr(9,{destroy:void 0},Pm.bind(null,c,g,s,i),null),s},useId:function(){var n=Gt(),i=Qe.identifierPrefix;if(Ue){var s=Qn,c=Jn;s=(c&~(1<<32-$t(c)-1)).toString(32)+s,i="_"+i+"R_"+s,s=rl++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=_2++,i="_"+i+"r_"+s.toString(32)+"_";return n.memoizedState=i},useHostTransitionStatus:od,useFormState:Wm,useActionState:Wm,useOptimistic:function(n){var i=Gt();i.memoizedState=i.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=ld.bind(null,Te,!0,s),s.dispatch=i,[n,i]},useMemoCache:Qu,useCacheRefresh:function(){return Gt().memoizedState=N2.bind(null,Te)},useEffectEvent:function(n){var i=Gt(),s={impl:n};return i.memoizedState=s,function(){if((He&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},cd={readContext:zt,use:ol,useCallback:sg,useContext:zt,useEffect:ad,useImperativeHandle:rg,useInsertionEffect:ng,useLayoutEffect:ag,useMemo:og,useReducer:ll,useRef:Zm,useState:function(){return ll(va)},useDebugValue:id,useDeferredValue:function(n,i){var s=yt();return lg(s,Ye.memoizedState,n,i)},useTransition:function(){var n=ll(va)[0],i=yt().memoizedState;return[typeof n=="boolean"?n:_s(n),i]},useSyncExternalStore:Um,useId:hg,useHostTransitionStatus:od,useFormState:Xm,useActionState:Xm,useOptimistic:function(n,i){var s=yt();return Im(s,Ye,n,i)},useMemoCache:Qu,useCacheRefresh:fg};cd.useEffectEvent=tg;var vg={readContext:zt,use:ol,useCallback:sg,useContext:zt,useEffect:ad,useImperativeHandle:rg,useInsertionEffect:ng,useLayoutEffect:ag,useMemo:og,useReducer:ed,useRef:Zm,useState:function(){return ed(va)},useDebugValue:id,useDeferredValue:function(n,i){var s=yt();return Ye===null?rd(s,n,i):lg(s,Ye.memoizedState,n,i)},useTransition:function(){var n=ed(va)[0],i=yt().memoizedState;return[typeof n=="boolean"?n:_s(n),i]},useSyncExternalStore:Um,useId:hg,useHostTransitionStatus:od,useFormState:Qm,useActionState:Qm,useOptimistic:function(n,i){var s=yt();return Ye!==null?Im(s,Ye,n,i):(s.baseState=n,[n,s.queue.dispatch])},useMemoCache:Qu,useCacheRefresh:fg};vg.useEffectEvent=tg;function ud(n,i,s,c){i=n.memoizedState,s=s(c,i),s=s==null?i:v({},i,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var dd={enqueueSetState:function(n,i,s){n=n._reactInternals;var c=gn(),f=Fa(c);f.payload=i,s!=null&&(f.callback=s),i=Ga(n,f,c),i!==null&&(sn(i,n,c),xs(i,n,c))},enqueueReplaceState:function(n,i,s){n=n._reactInternals;var c=gn(),f=Fa(c);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Ga(n,f,c),i!==null&&(sn(i,n,c),xs(i,n,c))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var s=gn(),c=Fa(s);c.tag=2,i!=null&&(c.callback=i),i=Ga(n,c,s),i!==null&&(sn(i,n,s),xs(i,n,s))}};function bg(n,i,s,c,f,g,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,b):i.prototype&&i.prototype.isPureReactComponent?!hs(s,c)||!hs(f,g):!0}function xg(n,i,s,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,c),i.state!==n&&dd.enqueueReplaceState(i,i.state,null)}function zi(n,i){var s=i;if("ref"in i){s={};for(var c in i)c!=="ref"&&(s[c]=i[c])}if(n=n.defaultProps){s===i&&(s=v({},s));for(var f in n)s[f]===void 0&&(s[f]=n[f])}return s}function wg(n){Io(n)}function Sg(n){console.error(n)}function jg(n){Io(n)}function hl(n,i){try{var s=n.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(c){setTimeout(function(){throw c})}}function _g(n,i,s){try{var c=n.onCaughtError;c(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function hd(n,i,s){return s=Fa(s),s.tag=3,s.payload={element:null},s.callback=function(){hl(n,i)},s}function kg(n){return n=Fa(n),n.tag=3,n}function Eg(n,i,s,c){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var g=c.value;n.payload=function(){return f(g)},n.callback=function(){_g(i,s,c)}}var b=s.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(n.callback=function(){_g(i,s,c),typeof f!="function"&&(Qa===null?Qa=new Set([this]):Qa.add(this));var _=c.stack;this.componentDidCatch(c.value,{componentStack:_!==null?_:""})})}function O2(n,i,s,c,f){if(s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(i=s.alternate,i!==null&&pr(i,s,f,!0),s=hn.current,s!==null){switch(s.tag){case 31:case 13:return Rn===null?_l():s.alternate===null&&dt===0&&(dt=3),s.flags&=-257,s.flags|=65536,s.lanes=f,c===Zo?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([c]):i.add(c),Ud(n,c,f)),!1;case 22:return s.flags|=65536,c===Zo?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([c])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([c]):s.add(c)),Ud(n,c,f)),!1}throw Error(r(435,s.tag))}return Ud(n,c,f),_l(),!1}if(Ue)return i=hn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,c!==Ru&&(n=Error(r(422),{cause:c}),ms(Tn(n,s)))):(c!==Ru&&(i=Error(r(423),{cause:c}),ms(Tn(i,s))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,c=Tn(c,s),f=hd(n.stateNode,c,f),Hu(n,f),dt!==4&&(dt=2)),!1;var g=Error(r(520),{cause:c});if(g=Tn(g,s),Ls===null?Ls=[g]:Ls.push(g),dt!==4&&(dt=2),i===null)return!0;c=Tn(c,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,n=f&-f,s.lanes|=n,n=hd(s.stateNode,c,n),Hu(s,n),!1;case 1:if(i=s.type,g=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Qa===null||!Qa.has(g))))return s.flags|=65536,f&=-f,s.lanes|=f,f=kg(f),Eg(f,n,s,c),Hu(s,f),!1}s=s.return}while(s!==null);return!1}var fd=Error(r(461)),jt=!1;function Ut(n,i,s,c){i.child=n===null?Nm(i,null,s,c):Li(i,n.child,s,c)}function Tg(n,i,s,c,f){s=s.render;var g=i.ref;if("ref"in c){var b={};for(var _ in c)_!=="ref"&&(b[_]=c[_])}else b=c;return Ni(i),c=Yu(n,i,s,b,g,f),_=Wu(),n!==null&&!jt?(Xu(n,i,f),ba(n,i,f)):(Ue&&_&&Au(i),i.flags|=1,Ut(n,i,c,f),i.child)}function Cg(n,i,s,c,f){if(n===null){var g=s.type;return typeof g=="function"&&!Eu(g)&&g.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=g,Ag(n,i,g,c,f)):(n=Ko(s.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,!wd(n,f)){var b=g.memoizedProps;if(s=s.compare,s=s!==null?s:hs,s(b,c)&&n.ref===i.ref)return ba(n,i,f)}return i.flags|=1,n=fa(g,c),n.ref=i.ref,n.return=i,i.child=n}function Ag(n,i,s,c,f){if(n!==null){var g=n.memoizedProps;if(hs(g,c)&&n.ref===i.ref)if(jt=!1,i.pendingProps=c=g,wd(n,f))(n.flags&131072)!==0&&(jt=!0);else return i.lanes=n.lanes,ba(n,i,f)}return pd(n,i,s,c,f)}function Ng(n,i,s,c){var f=c.children,g=n!==null?n.memoizedState:null;if(n===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),c.mode==="hidden"){if((i.flags&128)!==0){if(g=g!==null?g.baseLanes|s:s,n!==null){for(c=i.child=n.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;c=f&~g}else c=0,i.child=null;return Rg(n,i,g,s,c)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&Jo(i,g!==null?g.cachePool:null),g!==null?Dm(i,g):qu(),Lm(i);else return c=i.lanes=536870912,Rg(n,i,g!==null?g.baseLanes|s:s,s,c)}else g!==null?(Jo(i,g.cachePool),Dm(i,g),Ya(),i.memoizedState=null):(n!==null&&Jo(i,null),qu(),Ya());return Ut(n,i,f,s),i.child}function Ts(n,i){return n!==null&&n.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Rg(n,i,s,c,f){var g=Bu();return g=g===null?null:{parent:wt._currentValue,pool:g},i.memoizedState={baseLanes:s,cachePool:g},n!==null&&Jo(i,null),qu(),Lm(i),n!==null&&pr(n,i,c,!0),i.childLanes=f,null}function fl(n,i){return i=ml({mode:i.mode,children:i.children},n.mode),i.ref=n.ref,n.child=i,i.return=n,i}function Og(n,i,s){return Li(i,n.child,null,s),n=fl(i,i.pendingProps),n.flags|=2,fn(i),i.memoizedState=null,n}function D2(n,i,s){var c=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,n===null){if(Ue){if(c.mode==="hidden")return n=fl(i,c),i.lanes=536870912,Ts(null,n);if(Gu(i),(n=it)?(n=q0(n,Nn),n=n!==null&&n.data==="&"?n:null,n!==null&&(i.memoizedState={dehydrated:n,treeContext:Va!==null?{id:Jn,overflow:Qn}:null,retryLane:536870912,hydrationErrors:null},s=mm(n),s.return=i,i.child=s,Mt=i,it=null)):n=null,n===null)throw Ha(i);return i.lanes=536870912,null}return fl(i,c)}var g=n.memoizedState;if(g!==null){var b=g.dehydrated;if(Gu(i),f)if(i.flags&256)i.flags&=-257,i=Og(n,i,s);else if(i.memoizedState!==null)i.child=n.child,i.flags|=128,i=null;else throw Error(r(558));else if(jt||pr(n,i,s,!1),f=(s&n.childLanes)!==0,jt||f){if(c=Qe,c!==null&&(b=Sp(c,s),b!==0&&b!==g.retryLane))throw g.retryLane=b,Ei(n,b),sn(c,n,b),fd;_l(),i=Og(n,i,s)}else n=g.treeContext,it=On(b.nextSibling),Mt=i,Ue=!0,$a=null,Nn=!1,n!==null&&vm(i,n),i=fl(i,c),i.flags|=4096;return i}return n=fa(n.child,{mode:c.mode,children:c.children}),n.ref=i.ref,i.child=n,n.return=i,n}function pl(n,i){var s=i.ref;if(s===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(n===null||n.ref!==s)&&(i.flags|=4194816)}}function pd(n,i,s,c,f){return Ni(i),s=Yu(n,i,s,c,void 0,f),c=Wu(),n!==null&&!jt?(Xu(n,i,f),ba(n,i,f)):(Ue&&c&&Au(i),i.flags|=1,Ut(n,i,s,f),i.child)}function Dg(n,i,s,c,f,g){return Ni(i),i.updateQueue=null,s=zm(i,c,s,f),Mm(n),c=Wu(),n!==null&&!jt?(Xu(n,i,g),ba(n,i,g)):(Ue&&c&&Au(i),i.flags|=1,Ut(n,i,s,g),i.child)}function Lg(n,i,s,c,f){if(Ni(i),i.stateNode===null){var g=ur,b=s.contextType;typeof b=="object"&&b!==null&&(g=zt(b)),g=new s(c,g),i.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=dd,i.stateNode=g,g._reactInternals=i,g=i.stateNode,g.props=c,g.state=i.memoizedState,g.refs={},Vu(i),b=s.contextType,g.context=typeof b=="object"&&b!==null?zt(b):ur,g.state=i.memoizedState,b=s.getDerivedStateFromProps,typeof b=="function"&&(ud(i,s,b,c),g.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(b=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),b!==g.state&&dd.enqueueReplaceState(g,g.state,null),Ss(i,c,g,f),ws(),g.state=i.memoizedState),typeof g.componentDidMount=="function"&&(i.flags|=4194308),c=!0}else if(n===null){g=i.stateNode;var _=i.memoizedProps,A=zi(s,_);g.props=A;var B=g.context,F=s.contextType;b=ur,typeof F=="object"&&F!==null&&(b=zt(F));var W=s.getDerivedStateFromProps;F=typeof W=="function"||typeof g.getSnapshotBeforeUpdate=="function",_=i.pendingProps!==_,F||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(_||B!==b)&&xg(i,g,c,b),qa=!1;var P=i.memoizedState;g.state=P,Ss(i,c,g,f),ws(),B=i.memoizedState,_||P!==B||qa?(typeof W=="function"&&(ud(i,s,W,c),B=i.memoizedState),(A=qa||bg(i,s,A,c,P,B,b))?(F||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(i.flags|=4194308)):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=B),g.props=c,g.state=B,g.context=b,c=A):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{g=i.stateNode,$u(n,i),b=i.memoizedProps,F=zi(s,b),g.props=F,W=i.pendingProps,P=g.context,B=s.contextType,A=ur,typeof B=="object"&&B!==null&&(A=zt(B)),_=s.getDerivedStateFromProps,(B=typeof _=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(b!==W||P!==A)&&xg(i,g,c,A),qa=!1,P=i.memoizedState,g.state=P,Ss(i,c,g,f),ws();var V=i.memoizedState;b!==W||P!==V||qa||n!==null&&n.dependencies!==null&&Wo(n.dependencies)?(typeof _=="function"&&(ud(i,s,_,c),V=i.memoizedState),(F=qa||bg(i,s,F,c,P,V,A)||n!==null&&n.dependencies!==null&&Wo(n.dependencies))?(B||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,V,A),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,V,A)),typeof g.componentDidUpdate=="function"&&(i.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof g.componentDidUpdate!="function"||b===n.memoizedProps&&P===n.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&P===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=V),g.props=c,g.state=V,g.context=A,c=F):(typeof g.componentDidUpdate!="function"||b===n.memoizedProps&&P===n.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&P===n.memoizedState||(i.flags|=1024),c=!1)}return g=c,pl(n,i),c=(i.flags&128)!==0,g||c?(g=i.stateNode,s=c&&typeof s.getDerivedStateFromError!="function"?null:g.render(),i.flags|=1,n!==null&&c?(i.child=Li(i,n.child,null,f),i.child=Li(i,null,s,f)):Ut(n,i,s,f),i.memoizedState=g.state,n=i.child):n=ba(n,i,f),n}function Mg(n,i,s,c){return Ci(),i.flags|=256,Ut(n,i,s,c),i.child}var md={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gd(n){return{baseLanes:n,cachePool:_m()}}function yd(n,i,s){return n=n!==null?n.childLanes&~s:0,i&&(n|=mn),n}function zg(n,i,s){var c=i.pendingProps,f=!1,g=(i.flags&128)!==0,b;if((b=g)||(b=n!==null&&n.memoizedState===null?!1:(gt.current&2)!==0),b&&(f=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,n===null){if(Ue){if(f?Ka(i):Ya(),(n=it)?(n=q0(n,Nn),n=n!==null&&n.data!=="&"?n:null,n!==null&&(i.memoizedState={dehydrated:n,treeContext:Va!==null?{id:Jn,overflow:Qn}:null,retryLane:536870912,hydrationErrors:null},s=mm(n),s.return=i,i.child=s,Mt=i,it=null)):n=null,n===null)throw Ha(i);return Zd(n)?i.lanes=32:i.lanes=536870912,null}var _=c.children;return c=c.fallback,f?(Ya(),f=i.mode,_=ml({mode:"hidden",children:_},f),c=Ti(c,f,s,null),_.return=i,c.return=i,_.sibling=c,i.child=_,c=i.child,c.memoizedState=gd(s),c.childLanes=yd(n,b,s),i.memoizedState=md,Ts(null,c)):(Ka(i),vd(i,_))}var A=n.memoizedState;if(A!==null&&(_=A.dehydrated,_!==null)){if(g)i.flags&256?(Ka(i),i.flags&=-257,i=bd(n,i,s)):i.memoizedState!==null?(Ya(),i.child=n.child,i.flags|=128,i=null):(Ya(),_=c.fallback,f=i.mode,c=ml({mode:"visible",children:c.children},f),_=Ti(_,f,s,null),_.flags|=2,c.return=i,_.return=i,c.sibling=_,i.child=c,Li(i,n.child,null,s),c=i.child,c.memoizedState=gd(s),c.childLanes=yd(n,b,s),i.memoizedState=md,i=Ts(null,c));else if(Ka(i),Zd(_)){if(b=_.nextSibling&&_.nextSibling.dataset,b)var B=b.dgst;b=B,c=Error(r(419)),c.stack="",c.digest=b,ms({value:c,source:null,stack:null}),i=bd(n,i,s)}else if(jt||pr(n,i,s,!1),b=(s&n.childLanes)!==0,jt||b){if(b=Qe,b!==null&&(c=Sp(b,s),c!==0&&c!==A.retryLane))throw A.retryLane=c,Ei(n,c),sn(b,n,c),fd;Qd(_)||_l(),i=bd(n,i,s)}else Qd(_)?(i.flags|=192,i.child=n.child,i=null):(n=A.treeContext,it=On(_.nextSibling),Mt=i,Ue=!0,$a=null,Nn=!1,n!==null&&vm(i,n),i=vd(i,c.children),i.flags|=4096);return i}return f?(Ya(),_=c.fallback,f=i.mode,A=n.child,B=A.sibling,c=fa(A,{mode:"hidden",children:c.children}),c.subtreeFlags=A.subtreeFlags&65011712,B!==null?_=fa(B,_):(_=Ti(_,f,s,null),_.flags|=2),_.return=i,c.return=i,c.sibling=_,i.child=c,Ts(null,c),c=i.child,_=n.child.memoizedState,_===null?_=gd(s):(f=_.cachePool,f!==null?(A=wt._currentValue,f=f.parent!==A?{parent:A,pool:A}:f):f=_m(),_={baseLanes:_.baseLanes|s,cachePool:f}),c.memoizedState=_,c.childLanes=yd(n,b,s),i.memoizedState=md,Ts(n.child,c)):(Ka(i),s=n.child,n=s.sibling,s=fa(s,{mode:"visible",children:c.children}),s.return=i,s.sibling=null,n!==null&&(b=i.deletions,b===null?(i.deletions=[n],i.flags|=16):b.push(n)),i.child=s,i.memoizedState=null,s)}function vd(n,i){return i=ml({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function ml(n,i){return n=dn(22,n,null,i),n.lanes=0,n}function bd(n,i,s){return Li(i,n.child,null,s),n=vd(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Ug(n,i,s){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Lu(n.return,i,s)}function xd(n,i,s,c,f,g){var b=n.memoizedState;b===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:f,treeForkCount:g}:(b.isBackwards=i,b.rendering=null,b.renderingStartTime=0,b.last=c,b.tail=s,b.tailMode=f,b.treeForkCount=g)}function Bg(n,i,s){var c=i.pendingProps,f=c.revealOrder,g=c.tail;c=c.children;var b=gt.current,_=(b&2)!==0;if(_?(b=b&1|2,i.flags|=128):b&=1,ee(gt,b),Ut(n,i,c,s),c=Ue?ps:0,!_&&n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ug(n,s,i);else if(n.tag===19)Ug(n,s,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)n=s.alternate,n!==null&&al(n)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),xd(i,!1,f,s,g,c);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&al(n)===null){i.child=f;break}n=f.sibling,f.sibling=s,s=f,f=n}xd(i,!0,s,null,g,c);break;case"together":xd(i,!1,null,null,void 0,c);break;default:i.memoizedState=null}return i.child}function ba(n,i,s){if(n!==null&&(i.dependencies=n.dependencies),Ja|=i.lanes,(s&i.childLanes)===0)if(n!==null){if(pr(n,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(r(153));if(i.child!==null){for(n=i.child,s=fa(n,n.pendingProps),i.child=s,s.return=i;n.sibling!==null;)n=n.sibling,s=s.sibling=fa(n,n.pendingProps),s.return=i;s.sibling=null}return i.child}function wd(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&Wo(n)))}function L2(n,i,s){switch(i.tag){case 3:ge(i,i.stateNode.containerInfo),Ia(i,wt,n.memoizedState.cache),Ci();break;case 27:case 5:tt(i);break;case 4:ge(i,i.stateNode.containerInfo);break;case 10:Ia(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Gu(i),null;break;case 13:var c=i.memoizedState;if(c!==null)return c.dehydrated!==null?(Ka(i),i.flags|=128,null):(s&i.child.childLanes)!==0?zg(n,i,s):(Ka(i),n=ba(n,i,s),n!==null?n.sibling:null);Ka(i);break;case 19:var f=(n.flags&128)!==0;if(c=(s&i.childLanes)!==0,c||(pr(n,i,s,!1),c=(s&i.childLanes)!==0),f){if(c)return Bg(n,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),ee(gt,gt.current),c)break;return null;case 22:return i.lanes=0,Ng(n,i,s,i.pendingProps);case 24:Ia(i,wt,n.memoizedState.cache)}return ba(n,i,s)}function Pg(n,i,s){if(n!==null)if(n.memoizedProps!==i.pendingProps)jt=!0;else{if(!wd(n,s)&&(i.flags&128)===0)return jt=!1,L2(n,i,s);jt=(n.flags&131072)!==0}else jt=!1,Ue&&(i.flags&1048576)!==0&&ym(i,ps,i.index);switch(i.lanes=0,i.tag){case 16:e:{var c=i.pendingProps;if(n=Oi(i.elementType),i.type=n,typeof n=="function")Eu(n)?(c=zi(n,c),i.tag=1,i=Lg(null,i,n,c,s)):(i.tag=0,i=pd(null,i,n,c,s));else{if(n!=null){var f=n.$$typeof;if(f===z){i.tag=11,i=Tg(null,i,n,c,s);break e}else if(f===D){i.tag=14,i=Cg(null,i,n,c,s);break e}}throw i=Ne(n)||n,Error(r(306,i,""))}}return i;case 0:return pd(n,i,i.type,i.pendingProps,s);case 1:return c=i.type,f=zi(c,i.pendingProps),Lg(n,i,c,f,s);case 3:e:{if(ge(i,i.stateNode.containerInfo),n===null)throw Error(r(387));c=i.pendingProps;var g=i.memoizedState;f=g.element,$u(n,i),Ss(i,c,null,s);var b=i.memoizedState;if(c=b.cache,Ia(i,wt,c),c!==g.cache&&Mu(i,[wt],s,!0),ws(),c=b.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){i=Mg(n,i,c,s);break e}else if(c!==f){f=Tn(Error(r(424)),i),ms(f),i=Mg(n,i,c,s);break e}else{switch(n=i.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(it=On(n.firstChild),Mt=i,Ue=!0,$a=null,Nn=!0,s=Nm(i,null,c,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Ci(),c===f){i=ba(n,i,s);break e}Ut(n,i,c,s)}i=i.child}return i;case 26:return pl(n,i),n===null?(s=X0(i.type,null,i.pendingProps,null))?i.memoizedState=s:Ue||(s=i.type,n=i.pendingProps,c=Rl(_e.current).createElement(s),c[Lt]=i,c[Zt]=n,Bt(c,s,n),Nt(c),i.stateNode=c):i.memoizedState=X0(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return tt(i),n===null&&Ue&&(c=i.stateNode=K0(i.type,i.pendingProps,_e.current),Mt=i,Nn=!0,f=it,ni(i.type)?(eh=f,it=On(c.firstChild)):it=f),Ut(n,i,i.pendingProps.children,s),pl(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&Ue&&((f=c=it)&&(c=u5(c,i.type,i.pendingProps,Nn),c!==null?(i.stateNode=c,Mt=i,it=On(c.firstChild),Nn=!1,f=!0):f=!1),f||Ha(i)),tt(i),f=i.type,g=i.pendingProps,b=n!==null?n.memoizedProps:null,c=g.children,Wd(f,g)?c=null:b!==null&&Wd(f,b)&&(i.flags|=32),i.memoizedState!==null&&(f=Yu(n,i,k2,null,null,s),Hs._currentValue=f),pl(n,i),Ut(n,i,c,s),i.child;case 6:return n===null&&Ue&&((n=s=it)&&(s=d5(s,i.pendingProps,Nn),s!==null?(i.stateNode=s,Mt=i,it=null,n=!0):n=!1),n||Ha(i)),null;case 13:return zg(n,i,s);case 4:return ge(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Li(i,null,c,s):Ut(n,i,c,s),i.child;case 11:return Tg(n,i,i.type,i.pendingProps,s);case 7:return Ut(n,i,i.pendingProps,s),i.child;case 8:return Ut(n,i,i.pendingProps.children,s),i.child;case 12:return Ut(n,i,i.pendingProps.children,s),i.child;case 10:return c=i.pendingProps,Ia(i,i.type,c.value),Ut(n,i,c.children,s),i.child;case 9:return f=i.type._context,c=i.pendingProps.children,Ni(i),f=zt(f),c=c(f),i.flags|=1,Ut(n,i,c,s),i.child;case 14:return Cg(n,i,i.type,i.pendingProps,s);case 15:return Ag(n,i,i.type,i.pendingProps,s);case 19:return Bg(n,i,s);case 31:return D2(n,i,s);case 22:return Ng(n,i,s,i.pendingProps);case 24:return Ni(i),c=zt(wt),n===null?(f=Bu(),f===null&&(f=Qe,g=zu(),f.pooledCache=g,g.refCount++,g!==null&&(f.pooledCacheLanes|=s),f=g),i.memoizedState={parent:c,cache:f},Vu(i),Ia(i,wt,f)):((n.lanes&s)!==0&&($u(n,i),Ss(i,null,null,s),ws()),f=n.memoizedState,g=i.memoizedState,f.parent!==c?(f={parent:c,cache:c},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Ia(i,wt,c)):(c=g.cache,Ia(i,wt,c),c!==f.cache&&Mu(i,[wt],s,!0))),Ut(n,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function xa(n){n.flags|=4}function Sd(n,i,s,c,f){if((i=(n.mode&32)!==0)&&(i=!1),i){if(n.flags|=16777216,(f&335544128)===f)if(n.stateNode.complete)n.flags|=8192;else if(h0())n.flags|=8192;else throw Di=Zo,Pu}else n.flags&=-16777217}function Vg(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!ty(i))if(h0())n.flags|=8192;else throw Di=Zo,Pu}function gl(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?bi():536870912,n.lanes|=i,Er|=i)}function Cs(n,i){if(!Ue)switch(n.tailMode){case"hidden":i=n.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function rt(n){var i=n.alternate!==null&&n.alternate.child===n.child,s=0,c=0;if(i)for(var f=n.child;f!==null;)s|=f.lanes|f.childLanes,c|=f.subtreeFlags&65011712,c|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)s|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=s,i}function M2(n,i,s){var c=i.pendingProps;switch(Nu(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(i),null;case 1:return rt(i),null;case 3:return s=i.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),i.memoizedState.cache!==c&&(i.flags|=2048),ga(wt),pe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(fr(i)?xa(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ou())),rt(i),null;case 26:var f=i.type,g=i.memoizedState;return n===null?(xa(i),g!==null?(rt(i),Vg(i,g)):(rt(i),Sd(i,f,null,c,s))):g?g!==n.memoizedState?(xa(i),rt(i),Vg(i,g)):(rt(i),i.flags&=-16777217):(n=n.memoizedProps,n!==c&&xa(i),rt(i),Sd(i,f,n,c,s)),null;case 27:if($e(i),s=_e.current,f=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==c&&xa(i);else{if(!c){if(i.stateNode===null)throw Error(r(166));return rt(i),null}n=te.current,fr(i)?bm(i):(n=K0(f,c,s),i.stateNode=n,xa(i))}return rt(i),null;case 5:if($e(i),f=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==c&&xa(i);else{if(!c){if(i.stateNode===null)throw Error(r(166));return rt(i),null}if(g=te.current,fr(i))bm(i);else{var b=Rl(_e.current);switch(g){case 1:g=b.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:g=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":g=b.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":g=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":g=b.createElement("div"),g.innerHTML="<script><\/script>",g=g.removeChild(g.firstChild);break;case"select":g=typeof c.is=="string"?b.createElement("select",{is:c.is}):b.createElement("select"),c.multiple?g.multiple=!0:c.size&&(g.size=c.size);break;default:g=typeof c.is=="string"?b.createElement(f,{is:c.is}):b.createElement(f)}}g[Lt]=i,g[Zt]=c;e:for(b=i.child;b!==null;){if(b.tag===5||b.tag===6)g.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===i)break e;for(;b.sibling===null;){if(b.return===null||b.return===i)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}i.stateNode=g;e:switch(Bt(g,f,c),f){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}c&&xa(i)}}return rt(i),Sd(i,i.type,n===null?null:n.memoizedProps,i.pendingProps,s),null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==c&&xa(i);else{if(typeof c!="string"&&i.stateNode===null)throw Error(r(166));if(n=_e.current,fr(i)){if(n=i.stateNode,s=i.memoizedProps,c=null,f=Mt,f!==null)switch(f.tag){case 27:case 5:c=f.memoizedProps}n[Lt]=i,n=!!(n.nodeValue===s||c!==null&&c.suppressHydrationWarning===!0||z0(n.nodeValue,s)),n||Ha(i,!0)}else n=Rl(n).createTextNode(c),n[Lt]=i,i.stateNode=n}return rt(i),null;case 31:if(s=i.memoizedState,n===null||n.memoizedState!==null){if(c=fr(i),s!==null){if(n===null){if(!c)throw Error(r(318));if(n=i.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(557));n[Lt]=i}else Ci(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;rt(i),n=!1}else s=Ou(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=s),n=!0;if(!n)return i.flags&256?(fn(i),i):(fn(i),null);if((i.flags&128)!==0)throw Error(r(558))}return rt(i),null;case 13:if(c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=fr(i),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(r(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[Lt]=i}else Ci(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;rt(i),f=!1}else f=Ou(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(fn(i),i):(fn(i),null)}return fn(i),(i.flags&128)!==0?(i.lanes=s,i):(s=c!==null,n=n!==null&&n.memoizedState!==null,s&&(c=i.child,f=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(f=c.alternate.memoizedState.cachePool.pool),g=null,c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(g=c.memoizedState.cachePool.pool),g!==f&&(c.flags|=2048)),s!==n&&s&&(i.child.flags|=8192),gl(i,i.updateQueue),rt(i),null);case 4:return pe(),n===null&&qd(i.stateNode.containerInfo),rt(i),null;case 10:return ga(i.type),rt(i),null;case 19:if(G(gt),c=i.memoizedState,c===null)return rt(i),null;if(f=(i.flags&128)!==0,g=c.rendering,g===null)if(f)Cs(c,!1);else{if(dt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(g=al(n),g!==null){for(i.flags|=128,Cs(c,!1),n=g.updateQueue,i.updateQueue=n,gl(i,n),i.subtreeFlags=0,n=s,s=i.child;s!==null;)pm(s,n),s=s.sibling;return ee(gt,gt.current&1|2),Ue&&pa(i,c.treeForkCount),i.child}n=n.sibling}c.tail!==null&&Be()>wl&&(i.flags|=128,f=!0,Cs(c,!1),i.lanes=4194304)}else{if(!f)if(n=al(g),n!==null){if(i.flags|=128,f=!0,n=n.updateQueue,i.updateQueue=n,gl(i,n),Cs(c,!0),c.tail===null&&c.tailMode==="hidden"&&!g.alternate&&!Ue)return rt(i),null}else 2*Be()-c.renderingStartTime>wl&&s!==536870912&&(i.flags|=128,f=!0,Cs(c,!1),i.lanes=4194304);c.isBackwards?(g.sibling=i.child,i.child=g):(n=c.last,n!==null?n.sibling=g:i.child=g,c.last=g)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=Be(),n.sibling=null,s=gt.current,ee(gt,f?s&1|2:s&1),Ue&&pa(i,c.treeForkCount),n):(rt(i),null);case 22:case 23:return fn(i),Fu(),c=i.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(i.flags|=8192):c&&(i.flags|=8192),c?(s&536870912)!==0&&(i.flags&128)===0&&(rt(i),i.subtreeFlags&6&&(i.flags|=8192)):rt(i),s=i.updateQueue,s!==null&&gl(i,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==s&&(i.flags|=2048),n!==null&&G(Ri),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ga(wt),rt(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function z2(n,i){switch(Nu(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ga(wt),pe(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return $e(i),null;case 31:if(i.memoizedState!==null){if(fn(i),i.alternate===null)throw Error(r(340));Ci()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 13:if(fn(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(r(340));Ci()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return G(gt),null;case 4:return pe(),null;case 10:return ga(i.type),null;case 22:case 23:return fn(i),Fu(),n!==null&&G(Ri),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return ga(wt),null;case 25:return null;default:return null}}function $g(n,i){switch(Nu(i),i.tag){case 3:ga(wt),pe();break;case 26:case 27:case 5:$e(i);break;case 4:pe();break;case 31:i.memoizedState!==null&&fn(i);break;case 13:fn(i);break;case 19:G(gt);break;case 10:ga(i.type);break;case 22:case 23:fn(i),Fu(),n!==null&&G(Ri);break;case 24:ga(wt)}}function As(n,i){try{var s=i.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&n)===n){c=void 0;var g=s.create,b=s.inst;c=g(),b.destroy=c}s=s.next}while(s!==f)}}catch(_){Fe(i,i.return,_)}}function Wa(n,i,s){try{var c=i.updateQueue,f=c!==null?c.lastEffect:null;if(f!==null){var g=f.next;c=g;do{if((c.tag&n)===n){var b=c.inst,_=b.destroy;if(_!==void 0){b.destroy=void 0,f=i;var A=s,B=_;try{B()}catch(F){Fe(f,A,F)}}}c=c.next}while(c!==g)}}catch(F){Fe(i,i.return,F)}}function Hg(n){var i=n.updateQueue;if(i!==null){var s=n.stateNode;try{Om(i,s)}catch(c){Fe(n,n.return,c)}}}function Ig(n,i,s){s.props=zi(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(c){Fe(n,i,c)}}function Ns(n,i){try{var s=n.ref;if(s!==null){switch(n.tag){case 26:case 27:case 5:var c=n.stateNode;break;case 30:c=n.stateNode;break;default:c=n.stateNode}typeof s=="function"?n.refCleanup=s(c):s.current=c}}catch(f){Fe(n,i,f)}}function Zn(n,i){var s=n.ref,c=n.refCleanup;if(s!==null)if(typeof c=="function")try{c()}catch(f){Fe(n,i,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Fe(n,i,f)}else s.current=null}function qg(n){var i=n.type,s=n.memoizedProps,c=n.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&c.focus();break e;case"img":s.src?c.src=s.src:s.srcSet&&(c.srcset=s.srcSet)}}catch(f){Fe(n,n.return,f)}}function jd(n,i,s){try{var c=n.stateNode;i5(c,n.type,s,i),c[Zt]=i}catch(f){Fe(n,n.return,f)}}function Fg(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&ni(n.type)||n.tag===4}function _d(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Fg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&ni(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function kd(n,i,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(n,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(n),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=da));else if(c!==4&&(c===27&&ni(n.type)&&(s=n.stateNode,i=null),n=n.child,n!==null))for(kd(n,i,s),n=n.sibling;n!==null;)kd(n,i,s),n=n.sibling}function yl(n,i,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?s.insertBefore(n,i):s.appendChild(n);else if(c!==4&&(c===27&&ni(n.type)&&(s=n.stateNode),n=n.child,n!==null))for(yl(n,i,s),n=n.sibling;n!==null;)yl(n,i,s),n=n.sibling}function Gg(n){var i=n.stateNode,s=n.memoizedProps;try{for(var c=n.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Bt(i,c,s),i[Lt]=n,i[Zt]=s}catch(g){Fe(n,n.return,g)}}var wa=!1,_t=!1,Ed=!1,Kg=typeof WeakSet=="function"?WeakSet:Set,Rt=null;function U2(n,i){if(n=n.containerInfo,Kd=Bl,n=rm(n),bu(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else e:{s=(s=n.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{s.nodeType,g.nodeType}catch{s=null;break e}var b=0,_=-1,A=-1,B=0,F=0,W=n,P=null;t:for(;;){for(var V;W!==s||f!==0&&W.nodeType!==3||(_=b+f),W!==g||c!==0&&W.nodeType!==3||(A=b+c),W.nodeType===3&&(b+=W.nodeValue.length),(V=W.firstChild)!==null;)P=W,W=V;for(;;){if(W===n)break t;if(P===s&&++B===f&&(_=b),P===g&&++F===c&&(A=b),(V=W.nextSibling)!==null)break;W=P,P=W.parentNode}W=V}s=_===-1||A===-1?null:{start:_,end:A}}else s=null}s=s||{start:0,end:0}}else s=null;for(Yd={focusedElem:n,selectionRange:s},Bl=!1,Rt=i;Rt!==null;)if(i=Rt,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Rt=n;else for(;Rt!==null;){switch(i=Rt,g=i.alternate,n=i.flags,i.tag){case 0:if((n&4)!==0&&(n=i.updateQueue,n=n!==null?n.events:null,n!==null))for(s=0;s<n.length;s++)f=n[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&g!==null){n=void 0,s=i,f=g.memoizedProps,g=g.memoizedState,c=s.stateNode;try{var le=zi(s.type,f);n=c.getSnapshotBeforeUpdate(le,g),c.__reactInternalSnapshotBeforeUpdate=n}catch(ve){Fe(s,s.return,ve)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,s=n.nodeType,s===9)Jd(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Jd(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(r(163))}if(n=i.sibling,n!==null){n.return=i.return,Rt=n;break}Rt=i.return}}function Yg(n,i,s){var c=s.flags;switch(s.tag){case 0:case 11:case 15:ja(n,s),c&4&&As(5,s);break;case 1:if(ja(n,s),c&4)if(n=s.stateNode,i===null)try{n.componentDidMount()}catch(b){Fe(s,s.return,b)}else{var f=zi(s.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(f,i,n.__reactInternalSnapshotBeforeUpdate)}catch(b){Fe(s,s.return,b)}}c&64&&Hg(s),c&512&&Ns(s,s.return);break;case 3:if(ja(n,s),c&64&&(n=s.updateQueue,n!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Om(n,i)}catch(b){Fe(s,s.return,b)}}break;case 27:i===null&&c&4&&Gg(s);case 26:case 5:ja(n,s),i===null&&c&4&&qg(s),c&512&&Ns(s,s.return);break;case 12:ja(n,s);break;case 31:ja(n,s),c&4&&Jg(n,s);break;case 13:ja(n,s),c&4&&Qg(n,s),c&64&&(n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(s=G2.bind(null,s),h5(n,s))));break;case 22:if(c=s.memoizedState!==null||wa,!c){i=i!==null&&i.memoizedState!==null||_t,f=wa;var g=_t;wa=c,(_t=i)&&!g?_a(n,s,(s.subtreeFlags&8772)!==0):ja(n,s),wa=f,_t=g}break;case 30:break;default:ja(n,s)}}function Wg(n){var i=n.alternate;i!==null&&(n.alternate=null,Wg(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&nu(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var st=null,tn=!1;function Sa(n,i,s){for(s=s.child;s!==null;)Xg(n,i,s),s=s.sibling}function Xg(n,i,s){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(Ua,s)}catch{}switch(s.tag){case 26:_t||Zn(s,i),Sa(n,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:_t||Zn(s,i);var c=st,f=tn;ni(s.type)&&(st=s.stateNode,tn=!1),Sa(n,i,s),Ps(s.stateNode),st=c,tn=f;break;case 5:_t||Zn(s,i);case 6:if(c=st,f=tn,st=null,Sa(n,i,s),st=c,tn=f,st!==null)if(tn)try{(st.nodeType===9?st.body:st.nodeName==="HTML"?st.ownerDocument.body:st).removeChild(s.stateNode)}catch(g){Fe(s,i,g)}else try{st.removeChild(s.stateNode)}catch(g){Fe(s,i,g)}break;case 18:st!==null&&(tn?(n=st,H0(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,s.stateNode),Lr(n)):H0(st,s.stateNode));break;case 4:c=st,f=tn,st=s.stateNode.containerInfo,tn=!0,Sa(n,i,s),st=c,tn=f;break;case 0:case 11:case 14:case 15:Wa(2,s,i),_t||Wa(4,s,i),Sa(n,i,s);break;case 1:_t||(Zn(s,i),c=s.stateNode,typeof c.componentWillUnmount=="function"&&Ig(s,i,c)),Sa(n,i,s);break;case 21:Sa(n,i,s);break;case 22:_t=(c=_t)||s.memoizedState!==null,Sa(n,i,s),_t=c;break;default:Sa(n,i,s)}}function Jg(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{Lr(n)}catch(s){Fe(i,i.return,s)}}}function Qg(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Lr(n)}catch(s){Fe(i,i.return,s)}}function B2(n){switch(n.tag){case 31:case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new Kg),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new Kg),i;default:throw Error(r(435,n.tag))}}function vl(n,i){var s=B2(n);i.forEach(function(c){if(!s.has(c)){s.add(c);var f=K2.bind(null,n,c);c.then(f,f)}})}function nn(n,i){var s=i.deletions;if(s!==null)for(var c=0;c<s.length;c++){var f=s[c],g=n,b=i,_=b;e:for(;_!==null;){switch(_.tag){case 27:if(ni(_.type)){st=_.stateNode,tn=!1;break e}break;case 5:st=_.stateNode,tn=!1;break e;case 3:case 4:st=_.stateNode.containerInfo,tn=!0;break e}_=_.return}if(st===null)throw Error(r(160));Xg(g,b,f),st=null,tn=!1,g=f.alternate,g!==null&&(g.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Zg(i,n),i=i.sibling}var Pn=null;function Zg(n,i){var s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:nn(i,n),an(n),c&4&&(Wa(3,n,n.return),As(3,n),Wa(5,n,n.return));break;case 1:nn(i,n),an(n),c&512&&(_t||s===null||Zn(s,s.return)),c&64&&wa&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?c:s.concat(c))));break;case 26:var f=Pn;if(nn(i,n),an(n),c&512&&(_t||s===null||Zn(s,s.return)),c&4){var g=s!==null?s.memoizedState:null;if(c=n.memoizedState,s===null)if(c===null)if(n.stateNode===null){e:{c=n.type,s=n.memoizedProps,f=f.ownerDocument||f;t:switch(c){case"title":g=f.getElementsByTagName("title")[0],(!g||g[as]||g[Lt]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=f.createElement(c),f.head.insertBefore(g,f.querySelector("head > title"))),Bt(g,c,s),g[Lt]=n,Nt(g),c=g;break e;case"link":var b=Z0("link","href",f).get(c+(s.href||""));if(b){for(var _=0;_<b.length;_++)if(g=b[_],g.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&g.getAttribute("rel")===(s.rel==null?null:s.rel)&&g.getAttribute("title")===(s.title==null?null:s.title)&&g.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){b.splice(_,1);break t}}g=f.createElement(c),Bt(g,c,s),f.head.appendChild(g);break;case"meta":if(b=Z0("meta","content",f).get(c+(s.content||""))){for(_=0;_<b.length;_++)if(g=b[_],g.getAttribute("content")===(s.content==null?null:""+s.content)&&g.getAttribute("name")===(s.name==null?null:s.name)&&g.getAttribute("property")===(s.property==null?null:s.property)&&g.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&g.getAttribute("charset")===(s.charSet==null?null:s.charSet)){b.splice(_,1);break t}}g=f.createElement(c),Bt(g,c,s),f.head.appendChild(g);break;default:throw Error(r(468,c))}g[Lt]=n,Nt(g),c=g}n.stateNode=c}else ey(f,n.type,n.stateNode);else n.stateNode=Q0(f,c,n.memoizedProps);else g!==c?(g===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):g.count--,c===null?ey(f,n.type,n.stateNode):Q0(f,c,n.memoizedProps)):c===null&&n.stateNode!==null&&jd(n,n.memoizedProps,s.memoizedProps)}break;case 27:nn(i,n),an(n),c&512&&(_t||s===null||Zn(s,s.return)),s!==null&&c&4&&jd(n,n.memoizedProps,s.memoizedProps);break;case 5:if(nn(i,n),an(n),c&512&&(_t||s===null||Zn(s,s.return)),n.flags&32){f=n.stateNode;try{ar(f,"")}catch(le){Fe(n,n.return,le)}}c&4&&n.stateNode!=null&&(f=n.memoizedProps,jd(n,f,s!==null?s.memoizedProps:f)),c&1024&&(Ed=!0);break;case 6:if(nn(i,n),an(n),c&4){if(n.stateNode===null)throw Error(r(162));c=n.memoizedProps,s=n.stateNode;try{s.nodeValue=c}catch(le){Fe(n,n.return,le)}}break;case 3:if(Ll=null,f=Pn,Pn=Ol(i.containerInfo),nn(i,n),Pn=f,an(n),c&4&&s!==null&&s.memoizedState.isDehydrated)try{Lr(i.containerInfo)}catch(le){Fe(n,n.return,le)}Ed&&(Ed=!1,e0(n));break;case 4:c=Pn,Pn=Ol(n.stateNode.containerInfo),nn(i,n),an(n),Pn=c;break;case 12:nn(i,n),an(n);break;case 31:nn(i,n),an(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,vl(n,c)));break;case 13:nn(i,n),an(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(xl=Be()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,vl(n,c)));break;case 22:f=n.memoizedState!==null;var A=s!==null&&s.memoizedState!==null,B=wa,F=_t;if(wa=B||f,_t=F||A,nn(i,n),_t=F,wa=B,an(n),c&8192)e:for(i=n.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||A||wa||_t||Ui(n)),s=null,i=n;;){if(i.tag===5||i.tag===26){if(s===null){A=s=i;try{if(g=A.stateNode,f)b=g.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{_=A.stateNode;var W=A.memoizedProps.style,P=W!=null&&W.hasOwnProperty("display")?W.display:null;_.style.display=P==null||typeof P=="boolean"?"":(""+P).trim()}}catch(le){Fe(A,A.return,le)}}}else if(i.tag===6){if(s===null){A=i;try{A.stateNode.nodeValue=f?"":A.memoizedProps}catch(le){Fe(A,A.return,le)}}}else if(i.tag===18){if(s===null){A=i;try{var V=A.stateNode;f?I0(V,!0):I0(A.stateNode,!1)}catch(le){Fe(A,A.return,le)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break e;for(;i.sibling===null;){if(i.return===null||i.return===n)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}c&4&&(c=n.updateQueue,c!==null&&(s=c.retryQueue,s!==null&&(c.retryQueue=null,vl(n,s))));break;case 19:nn(i,n),an(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,vl(n,c)));break;case 30:break;case 21:break;default:nn(i,n),an(n)}}function an(n){var i=n.flags;if(i&2){try{for(var s,c=n.return;c!==null;){if(Fg(c)){s=c;break}c=c.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,g=_d(n);yl(n,g,f);break;case 5:var b=s.stateNode;s.flags&32&&(ar(b,""),s.flags&=-33);var _=_d(n);yl(n,_,b);break;case 3:case 4:var A=s.stateNode.containerInfo,B=_d(n);kd(n,B,A);break;default:throw Error(r(161))}}catch(F){Fe(n,n.return,F)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function e0(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;e0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function ja(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Yg(n,i.alternate,i),i=i.sibling}function Ui(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:Wa(4,i,i.return),Ui(i);break;case 1:Zn(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Ig(i,i.return,s),Ui(i);break;case 27:Ps(i.stateNode);case 26:case 5:Zn(i,i.return),Ui(i);break;case 22:i.memoizedState===null&&Ui(i);break;case 30:Ui(i);break;default:Ui(i)}n=n.sibling}}function _a(n,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var c=i.alternate,f=n,g=i,b=g.flags;switch(g.tag){case 0:case 11:case 15:_a(f,g,s),As(4,g);break;case 1:if(_a(f,g,s),c=g,f=c.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(B){Fe(c,c.return,B)}if(c=g,f=c.updateQueue,f!==null){var _=c.stateNode;try{var A=f.shared.hiddenCallbacks;if(A!==null)for(f.shared.hiddenCallbacks=null,f=0;f<A.length;f++)Rm(A[f],_)}catch(B){Fe(c,c.return,B)}}s&&b&64&&Hg(g),Ns(g,g.return);break;case 27:Gg(g);case 26:case 5:_a(f,g,s),s&&c===null&&b&4&&qg(g),Ns(g,g.return);break;case 12:_a(f,g,s);break;case 31:_a(f,g,s),s&&b&4&&Jg(f,g);break;case 13:_a(f,g,s),s&&b&4&&Qg(f,g);break;case 22:g.memoizedState===null&&_a(f,g,s),Ns(g,g.return);break;case 30:break;default:_a(f,g,s)}i=i.sibling}}function Td(n,i){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&gs(s))}function Cd(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&gs(n))}function Vn(n,i,s,c){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)t0(n,i,s,c),i=i.sibling}function t0(n,i,s,c){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Vn(n,i,s,c),f&2048&&As(9,i);break;case 1:Vn(n,i,s,c);break;case 3:Vn(n,i,s,c),f&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&gs(n)));break;case 12:if(f&2048){Vn(n,i,s,c),n=i.stateNode;try{var g=i.memoizedProps,b=g.id,_=g.onPostCommit;typeof _=="function"&&_(b,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(A){Fe(i,i.return,A)}}else Vn(n,i,s,c);break;case 31:Vn(n,i,s,c);break;case 13:Vn(n,i,s,c);break;case 23:break;case 22:g=i.stateNode,b=i.alternate,i.memoizedState!==null?g._visibility&2?Vn(n,i,s,c):Rs(n,i):g._visibility&2?Vn(n,i,s,c):(g._visibility|=2,jr(n,i,s,c,(i.subtreeFlags&10256)!==0||!1)),f&2048&&Td(b,i);break;case 24:Vn(n,i,s,c),f&2048&&Cd(i.alternate,i);break;default:Vn(n,i,s,c)}}function jr(n,i,s,c,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var g=n,b=i,_=s,A=c,B=b.flags;switch(b.tag){case 0:case 11:case 15:jr(g,b,_,A,f),As(8,b);break;case 23:break;case 22:var F=b.stateNode;b.memoizedState!==null?F._visibility&2?jr(g,b,_,A,f):Rs(g,b):(F._visibility|=2,jr(g,b,_,A,f)),f&&B&2048&&Td(b.alternate,b);break;case 24:jr(g,b,_,A,f),f&&B&2048&&Cd(b.alternate,b);break;default:jr(g,b,_,A,f)}i=i.sibling}}function Rs(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=n,c=i,f=c.flags;switch(c.tag){case 22:Rs(s,c),f&2048&&Td(c.alternate,c);break;case 24:Rs(s,c),f&2048&&Cd(c.alternate,c);break;default:Rs(s,c)}i=i.sibling}}var Os=8192;function _r(n,i,s){if(n.subtreeFlags&Os)for(n=n.child;n!==null;)n0(n,i,s),n=n.sibling}function n0(n,i,s){switch(n.tag){case 26:_r(n,i,s),n.flags&Os&&n.memoizedState!==null&&_5(s,Pn,n.memoizedState,n.memoizedProps);break;case 5:_r(n,i,s);break;case 3:case 4:var c=Pn;Pn=Ol(n.stateNode.containerInfo),_r(n,i,s),Pn=c;break;case 22:n.memoizedState===null&&(c=n.alternate,c!==null&&c.memoizedState!==null?(c=Os,Os=16777216,_r(n,i,s),Os=c):_r(n,i,s));break;default:_r(n,i,s)}}function a0(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function Ds(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var c=i[s];Rt=c,r0(c,n)}a0(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)i0(n),n=n.sibling}function i0(n){switch(n.tag){case 0:case 11:case 15:Ds(n),n.flags&2048&&Wa(9,n,n.return);break;case 3:Ds(n);break;case 12:Ds(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,bl(n)):Ds(n);break;default:Ds(n)}}function bl(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var c=i[s];Rt=c,r0(c,n)}a0(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:Wa(8,i,i.return),bl(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,bl(i));break;default:bl(i)}n=n.sibling}}function r0(n,i){for(;Rt!==null;){var s=Rt;switch(s.tag){case 0:case 11:case 15:Wa(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var c=s.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:gs(s.memoizedState.cache)}if(c=s.child,c!==null)c.return=s,Rt=c;else e:for(s=n;Rt!==null;){c=Rt;var f=c.sibling,g=c.return;if(Wg(c),c===s){Rt=null;break e}if(f!==null){f.return=g,Rt=f;break e}Rt=g}}}var P2={getCacheForType:function(n){var i=zt(wt),s=i.data.get(n);return s===void 0&&(s=n(),i.data.set(n,s)),s},cacheSignal:function(){return zt(wt).controller.signal}},V2=typeof WeakMap=="function"?WeakMap:Map,He=0,Qe=null,De=null,Me=0,qe=0,pn=null,Xa=!1,kr=!1,Ad=!1,ka=0,dt=0,Ja=0,Bi=0,Nd=0,mn=0,Er=0,Ls=null,rn=null,Rd=!1,xl=0,s0=0,wl=1/0,Sl=null,Qa=null,Ct=0,Za=null,Tr=null,Ea=0,Od=0,Dd=null,o0=null,Ms=0,Ld=null;function gn(){return(He&2)!==0&&Me!==0?Me&-Me:M.T!==null?Vd():jp()}function l0(){if(mn===0)if((Me&536870912)===0||Ue){var n=Ae;Ae<<=1,(Ae&3932160)===0&&(Ae=262144),mn=n}else mn=536870912;return n=hn.current,n!==null&&(n.flags|=32),mn}function sn(n,i,s){(n===Qe&&(qe===2||qe===9)||n.cancelPendingCommit!==null)&&(Cr(n,0),ei(n,Me,mn,!1)),jn(n,s),((He&2)===0||n!==Qe)&&(n===Qe&&((He&2)===0&&(Bi|=s),dt===4&&ei(n,Me,mn,!1)),ea(n))}function c0(n,i,s){if((He&6)!==0)throw Error(r(327));var c=!s&&(i&127)===0&&(i&n.expiredLanes)===0||Qt(n,i),f=c?I2(n,i):zd(n,i,!0),g=c;do{if(f===0){kr&&!c&&ei(n,i,0,!1);break}else{if(s=n.current.alternate,g&&!$2(s)){f=zd(n,i,!1),g=!1;continue}if(f===2){if(g=i,n.errorRecoveryDisabledLanes&g)var b=0;else b=n.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;e:{var _=n;f=Ls;var A=_.current.memoizedState.isDehydrated;if(A&&(Cr(_,b).flags|=256),b=zd(_,b,!1),b!==2){if(Ad&&!A){_.errorRecoveryDisabledLanes|=g,Bi|=g,f=4;break e}g=rn,rn=f,g!==null&&(rn===null?rn=g:rn.push.apply(rn,g))}f=b}if(g=!1,f!==2)continue}}if(f===1){Cr(n,0),ei(n,i,0,!0);break}e:{switch(c=n,g=f,g){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:ei(c,i,mn,!Xa);break e;case 2:rn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(f=xl+300-Be(),10<f)){if(ei(c,i,mn,!Xa),nt(c,0,!0)!==0)break e;Ea=i,c.timeoutHandle=V0(u0.bind(null,c,s,rn,Sl,Rd,i,mn,Bi,Er,Xa,g,"Throttled",-0,0),f);break e}u0(c,s,rn,Sl,Rd,i,mn,Bi,Er,Xa,g,null,-0,0)}}break}while(!0);ea(n)}function u0(n,i,s,c,f,g,b,_,A,B,F,W,P,V){if(n.timeoutHandle=-1,W=i.subtreeFlags,W&8192||(W&16785408)===16785408){W={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:da},n0(i,g,W);var le=(g&62914560)===g?xl-Be():(g&4194048)===g?s0-Be():0;if(le=k5(W,le),le!==null){Ea=g,n.cancelPendingCommit=le(v0.bind(null,n,i,g,s,c,f,b,_,A,F,W,null,P,V)),ei(n,g,b,!B);return}}v0(n,i,g,s,c,f,b,_,A)}function $2(n){for(var i=n;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var c=0;c<s.length;c++){var f=s[c],g=f.getSnapshot;f=f.value;try{if(!un(g(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ei(n,i,s,c){i&=~Nd,i&=~Bi,n.suspendedLanes|=i,n.pingedLanes&=~i,c&&(n.warmLanes|=i),c=n.expirationTimes;for(var f=i;0<f;){var g=31-$t(f),b=1<<g;c[g]=-1,f&=~b}s!==0&&Oo(n,s,i)}function jl(){return(He&6)===0?(zs(0),!1):!0}function Md(){if(De!==null){if(qe===0)var n=De.return;else n=De,ma=Ai=null,Ju(n),vr=null,vs=0,n=De;for(;n!==null;)$g(n.alternate,n),n=n.return;De=null}}function Cr(n,i){var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,o5(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),Ea=0,Md(),Qe=n,De=s=fa(n.current,null),Me=i,qe=0,pn=null,Xa=!1,kr=Qt(n,i),Ad=!1,Er=mn=Nd=Bi=Ja=dt=0,rn=Ls=null,Rd=!1,(i&8)!==0&&(i|=i&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=i;0<c;){var f=31-$t(c),g=1<<f;i|=n[f],c&=~g}return ka=i,qo(),s}function d0(n,i){Te=null,M.H=Es,i===yr||i===Qo?(i=Tm(),qe=3):i===Pu?(i=Tm(),qe=4):qe=i===fd?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,pn=i,De===null&&(dt=1,hl(n,Tn(i,n.current)))}function h0(){var n=hn.current;return n===null?!0:(Me&4194048)===Me?Rn===null:(Me&62914560)===Me||(Me&536870912)!==0?n===Rn:!1}function f0(){var n=M.H;return M.H=Es,n===null?Es:n}function p0(){var n=M.A;return M.A=P2,n}function _l(){dt=4,Xa||(Me&4194048)!==Me&&hn.current!==null||(kr=!0),(Ja&134217727)===0&&(Bi&134217727)===0||Qe===null||ei(Qe,Me,mn,!1)}function zd(n,i,s){var c=He;He|=2;var f=f0(),g=p0();(Qe!==n||Me!==i)&&(Sl=null,Cr(n,i)),i=!1;var b=dt;e:do try{if(qe!==0&&De!==null){var _=De,A=pn;switch(qe){case 8:Md(),b=6;break e;case 3:case 2:case 9:case 6:hn.current===null&&(i=!0);var B=qe;if(qe=0,pn=null,Ar(n,_,A,B),s&&kr){b=0;break e}break;default:B=qe,qe=0,pn=null,Ar(n,_,A,B)}}H2(),b=dt;break}catch(F){d0(n,F)}while(!0);return i&&n.shellSuspendCounter++,ma=Ai=null,He=c,M.H=f,M.A=g,De===null&&(Qe=null,Me=0,qo()),b}function H2(){for(;De!==null;)m0(De)}function I2(n,i){var s=He;He|=2;var c=f0(),f=p0();Qe!==n||Me!==i?(Sl=null,wl=Be()+500,Cr(n,i)):kr=Qt(n,i);e:do try{if(qe!==0&&De!==null){i=De;var g=pn;t:switch(qe){case 1:qe=0,pn=null,Ar(n,i,g,1);break;case 2:case 9:if(km(g)){qe=0,pn=null,g0(i);break}i=function(){qe!==2&&qe!==9||Qe!==n||(qe=7),ea(n)},g.then(i,i);break e;case 3:qe=7;break e;case 4:qe=5;break e;case 7:km(g)?(qe=0,pn=null,g0(i)):(qe=0,pn=null,Ar(n,i,g,7));break;case 5:var b=null;switch(De.tag){case 26:b=De.memoizedState;case 5:case 27:var _=De;if(b?ty(b):_.stateNode.complete){qe=0,pn=null;var A=_.sibling;if(A!==null)De=A;else{var B=_.return;B!==null?(De=B,kl(B)):De=null}break t}}qe=0,pn=null,Ar(n,i,g,5);break;case 6:qe=0,pn=null,Ar(n,i,g,6);break;case 8:Md(),dt=6;break e;default:throw Error(r(462))}}q2();break}catch(F){d0(n,F)}while(!0);return ma=Ai=null,M.H=c,M.A=f,He=s,De!==null?0:(Qe=null,Me=0,qo(),dt)}function q2(){for(;De!==null&&!de();)m0(De)}function m0(n){var i=Pg(n.alternate,n,ka);n.memoizedProps=n.pendingProps,i===null?kl(n):De=i}function g0(n){var i=n,s=i.alternate;switch(i.tag){case 15:case 0:i=Dg(s,i,i.pendingProps,i.type,void 0,Me);break;case 11:i=Dg(s,i,i.pendingProps,i.type.render,i.ref,Me);break;case 5:Ju(i);default:$g(s,i),i=De=pm(i,ka),i=Pg(s,i,ka)}n.memoizedProps=n.pendingProps,i===null?kl(n):De=i}function Ar(n,i,s,c){ma=Ai=null,Ju(i),vr=null,vs=0;var f=i.return;try{if(O2(n,f,i,s,Me)){dt=1,hl(n,Tn(s,n.current)),De=null;return}}catch(g){if(f!==null)throw De=f,g;dt=1,hl(n,Tn(s,n.current)),De=null;return}i.flags&32768?(Ue||c===1?n=!0:kr||(Me&536870912)!==0?n=!1:(Xa=n=!0,(c===2||c===9||c===3||c===6)&&(c=hn.current,c!==null&&c.tag===13&&(c.flags|=16384))),y0(i,n)):kl(i)}function kl(n){var i=n;do{if((i.flags&32768)!==0){y0(i,Xa);return}n=i.return;var s=M2(i.alternate,i,ka);if(s!==null){De=s;return}if(i=i.sibling,i!==null){De=i;return}De=i=n}while(i!==null);dt===0&&(dt=5)}function y0(n,i){do{var s=z2(n.alternate,n);if(s!==null){s.flags&=32767,De=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(n=n.sibling,n!==null)){De=n;return}De=n=s}while(n!==null);dt=6,De=null}function v0(n,i,s,c,f,g,b,_,A){n.cancelPendingCommit=null;do El();while(Ct!==0);if((He&6)!==0)throw Error(r(327));if(i!==null){if(i===n.current)throw Error(r(177));if(g=i.lanes|i.childLanes,g|=_u,wi(n,s,g,b,_,A),n===Qe&&(De=Qe=null,Me=0),Tr=i,Za=n,Ea=s,Od=g,Dd=f,o0=c,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,Y2(Sn,function(){return j0(),null})):(n.callbackNode=null,n.callbackPriority=0),c=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||c){c=M.T,M.T=null,f=ne.p,ne.p=2,b=He,He|=4;try{U2(n,i,s)}finally{He=b,ne.p=f,M.T=c}}Ct=1,b0(),x0(),w0()}}function b0(){if(Ct===1){Ct=0;var n=Za,i=Tr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=M.T,M.T=null;var c=ne.p;ne.p=2;var f=He;He|=4;try{Zg(i,n);var g=Yd,b=rm(n.containerInfo),_=g.focusedElem,A=g.selectionRange;if(b!==_&&_&&_.ownerDocument&&im(_.ownerDocument.documentElement,_)){if(A!==null&&bu(_)){var B=A.start,F=A.end;if(F===void 0&&(F=B),"selectionStart"in _)_.selectionStart=B,_.selectionEnd=Math.min(F,_.value.length);else{var W=_.ownerDocument||document,P=W&&W.defaultView||window;if(P.getSelection){var V=P.getSelection(),le=_.textContent.length,ve=Math.min(A.start,le),Xe=A.end===void 0?ve:Math.min(A.end,le);!V.extend&&ve>Xe&&(b=Xe,Xe=ve,ve=b);var L=am(_,ve),O=am(_,Xe);if(L&&O&&(V.rangeCount!==1||V.anchorNode!==L.node||V.anchorOffset!==L.offset||V.focusNode!==O.node||V.focusOffset!==O.offset)){var U=W.createRange();U.setStart(L.node,L.offset),V.removeAllRanges(),ve>Xe?(V.addRange(U),V.extend(O.node,O.offset)):(U.setEnd(O.node,O.offset),V.addRange(U))}}}}for(W=[],V=_;V=V.parentNode;)V.nodeType===1&&W.push({element:V,left:V.scrollLeft,top:V.scrollTop});for(typeof _.focus=="function"&&_.focus(),_=0;_<W.length;_++){var K=W[_];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}Bl=!!Kd,Yd=Kd=null}finally{He=f,ne.p=c,M.T=s}}n.current=i,Ct=2}}function x0(){if(Ct===2){Ct=0;var n=Za,i=Tr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=M.T,M.T=null;var c=ne.p;ne.p=2;var f=He;He|=4;try{Yg(n,i.alternate,i)}finally{He=f,ne.p=c,M.T=s}}Ct=3}}function w0(){if(Ct===4||Ct===3){Ct=0,Je();var n=Za,i=Tr,s=Ea,c=o0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Ct=5:(Ct=0,Tr=Za=null,S0(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(Qa=null),eu(s),i=i.stateNode,Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(Ua,i,void 0,(i.current.flags&128)===128)}catch{}if(c!==null){i=M.T,f=ne.p,ne.p=2,M.T=null;try{for(var g=n.onRecoverableError,b=0;b<c.length;b++){var _=c[b];g(_.value,{componentStack:_.stack})}}finally{M.T=i,ne.p=f}}(Ea&3)!==0&&El(),ea(n),f=n.pendingLanes,(s&261930)!==0&&(f&42)!==0?n===Ld?Ms++:(Ms=0,Ld=n):Ms=0,zs(0)}}function S0(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,gs(i)))}function El(){return b0(),x0(),w0(),j0()}function j0(){if(Ct!==5)return!1;var n=Za,i=Od;Od=0;var s=eu(Ea),c=M.T,f=ne.p;try{ne.p=32>s?32:s,M.T=null,s=Dd,Dd=null;var g=Za,b=Ea;if(Ct=0,Tr=Za=null,Ea=0,(He&6)!==0)throw Error(r(331));var _=He;if(He|=4,i0(g.current),t0(g,g.current,b,s),He=_,zs(0,!1),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(Ua,g)}catch{}return!0}finally{ne.p=f,M.T=c,S0(n,i)}}function _0(n,i,s){i=Tn(s,i),i=hd(n.stateNode,i,2),n=Ga(n,i,2),n!==null&&(jn(n,2),ea(n))}function Fe(n,i,s){if(n.tag===3)_0(n,n,s);else for(;i!==null;){if(i.tag===3){_0(i,n,s);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Qa===null||!Qa.has(c))){n=Tn(s,n),s=kg(2),c=Ga(i,s,2),c!==null&&(Eg(s,c,i,n),jn(c,2),ea(c));break}}i=i.return}}function Ud(n,i,s){var c=n.pingCache;if(c===null){c=n.pingCache=new V2;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(s)||(Ad=!0,f.add(s),n=F2.bind(null,n,i,s),i.then(n,n))}function F2(n,i,s){var c=n.pingCache;c!==null&&c.delete(i),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,Qe===n&&(Me&s)===s&&(dt===4||dt===3&&(Me&62914560)===Me&&300>Be()-xl?(He&2)===0&&Cr(n,0):Nd|=s,Er===Me&&(Er=0)),ea(n)}function k0(n,i){i===0&&(i=bi()),n=Ei(n,i),n!==null&&(jn(n,i),ea(n))}function G2(n){var i=n.memoizedState,s=0;i!==null&&(s=i.retryLane),k0(n,s)}function K2(n,i){var s=0;switch(n.tag){case 31:case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(s=f.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(r(314))}c!==null&&c.delete(i),k0(n,s)}function Y2(n,i){return vi(n,i)}var Tl=null,Nr=null,Bd=!1,Cl=!1,Pd=!1,ti=0;function ea(n){n!==Nr&&n.next===null&&(Nr===null?Tl=Nr=n:Nr=Nr.next=n),Cl=!0,Bd||(Bd=!0,X2())}function zs(n,i){if(!Pd&&Cl){Pd=!0;do for(var s=!1,c=Tl;c!==null;){if(n!==0){var f=c.pendingLanes;if(f===0)var g=0;else{var b=c.suspendedLanes,_=c.pingedLanes;g=(1<<31-$t(42|n)+1)-1,g&=f&~(b&~_),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(s=!0,A0(c,g))}else g=Me,g=nt(c,c===Qe?g:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(g&3)===0||Qt(c,g)||(s=!0,A0(c,g));c=c.next}while(s);Pd=!1}}function W2(){E0()}function E0(){Cl=Bd=!1;var n=0;ti!==0&&s5()&&(n=ti);for(var i=Be(),s=null,c=Tl;c!==null;){var f=c.next,g=T0(c,i);g===0?(c.next=null,s===null?Tl=f:s.next=f,f===null&&(Nr=s)):(s=c,(n!==0||(g&3)!==0)&&(Cl=!0)),c=f}Ct!==0&&Ct!==5||zs(n),ti!==0&&(ti=0)}function T0(n,i){for(var s=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,g=n.pendingLanes&-62914561;0<g;){var b=31-$t(g),_=1<<b,A=f[b];A===-1?((_&s)===0||(_&c)!==0)&&(f[b]=Xi(_,i)):A<=i&&(n.expiredLanes|=_),g&=~_}if(i=Qe,s=Me,s=nt(n,n===i?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c=n.callbackNode,s===0||n===i&&(qe===2||qe===9)||n.cancelPendingCommit!==null)return c!==null&&c!==null&&I(c),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||Qt(n,s)){if(i=s&-s,i===n.callbackPriority)return i;switch(c!==null&&I(c),eu(s)){case 2:case 8:s=xt;break;case 32:s=Sn;break;case 268435456:s=Dt;break;default:s=Sn}return c=C0.bind(null,n),s=vi(s,c),n.callbackPriority=i,n.callbackNode=s,i}return c!==null&&c!==null&&I(c),n.callbackPriority=2,n.callbackNode=null,2}function C0(n,i){if(Ct!==0&&Ct!==5)return n.callbackNode=null,n.callbackPriority=0,null;var s=n.callbackNode;if(El()&&n.callbackNode!==s)return null;var c=Me;return c=nt(n,n===Qe?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c===0?null:(c0(n,c,i),T0(n,Be()),n.callbackNode!=null&&n.callbackNode===s?C0.bind(null,n):null)}function A0(n,i){if(El())return null;c0(n,i,!0)}function X2(){l5(function(){(He&6)!==0?vi(Jt,W2):E0()})}function Vd(){if(ti===0){var n=mr;n===0&&(n=Ie,Ie<<=1,(Ie&261888)===0&&(Ie=256)),ti=n}return ti}function N0(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:zo(""+n)}function R0(n,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,n.id&&s.setAttribute("form",n.id),i.parentNode.insertBefore(s,i),n=new FormData(n),s.parentNode.removeChild(s),n}function J2(n,i,s,c,f){if(i==="submit"&&s&&s.stateNode===f){var g=N0((f[Zt]||null).action),b=c.submitter;b&&(i=(i=b[Zt]||null)?N0(i.formAction):b.getAttribute("formAction"),i!==null&&(g=i,b=null));var _=new Vo("action","action",null,c,f);n.push({event:_,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(ti!==0){var A=b?R0(f,b):new FormData(f);sd(s,{pending:!0,data:A,method:f.method,action:g},null,A)}}else typeof g=="function"&&(_.preventDefault(),A=b?R0(f,b):new FormData(f),sd(s,{pending:!0,data:A,method:f.method,action:g},g,A))},currentTarget:f}]})}}for(var $d=0;$d<ju.length;$d++){var Hd=ju[$d],Q2=Hd.toLowerCase(),Z2=Hd[0].toUpperCase()+Hd.slice(1);Bn(Q2,"on"+Z2)}Bn(lm,"onAnimationEnd"),Bn(cm,"onAnimationIteration"),Bn(um,"onAnimationStart"),Bn("dblclick","onDoubleClick"),Bn("focusin","onFocus"),Bn("focusout","onBlur"),Bn(m2,"onTransitionRun"),Bn(g2,"onTransitionStart"),Bn(y2,"onTransitionCancel"),Bn(dm,"onTransitionEnd"),tr("onMouseEnter",["mouseout","mouseover"]),tr("onMouseLeave",["mouseout","mouseover"]),tr("onPointerEnter",["pointerout","pointerover"]),tr("onPointerLeave",["pointerout","pointerover"]),Si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Si("onBeforeInput",["compositionend","keypress","textInput","paste"]),Si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Us="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),e5=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Us));function O0(n,i){i=(i&4)!==0;for(var s=0;s<n.length;s++){var c=n[s],f=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var b=c.length-1;0<=b;b--){var _=c[b],A=_.instance,B=_.currentTarget;if(_=_.listener,A!==g&&f.isPropagationStopped())break e;g=_,f.currentTarget=B;try{g(f)}catch(F){Io(F)}f.currentTarget=null,g=A}else for(b=0;b<c.length;b++){if(_=c[b],A=_.instance,B=_.currentTarget,_=_.listener,A!==g&&f.isPropagationStopped())break e;g=_,f.currentTarget=B;try{g(f)}catch(F){Io(F)}f.currentTarget=null,g=A}}}}function Le(n,i){var s=i[tu];s===void 0&&(s=i[tu]=new Set);var c=n+"__bubble";s.has(c)||(D0(i,n,2,!1),s.add(c))}function Id(n,i,s){var c=0;i&&(c|=4),D0(s,n,c,i)}var Al="_reactListening"+Math.random().toString(36).slice(2);function qd(n){if(!n[Al]){n[Al]=!0,Ep.forEach(function(s){s!=="selectionchange"&&(e5.has(s)||Id(s,!1,n),Id(s,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Al]||(i[Al]=!0,Id("selectionchange",!1,i))}}function D0(n,i,s,c){switch(ly(i)){case 2:var f=C5;break;case 8:f=A5;break;default:f=rh}s=f.bind(null,i,s,n),f=void 0,!uu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,s,{capture:!0,passive:f}):n.addEventListener(i,s,!0):f!==void 0?n.addEventListener(i,s,{passive:f}):n.addEventListener(i,s,!1)}function Fd(n,i,s,c,f){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var _=c.stateNode.containerInfo;if(_===f)break;if(b===4)for(b=c.return;b!==null;){var A=b.tag;if((A===3||A===4)&&b.stateNode.containerInfo===f)return;b=b.return}for(;_!==null;){if(b=Qi(_),b===null)return;if(A=b.tag,A===5||A===6||A===26||A===27){c=g=b;continue e}_=_.parentNode}}c=c.return}Bp(function(){var B=g,F=lu(s),W=[];e:{var P=hm.get(n);if(P!==void 0){var V=Vo,le=n;switch(n){case"keypress":if(Bo(s)===0)break e;case"keydown":case"keyup":V=K1;break;case"focusin":le="focus",V=pu;break;case"focusout":le="blur",V=pu;break;case"beforeblur":case"afterblur":V=pu;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=$p;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=M1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=X1;break;case lm:case cm:case um:V=B1;break;case dm:V=Q1;break;case"scroll":case"scrollend":V=D1;break;case"wheel":V=e2;break;case"copy":case"cut":case"paste":V=V1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=Ip;break;case"toggle":case"beforetoggle":V=n2}var ve=(i&4)!==0,Xe=!ve&&(n==="scroll"||n==="scrollend"),L=ve?P!==null?P+"Capture":null:P;ve=[];for(var O=B,U;O!==null;){var K=O;if(U=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||U===null||L===null||(K=rs(O,L),K!=null&&ve.push(Bs(O,K,U))),Xe)break;O=O.return}0<ve.length&&(P=new V(P,le,null,s,F),W.push({event:P,listeners:ve}))}}if((i&7)===0){e:{if(P=n==="mouseover"||n==="pointerover",V=n==="mouseout"||n==="pointerout",P&&s!==ou&&(le=s.relatedTarget||s.fromElement)&&(Qi(le)||le[Ji]))break e;if((V||P)&&(P=F.window===F?F:(P=F.ownerDocument)?P.defaultView||P.parentWindow:window,V?(le=s.relatedTarget||s.toElement,V=B,le=le?Qi(le):null,le!==null&&(Xe=l(le),ve=le.tag,le!==Xe||ve!==5&&ve!==27&&ve!==6)&&(le=null)):(V=null,le=B),V!==le)){if(ve=$p,K="onMouseLeave",L="onMouseEnter",O="mouse",(n==="pointerout"||n==="pointerover")&&(ve=Ip,K="onPointerLeave",L="onPointerEnter",O="pointer"),Xe=V==null?P:is(V),U=le==null?P:is(le),P=new ve(K,O+"leave",V,s,F),P.target=Xe,P.relatedTarget=U,K=null,Qi(F)===B&&(ve=new ve(L,O+"enter",le,s,F),ve.target=U,ve.relatedTarget=Xe,K=ve),Xe=K,V&&le)t:{for(ve=t5,L=V,O=le,U=0,K=L;K;K=ve(K))U++;K=0;for(var me=O;me;me=ve(me))K++;for(;0<U-K;)L=ve(L),U--;for(;0<K-U;)O=ve(O),K--;for(;U--;){if(L===O||O!==null&&L===O.alternate){ve=L;break t}L=ve(L),O=ve(O)}ve=null}else ve=null;V!==null&&L0(W,P,V,ve,!1),le!==null&&Xe!==null&&L0(W,Xe,le,ve,!0)}}e:{if(P=B?is(B):window,V=P.nodeName&&P.nodeName.toLowerCase(),V==="select"||V==="input"&&P.type==="file")var Pe=Jp;else if(Wp(P))if(Qp)Pe=h2;else{Pe=u2;var he=c2}else V=P.nodeName,!V||V.toLowerCase()!=="input"||P.type!=="checkbox"&&P.type!=="radio"?B&&su(B.elementType)&&(Pe=Jp):Pe=d2;if(Pe&&(Pe=Pe(n,B))){Xp(W,Pe,s,F);break e}he&&he(n,P,B),n==="focusout"&&B&&P.type==="number"&&B.memoizedProps.value!=null&&ru(P,"number",P.value)}switch(he=B?is(B):window,n){case"focusin":(Wp(he)||he.contentEditable==="true")&&(or=he,xu=B,fs=null);break;case"focusout":fs=xu=or=null;break;case"mousedown":wu=!0;break;case"contextmenu":case"mouseup":case"dragend":wu=!1,sm(W,s,F);break;case"selectionchange":if(p2)break;case"keydown":case"keyup":sm(W,s,F)}var Ce;if(gu)e:{switch(n){case"compositionstart":var ze="onCompositionStart";break e;case"compositionend":ze="onCompositionEnd";break e;case"compositionupdate":ze="onCompositionUpdate";break e}ze=void 0}else sr?Kp(n,s)&&(ze="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(ze="onCompositionStart");ze&&(qp&&s.locale!=="ko"&&(sr||ze!=="onCompositionStart"?ze==="onCompositionEnd"&&sr&&(Ce=Pp()):(Pa=F,du="value"in Pa?Pa.value:Pa.textContent,sr=!0)),he=Nl(B,ze),0<he.length&&(ze=new Hp(ze,n,null,s,F),W.push({event:ze,listeners:he}),Ce?ze.data=Ce:(Ce=Yp(s),Ce!==null&&(ze.data=Ce)))),(Ce=i2?r2(n,s):s2(n,s))&&(ze=Nl(B,"onBeforeInput"),0<ze.length&&(he=new Hp("onBeforeInput","beforeinput",null,s,F),W.push({event:he,listeners:ze}),he.data=Ce)),J2(W,n,B,s,F)}O0(W,i)})}function Bs(n,i,s){return{instance:n,listener:i,currentTarget:s}}function Nl(n,i){for(var s=i+"Capture",c=[];n!==null;){var f=n,g=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||g===null||(f=rs(n,s),f!=null&&c.unshift(Bs(n,f,g)),f=rs(n,i),f!=null&&c.push(Bs(n,f,g))),n.tag===3)return c;n=n.return}return[]}function t5(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function L0(n,i,s,c,f){for(var g=i._reactName,b=[];s!==null&&s!==c;){var _=s,A=_.alternate,B=_.stateNode;if(_=_.tag,A!==null&&A===c)break;_!==5&&_!==26&&_!==27||B===null||(A=B,f?(B=rs(s,g),B!=null&&b.unshift(Bs(s,B,A))):f||(B=rs(s,g),B!=null&&b.push(Bs(s,B,A)))),s=s.return}b.length!==0&&n.push({event:i,listeners:b})}var n5=/\r\n?/g,a5=/\u0000|\uFFFD/g;function M0(n){return(typeof n=="string"?n:""+n).replace(n5,`
`).replace(a5,"")}function z0(n,i){return i=M0(i),M0(n)===i}function We(n,i,s,c,f,g){switch(s){case"children":typeof c=="string"?i==="body"||i==="textarea"&&c===""||ar(n,c):(typeof c=="number"||typeof c=="bigint")&&i!=="body"&&ar(n,""+c);break;case"className":Lo(n,"class",c);break;case"tabIndex":Lo(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Lo(n,s,c);break;case"style":zp(n,c,g);break;case"data":if(i!=="object"){Lo(n,"data",c);break}case"src":case"href":if(c===""&&(i!=="a"||s!=="href")){n.removeAttribute(s);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=zo(""+c),n.setAttribute(s,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(s==="formAction"?(i!=="input"&&We(n,i,"name",f.name,f,null),We(n,i,"formEncType",f.formEncType,f,null),We(n,i,"formMethod",f.formMethod,f,null),We(n,i,"formTarget",f.formTarget,f,null)):(We(n,i,"encType",f.encType,f,null),We(n,i,"method",f.method,f,null),We(n,i,"target",f.target,f,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(s);break}c=zo(""+c),n.setAttribute(s,c);break;case"onClick":c!=null&&(n.onclick=da);break;case"onScroll":c!=null&&Le("scroll",n);break;case"onScrollEnd":c!=null&&Le("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(s=c.__html,s!=null){if(f.children!=null)throw Error(r(60));n.innerHTML=s}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}s=zo(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""+c):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":c===!0?n.setAttribute(s,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(s,c):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(s,c):n.removeAttribute(s);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(s):n.setAttribute(s,c);break;case"popover":Le("beforetoggle",n),Le("toggle",n),Do(n,"popover",c);break;case"xlinkActuate":ua(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":ua(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":ua(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":ua(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":ua(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":ua(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":ua(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":ua(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":ua(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Do(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=R1.get(s)||s,Do(n,s,c))}}function Gd(n,i,s,c,f,g){switch(s){case"style":zp(n,c,g);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(r(61));if(s=c.__html,s!=null){if(f.children!=null)throw Error(r(60));n.innerHTML=s}}break;case"children":typeof c=="string"?ar(n,c):(typeof c=="number"||typeof c=="bigint")&&ar(n,""+c);break;case"onScroll":c!=null&&Le("scroll",n);break;case"onScrollEnd":c!=null&&Le("scrollend",n);break;case"onClick":c!=null&&(n.onclick=da);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Tp.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),g=n[Zt]||null,g=g!=null?g[s]:null,typeof g=="function"&&n.removeEventListener(i,g,f),typeof c=="function")){typeof g!="function"&&g!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(i,c,f);break e}s in n?n[s]=c:c===!0?n.setAttribute(s,""):Do(n,s,c)}}}function Bt(n,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Le("error",n),Le("load",n);var c=!1,f=!1,g;for(g in s)if(s.hasOwnProperty(g)){var b=s[g];if(b!=null)switch(g){case"src":c=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:We(n,i,g,b,s,null)}}f&&We(n,i,"srcSet",s.srcSet,s,null),c&&We(n,i,"src",s.src,s,null);return;case"input":Le("invalid",n);var _=g=b=f=null,A=null,B=null;for(c in s)if(s.hasOwnProperty(c)){var F=s[c];if(F!=null)switch(c){case"name":f=F;break;case"type":b=F;break;case"checked":A=F;break;case"defaultChecked":B=F;break;case"value":g=F;break;case"defaultValue":_=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(r(137,i));break;default:We(n,i,c,F,s,null)}}Op(n,g,_,A,B,b,f,!1);return;case"select":Le("invalid",n),c=b=g=null;for(f in s)if(s.hasOwnProperty(f)&&(_=s[f],_!=null))switch(f){case"value":g=_;break;case"defaultValue":b=_;break;case"multiple":c=_;default:We(n,i,f,_,s,null)}i=g,s=b,n.multiple=!!c,i!=null?nr(n,!!c,i,!1):s!=null&&nr(n,!!c,s,!0);return;case"textarea":Le("invalid",n),g=f=c=null;for(b in s)if(s.hasOwnProperty(b)&&(_=s[b],_!=null))switch(b){case"value":c=_;break;case"defaultValue":f=_;break;case"children":g=_;break;case"dangerouslySetInnerHTML":if(_!=null)throw Error(r(91));break;default:We(n,i,b,_,s,null)}Lp(n,c,f,g);return;case"option":for(A in s)if(s.hasOwnProperty(A)&&(c=s[A],c!=null))switch(A){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:We(n,i,A,c,s,null)}return;case"dialog":Le("beforetoggle",n),Le("toggle",n),Le("cancel",n),Le("close",n);break;case"iframe":case"object":Le("load",n);break;case"video":case"audio":for(c=0;c<Us.length;c++)Le(Us[c],n);break;case"image":Le("error",n),Le("load",n);break;case"details":Le("toggle",n);break;case"embed":case"source":case"link":Le("error",n),Le("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in s)if(s.hasOwnProperty(B)&&(c=s[B],c!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:We(n,i,B,c,s,null)}return;default:if(su(i)){for(F in s)s.hasOwnProperty(F)&&(c=s[F],c!==void 0&&Gd(n,i,F,c,s,void 0));return}}for(_ in s)s.hasOwnProperty(_)&&(c=s[_],c!=null&&We(n,i,_,c,s,null))}function i5(n,i,s,c){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,g=null,b=null,_=null,A=null,B=null,F=null;for(V in s){var W=s[V];if(s.hasOwnProperty(V)&&W!=null)switch(V){case"checked":break;case"value":break;case"defaultValue":A=W;default:c.hasOwnProperty(V)||We(n,i,V,null,c,W)}}for(var P in c){var V=c[P];if(W=s[P],c.hasOwnProperty(P)&&(V!=null||W!=null))switch(P){case"type":g=V;break;case"name":f=V;break;case"checked":B=V;break;case"defaultChecked":F=V;break;case"value":b=V;break;case"defaultValue":_=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(r(137,i));break;default:V!==W&&We(n,i,P,V,c,W)}}iu(n,b,_,A,B,F,g,f);return;case"select":V=b=_=P=null;for(g in s)if(A=s[g],s.hasOwnProperty(g)&&A!=null)switch(g){case"value":break;case"multiple":V=A;default:c.hasOwnProperty(g)||We(n,i,g,null,c,A)}for(f in c)if(g=c[f],A=s[f],c.hasOwnProperty(f)&&(g!=null||A!=null))switch(f){case"value":P=g;break;case"defaultValue":_=g;break;case"multiple":b=g;default:g!==A&&We(n,i,f,g,c,A)}i=_,s=b,c=V,P!=null?nr(n,!!s,P,!1):!!c!=!!s&&(i!=null?nr(n,!!s,i,!0):nr(n,!!s,s?[]:"",!1));return;case"textarea":V=P=null;for(_ in s)if(f=s[_],s.hasOwnProperty(_)&&f!=null&&!c.hasOwnProperty(_))switch(_){case"value":break;case"children":break;default:We(n,i,_,null,c,f)}for(b in c)if(f=c[b],g=s[b],c.hasOwnProperty(b)&&(f!=null||g!=null))switch(b){case"value":P=f;break;case"defaultValue":V=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==g&&We(n,i,b,f,c,g)}Dp(n,P,V);return;case"option":for(var le in s)if(P=s[le],s.hasOwnProperty(le)&&P!=null&&!c.hasOwnProperty(le))switch(le){case"selected":n.selected=!1;break;default:We(n,i,le,null,c,P)}for(A in c)if(P=c[A],V=s[A],c.hasOwnProperty(A)&&P!==V&&(P!=null||V!=null))switch(A){case"selected":n.selected=P&&typeof P!="function"&&typeof P!="symbol";break;default:We(n,i,A,P,c,V)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ve in s)P=s[ve],s.hasOwnProperty(ve)&&P!=null&&!c.hasOwnProperty(ve)&&We(n,i,ve,null,c,P);for(B in c)if(P=c[B],V=s[B],c.hasOwnProperty(B)&&P!==V&&(P!=null||V!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(r(137,i));break;default:We(n,i,B,P,c,V)}return;default:if(su(i)){for(var Xe in s)P=s[Xe],s.hasOwnProperty(Xe)&&P!==void 0&&!c.hasOwnProperty(Xe)&&Gd(n,i,Xe,void 0,c,P);for(F in c)P=c[F],V=s[F],!c.hasOwnProperty(F)||P===V||P===void 0&&V===void 0||Gd(n,i,F,P,c,V);return}}for(var L in s)P=s[L],s.hasOwnProperty(L)&&P!=null&&!c.hasOwnProperty(L)&&We(n,i,L,null,c,P);for(W in c)P=c[W],V=s[W],!c.hasOwnProperty(W)||P===V||P==null&&V==null||We(n,i,W,P,c,V)}function U0(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function r5(){if(typeof performance.getEntriesByType=="function"){for(var n=0,i=0,s=performance.getEntriesByType("resource"),c=0;c<s.length;c++){var f=s[c],g=f.transferSize,b=f.initiatorType,_=f.duration;if(g&&_&&U0(b)){for(b=0,_=f.responseEnd,c+=1;c<s.length;c++){var A=s[c],B=A.startTime;if(B>_)break;var F=A.transferSize,W=A.initiatorType;F&&U0(W)&&(A=A.responseEnd,b+=F*(A<_?1:(_-B)/(A-B)))}if(--c,i+=8*(g+b)/(f.duration/1e3),n++,10<n)break}}if(0<n)return i/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var Kd=null,Yd=null;function Rl(n){return n.nodeType===9?n:n.ownerDocument}function B0(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function P0(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function Wd(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Xd=null;function s5(){var n=window.event;return n&&n.type==="popstate"?n===Xd?!1:(Xd=n,!0):(Xd=null,!1)}var V0=typeof setTimeout=="function"?setTimeout:void 0,o5=typeof clearTimeout=="function"?clearTimeout:void 0,$0=typeof Promise=="function"?Promise:void 0,l5=typeof queueMicrotask=="function"?queueMicrotask:typeof $0<"u"?function(n){return $0.resolve(null).then(n).catch(c5)}:V0;function c5(n){setTimeout(function(){throw n})}function ni(n){return n==="head"}function H0(n,i){var s=i,c=0;do{var f=s.nextSibling;if(n.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(c===0){n.removeChild(f),Lr(i);return}c--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")c++;else if(s==="html")Ps(n.ownerDocument.documentElement);else if(s==="head"){s=n.ownerDocument.head,Ps(s);for(var g=s.firstChild;g;){var b=g.nextSibling,_=g.nodeName;g[as]||_==="SCRIPT"||_==="STYLE"||_==="LINK"&&g.rel.toLowerCase()==="stylesheet"||s.removeChild(g),g=b}}else s==="body"&&Ps(n.ownerDocument.body);s=f}while(s);Lr(i)}function I0(n,i){var s=n;n=0;do{var c=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(n===0)break;n--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||n++;s=c}while(s)}function Jd(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Jd(s),nu(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function u5(n,i,s,c){for(;n.nodeType===1;){var f=s;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[as])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(g=n.getAttribute("rel"),g==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(g!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(g=n.getAttribute("src"),(g!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&g&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var g=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===g)return n}else return n;if(n=On(n.nextSibling),n===null)break}return null}function d5(n,i,s){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=On(n.nextSibling),n===null))return null;return n}function q0(n,i){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!i||(n=On(n.nextSibling),n===null))return null;return n}function Qd(n){return n.data==="$?"||n.data==="$~"}function Zd(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function h5(n,i){var s=n.ownerDocument;if(n.data==="$~")n._reactRetry=i;else if(n.data!=="$?"||s.readyState!=="loading")i();else{var c=function(){i(),s.removeEventListener("DOMContentLoaded",c)};s.addEventListener("DOMContentLoaded",c),n._reactRetry=c}}function On(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return n}var eh=null;function F0(n){n=n.nextSibling;for(var i=0;n;){if(n.nodeType===8){var s=n.data;if(s==="/$"||s==="/&"){if(i===0)return On(n.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}n=n.nextSibling}return null}function G0(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return n;i--}else s!=="/$"&&s!=="/&"||i++}n=n.previousSibling}return null}function K0(n,i,s){switch(i=Rl(s),n){case"html":if(n=i.documentElement,!n)throw Error(r(452));return n;case"head":if(n=i.head,!n)throw Error(r(453));return n;case"body":if(n=i.body,!n)throw Error(r(454));return n;default:throw Error(r(451))}}function Ps(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);nu(n)}var Dn=new Map,Y0=new Set;function Ol(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Ta=ne.d;ne.d={f:f5,r:p5,D:m5,C:g5,L:y5,m:v5,X:x5,S:b5,M:w5};function f5(){var n=Ta.f(),i=jl();return n||i}function p5(n){var i=Zi(n);i!==null&&i.tag===5&&i.type==="form"?dg(i):Ta.r(n)}var Rr=typeof document>"u"?null:document;function W0(n,i,s){var c=Rr;if(c&&typeof i=="string"&&i){var f=kn(i);f='link[rel="'+n+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),Y0.has(f)||(Y0.add(f),n={rel:n,crossOrigin:s,href:i},c.querySelector(f)===null&&(i=c.createElement("link"),Bt(i,"link",n),Nt(i),c.head.appendChild(i)))}}function m5(n){Ta.D(n),W0("dns-prefetch",n,null)}function g5(n,i){Ta.C(n,i),W0("preconnect",n,i)}function y5(n,i,s){Ta.L(n,i,s);var c=Rr;if(c&&n&&i){var f='link[rel="preload"][as="'+kn(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+kn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+kn(s.imageSizes)+'"]')):f+='[href="'+kn(n)+'"]';var g=f;switch(i){case"style":g=Or(n);break;case"script":g=Dr(n)}Dn.has(g)||(n=v({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:n,as:i},s),Dn.set(g,n),c.querySelector(f)!==null||i==="style"&&c.querySelector(Vs(g))||i==="script"&&c.querySelector($s(g))||(i=c.createElement("link"),Bt(i,"link",n),Nt(i),c.head.appendChild(i)))}}function v5(n,i){Ta.m(n,i);var s=Rr;if(s&&n){var c=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+kn(c)+'"][href="'+kn(n)+'"]',g=f;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=Dr(n)}if(!Dn.has(g)&&(n=v({rel:"modulepreload",href:n},i),Dn.set(g,n),s.querySelector(f)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector($s(g)))return}c=s.createElement("link"),Bt(c,"link",n),Nt(c),s.head.appendChild(c)}}}function b5(n,i,s){Ta.S(n,i,s);var c=Rr;if(c&&n){var f=er(c).hoistableStyles,g=Or(n);i=i||"default";var b=f.get(g);if(!b){var _={loading:0,preload:null};if(b=c.querySelector(Vs(g)))_.loading=5;else{n=v({rel:"stylesheet",href:n,"data-precedence":i},s),(s=Dn.get(g))&&th(n,s);var A=b=c.createElement("link");Nt(A),Bt(A,"link",n),A._p=new Promise(function(B,F){A.onload=B,A.onerror=F}),A.addEventListener("load",function(){_.loading|=1}),A.addEventListener("error",function(){_.loading|=2}),_.loading|=4,Dl(b,i,c)}b={type:"stylesheet",instance:b,count:1,state:_},f.set(g,b)}}}function x5(n,i){Ta.X(n,i);var s=Rr;if(s&&n){var c=er(s).hoistableScripts,f=Dr(n),g=c.get(f);g||(g=s.querySelector($s(f)),g||(n=v({src:n,async:!0},i),(i=Dn.get(f))&&nh(n,i),g=s.createElement("script"),Nt(g),Bt(g,"link",n),s.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(f,g))}}function w5(n,i){Ta.M(n,i);var s=Rr;if(s&&n){var c=er(s).hoistableScripts,f=Dr(n),g=c.get(f);g||(g=s.querySelector($s(f)),g||(n=v({src:n,async:!0,type:"module"},i),(i=Dn.get(f))&&nh(n,i),g=s.createElement("script"),Nt(g),Bt(g,"link",n),s.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(f,g))}}function X0(n,i,s,c){var f=(f=_e.current)?Ol(f):null;if(!f)throw Error(r(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Or(s.href),s=er(f).hoistableStyles,c=s.get(i),c||(c={type:"style",instance:null,count:0,state:null},s.set(i,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=Or(s.href);var g=er(f).hoistableStyles,b=g.get(n);if(b||(f=f.ownerDocument||f,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(n,b),(g=f.querySelector(Vs(n)))&&!g._p&&(b.instance=g,b.state.loading=5),Dn.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Dn.set(n,s),g||S5(f,n,s,b.state))),i&&c===null)throw Error(r(528,""));return b}if(i&&c!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Dr(s),s=er(f).hoistableScripts,c=s.get(i),c||(c={type:"script",instance:null,count:0,state:null},s.set(i,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,n))}}function Or(n){return'href="'+kn(n)+'"'}function Vs(n){return'link[rel="stylesheet"]['+n+"]"}function J0(n){return v({},n,{"data-precedence":n.precedence,precedence:null})}function S5(n,i,s,c){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?c.loading=1:(i=n.createElement("link"),c.preload=i,i.addEventListener("load",function(){return c.loading|=1}),i.addEventListener("error",function(){return c.loading|=2}),Bt(i,"link",s),Nt(i),n.head.appendChild(i))}function Dr(n){return'[src="'+kn(n)+'"]'}function $s(n){return"script[async]"+n}function Q0(n,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var c=n.querySelector('style[data-href~="'+kn(s.href)+'"]');if(c)return i.instance=c,Nt(c),c;var f=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),Nt(c),Bt(c,"style",f),Dl(c,s.precedence,n),i.instance=c;case"stylesheet":f=Or(s.href);var g=n.querySelector(Vs(f));if(g)return i.state.loading|=4,i.instance=g,Nt(g),g;c=J0(s),(f=Dn.get(f))&&th(c,f),g=(n.ownerDocument||n).createElement("link"),Nt(g);var b=g;return b._p=new Promise(function(_,A){b.onload=_,b.onerror=A}),Bt(g,"link",c),i.state.loading|=4,Dl(g,s.precedence,n),i.instance=g;case"script":return g=Dr(s.src),(f=n.querySelector($s(g)))?(i.instance=f,Nt(f),f):(c=s,(f=Dn.get(g))&&(c=v({},s),nh(c,f)),n=n.ownerDocument||n,f=n.createElement("script"),Nt(f),Bt(f,"link",c),n.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(c=i.instance,i.state.loading|=4,Dl(c,s.precedence,n));return i.instance}function Dl(n,i,s){for(var c=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=c.length?c[c.length-1]:null,g=f,b=0;b<c.length;b++){var _=c[b];if(_.dataset.precedence===i)g=_;else if(g!==f)break}g?g.parentNode.insertBefore(n,g.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(n,i.firstChild))}function th(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function nh(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var Ll=null;function Z0(n,i,s){if(Ll===null){var c=new Map,f=Ll=new Map;f.set(s,c)}else f=Ll,c=f.get(s),c||(c=new Map,f.set(s,c));if(c.has(n))return c;for(c.set(n,null),s=s.getElementsByTagName(n),f=0;f<s.length;f++){var g=s[f];if(!(g[as]||g[Lt]||n==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var b=g.getAttribute(i)||"";b=n+b;var _=c.get(b);_?_.push(g):c.set(b,[g])}}return c}function ey(n,i,s){n=n.ownerDocument||n,n.head.insertBefore(s,i==="title"?n.querySelector("head > title"):null)}function j5(n,i,s){if(s===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return n=i.disabled,typeof i.precedence=="string"&&n==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function ty(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function _5(n,i,s,c){if(s.type==="stylesheet"&&(typeof c.media!="string"||matchMedia(c.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Or(c.href),g=i.querySelector(Vs(f));if(g){i=g._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(n.count++,n=Ml.bind(n),i.then(n,n)),s.state.loading|=4,s.instance=g,Nt(g);return}g=i.ownerDocument||i,c=J0(c),(f=Dn.get(f))&&th(c,f),g=g.createElement("link"),Nt(g);var b=g;b._p=new Promise(function(_,A){b.onload=_,b.onerror=A}),Bt(g,"link",c),s.instance=g}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(n.count++,s=Ml.bind(n),i.addEventListener("load",s),i.addEventListener("error",s))}}var ah=0;function k5(n,i){return n.stylesheets&&n.count===0&&Ul(n,n.stylesheets),0<n.count||0<n.imgCount?function(s){var c=setTimeout(function(){if(n.stylesheets&&Ul(n,n.stylesheets),n.unsuspend){var g=n.unsuspend;n.unsuspend=null,g()}},6e4+i);0<n.imgBytes&&ah===0&&(ah=62500*r5());var f=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&Ul(n,n.stylesheets),n.unsuspend)){var g=n.unsuspend;n.unsuspend=null,g()}},(n.imgBytes>ah?50:800)+i);return n.unsuspend=s,function(){n.unsuspend=null,clearTimeout(c),clearTimeout(f)}}:null}function Ml(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ul(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var zl=null;function Ul(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,zl=new Map,i.forEach(E5,n),zl=null,Ml.call(n))}function E5(n,i){if(!(i.state.loading&4)){var s=zl.get(n);if(s)var c=s.get(null);else{s=new Map,zl.set(n,s);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<f.length;g++){var b=f[g];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(s.set(b.dataset.precedence,b),c=b)}c&&s.set(null,c)}f=i.instance,b=f.getAttribute("data-precedence"),g=s.get(b)||c,g===c&&s.set(null,f),s.set(b,f),this.count++,c=Ml.bind(this),f.addEventListener("load",c),f.addEventListener("error",c),g?g.parentNode.insertBefore(f,g.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),i.state.loading|=4}}var Hs={$$typeof:N,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function T5(n,i,s,c,f,g,b,_,A){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xi(0),this.hiddenUpdates=xi(null),this.identifierPrefix=c,this.onUncaughtError=f,this.onCaughtError=g,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function ny(n,i,s,c,f,g,b,_,A,B,F,W){return n=new T5(n,i,s,b,A,B,F,W,_),i=1,g===!0&&(i|=24),g=dn(3,null,null,i),n.current=g,g.stateNode=n,i=zu(),i.refCount++,n.pooledCache=i,i.refCount++,g.memoizedState={element:c,isDehydrated:s,cache:i},Vu(g),n}function ay(n){return n?(n=ur,n):ur}function iy(n,i,s,c,f,g){f=ay(f),c.context===null?c.context=f:c.pendingContext=f,c=Fa(i),c.payload={element:s},g=g===void 0?null:g,g!==null&&(c.callback=g),s=Ga(n,c,i),s!==null&&(sn(s,n,i),xs(s,n,i))}function ry(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<i?s:i}}function ih(n,i){ry(n,i),(n=n.alternate)&&ry(n,i)}function sy(n){if(n.tag===13||n.tag===31){var i=Ei(n,67108864);i!==null&&sn(i,n,67108864),ih(n,67108864)}}function oy(n){if(n.tag===13||n.tag===31){var i=gn();i=Zc(i);var s=Ei(n,i);s!==null&&sn(s,n,i),ih(n,i)}}var Bl=!0;function C5(n,i,s,c){var f=M.T;M.T=null;var g=ne.p;try{ne.p=2,rh(n,i,s,c)}finally{ne.p=g,M.T=f}}function A5(n,i,s,c){var f=M.T;M.T=null;var g=ne.p;try{ne.p=8,rh(n,i,s,c)}finally{ne.p=g,M.T=f}}function rh(n,i,s,c){if(Bl){var f=sh(c);if(f===null)Fd(n,i,c,Pl,s),cy(n,c);else if(R5(f,n,i,s,c))c.stopPropagation();else if(cy(n,c),i&4&&-1<N5.indexOf(n)){for(;f!==null;){var g=Zi(f);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var b=mt(g.pendingLanes);if(b!==0){var _=g;for(_.pendingLanes|=2,_.entangledLanes|=2;b;){var A=1<<31-$t(b);_.entanglements[1]|=A,b&=~A}ea(g),(He&6)===0&&(wl=Be()+500,zs(0))}}break;case 31:case 13:_=Ei(g,2),_!==null&&sn(_,g,2),jl(),ih(g,2)}if(g=sh(c),g===null&&Fd(n,i,c,Pl,s),g===f)break;f=g}f!==null&&c.stopPropagation()}else Fd(n,i,c,null,s)}}function sh(n){return n=lu(n),oh(n)}var Pl=null;function oh(n){if(Pl=null,n=Qi(n),n!==null){var i=l(n);if(i===null)n=null;else{var s=i.tag;if(s===13){if(n=d(i),n!==null)return n;n=null}else if(s===31){if(n=h(i),n!==null)return n;n=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return Pl=n,null}function ly(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qt()){case Jt:return 2;case xt:return 8;case Sn:case Re:return 32;case Dt:return 268435456;default:return 32}default:return 32}}var lh=!1,ai=null,ii=null,ri=null,Is=new Map,qs=new Map,si=[],N5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cy(n,i){switch(n){case"focusin":case"focusout":ai=null;break;case"dragenter":case"dragleave":ii=null;break;case"mouseover":case"mouseout":ri=null;break;case"pointerover":case"pointerout":Is.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":qs.delete(i.pointerId)}}function Fs(n,i,s,c,f,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:s,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},i!==null&&(i=Zi(i),i!==null&&sy(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function R5(n,i,s,c,f){switch(i){case"focusin":return ai=Fs(ai,n,i,s,c,f),!0;case"dragenter":return ii=Fs(ii,n,i,s,c,f),!0;case"mouseover":return ri=Fs(ri,n,i,s,c,f),!0;case"pointerover":var g=f.pointerId;return Is.set(g,Fs(Is.get(g)||null,n,i,s,c,f)),!0;case"gotpointercapture":return g=f.pointerId,qs.set(g,Fs(qs.get(g)||null,n,i,s,c,f)),!0}return!1}function uy(n){var i=Qi(n.target);if(i!==null){var s=l(i);if(s!==null){if(i=s.tag,i===13){if(i=d(s),i!==null){n.blockedOn=i,_p(n.priority,function(){oy(s)});return}}else if(i===31){if(i=h(s),i!==null){n.blockedOn=i,_p(n.priority,function(){oy(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Vl(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var s=sh(n.nativeEvent);if(s===null){s=n.nativeEvent;var c=new s.constructor(s.type,s);ou=c,s.target.dispatchEvent(c),ou=null}else return i=Zi(s),i!==null&&sy(i),n.blockedOn=s,!1;i.shift()}return!0}function dy(n,i,s){Vl(n)&&s.delete(i)}function O5(){lh=!1,ai!==null&&Vl(ai)&&(ai=null),ii!==null&&Vl(ii)&&(ii=null),ri!==null&&Vl(ri)&&(ri=null),Is.forEach(dy),qs.forEach(dy)}function $l(n,i){n.blockedOn===i&&(n.blockedOn=null,lh||(lh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,O5)))}var Hl=null;function hy(n){Hl!==n&&(Hl=n,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Hl===n&&(Hl=null);for(var i=0;i<n.length;i+=3){var s=n[i],c=n[i+1],f=n[i+2];if(typeof c!="function"){if(oh(c||s)===null)continue;break}var g=Zi(s);g!==null&&(n.splice(i,3),i-=3,sd(g,{pending:!0,data:f,method:s.method,action:c},c,f))}}))}function Lr(n){function i(A){return $l(A,n)}ai!==null&&$l(ai,n),ii!==null&&$l(ii,n),ri!==null&&$l(ri,n),Is.forEach(i),qs.forEach(i);for(var s=0;s<si.length;s++){var c=si[s];c.blockedOn===n&&(c.blockedOn=null)}for(;0<si.length&&(s=si[0],s.blockedOn===null);)uy(s),s.blockedOn===null&&si.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(c=0;c<s.length;c+=3){var f=s[c],g=s[c+1],b=f[Zt]||null;if(typeof g=="function")b||hy(s);else if(b){var _=null;if(g&&g.hasAttribute("formAction")){if(f=g,b=g[Zt]||null)_=b.formAction;else if(oh(f)!==null)continue}else _=b.action;typeof _=="function"?s[c+1]=_:(s.splice(c,3),c-=3),hy(s)}}}function fy(){function n(g){g.canIntercept&&g.info==="react-transition"&&g.intercept({handler:function(){return new Promise(function(b){return f=b})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),c||setTimeout(s,20)}function s(){if(!c&&!navigation.transition){var g=navigation.currentEntry;g&&g.url!=null&&navigation.navigate(g.url,{state:g.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var c=!1,f=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){c=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function ch(n){this._internalRoot=n}Il.prototype.render=ch.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,c=gn();iy(s,c,n,i,null,null)},Il.prototype.unmount=ch.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;iy(n.current,2,null,n,null,null),jl(),i[Ji]=null}};function Il(n){this._internalRoot=n}Il.prototype.unstable_scheduleHydration=function(n){if(n){var i=jp();n={blockedOn:null,target:n,priority:i};for(var s=0;s<si.length&&i!==0&&i<si[s].priority;s++);si.splice(s,0,n),s===0&&uy(n)}};var py=e.version;if(py!=="19.2.7")throw Error(r(527,py,"19.2.7"));ne.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(r(188)):(n=Object.keys(n).join(","),Error(r(268,n)));return n=m(i),n=n!==null?y(n):null,n=n===null?null:n.stateNode,n};var D5={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ql.isDisabled&&ql.supportsFiber)try{Ua=ql.inject(D5),Ft=ql}catch{}}return Ks.createRoot=function(n,i){if(!o(n))throw Error(r(299));var s=!1,c="",f=wg,g=Sg,b=jg;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(g=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError)),i=ny(n,1,!1,null,null,s,c,null,f,g,b,fy),n[Ji]=i.current,qd(n),new ch(i)},Ks.hydrateRoot=function(n,i,s){if(!o(n))throw Error(r(299));var c=!1,f="",g=wg,b=Sg,_=jg,A=null;return s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(g=s.onUncaughtError),s.onCaughtError!==void 0&&(b=s.onCaughtError),s.onRecoverableError!==void 0&&(_=s.onRecoverableError),s.formState!==void 0&&(A=s.formState)),i=ny(n,1,!0,i,s??null,c,f,A,g,b,_,fy),i.context=ay(null),s=i.current,c=gn(),c=Zc(c),f=Fa(c),f.callback=null,Ga(s,f,c),s=c,i.current.lanes=s,jn(i,s),ea(i),n[Ji]=i.current,qd(n),new Il(i)},Ks.version="19.2.7",Ks}var _y;function I5(){if(_y)return hh.exports;_y=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),hh.exports=H5(),hh.exports}var q5=I5();const F5=Yb(q5);/**
 * react-router v7.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Lf=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Wb=/^[\\/]{2}/;function G5(t,e){return e+t.replace(/\\/g,"/")}var ky="popstate";function Ey(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function K5(t={}){function e(r,o){var m;let l=(m=o.state)==null?void 0:m.masked,{pathname:d,search:h,hash:p}=l||r.location;return Yh("",{pathname:d,search:h,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default",l?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function a(r,o){return typeof o=="string"?o:fo(o)}return W5(e,a,null,t)}function lt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Wn(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Y5(){return Math.random().toString(36).substring(2,10)}function Ty(t,e){return{usr:t.state,key:t.key,idx:e,masked:t.mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function Yh(t,e,a=null,r,o){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Xr(e):e,state:a,key:e&&e.key||r||Y5(),mask:o}}function fo({pathname:t="/",search:e="",hash:a=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function Xr(t){let e={};if(t){let a=t.indexOf("#");a>=0&&(e.hash=t.substring(a),t=t.substring(0,a));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function W5(t,e,a,r={}){let{window:o=document.defaultView,v5Compat:l=!1}=r,d=o.history,h="POP",p=null,m=y();m==null&&(m=0,d.replaceState({...d.state,idx:m},""));function y(){return(d.state||{idx:null}).idx}function v(){h="POP";let T=y(),k=T==null?null:T-m;m=T,p&&p({action:h,location:E.location,delta:k})}function x(T,k){h="PUSH";let C=Ey(T)?T:Yh(E.location,T,k);m=y()+1;let N=Ty(C,m),z=E.createHref(C.mask||C);try{d.pushState(N,"",z)}catch(J){if(J instanceof DOMException&&J.name==="DataCloneError")throw J;o.location.assign(z)}l&&p&&p({action:h,location:E.location,delta:1})}function w(T,k){h="REPLACE";let C=Ey(T)?T:Yh(E.location,T,k);m=y();let N=Ty(C,m),z=E.createHref(C.mask||C);d.replaceState(N,"",z),l&&p&&p({action:h,location:E.location,delta:0})}function j(T){return X5(o,T)}let E={get action(){return h},get location(){return t(o,d)},listen(T){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(ky,v),p=T,()=>{o.removeEventListener(ky,v),p=null}},createHref(T){return e(o,T)},createURL:j,encodeLocation(T){let k=j(T);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:x,replace:w,go(T){return d.go(T)}};return E}function X5(t,e,a=!1){let r="http://localhost";t&&(r=t.location.origin!=="null"?t.location.origin:t.location.href),lt(r,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:fo(e);return o=o.replace(/ $/,"%20"),!a&&Wb.test(o)&&(o=r+o),new URL(o,r)}function Xb(t,e,a="/"){return J5(t,e,a,!1)}function J5(t,e,a,r,o){let l=typeof e=="string"?Xr(e):e,d=Ma(l.pathname||"/",a);if(d==null)return null;let h=Q5(t),p=null,m=cS(d);for(let y=0;p==null&&y<h.length;++y)p=lS(h[y],m,r);return p}function Q5(t){let e=Jb(t);return Z5(e),e}function Jb(t,e=[],a=[],r="",o=!1){let l=(d,h,p=o,m)=>{let y={relativePath:m===void 0?d.path||"":m,caseSensitive:d.caseSensitive===!0,childrenIndex:h,route:d};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(r)&&p)return;lt(y.relativePath.startsWith(r),`Absolute route path "${y.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(r.length)}let v=Kn([r,y.relativePath]),x=a.concat(y);d.children&&d.children.length>0&&(lt(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Jb(d.children,e,x,v,p)),!(d.path==null&&!d.index)&&e.push({path:v,score:sS(v,d.index),routesMeta:x.map((w,j)=>{let[E,T]=ex(w.relativePath,w.caseSensitive,j===x.length-1);return{...w,matcher:E,compiledParams:T}})})};return t.forEach((d,h)=>{var p;if(d.path===""||!((p=d.path)!=null&&p.includes("?")))l(d,h);else for(let m of Qb(d.path))l(d,h,!0,m)}),e}function Qb(t){let e=t.split("/");if(e.length===0)return[];let[a,...r]=e,o=a.endsWith("?"),l=a.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let d=Qb(r.join("/")),h=[];return h.push(...d.map(p=>p===""?l:[l,p].join("/"))),o&&h.push(...d),h.map(p=>t.startsWith("/")&&p===""?"/":p)}function Z5(t){t.sort((e,a)=>e.score!==a.score?a.score-e.score:oS(e.routesMeta.map(r=>r.childrenIndex),a.routesMeta.map(r=>r.childrenIndex)))}var eS=/^:[\w-]+$/,tS=3,nS=2,aS=1,iS=10,rS=-2,Cy=t=>t==="*";function sS(t,e){let a=t.split("/"),r=a.length;return a.some(Cy)&&(r+=rS),e&&(r+=nS),a.filter(o=>!Cy(o)).reduce((o,l)=>o+(eS.test(l)?tS:l===""?aS:iS),r)}function oS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,o)=>r===e[o])?t[t.length-1]-e[e.length-1]:0}function lS(t,e,a=!1){let{routesMeta:r}=t,o={},l="/",d=[];for(let h=0;h<r.length;++h){let p=r[h],m=h===r.length-1,y=l==="/"?e:e.slice(l.length)||"/",v={path:p.relativePath,caseSensitive:p.caseSensitive,end:m},x=p.matcher&&p.compiledParams?Zb(v,y,p.matcher,p.compiledParams):vc(v,y),w=p.route;if(!x&&m&&a&&!r[r.length-1].route.index&&(x=vc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!x)return null;Object.assign(o,x.params),d.push({params:o,pathname:Kn([l,x.pathname]),pathnameBase:hS(Kn([l,x.pathnameBase])),route:w}),x.pathnameBase!=="/"&&(l=Kn([l,x.pathnameBase]))}return d}function vc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[a,r]=ex(t.path,t.caseSensitive,t.end);return Zb(t,e,a,r)}function Zb(t,e,a,r){let o=e.match(a);if(!o)return null;let l=o[0],d=l.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:r.reduce((m,{paramName:y,isOptional:v},x)=>{if(y==="*"){let j=h[x]||"";d=l.slice(0,l.length-j.length).replace(/(.)\/+$/,"$1")}const w=h[x];return v&&!w?m[y]=void 0:m[y]=(w||"").replace(/%2F/g,"/"),m},{}),pathname:l,pathnameBase:d,pattern:t}}function ex(t,e=!1,a=!0){Wn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],o="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,h,p,m,y)=>{if(r.push({paramName:h,isOptional:p!=null}),p){let v=y.charAt(m+d.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(r.push({paramName:"*"}),o+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?o+="\\/*$":t!==""&&t!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function cS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Wn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Ma(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let a=e.endsWith("/")?e.length-1:e.length,r=t.charAt(a);return r&&r!=="/"?null:t.slice(a)||"/"}function uS(t,e="/"){let{pathname:a,search:r="",hash:o=""}=typeof t=="string"?Xr(t):t,l;return a?(a=tx(a),a.startsWith("/")?l=Ay(a.substring(1),"/"):l=Ay(a,e)):l=e,{pathname:l,search:fS(r),hash:pS(o)}}function Ay(t,e){let a=bc(e).split("/");return t.split("/").forEach(o=>{o===".."?a.length>1&&a.pop():o!=="."&&a.push(o)}),a.length>1?a.join("/"):"/"}function gh(t,e,a,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function dS(t){return t.filter((e,a)=>a===0||e.route.path&&e.route.path.length>0)}function Mf(t){let e=dS(t);return e.map((a,r)=>r===e.length-1?a.pathname:a.pathnameBase)}function Bc(t,e,a,r=!1){let o;typeof t=="string"?o=Xr(t):(o={...t},lt(!o.pathname||!o.pathname.includes("?"),gh("?","pathname","search",o)),lt(!o.pathname||!o.pathname.includes("#"),gh("#","pathname","hash",o)),lt(!o.search||!o.search.includes("#"),gh("#","search","hash",o)));let l=t===""||o.pathname==="",d=l?"/":o.pathname,h;if(d==null)h=a;else{let v=e.length-1;if(!r&&d.startsWith("..")){let x=d.split("/");for(;x[0]==="..";)x.shift(),v-=1;o.pathname=x.join("/")}h=v>=0?e[v]:"/"}let p=uS(o,h),m=d&&d!=="/"&&d.endsWith("/"),y=(l||d===".")&&a.endsWith("/");return!p.pathname.endsWith("/")&&(m||y)&&(p.pathname+="/"),p}var tx=t=>t.replace(/[\\/]{2,}/g,"/"),Kn=t=>tx(t.join("/")),bc=t=>t.replace(/\/+$/,""),hS=t=>bc(t).replace(/^\/*/,"/"),fS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,pS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,mS=class{constructor(t,e,a,r=!1){this.status=t,this.statusText=e||"",this.internal=r,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}};function gS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function yS(t){let e=t.map(a=>a.route.path).filter(Boolean);return Kn(e)||"/"}var nx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function ax(t,e){let a=t;if(typeof a!="string"||!Lf.test(a))return{absoluteURL:void 0,isExternal:!1,to:a};let r=a,o=!1;if(nx)try{let l=new URL(window.location.href),d=Wb.test(a)?new URL(G5(a,l.protocol)):new URL(a),h=Ma(d.pathname,e);d.origin===l.origin&&h!=null?a=h+d.search+d.hash:o=!0}catch{Wn(!1,`<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:o,to:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var ix=["POST","PUT","PATCH","DELETE"];new Set(ix);var vS=["GET",...ix];new Set(vS);var bS=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function xS(t){try{return bS.includes(new URL(t).protocol)}catch{return!1}}var Jr=S.createContext(null);Jr.displayName="DataRouter";var Pc=S.createContext(null);Pc.displayName="DataRouterState";var rx=S.createContext(!1);function wS(){return S.useContext(rx)}var sx=S.createContext({isTransitioning:!1});sx.displayName="ViewTransition";var SS=S.createContext(new Map);SS.displayName="Fetchers";var jS=S.createContext(null);jS.displayName="Await";var xn=S.createContext(null);xn.displayName="Navigation";var ko=S.createContext(null);ko.displayName="Location";var Xn=S.createContext({outlet:null,matches:[],isDataRoute:!1});Xn.displayName="Route";var zf=S.createContext(null);zf.displayName="RouteError";var ox="REACT_ROUTER_ERROR",_S="REDIRECT",kS="ROUTE_ERROR_RESPONSE";function ES(t){if(t.startsWith(`${ox}:${_S}:{`))try{let e=JSON.parse(t.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function TS(t){if(t.startsWith(`${ox}:${kS}:{`))try{let e=JSON.parse(t.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new mS(e.status,e.statusText,e.data)}catch{}}function CS(t,{relative:e}={}){lt(Qr(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:r}=S.useContext(xn),{hash:o,pathname:l,search:d}=Eo(t,{relative:e}),h=l;return a!=="/"&&(h=l==="/"?a:Kn([a,l])),r.createHref({pathname:h,search:d,hash:o})}function Qr(){return S.useContext(ko)!=null}function Xt(){return lt(Qr(),"useLocation() may be used only in the context of a <Router> component."),S.useContext(ko).location}var lx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function cx(t){S.useContext(xn).static||S.useLayoutEffect(t)}function cn(){let{isDataRoute:t}=S.useContext(Xn);return t?HS():AS()}function AS(){lt(Qr(),"useNavigate() may be used only in the context of a <Router> component.");let t=S.useContext(Jr),{basename:e,navigator:a}=S.useContext(xn),{matches:r}=S.useContext(Xn),{pathname:o}=Xt(),l=JSON.stringify(Mf(r)),d=S.useRef(!1);return cx(()=>{d.current=!0}),S.useCallback((p,m={})=>{if(Wn(d.current,lx),!d.current)return;if(typeof p=="number"){a.go(p);return}let y=Bc(p,JSON.parse(l),o,m.relative==="path");t==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:Kn([e,y.pathname])),(m.replace?a.replace:a.push)(y,m.state,m)},[e,a,l,o,t])}S.createContext(null);function NS(){let{matches:t}=S.useContext(Xn),e=t[t.length-1];return(e==null?void 0:e.params)??{}}function Eo(t,{relative:e}={}){let{matches:a}=S.useContext(Xn),{pathname:r}=Xt(),o=JSON.stringify(Mf(a));return S.useMemo(()=>Bc(t,JSON.parse(o),r,e==="path"),[t,o,r,e])}function RS(t,e){return ux(t,e)}function ux(t,e,a){var T;lt(Qr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=S.useContext(xn),{matches:o}=S.useContext(Xn),l=o[o.length-1],d=l?l.params:{},h=l?l.pathname:"/",p=l?l.pathnameBase:"/",m=l&&l.route;{let k=m&&m.path||"";hx(h,!m||k.endsWith("*")||k.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${k}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${k}"> to <Route path="${k==="/"?"*":`${k}/*`}">.`)}let y=Xt(),v;if(e){let k=typeof e=="string"?Xr(e):e;lt(p==="/"||((T=k.pathname)==null?void 0:T.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${k.pathname}" was given in the \`location\` prop.`),v=k}else v=y;let x=v.pathname||"/",w=x;if(p!=="/"){let k=p.replace(/^\//,"").split("/");w="/"+x.replace(/^\//,"").split("/").slice(k.length).join("/")}let j=a&&a.state.matches.length?a.state.matches.map(k=>Object.assign(k,{route:a.manifest[k.route.id]||k.route})):Xb(t,{pathname:w});Wn(m||j!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Wn(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let E=zS(j&&j.map(k=>Object.assign({},k,{params:Object.assign({},d,k.params),pathname:Kn([p,r.encodeLocation?r.encodeLocation(k.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?p:Kn([p,r.encodeLocation?r.encodeLocation(k.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:k.pathnameBase])})),o,a);return e&&E?S.createElement(ko.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...v},navigationType:"POP"}},E):E}function OS(){let t=$S(),e=gS(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),a=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},l={padding:"2px 4px",backgroundColor:r},d=null;return console.error("Error handled by React Router default ErrorBoundary:",t),d=S.createElement(S.Fragment,null,S.createElement("p",null,"💿 Hey developer 👋"),S.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",S.createElement("code",{style:l},"ErrorBoundary")," or"," ",S.createElement("code",{style:l},"errorElement")," prop on your route.")),S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),a?S.createElement("pre",{style:o},a):null,d)}var DS=S.createElement(OS,null),dx=class extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const a=TS(t.digest);a&&(t=a)}let e=t!==void 0?S.createElement(Xn.Provider,{value:this.props.routeContext},S.createElement(zf.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?S.createElement(LS,{error:t},e):e}};dx.contextType=rx;var yh=new WeakMap;function LS({children:t,error:e}){let{basename:a}=S.useContext(xn);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=ES(e.digest);if(r){let o=yh.get(e);if(o)throw o;let l=ax(r.location,a),d=l.absoluteURL||l.to;if(xS(d))throw new Error("Invalid redirect location");if(nx&&!yh.get(e))if(l.isExternal||r.reloadDocument)window.location.href=d;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:r.replace}));throw yh.set(e,h),h}return S.createElement("meta",{httpEquiv:"refresh",content:`0;url=${d}`})}}return t}function MS({routeContext:t,match:e,children:a}){let r=S.useContext(Jr);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),S.createElement(Xn.Provider,{value:t},a)}function zS(t,e=[],a){let r=a==null?void 0:a.state;if(t==null){if(!r)return null;if(r.errors)t=r.matches;else if(e.length===0&&!r.initialized&&r.matches.length>0)t=r.matches;else return null}let o=t,l=r==null?void 0:r.errors;if(l!=null){let y=o.findIndex(v=>v.route.id&&(l==null?void 0:l[v.route.id])!==void 0);lt(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,y+1))}let d=!1,h=-1;if(a&&r){d=r.renderFallback;for(let y=0;y<o.length;y++){let v=o[y];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(h=y),v.route.id){let{loaderData:x,errors:w}=r,j=v.route.loader&&!x.hasOwnProperty(v.route.id)&&(!w||w[v.route.id]===void 0);if(v.route.lazy||j){a.isStatic&&(d=!0),h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}}let p=a==null?void 0:a.onError,m=r&&p?(y,v)=>{var x,w;p(y,{location:r.location,params:((w=(x=r.matches)==null?void 0:x[0])==null?void 0:w.params)??{},pattern:yS(r.matches),errorInfo:v})}:void 0;return o.reduceRight((y,v,x)=>{let w,j=!1,E=null,T=null;r&&(w=l&&v.route.id?l[v.route.id]:void 0,E=v.route.errorElement||DS,d&&(h<0&&x===0?(hx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),j=!0,T=null):h===x&&(j=!0,T=v.route.hydrateFallbackElement||null)));let k=e.concat(o.slice(0,x+1)),C=()=>{let N;return w?N=E:j?N=T:v.route.Component?N=S.createElement(v.route.Component,null):v.route.element?N=v.route.element:N=y,S.createElement(MS,{match:v,routeContext:{outlet:y,matches:k,isDataRoute:r!=null},children:N})};return r&&(v.route.ErrorBoundary||v.route.errorElement||x===0)?S.createElement(dx,{location:r.location,revalidation:r.revalidation,component:E,error:w,children:C(),routeContext:{outlet:null,matches:k,isDataRoute:!0},onError:m}):C()},null)}function Uf(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function US(t){let e=S.useContext(Jr);return lt(e,Uf(t)),e}function BS(t){let e=S.useContext(Pc);return lt(e,Uf(t)),e}function PS(t){let e=S.useContext(Xn);return lt(e,Uf(t)),e}function Bf(t){let e=PS(t),a=e.matches[e.matches.length-1];return lt(a.route.id,`${t} can only be used on routes that contain a unique "id"`),a.route.id}function VS(){return Bf("useRouteId")}function $S(){var r;let t=S.useContext(zf),e=BS("useRouteError"),a=Bf("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[a]}function HS(){let{router:t}=US("useNavigate"),e=Bf("useNavigate"),a=S.useRef(!1);return cx(()=>{a.current=!0}),S.useCallback(async(o,l={})=>{Wn(a.current,lx),a.current&&(typeof o=="number"?await t.navigate(o):await t.navigate(o,{fromRouteId:e,...l}))},[t,e])}var Ny={};function hx(t,e,a){!e&&!Ny[t]&&(Ny[t]=!0,Wn(!1,a))}S.memo(IS);function IS({routes:t,manifest:e,future:a,state:r,isStatic:o,onError:l}){return ux(t,void 0,{manifest:e,state:r,isStatic:o,onError:l})}function qS({to:t,replace:e,state:a,relative:r}){lt(Qr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=S.useContext(xn);Wn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=S.useContext(Xn),{pathname:d}=Xt(),h=cn(),p=Bc(t,Mf(l),d,r==="path"),m=JSON.stringify(p);return S.useEffect(()=>{h(JSON.parse(m),{replace:e,state:a,relative:r})},[h,m,r,e,a]),null}function Kt(t){lt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function FS({basename:t="/",children:e=null,location:a,navigationType:r="POP",navigator:o,static:l=!1,useTransitions:d}){lt(!Qr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=t.replace(/^\/*/,"/"),p=S.useMemo(()=>({basename:h,navigator:o,static:l,useTransitions:d,future:{}}),[h,o,l,d]);typeof a=="string"&&(a=Xr(a));let{pathname:m="/",search:y="",hash:v="",state:x=null,key:w="default",mask:j}=a,E=S.useMemo(()=>{let T=Ma(m,h);return T==null?null:{location:{pathname:T,search:y,hash:v,state:x,key:w,mask:j},navigationType:r}},[h,m,y,v,x,w,r,j]);return Wn(E!=null,`<Router basename="${h}"> is not able to match the URL "${m}${y}${v}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:S.createElement(xn.Provider,{value:p},S.createElement(ko.Provider,{children:e,value:E}))}function GS({children:t,location:e}){return RS(Wh(t),e)}function Wh(t,e=[]){let a=[];return S.Children.forEach(t,(r,o)=>{if(!S.isValidElement(r))return;let l=[...e,o];if(r.type===S.Fragment){a.push.apply(a,Wh(r.props.children,l));return}lt(r.type===Kt,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),lt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let d={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(d.children=Wh(r.props.children,l)),a.push(d)}),a}var sc="get",oc="application/x-www-form-urlencoded";function Vc(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function KS(t){return Vc(t)&&t.tagName.toLowerCase()==="button"}function YS(t){return Vc(t)&&t.tagName.toLowerCase()==="form"}function WS(t){return Vc(t)&&t.tagName.toLowerCase()==="input"}function XS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function JS(t,e){return t.button===0&&(!e||e==="_self")&&!XS(t)}var Fl=null;function QS(){if(Fl===null)try{new FormData(document.createElement("form"),0),Fl=!1}catch{Fl=!0}return Fl}var ZS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function vh(t){return t!=null&&!ZS.has(t)?(Wn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${oc}"`),null):t}function ej(t,e){let a,r,o,l,d;if(YS(t)){let h=t.getAttribute("action");r=h?Ma(h,e):null,a=t.getAttribute("method")||sc,o=vh(t.getAttribute("enctype"))||oc,l=new FormData(t)}else if(KS(t)||WS(t)&&(t.type==="submit"||t.type==="image")){let h=t.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=t.getAttribute("formaction")||h.getAttribute("action");if(r=p?Ma(p,e):null,a=t.getAttribute("formmethod")||h.getAttribute("method")||sc,o=vh(t.getAttribute("formenctype"))||vh(h.getAttribute("enctype"))||oc,l=new FormData(h,t),!QS()){let{name:m,type:y,value:v}=t;if(y==="image"){let x=m?`${m}.`:"";l.append(`${x}x`,"0"),l.append(`${x}y`,"0")}else m&&l.append(m,v)}}else{if(Vc(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=sc,r=null,o=oc,d=t}return l&&o==="text/plain"&&(d=l,l=void 0),{action:r,method:a.toLowerCase(),encType:o,formData:l,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Pf(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function fx(t,e,a,r){let o=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return a?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${r}`:o.pathname=`${o.pathname}.${r}`:o.pathname==="/"?o.pathname=`_root.${r}`:e&&Ma(o.pathname,e)==="/"?o.pathname=`${bc(e)}/_root.${r}`:o.pathname=`${bc(o.pathname)}.${r}`,o}async function tj(t,e){if(t.id in e)return e[t.id];try{let a=await import(t.module);return e[t.id]=a,a}catch(a){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function nj(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function aj(t,e,a){let r=await Promise.all(t.map(async o=>{let l=e.routes[o.route.id];if(l){let d=await tj(l,a);return d.links?d.links():[]}return[]}));return oj(r.flat(1).filter(nj).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Ry(t,e,a,r,o,l){let d=(p,m)=>a[m]?p.route.id!==a[m].route.id:!0,h=(p,m)=>{var y;return a[m].pathname!==p.pathname||((y=a[m].route.path)==null?void 0:y.endsWith("*"))&&a[m].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,m)=>d(p,m)||h(p,m)):l==="data"?e.filter((p,m)=>{var v;let y=r.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(d(p,m)||h(p,m))return!0;if(p.route.shouldRevalidate){let x=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((v=a[0])==null?void 0:v.params)||{},nextUrl:new URL(t,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function ij(t,e,{includeHydrateFallback:a}={}){return rj(t.map(r=>{let o=e.routes[r.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),a&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function rj(t){return[...new Set(t)]}function sj(t){let e={},a=Object.keys(t).sort();for(let r of a)e[r]=t[r];return e}function oj(t,e){let a=new Set;return new Set(e),t.reduce((r,o)=>{let l=JSON.stringify(sj(o));return a.has(l)||(a.add(l),r.push({key:l,link:o})),r},[])}function Vf(){let t=S.useContext(Jr);return Pf(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function lj(){let t=S.useContext(Pc);return Pf(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var $f=S.createContext(void 0);$f.displayName="FrameworkContext";function $c(){let t=S.useContext($f);return Pf(t,"You must render this element inside a <HydratedRouter> element"),t}function cj(t,e){let a=S.useContext($f),[r,o]=S.useState(!1),[l,d]=S.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:m,onMouseLeave:y,onTouchStart:v}=e,x=S.useRef(null);S.useEffect(()=>{if(t==="render"&&d(!0),t==="viewport"){let E=k=>{k.forEach(C=>{d(C.isIntersecting)})},T=new IntersectionObserver(E,{threshold:.5});return x.current&&T.observe(x.current),()=>{T.disconnect()}}},[t]),S.useEffect(()=>{if(r){let E=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(E)}}},[r]);let w=()=>{o(!0)},j=()=>{o(!1),d(!1)};return a?t!=="intent"?[l,x,{}]:[l,x,{onFocus:Ys(h,w),onBlur:Ys(p,j),onMouseEnter:Ys(m,w),onMouseLeave:Ys(y,j),onTouchStart:Ys(v,w)}]:[!1,x,{}]}function Ys(t,e){return a=>{t&&t(a),a.defaultPrevented||e(a)}}function uj({page:t,...e}){let a=wS(),{nonce:r}=$c(),{router:o}=Vf(),l=S.useMemo(()=>Xb(o.routes,t,o.basename),[o.routes,t,o.basename]);return l?(e.nonce==null&&r&&(e={...e,nonce:r}),a?S.createElement(hj,{page:t,matches:l,...e}):S.createElement(fj,{page:t,matches:l,...e})):null}function dj(t){let{manifest:e,routeModules:a}=$c(),[r,o]=S.useState([]);return S.useEffect(()=>{let l=!1;return aj(t,e,a).then(d=>{l||o(d)}),()=>{l=!0}},[t,e,a]),r}function hj({page:t,matches:e,...a}){let r=Xt(),{future:o}=$c(),{basename:l}=Vf(),d=S.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let h=fx(t,l,o.v8_trailingSlashAwareDataRequests,"rsc"),p=!1,m=[];for(let y of e)typeof y.route.shouldRevalidate=="function"?p=!0:m.push(y.route.id);return p&&m.length>0&&h.searchParams.set("_routes",m.join(",")),[h.pathname+h.search]},[l,o.v8_trailingSlashAwareDataRequests,t,r,e]);return S.createElement(S.Fragment,null,d.map(h=>S.createElement("link",{key:h,rel:"prefetch",as:"fetch",href:h,...a})))}function fj({page:t,matches:e,...a}){let r=Xt(),{future:o,manifest:l,routeModules:d}=$c(),{basename:h}=Vf(),{loaderData:p,matches:m}=lj(),y=S.useMemo(()=>Ry(t,e,m,l,r,"data"),[t,e,m,l,r]),v=S.useMemo(()=>Ry(t,e,m,l,r,"assets"),[t,e,m,l,r]),x=S.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let E=new Set,T=!1;if(e.forEach(C=>{var z;let N=l.routes[C.route.id];!N||!N.hasLoader||(!y.some(J=>J.route.id===C.route.id)&&C.route.id in p&&((z=d[C.route.id])!=null&&z.shouldRevalidate)||N.hasClientLoader?T=!0:E.add(C.route.id))}),E.size===0)return[];let k=fx(t,h,o.v8_trailingSlashAwareDataRequests,"data");return T&&E.size>0&&k.searchParams.set("_routes",e.filter(C=>E.has(C.route.id)).map(C=>C.route.id).join(",")),[k.pathname+k.search]},[h,o.v8_trailingSlashAwareDataRequests,p,r,l,y,e,t,d]),w=S.useMemo(()=>ij(v,l),[v,l]),j=dj(v);return S.createElement(S.Fragment,null,x.map(E=>S.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...a})),w.map(E=>S.createElement("link",{key:E,rel:"modulepreload",href:E,...a})),j.map(({key:E,link:T})=>S.createElement("link",{key:E,nonce:a.nonce,...T,crossOrigin:T.crossOrigin??a.crossOrigin})))}function pj(...t){return e=>{t.forEach(a=>{typeof a=="function"?a(e):a!=null&&(a.current=e)})}}var mj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{mj&&(window.__reactRouterVersion="7.18.0")}catch{}function gj({basename:t,children:e,useTransitions:a,window:r}){let o=S.useRef();o.current==null&&(o.current=K5({window:r,v5Compat:!0}));let l=o.current,[d,h]=S.useState({action:l.action,location:l.location}),p=S.useCallback(m=>{a===!1?h(m):S.startTransition(()=>h(m))},[a]);return S.useLayoutEffect(()=>l.listen(p),[l,p]),S.createElement(FS,{basename:t,children:e,location:d.location,navigationType:d.action,navigator:l,useTransitions:a})}var Hf=S.forwardRef(function({onClick:e,discover:a="render",prefetch:r="none",relative:o,reloadDocument:l,replace:d,mask:h,state:p,target:m,to:y,preventScrollReset:v,viewTransition:x,defaultShouldRevalidate:w,...j},E){let{basename:T,navigator:k,useTransitions:C}=S.useContext(xn),N=typeof y=="string"&&Lf.test(y),z=ax(y,T);y=z.to;let J=CS(y,{relative:o}),Q=Xt(),D=null;if(h){let je=Bc(h,[],Q.mask?Q.mask.pathname:"/",!0);T!=="/"&&(je.pathname=je.pathname==="/"?T:Kn([T,je.pathname])),D=k.createHref(je)}let[q,H,X]=cj(r,j),se=xj(y,{replace:d,mask:h,state:p,target:m,preventScrollReset:v,relative:o,viewTransition:x,defaultShouldRevalidate:w,useTransitions:C});function oe(je){e&&e(je),je.defaultPrevented||se(je)}let Se=!(z.isExternal||l),Ne=S.createElement("a",{...j,...X,href:(Se?D:void 0)||z.absoluteURL||J,onClick:Se?oe:e,ref:pj(E,H),target:m,"data-discover":!N&&a==="render"?"true":void 0});return q&&!N?S.createElement(S.Fragment,null,Ne,S.createElement(uj,{page:J})):Ne});Hf.displayName="Link";var yj=S.forwardRef(function({"aria-current":e="page",caseSensitive:a=!1,className:r="",end:o=!1,style:l,to:d,viewTransition:h,children:p,...m},y){let v=Eo(d,{relative:m.relative}),x=Xt(),w=S.useContext(Pc),{navigator:j,basename:E}=S.useContext(xn),T=w!=null&&kj(v)&&h===!0,k=j.encodeLocation?j.encodeLocation(v).pathname:v.pathname,C=x.pathname,N=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;a||(C=C.toLowerCase(),N=N?N.toLowerCase():null,k=k.toLowerCase()),N&&E&&(N=Ma(N,E)||N);const z=k!=="/"&&k.endsWith("/")?k.length-1:k.length;let J=C===k||!o&&C.startsWith(k)&&C.charAt(z)==="/",Q=N!=null&&(N===k||!o&&N.startsWith(k)&&N.charAt(k.length)==="/"),D={isActive:J,isPending:Q,isTransitioning:T},q=J?e:void 0,H;typeof r=="function"?H=r(D):H=[r,J?"active":null,Q?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let X=typeof l=="function"?l(D):l;return S.createElement(Hf,{...m,"aria-current":q,className:H,ref:y,style:X,to:d,viewTransition:h},typeof p=="function"?p(D):p)});yj.displayName="NavLink";var vj=S.forwardRef(({discover:t="render",fetcherKey:e,navigate:a,reloadDocument:r,replace:o,state:l,method:d=sc,action:h,onSubmit:p,relative:m,preventScrollReset:y,viewTransition:v,defaultShouldRevalidate:x,...w},j)=>{let{useTransitions:E}=S.useContext(xn),T=jj(),k=_j(h,{relative:m}),C=d.toLowerCase()==="get"?"get":"post",N=typeof h=="string"&&Lf.test(h),z=J=>{if(p&&p(J),J.defaultPrevented)return;J.preventDefault();let Q=J.nativeEvent.submitter,D=(Q==null?void 0:Q.getAttribute("formmethod"))||d,q=()=>T(Q||J.currentTarget,{fetcherKey:e,method:D,navigate:a,replace:o,state:l,relative:m,preventScrollReset:y,viewTransition:v,defaultShouldRevalidate:x});E&&a!==!1?S.startTransition(()=>q()):q()};return S.createElement("form",{ref:j,method:C,action:k,onSubmit:r?p:z,...w,"data-discover":!N&&t==="render"?"true":void 0})});vj.displayName="Form";function bj(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function px(t){let e=S.useContext(Jr);return lt(e,bj(t)),e}function xj(t,{target:e,replace:a,mask:r,state:o,preventScrollReset:l,relative:d,viewTransition:h,defaultShouldRevalidate:p,useTransitions:m}={}){let y=cn(),v=Xt(),x=Eo(t,{relative:d});return S.useCallback(w=>{if(JS(w,e)){w.preventDefault();let j=a!==void 0?a:fo(v)===fo(x),E=()=>y(t,{replace:j,mask:r,state:o,preventScrollReset:l,relative:d,viewTransition:h,defaultShouldRevalidate:p});m?S.startTransition(()=>E()):E()}},[v,y,x,a,r,o,e,t,l,d,h,p,m])}var wj=0,Sj=()=>`__${String(++wj)}__`;function jj(){let{router:t}=px("useSubmit"),{basename:e}=S.useContext(xn),a=VS(),r=t.fetch,o=t.navigate;return S.useCallback(async(l,d={})=>{let{action:h,method:p,encType:m,formData:y,body:v}=ej(l,e);if(d.navigate===!1){let x=d.fetcherKey||Sj();await r(x,a,d.action||h,{defaultShouldRevalidate:d.defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:y,body:v,formMethod:d.method||p,formEncType:d.encType||m,flushSync:d.flushSync})}else await o(d.action||h,{defaultShouldRevalidate:d.defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:y,body:v,formMethod:d.method||p,formEncType:d.encType||m,replace:d.replace,state:d.state,fromRouteId:a,flushSync:d.flushSync,viewTransition:d.viewTransition})},[r,o,e,a])}function _j(t,{relative:e}={}){let{basename:a}=S.useContext(xn),r=S.useContext(Xn);lt(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),l={...Eo(t||".",{relative:e})},d=Xt();if(t==null){l.search=d.search;let h=new URLSearchParams(l.search),p=h.getAll("index");if(p.some(y=>y==="")){h.delete("index"),p.filter(v=>v).forEach(v=>h.append("index",v));let y=h.toString();l.search=y?`?${y}`:""}}return(!t||t===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(l.pathname=l.pathname==="/"?a:Kn([a,l.pathname])),fo(l)}function kj(t,{relative:e}={}){let a=S.useContext(sx);lt(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=px("useViewTransitionState"),o=Eo(t,{relative:e});if(!a.isTransitioning)return!1;let l=Ma(a.currentLocation.pathname,r)||a.currentLocation.pathname,d=Ma(a.nextLocation.pathname,r)||a.nextLocation.pathname;return vc(o.pathname,d)!=null||vc(o.pathname,l)!=null}function If(){const t=cn(),a=Xt().pathname==="/",[r,o]=S.useState(!1),[l,d]=S.useState(!1),[h,p]=S.useState("");S.useEffect(()=>{const y=()=>o(window.scrollY>40);return window.addEventListener("scroll",y),()=>window.removeEventListener("scroll",y)},[]),S.useEffect(()=>{document.querySelectorAll('a[href^="#"]').forEach(y=>{y.addEventListener("click",function(v){v.preventDefault();const x=document.querySelector(this.getAttribute("href"));x&&x.scrollIntoView({behavior:"smooth"})})})},[]);const m=()=>d(!1);return S.useEffect(()=>(l?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[l]),S.useEffect(()=>{const y=v=>{v.key==="Escape"&&m()};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[]),u.jsxs(u.Fragment,{children:[u.jsxs("nav",{className:r?"scrolled":"",children:[u.jsx("div",{className:"logo",children:u.jsx("h1",{children:"FrameX"})}),u.jsx("ul",{children:a?u.jsxs(u.Fragment,{children:[u.jsx("li",{children:u.jsx("a",{href:"#features",onClick:m,children:"Features"})}),u.jsx("li",{children:u.jsx("a",{href:"#community",onClick:m,children:"Community"})}),u.jsx("li",{children:u.jsx("a",{href:"#about",onClick:m,children:"About"})}),u.jsx("li",{children:u.jsx("a",{href:"#pricing",onClick:m,children:"Pricing"})})]}):u.jsx("li",{children:u.jsx(Hf,{to:"/",className:"back-home-link",onClick:m,children:"← Back to Home"})})}),u.jsxs("div",{className:"nav-right",children:[a&&u.jsxs("div",{className:"auth-buttons",children:[u.jsx("button",{className:"login",onClick:()=>t("/login"),children:"Log In"}),u.jsx("button",{className:"get-started",onClick:()=>t("/login"),children:"Get Started"})]}),u.jsx("button",{className:"menu-toggle",onClick:()=>d(!l),"aria-label":"Toggle menu",children:u.jsx("i",{className:`menu-toggle-icon ${l?"fas fa-times":"fas fa-bars"}`})})]}),u.jsx("style",{children:`
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
      `})]}),u.jsx("div",{className:`mobile-backdrop ${l?"active":""}`,onClick:m}),u.jsxs("div",{className:`mobile-drawer ${l?"active":""}`,children:[u.jsx("button",{className:"drawer-close",onClick:m,"aria-label":"Close menu",children:u.jsx("i",{className:"fas fa-times"})}),u.jsxs("div",{className:"drawer-menu-items",children:[u.jsx("a",{href:"#features",className:h==="features"?"active":"",onClick:()=>{p("features"),m()},children:"Features"}),u.jsx("a",{href:"#community",className:h==="community"?"active":"",onClick:()=>{p("community"),m()},children:"Community"}),u.jsx("a",{href:"#about",className:h==="about"?"active":"",onClick:()=>{p("about"),m()},children:"About"}),u.jsx("a",{href:"#pricing",className:h==="pricing"?"active":"",onClick:()=>{p("pricing"),m()},children:"Pricing"}),u.jsx("a",{href:"/login",className:"drawer-cta",onClick:m,children:"Get Started"})]})]})]})}function qf(){return u.jsxs("footer",{children:[u.jsxs("div",{className:"footer-content",children:[u.jsxs("div",{className:"footer-logo",children:[u.jsx("div",{className:"logo-icon",children:"F"}),u.jsx("h2",{children:"FrameX"})]}),u.jsxs("div",{className:"footer-links",children:[u.jsx("a",{href:"#",children:"Privacy Policy"}),u.jsx("a",{href:"/terms",children:"Terms of Service"}),u.jsx("a",{href:"#",children:"Contact Us"})]})]}),u.jsx("div",{className:"footer-divider"}),u.jsx("p",{children:"© 2026 FrameX. All rights reserved."}),u.jsx("style",{children:`
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
      `})]})}function Ej(){const t=cn(),[e,a]=S.useState(!1);return S.useEffect(()=>{document.title="FrameX | Share Your World in Frames"},[]),S.useEffect(()=>{const r=document.querySelectorAll(".reveal"),o=new IntersectionObserver(m=>{m.forEach(y=>{y.isIntersecting&&(y.target.classList.add("visible"),o.unobserve(y.target))})},{threshold:.1,rootMargin:"0px 0px -60px 0px"});r.forEach(m=>o.observe(m)),document.querySelectorAll(".feature-card").forEach(m=>{m.addEventListener("mousemove",y=>{const v=m.getBoundingClientRect(),x=(y.clientX-v.left)/v.width*100,w=(y.clientY-v.top)/v.height*100;m.style.setProperty("--mouse-x",x+"%"),m.style.setProperty("--mouse-y",w+"%")})});const d=document.querySelectorAll(".hero-stat"),h=m=>{const y=(m.clientX/window.innerWidth-.5)*6,v=(m.clientY/window.innerHeight-.5)*6;d.forEach((x,w)=>{const j=w===0?1:-.8;x.style.transform=`translate(${y*j}px, ${v*j}px)`})};window.addEventListener("mousemove",h);const p=document.querySelector(".hero-media");if(p){const m=new IntersectionObserver(([y])=>{y.isIntersecting&&(y.target.classList.add("card-entered"),m.unobserve(y.target))},{threshold:.1,rootMargin:"0px 0px -40px 0px"});return m.observe(p),()=>{o.disconnect(),window.removeEventListener("mousemove",h),m.disconnect()}}return()=>{o.disconnect(),window.removeEventListener("mousemove",h)}},[]),u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"aurora-bg"}),u.jsx(If,{}),u.jsxs("section",{className:"hero",id:"hero",children:[u.jsxs("div",{className:"hero-content",children:[u.jsxs("div",{className:"hero-badge",children:[u.jsx("span",{children:"New"}),"Now available on iOS & Android"]}),u.jsxs("h1",{children:["Share Your World",u.jsx("br",{}),"in ",u.jsx("span",{className:"gradient-text",children:"Every Frame"})]}),u.jsx("p",{children:"Discover, create, and connect with short videos and photos. Join millions of creators sharing their stories through the lens."}),u.jsxs("div",{className:"cta-buttons",children:[u.jsxs("a",{href:"/login",className:"btn-primary",onClick:r=>{r.preventDefault(),t("/login")},children:["Get Started ",u.jsx("i",{className:"fas fa-arrow-right"})]}),u.jsxs("a",{href:"#download",className:"btn-secondary",children:[u.jsx("i",{className:"fas fa-mobile-alt"})," Download App"]}),u.jsxs("a",{href:"#community",className:"btn-secondary",children:[u.jsx("i",{className:"fas fa-play"})," Explore Community"]})]})]}),u.jsxs("div",{className:"hero-media",children:[u.jsxs("div",{className:"glass-card-stack",children:[u.jsxs("div",{className:"glass-card",children:[u.jsx("div",{className:"glass-card-decoration"}),u.jsx("div",{className:"glass-card-icon",children:u.jsx("i",{className:"fas fa-video"})}),u.jsx("h3",{children:"Short Videos"}),u.jsx("p",{children:"Create and watch short, engaging videos"})]}),u.jsxs("div",{className:"glass-card",children:[u.jsx("div",{className:"glass-card-decoration glass-card-decoration--2"}),u.jsx("div",{className:"glass-card-icon",children:u.jsx("i",{className:"fas fa-camera"})}),u.jsx("h3",{children:"Photo Sharing"}),u.jsx("p",{children:"Share moments with high-quality photos"})]}),u.jsxs("div",{className:"glass-card",children:[u.jsx("div",{className:"glass-card-icon",children:u.jsx("i",{className:"fas fa-users"})}),u.jsx("h3",{children:"Community"}),u.jsx("p",{children:"Connect with creators worldwide"})]})]}),u.jsxs("div",{className:"hero-stat hero-stat--1",children:[u.jsx("strong",{children:"10M+"}),u.jsx("span",{children:"Active Users"})]}),u.jsxs("div",{className:"hero-stat hero-stat--2",children:[u.jsx("strong",{children:"4.8★"}),u.jsx("span",{children:"App Rating"})]})]})]}),u.jsxs("section",{id:"features",className:"features",children:[u.jsxs("div",{className:"features-header reveal",children:[u.jsx("span",{className:"section-label",children:"Features"}),u.jsx("h2",{children:"Built for Creators"}),u.jsx("p",{children:"Everything you need to capture, edit, and share your perspective with the world."})]}),u.jsx("div",{className:"feature-cards",children:[{icon:"fa-video",title:"Short Videos",desc:"Create and watch short, engaging videos on any topic. Our smart editor makes it effortless."},{icon:"fa-camera",title:"Photo Sharing",desc:"Share moments with high-quality photos and professional-grade filters built right in."},{icon:"fa-users",title:"Community",desc:"Connect with creators and friends from around the world. Your audience is waiting."}].map((r,o)=>u.jsxs("div",{className:`feature-card reveal reveal-delay-${o+1}`,children:[u.jsx("div",{className:"feature-icon",children:u.jsx("i",{className:`fas ${r.icon}`})}),u.jsx("h3",{children:r.title}),u.jsx("p",{children:r.desc})]},r.title))})]}),!e&&u.jsx("div",{className:"browser-bar",children:u.jsxs("div",{className:"browser-bar-content",children:[u.jsxs("div",{className:"browser-bar-text",children:[u.jsx("span",{className:"browser-bar-icon",children:u.jsx("i",{className:"fas fa-mobile-alt"})}),u.jsx("span",{children:"Continue in browser for the full experience"})]}),u.jsxs("button",{className:"browser-bar-btn",children:["Continue ",u.jsx("i",{className:"fas fa-arrow-right"})]}),u.jsx("button",{className:"browser-bar-close",onClick:()=>a(!0),"aria-label":"Dismiss",children:u.jsx("i",{className:"fas fa-times"})})]})}),u.jsxs("section",{id:"community",className:"community",children:[u.jsx("h2",{className:"reveal",children:"Join Our Community"}),u.jsx("p",{className:"reveal reveal-delay-1",children:"Follow us on social media and be part of the FrameX movement."}),u.jsx("div",{className:"social-links reveal reveal-delay-2",children:["instagram","twitter","tiktok","facebook","youtube"].map(r=>u.jsx("a",{href:"#",className:"social-link","aria-label":r.charAt(0).toUpperCase()+r.slice(1),children:u.jsx("i",{className:`fab fa-${r}`})},r))})]}),u.jsx("section",{id:"download",className:"download",children:u.jsxs("div",{className:"download-glass reveal",children:[u.jsx("span",{className:"section-label",children:"Get the App"}),u.jsx("h2",{children:"Download FrameX Now"}),u.jsx("p",{children:"Available on iOS and Android. Start sharing your story today."}),u.jsxs("div",{className:"download-buttons",children:[u.jsxs("a",{href:"#",className:"app-store",children:[u.jsx("i",{className:"fab fa-apple fa-lg"})," App Store"]}),u.jsxs("a",{href:"#",className:"google-play",children:[u.jsx("i",{className:"fab fa-google-play fa-lg"})," Google Play"]})]})]})}),u.jsx(qf,{}),u.jsx("style",{children:`
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
      `})]})}function Tj(){S.useEffect(()=>{const a=new IntersectionObserver(r=>{r.forEach(o=>{o.isIntersecting&&o.target.classList.add("visible")})},{threshold:.1});return document.querySelectorAll(".reveal").forEach(r=>a.observe(r)),()=>a.disconnect()},[]);const t=[{name:"Alex Chen",role:"CEO & Founder",icon:"fa-user-tie"},{name:"Sarah Mitchell",role:"CTO",icon:"fa-laptop-code"},{name:"David Park",role:"Head of Design",icon:"fa-paint-brush"},{name:"Emily Rodriguez",role:"VP of Engineering",icon:"fa-cogs"}],e=[{icon:"fa-bolt",title:"Lightning Fast",desc:"Optimized for speed with sub-second response times across all platforms."},{icon:"fa-shield-alt",title:"Secure by Design",desc:"End-to-end encryption with enterprise-grade security protocols."},{icon:"fa-layer-group",title:"Modular Architecture",desc:"Plugin-based system that grows with your creative workflow."},{icon:"fa-robot",title:"AI-Powered",desc:"Intelligent suggestions and automation that learn from your style."}];return u.jsxs(u.Fragment,{children:[u.jsx(If,{}),u.jsx("div",{className:"aurora-bg"}),u.jsxs("main",{className:"about-page",children:[u.jsxs("section",{className:"about-hero",children:[u.jsx("div",{className:"about-hero-bg-glow"}),u.jsxs("div",{className:"about-hero-content",children:[u.jsx("span",{className:"section-label reveal",children:"About FrameX"}),u.jsxs("h1",{className:"about-hero-title reveal reveal-delay-1",children:["Redefining ",u.jsx("span",{className:"lemon-text",children:"Creative"})," Boundaries"]}),u.jsx("p",{className:"about-hero-sub reveal reveal-delay-2",children:"We believe great design should be effortless. FrameX brings together cutting-edge AI, real-time collaboration, and intuitive tools to empower creators worldwide."}),u.jsxs("div",{className:"about-hero-stats reveal reveal-delay-3",children:[u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:"50K+"}),u.jsx("span",{className:"stat-label",children:"Active Users"})]}),u.jsx("div",{className:"stat-divider"}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:"99.9%"}),u.jsx("span",{className:"stat-label",children:"Uptime"})]}),u.jsx("div",{className:"stat-divider"}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:"120+"}),u.jsx("span",{className:"stat-label",children:"Countries"})]})]})]})]}),u.jsx("section",{className:"about-section",id:"our-story",children:u.jsxs("div",{className:"about-container",children:[u.jsx("span",{className:"section-label reveal",children:"Our Story"}),u.jsx("h2",{className:"section-title reveal",children:"How FrameX Began"}),u.jsxs("div",{className:"story-card glass reveal reveal-delay-1",children:[u.jsx("div",{className:"story-icon",children:u.jsx("i",{className:"fas fa-quote-left"})}),u.jsx("p",{className:"story-text",children:"FrameX was born in 2023 from a simple observation: creative tools were either powerful but complex, or simple but limiting. Our founders—engineers, designers, and artists—set out to build something different: a platform that combines professional-grade capabilities with an intuitive, joyful experience."}),u.jsx("p",{className:"story-text",children:"What started as a small project in a co-working space has grown into a global community of creators. Today, FrameX powers workflows for freelance designers, creative agencies, and enterprise teams across 120+ countries."}),u.jsxs("div",{className:"story-meta",children:[u.jsxs("span",{children:[u.jsx("i",{className:"fas fa-calendar"})," Founded 2023"]}),u.jsxs("span",{children:[u.jsx("i",{className:"fas fa-users"})," Team of 48"]}),u.jsxs("span",{children:[u.jsx("i",{className:"fas fa-globe"})," Global Reach"]})]})]})]})}),u.jsx("section",{className:"about-section",id:"mission-vision",children:u.jsxs("div",{className:"about-container",children:[u.jsx("span",{className:"section-label reveal",children:"Mission & Vision"}),u.jsx("h2",{className:"section-title reveal",children:"What Drives Us"}),u.jsxs("div",{className:"mv-grid",children:[u.jsxs("div",{className:"mv-card glass reveal reveal-delay-1",children:[u.jsx("div",{className:"mv-icon",children:u.jsx("i",{className:"fas fa-bullseye"})}),u.jsx("h3",{children:"Our Mission"}),u.jsx("p",{children:"To democratize creative technology by building tools that are powerful enough for professionals yet accessible enough for beginners. We remove barriers, not features."})]}),u.jsxs("div",{className:"mv-card glass reveal reveal-delay-2",children:[u.jsx("div",{className:"mv-icon",children:u.jsx("i",{className:"fas fa-eye"})}),u.jsx("h3",{children:"Our Vision"}),u.jsx("p",{children:"A world where anyone can bring their creative vision to life without wrestling with software. We envision FrameX as the invisible bridge between imagination and creation."})]})]})]})}),u.jsx("section",{className:"about-section",id:"what-makes-us-different",children:u.jsxs("div",{className:"about-container",children:[u.jsx("span",{className:"section-label reveal",children:"Why FrameX"}),u.jsx("h2",{className:"section-title reveal",children:"What Makes Us Different"}),u.jsx("div",{className:"features-grid",children:e.map((a,r)=>u.jsxs("div",{className:`feature-card glass reveal reveal-delay-${r+1}`,children:[u.jsx("div",{className:"feature-card-icon",children:u.jsx("i",{className:`fas ${a.icon}`})}),u.jsx("h3",{children:a.title}),u.jsx("p",{children:a.desc})]},a.title))})]})}),u.jsx("section",{className:"about-section",id:"team",children:u.jsxs("div",{className:"about-container",children:[u.jsx("span",{className:"section-label reveal",children:"Leadership"}),u.jsx("h2",{className:"section-title reveal",children:"Meet the Team"}),u.jsx("div",{className:"team-grid",children:t.map((a,r)=>u.jsxs("div",{className:`team-card glass reveal reveal-delay-${r+1}`,children:[u.jsx("div",{className:"team-avatar",children:u.jsx("i",{className:`fas ${a.icon}`})}),u.jsx("h3",{children:a.name}),u.jsx("p",{className:"team-role",children:a.role})]},a.name))})]})}),u.jsx("section",{className:"about-section",id:"info",children:u.jsxs("div",{className:"about-container",children:[u.jsx("span",{className:"section-label reveal",children:"Snapshot"}),u.jsx("h2",{className:"section-title reveal",children:"Startup at a Glance"}),u.jsx("div",{className:"info-card glass reveal reveal-delay-1",children:u.jsxs("div",{className:"info-grid",children:[u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-calendar-alt"}),u.jsx("span",{className:"info-label",children:"Founded"}),u.jsx("span",{className:"info-value",children:"2023"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-map-pin"}),u.jsx("span",{className:"info-label",children:"Headquarters"}),u.jsx("span",{className:"info-value",children:"San Francisco, CA"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-user-friends"}),u.jsx("span",{className:"info-label",children:"Team Size"}),u.jsx("span",{className:"info-value",children:"48 Members"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-trophy"}),u.jsx("span",{className:"info-label",children:"Funding"}),u.jsx("span",{className:"info-value",children:"Series A"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-rocket"}),u.jsx("span",{className:"info-label",children:"Stage"}),u.jsx("span",{className:"info-value",children:"Growth"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-handshake"}),u.jsx("span",{className:"info-label",children:"Partners"}),u.jsx("span",{className:"info-value",children:"20+"})]})]})})]})}),u.jsx("section",{className:"about-section",id:"contact",children:u.jsxs("div",{className:"about-container",children:[u.jsx("span",{className:"section-label reveal",children:"Contact"}),u.jsx("h2",{className:"section-title reveal",children:"Get In Touch"}),u.jsxs("div",{className:"contact-content glass reveal reveal-delay-1",children:[u.jsx("p",{className:"contact-text",children:"Have a question, partnership idea, or just want to say hello? We'd love to hear from you."}),u.jsxs("div",{className:"contact-links",children:[u.jsxs("a",{href:"mailto:hello@framex.com",className:"contact-link",children:[u.jsx("i",{className:"fas fa-envelope"})," hello@framex.com"]}),u.jsxs("a",{href:"tel:+1234567890",className:"contact-link",children:[u.jsx("i",{className:"fas fa-phone"})," +1 (234) 567-890"]}),u.jsxs("a",{href:"#",className:"contact-link",children:[u.jsx("i",{className:"fas fa-map-marker-alt"})," San Francisco, CA"]})]})]})]})}),u.jsx("section",{className:"about-section",id:"social",children:u.jsxs("div",{className:"about-container",children:[u.jsx("span",{className:"section-label reveal",children:"Community"}),u.jsx("h2",{className:"section-title reveal",children:"Follow Our Journey"}),u.jsxs("div",{className:"social-grid reveal reveal-delay-1",children:[u.jsxs("a",{href:"#",className:"social-link glass",children:[u.jsx("i",{className:"fab fa-twitter"})," Twitter / X"]}),u.jsxs("a",{href:"#",className:"social-link glass",children:[u.jsx("i",{className:"fab fa-github"})," GitHub"]}),u.jsxs("a",{href:"#",className:"social-link glass",children:[u.jsx("i",{className:"fab fa-linkedin-in"})," LinkedIn"]}),u.jsxs("a",{href:"#",className:"social-link glass",children:[u.jsx("i",{className:"fab fa-discord"})," Discord"]}),u.jsxs("a",{href:"#",className:"social-link glass",children:[u.jsx("i",{className:"fab fa-youtube"})," YouTube"]}),u.jsxs("a",{href:"#",className:"social-link glass",children:[u.jsx("i",{className:"fab fa-instagram"})," Instagram"]})]})]})})]}),u.jsx(qf,{}),u.jsx("style",{children:`
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
      `})]})}function Hc(t,e){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a}function Cj(t,e,a,r){function o(l){return l instanceof a?l:new a(function(d){d(l)})}return new(a||(a=Promise))(function(l,d){function h(y){try{m(r.next(y))}catch(v){d(v)}}function p(y){try{m(r.throw(y))}catch(v){d(v)}}function m(y){y.done?l(y.value):o(y.value).then(h,p)}m((r=r.apply(t,e||[])).next())})}const Aj=t=>t?(...e)=>t(...e):(...e)=>fetch(...e);class Ff extends Error{constructor(e,a="FunctionsError",r){super(e),this.name=a,this.context=r}toJSON(){return{name:this.name,message:this.message,context:this.context}}}class Nj extends Ff{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class Oy extends Ff{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class Dy extends Ff{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var Xh;(function(t){t.Any="any",t.ApNortheast1="ap-northeast-1",t.ApNortheast2="ap-northeast-2",t.ApSouth1="ap-south-1",t.ApSoutheast1="ap-southeast-1",t.ApSoutheast2="ap-southeast-2",t.CaCentral1="ca-central-1",t.EuCentral1="eu-central-1",t.EuWest1="eu-west-1",t.EuWest2="eu-west-2",t.EuWest3="eu-west-3",t.SaEast1="sa-east-1",t.UsEast1="us-east-1",t.UsWest1="us-west-1",t.UsWest2="us-west-2"})(Xh||(Xh={}));class Rj{constructor(e,{headers:a={},customFetch:r,region:o=Xh.Any}={}){this.url=e,this.headers=a,this.region=o,this.fetch=Aj(r)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return Cj(this,arguments,void 0,function*(a,r={}){var o;let l,d;try{const{headers:h,method:p,body:m,signal:y,timeout:v}=r;let x={},{region:w}=r;w||(w=this.region);const j=new URL(`${this.url}/${a}`);w&&w!=="any"&&(x["x-region"]=w,j.searchParams.set("forceFunctionRegion",w));let E;m&&(h&&!Object.prototype.hasOwnProperty.call(h,"Content-Type")||!h)?typeof Blob<"u"&&m instanceof Blob||m instanceof ArrayBuffer?(x["Content-Type"]="application/octet-stream",E=m):typeof m=="string"?(x["Content-Type"]="text/plain",E=m):typeof FormData<"u"&&m instanceof FormData?E=m:(x["Content-Type"]="application/json",E=JSON.stringify(m)):m&&typeof m!="string"&&!(typeof Blob<"u"&&m instanceof Blob)&&!(m instanceof ArrayBuffer)&&!(typeof FormData<"u"&&m instanceof FormData)?E=JSON.stringify(m):E=m;let T=y;v&&(d=new AbortController,l=setTimeout(()=>d.abort(),v),y?(T=d.signal,y.addEventListener("abort",()=>d.abort())):T=d.signal);const k=yield this.fetch(j.toString(),{method:p||"POST",headers:Object.assign(Object.assign(Object.assign({},x),this.headers),h),body:E,signal:T}).catch(J=>{throw new Nj(J)}),C=k.headers.get("x-relay-error");if(C&&C==="true")throw new Oy(k);if(!k.ok)throw new Dy(k);let N=((o=k.headers.get("Content-Type"))!==null&&o!==void 0?o:"text/plain").split(";")[0].trim(),z;return N==="application/json"?z=yield k.json():N==="application/octet-stream"||N==="application/pdf"?z=yield k.blob():N==="text/event-stream"?z=k:N==="multipart/form-data"?z=yield k.formData():z=yield k.text(),{data:z,error:null,response:k}}catch(h){return{data:null,error:h,response:h instanceof Dy||h instanceof Oy?h.context:void 0}}finally{l&&clearTimeout(l)}})}}const mx=3,Ly=t=>Math.min(1e3*2**t,3e4),Oj=[520,503],gx=["GET","HEAD","OPTIONS"];var My=class extends Error{constructor(t){super(t.message),this.name="PostgrestError",this.details=t.details,this.hint=t.hint,this.code=t.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};function zy(t,e){return new Promise(a=>{if(e!=null&&e.aborted){a();return}const r=setTimeout(()=>{e==null||e.removeEventListener("abort",o),a()},t);function o(){clearTimeout(r),a()}e==null||e.addEventListener("abort",o)})}function Dj(t,e,a,r){return!(!r||a>=mx||!gx.includes(t)||!Oj.includes(e))}var Lj=class{constructor(t){var e,a,r,o,l;this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=t.method,this.url=t.url,this.headers=new Headers(t.headers),this.schema=t.schema,this.body=t.body,this.shouldThrowOnError=(e=t.shouldThrowOnError)!==null&&e!==void 0?e:!1,this.signal=t.signal,this.isMaybeSingle=(a=t.isMaybeSingle)!==null&&a!==void 0?a:!1,this.shouldStripNulls=(r=t.shouldStripNulls)!==null&&r!==void 0?r:!1,this.urlLengthLimit=(o=t.urlLengthLimit)!==null&&o!==void 0?o:8e3,this.retryEnabled=(l=t.retry)!==null&&l!==void 0?l:!0,t.fetch?this.fetch=t.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get("Accept")==="text/csv")throw new Error("stripNulls() cannot be used with csv()");return this.shouldStripNulls=!0,this}setHeader(t,e){return this.headers=new Headers(this.headers),this.headers.set(t,e),this}retry(t){return this.retryEnabled=t,this}then(t,e){var a=this;if(this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json"),this.shouldStripNulls){const d=this.headers.get("Accept");d==="application/vnd.pgrst.object+json"?this.headers.set("Accept","application/vnd.pgrst.object+json;nulls=stripped"):(!d||d==="application/json")&&this.headers.set("Accept","application/vnd.pgrst.array+json;nulls=stripped")}const r=this.fetch;let l=(async()=>{let d=0;for(;;){const m={};a.headers.forEach((v,x)=>{m[x]=v}),d>0&&(m["X-Retry-Count"]=String(d));let y;try{y=await r(a.url.toString(),{method:a.method,headers:m,body:JSON.stringify(a.body,(v,x)=>typeof x=="bigint"?x.toString():x),signal:a.signal})}catch(v){if((v==null?void 0:v.name)==="AbortError"||(v==null?void 0:v.code)==="ABORT_ERR"||!gx.includes(a.method))throw v;if(a.retryEnabled&&d<mx){const x=Ly(d);d++,await zy(x,a.signal);continue}throw v}if(Dj(a.method,y.status,d,a.retryEnabled)){var h,p;const v=(h=(p=y.headers)===null||p===void 0?void 0:p.get("Retry-After"))!==null&&h!==void 0?h:null,x=v!==null?Math.max(0,parseInt(v,10)||0)*1e3:Ly(d);await y.text(),d++,await zy(x,a.signal);continue}return await a.processResponse(y)}})();return this.shouldThrowOnError||(l=l.catch(d=>{var h;let p="",m="",y="";const v=d==null?void 0:d.cause;if(v){var x,w,j,E;const C=(x=v==null?void 0:v.message)!==null&&x!==void 0?x:"",N=(w=v==null?void 0:v.code)!==null&&w!==void 0?w:"";p=`${(j=d==null?void 0:d.name)!==null&&j!==void 0?j:"FetchError"}: ${d==null?void 0:d.message}`,p+=`

Caused by: ${(E=v==null?void 0:v.name)!==null&&E!==void 0?E:"Error"}: ${C}`,N&&(p+=` (${N})`),v!=null&&v.stack&&(p+=`
${v.stack}`)}else{var T;p=(T=d==null?void 0:d.stack)!==null&&T!==void 0?T:""}const k=this.url.toString().length;return(d==null?void 0:d.name)==="AbortError"||(d==null?void 0:d.code)==="ABORT_ERR"?(y="",m="Request was aborted (timeout or manual cancellation)",k>this.urlLengthLimit&&(m+=`. Note: Your request URL is ${k} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):((v==null?void 0:v.name)==="HeadersOverflowError"||(v==null?void 0:v.code)==="UND_ERR_HEADERS_OVERFLOW")&&(y="",m="HTTP headers exceeded server limits (typically 16KB)",k>this.urlLengthLimit&&(m+=`. Your request URL is ${k} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${(h=d==null?void 0:d.name)!==null&&h!==void 0?h:"FetchError"}: ${d==null?void 0:d.message}`,details:p,hint:m,code:y},data:null,count:null,status:0,statusText:""}})),l.then(t,e)}async processResponse(t){var e=this;let a=null,r=null,o=null,l=t.status,d=t.statusText;if(t.ok){var h,p;if(e.method!=="HEAD"){var m;const x=await t.text();if(x!=="")if(e.headers.get("Accept")==="text/csv")r=x;else if(e.headers.get("Accept")&&(!((m=e.headers.get("Accept"))===null||m===void 0)&&m.includes("application/vnd.pgrst.plan+text")))r=x;else try{r=JSON.parse(x)}catch{if(a={message:x},r=null,e.shouldThrowOnError)throw new My({message:x,details:"",hint:"",code:""})}}const y=(h=e.headers.get("Prefer"))===null||h===void 0?void 0:h.match(/count=(exact|planned|estimated)/),v=(p=t.headers.get("content-range"))===null||p===void 0?void 0:p.split("/");y&&v&&v.length>1&&(o=parseInt(v[1])),e.isMaybeSingle&&Array.isArray(r)&&(r.length>1?(a={code:"PGRST116",details:`Results contain ${r.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},r=null,o=null,l=406,d="Not Acceptable"):r.length===1?r=r[0]:r=null)}else{const y=await t.text();try{a=JSON.parse(y),Array.isArray(a)&&t.status===404&&(r=[],a=null,l=200,d="OK")}catch{t.status===404&&y===""?(l=204,d="No Content"):a={message:y}}if(a&&e.shouldThrowOnError)throw new My(a)}return{success:a===null,error:a,data:r,count:o,status:l,statusText:d}}returns(){return this}overrideTypes(){return this}},Mj=class extends Lj{throwOnError(){return super.throwOnError()}select(t){let e=!1;const a=(t??"*").split("").map(r=>/\s/.test(r)&&!e?"":(r==='"'&&(e=!e),r)).join("");return this.url.searchParams.set("select",a),this.headers.append("Prefer","return=representation"),this}order(t,{ascending:e=!0,nullsFirst:a,foreignTable:r,referencedTable:o=r}={}){const l=o?`${o}.order`:"order",d=this.url.searchParams.get(l);return this.url.searchParams.set(l,`${d?`${d},`:""}${t}.${e?"asc":"desc"}${a===void 0?"":a?".nullsfirst":".nullslast"}`),this}limit(t,{foreignTable:e,referencedTable:a=e}={}){const r=typeof a>"u"?"limit":`${a}.limit`;return this.url.searchParams.set(r,`${t}`),this}range(t,e,{foreignTable:a,referencedTable:r=a}={}){const o=typeof r>"u"?"offset":`${r}.offset`,l=typeof r>"u"?"limit":`${r}.limit`;return this.url.searchParams.set(o,`${t}`),this.url.searchParams.set(l,`${e-t+1}`),this}abortSignal(t){return this.signal=t,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:t=!1,verbose:e=!1,settings:a=!1,buffers:r=!1,wal:o=!1,format:l="text"}={}){var d;const h=[t?"analyze":null,e?"verbose":null,a?"settings":null,r?"buffers":null,o?"wal":null].filter(Boolean).join("|"),p=(d=this.headers.get("Accept"))!==null&&d!==void 0?d:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${l}; for="${p}"; options=${h};`),l==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(t){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${t}`),this}};const Uy=new RegExp("[,()]");var Pr=class extends Mj{throwOnError(){return super.throwOnError()}eq(t,e){return this.url.searchParams.append(t,`eq.${e}`),this}neq(t,e){return this.url.searchParams.append(t,`neq.${e}`),this}gt(t,e){return this.url.searchParams.append(t,`gt.${e}`),this}gte(t,e){return this.url.searchParams.append(t,`gte.${e}`),this}lt(t,e){return this.url.searchParams.append(t,`lt.${e}`),this}lte(t,e){return this.url.searchParams.append(t,`lte.${e}`),this}like(t,e){return this.url.searchParams.append(t,`like.${e}`),this}likeAllOf(t,e){return this.url.searchParams.append(t,`like(all).{${e.join(",")}}`),this}likeAnyOf(t,e){return this.url.searchParams.append(t,`like(any).{${e.join(",")}}`),this}ilike(t,e){return this.url.searchParams.append(t,`ilike.${e}`),this}ilikeAllOf(t,e){return this.url.searchParams.append(t,`ilike(all).{${e.join(",")}}`),this}ilikeAnyOf(t,e){return this.url.searchParams.append(t,`ilike(any).{${e.join(",")}}`),this}regexMatch(t,e){return this.url.searchParams.append(t,`match.${e}`),this}regexIMatch(t,e){return this.url.searchParams.append(t,`imatch.${e}`),this}is(t,e){return this.url.searchParams.append(t,`is.${e}`),this}isDistinct(t,e){return this.url.searchParams.append(t,`isdistinct.${e}`),this}in(t,e){const a=Array.from(new Set(e)).map(r=>typeof r=="string"&&Uy.test(r)?`"${r}"`:`${r}`).join(",");return this.url.searchParams.append(t,`in.(${a})`),this}notIn(t,e){const a=Array.from(new Set(e)).map(r=>typeof r=="string"&&Uy.test(r)?`"${r}"`:`${r}`).join(",");return this.url.searchParams.append(t,`not.in.(${a})`),this}contains(t,e){return typeof e=="string"?this.url.searchParams.append(t,`cs.${e}`):Array.isArray(e)?this.url.searchParams.append(t,`cs.{${e.join(",")}}`):this.url.searchParams.append(t,`cs.${JSON.stringify(e)}`),this}containedBy(t,e){return typeof e=="string"?this.url.searchParams.append(t,`cd.${e}`):Array.isArray(e)?this.url.searchParams.append(t,`cd.{${e.join(",")}}`):this.url.searchParams.append(t,`cd.${JSON.stringify(e)}`),this}rangeGt(t,e){return this.url.searchParams.append(t,`sr.${e}`),this}rangeGte(t,e){return this.url.searchParams.append(t,`nxl.${e}`),this}rangeLt(t,e){return this.url.searchParams.append(t,`sl.${e}`),this}rangeLte(t,e){return this.url.searchParams.append(t,`nxr.${e}`),this}rangeAdjacent(t,e){return this.url.searchParams.append(t,`adj.${e}`),this}overlaps(t,e){return typeof e=="string"?this.url.searchParams.append(t,`ov.${e}`):this.url.searchParams.append(t,`ov.{${e.join(",")}}`),this}textSearch(t,e,{config:a,type:r}={}){let o="";r==="plain"?o="pl":r==="phrase"?o="ph":r==="websearch"&&(o="w");const l=a===void 0?"":`(${a})`;return this.url.searchParams.append(t,`${o}fts${l}.${e}`),this}match(t){return Object.entries(t).filter(([e,a])=>a!==void 0).forEach(([e,a])=>{this.url.searchParams.append(e,`eq.${a}`)}),this}not(t,e,a){return this.url.searchParams.append(t,`not.${e}.${a}`),this}or(t,{foreignTable:e,referencedTable:a=e}={}){const r=a?`${a}.or`:"or";return this.url.searchParams.append(r,`(${t})`),this}filter(t,e,a){return this.url.searchParams.append(t,`${e}.${a}`),this}},zj=class{constructor(t,{headers:e={},schema:a,fetch:r,urlLengthLimit:o=8e3,retry:l}){this.url=t,this.headers=new Headers(e),this.schema=a,this.fetch=r,this.urlLengthLimit=o,this.retry=l}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(t,e){const{head:a=!1,count:r}=e??{},o=a?"HEAD":"GET";let l=!1;const d=(t??"*").split("").map(m=>/\s/.test(m)&&!l?"":(m==='"'&&(l=!l),m)).join(""),{url:h,headers:p}=this.cloneRequestState();return h.searchParams.set("select",d),r&&p.append("Prefer",`count=${r}`),new Pr({method:o,url:h,headers:p,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(t,{count:e,defaultToNull:a=!0}={}){var r;const o="POST",{url:l,headers:d}=this.cloneRequestState();if(e&&d.append("Prefer",`count=${e}`),a||d.append("Prefer","missing=default"),Array.isArray(t)){const h=t.reduce((p,m)=>p.concat(Object.keys(m)),[]);if(h.length>0){const p=[...new Set(h)].map(m=>`"${m}"`);l.searchParams.set("columns",p.join(","))}}return new Pr({method:o,url:l,headers:d,schema:this.schema,body:t,fetch:(r=this.fetch)!==null&&r!==void 0?r:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(t,{onConflict:e,ignoreDuplicates:a=!1,count:r,defaultToNull:o=!0}={}){var l;const d="POST",{url:h,headers:p}=this.cloneRequestState();if(p.append("Prefer",`resolution=${a?"ignore":"merge"}-duplicates`),e!==void 0&&h.searchParams.set("on_conflict",e),r&&p.append("Prefer",`count=${r}`),o||p.append("Prefer","missing=default"),Array.isArray(t)){const m=t.reduce((y,v)=>y.concat(Object.keys(v)),[]);if(m.length>0){const y=[...new Set(m)].map(v=>`"${v}"`);h.searchParams.set("columns",y.join(","))}}return new Pr({method:d,url:h,headers:p,schema:this.schema,body:t,fetch:(l=this.fetch)!==null&&l!==void 0?l:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(t,{count:e}={}){var a;const r="PATCH",{url:o,headers:l}=this.cloneRequestState();return e&&l.append("Prefer",`count=${e}`),new Pr({method:r,url:o,headers:l,schema:this.schema,body:t,fetch:(a=this.fetch)!==null&&a!==void 0?a:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:t}={}){var e;const a="DELETE",{url:r,headers:o}=this.cloneRequestState();return t&&o.append("Prefer",`count=${t}`),new Pr({method:a,url:r,headers:o,schema:this.schema,fetch:(e=this.fetch)!==null&&e!==void 0?e:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};function po(t){"@babel/helpers - typeof";return po=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},po(t)}function Uj(t,e){if(po(t)!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var r=a.call(t,e);if(po(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Bj(t){var e=Uj(t,"string");return po(e)=="symbol"?e:e+""}function Pj(t,e,a){return(e=Bj(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function By(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),a.push.apply(a,r)}return a}function Gl(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?By(Object(a),!0).forEach(function(r){Pj(t,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):By(Object(a)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(a,r))})}return t}var Vj=class yx{constructor(e,{headers:a={},schema:r,fetch:o,timeout:l,urlLengthLimit:d=8e3,retry:h}={}){this.url=e,this.headers=new Headers(a),this.schemaName=r,this.urlLengthLimit=d;const p=o??globalThis.fetch;l!==void 0&&l>0?this.fetch=(m,y)=>{const v=new AbortController,x=setTimeout(()=>v.abort(),l),w=y==null?void 0:y.signal;if(w){if(w.aborted)return clearTimeout(x),p(m,y);const j=()=>{clearTimeout(x),v.abort()};return w.addEventListener("abort",j,{once:!0}),p(m,Gl(Gl({},y),{},{signal:v.signal})).finally(()=>{clearTimeout(x),w.removeEventListener("abort",j)})}return p(m,Gl(Gl({},y),{},{signal:v.signal})).finally(()=>clearTimeout(x))}:this.fetch=p,this.retry=h}from(e){if(!e||typeof e!="string"||e.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new zj(new URL(`${this.url}/${e}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(e){return new yx(this.url,{headers:this.headers,schema:e,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}rpc(e,a={},{head:r=!1,get:o=!1,count:l}={}){var d;let h;const p=new URL(`${this.url}/rpc/${e}`);let m;const y=w=>w!==null&&typeof w=="object"&&(!Array.isArray(w)||w.some(y)),v=r&&Object.values(a).some(y);v?(h="POST",m=a):r||o?(h=r?"HEAD":"GET",Object.entries(a).filter(([w,j])=>j!==void 0).map(([w,j])=>[w,Array.isArray(j)?`{${j.join(",")}}`:`${j}`]).forEach(([w,j])=>{p.searchParams.append(w,j)})):(h="POST",m=a);const x=new Headers(this.headers);return v?x.set("Prefer",l?`count=${l},return=minimal`:"return=minimal"):l&&x.set("Prefer",`count=${l}`),new Pr({method:h,url:p,headers:x,schema:this.schemaName,body:m,fetch:(d=this.fetch)!==null&&d!==void 0?d:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};class $j{constructor(){}static detectEnvironment(){var e;if(typeof WebSocket<"u")return{type:"native",wsConstructor:WebSocket};const a=globalThis;if(typeof globalThis<"u"&&typeof a.WebSocket<"u")return{type:"native",wsConstructor:a.WebSocket};const r=typeof global<"u"?global:void 0;if(r&&typeof r.WebSocket<"u")return{type:"native",wsConstructor:r.WebSocket};if(typeof globalThis<"u"&&typeof a.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&a.EdgeRuntime||typeof navigator<"u"&&(!((e=navigator.userAgent)===null||e===void 0)&&e.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};const o=globalThis.process;if(o){const l=o.versions;if(l&&l.node){const d=l.node,h=parseInt(d.replace(/^v/,"").split(".")[0]);return h>=22?typeof globalThis.WebSocket<"u"?{type:"native",wsConstructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${h} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${h} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const e=this.detectEnvironment();if(e.wsConstructor)return e.wsConstructor;let a=e.error||"WebSocket not supported in this environment.";throw e.workaround&&(a+=`

Suggested solution: ${e.workaround}`),new Error(a)}static isWebSocketSupported(){try{const e=this.detectEnvironment();return e.type==="native"||e.type==="ws"}catch{return!1}}}const Hj="2.108.2",Ij=`realtime-js/${Hj}`,qj="1.0.0",vx="2.0.0",Fj=vx,Gj=1e4,Kj=100,ci={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},bx={close:"phx_close",error:"phx_error",join:"phx_join",leave:"phx_leave",access_token:"access_token"},Jh={connecting:"connecting",closing:"closing",closed:"closed"};class Yj{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=e??[]}encode(e,a){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&typeof e.payload.event=="string")return a(this._binaryEncodeUserBroadcastPush(e));let r=[e.join_ref,e.ref,e.topic,e.event,e.payload];return a(JSON.stringify(r))}_binaryEncodeUserBroadcastPush(e){var a;return this._isArrayBuffer((a=e.payload)===null||a===void 0?void 0:a.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){var a,r;const o=(r=(a=e.payload)===null||a===void 0?void 0:a.payload)!==null&&r!==void 0?r:new ArrayBuffer(0);return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,o)}_encodeJsonUserBroadcastPush(e){var a,r;const o=(r=(a=e.payload)===null||a===void 0?void 0:a.payload)!==null&&r!==void 0?r:{},d=new TextEncoder().encode(JSON.stringify(o)).buffer;return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,d)}_encodeUserBroadcastPush(e,a,r){var o,l;const d=e.topic,h=(o=e.ref)!==null&&o!==void 0?o:"",p=(l=e.join_ref)!==null&&l!==void 0?l:"",m=e.payload.event,y=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},v=Object.keys(y).length===0?"":JSON.stringify(y);if(p.length>255)throw new Error(`joinRef length ${p.length} exceeds maximum of 255`);if(h.length>255)throw new Error(`ref length ${h.length} exceeds maximum of 255`);if(d.length>255)throw new Error(`topic length ${d.length} exceeds maximum of 255`);if(m.length>255)throw new Error(`userEvent length ${m.length} exceeds maximum of 255`);if(v.length>255)throw new Error(`metadata length ${v.length} exceeds maximum of 255`);const x=this.USER_BROADCAST_PUSH_META_LENGTH+p.length+h.length+d.length+m.length+v.length,w=new ArrayBuffer(this.HEADER_LENGTH+x);let j=new DataView(w),E=0;j.setUint8(E++,this.KINDS.userBroadcastPush),j.setUint8(E++,p.length),j.setUint8(E++,h.length),j.setUint8(E++,d.length),j.setUint8(E++,m.length),j.setUint8(E++,v.length),j.setUint8(E++,a),Array.from(p,k=>j.setUint8(E++,k.charCodeAt(0))),Array.from(h,k=>j.setUint8(E++,k.charCodeAt(0))),Array.from(d,k=>j.setUint8(E++,k.charCodeAt(0))),Array.from(m,k=>j.setUint8(E++,k.charCodeAt(0))),Array.from(v,k=>j.setUint8(E++,k.charCodeAt(0)));var T=new Uint8Array(w.byteLength+r.byteLength);return T.set(new Uint8Array(w),0),T.set(new Uint8Array(r),w.byteLength),T.buffer}decode(e,a){if(this._isArrayBuffer(e)){let r=this._binaryDecode(e);return a(r)}if(typeof e=="string"){const r=JSON.parse(e),[o,l,d,h,p]=r;return a({join_ref:o,ref:l,topic:d,event:h,payload:p})}return a({})}_binaryDecode(e){const a=new DataView(e),r=a.getUint8(0),o=new TextDecoder;switch(r){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(e,a,o)}}_decodeUserBroadcast(e,a,r){const o=a.getUint8(1),l=a.getUint8(2),d=a.getUint8(3),h=a.getUint8(4);let p=this.HEADER_LENGTH+4;const m=r.decode(e.slice(p,p+o));p=p+o;const y=r.decode(e.slice(p,p+l));p=p+l;const v=r.decode(e.slice(p,p+d));p=p+d;const x=e.slice(p,e.byteLength),w=h===this.JSON_ENCODING?JSON.parse(r.decode(x)):x,j={type:this.BROADCAST_EVENT,event:y,payload:w};return d>0&&(j.meta=JSON.parse(v)),{join_ref:null,ref:null,topic:m,event:this.BROADCAST_EVENT,payload:j}}_isArrayBuffer(e){var a;return e instanceof ArrayBuffer||((a=e==null?void 0:e.constructor)===null||a===void 0?void 0:a.name)==="ArrayBuffer"}_pick(e,a){return!e||typeof e!="object"?{}:Object.fromEntries(Object.entries(e).filter(([r])=>a.includes(r)))}}var at;(function(t){t.abstime="abstime",t.bool="bool",t.date="date",t.daterange="daterange",t.float4="float4",t.float8="float8",t.int2="int2",t.int4="int4",t.int4range="int4range",t.int8="int8",t.int8range="int8range",t.json="json",t.jsonb="jsonb",t.money="money",t.numeric="numeric",t.oid="oid",t.reltime="reltime",t.text="text",t.time="time",t.timestamp="timestamp",t.timestamptz="timestamptz",t.timetz="timetz",t.tsrange="tsrange",t.tstzrange="tstzrange"})(at||(at={}));const Py=(t,e,a={})=>{var r;const o=(r=a.skipTypes)!==null&&r!==void 0?r:[];return e?Object.keys(e).reduce((l,d)=>(l[d]=Wj(d,t,e,o),l),{}):{}},Wj=(t,e,a,r)=>{const o=e.find(h=>h.name===t),l=o==null?void 0:o.type,d=a[t];return l&&!r.includes(l)?xx(l,d):Qh(d)},xx=(t,e)=>{if(t.charAt(0)==="_"){const a=t.slice(1,t.length);return Zj(e,a)}switch(t){case at.bool:return Xj(e);case at.float4:case at.float8:case at.int2:case at.int4:case at.int8:case at.numeric:case at.oid:return Jj(e);case at.json:case at.jsonb:return Qj(e);case at.timestamp:return e_(e);case at.abstime:case at.date:case at.daterange:case at.int4range:case at.int8range:case at.money:case at.reltime:case at.text:case at.time:case at.timestamptz:case at.timetz:case at.tsrange:case at.tstzrange:return Qh(e);default:return Qh(e)}},Qh=t=>t,Xj=t=>{switch(t){case"t":return!0;case"f":return!1;default:return t}},Jj=t=>{if(typeof t=="string"){const e=parseFloat(t);if(!Number.isNaN(e))return e}return t},Qj=t=>{if(typeof t=="string")try{return JSON.parse(t)}catch{return t}return t},Zj=(t,e)=>{if(typeof t!="string")return t;const a=t.length-1,r=t[a];if(t[0]==="{"&&r==="}"){let l;const d=t.slice(1,a);try{l=JSON.parse("["+d+"]")}catch{l=d?d.split(","):[]}return l.map(h=>xx(e,h))}return t},e_=t=>typeof t=="string"?t.replace(" ","T"):t,wx=t=>{const e=new URL(t);return e.protocol=e.protocol.replace(/^ws/i,"http"),e.pathname=e.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),e.pathname===""||e.pathname==="/"?e.pathname="/api/broadcast":e.pathname=e.pathname+"/api/broadcast",e.href};var io=t=>typeof t=="function"?t:function(){return t},t_=typeof self<"u"?self:null,Vr=typeof window<"u"?window:null,aa=t_||Vr||globalThis,n_="2.0.0",a_=1e4,i_=1e3,ia={connecting:0,open:1,closing:2,closed:3},on={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},Ra={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave"},Zh={longpoll:"longpoll",websocket:"websocket"},r_={complete:4},ef="base64url.bearer.phx.",Kl=class{constructor(t,e,a,r){this.channel=t,this.event=e,this.payload=a||function(){return{}},this.receivedResp=null,this.timeout=r,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(t){this.timeout=t,this.reset(),this.send()}send(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(t,e){return this.hasReceived(t)&&e(this.receivedResp.response),this.recHooks.push({status:t,callback:e}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:t,response:e,_ref:a}){this.recHooks.filter(r=>r.status===t).forEach(r=>r.callback(e))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,t=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=t,this.matchReceive(t)}),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}hasReceived(t){return this.receivedResp&&this.receivedResp.status===t}trigger(t,e){this.channel.trigger(this.refEvent,{status:t,response:e})}},Sx=class{constructor(t,e){this.callback=t,this.timerCalc=e,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}},s_=class{constructor(t,e,a){this.state=on.closed,this.topic=t,this.params=io(e||{}),this.socket=a,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new Kl(this,Ra.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new Sx(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive("ok",()=>{this.state=on.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(r=>r.send()),this.pushBuffer=[]}),this.joinPush.receive("error",r=>{this.state=on.errored,this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,r),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log("channel",`close ${this.topic}`),this.state=on.closed,this.socket.remove(this)}),this.onError(r=>{this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,r),this.isJoining()&&this.joinPush.reset(),this.state=on.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive("timeout",()=>{this.socket.hasLogger()&&this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),new Kl(this,Ra.leave,io({}),this.timeout).send(),this.state=on.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(Ra.reply,(r,o)=>{this.trigger(this.replyEventName(o),r)})}join(t=this.timeout){if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=t,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(t=>t.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=on.closed,this.bindings=[]}onClose(t){this.on(Ra.close,t)}onError(t){return this.on(Ra.error,e=>t(e))}on(t,e){let a=this.bindingRef++;return this.bindings.push({event:t,ref:a,callback:e}),a}off(t,e){this.bindings=this.bindings.filter(a=>!(a.event===t&&(typeof e>"u"||e===a.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(t,e,a=this.timeout){if(e=e||{},!this.joinedOnce)throw new Error(`tried to push '${t}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let r=new Kl(this,t,function(){return e},a);return this.canPush()?r.send():(r.startTimeout(),this.pushBuffer.push(r)),r}leave(t=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=on.leaving;let e=()=>{this.socket.hasLogger()&&this.socket.log("channel",`leave ${this.topic}`),this.trigger(Ra.close,"leave")},a=new Kl(this,Ra.leave,io({}),t);return a.receive("ok",()=>e()).receive("timeout",()=>e()),a.send(),this.canPush()||a.trigger("ok",{}),a}onMessage(t,e,a){return e}filterBindings(t,e,a){return!0}isMember(t,e,a,r){return this.topic!==t?!1:r&&r!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:t,event:e,payload:a,joinRef:r}),!1):!0}joinRef(){return this.joinPush.ref}rejoin(t=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=on.joining,this.joinPush.resend(t))}trigger(t,e,a,r){let o=this.onMessage(t,e,a,r);if(e&&!o)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");let l=this.bindings.filter(d=>d.event===t&&this.filterBindings(d,e,a));for(let d=0;d<l.length;d++)l[d].callback(o,a,r||this.joinRef())}replyEventName(t){return`chan_reply_${t}`}isClosed(){return this.state===on.closed}isErrored(){return this.state===on.errored}isJoined(){return this.state===on.joined}isJoining(){return this.state===on.joining}isLeaving(){return this.state===on.leaving}},xc=class{static request(t,e,a,r,o,l,d){if(aa.XDomainRequest){let h=new aa.XDomainRequest;return this.xdomainRequest(h,t,e,r,o,l,d)}else if(aa.XMLHttpRequest){let h=new aa.XMLHttpRequest;return this.xhrRequest(h,t,e,a,r,o,l,d)}else{if(aa.fetch&&aa.AbortController)return this.fetchRequest(t,e,a,r,o,l,d);throw new Error("No suitable XMLHttpRequest implementation found")}}static fetchRequest(t,e,a,r,o,l,d){let h={method:t,headers:a,body:r},p=null;return o&&(p=new AbortController,setTimeout(()=>p.abort(),o),h.signal=p.signal),aa.fetch(e,h).then(m=>m.text()).then(m=>this.parseJSON(m)).then(m=>d&&d(m)).catch(m=>{m.name==="AbortError"&&l?l():d&&d(null)}),p}static xdomainRequest(t,e,a,r,o,l,d){return t.timeout=o,t.open(e,a),t.onload=()=>{let h=this.parseJSON(t.responseText);d&&d(h)},l&&(t.ontimeout=l),t.onprogress=()=>{},t.send(r),t}static xhrRequest(t,e,a,r,o,l,d,h){t.open(e,a,!0),t.timeout=l;for(let[p,m]of Object.entries(r))t.setRequestHeader(p,m);return t.onerror=()=>h&&h(null),t.onreadystatechange=()=>{if(t.readyState===r_.complete&&h){let p=this.parseJSON(t.responseText);h(p)}},d&&(t.ontimeout=d),t.send(o),t}static parseJSON(t){if(!t||t==="")return null;try{return JSON.parse(t)}catch{return console&&console.log("failed to parse JSON response",t),null}}static serialize(t,e){let a=[];for(var r in t){if(!Object.prototype.hasOwnProperty.call(t,r))continue;let o=e?`${e}[${r}]`:r,l=t[r];typeof l=="object"?a.push(this.serialize(l,o)):a.push(encodeURIComponent(o)+"="+encodeURIComponent(l))}return a.join("&")}static appendParams(t,e){if(Object.keys(e).length===0)return t;let a=t.match(/\?/)?"&":"?";return`${t}${a}${this.serialize(e)}`}},o_=t=>{let e="",a=new Uint8Array(t),r=a.byteLength;for(let o=0;o<r;o++)e+=String.fromCharCode(a[o]);return btoa(e)},Mr=class{constructor(t,e){e&&e.length===2&&e[1].startsWith(ef)&&(this.authToken=atob(e[1].slice(ef.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(t),this.readyState=ia.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(t){return t.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+Zh.websocket),"$1/"+Zh.longpoll)}endpointURL(){return xc.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(t,e,a){this.close(t,e,a),this.readyState=ia.connecting}ontimeout(){this.onerror("timeout"),this.closeAndRetry(1005,"timeout",!1)}isActive(){return this.readyState===ia.open||this.readyState===ia.connecting}poll(){const t={Accept:"application/json"};this.authToken&&(t["X-Phoenix-AuthToken"]=this.authToken),this.ajax("GET",t,null,()=>this.ontimeout(),e=>{if(e){var{status:a,token:r,messages:o}=e;if(a===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,"session_gone",!1);return}this.token=r}else a=0;switch(a){case 200:o.forEach(l=>{setTimeout(()=>this.onmessage({data:l}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=ia.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,"forbidden",!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,"internal server error",500);break;default:throw new Error(`unhandled poll status ${a}`)}})}send(t){typeof t!="string"&&(t=o_(t)),this.currentBatch?this.currentBatch.push(t):this.awaitingBatchAck?this.batchBuffer.push(t):(this.currentBatch=[t],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(t){this.awaitingBatchAck=!0,this.ajax("POST",{"Content-Type":"application/x-ndjson"},t.join(`
`),()=>this.onerror("timeout"),e=>{this.awaitingBatchAck=!1,!e||e.status!==200?(this.onerror(e&&e.status),this.closeAndRetry(1011,"internal server error",!1)):this.batchBuffer.length>0&&(this.batchSend(this.batchBuffer),this.batchBuffer=[])})}close(t,e,a){for(let o of this.reqs)o.abort();this.readyState=ia.closed;let r=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:t,reason:e,wasClean:a});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<"u"?this.onclose(new CloseEvent("close",r)):this.onclose(r)}ajax(t,e,a,r,o){let l,d=()=>{this.reqs.delete(l),r()};l=xc.request(t,this.endpointURL(),e,a,this.timeout,d,h=>{this.reqs.delete(l),this.isActive()&&o(h)}),this.reqs.add(l)}},l_=class eo{constructor(e,a={}){let r=a.events||{state:"presence_state",diff:"presence_diff"};this.state={},this.pendingDiffs=[],this.channel=e,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(r.state,o=>{let{onJoin:l,onLeave:d,onSync:h}=this.caller;this.joinRef=this.channel.joinRef(),this.state=eo.syncState(this.state,o,l,d),this.pendingDiffs.forEach(p=>{this.state=eo.syncDiff(this.state,p,l,d)}),this.pendingDiffs=[],h()}),this.channel.on(r.diff,o=>{let{onJoin:l,onLeave:d,onSync:h}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(o):(this.state=eo.syncDiff(this.state,o,l,d),h())})}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}list(e){return eo.list(this.state,e)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(e,a,r,o){let l=this.clone(e),d={},h={};return this.map(l,(p,m)=>{a[p]||(h[p]=m)}),this.map(a,(p,m)=>{let y=l[p];if(y){let v=m.metas.map(E=>E.phx_ref),x=y.metas.map(E=>E.phx_ref),w=m.metas.filter(E=>x.indexOf(E.phx_ref)<0),j=y.metas.filter(E=>v.indexOf(E.phx_ref)<0);w.length>0&&(d[p]=m,d[p].metas=w),j.length>0&&(h[p]=this.clone(y),h[p].metas=j)}else d[p]=m}),this.syncDiff(l,{joins:d,leaves:h},r,o)}static syncDiff(e,a,r,o){let{joins:l,leaves:d}=this.clone(a);return r||(r=function(){}),o||(o=function(){}),this.map(l,(h,p)=>{let m=e[h];if(e[h]=this.clone(p),m){let y=e[h].metas.map(x=>x.phx_ref),v=m.metas.filter(x=>y.indexOf(x.phx_ref)<0);e[h].metas.unshift(...v)}r(h,m,p)}),this.map(d,(h,p)=>{let m=e[h];if(!m)return;let y=p.metas.map(v=>v.phx_ref);m.metas=m.metas.filter(v=>y.indexOf(v.phx_ref)<0),o(h,m,p),m.metas.length===0&&delete e[h]}),e}static list(e,a){return a||(a=function(r,o){return o}),this.map(e,(r,o)=>a(r,o))}static map(e,a){return Object.getOwnPropertyNames(e).map(r=>a(r,e[r]))}static clone(e){return JSON.parse(JSON.stringify(e))}},Yl={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(t,e){if(t.payload.constructor===ArrayBuffer)return e(this.binaryEncode(t));{let a=[t.join_ref,t.ref,t.topic,t.event,t.payload];return e(JSON.stringify(a))}},decode(t,e){if(t.constructor===ArrayBuffer)return e(this.binaryDecode(t));{let[a,r,o,l,d]=JSON.parse(t);return e({join_ref:a,ref:r,topic:o,event:l,payload:d})}},binaryEncode(t){let{join_ref:e,ref:a,event:r,topic:o,payload:l}=t,d=this.META_LENGTH+e.length+a.length+o.length+r.length,h=new ArrayBuffer(this.HEADER_LENGTH+d),p=new DataView(h),m=0;p.setUint8(m++,this.KINDS.push),p.setUint8(m++,e.length),p.setUint8(m++,a.length),p.setUint8(m++,o.length),p.setUint8(m++,r.length),Array.from(e,v=>p.setUint8(m++,v.charCodeAt(0))),Array.from(a,v=>p.setUint8(m++,v.charCodeAt(0))),Array.from(o,v=>p.setUint8(m++,v.charCodeAt(0))),Array.from(r,v=>p.setUint8(m++,v.charCodeAt(0)));var y=new Uint8Array(h.byteLength+l.byteLength);return y.set(new Uint8Array(h),0),y.set(new Uint8Array(l),h.byteLength),y.buffer},binaryDecode(t){let e=new DataView(t),a=e.getUint8(0),r=new TextDecoder;switch(a){case this.KINDS.push:return this.decodePush(t,e,r);case this.KINDS.reply:return this.decodeReply(t,e,r);case this.KINDS.broadcast:return this.decodeBroadcast(t,e,r)}},decodePush(t,e,a){let r=e.getUint8(1),o=e.getUint8(2),l=e.getUint8(3),d=this.HEADER_LENGTH+this.META_LENGTH-1,h=a.decode(t.slice(d,d+r));d=d+r;let p=a.decode(t.slice(d,d+o));d=d+o;let m=a.decode(t.slice(d,d+l));d=d+l;let y=t.slice(d,t.byteLength);return{join_ref:h,ref:null,topic:p,event:m,payload:y}},decodeReply(t,e,a){let r=e.getUint8(1),o=e.getUint8(2),l=e.getUint8(3),d=e.getUint8(4),h=this.HEADER_LENGTH+this.META_LENGTH,p=a.decode(t.slice(h,h+r));h=h+r;let m=a.decode(t.slice(h,h+o));h=h+o;let y=a.decode(t.slice(h,h+l));h=h+l;let v=a.decode(t.slice(h,h+d));h=h+d;let x=t.slice(h,t.byteLength),w={status:v,response:x};return{join_ref:p,ref:m,topic:y,event:Ra.reply,payload:w}},decodeBroadcast(t,e,a){let r=e.getUint8(1),o=e.getUint8(2),l=this.HEADER_LENGTH+2,d=a.decode(t.slice(l,l+r));l=l+r;let h=a.decode(t.slice(l,l+o));l=l+o;let p=t.slice(l,t.byteLength);return{join_ref:null,ref:null,topic:d,event:h,payload:p}}},c_=class{constructor(t,e={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=e.timeout||a_,this.transport=e.transport||aa.WebSocket||Mr,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=e.longPollFallbackMs,this.fallbackTimer=null;let a=null;try{a=aa&&aa.sessionStorage}catch{}this.sessionStore=e.sessionStorage||a,this.establishedConnections=0,this.defaultEncoder=Yl.encode.bind(Yl),this.defaultDecoder=Yl.decode.bind(Yl),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=e.binaryType||"arraybuffer",this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport!==Mr?(this.encode=e.encode||this.defaultEncoder,this.decode=e.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder);let r=null;Vr&&Vr.addEventListener&&(Vr.addEventListener("pagehide",o=>{this.conn&&(this.disconnect(),r=this.connectClock)}),Vr.addEventListener("pageshow",o=>{r===this.connectClock&&(r=null,this.connect())}),Vr.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=e.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=e.autoSendHeartbeat??!0,this.heartbeatCallback=e.heartbeatCallback??(()=>{}),this.rejoinAfterMs=o=>e.rejoinAfterMs?e.rejoinAfterMs(o):[1e3,2e3,5e3][o-1]||1e4,this.reconnectAfterMs=o=>e.reconnectAfterMs?e.reconnectAfterMs(o):[10,50,100,150,200,250,500,1e3,2e3][o-1]||5e3,this.logger=e.logger||null,!this.logger&&e.debug&&(this.logger=(o,l,d)=>{console.log(`${o}: ${l}`,d)}),this.longpollerTimeout=e.longpollerTimeout||2e4,this.params=io(e.params||{}),this.endPoint=`${t}/${Zh.websocket}`,this.vsn=e.vsn||n_,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new Sx(()=>{if(this.pageHidden){this.log("Not reconnecting as page is hidden!"),this.teardown();return}this.teardown(async()=>{e.beforeReconnect&&await e.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=e.authToken}getLongPollTransport(){return Mr}replaceTransport(t){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&(this.conn.close(),this.conn=null),this.transport=t}protocol(){return location.protocol.match(/^https/)?"wss":"ws"}endPointURL(){let t=xc.appendParams(xc.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return t.charAt(0)!=="/"?t:t.charAt(1)==="/"?`${this.protocol()}:${t}`:`${this.protocol()}://${location.host}${t}`}disconnect(t,e,a){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,t&&t()},e,a)}connect(t){t&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=io(t)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==Mr?this.connectWithFallback(Mr,this.longPollFallbackMs):this.transportConnect())}log(t,e,a){this.logger&&this.logger(t,e,a)}hasLogger(){return this.logger!==null}onOpen(t){let e=this.makeRef();return this.stateChangeCallbacks.open.push([e,t]),e}onClose(t){let e=this.makeRef();return this.stateChangeCallbacks.close.push([e,t]),e}onError(t){let e=this.makeRef();return this.stateChangeCallbacks.error.push([e,t]),e}onMessage(t){let e=this.makeRef();return this.stateChangeCallbacks.message.push([e,t]),e}onHeartbeat(t){this.heartbeatCallback=t}ping(t){if(!this.isConnected())return!1;let e=this.makeRef(),a=Date.now();this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:e});let r=this.onMessage(o=>{o.ref===e&&(this.off([r]),t(Date.now()-a))});return!0}transportName(t){switch(t){case Mr:return"LongPoll";default:return t.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let t;this.authToken&&(t=["phoenix",`${ef}${btoa(this.authToken).replace(/=/g,"")}`]),this.conn=new this.transport(this.endPointURL(),t),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=e=>this.onConnError(e),this.conn.onmessage=e=>this.onConnMessage(e),this.conn.onclose=e=>this.onConnClose(e)}getSession(t){return this.sessionStore&&this.sessionStore.getItem(t)}storeSession(t,e){this.sessionStore&&this.sessionStore.setItem(t,e)}connectWithFallback(t,e=2500){clearTimeout(this.fallbackTimer);let a=!1,r=!0,o,l,d=this.transportName(t),h=p=>{this.log("transport",`falling back to ${d}...`,p),this.off([o,l]),r=!1,this.replaceTransport(t),this.transportConnect()};if(this.getSession(`phx:fallback:${d}`))return h("memorized");this.fallbackTimer=setTimeout(h,e),l=this.onError(p=>{this.log("transport","error",p),r&&!a&&(clearTimeout(this.fallbackTimer),h(p))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(a=!0,!r){let p=this.transportName(t);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${p}`,"true"),this.log("transport",`established ${p} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(h,e),this.ping(p=>{this.log("transport","connected to primary after",p),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log("transport",`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks("open")}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(t){this.log("error","error in heartbeat callback",t)}this.triggerChanError(new Error("heartbeat timeout")),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),i_,"heartbeat timeout")}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(t,e,a){if(!this.conn)return t&&t();const r=this.conn;this.waitForBufferDone(r,()=>{e?r.close(e,a||""):r.close(),this.waitForSocketClosed(r,()=>{this.conn===r&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),t&&t()})})}waitForBufferDone(t,e,a=1){if(a===5||!t.bufferedAmount){e();return}setTimeout(()=>{this.waitForBufferDone(t,e,a+1)},150*a)}waitForSocketClosed(t,e,a=1){if(a===5||t.readyState===ia.closed){e();return}setTimeout(()=>{this.waitForSocketClosed(t,e,a+1)},150*a)}onConnClose(t){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log("transport","close",t),this.triggerChanError(t),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks("close",t)}onConnError(t){this.hasLogger()&&this.log("transport","error",t);let e=this.transport,a=this.establishedConnections;this.triggerStateCallbacks("error",t,e,a),(e===this.transport||a>0)&&this.triggerChanError(t)}triggerChanError(t){this.channels.forEach(e=>{e.isErrored()||e.isLeaving()||e.isClosed()||e.trigger(Ra.error,t)})}connectionState(){switch(this.conn&&this.conn.readyState){case ia.connecting:return"connecting";case ia.open:return"open";case ia.closing:return"closing";default:return"closed"}}isConnected(){return this.connectionState()==="open"}remove(t){this.off(t.stateChangeRefs),this.channels=this.channels.filter(e=>e!==t)}off(t){for(let e in this.stateChangeCallbacks)this.stateChangeCallbacks[e]=this.stateChangeCallbacks[e].filter(([a])=>t.indexOf(a)===-1)}channel(t,e={}){let a=new s_(t,e,this);return this.channels.push(a),a}push(t){if(this.hasLogger()){let{topic:e,event:a,payload:r,ref:o,join_ref:l}=t;this.log("push",`${e} ${a} (${l}, ${o})`,r)}this.isConnected()?this.encode(t,e=>this.conn.send(e)):this.sendBuffer.push(()=>this.encode(t,e=>this.conn.send(e)))}makeRef(){let t=this.ref+1;return t===this.ref?this.ref=0:this.ref=t,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(t){this.log("error","error in heartbeat callback",t)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(t){this.log("error","error in heartbeat callback",t)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(t=>t()),this.sendBuffer=[])}onConnMessage(t){this.decode(t.data,e=>{let{topic:a,event:r,payload:o,ref:l,join_ref:d}=e;if(l&&l===this.pendingHeartbeatRef){const h=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(o.status==="ok"?"ok":"error",h)}catch(p){this.log("error","error in heartbeat callback",p)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log("receive",`${o.status||""} ${a} ${r} ${l&&"("+l+")"||""}`.trim(),o);for(let h=0;h<this.channels.length;h++){const p=this.channels[h];p.isMember(a,r,o,d)&&p.trigger(r,o,l,d)}this.triggerStateCallbacks("message",e)})}triggerStateCallbacks(t,...e){try{this.stateChangeCallbacks[t].forEach(([a,r])=>{try{r(...e)}catch(o){this.log("error",`error in ${t} callback`,o)}})}catch(a){this.log("error",`error triggering ${t} callbacks`,a)}}leaveOpenTopic(t){let e=this.channels.find(a=>a.topic===t&&(a.isJoined()||a.isJoining()));e&&(this.hasLogger()&&this.log("transport",`leaving duplicate topic "${t}"`),e.leave())}};class ro{constructor(e,a){const r=d_(a);this.presence=new l_(e.getChannel(),r),this.presence.onJoin((o,l,d)=>{const h=ro.onJoinPayload(o,l,d);e.getChannel().trigger("presence",h)}),this.presence.onLeave((o,l,d)=>{const h=ro.onLeavePayload(o,l,d);e.getChannel().trigger("presence",h)}),this.presence.onSync(()=>{e.getChannel().trigger("presence",{event:"sync"})})}get state(){return ro.transformState(this.presence.state)}static transformState(e){return e=u_(e),Object.getOwnPropertyNames(e).reduce((a,r)=>{const o=e[r];return a[r]=lc(o),a},{})}static onJoinPayload(e,a,r){const o=Vy(a),l=lc(r);return{event:"join",key:e,currentPresences:o,newPresences:l}}static onLeavePayload(e,a,r){const o=Vy(a),l=lc(r);return{event:"leave",key:e,currentPresences:o,leftPresences:l}}}function lc(t){return t.metas.map(e=>(e.presence_ref=e.phx_ref,delete e.phx_ref,delete e.phx_ref_prev,e))}function u_(t){return JSON.parse(JSON.stringify(t))}function d_(t){return(t==null?void 0:t.events)&&{events:t.events}}function Vy(t){return t!=null&&t.metas?lc(t):[]}var $y;(function(t){t.SYNC="sync",t.JOIN="join",t.LEAVE="leave"})($y||($y={}));class h_{get state(){return this.presenceAdapter.state}constructor(e,a){this.channel=e,this.presenceAdapter=new ro(this.channel.channelAdapter,a)}}function f_(t){if(t instanceof Error)return t;if(typeof t=="string")return new Error(t);if(t&&typeof t=="object"){const e=t;if(typeof e.code=="number"){const a=typeof e.reason=="string"&&e.reason?` (${e.reason})`:"";return new Error(`socket closed: ${e.code}${a}`,{cause:t})}return new Error("channel error: transport failure",{cause:t})}return new Error("channel error: connection lost")}class p_{constructor(e,a,r){const o=m_(r);this.channel=e.getSocket().channel(a,o),this.socket=e}get state(){return this.channel.state}set state(e){this.channel.state=e}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(e,a){return this.channel.on(e,a)}off(e,a){this.channel.off(e,a)}subscribe(e){return this.channel.join(e)}unsubscribe(e){return this.channel.leave(e)}teardown(){this.channel.teardown()}onClose(e){this.channel.onClose(e)}onError(e){return this.channel.onError(e)}push(e,a,r){let o;try{o=this.channel.push(e,a,r)}catch{throw new Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>Kj){const l=this.channel.pushBuffer.shift();l.cancelTimeout(),this.socket.log("channel",`discarded push due to buffer overflow: ${l.event}`,l.payload())}return o}updateJoinPayload(e){const a=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},a),e)}canPush(){return this.socket.isConnected()&&this.state===ci.joined}isJoined(){return this.state===ci.joined}isJoining(){return this.state===ci.joining}isClosed(){return this.state===ci.closed}isLeaving(){return this.state===ci.leaving}updateFilterBindings(e){this.channel.filterBindings=e}updatePayloadTransform(e){this.channel.onMessage=e}getChannel(){return this.channel}}function m_(t){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},t.config)}}var Hy;(function(t){t.ALL="*",t.INSERT="INSERT",t.UPDATE="UPDATE",t.DELETE="DELETE"})(Hy||(Hy={}));var Ir;(function(t){t.BROADCAST="broadcast",t.PRESENCE="presence",t.POSTGRES_CHANGES="postgres_changes",t.SYSTEM="system"})(Ir||(Ir={}));var Oa;(function(t){t.SUBSCRIBED="SUBSCRIBED",t.TIMED_OUT="TIMED_OUT",t.CLOSED="CLOSED",t.CHANNEL_ERROR="CHANNEL_ERROR"})(Oa||(Oa={}));class so{get state(){return this.channelAdapter.state}set state(e){this.channelAdapter.state=e}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(e,a={config:{}},r){var o,l;if(this.topic=e,this.params=a,this.socket=r,this.bindings={},this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},a.config),this.channelAdapter=new p_(this.socket.socketAdapter,e,this.params),this.presence=new h_(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=wx(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&(!((l=(o=this.params.config)===null||o===void 0?void 0:o.broadcast)===null||l===void 0)&&l.replay))throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(e,a=this.timeout){var r,o,l;if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){const{config:{broadcast:d,presence:h,private:p}}=this.params,m=(o=(r=this.bindings.postgres_changes)===null||r===void 0?void 0:r.map(w=>w.filter))!==null&&o!==void 0?o:[],y=!!this.bindings[Ir.PRESENCE]&&this.bindings[Ir.PRESENCE].length>0||((l=this.params.config.presence)===null||l===void 0?void 0:l.enabled)===!0,v={},x={broadcast:d,presence:Object.assign(Object.assign({},h),{enabled:y}),postgres_changes:m,private:p};this.socket.accessTokenValue&&(v.access_token=this.socket.accessTokenValue),this._onError(w=>{e==null||e(Oa.CHANNEL_ERROR,f_(w))}),this._onClose(()=>e==null?void 0:e(Oa.CLOSED)),this.updateJoinPayload(Object.assign({config:x},v)),this._updateFilterMessage(),this.channelAdapter.subscribe(a).receive("ok",async({postgres_changes:w})=>{if(this.socket._isManualToken()||this.socket.setAuth(),w===void 0){e==null||e(Oa.SUBSCRIBED);return}this._updatePostgresBindings(w,e)}).receive("error",w=>{this.state=ci.errored;const j=Object.values(w).join(", ")||"error";e==null||e(Oa.CHANNEL_ERROR,new Error(j,{cause:w}))}).receive("timeout",()=>{e==null||e(Oa.TIMED_OUT)})}return this}_updatePostgresBindings(e,a){var r;const o=this.bindings.postgres_changes,l=(r=o==null?void 0:o.length)!==null&&r!==void 0?r:0,d=[];for(let h=0;h<l;h++){const p=o[h],{filter:{event:m,schema:y,table:v,filter:x}}=p,w=e&&e[h];if(w&&w.event===m&&so.isFilterValueEqual(w.schema,y)&&so.isFilterValueEqual(w.table,v)&&so.isFilterValueEqual(w.filter,x))d.push(Object.assign(Object.assign({},p),{id:w.id}));else{this.unsubscribe(),this.state=ci.errored,a==null||a(Oa.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=d,this.state!=ci.errored&&a&&a(Oa.SUBSCRIBED)}presenceState(){return this.presence.state}async track(e,a={}){return await this.send({type:"presence",event:"track",payload:e},a.timeout||this.timeout)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,a,r){const o=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),l=e===Ir.PRESENCE||e===Ir.POSTGRES_CHANGES;if(o&&l)throw this.socket.log("channel",`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`),new Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(e,a,r)}async httpSend(e,a,r={}){var o;if(a==null)return Promise.reject(new Error("Payload is required for httpSend()"));const l=a instanceof ArrayBuffer||ArrayBuffer.isView(a),d={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":l?"application/octet-stream":"application/json"};this.socket.accessTokenValue&&(d.Authorization=`Bearer ${this.socket.accessTokenValue}`);const h=new URL(this.broadcastEndpointURL);h.pathname+=`/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e)}`,this.private&&h.searchParams.set("private","true");const p={method:"POST",headers:d,body:l?a:JSON.stringify(a)},m=await this._fetchWithTimeout(h.toString(),p,(o=r.timeout)!==null&&o!==void 0?o:this.timeout);if(m.status===202)return{success:!0};if(m.status===404)return Promise.reject(new Error("httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md"));let y=m.statusText;try{const v=await m.json();y=v.error||v.message||y}catch{}return Promise.reject(new Error(y))}async send(e,a={}){var r,o;if(!this.channelAdapter.canPush()&&e.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:l,payload:d}=e,h={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(h.Authorization=`Bearer ${this.socket.accessTokenValue}`);const p={method:"POST",headers:h,body:JSON.stringify({messages:[{topic:this.subTopic,event:l,payload:d,private:this.private}]})};try{const m=await this._fetchWithTimeout(this.broadcastEndpointURL,p,(r=a.timeout)!==null&&r!==void 0?r:this.timeout);return await((o=m.body)===null||o===void 0?void 0:o.cancel()),m.ok?"ok":"error"}catch(m){return m instanceof Error&&m.name==="AbortError"?"timed out":"error"}}else return new Promise(l=>{var d,h,p;const m=this.channelAdapter.push(e.type,e,a.timeout||this.timeout);e.type==="broadcast"&&!(!((p=(h=(d=this.params)===null||d===void 0?void 0:d.config)===null||h===void 0?void 0:h.broadcast)===null||p===void 0)&&p.ack)&&l("ok"),m.receive("ok",()=>l("ok")),m.receive("error",()=>l("error")),m.receive("timeout",()=>l("timed out"))})}updateJoinPayload(e){this.channelAdapter.updateJoinPayload(e)}async unsubscribe(e=this.timeout){return new Promise(a=>{this.channelAdapter.unsubscribe(e).receive("ok",()=>a("ok")).receive("timeout",()=>a("timed out")).receive("error",()=>a("error"))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(e,a,r){const o=new AbortController,l=setTimeout(()=>o.abort(),r),d=await this.socket.fetch(e,Object.assign(Object.assign({},a),{signal:o.signal}));return clearTimeout(l),d}_on(e,a,r){const o=e.toLocaleLowerCase(),l=this.channelAdapter.on(e,r),d={type:o,filter:a,callback:r,ref:l};return this.bindings[o]?this.bindings[o].push(d):this.bindings[o]=[d],this._updateFilterMessage(),this}_onClose(e){this.channelAdapter.onClose(e)}_onError(e){this.channelAdapter.onError(e)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((e,a,r)=>{var o,l,d,h,p,m,y;const v=e.event.toLocaleLowerCase();if(this._notThisChannelEvent(v,r))return!1;const x=(o=this.bindings[v])===null||o===void 0?void 0:o.find(w=>w.ref===e.ref);if(!x)return!0;if(["broadcast","presence","postgres_changes"].includes(v))if("id"in x){const w=x.id,j=(l=x.filter)===null||l===void 0?void 0:l.event;return w&&((d=a.ids)===null||d===void 0?void 0:d.includes(w))&&(j==="*"||(j==null?void 0:j.toLocaleLowerCase())===((h=a.data)===null||h===void 0?void 0:h.type.toLocaleLowerCase()))}else{const w=(m=(p=x==null?void 0:x.filter)===null||p===void 0?void 0:p.event)===null||m===void 0?void 0:m.toLocaleLowerCase();return w==="*"||w===((y=a==null?void 0:a.event)===null||y===void 0?void 0:y.toLocaleLowerCase())}else return x.type.toLocaleLowerCase()===v})}_notThisChannelEvent(e,a){const{close:r,error:o,leave:l,join:d}=bx;return a&&[r,o,l,d].includes(e)&&a!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((e,a,r)=>{if(typeof a=="object"&&"ids"in a){const o=a.data,{schema:l,table:d,commit_timestamp:h,type:p,errors:m}=o;return Object.assign(Object.assign({},{schema:l,table:d,commit_timestamp:h,eventType:p,new:{},old:{},errors:m}),this._getPayloadRecords(o))}return a})}copyBindings(e){if(this.joinedOnce)throw new Error("cannot copy bindings into joined channel");for(const a in e.bindings)for(const r of e.bindings[a])this._on(r.type,r.filter,r.callback)}static isFilterValueEqual(e,a){return(e??void 0)===(a??void 0)}_getPayloadRecords(e){const a={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(a.new=Py(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(a.old=Py(e.columns,e.old_record)),a}}class g_{constructor(e,a){this.socket=new c_(e,a)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(e){this.socket.heartbeatCallback=e}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(e,a,r,o=1e4){return new Promise(l=>{setTimeout(()=>l("timeout"),o),this.socket.disconnect(()=>{e(),l("ok")},a,r)})}push(e){this.socket.push(e)}log(e,a,r){this.socket.log(e,a,r)}makeRef(){return this.socket.makeRef()}onOpen(e){this.socket.onOpen(e)}onClose(e){this.socket.onClose(e)}onError(e){this.socket.onError(e)}onMessage(e){this.socket.onMessage(e)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==Jh.connecting}isDisconnecting(){return this.socket.connectionState()==Jh.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}}const Iy={HEARTBEAT_INTERVAL:25e3},y_=[1e3,2e3,5e3,1e4],v_=1e4;function b_(){const t=new Map;return{get length(){return t.size},clear(){t.clear()},getItem(e){return t.has(e)?t.get(e):null},key(e){var a;return(a=Array.from(t.keys())[e])!==null&&a!==void 0?a:null},removeItem(e){t.delete(e)},setItem(e,a){t.set(e,String(a))}}}function x_(){try{if(typeof globalThis<"u"&&globalThis.sessionStorage)return globalThis.sessionStorage}catch{}return b_()}const w_=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class S_{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(e,a){var r;if(this.channels=new Array,this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint="",this.headers={},this.params={},this.ref=0,this.serializer=new Yj,this._manuallySetToken=!1,this._authPromise=null,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=l=>l?(...d)=>l(...d):(...d)=>fetch(...d),!(!((r=a==null?void 0:a.params)===null||r===void 0)&&r.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=a.params.apikey;const o=this._initializeOptions(a);this.socketAdapter=new g_(e,o),this.httpEndpoint=wx(e),this.fetch=this._resolveFetch(a==null?void 0:a.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(e){const a=e.message;throw a.includes("Node.js")?new Error(`${a}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${a}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(e,a){return this._cancelPendingDisconnect(),this.isDisconnecting()?"ok":await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},e,a)}getChannels(){return this.channels}async removeChannel(e){const a=await e.unsubscribe();return a==="ok"&&e.teardown(),a}async removeAllChannels(){const e=this.channels.map(async r=>{const o=await r.unsubscribe();return r.teardown(),o}),a=await Promise.all(e);return await this.disconnect(),a}log(e,a,r){this.socketAdapter.log(e,a,r)}connectionState(){return this.socketAdapter.connectionState()||Jh.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(e,a={config:{}}){const r=`realtime:${e}`,o=this.getChannels().find(l=>l.topic===r);if(o)return o;{const l=new so(`realtime:${e}`,a,this);return this._cancelPendingDisconnect(),this.channels.push(l),l}}push(e){this.socketAdapter.push(e)}async setAuth(e=null){this._authPromise=this._performAuth(e);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(e){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(e)}_makeRef(){return this.socketAdapter.makeRef()}_remove(e){this.channels=this.channels.filter(a=>a.topic!==e.topic),this.channels.length===0&&(this.log("transport","no channels remaining, scheduling disconnect"),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){if(this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0){this.log("transport","disconnecting immediately - no channels"),this.disconnect();return}this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log("transport","deferred disconnect fired - no channels, disconnecting"),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log("transport",`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log("transport","pending disconnect cancelled - channel activity detected"),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(e=null){let a,r=!1;if(e)a=e,r=!0;else if(this.accessToken)try{a=await this.accessToken()}catch(o){this.log("error","Error fetching access token from callback",o),a=this.accessTokenValue}else a=this.accessTokenValue;r?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=a&&(this.accessTokenValue=a,this.channels.forEach(o=>{const l={access_token:a,version:Ij};a&&o.updateJoinPayload(l),o.joinedOnce&&o.channelAdapter.isJoined()&&o.channelAdapter.push(bx.access_token,{access_token:a})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e="general"){this._isManualToken()||this.setAuth().catch(a=>{this.log("error",`Error setting auth in ${e}`,a)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(a=>{this.log("error","error waiting for auth on connect",a)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(e=>{e.ref&&e.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(e){return(a,r)=>{a=="sent"&&this._setAuthSafely(),e&&e(a,r)}}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=a=>{this.log("worker","worker error",a.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=a=>{a.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_workerObjectUrl(e){let a;if(e)a=e;else{const r=new Blob([w_],{type:"application/javascript"});a=URL.createObjectURL(r)}return a}_initializeOptions(e){var a,r,o,l,d,h,p,m,y,v,x,w;this.worker=(a=e==null?void 0:e.worker)!==null&&a!==void 0?a:!1,this.accessToken=(r=e==null?void 0:e.accessToken)!==null&&r!==void 0?r:null;const j={};j.timeout=(o=e==null?void 0:e.timeout)!==null&&o!==void 0?o:Gj,j.heartbeatIntervalMs=(l=e==null?void 0:e.heartbeatIntervalMs)!==null&&l!==void 0?l:Iy.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=(d=e==null?void 0:e.disconnectOnEmptyChannelsAfterMs)!==null&&d!==void 0?d:2*((h=e==null?void 0:e.heartbeatIntervalMs)!==null&&h!==void 0?h:Iy.HEARTBEAT_INTERVAL),j.transport=(p=e==null?void 0:e.transport)!==null&&p!==void 0?p:$j.getWebSocketConstructor(),j.params=e==null?void 0:e.params,j.logger=e==null?void 0:e.logger,j.heartbeatCallback=this._wrapHeartbeatCallback(e==null?void 0:e.heartbeatCallback),j.sessionStorage=(m=e==null?void 0:e.sessionStorage)!==null&&m!==void 0?m:x_(),j.reconnectAfterMs=(y=e==null?void 0:e.reconnectAfterMs)!==null&&y!==void 0?y:(C=>y_[C-1]||v_);let E,T;const k=(v=e==null?void 0:e.vsn)!==null&&v!==void 0?v:Fj;switch(k){case qj:E=(C,N)=>N(JSON.stringify(C)),T=(C,N)=>N(JSON.parse(C));break;case vx:E=this.serializer.encode.bind(this.serializer),T=this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${j.vsn}`)}if(j.vsn=k,j.encode=(x=e==null?void 0:e.encode)!==null&&x!==void 0?x:E,j.decode=(w=e==null?void 0:e.decode)!==null&&w!==void 0?w:T,j.beforeReconnect=this._reconnectAuth.bind(this),(e!=null&&e.logLevel||e!=null&&e.log_level)&&(this.logLevel=e.logLevel||e.log_level,j.params=Object.assign(Object.assign({},j.params),{log_level:this.logLevel})),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=e==null?void 0:e.workerUrl,j.autoSendHeartbeat=!this.worker}return j}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}}var mo=class extends Error{constructor(t,e){var a;super(t),this.name="IcebergError",this.status=e.status,this.icebergType=e.icebergType,this.icebergCode=e.icebergCode,this.details=e.details,this.isCommitStateUnknown=e.icebergType==="CommitStateUnknownException"||[500,502,504].includes(e.status)&&((a=e.icebergType)==null?void 0:a.includes("CommitState"))===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function j_(t,e,a){const r=new URL(e,t);if(a)for(const[o,l]of Object.entries(a))l!==void 0&&r.searchParams.set(o,l);return r.toString()}async function __(t){return!t||t.type==="none"?{}:t.type==="bearer"?{Authorization:`Bearer ${t.token}`}:t.type==="header"?{[t.name]:t.value}:t.type==="custom"?await t.getHeaders():{}}function k_(t){const e=t.fetchImpl??globalThis.fetch;return{async request({method:a,path:r,query:o,body:l,headers:d}){const h=j_(t.baseUrl,r,o),p=await __(t.auth),m=await e(h,{method:a,headers:{...l?{"Content-Type":"application/json"}:{},...p,...d},body:l?JSON.stringify(l):void 0}),y=await m.text(),v=(m.headers.get("content-type")||"").includes("application/json"),x=v&&y?JSON.parse(y):y;if(!m.ok){const w=v?x:void 0,j=w==null?void 0:w.error;throw new mo((j==null?void 0:j.message)??`Request failed with status ${m.status}`,{status:m.status,icebergType:j==null?void 0:j.type,icebergCode:j==null?void 0:j.code,details:w})}return{status:m.status,headers:m.headers,data:x}}}}function Wl(t){return t.join("")}var E_=class{constructor(t,e=""){this.client=t,this.prefix=e}async listNamespaces(t){const e=t?{parent:Wl(t.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:e})).data.namespaces.map(r=>({namespace:r}))}async createNamespace(t,e){const a={namespace:t.namespace,properties:e==null?void 0:e.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:a})).data}async dropNamespace(t){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${Wl(t.namespace)}`})}async loadNamespaceMetadata(t){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Wl(t.namespace)}`})).data.properties}}async namespaceExists(t){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${Wl(t.namespace)}`}),!0}catch(e){if(e instanceof mo&&e.status===404)return!1;throw e}}async createNamespaceIfNotExists(t,e){try{return await this.createNamespace(t,e)}catch(a){if(a instanceof mo&&a.status===409)return;throw a}}};function zr(t){return t.join("")}var T_=class{constructor(t,e="",a){this.client=t,this.prefix=e,this.accessDelegation=a}async listTables(t){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${zr(t.namespace)}/tables`})).data.identifiers}async createTable(t,e){const a={};return this.accessDelegation&&(a["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${zr(t.namespace)}/tables`,body:e,headers:a})).data.metadata}async updateTable(t,e){const a=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${zr(t.namespace)}/tables/${t.name}`,body:e});return{"metadata-location":a.data["metadata-location"],metadata:a.data.metadata}}async dropTable(t,e){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${zr(t.namespace)}/tables/${t.name}`,query:{purgeRequested:String((e==null?void 0:e.purge)??!1)}})}async loadTable(t){const e={};return this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${zr(t.namespace)}/tables/${t.name}`,headers:e})).data.metadata}async tableExists(t){const e={};this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${zr(t.namespace)}/tables/${t.name}`,headers:e}),!0}catch(a){if(a instanceof mo&&a.status===404)return!1;throw a}}async createTableIfNotExists(t,e){try{return await this.createTable(t,e)}catch(a){if(a instanceof mo&&a.status===409)return await this.loadTable({namespace:t.namespace,name:e.name});throw a}}},C_=class{constructor(t){var r;let e="v1";t.catalogName&&(e+=`/${t.catalogName}`);const a=t.baseUrl.endsWith("/")?t.baseUrl:`${t.baseUrl}/`;this.client=k_({baseUrl:a,auth:t.auth,fetchImpl:t.fetch}),this.accessDelegation=(r=t.accessDelegation)==null?void 0:r.join(","),this.namespaceOps=new E_(this.client,e),this.tableOps=new T_(this.client,e,this.accessDelegation)}async listNamespaces(t){return this.namespaceOps.listNamespaces(t)}async createNamespace(t,e){return this.namespaceOps.createNamespace(t,e)}async dropNamespace(t){await this.namespaceOps.dropNamespace(t)}async loadNamespaceMetadata(t){return this.namespaceOps.loadNamespaceMetadata(t)}async listTables(t){return this.tableOps.listTables(t)}async createTable(t,e){return this.tableOps.createTable(t,e)}async updateTable(t,e){return this.tableOps.updateTable(t,e)}async dropTable(t,e){await this.tableOps.dropTable(t,e)}async loadTable(t){return this.tableOps.loadTable(t)}async namespaceExists(t){return this.namespaceOps.namespaceExists(t)}async tableExists(t){return this.tableOps.tableExists(t)}async createNamespaceIfNotExists(t,e){return this.namespaceOps.createNamespaceIfNotExists(t,e)}async createTableIfNotExists(t,e){return this.tableOps.createTableIfNotExists(t,e)}};function go(t){"@babel/helpers - typeof";return go=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},go(t)}function A_(t,e){if(go(t)!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var r=a.call(t,e);if(go(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function N_(t){var e=A_(t,"string");return go(e)=="symbol"?e:e+""}function R_(t,e,a){return(e=N_(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function qy(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),a.push.apply(a,r)}return a}function xe(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?qy(Object(a),!0).forEach(function(r){R_(t,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):qy(Object(a)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(a,r))})}return t}var Ic=class extends Error{constructor(t,e="storage",a,r){super(t),this.__isStorageError=!0,this.namespace=e,this.name=e==="vectors"?"StorageVectorsError":"StorageError",this.status=a,this.statusCode=r}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function qc(t){return typeof t=="object"&&t!==null&&"__isStorageError"in t}var tf=class extends Ic{constructor(t,e,a,r="storage"){super(t,r,e,a),this.name=r==="vectors"?"StorageVectorsApiError":"StorageApiError",this.status=e,this.statusCode=a}toJSON(){return xe({},super.toJSON())}},jx=class extends Ic{constructor(t,e,a="storage"){super(t,a),this.name=a==="vectors"?"StorageVectorsUnknownError":"StorageUnknownError",this.originalError=e}};function wc(t,e,a){const r=xe({},t),o=e.toLowerCase();for(const l of Object.keys(r))l.toLowerCase()===o&&delete r[l];return r[o]=a,r}function O_(t){const e={};for(const[a,r]of Object.entries(t))e[a.toLowerCase()]=r;return e}const D_=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),L_=t=>{if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},nf=t=>{if(Array.isArray(t))return t.map(a=>nf(a));if(typeof t=="function"||t!==Object(t))return t;const e={};return Object.entries(t).forEach(([a,r])=>{const o=a.replace(/([-_][a-z])/gi,l=>l.toUpperCase().replace(/[-_]/g,""));e[o]=nf(r)}),e},M_=t=>!t||typeof t!="string"||t.length===0||t.length>100||t.trim()!==t||t.includes("/")||t.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(t),Fy=t=>{if(typeof t=="object"&&t!==null){const e=t;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error;if(typeof e.error=="object"&&e.error!==null){const a=e.error;if(typeof a.message=="string")return a.message}}return JSON.stringify(t)},z_=async(t,e,a,r)=>{if(t!==null&&typeof t=="object"&&"json"in t&&typeof t.json=="function"){const o=t;let l=parseInt(String(o.status),10);Number.isFinite(l)||(l=500),o.json().then(d=>{const h=(d==null?void 0:d.statusCode)||(d==null?void 0:d.code)||l+"";e(new tf(Fy(d),l,h,r))}).catch(()=>{const d=l+"";e(new tf(o.statusText||`HTTP ${l} error`,l,d,r))})}else e(new jx(Fy(t),t,r))},U_=(t,e,a,r)=>{const o={method:t,headers:(e==null?void 0:e.headers)||{}};if(t==="GET"||t==="HEAD"||!r)return xe(xe({},o),a);if(L_(r)){var l;const d=(e==null?void 0:e.headers)||{};let h;for(const[p,m]of Object.entries(d))p.toLowerCase()==="content-type"&&(h=m);o.headers=wc(d,"Content-Type",(l=h)!==null&&l!==void 0?l:"application/json"),o.body=JSON.stringify(r)}else o.body=r;return e!=null&&e.duplex&&(o.duplex=e.duplex),xe(xe({},o),a)};async function Ws(t,e,a,r,o,l,d){return new Promise((h,p)=>{t(a,U_(e,r,o,l)).then(m=>{if(!m.ok)throw m;if(r!=null&&r.noResolveJson)return m;if(d==="vectors"){const y=m.headers.get("content-type");if(m.headers.get("content-length")==="0"||m.status===204)return{};if(!y||!y.includes("application/json"))return{}}return m.json()}).then(m=>h(m)).catch(m=>z_(m,p,r,d))})}function _x(t="storage"){return{get:async(e,a,r,o)=>Ws(e,"GET",a,r,o,void 0,t),post:async(e,a,r,o,l)=>Ws(e,"POST",a,o,l,r,t),put:async(e,a,r,o,l)=>Ws(e,"PUT",a,o,l,r,t),head:async(e,a,r,o)=>Ws(e,"HEAD",a,xe(xe({},r),{},{noResolveJson:!0}),o,void 0,t),remove:async(e,a,r,o,l)=>Ws(e,"DELETE",a,o,l,r,t)}}const B_=_x("storage"),{get:yo,post:Fn,put:af,head:P_,remove:Gf}=B_,yn=_x("vectors");var Zr=class{constructor(t,e={},a,r="storage"){this.shouldThrowOnError=!1,this.url=t,this.headers=O_(e),this.fetch=D_(a),this.namespace=r}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(t,e){return this.headers=wc(this.headers,t,e),this}async handleOperation(t){var e=this;try{return{data:await t(),error:null}}catch(a){if(e.shouldThrowOnError)throw a;if(qc(a))return{data:null,error:a};throw a}}};let kx;kx=Symbol.toStringTag;var V_=class{constructor(t,e){this.downloadFn=t,this.shouldThrowOnError=e,this[kx]="StreamDownloadBuilder",this.promise=null}then(t,e){return this.getPromise().then(t,e)}catch(t){return this.getPromise().catch(t)}finally(t){return this.getPromise().finally(t)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var t=this;try{return{data:(await t.downloadFn()).body,error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(qc(e))return{data:null,error:e};throw e}}};let Ex;Ex=Symbol.toStringTag;var $_=class{constructor(t,e){this.downloadFn=t,this.shouldThrowOnError=e,this[Ex]="BlobDownloadBuilder",this.promise=null}asStream(){return new V_(this.downloadFn,this.shouldThrowOnError)}then(t,e){return this.getPromise().then(t,e)}catch(t){return this.getPromise().catch(t)}finally(t){return this.getPromise().finally(t)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var t=this;try{return{data:await(await t.downloadFn()).blob(),error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(qc(e))return{data:null,error:e};throw e}}};const H_={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},Gy={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};var I_=class extends Zr{constructor(t,e={},a,r){super(t,e,r,"storage"),this.bucketId=a}async uploadOrUpdate(t,e,a,r){var o=this;return o.handleOperation(async()=>{let l;const d=xe(xe({},Gy),r);let h=xe(xe({},o.headers),t==="POST"&&{"x-upsert":String(d.upsert)});const p=d.metadata;if(typeof Blob<"u"&&a instanceof Blob?(l=new FormData,l.append("cacheControl",d.cacheControl),p&&l.append("metadata",o.encodeMetadata(p)),l.append("",a)):typeof FormData<"u"&&a instanceof FormData?(l=a,l.has("cacheControl")||l.append("cacheControl",d.cacheControl),p&&!l.has("metadata")&&l.append("metadata",o.encodeMetadata(p))):(l=a,h["cache-control"]=`max-age=${d.cacheControl}`,h["content-type"]=d.contentType,p&&(h["x-metadata"]=o.toBase64(o.encodeMetadata(p))),(typeof ReadableStream<"u"&&l instanceof ReadableStream||l&&typeof l=="object"&&"pipe"in l&&typeof l.pipe=="function")&&!d.duplex&&(d.duplex="half")),r!=null&&r.headers)for(const[x,w]of Object.entries(r.headers))h=wc(h,x,w);const m=o._removeEmptyFolders(e),y=o._getFinalPath(m),v=await(t=="PUT"?af:Fn)(o.fetch,`${o.url}/object/${y}`,l,xe({headers:h},d!=null&&d.duplex?{duplex:d.duplex}:{}));return{path:m,id:v.Id,fullPath:v.Key}})}async upload(t,e,a){return this.uploadOrUpdate("POST",t,e,a)}async uploadToSignedUrl(t,e,a,r){var o=this;const l=o._removeEmptyFolders(t),d=o._getFinalPath(l),h=new URL(o.url+`/object/upload/sign/${d}`);return h.searchParams.set("token",e),o.handleOperation(async()=>{let p;const m=xe(xe({},Gy),r);let y=xe(xe({},o.headers),{"x-upsert":String(m.upsert)});const v=m.metadata;if(typeof Blob<"u"&&a instanceof Blob?(p=new FormData,p.append("cacheControl",m.cacheControl),v&&p.append("metadata",o.encodeMetadata(v)),p.append("",a)):typeof FormData<"u"&&a instanceof FormData?(p=a,p.has("cacheControl")||p.append("cacheControl",m.cacheControl),v&&!p.has("metadata")&&p.append("metadata",o.encodeMetadata(v))):(p=a,y["cache-control"]=`max-age=${m.cacheControl}`,y["content-type"]=m.contentType,v&&(y["x-metadata"]=o.toBase64(o.encodeMetadata(v))),(typeof ReadableStream<"u"&&p instanceof ReadableStream||p&&typeof p=="object"&&"pipe"in p&&typeof p.pipe=="function")&&!m.duplex&&(m.duplex="half")),r!=null&&r.headers)for(const[x,w]of Object.entries(r.headers))y=wc(y,x,w);return{path:l,fullPath:(await af(o.fetch,h.toString(),p,xe({headers:y},m!=null&&m.duplex?{duplex:m.duplex}:{}))).Key}})}async createSignedUploadUrl(t,e){var a=this;return a.handleOperation(async()=>{let r=a._getFinalPath(t);const o=xe({},a.headers);e!=null&&e.upsert&&(o["x-upsert"]="true");const l=await Fn(a.fetch,`${a.url}/object/upload/sign/${r}`,{},{headers:o}),d=new URL(a.url+l.url),h=d.searchParams.get("token");if(!h)throw new Ic("No token returned by API");return{signedUrl:d.toString(),path:t,token:h}})}async update(t,e,a){return this.uploadOrUpdate("PUT",t,e,a)}async move(t,e,a){var r=this;return r.handleOperation(async()=>await Fn(r.fetch,`${r.url}/object/move`,{bucketId:r.bucketId,sourceKey:t,destinationKey:e,destinationBucket:a==null?void 0:a.destinationBucket},{headers:r.headers}))}async copy(t,e,a){var r=this;return r.handleOperation(async()=>({path:(await Fn(r.fetch,`${r.url}/object/copy`,{bucketId:r.bucketId,sourceKey:t,destinationKey:e,destinationBucket:a==null?void 0:a.destinationBucket},{headers:r.headers})).Key}))}async createSignedUrl(t,e,a){var r=this;return r.handleOperation(async()=>{let o=r._getFinalPath(t);const l=typeof(a==null?void 0:a.transform)=="object"&&a.transform!==null&&Object.keys(a.transform).length>0;let d=await Fn(r.fetch,`${r.url}/object/sign/${o}`,xe({expiresIn:e},l?{transform:a.transform}:{}),{headers:r.headers});const h=new URLSearchParams;a!=null&&a.download&&h.set("download",a.download===!0?"":a.download),(a==null?void 0:a.cacheNonce)!=null&&h.set("cacheNonce",String(a.cacheNonce));const p=h.toString();return{signedUrl:encodeURI(`${r.url}${d.signedURL}${p?`&${p}`:""}`)}})}async createSignedUrls(t,e,a){var r=this;return r.handleOperation(async()=>{const o=await Fn(r.fetch,`${r.url}/object/sign/${r.bucketId}`,{expiresIn:e,paths:t},{headers:r.headers}),l=new URLSearchParams;a!=null&&a.download&&l.set("download",a.download===!0?"":a.download),(a==null?void 0:a.cacheNonce)!=null&&l.set("cacheNonce",String(a.cacheNonce));const d=l.toString();return o.map(h=>xe(xe({},h),{},{signedUrl:h.signedURL?encodeURI(`${r.url}${h.signedURL}${d?`&${d}`:""}`):null}))})}download(t,e,a){const r=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image/authenticated":"object",o=new URLSearchParams;e!=null&&e.transform&&this.applyTransformOptsToQuery(o,e.transform),(e==null?void 0:e.cacheNonce)!=null&&o.set("cacheNonce",String(e.cacheNonce));const l=o.toString(),d=this._getFinalPath(t),h=()=>yo(this.fetch,`${this.url}/${r}/${d}${l?`?${l}`:""}`,{headers:this.headers,noResolveJson:!0},a);return new $_(h,this.shouldThrowOnError)}async info(t){var e=this;const a=e._getFinalPath(t);return e.handleOperation(async()=>nf(await yo(e.fetch,`${e.url}/object/info/${a}`,{headers:e.headers})))}async exists(t){var e=this;const a=e._getFinalPath(t);try{return await P_(e.fetch,`${e.url}/object/${a}`,{headers:e.headers}),{data:!0,error:null}}catch(o){if(e.shouldThrowOnError)throw o;if(qc(o)){var r;const l=o instanceof tf?o.status:o instanceof jx?(r=o.originalError)===null||r===void 0?void 0:r.status:void 0;if(l!==void 0&&[400,404].includes(l))return{data:!1,error:o}}throw o}}getPublicUrl(t,e){const a=this._getFinalPath(t),r=new URLSearchParams;e!=null&&e.download&&r.set("download",e.download===!0?"":e.download),e!=null&&e.transform&&this.applyTransformOptsToQuery(r,e.transform),(e==null?void 0:e.cacheNonce)!=null&&r.set("cacheNonce",String(e.cacheNonce));const o=r.toString(),l=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image":"object";return{data:{publicUrl:encodeURI(`${this.url}/${l}/public/${a}`)+(o?`?${o}`:"")}}}async remove(t){var e=this;return e.handleOperation(async()=>await Gf(e.fetch,`${e.url}/object/${e.bucketId}`,{prefixes:t},{headers:e.headers}))}async list(t,e,a){var r=this;return r.handleOperation(async()=>{const o=xe(xe(xe({},H_),e),{},{prefix:t||""});return await Fn(r.fetch,`${r.url}/object/list/${r.bucketId}`,o,{headers:r.headers},a)})}async listV2(t,e){var a=this;return a.handleOperation(async()=>{const r=xe({},t);return await Fn(a.fetch,`${a.url}/object/list-v2/${a.bucketId}`,r,{headers:a.headers},e)})}encodeMetadata(t){return JSON.stringify(t)}toBase64(t){return typeof Buffer<"u"?Buffer.from(t).toString("base64"):btoa(t)}_getFinalPath(t){return`${this.bucketId}/${t.replace(/^\/+/,"")}`}_removeEmptyFolders(t){return t.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}applyTransformOptsToQuery(t,e){return e.width&&t.set("width",e.width.toString()),e.height&&t.set("height",e.height.toString()),e.resize&&t.set("resize",e.resize),e.format&&t.set("format",e.format),e.quality&&t.set("quality",e.quality.toString()),t}};const q_="2.108.2",To={"X-Client-Info":`storage-js/${q_}`};var F_=class extends Zr{constructor(t,e={},a,r){const o=new URL(t);r!=null&&r.useNewHostname&&/supabase\.(co|in|red)$/.test(o.hostname)&&!o.hostname.includes("storage.supabase.")&&(o.hostname=o.hostname.replace("supabase.","storage.supabase."));const l=o.href.replace(/\/$/,""),d=xe(xe({},To),e);super(l,d,a,"storage")}async listBuckets(t){var e=this;return e.handleOperation(async()=>{const a=e.listBucketOptionsToQueryString(t);return await yo(e.fetch,`${e.url}/bucket${a}`,{headers:e.headers})})}async getBucket(t){var e=this;return e.handleOperation(async()=>await yo(e.fetch,`${e.url}/bucket/${t}`,{headers:e.headers}))}async createBucket(t,e={public:!1}){var a=this;return a.handleOperation(async()=>await Fn(a.fetch,`${a.url}/bucket`,{id:t,name:t,type:e.type,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:a.headers}))}async updateBucket(t,e){var a=this;return a.handleOperation(async()=>await af(a.fetch,`${a.url}/bucket/${t}`,{id:t,name:t,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:a.headers}))}async emptyBucket(t){var e=this;return e.handleOperation(async()=>await Fn(e.fetch,`${e.url}/bucket/${t}/empty`,{},{headers:e.headers}))}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await Gf(e.fetch,`${e.url}/bucket/${t}`,{},{headers:e.headers}))}listBucketOptionsToQueryString(t){const e={};return t&&("limit"in t&&(e.limit=String(t.limit)),"offset"in t&&(e.offset=String(t.offset)),t.search&&(e.search=t.search),t.sortColumn&&(e.sortColumn=t.sortColumn),t.sortOrder&&(e.sortOrder=t.sortOrder)),Object.keys(e).length>0?"?"+new URLSearchParams(e).toString():""}},G_=class extends Zr{constructor(t,e={},a){const r=t.replace(/\/$/,""),o=xe(xe({},To),e);super(r,o,a,"storage")}async createBucket(t){var e=this;return e.handleOperation(async()=>await Fn(e.fetch,`${e.url}/bucket`,{name:t},{headers:e.headers}))}async listBuckets(t){var e=this;return e.handleOperation(async()=>{const a=new URLSearchParams;(t==null?void 0:t.limit)!==void 0&&a.set("limit",t.limit.toString()),(t==null?void 0:t.offset)!==void 0&&a.set("offset",t.offset.toString()),t!=null&&t.sortColumn&&a.set("sortColumn",t.sortColumn),t!=null&&t.sortOrder&&a.set("sortOrder",t.sortOrder),t!=null&&t.search&&a.set("search",t.search);const r=a.toString(),o=r?`${e.url}/bucket?${r}`:`${e.url}/bucket`;return await yo(e.fetch,o,{headers:e.headers})})}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await Gf(e.fetch,`${e.url}/bucket/${t}`,{},{headers:e.headers}))}from(t){var e=this;if(!M_(t))throw new Ic("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");const a=new C_({baseUrl:this.url,catalogName:t,auth:{type:"custom",getHeaders:async()=>e.headers},fetch:this.fetch}),r=this.shouldThrowOnError;return new Proxy(a,{get(o,l){const d=o[l];return typeof d!="function"?d:async(...h)=>{try{return{data:await d.apply(o,h),error:null}}catch(p){if(r)throw p;return{data:null,error:p}}}}})}},K_=class extends Zr{constructor(t,e={},a){const r=t.replace(/\/$/,""),o=xe(xe({},To),{},{"Content-Type":"application/json"},e);super(r,o,a,"vectors")}async createIndex(t){var e=this;return e.handleOperation(async()=>await yn.post(e.fetch,`${e.url}/CreateIndex`,t,{headers:e.headers})||{})}async getIndex(t,e){var a=this;return a.handleOperation(async()=>await yn.post(a.fetch,`${a.url}/GetIndex`,{vectorBucketName:t,indexName:e},{headers:a.headers}))}async listIndexes(t){var e=this;return e.handleOperation(async()=>await yn.post(e.fetch,`${e.url}/ListIndexes`,t,{headers:e.headers}))}async deleteIndex(t,e){var a=this;return a.handleOperation(async()=>await yn.post(a.fetch,`${a.url}/DeleteIndex`,{vectorBucketName:t,indexName:e},{headers:a.headers})||{})}},Y_=class extends Zr{constructor(t,e={},a){const r=t.replace(/\/$/,""),o=xe(xe({},To),{},{"Content-Type":"application/json"},e);super(r,o,a,"vectors")}async putVectors(t){var e=this;if(t.vectors.length<1||t.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return e.handleOperation(async()=>await yn.post(e.fetch,`${e.url}/PutVectors`,t,{headers:e.headers})||{})}async getVectors(t){var e=this;return e.handleOperation(async()=>await yn.post(e.fetch,`${e.url}/GetVectors`,t,{headers:e.headers}))}async listVectors(t){var e=this;if(t.segmentCount!==void 0){if(t.segmentCount<1||t.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(t.segmentIndex!==void 0&&(t.segmentIndex<0||t.segmentIndex>=t.segmentCount))throw new Error(`segmentIndex must be between 0 and ${t.segmentCount-1}`)}return e.handleOperation(async()=>await yn.post(e.fetch,`${e.url}/ListVectors`,t,{headers:e.headers}))}async queryVectors(t){var e=this;return e.handleOperation(async()=>await yn.post(e.fetch,`${e.url}/QueryVectors`,t,{headers:e.headers}))}async deleteVectors(t){var e=this;if(t.keys.length<1||t.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return e.handleOperation(async()=>await yn.post(e.fetch,`${e.url}/DeleteVectors`,t,{headers:e.headers})||{})}},W_=class extends Zr{constructor(t,e={},a){const r=t.replace(/\/$/,""),o=xe(xe({},To),{},{"Content-Type":"application/json"},e);super(r,o,a,"vectors")}async createBucket(t){var e=this;return e.handleOperation(async()=>await yn.post(e.fetch,`${e.url}/CreateVectorBucket`,{vectorBucketName:t},{headers:e.headers})||{})}async getBucket(t){var e=this;return e.handleOperation(async()=>await yn.post(e.fetch,`${e.url}/GetVectorBucket`,{vectorBucketName:t},{headers:e.headers}))}async listBuckets(t={}){var e=this;return e.handleOperation(async()=>await yn.post(e.fetch,`${e.url}/ListVectorBuckets`,t,{headers:e.headers}))}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await yn.post(e.fetch,`${e.url}/DeleteVectorBucket`,{vectorBucketName:t},{headers:e.headers})||{})}},X_=class extends W_{constructor(t,e={}){super(t,e.headers||{},e.fetch)}from(t){return new J_(this.url,this.headers,t,this.fetch)}async createBucket(t){var e=()=>super.createBucket,a=this;return e().call(a,t)}async getBucket(t){var e=()=>super.getBucket,a=this;return e().call(a,t)}async listBuckets(t={}){var e=()=>super.listBuckets,a=this;return e().call(a,t)}async deleteBucket(t){var e=()=>super.deleteBucket,a=this;return e().call(a,t)}},J_=class extends K_{constructor(t,e,a,r){super(t,e,r),this.vectorBucketName=a}async createIndex(t){var e=()=>super.createIndex,a=this;return e().call(a,xe(xe({},t),{},{vectorBucketName:a.vectorBucketName}))}async listIndexes(t={}){var e=()=>super.listIndexes,a=this;return e().call(a,xe(xe({},t),{},{vectorBucketName:a.vectorBucketName}))}async getIndex(t){var e=()=>super.getIndex,a=this;return e().call(a,a.vectorBucketName,t)}async deleteIndex(t){var e=()=>super.deleteIndex,a=this;return e().call(a,a.vectorBucketName,t)}index(t){return new Q_(this.url,this.headers,this.vectorBucketName,t,this.fetch)}},Q_=class extends Y_{constructor(t,e,a,r,o){super(t,e,o),this.vectorBucketName=a,this.indexName=r}async putVectors(t){var e=()=>super.putVectors,a=this;return e().call(a,xe(xe({},t),{},{vectorBucketName:a.vectorBucketName,indexName:a.indexName}))}async getVectors(t){var e=()=>super.getVectors,a=this;return e().call(a,xe(xe({},t),{},{vectorBucketName:a.vectorBucketName,indexName:a.indexName}))}async listVectors(t={}){var e=()=>super.listVectors,a=this;return e().call(a,xe(xe({},t),{},{vectorBucketName:a.vectorBucketName,indexName:a.indexName}))}async queryVectors(t){var e=()=>super.queryVectors,a=this;return e().call(a,xe(xe({},t),{},{vectorBucketName:a.vectorBucketName,indexName:a.indexName}))}async deleteVectors(t){var e=()=>super.deleteVectors,a=this;return e().call(a,xe(xe({},t),{},{vectorBucketName:a.vectorBucketName,indexName:a.indexName}))}},Z_=class extends F_{constructor(t,e={},a,r){super(t,e,a,r)}from(t){return new I_(this.url,this.headers,t,this.fetch)}get vectors(){return new X_(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new G_(this.url+"/iceberg",this.headers,this.fetch)}};const Tx="2.108.2",Da=30*1e3,to=3,bh=to*Da,ek=2*Da,tk="http://localhost:9999",nk="supabase.auth.token",ak={"X-Client-Info":`gotrue-js/${Tx}`},rf="X-Supabase-Api-Version",Cx={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},ik=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,rk=600*1e3;class vo extends Error{constructor(e,a,r){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=a,this.code=r}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}}function ae(t){return typeof t=="object"&&t!==null&&"__isAuthError"in t}class sk extends vo{constructor(e,a,r){super(e,a,r),this.name="AuthApiError",this.status=a,this.code=r}}function ok(t){return ae(t)&&t.name==="AuthApiError"}class Gn extends vo{constructor(e,a){super(e),this.name="AuthUnknownError",this.originalError=a}}class la extends vo{constructor(e,a,r,o){super(e,r,o),this.name=a,this.status=r}}class Ot extends la{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function Xl(t){return ae(t)&&t.name==="AuthSessionMissingError"}class Ur extends la{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class Jl extends la{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class Ql extends la{constructor(e,a=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=a}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}function lk(t){return ae(t)&&t.name==="AuthImplicitGrantRedirectError"}class Ky extends la{constructor(e,a=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=a}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}class ck extends la{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}}class sf extends la{constructor(e,a){super(e,"AuthRetryableFetchError",a,void 0)}}function Yy(t){return ae(t)&&t.name==="AuthRetryableFetchError"}class Wy extends la{constructor(e="Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)"){super(e,"AuthRefreshDiscardedError",409,void 0)}}function uk(t){return ae(t)&&t.name==="AuthRefreshDiscardedError"}class Xy extends la{constructor(e,a,r){super(e,"AuthWeakPasswordError",a,"weak_password"),this.reasons=r}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}}class Sc extends la{constructor(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}}const jc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),Jy=` 	
\r=`.split(""),dk=(()=>{const t=new Array(128);for(let e=0;e<t.length;e+=1)t[e]=-1;for(let e=0;e<Jy.length;e+=1)t[Jy[e].charCodeAt(0)]=-2;for(let e=0;e<jc.length;e+=1)t[jc[e].charCodeAt(0)]=e;return t})();function Qy(t,e,a){if(t!==null)for(e.queue=e.queue<<8|t,e.queuedBits+=8;e.queuedBits>=6;){const r=e.queue>>e.queuedBits-6&63;a(jc[r]),e.queuedBits-=6}else if(e.queuedBits>0)for(e.queue=e.queue<<6-e.queuedBits,e.queuedBits=6;e.queuedBits>=6;){const r=e.queue>>e.queuedBits-6&63;a(jc[r]),e.queuedBits-=6}}function Ax(t,e,a){const r=dk[t];if(r>-1)for(e.queue=e.queue<<6|r,e.queuedBits+=6;e.queuedBits>=8;)a(e.queue>>e.queuedBits-8&255),e.queuedBits-=8;else{if(r===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(t)}"`)}}function Zy(t){const e=[],a=d=>{e.push(String.fromCodePoint(d))},r={utf8seq:0,codepoint:0},o={queue:0,queuedBits:0},l=d=>{pk(d,r,a)};for(let d=0;d<t.length;d+=1)Ax(t.charCodeAt(d),o,l);return e.join("")}function hk(t,e){if(t<=127){e(t);return}else if(t<=2047){e(192|t>>6),e(128|t&63);return}else if(t<=65535){e(224|t>>12),e(128|t>>6&63),e(128|t&63);return}else if(t<=1114111){e(240|t>>18),e(128|t>>12&63),e(128|t>>6&63),e(128|t&63);return}throw new Error(`Unrecognized Unicode codepoint: ${t.toString(16)}`)}function fk(t,e){for(let a=0;a<t.length;a+=1){let r=t.charCodeAt(a);if(r>55295&&r<=56319){const o=(r-55296)*1024&65535;r=(t.charCodeAt(a+1)-56320&65535|o)+65536,a+=1}hk(r,e)}}function pk(t,e,a){if(e.utf8seq===0){if(t<=127){a(t);return}for(let r=1;r<6;r+=1)if((t>>7-r&1)===0){e.utf8seq=r;break}if(e.utf8seq===2)e.codepoint=t&31;else if(e.utf8seq===3)e.codepoint=t&15;else if(e.utf8seq===4)e.codepoint=t&7;else throw new Error("Invalid UTF-8 sequence");e.utf8seq-=1}else if(e.utf8seq>0){if(t<=127)throw new Error("Invalid UTF-8 sequence");e.codepoint=e.codepoint<<6|t&63,e.utf8seq-=1,e.utf8seq===0&&a(e.codepoint)}}function Kr(t){const e=[],a={queue:0,queuedBits:0},r=o=>{e.push(o)};for(let o=0;o<t.length;o+=1)Ax(t.charCodeAt(o),a,r);return new Uint8Array(e)}function mk(t){const e=[];return fk(t,a=>e.push(a)),new Uint8Array(e)}function qi(t){const e=[],a={queue:0,queuedBits:0},r=o=>{e.push(o)};return t.forEach(o=>Qy(o,a,r)),Qy(null,a,r),e.join("")}function gk(t){return Math.round(Date.now()/1e3)+t}function yk(){return Symbol("auth-callback")}const It=()=>typeof window<"u"&&typeof document<"u",Pi={tested:!1,writable:!1},Nx=()=>{if(!It())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(Pi.tested)return Pi.writable;const t=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(t,t),globalThis.localStorage.removeItem(t),Pi.tested=!0,Pi.writable=!0}catch{Pi.tested=!0,Pi.writable=!1}return Pi.writable};function vk(t){const e={},a=new URL(t);if(a.hash&&a.hash[0]==="#")try{new URLSearchParams(a.hash.substring(1)).forEach((o,l)=>{e[l]=o})}catch{}return a.searchParams.forEach((r,o)=>{e[o]=r}),e}const Rx=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),bk=t=>typeof t=="object"&&t!==null&&"status"in t&&"ok"in t&&"json"in t&&typeof t.json=="function",$r=async(t,e,a)=>{await t.setItem(e,JSON.stringify(a))},$n=async(t,e)=>{const a=await t.getItem(e);if(!a)return null;try{return JSON.parse(a)}catch{return null}},vt=async(t,e)=>{await t.removeItem(e)};class Fc{constructor(){this.promise=new Fc.promiseConstructor((e,a)=>{this.resolve=e,this.reject=a})}}Fc.promiseConstructor=Promise;function Zl(t){const e=t.split(".");if(e.length!==3)throw new Sc("Invalid JWT structure");for(let r=0;r<e.length;r++)if(!ik.test(e[r]))throw new Sc("JWT not in base64url format");return{header:JSON.parse(Zy(e[0])),payload:JSON.parse(Zy(e[1])),signature:Kr(e[2]),raw:{header:e[0],payload:e[1]}}}async function xk(t){return await new Promise(e=>{setTimeout(()=>e(null),t)})}function wk(t,e){return new Promise((r,o)=>{(async()=>{for(let l=0;l<1/0;l++)try{const d=await t(l);if(!e(l,null,d)){r(d);return}}catch(d){if(!e(l,d)){o(d);return}}})()})}function Sk(t){return("0"+t.toString(16)).substr(-2)}function jk(){const e=new Uint32Array(56);if(typeof crypto>"u"){const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",r=a.length;let o="";for(let l=0;l<56;l++)o+=a.charAt(Math.floor(Math.random()*r));return o}return crypto.getRandomValues(e),Array.from(e,Sk).join("")}async function _k(t){const a=new TextEncoder().encode(t),r=await crypto.subtle.digest("SHA-256",a),o=new Uint8Array(r);return Array.from(o).map(l=>String.fromCharCode(l)).join("")}async function kk(t){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),t;const a=await _k(t);return btoa(a).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Vi(t,e,a=!1){const r=jk();let o=r;a&&(o+="/recovery"),await $r(t,`${e}-code-verifier`,o);const l=await kk(r);return[l,r===l?"plain":"s256"]}const Ek=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function Tk(t){const e=t.headers.get(rf);if(!e||!e.match(Ek))return null;try{return new Date(`${e}T00:00:00.0Z`)}catch{return null}}function Ck(t){if(!t)throw new Error("Missing exp claim");const e=Math.floor(Date.now()/1e3);if(t<=e)throw new Error("JWT has expired")}function Ak(t){switch(t){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const Nk=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function Ca(t){if(!Nk.test(t))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function In(t){if(!t.passkey)throw new Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).")}function xh(){const t={};return new Proxy(t,{get:(e,a)=>{if(a==="__isUserNotAvailableProxy")return!0;if(typeof a=="symbol"){const r=a.toString();if(r==="Symbol(Symbol.toPrimitive)"||r==="Symbol(Symbol.toStringTag)"||r==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${a}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,a)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${a}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,a)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${a}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function Rk(t,e){return new Proxy(t,{get:(a,r,o)=>{if(r==="__isInsecureUserWarningProxy")return!0;if(typeof r=="symbol"){const l=r.toString();if(l==="Symbol(Symbol.toPrimitive)"||l==="Symbol(Symbol.toStringTag)"||l==="Symbol(util.inspect.custom)"||l==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(a,r,o)}return!e.value&&typeof r=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),e.value=!0),Reflect.get(a,r,o)}})}function ev(t){return JSON.parse(JSON.stringify(t))}const Hi=t=>{if(typeof t=="object"&&t!==null){const e=t;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error}return JSON.stringify(t)},Ok=[500,501,502,503,504,520,521,522,523,524,525,526,527,528,529,530];async function tv(t){var e;if(!bk(t))throw new sf(Hi(t),0);if(Ok.includes(t.status))throw new sf(Hi(t),t.status);let a;try{a=await t.json()}catch(l){throw new Gn(Hi(l),l)}let r;const o=Tk(t);if(o&&o.getTime()>=Cx["2024-01-01"].timestamp&&typeof a=="object"&&a&&typeof a.code=="string"?r=a.code:typeof a=="object"&&a&&typeof a.error_code=="string"&&(r=a.error_code),r){if(r==="weak_password")throw new Xy(Hi(a),t.status,((e=a.weak_password)===null||e===void 0?void 0:e.reasons)||[]);if(r==="session_not_found")throw new Ot}else if(typeof a=="object"&&a&&typeof a.weak_password=="object"&&a.weak_password&&Array.isArray(a.weak_password.reasons)&&a.weak_password.reasons.length&&a.weak_password.reasons.reduce((l,d)=>l&&typeof d=="string",!0))throw new Xy(Hi(a),t.status,a.weak_password.reasons);throw new sk(Hi(a),t.status||500,r)}const Dk=(t,e,a,r)=>{const o={method:t,headers:(e==null?void 0:e.headers)||{}};return t==="GET"?o:(o.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e==null?void 0:e.headers),o.body=JSON.stringify(r),Object.assign(Object.assign({},o),a))};async function ue(t,e,a,r){var o;const l=Object.assign({},r==null?void 0:r.headers);l[rf]||(l[rf]=Cx["2024-01-01"].name),r!=null&&r.jwt&&(l.Authorization=`Bearer ${r.jwt}`);const d=(o=r==null?void 0:r.query)!==null&&o!==void 0?o:{};r!=null&&r.redirectTo&&(d.redirect_to=r.redirectTo);const h=Object.keys(d).length?"?"+new URLSearchParams(d).toString():"",p=await Lk(t,e,a+h,{headers:l,noResolveJson:r==null?void 0:r.noResolveJson},{},r==null?void 0:r.body);return r!=null&&r.xform?r==null?void 0:r.xform(p):{data:Object.assign({},p),error:null}}async function Lk(t,e,a,r,o,l){const d=Dk(e,r,o,l);let h;try{h=await t(a,Object.assign({},d))}catch(p){throw console.error(p),new sf(Hi(p),0)}if(h.ok||await tv(h),r!=null&&r.noResolveJson)return h;try{return await h.json()}catch(p){await tv(p)}}function Ln(t){var e;let a=null;Uk(t)&&(a=Object.assign({},t),t.expires_at||(a.expires_at=gk(t.expires_in)));const r=(e=t.user)!==null&&e!==void 0?e:typeof(t==null?void 0:t.id)=="string"?t:null;return{data:{session:a,user:r},error:null}}function nv(t){const e=Ln(t);return!e.error&&t.weak_password&&typeof t.weak_password=="object"&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.message&&typeof t.weak_password.message=="string"&&t.weak_password.reasons.reduce((a,r)=>a&&typeof r=="string",!0)&&(e.data.weak_password=t.weak_password),e}function ui(t){var e;return{data:{user:(e=t.user)!==null&&e!==void 0?e:t},error:null}}function Mk(t){return{data:t,error:null}}function zk(t){const{action_link:e,email_otp:a,hashed_token:r,redirect_to:o,verification_type:l}=t,d=Hc(t,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),h={action_link:e,email_otp:a,hashed_token:r,redirect_to:o,verification_type:l},p=Object.assign({},d);return{data:{properties:h,user:p},error:null}}function av(t){return t}function Uk(t){return!!t.access_token&&!!t.refresh_token&&!!t.expires_in}const wh=["global","local","others"];class Bk{constructor({url:e="",headers:a={},fetch:r,experimental:o}){this.url=e,this.headers=a,this.fetch=Rx(r),this.experimental=o??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(e,a=wh[0]){if(wh.indexOf(a)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${wh.join(", ")}`);try{return await ue(this.fetch,"POST",`${this.url}/logout?scope=${a}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(r){if(ae(r))return{data:null,error:r};throw r}}async inviteUserByEmail(e,a={}){try{return await ue(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:a.data},headers:this.headers,redirectTo:a.redirectTo,xform:ui})}catch(r){if(ae(r))return{data:{user:null},error:r};throw r}}async generateLink(e){try{const{options:a}=e,r=Hc(e,["options"]),o=Object.assign(Object.assign({},r),a);return"newEmail"in r&&(o.new_email=r==null?void 0:r.newEmail,delete o.newEmail),await ue(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:o,headers:this.headers,xform:zk,redirectTo:a==null?void 0:a.redirectTo})}catch(a){if(ae(a))return{data:{properties:null,user:null},error:a};throw a}}async createUser(e){try{return await ue(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:ui})}catch(a){if(ae(a))return{data:{user:null},error:a};throw a}}async listUsers(e){var a,r,o,l,d,h,p;try{const m={nextPage:null,lastPage:0,total:0},y=await ue(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(r=(a=e==null?void 0:e.page)===null||a===void 0?void 0:a.toString())!==null&&r!==void 0?r:"",per_page:(l=(o=e==null?void 0:e.perPage)===null||o===void 0?void 0:o.toString())!==null&&l!==void 0?l:""},xform:av});if(y.error)throw y.error;const v=await y.json(),x=(d=y.headers.get("x-total-count"))!==null&&d!==void 0?d:0,w=(p=(h=y.headers.get("link"))===null||h===void 0?void 0:h.split(","))!==null&&p!==void 0?p:[];return w.length>0&&(w.forEach(j=>{const E=parseInt(j.split(";")[0].split("=")[1].substring(0,1)),T=JSON.parse(j.split(";")[1].split("=")[1]);m[`${T}Page`]=E}),m.total=parseInt(x)),{data:Object.assign(Object.assign({},v),m),error:null}}catch(m){if(ae(m))return{data:{users:[]},error:m};throw m}}async getUserById(e){Ca(e);try{return await ue(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:ui})}catch(a){if(ae(a))return{data:{user:null},error:a};throw a}}async updateUserById(e,a){Ca(e);try{return await ue(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:a,headers:this.headers,xform:ui})}catch(r){if(ae(r))return{data:{user:null},error:r};throw r}}async deleteUser(e,a=!1){Ca(e);try{return await ue(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:a},xform:ui})}catch(r){if(ae(r))return{data:{user:null},error:r};throw r}}async _listFactors(e){Ca(e.userId);try{const{data:a,error:r}=await ue(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:o=>({data:{factors:o},error:null})});return{data:a,error:r}}catch(a){if(ae(a))return{data:null,error:a};throw a}}async _deleteFactor(e){Ca(e.userId),Ca(e.id);try{return{data:await ue(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(a){if(ae(a))return{data:null,error:a};throw a}}async _listOAuthClients(e){var a,r,o,l,d,h,p;try{const m={nextPage:null,lastPage:0,total:0},y=await ue(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(r=(a=e==null?void 0:e.page)===null||a===void 0?void 0:a.toString())!==null&&r!==void 0?r:"",per_page:(l=(o=e==null?void 0:e.perPage)===null||o===void 0?void 0:o.toString())!==null&&l!==void 0?l:""},xform:av});if(y.error)throw y.error;const v=await y.json(),x=(d=y.headers.get("x-total-count"))!==null&&d!==void 0?d:0,w=(p=(h=y.headers.get("link"))===null||h===void 0?void 0:h.split(","))!==null&&p!==void 0?p:[];return w.length>0&&(w.forEach(j=>{const E=parseInt(j.split(";")[0].split("=")[1].substring(0,1)),T=JSON.parse(j.split(";")[1].split("=")[1]);m[`${T}Page`]=E}),m.total=parseInt(x)),{data:Object.assign(Object.assign({},v),m),error:null}}catch(m){if(ae(m))return{data:{clients:[]},error:m};throw m}}async _createOAuthClient(e){try{return await ue(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(ae(a))return{data:null,error:a};throw a}}async _getOAuthClient(e){try{return await ue(this.fetch,"GET",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(ae(a))return{data:null,error:a};throw a}}async _updateOAuthClient(e,a){try{return await ue(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${e}`,{body:a,headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(ae(r))return{data:null,error:r};throw r}}async _deleteOAuthClient(e){try{return await ue(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(a){if(ae(a))return{data:null,error:a};throw a}}async _regenerateOAuthClientSecret(e){try{return await ue(this.fetch,"POST",`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(ae(a))return{data:null,error:a};throw a}}async _listCustomProviders(e){try{const a={};return e!=null&&e.type&&(a.type=e.type),await ue(this.fetch,"GET",`${this.url}/admin/custom-providers`,{headers:this.headers,query:a,xform:r=>{var o;return{data:{providers:(o=r==null?void 0:r.providers)!==null&&o!==void 0?o:[]},error:null}}})}catch(a){if(ae(a))return{data:{providers:[]},error:a};throw a}}async _createCustomProvider(e){try{return await ue(this.fetch,"POST",`${this.url}/admin/custom-providers`,{body:e,headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(ae(a))return{data:null,error:a};throw a}}async _getCustomProvider(e){try{return await ue(this.fetch,"GET",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(ae(a))return{data:null,error:a};throw a}}async _updateCustomProvider(e,a){try{return await ue(this.fetch,"PUT",`${this.url}/admin/custom-providers/${e}`,{body:a,headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(ae(r))return{data:null,error:r};throw r}}async _deleteCustomProvider(e){try{return await ue(this.fetch,"DELETE",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(a){if(ae(a))return{data:null,error:a};throw a}}async _adminListPasskeys(e){In(this.experimental),Ca(e.userId);try{return await ue(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/passkeys`,{headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(ae(a))return{data:null,error:a};throw a}}async _adminDeletePasskey(e){In(this.experimental),Ca(e.userId),Ca(e.passkeyId);try{return await ue(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(a){if(ae(a))return{data:null,error:a};throw a}}}function iv(t={}){return{getItem:e=>t[e]||null,setItem:(e,a)=>{t[e]=a},removeItem:e=>{delete t[e]}}}globalThis&&Nx()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");class Pk extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}function Vk(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function Ox(t){if(!/^0x[a-fA-F0-9]{40}$/.test(t))throw new Error(`@supabase/auth-js: Address "${t}" is invalid.`);return t.toLowerCase()}function $k(t){return parseInt(t,16)}function Hk(t){const e=new TextEncoder().encode(t);return"0x"+Array.from(e,r=>r.toString(16).padStart(2,"0")).join("")}function Ik(t){var e;const{chainId:a,domain:r,expirationTime:o,issuedAt:l=new Date,nonce:d,notBefore:h,requestId:p,resources:m,scheme:y,uri:v,version:x}=t;{if(!Number.isInteger(a))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${a}`);if(!r)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(d&&d.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${d}`);if(!v)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(x!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${x}`);if(!((e=t.statement)===null||e===void 0)&&e.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${t.statement}`)}const w=Ox(t.address),j=y?`${y}://${r}`:r,E=t.statement?`${t.statement}
`:"",T=`${j} wants you to sign in with your Ethereum account:
${w}

${E}`;let k=`URI: ${v}
Version: ${x}
Chain ID: ${a}${d?`
Nonce: ${d}`:""}
Issued At: ${l.toISOString()}`;if(o&&(k+=`
Expiration Time: ${o.toISOString()}`),h&&(k+=`
Not Before: ${h.toISOString()}`),p&&(k+=`
Request ID: ${p}`),m){let C=`
Resources:`;for(const N of m){if(!N||typeof N!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${N}`);C+=`
- ${N}`}k+=C}return`${T}
${k}`}class kt extends Error{constructor({message:e,code:a,cause:r,name:o}){var l;super(e,{cause:r}),this.__isWebAuthnError=!0,this.name=(l=o??(r instanceof Error?r.name:void 0))!==null&&l!==void 0?l:"Unknown Error",this.code=a}toJSON(){return{name:this.name,message:this.message,code:this.code}}}class _c extends kt{constructor(e,a){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:a,message:e}),this.name="WebAuthnUnknownError",this.originalError=a}}function qk({error:t,options:e}){var a,r,o;const{publicKey:l}=e;if(!l)throw Error("options was missing required publicKey property");if(t.name==="AbortError"){if(e.signal instanceof AbortSignal)return new kt({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:t})}else if(t.name==="ConstraintError"){if(((a=l.authenticatorSelection)===null||a===void 0?void 0:a.requireResidentKey)===!0)return new kt({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:t});if(e.mediation==="conditional"&&((r=l.authenticatorSelection)===null||r===void 0?void 0:r.userVerification)==="required")return new kt({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:t});if(((o=l.authenticatorSelection)===null||o===void 0?void 0:o.userVerification)==="required")return new kt({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:t})}else{if(t.name==="InvalidStateError")return new kt({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:t});if(t.name==="NotAllowedError")return new kt({message:t.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t});if(t.name==="NotSupportedError")return l.pubKeyCredParams.filter(h=>h.type==="public-key").length===0?new kt({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:t}):new kt({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:t});if(t.name==="SecurityError"){const d=window.location.hostname;if(Dx(d)){if(l.rp.id!==d)return new kt({message:`The RP ID "${l.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:t})}else return new kt({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:t})}else if(t.name==="TypeError"){if(l.user.id.byteLength<1||l.user.id.byteLength>64)return new kt({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:t})}else if(t.name==="UnknownError")return new kt({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:t})}return new kt({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t})}function Fk({error:t,options:e}){const{publicKey:a}=e;if(!a)throw Error("options was missing required publicKey property");if(t.name==="AbortError"){if(e.signal instanceof AbortSignal)return new kt({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:t})}else{if(t.name==="NotAllowedError")return new kt({message:t.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t});if(t.name==="SecurityError"){const r=window.location.hostname;if(Dx(r)){if(a.rpId!==r)return new kt({message:`The RP ID "${a.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:t})}else return new kt({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:t})}else if(t.name==="UnknownError")return new kt({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:t})}return new kt({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t})}class Gk{createNewAbortSignal(){if(this.controller){const a=new Error("Cancelling existing WebAuthn API call for new one");a.name="AbortError",this.controller.abort(a)}const e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){const e=new Error("Manually cancelling existing WebAuthn API call");e.name="AbortError",this.controller.abort(e),this.controller=void 0}}}const of=new Gk;function rv(t){if(!t)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(t);const{challenge:e,user:a,excludeCredentials:r}=t,o=Hc(t,["challenge","user","excludeCredentials"]),l=Kr(e).buffer,d=Object.assign(Object.assign({},a),{id:Kr(a.id).buffer}),h=Object.assign(Object.assign({},o),{challenge:l,user:d});if(r&&r.length>0){h.excludeCredentials=new Array(r.length);for(let p=0;p<r.length;p++){const m=r[p];h.excludeCredentials[p]=Object.assign(Object.assign({},m),{id:Kr(m.id).buffer,type:m.type||"public-key",transports:m.transports})}}return h}function sv(t){if(!t)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(t);const{challenge:e,allowCredentials:a}=t,r=Hc(t,["challenge","allowCredentials"]),o=Kr(e).buffer,l=Object.assign(Object.assign({},r),{challenge:o});if(a&&a.length>0){l.allowCredentials=new Array(a.length);for(let d=0;d<a.length;d++){const h=a[d];l.allowCredentials[d]=Object.assign(Object.assign({},h),{id:Kr(h.id).buffer,type:h.type||"public-key",transports:h.transports})}}return l}function ov(t){var e;if("toJSON"in t&&typeof t.toJSON=="function")return t.toJSON();const a=t;return{id:t.id,rawId:t.id,response:{attestationObject:qi(new Uint8Array(t.response.attestationObject)),clientDataJSON:qi(new Uint8Array(t.response.clientDataJSON))},type:"public-key",clientExtensionResults:t.getClientExtensionResults(),authenticatorAttachment:(e=a.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function lv(t){var e;if("toJSON"in t&&typeof t.toJSON=="function")return t.toJSON();const a=t,r=t.getClientExtensionResults(),o=t.response;return{id:t.id,rawId:t.id,response:{authenticatorData:qi(new Uint8Array(o.authenticatorData)),clientDataJSON:qi(new Uint8Array(o.clientDataJSON)),signature:qi(new Uint8Array(o.signature)),userHandle:o.userHandle?qi(new Uint8Array(o.userHandle)):void 0},type:"public-key",clientExtensionResults:r,authenticatorAttachment:(e=a.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function Dx(t){return t==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(t)}function kc(){var t,e;return!!(It()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((t=navigator==null?void 0:navigator.credentials)===null||t===void 0?void 0:t.create)=="function"&&typeof((e=navigator==null?void 0:navigator.credentials)===null||e===void 0?void 0:e.get)=="function")}async function Lx(t){try{const e=await navigator.credentials.create(t);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new _c("Browser returned unexpected credential type",e)}:{data:null,error:new _c("Empty credential response",e)}}catch(e){return{data:null,error:qk({error:e,options:t})}}}async function Mx(t){try{const e=await navigator.credentials.get(t);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new _c("Browser returned unexpected credential type",e)}:{data:null,error:new _c("Empty credential response",e)}}catch(e){return{data:null,error:Fk({error:e,options:t})}}}const Kk={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},Yk={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function Ec(...t){const e=o=>o!==null&&typeof o=="object"&&!Array.isArray(o),a=o=>o instanceof ArrayBuffer||ArrayBuffer.isView(o),r={};for(const o of t)if(o)for(const l in o){const d=o[l];if(d!==void 0)if(Array.isArray(d))r[l]=d;else if(a(d))r[l]=d;else if(e(d)){const h=r[l];e(h)?r[l]=Ec(h,d):r[l]=Ec(d)}else r[l]=d}return r}function Wk(t,e){return Ec(Kk,t,e||{})}function Xk(t,e){return Ec(Yk,t,e||{})}class Jk{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:"webauthn"}))}async _challenge({factorId:e,webauthn:a,friendlyName:r,signal:o},l){var d;try{const{data:h,error:p}=await this.client.mfa.challenge({factorId:e,webauthn:a});if(!h)return{data:null,error:p};const m=o??of.createNewAbortSignal();if(h.webauthn.type==="create"){const{user:y}=h.webauthn.credential_options.publicKey;if(!y.name){const v=r;if(v)y.name=`${y.id}:${v}`;else{const w=(await this.client.getUser()).data.user,j=((d=w==null?void 0:w.user_metadata)===null||d===void 0?void 0:d.name)||(w==null?void 0:w.email)||(w==null?void 0:w.id)||"User";y.name=`${y.id}:${j}`}}y.displayName||(y.displayName=y.name)}switch(h.webauthn.type){case"create":{const y=Wk(h.webauthn.credential_options.publicKey,l==null?void 0:l.create),{data:v,error:x}=await Lx({publicKey:y,signal:m});return v?{data:{factorId:e,challengeId:h.id,webauthn:{type:h.webauthn.type,credential_response:v}},error:null}:{data:null,error:x}}case"request":{const y=Xk(h.webauthn.credential_options.publicKey,l==null?void 0:l.request),{data:v,error:x}=await Mx(Object.assign(Object.assign({},h.webauthn.credential_options),{publicKey:y,signal:m}));return v?{data:{factorId:e,challengeId:h.id,webauthn:{type:h.webauthn.type,credential_response:v}},error:null}:{data:null,error:x}}}}catch(h){return ae(h)?{data:null,error:h}:{data:null,error:new Gn("Unexpected error in challenge",h)}}}async _verify({challengeId:e,factorId:a,webauthn:r}){return this.client.mfa.verify({factorId:a,challengeId:e,webauthn:r})}async _authenticate({factorId:e,webauthn:{rpId:a=typeof window<"u"?window.location.hostname:void 0,rpOrigins:r=typeof window<"u"?[window.location.origin]:void 0,signal:o}={}},l){if(!a)return{data:null,error:new vo("rpId is required for WebAuthn authentication")};try{if(!kc())return{data:null,error:new Gn("Browser does not support WebAuthn",null)};const{data:d,error:h}=await this.challenge({factorId:e,webauthn:{rpId:a,rpOrigins:r},signal:o},{request:l});if(!d)return{data:null,error:h};const{webauthn:p}=d;return this._verify({factorId:e,challengeId:d.challengeId,webauthn:{type:p.type,rpId:a,rpOrigins:r,credential_response:p.credential_response}})}catch(d){return ae(d)?{data:null,error:d}:{data:null,error:new Gn("Unexpected error in authenticate",d)}}}async _register({friendlyName:e,webauthn:{rpId:a=typeof window<"u"?window.location.hostname:void 0,rpOrigins:r=typeof window<"u"?[window.location.origin]:void 0,signal:o}={}},l){if(!a)return{data:null,error:new vo("rpId is required for WebAuthn registration")};try{if(!kc())return{data:null,error:new Gn("Browser does not support WebAuthn",null)};const{data:d,error:h}=await this._enroll({friendlyName:e});if(!d)return await this.client.mfa.listFactors().then(y=>{var v;return(v=y.data)===null||v===void 0?void 0:v.all.find(x=>x.factor_type==="webauthn"&&x.friendly_name===e&&x.status!=="unverified")}).then(y=>y?this.client.mfa.unenroll({factorId:y==null?void 0:y.id}):void 0),{data:null,error:h};const{data:p,error:m}=await this._challenge({factorId:d.id,friendlyName:d.friendly_name,webauthn:{rpId:a,rpOrigins:r},signal:o},{create:l});return p?this._verify({factorId:d.id,challengeId:p.challengeId,webauthn:{rpId:a,rpOrigins:r,type:p.webauthn.type,credential_response:p.webauthn.credential_response}}):{data:null,error:m}}catch(d){return ae(d)?{data:null,error:d}:{data:null,error:new Gn("Unexpected error in register",d)}}}}Vk();const Qk={url:tk,storageKey:nk,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:ak,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}},Br={};class bo{get jwks(){var e,a;return(a=(e=Br[this.storageKey])===null||e===void 0?void 0:e.jwks)!==null&&a!==void 0?a:{keys:[]}}set jwks(e){Br[this.storageKey]=Object.assign(Object.assign({},Br[this.storageKey]),{jwks:e})}get jwks_cached_at(){var e,a;return(a=(e=Br[this.storageKey])===null||e===void 0?void 0:e.cachedAt)!==null&&a!==void 0?a:Number.MIN_SAFE_INTEGER}set jwks_cached_at(e){Br[this.storageKey]=Object.assign(Object.assign({},Br[this.storageKey]),{cachedAt:e})}constructor(e){var a,r,o;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.lastRefreshFailure=null,this._sessionRemovalEpoch=0,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lock=null,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const l=Object.assign(Object.assign({},Qk),e);if(this.storageKey=l.storageKey,this.instanceID=(a=bo.nextInstanceID[this.storageKey])!==null&&a!==void 0?a:0,bo.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!l.debug,typeof l.debug=="function"&&(this.logger=l.debug),this.instanceID>0&&It()){const d=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(d),this.logDebugMessages&&console.trace(d)}if(this.persistSession=l.persistSession,this.autoRefreshToken=l.autoRefreshToken,this.experimental=(r=l.experimental)!==null&&r!==void 0?r:{},this.admin=new Bk({url:l.url,headers:l.headers,fetch:l.fetch,experimental:this.experimental}),this.url=l.url,this.headers=l.headers,this.fetch=Rx(l.fetch),this.detectSessionInUrl=l.detectSessionInUrl,this.flowType=l.flowType,this.hasCustomAuthorizationHeader=l.hasCustomAuthorizationHeader,this.throwOnError=l.throwOnError,this.lockAcquireTimeout=l.lockAcquireTimeout,l.lock!=null&&(this.lock=l.lock),this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new Jk(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(l.storage?this.storage=l.storage:Nx()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=iv(this.memoryStorage)),l.userStorage&&(this.userStorage=l.userStorage)):(this.memoryStorage={},this.storage=iv(this.memoryStorage)),It()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(d){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",d)}(o=this.broadcastChannel)===null||o===void 0||o.addEventListener("message",async d=>{this._debug("received broadcast notification from other tab or client",d),(d.data.event==="TOKEN_REFRESHED"||d.data.event==="SIGNED_IN")&&(this.lastRefreshFailure=null);try{await this._notifyAllSubscribers(d.data.event,d.data.session,!1)}catch(h){this._debug("#broadcastChannel","error",h)}})}l.skipAutoInitialize||this.initialize().catch(d=>{this._debug("#initialize()","error",d)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${Tx}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()):await this._initialize())(),await this.initializePromise)}async _initialize(){var e;try{let a={},r="none";if(It()&&(a=vk(window.location.href),this._isImplicitGrantCallback(a)?r="implicit":await this._isPKCECallback(a)&&(r="pkce")),It()&&this.detectSessionInUrl&&r!=="none"){const{data:o,error:l}=await this._getSessionFromURL(a,r);if(l){if(this._debug("#_initialize()","error detecting session from URL",l),lk(l)){const p=(e=l.details)===null||e===void 0?void 0:e.code;if(p==="identity_already_exists"||p==="identity_not_found"||p==="single_identity_not_deletable")return{error:l}}return{error:l}}const{session:d,redirectType:h}=o;return this._debug("#_initialize()","detected session in URL",d,"redirect type",h),await this._saveSession(d),setTimeout(async()=>{h==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",d):await this._notifyAllSubscribers("SIGNED_IN",d)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(a){return ae(a)?this._returnResult({error:a}):this._returnResult({error:new Gn("Unexpected error during initialization",a)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var a,r,o;try{const l=await ue(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(r=(a=e==null?void 0:e.options)===null||a===void 0?void 0:a.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:(o=e==null?void 0:e.options)===null||o===void 0?void 0:o.captchaToken}},xform:Ln}),{data:d,error:h}=l;if(h||!d)return this._returnResult({data:{user:null,session:null},error:h});const p=d.session,m=d.user;return d.session&&(await this._saveSession(d.session),await this._notifyAllSubscribers("SIGNED_IN",p)),this._returnResult({data:{user:m,session:p},error:null})}catch(l){if(ae(l))return this._returnResult({data:{user:null,session:null},error:l});throw l}}async signUp(e){var a,r,o;try{let l;if("email"in e){const{email:y,password:v,options:x}=e;let w=null,j=null;this.flowType==="pkce"&&([w,j]=await Vi(this.storage,this.storageKey)),l=await ue(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:x==null?void 0:x.emailRedirectTo,body:{email:y,password:v,data:(a=x==null?void 0:x.data)!==null&&a!==void 0?a:{},gotrue_meta_security:{captcha_token:x==null?void 0:x.captchaToken},code_challenge:w,code_challenge_method:j},xform:Ln})}else if("phone"in e){const{phone:y,password:v,options:x}=e;l=await ue(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:y,password:v,data:(r=x==null?void 0:x.data)!==null&&r!==void 0?r:{},channel:(o=x==null?void 0:x.channel)!==null&&o!==void 0?o:"sms",gotrue_meta_security:{captcha_token:x==null?void 0:x.captchaToken}},xform:Ln})}else throw new Jl("You must provide either an email or phone number and a password");const{data:d,error:h}=l;if(h||!d)return await vt(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:h});const p=d.session,m=d.user;return d.session&&(await this._saveSession(d.session),await this._notifyAllSubscribers("SIGNED_IN",p)),this._returnResult({data:{user:m,session:p},error:null})}catch(l){if(await vt(this.storage,`${this.storageKey}-code-verifier`),ae(l))return this._returnResult({data:{user:null,session:null},error:l});throw l}}async signInWithPassword(e){try{let a;if("email"in e){const{email:l,password:d,options:h}=e;a=await ue(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:l,password:d,gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken}},xform:nv})}else if("phone"in e){const{phone:l,password:d,options:h}=e;a=await ue(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:l,password:d,gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken}},xform:nv})}else throw new Jl("You must provide either an email or phone number and a password");const{data:r,error:o}=a;if(o)return this._returnResult({data:{user:null,session:null},error:o});if(!r||!r.session||!r.user){const l=new Ur;return this._returnResult({data:{user:null,session:null},error:l})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers("SIGNED_IN",r.session)),this._returnResult({data:Object.assign({user:r.user,session:r.session},r.weak_password?{weakPassword:r.weak_password}:null),error:o})}catch(a){if(ae(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async signInWithOAuth(e){var a,r,o,l;return await this._handleProviderSignIn(e.provider,{redirectTo:(a=e.options)===null||a===void 0?void 0:a.redirectTo,scopes:(r=e.options)===null||r===void 0?void 0:r.scopes,queryParams:(o=e.options)===null||o===void 0?void 0:o.queryParams,skipBrowserRedirect:(l=e.options)===null||l===void 0?void 0:l.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this.lock!=null?this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(e)):this._exchangeCodeForSession(e)}async signInWithWeb3(e){const{chain:a}=e;switch(a){case"ethereum":return await this.signInWithEthereum(e);case"solana":return await this.signInWithSolana(e);default:throw new Error(`@supabase/auth-js: Unsupported chain "${a}"`)}}async signInWithEthereum(e){var a,r,o,l,d,h,p,m,y,v,x;let w,j;if("message"in e)w=e.message,j=e.signature;else{const{chain:E,wallet:T,statement:k,options:C}=e;let N;if(It())if(typeof T=="object")N=T;else{const H=window;if("ethereum"in H&&typeof H.ethereum=="object"&&"request"in H.ethereum&&typeof H.ethereum.request=="function")N=H.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof T!="object"||!(C!=null&&C.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");N=T}const z=new URL((a=C==null?void 0:C.url)!==null&&a!==void 0?a:window.location.href),J=await N.request({method:"eth_requestAccounts"}).then(H=>H).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!J||J.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const Q=Ox(J[0]);let D=(r=C==null?void 0:C.signInWithEthereum)===null||r===void 0?void 0:r.chainId;if(!D){const H=await N.request({method:"eth_chainId"});D=$k(H)}const q={domain:z.host,address:Q,statement:k,uri:z.href,version:"1",chainId:D,nonce:(o=C==null?void 0:C.signInWithEthereum)===null||o===void 0?void 0:o.nonce,issuedAt:(d=(l=C==null?void 0:C.signInWithEthereum)===null||l===void 0?void 0:l.issuedAt)!==null&&d!==void 0?d:new Date,expirationTime:(h=C==null?void 0:C.signInWithEthereum)===null||h===void 0?void 0:h.expirationTime,notBefore:(p=C==null?void 0:C.signInWithEthereum)===null||p===void 0?void 0:p.notBefore,requestId:(m=C==null?void 0:C.signInWithEthereum)===null||m===void 0?void 0:m.requestId,resources:(y=C==null?void 0:C.signInWithEthereum)===null||y===void 0?void 0:y.resources};w=Ik(q),j=await N.request({method:"personal_sign",params:[Hk(w),Q]})}try{const{data:E,error:T}=await ue(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:w,signature:j},!((v=e.options)===null||v===void 0)&&v.captchaToken?{gotrue_meta_security:{captcha_token:(x=e.options)===null||x===void 0?void 0:x.captchaToken}}:null),xform:Ln});if(T)throw T;if(!E||!E.session||!E.user){const k=new Ur;return this._returnResult({data:{user:null,session:null},error:k})}return E.session&&(await this._saveSession(E.session),await this._notifyAllSubscribers("SIGNED_IN",E.session)),this._returnResult({data:Object.assign({},E),error:T})}catch(E){if(ae(E))return this._returnResult({data:{user:null,session:null},error:E});throw E}}async signInWithSolana(e){var a,r,o,l,d,h,p,m,y,v,x,w;let j,E;if("message"in e)j=e.message,E=e.signature;else{const{chain:T,wallet:k,statement:C,options:N}=e;let z;if(It())if(typeof k=="object")z=k;else{const Q=window;if("solana"in Q&&typeof Q.solana=="object"&&("signIn"in Q.solana&&typeof Q.solana.signIn=="function"||"signMessage"in Q.solana&&typeof Q.solana.signMessage=="function"))z=Q.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof k!="object"||!(N!=null&&N.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");z=k}const J=new URL((a=N==null?void 0:N.url)!==null&&a!==void 0?a:window.location.href);if("signIn"in z&&z.signIn){const Q=await z.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},N==null?void 0:N.signInWithSolana),{version:"1",domain:J.host,uri:J.href}),C?{statement:C}:null));let D;if(Array.isArray(Q)&&Q[0]&&typeof Q[0]=="object")D=Q[0];else if(Q&&typeof Q=="object"&&"signedMessage"in Q&&"signature"in Q)D=Q;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in D&&"signature"in D&&(typeof D.signedMessage=="string"||D.signedMessage instanceof Uint8Array)&&D.signature instanceof Uint8Array)j=typeof D.signedMessage=="string"?D.signedMessage:new TextDecoder().decode(D.signedMessage),E=D.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in z)||typeof z.signMessage!="function"||!("publicKey"in z)||typeof z!="object"||!z.publicKey||!("toBase58"in z.publicKey)||typeof z.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");j=[`${J.host} wants you to sign in with your Solana account:`,z.publicKey.toBase58(),...C?["",C,""]:[""],"Version: 1",`URI: ${J.href}`,`Issued At: ${(o=(r=N==null?void 0:N.signInWithSolana)===null||r===void 0?void 0:r.issuedAt)!==null&&o!==void 0?o:new Date().toISOString()}`,...!((l=N==null?void 0:N.signInWithSolana)===null||l===void 0)&&l.notBefore?[`Not Before: ${N.signInWithSolana.notBefore}`]:[],...!((d=N==null?void 0:N.signInWithSolana)===null||d===void 0)&&d.expirationTime?[`Expiration Time: ${N.signInWithSolana.expirationTime}`]:[],...!((h=N==null?void 0:N.signInWithSolana)===null||h===void 0)&&h.chainId?[`Chain ID: ${N.signInWithSolana.chainId}`]:[],...!((p=N==null?void 0:N.signInWithSolana)===null||p===void 0)&&p.nonce?[`Nonce: ${N.signInWithSolana.nonce}`]:[],...!((m=N==null?void 0:N.signInWithSolana)===null||m===void 0)&&m.requestId?[`Request ID: ${N.signInWithSolana.requestId}`]:[],...!((v=(y=N==null?void 0:N.signInWithSolana)===null||y===void 0?void 0:y.resources)===null||v===void 0)&&v.length?["Resources",...N.signInWithSolana.resources.map(D=>`- ${D}`)]:[]].join(`
`);const Q=await z.signMessage(new TextEncoder().encode(j),"utf8");if(!Q||!(Q instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");E=Q}}try{const{data:T,error:k}=await ue(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:j,signature:qi(E)},!((x=e.options)===null||x===void 0)&&x.captchaToken?{gotrue_meta_security:{captcha_token:(w=e.options)===null||w===void 0?void 0:w.captchaToken}}:null),xform:Ln});if(k)throw k;if(!T||!T.session||!T.user){const C=new Ur;return this._returnResult({data:{user:null,session:null},error:C})}return T.session&&(await this._saveSession(T.session),await this._notifyAllSubscribers("SIGNED_IN",T.session)),this._returnResult({data:Object.assign({},T),error:k})}catch(T){if(ae(T))return this._returnResult({data:{user:null,session:null},error:T});throw T}}async _exchangeCodeForSession(e){const a=await $n(this.storage,`${this.storageKey}-code-verifier`),[r,o]=(a??"").split("/");try{if(!r&&this.flowType==="pkce")throw new ck;const{data:l,error:d}=await ue(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:r},xform:Ln});if(await vt(this.storage,`${this.storageKey}-code-verifier`),d)throw d;if(!l||!l.session||!l.user){const h=new Ur;return this._returnResult({data:{user:null,session:null,redirectType:null},error:h})}return l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers(o==="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l.session)),this._returnResult({data:Object.assign(Object.assign({},l),{redirectType:o??null}),error:d})}catch(l){if(await vt(this.storage,`${this.storageKey}-code-verifier`),ae(l))return this._returnResult({data:{user:null,session:null,redirectType:null},error:l});throw l}}async signInWithIdToken(e){try{const{options:a,provider:r,token:o,access_token:l,nonce:d}=e,h=await ue(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:r,id_token:o,access_token:l,nonce:d,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:Ln}),{data:p,error:m}=h;if(m)return this._returnResult({data:{user:null,session:null},error:m});if(!p||!p.session||!p.user){const y=new Ur;return this._returnResult({data:{user:null,session:null},error:y})}return p.session&&(await this._saveSession(p.session),await this._notifyAllSubscribers("SIGNED_IN",p.session)),this._returnResult({data:p,error:m})}catch(a){if(ae(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async signInWithOtp(e){var a,r,o,l,d;try{if("email"in e){const{email:h,options:p}=e;let m=null,y=null;this.flowType==="pkce"&&([m,y]=await Vi(this.storage,this.storageKey));const{error:v}=await ue(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:h,data:(a=p==null?void 0:p.data)!==null&&a!==void 0?a:{},create_user:(r=p==null?void 0:p.shouldCreateUser)!==null&&r!==void 0?r:!0,gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken},code_challenge:m,code_challenge_method:y},redirectTo:p==null?void 0:p.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:v})}if("phone"in e){const{phone:h,options:p}=e,{data:m,error:y}=await ue(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:h,data:(o=p==null?void 0:p.data)!==null&&o!==void 0?o:{},create_user:(l=p==null?void 0:p.shouldCreateUser)!==null&&l!==void 0?l:!0,gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken},channel:(d=p==null?void 0:p.channel)!==null&&d!==void 0?d:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:m==null?void 0:m.message_id},error:y})}throw new Jl("You must provide either an email or phone number.")}catch(h){if(await vt(this.storage,`${this.storageKey}-code-verifier`),ae(h))return this._returnResult({data:{user:null,session:null},error:h});throw h}}async verifyOtp(e){var a,r;try{let o,l;"options"in e&&(o=(a=e.options)===null||a===void 0?void 0:a.redirectTo,l=(r=e.options)===null||r===void 0?void 0:r.captchaToken);const{data:d,error:h}=await ue(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:l}}),redirectTo:o,xform:Ln});if(h)throw h;if(!d)throw new Error("An error occurred on token verification.");const p=d.session,m=d.user;return p!=null&&p.access_token&&(await this._saveSession(p),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",p)),this._returnResult({data:{user:m,session:p},error:null})}catch(o){if(ae(o))return this._returnResult({data:{user:null,session:null},error:o});throw o}}async signInWithSSO(e){var a,r,o,l,d;try{let h=null,p=null;this.flowType==="pkce"&&([h,p]=await Vi(this.storage,this.storageKey));const m=await ue(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:(r=(a=e.options)===null||a===void 0?void 0:a.redirectTo)!==null&&r!==void 0?r:void 0}),!((o=e==null?void 0:e.options)===null||o===void 0)&&o.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:h,code_challenge_method:p}),headers:this.headers,xform:Mk});return!((l=m.data)===null||l===void 0)&&l.url&&It()&&!(!((d=e.options)===null||d===void 0)&&d.skipBrowserRedirect)&&window.location.assign(m.data.url),this._returnResult(m)}catch(h){if(await vt(this.storage,`${this.storageKey}-code-verifier`),ae(h))return this._returnResult({data:null,error:h});throw h}}async reauthenticate(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate()):await this._reauthenticate()}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:a},error:r}=e;if(r)throw r;if(!a)throw new Ot;const{error:o}=await ue(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:a.access_token});return this._returnResult({data:{user:null,session:null},error:o})})}catch(e){if(ae(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){try{const a=`${this.url}/resend`;if("email"in e){const{email:r,type:o,options:l}=e;let d=null,h=null;this.flowType==="pkce"&&([d,h]=await Vi(this.storage,this.storageKey));const{error:p}=await ue(this.fetch,"POST",a,{headers:this.headers,body:{email:r,type:o,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},code_challenge:d,code_challenge_method:h},redirectTo:l==null?void 0:l.emailRedirectTo});return p&&await vt(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:p})}else if("phone"in e){const{phone:r,type:o,options:l}=e,{data:d,error:h}=await ue(this.fetch,"POST",a,{headers:this.headers,body:{phone:r,type:o,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:d==null?void 0:d.message_id},error:h})}throw new Jl("You must provide either an email or phone number and a type")}catch(a){if(await vt(this.storage,`${this.storageKey}-code-verifier`),ae(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async getSession(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async e=>e)):await this._useSession(async e=>e)}async _acquireLock(e,a){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const r=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),o=(async()=>(await r,await a()))();return this.pendingInLock.push((async()=>{try{await o}catch{}})()),o}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const r=a();for(this.pendingInLock.push((async()=>{try{await r}catch{}})()),await r;this.pendingInLock.length;){const o=[...this.pendingInLock];await Promise.all(o),this.pendingInLock.splice(0,o.length)}return await r}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const a=await this.__loadSession();return await e(a)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lock!=null&&!this.lockAcquired&&this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null;const a=await $n(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",a),a!==null&&(this._isValidSession(a)?e=a:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const r=e.expires_at?e.expires_at*1e3-Date.now()<bh:!1;if(this._debug("#__loadSession()",`session has${r?"":" not"} expired`,"expires_at",e.expires_at),!r){if(this.userStorage){const d=await $n(this.userStorage,this.storageKey+"-user");d!=null&&d.user?e.user=d.user:e.user=xh()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){const d={value:this.suppressGetSessionWarning};e.user=Rk(e.user,d),d.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:e},error:null}}const{data:o,error:l}=await this._callRefreshToken(e.refresh_token);if(l){if(!!(e.expires_at&&e.expires_at*1e3>Date.now())){const h=await $n(this.storage,this.storageKey);if(h&&h.refresh_token===e.refresh_token)return this._returnResult({data:{session:e},error:null})}return this._returnResult({data:{session:null},error:l})}return this._returnResult({data:{session:o},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(e){if(e)return await this._getUser(e);await this.initializePromise;let a;return this.lock!=null?a=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser()):a=await this._getUser(),a.data.user&&(this.suppressGetSessionWarning=!0),a}async _getUser(e){try{return e?await ue(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:ui}):await this._useSession(async a=>{var r,o,l;const{data:d,error:h}=a;if(h)throw h;return!(!((r=d.session)===null||r===void 0)&&r.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new Ot}:await ue(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(l=(o=d.session)===null||o===void 0?void 0:o.access_token)!==null&&l!==void 0?l:void 0,xform:ui})})}catch(a){if(ae(a))return Xl(a)&&(await this._removeSession(),await vt(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:a});throw a}}async updateUser(e,a={}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(e,a)):await this._updateUser(e,a)}async _updateUser(e,a={}){try{return await this._useSession(async r=>{const{data:o,error:l}=r;if(l)throw l;if(!o.session)throw new Ot;const d=o.session;let h=null,p=null;this.flowType==="pkce"&&e.email!=null&&([h,p]=await Vi(this.storage,this.storageKey));const{data:m,error:y}=await ue(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:a==null?void 0:a.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:h,code_challenge_method:p}),jwt:d.access_token,xform:ui});if(y)throw y;return d.user=m.user,await this._saveSession(d),await this._notifyAllSubscribers("USER_UPDATED",d),this._returnResult({data:{user:d.user},error:null})})}catch(r){if(await vt(this.storage,`${this.storageKey}-code-verifier`),ae(r))return this._returnResult({data:{user:null},error:r});throw r}}async setSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(e)):await this._setSession(e)}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new Ot;const a=Date.now()/1e3;let r=a,o=!0,l=null;const{payload:d}=Zl(e.access_token);if(d.exp&&(r=d.exp,o=r<=a),o){const{data:h,error:p}=await this._callRefreshToken(e.refresh_token);if(p)return this._returnResult({data:{user:null,session:null},error:p});if(!h)return{data:{user:null,session:null},error:null};l=h}else{const{data:h,error:p}=await this._getUser(e.access_token);if(p)return this._returnResult({data:{user:null,session:null},error:p});l={access_token:e.access_token,refresh_token:e.refresh_token,user:h.user,token_type:"bearer",expires_in:r-a,expires_at:r},await this._saveSession(l),await this._notifyAllSubscribers("SIGNED_IN",l)}return this._returnResult({data:{user:l.user,session:l},error:null})}catch(a){if(ae(a))return this._returnResult({data:{session:null,user:null},error:a});throw a}}async refreshSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(e)):await this._refreshSession(e)}async _refreshSession(e){try{return await this._useSession(async a=>{var r;if(!e){const{data:d,error:h}=a;if(h)throw h;e=(r=d.session)!==null&&r!==void 0?r:void 0}if(!(e!=null&&e.refresh_token))throw new Ot;const{data:o,error:l}=await this._callRefreshToken(e.refresh_token);return l?this._returnResult({data:{user:null,session:null},error:l}):o?this._returnResult({data:{user:o.user,session:o},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(a){if(ae(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async _getSessionFromURL(e,a){var r;try{if(!It())throw new Ql("No browser detected.");if(e.error||e.error_description||e.error_code)throw new Ql(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"});switch(a){case"implicit":if(this.flowType==="pkce")throw new Ky("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new Ql("Not a valid implicit grant flow url.");break;default:}if(a==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code)throw new Ky("No code detected.");const{data:N,error:z}=await this._exchangeCodeForSession(e.code);if(z)throw z;const J=new URL(window.location.href);return J.searchParams.delete("code"),window.history.replaceState(window.history.state,"",J.toString()),{data:{session:N.session,redirectType:(r=N.redirectType)!==null&&r!==void 0?r:null},error:null}}const{provider_token:o,provider_refresh_token:l,access_token:d,refresh_token:h,expires_in:p,expires_at:m,token_type:y}=e;if(!d||!p||!h||!y)throw new Ql("No session defined in URL");const v=Math.round(Date.now()/1e3),x=parseInt(p);let w=v+x;m&&(w=parseInt(m));const j=w-v;j*1e3<=Da&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${j}s, should have been closer to ${x}s`);const E=w-x;v-E>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",E,w,v):v-E<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",E,w,v);const{data:T,error:k}=await this._getUser(d);if(k)throw k;const C={provider_token:o,provider_refresh_token:l,access_token:d,expires_in:x,expires_at:w,refresh_token:h,token_type:y,user:T.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:C,redirectType:e.type},error:null})}catch(o){if(ae(o))return this._returnResult({data:{session:null,redirectType:null},error:o});throw o}}_isImplicitGrantCallback(e){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),e):!!(e.access_token||e.error||e.error_description||e.error_code)}async _isPKCECallback(e){const a=await $n(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&a)}async signOut(e={scope:"global"}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(e)):await this._signOut(e)}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async a=>{var r;const{data:o,error:l}=a;if(l&&!Xl(l))return this._returnResult({error:l});const d=(r=o.session)===null||r===void 0?void 0:r.access_token;if(d){const{error:h}=await this.admin.signOut(d,e);if(h&&!(ok(h)&&(h.status===404||h.status===401||h.status===403)||Xl(h)))return this._returnResult({error:h})}return e!=="others"&&(await this._removeSession(),await vt(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({error:null})})}onAuthStateChange(e){const a=yk(),r={id:a,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",a),this.stateChangeEmitters.delete(a)}};return this._debug("#onAuthStateChange()","registered callback with id",a),this.stateChangeEmitters.set(a,r),(async()=>(await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(a)}):await this._emitInitialSession(a)))(),{data:{subscription:r}}}async _emitInitialSession(e){return await this._useSession(async a=>{var r,o;try{const{data:{session:l},error:d}=a;if(d)throw d;await((r=this.stateChangeEmitters.get(e))===null||r===void 0?void 0:r.callback("INITIAL_SESSION",l)),this._debug("INITIAL_SESSION","callback id",e,"session",l)}catch(l){await((o=this.stateChangeEmitters.get(e))===null||o===void 0?void 0:o.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",l),Xl(l)?console.warn(l):console.error(l)}})}async resetPasswordForEmail(e,a={}){let r=null,o=null;this.flowType==="pkce"&&([r,o]=await Vi(this.storage,this.storageKey,!0));try{return await ue(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:r,code_challenge_method:o,gotrue_meta_security:{captcha_token:a.captchaToken}},headers:this.headers,redirectTo:a.redirectTo})}catch(l){if(await vt(this.storage,`${this.storageKey}-code-verifier`),ae(l))return this._returnResult({data:null,error:l});throw l}}async getUserIdentities(){var e;try{const{data:a,error:r}=await this.getUser();if(r)throw r;return this._returnResult({data:{identities:(e=a.user.identities)!==null&&e!==void 0?e:[]},error:null})}catch(a){if(ae(a))return this._returnResult({data:null,error:a});throw a}}async linkIdentity(e){return"token"in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){var a;try{const{data:r,error:o}=await this._useSession(async l=>{var d,h,p,m,y;const{data:v,error:x}=l;if(x)throw x;const w=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(d=e.options)===null||d===void 0?void 0:d.redirectTo,scopes:(h=e.options)===null||h===void 0?void 0:h.scopes,queryParams:(p=e.options)===null||p===void 0?void 0:p.queryParams,skipBrowserRedirect:!0});return await ue(this.fetch,"GET",w,{headers:this.headers,jwt:(y=(m=v.session)===null||m===void 0?void 0:m.access_token)!==null&&y!==void 0?y:void 0})});if(o)throw o;return It()&&!(!((a=e.options)===null||a===void 0)&&a.skipBrowserRedirect)&&window.location.assign(r==null?void 0:r.url),this._returnResult({data:{provider:e.provider,url:r==null?void 0:r.url},error:null})}catch(r){if(ae(r))return this._returnResult({data:{provider:e.provider,url:null},error:r});throw r}}async linkIdentityIdToken(e){return await this._useSession(async a=>{var r;try{const{error:o,data:{session:l}}=a;if(o)throw o;const{options:d,provider:h,token:p,access_token:m,nonce:y}=e,v=await ue(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(r=l==null?void 0:l.access_token)!==null&&r!==void 0?r:void 0,body:{provider:h,id_token:p,access_token:m,nonce:y,link_identity:!0,gotrue_meta_security:{captcha_token:d==null?void 0:d.captchaToken}},xform:Ln}),{data:x,error:w}=v;return w?this._returnResult({data:{user:null,session:null},error:w}):!x||!x.session||!x.user?this._returnResult({data:{user:null,session:null},error:new Ur}):(x.session&&(await this._saveSession(x.session),await this._notifyAllSubscribers("USER_UPDATED",x.session)),this._returnResult({data:x,error:w}))}catch(o){if(await vt(this.storage,`${this.storageKey}-code-verifier`),ae(o))return this._returnResult({data:{user:null,session:null},error:o});throw o}})}async unlinkIdentity(e){try{return await this._useSession(async a=>{var r,o;const{data:l,error:d}=a;if(d)throw d;return await ue(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(o=(r=l.session)===null||r===void 0?void 0:r.access_token)!==null&&o!==void 0?o:void 0})})}catch(a){if(ae(a))return this._returnResult({data:null,error:a});throw a}}async _refreshAccessToken(e){const a="#_refreshAccessToken()";this._debug(a,"begin");try{const r=Date.now();return await wk(async o=>(o>0&&await xk(200*Math.pow(2,o-1)),this._debug(a,"refreshing attempt",o),await ue(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:Ln})),(o,l)=>{const d=200*Math.pow(2,o);return l&&Yy(l)&&Date.now()+d-r<Da})}catch(r){if(this._debug(a,"error",r),ae(r))return this._returnResult({data:{session:null,user:null},error:r});throw r}finally{this._debug(a,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,a){const r=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:a.redirectTo,scopes:a.scopes,queryParams:a.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",a,"url",r),It()&&!a.skipBrowserRedirect&&window.location.assign(r),{data:{provider:e,url:r},error:null}}async _recoverAndRefresh(){var e,a;const r="#_recoverAndRefresh()";this._debug(r,"begin");try{const o=await $n(this.storage,this.storageKey);if(o&&this.userStorage){let d=await $n(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!d&&(d={user:o.user},await $r(this.userStorage,this.storageKey+"-user",d)),o.user=(e=d==null?void 0:d.user)!==null&&e!==void 0?e:xh()}else if(o&&!o.user&&!o.user){const d=await $n(this.storage,this.storageKey+"-user");d&&(d!=null&&d.user)?(o.user=d.user,await vt(this.storage,this.storageKey+"-user"),await $r(this.storage,this.storageKey,o)):o.user=xh()}if(this._debug(r,"session from storage",o),!this._isValidSession(o)){this._debug(r,"session is not valid"),o!==null&&await this._removeSession();return}const l=((a=o.expires_at)!==null&&a!==void 0?a:1/0)*1e3-Date.now()<bh;if(this._debug(r,`session has${l?"":" not"} expired with margin of ${bh}s`),l){if(this.autoRefreshToken&&o.refresh_token){const{error:d}=await this._callRefreshToken(o.refresh_token);d&&(uk(d)?this._debug(r,"refresh discarded by commit guard",d):this._debug(r,"refresh failed",d))}}else if(o.user&&o.user.__isUserNotAvailableProxy===!0)try{const{data:d,error:h}=await this._getUser(o.access_token);!h&&(d!=null&&d.user)?(o.user=d.user,await this._saveSession(o),await this._notifyAllSubscribers("SIGNED_IN",o)):this._debug(r,"could not get user data, skipping SIGNED_IN notification")}catch(d){console.error("Error getting user data:",d),this._debug(r,"error getting user data, skipping SIGNED_IN notification",d)}else await this._notifyAllSubscribers("SIGNED_IN",o)}catch(o){this._debug(r,"error",o),console.error(o);return}finally{this._debug(r,"end")}}async _callRefreshToken(e){var a,r;if(!e)throw new Ot;if(this.refreshingDeferred)return this.refreshingDeferred.promise;if(this.lastRefreshFailure&&this.lastRefreshFailure.refreshToken===e&&Date.now()<this.lastRefreshFailure.expiresAt)return this._debug("#_callRefreshToken()","returning cached failure (cooldown active)"),this.lastRefreshFailure.result;const o="#_callRefreshToken()";this._debug(o,"begin");try{this.refreshingDeferred=new Fc;const l=await $n(this.storage,this.storageKey),{data:d,error:h}=await this._refreshAccessToken(e);if(h)throw h;if(!d.session)throw new Ot;const p=await $n(this.storage,this.storageKey);if(l!==null&&(p===null||p.refresh_token!==l.refresh_token)){this._debug(o,"commit guard: storage changed since refresh started, discarding rotated tokens",{startedWith:"present",nowHolds:p?"replaced":"cleared"});const x={data:null,error:new Wy};return this.refreshingDeferred.resolve(x),x}const y=this._sessionRemovalEpoch;if(await this._saveSession(d.session),this._sessionRemovalEpoch!==y){this._debug(o,"commit guard (post-save): _removeSession ran during _saveSession, undoing write"),await vt(this.storage,this.storageKey),this.userStorage&&await vt(this.userStorage,this.storageKey+"-user");const x={data:null,error:new Wy};return this.refreshingDeferred.resolve(x),x}await this._notifyAllSubscribers("TOKEN_REFRESHED",d.session);const v={data:d.session,error:null};return this.lastRefreshFailure=null,this.refreshingDeferred.resolve(v),v}catch(l){if(this._debug(o,"error",l),ae(l)){const d={data:null,error:l};if(!Yy(l)){const h=await $n(this.storage,this.storageKey);!!(h!=null&&h.expires_at&&h.expires_at*1e3>Date.now())?this._debug(o,"proactive refresh failed, access token still valid — preserving session"):await this._removeSession()}return this.lastRefreshFailure={refreshToken:e,result:d,expiresAt:Date.now()+ek},(a=this.refreshingDeferred)===null||a===void 0||a.resolve(d),d}throw(r=this.refreshingDeferred)===null||r===void 0||r.reject(l),l}finally{this.refreshingDeferred=null,this._debug(o,"end")}}async _notifyAllSubscribers(e,a,r=!0){const o=`#_notifyAllSubscribers(${e})`;this._debug(o,"begin",a,`broadcast = ${r}`);try{this.broadcastChannel&&r&&this.broadcastChannel.postMessage({event:e,session:a});const l=[],d=Array.from(this.stateChangeEmitters.values()).map(async h=>{try{await h.callback(e,a)}catch(p){l.push(p)}});if(await Promise.all(d),l.length>0){for(let h=0;h<l.length;h+=1)console.error(l[h]);throw l[0]}}finally{this._debug(o,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0,await vt(this.storage,`${this.storageKey}-code-verifier`);const a=Object.assign({},e),r=a.user&&a.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!r&&a.user&&await $r(this.userStorage,this.storageKey+"-user",{user:a.user});const o=Object.assign({},a);delete o.user;const l=ev(o);await $r(this.storage,this.storageKey,l)}else{const o=ev(a);await $r(this.storage,this.storageKey,o)}}async _removeSession(){this._sessionRemovalEpoch+=1,this._debug("#_removeSession()"),this.lastRefreshFailure=null,this.suppressGetSessionWarning=!1,await vt(this.storage,this.storageKey),await vt(this.storage,this.storageKey+"-code-verifier"),await vt(this.storage,this.storageKey+"-user"),this.userStorage&&await vt(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&It()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",e)}catch(a){console.error("removing visibilitychange callback failed",a)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval(()=>this._autoRefreshTokenTick(),Da);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e);const a=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=a,a&&typeof a=="object"&&typeof a.unref=="function"?a.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(a)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e);const a=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,a&&clearTimeout(a)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async dispose(){var e;this._removeVisibilityChangedCallback(),await this._stopAutoRefresh(),(e=this.broadcastChannel)===null||e===void 0||e.close(),this.broadcastChannel=null,this.stateChangeEmitters.clear()}async _autoRefreshTokenTick(){if(this._debug("#_autoRefreshTokenTick()","begin"),this.lock!=null){try{await this._acquireLock(0,async()=>{try{const e=Date.now();try{return await this._useSession(async a=>{const{data:{session:r}}=a;if(!r||!r.refresh_token||!r.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const o=Math.floor((r.expires_at*1e3-e)/Da);this._debug("#_autoRefreshTokenTick()",`access token expires in ${o} ticks, a tick lasts ${Da}ms, refresh threshold is ${to} ticks`),o<=to&&await this._callRefreshToken(r.refresh_token)})}catch(a){console.error("Auto refresh tick failed with error. This is likely a transient error.",a)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e instanceof Pk)this._debug("auto refresh token tick lock not available");else throw e}return}if(this.refreshingDeferred!==null){this._debug("#_autoRefreshTokenTick()","refresh already in flight, skipping");return}try{const e=Date.now();try{await this._useSession(async a=>{const{data:{session:r}}=a;if(!r||!r.refresh_token||!r.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const o=Math.floor((r.expires_at*1e3-e)/Da);this._debug("#_autoRefreshTokenTick()",`access token expires in ${o} ticks, a tick lasts ${Da}ms, refresh threshold is ${to} ticks`),o<=to&&await this._callRefreshToken(r.refresh_token)})}catch(a){console.error("Auto refresh tick failed with error. This is likely a transient error.",a)}}finally{this._debug("#_autoRefreshTokenTick()","end")}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!It()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(e){this._debug("#visibilityChangedCallback","error",e)}},window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const a=`#_onVisibilityChanged(${e})`;if(this._debug(a,"visibilityState",document.visibilityState),document.visibilityState==="visible"){if(this.autoRefreshToken&&this._startAutoRefresh(),!e)if(await this.initializePromise,this.lock!=null)await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!=="visible"){this._debug(a,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()});else{if(document.visibilityState!=="visible"){this._debug(a,"visibilityState is no longer visible, skipping recovery");return}await this._recoverAndRefresh()}}else document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,a,r){const o=[`provider=${encodeURIComponent(a)}`];if(r!=null&&r.redirectTo&&o.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),r!=null&&r.scopes&&o.push(`scopes=${encodeURIComponent(r.scopes)}`),this.flowType==="pkce"){const[l,d]=await Vi(this.storage,this.storageKey),h=new URLSearchParams({code_challenge:`${encodeURIComponent(l)}`,code_challenge_method:`${encodeURIComponent(d)}`});o.push(h.toString())}if(r!=null&&r.queryParams){const l=new URLSearchParams(r.queryParams);o.push(l.toString())}return r!=null&&r.skipBrowserRedirect&&o.push(`skip_http_redirect=${r.skipBrowserRedirect}`),`${e}?${o.join("&")}`}async _unenroll(e){try{return await this._useSession(async a=>{var r;const{data:o,error:l}=a;return l?this._returnResult({data:null,error:l}):await ue(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(r=o==null?void 0:o.session)===null||r===void 0?void 0:r.access_token})})}catch(a){if(ae(a))return this._returnResult({data:null,error:a});throw a}}async _enroll(e){try{return await this._useSession(async a=>{var r,o;const{data:l,error:d}=a;if(d)return this._returnResult({data:null,error:d});const h=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:e.factorType==="totp"?{issuer:e.issuer}:{}),{data:p,error:m}=await ue(this.fetch,"POST",`${this.url}/factors`,{body:h,headers:this.headers,jwt:(r=l==null?void 0:l.session)===null||r===void 0?void 0:r.access_token});return m?this._returnResult({data:null,error:m}):(e.factorType==="totp"&&p.type==="totp"&&(!((o=p==null?void 0:p.totp)===null||o===void 0)&&o.qr_code)&&(p.totp.qr_code=`data:image/svg+xml;utf-8,${p.totp.qr_code}`),this._returnResult({data:p,error:null}))})}catch(a){if(ae(a))return this._returnResult({data:null,error:a});throw a}}async _verify(e){const a=async()=>{try{return await this._useSession(async r=>{var o;const{data:l,error:d}=r;if(d)return this._returnResult({data:null,error:d});const h=Object.assign({challenge_id:e.challengeId},"webauthn"in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type==="create"?ov(e.webauthn.credential_response):lv(e.webauthn.credential_response)})}:{code:e.code}),{data:p,error:m}=await ue(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:h,headers:this.headers,jwt:(o=l==null?void 0:l.session)===null||o===void 0?void 0:o.access_token});return m?this._returnResult({data:null,error:m}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+p.expires_in},p)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",p),this._returnResult({data:p,error:m}))})}catch(r){if(ae(r))return this._returnResult({data:null,error:r});throw r}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,a):a()}async _challenge(e){const a=async()=>{try{return await this._useSession(async r=>{var o;const{data:l,error:d}=r;if(d)return this._returnResult({data:null,error:d});const h=await ue(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:(o=l==null?void 0:l.session)===null||o===void 0?void 0:o.access_token});if(h.error)return h;const{data:p}=h;if(p.type!=="webauthn")return{data:p,error:null};switch(p.webauthn.type){case"create":return{data:Object.assign(Object.assign({},p),{webauthn:Object.assign(Object.assign({},p.webauthn),{credential_options:Object.assign(Object.assign({},p.webauthn.credential_options),{publicKey:rv(p.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},p),{webauthn:Object.assign(Object.assign({},p.webauthn),{credential_options:Object.assign(Object.assign({},p.webauthn.credential_options),{publicKey:sv(p.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(r){if(ae(r))return this._returnResult({data:null,error:r});throw r}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,a):a()}async _challengeAndVerify(e){const{data:a,error:r}=await this._challenge({factorId:e.factorId});return r?this._returnResult({data:null,error:r}):await this._verify({factorId:e.factorId,challengeId:a.id,code:e.code})}async _listFactors(){var e;const{data:{user:a},error:r}=await this.getUser();if(r)return{data:null,error:r};const o={all:[],phone:[],totp:[],webauthn:[]};for(const l of(e=a==null?void 0:a.factors)!==null&&e!==void 0?e:[])o.all.push(l),l.status==="verified"&&o[l.factor_type].push(l);return{data:o,error:null}}async _getAuthenticatorAssuranceLevel(e){var a,r,o,l;if(e)try{const{payload:w}=Zl(e);let j=null;w.aal&&(j=w.aal);let E=j;const{data:{user:T},error:k}=await this.getUser(e);if(k)return this._returnResult({data:null,error:k});((r=(a=T==null?void 0:T.factors)===null||a===void 0?void 0:a.filter(z=>z.status==="verified"))!==null&&r!==void 0?r:[]).length>0&&(E="aal2");const N=w.amr||[];return{data:{currentLevel:j,nextLevel:E,currentAuthenticationMethods:N},error:null}}catch(w){if(ae(w))return this._returnResult({data:null,error:w});throw w}const{data:{session:d},error:h}=await this.getSession();if(h)return this._returnResult({data:null,error:h});if(!d)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:p}=Zl(d.access_token);let m=null;p.aal&&(m=p.aal);let y=m;((l=(o=d.user.factors)===null||o===void 0?void 0:o.filter(w=>w.status==="verified"))!==null&&l!==void 0?l:[]).length>0&&(y="aal2");const x=p.amr||[];return{data:{currentLevel:m,nextLevel:y,currentAuthenticationMethods:x},error:null}}async _getAuthorizationDetails(e){try{return await this._useSession(async a=>{const{data:{session:r},error:o}=a;return o?this._returnResult({data:null,error:o}):r?await ue(this.fetch,"GET",`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:r.access_token,xform:l=>({data:l,error:null})}):this._returnResult({data:null,error:new Ot})})}catch(a){if(ae(a))return this._returnResult({data:null,error:a});throw a}}async _approveAuthorization(e,a){try{return await this._useSession(async r=>{const{data:{session:o},error:l}=r;if(l)return this._returnResult({data:null,error:l});if(!o)return this._returnResult({data:null,error:new Ot});const d=await ue(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:o.access_token,body:{action:"approve"},xform:h=>({data:h,error:null})});return d.data&&d.data.redirect_url&&It()&&!(a!=null&&a.skipBrowserRedirect)&&window.location.assign(d.data.redirect_url),d})}catch(r){if(ae(r))return this._returnResult({data:null,error:r});throw r}}async _denyAuthorization(e,a){try{return await this._useSession(async r=>{const{data:{session:o},error:l}=r;if(l)return this._returnResult({data:null,error:l});if(!o)return this._returnResult({data:null,error:new Ot});const d=await ue(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:o.access_token,body:{action:"deny"},xform:h=>({data:h,error:null})});return d.data&&d.data.redirect_url&&It()&&!(a!=null&&a.skipBrowserRedirect)&&window.location.assign(d.data.redirect_url),d})}catch(r){if(ae(r))return this._returnResult({data:null,error:r});throw r}}async _listOAuthGrants(){try{return await this._useSession(async e=>{const{data:{session:a},error:r}=e;return r?this._returnResult({data:null,error:r}):a?await ue(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:a.access_token,xform:o=>({data:o,error:null})}):this._returnResult({data:null,error:new Ot})})}catch(e){if(ae(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async a=>{const{data:{session:r},error:o}=a;return o?this._returnResult({data:null,error:o}):r?(await ue(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:r.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new Ot})})}catch(a){if(ae(a))return this._returnResult({data:null,error:a});throw a}}async fetchJwk(e,a={keys:[]}){let r=a.keys.find(h=>h.kid===e);if(r)return r;const o=Date.now();if(r=this.jwks.keys.find(h=>h.kid===e),r&&this.jwks_cached_at+rk>o)return r;const{data:l,error:d}=await ue(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(d)throw d;return!l.keys||l.keys.length===0||(this.jwks=l,this.jwks_cached_at=o,r=l.keys.find(h=>h.kid===e),!r)?null:r}async getClaims(e,a={}){try{let r=e;if(!r){const{data:w,error:j}=await this.getSession();if(j||!w.session)return this._returnResult({data:null,error:j});r=w.session.access_token}const{header:o,payload:l,signature:d,raw:{header:h,payload:p}}=Zl(r);if(!(a!=null&&a.allowExpired))try{Ck(l.exp)}catch(w){throw new Sc(w instanceof Error?w.message:"JWT validation failed")}const m=!o.alg||o.alg.startsWith("HS")||!o.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(o.kid,a!=null&&a.keys?{keys:a.keys}:a==null?void 0:a.jwks);if(!m){const{error:w}=await this.getUser(r);if(w)throw w;return{data:{claims:l,header:o,signature:d},error:null}}const y=Ak(o.alg),v=await crypto.subtle.importKey("jwk",m,y,!0,["verify"]);if(!await crypto.subtle.verify(y,v,d,mk(`${h}.${p}`)))throw new Sc("Invalid JWT signature");return{data:{claims:l,header:o,signature:d},error:null}}catch(r){if(ae(r))return this._returnResult({data:null,error:r});throw r}}async signInWithPasskey(e){var a,r,o;In(this.experimental);try{if(!kc())return this._returnResult({data:null,error:new Gn("Browser does not support WebAuthn",null)});const{data:l,error:d}=await this._startPasskeyAuthentication({options:{captchaToken:(a=e==null?void 0:e.options)===null||a===void 0?void 0:a.captchaToken}});if(d||!l)return this._returnResult({data:null,error:d});const h=sv(l.options),p=(o=(r=e==null?void 0:e.options)===null||r===void 0?void 0:r.signal)!==null&&o!==void 0?o:of.createNewAbortSignal(),{data:m,error:y}=await Mx({publicKey:h,signal:p});if(y||!m)return this._returnResult({data:null,error:y??new Gn("WebAuthn ceremony failed",null)});const v=lv(m);return this._verifyPasskeyAuthentication({challengeId:l.challenge_id,credential:v})}catch(l){if(ae(l))return this._returnResult({data:null,error:l});throw l}}async registerPasskey(e){var a,r;In(this.experimental);try{if(!kc())return this._returnResult({data:null,error:new Gn("Browser does not support WebAuthn",null)});const{data:o,error:l}=await this._startPasskeyRegistration();if(l||!o)return this._returnResult({data:null,error:l});const d=rv(o.options),h=(r=(a=e==null?void 0:e.options)===null||a===void 0?void 0:a.signal)!==null&&r!==void 0?r:of.createNewAbortSignal(),{data:p,error:m}=await Lx({publicKey:d,signal:h});if(m||!p)return this._returnResult({data:null,error:m??new Gn("WebAuthn ceremony failed",null)});const y=ov(p);return this._verifyPasskeyRegistration({challengeId:o.challenge_id,credential:y})}catch(o){if(ae(o))return this._returnResult({data:null,error:o});throw o}}async _startPasskeyRegistration(){In(this.experimental);try{return await this._useSession(async e=>{const{data:{session:a},error:r}=e;if(r)return this._returnResult({data:null,error:r});if(!a)return this._returnResult({data:null,error:new Ot});const{data:o,error:l}=await ue(this.fetch,"POST",`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:a.access_token,body:{}});return l?this._returnResult({data:null,error:l}):this._returnResult({data:o,error:null})})}catch(e){if(ae(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyRegistration(e){In(this.experimental);try{return await this._useSession(async a=>{const{data:{session:r},error:o}=a;if(o)return this._returnResult({data:null,error:o});if(!r)return this._returnResult({data:null,error:new Ot});const{data:l,error:d}=await ue(this.fetch,"POST",`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:r.access_token,body:{challenge_id:e.challengeId,credential:e.credential}});return d?this._returnResult({data:null,error:d}):this._returnResult({data:l,error:null})})}catch(a){if(ae(a))return this._returnResult({data:null,error:a});throw a}}async _startPasskeyAuthentication(e){var a;In(this.experimental);try{const{data:r,error:o}=await ue(this.fetch,"POST",`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:(a=e==null?void 0:e.options)===null||a===void 0?void 0:a.captchaToken}}});return o?this._returnResult({data:null,error:o}):this._returnResult({data:r,error:null})}catch(r){if(ae(r))return this._returnResult({data:null,error:r});throw r}}async _verifyPasskeyAuthentication(e){In(this.experimental);try{const{data:a,error:r}=await ue(this.fetch,"POST",`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:e.challengeId,credential:e.credential},xform:Ln});return r?this._returnResult({data:null,error:r}):(a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",a.session)),this._returnResult({data:a,error:null}))}catch(a){if(ae(a))return this._returnResult({data:null,error:a});throw a}}async _listPasskeys(){In(this.experimental);try{return await this._useSession(async e=>{const{data:{session:a},error:r}=e;if(r)return this._returnResult({data:null,error:r});if(!a)return this._returnResult({data:null,error:new Ot});const{data:o,error:l}=await ue(this.fetch,"GET",`${this.url}/passkeys`,{headers:this.headers,jwt:a.access_token,xform:d=>({data:d,error:null})});return l?this._returnResult({data:null,error:l}):this._returnResult({data:o,error:null})})}catch(e){if(ae(e))return this._returnResult({data:null,error:e});throw e}}async _updatePasskey(e){In(this.experimental);try{return await this._useSession(async a=>{const{data:{session:r},error:o}=a;if(o)return this._returnResult({data:null,error:o});if(!r)return this._returnResult({data:null,error:new Ot});const{data:l,error:d}=await ue(this.fetch,"PATCH",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:r.access_token,body:{friendly_name:e.friendlyName}});return d?this._returnResult({data:null,error:d}):this._returnResult({data:l,error:null})})}catch(a){if(ae(a))return this._returnResult({data:null,error:a});throw a}}async _deletePasskey(e){In(this.experimental);try{return await this._useSession(async a=>{const{data:{session:r},error:o}=a;if(o)return this._returnResult({data:null,error:o});if(!r)return this._returnResult({data:null,error:new Ot});const{error:l}=await ue(this.fetch,"DELETE",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:r.access_token,noResolveJson:!0});return l?this._returnResult({data:null,error:l}):this._returnResult({data:null,error:null})})}catch(a){if(ae(a))return this._returnResult({data:null,error:a});throw a}}}bo.nextInstanceID={};const Zk=bo,eE="2.108.2";let no="",Tc;if(typeof Deno<"u"){var Sh;no="deno",Tc=(Sh=Deno.version)===null||Sh===void 0?void 0:Sh.deno}else if(typeof document<"u")no="web";else if(typeof navigator<"u"&&navigator.product==="ReactNative")no="react-native";else{var jh;no="node",Tc=typeof process<"u"?(jh=process.version)===null||jh===void 0?void 0:jh.replace(/^v/,""):void 0}const zx=[`runtime=${no}`];Tc&&zx.push(`runtime-version=${Tc}`);const tE={"X-Client-Info":`supabase-js/${eE}; ${zx.join("; ")}`},nE={headers:tE},aE={schema:"public"},iE={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},rE={},sE={enabled:!1,respectSamplingDecision:!0};function oE(t,e,a,r){function o(l){return l instanceof a?l:new a(function(d){d(l)})}return new(a||(a=Promise))(function(l,d){function h(y){try{m(r.next(y))}catch(v){d(v)}}function p(y){try{m(r.throw(y))}catch(v){d(v)}}function m(y){y.done?l(y.value):o(y.value).then(h,p)}m((r=r.apply(t,[])).next())})}let _h=null;const lE="@opentelemetry/api";function cE(){return _h===null&&(_h=import(lE).catch(()=>null)),_h}function uE(){return oE(this,void 0,void 0,function*(){try{const t=yield cE();if(!t||!t.propagation||!t.context)return null;const e={};t.propagation.inject(t.context.active(),e);const a=e.traceparent;return a?{traceparent:a,tracestate:e.tracestate,baggage:e.baggage}:null}catch{return null}})}function dE(t){if(!t||typeof t!="string")return null;const e=t.split("-");if(e.length!==4)return null;const[a,r,o,l]=e;if(a.length!==2||r.length!==32||o.length!==16||l.length!==2)return null;const d=/^[0-9a-f]+$/i;return!d.test(a)||!d.test(r)||!d.test(o)||!d.test(l)||r==="00000000000000000000000000000000"||o==="0000000000000000"?null:{version:a,traceId:r,parentId:o,traceFlags:l,isSampled:(parseInt(l,16)&1)===1}}function hE(t,e){if(!t||!e||e.length===0)return!1;let a;if(t instanceof URL)a=t;else try{a=new URL(t)}catch{return!1}for(const r of e)try{if(typeof r=="string"){if(fE(a.hostname,r))return!0}else if(r instanceof RegExp){if(r.test(a.hostname))return!0}else if(typeof r=="function"&&r(a))return!0}catch{continue}return!1}function fE(t,e){if(e===t)return!0;if(e.startsWith("*.")){const a=e.slice(2);if(t.endsWith(a)&&(t===a||t.endsWith("."+a)))return!0}return!1}function pE(t){const e=[];try{const a=new URL(t);e.push(a.hostname)}catch{}return e.push("*.supabase.co","*.supabase.in"),e.push("localhost","127.0.0.1","[::1]"),e}function xo(t){"@babel/helpers - typeof";return xo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xo(t)}function mE(t,e){if(xo(t)!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var r=a.call(t,e);if(xo(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function gE(t){var e=mE(t,"string");return xo(e)=="symbol"?e:e+""}function yE(t,e,a){return(e=gE(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function cv(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),a.push.apply(a,r)}return a}function ht(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?cv(Object(a),!0).forEach(function(r){yE(t,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):cv(Object(a)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(a,r))})}return t}const vE=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),bE=()=>Headers,xE=(t,e,a,r,o)=>{const l=vE(r),d=bE(),h=(o==null?void 0:o.enabled)===!0,p=(o==null?void 0:o.respectSamplingDecision)!==!1,m=h?pE(e):null;return async(y,v)=>{var x;const w=(x=await a())!==null&&x!==void 0?x:t;let j=new d(v==null?void 0:v.headers);if(j.has("apikey")||j.set("apikey",t),j.has("Authorization")||j.set("Authorization",`Bearer ${w}`),m){const E=await wE(y,m,p);E&&(E.traceparent&&!j.has("traceparent")&&j.set("traceparent",E.traceparent),E.tracestate&&!j.has("tracestate")&&j.set("tracestate",E.tracestate),E.baggage&&!j.has("baggage")&&j.set("baggage",E.baggage))}return l(y,ht(ht({},v),{},{headers:j}))}};async function wE(t,e,a){if(!hE(typeof t=="string"||t instanceof URL?t:t.url,e))return null;const r=await uE();if(!r||!r.traceparent)return null;if(a){const o=dE(r.traceparent);if(o&&!o.isSampled)return null}return r}function uv(t){return typeof t=="boolean"?{enabled:t}:t}function SE(t){return t.endsWith("/")?t:t+"/"}function jE(t,e){var a,r,o,l,d,h;const{db:p,auth:m,realtime:y,global:v}=t,{db:x,auth:w,realtime:j,global:E}=e,T=uv(t.tracePropagation),k=uv(e.tracePropagation),C={db:ht(ht({},x),p),auth:ht(ht({},w),m),realtime:ht(ht({},j),y),storage:{},global:ht(ht(ht({},E),v),{},{headers:ht(ht({},(a=E==null?void 0:E.headers)!==null&&a!==void 0?a:{}),(r=v==null?void 0:v.headers)!==null&&r!==void 0?r:{})}),tracePropagation:{enabled:(o=(l=T==null?void 0:T.enabled)!==null&&l!==void 0?l:k==null?void 0:k.enabled)!==null&&o!==void 0?o:!1,respectSamplingDecision:(d=(h=T==null?void 0:T.respectSamplingDecision)!==null&&h!==void 0?h:k==null?void 0:k.respectSamplingDecision)!==null&&d!==void 0?d:!0},accessToken:async()=>""};return t.accessToken?C.accessToken=t.accessToken:delete C.accessToken,C}function _E(t){const e=t==null?void 0:t.trim();if(!e)throw new Error("supabaseUrl is required.");if(!e.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(SE(e))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var kE=class extends Zk{constructor(t){super(t)}},EE=class{constructor(t,e,a){var r,o;this.supabaseUrl=t,this.supabaseKey=e;const l=_E(t);if(!e)throw new Error("supabaseKey is required.");this.realtimeUrl=new URL("realtime/v1",l),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",l),this.storageUrl=new URL("storage/v1",l),this.functionsUrl=new URL("functions/v1",l);const d=`sb-${l.hostname.split(".")[0]}-auth-token`,h={db:aE,realtime:rE,auth:ht(ht({},iE),{},{storageKey:d}),global:nE,tracePropagation:sE},p=jE(a??{},h);if(this.settings=p,this.storageKey=(r=p.auth.storageKey)!==null&&r!==void 0?r:"",this.headers=(o=p.global.headers)!==null&&o!==void 0?o:{},p.accessToken)this.accessToken=p.accessToken,this.auth=new Proxy({},{get:(y,v)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(v)} is not possible`)}});else{var m;this.auth=this._initSupabaseAuthClient((m=p.auth)!==null&&m!==void 0?m:{},this.headers,p.global.fetch)}this.fetch=xE(e,t,this._getAccessToken.bind(this),p.global.fetch,p.tracePropagation),this.realtime=this._initRealtimeClient(ht({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},p.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(y=>this.realtime.setAuth(y)).catch(y=>console.warn("Failed to set initial Realtime auth token:",y)),this.rest=new Vj(new URL("rest/v1",l).href,{headers:this.headers,schema:p.db.schema,fetch:this.fetch,timeout:p.db.timeout,urlLengthLimit:p.db.urlLengthLimit}),this.storage=new Z_(this.storageUrl.href,this.headers,this.fetch,a==null?void 0:a.storage),p.accessToken||this._listenForAuthEvents()}get functions(){return new Rj(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(t){return this.rest.from(t)}schema(t){return this.rest.schema(t)}rpc(t,e={},a={head:!1,get:!1,count:void 0}){return this.rest.rpc(t,e,a)}channel(t,e={config:{}}){return this.realtime.channel(t,e)}getChannels(){return this.realtime.getChannels()}removeChannel(t){return this.realtime.removeChannel(t)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var t=this,e,a;if(t.accessToken)return await t.accessToken();const{data:r}=await t.auth.getSession();return(e=(a=r.session)===null||a===void 0?void 0:a.access_token)!==null&&e!==void 0?e:t.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:t,persistSession:e,detectSessionInUrl:a,storage:r,userStorage:o,storageKey:l,flowType:d,lock:h,debug:p,throwOnError:m,experimental:y,lockAcquireTimeout:v,skipAutoInitialize:x},w,j){const E={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new kE({url:this.authUrl.href,headers:ht(ht({},E),w),storageKey:l,autoRefreshToken:t,persistSession:e,detectSessionInUrl:a,storage:r,userStorage:o,flowType:d,lock:h,debug:p,throwOnError:m,experimental:y,fetch:j,lockAcquireTimeout:v,skipAutoInitialize:x,hasCustomAuthorizationHeader:Object.keys(this.headers).some(T=>T.toLowerCase()==="authorization")})}_initRealtimeClient(t){return new S_(this.realtimeUrl.href,ht(ht({},t),{},{params:ht(ht({},{apikey:this.supabaseKey}),t==null?void 0:t.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((t,e)=>{this._handleTokenChanged(t,"CLIENT",e==null?void 0:e.access_token)})}_handleTokenChanged(t,e,a){(t==="TOKEN_REFRESHED"||t==="SIGNED_IN")&&this.changedAccessToken!==a?(this.changedAccessToken=a,this.realtime.setAuth(a)):t==="SIGNED_OUT"&&(this.realtime.setAuth(),e=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}};const TE=(t,e,a)=>new EE(t,e,a);function CE(){if(typeof window<"u")return!1;const t=globalThis.process;if(!t)return!1;const e=t.version;if(e==null)return!1;const a=e.match(/^v(\d+)\./);return a?parseInt(a[1],10)<=18:!1}CE()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const AE="https://nestgoiyryhcmwtdeoou.supabase.co",NE="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lc3Rnb2l5cnloY213dGRlb291Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxNjI3MTUsImV4cCI6MjA5NzczODcxNX0.TJv9KqIl-2TZFsaEB3Lr0TzWKGR9GG1pE6abmr1FwYw",$=TE(AE,NE,{auth:{persistSession:!0,autoRefreshToken:!0,detectSessionInUrl:!0}}),dv=t=>{let e;const a=new Set,r=(m,y)=>{const v=typeof m=="function"?m(e):m;if(!Object.is(v,e)){const x=e;e=y??(typeof v!="object"||v===null)?v:Object.assign({},e,v),a.forEach(w=>w(e,x))}},o=()=>e,h={setState:r,getState:o,getInitialState:()=>p,subscribe:m=>(a.add(m),()=>a.delete(m))},p=e=t(r,o,h);return h},RE=(t=>t?dv(t):dv),OE=t=>t;function DE(t,e=OE){const a=Zs.useSyncExternalStore(t.subscribe,Zs.useCallback(()=>e(t.getState()),[t,e]),Zs.useCallback(()=>e(t.getInitialState()),[t,e]));return Zs.useDebugValue(a),a}const hv=t=>{const e=RE(t),a=r=>DE(e,r);return Object.assign(a,e),a},gi=(t=>t?hv(t):hv),Ge=gi((t,e)=>({user:null,session:null,profile:null,isLoading:!0,error:null,_authListener:null,initialize:async()=>{var a;try{const{_authListener:r}=e();r&&(r(),t({_authListener:null}));const o=new Promise((m,y)=>setTimeout(()=>y(new Error("Auth request timed out")),8e3)),l=await Promise.race([$.auth.getSession(),o]),{data:{session:d},error:h}=l;if(h)throw h;if(d){let{data:m}=await $.from("profiles").select("*").eq("id",d.user.id).single();if(!m){const y=((a=d.user.email)==null?void 0:a.split("@")[0])||"user",{data:v}=await $.from("profiles").insert({id:d.user.id,username:y,display_name:y}).select().single();m=v}t({user:d.user,session:d,profile:m,isLoading:!1})}else t({user:null,session:null,profile:null,isLoading:!1});const p=$.auth.onAuthStateChange(async(m,y)=>{var v;if(y){let{data:x}=await $.from("profiles").select("*").eq("id",y.user.id).single();if(!x){const w=((v=y.user.email)==null?void 0:v.split("@")[0])||"user",{data:j}=await $.from("profiles").insert({id:y.user.id,username:w,display_name:w}).select().single();x=j}t({user:y.user,session:y,profile:x})}else t({user:null,session:null,profile:null})});t({_authListener:p})}catch(r){t({isLoading:!1,error:r.message})}},signIn:async(a,r)=>{const{data:o,error:l}=await $.auth.signInWithPassword({email:a,password:r});if(l)throw l;return o},signUp:async(a,r,o={})=>{const{data:l,error:d}=await $.auth.signUp({email:a,password:r,options:{data:o,emailRedirectTo:`${window.location.origin}/auth/callback`}});if(d)throw d;if(l!=null&&l.user){const h=o.username||a.split("@")[0],{error:p}=await $.from("profiles").insert({id:l.user.id,username:h,display_name:h});p&&console.warn("Failed to create profile:",p.message)}return l},signOut:async()=>{const{error:a}=await $.auth.signOut();if(a)throw a;t({user:null,session:null,profile:null})},updateProfile:async a=>{const{user:r}=e();if(!r)throw new Error("Not authenticated");const{data:o,error:l}=await $.from("profiles").update(a).eq("id",r.id).select().single();if(l)throw l;return t({profile:o}),o}}));function LE(){const t=cn(),{signIn:e,signUp:a}=Ge(),[r,o]=S.useState(!1),[l,d]=S.useState(""),[h,p]=S.useState(""),[m,y]=S.useState(""),[v,x]=S.useState(!1),[w,j]=S.useState(null);S.useEffect(()=>{document.title=r?"Sign Up | FrameX":"Log In | FrameX"},[r]);const E=async k=>{k.preventDefault(),x(!0),j(null);try{r?(await a(l,h,{username:m||l.split("@")[0]}),alert("Check your email for the confirmation link!"),o(!1)):(await e(l,h),t("/home"))}catch(C){j(C.message)}finally{x(!1)}},T=async k=>{try{await $.auth.signInWithOAuth({provider:k,options:{redirectTo:`${window.location.origin}/auth/callback`}})}catch(C){j(C.message)}};return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"aurora-bg"}),u.jsx(If,{}),u.jsx("section",{className:"auth-section",children:u.jsxs("div",{className:"auth-glass",children:[u.jsxs("div",{className:"auth-header",children:[u.jsx("span",{className:"section-label",children:r?"Get Started":"Welcome Back"}),u.jsx("h1",{children:r?"Sign Up":"Log In"}),u.jsx("p",{children:r?"Create your FrameX account":"Sign in to continue to FrameX"})]}),w&&u.jsx("div",{className:"auth-error",children:w}),u.jsxs("form",{className:"auth-form",onSubmit:E,children:[r&&u.jsxs("div",{className:"form-group",children:[u.jsxs("label",{htmlFor:"username",children:[u.jsx("i",{className:"fas fa-user"})," Username"]}),u.jsx("input",{id:"username",type:"text",placeholder:"yourname",value:m,onChange:k=>y(k.target.value)})]}),u.jsxs("div",{className:"form-group",children:[u.jsxs("label",{htmlFor:"email",children:[u.jsx("i",{className:"fas fa-envelope"})," Email"]}),u.jsx("input",{id:"email",type:"email",placeholder:"you@example.com",value:l,onChange:k=>d(k.target.value),required:!0})]}),u.jsxs("div",{className:"form-group",children:[u.jsxs("label",{htmlFor:"password",children:[u.jsx("i",{className:"fas fa-lock"})," Password"]}),u.jsx("input",{id:"password",type:"password",placeholder:r?"Create a password":"Enter your password",value:h,onChange:k=>p(k.target.value),required:!0,minLength:6})]}),u.jsx("button",{type:"submit",className:"btn-primary auth-submit",disabled:v,children:v?u.jsxs("span",{children:[u.jsx("i",{className:"fas fa-spinner fa-spin"})," ",r?"Creating account...":"Signing in..."]}):u.jsxs("span",{children:[r?"Create Account":"Sign In"," ",u.jsx("i",{className:"fas fa-arrow-right"})]})})]}),u.jsx("div",{className:"auth-divider",children:u.jsx("span",{children:"or continue with"})}),u.jsxs("div",{className:"social-auth",children:[u.jsxs("button",{className:"social-auth-btn",onClick:()=>T("google"),children:[u.jsx("i",{className:"fab fa-google"})," Google"]}),u.jsxs("button",{className:"social-auth-btn",onClick:()=>T("apple"),children:[u.jsx("i",{className:"fab fa-apple"})," Apple"]}),u.jsxs("button",{className:"social-auth-btn",onClick:()=>T("github"),children:[u.jsx("i",{className:"fab fa-github"})," GitHub"]})]}),u.jsx("p",{className:"auth-footer-text",children:r?u.jsxs(u.Fragment,{children:["Already have an account? ",u.jsx("a",{href:"#",onClick:k=>{k.preventDefault(),o(!1),j(null)},children:"Log In"})]}):u.jsxs(u.Fragment,{children:["Don't have an account? ",u.jsx("a",{href:"#",onClick:k=>{k.preventDefault(),o(!0),j(null)},children:"Sign Up"})]})})]})}),u.jsx(qf,{}),u.jsx("style",{children:`
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
      `})]})}const di=gi((t,e)=>({notifications:[],unreadCount:0,isLoading:!1,fetchNotifications:async()=>{t({isLoading:!0});try{const{data:a,error:r}=await $.from("notifications").select(`
          *,
          actor:actor_id (id, username, display_name, avatar_url)
        `).order("created_at",{ascending:!1}).limit(50);if(r)throw r;const o=(a||[]).filter(l=>!l.is_read).length;t({notifications:a||[],unreadCount:o,isLoading:!1})}catch(a){t({isLoading:!1}),console.error("Fetch notifications error:",a.message)}},addNotificationRealtime:a=>{t(r=>r.notifications.some(l=>l.id===a.id)?r:{notifications:[a,...r.notifications],unreadCount:r.unreadCount+(a.is_read?0:1)})},markAsRead:async a=>{const{error:r}=await $.from("notifications").update({is_read:!0}).eq("id",a);if(r){console.error("Mark as read error:",r.message);return}t(o=>({notifications:o.notifications.map(l=>l.id===a?{...l,is_read:!0}:l),unreadCount:Math.max(0,o.unreadCount-1)}))},markAllAsRead:async()=>{const{error:a}=await $.from("notifications").update({is_read:!0}).eq("is_read",!1);if(a){console.error("Mark all as read error:",a.message);return}t(r=>({notifications:r.notifications.map(o=>({...o,is_read:!0})),unreadCount:0}))}})),ot={menu:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),u.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),u.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),search:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"11",cy:"11",r:"8"}),u.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),bell:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),u.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),plus:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),home:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M3 12l9-9 9 9"}),u.jsx("path",{d:"M5 10v9a1 1 0 001 1h3v-5h6v5h3a1 1 0 001-1v-9"})]}),chat:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})}),communities:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"9",cy:"7",r:"4"}),u.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),u.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),explore:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"})]}),notification:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"}),u.jsx("polyline",{points:"13 2 13 9 20 9"})]}),settings:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"3"}),u.jsx("path",{d:"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"})]}),logout:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"}),u.jsx("polyline",{points:"16 17 21 12 16 7"}),u.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),close:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),attachment:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"})}),emoji:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}),u.jsx("line",{x1:"9",y1:"9",x2:"9.01",y2:"9"}),u.jsx("line",{x1:"15",y1:"9",x2:"15.01",y2:"9"})]}),mic:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z"}),u.jsx("path",{d:"M19 10v2a7 7 0 01-14 0v-2"}),u.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"22"})]}),send:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),u.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]}),checkAll:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("polyline",{points:"17 6 7 16 2 11"}),u.jsx("polyline",{points:"22 6 12 16 9 13"})]}),reply:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("polyline",{points:"9 17 4 12 9 7"}),u.jsx("path",{d:"M20 18v-2a4 4 0 00-4-4H4"})]}),logo:"F"};function ME({stories:t,userIndex:e,storyIndex:a,onClose:r,onNext:o,onPrev:l}){const d=t[e];if(!d||!d.stories[a])return null;const h=d.stories[a];(a+1)/d.stories.length*100;const p=m=>(m==null?void 0:m.split(" ").map(y=>y[0]).join("").toUpperCase().slice(0,2))||"?";return u.jsx("div",{className:"story-viewer-overlay",onClick:r,children:u.jsxs("div",{className:"story-viewer",onClick:m=>m.stopPropagation(),children:[u.jsxs("div",{className:"story-viewer-header",children:[u.jsx("div",{className:"story-viewer-progress",children:d.stories.map((m,y)=>u.jsx("div",{className:`story-progress-bar ${y<=a?"active":""} ${y===a?"animating":""}`},y))}),u.jsxs("div",{className:"story-viewer-user",children:[u.jsx("div",{className:"story-viewer-avatar",style:{background:d.gradient||"rgba(255,255,255,0.1)"},children:d.avatar?u.jsx("img",{src:d.avatar,alt:""}):u.jsx("span",{children:p(d.name)})}),u.jsx("span",{className:"story-viewer-name",children:d.name}),u.jsx("span",{className:"story-viewer-time",children:"Just now"})]}),u.jsx("button",{className:"story-viewer-close",onClick:r,children:ot.close})]}),u.jsx("div",{className:"story-viewer-content",style:{background:h.gradient||"#1a1a2e"},children:u.jsxs("div",{className:"story-viewer-text",children:[d.name,"'s Story"]})}),u.jsxs("div",{className:"story-viewer-tap-areas",children:[u.jsx("div",{className:"story-tap-left",onClick:m=>{m.stopPropagation(),l()}}),u.jsx("div",{className:"story-tap-right",onClick:m=>{m.stopPropagation(),o()}})]})]})})}function zE({users:t}){if(!t||t.length===0)return null;const e=t.length===1?`${t[0]} is typing...`:`${t.length} people are typing...`;return u.jsxs("div",{className:"typing-indicator",children:[u.jsxs("div",{className:"typing-dots",children:[u.jsx("span",{className:"typing-dot"}),u.jsx("span",{className:"typing-dot"}),u.jsx("span",{className:"typing-dot"})]}),u.jsx("span",{className:"typing-label",children:e})]})}function UE({date:t}){const e=new Date,a=new Date(t),r=e.toDateString()===a.toDateString(),o=new Date(e);o.setDate(o.getDate()-1);const l=o.toDateString()===a.toDateString();let d=r?"Today":l?"Yesterday":a.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"});return u.jsx("div",{className:"date-divider",children:u.jsx("span",{children:d})})}const fv=`
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

/* ── Inline Search Bar ── */
.inline-search-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  padding: 8px 14px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  transition: all 0.3s ease;
  animation: fadeIn 0.25s ease;
}
.inline-search-bar:focus-within {
  background: rgba(255,255,255,0.12);
  border-color: var(--chat-accent);
  box-shadow: 0 0 20px rgba(198, 255, 0, 0.1);
}
.inline-search-bar svg {
  width: 18px;
  height: 18px;
  color: var(--chat-text-secondary);
  flex-shrink: 0;
}
.inline-search-bar input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: var(--chat-text);
  font-size: 14px;
  font-family: var(--font-body);
}
.inline-search-bar input::placeholder {
  color: var(--chat-text-secondary);
}
.inline-search-clear {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background: rgba(255,255,255,0.1);
  color: var(--chat-text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: all 0.2s;
}
.inline-search-clear:hover {
  background: rgba(255,255,255,0.2);
  color: var(--chat-text);
}
.inline-search-clear svg {
  width: 14px;
  height: 14px;
}

/* ── Inline Search Dropdown ── */
.inline-search-overlay {
  position: fixed;
  inset: 0;
  z-index: 55;
  background: transparent;
}
.inline-search-dropdown {
  position: fixed;
  top: var(--chat-header-h);
  left: 50%;
  transform: translateX(-50%);
  width: min(480px, calc(100vw - 32px));
  max-height: min(400px, calc(100vh - var(--chat-header-h) - 24px));
  background: rgba(10, 14, 30, 0.96);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  box-shadow: 0 16px 48px rgba(0,0,0,0.5);
  z-index: 60;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: fadeIn 0.2s ease;
}
.inline-search-results {
  flex: 1;
  overflow-y: auto;
  padding: 8px 0;
}
.inline-search-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  cursor: pointer;
  transition: background 0.15s;
}
.inline-search-item:hover {
  background: rgba(255,255,255,0.05);
}
.inline-search-item-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--chat-glass-strong);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  overflow: hidden;
  flex-shrink: 0;
  position: relative;
}
.inline-search-item-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.inline-search-item-info {
  flex: 1;
  min-width: 0;
}
.inline-search-item-name-row {
  display: flex;
  align-items: center;
  gap: 6px;
}
.inline-search-item-name {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.inline-search-item-username {
  font-size: 12px;
  color: rgba(255,255,255,0.4);
}
.inline-search-empty {
  padding: 40px 20px;
  text-align: center;
  color: rgba(255,255,255,0.3);
  font-size: 14px;
}
.inline-search-spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}
.inline-search-status {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  right: 0;
  border: 2px solid #0a0e1e;
}
.inline-search-status.online {
  background: #22c55e;
}
.inline-search-status.offline {
  background: rgba(255,255,255,0.25);
}

/* ── Chat Header DM ── */
.chat-header-dm {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
}
.chat-header-dm-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--chat-glass-strong);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  color: var(--chat-accent);
  overflow: hidden;
  flex-shrink: 0;
}
.chat-header-dm-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.chat-header-dm-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
}
.chat-header-dm-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--chat-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 160px;
  line-height: 1.2;
}
.chat-header-dm-username {
  font-size: 11px;
  color: var(--chat-text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 160px;
  line-height: 1.2;
}

@media (max-width: 480px) {
  .inline-search-dropdown {
    width: calc(100vw - 16px);
    left: 8px;
    transform: none;
    max-height: calc(100vh - var(--chat-header-h) - 16px);
  }
}

/* ── Send Error ── */
.chat-send-error {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  margin: 0 12px 8px;
  background: rgba(239,68,68,0.12);
  border: 1px solid rgba(239,68,68,0.25);
  border-radius: 10px;
  color: #f87171;
  font-size: 13px;
}
.chat-send-error button {
  background: none;
  border: none;
  color: #f87171;
  cursor: pointer;
  padding: 2px 6px;
  font-size: 16px;
  line-height: 1;
  opacity: 0.7;
}
.chat-send-error button:hover {
  opacity: 1;
}

/* ── Upload Progress ── */
.chat-upload-progress {
  margin: 0 12px 8px;
  height: 4px;
  background: rgba(255,255,255,0.08);
  border-radius: 4px;
  overflow: hidden;
}
.chat-upload-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #7c5cfc, #a78bfa);
  border-radius: 4px;
  transition: width 0.3s ease;
}

/* ── Spinner ── */
@keyframes chat-spin {
  to { transform: rotate(360deg); }
}
.chat-spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255,255,255,0.2);
  border-top-color: #fff;
  border-radius: 50%;
  animation: chat-spin 0.6s linear infinite;
}

/* ── Send button disabled state ── */
.send-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
`;function BE(){var Un,$t;const t=cn(),[e,a]=S.useState(null),[r,o]=S.useState(!0),[l,d]=S.useState(null),[h,p]=S.useState(""),[m,y]=S.useState([]),[v,x]=S.useState([]),[w,j]=S.useState(!1),[E,T]=S.useState(!1),[k,C]=S.useState(0),[N,z]=S.useState(0),[J,Q]=S.useState([]),[D,q]=S.useState(!1),[H,X]=S.useState([]),[se,oe]=S.useState(!1),[Se,Ne]=S.useState([]),[je,M]=S.useState(!1),[ne,ie]=S.useState(null),[ye,be]=S.useState(null),[R,G]=S.useState(!1),[ee,te]=S.useState(0),[fe,_e]=S.useState(""),[Z,ge]=S.useState([]),[pe,tt]=S.useState(!1),[$e,Ke]=S.useState("connected"),[bt,Ee]=S.useState(!1),[ct,wn]=S.useState(null),Wi=S.useRef(null),ca=di(Y=>Y.unreadCount),za=S.useRef(null),vi=S.useRef(null);S.useEffect(()=>{document.title="Chat — FrameX",(async()=>{try{const{data:{session:re}}=await $.auth.getSession();if(!re){t("/login");return}a(re.user)}catch{console.warn("Auth check failed, running in offline mode"),a({id:"offline",email:"guest@framex.app"})}o(!1)})()},[t]),S.useEffect(()=>{if(!e||e.id==="offline"){x([{id:"general",name:"general",display_name:"# general"},{id:"random",name:"random",display_name:"# random"}]),d({id:"general",name:"general",display_name:"# general"});return}(async()=>{try{const{data:re}=await $.from("conversations").select("*").order("name");re&&(x(re),!l&&re.length>0&&d(re[0]))}catch(re){console.warn("Failed to fetch conversations:",re),x([{id:"general",name:"general",display_name:"# general"}]),d({id:"general",name:"general",display_name:"# general"})}})()},[e]),S.useEffect(()=>{const Y=$.channel("realtime-status");return Y.subscribe(re=>{re==="SUBSCRIBED"?Ke("connected"):re==="CHANNEL_ERROR"?Ke("error"):re==="CLOSED"&&Ke("disconnected")}),()=>{$.removeChannel(Y)}},[]),S.useEffect(()=>{if(!l||l.type!=="dm"||!e||e.id==="offline"){wn(null);return}(async()=>{var re;try{const{data:Oe}=await $.from("conversation_participants").select("user_id").eq("conversation_id",l.id),Ie=(re=Oe==null?void 0:Oe.find(Ae=>Ae.user_id!==e.id))==null?void 0:re.user_id;if(Ie){const{data:Ae}=await $.from("profiles").select("id, username, display_name, avatar_url, status").eq("id",Ie).single();Ae&&wn(Ae)}}catch{}})()},[l,e]),S.useEffect(()=>{const Y=re=>{re.key==="Escape"&&Ee(!1)};return window.addEventListener("keydown",Y),()=>window.removeEventListener("keydown",Y)},[]),S.useEffect(()=>{if(!e||e.id==="offline")return;(async()=>{var re;try{const{data:Oe}=await $.from("profiles").select("id, username, display_name, avatar_url").limit(20);if(Oe){const Ie=Oe.filter(Ae=>Ae.id!==e.id).map(Ae=>({id:Ae.id,name:Ae.display_name||Ae.username||"User",avatar:Ae.avatar_url||"",online:!1,unread:!1,isOwn:!1}));Ne([{id:e.id,name:"Your Story",avatar:((re=e.user_metadata)==null?void 0:re.avatar_url)||"",online:!0,unread:!1,isOwn:!0},...Ie.slice(0,19)])}}catch{}})()},[e]),S.useEffect(()=>{if(!l)return;(async()=>{try{if((e==null?void 0:e.id)==="offline"){y([{id:"1",content:"Welcome to FrameX Chat! 🎉",sender_id:"system",created_at:new Date().toISOString(),sender:{display_name:"FrameX",username:"framex"}},{id:"2",content:"Select a story to view it. This is a demo environment.",sender_id:"system",created_at:new Date(Date.now()-6e4).toISOString(),sender:{display_name:"FrameX",username:"framex"}}]);return}const{data:re}=await $.from("messages").select("*").eq("conversation_id",l.id).order("created_at",{ascending:!0}).limit(100);re&&y(re)}catch{console.warn("Failed to load messages")}})()},[l,e]),S.useEffect(()=>{if(!l||(e==null?void 0:e.id)==="offline")return;let Y;return(async()=>{try{Y=$.channel(`messages:${l.id}`).on("postgres_changes",{event:"INSERT",schema:"public",table:"messages",filter:`conversation_id=eq.${l.id}`},Oe=>{const Ie=Oe.new;Ie.sender_id!==(e==null?void 0:e.id)&&$.from("profiles").select("*").eq("id",Ie.sender_id).single().then(({data:Ae})=>{y(Tt=>[...Tt,{...Ie,sender:Ae}])}).catch(()=>{y(Ae=>[...Ae,Ie])})}).subscribe()}catch{console.warn("Realtime subscription failed")}})(),()=>{Y&&$.removeChannel(Y)}},[l,e]),S.useEffect(()=>{var Y;(Y=za.current)==null||Y.scrollIntoView({behavior:"smooth"})},[m]),S.useEffect(()=>{const Y=re=>{re.key==="Escape"&&j(!1)};return window.addEventListener("keydown",Y),()=>window.removeEventListener("keydown",Y)},[]),S.useEffect(()=>(w?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[w]),S.useEffect(()=>{if(!E)return;const Y=Se[k];if(!Y)return;const re=Y.stories[N];if(!re)return;const Oe=setTimeout(()=>{xt()},re.duration||5e3);return()=>clearTimeout(Oe)},[E,k,N]),S.useEffect(()=>{if(!fe.trim()||(e==null?void 0:e.id)==="offline"){ge([]);return}const Y=setTimeout(async()=>{tt(!0);try{const{data:re}=await $.from("profiles").select("id, username, display_name, avatar_url, status").or(`username.ilike.%${fe}%,display_name.ilike.%${fe}%`).limit(20);ge(re||[])}catch(re){console.warn("Search failed:",re),ge([])}tt(!1)},300);return()=>clearTimeout(Y)},[fe,e]);const I=S.useCallback(async()=>{if(!(!e||e.id==="offline")){oe(!0);try{const{data:Y}=await $.from("follows").select("follower_id").eq("following_id",e.id),{data:re}=await $.from("follows").select("following_id").eq("follower_id",e.id),Oe=(Y||[]).map(mt=>mt.follower_id),Ie=(re||[]).map(mt=>mt.following_id);if(Oe.length===0){X([]),oe(!1);return}const{data:Ae}=await $.from("profiles").select("id, username, display_name, avatar_url, bio, is_verified").in("id",Oe),Tt=(Ae||[]).map(mt=>({...mt,isFriend:Ie.includes(mt.id),isFollower:!0}));X(Tt)}catch(Y){console.warn("Failed to fetch panel users:",Y),X([])}oe(!1)}},[e]);S.useEffect(()=>{D&&I()},[D,I]),S.useEffect(()=>{if(!e||e.id==="offline")return;let Y;try{Y=$.channel("follows-changes").on("postgres_changes",{event:"*",schema:"public",table:"follows"},()=>{D&&I()}).subscribe()}catch{console.warn("Realtime follows subscription failed")}return()=>{Y&&$.removeChannel(Y)}},[e,D,I]);const de=S.useRef(new Set),Je=S.useCallback(async Y=>{var Ae,Tt,mt;if(Y==null||Y.preventDefault(),!h.trim()||!l)return;const re=h.trim();if(p(""),ie(null),(e==null?void 0:e.id)==="offline"){y(nt=>[...nt,{id:`msg-${Date.now()}`,content:re,sender_id:"offline",created_at:new Date().toISOString(),sender:{display_name:"You",username:"you"}}]);return}const Oe=`msg-${Date.now()}`,Ie={id:Oe,conversation_id:l.id,sender_id:e.id,content:re,created_at:new Date().toISOString(),sender:{display_name:((Ae=e==null?void 0:e.user_metadata)==null?void 0:Ae.full_name)||((Tt=e==null?void 0:e.email)==null?void 0:Tt.split("@")[0])||"You",username:((mt=e==null?void 0:e.email)==null?void 0:mt.split("@")[0])||"you"}};y(nt=>[...nt,Ie]),M(!0),de.current.add(Oe);try{let nt=null;if(ye){G(!0);const bi=ye.name.split(".").pop(),xi=`${e.id}/${Date.now()}.${bi}`,{data:jn,error:wi}=await $.storage.from("chat-files").upload(xi,ye);if(wi)throw wi;if(jn){const{data:{publicUrl:Oo}}=$.storage.from("chat-files").getPublicUrl(jn.path);nt=Oo}G(!1),be(null),te(0)}const{data:Qt,error:Xi}=await $.from("messages").insert({conversation_id:l.id,content:re,file_url:nt}).select().single();if(Xi)throw Xi;if(Qt&&de.current.has(Oe)){de.current.delete(Oe);let bi=null;try{const{data:jn}=await $.from("profiles").select("id, username, display_name, avatar_url, is_verified").eq("id",Qt.sender_id).single();bi=jn}catch{}const xi={...Qt,sender:bi};y(jn=>jn.map(wi=>wi.id===Oe?xi:wi))}}catch(nt){ie(nt.message||"Failed to send message"),console.warn("Send message error:",nt)}finally{M(!1),de.current.delete(Oe)}},[h,l,e,ye]),Be=S.useCallback(async()=>{try{await $.auth.signOut()}catch{}t("/login")},[t]),qt=S.useCallback(Y=>{C(Y),z(0),T(!0)},[]),Jt=S.useCallback(()=>{T(!1)},[]),xt=S.useCallback(()=>{const Y=Se[k];Y&&(N<Y.stories.length-1?z(re=>re+1):k<Se.length-1?(C(re=>re+1),z(0)):T(!1))},[k,N]),Sn=S.useCallback(()=>{var Y;N>0?z(re=>re-1):k>0&&(C(re=>re-1),z(((Y=Se[k-1])==null?void 0:Y.stories.length)-1||0))},[k,N]),Re=Y=>Y&&Y.split(" ").map(re=>re[0]).join("").toUpperCase().slice(0,2)||"?",Dt=Y=>{const re=new Date(Y),Ie=new Date-re,Ae=Math.floor(Ie/6e4),Tt=Math.floor(Ie/36e5);return Ae<1?"Now":Ae<60?`${Ae}m`:Tt<24?re.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):re.toLocaleDateString([],{month:"short",day:"numeric"})},Jc=m.reduce((Y,re,Oe)=>{const Ie=new Date(re.created_at).toDateString(),Ae=Oe>0?new Date(m[Oe-1].created_at).toDateString():null;return Ie!==Ae&&Y.push({type:"date",date:re.created_at}),Y.push({type:"message",msg:re,isOwn:re.sender_id===(e==null?void 0:e.id)}),Y},[]);if(r)return u.jsxs("div",{className:"chat-page",children:[u.jsx("style",{children:fv}),u.jsxs("div",{className:"chat-loading",children:[u.jsx("div",{className:"loading-spinner"}),u.jsx("span",{children:"Loading chat..."})]})]});const Qc=(l==null?void 0:l.display_name)||(l==null?void 0:l.name)||"Select a channel",Ua=((Un=e==null?void 0:e.user_metadata)==null?void 0:Un.full_name)||(e==null?void 0:e.email)||"User",Ft=Re(Ua);return u.jsxs("div",{className:"chat-page",children:[u.jsx("style",{children:fv}),u.jsxs("header",{className:"chat-header",children:[u.jsxs("div",{className:"chat-header-left",children:[u.jsx("button",{className:"hamburger-btn",onClick:()=>j(!0),"aria-label":"Open menu",children:ot.menu}),u.jsx("button",{className:"header-logo",onClick:()=>t("/"),children:ot.logo})]}),u.jsx("div",{className:"chat-header-center",children:bt?u.jsxs("div",{className:"inline-search-bar",children:[ot.search,u.jsx("input",{type:"text",placeholder:"Search users by name or ID...",value:fe,onChange:Y=>_e(Y.target.value),autoFocus:!0}),fe&&u.jsx("button",{className:"inline-search-clear",onClick:()=>{_e(""),ge([])},children:ot.close})]}):ct?u.jsxs("div",{className:"chat-header-dm",children:[u.jsx("div",{className:"chat-header-dm-avatar",children:ct.avatar_url?u.jsx("img",{src:ct.avatar_url,alt:""}):u.jsx("span",{children:Re(ct.display_name||ct.username)})}),u.jsxs("div",{className:"chat-header-dm-info",children:[u.jsx("span",{className:"chat-header-dm-name",children:ct.display_name||ct.username}),u.jsxs("span",{className:"chat-header-dm-username",children:["@",ct.username]})]})]}):u.jsxs(u.Fragment,{children:[u.jsx("h2",{onClick:()=>{((l==null?void 0:l.name)==="general"||(l==null?void 0:l.display_name)==="# general")&&q(Y=>!Y)},style:{cursor:(l==null?void 0:l.name)==="general"?"pointer":"default"},children:Qc}),(l==null?void 0:l.name)==="general"&&u.jsx("svg",{className:"channel-dropdown-arrow",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"14",height:"14",children:u.jsx("polyline",{points:"6 9 12 15 18 9"})})]})}),u.jsxs("div",{className:"chat-header-right",children:[u.jsx("button",{className:"header-btn","aria-label":"Search",onClick:()=>Ee(Y=>!Y),children:ot.search}),u.jsxs("button",{className:"header-btn","aria-label":"Notifications",onClick:()=>t("/notifications"),children:[ot.bell,ca>0&&u.jsx("span",{className:"notification-badge",children:ca>99?"99+":ca})]}),u.jsx("button",{className:"header-btn chat-new-btn","aria-label":"New chat",onClick:()=>Ee(Y=>!Y),children:ot.plus})]})]}),D&&u.jsx("div",{className:"user-panel-overlay",onClick:()=>q(!1)}),u.jsx("div",{className:`user-panel ${D?"user-panel-open":""}`,children:u.jsxs("div",{className:"user-panel-inner",children:[u.jsxs("div",{className:"user-panel-header",children:[u.jsx("h3",{children:"Channel Members"}),u.jsx("button",{className:"user-panel-close-btn",onClick:()=>q(!1),"aria-label":"Close panel",children:ot.close})]}),u.jsx("div",{className:"user-panel-body",children:se?u.jsx("div",{className:"user-panel-loading",children:u.jsx("div",{className:"user-panel-spinner"})}):H.length===0?u.jsxs("div",{className:"user-panel-empty",children:[u.jsxs("svg",{className:"user-panel-empty-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"9",cy:"7",r:"4"}),u.jsx("line",{x1:"22",y1:"6",x2:"22",y2:"12"}),u.jsx("line",{x1:"19",y1:"9",x2:"25",y2:"9"})]}),u.jsx("p",{children:"You are alone"}),u.jsx("span",{children:"Follow others to see them here"})]}):u.jsx("div",{className:"user-panel-list",children:H.map(Y=>u.jsxs("div",{className:"user-panel-item",onClick:()=>{q(!1)},children:[u.jsx("div",{className:"user-panel-avatar",children:Y.avatar_url?u.jsx("img",{src:Y.avatar_url,alt:"",loading:"lazy"}):u.jsx("span",{className:"user-panel-avatar-fallback",children:(Y.display_name||Y.username||"?")[0].toUpperCase()})}),u.jsxs("div",{className:"user-panel-info",children:[u.jsxs("div",{className:"user-panel-name-row",children:[u.jsx("span",{className:"user-panel-name",children:Y.display_name||Y.username||"Unknown"}),Y.is_verified&&u.jsx("svg",{className:"user-panel-verified",viewBox:"0 0 24 24",fill:"currentColor",width:"14",height:"14",children:u.jsx("path",{d:"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"})})]}),u.jsxs("div",{className:"user-panel-handle",children:["@",Y.username]})]}),Y.isFriend&&u.jsx("span",{className:"user-panel-badge",children:"Friend"})]},Y.id))})})]})}),u.jsx("div",{className:`sidebar-overlay ${w?"open":""}`,onClick:()=>j(!1)}),u.jsxs("aside",{className:`chat-sidebar ${w?"open":""}`,children:[u.jsxs("div",{className:"sidebar-profile",children:[u.jsxs("div",{className:"sidebar-avatar",children:[($t=e==null?void 0:e.user_metadata)!=null&&$t.avatar_url?u.jsx("img",{src:e.user_metadata.avatar_url,alt:""}):Ft,u.jsx("span",{className:"status-dot"})]}),u.jsxs("div",{className:"sidebar-user-info",children:[u.jsx("div",{className:"sidebar-username",children:Ua}),u.jsx("div",{className:"sidebar-status",children:"● Online"})]})]}),u.jsxs("nav",{className:"sidebar-nav",children:[u.jsx("div",{className:"sidebar-section-label",children:"Menu"}),u.jsxs("button",{className:"sidebar-nav-item active",onClick:()=>{j(!1),t("/chat")},children:[ot.chat,u.jsx("span",{className:"sidebar-nav-label",children:"Chats"})]}),u.jsxs("button",{className:"sidebar-nav-item",onClick:()=>{j(!1),t("/home")},children:[ot.home,u.jsx("span",{className:"sidebar-nav-label",children:"Home"})]}),u.jsxs("button",{className:"sidebar-nav-item",onClick:()=>{j(!1),t("/communities")},children:[ot.communities,u.jsx("span",{className:"sidebar-nav-label",children:"Communities"})]}),u.jsxs("button",{className:"sidebar-nav-item",onClick:()=>{j(!1),t("/explore")},children:[ot.explore,u.jsx("span",{className:"sidebar-nav-label",children:"Explore"})]}),u.jsx("div",{className:"sidebar-section-label",children:"Preferences"}),u.jsxs("button",{className:"sidebar-nav-item",onClick:()=>{j(!1),t("/notifications")},children:[ot.notification,u.jsx("span",{className:"sidebar-nav-label",children:"Notifications"})]}),u.jsxs("button",{className:"sidebar-nav-item",onClick:()=>{j(!1),t("/settings")},children:[ot.settings,u.jsx("span",{className:"sidebar-nav-label",children:"Settings"})]})]}),u.jsxs("div",{className:"sidebar-bottom",children:[u.jsxs("button",{className:"sidebar-logout",onClick:Be,children:[ot.logout,u.jsx("span",{children:"Log Out"})]}),u.jsx("div",{className:"sidebar-version",children:"FrameX v1.0.0"})]})]}),u.jsx("main",{className:"chat-main",children:l?m.length===0?u.jsx("div",{className:"messages-container",children:u.jsxs("div",{className:"empty-state",children:[u.jsx("div",{className:"empty-state-icon",children:ot.chat}),(l==null?void 0:l.type)==="dm"&&ct?u.jsxs(u.Fragment,{children:[u.jsxs("h3",{children:["Start a conversation with @",ct.username]}),u.jsx("p",{children:"Send a message to begin chatting."})]}):u.jsxs(u.Fragment,{children:[u.jsx("h3",{children:"No messages yet"}),u.jsx("p",{children:"Start the conversation. Send a message to begin chatting."})]})]})}):u.jsxs("div",{className:"messages-container",children:[Jc.map((Y,re)=>{var Ae,Tt;if(Y.type==="date")return u.jsx(UE,{date:Y.date},`date-${re}`);const{msg:Oe,isOwn:Ie}=Y;return u.jsxs("div",{className:`chat-msg-wrapper ${Ie?"outgoing":"incoming"}`,children:[u.jsxs("div",{className:"chat-msg-bubble",children:[!Ie&&u.jsx("div",{style:{fontSize:12,fontWeight:600,color:"var(--chat-accent)",marginBottom:2},children:((Ae=Oe.sender)==null?void 0:Ae.display_name)||((Tt=Oe.sender)==null?void 0:Tt.username)||"Unknown"}),u.jsx("div",{children:Oe.content})]}),u.jsxs("div",{className:"chat-msg-meta",children:[u.jsx("span",{className:"chat-msg-time",children:Dt(Oe.created_at)}),Ie&&u.jsx("span",{className:"chat-msg-receipt",children:ot.checkAll})]}),u.jsx("div",{style:{display:"flex",gap:6,alignItems:"center"},children:u.jsxs("button",{className:"chat-msg-reply",children:[ot.reply," Reply"]})}),u.jsxs("div",{className:"chat-msg-reactions",children:[u.jsx("span",{className:"msg-reaction",children:"❤️"}),u.jsx("span",{className:"msg-reaction",children:"🔥"}),u.jsx("span",{className:"msg-reaction",children:"👍"})]})]},Oe.id)}),J.length>0&&u.jsx(zE,{users:J}),u.jsx("div",{ref:za})]}):u.jsx("div",{className:"messages-container",children:u.jsxs("div",{className:"channel-selector",children:[u.jsx("h3",{children:"Conversations"}),v.map(Y=>u.jsxs("button",{className:"channel-item",onClick:()=>d(Y),children:[u.jsx("div",{className:"channel-avatar",children:"#"}),u.jsxs("div",{className:"channel-info",children:[u.jsx("div",{className:"channel-name",children:Y.display_name||`# ${Y.name}`}),u.jsx("div",{className:"channel-preview",children:"Tap to view messages"})]}),u.jsx("div",{className:"channel-meta"})]},Y.id))]})})}),u.jsxs("div",{className:"chat-composer-wrapper",children:[R&&u.jsx("div",{className:"chat-upload-progress",children:u.jsx("div",{className:"chat-upload-progress-bar",style:{width:`${ee||50}%`}})}),u.jsxs("form",{className:"chat-composer",onSubmit:Je,children:[u.jsx("input",{ref:Wi,type:"file",style:{display:"none"},onChange:Y=>be(Y.target.files[0]||null)}),u.jsx("button",{type:"button",className:"composer-btn","aria-label":"Attach file",onClick:()=>{var Y;return(Y=Wi.current)==null?void 0:Y.click()},children:ot.attachment}),u.jsx("input",{ref:vi,className:"composer-input",type:"text",placeholder:l?`Message ${l.display_name||l.name||"channel"}...`:"Select a conversation to start chatting",value:h,onChange:Y=>p(Y.target.value),disabled:!l,"aria-label":"Message input"}),u.jsx("button",{type:"button",className:"composer-btn","aria-label":"Add emoji",children:ot.emoji}),u.jsx("button",{type:"button",className:"composer-btn","aria-label":"Voice message",children:ot.mic}),u.jsx("button",{type:"submit",className:"composer-btn send-btn",disabled:!h.trim()||!l||je||R,"aria-label":"Send message",children:je?u.jsx("div",{className:"chat-spinner"}):ot.send})]}),ne&&u.jsxs("div",{className:"chat-send-error",children:[u.jsx("span",{children:ne}),u.jsx("button",{onClick:()=>ie(null),"aria-label":"Dismiss error",children:ot.close})]})]}),u.jsx("div",{className:"stories-rail-wrapper",children:u.jsx("div",{className:"stories-rail",children:Se.map((Y,re)=>u.jsxs("div",{className:"story-avatar-wrapper",style:{"--story-index":re},onClick:()=>qt(re),children:[u.jsx("div",{className:`story-avatar-ring ${Y.unread?"unread":"seen"}`,children:u.jsxs("div",{className:"story-avatar-inner",children:[Y.avatar?u.jsx("img",{src:Y.avatar,alt:""}):Re(Y.name),Y.online&&u.jsx("span",{className:"story-online-dot"})]})}),u.jsx("span",{className:"story-avatar-name",children:Y.name})]},Y.id))})}),bt&&u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"inline-search-overlay",onClick:()=>Ee(!1)}),u.jsx("div",{className:"inline-search-dropdown",children:pe?u.jsx("div",{className:"inline-search-spinner"}):Z.length>0?Z.map(Y=>{var re,Oe;return u.jsxs("div",{className:"inline-search-item",onClick:async()=>{var Ie;try{const{data:Ae}=await $.from("conversation_participants").select("conversation_id").eq("user_id",e.id),Tt=(Ae==null?void 0:Ae.map(nt=>nt.conversation_id))||[];let mt=null;if(Tt.length>0){const{data:nt}=await $.from("conversation_participants").select("conversation_id").in("conversation_id",Tt).eq("user_id",Y.id),Qt=(Ie=nt==null?void 0:nt[0])==null?void 0:Ie.conversation_id;if(Qt){const{data:Xi}=await $.from("conversations").select("*").eq("id",Qt).single();mt=Xi}}if(mt)d(mt);else{const{data:nt}=await $.from("conversations").insert({type:"dm",created_by:e.id}).select().single();nt&&(await $.from("conversation_participants").insert([{conversation_id:nt.id,user_id:e.id},{conversation_id:nt.id,user_id:Y.id}]),x(Qt=>[nt,...Qt]),d(nt))}Y.id!==e.id&&wn(Y)}catch(Ae){console.warn("Conversation create error:",Ae)}Ee(!1),_e(""),ge([])},children:[u.jsxs("div",{className:"inline-search-item-avatar",children:[Y.avatar_url?u.jsx("img",{src:Y.avatar_url,alt:"",loading:"lazy"}):u.jsx("span",{children:((re=Y.display_name)==null?void 0:re[0])||((Oe=Y.username)==null?void 0:Oe[0])||"?"}),u.jsx("span",{className:`inline-search-status ${Y.status==="online"?"online":"offline"}`})]}),u.jsxs("div",{className:"inline-search-item-info",children:[u.jsx("div",{className:"inline-search-item-name",children:Y.display_name||Y.username||"Unknown"}),u.jsxs("div",{className:"inline-search-item-username",children:["@",Y.username]})]})]},Y.id)}):fe.trim()?u.jsx("div",{className:"inline-search-empty",children:"No users found"}):null})]}),E&&u.jsx(ME,{stories:Se,userIndex:k,storyIndex:N,onClose:Jt,onNext:xt,onPrev:Sn})]})}const Kf=S.createContext({});function Yf(t){const e=S.useRef(null);return e.current===null&&(e.current=t()),e.current}const PE=typeof window<"u",Ux=PE?S.useLayoutEffect:S.useEffect,Gc=S.createContext(null);function Wf(t,e){t.indexOf(e)===-1&&t.push(e)}function Cc(t,e){const a=t.indexOf(e);a>-1&&t.splice(a,1)}const oa=(t,e,a)=>a>e?e:a<t?t:a;let Xf=()=>{};const pi={},Bx=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),Px=t=>typeof t=="object"&&t!==null,Vx=t=>/^0[^.\s]+$/u.test(t);function $x(t){let e;return()=>(e===void 0&&(e=t()),e)}const zn=t=>t,Co=(...t)=>t.reduce((e,a)=>r=>a(e(r))),wo=(t,e,a)=>{const r=e-t;return r?(a-t)/r:1};class Jf{constructor(){this.subscriptions=[]}add(e){return Wf(this.subscriptions,e),()=>Cc(this.subscriptions,e)}notify(e,a,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,a,r);else for(let l=0;l<o;l++){const d=this.subscriptions[l];d&&d(e,a,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const vn=t=>t*1e3,Mn=t=>t/1e3,Hx=(t,e)=>e?t*(1e3/e):0,Ix=(t,e,a)=>(((1-3*a+3*e)*t+(3*a-6*e))*t+3*e)*t,VE=1e-7,$E=12;function HE(t,e,a,r,o){let l,d,h=0;do d=e+(a-e)/2,l=Ix(d,r,o)-t,l>0?a=d:e=d;while(Math.abs(l)>VE&&++h<$E);return d}function Ao(t,e,a,r){if(t===e&&a===r)return zn;const o=l=>HE(l,0,1,t,a);return l=>l===0||l===1?l:Ix(o(l),e,r)}const qx=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Fx=t=>e=>1-t(1-e),Gx=Ao(.33,1.53,.69,.99),Qf=Fx(Gx),Kx=qx(Qf),Yx=t=>t>=1?1:(t*=2)<1?.5*Qf(t):.5*(2-Math.pow(2,-10*(t-1))),Zf=t=>1-Math.sin(Math.acos(t)),Wx=Fx(Zf),Xx=qx(Zf),IE=Ao(.42,0,1,1),qE=Ao(0,0,.58,1),Jx=Ao(.42,0,.58,1),FE=t=>Array.isArray(t)&&typeof t[0]!="number",Qx=t=>Array.isArray(t)&&typeof t[0]=="number",GE={linear:zn,easeIn:IE,easeInOut:Jx,easeOut:qE,circIn:Zf,circInOut:Xx,circOut:Wx,backIn:Qf,backInOut:Kx,backOut:Gx,anticipate:Yx},KE=t=>typeof t=="string",pv=t=>{if(Qx(t)){Xf(t.length===4);const[e,a,r,o]=t;return Ao(e,a,r,o)}else if(KE(t))return GE[t];return t},ec=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function YE(t,e){let a=new Set,r=new Set,o=!1,l=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(y){d.has(y)&&(m.schedule(y),t()),y(h)}const m={schedule:(y,v=!1,x=!1)=>{const j=x&&o?a:r;return v&&d.add(y),j.add(y),y},cancel:y=>{r.delete(y),d.delete(y)},process:y=>{if(h=y,o){l=!0;return}o=!0;const v=a;a=r,r=v,a.forEach(p),a.clear(),o=!1,l&&(l=!1,m.process(y))}};return m}const WE=40;function Zx(t,e){let a=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>a=!0,d=ec.reduce((N,z)=>(N[z]=YE(l),N),{}),{setup:h,read:p,resolveKeyframes:m,preUpdate:y,update:v,preRender:x,render:w,postRender:j}=d,E=()=>{const N=pi.useManualTiming,z=N?o.timestamp:performance.now();a=!1,N||(o.delta=r?1e3/60:Math.max(Math.min(z-o.timestamp,WE),1)),o.timestamp=z,o.isProcessing=!0,h.process(o),p.process(o),m.process(o),y.process(o),v.process(o),x.process(o),w.process(o),j.process(o),o.isProcessing=!1,a&&e&&(r=!1,t(E))},T=()=>{a=!0,r=!0,o.isProcessing||t(E)};return{schedule:ec.reduce((N,z)=>{const J=d[z];return N[z]=(Q,D=!1,q=!1)=>(a||T(),J.schedule(Q,D,q)),N},{}),cancel:N=>{for(let z=0;z<ec.length;z++)d[ec[z]].cancel(N)},state:o,steps:d}}const{schedule:et,cancel:mi,state:Pt,steps:kh}=Zx(typeof requestAnimationFrame<"u"?requestAnimationFrame:zn,!0);let cc;function XE(){cc=void 0}const Yt={now:()=>(cc===void 0&&Yt.set(Pt.isProcessing||pi.useManualTiming?Pt.timestamp:performance.now()),cc),set:t=>{cc=t,queueMicrotask(XE)}},ew=t=>e=>typeof e=="string"&&e.startsWith(t),tw=ew("--"),JE=ew("var(--"),ep=t=>JE(t)?QE.test(t.split("/*")[0].trim()):!1,QE=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function mv(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const es={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},So={...es,transform:t=>oa(0,1,t)},tc={...es,default:1},oo=t=>Math.round(t*1e5)/1e5,tp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function ZE(t){return t==null}const eT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,np=(t,e)=>a=>!!(typeof a=="string"&&eT.test(a)&&a.startsWith(t)||e&&!ZE(a)&&Object.prototype.hasOwnProperty.call(a,e)),nw=(t,e,a)=>r=>{if(typeof r!="string")return r;const[o,l,d,h]=r.match(tp);return{[t]:parseFloat(o),[e]:parseFloat(l),[a]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},tT=t=>oa(0,255,t),Eh={...es,transform:t=>Math.round(tT(t))},Fi={test:np("rgb","red"),parse:nw("red","green","blue"),transform:({red:t,green:e,blue:a,alpha:r=1})=>"rgba("+Eh.transform(t)+", "+Eh.transform(e)+", "+Eh.transform(a)+", "+oo(So.transform(r))+")"};function nT(t){let e="",a="",r="",o="";return t.length>5?(e=t.substring(1,3),a=t.substring(3,5),r=t.substring(5,7),o=t.substring(7,9)):(e=t.substring(1,2),a=t.substring(2,3),r=t.substring(3,4),o=t.substring(4,5),e+=e,a+=a,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(a,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const lf={test:np("#"),parse:nT,transform:Fi.transform},No=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Na=No("deg"),sa=No("%"),ce=No("px"),aT=No("vh"),iT=No("vw"),gv={...sa,parse:t=>sa.parse(t)/100,transform:t=>sa.transform(t*100)},qr={test:np("hsl","hue"),parse:nw("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:a,alpha:r=1})=>"hsla("+Math.round(t)+", "+sa.transform(oo(e))+", "+sa.transform(oo(a))+", "+oo(So.transform(r))+")"},Et={test:t=>Fi.test(t)||lf.test(t)||qr.test(t),parse:t=>Fi.test(t)?Fi.parse(t):qr.test(t)?qr.parse(t):lf.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Fi.transform(t):qr.transform(t),getAnimatableNone:t=>{const e=Et.parse(t);return e.alpha=0,Et.transform(e)}},rT=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function sT(t){var e,a;return isNaN(t)&&typeof t=="string"&&(((e=t.match(tp))==null?void 0:e.length)||0)+(((a=t.match(rT))==null?void 0:a.length)||0)>0}const aw="number",iw="color",oT="var",lT="var(",yv="${}",cT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Yr(t){const e=t.toString(),a=[],r={color:[],number:[],var:[]},o=[];let l=0;const h=e.replace(cT,p=>(Et.test(p)?(r.color.push(l),o.push(iw),a.push(Et.parse(p))):p.startsWith(lT)?(r.var.push(l),o.push(oT),a.push(p)):(r.number.push(l),o.push(aw),a.push(parseFloat(p))),++l,yv)).split(yv);return{values:a,split:h,indexes:r,types:o}}function uT(t){return Yr(t).values}function rw({split:t,types:e}){const a=t.length;return r=>{let o="";for(let l=0;l<a;l++)if(o+=t[l],r[l]!==void 0){const d=e[l];d===aw?o+=oo(r[l]):d===iw?o+=Et.transform(r[l]):o+=r[l]}return o}}function dT(t){return rw(Yr(t))}const hT=t=>typeof t=="number"?0:Et.test(t)?Et.getAnimatableNone(t):t,fT=(t,e)=>typeof t=="number"?e!=null&&e.trim().endsWith("/")?t:0:hT(t);function pT(t){const e=Yr(t);return rw(e)(e.values.map((r,o)=>fT(r,e.split[o])))}const Yn={test:sT,parse:uT,createTransformer:dT,getAnimatableNone:pT};function Th(t,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?t+(e-t)*6*a:a<1/2?e:a<2/3?t+(e-t)*(2/3-a)*6:t}function mT({hue:t,saturation:e,lightness:a,alpha:r}){t/=360,e/=100,a/=100;let o=0,l=0,d=0;if(!e)o=l=d=a;else{const h=a<.5?a*(1+e):a+e-a*e,p=2*a-h;o=Th(p,h,t+1/3),l=Th(p,h,t),d=Th(p,h,t-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(d*255),alpha:r}}function Ac(t,e){return a=>a>0?e:t}const Ze=(t,e,a)=>t+(e-t)*a,Ch=(t,e,a)=>{const r=t*t,o=a*(e*e-r)+r;return o<0?0:Math.sqrt(o)},gT=[lf,Fi,qr],yT=t=>gT.find(e=>e.test(t));function vv(t){const e=yT(t);if(!e)return!1;let a=e.parse(t);return e===qr&&(a=mT(a)),a}const bv=(t,e)=>{const a=vv(t),r=vv(e);if(!a||!r)return Ac(t,e);const o={...a};return l=>(o.red=Ch(a.red,r.red,l),o.green=Ch(a.green,r.green,l),o.blue=Ch(a.blue,r.blue,l),o.alpha=Ze(a.alpha,r.alpha,l),Fi.transform(o))},cf=new Set(["none","hidden"]);function vT(t,e){return cf.has(t)?a=>a<=0?t:e:a=>a>=1?e:t}function bT(t,e){return a=>Ze(t,e,a)}function ap(t){return typeof t=="number"?bT:typeof t=="string"?ep(t)?Ac:Et.test(t)?bv:ST:Array.isArray(t)?sw:typeof t=="object"?Et.test(t)?bv:xT:Ac}function sw(t,e){const a=[...t],r=a.length,o=t.map((l,d)=>ap(l)(l,e[d]));return l=>{for(let d=0;d<r;d++)a[d]=o[d](l);return a}}function xT(t,e){const a={...t,...e},r={};for(const o in a)t[o]!==void 0&&e[o]!==void 0&&(r[o]=ap(t[o])(t[o],e[o]));return o=>{for(const l in r)a[l]=r[l](o);return a}}function wT(t,e){const a=[],r={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const l=e.types[o],d=t.indexes[l][r[l]],h=t.values[d]??0;a[o]=h,r[l]++}return a}const ST=(t,e)=>{const a=Yn.createTransformer(e),r=Yr(t),o=Yr(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?cf.has(t)&&!o.values.length||cf.has(e)&&!r.values.length?vT(t,e):Co(sw(wT(r,o),o.values),a):Ac(t,e)};function ow(t,e,a){return typeof t=="number"&&typeof e=="number"&&typeof a=="number"?Ze(t,e,a):ap(t)(t,e)}const jT=t=>{const e=({timestamp:a})=>t(a);return{start:(a=!0)=>et.update(e,a),stop:()=>mi(e),now:()=>Pt.isProcessing?Pt.timestamp:Yt.now()}},lw=(t,e,a=10)=>{let r="";const o=Math.max(Math.round(e/a),2);for(let l=0;l<o;l++)r+=Math.round(t(l/(o-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Nc=2e4;function ip(t){let e=0;const a=50;let r=t.next(e);for(;!r.done&&e<Nc;)e+=a,r=t.next(e);return e>=Nc?1/0:e}function _T(t,e=100,a){const r=a({...t,keyframes:[0,e]}),o=Math.min(ip(r),Nc);return{type:"keyframes",ease:l=>r.next(o*l).value/e,duration:Mn(o)}}const ft={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function uf(t,e){return t*Math.sqrt(1-e*e)}const kT=12;function ET(t,e,a){let r=a;for(let o=1;o<kT;o++)r=r-t(r)/e(r);return r}const Ah=.001;function TT({duration:t=ft.duration,bounce:e=ft.bounce,velocity:a=ft.velocity,mass:r=ft.mass}){let o,l,d=1-e;d=oa(ft.minDamping,ft.maxDamping,d),t=oa(ft.minDuration,ft.maxDuration,Mn(t)),d<1?(o=m=>{const y=m*d,v=y*t,x=y-a,w=uf(m,d),j=Math.exp(-v);return Ah-x/w*j},l=m=>{const v=m*d*t,x=v*a+a,w=Math.pow(d,2)*Math.pow(m,2)*t,j=Math.exp(-v),E=uf(Math.pow(m,2),d);return(-o(m)+Ah>0?-1:1)*((x-w)*j)/E}):(o=m=>{const y=Math.exp(-m*t),v=(m-a)*t+1;return-Ah+y*v},l=m=>{const y=Math.exp(-m*t),v=(a-m)*(t*t);return y*v});const h=5/t,p=ET(o,l,h);if(t=vn(t),isNaN(p))return{stiffness:ft.stiffness,damping:ft.damping,duration:t};{const m=Math.pow(p,2)*r;return{stiffness:m,damping:d*2*Math.sqrt(r*m),duration:t}}}const CT=["duration","bounce"],AT=["stiffness","damping","mass"];function xv(t,e){return e.some(a=>t[a]!==void 0)}function NT(t){let e={velocity:ft.velocity,stiffness:ft.stiffness,damping:ft.damping,mass:ft.mass,isResolvedFromDuration:!1,...t};if(!xv(t,AT)&&xv(t,CT))if(e.velocity=0,t.visualDuration){const a=t.visualDuration,r=2*Math.PI/(a*1.2),o=r*r,l=2*oa(.05,1,1-(t.bounce||0))*Math.sqrt(o);e={...e,mass:ft.mass,stiffness:o,damping:l}}else{const a=TT({...t,velocity:0});e={...e,...a,mass:ft.mass},e.isResolvedFromDuration=!0}return e}function Rc(t=ft.visualDuration,e=ft.bounce){const a=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:r,restDelta:o}=a;const l=a.keyframes[0],d=a.keyframes[a.keyframes.length-1],h={done:!1,value:l},{stiffness:p,damping:m,mass:y,duration:v,velocity:x,isResolvedFromDuration:w}=NT({...a,velocity:-Mn(a.velocity||0)}),j=x||0,E=m/(2*Math.sqrt(p*y)),T=d-l,k=Mn(Math.sqrt(p/y)),C=Math.abs(T)<5;r||(r=C?ft.restSpeed.granular:ft.restSpeed.default),o||(o=C?ft.restDelta.granular:ft.restDelta.default);let N,z,J,Q,D,q;if(E<1)J=uf(k,E),Q=(j+E*k*T)/J,N=X=>{const se=Math.exp(-E*k*X);return d-se*(Q*Math.sin(J*X)+T*Math.cos(J*X))},D=E*k*Q+T*J,q=E*k*T-Q*J,z=X=>Math.exp(-E*k*X)*(D*Math.sin(J*X)+q*Math.cos(J*X));else if(E===1){N=se=>d-Math.exp(-k*se)*(T+(j+k*T)*se);const X=j+k*T;z=se=>Math.exp(-k*se)*(k*X*se-j)}else{const X=k*Math.sqrt(E*E-1);N=Ne=>{const je=Math.exp(-E*k*Ne),M=Math.min(X*Ne,300);return d-je*((j+E*k*T)*Math.sinh(M)+X*T*Math.cosh(M))/X};const se=(j+E*k*T)/X,oe=E*k*se-T*X,Se=E*k*T-se*X;z=Ne=>{const je=Math.exp(-E*k*Ne),M=Math.min(X*Ne,300);return je*(oe*Math.sinh(M)+Se*Math.cosh(M))}}const H={calculatedDuration:w&&v||null,velocity:X=>vn(z(X)),next:X=>{if(!w&&E<1){const oe=Math.exp(-E*k*X),Se=Math.sin(J*X),Ne=Math.cos(J*X),je=d-oe*(Q*Se+T*Ne),M=vn(oe*(D*Se+q*Ne));return h.done=Math.abs(M)<=r&&Math.abs(d-je)<=o,h.value=h.done?d:je,h}const se=N(X);if(w)h.done=X>=v;else{const oe=vn(z(X));h.done=Math.abs(oe)<=r&&Math.abs(d-se)<=o}return h.value=h.done?d:se,h},toString:()=>{const X=Math.min(ip(H),Nc),se=lw(oe=>H.next(X*oe).value,X,30);return X+"ms "+se},toTransition:()=>{}};return H}Rc.applyToOptions=t=>{const e=_T(t,100,Rc);return t.ease=e.ease,t.duration=vn(e.duration),t.type="keyframes",t};const RT=5;function cw(t,e,a){const r=Math.max(e-RT,0);return Hx(a-t(r),e-r)}function df({keyframes:t,velocity:e=0,power:a=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:d,min:h,max:p,restDelta:m=.5,restSpeed:y}){const v=t[0],x={done:!1,value:v},w=q=>h!==void 0&&q<h||p!==void 0&&q>p,j=q=>h===void 0?p:p===void 0||Math.abs(h-q)<Math.abs(p-q)?h:p;let E=a*e;const T=v+E,k=d===void 0?T:d(T);k!==T&&(E=k-v);const C=q=>-E*Math.exp(-q/r),N=q=>k+C(q),z=q=>{const H=C(q),X=N(q);x.done=Math.abs(H)<=m,x.value=x.done?k:X};let J,Q;const D=q=>{w(x.value)&&(J=q,Q=Rc({keyframes:[x.value,j(x.value)],velocity:cw(N,q,x.value),damping:o,stiffness:l,restDelta:m,restSpeed:y}))};return D(0),{calculatedDuration:null,next:q=>{let H=!1;return!Q&&J===void 0&&(H=!0,z(q),D(q)),J!==void 0&&q>=J?Q.next(q-J):(!H&&z(q),x)}}}function OT(t,e,a){const r=[],o=a||pi.mix||ow,l=t.length-1;for(let d=0;d<l;d++){let h=o(t[d],t[d+1]);if(e){const p=Array.isArray(e)?e[d]||zn:e;h=Co(p,h)}r.push(h)}return r}function DT(t,e,{clamp:a=!0,ease:r,mixer:o}={}){const l=t.length;if(Xf(l===e.length),l===1)return()=>e[0];if(l===2&&e[0]===e[1])return()=>e[1];const d=t[0]===t[1];t[0]>t[l-1]&&(t=[...t].reverse(),e=[...e].reverse());const h=OT(e,r,o),p=h.length,m=y=>{if(d&&y<t[0])return e[0];let v=0;if(p>1)for(;v<t.length-2&&!(y<t[v+1]);v++);const x=wo(t[v],t[v+1],y);return h[v](x)};return a?y=>m(oa(t[0],t[l-1],y)):m}function LT(t,e){const a=t[t.length-1];for(let r=1;r<=e;r++){const o=wo(0,e,r);t.push(Ze(a,1,o))}}function MT(t){const e=[0];return LT(e,t.length-1),e}function zT(t,e){return t.map(a=>a*e)}function UT(t,e){return t.map(()=>e||Jx).splice(0,t.length-1)}function lo({duration:t=300,keyframes:e,times:a,ease:r="easeInOut"}){const o=FE(r)?r.map(pv):pv(r),l={done:!1,value:e[0]},d=zT(a&&a.length===e.length?a:MT(e),t),h=DT(d,e,{ease:Array.isArray(o)?o:UT(e,o)});return{calculatedDuration:t,next:p=>(l.value=h(p),l.done=p>=t,l)}}const BT=t=>t!==null;function Kc(t,{repeat:e,repeatType:a="loop"},r,o=1){const l=t.filter(BT),h=o<0||e&&a!=="loop"&&e%2===1?0:l.length-1;return!h||r===void 0?l[h]:r}const PT={decay:df,inertia:df,tween:lo,keyframes:lo,spring:Rc};function uw(t){typeof t.type=="string"&&(t.type=PT[t.type])}class rp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,a){return this.finished.then(e,a)}}const VT=t=>t/100;class Oc extends rp{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,o;const{motionValue:a}=this.options;a&&a.updatedAt!==Yt.now()&&this.tick(Yt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(r=this.options).onStop)==null||o.call(r))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;uw(e);const{type:a=lo,repeat:r=0,repeatDelay:o=0,repeatType:l,velocity:d=0}=e;let{keyframes:h}=e;const p=a||lo;p!==lo&&typeof h[0]!="number"&&(this.mixKeyframes=Co(VT,ow(h[0],h[1])),h=[0,100]);const m=p({...e,keyframes:h});l==="mirror"&&(this.mirroredGenerator=p({...e,keyframes:[...h].reverse(),velocity:-d})),m.calculatedDuration===null&&(m.calculatedDuration=ip(m));const{calculatedDuration:y}=m;this.calculatedDuration=y,this.resolvedDuration=y+o,this.totalDuration=this.resolvedDuration*(r+1)-o,this.generator=m}updateTime(e){const a=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=a}tick(e,a=!1){const{generator:r,totalDuration:o,mixKeyframes:l,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return r.next(0);const{delay:m=0,keyframes:y,repeat:v,repeatType:x,repeatDelay:w,type:j,onUpdate:E,finalKeyframe:T}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),a?this.currentTime=e:this.updateTime(e);const k=this.currentTime-m*(this.playbackSpeed>=0?1:-1),C=this.playbackSpeed>=0?k<0:k>o;this.currentTime=Math.max(k,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let N=this.currentTime,z=r;if(v){const q=Math.min(this.currentTime,o)/h;let H=Math.floor(q),X=q%1;!X&&q>=1&&(X=1),X===1&&H--,H=Math.min(H,v+1),!!(H%2)&&(x==="reverse"?(X=1-X,w&&(X-=w/h)):x==="mirror"&&(z=d)),N=oa(0,1,X)*h}let J;C?(this.delayState.value=y[0],J=this.delayState):J=z.next(N),l&&!C&&(J.value=l(J.value));let{done:Q}=J;!C&&p!==null&&(Q=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const D=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&Q);return D&&j!==df&&(J.value=Kc(y,this.options,T,this.speed)),E&&E(J.value),D&&this.finish(),J}then(e,a){return this.finished.then(e,a)}get duration(){return Mn(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Mn(e)}get time(){return Mn(this.currentTime)}set time(e){e=vn(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const a=this.generator.next(e).value;return cw(r=>this.generator.next(r).value,e,a)}get speed(){return this.playbackSpeed}set speed(e){const a=this.playbackSpeed!==e;a&&this.driver&&this.updateTime(Yt.now()),this.playbackSpeed=e,a&&this.driver&&(this.time=Mn(this.currentTime))}play(){var o,l;if(this.isStopped)return;const{driver:e=jT,startTime:a}=this.options;this.driver||(this.driver=e(d=>this.tick(d))),(l=(o=this.options).onPlay)==null||l.call(o);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=a??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Yt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,a;this.notifyFinished(),this.teardown(),this.state="finished",(a=(e=this.options).onComplete)==null||a.call(e)}cancel(){var e,a;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(a=(e=this.options).onCancel)==null||a.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var a;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(a=this.driver)==null||a.stop(),e.observe(this)}}function $T(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const Gi=t=>t*180/Math.PI,hf=t=>{const e=Gi(Math.atan2(t[1],t[0]));return ff(e)},HT={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:hf,rotateZ:hf,skewX:t=>Gi(Math.atan(t[1])),skewY:t=>Gi(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},ff=t=>(t=t%360,t<0&&(t+=360),t),wv=hf,Sv=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),jv=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),IT={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Sv,scaleY:jv,scale:t=>(Sv(t)+jv(t))/2,rotateX:t=>ff(Gi(Math.atan2(t[6],t[5]))),rotateY:t=>ff(Gi(Math.atan2(-t[2],t[0]))),rotateZ:wv,rotate:wv,skewX:t=>Gi(Math.atan(t[4])),skewY:t=>Gi(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function pf(t){return t.includes("scale")?1:0}function mf(t,e){if(!t||t==="none")return pf(e);const a=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,o;if(a)r=IT,o=a;else{const h=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=HT,o=h}if(!o)return pf(e);const l=r[e],d=o[1].split(",").map(FT);return typeof l=="function"?l(d):d[l]}const qT=(t,e)=>{const{transform:a="none"}=getComputedStyle(t);return mf(a,e)};function FT(t){return parseFloat(t.trim())}const ts=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ns=new Set([...ts,"pathRotation"]),_v=t=>t===es||t===ce,GT=new Set(["x","y","z"]),KT=ts.filter(t=>!GT.has(t));function YT(t){const e=[];return KT.forEach(a=>{const r=t.getValue(a);r!==void 0&&(e.push([a,r.get()]),r.set(a.startsWith("scale")?1:0))}),e}const hi={width:({x:t},{paddingLeft:e="0",paddingRight:a="0",boxSizing:r})=>{const o=t.max-t.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(a)},height:({y:t},{paddingTop:e="0",paddingBottom:a="0",boxSizing:r})=>{const o=t.max-t.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(a)},top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>mf(e,"x"),y:(t,{transform:e})=>mf(e,"y")};hi.translateX=hi.x;hi.translateY=hi.y;const Ki=new Set;let gf=!1,yf=!1,vf=!1;function dw(){if(yf){const t=Array.from(Ki).filter(r=>r.needsMeasurement),e=new Set(t.map(r=>r.element)),a=new Map;e.forEach(r=>{const o=YT(r);o.length&&(a.set(r,o),r.render())}),t.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=a.get(r);o&&o.forEach(([l,d])=>{var h;(h=r.getValue(l))==null||h.set(d)})}),t.forEach(r=>r.measureEndState()),t.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}yf=!1,gf=!1,Ki.forEach(t=>t.complete(vf)),Ki.clear()}function hw(){Ki.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(yf=!0)})}function WT(){vf=!0,hw(),dw(),vf=!1}class sp{constructor(e,a,r,o,l,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=a,this.name=r,this.motionValue=o,this.element=l,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Ki.add(this),gf||(gf=!0,et.read(hw),et.resolveKeyframes(dw))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:a,element:r,motionValue:o}=this;if(e[0]===null){const l=o==null?void 0:o.get(),d=e[e.length-1];if(l!==void 0)e[0]=l;else if(r&&a){const h=r.readValue(a,d);h!=null&&(e[0]=h)}e[0]===void 0&&(e[0]=d),o&&l===void 0&&o.set(e[0])}$T(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Ki.delete(this)}cancel(){this.state==="scheduled"&&(Ki.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const XT=t=>t.startsWith("--");function fw(t,e,a){XT(e)?t.style.setProperty(e,a):t.style[e]=a}const JT={};function pw(t,e){const a=$x(t);return()=>JT[e]??a()}const QT=pw(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),mw=pw(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ao=([t,e,a,r])=>`cubic-bezier(${t}, ${e}, ${a}, ${r})`,kv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ao([0,.65,.55,1]),circOut:ao([.55,0,1,.45]),backIn:ao([.31,.01,.66,-.59]),backOut:ao([.33,1.53,.69,.99])};function gw(t,e){if(t)return typeof t=="function"?mw()?lw(t,e):"ease-out":Qx(t)?ao(t):Array.isArray(t)?t.map(a=>gw(a,e)||kv.easeOut):kv[t]}function ZT(t,e,a,{delay:r=0,duration:o=300,repeat:l=0,repeatType:d="loop",ease:h="easeOut",times:p}={},m=void 0){const y={[e]:a};p&&(y.offset=p);const v=gw(h,o);Array.isArray(v)&&(y.easing=v);const x={delay:r,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:l+1,direction:d==="reverse"?"alternate":"normal"};return m&&(x.pseudoElement=m),t.animate(y,x)}function yw(t){return typeof t=="function"&&"applyToOptions"in t}function eC({type:t,...e}){return yw(t)&&mw()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class vw extends rp{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:a,name:r,keyframes:o,pseudoElement:l,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=e;this.isPseudoElement=!!l,this.allowFlatten=d,this.options=e,Xf(typeof e.type!="string");const m=eC(e);this.animation=ZT(a,r,o,m,l),m.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!l){const y=Kc(o,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(y),fw(a,r,y),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,a;(a=(e=this.animation).finish)==null||a.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var a,r,o;const e=(a=this.options)==null?void 0:a.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((o=(r=this.animation).commitStyles)==null||o.call(r))}get duration(){var a,r;const e=((r=(a=this.animation.effect)==null?void 0:a.getComputedTiming)==null?void 0:r.call(a).duration)||0;return Mn(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Mn(e)}get time(){return Mn(Number(this.animation.currentTime)||0)}set time(e){const a=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=vn(e),a&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:a,rangeEnd:r,observe:o}){var l;return this.allowFlatten&&((l=this.animation.effect)==null||l.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&QT()?(this.animation.timeline=e,a&&(this.animation.rangeStart=a),r&&(this.animation.rangeEnd=r),zn):o(this)}}const bw={anticipate:Yx,backInOut:Kx,circInOut:Xx};function tC(t){return t in bw}function nC(t){typeof t.ease=="string"&&tC(t.ease)&&(t.ease=bw[t.ease])}const Nh=10;class aC extends vw{constructor(e){nC(e),uw(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:a,onUpdate:r,onComplete:o,element:l,...d}=this.options;if(!a)return;if(e!==void 0){a.set(e);return}const h=new Oc({...d,autoplay:!1}),p=Math.max(Nh,Yt.now()-this.startTime),m=oa(0,Nh,p-Nh),y=h.sample(p).value,{name:v}=this.options;l&&v&&fw(l,v,y),a.setWithVelocity(h.sample(Math.max(0,p-m)).value,y,m),h.stop()}}const Ev=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Yn.test(t)||t==="0")&&!t.startsWith("url("));function iC(t){const e=t[0];if(t.length===1)return!0;for(let a=0;a<t.length;a++)if(t[a]!==e)return!0}function rC(t,e,a,r){const o=t[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const l=t[t.length-1],d=Ev(o,e),h=Ev(l,e);return!d||!h?!1:iC(t)||(a==="spring"||yw(a))&&r}function bf(t){t.duration=0,t.type="keyframes"}const xw=new Set(["opacity","clipPath","filter","transform"]),sC=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function oC(t){for(let e=0;e<t.length;e++)if(typeof t[e]=="string"&&sC.test(t[e]))return!0;return!1}const lC=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),cC=$x(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function uC(t){var v;const{motionValue:e,name:a,repeatDelay:r,repeatType:o,damping:l,type:d,keyframes:h}=t;if(!(((v=e==null?void 0:e.owner)==null?void 0:v.current)instanceof HTMLElement))return!1;const{onUpdate:m,transformTemplate:y}=e.owner.getProps();return cC()&&a&&(xw.has(a)||lC.has(a)&&oC(h))&&(a!=="transform"||!y)&&!m&&!r&&o!=="mirror"&&l!==0&&d!=="inertia"}const dC=40;class hC extends rp{constructor({autoplay:e=!0,delay:a=0,type:r="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:d="loop",keyframes:h,name:p,motionValue:m,element:y,...v}){var j;super(),this.stop=()=>{var E,T;this._animation&&(this._animation.stop(),(E=this.stopTimeline)==null||E.call(this)),(T=this.keyframeResolver)==null||T.cancel()},this.createdAt=Yt.now();const x={autoplay:e,delay:a,type:r,repeat:o,repeatDelay:l,repeatType:d,name:p,motionValue:m,element:y,...v},w=(y==null?void 0:y.KeyframeResolver)||sp;this.keyframeResolver=new w(h,(E,T,k)=>this.onKeyframesResolved(E,T,x,!k),p,m,y),(j=this.keyframeResolver)==null||j.scheduleResolve()}onKeyframesResolved(e,a,r,o){var k,C;this.keyframeResolver=void 0;const{name:l,type:d,velocity:h,delay:p,isHandoff:m,onUpdate:y}=r;this.resolvedAt=Yt.now();let v=!0;rC(e,l,d,h)||(v=!1,(pi.instantAnimations||!p)&&(y==null||y(Kc(e,r,a))),e[0]=e[e.length-1],bf(r),r.repeat=0);const w={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>dC?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:a,...r,keyframes:e},j=v&&!m&&uC(w),E=(C=(k=w.motionValue)==null?void 0:k.owner)==null?void 0:C.current;let T;if(j)try{T=new aC({...w,element:E})}catch{T=new Oc(w)}else T=new Oc(w);T.finished.then(()=>{this.notifyFinished()}).catch(zn),this.pendingTimeline&&(this.stopTimeline=T.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=T}get finished(){return this._animation?this.animation.finished:this._finished}then(e,a){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),WT()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function ww(t,e,a,r=0,o=1){const l=Array.from(t).sort((m,y)=>m.sortNodePosition(y)).indexOf(e),d=t.size,h=(d-1)*r;return typeof a=="function"?a(l,d):o===1?l*r:h-l*r}const Tv=30,fC=t=>!isNaN(parseFloat(t));class pC{constructor(e,a={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var l;const o=Yt.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((l=this.events.change)==null||l.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=a.owner}setCurrent(e){this.current=e,this.updatedAt=Yt.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=fC(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,a){this.events[e]||(this.events[e]=new Jf);const r=this.events[e].add(a);return e==="change"?()=>{r(),et.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,a){this.passiveEffect=e,this.stopPassiveEffect=a}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,a,r){this.set(a),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,a=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,a&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Yt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Tv)return 0;const a=Math.min(this.updatedAt-this.prevUpdatedAt,Tv);return Hx(parseFloat(this.current)-parseFloat(this.prevFrameValue),a)}start(e){return this.stop(),new Promise(a=>{this.hasAnimated=!0,this.animation=e(a),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,a;(e=this.dependents)==null||e.clear(),(a=this.events.destroy)==null||a.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Wr(t,e){return new pC(t,e)}function Sw(t,e){if(t!=null&&t.inherit&&e){const{inherit:a,...r}=t;return{...e,...r}}return t}function op(t,e){const a=(t==null?void 0:t[e])??(t==null?void 0:t.default)??t;return a!==t?Sw(a,t):a}const mC={type:"spring",stiffness:500,damping:25,restSpeed:10},gC=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),yC={type:"keyframes",duration:.8},vC={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},bC=(t,{keyframes:e})=>e.length>2?yC:ns.has(t)?t.startsWith("scale")?gC(e[1]):mC:vC,xC=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function wC(t){for(const e in t)if(!xC.has(e))return!0;return!1}const lp=(t,e,a,r={},o,l)=>d=>{const h=op(r,t)||{},p=h.delay||r.delay||0;let{elapsed:m=0}=r;m=m-vn(p);const y={keyframes:Array.isArray(a)?a:[null,a],ease:"easeOut",velocity:e.getVelocity(),...h,delay:-m,onUpdate:x=>{e.set(x),h.onUpdate&&h.onUpdate(x)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:t,motionValue:e,element:l?void 0:o};wC(h)||Object.assign(y,bC(t,y)),y.duration&&(y.duration=vn(y.duration)),y.repeatDelay&&(y.repeatDelay=vn(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let v=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(bf(y),y.delay===0&&(v=!0)),(pi.instantAnimations||pi.skipAnimations||o!=null&&o.shouldSkipAnimations||h.skipAnimations)&&(v=!0,bf(y),y.delay=0),y.allowFlatten=!h.type&&!h.ease,v&&!l&&e.get()!==void 0){const x=Kc(y.keyframes,h);if(x!==void 0){et.update(()=>{y.onUpdate(x),y.onComplete()});return}}return h.isSync?new Oc(y):new hC(y)},SC=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function jC(t){const e=SC.exec(t);if(!e)return[,];const[,a,r,o]=e;return[`--${a??r}`,o]}function jw(t,e,a=1){const[r,o]=jC(t);if(!r)return;const l=window.getComputedStyle(e).getPropertyValue(r);if(l){const d=l.trim();return Bx(d)?parseFloat(d):d}return ep(o)?jw(o,e,a+1):o}function Cv(t){const e=[{},{}];return t==null||t.values.forEach((a,r)=>{e[0][r]=a.get(),e[1][r]=a.getVelocity()}),e}function cp(t,e,a,r){if(typeof e=="function"){const[o,l]=Cv(r);e=e(a!==void 0?a:t.custom,o,l)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[o,l]=Cv(r);e=e(a!==void 0?a:t.custom,o,l)}return e}function Yi(t,e,a){const r=t.getProps();return cp(r,e,a!==void 0?a:r.custom,t)}const _w=new Set(["width","height","top","left","right","bottom",...ts]),xf=t=>Array.isArray(t);function _C(t,e,a){t.hasValue(e)?t.getValue(e).set(a):t.addValue(e,Wr(a))}function kC(t){return xf(t)?t[t.length-1]||0:t}function EC(t,e){const a=Yi(t,e);let{transitionEnd:r={},transition:o={},...l}=a||{};l={...l,...r};for(const d in l){const h=kC(l[d]);_C(t,d,h)}}const Vt=t=>!!(t&&t.getVelocity);function TC(t){return!!(Vt(t)&&t.add)}function wf(t,e){const a=t.getValue("willChange");if(TC(a))return a.add(e);if(!a&&pi.WillChange){const r=new pi.WillChange("auto");t.addValue("willChange",r),r.add(e)}}function up(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const CC="framerAppearId",kw="data-"+up(CC);function Ew(t){return t.props[kw]}function AC({protectedKeys:t,needsAnimating:e},a){const r=t.hasOwnProperty(a)&&e[a]!==!0;return e[a]=!1,r}function Tw(t,e,{delay:a=0,transitionOverride:r,type:o}={}){let{transition:l,transitionEnd:d,...h}=e;const p=t.getDefaultTransition();l=l?Sw(l,p):p;const m=l==null?void 0:l.reduceMotion,y=l==null?void 0:l.skipAnimations;r&&(l=r);const v=[],x=o&&t.animationState&&t.animationState.getState()[o],w=l==null?void 0:l.path;w&&w.animateVisualElement(t,h,l,a,v);for(const j in h){const E=t.getValue(j,t.latestValues[j]??null),T=h[j];if(T===void 0||x&&AC(x,j))continue;const k={delay:a,...op(l||{},j)};y&&(k.skipAnimations=!0);const C=E.get();if(C!==void 0&&!E.isAnimating()&&!Array.isArray(T)&&T===C&&!k.velocity){et.update(()=>E.set(T));continue}let N=!1;if(window.MotionHandoffAnimation){const Q=Ew(t);if(Q){const D=window.MotionHandoffAnimation(Q,j,et);D!==null&&(k.startTime=D,N=!0)}}wf(t,j);const z=m??t.shouldReduceMotion;E.start(lp(j,E,T,z&&_w.has(j)?{type:!1}:k,t,N));const J=E.animation;J&&v.push(J)}if(d){const j=()=>et.update(()=>{d&&EC(t,d)});v.length?Promise.all(v).then(j):j()}return v}function Sf(t,e,a={}){var p;const r=Yi(t,e,a.type==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);let{transition:o=t.getDefaultTransition()||{}}=r||{};a.transitionOverride&&(o=a.transitionOverride);const l=r?()=>Promise.all(Tw(t,r,a)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(m=0)=>{const{delayChildren:y=0,staggerChildren:v,staggerDirection:x}=o;return NC(t,e,m,y,v,x,a)}:()=>Promise.resolve(),{when:h}=o;if(h){const[m,y]=h==="beforeChildren"?[l,d]:[d,l];return m().then(()=>y())}else return Promise.all([l(),d(a.delay)])}function NC(t,e,a=0,r=0,o=0,l=1,d){const h=[];for(const p of t.variantChildren)p.notify("AnimationStart",e),h.push(Sf(p,e,{...d,delay:a+(typeof r=="function"?0:r)+ww(t.variantChildren,p,r,o,l)}).then(()=>p.notify("AnimationComplete",e)));return Promise.all(h)}function RC(t,e,a={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(l=>Sf(t,l,a));r=Promise.all(o)}else if(typeof e=="string")r=Sf(t,e,a);else{const o=typeof e=="function"?Yi(t,e,a.custom):e;r=Promise.all(Tw(t,o,a))}return r.then(()=>{t.notify("AnimationComplete",e)})}const OC={test:t=>t==="auto",parse:t=>t},Cw=t=>e=>e.test(t),Aw=[es,ce,sa,Na,iT,aT,OC],Av=t=>Aw.find(Cw(t));function DC(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Vx(t):!0}const LC=new Set(["brightness","contrast","saturate","opacity"]);function MC(t){const[e,a]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=a.match(tp)||[];if(!r)return t;const o=a.replace(r,"");let l=LC.has(e)?1:0;return r!==a&&(l*=100),e+"("+l+o+")"}const zC=/\b([a-z-]*)\(.*?\)/gu,jf={...Yn,getAnimatableNone:t=>{const e=t.match(zC);return e?e.map(MC).join(" "):t}},_f={...Yn,getAnimatableNone:t=>{const e=Yn.parse(t);return Yn.createTransformer(t)(e.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},Nv={...es,transform:Math.round},UC={rotate:Na,pathRotation:Na,rotateX:Na,rotateY:Na,rotateZ:Na,scale:tc,scaleX:tc,scaleY:tc,scaleZ:tc,skew:Na,skewX:Na,skewY:Na,distance:ce,translateX:ce,translateY:ce,translateZ:ce,x:ce,y:ce,z:ce,perspective:ce,transformPerspective:ce,opacity:So,originX:gv,originY:gv,originZ:ce},Dc={borderWidth:ce,borderTopWidth:ce,borderRightWidth:ce,borderBottomWidth:ce,borderLeftWidth:ce,borderRadius:ce,borderTopLeftRadius:ce,borderTopRightRadius:ce,borderBottomRightRadius:ce,borderBottomLeftRadius:ce,width:ce,maxWidth:ce,height:ce,maxHeight:ce,top:ce,right:ce,bottom:ce,left:ce,inset:ce,insetBlock:ce,insetBlockStart:ce,insetBlockEnd:ce,insetInline:ce,insetInlineStart:ce,insetInlineEnd:ce,padding:ce,paddingTop:ce,paddingRight:ce,paddingBottom:ce,paddingLeft:ce,paddingBlock:ce,paddingBlockStart:ce,paddingBlockEnd:ce,paddingInline:ce,paddingInlineStart:ce,paddingInlineEnd:ce,margin:ce,marginTop:ce,marginRight:ce,marginBottom:ce,marginLeft:ce,marginBlock:ce,marginBlockStart:ce,marginBlockEnd:ce,marginInline:ce,marginInlineStart:ce,marginInlineEnd:ce,fontSize:ce,backgroundPositionX:ce,backgroundPositionY:ce,...UC,zIndex:Nv,fillOpacity:So,strokeOpacity:So,numOctaves:Nv},BC={...Dc,color:Et,backgroundColor:Et,outlineColor:Et,fill:Et,stroke:Et,borderColor:Et,borderTopColor:Et,borderRightColor:Et,borderBottomColor:Et,borderLeftColor:Et,filter:jf,WebkitFilter:jf,mask:_f,WebkitMask:_f},Nw=t=>BC[t],PC=new Set([jf,_f]);function Rw(t,e){let a=Nw(t);return PC.has(a)||(a=Yn),a.getAnimatableNone?a.getAnimatableNone(e):void 0}const VC=new Set(["auto","none","0"]);function $C(t,e,a){let r=0,o;for(;r<t.length&&!o;){const l=t[r];typeof l=="string"&&!VC.has(l)&&Yr(l).values.length&&(o=t[r]),r++}if(o&&a)for(const l of e)t[l]=Rw(a,o)}class HC extends sp{constructor(e,a,r,o,l){super(e,a,r,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:a,name:r}=this;if(!a||!a.current)return;super.readKeyframes();for(let y=0;y<e.length;y++){let v=e[y];if(typeof v=="string"&&(v=v.trim(),ep(v))){const x=jw(v,a.current);x!==void 0&&(e[y]=x),y===e.length-1&&(this.finalKeyframe=v)}}if(this.resolveNoneKeyframes(),!_w.has(r)||e.length!==2)return;const[o,l]=e,d=Av(o),h=Av(l),p=mv(o),m=mv(l);if(p!==m&&hi[r]){this.needsMeasurement=!0;return}if(d!==h)if(_v(d)&&_v(h))for(let y=0;y<e.length;y++){const v=e[y];typeof v=="string"&&(e[y]=parseFloat(v))}else hi[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:a}=this,r=[];for(let o=0;o<e.length;o++)(e[o]===null||DC(e[o]))&&r.push(o);r.length&&$C(e,r,a)}measureInitialState(){const{element:e,unresolvedKeyframes:a,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=hi[r](e.measureViewportBox(),window.getComputedStyle(e.current)),a[0]=this.measuredOrigin;const o=a[a.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var h;const{element:e,name:a,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const o=e.getValue(a);o&&o.jump(this.measuredOrigin,!1);const l=r.length-1,d=r[l];r[l]=hi[a](e.measureViewportBox(),window.getComputedStyle(e.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,m])=>{e.getValue(p).set(m)}),this.resolveNoneKeyframes()}}function Ow(t,e,a){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let r=document;const o=(a==null?void 0:a[t])??r.querySelectorAll(t);return o?Array.from(o):[]}return Array.from(t).filter(r=>r!=null)}const kf=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function uc(t){return Px(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:dp}=Zx(queueMicrotask,!1),qn={x:!1,y:!1};function Dw(){return qn.x||qn.y}function IC(t){return t==="x"||t==="y"?qn[t]?null:(qn[t]=!0,()=>{qn[t]=!1}):qn.x||qn.y?null:(qn.x=qn.y=!0,()=>{qn.x=qn.y=!1})}function Lw(t,e){const a=Ow(t),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[a,o,()=>r.abort()]}function qC(t){return!(t.pointerType==="touch"||Dw())}function FC(t,e,a={}){const[r,o,l]=Lw(t,a);return r.forEach(d=>{let h=!1,p=!1,m;const y=()=>{d.removeEventListener("pointerleave",j)},v=T=>{m&&(m(T),m=void 0),y()},x=T=>{h=!1,window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",x),p&&(p=!1,v(T))},w=()=>{h=!0,window.addEventListener("pointerup",x,o),window.addEventListener("pointercancel",x,o)},j=T=>{if(T.pointerType!=="touch"){if(h){p=!0;return}v(T)}},E=T=>{if(!qC(T))return;p=!1;const k=e(d,T);typeof k=="function"&&(m=k,d.addEventListener("pointerleave",j,o))};d.addEventListener("pointerenter",E,o),d.addEventListener("pointerdown",w,o)}),l}const Mw=(t,e)=>e?t===e?!0:Mw(t,e.parentElement):!1,hp=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,GC=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function KC(t){return GC.has(t.tagName)||t.isContentEditable===!0}const YC=new Set(["INPUT","SELECT","TEXTAREA"]);function WC(t){return YC.has(t.tagName)||t.isContentEditable===!0}const dc=new WeakSet;function Rv(t){return e=>{e.key==="Enter"&&t(e)}}function Rh(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const XC=(t,e)=>{const a=t.currentTarget;if(!a)return;const r=Rv(()=>{if(dc.has(a))return;Rh(a,"down");const o=Rv(()=>{Rh(a,"up")}),l=()=>Rh(a,"cancel");a.addEventListener("keyup",o,e),a.addEventListener("blur",l,e)});a.addEventListener("keydown",r,e),a.addEventListener("blur",()=>a.removeEventListener("keydown",r),e)};function Ov(t){return hp(t)&&!Dw()}const Dv=new WeakSet;function JC(t,e,a={}){const[r,o,l]=Lw(t,a),d=h=>{const p=h.currentTarget;if(!Ov(h)||Dv.has(h))return;dc.add(p),a.stopPropagation&&Dv.add(h);const m=e(p,h),y=(w,j)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",x),dc.has(p)&&dc.delete(p),Ov(w)&&typeof m=="function"&&m(w,{success:j})},v=w=>{y(w,p===window||p===document||a.useGlobalTarget||Mw(p,w.target))},x=w=>{y(w,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",x,o)};return r.forEach(h=>{(a.useGlobalTarget?window:h).addEventListener("pointerdown",d,o),uc(h)&&(h.addEventListener("focus",m=>XC(m,o)),!KC(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),l}function fp(t){return Px(t)&&"ownerSVGElement"in t}const hc=new WeakMap;let li;const zw=(t,e,a)=>(r,o)=>o&&o[0]?o[0][t+"Size"]:fp(r)&&"getBBox"in r?r.getBBox()[e]:r[a],QC=zw("inline","width","offsetWidth"),ZC=zw("block","height","offsetHeight");function eA({target:t,borderBoxSize:e}){var a;(a=hc.get(t))==null||a.forEach(r=>{r(t,{get width(){return QC(t,e)},get height(){return ZC(t,e)}})})}function tA(t){t.forEach(eA)}function nA(){typeof ResizeObserver>"u"||(li=new ResizeObserver(tA))}function aA(t,e){li||nA();const a=Ow(t);return a.forEach(r=>{let o=hc.get(r);o||(o=new Set,hc.set(r,o)),o.add(e),li==null||li.observe(r)}),()=>{a.forEach(r=>{const o=hc.get(r);o==null||o.delete(e),o!=null&&o.size||li==null||li.unobserve(r)})}}const fc=new Set;let Fr;function iA(){Fr=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};fc.forEach(e=>e(t))},window.addEventListener("resize",Fr)}function rA(t){return fc.add(t),Fr||iA(),()=>{fc.delete(t),!fc.size&&typeof Fr=="function"&&(window.removeEventListener("resize",Fr),Fr=void 0)}}function Lv(t,e){return typeof t=="function"?rA(t):aA(t,e)}function sA(t){return fp(t)&&t.tagName==="svg"}const oA=[...Aw,Et,Yn],lA=t=>oA.find(Cw(t)),Mv=()=>({translate:0,scale:1,origin:0,originPoint:0}),Gr=()=>({x:Mv(),y:Mv()}),zv=()=>({min:0,max:0}),At=()=>({x:zv(),y:zv()}),cA=new WeakMap;function Yc(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function jo(t){return typeof t=="string"||Array.isArray(t)}const pp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],mp=["initial",...pp];function Wc(t){return Yc(t.animate)||mp.some(e=>jo(t[e]))}function Uw(t){return!!(Wc(t)||t.variants)}function uA(t,e,a){for(const r in e){const o=e[r],l=a[r];if(Vt(o))t.addValue(r,o);else if(Vt(l))t.addValue(r,Wr(o,{owner:t}));else if(l!==o)if(t.hasValue(r)){const d=t.getValue(r);d.liveStyle===!0?d.jump(o):d.hasAnimated||d.set(o)}else{const d=t.getStaticValue(r);t.addValue(r,Wr(d!==void 0?d:o,{owner:t}))}}for(const r in a)e[r]===void 0&&t.removeValue(r);return e}const Ef={current:null},Bw={current:!1},dA=typeof window<"u";function hA(){if(Bw.current=!0,!!dA)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Ef.current=t.matches;t.addEventListener("change",e),e()}else Ef.current=!1}const Uv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Lc={};function Pw(t){Lc=t}function fA(){return Lc}class pA{scrapeMotionValuesFromProps(e,a,r){return{}}constructor({parent:e,props:a,presenceContext:r,reducedMotionConfig:o,skipAnimations:l,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=sp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=Yt.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,et.render(this.render,!1,!0))};const{latestValues:m,renderState:y}=h;this.latestValues=m,this.baseTarget={...m},this.initialValues=a.initial?{...m}:{},this.renderState=y,this.parent=e,this.props=a,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.skipAnimationsConfig=l,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=Wc(a),this.isVariantNode=Uw(a),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...x}=this.scrapeMotionValuesFromProps(a,{},this);for(const w in x){const j=x[w];m[w]!==void 0&&Vt(j)&&j.set(m[w])}}mount(e){var a,r;if(this.hasBeenMounted)for(const o in this.initialValues)(a=this.values.get(o))==null||a.jump(this.initialValues[o]),this.latestValues[o]=this.initialValues[o];this.current=e,cA.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,l)=>this.bindToMotionValue(l,o)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Bw.current||hA(),this.shouldReduceMotion=Ef.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),mi(this.notifyUpdate),mi(this.render),this.valueSubscriptions.forEach(a=>a()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const a in this.events)this.events[a].clear();for(const a in this.features){const r=this.features[a];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,a){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),a.accelerate&&xw.has(e)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:m,duration:y}=a.accelerate,v=new vw({element:this.current,name:e,keyframes:h,times:p,ease:m,duration:vn(y)}),x=d(v);this.valueSubscriptions.set(e,()=>{x(),v.cancel()});return}const r=ns.has(e);r&&this.onBindTransform&&this.onBindTransform();const o=a.on("change",d=>{this.latestValues[e]=d,this.props.onUpdate&&et.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let l;typeof window<"u"&&window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this,e,a)),this.valueSubscriptions.set(e,()=>{o(),l&&l()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Lc){const a=Lc[e];if(!a)continue;const{isEnabled:r,Feature:o}=a;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const l=this.features[e];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):At()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,a){this.latestValues[e]=a}update(e,a){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=a;for(let r=0;r<Uv.length;r++){const o=Uv[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,d=e[l];d&&(this.propEventSubscriptions[o]=this.on(o,d))}this.prevMotionValues=uA(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const a=this.getClosestVariantNode();if(a)return a.variantChildren&&a.variantChildren.add(e),()=>a.variantChildren.delete(e)}addValue(e,a){const r=this.values.get(e);a!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,a),this.values.set(e,a),this.latestValues[e]=a.get())}removeValue(e){this.values.delete(e);const a=this.valueSubscriptions.get(e);a&&(a(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,a){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&a!==void 0&&(r=Wr(a===null?void 0:a,{owner:this}),this.addValue(e,r)),r}readValue(e,a){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(Bx(r)||Vx(r))?r=parseFloat(r):!lA(r)&&Yn.test(a)&&(r=Rw(e,a)),this.setBaseTarget(e,Vt(r)?r.get():r)),Vt(r)?r.get():r}setBaseTarget(e,a){this.baseTarget[e]=a}getBaseTarget(e){var l;const{initial:a}=this.props;let r;if(typeof a=="string"||typeof a=="object"){const d=cp(this.props,a,(l=this.presenceContext)==null?void 0:l.custom);d&&(r=d[e])}if(a&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!Vt(o)?o:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,a){return this.events[e]||(this.events[e]=new Jf),this.events[e].add(a)}notify(e,...a){this.events[e]&&this.events[e].notify(...a)}scheduleRenderMicrotask(){dp.render(this.render)}}class Vw extends pA{constructor(){super(...arguments),this.KeyframeResolver=HC}sortInstanceNodePosition(e,a){return e.compareDocumentPosition(a)&2?1:-1}getBaseTargetFromProps(e,a){const r=e.style;return r?r[a]:void 0}removeValueFromRenderState(e,{vars:a,style:r}){delete a[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Vt(e)&&(this.childSubscription=e.on("change",a=>{this.current&&(this.current.textContent=`${a}`)}))}}class yi{constructor(e){this.isMounted=!1,this.node=e}update(){}}function $w({top:t,left:e,right:a,bottom:r}){return{x:{min:e,max:a},y:{min:t,max:r}}}function mA({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function gA(t,e){if(!e)return t;const a=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:a.y,left:a.x,bottom:r.y,right:r.x}}function Oh(t){return t===void 0||t===1}function Tf({scale:t,scaleX:e,scaleY:a}){return!Oh(t)||!Oh(e)||!Oh(a)}function Ii(t){return Tf(t)||Hw(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function Hw(t){return Bv(t.x)||Bv(t.y)}function Bv(t){return t&&t!=="0%"}function Mc(t,e,a){const r=t-a,o=e*r;return a+o}function Pv(t,e,a,r,o){return o!==void 0&&(t=Mc(t,o,r)),Mc(t,a,r)+e}function Cf(t,e=0,a=1,r,o){t.min=Pv(t.min,e,a,r,o),t.max=Pv(t.max,e,a,r,o)}function Iw(t,{x:e,y:a}){Cf(t.x,e.translate,e.scale,e.originPoint),Cf(t.y,a.translate,a.scale,a.originPoint)}const Vv=.999999999999,$v=1.0000000000001;function yA(t,e,a,r=!1){var h;const o=a.length;if(!o)return;e.x=e.y=1;let l,d;for(let p=0;p<o;p++){l=a[p],d=l.projectionDelta;const{visualElement:m}=l.options;m&&m.props.style&&m.props.style.display==="contents"||(r&&l.options.layoutScroll&&l.scroll&&l!==l.root&&(ra(t.x,-l.scroll.offset.x),ra(t.y,-l.scroll.offset.y)),d&&(e.x*=d.x.scale,e.y*=d.y.scale,Iw(t,d)),r&&Ii(l.latestValues)&&pc(t,l.latestValues,(h=l.layout)==null?void 0:h.layoutBox))}e.x<$v&&e.x>Vv&&(e.x=1),e.y<$v&&e.y>Vv&&(e.y=1)}function ra(t,e){t.min+=e,t.max+=e}function Hv(t,e,a,r,o=.5){const l=Ze(t.min,t.max,o);Cf(t,e,a,l,r)}function Iv(t,e){return typeof t=="string"?parseFloat(t)/100*(e.max-e.min):t}function pc(t,e,a){const r=a??t;Hv(t.x,Iv(e.x,r.x),e.scaleX,e.scale,e.originX),Hv(t.y,Iv(e.y,r.y),e.scaleY,e.scale,e.originY)}function qw(t,e){return $w(gA(t.getBoundingClientRect(),e))}function vA(t,e,a){const r=qw(t,a),{scroll:o}=e;return o&&(ra(r.x,o.offset.x),ra(r.y,o.offset.y)),r}const bA={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},xA=ts.length;function wA(t,e,a){let r="",o=!0;for(let d=0;d<xA;d++){const h=ts[d],p=t[h];if(p===void 0)continue;let m=!0;if(typeof p=="number")m=p===(h.startsWith("scale")?1:0);else{const y=parseFloat(p);m=h.startsWith("scale")?y===1:y===0}if(!m||a){const y=kf(p,Dc[h]);if(!m){o=!1;const v=bA[h]||h;r+=`${v}(${y}) `}a&&(e[h]=y)}}const l=t.pathRotation;return l&&(o=!1,r+=`rotate(${kf(l,Dc.pathRotation)}) `),r=r.trim(),a?r=a(e,o?"":r):o&&(r="none"),r}function gp(t,e,a){const{style:r,vars:o,transformOrigin:l}=t;let d=!1,h=!1;for(const p in e){const m=e[p];if(ns.has(p)){d=!0;continue}else if(tw(p)){o[p]=m;continue}else{const y=kf(m,Dc[p]);p.startsWith("origin")?(h=!0,l[p]=y):r[p]=y}}if(e.transform||(d||a?r.transform=wA(e,t.transform,a):r.transform&&(r.transform="none")),h){const{originX:p="50%",originY:m="50%",originZ:y=0}=l;r.transformOrigin=`${p} ${m} ${y}`}}function Fw(t,{style:e,vars:a},r,o){const l=t.style;let d;for(d in e)l[d]=e[d];o==null||o.applyProjectionStyles(l,r);for(d in a)l.setProperty(d,a[d])}function qv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Xs={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(ce.test(t))t=parseFloat(t);else return t;const a=qv(t,e.target.x),r=qv(t,e.target.y);return`${a}% ${r}%`}},SA={correct:(t,{treeScale:e,projectionDelta:a})=>{const r=t,o=Yn.parse(t);if(o.length>5)return r;const l=Yn.createTransformer(t),d=typeof o[0]!="number"?1:0,h=a.x.scale*e.x,p=a.y.scale*e.y;o[0+d]/=h,o[1+d]/=p;const m=Ze(h,p,.5);return typeof o[2+d]=="number"&&(o[2+d]/=m),typeof o[3+d]=="number"&&(o[3+d]/=m),l(o)}},Af={borderRadius:{...Xs,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Xs,borderTopRightRadius:Xs,borderBottomLeftRadius:Xs,borderBottomRightRadius:Xs,boxShadow:SA};function Gw(t,{layout:e,layoutId:a}){return ns.has(t)||t.startsWith("origin")||(e||a!==void 0)&&(!!Af[t]||t==="opacity")}function yp(t,e,a){var d;const r=t.style,o=e==null?void 0:e.style,l={};if(!r)return l;for(const h in r)(Vt(r[h])||o&&Vt(o[h])||Gw(h,t)||((d=a==null?void 0:a.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(l[h]=r[h]);return l}function jA(t){return window.getComputedStyle(t)}class _A extends Vw{constructor(){super(...arguments),this.type="html",this.renderInstance=Fw}readValueFromInstance(e,a){var r;if(ns.has(a))return(r=this.projection)!=null&&r.isProjecting?pf(a):qT(e,a);{const o=jA(e),l=(tw(a)?o.getPropertyValue(a):o[a])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(e,{transformPagePoint:a}){return qw(e,a)}build(e,a,r){gp(e,a,r.transformTemplate)}scrapeMotionValuesFromProps(e,a,r){return yp(e,a,r)}}const kA={offset:"stroke-dashoffset",array:"stroke-dasharray"},EA={offset:"strokeDashoffset",array:"strokeDasharray"};function TA(t,e,a=1,r=0,o=!0){t.pathLength=1;const l=o?kA:EA;t[l.offset]=`${-r}`,t[l.array]=`${e} ${a}`}const CA=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Kw(t,{attrX:e,attrY:a,attrScale:r,pathLength:o,pathSpacing:l=1,pathOffset:d=0,...h},p,m,y){if(gp(t,h,m),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:v,style:x}=t;v.transform&&(x.transform=v.transform,delete v.transform),(x.transform||v.transformOrigin)&&(x.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),x.transform&&(x.transformBox=(y==null?void 0:y.transformBox)??"fill-box",delete v.transformBox);for(const w of CA)v[w]!==void 0&&(x[w]=v[w],delete v[w]);e!==void 0&&(v.x=e),a!==void 0&&(v.y=a),r!==void 0&&(v.scale=r),o!==void 0&&TA(v,o,l,d,!1)}const Yw=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Ww=t=>typeof t=="string"&&t.toLowerCase()==="svg";function AA(t,e,a,r){Fw(t,e,void 0,r);for(const o in e.attrs)t.setAttribute(Yw.has(o)?o:up(o),e.attrs[o])}function Xw(t,e,a){const r=yp(t,e,a);for(const o in t)if(Vt(t[o])||Vt(e[o])){const l=ts.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[l]=t[o]}return r}class NA extends Vw{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=At}getBaseTargetFromProps(e,a){return e[a]}readValueFromInstance(e,a){if(ns.has(a)){const r=Nw(a);return r&&r.default||0}return a=Yw.has(a)?a:up(a),e.getAttribute(a)}scrapeMotionValuesFromProps(e,a,r){return Xw(e,a,r)}build(e,a,r){Kw(e,a,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,a,r,o){AA(e,a,r,o)}mount(e){this.isSVGTag=Ww(e.tagName),super.mount(e)}}const RA=mp.length;function Jw(t){if(!t)return;if(!t.isControllingVariants){const a=t.parent?Jw(t.parent)||{}:{};return t.props.initial!==void 0&&(a.initial=t.props.initial),a}const e={};for(let a=0;a<RA;a++){const r=mp[a],o=t.props[r];(jo(o)||o===!1)&&(e[r]=o)}return e}function Qw(t,e){if(!Array.isArray(e))return!1;const a=e.length;if(a!==t.length)return!1;for(let r=0;r<a;r++)if(e[r]!==t[r])return!1;return!0}const OA=[...pp].reverse(),DA=pp.length;function LA(t){return e=>Promise.all(e.map(({animation:a,options:r})=>RC(t,a,r)))}function MA(t){let e=LA(t),a=Fv(),r=!0,o=!1;const l=m=>(y,v)=>{var w;const x=Yi(t,v,m==="exit"?(w=t.presenceContext)==null?void 0:w.custom:void 0);if(x){const{transition:j,transitionEnd:E,...T}=x;y={...y,...T,...E}}return y};function d(m){e=m(t)}function h(m){const{props:y}=t,v=Jw(t.parent)||{},x=[],w=new Set;let j={},E=1/0;for(let k=0;k<DA;k++){const C=OA[k],N=a[C],z=y[C]!==void 0?y[C]:v[C],J=jo(z),Q=C===m?N.isActive:null;Q===!1&&(E=k);let D=z===v[C]&&z!==y[C]&&J;if(D&&(r||o)&&t.manuallyAnimateOnMount&&(D=!1),N.protectedKeys={...j},!N.isActive&&Q===null||!z&&!N.prevProp||Yc(z)||typeof z=="boolean")continue;if(C==="exit"&&N.isActive&&Q!==!0){N.prevResolvedValues&&(j={...j,...N.prevResolvedValues});continue}const q=zA(N.prevProp,z);let H=q||C===m&&N.isActive&&!D&&J||k>E&&J,X=!1;const se=Array.isArray(z)?z:[z];let oe=se.reduce(l(C),{});Q===!1&&(oe={});const{prevResolvedValues:Se={}}=N,Ne={...Se,...oe},je=ie=>{H=!0,w.has(ie)&&(X=!0,w.delete(ie)),N.needsAnimating[ie]=!0;const ye=t.getValue(ie);ye&&(ye.liveStyle=!1)};for(const ie in Ne){const ye=oe[ie],be=Se[ie];if(j.hasOwnProperty(ie))continue;let R=!1;xf(ye)&&xf(be)?R=!Qw(ye,be)||q:R=ye!==be,R?ye!=null?je(ie):w.add(ie):ye!==void 0&&w.has(ie)?je(ie):N.protectedKeys[ie]=!0}N.prevProp=z,N.prevResolvedValues=oe,N.isActive&&(j={...j,...oe}),(r||o)&&t.blockInitialAnimation&&(H=!1);const M=D&&q;H&&(!M||X)&&x.push(...se.map(ie=>{const ye={type:C};if(typeof ie=="string"&&(r||o)&&!M&&t.manuallyAnimateOnMount&&t.parent){const{parent:be}=t,R=Yi(be,ie);if(be.enteringChildren&&R){const{delayChildren:G}=R.transition||{};ye.delay=ww(be.enteringChildren,t,G)}}return{animation:ie,options:ye}}))}if(w.size){const k={};if(typeof y.initial!="boolean"){const C=Yi(t,Array.isArray(y.initial)?y.initial[0]:y.initial);C&&C.transition&&(k.transition=C.transition)}w.forEach(C=>{const N=t.getBaseTarget(C),z=t.getValue(C);z&&(z.liveStyle=!0),k[C]=N??null}),x.push({animation:k})}let T=!!x.length;return r&&(y.initial===!1||y.initial===y.animate)&&!t.manuallyAnimateOnMount&&(T=!1),r=!1,o=!1,T?e(x):Promise.resolve()}function p(m,y){var x;if(a[m].isActive===y)return Promise.resolve();(x=t.variantChildren)==null||x.forEach(w=>{var j;return(j=w.animationState)==null?void 0:j.setActive(m,y)}),a[m].isActive=y;const v=h(m);for(const w in a)a[w].protectedKeys={};return v}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>a,reset:()=>{a=Fv(),o=!0}}}function zA(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Qw(e,t):!1}function $i(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Fv(){return{animate:$i(!0),whileInView:$i(),whileHover:$i(),whileTap:$i(),whileDrag:$i(),whileFocus:$i(),exit:$i()}}function Nf(t,e){t.min=e.min,t.max=e.max}function Hn(t,e){Nf(t.x,e.x),Nf(t.y,e.y)}function Gv(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const Zw=1e-4,UA=1-Zw,BA=1+Zw,e1=.01,PA=0-e1,VA=0+e1;function Wt(t){return t.max-t.min}function $A(t,e,a){return Math.abs(t-e)<=a}function Kv(t,e,a,r=.5){t.origin=r,t.originPoint=Ze(e.min,e.max,t.origin),t.scale=Wt(a)/Wt(e),t.translate=Ze(a.min,a.max,t.origin)-t.originPoint,(t.scale>=UA&&t.scale<=BA||isNaN(t.scale))&&(t.scale=1),(t.translate>=PA&&t.translate<=VA||isNaN(t.translate))&&(t.translate=0)}function co(t,e,a,r){Kv(t.x,e.x,a.x,r?r.originX:void 0),Kv(t.y,e.y,a.y,r?r.originY:void 0)}function Yv(t,e,a,r=0){const o=r?Ze(a.min,a.max,r):a.min;t.min=o+e.min,t.max=t.min+Wt(e)}function HA(t,e,a,r){Yv(t.x,e.x,a.x,r==null?void 0:r.x),Yv(t.y,e.y,a.y,r==null?void 0:r.y)}function Wv(t,e,a,r=0){const o=r?Ze(a.min,a.max,r):a.min;t.min=e.min-o,t.max=t.min+Wt(e)}function zc(t,e,a,r){Wv(t.x,e.x,a.x,r==null?void 0:r.x),Wv(t.y,e.y,a.y,r==null?void 0:r.y)}function Xv(t,e,a,r,o){return t-=e,t=Mc(t,1/a,r),o!==void 0&&(t=Mc(t,1/o,r)),t}function IA(t,e=0,a=1,r=.5,o,l=t,d=t){if(sa.test(e)&&(e=parseFloat(e),e=Ze(d.min,d.max,e/100)-d.min),typeof e!="number")return;let h=Ze(l.min,l.max,r);t===l&&(h-=e),t.min=Xv(t.min,e,a,h,o),t.max=Xv(t.max,e,a,h,o)}function Jv(t,e,[a,r,o],l,d){IA(t,e[a],e[r],e[o],e.scale,l,d)}const qA=["x","scaleX","originX"],FA=["y","scaleY","originY"];function Qv(t,e,a,r){Jv(t.x,e,qA,a?a.x:void 0,r?r.x:void 0),Jv(t.y,e,FA,a?a.y:void 0,r?r.y:void 0)}function Zv(t){return t.translate===0&&t.scale===1}function t1(t){return Zv(t.x)&&Zv(t.y)}function eb(t,e){return t.min===e.min&&t.max===e.max}function GA(t,e){return eb(t.x,e.x)&&eb(t.y,e.y)}function tb(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function n1(t,e){return tb(t.x,e.x)&&tb(t.y,e.y)}function nb(t){return Wt(t.x)/Wt(t.y)}function ab(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function na(t){return[t("x"),t("y")]}function KA(t,e,a){let r="";const o=t.x.translate/e.x,l=t.y.translate/e.y,d=(a==null?void 0:a.z)||0;if((o||l||d)&&(r=`translate3d(${o}px, ${l}px, ${d}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),a){const{transformPerspective:m,rotate:y,pathRotation:v,rotateX:x,rotateY:w,skewX:j,skewY:E}=a;m&&(r=`perspective(${m}px) ${r}`),y&&(r+=`rotate(${y}deg) `),v&&(r+=`rotate(${v}deg) `),x&&(r+=`rotateX(${x}deg) `),w&&(r+=`rotateY(${w}deg) `),j&&(r+=`skewX(${j}deg) `),E&&(r+=`skewY(${E}deg) `)}const h=t.x.scale*e.x,p=t.y.scale*e.y;return(h!==1||p!==1)&&(r+=`scale(${h}, ${p})`),r||"none"}const a1=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],YA=a1.length,ib=t=>typeof t=="string"?parseFloat(t):t,rb=t=>typeof t=="number"||ce.test(t);function WA(t,e,a,r,o,l){o?(t.opacity=Ze(0,a.opacity??1,XA(r)),t.opacityExit=Ze(e.opacity??1,0,JA(r))):l&&(t.opacity=Ze(e.opacity??1,a.opacity??1,r));for(let d=0;d<YA;d++){const h=a1[d];let p=sb(e,h),m=sb(a,h);if(p===void 0&&m===void 0)continue;p||(p=0),m||(m=0),p===0||m===0||rb(p)===rb(m)?(t[h]=Math.max(Ze(ib(p),ib(m),r),0),(sa.test(m)||sa.test(p))&&(t[h]+="%")):t[h]=m}(e.rotate||a.rotate)&&(t.rotate=Ze(e.rotate||0,a.rotate||0,r))}function sb(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const XA=i1(0,.5,Wx),JA=i1(.5,.95,zn);function i1(t,e,a){return r=>r<t?0:r>e?1:a(wo(t,e,r))}function QA(t,e,a){const r=Vt(t)?t:Wr(t);return r.start(lp("",r,e,a)),r.animation}function _o(t,e,a,r={passive:!0}){return t.addEventListener(e,a,r),()=>t.removeEventListener(e,a)}const ZA=(t,e)=>t.depth-e.depth;class eN{constructor(){this.children=[],this.isDirty=!1}add(e){Wf(this.children,e),this.isDirty=!0}remove(e){Cc(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(ZA),this.isDirty=!1,this.children.forEach(e)}}function tN(t,e){const a=Yt.now(),r=({timestamp:o})=>{const l=o-a;l>=e&&(mi(r),t(l-e))};return et.setup(r,!0),()=>mi(r)}function mc(t){return Vt(t)?t.get():t}class nN{constructor(){this.members=[]}add(e){Wf(this.members,e);for(let a=this.members.length-1;a>=0;a--){const r=this.members[a];if(r===e||r===this.lead||r===this.prevLead)continue;const o=r.instance;(!o||o.isConnected===!1)&&!r.snapshot&&(Cc(this.members,r),r.unmount())}e.scheduleRender()}remove(e){if(Cc(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const a=this.members[this.members.length-1];a&&this.promote(a)}}relegate(e){var a;for(let r=this.members.indexOf(e)-1;r>=0;r--){const o=this.members[r];if(o.isPresent!==!1&&((a=o.instance)==null?void 0:a.isConnected)!==!1)return this.promote(o),!0}return!1}promote(e,a){var o;const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.updateSnapshot(),e.scheduleRender();const{layoutDependency:l}=r.options,{layoutDependency:d}=e.options;(l===void 0||l!==d)&&(e.resumeFrom=r,a&&(r.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),(o=e.root)!=null&&o.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var a,r,o,l,d;(r=(a=e.options).onExitComplete)==null||r.call(a),(d=(o=e.resumingFrom)==null?void 0:(l=o.options).onExitComplete)==null||d.call(l)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const gc={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Dh=["","X","Y","Z"],aN=1e3;let iN=0;function Lh(t,e,a,r){const{latestValues:o}=e;o[t]&&(a[t]=o[t],e.setStaticValue(t,0),r&&(r[t]=0))}function r1(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const a=Ew(e);if(window.MotionHasOptimisedAnimation(a,"transform")){const{layout:o,layoutId:l}=t.options;window.MotionCancelOptimisedAnimation(a,"transform",et,!(o||l))}const{parent:r}=t;r&&!r.hasCheckedOptimisedAppear&&r1(r)}function s1({attachResizeListener:t,defaultParent:e,measureScroll:a,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(d={},h=e==null?void 0:e()){this.id=iN++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(oN),this.nodes.forEach(fN),this.nodes.forEach(pN),this.nodes.forEach(lN)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new eN)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Jf),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=fp(d)&&!sA(d),this.instance=d;const{layoutId:h,layout:p,visualElement:m}=this.options;if(m&&!m.current&&m.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),t){let y,v=0;const x=()=>this.root.updateBlockedByResize=!1;et.read(()=>{v=window.innerWidth}),t(d,()=>{const w=window.innerWidth;w!==v&&(v=w,this.root.updateBlockedByResize=!0,y&&y(),y=tN(x,250),gc.hasAnimatedSinceResize&&(gc.hasAnimatedSinceResize=!1,this.nodes.forEach(cb)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&m&&(h||p)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:v,hasRelativeLayoutChanged:x,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const j=this.options.transition||m.getDefaultTransition()||bN,{onLayoutAnimationStart:E,onLayoutAnimationComplete:T}=m.getProps(),k=!this.targetLayout||!n1(this.targetLayout,w),C=!v&&x;if(this.options.layoutRoot||this.resumeFrom||C||v&&(k||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const N={...op(j,"layout"),onPlay:E,onComplete:T};(m.shouldReduceMotion||this.options.layoutRoot)&&(N.delay=0,N.type=!1),this.startAnimation(N),this.setAnimationOrigin(y,C,N.path)}else v||cb(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),mi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(mN),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&r1(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const v=this.path[y];v.shouldResetTransform=!0,(typeof v.latestValues.x=="string"||typeof v.latestValues.y=="string")&&(v.isLayoutDirty=!0),v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(uN),this.nodes.forEach(ob);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(lb);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(dN),this.nodes.forEach(hN),this.nodes.forEach(rN),this.nodes.forEach(sN)):this.nodes.forEach(lb),this.clearAllSnapshots();const h=Yt.now();Pt.delta=oa(0,1e3/60,h-Pt.timestamp),Pt.timestamp=h,Pt.isProcessing=!0,kh.update.process(Pt),kh.preRender.process(Pt),kh.render.process(Pt),Pt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,dp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(cN),this.sharedNodes.forEach(gN)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,et.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){et.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Wt(this.snapshot.measuredBox.x)&&!Wt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=At()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=r(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:a(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!o)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!t1(this.projectionDelta),p=this.getTransformTemplate(),m=p?p(this.latestValues,""):void 0,y=m!==this.prevTransformTemplateValue;d&&this.instance&&(h||Ii(this.latestValues)||y)&&(o(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),xN(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var m;const{visualElement:d}=this.options;if(!d)return At();const h=d.measureViewportBox();if(!(((m=this.scroll)==null?void 0:m.wasRoot)||this.path.some(wN))){const{scroll:y}=this.root;y&&(ra(h.x,y.offset.x),ra(h.y,y.offset.y))}return h}removeElementScroll(d){var p;const h=At();if(Hn(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let m=0;m<this.path.length;m++){const y=this.path[m],{scroll:v,options:x}=y;y!==this.root&&v&&x.layoutScroll&&(v.wasRoot&&Hn(h,d),ra(h.x,v.offset.x),ra(h.y,v.offset.y))}return h}applyTransform(d,h=!1,p){var y,v;const m=p||At();Hn(m,d);for(let x=0;x<this.path.length;x++){const w=this.path[x];!h&&w.options.layoutScroll&&w.scroll&&w!==w.root&&(ra(m.x,-w.scroll.offset.x),ra(m.y,-w.scroll.offset.y)),Ii(w.latestValues)&&pc(m,w.latestValues,(y=w.layout)==null?void 0:y.layoutBox)}return Ii(this.latestValues)&&pc(m,this.latestValues,(v=this.layout)==null?void 0:v.layoutBox),m}removeTransform(d){var p;const h=At();Hn(h,d);for(let m=0;m<this.path.length;m++){const y=this.path[m];if(!Ii(y.latestValues))continue;let v;y.instance&&(Tf(y.latestValues)&&y.updateSnapshot(),v=At(),Hn(v,y.measurePageBox())),Qv(h,y.latestValues,(p=y.snapshot)==null?void 0:p.layoutBox,v)}return Ii(this.latestValues)&&Qv(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Pt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var w;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:v}=this.options;if(!this.layout||!(y||v))return;this.resolvedRelativeTargetAt=Pt.timestamp;const x=this.getClosestProjectingParent();x&&this.linkedParentVersion!==x.layoutVersion&&!x.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&x&&x.layout?this.createRelativeTarget(x,this.layout.layoutBox,x.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=At(),this.targetWithTransforms=At()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),HA(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Hn(this.target,this.layout.layoutBox),Iw(this.target,this.targetDelta)):Hn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?this.createRelativeTarget(x,this.target,x.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Tf(this.parent.latestValues)||Hw(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=At(),this.relativeTargetOrigin=At(),zc(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),Hn(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var j;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(j=this.parent)!=null&&j.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===Pt.timestamp&&(p=!1),p)return;const{layout:m,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||y))return;Hn(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,x=this.treeScale.y;yA(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=At());const{target:w}=d;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Gv(this.prevProjectionDelta.x,this.projectionDelta.x),Gv(this.prevProjectionDelta.y,this.projectionDelta.y)),co(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==x||!ab(this.projectionDelta.x,this.prevProjectionDelta.x)||!ab(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Gr(),this.projectionDelta=Gr(),this.projectionDeltaWithTransform=Gr()}setAnimationOrigin(d,h=!1,p){const m=this.snapshot,y=m?m.latestValues:{},v={...this.latestValues},x=Gr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const w=At(),j=m?m.source:void 0,E=this.layout?this.layout.source:void 0,T=j!==E,k=this.getStack(),C=!k||k.members.length<=1,N=!!(T&&!C&&this.options.crossfade===!0&&!this.path.some(vN));this.animationProgress=0;let z;const J=p==null?void 0:p.interpolateProjection(d);this.mixTargetDelta=Q=>{const D=Q/1e3,q=J==null?void 0:J(D);q?(x.x.translate=q.x,x.x.scale=Ze(d.x.scale,1,D),x.x.origin=d.x.origin,x.x.originPoint=d.x.originPoint,x.y.translate=q.y,x.y.scale=Ze(d.y.scale,1,D),x.y.origin=d.y.origin,x.y.originPoint=d.y.originPoint):(ub(x.x,d.x,D),ub(x.y,d.y,D)),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(zc(w,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),yN(this.relativeTarget,this.relativeTargetOrigin,w,D),z&&GA(this.relativeTarget,z)&&(this.isProjectionDirty=!1),z||(z=At()),Hn(z,this.relativeTarget)),T&&(this.animationValues=v,WA(v,y,this.latestValues,D,N,C)),q&&q.rotate!==void 0&&(this.animationValues||(this.animationValues=v),this.animationValues.pathRotation=q.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=D},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,m;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(m=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||m.stop(),this.pendingAnimation&&(mi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=et.update(()=>{gc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Wr(0)),this.motionValue.jump(0,!1),this.currentAnimation=QA(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:y=>{this.mixTargetDelta(y),d.onUpdate&&d.onUpdate(y)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(aN),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:m,latestValues:y}=d;if(!(!h||!p||!m)){if(this!==d&&this.layout&&m&&o1(this.options.animationType,this.layout.layoutBox,m.layoutBox)){p=this.target||At();const v=Wt(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+v;const x=Wt(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+x}Hn(h,p),pc(h,y),co(this.projectionDeltaWithTransform,this.layoutCorrected,h,y)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new nN),this.sharedNodes.get(d).add(h);const m=h.options.initialPromotionConfig;h.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const m=this.getStack();m&&m.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const m={};p.z&&Lh("z",d,m,this.animationValues);for(let y=0;y<Dh.length;y++)Lh(`rotate${Dh[y]}`,d,m,this.animationValues),Lh(`skew${Dh[y]}`,d,m,this.animationValues);d.render();for(const y in m)d.setStaticValue(y,m[y]),this.animationValues&&(this.animationValues[y]=m[y]);d.scheduleRender()}applyProjectionStyles(d,h){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=mc(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=mc(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!Ii(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const y=m.animationValues||m.latestValues;this.applyTransformsToTarget();let v=KA(this.projectionDeltaWithTransform,this.treeScale,y);p&&(v=p(y,v)),d.transform=v;const{x,y:w}=this.projectionDelta;d.transformOrigin=`${x.origin*100}% ${w.origin*100}% 0`,m.animationValues?d.opacity=m===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:d.opacity=m===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const j in Af){if(y[j]===void 0)continue;const{correct:E,applyTo:T,isCSSVariable:k}=Af[j],C=v==="none"?y[j]:E(y[j],m);if(T){const N=T.length;for(let z=0;z<N;z++)d[T[z]]=C}else k?this.options.visualElement.renderState.vars[j]=C:d[j]=C}this.options.layoutId&&(d.pointerEvents=m===this?mc(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(ob),this.root.sharedNodes.clear()}}}function rN(t){t.updateLayout()}function sN(t){var a;const e=((a=t.resumeFrom)==null?void 0:a.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=t.layout,{animationType:l}=t.options,d=e.source!==t.layout.source;if(l==="size")na(v=>{const x=d?e.measuredBox[v]:e.layoutBox[v],w=Wt(x);x.min=r[v].min,x.max=x.min+w});else if(l==="x"||l==="y"){const v=l==="x"?"y":"x";Nf(d?e.measuredBox[v]:e.layoutBox[v],r[v])}else o1(l,e.layoutBox,r)&&na(v=>{const x=d?e.measuredBox[v]:e.layoutBox[v],w=Wt(r[v]);x.max=x.min+w,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[v].max=t.relativeTarget[v].min+w)});const h=Gr();co(h,r,e.layoutBox);const p=Gr();d?co(p,t.applyTransform(o,!0),e.measuredBox):co(p,r,e.layoutBox);const m=!t1(h);let y=!1;if(!t.resumeFrom){const v=t.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:x,layout:w}=v;if(x&&w){const j=t.options.layoutAnchor||void 0,E=At();zc(E,e.layoutBox,x.layoutBox,j);const T=At();zc(T,r,w.layoutBox,j),n1(E,T)||(y=!0),v.options.layoutRoot&&(t.relativeTarget=T,t.relativeTargetOrigin=E,t.relativeParent=v)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:e,delta:p,layoutDelta:h,hasLayoutChanged:m,hasRelativeLayoutChanged:y})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function oN(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function lN(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function cN(t){t.clearSnapshot()}function ob(t){t.clearMeasurements()}function uN(t){t.isLayoutDirty=!0,t.updateLayout()}function lb(t){t.isLayoutDirty=!1}function dN(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function hN(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function cb(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function fN(t){t.resolveTargetDelta()}function pN(t){t.calcProjection()}function mN(t){t.resetSkewAndRotation()}function gN(t){t.removeLeadSnapshot()}function ub(t,e,a){t.translate=Ze(e.translate,0,a),t.scale=Ze(e.scale,1,a),t.origin=e.origin,t.originPoint=e.originPoint}function db(t,e,a,r){t.min=Ze(e.min,a.min,r),t.max=Ze(e.max,a.max,r)}function yN(t,e,a,r){db(t.x,e.x,a.x,r),db(t.y,e.y,a.y,r)}function vN(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const bN={duration:.45,ease:[.4,0,.1,1]},hb=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),fb=hb("applewebkit/")&&!hb("chrome/")?Math.round:zn;function pb(t){t.min=fb(t.min),t.max=fb(t.max)}function xN(t){pb(t.x),pb(t.y)}function o1(t,e,a){return t==="position"||t==="preserve-aspect"&&!$A(nb(e),nb(a),.2)}function wN(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const SN=s1({attachResizeListener:(t,e)=>_o(t,"resize",e),measureScroll:()=>{var t,e;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Mh={current:void 0},l1=s1({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Mh.current){const t=new SN({});t.mount(window),t.setOptions({layoutScroll:!0}),Mh.current=t}return Mh.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),vp=S.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function mb(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function jN(...t){return e=>{let a=!1;const r=t.map(o=>{const l=mb(o,e);return!a&&typeof l=="function"&&(a=!0),l});if(a)return()=>{for(let o=0;o<r.length;o++){const l=r[o];typeof l=="function"?l():mb(t[o],null)}}}}function _N(...t){return S.useCallback(jN(...t),t)}class kN extends S.Component{getSnapshotBeforeUpdate(e){const a=this.props.childRef.current;if(uc(a)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=a.offsetParent,o=uc(r)&&r.offsetWidth||0,l=uc(r)&&r.offsetHeight||0,d=getComputedStyle(a),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=a.offsetTop,h.left=a.offsetLeft,h.right=o-h.width-h.left,h.bottom=l-h.height-h.top,h.direction=d.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function EN({children:t,isPresent:e,anchorX:a,anchorY:r,root:o,pop:l}){var x;const d=S.useId(),h=S.useRef(null),p=S.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:m}=S.useContext(vp),y=((x=t.props)==null?void 0:x.ref)??(t==null?void 0:t.ref),v=_N(h,y);return S.useInsertionEffect(()=>{const{width:w,height:j,top:E,left:T,right:k,bottom:C,direction:N}=p.current;if(e||l===!1||!h.current||!w||!j)return;const z=N==="rtl",J=a==="left"?z?`right: ${k}`:`left: ${T}`:z?`left: ${T}`:`right: ${k}`,Q=r==="bottom"?`bottom: ${C}`:`top: ${E}`;h.current.dataset.motionPopId=d;const D=document.createElement("style");m&&(D.nonce=m);const q=o??document.head;return q.appendChild(D),D.sheet&&D.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${w}px !important;
            height: ${j}px !important;
            ${J}px !important;
            ${Q}px !important;
          }
        `),()=>{var H;(H=h.current)==null||H.removeAttribute("data-motion-pop-id"),q.contains(D)&&q.removeChild(D)}},[e]),u.jsx(kN,{isPresent:e,childRef:h,sizeRef:p,pop:l,children:l===!1?t:S.cloneElement(t,{ref:v})})}const TN=({children:t,initial:e,isPresent:a,onExitComplete:r,custom:o,presenceAffectsLayout:l,mode:d,anchorX:h,anchorY:p,root:m})=>{const y=Yf(CN),v=S.useId();let x=!0,w=S.useMemo(()=>(x=!1,{id:v,initial:e,isPresent:a,custom:o,onExitComplete:j=>{y.set(j,!0);for(const E of y.values())if(!E)return;r&&r()},register:j=>(y.set(j,!1),()=>y.delete(j))}),[a,y,r]);return l&&x&&(w={...w}),S.useMemo(()=>{y.forEach((j,E)=>y.set(E,!1))},[a]),S.useEffect(()=>{!a&&!y.size&&r&&r()},[a]),t=u.jsx(EN,{pop:d==="popLayout",isPresent:a,anchorX:h,anchorY:p,root:m,children:t}),u.jsx(Gc.Provider,{value:w,children:t})};function CN(){return new Map}function c1(t=!0){const e=S.useContext(Gc);if(e===null)return[!0,null];const{isPresent:a,onExitComplete:r,register:o}=e,l=S.useId();S.useEffect(()=>{if(t)return o(l)},[t]);const d=S.useCallback(()=>t&&r&&r(l),[l,r,t]);return!a&&r?[!1,d]:[!0]}const nc=t=>t.key||"";function gb(t){const e=[];return S.Children.forEach(t,a=>{S.isValidElement(a)&&e.push(a)}),e}const bn=({children:t,custom:e,initial:a=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:l="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:m})=>{const[y,v]=c1(d),x=S.useMemo(()=>gb(t),[t]),w=d&&!y?[]:x.map(nc),j=S.useRef(!0),E=S.useRef(x),T=Yf(()=>new Map),k=S.useRef(new Set),[C,N]=S.useState(x),[z,J]=S.useState(x);Ux(()=>{j.current=!1,E.current=x;for(let q=0;q<z.length;q++){const H=nc(z[q]);w.includes(H)?(T.delete(H),k.current.delete(H)):T.get(H)!==!0&&T.set(H,!1)}},[z,w.length,w.join("-")]);const Q=[];if(x!==C){let q=[...x];for(let H=0;H<z.length;H++){const X=z[H],se=nc(X);w.includes(se)||(q.splice(H,0,X),Q.push(X))}return l==="wait"&&Q.length&&(q=Q),J(gb(q)),N(x),null}const{forceRender:D}=S.useContext(Kf);return u.jsx(u.Fragment,{children:z.map(q=>{const H=nc(q),X=d&&!y?!1:x===z||w.includes(H),se=()=>{if(k.current.has(H))return;if(T.has(H))k.current.add(H),T.set(H,!0);else return;let oe=!0;T.forEach(Se=>{Se||(oe=!1)}),oe&&(D==null||D(),J(E.current),d&&(v==null||v()),r&&r())};return u.jsx(TN,{isPresent:X,initial:!j.current||a?void 0:!1,custom:e,presenceAffectsLayout:o,mode:l,root:m,onExitComplete:X?void 0:se,anchorX:h,anchorY:p,children:q},H)})})},u1=S.createContext({strict:!1}),yb={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let vb=!1;function AN(){if(vb)return;const t={};for(const e in yb)t[e]={isEnabled:a=>yb[e].some(r=>!!a[r])};Pw(t),vb=!0}function d1(){return AN(),fA()}function NN(t){const e=d1();for(const a in t)e[a]={...e[a],...t[a]};Pw(e)}const RN=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Uc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||RN.has(t)}let h1=t=>!Uc(t);function ON(t){typeof t=="function"&&(h1=e=>e.startsWith("on")?!Uc(e):t(e))}try{ON(require("@emotion/is-prop-valid").default)}catch{}function DN(t,e,a){const r={};for(const o in t)o==="values"&&typeof t.values=="object"||Vt(t[o])||(h1(o)||a===!0&&Uc(o)||!e&&!Uc(o)||t.draggable&&o.startsWith("onDrag"))&&(r[o]=t[o]);return r}const Xc=S.createContext({});function LN(t,e){if(Wc(t)){const{initial:a,animate:r}=t;return{initial:a===!1||jo(a)?a:void 0,animate:jo(r)?r:void 0}}return t.inherit!==!1?e:{}}function MN(t){const{initial:e,animate:a}=LN(t,S.useContext(Xc));return S.useMemo(()=>({initial:e,animate:a}),[bb(e),bb(a)])}function bb(t){return Array.isArray(t)?t.join(" "):t}const bp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function f1(t,e,a){for(const r in e)!Vt(e[r])&&!Gw(r,a)&&(t[r]=e[r])}function zN({transformTemplate:t},e){return S.useMemo(()=>{const a=bp();return gp(a,e,t),Object.assign({},a.vars,a.style)},[e])}function UN(t,e){const a=t.style||{},r={};return f1(r,a,t),Object.assign(r,zN(t,e)),r}function BN(t,e){const a={},r=UN(t,e);return t.drag&&t.dragListener!==!1&&(a.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(a.tabIndex=0),a.style=r,a}const p1=()=>({...bp(),attrs:{}});function PN(t,e,a,r){const o=S.useMemo(()=>{const l=p1();return Kw(l,e,Ww(r),t.transformTemplate,t.style),{...l.attrs,style:{...l.style}}},[e]);if(t.style){const l={};f1(l,t.style,t),o.style={...l,...o.style}}return o}const VN=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function xp(t){return typeof t!="string"||t.includes("-")?!1:!!(VN.indexOf(t)>-1||/[A-Z]/u.test(t))}function $N(t,e,a,{latestValues:r},o,l=!1,d){const p=(d??xp(t)?PN:BN)(e,r,o,t),m=DN(e,typeof t=="string",l),y=t!==S.Fragment?{...m,...p,ref:a}:{},{children:v}=e,x=S.useMemo(()=>Vt(v)?v.get():v,[v]);return S.createElement(t,{...y,children:x})}function HN({scrapeMotionValuesFromProps:t,createRenderState:e},a,r,o){return{latestValues:IN(a,r,o,t),renderState:e()}}function IN(t,e,a,r){const o={},l=r(t,{});for(const x in l)o[x]=mc(l[x]);let{initial:d,animate:h}=t;const p=Wc(t),m=Uw(t);e&&m&&!p&&t.inherit!==!1&&(d===void 0&&(d=e.initial),h===void 0&&(h=e.animate));let y=a?a.initial===!1:!1;y=y||d===!1;const v=y?h:d;if(v&&typeof v!="boolean"&&!Yc(v)){const x=Array.isArray(v)?v:[v];for(let w=0;w<x.length;w++){const j=cp(t,x[w]);if(j){const{transitionEnd:E,transition:T,...k}=j;for(const C in k){let N=k[C];if(Array.isArray(N)){const z=y?N.length-1:0;N=N[z]}N!==null&&(o[C]=N)}for(const C in E)o[C]=E[C]}}}return o}const m1=t=>(e,a)=>{const r=S.useContext(Xc),o=S.useContext(Gc),l=()=>HN(t,e,r,o);return a?l():Yf(l)},qN=m1({scrapeMotionValuesFromProps:yp,createRenderState:bp}),FN=m1({scrapeMotionValuesFromProps:Xw,createRenderState:p1}),GN=Symbol.for("motionComponentSymbol");function KN(t,e,a){const r=S.useRef(a);S.useInsertionEffect(()=>{r.current=a});const o=S.useRef(null);return S.useCallback(l=>{var h;l&&((h=t.onMount)==null||h.call(t,l)),e&&(l?e.mount(l):e.unmount());const d=r.current;if(typeof d=="function")if(l){const p=d(l);typeof p=="function"&&(o.current=p)}else o.current?(o.current(),o.current=null):d(l);else d&&(d.current=l)},[e])}const g1=S.createContext({});function Hr(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function YN(t,e,a,r,o,l){var N,z;const{visualElement:d}=S.useContext(Xc),h=S.useContext(u1),p=S.useContext(Gc),m=S.useContext(vp),y=m.reducedMotion,v=m.skipAnimations,x=S.useRef(null),w=S.useRef(!1);r=r||h.renderer,!x.current&&r&&(x.current=r(t,{visualState:e,parent:d,props:a,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:y,skipAnimations:v,isSVG:l}),w.current&&x.current&&(x.current.manuallyAnimateOnMount=!0));const j=x.current,E=S.useContext(g1);j&&!j.projection&&o&&(j.type==="html"||j.type==="svg")&&WN(x.current,a,o,E);const T=S.useRef(!1);S.useInsertionEffect(()=>{j&&T.current&&j.update(a,p)});const k=a[kw],C=S.useRef(!!k&&typeof window<"u"&&!((N=window.MotionHandoffIsComplete)!=null&&N.call(window,k))&&((z=window.MotionHasOptimisedAnimation)==null?void 0:z.call(window,k)));return Ux(()=>{w.current=!0,j&&(T.current=!0,window.MotionIsMounted=!0,j.updateFeatures(),j.scheduleRenderMicrotask(),C.current&&j.animationState&&j.animationState.animateChanges())}),S.useEffect(()=>{j&&(!C.current&&j.animationState&&j.animationState.animateChanges(),C.current&&(queueMicrotask(()=>{var J;(J=window.MotionHandoffMarkAsComplete)==null||J.call(window,k)}),C.current=!1),j.enteringChildren=void 0)}),j}function WN(t,e,a,r){const{layoutId:o,layout:l,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:m,layoutAnchor:y,layoutCrossfade:v}=e;t.projection=new a(t.latestValues,e["data-framer-portal-id"]?void 0:y1(t.parent)),t.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!d||h&&Hr(h),visualElement:t,animationType:typeof l=="string"?l:"both",initialPromotionConfig:r,crossfade:v,layoutScroll:p,layoutRoot:m,layoutAnchor:y})}function y1(t){if(t)return t.options.allowProjection!==!1?t.projection:y1(t.parent)}function zh(t,{forwardMotionProps:e=!1,type:a}={},r,o){r&&NN(r);const l=a?a==="svg":xp(t),d=l?FN:qN;function h(m,y){let v;const x={...S.useContext(vp),...m,layoutId:XN(m)},{isStatic:w}=x,j=MN(m),E=d(m,w);if(!w&&typeof window<"u"){JN();const T=QN(x);v=T.MeasureLayout,j.visualElement=YN(t,E,x,o,T.ProjectionNode,l)}return u.jsxs(Xc.Provider,{value:j,children:[v&&j.visualElement?u.jsx(v,{visualElement:j.visualElement,...x}):null,$N(t,m,KN(E,j.visualElement,y),E,w,e,l)]})}h.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const p=S.forwardRef(h);return p[GN]=t,p}function XN({layoutId:t}){const e=S.useContext(Kf).id;return e&&t!==void 0?e+"-"+t:t}function JN(t,e){S.useContext(u1).strict}function QN(t){const e=d1(),{drag:a,layout:r}=e;if(!a&&!r)return{};const o={...a,...r};return{MeasureLayout:a!=null&&a.isEnabled(t)||r!=null&&r.isEnabled(t)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function ZN(t,e){if(typeof Proxy>"u")return zh;const a=new Map,r=(l,d)=>zh(l,d,t,e),o=(l,d)=>r(l,d);return new Proxy(o,{get:(l,d)=>d==="create"?r:(a.has(d)||a.set(d,zh(d,void 0,t,e)),a.get(d))})}const e4=(t,e)=>e.isSVG??xp(t)?new NA(e):new _A(e,{allowProjection:t!==S.Fragment});class t4 extends yi{constructor(e){super(e),e.animationState||(e.animationState=MA(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Yc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:a}=this.node.prevProps||{};e!==a&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let n4=0;class a4 extends yi{constructor(){super(...arguments),this.id=n4++,this.isExitComplete=!1}update(){var l;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:a}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;if(e&&r===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"||typeof d=="object"&&d!==null&&!Array.isArray(d)){const p=Yi(this.node,d,h);if(p){const{transition:m,transitionEnd:y,...v}=p;for(const x in v)(l=this.node.getValue(x))==null||l.jump(v[x])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const o=this.node.animationState.setActive("exit",!e);a&&!e&&o.then(()=>{this.isExitComplete=!0,a(this.id)})}mount(){const{register:e,onExitComplete:a}=this.node.presenceContext||{};a&&a(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const i4={animation:{Feature:t4},exit:{Feature:a4}};function Ro(t){return{point:{x:t.pageX,y:t.pageY}}}const r4=t=>e=>hp(e)&&t(e,Ro(e));function uo(t,e,a,r){return _o(t,e,r4(a),r)}const v1=({current:t})=>t?t.ownerDocument.defaultView:null,xb=(t,e)=>Math.abs(t-e);function s4(t,e){const a=xb(t.x,e.x),r=xb(t.y,e.y);return Math.sqrt(a**2+r**2)}const wb=new Set(["auto","scroll"]);class b1{constructor(e,a,{transformPagePoint:r,contextWindow:o=window,dragSnapToOrigin:l=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=w=>{this.handleScroll(w.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=ac(this.lastRawMoveEventInfo,this.transformPagePoint));const w=Uh(this.lastMoveEventInfo,this.history),j=this.startEvent!==null,E=s4(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!j&&!E)return;const{point:T}=w,{timestamp:k}=Pt;this.history.push({...T,timestamp:k});const{onStart:C,onMove:N}=this.handlers;j||(C&&C(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),N&&N(this.lastMoveEvent,w)},this.handlePointerMove=(w,j)=>{this.lastMoveEvent=w,this.lastRawMoveEventInfo=j,this.lastMoveEventInfo=ac(j,this.transformPagePoint),et.update(this.updatePoint,!0)},this.handlePointerUp=(w,j)=>{this.end();const{onEnd:E,onSessionEnd:T,resumeAnimation:k}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&k&&k(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const C=Uh(w.type==="pointercancel"?this.lastMoveEventInfo:ac(j,this.transformPagePoint),this.history);this.startEvent&&E&&E(w,C),T&&T(w,C)},!hp(e))return;this.dragSnapToOrigin=l,this.handlers=a,this.transformPagePoint=r,this.distanceThreshold=d,this.contextWindow=o||window;const p=Ro(e),m=ac(p,this.transformPagePoint),{point:y}=m,{timestamp:v}=Pt;this.history=[{...y,timestamp:v}];const{onSessionStart:x}=a;x&&x(e,Uh(m,this.history)),this.removeListeners=Co(uo(this.contextWindow,"pointermove",this.handlePointerMove),uo(this.contextWindow,"pointerup",this.handlePointerUp),uo(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(e){let a=e.parentElement;for(;a;){const r=getComputedStyle(a);(wb.has(r.overflowX)||wb.has(r.overflowY))&&this.scrollPositions.set(a,{x:a.scrollLeft,y:a.scrollTop}),a=a.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const a=this.scrollPositions.get(e);if(!a)return;const r=e===window,o=r?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},l={x:o.x-a.x,y:o.y-a.y};l.x===0&&l.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=l.x,this.lastMoveEventInfo.point.y+=l.y):this.history.length>0&&(this.history[0].x-=l.x,this.history[0].y-=l.y),this.scrollPositions.set(e,o),et.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),mi(this.updatePoint)}}function ac(t,e){return e?{point:e(t.point)}:t}function Sb(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Uh({point:t},e){return{point:t,delta:Sb(t,x1(e)),offset:Sb(t,o4(e)),velocity:l4(e,.1)}}function o4(t){return t[0]}function x1(t){return t[t.length-1]}function l4(t,e){if(t.length<2)return{x:0,y:0};let a=t.length-1,r=null;const o=x1(t);for(;a>=0&&(r=t[a],!(o.timestamp-r.timestamp>vn(e)));)a--;if(!r)return{x:0,y:0};r===t[0]&&t.length>2&&o.timestamp-r.timestamp>vn(e)*2&&(r=t[1]);const l=Mn(o.timestamp-r.timestamp);if(l===0)return{x:0,y:0};const d={x:(o.x-r.x)/l,y:(o.y-r.y)/l};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function c4(t,{min:e,max:a},r){return e!==void 0&&t<e?t=r?Ze(e,t,r.min):Math.max(t,e):a!==void 0&&t>a&&(t=r?Ze(a,t,r.max):Math.min(t,a)),t}function jb(t,e,a){return{min:e!==void 0?t.min+e:void 0,max:a!==void 0?t.max+a-(t.max-t.min):void 0}}function u4(t,{top:e,left:a,bottom:r,right:o}){return{x:jb(t.x,a,o),y:jb(t.y,e,r)}}function _b(t,e){let a=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([a,r]=[r,a]),{min:a,max:r}}function d4(t,e){return{x:_b(t.x,e.x),y:_b(t.y,e.y)}}function h4(t,e){let a=.5;const r=Wt(t),o=Wt(e);return o>r?a=wo(e.min,e.max-r,t.min):r>o&&(a=wo(t.min,t.max-o,e.min)),oa(0,1,a)}function f4(t,e){const a={};return e.min!==void 0&&(a.min=e.min-t.min),e.max!==void 0&&(a.max=e.max-t.min),a}const Rf=.35;function p4(t=Rf){return t===!1?t=0:t===!0&&(t=Rf),{x:kb(t,"left","right"),y:kb(t,"top","bottom")}}function kb(t,e,a){return{min:Eb(t,e),max:Eb(t,a)}}function Eb(t,e){return typeof t=="number"?t:t[e]||0}const m4=new WeakMap;class g4{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=At(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:a=!1,distanceThreshold:r}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const l=v=>{a&&this.snapToCursor(Ro(v).point),this.stopAnimation()},d=(v,x)=>{const{drag:w,dragPropagation:j,onDragStart:E}=this.getProps();if(w&&!j&&(this.openDragLock&&this.openDragLock(),this.openDragLock=IC(w),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=x,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),na(k=>{let C=this.getAxisMotionValue(k).get()||0;if(sa.test(C)){const{projection:N}=this.visualElement;if(N&&N.layout){const z=N.layout.layoutBox[k];z&&(C=Wt(z)*(parseFloat(C)/100))}}this.originPoint[k]=C}),E&&et.update(()=>E(v,x),!1,!0),wf(this.visualElement,"transform");const{animationState:T}=this.visualElement;T&&T.setActive("whileDrag",!0)},h=(v,x)=>{this.latestPointerEvent=v,this.latestPanInfo=x;const{dragPropagation:w,dragDirectionLock:j,onDirectionLock:E,onDrag:T}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:k}=x;if(j&&this.currentDirection===null){this.currentDirection=v4(k),this.currentDirection!==null&&E&&E(this.currentDirection);return}this.updateAxis("x",x.point,k),this.updateAxis("y",x.point,k),this.visualElement.render(),T&&et.update(()=>T(v,x),!1,!0)},p=(v,x)=>{this.latestPointerEvent=v,this.latestPanInfo=x,this.stop(v,x),this.latestPointerEvent=null,this.latestPanInfo=null},m=()=>{const{dragSnapToOrigin:v}=this.getProps();(v||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:y}=this.getProps();this.panSession=new b1(e,{onSessionStart:l,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:r,contextWindow:v1(this.visualElement),element:this.visualElement.current})}stop(e,a){const r=e||this.latestPointerEvent,o=a||this.latestPanInfo,l=this.isDragging;if(this.cancel(),!l||!o||!r)return;const{velocity:d}=o;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&et.postRender(()=>h(r,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:a}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),a&&a.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,a,r){const{drag:o}=this.getProps();if(!r||!ic(e,o,this.currentDirection))return;const l=this.getAxisMotionValue(e);let d=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(d=c4(d,this.constraints[e],this.elastic[e])),l.set(d)}resolveConstraints(){var l;const{dragConstraints:e,dragElastic:a}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(l=this.visualElement.projection)==null?void 0:l.layout,o=this.constraints;e&&Hr(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=u4(r.layoutBox,e):this.constraints=!1,this.elastic=p4(a),o!==this.constraints&&!Hr(e)&&r&&this.constraints&&!this.hasMutatedConstraints&&na(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=f4(r.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:a}=this.getProps();if(!e||!Hr(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;o.root&&(o.root.scroll=void 0,o.root.updateScroll());const l=vA(r,o.root,this.visualElement.getTransformPagePoint());let d=d4(o.layout.layoutBox,l);if(a){const h=a(mA(d));this.hasMutatedConstraints=!!h,h&&(d=$w(h))}return d}startAnimation(e){const{drag:a,dragMomentum:r,dragElastic:o,dragTransition:l,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},m=na(y=>{if(!ic(y,a,this.currentDirection))return;let v=p&&p[y]||{};(d===!0||d===y)&&(v={min:0,max:0});const x=o?200:1e6,w=o?40:1e7,j={type:"inertia",velocity:r?e[y]:0,bounceStiffness:x,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...l,...v};return this.startAxisValueAnimation(y,j)});return Promise.all(m).then(h)}startAxisValueAnimation(e,a){const r=this.getAxisMotionValue(e);return wf(this.visualElement,e),r.start(lp(e,r,0,a,this.visualElement,!1))}stopAnimation(){na(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const a=`_drag${e.toUpperCase()}`,o=this.visualElement.getProps()[a];return o||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){na(a=>{const{drag:r}=this.getProps();if(!ic(a,r,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(a);if(o&&o.layout){const{min:d,max:h}=o.layout.layoutBox[a],p=l.get()||0;l.set(e[a]-Ze(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:a}=this.getProps(),{projection:r}=this.visualElement;if(!Hr(a)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};na(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();o[d]=h4({min:p,max:p},this.constraints[d])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),na(d=>{if(!ic(d,e,null))return;const h=this.getAxisMotionValue(d),{min:p,max:m}=this.constraints[d];h.set(Ze(p,m,o[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;m4.set(this.visualElement,this);const e=this.visualElement.current,a=uo(e,"pointerdown",m=>{const{drag:y,dragListener:v=!0}=this.getProps(),x=m.target,w=x!==e&&WC(x);y&&v&&!w&&this.start(m)});let r;const o=()=>{const{dragConstraints:m}=this.getProps();Hr(m)&&m.current&&(this.constraints=this.resolveRefConstraints(),r||(r=y4(e,m.current,()=>this.scalePositionWithinConstraints())))},{projection:l}=this.visualElement,d=l.addEventListener("measure",o);l&&!l.layout&&(l.root&&l.root.updateScroll(),l.updateLayout()),et.read(o);const h=_o(window,"resize",()=>this.scalePositionWithinConstraints()),p=l.addEventListener("didUpdate",(({delta:m,hasLayoutChanged:y})=>{this.isDragging&&y&&(na(v=>{const x=this.getAxisMotionValue(v);x&&(this.originPoint[v]+=m[v].translate,x.set(x.get()+m[v].translate))}),this.visualElement.render())}));return()=>{h(),a(),d(),p&&p(),r&&r()}}getProps(){const e=this.visualElement.getProps(),{drag:a=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:d=Rf,dragMomentum:h=!0}=e;return{...e,drag:a,dragDirectionLock:r,dragPropagation:o,dragConstraints:l,dragElastic:d,dragMomentum:h}}}function Tb(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function y4(t,e,a){const r=Lv(t,Tb(a)),o=Lv(e,Tb(a));return()=>{r(),o()}}function ic(t,e,a){return(e===!0||e===t)&&(a===null||a===t)}function v4(t,e=10){let a=null;return Math.abs(t.y)>e?a="y":Math.abs(t.x)>e&&(a="x"),a}class b4 extends yi{constructor(e){super(e),this.removeGroupControls=zn,this.removeListeners=zn,this.controls=new g4(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||zn}update(){const{dragControls:e}=this.node.getProps(),{dragControls:a}=this.node.prevProps||{};e!==a&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Bh=t=>(e,a)=>{t&&et.update(()=>t(e,a),!1,!0)};class x4 extends yi{constructor(){super(...arguments),this.removePointerDownListener=zn}onPointerDown(e){this.session=new b1(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:v1(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:a,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:Bh(e),onStart:Bh(a),onMove:Bh(r),onEnd:(l,d)=>{delete this.session,o&&et.postRender(()=>o(l,d))}}}mount(){this.removePointerDownListener=uo(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Ph=!1;class w4 extends S.Component{componentDidMount(){const{visualElement:e,layoutGroup:a,switchLayoutGroup:r,layoutId:o}=this.props,{projection:l}=e;l&&(a.group&&a.group.add(l),r&&r.register&&o&&r.register(l),Ph&&l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),gc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:a,visualElement:r,drag:o,isPresent:l}=this.props,{projection:d}=r;return d&&(d.isPresent=l,e.layoutDependency!==a&&d.setOptions({...d.options,layoutDependency:a}),Ph=!0,o||e.layoutDependency!==a||a===void 0||e.isPresent!==l?d.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?d.promote():d.relegate()||et.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:a}=this.props,{projection:r}=e;r&&(r.options.layoutAnchor=a,r.root.didUpdate(),dp.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:a,switchLayoutGroup:r}=this.props,{projection:o}=e;Ph=!0,o&&(o.scheduleCheckAfterUnmount(),a&&a.group&&a.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function w1(t){const[e,a]=c1(),r=S.useContext(Kf);return u.jsx(w4,{...t,layoutGroup:r,switchLayoutGroup:S.useContext(g1),isPresent:e,safeToRemove:a})}const S4={pan:{Feature:x4},drag:{Feature:b4,ProjectionNode:l1,MeasureLayout:w1}};function Cb(t,e,a){const{props:r}=t;t.animationState&&r.whileHover&&t.animationState.setActive("whileHover",a==="Start");const o="onHover"+a,l=r[o];l&&et.postRender(()=>l(e,Ro(e)))}class j4 extends yi{mount(){const{current:e}=this.node;e&&(this.unmount=FC(e,(a,r)=>(Cb(this.node,r,"Start"),o=>Cb(this.node,o,"End"))))}unmount(){}}class _4 extends yi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Co(_o(this.node.current,"focus",()=>this.onFocus()),_o(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Ab(t,e,a){const{props:r}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&r.whileTap&&t.animationState.setActive("whileTap",a==="Start");const o="onTap"+(a==="End"?"":a),l=r[o];l&&et.postRender(()=>l(e,Ro(e)))}class k4 extends yi{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:a,propagate:r}=this.node.props;this.unmount=JC(e,(o,l)=>(Ab(this.node,l,"Start"),(d,{success:h})=>Ab(this.node,d,h?"End":"Cancel")),{useGlobalTarget:a,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const Of=new WeakMap,Vh=new WeakMap,E4=t=>{const e=Of.get(t.target);e&&e(t)},T4=t=>{t.forEach(E4)};function C4({root:t,...e}){const a=t||document;Vh.has(a)||Vh.set(a,{});const r=Vh.get(a),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(T4,{root:t,...e})),r[o]}function A4(t,e,a){const r=C4(e);return Of.set(t,a),r.observe(t),()=>{Of.delete(t),r.unobserve(t)}}const N4={some:0,all:1};class R4 extends yi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:e={}}=this.node.getProps(),{root:a,margin:r,amount:o="some",once:l}=e,d={root:a?a.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:N4[o]},h=m=>{const{isIntersecting:y}=m;if(this.isInView===y||(this.isInView=y,l&&!y&&this.hasEnteredView))return;y&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",y);const{onViewportEnter:v,onViewportLeave:x}=this.node.getProps(),w=y?v:x;w&&w(m)};this.stopObserver=A4(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:a}=this.node;["amount","margin","root"].some(O4(e,a))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function O4({viewport:t={}},{viewport:e={}}={}){return a=>t[a]!==e[a]}const D4={inView:{Feature:R4},tap:{Feature:k4},focus:{Feature:_4},hover:{Feature:j4}},L4={layout:{ProjectionNode:l1,MeasureLayout:w1}},M4={...i4,...D4,...S4,...L4},we=ZN(M4,e4),z4=[{id:"own",name:"Your Story",avatar:null,isOwn:!0,unread:!1,online:!0},{id:"u1",name:"Luna",avatar:"https://i.pravatar.cc/150?u=luna",unread:!0,online:!0},{id:"u2",name:"Max",avatar:"https://i.pravatar.cc/150?u=max",unread:!0,online:!0},{id:"u3",name:"Zara",avatar:"https://i.pravatar.cc/150?u=zara",unread:!1,online:!0},{id:"u4",name:"Kai",avatar:"https://i.pravatar.cc/150?u=kai",unread:!0,online:!1},{id:"u5",name:"Nova",avatar:"https://i.pravatar.cc/150?u=nova",unread:!1,online:!1},{id:"u6",name:"Rey",avatar:"https://i.pravatar.cc/150?u=rey",unread:!0,online:!0},{id:"u7",name:"Elise",avatar:"https://i.pravatar.cc/150?u=elise",unread:!1,online:!1},{id:"u8",name:"Theo",avatar:"https://i.pravatar.cc/150?u=theo",unread:!0,online:!0}],Nb=["linear-gradient(135deg, #f093fb, #f5576c)","linear-gradient(135deg, #4facfe, #00f2fe)","linear-gradient(135deg, #a18cd1, #fbc2eb)","linear-gradient(135deg, #fccb90, #d57eeb)","linear-gradient(135deg, #667eea, #764ba2)","linear-gradient(135deg, #89f7fe, #66a6ff)","linear-gradient(135deg, #f43b47, #453a94)","linear-gradient(135deg, #11998e, #38ef7d)"];function U4(t){return Nb[t%Nb.length]}function B4(t){return t.charAt(0).toUpperCase()}function P4(){const t=S.useRef(null),[e,a]=S.useState(!1),[r,o]=S.useState(0),[l,d]=S.useState(0),h=v=>{a(!0),o(v.pageX-t.current.offsetLeft),d(t.current.scrollLeft)},p=()=>a(!1),m=()=>a(!1),y=v=>{if(!e)return;v.preventDefault();const w=(v.pageX-t.current.offsetLeft-r)*1.5;t.current.scrollLeft=l-w};return u.jsxs("div",{className:"stories-section",children:[u.jsx("div",{className:"stories-header",children:u.jsx("span",{className:"stories-title",children:"Stories"})}),u.jsx("div",{ref:t,className:"stories-scroll",onMouseDown:h,onMouseUp:p,onMouseLeave:m,onMouseMove:y,children:z4.map((v,x)=>{const w=U4(x),j=B4(v.name),E=v.unread;return u.jsxs(we.div,{className:`story-item ${E?"unread":""}`,whileTap:{scale:.92},whileHover:{y:-2},transition:{type:"spring",stiffness:400,damping:17},children:[u.jsxs("div",{className:"story-avatar-ring",style:{background:w},children:[u.jsx("div",{className:"story-avatar-inner",children:v.avatar?u.jsx("img",{src:v.avatar,alt:v.name}):u.jsx("span",{className:"story-avatar-text",children:j})}),v.isOwn&&u.jsx("span",{className:"story-plus-badge",children:"+"})]}),u.jsx("span",{className:"story-name",children:v.name}),v.online&&u.jsx("span",{className:"story-online-dot"})]},v.id)})}),u.jsx("style",{children:V4})]})}const V4=`
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
`,$h=10,pt=gi((t,e)=>({posts:[],isLoading:!1,isRefreshing:!1,hasMore:!0,page:0,newPostsCount:0,likedPostIds:new Set,savedPostIds:new Set,_channel:null,_engagementChannel:null,_commentChannel:null,setLikedPostIds:a=>t({likedPostIds:new Set(a)}),setSavedPostIds:a=>t({savedPostIds:new Set(a)}),fetchFeed:async({refresh:a=!1}={})=>{const{page:r,hasMore:o,isLoading:l,isRefreshing:d}=e();if(l||d||!a&&!o)return;t(a?{isRefreshing:!0}:{isLoading:!0});const h=a?0:r,p=h*$h,m=p+$h-1;try{const{data:y,error:v,count:x}=await $.from("posts").select(`
          *,
          likes_count:likes(count),
          comments_count:comments(count)
        `,{count:"exact"}).eq("is_deleted",!1).order("created_at",{ascending:!1}).range(p,m);if(v)throw v;const w=[...new Set((y||[]).map(z=>z.user_id).filter(Boolean))];let j={};if(w.length>0){const{data:z}=await $.from("profiles").select("id, username, display_name, avatar_url, is_verified").in("id",w);j=Object.fromEntries((z||[]).map(J=>[J.id,J]))}const E=Ge.getState().user;let T=e().likedPostIds,k=e().savedPostIds;if(E){const{data:z}=await $.from("likes").select("post_id").eq("user_id",E.id).in("post_id",(y||[]).map(Q=>Q.id).filter(Boolean));T=new Set((z||[]).map(Q=>Q.post_id));const{data:J}=await $.from("saved_posts").select("post_id").eq("user_id",E.id).in("post_id",(y||[]).map(Q=>Q.id).filter(Boolean));k=new Set((J||[]).map(Q=>Q.post_id))}const C=(y||[]).map(z=>{var J,Q,D,q;return{...z,profiles:j[z.user_id]||null,likes:((Q=(J=z.likes_count)==null?void 0:J[0])==null?void 0:Q.count)??0,comments:((q=(D=z.comments_count)==null?void 0:D[0])==null?void 0:q.count)??0,isLiked:T.has(z.id),saved:k.has(z.id)}}),N=p+$h<(x??0);t(a?{posts:C,hasMore:N,page:1,isRefreshing:!1,likedPostIds:T,savedPostIds:k}:z=>({posts:[...z.posts,...C],hasMore:N,page:h+1,isLoading:!1,likedPostIds:T,savedPostIds:k}))}catch(y){t({isLoading:!1,isRefreshing:!1}),console.error("fetchFeed error:",y)}},toggleLike:async a=>{var h,p;const r=Ge.getState().user;if(!r)throw new Error("Authentication required");const{likedPostIds:o}=e(),l=o.has(a),d=new Set(o);l?d.delete(a):d.add(a),t({likedPostIds:d}),e().updatePostInFeed(a,{likes:Math.max(0,(((h=e().posts.find(m=>m.id===a))==null?void 0:h.likes)||0)+(l?-1:1)),isLiked:!l});try{if(l){const{error:m}=await $.from("likes").delete().eq("post_id",a).eq("user_id",r.id);if(m)throw m}else{const{error:m}=await $.from("likes").insert({post_id:a,user_id:r.id});if(m)throw m}}catch(m){const y=new Set(o);throw t({likedPostIds:y}),e().updatePostInFeed(a,{likes:((p=e().posts.find(v=>v.id===a))==null?void 0:p.likes)??0,isLiked:l}),m}},toggleSave:async a=>{const r=Ge.getState().user;if(!r)throw new Error("Authentication required");const{savedPostIds:o}=e(),l=o.has(a),d=new Set(o);l?d.delete(a):d.add(a),t({savedPostIds:d}),e().updatePostInFeed(a,{saved:!l});try{if(l){const{error:h}=await $.from("saved_posts").delete().eq("user_id",r.id).eq("post_id",a);if(h)throw h}else{const{error:h}=await $.from("saved_posts").insert({user_id:r.id,post_id:a});if(h)throw h}}catch(h){const p=new Set(o);throw t({savedPostIds:p}),e().updatePostInFeed(a,{saved:l}),h}},addComment:async({postId:a,content:r,parentId:o=null})=>{var m;const l=Ge.getState().user;if(!l)throw new Error("Authentication required");const d={post_id:a,content:r,user_id:l.id};o&&(d.parent_id=o);const{data:h,error:p}=await $.from("comments").insert(d).select().single();if(p)throw p;try{const{data:y}=await $.from("profiles").select("id, username, display_name, avatar_url, is_verified").eq("id",h.user_id).single();h.profiles=y||null}catch{h.profiles=null}return e().updatePostInFeed(a,{comments:(((m=e().posts.find(y=>y.id===a))==null?void 0:m.comments)||0)+1}),h},refreshFeed:()=>e().fetchFeed({refresh:!0}),acknowledgeNewPosts:()=>{t({newPostsCount:0})},subscribeToPosts:()=>{const{_channel:a}=e();if(a)return;const r=$.channel("feed-store-realtime").on("postgres_changes",{event:"INSERT",schema:"public",table:"posts"},async o=>{var m,y,v,x;const{data:l,error:d}=await $.from("posts").select(`
              *,
              likes_count:likes(count),
              comments_count:comments(count)
            `).eq("id",o.new.id).single();if(d||!l)return;const{data:h}=await $.from("profiles").select("id, username, display_name, avatar_url, is_verified").eq("id",l.user_id).single(),p={...l,profiles:h||null,likes:((y=(m=l.likes_count)==null?void 0:m[0])==null?void 0:y.count)??0,comments:((x=(v=l.comments_count)==null?void 0:v[0])==null?void 0:x.count)??0,isLiked:!1,saved:!1};t(w=>w.posts.some(j=>j.id===p.id)?w:{posts:[p,...w.posts],newPostsCount:w.newPostsCount+1})}).subscribe();t({_channel:r})},subscribeToEngagement:()=>{if(e()._engagementChannel)return;const r=Ge.getState().user,o=$.channel("engagement-changes").on("postgres_changes",{event:"INSERT",schema:"public",table:"likes"},l=>{var h;const d=l.new.post_id;r&&l.new.user_id===r.id||e().updatePostInFeed(d,{likes:(((h=e().posts.find(p=>p.id===d))==null?void 0:h.likes)||0)+1})}).on("postgres_changes",{event:"DELETE",schema:"public",table:"likes"},l=>{var h;const d=l.old.post_id;r&&l.old.user_id===r.id||e().updatePostInFeed(d,{likes:Math.max(0,(((h=e().posts.find(p=>p.id===d))==null?void 0:h.likes)||0)-1)})}).subscribe();return t({_engagementChannel:o}),()=>{$.removeChannel(o),t({_engagementChannel:null})}},subscribeToComments:(a,r)=>{const o=$.channel(`comments-${a}`).on("postgres_changes",{event:"INSERT",schema:"public",table:"comments",filter:`post_id=eq.${a}`},async l=>{var p;let d=l.new;try{const{data:m}=await $.from("profiles").select("id, username, display_name, avatar_url, is_verified").eq("id",d.user_id).single();d={...d,profiles:m||null}}catch{d={...d,profiles:null}}r(d);const h=Ge.getState().user;h&&l.new.user_id===h.id||e().updatePostInFeed(a,{comments:(((p=e().posts.find(m=>m.id===a))==null?void 0:p.comments)||0)+1})}).on("postgres_changes",{event:"UPDATE",schema:"public",table:"comments",filter:`post_id=eq.${a}`},l=>{r({type:"UPDATE",comment:l.new})}).on("postgres_changes",{event:"DELETE",schema:"public",table:"comments",filter:`post_id=eq.${a}`},l=>{var d;r({type:"DELETE",commentId:l.old.id}),e().updatePostInFeed(a,{comments:Math.max(0,(((d=e().posts.find(h=>h.id===a))==null?void 0:d.comments)||0)-1)})}).subscribe();return()=>{$.removeChannel(o)}},updatePostInFeed:(a,r)=>{t(o=>({posts:o.posts.map(l=>l.id===a?{...l,...r}:l)}))},removePostOptimistic:a=>{t(r=>({posts:r.posts.filter(o=>o.id!==a)}))},unsubscribeEngagement:()=>{const{_engagementChannel:a}=e();a&&($.removeChannel(a),t({_engagementChannel:null}))},cleanup:()=>{const{_channel:a,_engagementChannel:r}=e();a&&$.removeChannel(a),r&&$.removeChannel(r),t({_channel:null,_engagementChannel:null})}})),fi=gi(t=>({createPost:async({content:e,image_url:a,video_url:r,type:o="text",audience:l="public",media:d=[]})=>{const{data:{user:h},error:p}=await $.auth.getUser();if(p||!h)throw new Error("Authentication required");const{data:m,error:y}=await $.from("posts").insert({content:e,image_url:a,video_url:r,type:o,audience:l,media:d,user_id:h.id}).select().single();if(y)throw y;try{const{data:v}=await $.from("profiles").select("id, username, display_name, avatar_url, is_verified").eq("id",m.user_id).single();m.profiles=v||null}catch{m.profiles=null}return m},uploadPostImage:async(e,a,r)=>{const o=e.name.split(".").pop(),d=`post-images/${`${a}/${Date.now()}_${Math.random().toString(36).slice(2)}.${o}`}`,{data:h,error:p}=await $.storage.from("post-images").upload(d,e,{cacheControl:"3600",upsert:!1});if(p)throw p;const{data:{publicUrl:m}}=$.storage.from("post-images").getPublicUrl(h.path);return{url:m,path:h.path}},deletePostImage:async e=>{const{error:a}=await $.storage.from("post-images").remove([e]);if(a)throw a},deletePost:async e=>{const{error:a}=await $.from("posts").update({is_deleted:!0}).eq("id",e);if(a)throw a;pt.getState().removePostOptimistic(e)},likePost:async e=>{var h;const{data:{user:a}}=await $.auth.getUser();if(!a)throw new Error("Not authenticated");const{error:r}=await $.from("likes").insert({post_id:e,user_id:a.id});if(r){if(r.code==="23505"){const p=pt.getState(),{likedPostIds:m}=p,y=new Set(m);y.add(e),p.updatePostInFeed(e,{likes:(((h=p.posts.find(v=>v.id===e))==null?void 0:h.likes)||0)+1,isLiked:!0}),p.setLikedPostIds(y);return}throw r}const o=pt.getState(),l=o.posts.find(p=>p.id===e);l&&o.updatePostInFeed(e,{likes:(l.likes||0)+1,isLiked:!0});const d=new Set(o.likedPostIds);d.add(e),o.setLikedPostIds(d)},unlikePost:async e=>{var d;const{data:{user:a}}=await $.auth.getUser();if(!a)throw new Error("Not authenticated");const{error:r}=await $.from("likes").delete().eq("post_id",e).eq("user_id",a.id);if(r)throw r;const o=pt.getState(),l=new Set(o.likedPostIds);l.delete(e),o.setLikedPostIds(l),o.updatePostInFeed(e,{likes:Math.max(0,(((d=o.posts.find(h=>h.id===e))==null?void 0:d.likes)||0)-1),isLiked:!1})},addComment:async({postId:e,content:a,parentId:r=null})=>{const o=Ge.getState().user;if(!o)throw new Error("Authentication required");const l={post_id:e,content:a,user_id:o.id};r&&(l.parent_id=r);const{data:d,error:h}=await $.from("comments").insert(l).select().single();if(h)throw h;try{const{data:y}=await $.from("profiles").select("id, username, display_name, avatar_url, is_verified").eq("id",d.user_id).single();d.profiles=y||null}catch{d.profiles=null}const p=pt.getState(),m=p.posts.find(y=>y.id===e);return m&&p.updatePostInFeed(e,{comments:(m.comments||0)+1}),d},deleteComment:async e=>{const{data:{user:a}}=await $.auth.getUser();if(!a)throw new Error("Not authenticated");const{error:r}=await $.from("comments").update({is_deleted:!0}).eq("id",e).eq("user_id",a.id);if(r)throw r},editComment:async(e,a)=>{const{data:{user:r}}=await $.auth.getUser();if(!r)throw new Error("Not authenticated");const{data:o,error:l}=await $.from("comments").update({content:a,is_edited:!0}).eq("id",e).eq("user_id",r.id).select().single();if(l)throw l;return o},fetchComments:async e=>{const{data:a,error:r}=await $.from("comments").select(`
        *,
        profiles:user_id (id, username, display_name, avatar_url, is_verified)
      `).eq("post_id",e).eq("is_deleted",!1).order("created_at",{ascending:!0});if(r)throw r;return a||[]},repostPost:async({postId:e,quoteText:a=null})=>{const{data:{user:r}}=await $.auth.getUser();if(!r)throw new Error("Not authenticated");const o={post_id:e,user_id:r.id};a&&(o.quote_text=a);const{data:l,error:d}=await $.from("reposts").insert(o).select().single();if(d)throw d;return l},undoRepost:async e=>{const{data:{user:a}}=await $.auth.getUser();if(!a)throw new Error("Not authenticated");const{error:r}=await $.from("reposts").delete().eq("post_id",e).eq("user_id",a.id);if(r)throw r},savePost:async e=>{const{data:{user:a}}=await $.auth.getUser();if(!a)throw new Error("Not authenticated");const{error:r}=await $.from("saved_posts").insert({user_id:a.id,post_id:e});if(r){if(r.code==="23505"){const d=pt.getState(),{savedPostIds:h}=d,p=new Set(h);p.add(e),d.setSavedPostIds(p),d.updatePostInFeed(e,{saved:!0});return}throw r}const o=pt.getState(),l=new Set(o.savedPostIds);l.add(e),o.setSavedPostIds(l),o.updatePostInFeed(e,{saved:!0})},unsavePost:async e=>{const{data:{user:a}}=await $.auth.getUser();if(!a)throw new Error("Not authenticated");const{error:r}=await $.from("saved_posts").delete().eq("user_id",a.id).eq("post_id",e);if(r)throw r;const o=pt.getState(),l=new Set(o.savedPostIds);l.delete(e),o.setSavedPostIds(l),o.updatePostInFeed(e,{saved:!1})},fetchSavedPostIds:async e=>{const{data:a,error:r}=await $.from("saved_posts").select("post_id").eq("user_id",e);if(r)throw r;return(a||[]).map(o=>o.post_id)},fetchLikedPostIds:async e=>{const{data:a,error:r}=await $.from("likes").select("post_id").eq("user_id",e);if(r)throw r;return(a||[]).map(o=>o.post_id)}}));let $4=0;const ho=gi((t,e)=>({activeModal:null,modalProps:{},toasts:[],openModal:(a,r={})=>{t({activeModal:a,modalProps:r})},closeModal:()=>{t({activeModal:null,modalProps:{}})},addToast:(a,r="info",o=3e3)=>{const l=++$4,d={id:l,message:a,type:r,duration:o};return t(h=>({toasts:[...h.toasts,d]})),o>0&&setTimeout(()=>{e().removeToast(l)},o),l},removeToast:a=>{t(r=>({toasts:r.toasts.filter(o=>o.id!==a)}))},clearToasts:()=>{t({toasts:[]})}}));function H4({post:t,onClose:e}){const[a,r]=S.useState([]),[o,l]=S.useState(""),[d,h]=S.useState(!0),[p,m]=S.useState(!1),[y,v]=S.useState(null),[x,w]=S.useState(""),[j,E]=S.useState(null),T=S.useRef(null),k=Ge(H=>H.user),C=pt(H=>H.subscribeToComments),N=pt(H=>H.addComment),z=S.useCallback(async()=>{try{const{data:H,error:X}=await $.from("comments").select(`
          *,
          profiles:user_id (id, username, display_name, avatar_url, is_verified)
        `).eq("post_id",t.id).eq("is_deleted",!1).order("created_at",{ascending:!0});if(X)throw X;r(H||[])}catch(H){console.error("Error loading comments:",H),E("Failed to load comments")}finally{h(!1)}},[t.id]);S.useEffect(()=>{z();const H=C(t.id,X=>{X.type==="UPDATE"?r(se=>se.map(oe=>oe.id===X.comment.id?{...oe,...X.comment}:oe)):X.type==="DELETE"?r(se=>se.filter(oe=>oe.id!==X.commentId)):r(se=>se.some(oe=>oe.id===X.id)?se:[...se,X])});return()=>{typeof H=="function"&&H()}},[t.id,z,C]),S.useEffect(()=>{T.current&&T.current.focus()},[]);const J=async H=>{if(H.preventDefault(),!(!o.trim()||p)){if(!k){E("Please sign in to comment");return}m(!0),E(null);try{const X=await N({postId:t.id,content:o.trim()});l(""),r(se=>[...se,X])}catch(X){E(X.message||"Failed to add comment")}finally{m(!1)}}},Q=async H=>{if(x.trim())try{const{data:X,error:se}=await $.from("comments").update({content:x.trim(),is_edited:!0}).eq("id",H).eq("user_id",k.id).select().single();if(se)throw se;r(oe=>oe.map(Se=>Se.id===H?{...Se,content:X.content,is_edited:X.is_edited}:Se)),v(null),w("")}catch(X){E(X.message||"Failed to edit comment")}},D=async H=>{if(confirm("Delete this comment?"))try{const{error:X}=await $.from("comments").update({is_deleted:!0}).eq("id",H).eq("user_id",k.id);if(X)throw X;r(se=>se.filter(oe=>oe.id!==H))}catch(X){E(X.message||"Failed to delete comment")}},q=H=>{const X=new Date(H),oe=new Date-X,Se=Math.floor(oe/6e4);if(Se<1)return"just now";if(Se<60)return`${Se}m ago`;const Ne=Math.floor(Se/60);if(Ne<24)return`${Ne}h ago`;const je=Math.floor(Ne/24);return je<7?`${je}d ago`:X.toLocaleDateString()};return u.jsxs("div",{className:"comment-modal-overlay",onClick:e,children:[u.jsxs("div",{className:"comment-modal",onClick:H=>H.stopPropagation(),children:[u.jsxs("div",{className:"comment-modal-header",children:[u.jsxs("h3",{children:["Comments (",t.comments??a.length,")"]}),u.jsx("button",{className:"comment-modal-close",onClick:e,children:u.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:u.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]}),u.jsx("div",{className:"comment-modal-body",children:d?u.jsx("div",{className:"comment-loading",children:"Loading comments..."}):a.length===0?u.jsx("div",{className:"comment-empty",children:"No comments yet. Be the first!"}):u.jsx("div",{className:"comment-list",children:a.map(H=>{var se,oe,Se,Ne,je;const X=k&&H.user_id===k.id;return u.jsxs("div",{className:"comment-item",children:[u.jsx("div",{className:"comment-avatar",children:(se=H.profiles)!=null&&se.avatar_url?u.jsx("img",{src:H.profiles.avatar_url,alt:""}):u.jsx("div",{className:"comment-avatar-placeholder",children:(((oe=H.profiles)==null?void 0:oe.display_name)||((Se=H.profiles)==null?void 0:Se.username)||"?")[0]})}),u.jsxs("div",{className:"comment-content",children:[u.jsxs("div",{className:"comment-meta",children:[u.jsx("span",{className:"comment-author",children:((Ne=H.profiles)==null?void 0:Ne.display_name)||((je=H.profiles)==null?void 0:je.username)||"Anonymous"}),u.jsx("span",{className:"comment-time",children:q(H.created_at)}),H.is_edited&&u.jsx("span",{className:"comment-edited",children:"(edited)"})]}),y===H.id?u.jsxs("div",{className:"comment-edit-form",children:[u.jsx("textarea",{value:x,onChange:M=>w(M.target.value),className:"comment-edit-input",rows:2}),u.jsxs("div",{className:"comment-edit-actions",children:[u.jsx("button",{onClick:()=>Q(H.id),className:"comment-save-btn",children:"Save"}),u.jsx("button",{onClick:()=>{v(null),w("")},className:"comment-cancel-btn",children:"Cancel"})]})]}):u.jsx("p",{className:"comment-text",children:H.content}),X&&y!==H.id&&u.jsxs("div",{className:"comment-actions",children:[u.jsx("button",{onClick:()=>{v(H.id),w(H.content)},className:"comment-action-btn",children:"Edit"}),u.jsx("button",{onClick:()=>D(H.id),className:"comment-action-btn comment-action-delete",children:"Delete"})]})]})]},H.id)})})}),u.jsxs("div",{className:"comment-modal-footer",children:[j&&u.jsx("div",{className:"comment-error",children:j}),u.jsxs("form",{className:"comment-form",onSubmit:J,children:[u.jsx("input",{ref:T,type:"text",value:o,onChange:H=>l(H.target.value),placeholder:k?"Write a comment...":"Sign in to comment",className:"comment-input",disabled:p||!k}),u.jsx("button",{type:"submit",className:"comment-submit-btn",disabled:!o.trim()||p||!k,children:p?"...":"Post"})]})]})]}),u.jsx("style",{children:`
        .comment-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }

        .comment-modal {
          background: var(--bg-card, #1a1a2e);
          border: 1px solid var(--border, rgba(255,255,255,0.08));
          border-radius: 20px 20px 0 0;
          width: 100%;
          max-width: 560px;
          max-height: 80vh;
          display: flex;
          flex-direction: column;
          animation: slideUp 0.25s ease;
          box-shadow: 0 -8px 32px rgba(0,0,0,0.4);
        }

        .comment-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 20px;
          border-bottom: 1px solid var(--border, rgba(255,255,255,0.08));
        }

        .comment-modal-header h3 {
          font-family: var(--font-body);
          font-size: 16px;
          font-weight: 600;
        }

        .comment-modal-close {
          background: none;
          border: none;
          color: var(--text-secondary, #888);
          cursor: pointer;
          padding: 4px;
          border-radius: 8px;
          transition: all 0.2s;
        }

        .comment-modal-close:hover {
          background: rgba(255,255,255,0.1);
          color: var(--text, #fff);
        }

        .comment-modal-body {
          flex: 1;
          overflow-y: auto;
          padding: 12px 0;
          min-height: 120px;
          max-height: 50vh;
        }

        .comment-loading, .comment-empty {
          text-align: center;
          padding: 40px 20px;
          color: var(--text-secondary, #888);
          font-size: 14px;
        }

        .comment-list {
          display: flex;
          flex-direction: column;
        }

        .comment-item {
          display: flex;
          gap: 10px;
          padding: 10px 20px;
          transition: background 0.15s;
        }

        .comment-item:hover {
          background: rgba(255,255,255,0.02);
        }

        .comment-avatar {
          flex-shrink: 0;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          overflow: hidden;
        }

        .comment-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .comment-avatar-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--accent, #ccff00), #aadd00);
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .comment-content {
          flex: 1;
          min-width: 0;
        }

        .comment-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 2px;
        }

        .comment-author {
          font-weight: 600;
          font-size: 13px;
          color: var(--text, #fff);
        }

        .comment-time {
          font-size: 11px;
          color: var(--text-secondary, #888);
        }

        .comment-edited {
          font-size: 11px;
          color: var(--text-secondary, #888);
          font-style: italic;
        }

        .comment-text {
          font-size: 14px;
          color: var(--text, #eee);
          line-height: 1.5;
          word-break: break-word;
        }

        .comment-actions {
          display: flex;
          gap: 12px;
          margin-top: 4px;
        }

        .comment-action-btn {
          background: none;
          border: none;
          color: var(--text-secondary, #888);
          font-size: 12px;
          cursor: pointer;
          padding: 2px 0;
          transition: color 0.2s;
        }

        .comment-action-btn:hover {
          color: var(--accent, #ccff00);
        }

        .comment-action-delete:hover {
          color: #ff4444;
        }

        .comment-edit-form {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .comment-edit-input {
          background: rgba(255,255,255,0.06);
          border: 1px solid var(--border, rgba(255,255,255,0.12));
          border-radius: 8px;
          padding: 8px 10px;
          color: var(--text, #fff);
          font-size: 13px;
          font-family: var(--font-body);
          resize: none;
          width: 100%;
        }

        .comment-edit-actions {
          display: flex;
          gap: 8px;
        }

        .comment-save-btn, .comment-cancel-btn {
          padding: 4px 12px;
          border-radius: 6px;
          font-size: 12px;
          cursor: pointer;
          border: none;
        }

        .comment-save-btn {
          background: var(--accent, #ccff00);
          color: #000;
        }

        .comment-cancel-btn {
          background: rgba(255,255,255,0.1);
          color: var(--text, #fff);
        }

        .comment-modal-footer {
          padding: 12px 20px 20px;
          border-top: 1px solid var(--border, rgba(255,255,255,0.08));
        }

        .comment-error {
          color: #ff4444;
          font-size: 12px;
          margin-bottom: 8px;
        }

        .comment-form {
          display: flex;
          gap: 10px;
        }

        .comment-input {
          flex: 1;
          background: rgba(255,255,255,0.06);
          border: 1px solid var(--border, rgba(255,255,255,0.10));
          border-radius: 24px;
          padding: 10px 16px;
          color: var(--text, #fff);
          font-size: 14px;
          font-family: var(--font-body);
          outline: none;
          transition: border-color 0.2s;
        }

        .comment-input:focus {
          border-color: var(--accent, #ccff00);
        }

        .comment-input::placeholder {
          color: var(--text-secondary, #666);
        }

        .comment-input:disabled {
          opacity: 0.5;
        }

        .comment-submit-btn {
          background: var(--accent, #ccff00);
          color: #000;
          border: none;
          padding: 10px 20px;
          border-radius: 24px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.2s;
          white-space: nowrap;
        }

        .comment-submit-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .comment-submit-btn:not(:disabled):hover {
          opacity: 0.85;
        }

        @media (min-width: 640px) {
          .comment-modal-overlay {
            align-items: center;
          }

          .comment-modal {
            border-radius: 20px;
            max-height: 600px;
          }
        }
      `})]})}function I4(t){const e=Date.now()-t,a=Math.floor(e/6e4);if(a<1)return"Just now";if(a<60)return`${a}m ago`;const r=Math.floor(a/60);if(r<24)return`${r}h ago`;const o=Math.floor(r/24);return o<7?`${o}d ago`:new Date(t).toLocaleDateString()}function Rb(t){return t>=1e6?(t/1e6).toFixed(1)+"M":t>=1e3?(t/1e3).toFixed(1)+"K":t.toString()}const Js={heart:t=>u.jsx("svg",{viewBox:"0 0 24 24",fill:t?"#ff4d6d":"none",stroke:t?"#ff4d6d":"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{filter:t?"drop-shadow(0 0 6px rgba(255,77,109,0.4))":"none"},children:u.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"})}),comment:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})}),share:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"18",cy:"5",r:"3"}),u.jsx("circle",{cx:"6",cy:"12",r:"3"}),u.jsx("circle",{cx:"18",cy:"19",r:"3"}),u.jsx("line",{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}),u.jsx("line",{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"})]}),bookmark:t=>u.jsx("svg",{viewBox:"0 0 24 24",fill:t?"#CCFF00":"none",stroke:t?"#CCFF00":"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"})}),dots:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"1"}),u.jsx("circle",{cx:"19",cy:"12",r:"1"}),u.jsx("circle",{cx:"5",cy:"12",r:"1"})]})};function yc({post:t}){const[e,a]=S.useState(t.liked),[r,o]=S.useState(t.saved),[l,d]=S.useState(t.likes),[h,p]=S.useState(0),[m,y]=S.useState(!1);S.useEffect(()=>{d(t.likes)},[t.likes]),S.useEffect(()=>{a(t.liked)},[t.liked]),S.useEffect(()=>{o(t.saved)},[t.saved]);const v=fi(C=>C.likePost),x=fi(C=>C.unlikePost),w=fi(C=>C.savePost),j=fi(C=>C.unsavePost),E=()=>{e?(a(!1),d(C=>C-1),x(t.id).catch(()=>{a(!0),d(C=>C+1)})):(a(!0),d(C=>C+1),p(C=>C+1),v(t.id).catch(()=>{a(!1),d(C=>C-1)}))},T=()=>{r?(o(!1),j(t.id).catch(()=>o(!0))):(o(!0),w(t.id).catch(()=>o(!1)))},k=C=>C.charAt(0).toUpperCase();return u.jsxs(we.div,{className:"feed-post",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:300,damping:25},children:[u.jsxs("div",{className:"post-header",children:[u.jsx("div",{className:"post-avatar",style:{background:t.avatarColor},children:u.jsx("span",{children:k(t.username)})}),u.jsxs("div",{className:"post-user-info",children:[u.jsx("span",{className:"post-username",children:t.username}),u.jsxs("span",{className:"post-handle",children:[t.handle," · ",I4(t.timestamp)]})]}),u.jsx("button",{className:"post-more-btn",children:Js.dots})]}),u.jsx("div",{className:"post-content",children:u.jsx("p",{children:t.content})}),t.images&&t.images.length>0&&u.jsx("div",{className:`post-images ${t.images.length>1?"multi":""}`,children:t.images.map((C,N)=>u.jsx(we.div,{className:"post-image-wrap",whileHover:{scale:1.01},transition:{type:"spring",stiffness:300,damping:20},children:u.jsx("img",{src:C,alt:`Post image ${N+1}`,loading:"lazy"})},N))}),u.jsxs("div",{className:"post-stats",children:[u.jsxs("span",{className:"post-stat",children:[u.jsx("span",{style:{color:e?"#ff4d6d":void 0},children:Rb(l)})," likes"]}),u.jsxs("span",{className:"post-stat",children:[Rb(t.comments)," comments"]})]}),u.jsxs("div",{className:"post-actions",children:[u.jsxs(we.button,{className:`post-action ${e?"liked":""}`,onClick:E,whileTap:{scale:.8},children:[u.jsx(we.span,{initial:e?{scale:.5}:!1,animate:{scale:1},transition:{type:"spring",stiffness:500,damping:15},className:"post-action-icon",children:Js.heart(e)},h),u.jsx("span",{children:"Like"})]}),u.jsxs("button",{className:"post-action",onClick:()=>{if(!Ge.getState().user){ho.getState().addToast("Please log in to comment","info");return}y(!0)},children:[u.jsx("span",{className:"post-action-icon",children:Js.comment}),u.jsx("span",{children:"Comment"})]}),u.jsxs("button",{className:"post-action",onClick:()=>{const C=`${window.location.origin}/post/${t.id}`;navigator.share?navigator.share({title:t.username,text:t.content,url:C}).catch(()=>{}):navigator.clipboard.writeText(C).then(()=>{ho.getState().addToast("Link copied to clipboard","success")}).catch(()=>{ho.getState().addToast("Failed to copy link","error")})},children:[u.jsx("span",{className:"post-action-icon",children:Js.share}),u.jsx("span",{children:"Share"})]}),u.jsxs(we.button,{className:`post-action ${r?"saved":""}`,onClick:T,whileTap:{scale:.8},children:[u.jsx("span",{className:"post-action-icon",children:Js.bookmark(r)}),u.jsx("span",{children:"Save"})]})]}),u.jsx("style",{children:q4}),m&&u.jsx(H4,{post:t,onClose:()=>y(!1)})]})}const q4=`
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
`;function F4({onClose:t}){const[e,a]=S.useState(""),[r,o]=S.useState(""),[l,d]=S.useState(!1),[h,p]=S.useState(""),m=Ge(k=>k.user),y=Ge(k=>k.profile),v=fi(k=>k.createPost),x=pt(k=>k.fetchFeed),w=S.useRef(null),j=async()=>{const k=e.trim();if(k){d(!0),p("");try{await v({content:k,image_url:r.trim()||null}),a(""),o(""),x({refresh:!0}),t&&t()}catch(C){p(C.message||"Failed to create post")}finally{d(!1)}}},E=(y==null?void 0:y.avatar_color)||"#CCFF00",T=(y==null?void 0:y.display_name)||(y==null?void 0:y.username)||(m==null?void 0:m.email)||"User";return u.jsxs(we.div,{className:"post-composer-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:k=>{k.target===k.currentTarget&&t&&t()},children:[u.jsxs(we.div,{className:"post-composer",initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},transition:{type:"spring",stiffness:300,damping:25},children:[u.jsxs("div",{className:"post-composer-header",children:[u.jsx("h3",{children:"Create Post"}),u.jsx("button",{className:"post-composer-close",onClick:t,children:"×"})]}),u.jsxs("div",{className:"post-composer-body",children:[u.jsx("div",{className:"post-composer-avatar",style:{background:E},children:T.charAt(0).toUpperCase()}),u.jsx("textarea",{ref:w,className:"post-composer-textarea",placeholder:"What's on your mind?",value:e,onChange:k=>a(k.target.value),maxLength:2e3,autoFocus:!0})]}),u.jsx("div",{className:"post-composer-image",children:u.jsx("input",{className:"post-composer-image-input",placeholder:"Add image URL (optional)",value:r,onChange:k=>o(k.target.value)})}),h&&u.jsx("p",{className:"post-composer-error",children:h}),u.jsxs("div",{className:"post-composer-footer",children:[u.jsxs("span",{className:"post-composer-count",children:[e.length,"/2000"]}),u.jsx("button",{className:"post-composer-submit",onClick:j,disabled:!e.trim()||l,children:l?"Posting...":"Post"})]})]}),u.jsx("style",{children:G4})]})}const G4=`
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
`;function Hh(){return u.jsxs("div",{className:"feed-post-skeleton",children:[u.jsxs("div",{className:"skeleton-header",children:[u.jsx("div",{className:"skeleton-circle"}),u.jsxs("div",{className:"skeleton-lines",children:[u.jsx("div",{className:"skeleton-line w-40"}),u.jsx("div",{className:"skeleton-line w-24"})]})]}),u.jsxs("div",{className:"skeleton-body",children:[u.jsx("div",{className:"skeleton-line w-100"}),u.jsx("div",{className:"skeleton-line w-80"})]}),u.jsx("div",{className:"skeleton-image"}),u.jsxs("div",{className:"skeleton-actions",children:[u.jsx("div",{className:"skeleton-line w-20"}),u.jsx("div",{className:"skeleton-line w-20"}),u.jsx("div",{className:"skeleton-line w-20"})]}),u.jsx("style",{children:K4})]})}const K4=`
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
`;function Y4(t,{threshold:e=.5,enabled:a=!0}={}){const r=S.useRef(null);S.useEffect(()=>{if(!a)return;const l=r.current;if(!l)return;const d=new IntersectionObserver(h=>{h[0].isIntersecting&&t()},{threshold:e});return d.observe(l),()=>d.disconnect()},[t,e,a]);const o=S.useCallback(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]);return{sentinelRef:r,scrollToTop:o}}function W4(){const t=pt(l=>l.newPostsCount),e=pt(l=>l.subscribeToPosts),a=pt(l=>l.acknowledgeNewPosts),r=pt(l=>l.subscribeToEngagement),o=Ge(l=>l.user);return S.useEffect(()=>{e()},[e]),S.useEffect(()=>{if(o){const l=r();return()=>{typeof l=="function"&&l()}}},[o,r]),{newPosts:t>0?Array.from({length:t}):[],postUpdates:{},clearNewPosts:a,feedEvents:[]}}const X4={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08}}},J4={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:100,damping:20}}},Ob=["#CCFF00","#FF6B6B","#4ECDC4","#A78BFA","#FFD93D","#6BCB77"];function Q4(t){const e=t.profiles||{},a=e.display_name||e.username||"user",r=typeof t.id=="string"?t.id:String(t.id??"");return typeof t.id!="string"&&t.id!=null&&console.warn("mapPost: post.id is not a string",{type:typeof t.id,value:t.id,post:t}),{id:t.id,username:a,handle:"@"+(e.username||"user"),avatarColor:Ob[(r.charCodeAt(0)||0)%Ob.length],timestamp:t.created_at?new Date(t.created_at).getTime():Date.now(),content:t.content||"",images:t.image_url?[t.image_url]:[],likes:t.likes??0,comments:t.comments??0,liked:t.isLiked??!1,saved:t.saved??!1}}function Z4(){const[t,e]=S.useState(!0),[a,r]=S.useState(!1),o=pt(T=>T.posts),l=pt(T=>T.isLoading),d=pt(T=>T.hasMore),h=pt(T=>T.fetchFeed),{newPosts:p,clearNewPosts:m}=W4();S.useEffect(()=>{h({refresh:!0}).then(()=>e(!1))},[h]);const y=S.useCallback(()=>{!l&&d&&h()},[l,d,h]),{sentinelRef:v,scrollToTop:x}=Y4(y,{enabled:!t&&d}),w=()=>{e(!0),h({refresh:!0}).then(()=>e(!1))},j=()=>{m(),w(),x()},E=S.useMemo(()=>o.map(Q4),[o]);return u.jsxs("div",{className:"feed-container",children:[u.jsxs("div",{className:"feed-header",children:[u.jsx("h1",{className:"feed-title",children:"Home"}),u.jsxs("div",{className:"feed-header-actions",children:[u.jsx("button",{className:"feed-compose-btn",onClick:()=>r(!0),"aria-label":"Create post",children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"18",height:"18",children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})}),u.jsx("button",{className:"feed-refresh-btn",onClick:w,"aria-label":"Refresh",children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("polyline",{points:"23 4 23 10 17 10"}),u.jsx("path",{d:"M20.49 15a9 9 0 11-2.12-9.36L23 10"})]})})]})]}),t?u.jsxs("div",{className:"feed-posts",children:[u.jsx(Hh,{}),u.jsx(Hh,{}),u.jsx(Hh,{})]}):u.jsxs(we.div,{className:"feed-posts",variants:X4,initial:"hidden",animate:"visible",children:[u.jsx(P4,{}),u.jsxs(bn,{mode:"popLayout",children:[p.length>0&&u.jsx(we.div,{className:"feed-new-posts-banner",initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},onClick:j,children:u.jsxs("span",{children:[p.length," new post",p.length>1?"s":""," available"]})},"new-posts-banner"),E.map(T=>u.jsx(we.div,{variants:J4,layout:!0,children:u.jsx(yc,{post:T})},T.id))]}),l&&u.jsxs("div",{className:"feed-loading-more",children:[u.jsx("div",{className:"feed-loading-dot"}),u.jsx("div",{className:"feed-loading-dot"}),u.jsx("div",{className:"feed-loading-dot"})]}),u.jsx("div",{ref:v,className:"feed-sentinel"}),!d&&!l&&E.length>0&&u.jsx("p",{className:"feed-end",children:"You're all caught up! 🎉"})]}),u.jsx(bn,{children:a&&u.jsx(F4,{onClose:()=>r(!1)})}),u.jsx("style",{children:`
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
      `})]})}const eR=gi((t,e)=>({onlineUserIds:new Set,setOnlineUsers:a=>{t({onlineUserIds:new Set(a)})},addOnlineUser:a=>{t(r=>{const o=new Set(r.onlineUserIds);return o.add(a),{onlineUserIds:o}})},removeOnlineUser:a=>{t(r=>{const o=new Set(r.onlineUserIds);return o.delete(a),{onlineUserIds:o}})},isOnline:a=>e().onlineUserIds.has(a)}));function tR(t){const[e,a]=S.useState(null),r=eR(l=>l.onlineUserIds),o=t?r.has(t):!1;return S.useEffect(()=>{if(!t)return;const l=async()=>{const{count:h}=await $.from("follows").select("id",{count:"exact",head:!0}).eq("following_id",t);h!==null&&a(h)};l();const d=$.channel(`profile-follows-${t}`).on("postgres_changes",{event:"*",schema:"public",table:"follows",filter:`following_id=eq.${t}`},()=>l()).subscribe();return()=>{$.removeChannel(d)}},[t]),{liveFollowerCount:e,isOnline:o}}const rc=gi((t,e)=>({profilesByUserId:{},followersByUserId:{},followingByUserId:{},isLoading:!1,fetchProfile:async a=>{const{profilesByUserId:r}=e();if(r[a])return r[a];t({isLoading:!0});try{const{data:o,error:l}=await $.from("profiles").select("*").eq("id",a).single();if(l)throw l;return t(d=>({profilesByUserId:{...d.profilesByUserId,[a]:o},isLoading:!1})),o}catch(o){return t({isLoading:!1}),console.error("Fetch profile error:",o.message),null}},fetchFollowers:async a=>{try{const{data:r,error:o}=await $.from("follows").select("follower_id").eq("following_id",a);if(o)throw o;const l=(r||[]).map(p=>p.follower_id);let d=[];if(l.length>0){const{data:p}=await $.from("profiles").select("id, username, display_name, avatar_url, is_verified").in("id",l);d=p||[]}const h=(r||[]).map(p=>({...p,profile:d.find(m=>m.id===p.follower_id)||null}));return t(p=>({followersByUserId:{...p.followersByUserId,[a]:h}})),h}catch(r){return console.error("Fetch followers error:",r.message),[]}},fetchFollowing:async a=>{try{const{data:r,error:o}=await $.from("follows").select("following_id").eq("follower_id",a);if(o)throw o;const l=(r||[]).map(p=>p.following_id);let d=[];if(l.length>0){const{data:p}=await $.from("profiles").select("id, username, display_name, avatar_url, is_verified").in("id",l);d=p||[]}const h=(r||[]).map(p=>({...p,profile:d.find(m=>m.id===p.following_id)||null}));return t(p=>({followingByUserId:{...p.followingByUserId,[a]:h}})),h}catch(r){return console.error("Fetch following error:",r.message),[]}},getFollowerCount:a=>{var o;const{followersByUserId:r}=e();return((o=r[a])==null?void 0:o.length)??0},followUser:async a=>{const r=Ge.getState().user;if(!r)throw new Error("Not authenticated");const{error:o}=await $.from("follows").insert({follower_id:r.id,following_id:a});if(o)throw o;t(l=>{const d=l.followersByUserId[a]||[];return{followersByUserId:{...l.followersByUserId,[a]:[...d,{follower_id:r.id}]}}})},unfollowUser:async a=>{const r=Ge.getState().user;if(!r)throw new Error("Not authenticated");const{error:o}=await $.from("follows").delete().eq("follower_id",r.id).eq("following_id",a);if(o)throw o;t(l=>{const d=l.followersByUserId[a]||[];return{followersByUserId:{...l.followersByUserId,[a]:d.filter(h=>h.follower_id!==r.id)}}})},isFollowing:a=>{const r=Ge.getState().user;if(!r)return!1;const{followersByUserId:o}=e();return(o[a]||[]).some(d=>d.follower_id===r.id)},updateProfile:async a=>{const{data:r,error:o}=await $.from("profiles").update(a).select().single();if(o)throw o;return t(l=>({profilesByUserId:{...l.profilesByUserId,[r.id]:r}})),r},updateProfileRealtime:a=>{t(r=>({profilesByUserId:{...r.profilesByUserId,[a.id]:a}}))}})),Ih=["#FF6B6B","#4ECDC4","#45B7D1","#96CEB4","#FFEAA7","#DDA0DD","#98D8C8","#F7DC6F","#BB8FCE","#85C1E9"],qh=t=>{if(typeof t!="string")return Ih[0];let e=0;for(let a=0;a<t.length;a++)e=t.charCodeAt(a)+((e<<5)-e);return Ih[Math.abs(e)%Ih.length]};function Fh(t){return t>=1e6?(t/1e6).toFixed(1)+"M":t>=1e3?(t/1e3).toFixed(1)+"K":t.toString()}function Db(){const{id:t}=NS(),[e,a]=S.useState("grid"),[r,o]=S.useState("posts"),l=cn(),[d,h]=S.useState(!1),[p,m]=S.useState(!1),[y,v]=S.useState(!1),[x,w]=S.useState(null),[j,E]=S.useState(null),[T,k]=S.useState(!1),[C,N]=S.useState([]),[z,J]=S.useState(!1),[Q,D]=S.useState({posts:0,followers:0,following:0}),[q,H]=S.useState([]),[X,se]=S.useState(!1),[oe,Se]=S.useState([]),[Ne,je]=S.useState(!1),[M,ne]=S.useState({avatar_url:"",cover_url:"",full_name:"",username:"",bio:"",website:""}),ie=S.useRef(null),ye=S.useRef(null),be=Ge(I=>I.profile),R=Ge(I=>I.user),G=Ge(I=>I.updateProfile),ee=!t||t===(R==null?void 0:R.id),te=t||(R==null?void 0:R.id),{liveFollowerCount:fe,isOnline:_e}=tR(te),Z=rc(I=>I.followUser),ge=rc(I=>I.unfollowUser),pe=rc(I=>I.fetchFollowers),tt=rc(I=>I.followersByUserId),$e=fi(I=>I.fetchSavedPostIds),Ke=fi(I=>I.fetchLikedPostIds),bt=S.useRef(new Set),Ee=S.useMemo(()=>{const I=ee?be:j;return I?{username:I.display_name||I.username||"Unknown",handle:`@${I.username||"unknown"}`,avatarUrl:I.avatar_url||null,bio:I.bio||"",website:I.website||"",posts:Q.posts,followers:fe??Q.followers,following:Q.following}:{username:"Loading...",handle:"@...",avatarUrl:null,bio:"",website:"",posts:"0",followers:0,following:0}},[ee,j,be,Q,fe]),ct=S.useMemo(()=>ee||!te?!1:(tt[te]||[]).some(de=>de.follower_id===(R==null?void 0:R.id)),[ee,te,tt,R]);S.useEffect(()=>{ee||!t||(k(!0),$.from("profiles").select("*").eq("id",t).single().then(({data:I,error:de})=>{if(de)throw de;E(I)}).catch(I=>console.warn("Failed to load user profile:",I.message)).finally(()=>k(!1)))},[t,ee]),S.useEffect(()=>{te&&(J(!0),$.from("posts").select("*").eq("user_id",te).eq("is_deleted",!1).order("created_at",{ascending:!1}).then(({data:I,error:de})=>{!de&&I&&N(I)}).finally(()=>J(!1)))},[te]),S.useEffect(()=>{if(!te)return;(async()=>{try{const[de,Je,Be]=await Promise.all([$.from("posts").select("id",{count:"exact",head:!0}).eq("user_id",te).eq("is_deleted",!1),$.from("follows").select("id",{count:"exact",head:!0}).eq("follower_id",te),$.from("follows").select("id",{count:"exact",head:!0}).eq("following_id",te)]);D({posts:de.count??0,following:Je.count??0,followers:Be.count??0})}catch(de){console.warn("Failed to fetch user stats:",de)}})()},[te]),S.useEffect(()=>{!te||ee||pe(te)},[te,ee,pe]),S.useEffect(()=>{if(!te||r!=="likes")return;let I=!1;return je(!0),Ke(te).then(async de=>{if(!de||de.length===0){I||Se([]);return}const{data:Je,error:Be}=await $.from("posts").select("*").in("id",de).eq("is_deleted",!1).order("created_at",{ascending:!1});if(Be)throw Be;if(!Je||Je.length===0){I||Se([]);return}const qt=[...new Set(Je.map(Re=>Re.user_id))],{data:Jt}=await $.from("profiles").select("id, username, display_name, avatar_url").in("id",qt),xt={};Jt&&Jt.forEach(Re=>{xt[Re.id]=Re});const Sn=Je.map(Re=>{const Dt=xt[Re.user_id]||{};return{id:Re.id,username:Dt.display_name||Dt.username||"Unknown",handle:`@${Dt.username||"unknown"}`,avatarColor:qh(Dt.username||""),content:Re.content||"",images:Re.image_url?[Re.image_url]:[],likes:Re.likes_count||Re.likes||0,comments:Re.comments_count||0,timestamp:Re.created_at?new Date(Re.created_at).getTime():Date.now(),liked:!0,saved:!1}});I||Se(Sn)}).catch(de=>console.warn("Failed to fetch liked posts:",de.message)).finally(()=>{I||je(!1)}),()=>{I=!0}},[te,r,Ke]),S.useEffect(()=>{if(!te||r!=="saved"||!ee)return;let I=!1;return se(!0),$e(te).then(async de=>{if(!de||de.length===0){I||(H([]),bt.current=new Set);return}bt.current=new Set(de);const{data:Je,error:Be}=await $.from("posts").select("*").in("id",de).eq("is_deleted",!1).order("created_at",{ascending:!1});if(Be)throw Be;if(!Je||Je.length===0){I||H([]);return}const qt=[...new Set(Je.map(Re=>Re.user_id))],{data:Jt}=await $.from("profiles").select("id, username, display_name, avatar_url").in("id",qt),xt={};Jt&&Jt.forEach(Re=>{xt[Re.id]=Re});const Sn=Je.map(Re=>{const Dt=xt[Re.user_id]||{};return{id:Re.id,username:Dt.display_name||Dt.username||"Unknown",handle:`@${Dt.username||"unknown"}`,avatarColor:qh(Dt.username||""),content:Re.content||"",images:Re.image_url?[Re.image_url]:[],likes:Re.likes_count||Re.likes||0,comments:Re.comments_count||0,timestamp:Re.created_at?new Date(Re.created_at).getTime():Date.now(),liked:!1,saved:!0}});I||H(Sn)}).catch(de=>console.warn("Failed to fetch saved posts:",de.message)).finally(()=>{I||se(!1)}),()=>{I=!0}},[te,r,ee,$e]);const wn=(I,de)=>{w({type:I,message:de}),setTimeout(()=>w(null),3e3)},Wi=async I=>{const{data:de}=await $.storage.listBuckets();if(de!=null&&de.some(Be=>Be.name===I))return!0;const{error:Je}=await $.storage.createBucket(I,{public:!0});return Je?(console.warn(`Could not auto-create bucket "${I}":`,Je.message),!1):!0},ca=async(I,de)=>{var Je,Be;if(!I)return null;m(!0);try{const qt=I.name.split(".").pop(),Jt=`${Date.now()}_${Math.random().toString(36).substring(2)}.${qt}`,{error:xt}=await $.storage.from(de).upload(Jt,I);if((Je=xt==null?void 0:xt.message)!=null&&Je.includes("bucket")||(Be=xt==null?void 0:xt.message)!=null&&Be.includes("Bucket")){if(!await Wi(de))return wn("error",`Storage bucket "${de}" not found. Create it in Supabase dashboard or run the migration SQL.`),null;const{error:Dt}=await $.storage.from(de).upload(Jt,I);if(Dt)throw Dt}else if(xt)throw xt;const{data:{publicUrl:Sn}}=$.storage.from(de).getPublicUrl(Jt);return Sn}catch(qt){return wn("error",qt.message||"Failed to upload image"),null}finally{m(!1)}},za=async()=>{v(!0);try{const I={};M.full_name&&(I.full_name=M.full_name),M.username&&(I.username=M.username),M.bio&&(I.bio=M.bio),M.website&&(I.website=M.website),M.avatar_url&&(I.avatar_url=M.avatar_url),M.cover_url&&(I.cover_url=M.cover_url),await G(I),wn("success","Profile updated successfully!"),h(!1)}catch(I){wn("error",I.message||"Failed to update profile")}finally{v(!1)}},vi=[{id:"posts",label:"Posts"},{id:"likes",label:"Likes"},...ee?[{id:"saved",label:"Saved"}]:[]];return u.jsxs(we.div,{className:"profile-page",initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[u.jsxs("div",{className:"profile-header",children:[u.jsxs("div",{className:"profile-cover",children:[u.jsx("div",{className:"profile-cover-bg"}),!ee&&u.jsx("button",{className:"profile-back-btn",onClick:()=>l(-1),"aria-label":"Go back",children:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"22",height:"22",children:u.jsx("polyline",{points:"15 18 9 12 15 6"})})})]}),u.jsxs("div",{className:"profile-info",children:[u.jsxs("div",{className:"profile-avatar-section",children:[u.jsxs("div",{className:"profile-avatar",style:{background:qh(Ee.username),position:"relative"},children:[Ee.avatarUrl?u.jsx("img",{src:Ee.avatarUrl,alt:Ee.username,className:"profile-avatar-img"}):u.jsx("span",{children:Ee.username.charAt(0).toUpperCase()}),u.jsx("span",{className:`profile-status-badge ${_e?"online":"offline"}`})]}),u.jsxs("div",{className:"profile-actions",children:[ee&&u.jsxs(u.Fragment,{children:[u.jsx(we.button,{className:"profile-settings-btn",onClick:()=>l("/settings"),"aria-label":"Settings",whileHover:{scale:1.05},whileTap:{scale:.92,rotate:15},transition:{type:"spring",stiffness:400,damping:17},children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"20",height:"20",children:[u.jsx("circle",{cx:"12",cy:"12",r:"3"}),u.jsx("path",{d:"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"})]})}),u.jsx(we.button,{className:"profile-edit-btn",onClick:()=>{be&&ne({avatar_url:be.avatar_url||"",cover_url:be.cover_url||"",full_name:be.full_name||"",username:be.username||"",bio:be.bio||"",website:be.website||""}),h(!0)},whileHover:{scale:1.02},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:17},children:"Edit Profile"})]}),!ee&&u.jsx(we.button,{className:`profile-follow-btn${ct?" following":""}`,onClick:()=>ct?ge(te):Z(te),whileHover:{scale:1.02},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:17},children:ct?"Following":"Follow"})]})]}),u.jsxs("div",{className:"profile-details",children:[u.jsx("h1",{className:"profile-name",children:Ee.username}),u.jsx("span",{className:"profile-handle",children:Ee.handle}),u.jsx("p",{className:"profile-bio",children:Ee.bio}),u.jsxs("a",{className:"profile-website",href:Ee.website?Ee.website.startsWith("http")?Ee.website:`https://${Ee.website}`:"#",target:"_blank",rel:"noopener noreferrer",children:[u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"14",height:"14",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),u.jsx("path",{d:"M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"})]}),Ee.website]})]}),u.jsxs("div",{className:"profile-stats",children:[u.jsxs("div",{className:"profile-stat",children:[u.jsx("span",{className:"profile-stat-value",children:Fh(Ee.posts)}),u.jsx("span",{className:"profile-stat-label",children:"Posts"})]}),u.jsxs("div",{className:"profile-stat",children:[u.jsx("span",{className:"profile-stat-value",children:Fh(fe||Ee.followers)}),u.jsx("span",{className:"profile-stat-label",children:"Followers"})]}),u.jsxs("div",{className:"profile-stat",children:[u.jsx("span",{className:"profile-stat-value",children:Fh(Ee.following)}),u.jsx("span",{className:"profile-stat-label",children:"Following"})]})]})]})]}),u.jsxs("div",{className:"profile-tabs",children:[vi.map(I=>u.jsxs("button",{className:`profile-tab ${r===I.id?"active":""}`,onClick:()=>o(I.id),children:[I.label,r===I.id&&u.jsx(we.div,{className:"profile-tab-underline",layoutId:"tab-underline"})]},I.id)),u.jsxs("div",{className:"profile-view-toggle",children:[u.jsx("button",{className:`view-btn ${e==="grid"?"active":""}`,onClick:()=>a("grid"),children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),u.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),u.jsx("rect",{x:"3",y:"14",width:"7",height:"7"}),u.jsx("rect",{x:"14",y:"14",width:"7",height:"7"})]})}),u.jsx("button",{className:`view-btn ${e==="list"?"active":""}`,onClick:()=>a("list"),children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),u.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),u.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),u.jsx("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),u.jsx("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),u.jsx("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]})})]})]}),u.jsxs(bn,{mode:"wait",children:[r==="posts"&&u.jsx(we.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:"profile-content",children:e==="grid"?u.jsx("div",{className:"profile-grid",children:C.length>0?C.map(I=>u.jsxs(we.div,{className:"profile-grid-item",whileHover:{scale:1.02},transition:{type:"spring",stiffness:300,damping:20},children:[I.image_url?u.jsx("img",{src:I.image_url,alt:"",loading:"lazy"}):u.jsx("div",{className:"grid-item-text",children:u.jsxs("p",{children:[I.content.substring(0,60),"..."]})}),u.jsx("div",{className:"grid-item-overlay",children:u.jsxs("span",{children:[I.likes_count||I.likes||0," ❤"]})})]},I.id)):u.jsx("div",{className:"profile-empty",children:u.jsx("p",{children:"No posts yet"})})}):u.jsx("div",{className:"profile-list",children:C.length>0?C.map(I=>u.jsx(yc,{post:I},I.id)):u.jsx("div",{className:"profile-empty",children:u.jsx("p",{children:"No posts yet"})})})},"posts"),r==="likes"&&u.jsx(we.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:"profile-content",children:Ne?u.jsx("div",{className:"profile-empty",children:u.jsx("p",{children:"Loading liked posts..."})}):e==="grid"?u.jsx("div",{className:"profile-grid",children:oe.length>0?oe.map(I=>{var de;return u.jsxs(we.div,{className:"profile-grid-item",whileHover:{scale:1.02},transition:{type:"spring",stiffness:300,damping:20},children:[(de=I.images)!=null&&de[0]?u.jsx("img",{src:I.images[0],alt:"",loading:"lazy"}):u.jsx("div",{className:"grid-item-text",children:u.jsxs("p",{children:[I.content.substring(0,60),"..."]})}),u.jsx("div",{className:"grid-item-overlay",children:u.jsxs("span",{children:[I.likes," ❤"]})})]},I.id)}):u.jsx("div",{className:"profile-empty",children:u.jsx("p",{children:"No liked posts yet"})})}):u.jsx("div",{className:"profile-list",children:oe.length>0?oe.map(I=>u.jsx(yc,{post:I},I.id)):u.jsx("div",{className:"profile-empty",children:u.jsx("p",{children:"No liked posts yet"})})})},"likes"),r==="saved"&&u.jsx(we.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:"profile-content",children:X?u.jsx("div",{className:"profile-empty",children:u.jsx("p",{children:"Loading saved posts..."})}):e==="grid"?u.jsx("div",{className:"profile-grid",children:q.length>0?q.map(I=>{var de;return u.jsxs(we.div,{className:"profile-grid-item",whileHover:{scale:1.02},transition:{type:"spring",stiffness:300,damping:20},children:[(de=I.images)!=null&&de[0]?u.jsx("img",{src:I.images[0],alt:"",loading:"lazy"}):u.jsx("div",{className:"grid-item-text",children:u.jsxs("p",{children:[I.content.substring(0,60),"..."]})}),u.jsx("div",{className:"grid-item-overlay",children:u.jsxs("span",{children:[I.likes," ❤"]})})]},I.id)}):u.jsx("div",{className:"profile-empty",children:u.jsx("p",{children:"No saved posts yet"})})}):u.jsx("div",{className:"profile-list",children:q.length>0?q.map(I=>u.jsx(yc,{post:I},I.id)):u.jsx("div",{className:"profile-empty",children:u.jsx("p",{children:"No saved posts yet"})})})},"saved")]}),u.jsx(bn,{children:d&&u.jsx(we.div,{className:"edit-modal-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>h(!1),children:u.jsxs(we.div,{className:"edit-modal",initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},transition:{type:"spring",stiffness:300,damping:25},onClick:I=>I.stopPropagation(),children:[u.jsxs("div",{className:"edit-modal-header",children:[u.jsx("h2",{children:"Edit Profile"}),u.jsx(we.button,{className:"edit-modal-close",onClick:()=>h(!1),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"20",height:"20",children:[u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),u.jsxs("div",{className:"edit-modal-body",children:[u.jsxs("div",{className:"edit-field",children:[u.jsx("label",{children:"Profile Picture"}),u.jsxs("div",{className:"image-upload-area",onClick:()=>{var I;return(I=ie.current)==null?void 0:I.click()},children:[M.avatar_url?u.jsx("img",{src:M.avatar_url,alt:"Avatar",className:"image-preview"}):u.jsxs("div",{className:"image-upload-placeholder",children:[u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"24",height:"24",children:[u.jsx("path",{d:"M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"}),u.jsx("circle",{cx:"12",cy:"13",r:"4"})]}),u.jsx("span",{children:"Tap to change"})]}),p&&u.jsx("div",{className:"image-upload-spinner"})]}),u.jsx("input",{ref:ie,type:"file",accept:"image/*",hidden:!0,onChange:async I=>{var Be;const de=(Be=I.target.files)==null?void 0:Be[0];if(!de)return;const Je=await ca(de,"avatars");Je&&ne(qt=>({...qt,avatar_url:Je}))}})]}),u.jsxs("div",{className:"edit-field",children:[u.jsx("label",{children:"Cover Image"}),u.jsx("div",{className:"cover-upload-area",onClick:()=>{var I;return(I=ye.current)==null?void 0:I.click()},children:M.cover_url?u.jsx("img",{src:M.cover_url,alt:"Cover",className:"cover-preview"}):u.jsxs("div",{className:"image-upload-placeholder",children:[u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"24",height:"24",children:[u.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),u.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),u.jsx("polyline",{points:"21 15 16 10 5 21"})]}),u.jsx("span",{children:"Tap to change cover"})]})}),u.jsx("input",{ref:ye,type:"file",accept:"image/*",hidden:!0,onChange:async I=>{var Be;const de=(Be=I.target.files)==null?void 0:Be[0];if(!de)return;const Je=await ca(de,"covers");Je&&ne(qt=>({...qt,cover_url:Je}))}})]}),u.jsxs("div",{className:"edit-field",children:[u.jsx("label",{children:"Name"}),u.jsx("input",{type:"text",value:M.full_name,onChange:I=>ne(de=>({...de,full_name:I.target.value})),placeholder:"Your full name"})]}),u.jsxs("div",{className:"edit-field",children:[u.jsx("label",{children:"Username"}),u.jsx("input",{type:"text",value:M.username,onChange:I=>ne(de=>({...de,username:I.target.value})),placeholder:"Your username"})]}),u.jsxs("div",{className:"edit-field",children:[u.jsx("label",{children:"Bio"}),u.jsx("textarea",{value:M.bio,onChange:I=>ne(de=>({...de,bio:I.target.value})),placeholder:"Tell your story",rows:3})]}),u.jsxs("div",{className:"edit-field",children:[u.jsx("label",{children:"Website"}),u.jsx("input",{type:"text",value:M.website,onChange:I=>ne(de=>({...de,website:I.target.value})),placeholder:"yourwebsite.com"})]})]}),u.jsxs("div",{className:"edit-modal-footer",children:[u.jsx(we.button,{className:"edit-btn-cancel",onClick:()=>h(!1),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Cancel"}),u.jsx(we.button,{className:"edit-btn-save",onClick:za,disabled:y,whileHover:{scale:1.02},whileTap:{scale:.98},children:y?"Saving...":"Save Changes"})]})]})})}),u.jsx(bn,{children:x&&u.jsxs(we.div,{className:`toast toast-${x.type}`,initial:{opacity:0,y:50,x:20},animate:{opacity:1,y:0,x:0},exit:{opacity:0,y:20,x:20},transition:{type:"spring",stiffness:300,damping:25},children:[x.type==="success"?u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"18",height:"18",children:[u.jsx("path",{d:"M22 11.08V12a10 10 0 11-5.93-9.14"}),u.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}):u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"18",height:"18",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),u.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),u.jsx("span",{children:x.message})]})}),u.jsx("style",{children:nR})]})}const nR=`
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
`,Qs={search:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"11",cy:"11",r:"8"}),u.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),users:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"9",cy:"7",r:"4"}),u.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),u.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),plus:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),hash:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"4",y1:"9",x2:"20",y2:"9"}),u.jsx("line",{x1:"4",y1:"15",x2:"20",y2:"15"}),u.jsx("line",{x1:"10",y1:"3",x2:"8",y2:"21"}),u.jsx("line",{x1:"16",y1:"3",x2:"14",y2:"21"})]})},aR=["All","Gaming","Art","Music","Tech","Photography","Fitness","Fashion"],iR=[{name:"Pixel Art Masters",members:"12.4k",category:"Art",desc:"A community for pixel art enthusiasts and digital artists.",color:"#ff6b6b"},{name:"Cyber Gamers",members:"8.7k",category:"Gaming",desc:"Discuss the latest games, strategies, and esports.",color:"#ffa502"},{name:"Synthwave Producers",members:"5.2k",category:"Music",desc:"Create and share synthwave, retrowave, and chill beats.",color:"#7bed9f"},{name:"Code Brigade",members:"15.3k",category:"Tech",desc:"Web dev, AI, open source — all things code.",color:"#70a1ff"},{name:"Lens Culture",members:"6.8k",category:"Photography",desc:"Share your best shots and photography techniques.",color:"#ff6348"},{name:"Neon Fitness",members:"4.1k",category:"Fitness",desc:"Push your limits with the neon fitness crew.",color:"#a29bfe"},{name:"Digital Canvas",members:"9.5k",category:"Art",desc:"Digital painting, 3D modeling, and concept art.",color:"#55efc4"},{name:"Vaporwave Lounge",members:"3.9k",category:"Music",desc:"Chill aesthetics, vaporwave, and lo-fi vibes.",color:"#fd79a8"}];function rR(){const[t,e]=S.useState("All"),[a,r]=S.useState(""),o=iR.filter(l=>{const d=t==="All"||l.category===t,h=l.name.toLowerCase().includes(a.toLowerCase())||l.desc.toLowerCase().includes(a.toLowerCase());return d&&h});return u.jsxs("div",{className:"page-enter",children:[u.jsxs("div",{className:"communities-page",children:[u.jsxs("div",{className:"page-header",children:[u.jsx("h1",{children:"Communities"}),u.jsx("p",{children:"Discover and join communities that match your interests"})]}),u.jsxs("div",{className:"search-bar glass",children:[Qs.search,u.jsx("input",{type:"text",placeholder:"Search communities...",value:a,onChange:l=>r(l.target.value)})]}),u.jsx("div",{className:"category-pills",children:aR.map(l=>u.jsxs("button",{className:`pill ${t===l?"active":""}`,onClick:()=>e(l),children:[l==="All"?null:u.jsx("span",{className:"pill-icon",children:Qs.hash}),l]},l))}),o.length===0?u.jsxs("div",{className:"empty-state glass",children:[Qs.search,u.jsx("h3",{children:"No communities found"}),u.jsx("p",{children:"Try adjusting your search or filter"})]}):u.jsxs("div",{className:"communities-grid",children:[o.map((l,d)=>u.jsxs("div",{className:"community-card glass",children:[u.jsxs("div",{className:"community-card-header",style:{background:`linear-gradient(135deg, ${l.color}22, ${l.color}44)`},children:[u.jsx("div",{className:"community-avatar",style:{background:l.color},children:l.name.charAt(0)}),u.jsx("span",{className:"community-category",children:l.category})]}),u.jsxs("div",{className:"community-card-body",children:[u.jsx("h3",{children:l.name}),u.jsx("p",{children:l.desc}),u.jsx("div",{className:"community-meta",children:u.jsxs("span",{children:[Qs.users," ",l.members," members"]})})]}),u.jsx("div",{className:"community-card-footer",children:u.jsx("button",{className:"join-community-btn",children:"Join Community"})})]},d)),u.jsxs("div",{className:"community-card create-card glass",children:[u.jsx("div",{className:"create-card-icon",children:Qs.plus}),u.jsx("h3",{children:"Create Community"}),u.jsx("p",{children:"Start your own community and bring people together"}),u.jsx("button",{className:"create-community-btn",children:"Get Started"})]})]})]}),u.jsx("style",{children:`
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
      `})]})}function Lb(t){return t>=1e6?(t/1e6).toFixed(1)+"M":t>=1e3?(t/1e3).toFixed(1)+"K":String(t)}function sR(){const[t,e]=S.useState([]),[a,r]=S.useState([]),[o,l]=S.useState(!0);return S.useEffect(()=>{const d=async()=>{try{const{data:p}=await $.from("posts").select("content, created_at").not("content","is",null).eq("is_deleted",!1).order("created_at",{ascending:!1}).limit(200),m={},y=/#(\w+)/gi;if(p)for(const x of p){let w;for(;(w=y.exec(x.content))!==null;){const j=w[1].toLowerCase();m[j]=(m[j]||0)+1}}const v=Object.entries(m).sort((x,w)=>w[1]-x[1]).slice(0,8).map(([x,w])=>({tag:x,posts:Lb(w)}));e(v)}catch(p){console.warn("Failed to fetch trends:",p)}},h=async()=>{try{const{data:p}=await $.from("follows").select("following_id");if(p&&p.length>0){const m={};p.forEach(v=>{m[v.following_id]=(m[v.following_id]||0)+1});const y=Object.entries(m).sort((v,x)=>x[1]-v[1]).slice(0,4).map(([v])=>v);if(y.length>0){const{data:v}=await $.from("profiles").select("id, username, display_name, avatar_url").in("id",y);if(v){const x={};v.forEach(j=>{x[j.id]=j});const w=y.map((j,E)=>{const T=x[j]||{};return{handle:`@${T.username||"user"}`,name:T.display_name||T.username||"User",avatarUrl:T.avatar_url||null,followers:Lb(m[j])}});r(w)}}}}catch(p){console.warn("Failed to fetch creators:",p)}};Promise.all([d(),h()]).finally(()=>l(!1))},[]),{trendData:t,trendingCreators:a,loading:o}}const oR=[{id:"for-you",label:"For You",icon:"✨"},{id:"trending",label:"Trending",icon:"🔥"},{id:"photos",label:"Photos",icon:"📷"},{id:"videos",label:"Videos",icon:"🎬"},{id:"technology",label:"Tech",icon:"💻"},{id:"gaming",label:"Gaming",icon:"🎮"},{id:"art",label:"Art",icon:"🎨"},{id:"music",label:"Music",icon:"🎵"}],lR=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"20",height:"20",children:[u.jsx("circle",{cx:"11",cy:"11",r:"8"}),u.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),cR=()=>u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"16",height:"16",children:u.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"})}),uR=()=>u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"16",height:"16",children:u.jsx("path",{d:"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"})}),dR=()=>u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"24",height:"24",children:u.jsx("path",{d:"M8 5v14l11-7z"})}),hR={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.04}}},fR={hidden:{opacity:0,y:20,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:100,damping:18}}};function pR(){const t=cn(),[e,a]=S.useState(!0),[r,o]=S.useState("for-you"),[l,d]=S.useState(""),[h,p]=S.useState(!1),{trendData:m}=sR(),y=S.useRef(null),v=S.useRef(null),x=S.useRef(null),[w,j]=S.useState({users:[],hashtags:[],posts:[]}),[E,T]=S.useState(!1),k=S.useRef(null),C=S.useCallback(async D=>{if(D.length<1){j({users:[],hashtags:[],posts:[]});return}T(!0);try{const q=`%${D}%`,[H,X]=await Promise.all([$.from("profiles").select("id, username, display_name, avatar_url, bio").or(`username.ilike.${q},display_name.ilike.${q}`).limit(5),$.from("posts").select("id, content, created_at, profiles!inner(id, username, display_name, avatar_url)").ilike("content",q).order("created_at",{ascending:!1}).limit(10)]),se=new Set,oe=[];if(X.data){const Se=/#(\w+)/gi;for(const Ne of X.data){let je;for(;(je=Se.exec(Ne.content))!==null;){const M=je[1].toLowerCase();!se.has(M)&&M.includes(D.toLowerCase())&&(se.add(M),oe.push({tag:M,posts:"—"}))}}}j({users:H.data||[],hashtags:oe.slice(0,5),posts:X.data||[]})}catch(q){console.warn("Search error:",q),j({users:[],hashtags:[],posts:[]})}finally{T(!1)}},[]);S.useEffect(()=>{if(k.current&&clearTimeout(k.current),!l.trim()){j({users:[],hashtags:[],posts:[]});return}return k.current=setTimeout(()=>C(l.trim()),300),()=>{k.current&&clearTimeout(k.current)}},[l,C]),S.useEffect(()=>{const D=setTimeout(()=>a(!1),1800);return()=>clearTimeout(D)},[]);const N=pt(D=>D.posts),z=pt(D=>D.fetchFeed),J=S.useMemo(()=>{if((N==null?void 0:N.length)>0){const D=["#CCFF00","#FF6B6B","#4ECDC4","#A78BFA","#FFD93D","#6BCB77"];return N.filter(q=>q.image_url||q.video_url).map((q,H)=>{var X,se;return{id:q.id,imageUrl:q.image_url||"https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600",username:((X=q.profiles)==null?void 0:X.username)||((se=q.profiles)==null?void 0:se.display_name)||"user",avatarColor:D[H%D.length],likes:q.likes??0,comments:q.comments??0,isVideo:!!q.video_url}})}return[]},[N]);S.useEffect(()=>{N!=null&&N.length||z()},[]),S.useEffect(()=>{const D=q=>{y.current&&!y.current.contains(q.target)&&p(!1)};return document.addEventListener("mousedown",D),()=>document.removeEventListener("mousedown",D)},[]);const Q=()=>u.jsx("div",{className:"explore-skeleton-grid",children:Array.from({length:6}).map((D,q)=>u.jsx("div",{className:"explore-skeleton-item",style:{height:q%3===0?280:q%3===1?200:240},children:u.jsx("div",{className:"explore-shimmer"})},q))});return u.jsxs("div",{className:"explore-page",children:[u.jsxs("div",{className:"explore-search-wrapper",ref:y,children:[u.jsxs("div",{className:`explore-search ${h?"explore-search-focused":""}`,children:[u.jsx(lR,{}),u.jsx("input",{type:"text",placeholder:"Search posts, creators, hashtags...",value:l,onChange:D=>d(D.target.value),onFocus:()=>p(!0)}),l&&u.jsx("button",{className:"explore-search-clear",onClick:()=>d(""),children:"✕"})]}),u.jsx(bn,{children:h&&l.trim()&&u.jsx(we.div,{className:"explore-suggestions",initial:{opacity:0,y:-8},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.2},children:l.trim()?E?u.jsx("div",{className:"explore-search-status",children:"Searching..."}):u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"explore-search-section",children:[u.jsx("div",{className:"explore-search-section-title",children:"Users"}),w.users.length>0?w.users.map((D,q)=>{var H,X;return u.jsxs(we.div,{className:"explore-suggestion-item",initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:q*.03},onClick:()=>t(`/profile/${D.id}`),style:{cursor:"pointer"},children:[u.jsx("span",{className:"explore-suggestion-icon",style:{background:D.avatar_url?`url(${D.avatar_url}) center/cover`:"var(--surface)",borderRadius:"50%",overflow:"hidden"},children:!D.avatar_url&&(((H=D.display_name)==null?void 0:H[0])||((X=D.username)==null?void 0:X[0])||"?")}),u.jsxs("div",{className:"explore-suggestion-info",children:[u.jsx("span",{className:"explore-suggestion-label",children:D.display_name||D.username}),u.jsxs("span",{className:"explore-suggestion-sub",children:["@",D.username]})]})]},`user-${D.id}`)}):u.jsx("div",{className:"explore-search-empty",children:"No users found"})]}),u.jsxs("div",{className:"explore-search-section",children:[u.jsx("div",{className:"explore-search-section-title",children:"Hashtags"}),w.hashtags.length>0?w.hashtags.map((D,q)=>u.jsxs(we.div,{className:"explore-suggestion-item",initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:q*.03},children:[u.jsx("span",{className:"explore-suggestion-icon",children:"#️⃣"}),u.jsxs("div",{className:"explore-suggestion-info",children:[u.jsxs("span",{className:"explore-suggestion-label",children:["#",D.tag]}),u.jsxs("span",{className:"explore-suggestion-sub",children:[D.posts," posts"]})]})]},`tag-${D.tag}`)):u.jsx("div",{className:"explore-search-empty",children:"No hashtags found"})]}),u.jsxs("div",{className:"explore-search-section",children:[u.jsx("div",{className:"explore-search-section-title",children:"Posts"}),w.posts.length>0?w.posts.map((D,q)=>{var H,X;return u.jsxs(we.div,{className:"explore-suggestion-item",initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:q*.03},children:[u.jsx("span",{className:"explore-suggestion-icon",children:"📄"}),u.jsxs("div",{className:"explore-suggestion-info",children:[u.jsx("span",{className:"explore-suggestion-label",children:D.content.length>60?D.content.slice(0,60)+"...":D.content}),u.jsxs("span",{className:"explore-suggestion-sub",children:["by @",((H=D.profiles)==null?void 0:H.username)||((X=D.profiles)==null?void 0:X.display_name)||"user"]})]})]},`post-${D.id}`)}):u.jsx("div",{className:"explore-search-empty",children:"No posts found"})]}),!E&&w.users.length===0&&w.hashtags.length===0&&w.posts.length===0&&u.jsxs("div",{className:"explore-search-empty explore-search-empty-all",children:['No results found for "',l,'"']})]}):null})})]}),u.jsx("div",{className:"explore-hashtags-wrapper",children:u.jsxs("div",{className:"explore-hashtags",ref:v,children:[(m||[]).map(D=>u.jsxs("button",{className:"explore-hashtag-pill",children:[u.jsx("span",{className:"explore-hashtag-sign",children:"#"}),D.tag,u.jsx("span",{className:"explore-hashtag-count",children:D.posts})]},D.tag)),(!m||m.length===0)&&u.jsx("div",{className:"explore-search-empty",children:"No trends available yet"})]})}),u.jsx("div",{className:"explore-tabs-wrapper",children:u.jsxs("div",{className:"explore-tabs",ref:x,children:[oR.map(D=>u.jsxs("button",{className:`explore-tab ${r===D.id?"explore-tab-active":""}`,onClick:()=>o(D.id),children:[u.jsx("span",{className:"explore-tab-icon",children:D.icon}),u.jsx("span",{className:"explore-tab-label",children:D.label})]},D.id)),u.jsx(we.div,{className:"explore-tab-indicator",layoutId:"active-tab",transition:{type:"spring",stiffness:400,damping:30}})]})}),u.jsx("div",{className:"explore-content",children:u.jsx("div",{className:"explore-grid-section",children:e?u.jsx(Q,{}):u.jsx(we.div,{className:"explore-masonry",variants:hR,initial:"hidden",animate:"visible",children:u.jsx(bn,{mode:"popLayout",children:J.map(D=>u.jsx(we.div,{className:"explore-masonry-item",variants:fR,layout:!0,exit:{opacity:0,scale:.9,transition:{duration:.2}},children:u.jsxs("div",{className:"explore-masonry-img-wrap",children:[u.jsx("img",{src:D.imageUrl,alt:`by ${D.username}`,loading:"lazy"}),D.isVideo&&u.jsx("div",{className:"explore-video-badge",children:u.jsx(dR,{})}),u.jsxs("div",{className:"explore-masonry-overlay",children:[u.jsxs("div",{className:"explore-masonry-stats",children:[u.jsxs("span",{children:[u.jsx(cR,{})," ",D.likes>=1e3?`${(D.likes/1e3).toFixed(1)}K`:D.likes]}),u.jsxs("span",{children:[u.jsx(uR,{})," ",D.comments]})]}),u.jsxs("div",{className:"explore-masonry-creator",children:[u.jsx("span",{className:"explore-masonry-avatar",style:{background:D.avatarColor},children:D.username.charAt(0)}),u.jsx("span",{className:"explore-masonry-username",children:D.username})]})]})]})},D.id))})},r)})}),u.jsx("style",{children:`
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
      `})]})}function mR(){const t=Ge(p=>p.user),e=di(p=>p.notifications),a=di(p=>p.unreadCount),r=di(p=>p.fetchNotifications),o=di(p=>p.markAllAsRead),l=di(p=>p.addNotificationRealtime),[d,h]=S.useState([]);return S.useEffect(()=>{r()},[r]),S.useEffect(()=>{if(!t)return;const p=$.channel("realtime-notifications").on("postgres_changes",{event:"INSERT",schema:"public",table:"notifications",filter:`user_id=eq.${t.id}`},async m=>{const{data:y,error:v}=await $.from("notifications").select("*, actor:actor_id (id, username, display_name, avatar_url)").eq("id",m.new.id).single();v||!y||(h(x=>x.some(w=>w.id===y.id)?x:[y,...x]),l(y))}).subscribe();return()=>{$.removeChannel(p)}},[t,l]),{liveNotifications:d,unreadCount:a,markAllAsRead:o,notificationEvents:e}}const La={heartFilled:u.jsx("svg",{viewBox:"0 0 24 24",fill:"#ff6464",stroke:"#ff6464",strokeWidth:"2",children:u.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"})}),user:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),messageCircle:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"})}),users:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"9",cy:"7",r:"4"}),u.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),u.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),checkAll:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("polyline",{points:"9 11 12 14 22 4"}),u.jsx("path",{d:"M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"}),u.jsx("polyline",{points:"9 11 12 14 22 4"})]}),bellOff:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M13.73 21a2 2 0 01-3.46 0"}),u.jsx("path",{d:"M18.63 13A17.89 17.89 0 0118 8"}),u.jsx("path",{d:"M6.26 6.26A5.86 5.86 0 006 8c0 7-3 9-3 9h14"}),u.jsx("path",{d:"M18 8a6 6 0 00-9.33-5"}),u.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}),tag:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"}),u.jsx("line",{x1:"7",y1:"7",x2:"7.01",y2:"7"})]})},Mb=t=>{const e=new Date(t),r=new Date-e,o=Math.floor(r/6e4),l=Math.floor(r/36e5),d=Math.floor(r/864e5);return o<1?"Just now":o<60?`${o}m ago`:l<24?`${l}h ago`:d<7?`${d}d ago`:e.toLocaleDateString()},zb=t=>{var a,r;const e=((a=t.actor)==null?void 0:a.display_name)||((r=t.actor)==null?void 0:r.username)||"Someone";switch(t.type){case"like":return`${e} liked your post`;case"follow":return`${e} started following you`;case"comment":return`${e} commented on your post`;case"mention":return`${e} mentioned you`;case"message":return`${e} sent you a message`;case"invite":return`${e} invited you to join`;default:return`${e} interacted with you`}},Ub=t=>({like:La.heartFilled,follow:La.user,comment:La.messageCircle,mention:La.tag,message:La.messageCircle,invite:La.users})[t]||La.heartFilled;function gR(){const{liveNotifications:t=[],unreadCount:e,markAllAsRead:a}=mR(),[r,o]=S.useState(!1),l=a,d=t.filter(p=>{const m=new Date(p.created_at);return new Date-m<864e5}),h=t.filter(p=>{const m=new Date(p.created_at);return new Date-m>=864e5});return r||t.length===0?u.jsxs("div",{className:"page-enter",children:[u.jsx("div",{className:"notifications-page",children:u.jsxs("div",{className:"empty-state glass",children:[u.jsx("div",{className:"empty-icon",children:La.bellOff}),u.jsx("h3",{children:"All caught up!"}),u.jsx("p",{children:"No new notifications. You're up to date."})]})}),u.jsx("style",{children:Bb})]}):u.jsxs("div",{className:"page-enter",children:[u.jsxs("div",{className:"notifications-page",children:[u.jsxs("div",{className:"page-header",children:[u.jsxs("div",{className:"page-header-left",children:[u.jsx("h1",{children:"Notifications"}),e>0&&u.jsx("span",{className:"unread-badge",children:e})]}),u.jsxs("button",{className:"mark-all-btn",onClick:l,disabled:e===0,children:[La.checkAll," Mark all as read"]})]}),d.length>0&&u.jsxs("div",{className:"notif-section",children:[u.jsx("h2",{className:"notif-section-title",children:"Today"}),u.jsx("div",{className:"notif-list",children:u.jsx(bn,{mode:"popLayout",children:d.map((p,m)=>u.jsxs(we.div,{layout:!0,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{type:"spring",stiffness:300,damping:25},className:`notif-item glass ${p.is_read?"notif-read":""}`,children:[u.jsx("div",{className:"notif-icon",style:{background:p.is_read?"var(--surface)":"color-mix(in srgb, var(--accent) 10%, transparent)"},children:Ub(p.type)}),u.jsxs("div",{className:"notif-content",children:[u.jsx("p",{className:"notif-text",children:zb(p)}),u.jsx("span",{className:"notif-time",children:Mb(p.created_at)})]}),!p.is_read&&u.jsx("div",{className:"notif-dot"})]},`today-${p.id||m}`))})})]}),u.jsxs("div",{className:"notif-section",children:[u.jsx("h2",{className:"notif-section-title",children:"Earlier"}),u.jsx("div",{className:"notif-list",children:u.jsx(bn,{mode:"popLayout",children:h.map((p,m)=>u.jsxs(we.div,{layout:!0,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,x:20},transition:{duration:.2},className:`notif-item glass ${p.is_read?"notif-read":""}`,children:[u.jsx("div",{className:"notif-icon",style:{background:p.is_read?"var(--surface)":"color-mix(in srgb, var(--accent) 10%, transparent)"},children:Ub(p.type)}),u.jsxs("div",{className:"notif-content",children:[u.jsx("p",{className:"notif-text",children:zb(p)}),u.jsx("span",{className:"notif-time",children:Mb(p.created_at)})]}),!p.is_read&&u.jsx("div",{className:"notif-dot"})]},`earlier-${p.id||m}`))})})]})]}),u.jsx("style",{children:Bb})]})}const Bb=`
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
`,Pb=gi(t=>({metrics:null,isLoading:!1,dateRange:"7d",fetchMetrics:async(e="7d")=>{t({isLoading:!0,dateRange:e});const a=new Date;let r;switch(e){case"24h":r=new Date(a-1440*60*1e3);break;case"7d":r=new Date(a-10080*60*1e3);break;case"30d":r=new Date(a-720*60*60*1e3);break;case"90d":r=new Date(a-2160*60*60*1e3);break;default:r=new Date(a-10080*60*1e3)}try{const[o,l,d,h]=await Promise.allSettled([$.from("posts").select("id",{count:"exact",head:!0}).gte("created_at",r.toISOString()),$.from("likes").select("id",{count:"exact",head:!0}).gte("created_at",r.toISOString()),$.from("comments").select("id",{count:"exact",head:!0}).gte("created_at",r.toISOString()),$.from("follows").select("id",{count:"exact",head:!0}).gte("created_at",r.toISOString())]),p={posts:o.status==="fulfilled"?o.value.count??0:0,likes:l.status==="fulfilled"?l.value.count??0:0,comments:d.status==="fulfilled"?d.value.count??0:0,follows:h.status==="fulfilled"?h.value.count??0:0};t({metrics:p,isLoading:!1})}catch(o){t({isLoading:!1}),console.error("Fetch metrics error:",o.message)}},getMetricHistory:async(e="posts",a="7d")=>{const r=new Date;let o;switch(a){case"24h":o=new Date(r-1440*60*1e3);break;case"7d":o=new Date(r-10080*60*1e3);break;case"30d":o=new Date(r-720*60*60*1e3);break;case"90d":o=new Date(r-2160*60*60*1e3);break;default:o=new Date(r-10080*60*1e3)}const d={posts:"posts",likes:"likes",comments:"comments",follows:"follows"}[e];if(!d)return[];try{const{data:h,error:p}=await $.from(d).select("created_at").gte("created_at",o.toISOString()).order("created_at",{ascending:!0});if(p)throw p;const m={},y=a==="24h"?3600*1e3:1440*60*1e3;for(const v of h||[]){const w=new Date(Math.floor(new Date(v.created_at).getTime()/y)*y).toISOString();m[w]=(m[w]||0)+1}return Object.entries(m).map(([v,x])=>({date:v,value:x}))}catch(h){return console.error(`Fetch ${e} history error:`,h.message),[]}}}));function yR(){const t=Pb(a=>a.metrics),e=Pb(a=>a.fetchMetrics);return S.useEffect(()=>{t||e()},[t,e]),{analyticsData:t}}const Vb={connecting:{color:"#fbbf24",label:"Connecting...",pulse:!0},connected:{color:"#22c55e",label:"Connected",pulse:!1},disconnected:{color:"#ef4444",label:"Disconnected",pulse:!1},reconnecting:{color:"#f97316",label:"Reconnecting...",pulse:!0}};function S1({variant:t="sidebar"}){const[e,a]=S.useState(!1),r=S.useRef(null);S.useEffect(()=>()=>clearTimeout(r.current),[]);const{connectionStatus:o,isFallbackMode:l}=window.__FRAMEX_REALTIME__||{connectionStatus:"connecting",isFallbackMode:!0};S.useEffect(()=>{a(!0),clearTimeout(r.current),o==="connected"&&(r.current=setTimeout(()=>a(!1),3e3))},[o]);const d=Vb[o]||Vb.connecting;return t==="sidebar"?u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",cursor:"pointer",position:"relative"},title:`${d.label}${l?" (Simulated)":""}`,children:[u.jsx("span",{style:{width:8,height:8,borderRadius:"50%",backgroundColor:d.color,boxShadow:d.pulse?`0 0 6px ${d.color}`:"none",animation:d.pulse?"connectionPulse 1.5s ease-in-out infinite":"none",flexShrink:0}}),u.jsx("span",{style:{fontSize:11,color:"var(--text-secondary, rgba(255,255,255,0.4))",fontFamily:"monospace"},children:d.label}),l&&u.jsx("span",{style:{fontSize:9,padding:"1px 5px",borderRadius:4,backgroundColor:"var(--surface, rgba(255,255,255,0.05))",color:"var(--text-secondary, rgba(255,255,255,0.4))"},children:"SIM"})]}):u.jsx("div",{style:{position:"relative",width:20,height:20,display:"flex",alignItems:"center",justifyContent:"center"},title:`${d.label}${l?" (Simulated)":""}`,children:u.jsx("span",{style:{width:6,height:6,borderRadius:"50%",backgroundColor:d.color,boxShadow:d.pulse?`0 0 6px ${d.color}`:"none",animation:d.pulse?"connectionPulse 1.5s ease-in-out infinite":"none"}})})}const vR={liveViewers:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),u.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),activeUsers:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"9",cy:"7",r:"4"}),u.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),u.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),totalUsers:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("path",{d:"M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"9",cy:"7",r:"4"}),u.jsx("path",{d:"M22 21v-2a4 4 0 00-3-3.87"}),u.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),postsPerMinute:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),u.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),u.jsx("line",{x1:"9",y1:"21",x2:"9",y2:"9"})]}),engagementRate:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:u.jsx("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})}),dailyActiveUsers:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),u.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),u.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),u.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),newSignupsToday:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("path",{d:"M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"8.5",cy:"7",r:"4"}),u.jsx("line",{x1:"20",y1:"8",x2:"20",y2:"14"}),u.jsx("line",{x1:"23",y1:"11",x2:"17",y2:"11"})]}),avgSessionDuration:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("polyline",{points:"12 6 12 12 16 14"})]})},bR={liveViewers:"Live Viewers",activeUsers:"Active Users",totalUsers:"Total Users",postsPerMinute:"Posts / Min",engagementRate:"Engagement Rate",dailyActiveUsers:"DAU",newSignupsToday:"New Signups",avgSessionDuration:"Avg Session"},xR={liveViewers:"#CCFF00",activeUsers:"#60a5fa",totalUsers:"#a78bfa",postsPerMinute:"#f472b6",engagementRate:"#34d399",dailyActiveUsers:"#fbbf24",newSignupsToday:"#fb923c",avgSessionDuration:"#22d3ee"};function wR({value:t,color:e}){const a=Array.from({length:20},(o,l)=>{const d=t*(1+(Math.random()-.5)*.4);return{x:l*5,y:30-d/100*25}}),r=a.map((o,l)=>`${l===0?"M":"L"}${o.x},${o.y}`).join(" ");return u.jsxs("svg",{width:"100",height:"30",style:{flexShrink:0},children:[u.jsx("path",{d:r,fill:"none",stroke:e,strokeWidth:"1.5",opacity:"0.6"}),a.map((o,l)=>u.jsx("circle",{cx:o.x,cy:o.y,r:"1.5",fill:e,opacity:"0.4"},l))]})}function $b({metricKey:t,metric:e,index:a}){var d,h;const r=xR[t]||"#CCFF00",o=typeof e.current=="number"?e.current.toLocaleString():e.current,l=(h=(d=e.change)==null?void 0:d.startsWith)==null?void 0:h.call(d,"+");return u.jsxs(we.div,{className:"analytics-card glass",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:a*.05,type:"spring",stiffness:100},children:[u.jsxs("div",{className:"analytics-card-header",children:[u.jsx("div",{className:"analytics-card-icon",style:{background:`${r}15`,color:r},children:vR[t]}),u.jsx("span",{className:"analytics-card-change",style:{color:l?"#34d399":"#f87171"},children:e.change})]}),u.jsx("div",{className:"analytics-card-value",children:o}),u.jsx("div",{className:"analytics-card-label",children:bR[t]}),u.jsx(wR,{value:typeof e.current=="number"?e.current:parseInt(e.current)||50,color:r})]})}function SR(){const{analyticsData:t}=yR(),[e,a]=S.useState("1h"),r=Object.entries(t),o=r.slice(0,4),l=r.slice(4);return u.jsxs("div",{className:"page-enter",children:[u.jsxs("div",{className:"analytics-dashboard",children:[u.jsxs("div",{className:"analytics-header",children:[u.jsxs("div",{children:[u.jsx("h1",{className:"analytics-title",children:"Live Analytics"}),u.jsx("p",{className:"analytics-subtitle",children:"Real-time dashboard metrics"})]}),u.jsxs("div",{className:"analytics-header-right",children:[u.jsx(S1,{variant:"sidebar"}),u.jsx("div",{className:"analytics-time-selector",children:["1h","24h","7d","30d"].map(d=>u.jsx("button",{className:`analytics-time-btn ${e===d?"active":""}`,onClick:()=>a(d),children:d},d))})]})]}),u.jsx("div",{className:"analytics-primary-grid",children:o.map(([d,h],p)=>u.jsx($b,{metricKey:d,metric:h,index:p},d))}),u.jsx("div",{className:"analytics-secondary-grid",children:l.map(([d,h],p)=>u.jsx($b,{metricKey:d,metric:h,index:p+4},d))}),u.jsxs("div",{className:"analytics-footer glass",children:[u.jsx("div",{className:"analytics-footer-dot"}),u.jsx("span",{children:"All metrics updating in real-time • Auto-refresh enabled"})]})]}),u.jsx("style",{children:jR})]})}const jR=`
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
`,j1=S.createContext(),Hb="framex-theme",_R={"--bg":"#08080f","--bg-alt":"#0c0c18","--text":"#ffffff","--text-secondary":"rgba(255,255,255,0.4)","--surface":"rgba(255,255,255,0.05)","--surface-hover":"rgba(255,255,255,0.10)","--border":"rgba(255,255,255,0.08)","--accent":"#CCFF00","--accent-text":"#08080f","--danger":"#ff4d4d","--glass-bg":"rgba(255,255,255,0.05)","--glass-border":"rgba(255,255,255,0.08)"},kR={"--bg":"#ffffff","--bg-alt":"#f5f5f7","--text":"#111111","--text-secondary":"rgba(0,0,0,0.45)","--surface":"rgba(0,0,0,0.03)","--surface-hover":"rgba(0,0,0,0.06)","--border":"rgba(0,0,0,0.08)","--accent":"#a0cc00","--accent-text":"#ffffff","--danger":"#e03030","--glass-bg":"rgba(255,255,255,0.7)","--glass-border":"rgba(0,0,0,0.06)"};function Ib(t){const e=t==="light"?kR:_R,a=document.documentElement;Object.entries(e).forEach(([r,o])=>a.style.setProperty(r,o)),a.setAttribute("data-theme",t)}function Gh(){return typeof window>"u"?"dark":window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}function ER({children:t}){const[e,a]=S.useState(()=>{try{const h=localStorage.getItem(Hb);if(h==="dark"||h==="light"||h==="system")return h}catch{}return"dark"}),[r,o]=S.useState(()=>e==="system"?Gh():e),l=S.useCallback(h=>{a(h);try{localStorage.setItem(Hb,h)}catch{}},[]),d=Xt();return S.useEffect(()=>{d.pathname==="/"?Ib("dark"):Ib(r)},[r,d.pathname]),S.useEffect(()=>{o(e==="system"?Gh():e)},[e]),S.useEffect(()=>{if(e!=="system")return;const h=window.matchMedia("(prefers-color-scheme: dark)"),p=()=>o(Gh());return h.addEventListener("change",p),()=>h.removeEventListener("change",p)},[e]),S.useEffect(()=>{const h=document.createElement("style");h.textContent=`
      *, *::before, *::after {
        transition: background-color 0.3s ease, color 0.3s ease,
                    border-color 0.3s ease, box-shadow 0.3s ease,
                    backdrop-filter 0.3s ease !important;
      }
    `,h.id="theme-transition-style";const p=document.getElementById("theme-transition-style");p&&p.remove(),document.head.appendChild(h);const m=setTimeout(()=>{const y=document.getElementById("theme-transition-style");y&&y.remove()},400);return()=>{clearTimeout(m);const y=document.getElementById("theme-transition-style");y&&y.remove()}},[r]),u.jsx(j1.Provider,{value:{theme:e,setTheme:l,resolvedTheme:r},children:t})}function TR(){const t=S.useContext(j1);if(!t)throw new Error("useTheme must be used within ThemeProvider");return t}const ln={dark:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"})}),light:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"5"}),u.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),u.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),u.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),u.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),u.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),u.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),u.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),u.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),system:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),u.jsx("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),u.jsx("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]}),user:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),lock:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),u.jsx("path",{d:"M7 11V7a5 5 0 0110 0v4"})]}),bell:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"}),u.jsx("path",{d:"M13.73 21a2 2 0 01-3.46 0"})]}),shield:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),chevronRight:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("polyline",{points:"9 18 15 12 9 6"})}),helpCircle:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("path",{d:"M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"}),u.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),info:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),u.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),fileText:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"}),u.jsx("polyline",{points:"14 2 14 8 20 8"}),u.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),u.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),u.jsx("polyline",{points:"10 9 9 9 8 9"})]}),logOut:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"}),u.jsx("polyline",{points:"16 17 21 12 16 7"}),u.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),check:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("polyline",{points:"20 6 9 17 4 12"})})},CR=[{id:"dark",label:"Dark",icon:ln.dark},{id:"light",label:"Light",icon:ln.light},{id:"system",label:"System",icon:ln.system}],AR=[{id:"edit-profile",label:"Edit Profile",icon:ln.user},{id:"privacy",label:"Privacy Settings",icon:ln.lock},{id:"notifications",label:"Notification Settings",icon:ln.bell},{id:"security",label:"Security Settings",icon:ln.shield}],NR=[{id:"contact",label:"Contact Us",icon:ln.helpCircle},{id:"about",label:"About FrameX",icon:ln.info},{id:"terms",label:"Terms & Privacy Policy",icon:ln.fileText}],RR={initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5}};function OR(){const{theme:t,setTheme:e}=TR(),{signOut:a}=Ge(),r=cn(),o=async()=>{try{await a(),r("/login")}catch{}};return u.jsxs(we.div,{className:"settings-page",...RR,children:[u.jsxs("div",{className:"page-header",children:[u.jsx("h1",{children:"Settings"}),u.jsx("p",{children:"Manage your account and preferences"})]}),u.jsxs("div",{className:"settings-card glass",children:[u.jsx("h3",{className:"settings-card-title",children:"Appearance"}),u.jsx("div",{className:"theme-options",children:CR.map(l=>u.jsxs("button",{className:`theme-card ${t===l.id?"active":""}`,onClick:()=>e(l.id),children:[u.jsx("div",{className:"theme-card-icon",children:l.icon}),u.jsx("span",{className:"theme-card-label",children:l.label}),t===l.id&&u.jsx("div",{className:"theme-card-check",children:ln.check})]},l.id))})]}),u.jsxs("div",{className:"settings-card glass",children:[u.jsx("h3",{className:"settings-card-title",children:"Account"}),u.jsx("div",{className:"settings-items",children:AR.map(l=>u.jsxs("div",{className:"settings-item",children:[u.jsx("div",{className:"settings-item-icon",children:l.icon}),u.jsx("div",{className:"settings-item-content",children:u.jsx("span",{className:"settings-item-label",children:l.label})}),u.jsx("div",{className:"settings-item-arrow",children:ln.chevronRight})]},l.id))})]}),u.jsxs("div",{className:"settings-card glass",children:[u.jsx("h3",{className:"settings-card-title",children:"Support"}),u.jsx("div",{className:"settings-items",children:NR.map(l=>u.jsxs("div",{className:"settings-item",children:[u.jsx("div",{className:"settings-item-icon",children:l.icon}),u.jsx("div",{className:"settings-item-content",children:u.jsx("span",{className:"settings-item-label",children:l.label})}),u.jsx("div",{className:"settings-item-arrow",children:ln.chevronRight})]},l.id))})]}),u.jsxs("div",{className:"logout-section",children:[u.jsxs("button",{className:"logout-btn",onClick:o,children:[ln.logOut," Logout"]}),u.jsx("span",{className:"version",children:"FrameX v1.0.0"})]}),u.jsx("style",{children:`
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
      `})]})}const Kh=2200,qb=10,DR=["image/jpeg","image/png","image/webp","image/gif"],LR=20*1024*1024,MR=[{value:"public",label:"Public",icon:"globe",desc:"Anyone can see this post"},{value:"followers",label:"Followers Only",icon:"users",desc:"Only followers can see this post"},{value:"private",label:"Private",icon:"lock",desc:"Only you can see this post"}];function zR(){const t=cn(),{profile:e}=Ge(),{createPost:a,uploadPostImage:r,deletePostImage:o}=fi(),{addPostOptimistic:l,removePostOptimistic:d}=pt(),{addToast:h}=ho(),[p,m]=S.useState(""),[y,v]=S.useState([]),[x,w]=S.useState("public"),[j,E]=S.useState(!1),[T,k]=S.useState({}),[C,N]=S.useState(!1),[z,J]=S.useState(!1),[Q,D]=S.useState(0),[q,H]=S.useState(null),X=S.useRef(null),se=S.useRef(null),oe=S.useRef(0);S.useEffect(()=>{var ge;const Z=()=>{if(window.visualViewport){const pe=Math.max(0,window.innerHeight-window.visualViewport.height);D(pe)}};return(ge=window.visualViewport)==null||ge.addEventListener("resize",Z),()=>{var pe;return(pe=window.visualViewport)==null?void 0:pe.removeEventListener("resize",Z)}},[]);const Se=S.useCallback(()=>{j||(p||y.length>0?window.confirm("Discard this post?")&&(Ne(),t(-1)):t(-1))},[p,y,j,t]);S.useEffect(()=>{const Z=()=>{(p||y.length>0)&&Ne()};return window.addEventListener("popstate",Z),()=>window.removeEventListener("popstate",Z)},[p,y]);const Ne=async()=>{for(const Z of y)if(Z.path)try{await o(Z.path)}catch{}},je=Z=>DR.includes(Z.type)?Z.size>LR?(h("File too large. Max 20MB.","error"),!1):!0:(h(`Unsupported file type: ${Z.type}`,"error"),!1),M=async Z=>{const ge=qb-y.length;Z.length>ge&&h(`You can only add ${ge} more image(s)`,"error");const pe=Array.from(Z).slice(0,ge).filter(je);if(pe.length===0)return;const tt=pe.map($e=>({id:`temp_${Date.now()}_${Math.random().toString(36).slice(2)}`,file:$e,url:URL.createObjectURL($e),path:null,progress:0,status:"pending"}));v($e=>[...$e,...tt])},ne=Z=>{const ge=Z.target,pe=ge.files;pe&&M(pe),ge.value=""},ie=Z=>{v(ge=>{var tt;const pe=ge.find($e=>$e.id===Z);return(tt=pe==null?void 0:pe.url)!=null&&tt.startsWith("blob:")&&URL.revokeObjectURL(pe.url),pe!=null&&pe.path&&o(pe.path).catch(()=>{}),ge.filter($e=>$e.id!==Z)})},ye=Z=>H(Z),be=(Z,ge)=>{Z.preventDefault(),!(q===null||q===ge)&&(v(pe=>{const tt=[...pe],[$e]=tt.splice(q,1);return tt.splice(ge,0,$e),tt}),H(ge))},R=()=>H(null),G=async()=>{var tt;const Z=y.filter($e=>$e.status==="pending");if(Z.length===0)return[];const ge=(tt=Ge.getState().user)==null?void 0:tt.id;if(!ge)throw new Error("Not authenticated");const pe=[];for(const $e of Z){v(Ke=>Ke.map(bt=>bt.id===$e.id?{...bt,status:"uploading",progress:0}:bt));try{const Ke=await r($e.file,ge,bt=>{v(Ee=>Ee.map(ct=>ct.id===$e.id?{...ct,progress:bt}:ct))});v(bt=>bt.map(Ee=>Ee.id===$e.id?{...Ee,path:Ke.path,url:Ke.url,status:"done",progress:100}:Ee)),pe.push({url:Ke.url,path:Ke.path})}catch(Ke){throw v(bt=>bt.map(Ee=>Ee.id===$e.id?{...Ee,status:"error"}:Ee)),new Error(`Failed to upload ${$e.file.name}: ${Ke.message}`)}}return pe},ee=async()=>{var pe,tt,$e;if(C||j)return;if(y.length===0&&!p.trim()){h("Add a photo or write something","error");return}if(!Ge.getState().user){h("Your session has expired. Please log in again.","error"),t("/login",{replace:!0});return}N(!0),E(!0),oe.current=Date.now();let ge;try{const Ke=await G();E(!1),ge=`opt_${Date.now()}`;const bt={id:ge,user_id:(pe=Ge.getState().user)==null?void 0:pe.id,content:p.trim(),type:Ke.length>0?"image":"text",media:Ke,image_url:((tt=Ke[0])==null?void 0:tt.url)||null,audience:x,is_deleted:!1,created_at:new Date().toISOString(),profiles:e?{id:e.id,username:e.username,display_name:e.display_name,avatar_url:e.avatar_url,is_verified:e.is_verified||!1}:null};l(bt);const Ee=await a({content:p.trim(),type:Ke.length>0?"image":"text",media:Ke,image_url:(($e=Ke[0])==null?void 0:$e.url)||null,audience:x});navigator.vibrate&&navigator.vibrate(20),d(ge),l({...Ee}),h("Post uploaded successfully","success"),J(!0),setTimeout(()=>{t("/home",{replace:!0})},800)}catch(Ke){E(!1),N(!1),J(!1),d(ge),console.error("Post creation failed:",Ke),h("Unable to create post. Please try again.","error")}},te=(y.length>0||p.trim().length>0)&&!C&&!j,fe=Kh-p.length,_e=Z=>Z?Z.slice(0,2).toUpperCase():"?";return u.jsxs(we.div,{className:"post-creation-page",initial:{opacity:0,y:30},animate:{opacity:1,y:0},exit:{opacity:0,y:30},transition:{type:"spring",stiffness:300,damping:30},style:{paddingBottom:Q>0?`${Q}px`:0},children:[u.jsxs("div",{className:"pc-header",children:[u.jsx("button",{className:"pc-back-btn",onClick:Se,disabled:j,"aria-label":"Go back",children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),u.jsx("polyline",{points:"12 19 5 12 12 5"})]})}),u.jsx("h1",{className:"pc-title",children:"New Post"}),u.jsx("button",{className:`pc-submit-btn ${te?"":"disabled"} ${z?"success":""}`,onClick:ee,disabled:!te,children:z?u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",className:"pc-check-icon",children:u.jsx("polyline",{points:"20 6 9 17 4 12"})}):C?u.jsx("div",{className:"pc-spinner"}):"Post"})]}),u.jsxs("div",{className:"pc-user-info",children:[u.jsx("div",{className:"pc-avatar",style:{background:(e==null?void 0:e.avatar_color)||"var(--accent)"},children:e!=null&&e.avatar_url?u.jsx("img",{src:e.avatar_url,alt:""}):u.jsx("span",{children:_e((e==null?void 0:e.display_name)||(e==null?void 0:e.username))})}),u.jsxs("div",{className:"pc-user-details",children:[u.jsx("span",{className:"pc-display-name",children:(e==null?void 0:e.display_name)||"Unknown"}),u.jsxs("span",{className:"pc-username",children:["@",(e==null?void 0:e.username)||"unknown"]})]})]}),u.jsxs("div",{className:"pc-caption-area",children:[u.jsx("textarea",{ref:se,className:"pc-caption-input",placeholder:"Write a caption...",value:p,onChange:Z=>{Z.target.value.length<=Kh&&m(Z.target.value)},rows:4,maxLength:Kh}),p.length>0&&u.jsx("span",{className:`pc-char-count ${fe<100?"pc-char-warn":""} ${fe<20?"pc-char-danger":""}`,children:fe})]}),u.jsx(bn,{children:y.length>0&&u.jsxs(we.div,{className:"pc-image-grid",initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},children:[y.map((Z,ge)=>u.jsxs(we.div,{className:`pc-image-item ${Z.status==="uploading"?"uploading":""} ${Z.status==="error"?"error":""}`,layout:!0,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1,transition:{delay:ge*.05}},draggable:!0,onDragStart:()=>ye(ge),onDragOver:pe=>be(pe,ge),onDragEnd:R,children:[u.jsx("img",{src:Z.url,alt:`Upload ${ge+1}`}),u.jsx("button",{className:"pc-img-remove",onClick:()=>ie(Z.id),"aria-label":"Remove image",children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}),Z.status==="uploading"&&u.jsxs("div",{className:"pc-img-progress",children:[u.jsxs("svg",{className:"pc-progress-ring",viewBox:"0 0 36 36",children:[u.jsx("circle",{className:"pc-progress-bg",cx:"18",cy:"18",r:"16"}),u.jsx("circle",{className:"pc-progress-bar",cx:"18",cy:"18",r:"16",strokeDasharray:`${Z.progress*1.005} 100.5`,strokeDashoffset:"0"})]}),u.jsxs("span",{className:"pc-progress-text",children:[Math.round(Z.progress),"%"]})]}),Z.status==="error"&&u.jsx("div",{className:"pc-img-error-overlay",children:u.jsx("span",{children:"Failed"})}),u.jsx("span",{className:"pc-img-order",children:ge+1})]},Z.id)),y.length<qb&&!C&&u.jsxs(we.button,{className:"pc-add-image-btn",onClick:()=>{var Z;return(Z=X.current)==null?void 0:Z.click()},whileHover:{scale:1.05},whileTap:{scale:.95},children:[u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),u.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),u.jsx("polyline",{points:"21 15 16 10 5 21"})]}),u.jsx("span",{children:"Add"})]})]})}),y.length===0&&u.jsxs(we.button,{className:"pc-add-photo-btn",onClick:()=>{var Z;return(Z=X.current)==null?void 0:Z.click()},whileHover:{scale:1.02},whileTap:{scale:.98},disabled:C,children:[u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),u.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),u.jsx("polyline",{points:"21 15 16 10 5 21"})]}),u.jsx("span",{children:"Add Photos"})]}),u.jsx("input",{ref:X,type:"file",accept:"image/jpeg,image/png,image/webp,image/gif",multiple:!0,onChange:ne,style:{display:"none"}}),u.jsxs("div",{className:"pc-audience-section",children:[u.jsx("label",{className:"pc-section-label",children:"Audience"}),u.jsx("div",{className:"pc-audience-options",children:MR.map(Z=>u.jsxs("button",{className:`pc-audience-btn ${x===Z.value?"active":""}`,onClick:()=>!C&&w(Z.value),disabled:C,children:[u.jsxs("span",{className:"pc-audience-icon",children:[Z.icon==="globe"&&u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),u.jsx("path",{d:"M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"})]}),Z.icon==="users"&&u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"9",cy:"7",r:"4"}),u.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),u.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),Z.icon==="lock"&&u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),u.jsx("path",{d:"M7 11V7a5 5 0 0110 0v4"})]})]}),u.jsx("span",{className:"pc-audience-label",children:Z.label})]},Z.value))})]}),u.jsx("style",{children:UR})]})}const UR=`
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
`;class BR extends S.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,a){console.error("ErrorBoundary caught:",e,a)}render(){return this.state.error?u.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#08080f",color:"#fff",fontFamily:"system-ui, sans-serif",padding:"2rem"},children:u.jsxs("div",{style:{maxWidth:480,padding:"2rem",background:"rgba(255,255,255,0.04)",borderRadius:16,border:"1px solid rgba(255,255,255,0.08)"},children:[u.jsx("h2",{style:{margin:"0 0 0.75rem",fontSize:"1.25rem"},children:"Something went wrong"}),u.jsx("p",{style:{color:"rgba(255,255,255,0.5)",fontSize:"0.85rem",margin:0},children:this.state.error.message})]})}):this.props.children}}function ta({children:t}){const{user:e,isLoading:a}=Ge(),r=Xt();return a?u.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#08080f",color:"#fff",fontFamily:"system-ui, sans-serif",flexDirection:"column",gap:"1rem"},children:[u.jsx("div",{className:"auth-spinner"}),u.jsx("p",{style:{color:"rgba(255,255,255,0.4)",fontSize:"0.9rem"},children:"Loading..."}),u.jsx("style",{children:`
          .auth-spinner {
            width: 32px; height: 32px;
            border: 2px solid rgba(255,255,255,0.06);
            border-top-color: #CCFF00;
            border-radius: 50%;
            animation: spin 0.7s linear infinite;
          }
          @keyframes spin { to { transform: rotate(360deg); } }
        `})]}):e?t:u.jsx(qS,{to:"/login",state:{from:r},replace:!0})}const PR=[{path:"/home",label:"Home",icon:"home"},{path:"/explore",label:"Explore",icon:"explore"},{path:"/chat",label:"Chats",icon:"chat"},{path:"/notifications",label:"Alerts",icon:"bell"},{path:"/profile",label:"Profile",icon:"user"}],VR={home:t=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:t?"currentColor":"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M3 12l9-9 9 9"}),u.jsx("path",{d:"M5 10v9a1 1 0 001 1h3v-5h6v5h3a1 1 0 001-1v-9"})]}),explore:t=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"})]}),chat:t=>u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})}),bell:t=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),u.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),user:t=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"12",cy:"7",r:"4"})]})};function $R(){const t=cn(),e=Xt(),{unreadCount:a}=di(),[r,o]=S.useState(!0),l=S.useRef(0);return S.useEffect(()=>{const d=()=>{const h=window.scrollY;h>l.current&&h>60?o(!1):o(!0),l.current=h};return window.addEventListener("scroll",d,{passive:!0}),()=>window.removeEventListener("scroll",d)},[]),u.jsx(bn,{children:r&&u.jsxs(we.nav,{className:"bottom-nav",initial:{y:100},animate:{y:0},exit:{y:100},transition:{type:"spring",stiffness:300,damping:30},children:[u.jsx("div",{className:"bottom-nav-inner",children:PR.map(d=>{const h=e.pathname===d.path;return u.jsxs("button",{className:`bottom-nav-item ${h?"active":""}`,onClick:()=>{e.pathname!==d.path&&(window.scrollTo({top:0,behavior:"smooth"}),t(d.path))},children:[u.jsxs("span",{className:"nav-icon-wrap",children:[VR[d.icon](h),d.path==="/notifications"&&a>0&&u.jsx("span",{className:"bottom-nav-badge",children:a>99?"99+":a})]}),u.jsx("span",{className:"nav-label-text",children:d.label})]},d.path)})}),u.jsx("style",{children:HR})]})})}const HR=`
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
`,Fb=140,Gb=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]});function IR(){const t=cn(),[e,a]=S.useState(!1);return u.jsxs("div",{className:"slide-fab-wrap",children:[u.jsxs(we.div,{className:"slide-fab-inner",drag:"x",dragConstraints:{left:0,right:Fb},dragElastic:.15,onDragEnd:(r,o)=>{o.offset.x<-30||o.velocity.x<-20?a(!0):(o.offset.x>20||o.velocity.x>20)&&a(!1)},animate:{x:e?0:Fb},transition:{type:"spring",stiffness:400,damping:30},onTap:()=>{e?t("/create"):a(!0)},whileTap:{scale:.94},layout:!0,children:[u.jsxs("div",{className:"slide-fab-body",children:[u.jsx("span",{className:"slide-fab-body-icon",children:u.jsx(Gb,{})}),u.jsx("span",{className:"slide-fab-body-text",children:"Create Post"})]}),u.jsx("div",{className:"slide-fab-tab",children:u.jsx(Gb,{})})]}),u.jsx("style",{children:qR})]})}const qR=`
  .slide-fab-wrap {
    position: fixed;
    right: 0;
    top: 35%;
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
    border-radius: 12px 0 0 12px;
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
`;function FR(){const{toasts:t,removeToast:e}=ho();return u.jsxs("div",{className:"toast-container",children:[u.jsx(bn,{mode:"popLayout",children:t.map(a=>u.jsxs(we.div,{className:`toast-pill toast-${a.type}`,layout:!0,initial:{opacity:0,y:-40,scale:.92},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-20,scale:.95,filter:"blur(4px)"},transition:{type:"spring",stiffness:400,damping:28,mass:.8},onClick:()=>e(a.id),children:[a.type==="success"&&u.jsxs("svg",{className:"toast-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("polyline",{points:"16 8 10 16 7 13"})]}),a.type==="error"&&u.jsxs("svg",{className:"toast-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),u.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),a.type==="info"&&u.jsxs("svg",{className:"toast-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),u.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),u.jsx("span",{className:"toast-message",children:a.message})]},a.id))}),u.jsx("style",{children:GR})]})}const GR=`
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
`,Kb={home:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M3 12l9-9 9 9"}),u.jsx("path",{d:"M5 10v9a1 1 0 001 1h3v-5h6v5h3a1 1 0 001-1v-9"})]}),explore:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"})]}),communities:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"9",cy:"7",r:"4"}),u.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),u.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),chat:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})}),notification:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),u.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),settings:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"3"}),u.jsx("path",{d:"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"})]}),analytics:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M18 20V10"}),u.jsx("path",{d:"M12 20V4"}),u.jsx("path",{d:"M6 20v-6"})]}),profile:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),logout:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"}),u.jsx("polyline",{points:"16 17 21 12 16 7"}),u.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]})},KR=[{path:"/home",label:"Home",icon:"home"},{path:"/explore",label:"Explore",icon:"explore"},{path:"/communities",label:"Communities",icon:"communities"},{path:"/chat",label:"Chats",icon:"chat"},{path:"/notifications",label:"Notifications",icon:"notification"},{path:"/profile",label:"Profile",icon:"profile"},{path:"/analytics",label:"Analytics",icon:"analytics"},{path:"/settings",label:"Settings",icon:"settings"}],YR={"/home":"Home","/explore":"Explore","/communities":"Communities","/chat":"Chats","/notifications":"Notifications","/profile":"Profile","/analytics":"Analytics","/settings":"Settings"},WR={initial:{opacity:0,y:12},animate:{opacity:1,y:0,transition:{duration:.3,ease:"easeOut"}},exit:{opacity:0,y:-12,transition:{duration:.2,ease:"easeIn"}}};function Aa({children:t}){var v,x,w,j;const{user:e,profile:a,signOut:r}=Ge(),o=cn(),l=Xt(),d=YR[l.pathname]||"FrameX",{unreadCount:h}=di(),p=l.pathname.split("/"),m=p[1]==="profile"&&p[2]&&p[2]!==(e==null?void 0:e.id),y=async()=>{await r(),o("/login")};return u.jsxs("div",{className:"app-layout",children:[!m&&u.jsxs("aside",{className:"desktop-sidebar",children:[u.jsxs("div",{className:"sidebar-brand",onClick:()=>o("/home"),children:[u.jsx("span",{className:"sidebar-logo-mark",children:"F"}),u.jsx("span",{className:"sidebar-logo-text",children:"FrameX"})]}),u.jsx("nav",{className:"sidebar-nav-main",children:KR.map(E=>u.jsxs("button",{className:`sidebar-nav-item ${l.pathname===E.path?"active":""}`,onClick:()=>o(E.path),children:[u.jsx("span",{className:"sidebar-nav-icon",children:Kb[E.icon]}),u.jsx("span",{className:"sidebar-nav-label",children:E.label}),E.path==="/notifications"&&h>0&&u.jsx("span",{className:"sidebar-notif-badge",children:h>99?"99+":h})]},E.path))}),u.jsx(S1,{variant:"sidebar"}),u.jsx("div",{className:"sidebar-divider"}),u.jsxs("div",{className:"sidebar-profile-section",onClick:()=>o("/profile"),children:[u.jsx("div",{className:"sidebar-profile-avatar",style:{background:(a==null?void 0:a.avatar_color)||"var(--accent)"},children:((v=a==null?void 0:a.username)==null?void 0:v[0])||((w=(x=e==null?void 0:e.email)==null?void 0:x[0])==null?void 0:w.toUpperCase())||"?"}),u.jsxs("div",{className:"sidebar-profile-info",children:[u.jsx("span",{className:"sidebar-profile-name",children:(a==null?void 0:a.username)||((j=e==null?void 0:e.email)==null?void 0:j.split("@")[0])||"User"}),u.jsxs("span",{className:"sidebar-profile-handle",children:["@",(a==null?void 0:a.username)||"user"]})]})]}),u.jsxs("button",{className:"sidebar-logout-btn",onClick:y,children:[u.jsx("span",{className:"sidebar-nav-icon",children:Kb.logout}),u.jsx("span",{className:"sidebar-nav-label",children:"Log Out"})]})]}),u.jsxs("div",{className:"app-main",children:[!m&&u.jsx("header",{className:"mobile-header",children:u.jsxs("div",{className:"mobile-header-left",onClick:()=>o("/home"),children:[u.jsx("span",{className:"mobile-header-logo",children:"F"}),u.jsx("span",{className:"mobile-header-title",children:d})]})}),u.jsx("main",{className:"app-content",children:u.jsx(bn,{mode:"wait",children:u.jsx(we.div,{variants:WR,initial:"initial",animate:"animate",exit:"exit",children:t},l.pathname)})}),u.jsx(FR,{})]}),!m&&u.jsx($R,{}),u.jsx(IR,{}),u.jsx("style",{children:`
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
      `})]})}function XR(){const t=cn(),[e,a]=S.useState("Verifying your email...");return S.useEffect(()=>{(async()=>{const{data:l,error:d}=await $.auth.getSession();if(d){a("Authentication failed. Please try signing in again."),setTimeout(()=>t("/login"),3e3);return}l!=null&&l.session?t("/home"):a("Redirecting...")})();const{data:{subscription:o}}=$.auth.onAuthStateChange(l=>{(l==="SIGNED_IN"||l==="SIGNED_UP")&&t("/home")});return()=>o==null?void 0:o.unsubscribe()},[t]),u.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#08080f",color:"#fff",fontFamily:"system-ui, sans-serif",flexDirection:"column",gap:"1rem"},children:[u.jsx("div",{className:"auth-callback-spinner"}),u.jsx("p",{style:{color:"rgba(255,255,255,0.6)",fontSize:"0.9rem"},children:e}),u.jsx("style",{children:`
        .auth-callback-spinner {
          width: 32px; height: 32px;
          border: 2px solid rgba(255,255,255,0.06);
          border-top-color: #CCFF00;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `})]})}function JR(){const{isLoading:t}=Ge();return t?u.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#08080f",color:"#fff",fontFamily:"system-ui, sans-serif",flexDirection:"column",gap:"1rem"},children:[u.jsx("div",{className:"app-loading-spinner"}),u.jsx("p",{style:{color:"rgba(255,255,255,0.4)",fontSize:"0.9rem"},children:"Loading..."}),u.jsx("style",{children:`
          .app-loading-spinner {
            width: 32px; height: 32px;
            border: 2px solid rgba(255,255,255,0.06);
            border-top-color: #CCFF00;
            border-radius: 50%;
            animation: spin 0.7s linear infinite;
          }
          @keyframes spin { to { transform: rotate(360deg); } }
        `})]}):u.jsx(BR,{children:u.jsx(ER,{children:u.jsxs(GS,{children:[u.jsx(Kt,{path:"/",element:u.jsx(Ej,{})}),u.jsx(Kt,{path:"/about",element:u.jsx(Tj,{})}),u.jsx(Kt,{path:"/login",element:u.jsx(LE,{})}),u.jsx(Kt,{path:"/auth/callback",element:u.jsx(XR,{})}),u.jsx(Kt,{path:"/chat",element:u.jsx(ta,{children:u.jsx(BE,{})})}),u.jsx(Kt,{path:"/home",element:u.jsx(ta,{children:u.jsx(Aa,{children:u.jsx(Z4,{})})})}),u.jsx(Kt,{path:"/profile",element:u.jsx(ta,{children:u.jsx(Aa,{children:u.jsx(Db,{})})})}),u.jsx(Kt,{path:"/profile/:id",element:u.jsx(ta,{children:u.jsx(Aa,{children:u.jsx(Db,{})})})}),u.jsx(Kt,{path:"/communities",element:u.jsx(ta,{children:u.jsx(Aa,{children:u.jsx(rR,{})})})}),u.jsx(Kt,{path:"/explore",element:u.jsx(ta,{children:u.jsx(Aa,{children:u.jsx(pR,{})})})}),u.jsx(Kt,{path:"/notifications",element:u.jsx(ta,{children:u.jsx(Aa,{children:u.jsx(gR,{})})})}),u.jsx(Kt,{path:"/settings",element:u.jsx(ta,{children:u.jsx(Aa,{children:u.jsx(OR,{})})})}),u.jsx(Kt,{path:"/analytics",element:u.jsx(ta,{children:u.jsx(Aa,{children:u.jsx(SR,{})})})}),u.jsx(Kt,{path:"/create",element:u.jsx(ta,{children:u.jsx(Aa,{children:u.jsx(zR,{})})})})]})})})}Ge.getState().initialize();F5.createRoot(document.getElementById("root")).render(u.jsx(Zs.StrictMode,{children:u.jsx(gj,{children:u.jsx(JR,{})})}));
