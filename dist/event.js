var kongUtilEvent;(()=>{"use strict";var e={281:(e,t,n)=>{n.d(t,{A:()=>i,Y:()=>r});const o={version:n(330).rE},r=function(...e){e[0]instanceof Array&&(e=e[0]);for(let t in this)"use"!==t&&(e.length&&!e.includes(t)||(globalThis[t]=this[t]))}.bind(o);Object.assign(o,{use:r});const i=o},330:e=>{e.exports={rE:"0.7.11"}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{n.r(o),n.d(o,{default:()=>p,extendEventTargetPrototype:()=>c,listen:()=>t,listens:()=>i,unlisten:()=>r,unlistens:()=>s,use:()=>e.Y,waitForEvent:()=>a});var e=n(281);function t(e,...t){"string"==typeof e&&(e=document.querySelector(e)),e.addEventListener(...t)}function r(e,...t){"string"==typeof e&&(e=document.querySelector(e)),e.removeEventListener(...t)}function i(e,t,n,o){"string"==typeof e&&(e=document.querySelectorAll(e)),"string"==typeof t&&(t=t.split(",").map((e=>e.trim()))),"function"==typeof n&&(n=[n]),e.forEach((e=>{t.forEach((t=>{n.forEach((n=>{e.addEventListener(t,n,o)}))}))}))}function s(e,t,n,o){"string"==typeof e&&(e=document.querySelectorAll(e)),"string"==typeof t&&(t=t.split(",").map((e=>e.trim()))),"function"==typeof n&&(n=[n]),e.forEach((e=>{t.forEach((t=>{n.forEach((n=>{e.removeEventListener(t,n,o)}))}))}))}function a(e,n,o){let i;switch(typeof o){case"undefined":i=0,o={};break;case"number":i=o,o={};break;case"string":i=parseInt(o),o={};break;case"boolean":i=0,o={capture:o};break;case"object":i=o.timeout;break;default:throw TypeError("unknown `option` format")}return o.once=!0,new Promise(((s,a)=>{const c=e=>{o.preventDefault&&e.preventDefault(),o.stopPropagation&&e.stopPropagation(),o.stopImmediatePropagation&&e.stopImmediatePropagation(),s()};t(e,n,c,o),i>0&&setTimeout((()=>{r(e,c,o);const t=new Event("abort");e.dispatchEvent(t),a(t)}),i)}))}const c=()=>Object.assign(EventTarget.prototype,{listen:EventTarget.prototype.addEventListener,unlisten:EventTarget.prototype.removeEventListener,waitFor:function(...e){return a(this,...e)}});Object.assign(e.A,{listen:t,unlisten:r,listens:i,unlistens:s,waitForEvent:a,extendEventTargetPrototype:c});const p=e.A})(),kongUtilEvent=o})();