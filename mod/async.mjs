var t={735:(t,e,n)=>{n.d(e,{A:()=>r,Y:()=>o});const i={version:"0.8.4"},o=function(...t){t[0]instanceof Array&&(t=t[0]);for(let e in this)"use"!==e&&(t.length&&!t.includes(e)||(globalThis[e]=this[e]))}.bind(i);Object.assign(i,{use:o});const r=i},436:(t,e,n)=>{n.d(e,{lA:()=>u});var i=n(735);function o(t,...e){"string"==typeof t&&(t=document.querySelector(t)),t.addEventListener(...e)}function r(t,...e){"string"==typeof t&&(t=document.querySelector(t)),t.removeEventListener(...e)}function s(t,e,n,i){"string"==typeof t&&(t=document.querySelectorAll(t)),"string"==typeof e&&(e=e.split(",").map((t=>t.trim()))),"function"==typeof n&&(n=[n]),t.forEach((t=>{e.forEach((e=>{n.forEach((n=>{t.addEventListener(e,n,i)}))}))}))}function a(t,e,n,i){"string"==typeof t&&(t=document.querySelectorAll(t)),"string"==typeof e&&(e=e.split(",").map((t=>t.trim()))),"function"==typeof n&&(n=[n]),t.forEach((t=>{e.forEach((e=>{n.forEach((n=>{t.removeEventListener(e,n,i)}))}))}))}function u(t,e,n){let i;switch(typeof n){case"undefined":i=0,n={};break;case"number":i=n,n={};break;case"string":i=parseInt(n),n={};break;case"boolean":i=0,n={capture:n};break;case"object":i=n.timeout;break;default:throw TypeError("unknown `option` format")}return n.once=!0,new Promise(((s,a)=>{const u=t=>{n.preventDefault&&t.preventDefault(),n.stopPropagation&&t.stopPropagation(),n.stopImmediatePropagation&&t.stopImmediatePropagation(),s()};o(t,e,u,n),i>0&&setTimeout((()=>{r(t,u,n);const e=new Event("abort");t.dispatchEvent(e),a(e)}),i)}))}Object.assign(i.A,{listen:o,unlisten:r,listens:function(){console.warn("`listens()` is deprecated due to its name is too similar to `listen()`. Please change to `listenMulti()`, which has the same behavior."),s(...arguments)},unlistens:function(){console.warn("`unlistens()` is deprecated due to its name is too similar to `unlisten()`. Please change to `unlistenMulti()`, which has the same behavior."),a(...arguments)},listenMulti:s,unlistenMulti:a,waitForEvent:u,extendEventTargetPrototype:()=>Object.assign(EventTarget.prototype,{listen:EventTarget.prototype.addEventListener,unlisten:EventTarget.prototype.removeEventListener,listenMulti:function(){s(this,...arguments)},unlistenMulti:function(){a(this,...arguments)},waitFor:function(){return u(this,...arguments)}})})}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var i={};n.d(i,{Ay:()=>l,FN:()=>s,Ih:()=>f,Yx:()=>o.Y,fm:()=>u,iu:()=>c,uk:()=>a});var o=n(735),r=n(436);function s(t,e=!1){return(...n)=>new Promise(((i,o)=>t(...n,((t,...n)=>{if(t)return o(t);i(e?n:n[0])}))))}function a(t,e){return new Promise((n=>setTimeout(n,t,e)))}function u(t,e){let n;if(t instanceof Promise)n=e=>t.then(e);else{if(!(t instanceof Function)){if(t instanceof EventTarget)return(0,r.lA)(...arguments);const{target:n,type:i,...o}=t;return o.timeout=e,(0,r.lA)(n,i,o)}n=e=>t(e)}if(n)return new Promise(((t,i)=>{setTimeout(n,0,t),e>0&&setTimeout(i,e,new Event("abort"))}))}async function c(t,e=100,n=0){return new Promise((async(i,o)=>{let r,s;if(r=await t())return i(r);const a=async function(){if(r=await t())return i(r);s=setTimeout(a,e)};s=setTimeout(a,e),n>0&&setTimeout((()=>{clearTimeout(s),o()}),n)}))}function f(t,e){return function(...n){return u(t(...n),e)}}Object.assign(o.A,{promisify:s,wait:a,waitFor:u,waitUntilTrue:c,addTimeLimit:f});const l=o.A;var p=i.Ih,m=i.Ay,d=i.FN,h=i.Yx,v=i.uk,y=i.fm,g=i.iu;export{p as addTimeLimit,m as default,d as promisify,h as use,v as wait,y as waitFor,g as waitUntilTrue};