var n={735:(n,t,e)=>{e.d(t,{A:()=>i,Y:()=>s});const r={version:"0.8.3"},s=function(...n){n[0]instanceof Array&&(n=n[0]);for(let t in this)"use"!==t&&(n.length&&!n.includes(t)||(globalThis[t]=this[t]))}.bind(r);Object.assign(r,{use:s});const i=r}},t={};function e(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={exports:{}};return n[r](i,i.exports,e),i.exports}e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t);var r={};e.d(r,{Ay:()=>w,B:()=>d,CH:()=>u,Li:()=>v,S_:()=>b,U0:()=>f,UV:()=>a,Yx:()=>s.Y,bL:()=>A,dS:()=>o,hZ:()=>h,hb:()=>c,k4:()=>i,lX:()=>l,lr:()=>p,oS:()=>y});var s=e(735);function i(n=this){for(let t=n.length-1;t>0;--t){let e=Math.floor(Math.random()*(t+1));[n[t],n[e]]=[n[e],n[t]]}return n}async function a(n,t=this){return(await l(n,t)).every((n=>n))}async function o(n,t=this){const e=[];for(let r=0;r<t.length;++r)await n(t[r],r,t)&&e.push(t[r]);return e}async function c(n,t=this,e=!1){for(let r=0;r<t.length;++r)if(await n(t[r],r,t))return e?r:t[r];return e?-1:void 0}function f(n,t=this){return c(n,t,!0)}async function y(n,t=this,e=!1){for(let r=t.length-1;r>=0;--r)if(await n(t[r],r,t))return e?r:t[r];return e?-1:void 0}function u(n,t=this){return y(n,t,!0)}async function h(n,t=this){return l(n,t,!0)}async function l(n,t=this,e=!1){const r=e?void 0:[];for(let e=0;e<t.length;++e){const s=await n(t[e],e,t);r?.push(s)}return r}async function d(n,t,e=this){let r=t,s=0;if(void 0===t){if(!e.length)throw new TypeError("Reduce of empty array with no initial value");r=e[0],s=1}for(let t=s;t<e.length;++t)r=await n(r,e[t],t,e);return r}async function A(n,t,e=this){let r=t,s=e.length-1;if(void 0===t){if(!e.length)throw new TypeError("Reduce of empty array with no initial value");r=e[s],--s}for(let t=s;t>=0;--t)r=await n(r,e[t],t,e);return r}async function p(n,t=this){return f(n,t).then((n=>-1!==n))}function v(n,t=this){const e={};return t.forEach(((r,s)=>e[r]=n(r,s,t))),e}const g={shuffle:i,everyAsync:a,filterAsync:o,findAsync:c,findIndexAsync:f,findLastAsync:y,findLastIndexAsync:u,forEachAsync:h,mapAsync:l,reduceAsync:d,reduceRightAsync:A,someAsync:p,mapToObject:v},b=()=>Object.assign(Array.prototype,g);Object.assign(s.A,g,{extendArrayPrototype:b});const w=s.A;var x=r.Ay,m=r.UV,L=r.S_,O=r.dS,j=r.hb,S=r.U0,E=r.oS,T=r.CH,I=r.hZ,P=r.lX,R=r.Li,U=r.B,Y=r.bL,k=r.k4,B=r.lr,C=r.Yx;export{x as default,m as everyAsync,L as extendArrayPrototype,O as filterAsync,j as findAsync,S as findIndexAsync,E as findLastAsync,T as findLastIndexAsync,I as forEachAsync,P as mapAsync,R as mapToObject,U as reduceAsync,Y as reduceRightAsync,k as shuffle,B as someAsync,C as use};