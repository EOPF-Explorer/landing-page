var Zo=Object.defineProperty;var Fr=e=>{throw TypeError(e)};var ea=(e,t,n)=>t in e?Zo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ct=(e,t,n)=>ea(e,typeof t!="symbol"?t+"":t,n),Cn=(e,t,n)=>t.has(e)||Fr("Cannot "+n);var z=(e,t,n)=>(Cn(e,t,"read from private field"),n?n.call(e):t.get(e)),K=(e,t,n)=>t.has(e)?Fr("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Ke=(e,t,n,r)=>(Cn(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),R=(e,t,n)=>(Cn(e,t,"access private method"),n);import{a as ue,A as Ce,b as S}from"./lit-element.CBn2YVps.js";import{c as ta,b as Dt,o as en}from"./map.B6QQHL2e.js";import{n as I}from"./when.BR7zwNJC.js";import{e as na,a as ra}from"./addCommonStyleSheet.Ct85SDKw.js";import{d as k}from"./dayjs.min.lahZ2SOr.js";import{_ as tn}from"./index.BUIxO2d3.js";import{s as Ve,u as Hr}from"./static.DLFxBHrh.js";import"./toolcool-range-slider.min.BBXDELo7.js";import{p as ia,R as sa}from"./index.CZdo6RF-.js";import{f as Je,a as ne,b as ft,m as oa,l as ht,i as aa,d as Ge,r as la,c as zr}from"./index.CxojoGlr.js";import{g as di,c as Me}from"./commonjsHelpers.BosuxZz1.js";import"./orient2d.DArCjZZA.js";const ca=`
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
`;ra();const sr=`
${na}
.field {
  margin-block-end: 0;
}
.field>:is(input,textarea,select) {
  width: 100%;
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
  --_background-color: var(--background-color, var(--eox-background-color, transparent));
  --_padding: var(--padding, 0.5rem);
  --_padding-vertical: var(--padding-vertical, 0.25rem);
  --_list-padding: var(--list-padding, 2rem);
  --_text-transform: var(--text-transform, capitalize);
  --_form-flex-direction: var(--form-flex-direction, column);
  --_filter-display: var(--filter-display, block);
  background-color: var(--_background-color);
  display: flex;
  flex-direction: column;
}
form#itemfilter {
  flex-direction: var(--_form-flex-direction);
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
  padding: 0 var(--_padding) !important;
}
.list.no-padding > li {
  padding: 0 !important;
}
li label {
  display: flex;
  align-items: center;
}
.title {
  text-transform: var(--_text-transform);
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
  max-height: 400px;
  width: 100%;
}
eox-itemfilter-expandcontainer > [data-type=filter] {
  display: block;
  height: calc(100% - 32px);
  overflow-y: auto;
  overflow-x: hidden;
  max-width: 100%;
}
form#itemfilter.inline eox-itemfilter-expandcontainer {
  max-height: none;
}
form#itemfilter.inline eox-itemfilter-expandcontainer > [data-type=filter] {
  height: auto;
  overflow: visible;
}
[data-type=filter] .title,
details summary {
  text-transform: var(--_text-transform);
}
details summary nav {
  height: 32px;
}
details > summary {
  min-block-size: 0rem;
  padding: 0 var(--_padding);
  user-select: none;
}
details > summary i {
  transition: transform 0.1s ease-in-out;
}
details[open] > summary i {
  transform: rotate(90deg);
}
summary > * {
  pointer-events: all;
}
ul.multiselect.list > li,
ul.select.list > li,
details > div > ul#results.list > li {
  padding-left: var(--_list-padding) !important;
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
  padding-left: var(--_padding);
  padding-right: var(--_padding);
}
ul#results li:not(:hover) .result-action {
  display: none;
}
eox-layout {
  padding: var(--_padding-vertical) var(--_padding);
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
  background-color: var(--_background-color);
}
nav.title-nav {
  padding-left: var(--_padding);
  padding-right: var(--_padding);
}
eox-itemfilter-range {
  display: block;
  margin-left: var(--_list-padding);
  padding-right: var(--_padding);
}
.range-wrapper {
  margin-left: var(--_list-padding);
  padding-right: var(--_padding);
}
tc-range-slider {
  width: 100%;
  --width: 100%;
}
.range-labels {
  display: flex;
  justify-content: space-between;
}
.range-before,
.range-after {
  font-size: x-small;
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
.autocomplete-container .field input,
.text-container .field input {
  background: none !important;
  border-block-end-color: var(--outline);
  border-radius: 0 !important;
  box-shadow: none !important;
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
  height: auto;
}
.select li label,
.multiselect li label {
  min-width: 0;
  max-width: 100%;
}
.select li label .title,
.multiselect li label .title {
  flex: 1;
  min-width: 0;
  max-width: 100%;
  width: 100%;
  overflow: visible;
}
.select li label .title .title-text,
.multiselect li label .title .title-text {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  max-width: 100%;
  width: 100%;
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
.row {
  display: flex;
  flex-direction: row;
  gap: 8px;
}
@media (prefers-color-scheme: dark) {
  .error-validation {
    color: #ffb4ab !important;
  }
}
input {
  background-color: var(--_background-color);
}
`;var Xt,pi;class ua extends ue{constructor(){super();K(this,Xt);this.filterObject={},this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}render(){return S`
      <style>
        ${!this.unstyled&&sr}
      </style>

      ${I(this.filterObject.featured,()=>S`<slot name="filter"></slot>`,()=>S`<details
            @toggle="${R(this,Xt,pi)}"
            class="details-filter max-width"
            ?open=${this.filterObject.expanded||Ce}
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
    `}}Xt=new WeakSet,pi=function(n){this.dispatchEvent(new CustomEvent("details-toggled",{detail:n,bubbles:!0,composed:!0}))};customElements.define("eox-itemfilter-expandcontainer",ua);function Ee(e){return Array.isArray?Array.isArray(e):yi(e)==="[object Array]"}function fa(e){if(typeof e=="string")return e;if(typeof e=="bigint")return e.toString();const t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function Bn(e){return e==null?"":fa(e)}function W(e){return typeof e=="string"}function Nt(e){return typeof e=="number"}function ha(e){return e===!0||e===!1||da(e)&&yi(e)=="[object Boolean]"}function gi(e){return typeof e=="object"}function da(e){return gi(e)&&e!==null}function J(e){return e!=null}function Pt(e){return!e.trim().length}function yi(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const pa="Incorrect 'index' type",jn="Invalid doc index: must be a non-negative integer within the bounds of the docs array",ga=e=>`Invalid value for key ${e}`,ya=e=>`Pattern length exceeds max of ${e}.`,ma=e=>`Missing ${e} property in key`,va=e=>`Property 'weight' in key '${e}' must be a positive integer`,ba="Fuse.match does not support useTokenSearch: token search requires corpus-level statistics (df, fieldCount) that a one-off string comparison does not have. Use new Fuse(...).search(...) instead.",qr=Object.prototype.hasOwnProperty;var wa=class{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(n=>{const r=mi(n);this._keys.push(r),this._keyMap[r.id]=r,t+=r.weight}),this._keys.forEach(n=>{n.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}};function mi(e){let t=null,n=null,r=null,i=1,s=null;if(W(e)||Ee(e))r=e,t=Wr(e),n=Ft(e);else{if(!qr.call(e,"name"))throw new Error(ma("name"));const o=e.name;if(r=o,qr.call(e,"weight")&&e.weight!==void 0&&(i=e.weight,i<=0))throw new Error(va(Ft(o)));t=Wr(o),n=Ft(o),s=e.getFn??null}return{path:t,id:n,weight:i,src:r,getFn:s}}function Wr(e){return Ee(e)?e:e.split(".")}function Ft(e){return Ee(e)?e.join("."):e}function xa(e,t){const n=[];let r=!1;const i=(s,o,l,c)=>{if(J(s))if(!o[l])n.push(c!==void 0?{v:s,i:c}:s);else{const f=s[o[l]];if(!J(f))return;if(l===o.length-1&&(W(f)||Nt(f)||ha(f)||typeof f=="bigint"))n.push(c!==void 0?{v:Bn(f),i:c}:Bn(f));else if(Ee(f)){r=!0;for(let h=0,d=f.length;h<d;h+=1)i(f[h],o,l+1,h)}else o.length&&i(f,o,l+1,c)}};return i(e,W(t)?t.split("."):t,0),r?n:n[0]}const _a={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Aa={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},Ma={location:0,threshold:.6,distance:100},Ca={useExtendedSearch:!1,useTokenSearch:!1,tokenize:void 0,tokenMatch:"any",getFn:xa,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1},L=Object.freeze({...Aa,..._a,...Ma,...Ca});function Sa(e){return e>=9&&e<=13||e===32||e===160}function La(e=1,t=3){const n=new Map,r=Math.pow(10,t);return{get(i){let s=0,o=!1;for(let c=0;c<i.length;c++)Sa(i.charCodeAt(c))?o=!1:o||(s++,o=!0);if(s===0&&(s=1),n.has(s))return n.get(s);const l=Math.round(r/Math.pow(s,.5*e))/r;return n.set(s,l),l},clear(){n.clear()}}}var or=class{constructor({getFn:e=L.getFn,fieldNormWeight:t=L.fieldNormWeight}={}){this.norm=La(t,3),this.getFn=e,this.isCreated=!1,this.docs=[],this.keys=[],this._keysMap={},this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((t,n)=>{this._keysMap[t.id]=n})}create(){if(this.isCreated||!this.docs.length)return;this.isCreated=!0;const e=this.docs.length;this.records=new Array(e);let t=0;if(W(this.docs[0]))for(let n=0;n<e;n++){const r=this._createStringRecord(this.docs[n],n);r&&(this.records[t++]=r)}else for(let n=0;n<e;n++)this.records[t++]=this._createObjectRecord(this.docs[n],n);this.records.length=t,this.norm.clear()}add(e,t){if(!Number.isInteger(t)||t<0)throw new Error(jn);if(W(e)){const r=this._createStringRecord(e,t);return r&&this.records.push(r),r}const n=this._createObjectRecord(e,t);return this.records.push(n),n}removeAt(e){if(!Number.isInteger(e)||e<0)throw new Error(jn);for(let t=0,n=this.records.length;t<n;t+=1)if(this.records[t].i===e){this.records.splice(t,1);break}for(let t=0,n=this.records.length;t<n;t+=1)this.records[t].i>e&&(this.records[t].i-=1)}removeAll(e){const t=new Set;for(const r of e)Number.isInteger(r)&&r>=0&&t.add(r);if(t.size===0)return;this.records=this.records.filter(r=>!t.has(r.i));const n=Array.from(t).sort((r,i)=>r-i);for(const r of this.records){let i=0,s=n.length;for(;i<s;){const o=i+s>>>1;n[o]<r.i?i=o+1:s=o}r.i-=i}}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_createStringRecord(e,t){return!J(e)||Pt(e)?null:{v:e,i:t,n:this.norm.get(e)}}_createObjectRecord(e,t){const n={i:t,$:{}};for(let r=0,i=this.keys.length;r<i;r++){const s=this.keys[r],o=s.getFn?s.getFn(e):this.getFn(e,s.path);if(J(o)){if(Ee(o)){const l=[];for(let c=0,f=o.length;c<f;c+=1){const h=o[c];if(J(h)){if(W(h)){if(!Pt(h)){const d={v:h,i:c,n:this.norm.get(h)};l.push(d)}}else if(J(h.v)){const d=W(h.v)?h.v:Bn(h.v);if(!Pt(d)){const y={v:d,i:h.i,n:this.norm.get(d)};l.push(y)}}}}n.$[r]=l}else if(W(o)&&!Pt(o)){const l={v:o,n:this.norm.get(o)};n.$[r]=l}}}return n}toJSON(){return{keys:this.keys.map(({getFn:e,...t})=>t),records:this.records}}};function vi(e,t,{getFn:n=L.getFn,fieldNormWeight:r=L.fieldNormWeight}={}){const i=new or({getFn:n,fieldNormWeight:r});return i.setKeys(e.map(mi)),i.setSources(t),i.create(),i}function Ea(e,{getFn:t=L.getFn,fieldNormWeight:n=L.fieldNormWeight}={}){const{keys:r,records:i}=e,s=new or({getFn:t,fieldNormWeight:n});return s.setKeys(r),s.setIndexRecords(i),s}function $a(e=[],t=L.minMatchCharLength){const n=[];let r=-1,i=-1,s=0;for(let o=e.length;s<o;s+=1){const l=e[s];l&&r===-1?r=s:!l&&r!==-1&&(i=s-1,i-r+1>=t&&n.push([r,i]),r=-1)}return e[s-1]&&s-r>=t&&n.push([r,s-1]),n}function Ra(e,t,n,{location:r=L.location,distance:i=L.distance,threshold:s=L.threshold,findAllMatches:o=L.findAllMatches,minMatchCharLength:l=L.minMatchCharLength,includeMatches:c=L.includeMatches,ignoreLocation:f=L.ignoreLocation}={}){if(t.length>32)throw new Error(ya(32));const h=t.length,d=e.length,y=Math.max(0,Math.min(r,d));let g=s,m=y;const v=(B,F)=>{const V=B/h;if(f)return V;const Re=Math.abs(y-F);return i?V+Re/i:Re?1:V},_=l>1||c,x=_?Array(d):[];let C;for(;(C=e.indexOf(t,m))>-1;){const B=v(0,C);if(g=Math.min(B,g),m=C+h,_){let F=0;for(;F<h;)x[C+F]=1,F+=1}}m=-1;let M=[],$=1,D=0,N=h+d;const oe=1<<h-1;for(let B=0;B<h;B+=1){let F=0,V=N;for(;F<V;)v(B,y+V)<=g?F=V:N=V,V=Math.floor((N-F)/2+F);N=V;let Re=Math.max(1,y-V+1);const st=o?d:Math.min(y+V,d)+h,we=Array(st+2);we[st+1]=(1<<B)-1;for(let Z=st;Z>=Re;Z-=1){const ot=Z-1,hn=n[e[ot]];if(we[Z]=(we[Z+1]<<1|1)&hn,B&&(we[Z]|=(M[Z+1]|M[Z])<<1|1|M[Z+1]),we[Z]&oe&&($=v(B,ot),$<=g)){if(g=$,m=ot,D=B,m<=y)break;Re=Math.max(1,2*y-m)}}if(v(B+1,y)>g)break;M=we}if(_&&m>=0){const B=Math.min(d-1,m+h-1+D);for(let F=m;F<=B;F+=1)n[e[F]]&&(x[F]=1)}const qe={isMatch:m>=0,score:Math.max(.001,$)};if(_){const B=$a(x,l);B.length?c&&(qe.indices=B):qe.isMatch=!1}return qe}function ka(e){const t={};for(let n=0,r=e.length;n<r;n+=1){const i=e.charAt(n);t[i]=(t[i]||0)|1<<r-n-1}return t}function ar(e){if(e.length<=1)return e;e.sort((n,r)=>n[0]-r[0]||n[1]-r[1]);const t=[e[0]];for(let n=1,r=e.length;n<r;n+=1){const i=t[t.length-1],s=e[n];s[0]<=i[1]+1?i[1]=Math.max(i[1],s[1]):t.push(s)}return t}const bi={ł:"l",Ł:"L",đ:"d",Đ:"D",ø:"o",Ø:"O",ħ:"h",Ħ:"H",ŧ:"t",Ŧ:"T",ı:"i",ß:"ss"},Ta=new RegExp("["+Object.keys(bi).join("")+"]","g"),dt=typeof String.prototype.normalize=="function"?e=>e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,"").replace(Ta,t=>bi[t]):e=>e;var lr=class{constructor(e,{location:t=L.location,threshold:n=L.threshold,distance:r=L.distance,includeMatches:i=L.includeMatches,findAllMatches:s=L.findAllMatches,minMatchCharLength:o=L.minMatchCharLength,isCaseSensitive:l=L.isCaseSensitive,ignoreDiacritics:c=L.ignoreDiacritics,ignoreLocation:f=L.ignoreLocation}={}){if(this.options={location:t,threshold:n,distance:r,includeMatches:i,findAllMatches:s,minMatchCharLength:o,isCaseSensitive:l,ignoreDiacritics:c,ignoreLocation:f},e=l?e:e.toLowerCase(),e=c?dt(e):e,this.pattern=e,this.chunks=[],!this.pattern.length)return;const h=(y,g)=>{this.chunks.push({pattern:y,alphabet:ka(y),startIndex:g})},d=this.pattern.length;if(d>32){let y=0;const g=d%32,m=d-g;for(;y<m;)h(this.pattern.substr(y,32),y),y+=32;if(g){const v=d-32;h(this.pattern.substr(v),v)}}else h(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,ignoreDiacritics:n,includeMatches:r}=this.options;if(e=t?e:e.toLowerCase(),e=n?dt(e):e,this.pattern===e){if(e.length<this.options.minMatchCharLength)return{isMatch:!1,score:1};const m={isMatch:!0,score:0};return r&&(m.indices=[[0,e.length-1]]),m}const{location:i,distance:s,threshold:o,findAllMatches:l,minMatchCharLength:c,ignoreLocation:f}=this.options,h=[];let d=0,y=!1;this.chunks.forEach(({pattern:m,alphabet:v,startIndex:_})=>{const{isMatch:x,score:C,indices:M}=Ra(e,m,v,{location:i+_,distance:s,threshold:o,findAllMatches:l,minMatchCharLength:c,includeMatches:r,ignoreLocation:f});x&&(y=!0),d+=C,x&&M&&h.push(...M)});const g={isMatch:y,score:y?d/this.chunks.length:1};return y&&r&&(g.indices=ar(h)),g}};const Da=new Set(["fuzzy","include"]);function Pa(e){return e.startsWith("inverse")}const In=[{type:"exact",multiRegex:/^="(.*)"$/,singleRegex:/^=(.*)$/,create:e=>({type:"exact",search(t){const n=t===e;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}})},{type:"include",multiRegex:/^'"(.*)"$/,singleRegex:/^'(.*)$/,create:e=>({type:"include",search(t){let n=0,r;const i=[],s=e.length;for(;(r=t.indexOf(e,n))>-1;)n=r+s,i.push([r,n-1]);const o=!!i.length;return{isMatch:o,score:o?0:1,indices:i}}})},{type:"prefix-exact",multiRegex:/^\^"(.*)"$/,singleRegex:/^\^(.*)$/,create:e=>({type:"prefix-exact",search(t){const n=t.startsWith(e);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}})},{type:"inverse-prefix-exact",multiRegex:/^!\^"(.*)"$/,singleRegex:/^!\^(.*)$/,create:e=>({type:"inverse-prefix-exact",search(t){const n=!t.startsWith(e);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}})},{type:"inverse-suffix-exact",multiRegex:/^!"(.*)"\$$/,singleRegex:/^!(.*)\$$/,create:e=>({type:"inverse-suffix-exact",search(t){const n=!t.endsWith(e);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}})},{type:"suffix-exact",multiRegex:/^"(.*)"\$$/,singleRegex:/^(.*)\$$/,create:e=>({type:"suffix-exact",search(t){const n=t.endsWith(e);return{isMatch:n,score:n?0:1,indices:[t.length-e.length,t.length-1]}}})},{type:"inverse-exact",multiRegex:/^!"(.*)"$/,singleRegex:/^!(.*)$/,create:e=>({type:"inverse-exact",search(t){const n=t.indexOf(e)===-1;return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}})},{type:"fuzzy",multiRegex:/^"(.*)"$/,singleRegex:/^(.*)$/,create:(e,t={})=>{const n=new lr(e,{location:t.location??L.location,threshold:t.threshold??L.threshold,distance:t.distance??L.distance,includeMatches:t.includeMatches??L.includeMatches,findAllMatches:t.findAllMatches??L.findAllMatches,minMatchCharLength:t.minMatchCharLength??L.minMatchCharLength,isCaseSensitive:t.isCaseSensitive??L.isCaseSensitive,ignoreDiacritics:t.ignoreDiacritics??L.ignoreDiacritics,ignoreLocation:t.ignoreLocation??L.ignoreLocation});return{type:"fuzzy",search(r){return n.searchIn(r)}}}}],Ur=In.length,Oa="\0",Ba="|";function ja(e){const t=[],n=e.length;let r=0;for(;r<n;){for(;r<n&&e[r]===" ";)r++;if(r>=n)break;let i=r;for(;i<n&&e[i]!==" "&&e[i]!=='"';)i++;if(i<n&&e[i]==='"'){for(i++;i<n;){if(e[i]==='"'){const s=i+1;if(s>=n||e[s]===" "){i++;break}if(e[s]==="$"&&(s+1>=n||e[s+1]===" ")){i+=2;break}}i++}t.push(e.substring(r,i)),r=i}else{for(;i<n&&e[i]!==" ";)i++;t.push(e.substring(r,i)),r=i}}return t}function Kr(e,t){const n=e.match(t);return n?n[1]:null}function Ia(e,t={}){return e.replace(/\\\|/g,Oa).split(Ba).map(n=>{const r=ja(n.replace(/\u0000/g,"|").trim()).filter(s=>s&&!!s.trim()),i=[];for(let s=0,o=r.length;s<o;s+=1){const l=r[s];let c=!1,f=-1;for(;!c&&++f<Ur;){const h=In[f],d=Kr(l,h.multiRegex);d&&(i.push(h.create(d,t)),c=!0)}if(!c)for(f=-1;++f<Ur;){const h=In[f],d=Kr(l,h.singleRegex);if(d){i.push(h.create(d,t));break}}}return i})}var Na=class{constructor(e,{isCaseSensitive:t=L.isCaseSensitive,ignoreDiacritics:n=L.ignoreDiacritics,includeMatches:r=L.includeMatches,minMatchCharLength:i=L.minMatchCharLength,ignoreLocation:s=L.ignoreLocation,findAllMatches:o=L.findAllMatches,location:l=L.location,threshold:c=L.threshold,distance:f=L.distance}={}){this.query=null,this.options={isCaseSensitive:t,ignoreDiacritics:n,includeMatches:r,minMatchCharLength:i,findAllMatches:o,ignoreLocation:s,location:l,threshold:c,distance:f},e=t?e:e.toLowerCase(),e=n?dt(e):e,this.pattern=e,this.query=Ia(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:r,ignoreDiacritics:i}=this.options;e=r?e:e.toLowerCase(),e=i?dt(e):e;let s=0;const o=[];let l=0,c=!1;for(let f=0,h=t.length;f<h;f+=1){const d=t[f];o.length=0,s=0,c=!1;for(let y=0,g=d.length;y<g;y+=1){const m=d[y],{isMatch:v,indices:_,score:x}=m.search(e);if(v)s+=1,l+=x,Pa(m.type)&&(c=!0),n&&(Da.has(m.type)?o.push(..._):o.push(_));else{l=0,s=0,o.length=0,c=!1;break}}if(s){const y={isMatch:!0,score:l/s};return c&&(y.hasInverse=!0),n&&(y.indices=ar(o)),y}}return{isMatch:!1,score:1}}};const Nn=[];function cr(...e){Nn.push(...e)}function Ht(e,t){for(let n=0,r=Nn.length;n<r;n+=1){const i=Nn[n];if(i.condition(e,t))return new i(e,t)}return new lr(e,t)}const zt={AND:"$and",OR:"$or"},Fn={PATH:"$path",PATTERN:"$val"},Hn=e=>!!(e[zt.AND]||e[zt.OR]),Fa=e=>!!e[Fn.PATH],Ha=e=>!Ee(e)&&gi(e)&&!Hn(e),Vr=e=>({[zt.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function wi(e,t,{auto:n=!0}={}){const r=i=>{if(W(i)){const c={keyId:null,pattern:i};return n&&(c.searcher=Ht(i,t)),c}const s=Object.keys(i),o=Fa(i);if(!o&&s.length>1&&!Hn(i))return r(Vr(i));if(Ha(i)){const c=o?i[Fn.PATH]:s[0],f=o?i[Fn.PATTERN]:i[c];if(!W(f))throw new Error(ga(c));const h={keyId:Ft(c),pattern:f};return n&&(h.searcher=Ht(f,t)),h}const l={children:[],operator:s[0]};return s.forEach(c=>{const f=i[c];Ee(f)&&f.forEach(h=>{l.children.push(r(h))})}),l};return Hn(e)||(e=Vr(e)),r(e)}function zn(e,{ignoreFieldNorm:t=L.ignoreFieldNorm}){let n=1;return e.forEach(({key:r,norm:i,score:s})=>{const o=r?r.weight:null;n*=Math.pow(s===0&&o?Number.EPSILON:s,(o||1)*(t?1:i))}),n}function za(e,{ignoreFieldNorm:t=L.ignoreFieldNorm}){e.forEach(n=>{n.score=zn(n.matches,{ignoreFieldNorm:t})})}var qa=class{constructor(e,t){this.limit=e,this.heap=[],this.comparator=t}get size(){return this.heap.length}insert(e){this.size<this.limit?(this.heap.push(e),this._bubbleUp(this.size-1)):this.comparator(e,this.heap[0])<0&&(this.heap[0]=e,this._sinkDown(0))}extractSorted(){return this.heap.sort(this.comparator)}_bubbleUp(e){const t=this.heap;for(;e>0;){const n=e-1>>1;if(this.comparator(t[e],t[n])<=0)break;const r=t[e];t[e]=t[n],t[n]=r,e=n}}_sinkDown(e){const t=this.heap,n=t.length;let r=e;do{e=r;const i=2*e+1,s=2*e+2;if(i<n&&this.comparator(t[i],t[r])>0&&(r=i),s<n&&this.comparator(t[s],t[r])>0&&(r=s),r!==e){const o=t[e];t[e]=t[r],t[r]=o}}while(r!==e)}};function Wa(e){const t=[];return e.matches.forEach(n=>{if(!J(n.indices)||!n.indices.length)return;const r={indices:n.indices,value:n.value};n.key&&(r.key=n.key.id),n.idx>-1&&(r.refIndex=n.idx),t.push(r)}),t}function Ua(e,t,{includeMatches:n=L.includeMatches,includeScore:r=L.includeScore}={}){return e.map(i=>{const{idx:s}=i,o={item:t[s],refIndex:s};return n&&(o.matches=Wa(i)),r&&(o.score=i.score),o})}const Ka=/[\p{L}\p{M}\p{N}_]+/gu,Gr=new WeakSet;function Va(e){Gr.has(e)||(Gr.add(e),console.warn(`[Fuse] tokenize regex ${e} lacks the global flag; only the first match per text will be returned. Add the 'g' flag.`))}function Ga(e){if(typeof e=="function"){let t=!1;return n=>{const r=e(n);if(!t&&(t=!0,!Array.isArray(r)||r.some(i=>typeof i!="string")))throw new Error(`[Fuse] tokenize function must return string[]; received ${Array.isArray(r)?"array containing non-strings":typeof r}.`);return r}}return e instanceof RegExp?(e.global||Va(e),t=>t.match(e)||[]):t=>t.match(Ka)||[]}function qn({isCaseSensitive:e=!1,ignoreDiacritics:t=!1,tokenize:n}={}){const r=Ga(n);return{tokenize(i){return e||(i=i.toLowerCase()),t&&(i=dt(i)),r(i)}}}var Ya=class{static condition(e,t){return t.useTokenSearch}constructor(e,t){this.options=t,this.analyzer=qn({isCaseSensitive:t.isCaseSensitive,ignoreDiacritics:t.ignoreDiacritics,tokenize:t.tokenize});const n=this.analyzer.tokenize(e),{df:r,fieldCount:i}=t._invertedIndex;this.termSearchers=[],this.idfWeights=[];for(const s of n){this.termSearchers.push(new lr(s,{location:t.location,threshold:t.threshold,distance:t.distance,includeMatches:t.includeMatches,findAllMatches:t.findAllMatches,minMatchCharLength:t.minMatchCharLength,isCaseSensitive:t.isCaseSensitive,ignoreDiacritics:t.ignoreDiacritics,ignoreLocation:!0}));const o=r.get(s)||0,l=Math.log(1+(i-o+.5)/(o+.5));this.idfWeights.push(l)}this.combineAll=t.tokenMatch==="all",this.numTerms=this.termSearchers.length,this.useMask=this.numTerms<=31}searchIn(e){if(!this.termSearchers.length)return{isMatch:!1,score:1};const t=[];let n=0,r=0,i=0,s=0;const o=this.combineAll&&!this.useMask?new Set:null;for(let f=0;f<this.termSearchers.length;f++){const h=this.termSearchers[f].searchIn(e),d=this.idfWeights[f];r+=d,h.isMatch&&(i++,n+=d*(1-h.score),h.indices&&t.push(...h.indices),this.combineAll&&(this.useMask?s|=1<<f:o.add(f)))}if(i===0)return{isMatch:!1,score:1};const l=r>0?1-n/r:0,c={isMatch:!0,score:Math.max(.001,l)};return this.options.includeMatches&&t.length&&(c.indices=ar(t)),this.combineAll&&(this.useMask?c.matchedMask=s:c.matchedTerms=o,c.termCount=this.numTerms),c}};function Sn(e,t,n,r){const i=r.tokenize(t);if(!i.length)return;e.fieldCount++,e.docFieldCount.set(n,(e.docFieldCount.get(n)||0)+1);const s=new Set(i);let o=e.docTermFieldHits.get(n);o||(o=new Map,e.docTermFieldHits.set(n,o));for(const l of s)o.set(l,(o.get(l)||0)+1),e.df.set(l,(e.df.get(l)||0)+1)}function xi(e,t,n,r){const{i,v:s,$:o}=t;if(s!==void 0){Sn(e,s,i,r);return}if(o)for(let l=0;l<n;l++){const c=o[l];if(c)if(Array.isArray(c))for(const f of c)Sn(e,f.v,i,r);else Sn(e,c.v,i,r)}}function Xa(e,t,n){const r={fieldCount:0,df:new Map,docFieldCount:new Map,docTermFieldHits:new Map};for(const i of e)xi(r,i,t,n);return r}function Ja(e,t,n,r){xi(e,t,n,r)}function Qa(e,t){const n=e.docFieldCount.get(t);if(n===void 0)return;e.fieldCount-=n,e.docFieldCount.delete(t);const r=e.docTermFieldHits.get(t);if(r){for(const[i,s]of r){const o=(e.df.get(i)||0)-s;o<=0?e.df.delete(i):e.df.set(i,o)}e.docTermFieldHits.delete(t)}}function Yr(e,t){if(t.length===0)return;const n=Array.from(new Set(t)).sort((l,c)=>l-c);for(const l of n)Qa(e,l);const r=l=>{let c=0,f=n.length;for(;c<f;){const h=c+f>>>1;n[h]<l?c=h+1:f=h}return l-c},i=n[0],s=new Map;for(const[l,c]of e.docFieldCount)s.set(l>i?r(l):l,c);e.docFieldCount=s;const o=new Map;for(const[l,c]of e.docTermFieldHits)o.set(l>i?r(l):l,c);e.docTermFieldHits=o}var $e=class{constructor(e,t,n){this.options={...L,...t},this.options.useExtendedSearch,this.options.useTokenSearch,this._keyStore=new wa(this.options.keys),this._docs=e,this._myIndex=null,this._invertedIndex=null,this.setCollection(e,n),this._lastQuery=null,this._lastSearcher=null}_getSearcher(e){if(this._lastQuery===e)return this._lastSearcher;const t=Ht(e,this._invertedIndex?{...this.options,_invertedIndex:this._invertedIndex}:this.options);return this._lastQuery=e,this._lastSearcher=t,t}setCollection(e,t){if(this._docs=e,t&&!(t instanceof or))throw new Error(pa);if(this._myIndex=t||vi(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight}),this.options.useTokenSearch){const n=qn({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics,tokenize:this.options.tokenize});this._invertedIndex=Xa(this._myIndex.records,this._myIndex.keys.length,n)}this._invalidateSearcherCache()}add(e){if(!J(e))return;this._docs.push(e);const t=this._myIndex.add(e,this._docs.length-1);if(this._invertedIndex&&t){const n=qn({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics,tokenize:this.options.tokenize});Ja(this._invertedIndex,t,this._myIndex.keys.length,n)}this._invalidateSearcherCache()}remove(e=()=>!1){const t=[],n=[];for(let r=0,i=this._docs.length;r<i;r+=1)e(this._docs[r],r)&&(t.push(this._docs[r]),n.push(r));if(n.length){this._invertedIndex&&Yr(this._invertedIndex,n);const r=new Set(n);this._docs=this._docs.filter((i,s)=>!r.has(s)),this._myIndex.removeAll(n),this._invalidateSearcherCache()}return t}removeAt(e){if(!Number.isInteger(e)||e<0||e>=this._docs.length)throw new Error(jn);this._invertedIndex&&Yr(this._invertedIndex,[e]);const t=this._docs.splice(e,1)[0];return this._myIndex.removeAt(e),this._invalidateSearcherCache(),t}_invalidateSearcherCache(){this._lastQuery=null,this._lastSearcher=null}getIndex(){return this._myIndex}_normalizedKeys(){return this._myIndex.keys.map(e=>this._keyStore.get(e.id)||e)}search(e,t){const{limit:n=-1}=t||{},{includeMatches:r,includeScore:i,shouldSort:s,sortFn:o,ignoreFieldNorm:l}=this.options;if(W(e)&&!e.trim()){let y=this._docs.map((g,m)=>({item:g,refIndex:m}));return Nt(n)&&n>-1&&(y=y.slice(0,n)),y}const c=s&&Nt(n)&&n>0&&W(e),f=o,h=(y,g)=>f(y,g)||y.idx-g.idx;let d;if(c){const y=new qa(n,h);W(this._docs[0])?this._searchStringList(e,{heap:y,ignoreFieldNorm:l}):this._searchObjectList(e,{heap:y,ignoreFieldNorm:l}),d=y.extractSorted()}else d=W(e)?W(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e),za(d,{ignoreFieldNorm:l}),s&&d.sort(W(e)?h:f),Nt(n)&&n>-1&&(d=d.slice(0,n));return Ua(d,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e,{heap:t,ignoreFieldNorm:n}={}){const r=this._getSearcher(e),i=this.options.useTokenSearch&&this.options.tokenMatch==="all",{records:s}=this._myIndex,o=t?null:[];return s.forEach(({v:l,i:c,n:f})=>{if(!J(l))return;const h=r.searchIn(l);if(h.isMatch){const d={score:h.score,value:l,norm:f,indices:h.indices};i&&(d.matchedMask=h.matchedMask,d.matchedTerms=h.matchedTerms,d.termCount=h.termCount);const y=[d];if(!i||this._coversAllTokens(y)){const g={item:l,idx:c,matches:y};t?(g.score=zn(g.matches,{ignoreFieldNorm:n}),t.insert(g)):o.push(g)}}}),o}_searchLogical(e){const t=wi(e,this.options),n=this._normalizedKeys(),r=(l,c,f)=>{if(!("children"in l)){const{keyId:g,searcher:m}=l;let v;return g===null?(v=[],n.forEach((_,x)=>{v.push(...this._findMatches({key:_,value:c[x],searcher:m}))})):v=this._findMatches({key:this._keyStore.get(g),value:this._myIndex.getValueForItemAtKeyId(c,g),searcher:m}),v&&v.length?[{idx:f,item:c,matches:v}]:[]}const{children:h,operator:d}=l,y=[];for(let g=0,m=h.length;g<m;g+=1){const v=h[g],_=r(v,c,f);if(_.length)y.push(..._);else if(d===zt.AND)return[]}return y},i=this._myIndex.records,s=new Map,o=[];return i.forEach(({$:l,i:c})=>{if(J(l)){const f=r(t,l,c);f.length&&(s.has(c)||(s.set(c,{idx:c,item:l,matches:[]}),o.push(s.get(c))),f.forEach(({matches:h})=>{s.get(c).matches.push(...h)}))}}),o}_searchObjectList(e,{heap:t,ignoreFieldNorm:n}={}){const r=this._getSearcher(e),i=this.options.useTokenSearch&&this.options.tokenMatch==="all",{records:s}=this._myIndex,o=this._normalizedKeys(),l=t?null:[];return s.forEach(({$:c,i:f})=>{if(!J(c))return;const h=[];let d=!1,y=!1;if(o.forEach((g,m)=>{const v=this._findMatches({key:g,value:c[m],searcher:r});v.length?(h.push(...v),v[0].hasInverse&&(y=!0)):d=!0}),!(y&&d)&&h.length&&(!i||this._coversAllTokens(h))){const g={idx:f,item:c,matches:h};t?(g.score=zn(g.matches,{ignoreFieldNorm:n}),t.insert(g)):l.push(g)}}),l}_findMatches({key:e,value:t,searcher:n}){if(!J(t))return[];const r=[];if(Ee(t))t.forEach(({v:i,i:s,n:o})=>{if(!J(i))return;const l=n.searchIn(i);if(l.isMatch){const c={score:l.score,key:e,value:i,idx:s,norm:o,indices:l.indices,hasInverse:l.hasInverse};l.termCount!==void 0&&(c.matchedMask=l.matchedMask,c.matchedTerms=l.matchedTerms,c.termCount=l.termCount),r.push(c)}});else{const{v:i,n:s}=t,o=n.searchIn(i);if(o.isMatch){const l={score:o.score,key:e,value:i,norm:s,indices:o.indices,hasInverse:o.hasInverse};o.termCount!==void 0&&(l.matchedMask=o.matchedMask,l.matchedTerms=o.matchedTerms,l.termCount=o.termCount),r.push(l)}}return r}_coversAllTokens(e){const t=e.length?e[0].termCount:void 0;if(t===void 0)return!0;if(t<=31){let r=0;for(let i=0;i<e.length;i++)r|=e[i].matchedMask||0;return r===2**t-1}const n=new Set;for(let r=0;r<e.length;r++){const i=e[r].matchedTerms;if(i)for(const s of i)n.add(s)}return n.size===t}};$e.version="7.5.0";$e.createIndex=vi;$e.parseIndex=Ea;$e.config=L;$e.match=function(e,t,n){if(n&&n.useTokenSearch)throw new Error(ba);return Ht(e,{...L,...n}).searchIn(t)};$e.parseQuery=wi;cr(Na);cr(Ya);$e.use=function(...e){e.forEach(t=>cr(t))};var ur=$e;function _i(e,t){const n=new ur(t.filterProperties,{keys:["title"]});if(!(e.target instanceof HTMLInputElement))return;const r=e.target.value,s=n.search(r).map(o=>o.item.key||o.item.keys.join("|"));Object.keys(t.filters).forEach(o=>{t.querySelector(`[data-details="${o}"]`).parentElement.style.display=s.includes(o)||!r?"":"none"})}function Za(e,t){if(!(e.target instanceof HTMLElement))return;const n=e.target.getAttribute("data-close").replace("|","-");t.querySelector(`#filter-${n}`).reset(),t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}const Wn=Math.min,Ye=Math.max,qt=Math.round,Ot=Math.floor,le=e=>({x:e,y:e});function el(e,t){return typeof e=="function"?e(t):e}function tl(e){return e.split("-")[0]}function nl(e){return e.split("-")[1]}function rl(e){return e==="x"?"y":"x"}function il(e){return e==="y"?"height":"width"}function Ai(e){const t=e[0];return t==="t"||t==="b"?"y":"x"}function sl(e){return rl(Ai(e))}function ol(e){return{top:0,right:0,bottom:0,left:0,...e}}function al(e){return typeof e!="number"?ol(e):{top:e,right:e,bottom:e,left:e}}function Wt(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Xr(e,t,n){let{reference:r,floating:i}=e;const s=Ai(t),o=sl(t),l=il(o),c=tl(t),f=s==="y",h=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,y=r[l]/2-i[l]/2;let g;switch(c){case"top":g={x:h,y:r.y-i.height};break;case"bottom":g={x:h,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:d};break;case"left":g={x:r.x-i.width,y:d};break;default:g={x:r.x,y:r.y}}switch(nl(t)){case"start":g[o]-=y*(n&&f?-1:1);break;case"end":g[o]+=y*(n&&f?-1:1);break}return g}async function ll(e,t){var n;t===void 0&&(t={});const{x:r,y:i,platform:s,rects:o,elements:l,strategy:c}=e,{boundary:f="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:y=!1,padding:g=0}=el(t,e),m=al(g),_=l[y?d==="floating"?"reference":"floating":d],x=Wt(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(_)))==null||n?_:_.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:f,rootBoundary:h,strategy:c})),C=d==="floating"?{x:r,y:i,width:o.floating.width,height:o.floating.height}:o.reference,M=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),$=await(s.isElement==null?void 0:s.isElement(M))?await(s.getScale==null?void 0:s.getScale(M))||{x:1,y:1}:{x:1,y:1},D=Wt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:C,offsetParent:M,strategy:c}):C);return{top:(x.top-D.top+m.top)/$.y,bottom:(D.bottom-x.bottom+m.bottom)/$.y,left:(x.left-D.left+m.left)/$.x,right:(D.right-x.right+m.right)/$.x}}const cl=50,ul=async(e,t,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:s=[],platform:o}=n,l=o.detectOverflow?o:{...o,detectOverflow:ll},c=await(o.isRTL==null?void 0:o.isRTL(t));let f=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:h,y:d}=Xr(f,r,c),y=r,g=0;const m={};for(let v=0;v<s.length;v++){const _=s[v];if(!_)continue;const{name:x,fn:C}=_,{x:M,y:$,data:D,reset:N}=await C({x:h,y:d,initialPlacement:r,placement:y,strategy:i,middlewareData:m,rects:f,platform:l,elements:{reference:e,floating:t}});h=M??h,d=$??d,m[x]={...m[x],...D},N&&g<cl&&(g++,typeof N=="object"&&(N.placement&&(y=N.placement),N.rects&&(f=N.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):N.rects),{x:h,y:d}=Xr(f,y,c)),v=-1)}return{x:h,y:d,placement:y,strategy:i,middlewareData:m}};function nn(){return typeof window<"u"}function nt(e){return Mi(e)?(e.nodeName||"").toLowerCase():"#document"}function Q(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function fe(e){var t;return(t=(Mi(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Mi(e){return nn()?e instanceof Node||e instanceof Q(e).Node:!1}function ie(e){return nn()?e instanceof Element||e instanceof Q(e).Element:!1}function be(e){return nn()?e instanceof HTMLElement||e instanceof Q(e).HTMLElement:!1}function Jr(e){return!nn()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Q(e).ShadowRoot}function vt(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=se(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!=="inline"&&i!=="contents"}function fl(e){return/^(table|td|th)$/.test(nt(e))}function rn(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}const hl=/transform|translate|scale|rotate|perspective|filter/,dl=/paint|layout|strict|content/,Pe=e=>!!e&&e!=="none";let Ln;function fr(e){const t=ie(e)?se(e):e;return Pe(t.transform)||Pe(t.translate)||Pe(t.scale)||Pe(t.rotate)||Pe(t.perspective)||!hr()&&(Pe(t.backdropFilter)||Pe(t.filter))||hl.test(t.willChange||"")||dl.test(t.contain||"")}function pl(e){let t=Se(e);for(;be(t)&&!Qe(t);){if(fr(t))return t;if(rn(t))return null;t=Se(t)}return null}function hr(){return Ln==null&&(Ln=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Ln}function Qe(e){return/^(html|body|#document)$/.test(nt(e))}function se(e){return Q(e).getComputedStyle(e)}function sn(e){return ie(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Se(e){if(nt(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Jr(e)&&e.host||fe(e);return Jr(t)?t.host:t}function Ci(e){const t=Se(e);return Qe(t)?e.ownerDocument?e.ownerDocument.body:e.body:be(t)&&vt(t)?t:Ci(t)}function pt(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=Ci(e),s=i===((r=e.ownerDocument)==null?void 0:r.body),o=Q(i);if(s){const l=Un(o);return t.concat(o,o.visualViewport||[],vt(i)?i:[],l&&n?pt(l):[])}else return t.concat(i,pt(i,[],n))}function Un(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Si(e){const t=se(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=be(e),s=i?e.offsetWidth:n,o=i?e.offsetHeight:r,l=qt(n)!==s||qt(r)!==o;return l&&(n=s,r=o),{width:n,height:r,$:l}}function dr(e){return ie(e)?e:e.contextElement}function Xe(e){const t=dr(e);if(!be(t))return le(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:s}=Si(t);let o=(s?qt(n.width):n.width)/r,l=(s?qt(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!l||!Number.isFinite(l))&&(l=1),{x:o,y:l}}const gl=le(0);function Li(e){const t=Q(e);return!hr()||!t.visualViewport?gl:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function yl(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Q(e)?!1:t}function Ie(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),s=dr(e);let o=le(1);t&&(r?ie(r)&&(o=Xe(r)):o=Xe(e));const l=yl(s,n,r)?Li(s):le(0);let c=(i.left+l.x)/o.x,f=(i.top+l.y)/o.y,h=i.width/o.x,d=i.height/o.y;if(s){const y=Q(s),g=r&&ie(r)?Q(r):r;let m=y,v=Un(m);for(;v&&r&&g!==m;){const _=Xe(v),x=v.getBoundingClientRect(),C=se(v),M=x.left+(v.clientLeft+parseFloat(C.paddingLeft))*_.x,$=x.top+(v.clientTop+parseFloat(C.paddingTop))*_.y;c*=_.x,f*=_.y,h*=_.x,d*=_.y,c+=M,f+=$,m=Q(v),v=Un(m)}}return Wt({width:h,height:d,x:c,y:f})}function on(e,t){const n=sn(e).scrollLeft;return t?t.left+n:Ie(fe(e)).left+n}function Ei(e,t){const n=e.getBoundingClientRect(),r=n.left+t.scrollLeft-on(e,n),i=n.top+t.scrollTop;return{x:r,y:i}}function ml(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e;const s=i==="fixed",o=fe(r),l=t?rn(t.floating):!1;if(r===o||l&&s)return n;let c={scrollLeft:0,scrollTop:0},f=le(1);const h=le(0),d=be(r);if((d||!d&&!s)&&((nt(r)!=="body"||vt(o))&&(c=sn(r)),d)){const g=Ie(r);f=Xe(r),h.x=g.x+r.clientLeft,h.y=g.y+r.clientTop}const y=o&&!d&&!s?Ei(o,c):le(0);return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-c.scrollLeft*f.x+h.x+y.x,y:n.y*f.y-c.scrollTop*f.y+h.y+y.y}}function vl(e){return Array.from(e.getClientRects())}function bl(e){const t=fe(e),n=sn(e),r=e.ownerDocument.body,i=Ye(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),s=Ye(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let o=-n.scrollLeft+on(e);const l=-n.scrollTop;return se(r).direction==="rtl"&&(o+=Ye(t.clientWidth,r.clientWidth)-i),{width:i,height:s,x:o,y:l}}const Qr=25;function wl(e,t){const n=Q(e),r=fe(e),i=n.visualViewport;let s=r.clientWidth,o=r.clientHeight,l=0,c=0;if(i){s=i.width,o=i.height;const h=hr();(!h||h&&t==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}const f=on(r);if(f<=0){const h=r.ownerDocument,d=h.body,y=getComputedStyle(d),g=h.compatMode==="CSS1Compat"&&parseFloat(y.marginLeft)+parseFloat(y.marginRight)||0,m=Math.abs(r.clientWidth-d.clientWidth-g);m<=Qr&&(s-=m)}else f<=Qr&&(s+=f);return{width:s,height:o,x:l,y:c}}function xl(e,t){const n=Ie(e,!0,t==="fixed"),r=n.top+e.clientTop,i=n.left+e.clientLeft,s=be(e)?Xe(e):le(1),o=e.clientWidth*s.x,l=e.clientHeight*s.y,c=i*s.x,f=r*s.y;return{width:o,height:l,x:c,y:f}}function Zr(e,t,n){let r;if(t==="viewport")r=wl(e,n);else if(t==="document")r=bl(fe(e));else if(ie(t))r=xl(t,n);else{const i=Li(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Wt(r)}function $i(e,t){const n=Se(e);return n===t||!ie(n)||Qe(n)?!1:se(n).position==="fixed"||$i(n,t)}function _l(e,t){const n=t.get(e);if(n)return n;let r=pt(e,[],!1).filter(l=>ie(l)&&nt(l)!=="body"),i=null;const s=se(e).position==="fixed";let o=s?Se(e):e;for(;ie(o)&&!Qe(o);){const l=se(o),c=fr(o);!c&&l.position==="fixed"&&(i=null),(s?!c&&!i:!c&&l.position==="static"&&!!i&&(i.position==="absolute"||i.position==="fixed")||vt(o)&&!c&&$i(e,o))?r=r.filter(h=>h!==o):i=l,o=Se(o)}return t.set(e,r),r}function Al(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const o=[...n==="clippingAncestors"?rn(t)?[]:_l(t,this._c):[].concat(n),r],l=Zr(t,o[0],i);let c=l.top,f=l.right,h=l.bottom,d=l.left;for(let y=1;y<o.length;y++){const g=Zr(t,o[y],i);c=Ye(g.top,c),f=Wn(g.right,f),h=Wn(g.bottom,h),d=Ye(g.left,d)}return{width:f-d,height:h-c,x:d,y:c}}function Ml(e){const{width:t,height:n}=Si(e);return{width:t,height:n}}function Cl(e,t,n){const r=be(t),i=fe(t),s=n==="fixed",o=Ie(e,!0,s,t);let l={scrollLeft:0,scrollTop:0};const c=le(0);function f(){c.x=on(i)}if(r||!r&&!s)if((nt(t)!=="body"||vt(i))&&(l=sn(t)),r){const g=Ie(t,!0,s,t);c.x=g.x+t.clientLeft,c.y=g.y+t.clientTop}else i&&f();s&&!r&&i&&f();const h=i&&!r&&!s?Ei(i,l):le(0),d=o.left+l.scrollLeft-c.x-h.x,y=o.top+l.scrollTop-c.y-h.y;return{x:d,y,width:o.width,height:o.height}}function En(e){return se(e).position==="static"}function ei(e,t){if(!be(e)||se(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return fe(e)===n&&(n=n.ownerDocument.body),n}function Ri(e,t){const n=Q(e);if(rn(e))return n;if(!be(e)){let i=Se(e);for(;i&&!Qe(i);){if(ie(i)&&!En(i))return i;i=Se(i)}return n}let r=ei(e,t);for(;r&&fl(r)&&En(r);)r=ei(r,t);return r&&Qe(r)&&En(r)&&!fr(r)?n:r||pl(e)||n}const Sl=async function(e){const t=this.getOffsetParent||Ri,n=this.getDimensions,r=await n(e.floating);return{reference:Cl(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Ll(e){return se(e).direction==="rtl"}const El={convertOffsetParentRelativeRectToViewportRelativeRect:ml,getDocumentElement:fe,getClippingRect:Al,getOffsetParent:Ri,getElementRects:Sl,getClientRects:vl,getDimensions:Ml,getScale:Xe,isElement:ie,isRTL:Ll};function ki(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function $l(e,t){let n=null,r;const i=fe(e);function s(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function o(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),s();const f=e.getBoundingClientRect(),{left:h,top:d,width:y,height:g}=f;if(l||t(),!y||!g)return;const m=Ot(d),v=Ot(i.clientWidth-(h+y)),_=Ot(i.clientHeight-(d+g)),x=Ot(h),M={rootMargin:-m+"px "+-v+"px "+-_+"px "+-x+"px",threshold:Ye(0,Wn(1,c))||1};let $=!0;function D(N){const oe=N[0].intersectionRatio;if(oe!==c){if(!$)return o();oe?o(!1,oe):r=setTimeout(()=>{o(!1,1e-7)},1e3)}oe===1&&!ki(f,e.getBoundingClientRect())&&o(),$=!1}try{n=new IntersectionObserver(D,{...M,root:i.ownerDocument})}catch{n=new IntersectionObserver(D,M)}n.observe(e)}return o(!0),s}function Rl(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,f=dr(e),h=i||s?[...f?pt(f):[],...t?pt(t):[]]:[];h.forEach(x=>{i&&x.addEventListener("scroll",n,{passive:!0}),s&&x.addEventListener("resize",n)});const d=f&&l?$l(f,n):null;let y=-1,g=null;o&&(g=new ResizeObserver(x=>{let[C]=x;C&&C.target===f&&g&&t&&(g.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var M;(M=g)==null||M.observe(t)})),n()}),f&&!c&&g.observe(f),t&&g.observe(t));let m,v=c?Ie(e):null;c&&_();function _(){const x=Ie(e);v&&!ki(v,x)&&n(),v=x,m=requestAnimationFrame(_)}return n(),()=>{var x;h.forEach(C=>{i&&C.removeEventListener("scroll",n),s&&C.removeEventListener("resize",n)}),d==null||d(),(x=g)==null||x.disconnect(),g=null,c&&cancelAnimationFrame(m)}}const kl=(e,t,n)=>{const r=new Map,i={platform:El,...n},s={...i.platform,_c:r};return ul(e,t,{...i,platform:s})};function Tl(e){const t=e.renderRoot.querySelector(".inline-container-wrapper"),n=e.renderRoot.querySelector("[popover]");return Rl(t,n,()=>{n.matches(":popover-open")&&kl(t,n,{strategy:"fixed"}).then(({x:i,y:s})=>{Object.assign(n.style,{left:`${i}px`,top:`${s}px`,width:`${t.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function Ti(e){e.renderRoot.querySelector("#eox-itemfilter-input-search").value="",_i({target:{value:""}},e)}function Dl(e,t){t.inlineMode&&e.stopPropagation()}function Pl(e){e.inlineMode&&(e.showDropdown=!0)}function Ol(e,t){t.inlineMode&&(e.stopPropagation(),t.showDropdown=!0)}function Bl(e,t){t.inlineMode&&e.key==="Escape"&&t.showDropdown&&(Ti(t),t.showDropdown=!1)}function jl(e,t){t.inlineMode&&e.target instanceof HTMLElement&&e.target.tagName!=="DROPDOWN-FORM"&&e.target.tagName!=="EOX-ITEMFILTER"&&t.showDropdown&&(Ti(t),t.showDropdown=!1)}function ce(e){if(!e)throw new Error("coord is required");if(!Array.isArray(e)){if(e.type==="Feature"&&e.geometry!==null&&e.geometry.type==="Point")return[...e.geometry.coordinates];if(e.type==="Point")return[...e.coordinates]}if(Array.isArray(e)&&e.length>=2&&!Array.isArray(e[0])&&!Array.isArray(e[1]))return[...e];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function je(e){if(Array.isArray(e))return e;if(e.type==="Feature"){if(e.geometry!==null)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function Ze(e){return e.type==="Feature"?e.geometry:e}function ti(e,t){return e.type==="FeatureCollection"?"FeatureCollection":e.type==="GeometryCollection"?"GeometryCollection":e.type==="Feature"&&e.geometry!==null?e.geometry.type:e.type}function re(e,t,n={}){if(!e)throw new Error("point is required");if(!t)throw new Error("polygon is required");const r=ce(e),i=Ze(t),s=i.type,o=t.bbox;let l=i.coordinates;if(o&&Il(r,o)===!1)return!1;s==="Polygon"&&(l=[l]);let c=!1;for(var f=0;f<l.length;++f){const h=ia(r,l[f]);if(h===0)return!n.ignoreBoundary;h&&(c=!0)}return c}function Il(e,t){return t[0]<=e[0]&&t[1]<=e[1]&&t[2]>=e[0]&&t[3]>=e[1]}class Di{constructor(t=[],n=Nl){if(this.data=t,this.length=this.data.length,this.compare=n,this.length>0)for(let r=(this.length>>1)-1;r>=0;r--)this._down(r)}push(t){this.data.push(t),this.length++,this._up(this.length-1)}pop(){if(this.length===0)return;const t=this.data[0],n=this.data.pop();return this.length--,this.length>0&&(this.data[0]=n,this._down(0)),t}peek(){return this.data[0]}_up(t){const{data:n,compare:r}=this,i=n[t];for(;t>0;){const s=t-1>>1,o=n[s];if(r(i,o)>=0)break;n[t]=o,t=s}n[t]=i}_down(t){const{data:n,compare:r}=this,i=this.length>>1,s=n[t];for(;t<i;){let o=(t<<1)+1,l=n[o];const c=o+1;if(c<this.length&&r(n[c],l)<0&&(o=c,l=n[c]),r(l,s)>=0)break;n[t]=l,t=o}n[t]=s}}function Nl(e,t){return e<t?-1:e>t?1:0}function Pi(e,t){return e.p.x>t.p.x?1:e.p.x<t.p.x?-1:e.p.y!==t.p.y?e.p.y>t.p.y?1:-1:1}function Fl(e,t){return e.rightSweepEvent.p.x>t.rightSweepEvent.p.x?1:e.rightSweepEvent.p.x<t.rightSweepEvent.p.x?-1:e.rightSweepEvent.p.y!==t.rightSweepEvent.p.y?e.rightSweepEvent.p.y<t.rightSweepEvent.p.y?1:-1:1}class ni{constructor(t,n,r,i){this.p={x:t[0],y:t[1]},this.featureId=n,this.ringId=r,this.eventId=i,this.otherEvent=null,this.isLeftEndpoint=null}isSamePoint(t){return this.p.x===t.p.x&&this.p.y===t.p.y}}function Hl(e,t){if(e.type==="FeatureCollection"){const n=e.features;for(let r=0;r<n.length;r++)ri(n[r],t)}else ri(e,t)}let Bt=0,jt=0,It=0;function ri(e,t){const n=e.type==="Feature"?e.geometry:e;let r=n.coordinates;(n.type==="Polygon"||n.type==="MultiLineString")&&(r=[r]),n.type==="LineString"&&(r=[[r]]);for(let i=0;i<r.length;i++)for(let s=0;s<r[i].length;s++){let o=r[i][s][0],l=null;jt=jt+1;for(let c=0;c<r[i][s].length-1;c++){l=r[i][s][c+1];const f=new ni(o,Bt,jt,It),h=new ni(l,Bt,jt,It+1);f.otherEvent=h,h.otherEvent=f,Pi(f,h)>0?(h.isLeftEndpoint=!0,f.isLeftEndpoint=!1):(f.isLeftEndpoint=!0,h.isLeftEndpoint=!1),t.push(f),t.push(h),o=l,It=It+1}}Bt=Bt+1}class zl{constructor(t){this.leftSweepEvent=t,this.rightSweepEvent=t.otherEvent}}function ql(e,t){if(e===null||t===null||e.leftSweepEvent.ringId===t.leftSweepEvent.ringId&&(e.rightSweepEvent.isSamePoint(t.leftSweepEvent)||e.rightSweepEvent.isSamePoint(t.leftSweepEvent)||e.rightSweepEvent.isSamePoint(t.rightSweepEvent)||e.leftSweepEvent.isSamePoint(t.leftSweepEvent)||e.leftSweepEvent.isSamePoint(t.rightSweepEvent)))return!1;const n=e.leftSweepEvent.p.x,r=e.leftSweepEvent.p.y,i=e.rightSweepEvent.p.x,s=e.rightSweepEvent.p.y,o=t.leftSweepEvent.p.x,l=t.leftSweepEvent.p.y,c=t.rightSweepEvent.p.x,f=t.rightSweepEvent.p.y,h=(f-l)*(i-n)-(c-o)*(s-r),d=(c-o)*(r-l)-(f-l)*(n-o),y=(i-n)*(r-l)-(s-r)*(n-o);if(h===0)return!1;const g=d/h,m=y/h;if(g>=0&&g<=1&&m>=0&&m<=1){const v=n+g*(i-n),_=r+g*(s-r);return[v,_]}return!1}function Wl(e,t){t=t||!1;const n=[],r=new Di([],Fl);for(;e.length;){const i=e.pop();if(i.isLeftEndpoint){const s=new zl(i);for(let o=0;o<r.data.length;o++){const l=r.data[o];if(t&&l.leftSweepEvent.featureId===i.featureId)continue;const c=ql(s,l);c!==!1&&n.push(c)}r.push(s)}else i.isLeftEndpoint===!1&&r.pop()}return n}function Ul(e,t){const n=new Di([],Pi);return Hl(e,n),Wl(n,t)}var Kl=Ul;function an(e,t,n={}){const{removeDuplicates:r=!0,ignoreSelfIntersections:i=!0}=n;let s=[];e.type==="FeatureCollection"?s=s.concat(e.features):e.type==="Feature"?s.push(e):(e.type==="LineString"||e.type==="Polygon"||e.type==="MultiLineString"||e.type==="MultiPolygon")&&s.push(Je(e)),t.type==="FeatureCollection"?s=s.concat(t.features):t.type==="Feature"?s.push(t):(t.type==="LineString"||t.type==="Polygon"||t.type==="MultiLineString"||t.type==="MultiPolygon")&&s.push(Je(t));const o=Kl(ne(s),i);let l=[];if(r){const c={};o.forEach(f=>{const h=f.join(",");c[h]||(c[h]=!0,l.push(f))})}else l=o;return ne(l.map(c=>ft(c)))}function pr(e,t,n){if(e!==null)for(var r,i,s,o,l,c,f,h=0,d=0,y,g=e.type,m=g==="FeatureCollection",v=g==="Feature",_=m?e.features.length:1,x=0;x<_;x++){f=m?e.features[x].geometry:v?e.geometry:e,y=f?f.type==="GeometryCollection":!1,l=y?f.geometries.length:1;for(var C=0;C<l;C++){var M=0,$=0;if(o=y?f.geometries[C]:f,o!==null){c=o.coordinates;var D=o.type;switch(h=0,D){case null:break;case"Point":if(t(c,d,x,M,$)===!1)return!1;d++,M++;break;case"LineString":case"MultiPoint":for(r=0;r<c.length;r++){if(t(c[r],d,x,M,$)===!1)return!1;d++,D==="MultiPoint"&&M++}D==="LineString"&&M++;break;case"Polygon":case"MultiLineString":for(r=0;r<c.length;r++){for(i=0;i<c[r].length-h;i++){if(t(c[r][i],d,x,M,$)===!1)return!1;d++}D==="MultiLineString"&&M++,D==="Polygon"&&$++}D==="Polygon"&&M++;break;case"MultiPolygon":for(r=0;r<c.length;r++){for($=0,i=0;i<c[r].length;i++){for(s=0;s<c[r][i].length-h;s++){if(t(c[r][i][s],d,x,M,$)===!1)return!1;d++}$++}M++}break;case"GeometryCollection":for(r=0;r<o.geometries.length;r++)if(pr(o.geometries[r],t)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function ln(e,t){if(e.type==="Feature")t(e,0);else if(e.type==="FeatureCollection")for(var n=0;n<e.features.length&&t(e.features[n],n)!==!1;n++);}function Vl(e,t,n){var r=n;return ln(e,function(i,s){s===0&&n===void 0?r=i:r=t(r,i,s)}),r}function Gl(e,t){var n,r,i,s,o,l,c,f,h,d,y=0,g=e.type==="FeatureCollection",m=e.type==="Feature",v=g?e.features.length:1;for(n=0;n<v;n++){for(l=g?e.features[n].geometry:m?e.geometry:e,f=g?e.features[n].properties:m?e.properties:{},h=g?e.features[n].bbox:m?e.bbox:void 0,d=g?e.features[n].id:m?e.id:void 0,c=l?l.type==="GeometryCollection":!1,o=c?l.geometries.length:1,i=0;i<o;i++){if(s=c?l.geometries[i]:l,s===null){if(t(null,y,f,h,d)===!1)return!1;continue}switch(s.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(t(s,y,f,h,d)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<s.geometries.length;r++)if(t(s.geometries[r],y,f,h,d)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}y++}}function Ne(e,t){Gl(e,function(n,r,i,s,o){var l=n===null?null:n.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return t(Je(n,i,{bbox:s,id:o}),r,0)===!1?!1:void 0}var c;switch(l){case"MultiPoint":c="Point";break;case"MultiLineString":c="LineString";break;case"MultiPolygon":c="Polygon";break}for(var f=0;f<n.coordinates.length;f++){var h=n.coordinates[f],d={type:c,coordinates:h};if(t(Je(d,i),r,f)===!1)return!1}})}function Kn(e,t={}){const n=Ze(e);switch(!t.properties&&e.type==="Feature"&&(t.properties=e.properties),n.type){case"Polygon":return Yl(n,t);case"MultiPolygon":return Xl(n,t);default:throw new Error("invalid poly")}}function Yl(e,t={}){const r=Ze(e).coordinates,i=t.properties?t.properties:e.type==="Feature"?e.properties:{};return Oi(r,i)}function Xl(e,t={}){const r=Ze(e).coordinates,i=t.properties?t.properties:e.type==="Feature"?e.properties:{},s=[];return r.forEach(o=>{s.push(Oi(o,i))}),ne(s)}function Oi(e,t){return e.length>1?oa(e,t):ht(e[0],t)}function Jl(e,t,{ignoreSelfIntersections:n=!0}={ignoreSelfIntersections:!0}){let r=!0;return Ne(e,i=>{Ne(t,s=>{if(r===!1)return!1;r=Ql(i.geometry,s.geometry,n)})}),r}function Ql(e,t,n){switch(e.type){case"Point":switch(t.type){case"Point":return!nc(e.coordinates,t.coordinates);case"LineString":return!ii(t,e);case"Polygon":return!re(e,t)}break;case"LineString":switch(t.type){case"Point":return!ii(e,t);case"LineString":return!Zl(e,t,n);case"Polygon":return!si(t,e,n)}break;case"Polygon":switch(t.type){case"Point":return!re(t,e);case"LineString":return!si(e,t,n);case"Polygon":return!ec(t,e,n)}}return!1}function ii(e,t){for(let n=0;n<e.coordinates.length-1;n++)if(tc(e.coordinates[n],e.coordinates[n+1],t.coordinates))return!0;return!1}function Zl(e,t,n){return an(e,t,{ignoreSelfIntersections:n}).features.length>0}function si(e,t,n){for(const i of t.coordinates)if(re(i,e))return!0;return an(t,Kn(e),{ignoreSelfIntersections:n}).features.length>0}function ec(e,t,n){for(const i of e.coordinates[0])if(re(i,t))return!0;for(const i of t.coordinates[0])if(re(i,e))return!0;return an(Kn(e),Kn(t),{ignoreSelfIntersections:n}).features.length>0}function tc(e,t,n){const r=n[0]-e[0],i=n[1]-e[1],s=t[0]-e[0],o=t[1]-e[1];return r*o-i*s!==0?!1:Math.abs(s)>=Math.abs(o)?s>0?e[0]<=n[0]&&n[0]<=t[0]:t[0]<=n[0]&&n[0]<=e[0]:o>0?e[1]<=n[1]&&n[1]<=t[1]:t[1]<=n[1]&&n[1]<=e[1]}function nc(e,t){return e[0]===t[0]&&e[1]===t[1]}function rc(e,t,{ignoreSelfIntersections:n=!0}={}){let r=!1;return Ne(e,i=>{Ne(t,s=>{if(r===!0)return!0;r=!Jl(i.geometry,s.geometry,{ignoreSelfIntersections:n})})}),r}var ic=rc;function ae(e,t={}){if(e.bbox!=null&&t.recompute!==!0)return e.bbox;const n=[1/0,1/0,-1/0,-1/0];return pr(e,r=>{n[0]>r[0]&&(n[0]=r[0]),n[1]>r[1]&&(n[1]=r[1]),n[2]<r[0]&&(n[2]=r[0]),n[3]<r[1]&&(n[3]=r[1])}),n}function Ut(e,t,n={}){const r=ce(e),i=je(t);for(let s=0;s<i.length-1;s++){let o=!1;if(n.ignoreEndVertices&&(s===0&&(o="start"),s===i.length-2&&(o="end"),s===0&&s+1===i.length-1&&(o="both")),sc(i[s],i[s+1],r,o,typeof n.epsilon>"u"?null:n.epsilon))return!0}return!1}function sc(e,t,n,r,i){const s=n[0],o=n[1],l=e[0],c=e[1],f=t[0],h=t[1],d=n[0]-l,y=n[1]-c,g=f-l,m=h-c,v=d*m-y*g;if(i!==null){if(Math.abs(v)>i)return!1}else if(v!==0)return!1;if(Math.abs(g)===Math.abs(m)&&Math.abs(g)===0)return r?!1:n[0]===e[0]&&n[1]===e[1];if(r){if(r==="start")return Math.abs(g)>=Math.abs(m)?g>0?l<s&&s<=f:f<=s&&s<l:m>0?c<o&&o<=h:h<=o&&o<c;if(r==="end")return Math.abs(g)>=Math.abs(m)?g>0?l<=s&&s<f:f<s&&s<=l:m>0?c<=o&&o<h:h<o&&o<=c;if(r==="both")return Math.abs(g)>=Math.abs(m)?g>0?l<s&&s<f:f<s&&s<l:m>0?c<o&&o<h:h<o&&o<c}else return Math.abs(g)>=Math.abs(m)?g>0?l<=s&&s<=f:f<=s&&s<=l:m>0?c<=o&&o<=h:h<=o&&o<=c;return!1}function $n(e){var t;if(e.bbox)t=e.bbox;else if(Array.isArray(e)&&e.length===4)t=e;else if(Array.isArray(e)&&e.length===6)t=[e[0],e[1],e[3],e[4]];else if(e.type==="Feature")t=ae(e);else if(e.type==="FeatureCollection")t=ae(e);else throw new Error("invalid geojson");return{minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]}}var oc=class{constructor(e=9){this.tree=new sa(e),this.tree.toBBox=$n}insert(e){if(e.type!=="Feature")throw new Error("invalid feature");return e.bbox=e.bbox?e.bbox:ae(e),this.tree.insert(e),this}load(e){var t=[];return Array.isArray(e)?e.forEach(function(n){if(n.type!=="Feature")throw new Error("invalid features");n.bbox=n.bbox?n.bbox:ae(n),t.push(n)}):ln(e,function(n){if(n.type!=="Feature")throw new Error("invalid features");n.bbox=n.bbox?n.bbox:ae(n),t.push(n)}),this.tree.load(t),this}remove(e,t){if(e.type!=="Feature")throw new Error("invalid feature");return e.bbox=e.bbox?e.bbox:ae(e),this.tree.remove(e,t),this}clear(){return this.tree.clear(),this}search(e){var t=this.tree.search($n(e));return ne(t)}collides(e){return this.tree.collides($n(e))}all(){const e=this.tree.all();return ne(e)}toJSON(){return this.tree.toJSON()}fromJSON(e){return this.tree.fromJSON(e),this}};function Bi(e){return new oc(e)}function ac(e,t){if(t=t??{},!aa(t))throw new Error("options is invalid");var n=t.precision,r=t.coordinates,i=t.mutate;if(n=n==null||isNaN(n)?6:n,r=r==null||isNaN(r)?3:r,!e)throw new Error("<geojson> is required");if(typeof n!="number")throw new Error("<precision> must be a number");if(typeof r!="number")throw new Error("<coordinates> must be a number");(i===!1||i===void 0)&&(e=JSON.parse(JSON.stringify(e)));var s=Math.pow(10,n);return pr(e,function(o){lc(o,s,r)}),e}function lc(e,t,n){e.length>n&&e.splice(n,e.length);for(var r=0;r<e.length;r++)e[r]=Math.round(e[r]*t)/t;return e}function cc(e){if(!e)throw new Error("geojson is required");const t=[];return Ne(e,n=>{uc(n,t)}),ne(t)}function uc(e,t){let n=[];const r=e.geometry;if(r!==null){switch(r.type){case"Polygon":n=je(r);break;case"LineString":n=[je(r)]}n.forEach(i=>{fc(i,e.properties).forEach(o=>{o.id=t.length,t.push(o)})})}}function fc(e,t){const n=[];return e.reduce((r,i)=>{const s=ht([r,i],t);return s.bbox=hc(r,i),n.push(s),i}),n}function hc(e,t){const n=e[0],r=e[1],i=t[0],s=t[1],o=n<i?n:i,l=r<s?r:s,c=n>i?n:i,f=r>s?r:s;return[o,l,c,f]}function Rn(e,t,n={}){var r=ce(e),i=ce(t),s=Ge(i[1]-r[1]),o=Ge(i[0]-r[0]),l=Ge(r[1]),c=Ge(i[1]),f=Math.pow(Math.sin(s/2),2)+Math.pow(Math.sin(o/2),2)*Math.cos(l)*Math.cos(c);return la(2*Math.atan2(Math.sqrt(f),Math.sqrt(1-f)),n.units)}var dc=Object.defineProperty,pc=Object.defineProperties,gc=Object.getOwnPropertyDescriptors,oi=Object.getOwnPropertySymbols,yc=Object.prototype.hasOwnProperty,mc=Object.prototype.propertyIsEnumerable,ai=(e,t,n)=>t in e?dc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,vc=(e,t)=>{for(var n in t||(t={}))yc.call(t,n)&&ai(e,n,t[n]);if(oi)for(var n of oi(t))mc.call(t,n)&&ai(e,n,t[n]);return e},bc=(e,t)=>pc(e,gc(t));function wc(e,t,n={}){if(!e||!t)throw new Error("lines and inputPoint are required arguments");const r=ce(t);let i=ft([1/0,1/0],{lineStringIndex:-1,segmentIndex:-1,totalDistance:-1,lineDistance:-1,segmentDistance:-1,pointDistance:1/0,multiFeatureIndex:-1,index:-1,location:-1,dist:1/0}),s=0,o=0,l=-1;return Ne(e,function(c,f,h){l!==h&&(l=h,o=0);const d=je(c);for(let y=0;y<d.length-1;y++){const g=ft(d[y]),m=ce(g),v=ft(d[y+1]),_=ce(v),x=Rn(g,v,n);let C,M;_[0]===r[0]&&_[1]===r[1]?[C,M]=[_,!0]:m[0]===r[0]&&m[1]===r[1]?[C,M]=[m,!1]:[C,M]=Ac(m,_,r);const $=Rn(t,C,n);if($<i.properties.pointDistance){const D=Rn(g,C,n);i=ft(C,{lineStringIndex:h,segmentIndex:M?y+1:y,totalDistance:s+D,lineDistance:o+D,segmentDistance:D,pointDistance:$,multiFeatureIndex:-1,index:-1,location:-1,dist:1/0}),i.properties=bc(vc({},i.properties),{multiFeatureIndex:i.properties.lineStringIndex,index:i.properties.segmentIndex,location:i.properties.totalDistance,dist:i.properties.pointDistance})}s+=x,o+=x}}),i}function Oe(e,t){const[n,r,i]=e,[s,o,l]=t;return n*s+r*o+i*l}function ut(e,t){const[n,r,i]=e,[s,o,l]=t;return[r*l-i*o,i*s-n*l,n*o-r*s]}function xc(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2))}function li(e){const t=xc(e);return[e[0]/t,e[1]/t,e[2]/t]}function kn(e){const t=Ge(e[1]),n=Ge(e[0]);return[Math.cos(t)*Math.cos(n),Math.cos(t)*Math.sin(n),Math.sin(t)]}function _c(e){const[t,n,r]=e,i=Math.min(Math.max(r,-1),1),s=zr(Math.asin(i));return[zr(Math.atan2(n,t)),s]}function Ac(e,t,n){const r=kn(e),i=kn(t),s=kn(n),o=ut(r,i);if(o[0]===0&&o[1]===0&&o[2]===0)return Oe(r,i)>0?[[...t],!0]:[[...n],!1];const l=ut(o,s);if(l[0]===0&&l[1]===0&&l[2]===0)return[[...t],!0];const c=ut(l,o),f=li(c),h=[-f[0],-f[1],-f[2]],d=Oe(s,f)>Oe(s,h)?f:h,y=li(o),g=Oe(ut(r,d),y),m=Oe(ut(d,i),y);return g>=0&&m>=0?[_c(d),!1]:Oe(r,s)>Oe(i,s)?[[...e],!1]:[[...t],!0]}function Mc(e,t){if(!e)throw new Error("line is required");if(!t)throw new Error("splitter is required");const n=ti(e),r=ti(t);if(n!=="LineString")throw new Error("line must be LineString");if(r==="FeatureCollection")throw new Error("splitter cannot be a FeatureCollection");if(r==="GeometryCollection")throw new Error("splitter cannot be a GeometryCollection");var i=ac(t,{precision:7});switch(e.type!=="Feature"&&(e=Je(e)),r){case"Point":return Vn(e,i);case"MultiPoint":return ci(e,i);case"LineString":case"MultiLineString":case"Polygon":case"MultiPolygon":return ci(e,an(e,i,{ignoreSelfIntersections:!0}))}}function ci(e,t){var n=[],r=Bi();return Ne(t,function(i){if(n.forEach(function(l,c){l.id=c}),!n.length)n=Vn(e,i).features,r.load(ne(n));else{var s=r.search(i);if(s.features.length){var o=ji(i,s);n=n.filter(function(l){return l.id!==o.id}),r.remove(o),ln(Vn(o,i),function(l){n.push(l),r.insert(l)})}}}),ne(n)}function Vn(e,t){var n=[],r=je(e)[0],i=je(e)[e.geometry.coordinates.length-1];if(Tn(r,ce(t))||Tn(i,ce(t)))return ne([e]);var s=Bi(),o=cc(e);s.load(o);var l=s.search(t);if(!l.features.length)return ne([e]);var c=ji(t,l),f=[r],h=Vl(o,function(d,y,g){var m=je(y)[1],v=ce(t);return g===c.id?(d.push(v),n.push(ht(d)),Tn(v,m)?[v]:[v,m]):(d.push(m),d)},f);return h.length>1&&n.push(ht(h)),ne(n)}function ji(e,t){if(!t.features.length)throw new Error("lines must contain features");if(t.features.length===1)return t.features[0];var n,r=1/0;return ln(t,function(i){var s=wc(i,e),o=s.properties.pointDistance;o<r&&(n=i,r=o)}),n}function Tn(e,t){return e[0]===t[0]&&e[1]===t[1]}function Cc(e,t){var n=Ze(e),r=Ze(t),i=n.type,s=r.type;switch(i){case"Point":switch(s){case"MultiPoint":return Sc(n,r);case"LineString":return Ut(n,r,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return re(n,r,{ignoreBoundary:!0});default:throw new Error("feature2 "+s+" geometry not supported")}case"MultiPoint":switch(s){case"MultiPoint":return Lc(n,r);case"LineString":return Ec(n,r);case"Polygon":case"MultiPolygon":return $c(n,r);default:throw new Error("feature2 "+s+" geometry not supported")}case"LineString":switch(s){case"LineString":return Rc(n,r);case"Polygon":case"MultiPolygon":return Tc(n,r);default:throw new Error("feature2 "+s+" geometry not supported")}case"Polygon":switch(s){case"Polygon":case"MultiPolygon":return Dc(n,r);default:throw new Error("feature2 "+s+" geometry not supported")}default:throw new Error("feature1 "+i+" geometry not supported")}}function Sc(e,t){var n,r=!1;for(n=0;n<t.coordinates.length;n++)if(Ni(t.coordinates[n],e.coordinates)){r=!0;break}return r}function Lc(e,t){for(var n=0;n<e.coordinates.length;n++){for(var r=!1,i=0;i<t.coordinates.length;i++)Ni(e.coordinates[n],t.coordinates[i])&&(r=!0);if(!r)return!1}return!0}function Ec(e,t){for(var n=!1,r=0;r<e.coordinates.length;r++){if(!Ut(e.coordinates[r],t))return!1;n||(n=Ut(e.coordinates[r],t,{ignoreEndVertices:!0}))}return n}function $c(e,t){for(var n=!0,r=!1,i=0;i<e.coordinates.length;i++){if(r=re(e.coordinates[i],t),!r){n=!1;break}r=re(e.coordinates[i],t,{ignoreBoundary:!0})}return n&&r}function Rc(e,t){for(var n=0;n<e.coordinates.length;n++)if(!Ut(e.coordinates[n],t))return!1;return!0}function kc(e,t){const n=e.coordinates,r=[];for(let i=0;i<n.length-1;i++){const s=ht([n[i],n[i+1]]),o=Mc(s,Je(t));o.features.length===0?r.push(s):r.push(...o.features)}return ne(r)}function Tc(e,t){const n=ae(t),r=ae(e);if(!Ii(n,r))return!1;for(const o of e.coordinates)if(!re(o,t))return!1;let i=!1;const s=kc(e,t);for(const o of s.features){const l=Pc(o.geometry.coordinates[0],o.geometry.coordinates[1]);if(!re(l,t))return!1;!i&&re(l,t,{ignoreBoundary:!0})&&(i=!0)}return i}function Dc(e,t){var n=ae(e),r=ae(t);if(!Ii(r,n))return!1;for(var i=0;i<e.coordinates[0].length;i++)if(!re(e.coordinates[0][i],t))return!1;return!0}function Ii(e,t){return!(e[0]>t[0]||e[2]<t[2]||e[1]>t[1]||e[3]<t[3])}function Ni(e,t){return e[0]===t[0]&&e[1]===t[1]}function Pc(e,t){return[(e[0]+t[0])/2,(e[1]+t[1])/2]}var Oc=Cc;const Bc=(e,t)=>t?ic(e,t):!0,jc=(e,t)=>t?Oc(e,t):!0;function Ic(e,t="highlight",n="title"){const r=(i,s=[])=>{let o="",l=0,c=0;return s.forEach((f,h)=>{const d=f[1]+1;h&&c>f[0]||(c=f[1],o+=[i.substring(l,f[0]),`<mark class="${t}">`,i.substring(f[0],d),"</mark>"].join(""),l=d)}),o+=i.substring(l),o};return e.filter(({matches:i})=>i&&i.length).map(({item:i,matches:s})=>{const o={...i};return s.forEach(l=>{if(l.key!==n)return;const c=r(Kt(l.value),Wc(l.indices));o.highlightedText=c}),o})}let Fi;const Nc=(e,t)=>{Fi=new ur(e,{threshold:.4,distance:50,ignoreLocation:!0,includeMatches:!0,useExtendedSearch:!0,...t})},Fc=async(e,t,n)=>{const r=Object.entries(t).filter(([,l])=>l.type==="text"||l.type==="select"||l.type==="multiselect").reduce((l,[c,f])=>{const h="$or",d=[],y=(g,m)=>{const v={};f.type==="text"?v[g]=`${m}`:v[c]=`="${g}"`,d.push(v)};return Object.entries(f.state).filter(([,g])=>g).forEach(([g,m])=>y(g,m)),d.length>0&&l.push({[h]:d}),l},[]);let i;if(!(r.length>0)&&n.matchAllWhenEmpty!==!1)i=e;else{const l={$and:[...r]},c=Fi.search(l);i=n.enableHighlighting?Ic(c,"highlight",n.titleProperty):c.map(f=>f.item)}const s=Object.entries(t).filter(([,l])=>l.type==="range").reduce((l,[c,f])=>{const h=d=>f.format==="date"?k(d).valueOf():parseFloat(d);return l[c]={min:h(f.state.min),max:h(f.state.max),format:f.format},l},{});if(Object.keys(s).length>0){const l=[];for(let c=0;c<i.length;c++){const f={};for(const[h,d]of Object.entries(s)){const y=m=>d.format==="date"?k(m).valueOf():parseFloat(m),g=q(h,i[c]);g?Array.isArray(g)?f[h]=s[h].min<=y(g[1])&&y(g[0])<=s[h].max:y(g)>=s[h].min&&y(g)<=s[h].max?f[h]=!0:f[h]=!1:f[h]=!0}Object.values(f).every(h=>!!h)&&l.push(i[c])}i=[...l]}const o=Object.entries(t).filter(([,l])=>l.type==="spatial").reduce((l,[c,f])=>(l[c]={geometry:f.state.geometry,mode:f.state.mode},l),{});if(Object.values(o).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let c=0;c<i.length;c++){const f={};for(const h of Object.keys(o)){const d=q(h,i[c]),y=o[h].mode||"within";d&&(y==="within"?jc(d,o[h].geometry):Bc(d,o[h].geometry))?f[h]=!0:f[h]=!1}Object.values(f).every(h=>!!h)&&l.push(i[c])}i=[...l]}return i};function Hc(e,t){return[{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}},{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...e&&{format:"GeoJSON"},...e&&{url:t}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]}]}function cn(e){if(!e.dirty)return null;switch(e.type){case"multiselect":for(const n in e.state)e.state.hasOwnProperty(n)&&(e.state[n]=!1);break;case"range":e.state.min=e.min,e.state.max=e.max;break;case"select":for(const n in e.state)e.state.hasOwnProperty(n)&&(e.state[n]=!1);break;case"spatial":e.state.geometry=void 0;break;case"text":e.keys.forEach(n=>{e.state[n]=void 0});break}return delete e.stringifiedState,delete e.dirty,e}function ui(e,t){return e*2+t}function zc(e){return Object.keys(e).map(t=>({title:S`${e[t].title||e[t].key}:
      ${e[t].stringifiedState}`,key:t})).filter(t=>e[t.key].dirty)}function Gn(e){return Object.values(e).map(t=>t.dirty).filter(t=>t).length>0}async function qc(e,t,n){const r=n.externalFilter(e,t),i=typeof r=="string"||r instanceof String?r:r.url,s=typeof r=="object"&&"fetchFn"in r?await r.fetchFn(i):await fetch(i).then(async o=>await o.json());return r.key?q(r.key,s):s}function Hi(e,t,n){let r;if(e.detail?r=e.detail.target:r=e.target,r!=null&&r.classList.contains("details-filter")){if(!r.open||t!=null&&t.expandMultipleFilters)return;n.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(i=>{const s=i.shadowRoot.querySelector(".details-filter");s&&s!==r&&s.removeAttribute("open")})}else{if(!(r!=null&&r.open)||t!=null&&t.expandMultipleResults)return;n.querySelectorAll("details").forEach(i=>{i!==r&&i.removeAttribute("open")})}}function q(e,t){return typeof e=="function"?e(t):e!=null&&e.includes(".")?e.split(".").reduce((n,r)=>n&&n[r],t):t[e]}function Kt(e){return e.split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}function Wc(e,{mergeAdjacent:t=!1}={}){if(!Array.isArray(e))return[];const n=e.map(([i,s])=>i<=s?[i,s]:[s,i]).sort((i,s)=>i[0]-s[0]||i[1]-s[1]),r=[];for(const[i,s]of n){if(r.length===0){r.push([i,s]);continue}const o=r[r.length-1];(t?i<=o[1]+1:i<=o[1])?s>o[1]&&(o[1]=s):r.push([i,s])}return r}function Vt(e){return e.format==="date"}var T,zi,Yn,Xn,qi,Jn,Qn,Wi,Zn,Ui,Ki;class Uc extends ue{constructor(){super();K(this,T);this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=R(this,T,qi).bind(this),this._handleKeyDown=R(this,T,Jn).bind(this)}static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}set showDropdown(n){this.renderRoot.querySelector("[popover]").togglePopover(n)}get showDropdown(){var n;return(n=this.renderRoot.querySelector("[popover]"))==null?void 0:n.matches(":popover-open")}connectedCallback(){super.connectedCallback(),this.inlineMode&&R(this,T,Yn).call(this)}disconnectedCallback(){this.inlineMode&&R(this,T,Xn).call(this),super.disconnectedCallback()}_overlayCleanup(){}updateInline(){this.inlineMode&&this.requestUpdate()}updated(n){n.has("inlineMode")&&(this.inlineMode?R(this,T,Yn).call(this):R(this,T,Xn).call(this))}render(){return S`
      <style>
        ${!this.unstyled&&sr}
      </style>
      ${this.inlineMode?S`
            <div
              class="inline-container-wrapper"
              @click="${R(this,T,Qn)}"
            >
              <div class="inline-container square border" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips
                      .items=${zc(this.filters)}
                      .controller=${{remove:n=>R(this,T,Ui).call(this,n)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${I(Gn(this.filters),()=>S`
                      <button
                        class="chip-close circle transparent small no-margin"
                        @click=${()=>this.dispatchEvent(new CustomEvent("reset"))}
                      >
                        ${this.unstyled?"x":S`
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
                  class="input-container field no-margin ${Gn(this.filters)?"dirty-filter-input":""}"
                >
                  <input
                    autocomplete="off"
                    id="eox-itemfilter-input-search"
                    type="text"
                    @click="${R(this,T,Qn)}"
                    @focus="${R(this,T,Wi)}"
                    @input="${R(this,T,Ki)}"
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
                  @keydown="${R(this,T,Jn)}"
                  @click="${R(this,T,Zn)}"
                  @focus="${R(this,T,Zn)}"
                >
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `:S`<slot name="section"></slot>`}
    `}}T=new WeakSet,zi=function(){setTimeout(()=>this._overlayCleanup=Tl(this))},Yn=function(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),R(this,T,zi).call(this)},Xn=function(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()},qi=function(n){jl(n,this)},Jn=function(n){Bl(n,this)},Qn=function(n){Ol(n,this)},Wi=function(){Pl(this)},Zn=function(n){Dl(n,this)},Ui=function(n){Za(n,this)},Ki=function(n){_i(n,this)};customElements.define("eox-itemfilter-container",Uc);function Kc(e){const t=e.renderRoot.querySelector("input[type='text']");t.value="",cn(e.filterObject),e.requestUpdate()}function Vc(e){const t=e.renderRoot.querySelector("input[type='text']");e.isValid=t.checkValidity(),e.filterObject.keys.forEach(n=>{e.filterObject.state[n]=t.value}),e.filterObject.dirty=!0,e.filterObject.stringifiedState=t.value,e.dispatchEvent(new CustomEvent("filter")),t.value===""&&e.reset()}const Gc=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,resultSorting:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),Dn=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","resultSorting","expandMultipleFilters","expandResults","expandMultipleResults","items"],et="YYYY-MM-DD";function Yc(e){if(cn(e.filterObject),e.filterObject){const t=e.filterObject.min,n=e.filterObject.max,r=e.querySelector("eox-timecontrol");r&&r.dateChange([k(t).format(),k(n).format()],r);const i=e.querySelector("tc-range-slider");i&&(i.value1!==t&&(i.value1=t),i.value2!==n&&(i.value2=n))}e.requestUpdate()}function fi(e,t){const n=g=>Vt(t.filterObject)?k(g).valueOf():parseFloat(g),r=n(e.detail.values[0]),i=n(e.detail.values[1]),s=n(t.filterObject.state.min),o=n(t.filterObject.state.max),l=n(t.filterObject.min),c=n(t.filterObject.max);let f,h,d,y;Vt(t.filterObject)?(f=k(r).isSame(k(l),"day"),h=k(i).isSame(k(c),"day"),d=k(r).isSame(k(s),"day"),y=k(i).isSame(k(o),"day")):(f=r===l,h=i===c,d=r===s,y=i===o),!(d&&y)&&([t.filterObject.state.min,t.filterObject.state.max]=[r,i],f&&h?(delete t.filterObject.dirty,delete t.filterObject.stringifiedState):t.filterObject.dirty=!0,t.filterObject.dirty&&(t.filterObject.stringifiedState=t.filterObject.format==="date"?`${k(r).format(et)} - ${k(i).format(et)}`:`${r} - ${i}`),t.dispatchEvent(new CustomEvent("filter")),f&&h?t.reset():t.requestUpdate())}function Xc(e,t,n){const r=n.filterObject.state[e],i=Vt(n.filterObject)?k(r).format(et):r;return S`<div class="range-${t}">${i}</div>`}function Jc(e){Qc(-1,e),cn(e.filterObject),e.requestUpdate()}function Qc(e,t){t.selectedItems=[],gr(t),Gi(t)}function Vi(e,t){const n=t.selectedItems.indexOf(e);n>=0?t.selectedItems=t.selectedItems.filter((r,i)=>i!==n):t.type==="multiselect"?t.selectedItems=[...t.selectedItems,e]:(t.selectedItems=[e],t.showSuggestions=!1),gr(t),Gi(t)}function Zc(e,t){e.target instanceof HTMLInputElement&&(t.query=e.target.value,t.showSuggestions=!0)}function eu(e,t){switch(e.key){case"ArrowDown":t.highlightedIndex=Math.min(t.highlightedIndex+1,t.filteredSuggestions.length-1);break;case"ArrowUp":t.highlightedIndex=Math.max(t.highlightedIndex-1,0);break;case"Enter":t.highlightedIndex>=0&&Vi(t.filteredSuggestions[t.highlightedIndex],t);break;case"Escape":t.showSuggestions=!1;break}}function tu(e,t){(e.has("suggestions")||e.has("query"))&&gr(t)}function nu(e,t){var r;const n=((r=e.filterObject)==null?void 0:r.sort)||((i,s)=>i.toString().localeCompare(s.toString(),void 0,{numeric:!0}));return t.sort(n).map(i=>i)}function gr(e){var r,i,s;const t=(((r=e.filterObject)==null?void 0:r.filterKeys)||e.suggestions).map(o=>`${o}`);let n=t;e.query&&(n=new ur(t,{threshold:.4,ignoreLocation:!0}).search(e.query).map(l=>l.item)),e.filteredSuggestions=(i=e.filterObject)!=null&&i.filterKeys?n:nu(e,n),(s=e.filterObject)!=null&&s.filterKeys&&(e.filterObject.state=t.reduce((o,l)=>(l in o||(o[l]=void 0),o),e.filterObject.state)),e.highlightedIndex=-1}function Gi(e){Object.keys(e.filterObject.state).forEach(t=>{e.filterObject.state[t]=e.selectedItems.includes(t)}),e.filterObject.stringifiedState=Object.keys(e.filterObject.state).filter(t=>e.filterObject.state[t]).join(", ")||"",e.filterObject.dirty=e.filterObject.stringifiedState.length>0,e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}function ru(e){cn(e.filterObject),e.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),e.requestUpdate()}function iu(e){e.renderRoot.querySelector("#eox-map").innerHTML="",Yi(e)}function su(e,t){t.filterObject.state.mode=e;const n=new CustomEvent("filter",{detail:{[t.filterObject.key]:{}}});t.dispatchEvent(n)}function Yi(e){const t=e.renderRoot.querySelector("#eox-map");t.innerHTML===""&&(t.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const n=e.geometry&&ou(e.geometry),r=Hc(e.geometry,n);e.eoxMap=e.renderRoot.querySelector("eox-map"),setTimeout(()=>{e.eoxMap.layers=r;const i=s=>{const o=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:s.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});e.dispatchEvent(o)};e.eoxMap.interactions.drawInteraction.on("drawend",s=>{i(s.feature),e.eoxMap.removeInteraction("drawInteraction")}),e.eoxMap.interactions.drawInteraction_modify.on("modifyend",s=>{i(s.features.getArray()[0])})},1e3)}function ou(e){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:e}]}))}`}var yt,Jt;class au extends ue{constructor(){super();K(this,yt,()=>{Vc(this)});K(this,Jt,n=>{n.key==="Enter"&&n.target.value&&this.results&&this.results.length===1&&(this.dispatchEvent(new CustomEvent("result",{detail:this.results[0]})),n.target.value="",z(this,yt).call(this))});ct(this,"debouncedInputHandler",tn(z(this,yt),500,{leading:!0}));this.filterObject={},this.results=null,this.unstyled=!1,this.tabIndex=0,this.isValid=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},results:{state:!0,type:Array},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}reset(){Kc(this)}createRenderRoot(){return this}render(){return I(this.filterObject,()=>{var n;return S`
        <style></style>
        <div class="text-container">
          <div
            class="text-container-wrapper field small"
            style="margin-left: var(--_list-padding)"
          >
            <input
              type="text"
              placeholder=${this.filterObject.placeholder}
              data-cy="search"
              class="text-input"
              part="input-search"
              value="${Object.values(this.filterObject.state)[0]}"
              tabindex=${this.tabIndex}
              pattern="${((n=this.filterObject.validation)==null?void 0:n.pattern)||".*"}"
              @input="${this.debouncedInputHandler}"
              @click=${r=>r.stopPropagation()}
              @keydown=${z(this,Jt)}
            />
          </div>
        </div>
        <small
          class="error-validation"
          style="margin-left: var(--_list-padding)"
          >${this.filterObject.validation&&this.isValid===!1?this.filterObject.validation.message:""}</small
        >
      `})}}yt=new WeakMap,Jt=new WeakMap;customElements.define("eox-itemfilter-text",au);function lu(e,t,n){if(!t||typeof t=="string"&&t.trim()==="")return[];const r=n.config.aggregateResults;return t==="No category"?e.filter(i=>{const s=i[r];return Array.isArray(s)?s.filter(Boolean).length===0:!s}):e.filter(i=>{const s=i[r];if(Array.isArray(s)){if(s.filter(Boolean).length===0)return!1}else if(!s)return!1;let o;return n.filters[r]&&(o=Object.keys(n.filters[r]).filter(c=>n.filters[r].state[c])),(o!=null&&o.length?o.includes(t):!0)&&Array.isArray(s)?s.includes(t):s===t})}function cu(e,t){return S`
    <details
      class="details-results"
      @toggle=${t.handleAccordion}
      ?open=${t.config.expandResults||Ce}
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
            ${t.aggregateResults(t.results,e).length}
          </button>
        </nav>
      </summary>
      <div>
        ${Xi(t,e)}
      </div>
    </details>
  `}function Xi(e,t){const n=e.results,r=t?e.aggregateResults(n,t):n,i=e.config,s=o=>{var l;return((l=e.selectedResult)==null?void 0:l[i.idProperty])===o[i.idProperty]?"highlighted":Ce};return Hr`
    ${e.resultType==="cards"?Ve("<eox-layout fill-grid>"):Ve('<ul id="results" class="list no-space" part="results">')}
      ${ta(r,o=>o.id,o=>{var f;const l=((f=q(i.titleProperty,o))==null?void 0:f.toString())||"",c=o.highlightedText?l:Kt(l);return Hr`
        ${e.resultType==="cards"?Ve("<eox-layout-item"):Ve("<li")}
            class="${s(o)}"
            title="${c}"
            @click=${()=>{e.selectedResult===o?e.selectedResult=null:e.selectedResult=o,e.dispatchEvent(new CustomEvent("result",{detail:e.selectedResult}))}}
            @mouseenter=${()=>{e.dispatchEvent(new CustomEvent("mouseenter:result",{detail:o}))}}
            @mouseleave=${()=>{e.dispatchEvent(new CustomEvent("mouseleave:result",{detail:o}))}}
          >
            <nav id="${o.id}" class="responsive tiny-space">
              ${I(i.subTitleProperty||i.imageProperty,()=>S`
                  ${I(e.resultType==="cards",()=>q(i.imageProperty,o)?S`
                            <img
                              loading="lazy"
                              fetchpriority="low"
                              class="image"
                              src="${q(i.imageProperty,o)}"
                            />
                          `:S`
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
                          `,()=>S`
                      <i class="small">
                        ${q(i.imageProperty,o)?S`
                              <img
                                loading="lazy"
                                fetchpriority="low"
                                class="image"
                                src="${q(i.imageProperty,o)}"
                              />
                            `:S`
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
                      class="title truncate ${o.highlightedText?"highlight-enabled":""}"
                      title="${c}"
                      >${Dt(o.highlightedText||q(i.titleProperty,o).toString())}</span
                    >
                    ${I(!!q(i.subTitleProperty,o),()=>S`
                        <small class="subtitle no-line truncate"
                          >${Dt(q(i.subTitleProperty,o).toString())}</small
                        >
                      `)}
                  </div>
                `,()=>S`
                  <div class="small-line max truncate">
                    <span
                      class="title truncate ${o.highlightedText?"highlight-enabled":""}"
                      title="${c}"
                      >${Dt(o.highlightedText||o[i.titleProperty])}</span
                    >
                  </div>
                `)}
              ${I(e.enableResultAction,()=>S`
                  <button
                    class="result-action square transparent primary-text small"
                    @click=${h=>{h.stopPropagation(),e.dispatchEvent(new CustomEvent("click:result-action",{detail:o}))}}
                  >
                    <icon class="small"
                      >${Dt(e.resultActionIcon)}</icon
                    >
                  </button>
                `)}
            </nav>
          </li>
        `})}
    ${e.resultType==="cards"?Ve("</eox-layout>"):Ve("</ul>")}
  `}var ve,er,Ji,Qi;class uu extends ue{constructor(){super();K(this,ve);this.config=null,this.results=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list",this.resultActionIcon=void 0}static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Array},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String},resultActionIcon:{attribute:!1,type:String}}}aggregateResults(n,r){return lu(n,r,this)}createRenderRoot(){return this}handleAccordion(n){Hi(n,this.config,this)}render(){return S`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${I(this.results.length<1,()=>S`<small class="no-results">No matching items</small>`,()=>Ce)}
          ${I(this.config.aggregateResults,()=>en(R(this,ve,Qi).call(this),n=>S`${I(this.aggregateResults(this.results,n).length===1&&this.config.autoSpreadSingle,()=>S`<div style="margin-left: -8px">
                        ${R(this,ve,er).call(this,n)}
                      </div>`,()=>R(this,ve,Ji).call(this,n))}`),()=>R(this,ve,er).call(this))}
        </div>
      </section>
    `}}ve=new WeakSet,er=function(n){return Xi(this,n)},Ji=function(n){return cu(n,this)},Qi=function(){const n=this.resultAggregation.filter(i=>this.aggregateResults(this.results,i).length);return this.aggregateResults(this.results,"No category").length>0&&n.push("No category"),n};customElements.define("eox-itemfilter-results",uu);var Le,es,ts,ns;class Zi extends ue{constructor(){super();K(this,Le);ct(this,"debouncedInputHandler",tn(R(this,Le,ns),500,{leading:!0}));this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(n){n.has("filterObject")&&this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(r=>this.filterObject.state[r]?r:null).filter(r=>!!r)),tu(n,this)}reset(){Jc(this)}firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(n=>this.filterObject.state[n]?n:null).filter(n=>!!n),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}createRenderRoot(){return this}render(){const n=this.type.includes("multi")?"checkbox":"radio",r=this.filteredSuggestions.length>5?"select-overflow scroll":Ce;return S`
      <style>
        :host,
        :root {
          --select-filter-max-items: 5;
        }
      </style>
      ${I((this.filterObject.filterKeys||this.suggestions).length>=10,()=>S`<div class="autocomplete-container">
            <div
              class="autocomplete-container-wrapper field small no-round"
              style="margin-left: var(--_list-padding)"
            >
              <input
                autocomplete="off"
                tabindex=${this.tabIndex}
                class="autocomplete-input"
                type="text"
                .value=${this.query}
                placeholder="${this.filterObject.placeholder||"Find..."}"
                @input=${R(this,Le,es)}
                @keydown=${R(this,Le,ts)}
                @blur=${()=>this.showSuggestions=!1}
                @focus=${()=>this.showSuggestions=!0}
              />
            </div>
          </div>`)}
      <div class="select-container ${r}">
        <ul class="${this.type} list no-space">
          ${this.filteredSuggestions.map(i=>S`
              <li
                data-identifier="${i.toString().toLowerCase()}"
                data-title="${i}"
              >
                <label
                  class="${n} small max"
                  title="${Kt(i.toString())}"
                >
                  <input
                    type="${n}"
                    name=${i}
                    .checked=${this.selectedItems.includes(i)}
                    @change=${()=>this.debouncedInputHandler(i)}
                    @keydown=${s=>{s.key===" "&&this.inlineMode&&this.debouncedInputHandler(i)}}
                    tabindex=${this.tabIndex+1}
                  />
                  <span
                    class="title small-line"
                    title="${Kt(i.toString())}"
                  >
                    <span class="title-text">${i}</span>
                  </span>
                </label>
              </li>
            `)}
        </ul>
      </div>
    `}}Le=new WeakSet,es=function(n){Zc(n,this)},ts=function(n){eu(n,this)},ns=function(n){Vi(n,this)},ct(Zi,"properties",{filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}});customElements.define("eox-itemfilter-select",Zi);var He,is,tr;class rs extends ue{constructor(){super();K(this,He);this.filterObject={},this.suggestions=[],this.tabIndex=0,this.inlineMode=!1,this.inputHandler=R(this,He,is).bind(this),this.debouncedInputHandler=tn(this.inputHandler,500,{leading:!1})}reset(){Yc(this)}createRenderRoot(){return this}render(){return I(this.filterObject,()=>S`
        ${I(Vt(this.filterObject),()=>S`
            <eox-timecontrol
              .controlValues=${[{id:this.filterObject.key,title:this.filterObject.title||"Filter",timeControlValues:(this.filterObject.filterKeys||this.suggestions||[]).map(n=>typeof n=="object"?n:{date:n})}]}
              .initDate=${[k(this.filterObject.state.min||this.filterObject.min).format(),k(this.filterObject.state.max||this.filterObject.max).format()]}
              @select=${n=>fi(new CustomEvent("values",{detail:{values:[k(n.detail.date[0]).valueOf(),k(n.detail.date[1]).valueOf()]}}),this)}
            >
              <eox-timecontrol-date
                .format=${et}
              ></eox-timecontrol-date>
              <eox-timecontrol-picker
                style="${this.inlineMode?"margin-bottom: 1rem; display: block;":""}"
                ?popup=${!this.inlineMode}
                range
                show-dots
                .position=${["bottom","left"]}
              ></eox-timecontrol-picker>
            </eox-timecontrol>
          `,()=>S`
            <div style="display: flex; gap: .5rem; align-items: center;">
              ${R(this,He,tr).call(this,"min","before")}
              <tc-range-slider
                min="${this.filterObject.min}"
                max="${this.filterObject.max}"
                value1="${this.filterObject.state.min||this.filterObject.min}"
                value2="${this.filterObject.state.max||this.filterObject.max}"
                step="${this.filterObject.step||1}"
                @change=${this.debouncedInputHandler}
              ></tc-range-slider>
              ${R(this,He,tr).call(this,"max","after")}
            </div>
          `)}
      `)}}He=new WeakSet,is=function(n){fi(n,this)},tr=function(n,r){return Xc(n,r,this)},ct(rs,"properties",{filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}});customElements.define("eox-itemfilter-range",rs);var Qt,ss;class fu extends ue{constructor(){super();K(this,Qt);this.filterObject={},this.tabIndex=0}static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}reset(){ru(this)}createRenderRoot(){return this}render(){return I(this.filterObject,()=>{var n;return S`
        <div
          style="margin-left: var(--_list-padding); padding-right: var(--_padding)"
        >
          <nav class="no-margin wrap">
            ${en(["intersects","within"],r=>S`
                <label class="radio small small-text">
                  <input
                    tabindex=${this.tabIndex}
                    type="radio"
                    name="mode"
                    .checked="${(this.filterObject.state.mode||"")===r||Ce}"
                    value="${r}"
                    @click=${()=>R(this,Qt,ss).call(this,r)}
                  />
                  <span style="font-size: x-small">${r} geometry</span>
                </label>
              `)}
          </nav>
          <eox-itemfilter-spatial-filter
            exportparts="map: spatial-filter-map"
            .geometry="${(n=this.filterObject.state)==null?void 0:n.geometry}"
            @filter="${r=>{this.filterObject.state.geometry=r.detail.geometry,this.filterObject.dirty=!0,this.filterObject.stringifiedState="Polygon",this.dispatchEvent(new CustomEvent("filter"))}}"
          ></eox-itemfilter-spatial-filter>
        </div>
      `})}}Qt=new WeakSet,ss=function(n){su(n,this)};customElements.define("eox-itemfilter-spatial",fu);var Zt,os;class hu extends ue{constructor(){super();K(this,Zt);this.geometry=null,this.eoxMap=null}static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}firstUpdated(){R(this,Zt,os).call(this)}reset(){iu(this)}render(){return S`<div id="eox-map"></div>`}}Zt=new WeakSet,os=function(){Yi(this)};customElements.define("eox-itemfilter-spatial-filter",hu);function du(e,t){t.renderRoot.querySelectorAll(".chip").forEach(n=>{n.classList.remove("highlighted")}),e.target instanceof HTMLElement&&e.target.classList.add("highlighted"),t.requestUpdate()}function pu(e,t){const{code:n,target:r}=e;r instanceof HTMLElement&&r.id!=="eox-itemfilter-input-search"||t.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(n)||(n==="Space"&&e.preventDefault(),["Escape","Space","Enter"].includes(n)||e.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(n)&&gu(n,e.target.value??"",t))}function gu(e,t,n){const r=n.renderRoot.querySelector(".chip.highlighted");if((e==="Escape"||t)&&r&&r.classList.remove("highlighted"),e==="Backspace"&&!t){if(n.items.length){r&&(r.querySelector(".chip-item-close").click(),n.items.splice(Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(r),1));const i=n.renderRoot.querySelectorAll(".chip")[n.renderRoot.querySelectorAll(".chip").length-1];i.classList.contains("highlighted")||i.classList.add("highlighted"),n.requestUpdate()}n._dispatchEvent()}if((e==="ArrowLeft"||e==="ArrowRight")&&!t){if(n.renderRoot.querySelectorAll(".chip").length<1)return;let i=0;const s=n.renderRoot.querySelector(".chip.highlighted");s&&(i=Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(s),s.classList.remove("highlighted")),i=i+(e==="ArrowLeft"?-1:1),e==="ArrowLeft"&&i<0&&(i=n.renderRoot.querySelectorAll(".chip").length-1),e==="ArrowRight"&&i>n.renderRoot.querySelectorAll(".chip").length-1&&(i=0),Array.from(n.renderRoot.querySelectorAll(".chip"))[i].classList.add("highlighted")}}var ze,nr,as;class yu extends ue{constructor(){super();K(this,ze);this.items={},this.controller={}}static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",R(this,ze,nr).bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",R(this,ze,nr).bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}render(){return S`
      <span class="chip-container">
        ${en(this.items,n=>S`
            <span class="chip tiny-margin" @click=${R(this,ze,as).bind(this)}>
              <span class="chip-title">${n.title}</span>
                <span
                  class="chip-item-close hidden"
                  data-close=${n.key}
                  @click=${r=>{r.stopPropagation(),this.controller.remove(r),this.requestUpdate()}}
                ></span>
              </span>
            </span>
          `)}
      </span>
    `}}ze=new WeakSet,nr=function(n){pu(n,this)},as=function(n){du(n,this)};customElements.define("eox-itemfilter-chips",yu);var mu=200,yr="__lodash_hash_undefined__",vu=1/0,bu="[object Function]",wu="[object GeneratorFunction]",xu=/[\\^$.*+?()[\]{}|]/g,_u=/^\[object .+?Constructor\]$/,Au=typeof Me=="object"&&Me&&Me.Object===Object&&Me,Mu=typeof self=="object"&&self&&self.Object===Object&&self,mr=Au||Mu||Function("return this")();function Cu(e,t){var n=e?e.length:0;return!!n&&Lu(e,t,0)>-1}function Su(e,t,n,r){for(var i=e.length,s=n+-1;++s<i;)if(t(e[s],s,e))return s;return-1}function Lu(e,t,n){if(t!==t)return Su(e,Eu,n);for(var r=n-1,i=e.length;++r<i;)if(e[r]===t)return r;return-1}function Eu(e){return e!==e}function $u(e,t){return e.has(t)}function Ru(e,t){return e==null?void 0:e[t]}function ku(e){var t=!1;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"")}catch{}return t}function ls(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var Tu=Array.prototype,Du=Function.prototype,cs=Object.prototype,Pn=mr["__core-js_shared__"],hi=function(){var e=/[^.]+$/.exec(Pn&&Pn.keys&&Pn.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),us=Du.toString,vr=cs.hasOwnProperty,Pu=cs.toString,Ou=RegExp("^"+us.call(vr).replace(xu,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Bu=Tu.splice,ju=br(mr,"Map"),On=br(mr,"Set"),gt=br(Object,"create");function Fe(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Iu(){this.__data__=gt?gt(null):{}}function Nu(e){return this.has(e)&&delete this.__data__[e]}function Fu(e){var t=this.__data__;if(gt){var n=t[e];return n===yr?void 0:n}return vr.call(t,e)?t[e]:void 0}function Hu(e){var t=this.__data__;return gt?t[e]!==void 0:vr.call(t,e)}function zu(e,t){var n=this.__data__;return n[e]=gt&&t===void 0?yr:t,this}Fe.prototype.clear=Iu;Fe.prototype.delete=Nu;Fe.prototype.get=Fu;Fe.prototype.has=Hu;Fe.prototype.set=zu;function rt(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function qu(){this.__data__=[]}function Wu(e){var t=this.__data__,n=un(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():Bu.call(t,n,1),!0}function Uu(e){var t=this.__data__,n=un(t,e);return n<0?void 0:t[n][1]}function Ku(e){return un(this.__data__,e)>-1}function Vu(e,t){var n=this.__data__,r=un(n,e);return r<0?n.push([e,t]):n[r][1]=t,this}rt.prototype.clear=qu;rt.prototype.delete=Wu;rt.prototype.get=Uu;rt.prototype.has=Ku;rt.prototype.set=Vu;function it(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Gu(){this.__data__={hash:new Fe,map:new(ju||rt),string:new Fe}}function Yu(e){return fn(this,e).delete(e)}function Xu(e){return fn(this,e).get(e)}function Ju(e){return fn(this,e).has(e)}function Qu(e,t){return fn(this,e).set(e,t),this}it.prototype.clear=Gu;it.prototype.delete=Yu;it.prototype.get=Xu;it.prototype.has=Ju;it.prototype.set=Qu;function Gt(e){var t=-1,n=e?e.length:0;for(this.__data__=new it;++t<n;)this.add(e[t])}function Zu(e){return this.__data__.set(e,yr),this}function ef(e){return this.__data__.has(e)}Gt.prototype.add=Gt.prototype.push=Zu;Gt.prototype.has=ef;function un(e,t){for(var n=e.length;n--;)if(cf(e[n][0],t))return n;return-1}function tf(e){if(!fs(e)||of(e))return!1;var t=uf(e)||ku(e)?Ou:_u;return t.test(af(e))}function nf(e,t,n){var r=-1,i=Cu,s=e.length,o=!0,l=[],c=l;if(s>=mu){var f=rf(e);if(f)return ls(f);o=!1,i=$u,c=new Gt}else c=l;e:for(;++r<s;){var h=e[r],d=h;if(h=h!==0?h:0,o&&d===d){for(var y=c.length;y--;)if(c[y]===d)continue e;l.push(h)}else i(c,d,n)||(c!==l&&c.push(d),l.push(h))}return l}var rf=On&&1/ls(new On([,-0]))[1]==vu?function(e){return new On(e)}:ff;function fn(e,t){var n=e.__data__;return sf(t)?n[typeof t=="string"?"string":"hash"]:n.map}function br(e,t){var n=Ru(e,t);return tf(n)?n:void 0}function sf(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function of(e){return!!hi&&hi in e}function af(e){if(e!=null){try{return us.call(e)}catch{}try{return e+""}catch{}}return""}function lf(e){return e&&e.length?nf(e):[]}function cf(e,t){return e===t||e!==e&&t!==t}function uf(e){var t=fs(e)?Pu.call(e):"";return t==bu||t==wu}function fs(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function ff(){}var hf=lf;const rr=di(hf);var Yt={exports:{}};Yt.exports;(function(e,t){var n=200,r="Expected a function",i="__lodash_hash_undefined__",s=1,o=2,l=9007199254740991,c="[object Arguments]",f="[object Array]",h="[object Boolean]",d="[object Date]",y="[object Error]",g="[object Function]",m="[object GeneratorFunction]",v="[object Map]",_="[object Number]",x="[object Object]",C="[object Promise]",M="[object RegExp]",$="[object Set]",D="[object String]",N="[object Symbol]",oe="[object WeakMap]",qe="[object ArrayBuffer]",B="[object DataView]",F="[object Float32Array]",V="[object Float64Array]",Re="[object Int8Array]",st="[object Int16Array]",we="[object Int32Array]",Z="[object Uint8Array]",ot="[object Uint8ClampedArray]",hn="[object Uint16Array]",ps="[object Uint32Array]",gs=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ys=/^\w*$/,ms=/^\./,vs=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,bs=/[\\^$.*+?()[\]{}|]/g,ws=/\\(\\)?/g,xs=/^\[object .+?Constructor\]$/,_s=/^(?:0|[1-9]\d*)$/,P={};P[F]=P[V]=P[Re]=P[st]=P[we]=P[Z]=P[ot]=P[hn]=P[ps]=!0,P[c]=P[f]=P[qe]=P[h]=P[B]=P[d]=P[y]=P[g]=P[v]=P[_]=P[x]=P[M]=P[$]=P[D]=P[oe]=!1;var wr=typeof Me=="object"&&Me&&Me.Object===Object&&Me,As=typeof self=="object"&&self&&self.Object===Object&&self,xe=wr||As||Function("return this")(),xr=t&&!t.nodeType&&t,_r=xr&&!0&&e&&!e.nodeType&&e,Ms=_r&&_r.exports===xr,Ar=Ms&&wr.process,Mr=function(){try{return Ar&&Ar.binding("util")}catch{}}(),Cr=Mr&&Mr.isTypedArray;function Cs(a,u){for(var p=-1,b=a?a.length:0,A=Array(b);++p<b;)A[p]=u(a[p],p,a);return A}function Ss(a,u){for(var p=-1,b=u.length,A=a.length;++p<b;)a[A+p]=u[p];return a}function Ls(a,u){for(var p=-1,b=a?a.length:0;++p<b;)if(u(a[p],p,a))return!0;return!1}function Es(a){return function(u){return u==null?void 0:u[a]}}function $s(a,u){for(var p=-1,b=Array(a);++p<a;)b[p]=u(p);return b}function Rs(a){return function(u){return a(u)}}function ks(a,u){return a==null?void 0:a[u]}function dn(a){var u=!1;if(a!=null&&typeof a.toString!="function")try{u=!!(a+"")}catch{}return u}function Ts(a){var u=-1,p=Array(a.size);return a.forEach(function(b,A){p[++u]=[A,b]}),p}function Ds(a,u){return function(p){return a(u(p))}}function Ps(a){var u=-1,p=Array(a.size);return a.forEach(function(b){p[++u]=b}),p}var Os=Array.prototype,Bs=Function.prototype,bt=Object.prototype,pn=xe["__core-js_shared__"],Sr=function(){var a=/[^.]+$/.exec(pn&&pn.keys&&pn.keys.IE_PROTO||"");return a?"Symbol(src)_1."+a:""}(),Lr=Bs.toString,he=bt.hasOwnProperty,We=bt.toString,js=RegExp("^"+Lr.call(he).replace(bs,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),wt=xe.Symbol,Er=xe.Uint8Array,Is=bt.propertyIsEnumerable,Ns=Os.splice,$r=wt?wt.isConcatSpreadable:void 0,Fs=Ds(Object.keys,Object),gn=Ue(xe,"DataView"),at=Ue(xe,"Map"),yn=Ue(xe,"Promise"),mn=Ue(xe,"Set"),vn=Ue(xe,"WeakMap"),lt=Ue(Object,"create"),Hs=Te(gn),zs=Te(at),qs=Te(yn),Ws=Te(mn),Us=Te(vn),xt=wt?wt.prototype:void 0,bn=xt?xt.valueOf:void 0,Rr=xt?xt.toString:void 0;function ke(a){var u=-1,p=a?a.length:0;for(this.clear();++u<p;){var b=a[u];this.set(b[0],b[1])}}function Ks(){this.__data__=lt?lt(null):{}}function Vs(a){return this.has(a)&&delete this.__data__[a]}function Gs(a){var u=this.__data__;if(lt){var p=u[a];return p===i?void 0:p}return he.call(u,a)?u[a]:void 0}function Ys(a){var u=this.__data__;return lt?u[a]!==void 0:he.call(u,a)}function Xs(a,u){var p=this.__data__;return p[a]=lt&&u===void 0?i:u,this}ke.prototype.clear=Ks,ke.prototype.delete=Vs,ke.prototype.get=Gs,ke.prototype.has=Ys,ke.prototype.set=Xs;function de(a){var u=-1,p=a?a.length:0;for(this.clear();++u<p;){var b=a[u];this.set(b[0],b[1])}}function Js(){this.__data__=[]}function Qs(a){var u=this.__data__,p=At(u,a);if(p<0)return!1;var b=u.length-1;return p==b?u.pop():Ns.call(u,p,1),!0}function Zs(a){var u=this.__data__,p=At(u,a);return p<0?void 0:u[p][1]}function eo(a){return At(this.__data__,a)>-1}function to(a,u){var p=this.__data__,b=At(p,a);return b<0?p.push([a,u]):p[b][1]=u,this}de.prototype.clear=Js,de.prototype.delete=Qs,de.prototype.get=Zs,de.prototype.has=eo,de.prototype.set=to;function pe(a){var u=-1,p=a?a.length:0;for(this.clear();++u<p;){var b=a[u];this.set(b[0],b[1])}}function no(){this.__data__={hash:new ke,map:new(at||de),string:new ke}}function ro(a){return Mt(this,a).delete(a)}function io(a){return Mt(this,a).get(a)}function so(a){return Mt(this,a).has(a)}function oo(a,u){return Mt(this,a).set(a,u),this}pe.prototype.clear=no,pe.prototype.delete=ro,pe.prototype.get=io,pe.prototype.has=so,pe.prototype.set=oo;function _t(a){var u=-1,p=a?a.length:0;for(this.__data__=new pe;++u<p;)this.add(a[u])}function ao(a){return this.__data__.set(a,i),this}function lo(a){return this.__data__.has(a)}_t.prototype.add=_t.prototype.push=ao,_t.prototype.has=lo;function ge(a){this.__data__=new de(a)}function co(){this.__data__=new de}function uo(a){return this.__data__.delete(a)}function fo(a){return this.__data__.get(a)}function ho(a){return this.__data__.has(a)}function po(a,u){var p=this.__data__;if(p instanceof de){var b=p.__data__;if(!at||b.length<n-1)return b.push([a,u]),this;p=this.__data__=new pe(b)}return p.set(a,u),this}ge.prototype.clear=co,ge.prototype.delete=uo,ge.prototype.get=fo,ge.prototype.has=ho,ge.prototype.set=po;function go(a,u){var p=ye(a)||_n(a)?$s(a.length,String):[],b=p.length,A=!!b;for(var w in a)he.call(a,w)&&!(A&&(w=="length"||Pr(w,b)))&&p.push(w);return p}function At(a,u){for(var p=a.length;p--;)if(jr(a[p][0],u))return p;return-1}var yo=Do(bo);function mo(a,u,p,b,A){var w=-1,E=a.length;for(p||(p=No),A||(A=[]);++w<E;){var O=a[w];p(O)?Ss(A,O):A[A.length]=O}return A}var vo=Po();function bo(a,u){return a&&vo(a,u,Rt)}function kr(a,u){u=Ct(u,a)?[u]:Tr(u);for(var p=0,b=u.length;a!=null&&p<b;)a=a[St(u[p++])];return p&&p==b?a:void 0}function wo(a){return We.call(a)}function xo(a,u){return a!=null&&u in Object(a)}function wn(a,u,p,b,A){return a===u?!0:a==null||u==null||!Et(a)&&!$t(u)?a!==a&&u!==u:_o(a,u,wn,p,b,A)}function _o(a,u,p,b,A,w){var E=ye(a),O=ye(u),j=f,H=f;E||(j=_e(a),j=j==c?x:j),O||(H=_e(u),H=H==c?x:H);var G=j==x&&!dn(a),Y=H==x&&!dn(u),U=j==H;if(U&&!G)return w||(w=new ge),E||Vo(a)?Dr(a,u,p,b,A,w):Oo(a,u,j,p,b,A,w);if(!(A&o)){var ee=G&&he.call(a,"__wrapped__"),te=Y&&he.call(u,"__wrapped__");if(ee||te){var Ae=ee?a.value():a,me=te?u.value():u;return w||(w=new ge),p(Ae,me,b,A,w)}}return U?(w||(w=new ge),Bo(a,u,p,b,A,w)):!1}function Ao(a,u,p,b){var A=p.length,w=A;if(a==null)return!w;for(a=Object(a);A--;){var E=p[A];if(E[2]?E[1]!==a[E[0]]:!(E[0]in a))return!1}for(;++A<w;){E=p[A];var O=E[0],j=a[O],H=E[1];if(E[2]){if(j===void 0&&!(O in a))return!1}else{var G=new ge,Y;if(!(Y===void 0?wn(H,j,b,s|o,G):Y))return!1}}return!0}function Mo(a){if(!Et(a)||Ho(a))return!1;var u=Ir(a)||dn(a)?js:xs;return u.test(Te(a))}function Co(a){return $t(a)&&An(a.length)&&!!P[We.call(a)]}function So(a){return typeof a=="function"?a:a==null?Jo:typeof a=="object"?ye(a)?Ro(a[0],a[1]):$o(a):Qo(a)}function Lo(a){if(!zo(a))return Fs(a);var u=[];for(var p in Object(a))he.call(a,p)&&p!="constructor"&&u.push(p);return u}function Eo(a,u){var p=-1,b=Lt(a)?Array(a.length):[];return yo(a,function(A,w,E){b[++p]=u(A,w,E)}),b}function $o(a){var u=jo(a);return u.length==1&&u[0][2]?Br(u[0][0],u[0][1]):function(p){return p===a||Ao(p,a,u)}}function Ro(a,u){return Ct(a)&&Or(u)?Br(St(a),u):function(p){var b=Yo(p,a);return b===void 0&&b===u?Xo(p,a):wn(u,b,void 0,s|o)}}function ko(a){return function(u){return kr(u,a)}}function To(a){if(typeof a=="string")return a;if(Mn(a))return Rr?Rr.call(a):"";var u=a+"";return u=="0"&&1/a==-1/0?"-0":u}function Tr(a){return ye(a)?a:qo(a)}function Do(a,u){return function(p,b){if(p==null)return p;if(!Lt(p))return a(p,b);for(var A=p.length,w=-1,E=Object(p);++w<A&&b(E[w],w,E)!==!1;);return p}}function Po(a){return function(u,p,b){for(var A=-1,w=Object(u),E=b(u),O=E.length;O--;){var j=E[++A];if(p(w[j],j,w)===!1)break}return u}}function Dr(a,u,p,b,A,w){var E=A&o,O=a.length,j=u.length;if(O!=j&&!(E&&j>O))return!1;var H=w.get(a);if(H&&w.get(u))return H==u;var G=-1,Y=!0,U=A&s?new _t:void 0;for(w.set(a,u),w.set(u,a);++G<O;){var ee=a[G],te=u[G];if(b)var Ae=E?b(te,ee,G,u,a,w):b(ee,te,G,a,u,w);if(Ae!==void 0){if(Ae)continue;Y=!1;break}if(U){if(!Ls(u,function(me,De){if(!U.has(De)&&(ee===me||p(ee,me,b,A,w)))return U.add(De)})){Y=!1;break}}else if(!(ee===te||p(ee,te,b,A,w))){Y=!1;break}}return w.delete(a),w.delete(u),Y}function Oo(a,u,p,b,A,w,E){switch(p){case B:if(a.byteLength!=u.byteLength||a.byteOffset!=u.byteOffset)return!1;a=a.buffer,u=u.buffer;case qe:return!(a.byteLength!=u.byteLength||!b(new Er(a),new Er(u)));case h:case d:case _:return jr(+a,+u);case y:return a.name==u.name&&a.message==u.message;case M:case D:return a==u+"";case v:var O=Ts;case $:var j=w&o;if(O||(O=Ps),a.size!=u.size&&!j)return!1;var H=E.get(a);if(H)return H==u;w|=s,E.set(a,u);var G=Dr(O(a),O(u),b,A,w,E);return E.delete(a),G;case N:if(bn)return bn.call(a)==bn.call(u)}return!1}function Bo(a,u,p,b,A,w){var E=A&o,O=Rt(a),j=O.length,H=Rt(u),G=H.length;if(j!=G&&!E)return!1;for(var Y=j;Y--;){var U=O[Y];if(!(E?U in u:he.call(u,U)))return!1}var ee=w.get(a);if(ee&&w.get(u))return ee==u;var te=!0;w.set(a,u),w.set(u,a);for(var Ae=E;++Y<j;){U=O[Y];var me=a[U],De=u[U];if(b)var Nr=E?b(De,me,U,u,a,w):b(me,De,U,a,u,w);if(!(Nr===void 0?me===De||p(me,De,b,A,w):Nr)){te=!1;break}Ae||(Ae=U=="constructor")}if(te&&!Ae){var kt=a.constructor,Tt=u.constructor;kt!=Tt&&"constructor"in a&&"constructor"in u&&!(typeof kt=="function"&&kt instanceof kt&&typeof Tt=="function"&&Tt instanceof Tt)&&(te=!1)}return w.delete(a),w.delete(u),te}function Mt(a,u){var p=a.__data__;return Fo(u)?p[typeof u=="string"?"string":"hash"]:p.map}function jo(a){for(var u=Rt(a),p=u.length;p--;){var b=u[p],A=a[b];u[p]=[b,A,Or(A)]}return u}function Ue(a,u){var p=ks(a,u);return Mo(p)?p:void 0}var _e=wo;(gn&&_e(new gn(new ArrayBuffer(1)))!=B||at&&_e(new at)!=v||yn&&_e(yn.resolve())!=C||mn&&_e(new mn)!=$||vn&&_e(new vn)!=oe)&&(_e=function(a){var u=We.call(a),p=u==x?a.constructor:void 0,b=p?Te(p):void 0;if(b)switch(b){case Hs:return B;case zs:return v;case qs:return C;case Ws:return $;case Us:return oe}return u});function Io(a,u,p){u=Ct(u,a)?[u]:Tr(u);for(var b,A=-1,E=u.length;++A<E;){var w=St(u[A]);if(!(b=a!=null&&p(a,w)))break;a=a[w]}if(b)return b;var E=a?a.length:0;return!!E&&An(E)&&Pr(w,E)&&(ye(a)||_n(a))}function No(a){return ye(a)||_n(a)||!!($r&&a&&a[$r])}function Pr(a,u){return u=u??l,!!u&&(typeof a=="number"||_s.test(a))&&a>-1&&a%1==0&&a<u}function Ct(a,u){if(ye(a))return!1;var p=typeof a;return p=="number"||p=="symbol"||p=="boolean"||a==null||Mn(a)?!0:ys.test(a)||!gs.test(a)||u!=null&&a in Object(u)}function Fo(a){var u=typeof a;return u=="string"||u=="number"||u=="symbol"||u=="boolean"?a!=="__proto__":a===null}function Ho(a){return!!Sr&&Sr in a}function zo(a){var u=a&&a.constructor,p=typeof u=="function"&&u.prototype||bt;return a===p}function Or(a){return a===a&&!Et(a)}function Br(a,u){return function(p){return p==null?!1:p[a]===u&&(u!==void 0||a in Object(p))}}var qo=xn(function(a){a=Go(a);var u=[];return ms.test(a)&&u.push(""),a.replace(vs,function(p,b,A,w){u.push(A?w.replace(ws,"$1"):b||p)}),u});function St(a){if(typeof a=="string"||Mn(a))return a;var u=a+"";return u=="0"&&1/a==-1/0?"-0":u}function Te(a){if(a!=null){try{return Lr.call(a)}catch{}try{return a+""}catch{}}return""}function Wo(a,u){return mo(Uo(a,u))}function Uo(a,u){var p=ye(a)?Cs:Eo;return p(a,So(u))}function xn(a,u){if(typeof a!="function"||u&&typeof u!="function")throw new TypeError(r);var p=function(){var b=arguments,A=u?u.apply(this,b):b[0],w=p.cache;if(w.has(A))return w.get(A);var E=a.apply(this,b);return p.cache=w.set(A,E),E};return p.cache=new(xn.Cache||pe),p}xn.Cache=pe;function jr(a,u){return a===u||a!==a&&u!==u}function _n(a){return Ko(a)&&he.call(a,"callee")&&(!Is.call(a,"callee")||We.call(a)==c)}var ye=Array.isArray;function Lt(a){return a!=null&&An(a.length)&&!Ir(a)}function Ko(a){return $t(a)&&Lt(a)}function Ir(a){var u=Et(a)?We.call(a):"";return u==g||u==m}function An(a){return typeof a=="number"&&a>-1&&a%1==0&&a<=l}function Et(a){var u=typeof a;return!!a&&(u=="object"||u=="function")}function $t(a){return!!a&&typeof a=="object"}function Mn(a){return typeof a=="symbol"||$t(a)&&We.call(a)==N}var Vo=Cr?Rs(Cr):Co;function Go(a){return a==null?"":To(a)}function Yo(a,u,p){var b=a==null?void 0:kr(a,u);return b===void 0?p:b}function Xo(a,u){return a!=null&&Io(a,u,xo)}function Rt(a){return Lt(a)?go(a):Lo(a)}function Jo(a){return a}function Qo(a){return Ct(a)?Es(St(a)):ko(a)}e.exports=Wo})(Yt,Yt.exports);var df=Yt.exports;const ir=di(df);function pf(e,t,n){let r=[];e.filterProperties.length&&e.filterProperties.forEach(s=>{var d,y,g,m;const o={},l=v=>s.format==="date"?k(v).valueOf():parseFloat(v);t.forEach(v=>{var _,x;if(s.type==="range"){const C=q(s.key,v);if(Array.isArray(C)){const M=[l(C[0]),l(C[1])];o.min=o.min!==void 0?Math.min(o.min,M[0]):M[0],o.max=o.max!==void 0?Math.max(o.max,M[1]):M[1]}else{const M=l(C);o.min=o.min!==void 0?Math.min(o.min,M):M,o.max=o.max!==void 0?Math.max(o.max,M):M}return}Array.isArray(v[s.key])?v[s.key].forEach(C=>{o[C]=void 0}):s.type==="spatial"?(o.geometry=((_=s==null?void 0:s.state)==null?void 0:_.geometry)||void 0,o.geometry&&(s.stringifiedState=o.geometry.type),o.mode=s.mode||"intersects"):(x=s.key)!=null&&x.includes(".")?rr(ir(n.items,s.key)).filter(C=>C).forEach(C=>{o[C]=void 0}):o[v[s.key]]=void 0});const c=s.key||s.keys.join("|"),f=n.filters[c];let h;if(s.state)if(s.type==="range"){const v=$=>s.format==="date"?k($).valueOf():parseFloat($),_=v(s.state.min),x=v(s.state.max),C=v(s.min??o.min),M=v(s.max??o.max);s.format==="date"?h=!k(_).isSame(k(C),"day")||!k(x).isSame(k(M),"day")||void 0:h=_!==C||x!==M||void 0}else h=Object.values(s.state).some(v=>v)||void 0;if(n.filters[c]=Object.assign({type:s.type||"multiselect",dirty:h||(f==null?void 0:f.dirty),key:c},s.type==="range"?{min:o.min,max:o.max,format:s.format}:{},s),s.type==="range"&&n.filters[c].dirty){const v=C=>s.format==="date"?k(C).valueOf():parseFloat(C),_=v(((d=s.state)==null?void 0:d.min)!==void 0?s.state.min:(y=f==null?void 0:f.state)==null?void 0:y.min),x=v(((g=s.state)==null?void 0:g.max)!==void 0?s.state.max:(m=f==null?void 0:f.state)==null?void 0:m.max);n.filters[c].stringifiedState=s.format==="date"?`${k(_).format(et)} - ${k(x).format(et)}`:`${_} - ${x}`}if(n.filters[c].state=Object.assign({},o,(f==null?void 0:f.state)||{},s.state),s.type==="range"&&s.state){const v=_=>s.format==="date"?k(_).valueOf():parseFloat(_);s.state.min!==void 0&&(n.filters[c].state.min=v(s.state.min)),s.state.max!==void 0&&(n.filters[c].state.max=v(s.state.max))}}),e.matchAllWhenEmpty!==!1&&(n.results=n.sortResults(t),n.requestUpdate()),e.aggregateResults&&(r=Array.from(new Set(t.reduce((s,o)=>s.concat(o[e.aggregateResults]),[]))).filter(s=>s).sort((s,o)=>s.localeCompare(o)));const i=[];return Object.values(n.filters).forEach(s=>{s.type==="text"?s.keys.forEach(o=>{i.includes(o)||i.push(o)}):(s.type==="select"||s.type==="multiselect")&&(i.includes(s.key)||i.push(s.key))}),Nc(t,Object.assign({keys:i},e.fuseConfig)),r}async function gf(e,t,n){let r;n.externalFilter?r=await qc(t,n.filters,e):r=await Fc(t,n.filters,e),n.results=n.sortResults(r,{isExternalResult:!!n.externalFilter})}function yf(e,t,n){const r=`filter-${e.key}`.replace("|","-");switch(e.type){case"text":return S`<eox-itemfilter-text
        data-type="filter"
        data-cy="text-filter"
        slot="filter"
        id="${r}"
        .tabIndex=${t}
        .filterObject=${e}
        .results=${n.results}
        .unstyled=${n.unstyled}
        @result=${n.updateResult}
        @filter=${()=>n.search()}
      ></eox-itemfilter-text>`;case"multiselect":case"select":return S`
        <eox-itemfilter-select
          .inlineMode=${n.inlineMode||!1}
          data-type="filter"
          id="${r}"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          .suggestions="${rr(ir(n.items,e.key)).filter(i=>i)}"
          type="${e.type}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-select>
      `;case"range":return S`
        <eox-itemfilter-range
          .inlineMode=${n.inlineMode||!1}
          id="${r}"
          data-type="filter"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          .suggestions="${rr(ir(n.items,e.key)).filter(i=>i)}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-range>
      `;case"spatial":return S`
        <eox-itemfilter-spatial
          id="${r}"
          data-type="filter"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          @filter=${()=>n.search()}
        ></eox-itemfilter-spatial>
      `;default:return S``}}function mf(e,t,n={}){var o;const{resultSorting:r}=t;if(r===!1)return e;if(r===void 0)return n.isExternalResult||(o=t.fuseConfig)!=null&&o.shouldSort?e:[...e].sort((l,c)=>{const f=q(t.titleProperty,l)||"",h=q(t.titleProperty,c)||"";return f.toString().localeCompare(h.toString())});if(typeof r=="function")return[...e].sort(r);const i=typeof r=="string"?r:r.key,s=typeof r=="object"&&r.order==="desc"?-1:1;return i?[...e].sort((l,c)=>{const f=q(i,l)||"",h=q(i,c)||"";return f.toString().localeCompare(h.toString())*s}):e}function vf(e,t,n){return S`
    ${I(e.dirty,()=>S`
        <button
          type="button"
          tabindex=${t}
          slot="reset-button"
          class="reset-icon icon square primary-text transparent small no-margin"
          @click=${r=>{const i=r.target.parentElement.querySelector("[slot=filter]");i&&typeof i.reset=="function"&&i.reset(),n.search(),n.requestUpdate()}}
        >
          ${n.unstyled?"Reset":S`
                <i class="small">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>close</title>
                    <path
                      d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                    />
                  </svg>
                </i>
                <span class="tooltip left">Reset filter</span>
              `}
        </button>
      `)}
  `}function bf(e){e.renderRoot.querySelectorAll("[data-type='filter']").forEach(t=>{typeof t.reset=="function"&&t.reset()}),e.search()}var mt,Be,X,tt,hs,ds;class wf extends ue{constructor(){super();K(this,tt);K(this,mt,[]);K(this,Be,[]);K(this,X,Gc);this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=tn(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.resultSorting=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.enableResultAction=!1,this.resultActionIcon='<svg style="width: 24px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>click me!</title><path fill="currentColor" d="M11.5,11L17.88,16.37L17,16.55L16.36,16.67C15.73,16.8 15.37,17.5 15.65,18.07L15.92,18.65L17.28,21.59L15.86,22.25L14.5,19.32L14.24,18.74C13.97,18.15 13.22,17.97 12.72,18.38L12.21,18.78L11.5,19.35V11M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10" /></svg>',this.styleOverride="",this.unstyled=!1}static get properties(){return{items:{type:Array},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{type:Array},fuseConfig:{type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},resultSorting:{type:Object},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},enableResultAction:{type:Boolean},resultActionIcon:{type:String},styleOverride:{type:String},unstyled:{type:Boolean}}}apply(){Ke(this,X,Dn.reduce((n,r)=>(n[r]=this[r],n),{})),Ke(this,mt,pf(z(this,X),z(this,Be),this)),this.search()}async searchHandler(){await gf(z(this,X),z(this,Be),this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(n,r){return mf(n,z(this,X),r)}resetFilters(){bf(this)}firstUpdated(n){var i;let r={};Dn.map(s=>{r={...r,[s]:this[s]}}),Ke(this,X,r),Ke(this,Be,((i=this.items)==null?void 0:i.map((s,o)=>Object.assign({id:s[this.idProperty]||`item-${o}`},s)))||[]),this.apply()}updated(n){var s;let r=!1,i=!1;Dn.forEach(o=>{n.has(o)&&(z(this,X)[o]=this[o],["items","filterProperties","idProperty","aggregateResults","fuseConfig","matchAllWhenEmpty","externalFilter"].includes(o)?r=!0:o==="resultSorting"&&(i=!0))}),r?(Ke(this,Be,((s=this.items)==null?void 0:s.map((o,l)=>Object.assign({id:o[this.idProperty]||`item-${l}`},o)))||[]),this.apply()):i&&this.search()}updateResult(n){this.selectedResult=n.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}mouseEnterResult(n){this.dispatchEvent(new CustomEvent("mouseenter:result",{detail:n.detail,bubbles:!0,composed:!0}))}mouseLeaveResult(n){this.dispatchEvent(new CustomEvent("mouseleave:result",{detail:n.detail,bubbles:!0,composed:!0}))}emitResultAction(n){this.dispatchEvent(new CustomEvent("click:result-action",{detail:n.detail,bubbles:!0,composed:!0}))}render(){var n;return S`
      <style>
        ${ca}
        ${!this.unstyled&&sr}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":Ce}
        @submit="${r=>r.preventDefault()}"
      >
        ${I(this.filterProperties,()=>S`
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
                  ${I(!this.inlineMode,()=>S`
                      <nav class="title-nav">
                        <div class="max">
                          <slot name="filterstitle"
                            ><p><strong>Filters</strong></p></slot
                          >
                        </div>
                        ${I(!this.inlineMode&&z(this,X).filterProperties&&!this.inlineMode&&z(this,X).filterProperties&&Gn(this.filters),()=>S`
                            <button
                              type="button"
                              id="filter-reset"
                              class="reset-icon border small"
                              data-cy="filter-reset"
                              @click=${()=>this.resetFilters()}
                            >
                              ${this.unstyled?Ce:S`
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
                      ${en(Object.values(this.filters),(r,i)=>S` <li class="no-padding">
                            <eox-itemfilter-expandcontainer
                              .filterObject=${r}
                              @details-toggled=${s=>Hi(s,z(this,X),this)}
                              data-details="${r.key}"
                            >
                              ${R(this,tt,ds).call(this,r,ui(i,1))}
                              ${R(this,tt,hs).call(this,r,ui(i,2))}
                            </eox-itemfilter-expandcontainer>
                          </li>`)}
                    </ul>
                  </div>
                </section>
              </eox-itemfilter-container>
            </div>
          `)}
        ${I(((n=z(this,X))==null?void 0:n.showResults)&&this.results,()=>S`
            <div class="small-space"></div>
            <eox-itemfilter-results
              .config=${z(this,X)}
              .results=${this.results}
              .filters=${this.filters}
              .resultAggregation=${z(this,mt)}
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
    `}}mt=new WeakMap,Be=new WeakMap,X=new WeakMap,tt=new WeakSet,hs=function(n,r){return yf(n,r,this)},ds=function(n,r){return vf(n,r,this)};customElements.define("eox-itemfilter",wf);export{wf as EOxItemFilter};
