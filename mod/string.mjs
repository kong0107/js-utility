var e={292:(e,t,r)=>{r.d(t,{Z:()=>i,D:()=>s});const n={version:"0.7.7"},s=function(...e){e[0]instanceof Array&&(e=e[0]);for(let t in this)"use"!==t&&(e.length&&!e.includes(t)||(globalThis[t]=this[t]))}.bind(n);Object.assign(n,{use:s});const i=n}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var n={};(()=>{r.d(n,{C9:()=>o,D$:()=>e.D,Jr:()=>c,MJ:()=>l,ZP:()=>f,_A:()=>t,bW:()=>u,uG:()=>s});var e=r(292);function t(e){return e.replace(/-([a-z]\w+)/g,(e=>e[1].toUpperCase()+e.slice(2)))}function s(e,t=!1){let r="",n=e.toString().replaceAll(/\s/g,"").replace(/[點点奌]/,".");if("負负".includes(n.charAt(0))?r="-":n.startsWith("正")&&(r="+"),r&&(n=n.substring(1)),i.forEach(((e,t)=>{n=n.replaceAll(e,t.toString())})),/^\d+(\.\d+)?$/.test(n))n=r+n;else{let e=!1,t=!1,s=[],i=[],o=[],l=null;if(n.split("").forEach((r=>{if(t)return o.unshift(r);if("0123456789".includes(r))return l=r;const n=["十拾什","百佰","千仟"].findIndex((e=>e.includes(r)))+1;if(n)return i[n]=l??"1",l=null;const a=["萬万","億亿","兆","京經经","垓","秭杼","穰壤","溝沟","澗涧","正","載","極"].findIndex((e=>e.includes(r)))+1;if(a||"."===r){i[0]=l;for(let e=0;e<i.length;++e)s[e+4*a]=i[e];l=null}return a?i=[]:"."===r?t=!0:void(e=!0)})),e)return NaN;if(t)s.unshift(...o,".");else{i[0]=l;for(let e=0;e<i.length;++e)s[e]=i[e]}for(let e=0;e<s.length;++e)s[e]||(s[e]="0");n=r+s.reverse().join("")}return t?n:Number.isSafeInteger(parseInt(n))?parseFloat(n):n}const i=["０零○〇洞","１一壹ㄧ弌么","２二貳贰弍兩两","３三參叁弎参叄","４四肆䦉刀","５五伍","６六陸陆","７七柒拐","８八捌杯","９九玖勾"].map((e=>new RegExp(`[${e}]`,"g")));function o(e,t){[e,t]=[e,t].map((e=>e.split(".")));for(let r in e){if(void 0===t[r])return 1;const n=parseInt(e[r],10),s=parseInt(t[r],10);if(n>s)return 1;if(n<s)return-1}return e.length<t.length?-1:0}function l(e,t,r="\r\n"){return e.reduce(((e,n)=>e+t.map((e=>a(n[e]))).join(",")+r),t.map(a).join(",")+r)}function a(e){return/[\x0a\x0d\x22\x2c]/.test(e)?`"${e=e.replaceAll('"','""')}"`:e}function u(e,t=!0){let r=0,n=0,s=[];const i=[];e+="\n";for(let t=0;t<e.length;++t){const o=e.charAt(t);if('"'===o&&++r,!(r%2)&&["\n","\r",","].includes(o)){let r=e.substring(n,t);r.startsWith('"')&&(r=r.slice(1,-1)),r=r.replaceAll('""','"'),n=t+1,","===o?s.push(r):s.length&&(s.push(r),i.push(s),s=[])}}if(!t)return i;const o=i.shift();return i.map((e=>o.reduce(((t,r,n)=>Object.assign(t,{[r]:e[n]})),{})))}function c(e,t){"string"!=typeof t&&(t=e.substring(5,e.indexOf(";")),e=e.slice(t.length+13));const r=atob(e),n=new Uint8Array(r.length);for(let e=0;e<r.length;++e)n[e]=r.charCodeAt(e);return new Blob([n],{type:t})}Object.assign(e.Z,{camelize:t,parseChineseNumber:s,compareVersionNumbers:o,toCSV:l,parseCSV:u,base64ToBlob:c});const f=e.Z})();var s=n.Jr,i=n._A,o=n.C9,l=n.ZP,a=n.bW,u=n.uG,c=n.MJ,f=n.D$;export{s as base64ToBlob,i as camelize,o as compareVersionNumbers,l as default,a as parseCSV,u as parseChineseNumber,c as toCSV,f as use};