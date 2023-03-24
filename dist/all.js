var kongUtil;(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{$:()=>J,$$:()=>W,addTimeLimit:()=>L,alerter:()=>S,base64ToBlob:()=>B,camelize:()=>C,canvasTo:()=>ue,clearElement:()=>Y,compareVersionNumbers:()=>M,createElement:()=>X,createElementFromJsonML:()=>K,default:()=>me,downloadURL:()=>Q,emulateArray:()=>de,everyAsync:()=>o,extendArrayPrototype:()=>w,extendElementPrototype:()=>Z,extendEventTargetPrototype:()=>T,extendPrototype:()=>ye,fetchCSV:()=>oe,fetchDOM:()=>ie,fetchJSON:()=>ne,fetchStrict:()=>te,fetchText:()=>re,filterAsync:()=>s,findAsync:()=>a,findIndexAsync:()=>c,findLastAsync:()=>u,findLastIndexAsync:()=>l,forEachAsync:()=>f,getNodes:()=>z,isEventInElement:()=>G,listen:()=>E,logger:()=>k,mapAsync:()=>d,mapToObject:()=>y,objectReduce:()=>he,objectReduceAsync:()=>pe,parseCSV:()=>$,parseChineseNumber:()=>F,parseHTML:()=>q,promisify:()=>O,readFile:()=>se,readImage:()=>ce,reduceAsync:()=>h,reduceRightAsync:()=>p,resizeImage:()=>le,someAsync:()=>g,toCSV:()=>D,unlisten:()=>v,use:()=>r,wait:()=>x,waitFor:()=>P,waitForEvent:()=>A});const n={version:"0.7.2"},r=function(...e){e[0]instanceof Array&&(e=e[0]);for(let t in this)"use"!==t&&(e.length&&!e.includes(t)||(globalThis[t]=this[t]))}.bind(n);Object.assign(n,{use:r});const i=n;async function o(e,t=this){return(await d(e,t)).every((e=>e))}async function s(e,t=this){const n=[];for(let r=0;r<t.length;++r)await e(t[r],r,t)&&n.push(t[r]);return n}async function a(e,t=this,n){for(let r=0;r<t.length;++r)if(await e(t[r],r,t))return n?r:t[r];return n?-1:void 0}function c(e,t){return a(e,t,!0)}async function u(e,t=this,n){for(let r=t.length-1;r>=0;--r)if(await e(t[r],r,t))return n?r:t[r];return n?-1:void 0}function l(e,t){return u(e,t,!0)}async function f(e,t=this){return d(e,t,!0)}async function d(e,t=this,n){const r=n?void 0:[];for(let n=0;n<t.length;++n)r?.push(await e(t[n],n,t));return r}async function h(e,t,n=this){let r=t,i=0;if(void 0===t){if(!n.length)throw new TypeError("Reduce of empty array with no initial value");r=n[0],i=1}for(let t=i;t<n.length;++t)r=await e(r,n[t],t,n);return r}async function p(e,t,n=this){let r=t,i=n.length-1;if(void 0===t){if(!n.length)throw new TypeError("Reduce of empty array with no initial value");r=n[i],--i}for(let t=i;t>=0;--t)r=await e(r,n[t],t,n);return r}function g(e,t){return c(e,t).then((e=>-1!==e))}function y(e,t=this){const n={};return t.forEach(((r,i)=>n[r]=e(r,i,t))),n}const m={everyAsync:o,filterAsync:s,findAsync:a,findIndexAsync:c,findLastAsync:u,findLastIndexAsync:l,forEachAsync:f,mapAsync:d,reduceAsync:h,reduceRightAsync:p,someAsync:g,mapToObject:y},w=()=>Object.assign(Array.prototype,m);Object.assign(i,m,{extendArrayPrototype:w});const b=i;function E(e,...t){e.addEventListener(...t)}function v(e,...t){e.removeEventListener(...t)}function A(e,t,n){let r;switch(typeof n){case"undefined":r=0,n={};break;case"number":r=n,n={};break;case"string":r=parseInt(n),n={};break;case"boolean":r=0,n={capture:n};break;case"object":r=n.timeout;break;default:throw TypeError()}return n.once=!0,new Promise(((i,o)=>{const s=e=>{n.preventDefault&&e.preventDefault(),n.stopPropagation&&e.stopPropagation(),n.stopImmediatePropagation&&e.stopImmediatePropagation(),i()};E(e,t,s,n),r>0&&setTimeout((()=>{v(e,s,n);const t=new Event("abort");e.dispatchEvent(t),o(t)}),r)}))}const T=()=>Object.assign(EventTarget.prototype,{listen:EventTarget.prototype.addEventListener,unlisten:EventTarget.prototype.removeEventListener,waitFor:function(...e){return A(this,...e)}});Object.assign(i,{listen:E,waitForEvent:A,extendEventTargetPrototype:T});const j=i;function O(e,t=!1){return(...n)=>new Promise(((r,i)=>e(...n,((e,...n)=>{if(e)return i(e);r(t?n:n[0])}))))}function x(e,t){return new Promise((n=>setTimeout(n,e,t)))}function P(e,t){let n;if(e instanceof Promise)n=t=>e.then(t);else{if(!(e instanceof Function)){if(e instanceof EventTarget)return A(...arguments);const{target:n,type:r,...i}=e;return i.timeout=t,A(n,r,i)}n=t=>e(t)}if(n)return new Promise(((e,r)=>{setTimeout(n,0,e),t>0&&setTimeout(r,t,new Event("abort"))}))}function L(e,t){return function(...n){return P(e(...n),t)}}Object.assign(i,{promisify:O,wait:x,waitFor:P,addTimeLimit:L});const I=i;function S(e){return()=>(alert(e),e)}function k(){return(...e)=>(console.debug(...arguments,...e),e.length<2?e[0]:e)}Object.assign(i,{alerter:S,logger:k});const N=i;function C(e){return e.replace(/-([a-z]\w+)/g,(e=>e[1].toUpperCase()+e.slice(2)))}function F(e,t=!1){let n="",r=e.toString().replaceAll(/\s/g,"").replace(/[點点奌]/,".");if("負负".includes(r.charAt(0))?n="-":r.startsWith("正")&&(n="+"),n&&(r=r.substring(1)),R.forEach(((e,t)=>{r=r.replaceAll(e,t.toString())})),/^\d+(\.\d+)?$/.test(r))r=n+r;else{let e=!1,t=!1,i=[],o=[],s=[],a=null;if(r.split("").forEach((n=>{if(t)return s.unshift(n);if("0123456789".includes(n))return a=n;const r=["十拾什","百佰","千仟"].findIndex((e=>e.includes(n)))+1;if(r)return o[r]=a??"1",a=null;const c=["萬万","億亿","兆","京經经","垓","秭杼","穰壤","溝沟","澗涧","正","載","極"].findIndex((e=>e.includes(n)))+1;if(c||"."===n){o[0]=a;for(let e=0;e<o.length;++e)i[e+4*c]=o[e];a=null}return c?o=[]:"."===n?t=!0:void(e=!0)})),e)return NaN;if(t)i.unshift(...s,".");else{o[0]=a;for(let e=0;e<o.length;++e)i[e]=o[e]}for(let e=0;e<i.length;++e)i[e]||(i[e]="0");r=n+i.reverse().join("")}return t?r:Number.isSafeInteger(parseInt(r))?parseFloat(r):r}const R=["０零○〇洞","１一壹ㄧ弌么","２二貳贰弍兩两","３三參叁弎参叄","４四肆䦉刀","５五伍","６六陸陆","７七柒拐","８八捌杯","９九玖勾"].map((e=>new RegExp(`[${e}]`,"g")));function M(e,t){[e,t]=[e,t].map((e=>e.split(".")));for(let n in e){if(void 0===t[n])return 1;const r=parseInt(e[n],10),i=parseInt(t[n],10);if(r>i)return 1;if(r<i)return-1}return e.length<t.length?-1:0}function D(e,t,n="\r\n"){return e.reduce(((e,r)=>e+t.map((e=>U(r[e]))).join(",")+n),t.map(U).join(",")+n)}function U(e){return/[\x0a\x0d\x22\x2c]/.test(e)?`"${e=e.replaceAll('"','""')}"`:e}function $(e,t=!0){let n=0,r=0,i=[];const o=[];e+="\n";for(let t=0;t<e.length;++t){const s=e.charAt(t);if('"'===s&&++n,!(n%2)&&["\n","\r",","].includes(s)){let n=e.substring(r,t);n.startsWith('"')&&(n=n.slice(1,-1)),n=n.replaceAll('""','"'),r=t+1,","===s?i.push(n):i.length&&(i.push(n),o.push(i),i=[])}}if(!t)return o;const s=o.shift();return o.map((e=>s.reduce(((t,n,r)=>Object.assign(t,{[n]:e[r]})),{})))}function B(e,t){"string"!=typeof t&&(t=e.substring(5,e.indexOf(";")),e=e.slice(t.length+13));const n=atob(e),r=new Uint8Array(n.length);for(let e=0;e<n.length;++e)r[e]=n.charCodeAt(e);return new Blob([r],{type:t})}Object.assign(i,{camelize:C,parseChineseNumber:F,compareVersionNumbers:M,toCSV:D,parseCSV:$,base64ToBlob:B});const V=i;function J(e,t=document){if(t?.querySelector||(t=document),"string"==typeof e)return t.querySelector(e);if(e instanceof Array)return e.map((e=>J(e,t)));const n={};for(let r in e)n[r]=J(e[r],t);return n}function W(e,t=document){if(t?.querySelectorAll||(t=document),"string"==typeof e)return[...t.querySelectorAll(e)];if(e instanceof Array)return e.map((e=>W(e,t)));const n={};for(let r in e)n[r]=W(e[r],t);return n}let _;function q(e,t="body > *"){if("undefined"==typeof DOMParser)throw ReferenceError("DOMParser is not defined");_||(_=new DOMParser);const n=_.parseFromString(e,"text/html");return"string"==typeof t?J(t,n):n}function z(e=(()=>!0),t=(()=>!1),n=document){if("function"!=typeof e&&"function"!=typeof t)return e instanceof Array&&(e=e.join(",")),t instanceof Array&&(t=t.join(",")),W(e,n).filter((e=>!W(t,n).includes(e)));e=H(e,n),t=H(t,n);const r={acceptNode:n=>t(n)?NodeFilter.FILTER_REJECT:e(n)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},i=document.createTreeWalker(n,NodeFilter.SHOW_ALL,r);let o,s=[];for(;o=i.nextNode();)s.push(o);return s}function H(e,t){if("function"==typeof e)return e;if("string"==typeof e){const n=W(e,t);return e=>n.includes(e)}if(e instanceof Array)return e=e.map((e=>e.toUpperCase())),t=>e.includes(t.tagName);throw new TypeError("selector shall be a function, a CSS selector string, or an array of strings representing HTML tags.")}function K(e,t){if("string"!=typeof t&&(t=null),"object"!=typeof e)return document.createTextNode(e);if(e instanceof Node)return e.cloneNode(!0);let[n,r,...i]=e;("object"!=typeof e[1]||e[1]instanceof Array)&&(r={},[n,...i]=e),"svg"===n&&(t="http://www.w3.org/2000/svg");const o=r.namespace??t,s=o?document.createElementNS(o,n):document.createElement(n);for(let e in r){const t=r[e];if(e.startsWith("on"))listen(s,e.substring(2).toLowerCase(),t);else switch(e){case"class":case"className":{const e="string"==typeof t?t.trim().split(/\s+/):t;e[0]&&s.classList.add(...e);break}case"css":case"style":if("string"==typeof t)s.style.cssText=t;else for(let e in t)s.style[C(e)]=t[e];break;case"data":case"dataset":for(let e in t)s.dataset[C(e)]=t[e];break;case"namespace":break;default:s.setAttribute(e,t)}}return s.append(...i.map((e=>K(e,o)))),s}function X(){console.error("`kongUtilDom.createElement()` has been removed. Use `kongUtilDom.createElementFromJsonML` instead.")}function Y(e=this){console.warn("`kongUtilDom.clearElement()` has been deprecated. Use `Element.replaceChildren()` instead."),e.replaceChildren()}function G(e,t=this){const{clientX:n,clientY:r}=e;return[...t.getClientRects()].some((e=>n>=e.left&&n<=e.right&&r>=e.top&&r<=e.bottom))}function Q(e,t){K(["a",{href:e,filename:t}]).click()}const Z=()=>Object.assign(Element.prototype,{clear:Y,hasEventIn:G});Object.assign(i,{$:J,$$:W,parseHTML:q,getNodes:z,createElementFromJsonML:K,clearElement:Y,isEventInElement:G,downloadURL:Q,extendElementPrototype:Z});const ee=i;async function te(...e){const t=await fetch(...e);if(t.ok)return t;throw new ReferenceError(t.statusText)}function ne(...e){return te(...e).then((e=>e.json()))}function re(...e){return te(...e).then((e=>e.text()))}function ie(...e){return re(...e).then((e=>q(e,0)))}function oe(...e){return re(...e).then((e=>$(e)))}function se(e,t){const n="readAs"+t.charAt(0).toUpperCase()+t.slice(1),r=new FileReader;return new Promise(((t,i)=>{r.addEventListener("load",(()=>t(r.result))),r.addEventListener("error",(()=>i(r.error))),r[n](e)}))}Object.assign(i,{fetchStrict:te,fetchJSON:ne,fetchText:re,fetchDOM:ie,fetchCSV:oe,readFile:se});const ae=i;async function ce(e,t){return e instanceof ImageBitmap?e:("string"==typeof e&&(e=/^https?:\/\//.test(e)?await te(e).then((e=>e.blob())):B(e,t)),await createImageBitmap(e))}async function ue(e,t,n,r){switch(t){case"canvas":return e;case"dataURL":return e.toDataURL(n,r);case"bitmap":return await createImageBitmap(e);case"blob":return new Promise(((t,i)=>{e.toBlob((e=>{if(e)return t(e);i("the image cannot be created")}),n,r)}));default:throw new TypeError("unknown returnType")}}async function le(e,t){let n=await ce(e),r=n.width,i=n.height;const o=n.width/n.height;if(t.scale>0)r=n.width*t.scale,i=n.height*t.scale;else if(!t.width||t.width<0)("scaleDown"!==t.fit||t.height<n.height)&&(r=t.height*o,i=t.height);else if(!t.height||t.height<0)("scaleDown"!==t.fit||t.width<n.width)&&(r=t.width,i=t.width/o);else switch(t.fit??"contain"){case"scaleDown":case"contain":if(t.width/t.height>o?(r=t.height*o,i=t.height):(r=t.width,i=t.width/o),"scaleDown"!==t.fit)break;(r>n.width||i>n.height)&&(r=n.width,i=n.height);break;case"cover":case"fill":{if(r=t.width,i=t.height,"fill"===t.fit)break;let e,s,a,c;const u=t.width/t.height;u>o?(a=n.width,c=a/u,e=0,s=(n.height-c)/2):(c=n.height,a=c*u,e=(n.width-a)/2,s=0),[e,s,a,c]=[e,s,a,c].map(Math.round),n=await createImageBitmap(n,e,s,a,c);break}default:throw new TypeError("unknown fit method",t.fit)}r=Math.round(r),i=Math.round(i);const s=document.createElement("canvas");s.width=r,s.height=i,s.getContext("2d").drawImage(n,0,0,r,i);let a=t.format??"png";return a.startsWith("image/")||(a=("image/"+a).toLowerCase()),ue(s,t.returnType??"canvas",a,t.quality)}Object.assign(i,{readImage:ce,canvasTo:ue,resizeImage:le});const fe=i;function de(e,t,n=this){return Object.keys(n)[e]((e=>t(n[e],e,n)))}function he(e,t,n=this){return Object.keys(n).reduce(((t,r)=>e(t,n[r],r,n)),t)}async function pe(e,t,n=this){return Object.keys(n).reduce((async(t,r)=>await e(t,n[r],r,n)),t)}Object.assign(i,{emulateArray:de,objectReduce:he,objectReduceAsync:pe});const ge=i,ye=()=>{b.extendArrayPrototype(),ee.extendElementPrototype(),j.extendEventTargetPrototype()};Object.assign(i,b,I,ee,N,j,fe,ge,V,ae,{extendPrototype:ye});const me=i;kongUtil=t})();