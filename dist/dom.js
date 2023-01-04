var kongUtilDom;(()=>{"use strict";var e={65:(e,t,n)=>{n.d(t,{D:()=>o,Z:()=>s});const r={version:n(147).i8},o=function(...e){e[0]instanceof Array&&(e=e[0]);for(let t in this)"use"!==t&&(e.length&&!e.includes(t)||(globalThis[t]=this[t]))}.bind(r);Object.assign(r,{use:o});const s=r},432:(e,t,n)=>{n.d(t,{camelize:()=>o});var r=n(65);function o(e){return e.replace(/-([a-z]\w+)/g,(e=>e[1].toUpperCase()+e.slice(2)))}const s=["０零○〇洞","１一壹ㄧ弌么","２二貳贰弍兩两","３三參叁弎参叄","４四肆䦉刀","５五伍","６六陸陆","７七柒拐","８八捌杯","９九玖勾"].map((e=>new RegExp(`[${e}]`,"g")));function i(e){return/[\x0a\x0d\x22\x2c]/.test(e)?`"${e=e.replaceAll('"','""')}"`:e}Object.assign(r.Z,{camelize:o,parseChineseNumber:function(e,t=!1){let n="",r=e.toString().replaceAll(/\s/g,"").replace(/[點点奌]/,".");if("負负".includes(r.charAt(0))?n="-":r.startsWith("正")&&(n="+"),n&&(r=r.substring(1)),s.forEach(((e,t)=>{r=r.replaceAll(e,t.toString())})),/^\d+(\.\d+)$/.test(r))r=n+r;else{let e=!1,t=!1,o=[],s=[],i=[],c=null;if(r.split("").forEach((n=>{if(t)return i.unshift(n);if("0123456789".includes(n))return c=n;const r=["十拾什","百佰","千仟"].findIndex((e=>e.includes(n)))+1;if(r)return s[r]=c??"1",c=null;const a=["萬万","億亿","兆","京經经","垓","秭杼","穰壤","溝沟","澗涧","正","載","極"].findIndex((e=>e.includes(n)))+1;if(a||"."===n){s[0]=c;for(let e=0;e<s.length;++e)o[e+4*a]=s[e];c=null}return a?s=[]:"."===n?t=!0:void(e=!0)})),e)return NaN;if(t)o.unshift(...i,".");else{s[0]=c;for(let e=0;e<s.length;++e)o[e]=s[e]}for(let e=0;e<o.length;++e)o[e]||(o[e]="0");r=n+o.reverse().join("")}return t?r:Number.isSafeInteger(parseInt(r))?parseFloat(r):r},compareVersionNumbers:function(e,t){[e,t]=[e,t].map((e=>e.split(".")));for(let n in e){if(void 0===t[n])return 1;const r=parseInt(e[n],10),o=parseInt(t[n],10);if(r>o)return 1;if(r<o)return-1}return e.length<t.length?-1:0},toCSV:function(e,t,n="\r\n"){return e.reduce(((e,r)=>e+t.map((e=>i(r[e]))).join(",")+n),t.map(i).join(",")+n)},parseCSV:function(e,t=!0){let n=0,r=0,o=[];const s=[];e+="\n";for(let t=0;t<e.length;++t){const i=e.charAt(t);if('"'===i&&++n,!(n%2)&&["\n","\r",","].includes(i)){let n=e.substring(r,t);n.startsWith('"')&&(n=n.slice(1,-1)),n=n.replaceAll('""','"'),r=t+1,","===i?o.push(n):o.length&&(o.push(n),s.push(o),o=[])}}if(!t)return s;const i=s.shift();return s.map((e=>i.reduce(((t,n,r)=>Object.assign(t,{[n]:e[r]})),{})))}})},147:e=>{e.exports={i8:"0.6.5"}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{n.r(r),n.d(r,{$:()=>o,$$:()=>s,clearElement:()=>f,createElementFromJsonML:()=>u,default:()=>m,extendElementPrototype:()=>d,getNodes:()=>a,isEventInElement:()=>p,parseHTML:()=>c,use:()=>e.D});var e=n(65),t=n(432);function o(e,t=document){if(t?.querySelector||(t=document),"string"==typeof e)return t.querySelector(e);if(e instanceof Array)return e.map((e=>o(e,t)));const n={};for(let r in e)n[r]=o(e[r],t);return n}function s(e,t=document){if(t?.querySelectorAll||(t=document),"string"==typeof e)return[...t.querySelectorAll(e)];if(e instanceof Array)return e.map((e=>s(e,t)));const n={};for(let r in e)n[r]=s(e[r],t);return n}let i;function c(e,t="body > *"){if("undefined"==typeof DOMParser)throw ReferenceError("DOMParser is not defined");i||(i=new DOMParser);const n=i.parseFromString(e,"text/html");return"string"==typeof t?o(t,n):n}function a(e=(()=>!0),t=(()=>!1),n=document){if("function"!=typeof e&&"function"!=typeof t)return e instanceof Array&&(e=e.join(",")),t instanceof Array&&(t=t.join(",")),s(e,n).filter((e=>!s(t,n).includes(e)));e=l(e,n),t=l(t,n);const r={acceptNode:n=>t(n)?NodeFilter.FILTER_REJECT:e(n)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},o=document.createTreeWalker(n,NodeFilter.SHOW_ALL,r);let i,c=[];for(;i=o.nextNode();)c.push(i);return c}function l(e,t){if("function"==typeof e)return e;if("string"==typeof e){const n=s(e,t);return e=>n.includes(e)}if(e instanceof Array)return e=e.map((e=>e.toUpperCase())),t=>e.includes(t.tagName);throw new TypeError("selector shall be a function, a CSS selector string, or an array of strings representing HTML tags.")}function u(e,n){if("object"!=typeof e)return document.createTextNode(e);if(e instanceof Node)return e.cloneNode(!0);let[r,o,...s]=e;("object"!=typeof e[1]||e[1]instanceof Array)&&(o={},[r,...s]=e),"svg"===r&&(n="http://www.w3.org/2000/svg");const i=o.namespace??n,c=i?document.createElementNS(i,r):document.createElement(r);for(let e in o){const n=o[e];if(e.startsWith("on"))listen(c,e.substring(2).toLowerCase(),n);else switch(e){case"class":case"className":{const e="string"==typeof n?n.trim().split(/\s+/):n;c.classList.add(...e);break}case"css":case"style":if("string"==typeof n)c.style.cssText=n;else for(let e in n)c.style[(0,t.camelize)(e)]=n[e];break;case"data":case"dataset":for(let e in n)c.dataset[(0,t.camelize)(e)]=n[e];break;case"namespace":break;default:c.setAttribute(e,n)}}return c.append(...s.map((e=>u(e,i)))),c}function f(e=this){console.warn("`clearElement()` has been deprecated. Use `Element.replaceChildren()` instead."),e.replaceChildren()}function p(e,t=this){const{clientX:n,clientY:r}=e;return[...t.getClientRects()].some((e=>n>=e.left&&n<=e.right&&r>=e.top&&r<=e.bottom))}const d=()=>Object.assign(Element.prototype,{clear:f,hasEventIn:p});Object.assign(e.Z,{$:o,$$:s,parseHTML:c,getNodes:a,createElementFromJsonML:u,clearElement:f,isEventInElement:p,extendElementPrototype:d});const m=e.Z})(),kongUtilDom=r})();