var e={735:(e,t,n)=>{n.d(t,{A:()=>i,Y:()=>s});const r={version:"0.7.11"},s=function(...e){e[0]instanceof Array&&(e=e[0]);for(let t in this)"use"!==t&&(e.length&&!e.includes(t)||(globalThis[t]=this[t]))}.bind(r);Object.assign(r,{use:s});const i=r}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};(()=>{n.d(r,{Ay:()=>f,CO:()=>u,PT:()=>t,Y0:()=>o,Yx:()=>e.Y,_O:()=>l,_P:()=>s,i:()=>c});var e=n(735);function t(e){return e.replace(/-([a-z]\w+)/g,(e=>e[1].toUpperCase()+e.slice(2)))}function s(e,t=!1){let n="",r=e.toString().replaceAll(/\s/g,"").replace(/[點点奌]/,".");if("負负".includes(r.charAt(0))?n="-":r.startsWith("正")&&(n="+"),n&&(r=r.substring(1)),i.forEach(((e,t)=>{r=r.replaceAll(e,t.toString())})),/^\d+(\.\d+)?$/.test(r))r=n+r;else{let e=!1,t=!1,s=[],i=[],o=[],l=null;if(r.split("").forEach((n=>{if(t)return o.unshift(n);if("0123456789".includes(n))return l=n;const r=["十拾什","百佰","千仟"].findIndex((e=>e.includes(n)))+1;if(r)return i[r]=l??"1",l=null;const a=["萬万","億亿","兆","京經经","垓","秭杼","穰壤","溝沟","澗涧","正","載","極"].findIndex((e=>e.includes(n)))+1;if(a||"."===n){i[0]=l;for(let e=0;e<i.length;++e)s[e+4*a]=i[e];l=null}return a?i=[]:"."===n?t=!0:void(e=!0)})),e)return NaN;if(t)s.unshift(...o,".");else{i[0]=l;for(let e=0;e<i.length;++e)s[e]=i[e]}for(let e=0;e<s.length;++e)s[e]||(s[e]="0");r=n+s.reverse().join("")}return t?r:Number.isSafeInteger(parseInt(r))?parseFloat(r):r}const i=["０零○〇洞","１一壹ㄧ弌么","２二貳贰弍兩两","３三參叁弎参叄","４四肆䦉刀","５五伍","６六陸陆","７七柒拐","８八捌杯","９九玖勾"].map((e=>new RegExp(`[${e}]`,"g")));function o(e,t){[e,t]=[e,t].map((e=>e.split(".")));for(let n in e){if(void 0===t[n])return 1;const r=parseInt(e[n],10),s=parseInt(t[n],10);if(r>s)return 1;if(r<s)return-1}return e.length<t.length?-1:0}function l(e,t,n="\r\n"){return e.reduce(((e,r)=>e+t.map((e=>a(r[e]))).join(",")+n),t.map(a).join(",")+n)}function a(e){return/[\x0a\x0d\x22\x2c]/.test(e)?`"${e=e.replaceAll('"','""')}"`:e}function u(e,t=!0){let n=0,r=0,s=[];const i=[];e+="\n";for(let t=0;t<e.length;++t){const o=e.charAt(t);if('"'===o&&++n,!(n%2)&&["\n","\r",","].includes(o)){let n=e.substring(r,t);n.startsWith('"')&&(n=n.slice(1,-1)),n=n.replaceAll('""','"'),r=t+1,","===o?s.push(n):s.length&&(s.push(n),i.push(s),s=[])}}if(!t)return i;const o=i.shift();return i.map((e=>o.reduce(((t,n,r)=>Object.assign(t,{[n]:e[r]})),{})))}function c(e,t){"string"!=typeof t&&(t=e.substring(5,e.indexOf(";")),e=e.slice(t.length+13));const n=atob(e),r=new Uint8Array(n.length);for(let e=0;e<n.length;++e)r[e]=n.charCodeAt(e);return new Blob([r],{type:t})}Object.assign(e.A,{camelize:t,parseChineseNumber:s,compareVersionNumbers:o,toCSV:l,parseCSV:u,base64ToBlob:c});const f=e.A})();var s=r.i,i=r.PT,o=r.Y0,l=r.Ay,a=r.CO,u=r._P,c=r._O,f=r.Yx;export{s as base64ToBlob,i as camelize,o as compareVersionNumbers,l as default,a as parseCSV,u as parseChineseNumber,c as toCSV,f as use};