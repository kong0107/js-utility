var kongUtilArray;(()=>{"use strict";var n={d:(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o:(n,t)=>Object.prototype.hasOwnProperty.call(n,t),r:n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}},t={};n.r(t),n.d(t,{default:()=>b,everyAsync:()=>o,extendArrayPrototype:()=>v,filterAsync:()=>s,findAsync:()=>c,findIndexAsync:()=>a,findLastAsync:()=>y,findLastIndexAsync:()=>f,forEachAsync:()=>u,mapAsync:()=>l,mapToObject:()=>g,reduceAsync:()=>d,reduceRightAsync:()=>h,someAsync:()=>A,use:()=>r});const e={version:"0.6.5"},r=function(...n){n[0]instanceof Array&&(n=n[0]);for(let t in this)"use"!==t&&(n.length&&!n.includes(t)||(globalThis[t]=this[t]))}.bind(e);Object.assign(e,{use:r});const i=e;async function o(n,t=this){return(await l(n,t)).every((n=>n))}async function s(n,t=this){const e=[];for(let r=0;r<t.length;++r)await n(t[r],r,t)&&e.push(t[r]);return e}async function c(n,t=this,e){for(let r=0;r<t.length;++r)if(await n(t[r],r,t))return e?r:t[r];return e?-1:void 0}function a(n,t){return c(n,t,!0)}async function y(n,t=this,e){for(let r=t.length-1;r>=0;--r)if(await n(t[r],r,t))return e?r:t[r];return e?-1:void 0}function f(n,t){return y(n,t,!0)}async function u(n,t=this){return l(n,t,!0)}async function l(n,t=this,e){const r=e?void 0:[];for(let e=0;e<t.length;++e)r?.push(await n(t[e],e,t));return r}async function d(n,t,e=this){let r=t,i=0;if(void 0===t){if(!e.length)throw new TypeError("Reduce of empty array with no initial value");r=e[0],i=1}for(let t=i;t<e.length;++t)r=await n(r,e[t],t,e);return r}async function h(n,t,e=this){let r=t,i=e.length-1;if(void 0===t){if(!e.length)throw new TypeError("Reduce of empty array with no initial value");r=e[i],--i}for(let t=i;t>=0;--t)r=await n(r,e[t],t,e);return r}function A(n,t){return a(n,t).then((n=>-1!==n))}function g(n,t=this){const e={};return t.forEach(((r,i)=>e[r]=n(r,i,t))),e}const p={everyAsync:o,filterAsync:s,findAsync:c,findIndexAsync:a,findLastAsync:y,findLastIndexAsync:f,forEachAsync:u,mapAsync:l,reduceAsync:d,reduceRightAsync:h,someAsync:A,mapToObject:g},v=()=>Object.assign(Array.prototype,p);Object.assign(i,p,{extendArrayPrototype:v});const b=i;kongUtilArray=t})();