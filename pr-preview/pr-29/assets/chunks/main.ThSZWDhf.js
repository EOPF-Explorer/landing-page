var Ke=Object.defineProperty;var ge=t=>{throw TypeError(t)};var Qe=(t,r,e)=>r in t?Ke(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e;var u=(t,r,e)=>Qe(t,typeof r!="symbol"?r+"":r,e),ne=(t,r,e)=>r.has(t)||ge("Cannot "+e);var d=(t,r,e)=>(ne(t,r,"read from private field"),e?e.call(t):r.get(t)),c=(t,r,e)=>r.has(t)?ge("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(t):r.set(t,e),w=(t,r,e,o)=>(ne(t,r,"write to private field"),o?o.call(t,e):r.set(t,e),e),b=(t,r,e)=>(ne(t,r,"access private method"),e);import{x as n,b as v,E as L,i as le,a as Ge}from"./addCommonStyleSheet.CUz47vo_.js";import{n as p}from"./when.BR7zwNJC.js";import{c as We}from"./repeat.NZwNcbi2.js";import{W as et,S as tt,o as I,_ as he,l as xe}from"./if-defined.C85O-uCq.js";import{o as rt}from"./unsafe-html.CCR-6YHZ.js";import{o as Z}from"./map.DiiNQ3pp.js";import{_ as ot}from"./index.BUIxO2d3.js";import{g as at}from"./getElement.CdRlZPdn.js";import"./directive.CvdRHFdJ.js";import"./directive-helpers.DoxLH0Dp.js";import"./commonjsHelpers.BosuxZz1.js";async function it(t){let r=new URL(t),e=r.searchParams;e.set("SERVICE","WMS"),e.set("REQUEST","GetCapabilities");let o=r.toString();const a=await fetch(o);if(a.ok){const i=await a.text();return new et(i).toJSON()}else throw new Error(`Error: ${a.status}`)}function ce(t){const r=/\b(?:wms|ows)\b/i,e=/{(?:z|x|y-?)}\/{(?:z|x|y-?)}\/{(?:z|x|y-?)}/i;return r.test(t)?"TileWMS":e.test(t)?"XYZ":!1}function nt(t){const e=/^(?:(?:https?|ftp):\/\/|\/\/)?(?:localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:\w+[\w-]*\.)+\w+)(?::\d+)?(?:\/\S*)?$/.test(t),o=ce(t);return!!(t&&e&&o)}function ke(t){return t.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,'"$2": ').replace(/,\s*}/g,"}").replace(/,\s*]/g,"]").replace(/\s*(\{|}|\[|\]|,)\s*/g,"$1").replaceAll('": //',"://")}function lt(t){try{return JSON.parse(ke(t)),!!t}catch{return!1}}function st(t,r){const e=new URL(t).searchParams;Object.entries(r).forEach(([l,s])=>{typeof s=="object"&&!Array.isArray(s)&&s!==null?Object.keys(s).forEach(m=>{e.set(m,s[m])}):Array.isArray(s)?(e.delete(l),s.forEach(m=>{e.append(l,m)})):e.set(l,s)});const o=t.split("?")[0],a=e.toString();return`${o}?${a}`}const dt=t=>{const r=t.item;let e=Array.prototype.slice.call(r.parentNode.childNodes);return e=e.filter(o=>o.nodeType!=Node.ELEMENT_NODE||!o.classList.contains("sortable-fallback")),e},ct=(t,r,e,o,a,i)=>{const s=t.item.parentNode;for(const k of e)s.appendChild(k);if(t.oldIndex==t.newIndex)return;const m=o.getArray(),h=t.item.querySelector("eox-layercontrol-layer").layer.get(a),_=m.find(k=>k.get(a)===h),H=i.dataset.layer,V=m.find(k=>k.get(a)==H);let x,f;for(x=0;x<m.length;x++)if(m[x]==_){o.removeAt(x);break}for(f=0;f<m.length;f++)if(m[f]===V){x>f?o.insertAt(f,_):o.insertAt(f+1,_);break}r.requestUpdate()};function mt(t,r,e,o){let a=[],i=null;t._sortable=tt.create(t,{handle:".drag-handle",filter:".drag-handle.disabled",swapThreshold:.5,animation:150,easing:"cubic-bezier(1, 0, 0, 1)",onStart:l=>{console.log(l),a=dt(l)},onMove:l=>{i=l.related},onEnd:l=>ct(l,o,a,r,e,i)})}function pt(t,r,e,o){const a=t.getArray();let i=!1;a.forEach(l=>{const s=l.ol_uid;l.get(r)||(l.set(r,s),i=!0),l.get(e)||(l.set(e,`layer ${s}`),i=!0),i&&o.requestUpdate()})}function me(t,r,e){let o=[];const a=(i,l,s)=>{o=[...o,...i.filter(h=>h.get(l)===s)];const m=i.filter(h=>h.getLayers);return m.length>0&&m.forEach(h=>a(h.getLayers().getArray(),l,s)),o};return a(t,r,e),o}function ut(t,r,e){if(!t||!r)return!1;if(!we(t,e))return!0;const o=t.get("minZoom"),a=t.get("maxZoom"),i=r.getView().getZoom();return i>o&&i<a}function we(t,r){const e=t.get("minZoom"),o=t.get("maxZoom");return!!(r&&(e!==-1/0||o!==1/0))}function fe(t,r){var a,i,l;return!t||!r?void 0:t.getLayers?"group":((l=(a=r.getInteractions().getArray().filter(s=>s.freehand_!==void 0).map(s=>s.source_))==null?void 0:a.ol_uid)==null?void 0:l.includes(t.getSource?(i=t.getSource())==null?void 0:i.ol_uid:void 0))?"draw":t.declutter_!==void 0||t.get("type")==="Vector"?"vector":"raster"}const bt=(t,r,e)=>{let o=r;return e.layer.getSource().getTileUrlFunction()&&(o||(o=e.layer.getSource().getTileUrlFunction()),e.layer.getSource().setTileUrlFunction((...a)=>st(o(...a),t)),e.layer.getSource().setKey(new Date)),o};function gt(t,r,e){const o="updateStyleVariables"in r,a="setStyle"in r,i=o?r.style_:e.style;let l=i==null?void 0:i.variables;if(l){const s=pe(t);if(i.variables={...l,...s},o)r.updateStyleVariables(s);else if(a){const m=ht(i);r.setStyle(m)}}}const pe=t=>{const r={};for(const e in t)if(typeof t[e]=="object"&&t[e]!==null){const o=pe(t[e]);for(const a in o)r[a]=o==null?void 0:o[a]}else r[e]=t==null?void 0:t[e];return r};function ht(t){let r=t;if("variables"in t){let e=JSON.stringify(t);const{variables:o}=t;for(const a in o)typeof o[a]=="number"?e=e.replaceAll(`["var","${a}"]`,o[a]):e=e.replaceAll(`["var","${a}"]`,`"${o[a]}"`);r=JSON.parse(e)}return r}const ft=(t,r)=>{if(!t)return;const e=pe(r);let o,a;return Array.isArray(t)?a=structuredClone(t):a=[structuredClone(t)],o=a.filter(i=>{if(!("boundTo"in i))return!0;const l=i.boundTo.key,s=i.boundTo.value;return l in e&&e[l]==s}),o.length||(o=null),o==null?void 0:o.map(i=>{var l;return delete i.boundTo,!("domainProperties"in i)||"domain"in i?i:(l=Object.keys(i))==null?void 0:l.reduce((s,m)=>(m==="domainProperties"?s.domain=i[m].map(h=>e[h]):s[m]=i[m],s),{})})};function ze(t,r){var o;let e={};for(const a in t){const i=t[a].type;if(i&&i!=="object"&&r[a]!==void 0)e[a]=i==="number"?Number(r[a]):r[a];else if(typeof t[a]=="object"&&((o=t[a])!=null&&o.properties)){const l=ze(t[a].properties,r);Object.keys(l).length>0&&(e[a]=l)}}return e}function yt(t,r){var i,l,s,m,h,_,H;if(!r)return null;let e={},o="updateStyleVariables"in t?(i=t.style_)==null?void 0:i.variables:(l=r.style)==null?void 0:l.variables;if((r.type==="style"||r.style)&&o)e=o;else if((m=(s=t.getSource())==null?void 0:s.getTileUrlFunction)!=null&&m.call(s)){const V=new URL(t.getSource().getTileUrlFunction()([0,0,0]));(((_=(h=r.schema)==null?void 0:h.options)==null?void 0:_.removeProperties)??[]).forEach(f=>V.searchParams.delete(f)),e={};for(const[f,k]of V.searchParams.entries()){const be=V.searchParams.getAll(f);e[f]=be.length>1?be:k}}else return null;const a=ze(((H=r.schema)==null?void 0:H.properties)||r.schema,e);return Object.keys(a).length?a:null}const _e=(t,r)=>t==null?void 0:t.filter(e=>["remove","sort"].filter(o=>r!=null&&r.get("layerControlDisable")?o!=="sort":!0).includes(e)),$e=(t,r)=>t==null?void 0:t.filter(e=>{let o=!0;return["remove","sort"].includes(e)&&(o=!1),e==="info"&&(o=r.get("description")),e==="config"&&(o=r.get("layerConfig")),e==="datetime"&&(o=r.get("layerDatetime")),e==="legend"&&(o=r.get("layerLegend")),o}),vt=(t,r,e)=>n`
  <button
    slot="${t}-icon"
    class="no-margin transparent square primary-text small"
  >
    ${e?t:n`<i class="small primary-text">${r}</i>`}
  </button>
`,Ve=(t,r)=>n`
  <button
    class="remove-icon no-margin transparent square small action"
    @click=${()=>{const{layer:e}=t;e==null||e.set("layerControlOptional",!0),e==null||e.setVisible(!1),t.dispatchEvent(new CustomEvent("changed",{detail:e,bubbles:!0}))}}
  >
    ${t.unstyled?"x":n`<i class="small red-text">${r}</i>`}
  </button>
`,Se=(t,r,e)=>n`
  <button
    class="sort-icon no-margin transparent square primary-text drag-handle small action ${t.layer.get("layerControlDisable")?"disabled":""}"
    style="cursor: ns-resize;"
  >
    ${e?"═":n`<i class="small primary-text">${r}</i>`}
  </button>
`;function E(){return{dots:n`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>menu-down</title>
      <path d="M7,10L12,15L17,10H7Z" />
    </svg>`,info:n`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>information-outline</title>
      <path
        d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
      />
    </svg>`,opacity:n`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>circle-opacity</title>
      <path
        d="M18 10V8H20V10H18M18 12V10H16V12H18M18 8V6H16V8H18M16 2.84V4H18C17.37 3.54 16.71 3.15 16 2.84M18 4V6H20C19.42 5.25 18.75 4.58 18 4M20 6V8H21.16C20.85 7.29 20.46 6.63 20 6M22 12C22 11.32 21.93 10.65 21.8 10H20V12H22M16 6V4H14V6H16M16 16H18V14H16V16M18 18H20L20 18V16H18V18M16 20H18L18 20V18H16V20M14 21.8C14.7 21.66 15.36 21.44 16 21.16V20H14V21.8M18 14H20V12H18V14M16 8H14V10H16V8M20 16H21.16C21.44 15.36 21.66 14.7 21.8 14H20V16M16 12H14V14H16V12M12 18V16H14V14H12V12H14V10H12V8H14V6H12V4H14V2.2C13.35 2.07 12.69 2 12 2C6.5 2 2 6.5 2 12S6.5 22 12 22V20H14V18H12M14 18H16V16H14V18Z"
      />
    </svg>`,config:n`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>tune</title>
      <path
        d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z"
      />
    </svg>`,datetime:n`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>calendar-clock-outline</title>
      <path
        d="M6 1V3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11.1C12.36 22.24 14.09 23 16 23C19.87 23 23 19.87 23 16C23 14.09 22.24 12.36 21 11.1V5C21 3.9 20.11 3 19 3H18V1H16V3H8V1M5 5H19V7H5M5 9H19V9.67C18.09 9.24 17.07 9 16 9C12.13 9 9 12.13 9 16C9 17.07 9.24 18.09 9.67 19H5M16 11.15C18.68 11.15 20.85 13.32 20.85 16C20.85 18.68 18.68 20.85 16 20.85C13.32 20.85 11.15 18.68 11.15 16C11.15 13.32 13.32 11.15 16 11.15M15 13V16.69L18.19 18.53L18.94 17.23L16.5 15.82V13Z"
      />
    </svg>`,legend:n`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>map-legend</title>
      <path
        d="M9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3L20.34,3.03L15,5.1L9,3M8,5.45V17.15L5,18.31V6.46L8,5.45M10,5.47L14,6.87V18.53L10,17.13V5.47M19,5.7V17.54L16,18.55V6.86L19,5.7M7.46,6.3L5.57,6.97V9.12L7.46,8.45V6.3M7.46,9.05L5.57,9.72V11.87L7.46,11.2V9.05M7.46,11.8L5.57,12.47V14.62L7.46,13.95V11.8M7.46,14.55L5.57,15.22V17.37L7.46,16.7V14.55Z"
      />
    </svg>`,remove:n`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>delete-outline</title>
      <path
        d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"
      />
    </svg>`,sort:n`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>drag-horizontal-variant</title>
      <path d="M21 11H3V9H21V11M21 13H3V15H21V13Z" />
    </svg>`}}const He=t=>{var e;const r=["layerControlHide","layerControlOptional"];return(e=t==null?void 0:t.getArray())==null?void 0:e.filter(o=>r.every(a=>!o.get(a)))};function Le(t,r){r.dispatchEvent(new CustomEvent("datetime:updated",{detail:t.detail,bubbles:!0}))}const ue='@import"https://eox.at/fonts/inter/inter.css";@import"https://eox.at/fonts/materialdesignicons/materialdesignicons.min.css";:root{--size: 1rem;--font: Inter, Roboto, "Helvetica Neue", "Arial Nova", "Nimbus Sans", Noto Sans, Arial, sans-serif;--font-icon: "Material Symbols Outlined";--speed1: .1s;--speed2: .2s;--speed3: .3s;--speed4: .4s;--active: rgb(128 128 128 / .192);--overlay: rgb(0 0 0 / .5);--elevate1: 0 .125rem .125rem 0 rgb(0 0 0 / .32);--elevate2: 0 .25rem .5rem 0 rgb(0 0 0 / .4);--elevate3: 0 .375rem .75rem 0 rgb(0 0 0 / .48);--top: env(safe-area-inset-top);--bottom: env(safe-area-inset-bottom);--left: env(safe-area-inset-left);--right: env(safe-area-inset-right)}:root,body.light{--primary: #6750a4;--on-primary: #ffffff;--primary-container: #e9ddff;--on-primary-container: #22005d;--secondary: #625b71;--on-secondary: #ffffff;--secondary-container: #e8def8;--on-secondary-container: #1e192b;--tertiary: #7e5260;--on-tertiary: #ffffff;--tertiary-container: #ffd9e3;--on-tertiary-container: #31101d;--error: #ba1a1a;--on-error: #ffffff;--error-container: #ffdad6;--on-error-container: #410002;--background: #fffbff;--on-background: #1c1b1e;--surface: #fdf8fd;--on-surface: #1c1b1e;--surface-variant: #e7e0eb;--on-surface-variant: #49454e;--outline: #7a757f;--outline-variant: #cac4cf;--shadow: #000000;--scrim: #000000;--inverse-surface: #313033;--inverse-on-surface: #f4eff4;--inverse-primary: #cfbcff;--surface-dim: #ddd8dd;--surface-bright: #fdf8fd;--surface-container-lowest: #ffffff;--surface-container-low: #f7f2f7;--surface-container: #f2ecf1;--surface-container-high: #ece7eb;--surface-container-highest: #e6e1e6}body.dark{--primary: #cfbcff;--on-primary: #381e72;--primary-container: #4f378a;--on-primary-container: #e9ddff;--secondary: #cbc2db;--on-secondary: #332d41;--secondary-container: #4a4458;--on-secondary-container: #e8def8;--tertiary: #efb8c8;--on-tertiary: #4a2532;--tertiary-container: #633b48;--on-tertiary-container: #ffd9e3;--error: #ffb4ab;--on-error: #690005;--error-container: #93000a;--on-error-container: #ffb4ab;--background: #1c1b1e;--on-background: #e6e1e6;--surface: #141316;--on-surface: #e6e1e6;--surface-variant: #49454e;--on-surface-variant: #cac4cf;--outline: #948f99;--outline-variant: #49454e;--shadow: #000000;--scrim: #000000;--inverse-surface: #e6e1e6;--inverse-on-surface: #313033;--inverse-primary: #6750a4;--surface-dim: #141316;--surface-bright: #3a383c;--surface-container-lowest: #0f0e11;--surface-container-low: #1c1b1e;--surface-container: #201f22;--surface-container-high: #2b292d;--surface-container-highest: #363438}@font-face{font-family:Material Symbols Outlined;font-style:normal;font-weight:400;font-display:block;src:url(/pr-preview/pr-29/assets/material-symbols-outlined.BZinq3R6.woff2?no-inline) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@3.11.11/dist/cdn/material-symbols-outlined.woff2) format("woff2")}@font-face{font-family:Material Symbols Rounded;font-style:normal;font-weight:400;font-display:block;src:url(/pr-preview/pr-29/assets/material-symbols-rounded.DVluyMkh.woff2?no-inline) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@3.11.11/dist/cdn/material-symbols-rounded.woff2) format("woff2")}@font-face{font-family:Material Symbols Sharp;font-style:normal;font-weight:400;font-display:block;src:url(/pr-preview/pr-29/assets/material-symbols-sharp.DQLBrjHA.woff2?no-inline) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@3.11.11/dist/cdn/material-symbols-sharp.woff2) format("woff2")}@font-face{font-family:Material Symbols Subset;font-style:normal;font-weight:400;font-display:block;src:url(data:font/woff2;base64,d09GMgABAAAAAAeoABEAAAAAEhgAAAdHAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHIM+BmA/U1RBVHAnFgCBDC8sEQgKkGyNSQs8ADCCSAE2AiQDPAQgBYVCByAMBxsTDxHVpB7INFIWzt8P4mutt9/QAgYIUN3acHkkH/VJRx8IFTZiDP7drAkkK3no7pmka0ppHW8d6hJMAhXVv1VPT9w5E//5+7381zqd1U8c0Br5vXPvj/POslM/rhqomirEizJIRvR1qGPaS5qWyFMRyxvljU6yTrgFIMmKi9nPdSBHcLDB4QmVB35LKcAiEpzZ15KDS0GtXL1xJ/nFYzcvk2NyJXmP6m+urp+4eJOe1y+eO0POURUUY3EENz4hG+zIndBY1EBhZpbiO3GAT5Z7juIsMYqpvb1pepJS0J0+DCSjP/3oZ7E3fr2cbpTk9KCkQOhdyHh/eheMMoQZEQWlKVrSl150p8NFA2ZgKtiHAQgK2vdtJx2VZq8ZS8+4GFvcuCOiGrf0uZUNhFZSz3qpDIHYqN70eJueSI7RXfIMy1zDxqJFiba/lLjFmi1b1tDF0L+RGepfQ6oZzYGPZxXdpbuAoUyogUIx1HNTeCZq9bqNG/NccM32ZStFkCtXb9wXhbpz5uxN0WimMpK+olfTKAnkGag23pIKJSl9oyhOSRJpDU6wSdJddA2jl7I0XgQg3QLS2dASvIsX7UuJJmQoRzjFOa5wnVvc/fnjz5y/kfcCVjvCMc5ygevcDJrNPKH/79v9N//Ff/Yf/Qf/rv9S6O3js8Gc3CnKYaMSMqmMbuxppfCN0BdjNk2Q4DJLvKdIaNDGe35io96F6AcFyEzIvlWSeXuY8TUvEKvPR7129XaWej0xWmvdM017piu7snQlGhTAxgWXKYrGxnGapqFxvfM8TyIT9g5DkwSFO35g/zm7d2+2Xw6kJx40m02pWq1W8rDRaFCr1+u7H7akasYP6tQaB6pKXKsVa38mZCq7KHvY86BDbNWZFA/bMbW2+HLhDBa+i+RVJaaqzpzZvnP31r0Fgq3szKRbHzKE0fXKKRlLU+P9OStKy73FVJD42YCvslJZThj5bFci4/HYNpp1yAWHyqhJJ/ZuZ5azR1577Q2RorgWmX399devJdFoNMqipzNflDBqKKBcHZQwRKKUEpqVKiSEkjMySg0ZLQ+t2kqaoPRUuglD6EKZ9bEkrhHPuZHVVLE1WjZGQhjSTjYwhGY72BiJfeY1ihpuDlTnU5FEzkTRoCBGKSeVlUmkAlLbayqr6+NioqRE0na2B/jhvMRLXKxL6WE9xE3c5ZQaTz6oefD93pucN7kXn3r6JucTy66bnDU32Hm8X1i6bAwGjculpcblYHDZWHo5b0nhxF13TawGjJu+0G1LHX9paVtbqflVJU88bH480RnzXYwGIvYWaqABPKuzSZdf3vnhh83NnQn+nDDg6xaWXLC49I6loqXCRb5mUJZC//cffzx14UI4PNX781eud1+4PtAR7gwn3bjTtmOXDYL4a+3RnFCKKeMFaiCrMD10tKpBzFkpLk1PTik1Fa9YDxcXpMYlFsQXH8bvirIjO3qqcsdranPHeiqP7CjTDa9v0ZZVyjNqns1Oqd3Ay7aa+zY6MvXejMXXJiY2eGR2LldnqGEyyqu7tJPrIYij+384d1Z29oez+7flbO+/qX9KNn1Tb/92COKVtofeDllDPz2VC0Gs2aLZUifW6TQ66Kxdl3ZZrdauS7uswRtzPPfYbPSX24V7gtm7/t+HyF18+EkbnGL7D6oa2vqDql2s/NNERz77o+TzPxrpvX9CEBtiLbRRWiE27jHS1/6PDxTnfj51u/r2n0+dO/vzmVvVt/585kz+2D39i+rFewbGJu7uX1Iv3dMHt0Vdv2T3BuZ5/o5L+TuMZaa0tHK94Y5G/sONjapv4nErP25z2EZ5fKDImd4SLLB0FvfW9I7eLLQ23xoZ7q3qLTZ3BgumtkB2exdri5040cQ2puzjU1Ydb5qxxq66owu7a2wuG37duFrzKfo1o5JN1rUwon4hC3lJr7dZ/62QwAHHMv7v+e9BcPZ/z1AGJijzFJgYPZp2J3DIktMkRokeWvGUKLt4kDPZEo3tN3NXhjunfO7QO8s+f9FV6eMrjUr9r2skfdElf3zXuSd3Ng//E/L/aRVGq7QPI3ClxgtqMxrMS1LSB/Ekirx1Fx0wWQLMEAB1GBGBEzETiu6FHTLsaVHM1UjWkk3qoEgVHlcdAfRaE8NTh05yCnqKl0ugoErkUtThNzmNPFyQM7gCS/JVyIK1vYrDhVqitLRPmpFTYJEsl+AycNFSyJShCO1X0yIIZMgBDqsBWsSjCW0oUIpFBdgRQqVyLOqFD20ozIjywxm05VC6XQ/cyEYL7HDBjSyAGM/Ihx1tJqoF/mIVS9ENAQ5ErH0rCtGOIcgLww1XnQV3owRueI0AWXa0oIKMrfjREYTBQYs9SIYGCdydcdg5h34cusXVY/wv6JCNQhQiG7rWN3LRZi0umo4ImtBN4x8EhCtqoEUCOGRjRgRehMxuHPKQh3TsAQcOFgS5OopPq3hqbQV11EF7/j90Aq3eYG64ExLHb6TnAQAAAA==) format("woff2"),url(https://cdn.jsdelivr.net/npm/beercss@3.11.11/dist/cdn/material-symbols-subset.woff2) format("woff2")}*{-webkit-tap-highlight-color:transparent;position:relative;vertical-align:middle;color:inherit;margin:0;padding:0;border-radius:inherit;box-sizing:border-box}body{color:var(--on-surface);background-color:var(--surface);overflow-x:hidden}label{font-size:.75rem;vertical-align:baseline}a,b,i,span,strong,em,code{vertical-align:baseline}a,button,.button{cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;border:none;font-family:inherit;outline:inherit;justify-content:center}a,button,.button,i,label{-webkit-user-select:none;user-select:none}body ::-webkit-scrollbar,body ::-webkit-scrollbar-thumb,body ::-webkit-scrollbar-button{background:none;inline-size:.4rem;block-size:.4rem}body :is(:hover,:focus)::-webkit-scrollbar-thumb{background:var(--outline);border-radius:1rem}*+:is(address,article,blockquote,code,.field,fieldset,form,.grid,h1,h2,h3,h4,h5,h6,nav,ol,p,pre,.row,section,aside,table,.tabs,ul){margin-block-start:1rem}:is(a,button,.button,.chip):focus-visible{outline:.125rem solid var(--primary);outline-offset:.25rem}:is(nav,.row,li).group>:focus-visible{z-index:1}.transparent{background-color:transparent!important;box-shadow:none!important;color:inherit!important}.primary{background-color:var(--primary)!important;color:var(--on-primary)!important}.primary-text{color:var(--primary)!important}.primary-border{border-color:var(--primary)!important}.primary-container{background-color:var(--primary-container)!important;color:var(--on-primary-container)!important}.secondary{background-color:var(--secondary)!important;color:var(--on-secondary)!important}.secondary-text{color:var(--secondary)!important}.secondary-border{border-color:var(--secondary)!important}.secondary-container{background-color:var(--secondary-container)!important;color:var(--on-secondary-container)!important}.tertiary{background-color:var(--tertiary)!important;color:var(--on-tertiary)!important}.tertiary-text{color:var(--tertiary)!important}.tertiary-border{border-color:var(--tertiary)!important}.tertiary-container{background-color:var(--tertiary-container)!important;color:var(--on-tertiary-container)!important}.error{background-color:var(--error)!important;color:var(--on-error)!important}.error-text{color:var(--error)!important}.error-border{border-color:var(--error)!important}.error-container{background-color:var(--error-container)!important;color:var(--on-error-container)!important}.background{background-color:var(--background)!important;color:var(--on-background)!important}.surface,.surface-dim,.surface-bright,.surface-container-lowest,.surface-container-low,.surface-container,.surface-container-high,.surface-container-highest{background-color:var(--surface)!important;color:var(--on-surface)!important}.surface-variant{background-color:var(--surface-variant)!important;color:var(--on-surface-variant)!important}.inverse-surface{background-color:var(--inverse-surface);color:var(--inverse-on-surface)}.inverse-primary{background-color:var(--inverse-primary);color:var(--primary)}.inverse-primary-text{color:var(--inverse-primary)!important}.inverse-primary-border{border-color:var(--inverse-primary)!important}.surface-dim{background-color:var(--surface-dim)!important}.surface-bright{background-color:var(--surface-bright)!important}.surface-container-lowest{background-color:var(--surface-container-lowest)!important}.surface-container{background-color:var(--surface-container)!important}.surface-container-high{background-color:var(--surface-container-high)!important}.surface-container-highest{background-color:var(--surface-container-highest)!important}.surface-container-low{background-color:var(--surface-container-low)!important}.black{background-color:#000!important}.black-border{border-color:#000!important}.black-text{color:#000!important}.white{background-color:#fff!important}.white-border{border-color:#fff!important}.white-text{color:#fff!important}.transparent-border{border-color:transparent!important}.transparent-text{color:transparent!important}.fill:not(i){background-color:var(--surface-variant)!important;color:var(--on-surface-variant)!important}.middle-align{display:flex;align-items:center!important}.bottom-align{display:flex;align-items:flex-end!important}.top-align{display:flex;align-items:flex-start!important}.left-align{text-align:start;justify-content:flex-start!important}.right-align{text-align:end;justify-content:flex-end!important}.center-align{text-align:center;justify-content:center!important}[class*=blur],[class*=blur].light{--_blur: 1rem;-webkit-backdrop-filter:blur(var(--_blur));backdrop-filter:blur(var(--_blur));color:var(--on-surface);background-color:#ffffff80!important}.dark [class*=blur],[class*=blur].dark{background-color:#00000080!important}.small-blur{--_blur: .5rem}.large-blur{--_blur: 1.5rem}.red,.red6{background-color:#f44336!important}.red-border{border-color:#f44336!important}.red-text{color:#f44336!important}.red1{background-color:#ffebee!important}.red2{background-color:#ffcdd2!important}.red3{background-color:#ef9a9a!important}.red4{background-color:#e57373!important}.red5{background-color:#ef5350!important}.red7{background-color:#e53935!important}.red8{background-color:#d32f2f!important}.red9{background-color:#c62828!important}.red10{background-color:#b71c1c!important}.pink,.pink6{background-color:#e91e63!important}.pink-border{border-color:#e91e63!important}.pink-text{color:#e91e63!important}.pink1{background-color:#fce4ec!important}.pink2{background-color:#f8bbd0!important}.pink3{background-color:#f48fb1!important}.pink4{background-color:#f06292!important}.pink5{background-color:#ec407a!important}.pink7{background-color:#d81b60!important}.pink8{background-color:#c2185b!important}.pink9{background-color:#ad1457!important}.pink10{background-color:#880e4f!important}.purple,.purple6{background-color:#9c27b0!important}.purple-border{border-color:#9c27b0!important}.purple-text{color:#9c27b0!important}.purple1{background-color:#f3e5f5!important}.purple2{background-color:#e1bee7!important}.purple3{background-color:#ce93d8!important}.purple4{background-color:#ba68c8!important}.purple5{background-color:#ab47bc!important}.purple7{background-color:#8e24aa!important}.purple8{background-color:#7b1fa2!important}.purple9{background-color:#6a1b9a!important}.purple10{background-color:#4a148c!important}.deep-purple,.deep-purple6{background-color:#673ab7!important}.deep-purple-border{border-color:#673ab7!important}.deep-purple-text{color:#673ab7!important}.deep-purple1{background-color:#ede7f6!important}.deep-purple2{background-color:#d1c4e9!important}.deep-purple3{background-color:#b39ddb!important}.deep-purple4{background-color:#9575cd!important}.deep-purple5{background-color:#7e57c2!important}.deep-purple7{background-color:#5e35b1!important}.deep-purple8{background-color:#512da8!important}.deep-purple9{background-color:#4527a0!important}.deep-purple10{background-color:#311b92!important}.indigo,.indigo6{background-color:#3f51b5!important}.indigo-border{border-color:#3f51b5!important}.indigo-text{color:#3f51b5!important}.indigo1{background-color:#e8eaf6!important}.indigo2{background-color:#c5cae9!important}.indigo3{background-color:#9fa8da!important}.indigo4{background-color:#7986cb!important}.indigo5{background-color:#5c6bc0!important}.indigo7{background-color:#3949ab!important}.indigo8{background-color:#303f9f!important}.indigo9{background-color:#283593!important}.indigo10{background-color:#1a237e!important}.blue,.blue6{background-color:#2196f3!important}.blue-border{border-color:#2196f3!important}.blue-text{color:#2196f3!important}.blue1{background-color:#e3f2fd!important}.blue2{background-color:#bbdefb!important}.blue3{background-color:#90caf9!important}.blue4{background-color:#64b5f6!important}.blue5{background-color:#42a5f5!important}.blue7{background-color:#1e88e5!important}.blue8{background-color:#1976d2!important}.blue9{background-color:#1565c0!important}.blue10{background-color:#0d47a1!important}.light-blue,.light-blue6{background-color:#03a9f4!important}.light-blue-border{border-color:#03a9f4!important}.light-blue-text{color:#03a9f4!important}.light-blue1{background-color:#e1f5fe!important}.light-blue2{background-color:#b3e5fc!important}.light-blue3{background-color:#81d4fa!important}.light-blue4{background-color:#4fc3f7!important}.light-blue5{background-color:#29b6f6!important}.light-blue7{background-color:#039be5!important}.light-blue8{background-color:#0288d1!important}.light-blue9{background-color:#0277bd!important}.light-blue10{background-color:#01579b!important}.cyan,.cyan6{background-color:#00bcd4!important}.cyan-border{border-color:#00bcd4!important}.cyan-text{color:#00bcd4!important}.cyan1{background-color:#e0f7fa!important}.cyan2{background-color:#b2ebf2!important}.cyan3{background-color:#80deea!important}.cyan4{background-color:#4dd0e1!important}.cyan5{background-color:#26c6da!important}.cyan7{background-color:#00acc1!important}.cyan8{background-color:#0097a7!important}.cyan9{background-color:#00838f!important}.cyan10{background-color:#006064!important}.teal,.teal6{background-color:#009688!important}.teal-border{border-color:#009688!important}.teal-text{color:#009688!important}.teal1{background-color:#e0f2f1!important}.teal2{background-color:#b2dfdb!important}.teal3{background-color:#80cbc4!important}.teal4{background-color:#4db6ac!important}.teal5{background-color:#26a69a!important}.teal7{background-color:#00897b!important}.teal8{background-color:#00796b!important}.teal9{background-color:#00695c!important}.teal10{background-color:#004d40!important}.green,.green6{background-color:#4caf50!important}.green-border{border-color:#4caf50!important}.green-text{color:#4caf50!important}.green1{background-color:#e8f5e9!important}.green2{background-color:#c8e6c9!important}.green3{background-color:#a5d6a7!important}.green4{background-color:#81c784!important}.green5{background-color:#66bb6a!important}.green7{background-color:#43a047!important}.green8{background-color:#388e3c!important}.green9{background-color:#2e7d32!important}.green10{background-color:#1b5e20!important}.light-green,.light-green6{background-color:#8bc34a!important}.light-green-border{border-color:#8bc34a!important}.light-green-text{color:#8bc34a!important}.light-green1{background-color:#f1f8e9!important}.light-green2{background-color:#dcedc8!important}.light-green3{background-color:#c5e1a5!important}.light-green4{background-color:#aed581!important}.light-green5{background-color:#9ccc65!important}.light-green7{background-color:#7cb342!important}.light-green8{background-color:#689f38!important}.light-green9{background-color:#558b2f!important}.light-green10{background-color:#33691e!important}.lime,.lime6{background-color:#cddc39!important}.lime-border{border-color:#cddc39!important}.lime-text{color:#cddc39!important}.lime1{background-color:#f9fbe7!important}.lime2{background-color:#f0f4c3!important}.lime3{background-color:#e6ee9c!important}.lime4{background-color:#dce775!important}.lime5{background-color:#d4e157!important}.lime7{background-color:#c0ca33!important}.lime8{background-color:#afb42b!important}.lime9{background-color:#9e9d24!important}.lime10{background-color:#827717!important}.yellow,.yellow6{background-color:#ffeb3b!important}.yellow-border{border-color:#ffeb3b!important}.yellow-text{color:#ffeb3b!important}.yellow1{background-color:#fffde7!important}.yellow2{background-color:#fff9c4!important}.yellow3{background-color:#fff59d!important}.yellow4{background-color:#fff176!important}.yellow5{background-color:#ffee58!important}.yellow7{background-color:#fdd835!important}.yellow8{background-color:#fbc02d!important}.yellow9{background-color:#f9a825!important}.yellow10{background-color:#f57f17!important}.amber,.amber6{background-color:#ffc107!important}.amber-border{border-color:#ffc107!important}.amber-text{color:#ffc107!important}.amber1{background-color:#fff8e1!important}.amber2{background-color:#ffecb3!important}.amber3{background-color:#ffe082!important}.amber4{background-color:#ffd54f!important}.amber5{background-color:#ffca28!important}.amber7{background-color:#ffb300!important}.amber8{background-color:#ffa000!important}.amber9{background-color:#ff8f00!important}.amber10{background-color:#ff6f00!important}.orange,.orange6{background-color:#ff9800!important}.orange-border{border-color:#ff9800!important}.orange-text{color:#ff9800!important}.orange1{background-color:#fff3e0!important}.orange2{background-color:#ffe0b2!important}.orange3{background-color:#ffcc80!important}.orange4{background-color:#ffb74d!important}.orange5{background-color:#ffa726!important}.orange7{background-color:#fb8c00!important}.orange8{background-color:#f57c00!important}.orange9{background-color:#ef6c00!important}.orange10{background-color:#e65100!important}.deep-orange,.deep-orange6{background-color:#ff5722!important}.deep-orange-border{border-color:#ff5722!important}.deep-orange-text{color:#ff5722!important}.deep-orange1{background-color:#fbe9e7!important}.deep-orange2{background-color:#ffccbc!important}.deep-orange3{background-color:#ffab91!important}.deep-orange4{background-color:#ff8a65!important}.deep-orange5{background-color:#ff7043!important}.deep-orange7{background-color:#f4511e!important}.deep-orange8{background-color:#e64a19!important}.deep-orange9{background-color:#d84315!important}.deep-orange10{background-color:#bf360c!important}.brown,.brown6{background-color:#795548!important}.brown-border{border-color:#795548!important}.brown-text{color:#795548!important}.brown1{background-color:#efebe9!important}.brown2{background-color:#d7ccc8!important}.brown3{background-color:#bcaaa4!important}.brown4{background-color:#a1887f!important}.brown5{background-color:#8d6e63!important}.brown7{background-color:#6d4c41!important}.brown8{background-color:#5d4037!important}.brown9{background-color:#4e342e!important}.brown10{background-color:#3e2723!important}.blue-grey,.blue-grey6{background-color:#607d8b!important}.blue-grey-border{border-color:#607d8b!important}.blue-grey-text{color:#607d8b!important}.blue-grey1{background-color:#eceff1!important}.blue-grey2{background-color:#cfd8dc!important}.blue-grey3{background-color:#b0bec5!important}.blue-grey4{background-color:#90a4ae!important}.blue-grey5{background-color:#78909c!important}.blue-grey7{background-color:#546e7a!important}.blue-grey8{background-color:#455a64!important}.blue-grey9{background-color:#37474f!important}.blue-grey10{background-color:#263238!important}.grey,.grey6{background-color:#9e9e9e!important}.grey-border{border-color:#9e9e9e!important}.grey-text{color:#9e9e9e!important}.grey1{background-color:#fafafa!important}.grey2{background-color:#f5f5f5!important}.grey3{background-color:#eee!important}.grey4{background-color:#e0e0e0!important}.grey5{background-color:#bdbdbd!important}.grey7{background-color:#757575!important}.grey8{background-color:#616161!important}.grey9{background-color:#424242!important}.grey10{background-color:#212121!important}.horizontal{display:inline-flex;flex-direction:row!important;gap:1rem;inline-size:auto!important;max-inline-size:none!important}.horizontal>*{margin-block:0!important}.vertical{display:flex;flex-direction:column!important}:is(a,button,.button,.chip).vertical{display:inline-flex;gap:.25rem;block-size:auto!important;max-block-size:none!important;padding-block:.5rem}.vertical>*{margin-inline:0!important}.no-elevate{box-shadow:none!important}.small-elevate,.elevate{box-shadow:var(--elevate1)!important}.medium-elevate{box-shadow:var(--elevate2)!important}.large-elevate{box-shadow:var(--elevate3)!important}[class*=round]{--_round: 2rem;border-radius:var(--_round)!important}.small-round{--_round: .5rem}.large-round{--_round: 3.5rem}.no-round,.square,.top-round,.bottom-round,.left-round,.right-round{border-radius:.5rem!important}.top-round{border-start-start-radius:var(--_round)!important;border-start-end-radius:var(--_round)!important}.bottom-round{border-end-end-radius:var(--_round)!important;border-end-start-radius:var(--_round)!important}.left-round{border-start-start-radius:var(--_round)!important;border-end-start-radius:var(--_round)!important}.right-round{border-start-end-radius:var(--_round)!important;border-end-end-radius:var(--_round)!important}.circle:not(.extend){border-radius:50%}:is(.circle,.square):is(button,.button,.chip){padding:0;block-size:var(--_size);inline-size:var(--_size)}:is(.circle,.square)>span{display:none}:is(.circle,.square).round{border-radius:1rem!important}.border:not(table,.field,.list,menu,article){box-sizing:border-box;border:.0625rem solid var(--outline);background-color:transparent;box-shadow:none}.no-border{border-color:transparent!important}.border:not(.extend,.circle,.square,.badge){box-sizing:content-box}[class*=margin]:not(.left-margin,.right-margin,.top-margin,.bottom-margin,.horizontal-margin,.vertical-margin){margin:var(--_margin)!important}[class*=margin]{--_margin: 1rem}.no-margin{--_margin: 0}.auto-margin{--_margin: auto}.tiny-margin{--_margin: .25rem}.small-margin{--_margin: .5rem}.large-margin{--_margin: 1.5rem}.left-margin,.horizontal-margin{margin-inline-start:var(--_margin)!important}.right-margin,.horizontal-margin{margin-inline-end:var(--_margin)!important}.top-margin,.vertical-margin{margin-block-start:var(--_margin)!important}.bottom-margin,.vertical-margin{margin-block-end:var(--_margin)!important}.no-opacity{opacity:1!important}.opacity{opacity:0!important}.small-opacity{opacity:.75!important}.medium-opacity{opacity:.5!important}.large-opacity{opacity:.25!important}[class*=padding]:not(.left-padding,.right-padding,.top-padding,.bottom-padding,.horizontal-padding,.vertical-padding){padding:var(--_padding)!important}[class*=padding]{--_padding: 1rem}.no-padding{--_padding: 0 !important}.tiny-padding{--_padding: .25rem !important}.small-padding{--_padding: .5rem !important}.large-padding{--_padding: 1.5rem !important}.left-padding,.horizontal-padding{padding-inline-start:var(--_padding)!important}.right-padding,.horizontal-padding{padding-inline-end:var(--_padding)!important}.top-padding,.vertical-padding{padding-block-start:var(--_padding)!important}.bottom-padding,.vertical-padding{padding-block-end:var(--_padding)!important}.front{z-index:10!important}.back{z-index:-10!important}.left{inset-inline-start:0}.right{inset-inline-end:0}.top{inset-block-start:0}.bottom{inset-block-end:0}.center{inset-inline-start:50%;transform:translate(-50%)}[dir=rtl] .center{transform:translate(50%)}.middle{inset-block-start:50%;transform:translateY(-50%)}.middle.center{transform:translate(-50%,-50%)}[dir=rtl] .middle.center{transform:translate(50%,-50%)}.ripple{--_duration: .6s}.fast-ripple{--_duration: .2s}.slow-ripple{--_duration: 1.8s}.ripple-js{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;overflow:hidden}.ripple-js>div{position:absolute;border-radius:50%;background:currentColor;opacity:.3;transform:scale(0);animation:to-ripple var(--_duration) linear}@keyframes to-ripple{to{transform:scale(4);opacity:0}}.scroll{overflow:auto}.no-scroll{overflow:hidden}.shadow{background-color:#00000050}:is(.left-shadow,.right-shadow,.top-shadow,.bottom-shadow){background-color:transparent!important}.left-shadow{background-image:linear-gradient(to right,black,transparent)!important}.right-shadow{background-image:linear-gradient(to left,black,transparent)!important}.bottom-shadow{background-image:linear-gradient(to top,black,transparent)!important}.top-shadow{background-image:linear-gradient(to bottom,black,transparent)!important}[class*=width]{max-inline-size:100%}.auto-width{inline-size:auto}.small-width{inline-size:12rem!important}.medium-width{inline-size:24rem!important}.large-width{inline-size:36rem!important}.auto-height{block-size:auto}.small-height{block-size:12rem!important}.medium-height{block-size:24rem!important}.large-height{block-size:36rem!important}.wrap{display:block;white-space:normal}.no-wrap:not(menu){display:flex;white-space:nowrap}.tiny-space:not(nav,.row,.grid,table,.tooltip,.list,menu){block-size:.5rem}:is(.space,.small-space):not(nav,.row,.grid,table,.tooltip,.list,menu){block-size:1rem}.medium-space:not(nav,.row,.grid,table,.tooltip,.list,menu){block-size:2rem}.large-space:not(nav,.row,.grid,table,.tooltip,.list,menu){block-size:3rem}.responsive{inline-size:-webkit-fill-available;inline-size:-moz-available}@media only screen and (max-width: 600px){:is(.m,.l):not(.s){display:none!important}}@media only screen and (min-width: 601px) and (max-width: 992px){:is(.s,.l):not(.m){display:none!important}}@media only screen and (min-width: 993px){:is(.m,.s):not(.l){display:none!important}}html{font-size:var(--size)}body{font-family:var(--font);font-size:.875rem;line-height:1.5rem;letter-spacing:.0313rem}h1,h2,h3,h4,h5,h6{font-weight:400;display:block;align-items:center;line-height:normal}h1{font-size:3.5625rem}h2{font-size:2.8125rem}h3{font-size:2.25rem}h4{font-size:2rem}h5{font-size:1.75rem}h6{font-size:1.5rem}h1.small{font-size:3.0625rem}h2.small{font-size:2.3125rem}h3.small{font-size:1.75rem}h4.small{font-size:1.5rem}h5.small{font-size:1.25rem}h6.small{font-size:1rem}h1.large{font-size:4.0625rem}h2.large{font-size:3.3125rem}h3.large{font-size:2.75rem}h4.large{font-size:2.5rem}h5.large{font-size:2.25rem}h6.large{font-size:2rem}.link{color:var(--primary)!important}.inverse-link{color:var(--inverse-primary)!important}.truncate{overflow:hidden;white-space:nowrap!important;text-overflow:ellipsis;flex:inherit}.truncate>*{white-space:nowrap!important}.small-text{font-size:.75rem}.medium-text{font-size:.875rem}.large-text{font-size:1rem}.upper{text-transform:uppercase}.lower{text-transform:lowercase}.capitalize{text-transform:capitalize}.bold{font-weight:700}.overline{text-decoration:line-through}.underline{text-decoration:underline}.italic{font-style:italic}p{margin:.5rem 0}.no-line{line-height:normal}.tiny-line{line-height:1.25rem}.small-line{line-height:1.5rem}.medium-line{line-height:1.75rem}.large-line{line-height:2rem}.extra-line{line-height:2.25rem}pre{border-radius:0;background-color:var(--surface-container);white-space:pre-wrap;padding:1rem;border-inline-start:.25rem solid var(--primary);font-family:inherit}blockquote{border-radius:0;padding:1rem;border-inline-start:.25rem solid var(--primary);font-family:inherit}code{border-radius:0;background-color:var(--surface-container);white-space:pre-wrap;padding:.25rem}pre>code,blockquote>code{padding:0}.scroll>code{white-space:pre}pre:has(>code){direction:ltr;text-align:start}:is(.wave,.chip,.button,button,nav.tabbed>a,.tabs>a,.toolbar>a):not(.slow-ripple,.ripple,.fast-ripple):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;inline-size:100%;block-size:100%;background-position:center;background-image:radial-gradient(circle,currentColor 1%,transparent 1%);opacity:0;transition:none}:is(.wave,.chip,.button,button,nav.tabbed>a,.tabs>a,.toolbar>a):not(.slow-ripple,.ripple,.fast-ripple):is(:focus-visible,:hover):after{background-size:15000%;opacity:.1;transition:background-size var(--speed2) linear}:is(.wave,.chip,.button,button,nav.tabbed>a,.tabs>a,.toolbar>a):not(.slow-ripple,.ripple,.fast-ripple):active:after{background-size:5000%;opacity:0;transition:none}.no-wave:after,.no-wave:is(:hover,:active):after{display:none}.badge{--_x: 0;--_y: -100%;display:inline-flex;align-items:center;justify-content:center;position:absolute;font-size:.6875rem;text-transform:none;z-index:2;padding:0 .25rem;min-block-size:1rem;min-inline-size:1rem;background-color:var(--error);color:var(--on-error);line-height:normal;border-radius:1rem;inset:50% auto auto 50%;transform:translate(var(--_x, 50%),var(--_y, -50%));font-family:var(--font)}.badge.top{--_y: -100%}.badge.bottom{--_y: 0}.badge.left{--_x: -100%}.badge.right{--_x: 0}.badge.border{border-color:var(--error);color:var(--error);background-color:var(--surface)}.badge:is(.circle,.square){text-align:center;inline-size:auto;block-size:auto;padding:0 .25rem;border-radius:1rem}.badge.square{border-radius:0}.badge.min>*{display:none}.badge.min{clip-path:circle(18.75% at 50% 50%)}nav:is(.left,.right,.top,.bottom)>a>.badge,nav:is(.left,.right,.top,.bottom)>:is(ol,ul)>li>a>.badge{inset:1rem auto auto 50%}.badge.none{inset:auto!important;transform:none;position:relative;margin:0 .125rem}:is(button,.button,.chip)>.badge.none{margin:0 -.5rem}header,footer{display:flex;justify-content:center;flex-direction:column;background-color:var(--surface-container);border-radius:0;padding:0 1rem}:is(nav.drawer,dialog,article)>:is(header,footer){padding-inline:0;top:0;right:0;bottom:0;left:0}header{min-block-size:4rem}footer{min-block-size:5rem}:is(header,footer,menu>*).fixed{position:sticky;top:0;right:0;bottom:0;left:0;z-index:11;background-color:inherit}header.fixed{inset:calc(-1 * var(--_padding)) 0 0 0;margin-block-start:calc(-1 * var(--_padding))}footer.fixed{inset:0 0 calc(-1 * var(--_padding)) 0;margin-block-end:calc(-1 * var(--_padding))}dialog>:is(header,footer){background:none}dialog>header.fixed{background-color:inherit;padding:var(--top) 0 0 0;margin:calc(-1 * var(--top)) 0 0 0;transform:translateY(calc(-1 * (var(--top) + var(--_padding))))}dialog>footer.fixed{background-color:inherit;padding:0 0 var(--bottom) 0;margin:0 0 calc(-1 * var(--bottom)) 0;transform:translateY(calc(var(--bottom) + var(--_padding)))}:is(main,header,footer,section).responsive{max-inline-size:75rem;margin:0 auto}:is(main,header,footer,section).responsive.max{max-inline-size:100%}:has(>main)>:is(header,footer).fixed{z-index:12;transform:none;box-sizing:content-box;top:0;right:0;bottom:0;left:0}:has(>main)>header.fixed{padding-block-start:calc(var(--top) + var(--_top));margin-block-start:calc(-1 * var(--top) - var(--_top))}:has(>main)>footer.fixed{padding-block-end:calc(var(--bottom) + var(--_bottom));margin-block-end:calc(-1 * var(--bottom) - var(--_bottom))}:is(nav,.row)>header{background-color:inherit}nav:is(.left,.right)>header{transform:translateY(-.5rem)}nav.drawer:is(.left,.right)>header+*{margin-block-start:.5rem}dialog>nav.drawer>header+*{margin-block-start:1rem}.button,button{--_padding: 1rem;--_size: 2.5rem;box-sizing:content-box;display:inline-flex;align-items:center;justify-content:center;block-size:var(--_size);font-size:.875rem;font-weight:500;color:var(--on-primary);padding:0 var(--_padding);background-color:var(--primary);margin:0 .5rem;border-radius:var(--_size);transition:transform var(--speed3),border-radius var(--speed2),padding var(--speed3);-webkit-user-select:none;user-select:none;gap:.5rem;line-height:normal}:is(button,.button).small{--_size: 2rem;--_padding: .75rem}:is(button,.button).large{--_size: 3rem;--_padding: 1.25rem}:is(.button,button):is(.extra,.extend){--_size: 3.5rem;font-size:1rem;--_padding: 1.5rem}:is(button,.button):is(.square,.circle){--_padding: 0}:is(button,.button).border{border-color:var(--outline-variant);color:var(--primary)}.extend>span{display:none}.extend:is(:hover,.active){inline-size:auto;--_padding: 1.5rem;padding:0 var(--_padding)}.extend:is(:hover,.active)>i+span{display:inherit;margin-inline-start:var(--_padding)}.extend:is(:hover,.active)>:is(img,svg)+span{display:inherit;margin-inline-start:calc(1rem + var(--_padding))}:is(.button,button)[disabled]{opacity:.5;cursor:not-allowed}.button[disabled]{pointer-events:none}:is(.button,button)[disabled]:before,:is(.button,button)[disabled]:after{display:none}:is(.button,button):not(.chip,.extend).fill{background-color:var(--secondary-container)!important;color:var(--on-secondary-container)!important}:is(.button,button):not(.chip,.extend).active{background-color:var(--primary-container);color:var(--on-primary-container)}:is(.button,button):not(.chip,.extend).fill.active{background-color:var(--secondary)!important;color:var(--on-secondary)!important}:is(.button,button):not(.chip,.extend).border.active{background-color:var(--inverse-surface)!important;color:var(--inverse-on-surface)!important;border-color:var(--inverse-surface)!important}:is(.button,button):not(.chip):active,:is(.button,button):not(.chip).active{border-radius:.5rem!important}article{--_padding: 1rem;box-shadow:var(--elevate1);background-color:var(--surface-container-low);color:var(--on-surface);padding:var(--_padding);border-radius:.75rem;display:block;transition:transform var(--speed3),border-radius var(--speed3),padding var(--speed3)}article.small{block-size:12rem}article.medium{block-size:20rem}article.large{block-size:32rem}article.border{box-shadow:none;border:.0625rem solid var(--outline-variant)}.chip{--_padding: .75rem;--_size: 2rem;box-sizing:border-box;display:inline-flex;align-items:center;justify-content:center;block-size:var(--_size);min-inline-size:var(--_size);font-size:.875rem;font-weight:500;background-color:transparent;border:.0625rem solid var(--outline-variant);color:var(--on-surface-variant);padding:0 var(--_padding);margin:0 .5rem;text-transform:none;border-radius:.5rem;transition:transform var(--speed3),border-radius var(--speed3),padding var(--speed3);-webkit-user-select:none;user-select:none;gap:.5rem;line-height:normal;letter-spacing:normal}.chip.medium{--_size: 2.5rem;--_padding: 1rem}.chip.large{--_padding: 1.25rem;--_size: 3rem}.chip.fill{border:none}dialog{--_padding: 1.5rem;display:block;visibility:hidden;border:none;opacity:0;position:fixed;box-shadow:var(--elevate2);color:var(--on-surface);background-color:var(--surface-container-high);padding:var(--_padding);z-index:100;inset:10% auto auto 50%;min-inline-size:20rem;max-inline-size:100%;max-block-size:80%;overflow-x:hidden;overflow-y:auto;transition:all var(--speed3),0s background-color;border-radius:1.75rem;transform:translate(-50%,-4rem);outline:none}dialog.small{inline-size:25%;block-size:25%}dialog.medium{inline-size:50%;block-size:50%}dialog.large{inline-size:75%;block-size:75%}dialog:is(.active,[open]){visibility:visible;opacity:1;transform:translate(-50%)}dialog:popover-open{visibility:visible;opacity:1;transform:translate(-50%)}dialog:is(.top,.right,.bottom,.left,.max){--_padding: 1rem;padding:calc(var(--top) + var(--_padding)) calc(var(--right) + var(--_padding)) calc(var(--bottom) + var(--_padding)) calc(var(--left) + var(--_padding))}dialog:is(.top,.bottom){opacity:1;block-size:auto;inline-size:100%;min-inline-size:auto;max-block-size:100%}dialog.top{inset:0 auto auto 0;transform:translateY(-100%);border-radius:0 0 1rem 1rem;padding-block-end:var(--_padding)}dialog.bottom{inset:auto auto 0 0;transform:translateY(100%);border-radius:1rem 1rem 0 0}dialog:is(.left,.right){opacity:1;inset:0 auto auto 0;inline-size:auto;block-size:100%;max-block-size:100%;background-color:var(--surface)}[dir=rtl] dialog.right,dialog.left{inset:0 auto auto 0;border-radius:0 1rem 1rem 0;transform:translate(-100%)}[dir=rtl] dialog.left,dialog.right{inset:0 0 auto auto;border-radius:1rem 0 0 1rem;transform:translate(100%)}dialog.max{inset:0 auto auto 0;inline-size:100%;block-size:100%;max-inline-size:100%;max-block-size:100%;transform:translateY(4rem);background-color:var(--surface);border-radius:0}dialog:not(.left,.right,.top,.bottom,.max){--top: 0rem;--bottom: 0rem;--left: 0rem;--right: 0rem}dialog:is(.active,[open]):is(.left,.right,.top,.bottom,.max){transform:translate(0)}dialog:popover-open:is(.left,.right,.top,.bottom,.max){transform:translate(0)}dialog.small:is(.left,.right){inline-size:20rem}dialog.medium:is(.left,.right){inline-size:32rem}dialog.large:is(.left,.right){inline-size:44rem}dialog.small:is(.top,.bottom){block-size:16rem}dialog.medium:is(.top,.bottom){block-size:24rem}dialog.large:is(.top,.bottom){block-size:32rem}hr,[class*=divider]{all:unset;min-inline-size:1.5rem;min-block-size:auto;block-size:.0625rem;background-color:var(--outline-variant);display:block}hr+*,[class*=divider]+*{margin:0!important}hr.medium,.medium-divider{margin:1rem 0!important}hr.large,.large-divider{margin:1.5rem 0!important}hr.small,.small-divider{margin:.5rem 0!important}hr.vertical,.divider.vertical{min-inline-size:auto;min-block-size:1.5rem;inline-size:.0625rem}summary,summary:focus{list-style-type:none;cursor:pointer;outline:none}summary::-webkit-details-marker{display:none}.field{--_size: 3rem;--_start: 1.2rem;block-size:var(--_size);margin-block-end:2rem;border-radius:.25rem .25rem 0 0}.grid>*>.field{margin-block-end:1rem}.grid>*>.field+.field{margin-block-start:2rem}.grid.no-space>*>.field+.field{margin-block-start:1rem}.grid.medium-space>*>.field+.field{margin-block-start:2.5rem}.grid.large-space>*>.field+.field{margin-block-start:3rem}.field.small{--_size: 2.5rem;--_start: 1rem}.field.large{--_size: 3.5rem;--_start: 1.4rem}.field.extra{--_size: 4rem;--_start: 1.6rem}.field.border{border-radius:.25rem}.field.round.small{border-radius:1.25rem}.field.round{border-radius:1.5rem}.field.round.large{border-radius:1.75rem}.field.round.extra{border-radius:2rem}.field>:is(i,img,svg,progress,a:not(.helper,.error)){position:absolute;inset:50% auto auto auto;transform:translateY(-50%);cursor:pointer;z-index:0;inline-size:1.5rem;block-size:1.5rem}.field>:is(i,img,svg,progress,a:not(.helper,.error)),[dir=rtl] .field>:is(i,img,svg,progress,a:not(.helper,.error)):first-child{inset:50% 1rem auto auto}.field>:is(i,img,svg,progress,a:not(.helper,.error)):first-child,[dir=rtl] .field>:is(i,img,svg,progress,a:not(.helper,.error)){inset:50% auto auto 1rem}.field.invalid>i{color:var(--error)}.field>progress.circle{inset-block-start:calc(50% - .75rem)!important;border-width:.1875rem}.field>a:not(.helper,.error){z-index:10}.field>a>:is(i,img,svg,progress,a:not(.helper,.error)){inline-size:1.5rem;block-size:1.5rem}.field>:is(input,textarea,select){all:unset;position:relative;display:flex;align-items:center;box-sizing:border-box;border-radius:inherit;border:.0625rem solid transparent;padding:0 .9375rem;font-family:inherit;font-size:1rem;inline-size:100%;block-size:100%;outline:none;z-index:1;background:none;resize:none;text-align:start;cursor:text}input::-webkit-date-and-time-value{text-align:start}:is(input,select,textarea):is(:-webkit-autofill,:autofill){-webkit-background-clip:text;-webkit-text-fill-color:var(--on-surface)}.field>:is(input,textarea,select):focus{border:.125rem solid transparent;padding:0 .875rem}.field.min>textarea{overflow:hidden;position:absolute;top:0;right:0;bottom:0;left:0;max-block-size:12rem}input[type=file],input[type=color],:not(.field)>input[type^=date],:not(.field)>input[type^=time],input::-webkit-calendar-picker-indicator{opacity:0;position:absolute;top:0;right:0;bottom:0;left:0;inline-size:100%;block-size:100%;margin:0;padding:0;border:0;outline:0;z-index:2!important}input::-webkit-search-decoration,input::-webkit-search-cancel-button,input::-webkit-search-results-button,input::-webkit-search-results-decoration,input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{display:none}input[type=number]{-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.field.border>:is(input,textarea,select){border-color:var(--outline)}.field.border>:is(input,textarea,select):focus{border-color:var(--primary)}.field.round>:is(input,textarea,select){padding-inline:1.4376rem}.field.round>:is(input,textarea,select):focus{padding-inline:1.375rem}.field.prefix>:is(input,textarea,select){padding-inline-start:2.9375rem}.field.prefix>.slider{margin-inline-start:3.5rem}.field.prefix>:is(input,textarea,select):focus{padding-inline-start:2.875rem}.field.suffix>:is(input,textarea,select){padding-inline-end:2.9375rem}.field.suffix>.slider{margin-inline-end:3.5rem}.field.suffix>:is(input,textarea,select):focus{padding-inline-end:2.875rem}.field:not(.border,.round)>:is(input,textarea,select){border-block-end-color:var(--outline)}.field:not(.border,.round)>:is(input,textarea,select):focus{border-block-end-color:var(--primary)}.field.round:not(.border,.fill)>:is(input,textarea,select),.field.round:not(.border)>:is(input,textarea,select):focus{box-shadow:var(--elevate1)}.field.round:not(.border,.fill)>:is(input,textarea,select):focus{box-shadow:var(--elevate2)}.field.invalid:not(.border,.round)>:is(input,textarea,select),.field.invalid:not(.border,.round)>:is(input,textarea,select):focus{border-block-end-color:var(--error)}.field.invalid.border>:is(input,textarea,select),.field.invalid.border>:is(input,textarea,select):focus{border-color:var(--error)}.field:has(>:disabled){opacity:.5;cursor:not-allowed}.field>:disabled{cursor:not-allowed}.field.textarea.small:not(.min){--_size: 5rem}.field.textarea:not(.min){--_size: 5.5rem}.field.textarea.large:not(.min){--_size: 6rem}.field.textarea.extra:not(.min){--_size: 6.5rem}.field>select{-webkit-user-select:none;user-select:none}.field>select>option{background-color:var(--surface-container);color:var(--on-surface)}.field.label>:is(input,select){padding-block-start:1rem}.field.label.border:not(.fill)>:is(input,select){padding-block-start:0}.field>textarea{padding-block-start:var(--_start);white-space:pre-wrap}.field>textarea:focus{padding-block-start:calc(var(--_start) - .06rem)}.field:not(.label)>textarea,.field.border.label:not(.fill)>textarea{padding-block-start:calc(var(--_start) - .5rem)}.field:not(.label)>textarea:focus,.field.border.label:not(.fill)>textarea:focus{padding-block-start:calc(var(--_start) - .56rem)}.field.label>label{position:absolute;inset:-.5rem auto auto 1rem;display:flex;inline-size:calc(100% - 5rem);block-size:calc(var(--_size) + 1rem);line-height:calc(var(--_size) + 1rem);font-size:1rem;transition:all .2s;gap:.25rem;white-space:nowrap}.field.label.textarea:not(.min)>label{block-size:calc(var(--_size) - 1.5rem);line-height:calc(var(--_size) - 1.5rem)}[dir=rtl] .field.label>label{inset:-.5rem 1rem auto auto}.field.label.border.prefix:not(.fill)>:is(label.active,:focus+label,[placeholder]:not(:placeholder-shown)+label,select+label){inset-inline-start:1rem}.field.label.round>label,.field.label.border.prefix.round:not(.fill)>:is(label.active,:focus+label,[placeholder]:not(:placeholder-shown)+label,select+label){inset-inline-start:1.5rem}.field.label.prefix>label{inset-inline-start:3rem}.field.label>:is(label.active,:focus+label,[placeholder]:not(:placeholder-shown)+label,select+label){block-size:2.5rem;line-height:2.5rem;font-size:.75rem}.field.label.border:not(.fill)>:is(label.active,:focus+label,[placeholder]:not(:placeholder-shown)+label,select+label){block-size:1rem;line-height:1rem}.field.label.border:not(.fill)>label:after{content:"";display:block;margin-block-start:.5rem;border-block-start:.0625rem solid var(--outline);block-size:1rem;transition:none;flex:auto}.field.label.border:not(.fill)>:focus+label:after{border-block-start:.125rem solid var(--primary)}.field.label.border:not(.fill)>:is(input,textarea):is(:focus,[placeholder]:not(:placeholder-shown),.active),.field.label.border:not(.fill)>select{clip-path:polygon(-2% -2%,.75rem -2%,.75rem .5rem,calc(100% - 5rem) .5rem,calc(100% - 5rem) -2%,102% -2%,102% 102%,-2% 102%)}[dir=rtl] .field.label.border:not(.fill)>:is(input,textarea):is(:focus,[placeholder]:not(:placeholder-shown),.active),[dir=rtl] .field.label.border:not(.fill)>select{clip-path:polygon(-2% -2%,5rem -2%,5rem .5rem,calc(100% - .75rem) .5rem,calc(100% - .75rem) -2%,102% -2%,102% 102%,-2% 102%)}.field.label.border.round:not(.fill)>:is(input,textarea):is(:focus,[placeholder]:not(:placeholder-shown),.active),.field.label.border.round:not(.fill)>select{clip-path:polygon(-2% -2%,1.25rem -2%,1.25rem .5rem,calc(100% - 5rem) .5rem,calc(100% - 5rem) -2%,102% -2%,102% 102%,-2% 102%)}[dir=rtl] .field.label.border.round:not(.fill)>:is(input,textarea):is(:focus,[placeholder]:not(:placeholder-shown),.active),[dir=rtl] .field.label.border.round:not(.fill)>select{clip-path:polygon(-2% -2%,5rem -2%,5rem .5rem,calc(100% - 1.25rem) .5rem,calc(100% - 1.25rem) -2%,102% -2%,102% 102%,-2% 102%)}.field.label>:focus+label{color:var(--primary)}.field.label.invalid>label,.field.label.invalid>label:after{color:var(--error)!important;border-color:var(--error)!important}.field.label>label>a{block-size:inherit;line-height:inherit;inline-size:1rem}.field.label>label>a>:is(i,img,svg){block-size:1rem;line-height:1rem;inline-size:1rem;font-size:1rem}.field>:is(.helper,.error){position:absolute;inset:auto auto 0 1rem;transform:translateY(100%);font-size:.75rem;background:none!important;padding-block-start:.125rem}[dir=rtl] .field>:is(.helper,.error){inset:auto 1rem 0 auto}a.helper{color:var(--primary)}.field>.error{color:var(--error)!important}.field.round>:is(.helper,.error){inset-inline-start:1.5rem}.field.invalid>.helper{display:none}table td>.field{margin:0}fieldset{border-radius:.25rem;padding:1rem;border:.0625rem solid var(--outline-variant)}fieldset>legend{margin:0 -.25rem;padding:0 .25rem}fieldset>legend+*{margin-block-start:0!important}.grid{--_gap: 1rem;display:grid;grid-template-columns:repeat(12,calc(8.33% - var(--_gap) + (var(--_gap) / 12)));gap:var(--_gap);block-size:auto}.grid.no-space{--_gap: 0rem}.grid.medium-space{--_gap: 1.5rem}.grid.large-space{--_gap: 2rem}.grid>*{margin:0}.s1{grid-area:auto/span 1}.s2{grid-area:auto/span 2}.s3{grid-area:auto/span 3}.s4{grid-area:auto/span 4}.s5{grid-area:auto/span 5}.s6{grid-area:auto/span 6}.s7{grid-area:auto/span 7}.s8{grid-area:auto/span 8}.s9{grid-area:auto/span 9}.s10{grid-area:auto/span 10}.s11{grid-area:auto/span 11}.s12{grid-area:auto/span 12}@media only screen and (min-width: 601px){.m1{grid-area:auto/span 1}.m2{grid-area:auto/span 2}.m3{grid-area:auto/span 3}.m4{grid-area:auto/span 4}.m5{grid-area:auto/span 5}.m6{grid-area:auto/span 6}.m7{grid-area:auto/span 7}.m8{grid-area:auto/span 8}.m9{grid-area:auto/span 9}.m10{grid-area:auto/span 10}.m11{grid-area:auto/span 11}.m12{grid-area:auto/span 12}}@media only screen and (min-width: 993px){.l1{grid-area:auto/span 1}.l2{grid-area:auto/span 2}.l3{grid-area:auto/span 3}.l4{grid-area:auto/span 4}.l5{grid-area:auto/span 5}.l6{grid-area:auto/span 6}.l7{grid-area:auto/span 7}.l8{grid-area:auto/span 8}.l9{grid-area:auto/span 9}.l10{grid-area:auto/span 10}.l11{grid-area:auto/span 11}.l12{grid-area:auto/span 12}}i,:is(.checkbox,.radio,.switch)>span:before,:is(.checkbox,.radio,.switch)>span>i{--_size: 1.5rem;font-family:var(--font-icon);font-weight:400;font-style:normal;font-size:var(--_size);letter-spacing:normal;text-transform:none;display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:"liga";-webkit-font-smoothing:antialiased;vertical-align:middle;text-align:center;overflow:hidden;inline-size:var(--_size);min-inline-size:var(--_size);block-size:var(--_size);min-block-size:var(--_size);box-sizing:content-box;line-height:normal;border-radius:0}i.tiny{--_size: 1rem}.chip>i,i.small{--_size: 1.25rem}i.medium{--_size: 1.5rem}i.large{--_size: 1.75rem}i.extra{--_size: 2rem}i.fill,a.row:is(:hover,:focus)>i,.transparent:is(:hover,:focus)>i{font-variation-settings:"FILL" 1}i>:is(img,svg){inline-size:100%;block-size:100%;background-size:100%;border-radius:inherit;position:absolute;inset:0 auto auto 0;padding:inherit}i[class*=fa-]{font-size:calc(var(--_size) * .85);line-height:normal;block-size:auto;min-block-size:auto}.absolute{position:absolute}.fixed{position:fixed}:is(.absolute,.fixed).left.right{inline-size:auto}:is(.absolute,.fixed).left.right.small{block-size:20rem}:is(.absolute,.fixed).left.right.medium{block-size:28rem}:is(.absolute,.fixed).left.right.large{block-size:44rem}:is(.absolute,.fixed).top.bottom.small{inline-size:20rem}:is(.absolute,.fixed).top.bottom.medium{inline-size:28rem}:is(.absolute,.fixed).top.bottom.large{inline-size:44rem}.list{display:flex;flex-direction:column;padding:0;margin:0;flex:1}.list>li,.list>li>details>summary,.list>li>a:only-child{all:unset;box-sizing:border-box;position:relative;display:flex;align-items:center;align-self:normal;text-align:start;justify-content:flex-start;white-space:nowrap;gap:1rem;min-block-size:3.5rem;padding:.5rem 1rem;cursor:pointer;flex:1}.list>li:has(ul,ol,details[open],a:only-child){padding:0}.list>li>.list{padding:0 0 0 1rem}.list>li>*,.list>li>a:only-child>*,.list>li>details>summary>*{margin:0}.list>li>:is(details,.max),.list>li>a:only-child>.max,.list>li>details>summary>.max{flex:1}.list.border>li:not(:last-child):before,.list.border>li>details[open]>summary:before{content:"";position:absolute;background-color:var(--outline-variant);inset:auto 0 0 0;block-size:.0625rem;inline-size:auto}.list.no-space>li,.list.no-space>li>details>summary{min-block-size:2.5rem}.list.medium-space>li,.list.medium-space>li>details>summary{min-block-size:4.5rem}.list.large-space>li,.list.large-space>li>details>summary{min-block-size:5.5rem}main{flex:1;padding:.5rem;overflow-x:hidden}:has(>main){--_top: 0rem;--_bottom: 0rem;--_left: 0rem;--_right: 0rem;display:flex;flex-direction:column;min-block-size:calc(100vh - var(--top) - var(--_top) - var(--bottom) - var(--_bottom));box-sizing:border-box;background-color:var(--surface);margin-block:calc(var(--top) + var(--_top)) calc(var(--bottom) + var(--_bottom));margin-inline:calc(var(--left) + var(--_left)) calc(var(--right) + var(--_right))}:has(>nav.top:not(.s,.m,.l)){--_top: 5rem}:has(>nav.bottom:not(.s,.m,.l)){--_bottom: 5rem}:has(>nav.left:not(.s,.m,.l)){--_left: 5rem}:has(>nav.right:not(.s,.m,.l)){--_right: 5rem}:has(>nav.drawer.left:not(.s,.m,.l)){--_left: 20rem}:has(>nav.drawer.right:not(.s,.m,.l)){--_right: 20rem}:not(main):has(>aside){overflow:auto}aside{z-index:1}aside:not(.fixed,.absolute).right{float:right}aside:not(.fixed,.absolute).left{float:left}@media only screen and (max-width: 600px){:has(>nav.bottom.s){--_bottom: 5rem}:has(>nav.top.s){--_top: 5rem}:has(>nav.left.s){--_left: 5rem}:has(>nav.right.s){--_right: 5rem}:has(>nav.drawer.left.s){--_left: 20rem}:has(>nav.drawer.right.s){--_right: 20rem}}@media only screen and (min-width: 601px) and (max-width: 992px){:has(>nav.bottom.m){--_bottom: 5rem}:has(>nav.top.m){--_top: 5rem}:has(>nav.left.m){--_left: 5rem}:has(>nav.right.m){--_right: 5rem}:has(>nav.drawer.left.m){--_left: 20rem}:has(>nav.drawer.right.m){--_right: 20rem}}@media only screen and (min-width: 993px){:has(>nav.bottom.l){--_bottom: 5rem}:has(>nav.top.l){--_top: 5rem}:has(>nav.left.l){--_left: 5rem}:has(>nav.right.l){--_right: 5rem}:has(>nav.drawer.left.l){--_left: 20rem}:has(>nav.drawer.right.l){--_right: 20rem}}svg{fill:currentcolor}:is(img,svg,video):is(.small,.medium,.large,.tiny,.extra,.round,.circle,.square,.responsive){--_size: 3rem;object-fit:cover;object-position:center;transition:transform var(--speed3),border-radius var(--speed3),padding var(--speed3);block-size:var(--_size);inline-size:var(--_size)}:is(img,svg,video).round{--_round: .5rem}:is(img,svg,video).tiny{--_size: 2rem}:is(img,svg,video).small{--_size: 2.5rem}:is(img,svg,video).large{--_size: 3.5rem}:is(img,svg,video).extra{--_size: 4rem}:is(img,svg,video).responsive{--_size: 100%;margin:0 auto}:is(img,svg,video).responsive.tiny{inline-size:100%;block-size:4rem}:is(img,svg,video).responsive.small{inline-size:100%;block-size:8rem}:is(img,svg,video).responsive.medium{inline-size:100%;block-size:12rem}:is(img,svg,video).responsive.large{inline-size:100%;block-size:16rem}:is(img,svg,video).responsive.extra{inline-size:100%;block-size:20rem}:is(img,svg,video).responsive.round{--_round: 2rem}:is(img,svg,video).empty-state{max-inline-size:100%;inline-size:24rem}:is(button,.button,.chip):not(.transparent)>.responsive{border:.25rem solid transparent}:is(button,.button,.chip,.field)>:is(img,svg):not(.responsive),.tabs :is(img,svg):not(.responsive){min-inline-size:1.5rem;max-inline-size:1.5rem;min-block-size:1.5rem;max-block-size:1.5rem}:is(button,.button,.chip)>.responsive:first-child{margin-inline-start:calc(-1 * var(--_padding))}:is(button,.button,.chip)>.responsive:not(:first-child){margin-inline-end:calc(-1 * var(--_padding))}:is(button,.button,.chip,.circle,.square,.extend)>.responsive{--_size: inherit;margin:0 auto}.extend>:is(.responsive,i){margin:0;position:absolute;inset-inline:1rem;z-index:1}.extend>.responsive{inset-inline:0;inline-size:3.5rem}.extend.border>.responsive{inline-size:3.375rem}menu{opacity:0;visibility:hidden;position:absolute;box-shadow:var(--elevate2);background-color:var(--surface-container);z-index:11;inset:auto auto 0 0;inline-size:100%;max-block-size:50vh;max-inline-size:none!important;overflow-x:hidden;overflow-y:auto;font-size:.875rem;font-weight:400;text-transform:none;color:var(--on-surface);line-height:normal;text-align:start;border-radius:.25rem;transform:scale(.8) translateY(120%);transition:all var(--speed2),0s background-color;justify-content:flex-start}[dir=rtl] menu{inset:auto 0 0 auto}menu.no-wrap{inline-size:max-content;white-space:nowrap!important}menu.active,:not(menu,[data-ui]):focus-within>menu,menu>li:hover>menu,menu>li>menu:hover{opacity:1;visibility:visible;transform:scale(1) translateY(100%)}menu.active.top,:not(menu,[data-ui]):focus-within>menu.top,menu>li:hover>menu.top,menu>li>menu.top:hover{transform:scale(1) translateY(-100%)}menu *{white-space:inherit!important}menu>li,menu>li>a:only-child{all:unset;box-sizing:border-box;position:relative;display:flex;align-items:center;align-self:normal;text-align:start;justify-content:inherit;white-space:nowrap;gap:1rem;padding:.5rem 1rem;min-block-size:3rem;flex:1;margin:0!important;cursor:pointer}menu>li:is(:hover,:focus,.active){background-color:var(--active)}menu>li>:is(.max,.field),menu>li>a:only-child>.max,menu>li:has(.field,a:only-child){flex:1;padding:0;margin:0}menu.min{inset:0 0 auto 0;transform:none!important;background-color:var(--surface-variant)!important;color:var(--on-surface-variant)!important}[dir=rtl] menu.min.right,menu.min.left,menu.top.left{inset:0 0 auto auto}[dir=rtl] menu.min.left,menu.min.right,menu.top,menu.top.right{inset:0 auto auto 0}menu.max{position:fixed;top:0;right:0;bottom:0;left:0;block-size:100%;max-block-size:none;min-block-size:auto;z-index:100;transform:none!important;background-color:var(--surface-variant)!important;color:var(--on-surface-variant)!important;border-radius:0}menu.no-wrap:is(.min,.max){min-inline-size:16rem}[dir=rtl] menu.right,[dir=rtl] menu.top.min.right,menu.left,menu.top.min.left{inset:auto 0 0 auto}[dir=rtl] menu.left,[dir=rtl] menu.top.min.left,menu.right,menu.top.min{inset:auto auto 0 0}menu.top{transform:scale(.8) translateY(-120%)}menu:has(menu){--_child: 1;--_type: 0;overflow:unset;white-space:nowrap;inline-size:auto;min-inline-size:12rem;max-block-size:none}menu>li>:is(menu,menu.right),[dir=rtl] menu>li>menu.left{inset:auto auto calc(3rem * (var(--_child) - var(--_type))) 100%}[dir=rtl] menu>li>:is(menu,menu.right),menu>li>menu.left{inset:auto 100% calc(3rem * (var(--_child) - var(--_type))) auto}menu>li>:is(menu.top,menu.top.right),[dir=rtl] menu>li>menu.top.left{inset:calc(3rem * (var(--_child) - var(--_type))) auto auto 100%}[dir=rtl] menu>li>:is(menu.top,menu.top.right),menu>li>menu.top.left{inset:calc(3rem * (var(--_child) - var(--_type))) 100% auto auto}menu.no-space>li{min-block-size:2.5rem}menu.medium-space>li{min-block-size:3.5rem}menu.large-space>li{min-block-size:4rem}menu.border>li:not(:last-child):before{content:"";position:absolute;background-color:var(--outline-variant);inset:auto 0 0 0;block-size:.0625rem;inline-size:auto}menu.transparent{margin:0 -1rem!important;padding:.5rem}menu.transparent>li{background-color:inherit;box-shadow:none;padding:0}menu>li:nth-last-child(2){--_child: 2}menu>li:nth-last-child(3){--_child: 3}menu>li:nth-last-child(4){--_child: 4}menu>li:nth-last-child(5){--_child: 5}menu>li:nth-last-child(6){--_child: 6}menu>li:nth-last-child(7){--_child: 7}menu>li:nth-last-child(8){--_child: 8}menu>li:nth-last-child(9){--_child: 9}menu>li:nth-last-child(10){--_child: 10}menu>li:nth-last-child(11){--_child: 11}menu>li:nth-last-of-type(2){--_type: 1}menu>li:nth-last-of-type(3){--_type: 2}menu>li:nth-last-of-type(4){--_type: 3}menu>li:nth-last-of-type(5){--_type: 4}menu>li:nth-last-of-type(6){--_type: 5}menu>li:nth-last-of-type(7){--_type: 6}menu>li:nth-last-of-type(8){--_type: 7}menu>li:nth-last-of-type(9){--_type: 8}menu>li:nth-last-of-type(10){--_type: 9}menu>li:nth-last-of-type(11){--_type: 10}nav>:is(ol,ul),nav>:is(ol,ul)>li{all:unset}nav,.row,a.row,nav.drawer>:is(a,label),nav.drawer>:is(ol,ul)>li>:is(a,label){display:flex;align-items:center;align-self:normal;text-align:start;justify-content:flex-start;white-space:nowrap;gap:1rem;border-radius:0}a.row,nav.row{min-block-size:3rem;margin:0}:is(nav,.row,.max)>:only-child,nav>:is(ol,ul)>li>:only-child{margin:0}:is(nav,.row)>:not(ul,ol){margin:0;white-space:normal;flex:none}:is(nav,.row).min{display:inline-flex}:is(nav,.row,li).no-space{gap:0}:is(nav,.row,li).tiny-space{gap:.5rem}:is(nav,.row,li).medium-space{gap:1.5rem}:is(nav,.row,li).large-space{gap:2rem}:is(nav,.row)>.max,:is(nav,.row)>:is(ol,ul)>.max,nav.drawer>:is(a,label)>.max,nav.drawer>:is(ol,ul)>li>:is(a,label)>.max{flex:1}:is(nav,.row).wrap{display:flex;flex-wrap:wrap}:is(header,footer)>:is(nav,.row){min-block-size:inherit}nav:is(.left,.right,.top,.bottom){border:0;position:fixed;color:var(--on-surface);transform:none;z-index:100;block-size:auto;inline-size:auto;text-align:center;padding:calc(var(--top) + .5rem) calc(var(--right) + 1rem) calc(var(--bottom) + .5rem) calc(var(--left) + 1rem);margin:0}nav:is(.left,.right){justify-content:flex-start;flex-direction:column;background-color:var(--surface)}nav:is(.top,.bottom){justify-content:center;flex-direction:row;background-color:var(--surface-container)}nav.top{block-size:calc(var(--top) + 5rem);inset:0 0 auto 0;padding-block-end:.5rem}nav.left,[dir=rtl] nav.right{inline-size:calc(var(--left) + 5rem);inset:0 auto 0 0;padding-inline-end:1rem}[dir=rtl] nav.right{padding-inline-end:calc(var(--left) + 1rem)}nav.right,[dir=rtl] nav.left{inline-size:calc(var(--right) + 5rem);inset:0 0 0 auto;padding-inline-start:1rem}[dir=rtl] nav.left{padding-inline-start:calc(var(--right) + 1rem)}nav.bottom{min-block-size:calc(var(--bottom) + 5rem);inset:auto 0 0 0;padding-block-start:.5rem}nav.drawer,[dir=rtl] nav.drawer{flex-direction:column;align-items:normal;inline-size:20rem;gap:0}nav.drawer:not(.left,.right,.top,.bottom){padding:.5rem 1rem}dialog>nav.drawer:not(.left,.right,.top,.bottom){padding:0 1rem;background-color:inherit}nav.drawer:is(.min,.max){inline-size:auto}nav.drawer.max{inline-size:100%}nav.drawer>:is(a,label),nav.drawer>:is(ol,ul)>li>:is(a,label),:is(a.row,nav.row):is(.wave,.slow-ripple,.ripple,.fast-ripple){padding:.75rem;font-size:inherit}nav.drawer>a,nav.drawer>:is(ol,ul)>li>a{border-radius:2rem}nav.drawer>a:is(:hover,.active),nav.drawer>:is(ol,ul)>li>a:is(:hover,.active){background-color:var(--secondary-container)}nav.drawer>a:is(:hover,:focus,.active)>i,nav.drawer>:is(ol,ul)>li>a:is(:hover,:focus,.active)>i{font-variation-settings:"FILL" 1}nav>:is(ol,ul){all:inherit;flex:auto}nav:not(.left,.right,.bottom,.top)>:is(ol,ul){padding:0}nav:is(.left,.right,.top,.bottom):not(.drawer)>a:not(.button,.chip),nav:is(.left,.right,.top,.bottom):not(.drawer)>:is(ol,ul)>li>a:not(.button,.chip){align-self:center;display:flex;flex-direction:column;gap:.25rem;line-height:normal}nav:is(.top,.bottom):not(.drawer)>a:not(.button,.chip),nav:is(.top,.bottom):not(.drawer)>:is(ol,ul)>li>a:not(.button,.chip){inline-size:3.5rem}nav:is(.left,.right,.top,.bottom):not(.drawer)>a:not(.button,.chip)>i,nav:is(.left,.right,.top,.bottom):not(.drawer)>:is(ol,ul)>li>a:not(.button,.chip)>i{padding:.25rem;border-radius:2rem;transition:padding var(--speed1) linear;margin:0 auto}nav:is(.left,.right,.top,.bottom):not(.drawer)>a:not(.button,.chip):is(:hover,:focus,.active)>i,nav:is(.left,.right,.top,.bottom):not(.drawer)>:is(ol,ul)>li>a:not(.button,.chip):is(:hover,:focus,.active)>i{background-color:var(--secondary-container);color:var(--on-secondary-container);padding:.25rem 1rem;font-variation-settings:"FILL" 1}nav:is(.left,.right,.top,.bottom):not(.drawer)>a:not(.button,.chip).active{background:none!important;color:currentColor!important}:is(nav,.row):is(.left-align,.top-align,.vertical){justify-content:flex-start}:is(nav,.row):is(.right-align,.bottom-align){justify-content:flex-end}:is(nav,.row):is(.center-align,.middle-align){justify-content:center}:is(nav,.row):is(.left-align,.top-align,.vertical).vertical{align-items:flex-start}:is(nav,.row):is(.right-align,.bottom-align).vertical{align-items:flex-end}:is(nav,.row):is(.center-align,.middle-align).vertical{align-items:center}:is(.drawer,.vertical)>:is(li,[class*=divider],hr):not(.vertical),:is(.drawer,.vertical)>:is(ol,ul)>li:not(.vertical){align-self:stretch}nav:not(.left,.right)>.space{inline-size:.5rem}nav:not(.left,.right)>.medium-space{inline-size:1rem}nav:not(.left,.right)>.large-space{inline-size:1.5rem}nav.tabbed{background-color:var(--surface-container);border-radius:4rem!important;gap:0rem;block-size:4rem}nav.tabbed.small{block-size:3rem}nav.tabbed.large{block-size:5rem}nav.tabbed>a{border-radius:inherit;block-size:inherit;display:inline-flex;align-items:center;padding-inline:1rem;gap:.5rem;font-size:1rem;flex:1}nav.tabbed>a.active{background-color:var(--primary-container)}nav.toolbar{display:inline-flex;justify-content:space-around;border-radius:2rem;background-color:var(--surface-container);color:var(--on-surface);padding:0 1rem;gap:.5rem;min-block-size:4rem;min-inline-size:4rem}nav.toolbar>a{display:inline-flex;gap:.5rem;min-inline-size:2.5rem;min-block-size:2.5rem;border-radius:1.75rem}nav.toolbar>a:has(>:not(i)){padding:0 1rem}nav.toolbar>a.active{background-color:var(--secondary-container);color:var(--on-secondary-container)}nav.toolbar.fill{background-color:var(--primary-container)!important;color:var(--on-primary-container)!important}nav.toolbar.fill>a.active{background-color:var(--surface-container)!important;color:var(--on-surface)!important}nav.toolbar.vertical{flex-direction:column!important;min-inline-size:4rem;padding:1rem 0;align-self:center;align-items:center!important}nav.toolbar.vertical>a{inline-size:2.5rem;block-size:2.5rem}nav.toolbar.vertical>a>:is(div,span):not(.badge,.tooltip){display:none}nav.toolbar.max{border-radius:0;display:flex}nav.group{background:none!important}nav.group:is(.connected,.split){gap:.125rem}nav.group:not(.split)>:is(.button,button):not(.chip,.fill,.border).active{background-color:var(--primary);color:var(--on-primary)}nav.group:not(.split)>:is(.button,button):not(.chip,.fill,.border){background-color:var(--surface-container);color:var(--on-surface-container)}nav.group:is(.connected,.split)>:is(.button,button):not(.chip).active,nav.split>:is(.button,button):active{border-radius:2rem!important}:not(nav)>:is(ul,ol){all:revert}:is(.scroll,.no-scroll,.no-space,.tabs,.tabbed)>:focus-visible{outline:.125rem solid var(--primary);outline-offset:-.125rem}nav.split>:is(.button,button):not(.chip,.fill,.border){background-color:var(--primary);color:var(--on-primary)}nav.primary>:is(button,.button),nav:not(.toolbar,.tabbed,.drawer,.group).primary-container>a:is(:hover,:focus,.active)>i,nav.drawer.primary-container>a:is(:hover,:focus,.active),nav:not(.split).primary-container>:is(a,button,.button).active,:is(a,button,.button):not(.extend).primary-container.active{background-color:var(--primary)!important;color:var(--on-primary)!important}nav.primary-container>:is(button,.button),nav:not(.toolbar,.tabbed,.drawer,.group).primary>a:is(:hover,:focus,.active)>i,nav.drawer.primary>a:is(:hover,:focus,.active),nav:not(.split).primary>:is(a,button,.button).active,:is(a,button,.button):not(.extend).primary.active{background-color:var(--primary-container)!important;color:var(--on-primary-container)!important}nav.secondary>:is(button,.button),nav:not(.toolbar,.tabbed,.drawer,.group).secondary-container>a:is(:hover,:focus,.active)>i,nav.drawer.secondary-container>a:is(:hover,:focus,.active),nav:not(.split).secondary-container>:is(a,button,.button).active,:is(a,button,.button):not(.extend).secondary-container.active{background-color:var(--secondary)!important;color:var(--on-secondary)!important}nav.secondary-container>:is(button,.button),nav:not(.toolbar,.tabbed,.drawer,.group).secondary>a:is(:hover,:focus,.active)>i,nav.drawer.secondary>a:is(:hover,:focus,.active),nav:not(.split).secondary>:is(a,button,.button).active,:is(a,button,.button):not(.extend).secondary.active{background-color:var(--secondary-container)!important;color:var(--on-secondary-container)!important}nav.tertiary>:is(button,.button),nav:not(.toolbar,.tabbed,.drawer,.group).tertiary-container>a:is(:hover,:focus,.active)>i,nav.drawer.tertiary-container>a:is(:hover,:focus,.active),nav:not(.split).tertiary-container>:is(a,button,.button).active,:is(a,button,.button):not(.extend).tertiary-container.active{background-color:var(--tertiary)!important;color:var(--on-tertiary)!important}nav.tertiary-container>:is(button,.button),nav:not(.toolbar,.tabbed,.drawer,.group).tertiary>a:is(:hover,:focus,.active)>i,nav.drawer.tertiary>a:is(:hover,:focus,.active),nav:not(.split).tertiary>:is(a,button,.button).active,:is(a,button,.button):not(.extend).tertiary.active{background-color:var(--tertiary-container)!important;color:var(--on-tertiary-container)!important}@media only screen and (max-width: 600px){nav.top,nav.bottom{justify-content:space-around}}.overlay,dialog::backdrop{display:block!important;opacity:0;visibility:hidden;position:fixed;top:0;right:0;bottom:0;left:0;color:var(--on-surface);background-color:var(--overlay);z-index:100;transition:all var(--speed3),0s background-color}.overlay.active{opacity:1;visibility:visible}dialog:popover-open::backdrop{opacity:1;visibility:visible}.overlay+dialog::backdrop,.snackbar::backdrop{display:none}[popover]{border:0}.page{--_transform: translate(0, 0);opacity:0;position:absolute;display:none}.page.active{opacity:1;position:inherit;display:inherit;animation:var(--speed4) to-page ease}.page.active.top{--_transform: translate(0, -4rem)}.page.active.bottom{--_transform: translate(0, 4rem)}.page.active.left{--_transform: translate(-4rem, 0)}.page.active.right{--_transform: translate(4rem, 0)}@keyframes to-page{0%{opacity:0;transform:var(--_transform)}to{opacity:1;transform:translate(0)}}progress{position:relative;inline-size:100%;block-size:.5rem;color:var(--primary);background:var(--primary-container);border-radius:1rem;flex:none;border:none;overflow:hidden;writing-mode:horizontal-tb;direction:ltr;-webkit-appearance:none}progress.small{inline-size:4rem}progress.medium{inline-size:8rem}progress.large{inline-size:12rem}progress:not(.circle,[value]):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;inline-size:100%;block-size:100%;clip-path:none;background:currentcolor;animation:1.6s to-linear ease infinite}progress:not(.circle,[value])::-moz-progress-bar{animation:1.6s to-linear ease infinite}progress:not(.circle,[value])::-webkit-progress-value{animation:1.6s to-linear ease infinite}progress::-webkit-progress-bar{background:none}progress::-webkit-progress-value{background:currentcolor}progress::-moz-progress-bar{background:currentcolor}progress.circle{display:inline-block;inline-size:2.5rem;block-size:2.5rem;border-radius:50%;border-width:.3rem;border-style:solid;border-color:currentcolor;animation:1.6s to-circular linear infinite;background:none;flex:none}progress.circle::-moz-progress-bar{background:none}progress.circle.small{inline-size:1.5rem;block-size:1.5rem;border-width:.2rem}progress.circle.large{inline-size:3.5rem;block-size:3.5rem;border-width:.4rem}:is(nav,.row,.field)>progress:not(.circle,.small,.medium,.large){flex:auto}progress.max{display:unset;position:absolute;inline-size:100%!important;block-size:100%!important;color:var(--active);background:none;top:0;right:0;bottom:0;left:0;border-radius:inherit;animation:none;writing-mode:horizontal-tb}progress:is(.horizontal,.vertical,.max){display:unset;inline-size:100%!important}progress.vertical{writing-mode:vertical-lr}progress.max.vertical{transform:rotate(-180deg)}progress.max+*{margin-block-start:0}:is(.button,button,.chip)>progress.circle{color:inherit}@supports (-moz-appearance:none){progress.max.vertical{transform:none}}@keyframes to-linear{0%{margin-inline-start:0%;inline-size:0%}50%{margin-inline-start:0%;inline-size:100%}to{margin-inline-start:100%;inline-size:0%}}@keyframes to-circular{0%{transform:rotate(0);clip-path:polygon(50% 50%,0% 0%,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%,50% 0%)}20%{clip-path:polygon(50% 50%,0% 0%,50% 0%,100% 0%,100% 0%,100% 0%,100% 0%,100% 0%,100% 0%)}30%{clip-path:polygon(50% 50%,0% 0%,50% 0%,100% 0%,100% 50%,100% 50%,100% 50%,100% 50%,100% 50%)}40%{clip-path:polygon(50% 50%,0% 0%,50% 0%,100% 0%,100% 50%,100% 100%,100% 100%,100% 100%,100% 100%)}50%{clip-path:polygon(50% 50%,50% 0%,50% 0%,100% 0%,100% 50%,100% 100%,50% 100%,50% 100%,50% 100%)}60%{clip-path:polygon(50% 50%,100% 50%,100% 50%,100% 50%,100% 50%,100% 100%,50% 100%,0% 100%,0% 100%)}70%{clip-path:polygon(50% 50%,50% 100%,50% 100%,50% 100%,50% 100%,50% 100%,50% 100%,0% 100%,0% 50%)}80%{clip-path:polygon(50% 50%,0% 100%,0% 100%,0% 100%,0% 100%,0% 100%,0% 100%,0% 100%,0% 50%)}90%{transform:rotate(360deg);clip-path:polygon(50% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%)}to{clip-path:polygon(50% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%,0% 50%)}}.checkbox,.radio,.switch{--_size: 1.5rem;direction:ltr;inline-size:auto;block-size:auto;line-height:normal;white-space:nowrap;cursor:pointer;display:inline-flex;align-items:center}:is(.checkbox,.radio,.switch).small{--_size: 1rem}:is(.checkbox,.radio,.switch).large{--_size: 2rem}:is(.checkbox,.radio,.switch).extra{--_size: 2.5rem}:is(.checkbox,.radio)>input{inline-size:var(--_size);block-size:var(--_size);opacity:0}.switch>input{inline-size:3.25rem;block-size:2rem;opacity:0}:is(.checkbox,.radio,.switch)>span{display:inline-flex;align-items:center;color:var(--on-surface);font-size:.875rem}:is(.checkbox,.radio)>span:not(:empty){padding-inline-start:.25rem}:is(.checkbox,.radio,.switch)>span:before,:is(.checkbox,.radio,.switch)>span>i,:is(.checkbox,.radio)>span:after{--_size: inherit;content:"";inline-size:var(--_size);block-size:var(--_size);box-sizing:border-box;margin:0 auto;outline:none;color:var(--primary);position:absolute;inset:auto auto auto calc(var(--_size) * -1);border-radius:50%;-webkit-user-select:none;user-select:none;z-index:1}.switch>span:before,.switch.icon>span>i{position:absolute;inset:50% auto auto 0;display:inline-flex;align-items:center;justify-content:center;border-radius:50%;transition:all var(--speed2);font-size:calc(var(--_size) - .5rem);-webkit-user-select:none;user-select:none;min-inline-size:var(--_size);min-block-size:var(--_size);content:"";color:var(--surface-variant);background-color:var(--outline)}.switch>span:before,.switch.icon>span>i{transform:translate(-3rem,-50%) scale(.6)}.switch.icon>span>i{transform:translate(-3rem,-50%) scale(1)}.checkbox>span:before{content:"check_box_outline_blank"}.checkbox>input:checked+span:before{content:"check_box";font-variation-settings:"FILL" 1}.checkbox>input:indeterminate+span:before{content:"indeterminate_check_box"}.radio>span:before{content:"radio_button_unchecked"}.radio>input:checked+span:before{content:"radio_button_checked"}:is(.radio,.checkbox,.switch).icon>span:before{content:""!important;font-variation-settings:unset!important}:is(.checkbox,.radio)>span:after{transition:all var(--speed1);background-color:currentColor;box-shadow:0 0 0 0 currentColor;opacity:0}:is(.checkbox,.radio):is(:hover)>input:not(:disabled)+span:after,:is(.checkbox,.radio)>input:not(:disabled):is(:focus)+span:after{box-shadow:0 0 0 .5rem currentColor;opacity:.1}.switch>input:not(:disabled):is(:focus,:hover)+span:before,.switch.icon>input:not(:disabled):is(:focus,:hover)+span>i{box-shadow:0 0 0 .5rem var(--active)}:is(.checkbox,.radio)>input:checked+span:before,:is(.checkbox,.radio).icon>input:checked+span>i{color:var(--primary)}.icon>input:checked+span>i:first-child,.icon>span>i:last-child{opacity:0}.icon>input:checked+span>i:last-child,.icon>span>i:first-child{opacity:1}.switch>input:checked+span:after{border:none;background-color:var(--primary)}.switch>input:checked+span:before,.switch.icon>input:checked+span>i{content:"check";color:var(--primary);background-color:var(--on-primary);transform:translate(-1.75rem,-50%) scale(1)}.switch>input:active:not(:disabled)+span:before,.switch.icon>input:active:not(:disabled)+span>i{transform:translate(-3rem,-50%) scale(1.2)}.switch>input:active:checked:not(:disabled)+span:before,.switch.icon>input:active:checked:not(:disabled)+span>i{transform:translate(-1.75rem,-50%) scale(1.2)}:is(.checkbox,.radio,.switch)>input:disabled+span{opacity:.5;cursor:not-allowed}.switch>span:after{content:"";position:absolute;inset:50% auto auto 0;background-color:var(--active);border:.125rem solid var(--outline);box-sizing:border-box;inline-size:3.25rem;block-size:2rem;border-radius:2rem;transform:translate(-3.25rem,-50%)}.field>:is(nav,.row){flex-grow:1;padding:0 1rem}.field.round>:is(nav,.row){flex-grow:1;padding:0 1.5rem}[dir=rtl] .switch{transform:scale(-1)}[dir=rtl] .switch>span:before,[dir=rtl] .switch.icon>span>i{transform:translate(-3rem,-50%) scale(-.6)}[dir=rtl] .switch.icon>span>i{transform:translate(-3rem,-50%) scale(-1)}[dir=rtl] .switch>input:checked+span:before,[dir=rtl] .switch.icon>input:checked+span>i{transform:translate(-1.75rem,-50%) scale(-1)}.switch>:focus-visible+span:after{outline:.125rem solid var(--primary);outline-offset:.25rem}:is(.checkbox,.radio)>:focus-visible+span:before{outline:.125rem solid var(--primary);outline-offset:.375rem}.slider{--_start: 0%;--_end: 0%;--_value1: "";--_value2: "";--_track: 1rem;--_thumb: max(2.5rem, calc(var(--_track) + .5rem));display:flex;align-items:center!important;inline-size:auto;block-size:var(--_thumb);flex:none;direction:ltr;margin:0 1.25rem}[dir=rtl] .slider{transform:scaleX(-1)}.slider.vertical{flex-direction:row!important;margin:.5rem auto!important;padding:50% 0;transform:rotate(-90deg);inline-size:100%}.slider.tiny{--_track: 1rem}.slider.small{--_track: 1.5rem}.slider.medium{--_track: 2.5rem}.slider.large{--_track: 3.5rem}.slider.extra{--_track: 6rem}.slider>input{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-shadow:none;border:none;outline:none;pointer-events:none;inline-size:100%;block-size:var(--_track);background:none;z-index:1;padding:0;margin:0;transform:rotate(0)}.slider>input:only-of-type{pointer-events:all}.slider>input+input{position:absolute}.slider>input::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-shadow:none;border:none;outline:none;pointer-events:all;block-size:var(--_thumb);inline-size:.25rem;border-radius:.25rem;background:var(--primary);cursor:grab;margin:0;z-index:1}.slider>input::-webkit-slider-thumb:active{cursor:grabbing}.slider>input::-moz-range-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;box-shadow:none;border:none;outline:none;pointer-events:all;block-size:2.75rem;inline-size:.25rem;border-radius:.25rem;background:var(--primary);cursor:grab;margin:0}.slider>input::-moz-range-thumb:active{cursor:grabbing}.slider>input:not(:disabled):is(:focus)::-webkit-slider-thumb{transform:scaleX(.6)}.slider>input:not(:disabled):is(:focus)::-moz-range-thumb{transform:scaleX(.6)}.slider>input:disabled{cursor:not-allowed;opacity:1}.slider>input:disabled::-webkit-slider-thumb{background:var(--outline);cursor:not-allowed}.slider>input:disabled::-moz-range-thumb{background:var(--outline);cursor:not-allowed}.slider>input:disabled~span{background:var(--outline)}.slider>span{position:absolute;block-size:var(--_track);border-radius:1rem 0 0 1rem;background:var(--primary);color:var(--on-primary);z-index:0;inset:calc(50% - (var(--_track) / 2)) var(--_end) auto var(--_start);clip-path:polygon(0 0,calc(100% - .5rem) 0,calc(100% - .5rem) 100%,0 100%)}.slider>input[type=range]+input[type=range]~span{border-radius:0;clip-path:polygon(.5rem 0,max(.5rem,calc(100% - .5rem)) 0,max(.5rem,calc(100% - .5rem)) 100%,.5rem 100%)}.field>.slider{inline-size:100%}.slider:before{content:"";position:absolute;inline-size:100%;block-size:var(--_track);border-radius:1rem;background:var(--secondary-container);clip-path:polygon(calc(var(--_start) - .5rem) 0,0 0,0 100%,calc(var(--_start) - .5rem) 100%,calc(var(--_start) - .5rem) 0,calc(100% - var(--_end) + .5rem) 0,100% 0,100% 100%,calc(100% - var(--_end) + .5rem) 100%,calc(100% - var(--_end) + .5rem) 0)}.slider:has(>[disabled]):before{background:var(--outline-variant)}.slider:has([disabled]){opacity:.62}.slider>span>i{position:absolute;block-size:auto;inset:0 auto 0 .5rem;color:currentColor;z-index:1}.slider:not(.medium,.large,.extra)>span>i{display:none}.slider.vertical>i{transform:rotate(90deg)}.slider>.tooltip{visibility:hidden!important;opacity:0!important;inset:0 auto auto calc(100% - var(--_end));border-radius:2rem;transition:top var(--speed2) ease,opacity var(--speed2) ease;transform:translate(-50%,-50%)!important;padding:.75rem 1rem}[dir=rtl] .slider>.tooltip{transform:translate(-50%,-50%) scaleX(-1)!important}.slider>.tooltip+.tooltip{inset:.25rem calc(100% - var(--_start)) auto auto;transform:translate(50%,-50%)!important}[dir=rtl] .slider>.tooltip+.tooltip{transform:translate(50%,-50%) scaleX(-1)!important}.slider>.tooltip:before{content:var(--_value1)}.slider>.tooltip+.tooltip:before{content:var(--_value2)}.slider>:focus~.tooltip{inset-block-start:-1rem!important;opacity:1!important;visibility:visible!important}.slider.vertical>.tooltip{inset-block-start:auto!important;margin-block-start:calc(-1 * var(--_thumb))!important;block-size:2.5rem;inline-size:2.5rem;transform:rotate(90deg) translate(-75%,50%)!important}.slider.vertical>.tooltip+.tooltip{transform:rotate(90deg) translate(-75%,-50%)!important}:is(nav,.row,.field)>.slider:not(.circle,.small,.medium,.large){flex:auto}.slider.max,.slider.max.vertical,.slider.max>input,.slider.max.vertical>input{all:unset;margin:0!important;position:absolute;color:var(--primary);top:0;right:0;bottom:0;left:0;border-radius:inherit;overflow:hidden;z-index:2;cursor:grab;inline-size:100%;block-size:100%}.slider.max:before{display:none}.slider.max.vertical>input{writing-mode:vertical-lr;transform:rotate(-180deg)}.slider.max>input::-webkit-slider-thumb{opacity:0;inline-size:1rem;block-size:100vh;transform:none!important}.slider.max>input::-moz-range-thumb{opacity:0;inline-size:1rem;block-size:100vh;transform:none!important}.slider.max>span{block-size:auto!important;inset:0 var(--_end) 0 var(--_start);clip-path:none;background:currentcolor;color:inherit;border-radius:0}.slider.max.vertical>span{inset:var(--_end) 0 var(--_start) 0}.slider>input:focus-visible::-webkit-slider-thumb{outline:.1875rem solid var(--primary);outline-offset:.25rem}.slider>input:focus-visible::-moz-range-thumb{outline:.1875rem solid var(--primary);outline-offset:.25rem}.slider.max>input:focus-visible{outline:.1875rem solid var(--primary);outline-offset:-.125rem}@media (pointer: coarse){.slider>:hover~.tooltip{inset-block-start:-1rem!important;opacity:1!important;visibility:visible!important}}.snackbar{position:fixed;inset:auto auto 6rem 50%;inline-size:80%;block-size:auto;z-index:200;visibility:hidden;display:flex;box-shadow:var(--elevate2);color:var(--inverse-on-surface);background-color:var(--inverse-surface);padding:1rem;cursor:pointer;text-align:start;align-items:center;border-radius:.25rem;gap:.5rem;transition:all var(--speed2);transform:translate(-50%,1rem);opacity:0}.snackbar.top{inset:6rem auto auto 50%}.snackbar:is(.active){visibility:visible;transform:translate(-50%);opacity:1}.snackbar:popover-open{visibility:visible;transform:translate(-50%);opacity:1}.snackbar>.max{flex:auto}@media only screen and (min-width: 993px){.snackbar{inline-size:40%}}table{inline-size:100%;border-spacing:0;font-size:.875rem;text-align:start}.scroll>table,table :is(thead,tbody,tfoot,tr,th,td){background-color:inherit;color:inherit}:is(th,td){inline-size:auto;text-align:inherit;padding:.5rem;border-radius:0}:is(th,td)>*{vertical-align:middle}table.border>tbody>tr:not(:last-child)>td,thead>tr>th{border-block-end:.0625rem solid var(--outline)}tfoot>tr>th{border-block-start:.0625rem solid var(--outline)}table.stripes>tbody>tr:nth-child(odd){background-color:var(--active)}table.no-space :is(th,td){padding:0}table.medium-space :is(th,td){padding:.75rem}table.large-space :is(th,td){padding:1rem}table>.fixed,th.fixed{position:sticky;z-index:1;inset-block-start:0}tfoot.fixed,tfoot th.fixed{inset-block-end:0}:is(td,th).min{inline-size:.1%;white-space:nowrap}.tabs{display:flex;white-space:nowrap;border-block-end:.0625rem solid var(--surface-variant);border-radius:0}.tabs:not(.left-align,.right-align,.center-align){justify-content:space-around}.tabs>a{display:flex;font-size:.875rem;font-weight:500;color:var(--on-surface-variant);padding:.5rem 1rem;text-align:center;min-block-size:3rem;inline-size:100%;gap:.25rem}.tabs.small>a{min-block-size:2rem}.tabs.large>a{min-block-size:4rem}.tabs>a.active,.tabs>a.active>i{color:var(--primary)}.tabs>a.active:before{content:"";position:absolute;inset:auto 0 0 0;block-size:.125rem;background-color:var(--primary)}.tabs.min>a.active:before{margin:0 auto;max-inline-size:min(100%,4rem)}.tabs:is(.left-align,.center-align,.right-align)>a{inline-size:auto}.tooltip{--_space: -.5rem;visibility:hidden;display:flex;align-items:center;justify-content:center;gap:.5rem;background-color:var(--inverse-surface);color:var(--inverse-on-surface);font-size:.75rem;text-align:center;border-radius:.25rem;padding:.5rem;position:absolute;z-index:200;inset:0 auto auto 50%;inline-size:auto;white-space:nowrap;font-weight:500;opacity:0;transition:all var(--speed2);line-height:normal;transform:translate(-50%,-100%) scale(.9)}.tooltip.left{inset:50% auto auto 0;transform:translate(-100%,-50%) scale(.9)}.tooltip.right{inset:50% 0 auto auto;transform:translate(100%,-50%) scale(.9)}.tooltip.bottom{inset:auto auto 0 50%;transform:translate(-50%,100%) scale(.9)}.tooltip.small{inline-size:8rem;white-space:normal}.tooltip.medium{inline-size:12rem;white-space:normal}.tooltip.large{inline-size:16rem;white-space:normal}:hover>.tooltip{visibility:visible;opacity:1;transform:translate(-50%,-100%) scale(1)}:hover>.tooltip.left{transform:translate(-100%,-50%) scale(1)}:hover>.tooltip.right{transform:translate(100%,-50%) scale(1)}:hover>.tooltip.bottom{transform:translate(-50%,100%) scale(1)}.tooltip.no-space{--_space: 0}.tooltip.medium-space{--_space: -1rem}.tooltip.large-space{--_space: -1.5rem}.tooltip:not(.left,.right,.bottom){margin-block-start:var(--_space)!important}.tooltip.left,.tooltip.right{margin-inline:var(--_space)!important}.tooltip.bottom{margin-block-end:var(--_space)!important}menu:active~.tooltip,:is(button,.button):focus>menu~.tooltip,.field>:focus~menu~.tooltip{visibility:hidden}.slider>.tooltip{--_space: -1.25rem}.slider.vertical>.tooltip{--_space: -.75rem}.slider.vertical>.tooltip:is(.left,.right){--_space: -.5rem}.tooltip.max{display:block;font-size:inherit;white-space:normal;text-align:start;inline-size:20rem;border-radius:.5rem;padding:1rem;box-shadow:var(--elevate2)}:root{--eox-theme-light-background: 237, 237, 242;--eox-theme-light-code: 245, 245, 245;--eox-theme-light-error-container: 255, 218, 214;--eox-theme-light-error: 186, 26, 26;--eox-theme-light-inverse-on-surface: 240, 240, 245;--eox-theme-light-inverse-primary: 158, 202, 255;--eox-theme-light-inverse-surface: 46, 48, 52;--eox-theme-light-kbd: 33, 37, 41;--eox-theme-light-neutral-palette-key-color: 117, 119, 123;--eox-theme-light-neutral-variant-palette-key-color: 114, 119, 128;--eox-theme-light-on-background: 0, 0, 0;--eox-theme-light-on-code: 0, 0, 0;--eox-theme-light-on-error-container: 65, 0, 2;--eox-theme-light-on-error: 255, 255, 255;--eox-theme-light-on-inverse-on-surface: 0, 0, 0;--eox-theme-light-on-inverse-primary: 0, 0, 0;--eox-theme-light-on-inverse-surface: 255, 255, 255;--eox-theme-light-on-kbd: 255, 255, 255;--eox-theme-light-on-neutral-palette-key-color: 255, 255, 255;--eox-theme-light-on-neutral-variant-palette-key-color: 255, 255, 255;--eox-theme-light-on-outline-variant: 0, 0, 0;--eox-theme-light-on-outline: 255, 255, 255;--eox-theme-light-on-primary-container: 0, 29, 54;--eox-theme-light-on-primary-fixed-dim: 0, 0, 0;--eox-theme-light-on-primary-fixed-variant: 16, 73, 120;--eox-theme-light-on-primary-fixed: 0, 29, 54;--eox-theme-light-on-primary-palette-key-color: 255, 255, 255;--eox-theme-light-on-primary: 255, 255, 255;--eox-theme-light-on-scrim: 255, 255, 255;--eox-theme-light-on-secondary-container: 0, 31, 40;--eox-theme-light-on-secondary-fixed-dim: 0, 0, 0;--eox-theme-light-on-secondary-fixed-variant: 15, 77, 95;--eox-theme-light-on-secondary-fixed: 0, 31, 40;--eox-theme-light-on-secondary-palette-key-color: 255, 255, 255;--eox-theme-light-on-secondary: 255, 255, 255;--eox-theme-light-on-shadow: 255, 255, 255;--eox-theme-light-on-surface-bright: 0, 0, 0;--eox-theme-light-on-surface-container-high: 0, 0, 0;--eox-theme-light-on-surface-container-highest: 0, 0, 0;--eox-theme-light-on-surface-container-low: 0, 0, 0;--eox-theme-light-on-surface-container-lowest: 0, 0, 0;--eox-theme-light-on-surface-container: 0, 0, 0;--eox-theme-light-on-surface-dim: 0, 0, 0;--eox-theme-light-on-surface-light: 0, 0, 0;--eox-theme-light-on-surface-tint: 255, 255, 255;--eox-theme-light-on-surface: 26, 28, 31;--eox-theme-light-on-tertiary-container: 17, 19, 79;--eox-theme-light-on-tertiary-fixed-dim: 0, 0, 0;--eox-theme-light-on-tertiary-fixed-variant: 62, 65, 124;--eox-theme-light-on-tertiary-fixed: 17, 19, 79;--eox-theme-light-on-tertiary-palette-key-color: 255, 255, 255;--eox-theme-light-on-tertiary: 255, 255, 255;--eox-theme-light-outline-variant: 194, 199, 208;--eox-theme-light-outline: 114, 119, 128;--eox-theme-light-primary-container: 209, 228, 255;--eox-theme-light-primary-fixed-dim: 158, 202, 255;--eox-theme-light-primary-fixed: 209, 228, 255;--eox-theme-light-primary-palette-key-color: 0, 65, 112;--eox-theme-light-primary: 0, 65, 112;--eox-theme-light-scrim: 0, 0, 0;--eox-theme-light-secondary-container: 184, 234, 255;--eox-theme-light-secondary-fixed-dim: 154, 206, 228;--eox-theme-light-secondary-fixed: 184, 234, 255;--eox-theme-light-secondary-palette-key-color: 0, 69, 87;--eox-theme-light-secondary: 47, 101, 120;--eox-theme-light-shadow: 0, 0, 0;--eox-theme-light-surface-bright: 249, 249, 254;--eox-theme-light-surface-container-high: 231, 232, 236;--eox-theme-light-surface-container-highest: 226, 226, 231;--eox-theme-light-surface-container-low: 243, 243, 248;--eox-theme-light-surface-container-lowest: 255, 255, 255;--eox-theme-light-surface-container: 237, 237, 242;--eox-theme-light-surface-dim: 217, 218, 222;--eox-theme-light-surface-light: 231, 232, 236;--eox-theme-light-surface-tint: 49, 97, 146;--eox-theme-light-surface: 249, 249, 254;--eox-theme-light-tertiary-container: 225, 224, 255;--eox-theme-light-tertiary-fixed-dim: 191, 193, 255;--eox-theme-light-tertiary-fixed: 225, 224, 255;--eox-theme-light-tertiary-palette-key-color: 54, 57, 116;--eox-theme-light-tertiary: 86, 89, 150}:root{--eox-theme-dark-background: 30, 32, 35;--eox-theme-dark-code: 52, 52, 52;--eox-theme-dark-error-container: 147, 0, 10;--eox-theme-dark-error: 255, 180, 171;--eox-theme-dark-inverse-on-surface: 46, 48, 52;--eox-theme-dark-inverse-primary: 49, 97, 146;--eox-theme-dark-inverse-surface: 226, 226, 231;--eox-theme-dark-kbd: 33, 37, 41;--eox-theme-dark-neutral-palette-key-color: 117, 119, 123;--eox-theme-dark-neutral-variant-palette-key-color: 114, 119, 128;--eox-theme-dark-on-background: 255, 255, 255;--eox-theme-dark-on-code: 204, 204, 204;--eox-theme-dark-on-error-container: 255, 180, 171;--eox-theme-dark-on-error: 105, 0, 5;--eox-theme-dark-on-inverse-on-surface: 255, 255, 255;--eox-theme-dark-on-inverse-primary: 158, 202, 255;--eox-theme-dark-on-inverse-surface: 0, 0, 0;--eox-theme-dark-on-kbd: 255, 255, 255;--eox-theme-dark-on-neutral-palette-key-color: 255, 255, 255;--eox-theme-dark-on-neutral-variant-palette-key-color: 255, 255, 255;--eox-theme-dark-on-outline-variant: 255, 255, 255;--eox-theme-dark-on-outline: 255, 255, 255;--eox-theme-dark-on-primary-container: 209, 228, 255;--eox-theme-dark-on-primary-fixed-dim: 0, 0, 0;--eox-theme-dark-on-primary-fixed-variant: 16, 73, 120;--eox-theme-dark-on-primary-fixed: 0, 29, 54;--eox-theme-dark-on-primary-palette-key-color: 255, 255, 255;--eox-theme-dark-on-primary: 0, 50, 88;--eox-theme-dark-on-scrim: 255, 255, 255;--eox-theme-dark-on-secondary-container: 184, 234, 255;--eox-theme-dark-on-secondary-fixed-dim: 0, 0, 0;--eox-theme-dark-on-secondary-fixed-variant: 15, 77, 95;--eox-theme-dark-on-secondary-fixed: 0, 31, 40;--eox-theme-dark-on-secondary-palette-key-color: 255, 255, 255;--eox-theme-dark-on-secondary: 0, 53, 68;--eox-theme-dark-on-shadow: 255, 255, 255;--eox-theme-dark-on-surface-bright: 255, 255, 255;--eox-theme-dark-on-surface-container-high: 255, 255, 255;--eox-theme-dark-on-surface-container-highest: 255, 255, 255;--eox-theme-dark-on-surface-container-low: 255, 255, 255;--eox-theme-dark-on-surface-container-lowest: 255, 255, 255;--eox-theme-dark-on-surface-container: 255, 255, 255;--eox-theme-dark-on-surface-dim: 255, 255, 255;--eox-theme-dark-on-surface-light: 255, 255, 255;--eox-theme-dark-on-surface-tint: 0, 0, 0;--eox-theme-dark-on-surface: 226, 226, 231;--eox-theme-dark-on-tertiary-container: 225, 224, 255;--eox-theme-dark-on-tertiary-fixed-dim: 0, 0, 0;--eox-theme-dark-on-tertiary-fixed-variant: 62, 65, 124;--eox-theme-dark-on-tertiary-fixed: 17, 19, 79;--eox-theme-dark-on-tertiary-palette-key-color: 255, 255, 255;--eox-theme-dark-on-tertiary: 39, 42, 100;--eox-theme-dark-outline-variant: 66, 71, 79;--eox-theme-dark-outline: 140, 145, 154;--eox-theme-dark-primary-container: 16, 73, 120;--eox-theme-dark-primary-fixed-dim: 158, 202, 255;--eox-theme-dark-primary-fixed-variant: 209, 228, 255;--eox-theme-dark-primary-fixed: 209, 228, 255;--eox-theme-dark-primary-palette-key-color: 0, 65, 112;--eox-theme-dark-primary: 158, 202, 255;--eox-theme-dark-scrim: 0, 0, 0;--eox-theme-dark-secondary-container: 15, 77, 95;--eox-theme-dark-secondary-fixed-dim: 154, 206, 228;--eox-theme-dark-secondary-fixed-variant: 184, 234, 255;--eox-theme-dark-secondary-fixed: 184, 234, 255;--eox-theme-dark-secondary-palette-key-color: 0, 69, 87;--eox-theme-dark-secondary: 154, 206, 228;--eox-theme-dark-shadow: 0, 0, 0;--eox-theme-dark-surface-bright: 55, 57, 61;--eox-theme-dark-surface-container-high: 40, 42, 46;--eox-theme-dark-surface-container-highest: 51, 53, 56;--eox-theme-dark-surface-container-low: 26, 28, 31;--eox-theme-dark-surface-container-lowest: 12, 14, 17;--eox-theme-dark-surface-container: 30, 32, 35;--eox-theme-dark-surface-dim: 17, 19, 23;--eox-theme-dark-surface-light: 55, 57, 61;--eox-theme-dark-surface-tint: 158, 202, 255;--eox-theme-dark-surface: 17, 19, 23;--eox-theme-dark-tertiary-container: 62, 65, 124;--eox-theme-dark-tertiary-fixed-dim: 191, 193, 255;--eox-theme-dark-tertiary-fixed-variant: 225, 224, 255;--eox-theme-dark-tertiary-fixed: 225, 224, 255;--eox-theme-dark-tertiary-palette-key-color: 54, 57, 116;--eox-theme-dark-tertiary: 191, 193, 255}:root{--eox-slider-thumb-height: 20px;--eox-slider-thumb-width: 20px;--eox-slider-track-height: 6px;--eox-slider-track-color: var(--outline-variant);--eox-slider-brightness-hover: 100%;--eox-slider-brightness-down: 100%;--eox-slider-clip-edges: 4px;--eox-slider-margin: 1.125rem}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input){font-size:1.5rem;color:var(--primary);width:100%;background:none;overflow:hidden}input[type=range]:not(.slider input[type=range]){margin:var(--eox-slider-margin);width:100%}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input):active{cursor:grabbing}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input):disabled{filter:grayscale(1);opacity:.3;cursor:not-allowed}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input),input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-webkit-slider-runnable-track,input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-webkit-slider-thumb{-webkit-appearance:none;transition:all ease .1s;height:var(--eox-slider-thumb-height)}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-webkit-slider-runnable-track,input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-webkit-slider-thumb{position:relative}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-webkit-slider-runnable-track{border-radius:var(--eox-slider-track-height)}input[type=range]:not(.slider input)::-webkit-slider-thumb{--thumb-radius: calc((var(--eox-slider-thumb-height) * .5) - 1px);--clip-top: calc( (var(--eox-slider-thumb-height) - var(--eox-slider-track-height)) * .5 - .5px );--clip-bottom: calc(var(--eox-slider-thumb-height) - var(--clip-top));--clip-further: calc(100% + 1px) ;--box-fill: calc( -100vmax - var(--eox-slider-thumb-width, var(--eox-slider-thumb-height)) ) 0 0 100vmax currentColor;width:var(--eox-slider-thumb-width, var(--eox-slider-thumb-height));background:linear-gradient(currentColor 0 0) scroll no-repeat left center / 50% calc(var(--eox-slider-track-height) + 1px);background-color:currentColor;box-shadow:var(--box-fill);border-radius:var(--eox-slider-thumb-width, var(--eox-slider-thumb-height));filter:brightness(100%);clip-path:polygon(100% -1px,var(--eox-slider-clip-edges) -1px,0 var(--clip-top),-100vmax var(--clip-top),-100vmax var(--clip-bottom),0 var(--clip-bottom),var(--eox-slider-clip-edges) 100%,var(--clip-further) var(--clip-further))}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input):hover::-webkit-slider-thumb{filter:brightness(var(--eox-slider-brightness-hover));cursor:grab}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input):active::-webkit-slider-thumb{filter:brightness(var(--eox-slider-brightness-down));cursor:grabbing}input[type=range]:not(.slider input)::-webkit-slider-runnable-track{background:linear-gradient(var(--eox-slider-track-color) 0 0) scroll no-repeat center / 100% calc(var(--eox-slider-track-height) + 1px)}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input):disabled::-webkit-slider-thumb{cursor:not-allowed}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input),input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-moz-range-track,input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-moz-range-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;transition:all ease .1s;height:var(--eox-slider-thumb-height)}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-moz-range-track,input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-moz-range-thumb,input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-moz-range-progress{background:#fff0}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-moz-range-thumb{background:currentColor;border:0;width:var(--eox-slider-thumb-width, var(--eox-slider-thumb-height));border-radius:var(--eox-slider-thumb-width, var(--eox-slider-thumb-height));cursor:grab}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input):active::-moz-range-thumb{cursor:grabbing}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-moz-range-track{width:100%;background:var(--eox-slider-track-color)}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-moz-range-progress{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:currentColor;transition-delay:30ms}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-moz-range-track,input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-moz-range-progress{height:calc(var(--eox-slider-track-height) + 1px);border-radius:var(--eox-slider-track-height)}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-moz-range-thumb,input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input)::-moz-range-progress{filter:brightness(100%)}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input):hover::-moz-range-thumb,input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input):hover::-moz-range-progress{filter:brightness(var(--eox-slider-brightness-hover))}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input):active::-moz-range-thumb,input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input):active::-moz-range-progress{filter:brightness(var(--eox-slider-brightness-down))}input[type=range]:not(.slider.large input,.slider.small input,.slider.medium input,.slider.extra input):disabled::-moz-range-thumb{cursor:not-allowed}label.slider.tiny:before{height:var(--eox-slider-track-height);background:var(--outline-variant);clip-path:none}label.slider.tiny>span,.slider.tiny>input[type=range]+input[type=range]~span{height:var(--eox-slider-track-height);top:var(--eox-slider-track-height) - 1;clip-path:none}.slider.tiny>input[type=range]::-webkit-slider-thumb{box-shadow:unset;width:var(--eox-slider-thumb-width, var(--eox-slider-thumb-height));border-radius:var(--eox-slider-thumb-width, var(--eox-slider-thumb-height))}.slider.tiny>input[type=range]::-webkit-slider-runnable-track{background:unset}.slider.tiny>input[type=range]:not(:disabled):is(:focus)::-webkit-slider-thumb{transform:scaleX(1)}.slider.tiny>input:not(:disabled):is(:focus)::-moz-range-thumb{transform:scaleX(1)}tc-range-slider{--panel-bg-fill: var(--primary);--pointer-bg: var(--primary);--pointer-bg-focus: var(--primary);--pointer-bg-hover: var(--primary);--pointer-border: 0;--pointer-border-focus: 0;--pointer-border-hover: 0;--pointer-width: var( --eox-slider-thumb-width, var(--eox-slider-thumb-height) );--pointer-height: var( --eox-slider-thumb-width, var(--eox-slider-thumb-height) );--pointer-shadow: 0;--pointer-shadow-hover: 0;--height: var(--eox-slider-track-height);--width: 100%;--panel-bg-border-radius: var(--eox-slider-track-height);--panel-bg: var(--eox-slider-track-color);--panel-bg-hover: var(--eox-slider-track-color);display:block;margin:var(--eox-slider-margin)}:root{--eox-body-font-family: Inter, Roboto, "Helvetica Neue", "Arial Nova", "Nimbus Sans", Noto Sans, Arial, sans-serif;--eox-header-font-family: var(--eox-body-font-family);--size: 1rem;--font: var(--eox-body-font-family);--font-icon: "Material Symbols Subset";--speed1: .1s;--speed2: .2s;--speed3: .3s;--speed4: .4s;--active: rgb(128 128 128 / .192);--overlay: rgb(0 0 0 / .5);--elevate1: 0 .125rem .125rem 0 rgb(0 0 0 / .32);--elevate2: 0 .25rem .5rem 0 rgb(0 0 0 / .4);--elevate3: 0 .375rem .75rem 0 rgb(0 0 0 / .48);--top: env(safe-area-inset-top);--bottom: env(safe-area-inset-bottom);--left: env(safe-area-inset-left);--right: env(safe-area-inset-right)}*{font-family:var(--eox-body-font-family)}h1,h2,h3,h4,h5,h6{font-family:var(--eox-header-font-family)}:root,body.light{--primary: rgb(var(--eox-theme-light-primary));--on-primary: rgb(var(--eox-theme-light-on-primary));--primary-container: rgb(var(--eox-theme-light-primary-container));--on-primary-container: #001d36;--secondary: rgb(var(--eox-theme-light-secondary));--on-secondary: rgb(var(--eox-theme-light-on-secondary));--secondary-container: #d7e3f7;--on-secondary-container: #101c2b;--tertiary: rgb(var(--eox-theme-light-tertiary));--on-tertiary: rgb(var(--eox-theme-light-on-tertiary));--tertiary-container: #f2daff;--on-tertiary-container: #251431;--error: rgb(var(--eox-theme-light-error));--on-error: rgb(var(--eox-theme-light-on-error));--error-container: #ffdad6;--on-error-container: #410002;--background: rgb(var(--eox-theme-light-background));--on-background: #1a1c1e;--surface: rgb(var(--eox-theme-light-surface));--on-surface: rgb(var(--eox-theme-light-on-surface));--surface-variant: #dfe2eb;--on-surface-variant: #43474e;--outline: rgb(var(--eox-theme-light-outline));--outline-variant: rgb(var(--eox-theme-light-outline-variant));--shadow: #000000;--scrim: #000000;--inverse-surface: #2f3033;--inverse-on-surface: #f1f0f4;--inverse-primary: #9ecaff;--surface-dim: rgb(var(--eox-theme-light-surface-dim));--surface-bright: rgb(var(--eox-theme-light-surface-bright));--surface-container-lowest: #ffffff;--surface-container-low: #f4f3f7;--surface-container: #eeedf1;--surface-container-high: #e8e8eb;--surface-container-highest: #e2e2e6}body.dark{--primary: rgb(var(--eox-theme-dark-primary));--on-primary: rgb(var(--eox-theme-dark-on-primary));--primary-container: rgb(var(--eox-theme-dark-primary-container));--on-primary-container: #d1e4ff;--secondary: rgb(var(--eox-theme-dark-secondary));--secondary-container: #3b4858;--on-secondary-container: #d7e3f7;--on-secondary-container: rgb(var(--eox-theme-dark-on-secondary-container));--tertiary: rgb(var(--eox-theme-dark-tertiary));--on-tertiary: rgb(var(--eox-theme-dark-on-tertiary));--tertiary-container: #523f5f;--on-tertiary-container: #f2daff;--error: rgb(var(--eox-theme-dark-error));--on-error: rgb(var(--eox-theme-dark-on-error));--error-container: #93000a;--on-error-container: #ffb4ab;--background: rgb(var(--eox-theme-dark-background));--on-background: #e2e2e6;--surface: rgb(var(--eox-theme-dark-surface));--on-surface: rgb(var(--eox-theme-dark-on-surface));--surface-variant: #43474e;--on-surface-variant: #c3c7cf;--outline: rgb(var(--eox-theme-dark-outline));--outline-variant: rgb(var(--eox-theme-dark-outline-variant));--shadow: #000000;--scrim: #000000;--inverse-surface: #e2e2e6;--inverse-on-surface: #2f3033;--inverse-primary: #0161a3;--surface-dim: rgb(var(--eox-theme-dark-surface-dim));--surface-bright: rgb(var(--eox-theme-dark-surface-bright));--surface-container-lowest: #0d0e11;--surface-container-low: #1a1c1e;--surface-container: #1e2022;--surface-container-high: #282a2d;--surface-container-highest: #333538}.list.no-space>li,.list.no-space>li>details>summary{min-block-size:0rem;padding:0 1rem}:is(.checkbox,.radio,.switch).small{--_size: 1.2rem}:is(.checkbox,.radio):is(:hover)>input:not(:disabled)+span:after,:is(.checkbox,.radio)>input:not(:disabled):is(:focus)+span:after{box-shadow:0 0 0 .4rem currentColor}:is(.checkbox,.radio,.switch):is(.no-round,.square)>span:before,:is(.checkbox,.radio,.switch):is(.no-round,.square)>span>i,:is(.checkbox,.radio):is(.no-round,.square)>span:after{border-radius:.15rem}.scroll::-webkit-scrollbar,.scroll::-webkit-scrollbar-thumb,.scroll::-webkit-scrollbar-button{background:none;inline-size:.4rem;block-size:.4rem}.scroll:is(:hover,:focus)::-webkit-scrollbar-thumb{background:var(--outline);border-radius:1rem}';var y,U,T;class Ae extends v{constructor(){super();c(this,y,[]);c(this,U,le`
    .separator {
      margin: 0 0 24px 0;
    }
    color-legend {
      --cle-background: transparent;
      --cle-font-family: inherit;
      --cle-font-size: 12px;
      --cle-font-size-title: 12px;
      --cle-font-weight: 400;
      --cle-font-weight-title: 400;
      --cle-letter-spacing: inherit;
      --cle-letter-spacing-title: inherit;
      --cle-padding: 0;
    }
  `);c(this,T,"");this.unstyled=!1,this.noShadow=!1,this.layer=null}get layerLegend(){return d(this,y)?d(this,y).length>1?d(this,y):d(this,y)[0]:null}set layerLegend(e){var o;e?Array.isArray(e)?w(this,y,e.map((a,i)=>{var l;return{id:(((l=this.layer)==null?void 0:l.get("id"))??"")+i,...a}})):w(this,y,[{id:(((o=this.layer)==null?void 0:o.get("id"))??"")+0,...e}]):w(this,y,null)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){this.layerLegend&&new ResizeObserver(()=>{var e;w(this,y,(e=d(this,y))==null?void 0:e.map(o=>(this.offsetWidth!==o.width&&(o.width=this.offsetWidth),{...o}))),this.requestUpdate()}).observe(this.renderRoot.querySelector(".legend-container"))}render(){return customElements.get("color-legend")||console.error("Please import `color-legend-element` in order to use layerLegend"),n`
      <style>
        ${d(this,U)}
        ${!this.unstyled&&d(this,T)}
      </style>
      ${p(this.layerLegend,()=>n`
          <div class="legend-container">
            <!-- Render color-legend-->
            ${d(this,y).map((e,o,a)=>n`
                <color-legend
                  id="${e.id}"
                  width=${e.width??325}
                  scaleType="${I(e.scaleType)}"
                  markType="${I(e.markType)}"
                  titleText="${I(e.title)}"
                  .range=${e.range}
                  .domain=${e.domain}
                  tickFormat="${I(e.tickFormat)}"
                  .ticks=${e.ticks??5}
                  .tickValues=${e.tickValues}
                  .marginLeft=${8}
                  .marginRight=${8}
                >
                </color-legend>
                ${o!==a.length-1?n`<div class="separator"></div>`:L}
              `)}
          </div>
        `)}
    `}}y=new WeakMap,U=new WeakMap,T=new WeakMap,u(Ae,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerLegend:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-legend",Ae);var $,M,R,B,se,j,N;class Me extends v{constructor(){super();c(this,B);c(this,$,{});c(this,M,null);c(this,R);c(this,j,le`
    color-legend {
      --cle-background: transparent;
      --cle-font-family: inherit;
      --cle-font-size: 12px;
      --cle-font-size-title: 12px;
      --cle-font-weight: 400;
      --cle-font-weight-title: 400;
      --cle-letter-spacing: inherit;
      --cle-letter-spacing-title: inherit;
      font-size: small;
    }
  `);c(this,N,le`
    input[type="range"],
    eox-jsonform {
      --eox-slider-thumb-height: 10px !important;
      --eox-slider-thumb-width: 10px !important;
      --eox-slider-track-height: 4px !important;
      --eox-panel-spacing: 0 !important;
      --eox-slider-margin: 0 !important;
      font-size: small;
    }
    eox-layercontrol-layer-legend {
      display: block;
      margin-bottom: 1rem;
    }
  `);this.layer=null,this.unstyled=!1,this.noShadow=!1,this.layerConfig=null,this.throttleDataChange=he(b(this,B,se),1e3),this.customEditorInterfaces=[]}updated(e){if(e.has("layerConfig")){const o=this.layerConfig.type==="style"||this.layerConfig.style?100:1e3;this.throttleDataChange=he(b(this,B,se),o),this.requestUpdate()}}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){w(this,M,yt(this.layer,this.layerConfig)),Object.keys(d(this,$)).length!==0&&w(this,M,d(this,$)),customElements.get("eox-jsonform")||console.error("Please import @eox/jsonform in order to use layerconfig");const e={disable_edit_json:!0,disable_collapse:!0,disable_properties:!0};return n`
      <style>
        ${d(this,j)}
        ${!this.unstyled&&d(this,N)}
      </style>
      ${p(this.layerConfig,()=>n`
          ${p(this.layerConfig.legend,()=>n`
              <eox-layercontrol-layer-legend
                .noShadow=${!0}
                .unstyled=${this.unstyled}
                .layer=${this.layer}
                .layerLegend=${ft(this.layerConfig.legend,d(this,$))}
              ></eox-layercontrol-layer-legend>
            `)}
          <!-- Render a JSON form for layer configuration -->
          <eox-jsonform
            .schema=${this.layerConfig.schema}
            .value=${d(this,M)}
            .options=${e}
            .noShadow=${!0}
            .customEditorInterfaces=${this.customEditorInterfaces}
            @change=${this.throttleDataChange}
          ></eox-jsonform>
        `)}
    `}}$=new WeakMap,M=new WeakMap,R=new WeakMap,B=new WeakSet,se=function(e){w(this,$,e.detail),this.layerConfig.type==="style"||this.layerConfig.style?"setStyle"in this.layer||"updateStyleVariables"in this.layer?gt(d(this,$),this.layer,this.layerConfig):console.error(`Layer type ${this.layer.get("type")??""} does not support styles configuration`):w(this,R,bt(d(this,$),d(this,R),this)),this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:e.detail,layer:this.layer}})),this.requestUpdate()},j=new WeakMap,N=new WeakMap,u(Me,"properties",{layer:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},layerConfig:{attribute:!1},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layerconfig",Me);var D,Ee,O,F;class Ce extends v{constructor(){super();c(this,D);c(this,O,"");c(this,F,"");this.unstyled=!1,this.noShadow=!1,this.layerDatetime=null,this.layer=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return customElements.get("eox-timecontrol")||console.error("Please import @eox/timecontrol in order to use layerDatetime"),n`
      <style>
        ${d(this,O)}
        ${!this.unstyled&&d(this,F)}
      </style>
      ${p(this.layerDatetime,()=>n`
          <!-- Render a Timecontrol for layer date time -->
          <eox-timecontrol
            ?unstyled=${this.unstyled}
            .for=${void 0}
            .layer=${void 0}
            .navigation=${this.layerDatetime.navigation??!1}
            .slider=${this.layerDatetime.slider??!1}
            .play=${this.layerDatetime.play??!1}
            .controlValues=${this.layerDatetime.controlValues}
            .controlProperty=${void 0}
            current-step=${this.layerDatetime.currentStep}
            .displayFormat=${this.layerDatetime.displayFormat}
            @stepchange=${b(this,D,Ee)}
          ></eox-timecontrol>
        `)}
    `}}D=new WeakSet,Ee=function(e){this.dispatchEvent(new CustomEvent("datetime:updated",{bubbles:!0,detail:{datetime:e.detail.currentStep,layer:this.layer}})),this.layerDatetime.currentStep=e.detail.currentStep,this.requestUpdate()},O=new WeakMap,F=new WeakMap,u(Ce,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerDatetime:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-datetime",Ce);var q,X,Y;class Re extends v{constructor(){super();c(this,q,e=>(this.selectedTab===e||this.toolsAsList)&&"highlighted");c(this,X,`
    .tabbed figure,
    .listed figure {
      margin: 0;
    }
    .tabbed nav,
    .listed nav {
      display: flex;
      justify-content: space-between;
    }
    .tabbed nav div,
    .listed nav div {
      display: flex;
    }
    .tabbed .tab,
    .listed .tab {
      display: none;
    }
    .tabbed .tab.highlighted,
    .listed .tab.highlighted {
      display: block;
    }
    .listed .tab {
      margin-bottom: .5rem;
    }
  `);c(this,Y,`
    ${ue}
    figure {
      padding: var(--padding-vertical) var(--padding);
      background-color: var(--surface); /* fallback */
      background-color: var(--item-hover-color);
    }
    .listed [name*=-icon] {
      display: none;
    }
    .listed [name*=-icon]+span {
      text-transform: capitalize;
      font-weight: bold;
    }
    .tabbed > nav > div > label,
    .tabbed > nav > div > span {
      border-bottom: 1px solid var(--surface);
    }
    .tabbed > nav > div > label.highlighted,
    .tabbed > nav > div > span.highlighted {
      border-bottom: 2px solid var(--outline-variant);
    }
    :host {
      --eox-slider-thumb-height: 10px !important;
      --eox-slider-thumb-width: 10px !important;
      --eox-slider-track-height: 4px !important;
      --eox-panel-spacing: 0 !important;
      --eox-slider-margin: 0 !important;
      font-size: small;
    }
  `);this.actions=[],this.selectedTab=0,this.tabs=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const e=this.tabs,o=this.actions,a=o.length+e.length>1;return n`
      <style>
        ${d(this,X)}
        ${!this.unstyled&&d(this,Y)}
      </style>
      <div class="${this.toolsAsList?"listed":"tabbed"}">
        <!-- Navigation for tabs and actions -->
        ${p(a,()=>n`
            <nav>
              ${p(!this.toolsAsList,()=>n`
                  <div>
                    <!-- Labels for tabs -->
                    ${Z(e,(i,l)=>n`
                        <label
                          class=${d(this,q).call(this,l)}
                          @click=${()=>this.selectedTab=l}
                        >
                          <!-- Customizable icon for each tab -->
                          <slot name=${`${i}-icon`}>${i}</slot>
                        </label>
                      `)}
                  </div>
                  <div>
                    <!-- Icons for actions -->
                    ${Z(o,i=>n`
                        <span>
                          <!-- Customizable icon for each action -->
                          <slot name=${`${i}-icon`}>${i}</slot>
                        </span>
                      `)}
                  </div>
                `)}
            </nav>
          `)}
        <figure
          class="no-round small-padding vertical-padding"
          style="overflow: hidden; white-space: normal"
        >
          <!-- Content for each tab -->
          ${Z(e,(i,l)=>n`
              ${p(this.toolsAsList,()=>n`
                  <label>
                    <!-- Customizable icon for each tab -->
                    <slot name=${`${i}-icon`}>${i}</slot>
                    <span>${i}</span>
                  </label>
                `)}
              <div class="tab ${d(this,q).call(this,l)}">
                <!-- Content slot for each tab -->
                <slot name=${`${i}-content`}>${i}</slot>
              </div>
              ${p(this.toolsAsList&&l<e.length-1,()=>n`<hr class="small" />`)}
            `)}
        </figure>
      </div>
    `}}q=new WeakMap,X=new WeakMap,Y=new WeakMap,u(Re,"properties",{actions:{attribute:!1},selectedTab:{state:!0},tabs:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-tools-items",Re);var J,K;class Be extends v{constructor(){super();u(this,"_removeButton",e=>Ve(this,e));u(this,"_sortButton",e=>Se(this,e,this.unstyled));u(this,"_button",(e,o)=>vt(e,o,this.unstyled));u(this,"_getDefaultTools",e=>{var o,a;return n`
      <div slot="info-content">
        ${rt(this.layer.get("description"))}
      </div>
      <div slot="opacity-content">
        <div class="row">
          <!-- Input for opacity -->
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value=${xe((o=this.layer)==null?void 0:o.getOpacity())}
            class="tiny max"
            @input=${i=>{this.layer.setOpacity(parseFloat(i.target.value)),this.requestUpdate()}}
          />
          <span class="small-text" style="width: 30px; text-align: right">${Math.round(((a=this.layer)==null?void 0:a.getOpacity())*100)}%</span>
        </div class="row">
      </div>
      <div slot="config-content">
        <!-- Layer configuration -->
        ${p(this.layer.get("layerConfig"),()=>n`
            <eox-layercontrol-layerconfig
              slot="config-content"
              .layer=${this.layer}
              .noShadow=${!0}
              .layerConfig=${this.layer.get("layerConfig")}
              .unstyled=${this.unstyled}
              .customEditorInterfaces=${this.customEditorInterfaces}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layerconfig>
          `)}
      </div>
      <div slot="datetime-content">
        <!-- Layer datetime -->
        ${p(this.layer.get("layerDatetime"),()=>n`
            <eox-layercontrol-layer-datetime
              slot="datetime-content"
              .noShadow=${!0}
              .layerDatetime=${this.layer.get("layerDatetime")}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
              @datetime:updated=${i=>Le(i,this)}
            ></eox-layercontrol-layer-datetime>
          `)}
      </div>
      <div slot="legend-content">
        <!-- Layer legend -->
        ${p(this.layer.get("layerLegend"),()=>n`
            <eox-layercontrol-layer-legend
              slot="legend-content"
              .noShadow=${!0}
              .layerLegend=${this.layer.get("layerLegend")}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-legend>
          `)}
      </div>
      <div slot="remove-icon">${this._removeButton(e.remove)}</div>
      <div slot="sort-icon">${this._sortButton(e.sort)}</div>
    `});c(this,J,"");c(this,K,`
    ${this.embedded?"":ue}
    .drag-handle {
      -webkit-user-drag: element;
      user-select: none;
    }
    .single-action-container,
    details.tools {
      position: relative;
    }
    .single-action {
      position: relative;
    }
    details.tools summary button {
      pointer-events: none;
    }
    .single-action,
    details.tools summary {
      position: absolute;
      right: 1.5rem;
      top: -32px;
      height: 24px;
      cursor: pointer;
      display: var(--layer-tools-button-visibility);
    }
    .single-action,
    details.tools summary {
      transition: opacity .2s;
    }
    .single-action,
    details.tools summary {
      opacity: .5;
    }
    .single-action:hover,
    details.tools summary:hover {
      opacity: 1;
    }
    [slot=info-content],
    [slot=opacity-content],
    [slot=config-content],
    [slot=datetime-content],
    [slot=legend-content] {
      padding: 6px 0;
    }
    [slot=info-content] * {
      max-width: 100%;
    }
    /*eox-layercontrol-layerconfig {
      border: 1px solid var(--outline-variant);
      padding: .5rem !important;
      display: block;
    }*/
  `);this.layer=null,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,setTimeout(()=>{var e;this.embedded=((e=this.parentElement)==null?void 0:e.tagName)==="EOX-LAYERCONTROL-LAYER"}),this.customEditorInterfaces=[]}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const e=_e(this.tools,this.layer),o=$e(this.tools,this.layer),a=e==null?void 0:e.length,i=o==null?void 0:o.length;return n`
      <style>
        ${d(this,J)}
        ${!this.unstyled&&d(this,K)}
      </style>
      ${p(a+i>0,()=>n`
          ${p(!(a===1&&i===0),()=>n`
              <details
                class="tools"
                open=${this.embedded===!1?!0:this.layer.get("layerControlToolsExpand")||L}
              >
                <summary></summary>
                <eox-layercontrol-tools-items
                  class="${this.toolsAsList?"tools-list":"tools-tab"}"
                  .noShadow=${!1}
                  .actions=${e}
                  .tabs=${o}
                  .unstyled=${this.unstyled}
                  .toolsAsList=${this.toolsAsList}
                >
                  <!-- Rendering tabs and content -->
                  ${Z(o,l=>this._button(l,E()[l]))}
                  <!-- Including default tools -->
                  ${this._getDefaultTools(E())}
                </eox-layercontrol-tools-items>
              </details>
            `)}
        `)}
    `}}J=new WeakMap,K=new WeakMap,u(Be,"properties",{layer:{attribute:!1},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},embedded:{state:!0},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-tools",Be);const xt=t=>{const r=()=>{const e=ut(t.layer,t.map,t.showLayerZoomState);let o=!1;!e&&t.currLayerVisibilityBasedOnZoom?(t.currLayerVisibilityBasedOnZoom=!1,o=!0):e&&!t.currLayerVisibilityBasedOnZoom&&(t.currLayerVisibilityBasedOnZoom=!0,o=!0),o&&(t.requestUpdate(),t.dispatchEvent(new CustomEvent("change:resolution",{bubbles:!0})))};we(t.layer,t.showLayerZoomState)&&(r(),t.map.getView().on("change:resolution",()=>r()))},kt=(t,r)=>{const e=r.layer;e.setVisible(t.target.checked),t.target.checked&&e.get("layerControlExclusive")&&r.closest(`${r.globallyExclusiveLayers?".layers":"eox-layercontrol-layer-list"} > ul`).querySelectorAll("eox-layercontrol-layer").forEach(a=>{var i;a.layer!==e&&((i=a.layer)!=null&&i.get("layerControlExclusive"))&&(a.layer.setVisible(!1),a.requestUpdate())}),r.dispatchEvent(new CustomEvent("changed",{bubbles:!0,detail:e})),r.requestUpdate()};var z,A,Ie,Q,G;class qe extends v{constructor(){super();c(this,z);u(this,"currLayerVisibilityBasedOnZoom",!0);c(this,Q,"");c(this,G,`
    eox-layercontrol-layer {
      width: 100%;
      position: relative;
    }
    eox-layercontrol-layer nav {
      height: 32px;
      margin-block-start: 0 !important;
    }
    eox-layercontrol-layer > nav > .action.tools {
      display: var(--layer-tools-button-visibility);
    }
    eox-layercontrol-layer .action.tools.dots {
      transition: rotate 0s;
    }
    eox-layercontrol-layer:has(eox-layercontrol-layer-tools > details[open]) .action.tools.dots {
      transform: rotate(180deg);
    }
    eox-layercontrol-layer > nav > .action.visibility {
      padding: .3rem;  
      transform: translateX(.3rem);
    }
    @media (pointer:fine) {
      eox-layercontrol-layer:not(:hover) > nav > .action {
        display: var(--layer-toggle-button-visibility);
      }
    }
    eox-layercontrol-layer nav:has(.action input[type=checkbox]:not(:checked)),
    eox-layercontrol-layer nav:has(.action input[type=radio]:not(:checked)),
    eox-layercontrol-layer:has(.action input[type=checkbox]:not(:checked)) eox-layercontrol-layer-tools,
    eox-layercontrol-layer:has(.action input[type=radio]:not(:checked)) eox-layercontrol-layer-tools,
    eox-layercontrol-layer-group:has(summary .action input[type=checkbox]:not(:checked)) eox-layercontrol-layer-list,
    eox-layercontrol-layer-group:has(summary .action input[type=radio]:not(:checked)) eox-layercontrol-layer-list,
    eox-layercontrol-layer-group:has(summary .action input[type=checkbox]:not(:checked)) .arrow-container,
    eox-layercontrol-layer-group:has(summary .action input[type=radio]:not(:checked)) .arrow-container,
    eox-layercontrol-layer-group:has(summary .action input[type=checkbox]:not(:checked)) eox-layercontrol-layer-tools,
    eox-layercontrol-layer-group:has(summary .action input[type=radio]:not(:checked)) eox-layercontrol-layer-tools {
      opacity: .5;
    }
    .tooltip {
      opacity: 1;
    }
    .layer input[type=checkbox],
    .layer input[type=radio] {
      display: var(--layer-input-visibility);
    }
    .layer.zoom-state-invisible {
      opacity: 0.5;
    }
    .layer {
      padding: var(--padding-vertical) 0;
      display: var(--layer-visibility);
      user-select: none;
    }
    .layertitle {
      display: var(--layer-title-visibility);
    }
    .drag-handle {
      -webkit-user-drag: element;
      user-select: none;
    }
    :is(.checkbox,.radio)>span:after {
      transition: none !important;
    }
  `);this.layer=null,this.layerType=void 0,this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[]}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){xt(this)}render(){var _,H;const e=this.layer.getVisible(),o=e?"visible":"",a=this.currLayerVisibilityBasedOnZoom?"":"zoom-state-invisible",i=b(this,z,A).call(this,"layerControlDisable")?"disabled":"",l=b(this,z,A).call(this,"layerControlExclusive")?"radio":"checkbox",s=((_=_e(this.tools,this.layer))==null?void 0:_.length)>0,m=((H=$e(this.tools,this.layer))==null?void 0:H.length)>0,h=document.querySelector("eox-layercontrol-layer-tools");return h&&Object.assign(h,{layer:this.layer,tools:this.tools,toolsAsList:this.toolsAsList}),n`
      <style>
        ${d(this,Q)}
        ${!this.unstyled&&d(this,G)}
      </style>
      ${p(this.layer,()=>n`
          <!-- Render the layer -->
          <nav
            class="layer ${i} ${o} ${a} responsive tiny-space"
          >
            ${p(!this.unstyled,()=>{if(b(this,z,A).call(this,"color"))return n`
                  <i class="small" style="color: ${b(this,z,A).call(this,"color")}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>square-rounded</title>
                      <path
                        d="M8 3H16C18.76 3 21 5.24 21 8V16C21 18.76 18.76 21 16 21H8C5.24 21 3 18.76 3 16V8C3 5.24 5.24 3 8 3Z"
                      />
                    </svg>
                  </i>
                `;switch(this.layerType){case"group":return n` <i class="small"> </i> `;case"draw":return n`
                    <i class="small grey-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>vector-square-edit</title>
                        <path
                          d="M22.7 14.4L21.7 15.4L19.6 13.3L20.6 12.3C20.8 12.1 21.2 12.1 21.4 12.3L22.7 13.6C22.9 13.8 22.9 14.1 22.7 14.4M13 19.9L19.1 13.8L21.2 15.9L15.1 22H13V19.9M11 19.9V19.1L11.6 18.5L12.1 18H8V16H6V8H8V6H16V8H18V12.1L19.1 11L19.3 10.8C19.5 10.6 19.8 10.4 20.1 10.3V8H22.1V2H16.1V4H8V2H2V8H4V16H2V22H8V20L11 19.9M18 4H20V6H18V4M4 4H6V6H4V4M6 20H4V18H6V20Z"
                        />
                      </svg>
                    </i>
                  `;case"vector":return n`
                    <i class="small grey-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>vector-polygon</title>
                        <path
                          d="M2,2V8H4.28L5.57,16H4V22H10V20.06L15,20.05V22H21V16H19.17L20,9H22V3H16V6.53L14.8,8H9.59L8,5.82V2M4,4H6V6H4M18,5H20V7H18M6.31,8H7.11L9,10.59V14H15V10.91L16.57,9H18L17.16,16H15V18.06H10V16H7.6M11,10H13V12H11M6,18H8V20H6M17,18H19V20H17"
                        />
                      </svg>
                    </i>
                  `;case"raster":return n`
                    <i class="small grey-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>checkerboard</title>
                        <path
                          d="M2 2V22H22V2H2M20 12H16V16H20V20H16V16H12V20H8V16H4V12H8V8H4V4H8V8H12V4H16V8H20V12M16 8V12H12V8H16M12 12V16H8V12H12Z"
                        />
                      </svg>
                    </i>
                  `;default:return n` <i class="small grey-text"> </i> `}})}

            <!-- Layer title -->
            <div class="max truncate drag-handle ${i}">
              <span class="layertitle truncate"
                >${b(this,z,A).call(this,this.titleProperty)}</span
              >
            </div>

            ${p(m,()=>n`
                <button
                  class="transparent square primary-text small action tools ${this.tools.length===1?this.tools[0]:"dots"}"
                  @click=${()=>{var x,f,k;const V=((f=(x=this.renderRoot.querySelector("eox-layercontrol-layer-tools"))==null?void 0:x.shadowRoot)==null?void 0:f.querySelector("details"))||((k=this.renderRoot.querySelector("eox-layercontrol-layer-tools"))==null?void 0:k.querySelector("details"));V.open=!V.open}}
                >
                  <i class="small">
                    ${E()[this.tools.length>1?"dots":this.tools[0]]}
                  </i>
                  <!--<div class="tooltip top" style="pointer-events: none">Tools</div>-->
                </button>
              `)}
            ${p(!m&&s,()=>this.tools[0]==="remove"?Ve(this,E()[this.tools[0]]):Se(this,E()[this.tools[0]],!1))}

            <!-- Input element for layer visibility -->
            <label
              class="${i} ${l} icon square primary-text action visibility small"
            >
              <input
                type=${l}
                .checked=${xe(e)}
                @click=${b(this,z,Ie)}
                disabled=${i||L}
              />
              <span>
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>eye-off-outline</title>
                    <path
                      d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z"
                    />
                  </svg>
                </i>
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>eye</title>
                    <path
                      d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                    />
                  </svg>
                </i>
              </span>
              <!--<div class="tooltip top" style="pointer-events: none">${e?"Hide":"Show"}</div>-->
            </label>
          </nav>
        `)}

      <!-- Render layer tools -->
      ${p(m&&!h,()=>n`
          <eox-layercontrol-layer-tools
            .noShadow=${!1}
            .layer=${this.layer}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
            .toolsAsList=${this.toolsAsList}
            .customEditorInterfaces=${this.customEditorInterfaces}
          ></eox-layercontrol-layer-tools>
        `)}
    `}}z=new WeakSet,A=function(e){var o;return(o=this.layer)==null?void 0:o.get(e)},Ie=function(e){kt(e,this)},Q=new WeakMap,G=new WeakMap,u(qe,"properties",{layer:{attribute:!1},layerType:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer",qe);var W,ee;class Ze extends v{constructor(){super();c(this,W,"");c(this,ee,`
    details > summary {
      min-block-size: 0rem;
      display: var(--layer-summary-visibility);
      user-select: none;
    }
    details .arrow-container > i {
      transition: transform 0.1s ease-in-out;
    }
    details[open] > summary > .arrow-container > i {
      transform: rotate(90deg);
    }
    .arrow-container {
      position: absolute;
      height: 32px;
      display: flex;
      align-items: center;
      left: calc(var(--padding));
      z-index: 1;
    }
    .list li ul.list > li .arrow-container {
      left: calc(var(--padding) + var(--list-padding) - .5rem);
    }
  `);this.group=null,this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[]}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var a,i;const e=!!((a=this.group)!=null&&a.get("layerControlExpand")),o=(i=He(this.group.getLayers()))==null?void 0:i.length;return n`
      <style>
        ${d(this,W)}
        ${!this.unstyled&&d(this,ee)}
      </style>
      ${p(this.group,()=>n`
          <!-- Render the details element with the layer control -->
          <details
            class="max-width"
            open=${e||L}
            data-children-length=${o}
          >
            <summary class="square">
              ${p(o>0,()=>n`
                  <!-- Open/close arrow -->
                  <div class="arrow-container">
                    <i class="small">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>chevron-right</title>
                        <path
                          d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                        />
                      </svg>
                    </i>
                  </div>
                `)}

              <!-- Render the layer control within the summary -->
              <eox-layercontrol-layer
                .noShadow=${!0}
                .layer=${this.group}
                .map=${this.map}
                .titleProperty=${this.titleProperty}
                .showLayerZoomState=${this.showLayerZoomState}
                .layerType=${"group"}
                .tools=${this.tools}
                .unstyled=${this.unstyled}
                .toolsAsList=${this.toolsAsList}
                .globallyExclusiveLayers=${this.globallyExclusiveLayers}
                .customEditorInterfaces=${this.customEditorInterfaces}
                @changed=${()=>this.requestUpdate()}
              ></eox-layercontrol-layer>
            </summary>

            <!-- Render the list of layers within the details -->
            <eox-layercontrol-layer-list
              .noShadow=${!0}
              .idProperty=${this.idProperty}
              .layers=${this.group.getLayers()}
              .map=${this.map}
              .titleProperty=${this.titleProperty}
              .showLayerZoomState=${this.showLayerZoomState}
              .tools=${this.tools}
              .unstyled=${this.unstyled}
              .toolsAsList=${this.toolsAsList}
              .globallyExclusiveLayers=${this.globallyExclusiveLayers}
              .customEditorInterfaces=${this.customEditorInterfaces}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-list>
          </details>
        `)}
    `}}W=new WeakMap,ee=new WeakMap,u(Ze,"properties",{group:{attribute:!1},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-group",Ze);const wt=t=>{const{layers:r,idProperty:e,titleProperty:o,renderRoot:a}=t,i=ot(()=>{t.requestUpdate(),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))},50),l=()=>i();if(r&&(r.hasListener("change:length")&&(r==null||r.un("change:length",l)),r.on("change:length",l),r)){const s=a.querySelector("ul");pt(r,e,o,t),mt(s,r,e,t)}};var te,re;class Pe extends v{constructor(){super();c(this,te,"");c(this,re,`
    eox-layercontrol-layer-group {
      box-sizing: border-box;
      width: 100%;
    }
    eox-layercontrol-layer.sortable-chosen {
      background: #eeea !important;
    }
    eox-layercontrol-layer.sortable-drag {
      opacity: 0;
    }
    eox-layercontrol-layer.sortable-ghost {
    }
    eox-layercontrol-layer {
      padding: 0 var(--padding);
    }
    @media (pointer:fine) {
      eox-layercontrol-layer:not(:has(details[open])):hover {
        background-color: var(--item-hover-color);
      }
    }
    .list li ul.list > li eox-layercontrol-layer {
      padding-left: var(--list-padding);
    }
    .list li ul.list li ul.list > li eox-layercontrol-layer {
      padding-left: calc(var(--list-padding) * 2 - .5rem);
    }
    .list li ul.list > li:has(details[open]) eox-layercontrol-tools-items {
      display: block;
    }
    .list.no-space li.square {
      padding: 0;
    }
  `);this.idProperty="id",this.layers=null,this.map=null,this.tools=void 0,this.titleProperty="title",this.showLayerZoomState=!1,this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[]}firstUpdated(){wt(this)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const e=this.layers?He(this.layers).reverse():[];return n`
      <style>
        ${d(this,te)}
        ${!this.unstyled&&d(this,re)}
      </style>
      <ul class="list no-space">
        ${p(this.layers,()=>n`
            ${We(e,o=>o,o=>n`
                <li
                  data-layer="${o.get(this.idProperty)}"
                  data-type="${fe(o,this.map)}"
                  class="square"
                >
                  ${o.getLayers?n`
                          <eox-layercontrol-layer-group
                            .noShadow=${!0}
                            .group=${o}
                            .idProperty=${this.idProperty}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
                            .customEditorInterfaces=${this.customEditorInterfaces}
                            @changed=${()=>this.requestUpdate()}
                          >
                          </eox-layercontrol-layer-group>
                        `:n`
                          <eox-layercontrol-layer
                            .noShadow=${!0}
                            .layer=${o}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .layerType=${fe(o,this.map)}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
                            .customEditorInterfaces=${this.customEditorInterfaces}
                            @changed=${()=>this.requestUpdate()}
                          ></eox-layercontrol-layer>
                        `}
                </li>
              `)}
          `)}
      </ul>
    `}}te=new WeakMap,re=new WeakMap,u(Pe,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-list",Pe);const zt=t=>{const r=t.querySelector("select[name=optional]"),e=r?r.value:null,o=me(t.layers.getArray(),"layerControlOptional",!0).find(a=>(a.get(t.idProperty)||a.ol_uid)===e);o==null||o.set("layerControlOptional",!1),o==null||o.setVisible(!0),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0})),t.renderRoot.parentNode.querySelectorAll("eox-layercontrol-layer-list").forEach(a=>a.requestUpdate()),t.requestUpdate()};var oe,Te;class Ue extends v{constructor(){super();c(this,oe);this.idProperty="id",this.layers=null,this.titleProperty="title",this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const e=me(this.layers.getArray(),"layerControlOptional",!0);return n`
      <nav class="bottom-padding large-padding">
        <div class="field suffix border small max">
          <!-- Dropdown select element -->
          <select
            name="optional"
            data-cy="optionalLayers"
            class="small-padding"
            style="font-size: small"
          >
            <!-- Default placeholder option -->
            <option disabled selected value>-- select --</option>

            <!-- Mapping through filtered layers list to generate dropdown options -->
            ${e.map(o=>{const a=o.get(this.idProperty)||o.ol_uid,i=o.get(this.titleProperty),l=`layer ${o.get(this.idProperty)}`;return n` <option value="${a}">${i||l}</option> `})}
          </select>

          <!-- Label for the dropdown -->
          <label for="optional">Optional layers</label>
        </div>

        <!-- Button to handle adding layers -->
        <button class="small" @click="${b(this,oe,Te)}">Add</button>
      </nav>
    `}}oe=new WeakSet,Te=function(){zt(this)},u(Ue,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},titleProperty:{attribute:"title-property",type:String},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-optional-list",Ue);const _t=(t,r)=>{r.jsonInput=t.target.value,r.requestUpdate()},ye=t=>{const r=JSON.parse(`{"data":${ke(t.jsonInput)}}`);Array.isArray(r.data)?r.data.forEach(e=>{t.eoxMap.addOrUpdateLayer(e)}):t.eoxMap.addOrUpdateLayer(r.data),t.jsonInput=null,t.requestUpdate()},$t=(t,r)=>{r.urlInput=t.target.value,r.requestUpdate()};async function Vt(t){const r=t.urlInput;if(t.wmsCapabilities=null,t.searchLoad=!0,t.requestUpdate(),!r)return!1;if(ce(r)==="XYZ")return{Name:r};try{const e=await it(r);t.wmsCapabilities=e}catch{}finally{t.searchLoad=!1,t.requestUpdate()}return!1}const St=(t,r)=>{const{Name:e}=t,o=ce(r.urlInput)||"XYZ",a={type:"Tile",properties:{id:e,title:e},source:{type:o,url:r.urlInput,params:{LAYERS:e}}};r.jsonInput=JSON.stringify(a)},Ht=(t,r)=>{r.open=t||null,r.urlInput=null,r.jsonInput=null,r.wmsCapabilities=null,r.requestUpdate()};var g,Ne,De,de,Oe,Fe,P,ae;class je extends v{constructor(){super();c(this,g);u(this,"urlInput",null);u(this,"jsonInput",null);u(this,"open",null);u(this,"searchLoad",!1);u(this,"wmsCapabilities",null);c(this,ae,`
    .eox-add-layer-main .open {
      position: relative;
    }
    .eox-add-layer-main .close {
      display: none;
    }
    .field.small > :is(input, textarea, select) {
      font-size: 0.75rem;
    }
  `);this.eoxMap=null,this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const e={add:n`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>layers-plus</title>
        <path
          d="M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z"
        />
      </svg>`,plus:n`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>plus</title>
        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
      </svg>`,search:n`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>magnify</title>
        <path
          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
        />
      </svg>`},o=this.open?"open":"close",a=this.open==="url",i=this.open==="json",l=!nt(this.urlInput)||this.searchLoad?!0:L;return n`
      <style>
        ${d(this,ae)}
      </style>
      <div class="eox-add-layer-main">
        <nav class="eox-add-layer-col">
          <!-- Tabbed interface for URL and JSON -->
          <div
            class="eox-add-layer-tab tabs min left-align ${o}"
          >
            <a
              @click=${()=>b(this,g,P).call(this,"url")}
              class="${a?"active":""}"
            >
              URL
            </a>
            <a
              @click=${()=>b(this,g,P).call(this,"json")}
              class="${i?"active":""}"
            >
              JSON
            </a>
          </div>

          <div class="max"></div>

          <!-- Button to toggle tabs -->
          <button
            class="add-icon transparent square primary-text small"
            @click=${()=>b(this,g,P).call(this,this.open?null:"url")}
          >
            ${this.unstyled?"Add Layer":n`<i class="small primary-text">${e.add}</i>`}
          </button>
        </nav>
        <div class="eox-add ${o}" style="padding: 15px 0">
          ${a?n`
                <nav>
                  <!-- Input field for URL -->
                  <div class="eox-add-layer-col field border small responsive">
                    <input
                      type="text"
                      class="add-url"
                      placeholder="Add URL (WMS/XYZ)"
                      .value="${this.urlInput}"
                      @input=${b(this,g,Ne)}
                    />
                  </div>
                  <!-- Search button for URL -->
                  <button
                    class="search-icon"
                    disabled=${l}
                    @click=${b(this,g,De)}
                  >
                    ${this.unstyled?"Search":n`<i class="small">${e.search}</i>`}
                  </button>
                </nav>

                <!-- Display layers for WMS capabilities -->
                ${this.wmsCapabilities?n`<ul class="search-lists">
                      ${this.wmsCapabilities.Capability.Layer.Layer.map(s=>{const m=s.Name;return n`
                            <li class="search-list">
                              ${m}
                              <!-- Button to add layer -->
                              <button
                                class="add-layer-icon icon"
                                @click=${()=>b(this,g,de).call(this,s)}
                              >
                                ${this.unstyled?"+":""}
                              </button>
                            </li>
                          `})}
                    </ul>`:L}
              `:n`
                <!-- Textarea for JSON input -->
                <div class="field textarea small border no-margin">
                  <textarea
                    class="add-layer-input small"
                    style="overflow-wrap: break-word; font-family: monospace;"
                    placeholder="Please input a valid eox-map layer JSON."
                    @input=${b(this,g,Fe)}
                    .value=${this.jsonInput}
                  ></textarea>
                </div>

                <!-- Button to add JSON layer -->
                <button
                  class="add-layer-icon json-add-layer small square small-margin"
                  style="position: absolute; bottom: 15px; right: 0;"
                  disabled=${lt(this.jsonInput)?L:!0}
                  @click=${b(this,g,Oe)}
                >
                  ${this.unstyled?"Add JSON":n`<i class="small">${e.plus}</i>`}
                </button>
              `}
        </div>
      </div>
    `}}g=new WeakSet,Ne=function(e){$t(e,this)},De=async function(){const e=await Vt(this);e&&b(this,g,de).call(this,e)},de=function(e){St(e,this),ye(this)},Oe=function(){ye(this)},Fe=function(e){_t(e,this)},P=function(e){Ht(e,this)},ae=new WeakMap,u(je,"properties",{eoxMap:{attribute:!1,state:!0},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-add-layers",je);const Lt=(t,r)=>{if(r.requestUpdate(),t.target.tagName==="EOX-LAYERCONTROL-LAYER-TOOLS"){const e=r.renderRoot.querySelector("eox-layercontrol-optional-list");e==null||e.requestUpdate()}},ve=t=>{const r=at(t.for);return r&&r.map!==t.map&&(t.map=r.map),r};Ge();var S,C,Ye,Je,ie;class Xe extends v{constructor(){super();c(this,C);c(this,S);c(this,ie,`
    ${ue}
    :host, :root {
      --padding: 0.5rem;
      --padding-vertical: .2rem;
      --list-padding: 2rem;
      --layer-input-visibility: flex;
      --layer-summary-visibility: flex;
      --layer-type-visibility: block;
      --layer-title-visibility: inline;
      --layer-visibility: flex;
      --layer-tools-button-visibility: flex;
      --layer-toggle-button-visibility: none;

      --primary-color: var(--primary);
      --secondary-color: var(--secondary);
      --item-color: color-mix(
        in srgb,
        var(--primary-color) 10%,
        transparent
      );
      --item-hover-color: color-mix(
        in srgb,
        var(--surface) 80%,
        transparent
      );

      display: flex;
      flex-direction: column;
      --background-color: var(--eox-background-color, transparent);
      background-color: var(--background-color, transparent);
    }
    
    .layerstitle {
      display: block;
      padding-left: var(--padding);
      padding-right: var(--padding);
    }
    select {
      background-color: var(--background-color);
    }
  `);this.for="eox-map",this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=["info","opacity","datetime","config","remove","sort"],this.addExternalLayers=!1,this.unstyled=!1,this.styleOverride="",this.toolsAsList=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[]}firstUpdated(){this.eoxMap=ve(this)}updated(e){e.has("for")&&(this.eoxMap=ve(this))}get eoxMap(){return d(this,S)}set eoxMap(e){const o=d(this,S);w(this,S,e),this.requestUpdate("eoxMap",o)}render(){var a,i,l;const e=(a=this.map)==null?void 0:a.getLayers().getArray(),o=e&&((i=me(e,"layerControlOptional",!0))==null?void 0:i.length)>0;return n`
      <style>
        ${!this.unstyled&&d(this,ie)}
        ${this.styleOverride}
      </style>

      <span class="layerstitle">
        <slot name="layerstitle"
          ><p><strong>Layers</strong></p></slot
        >
      </span>

      <!-- Conditional rendering of add layers component -->
      ${p(this.addExternalLayers&&((l=d(this,S))==null?void 0:l.addOrUpdateLayer),()=>n`
          <eox-layercontrol-add-layers
            .noShadow=${!0}
            .eoxMap=${d(this,S)}
            .unstyled=${this.unstyled}
          ></eox-layercontrol-add-layers>
        `)}

      <!-- Conditional rendering of layer list component -->
      ${p(this.map,()=>n`
          <eox-layercontrol-layer-list
            .noShadow=${!0}
            class="layers"
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .map=${this.map}
            .titleProperty=${this.titleProperty}
            .showLayerZoomState=${this.showLayerZoomState}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
            .toolsAsList=${this.toolsAsList}
            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
            .customEditorInterfaces=${this.customEditorInterfaces}
            @changed=${b(this,C,Ye)}
            @datetime:updated=${s=>Le(s,this)}
            @layerConfig:change=${b(this,C,Je)}
          ></eox-layercontrol-layer-list>
        `)}

      <!-- Conditional rendering of optional list component -->
      ${p(o,()=>n`
          <eox-layercontrol-optional-list
            .noShadow=${!0}
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .titleProperty=${this.titleProperty}
            @changed=${()=>this.requestUpdate()}
          ></eox-layercontrol-optional-list>
        `)}
    `}}S=new WeakMap,C=new WeakSet,Ye=function(e){Lt(e,this),this.dispatchEvent(new CustomEvent("layerchange",{detail:e.detail}))},Je=function(e){this.dispatchEvent(new CustomEvent("layerConfig:change",{detail:e.detail}))},ie=new WeakMap,u(Xe,"properties",{for:{type:String},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},addExternalLayers:{attribute:!1},unstyled:{type:Boolean},styleOverride:{type:String},toolsAsList:{type:Boolean},globallyExclusiveLayers:{attribute:"globally-exclusive-layers",type:Boolean},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol",Xe);export{Xe as EOxLayerControl};
