var kongUtilObject;(()=>{"use strict";var e={d:(t,n)=>{for(var c in n)e.o(n,c)&&!e.o(t,c)&&Object.defineProperty(t,c,{enumerable:!0,get:n[c]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>b,emulateArray:()=>r,objectMap:()=>s,objectMapAsync:()=>i,objectReduce:()=>a,objectReduceAsync:()=>u,use:()=>c});const n={version:"0.8.7"},c=function(...e){e[0]instanceof Array&&(e=e[0]);for(let t in this)"use"!==t&&(e.length&&!e.includes(t)||(globalThis[t]=this[t]))}.bind(n);Object.assign(n,{use:c});const o=n;function r(e,t,n=this){return Object.keys(n)[e]((e=>t(n[e],e,n)))}function s(e,t=this){const n={};return Object.keys(t).forEach((c=>{n[c]=e(t[c],c,t)})),n}async function i(e,t=this,n=!1){const c={},o=Object.keys(t);for(let r=0;r<o.length;++r){const s=o[r],i=await e(t[s],s,t);n||(c[s]=i)}if(!n)return c}function a(e,t,n=this){return Object.keys(n).reduce(((t,c)=>e(t,n[c],c,n)),t)}async function u(e,t,n=this){let c=await t;const o=Object.keys(n);for(let t=0;t<o.length;++t){const r=o[t];c=await e(c,n[r],r,n)}return c}Object.assign(o,{emulateArray:r,objectMap:s,objectMapAsync:i,objectReduce:a,objectReduceAsync:u});const b=o;kongUtilObject=t})();