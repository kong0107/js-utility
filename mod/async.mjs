var t={244:(t,e,n)=>{n.d(e,{A:()=>i,Y:()=>o});const r={version:"0.7.12"},o=function(...t){t[0]instanceof Array&&(t=t[0]);for(let e in this)"use"!==e&&(t.length&&!t.includes(e)||(globalThis[e]=this[e]))}.bind(r);Object.assign(r,{use:o});const i=r},127:(t,e,n)=>{n.d(e,{lA:()=>a});var r=n(244);function o(t,...e){"string"==typeof t&&(t=document.querySelector(t)),t.addEventListener(...e)}function i(t,...e){"string"==typeof t&&(t=document.querySelector(t)),t.removeEventListener(...e)}function a(t,e,n){let r;switch(typeof n){case"undefined":r=0,n={};break;case"number":r=n,n={};break;case"string":r=parseInt(n),n={};break;case"boolean":r=0,n={capture:n};break;case"object":r=n.timeout;break;default:throw TypeError("unknown `option` format")}return n.once=!0,new Promise(((a,s)=>{const u=t=>{n.preventDefault&&t.preventDefault(),n.stopPropagation&&t.stopPropagation(),n.stopImmediatePropagation&&t.stopImmediatePropagation(),a()};o(t,e,u,n),r>0&&setTimeout((()=>{i(t,u,n);const e=new Event("abort");t.dispatchEvent(e),s(e)}),r)}))}Object.assign(r.A,{listen:o,unlisten:i,listens:function(t,e,n,r){"string"==typeof t&&(t=document.querySelectorAll(t)),"string"==typeof e&&(e=e.split(",").map((t=>t.trim()))),"function"==typeof n&&(n=[n]),t.forEach((t=>{e.forEach((e=>{n.forEach((n=>{t.addEventListener(e,n,r)}))}))}))},unlistens:function(t,e,n,r){"string"==typeof t&&(t=document.querySelectorAll(t)),"string"==typeof e&&(e=e.split(",").map((t=>t.trim()))),"function"==typeof n&&(n=[n]),t.forEach((t=>{e.forEach((e=>{n.forEach((n=>{t.removeEventListener(e,n,r)}))}))}))},waitForEvent:a,extendEventTargetPrototype:()=>Object.assign(EventTarget.prototype,{listen:EventTarget.prototype.addEventListener,unlisten:EventTarget.prototype.removeEventListener,waitFor:function(...t){return a(this,...t)}})})}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var r={};(()=>{n.d(r,{Ay:()=>c,FN:()=>o,Ih:()=>u,Yx:()=>t.Y,fm:()=>a,iu:()=>s,uk:()=>i});var t=n(244),e=n(127);function o(t,e=!1){return(...n)=>new Promise(((r,o)=>t(...n,((t,...n)=>{if(t)return o(t);r(e?n:n[0])}))))}function i(t,e){return new Promise((n=>setTimeout(n,t,e)))}function a(t,n){let r;if(t instanceof Promise)r=e=>t.then(e);else{if(!(t instanceof Function)){if(t instanceof EventTarget)return(0,e.lA)(...arguments);const{target:r,type:o,...i}=t;return i.timeout=n,(0,e.lA)(r,o,i)}r=e=>t(e)}if(r)return new Promise(((t,e)=>{setTimeout(r,0,t),n>0&&setTimeout(e,n,new Event("abort"))}))}async function s(t,e=100,n=0){return new Promise((async(r,o)=>{let i,a;if(i=await t())return r(i);const s=async function(){if(i=await t())return r(i);a=setTimeout(s,e)};a=setTimeout(s,e),n>0&&setTimeout((()=>{clearTimeout(a),o()}),n)}))}function u(t,e){return function(...n){return a(t(...n),e)}}Object.assign(t.A,{promisify:o,wait:i,waitFor:a,waitUntilTrue:s,addTimeLimit:u});const c=t.A})();var o=r.Ih,i=r.Ay,a=r.FN,s=r.Yx,u=r.uk,c=r.fm,f=r.iu;export{o as addTimeLimit,i as default,a as promisify,s as use,u as wait,c as waitFor,f as waitUntilTrue};