"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{5295:(y,f,i)=>{i.d(f,{c:()=>r});var d=i(5539),l=i(1086),a=i(8607);const r=(t,o)=>{let e,n;const v=(c,p,w)=>{if(typeof document>"u")return;const E=document.elementFromPoint(c,p);E&&o(E)&&!E.disabled?E!==e&&(s(),u(E,w)):s()},u=(c,p)=>{e=c,n||(n=e);const w=e;(0,d.w)(()=>w.classList.add("ion-activated")),p()},s=(c=!1)=>{if(!e)return;const p=e;(0,d.w)(()=>p.classList.remove("ion-activated")),c&&n!==e&&e.click(),e=void 0};return(0,a.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:c=>v(c.currentX,c.currentY,l.a),onMove:c=>v(c.currentX,c.currentY,l.b),onEnd:()=>{s(!0),(0,l.h)(),n=void 0}})}},8438:(y,f,i)=>{i.d(f,{g:()=>l});var d=i(8476);const l=()=>{if(void 0!==d.w)return d.w.Capacitor}},5572:(y,f,i)=>{i.d(f,{c:()=>d,i:()=>l});const d=(a,r,t)=>"function"==typeof t?t(a,r):"string"==typeof t?a[t]===r[t]:Array.isArray(r)?r.includes(a):a===r,l=(a,r,t)=>void 0!==a&&(Array.isArray(a)?a.some(o=>d(o,r,t)):d(a,r,t))},3351:(y,f,i)=>{i.d(f,{g:()=>d});const d=(o,e,n,v,u)=>a(o[1],e[1],n[1],v[1],u).map(s=>l(o[0],e[0],n[0],v[0],s)),l=(o,e,n,v,u)=>u*(3*e*Math.pow(u-1,2)+u*(-3*n*u+3*n+v*u))-o*Math.pow(u-1,3),a=(o,e,n,v,u)=>t((v-=u)-3*(n-=u)+3*(e-=u)-(o-=u),3*n-6*e+3*o,3*e-3*o,o).filter(c=>c>=0&&c<=1),t=(o,e,n,v)=>{if(0===o)return((o,e,n)=>{const v=e*e-4*o*n;return v<0?[]:[(-e+Math.sqrt(v))/(2*o),(-e-Math.sqrt(v))/(2*o)]})(e,n,v);const u=(3*(n/=o)-(e/=o)*e)/3,s=(2*e*e*e-9*e*n+27*(v/=o))/27;if(0===u)return[Math.pow(-s,1/3)];if(0===s)return[Math.sqrt(-u),-Math.sqrt(-u)];const c=Math.pow(s/2,2)+Math.pow(u/3,3);if(0===c)return[Math.pow(s/2,.5)-e/3];if(c>0)return[Math.pow(-s/2+Math.sqrt(c),1/3)-Math.pow(s/2+Math.sqrt(c),1/3)-e/3];const p=Math.sqrt(Math.pow(-u/3,3)),w=Math.acos(-s/(2*Math.sqrt(Math.pow(-u/3,3)))),E=2*Math.pow(p,1/3);return[E*Math.cos(w/3)-e/3,E*Math.cos((w+2*Math.PI)/3)-e/3,E*Math.cos((w+4*Math.PI)/3)-e/3]}},5083:(y,f,i)=>{i.d(f,{i:()=>d});const d=l=>l&&""!==l.dir?"rtl"===l.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(y,f,i)=>{i.r(f),i.d(f,{startFocusVisible:()=>r});const d="ion-focused",a=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=t=>{let o=[],e=!0;const n=t?t.shadowRoot:document,v=t||document.body,u=M=>{o.forEach(g=>g.classList.remove(d)),M.forEach(g=>g.classList.add(d)),o=M},s=()=>{e=!1,u([])},c=M=>{e=a.includes(M.key),e||u([])},p=M=>{if(e&&void 0!==M.composedPath){const g=M.composedPath().filter(h=>!!h.classList&&h.classList.contains("ion-focusable"));u(g)}},w=()=>{n.activeElement===v&&u([])};return n.addEventListener("keydown",c),n.addEventListener("focusin",p),n.addEventListener("focusout",w),n.addEventListener("touchstart",s,{passive:!0}),n.addEventListener("mousedown",s),{destroy:()=>{n.removeEventListener("keydown",c),n.removeEventListener("focusin",p),n.removeEventListener("focusout",w),n.removeEventListener("touchstart",s),n.removeEventListener("mousedown",s)},setFocus:u}}},1086:(y,f,i)=>{i.d(f,{I:()=>l,a:()=>e,b:()=>n,c:()=>o,d:()=>u,h:()=>v});var d=i(8438),l=function(s){return s.Heavy="HEAVY",s.Medium="MEDIUM",s.Light="LIGHT",s}(l||{});const r={getEngine(){const s=(0,d.g)();if(null!=s&&s.isPluginAvailable("Haptics"))return s.Plugins.Haptics},available(){if(!this.getEngine())return!1;const c=(0,d.g)();return"web"!==(null==c?void 0:c.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(s){const c=this.getEngine();c&&c.impact({style:s.style})},notification(s){const c=this.getEngine();c&&c.notification({type:s.type})},selection(){this.impact({style:l.Light})},selectionStart(){const s=this.getEngine();s&&s.selectionStart()},selectionChanged(){const s=this.getEngine();s&&s.selectionChanged()},selectionEnd(){const s=this.getEngine();s&&s.selectionEnd()}},t=()=>r.available(),o=()=>{t()&&r.selection()},e=()=>{t()&&r.selectionStart()},n=()=>{t()&&r.selectionChanged()},v=()=>{t()&&r.selectionEnd()},u=s=>{t()&&r.impact(s)}},909:(y,f,i)=>{i.d(f,{I:()=>o,a:()=>u,b:()=>t,c:()=>p,d:()=>E,f:()=>s,g:()=>v,i:()=>n,p:()=>w,r:()=>M,s:()=>c});var d=i(467),l=i(4920),a=i(4929);const t="ion-content",o=".ion-content-scroll-host",e=`${t}, ${o}`,n=g=>"ION-CONTENT"===g.tagName,v=function(){var g=(0,d.A)(function*(h){return n(h)?(yield new Promise(m=>(0,l.c)(h,m)),h.getScrollElement()):h});return function(m){return g.apply(this,arguments)}}(),u=g=>g.querySelector(o)||g.querySelector(e),s=g=>g.closest(e),c=(g,h)=>n(g)?g.scrollToTop(h):Promise.resolve(g.scrollTo({top:0,left:0,behavior:h>0?"smooth":"auto"})),p=(g,h,m,O)=>n(g)?g.scrollByPoint(h,m,O):Promise.resolve(g.scrollBy({top:m,left:h,behavior:O>0?"smooth":"auto"})),w=g=>(0,a.b)(g,t),E=g=>{if(n(g)){const m=g.scrollY;return g.scrollY=!1,m}return g.style.setProperty("overflow","hidden"),!0},M=(g,h)=>{n(g)?g.scrollY=h:g.style.removeProperty("overflow")}},3992:(y,f,i)=>{i.d(f,{a:()=>d,b:()=>p,c:()=>e,d:()=>w,e:()=>x,f:()=>o,g:()=>E,h:()=>a,i:()=>l,j:()=>_,k:()=>D,l:()=>n,m:()=>s,n:()=>M,o:()=>u,p:()=>t,q:()=>r,r:()=>C,s:()=>P,t:()=>c,u:()=>m,v:()=>O,w:()=>v,x:()=>g,y:()=>h});const d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",x="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},243:(y,f,i)=>{i.d(f,{c:()=>r,g:()=>t});var d=i(8476),l=i(4920),a=i(4929);const r=(e,n,v)=>{let u,s;if(void 0!==d.w&&"MutationObserver"in d.w){const E=Array.isArray(n)?n:[n];u=new MutationObserver(M=>{for(const g of M)for(const h of g.addedNodes)if(h.nodeType===Node.ELEMENT_NODE&&E.includes(h.slot))return v(),void(0,l.r)(()=>c(h))}),u.observe(e,{childList:!0,subtree:!0})}const c=E=>{var M;s&&(s.disconnect(),s=void 0),s=new MutationObserver(g=>{v();for(const h of g)for(const m of h.removedNodes)m.nodeType===Node.ELEMENT_NODE&&m.slot===n&&w()}),s.observe(null!==(M=E.parentElement)&&void 0!==M?M:E,{subtree:!0,childList:!0})},w=()=>{s&&(s.disconnect(),s=void 0)};return{destroy:()=>{u&&(u.disconnect(),u=void 0),w()}}},t=(e,n,v)=>{const u=null==e?0:e.toString().length,s=o(u,n);if(void 0===v)return s;try{return v(u,n)}catch(c){return(0,a.a)("Exception in provided `counterFormatter`.",c),s}},o=(e,n)=>`${e} / ${n}`},1622:(y,f,i)=>{i.r(f),i.d(f,{KEYBOARD_DID_CLOSE:()=>t,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>C,keyboardDidClose:()=>g,keyboardDidOpen:()=>E,keyboardDidResize:()=>M,resetKeyboardAssist:()=>u,setKeyboardClose:()=>w,setKeyboardOpen:()=>p,startKeyboardAssist:()=>s,trackViewportChanges:()=>O});var d=i(4379);i(8438),i(8476);const r="ionKeyboardDidShow",t="ionKeyboardDidHide";let e={},n={},v=!1;const u=()=>{e={},n={},v=!1},s=_=>{if(d.K.getEngine())c(_);else{if(!_.visualViewport)return;n=C(_.visualViewport),_.visualViewport.onresize=()=>{O(_),E()||M(_)?p(_):g(_)&&w(_)}}},c=_=>{_.addEventListener("keyboardDidShow",D=>p(_,D)),_.addEventListener("keyboardDidHide",()=>w(_))},p=(_,D)=>{h(_,D),v=!0},w=_=>{m(_),v=!1},E=()=>!v&&e.width===n.width&&(e.height-n.height)*n.scale>150,M=_=>v&&!g(_),g=_=>v&&n.height===_.innerHeight,h=(_,D)=>{const x=new CustomEvent(r,{detail:{keyboardHeight:D?D.keyboardHeight:_.innerHeight-n.height}});_.dispatchEvent(x)},m=_=>{const D=new CustomEvent(t);_.dispatchEvent(D)},O=_=>{e=Object.assign({},n),n=C(_.visualViewport)},C=_=>({width:Math.round(_.width),height:Math.round(_.height),offsetTop:_.offsetTop,offsetLeft:_.offsetLeft,pageTop:_.pageTop,pageLeft:_.pageLeft,scale:_.scale})},4379:(y,f,i)=>{i.d(f,{K:()=>r,a:()=>a});var d=i(8438),l=function(t){return t.Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE",t}(l||{}),a=function(t){return t.Body="body",t.Ionic="ionic",t.Native="native",t.None="none",t}(a||{});const r={getEngine(){const t=(0,d.g)();if(null!=t&&t.isPluginAvailable("Keyboard"))return t.Plugins.Keyboard},getResizeMode(){const t=this.getEngine();return null!=t&&t.getResizeMode?t.getResizeMode().catch(o=>{if(o.code!==l.Unimplemented)throw o}):Promise.resolve(void 0)}}},4731:(y,f,i)=>{i.d(f,{c:()=>o});var d=i(467),l=i(8476),a=i(4379);const r=e=>{if(void 0===l.d||e===a.a.None||void 0===e)return null;const n=l.d.querySelector("ion-app");return null!=n?n:l.d.body},t=e=>{const n=r(e);return null===n?0:n.clientHeight},o=function(){var e=(0,d.A)(function*(n){let v,u,s,c;const p=function(){var h=(0,d.A)(function*(){const m=yield a.K.getResizeMode(),O=void 0===m?void 0:m.mode;v=()=>{void 0===c&&(c=t(O)),s=!0,w(s,O)},u=()=>{s=!1,w(s,O)},null==l.w||l.w.addEventListener("keyboardWillShow",v),null==l.w||l.w.addEventListener("keyboardWillHide",u)});return function(){return h.apply(this,arguments)}}(),w=(h,m)=>{n&&n(h,E(m))},E=h=>{if(0===c||c===t(h))return;const m=r(h);return null!==m?new Promise(O=>{const _=new ResizeObserver(()=>{m.clientHeight===c&&(_.disconnect(),O())});_.observe(m)}):void 0};return yield p(),{init:p,destroy:()=>{null==l.w||l.w.removeEventListener("keyboardWillShow",v),null==l.w||l.w.removeEventListener("keyboardWillHide",u),v=u=void 0},isKeyboardVisible:()=>s}});return function(v){return e.apply(this,arguments)}}()},7838:(y,f,i)=>{i.d(f,{c:()=>l});var d=i(467);const l=()=>{let a;return{lock:function(){var t=(0,d.A)(function*(){const o=a;let e;return a=new Promise(n=>e=n),void 0!==o&&(yield o),e});return function(){return t.apply(this,arguments)}}()}}},9001:(y,f,i)=>{i.d(f,{c:()=>a});var d=i(8476),l=i(4920);const a=(r,t,o)=>{let e;const n=()=>!(void 0===t()||void 0!==r.label||null===o()),u=()=>{const c=t();if(void 0===c)return;if(!n())return void c.style.removeProperty("width");const p=o().scrollWidth;if(0===p&&null===c.offsetParent&&void 0!==d.w&&"IntersectionObserver"in d.w){if(void 0!==e)return;const w=e=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(u(),w.disconnect(),e=void 0)},{threshold:.01,root:r});w.observe(c)}else c.style.setProperty("width",.75*p+"px")};return{calculateNotchWidth:()=>{n()&&(0,l.r)(()=>{u()})},destroy:()=>{e&&(e.disconnect(),e=void 0)}}}},7895:(y,f,i)=>{i.d(f,{S:()=>l});const l={bubbles:{dur:1e3,circles:9,fn:(a,r,t)=>{const o=a*r/t-a+"ms",e=2*Math.PI*r/t;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(a,r,t)=>{const o=r/t,e=a*o-a+"ms",n=2*Math.PI*o;return{r:5,style:{top:32*Math.sin(n)+"%",left:32*Math.cos(n)+"%","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(a,r)=>({r:6,style:{left:32-32*r+"%","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(a,r,t)=>({y1:14,y2:26,style:{transform:`rotate(${360/t*r+(r<t/2?180:-180)}deg)`,"animation-delay":a*r/t-a+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(a,r,t)=>({y1:12,y2:20,style:{transform:`rotate(${360/t*r+(r<t/2?180:-180)}deg)`,"animation-delay":a*r/t-a+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(a,r,t)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":a*r/t-a+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(a,r,t)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":a*r/t-a+"ms"}})}}},7166:(y,f,i)=>{i.r(f),i.d(f,{createSwipeBackGesture:()=>t});var d=i(4920),l=i(5083),a=i(8607);i(1970);const t=(o,e,n,v,u)=>{const s=o.ownerDocument.defaultView;let c=(0,l.i)(o);const w=m=>c?-m.deltaX:m.deltaX;return(0,a.createGesture)({el:o,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:m=>(c=(0,l.i)(o),(m=>{const{startX:C}=m;return c?C>=s.innerWidth-50:C<=50})(m)&&e()),onStart:n,onMove:m=>{const C=w(m)/s.innerWidth;v(C)},onEnd:m=>{const O=w(m),C=s.innerWidth,_=O/C,D=(m=>c?-m.velocityX:m.velocityX)(m),x=D>=0&&(D>.2||O>C/2),L=(x?1-_:_)*C;let b=0;if(L>5){const B=L/Math.abs(D);b=Math.min(B,540)}u(x,_<=0?.01:(0,d.j)(0,_,.9999),b)}})}},2935:(y,f,i)=>{i.d(f,{w:()=>d});const d=(r,t,o)=>{if(typeof MutationObserver>"u")return;const e=new MutationObserver(n=>{o(l(n,t))});return e.observe(r,{childList:!0,subtree:!0}),e},l=(r,t)=>{let o;return r.forEach(e=>{for(let n=0;n<e.addedNodes.length;n++)o=a(e.addedNodes[n],t)||o}),o},a=(r,t)=>{if(1!==r.nodeType)return;const o=r;return(o.tagName===t.toUpperCase()?[o]:Array.from(o.querySelectorAll(t))).find(n=>n.value===o.value)}},3724:(y,f,i)=>{i.d(f,{K:()=>l});var d=i(4438);let l=(()=>{var a;class r{}return(a=r).\u0275fac=function(o){return new(o||a)},a.\u0275cmp=d.VBU({type:a,selectors:[["app-explore-container"]],inputs:{name:"name"},decls:7,vars:1,consts:[["id","container"],["target","_blank","rel","noopener noreferrer","href","https://ionicframework.com/docs/components"]],template:function(o,e){1&o&&(d.j41(0,"div",0)(1,"strong"),d.EFF(2),d.k0s(),d.j41(3,"p"),d.EFF(4,"Explore "),d.j41(5,"a",1),d.EFF(6,"UI Components"),d.k0s()()()),2&o&&(d.R7$(2),d.JRh(e.name))},styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),r})()},1307:(y,f,i)=>{i.d(f,{S:()=>t});var d=i(177),l=i(4341),a=i(1075),r=i(4438);let t=(()=>{var o;class e{}return(o=e).\u0275fac=function(v){return new(v||o)},o.\u0275mod=r.$C({type:o}),o.\u0275inj=r.G2t({imports:[d.MD,l.YN,a.bv]}),e})()}}]);