var e={735:(e,t,n)=>{n.d(t,{A:()=>i,Y:()=>o});const r={version:"0.8.3"},o=function(...e){e[0]instanceof Array&&(e=e[0]);for(let t in this)"use"!==t&&(e.length&&!e.includes(t)||(globalThis[t]=this[t]))}.bind(r);Object.assign(r,{use:o});const i=r},860:(e,t,n)=>{n.d(t,{BW:()=>a});var r=n(735),o=n(967);function i(e,t=document){if(t?.querySelector||(t=document),e instanceof Element)return e;if("string"==typeof e)return t.querySelector(e);if(e instanceof Array)return e.map((e=>i(e,t)));const n={};for(let r in e)n[r]=i(e[r],t);return n}function s(e,t=document){if(t?.querySelectorAll||(t=document),"string"==typeof e)return[...t.querySelectorAll(e)];if(e instanceof Array)return e.map((e=>s(e,t)));const n={};for(let r in e)n[r]=s(e[r],t);return n}function a(e,t="body > *"){if("undefined"==typeof DOMParser)throw ReferenceError("DOMParser is not defined");c||(c=new DOMParser);const n=c.parseFromString(e,"text/html");return"string"==typeof t?i(t,n):n}let c;function l(e,t){if("function"==typeof e)return e;if("string"==typeof e){const n=s(e,t);return e=>n.includes(e)}if(e instanceof Array)return e=e.map((e=>e.toUpperCase())),t=>e.includes(t.tagName);throw new TypeError("selector shall be a function, a CSS selector string, or an array of strings representing HTML tags.")}function u(e,t){if("string"!=typeof t&&(t=null),"object"!=typeof e)return document.createTextNode(e);if(e instanceof Node)return e.cloneNode(!0);let[n,r,...o]=e;("object"!=typeof e[1]||e[1]instanceof Array)&&(r={},[n,...o]=e),"svg"===n&&(t="http://www.w3.org/2000/svg");const i=r.namespace??t,s=i?document.createElementNS(i,n):document.createElement(n);return delete r.namespace,p(r,s),s.append(...o.map((e=>u(e,i)))),s}function f(e,t=this){const{clientX:n,clientY:r}=e;return[...t.getClientRects()].some((e=>n>=e.left&&n<=e.right&&r>=e.top&&r<=e.bottom))}function h(e,t){u(["a",{href:e,download:t}]).click()}function d(e="",t=this){e?t.textContent=e:t.replaceChildren()}function m(e,t=null,n=this){"role"==e||e.startsWith("aria-")||(e=`aria-${e}`),null===t?n.removeAttribute(e):n.setAttribute(e,t)}function p(e,t=this){const n={};for(let r in e)r.startsWith("xmlns:")&&(n[r.slice(6)]=e[r],t.setAttribute(r,e[r]));if("aria"in e){const n=e.aria;if(e=Object.assign({},e),null===n)[...t.attributes].forEach((e=>{("role"===e||e.startsWith("aria-"))&&t.removeAttribute(e)}));else for(let t in n)e["role"===t?"role":`aria-${t.toLowerCase()}`]=n[t];delete e.aria}for(let r in e){if(r.startsWith("xmlns:"))continue;const i=e[r],s=r.indexOf(":");if(-1===s){if(r.startsWith("on")){listen(t,r.substring(2).toLowerCase(),i);continue}switch(r){case"class":case"classname":case"className":i?.length?t.setAttribute("class","string"==typeof i?i:i.join(" ")):t.removeAttribute("class");break;case"css":case"style":if(i)if("string"==typeof i)t.style.cssText=i;else for(let e in i){const n=t.style,r=(0,o.ic)(e);null===i[e]?n.removeProperty(r):i[e].endsWith("!important")?n.setProperty(r,i[e].slice(0,-10).trim(),"important"):n.setProperty(r,i[e])}else t.removeAttribute("style");break;case"data":case"dataset":{const e=t.dataset;if(null===i)for(let t in e)delete e[t];else for(let t in i){const n=(0,o.PT)(t);null===i[t]||!1===i[t]?delete e[n]:!0===i[t]?e[n]="":e[n]=i[t]}break}case"text":d(i,t);break;default:null===i||!1===i?t.removeAttribute(r):!0===i?t.setAttribute(r,""):t.setAttribute(r,i)}}else{const e=n[r.slice(0,s)]??null;null===i||!1===i?t.removeAttributeNS(e,r):!0===i?t.setAttributeNS(e,r,""):t.setAttributeNS(e,r,i)}}}Object.assign(r.A,{$:i,$$:s,parseHTML:a,getNodes:function(e=()=>!0,t=()=>!1,n=document){if("function"!=typeof e&&"function"!=typeof t)return e instanceof Array&&(e=e.join(",")),t instanceof Array&&(t=t.join(",")),s(e,n).filter((e=>!s(t,n).includes(e)));e=l(e,n),t=l(t,n);const r={acceptNode:n=>t(n)?NodeFilter.FILTER_REJECT:e(n)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},o=document.createTreeWalker(n,NodeFilter.SHOW_ALL,r);let i,a=[];for(;i=o.nextNode();)a.push(i);return a},createElementFromTemplate:function(e){if("string"==typeof e&&(e=document.querySelector(e)),!(e instanceof Node))throw new TypeError("`template` shall be a `Node` or a string selector to an `Element`.");let t;return e instanceof HTMLTemplateElement?(1!==e.content.childElementCount&&console.warn("only the first element is cloned"),t=document.importNode(e.content,!0).firstElementChild):t=e.cloneNode(!0),s("[id]",t).forEach((e=>e.removeAttribute("id"))),t},createElementFromJsonML:u,createElement:function(){console.error("`kongUtilDom.createElement()` has been removed. Use `kongUtilDom.createElementFromJsonML` instead.")},clearElement:function(e=this){console.warn("`kongUtilDom.clearElement()` has been deprecated. Use `Element.replaceChildren()` instead."),e.replaceChildren()},isEventInElement:f,downloadURL:h,downloadData:function(e,t,n=""){const r=new Blob([e],{type:n}),o=URL.createObjectURL(r);return h(o,t),o},setText:function(e,t){const n=i(e);return null===n?null:(d(t,n),n)},setAria:function(e,t,n=null){const r=i(e);return null===r?null:(m(t,n,r),r)},setAttributes:function(e,t){const n=i(e);return null===n?null:(p(t,n),n)},extendElementPrototype:()=>{const e=Element.prototype;Object.assign(e,{clear:e.replaceChildren,hasEventIn:f,setText:d,setAria:m,set:p})}})},967:(e,t,n)=>{n.d(t,{CO:()=>c,PT:()=>o,i:()=>l,ic:()=>i});var r=n(735);function o(e){return e.replace(/-([a-z]\w+)/g,(e=>e[1].toUpperCase()+e.slice(2)))}function i(e){return e.replace(/[A-Z]+(?![a-z])|[A-Z]/g,((e,t)=>(t?"-":"")+e.toLowerCase()))}const s=["０零○〇洞","１一壹ㄧ弌么","２二貳贰弍兩两","３三參叁弎参叄","４四肆䦉刀","５五伍","６六陸陆","７七柒拐","８八捌杯","９九玖勾"].map((e=>new RegExp(`[${e}]`,"g")));function a(e){return/[\x0a\x0d\x22\x2c]/.test(e)?`"${e=e.replaceAll('"','""')}"`:e}function c(e,t=!0){let n=0,r=0,o=[];const i=[];e+="\n";for(let t=0;t<e.length;++t){const s=e.charAt(t);if('"'===s&&++n,!(n%2)&&["\n","\r",","].includes(s)){let n=e.substring(r,t);n.startsWith('"')&&(n=n.slice(1,-1)),n=n.replaceAll('""','"'),r=t+1,","===s?o.push(n):o.length&&(o.push(n),i.push(o),o=[])}}if(!t)return i;const s=i.shift();return i.map((e=>s.reduce(((t,n,r)=>Object.assign(t,{[n]:e[r]})),{})))}function l(e,t){"string"!=typeof t&&(t=e.substring(5,e.indexOf(";")),e=e.slice(t.length+13));const n=atob(e),r=new Uint8Array(n.length);for(let e=0;e<n.length;++e)r[e]=n.charCodeAt(e);return new Blob([r],{type:t})}Object.assign(r.A,{camelize:o,kebabize:i,parseChineseNumber:function(e,t=!1){let n="",r=e.toString().replaceAll(/\s/g,"").replace(/[點点奌]/,".");if("負负".includes(r.charAt(0))?n="-":r.startsWith("正")&&(n="+"),n&&(r=r.substring(1)),s.forEach(((e,t)=>{r=r.replaceAll(e,t.toString())})),/^\d+(\.\d+)?$/.test(r))r=n+r;else{let e=!1,t=!1,o=[],i=[],s=[],a=null;if(r.split("").forEach((n=>{if(t)return s.unshift(n);if("0123456789".includes(n))return a=n;const r=["十拾什","百佰","千仟"].findIndex((e=>e.includes(n)))+1;if(r)return i[r]=a??"1",a=null;const c=["萬万","億亿","兆","京經经","垓","秭杼","穰壤","溝沟","澗涧","正","載","極"].findIndex((e=>e.includes(n)))+1;if(c||"."===n){i[0]=a;for(let e=0;e<i.length;++e)o[e+4*c]=i[e];a=null}return c?i=[]:"."===n?t=!0:void(e=!0)})),e)return NaN;if(t)o.unshift(...s,".");else{i[0]=a;for(let e=0;e<i.length;++e)o[e]=i[e]}for(let e=0;e<o.length;++e)o[e]||(o[e]="0");r=n+o.reverse().join("")}return t?r:Number.isSafeInteger(parseInt(r))?parseFloat(r):r},compareVersionNumbers:function(e,t){[e,t]=[e,t].map((e=>e.split(".")));for(let n in e){if(void 0===t[n])return 1;const r=parseInt(e[n],10),o=parseInt(t[n],10);if(r>o)return 1;if(r<o)return-1}return e.length<t.length?-1:0},toCSV:function(e,t,n="\r\n"){return e.reduce(((e,r)=>e+t.map((e=>a(r[e]))).join(",")+n),t.map(a).join(",")+n)},parseCSV:c,base64ToBlob:l})},418:(e,t,n)=>{n.d(t,{UQ:()=>a});var r=n(735),o=n(967),i=n(860);async function s(e,t){let n=e.body||t?.body;if(n){let r;switch(n.constructor===HTMLFormElement?r=new FormData(n):n.constructor===Object&&(r=new URLSearchParams(n)),r&&(n=r,e.body&&(e=new Request(e,{body:n})),t?.body&&(t.body=n)),e.method||t?.method){case"GET":if(n instanceof URLSearchParams){let r=e.url??e+"";try{r=new URL(r)}catch(e){if(r.startsWith("/"))r=new URL(document.baseURI).origin+r;else{const e=document.baseURI.lastIndexOf("/");r=document.baseURI.slice(0,e+1)+r}r=new URL(r)}for(const[e,t]of n.entries())r.searchParams.set(e,t);e=e.url?new Request(e,{url:r,body:void 0}):r,t?.body&&delete t.body}break;case"POST":case"PUT":break;case"":console.warn('While using `fetch()` with `body`, `method` shall be set to "POST" or "PUT".'),e.url&&(e=new Request(e,{method:"POST"})),"object"==typeof t&&(t.method="POST")}}return await fetch(e,t)}async function a(...e){const t=await s(...e);if(t.ok)return t;throw new ReferenceError(t.statusText)}function c(...e){return a(...e).then((e=>e.text()))}Object.assign(r.A,{fetchEx:s,fetchStrict:a,fetchJSON:function(...e){return a(...e).then((e=>e.json()))},fetchText:c,fetchDOM:function(...e){return c(...e).then((e=>(0,i.BW)(e,0)))},fetchCSV:function(...e){return c(...e).then((e=>(0,o.CO)(e)))},readFile:function(e,t){const n="readAs"+t.charAt(0).toUpperCase()+t.slice(1),r=new FileReader;return new Promise(((t,o)=>{r.addEventListener("load",(()=>t(r.result))),r.addEventListener("error",(()=>o(r.error))),r[n](e)}))},createFormData:function(e){const t=new FormData;if(e instanceof URLSearchParams)for(const[n,r]of e.entries())t.append(n,r);else for(const n in e)t.append(n,e[n]);return t}})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};n.d(r,{AM:()=>a,Ay:()=>u,Kk:()=>c,Yx:()=>o.Y,yh:()=>l});var o=n(735),i=n(967),s=n(418);async function a(e,t){if(e instanceof ImageBitmap)return e;if("string"==typeof e)if(/^https?:\/\//.test(e)){const n=await(0,s.UQ)(e,t);e=await n.blob()}else e=(0,i.i)(e,t);return await createImageBitmap(e)}async function c(e,t,n,r){switch(t){case"canvas":return e;case"dataURL":return e.toDataURL(n,r);case"bitmap":return await createImageBitmap(e);case"blob":return new Promise(((t,o)=>{e.toBlob((e=>{if(e)return t(e);o("the image cannot be created")}),n,r)}));default:throw new TypeError("unknown returnType")}}async function l(e,t){let n=await a(e),r=n.width,o=n.height;const i=n.width/n.height;if(t.scale>0)r=n.width*t.scale,o=n.height*t.scale;else if(!t.width||t.width<0)("scaleDown"!==t.fit||t.height<n.height)&&(r=t.height*i,o=t.height);else if(!t.height||t.height<0)("scaleDown"!==t.fit||t.width<n.width)&&(r=t.width,o=t.width/i);else switch(t.fit??"contain"){case"scaleDown":case"contain":if(t.width/t.height>i?(r=t.height*i,o=t.height):(r=t.width,o=t.width/i),"scaleDown"!==t.fit)break;(r>n.width||o>n.height)&&(r=n.width,o=n.height);break;case"cover":case"fill":{if(r=t.width,o=t.height,"fill"===t.fit)break;let e,s,a,c;const l=t.width/t.height;l>i?(a=n.width,c=a/l,e=0,s=(n.height-c)/2):(c=n.height,a=c*l,e=(n.width-a)/2,s=0),[e,s,a,c]=[e,s,a,c].map(Math.round),n=await createImageBitmap(n,e,s,a,c);break}default:throw new TypeError("unknown fit method",t.fit)}r=Math.round(r),o=Math.round(o);const s=document.createElement("canvas");s.width=r,s.height=o,s.getContext("2d").drawImage(n,0,0,r,o);let l=t.format??"png";return l.startsWith("image/")||(l=("image/"+l).toLowerCase()),c(s,t.returnType??"canvas",l,t.quality)}Object.assign(o.A,{readImage:a,canvasTo:c,resizeImage:l});const u=o.A;var f=r.Kk,h=r.Ay,d=r.AM,m=r.yh,p=r.Yx;export{f as canvasTo,h as default,d as readImage,m as resizeImage,p as use};