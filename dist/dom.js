var kongUtilDom;(()=>{var e={75:e=>{const t=(()=>{const e=e=>e.replace(/-([a-z])/g,(e=>e[1].toUpperCase())),t=(e,t="anonymous")=>e instanceof Function?e:Function(`return function ${t}(event) { ${e} }`)();return{createElement:function r(n,o=window.document){if("string"==typeof n)return o.createTextNode(n);let s=n.tag;if(!s){if(s=Object.keys(n)[0],!s)throw TypeError("object does not match JsonElement structure.");n=n[s]}const a=o.createElement(s);"string"==typeof n&&(n={text:n});for(let s in n){const i=n[s];if(s=s.toLowerCase(),s.startsWith("on"))a.addEventListener(s.substring(2),t(i,s));else switch(s){case".":case"class":case"classname":{const e="string"==typeof i?i.split(" "):i;a.classList.add(...e.filter((e=>e)));break}case"css":case"style":if("string"==typeof i)a.style.cssText=i;else for(let t in i)a.style[e(t)]=i[t];break;case"!":case"text":a.append(i);break;case"#":a.id=i;break;case"$":case"children":a.append(...i.map((e=>r(e,o))));break;case"data":case"dataset":for(let t in i)a.dataset[e(t)]=i[t];break;case"listeners":for(let e in i)a.addEventListener(e,t(i[e],`on${e}`));break;default:console.assert("string"==typeof i,new TypeError("attribute value must be a string")),a.setAttribute(s,i)}}return a},camelize:e,toFunc:t}})();e.exports&&(e.exports=t)},571:(e,t,r)=>{"use strict";r.d(t,{D:()=>o,Z:()=>s});const n={},o=function(...e){e[0]instanceof Array&&(e=e[0]);for(let t in this)"use"!==t&&(e.length&&!e.includes(t)||(globalThis[t]=this[t]))}.bind(n);Object.assign(n,{use:o});const s=n}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n),r.d(n,{$:()=>o,$$:()=>s,clearElement:()=>f,createElement:()=>l,default:()=>d,extendElementPrototype:()=>u,getNodes:()=>i,parseHTML:()=>a,use:()=>e.D});var e=r(571),t=r(75);const o=(e,t=document)=>{if("string"==typeof e)return t.querySelector(e);if(e instanceof Array)return e.map((e=>o(e,t)));for(let r in e)result[r]=o(e[r],t);return{}},s=(e,t=document)=>{if("string"==typeof e)return[...t.querySelectorAll(e)];if(e instanceof Array)return e.map((e=>s(e,t)));for(let r in e)result[r]=s(e[r],t);return{}},a=(()=>{let e;return(t,r="body > *")=>{if("undefined"==typeof DOMParser)throw ReferenceError("DOMParser is not defined");e||(e=new DOMParser);const n=e.parseFromString(t,"text/html");return"string"==typeof r||r instanceof Array?o(r,n):n}})();function i(e=(()=>!0),t=(()=>!1),r=document){if("function"!=typeof e&&"function"!=typeof t)return e instanceof Array&&(e=e.join(",")),t instanceof Array&&(t=t.join(",")),s(e,r).filter((e=>!s(t,r).includes(e)));e=c(e,r),t=c(t,r);const n={acceptNode:r=>t(r)?NodeFilter.FILTER_REJECT:e(r)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},o=document.createTreeWalker(r,NodeFilter.SHOW_ALL,n);let a,i=[];for(;a=o.nextNode();)i.push(a);return i}function c(e,t){if("function"==typeof e)return e;if("string"==typeof e){const r=s(e,t);return e=>r.includes(e)}if(e instanceof Array)return e=e.map((e=>e.toUpperCase())),t=>e.includes(t.tagName);throw new TypeError("selector shall be a function, a CSS selector string, or an array of strings representing HTML tags.")}const l=t.createElement;function f(e=this){let t;for(;t=e.lastChild;)e.removeChild(node)}const u=()=>Object.assign(Element.prototype,{clear:f});Object.assign(e.Z,{$:o,$$:s,parseHTML:a,getNodes:i,createElement:l,clearElement:f,extendElementPrototype:u});const d=e.Z})(),kongUtilDom=n})();