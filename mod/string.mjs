var e={735:(e,r,t)=>{t.d(r,{A:()=>a,Y:()=>s});const n={version:"0.8.6"},s=function(...e){e[0]instanceof Array&&(e=e[0]);for(let r in this)"use"!==r&&(e.length&&!e.includes(r)||(globalThis[r]=this[r]))}.bind(n);Object.assign(n,{use:s});const a=n}},r={};function t(n){var s=r[n];if(void 0!==s)return s.exports;var a=r[n]={exports:{}};return e[n](a,a.exports,t),a.exports}t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r);var n={};t.d(n,{Ay:()=>g,CO:()=>p,PT:()=>a,Y0:()=>l,Yx:()=>s.Y,_O:()=>u,_P:()=>o,i:()=>h,ic:()=>i,j8:()=>d});var s=t(735);function a(e){return e.replace(/-([a-z]\w+)/g,(e=>e[1].toUpperCase()+e.slice(2)))}function i(e){return e.replace(/[A-Z]+(?![a-z])|[A-Z]/g,((e,r)=>(r?"-":"")+e.toLowerCase()))}function o(e,r=!1){let t="",n=e.toString().replaceAll(/\s/g,"").replace(/[點点奌]/,".");if("負负".includes(n.charAt(0))?t="-":n.startsWith("正")&&(t="+"),t&&(n=n.substring(1)),c.forEach(((e,r)=>{n=n.replaceAll(e,r.toString())})),/^\d+(\.\d+)?$/.test(n))n=t+n;else{let e=!1,r=!1,s=[],a=[],i=[],o=null;if(n.split("").forEach((t=>{if(r)return i.unshift(t);if("0123456789".includes(t))return o=t;const n=["十拾什","百佰","千仟"].findIndex((e=>e.includes(t)))+1;if(n)return a[n]=o??"1",o=null;const c=["萬万","億亿","兆","京經经","垓","秭杼","穰壤","溝沟","澗涧","正","載","極"].findIndex((e=>e.includes(t)))+1;if(c||"."===t){a[0]=o;for(let e=0;e<a.length;++e)s[e+4*c]=a[e];o=null}return c?a=[]:"."===t?r=!0:void(e=!0)})),e)return NaN;if(r)s.unshift(...i,".");else{a[0]=o;for(let e=0;e<a.length;++e)s[e]=a[e]}for(let e=0;e<s.length;++e)s[e]||(s[e]="0");n=t+s.reverse().join("")}return r?n:Number.isSafeInteger(parseInt(n))?parseFloat(n):n}const c=["０零○〇洞","１一壹ㄧ弌么","２二貳贰弍兩两","３三參叁弎参叄","４四肆䦉刀","５五伍","６六陸陆","７七柒拐","８八捌杯","９九玖勾"].map((e=>new RegExp(`[${e}]`,"g")));function l(e,r){[e,r]=[e,r].map((e=>e.split(".")));for(let t in e){if(void 0===r[t])return 1;const n=parseInt(e[t],10),s=parseInt(r[t],10);if(n>s)return 1;if(n<s)return-1}return e.length<r.length?-1:0}function u(e,r,t="\r\n"){return e.reduce(((e,n)=>e+r.map((e=>f(n[e]))).join(",")+t),r.map(f).join(",")+t)}function f(e){return/[\x0a\x0d\x22\x2c]/.test(e)?`"${e=e.replaceAll('"','""')}"`:e}function p(e,r=!0){let t=0,n=0,s=[];const a=[];e+="\n";for(let r=0;r<e.length;++r){const i=e.charAt(r);if('"'===i&&++t,!(t%2)&&["\n","\r",","].includes(i)){let t=e.substring(n,r);t.startsWith('"')&&(t=t.slice(1,-1)),t=t.replaceAll('""','"'),n=r+1,","===i?s.push(t):s.length&&(s.push(t),a.push(s),s=[])}}if(!r)return a;const i=a.shift();return a.map((e=>i.reduce(((r,t,n)=>Object.assign(r,{[t]:e[n]})),{})))}function h(e,r){"string"!=typeof r&&(r=e.substring(5,e.indexOf(";")),e=e.slice(r.length+13));const t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;++e)n[e]=t.charCodeAt(e);return new Blob([n],{type:r})}function d(e,r){e instanceof URL||(e=new URL(e,document?.baseURI)),r instanceof URLSearchParams||(r=new URLSearchParams(r));for(const[t,n]of r.entries())e.searchParams.set(t,n);return e}Object.assign(s.A,{camelize:a,kebabize:i,parseChineseNumber:o,compareVersionNumbers:l,toCSV:u,parseCSV:p,base64ToBlob:h,modifyURLBySearchParams:d});const g=s.A;var b=n.i,m=n.PT,A=n.Y0,x=n.Ay,y=n.ic,v=n.j8,C=n.CO,O=n._P,P=n._O,S=n.Yx;export{b as base64ToBlob,m as camelize,A as compareVersionNumbers,x as default,y as kebabize,v as modifyURLBySearchParams,C as parseCSV,O as parseChineseNumber,P as toCSV,S as use};