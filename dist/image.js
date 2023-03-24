var kongUtilImage;(()=>{"use strict";var e={65:(e,t,n)=>{n.d(t,{D:()=>i,Z:()=>a});const r={version:n(147).i8},i=function(...e){e[0]instanceof Array&&(e=e[0]);for(let t in this)"use"!==t&&(e.length&&!e.includes(t)||(globalThis[t]=this[t]))}.bind(r);Object.assign(r,{use:i});const a=r},324:(e,t,n)=>{n.d(t,{parseHTML:()=>c});var r=n(65),i=n(432);function a(e,t=document){if(t?.querySelector||(t=document),"string"==typeof e)return t.querySelector(e);if(e instanceof Array)return e.map((e=>a(e,t)));const n={};for(let r in e)n[r]=a(e[r],t);return n}function o(e,t=document){if(t?.querySelectorAll||(t=document),"string"==typeof e)return[...t.querySelectorAll(e)];if(e instanceof Array)return e.map((e=>o(e,t)));const n={};for(let r in e)n[r]=o(e[r],t);return n}let s;function c(e,t="body > *"){if("undefined"==typeof DOMParser)throw ReferenceError("DOMParser is not defined");s||(s=new DOMParser);const n=s.parseFromString(e,"text/html");return"string"==typeof t?a(t,n):n}function l(e,t){if("function"==typeof e)return e;if("string"==typeof e){const n=o(e,t);return e=>n.includes(e)}if(e instanceof Array)return e=e.map((e=>e.toUpperCase())),t=>e.includes(t.tagName);throw new TypeError("selector shall be a function, a CSS selector string, or an array of strings representing HTML tags.")}function f(e,t){if("string"!=typeof t&&(t=null),"object"!=typeof e)return document.createTextNode(e);if(e instanceof Node)return e.cloneNode(!0);let[n,r,...a]=e;("object"!=typeof e[1]||e[1]instanceof Array)&&(r={},[n,...a]=e),"svg"===n&&(t="http://www.w3.org/2000/svg");const o=r.namespace??t,s=o?document.createElementNS(o,n):document.createElement(n);for(let e in r){const t=r[e];if(e.startsWith("on"))listen(s,e.substring(2).toLowerCase(),t);else switch(e){case"class":case"className":{const e="string"==typeof t?t.trim().split(/\s+/):t;e[0]&&s.classList.add(...e);break}case"css":case"style":if("string"==typeof t)s.style.cssText=t;else for(let e in t)s.style[(0,i.camelize)(e)]=t[e];break;case"data":case"dataset":for(let e in t)s.dataset[(0,i.camelize)(e)]=t[e];break;case"namespace":break;default:s.setAttribute(e,t)}}return s.append(...a.map((e=>f(e,o)))),s}function u(e=this){console.warn("`kongUtilDom.clearElement()` has been deprecated. Use `Element.replaceChildren()` instead."),e.replaceChildren()}function h(e,t=this){const{clientX:n,clientY:r}=e;return[...t.getClientRects()].some((e=>n>=e.left&&n<=e.right&&r>=e.top&&r<=e.bottom))}Object.assign(r.Z,{$:a,$$:o,parseHTML:c,getNodes:function(e=(()=>!0),t=(()=>!1),n=document){if("function"!=typeof e&&"function"!=typeof t)return e instanceof Array&&(e=e.join(",")),t instanceof Array&&(t=t.join(",")),o(e,n).filter((e=>!o(t,n).includes(e)));e=l(e,n),t=l(t,n);const r={acceptNode:n=>t(n)?NodeFilter.FILTER_REJECT:e(n)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},i=document.createTreeWalker(n,NodeFilter.SHOW_ALL,r);let a,s=[];for(;a=i.nextNode();)s.push(a);return s},createElementFromJsonML:f,clearElement:u,isEventInElement:h,downloadURL:function(e,t){f(["a",{href:e,filename:t}]).click()},extendElementPrototype:()=>Object.assign(Element.prototype,{clear:u,hasEventIn:h})})},432:(e,t,n)=>{n.d(t,{base64ToBlob:()=>c,camelize:()=>i,parseCSV:()=>s});var r=n(65);function i(e){return e.replace(/-([a-z]\w+)/g,(e=>e[1].toUpperCase()+e.slice(2)))}const a=["０零○〇洞","１一壹ㄧ弌么","２二貳贰弍兩两","３三參叁弎参叄","４四肆䦉刀","５五伍","６六陸陆","７七柒拐","８八捌杯","９九玖勾"].map((e=>new RegExp(`[${e}]`,"g")));function o(e){return/[\x0a\x0d\x22\x2c]/.test(e)?`"${e=e.replaceAll('"','""')}"`:e}function s(e,t=!0){let n=0,r=0,i=[];const a=[];e+="\n";for(let t=0;t<e.length;++t){const o=e.charAt(t);if('"'===o&&++n,!(n%2)&&["\n","\r",","].includes(o)){let n=e.substring(r,t);n.startsWith('"')&&(n=n.slice(1,-1)),n=n.replaceAll('""','"'),r=t+1,","===o?i.push(n):i.length&&(i.push(n),a.push(i),i=[])}}if(!t)return a;const o=a.shift();return a.map((e=>o.reduce(((t,n,r)=>Object.assign(t,{[n]:e[r]})),{})))}function c(e,t){"string"!=typeof t&&(t=e.substring(5,e.indexOf(";")),e=e.slice(t.length+13));const n=atob(e),r=new Uint8Array(n.length);for(let e=0;e<n.length;++e)r[e]=n.charCodeAt(e);return new Blob([r],{type:t})}Object.assign(r.Z,{camelize:i,parseChineseNumber:function(e,t=!1){let n="",r=e.toString().replaceAll(/\s/g,"").replace(/[點点奌]/,".");if("負负".includes(r.charAt(0))?n="-":r.startsWith("正")&&(n="+"),n&&(r=r.substring(1)),a.forEach(((e,t)=>{r=r.replaceAll(e,t.toString())})),/^\d+(\.\d+)?$/.test(r))r=n+r;else{let e=!1,t=!1,i=[],a=[],o=[],s=null;if(r.split("").forEach((n=>{if(t)return o.unshift(n);if("0123456789".includes(n))return s=n;const r=["十拾什","百佰","千仟"].findIndex((e=>e.includes(n)))+1;if(r)return a[r]=s??"1",s=null;const c=["萬万","億亿","兆","京經经","垓","秭杼","穰壤","溝沟","澗涧","正","載","極"].findIndex((e=>e.includes(n)))+1;if(c||"."===n){a[0]=s;for(let e=0;e<a.length;++e)i[e+4*c]=a[e];s=null}return c?a=[]:"."===n?t=!0:void(e=!0)})),e)return NaN;if(t)i.unshift(...o,".");else{a[0]=s;for(let e=0;e<a.length;++e)i[e]=a[e]}for(let e=0;e<i.length;++e)i[e]||(i[e]="0");r=n+i.reverse().join("")}return t?r:Number.isSafeInteger(parseInt(r))?parseFloat(r):r},compareVersionNumbers:function(e,t){[e,t]=[e,t].map((e=>e.split(".")));for(let n in e){if(void 0===t[n])return 1;const r=parseInt(e[n],10),i=parseInt(t[n],10);if(r>i)return 1;if(r<i)return-1}return e.length<t.length?-1:0},toCSV:function(e,t,n="\r\n"){return e.reduce(((e,r)=>e+t.map((e=>o(r[e]))).join(",")+n),t.map(o).join(",")+n)},parseCSV:s,base64ToBlob:c})},688:(e,t,n)=>{n.d(t,{fetchStrict:()=>o});var r=n(65),i=n(432),a=n(324);async function o(...e){const t=await fetch(...e);if(t.ok)return t;throw new ReferenceError(t.statusText)}function s(...e){return o(...e).then((e=>e.text()))}Object.assign(r.Z,{fetchStrict:o,fetchJSON:function(...e){return o(...e).then((e=>e.json()))},fetchText:s,fetchDOM:function(...e){return s(...e).then((e=>(0,a.parseHTML)(e,0)))},fetchCSV:function(...e){return s(...e).then((e=>(0,i.parseCSV)(e)))},readFile:function(e,t){const n="readAs"+t.charAt(0).toUpperCase()+t.slice(1),r=new FileReader;return new Promise(((t,i)=>{r.addEventListener("load",(()=>t(r.result))),r.addEventListener("error",(()=>i(r.error))),r[n](e)}))}})},147:e=>{e.exports={i8:"0.7.2"}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{n.r(r),n.d(r,{canvasTo:()=>o,default:()=>c,readImage:()=>a,resizeImage:()=>s,use:()=>e.D});var e=n(65),t=n(432),i=n(688);async function a(e,n){return e instanceof ImageBitmap?e:("string"==typeof e&&(e=/^https?:\/\//.test(e)?await(0,i.fetchStrict)(e).then((e=>e.blob())):(0,t.base64ToBlob)(e,n)),await createImageBitmap(e))}async function o(e,t,n,r){switch(t){case"canvas":return e;case"dataURL":return e.toDataURL(n,r);case"bitmap":return await createImageBitmap(e);case"blob":return new Promise(((t,i)=>{e.toBlob((e=>{if(e)return t(e);i("the image cannot be created")}),n,r)}));default:throw new TypeError("unknown returnType")}}async function s(e,t){let n=await a(e),r=n.width,i=n.height;const s=n.width/n.height;if(t.scale>0)r=n.width*t.scale,i=n.height*t.scale;else if(!t.width||t.width<0)("scaleDown"!==t.fit||t.height<n.height)&&(r=t.height*s,i=t.height);else if(!t.height||t.height<0)("scaleDown"!==t.fit||t.width<n.width)&&(r=t.width,i=t.width/s);else switch(t.fit??"contain"){case"scaleDown":case"contain":if(t.width/t.height>s?(r=t.height*s,i=t.height):(r=t.width,i=t.width/s),"scaleDown"!==t.fit)break;(r>n.width||i>n.height)&&(r=n.width,i=n.height);break;case"cover":case"fill":{if(r=t.width,i=t.height,"fill"===t.fit)break;let e,a,o,c;const l=t.width/t.height;l>s?(o=n.width,c=o/l,e=0,a=(n.height-c)/2):(c=n.height,o=c*l,e=(n.width-o)/2,a=0),[e,a,o,c]=[e,a,o,c].map(Math.round),n=await createImageBitmap(n,e,a,o,c);break}default:throw new TypeError("unknown fit method",t.fit)}r=Math.round(r),i=Math.round(i);const c=document.createElement("canvas");c.width=r,c.height=i,c.getContext("2d").drawImage(n,0,0,r,i);let l=t.format??"png";return l.startsWith("image/")||(l=("image/"+l).toLowerCase()),o(c,t.returnType??"canvas",l,t.quality)}Object.assign(e.Z,{readImage:a,canvasTo:o,resizeImage:s});const c=e.Z})(),kongUtilImage=r})();