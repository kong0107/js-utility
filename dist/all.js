var kongUtil;(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{$:()=>W,$$:()=>_,addTimeLimit:()=>k,alerter:()=>F,base64ToBlob:()=>H,camelize:()=>M,canvasTo:()=>pe,clearElement:()=>ee,compareVersionNumbers:()=>q,createElement:()=>Z,createElementFromJsonML:()=>G,createElementFromTemplate:()=>Q,default:()=>Ae,downloadData:()=>re,downloadURL:()=>ne,emulateArray:()=>ye,everyAsync:()=>s,extendArrayPrototype:()=>b,extendElementPrototype:()=>oe,extendEventTargetPrototype:()=>O,extendPrototype:()=>ve,fetchCSV:()=>ue,fetchDOM:()=>le,fetchJSON:()=>ae,fetchStrict:()=>se,fetchText:()=>ce,filterAsync:()=>a,findAsync:()=>c,findIndexAsync:()=>l,findLastAsync:()=>u,findLastIndexAsync:()=>f,forEachAsync:()=>d,getNodes:()=>X,isEventInElement:()=>te,listen:()=>v,listens:()=>T,logger:()=>R,mapAsync:()=>h,mapToObject:()=>y,objectReduce:()=>we,objectReduceAsync:()=>be,parseCSV:()=>V,parseChineseNumber:()=>D,parseHTML:()=>K,promisify:()=>S,readFile:()=>fe,readImage:()=>he,reduceAsync:()=>p,reduceRightAsync:()=>m,resizeImage:()=>me,shuffle:()=>i,someAsync:()=>g,toCSV:()=>B,unlisten:()=>A,unlistens:()=>j,use:()=>r,wait:()=>P,waitFor:()=>I,waitForEvent:()=>L});const n={version:"0.7.8"},r=function(...e){e[0]instanceof Array&&(e=e[0]);for(let t in this)"use"!==t&&(e.length&&!e.includes(t)||(globalThis[t]=this[t]))}.bind(n);Object.assign(n,{use:r});const o=n;function i(e=this){for(let t=e.length-1;t>0;--t){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}async function s(e,t=this){return(await h(e,t)).every((e=>e))}async function a(e,t=this){const n=[];for(let r=0;r<t.length;++r)await e(t[r],r,t)&&n.push(t[r]);return n}async function c(e,t=this,n){for(let r=0;r<t.length;++r)if(await e(t[r],r,t))return n?r:t[r];return n?-1:void 0}function l(e,t){return c(e,t,!0)}async function u(e,t=this,n){for(let r=t.length-1;r>=0;--r)if(await e(t[r],r,t))return n?r:t[r];return n?-1:void 0}function f(e,t){return u(e,t,!0)}async function d(e,t=this){return h(e,t,!0)}async function h(e,t=this,n){const r=n?void 0:[];for(let n=0;n<t.length;++n){const o=await e(t[n],n,t);r?.push(o)}return r}async function p(e,t,n=this){let r=t,o=0;if(void 0===t){if(!n.length)throw new TypeError("Reduce of empty array with no initial value");r=n[0],o=1}for(let t=o;t<n.length;++t)r=await e(r,n[t],t,n);return r}async function m(e,t,n=this){let r=t,o=n.length-1;if(void 0===t){if(!n.length)throw new TypeError("Reduce of empty array with no initial value");r=n[o],--o}for(let t=o;t>=0;--t)r=await e(r,n[t],t,n);return r}function g(e,t){return l(e,t).then((e=>-1!==e))}function y(e,t=this){const n={};return t.forEach(((r,o)=>n[r]=e(r,o,t))),n}const w={shuffle:i,everyAsync:s,filterAsync:a,findAsync:c,findIndexAsync:l,findLastAsync:u,findLastIndexAsync:f,forEachAsync:d,mapAsync:h,reduceAsync:p,reduceRightAsync:m,someAsync:g,mapToObject:y},b=()=>Object.assign(Array.prototype,w);Object.assign(o,w,{extendArrayPrototype:b});const E=o;function v(e,...t){"string"==typeof e&&(e=document.querySelector(e)),e.addEventListener(...t)}function A(e,...t){"string"==typeof e&&(e=document.querySelector(e)),e.removeEventListener(...t)}function T(e,t,n,r){"string"==typeof e&&(e=document.querySelectorAll(e)),"string"==typeof t&&(t=t.split(",").map((e=>e.trim()))),"function"==typeof n&&(n=[n]),e.forEach((e=>{t.forEach((t=>{n.forEach((n=>{e.addEventListener(t,n,r)}))}))}))}function j(e,t,n,r){"string"==typeof e&&(e=document.querySelectorAll(e)),"string"==typeof t&&(t=t.split(",").map((e=>e.trim()))),"function"==typeof n&&(n=[n]),e.forEach((e=>{t.forEach((t=>{n.forEach((n=>{e.removeEventListener(t,n,r)}))}))}))}function L(e,t,n){let r;switch(typeof n){case"undefined":r=0,n={};break;case"number":r=n,n={};break;case"string":r=parseInt(n),n={};break;case"boolean":r=0,n={capture:n};break;case"object":r=n.timeout;break;default:throw TypeError("unknown `option` format")}return n.once=!0,new Promise(((o,i)=>{const s=e=>{n.preventDefault&&e.preventDefault(),n.stopPropagation&&e.stopPropagation(),n.stopImmediatePropagation&&e.stopImmediatePropagation(),o()};v(e,t,s,n),r>0&&setTimeout((()=>{A(e,s,n);const t=new Event("abort");e.dispatchEvent(t),i(t)}),r)}))}const O=()=>Object.assign(EventTarget.prototype,{listen:EventTarget.prototype.addEventListener,unlisten:EventTarget.prototype.removeEventListener,waitFor:function(...e){return L(this,...e)}});Object.assign(o,{listen:v,unlisten:A,listens:T,unlistens:j,waitForEvent:L,extendEventTargetPrototype:O});const x=o;function S(e,t=!1){return(...n)=>new Promise(((r,o)=>e(...n,((e,...n)=>{if(e)return o(e);r(t?n:n[0])}))))}function P(e,t){return new Promise((n=>setTimeout(n,e,t)))}function I(e,t){let n;if(e instanceof Promise)n=t=>e.then(t);else{if(!(e instanceof Function)){if(e instanceof EventTarget)return L(...arguments);const{target:n,type:r,...o}=e;return o.timeout=t,L(n,r,o)}n=t=>e(t)}if(n)return new Promise(((e,r)=>{setTimeout(n,0,e),t>0&&setTimeout(r,t,new Event("abort"))}))}function k(e,t){return function(...n){return I(e(...n),t)}}Object.assign(o,{promisify:S,wait:P,waitFor:I,addTimeLimit:k});const N=o;function F(e){return()=>(alert(e),e)}function R(){return(...e)=>(console.debug(...arguments,...e),e.length<2?e[0]:e)}Object.assign(o,{alerter:F,logger:R});const C=o;function M(e){return e.replace(/-([a-z]\w+)/g,(e=>e[1].toUpperCase()+e.slice(2)))}function D(e,t=!1){let n="",r=e.toString().replaceAll(/\s/g,"").replace(/[點点奌]/,".");if("負负".includes(r.charAt(0))?n="-":r.startsWith("正")&&(n="+"),n&&(r=r.substring(1)),U.forEach(((e,t)=>{r=r.replaceAll(e,t.toString())})),/^\d+(\.\d+)?$/.test(r))r=n+r;else{let e=!1,t=!1,o=[],i=[],s=[],a=null;if(r.split("").forEach((n=>{if(t)return s.unshift(n);if("0123456789".includes(n))return a=n;const r=["十拾什","百佰","千仟"].findIndex((e=>e.includes(n)))+1;if(r)return i[r]=a??"1",a=null;const c=["萬万","億亿","兆","京經经","垓","秭杼","穰壤","溝沟","澗涧","正","載","極"].findIndex((e=>e.includes(n)))+1;if(c||"."===n){i[0]=a;for(let e=0;e<i.length;++e)o[e+4*c]=i[e];a=null}return c?i=[]:"."===n?t=!0:void(e=!0)})),e)return NaN;if(t)o.unshift(...s,".");else{i[0]=a;for(let e=0;e<i.length;++e)o[e]=i[e]}for(let e=0;e<o.length;++e)o[e]||(o[e]="0");r=n+o.reverse().join("")}return t?r:Number.isSafeInteger(parseInt(r))?parseFloat(r):r}const U=["０零○〇洞","１一壹ㄧ弌么","２二貳贰弍兩两","３三參叁弎参叄","４四肆䦉刀","５五伍","６六陸陆","７七柒拐","８八捌杯","９九玖勾"].map((e=>new RegExp(`[${e}]`,"g")));function q(e,t){[e,t]=[e,t].map((e=>e.split(".")));for(let n in e){if(void 0===t[n])return 1;const r=parseInt(e[n],10),o=parseInt(t[n],10);if(r>o)return 1;if(r<o)return-1}return e.length<t.length?-1:0}function B(e,t,n="\r\n"){return e.reduce(((e,r)=>e+t.map((e=>$(r[e]))).join(",")+n),t.map($).join(",")+n)}function $(e){return/[\x0a\x0d\x22\x2c]/.test(e)?`"${e=e.replaceAll('"','""')}"`:e}function V(e,t=!0){let n=0,r=0,o=[];const i=[];e+="\n";for(let t=0;t<e.length;++t){const s=e.charAt(t);if('"'===s&&++n,!(n%2)&&["\n","\r",","].includes(s)){let n=e.substring(r,t);n.startsWith('"')&&(n=n.slice(1,-1)),n=n.replaceAll('""','"'),r=t+1,","===s?o.push(n):o.length&&(o.push(n),i.push(o),o=[])}}if(!t)return i;const s=i.shift();return i.map((e=>s.reduce(((t,n,r)=>Object.assign(t,{[n]:e[r]})),{})))}function H(e,t){"string"!=typeof t&&(t=e.substring(5,e.indexOf(";")),e=e.slice(t.length+13));const n=atob(e),r=new Uint8Array(n.length);for(let e=0;e<n.length;++e)r[e]=n.charCodeAt(e);return new Blob([r],{type:t})}Object.assign(o,{camelize:M,parseChineseNumber:D,compareVersionNumbers:q,toCSV:B,parseCSV:V,base64ToBlob:H});const J=o;function W(e,t=document){if(t?.querySelector||(t=document),"string"==typeof e)return t.querySelector(e);if(e instanceof Array)return e.map((e=>W(e,t)));const n={};for(let r in e)n[r]=W(e[r],t);return n}function _(e,t=document){if(t?.querySelectorAll||(t=document),"string"==typeof e)return[...t.querySelectorAll(e)];if(e instanceof Array)return e.map((e=>_(e,t)));const n={};for(let r in e)n[r]=_(e[r],t);return n}let z;function K(e,t="body > *"){if("undefined"==typeof DOMParser)throw ReferenceError("DOMParser is not defined");z||(z=new DOMParser);const n=z.parseFromString(e,"text/html");return"string"==typeof t?W(t,n):n}function X(e=(()=>!0),t=(()=>!1),n=document){if("function"!=typeof e&&"function"!=typeof t)return e instanceof Array&&(e=e.join(",")),t instanceof Array&&(t=t.join(",")),_(e,n).filter((e=>!_(t,n).includes(e)));e=Y(e,n),t=Y(t,n);const r={acceptNode:n=>t(n)?NodeFilter.FILTER_REJECT:e(n)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},o=document.createTreeWalker(n,NodeFilter.SHOW_ALL,r);let i,s=[];for(;i=o.nextNode();)s.push(i);return s}function Y(e,t){if("function"==typeof e)return e;if("string"==typeof e){const n=_(e,t);return e=>n.includes(e)}if(e instanceof Array)return e=e.map((e=>e.toUpperCase())),t=>e.includes(t.tagName);throw new TypeError("selector shall be a function, a CSS selector string, or an array of strings representing HTML tags.")}function G(e,t){if("string"!=typeof t&&(t=null),"object"!=typeof e)return document.createTextNode(e);if(e instanceof Node)return e.cloneNode(!0);let[n,r,...o]=e;("object"!=typeof e[1]||e[1]instanceof Array)&&(r={},[n,...o]=e),"svg"===n&&(t="http://www.w3.org/2000/svg");const i=r.namespace??t,s=i?document.createElementNS(i,n):document.createElement(n);for(let e in r){const t=r[e];if(e.startsWith("on"))listen(s,e.substring(2).toLowerCase(),t);else switch(e){case"class":case"className":{const e="string"==typeof t?t.trim().split(/\s+/):t;e[0]&&s.classList.add(...e);break}case"css":case"style":if("string"==typeof t)s.style.cssText=t;else for(let e in t)s.style[M(e)]=t[e];break;case"data":case"dataset":for(let e in t)s.dataset[M(e)]=t[e];break;case"namespace":break;default:s.setAttribute(e,t)}}return s.append(...o.map((e=>G(e,i)))),s}function Q(e){if("string"==typeof e&&(e=document.querySelector(e)),!(e instanceof HTMLElement))throw new TypeError("`template` shall be an HTMLElement or a string selector to an existing one.");const t=e instanceof HTMLTemplateElement?document.importNode(e.content,!0):e.cloneNode(!0);return _("[id]",t).forEach((e=>e.removeAttribute("id"))),t}function Z(){console.error("`kongUtilDom.createElement()` has been removed. Use `kongUtilDom.createElementFromJsonML` instead.")}function ee(e=this){console.warn("`kongUtilDom.clearElement()` has been deprecated. Use `Element.replaceChildren()` instead."),e.replaceChildren()}function te(e,t=this){const{clientX:n,clientY:r}=e;return[...t.getClientRects()].some((e=>n>=e.left&&n<=e.right&&r>=e.top&&r<=e.bottom))}function ne(e,t){G(["a",{href:e,download:t}]).click()}function re(e,t,n=""){const r=new Blob([e],{type:n}),o=URL.createObjectURL(r);return ne(o,t),o}const oe=()=>Object.assign(Element.prototype,{clear:ee,hasEventIn:te});Object.assign(o,{$:W,$$:_,parseHTML:K,getNodes:X,createElementFromTemplate:Q,createElementFromJsonML:G,clearElement:ee,isEventInElement:te,downloadURL:ne,downloadData:re,extendElementPrototype:oe});const ie=o;async function se(...e){const t=await fetch(...e);if(t.ok)return t;throw new ReferenceError(t.statusText)}function ae(...e){return se(...e).then((e=>e.json()))}function ce(...e){return se(...e).then((e=>e.text()))}function le(...e){return ce(...e).then((e=>K(e,0)))}function ue(...e){return ce(...e).then((e=>V(e)))}function fe(e,t){const n="readAs"+t.charAt(0).toUpperCase()+t.slice(1),r=new FileReader;return new Promise(((t,o)=>{r.addEventListener("load",(()=>t(r.result))),r.addEventListener("error",(()=>o(r.error))),r[n](e)}))}Object.assign(o,{fetchStrict:se,fetchJSON:ae,fetchText:ce,fetchDOM:le,fetchCSV:ue,readFile:fe});const de=o;async function he(e,t){if(e instanceof ImageBitmap)return e;if("string"==typeof e)if(/^https?:\/\//.test(e)){const n=await se(e,t);e=await n.blob()}else e=H(e,t);return await createImageBitmap(e)}async function pe(e,t,n,r){switch(t){case"canvas":return e;case"dataURL":return e.toDataURL(n,r);case"bitmap":return await createImageBitmap(e);case"blob":return new Promise(((t,o)=>{e.toBlob((e=>{if(e)return t(e);o("the image cannot be created")}),n,r)}));default:throw new TypeError("unknown returnType")}}async function me(e,t){let n=await he(e),r=n.width,o=n.height;const i=n.width/n.height;if(t.scale>0)r=n.width*t.scale,o=n.height*t.scale;else if(!t.width||t.width<0)("scaleDown"!==t.fit||t.height<n.height)&&(r=t.height*i,o=t.height);else if(!t.height||t.height<0)("scaleDown"!==t.fit||t.width<n.width)&&(r=t.width,o=t.width/i);else switch(t.fit??"contain"){case"scaleDown":case"contain":if(t.width/t.height>i?(r=t.height*i,o=t.height):(r=t.width,o=t.width/i),"scaleDown"!==t.fit)break;(r>n.width||o>n.height)&&(r=n.width,o=n.height);break;case"cover":case"fill":{if(r=t.width,o=t.height,"fill"===t.fit)break;let e,s,a,c;const l=t.width/t.height;l>i?(a=n.width,c=a/l,e=0,s=(n.height-c)/2):(c=n.height,a=c*l,e=(n.width-a)/2,s=0),[e,s,a,c]=[e,s,a,c].map(Math.round),n=await createImageBitmap(n,e,s,a,c);break}default:throw new TypeError("unknown fit method",t.fit)}r=Math.round(r),o=Math.round(o);const s=document.createElement("canvas");s.width=r,s.height=o,s.getContext("2d").drawImage(n,0,0,r,o);let a=t.format??"png";return a.startsWith("image/")||(a=("image/"+a).toLowerCase()),pe(s,t.returnType??"canvas",a,t.quality)}Object.assign(o,{readImage:he,canvasTo:pe,resizeImage:me});const ge=o;function ye(e,t,n=this){return Object.keys(n)[e]((e=>t(n[e],e,n)))}function we(e,t,n=this){return Object.keys(n).reduce(((t,r)=>e(t,n[r],r,n)),t)}async function be(e,t,n=this){return Object.keys(n).reduce((async(t,r)=>await e(t,n[r],r,n)),t)}Object.assign(o,{emulateArray:ye,objectReduce:we,objectReduceAsync:be});const Ee=o,ve=()=>{E.extendArrayPrototype(),ie.extendElementPrototype(),x.extendEventTargetPrototype()};Object.assign(o,E,N,ie,C,x,ge,Ee,J,de,{extendPrototype:ve});const Ae=o;kongUtil=t})();