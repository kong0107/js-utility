var e={735:(e,t,n)=>{n.d(t,{A:()=>s,Y:()=>o});const r={version:"0.8.2"},o=function(...e){e[0]instanceof Array&&(e=e[0]);for(let t in this)"use"!==t&&(e.length&&!e.includes(t)||(globalThis[t]=this[t]))}.bind(r);Object.assign(r,{use:o});const s=r},967:(e,t,n)=>{n.d(t,{PT:()=>o,ic:()=>s});var r=n(735);function o(e){return e.replace(/-([a-z]\w+)/g,(e=>e[1].toUpperCase()+e.slice(2)))}function s(e){return e.replace(/[A-Z]+(?![a-z])|[A-Z]/g,((e,t)=>(t?"-":"")+e.toLowerCase()))}const i=["０零○〇洞","１一壹ㄧ弌么","２二貳贰弍兩两","３三參叁弎参叄","４四肆䦉刀","５五伍","６六陸陆","７七柒拐","８八捌杯","９九玖勾"].map((e=>new RegExp(`[${e}]`,"g")));function l(e){return/[\x0a\x0d\x22\x2c]/.test(e)?`"${e=e.replaceAll('"','""')}"`:e}Object.assign(r.A,{camelize:o,kebabize:s,parseChineseNumber:function(e,t=!1){let n="",r=e.toString().replaceAll(/\s/g,"").replace(/[點点奌]/,".");if("負负".includes(r.charAt(0))?n="-":r.startsWith("正")&&(n="+"),n&&(r=r.substring(1)),i.forEach(((e,t)=>{r=r.replaceAll(e,t.toString())})),/^\d+(\.\d+)?$/.test(r))r=n+r;else{let e=!1,t=!1,o=[],s=[],i=[],l=null;if(r.split("").forEach((n=>{if(t)return i.unshift(n);if("0123456789".includes(n))return l=n;const r=["十拾什","百佰","千仟"].findIndex((e=>e.includes(n)))+1;if(r)return s[r]=l??"1",l=null;const a=["萬万","億亿","兆","京經经","垓","秭杼","穰壤","溝沟","澗涧","正","載","極"].findIndex((e=>e.includes(n)))+1;if(a||"."===n){s[0]=l;for(let e=0;e<s.length;++e)o[e+4*a]=s[e];l=null}return a?s=[]:"."===n?t=!0:void(e=!0)})),e)return NaN;if(t)o.unshift(...i,".");else{s[0]=l;for(let e=0;e<s.length;++e)o[e]=s[e]}for(let e=0;e<o.length;++e)o[e]||(o[e]="0");r=n+o.reverse().join("")}return t?r:Number.isSafeInteger(parseInt(r))?parseFloat(r):r},compareVersionNumbers:function(e,t){[e,t]=[e,t].map((e=>e.split(".")));for(let n in e){if(void 0===t[n])return 1;const r=parseInt(e[n],10),o=parseInt(t[n],10);if(r>o)return 1;if(r<o)return-1}return e.length<t.length?-1:0},toCSV:function(e,t,n="\r\n"){return e.reduce(((e,r)=>e+t.map((e=>l(r[e]))).join(",")+n),t.map(l).join(",")+n)},parseCSV:function(e,t=!0){let n=0,r=0,o=[];const s=[];e+="\n";for(let t=0;t<e.length;++t){const i=e.charAt(t);if('"'===i&&++n,!(n%2)&&["\n","\r",","].includes(i)){let n=e.substring(r,t);n.startsWith('"')&&(n=n.slice(1,-1)),n=n.replaceAll('""','"'),r=t+1,","===i?o.push(n):o.length&&(o.push(n),s.push(o),o=[])}}if(!t)return s;const i=s.shift();return s.map((e=>i.reduce(((t,n,r)=>Object.assign(t,{[n]:e[r]})),{})))},base64ToBlob:function(e,t){"string"!=typeof t&&(t=e.substring(5,e.indexOf(";")),e=e.slice(t.length+13));const n=atob(e),r=new Uint8Array(n.length);for(let e=0;e<n.length;++e)r[e]=n.charCodeAt(e);return new Blob([r],{type:t})}})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};n.d(r,{$:()=>i,$$:()=>l,AE:()=>b,AL:()=>d,Ay:()=>L,BW:()=>a,EW:()=>h,H7:()=>p,Hk:()=>T,IZ:()=>g,ML:()=>u,Wn:()=>v,Wp:()=>N,XF:()=>y,Yx:()=>o.Y,c3:()=>E,n:()=>m});var o=n(735),s=n(967);function i(e,t=document){if(t?.querySelector||(t=document),e instanceof Element)return e;if("string"==typeof e)return t.querySelector(e);if(e instanceof Array)return e.map((e=>i(e,t)));const n={};for(let r in e)n[r]=i(e[r],t);return n}function l(e,t=document){if(t?.querySelectorAll||(t=document),"string"==typeof e)return[...t.querySelectorAll(e)];if(e instanceof Array)return e.map((e=>l(e,t)));const n={};for(let r in e)n[r]=l(e[r],t);return n}function a(e,t="body > *"){if("undefined"==typeof DOMParser)throw ReferenceError("DOMParser is not defined");c||(c=new DOMParser);const n=c.parseFromString(e,"text/html");return"string"==typeof t?i(t,n):n}let c;function u(e=()=>!0,t=()=>!1,n=document){if("function"!=typeof e&&"function"!=typeof t)return e instanceof Array&&(e=e.join(",")),t instanceof Array&&(t=t.join(",")),l(e,n).filter((e=>!l(t,n).includes(e)));e=f(e,n),t=f(t,n);const r={acceptNode:n=>t(n)?NodeFilter.FILTER_REJECT:e(n)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},o=document.createTreeWalker(n,NodeFilter.SHOW_ALL,r);let s,i=[];for(;s=o.nextNode();)i.push(s);return i}function f(e,t){if("function"==typeof e)return e;if("string"==typeof e){const n=l(e,t);return e=>n.includes(e)}if(e instanceof Array)return e=e.map((e=>e.toUpperCase())),t=>e.includes(t.tagName);throw new TypeError("selector shall be a function, a CSS selector string, or an array of strings representing HTML tags.")}function d(e,t){if("string"!=typeof t&&(t=null),"object"!=typeof e)return document.createTextNode(e);if(e instanceof Node)return e.cloneNode(!0);let[n,r,...o]=e;("object"!=typeof e[1]||e[1]instanceof Array)&&(r={},[n,...o]=e),"svg"===n&&(t="http://www.w3.org/2000/svg");const s=r.namespace??t,i=s?document.createElementNS(s,n):document.createElement(n);return delete r.namespace,w(r,i),i.append(...o.map((e=>d(e,s)))),i}function p(e){if("string"==typeof e&&(e=document.querySelector(e)),!(e instanceof Node))throw new TypeError("`template` shall be a `Node` or a string selector to an `Element`.");let t;return e instanceof HTMLTemplateElement?(1!==e.content.childElementCount&&console.warn("only the first element is cloned"),t=document.importNode(e.content,!0).firstElementChild):t=e.cloneNode(!0),l("[id]",t).forEach((e=>e.removeAttribute("id"))),t}function m(){console.error("`kongUtilDom.createElement()` has been removed. Use `kongUtilDom.createElementFromJsonML` instead.")}function h(e=this){console.warn("`kongUtilDom.clearElement()` has been deprecated. Use `Element.replaceChildren()` instead."),e.replaceChildren()}function g(e,t=this){const{clientX:n,clientY:r}=e;return[...t.getClientRects()].some((e=>n>=e.left&&n<=e.right&&r>=e.top&&r<=e.bottom))}function b(e,t){d(["a",{href:e,download:t}]).click()}function y(e,t,n=""){const r=new Blob([e],{type:n}),o=URL.createObjectURL(r);return b(o,t),o}function A(e="",t=this){e?t.textContent=e:t.replaceChildren()}function E(e,t){const n=i(e);return null===n?null:(A(t,n),n)}function x(e,t=null,n=this){"role"==e||e.startsWith("aria-")||(e=`aria-${e}`),null===t?n.removeAttribute(e):n.setAttribute(e,t)}function v(e,t,n=null){const r=i(e);return null===r?null:(x(t,n,r),r)}function w(e,t=this){const n={};for(let r in e)r.startsWith("xmlns:")&&(n[r.slice(6)]=e[r],t.setAttribute(r,e[r]));if("aria"in e){const n=e.aria;if(e=Object.assign({},e),null===n)[...t.attributes].forEach((e=>{("role"===e||e.startsWith("aria-"))&&t.removeAttribute(e)}));else for(let t in n)e["role"===t?"role":`aria-${t.toLowerCase()}`]=n[t];delete e.aria}for(let r in e){if(r.startsWith("xmlns:"))continue;const o=e[r],i=r.indexOf(":");if(-1===i){if(r.startsWith("on")){listen(t,r.substring(2).toLowerCase(),o);continue}switch(r){case"class":case"classname":case"className":o?.length?t.setAttribute("class","string"==typeof o?o:o.join(" ")):t.removeAttribute("class");break;case"css":case"style":if(o)if("string"==typeof o)t.style.cssText=o;else for(let e in o){const n=t.style,r=(0,s.ic)(e);null===o[e]?n.removeProperty(r):o[e].endsWith("!important")?n.setProperty(r,o[e].slice(0,-10).trim(),"important"):n.setProperty(r,o[e])}else t.removeAttribute("style");break;case"data":case"dataset":{const e=t.dataset;if(null===o)for(let t in e)delete e[t];else for(let t in o){const n=(0,s.PT)(t);null===o[t]||!1===o[t]?delete e[n]:!0===o[t]?e[n]="":e[n]=o[t]}break}case"text":A(o,t);break;default:null===o||!1===o?t.removeAttribute(r):!0===o?t.setAttribute(r,""):t.setAttribute(r,o)}}else{const e=n[r.slice(0,i)]??null;null===o||!1===o?t.removeAttributeNS(e,r):!0===o?t.setAttributeNS(e,r,""):t.setAttributeNS(e,r,o)}}}function N(e,t){const n=i(e);return null===n?null:(w(t,n),n)}const T=()=>{const e=Element.prototype;Object.assign(e,{clear:e.replaceChildren,hasEventIn:g,setText:A,setAria:x,set:w})};Object.assign(o.A,{$:i,$$:l,parseHTML:a,getNodes:u,createElementFromTemplate:p,createElementFromJsonML:d,createElement:m,clearElement:h,isEventInElement:g,downloadURL:b,downloadData:y,setText:E,setAria:v,setAttributes:N,extendElementPrototype:T});const L=o.A;var C=r.$,S=r.$$,W=r.EW,j=r.n,$=r.AL,F=r.H7,O=r.Ay,I=r.XF,P=r.AE,k=r.Hk,M=r.ML,U=r.IZ,R=r.BW,H=r.Wn,D=r.Wp,q=r.c3,B=r.Yx;export{C as $,S as $$,W as clearElement,j as createElement,$ as createElementFromJsonML,F as createElementFromTemplate,O as default,I as downloadData,P as downloadURL,k as extendElementPrototype,M as getNodes,U as isEventInElement,R as parseHTML,H as setAria,D as setAttributes,q as setText,B as use};