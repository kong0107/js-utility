var kongUtilObject;(()=>{"use strict";var e={d:(t,n)=>{for(var c in n)e.o(n,c)&&!e.o(t,c)&&Object.defineProperty(t,c,{enumerable:!0,get:n[c]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>u,emulateArray:()=>r,objectReduce:()=>s,objectReduceAsync:()=>i,use:()=>c});const n={version:"0.7.7"},c=function(...e){e[0]instanceof Array&&(e=e[0]);for(let t in this)"use"!==t&&(e.length&&!e.includes(t)||(globalThis[t]=this[t]))}.bind(n);Object.assign(n,{use:c});const o=n;function r(e,t,n=this){return Object.keys(n)[e]((e=>t(n[e],e,n)))}function s(e,t,n=this){return Object.keys(n).reduce(((t,c)=>e(t,n[c],c,n)),t)}async function i(e,t,n=this){return Object.keys(n).reduce((async(t,c)=>await e(t,n[c],c,n)),t)}Object.assign(o,{emulateArray:r,objectReduce:s,objectReduceAsync:i});const u=o;kongUtilObject=t})();