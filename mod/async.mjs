var e={292:(e,t,n)=>{n.d(t,{Z:()=>i,D:()=>o});const r={version:"0.7.3"},o=function(...e){e[0]instanceof Array&&(e=e[0]);for(let t in this)"use"!==t&&(e.length&&!e.includes(t)||(globalThis[t]=this[t]))}.bind(r);Object.assign(r,{use:o});const i=r},707:(e,t,n)=>{n.d(t,{mA:()=>a});var r=n(292);function o(e){if("string"==typeof e&&(e=document.querySelector(e)),e instanceof EventTarget)return e;throw new TypeError("not an EventTarget")}function i(e,...t){o(e).addEventListener(...t)}function a(e,t,n){let r;switch(typeof n){case"undefined":r=0,n={};break;case"number":r=n,n={};break;case"string":r=parseInt(n),n={};break;case"boolean":r=0,n={capture:n};break;case"object":r=n.timeout;break;default:throw TypeError("unknown `option` format")}return n.once=!0,new Promise(((a,s)=>{const u=e=>{n.preventDefault&&e.preventDefault(),n.stopPropagation&&e.stopPropagation(),n.stopImmediatePropagation&&e.stopImmediatePropagation(),a()};i(e=o(e),t,u,n),r>0&&setTimeout((()=>{!function(e,...t){o(e).removeEventListener(...t)}(e,u,n);const t=new Event("abort");e.dispatchEvent(t),s(t)}),r)}))}Object.assign(r.Z,{listen:i,waitForEvent:a,extendEventTargetPrototype:()=>Object.assign(EventTarget.prototype,{listen:EventTarget.prototype.addEventListener,unlisten:EventTarget.prototype.removeEventListener,waitFor:function(...e){return a(this,...e)}})})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};(()=>{n.d(r,{D$:()=>e.D,Dc:()=>i,Fr:()=>o,X_:()=>a,ZP:()=>u,mg:()=>s});var e=n(292),t=n(707);function o(e,t=!1){return(...n)=>new Promise(((r,o)=>e(...n,((e,...n)=>{if(e)return o(e);r(t?n:n[0])}))))}function i(e,t){return new Promise((n=>setTimeout(n,e,t)))}function a(e,n){let r;if(e instanceof Promise)r=t=>e.then(t);else{if(!(e instanceof Function)){if(e instanceof EventTarget)return(0,t.mA)(...arguments);const{target:r,type:o,...i}=e;return i.timeout=n,(0,t.mA)(r,o,i)}r=t=>e(t)}if(r)return new Promise(((e,t)=>{setTimeout(r,0,e),n>0&&setTimeout(t,n,new Event("abort"))}))}function s(e,t){return function(...n){return a(e(...n),t)}}Object.assign(e.Z,{promisify:o,wait:i,waitFor:a,addTimeLimit:s});const u=e.Z})();var o=r.mg,i=r.ZP,a=r.Fr,s=r.D$,u=r.Dc,c=r.X_;export{o as addTimeLimit,i as default,a as promisify,s as use,u as wait,c as waitFor};