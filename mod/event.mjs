var e={65:(e,t,n)=>{n.d(t,{D:()=>o,Z:()=>a});const r={},o=function(...e){e[0]instanceof Array&&(e=e[0]);for(let t in this)"use"!==t&&(e.length&&!e.includes(t)||(globalThis[t]=this[t]))}.bind(r);Object.assign(r,{use:o});const a=r}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};(()=>{n.d(r,{D$:()=>e.D,Ev:()=>o,PB:()=>s,ZP:()=>i,mA:()=>a,oL:()=>t});var e=n(65);const t=(e,...t)=>e.addEventListener(...t),o=(e,...t)=>e.removeEventListener(...t);function a(e,n,r){let a;switch(typeof r){case"undefined":a=0,r={};break;case"number":a=r,r={};break;case"string":a=parseInt(r),r={};break;case"boolean":a=0,r={capture:r};break;case"object":a=r.timeout;break;default:throw TypeError()}return r.once=!0,new Promise(((s,i)=>{const p=e=>{r.preventDefault&&e.preventDefault(),r.stopPropagation&&e.stopPropagation(),r.stopImmediatePropagation&&e.stopImmediatePropagation(),s()};t(e,n,p,r),a>0&&setTimeout((()=>{o(e,p,r);const t=new Event("abort");e.dispatchEvent(t),i(t)}),a)}))}const s=()=>Object.assign(EventTarget.prototype,{listen:EventTarget.prototype.addEventListener,unlisten:EventTarget.prototype.removeEventListener,waitFor:function(...e){return a(this,...e)}});Object.assign(e.Z,{listen:t,waitForEvent:a,extendEventTargetPrototype:s});const i=e.Z})();var o=r.ZP,a=r.PB,s=r.oL,i=r.Ev,p=r.D$,c=r.mA;export{o as default,a as extendEventTargetPrototype,s as listen,i as unlisten,p as use,c as waitForEvent};