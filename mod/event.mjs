var e={735:(e,t,n)=>{n.d(t,{A:()=>s,Y:()=>r});const o={version:"0.8.1"},r=function(...e){e[0]instanceof Array&&(e=e[0]);for(let t in this)"use"!==t&&(e.length&&!e.includes(t)||(globalThis[t]=this[t]))}.bind(o);Object.assign(o,{use:r});const s=o}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o={};n.d(o,{Ay:()=>f,Bo:()=>a,KT:()=>s,Yx:()=>r.Y,bc:()=>i,ig:()=>u,lA:()=>p,yT:()=>c});var r=n(735);function s(e,...t){"string"==typeof e&&(e=document.querySelector(e)),e.addEventListener(...t)}function a(e,...t){"string"==typeof e&&(e=document.querySelector(e)),e.removeEventListener(...t)}function i(e,t,n,o){"string"==typeof e&&(e=document.querySelectorAll(e)),"string"==typeof t&&(t=t.split(",").map((e=>e.trim()))),"function"==typeof n&&(n=[n]),e.forEach((e=>{t.forEach((t=>{n.forEach((n=>{e.addEventListener(t,n,o)}))}))}))}function c(e,t,n,o){"string"==typeof e&&(e=document.querySelectorAll(e)),"string"==typeof t&&(t=t.split(",").map((e=>e.trim()))),"function"==typeof n&&(n=[n]),e.forEach((e=>{t.forEach((t=>{n.forEach((n=>{e.removeEventListener(t,n,o)}))}))}))}function p(e,t,n){let o;switch(typeof n){case"undefined":o=0,n={};break;case"number":o=n,n={};break;case"string":o=parseInt(n),n={};break;case"boolean":o=0,n={capture:n};break;case"object":o=n.timeout;break;default:throw TypeError("unknown `option` format")}return n.once=!0,new Promise(((r,i)=>{const c=e=>{n.preventDefault&&e.preventDefault(),n.stopPropagation&&e.stopPropagation(),n.stopImmediatePropagation&&e.stopImmediatePropagation(),r()};s(e,t,c,n),o>0&&setTimeout((()=>{a(e,c,n);const t=new Event("abort");e.dispatchEvent(t),i(t)}),o)}))}const u=()=>Object.assign(EventTarget.prototype,{listen:EventTarget.prototype.addEventListener,unlisten:EventTarget.prototype.removeEventListener,waitFor:function(...e){return p(this,...e)}});Object.assign(r.A,{listen:s,unlisten:a,listens:i,unlistens:c,waitForEvent:p,extendEventTargetPrototype:u});const f=r.A;var l=o.Ay,v=o.ig,y=o.KT,d=o.bc,g=o.Bo,E=o.yT,m=o.Yx,b=o.lA;export{l as default,v as extendEventTargetPrototype,y as listen,d as listens,g as unlisten,E as unlistens,m as use,b as waitForEvent};