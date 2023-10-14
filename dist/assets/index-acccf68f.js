function rS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function bv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Vv={exports:{}},qu={},Lv={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=Symbol.for("react.element"),iS=Symbol.for("react.portal"),sS=Symbol.for("react.fragment"),oS=Symbol.for("react.strict_mode"),aS=Symbol.for("react.profiler"),lS=Symbol.for("react.provider"),uS=Symbol.for("react.context"),cS=Symbol.for("react.forward_ref"),hS=Symbol.for("react.suspense"),dS=Symbol.for("react.memo"),fS=Symbol.for("react.lazy"),yg=Symbol.iterator;function pS(t){return t===null||typeof t!="object"?null:(t=yg&&t[yg]||t["@@iterator"],typeof t=="function"?t:null)}var Mv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$v=Object.assign,Fv={};function Ts(t,e,n){this.props=t,this.context=e,this.refs=Fv,this.updater=n||Mv}Ts.prototype.isReactComponent={};Ts.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ts.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Uv(){}Uv.prototype=Ts.prototype;function zf(t,e,n){this.props=t,this.context=e,this.refs=Fv,this.updater=n||Mv}var Hf=zf.prototype=new Uv;Hf.constructor=zf;$v(Hf,Ts.prototype);Hf.isPureReactComponent=!0;var _g=Array.isArray,jv=Object.prototype.hasOwnProperty,Wf={current:null},Bv={key:!0,ref:!0,__self:!0,__source:!0};function zv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)jv.call(e,r)&&!Bv.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:aa,type:t,key:s,ref:o,props:i,_owner:Wf.current}}function mS(t,e){return{$$typeof:aa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qf(t){return typeof t=="object"&&t!==null&&t.$$typeof===aa}function gS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vg=/\/+/g;function Qc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?gS(""+t.key):e.toString(36)}function pl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case aa:case iS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Qc(o,0):r,_g(i)?(n="",t!=null&&(n=t.replace(vg,"$&/")+"/"),pl(i,e,n,"",function(u){return u})):i!=null&&(qf(i)&&(i=mS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(vg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",_g(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Qc(s,a);o+=pl(s,e,n,l,i)}else if(l=pS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Qc(s,a++),o+=pl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fa(t,e,n){if(t==null)return t;var r=[],i=0;return pl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function yS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var vt={current:null},ml={transition:null},_S={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:ml,ReactCurrentOwner:Wf};re.Children={map:Fa,forEach:function(t,e,n){Fa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fa(t,function(){e++}),e},toArray:function(t){return Fa(t,function(e){return e})||[]},only:function(t){if(!qf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=Ts;re.Fragment=sS;re.Profiler=aS;re.PureComponent=zf;re.StrictMode=oS;re.Suspense=hS;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_S;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=$v({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Wf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)jv.call(e,l)&&!Bv.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:aa,type:t.type,key:i,ref:s,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:uS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:lS,_context:t},t.Consumer=t};re.createElement=zv;re.createFactory=function(t){var e=zv.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:cS,render:t}};re.isValidElement=qf;re.lazy=function(t){return{$$typeof:fS,_payload:{_status:-1,_result:t},_init:yS}};re.memo=function(t,e){return{$$typeof:dS,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=ml.transition;ml.transition={};try{t()}finally{ml.transition=e}};re.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};re.useCallback=function(t,e){return vt.current.useCallback(t,e)};re.useContext=function(t){return vt.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return vt.current.useDeferredValue(t)};re.useEffect=function(t,e){return vt.current.useEffect(t,e)};re.useId=function(){return vt.current.useId()};re.useImperativeHandle=function(t,e,n){return vt.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return vt.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return vt.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return vt.current.useMemo(t,e)};re.useReducer=function(t,e,n){return vt.current.useReducer(t,e,n)};re.useRef=function(t){return vt.current.useRef(t)};re.useState=function(t){return vt.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return vt.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return vt.current.useTransition()};re.version="18.2.0";Lv.exports=re;var b=Lv.exports;const cn=bv(b),vS=rS({__proto__:null,default:cn},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ES=b,wS=Symbol.for("react.element"),TS=Symbol.for("react.fragment"),IS=Object.prototype.hasOwnProperty,SS=ES.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,AS={key:!0,ref:!0,__self:!0,__source:!0};function Hv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)IS.call(e,r)&&!AS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:wS,type:t,key:s,ref:o,props:i,_owner:SS.current}}qu.Fragment=TS;qu.jsx=Hv;qu.jsxs=Hv;Vv.exports=qu;var H=Vv.exports,rd={},Wv={exports:{}},bt={},qv={exports:{}},Kv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,K){var X=D.length;D.push(K);e:for(;0<X;){var Ee=X-1>>>1,Pe=D[Ee];if(0<i(Pe,K))D[Ee]=K,D[X]=Pe,X=Ee;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var K=D[0],X=D.pop();if(X!==K){D[0]=X;e:for(var Ee=0,Pe=D.length,Ti=Pe>>>1;Ee<Ti;){var on=2*(Ee+1)-1,Vs=D[on],qt=on+1,Vr=D[qt];if(0>i(Vs,X))qt<Pe&&0>i(Vr,Vs)?(D[Ee]=Vr,D[qt]=X,Ee=qt):(D[Ee]=Vs,D[on]=X,Ee=on);else if(qt<Pe&&0>i(Vr,X))D[Ee]=Vr,D[qt]=X,Ee=qt;else break e}}return K}function i(D,K){var X=D.sortIndex-K.sortIndex;return X!==0?X:D.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,_=!1,v=!1,T=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var K=n(u);K!==null;){if(K.callback===null)r(u);else if(K.startTime<=D)r(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(u)}}function E(D){if(v=!1,g(D),!_)if(n(l)!==null)_=!0,rt(A);else{var K=n(u);K!==null&&wt(E,K.startTime-D)}}function A(D,K){_=!1,v&&(v=!1,p(L),L=-1),m=!0;var X=d;try{for(g(K),h=n(l);h!==null&&(!(h.expirationTime>K)||D&&!ee());){var Ee=h.callback;if(typeof Ee=="function"){h.callback=null,d=h.priorityLevel;var Pe=Ee(h.expirationTime<=K);K=t.unstable_now(),typeof Pe=="function"?h.callback=Pe:h===n(l)&&r(l),g(K)}else r(l);h=n(l)}if(h!==null)var Ti=!0;else{var on=n(u);on!==null&&wt(E,on.startTime-K),Ti=!1}return Ti}finally{h=null,d=X,m=!1}}var P=!1,N=null,L=-1,W=5,B=-1;function ee(){return!(t.unstable_now()-B<W)}function te(){if(N!==null){var D=t.unstable_now();B=D;var K=!0;try{K=N(!0,D)}finally{K?q():(P=!1,N=null)}}else P=!1}var q;if(typeof f=="function")q=function(){f(te)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,$e=he.port2;he.port1.onmessage=te,q=function(){$e.postMessage(null)}}else q=function(){T(te,0)};function rt(D){N=D,P||(P=!0,q())}function wt(D,K){L=T(function(){D(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,rt(A))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var K=3;break;default:K=d}var X=d;d=K;try{return D()}finally{d=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,K){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var X=d;d=D;try{return K()}finally{d=X}},t.unstable_scheduleCallback=function(D,K,X){var Ee=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?Ee+X:Ee):X=Ee,D){case 1:var Pe=-1;break;case 2:Pe=250;break;case 5:Pe=1073741823;break;case 4:Pe=1e4;break;default:Pe=5e3}return Pe=X+Pe,D={id:c++,callback:K,priorityLevel:D,startTime:X,expirationTime:Pe,sortIndex:-1},X>Ee?(D.sortIndex=X,e(u,D),n(l)===null&&D===n(u)&&(v?(p(L),L=-1):v=!0,wt(E,X-Ee))):(D.sortIndex=Pe,e(l,D),_||m||(_=!0,rt(A))),D},t.unstable_shouldYield=ee,t.unstable_wrapCallback=function(D){var K=d;return function(){var X=d;d=K;try{return D.apply(this,arguments)}finally{d=X}}}})(Kv);qv.exports=Kv;var CS=qv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gv=b,xt=CS;function R(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qv=new Set,wo={};function di(t,e){ss(t,e),ss(t+"Capture",e)}function ss(t,e){for(wo[t]=e,t=0;t<e.length;t++)Qv.add(e[t])}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),id=Object.prototype.hasOwnProperty,RS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Eg={},wg={};function kS(t){return id.call(wg,t)?!0:id.call(Eg,t)?!1:RS.test(t)?wg[t]=!0:(Eg[t]=!0,!1)}function PS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function NS(t,e,n,r){if(e===null||typeof e>"u"||PS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Et(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nt[t]=new Et(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nt[e]=new Et(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nt[t]=new Et(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nt[t]=new Et(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nt[t]=new Et(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nt[t]=new Et(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nt[t]=new Et(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nt[t]=new Et(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nt[t]=new Et(t,5,!1,t.toLowerCase(),null,!1,!1)});var Kf=/[\-:]([a-z])/g;function Gf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Kf,Gf);nt[e]=new Et(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Kf,Gf);nt[e]=new Et(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Kf,Gf);nt[e]=new Et(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nt[t]=new Et(t,1,!1,t.toLowerCase(),null,!1,!1)});nt.xlinkHref=new Et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nt[t]=new Et(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qf(t,e,n,r){var i=nt.hasOwnProperty(e)?nt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(NS(e,n,i,r)&&(n=null),r||i===null?kS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Kn=Gv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ua=Symbol.for("react.element"),xi=Symbol.for("react.portal"),Di=Symbol.for("react.fragment"),Xf=Symbol.for("react.strict_mode"),sd=Symbol.for("react.profiler"),Xv=Symbol.for("react.provider"),Yv=Symbol.for("react.context"),Yf=Symbol.for("react.forward_ref"),od=Symbol.for("react.suspense"),ad=Symbol.for("react.suspense_list"),Jf=Symbol.for("react.memo"),Yn=Symbol.for("react.lazy"),Jv=Symbol.for("react.offscreen"),Tg=Symbol.iterator;function Ls(t){return t===null||typeof t!="object"?null:(t=Tg&&t[Tg]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Object.assign,Xc;function Gs(t){if(Xc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xc=e&&e[1]||""}return`
`+Xc+t}var Yc=!1;function Jc(t,e){if(!t||Yc)return"";Yc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Yc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Gs(t):""}function xS(t){switch(t.tag){case 5:return Gs(t.type);case 16:return Gs("Lazy");case 13:return Gs("Suspense");case 19:return Gs("SuspenseList");case 0:case 2:case 15:return t=Jc(t.type,!1),t;case 11:return t=Jc(t.type.render,!1),t;case 1:return t=Jc(t.type,!0),t;default:return""}}function ld(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Di:return"Fragment";case xi:return"Portal";case sd:return"Profiler";case Xf:return"StrictMode";case od:return"Suspense";case ad:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Yv:return(t.displayName||"Context")+".Consumer";case Xv:return(t._context.displayName||"Context")+".Provider";case Yf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jf:return e=t.displayName||null,e!==null?e:ld(t.type)||"Memo";case Yn:e=t._payload,t=t._init;try{return ld(t(e))}catch{}}return null}function DS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ld(e);case 8:return e===Xf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function OS(t){var e=Zv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ja(t){t._valueTracker||(t._valueTracker=OS(t))}function e0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Zv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ul(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ud(t,e){var n=e.checked;return Se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ig(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function t0(t,e){e=e.checked,e!=null&&Qf(t,"checked",e,!1)}function cd(t,e){t0(t,e);var n=Ar(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?hd(t,e.type,n):e.hasOwnProperty("defaultValue")&&hd(t,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Sg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function hd(t,e,n){(e!=="number"||Ul(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Qs=Array.isArray;function Ki(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ar(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function dd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(R(91));return Se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ag(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(R(92));if(Qs(n)){if(1<n.length)throw Error(R(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ar(n)}}function n0(t,e){var n=Ar(e.value),r=Ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Cg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function r0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?r0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ba,i0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ba=Ba||document.createElement("div"),Ba.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ba.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function To(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var no={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bS=["Webkit","ms","Moz","O"];Object.keys(no).forEach(function(t){bS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),no[e]=no[t]})});function s0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||no.hasOwnProperty(t)&&no[t]?(""+e).trim():e+"px"}function o0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=s0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var VS=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pd(t,e){if(e){if(VS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(R(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(R(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(R(61))}if(e.style!=null&&typeof e.style!="object")throw Error(R(62))}}function md(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gd=null;function Zf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yd=null,Gi=null,Qi=null;function Rg(t){if(t=ca(t)){if(typeof yd!="function")throw Error(R(280));var e=t.stateNode;e&&(e=Yu(e),yd(t.stateNode,t.type,e))}}function a0(t){Gi?Qi?Qi.push(t):Qi=[t]:Gi=t}function l0(){if(Gi){var t=Gi,e=Qi;if(Qi=Gi=null,Rg(t),e)for(t=0;t<e.length;t++)Rg(e[t])}}function u0(t,e){return t(e)}function c0(){}var Zc=!1;function h0(t,e,n){if(Zc)return t(e,n);Zc=!0;try{return u0(t,e,n)}finally{Zc=!1,(Gi!==null||Qi!==null)&&(c0(),l0())}}function Io(t,e){var n=t.stateNode;if(n===null)return null;var r=Yu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(R(231,e,typeof n));return n}var _d=!1;if(Fn)try{var Ms={};Object.defineProperty(Ms,"passive",{get:function(){_d=!0}}),window.addEventListener("test",Ms,Ms),window.removeEventListener("test",Ms,Ms)}catch{_d=!1}function LS(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ro=!1,jl=null,Bl=!1,vd=null,MS={onError:function(t){ro=!0,jl=t}};function $S(t,e,n,r,i,s,o,a,l){ro=!1,jl=null,LS.apply(MS,arguments)}function FS(t,e,n,r,i,s,o,a,l){if($S.apply(this,arguments),ro){if(ro){var u=jl;ro=!1,jl=null}else throw Error(R(198));Bl||(Bl=!0,vd=u)}}function fi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function d0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function kg(t){if(fi(t)!==t)throw Error(R(188))}function US(t){var e=t.alternate;if(!e){if(e=fi(t),e===null)throw Error(R(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return kg(i),t;if(s===r)return kg(i),e;s=s.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?t:e}function f0(t){return t=US(t),t!==null?p0(t):null}function p0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=p0(t);if(e!==null)return e;t=t.sibling}return null}var m0=xt.unstable_scheduleCallback,Pg=xt.unstable_cancelCallback,jS=xt.unstable_shouldYield,BS=xt.unstable_requestPaint,xe=xt.unstable_now,zS=xt.unstable_getCurrentPriorityLevel,ep=xt.unstable_ImmediatePriority,g0=xt.unstable_UserBlockingPriority,zl=xt.unstable_NormalPriority,HS=xt.unstable_LowPriority,y0=xt.unstable_IdlePriority,Ku=null,gn=null;function WS(t){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(Ku,t,void 0,(t.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:GS,qS=Math.log,KS=Math.LN2;function GS(t){return t>>>=0,t===0?32:31-(qS(t)/KS|0)|0}var za=64,Ha=4194304;function Xs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Hl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Xs(a):(s&=o,s!==0&&(r=Xs(s)))}else o=n&~i,o!==0?r=Xs(o):s!==0&&(r=Xs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-en(e),i=1<<n,r|=t[n],e&=~i;return r}function QS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function XS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-en(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=QS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ed(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function _0(){var t=za;return za<<=1,!(za&4194240)&&(za=64),t}function eh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function la(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-en(e),t[e]=n}function YS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-en(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function tp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-en(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ue=0;function v0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var E0,np,w0,T0,I0,wd=!1,Wa=[],ur=null,cr=null,hr=null,So=new Map,Ao=new Map,Zn=[],JS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ng(t,e){switch(t){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":So.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(e.pointerId)}}function $s(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ca(e),e!==null&&np(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ZS(t,e,n,r,i){switch(e){case"focusin":return ur=$s(ur,t,e,n,r,i),!0;case"dragenter":return cr=$s(cr,t,e,n,r,i),!0;case"mouseover":return hr=$s(hr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return So.set(s,$s(So.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ao.set(s,$s(Ao.get(s)||null,t,e,n,r,i)),!0}return!1}function S0(t){var e=Fr(t.target);if(e!==null){var n=fi(e);if(n!==null){if(e=n.tag,e===13){if(e=d0(n),e!==null){t.blockedOn=e,I0(t.priority,function(){w0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Td(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);gd=r,n.target.dispatchEvent(r),gd=null}else return e=ca(n),e!==null&&np(e),t.blockedOn=n,!1;e.shift()}return!0}function xg(t,e,n){gl(t)&&n.delete(e)}function eA(){wd=!1,ur!==null&&gl(ur)&&(ur=null),cr!==null&&gl(cr)&&(cr=null),hr!==null&&gl(hr)&&(hr=null),So.forEach(xg),Ao.forEach(xg)}function Fs(t,e){t.blockedOn===e&&(t.blockedOn=null,wd||(wd=!0,xt.unstable_scheduleCallback(xt.unstable_NormalPriority,eA)))}function Co(t){function e(i){return Fs(i,t)}if(0<Wa.length){Fs(Wa[0],t);for(var n=1;n<Wa.length;n++){var r=Wa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ur!==null&&Fs(ur,t),cr!==null&&Fs(cr,t),hr!==null&&Fs(hr,t),So.forEach(e),Ao.forEach(e),n=0;n<Zn.length;n++)r=Zn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Zn.length&&(n=Zn[0],n.blockedOn===null);)S0(n),n.blockedOn===null&&Zn.shift()}var Xi=Kn.ReactCurrentBatchConfig,Wl=!0;function tA(t,e,n,r){var i=ue,s=Xi.transition;Xi.transition=null;try{ue=1,rp(t,e,n,r)}finally{ue=i,Xi.transition=s}}function nA(t,e,n,r){var i=ue,s=Xi.transition;Xi.transition=null;try{ue=4,rp(t,e,n,r)}finally{ue=i,Xi.transition=s}}function rp(t,e,n,r){if(Wl){var i=Td(t,e,n,r);if(i===null)ch(t,e,r,ql,n),Ng(t,r);else if(ZS(i,t,e,n,r))r.stopPropagation();else if(Ng(t,r),e&4&&-1<JS.indexOf(t)){for(;i!==null;){var s=ca(i);if(s!==null&&E0(s),s=Td(t,e,n,r),s===null&&ch(t,e,r,ql,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ch(t,e,r,null,n)}}var ql=null;function Td(t,e,n,r){if(ql=null,t=Zf(r),t=Fr(t),t!==null)if(e=fi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=d0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ql=t,null}function A0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zS()){case ep:return 1;case g0:return 4;case zl:case HS:return 16;case y0:return 536870912;default:return 16}default:return 16}}var ir=null,ip=null,yl=null;function C0(){if(yl)return yl;var t,e=ip,n=e.length,r,i="value"in ir?ir.value:ir.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return yl=i.slice(t,1<r?1-r:void 0)}function _l(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qa(){return!0}function Dg(){return!1}function Vt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qa:Dg,this.isPropagationStopped=Dg,this}return Se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),e}var Is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sp=Vt(Is),ua=Se({},Is,{view:0,detail:0}),rA=Vt(ua),th,nh,Us,Gu=Se({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:op,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Us&&(Us&&t.type==="mousemove"?(th=t.screenX-Us.screenX,nh=t.screenY-Us.screenY):nh=th=0,Us=t),th)},movementY:function(t){return"movementY"in t?t.movementY:nh}}),Og=Vt(Gu),iA=Se({},Gu,{dataTransfer:0}),sA=Vt(iA),oA=Se({},ua,{relatedTarget:0}),rh=Vt(oA),aA=Se({},Is,{animationName:0,elapsedTime:0,pseudoElement:0}),lA=Vt(aA),uA=Se({},Is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cA=Vt(uA),hA=Se({},Is,{data:0}),bg=Vt(hA),dA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=pA[t])?!!e[t]:!1}function op(){return mA}var gA=Se({},ua,{key:function(t){if(t.key){var e=dA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_l(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:op,charCode:function(t){return t.type==="keypress"?_l(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_l(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yA=Vt(gA),_A=Se({},Gu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vg=Vt(_A),vA=Se({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:op}),EA=Vt(vA),wA=Se({},Is,{propertyName:0,elapsedTime:0,pseudoElement:0}),TA=Vt(wA),IA=Se({},Gu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),SA=Vt(IA),AA=[9,13,27,32],ap=Fn&&"CompositionEvent"in window,io=null;Fn&&"documentMode"in document&&(io=document.documentMode);var CA=Fn&&"TextEvent"in window&&!io,R0=Fn&&(!ap||io&&8<io&&11>=io),Lg=String.fromCharCode(32),Mg=!1;function k0(t,e){switch(t){case"keyup":return AA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function P0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Oi=!1;function RA(t,e){switch(t){case"compositionend":return P0(e);case"keypress":return e.which!==32?null:(Mg=!0,Lg);case"textInput":return t=e.data,t===Lg&&Mg?null:t;default:return null}}function kA(t,e){if(Oi)return t==="compositionend"||!ap&&k0(t,e)?(t=C0(),yl=ip=ir=null,Oi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return R0&&e.locale!=="ko"?null:e.data;default:return null}}var PA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $g(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!PA[t.type]:e==="textarea"}function N0(t,e,n,r){a0(r),e=Kl(e,"onChange"),0<e.length&&(n=new sp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var so=null,Ro=null;function NA(t){j0(t,0)}function Qu(t){var e=Li(t);if(e0(e))return t}function xA(t,e){if(t==="change")return e}var x0=!1;if(Fn){var ih;if(Fn){var sh="oninput"in document;if(!sh){var Fg=document.createElement("div");Fg.setAttribute("oninput","return;"),sh=typeof Fg.oninput=="function"}ih=sh}else ih=!1;x0=ih&&(!document.documentMode||9<document.documentMode)}function Ug(){so&&(so.detachEvent("onpropertychange",D0),Ro=so=null)}function D0(t){if(t.propertyName==="value"&&Qu(Ro)){var e=[];N0(e,Ro,t,Zf(t)),h0(NA,e)}}function DA(t,e,n){t==="focusin"?(Ug(),so=e,Ro=n,so.attachEvent("onpropertychange",D0)):t==="focusout"&&Ug()}function OA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qu(Ro)}function bA(t,e){if(t==="click")return Qu(e)}function VA(t,e){if(t==="input"||t==="change")return Qu(e)}function LA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var nn=typeof Object.is=="function"?Object.is:LA;function ko(t,e){if(nn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!id.call(e,i)||!nn(t[i],e[i]))return!1}return!0}function jg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bg(t,e){var n=jg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jg(n)}}function O0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?O0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function b0(){for(var t=window,e=Ul();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ul(t.document)}return e}function lp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function MA(t){var e=b0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&O0(n.ownerDocument.documentElement,n)){if(r!==null&&lp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Bg(n,s);var o=Bg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $A=Fn&&"documentMode"in document&&11>=document.documentMode,bi=null,Id=null,oo=null,Sd=!1;function zg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sd||bi==null||bi!==Ul(r)||(r=bi,"selectionStart"in r&&lp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),oo&&ko(oo,r)||(oo=r,r=Kl(Id,"onSelect"),0<r.length&&(e=new sp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=bi)))}function Ka(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Vi={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionend:Ka("Transition","TransitionEnd")},oh={},V0={};Fn&&(V0=document.createElement("div").style,"AnimationEvent"in window||(delete Vi.animationend.animation,delete Vi.animationiteration.animation,delete Vi.animationstart.animation),"TransitionEvent"in window||delete Vi.transitionend.transition);function Xu(t){if(oh[t])return oh[t];if(!Vi[t])return t;var e=Vi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in V0)return oh[t]=e[n];return t}var L0=Xu("animationend"),M0=Xu("animationiteration"),$0=Xu("animationstart"),F0=Xu("transitionend"),U0=new Map,Hg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(t,e){U0.set(t,e),di(e,[t])}for(var ah=0;ah<Hg.length;ah++){var lh=Hg[ah],FA=lh.toLowerCase(),UA=lh[0].toUpperCase()+lh.slice(1);Nr(FA,"on"+UA)}Nr(L0,"onAnimationEnd");Nr(M0,"onAnimationIteration");Nr($0,"onAnimationStart");Nr("dblclick","onDoubleClick");Nr("focusin","onFocus");Nr("focusout","onBlur");Nr(F0,"onTransitionEnd");ss("onMouseEnter",["mouseout","mouseover"]);ss("onMouseLeave",["mouseout","mouseover"]);ss("onPointerEnter",["pointerout","pointerover"]);ss("onPointerLeave",["pointerout","pointerover"]);di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));di("onBeforeInput",["compositionend","keypress","textInput","paste"]);di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ys="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ys));function Wg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,FS(r,e,void 0,t),t.currentTarget=null}function j0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Wg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Wg(i,a,u),s=l}}}if(Bl)throw t=vd,Bl=!1,vd=null,t}function me(t,e){var n=e[Pd];n===void 0&&(n=e[Pd]=new Set);var r=t+"__bubble";n.has(r)||(B0(e,t,2,!1),n.add(r))}function uh(t,e,n){var r=0;e&&(r|=4),B0(n,t,r,e)}var Ga="_reactListening"+Math.random().toString(36).slice(2);function Po(t){if(!t[Ga]){t[Ga]=!0,Qv.forEach(function(n){n!=="selectionchange"&&(jA.has(n)||uh(n,!1,t),uh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ga]||(e[Ga]=!0,uh("selectionchange",!1,e))}}function B0(t,e,n,r){switch(A0(e)){case 1:var i=tA;break;case 4:i=nA;break;default:i=rp}n=i.bind(null,e,n,t),i=void 0,!_d||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ch(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Fr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}h0(function(){var u=s,c=Zf(n),h=[];e:{var d=U0.get(t);if(d!==void 0){var m=sp,_=t;switch(t){case"keypress":if(_l(n)===0)break e;case"keydown":case"keyup":m=yA;break;case"focusin":_="focus",m=rh;break;case"focusout":_="blur",m=rh;break;case"beforeblur":case"afterblur":m=rh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Og;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=sA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=EA;break;case L0:case M0:case $0:m=lA;break;case F0:m=TA;break;case"scroll":m=rA;break;case"wheel":m=SA;break;case"copy":case"cut":case"paste":m=cA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Vg}var v=(e&4)!==0,T=!v&&t==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,g;f!==null;){g=f;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,p!==null&&(E=Io(f,p),E!=null&&v.push(No(f,E,g)))),T)break;f=f.return}0<v.length&&(d=new m(d,_,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==gd&&(_=n.relatedTarget||n.fromElement)&&(Fr(_)||_[Un]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?Fr(_):null,_!==null&&(T=fi(_),_!==T||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(v=Og,E="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=Vg,E="onPointerLeave",p="onPointerEnter",f="pointer"),T=m==null?d:Li(m),g=_==null?d:Li(_),d=new v(E,f+"leave",m,n,c),d.target=T,d.relatedTarget=g,E=null,Fr(c)===u&&(v=new v(p,f+"enter",_,n,c),v.target=g,v.relatedTarget=T,E=v),T=E,m&&_)t:{for(v=m,p=_,f=0,g=v;g;g=Si(g))f++;for(g=0,E=p;E;E=Si(E))g++;for(;0<f-g;)v=Si(v),f--;for(;0<g-f;)p=Si(p),g--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=Si(v),p=Si(p)}v=null}else v=null;m!==null&&qg(h,d,m,v,!1),_!==null&&T!==null&&qg(h,T,_,v,!0)}}e:{if(d=u?Li(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var A=xA;else if($g(d))if(x0)A=VA;else{A=OA;var P=DA}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=bA);if(A&&(A=A(t,u))){N0(h,A,n,c);break e}P&&P(t,d,u),t==="focusout"&&(P=d._wrapperState)&&P.controlled&&d.type==="number"&&hd(d,"number",d.value)}switch(P=u?Li(u):window,t){case"focusin":($g(P)||P.contentEditable==="true")&&(bi=P,Id=u,oo=null);break;case"focusout":oo=Id=bi=null;break;case"mousedown":Sd=!0;break;case"contextmenu":case"mouseup":case"dragend":Sd=!1,zg(h,n,c);break;case"selectionchange":if($A)break;case"keydown":case"keyup":zg(h,n,c)}var N;if(ap)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Oi?k0(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(R0&&n.locale!=="ko"&&(Oi||L!=="onCompositionStart"?L==="onCompositionEnd"&&Oi&&(N=C0()):(ir=c,ip="value"in ir?ir.value:ir.textContent,Oi=!0)),P=Kl(u,L),0<P.length&&(L=new bg(L,t,null,n,c),h.push({event:L,listeners:P}),N?L.data=N:(N=P0(n),N!==null&&(L.data=N)))),(N=CA?RA(t,n):kA(t,n))&&(u=Kl(u,"onBeforeInput"),0<u.length&&(c=new bg("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=N))}j0(h,e)})}function No(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Kl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Io(t,n),s!=null&&r.unshift(No(t,s,i)),s=Io(t,e),s!=null&&r.push(No(t,s,i))),t=t.return}return r}function Si(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Io(n,s),l!=null&&o.unshift(No(n,l,a))):i||(l=Io(n,s),l!=null&&o.push(No(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var BA=/\r\n?/g,zA=/\u0000|\uFFFD/g;function Kg(t){return(typeof t=="string"?t:""+t).replace(BA,`
`).replace(zA,"")}function Qa(t,e,n){if(e=Kg(e),Kg(t)!==e&&n)throw Error(R(425))}function Gl(){}var Ad=null,Cd=null;function Rd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kd=typeof setTimeout=="function"?setTimeout:void 0,HA=typeof clearTimeout=="function"?clearTimeout:void 0,Gg=typeof Promise=="function"?Promise:void 0,WA=typeof queueMicrotask=="function"?queueMicrotask:typeof Gg<"u"?function(t){return Gg.resolve(null).then(t).catch(qA)}:kd;function qA(t){setTimeout(function(){throw t})}function hh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Co(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Co(e)}function dr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Qg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ss=Math.random().toString(36).slice(2),hn="__reactFiber$"+Ss,xo="__reactProps$"+Ss,Un="__reactContainer$"+Ss,Pd="__reactEvents$"+Ss,KA="__reactListeners$"+Ss,GA="__reactHandles$"+Ss;function Fr(t){var e=t[hn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Un]||n[hn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qg(t);t!==null;){if(n=t[hn])return n;t=Qg(t)}return e}t=n,n=t.parentNode}return null}function ca(t){return t=t[hn]||t[Un],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Li(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(R(33))}function Yu(t){return t[xo]||null}var Nd=[],Mi=-1;function xr(t){return{current:t}}function _e(t){0>Mi||(t.current=Nd[Mi],Nd[Mi]=null,Mi--)}function pe(t,e){Mi++,Nd[Mi]=t.current,t.current=e}var Cr={},dt=xr(Cr),At=xr(!1),ei=Cr;function os(t,e){var n=t.type.contextTypes;if(!n)return Cr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ct(t){return t=t.childContextTypes,t!=null}function Ql(){_e(At),_e(dt)}function Xg(t,e,n){if(dt.current!==Cr)throw Error(R(168));pe(dt,e),pe(At,n)}function z0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(R(108,DS(t)||"Unknown",i));return Se({},n,r)}function Xl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Cr,ei=dt.current,pe(dt,t),pe(At,At.current),!0}function Yg(t,e,n){var r=t.stateNode;if(!r)throw Error(R(169));n?(t=z0(t,e,ei),r.__reactInternalMemoizedMergedChildContext=t,_e(At),_e(dt),pe(dt,t)):_e(At),pe(At,n)}var xn=null,Ju=!1,dh=!1;function H0(t){xn===null?xn=[t]:xn.push(t)}function QA(t){Ju=!0,H0(t)}function Dr(){if(!dh&&xn!==null){dh=!0;var t=0,e=ue;try{var n=xn;for(ue=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}xn=null,Ju=!1}catch(i){throw xn!==null&&(xn=xn.slice(t+1)),m0(ep,Dr),i}finally{ue=e,dh=!1}}return null}var $i=[],Fi=0,Yl=null,Jl=0,Mt=[],$t=0,ti=null,On=1,bn="";function Lr(t,e){$i[Fi++]=Jl,$i[Fi++]=Yl,Yl=t,Jl=e}function W0(t,e,n){Mt[$t++]=On,Mt[$t++]=bn,Mt[$t++]=ti,ti=t;var r=On;t=bn;var i=32-en(r)-1;r&=~(1<<i),n+=1;var s=32-en(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,On=1<<32-en(e)+i|n<<i|r,bn=s+t}else On=1<<s|n<<i|r,bn=t}function up(t){t.return!==null&&(Lr(t,1),W0(t,1,0))}function cp(t){for(;t===Yl;)Yl=$i[--Fi],$i[Fi]=null,Jl=$i[--Fi],$i[Fi]=null;for(;t===ti;)ti=Mt[--$t],Mt[$t]=null,bn=Mt[--$t],Mt[$t]=null,On=Mt[--$t],Mt[$t]=null}var Nt=null,Pt=null,we=!1,Yt=null;function q0(t,e){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Jg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nt=t,Pt=dr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nt=t,Pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ti!==null?{id:On,overflow:bn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nt=t,Pt=null,!0):!1;default:return!1}}function xd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Dd(t){if(we){var e=Pt;if(e){var n=e;if(!Jg(t,e)){if(xd(t))throw Error(R(418));e=dr(n.nextSibling);var r=Nt;e&&Jg(t,e)?q0(r,n):(t.flags=t.flags&-4097|2,we=!1,Nt=t)}}else{if(xd(t))throw Error(R(418));t.flags=t.flags&-4097|2,we=!1,Nt=t}}}function Zg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nt=t}function Xa(t){if(t!==Nt)return!1;if(!we)return Zg(t),we=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Rd(t.type,t.memoizedProps)),e&&(e=Pt)){if(xd(t))throw K0(),Error(R(418));for(;e;)q0(t,e),e=dr(e.nextSibling)}if(Zg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(R(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pt=dr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pt=null}}else Pt=Nt?dr(t.stateNode.nextSibling):null;return!0}function K0(){for(var t=Pt;t;)t=dr(t.nextSibling)}function as(){Pt=Nt=null,we=!1}function hp(t){Yt===null?Yt=[t]:Yt.push(t)}var XA=Kn.ReactCurrentBatchConfig;function Qt(t,e){if(t&&t.defaultProps){e=Se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Zl=xr(null),eu=null,Ui=null,dp=null;function fp(){dp=Ui=eu=null}function pp(t){var e=Zl.current;_e(Zl),t._currentValue=e}function Od(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Yi(t,e){eu=t,dp=Ui=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(St=!0),t.firstContext=null)}function Ht(t){var e=t._currentValue;if(dp!==t)if(t={context:t,memoizedValue:e,next:null},Ui===null){if(eu===null)throw Error(R(308));Ui=t,eu.dependencies={lanes:0,firstContext:t}}else Ui=Ui.next=t;return e}var Ur=null;function mp(t){Ur===null?Ur=[t]:Ur.push(t)}function G0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,mp(e)):(n.next=i.next,i.next=n),e.interleaved=n,jn(t,r)}function jn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Jn=!1;function gp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Q0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function $n(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function fr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,jn(t,n)}return i=r.interleaved,i===null?(e.next=e,mp(r)):(e.next=i.next,i.next=e),r.interleaved=e,jn(t,n)}function vl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tp(t,n)}}function ey(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function tu(t,e,n,r){var i=t.updateQueue;Jn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,v=a;switch(d=e,m=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){h=_.call(m,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,d=typeof _=="function"?_.call(m,h,d):_,d==null)break e;h=Se({},h,d);break e;case 2:Jn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ri|=o,t.lanes=o,t.memoizedState=h}}function ty(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var X0=new Gv.Component().refs;function bd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zu={isMounted:function(t){return(t=t._reactInternals)?fi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=_t(),i=mr(t),s=$n(r,i);s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,i),e!==null&&(tn(e,t,i,r),vl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=_t(),i=mr(t),s=$n(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,i),e!==null&&(tn(e,t,i,r),vl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=_t(),r=mr(t),i=$n(n,r);i.tag=2,e!=null&&(i.callback=e),e=fr(t,i,r),e!==null&&(tn(e,t,r,n),vl(e,t,r))}};function ny(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ko(n,r)||!ko(i,s):!0}function Y0(t,e,n){var r=!1,i=Cr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ht(s):(i=Ct(e)?ei:dt.current,r=e.contextTypes,s=(r=r!=null)?os(t,i):Cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ry(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Zu.enqueueReplaceState(e,e.state,null)}function Vd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=X0,gp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ht(s):(s=Ct(e)?ei:dt.current,i.context=os(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Zu.enqueueReplaceState(i,i.state,null),tu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function js(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===X0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,t))}return t}function Ya(t,e){throw t=Object.prototype.toString.call(e),Error(R(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function iy(t){var e=t._init;return e(t._payload)}function J0(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=gr(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,g,E){return f===null||f.tag!==6?(f=vh(g,p.mode,E),f.return=p,f):(f=i(f,g),f.return=p,f)}function l(p,f,g,E){var A=g.type;return A===Di?c(p,f,g.props.children,E,g.key):f!==null&&(f.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Yn&&iy(A)===f.type)?(E=i(f,g.props),E.ref=js(p,f,g),E.return=p,E):(E=Al(g.type,g.key,g.props,null,p.mode,E),E.ref=js(p,f,g),E.return=p,E)}function u(p,f,g,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Eh(g,p.mode,E),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,E,A){return f===null||f.tag!==7?(f=Yr(g,p.mode,E,A),f.return=p,f):(f=i(f,g),f.return=p,f)}function h(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=vh(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ua:return g=Al(f.type,f.key,f.props,null,p.mode,g),g.ref=js(p,null,f),g.return=p,g;case xi:return f=Eh(f,p.mode,g),f.return=p,f;case Yn:var E=f._init;return h(p,E(f._payload),g)}if(Qs(f)||Ls(f))return f=Yr(f,p.mode,g,null),f.return=p,f;Ya(p,f)}return null}function d(p,f,g,E){var A=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return A!==null?null:a(p,f,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ua:return g.key===A?l(p,f,g,E):null;case xi:return g.key===A?u(p,f,g,E):null;case Yn:return A=g._init,d(p,f,A(g._payload),E)}if(Qs(g)||Ls(g))return A!==null?null:c(p,f,g,E,null);Ya(p,g)}return null}function m(p,f,g,E,A){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(g)||null,a(f,p,""+E,A);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ua:return p=p.get(E.key===null?g:E.key)||null,l(f,p,E,A);case xi:return p=p.get(E.key===null?g:E.key)||null,u(f,p,E,A);case Yn:var P=E._init;return m(p,f,g,P(E._payload),A)}if(Qs(E)||Ls(E))return p=p.get(g)||null,c(f,p,E,A,null);Ya(f,E)}return null}function _(p,f,g,E){for(var A=null,P=null,N=f,L=f=0,W=null;N!==null&&L<g.length;L++){N.index>L?(W=N,N=null):W=N.sibling;var B=d(p,N,g[L],E);if(B===null){N===null&&(N=W);break}t&&N&&B.alternate===null&&e(p,N),f=s(B,f,L),P===null?A=B:P.sibling=B,P=B,N=W}if(L===g.length)return n(p,N),we&&Lr(p,L),A;if(N===null){for(;L<g.length;L++)N=h(p,g[L],E),N!==null&&(f=s(N,f,L),P===null?A=N:P.sibling=N,P=N);return we&&Lr(p,L),A}for(N=r(p,N);L<g.length;L++)W=m(N,p,L,g[L],E),W!==null&&(t&&W.alternate!==null&&N.delete(W.key===null?L:W.key),f=s(W,f,L),P===null?A=W:P.sibling=W,P=W);return t&&N.forEach(function(ee){return e(p,ee)}),we&&Lr(p,L),A}function v(p,f,g,E){var A=Ls(g);if(typeof A!="function")throw Error(R(150));if(g=A.call(g),g==null)throw Error(R(151));for(var P=A=null,N=f,L=f=0,W=null,B=g.next();N!==null&&!B.done;L++,B=g.next()){N.index>L?(W=N,N=null):W=N.sibling;var ee=d(p,N,B.value,E);if(ee===null){N===null&&(N=W);break}t&&N&&ee.alternate===null&&e(p,N),f=s(ee,f,L),P===null?A=ee:P.sibling=ee,P=ee,N=W}if(B.done)return n(p,N),we&&Lr(p,L),A;if(N===null){for(;!B.done;L++,B=g.next())B=h(p,B.value,E),B!==null&&(f=s(B,f,L),P===null?A=B:P.sibling=B,P=B);return we&&Lr(p,L),A}for(N=r(p,N);!B.done;L++,B=g.next())B=m(N,p,L,B.value,E),B!==null&&(t&&B.alternate!==null&&N.delete(B.key===null?L:B.key),f=s(B,f,L),P===null?A=B:P.sibling=B,P=B);return t&&N.forEach(function(te){return e(p,te)}),we&&Lr(p,L),A}function T(p,f,g,E){if(typeof g=="object"&&g!==null&&g.type===Di&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ua:e:{for(var A=g.key,P=f;P!==null;){if(P.key===A){if(A=g.type,A===Di){if(P.tag===7){n(p,P.sibling),f=i(P,g.props.children),f.return=p,p=f;break e}}else if(P.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Yn&&iy(A)===P.type){n(p,P.sibling),f=i(P,g.props),f.ref=js(p,P,g),f.return=p,p=f;break e}n(p,P);break}else e(p,P);P=P.sibling}g.type===Di?(f=Yr(g.props.children,p.mode,E,g.key),f.return=p,p=f):(E=Al(g.type,g.key,g.props,null,p.mode,E),E.ref=js(p,f,g),E.return=p,p=E)}return o(p);case xi:e:{for(P=g.key;f!==null;){if(f.key===P)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Eh(g,p.mode,E),f.return=p,p=f}return o(p);case Yn:return P=g._init,T(p,f,P(g._payload),E)}if(Qs(g))return _(p,f,g,E);if(Ls(g))return v(p,f,g,E);Ya(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=vh(g,p.mode,E),f.return=p,p=f),o(p)):n(p,f)}return T}var ls=J0(!0),Z0=J0(!1),ha={},yn=xr(ha),Do=xr(ha),Oo=xr(ha);function jr(t){if(t===ha)throw Error(R(174));return t}function yp(t,e){switch(pe(Oo,e),pe(Do,t),pe(yn,ha),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:fd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=fd(e,t)}_e(yn),pe(yn,e)}function us(){_e(yn),_e(Do),_e(Oo)}function eE(t){jr(Oo.current);var e=jr(yn.current),n=fd(e,t.type);e!==n&&(pe(Do,t),pe(yn,n))}function _p(t){Do.current===t&&(_e(yn),_e(Do))}var Te=xr(0);function nu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fh=[];function vp(){for(var t=0;t<fh.length;t++)fh[t]._workInProgressVersionPrimary=null;fh.length=0}var El=Kn.ReactCurrentDispatcher,ph=Kn.ReactCurrentBatchConfig,ni=0,Ie=null,Fe=null,He=null,ru=!1,ao=!1,bo=0,YA=0;function it(){throw Error(R(321))}function Ep(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!nn(t[n],e[n]))return!1;return!0}function wp(t,e,n,r,i,s){if(ni=s,Ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,El.current=t===null||t.memoizedState===null?tC:nC,t=n(r,i),ao){s=0;do{if(ao=!1,bo=0,25<=s)throw Error(R(301));s+=1,He=Fe=null,e.updateQueue=null,El.current=rC,t=n(r,i)}while(ao)}if(El.current=iu,e=Fe!==null&&Fe.next!==null,ni=0,He=Fe=Ie=null,ru=!1,e)throw Error(R(300));return t}function Tp(){var t=bo!==0;return bo=0,t}function ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Ie.memoizedState=He=t:He=He.next=t,He}function Wt(){if(Fe===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var e=He===null?Ie.memoizedState:He.next;if(e!==null)He=e,Fe=t;else{if(t===null)throw Error(R(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},He===null?Ie.memoizedState=He=t:He=He.next=t}return He}function Vo(t,e){return typeof e=="function"?e(t):e}function mh(t){var e=Wt(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=Fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ni&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Ie.lanes|=c,ri|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,nn(r,e.memoizedState)||(St=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ie.lanes|=s,ri|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function gh(t){var e=Wt(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);nn(s,e.memoizedState)||(St=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function tE(){}function nE(t,e){var n=Ie,r=Wt(),i=e(),s=!nn(r.memoizedState,i);if(s&&(r.memoizedState=i,St=!0),r=r.queue,Ip(sE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||He!==null&&He.memoizedState.tag&1){if(n.flags|=2048,Lo(9,iE.bind(null,n,r,i,e),void 0,null),We===null)throw Error(R(349));ni&30||rE(n,e,i)}return i}function rE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function iE(t,e,n,r){e.value=n,e.getSnapshot=r,oE(e)&&aE(t)}function sE(t,e,n){return n(function(){oE(e)&&aE(t)})}function oE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!nn(t,n)}catch{return!0}}function aE(t){var e=jn(t,1);e!==null&&tn(e,t,1,-1)}function sy(t){var e=ln();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:t},e.queue=t,t=t.dispatch=eC.bind(null,Ie,t),[e.memoizedState,t]}function Lo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function lE(){return Wt().memoizedState}function wl(t,e,n,r){var i=ln();Ie.flags|=t,i.memoizedState=Lo(1|e,n,void 0,r===void 0?null:r)}function ec(t,e,n,r){var i=Wt();r=r===void 0?null:r;var s=void 0;if(Fe!==null){var o=Fe.memoizedState;if(s=o.destroy,r!==null&&Ep(r,o.deps)){i.memoizedState=Lo(e,n,s,r);return}}Ie.flags|=t,i.memoizedState=Lo(1|e,n,s,r)}function oy(t,e){return wl(8390656,8,t,e)}function Ip(t,e){return ec(2048,8,t,e)}function uE(t,e){return ec(4,2,t,e)}function cE(t,e){return ec(4,4,t,e)}function hE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function dE(t,e,n){return n=n!=null?n.concat([t]):null,ec(4,4,hE.bind(null,e,t),n)}function Sp(){}function fE(t,e){var n=Wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ep(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function pE(t,e){var n=Wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ep(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function mE(t,e,n){return ni&21?(nn(n,e)||(n=_0(),Ie.lanes|=n,ri|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,St=!0),t.memoizedState=n)}function JA(t,e){var n=ue;ue=n!==0&&4>n?n:4,t(!0);var r=ph.transition;ph.transition={};try{t(!1),e()}finally{ue=n,ph.transition=r}}function gE(){return Wt().memoizedState}function ZA(t,e,n){var r=mr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},yE(t))_E(e,n);else if(n=G0(t,e,n,r),n!==null){var i=_t();tn(n,t,r,i),vE(n,e,r)}}function eC(t,e,n){var r=mr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(yE(t))_E(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,nn(a,o)){var l=e.interleaved;l===null?(i.next=i,mp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=G0(t,e,i,r),n!==null&&(i=_t(),tn(n,t,r,i),vE(n,e,r))}}function yE(t){var e=t.alternate;return t===Ie||e!==null&&e===Ie}function _E(t,e){ao=ru=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function vE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tp(t,n)}}var iu={readContext:Ht,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},tC={readContext:Ht,useCallback:function(t,e){return ln().memoizedState=[t,e===void 0?null:e],t},useContext:Ht,useEffect:oy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wl(4194308,4,hE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wl(4194308,4,t,e)},useInsertionEffect:function(t,e){return wl(4,2,t,e)},useMemo:function(t,e){var n=ln();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ln();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ZA.bind(null,Ie,t),[r.memoizedState,t]},useRef:function(t){var e=ln();return t={current:t},e.memoizedState=t},useState:sy,useDebugValue:Sp,useDeferredValue:function(t){return ln().memoizedState=t},useTransition:function(){var t=sy(!1),e=t[0];return t=JA.bind(null,t[1]),ln().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ie,i=ln();if(we){if(n===void 0)throw Error(R(407));n=n()}else{if(n=e(),We===null)throw Error(R(349));ni&30||rE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,oy(sE.bind(null,r,s,t),[t]),r.flags|=2048,Lo(9,iE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ln(),e=We.identifierPrefix;if(we){var n=bn,r=On;n=(r&~(1<<32-en(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=bo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=YA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},nC={readContext:Ht,useCallback:fE,useContext:Ht,useEffect:Ip,useImperativeHandle:dE,useInsertionEffect:uE,useLayoutEffect:cE,useMemo:pE,useReducer:mh,useRef:lE,useState:function(){return mh(Vo)},useDebugValue:Sp,useDeferredValue:function(t){var e=Wt();return mE(e,Fe.memoizedState,t)},useTransition:function(){var t=mh(Vo)[0],e=Wt().memoizedState;return[t,e]},useMutableSource:tE,useSyncExternalStore:nE,useId:gE,unstable_isNewReconciler:!1},rC={readContext:Ht,useCallback:fE,useContext:Ht,useEffect:Ip,useImperativeHandle:dE,useInsertionEffect:uE,useLayoutEffect:cE,useMemo:pE,useReducer:gh,useRef:lE,useState:function(){return gh(Vo)},useDebugValue:Sp,useDeferredValue:function(t){var e=Wt();return Fe===null?e.memoizedState=t:mE(e,Fe.memoizedState,t)},useTransition:function(){var t=gh(Vo)[0],e=Wt().memoizedState;return[t,e]},useMutableSource:tE,useSyncExternalStore:nE,useId:gE,unstable_isNewReconciler:!1};function cs(t,e){try{var n="",r=e;do n+=xS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function yh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ld(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iC=typeof WeakMap=="function"?WeakMap:Map;function EE(t,e,n){n=$n(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ou||(ou=!0,qd=r),Ld(t,e)},n}function wE(t,e,n){n=$n(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ld(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ld(t,e),typeof r!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ay(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new iC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=_C.bind(null,t,e,n),e.then(t,t))}function ly(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function uy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=$n(-1,1),e.tag=2,fr(n,e,1))),n.lanes|=1),t)}var sC=Kn.ReactCurrentOwner,St=!1;function mt(t,e,n,r){e.child=t===null?Z0(e,null,n,r):ls(e,t.child,n,r)}function cy(t,e,n,r,i){n=n.render;var s=e.ref;return Yi(e,i),r=wp(t,e,n,r,s,i),n=Tp(),t!==null&&!St?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Bn(t,e,i)):(we&&n&&up(e),e.flags|=1,mt(t,e,r,i),e.child)}function hy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Dp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,TE(t,e,s,r,i)):(t=Al(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ko,n(o,r)&&t.ref===e.ref)return Bn(t,e,i)}return e.flags|=1,t=gr(s,r),t.ref=e.ref,t.return=e,e.child=t}function TE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ko(s,r)&&t.ref===e.ref)if(St=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(St=!0);else return e.lanes=t.lanes,Bn(t,e,i)}return Md(t,e,n,r,i)}function IE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Bi,kt),kt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pe(Bi,kt),kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,pe(Bi,kt),kt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,pe(Bi,kt),kt|=r;return mt(t,e,i,n),e.child}function SE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Md(t,e,n,r,i){var s=Ct(n)?ei:dt.current;return s=os(e,s),Yi(e,i),n=wp(t,e,n,r,s,i),r=Tp(),t!==null&&!St?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Bn(t,e,i)):(we&&r&&up(e),e.flags|=1,mt(t,e,n,i),e.child)}function dy(t,e,n,r,i){if(Ct(n)){var s=!0;Xl(e)}else s=!1;if(Yi(e,i),e.stateNode===null)Tl(t,e),Y0(e,n,r),Vd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ht(u):(u=Ct(n)?ei:dt.current,u=os(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&ry(e,o,r,u),Jn=!1;var d=e.memoizedState;o.state=d,tu(e,r,o,i),l=e.memoizedState,a!==r||d!==l||At.current||Jn?(typeof c=="function"&&(bd(e,n,c,r),l=e.memoizedState),(a=Jn||ny(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Q0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Qt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ht(l):(l=Ct(n)?ei:dt.current,l=os(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&ry(e,o,r,l),Jn=!1,d=e.memoizedState,o.state=d,tu(e,r,o,i);var _=e.memoizedState;a!==h||d!==_||At.current||Jn?(typeof m=="function"&&(bd(e,n,m,r),_=e.memoizedState),(u=Jn||ny(e,n,u,r,d,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return $d(t,e,n,r,s,i)}function $d(t,e,n,r,i,s){SE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Yg(e,n,!1),Bn(t,e,s);r=e.stateNode,sC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ls(e,t.child,null,s),e.child=ls(e,null,a,s)):mt(t,e,a,s),e.memoizedState=r.state,i&&Yg(e,n,!0),e.child}function AE(t){var e=t.stateNode;e.pendingContext?Xg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Xg(t,e.context,!1),yp(t,e.containerInfo)}function fy(t,e,n,r,i){return as(),hp(i),e.flags|=256,mt(t,e,n,r),e.child}var Fd={dehydrated:null,treeContext:null,retryLane:0};function Ud(t){return{baseLanes:t,cachePool:null,transitions:null}}function CE(t,e,n){var r=e.pendingProps,i=Te.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),pe(Te,i&1),t===null)return Dd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=rc(o,r,0,null),t=Yr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ud(n),e.memoizedState=Fd,t):Ap(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return oC(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=gr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=gr(a,s):(s=Yr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ud(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Fd,r}return s=t.child,t=s.sibling,r=gr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ap(t,e){return e=rc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ja(t,e,n,r){return r!==null&&hp(r),ls(e,t.child,null,n),t=Ap(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function oC(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=yh(Error(R(422))),Ja(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=rc({mode:"visible",children:r.children},i,0,null),s=Yr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ls(e,t.child,null,o),e.child.memoizedState=Ud(o),e.memoizedState=Fd,s);if(!(e.mode&1))return Ja(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(R(419)),r=yh(s,r,void 0),Ja(t,e,o,r)}if(a=(o&t.childLanes)!==0,St||a){if(r=We,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,jn(t,i),tn(r,t,i,-1))}return xp(),r=yh(Error(R(421))),Ja(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=vC.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Pt=dr(i.nextSibling),Nt=e,we=!0,Yt=null,t!==null&&(Mt[$t++]=On,Mt[$t++]=bn,Mt[$t++]=ti,On=t.id,bn=t.overflow,ti=e),e=Ap(e,r.children),e.flags|=4096,e)}function py(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Od(t.return,e,n)}function _h(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function RE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(mt(t,e,r.children,n),r=Te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&py(t,n,e);else if(t.tag===19)py(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(pe(Te,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&nu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),_h(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&nu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}_h(e,!0,n,null,s);break;case"together":_h(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Tl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Bn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ri|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(R(153));if(e.child!==null){for(t=e.child,n=gr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=gr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function aC(t,e,n){switch(e.tag){case 3:AE(e),as();break;case 5:eE(e);break;case 1:Ct(e.type)&&Xl(e);break;case 4:yp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;pe(Zl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(pe(Te,Te.current&1),e.flags|=128,null):n&e.child.childLanes?CE(t,e,n):(pe(Te,Te.current&1),t=Bn(t,e,n),t!==null?t.sibling:null);pe(Te,Te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return RE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(Te,Te.current),r)break;return null;case 22:case 23:return e.lanes=0,IE(t,e,n)}return Bn(t,e,n)}var kE,jd,PE,NE;kE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jd=function(){};PE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,jr(yn.current);var s=null;switch(n){case"input":i=ud(t,i),r=ud(t,r),s=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),s=[];break;case"textarea":i=dd(t,i),r=dd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Gl)}pd(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(wo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(wo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&me("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};NE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Bs(t,e){if(!we)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function st(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function lC(t,e,n){var r=e.pendingProps;switch(cp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(e),null;case 1:return Ct(e.type)&&Ql(),st(e),null;case 3:return r=e.stateNode,us(),_e(At),_e(dt),vp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Xa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yt!==null&&(Qd(Yt),Yt=null))),jd(t,e),st(e),null;case 5:_p(e);var i=jr(Oo.current);if(n=e.type,t!==null&&e.stateNode!=null)PE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(R(166));return st(e),null}if(t=jr(yn.current),Xa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[hn]=e,r[xo]=s,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<Ys.length;i++)me(Ys[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":Ig(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":Ag(r,s),me("invalid",r)}pd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Qa(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Qa(r.textContent,a,t),i=["children",""+a]):wo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":ja(r),Sg(r,s,!0);break;case"textarea":ja(r),Cg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Gl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=r0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[hn]=e,t[xo]=r,kE(t,e,!1,!1),e.stateNode=t;e:{switch(o=md(n,r),n){case"dialog":me("cancel",t),me("close",t),i=r;break;case"iframe":case"object":case"embed":me("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ys.length;i++)me(Ys[i],t);i=r;break;case"source":me("error",t),i=r;break;case"img":case"image":case"link":me("error",t),me("load",t),i=r;break;case"details":me("toggle",t),i=r;break;case"input":Ig(t,r),i=ud(t,r),me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),me("invalid",t);break;case"textarea":Ag(t,r),i=dd(t,r),me("invalid",t);break;default:i=r}pd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?o0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&i0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&To(t,l):typeof l=="number"&&To(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(wo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&me("scroll",t):l!=null&&Qf(t,s,l,o))}switch(n){case"input":ja(t),Sg(t,r,!1);break;case"textarea":ja(t),Cg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ar(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ki(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ki(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Gl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return st(e),null;case 6:if(t&&e.stateNode!=null)NE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(R(166));if(n=jr(Oo.current),jr(yn.current),Xa(e)){if(r=e.stateNode,n=e.memoizedProps,r[hn]=e,(s=r.nodeValue!==n)&&(t=Nt,t!==null))switch(t.tag){case 3:Qa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[hn]=e,e.stateNode=r}return st(e),null;case 13:if(_e(Te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(we&&Pt!==null&&e.mode&1&&!(e.flags&128))K0(),as(),e.flags|=98560,s=!1;else if(s=Xa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(R(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(R(317));s[hn]=e}else as(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;st(e),s=!1}else Yt!==null&&(Qd(Yt),Yt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Te.current&1?Ue===0&&(Ue=3):xp())),e.updateQueue!==null&&(e.flags|=4),st(e),null);case 4:return us(),jd(t,e),t===null&&Po(e.stateNode.containerInfo),st(e),null;case 10:return pp(e.type._context),st(e),null;case 17:return Ct(e.type)&&Ql(),st(e),null;case 19:if(_e(Te),s=e.memoizedState,s===null)return st(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Bs(s,!1);else{if(Ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=nu(t),o!==null){for(e.flags|=128,Bs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pe(Te,Te.current&1|2),e.child}t=t.sibling}s.tail!==null&&xe()>hs&&(e.flags|=128,r=!0,Bs(s,!1),e.lanes=4194304)}else{if(!r)if(t=nu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Bs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!we)return st(e),null}else 2*xe()-s.renderingStartTime>hs&&n!==1073741824&&(e.flags|=128,r=!0,Bs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xe(),e.sibling=null,n=Te.current,pe(Te,r?n&1|2:n&1),e):(st(e),null);case 22:case 23:return Np(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?kt&1073741824&&(st(e),e.subtreeFlags&6&&(e.flags|=8192)):st(e),null;case 24:return null;case 25:return null}throw Error(R(156,e.tag))}function uC(t,e){switch(cp(e),e.tag){case 1:return Ct(e.type)&&Ql(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return us(),_e(At),_e(dt),vp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _p(e),null;case 13:if(_e(Te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(R(340));as()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(Te),null;case 4:return us(),null;case 10:return pp(e.type._context),null;case 22:case 23:return Np(),null;case 24:return null;default:return null}}var Za=!1,lt=!1,cC=typeof WeakSet=="function"?WeakSet:Set,V=null;function ji(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function Bd(t,e,n){try{n()}catch(r){Re(t,e,r)}}var my=!1;function hC(t,e){if(Ad=Wl,t=b0(),lp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cd={focusedElem:t,selectionRange:n},Wl=!1,V=e;V!==null;)if(e=V,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,V=t;else for(;V!==null;){e=V;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,T=_.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:Qt(e.type,v),T);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(E){Re(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,V=t;break}V=e.return}return _=my,my=!1,_}function lo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Bd(e,n,s)}i=i.next}while(i!==r)}}function tc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function zd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function xE(t){var e=t.alternate;e!==null&&(t.alternate=null,xE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[hn],delete e[xo],delete e[Pd],delete e[KA],delete e[GA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function DE(t){return t.tag===5||t.tag===3||t.tag===4}function gy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||DE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Gl));else if(r!==4&&(t=t.child,t!==null))for(Hd(t,e,n),t=t.sibling;t!==null;)Hd(t,e,n),t=t.sibling}function Wd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Wd(t,e,n),t=t.sibling;t!==null;)Wd(t,e,n),t=t.sibling}var Qe=null,Xt=!1;function Gn(t,e,n){for(n=n.child;n!==null;)OE(t,e,n),n=n.sibling}function OE(t,e,n){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(Ku,n)}catch{}switch(n.tag){case 5:lt||ji(n,e);case 6:var r=Qe,i=Xt;Qe=null,Gn(t,e,n),Qe=r,Xt=i,Qe!==null&&(Xt?(t=Qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Qe.removeChild(n.stateNode));break;case 18:Qe!==null&&(Xt?(t=Qe,n=n.stateNode,t.nodeType===8?hh(t.parentNode,n):t.nodeType===1&&hh(t,n),Co(t)):hh(Qe,n.stateNode));break;case 4:r=Qe,i=Xt,Qe=n.stateNode.containerInfo,Xt=!0,Gn(t,e,n),Qe=r,Xt=i;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Bd(n,e,o),i=i.next}while(i!==r)}Gn(t,e,n);break;case 1:if(!lt&&(ji(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Re(n,e,a)}Gn(t,e,n);break;case 21:Gn(t,e,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,Gn(t,e,n),lt=r):Gn(t,e,n);break;default:Gn(t,e,n)}}function yy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cC),e.forEach(function(r){var i=EC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Kt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Qe=a.stateNode,Xt=!1;break e;case 3:Qe=a.stateNode.containerInfo,Xt=!0;break e;case 4:Qe=a.stateNode.containerInfo,Xt=!0;break e}a=a.return}if(Qe===null)throw Error(R(160));OE(s,o,i),Qe=null,Xt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Re(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)bE(e,t),e=e.sibling}function bE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kt(e,t),an(t),r&4){try{lo(3,t,t.return),tc(3,t)}catch(v){Re(t,t.return,v)}try{lo(5,t,t.return)}catch(v){Re(t,t.return,v)}}break;case 1:Kt(e,t),an(t),r&512&&n!==null&&ji(n,n.return);break;case 5:if(Kt(e,t),an(t),r&512&&n!==null&&ji(n,n.return),t.flags&32){var i=t.stateNode;try{To(i,"")}catch(v){Re(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&t0(i,s),md(a,o);var u=md(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?o0(i,h):c==="dangerouslySetInnerHTML"?i0(i,h):c==="children"?To(i,h):Qf(i,c,h,u)}switch(a){case"input":cd(i,s);break;case"textarea":n0(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ki(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ki(i,!!s.multiple,s.defaultValue,!0):Ki(i,!!s.multiple,s.multiple?[]:"",!1))}i[xo]=s}catch(v){Re(t,t.return,v)}}break;case 6:if(Kt(e,t),an(t),r&4){if(t.stateNode===null)throw Error(R(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Re(t,t.return,v)}}break;case 3:if(Kt(e,t),an(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Co(e.containerInfo)}catch(v){Re(t,t.return,v)}break;case 4:Kt(e,t),an(t);break;case 13:Kt(e,t),an(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(kp=xe())),r&4&&yy(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(lt=(u=lt)||c,Kt(e,t),lt=u):Kt(e,t),an(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(V=t,c=t.child;c!==null;){for(h=V=c;V!==null;){switch(d=V,m=d.child,d.tag){case 0:case 11:case 14:case 15:lo(4,d,d.return);break;case 1:ji(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){Re(r,n,v)}}break;case 5:ji(d,d.return);break;case 22:if(d.memoizedState!==null){vy(h);continue}}m!==null?(m.return=d,V=m):vy(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=s0("display",o))}catch(v){Re(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){Re(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Kt(e,t),an(t),r&4&&yy(t);break;case 21:break;default:Kt(e,t),an(t)}}function an(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(DE(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(To(i,""),r.flags&=-33);var s=gy(t);Wd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=gy(t);Hd(t,a,o);break;default:throw Error(R(161))}}catch(l){Re(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function dC(t,e,n){V=t,VE(t)}function VE(t,e,n){for(var r=(t.mode&1)!==0;V!==null;){var i=V,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Za;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||lt;a=Za;var u=lt;if(Za=o,(lt=l)&&!u)for(V=i;V!==null;)o=V,l=o.child,o.tag===22&&o.memoizedState!==null?Ey(i):l!==null?(l.return=o,V=l):Ey(i);for(;s!==null;)V=s,VE(s),s=s.sibling;V=i,Za=a,lt=u}_y(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,V=s):_y(t)}}function _y(t){for(;V!==null;){var e=V;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:lt||tc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!lt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Qt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ty(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ty(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Co(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}lt||e.flags&512&&zd(e)}catch(d){Re(e,e.return,d)}}if(e===t){V=null;break}if(n=e.sibling,n!==null){n.return=e.return,V=n;break}V=e.return}}function vy(t){for(;V!==null;){var e=V;if(e===t){V=null;break}var n=e.sibling;if(n!==null){n.return=e.return,V=n;break}V=e.return}}function Ey(t){for(;V!==null;){var e=V;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{tc(4,e)}catch(l){Re(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Re(e,i,l)}}var s=e.return;try{zd(e)}catch(l){Re(e,s,l)}break;case 5:var o=e.return;try{zd(e)}catch(l){Re(e,o,l)}}}catch(l){Re(e,e.return,l)}if(e===t){V=null;break}var a=e.sibling;if(a!==null){a.return=e.return,V=a;break}V=e.return}}var fC=Math.ceil,su=Kn.ReactCurrentDispatcher,Cp=Kn.ReactCurrentOwner,Bt=Kn.ReactCurrentBatchConfig,oe=0,We=null,Ve=null,Ze=0,kt=0,Bi=xr(0),Ue=0,Mo=null,ri=0,nc=0,Rp=0,uo=null,Tt=null,kp=0,hs=1/0,Nn=null,ou=!1,qd=null,pr=null,el=!1,sr=null,au=0,co=0,Kd=null,Il=-1,Sl=0;function _t(){return oe&6?xe():Il!==-1?Il:Il=xe()}function mr(t){return t.mode&1?oe&2&&Ze!==0?Ze&-Ze:XA.transition!==null?(Sl===0&&(Sl=_0()),Sl):(t=ue,t!==0||(t=window.event,t=t===void 0?16:A0(t.type)),t):1}function tn(t,e,n,r){if(50<co)throw co=0,Kd=null,Error(R(185));la(t,n,r),(!(oe&2)||t!==We)&&(t===We&&(!(oe&2)&&(nc|=n),Ue===4&&er(t,Ze)),Rt(t,r),n===1&&oe===0&&!(e.mode&1)&&(hs=xe()+500,Ju&&Dr()))}function Rt(t,e){var n=t.callbackNode;XS(t,e);var r=Hl(t,t===We?Ze:0);if(r===0)n!==null&&Pg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Pg(n),e===1)t.tag===0?QA(wy.bind(null,t)):H0(wy.bind(null,t)),WA(function(){!(oe&6)&&Dr()}),n=null;else{switch(v0(r)){case 1:n=ep;break;case 4:n=g0;break;case 16:n=zl;break;case 536870912:n=y0;break;default:n=zl}n=zE(n,LE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function LE(t,e){if(Il=-1,Sl=0,oe&6)throw Error(R(327));var n=t.callbackNode;if(Ji()&&t.callbackNode!==n)return null;var r=Hl(t,t===We?Ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=lu(t,r);else{e=r;var i=oe;oe|=2;var s=$E();(We!==t||Ze!==e)&&(Nn=null,hs=xe()+500,Xr(t,e));do try{gC();break}catch(a){ME(t,a)}while(1);fp(),su.current=s,oe=i,Ve!==null?e=0:(We=null,Ze=0,e=Ue)}if(e!==0){if(e===2&&(i=Ed(t),i!==0&&(r=i,e=Gd(t,i))),e===1)throw n=Mo,Xr(t,0),er(t,r),Rt(t,xe()),n;if(e===6)er(t,r);else{if(i=t.current.alternate,!(r&30)&&!pC(i)&&(e=lu(t,r),e===2&&(s=Ed(t),s!==0&&(r=s,e=Gd(t,s))),e===1))throw n=Mo,Xr(t,0),er(t,r),Rt(t,xe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(R(345));case 2:Mr(t,Tt,Nn);break;case 3:if(er(t,r),(r&130023424)===r&&(e=kp+500-xe(),10<e)){if(Hl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){_t(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=kd(Mr.bind(null,t,Tt,Nn),e);break}Mr(t,Tt,Nn);break;case 4:if(er(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-en(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fC(r/1960))-r,10<r){t.timeoutHandle=kd(Mr.bind(null,t,Tt,Nn),r);break}Mr(t,Tt,Nn);break;case 5:Mr(t,Tt,Nn);break;default:throw Error(R(329))}}}return Rt(t,xe()),t.callbackNode===n?LE.bind(null,t):null}function Gd(t,e){var n=uo;return t.current.memoizedState.isDehydrated&&(Xr(t,e).flags|=256),t=lu(t,e),t!==2&&(e=Tt,Tt=n,e!==null&&Qd(e)),t}function Qd(t){Tt===null?Tt=t:Tt.push.apply(Tt,t)}function pC(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!nn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function er(t,e){for(e&=~Rp,e&=~nc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-en(e),r=1<<n;t[n]=-1,e&=~r}}function wy(t){if(oe&6)throw Error(R(327));Ji();var e=Hl(t,0);if(!(e&1))return Rt(t,xe()),null;var n=lu(t,e);if(t.tag!==0&&n===2){var r=Ed(t);r!==0&&(e=r,n=Gd(t,r))}if(n===1)throw n=Mo,Xr(t,0),er(t,e),Rt(t,xe()),n;if(n===6)throw Error(R(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mr(t,Tt,Nn),Rt(t,xe()),null}function Pp(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(hs=xe()+500,Ju&&Dr())}}function ii(t){sr!==null&&sr.tag===0&&!(oe&6)&&Ji();var e=oe;oe|=1;var n=Bt.transition,r=ue;try{if(Bt.transition=null,ue=1,t)return t()}finally{ue=r,Bt.transition=n,oe=e,!(oe&6)&&Dr()}}function Np(){kt=Bi.current,_e(Bi)}function Xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,HA(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(cp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ql();break;case 3:us(),_e(At),_e(dt),vp();break;case 5:_p(r);break;case 4:us();break;case 13:_e(Te);break;case 19:_e(Te);break;case 10:pp(r.type._context);break;case 22:case 23:Np()}n=n.return}if(We=t,Ve=t=gr(t.current,null),Ze=kt=e,Ue=0,Mo=null,Rp=nc=ri=0,Tt=uo=null,Ur!==null){for(e=0;e<Ur.length;e++)if(n=Ur[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ur=null}return t}function ME(t,e){do{var n=Ve;try{if(fp(),El.current=iu,ru){for(var r=Ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ru=!1}if(ni=0,He=Fe=Ie=null,ao=!1,bo=0,Cp.current=null,n===null||n.return===null){Ue=1,Mo=e,Ve=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ze,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=ly(o);if(m!==null){m.flags&=-257,uy(m,o,a,s,e),m.mode&1&&ay(s,u,e),e=m,l=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(l),e.updateQueue=v}else _.add(l);break e}else{if(!(e&1)){ay(s,u,e),xp();break e}l=Error(R(426))}}else if(we&&a.mode&1){var T=ly(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),uy(T,o,a,s,e),hp(cs(l,a));break e}}s=l=cs(l,a),Ue!==4&&(Ue=2),uo===null?uo=[s]:uo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=EE(s,l,e);ey(s,p);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(pr===null||!pr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=wE(s,a,e);ey(s,E);break e}}s=s.return}while(s!==null)}UE(n)}catch(A){e=A,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(1)}function $E(){var t=su.current;return su.current=iu,t===null?iu:t}function xp(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),We===null||!(ri&268435455)&&!(nc&268435455)||er(We,Ze)}function lu(t,e){var n=oe;oe|=2;var r=$E();(We!==t||Ze!==e)&&(Nn=null,Xr(t,e));do try{mC();break}catch(i){ME(t,i)}while(1);if(fp(),oe=n,su.current=r,Ve!==null)throw Error(R(261));return We=null,Ze=0,Ue}function mC(){for(;Ve!==null;)FE(Ve)}function gC(){for(;Ve!==null&&!jS();)FE(Ve)}function FE(t){var e=BE(t.alternate,t,kt);t.memoizedProps=t.pendingProps,e===null?UE(t):Ve=e,Cp.current=null}function UE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=uC(n,e),n!==null){n.flags&=32767,Ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ue=6,Ve=null;return}}else if(n=lC(n,e,kt),n!==null){Ve=n;return}if(e=e.sibling,e!==null){Ve=e;return}Ve=e=t}while(e!==null);Ue===0&&(Ue=5)}function Mr(t,e,n){var r=ue,i=Bt.transition;try{Bt.transition=null,ue=1,yC(t,e,n,r)}finally{Bt.transition=i,ue=r}return null}function yC(t,e,n,r){do Ji();while(sr!==null);if(oe&6)throw Error(R(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(R(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(YS(t,s),t===We&&(Ve=We=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||el||(el=!0,zE(zl,function(){return Ji(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Bt.transition,Bt.transition=null;var o=ue;ue=1;var a=oe;oe|=4,Cp.current=null,hC(t,n),bE(n,t),MA(Cd),Wl=!!Ad,Cd=Ad=null,t.current=n,dC(n),BS(),oe=a,ue=o,Bt.transition=s}else t.current=n;if(el&&(el=!1,sr=t,au=i),s=t.pendingLanes,s===0&&(pr=null),WS(n.stateNode),Rt(t,xe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ou)throw ou=!1,t=qd,qd=null,t;return au&1&&t.tag!==0&&Ji(),s=t.pendingLanes,s&1?t===Kd?co++:(co=0,Kd=t):co=0,Dr(),null}function Ji(){if(sr!==null){var t=v0(au),e=Bt.transition,n=ue;try{if(Bt.transition=null,ue=16>t?16:t,sr===null)var r=!1;else{if(t=sr,sr=null,au=0,oe&6)throw Error(R(331));var i=oe;for(oe|=4,V=t.current;V!==null;){var s=V,o=s.child;if(V.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(V=u;V!==null;){var c=V;switch(c.tag){case 0:case 11:case 15:lo(8,c,s)}var h=c.child;if(h!==null)h.return=c,V=h;else for(;V!==null;){c=V;var d=c.sibling,m=c.return;if(xE(c),c===u){V=null;break}if(d!==null){d.return=m,V=d;break}V=m}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var T=v.sibling;v.sibling=null,v=T}while(v!==null)}}V=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,V=o;else e:for(;V!==null;){if(s=V,s.flags&2048)switch(s.tag){case 0:case 11:case 15:lo(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,V=p;break e}V=s.return}}var f=t.current;for(V=f;V!==null;){o=V;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,V=g;else e:for(o=f;V!==null;){if(a=V,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:tc(9,a)}}catch(A){Re(a,a.return,A)}if(a===o){V=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,V=E;break e}V=a.return}}if(oe=i,Dr(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(Ku,t)}catch{}r=!0}return r}finally{ue=n,Bt.transition=e}}return!1}function Ty(t,e,n){e=cs(n,e),e=EE(t,e,1),t=fr(t,e,1),e=_t(),t!==null&&(la(t,1,e),Rt(t,e))}function Re(t,e,n){if(t.tag===3)Ty(t,t,n);else for(;e!==null;){if(e.tag===3){Ty(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pr===null||!pr.has(r))){t=cs(n,t),t=wE(e,t,1),e=fr(e,t,1),t=_t(),e!==null&&(la(e,1,t),Rt(e,t));break}}e=e.return}}function _C(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=_t(),t.pingedLanes|=t.suspendedLanes&n,We===t&&(Ze&n)===n&&(Ue===4||Ue===3&&(Ze&130023424)===Ze&&500>xe()-kp?Xr(t,0):Rp|=n),Rt(t,e)}function jE(t,e){e===0&&(t.mode&1?(e=Ha,Ha<<=1,!(Ha&130023424)&&(Ha=4194304)):e=1);var n=_t();t=jn(t,e),t!==null&&(la(t,e,n),Rt(t,n))}function vC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),jE(t,n)}function EC(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(e),jE(t,n)}var BE;BE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||At.current)St=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return St=!1,aC(t,e,n);St=!!(t.flags&131072)}else St=!1,we&&e.flags&1048576&&W0(e,Jl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Tl(t,e),t=e.pendingProps;var i=os(e,dt.current);Yi(e,n),i=wp(null,e,r,t,i,n);var s=Tp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ct(r)?(s=!0,Xl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,gp(e),i.updater=Zu,e.stateNode=i,i._reactInternals=e,Vd(e,r,t,n),e=$d(null,e,r,!0,s,n)):(e.tag=0,we&&s&&up(e),mt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Tl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=TC(r),t=Qt(r,t),i){case 0:e=Md(null,e,r,t,n);break e;case 1:e=dy(null,e,r,t,n);break e;case 11:e=cy(null,e,r,t,n);break e;case 14:e=hy(null,e,r,Qt(r.type,t),n);break e}throw Error(R(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),Md(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),dy(t,e,r,i,n);case 3:e:{if(AE(e),t===null)throw Error(R(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Q0(t,e),tu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=cs(Error(R(423)),e),e=fy(t,e,r,n,i);break e}else if(r!==i){i=cs(Error(R(424)),e),e=fy(t,e,r,n,i);break e}else for(Pt=dr(e.stateNode.containerInfo.firstChild),Nt=e,we=!0,Yt=null,n=Z0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(as(),r===i){e=Bn(t,e,n);break e}mt(t,e,r,n)}e=e.child}return e;case 5:return eE(e),t===null&&Dd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Rd(r,i)?o=null:s!==null&&Rd(r,s)&&(e.flags|=32),SE(t,e),mt(t,e,o,n),e.child;case 6:return t===null&&Dd(e),null;case 13:return CE(t,e,n);case 4:return yp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ls(e,null,r,n):mt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),cy(t,e,r,i,n);case 7:return mt(t,e,e.pendingProps,n),e.child;case 8:return mt(t,e,e.pendingProps.children,n),e.child;case 12:return mt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,pe(Zl,r._currentValue),r._currentValue=o,s!==null)if(nn(s.value,o)){if(s.children===i.children&&!At.current){e=Bn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=$n(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Od(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(R(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Od(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}mt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Yi(e,n),i=Ht(i),r=r(i),e.flags|=1,mt(t,e,r,n),e.child;case 14:return r=e.type,i=Qt(r,e.pendingProps),i=Qt(r.type,i),hy(t,e,r,i,n);case 15:return TE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Qt(r,i),Tl(t,e),e.tag=1,Ct(r)?(t=!0,Xl(e)):t=!1,Yi(e,n),Y0(e,r,i),Vd(e,r,i,n),$d(null,e,r,!0,t,n);case 19:return RE(t,e,n);case 22:return IE(t,e,n)}throw Error(R(156,e.tag))};function zE(t,e){return m0(t,e)}function wC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(t,e,n,r){return new wC(t,e,n,r)}function Dp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function TC(t){if(typeof t=="function")return Dp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yf)return 11;if(t===Jf)return 14}return 2}function gr(t,e){var n=t.alternate;return n===null?(n=jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Al(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Dp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Di:return Yr(n.children,i,s,e);case Xf:o=8,i|=8;break;case sd:return t=jt(12,n,e,i|2),t.elementType=sd,t.lanes=s,t;case od:return t=jt(13,n,e,i),t.elementType=od,t.lanes=s,t;case ad:return t=jt(19,n,e,i),t.elementType=ad,t.lanes=s,t;case Jv:return rc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Xv:o=10;break e;case Yv:o=9;break e;case Yf:o=11;break e;case Jf:o=14;break e;case Yn:o=16,r=null;break e}throw Error(R(130,t==null?t:typeof t,""))}return e=jt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Yr(t,e,n,r){return t=jt(7,t,r,e),t.lanes=n,t}function rc(t,e,n,r){return t=jt(22,t,r,e),t.elementType=Jv,t.lanes=n,t.stateNode={isHidden:!1},t}function vh(t,e,n){return t=jt(6,t,null,e),t.lanes=n,t}function Eh(t,e,n){return e=jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function IC(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=eh(0),this.expirationTimes=eh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Op(t,e,n,r,i,s,o,a,l){return t=new IC(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=jt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gp(s),t}function SC(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function HE(t){if(!t)return Cr;t=t._reactInternals;e:{if(fi(t)!==t||t.tag!==1)throw Error(R(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ct(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(R(171))}if(t.tag===1){var n=t.type;if(Ct(n))return z0(t,n,e)}return e}function WE(t,e,n,r,i,s,o,a,l){return t=Op(n,r,!0,t,i,s,o,a,l),t.context=HE(null),n=t.current,r=_t(),i=mr(n),s=$n(r,i),s.callback=e??null,fr(n,s,i),t.current.lanes=i,la(t,i,r),Rt(t,r),t}function ic(t,e,n,r){var i=e.current,s=_t(),o=mr(i);return n=HE(n),e.context===null?e.context=n:e.pendingContext=n,e=$n(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=fr(i,e,o),t!==null&&(tn(t,i,o,s),vl(t,i,o)),o}function uu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Iy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function bp(t,e){Iy(t,e),(t=t.alternate)&&Iy(t,e)}function AC(){return null}var qE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vp(t){this._internalRoot=t}sc.prototype.render=Vp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(R(409));ic(t,e,null,null)};sc.prototype.unmount=Vp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ii(function(){ic(null,t,null,null)}),e[Un]=null}};function sc(t){this._internalRoot=t}sc.prototype.unstable_scheduleHydration=function(t){if(t){var e=T0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Zn.length&&e!==0&&e<Zn[n].priority;n++);Zn.splice(n,0,t),n===0&&S0(t)}};function Lp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function oc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Sy(){}function CC(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=uu(o);s.call(u)}}var o=WE(e,r,t,0,null,!1,!1,"",Sy);return t._reactRootContainer=o,t[Un]=o.current,Po(t.nodeType===8?t.parentNode:t),ii(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=uu(l);a.call(u)}}var l=Op(t,0,!1,null,null,!1,!1,"",Sy);return t._reactRootContainer=l,t[Un]=l.current,Po(t.nodeType===8?t.parentNode:t),ii(function(){ic(e,l,n,r)}),l}function ac(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=uu(o);a.call(l)}}ic(e,o,t,i)}else o=CC(n,e,t,i,r);return uu(o)}E0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Xs(e.pendingLanes);n!==0&&(tp(e,n|1),Rt(e,xe()),!(oe&6)&&(hs=xe()+500,Dr()))}break;case 13:ii(function(){var r=jn(t,1);if(r!==null){var i=_t();tn(r,t,1,i)}}),bp(t,1)}};np=function(t){if(t.tag===13){var e=jn(t,134217728);if(e!==null){var n=_t();tn(e,t,134217728,n)}bp(t,134217728)}};w0=function(t){if(t.tag===13){var e=mr(t),n=jn(t,e);if(n!==null){var r=_t();tn(n,t,e,r)}bp(t,e)}};T0=function(){return ue};I0=function(t,e){var n=ue;try{return ue=t,e()}finally{ue=n}};yd=function(t,e,n){switch(e){case"input":if(cd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Yu(r);if(!i)throw Error(R(90));e0(r),cd(r,i)}}}break;case"textarea":n0(t,n);break;case"select":e=n.value,e!=null&&Ki(t,!!n.multiple,e,!1)}};u0=Pp;c0=ii;var RC={usingClientEntryPoint:!1,Events:[ca,Li,Yu,a0,l0,Pp]},zs={findFiberByHostInstance:Fr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},kC={bundleType:zs.bundleType,version:zs.version,rendererPackageName:zs.rendererPackageName,rendererConfig:zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=f0(t),t===null?null:t.stateNode},findFiberByHostInstance:zs.findFiberByHostInstance||AC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tl.isDisabled&&tl.supportsFiber)try{Ku=tl.inject(kC),gn=tl}catch{}}bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=RC;bt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lp(e))throw Error(R(200));return SC(t,e,null,n)};bt.createRoot=function(t,e){if(!Lp(t))throw Error(R(299));var n=!1,r="",i=qE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Op(t,1,!1,null,null,n,!1,r,i),t[Un]=e.current,Po(t.nodeType===8?t.parentNode:t),new Vp(e)};bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(R(188)):(t=Object.keys(t).join(","),Error(R(268,t)));return t=f0(e),t=t===null?null:t.stateNode,t};bt.flushSync=function(t){return ii(t)};bt.hydrate=function(t,e,n){if(!oc(e))throw Error(R(200));return ac(null,t,e,!0,n)};bt.hydrateRoot=function(t,e,n){if(!Lp(t))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=qE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=WE(e,null,t,1,n??null,i,!1,s,o),t[Un]=e.current,Po(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new sc(e)};bt.render=function(t,e,n){if(!oc(e))throw Error(R(200));return ac(null,t,e,!1,n)};bt.unmountComponentAtNode=function(t){if(!oc(t))throw Error(R(40));return t._reactRootContainer?(ii(function(){ac(null,null,t,!1,function(){t._reactRootContainer=null,t[Un]=null})}),!0):!1};bt.unstable_batchedUpdates=Pp;bt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!oc(n))throw Error(R(200));if(t==null||t._reactInternals===void 0)throw Error(R(38));return ac(t,e,n,!1,r)};bt.version="18.2.0-next-9e3b772b8-20220608";function KE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(KE)}catch(t){console.error(t)}}KE(),Wv.exports=bt;var PC=Wv.exports,Ay=PC;rd.createRoot=Ay.createRoot,rd.hydrateRoot=Ay.hydrateRoot;/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $o(){return $o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$o.apply(this,arguments)}var or;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(or||(or={}));const Cy="popstate";function NC(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Xd("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:cu(i)}return DC(e,n,null,t)}function Me(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Mp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function xC(){return Math.random().toString(36).substr(2,8)}function Ry(t,e){return{usr:t.state,key:t.key,idx:e}}function Xd(t,e,n,r){return n===void 0&&(n=null),$o({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?As(e):e,{state:n,key:e&&e.key||r||xC()})}function cu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function As(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function DC(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=or.Pop,l=null,u=c();u==null&&(u=0,o.replaceState($o({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=or.Pop;let T=c(),p=T==null?null:T-u;u=T,l&&l({action:a,location:v.location,delta:p})}function d(T,p){a=or.Push;let f=Xd(v.location,T,p);n&&n(f,T),u=c()+1;let g=Ry(f,u),E=v.createHref(f);try{o.pushState(g,"",E)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;i.location.assign(E)}s&&l&&l({action:a,location:v.location,delta:1})}function m(T,p){a=or.Replace;let f=Xd(v.location,T,p);n&&n(f,T),u=c();let g=Ry(f,u),E=v.createHref(f);o.replaceState(g,"",E),s&&l&&l({action:a,location:v.location,delta:0})}function _(T){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof T=="string"?T:cu(T);return Me(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let v={get action(){return a},get location(){return t(i,o)},listen(T){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Cy,h),l=T,()=>{i.removeEventListener(Cy,h),l=null}},createHref(T){return e(i,T)},createURL:_,encodeLocation(T){let p=_(T);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:m,go(T){return o.go(T)}};return v}var ky;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ky||(ky={}));function OC(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?As(e):e,i=$p(r.pathname||"/",n);if(i==null)return null;let s=GE(t);bC(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=zC(s[a],qC(i));return o}function GE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Me(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=yr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Me(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),GE(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:jC(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of QE(s.path))i(s,o,l)}),e}function QE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=QE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function bC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:BC(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const VC=/^:\w+$/,LC=3,MC=2,$C=1,FC=10,UC=-2,Py=t=>t==="*";function jC(t,e){let n=t.split("/"),r=n.length;return n.some(Py)&&(r+=UC),e&&(r+=MC),n.filter(i=>!Py(i)).reduce((i,s)=>i+(VC.test(s)?LC:s===""?$C:FC),r)}function BC(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function zC(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=HC({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:yr([i,c.pathname]),pathnameBase:XC(yr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=yr([i,c.pathnameBase]))}return s}function HC(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=WC(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=KC(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function WC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Mp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function qC(t){try{return decodeURI(t)}catch(e){return Mp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function KC(t,e){try{return decodeURIComponent(t)}catch(n){return Mp(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function $p(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function GC(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?As(t):t;return{pathname:n?n.startsWith("/")?n:QC(n,e):e,search:YC(r),hash:JC(i)}}function QC(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function wh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function XE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function YE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=As(t):(i=$o({},t),Me(!i.pathname||!i.pathname.includes("?"),wh("?","pathname","search",i)),Me(!i.pathname||!i.pathname.includes("#"),wh("#","pathname","hash",i)),Me(!i.search||!i.search.includes("#"),wh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=GC(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const yr=t=>t.join("/").replace(/\/\/+/g,"/"),XC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),YC=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,JC=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function ZC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const JE=["post","put","patch","delete"];new Set(JE);const eR=["get",...JE];new Set(eR);/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hu(){return hu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},hu.apply(this,arguments)}const Fp=b.createContext(null),tR=b.createContext(null),Cs=b.createContext(null),lc=b.createContext(null),pi=b.createContext({outlet:null,matches:[],isDataRoute:!1}),ZE=b.createContext(null);function nR(t,e){let{relative:n}=e===void 0?{}:e;da()||Me(!1);let{basename:r,navigator:i}=b.useContext(Cs),{hash:s,pathname:o,search:a}=tw(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:yr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function da(){return b.useContext(lc)!=null}function uc(){return da()||Me(!1),b.useContext(lc).location}function ew(t){b.useContext(Cs).static||b.useLayoutEffect(t)}function Up(){let{isDataRoute:t}=b.useContext(pi);return t?mR():rR()}function rR(){da()||Me(!1);let t=b.useContext(Fp),{basename:e,navigator:n}=b.useContext(Cs),{matches:r}=b.useContext(pi),{pathname:i}=uc(),s=JSON.stringify(XE(r).map(l=>l.pathnameBase)),o=b.useRef(!1);return ew(()=>{o.current=!0}),b.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=YE(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:yr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function tw(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=b.useContext(pi),{pathname:i}=uc(),s=JSON.stringify(XE(r).map(o=>o.pathnameBase));return b.useMemo(()=>YE(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function iR(t,e){return sR(t,e)}function sR(t,e,n){da()||Me(!1);let{navigator:r}=b.useContext(Cs),{matches:i}=b.useContext(pi),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=uc(),u;if(e){var c;let v=typeof e=="string"?As(e):e;a==="/"||(c=v.pathname)!=null&&c.startsWith(a)||Me(!1),u=v}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",m=OC(t,{pathname:d}),_=cR(m&&m.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:yr([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:yr([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&_?b.createElement(lc.Provider,{value:{location:hu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:or.Pop}},_):_}function oR(){let t=pR(),e=ZC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),n?b.createElement("pre",{style:i},n):null,s)}const aR=b.createElement(oR,null);class lR extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?b.createElement(pi.Provider,{value:this.props.routeContext},b.createElement(ZE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function uR(t){let{routeContext:e,match:n,children:r}=t,i=b.useContext(Fp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(pi.Provider,{value:e},r)}function cR(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Me(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||aR);let d=e.concat(s.slice(0,u+1)),m=()=>{let _;return c?_=h:l.route.Component?_=b.createElement(l.route.Component,null):l.route.element?_=l.route.element:_=a,b.createElement(uR,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:_})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?b.createElement(lR,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:m(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):m()},null)}var nw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(nw||{}),du=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(du||{});function hR(t){let e=b.useContext(Fp);return e||Me(!1),e}function dR(t){let e=b.useContext(tR);return e||Me(!1),e}function fR(t){let e=b.useContext(pi);return e||Me(!1),e}function rw(t){let e=fR(),n=e.matches[e.matches.length-1];return n.route.id||Me(!1),n.route.id}function pR(){var t;let e=b.useContext(ZE),n=dR(du.UseRouteError),r=rw(du.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function mR(){let{router:t}=hR(nw.UseNavigateStable),e=rw(du.UseNavigateStable),n=b.useRef(!1);return ew(()=>{n.current=!0}),b.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,hu({fromRouteId:e},s)))},[t,e])}function Cl(t){Me(!1)}function gR(t){let{basename:e="/",children:n=null,location:r,navigationType:i=or.Pop,navigator:s,static:o=!1}=t;da()&&Me(!1);let a=e.replace(/^\/*/,"/"),l=b.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=As(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:m="default"}=r,_=b.useMemo(()=>{let v=$p(u,a);return v==null?null:{location:{pathname:v,search:c,hash:h,state:d,key:m},navigationType:i}},[a,u,c,h,d,m,i]);return _==null?null:b.createElement(Cs.Provider,{value:l},b.createElement(lc.Provider,{children:n,value:_}))}function yR(t){let{children:e,location:n}=t;return iR(Yd(e),n)}new Promise(()=>{});function Yd(t,e){e===void 0&&(e=[]);let n=[];return b.Children.forEach(t,(r,i)=>{if(!b.isValidElement(r))return;let s=[...e,i];if(r.type===b.Fragment){n.push.apply(n,Yd(r.props.children,s));return}r.type!==Cl&&Me(!1),!r.props.index||!r.props.children||Me(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Yd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jd(){return Jd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Jd.apply(this,arguments)}function _R(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function vR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ER(t,e){return t.button===0&&(!e||e==="_self")&&!vR(t)}const wR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],TR="startTransition",Ny=vS[TR];function IR(t){let{basename:e,children:n,future:r,window:i}=t,s=b.useRef();s.current==null&&(s.current=NC({window:i,v5Compat:!0}));let o=s.current,[a,l]=b.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=b.useCallback(h=>{u&&Ny?Ny(()=>l(h)):l(h)},[l,u]);return b.useLayoutEffect(()=>o.listen(c),[o,c]),b.createElement(gR,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const SR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",AR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Th=b.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=_R(e,wR),{basename:d}=b.useContext(Cs),m,_=!1;if(typeof u=="string"&&AR.test(u)&&(m=u,SR))try{let f=new URL(window.location.href),g=u.startsWith("//")?new URL(f.protocol+u):new URL(u),E=$p(g.pathname,d);g.origin===f.origin&&E!=null?u=E+g.search+g.hash:_=!0}catch{}let v=nR(u,{relative:i}),T=CR(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(f){r&&r(f),f.defaultPrevented||T(f)}return b.createElement("a",Jd({},h,{href:m||v,onClick:_||s?r:p,ref:n,target:l}))});var xy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(xy||(xy={}));var Dy;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Dy||(Dy={}));function CR(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Up(),l=uc(),u=tw(t,{relative:o});return b.useCallback(c=>{if(ER(c,n)){c.preventDefault();let h=r!==void 0?r:cu(l)===cu(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},RR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},sw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(iw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):RR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new kR;const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const _=u<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};let kR=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}};const PR=function(t){const e=iw(t);return sw.encodeByteArray(e,!0)},fu=function(t){return PR(t).replace(/\./g,"")},ow=function(t){try{return sw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=()=>NR().__FIREBASE_DEFAULTS__,DR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},OR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ow(t[1]);return e&&JSON.parse(e)},jp=()=>{try{return xR()||DR()||OR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},aw=t=>{var e,n;return(n=(e=jp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bR=t=>{const e=aw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},lw=()=>{var t;return(t=jp())===null||t===void 0?void 0:t.config},uw=t=>{var e;return(e=jp())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[fu(JSON.stringify(n)),fu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function MR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function $R(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function FR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function UR(){const t=ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jR(){try{return typeof indexedDB=="object"}catch{return!1}}function BR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR="FirebaseError";let mi=class cw extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=zR,Object.setPrototypeOf(this,cw.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fa.prototype.create)}},fa=class{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?HR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new mi(i,a,r)}};function HR(t,e){return t.replace(WR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const WR=/\{\$([^}]+)}/g;function qR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Oy(s)&&Oy(o)){if(!pu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Oy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function KR(t,e){const n=new GR(t,e);return n.subscribe.bind(n)}let GR=class{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");QR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ih),i.error===void 0&&(i.error=Ih),i.complete===void 0&&(i.complete=Ih);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function QR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ih(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(t){return t&&t._delegate?t._delegate:t}let si=class{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new VR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(JR(e))try{this.getOrInitializeService({instanceIdentifier:$r})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=$r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$r){return this.instances.has(e)}getOptions(e=$r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:YR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=$r){return this.component?this.component.multipleInstances?e:$r:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function YR(t){return t===$r?void 0:t}function JR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new XR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const ek={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},tk=ie.INFO,nk={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},rk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=nk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let Bp=class{constructor(e){this.name=e,this._logLevel=tk,this._logHandler=rk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ek[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}};const ik=(t,e)=>e.some(n=>t instanceof n);let by,Vy;function sk(){return by||(by=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ok(){return Vy||(Vy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hw=new WeakMap,Zd=new WeakMap,dw=new WeakMap,Sh=new WeakMap,zp=new WeakMap;function ak(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(_r(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hw.set(n,t)}).catch(()=>{}),zp.set(e,t),e}function lk(t){if(Zd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Zd.set(t,e)}let ef={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _r(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uk(t){ef=t(ef)}function ck(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ah(this),e,...n);return dw.set(r,e.sort?e.sort():[e]),_r(r)}:ok().includes(t)?function(...e){return t.apply(Ah(this),e),_r(hw.get(this))}:function(...e){return _r(t.apply(Ah(this),e))}}function hk(t){return typeof t=="function"?ck(t):(t instanceof IDBTransaction&&lk(t),ik(t,sk())?new Proxy(t,ef):t)}function _r(t){if(t instanceof IDBRequest)return ak(t);if(Sh.has(t))return Sh.get(t);const e=hk(t);return e!==t&&(Sh.set(t,e),zp.set(e,t)),e}const Ah=t=>zp.get(t);function dk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=_r(o);return r&&o.addEventListener("upgradeneeded",l=>{r(_r(o.result),l.oldVersion,l.newVersion,_r(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const fk=["get","getKey","getAll","getAllKeys","count"],pk=["put","add","delete","clear"],Ch=new Map;function Ly(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ch.get(e))return Ch.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=pk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||fk.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ch.set(e,s),s}uk(t=>({...t,get:(e,n,r)=>Ly(e,n)||t.get(e,n,r),has:(e,n)=>!!Ly(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mk=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}};function gk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tf="@firebase/app",My="0.9.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=new Bp("@firebase/app"),yk="@firebase/app-compat",_k="@firebase/analytics-compat",vk="@firebase/analytics",Ek="@firebase/app-check-compat",wk="@firebase/app-check",Tk="@firebase/auth",Ik="@firebase/auth-compat",Sk="@firebase/database",Ak="@firebase/database-compat",Ck="@firebase/functions",Rk="@firebase/functions-compat",kk="@firebase/installations",Pk="@firebase/installations-compat",Nk="@firebase/messaging",xk="@firebase/messaging-compat",Dk="@firebase/performance",Ok="@firebase/performance-compat",bk="@firebase/remote-config",Vk="@firebase/remote-config-compat",Lk="@firebase/storage",Mk="@firebase/storage-compat",$k="@firebase/firestore",Fk="@firebase/firestore-compat",Uk="firebase",jk="10.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf="[DEFAULT]",Bk={[tf]:"fire-core",[yk]:"fire-core-compat",[vk]:"fire-analytics",[_k]:"fire-analytics-compat",[wk]:"fire-app-check",[Ek]:"fire-app-check-compat",[Tk]:"fire-auth",[Ik]:"fire-auth-compat",[Sk]:"fire-rtdb",[Ak]:"fire-rtdb-compat",[Ck]:"fire-fn",[Rk]:"fire-fn-compat",[kk]:"fire-iid",[Pk]:"fire-iid-compat",[Nk]:"fire-fcm",[xk]:"fire-fcm-compat",[Dk]:"fire-perf",[Ok]:"fire-perf-compat",[bk]:"fire-rc",[Vk]:"fire-rc-compat",[Lk]:"fire-gcs",[Mk]:"fire-gcs-compat",[$k]:"fire-fst",[Fk]:"fire-fst-compat","fire-js":"fire-js",[Uk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu=new Map,rf=new Map;function zk(t,e){try{t.container.addComponent(e)}catch(n){oi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ds(t){const e=t.name;if(rf.has(e))return oi.debug(`There were multiple attempts to register component ${e}.`),!1;rf.set(e,t);for(const n of mu.values())zk(n,t);return!0}function Hp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},vr=new fa("app","Firebase",Hk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new si("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=jk;function fw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:nf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw vr.create("bad-app-name",{appName:String(i)});if(n||(n=lw()),!n)throw vr.create("no-options");const s=mu.get(i);if(s){if(pu(n,s.options)&&pu(r,s.config))return s;throw vr.create("duplicate-app",{appName:i})}const o=new ZR(i);for(const l of rf.values())o.addComponent(l);const a=new Wk(n,r,o);return mu.set(i,a),a}function pw(t=nf){const e=mu.get(t);if(!e&&t===nf&&lw())return fw();if(!e)throw vr.create("no-app",{appName:t});return e}function Er(t,e,n){var r;let i=(r=Bk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),oi.warn(a.join(" "));return}ds(new si(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk="firebase-heartbeat-database",Kk=1,Fo="firebase-heartbeat-store";let Rh=null;function mw(){return Rh||(Rh=dk(qk,Kk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Fo)}}}).catch(t=>{throw vr.create("idb-open",{originalErrorMessage:t.message})})),Rh}async function Gk(t){try{return await(await mw()).transaction(Fo).objectStore(Fo).get(gw(t))}catch(e){if(e instanceof mi)oi.warn(e.message);else{const n=vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});oi.warn(n.message)}}}async function $y(t,e){try{const r=(await mw()).transaction(Fo,"readwrite");await r.objectStore(Fo).put(e,gw(t)),await r.done}catch(n){if(n instanceof mi)oi.warn(n.message);else{const r=vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});oi.warn(r.message)}}}function gw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk=1024,Xk=30*24*60*60*1e3;let Yk=class{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Zk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Fy();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Xk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Fy(),{heartbeatsToSend:n,unsentEntries:r}=Jk(this._heartbeatsCache.heartbeats),i=fu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}};function Fy(){return new Date().toISOString().substring(0,10)}function Jk(t,e=Qk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Uy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Uy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}let Zk=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jR()?BR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Gk(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $y(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $y(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function Uy(t){return fu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(t){ds(new si("platform-logger",e=>new mk(e),"PRIVATE")),ds(new si("heartbeat",e=>new Yk(e),"PRIVATE")),Er(tf,My,t),Er(tf,My,"esm2017"),Er("fire-js","")}eP("");var tP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,Wp=Wp||{},Q=tP||self;function cc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ma(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function nP(t){return Object.prototype.hasOwnProperty.call(t,kh)&&t[kh]||(t[kh]=++rP)}var kh="closure_uid_"+(1e9*Math.random()>>>0),rP=0;function iP(t,e,n){return t.call.apply(t.bind,arguments)}function sP(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ct(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ct=iP:ct=sP,ct.apply(null,arguments)}function nl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ke(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Or(){this.s=this.s,this.o=this.o}var oP=0;Or.prototype.s=!1;Or.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),oP!=0)&&nP(this)};Or.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const yw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function qp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function jy(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(cc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ht(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var aP=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",()=>{},e),Q.removeEventListener("test",()=>{},e)}catch{}return t}();function Uo(t){return/^[\s\xa0]*$/.test(t)}function hc(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function dn(t){return hc().indexOf(t)!=-1}function Kp(t){return Kp[" "](t),t}Kp[" "]=function(){};function lP(t,e){var n=eN;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var uP=dn("Opera"),fs=dn("Trident")||dn("MSIE"),_w=dn("Edge"),sf=_w||fs,vw=dn("Gecko")&&!(hc().toLowerCase().indexOf("webkit")!=-1&&!dn("Edge"))&&!(dn("Trident")||dn("MSIE"))&&!dn("Edge"),cP=hc().toLowerCase().indexOf("webkit")!=-1&&!dn("Edge");function Ew(){var t=Q.document;return t?t.documentMode:void 0}var of;e:{var Ph="",Nh=function(){var t=hc();if(vw)return/rv:([^\);]+)(\)|;)/.exec(t);if(_w)return/Edge\/([\d\.]+)/.exec(t);if(fs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(cP)return/WebKit\/(\S+)/.exec(t);if(uP)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Nh&&(Ph=Nh?Nh[1]:""),fs){var xh=Ew();if(xh!=null&&xh>parseFloat(Ph)){of=String(xh);break e}}of=Ph}var af;if(Q.document&&fs){var By=Ew();af=By||parseInt(of,10)||void 0}else af=void 0;var hP=af;function jo(t,e){if(ht.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(vw){e:{try{Kp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:dP[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&jo.$.h.call(this)}}Ke(jo,ht);var dP={2:"touch",3:"pen",4:"mouse"};jo.prototype.h=function(){jo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ga="closure_listenable_"+(1e6*Math.random()|0),fP=0;function pP(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++fP,this.fa=this.ia=!1}function dc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Gp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function mP(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function ww(t){const e={};for(const n in t)e[n]=t[n];return e}const zy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Tw(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<zy.length;s++)n=zy[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function fc(t){this.src=t,this.g={},this.h=0}fc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=uf(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new pP(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function lf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=yw(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(dc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function uf(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Qp="closure_lm_"+(1e6*Math.random()|0),Dh={};function Iw(t,e,n,r,i){if(r&&r.once)return Aw(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Iw(t,e[s],n,r,i);return null}return n=Jp(n),t&&t[ga]?t.O(e,n,ma(r)?!!r.capture:!!r,i):Sw(t,e,n,!1,r,i)}function Sw(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ma(i)?!!i.capture:!!i,a=Yp(t);if(a||(t[Qp]=a=new fc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=gP(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)aP||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Rw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function gP(){function t(n){return e.call(t.src,t.listener,n)}const e=yP;return t}function Aw(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Aw(t,e[s],n,r,i);return null}return n=Jp(n),t&&t[ga]?t.P(e,n,ma(r)?!!r.capture:!!r,i):Sw(t,e,n,!0,r,i)}function Cw(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Cw(t,e[s],n,r,i);else r=ma(r)?!!r.capture:!!r,n=Jp(n),t&&t[ga]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=uf(s,n,r,i),-1<n&&(dc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Yp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=uf(e,n,r,i)),(n=-1<t?e[t]:null)&&Xp(n))}function Xp(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ga])lf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Rw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Yp(e))?(lf(n,t),n.h==0&&(n.src=null,e[Qp]=null)):dc(t)}}}function Rw(t){return t in Dh?Dh[t]:Dh[t]="on"+t}function yP(t,e){if(t.fa)t=!0;else{e=new jo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Xp(t),t=n.call(r,e)}return t}function Yp(t){return t=t[Qp],t instanceof fc?t:null}var Oh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Jp(t){return typeof t=="function"?t:(t[Oh]||(t[Oh]=function(e){return t.handleEvent(e)}),t[Oh])}function qe(){Or.call(this),this.i=new fc(this),this.S=this,this.J=null}Ke(qe,Or);qe.prototype[ga]=!0;qe.prototype.removeEventListener=function(t,e,n,r){Cw(this,t,e,n,r)};function et(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ht(e,t);else if(e instanceof ht)e.target=e.target||t;else{var i=e;e=new ht(r,t),Tw(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=rl(o,r,!0,e)&&i}if(o=e.g=t,i=rl(o,r,!0,e)&&i,i=rl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=rl(o,r,!1,e)&&i}qe.prototype.N=function(){if(qe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)dc(n[r]);delete t.g[e],t.h--}}this.J=null};qe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};qe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function rl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&lf(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Zp=Q.JSON.stringify;class _P{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function vP(){var t=em;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class EP{constructor(){this.h=this.g=null}add(e,n){const r=kw.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var kw=new _P(()=>new wP,t=>t.reset());class wP{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function TP(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function IP(t){Q.setTimeout(()=>{throw t},0)}let Bo,zo=!1,em=new EP,Pw=()=>{const t=Q.Promise.resolve(void 0);Bo=()=>{t.then(SP)}};var SP=()=>{for(var t;t=vP();){try{t.h.call(t.g)}catch(n){IP(n)}var e=kw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}zo=!1};function pc(t,e){qe.call(this),this.h=t||1,this.g=e||Q,this.j=ct(this.qb,this),this.l=Date.now()}Ke(pc,qe);x=pc.prototype;x.ga=!1;x.T=null;x.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),et(this,"tick"),this.ga&&(tm(this),this.start()))}};x.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function tm(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}x.N=function(){pc.$.N.call(this),tm(this),delete this.g};function nm(t,e,n){if(typeof t=="function")n&&(t=ct(t,n));else if(t&&typeof t.handleEvent=="function")t=ct(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function Nw(t){t.g=nm(()=>{t.g=null,t.i&&(t.i=!1,Nw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class AP extends Or{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Nw(this)}N(){super.N(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ho(t){Or.call(this),this.h=t,this.g={}}Ke(Ho,Or);var Hy=[];function xw(t,e,n,r){Array.isArray(n)||(n&&(Hy[0]=n.toString()),n=Hy);for(var i=0;i<n.length;i++){var s=Iw(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Dw(t){Gp(t.g,function(e,n){this.g.hasOwnProperty(n)&&Xp(e)},t),t.g={}}Ho.prototype.N=function(){Ho.$.N.call(this),Dw(this)};Ho.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function mc(){this.g=!0}mc.prototype.Ea=function(){this.g=!1};function CP(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function RP(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function zi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+PP(t,n)+(r?" "+r:"")})}function kP(t,e){t.info(function(){return"TIMEOUT: "+e})}mc.prototype.info=function(){};function PP(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Zp(n)}catch{return e}}var gi={},Wy=null;function gc(){return Wy=Wy||new qe}gi.Ta="serverreachability";function Ow(t){ht.call(this,gi.Ta,t)}Ke(Ow,ht);function Wo(t){const e=gc();et(e,new Ow(e))}gi.STAT_EVENT="statevent";function bw(t,e){ht.call(this,gi.STAT_EVENT,t),this.stat=e}Ke(bw,ht);function yt(t){const e=gc();et(e,new bw(e,t))}gi.Ua="timingevent";function Vw(t,e){ht.call(this,gi.Ua,t),this.size=e}Ke(Vw,ht);function ya(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var yc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Lw={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function rm(){}rm.prototype.h=null;function qy(t){return t.h||(t.h=t.i())}function Mw(){}var _a={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function im(){ht.call(this,"d")}Ke(im,ht);function sm(){ht.call(this,"c")}Ke(sm,ht);var cf;function _c(){}Ke(_c,rm);_c.prototype.g=function(){return new XMLHttpRequest};_c.prototype.i=function(){return{}};cf=new _c;function va(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ho(this),this.P=NP,t=sf?125:void 0,this.V=new pc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new $w}function $w(){this.i=null,this.g="",this.h=!1}var NP=45e3,hf={},gu={};x=va.prototype;x.setTimeout=function(t){this.P=t};function df(t,e,n){t.L=1,t.v=Ec(zn(e)),t.s=n,t.S=!0,Fw(t,null)}function Fw(t,e){t.G=Date.now(),Ea(t),t.A=zn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),Kw(n.i,"t",r),t.C=0,n=t.l.J,t.h=new $w,t.g=pT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new AP(ct(t.Pa,t,t.g),t.O)),xw(t.U,t.g,"readystatechange",t.nb),e=t.I?ww(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Wo(),CP(t.j,t.u,t.A,t.m,t.W,t.s)}x.nb=function(t){t=t.target;const e=this.M;e&&fn(t)==3?e.l():this.Pa(t)};x.Pa=function(t){try{if(t==this.g)e:{const c=fn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||sf||this.g&&(this.h.h||this.g.ja()||Xy(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Wo(3):Wo(2)),vc(this);var n=this.g.da();this.ca=n;t:if(Uw(this)){var r=Xy(this.g);t="";var i=r.length,s=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Br(this),ho(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,RP(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Uo(a)){var u=a;break t}}u=null}if(n=u)zi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ff(this,n);else{this.i=!1,this.o=3,yt(12),Br(this),ho(this);break e}}this.S?(jw(this,c,o),sf&&this.i&&c==3&&(xw(this.U,this.V,"tick",this.mb),this.V.start())):(zi(this.j,this.m,o,null),ff(this,o)),c==4&&Br(this),this.i&&!this.J&&(c==4?cT(this.l,this):(this.i=!1,Ea(this)))}else YP(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,yt(12)):(this.o=0,yt(13)),Br(this),ho(this)}}}catch{}finally{}};function Uw(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function jw(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=xP(t,n),i==gu){e==4&&(t.o=4,yt(14),r=!1),zi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==hf){t.o=4,yt(15),zi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else zi(t.j,t.m,i,null),ff(t,i);Uw(t)&&i!=gu&&i!=hf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,yt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),hm(e),e.M=!0,yt(11))):(zi(t.j,t.m,n,"[Invalid Chunked Response]"),Br(t),ho(t))}x.mb=function(){if(this.g){var t=fn(this.g),e=this.g.ja();this.C<e.length&&(vc(this),jw(this,t,e),this.i&&t!=4&&Ea(this))}};function xP(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?gu:(n=Number(e.substring(n,r)),isNaN(n)?hf:(r+=1,r+n>e.length?gu:(e=e.slice(r,r+n),t.C=r+n,e)))}x.cancel=function(){this.J=!0,Br(this)};function Ea(t){t.Y=Date.now()+t.P,Bw(t,t.P)}function Bw(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ya(ct(t.lb,t),e)}function vc(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}x.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(kP(this.j,this.A),this.L!=2&&(Wo(),yt(17)),Br(this),this.o=2,ho(this)):Bw(this,this.Y-t)};function ho(t){t.l.H==0||t.J||cT(t.l,t)}function Br(t){vc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,tm(t.V),Dw(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function ff(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||pf(n.i,t))){if(!t.K&&pf(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)vu(n),Sc(n);else break e;cm(n),yt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=ya(ct(n.ib,n),6e3));if(1>=Xw(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else zr(n,11)}else if((t.K||n.g==t)&&vu(n),!Uo(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const _=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=r.i;s.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(om(s,s.h),s.h=null))}if(r.F){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,ge(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=fT(r,r.J?r.pa:null,r.Y),o.K){Yw(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(vc(a),Ea(a)),r.g=o}else lT(r);0<n.j.length&&Ac(n)}else u[0]!="stop"&&u[0]!="close"||zr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?zr(n,7):um(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Wo(4)}catch{}}function DP(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(cc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function OP(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(cc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function zw(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(cc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=OP(t),r=DP(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Hw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bP(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Jr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Jr){this.h=t.h,yu(this,t.j),this.s=t.s,this.g=t.g,_u(this,t.m),this.l=t.l;var e=t.i,n=new qo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ky(this,n),this.o=t.o}else t&&(e=String(t).match(Hw))?(this.h=!1,yu(this,e[1]||"",!0),this.s=Js(e[2]||""),this.g=Js(e[3]||"",!0),_u(this,e[4]),this.l=Js(e[5]||"",!0),Ky(this,e[6]||"",!0),this.o=Js(e[7]||"")):(this.h=!1,this.i=new qo(null,this.h))}Jr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Zs(e,Gy,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Zs(e,Gy,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Zs(n,n.charAt(0)=="/"?MP:LP,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Zs(n,FP)),t.join("")};function zn(t){return new Jr(t)}function yu(t,e,n){t.j=n?Js(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function _u(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ky(t,e,n){e instanceof qo?(t.i=e,UP(t.i,t.h)):(n||(e=Zs(e,$P)),t.i=new qo(e,t.h))}function ge(t,e,n){t.i.set(e,n)}function Ec(t){return ge(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Js(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Zs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,VP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function VP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Gy=/[#\/\?@]/g,LP=/[#\?:]/g,MP=/[#\?]/g,$P=/[#\?@]/g,FP=/#/g;function qo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function br(t){t.g||(t.g=new Map,t.h=0,t.i&&bP(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=qo.prototype;x.add=function(t,e){br(this),this.i=null,t=ks(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ww(t,e){br(t),e=ks(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function qw(t,e){return br(t),e=ks(t,e),t.g.has(e)}x.forEach=function(t,e){br(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};x.ta=function(){br(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};x.Z=function(t){br(this);let e=[];if(typeof t=="string")qw(this,t)&&(e=e.concat(this.g.get(ks(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};x.set=function(t,e){return br(this),this.i=null,t=ks(this,t),qw(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Kw(t,e,n){Ww(t,e),0<n.length&&(t.i=null,t.g.set(ks(t,e),qp(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ks(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function UP(t,e){e&&!t.j&&(br(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Ww(this,r),Kw(this,i,n))},t)),t.j=e}var jP=class{constructor(t,e){this.g=t,this.map=e}};function Gw(t){this.l=t||BP,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ka&&Q.g.Ka()&&Q.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var BP=10;function Qw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Xw(t){return t.h?1:t.g?t.g.size:0}function pf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function om(t,e){t.g?t.g.add(e):t.h=e}function Yw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Gw.prototype.cancel=function(){if(this.i=Jw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Jw(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return qp(t.i)}var zP=class{stringify(t){return Q.JSON.stringify(t,void 0)}parse(t){return Q.JSON.parse(t,void 0)}};function HP(){this.g=new zP}function WP(t,e,n){const r=n||"";try{zw(t,function(i,s){let o=i;ma(i)&&(o=Zp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function qP(t,e){const n=new mc;if(Q.Image){const r=new Image;r.onload=nl(il,n,r,"TestLoadImage: loaded",!0,e),r.onerror=nl(il,n,r,"TestLoadImage: error",!1,e),r.onabort=nl(il,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=nl(il,n,r,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function il(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function wc(t){this.l=t.ec||null,this.j=t.ob||!1}Ke(wc,rm);wc.prototype.g=function(){return new Tc(this.l,this.j)};wc.prototype.i=function(t){return function(){return t}}({});function Tc(t,e){qe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=am,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ke(Tc,qe);var am=0;x=Tc.prototype;x.open=function(t,e){if(this.readyState!=am)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ko(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wa(this)),this.readyState=am};x.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ko(this)),this.g&&(this.readyState=3,Ko(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Zw(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Zw(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}x.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?wa(this):Ko(this),this.readyState==3&&Zw(this)}};x.Za=function(t){this.g&&(this.response=this.responseText=t,wa(this))};x.Ya=function(t){this.g&&(this.response=t,wa(this))};x.ka=function(){this.g&&wa(this)};function wa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ko(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ko(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Tc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var KP=Q.JSON.parse;function ke(t){qe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=eT,this.L=this.M=!1}Ke(ke,qe);var eT="",GP=/^https?$/i,QP=["POST","PUT"];x=ke.prototype;x.Oa=function(t){this.M=t};x.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():cf.g(),this.C=this.u?qy(this.u):qy(cf),this.g.onreadystatechange=ct(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Qy(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Q.FormData&&t instanceof Q.FormData,!(0<=yw(QP,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{rT(this),0<this.B&&((this.L=XP(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ct(this.ua,this)):this.A=nm(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Qy(this,s)}};function XP(t){return fs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}x.ua=function(){typeof Wp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,et(this,"timeout"),this.abort(8))};function Qy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,tT(t),Ic(t)}function tT(t){t.F||(t.F=!0,et(t,"complete"),et(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,et(this,"complete"),et(this,"abort"),Ic(this))};x.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ic(this,!0)),ke.$.N.call(this)};x.La=function(){this.s||(this.G||this.v||this.l?nT(this):this.kb())};x.kb=function(){nT(this)};function nT(t){if(t.h&&typeof Wp<"u"&&(!t.C[1]||fn(t)!=4||t.da()!=2)){if(t.v&&fn(t)==4)nm(t.La,0,t);else if(et(t,"readystatechange"),fn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(Hw)[1]||null;!i&&Q.self&&Q.self.location&&(i=Q.self.location.protocol.slice(0,-1)),r=!GP.test(i?i.toLowerCase():"")}n=r}if(n)et(t,"complete"),et(t,"success");else{t.m=6;try{var s=2<fn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",tT(t)}}finally{Ic(t)}}}}function Ic(t,e){if(t.g){rT(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||et(t,"ready");try{n.onreadystatechange=r}catch{}}}function rT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}x.isActive=function(){return!!this.g};function fn(t){return t.g?t.g.readyState:0}x.da=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}};x.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),KP(e)}};function Xy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case eT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function YP(t){const e={};t=(t.g&&2<=fn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Uo(t[r]))continue;var n=TP(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}mP(e,function(r){return r.join(", ")})}x.Ia=function(){return this.m};x.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function iT(t){let e="";return Gp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function lm(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=iT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ge(t,e,n))}function Hs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function sT(t){this.Ga=0,this.j=[],this.l=new mc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Hs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Hs("baseRetryDelayMs",5e3,t),this.hb=Hs("retryDelaySeedMs",1e4,t),this.eb=Hs("forwardChannelMaxRetries",2,t),this.xa=Hs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Gw(t&&t.concurrentRequestLimit),this.Ja=new HP,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}x=sT.prototype;x.ra=8;x.H=1;function um(t){if(oT(t),t.H==3){var e=t.W++,n=zn(t.I);if(ge(n,"SID",t.K),ge(n,"RID",e),ge(n,"TYPE","terminate"),Ta(t,n),e=new va(t,t.l,e),e.L=2,e.v=Ec(zn(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon)try{n=Q.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=pT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ea(e)}dT(t)}function Sc(t){t.g&&(hm(t),t.g.cancel(),t.g=null)}function oT(t){Sc(t),t.u&&(Q.clearTimeout(t.u),t.u=null),vu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function Ac(t){if(!Qw(t.i)&&!t.m){t.m=!0;var e=t.Na;Bo||Pw(),zo||(Bo(),zo=!0),em.add(e,t),t.C=0}}function JP(t,e){return Xw(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ya(ct(t.Na,t,e),hT(t,t.C)),t.C++,!0)}x.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new va(this,this.l,t);let s=this.s;if(this.U&&(s?(s=ww(s),Tw(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=aT(this,i,e),n=zn(this.I),ge(n,"RID",t),ge(n,"CVER",22),this.F&&ge(n,"X-HTTP-Session-Id",this.F),Ta(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(iT(s)))+"&"+e:this.o&&lm(n,this.o,s)),om(this.i,i),this.bb&&ge(n,"TYPE","init"),this.P?(ge(n,"$req",e),ge(n,"SID","null"),i.aa=!0,df(i,n,null)):df(i,n,e),this.H=2}}else this.H==3&&(t?Yy(this,t):this.j.length==0||Qw(this.i)||Yy(this))};function Yy(t,e){var n;e?n=e.m:n=t.W++;const r=zn(t.I);ge(r,"SID",t.K),ge(r,"RID",n),ge(r,"AID",t.V),Ta(t,r),t.o&&t.s&&lm(r,t.o,t.s),n=new va(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=aT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),om(t.i,n),df(n,r,e)}function Ta(t,e){t.na&&Gp(t.na,function(n,r){ge(e,r,n)}),t.h&&zw({},function(n,r){ge(e,r,n)})}function aT(t,e,n){n=Math.min(t.j.length,n);var r=t.h?ct(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{WP(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function lT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Bo||Pw(),zo||(Bo(),zo=!0),em.add(e,t),t.A=0}}function cm(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ya(ct(t.Ma,t),hT(t,t.A)),t.A++,!0)}x.Ma=function(){if(this.u=null,uT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ya(ct(this.jb,this),t)}};x.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,yt(10),Sc(this),uT(this))};function hm(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function uT(t){t.g=new va(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=zn(t.wa);ge(e,"RID","rpc"),ge(e,"SID",t.K),ge(e,"AID",t.V),ge(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ge(e,"TO",t.qa),ge(e,"TYPE","xmlhttp"),Ta(t,e),t.o&&t.s&&lm(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Ec(zn(e)),n.s=null,n.S=!0,Fw(n,t)}x.ib=function(){this.v!=null&&(this.v=null,Sc(this),cm(this),yt(19))};function vu(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function cT(t,e){var n=null;if(t.g==e){vu(t),hm(t),t.g=null;var r=2}else if(pf(t.i,e))n=e.F,Yw(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=gc(),et(r,new Vw(r,n)),Ac(t)}else lT(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&JP(t,e)||r==2&&cm(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:zr(t,5);break;case 4:zr(t,10);break;case 3:zr(t,6);break;default:zr(t,2)}}}function hT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function zr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=ct(t.pb,t);n||(n=new Jr("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||yu(n,"https"),Ec(n)),qP(n.toString(),r)}else yt(2);t.H=0,t.h&&t.h.za(e),dT(t),oT(t)}x.pb=function(t){t?(this.l.info("Successfully pinged google.com"),yt(2)):(this.l.info("Failed to ping google.com"),yt(1))};function dT(t){if(t.H=0,t.ma=[],t.h){const e=Jw(t.i);(e.length!=0||t.j.length!=0)&&(jy(t.ma,e),jy(t.ma,t.j),t.i.i.length=0,qp(t.j),t.j.length=0),t.h.ya()}}function fT(t,e,n){var r=n instanceof Jr?zn(n):new Jr(n);if(r.g!="")e&&(r.g=e+"."+r.g),_u(r,r.m);else{var i=Q.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Jr(null);r&&yu(s,r),e&&(s.g=e),i&&_u(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ge(r,n,e),ge(r,"VER",t.ra),Ta(t,r),r}function pT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new ke(new wc({ob:!0})):new ke(t.va),e.Oa(t.J),e}x.isActive=function(){return!!this.h&&this.h.isActive(this)};function mT(){}x=mT.prototype;x.Ba=function(){};x.Aa=function(){};x.za=function(){};x.ya=function(){};x.isActive=function(){return!0};x.Va=function(){};function Eu(){if(fs&&!(10<=Number(hP)))throw Error("Environmental error: no available transport.")}Eu.prototype.g=function(t,e){return new Ot(t,e)};function Ot(t,e){qe.call(this),this.g=new sT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Uo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Uo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ps(this)}Ke(Ot,qe);Ot.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;yt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=fT(t,null,t.Y),Ac(t)};Ot.prototype.close=function(){um(this.g)};Ot.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Zp(t),t=n);e.j.push(new jP(e.fb++,t)),e.H==3&&Ac(e)};Ot.prototype.N=function(){this.g.h=null,delete this.j,um(this.g),delete this.g,Ot.$.N.call(this)};function gT(t){im.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ke(gT,im);function yT(){sm.call(this),this.status=1}Ke(yT,sm);function Ps(t){this.g=t}Ke(Ps,mT);Ps.prototype.Ba=function(){et(this.g,"a")};Ps.prototype.Aa=function(t){et(this.g,new gT(t))};Ps.prototype.za=function(t){et(this.g,new yT)};Ps.prototype.ya=function(){et(this.g,"b")};function ZP(){this.blockSize=-1}function rn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ke(rn,ZP);rn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function bh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}rn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)bh(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){bh(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){bh(this,r),i=0;break}}this.h=i,this.i+=e};rn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ce(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var eN={};function dm(t){return-128<=t&&128>t?lP(t,function(e){return new ce([e|0],0>e?-1:0)}):new ce([t|0],0>t?-1:0)}function pn(t){if(isNaN(t)||!isFinite(t))return Zi;if(0>t)return Ye(pn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=mf;return new ce(e,0)}function _T(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ye(_T(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=pn(Math.pow(e,8)),r=Zi,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=pn(Math.pow(e,s)),r=r.R(s).add(pn(o))):(r=r.R(n),r=r.add(pn(o)))}return r}var mf=4294967296,Zi=dm(0),gf=dm(1),Jy=dm(16777216);x=ce.prototype;x.ea=function(){if(Ft(this))return-Ye(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:mf+r)*e,e*=mf}return t};x.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Vn(this))return"0";if(Ft(this))return"-"+Ye(this).toString(t);for(var e=pn(Math.pow(t,6)),n=this,r="";;){var i=Tu(n,e).g;n=wu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Vn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};x.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Vn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ft(t){return t.h==-1}x.X=function(t){return t=wu(this,t),Ft(t)?-1:Vn(t)?0:1};function Ye(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ce(n,~t.h).add(gf)}x.abs=function(){return Ft(this)?Ye(this):this};x.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ce(n,n[n.length-1]&-2147483648?-1:0)};function wu(t,e){return t.add(Ye(e))}x.R=function(t){if(Vn(this)||Vn(t))return Zi;if(Ft(this))return Ft(t)?Ye(this).R(Ye(t)):Ye(Ye(this).R(t));if(Ft(t))return Ye(this.R(Ye(t)));if(0>this.X(Jy)&&0>t.X(Jy))return pn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,sl(n,2*r+2*i),n[2*r+2*i+1]+=s*l,sl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,sl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,sl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ce(n,0)};function sl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ws(t,e){this.g=t,this.h=e}function Tu(t,e){if(Vn(e))throw Error("division by zero");if(Vn(t))return new Ws(Zi,Zi);if(Ft(t))return e=Tu(Ye(t),e),new Ws(Ye(e.g),Ye(e.h));if(Ft(e))return e=Tu(t,Ye(e)),new Ws(Ye(e.g),e.h);if(30<t.g.length){if(Ft(t)||Ft(e))throw Error("slowDivide_ only works with positive integers.");for(var n=gf,r=e;0>=r.X(t);)n=Zy(n),r=Zy(r);var i=Ai(n,1),s=Ai(r,1);for(r=Ai(r,2),n=Ai(n,2);!Vn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Ai(r,1),n=Ai(n,1)}return e=wu(t,i.R(e)),new Ws(i,e)}for(i=Zi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=pn(n),o=s.R(e);Ft(o)||0<o.X(t);)n-=r,s=pn(n),o=s.R(e);Vn(s)&&(s=gf),i=i.add(s),t=wu(t,o)}return new Ws(i,t)}x.gb=function(t){return Tu(this,t).h};x.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ce(n,this.h&t.h)};x.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ce(n,this.h|t.h)};x.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ce(n,this.h^t.h)};function Zy(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ce(n,t.h)}function Ai(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ce(i,t.h)}Eu.prototype.createWebChannel=Eu.prototype.g;Ot.prototype.send=Ot.prototype.u;Ot.prototype.open=Ot.prototype.m;Ot.prototype.close=Ot.prototype.close;yc.NO_ERROR=0;yc.TIMEOUT=8;yc.HTTP_ERROR=6;Lw.COMPLETE="complete";Mw.EventType=_a;_a.OPEN="a";_a.CLOSE="b";_a.ERROR="c";_a.MESSAGE="d";qe.prototype.listen=qe.prototype.O;ke.prototype.listenOnce=ke.prototype.P;ke.prototype.getLastError=ke.prototype.Sa;ke.prototype.getLastErrorCode=ke.prototype.Ia;ke.prototype.getStatus=ke.prototype.da;ke.prototype.getResponseJson=ke.prototype.Wa;ke.prototype.getResponseText=ke.prototype.ja;ke.prototype.send=ke.prototype.ha;ke.prototype.setWithCredentials=ke.prototype.Oa;rn.prototype.digest=rn.prototype.l;rn.prototype.reset=rn.prototype.reset;rn.prototype.update=rn.prototype.j;ce.prototype.add=ce.prototype.add;ce.prototype.multiply=ce.prototype.R;ce.prototype.modulo=ce.prototype.gb;ce.prototype.compare=ce.prototype.X;ce.prototype.toNumber=ce.prototype.ea;ce.prototype.toString=ce.prototype.toString;ce.prototype.getBits=ce.prototype.D;ce.fromNumber=pn;ce.fromString=_T;var tN=function(){return new Eu},nN=function(){return gc()},Vh=yc,rN=Lw,iN=gi,e_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ol=Mw,sN=ke,oN=rn,es=ce;const t_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ns="10.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=new Bp("@firebase/firestore");function qs(){return ai.logLevel}function $(t,...e){if(ai.logLevel<=ie.DEBUG){const n=e.map(fm);ai.debug(`Firestore (${Ns}): ${t}`,...n)}}function Hn(t,...e){if(ai.logLevel<=ie.ERROR){const n=e.map(fm);ai.error(`Firestore (${Ns}): ${t}`,...n)}}function ps(t,...e){if(ai.logLevel<=ie.WARN){const n=e.map(fm);ai.warn(`Firestore (${Ns}): ${t}`,...n)}}function fm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${Ns}) INTERNAL ASSERTION FAILED: `+t;throw Hn(e),new Error(e)}function ve(t,e){t||G()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends mi{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class aN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class lN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class uN{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new wr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new wr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new wr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string"),new vT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new at(e)}}class cN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class hN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new cN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.R=n.token,new dN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=pN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function ms(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new je(0,0))}static max(){return new Y(new je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Go.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Go?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ye extends Go{construct(e,n,r){return new ye(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ye(n)}static emptyPath(){return new ye([])}}const mN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends Go{construct(e,n,r){return new Je(e,n,r)}static isValidIdentifier(e){return mN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Je(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new F(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new F(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new F(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(n)}static emptyPath(){return new Je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(ye.fromString(e))}static fromName(e){return new j(ye.fromString(e).popFirst(5))}static empty(){return new j(ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ye.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new ye(e.slice()))}}function gN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new je(n+1,0):new je(n,r));return new Rr(i,j.empty(),e)}function yN(t){return new Rr(t.readTime,t.key,-1)}class Rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Rr(Y.min(),j.empty(),-1)}static max(){return new Rr(Y.max(),j.empty(),-1)}}function _N(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class EN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ia(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==vN)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,r)=>{n(e)})}static reject(e){return new C((n,r)=>{r(e)})}static waitFor(e){return new C((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=C.resolve(!1);for(const r of e)n=n.next(i=>i?C.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new C((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new C((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Sa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}pm.ae=-1;function Cc(t){return t==null}function Iu(t){return t===0&&1/t==-1/0}function wN(t){return typeof t=="number"&&Number.isInteger(t)&&!Iu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function wT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new Ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new al(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new al(this.root,e,this.comparator,!1)}getReverseIterator(){return new al(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new al(this.root,e,this.comparator,!0)}}class al{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=i??Xe.EMPTY,this.right=s??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Xe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Xe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new r_(this.data.getIterator())}getIteratorFrom(e){return new r_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class r_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new Zt([])}unionWith(e){let n=new tt(Je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ms(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new TT("Invalid base64 string: "+s):s}}(e);return new pt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const TN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kr(t){if(ve(!!t),typeof t=="string"){let e=0;const n=TN.exec(t);if(ve(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function li(t){return typeof t=="string"?pt.fromBase64String(t):pt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function gm(t){const e=t.mapValue.fields.__previous_value__;return mm(e)?gm(e):e}function Qo(t){const e=kr(t.mapValue.fields.__local_write_time__.timestampValue);return new je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Xo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Xo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Xo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ui(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?mm(t)?4:SN(t)?9007199254740991:10:G()}function In(t,e){if(t===e)return!0;const n=ui(t);if(n!==ui(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Qo(t).isEqual(Qo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=kr(i.timestampValue),a=kr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return li(i.bytesValue).isEqual(li(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Oe(i.geoPointValue.latitude)===Oe(s.geoPointValue.latitude)&&Oe(i.geoPointValue.longitude)===Oe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Oe(i.integerValue)===Oe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Oe(i.doubleValue),a=Oe(s.doubleValue);return o===a?Iu(o)===Iu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ms(t.arrayValue.values||[],e.arrayValue.values||[],In);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(n_(o)!==n_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!In(o[l],a[l])))return!1;return!0}(t,e);default:return G()}}function Yo(t,e){return(t.values||[]).find(n=>In(n,e))!==void 0}function gs(t,e){if(t===e)return 0;const n=ui(t),r=ui(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Oe(s.integerValue||s.doubleValue),l=Oe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return i_(t.timestampValue,e.timestampValue);case 4:return i_(Qo(t),Qo(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(s,o){const a=li(s),l=li(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=ae(a[u],l[u]);if(c!==0)return c}return ae(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ae(Oe(s.latitude),Oe(o.latitude));return a!==0?a:ae(Oe(s.longitude),Oe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=gs(a[u],l[u]);if(c)return c}return ae(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===ll.mapValue&&o===ll.mapValue)return 0;if(s===ll.mapValue)return 1;if(o===ll.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=ae(l[h],c[h]);if(d!==0)return d;const m=gs(a[l[h]],u[c[h]]);if(m!==0)return m}return ae(l.length,c.length)}(t.mapValue,e.mapValue);default:throw G()}}function i_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=kr(t),r=kr(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function ys(t){return yf(t)}function yf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return li(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return j.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=yf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${yf(n.fields[o])}`;return i+"}"}(t.mapValue):G()}function s_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function _f(t){return!!t&&"integerValue"in t}function ym(t){return!!t&&"arrayValue"in t}function o_(t){return!!t&&"nullValue"in t}function a_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Rl(t){return!!t&&"mapValue"in t}function fo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=fo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=fo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function SN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.value=e}static empty(){return new Ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Rl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=fo(n)}setAll(e){let n=Je.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=fo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Rl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Rl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){xs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ut(fo(this.value))}}function IT(t){const e=[];return xs(t.fields,(n,r)=>{const i=new Je([n]);if(Rl(r)){const s=IT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Zt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ut(e,0,Y.min(),Y.min(),Y.min(),Ut.empty(),0)}static newFoundDocument(e,n,r,i){return new ut(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new ut(e,2,n,Y.min(),Y.min(),Ut.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,Y.min(),Y.min(),Ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,n){this.position=e,this.inclusive=n}}function l_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=gs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function u_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!In(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,n="asc"){this.field=e,this.dir=n}}function AN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{}class Le extends ST{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new RN(e,n,r):n==="array-contains"?new NN(e,r):n==="in"?new xN(e,r):n==="not-in"?new DN(e,r):n==="array-contains-any"?new ON(e,r):new Le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new kN(e,r):new PN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(gs(n,this.value)):n!==null&&ui(this.value)===ui(n)&&this.matchesComparison(gs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class sn extends ST{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new sn(e,n)}matches(e){return AT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function AT(t){return t.op==="and"}function CT(t){return CN(t)&&AT(t)}function CN(t){for(const e of t.filters)if(e instanceof sn)return!1;return!0}function vf(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+ys(t.value);if(CT(t))return t.filters.map(e=>vf(e)).join(",");{const e=t.filters.map(n=>vf(n)).join(",");return`${t.op}(${e})`}}function RT(t,e){return t instanceof Le?function(r,i){return i instanceof Le&&r.op===i.op&&r.field.isEqual(i.field)&&In(r.value,i.value)}(t,e):t instanceof sn?function(r,i){return i instanceof sn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&RT(o,i.filters[a]),!0):!1}(t,e):void G()}function kT(t){return t instanceof Le?function(n){return`${n.field.canonicalString()} ${n.op} ${ys(n.value)}`}(t):t instanceof sn?function(n){return n.op.toString()+" {"+n.getFilters().map(kT).join(" ,")+"}"}(t):"Filter"}class RN extends Le{constructor(e,n,r){super(e,n,r),this.key=j.fromName(r.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.matchesComparison(n)}}class kN extends Le{constructor(e,n){super(e,"in",n),this.keys=PT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class PN extends Le{constructor(e,n){super(e,"not-in",n),this.keys=PT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function PT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class NN extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ym(n)&&Yo(n.arrayValue,this.value)}}class xN extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Yo(this.value.arrayValue,n)}}class DN extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(Yo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Yo(this.value.arrayValue,n)}}class ON extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ym(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Yo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.le=null}}function c_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new bN(t,e,n,r,i,s,o)}function _m(t){const e=Z(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>vf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Cc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ys(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ys(r)).join(",")),e.le=n}return e.le}function vm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!AN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!RT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!u_(t.startAt,e.startAt)&&u_(t.endAt,e.endAt)}function Ef(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.he=null,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function VN(t,e,n,r,i,s,o,a){return new Aa(t,e,n,r,i,s,o,a)}function NT(t){return new Aa(t)}function h_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function xT(t){return t.collectionGroup!==null}function po(t){const e=Z(t);if(e.he===null){e.he=[];const n=new Set;for(const s of e.explicitOrderBy)e.he.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new tt(Je.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.he.push(new Au(s,r))}),n.has(Je.keyField().canonicalString())||e.he.push(new Au(Je.keyField(),r))}return e.he}function _n(t){const e=Z(t);return e.Pe||(e.Pe=LN(e,po(t))),e.Pe}function LN(t,e){if(t.limitType==="F")return c_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Au(i.field,s)});const n=t.endAt?new Su(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Su(t.startAt.position,t.startAt.inclusive):null;return c_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function wf(t,e){const n=t.filters.concat([e]);return new Aa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Tf(t,e,n){return new Aa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Rc(t,e){return vm(_n(t),_n(e))&&t.limitType===e.limitType}function DT(t){return`${_m(_n(t))}|lt:${t.limitType}`}function ki(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>kT(i)).join(", ")}]`),Cc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ys(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ys(i)).join(",")),`Target(${r})`}(_n(t))}; limitType=${t.limitType})`}function kc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):j.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of po(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=l_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,po(r),i)||r.endAt&&!function(o,a,l){const u=l_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,po(r),i))}(t,e)}function MN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function OT(t){return(e,n)=>{let r=!1;for(const i of po(t)){const s=$N(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function $N(t,e,n){const r=t.field.isKeyField()?j.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?gs(l,u):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){xs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return wT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN=new Ae(j.comparator);function Wn(){return FN}const bT=new Ae(j.comparator);function eo(...t){let e=bT;for(const n of t)e=e.insert(n.key,n);return e}function VT(t){let e=bT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Hr(){return mo()}function LT(){return mo()}function mo(){return new Ds(t=>t.toString(),(t,e)=>t.isEqual(e))}const UN=new Ae(j.comparator),jN=new tt(j.comparator);function ne(...t){let e=jN;for(const n of t)e=e.add(n);return e}const BN=new tt(ae);function zN(){return BN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Iu(e)?"-0":e}}function $T(t){return{integerValue:""+t}}function HN(t,e){return wN(e)?$T(e):MT(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(){this._=void 0}}function WN(t,e,n){return t instanceof Cu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&mm(s)&&(s=gm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Jo?UT(t,e):t instanceof Zo?jT(t,e):function(i,s){const o=FT(i,s),a=d_(o)+d_(i.Te);return _f(o)&&_f(i.Te)?$T(a):MT(i.serializer,a)}(t,e)}function qN(t,e,n){return t instanceof Jo?UT(t,e):t instanceof Zo?jT(t,e):n}function FT(t,e){return t instanceof Ru?function(r){return _f(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Cu extends Pc{}class Jo extends Pc{constructor(e){super(),this.elements=e}}function UT(t,e){const n=BT(e);for(const r of t.elements)n.some(i=>In(i,r))||n.push(r);return{arrayValue:{values:n}}}class Zo extends Pc{constructor(e){super(),this.elements=e}}function jT(t,e){let n=BT(e);for(const r of t.elements)n=n.filter(i=>!In(i,r));return{arrayValue:{values:n}}}class Ru extends Pc{constructor(e,n){super(),this.serializer=e,this.Te=n}}function d_(t){return Oe(t.integerValue||t.doubleValue)}function BT(t){return ym(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function KN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Jo&&i instanceof Jo||r instanceof Zo&&i instanceof Zo?ms(r.elements,i.elements,In):r instanceof Ru&&i instanceof Ru?In(r.Te,i.Te):r instanceof Cu&&i instanceof Cu}(t.transform,e.transform)}class GN{constructor(e,n){this.version=e,this.transformResults=n}}class vn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vn}static exists(e){return new vn(void 0,e)}static updateTime(e){return new vn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function kl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Nc{}function zT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Em(t.key,vn.none()):new Ca(t.key,t.data,vn.none());{const n=t.data,r=Ut.empty();let i=new tt(Je.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new yi(t.key,r,new Zt(i.toArray()),vn.none())}}function QN(t,e,n){t instanceof Ca?function(i,s,o){const a=i.value.clone(),l=p_(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof yi?function(i,s,o){if(!kl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=p_(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(HT(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function go(t,e,n,r){return t instanceof Ca?function(s,o,a,l){if(!kl(s.precondition,o))return a;const u=s.value.clone(),c=m_(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof yi?function(s,o,a,l){if(!kl(s.precondition,o))return a;const u=m_(s.fieldTransforms,l,o),c=o.data;return c.setAll(HT(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return kl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function XN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=FT(r.transform,i||null);s!=null&&(n===null&&(n=Ut.empty()),n.set(r.field,s))}return n||null}function f_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ms(r,i,(s,o)=>KN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ca extends Nc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class yi extends Nc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function HT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function p_(t,e,n){const r=new Map;ve(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,qN(o,a,n[i]))}return r}function m_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,WN(s,o,e))}return r}class Em extends Nc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YN extends Nc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&QN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=go(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=go(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=LT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=zT(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&ms(this.mutations,e.mutations,(n,r)=>f_(n,r))&&ms(this.baseMutations,e.baseMutations,(n,r)=>f_(n,r))}}class wm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ve(e.mutations.length===r.length);let i=function(){return UN}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new wm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,se;function tx(t){switch(t){default:return G();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function WT(t){if(t===void 0)return Hn("GRPC error has no .code"),S.UNKNOWN;switch(t){case De.OK:return S.OK;case De.CANCELLED:return S.CANCELLED;case De.UNKNOWN:return S.UNKNOWN;case De.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case De.INTERNAL:return S.INTERNAL;case De.UNAVAILABLE:return S.UNAVAILABLE;case De.UNAUTHENTICATED:return S.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case De.NOT_FOUND:return S.NOT_FOUND;case De.ALREADY_EXISTS:return S.ALREADY_EXISTS;case De.PERMISSION_DENIED:return S.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case De.ABORTED:return S.ABORTED;case De.OUT_OF_RANGE:return S.OUT_OF_RANGE;case De.UNIMPLEMENTED:return S.UNIMPLEMENTED;case De.DATA_LOSS:return S.DATA_LOSS;default:return G()}}(se=De||(De={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nx(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx=new es([4294967295,4294967295],0);function g_(t){const e=nx().encode(t),n=new oN;return n.update(e),new Uint8Array(n.digest())}function y_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new es([n,r],0),new es([i,s],0)]}class Tm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new to(`Invalid padding: ${n}`);if(r<0)throw new to(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new to(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new to(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=es.fromNumber(this.Ee)}Ae(e,n,r){let i=e.add(n.multiply(es.fromNumber(r)));return i.compare(rx)===1&&(i=new es([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ee===0)return!1;const n=g_(e),[r,i]=y_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);if(!this.Re(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Tm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ee===0)return;const n=g_(e),[r,i]=y_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class to extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ra.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new xc(Y.min(),i,new Ae(ae),Wn(),ne())}}class Ra{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ra(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n,r,i){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=i}}class qT{constructor(e,n){this.targetId=e,this.ge=n}}class KT{constructor(e,n,r=pt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class __{constructor(){this.pe=0,this.ye=E_(),this.we=pt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get Ce(){return this.be}ve(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=ne(),n=ne(),r=ne();return this.ye.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new Ra(this.we,this.Se,e,n,r)}Me(){this.be=!1,this.ye=E_()}xe(e,n){this.be=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1}Le(){this.be=!0,this.Se=!0}}class ix{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Wn(),this.Ke=v_(),this.$e=new Ae(ae)}Ue(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.We(n,e.fe):this.Ge(n,e.key,e.fe);for(const n of e.removedTargetIds)this.Ge(n,e.key,e.fe)}ze(e){this.forEachTarget(e,n=>{const r=this.je(n);switch(e.state){case 0:this.He(n)&&r.ve(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.ve(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.He(n)&&(r.Le(),r.ve(e.resumeToken));break;case 4:this.He(n)&&(this.Je(n),r.ve(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,i)=>{this.He(i)&&n(i)})}Ye(e){const n=e.targetId,r=e.ge.count,i=this.Ze(n);if(i){const s=i.target;if(Ef(s))if(r===0){const o=new j(s.path);this.Ge(n,o,ut.newNoDocument(o,Y.min()))}else ve(r===1);else{const o=this.Xe(n);if(o!==r){const a=this.et(e),l=a?this.tt(a,e,o):1;if(l!==0){this.Je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.$e=this.$e.insert(n,u)}}}}}et(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=li(r).toUint8Array()}catch(l){if(l instanceof TT)return ps("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Tm(o,i,s)}catch(l){return ps(l instanceof to?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ee===0?null:a}tt(e,n,r){return n.ge.count===r-this.it(e,n.targetId)?0:2}it(e,n){const r=this.ke.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.ke.rt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ge(n,s,null),i++)}),i}st(e){const n=new Map;this.qe.forEach((s,o)=>{const a=this.Ze(o);if(a){if(s.current&&Ef(a.target)){const l=new j(a.target.path);this.Qe.get(l)!==null||this.ot(o,l)||this.Ge(o,l,ut.newNoDocument(l,e))}s.Ce&&(n.set(o,s.Fe()),s.Me())}});let r=ne();this.Ke.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ze(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qe.forEach((s,o)=>o.setReadTime(e));const i=new xc(e,n,this.$e,this.Qe,r);return this.Qe=Wn(),this.Ke=v_(),this.$e=new Ae(ae),i}We(e,n){if(!this.He(e))return;const r=this.ot(e,n.key)?2:0;this.je(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.Ke=this.Ke.insert(n.key,this._t(n.key).add(e))}Ge(e,n,r){if(!this.He(e))return;const i=this.je(e);this.ot(e,n)?i.xe(n,1):i.Oe(n),this.Ke=this.Ke.insert(n,this._t(n).delete(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}Xe(e){const n=this.je(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.je(e).Ne()}je(e){let n=this.qe.get(e);return n||(n=new __,this.qe.set(e,n)),n}_t(e){let n=this.Ke.get(e);return n||(n=new tt(ae),this.Ke=this.Ke.insert(e,n)),n}He(e){const n=this.Ze(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Ze(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.ut(e)}Je(e){this.qe.set(e,new __),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.Ge(e,n,null)})}ot(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function v_(){return new Ae(j.comparator)}function E_(){return new Ae(j.comparator)}const sx=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ox=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ax=(()=>({and:"AND",or:"OR"}))();class lx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function If(t,e){return t.useProto3Json||Cc(e)?e:{value:e}}function ku(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function GT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ux(t,e){return ku(t,e.toTimestamp())}function En(t){return ve(!!t),Y.fromTimestamp(function(n){const r=kr(n);return new je(r.seconds,r.nanos)}(t))}function Im(t,e){return function(r){return new ye(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function QT(t){const e=ye.fromString(t);return ve(ZT(e)),e}function Sf(t,e){return Im(t.databaseId,e.path)}function Lh(t,e){const n=QT(e);if(n.get(1)!==t.databaseId.projectId)throw new F(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(XT(n))}function Af(t,e){return Im(t.databaseId,e)}function cx(t){const e=QT(t);return e.length===4?ye.emptyPath():XT(e)}function Cf(t){return new ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function XT(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function w_(t,e,n){return{name:Sf(t,e),fields:n.value.mapValue.fields}}function hx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(ve(c===void 0||typeof c=="string"),pt.fromBase64String(c||"")):(ve(c===void 0||c instanceof Uint8Array),pt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?S.UNKNOWN:WT(u.code);return new F(c,u.message||"")}(o);n=new KT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Lh(t,r.document.name),s=En(r.document.updateTime),o=r.document.createTime?En(r.document.createTime):Y.min(),a=new Ut({mapValue:{fields:r.document.fields}}),l=ut.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Pl(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Lh(t,r.document),s=r.readTime?En(r.readTime):Y.min(),o=ut.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Pl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Lh(t,r.document),s=r.removedTargetIds||[];n=new Pl([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new ex(i,s),a=r.targetId;n=new qT(a,o)}}return n}function dx(t,e){let n;if(e instanceof Ca)n={update:w_(t,e.key,e.value)};else if(e instanceof Em)n={delete:Sf(t,e.key)};else if(e instanceof yi)n={update:w_(t,e.key,e.data),updateMask:wx(e.fieldMask)};else{if(!(e instanceof YN))return G();n={verify:Sf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Cu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Jo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Zo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ru)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:ux(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function fx(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?En(i.updateTime):En(s);return o.isEqual(Y.min())&&(o=En(s)),new GN(o,i.transformResults||[])}(n,e))):[]}function px(t,e){return{documents:[Af(t,e.path)]}}function mx(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Af(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Af(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return JT(sn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:Pi(h.field),direction:_x(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=If(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function gx(t){let e=cx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ve(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=YT(h);return d instanceof sn&&CT(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(_){return new Au(Ni(_.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Cc(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,m=h.values||[];return new Su(m,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,m=h.values||[];return new Su(m,d)}(n.endAt)),VN(e,i,o,s,a,"F",l,u)}function yx(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function YT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ni(n.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ni(n.unaryFilter.field);return Le.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ni(n.unaryFilter.field);return Le.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ni(n.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return Le.create(Ni(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return sn.create(n.compositeFilter.filters.map(r=>YT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function _x(t){return sx[t]}function vx(t){return ox[t]}function Ex(t){return ax[t]}function Pi(t){return{fieldPath:t.canonicalString()}}function Ni(t){return Je.fromServerFormat(t.fieldPath)}function JT(t){return t instanceof Le?function(n){if(n.op==="=="){if(a_(n.value))return{unaryFilter:{field:Pi(n.field),op:"IS_NAN"}};if(o_(n.value))return{unaryFilter:{field:Pi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(a_(n.value))return{unaryFilter:{field:Pi(n.field),op:"IS_NOT_NAN"}};if(o_(n.value))return{unaryFilter:{field:Pi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pi(n.field),op:vx(n.op),value:n.value}}}(t):t instanceof sn?function(n){const r=n.getFilters().map(i=>JT(i));return r.length===1?r[0]:{compositeFilter:{op:Ex(n.op),filters:r}}}(t):G()}function wx(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ZT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,n,r,i,s=Y.min(),o=Y.min(),a=pt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ar(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e){this.ct=e}}function Ix(t){const e=gx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Tf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(){this._n=new Ax}addToCollectionParentIndex(e,n){return this._n.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(Rr.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(Rr.min())}updateCollectionGroup(e,n,r){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class Ax{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new tt(ye.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new tt(ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new _s(0)}static Bn(){return new _s(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(){this.changes=new Ds(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?C.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&go(r.mutation,i,Zt.empty(),je.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=Hr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=eo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Hr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Wn();const o=mo(),a=function(){return mo()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof yi)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),go(c.mutation,u,c.mutation.getFieldMask(),je.now())):o.set(u.key,Zt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new Rx(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=mo();let i=new Ae((o,a)=>o-a),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Zt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||ne()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=LT();c.forEach(d=>{if(!s.has(d)){const m=zT(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return j.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):xT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):C.resolve(Hr());let a=-1,l=s;return o.next(u=>C.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?C.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ne())).next(c=>({batchId:a,changes:VT(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(r=>{let i=eo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=eo();return this.indexManager.getCollectionParents(e,s).next(a=>C.forEach(a,l=>{const u=function(h,d){return new Aa(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,ut.newInvalidDocument(c)))});let a=eo();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&go(c.mutation,u,Zt.empty(),je.now()),kc(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return C.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:En(i.createTime)}}(n)),C.resolve()}getNamedQuery(e,n){return C.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:Ix(i.bundledQuery),readTime:En(i.readTime)}}(n)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(){this.overlays=new Ae(j.comparator),this.hr=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Hr();return C.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),C.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),C.resolve()}getOverlaysForCollection(e,n,r){const i=Hr(),s=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return C.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ae((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Hr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Hr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return C.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ZN(n,r));let s=this.hr.get(n);s===void 0&&(s=ne(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(){this.Pr=new tt(ze.Ir),this.Tr=new tt(ze.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new ze(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new ze(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new j(new ye([])),r=new ze(n,e),i=new ze(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new j(new ye([])),r=new ze(n,e),i=new ze(n,e+1);let s=ne();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ze(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return j.comparator(e.key,n.key)||ae(e.pr,n.pr)}static Er(e,n){return ae(e.pr,n.pr)||j.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new tt(ze.Ir)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new JN(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new ze(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return C.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),i=new ze(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),C.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new tt(ae);return n.forEach(i=>{const s=new ze(i,0),o=new ze(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),C.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;j.isDocumentKey(s)||(s=s.child(""));const o=new ze(new j(s),0);let a=new tt(ae);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),C.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ve(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return C.forEach(n.mutations,i=>{const s=new ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new ze(n,0),i=this.wr.firstAfterOrEqual(r);return C.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e){this.vr=e,this.docs=function(){return new Ae(j.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return C.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let r=Wn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ut.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Wn();const o=n.path,a=new j(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||_N(yN(c),r)<=0||(i.has(c.key)||kc(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return C.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}Fr(e,n){return C.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Ox(this)}getSize(e){return C.resolve(this.size)}}class Ox extends Cx{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),C.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e){this.persistence=e,this.Mr=new Ds(n=>_m(n),vm),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Sm,this.targetCount=0,this.Br=_s.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),C.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new _s(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.qn(n),C.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),C.waitFor(s).next(()=>i)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return C.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),C.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),C.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),C.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return C.resolve(r)}containsKey(e,n){return C.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(e,n){this.Lr={},this.overlays={},this.kr=new pm(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new bx(this),this.indexManager=new Sx,this.remoteDocumentCache=function(i){return new Dx(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Tx(n),this.$r=new Px(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Nx,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new xx(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new Lx(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return C.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class Lx extends EN{constructor(e){super(),this.currentSequenceNumber=e}}class Am{constructor(e){this.persistence=e,this.zr=new Sm,this.jr=null}static Hr(e){return new Am(e)}get Jr(){if(this.jr)return this.jr;throw G()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),C.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),C.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Jr,r=>{const i=j.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return C.or([()=>C.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Cm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=8}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Mx;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(qs()<=ie.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",ki(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),C.resolve()):(qs()<=ie.DEBUG&&$("QueryEngine","Query:",ki(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(qs()<=ie.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",ki(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_n(n))):C.resolve())}ji(e,n){if(h_(n))return C.resolve(null);let r=_n(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Tf(n,null,"F"),r=_n(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,o,l.readTime)?this.ji(e,Tf(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,i){return h_(n)||i.isEqual(Y.min())?C.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?C.resolve(null):(qs()<=ie.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ki(n)),this.es(e,o,n,gN(i,-1)).next(a=>a))})}Zi(e,n){let r=new tt(OT(e));return n.forEach((i,s)=>{kc(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return qs()<=ie.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",ki(n)),this.zi.getDocumentsMatchingQuery(e,n,Rr.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Ae(ae),this.rs=new Ds(s=>_m(s),vm),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kx(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function Ux(t,e,n,r){return new Fx(t,e,n,r)}async function eI(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ne();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function jx(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let m=C.resolve();return d.forEach(_=>{m=m.next(()=>c.getEntry(l,_)).next(v=>{const T=u.docVersions.get(_);ve(T!==null),v.version.compareTo(T)<0&&(h.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),c.addEntry(v)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ne();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function tI(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function Bx(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(pt.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(v,T,p){return v.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(d,m,c)&&a.push(n.Qr.updateTargetData(s,m))});let l=Wn(),u=ne();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(zx(s,o,e.documentUpdates).next(c=>{l=c.cs,u=c.ls})),!r.isEqual(Y.min())){const c=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return C.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ns=i,s))}function zx(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Wn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Y.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:i}})}function Hx(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Wx(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,C.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new ar(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Rf(t,e,n){const r=Z(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Sa(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function T_(t,e,n){const r=Z(t);let i=Y.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=Z(l),d=h.rs.get(c);return d!==void 0?C.resolve(h.ns.get(d)):h.Qr.getTargetData(u,c)}(r,o,_n(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:ne())).next(a=>(qx(r,MN(e),a),{documents:a,hs:s})))}function qx(t,e,n){let r=t.ss.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class I_{constructor(){this.activeTargetIds=zN()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Kx{constructor(){this.no=new I_,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new I_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ul=null;function Mh(){return ul===null?ul=function(){return 268435456+Math.round(2147483648*Math.random())}():ul++,"0x"+ul.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="WebChannelConnection";class Yx extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=Mh(),l=this.bo(n,r);$("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,s,o),this.Co(n,l,u,i).then(c=>($("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw ps("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ns}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=Qx[n];return`${this.fo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const s=Mh();return new Promise((o,a)=>{const l=new sN;l.setWithCredentials(!0),l.listenOnce(rN.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Vh.NO_ERROR:const c=l.getResponseJson();$(ot,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Vh.TIMEOUT:$(ot,`RPC '${e}' ${s} timed out`),a(new F(S.DEADLINE_EXCEEDED,"Request time out"));break;case Vh.HTTP_ERROR:const h=l.getStatus();if($(ot,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const _=function(T){const p=T.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(p)>=0?p:S.UNKNOWN}(m.status);a(new F(_,m.message))}else a(new F(S.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new F(S.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{$(ot,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);$(ot,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Fo(e,n,r){const i=Mh(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=tN(),a=nN(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");$(ot,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,m=!1;const _=new Xx({lo:T=>{m?$(ot,`Not sending because RPC '${e}' stream ${i} is closed:`,T):(d||($(ot,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),$(ot,`RPC '${e}' stream ${i} sending:`,T),h.send(T))},ho:()=>h.close()}),v=(T,p,f)=>{T.listen(p,g=>{try{f(g)}catch(E){setTimeout(()=>{throw E},0)}})};return v(h,ol.EventType.OPEN,()=>{m||$(ot,`RPC '${e}' stream ${i} transport opened.`)}),v(h,ol.EventType.CLOSE,()=>{m||(m=!0,$(ot,`RPC '${e}' stream ${i} transport closed`),_.Vo())}),v(h,ol.EventType.ERROR,T=>{m||(m=!0,ps(ot,`RPC '${e}' stream ${i} transport errored:`,T),_.Vo(new F(S.UNAVAILABLE,"The operation could not be completed")))}),v(h,ol.EventType.MESSAGE,T=>{var p;if(!m){const f=T.data[0];ve(!!f);const g=f,E=g.error||((p=g[0])===null||p===void 0?void 0:p.error);if(E){$(ot,`RPC '${e}' stream ${i} received error:`,E);const A=E.status;let P=function(W){const B=De[W];if(B!==void 0)return WT(B)}(A),N=E.message;P===void 0&&(P=S.INTERNAL,N="Unknown error status: "+A+" with message "+E.message),m=!0,_.Vo(new F(P,N)),h.close()}else $(ot,`RPC '${e}' stream ${i} received:`,f),_.mo(f)}}),v(a,iN.STAT_EVENT,T=>{T.stat===e_.PROXY?$(ot,`RPC '${e}' stream ${i} detected buffering proxy`):T.stat===e_.NOPROXY&&$(ot,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.Ro()},0),_}}function $h(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(t){return new lx(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new nI(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(Hn(n.toString()),Hn("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new F(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Jx extends rI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=hx(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?En(o.readTime):Y.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=Cf(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Ef(l)?{documents:px(s,l)}:{query:mx(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=GT(s,o.resumeToken);const u=If(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(Y.min())>0){a.readTime=ku(s,o.snapshotVersion.toTimestamp());const u=If(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=yx(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=Cf(this.serializer),n.removeTarget=e,this.t_(n)}}class Zx extends rI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=fx(e.writeResults,e.commitTime),r=En(e.commitTime);return this.listener.T_(r,n)}return ve(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Cf(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>dx(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new F(S.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.So(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(S.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new F(S.UNKNOWN,s.toString())})}terminate(){this.A_=!0}}class tD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Hn(n),this.g_=!1):$("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{_i(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=Z(l);u.v_.add(4),await ka(u),u.x_.set("Unknown"),u.v_.delete(4),await Oc(u)}(this))})}),this.x_=new tD(r,i)}}async function Oc(t){if(_i(t))for(const e of t.F_)await e(!0)}async function ka(t){for(const e of t.F_)await e(!1)}function iI(t,e){const n=Z(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),Pm(n)?km(n):Os(n).Jo()&&Rm(n,e))}function sI(t,e){const n=Z(t),r=Os(n);n.C_.delete(e),r.Jo()&&oI(n,e),n.C_.size===0&&(r.Jo()?r.Xo():_i(n)&&n.x_.set("Unknown"))}function Rm(t,e){if(t.O_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Os(t).c_(e)}function oI(t,e){t.O_.Ne(e),Os(t).l_(e)}function km(t){t.O_=new ix({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.C_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),Os(t).start(),t.x_.p_()}function Pm(t){return _i(t)&&!Os(t).Ho()&&t.C_.size>0}function _i(t){return Z(t).v_.size===0}function aI(t){t.O_=void 0}async function rD(t){t.C_.forEach((e,n)=>{Rm(t,e)})}async function iD(t,e){aI(t),Pm(t)?(t.x_.S_(e),km(t)):t.x_.set("Unknown")}async function sD(t,e,n){if(t.x_.set("Online"),e instanceof KT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Pu(t,r)}else if(e instanceof Pl?t.O_.Ue(e):e instanceof qT?t.O_.Ye(e):t.O_.ze(e),!n.isEqual(Y.min()))try{const r=await tI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.st(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.C_.get(u);c&&s.C_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.C_.get(l);if(!c)return;s.C_.set(l,c.withResumeToken(pt.EMPTY_BYTE_STRING,c.snapshotVersion)),oI(s,l);const h=new ar(c.target,l,u,c.sequenceNumber);Rm(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await Pu(t,r)}}async function Pu(t,e,n){if(!Sa(e))throw e;t.v_.add(1),await ka(t),t.x_.set("Offline"),n||(n=()=>tI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await Oc(t)})}function lI(t,e){return e().catch(n=>Pu(t,n,e))}async function bc(t){const e=Z(t),n=Pr(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;oD(e);)try{const i=await Hx(e.localStore,r);if(i===null){e.D_.length===0&&n.Xo();break}r=i.batchId,aD(e,i)}catch(i){await Pu(e,i)}uI(e)&&cI(e)}function oD(t){return _i(t)&&t.D_.length<10}function aD(t,e){t.D_.push(e);const n=Pr(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function uI(t){return _i(t)&&!Pr(t).Ho()&&t.D_.length>0}function cI(t){Pr(t).start()}async function lD(t){Pr(t).d_()}async function uD(t){const e=Pr(t);for(const n of t.D_)e.I_(n.mutations)}async function cD(t,e,n){const r=t.D_.shift(),i=wm.from(r,e,n);await lI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await bc(t)}async function hD(t,e){e&&Pr(t).P_&&await async function(r,i){if(function(o){return tx(o)&&o!==S.ABORTED}(i.code)){const s=r.D_.shift();Pr(r).Zo(),await lI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await bc(r)}}(t,e),uI(t)&&cI(t)}async function A_(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=_i(n);n.v_.add(3),await ka(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await Oc(n)}async function dD(t,e){const n=Z(t);e?(n.v_.delete(2),await Oc(n)):e||(n.v_.add(2),await ka(n),n.x_.set("Unknown"))}function Os(t){return t.N_||(t.N_=function(n,r,i){const s=Z(n);return s.R_(),new Jx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:rD.bind(null,t),To:iD.bind(null,t),u_:sD.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),Pm(t)?km(t):t.x_.set("Unknown")):(await t.N_.stop(),aI(t))})),t.N_}function Pr(t){return t.B_||(t.B_=function(n,r,i){const s=Z(n);return s.R_(),new Zx(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:lD.bind(null,t),To:hD.bind(null,t),E_:uD.bind(null,t),T_:cD.bind(null,t)}),t.F_.push(async e=>{e?(t.B_.Zo(),await bc(t)):(await t.B_.stop(),t.D_.length>0&&($("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new wr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Nm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xm(t,e){if(Hn("AsyncQueue",`${e}: ${t}`),Sa(t))return new F(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.comparator=e?(n,r)=>e(n,r)||j.comparator(n.key,r.key):(n,r)=>j.comparator(n.key,r.key),this.keyedMap=eo(),this.sortedSet=new Ae(this.comparator)}static emptySet(e){return new ts(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ts)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ts;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(){this.L_=new Ae(j.comparator)}track(e){const n=e.doc.key,r=this.L_.get(n);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(n,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(n):e.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):G():this.L_=this.L_.insert(n,e)}k_(){const e=[];return this.L_.inorderTraversal((n,r)=>{e.push(r)}),e}}class vs{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new vs(e,n,ts.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Rc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(){this.q_=void 0,this.listeners=[]}}class pD{constructor(){this.queries=new Ds(e=>DT(e),Rc),this.onlineState="Unknown",this.Q_=new Set}}async function mD(t,e){const n=Z(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new fD),i)try{s.q_=await n.onListen(r)}catch(o){const a=xm(o,`Initialization of query '${ki(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.K_(n.onlineState),s.q_&&e.U_(s.q_)&&Dm(n)}async function gD(t,e){const n=Z(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function yD(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.U_(i)&&(r=!0);o.q_=i}}r&&Dm(n)}function _D(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Dm(t){t.Q_.forEach(e=>{e.next()})}class vD{constructor(e,n,r){this.query=e,this.W_=n,this.G_=!1,this.z_=null,this.onlineState="Unknown",this.options=r||{}}U_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new vs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.G_?this.j_(e)&&(this.W_.next(e),n=!0):this.H_(e,this.onlineState)&&(this.J_(e),n=!0),this.z_=e,n}onError(e){this.W_.error(e)}K_(e){this.onlineState=e;let n=!1;return this.z_&&!this.G_&&this.H_(this.z_,e)&&(this.J_(this.z_),n=!0),n}H_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Y_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}j_(e){if(e.docChanges.length>0)return!0;const n=this.z_&&this.z_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}J_(e){e=vs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.G_=!0,this.W_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e){this.key=e}}class dI{constructor(e){this.key=e}}class ED{constructor(e,n){this.query=e,this.sa=n,this.oa=null,this.hasCachedResults=!1,this.current=!1,this._a=ne(),this.mutatedKeys=ne(),this.aa=OT(e),this.ua=new ts(this.aa)}get ca(){return this.sa}la(e,n){const r=n?n.ha:new C_,i=n?n.ua:this.ua;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=kc(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let T=!1;d&&m?d.data.isEqual(m.data)?_!==v&&(r.track({type:3,doc:m}),T=!0):this.Pa(d,m)||(r.track({type:2,doc:m}),T=!0,(l&&this.aa(m,l)>0||u&&this.aa(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),T=!0):d&&!m&&(r.track({type:1,doc:d}),T=!0,(l||u)&&(a=!0)),T&&(m?(o=o.add(m),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ua:o,ha:r,Xi:a,mutatedKeys:s}}Pa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ua;this.ua=e.ua,this.mutatedKeys=e.mutatedKeys;const s=e.ha.k_();s.sort((u,c)=>function(d,m){const _=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return _(d)-_(m)}(u.type,c.type)||this.aa(u.doc,c.doc)),this.Ia(r);const o=n?this.Ta():[],a=this._a.size===0&&this.current?1:0,l=a!==this.oa;return this.oa=a,s.length!==0||l?{snapshot:new vs(this.query,e.ua,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}K_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ua:this.ua,ha:new C_,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Ea:[]}}da(e){return!this.sa.has(e)&&!!this.ua.has(e)&&!this.ua.get(e).hasLocalMutations}Ia(e){e&&(e.addedDocuments.forEach(n=>this.sa=this.sa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.sa=this.sa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this._a;this._a=ne(),this.ua.forEach(r=>{this.da(r.key)&&(this._a=this._a.add(r.key))});const n=[];return e.forEach(r=>{this._a.has(r)||n.push(new dI(r))}),this._a.forEach(r=>{e.has(r)||n.push(new hI(r))}),n}Aa(e){this.sa=e.hs,this._a=ne();const n=this.la(e.documents);return this.applyChanges(n,!0)}Ra(){return vs.fromInitialDocuments(this.query,this.ua,this.mutatedKeys,this.oa===0,this.hasCachedResults)}}class wD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class TD{constructor(e){this.key=e,this.Va=!1}}class ID{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.ma={},this.fa=new Ds(a=>DT(a),Rc),this.ga=new Map,this.pa=new Set,this.ya=new Ae(j.comparator),this.wa=new Map,this.Sa=new Sm,this.ba={},this.Da=new Map,this.Ca=_s.Bn(),this.onlineState="Unknown",this.va=void 0}get isPrimaryClient(){return this.va===!0}}async function SD(t,e){const n=bD(t);let r,i;const s=n.fa.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Ra();else{const o=await Wx(n.localStore,_n(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await AD(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&iI(n.remoteStore,o)}return i}async function AD(t,e,n,r,i){t.Fa=(h,d,m)=>async function(v,T,p,f){let g=T.view.la(p);g.Xi&&(g=await T_(v.localStore,T.query,!1).then(({documents:P})=>T.view.la(P,g)));const E=f&&f.targetChanges.get(T.targetId),A=T.view.applyChanges(g,v.isPrimaryClient,E);return k_(v,T.targetId,A.Ea),A.snapshot}(t,h,d,m);const s=await T_(t.localStore,e,!0),o=new ED(e,s.hs),a=o.la(s.documents),l=Ra.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);k_(t,n,u.Ea);const c=new wD(e,n,o);return t.fa.set(e,c),t.ga.has(n)?t.ga.get(n).push(e):t.ga.set(n,[e]),u.snapshot}async function CD(t,e){const n=Z(t),r=n.fa.get(e),i=n.ga.get(r.targetId);if(i.length>1)return n.ga.set(r.targetId,i.filter(s=>!Rc(s,e))),void n.fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Rf(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),sI(n.remoteStore,r.targetId),kf(n,r.targetId)}).catch(Ia)):(kf(n,r.targetId),await Rf(n.localStore,r.targetId,!0))}async function RD(t,e,n){const r=VD(t);try{const i=await function(o,a){const l=Z(o),u=je.now(),c=a.reduce((m,_)=>m.add(_.key),ne());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let _=Wn(),v=ne();return l.os.getEntries(m,c).next(T=>{_=T,_.forEach((p,f)=>{f.isValidDocument()||(v=v.add(p))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,_)).next(T=>{h=T;const p=[];for(const f of a){const g=XN(f,h.get(f.key).overlayedDocument);g!=null&&p.push(new yi(f.key,g,IT(g.value.mapValue),vn.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,p,a)}).next(T=>{d=T;const p=T.applyToLocalDocumentSet(h,v);return l.documentOverlayCache.saveOverlays(m,T.batchId,p)})}).then(()=>({batchId:d.batchId,changes:VT(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.ba[o.currentUser.toKey()];u||(u=new Ae(ae)),u=u.insert(a,l),o.ba[o.currentUser.toKey()]=u}(r,i.batchId,n),await Pa(r,i.changes),await bc(r.remoteStore)}catch(i){const s=xm(i,"Failed to persist write");n.reject(s)}}async function fI(t,e){const n=Z(t);try{const r=await Bx(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.wa.get(s);o&&(ve(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Va=!0:i.modifiedDocuments.size>0?ve(o.Va):i.removedDocuments.size>0&&(ve(o.Va),o.Va=!1))}),await Pa(n,r,e)}catch(r){await Ia(r)}}function R_(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.fa.forEach((s,o)=>{const a=o.view.K_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=Z(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.K_(a)&&(u=!0)}),u&&Dm(l)}(r.eventManager,e),i.length&&r.ma.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function kD(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.wa.get(e),s=i&&i.key;if(s){let o=new Ae(j.comparator);o=o.insert(s,ut.newNoDocument(s,Y.min()));const a=ne().add(s),l=new xc(Y.min(),new Map,new Ae(ae),o,a);await fI(r,l),r.ya=r.ya.remove(s),r.wa.delete(e),Om(r)}else await Rf(r.localStore,e,!1).then(()=>kf(r,e,n)).catch(Ia)}async function PD(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await jx(n.localStore,e);mI(n,r,null),pI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Pa(n,i)}catch(i){await Ia(i)}}async function ND(t,e,n){const r=Z(t);try{const i=await function(o,a){const l=Z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(ve(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);mI(r,e,n),pI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Pa(r,i)}catch(i){await Ia(i)}}function pI(t,e){(t.Da.get(e)||[]).forEach(n=>{n.resolve()}),t.Da.delete(e)}function mI(t,e,n){const r=Z(t);let i=r.ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ba[r.currentUser.toKey()]=i}}function kf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ga.get(e))t.fa.delete(r),n&&t.ma.Ma(r,n);t.ga.delete(e),t.isPrimaryClient&&t.Sa.Vr(e).forEach(r=>{t.Sa.containsKey(r)||gI(t,r)})}function gI(t,e){t.pa.delete(e.path.canonicalString());const n=t.ya.get(e);n!==null&&(sI(t.remoteStore,n),t.ya=t.ya.remove(e),t.wa.delete(n),Om(t))}function k_(t,e,n){for(const r of n)r instanceof hI?(t.Sa.addReference(r.key,e),xD(t,r)):r instanceof dI?($("SyncEngine","Document no longer in limbo: "+r.key),t.Sa.removeReference(r.key,e),t.Sa.containsKey(r.key)||gI(t,r.key)):G()}function xD(t,e){const n=e.key,r=n.path.canonicalString();t.ya.get(n)||t.pa.has(r)||($("SyncEngine","New document in limbo: "+n),t.pa.add(r),Om(t))}function Om(t){for(;t.pa.size>0&&t.ya.size<t.maxConcurrentLimboResolutions;){const e=t.pa.values().next().value;t.pa.delete(e);const n=new j(ye.fromString(e)),r=t.Ca.next();t.wa.set(r,new TD(n)),t.ya=t.ya.insert(n,r),iI(t.remoteStore,new ar(_n(NT(n.path)),r,"TargetPurposeLimboResolution",pm.ae))}}async function Pa(t,e,n){const r=Z(t),i=[],s=[],o=[];r.fa.isEmpty()||(r.fa.forEach((a,l)=>{o.push(r.Fa(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Cm.Ki(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.ma.u_(i),await async function(l,u){const c=Z(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>C.forEach(u,d=>C.forEach(d.qi,m=>c.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>C.forEach(d.Qi,m=>c.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!Sa(h))throw h;$("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const m=c.ns.get(d),_=m.snapshotVersion,v=m.withLastLimboFreeSnapshotVersion(_);c.ns=c.ns.insert(d,v)}}}(r.localStore,s))}async function DD(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await eI(n.localStore,e);n.currentUser=e,function(s,o){s.Da.forEach(a=>{a.forEach(l=>{l.reject(new F(S.CANCELLED,o))})}),s.Da.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Pa(n,r.us)}}function OD(t,e){const n=Z(t),r=n.wa.get(e);if(r&&r.Va)return ne().add(r.key);{let i=ne();const s=n.ga.get(e);if(!s)return i;for(const o of s){const a=n.fa.get(o);i=i.unionWith(a.view.ca)}return i}}function bD(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=OD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kD.bind(null,e),e.ma.u_=yD.bind(null,e.eventManager),e.ma.Ma=_D.bind(null,e.eventManager),e}function VD(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=PD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ND.bind(null,e),e}class P_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Dc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Ux(this.persistence,new $x,e.initialUser,this.serializer)}createPersistence(e){return new Vx(Am.Hr,this.serializer)}createSharedClientState(e){return new Kx}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class LD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>R_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=DD.bind(null,this.syncEngine),await dD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new pD}()}createDatastore(e){const n=Dc(e.databaseInfo.databaseId),r=function(s){return new Yx(s)}(e.databaseInfo);return function(s,o,a,l){return new eD(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new nD(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>R_(this.syncEngine,n,0),function(){return S_.C()?new S_:new Gx}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new ID(i,s,o,a,l,u);return c&&(h.va=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=Z(n);$("RemoteStore","RemoteStore shutting down."),r.v_.add(5),await ka(r),r.M_.shutdown(),r.x_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Na(this.observer.next,e)}error(e){this.observer.error?this.Na(this.observer.error,e):Hn("Uncaught Error in snapshot listener:",e.toString())}Ba(){this.muted=!0}Na(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=at.UNAUTHENTICATED,this.clientId=ET.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{$("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>($("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=xm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Fh(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await eI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function N_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await UD(t);$("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>A_(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>A_(e.remoteStore,s)),t._onlineComponents=e}function FD(t){return t.name==="FirebaseError"?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function UD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await Fh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!FD(n))throw n;ps("Error using user provided cache. Falling back to memory cache: "+n),await Fh(t,new P_)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await Fh(t,new P_);return t._offlineComponents}async function yI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await N_(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await N_(t,new LD))),t._onlineComponents}function jD(t){return yI(t).then(e=>e.syncEngine)}async function BD(t){const e=await yI(t),n=e.eventManager;return n.onListen=SD.bind(null,e.syncEngine),n.onUnlisten=CD.bind(null,e.syncEngine),n}function zD(t,e,n={}){const r=new wr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new MD({next:d=>{o.enqueueAndForget(()=>gD(s,h)),d.fromCache&&l.source==="server"?u.reject(new F(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new vD(a,c,{includeMetadataChanges:!0,Y_:!0});return mD(s,h)}(await BD(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(t,e,n){if(!n)throw new F(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function HD(t,e,n,r){if(e===!0&&r===!0)throw new F(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function D_(t){if(!j.isDocumentKey(t))throw new F(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function O_(t){if(j.isDocumentKey(t))throw new F(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Vc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function ea(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vc(t);throw new F(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new F(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}HD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_I((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new F(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new F(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new F(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Lc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new b_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new b_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new aN;switch(r.type){case"firstParty":return new hN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=x_.get(n);r&&($("ComponentProvider","Removing Datastore"),x_.delete(n),r.terminate())}(this),Promise.resolve()}}function WD(t,e,n,r={}){var i;const s=(t=ea(t,Lc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ps("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=at.MOCK_USER;else{a=LR(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new F(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new at(u)}t._authCredentials=new lN(new vT(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new bs(this.firestore,e,this._query)}}class zt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new zt(this.firestore,e,this._key)}}class Tr extends bs{constructor(e,n,r){super(e,n,NT(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new zt(this.firestore,null,new j(e))}withConverter(e){return new Tr(this.firestore,e,this._path)}}function bm(t,e,...n){if(t=Dt(t),vI("collection","path",e),t instanceof Lc){const r=ye.fromString(e,...n);return O_(r),new Tr(t,null,r)}{if(!(t instanceof zt||t instanceof Tr))throw new F(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return O_(r),new Tr(t.firestore,null,r)}}function EI(t,e,...n){if(t=Dt(t),arguments.length===1&&(e=ET.V()),vI("doc","path",e),t instanceof Lc){const r=ye.fromString(e,...n);return D_(r),new zt(t,null,new j(r))}{if(!(t instanceof zt||t instanceof Tr))throw new F(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return D_(r),new zt(t.firestore,t instanceof Tr?t.converter:null,new j(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(){this.Ya=Promise.resolve(),this.Za=[],this.Xa=!1,this.eu=[],this.tu=null,this.nu=!1,this.ru=!1,this.iu=[],this.jo=new nI(this,"async_queue_retry"),this.su=()=>{const n=$h();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=$h();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.su)}get isShuttingDown(){return this.Xa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ou(),this._u(e)}enterRestrictedMode(e){if(!this.Xa){this.Xa=!0,this.ru=e||!1;const n=$h();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.su)}}enqueue(e){if(this.ou(),this.Xa)return new Promise(()=>{});const n=new wr;return this._u(()=>this.Xa&&this.ru?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Za.push(e),this.au()))}async au(){if(this.Za.length!==0){try{await this.Za[0](),this.Za.shift(),this.jo.reset()}catch(e){if(!Sa(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Za.length>0&&this.jo.qo(()=>this.au())}}_u(e){const n=this.Ya.then(()=>(this.nu=!0,e().catch(r=>{this.tu=r,this.nu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Hn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.nu=!1,r))));return this.Ya=n,n}enqueueAfterDelay(e,n,r){this.ou(),this.iu.indexOf(e)>-1&&(n=0);const i=Nm.createAndSchedule(this,e,n,r,s=>this.uu(s));return this.eu.push(i),i}ou(){this.tu&&G()}verifyOperationInProgress(){}async cu(){let e;do e=this.Ya,await e;while(e!==this.Ya)}lu(e){for(const n of this.eu)if(n.timerId===e)return!0;return!1}hu(e){return this.cu().then(()=>{this.eu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.eu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.cu()})}Pu(e){this.iu.push(e)}uu(e){const n=this.eu.indexOf(e);this.eu.splice(n,1)}}class Mc extends Lc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new qD}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||TI(this),this._firestoreClient.terminate()}}function KD(t,e){const n=typeof t=="object"?t:pw(),r=typeof t=="string"?t:e||"(default)",i=Hp(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=bR("firestore");s&&WD(i,...s)}return i}function wI(t){return t._firestoreClient||TI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function TI(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new IN(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,_I(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new $D(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Es(pt.fromBase64String(e))}catch(n){throw new F(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Es(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GD=/^__.*__$/;class QD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new yi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ca(e,this.data,n,this.fieldTransforms)}}function SI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Mm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Iu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new Mm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}du(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Au:!1});return i.Ru(e),i}Vu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Au:!1});return i.Iu(),i}mu(e){return this.Eu({path:void 0,Au:!0})}fu(e){return Nu(e,this.settings.methodName,this.settings.gu||!1,this.path,this.settings.pu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Iu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ru(this.path.get(e))}Ru(e){if(e.length===0)throw this.fu("Document fields must not be empty");if(SI(this.Tu)&&GD.test(e))throw this.fu('Document fields cannot begin and end with "__"')}}class XD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Dc(e)}yu(e,n,r,i=!1){return new Mm({Tu:e,methodName:n,pu:r,path:Je.emptyPath(),Au:!1,gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function AI(t){const e=t._freezeSettings(),n=Dc(t._databaseId);return new XD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function YD(t,e,n,r,i,s={}){const o=t.yu(s.merge||s.mergeFields?2:0,e,n,i);kI("Data must be an object, but it was:",o,r);const a=CI(r,o);let l,u;if(s.merge)l=new Zt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=ZD(e,h,n);if(!o.contains(d))throw new F(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);tO(c,d)||c.push(d)}l=new Zt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new QD(new Ut(a),l,u)}function JD(t,e,n,r=!1){return $m(n,t.yu(r?4:3,e))}function $m(t,e){if(RI(t=Dt(t)))return kI("Unsupported field value:",e,t),CI(t,e);if(t instanceof II)return function(r,i){if(!SI(i.Tu))throw i.fu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.fu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Au&&e.Tu!==4)throw e.fu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=$m(a,i.mu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Dt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return HN(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=je.fromDate(r);return{timestampValue:ku(i.serializer,s)}}if(r instanceof je){const s=new je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ku(i.serializer,s)}}if(r instanceof Lm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Es)return{bytesValue:GT(i.serializer,r._byteString)};if(r instanceof zt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.fu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Im(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.fu(`Unsupported field value: ${Vc(r)}`)}(t,e)}function CI(t,e){const n={};return wT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xs(t,(r,i)=>{const s=$m(i,e.du(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function RI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof Lm||t instanceof Es||t instanceof zt||t instanceof II)}function kI(t,e,n){if(!RI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Vc(n);throw r==="an object"?e.fu(t+" a custom object"):e.fu(t+" "+r)}}function ZD(t,e,n){if((e=Dt(e))instanceof Vm)return e._internalPath;if(typeof e=="string")return PI(t,e);throw Nu("Field path arguments must be of type string or ",t,!1,void 0,n)}const eO=new RegExp("[~\\*/\\[\\]]");function PI(t,e,n){if(e.search(eO)>=0)throw Nu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vm(...e.split("."))._internalPath}catch{throw Nu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Nu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new F(S.INVALID_ARGUMENT,a+t+l)}function tO(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Fm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class nO extends NI{data(){return super.data()}}function Fm(t,e){return typeof e=="string"?PI(t,e):e instanceof Vm?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Um{}class iO extends Um{}function V_(t,e,...n){let r=[];e instanceof Um&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof jm).length,a=s.filter(l=>l instanceof $c).length;if(o>1||o>0&&a>0)throw new F(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class $c extends iO{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new $c(e,n,r)}_apply(e){const n=this._parse(e);return xI(e._query,n),new bs(e.firestore,e.converter,wf(e._query,n))}_parse(e){const n=AI(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new F(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){M_(h,c);const m=[];for(const _ of h)m.push(L_(l,s,_));d={arrayValue:{values:m}}}else d=L_(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||M_(h,c),d=JD(a,o,h,c==="in"||c==="not-in");return Le.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Uh(t,e,n){const r=e,i=Fm("where",t);return $c._create(i,r,n)}class jm extends Um{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new jm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:sn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)xI(o,l),o=wf(o,l)}(e._query,n),new bs(e.firestore,e.converter,wf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function L_(t,e,n){if(typeof(n=Dt(n))=="string"){if(n==="")throw new F(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xT(e)&&n.indexOf("/")!==-1)throw new F(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ye.fromString(n));if(!j.isDocumentKey(r))throw new F(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return s_(t,new j(r))}if(n instanceof zt)return s_(t,n._key);throw new F(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vc(n)}.`)}function M_(t,e){if(!Array.isArray(t)||t.length===0)throw new F(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function xI(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new F(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class sO{convertValue(e,n="none"){switch(ui(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(li(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return xs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Lm(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=gm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Qo(e));default:return null}}convertTimestamp(e){const n=kr(e);return new je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ye.fromString(e);ve(ZT(r));const i=new Xo(r.get(1),r.get(3)),s=new j(r.popFirst(5));return i.isEqual(n)||Hn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oO(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class aO extends NI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Nl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Fm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Nl extends aO{data(e={}){return super.data(e)}}class lO{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new cl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Nl(this._firestore,this._userDataWriter,r.key,r,new cl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Nl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new cl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Nl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new cl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:uO(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function uO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}class cO extends sO{constructor(e){super(),this.firestore=e}convertBytes(e){return new Es(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new zt(this.firestore,null,n)}}function Pf(t){t=ea(t,bs);const e=ea(t.firestore,Mc),n=wI(e),r=new cO(e);return rO(t._query),zD(n,t._query).then(i=>new lO(e,r,t,i))}function hO(t){return OI(ea(t.firestore,Mc),[new Em(t._key,vn.none())])}function DI(t,e){const n=ea(t.firestore,Mc),r=EI(t),i=oO(t.converter,e);return OI(n,[YD(AI(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,vn.exists(!1))]).then(()=>r)}function OI(t,e){return function(r,i){const s=new wr;return r.asyncQueue.enqueueAndForget(async()=>RD(await jD(r),i,s)),s.promise}(wI(t),e)}(function(e,n=!0){(function(i){Ns=i})(Rs),ds(new si("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Mc(new uN(r.getProvider("auth-internal")),new fN(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new F(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xo(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Er(t_,"4.3.0",e),Er(t_,"4.3.0","esm2017")})();var dO="firebase",fO="10.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Er(dO,fO,"app");function Bm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function bI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pO=bI,VI=new fa("auth","Firebase",bI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu=new Bp("@firebase/auth");function mO(t,...e){xu.logLevel<=ie.WARN&&xu.warn(`Auth (${Rs}): ${t}`,...e)}function xl(t,...e){xu.logLevel<=ie.ERROR&&xu.error(`Auth (${Rs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(t,...e){throw zm(t,...e)}function wn(t,...e){return zm(t,...e)}function LI(t,e,n){const r=Object.assign(Object.assign({},pO()),{[e]:n});return new fa("auth","Firebase",r).create(e,{appName:t.name})}function gO(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Sn(t,"argument-error"),LI(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return VI.create(t,...e)}function J(t,e,...n){if(!t)throw zm(e,...n)}function Ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xl(e),new Error(e)}function qn(t,e){t||Ln(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function yO(){return $_()==="http:"||$_()==="https:"}function $_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _O(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yO()||$R()||"connection"in navigator)?navigator.onLine:!0}function vO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Na=class{constructor(e,n){this.shortDelay=e,this.longDelay=n,qn(n>e,"Short delay should be less than long delay!"),this.isMobile=MR()||FR()}get(){return _O()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(t,e){qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let MI=class{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wO=new Na(3e4,6e4);function $I(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xa(t,e,n,r,i={}){return FI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=pa(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),MI.fetch()(UI(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function FI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},EO),e);try{const i=new IO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw hl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw hl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw hl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw hl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw LI(t,c,u);Sn(t,c)}}catch(i){if(i instanceof mi)throw i;Sn(t,"network-request-failed",{message:String(i)})}}async function TO(t,e,n,r,i={}){const s=await xa(t,e,n,r,i);return"mfaPendingCredential"in s&&Sn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function UI(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Hm(t.config,i):`${t.config.apiScheme}://${i}`}let IO=class{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wn(this.auth,"network-request-failed")),wO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}};function hl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=wn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SO(t,e){return xa(t,"POST","/v1/accounts:delete",e)}async function AO(t,e){return xa(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CO(t,e=!1){const n=Dt(t),r=await n.getIdToken(e),i=Wm(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:yo(jh(i.auth_time)),issuedAtTime:yo(jh(i.iat)),expirationTime:yo(jh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function jh(t){return Number(t)*1e3}function Wm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xl("JWT malformed, contained fewer than 3 sections"),null;try{const i=ow(n);return i?JSON.parse(i):(xl("Failed to decode base64 JWT payload"),null)}catch(i){return xl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function RO(t){const e=Wm(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ta(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof mi&&kO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function kO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PO=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jI=class{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=yo(this.lastLoginAt),this.creationTime=yo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Du(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ta(t,AO(n,{idToken:r}));J(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?DO(s.providerUserInfo):[],a=xO(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new jI(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function NO(t){const e=Dt(t);await Du(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function DO(t){return t.map(e=>{var{providerId:n}=e,r=Bm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OO(t,e){const n=await FI(t,{},async()=>{const r=pa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=UI(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",MI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let F_=class xf{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):RO(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return J(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await OO(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new xf;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xf,this.toJSON())}_performRefresh(){return Ln("not implemented")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}let Df=class Dl{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Bm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new PO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new jI(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ta(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return CO(this,e)}reload(){return NO(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Dl(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Du(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ta(this,SO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:E,isAnonymous:A,providerData:P,stsTokenManager:N}=n;J(g&&N,e,"internal-error");const L=F_.fromJSON(this.name,N);J(typeof g=="string",e,"internal-error"),Qn(h,e.name),Qn(d,e.name),J(typeof E=="boolean",e,"internal-error"),J(typeof A=="boolean",e,"internal-error"),Qn(m,e.name),Qn(_,e.name),Qn(v,e.name),Qn(T,e.name),Qn(p,e.name),Qn(f,e.name);const W=new Dl({uid:g,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:A,photoURL:_,phoneNumber:m,tenantId:v,stsTokenManager:L,createdAt:p,lastLoginAt:f});return P&&Array.isArray(P)&&(W.providerData=P.map(B=>Object.assign({},B))),T&&(W._redirectEventId=T),W}static async _fromIdTokenResponse(e,n,r=!1){const i=new F_;i.updateFromServerResponse(n);const s=new Dl({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Du(s),s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=new Map;function Mn(t){qn(t instanceof Function,"Expected a class definition");let e=U_.get(t);return e?(qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,U_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let BI=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}};BI.type="NONE";const j_=BI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(t,e,n){return`firebase:${t}:${e}:${n}`}let B_=class bl{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ol(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ol("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Df._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new bl(Mn(j_),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Mn(j_);const o=Ol(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Df._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new bl(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new bl(s,e,r))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(WI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(KI(e))return"Blackberry";if(GI(e))return"Webos";if(qm(e))return"Safari";if((e.includes("chrome/")||HI(e))&&!e.includes("edge/"))return"Chrome";if(qI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zI(t=ft()){return/firefox\//i.test(t)}function qm(t=ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function HI(t=ft()){return/crios\//i.test(t)}function WI(t=ft()){return/iemobile/i.test(t)}function qI(t=ft()){return/android/i.test(t)}function KI(t=ft()){return/blackberry/i.test(t)}function GI(t=ft()){return/webos/i.test(t)}function Fc(t=ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bO(t=ft()){var e;return Fc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function VO(){return UR()&&document.documentMode===10}function QI(t=ft()){return Fc(t)||qI(t)||GI(t)||KI(t)||/windows phone/i.test(t)||WI(t)}function LO(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(t,e=[]){let n;switch(t){case"Browser":n=z_(ft());break;case"Worker":n=`${z_(ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Rs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let MO=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $O(t,e={}){return xa(t,"GET","/v2/passwordPolicy",$I(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FO=6;let UO=class{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:FO,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jO=class{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new H_(this),this.idTokenSubscription=new H_(this),this.beforeStateQueue=new MO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=VI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await B_.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Du(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Dt(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $O(this),n=new UO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await B_.create(this,[Mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=XI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&mO(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}};function Uc(t){return Dt(t)}let H_=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=KR(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function zO(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=wn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",BO().appendChild(r)})}function HO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WO(t,e){const n=Hp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(pu(s,e??{}))return i;Sn(i,"already-initialized")}return n.initialize({options:e})}function qO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function KO(t,e,n){const r=Uc(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=YI(e),{host:o,port:a}=GO(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||QO()}function YI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function GO(t){const e=YI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:W_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:W_(o)}}}function W_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function QO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ln("not implemented")}_getIdTokenResponse(e){return Ln("not implemented")}_linkToIdToken(e,n){return Ln("not implemented")}_getReauthenticationResolver(e){return Ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ns(t,e){return TO(t,"POST","/v1/accounts:signInWithIdp",$I(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XO="http://localhost";class ci extends JI{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ci(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Bm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ci(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ns(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ns(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ns(e,n)}buildRequest(){const e={requestUri:XO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=pa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da extends Km{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends Da{constructor(){super("facebook.com")}static credential(e){return ci._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";tr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Da{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ci._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.GOOGLE_SIGN_IN_METHOD="google.com";Dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends Da{constructor(){super("github.com")}static credential(e){return ci._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.GITHUB_SIGN_IN_METHOD="github.com";nr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends Da{constructor(){super("twitter.com")}static credential(e,n){return ci._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.TWITTER_SIGN_IN_METHOD="twitter.com";rr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Df._fromIdTokenResponse(e,r,i),o=q_(r);return new ws({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=q_(r);return new ws({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function q_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou extends mi{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ou.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ou(e,n,r,i)}}function ZI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ou._fromErrorAndOperation(t,s,e,r):s})}async function YO(t,e,n=!1){const r=await ta(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ws._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JO(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ta(t,ZI(r,i,e,t),n);J(s.idToken,r,"internal-error");const o=Wm(s.idToken);J(o,r,"internal-error");const{sub:a}=o;return J(t.uid===a,r,"user-mismatch"),ws._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Sn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZO(t,e,n=!1){const r="signIn",i=await ZI(t,r,e),s=await ws._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function e2(t,e,n,r){return Dt(t).onIdTokenChanged(e,n,r)}function t2(t,e,n){return Dt(t).beforeAuthStateChanged(e,n)}function n2(t){return Dt(t).signOut()}const bu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bu,"1"),this.storage.removeItem(bu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r2(){const t=ft();return qm(t)||Fc(t)}const i2=1e3,s2=10;class t1 extends e1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=r2()&&LO(),this.fallbackToPolling=QI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);VO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,s2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},i2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}t1.type="LOCAL";const o2=t1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1 extends e1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}n1.type="SESSION";const r1=n1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new jc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await a2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Gm("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(){return window}function u2(t){Tn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i1(){return typeof Tn().WorkerGlobalScope<"u"&&typeof Tn().importScripts=="function"}async function c2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function h2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function d2(){return i1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1="firebaseLocalStorageDb",f2=1,Vu="firebaseLocalStorage",o1="fbase_key";class Oa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Bc(t,e){return t.transaction([Vu],e?"readwrite":"readonly").objectStore(Vu)}function p2(){const t=indexedDB.deleteDatabase(s1);return new Oa(t).toPromise()}function Of(){const t=indexedDB.open(s1,f2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Vu,{keyPath:o1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Vu)?e(r):(r.close(),await p2(),e(await Of()))})})}async function K_(t,e,n){const r=Bc(t,!0).put({[o1]:e,value:n});return new Oa(r).toPromise()}async function m2(t,e){const n=Bc(t,!1).get(e),r=await new Oa(n).toPromise();return r===void 0?null:r.value}function G_(t,e){const n=Bc(t,!0).delete(e);return new Oa(n).toPromise()}const g2=800,y2=3;class a1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Of(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>y2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return i1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jc._getInstance(d2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await c2(),!this.activeServiceWorker)return;this.sender=new l2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||h2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Of();return await K_(e,bu,"1"),await G_(e,bu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>K_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>m2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>G_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Bc(i,!1).getAll();return new Oa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),g2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}a1.type="LOCAL";const _2=a1;new Na(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(t,e){return e?Mn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm extends JI{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function v2(t){return ZO(t.auth,new Qm(t),t.bypassAuthState)}function E2(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),JO(n,new Qm(t),t.bypassAuthState)}async function w2(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),YO(n,new Qm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return v2;case"linkViaPopup":case"linkViaRedirect":return w2;case"reauthViaPopup":case"reauthViaRedirect":return E2;default:Sn(this.auth,"internal-error")}}resolve(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2=new Na(2e3,1e4);async function I2(t,e,n){const r=Uc(t);gO(t,e,Km);const i=l1(r,n);return new Wr(r,"signInViaPopup",e,i).executeNotNull()}class Wr extends u1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Wr.currentPopupAction&&Wr.currentPopupAction.cancel(),Wr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){qn(this.filter.length===1,"Popup operations only handle one event");const e=Gm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,T2.get())};e()}}Wr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S2="pendingRedirect",Vl=new Map;class A2 extends u1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vl.get(this.auth._key());if(!e){try{const r=await C2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vl.set(this.auth._key(),e)}return this.bypassAuthState||Vl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function C2(t,e){const n=P2(e),r=k2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function R2(t,e){Vl.set(t._key(),e)}function k2(t){return Mn(t._redirectPersistence)}function P2(t){return Ol(S2,t.config.apiKey,t.name)}async function N2(t,e,n=!1){const r=Uc(t),i=l1(r,e),o=await new A2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x2=10*60*1e3;class D2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!O2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!c1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=x2&&this.cachedEventUids.clear(),this.cachedEventUids.has(Q_(e))}saveEventToCache(e){this.cachedEventUids.add(Q_(e)),this.lastProcessedEventTime=Date.now()}}function Q_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function c1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function O2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return c1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b2(t,e={}){return xa(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,L2=/^https?/;async function M2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await b2(t);for(const n of e)try{if($2(n))return}catch{}Sn(t,"unauthorized-domain")}function $2(t){const e=Nf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!L2.test(n))return!1;if(V2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F2=new Na(3e4,6e4);function X_(){const t=Tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function U2(t){return new Promise((e,n)=>{var r,i,s;function o(){X_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{X_(),n(wn(t,"network-request-failed"))},timeout:F2.get()})}if(!((i=(r=Tn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Tn().gapi)===null||s===void 0)&&s.load)o();else{const a=HO("iframefcb");return Tn()[a]=()=>{gapi.load?o():n(wn(t,"network-request-failed"))},zO(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ll=null,e})}let Ll=null;function j2(t){return Ll=Ll||U2(t),Ll}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B2=new Na(5e3,15e3),z2="__/auth/iframe",H2="emulator/auth/iframe",W2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},q2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function K2(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hm(e,H2):`https://${t.config.authDomain}/${z2}`,r={apiKey:e.apiKey,appName:t.name,v:Rs},i=q2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${pa(r).slice(1)}`}async function G2(t){const e=await j2(t),n=Tn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:K2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:W2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=wn(t,"network-request-failed"),a=Tn().setTimeout(()=>{s(o)},B2.get());function l(){Tn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},X2=500,Y2=600,J2="_blank",Z2="http://localhost";class Y_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eb(t,e,n,r=X2,i=Y2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Q2),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ft().toLowerCase();n&&(a=HI(u)?J2:n),zI(u)&&(e=e||Z2,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,_])=>`${d}${m}=${_},`,"");if(bO(u)&&a!=="_self")return tb(e||"",a),new Y_(null);const h=window.open(e||"",a,c);J(h,t,"popup-blocked");try{h.focus()}catch{}return new Y_(h)}function tb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb="__/auth/handler",rb="emulator/auth/handler",ib=encodeURIComponent("fac");async function J_(t,e,n,r,i,s){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Rs,eventId:i};if(e instanceof Km){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Da){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${ib}=${encodeURIComponent(l)}`:"";return`${sb(t)}?${pa(a).slice(1)}${u}`}function sb({config:t}){return t.emulator?Hm(t,rb):`https://${t.authDomain}/${nb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh="webStorageSupport";class ob{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=r1,this._completeRedirectFn=N2,this._overrideRedirectResult=R2}async _openPopup(e,n,r,i){var s;qn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await J_(e,n,r,Nf(),i);return eb(e,o,Gm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await J_(e,n,r,Nf(),i);return u2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(qn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await G2(e),r=new D2(e);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Bh,{type:Bh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Bh];o!==void 0&&n(!!o),Sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=M2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return QI()||qm()||Fc()}}const ab=ob;var Z_="@firebase/auth",ev="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lb=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ub(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function cb(t){ds(new si("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:XI(t)},u=new jO(r,i,s,l);return qO(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ds(new si("auth-internal",e=>{const n=Uc(e.getProvider("auth").getImmediate());return(r=>new lb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Er(Z_,ev,ub(t)),Er(Z_,ev,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb=5*60,db=uw("authIdTokenMaxAge")||hb;let tv=null;const fb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>db)return;const i=n==null?void 0:n.token;tv!==i&&(tv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function pb(t=pw()){const e=Hp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=WO(t,{popupRedirectResolver:ab,persistence:[_2,o2,r1]}),r=uw("authTokenSyncURL");if(r){const s=fb(r);t2(n,s,()=>s(n.currentUser)),e2(n,o=>s(o))}const i=aw("auth");return i&&KO(n,`http://${i}`),n}cb("Browser");const mb={apiKey:"AIzaSyA9n3FrZ7mWLxSamXXPX8nloA7lkawH5uU",authDomain:"socialm-f040c.firebaseapp.com",projectId:"socialm-f040c",storageBucket:"socialm-f040c.appspot.com",messagingSenderId:"116343965261",appId:"1:116343965261:web:f4ae391eeb0808c3383e04"},h1=fw(mb),na=pb(h1),gb=new Dn,Lu=KD(h1);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},yb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},f1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(d1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new _b;const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const _=u<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _b extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vb=function(t){const e=d1(t);return f1.encodeByteArray(e,!0)},p1=function(t){return vb(t).replace(/\./g,"")},m1=function(t){try{return f1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb=()=>Eb().__FIREBASE_DEFAULTS__,Tb=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ib=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&m1(t[1]);return e&&JSON.parse(e)},Sb=()=>{try{return wb()||Tb()||Ib()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ab=t=>{var e;return(e=Sb())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(An())}function Rb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Pb(){try{return typeof indexedDB=="object"}catch{return!1}}function Nb(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb="FirebaseError";class vi extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=xb,Object.setPrototypeOf(this,vi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ba.prototype.create)}}class ba{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Db(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new vi(i,a,r)}}function Db(t,e){return t.replace(Ob,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ob=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g1(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bb(t,e){const n=new Vb(t,e);return n.subscribe.bind(n)}class Vb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Lb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=zh),i.error===void 0&&(i.error=zh),i.complete===void 0&&(i.complete=zh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function zh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(t){return t&&t._delegate?t._delegate:t}class ra{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const Mb={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},$b=fe.INFO,Fb={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},Ub=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Fb[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class y1{constructor(e){this.name=e,this._logLevel=$b,this._logHandler=Ub,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Mb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const jb=(t,e)=>e.some(n=>t instanceof n);let nv,rv;function Bb(){return nv||(nv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zb(){return rv||(rv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _1=new WeakMap,bf=new WeakMap,v1=new WeakMap,Hh=new WeakMap,Xm=new WeakMap;function Hb(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ir(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_1.set(n,t)}).catch(()=>{}),Xm.set(e,t),e}function Wb(t){if(bf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});bf.set(t,e)}let Vf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||v1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ir(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qb(t){Vf=t(Vf)}function Kb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Wh(this),e,...n);return v1.set(r,e.sort?e.sort():[e]),Ir(r)}:zb().includes(t)?function(...e){return t.apply(Wh(this),e),Ir(_1.get(this))}:function(...e){return Ir(t.apply(Wh(this),e))}}function Gb(t){return typeof t=="function"?Kb(t):(t instanceof IDBTransaction&&Wb(t),jb(t,Bb())?new Proxy(t,Vf):t)}function Ir(t){if(t instanceof IDBRequest)return Hb(t);if(Hh.has(t))return Hh.get(t);const e=Gb(t);return e!==t&&(Hh.set(t,e),Xm.set(e,t)),e}const Wh=t=>Xm.get(t);function Qb(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ir(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ir(o.result),l.oldVersion,l.newVersion,Ir(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Xb=["get","getKey","getAll","getAllKeys","count"],Yb=["put","add","delete","clear"],qh=new Map;function iv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qh.get(e))return qh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Yb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Xb.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return qh.set(e,s),s}qb(t=>({...t,get:(e,n,r)=>iv(e,n)||t.get(e,n,r),has:(e,n)=>!!iv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Zb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Lf="@firebase/app",sv="0.9.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=new y1("@firebase/app"),eV="@firebase/app-compat",tV="@firebase/analytics-compat",nV="@firebase/analytics",rV="@firebase/app-check-compat",iV="@firebase/app-check",sV="@firebase/auth",oV="@firebase/auth-compat",aV="@firebase/database",lV="@firebase/database-compat",uV="@firebase/functions",cV="@firebase/functions-compat",hV="@firebase/installations",dV="@firebase/installations-compat",fV="@firebase/messaging",pV="@firebase/messaging-compat",mV="@firebase/performance",gV="@firebase/performance-compat",yV="@firebase/remote-config",_V="@firebase/remote-config-compat",vV="@firebase/storage",EV="@firebase/storage-compat",wV="@firebase/firestore",TV="@firebase/firestore-compat",IV="firebase",SV="10.4.0",AV={[Lf]:"fire-core",[eV]:"fire-core-compat",[nV]:"fire-analytics",[tV]:"fire-analytics-compat",[iV]:"fire-app-check",[rV]:"fire-app-check-compat",[sV]:"fire-auth",[oV]:"fire-auth-compat",[aV]:"fire-rtdb",[lV]:"fire-rtdb-compat",[uV]:"fire-fn",[cV]:"fire-fn-compat",[hV]:"fire-iid",[dV]:"fire-iid-compat",[fV]:"fire-fcm",[pV]:"fire-fcm-compat",[mV]:"fire-perf",[gV]:"fire-perf-compat",[yV]:"fire-rc",[_V]:"fire-rc-compat",[vV]:"fire-gcs",[EV]:"fire-gcs-compat",[wV]:"fire-fst",[TV]:"fire-fst-compat","fire-js":"fire-js",[IV]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CV=new Map,ov=new Map;function RV(t,e){try{t.container.addComponent(e)}catch(n){hi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ia(t){const e=t.name;if(ov.has(e))return hi.debug(`There were multiple attempts to register component ${e}.`),!1;ov.set(e,t);for(const n of CV.values())RV(n,t);return!0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kV={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ym=new ba("app","Firebase",kV);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm=SV;function _o(t,e,n){var r;let i=(r=AV[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hi.warn(a.join(" "));return}ia(new ra(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PV="firebase-heartbeat-database",NV=1,sa="firebase-heartbeat-store";let Kh=null;function E1(){return Kh||(Kh=Qb(PV,NV,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(sa)}}}).catch(t=>{throw Ym.create("idb-open",{originalErrorMessage:t.message})})),Kh}async function xV(t){try{return await(await E1()).transaction(sa).objectStore(sa).get(w1(t))}catch(e){if(e instanceof vi)hi.warn(e.message);else{const n=Ym.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hi.warn(n.message)}}}async function av(t,e){try{const r=(await E1()).transaction(sa,"readwrite");await r.objectStore(sa).put(e,w1(t)),await r.done}catch(n){if(n instanceof vi)hi.warn(n.message);else{const r=Ym.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});hi.warn(r.message)}}}function w1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DV=1024,OV=30*24*60*60*1e3;class bV{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new LV(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=lv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=OV}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=lv(),{heartbeatsToSend:n,unsentEntries:r}=VV(this._heartbeatsCache.heartbeats),i=p1(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function lv(){return new Date().toISOString().substring(0,10)}function VV(t,e=DV){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),uv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),uv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class LV{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pb()?Nb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await xV(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return av(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return av(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function uv(t){return p1(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MV(t){ia(new ra("platform-logger",e=>new Jb(e),"PRIVATE")),ia(new ra("heartbeat",e=>new bV(e),"PRIVATE")),_o(Lf,sv,t),_o(Lf,sv,"esm2017"),_o("fire-js","")}MV("");function T1(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function I1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $V=I1,S1=new ba("auth","Firebase",I1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu=new y1("@firebase/auth");function FV(t,...e){Mu.logLevel<=fe.WARN&&Mu.warn(`Auth (${Jm}): ${t}`,...e)}function Ml(t,...e){Mu.logLevel<=fe.ERROR&&Mu.error(`Auth (${Jm}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(t,...e){throw Zm(t,...e)}function A1(t,...e){return Zm(t,...e)}function UV(t,e,n){const r=Object.assign(Object.assign({},$V()),{[e]:n});return new ba("auth","Firebase",r).create(e,{appName:t.name})}function Zm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return S1.create(t,...e)}function le(t,e,...n){if(!t)throw Zm(e,...n)}function vo(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ml(e),new Error(e)}function $u(t,e){t||vo(e)}function jV(){return hv()==="http:"||hv()==="https:"}function hv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BV(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jV()||Rb()||"connection"in navigator)?navigator.onLine:!0}function zV(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n){this.shortDelay=e,this.longDelay=n,$u(n>e,"Short delay should be less than long delay!"),this.isMobile=Cb()||kb()}get(){return BV()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HV(t,e){$u(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;vo("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;vo("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;vo("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WV={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qV=new La(3e4,6e4);function KV(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function eg(t,e,n,r,i={}){return R1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=g1(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),C1.fetch()(k1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function R1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},WV),e);try{const i=new GV(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw dl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw dl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw dl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw dl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw UV(t,c,u);cv(t,c)}}catch(i){if(i instanceof vi)throw i;cv(t,"network-request-failed",{message:String(i)})}}function k1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?HV(t.config,i):`${t.config.apiScheme}://${i}`}class GV{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(A1(this.auth,"network-request-failed")),qV.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function dl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=A1(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QV(t,e){return eg(t,"POST","/v1/accounts:delete",e)}async function XV(t,e){return eg(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function YV(t,e=!1){const n=Va(t),r=await n.getIdToken(e),i=P1(r);le(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Eo(Gh(i.auth_time)),issuedAtTime:Eo(Gh(i.iat)),expirationTime:Eo(Gh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Gh(t){return Number(t)*1e3}function P1(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ml("JWT malformed, contained fewer than 3 sections"),null;try{const i=m1(n);return i?JSON.parse(i):(Ml("Failed to decode base64 JWT payload"),null)}catch(i){return Ml("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function JV(t){const e=P1(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mf(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vi&&ZV(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ZV({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Eo(this.lastLoginAt),this.creationTime=Eo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Mf(t,XV(n,{idToken:r}));le(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?rL(s.providerUserInfo):[],a=nL(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new N1(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function tL(t){const e=Va(t);await Fu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nL(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function rL(t){return t.map(e=>{var{providerId:n}=e,r=T1(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iL(t,e){const n=await R1(t,{},async()=>{const r=g1({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=k1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",C1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):JV(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return le(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await iL(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new oa;return r&&(le(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(le(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(le(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oa,this.toJSON())}_performRefresh(){return vo("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rs{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=T1(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new eL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new N1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Mf(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return YV(this,e)}reload(){return tL(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Mf(this,QV(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:E,isAnonymous:A,providerData:P,stsTokenManager:N}=n;le(g&&N,e,"internal-error");const L=oa.fromJSON(this.name,N);le(typeof g=="string",e,"internal-error"),Xn(h,e.name),Xn(d,e.name),le(typeof E=="boolean",e,"internal-error"),le(typeof A=="boolean",e,"internal-error"),Xn(m,e.name),Xn(_,e.name),Xn(v,e.name),Xn(T,e.name),Xn(p,e.name),Xn(f,e.name);const W=new rs({uid:g,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:A,photoURL:_,phoneNumber:m,tenantId:v,stsTokenManager:L,createdAt:p,lastLoginAt:f});return P&&Array.isArray(P)&&(W.providerData=P.map(B=>Object.assign({},B))),T&&(W._redirectEventId=T),W}static async _fromIdTokenResponse(e,n,r=!1){const i=new oa;i.updateFromServerResponse(n);const s=new rs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Fu(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=new Map;function qr(t){$u(t instanceof Function,"Expected a class definition");let e=dv.get(t);return e?($u(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}x1.type="NONE";const fv=x1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(t,e,n){return`firebase:${t}:${e}:${n}`}class is{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Qh(this.userKey,i.apiKey,s),this.fullPersistenceKey=Qh("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new is(qr(fv),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||qr(fv);const o=Qh(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=rs._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new is(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new is(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lL(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sL(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cL(e))return"Blackberry";if(hL(e))return"Webos";if(oL(e))return"Safari";if((e.includes("chrome/")||aL(e))&&!e.includes("edge/"))return"Chrome";if(uL(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sL(t=An()){return/firefox\//i.test(t)}function oL(t=An()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function aL(t=An()){return/crios\//i.test(t)}function lL(t=An()){return/iemobile/i.test(t)}function uL(t=An()){return/android/i.test(t)}function cL(t=An()){return/blackberry/i.test(t)}function hL(t=An()){return/webos/i.test(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D1(t,e=[]){let n;switch(t){case"Browser":n=pv(An());break;case"Worker":n=`${pv(An())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Jm}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fL(t,e={}){return eg(t,"GET","/v2/passwordPolicy",KV(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pL=6;class mL{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:pL,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gL{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mv(this),this.idTokenSubscription=new mv(this),this.beforeStateQueue=new dL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=S1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await is.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zV()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Va(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(qr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await fL(this),n=new mL(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ba("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qr(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await is.create(this,[qr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=D1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&FV(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function yL(t){return Va(t)}class mv{constructor(e){this.auth=e,this.observer=null,this.addObserver=bb(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function _L(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(qr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vL(t,e,n,r){return Va(t).onAuthStateChanged(e,n,r)}new La(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new La(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new La(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new La(5e3,15e3);var gv="@firebase/auth",yv="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function TL(t){ia(new ra("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:D1(t)},u=new gL(r,i,s,l);return _L(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ia(new ra("auth-internal",e=>{const n=yL(e.getProvider("auth").getImmediate());return(r=>new EL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_o(gv,yv,wL(t)),_o(gv,yv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IL=5*60;Ab("authIdTokenMaxAge");TL("Browser");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function SL(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(h){o(h)}}function l(c){try{u(r.throw(c))}catch(h){o(h)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function AL(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Hi=function(){return Hi=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Hi.apply(this,arguments)},O1=function(t){return{loading:t==null,value:t}},CL=function(){return function(t,e){switch(e.type){case"error":return Hi(Hi({},t),{error:e.error,loading:!1,value:void 0});case"reset":return O1(e.defaultValue);case"value":return Hi(Hi({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},RL=function(t){var e=t?t():void 0,n=b.useReducer(CL(),O1(e)),r=n[0],i=n[1],s=b.useCallback(function(){var l=t?t():void 0;i({type:"reset",defaultValue:l})},[t]),o=b.useCallback(function(l){i({type:"error",error:l})},[]),a=b.useCallback(function(l){i({type:"value",value:l})},[]);return b.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},tg=function(t,e){var n=RL(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,a=n.value;return b.useEffect(function(){var l=vL(t,function(u){return SL(void 0,void 0,void 0,function(){var c;return AL(this,function(h){switch(h.label){case 0:if(!(e!=null&&e.onUserChanged))return[3,4];h.label=1;case 1:return h.trys.push([1,3,,4]),[4,e.onUserChanged(u)];case 2:return h.sent(),[3,4];case 3:return c=h.sent(),s(c),[3,4];case 4:return o(u),[2]}})})},s);return function(){l()}},[t]),[a,i,r]};const kL=t=>{const{post:e}=t,[n]=tg(na),[r,i]=b.useState(null),s=bm(Lu,"likes"),o=V_(s,Uh("postId","==",e.id)),a=async()=>{const h=await Pf(o);i(h.docs.map(d=>({userId:d.data().userId,likeId:d.id})))},l=async()=>{try{const h=await DI(s,{userId:n==null?void 0:n.uid,postId:e.id});n&&i(d=>d?[...d,{userId:n.uid,likeId:h.id}]:[{userId:n.uid,likeId:h.id}])}catch(h){console.log(h)}},u=async()=>{try{const h=V_(s,Uh("postId","==",e.id),Uh("userId","==",n==null?void 0:n.uid)),m=(await Pf(h)).docs[0].id,_=EI(Lu,"likes",m);await hO(_),n&&i(v=>v&&v.filter(T=>T.likeId!==m))}catch(h){console.log(h)}},c=r==null?void 0:r.find(h=>h.userId===(n==null?void 0:n.uid));return b.useEffect(()=>{a()},[]),H.jsxs("div",{children:[H.jsx("div",{className:"title",children:H.jsxs("h1",{children:[" ",e.title]})}),H.jsx("div",{className:"body",children:H.jsxs("p",{children:[" ",e.description," "]})}),H.jsxs("div",{className:"footer",children:[H.jsxs("p",{children:[" @",e.username," "]}),H.jsxs("button",{onClick:c?u:l,children:[c?H.jsx(H.Fragment,{children:"💗"}):H.jsx(H.Fragment,{children:"💖"})," "]}),r&&H.jsxs("p",{children:[" Likes: ",r==null?void 0:r.length," "]})]})]})},PL=()=>{const[t,e]=b.useState(null),n=bm(Lu,"posts"),r=async()=>{const i=await Pf(n);e(i.docs.map(s=>({...s.data(),id:s.id})))};return b.useEffect(()=>{r()},[]),H.jsx("div",{children:t==null?void 0:t.map(i=>H.jsx(kL,{post:i}))})},NL=()=>{const t=Up(),e=async()=>{const n=await I2(na,gb);console.log(n),t("/")};return H.jsxs("div",{children:[H.jsx("p",{children:" Sign In With Google To Continue "}),H.jsx("button",{onClick:e,children:" Sign In With Google "})]})},xL=()=>{const[t]=tg(na),e=async()=>{await n2(na)};return H.jsxs("div",{className:"navbar",children:[H.jsxs("div",{className:"links",children:[H.jsx(Th,{to:"/",children:" Home"}),t?H.jsx(Th,{to:"/createpost",children:" Create Post "}):H.jsx(Th,{to:"login",children:" Login "})]}),H.jsx("div",{className:"user",children:t&&H.jsxs(H.Fragment,{children:[H.jsxs("p",{children:[" ",t==null?void 0:t.displayName," "]}),H.jsx("img",{src:(t==null?void 0:t.photoURL)||"",width:30,height:30}),H.jsx("button",{className:"logout",onClick:e,children:" Log Out "})]})})]})};var Ma=t=>t.type==="checkbox",Wi=t=>t instanceof Date,gt=t=>t==null;const b1=t=>typeof t=="object";var Be=t=>!gt(t)&&!Array.isArray(t)&&b1(t)&&!Wi(t),DL=t=>Be(t)&&t.target?Ma(t.target)?t.target.checked:t.target.value:t,OL=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,bL=(t,e)=>t.has(OL(e)),VL=t=>{const e=t.constructor&&t.constructor.prototype;return Be(e)&&e.hasOwnProperty("isPrototypeOf")},ng=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Pn(t){let e;const n=Array.isArray(t);if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(ng&&(t instanceof Blob||t instanceof FileList))&&(n||Be(t)))if(e=n?[]:{},!n&&!VL(t))e=t;else for(const r in t)t.hasOwnProperty(r)&&(e[r]=Pn(t[r]));else return t;return e}var $a=t=>Array.isArray(t)?t.filter(Boolean):[],be=t=>t===void 0,M=(t,e,n)=>{if(!e||!Be(t))return n;const r=$a(e.split(/[,[\].]+?/)).reduce((i,s)=>gt(i)?i:i[s],t);return be(r)||r===t?be(t[e])?n:t[e]:r},Kr=t=>typeof t=="boolean";const _v={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Jt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Rn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};cn.createContext(null);var LL=(t,e,n,r=!0)=>{const i={defaultValues:e._defaultValues};for(const s in t)Object.defineProperty(i,s,{get:()=>{const o=s;return e._proxyFormState[o]!==Jt.all&&(e._proxyFormState[o]=!r||Jt.all),n&&(n[o]=!0),t[o]}});return i},Lt=t=>Be(t)&&!Object.keys(t).length,ML=(t,e,n,r)=>{n(t);const{name:i,...s}=t;return Lt(s)||Object.keys(s).length>=Object.keys(e).length||Object.keys(s).find(o=>e[o]===(!r||Jt.all))},Xh=t=>Array.isArray(t)?t:[t];function $L(t){const e=cn.useRef(t);e.current=t,cn.useEffect(()=>{const n=!t.disabled&&e.current.subject&&e.current.subject.subscribe({next:e.current.next});return()=>{n&&n.unsubscribe()}},[t.disabled])}var mn=t=>typeof t=="string",FL=(t,e,n,r,i)=>mn(t)?(r&&e.watch.add(t),M(n,t,i)):Array.isArray(t)?t.map(s=>(r&&e.watch.add(s),M(n,s))):(r&&(e.watchAll=!0),n),rg=t=>/^\w*$/.test(t),V1=t=>$a(t.replace(/["|']|\]/g,"").split(/\.|\[/));function de(t,e,n){let r=-1;const i=rg(e)?[e]:V1(e),s=i.length,o=s-1;for(;++r<s;){const a=i[r];let l=n;if(r!==o){const u=t[a];l=Be(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}t[a]=l,t=t[a]}return t}var L1=(t,e,n,r,i)=>e?{...n[t],types:{...n[t]&&n[t].types?n[t].types:{},[r]:i||!0}}:{};const $f=(t,e,n)=>{for(const r of n||Object.keys(t)){const i=M(t,r);if(i){const{_f:s,...o}=i;if(s&&e(s.name)){if(s.ref.focus){s.ref.focus();break}else if(s.refs&&s.refs[0].focus){s.refs[0].focus();break}}else Be(o)&&$f(o,e)}}};var vv=t=>({isOnSubmit:!t||t===Jt.onSubmit,isOnBlur:t===Jt.onBlur,isOnChange:t===Jt.onChange,isOnAll:t===Jt.all,isOnTouch:t===Jt.onTouched}),Ev=(t,e,n)=>!n&&(e.watchAll||e.watch.has(t)||[...e.watch].some(r=>t.startsWith(r)&&/^\.\w+/.test(t.slice(r.length)))),UL=(t,e,n)=>{const r=$a(M(t,n));return de(r,"root",e[n]),de(t,n,r),t},ig=t=>t.type==="file",lr=t=>typeof t=="function",Uu=t=>{if(!ng)return!1;const e=t?t.ownerDocument:0;return t instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},$l=t=>mn(t),sg=t=>t.type==="radio",ju=t=>t instanceof RegExp;const wv={value:!1,isValid:!1},Tv={value:!0,isValid:!0};var M1=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!be(t[0].attributes.value)?be(t[0].value)||t[0].value===""?Tv:{value:t[0].value,isValid:!0}:Tv:wv}return wv};const Iv={isValid:!1,value:null};var $1=t=>Array.isArray(t)?t.reduce((e,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:e,Iv):Iv;function Sv(t,e,n="validate"){if($l(t)||Array.isArray(t)&&t.every($l)||Kr(t)&&!t)return{type:n,message:$l(t)?t:"",ref:e}}var Ci=t=>Be(t)&&!ju(t)?t:{value:t,message:""},Av=async(t,e,n,r,i)=>{const{ref:s,refs:o,required:a,maxLength:l,minLength:u,min:c,max:h,pattern:d,validate:m,name:_,valueAsNumber:v,mount:T,disabled:p}=t._f,f=M(e,_);if(!T||p)return{};const g=o?o[0]:s,E=te=>{r&&g.reportValidity&&(g.setCustomValidity(Kr(te)?"":te||""),g.reportValidity())},A={},P=sg(s),N=Ma(s),L=P||N,W=(v||ig(s))&&be(s.value)&&be(f)||Uu(s)&&s.value===""||f===""||Array.isArray(f)&&!f.length,B=L1.bind(null,_,n,A),ee=(te,q,he,$e=Rn.maxLength,rt=Rn.minLength)=>{const wt=te?q:he;A[_]={type:te?$e:rt,message:wt,ref:s,...B(te?$e:rt,wt)}};if(i?!Array.isArray(f)||!f.length:a&&(!L&&(W||gt(f))||Kr(f)&&!f||N&&!M1(o).isValid||P&&!$1(o).isValid)){const{value:te,message:q}=$l(a)?{value:!!a,message:a}:Ci(a);if(te&&(A[_]={type:Rn.required,message:q,ref:g,...B(Rn.required,q)},!n))return E(q),A}if(!W&&(!gt(c)||!gt(h))){let te,q;const he=Ci(h),$e=Ci(c);if(!gt(f)&&!isNaN(f)){const rt=s.valueAsNumber||f&&+f;gt(he.value)||(te=rt>he.value),gt($e.value)||(q=rt<$e.value)}else{const rt=s.valueAsDate||new Date(f),wt=X=>new Date(new Date().toDateString()+" "+X),D=s.type=="time",K=s.type=="week";mn(he.value)&&f&&(te=D?wt(f)>wt(he.value):K?f>he.value:rt>new Date(he.value)),mn($e.value)&&f&&(q=D?wt(f)<wt($e.value):K?f<$e.value:rt<new Date($e.value))}if((te||q)&&(ee(!!te,he.message,$e.message,Rn.max,Rn.min),!n))return E(A[_].message),A}if((l||u)&&!W&&(mn(f)||i&&Array.isArray(f))){const te=Ci(l),q=Ci(u),he=!gt(te.value)&&f.length>+te.value,$e=!gt(q.value)&&f.length<+q.value;if((he||$e)&&(ee(he,te.message,q.message),!n))return E(A[_].message),A}if(d&&!W&&mn(f)){const{value:te,message:q}=Ci(d);if(ju(te)&&!f.match(te)&&(A[_]={type:Rn.pattern,message:q,ref:s,...B(Rn.pattern,q)},!n))return E(q),A}if(m){if(lr(m)){const te=await m(f,e),q=Sv(te,g);if(q&&(A[_]={...q,...B(Rn.validate,q.message)},!n))return E(q.message),A}else if(Be(m)){let te={};for(const q in m){if(!Lt(te)&&!n)break;const he=Sv(await m[q](f,e),g,q);he&&(te={...he,...B(q,he.message)},E(he.message),n&&(A[_]=te))}if(!Lt(te)&&(A[_]={ref:g,...te},!n))return A}}return E(!0),A};function jL(t,e){const n=e.slice(0,-1).length;let r=0;for(;r<n;)t=be(t)?r++:t[e[r++]];return t}function BL(t){for(const e in t)if(t.hasOwnProperty(e)&&!be(t[e]))return!1;return!0}function Ge(t,e){const n=Array.isArray(e)?e:rg(e)?[e]:V1(e),r=n.length===1?t:jL(t,n),i=n.length-1,s=n[i];return r&&delete r[s],i!==0&&(Be(r)&&Lt(r)||Array.isArray(r)&&BL(r))&&Ge(t,n.slice(0,-1)),t}function Yh(){let t=[];return{get observers(){return t},next:i=>{for(const s of t)s.next&&s.next(i)},subscribe:i=>(t.push(i),{unsubscribe:()=>{t=t.filter(s=>s!==i)}}),unsubscribe:()=>{t=[]}}}var Bu=t=>gt(t)||!b1(t);function Gr(t,e){if(Bu(t)||Bu(e))return t===e;if(Wi(t)&&Wi(e))return t.getTime()===e.getTime();const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n){const s=t[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=e[i];if(Wi(s)&&Wi(o)||Be(s)&&Be(o)||Array.isArray(s)&&Array.isArray(o)?!Gr(s,o):s!==o)return!1}}return!0}var F1=t=>t.type==="select-multiple",zL=t=>sg(t)||Ma(t),Jh=t=>Uu(t)&&t.isConnected,U1=t=>{for(const e in t)if(lr(t[e]))return!0;return!1};function zu(t,e={}){const n=Array.isArray(t);if(Be(t)||n)for(const r in t)Array.isArray(t[r])||Be(t[r])&&!U1(t[r])?(e[r]=Array.isArray(t[r])?[]:{},zu(t[r],e[r])):gt(t[r])||(e[r]=!0);return e}function j1(t,e,n){const r=Array.isArray(t);if(Be(t)||r)for(const i in t)Array.isArray(t[i])||Be(t[i])&&!U1(t[i])?be(e)||Bu(n[i])?n[i]=Array.isArray(t[i])?zu(t[i],[]):{...zu(t[i])}:j1(t[i],gt(e)?{}:e[i],n[i]):n[i]=!Gr(t[i],e[i]);return n}var Zh=(t,e)=>j1(t,e,zu(e)),B1=(t,{valueAsNumber:e,valueAsDate:n,setValueAs:r})=>be(t)?t:e?t===""?NaN:t&&+t:n&&mn(t)?new Date(t):r?r(t):t;function ed(t){const e=t.ref;if(!(t.refs?t.refs.every(n=>n.disabled):e.disabled))return ig(e)?e.files:sg(e)?$1(t.refs).value:F1(e)?[...e.selectedOptions].map(({value:n})=>n):Ma(e)?M1(t.refs).value:B1(be(e.value)?t.ref.value:e.value,t)}var HL=(t,e,n,r)=>{const i={};for(const s of t){const o=M(e,s);o&&de(i,s,o._f)}return{criteriaMode:n,names:[...t],fields:i,shouldUseNativeValidation:r}},Ks=t=>be(t)?t:ju(t)?t.source:Be(t)?ju(t.value)?t.value.source:t.value:t,WL=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function Cv(t,e,n){const r=M(t,n);if(r||rg(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=M(e,s),a=M(t,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(a&&a.type)return{name:s,error:a};i.pop()}return{name:n}}var qL=(t,e,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(e||t):(n?r.isOnBlur:i.isOnBlur)?!t:(n?r.isOnChange:i.isOnChange)?t:!0,KL=(t,e)=>!$a(M(t,e)).length&&Ge(t,e);const GL={mode:Jt.onSubmit,reValidateMode:Jt.onChange,shouldFocusError:!0};function QL(t={},e){let n={...GL,...t},r={submitCount:0,isDirty:!1,isLoading:lr(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},s=Be(n.defaultValues)||Be(n.values)?Pn(n.defaultValues||n.values)||{}:{},o=n.shouldUnregister?{}:Pn(s),a={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,c=0;const h={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},d={values:Yh(),array:Yh(),state:Yh()},m=t.resetOptions&&t.resetOptions.keepDirtyValues,_=vv(n.mode),v=vv(n.reValidateMode),T=n.criteriaMode===Jt.all,p=y=>w=>{clearTimeout(c),c=setTimeout(y,w)},f=async y=>{if(h.isValid||y){const w=n.resolver?Lt((await W()).errors):await ee(i,!0);w!==r.isValid&&d.state.next({isValid:w})}},g=y=>h.isValidating&&d.state.next({isValidating:y}),E=(y,w=[],I,U,O=!0,k=!0)=>{if(U&&I){if(a.action=!0,k&&Array.isArray(M(i,y))){const z=I(M(i,y),U.argA,U.argB);O&&de(i,y,z)}if(k&&Array.isArray(M(r.errors,y))){const z=I(M(r.errors,y),U.argA,U.argB);O&&de(r.errors,y,z),KL(r.errors,y)}if(h.touchedFields&&k&&Array.isArray(M(r.touchedFields,y))){const z=I(M(r.touchedFields,y),U.argA,U.argB);O&&de(r.touchedFields,y,z)}h.dirtyFields&&(r.dirtyFields=Zh(s,o)),d.state.next({name:y,isDirty:q(y,w),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else de(o,y,w)},A=(y,w)=>{de(r.errors,y,w),d.state.next({errors:r.errors})},P=(y,w,I,U)=>{const O=M(i,y);if(O){const k=M(o,y,be(I)?M(s,y):I);be(k)||U&&U.defaultChecked||w?de(o,y,w?k:ed(O._f)):rt(y,k),a.mount&&f()}},N=(y,w,I,U,O)=>{let k=!1,z=!1;const Ce={name:y};if(!I||U){h.isDirty&&(z=r.isDirty,r.isDirty=Ce.isDirty=q(),k=z!==Ce.isDirty);const Ne=Gr(M(s,y),w);z=M(r.dirtyFields,y),Ne?Ge(r.dirtyFields,y):de(r.dirtyFields,y,!0),Ce.dirtyFields=r.dirtyFields,k=k||h.dirtyFields&&z!==!Ne}if(I){const Ne=M(r.touchedFields,y);Ne||(de(r.touchedFields,y,I),Ce.touchedFields=r.touchedFields,k=k||h.touchedFields&&Ne!==I)}return k&&O&&d.state.next(Ce),k?Ce:{}},L=(y,w,I,U)=>{const O=M(r.errors,y),k=h.isValid&&Kr(w)&&r.isValid!==w;if(t.delayError&&I?(u=p(()=>A(y,I)),u(t.delayError)):(clearTimeout(c),u=null,I?de(r.errors,y,I):Ge(r.errors,y)),(I?!Gr(O,I):O)||!Lt(U)||k){const z={...U,...k&&Kr(w)?{isValid:w}:{},errors:r.errors,name:y};r={...r,...z},d.state.next(z)}g(!1)},W=async y=>n.resolver(o,n.context,HL(y||l.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),B=async y=>{const{errors:w}=await W(y);if(y)for(const I of y){const U=M(w,I);U?de(r.errors,I,U):Ge(r.errors,I)}else r.errors=w;return w},ee=async(y,w,I={valid:!0})=>{for(const U in y){const O=y[U];if(O){const{_f:k,...z}=O;if(k){const Ce=l.array.has(k.name),Ne=await Av(O,o,T,n.shouldUseNativeValidation&&!w,Ce);if(Ne[k.name]&&(I.valid=!1,w))break;!w&&(M(Ne,k.name)?Ce?UL(r.errors,Ne,k.name):de(r.errors,k.name,Ne[k.name]):Ge(r.errors,k.name))}z&&await ee(z,w,I)}}return I.valid},te=()=>{for(const y of l.unMount){const w=M(i,y);w&&(w._f.refs?w._f.refs.every(I=>!Jh(I)):!Jh(w._f.ref))&&qt(y)}l.unMount=new Set},q=(y,w)=>(y&&w&&de(o,y,w),!Gr(Ee(),s)),he=(y,w,I)=>FL(y,l,{...a.mount?o:be(w)?s:mn(y)?{[y]:w}:w},I,w),$e=y=>$a(M(a.mount?o:s,y,t.shouldUnregister?M(s,y,[]):[])),rt=(y,w,I={})=>{const U=M(i,y);let O=w;if(U){const k=U._f;k&&(!k.disabled&&de(o,y,B1(w,k)),O=Uu(k.ref)&&gt(w)?"":w,F1(k.ref)?[...k.ref.options].forEach(z=>z.selected=O.includes(z.value)):k.refs?Ma(k.ref)?k.refs.length>1?k.refs.forEach(z=>(!z.defaultChecked||!z.disabled)&&(z.checked=Array.isArray(O)?!!O.find(Ce=>Ce===z.value):O===z.value)):k.refs[0]&&(k.refs[0].checked=!!O):k.refs.forEach(z=>z.checked=z.value===O):ig(k.ref)?k.ref.value="":(k.ref.value=O,k.ref.type||d.values.next({name:y,values:{...o}})))}(I.shouldDirty||I.shouldTouch)&&N(y,O,I.shouldTouch,I.shouldDirty,!0),I.shouldValidate&&X(y)},wt=(y,w,I)=>{for(const U in w){const O=w[U],k=`${y}.${U}`,z=M(i,k);(l.array.has(y)||!Bu(O)||z&&!z._f)&&!Wi(O)?wt(k,O,I):rt(k,O,I)}},D=(y,w,I={})=>{const U=M(i,y),O=l.array.has(y),k=Pn(w);de(o,y,k),O?(d.array.next({name:y,values:{...o}}),(h.isDirty||h.dirtyFields)&&I.shouldDirty&&d.state.next({name:y,dirtyFields:Zh(s,o),isDirty:q(y,k)})):U&&!U._f&&!gt(k)?wt(y,k,I):rt(y,k,I),Ev(y,l)&&d.state.next({...r}),d.values.next({name:y,values:{...o}}),!a.mount&&e()},K=async y=>{const w=y.target;let I=w.name,U=!0;const O=M(i,I),k=()=>w.type?ed(O._f):DL(y);if(O){let z,Ce;const Ne=k(),Ii=y.type===_v.BLUR||y.type===_v.FOCUS_OUT,eS=!WL(O._f)&&!n.resolver&&!M(r.errors,I)&&!O._f.deps||qL(Ii,M(r.touchedFields,I),r.isSubmitted,v,_),Kc=Ev(I,l,Ii);de(o,I,Ne),Ii?(O._f.onBlur&&O._f.onBlur(y),u&&u(0)):O._f.onChange&&O._f.onChange(y);const Gc=N(I,Ne,Ii,!1),tS=!Lt(Gc)||Kc;if(!Ii&&d.values.next({name:I,type:y.type,values:{...o}}),eS)return h.isValid&&f(),tS&&d.state.next({name:I,...Kc?{}:Gc});if(!Ii&&Kc&&d.state.next({...r}),g(!0),n.resolver){const{errors:mg}=await W([I]),nS=Cv(r.errors,i,I),gg=Cv(mg,i,nS.name||I);z=gg.error,I=gg.name,Ce=Lt(mg)}else z=(await Av(O,o,T,n.shouldUseNativeValidation))[I],U=Number.isNaN(Ne)||Ne===M(o,I,Ne),U&&(z?Ce=!1:h.isValid&&(Ce=await ee(i,!0)));U&&(O._f.deps&&X(O._f.deps),L(I,Ce,z,Gc))}},X=async(y,w={})=>{let I,U;const O=Xh(y);if(g(!0),n.resolver){const k=await B(be(y)?y:O);I=Lt(k),U=y?!O.some(z=>M(k,z)):I}else y?(U=(await Promise.all(O.map(async k=>{const z=M(i,k);return await ee(z&&z._f?{[k]:z}:z)}))).every(Boolean),!(!U&&!r.isValid)&&f()):U=I=await ee(i);return d.state.next({...!mn(y)||h.isValid&&I!==r.isValid?{}:{name:y},...n.resolver||!y?{isValid:I}:{},errors:r.errors,isValidating:!1}),w.shouldFocus&&!U&&$f(i,k=>k&&M(r.errors,k),y?O:l.mount),U},Ee=y=>{const w={...s,...a.mount?o:{}};return be(y)?w:mn(y)?M(w,y):y.map(I=>M(w,I))},Pe=(y,w)=>({invalid:!!M((w||r).errors,y),isDirty:!!M((w||r).dirtyFields,y),isTouched:!!M((w||r).touchedFields,y),error:M((w||r).errors,y)}),Ti=y=>{y&&Xh(y).forEach(w=>Ge(r.errors,w)),d.state.next({errors:y?r.errors:{}})},on=(y,w,I)=>{const U=(M(i,y,{_f:{}})._f||{}).ref;de(r.errors,y,{...w,ref:U}),d.state.next({name:y,errors:r.errors,isValid:!1}),I&&I.shouldFocus&&U&&U.focus&&U.focus()},Vs=(y,w)=>lr(y)?d.values.subscribe({next:I=>y(he(void 0,w),I)}):he(y,w,!0),qt=(y,w={})=>{for(const I of y?Xh(y):l.mount)l.mount.delete(I),l.array.delete(I),w.keepValue||(Ge(i,I),Ge(o,I)),!w.keepError&&Ge(r.errors,I),!w.keepDirty&&Ge(r.dirtyFields,I),!w.keepTouched&&Ge(r.touchedFields,I),!n.shouldUnregister&&!w.keepDefaultValue&&Ge(s,I);d.values.next({values:{...o}}),d.state.next({...r,...w.keepDirty?{isDirty:q()}:{}}),!w.keepIsValid&&f()},Vr=({disabled:y,name:w,field:I,fields:U})=>{if(Kr(y)){const O=y?void 0:M(o,w,ed(I?I._f:M(U,w)._f));de(o,w,O),N(w,O,!1,!1,!0)}},qc=(y,w={})=>{let I=M(i,y);const U=Kr(w.disabled);return de(i,y,{...I||{},_f:{...I&&I._f?I._f:{ref:{name:y}},name:y,mount:!0,...w}}),l.mount.add(y),I?Vr({field:I,disabled:w.disabled,name:y}):P(y,!0,w.value),{...U?{disabled:w.disabled}:{},...n.progressive?{required:!!w.required,min:Ks(w.min),max:Ks(w.max),minLength:Ks(w.minLength),maxLength:Ks(w.maxLength),pattern:Ks(w.pattern)}:{},name:y,onChange:K,onBlur:K,ref:O=>{if(O){qc(y,w),I=M(i,y);const k=be(O.value)&&O.querySelectorAll&&O.querySelectorAll("input,select,textarea")[0]||O,z=zL(k),Ce=I._f.refs||[];if(z?Ce.find(Ne=>Ne===k):k===I._f.ref)return;de(i,y,{_f:{...I._f,...z?{refs:[...Ce.filter(Jh),k,...Array.isArray(M(s,y))?[{}]:[]],ref:{type:k.type,name:y}}:{ref:k}}}),P(y,!1,void 0,k)}else I=M(i,y,{}),I._f&&(I._f.mount=!1),(n.shouldUnregister||w.shouldUnregister)&&!(bL(l.array,y)&&a.action)&&l.unMount.add(y)}}},hg=()=>n.shouldFocusError&&$f(i,y=>y&&M(r.errors,y),l.mount),dg=(y,w)=>async I=>{I&&(I.preventDefault&&I.preventDefault(),I.persist&&I.persist());let U=Pn(o);if(d.state.next({isSubmitting:!0}),n.resolver){const{errors:O,values:k}=await W();r.errors=O,U=k}else await ee(i);Ge(r.errors,"root"),Lt(r.errors)?(d.state.next({errors:{}}),await y(U,I)):(w&&await w({...r.errors},I),hg(),setTimeout(hg)),d.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Lt(r.errors),submitCount:r.submitCount+1,errors:r.errors})},Z1=(y,w={})=>{M(i,y)&&(be(w.defaultValue)?D(y,M(s,y)):(D(y,w.defaultValue),de(s,y,w.defaultValue)),w.keepTouched||Ge(r.touchedFields,y),w.keepDirty||(Ge(r.dirtyFields,y),r.isDirty=w.defaultValue?q(y,M(s,y)):q()),w.keepError||(Ge(r.errors,y),h.isValid&&f()),d.state.next({...r}))},fg=(y,w={})=>{const I=y?Pn(y):s,U=Pn(I),O=y&&!Lt(y)?U:s;if(w.keepDefaultValues||(s=I),!w.keepValues){if(w.keepDirtyValues||m)for(const k of l.mount)M(r.dirtyFields,k)?de(O,k,M(o,k)):D(k,M(O,k));else{if(ng&&be(y))for(const k of l.mount){const z=M(i,k);if(z&&z._f){const Ce=Array.isArray(z._f.refs)?z._f.refs[0]:z._f.ref;if(Uu(Ce)){const Ne=Ce.closest("form");if(Ne){Ne.reset();break}}}}i={}}o=t.shouldUnregister?w.keepDefaultValues?Pn(s):{}:Pn(O),d.array.next({values:{...O}}),d.values.next({values:{...O}})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!a.mount&&e(),a.mount=!h.isValid||!!w.keepIsValid,a.watch=!!t.shouldUnregister,d.state.next({submitCount:w.keepSubmitCount?r.submitCount:0,isDirty:w.keepDirty?r.isDirty:!!(w.keepDefaultValues&&!Gr(y,s)),isSubmitted:w.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:w.keepDirtyValues?r.dirtyFields:w.keepDefaultValues&&y?Zh(s,y):{},touchedFields:w.keepTouched?r.touchedFields:{},errors:w.keepErrors?r.errors:{},isSubmitSuccessful:w.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},pg=(y,w)=>fg(lr(y)?y(o):y,w);return{control:{register:qc,unregister:qt,getFieldState:Pe,handleSubmit:dg,setError:on,_executeSchema:W,_getWatch:he,_getDirty:q,_updateValid:f,_removeUnmounted:te,_updateFieldArray:E,_updateDisabledField:Vr,_getFieldArray:$e,_reset:fg,_resetDefaultValues:()=>lr(n.defaultValues)&&n.defaultValues().then(y=>{pg(y,n.resetOptions),d.state.next({isLoading:!1})}),_updateFormState:y=>{r={...r,...y}},_subjects:d,_proxyFormState:h,get _fields(){return i},get _formValues(){return o},get _state(){return a},set _state(y){a=y},get _defaultValues(){return s},get _names(){return l},set _names(y){l=y},get _formState(){return r},set _formState(y){r=y},get _options(){return n},set _options(y){n={...n,...y}}},trigger:X,register:qc,handleSubmit:dg,watch:Vs,setValue:D,getValues:Ee,reset:pg,resetField:Z1,clearErrors:Ti,unregister:qt,setError:on,setFocus:(y,w={})=>{const I=M(i,y),U=I&&I._f;if(U){const O=U.refs?U.refs[0]:U.ref;O.focus&&(O.focus(),w.shouldSelect&&O.select())}},getFieldState:Pe}}function XL(t={}){const e=cn.useRef(),n=cn.useRef(),[r,i]=cn.useState({isDirty:!1,isValidating:!1,isLoading:lr(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:lr(t.defaultValues)?void 0:t.defaultValues});e.current||(e.current={...QL(t,()=>i(o=>({...o}))),formState:r});const s=e.current.control;return s._options=t,$L({subject:s._subjects.state,next:o=>{ML(o,s._proxyFormState,s._updateFormState,!0)&&i({...s._formState})}}),cn.useEffect(()=>{t.values&&!Gr(t.values,n.current)?(s._reset(t.values,s._options.resetOptions),n.current=t.values):s._resetDefaultValues()},[t.values,s]),cn.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),e.current.formState=LL(r,s),e.current}function Ei(t){this._maxSize=t,this.clear()}Ei.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Ei.prototype.get=function(t){return this._values[t]};Ei.prototype.set=function(t,e){return this._size>=this._maxSize&&this.clear(),t in this._values||this._size++,this._values[t]=e};var YL=/[^.^\]^[]+|(?=\[\]|\.\.)/g,z1=/^\d+$/,JL=/^\d/,ZL=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,eM=/^\s*(['"]?)(.*?)(\1)\s*$/,og=512,Rv=new Ei(og),kv=new Ei(og),Pv=new Ei(og),Zr={Cache:Ei,split:Ff,normalizePath:td,setter:function(t){var e=td(t);return kv.get(t)||kv.set(t,function(r,i){for(var s=0,o=e.length,a=r;s<o-1;){var l=e[s];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;a=a[e[s++]]}a[e[s]]=i})},getter:function(t,e){var n=td(t);return Pv.get(t)||Pv.set(t,function(i){for(var s=0,o=n.length;s<o;)if(i!=null||!e)i=i[n[s++]];else return;return i})},join:function(t){return t.reduce(function(e,n){return e+(ag(n)||z1.test(n)?"["+n+"]":(e?".":"")+n)},"")},forEach:function(t,e,n){tM(Array.isArray(t)?t:Ff(t),e,n)}};function td(t){return Rv.get(t)||Rv.set(t,Ff(t).map(function(e){return e.replace(eM,"$2")}))}function Ff(t){return t.match(YL)||[""]}function tM(t,e,n){var r=t.length,i,s,o,a;for(s=0;s<r;s++)i=t[s],i&&(iM(i)&&(i='"'+i+'"'),a=ag(i),o=!a&&/^\d+$/.test(i),e.call(n,i,a,o,s,t))}function ag(t){return typeof t=="string"&&t&&["'",'"'].indexOf(t.charAt(0))!==-1}function nM(t){return t.match(JL)&&!t.match(z1)}function rM(t){return ZL.test(t)}function iM(t){return!ag(t)&&(nM(t)||rM(t))}const sM=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,zc=t=>t.match(sM)||[],Hc=t=>t[0].toUpperCase()+t.slice(1),lg=(t,e)=>zc(t).join(e).toLowerCase(),H1=t=>zc(t).reduce((e,n)=>`${e}${e?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),oM=t=>Hc(H1(t)),aM=t=>lg(t,"_"),lM=t=>lg(t,"-"),uM=t=>Hc(lg(t," ")),cM=t=>zc(t).map(Hc).join(" ");var nd={words:zc,upperFirst:Hc,camelCase:H1,pascalCase:oM,snakeCase:aM,kebabCase:lM,sentenceCase:uM,titleCase:cM},ug={exports:{}};ug.exports=function(t){return W1(hM(t),t)};ug.exports.array=W1;function W1(t,e){var n=t.length,r=new Array(n),i={},s=n,o=dM(e),a=fM(t);for(e.forEach(function(u){if(!a.has(u[0])||!a.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});s--;)i[s]||l(t[s],s,new Set);return r;function l(u,c,h){if(h.has(u)){var d;try{d=", node was:"+JSON.stringify(u)}catch{d=""}throw new Error("Cyclic dependency"+d)}if(!a.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!i[c]){i[c]=!0;var m=o.get(u)||new Set;if(m=Array.from(m),c=m.length){h.add(u);do{var _=m[--c];l(_,a.get(_),h)}while(c);h.delete(u)}r[--n]=u}}}function hM(t){for(var e=new Set,n=0,r=t.length;n<r;n++){var i=t[n];e.add(i[0]),e.add(i[1])}return Array.from(e)}function dM(t){for(var e=new Map,n=0,r=t.length;n<r;n++){var i=t[n];e.has(i[0])||e.set(i[0],new Set),e.has(i[1])||e.set(i[1],new Set),e.get(i[0]).add(i[1])}return e}function fM(t){for(var e=new Map,n=0,r=t.length;n<r;n++)e.set(t[n],n);return e}var pM=ug.exports;const mM=bv(pM),gM=Object.prototype.toString,yM=Error.prototype.toString,_M=RegExp.prototype.toString,vM=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",EM=/^Symbol\((.*)\)(.*)$/;function wM(t){return t!=+t?"NaN":t===0&&1/t<0?"-0":""+t}function Nv(t,e=!1){if(t==null||t===!0||t===!1)return""+t;const n=typeof t;if(n==="number")return wM(t);if(n==="string")return e?`"${t}"`:t;if(n==="function")return"[Function "+(t.name||"anonymous")+"]";if(n==="symbol")return vM.call(t).replace(EM,"Symbol($1)");const r=gM.call(t).slice(8,-1);return r==="Date"?isNaN(t.getTime())?""+t:t.toISOString(t):r==="Error"||t instanceof Error?"["+yM.call(t)+"]":r==="RegExp"?_M.call(t):null}function Sr(t,e){let n=Nv(t,e);return n!==null?n:JSON.stringify(t,function(r,i){let s=Nv(this[r],e);return s!==null?s:i},2)}function q1(t){return t==null?[]:[].concat(t)}let K1,TM=/\$\{\s*(\w+)\s*\}/g;K1=Symbol.toStringTag;class It extends Error{static formatError(e,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof e=="string"?e.replace(TM,(i,s)=>Sr(n[s])):typeof e=="function"?e(n):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,n,r,i,s){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this[K1]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],q1(e).forEach(o=>{if(It.isError(o)){this.errors.push(...o.errors);const a=o.inner.length?o.inner:[o];this.inner.push(...a)}else this.errors.push(o)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],!s&&Error.captureStackTrace&&Error.captureStackTrace(this,It)}}let un={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:t,type:e,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${Sr(r,!0)}\`).`:".";return e!=="mixed"?`${t} must be a \`${e}\` type, but the final value was: \`${Sr(n,!0)}\``+i:`${t} must match the configured type. The validated value was: \`${Sr(n,!0)}\``+i}},Gt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},IM={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},Uf={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},SM={isValue:"${path} field must be ${value}"},jf={noUnknown:"${path} field has unspecified keys: ${unknown}"},AM={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},CM={notType:t=>{const{path:e,value:n,spec:r}=t,i=r.types.length;if(Array.isArray(n)){if(n.length<i)return`${e} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${Sr(n,!0)}\``;if(n.length>i)return`${e} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${Sr(n,!0)}\``}return It.formatError(un.notType,t)}};Object.assign(Object.create(null),{mixed:un,string:Gt,number:IM,date:Uf,object:jf,array:AM,boolean:SM,tuple:CM});const cg=t=>t&&t.__isYupSchema__;class Hu{static fromOptions(e,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:s}=n,o=typeof r=="function"?r:(...a)=>a.every(l=>l===r);return new Hu(e,(a,l)=>{var u;let c=o(...a)?i:s;return(u=c==null?void 0:c(l))!=null?u:l})}constructor(e,n){this.fn=void 0,this.refs=e,this.refs=e,this.fn=n}resolve(e,n){let r=this.refs.map(s=>s.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,e,n);if(i===void 0||i===e)return e;if(!cg(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const fl={context:"$",value:"."};class wi{constructor(e,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===fl.context,this.isValue=this.key[0]===fl.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?fl.context:this.isValue?fl.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&Zr.getter(this.path,!0),this.map=n.map}getValue(e,n,r){let i=this.isContext?r:this.isValue?e:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(e,n){return this.getValue(e,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}wi.prototype.__isYupRef=!0;const Qr=t=>t==null;function Ri(t){function e({value:n,path:r="",options:i,originalValue:s,schema:o},a,l){const{name:u,test:c,params:h,message:d,skipAbsent:m}=t;let{parent:_,context:v,abortEarly:T=o.spec.abortEarly,disableStackTrace:p=o.spec.disableStackTrace}=i;function f(ee){return wi.isRef(ee)?ee.getValue(n,_,v):ee}function g(ee={}){var te;const q=Object.assign({value:n,originalValue:s,label:o.spec.label,path:ee.path||r,spec:o.spec},h,ee.params);for(const $e of Object.keys(q))q[$e]=f(q[$e]);const he=new It(It.formatError(ee.message||d,q),n,q.path,ee.type||u,(te=ee.disableStackTrace)!=null?te:p);return he.params=q,he}const E=T?a:l;let A={path:r,parent:_,type:u,from:i.from,createError:g,resolve:f,options:i,originalValue:s,schema:o};const P=ee=>{It.isError(ee)?E(ee):ee?l(null):E(g())},N=ee=>{It.isError(ee)?E(ee):a(ee)};if(m&&Qr(n))return P(!0);let W;try{var B;if(W=c.call(A,n,A),typeof((B=W)==null?void 0:B.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${A.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(W).then(P,N)}}catch(ee){N(ee);return}P(W)}return e.OPTIONS=t,e}function RM(t,e,n,r=n){let i,s,o;return e?(Zr.forEach(e,(a,l,u)=>{let c=l?a.slice(1,a.length-1):a;t=t.resolve({context:r,parent:i,value:n});let h=t.type==="tuple",d=u?parseInt(c,10):0;if(t.innerType||h){if(h&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(n&&d>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${e}. because there is no value at that index. `);i=n,n=n&&n[d],t=h?t.spec.types[d]:t.innerType}if(!u){if(!t.fields||!t.fields[c])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${t.type}")`);i=n,n=n&&n[c],t=t.fields[c]}s=c,o=l?"["+a+"]":"."+a}),{schema:t,parent:i,parentPath:s}):{parent:i,parentPath:e,schema:t}}class Wu extends Set{describe(){const e=[];for(const n of this.values())e.push(wi.isRef(n)?n.describe():n);return e}resolveAll(e){let n=[];for(const r of this.values())n.push(e(r));return n}clone(){return new Wu(this.values())}merge(e,n){const r=this.clone();return e.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function qi(t,e=new Map){if(cg(t)||!t||typeof t!="object")return t;if(e.has(t))return e.get(t);let n;if(t instanceof Date)n=new Date(t.getTime()),e.set(t,n);else if(t instanceof RegExp)n=new RegExp(t),e.set(t,n);else if(Array.isArray(t)){n=new Array(t.length),e.set(t,n);for(let r=0;r<t.length;r++)n[r]=qi(t[r],e)}else if(t instanceof Map){n=new Map,e.set(t,n);for(const[r,i]of t.entries())n.set(r,qi(i,e))}else if(t instanceof Set){n=new Set,e.set(t,n);for(const r of t)n.add(qi(r,e))}else if(t instanceof Object){n={},e.set(t,n);for(const[r,i]of Object.entries(t))n[r]=qi(i,e)}else throw Error(`Unable to clone ${t}`);return n}class Cn{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Wu,this._blacklist=new Wu,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(un.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=qi(Object.assign({},this.spec,e)),n}label(e){let n=this.clone();return n.spec.label=e,n}meta(...e){if(e.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},e[0]),n}withMutation(e){let n=this._mutate;this._mutate=!0;let r=e(this);return this._mutate=n,r}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let n=this,r=e.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(e._whitelist,e._blacklist),r._blacklist=n._blacklist.merge(e._blacklist,e._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(s=>{e.tests.forEach(o=>{s.test(o.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,s)=>s.resolve(i,e),n),n=n.resolve(e)}return n}resolveOptions(e){var n,r,i,s;return Object.assign({},e,{from:e.from||[],strict:(n=e.strict)!=null?n:this.spec.strict,abortEarly:(r=e.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=e.recursive)!=null?i:this.spec.recursive,disableStackTrace:(s=e.disableStackTrace)!=null?s:this.spec.disableStackTrace})}cast(e,n={}){let r=this.resolve(Object.assign({value:e},n)),i=n.assert==="ignore-optionality",s=r._cast(e,n);if(n.assert!==!1&&!r.isType(s)){if(i&&Qr(s))return s;let o=Sr(e),a=Sr(s);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
`+(a!==o?`result of cast: ${a}`:""))}return s}_cast(e,n){let r=e===void 0?e:this.transforms.reduce((i,s)=>s.call(this,i,e,this),e);return r===void 0&&(r=this.getDefault(n)),r}_validate(e,n={},r,i){let{path:s,originalValue:o=e,strict:a=this.spec.strict}=n,l=e;a||(l=this._cast(l,Object.assign({assert:!1},n)));let u=[];for(let c of Object.values(this.internalTests))c&&u.push(c);this.runTests({path:s,value:l,originalValue:o,options:n,tests:u},r,c=>{if(c.length)return i(c,l);this.runTests({path:s,value:l,originalValue:o,options:n,tests:this.tests},r,i)})}runTests(e,n,r){let i=!1,{tests:s,value:o,originalValue:a,path:l,options:u}=e,c=v=>{i||(i=!0,n(v,o))},h=v=>{i||(i=!0,r(v,o))},d=s.length,m=[];if(!d)return h([]);let _={value:o,originalValue:a,path:l,options:u,schema:this};for(let v=0;v<s.length;v++){const T=s[v];T(_,c,function(f){f&&(Array.isArray(f)?m.push(...f):m.push(f)),--d<=0&&h(m)})}}asNestedTest({key:e,index:n,parent:r,parentPath:i,originalParent:s,options:o}){const a=e??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let u=r[a];const c=Object.assign({},o,{strict:!0,parent:r,value:u,originalValue:s[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${i||""}[${u?a:`"${a}"`}]`:(i?`${i}.`:"")+e});return(h,d,m)=>this.resolve(c)._validate(u,c,d,m)}validate(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((o,a)=>i._validate(e,n,(l,u)=>{It.isError(l)&&(l.value=u),a(l)},(l,u)=>{l.length?a(new It(l,u,void 0,void 0,s)):o(u)}))}validateSync(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s,o=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(e,Object.assign({},n,{sync:!0}),(a,l)=>{throw It.isError(a)&&(a.value=l),a},(a,l)=>{if(a.length)throw new It(a,e,void 0,void 0,o);s=l}),s}isValid(e,n){return this.validate(e,n).then(()=>!0,r=>{if(It.isError(r))return!1;throw r})}isValidSync(e,n){try{return this.validateSync(e,n),!0}catch(r){if(It.isError(r))return!1;throw r}}_getDefault(e){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,e):qi(n)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,n){const r=this.clone({nullable:e});return r.internalTests.nullable=Ri({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(e,n){const r=this.clone({optional:e});return r.internalTests.optionality=Ri({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(e=un.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=un.notNull){return this.nullability(!1,e)}required(e=un.required){return this.clone().withMutation(n=>n.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let n=this.clone();return n.transforms.push(e),n}test(...e){let n;if(e.length===1?typeof e[0]=="function"?n={test:e[0]}:n=e[0]:e.length===2?n={name:e[0],test:e[1]}:n={name:e[0],message:e[1],test:e[2]},n.message===void 0&&(n.message=un.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=Ri(n),s=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(o=>!(o.OPTIONS.name===n.name&&(s||o.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(e,n){!Array.isArray(e)&&typeof e!="string"&&(n=e,e=".");let r=this.clone(),i=q1(e).map(s=>new wi(s));return i.forEach(s=>{s.isSibling&&r.deps.push(s.key)}),r.conditions.push(typeof n=="function"?new Hu(i,n):Hu.fromOptions(i,n)),r}typeError(e){let n=this.clone();return n.internalTests.typeError=Ri({message:e,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(e,n=un.oneOf){let r=this.clone();return e.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=Ri({message:n,name:"oneOf",skipAbsent:!0,test(i){let s=this.schema._whitelist,o=s.resolveAll(this.resolve);return o.includes(i)?!0:this.createError({params:{values:Array.from(s).join(", "),resolved:o}})}}),r}notOneOf(e,n=un.notOneOf){let r=this.clone();return e.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=Ri({message:n,name:"notOneOf",test(i){let s=this.schema._blacklist,o=s.resolveAll(this.resolve);return o.includes(i)?this.createError({params:{values:Array.from(s).join(", "),resolved:o}}):!0}}),r}strip(e=!0){let n=this.clone();return n.spec.strip=e,n}describe(e){const n=(e?this.resolve(e):this).clone(),{label:r,meta:i,optional:s,nullable:o}=n.spec;return{meta:i,label:r,optional:s,nullable:o,default:n.getDefault(e),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,u,c)=>c.findIndex(h=>h.name===l.name)===u)}}}Cn.prototype.__isYupSchema__=!0;for(const t of["validate","validateSync"])Cn.prototype[`${t}At`]=function(e,n,r={}){const{parent:i,parentPath:s,schema:o}=RM(this,e,n,r.context);return o[t](i&&i[s],Object.assign({},r,{parent:i,path:e}))};for(const t of["equals","is"])Cn.prototype[t]=Cn.prototype.oneOf;for(const t of["not","nope"])Cn.prototype[t]=Cn.prototype.notOneOf;let kM=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,PM=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,NM=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,xM=t=>Qr(t)||t===t.trim(),DM={}.toString();function Bf(){return new G1}class G1 extends Cn{constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,n,r)=>{if(!r.spec.coerce||r.isType(e)||Array.isArray(e))return e;const i=e!=null&&e.toString?e.toString():e;return i===DM?e:i})})}required(e){return super.required(e).withMutation(n=>n.test({message:e||un.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(n=>n.OPTIONS.name!=="required"),e))}length(e,n=Gt.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(r){return r.length===this.resolve(e)}})}min(e,n=Gt.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(r){return r.length>=this.resolve(e)}})}max(e,n=Gt.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:e},skipAbsent:!0,test(r){return r.length<=this.resolve(e)}})}matches(e,n){let r=!1,i,s;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:s}=n:i=n),this.test({name:s||"matches",message:i||Gt.matches,params:{regex:e},skipAbsent:!0,test:o=>o===""&&r||o.search(e)!==-1})}email(e=Gt.email){return this.matches(kM,{name:"email",message:e,excludeEmptyString:!0})}url(e=Gt.url){return this.matches(PM,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=Gt.uuid){return this.matches(NM,{name:"uuid",message:e,excludeEmptyString:!1})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=Gt.trim){return this.transform(n=>n!=null?n.trim():n).test({message:e,name:"trim",test:xM})}lowercase(e=Gt.lowercase){return this.transform(n=>Qr(n)?n:n.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Qr(n)||n===n.toLowerCase()})}uppercase(e=Gt.uppercase){return this.transform(n=>Qr(n)?n:n.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Qr(n)||n===n.toUpperCase()})}}Bf.prototype=G1.prototype;const OM=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function kn(t,e=0){return Number(t)||e}function bM(t){const e=OM.exec(t);if(!e)return Date.parse?Date.parse(t):Number.NaN;const n={year:kn(e[1]),month:kn(e[2],1)-1,day:kn(e[3],1),hour:kn(e[4]),minute:kn(e[5]),second:kn(e[6]),millisecond:e[7]?kn(e[7].substring(0,3)):0,z:e[8]||void 0,plusMinus:e[9]||void 0,hourOffset:kn(e[10]),minuteOffset:kn(e[11])};if(n.z===void 0&&n.plusMinus===void 0)return new Date(n.year,n.month,n.day,n.hour,n.minute,n.second,n.millisecond).valueOf();let r=0;return n.z!=="Z"&&n.plusMinus!==void 0&&(r=n.hourOffset*60+n.minuteOffset,n.plusMinus==="+"&&(r=0-r)),Date.UTC(n.year,n.month,n.day,n.hour,n.minute+r,n.second,n.millisecond)}let VM=new Date(""),LM=t=>Object.prototype.toString.call(t)==="[object Date]";class Wc extends Cn{constructor(){super({type:"date",check(e){return LM(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,n,r)=>!r.spec.coerce||r.isType(e)||e===null?e:(e=bM(e),isNaN(e)?Wc.INVALID_DATE:new Date(e)))})}prepareParam(e,n){let r;if(wi.isRef(e))r=e;else{let i=this.cast(e);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(e,n=Uf.min){let r=this.prepareParam(e,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(e,n=Uf.max){let r=this.prepareParam(e,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}Wc.INVALID_DATE=VM;Wc.prototype;function MM(t,e=[]){let n=[],r=new Set,i=new Set(e.map(([o,a])=>`${o}-${a}`));function s(o,a){let l=Zr.split(o)[0];r.add(l),i.has(`${a}-${l}`)||n.push([a,l])}for(const o of Object.keys(t)){let a=t[o];r.add(o),wi.isRef(a)&&a.isSibling?s(a.path,o):cg(a)&&"deps"in a&&a.deps.forEach(l=>s(l,o))}return mM.array(Array.from(r),n).reverse()}function xv(t,e){let n=1/0;return t.some((r,i)=>{var s;if((s=e.path)!=null&&s.includes(r))return n=i,!0}),n}function Q1(t){return(e,n)=>xv(t,e)-xv(t,n)}const $M=(t,e,n)=>{if(typeof t!="string")return t;let r=t;try{r=JSON.parse(t)}catch{}return n.isType(r)?r:t};function Fl(t){if("fields"in t){const e={};for(const[n,r]of Object.entries(t.fields))e[n]=Fl(r);return t.setFields(e)}if(t.type==="array"){const e=t.optional();return e.innerType&&(e.innerType=Fl(e.innerType)),e}return t.type==="tuple"?t.optional().clone({types:t.spec.types.map(Fl)}):"optional"in t?t.optional():t}const FM=(t,e)=>{const n=[...Zr.normalizePath(e)];if(n.length===1)return n[0]in t;let r=n.pop(),i=Zr.getter(Zr.join(n),!0)(t);return!!(i&&r in i)};let Dv=t=>Object.prototype.toString.call(t)==="[object Object]";function UM(t,e){let n=Object.keys(t.fields);return Object.keys(e).filter(r=>n.indexOf(r)===-1)}const jM=Q1([]);function X1(t){return new Y1(t)}class Y1 extends Cn{constructor(e){super({type:"object",check(n){return Dv(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=jM,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,n={}){var r;let i=super._cast(e,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let s=this.fields,o=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(i).filter(h=>!this._nodes.includes(h))),l={},u=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),c=!1;for(const h of a){let d=s[h],m=h in i;if(d){let _,v=i[h];u.path=(n.path?`${n.path}.`:"")+h,d=d.resolve({value:v,context:n.context,parent:l});let T=d instanceof Cn?d.spec:void 0,p=T==null?void 0:T.strict;if(T!=null&&T.strip){c=c||h in i;continue}_=!n.__validating||!p?d.cast(i[h],u):i[h],_!==void 0&&(l[h]=_)}else m&&!o&&(l[h]=i[h]);(m!==h in l||l[h]!==i[h])&&(c=!0)}return c?l:i}_validate(e,n={},r,i){let{from:s=[],originalValue:o=e,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:o},...s],n.__validating=!0,n.originalValue=o,super._validate(e,n,r,(l,u)=>{if(!a||!Dv(u)){i(l,u);return}o=o||u;let c=[];for(let h of this._nodes){let d=this.fields[h];!d||wi.isRef(d)||c.push(d.asNestedTest({options:n,key:h,parent:u,parentPath:n.path,originalParent:o}))}this.runTests({tests:c,value:u,originalValue:o,options:n},r,h=>{i(h.sort(this._sortErrors).concat(l),u)})})}clone(e){const n=super.clone(e);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(e){let n=super.concat(e),r=n.fields;for(let[i,s]of Object.entries(this.fields)){const o=r[i];r[i]=o===void 0?s:o}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const s=this.fields[r];let o=e;(i=o)!=null&&i.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[r]})),n[r]=s&&"getDefault"in s?s.getDefault(o):void 0}),n}setFields(e,n){let r=this.clone();return r.fields=e,r._nodes=MM(e,n),r._sortErrors=Q1(Object.keys(e)),n&&(r._excludedEdges=n),r}shape(e,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,e),i)})}partial(){const e={};for(const[n,r]of Object.entries(this.fields))e[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(e)}deepPartial(){return Fl(this)}pick(e){const n={};for(const r of e)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,i])=>e.includes(r)&&e.includes(i)))}omit(e){const n=[];for(const r of Object.keys(this.fields))e.includes(r)||n.push(r);return this.pick(n)}from(e,n,r){let i=Zr.getter(e,!0);return this.transform(s=>{if(!s)return s;let o=s;return FM(s,e)&&(o=Object.assign({},s),r||delete o[e],o[n]=i(s)),o})}json(){return this.transform($M)}noUnknown(e=!0,n=jf.noUnknown){typeof e!="boolean"&&(n=e,e=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const s=UM(this.schema,i);return!e||s.length===0||this.createError({params:{unknown:s.join(", ")}})}});return r.spec.noUnknown=e,r}unknown(e=!0,n=jf.noUnknown){return this.noUnknown(!e,n)}transformKeys(e){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[e(i)]=n[i];return r})}camelCase(){return this.transformKeys(nd.camelCase)}snakeCase(){return this.transformKeys(nd.snakeCase)}constantCase(){return this.transformKeys(e=>nd.snakeCase(e).toUpperCase())}describe(e){const n=(e?this.resolve(e):this).clone(),r=super.describe(e);r.fields={};for(const[s,o]of Object.entries(n.fields)){var i;let a=e;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[s]})),r.fields[s]=o.describe(a)}return r}}X1.prototype=Y1.prototype;var Ov=function(t,e,n){if(t&&"reportValidity"in t){var r=M(n,e);t.setCustomValidity(r&&r.message||""),t.reportValidity()}},J1=function(t,e){var n=function(i){var s=e.fields[i];s&&s.ref&&"reportValidity"in s.ref?Ov(s.ref,i,t):s.refs&&s.refs.forEach(function(o){return Ov(o,i,t)})};for(var r in e.fields)n(r)},BM=function(t,e){e.shouldUseNativeValidation&&J1(t,e);var n={};for(var r in t){var i=M(e.fields,r),s=Object.assign(t[r]||{},{ref:i&&i.ref});if(HM(e.names||Object.keys(t),r)){var o=Object.assign({},zM(M(n,r)));de(o,"root",s),de(n,r,o)}else de(n,r,s)}return n},zM=function(t){return Array.isArray(t)?t.filter(Boolean):[]},HM=function(t,e){return t.some(function(n){return n.startsWith(e+".")})};function WM(t,e,n){return e===void 0&&(e={}),n===void 0&&(n={}),function(r,i,s){try{return Promise.resolve(function(o,a){try{var l=(e.context,Promise.resolve(t[n.mode==="sync"?"validateSync":"validate"](r,Object.assign({abortEarly:!1},e,{context:i}))).then(function(u){return s.shouldUseNativeValidation&&J1({},s),{values:n.raw?r:u,errors:{}}}))}catch(u){return a(u)}return l&&l.then?l.then(void 0,a):l}(0,function(o){if(!o.inner)throw o;return{values:{},errors:BM((a=o,l=!s.shouldUseNativeValidation&&s.criteriaMode==="all",(a.inner||[]).reduce(function(u,c){if(u[c.path]||(u[c.path]={message:c.message,type:c.type}),l){var h=u[c.path].types,d=h&&h[c.type];u[c.path]=L1(c.path,l,u,c.type,d?[].concat(d,c.message):c.message)}return u},{})),s)};var a,l}))}catch(o){return Promise.reject(o)}}}const qM=()=>{var l,u;const[t]=tg(na),e=Up(),n=X1().shape({title:Bf().required("You must add a title!"),description:Bf().required("You must add a description!")}),{register:r,handleSubmit:i,formState:{errors:s}}=XL({resolver:WM(n)}),o=bm(Lu,"posts"),a=async c=>{await DI(o,{title:c.title,description:c.description,username:t==null?void 0:t.displayName,userId:t==null?void 0:t.uid}),e("/")};return H.jsxs("form",{onSubmit:i(a),children:[H.jsx("input",{placeholder:"Title...",...r("title")}),H.jsxs("p",{style:{color:"red"},children:[" ",(l=s.title)==null?void 0:l.message]}),H.jsx("textarea",{placeholder:"Description...",...r("description")}),H.jsxs("p",{style:{color:"red"},children:[" ",(u=s.description)==null?void 0:u.message]}),H.jsx("input",{type:"submit",className:"submitForm"})]})},KM=()=>H.jsx("div",{className:"create-post",children:H.jsx(qM,{})});function GM(){return H.jsx("div",{className:"App",children:H.jsxs(IR,{children:[H.jsx(xL,{}),H.jsxs(yR,{children:[H.jsx(Cl,{path:"/",element:H.jsx(PL,{})}),H.jsx(Cl,{path:"/login",element:H.jsx(NL,{})}),H.jsx(Cl,{path:"/createpost",element:H.jsx(KM,{})})]})]})})}rd.createRoot(document.getElementById("root")).render(H.jsx(cn.StrictMode,{children:H.jsx(GM,{})}));
