var e={244:(e,t,r)=>{r.d(t,{A:()=>c,Y:()=>n});const s={version:"0.7.12"},n=function(...e){e[0]instanceof Array&&(e=e[0]);for(let t in this)"use"!==t&&(e.length&&!e.includes(t)||(globalThis[t]=this[t]))}.bind(s);Object.assign(s,{use:n});const c=s}},t={};function r(s){var n=t[s];if(void 0!==n)return n.exports;var c=t[s]={exports:{}};return e[s](c,c.exports,r),c.exports}r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var s={};(()=>{r.d(s,{Ay:()=>o,D_:()=>t,UZ:()=>n,Yx:()=>e.Y,iE:()=>c});var e=r(244);function t(e,t,r=this){return Object.keys(r)[e]((e=>t(r[e],e,r)))}function n(e,t,r=this){return Object.keys(r).reduce(((t,s)=>e(t,r[s],s,r)),t)}async function c(e,t,r=this){return Object.keys(r).reduce((async(t,s)=>await e(t,r[s],s,r)),t)}Object.assign(e.A,{emulateArray:t,objectReduce:n,objectReduceAsync:c});const o=e.A})();var n=s.Ay,c=s.D_,o=s.UZ,a=s.iE,i=s.Yx;export{n as default,c as emulateArray,o as objectReduce,a as objectReduceAsync,i as use};