var kongUtilString;(()=>{"use strict";var e={281:(e,t,r)=>{r.d(t,{A:()=>s,Y:()=>i});const n={version:r(330).rE},i=function(...e){e[0]instanceof Array&&(e=e[0]);for(let t in this)"use"!==t&&(e.length&&!e.includes(t)||(globalThis[t]=this[t]))}.bind(n);Object.assign(n,{use:i});const s=n},330:e=>{e.exports={rE:"0.8.4"}}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};r.r(n),r.d(n,{base64ToBlob:()=>g,camelize:()=>s,compareVersionNumbers:()=>u,default:()=>d,kebabize:()=>o,parseCSV:()=>p,parseChineseNumber:()=>l,toCSV:()=>c,use:()=>i.Y});var i=r(281);function s(e){return e.replace(/-([a-z]\w+)/g,(e=>e[1].toUpperCase()+e.slice(2)))}function o(e){return e.replace(/[A-Z]+(?![a-z])|[A-Z]/g,((e,t)=>(t?"-":"")+e.toLowerCase()))}function l(e,t=!1){let r="",n=e.toString().replaceAll(/\s/g,"").replace(/[點点奌]/,".");if("負负".includes(n.charAt(0))?r="-":n.startsWith("正")&&(r="+"),r&&(n=n.substring(1)),a.forEach(((e,t)=>{n=n.replaceAll(e,t.toString())})),/^\d+(\.\d+)?$/.test(n))n=r+n;else{let e=!1,t=!1,i=[],s=[],o=[],l=null;if(n.split("").forEach((r=>{if(t)return o.unshift(r);if("0123456789".includes(r))return l=r;const n=["十拾什","百佰","千仟"].findIndex((e=>e.includes(r)))+1;if(n)return s[n]=l??"1",l=null;const a=["萬万","億亿","兆","京經经","垓","秭杼","穰壤","溝沟","澗涧","正","載","極"].findIndex((e=>e.includes(r)))+1;if(a||"."===r){s[0]=l;for(let e=0;e<s.length;++e)i[e+4*a]=s[e];l=null}return a?s=[]:"."===r?t=!0:void(e=!0)})),e)return NaN;if(t)i.unshift(...o,".");else{s[0]=l;for(let e=0;e<s.length;++e)i[e]=s[e]}for(let e=0;e<i.length;++e)i[e]||(i[e]="0");n=r+i.reverse().join("")}return t?n:Number.isSafeInteger(parseInt(n))?parseFloat(n):n}const a=["０零○〇洞","１一壹ㄧ弌么","２二貳贰弍兩两","３三參叁弎参叄","４四肆䦉刀","５五伍","６六陸陆","７七柒拐","８八捌杯","９九玖勾"].map((e=>new RegExp(`[${e}]`,"g")));function u(e,t){[e,t]=[e,t].map((e=>e.split(".")));for(let r in e){if(void 0===t[r])return 1;const n=parseInt(e[r],10),i=parseInt(t[r],10);if(n>i)return 1;if(n<i)return-1}return e.length<t.length?-1:0}function c(e,t,r="\r\n"){return e.reduce(((e,n)=>e+t.map((e=>f(n[e]))).join(",")+r),t.map(f).join(",")+r)}function f(e){return/[\x0a\x0d\x22\x2c]/.test(e)?`"${e=e.replaceAll('"','""')}"`:e}function p(e,t=!0){let r=0,n=0,i=[];const s=[];e+="\n";for(let t=0;t<e.length;++t){const o=e.charAt(t);if('"'===o&&++r,!(r%2)&&["\n","\r",","].includes(o)){let r=e.substring(n,t);r.startsWith('"')&&(r=r.slice(1,-1)),r=r.replaceAll('""','"'),n=t+1,","===o?i.push(r):i.length&&(i.push(r),s.push(i),i=[])}}if(!t)return s;const o=s.shift();return s.map((e=>o.reduce(((t,r,n)=>Object.assign(t,{[r]:e[n]})),{})))}function g(e,t){"string"!=typeof t&&(t=e.substring(5,e.indexOf(";")),e=e.slice(t.length+13));const r=atob(e),n=new Uint8Array(r.length);for(let e=0;e<r.length;++e)n[e]=r.charCodeAt(e);return new Blob([n],{type:t})}Object.assign(i.A,{camelize:s,kebabize:o,parseChineseNumber:l,compareVersionNumbers:u,toCSV:c,parseCSV:p,base64ToBlob:g});const d=i.A;kongUtilString=n})();