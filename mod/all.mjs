var e={991:e=>{const t=function(){const e=["0０零○〇洞","1１一壹ㄧ弌么","2２二貳贰弍兩两","3３三參叁弎参叄","4４四肆䦉刀","5５五伍","6６六陸陆","7７七柒拐","8８八捌杯","9９九玖勾"],t=["十拾什呀","百佰","千仟"],n=["萬万","億亿","兆","京經经","垓","秭杼","穰壤","溝沟","澗涧","正","載","極"],r=new RegExp("^["+e.join("")+"]+$"),s=new RegExp("(^|[^"+e.slice(1).join("")+"])["+t[0]+"]","g");return o=>{o=o.toString().replace(/\s+/g,"").replace(s,"$1一十");let i,a=0,c=0,u=0,f=1;if("負负".includes(o.charAt(0))&&(f=-1),"正負负".includes(o.charAt(0))&&(o=o.substring(1)),r.test(o)){for(let t of o)a=10*a+e.findIndex((e=>e.includes(t)));return a}for(let r of o)if(i=e.findIndex((e=>e.includes(r))),-1===i)if(i=t.findIndex((e=>e.includes(r))),-1===i){if(i=n.findIndex((e=>e.includes(r))),-1===i)return NaN;c+=u,i<=2?a+=c*10**(4*(i+1)):a=BigInt(a)+BigInt(c)*10n**(4n*(BigInt(i)+1n)),c=u=0}else c+=u*10**(i+1),u=0;else u=10*u+i;return"bigint"!=typeof a?(a+=c+u,-1===f&&(a*=-1)):(a+=BigInt(c+u),-1===f&&(a*=-1n)),a}}();e.exports=t},667:e=>{(t=>{function n(e,o){if("object"!=typeof o&&(o=t.document),"string"==typeof e)return o.createTextNode(e);if(e instanceof Array)return e.map((e=>n(e,o)));if(e.cloneNode)return e.cloneNode(!0);let i=e.tag;if(!i){if(i=Object.keys(e)[0],!i)throw TypeError("object does not match JsonElement structure.");e=e[i]}const a=o.createElement(i);"string"==typeof e&&(e={text:e});for(let t in e){const i=e[t];if(t=t.toLowerCase(),t.startsWith("on"))a.addEventListener(t.substring(2),s(i,t));else switch(t){case".":case"class":case"classname":{const e="string"==typeof i?i.split(" "):i;a.classList.add(...e.filter((e=>e)));break}case"css":case"style":if("string"==typeof i)a.style.cssText=i;else for(let e in i)a.style[r(e)]=i[e];break;case"#":a.id=i;break;case"!":case"text":case"child":a.append(n(i,o));break;case"$":case"childs":case"childnodes":case"children":a.append(...i.map((e=>n(e,o))));break;case"data":case"dataset":for(let e in i)a.dataset[r(e)]=i[e];break;case"listener":case"listeners":for(let e in i)a.addEventListener(e,s(i[e],`on${e}`));break;case"tag":break;default:console.assert("string"==typeof i,new TypeError("attribute value must be a string")),a.setAttribute(t,i)}}return a}const r=e=>e.replace(/-([a-z])/g,(e=>e[1].toUpperCase())),s=(e,t="anonymous")=>e instanceof Function?e:Function(`return function ${t}(event) { ${e} }`)();e.exports?e.exports=n:(t.JSML=t.JSML||{},t.JSML.createElement=n)})(globalThis)},71:(e,t,n)=>{n.d(t,{GA:()=>g,Kh:()=>a,Kp:()=>i,Mo:()=>f,Vl:()=>c,W9:()=>u,ZP:()=>b,bU:()=>o,e$:()=>m,iL:()=>s,qd:()=>l,wE:()=>d,wt:()=>y,yo:()=>p});var r=n(65);async function s(e,t=this){return(await l(e,t)).every((e=>e))}async function o(e,t=this){const n=[];for(let r=0;r<t.length;++r)await e(t[r],r,t)&&n.push(t[r]);return n}async function i(e,t=this,n){for(let r=0;r<t.length;++r)if(await e(t[r],r,t))return n?r:t[r];return n?-1:void 0}function a(e,t){return i(e,t,!0)}async function c(e,t=this,n){for(let r=t.length-1;r>=0;--r)if(await e(t[r],r,t))return n?r:t[r];return n?-1:void 0}function u(e,t){return c(e,t,!0)}async function f(e,t=this){return l(e,t,!0)}async function l(e,t=this,n){const r=n?void 0:[];for(let n=0;n<t.length;++n)r?.push(await e(t[n],n,t));return r}async function d(e,t,n=this){let r=t,s=0;if(void 0===t){if(!n.length)throw new TypeError("Reduce of empty array with no initial value");r=n[0],s=1}for(let t=s;t<n.length;++t)r=await e(r,n[t],t,n);return r}async function p(e,t,n=this){let r=t,s=n.length-1;if(void 0===t){if(!n.length)throw new TypeError("Reduce of empty array with no initial value");r=n[s],--s}for(let t=s;t>=0;--t)r=await e(r,n[t],t,n);return r}function y(e,t){return a(e,t).then((e=>-1!==e))}function g(e,t=this){const n={};return t.forEach(((r,s)=>n[r]=e(r,s,t))),n}const h={everyAsync:s,filterAsync:o,findAsync:i,findIndexAsync:a,findLastAsync:c,findLastIndexAsync:u,forEachAsync:f,mapAsync:l,reduceAsync:d,reduceRightAsync:p,someAsync:y,mapToObject:g},m=()=>Object.assign(Array.prototype,h);Object.assign(r.Z,h,{extendArrayPrototype:m});const b=r.Z},986:(e,t,n)=>{n.d(t,{Dc:()=>i,Fr:()=>o,X_:()=>a,ZP:()=>u,mg:()=>c});var r=n(65),s=n(707);function o(e,t=!1){return(...n)=>new Promise(((r,s)=>e(...n,((e,...n)=>{if(e)return s(e);r(t?n:n[0])}))))}function i(e,t){return new Promise((n=>setTimeout(n,e,t)))}function a(e,t,n=new Error("timeout")){let r;if(e instanceof Promise)r=t=>e.then(t);else{if(!(e instanceof Function)){if(e instanceof EventTarget)return(0,s.mA)(...arguments);const{target:r,type:o,...i}=e;return(0,s.mA)(r,o,i,t,n)}r=t=>e(t)}if(r)return new Promise(((e,s)=>{r(e),t>0&&setTimeout(s,t,n)}))}function c(e,t,n){return function(...r){return a(e(...r),t,n)}}Object.assign(r.Z,{promisify:o,wait:i,waitFor:a,addTimeLimit:c});const u=r.Z},65:(e,t,n)=>{n.d(t,{D:()=>s,Z:()=>o});const r={},s=function(...e){e[0]instanceof Array&&(e=e[0]);for(let t in this)"use"!==t&&(e.length&&!e.includes(t)||(globalThis[t]=this[t]))}.bind(r);Object.assign(r,{use:s});const o=r},101:(e,t,n)=>{n.d(t,{L$:()=>s,ZP:()=>i,kg:()=>o});var r=n(65);const s=function(e){return()=>(alert(e),e)},o=function(){return(...e)=>(console.debug(...arguments,...e),e.length<2?e[0]:e)};Object.assign(r.Z,{alerter:s,logger:o});const i=r.Z},324:(e,t,n)=>{n.d(t,{$:()=>o,$$:()=>i,He:()=>d,ZP:()=>p,az:()=>f,oP:()=>l,rg:()=>a,v$:()=>c});var r=n(65),s=n(667);const o=(e,t=document)=>{if("string"==typeof e)return t.querySelector(e);if(e instanceof Array)return e.map((e=>o(e,t)));for(let n in e)result[n]=o(e[n],t);return{}},i=(e,t=document)=>{if("string"==typeof e)return[...t.querySelectorAll(e)];if(e instanceof Array)return e.map((e=>i(e,t)));for(let n in e)result[n]=i(e[n],t);return{}},a=(()=>{let e;return(t,n="body > *")=>{if("undefined"==typeof DOMParser)throw ReferenceError("DOMParser is not defined");e||(e=new DOMParser);const r=e.parseFromString(t,"text/html");return"string"==typeof n||n instanceof Array?o(n,r):r}})();function c(e=(()=>!0),t=(()=>!1),n=document){if("function"!=typeof e&&"function"!=typeof t)return e instanceof Array&&(e=e.join(",")),t instanceof Array&&(t=t.join(",")),i(e,n).filter((e=>!i(t,n).includes(e)));e=u(e,n),t=u(t,n);const r={acceptNode:n=>t(n)?NodeFilter.FILTER_REJECT:e(n)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},s=document.createTreeWalker(n,NodeFilter.SHOW_ALL,r);let o,a=[];for(;o=s.nextNode();)a.push(o);return a}function u(e,t){if("function"==typeof e)return e;if("string"==typeof e){const n=i(e,t);return e=>n.includes(e)}if(e instanceof Array)return e=e.map((e=>e.toUpperCase())),t=>e.includes(t.tagName);throw new TypeError("selector shall be a function, a CSS selector string, or an array of strings representing HTML tags.")}const f=s;function l(e=this){let t;for(;t=e.lastChild;)e.removeChild(t)}const d=()=>Object.assign(Element.prototype,{clear:l});Object.assign(r.Z,{$:o,$$:i,parseHTML:a,getNodes:c,createElement:f,clearElement:l,extendElementPrototype:d});const p=r.Z},707:(e,t,n)=>{n.d(t,{Ev:()=>o,PB:()=>a,ZP:()=>c,mA:()=>i,oL:()=>s});var r=n(65);const s=(e,...t)=>e.addEventListener(...t),o=(e,...t)=>e.removeEventListener(...t);function i(e,t,...n){let r,i,a;return n.length&&isNaN(n[0])?(r="object"==typeof n[0]?Object.assign({},n[0]):{capture:!!n[0]},n.splice(0,1)):r={capture:!1},r.once=!0,i=n[0]||0,a=n[1]||new Error("timeout"),new Promise(((n,c)=>{const u=e=>{r.preventDefault&&e.preventDefault(),r.stopPropagation&&e.stopPropagation(),r.stopImmediatePropagation&&e.stopImmediatePropagation(),n()};s(e,t,u,r),i>0&&setTimeout((()=>{o(e,u,r),c(a)}),i)}))}const a=()=>Object.assign(EventTarget.prototype,{listen:EventTarget.prototype.addEventListener,unlisten:EventTarget.prototype.removeEventListener,waitFor:function(...e){return i(this,...e)}});Object.assign(r.Z,{listen:s,waitForEvent:i,extendEventTargetPrototype:a});const c=r.Z},701:(e,t,n)=>{n.d(t,{Rh:()=>i,Xh:()=>o,ZP:()=>a,oc:()=>s});var r=n(65);function s(e,t,n=this){return Object.keys(n)[e]((e=>t(n[e],e,n)))}function o(e,t,n=this){return Object.keys(n).reduce(((t,r)=>e(t,n[r],r,n)),t)}async function i(e,t,n=this){return Object.keys(n).reduce((async(t,r)=>await e(t,n[r],r,n)),t)}Object.assign(r.Z,{emulateArray:s,objectReduce:o,objectReduceAsync:i});const a=r.Z},432:(e,t,n)=>{n.d(t,{C9:()=>i,MJ:()=>a,ZP:()=>f,bW:()=>u,uG:()=>o});var r=n(65),s=n(991);function o(e){const t=e.split(/[點点奌]/g);if(t.length>2)throw new TypeError("Not a numeric string",e);let n=t[0].length?s(t[0]):0;if(2===t.length){if("bigint"==typeof n){let e=Number(n);if(n!==BigInt(e))throw new RangeError("exceeds supported range");n=e}let e=0;for(let n=0;n<t[1].length;++n)e+=s(t[1].charAt(n))*10**(-n-1);n>=0?n+=e:n-=e}return n}function i(e,t){[e,t]=[e,t].map((e=>e.split(".")));for(let n in e){if(void 0===t[n])return 1;const r=parseInt(e[n],10),s=parseInt(t[n],10);if(r>s)return 1;if(r<s)return-1}return e.length<t.length?-1:0}function a(e,t,n="\r\n"){return e.reduce(((e,r)=>e+t.map((e=>c(r[e]))).join(",")+n),t.map(c).join(",")+n)}function c(e){return/[\x0a\x0d\x22\x2c]/.test(e)?`"${e=e.replaceAll('"','""')}"`:e}function u(e,t=!0){let n=0,r=0,s=[];const o=[];e+="\n";for(let t=0;t<e.length;++t){const i=e.charAt(t);if('"'===i&&++n,!(n%2)&&["\n","\r",","].includes(i)){let n=e.substring(r,t);n.startsWith('"')&&(n=n.slice(1,-1)),n=n.replaceAll('""','"'),r=t+1,","===i?s.push(n):s.length&&(s.push(n),o.push(s),s=[])}}if(!t)return o;const i=o.shift();return o.map((e=>i.reduce(((t,n,r)=>Object.assign(t,{[n]:e[r]})),{})))}Object.assign(r.Z,{parseChineseNumber:o,compareVersionNumbers:i,toCSV:a,parseCSV:u});const f=r.Z},688:(e,t,n)=>{n.d(t,{$p:()=>f,E1:()=>i,KT:()=>u,ZP:()=>l,ZV:()=>a,s8:()=>c});var r=n(65),s=n(324),o=n(432);const i=(...e)=>fetch(...e).then((e=>{if(e.ok)return e;throw new ReferenceError(e.statusText)})),a=(...e)=>i(...e).then((e=>e.json())),c=(...e)=>i(...e).then((e=>e.text())),u=(...e)=>c(...e).then((e=>(0,s.rg)(e,0))),f=(...e)=>c(...e).then((e=>(0,o.bW)(e)));Object.assign(r.Z,{fetchStrict:i,fetchJSON:a,fetchText:c,fetchDOM:u,fetchCSV:f});const l=r.Z}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};(()=>{n.d(r,{$:()=>i.$,$$:()=>i.$$,$p:()=>f.$p,C9:()=>u.C9,D$:()=>e.D,Dc:()=>s.Dc,E1:()=>f.E1,Ev:()=>a.Ev,Fr:()=>s.Fr,GA:()=>t.GA,He:()=>i.He,KT:()=>f.KT,Kh:()=>t.Kh,Kp:()=>t.Kp,L$:()=>o.L$,MJ:()=>u.MJ,Mo:()=>t.Mo,PB:()=>a.PB,Rh:()=>c.Rh,Vl:()=>t.Vl,W9:()=>t.W9,X_:()=>s.X_,Xh:()=>c.Xh,ZP:()=>d,ZV:()=>f.ZV,az:()=>i.az,bU:()=>t.bU,bW:()=>u.bW,e$:()=>t.e$,iL:()=>t.iL,kg:()=>o.kg,mA:()=>a.mA,mg:()=>s.mg,oL:()=>a.oL,oP:()=>i.oP,oc:()=>c.oc,q7:()=>l,qd:()=>t.qd,rg:()=>i.rg,s8:()=>f.s8,uG:()=>u.uG,v$:()=>i.v$,wE:()=>t.wE,wt:()=>t.wt,yo:()=>t.yo});var e=n(65),t=n(71),s=n(986),o=n(101),i=n(324),a=n(707),c=n(701),u=n(432),f=n(688);const l=()=>{t.ZP.extendArrayPrototype(),i.ZP.extendElementPrototype(),a.ZP.extendEventTargetPrototype()};Object.assign(e.Z,t.ZP,s.ZP,i.ZP,o.ZP,a.ZP,c.ZP,u.ZP,f.ZP,{extendPrototype:l});const d=e.Z})();var s=r.$,o=r.$$,i=r.mg,a=r.L$,c=r.oP,u=r.C9,f=r.az,l=r.ZP,d=r.oc,p=r.iL,y=r.e$,g=r.He,h=r.PB,m=r.q7,b=r.$p,E=r.KT,A=r.ZV,v=r.E1,P=r.s8,w=r.bU,x=r.Kp,Z=r.Kh,$=r.Vl,T=r.W9,j=r.Mo,L=r.v$,O=r.oL,N=r.kg,C=r.qd,I=r.GA,R=r.Xh,S=r.Rh,F=r.bW,M=r.uG,k=r.rg,V=r.Fr,D=r.wE,K=r.yo,W=r.wt,J=r.MJ,B=r.Ev,q=r.D$,G=r.Dc,H=r.X_,X=r.mA;export{s as $,o as $$,i as addTimeLimit,a as alerter,c as clearElement,u as compareVersionNumbers,f as createElement,l as default,d as emulateArray,p as everyAsync,y as extendArrayPrototype,g as extendElementPrototype,h as extendEventTargetPrototype,m as extendPrototype,b as fetchCSV,E as fetchDOM,A as fetchJSON,v as fetchStrict,P as fetchText,w as filterAsync,x as findAsync,Z as findIndexAsync,$ as findLastAsync,T as findLastIndexAsync,j as forEachAsync,L as getNodes,O as listen,N as logger,C as mapAsync,I as mapToObject,R as objectReduce,S as objectReduceAsync,F as parseCSV,M as parseChineseNumber,k as parseHTML,V as promisify,D as reduceAsync,K as reduceRightAsync,W as someAsync,J as toCSV,B as unlisten,q as use,G as wait,H as waitFor,X as waitForEvent};