var ze=Object.defineProperty;var le=e=>{throw TypeError(e)};var Ve=(e,i,t)=>i in e?ze(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t;var T=(e,i,t)=>Ve(e,typeof i!="symbol"?i+"":i,t),Y=(e,i,t)=>i.has(e)||le("Cannot "+t);var b=(e,i,t)=>(Y(e,i,"read from private field"),t?t.call(e):i.get(e)),v=(e,i,t)=>i.has(e)?le("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(e):i.set(e,t),D=(e,i,t,s)=>(Y(e,i,"write to private field"),s?s.call(e,t):i.set(e,t),t),d=(e,i,t)=>(Y(e,i,"access private method"),t);import{e as Ne,a as Ke,i as $,A as M,b as o}from"./addCommonStyleSheet.CHPKGnGY.js";import{o as K}from"./map.DiiNQ3pp.js";import{n as m}from"./when.BR7zwNJC.js";import{F as se,a as We,c as Ze,i as Oe,b as Ye,u as de,f as ue}from"./index.DvmDNSxK.js";import{d as P}from"./dayjs.min.Ba62AOpW.js";import{_ as W}from"./index.BUIxO2d3.js";import{s as S,u as ae}from"./static.GDDvi8CM.js";import{c as Ge}from"./repeat.C5xsNmeL.js";import{o as _}from"./unsafe-html.S0ZcC4VK.js";import"./toolcool-range-slider.min.BBXDELo7.js";import"./index.2GfG_t-c.js";import"./orient2d.DArCjZZA.js";import"./commonjsHelpers.BosuxZz1.js";import"./directive.CvdRHFdJ.js";import"./directive-helpers.COIb4E4G.js";const Xe=`
:host {
  display: flex;
  box-sizing: border-box;
  height: 100%;
  line-height: 1;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
form#itemfilter {
  height: 100%;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
}
form#itemfilter:not(.inline) {
  height: 100%;
  overflow: hidden;
}
details {
  width: 100%;
}
`;Ke();const re=`
${Ne}
.field {
  margin-block-end: 0;
}
.field.small>:is(input,textarea,select) {
  font-size: 0.75rem;
}

:host, :root {
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
  --item-select-color: var(--surface-variant);
  --inline-bg-color: color-mix(
    in srgb,
    var(--secondary-color) 10%,
    transparent
  );
  --border-color: color-mix(
    in srgb,
    #000000 20%,
    transparent
  );
  --background-color: var(--eox-background-color, transparent);
  --padding: 0.5rem;
  --padding-vertical: 0.25rem;
  --list-padding: 2rem;
  --text-transform: capitalize;
  --form-flex-direction: column;
  --filter-display: block;
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
}
form#itemfilter {
  flex-direction: var(--form-flex-direction);
  margin-top: 0;
}
eox-itemfilter-container {
  min-width: 200px;
  flex-grow: 0;
  flex-shrink: 0;
  overflow: hidden;
  height: 100%;
}
eox-itemfilter-results {
  flex-grow: 1;
  overflow: hidden;
  max-height: 100%;
  display: flex;
  flex-direction: column;
}
eox-itemfilter-results button.chip {
  pointer-events: none;
}
.list li {
  padding: 0 var(--padding) !important;
}
.list.no-padding > li {
  padding: 0 !important;
}
li label {
  display: flex;
  align-items: center;
}
.title {
  text-transform: var(--text-transform);
}
.title.highlight-enabled {
  text-transform: inherit;
}
.subtitle {
  opacity: .7;
}
.image {
  object-fit: cover;
  overflow: hidden;
}
.title-container {
  display: flex;
  flex-direction: column;
}
eox-itemfilter-expandcontainer {
  max-height: 300px;
  width: 100%;
}
eox-itemfilter-expandcontainer > [data-type=filter] {
  display: block;
  height: calc(100% - 32px);
  overflow-y: auto;
  overflow-x: hidden;
  max-width: 100%;
}
[data-type=filter] .title,
details summary {
  text-transform: var(--text-transform);
}
details summary nav {
  height: 32px;
}
details > summary {
  min-block-size: 0rem;
  padding: 0 var(--padding);
  user-select: none;
}
details > summary i {
  transition: transform 0.1s ease-in-out;
}
details[open] > summary i {
  transform: rotate(90deg);
}
ul.multiselect.list > li,
ul.select.list > li,
details > div > ul#results.list > li {
  padding-left: var(--list-padding) !important;
}
section:not(section:last-of-type) {
  margin-bottom: 1rem;
}
#section-results {
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 0;
}
#container-results {
  border-radius: none;
}
.no-results {
  padding-left: var(--padding);
  padding-right: var(--padding);
}
ul#results li:not(:hover) .result-action {
  display: none;
}
eox-layout {
  padding: var(--padding-vertical) var(--padding);
  gap: var(--card-gap, 16px);
  --column-width: var(--card-width, 300px);
  --row-height: var(--card-height, 200px);
}
eox-layout-item {
  position: relative;
  border-radius: var(--card-border-radius, 8px);
  cursor: pointer;
  transition: var(--card-transition);
  box-shadow: var(--card-box-shadow);
}
eox-layout-item:hover {
  transform: var(--card-hover-transform);
}
eox-layout-item > span {
  display: block;
  height: 100%;
}
eox-layout-item .image {
  width: 100%;
  height: 100%;
  transition: filter .3s ease-in-out;
  margin: 0;
}
eox-layout-item:hover .image {
  filter: brightness(.5);
}
eox-layout-item nav {
  height: 100%;
}
eox-layout-item .title-container {
  position: absolute;
  bottom: 0;
  color: white;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85),
    transparent
  );
  padding-top: 25px;
}
eox-layout-item .title {
  font-weight: bold;
  font-family: var(--card-title-font);
}
eox-layout-item .result-action {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #ffffffbb;
  padding: 8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
}
ul#results eox-layout-item.highlighted .result-action > * {
  filter: none;
}
section {
  position: relative;
  background-color: var(--background-color);
}
nav.title-nav {
  padding-left: var(--padding);
  padding-right: var(--padding);
}
eox-itemfilter-range,
tc-range-slider {
  align-items: center;
  display: block;
}
tc-range-slider {
  width: calc(100% - 32px);
  margin-left: 8px;
  margin-right: 8px;
  --width: 100%;
}
.range-before,
.range-after {
  font-size: small;
}
.range-before,
.range-after {
  margin: 1rem 0px;
}

.inline-content {
  max-height: 300px;
  overflow-y: auto;
  margin-top: 4px;
  padding: 8px;
}
.inline-container-wrapper {
  width: 100%;
  position: relative;
  height: var(--inline-container-height, auto);
}
.inline-container {
  position: relative;
  align-items: center;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  flex: 1;
  justify-content: space-between;
  cursor: text;
  transition: all 0.2s ease-in-out;
  display: flex;
  inline-size: 100%;
  block-size: 100%;
  overflow-x: auto;
  overflow-y: hidden;
}
[popover] {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  border: none;
}
.input-container {
  display: flex;
  flex: 1;
  align-items: center;
}
.input-container input,
.input-container input:focus {
  height: 100%;
  border: none;
  outline: none;
  border: 0;
  min-width: 25%;
}
.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 1px;
  top: 5px;
  height: calc(100% - 10px);
  width: 34px;
  background: white;
}
button.icon {
  color: #004170;
  height: 24px;
  font-size: large;
  width: unset;
}
-container-results::-webkit-scrollbar,
.inline-container::-webkit-scrollbar,
.inline-content::-webkit-scrollbar,
form#itemfilter > div::-webkit-scrollbar {
  inline-size: 0.4rem;
  block-size: 0.4rem;
}
-container-results::-webkit-scrollbar-thumb,
.inline-container::-webkit-scrollbar-thumb,
.inline-content::-webkit-scrollbar-thumb,
form#itemfilter > div::-webkit-scrollbar-thumb {
  background: lightgrey;
  border-radius: 1rem;
  cursor: default;
}
.inline-container:is(:hover,:focus)::-webkit-scrollbar-thumb,
.inline-content:is(:hover,:focus)::-webkit-scrollbar-thumb,
form#itemfilter > div:is(:hover,:focus)::-webkit-scrollbar-thumb {
  background: var(--outline);
}
form#itemfilter > div::-webkit-scrollbar-thumb {
  background: transparent; 
}
.hidden {
  height: 0;
  padding: 0;
  border: none;
}
.hidden:hover {
  border: none;
}
.autocomplete-container,
.text-container {
  position: relative;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  cursor: text;
}
.autocomplete-container-wrapper,
.text-container-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.autocomplete-container-wrapper::-webkit-scrollbar {
  display: none;
}
.chip-wrapper {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.chip-wrapper::-webkit-scrollbar {
  display: none;
  width: 0;
  background: transparent;
}
.autocomplete-input,
.text-input {
  flex: 1;
  border: 1px solid var(--border-color);
  outline: none;
  box-sizing: border-box;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  min-width: 150px;
}
input[type="text"].text-input,
input[type="text"].autocomplete-input {
  padding: 9px 6px !important;
  border-radius: 4px;
}
.text-input:invalid {
  border: 1px solid red;
}
.selected-items {
  display: flex;
  flex-wrap: nowrap;
  gap: 4px;
}
.select li,
.multiselect li,
eox-itemfilter-results li {
  border-radius: .5rem !important;
  display: flex;
  justify-content: space-between;
  min-block-size: 32px !important;
}
.select li:hover,
.multiselect li:hover,
eox-itemfilter-results li:hover,
details summary:hover {
  background: var(--item-hover-color);
}
eox-itemfilter-results li.highlighted {
  background: var(--item-select-color);
}
mark.highlight {
  all: inherit;
  display: inline;
  background: yellow;
  color: black;
}
.selected-item span {
  margin-right: 8px;
}
.selected-item button {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
}
.multiselect-container,
.select-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.multiselect-container label,
.select-container label {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.multiselect-container input,
.select-container input {
  margin-right: 8px;
  max-width: 170px;
}
.select-overflow {
  max-height: calc(32px * var(--select-filter-max-items));
  overflow-y: auto;
}
.chip-title strong {
  font-weight: 500;
}
.chip-wrapper {
  max-width: 100%;
  overflow-x: scroll;
}
.chip-container {
  display: flex;
  flex: 0;
  align-items: center;
  height: var(--inline-container-height, auto);
}
.chip {
  white-space: nowrap;
  max-height: calc(var(--inline-container-height, auto) - .5rem);
}
.input-container.field {
  min-width: 10rem;
}
.input-container.dirty-filter-input {
  margin-left: 25px;
}
.error-validation {
  position: relative;
  color: #ba1a1a !important;
  font-size: x-small;
}
@media (prefers-color-scheme: dark) {
  .error-validation {
    color: #ffb4ab !important;
  }
}
input {
  background-color: var(--background-color);
}
`;var U,he;class Je extends ${constructor(){super();v(this,U);this.filterObject={},this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}render(){return o`
      <style>
        ${!this.unstyled&&re}
      </style>

      ${m(this.filterObject.featured,()=>o`<slot name="filter"></slot>`,()=>o`<details
            @toggle="${d(this,U,he)}"
            class="details-filter max-width"
            ?open=${this.filterObject.expanded||M}
          >
            <summary class="square">
              <nav class="responsive tiny-space">
                <i class="small">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>chevron-right</title>
                    <path
                      d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                    />
                  </svg>
                </i>
                <span
                  class="title max"
                  style="${!this.filterObject.title&&"text-transform: var(--text-transform)"}"
                >
                  ${this.filterObject.title||this.filterObject.key||"Filter"}
                </span>
                <slot name="reset-button"></slot>
              </nav>
            </summary>
            <div>
              <slot name="filter"></slot>
            </div>
          </details>`)}
    `}}U=new WeakSet,he=function(t){this.dispatchEvent(new CustomEvent("details-toggled",{detail:t,bubbles:!0,composed:!0}))};customElements.define("eox-itemfilter-expandcontainer",Je);function pe(e,i){const t=new se(i.filterProperties,{keys:["title"]});if(!(e.target instanceof HTMLInputElement))return;const s=e.target.value,n=t.search(s).map(l=>l.item.key||l.item.keys.join("|"));Object.keys(i.filters).forEach(l=>{i.querySelector(`[data-details="${l}"]`).parentElement.style.display=n.includes(l)||!s?"":"none"})}function Qe(e,i){if(!(e.target instanceof HTMLElement))return;const t=e.target.getAttribute("data-close").replace("|","-");i.querySelector(`#filter-${t}`).reset(),i.dispatchEvent(new CustomEvent("filter")),i.requestUpdate()}function Ee(e){const i=e.renderRoot.querySelector(".inline-container-wrapper"),t=e.renderRoot.querySelector("[popover]");return We(i,t,()=>{t.matches(":popover-open")&&Ze(i,t,{strategy:"fixed"}).then(({x:r,y:n})=>{Object.assign(t.style,{left:`${r}px`,top:`${n}px`,width:`${i.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function fe(e){e.renderRoot.querySelector("#eox-itemfilter-input-search").value="",pe({target:{value:""}},e)}function Ie(e,i){i.inlineMode&&e.stopPropagation()}function Fe(e){e.inlineMode&&(e.showDropdown=!0)}function et(e,i){i.inlineMode&&(e.stopPropagation(),i.showDropdown=!0)}function tt(e,i){i.inlineMode&&e.key==="Escape"&&i.showDropdown&&(fe(i),i.showDropdown=!1)}function it(e,i){i.inlineMode&&e.target instanceof HTMLElement&&e.target.tagName!=="DROPDOWN-FORM"&&e.target.tagName!=="EOX-ITEMFILTER"&&i.showDropdown&&(fe(i),i.showDropdown=!1)}const st=(e,i)=>i?Ye(e,i):!0,rt=(e,i)=>i?Oe(e,i):!0;function nt(e,i="highlight",t="title"){const s=(r,n=[])=>{let l="",a=0,u=0;return n.forEach((c,h)=>{const y=c[1]+1;h&&u>c[0]||(u=c[1],l+=[r.substring(a,c[0]),`<mark class="${i}">`,r.substring(c[0],y),"</mark>"].join(""),a=y)}),l+=r.substring(a),l};return e.filter(({matches:r})=>r&&r.length).map(({item:r,matches:n})=>{const l={...r};return n.forEach(a=>{if(a.key!==t)return;const u=s(ut(a.value),ht(a.indices));l.highlightedText=u}),l})}let ge;const lt=(e,i)=>{ge=new se(e,{threshold:.4,distance:50,ignoreLocation:!0,includeMatches:!0,useExtendedSearch:!0,...i})},at=async(e,i,t)=>{const s=Object.entries(i).filter(([,a])=>a.type==="text"||a.type==="select"||a.type==="multiselect").reduce((a,[u,c])=>{const h="$or",y=[],g=(f,R)=>{const O={};c.type==="text"?O[f]=`${R}`:O[u]=`="${f}"`,y.push(O)};return Object.entries(c.state).filter(([,f])=>f).forEach(([f,R])=>g(f,R)),y.length>0&&a.push({[h]:y}),a},[]);let r;if(!(s.length>0)&&t.matchAllWhenEmpty!==!1)r=e;else{const a={$and:[...s]},u=ge.search(a);r=t.enableHighlighting?nt(u,"highlight",t.titleProperty):u.map(c=>c.item)}const n=Object.entries(i).filter(([,a])=>a.type==="range").reduce((a,[u,c])=>(a[u]={min:c.state.min,max:c.state.max,format:c.format},a),{});if(Object.keys(n).length>0){const a=[];for(let u=0;u<r.length;u++){const c={};for(const[h,y]of Object.entries(n)){const g=R=>y.format==="date"?P(R).unix():R,f=w(h,r[u]);f?Array.isArray(f)?c[h]=n[h].min<=g(f[1])&&g(f[0])<=n[h].max:g(f)>=n[h].min&&g(f)<=n[h].max?c[h]=!0:c[h]=!1:c[h]=!0}Object.values(c).every(h=>!!h)&&a.push(r[u])}r=[...a]}const l=Object.entries(i).filter(([,a])=>a.type==="spatial").reduce((a,[u,c])=>(a[u]={geometry:c.state.geometry,mode:c.state.mode},a),{});if(Object.values(l).map(a=>a.geometry).filter(a=>!!a).length>0){const a=[];for(let u=0;u<r.length;u++){const c={};for(const h of Object.keys(l)){const y=w(h,r[u]),g=l[h].mode||"within";y&&(g==="within"?rt(y,l[h].geometry):st(y,l[h].geometry))?c[h]=!0:c[h]=!1}Object.values(c).every(h=>!!h)&&a.push(r[u])}r=[...a]}return r};function ot(e,i){return[{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}},{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...e&&{format:"GeoJSON"},...e&&{url:i}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]}]}function Z(e){if(!e.dirty)return null;switch(e.type){case"multiselect":for(const t in e.state)e.state.hasOwnProperty(t)&&(e.state[t]=!1);break;case"range":e.state.min=e.min,e.state.max=e.max;break;case"select":for(const t in e.state)e.state.hasOwnProperty(t)&&(e.state[t]=!1);break;case"spatial":e.state.geometry=void 0;break;case"text":e.keys.forEach(t=>{e.state[t]=void 0});break}return delete e.stringifiedState,delete e.dirty,e}function oe(e,i){return e*2+i}function ct(e){return Object.keys(e).map(i=>({title:o`${e[i].title||e[i].key}:
      ${e[i].stringifiedState}`,key:i})).filter(i=>e[i.key].dirty)}function G(e){return Object.values(e).map(i=>i.dirty).filter(i=>i).length>0}async function dt(e,i,t){const s=t.externalFilter(e,i),r=typeof s=="string"||s instanceof String?s:s.url,n=typeof s=="object"&&"fetchFn"in s?await s.fetchFn(r):await fetch(r).then(async l=>await l.json());return s.key?w(s.key,n):n}function me(e,i,t){let s;if(e.detail?s=e.detail.target:s=e.target,s!=null&&s.classList.contains("details-filter")){if(!s.open||i!=null&&i.expandMultipleFilters)return;t.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(r=>{const n=r.shadowRoot.querySelector(".details-filter");n&&n!==s&&n.removeAttribute("open")})}else{if(!(s!=null&&s.open)||i!=null&&i.expandMultipleResults)return;t.querySelectorAll("details").forEach(r=>{r!==s&&r.removeAttribute("open")})}}function w(e,i){return typeof e=="function"?e(i):e!=null&&e.includes(".")?e.split(".").reduce((t,s)=>t&&t[s],i):i[e]}function ut(e){return e.split(" ").map(i=>i.charAt(0).toUpperCase()+i.slice(1)).join(" ")}function ht(e,{mergeAdjacent:i=!1}={}){if(!Array.isArray(e))return[];const t=e.map(([r,n])=>r<=n?[r,n]:[n,r]).sort((r,n)=>r[0]-n[0]||r[1]-n[1]),s=[];for(const[r,n]of t){if(s.length===0){s.push([r,n]);continue}const l=s[s.length-1];(i?r<=l[1]+1:r<=l[1])?n>l[1]&&(l[1]=n):s.push([r,n])}return s}var p,ye,X,J,be,Q,E,ve,I,we,xe;class pt extends ${constructor(){super();v(this,p);this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=d(this,p,be).bind(this),this._handleKeyDown=d(this,p,Q).bind(this)}static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}set showDropdown(t){this.renderRoot.querySelector("[popover]").togglePopover(t)}get showDropdown(){var t;return(t=this.renderRoot.querySelector("[popover]"))==null?void 0:t.matches(":popover-open")}connectedCallback(){super.connectedCallback(),this.inlineMode&&d(this,p,X).call(this)}disconnectedCallback(){this.inlineMode&&d(this,p,J).call(this),super.disconnectedCallback()}_overlayCleanup(){}updateInline(){this.inlineMode&&this.requestUpdate()}updated(t){t.has("inlineMode")&&(this.inlineMode?d(this,p,X).call(this):d(this,p,J).call(this))}render(){return o`
      <style>
        ${!this.unstyled&&re}
      </style>
      ${this.inlineMode?o`
            <div
              class="inline-container-wrapper"
              @click="${d(this,p,E)}"
            >
              <div class="inline-container square border" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips
                      .items=${ct(this.filters)}
                      .controller=${{remove:t=>d(this,p,we).call(this,t)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${m(G(this.filters),()=>o`
                      <button
                        class="chip-close circle transparent small no-margin"
                        @click=${()=>this.dispatchEvent(new CustomEvent("reset"))}
                      >
                        ${this.unstyled?"x":o`
                              <i class="small">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <title>close</title>
                                  <path
                                    d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                                  />
                                </svg>
                              </i>
                            `}
                      </button>
                    `)}
                </div>
                <div
                  class="input-container field no-margin ${G(this.filters)?"dirty-filter-input":""}"
                >
                  <input
                    autocomplete="off"
                    id="eox-itemfilter-input-search"
                    type="text"
                    @click="${d(this,p,E)}"
                    @focus="${d(this,p,ve)}"
                    @input="${d(this,p,xe)}"
                    placeholder="Search and add filter"
                    aria-haspopup="true"
                    aria-expanded="${this.showDropdown}"
                  />
                </div>
              </div>
              <div
                popover="manual"
                class="square surface-container-lowest small-elevate"
              >
                <div
                  class="inline-content"
                  slot="content"
                  @keydown="${d(this,p,Q)}"
                  @click="${d(this,p,I)}"
                  @focus="${d(this,p,I)}"
                >
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `:o`<slot name="section"></slot>`}
    `}}p=new WeakSet,ye=function(){setTimeout(()=>this._overlayCleanup=Ee(this))},X=function(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),d(this,p,ye).call(this)},J=function(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()},be=function(t){it(t,this)},Q=function(t){tt(t,this)},E=function(t){et(t,this)},ve=function(){Fe(this)},I=function(t){Ie(t,this)},we=function(t){Qe(t,this)},xe=function(t){pe(t,this)};customElements.define("eox-itemfilter-container",pt);function ft(e){const i=e.renderRoot.querySelector("input[type='text']");i.value="",Z(e.filterObject),e.requestUpdate()}function gt(e){const i=e.renderRoot.querySelector("input[type='text']");e.isValid=i.checkValidity(),e.filterObject.keys.forEach(t=>{e.filterObject.state[t]=i.value}),e.filterObject.dirty=!0,e.filterObject.stringifiedState=i.value,e.dispatchEvent(new CustomEvent("filter")),i.value===""&&e.reset()}const F="ddd, D MMM YYYY HH:mm:ss";function mt(e){if(e.filterObject=Z(e.filterObject),e.filterObject){const i=e.querySelector("tc-range-slider"),t=e.filterObject.min,s=e.filterObject.max;i.value1!==t&&(i.value1=t),i.value2!==s&&(i.value2=s)}e.requestUpdate()}function yt(e,i){const[t,s]=e.detail.values;(t!==i.filterObject.state.min||s!==i.filterObject.state.max)&&([i.filterObject.state.min,i.filterObject.state.max]=[t,s],i.filterObject.dirty=!0),i.filterObject.dirty&&(i.filterObject.stringifiedState=i.filterObject.format==="date"?`${P.unix(t).format(F)} - ${P.unix(s).format(F)}`:`${t} - ${s}`),i.dispatchEvent(new CustomEvent("filter")),t===i.filterObject.min&&s===i.filterObject.max?i.reset():i.requestUpdate()}function bt(e,i,t){const s=t.filterObject.format==="date",r=t.filterObject.state[e],n=s?P.unix(r).format(F):r;return o`<div class="range-${i}">${n}</div>`}function vt(e){wt(-1,e),Z(e.filterObject),e.requestUpdate()}function wt(e,i){i.selectedItems=[],ne(i),ke(i)}function $e(e,i){const t=i.selectedItems.indexOf(e);t>=0?i.selectedItems=i.selectedItems.filter((s,r)=>r!==t):i.type==="multiselect"?i.selectedItems=[...i.selectedItems,e]:(i.selectedItems=[e],i.showSuggestions=!1),ne(i),ke(i)}function xt(e,i){e.target instanceof HTMLInputElement&&(i.query=e.target.value,i.showSuggestions=!0)}function $t(e,i){switch(e.key){case"ArrowDown":i.highlightedIndex=Math.min(i.highlightedIndex+1,i.filteredSuggestions.length-1);break;case"ArrowUp":i.highlightedIndex=Math.max(i.highlightedIndex-1,0);break;case"Enter":i.highlightedIndex>=0&&$e(i.filteredSuggestions[i.highlightedIndex],i);break;case"Escape":i.showSuggestions=!1;break}}function kt(e,i){(e.has("suggestions")||e.has("query"))&&ne(i)}function Mt(e,i){var s;const t=((s=e.filterObject)==null?void 0:s.sort)||((r,n)=>r.toString().localeCompare(n.toString(),void 0,{numeric:!0}));return i.sort(t).map(r=>r)}function ne(e){var s,r,n;const i=(((s=e.filterObject)==null?void 0:s.filterKeys)||e.suggestions).map(l=>`${l}`);let t=i;e.query&&(t=new se(i,{threshold:.4}).search(e.query).map(a=>a.item)),e.filteredSuggestions=(r=e.filterObject)!=null&&r.filterKeys?t:Mt(e,t),(n=e.filterObject)!=null&&n.filterKeys&&(e.filterObject.state=i.reduce((l,a)=>(a in l||(l[a]=void 0),l),e.filterObject.state)),e.highlightedIndex=-1}function ke(e){Object.keys(e.filterObject.state).forEach(i=>{e.filterObject.state[i]=e.selectedItems.includes(i)}),e.filterObject.stringifiedState=Object.keys(e.filterObject.state).filter(i=>e.filterObject.state[i]).join(", ")||"",e.filterObject.dirty=e.filterObject.stringifiedState.length>0,e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}function Lt(e){Z(e.filterObject),e.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),e.requestUpdate()}function jt(e){e.renderRoot.querySelector("#eox-map").innerHTML="",Me(e)}function At(e,i){i.filterObject.state.mode=e;const t=new CustomEvent("filter",{detail:{[i.filterObject.key]:{}}});i.dispatchEvent(t)}function Me(e){const i=e.renderRoot.querySelector("#eox-map");i.innerHTML===""&&(i.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const t=e.geometry&&Rt(e.geometry),s=ot(e.geometry,t);e.eoxMap=e.renderRoot.querySelector("eox-map"),setTimeout(()=>{e.eoxMap.layers=s;const r=n=>{const l=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:n.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});e.dispatchEvent(l)};e.eoxMap.interactions.drawInteraction.on("drawend",n=>{r(n.feature),e.eoxMap.removeInteraction("drawInteraction")}),e.eoxMap.interactions.drawInteraction_modify.on("modifyend",n=>{r(n.features.getArray()[0])})},1e3)}function Rt(e){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:e}]}))}`}var H,z;class St extends ${constructor(){super();v(this,H,()=>{gt(this)});v(this,z,t=>{t.key==="Enter"&&t.target.value&&this.results&&this.results.length===1&&(this.dispatchEvent(new CustomEvent("result",{detail:this.results[0]})),t.target.value="",b(this,H).call(this))});T(this,"debouncedInputHandler",W(b(this,H),500,{leading:!0}));this.filterObject={},this.results=null,this.unstyled=!1,this.tabIndex=0,this.isValid=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},results:{state:!0,type:Array},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}reset(){ft(this)}createRenderRoot(){return this}render(){return m(this.filterObject,()=>{var t;return o`
        <style></style>
        <div class="text-container">
          <div
            class="text-container-wrapper field small"
            style="margin-left: var(--list-padding)"
          >
            <input
              type="text"
              placeholder=${this.filterObject.placeholder}
              data-cy="search"
              class="text-input"
              part="input-search"
              value="${Object.values(this.filterObject.state)[0]}"
              tabindex=${this.tabIndex}
              pattern="${((t=this.filterObject.validation)==null?void 0:t.pattern)||".*"}"
              @input="${this.debouncedInputHandler}"
              @click=${s=>s.stopPropagation()}
              @keydown=${b(this,z)}
            />
          </div>
        </div>
        <small class="error-validation" style="margin-left: var(--list-padding)"
          >${this.filterObject.validation&&this.isValid===!1?this.filterObject.validation.message:""}</small
        >
      `})}}H=new WeakMap,z=new WeakMap;customElements.define("eox-itemfilter-text",St);function Ct(e,i,t){if(!i||typeof i=="string"&&i.trim()==="")return[];const s=t.config.aggregateResults;return i==="No category"?e.filter(r=>{const n=r[s];return Array.isArray(n)?n.filter(Boolean).length===0:!n}):e.filter(r=>{const n=r[s];if(Array.isArray(n)){if(n.filter(Boolean).length===0)return!1}else if(!n)return!1;let l;return t.filters[s]&&(l=Object.keys(t.filters[s]).filter(u=>t.filters[s].state[u])),(l!=null&&l.length?l.includes(i):!0)&&Array.isArray(n)?n.includes(i):n===i})}function qt(e,i){return o`
    <details
      class="details-results"
      @toggle=${i.handleAccordion}
      ?open=${i.config.expandResults||M}
    >
      <summary class="square">
        <nav class="responsive tiny-space">
          <i class="small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>chevron-right</title>
              <path
                d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
              />
            </svg>
          </i>
          <span class="title"> ${e} </span>
          <button
            class="chip"
            style="--_size: 1rem; padding: 0.7rem; font-size: small"
          >
            ${i.aggregateResults(i.results,e).length}
          </button>
        </nav>
      </summary>
      <div>
        ${Le(i,e)}
      </div>
    </details>
  `}function Le(e,i){const t=e.results,s=i?e.aggregateResults(t,i):t,r=e.config,n=l=>{var a;return((a=e.selectedResult)==null?void 0:a[r.idProperty])===l[r.idProperty]?"highlighted":M};return ae`
    ${e.resultType==="cards"?S("<eox-layout fill-grid>"):S('<ul id="results" class="list no-space" part="results">')}
      ${Ge(s,l=>l.id,l=>ae`
        ${e.resultType==="cards"?S("<eox-layout-item"):S("<li")}
            class="${n(l)}"
            @click=${()=>{e.selectedResult===l?e.selectedResult=null:e.selectedResult=l,e.dispatchEvent(new CustomEvent("result",{detail:e.selectedResult}))}}
            @mouseenter=${()=>{e.dispatchEvent(new CustomEvent("mouseenter:result",{detail:l}))}}
            @mouseleave=${()=>{e.dispatchEvent(new CustomEvent("mouseleave:result",{detail:l}))}}
          >
            <nav id="${l.id}" class="responsive tiny-space">
              ${m(r.subTitleProperty||r.imageProperty,()=>o`
                  ${m(e.resultType==="cards",()=>w(r.imageProperty,l)?o`
                            <img
                              loading="lazy"
                              fetchpriority="low"
                              class="image"
                              src="${w(r.imageProperty,l)}"
                            />
                          `:o`
                            <svg
                              class="image"
                              width="100%"
                              height="100%"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="100%"
                                height="100%"
                                fill="var(--primary-color)"
                              />
                            </svg>
                          `,()=>o`
                      <i class="small">
                        ${w(r.imageProperty,l)?o`
                              <img
                                loading="lazy"
                                fetchpriority="low"
                                class="image"
                                src="${w(r.imageProperty,l)}"
                              />
                            `:o`
                              <svg
                                class="image"
                                width="100%"
                                height="100%"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  width="100%"
                                  height="100%"
                                  fill="var(--primary-color)"
                                />
                              </svg>
                            `}
                      </i>
                    `)}
                  <div class="title-container small-line max truncate">
                    <span
                      class="title truncate ${l.highlightedText?"highlight-enabled":""}"
                      >${_(l.highlightedText||w(r.titleProperty,l).toString())}</span
                    >
                    ${m(!!w(r.subTitleProperty,l),()=>o`
                        <small class="subtitle no-line truncate"
                          >${_(w(r.subTitleProperty,l).toString())}</small
                        >
                      `)}
                  </div>
                `,()=>o`
                  <div class="small-line max truncate">
                    <span
                      class="title truncate ${l.highlightedText?"highlight-enabled":""}"
                      >${_(l.highlightedText||l[r.titleProperty])}</span
                    >
                  </div>
                `)}
              ${m(e.enableResultAction,()=>o`
                  <button
                    class="result-action square transparent primary-text small"
                    @click=${a=>{a.stopPropagation(),e.dispatchEvent(new CustomEvent("click:result-action",{detail:l}))}}
                  >
                    <icon class="small"
                      >${_(e.resultActionIcon)}</icon
                    >
                  </button>
                `)}
            </nav>
          </li>
        `)}
    ${e.resultType==="cards"?S("</eox-layout>"):S("</ul>")}
  `}var k,ee,je,Ae;class Tt extends ${constructor(){super();v(this,k);this.config=null,this.results=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list",this.resultActionIcon=void 0}static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Array},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String},resultActionIcon:{attribute:!1,type:String}}}aggregateResults(t,s){return Ct(t,s,this)}createRenderRoot(){return this}handleAccordion(t){me(t,this.config,this)}render(){return o`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${m(this.results.length<1,()=>o`<small class="no-results">No matching items</small>`,()=>M)}
          ${m(this.config.aggregateResults,()=>K(d(this,k,Ae).call(this),t=>o`${m(this.aggregateResults(this.results,t).length===1&&this.config.autoSpreadSingle,()=>o`<div style="margin-left: -8px">
                        ${d(this,k,ee).call(this,t)}
                      </div>`,()=>d(this,k,je).call(this,t))}`),()=>d(this,k,ee).call(this))}
        </div>
      </section>
    `}}k=new WeakSet,ee=function(t){return Le(this,t)},je=function(t){return qt(t,this)},Ae=function(){const t=this.resultAggregation.filter(r=>this.aggregateResults(this.results,r).length);return this.aggregateResults(this.results,"No category").length>0&&t.push("No category"),t};customElements.define("eox-itemfilter-results",Tt);var L,Se,Ce,qe;class Re extends ${constructor(){super();v(this,L);T(this,"debouncedInputHandler",W(d(this,L,qe),500,{leading:!0}));this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(t){kt(t,this)}reset(){vt(this)}firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(t=>this.filterObject.state[t]?t:null).filter(t=>!!t),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}createRenderRoot(){return this}render(){const t=this.type.includes("multi")?"checkbox":"radio",s=this.filteredSuggestions.length>5?"select-overflow scroll":M;return o`
      <style>
        :host,
        :root {
          --select-filter-max-items: 5;
        }
      </style>
      ${m((this.filterObject.filterKeys||this.suggestions).length>=10,()=>o`<div class="autocomplete-container">
            <div
              class="autocomplete-container-wrapper field small no-round"
              style="margin-left: var(--list-padding)"
            >
              <input
                autocomplete="off"
                tabindex=${this.tabIndex}
                class="autocomplete-input"
                type="text"
                .value=${this.query}
                placeholder="${this.filterObject.placeholder||"Find..."}"
                @input=${d(this,L,Se)}
                @keydown=${d(this,L,Ce)}
                @blur=${()=>this.showSuggestions=!1}
                @focus=${()=>this.showSuggestions=!0}
              />
            </div>
          </div>`)}
      <div class="select-container ${s}">
        <ul class="${this.type} list no-space">
          ${this.filteredSuggestions.map(r=>o`
              <li
                data-identifier="${r.toString().toLowerCase()}"
                data-title="${r}"
              >
                <label class="${t} small max">
                  <input
                    type="${t}"
                    name=${r}
                    .checked=${this.selectedItems.includes(r)}
                    @change=${()=>this.debouncedInputHandler(r)}
                    @keydown=${n=>{n.key===" "&&this.inlineMode&&this.debouncedInputHandler(r)}}
                    tabindex=${this.tabIndex+1}
                  />
                  <span class="title small-line">${r}</span>
                </label>
              </li>
            `)}
        </ul>
      </div>
    `}}L=new WeakSet,Se=function(t){xt(t,this)},Ce=function(t){$t(t,this)},qe=function(t){$e(t,this)},T(Re,"properties",{filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}});customElements.define("eox-itemfilter-select",Re);var j,Pe,te;class Te extends ${constructor(){super();v(this,j);this.filterObject={},this.tabIndex=0,this.inputHandler=d(this,j,Pe).bind(this),this.debouncedInputHandler=W(this.inputHandler,500,{leading:!1})}reset(){mt(this)}createRenderRoot(){return this}render(){return m(this.filterObject,()=>o`
        <div
          style="margin-left: var(--list-padding); display: flex; gap: .5rem; align-items: center;"
        >
          ${d(this,j,te).call(this,"min","before")}
          <tc-range-slider
            min="${this.filterObject.min}"
            max="${this.filterObject.max}"
            value1="${this.filterObject.state.min||this.filterObject.min}"
            value2="${this.filterObject.state.max||this.filterObject.max}"
            step="${this.filterObject.step||1}"
            @change=${this.debouncedInputHandler}
          ></tc-range-slider>
          ${d(this,j,te).call(this,"max","after")}
        </div>
      `)}}j=new WeakSet,Pe=function(t){yt(t,this)},te=function(t,s){return bt(t,s,this)},T(Te,"properties",{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number}});customElements.define("eox-itemfilter-range",Te);var V,He;class Pt extends ${constructor(){super();v(this,V);this.filterObject={},this.tabIndex=0}static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}reset(){Lt(this)}createRenderRoot(){return this}render(){return m(this.filterObject,()=>{var t;return o`
        <div style="margin-left: var(--list-padding)">
          <nav class="vertical-margin small-margin wrap">
            ${K(["intersects","within"],s=>o`
                <label class="radio small small-text">
                  <input
                    tabindex=${this.tabIndex}
                    type="radio"
                    name="mode"
                    .checked="${(this.filterObject.state.mode||"")===s||M}"
                    value="${s}"
                    @click=${()=>d(this,V,He).call(this,s)}
                  />
                  <span>${s} filter geometry</span>
                </label>
              `)}
          </nav>
          <eox-itemfilter-spatial-filter
            exportparts="map: spatial-filter-map"
            .geometry="${(t=this.filterObject.state)==null?void 0:t.geometry}"
            @filter="${s=>{this.filterObject.state.geometry=s.detail.geometry,this.filterObject.dirty=!0,this.filterObject.stringifiedState="Polygon",this.dispatchEvent(new CustomEvent("filter"))}}"
          ></eox-itemfilter-spatial>
        </div>
      `})}}V=new WeakSet,He=function(t){At(t,this)};customElements.define("eox-itemfilter-spatial",Pt);var N,Be;class Ht extends ${constructor(){super();v(this,N);this.geometry=null,this.eoxMap=null}static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}firstUpdated(){d(this,N,Be).call(this)}reset(){jt(this)}render(){return o`<div id="eox-map"></div>`}}N=new WeakSet,Be=function(){Me(this)};customElements.define("eox-itemfilter-spatial-filter",Ht);function Bt(e,i){i.renderRoot.querySelectorAll(".chip").forEach(t=>{t.classList.remove("highlighted")}),e.target instanceof HTMLElement&&e.target.classList.add("highlighted"),i.requestUpdate()}function Dt(e,i){const{code:t,target:s}=e;s instanceof HTMLElement&&s.id!=="eox-itemfilter-input-search"||i.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(t)||(t==="Space"&&e.preventDefault(),["Escape","Space","Enter"].includes(t)||e.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(t)&&_t(t,e.target.value??"",i))}function _t(e,i,t){const s=t.renderRoot.querySelector(".chip.highlighted");if((e==="Escape"||i)&&s&&s.classList.remove("highlighted"),e==="Backspace"&&!i){if(t.items.length){s&&(s.querySelector(".chip-item-close").click(),t.items.splice(Array.from(t.renderRoot.querySelectorAll(".chip")).indexOf(s),1));const r=t.renderRoot.querySelectorAll(".chip")[t.renderRoot.querySelectorAll(".chip").length-1];r.classList.contains("highlighted")||r.classList.add("highlighted"),t.requestUpdate()}t._dispatchEvent()}if((e==="ArrowLeft"||e==="ArrowRight")&&!i){if(t.renderRoot.querySelectorAll(".chip").length<1)return;let r=0;const n=t.renderRoot.querySelector(".chip.highlighted");n&&(r=Array.from(t.renderRoot.querySelectorAll(".chip")).indexOf(n),n.classList.remove("highlighted")),r=r+(e==="ArrowLeft"?-1:1),e==="ArrowLeft"&&r<0&&(r=t.renderRoot.querySelectorAll(".chip").length-1),e==="ArrowRight"&&r>t.renderRoot.querySelectorAll(".chip").length-1&&(r=0),Array.from(t.renderRoot.querySelectorAll(".chip"))[r].classList.add("highlighted")}}var A,ie,De;class Ut extends ${constructor(){super();v(this,A);this.items={},this.controller={}}static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",d(this,A,ie).bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",d(this,A,ie).bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}render(){return o`
      <span class="chip-container">
        ${K(this.items,t=>o`
            <span class="chip tiny-margin" @click=${d(this,A,De).bind(this)}>
              <span class="chip-title">${t.title}</span>
                <span
                  class="chip-item-close hidden"
                  data-close=${t.key}
                  @click=${s=>{s.stopPropagation(),this.controller.remove(s),this.requestUpdate()}}
                ></span>
              </span>
            </span>
          `)}
      </span>
    `}}A=new WeakSet,ie=function(t){Dt(t,this)},De=function(t){Bt(t,this)};customElements.define("eox-itemfilter-chips",Ut);const zt=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),ce=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","expandMultipleFilters","expandResults","expandMultipleResults","items"];function Vt(e,i,t){let s=[];e.filterProperties.length&&e.filterProperties.forEach(n=>{const l={},a=c=>n.format==="date"?P(c).unix():parseFloat(c);i.forEach(c=>{var h,y;if(n.type==="range"){const g=w(n.key,c);if(Array.isArray(g)){const f=[a(g[0]),a(g[1])];l.min=l.min!==void 0?Math.min(l.min,f[0]):f[0],l.max=l.max!==void 0?Math.max(l.max,f[1]):f[1]}else{const f=a(g);l.min=l.min!==void 0?Math.min(l.min,f):f,l.max=l.max!==void 0?Math.max(l.max,f):f}return}Array.isArray(c[n.key])?c[n.key].forEach(g=>{l[g]=void 0}):n.type==="spatial"?(l.geometry=((h=n==null?void 0:n.state)==null?void 0:h.geometry)||void 0,l.geometry&&(n.stringifiedState=l.geometry.type),l.mode=n.mode||"intersects"):(y=n.key)!=null&&y.includes(".")?de(ue(t.items,n.key)).filter(g=>g).forEach(g=>{l[g]=void 0}):l[c[n.key]]=void 0});const u=n.key||n.keys.join("|");t.filters[u]=Object.assign({type:n.type||"multiselect",dirty:n.state?Object.values(n.state).some(c=>c):void 0,key:u},n.type==="range"?{min:l.min,max:l.max,format:n.format}:{},n),t.filters[u].state=Object.assign({},l,n.state)}),e.matchAllWhenEmpty!==!1&&(t.results=t.sortResults(i),t.requestUpdate()),e.aggregateResults&&(s=Array.from(new Set(i.reduce((n,l)=>n.concat(l[e.aggregateResults]),[]))).filter(n=>n).sort((n,l)=>n.localeCompare(l)));const r=[];return Object.values(t.filters).forEach(n=>{n.type==="text"?n.keys.forEach(l=>{r.includes(l)||r.push(l)}):(n.type==="select"||n.type==="multiselect")&&(r.includes(n.key)||r.push(n.key))}),lt(i,Object.assign({keys:r},e.fuseConfig)),s}async function Nt(e,i,t){let s;t.externalFilter?s=await dt(i,t.filters,e):s=await at(i,t.filters,e),t.results=t.sortResults(s)}function Kt(e,i,t){const s=`filter-${e.key}`.replace("|","-");switch(e.type){case"text":return o`<eox-itemfilter-text
        data-type="filter"
        data-cy="text-filter"
        slot="filter"
        id="${s}"
        .tabIndex=${i}
        .filterObject=${e}
        .results=${t.results}
        .unstyled=${t.unstyled}
        @result=${t.updateResult}
        @filter=${()=>t.search()}
      ></eox-itemfilter-text>`;case"multiselect":case"select":return o`
        <eox-itemfilter-select
          .inlineMode=${t.inlineMode||!1}
          data-type="filter"
          id="${s}"
          .tabIndex=${i}
          .filterObject=${e}
          slot="filter"
          .suggestions="${de(ue(t.items,e.key)).filter(r=>r)}"
          type="${e.type}"
          .unstyled=${t.unstyled}
          @filter=${()=>t.search()}
        ></eox-itemfilter-select>
      `;case"range":return o`
        <eox-itemfilter-range
          id="${s}"
          data-type="filter"
          .tabIndex=${i}
          .filterObject=${e}
          slot="filter"
          .unstyled=${t.unstyled}
          @filter=${()=>t.search()}
        ></eox-itemfilter-range>
      `;case"spatial":return o`
        <eox-itemfilter-spatial
          id="${s}"
          data-type="filter"
          .tabIndex=${i}
          .filterObject=${e}
          slot="filter"
          @filter=${()=>t.search()}
        ></eox-itemfilter-spatial>
      `;default:return o``}}function Wt(e,i){return[...e].sort((t,s)=>w(i.titleProperty,t).toString().localeCompare(w(i.titleProperty,s)).toString())}function Zt(e,i,t){return o`
    ${m(e.dirty,()=>o`
        <button
          type="button"
          tabindex=${i}
          slot="reset-button"
          class="reset-icon icon square primary-text transparent small no-margin"
          @click=${s=>{const r=s.target.parentElement.querySelector("[slot=filter]");r&&typeof r.reset=="function"&&r.reset(),t.search(),t.requestUpdate()}}
        >
          ${t.unstyled?"Reset":o`
                <i class="small">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>close</title>
                    <path
                      d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                    />
                  </svg>
                </i>
                <div class="tooltip left">Reset filter</div>
              `}
        </button>
      `)}
  `}function Ot(e){e.renderRoot.querySelectorAll("[data-type='filter']").forEach(i=>{typeof i.reset=="function"&&i.reset()}),e.search()}var B,C,x,q,_e,Ue;class Yt extends ${constructor(){super();v(this,q);v(this,B,[]);v(this,C,[]);v(this,x,zt);this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=W(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.enableResultAction=!1,this.resultActionIcon='<svg style="width: 24px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>click me!</title><path fill="currentColor" d="M11.5,11L17.88,16.37L17,16.55L16.36,16.67C15.73,16.8 15.37,17.5 15.65,18.07L15.92,18.65L17.28,21.59L15.86,22.25L14.5,19.32L14.24,18.74C13.97,18.15 13.22,17.97 12.72,18.38L12.21,18.78L11.5,19.35V11M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10" /></svg>',this.styleOverride="",this.unstyled=!1}static get properties(){return{items:{attribute:!1,type:Object},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{attribute:!1,type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{attribute:!1,type:Array},fuseConfig:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},enableResultAction:{attribute:!1,type:Boolean},resultActionIcon:{attribute:!1,type:String},styleOverride:{type:String},unstyled:{type:Boolean}}}apply(){D(this,B,Vt(b(this,x),b(this,C),this)),this.search()}async searchHandler(){await Nt(b(this,x),b(this,C),this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(t){return Wt(t,b(this,x))}resetFilters(){Ot(this)}firstUpdated(t){var r;let s={};ce.map(n=>{s={...s,[n]:this[n]}}),D(this,x,s),D(this,C,((r=this.items)==null?void 0:r.map((n,l)=>Object.assign({id:n[this.idProperty]||`item-${l}`},n)))||[]),this.apply()}updated(t){ce.map(s=>t.has(s)?(this.firstUpdated(void 0),!0):!1)}updateResult(t){this.selectedResult=t.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}mouseEnterResult(t){this.dispatchEvent(new CustomEvent("mouseenter:result",{detail:t.detail,bubbles:!0,composed:!0}))}mouseLeaveResult(t){this.dispatchEvent(new CustomEvent("mouseleave:result",{detail:t.detail,bubbles:!0,composed:!0}))}emitResultAction(t){this.dispatchEvent(new CustomEvent("click:result-action",{detail:t.detail,bubbles:!0,composed:!0}))}render(){var t;return o`
      <style>
        ${Xe}
        ${!this.unstyled&&re}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":M}
        @submit="${s=>s.preventDefault()}"
      >
        ${m(this.filterProperties,()=>o`
            <div
              style="display: var(--filter-display); min-height: ${this.inlineMode?"100%":this.filterProperties.length>2?"50%":this.filterProperties.length*32+105+"px"}"
            >
              <eox-itemfilter-container
                .filters=${this.filters}
                .filterProperties=${this.filterProperties}
                .inlineMode=${this.inlineMode||!1}
                @reset=${()=>this.resetFilters()}
                @filter=${()=>this.search()}
              >
                <section
                  slot="section"
                  style="height: 100%; overflow: hidden; display: flex; flex-direction: column;"
                >
                  ${m(!this.inlineMode,()=>o`
                      <nav class="title-nav">
                        <div class="max">
                          <slot name="filterstitle"
                            ><p><strong>Filters</strong></p></slot
                          >
                        </div>
                        ${m(!this.inlineMode&&b(this,x).filterProperties&&!this.inlineMode&&b(this,x).filterProperties&&G(this.filters),()=>o`
                            <button
                              type="button"
                              id="filter-reset"
                              class="reset-icon border small"
                              data-cy="filter-reset"
                              @click=${()=>this.resetFilters()}
                            >
                              ${this.unstyled?M:o`
                                    <i class="small">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                      >
                                        <title>close</title>
                                        <path
                                          d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                                        />
                                      </svg>
                                    </i>
                                  `}
                              <span class="small-text">Reset all</span>
                            </button>
                          `)}
                      </nav>
                    `)}
                  <div class="scroll" style="flex: 1; max-height: 100%">
                    <ul id="filters" class="list no-space">
                      ${K(Object.values(this.filters),(s,r)=>o` <li class="no-padding">
                            <eox-itemfilter-expandcontainer
                              .filterObject=${s}
                              @details-toggled=${n=>me(n,b(this,x),this)}
                              data-details="${s.key}"
                            >
                              ${d(this,q,Ue).call(this,s,oe(r,1))}
                              ${d(this,q,_e).call(this,s,oe(r,2))}
                            </eox-itemfilter-expandcontainer>
                          </li>`)}
                    </ul>
                  </div>
                </section>
              </eox-itemfilter-container>
            </div>
          `)}
        ${m(((t=b(this,x))==null?void 0:t.showResults)&&this.results,()=>o`
            <div class="small-space"></div>
            <eox-itemfilter-results
              .config=${b(this,x)}
              .results=${this.results}
              .filters=${this.filters}
              .resultAggregation=${b(this,B)}
              .selectedResult=${this.selectedResult}
              .resultType=${this.resultType}
              .enableResultAction=${this.enableResultAction}
              .resultActionIcon=${this.resultActionIcon}
              @result=${this.updateResult}
              @mouseenter:result=${this.mouseEnterResult}
              @mouseleave:result=${this.mouseLeaveResult}
              @click:result-action=${this.emitResultAction}
            >
              <nav class="title-nav">
                <slot name="resultstitle"
                  ><p><strong>Results</strong></p></slot
                >
              </nav>
            </eox-itemfilter-results>
          `)}
      </form>
    `}}B=new WeakMap,C=new WeakMap,x=new WeakMap,q=new WeakSet,_e=function(t,s){return Kt(t,s,this)},Ue=function(t,s){return Zt(t,s,this)};customElements.define("eox-itemfilter",Yt);export{Yt as EOxItemFilter};
