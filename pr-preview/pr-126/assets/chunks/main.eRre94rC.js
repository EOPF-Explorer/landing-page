var as=Object.defineProperty;var xe=t=>{throw TypeError(t)};var rs=(t,s,e)=>s in t?as(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e;var L=(t,s,e)=>rs(t,typeof s!="symbol"?s+"":s,e),Pt=(t,s,e)=>s.has(t)||xe("Cannot "+e);var c=(t,s,e)=>(Pt(t,s,"read from private field"),e?e.call(t):s.get(t)),g=(t,s,e)=>s.has(t)?xe("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,e),D=(t,s,e,i)=>(Pt(t,s,"write to private field"),i?i.call(t,e):s.set(t,e),e),H=(t,s,e)=>(Pt(t,s,"access private method"),e);import{b as l,a as N,A as K,i as zt}from"./lit-element.CBn2YVps.js";import{n as V}from"./when.BR7zwNJC.js";import{c as ns}from"./repeat.Duc9p3Ra.js";import{W as ls,S as ds,o as ft,_ as $e,l as jt}from"./if-defined.9MnNMDbe.js";import{o as cs}from"./unsafe-html.C2DIGSw-.js";import{o as mt}from"./map.DiiNQ3pp.js";import{e as Ft,a as us}from"./addCommonStyleSheet.CvlDGOkV.js";import{X as ps}from"./XYZ.C93OrY81.js";import{_ as Me}from"./index.BUIxO2d3.js";import{g as hs}from"./getElement.COiK8z0h.js";import"./directive.CvdRHFdJ.js";import"./directive-helpers.Bj3rQkfn.js";import"./commonjsHelpers.BosuxZz1.js";import"./proj.BZ4gbdzJ.js";import"./intersectsextent.zdClE2EP.js";import"./easing.DsNKuFBo.js";async function ys(t){let s=new URL(t),e=s.searchParams;e.set("SERVICE","WMS"),e.set("REQUEST","GetCapabilities");let i=s.toString();const o=await fetch(i);if(o.ok){const a=await o.text();return new ls(a).toJSON()}else throw new Error(`Error: ${o.status}`)}function Wt(t){const s=/\b(?:wms|ows)\b/i,e=/{(?:z|x|y-?)}\/{(?:z|x|y-?)}\/{(?:z|x|y-?)}/i;return s.test(t)?"TileWMS":e.test(t)?"XYZ":!1}function fs(t){const e=/^(?:(?:https?|ftp):\/\/|\/\/)?(?:localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:\w+[\w-]*\.)+\w+)(?::\d+)?(?:\/\S*)?$/.test(t),i=Wt(t);return!!(t&&e&&i)}function Ae(t){return t.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,'"$2": ').replace(/,\s*}/g,"}").replace(/,\s*]/g,"]").replace(/\s*(\{|}|\[|\]|,)\s*/g,"$1").replaceAll('": //',"://")}function ms(t){try{return JSON.parse(Ae(t)),!!t}catch{return!1}}function qt(t,s){const e=new URL(t).searchParams;Object.entries(s).forEach(([r,n])=>{typeof n=="object"&&!Array.isArray(n)&&n!==null?Object.keys(n).forEach(d=>{e.set(d,n[d])}):Array.isArray(n)?(e.delete(r),n.forEach(d=>{e.append(r,d)})):e.set(r,n)});const i=t.split("?")[0],o=e.toString();return`${i}?${o}`}const gs=t=>{const s=t.item;let e=Array.prototype.slice.call(s.parentNode.childNodes);return e=e.filter(i=>i.nodeType!=Node.ELEMENT_NODE||!i.classList.contains("sortable-fallback")),e},bs=(t,s,e,i,o,a)=>{const n=t.item.parentNode;for(const S of e)n.appendChild(S);if(t.oldIndex==t.newIndex)return;const d=i.getArray(),p=t.item.querySelector("eox-layercontrol-layer").layer.get(o),y=d.find(S=>S.get(o)===p),f=a.dataset.layer,b=d.find(S=>S.get(o)==f);let x,u;for(x=0;x<d.length;x++)if(d[x]==y){i.removeAt(x);break}for(u=0;u<d.length;u++)if(d[u]===b){x>u?i.insertAt(u,y):i.insertAt(u+1,y);break}s.requestUpdate()};function vs(t,s,e,i){let o=[],a=null;t._sortable=ds.create(t,{handle:".drag-handle",filter:".drag-handle.disabled",swapThreshold:.5,animation:150,easing:"cubic-bezier(1, 0, 0, 1)",onStart:r=>{console.log(r),o=gs(r)},onMove:r=>{a=r.related},onEnd:r=>bs(r,i,o,s,e,a)})}function xs(t,s,e,i){const o=t.getArray();let a=!1;o.forEach(r=>{const n=r.ol_uid;r.get(s)||(r.set(s,n),a=!0),r.get(e)||(r.set(e,`layer ${n}`),a=!0),a&&i.requestUpdate()})}function Yt(t,s,e){let i=[];const o=(a,r,n)=>{i=[...i,...a.filter(p=>p.get(r)===n)];const d=a.filter(p=>p.getLayers);return d.length>0&&d.forEach(p=>o(p.getLayers().getArray(),r,n)),i};return o(t,s,e),i}function $s(t,s,e){if(!t||!s)return!1;if(!Le(t,e))return!0;const i=t.get("minZoom"),o=t.get("maxZoom"),a=s.getView().getZoom();return a>i&&a<o}function Le(t,s){const e=t.get("minZoom"),i=t.get("maxZoom");return!!(s&&(e!==-1/0||i!==1/0))}function we(t,s){var o,a,r;return!t||!s?void 0:t.getLayers?"group":((r=(o=s.getInteractions().getArray().filter(n=>n.freehand_!==void 0).map(n=>n.source_))==null?void 0:o.ol_uid)==null?void 0:r.includes(t.getSource?(a=t.getSource())==null?void 0:a.ol_uid:void 0))?"draw":t.declutter_!==void 0||t.get("type")==="Vector"?"vector":"raster"}const ws=(t,s,e)=>{var d,p;let i=s;const o=e.layer.getSource(),a=((p=(d=e.layerConfig.schema)==null?void 0:d.options)==null?void 0:p.removeProperties)??[],r={...t};a.forEach(y=>delete r[y]),o.updateParams?o.updateParams(r):o.getTileUrlFunction&&o.getTileUrlFunction()&&(i||(i=o.getTileUrlFunction()),o instanceof ps&&(o._updatedUrl=qt(o.getUrls()[0],t)),o.setTileUrlFunction((...y)=>{const f=new URL(i(...y));return a.forEach(b=>f.searchParams.delete(b)),qt(f.href,t)}),o.setKey(new Date().toISOString()));const n=document.querySelector("eox-map");if(n){const y=n.globe;if(y){const f=y.planet.layers.filter(b=>b.name==e.layer.get("id"))[0];f&&f.setUrl(qt(f.url,t)),window.eoxMapGlobe.refresh()}}return i};async function Vs(t,s,e){var n,d,p,y,f,b,x;const i="updateStyleVariables"in s,o="setStyle"in s,a=i?s.style_:e.style,r=Gt(t);if(a){const u=a.variables||{};a.variables={...u,...r}}if(i){const u=(t==null?void 0:t.variable)??(t==null?void 0:t.band);if(u!==void 0){const h=s.get("_lastVariable");if(u!==h){const m=await Es(s,String(u)),$=(m==null?void 0:m.targetMin)??vt(s,String(u)).targetMin,E=(m==null?void 0:m.targetMax)??vt(s,String(u)).targetMax;((e==null?void 0:e.autofill)===!0||((n=e==null?void 0:e.schema)==null?void 0:n.autofill)===!0||((d=a==null?void 0:a.variables)==null?void 0:d.min)!==void 0||((p=a==null?void 0:a.variables)==null?void 0:p.max)!==void 0||((f=(y=e==null?void 0:e.schema)==null?void 0:y.properties)==null?void 0:f.min)!==void 0||((x=(b=e==null?void 0:e.schema)==null?void 0:b.properties)==null?void 0:x.max)!==void 0)&&(t&&("min"in t&&(t.min=$),"max"in t&&(t.max=E)),r.min=$,r.max=E,a!=null&&a.variables&&(a.variables.min=$,a.variables.max=E))}}const S=s.get("_geozarrDimensions"),C=s.getSource?s.getSource():null;if(C&&typeof C.updateDimensions=="function"&&S){const h={};for(const m of Object.keys(S))t[m]!==void 0&&(h[m]=Number(t[m]));Object.keys(h).length>0&&C.updateDimensions(h)}s.updateStyleVariables(r)}else if(o&&a){const u=Ss(a);s.setStyle(u)}}const Gt=t=>{const s={};for(const e in t)if(typeof t[e]=="object"&&t[e]!==null){const i=Gt(t[e]);for(const o in i)s[o]=i==null?void 0:i[o]}else s[e]=t==null?void 0:t[e];return s};function Ss(t){let s=t;if("variables"in t){let e=JSON.stringify(t);const{variables:i}=t;for(const o in i)typeof i[o]=="number"?e=e.replaceAll(`["var","${o}"]`,String(i[o])):e=e.replaceAll(`["var","${o}"]`,`"${i[o]}"`);s=JSON.parse(e)}return s}const Hs=(t,s,e)=>{if(!t)return;const i=Gt(s);let o,a;return Array.isArray(t)?a=structuredClone(t):a=[structuredClone(t)],o=a.filter(r=>{if(!("boundTo"in r))return!0;const n=r.boundTo.key,d=r.boundTo.value;return n in i&&i[n]==d}),o.length||(o=null),o==null?void 0:o.map(r=>{var n;if(delete r.boundTo,r.rangeProperty&&e){const d=i[r.rangeProperty];d&&e[d]?(r.range=e[d],delete r.rangeProperty):d&&(r.range=["#ffffff","#000000"])}return!("domainProperties"in r)||"domain"in r?r:(n=Object.keys(r))==null?void 0:n.reduce((d,p)=>(p==="domainProperties"?d.domain=r[p].map(y=>i[y]):d[p]=r[p],d),{})}).filter(Boolean)};function Ot(t,s){var n,d,p,y,f,b,x,u,S;if(!s)return null;let e={},i="updateStyleVariables"in t?t.styleVariables_||((n=t.style_)==null?void 0:n.variables)||((p=(d=t.get)==null?void 0:d.call(t,"style"))==null?void 0:p.variables):(y=s.style)==null?void 0:y.variables;if((s.type==="style"||s.style)&&i)e={...i};else if((b=(f=t.getSource())==null?void 0:f.getParams)!=null&&b.call(f))e=t.getSource().getParams();else if((u=(x=t.getSource())==null?void 0:x.getTileUrlFunction)!=null&&u.call(x))try{const C=t.getSource().getTileUrlFunction()([0,0,0]);if(C){const h=new URL(C);e={};for(const[m,$]of h.searchParams.entries()){const E=h.searchParams.getAll(m);e[m]=E.length>1?E:$}}}catch(C){console.error("Error parsing start values from tile URL",C)}else return null;const o=s;e.min===void 0&&o.min!==void 0&&(e.min=o.min),e.max===void 0&&o.max!==void 0&&(e.max=o.max),e.bands===void 0&&o.bands!==void 0&&(e.bands=o.bands),e.band===void 0&&o.band!==void 0&&(e.band=o.band),e.variable===void 0&&(e.variable=o.variable??o.band??(Array.isArray(o.bands)&&o.bands.length>0?o.bands[0]:void 0)??((S=t.get)==null?void 0:S.call(t,"_lastVariable")));const a=bt(s.schema),r=Ce(Object.keys(a).length?a:s.schema,e,s.schema,t);return Object.keys(r).length?r:null}function bt(t,s=t,e=new Set){if(!t||typeof t!="object")return{};const i={};typeof t.$ref=="string"&&!e.has(t.$ref)&&(e.add(t.$ref),Object.assign(i,bt(Ms(t.$ref,s),s,e)));for(const o of["anyOf","oneOf","allOf"])if(Array.isArray(t[o]))for(const a of t[o])Object.assign(i,bt(a,s,e));return Object.assign(i,t.properties)}function Ce(t,s,e=t,i=null){var a,r,n,d,p,y,f,b,x,u,S,C;let o={};for(const h in t){const m=(a=t[h])==null?void 0:a.type;if(m&&m!=="object"&&s[h]!==void 0){const $=["number","integer"].includes(m)?Number(s[h]):s[h];o[h]=Number.isNaN($)?s[h]:$}else if(h==="variable"&&m&&m!=="object"&&i){const $=i.getSource?i.getSource():null,E=((r=i.get)==null?void 0:r.call(i,"_lastVariable"))||(typeof($==null?void 0:$.getBands)=="function"?$.getBands():null)||($==null?void 0:$.bands_)||((p=(d=(n=i.get)==null?void 0:n.call(i,"_jsonDefinition"))==null?void 0:d.source)==null?void 0:p.bands)||((f=(y=i.get)==null?void 0:y.call(i,"source"))==null?void 0:f.bands),P=Array.isArray(E)&&E.length>0?E[0]:typeof E=="string"?E:void 0;P&&(!Array.isArray((b=t[h])==null?void 0:b.enum)||t[h].enum.includes(P))?o[h]=P:((x=t[h])==null?void 0:x.default)!==void 0?o[h]=t[h].default:Array.isArray((u=t[h])==null?void 0:u.enum)&&t[h].enum.length>0&&(o[h]=t[h].enum[0])}else if(m&&m!=="object"&&((S=t[h])==null?void 0:S.default)!==void 0)o[h]=t[h].default;else if(m&&m!=="object"&&Array.isArray((C=t[h])==null?void 0:C.enum)&&t[h].enum.length>0)o[h]=t[h].enum[0];else{const $=Ce(bt(t[h],e),s,e,i);Object.keys($).length>0&&(o[h]=$)}}return o}function Ms(t,s){if(t.startsWith("#/"))return t.slice(2).split("/").reduce((e,i)=>e==null?void 0:e[i.replace(/~1/g,"/").replace(/~0/g,"~")],s)}const Ee=(t,s)=>t==null?void 0:t.filter(e=>["remove","sort"].filter(i=>s!=null&&s.get("layerControlDisable")?i!=="sort":!0).includes(e)),ke=(t,s)=>t==null?void 0:t.filter(e=>{var o;let i=!0;return["remove","sort"].includes(e)&&(i=!1),e==="info"&&(i=s.get("description")),e==="config"&&(i=s.get("layerConfig")),e==="datetime"&&(i=(o=s.get("layerDatetime"))==null?void 0:o.controlValues),e==="legend"&&(i=s.get("layerLegend")),i}),As=(t,s,e)=>l`
  <button
    slot="${t}-icon"
    class="no-margin transparent square primary-text small"
  >
    ${e?t:l`<i class="small primary-text">${s}</i>`}
  </button>
`,Re=(t,s)=>l`
  <button
    class="remove-icon no-margin transparent square small action"
    @click=${()=>{const{layer:e}=t;e==null||e.set("layerControlOptional",!0),e==null||e.setVisible(!1),t.dispatchEvent(new CustomEvent("changed",{detail:e,bubbles:!0}))}}
  >
    ${t.unstyled?"x":l`<i class="small red-text">${s}</i>`}
  </button>
`,Be=(t,s,e)=>l`
  <button
    class="sort-icon no-margin transparent square primary-text drag-handle small action ${t.layer.get("layerControlDisable")?"disabled":""}"
    style="cursor: ns-resize;"
  >
    ${e?"═":l`<i class="small primary-text">${s}</i>`}
  </button>
`;function nt(){return{dots:l`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>menu-down</title>
      <path d="M7,10L12,15L17,10H7Z" />
    </svg>`,info:l`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>information-outline</title>
      <path
        d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
      />
    </svg>`,opacity:l`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>circle-opacity</title>
      <path
        d="M18 10V8H20V10H18M18 12V10H16V12H18M18 8V6H16V8H18M16 2.84V4H18C17.37 3.54 16.71 3.15 16 2.84M18 4V6H20C19.42 5.25 18.75 4.58 18 4M20 6V8H21.16C20.85 7.29 20.46 6.63 20 6M22 12C22 11.32 21.93 10.65 21.8 10H20V12H22M16 6V4H14V6H16M16 16H18V14H16V16M18 18H20L20 18V16H18V18M16 20H18L18 20V18H16V20M14 21.8C14.7 21.66 15.36 21.44 16 21.16V20H14V21.8M18 14H20V12H18V14M16 8H14V10H16V8M20 16H21.16C21.44 15.36 21.66 14.7 21.8 14H20V16M16 12H14V14H16V12M12 18V16H14V14H12V12H14V10H12V8H14V6H12V4H14V2.2C13.35 2.07 12.69 2 12 2C6.5 2 2 6.5 2 12S6.5 22 12 22V20H14V18H12M14 18H16V16H14V18Z"
      />
    </svg>`,config:l`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>tune</title>
      <path
        d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z"
      />
    </svg>`,datetime:l`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>calendar-clock-outline</title>
      <path
        d="M6 1V3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11.1C12.36 22.24 14.09 23 16 23C19.87 23 23 19.87 23 16C23 14.09 22.24 12.36 21 11.1V5C21 3.9 20.11 3 19 3H18V1H16V3H8V1M5 5H19V7H5M5 9H19V9.67C18.09 9.24 17.07 9 16 9C12.13 9 9 12.13 9 16C9 17.07 9.24 18.09 9.67 19H5M16 11.15C18.68 11.15 20.85 13.32 20.85 16C20.85 18.68 18.68 20.85 16 20.85C13.32 20.85 11.15 18.68 11.15 16C11.15 13.32 13.32 11.15 16 11.15M15 13V16.69L18.19 18.53L18.94 17.23L16.5 15.82V13Z"
      />
    </svg>`,legend:l`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>map-legend</title>
      <path
        d="M9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3L20.34,3.03L15,5.1L9,3M8,5.45V17.15L5,18.31V6.46L8,5.45M10,5.47L14,6.87V18.53L10,17.13V5.47M19,5.7V17.54L16,18.55V6.86L19,5.7M7.46,6.3L5.57,6.97V9.12L7.46,8.45V6.3M7.46,9.05L5.57,9.72V11.87L7.46,11.2V9.05M7.46,11.8L5.57,12.47V14.62L7.46,13.95V11.8M7.46,14.55L5.57,15.22V17.37L7.46,16.7V14.55Z"
      />
    </svg>`,remove:l`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>delete-outline</title>
      <path
        d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"
      />
    </svg>`,sort:l`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>drag-horizontal-variant</title>
      <path d="M21 11H3V9H21V11M21 13H3V15H21V13Z" />
    </svg>`}}const Ue=t=>{var e;const s=["layerControlHide","layerControlOptional"];return(e=t==null?void 0:t.getArray())==null?void 0:e.filter(i=>s.every(o=>!i.get(o)))};function Ls(t,s){var o,a;const e=(o=t.get("layerDatetime"))==null?void 0:o.sliceMap;if(!e||!(s in e))return;const i=(a=t.getSource)==null?void 0:a.call(t);typeof(i==null?void 0:i.updateDimensions)=="function"&&i.updateDimensions({time:e[s]})}function Te(t,s){s.dispatchEvent(new CustomEvent("datetime:updated",{detail:t.detail,bubbles:!0}))}function Ve(t,s){const e=Math.abs(s-t);return e===0?.01:e<=.01?1e-4:e<=.1?.001:e<=1?.01:e<=10?.1:1}function Cs(t,s,e){if(Array.isArray(e)&&e.length===2&&typeof e[0]=="number"&&typeof e[1]=="number"&&!Number.isNaN(e[0])&&!Number.isNaN(e[1])){const p=e[0],y=e[1],f=Ve(p,y);return{minProp:{type:"number",format:"number",title:"Min Value",default:t!==void 0?t:p,minimum:p,maximum:y,step:f},maxProp:{type:"number",format:"number",title:"Max Value",default:s!==void 0?s:y,minimum:p,maximum:y,step:f}}}const o=t!==void 0?t:0,a=s!==void 0?s:1,r=typeof t=="number"?Math.min(0,t):0,n=typeof s=="number"&&s>r?s:r+1,d=Ve(r,n);return{minProp:{type:"number",format:"range",title:"Min Value",default:o,minimum:r,maximum:n,step:d},maxProp:{type:"number",format:"range",title:"Max Value",default:a,minimum:r,maximum:n,step:d}}}function vt(t,s,e){const i=t!=null&&t.get?t.get("_geozarrVariables"):t==null?void 0:t._geozarrVariables,o=i==null?void 0:i[s],a=o==null?void 0:o.valid_range;let r,n;return Array.isArray(a)&&a.length===2&&typeof a[0]=="number"&&typeof a[1]=="number"&&!Number.isNaN(a[0])&&!Number.isNaN(a[1])&&(r=a[0],n=a[1]),{targetMin:r!==void 0?r:0,targetMax:n!==void 0?n:1}}async function Es(t,s){var h,m,$,E,P,Y,tt,et,st,X,M,F,O,pt,it,Kt,Qt,te,ee,se,ie,oe,ae,re,ne,le,de,ce,ue,pe,he,ye,fe,me,ge,be;if(!t||!s)return;const e=t.getSource?t.getSource():null,i=t.get("_geozarrSourceUrl")||((m=(h=t.get("_jsonDefinition"))==null?void 0:h.source)==null?void 0:m.url)||(($=t.get("source"))==null?void 0:$.url)||t.get("_geozarrRootUrl");let o=e;if(e){if(typeof e.setBands=="function")e.setBands([s]);else if(i&&e.constructor){const A=e.constructor,v=((E=e.getProjection)==null?void 0:E.call(e))||t.get("_mapProjection")||((Y=(P=t.get("_jsonDefinition"))==null?void 0:P.source)==null?void 0:Y.projection),T=new A({url:i,bands:[s],crossOrigin:"anonymous",...v?{projection:v}:{}});t.setSource(T),o=T}}if(typeof(o==null?void 0:o.ready)=="function")try{await o.ready()}catch{}t.set("_lastVariable",s);const a=t.get("bands")||(Array.isArray((et=(tt=t.get("_jsonDefinition"))==null?void 0:tt.source)==null?void 0:et.bands)?(X=(st=t.get("_jsonDefinition"))==null?void 0:st.source)==null?void 0:X.bands:null),r=Array.isArray(a)&&a.length>1?a:[s];t.get("bands")!==void 0&&t.set("bands",r),t.get("band")!==void 0&&t.set("band",s);const n=t.get("layerConfig"),{targetMin:d,targetMax:p}=vt(t,s),y=t!=null&&t.get?t.get("_geozarrVariables"):t==null?void 0:t._geozarrVariables,f=(M=y==null?void 0:y[s])==null?void 0:M.valid_range,{minProp:b,maxProp:x}=Cs(d,p,f);let u=n;if(n){const A=(n==null?void 0:n.autofill)===!0||((F=n==null?void 0:n.schema)==null?void 0:F.autofill)===!0;let v;(O=n.schema)!=null&&O.properties&&(v={...n.schema.properties},v.variable&&(v.variable={...v.variable,default:s}),v.band&&(v.band={...v.band,default:s}),v.bands&&(v.bands={...v.bands,default:v.bands.type==="array"?r:r[0]}),v.redMax||v.greenMax||v.blueMax||((v.min!==void 0||A)&&(v.min={...v.min||{},...b,default:d}),(v.max!==void 0||A)&&(v.max={...v.max||{},...x,default:p}))),u={...n,bands:r,band:s,...A||n.min!==void 0?{min:d}:{},...A||n.max!==void 0?{max:p}:{},schema:v?{...n.schema,properties:v}:n.schema},t.set("layerConfig",u)}if((n==null?void 0:n.autofill)===!0||((pt=n==null?void 0:n.schema)==null?void 0:pt.autofill)===!0||((it=t.styleVariables_)==null?void 0:it.min)!==void 0||((Kt=t.styleVariables_)==null?void 0:Kt.max)!==void 0||((te=(Qt=t.style_)==null?void 0:Qt.variables)==null?void 0:te.min)!==void 0||((se=(ee=t.style_)==null?void 0:ee.variables)==null?void 0:se.max)!==void 0||((ae=(oe=(ie=t.get)==null?void 0:ie.call(t,"style"))==null?void 0:oe.variables)==null?void 0:ae.min)!==void 0||((le=(ne=(re=t.get)==null?void 0:re.call(t,"style"))==null?void 0:ne.variables)==null?void 0:le.max)!==void 0||((ce=(de=n==null?void 0:n.schema)==null?void 0:de.properties)==null?void 0:ce.min)!==void 0||((pe=(ue=n==null?void 0:n.schema)==null?void 0:ue.properties)==null?void 0:pe.max)!==void 0){typeof t.updateStyleVariables=="function"&&t.updateStyleVariables({min:d,max:p}),t.styleVariables_&&(t.styleVariables_.min=d,t.styleVariables_.max=p),(he=t.style_)!=null&&he.variables&&(t.style_.variables.min=d,t.style_.variables.max=p);const A=(ye=t.get)==null?void 0:ye.call(t,"style");A!=null&&A.variables&&(A.variables.min=d,A.variables.max=p)}if(o&&typeof o.getDimensions=="function")try{const A=await o.getDimensions();if(A){const v={};for(const[T,Z]of Object.entries(A)){if(T==="time"||!Z||Z.size<=0)continue;v[T]=Z;const B=t.get("layerConfig")||u,z=(B==null?void 0:B.autofill)===!0||((fe=B==null?void 0:B.schema)==null?void 0:fe.autofill)===!0;if((me=B==null?void 0:B.schema)!=null&&me.properties&&(B.schema.properties[T]!==void 0||z)){const ht=((ge=Z.attributes)==null?void 0:ge.long_name)||T.charAt(0).toUpperCase()+T.slice(1),ot=(be=Z.attributes)==null?void 0:be.units,at=ot?`${ht} (${ot})`:ht,j={...B.schema.properties};j[T]={type:"integer",title:at,default:0,minimum:0,maximum:Z.size-1,step:1,format:"range",...j[T]||{}},u={...B,schema:{...B.schema,properties:j}},t.set("layerConfig",u)}typeof o.updateDimensions=="function"&&o.updateDimensions({[T]:0})}if(t.set("_geozarrDimensions",v),A!=null&&A.time&&A.time.size>0){const T=A.time,{units:Z}=T.attributes||{};let B=0,z=1e3;if(Z&&typeof Z=="string"&&Z.includes(" since ")){const k=Z.split(" since ");let _=k[1].trim();!_.includes("T")&&!_.includes("Z")&&(_=_.replace(" ","T")+"Z"),B=Date.parse(_)||0;const rt=k[0].toLowerCase();rt.includes("day")?z=86400*1e3:rt.includes("nanosecond")?z=1e-6:rt.includes("microsecond")?z=.001:rt.includes("millisecond")?z=1:rt.includes("second")&&(z=1e3)}const ht=k=>typeof k=="string"?new Date(k):new Date(B+Number(k)*z),ot=await Promise.all([...Array(T.size).keys()].map(async k=>{const _=typeof o.getValue=="function"?await o.getValue("time",k):k;return{index:k,date:ht(_)}}));ot.sort((k,_)=>k.date.getTime()-_.date.getTime());const at={},j=ot.map(k=>{const _=k.date.toISOString();return at[_]=k.index,_}),yt=t.get("layerDatetime")||{},ve=yt.currentStep&&j.includes(yt.currentStep)?yt.currentStep:j[0];t.set("layerDatetime",{showUTC:!0,slider:!0,navigation:!0,...yt,controlValues:j,sliceMap:at,currentStep:ve});const is=j.map(k=>({date:k}));t.set("timeControlValues",is);const os=at[ve]??0;typeof o.updateDimensions=="function"&&o.updateDimensions({time:os})}}}catch(A){console.warn("Could not refresh GeoZarr dimensions for new band:",A)}return{targetMin:d,targetMax:p}}var I,xt,$t;class De extends N{constructor(){super();g(this,I,[]);g(this,xt,zt`
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
  `);g(this,$t,"");this.unstyled=!1,this.noShadow=!1,this.layer=null}get layerLegend(){return c(this,I)?c(this,I).length>1?c(this,I):c(this,I)[0]:null}set layerLegend(e){var i;e?Array.isArray(e)?D(this,I,e.map((o,a)=>{var r;return{id:(((r=this.layer)==null?void 0:r.get("id"))??"")+a,...o}})):D(this,I,[{id:(((i=this.layer)==null?void 0:i.get("id"))??"")+0,...e}]):D(this,I,null)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){this.layerLegend&&new ResizeObserver(()=>{var e;D(this,I,(e=c(this,I))==null?void 0:e.map(i=>(this.offsetWidth!==i.width&&(i.width=this.offsetWidth),{...i}))),this.requestUpdate()}).observe(this.renderRoot.querySelector(".legend-container"))}render(){return customElements.get("color-legend")||console.error("Please import `color-legend-element` in order to use layerLegend"),l`
      <style>
        ${c(this,xt)}
        ${!this.unstyled&&c(this,$t)}
      </style>
      ${V(this.layerLegend,()=>l`
          <div class="legend-container">
            <!-- Render color-legend-->
            ${c(this,I).map((e,i,o)=>l`
                <color-legend
                  id="${e.id}"
                  width=${e.width??325}
                  scaleType="${ft(e.scaleType)}"
                  markType="${ft(e.markType)}"
                  titleText="${ft(e.title)}"
                  .range=${e.range}
                  .domain=${e.domain}
                  tickFormat="${ft(e.tickFormat)}"
                  .ticks=${e.ticks??5}
                  .tickValues=${e.tickValues}
                  .marginLeft=${8}
                  .marginRight=${8}
                >
                </color-legend>
                ${i!==o.length-1?l`<div class="separator"></div>`:K}
              `)}
          </div>
        `)}
    `}}I=new WeakMap,xt=new WeakMap,$t=new WeakMap,L(De,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerLegend:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-legend",De);var w,U,lt,W,dt,Jt,wt,Vt;class Ie extends N{constructor(){super();g(this,dt);g(this,w,{});g(this,U,null);g(this,lt);g(this,W,e=>{var o,a,r,n,d,p,y,f,b;if(e.key==="layerConfig"){this.layerConfig=this.layer.get("layerConfig");const x=Ot(this.layer,this.layerConfig)||{},u=(a=(o=this.layerConfig)==null?void 0:o.schema)==null?void 0:a.properties,S=((r=this.layerConfig)==null?void 0:r.autofill)===!0||((d=(n=this.layerConfig)==null?void 0:n.schema)==null?void 0:d.autofill)===!0;((p=this.layerConfig)==null?void 0:p.min)!==void 0&&(S||(u==null?void 0:u.min)!==void 0)&&(c(this,w).min=this.layerConfig.min),((y=this.layerConfig)==null?void 0:y.max)!==void 0&&(S||(u==null?void 0:u.max)!==void 0)&&(c(this,w).max=this.layerConfig.max);const C=this.layer.get("_lastVariable")||((f=this.layerConfig)==null?void 0:f.band)||(Array.isArray((b=this.layerConfig)==null?void 0:b.bands)?this.layerConfig.bands[0]:void 0);if(C&&(S||(u==null?void 0:u.variable)!==void 0||(u==null?void 0:u.band)!==void 0)&&((u==null?void 0:u.band)!==void 0?c(this,w).band=C:c(this,w).variable=C),D(this,U,{...c(this,w),...x}),u&&!S){const h=new Set(Object.keys(u));for(const m of Object.keys(c(this,U)))h.has(m)||delete c(this,U)[m]}D(this,w,{...c(this,U)}),this.requestUpdate()}});g(this,wt,zt`
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
  `);g(this,Vt,zt`
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
  `);this.layer=null,this.unstyled=!1,this.noShadow=!1,this.layerConfig=null,this.throttleDataChange=$e(H(this,dt,Jt),1e3),this.customEditorInterfaces=[],this.colormapRegistry=null}connectedCallback(){var e;super.connectedCallback(),(e=this.layer)!=null&&e.on&&this.layer.on("propertychange",c(this,W))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.layer)!=null&&e.un&&this.layer.un("propertychange",c(this,W))}updated(e){var i,o,a;if(e.has("layer")){const r=e.get("layer");r!=null&&r.un&&r.un("propertychange",c(this,W)),(i=this.layer)!=null&&i.on&&this.layer.on("propertychange",c(this,W))}if(e.has("layerConfig")){const r=((o=this.layerConfig)==null?void 0:o.type)==="style"||(a=this.layerConfig)!=null&&a.style?100:1e3;this.throttleDataChange=$e(H(this,dt,Jt),r)}}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var d,p,y,f,b;const i={...Ot(this.layer,this.layerConfig)||{},...c(this,w)},o=(p=(d=this.layerConfig)==null?void 0:d.schema)==null?void 0:p.properties,a=((y=this.layerConfig)==null?void 0:y.autofill)===!0||((b=(f=this.layerConfig)==null?void 0:f.schema)==null?void 0:b.autofill)===!0;if(o&&!a){const x=new Set(Object.keys(o));for(const u of Object.keys(i))x.has(u)||delete i[u]}const r=Object.keys(i).length?i:null;JSON.stringify(r)!==JSON.stringify(c(this,U))&&D(this,U,r),D(this,w,{...c(this,U)}),customElements.get("eox-jsonform")||console.error("Please import @eox/jsonform in order to use layerconfig");const n={disable_edit_json:!0,disable_collapse:!0,disable_properties:!0,no_additional_properties:!0};return l`
      <style>
        ${c(this,wt)}
        ${!this.unstyled&&c(this,Vt)}
      </style>
      ${V(this.layerConfig,()=>l`
          ${V(this.layerConfig.legend,()=>l`
              <eox-layercontrol-layer-legend
                .noShadow=${!0}
                .unstyled=${this.unstyled}
                .layer=${this.layer}
                .layerLegend=${Hs(this.layerConfig.legend,c(this,U),this.colormapRegistry)}
              ></eox-layercontrol-layer-legend>
            `)}
          <!-- Render a JSON form for layer configuration -->
          <eox-jsonform
            .schema=${this.layerConfig.schema}
            .value=${c(this,U)}
            .options=${n}
            .noShadow=${!0}
            .customEditorInterfaces=${this.customEditorInterfaces}
            @change=${this.throttleDataChange}
          ></eox-jsonform>
        `)}
    `}}w=new WeakMap,U=new WeakMap,lt=new WeakMap,W=new WeakMap,dt=new WeakSet,Jt=async function(e){var r,n,d,p,y,f,b,x,u,S,C,h,m,$,E,P,Y,tt,et,st;const i=((r=c(this,w))==null?void 0:r.variable)??((n=c(this,w))==null?void 0:n.band)??((p=(d=this.layer)==null?void 0:d.get)==null?void 0:p.call(d,"_lastVariable"))??((y=this.layerConfig)==null?void 0:y.band)??(Array.isArray((f=this.layerConfig)==null?void 0:f.bands)?this.layerConfig.bands[0]:void 0),o=((b=e.detail)==null?void 0:b.variable)??((x=e.detail)==null?void 0:x.band),a=o!==void 0&&i!==void 0&&String(o)!==String(i);if(a){const{targetMin:X,targetMax:M}=vt(this.layer,String(o),this.layerConfig);e.detail&&(("min"in e.detail||((u=this.layerConfig)==null?void 0:u.min)!==void 0)&&(e.detail.min=X),("max"in e.detail||((S=this.layerConfig)==null?void 0:S.max)!==void 0)&&(e.detail.max=M))}if(D(this,w,{...e.detail}),((C=this.layerConfig)==null?void 0:C.type)==="style"||(h=this.layerConfig)!=null&&h.style?"setStyle"in this.layer||"updateStyleVariables"in this.layer?await Vs(c(this,w),this.layer,this.layerConfig):console.error(`Layer type ${this.layer.get("type")??""} does not support styles configuration`):D(this,lt,ws(c(this,w),c(this,lt),this)),a){this.layerConfig=(($=(m=this.layer)==null?void 0:m.get)==null?void 0:$.call(m,"layerConfig"))||this.layerConfig;const X=Ot(this.layer,this.layerConfig)||{},M=(P=(E=this.layerConfig)==null?void 0:E.schema)==null?void 0:P.properties,F=((Y=this.layerConfig)==null?void 0:Y.autofill)===!0||((et=(tt=this.layerConfig)==null?void 0:tt.schema)==null?void 0:et.autofill)===!0;if(D(this,U,{...c(this,w),...X,...o&&(F||(M==null?void 0:M.variable)!==void 0||(M==null?void 0:M.band)!==void 0)?(M==null?void 0:M.band)!==void 0?{band:o}:{variable:o}:{},...c(this,w).min!==void 0&&(F||(M==null?void 0:M.min)!==void 0)?{min:c(this,w).min}:{},...c(this,w).max!==void 0&&(F||(M==null?void 0:M.max)!==void 0)?{max:c(this,w).max}:{}}),M&&!F){const pt=new Set(Object.keys(M));for(const it of Object.keys(c(this,U)))pt.has(it)||delete c(this,U)[it]}D(this,w,{...c(this,U)});const O=(st=this.renderRoot)==null?void 0:st.querySelector("eox-jsonform");O!=null&&O.editor&&!O.editor.destroyed&&O.editor.ready&&O.editor.setValue(c(this,w))}this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:c(this,w),layer:this.layer}})),this.requestUpdate()},wt=new WeakMap,Vt=new WeakMap,L(Ie,"properties",{layer:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},layerConfig:{attribute:!1},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layerconfig",Ie);var ct,St,Ze,Ht,Mt;class _e extends N{constructor(){super();g(this,St);g(this,ct,Me(Ls,300));g(this,Ht,"");g(this,Mt,"");this.unstyled=!1,this.noShadow=!1,this.layerDatetime=null,this.layer=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}disconnectedCallback(){c(this,ct).flush(),super.disconnectedCallback()}render(){var e;return customElements.get("eox-timecontrol")||console.error("Please import @eox/timecontrol in order to use layerDatetime"),l`
      <style>
        ${c(this,Ht)}
        ${!this.unstyled&&c(this,Mt)}
      </style>
      ${V((e=this.layerDatetime)==null?void 0:e.controlValues,()=>l`
          <eox-timecontrol
            .initDate=${this.layerDatetime.currentStep?[this.layerDatetime.currentStep]:void 0}
            .controlValues=${[{id:this.layer.get("id"),name:this.layer.get("name")||this.layer.get("title"),timeControlValues:this.layerDatetime.controlValues.map(i=>({date:i}))}]}
            @select=${H(this,St,Ze)}
            .showUTC=${this.layerDatetime.showUTC||!1}
          >
            <eox-timecontrol-date
              .navigation=${this.layerDatetime.navigation??!1}
              .format=${this.layerDatetime.displayFormat}
            ></eox-timecontrol-date>
            <eox-timecontrol-slider
              animate-onclick-interval="${this.layerDatetime.animateOnClickInterval??"0.3s"}"
            ></eox-timecontrol-slider>
          </eox-timecontrol>
        `)}
    `}}ct=new WeakMap,St=new WeakSet,Ze=function(e){var r;const i=new Date(e.detail.date[0]),o=(r=this.layerDatetime.controlValues)==null?void 0:r.some(n=>typeof n=="string"&&n.includes("T"));let a;o?a=i.toISOString():a=(d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`)(i),a!==this.layerDatetime.currentStep&&(this.dispatchEvent(new CustomEvent("datetime:updated",{bubbles:!0,detail:{datetime:a,layer:this.layer}})),c(this,ct).call(this,this.layer,a),this.layerDatetime.currentStep=a,this.requestUpdate())},Ht=new WeakMap,Mt=new WeakMap,L(_e,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerDatetime:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-datetime",_e);var ut,At,Lt;class Ne extends N{constructor(){super();g(this,ut,e=>(this.selectedTab===e||this.toolsAsList)&&"highlighted");g(this,At,`
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
  `);g(this,Lt,`
    ${Ft}
    figure {
      padding: var(--padding-vertical) var(--padding);
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
      border-bottom: 1px solid var(--surface-variant);
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
  `);this.actions=[],this.selectedTab=0,this.tabs=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const e=this.tabs,i=this.actions,o=i.length+e.length>1;return l`
      <style>
        ${c(this,At)}
        ${!this.unstyled&&c(this,Lt)}
      </style>
      <div class="${this.toolsAsList?"listed":"tabbed"}">
        <!-- Navigation for tabs and actions -->
        ${V(o,()=>l`
            <nav>
              ${V(!this.toolsAsList,()=>l`
                  <div>
                    <!-- Labels for tabs -->
                    ${mt(e,(a,r)=>l`
                        <label
                          class=${c(this,ut).call(this,r)}
                          @click=${()=>this.selectedTab=r}
                        >
                          <!-- Customizable icon for each tab -->
                          <slot name=${`${a}-icon`}>${a}</slot>
                        </label>
                      `)}
                  </div>
                  <div>
                    <!-- Icons for actions -->
                    ${mt(i,a=>l`
                        <span>
                          <!-- Customizable icon for each action -->
                          <slot name=${`${a}-icon`}>${a}</slot>
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
          ${mt(e,(a,r)=>l`
              ${V(this.toolsAsList,()=>l`
                  <label>
                    <!-- Customizable icon for each tab -->
                    <slot name=${`${a}-icon`}>${a}</slot>
                    <span>${a}</span>
                  </label>
                `)}
              <div class="tab ${c(this,ut).call(this,r)}">
                <!-- Content slot for each tab -->
                <slot name=${`${a}-content`}>${a}</slot>
              </div>
              ${V(this.toolsAsList&&r<e.length-1,()=>l`<hr class="small" />`)}
            `)}
        </figure>
      </div>
    `}}ut=new WeakMap,At=new WeakMap,Lt=new WeakMap,L(Ne,"properties",{actions:{attribute:!1},selectedTab:{state:!0},tabs:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-tools-items",Ne);var Ct,qe,Et,kt;class Pe extends N{constructor(){super();g(this,Ct);L(this,"_removeButton",e=>Re(this,e));L(this,"_sortButton",e=>Be(this,e,this.unstyled));L(this,"_button",(e,i)=>As(e,i,this.unstyled));L(this,"_getDefaultTools",e=>{var i,o;return l`
      <div slot="info-content">
        ${cs(this.layer.get("description"))}
      </div>
      <div slot="opacity-content">
        <div class="row">
          <!-- Input for opacity -->
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value=${jt((i=this.layer)==null?void 0:i.getOpacity())}
            class="tiny max"
            @input=${a=>{this.layer.setOpacity(parseFloat(a.target.value)),this.requestUpdate()}}
          />
          <span class="small-text" style="width: 30px; text-align: right">${Math.round(((o=this.layer)==null?void 0:o.getOpacity())*100)}%</span>
        </div class="row">
      </div>
      <div slot="config-content">
        <!-- Layer configuration -->
        ${V(this.layer.get("layerConfig"),()=>l`
            <eox-layercontrol-layerconfig
              slot="config-content"
              .layer=${this.layer}
              .noShadow=${!0}
              .layerConfig=${this.layer.get("layerConfig")}
              .colormapRegistry=${this.colormapRegistry}
              .unstyled=${this.unstyled}
              .customEditorInterfaces=${this.customEditorInterfaces}
              @changed=${()=>this.requestUpdate()}
              @layerConfig:change=${H(this,Ct,qe)}
            ></eox-layercontrol-layerconfig>
          `)}
      </div>
      <div slot="datetime-content">
        <!-- Layer datetime -->
        ${V(this.layer.get("layerDatetime"),()=>l`
            <eox-layercontrol-layer-datetime
              slot="datetime-content"
              .noShadow=${!0}
              .layerDatetime=${this.layer.get("layerDatetime")}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
              @datetime:updated=${a=>Te(a,this)}
            ></eox-layercontrol-layer-datetime>
          `)}
      </div>
      <div slot="legend-content">
        <!-- Layer legend -->
        ${V(this.layer.get("layerLegend"),()=>l`
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
    `});g(this,Et,"");g(this,kt,`
    ${this.embedded?"":Ft}
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
    :host {
      display: block;
      margin-block: var(--padding-vertical) !important;
    }
    details[open] eox-layercontrol-tools-items {
      display: block;
    }
  `);this.layer=null,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.open=!1,this.toolsAutoExpand=!1,setTimeout(()=>{var i,o,a;const e=this.parentElement||((i=this.getRootNode())==null?void 0:i.host);this.embedded=(e==null?void 0:e.tagName)==="EOX-LAYERCONTROL-LAYER",(typeof this.open>"u"||this.open===!1||this.open===null)&&(this.open=this.toolsAutoExpand?!!((o=this.layer)!=null&&o.getVisible()):this.embedded===!1?!0:!!((a=this.layer)!=null&&a.get("layerControlToolsExpand")))}),this.customEditorInterfaces=[],this.colormapRegistry=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){var e,i;(i=(e=this.layer)==null?void 0:e.on)==null||i.call(e,"propertychange",o=>{const a=o;(a.key==="layerConfig"||a.key==="layerDatetime"||a.key==="timeControlValues")&&this.requestUpdate()})}updated(e){var i;this.toolsAutoExpand&&(e.has("toolsAutoExpand")||e.has("layer"))&&(this.open=!!((i=this.layer)!=null&&i.getVisible()))}render(){const e=Ee(this.tools,this.layer),i=ke(this.tools,this.layer),o=e==null?void 0:e.length,a=i==null?void 0:i.length;return l`
      <style>
        ${c(this,Et)}
        ${!this.unstyled&&c(this,kt)}
      </style>
      ${V(o+a>0,()=>l`
          ${V(!(o===1&&a===0),()=>l`
              <details
                class="tools"
                .open=${jt(this.open)}
                @toggle=${r=>{this.open=r.target.open}}
              >
                <summary></summary>
                <eox-layercontrol-tools-items
                  class="${this.toolsAsList?"tools-list":"tools-tab"}"
                  .noShadow=${!1}
                  .actions=${e}
                  .tabs=${i}
                  .unstyled=${this.unstyled}
                  .toolsAsList=${this.toolsAsList}
                >
                  <!-- Rendering tabs and content -->
                  ${mt(i,r=>this._button(r,nt()[r]))}
                  <!-- Including default tools -->
                  ${this._getDefaultTools(nt())}
                </eox-layercontrol-tools-items>
              </details>
            `)}
        `)}
    `}}Ct=new WeakSet,qe=function(e){this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:e.detail.jsonformValue,layer:e.detail.layer}}))},Et=new WeakMap,kt=new WeakMap,L(Pe,"properties",{layer:{attribute:!1},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},open:{type:Boolean,reflect:!0},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},embedded:{state:!0},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-tools",Pe);const ks=t=>{var e,i;const s=()=>{const o=$s(t.layer,t.map,t.showLayerZoomState);let a=!1;!o&&t.currLayerVisibilityBasedOnZoom?(t.currLayerVisibilityBasedOnZoom=!1,a=!0):o&&!t.currLayerVisibilityBasedOnZoom&&(t.currLayerVisibilityBasedOnZoom=!0,a=!0),a&&(t.requestUpdate(),t.dispatchEvent(new CustomEvent("change:resolution",{bubbles:!0})))};Le(t.layer,t.showLayerZoomState)&&(s(),t.map.getView().on("change:resolution",()=>s())),(i=(e=t.layer)==null?void 0:e.on)==null||i.call(e,"propertychange",o=>{const a=o;(a.key==="layerDatetime"||a.key==="layerConfig"||a.key==="timeControlValues")&&t.requestUpdate()})},Rs=(t,s)=>{const e=s.layer;if(e.setVisible(t.target.checked),s.toolsAutoExpand){const i=s.renderRoot.querySelector("eox-layercontrol-layer-tools");i&&(i.open=t.target.checked)}t.target.checked&&e.get("layerControlExclusive")&&s.closest(`${s.globallyExclusiveLayers?".layers":"eox-layercontrol-layer-list"} > ul`).querySelectorAll("eox-layercontrol-layer").forEach(o=>{var a;if(o.layer!==e&&((a=o.layer)!=null&&a.get("layerControlExclusive"))){if(o.layer.setVisible(!1),o.toolsAutoExpand){const r=o.renderRoot.querySelector("eox-layercontrol-layer-tools");r&&(r.open=!1)}o.requestUpdate()}}),s.dispatchEvent(new CustomEvent("changed",{bubbles:!0,detail:e})),s.requestUpdate()};var q,G,ze,Rt,Bt;class Oe extends N{constructor(){super();g(this,q);L(this,"currLayerVisibilityBasedOnZoom",!0);g(this,Rt,"");g(this,Bt,`
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
    eox-layercontrol-layer:has(eox-layercontrol-layer-tools[open]) .action.tools.dots {
      transform: rotate(180deg);
    }
    eox-layercontrol-layer > nav > .action.visibility {
      padding: .3rem;
      transform: translateX(.3rem);
    }
    eox-layercontrol-layer > nav > .action.visibility span::after {
      border-radius: 0.25rem !important;
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
  `);this.layer=null,this.layerType=void 0,this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){ks(this)}render(){var y,f;const e=this.layer.getVisible(),i=e?"visible":"",o=this.currLayerVisibilityBasedOnZoom?"":"zoom-state-invisible",a=H(this,q,G).call(this,"layerControlDisable")?"disabled":"",r=H(this,q,G).call(this,"layerControlExclusive")?"radio":"checkbox",n=((y=Ee(this.tools,this.layer))==null?void 0:y.length)>0,d=((f=ke(this.tools,this.layer))==null?void 0:f.length)>0,p=document.querySelector("eox-layercontrol-layer-tools");return p&&Object.assign(p,{layer:this.layer,tools:this.tools,toolsAsList:this.toolsAsList}),l`
      <style>
        ${c(this,Rt)}
        ${!this.unstyled&&c(this,Bt)}
        
        /* Make sure the CSS variable is applied to the layer type icon */
        .small.grey-text {
          display: var(--layer-type-visibility);
        }
      </style>
      ${V(this.layer,()=>l`
          <!-- Render the layer -->
          <nav
            class="layer ${a} ${i} ${o} responsive tiny-space"
          >
            ${V(!this.unstyled,()=>{if(H(this,q,G).call(this,"color"))return l`
                  <i class="small" style="color: ${H(this,q,G).call(this,"color")}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>square-rounded</title>
                      <path
                        d="M8 3H16C18.76 3 21 5.24 21 8V16C21 18.76 18.76 21 16 21H8C5.24 21 3 18.76 3 16V8C3 5.24 5.24 3 8 3Z"
                      />
                    </svg>
                  </i>
                `;switch(this.layerType){case"group":return l` <i class="small"> </i> `;case"draw":return l`
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
                  `;case"vector":return l`
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
                  `;case"raster":return l`
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
                  `;default:return l` <i class="small grey-text"> </i> `}})}

            <!-- Layer title -->
            <div class="max truncate drag-handle ${a}">
              <span class="layertitle truncate"
                >${H(this,q,G).call(this,this.titleProperty)}</span
              >
            </div>

            ${V(d&&!this.toolsAutoExpand,()=>l`
                <button
                  class="transparent square primary-text small action tools ${this.tools.length===1?this.tools[0]:"dots"}"
                  @click=${()=>{const b=this.renderRoot.querySelector("eox-layercontrol-layer-tools");b.open=!b.open}}
                >
                  <i class="small">
                    ${nt()[this.tools.length>1?"dots":this.tools[0]]}
                  </i>
                  <!--<span class="tooltip top" style="pointer-events: none">Tools</span>-->
                </button>
              `)}
            ${V(!d&&n,()=>this.tools[0]==="remove"?Re(this,nt()[this.tools[0]]):Be(this,nt()[this.tools[0]],!1))}

            <!-- Input element for layer visibility -->
            <label
              class="${a} ${r} icon primary-text action visibility small"
            >
              <input
                type=${r}
                .checked=${jt(e)}
                @click=${H(this,q,ze)}
                disabled=${a||K}
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
              <!--<span class="tooltip top" style="pointer-events: none">${e?"Hide":"Show"}</span>-->
            </label>
          </nav>
        `)}

      <!-- Render layer tools -->
      ${V(d&&!p,()=>l`
          <eox-layercontrol-layer-tools
            .noShadow=${!1}
            .layer=${this.layer}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
            .toolsAsList=${this.toolsAsList}
            .toolsAutoExpand=${this.toolsAutoExpand}
            .colormapRegistry=${this.colormapRegistry}
            .customEditorInterfaces=${this.customEditorInterfaces}
          ></eox-layercontrol-layer-tools>
        `)}
    `}}q=new WeakSet,G=function(e){var i;return(i=this.layer)==null?void 0:i.get(e)},ze=function(e){Rs(e,this)},Rt=new WeakMap,Bt=new WeakMap,L(Oe,"properties",{layer:{attribute:!1},layerType:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer",Oe);var Ut,Tt;class je extends N{constructor(){super();g(this,Ut,"");g(this,Tt,`
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
  `);this.group=null,this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var o,a;const e=!!((o=this.group)!=null&&o.get("layerControlExpand")),i=(a=Ue(this.group.getLayers()))==null?void 0:a.length;return l`
      <style>
        ${c(this,Ut)}
        ${!this.unstyled&&c(this,Tt)}
      </style>
      ${V(this.group,()=>l`
          <!-- Render the details element with the layer control -->
          <details
            class="max-width"
            open=${e||K}
            data-children-length=${i}
          >
            <summary class="square">
              ${V(i>0,()=>l`
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
                .toolsAutoExpand=${this.toolsAutoExpand}
                .colormapRegistry=${this.colormapRegistry}
                .customEditorInterfaces=${this.customEditorInterfaces}
                @changed=${()=>this.requestUpdate()}
              ></eox-layercontrol-layer>
            </summary>

            <!-- Render the list of layers within the details -->
            <eox-layercontrol-layer-list
              .noShadow=${this.noShadow}
              .idProperty=${this.idProperty}
              .layers=${this.group.getLayers()}
              .map=${this.map}
              .titleProperty=${this.titleProperty}
              .showLayerZoomState=${this.showLayerZoomState}
              .tools=${this.tools}
              .unstyled=${this.unstyled}
              .toolsAsList=${this.toolsAsList}
              .globallyExclusiveLayers=${this.globallyExclusiveLayers}
              .toolsAutoExpand=${this.toolsAutoExpand}
              .colormapRegistry=${this.colormapRegistry}
              .customEditorInterfaces=${this.customEditorInterfaces}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-list>
          </details>
        `)}
    `}}Ut=new WeakMap,Tt=new WeakMap,L(je,"properties",{group:{attribute:!1},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-group",je);const Bs=t=>{const{layers:s,idProperty:e,titleProperty:i,renderRoot:o}=t,a=Me(()=>{t.requestUpdate(),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))},50),r=()=>a();if(s&&(s.hasListener("change:length")&&(s==null||s.un("change:length",r)),s.on("change:length",r),s)){const n=o.querySelector("ul");xs(s,e,i,t),vs(n,s,e,t)}};var Dt,It;class Je extends N{constructor(){super();g(this,Dt,"");g(this,It,`
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
    .list.no-space {
      margin-block: var(--padding-inline) !important;
    }
    .list.no-space li.square {
      padding: 0;
    }
  `);this.idProperty="id",this.layers=null,this.map=null,this.tools=void 0,this.titleProperty="title",this.showLayerZoomState=!1,this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}firstUpdated(){Bs(this)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const e=this.layers?Ue(this.layers).reverse():[];return l`
      <style>
        ${c(this,Dt)}
        ${!this.unstyled&&c(this,It)}
      </style>
      <ul class="list no-space">
        ${V(this.layers,()=>l`
            ${ns(e,i=>i,i=>l`
                <li
                  data-layer="${i.get(this.idProperty)}"
                  data-type="${we(i,this.map)}"
                  class="square"
                >
                  ${i.getLayers?l`
                          <eox-layercontrol-layer-group
                            .noShadow=${this.noShadow}
                            .group=${i}
                            .idProperty=${this.idProperty}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
                            .toolsAutoExpand=${this.toolsAutoExpand}
                            .colormapRegistry=${this.colormapRegistry}
                            .customEditorInterfaces=${this.customEditorInterfaces}
                            @changed=${()=>this.requestUpdate()}
                          >
                          </eox-layercontrol-layer-group>
                        `:l`
                          <eox-layercontrol-layer
                            .noShadow=${this.noShadow}
                            .layer=${i}
                            .layerType=${we(i,this.map)}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
                            .toolsAutoExpand=${this.toolsAutoExpand}
                            .colormapRegistry=${this.colormapRegistry}
                            .customEditorInterfaces=${this.customEditorInterfaces}
                            @changed=${()=>this.requestUpdate()}
                          ></eox-layercontrol-layer>
                        `}
                </li>
              `)}
          `)}
      </ul>
    `}}Dt=new WeakMap,It=new WeakMap,L(Je,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-list",Je);const Us=t=>{const s=t.querySelector("select[name=optional]"),e=s?s.value:null,i=Yt(t.layers.getArray(),"layerControlOptional",!0).find(o=>(o.get(t.idProperty)||o.ol_uid)===e);i==null||i.set("layerControlOptional",!1),i==null||i.setVisible(!0),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0})),t.renderRoot.parentNode.querySelectorAll("eox-layercontrol-layer-list").forEach(o=>o.requestUpdate()),t.requestUpdate()};var _t,Fe;class Xe extends N{constructor(){super();g(this,_t);this.idProperty="id",this.layers=null,this.titleProperty="title",this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const e=Yt(this.layers.getArray(),"layerControlOptional",!0);return l`
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
            ${e.map(i=>{const o=i.get(this.idProperty)||i.ol_uid,a=i.get(this.titleProperty),r=`layer ${i.get(this.idProperty)}`;return l` <option value="${o}">${a||r}</option> `})}
          </select>

          <!-- Label for the dropdown -->
          <label for="optional">Optional layers</label>
        </div>

        <!-- Button to handle adding layers -->
        <button class="small" @click="${H(this,_t,Fe)}">Add</button>
      </nav>
    `}}_t=new WeakSet,Fe=function(){Us(this)},L(Xe,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},titleProperty:{attribute:"title-property",type:String},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-optional-list",Xe);const Ts=(t,s)=>{s.jsonInput=t.target.value,s.requestUpdate()},Se=t=>{const s=JSON.parse(`{"data":${Ae(t.jsonInput)}}`);Array.isArray(s.data)?s.data.forEach(e=>{t.eoxMap.addOrUpdateLayer(e)}):t.eoxMap.addOrUpdateLayer(s.data),t.jsonInput=null,t.requestUpdate()},Ds=(t,s)=>{s.urlInput=t.target.value,s.requestUpdate()};async function Is(t){const s=t.urlInput;if(t.wmsCapabilities=null,t.searchLoad=!0,t.requestUpdate(),!s)return!1;if(Wt(s)==="XYZ")return{Name:s};try{const e=await ys(s);t.wmsCapabilities=e}catch{}finally{t.searchLoad=!1,t.requestUpdate()}return!1}const _s=(t,s)=>{const{Name:e}=t,i=Wt(s.urlInput)||"XYZ",o={type:"Tile",properties:{id:e,title:e},source:{type:i,url:s.urlInput,params:{LAYERS:e}}};s.jsonInput=JSON.stringify(o)},Zs=(t,s)=>{s.open=t||null,s.urlInput=null,s.jsonInput=null,s.wmsCapabilities=null,s.requestUpdate()};var R,Ye,Ge,Xt,Ke,Qe,gt,Zt;class We extends N{constructor(){super();g(this,R);L(this,"urlInput",null);L(this,"jsonInput",null);L(this,"open",null);L(this,"searchLoad",!1);L(this,"wmsCapabilities",null);g(this,Zt,`
    .eox-add-layer-main .open {
      position: relative;
    }
    .eox-add-layer-main .close {
      display: none;
    }
    .field.small > :is(input, textarea, select) {
      font-size: 0.75rem;
    }
  `);this.eoxMap=null,this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const e={add:l`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>layers-plus</title>
        <path
          d="M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z"
        />
      </svg>`,plus:l`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>plus</title>
        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
      </svg>`,search:l`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>magnify</title>
        <path
          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
        />
      </svg>`},i=this.open?"open":"close",o=this.open==="url",a=this.open==="json",r=!fs(this.urlInput)||this.searchLoad?!0:K;return l`
      <style>
        ${c(this,Zt)}
      </style>
      <div class="eox-add-layer-main">
        <nav class="eox-add-layer-col">
          <!-- Tabbed interface for URL and JSON -->
          <div
            class="eox-add-layer-tab tabs min left-align ${i}"
          >
            <a
              @click=${()=>H(this,R,gt).call(this,"url")}
              class="${o?"active":""}"
            >
              URL
            </a>
            <a
              @click=${()=>H(this,R,gt).call(this,"json")}
              class="${a?"active":""}"
            >
              JSON
            </a>
          </div>

          <div class="max"></div>

          <!-- Button to toggle tabs -->
          <button
            class="add-icon transparent square primary-text small"
            @click=${()=>H(this,R,gt).call(this,this.open?null:"url")}
          >
            ${this.unstyled?"Add Layer":l`<i class="small primary-text">${e.add}</i>`}
          </button>
        </nav>
        <div class="eox-add ${i}" style="padding: 15px 0">
          ${o?l`
                <nav>
                  <!-- Input field for URL -->
                  <div class="eox-add-layer-col field border small responsive">
                    <input
                      type="text"
                      class="add-url"
                      placeholder="Add URL (WMS/XYZ)"
                      .value="${this.urlInput}"
                      @input=${H(this,R,Ye)}
                    />
                  </div>
                  <!-- Search button for URL -->
                  <button
                    class="search-icon"
                    disabled=${r}
                    @click=${H(this,R,Ge)}
                  >
                    ${this.unstyled?"Search":l`<i class="small">${e.search}</i>`}
                  </button>
                </nav>

                <!-- Display layers for WMS capabilities -->
                ${this.wmsCapabilities?l`<ul class="search-lists">
                      ${this.wmsCapabilities.Capability.Layer.Layer.map(n=>{const d=n.Name;return l`
                            <li class="search-list">
                              ${d}
                              <!-- Button to add layer -->
                              <button
                                class="add-layer-icon icon"
                                @click=${()=>H(this,R,Xt).call(this,n)}
                              >
                                ${this.unstyled?"+":""}
                              </button>
                            </li>
                          `})}
                    </ul>`:K}
              `:l`
                <!-- Textarea for JSON input -->
                <div class="field small border no-margin">
                  <textarea
                    class="add-layer-input small"
                    style="overflow-wrap: break-word; font-family: monospace;"
                    placeholder="Please input a valid eox-map layer JSON."
                    @input=${H(this,R,Qe)}
                    .value=${this.jsonInput}
                  ></textarea>
                </div>

                <!-- Button to add JSON layer -->
                <button
                  class="add-layer-icon json-add-layer small square small-margin"
                  style="position: absolute; bottom: 15px; right: 0; z-index: 1;"
                  disabled=${ms(this.jsonInput)?K:!0}
                  @click=${H(this,R,Ke)}
                >
                  ${this.unstyled?"Add JSON":l`<i class="small">${e.plus}</i>`}
                </button>
              `}
        </div>
      </div>
    `}}R=new WeakSet,Ye=function(e){Ds(e,this)},Ge=async function(){const e=await Is(this);e&&H(this,R,Xt).call(this,e)},Xt=function(e){_s(e,this),Se(this)},Ke=function(){Se(this)},Qe=function(e){Ts(e,this)},gt=function(e){Zs(e,this)},Zt=new WeakMap,L(We,"properties",{eoxMap:{attribute:!1,state:!0},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-add-layers",We);const Ns=(t,s)=>{if(s.requestUpdate(),t.target.tagName==="EOX-LAYERCONTROL-LAYER-TOOLS"){const e=s.renderRoot.querySelector("eox-layercontrol-optional-list");e==null||e.requestUpdate()}},He=t=>{const s=hs(t.for);return s&&s.map!==t.map&&(t.map=s.map),s};us();var J,Q,es,ss,Nt;class ts extends N{constructor(){super();g(this,Q);g(this,J);g(this,Nt,`
    ${Ft}
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
    summary > * {
      pointer-events: all !important;
    }
  `);this.for="eox-map",this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=["info","opacity","datetime","config","remove","sort"],this.addExternalLayers=!1,this.unstyled=!1,this.styleOverride="",this.toolsAsList=!1,this.globallyExclusiveLayers=!1,this.toolsAutoExpand=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}firstUpdated(){this.eoxMap=He(this)}updated(e){e.has("for")&&(this.eoxMap=He(this))}get eoxMap(){return c(this,J)}set eoxMap(e){const i=c(this,J);D(this,J,e),this.requestUpdate("eoxMap",i)}render(){var o,a,r;const e=(o=this.map)==null?void 0:o.getLayers().getArray(),i=e&&((a=Yt(e,"layerControlOptional",!0))==null?void 0:a.length)>0;return l`
      <style>
        ${!this.unstyled&&c(this,Nt)}
        ${this.styleOverride}
      </style>

      <span class="layerstitle">
        <slot name="layerstitle"
          ><p><strong>Layers</strong></p></slot
        >
      </span>

      <!-- Conditional rendering of add layers component -->
      ${V(this.addExternalLayers&&((r=c(this,J))==null?void 0:r.addOrUpdateLayer),()=>l`
          <eox-layercontrol-add-layers
            .noShadow=${!0}
            .eoxMap=${c(this,J)}
            .unstyled=${this.unstyled}
          ></eox-layercontrol-add-layers>
        `)}

      <!-- Conditional rendering of layer list component -->
      ${V(this.map,()=>l`
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
            .toolsAutoExpand=${this.toolsAutoExpand}
            .colormapRegistry=${this.colormapRegistry}
            .customEditorInterfaces=${this.customEditorInterfaces}
            @changed=${H(this,Q,es)}
            @datetime:updated=${n=>Te(n,this)}
            @layerConfig:change=${H(this,Q,ss)}
          ></eox-layercontrol-layer-list>
        `)}

      <!-- Conditional rendering of optional list component -->
      ${V(i,()=>l`
          <eox-layercontrol-optional-list
            .noShadow=${!0}
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .titleProperty=${this.titleProperty}
            @changed=${()=>this.requestUpdate()}
          ></eox-layercontrol-optional-list>
        `)}
    `}}J=new WeakMap,Q=new WeakSet,es=function(e){Ns(e,this),this.dispatchEvent(new CustomEvent("layerchange",{detail:e.detail}))},ss=function(e){this.dispatchEvent(new CustomEvent("layerConfig:change",{detail:e.detail}))},Nt=new WeakMap,L(ts,"properties",{for:{type:String},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{type:Array},addExternalLayers:{attribute:"add-external-layers",type:Boolean},unstyled:{type:Boolean},styleOverride:{type:String},toolsAsList:{type:Boolean},globallyExclusiveLayers:{attribute:"globally-exclusive-layers",type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{type:Array}});customElements.define("eox-layercontrol",ts);export{ts as EOxLayerControl,Ss as updateVectorLayerStyle};
