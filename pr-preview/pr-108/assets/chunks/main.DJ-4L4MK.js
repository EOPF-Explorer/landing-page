var Kt=Object.defineProperty;var bt=e=>{throw TypeError(e)};var te=(e,s,t)=>s in e?Kt(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var m=(e,s,t)=>te(e,typeof s!="symbol"?s+"":s,t),rt=(e,s,t)=>s.has(e)||bt("Cannot "+t);var d=(e,s,t)=>(rt(e,s,"read from private field"),t?t.call(e):s.get(e)),p=(e,s,t)=>s.has(e)?bt("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(e):s.set(e,t),V=(e,s,t,o)=>(rt(e,s,"write to private field"),o?o.call(e,t):s.set(e,t),t),u=(e,s,t)=>(rt(e,s,"access private method"),t);import{b as r,a as x,A as R,i as ct}from"./lit-element.CBn2YVps.js";import{n as y}from"./when.BR7zwNJC.js";import{o as Z,b as ee,c as se}from"./map.BuAX9fqg.js";import{W as oe,S as ae,o as T,_ as vt,l as dt}from"./if-defined.B6GByRgW.js";import{e as yt,a as le}from"./addCommonStyleSheet.BL0mKR1r.js";import{X as ie}from"./XYZ.BZLCURoo.js";import{_ as re}from"./index.BUIxO2d3.js";import{g as ne}from"./getElement.COiK8z0h.js";import"./commonjsHelpers.BosuxZz1.js";import"./proj.DtkH-SLQ.js";async function ce(e){let s=new URL(e),t=s.searchParams;t.set("SERVICE","WMS"),t.set("REQUEST","GetCapabilities");let o=s.toString();const a=await fetch(o);if(a.ok){const l=await a.text();return new oe(l).toJSON()}else throw new Error(`Error: ${a.status}`)}function ut(e){const s=/\b(?:wms|ows)\b/i,t=/{(?:z|x|y-?)}\/{(?:z|x|y-?)}\/{(?:z|x|y-?)}/i;return s.test(e)?"TileWMS":t.test(e)?"XYZ":!1}function de(e){const t=/^(?:(?:https?|ftp):\/\/|\/\/)?(?:localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:\w+[\w-]*\.)+\w+)(?::\d+)?(?:\/\S*)?$/.test(e),o=ut(e);return!!(e&&t&&o)}function Vt(e){return e.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,'"$2": ').replace(/,\s*}/g,"}").replace(/,\s*]/g,"]").replace(/\s*(\{|}|\[|\]|,)\s*/g,"$1").replaceAll('": //',"://")}function pe(e){try{return JSON.parse(Vt(e)),!!e}catch{return!1}}function nt(e,s){const t=new URL(e).searchParams;Object.entries(s).forEach(([i,n])=>{typeof n=="object"&&!Array.isArray(n)&&n!==null?Object.keys(n).forEach(c=>{t.set(c,n[c])}):Array.isArray(n)?(t.delete(i),n.forEach(c=>{t.append(i,c)})):t.set(i,n)});const o=e.split("?")[0],a=t.toString();return`${o}?${a}`}const he=e=>{const s=e.item;let t=Array.prototype.slice.call(s.parentNode.childNodes);return t=t.filter(o=>o.nodeType!=Node.ELEMENT_NODE||!o.classList.contains("sortable-fallback")),t},ye=(e,s,t,o,a,l)=>{const n=e.item.parentNode;for(const C of t)n.appendChild(C);if(e.oldIndex==e.newIndex)return;const c=o.getArray(),h=e.item.querySelector("eox-layercontrol-layer").layer.get(a),g=c.find(C=>C.get(a)===h),b=l.dataset.layer,v=c.find(C=>C.get(a)==b);let H,w;for(H=0;H<c.length;H++)if(c[H]==g){o.removeAt(H);break}for(w=0;w<c.length;w++)if(c[w]===v){H>w?o.insertAt(w,g):o.insertAt(w+1,g);break}s.requestUpdate()};function ue(e,s,t,o){let a=[],l=null;e._sortable=ae.create(e,{handle:".drag-handle",filter:".drag-handle.disabled",swapThreshold:.5,animation:150,easing:"cubic-bezier(1, 0, 0, 1)",onStart:i=>{console.log(i),a=he(i)},onMove:i=>{l=i.related},onEnd:i=>ye(i,o,a,s,t,l)})}function me(e,s,t,o){const a=e.getArray();let l=!1;a.forEach(i=>{const n=i.ol_uid;i.get(s)||(i.set(s,n),l=!0),i.get(t)||(i.set(t,`layer ${n}`),l=!0),l&&o.requestUpdate()})}function mt(e,s,t){let o=[];const a=(l,i,n)=>{o=[...o,...l.filter(h=>h.get(i)===n)];const c=l.filter(h=>h.getLayers);return c.length>0&&c.forEach(h=>a(h.getLayers().getArray(),i,n)),o};return a(e,s,t),o}function ge(e,s,t){if(!e||!s)return!1;if(!St(e,t))return!0;const o=e.get("minZoom"),a=e.get("maxZoom"),l=s.getView().getZoom();return l>o&&l<a}function St(e,s){const t=e.get("minZoom"),o=e.get("maxZoom");return!!(s&&(t!==-1/0||o!==1/0))}function $t(e,s){var a,l,i;return!e||!s?void 0:e.getLayers?"group":((i=(a=s.getInteractions().getArray().filter(n=>n.freehand_!==void 0).map(n=>n.source_))==null?void 0:a.ol_uid)==null?void 0:i.includes(e.getSource?(l=e.getSource())==null?void 0:l.ol_uid:void 0))?"draw":e.declutter_!==void 0||e.get("type")==="Vector"?"vector":"raster"}const fe=(e,s,t)=>{var c,h;let o=s;const a=t.layer.getSource(),l=((h=(c=t.layerConfig.schema)==null?void 0:c.options)==null?void 0:h.removeProperties)??[],i={...e};l.forEach(g=>delete i[g]),a.updateParams?a.updateParams(i):a.getTileUrlFunction&&a.getTileUrlFunction()&&(o||(o=a.getTileUrlFunction()),a instanceof ie&&(a._updatedUrl=nt(a.getUrls()[0],e)),a.setTileUrlFunction((...g)=>{const b=new URL(o(...g));return l.forEach(v=>b.searchParams.delete(v)),nt(b.href,e)}),a.setKey(new Date().toISOString()));const n=document.querySelector("eox-map");if(n){const g=n.globe;if(g){const b=g.planet.layers.filter(v=>v.name==t.layer.get("id"))[0];b&&b.setUrl(nt(b.url,e)),window.eoxMapGlobe.refresh()}}return o};function be(e,s,t){const o="updateStyleVariables"in s,a="setStyle"in s,l=o?s.style_:t.style;let i=l==null?void 0:l.variables;if(i){const n=gt(e);if(l.variables={...i,...n},o)s.updateStyleVariables(n);else if(a){const c=ve(l);s.setStyle(c)}}}const gt=e=>{const s={};for(const t in e)if(typeof e[t]=="object"&&e[t]!==null){const o=gt(e[t]);for(const a in o)s[a]=o==null?void 0:o[a]}else s[t]=e==null?void 0:e[t];return s};function ve(e){let s=e;if("variables"in e){let t=JSON.stringify(e);const{variables:o}=e;for(const a in o)typeof o[a]=="number"?t=t.replaceAll(`["var","${a}"]`,String(o[a])):t=t.replaceAll(`["var","${a}"]`,`"${o[a]}"`);s=JSON.parse(t)}return s}const $e=(e,s,t)=>{if(!e)return;const o=gt(s);let a,l;return Array.isArray(e)?l=structuredClone(e):l=[structuredClone(e)],a=l.filter(i=>{if(!("boundTo"in i))return!0;const n=i.boundTo.key,c=i.boundTo.value;return n in o&&o[n]==c}),a.length||(a=null),a==null?void 0:a.map(i=>{var n;if(delete i.boundTo,i.rangeProperty&&t){const c=o[i.rangeProperty];c&&t[c]?(i.range=t[c],delete i.rangeProperty):c&&(i.range=["#ffffff","#000000"])}return!("domainProperties"in i)||"domain"in i?i:(n=Object.keys(i))==null?void 0:n.reduce((c,h)=>(h==="domainProperties"?c.domain=i[h].map(g=>o[g]):c[h]=i[h],c),{})}).filter(Boolean)};function Ht(e,s){var o;let t={};for(const a in e){const l=e[a].type;if(l&&l!=="object"&&s[a]!==void 0)t[a]=l==="number"?Number(s[a]):s[a];else if(typeof e[a]=="object"&&((o=e[a])!=null&&o.properties)){const i=Ht(e[a].properties,s);Object.keys(i).length>0&&(t[a]=i)}}return t}function xe(e,s){var l,i,n,c,h,g,b;if(!s)return null;let t={},o="updateStyleVariables"in e?(l=e.style_)==null?void 0:l.variables:(i=s.style)==null?void 0:i.variables;if((s.type==="style"||s.style)&&o)t=o;else if((c=(n=e.getSource())==null?void 0:n.getParams)!=null&&c.call(n))t=e.getSource().getParams();else if((g=(h=e.getSource())==null?void 0:h.getTileUrlFunction)!=null&&g.call(h))try{const v=e.getSource().getTileUrlFunction()([0,0,0]);if(v){const H=new URL(v);t={};for(const[w,C]of H.searchParams.entries()){const ft=H.searchParams.getAll(w);t[w]=ft.length>1?ft:C}}}catch(v){console.error("Error parsing start values from tile URL",v)}else return null;const a=Ht(((b=s.schema)==null?void 0:b.properties)||s.schema,t);return Object.keys(a).length?a:null}const Lt=(e,s)=>e==null?void 0:e.filter(t=>["remove","sort"].filter(o=>s!=null&&s.get("layerControlDisable")?o!=="sort":!0).includes(t)),At=(e,s)=>e==null?void 0:e.filter(t=>{let o=!0;return["remove","sort"].includes(t)&&(o=!1),t==="info"&&(o=s.get("description")),t==="config"&&(o=s.get("layerConfig")),t==="datetime"&&(o=s.get("layerDatetime")),t==="legend"&&(o=s.get("layerLegend")),o}),we=(e,s,t)=>r`
  <button
    slot="${e}-icon"
    class="no-margin transparent square primary-text small"
  >
    ${t?e:r`<i class="small primary-text">${s}</i>`}
  </button>
`,Ct=(e,s)=>r`
  <button
    class="remove-icon no-margin transparent square small action"
    @click=${()=>{const{layer:t}=e;t==null||t.set("layerControlOptional",!0),t==null||t.setVisible(!1),e.dispatchEvent(new CustomEvent("changed",{detail:t,bubbles:!0}))}}
  >
    ${e.unstyled?"x":r`<i class="small red-text">${s}</i>`}
  </button>
`,Mt=(e,s,t)=>r`
  <button
    class="sort-icon no-margin transparent square primary-text drag-handle small action ${e.layer.get("layerControlDisable")?"disabled":""}"
    style="cursor: ns-resize;"
  >
    ${t?"═":r`<i class="small primary-text">${s}</i>`}
  </button>
`;function k(){return{dots:r`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>menu-down</title>
      <path d="M7,10L12,15L17,10H7Z" />
    </svg>`,info:r`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>information-outline</title>
      <path
        d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
      />
    </svg>`,opacity:r`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>circle-opacity</title>
      <path
        d="M18 10V8H20V10H18M18 12V10H16V12H18M18 8V6H16V8H18M16 2.84V4H18C17.37 3.54 16.71 3.15 16 2.84M18 4V6H20C19.42 5.25 18.75 4.58 18 4M20 6V8H21.16C20.85 7.29 20.46 6.63 20 6M22 12C22 11.32 21.93 10.65 21.8 10H20V12H22M16 6V4H14V6H16M16 16H18V14H16V16M18 18H20L20 18V16H18V18M16 20H18L18 20V18H16V20M14 21.8C14.7 21.66 15.36 21.44 16 21.16V20H14V21.8M18 14H20V12H18V14M16 8H14V10H16V8M20 16H21.16C21.44 15.36 21.66 14.7 21.8 14H20V16M16 12H14V14H16V12M12 18V16H14V14H12V12H14V10H12V8H14V6H12V4H14V2.2C13.35 2.07 12.69 2 12 2C6.5 2 2 6.5 2 12S6.5 22 12 22V20H14V18H12M14 18H16V16H14V18Z"
      />
    </svg>`,config:r`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>tune</title>
      <path
        d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z"
      />
    </svg>`,datetime:r`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>calendar-clock-outline</title>
      <path
        d="M6 1V3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11.1C12.36 22.24 14.09 23 16 23C19.87 23 23 19.87 23 16C23 14.09 22.24 12.36 21 11.1V5C21 3.9 20.11 3 19 3H18V1H16V3H8V1M5 5H19V7H5M5 9H19V9.67C18.09 9.24 17.07 9 16 9C12.13 9 9 12.13 9 16C9 17.07 9.24 18.09 9.67 19H5M16 11.15C18.68 11.15 20.85 13.32 20.85 16C20.85 18.68 18.68 20.85 16 20.85C13.32 20.85 11.15 18.68 11.15 16C11.15 13.32 13.32 11.15 16 11.15M15 13V16.69L18.19 18.53L18.94 17.23L16.5 15.82V13Z"
      />
    </svg>`,legend:r`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>map-legend</title>
      <path
        d="M9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3L20.34,3.03L15,5.1L9,3M8,5.45V17.15L5,18.31V6.46L8,5.45M10,5.47L14,6.87V18.53L10,17.13V5.47M19,5.7V17.54L16,18.55V6.86L19,5.7M7.46,6.3L5.57,6.97V9.12L7.46,8.45V6.3M7.46,9.05L5.57,9.72V11.87L7.46,11.2V9.05M7.46,11.8L5.57,12.47V14.62L7.46,13.95V11.8M7.46,14.55L5.57,15.22V17.37L7.46,16.7V14.55Z"
      />
    </svg>`,remove:r`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>delete-outline</title>
      <path
        d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"
      />
    </svg>`,sort:r`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>drag-horizontal-variant</title>
      <path d="M21 11H3V9H21V11M21 13H3V15H21V13Z" />
    </svg>`}}const Et=e=>{var t;const s=["layerControlHide","layerControlOptional"];return(t=e==null?void 0:e.getArray())==null?void 0:t.filter(o=>s.every(a=>!o.get(a)))};function Rt(e,s){s.dispatchEvent(new CustomEvent("datetime:updated",{detail:e.detail,bubbles:!0}))}var $,O,D;class Bt extends x{constructor(){super();p(this,$,[]);p(this,O,ct`
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
  `);p(this,D,"");this.unstyled=!1,this.noShadow=!1,this.layer=null}get layerLegend(){return d(this,$)?d(this,$).length>1?d(this,$):d(this,$)[0]:null}set layerLegend(t){var o;t?Array.isArray(t)?V(this,$,t.map((a,l)=>{var i;return{id:(((i=this.layer)==null?void 0:i.get("id"))??"")+l,...a}})):V(this,$,[{id:(((o=this.layer)==null?void 0:o.get("id"))??"")+0,...t}]):V(this,$,null)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){this.layerLegend&&new ResizeObserver(()=>{var t;V(this,$,(t=d(this,$))==null?void 0:t.map(o=>(this.offsetWidth!==o.width&&(o.width=this.offsetWidth),{...o}))),this.requestUpdate()}).observe(this.renderRoot.querySelector(".legend-container"))}render(){return customElements.get("color-legend")||console.error("Please import `color-legend-element` in order to use layerLegend"),r`
      <style>
        ${d(this,O)}
        ${!this.unstyled&&d(this,D)}
      </style>
      ${y(this.layerLegend,()=>r`
          <div class="legend-container">
            <!-- Render color-legend-->
            ${d(this,$).map((t,o,a)=>r`
                <color-legend
                  id="${t.id}"
                  width=${t.width??325}
                  scaleType="${T(t.scaleType)}"
                  markType="${T(t.markType)}"
                  titleText="${T(t.title)}"
                  .range=${t.range}
                  .domain=${t.domain}
                  tickFormat="${T(t.tickFormat)}"
                  .ticks=${t.ticks??5}
                  .tickValues=${t.tickValues}
                  .marginLeft=${8}
                  .marginRight=${8}
                >
                </color-legend>
                ${o!==a.length-1?r`<div class="separator"></div>`:R}
              `)}
          </div>
        `)}
    `}}$=new WeakMap,O=new WeakMap,D=new WeakMap,m(Bt,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerLegend:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-legend",Bt);var L,M,U,I,pt,N,_;class kt extends x{constructor(){super();p(this,I);p(this,L,{});p(this,M,null);p(this,U);p(this,N,ct`
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
  `);p(this,_,ct`
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
  `);this.layer=null,this.unstyled=!1,this.noShadow=!1,this.layerConfig=null,this.throttleDataChange=vt(u(this,I,pt),1e3),this.customEditorInterfaces=[],this.colormapRegistry=null}updated(t){var o,a;if(t.has("layerConfig")){const l=((o=this.layerConfig)==null?void 0:o.type)==="style"||(a=this.layerConfig)!=null&&a.style?100:1e3;this.throttleDataChange=vt(u(this,I,pt),l),this.requestUpdate()}}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){V(this,M,xe(this.layer,this.layerConfig)),Object.keys(d(this,L)).length!==0&&V(this,M,d(this,L)),customElements.get("eox-jsonform")||console.error("Please import @eox/jsonform in order to use layerconfig");const t={disable_edit_json:!0,disable_collapse:!0,disable_properties:!0};return r`
      <style>
        ${d(this,N)}
        ${!this.unstyled&&d(this,_)}
      </style>
      ${y(this.layerConfig,()=>r`
          ${y(this.layerConfig.legend,()=>r`
              <eox-layercontrol-layer-legend
                .noShadow=${!0}
                .unstyled=${this.unstyled}
                .layer=${this.layer}
                .layerLegend=${$e(this.layerConfig.legend,d(this,M),this.colormapRegistry)}
              ></eox-layercontrol-layer-legend>
            `)}
          <!-- Render a JSON form for layer configuration -->
          <eox-jsonform
            .schema=${this.layerConfig.schema}
            .value=${d(this,M)}
            .options=${t}
            .noShadow=${!0}
            .customEditorInterfaces=${this.customEditorInterfaces}
            @change=${this.throttleDataChange}
          ></eox-jsonform>
        `)}
    `}}L=new WeakMap,M=new WeakMap,U=new WeakMap,I=new WeakSet,pt=function(t){V(this,L,t.detail),this.layerConfig.type==="style"||this.layerConfig.style?"setStyle"in this.layer||"updateStyleVariables"in this.layer?be(d(this,L),this.layer,this.layerConfig):console.error(`Layer type ${this.layer.get("type")??""} does not support styles configuration`):V(this,U,fe(d(this,L),d(this,U),this)),this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:t.detail,layer:this.layer}})),this.requestUpdate()},N=new WeakMap,_=new WeakMap,m(kt,"properties",{layer:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},layerConfig:{attribute:!1},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layerconfig",kt);var z,It,j,X;class Ut extends x{constructor(){super();p(this,z);p(this,j,"");p(this,X,"");this.unstyled=!1,this.noShadow=!1,this.layerDatetime=null,this.layer=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return customElements.get("eox-timecontrol")||console.error("Please import @eox/timecontrol in order to use layerDatetime"),r`
      <style>
        ${d(this,j)}
        ${!this.unstyled&&d(this,X)}
      </style>
      ${y(this.layerDatetime,()=>r`
          <eox-timecontrol
            .initDate=${this.layerDatetime.currentStep?[this.layerDatetime.currentStep]:void 0}
            .controlValues=${[{id:this.layer.get("id"),name:this.layer.get("name")||this.layer.get("title"),timeControlValues:this.layerDatetime.controlValues.map(t=>({date:t}))}]}
            @select=${u(this,z,It)}
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
    `}}z=new WeakSet,It=function(t){var i;const o=new Date(t.detail.date[0]),a=(i=this.layerDatetime.controlValues)==null?void 0:i.some(n=>typeof n=="string"&&n.includes("T"));let l;a?l=o.toISOString():l=(c=>`${c.getFullYear()}-${String(c.getMonth()+1).padStart(2,"0")}-${String(c.getDate()).padStart(2,"0")}`)(o),l!==this.layerDatetime.currentStep&&(this.dispatchEvent(new CustomEvent("datetime:updated",{bubbles:!0,detail:{datetime:l,layer:this.layer}})),this.layerDatetime.currentStep=l,this.requestUpdate())},j=new WeakMap,X=new WeakMap,m(Ut,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerDatetime:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-datetime",Ut);var P,J,F;class Pt extends x{constructor(){super();p(this,P,t=>(this.selectedTab===t||this.toolsAsList)&&"highlighted");p(this,J,`
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
  `);p(this,F,`
    ${yt}
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
  `);this.actions=[],this.selectedTab=0,this.tabs=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const t=this.tabs,o=this.actions,a=o.length+t.length>1;return r`
      <style>
        ${d(this,J)}
        ${!this.unstyled&&d(this,F)}
      </style>
      <div class="${this.toolsAsList?"listed":"tabbed"}">
        <!-- Navigation for tabs and actions -->
        ${y(a,()=>r`
            <nav>
              ${y(!this.toolsAsList,()=>r`
                  <div>
                    <!-- Labels for tabs -->
                    ${Z(t,(l,i)=>r`
                        <label
                          class=${d(this,P).call(this,i)}
                          @click=${()=>this.selectedTab=i}
                        >
                          <!-- Customizable icon for each tab -->
                          <slot name=${`${l}-icon`}>${l}</slot>
                        </label>
                      `)}
                  </div>
                  <div>
                    <!-- Icons for actions -->
                    ${Z(o,l=>r`
                        <span>
                          <!-- Customizable icon for each action -->
                          <slot name=${`${l}-icon`}>${l}</slot>
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
          ${Z(t,(l,i)=>r`
              ${y(this.toolsAsList,()=>r`
                  <label>
                    <!-- Customizable icon for each tab -->
                    <slot name=${`${l}-icon`}>${l}</slot>
                    <span>${l}</span>
                  </label>
                `)}
              <div class="tab ${d(this,P).call(this,i)}">
                <!-- Content slot for each tab -->
                <slot name=${`${l}-content`}>${l}</slot>
              </div>
              ${y(this.toolsAsList&&i<t.length-1,()=>r`<hr class="small" />`)}
            `)}
        </figure>
      </div>
    `}}P=new WeakMap,J=new WeakMap,F=new WeakMap,m(Pt,"properties",{actions:{attribute:!1},selectedTab:{state:!0},tabs:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-tools-items",Pt);var Y,Zt,W,Q;class Tt extends x{constructor(){super();p(this,Y);m(this,"_removeButton",t=>Ct(this,t));m(this,"_sortButton",t=>Mt(this,t,this.unstyled));m(this,"_button",(t,o)=>we(t,o,this.unstyled));m(this,"_getDefaultTools",t=>{var o,a;return r`
      <div slot="info-content">
        ${ee(this.layer.get("description"))}
      </div>
      <div slot="opacity-content">
        <div class="row">
          <!-- Input for opacity -->
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value=${dt((o=this.layer)==null?void 0:o.getOpacity())}
            class="tiny max"
            @input=${l=>{this.layer.setOpacity(parseFloat(l.target.value)),this.requestUpdate()}}
          />
          <span class="small-text" style="width: 30px; text-align: right">${Math.round(((a=this.layer)==null?void 0:a.getOpacity())*100)}%</span>
        </div class="row">
      </div>
      <div slot="config-content">
        <!-- Layer configuration -->
        ${y(this.layer.get("layerConfig"),()=>r`
            <eox-layercontrol-layerconfig
              slot="config-content"
              .layer=${this.layer}
              .noShadow=${!0}
              .layerConfig=${this.layer.get("layerConfig")}
              .colormapRegistry=${this.colormapRegistry}
              .unstyled=${this.unstyled}
              .customEditorInterfaces=${this.customEditorInterfaces}
              @changed=${()=>this.requestUpdate()}
              @layerConfig:change=${u(this,Y,Zt)}
            ></eox-layercontrol-layerconfig>
          `)}
      </div>
      <div slot="datetime-content">
        <!-- Layer datetime -->
        ${y(this.layer.get("layerDatetime"),()=>r`
            <eox-layercontrol-layer-datetime
              slot="datetime-content"
              .noShadow=${!0}
              .layerDatetime=${this.layer.get("layerDatetime")}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
              @datetime:updated=${l=>Rt(l,this)}
            ></eox-layercontrol-layer-datetime>
          `)}
      </div>
      <div slot="legend-content">
        <!-- Layer legend -->
        ${y(this.layer.get("layerLegend"),()=>r`
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
      <div slot="remove-icon">${this._removeButton(t.remove)}</div>
      <div slot="sort-icon">${this._sortButton(t.sort)}</div>
    `});p(this,W,"");p(this,Q,`
    ${this.embedded?"":yt}
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
  `);this.layer=null,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.open=!1,this.toolsAutoExpand=!1,setTimeout(()=>{var o,a,l;const t=this.parentElement||((o=this.getRootNode())==null?void 0:o.host);this.embedded=(t==null?void 0:t.tagName)==="EOX-LAYERCONTROL-LAYER",(typeof this.open>"u"||this.open===!1||this.open===null)&&(this.open=this.toolsAutoExpand?!!((a=this.layer)!=null&&a.getVisible()):this.embedded===!1?!0:!!((l=this.layer)!=null&&l.get("layerControlToolsExpand")))}),this.customEditorInterfaces=[],this.colormapRegistry=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}updated(t){var o;this.toolsAutoExpand&&(t.has("toolsAutoExpand")||t.has("layer"))&&(this.open=!!((o=this.layer)!=null&&o.getVisible()))}render(){const t=Lt(this.tools,this.layer),o=At(this.tools,this.layer),a=t==null?void 0:t.length,l=o==null?void 0:o.length;return r`
      <style>
        ${d(this,W)}
        ${!this.unstyled&&d(this,Q)}
      </style>
      ${y(a+l>0,()=>r`
          ${y(!(a===1&&l===0),()=>r`
              <details
                class="tools"
                .open=${dt(this.open)}
                @toggle=${i=>{this.open=i.target.open}}
              >
                <summary></summary>
                <eox-layercontrol-tools-items
                  class="${this.toolsAsList?"tools-list":"tools-tab"}"
                  .noShadow=${!1}
                  .actions=${t}
                  .tabs=${o}
                  .unstyled=${this.unstyled}
                  .toolsAsList=${this.toolsAsList}
                >
                  <!-- Rendering tabs and content -->
                  ${Z(o,i=>this._button(i,k()[i]))}
                  <!-- Including default tools -->
                  ${this._getDefaultTools(k())}
                </eox-layercontrol-tools-items>
              </details>
            `)}
        `)}
    `}}Y=new WeakSet,Zt=function(t){this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:t.detail.jsonformValue,layer:t.detail.layer}}))},W=new WeakMap,Q=new WeakMap,m(Tt,"properties",{layer:{attribute:!1},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},open:{type:Boolean,reflect:!0},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},embedded:{state:!0},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-tools",Tt);const Ve=e=>{const s=()=>{const t=ge(e.layer,e.map,e.showLayerZoomState);let o=!1;!t&&e.currLayerVisibilityBasedOnZoom?(e.currLayerVisibilityBasedOnZoom=!1,o=!0):t&&!e.currLayerVisibilityBasedOnZoom&&(e.currLayerVisibilityBasedOnZoom=!0,o=!0),o&&(e.requestUpdate(),e.dispatchEvent(new CustomEvent("change:resolution",{bubbles:!0})))};St(e.layer,e.showLayerZoomState)&&(s(),e.map.getView().on("change:resolution",()=>s()))},Se=(e,s)=>{const t=s.layer;if(t.setVisible(e.target.checked),s.toolsAutoExpand){const o=s.renderRoot.querySelector("eox-layercontrol-layer-tools");o&&(o.open=e.target.checked)}e.target.checked&&t.get("layerControlExclusive")&&s.closest(`${s.globallyExclusiveLayers?".layers":"eox-layercontrol-layer-list"} > ul`).querySelectorAll("eox-layercontrol-layer").forEach(a=>{var l;if(a.layer!==t&&((l=a.layer)!=null&&l.get("layerControlExclusive"))){if(a.layer.setVisible(!1),a.toolsAutoExpand){const i=a.renderRoot.querySelector("eox-layercontrol-layer-tools");i&&(i.open=!1)}a.requestUpdate()}}),s.dispatchEvent(new CustomEvent("changed",{bubbles:!0,detail:t})),s.requestUpdate()};var S,E,Ot,G,K;class qt extends x{constructor(){super();p(this,S);m(this,"currLayerVisibilityBasedOnZoom",!0);p(this,G,"");p(this,K,`
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
  `);this.layer=null,this.layerType=void 0,this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){Ve(this)}render(){var g,b;const t=this.layer.getVisible(),o=t?"visible":"",a=this.currLayerVisibilityBasedOnZoom?"":"zoom-state-invisible",l=u(this,S,E).call(this,"layerControlDisable")?"disabled":"",i=u(this,S,E).call(this,"layerControlExclusive")?"radio":"checkbox",n=((g=Lt(this.tools,this.layer))==null?void 0:g.length)>0,c=((b=At(this.tools,this.layer))==null?void 0:b.length)>0,h=document.querySelector("eox-layercontrol-layer-tools");return h&&Object.assign(h,{layer:this.layer,tools:this.tools,toolsAsList:this.toolsAsList}),r`
      <style>
        ${d(this,G)}
        ${!this.unstyled&&d(this,K)}
        
        /* Make sure the CSS variable is applied to the layer type icon */
        .small.grey-text {
          display: var(--layer-type-visibility);
        }
      </style>
      ${y(this.layer,()=>r`
          <!-- Render the layer -->
          <nav
            class="layer ${l} ${o} ${a} responsive tiny-space"
          >
            ${y(!this.unstyled,()=>{if(u(this,S,E).call(this,"color"))return r`
                  <i class="small" style="color: ${u(this,S,E).call(this,"color")}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>square-rounded</title>
                      <path
                        d="M8 3H16C18.76 3 21 5.24 21 8V16C21 18.76 18.76 21 16 21H8C5.24 21 3 18.76 3 16V8C3 5.24 5.24 3 8 3Z"
                      />
                    </svg>
                  </i>
                `;switch(this.layerType){case"group":return r` <i class="small"> </i> `;case"draw":return r`
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
                  `;case"vector":return r`
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
                  `;case"raster":return r`
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
                  `;default:return r` <i class="small grey-text"> </i> `}})}

            <!-- Layer title -->
            <div class="max truncate drag-handle ${l}">
              <span class="layertitle truncate"
                >${u(this,S,E).call(this,this.titleProperty)}</span
              >
            </div>

            ${y(c&&!this.toolsAutoExpand,()=>r`
                <button
                  class="transparent square primary-text small action tools ${this.tools.length===1?this.tools[0]:"dots"}"
                  @click=${()=>{const v=this.renderRoot.querySelector("eox-layercontrol-layer-tools");v.open=!v.open}}
                >
                  <i class="small">
                    ${k()[this.tools.length>1?"dots":this.tools[0]]}
                  </i>
                  <!--<span class="tooltip top" style="pointer-events: none">Tools</span>-->
                </button>
              `)}
            ${y(!c&&n,()=>this.tools[0]==="remove"?Ct(this,k()[this.tools[0]]):Mt(this,k()[this.tools[0]],!1))}

            <!-- Input element for layer visibility -->
            <label
              class="${l} ${i} icon primary-text action visibility small"
            >
              <input
                type=${i}
                .checked=${dt(t)}
                @click=${u(this,S,Ot)}
                disabled=${l||R}
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
              <!--<span class="tooltip top" style="pointer-events: none">${t?"Hide":"Show"}</span>-->
            </label>
          </nav>
        `)}

      <!-- Render layer tools -->
      ${y(c&&!h,()=>r`
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
    `}}S=new WeakSet,E=function(t){var o;return(o=this.layer)==null?void 0:o.get(t)},Ot=function(t){Se(t,this)},G=new WeakMap,K=new WeakMap,m(qt,"properties",{layer:{attribute:!1},layerType:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer",qt);var tt,et;class Dt extends x{constructor(){super();p(this,tt,"");p(this,et,`
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
  `);this.group=null,this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var a,l;const t=!!((a=this.group)!=null&&a.get("layerControlExpand")),o=(l=Et(this.group.getLayers()))==null?void 0:l.length;return r`
      <style>
        ${d(this,tt)}
        ${!this.unstyled&&d(this,et)}
      </style>
      ${y(this.group,()=>r`
          <!-- Render the details element with the layer control -->
          <details
            class="max-width"
            open=${t||R}
            data-children-length=${o}
          >
            <summary class="square">
              ${y(o>0,()=>r`
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
    `}}tt=new WeakMap,et=new WeakMap,m(Dt,"properties",{group:{attribute:!1},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-group",Dt);const He=e=>{const{layers:s,idProperty:t,titleProperty:o,renderRoot:a}=e,l=re(()=>{e.requestUpdate(),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))},50),i=()=>l();if(s&&(s.hasListener("change:length")&&(s==null||s.un("change:length",i)),s.on("change:length",i),s)){const n=a.querySelector("ul");me(s,t,o,e),ue(n,s,t,e)}};var st,ot;class Nt extends x{constructor(){super();p(this,st,"");p(this,ot,`
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
  `);this.idProperty="id",this.layers=null,this.map=null,this.tools=void 0,this.titleProperty="title",this.showLayerZoomState=!1,this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}firstUpdated(){He(this)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const t=this.layers?Et(this.layers).reverse():[];return r`
      <style>
        ${d(this,st)}
        ${!this.unstyled&&d(this,ot)}
      </style>
      <ul class="list no-space">
        ${y(this.layers,()=>r`
            ${se(t,o=>o,o=>r`
                <li
                  data-layer="${o.get(this.idProperty)}"
                  data-type="${$t(o,this.map)}"
                  class="square"
                >
                  ${o.getLayers?r`
                          <eox-layercontrol-layer-group
                            .noShadow=${this.noShadow}
                            .group=${o}
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
                        `:r`
                          <eox-layercontrol-layer
                            .noShadow=${this.noShadow}
                            .layer=${o}
                            .layerType=${$t(o,this.map)}
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
    `}}st=new WeakMap,ot=new WeakMap,m(Nt,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-list",Nt);const Le=e=>{const s=e.querySelector("select[name=optional]"),t=s?s.value:null,o=mt(e.layers.getArray(),"layerControlOptional",!0).find(a=>(a.get(e.idProperty)||a.ol_uid)===t);o==null||o.set("layerControlOptional",!1),o==null||o.setVisible(!0),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0})),e.renderRoot.parentNode.querySelectorAll("eox-layercontrol-layer-list").forEach(a=>a.requestUpdate()),e.requestUpdate()};var at,zt;class _t extends x{constructor(){super();p(this,at);this.idProperty="id",this.layers=null,this.titleProperty="title",this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const t=mt(this.layers.getArray(),"layerControlOptional",!0);return r`
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
            ${t.map(o=>{const a=o.get(this.idProperty)||o.ol_uid,l=o.get(this.titleProperty),i=`layer ${o.get(this.idProperty)}`;return r` <option value="${a}">${l||i}</option> `})}
          </select>

          <!-- Label for the dropdown -->
          <label for="optional">Optional layers</label>
        </div>

        <!-- Button to handle adding layers -->
        <button class="small" @click="${u(this,at,zt)}">Add</button>
      </nav>
    `}}at=new WeakSet,zt=function(){Le(this)},m(_t,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},titleProperty:{attribute:"title-property",type:String},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-optional-list",_t);const Ae=(e,s)=>{s.jsonInput=e.target.value,s.requestUpdate()},xt=e=>{const s=JSON.parse(`{"data":${Vt(e.jsonInput)}}`);Array.isArray(s.data)?s.data.forEach(t=>{e.eoxMap.addOrUpdateLayer(t)}):e.eoxMap.addOrUpdateLayer(s.data),e.jsonInput=null,e.requestUpdate()},Ce=(e,s)=>{s.urlInput=e.target.value,s.requestUpdate()};async function Me(e){const s=e.urlInput;if(e.wmsCapabilities=null,e.searchLoad=!0,e.requestUpdate(),!s)return!1;if(ut(s)==="XYZ")return{Name:s};try{const t=await ce(s);e.wmsCapabilities=t}catch{}finally{e.searchLoad=!1,e.requestUpdate()}return!1}const Ee=(e,s)=>{const{Name:t}=e,o=ut(s.urlInput)||"XYZ",a={type:"Tile",properties:{id:t,title:t},source:{type:o,url:s.urlInput,params:{LAYERS:t}}};s.jsonInput=JSON.stringify(a)},Re=(e,s)=>{s.open=e||null,s.urlInput=null,s.jsonInput=null,s.wmsCapabilities=null,s.requestUpdate()};var f,Xt,Jt,ht,Ft,Yt,q,lt;class jt extends x{constructor(){super();p(this,f);m(this,"urlInput",null);m(this,"jsonInput",null);m(this,"open",null);m(this,"searchLoad",!1);m(this,"wmsCapabilities",null);p(this,lt,`
    .eox-add-layer-main .open {
      position: relative;
    }
    .eox-add-layer-main .close {
      display: none;
    }
    .field.small > :is(input, textarea, select) {
      font-size: 0.75rem;
    }
  `);this.eoxMap=null,this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const t={add:r`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>layers-plus</title>
        <path
          d="M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z"
        />
      </svg>`,plus:r`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>plus</title>
        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
      </svg>`,search:r`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>magnify</title>
        <path
          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
        />
      </svg>`},o=this.open?"open":"close",a=this.open==="url",l=this.open==="json",i=!de(this.urlInput)||this.searchLoad?!0:R;return r`
      <style>
        ${d(this,lt)}
      </style>
      <div class="eox-add-layer-main">
        <nav class="eox-add-layer-col">
          <!-- Tabbed interface for URL and JSON -->
          <div
            class="eox-add-layer-tab tabs min left-align ${o}"
          >
            <a
              @click=${()=>u(this,f,q).call(this,"url")}
              class="${a?"active":""}"
            >
              URL
            </a>
            <a
              @click=${()=>u(this,f,q).call(this,"json")}
              class="${l?"active":""}"
            >
              JSON
            </a>
          </div>

          <div class="max"></div>

          <!-- Button to toggle tabs -->
          <button
            class="add-icon transparent square primary-text small"
            @click=${()=>u(this,f,q).call(this,this.open?null:"url")}
          >
            ${this.unstyled?"Add Layer":r`<i class="small primary-text">${t.add}</i>`}
          </button>
        </nav>
        <div class="eox-add ${o}" style="padding: 15px 0">
          ${a?r`
                <nav>
                  <!-- Input field for URL -->
                  <div class="eox-add-layer-col field border small responsive">
                    <input
                      type="text"
                      class="add-url"
                      placeholder="Add URL (WMS/XYZ)"
                      .value="${this.urlInput}"
                      @input=${u(this,f,Xt)}
                    />
                  </div>
                  <!-- Search button for URL -->
                  <button
                    class="search-icon"
                    disabled=${i}
                    @click=${u(this,f,Jt)}
                  >
                    ${this.unstyled?"Search":r`<i class="small">${t.search}</i>`}
                  </button>
                </nav>

                <!-- Display layers for WMS capabilities -->
                ${this.wmsCapabilities?r`<ul class="search-lists">
                      ${this.wmsCapabilities.Capability.Layer.Layer.map(n=>{const c=n.Name;return r`
                            <li class="search-list">
                              ${c}
                              <!-- Button to add layer -->
                              <button
                                class="add-layer-icon icon"
                                @click=${()=>u(this,f,ht).call(this,n)}
                              >
                                ${this.unstyled?"+":""}
                              </button>
                            </li>
                          `})}
                    </ul>`:R}
              `:r`
                <!-- Textarea for JSON input -->
                <div class="field small border no-margin">
                  <textarea
                    class="add-layer-input small"
                    style="overflow-wrap: break-word; font-family: monospace;"
                    placeholder="Please input a valid eox-map layer JSON."
                    @input=${u(this,f,Yt)}
                    .value=${this.jsonInput}
                  ></textarea>
                </div>

                <!-- Button to add JSON layer -->
                <button
                  class="add-layer-icon json-add-layer small square small-margin"
                  style="position: absolute; bottom: 15px; right: 0; z-index: 1;"
                  disabled=${pe(this.jsonInput)?R:!0}
                  @click=${u(this,f,Ft)}
                >
                  ${this.unstyled?"Add JSON":r`<i class="small">${t.plus}</i>`}
                </button>
              `}
        </div>
      </div>
    `}}f=new WeakSet,Xt=function(t){Ce(t,this)},Jt=async function(){const t=await Me(this);t&&u(this,f,ht).call(this,t)},ht=function(t){Ee(t,this),xt(this)},Ft=function(){xt(this)},Yt=function(t){Ae(t,this)},q=function(t){Re(t,this)},lt=new WeakMap,m(jt,"properties",{eoxMap:{attribute:!1,state:!0},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-add-layers",jt);const Be=(e,s)=>{if(s.requestUpdate(),e.target.tagName==="EOX-LAYERCONTROL-LAYER-TOOLS"){const t=s.renderRoot.querySelector("eox-layercontrol-optional-list");t==null||t.requestUpdate()}},wt=e=>{const s=ne(e.for);return s&&s.map!==e.map&&(e.map=s.map),s};le();var A,B,Qt,Gt,it;class Wt extends x{constructor(){super();p(this,B);p(this,A);p(this,it,`
    ${yt}
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
  `);this.for="eox-map",this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=["info","opacity","datetime","config","remove","sort"],this.addExternalLayers=!1,this.unstyled=!1,this.styleOverride="",this.toolsAsList=!1,this.globallyExclusiveLayers=!1,this.toolsAutoExpand=!1,this.customEditorInterfaces=[],this.colormapRegistry=null}firstUpdated(){this.eoxMap=wt(this)}updated(t){t.has("for")&&(this.eoxMap=wt(this))}get eoxMap(){return d(this,A)}set eoxMap(t){const o=d(this,A);V(this,A,t),this.requestUpdate("eoxMap",o)}render(){var a,l,i;const t=(a=this.map)==null?void 0:a.getLayers().getArray(),o=t&&((l=mt(t,"layerControlOptional",!0))==null?void 0:l.length)>0;return r`
      <style>
        ${!this.unstyled&&d(this,it)}
        ${this.styleOverride}
      </style>

      <span class="layerstitle">
        <slot name="layerstitle"
          ><p><strong>Layers</strong></p></slot
        >
      </span>

      <!-- Conditional rendering of add layers component -->
      ${y(this.addExternalLayers&&((i=d(this,A))==null?void 0:i.addOrUpdateLayer),()=>r`
          <eox-layercontrol-add-layers
            .noShadow=${!0}
            .eoxMap=${d(this,A)}
            .unstyled=${this.unstyled}
          ></eox-layercontrol-add-layers>
        `)}

      <!-- Conditional rendering of layer list component -->
      ${y(this.map,()=>r`
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
            @changed=${u(this,B,Qt)}
            @datetime:updated=${n=>Rt(n,this)}
            @layerConfig:change=${u(this,B,Gt)}
          ></eox-layercontrol-layer-list>
        `)}

      <!-- Conditional rendering of optional list component -->
      ${y(o,()=>r`
          <eox-layercontrol-optional-list
            .noShadow=${!0}
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .titleProperty=${this.titleProperty}
            @changed=${()=>this.requestUpdate()}
          ></eox-layercontrol-optional-list>
        `)}
    `}}A=new WeakMap,B=new WeakSet,Qt=function(t){Be(t,this),this.dispatchEvent(new CustomEvent("layerchange",{detail:t.detail}))},Gt=function(t){this.dispatchEvent(new CustomEvent("layerConfig:change",{detail:t.detail}))},it=new WeakMap,m(Wt,"properties",{for:{type:String},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{type:Array},addExternalLayers:{attribute:"add-external-layers",type:Boolean},unstyled:{type:Boolean},styleOverride:{type:String},toolsAsList:{type:Boolean},globallyExclusiveLayers:{attribute:"globally-exclusive-layers",type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},colormapRegistry:{attribute:!1,type:Object},customEditorInterfaces:{type:Array}});customElements.define("eox-layercontrol",Wt);export{Wt as EOxLayerControl,ve as updateVectorLayerStyle};
