var e={65:(e,r,t)=>{t.d(r,{D:()=>o,Z:()=>s});const n={},o=function(...e){e[0]instanceof Array&&(e=e[0]);for(let r in this)"use"!==r&&(e.length&&!e.includes(r)||(globalThis[r]=this[r]))}.bind(n);Object.assign(n,{use:o});const s=n}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var s=r[n]={exports:{}};return e[n](s,s.exports,t),s.exports}t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);var n={};(()=>{t.d(n,{D$:()=>e.D,L$:()=>r,ZP:()=>s,kg:()=>o});var e=t(65);const r=function(e){return()=>(alert(e),e)},o=function(){return(...e)=>(console.debug(...arguments,...e),e.length<2?e[0]:e)};Object.assign(e.Z,{alerter:r,logger:o});const s=e.Z})();var o=n.L$,s=n.ZP,a=n.kg,i=n.D$;export{o as alerter,s as default,a as logger,i as use};