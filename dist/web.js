var kongUtilWeb;(()=>{"use strict";var e={281:(e,t,n)=>{n.d(t,{A:()=>s,Y:()=>o});const r={version:n(330).rE},o=function(...e){e[0]instanceof Array&&(e=e[0]);for(let t in this)"use"!==t&&(e.length&&!e.includes(t)||(globalThis[t]=this[t]))}.bind(r);Object.assign(r,{use:o});const s=r},860:(e,t,n)=>{n.d(t,{parseHTML:()=>a});var r=n(281),o=n(967);function s(e,t=document){if(t?.querySelector||(t=document),"string"==typeof e)return t.querySelector(e);if(e instanceof Array)return e.map((e=>s(e,t)));const n={};for(let r in e)n[r]=s(e[r],t);return n}function i(e,t=document){if(t?.querySelectorAll||(t=document),"string"==typeof e)return[...t.querySelectorAll(e)];if(e instanceof Array)return e.map((e=>i(e,t)));const n={};for(let r in e)n[r]=i(e[r],t);return n}let c;function a(e,t="body > *"){if("undefined"==typeof DOMParser)throw ReferenceError("DOMParser is not defined");c||(c=new DOMParser);const n=c.parseFromString(e,"text/html");return"string"==typeof t?s(t,n):n}function l(e,t){if("function"==typeof e)return e;if("string"==typeof e){const n=i(e,t);return e=>n.includes(e)}if(e instanceof Array)return e=e.map((e=>e.toUpperCase())),t=>e.includes(t.tagName);throw new TypeError("selector shall be a function, a CSS selector string, or an array of strings representing HTML tags.")}function f(e,t){if("string"!=typeof t&&(t=null),"object"!=typeof e)return document.createTextNode(e);if(e instanceof Node)return e.cloneNode(!0);let[n,r,...s]=e;("object"!=typeof e[1]||e[1]instanceof Array)&&(r={},[n,...s]=e),"svg"===n&&(t="http://www.w3.org/2000/svg");const i=r.namespace??t,c=i?document.createElementNS(i,n):document.createElement(n);for(let e in r){const t=r[e];if(e.startsWith("on"))listen(c,e.substring(2).toLowerCase(),t);else switch(e){case"class":case"className":{const e="string"==typeof t?t.trim().split(/\s+/):t;e[0]&&c.classList.add(...e);break}case"css":case"style":if("string"==typeof t)c.style.cssText=t;else for(let e in t)c.style[(0,o.camelize)(e)]=t[e];break;case"data":case"dataset":for(let e in t)c.dataset[(0,o.camelize)(e)]=t[e];break;case"namespace":break;default:c.setAttribute(e,t)}}return c.append(...s.map((e=>f(e,i)))),c}function u(e=this){console.warn("`kongUtilDom.clearElement()` has been deprecated. Use `Element.replaceChildren()` instead."),e.replaceChildren()}function d(e,t=this){const{clientX:n,clientY:r}=e;return[...t.getClientRects()].some((e=>n>=e.left&&n<=e.right&&r>=e.top&&r<=e.bottom))}function p(e,t){f(["a",{href:e,download:t}]).click()}Object.assign(r.A,{$:s,$$:i,parseHTML:a,getNodes:function(e=(()=>!0),t=(()=>!1),n=document){if("function"!=typeof e&&"function"!=typeof t)return e instanceof Array&&(e=e.join(",")),t instanceof Array&&(t=t.join(",")),i(e,n).filter((e=>!i(t,n).includes(e)));e=l(e,n),t=l(t,n);const r={acceptNode:n=>t(n)?NodeFilter.FILTER_REJECT:e(n)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},o=document.createTreeWalker(n,NodeFilter.SHOW_ALL,r);let s,c=[];for(;s=o.nextNode();)c.push(s);return c},createElementFromTemplate:function(e){if("string"==typeof e&&(e=document.querySelector(e)),!(e instanceof Node))throw new TypeError("`template` shall be a `Node` or a string selector to an `Element`.");let t;return e instanceof HTMLTemplateElement?(1!==e.content.childElementCount&&console.warn("only the first element is cloned"),t=document.importNode(e.content,!0).firstElementChild):t=e.cloneNode(!0),i("[id]",t).forEach((e=>e.removeAttribute("id"))),t},createElementFromJsonML:f,createElement:function(){console.error("`kongUtilDom.createElement()` has been removed. Use `kongUtilDom.createElementFromJsonML` instead.")},clearElement:u,isEventInElement:d,downloadURL:p,downloadData:function(e,t,n=""){const r=new Blob([e],{type:n}),o=URL.createObjectURL(r);return p(o,t),o},extendElementPrototype:()=>Object.assign(Element.prototype,{clear:u,hasEventIn:d})})},967:(e,t,n)=>{n.d(t,{camelize:()=>o,parseCSV:()=>c});var r=n(281);function o(e){return e.replace(/-([a-z]\w+)/g,(e=>e[1].toUpperCase()+e.slice(2)))}const s=["０零○〇洞","１一壹ㄧ弌么","２二貳贰弍兩两","３三參叁弎参叄","４四肆䦉刀","５五伍","６六陸陆","７七柒拐","８八捌杯","９九玖勾"].map((e=>new RegExp(`[${e}]`,"g")));function i(e){return/[\x0a\x0d\x22\x2c]/.test(e)?`"${e=e.replaceAll('"','""')}"`:e}function c(e,t=!0){let n=0,r=0,o=[];const s=[];e+="\n";for(let t=0;t<e.length;++t){const i=e.charAt(t);if('"'===i&&++n,!(n%2)&&["\n","\r",","].includes(i)){let n=e.substring(r,t);n.startsWith('"')&&(n=n.slice(1,-1)),n=n.replaceAll('""','"'),r=t+1,","===i?o.push(n):o.length&&(o.push(n),s.push(o),o=[])}}if(!t)return s;const i=s.shift();return s.map((e=>i.reduce(((t,n,r)=>Object.assign(t,{[n]:e[r]})),{})))}Object.assign(r.A,{camelize:o,parseChineseNumber:function(e,t=!1){let n="",r=e.toString().replaceAll(/\s/g,"").replace(/[點点奌]/,".");if("負负".includes(r.charAt(0))?n="-":r.startsWith("正")&&(n="+"),n&&(r=r.substring(1)),s.forEach(((e,t)=>{r=r.replaceAll(e,t.toString())})),/^\d+(\.\d+)?$/.test(r))r=n+r;else{let e=!1,t=!1,o=[],s=[],i=[],c=null;if(r.split("").forEach((n=>{if(t)return i.unshift(n);if("0123456789".includes(n))return c=n;const r=["十拾什","百佰","千仟"].findIndex((e=>e.includes(n)))+1;if(r)return s[r]=c??"1",c=null;const a=["萬万","億亿","兆","京經经","垓","秭杼","穰壤","溝沟","澗涧","正","載","極"].findIndex((e=>e.includes(n)))+1;if(a||"."===n){s[0]=c;for(let e=0;e<s.length;++e)o[e+4*a]=s[e];c=null}return a?s=[]:"."===n?t=!0:void(e=!0)})),e)return NaN;if(t)o.unshift(...i,".");else{s[0]=c;for(let e=0;e<s.length;++e)o[e]=s[e]}for(let e=0;e<o.length;++e)o[e]||(o[e]="0");r=n+o.reverse().join("")}return t?r:Number.isSafeInteger(parseInt(r))?parseFloat(r):r},compareVersionNumbers:function(e,t){[e,t]=[e,t].map((e=>e.split(".")));for(let n in e){if(void 0===t[n])return 1;const r=parseInt(e[n],10),o=parseInt(t[n],10);if(r>o)return 1;if(r<o)return-1}return e.length<t.length?-1:0},toCSV:function(e,t,n="\r\n"){return e.reduce(((e,r)=>e+t.map((e=>i(r[e]))).join(",")+n),t.map(i).join(",")+n)},parseCSV:c,base64ToBlob:function(e,t){"string"!=typeof t&&(t=e.substring(5,e.indexOf(";")),e=e.slice(t.length+13));const n=atob(e),r=new Uint8Array(n.length);for(let e=0;e<n.length;++e)r[e]=n.charCodeAt(e);return new Blob([r],{type:t})}})},330:e=>{e.exports={rE:"0.7.11"}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{n.r(r),n.d(r,{createFormData:()=>u,default:()=>d,fetchCSV:()=>l,fetchDOM:()=>a,fetchJSON:()=>i,fetchStrict:()=>s,fetchText:()=>c,readFile:()=>f,use:()=>e.Y});var e=n(281),t=n(967),o=n(860);async function s(...e){const t=await fetch(...e);if(t.ok)return t;throw new ReferenceError(t.statusText)}function i(...e){return s(...e).then((e=>e.json()))}function c(...e){return s(...e).then((e=>e.text()))}function a(...e){return c(...e).then((e=>(0,o.parseHTML)(e,0)))}function l(...e){return c(...e).then((e=>(0,t.parseCSV)(e)))}function f(e,t){const n="readAs"+t.charAt(0).toUpperCase()+t.slice(1),r=new FileReader;return new Promise(((t,o)=>{r.addEventListener("load",(()=>t(r.result))),r.addEventListener("error",(()=>o(r.error))),r[n](e)}))}function u(e){const t=new FormData;for(const n in e)t.append(n,e[n]);return t}Object.assign(e.A,{fetchStrict:s,fetchJSON:i,fetchText:c,fetchDOM:a,fetchCSV:l,readFile:f,createFormData:u});const d=e.A})(),kongUtilWeb=r})();