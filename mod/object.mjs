var e={735:(e,t,n)=>{n.d(t,{A:()=>r,Y:()=>c});const s={version:"0.8.1"},c=function(...e){e[0]instanceof Array&&(e=e[0]);for(let t in this)"use"!==t&&(e.length&&!e.includes(t)||(globalThis[t]=this[t]))}.bind(s);Object.assign(s,{use:c});const r=s}},t={};function n(s){var c=t[s];if(void 0!==c)return c.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,n),r.exports}n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var s={};n.d(s,{Ay:()=>b,D_:()=>r,K0:()=>o,UZ:()=>i,Yx:()=>c.Y,gl:()=>a,iE:()=>u});var c=n(735);function r(e,t,n=this){return Object.keys(n)[e]((e=>t(n[e],e,n)))}function o(e,t=this){const n={};return Object.keys(t).forEach((s=>{n[s]=e(t[s],s,t)})),n}async function a(e,t=this,n=!1){const s={},c=Object.keys(t);for(let r=0;r<c.length;++r){const o=c[r],a=await e(t[o],o,t);n||(s[o]=a)}if(!n)return s}function i(e,t,n=this){return Object.keys(n).reduce(((t,s)=>e(t,n[s],s,n)),t)}async function u(e,t,n=this){let s=await t;const c=Object.keys(n);for(let t=0;t<c.length;++t){const r=c[t];s=await e(s,n[r],r,n)}return s}Object.assign(c.A,{emulateArray:r,objectMap:o,objectMapAsync:a,objectReduce:i,objectReduceAsync:u});const b=c.A;var y=s.Ay,l=s.D_,f=s.K0,j=s.gl,d=s.UZ,h=s.iE,p=s.Yx;export{y as default,l as emulateArray,f as objectMap,j as objectMapAsync,d as objectReduce,h as objectReduceAsync,p as use};