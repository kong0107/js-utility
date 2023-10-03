var e={292:(e,t,n)=>{n.d(t,{Z:()=>s,D:()=>o});const r={version:"0.7.8"},o=function(...e){e[0]instanceof Array&&(e=e[0]);for(let t in this)"use"!==t&&(e.length&&!e.includes(t)||(globalThis[t]=this[t]))}.bind(r);Object.assign(r,{use:o});const s=r},432:(e,t,n)=>{n.d(t,{_A:()=>o});var r=n(292);function o(e){return e.replace(/-([a-z]\w+)/g,(e=>e[1].toUpperCase()+e.slice(2)))}const s=["０零○〇洞","１一壹ㄧ弌么","２二貳贰弍兩两","３三參叁弎参叄","４四肆䦉刀","５五伍","６六陸陆","７七柒拐","８八捌杯","９九玖勾"].map((e=>new RegExp(`[${e}]`,"g")));function a(e){return/[\x0a\x0d\x22\x2c]/.test(e)?`"${e=e.replaceAll('"','""')}"`:e}Object.assign(r.Z,{camelize:o,parseChineseNumber:function(e,t=!1){let n="",r=e.toString().replaceAll(/\s/g,"").replace(/[點点奌]/,".");if("負负".includes(r.charAt(0))?n="-":r.startsWith("正")&&(n="+"),n&&(r=r.substring(1)),s.forEach(((e,t)=>{r=r.replaceAll(e,t.toString())})),/^\d+(\.\d+)?$/.test(r))r=n+r;else{let e=!1,t=!1,o=[],s=[],a=[],i=null;if(r.split("").forEach((n=>{if(t)return a.unshift(n);if("0123456789".includes(n))return i=n;const r=["十拾什","百佰","千仟"].findIndex((e=>e.includes(n)))+1;if(r)return s[r]=i??"1",i=null;const c=["萬万","億亿","兆","京經经","垓","秭杼","穰壤","溝沟","澗涧","正","載","極"].findIndex((e=>e.includes(n)))+1;if(c||"."===n){s[0]=i;for(let e=0;e<s.length;++e)o[e+4*c]=s[e];i=null}return c?s=[]:"."===n?t=!0:void(e=!0)})),e)return NaN;if(t)o.unshift(...a,".");else{s[0]=i;for(let e=0;e<s.length;++e)o[e]=s[e]}for(let e=0;e<o.length;++e)o[e]||(o[e]="0");r=n+o.reverse().join("")}return t?r:Number.isSafeInteger(parseInt(r))?parseFloat(r):r},compareVersionNumbers:function(e,t){[e,t]=[e,t].map((e=>e.split(".")));for(let n in e){if(void 0===t[n])return 1;const r=parseInt(e[n],10),o=parseInt(t[n],10);if(r>o)return 1;if(r<o)return-1}return e.length<t.length?-1:0},toCSV:function(e,t,n="\r\n"){return e.reduce(((e,r)=>e+t.map((e=>a(r[e]))).join(",")+n),t.map(a).join(",")+n)},parseCSV:function(e,t=!0){let n=0,r=0,o=[];const s=[];e+="\n";for(let t=0;t<e.length;++t){const a=e.charAt(t);if('"'===a&&++n,!(n%2)&&["\n","\r",","].includes(a)){let n=e.substring(r,t);n.startsWith('"')&&(n=n.slice(1,-1)),n=n.replaceAll('""','"'),r=t+1,","===a?o.push(n):o.length&&(o.push(n),s.push(o),o=[])}}if(!t)return s;const a=s.shift();return s.map((e=>a.reduce(((t,n,r)=>Object.assign(t,{[n]:e[r]})),{})))},base64ToBlob:function(e,t){"string"!=typeof t&&(t=e.substring(5,e.indexOf(";")),e=e.slice(t.length+13));const n=atob(e),r=new Uint8Array(n.length);for(let e=0;e<n.length;++e)r[e]=n.charCodeAt(e);return new Blob([r],{type:t})}})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};(()=>{n.d(r,{$:()=>o,$$:()=>s,D$:()=>e.D,EI:()=>u,He:()=>y,O6:()=>h,UR:()=>g,Uk:()=>f,W1:()=>m,ZP:()=>E,az:()=>d,oP:()=>p,rg:()=>i,v$:()=>c});var e=n(292),t=n(432);function o(e,t=document){if(t?.querySelector||(t=document),"string"==typeof e)return t.querySelector(e);if(e instanceof Array)return e.map((e=>o(e,t)));const n={};for(let r in e)n[r]=o(e[r],t);return n}function s(e,t=document){if(t?.querySelectorAll||(t=document),"string"==typeof e)return[...t.querySelectorAll(e)];if(e instanceof Array)return e.map((e=>s(e,t)));const n={};for(let r in e)n[r]=s(e[r],t);return n}let a;function i(e,t="body > *"){if("undefined"==typeof DOMParser)throw ReferenceError("DOMParser is not defined");a||(a=new DOMParser);const n=a.parseFromString(e,"text/html");return"string"==typeof t?o(t,n):n}function c(e=(()=>!0),t=(()=>!1),n=document){if("function"!=typeof e&&"function"!=typeof t)return e instanceof Array&&(e=e.join(",")),t instanceof Array&&(t=t.join(",")),s(e,n).filter((e=>!s(t,n).includes(e)));e=l(e,n),t=l(t,n);const r={acceptNode:n=>t(n)?NodeFilter.FILTER_REJECT:e(n)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},o=document.createTreeWalker(n,NodeFilter.SHOW_ALL,r);let a,i=[];for(;a=o.nextNode();)i.push(a);return i}function l(e,t){if("function"==typeof e)return e;if("string"==typeof e){const n=s(e,t);return e=>n.includes(e)}if(e instanceof Array)return e=e.map((e=>e.toUpperCase())),t=>e.includes(t.tagName);throw new TypeError("selector shall be a function, a CSS selector string, or an array of strings representing HTML tags.")}function u(e,n){if("string"!=typeof n&&(n=null),"object"!=typeof e)return document.createTextNode(e);if(e instanceof Node)return e.cloneNode(!0);let[r,o,...s]=e;("object"!=typeof e[1]||e[1]instanceof Array)&&(o={},[r,...s]=e),"svg"===r&&(n="http://www.w3.org/2000/svg");const a=o.namespace??n,i=a?document.createElementNS(a,r):document.createElement(r);for(let e in o){const n=o[e];if(e.startsWith("on"))listen(i,e.substring(2).toLowerCase(),n);else switch(e){case"class":case"className":{const e="string"==typeof n?n.trim().split(/\s+/):n;e[0]&&i.classList.add(...e);break}case"css":case"style":if("string"==typeof n)i.style.cssText=n;else for(let e in n)i.style[(0,t._A)(e)]=n[e];break;case"data":case"dataset":for(let e in n)i.dataset[(0,t._A)(e)]=n[e];break;case"namespace":break;default:i.setAttribute(e,n)}}return i.append(...s.map((e=>u(e,a)))),i}function f(e){if("string"==typeof e&&(e=document.querySelector(e)),!(e instanceof HTMLElement))throw new TypeError("`template` shall be an HTMLElement or a string selector to an existing one.");const t=e instanceof HTMLTemplateElement?document.importNode(e.content,!0):e.cloneNode(!0);return s("[id]",t).forEach((e=>e.removeAttribute("id"))),t}function d(){console.error("`kongUtilDom.createElement()` has been removed. Use `kongUtilDom.createElementFromJsonML` instead.")}function p(e=this){console.warn("`kongUtilDom.clearElement()` has been deprecated. Use `Element.replaceChildren()` instead."),e.replaceChildren()}function m(e,t=this){const{clientX:n,clientY:r}=e;return[...t.getClientRects()].some((e=>n>=e.left&&n<=e.right&&r>=e.top&&r<=e.bottom))}function g(e,t){u(["a",{href:e,download:t}]).click()}function h(e,t,n=""){const r=new Blob([e],{type:n}),o=URL.createObjectURL(r);return g(o,t),o}const y=()=>Object.assign(Element.prototype,{clear:p,hasEventIn:m});Object.assign(e.Z,{$:o,$$:s,parseHTML:i,getNodes:c,createElementFromTemplate:f,createElementFromJsonML:u,clearElement:p,isEventInElement:m,downloadURL:g,downloadData:h,extendElementPrototype:y});const E=e.Z})();var o=r.$,s=r.$$,a=r.oP,i=r.az,c=r.EI,l=r.Uk,u=r.ZP,f=r.O6,d=r.UR,p=r.He,m=r.v$,g=r.W1,h=r.rg,y=r.D$;export{o as $,s as $$,a as clearElement,i as createElement,c as createElementFromJsonML,l as createElementFromTemplate,u as default,f as downloadData,d as downloadURL,p as extendElementPrototype,m as getNodes,g as isEventInElement,h as parseHTML,y as use};