var e={735:(e,t,n)=>{n.d(t,{A:()=>s,Y:()=>o});const r={version:"0.8.2"},o=function(...e){e[0]instanceof Array&&(e=e[0]);for(let t in this)"use"!==t&&(e.length&&!e.includes(t)||(globalThis[t]=this[t]))}.bind(r);Object.assign(r,{use:o});const s=r},860:(e,t,n)=>{n.d(t,{BW:()=>a});var r=n(735),o=n(967);function s(e,t=document){if(t?.querySelector||(t=document),e instanceof Element)return e;if("string"==typeof e)return t.querySelector(e);if(e instanceof Array)return e.map((e=>s(e,t)));const n={};for(let r in e)n[r]=s(e[r],t);return n}function i(e,t=document){if(t?.querySelectorAll||(t=document),"string"==typeof e)return[...t.querySelectorAll(e)];if(e instanceof Array)return e.map((e=>i(e,t)));const n={};for(let r in e)n[r]=i(e[r],t);return n}function a(e,t="body > *"){if("undefined"==typeof DOMParser)throw ReferenceError("DOMParser is not defined");c||(c=new DOMParser);const n=c.parseFromString(e,"text/html");return"string"==typeof t?s(t,n):n}let c;function l(e,t){if("function"==typeof e)return e;if("string"==typeof e){const n=i(e,t);return e=>n.includes(e)}if(e instanceof Array)return e=e.map((e=>e.toUpperCase())),t=>e.includes(t.tagName);throw new TypeError("selector shall be a function, a CSS selector string, or an array of strings representing HTML tags.")}function u(e,t){if("string"!=typeof t&&(t=null),"object"!=typeof e)return document.createTextNode(e);if(e instanceof Node)return e.cloneNode(!0);let[n,r,...o]=e;("object"!=typeof e[1]||e[1]instanceof Array)&&(r={},[n,...o]=e),"svg"===n&&(t="http://www.w3.org/2000/svg");const s=r.namespace??t,i=s?document.createElementNS(s,n):document.createElement(n);return delete r.namespace,m(r,i),i.append(...o.map((e=>u(e,s)))),i}function f(e,t=this){const{clientX:n,clientY:r}=e;return[...t.getClientRects()].some((e=>n>=e.left&&n<=e.right&&r>=e.top&&r<=e.bottom))}function d(e,t){u(["a",{href:e,download:t}]).click()}function h(e="",t=this){e?t.textContent=e:t.replaceChildren()}function p(e,t=null,n=this){"role"==e||e.startsWith("aria-")||(e=`aria-${e}`),null===t?n.removeAttribute(e):n.setAttribute(e,t)}function m(e,t=this){const n={};for(let r in e)r.startsWith("xmlns:")&&(n[r.slice(6)]=e[r],t.setAttribute(r,e[r]));if("aria"in e){const n=e.aria;if(e=Object.assign({},e),null===n)[...t.attributes].forEach((e=>{("role"===e||e.startsWith("aria-"))&&t.removeAttribute(e)}));else for(let t in n)e["role"===t?"role":`aria-${t.toLowerCase()}`]=n[t];delete e.aria}for(let r in e){if(r.startsWith("xmlns:"))continue;const s=e[r],i=r.indexOf(":");if(-1===i){if(r.startsWith("on")){listen(t,r.substring(2).toLowerCase(),s);continue}switch(r){case"class":case"classname":case"className":s?.length?t.setAttribute("class","string"==typeof s?s:s.join(" ")):t.removeAttribute("class");break;case"css":case"style":if(s)if("string"==typeof s)t.style.cssText=s;else for(let e in s){const n=t.style,r=(0,o.ic)(e);null===s[e]?n.removeProperty(r):s[e].endsWith("!important")?n.setProperty(r,s[e].slice(0,-10).trim(),"important"):n.setProperty(r,s[e])}else t.removeAttribute("style");break;case"data":case"dataset":{const e=t.dataset;if(null===s)for(let t in e)delete e[t];else for(let t in s){const n=(0,o.PT)(t);null===s[t]||!1===s[t]?delete e[n]:!0===s[t]?e[n]="":e[n]=s[t]}break}case"text":h(s,t);break;default:null===s||!1===s?t.removeAttribute(r):!0===s?t.setAttribute(r,""):t.setAttribute(r,s)}}else{const e=n[r.slice(0,i)]??null;null===s||!1===s?t.removeAttributeNS(e,r):!0===s?t.setAttributeNS(e,r,""):t.setAttributeNS(e,r,s)}}}Object.assign(r.A,{$:s,$$:i,parseHTML:a,getNodes:function(e=()=>!0,t=()=>!1,n=document){if("function"!=typeof e&&"function"!=typeof t)return e instanceof Array&&(e=e.join(",")),t instanceof Array&&(t=t.join(",")),i(e,n).filter((e=>!i(t,n).includes(e)));e=l(e,n),t=l(t,n);const r={acceptNode:n=>t(n)?NodeFilter.FILTER_REJECT:e(n)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},o=document.createTreeWalker(n,NodeFilter.SHOW_ALL,r);let s,a=[];for(;s=o.nextNode();)a.push(s);return a},createElementFromTemplate:function(e){if("string"==typeof e&&(e=document.querySelector(e)),!(e instanceof Node))throw new TypeError("`template` shall be a `Node` or a string selector to an `Element`.");let t;return e instanceof HTMLTemplateElement?(1!==e.content.childElementCount&&console.warn("only the first element is cloned"),t=document.importNode(e.content,!0).firstElementChild):t=e.cloneNode(!0),i("[id]",t).forEach((e=>e.removeAttribute("id"))),t},createElementFromJsonML:u,createElement:function(){console.error("`kongUtilDom.createElement()` has been removed. Use `kongUtilDom.createElementFromJsonML` instead.")},clearElement:function(e=this){console.warn("`kongUtilDom.clearElement()` has been deprecated. Use `Element.replaceChildren()` instead."),e.replaceChildren()},isEventInElement:f,downloadURL:d,downloadData:function(e,t,n=""){const r=new Blob([e],{type:n}),o=URL.createObjectURL(r);return d(o,t),o},setText:function(e,t){const n=s(e);return null===n?null:(h(t,n),n)},setAria:function(e,t,n=null){const r=s(e);return null===r?null:(p(t,n,r),r)},setAttributes:function(e,t){const n=s(e);return null===n?null:(m(t,n),n)},extendElementPrototype:()=>{const e=Element.prototype;Object.assign(e,{clear:e.replaceChildren,hasEventIn:f,setText:h,setAria:p,set:m})}})},967:(e,t,n)=>{n.d(t,{CO:()=>c,PT:()=>o,ic:()=>s});var r=n(735);function o(e){return e.replace(/-([a-z]\w+)/g,(e=>e[1].toUpperCase()+e.slice(2)))}function s(e){return e.replace(/[A-Z]+(?![a-z])|[A-Z]/g,((e,t)=>(t?"-":"")+e.toLowerCase()))}const i=["０零○〇洞","１一壹ㄧ弌么","２二貳贰弍兩两","３三參叁弎参叄","４四肆䦉刀","５五伍","６六陸陆","７七柒拐","８八捌杯","９九玖勾"].map((e=>new RegExp(`[${e}]`,"g")));function a(e){return/[\x0a\x0d\x22\x2c]/.test(e)?`"${e=e.replaceAll('"','""')}"`:e}function c(e,t=!0){let n=0,r=0,o=[];const s=[];e+="\n";for(let t=0;t<e.length;++t){const i=e.charAt(t);if('"'===i&&++n,!(n%2)&&["\n","\r",","].includes(i)){let n=e.substring(r,t);n.startsWith('"')&&(n=n.slice(1,-1)),n=n.replaceAll('""','"'),r=t+1,","===i?o.push(n):o.length&&(o.push(n),s.push(o),o=[])}}if(!t)return s;const i=s.shift();return s.map((e=>i.reduce(((t,n,r)=>Object.assign(t,{[n]:e[r]})),{})))}Object.assign(r.A,{camelize:o,kebabize:s,parseChineseNumber:function(e,t=!1){let n="",r=e.toString().replaceAll(/\s/g,"").replace(/[點点奌]/,".");if("負负".includes(r.charAt(0))?n="-":r.startsWith("正")&&(n="+"),n&&(r=r.substring(1)),i.forEach(((e,t)=>{r=r.replaceAll(e,t.toString())})),/^\d+(\.\d+)?$/.test(r))r=n+r;else{let e=!1,t=!1,o=[],s=[],i=[],a=null;if(r.split("").forEach((n=>{if(t)return i.unshift(n);if("0123456789".includes(n))return a=n;const r=["十拾什","百佰","千仟"].findIndex((e=>e.includes(n)))+1;if(r)return s[r]=a??"1",a=null;const c=["萬万","億亿","兆","京經经","垓","秭杼","穰壤","溝沟","澗涧","正","載","極"].findIndex((e=>e.includes(n)))+1;if(c||"."===n){s[0]=a;for(let e=0;e<s.length;++e)o[e+4*c]=s[e];a=null}return c?s=[]:"."===n?t=!0:void(e=!0)})),e)return NaN;if(t)o.unshift(...i,".");else{s[0]=a;for(let e=0;e<s.length;++e)o[e]=s[e]}for(let e=0;e<o.length;++e)o[e]||(o[e]="0");r=n+o.reverse().join("")}return t?r:Number.isSafeInteger(parseInt(r))?parseFloat(r):r},compareVersionNumbers:function(e,t){[e,t]=[e,t].map((e=>e.split(".")));for(let n in e){if(void 0===t[n])return 1;const r=parseInt(e[n],10),o=parseInt(t[n],10);if(r>o)return 1;if(r<o)return-1}return e.length<t.length?-1:0},toCSV:function(e,t,n="\r\n"){return e.reduce(((e,r)=>e+t.map((e=>a(r[e]))).join(",")+n),t.map(a).join(",")+n)},parseCSV:c,base64ToBlob:function(e,t){"string"!=typeof t&&(t=e.substring(5,e.indexOf(";")),e=e.slice(t.length+13));const n=atob(e),r=new Uint8Array(n.length);for(let e=0;e<n.length;++e)r[e]=n.charCodeAt(e);return new Blob([r],{type:t})}})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};n.d(r,{$W:()=>h,Ay:()=>p,Sy:()=>l,TA:()=>d,UQ:()=>a,Yx:()=>o.Y,Z8:()=>u,hI:()=>c,tU:()=>f});var o=n(735),s=n(967),i=n(860);async function a(e,t){let n=e.body||t?.body;if(n){n.constructor===Object&&(n=new URLSearchParams(n),e.body&&(e=new Request(e,{body:n})),t.body&&(t.body=n));const r=e.method||t?.method;switch(r){case"GET":if(n instanceof URLSearchParams){let r=e.url??e+"";try{r=new URL(r)}catch(e){if(r.startsWith("/"))r=new URL(document.baseURI).origin+r;else{const e=document.baseURI.lastIndexOf("/");r=document.baseURI.slice(0,e+1)+r}r=new URL(r)}for(const[e,t]of n.entries())r.searchParams.set(e,t);e=e.url?new Request(e,{url:r,body:void 0}):r,t?.body&&delete t.body}break;case"POST":case"PUT":break;default:console.warn(`While using \`fetch()\` with \`body\`, \`method\` shall be set to "POST" or "PUT". You've wrongly set it to "${r}".`),e.url&&(e=new Request(e,{method:"POST"})),"object"==typeof t&&(t.method="POST")}}const r=await fetch(e,t);if(r.ok)return r;throw new ReferenceError(r.statusText)}function c(...e){return a(...e).then((e=>e.json()))}function l(...e){return a(...e).then((e=>e.text()))}function u(...e){return l(...e).then((e=>(0,i.BW)(e,0)))}function f(...e){return l(...e).then((e=>(0,s.CO)(e)))}function d(e,t){const n="readAs"+t.charAt(0).toUpperCase()+t.slice(1),r=new FileReader;return new Promise(((t,o)=>{r.addEventListener("load",(()=>t(r.result))),r.addEventListener("error",(()=>o(r.error))),r[n](e)}))}function h(e){const t=new FormData;if(e instanceof URLSearchParams)for(const[n,r]of e.entries())t.append(n,r);else for(const n in e)t.append(n,e[n]);return t}Object.assign(o.A,{fetchStrict:a,fetchJSON:c,fetchText:l,fetchDOM:u,fetchCSV:f,readFile:d,createFormData:h});const p=o.A;var m=r.$W,b=r.Ay,y=r.tU,g=r.Z8,A=r.hI,w=r.UQ,E=r.Sy,S=r.TA,T=r.Yx;export{m as createFormData,b as default,y as fetchCSV,g as fetchDOM,A as fetchJSON,w as fetchStrict,E as fetchText,S as readFile,T as use};