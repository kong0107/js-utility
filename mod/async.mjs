var t={735:(t,e,n)=>{n.d(e,{A:()=>i,Y:()=>o});const r={version:"0.8.0"},o=function(...t){t[0]instanceof Array&&(t=t[0]);for(let e in this)"use"!==e&&(t.length&&!t.includes(e)||(globalThis[e]=this[e]))}.bind(r);Object.assign(r,{use:o});const i=r},436:(t,e,n)=>{n.d(e,{lA:()=>a});var r=n(735);function o(t,...e){"string"==typeof t&&(t=document.querySelector(t)),t.addEventListener(...e)}function i(t,...e){"string"==typeof t&&(t=document.querySelector(t)),t.removeEventListener(...e)}function a(t,e,n){let r;switch(typeof n){case"undefined":r=0,n={};break;case"number":r=n,n={};break;case"string":r=parseInt(n),n={};break;case"boolean":r=0,n={capture:n};break;case"object":r=n.timeout;break;default:throw TypeError("unknown `option` format")}return n.once=!0,new Promise(((a,s)=>{const u=t=>{n.preventDefault&&t.preventDefault(),n.stopPropagation&&t.stopPropagation(),n.stopImmediatePropagation&&t.stopImmediatePropagation(),a()};o(t,e,u,n),r>0&&setTimeout((()=>{i(t,u,n);const e=new Event("abort");t.dispatchEvent(e),s(e)}),r)}))}Object.assign(r.A,{listen:o,unlisten:i,listens:function(t,e,n,r){"string"==typeof t&&(t=document.querySelectorAll(t)),"string"==typeof e&&(e=e.split(",").map((t=>t.trim()))),"function"==typeof n&&(n=[n]),t.forEach((t=>{e.forEach((e=>{n.forEach((n=>{t.addEventListener(e,n,r)}))}))}))},unlistens:function(t,e,n,r){"string"==typeof t&&(t=document.querySelectorAll(t)),"string"==typeof e&&(e=e.split(",").map((t=>t.trim()))),"function"==typeof n&&(n=[n]),t.forEach((t=>{e.forEach((e=>{n.forEach((n=>{t.removeEventListener(e,n,r)}))}))}))},waitForEvent:a,extendEventTargetPrototype:()=>Object.assign(EventTarget.prototype,{listen:EventTarget.prototype.addEventListener,unlisten:EventTarget.prototype.removeEventListener,waitFor:function(...t){return a(this,...t)}})})}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var r={};n.d(r,{Ay:()=>p,FN:()=>a,Ih:()=>f,Yx:()=>o.Y,fm:()=>u,iu:()=>c,uk:()=>s});var o=n(735),i=n(436);function a(t,e=!1){return(...n)=>new Promise(((r,o)=>t(...n,((t,...n)=>{if(t)return o(t);r(e?n:n[0])}))))}function s(t,e){return new Promise((n=>setTimeout(n,t,e)))}function u(t,e){let n;if(t instanceof Promise)n=e=>t.then(e);else{if(!(t instanceof Function)){if(t instanceof EventTarget)return(0,i.lA)(...arguments);const{target:n,type:r,...o}=t;return o.timeout=e,(0,i.lA)(n,r,o)}n=e=>t(e)}if(n)return new Promise(((t,r)=>{setTimeout(n,0,t),e>0&&setTimeout(r,e,new Event("abort"))}))}async function c(t,e=100,n=0){return new Promise((async(r,o)=>{let i,a;if(i=await t())return r(i);const s=async function(){if(i=await t())return r(i);a=setTimeout(s,e)};a=setTimeout(s,e),n>0&&setTimeout((()=>{clearTimeout(a),o()}),n)}))}function f(t,e){return function(...n){return u(t(...n),e)}}Object.assign(o.A,{promisify:a,wait:s,waitFor:u,waitUntilTrue:c,addTimeLimit:f});const p=o.A;var m=r.Ih,l=r.Ay,d=r.FN,v=r.Yx,y=r.uk,g=r.fm,E=r.iu;export{m as addTimeLimit,l as default,d as promisify,v as use,y as wait,g as waitFor,E as waitUntilTrue};