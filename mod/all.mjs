var e={744:(e,t,n)=>{n.d(t,{Ay:()=>w,B:()=>d,CH:()=>u,Li:()=>m,S_:()=>A,U0:()=>c,UV:()=>a,bL:()=>y,dS:()=>i,hZ:()=>f,hb:()=>s,k4:()=>o,lX:()=>h,lr:()=>p,oS:()=>l});var r=n(244);function o(e=this){for(let t=e.length-1;t>0;--t){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}async function a(e,t=this){return(await h(e,t)).every((e=>e))}async function i(e,t=this){const n=[];for(let r=0;r<t.length;++r)await e(t[r],r,t)&&n.push(t[r]);return n}async function s(e,t=this,n){for(let r=0;r<t.length;++r)if(await e(t[r],r,t))return n?r:t[r];return n?-1:void 0}function c(e,t){return s(e,t,!0)}async function l(e,t=this,n){for(let r=t.length-1;r>=0;--r)if(await e(t[r],r,t))return n?r:t[r];return n?-1:void 0}function u(e,t){return l(e,t,!0)}async function f(e,t=this){return h(e,t,!0)}async function h(e,t=this,n){const r=n?void 0:[];for(let n=0;n<t.length;++n){const o=await e(t[n],n,t);r?.push(o)}return r}async function d(e,t,n=this){let r=t,o=0;if(void 0===t){if(!n.length)throw new TypeError("Reduce of empty array with no initial value");r=n[0],o=1}for(let t=o;t<n.length;++t)r=await e(r,n[t],t,n);return r}async function y(e,t,n=this){let r=t,o=n.length-1;if(void 0===t){if(!n.length)throw new TypeError("Reduce of empty array with no initial value");r=n[o],--o}for(let t=o;t>=0;--t)r=await e(r,n[t],t,n);return r}function p(e,t){return c(e,t).then((e=>-1!==e))}function m(e,t=this){const n={};return t.forEach(((r,o)=>n[r]=e(r,o,t))),n}const g={shuffle:o,everyAsync:a,filterAsync:i,findAsync:s,findIndexAsync:c,findLastAsync:l,findLastIndexAsync:u,forEachAsync:f,mapAsync:h,reduceAsync:d,reduceRightAsync:y,someAsync:p,mapToObject:m},A=()=>Object.assign(Array.prototype,g);Object.assign(r.A,g,{extendArrayPrototype:A});const w=r.A},463:(e,t,n)=>{n.d(t,{Ay:()=>u,FN:()=>a,Ih:()=>l,fm:()=>s,iu:()=>c,uk:()=>i});var r=n(244),o=n(127);function a(e,t=!1){return(...n)=>new Promise(((r,o)=>e(...n,((e,...n)=>{if(e)return o(e);r(t?n:n[0])}))))}function i(e,t){return new Promise((n=>setTimeout(n,e,t)))}function s(e,t){let n;if(e instanceof Promise)n=t=>e.then(t);else{if(!(e instanceof Function)){if(e instanceof EventTarget)return(0,o.lA)(...arguments);const{target:n,type:r,...a}=e;return a.timeout=t,(0,o.lA)(n,r,a)}n=t=>e(t)}if(n)return new Promise(((e,r)=>{setTimeout(n,0,e),t>0&&setTimeout(r,t,new Event("abort"))}))}async function c(e,t=100,n=0){return new Promise((async(r,o)=>{let a,i;if(a=await e())return r(a);const s=async function(){if(a=await e())return r(a);i=setTimeout(s,t)};i=setTimeout(s,t),n>0&&setTimeout((()=>{clearTimeout(i),o()}),n)}))}function l(e,t){return function(...n){return s(e(...n),t)}}Object.assign(r.A,{promisify:a,wait:i,waitFor:s,waitUntilTrue:c,addTimeLimit:l});const u=r.A},244:(e,t,n)=>{n.d(t,{A:()=>a,Y:()=>o});const r={version:"0.7.12"},o=function(...e){e[0]instanceof Array&&(e=e[0]);for(let t in this)"use"!==t&&(e.length&&!e.includes(t)||(globalThis[t]=this[t]))}.bind(r);Object.assign(r,{use:o});const a=r},754:(e,t,n)=>{n.d(t,{Ay:()=>i,qH:()=>o,vF:()=>a});var r=n(244);function o(e){return()=>(alert(e),e)}function a(){return(...e)=>(console.debug(...arguments,...e),e.length<2?e[0]:e)}Object.assign(r.A,{alerter:o,logger:a});const i=r.A},859:(e,t,n)=>{n.d(t,{$:()=>a,$$:()=>i,AE:()=>m,AL:()=>f,Ay:()=>w,BW:()=>c,EW:()=>y,H7:()=>h,Hk:()=>A,IZ:()=>p,ML:()=>l,XF:()=>g,n:()=>d});var r=n(244),o=n(490);function a(e,t=document){if(t?.querySelector||(t=document),"string"==typeof e)return t.querySelector(e);if(e instanceof Array)return e.map((e=>a(e,t)));const n={};for(let r in e)n[r]=a(e[r],t);return n}function i(e,t=document){if(t?.querySelectorAll||(t=document),"string"==typeof e)return[...t.querySelectorAll(e)];if(e instanceof Array)return e.map((e=>i(e,t)));const n={};for(let r in e)n[r]=i(e[r],t);return n}let s;function c(e,t="body > *"){if("undefined"==typeof DOMParser)throw ReferenceError("DOMParser is not defined");s||(s=new DOMParser);const n=s.parseFromString(e,"text/html");return"string"==typeof t?a(t,n):n}function l(e=(()=>!0),t=(()=>!1),n=document){if("function"!=typeof e&&"function"!=typeof t)return e instanceof Array&&(e=e.join(",")),t instanceof Array&&(t=t.join(",")),i(e,n).filter((e=>!i(t,n).includes(e)));e=u(e,n),t=u(t,n);const r={acceptNode:n=>t(n)?NodeFilter.FILTER_REJECT:e(n)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},o=document.createTreeWalker(n,NodeFilter.SHOW_ALL,r);let a,s=[];for(;a=o.nextNode();)s.push(a);return s}function u(e,t){if("function"==typeof e)return e;if("string"==typeof e){const n=i(e,t);return e=>n.includes(e)}if(e instanceof Array)return e=e.map((e=>e.toUpperCase())),t=>e.includes(t.tagName);throw new TypeError("selector shall be a function, a CSS selector string, or an array of strings representing HTML tags.")}function f(e,t){if("string"!=typeof t&&(t=null),"object"!=typeof e)return document.createTextNode(e);if(e instanceof Node)return e.cloneNode(!0);let[n,r,...a]=e;("object"!=typeof e[1]||e[1]instanceof Array)&&(r={},[n,...a]=e),"svg"===n&&(t="http://www.w3.org/2000/svg");const i=r.namespace??t,s=i?document.createElementNS(i,n):document.createElement(n);for(let e in r){const t=r[e];if(e.startsWith("on"))listen(s,e.substring(2).toLowerCase(),t);else switch(e){case"class":case"className":{const e="string"==typeof t?t.trim().split(/\s+/):t;e[0]&&s.classList.add(...e);break}case"css":case"style":if("string"==typeof t)s.style.cssText=t;else for(let e in t)s.style[(0,o.PT)(e)]=t[e];break;case"data":case"dataset":for(let e in t)s.dataset[(0,o.PT)(e)]=t[e];break;case"namespace":break;default:s.setAttribute(e,t)}}return s.append(...a.map((e=>f(e,i)))),s}function h(e){if("string"==typeof e&&(e=document.querySelector(e)),!(e instanceof Node))throw new TypeError("`template` shall be a `Node` or a string selector to an `Element`.");let t;return e instanceof HTMLTemplateElement?(1!==e.content.childElementCount&&console.warn("only the first element is cloned"),t=document.importNode(e.content,!0).firstElementChild):t=e.cloneNode(!0),i("[id]",t).forEach((e=>e.removeAttribute("id"))),t}function d(){console.error("`kongUtilDom.createElement()` has been removed. Use `kongUtilDom.createElementFromJsonML` instead.")}function y(e=this){console.warn("`kongUtilDom.clearElement()` has been deprecated. Use `Element.replaceChildren()` instead."),e.replaceChildren()}function p(e,t=this){const{clientX:n,clientY:r}=e;return[...t.getClientRects()].some((e=>n>=e.left&&n<=e.right&&r>=e.top&&r<=e.bottom))}function m(e,t){f(["a",{href:e,download:t}]).click()}function g(e,t,n=""){const r=new Blob([e],{type:n}),o=URL.createObjectURL(r);return m(o,t),o}const A=()=>Object.assign(Element.prototype,{clear:y,hasEventIn:p});Object.assign(r.A,{$:a,$$:i,parseHTML:c,getNodes:l,createElementFromTemplate:h,createElementFromJsonML:f,createElement:d,clearElement:y,isEventInElement:p,downloadURL:m,downloadData:g,extendElementPrototype:A});const w=r.A},127:(e,t,n)=>{n.d(t,{Ay:()=>u,Bo:()=>a,KT:()=>o,bc:()=>i,ig:()=>l,lA:()=>c,yT:()=>s});var r=n(244);function o(e,...t){"string"==typeof e&&(e=document.querySelector(e)),e.addEventListener(...t)}function a(e,...t){"string"==typeof e&&(e=document.querySelector(e)),e.removeEventListener(...t)}function i(e,t,n,r){"string"==typeof e&&(e=document.querySelectorAll(e)),"string"==typeof t&&(t=t.split(",").map((e=>e.trim()))),"function"==typeof n&&(n=[n]),e.forEach((e=>{t.forEach((t=>{n.forEach((n=>{e.addEventListener(t,n,r)}))}))}))}function s(e,t,n,r){"string"==typeof e&&(e=document.querySelectorAll(e)),"string"==typeof t&&(t=t.split(",").map((e=>e.trim()))),"function"==typeof n&&(n=[n]),e.forEach((e=>{t.forEach((t=>{n.forEach((n=>{e.removeEventListener(t,n,r)}))}))}))}function c(e,t,n){let r;switch(typeof n){case"undefined":r=0,n={};break;case"number":r=n,n={};break;case"string":r=parseInt(n),n={};break;case"boolean":r=0,n={capture:n};break;case"object":r=n.timeout;break;default:throw TypeError("unknown `option` format")}return n.once=!0,new Promise(((i,s)=>{const c=e=>{n.preventDefault&&e.preventDefault(),n.stopPropagation&&e.stopPropagation(),n.stopImmediatePropagation&&e.stopImmediatePropagation(),i()};o(e,t,c,n),r>0&&setTimeout((()=>{a(e,c,n);const t=new Event("abort");e.dispatchEvent(t),s(t)}),r)}))}const l=()=>Object.assign(EventTarget.prototype,{listen:EventTarget.prototype.addEventListener,unlisten:EventTarget.prototype.removeEventListener,waitFor:function(...e){return c(this,...e)}});Object.assign(r.A,{listen:o,unlisten:a,listens:i,unlistens:s,waitForEvent:c,extendEventTargetPrototype:l});const u=r.A},404:(e,t,n)=>{n.d(t,{AM:()=>i,Ay:()=>l,Kk:()=>s,yh:()=>c});var r=n(244),o=n(490),a=n(241);async function i(e,t){if(e instanceof ImageBitmap)return e;if("string"==typeof e)if(/^https?:\/\//.test(e)){const n=await(0,a.UQ)(e,t);e=await n.blob()}else e=(0,o.i)(e,t);return await createImageBitmap(e)}async function s(e,t,n,r){switch(t){case"canvas":return e;case"dataURL":return e.toDataURL(n,r);case"bitmap":return await createImageBitmap(e);case"blob":return new Promise(((t,o)=>{e.toBlob((e=>{if(e)return t(e);o("the image cannot be created")}),n,r)}));default:throw new TypeError("unknown returnType")}}async function c(e,t){let n=await i(e),r=n.width,o=n.height;const a=n.width/n.height;if(t.scale>0)r=n.width*t.scale,o=n.height*t.scale;else if(!t.width||t.width<0)("scaleDown"!==t.fit||t.height<n.height)&&(r=t.height*a,o=t.height);else if(!t.height||t.height<0)("scaleDown"!==t.fit||t.width<n.width)&&(r=t.width,o=t.width/a);else switch(t.fit??"contain"){case"scaleDown":case"contain":if(t.width/t.height>a?(r=t.height*a,o=t.height):(r=t.width,o=t.width/a),"scaleDown"!==t.fit)break;(r>n.width||o>n.height)&&(r=n.width,o=n.height);break;case"cover":case"fill":{if(r=t.width,o=t.height,"fill"===t.fit)break;let e,i,s,c;const l=t.width/t.height;l>a?(s=n.width,c=s/l,e=0,i=(n.height-c)/2):(c=n.height,s=c*l,e=(n.width-s)/2,i=0),[e,i,s,c]=[e,i,s,c].map(Math.round),n=await createImageBitmap(n,e,i,s,c);break}default:throw new TypeError("unknown fit method",t.fit)}r=Math.round(r),o=Math.round(o);const c=document.createElement("canvas");c.width=r,c.height=o,c.getContext("2d").drawImage(n,0,0,r,o);let l=t.format??"png";return l.startsWith("image/")||(l=("image/"+l).toLowerCase()),s(c,t.returnType??"canvas",l,t.quality)}Object.assign(r.A,{readImage:i,canvasTo:s,resizeImage:c});const l=r.A},820:(e,t,n)=>{n.d(t,{Ay:()=>s,D_:()=>o,UZ:()=>a,iE:()=>i});var r=n(244);function o(e,t,n=this){return Object.keys(n)[e]((e=>t(n[e],e,n)))}function a(e,t,n=this){return Object.keys(n).reduce(((t,r)=>e(t,n[r],r,n)),t)}async function i(e,t,n=this){return Object.keys(n).reduce((async(t,r)=>await e(t,n[r],r,n)),t)}Object.assign(r.A,{emulateArray:o,objectReduce:a,objectReduceAsync:i});const s=r.A},490:(e,t,n)=>{n.d(t,{Ay:()=>h,CO:()=>u,PT:()=>o,Y0:()=>s,_O:()=>c,_P:()=>a,i:()=>f});var r=n(244);function o(e){return e.replace(/-([a-z]\w+)/g,(e=>e[1].toUpperCase()+e.slice(2)))}function a(e,t=!1){let n="",r=e.toString().replaceAll(/\s/g,"").replace(/[點点奌]/,".");if("負负".includes(r.charAt(0))?n="-":r.startsWith("正")&&(n="+"),n&&(r=r.substring(1)),i.forEach(((e,t)=>{r=r.replaceAll(e,t.toString())})),/^\d+(\.\d+)?$/.test(r))r=n+r;else{let e=!1,t=!1,o=[],a=[],i=[],s=null;if(r.split("").forEach((n=>{if(t)return i.unshift(n);if("0123456789".includes(n))return s=n;const r=["十拾什","百佰","千仟"].findIndex((e=>e.includes(n)))+1;if(r)return a[r]=s??"1",s=null;const c=["萬万","億亿","兆","京經经","垓","秭杼","穰壤","溝沟","澗涧","正","載","極"].findIndex((e=>e.includes(n)))+1;if(c||"."===n){a[0]=s;for(let e=0;e<a.length;++e)o[e+4*c]=a[e];s=null}return c?a=[]:"."===n?t=!0:void(e=!0)})),e)return NaN;if(t)o.unshift(...i,".");else{a[0]=s;for(let e=0;e<a.length;++e)o[e]=a[e]}for(let e=0;e<o.length;++e)o[e]||(o[e]="0");r=n+o.reverse().join("")}return t?r:Number.isSafeInteger(parseInt(r))?parseFloat(r):r}const i=["０零○〇洞","１一壹ㄧ弌么","２二貳贰弍兩两","３三參叁弎参叄","４四肆䦉刀","５五伍","６六陸陆","７七柒拐","８八捌杯","９九玖勾"].map((e=>new RegExp(`[${e}]`,"g")));function s(e,t){[e,t]=[e,t].map((e=>e.split(".")));for(let n in e){if(void 0===t[n])return 1;const r=parseInt(e[n],10),o=parseInt(t[n],10);if(r>o)return 1;if(r<o)return-1}return e.length<t.length?-1:0}function c(e,t,n="\r\n"){return e.reduce(((e,r)=>e+t.map((e=>l(r[e]))).join(",")+n),t.map(l).join(",")+n)}function l(e){return/[\x0a\x0d\x22\x2c]/.test(e)?`"${e=e.replaceAll('"','""')}"`:e}function u(e,t=!0){let n=0,r=0,o=[];const a=[];e+="\n";for(let t=0;t<e.length;++t){const i=e.charAt(t);if('"'===i&&++n,!(n%2)&&["\n","\r",","].includes(i)){let n=e.substring(r,t);n.startsWith('"')&&(n=n.slice(1,-1)),n=n.replaceAll('""','"'),r=t+1,","===i?o.push(n):o.length&&(o.push(n),a.push(o),o=[])}}if(!t)return a;const i=a.shift();return a.map((e=>i.reduce(((t,n,r)=>Object.assign(t,{[n]:e[r]})),{})))}function f(e,t){"string"!=typeof t&&(t=e.substring(5,e.indexOf(";")),e=e.slice(t.length+13));const n=atob(e),r=new Uint8Array(n.length);for(let e=0;e<n.length;++e)r[e]=n.charCodeAt(e);return new Blob([r],{type:t})}Object.assign(r.A,{camelize:o,parseChineseNumber:a,compareVersionNumbers:s,toCSV:c,parseCSV:u,base64ToBlob:f});const h=r.A},241:(e,t,n)=>{n.d(t,{$W:()=>h,Ay:()=>d,Sy:()=>c,TA:()=>f,UQ:()=>i,Z8:()=>l,hI:()=>s,tU:()=>u});var r=n(244),o=n(490),a=n(859);async function i(...e){const t=await fetch(...e);if(t.ok)return t;throw new ReferenceError(t.statusText)}function s(...e){return i(...e).then((e=>e.json()))}function c(...e){return i(...e).then((e=>e.text()))}function l(...e){return c(...e).then((e=>(0,a.BW)(e,0)))}function u(...e){return c(...e).then((e=>(0,o.CO)(e)))}function f(e,t){const n="readAs"+t.charAt(0).toUpperCase()+t.slice(1),r=new FileReader;return new Promise(((t,o)=>{r.addEventListener("load",(()=>t(r.result))),r.addEventListener("error",(()=>o(r.error))),r[n](e)}))}function h(e){const t=new FormData;for(const n in e)t.append(n,e[n]);return t}Object.assign(r.A,{fetchStrict:i,fetchJSON:s,fetchText:c,fetchDOM:l,fetchCSV:u,readFile:f,createFormData:h});const d=r.A}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};(()=>{n.d(r,{$:()=>i.$,$$:()=>i.$$,$W:()=>f.$W,AE:()=>i.AE,AL:()=>i.AL,AM:()=>c.AM,Ay:()=>d,B:()=>t.B,BW:()=>i.BW,Bo:()=>s.Bo,CH:()=>t.CH,CO:()=>u.CO,D_:()=>l.D_,EW:()=>i.EW,FN:()=>o.FN,H7:()=>i.H7,Hk:()=>i.Hk,IZ:()=>i.IZ,Ih:()=>o.Ih,KT:()=>s.KT,Kk:()=>c.Kk,Li:()=>t.Li,ML:()=>i.ML,PT:()=>u.PT,S_:()=>t.S_,Sy:()=>f.Sy,TA:()=>f.TA,U0:()=>t.U0,UQ:()=>f.UQ,UV:()=>t.UV,UZ:()=>l.UZ,XF:()=>i.XF,Y0:()=>u.Y0,Yx:()=>e.Y,Z8:()=>f.Z8,_O:()=>u._O,_P:()=>u._P,bL:()=>t.bL,bc:()=>s.bc,dS:()=>t.dS,fm:()=>o.fm,hI:()=>f.hI,hZ:()=>t.hZ,hb:()=>t.hb,i:()=>u.i,iE:()=>l.iE,ig:()=>s.ig,iu:()=>o.iu,k4:()=>t.k4,lA:()=>s.lA,lX:()=>t.lX,lr:()=>t.lr,n:()=>i.n,oS:()=>t.oS,qH:()=>a.qH,tU:()=>f.tU,uk:()=>o.uk,vF:()=>a.vF,yT:()=>s.yT,yh:()=>c.yh,zL:()=>h});var e=n(244),t=n(744),o=n(463),a=n(754),i=n(859),s=n(127),c=n(404),l=n(820),u=n(490),f=n(241);const h=()=>{t.Ay.extendArrayPrototype(),i.Ay.extendElementPrototype(),s.Ay.extendEventTargetPrototype()};Object.assign(e.A,t.Ay,o.Ay,i.Ay,a.Ay,s.Ay,c.Ay,l.Ay,u.Ay,f.Ay,{extendPrototype:h});const d=e.A})();var o=r.$,a=r.$$,i=r.Ih,s=r.qH,c=r.i,l=r.PT,u=r.Kk,f=r.EW,h=r.Y0,d=r.n,y=r.AL,p=r.H7,m=r.$W,g=r.Ay,A=r.XF,w=r.AE,b=r.D_,E=r.UV,v=r.S_,T=r.Hk,L=r.ig,S=r.zL,O=r.tU,k=r.Z8,I=r.hI,P=r.UQ,x=r.Sy,F=r.dS,U=r.hb,j=r.U0,C=r.oS,N=r.CH,M=r.hZ,$=r.ML,D=r.IZ,R=r.KT,B=r.bc,H=r.vF,_=r.lX,W=r.Li,Z=r.UZ,q=r.iE,V=r.CO,K=r._P,X=r.BW,Y=r.FN,z=r.TA,J=r.AM,Q=r.B,G=r.bL,ee=r.yh,te=r.k4,ne=r.lr,re=r._O,oe=r.Bo,ae=r.yT,ie=r.Yx,se=r.uk,ce=r.fm,le=r.lA,ue=r.iu;export{o as $,a as $$,i as addTimeLimit,s as alerter,c as base64ToBlob,l as camelize,u as canvasTo,f as clearElement,h as compareVersionNumbers,d as createElement,y as createElementFromJsonML,p as createElementFromTemplate,m as createFormData,g as default,A as downloadData,w as downloadURL,b as emulateArray,E as everyAsync,v as extendArrayPrototype,T as extendElementPrototype,L as extendEventTargetPrototype,S as extendPrototype,O as fetchCSV,k as fetchDOM,I as fetchJSON,P as fetchStrict,x as fetchText,F as filterAsync,U as findAsync,j as findIndexAsync,C as findLastAsync,N as findLastIndexAsync,M as forEachAsync,$ as getNodes,D as isEventInElement,R as listen,B as listens,H as logger,_ as mapAsync,W as mapToObject,Z as objectReduce,q as objectReduceAsync,V as parseCSV,K as parseChineseNumber,X as parseHTML,Y as promisify,z as readFile,J as readImage,Q as reduceAsync,G as reduceRightAsync,ee as resizeImage,te as shuffle,ne as someAsync,re as toCSV,oe as unlisten,ae as unlistens,ie as use,se as wait,ce as waitFor,le as waitForEvent,ue as waitUntilTrue};