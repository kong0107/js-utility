var e={292:(e,t,r)=>{r.d(t,{Z:()=>c,D:()=>n});const s={version:"0.7.7"},n=function(...e){e[0]instanceof Array&&(e=e[0]);for(let t in this)"use"!==t&&(e.length&&!e.includes(t)||(globalThis[t]=this[t]))}.bind(s);Object.assign(s,{use:n});const c=s}},t={};function r(s){var n=t[s];if(void 0!==n)return n.exports;var c=t[s]={exports:{}};return e[s](c,c.exports,r),c.exports}r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var s={};(()=>{r.d(s,{D$:()=>e.D,Rh:()=>c,Xh:()=>n,ZP:()=>o,oc:()=>t});var e=r(292);function t(e,t,r=this){return Object.keys(r)[e]((e=>t(r[e],e,r)))}function n(e,t,r=this){return Object.keys(r).reduce(((t,s)=>e(t,r[s],s,r)),t)}async function c(e,t,r=this){return Object.keys(r).reduce((async(t,s)=>await e(t,r[s],s,r)),t)}Object.assign(e.Z,{emulateArray:t,objectReduce:n,objectReduceAsync:c});const o=e.Z})();var n=s.ZP,c=s.oc,o=s.Xh,a=s.Rh,u=s.D$;export{n as default,c as emulateArray,o as objectReduce,a as objectReduceAsync,u as use};