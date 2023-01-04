var e={292:(e,t,n)=>{n.d(t,{Z:()=>o,D:()=>s});const r={version:"0.6.6"},s=function(...e){e[0]instanceof Array&&(e=e[0]);for(let t in this)"use"!==t&&(e.length&&!e.includes(t)||(globalThis[t]=this[t]))}.bind(r);Object.assign(r,{use:s});const o=r},432:(e,t,n)=>{n.d(t,{_A:()=>s});var r=n(292);function s(e){return e.replace(/-([a-z]\w+)/g,(e=>e[1].toUpperCase()+e.slice(2)))}const o=["０零○〇洞","１一壹ㄧ弌么","２二貳贰弍兩两","３三參叁弎参叄","４四肆䦉刀","５五伍","６六陸陆","７七柒拐","８八捌杯","９九玖勾"].map((e=>new RegExp(`[${e}]`,"g")));function i(e){return/[\x0a\x0d\x22\x2c]/.test(e)?`"${e=e.replaceAll('"','""')}"`:e}Object.assign(r.Z,{camelize:s,parseChineseNumber:function(e,t=!1){let n="",r=e.toString().replaceAll(/\s/g,"").replace(/[點点奌]/,".");if("負负".includes(r.charAt(0))?n="-":r.startsWith("正")&&(n="+"),n&&(r=r.substring(1)),o.forEach(((e,t)=>{r=r.replaceAll(e,t.toString())})),/^\d+(\.\d+)$/.test(r))r=n+r;else{let e=!1,t=!1,s=[],o=[],i=[],a=null;if(r.split("").forEach((n=>{if(t)return i.unshift(n);if("0123456789".includes(n))return a=n;const r=["十拾什","百佰","千仟"].findIndex((e=>e.includes(n)))+1;if(r)return o[r]=a??"1",a=null;const c=["萬万","億亿","兆","京經经","垓","秭杼","穰壤","溝沟","澗涧","正","載","極"].findIndex((e=>e.includes(n)))+1;if(c||"."===n){o[0]=a;for(let e=0;e<o.length;++e)s[e+4*c]=o[e];a=null}return c?o=[]:"."===n?t=!0:void(e=!0)})),e)return NaN;if(t)s.unshift(...i,".");else{o[0]=a;for(let e=0;e<o.length;++e)s[e]=o[e]}for(let e=0;e<s.length;++e)s[e]||(s[e]="0");r=n+s.reverse().join("")}return t?r:Number.isSafeInteger(parseInt(r))?parseFloat(r):r},compareVersionNumbers:function(e,t){[e,t]=[e,t].map((e=>e.split(".")));for(let n in e){if(void 0===t[n])return 1;const r=parseInt(e[n],10),s=parseInt(t[n],10);if(r>s)return 1;if(r<s)return-1}return e.length<t.length?-1:0},toCSV:function(e,t,n="\r\n"){return e.reduce(((e,r)=>e+t.map((e=>i(r[e]))).join(",")+n),t.map(i).join(",")+n)},parseCSV:function(e,t=!0){let n=0,r=0,s=[];const o=[];e+="\n";for(let t=0;t<e.length;++t){const i=e.charAt(t);if('"'===i&&++n,!(n%2)&&["\n","\r",","].includes(i)){let n=e.substring(r,t);n.startsWith('"')&&(n=n.slice(1,-1)),n=n.replaceAll('""','"'),r=t+1,","===i?s.push(n):s.length&&(s.push(n),o.push(s),s=[])}}if(!t)return o;const i=o.shift();return o.map((e=>i.reduce(((t,n,r)=>Object.assign(t,{[n]:e[r]})),{})))}})}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};(()=>{n.d(r,{$:()=>s,$$:()=>o,D$:()=>e.D,EI:()=>u,He:()=>d,W1:()=>p,ZP:()=>m,oP:()=>f,rg:()=>a,v$:()=>c});var e=n(292),t=n(432);function s(e,t=document){if(t?.querySelector||(t=document),"string"==typeof e)return t.querySelector(e);if(e instanceof Array)return e.map((e=>s(e,t)));const n={};for(let r in e)n[r]=s(e[r],t);return n}function o(e,t=document){if(t?.querySelectorAll||(t=document),"string"==typeof e)return[...t.querySelectorAll(e)];if(e instanceof Array)return e.map((e=>o(e,t)));const n={};for(let r in e)n[r]=o(e[r],t);return n}let i;function a(e,t="body > *"){if("undefined"==typeof DOMParser)throw ReferenceError("DOMParser is not defined");i||(i=new DOMParser);const n=i.parseFromString(e,"text/html");return"string"==typeof t?s(t,n):n}function c(e=(()=>!0),t=(()=>!1),n=document){if("function"!=typeof e&&"function"!=typeof t)return e instanceof Array&&(e=e.join(",")),t instanceof Array&&(t=t.join(",")),o(e,n).filter((e=>!o(t,n).includes(e)));e=l(e,n),t=l(t,n);const r={acceptNode:n=>t(n)?NodeFilter.FILTER_REJECT:e(n)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},s=document.createTreeWalker(n,NodeFilter.SHOW_ALL,r);let i,a=[];for(;i=s.nextNode();)a.push(i);return a}function l(e,t){if("function"==typeof e)return e;if("string"==typeof e){const n=o(e,t);return e=>n.includes(e)}if(e instanceof Array)return e=e.map((e=>e.toUpperCase())),t=>e.includes(t.tagName);throw new TypeError("selector shall be a function, a CSS selector string, or an array of strings representing HTML tags.")}function u(e,n){if("string"!=typeof n&&(n=null),"object"!=typeof e)return document.createTextNode(e);if(e instanceof Node)return e.cloneNode(!0);let[r,s,...o]=e;("object"!=typeof e[1]||e[1]instanceof Array)&&(s={},[r,...o]=e),"svg"===r&&(n="http://www.w3.org/2000/svg");const i=s.namespace??n,a=i?document.createElementNS(i,r):document.createElement(r);for(let e in s){const n=s[e];if(e.startsWith("on"))listen(a,e.substring(2).toLowerCase(),n);else switch(e){case"class":case"className":{const e="string"==typeof n?n.trim().split(/\s+/):n;a.classList.add(...e);break}case"css":case"style":if("string"==typeof n)a.style.cssText=n;else for(let e in n)a.style[(0,t._A)(e)]=n[e];break;case"data":case"dataset":for(let e in n)a.dataset[(0,t._A)(e)]=n[e];break;case"namespace":break;default:a.setAttribute(e,n)}}return a.append(...o.map((e=>u(e,i)))),a}function f(e=this){console.warn("`clearElement()` has been deprecated. Use `Element.replaceChildren()` instead."),e.replaceChildren()}function p(e,t=this){const{clientX:n,clientY:r}=e;return[...t.getClientRects()].some((e=>n>=e.left&&n<=e.right&&r>=e.top&&r<=e.bottom))}const d=()=>Object.assign(Element.prototype,{clear:f,hasEventIn:p});Object.assign(e.Z,{$:s,$$:o,parseHTML:a,getNodes:c,createElementFromJsonML:u,clearElement:f,isEventInElement:p,extendElementPrototype:d});const m=e.Z})();var s=r.$,o=r.$$,i=r.oP,a=r.EI,c=r.ZP,l=r.He,u=r.v$,f=r.W1,p=r.rg,d=r.D$;export{s as $,o as $$,i as clearElement,a as createElementFromJsonML,c as default,l as extendElementPrototype,u as getNodes,f as isEventInElement,p as parseHTML,d as use};