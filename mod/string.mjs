var e={292:(e,r,t)=>{t.d(r,{Z:()=>i,D:()=>s});const n={version:"0.6.7"},s=function(...e){e[0]instanceof Array&&(e=e[0]);for(let r in this)"use"!==r&&(e.length&&!e.includes(r)||(globalThis[r]=this[r]))}.bind(n);Object.assign(n,{use:s});const i=n}},r={};function t(n){var s=r[n];if(void 0!==s)return s.exports;var i=r[n]={exports:{}};return e[n](i,i.exports,t),i.exports}t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);var n={};(()=>{t.d(n,{C9:()=>a,D$:()=>e.D,MJ:()=>l,ZP:()=>c,_A:()=>r,bW:()=>u,uG:()=>s});var e=t(292);function r(e){return e.replace(/-([a-z]\w+)/g,(e=>e[1].toUpperCase()+e.slice(2)))}function s(e,r=!1){let t="",n=e.toString().replaceAll(/\s/g,"").replace(/[點点奌]/,".");if("負负".includes(n.charAt(0))?t="-":n.startsWith("正")&&(t="+"),t&&(n=n.substring(1)),i.forEach(((e,r)=>{n=n.replaceAll(e,r.toString())})),/^\d+(\.\d+)?$/.test(n))n=t+n;else{let e=!1,r=!1,s=[],i=[],a=[],l=null;if(n.split("").forEach((t=>{if(r)return a.unshift(t);if("0123456789".includes(t))return l=t;const n=["十拾什","百佰","千仟"].findIndex((e=>e.includes(t)))+1;if(n)return i[n]=l??"1",l=null;const o=["萬万","億亿","兆","京經经","垓","秭杼","穰壤","溝沟","澗涧","正","載","極"].findIndex((e=>e.includes(t)))+1;if(o||"."===t){i[0]=l;for(let e=0;e<i.length;++e)s[e+4*o]=i[e];l=null}return o?i=[]:"."===t?r=!0:void(e=!0)})),e)return NaN;if(r)s.unshift(...a,".");else{i[0]=l;for(let e=0;e<i.length;++e)s[e]=i[e]}for(let e=0;e<s.length;++e)s[e]||(s[e]="0");n=t+s.reverse().join("")}return r?n:Number.isSafeInteger(parseInt(n))?parseFloat(n):n}const i=["０零○〇洞","１一壹ㄧ弌么","２二貳贰弍兩两","３三參叁弎参叄","４四肆䦉刀","５五伍","６六陸陆","７七柒拐","８八捌杯","９九玖勾"].map((e=>new RegExp(`[${e}]`,"g")));function a(e,r){[e,r]=[e,r].map((e=>e.split(".")));for(let t in e){if(void 0===r[t])return 1;const n=parseInt(e[t],10),s=parseInt(r[t],10);if(n>s)return 1;if(n<s)return-1}return e.length<r.length?-1:0}function l(e,r,t="\r\n"){return e.reduce(((e,n)=>e+r.map((e=>o(n[e]))).join(",")+t),r.map(o).join(",")+t)}function o(e){return/[\x0a\x0d\x22\x2c]/.test(e)?`"${e=e.replaceAll('"','""')}"`:e}function u(e,r=!0){let t=0,n=0,s=[];const i=[];e+="\n";for(let r=0;r<e.length;++r){const a=e.charAt(r);if('"'===a&&++t,!(t%2)&&["\n","\r",","].includes(a)){let t=e.substring(n,r);t.startsWith('"')&&(t=t.slice(1,-1)),t=t.replaceAll('""','"'),n=r+1,","===a?s.push(t):s.length&&(s.push(t),i.push(s),s=[])}}if(!r)return i;const a=i.shift();return i.map((e=>a.reduce(((r,t,n)=>Object.assign(r,{[t]:e[n]})),{})))}Object.assign(e.Z,{camelize:r,parseChineseNumber:s,compareVersionNumbers:a,toCSV:l,parseCSV:u});const c=e.Z})();var s=n._A,i=n.C9,a=n.ZP,l=n.bW,o=n.uG,u=n.MJ,c=n.D$;export{s as camelize,i as compareVersionNumbers,a as default,l as parseCSV,o as parseChineseNumber,u as toCSV,c as use};