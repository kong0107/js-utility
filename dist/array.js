var kongUtilArray;(()=>{"use strict";var n={d:(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o:(n,t)=>Object.prototype.hasOwnProperty.call(n,t),r:n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}},t={};n.r(t),n.d(t,{default:()=>w,everyAsync:()=>s,extendArrayPrototype:()=>b,filterAsync:()=>c,findAsync:()=>a,findIndexAsync:()=>y,findLastAsync:()=>f,findLastIndexAsync:()=>u,forEachAsync:()=>l,mapAsync:()=>h,mapToObject:()=>p,reduceAsync:()=>d,reduceRightAsync:()=>A,shuffle:()=>o,someAsync:()=>g,use:()=>r});const e={version:"0.8.5"},r=function(...n){n[0]instanceof Array&&(n=n[0]);for(let t in this)"use"!==t&&(n.length&&!n.includes(t)||(globalThis[t]=this[t]))}.bind(e);Object.assign(e,{use:r});const i=e;function o(n=this){for(let t=n.length-1;t>0;--t){let e=Math.floor(Math.random()*(t+1));[n[t],n[e]]=[n[e],n[t]]}return n}async function s(n,t=this){return(await h(n,t)).every((n=>n))}async function c(n,t=this){const e=[];for(let r=0;r<t.length;++r)await n(t[r],r,t)&&e.push(t[r]);return e}async function a(n,t=this,e=!1){for(let r=0;r<t.length;++r)if(await n(t[r],r,t))return e?r:t[r];return e?-1:void 0}function y(n,t=this){return a(n,t,!0)}async function f(n,t=this,e=!1){for(let r=t.length-1;r>=0;--r)if(await n(t[r],r,t))return e?r:t[r];return e?-1:void 0}function u(n,t=this){return f(n,t,!0)}async function l(n,t=this){return h(n,t,!0)}async function h(n,t=this,e=!1){const r=e?void 0:[];for(let e=0;e<t.length;++e){const i=await n(t[e],e,t);r?.push(i)}return r}async function d(n,t,e=this){let r=t,i=0;if(void 0===t){if(!e.length)throw new TypeError("Reduce of empty array with no initial value");r=e[0],i=1}for(let t=i;t<e.length;++t)r=await n(r,e[t],t,e);return r}async function A(n,t,e=this){let r=t,i=e.length-1;if(void 0===t){if(!e.length)throw new TypeError("Reduce of empty array with no initial value");r=e[i],--i}for(let t=i;t>=0;--t)r=await n(r,e[t],t,e);return r}async function g(n,t=this){return y(n,t).then((n=>-1!==n))}function p(n,t=this){const e={};return t.forEach(((r,i)=>e[r]=n(r,i,t))),e}const v={shuffle:o,everyAsync:s,filterAsync:c,findAsync:a,findIndexAsync:y,findLastAsync:f,findLastIndexAsync:u,forEachAsync:l,mapAsync:h,reduceAsync:d,reduceRightAsync:A,someAsync:g,mapToObject:p},b=()=>Object.assign(Array.prototype,v);Object.assign(i,v,{extendArrayPrototype:b});const w=i;kongUtilArray=t})();