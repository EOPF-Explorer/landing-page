var la=Object.defineProperty;var Ui=t=>{throw TypeError(t)};var ca=(t,e,n)=>e in t?la(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var he=(t,e,n)=>ca(t,typeof e!="symbol"?e+"":e,n),Bn=(t,e,n)=>e.has(t)||Ui("Cannot "+n);var F=(t,e,n)=>(Bn(t,e,"read from private field"),n?n.call(t):e.get(t)),Y=(t,e,n)=>e.has(t)?Ui("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Vt=(t,e,n,i)=>(Bn(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n),R=(t,e,n)=>(Bn(t,e,"access private method"),n);import{a as ut,A as St,b as S}from"./lit-element.CBn2YVps.js";import{o as ln}from"./map.DiiNQ3pp.js";import{n as I}from"./when.BR7zwNJC.js";import{e as ua,a as fa}from"./addCommonStyleSheet.BaPcnH_q.js";import{d as B}from"./dayjs.min.Ba62AOpW.js";import{_ as cn}from"./index.BUIxO2d3.js";import{s as Gt,u as Vi}from"./static.DLFxBHrh.js";import{c as ha}from"./repeat.Duc9p3Ra.js";import{o as Fe}from"./unsafe-html.C2DIGSw-.js";import"./toolcool-range-slider.min.BBXDELo7.js";import{o as da}from"./orient2d.DArCjZZA.js";import{f as ee,a as it,b as ge,m as pa,l as ve,i as ga,d as Qt,r as ma,c as Gi}from"./index.CxojoGlr.js";import{g as wr,c as Ct}from"./commonjsHelpers.BosuxZz1.js";import"./directive.CvdRHFdJ.js";import"./directive-helpers.Bj3rQkfn.js";const ya=`
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
`;fa();const hi=`
${ua}
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
`;var rn,xr;class va extends ut{constructor(){super();Y(this,rn);this.filterObject={},this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}render(){return S`
      <style>
        ${!this.unstyled&&hi}
      </style>

      ${I(this.filterObject.featured,()=>S`<slot name="filter"></slot>`,()=>S`<details
            @toggle="${R(this,rn,xr)}"
            class="details-filter max-width"
            ?open=${this.filterObject.expanded||St}
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
    `}}rn=new WeakSet,xr=function(n){this.dispatchEvent(new CustomEvent("details-toggled",{detail:n,bubbles:!0,composed:!0}))};customElements.define("eox-itemfilter-expandcontainer",va);function $t(t){return Array.isArray?Array.isArray(t):Mr(t)==="[object Array]"}function ba(t){if(typeof t=="string")return t;if(typeof t=="bigint")return t.toString();const e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function zn(t){return t==null?"":ba(t)}function W(t){return typeof t=="string"}function Ve(t){return typeof t=="number"}function wa(t){return t===!0||t===!1||xa(t)&&Mr(t)=="[object Boolean]"}function _r(t){return typeof t=="object"}function xa(t){return _r(t)&&t!==null}function J(t){return t!=null}function He(t){return!t.trim().length}function Mr(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const _a="Incorrect 'index' type",Ma=t=>`Invalid value for key ${t}`,Aa=t=>`Pattern length exceeds max of ${t}.`,Ca=t=>`Missing ${t} property in key`,Sa=t=>`Property 'weight' in key '${t}' must be a positive integer`,Ki=Object.prototype.hasOwnProperty;class La{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(i=>{const r=Ar(i);this._keys.push(r),this._keyMap[r.id]=r,n+=r.weight}),this._keys.forEach(i=>{i.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Ar(t){let e=null,n=null,i=null,r=1,s=null;if(W(t)||$t(t))i=t,e=Ji(t),n=Yn(t);else{if(!Ki.call(t,"name"))throw new Error(Ca("name"));const o=t.name;if(i=o,Ki.call(t,"weight")&&(r=t.weight,r<=0))throw new Error(Sa(o));e=Ji(o),n=Yn(o),s=t.getFn}return{path:e,id:n,weight:r,src:i,getFn:s}}function Ji(t){return $t(t)?t:t.split(".")}function Yn(t){return $t(t)?t.join("."):t}function Ea(t,e){const n=[];let i=!1;const r=(s,o,l,c)=>{if(J(s))if(!o[l])n.push(c!==void 0?{v:s,i:c}:s);else{const u=o[l],f=s[u];if(!J(f))return;if(l===o.length-1&&(W(f)||Ve(f)||wa(f)||typeof f=="bigint"))n.push(c!==void 0?{v:zn(f),i:c}:zn(f));else if($t(f)){i=!0;for(let p=0,m=f.length;p<m;p+=1)r(f[p],o,l+1,p)}else o.length&&r(f,o,l+1,c)}};return r(t,W(e)?e.split("."):e,0),i?n:n[0]}const $a={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Ra={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},Ba={location:0,threshold:.6,distance:100},Da={useExtendedSearch:!1,useTokenSearch:!1,getFn:Ea,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1},L=Object.freeze({...Ra,...$a,...Ba,...Da}),Pa=/[^ ]+/g;function ka(t=1,e=3){const n=new Map,i=Math.pow(10,e);return{get(r){const s=r.match(Pa).length;if(n.has(s))return n.get(s);const o=1/Math.pow(s,.5*t),l=parseFloat(Math.round(o*i)/i);return n.set(s,l),l},clear(){n.clear()}}}class di{constructor({getFn:e=L.getFn,fieldNormWeight:n=L.fieldNormWeight}={}){this.norm=ka(n,3),this.getFn=e,this.isCreated=!1,this.docs=[],this.keys=[],this._keysMap={},this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,i)=>{this._keysMap[n.id]=i})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,W(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();W(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,i=this.size();n<i;n+=1)this.records[n].i-=1}removeAll(e){for(let n=e.length-1;n>=0;n-=1)this.records.splice(e[n],1);for(let n=0,i=this.records.length;n<i;n+=1)this.records[n].i=n}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!J(e)||He(e))return;const i={v:e,i:n,n:this.norm.get(e)};this.records.push(i)}_addObject(e,n){const i={i:n,$:{}};this.keys.forEach((r,s)=>{const o=r.getFn?r.getFn(e):this.getFn(e,r.path);if(J(o)){if($t(o)){const l=[];for(let c=0,u=o.length;c<u;c+=1){const f=o[c];if(J(f)){if(W(f)){if(!He(f)){const p={v:f,i:c,n:this.norm.get(f)};l.push(p)}}else if(J(f.v)){const p=W(f.v)?f.v:zn(f.v);if(!He(p)){const m={v:p,i:f.i,n:this.norm.get(p)};l.push(m)}}}}i.$[s]=l}else if(W(o)&&!He(o)){const l={v:o,n:this.norm.get(o)};i.$[s]=l}}}),this.records.push(i)}toJSON(){return{keys:this.keys.map(({getFn:e,...n})=>n),records:this.records}}}function Cr(t,e,{getFn:n=L.getFn,fieldNormWeight:i=L.fieldNormWeight}={}){const r=new di({getFn:n,fieldNormWeight:i});return r.setKeys(t.map(Ar)),r.setSources(e),r.create(),r}function Oa(t,{getFn:e=L.getFn,fieldNormWeight:n=L.fieldNormWeight}={}){const{keys:i,records:r}=t,s=new di({getFn:e,fieldNormWeight:n});return s.setKeys(i),s.setIndexRecords(r),s}function Ta(t=[],e=L.minMatchCharLength){const n=[];let i=-1,r=-1,s=0;for(let o=t.length;s<o;s+=1){const l=t[s];l&&i===-1?i=s:!l&&i!==-1&&(r=s-1,r-i+1>=e&&n.push([i,r]),i=-1)}return t[s-1]&&s-i>=e&&n.push([i,s-1]),n}const It=32;function Ia(t,e,n,{location:i=L.location,distance:r=L.distance,threshold:s=L.threshold,findAllMatches:o=L.findAllMatches,minMatchCharLength:l=L.minMatchCharLength,includeMatches:c=L.includeMatches,ignoreLocation:u=L.ignoreLocation}={}){if(e.length>It)throw new Error(Aa(It));const f=e.length,p=t.length,m=Math.max(0,Math.min(i,p));let d=s,y=m;const v=(j,q)=>{const U=j/f;if(u)return U;const Bt=Math.abs(m-q);return r?U+Bt/r:Bt?1:U},w=l>1||c,_=w?Array(p):[];let C;for(;(C=t.indexOf(e,y))>-1;){const j=v(0,C);if(d=Math.min(j,d),y=C+f,w){let q=0;for(;q<f;)_[C+q]=1,q+=1}}y=-1;let A=[],$=1,D=f+p;const H=1<<f-1;for(let j=0;j<f;j+=1){let q=0,U=D;for(;q<U;)v(j,m+U)<=d?q=U:D=U,U=Math.floor((D-q)/2+q);D=U;let Bt=Math.max(1,m-U+1);const ce=o?p:Math.min(m+U,p)+f,xt=Array(ce+2);xt[ce+1]=(1<<j)-1;for(let Q=ce;Q>=Bt;Q-=1){const Xt=Q-1,Ce=n[t[Xt]];if(w&&(_[Xt]=+!!Ce),xt[Q]=(xt[Q+1]<<1|1)&Ce,j&&(xt[Q]|=(A[Q+1]|A[Q])<<1|1|A[Q+1]),xt[Q]&H&&($=v(j,Xt),$<=d)){if(d=$,y=Xt,y<=m)break;Bt=Math.max(1,2*m-y)}}if(v(j+1,m)>d)break;A=xt}const tt={isMatch:y>=0,score:Math.max(.001,$)};if(w){const j=Ta(_,l);j.length?c&&(tt.indices=j):tt.isMatch=!1}return tt}function ja(t){const e={};for(let n=0,i=t.length;n<i;n+=1){const r=t.charAt(n);e[r]=(e[r]||0)|1<<i-n-1}return e}function pi(t){if(t.length<=1)return t;t.sort((n,i)=>n[0]-i[0]||n[1]-i[1]);const e=[t[0]];for(let n=1,i=t.length;n<i;n+=1){const r=e[e.length-1],s=t[n];s[0]<=r[1]+1?r[1]=Math.max(r[1],s[1]):e.push(s)}return e}const Sr={ł:"l",Ł:"L",đ:"d",Đ:"D",ø:"o",Ø:"O",ħ:"h",Ħ:"H",ŧ:"t",Ŧ:"T",ı:"i",ß:"ss"},Na=new RegExp("["+Object.keys(Sr).join("")+"]","g"),be=String.prototype.normalize?t=>t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,"").replace(Na,e=>Sr[e]):t=>t;class gi{constructor(e,{location:n=L.location,threshold:i=L.threshold,distance:r=L.distance,includeMatches:s=L.includeMatches,findAllMatches:o=L.findAllMatches,minMatchCharLength:l=L.minMatchCharLength,isCaseSensitive:c=L.isCaseSensitive,ignoreDiacritics:u=L.ignoreDiacritics,ignoreLocation:f=L.ignoreLocation}={}){if(this.options={location:n,threshold:i,distance:r,includeMatches:s,findAllMatches:o,minMatchCharLength:l,isCaseSensitive:c,ignoreDiacritics:u,ignoreLocation:f},e=c?e:e.toLowerCase(),e=u?be(e):e,this.pattern=e,this.chunks=[],!this.pattern.length)return;const p=(d,y)=>{this.chunks.push({pattern:d,alphabet:ja(d),startIndex:y})},m=this.pattern.length;if(m>It){let d=0;const y=m%It,v=m-y;for(;d<v;)p(this.pattern.substr(d,It),d),d+=It;if(y){const w=m-It;p(this.pattern.substr(w),w)}}else p(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,ignoreDiacritics:i,includeMatches:r}=this.options;if(e=n?e:e.toLowerCase(),e=i?be(e):e,this.pattern===e){const v={isMatch:!0,score:0};return r&&(v.indices=[[0,e.length-1]]),v}const{location:s,distance:o,threshold:l,findAllMatches:c,minMatchCharLength:u,ignoreLocation:f}=this.options,p=[];let m=0,d=!1;this.chunks.forEach(({pattern:v,alphabet:w,startIndex:_})=>{const{isMatch:C,score:A,indices:$}=Ia(e,v,w,{location:s+_,distance:o,threshold:l,findAllMatches:c,minMatchCharLength:u,includeMatches:r,ignoreLocation:f});C&&(d=!0),m+=A,C&&$&&p.push(...$)});const y={isMatch:d,score:d?m/this.chunks.length:1};return d&&r&&(y.indices=pi(p)),y}}class Rt{constructor(e){this.pattern=e}static isMultiMatch(e){return Qi(e,this.multiRegex)}static isSingleMatch(e){return Qi(e,this.singleRegex)}search(e){return{isMatch:!1,score:1}}}function Qi(t,e){const n=t.match(e);return n?n[1]:null}class Fa extends Rt{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Ha extends Rt{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const i=e.indexOf(this.pattern)===-1;return{isMatch:i,score:i?0:1,indices:[0,e.length-1]}}}class qa extends Rt{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class za extends Rt{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Ya extends Rt{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Xa extends Rt{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Lr extends Rt{constructor(e,{location:n=L.location,threshold:i=L.threshold,distance:r=L.distance,includeMatches:s=L.includeMatches,findAllMatches:o=L.findAllMatches,minMatchCharLength:l=L.minMatchCharLength,isCaseSensitive:c=L.isCaseSensitive,ignoreDiacritics:u=L.ignoreDiacritics,ignoreLocation:f=L.ignoreLocation}={}){super(e),this._bitapSearch=new gi(e,{location:n,threshold:i,distance:r,includeMatches:s,findAllMatches:o,minMatchCharLength:l,isCaseSensitive:c,ignoreDiacritics:u,ignoreLocation:f})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Er extends Rt{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,i;const r=[],s=this.pattern.length;for(;(i=e.indexOf(this.pattern,n))>-1;)n=i+s,r.push([i,n-1]);const o=!!r.length;return{isMatch:o,score:o?0:1,indices:r}}}const Xn=[Fa,Er,qa,za,Xa,Ya,Ha,Lr],Zi=Xn.length,Wa="\0",Ua="|";function Va(t){const e=[],n=t.length;let i=0;for(;i<n;){for(;i<n&&t[i]===" ";)i++;if(i>=n)break;let r=i;for(;r<n&&t[r]!==" "&&t[r]!=='"';)r++;if(r<n&&t[r]==='"'){for(r++;r<n;){if(t[r]==='"'){const s=r+1;if(s>=n||t[s]===" "){r++;break}if(t[s]==="$"&&(s+1>=n||t[s+1]===" ")){r+=2;break}}r++}e.push(t.substring(i,r)),i=r}else{for(;r<n&&t[r]!==" ";)r++;e.push(t.substring(i,r)),i=r}}return e}function Ga(t,e={}){return t.replace(/\\\|/g,Wa).split(Ua).map(i=>{const r=i.replace(/\u0000/g,"|"),s=Va(r.trim()).filter(l=>l&&!!l.trim()),o=[];for(let l=0,c=s.length;l<c;l+=1){const u=s[l];let f=!1,p=-1;for(;!f&&++p<Zi;){const m=Xn[p],d=m.isMultiMatch(u);d&&(o.push(new m(d,e)),f=!0)}if(!f)for(p=-1;++p<Zi;){const m=Xn[p],d=m.isSingleMatch(u);if(d){o.push(new m(d,e));break}}}return o})}const Ka=new Set([Lr.type,Er.type]);class Ja{constructor(e,{isCaseSensitive:n=L.isCaseSensitive,ignoreDiacritics:i=L.ignoreDiacritics,includeMatches:r=L.includeMatches,minMatchCharLength:s=L.minMatchCharLength,ignoreLocation:o=L.ignoreLocation,findAllMatches:l=L.findAllMatches,location:c=L.location,threshold:u=L.threshold,distance:f=L.distance}={}){this.query=null,this.options={isCaseSensitive:n,ignoreDiacritics:i,includeMatches:r,minMatchCharLength:s,findAllMatches:l,ignoreLocation:o,location:c,threshold:u,distance:f},e=n?e:e.toLowerCase(),e=i?be(e):e,this.pattern=e,this.query=Ga(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:i,isCaseSensitive:r,ignoreDiacritics:s}=this.options;e=r?e:e.toLowerCase(),e=s?be(e):e;let o=0;const l=[];let c=0,u=!1;for(let f=0,p=n.length;f<p;f+=1){const m=n[f];l.length=0,o=0,u=!1;for(let d=0,y=m.length;d<y;d+=1){const v=m[d],{isMatch:w,indices:_,score:C}=v.search(e);if(w){o+=1,c+=C;const A=v.constructor.type;A.startsWith("inverse")&&(u=!0),i&&(Ka.has(A)?l.push(..._):l.push(_))}else{c=0,o=0,l.length=0,u=!1;break}}if(o){const d={isMatch:!0,score:c/o};return u&&(d.hasInverse=!0),i&&(d.indices=pi(l)),d}}return{isMatch:!1,score:1}}}const Wn=[];function mi(...t){Wn.push(...t)}function Ge(t,e){for(let n=0,i=Wn.length;n<i;n+=1){const r=Wn[n];if(r.condition(t,e))return new r(t,e)}return new gi(t,e)}const Ke={AND:"$and",OR:"$or"},Un={PATH:"$path",PATTERN:"$val"},Vn=t=>!!(t[Ke.AND]||t[Ke.OR]),Qa=t=>!!t[Un.PATH],Za=t=>!$t(t)&&_r(t)&&!Vn(t),tr=t=>({[Ke.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function $r(t,e,{auto:n=!0}={}){const i=r=>{if(W(r)){const c={keyId:null,pattern:r};return n&&(c.searcher=Ge(r,e)),c}const s=Object.keys(r),o=Qa(r);if(!o&&s.length>1&&!Vn(r))return i(tr(r));if(Za(r)){const c=o?r[Un.PATH]:s[0],u=o?r[Un.PATTERN]:r[c];if(!W(u))throw new Error(Ma(c));const f={keyId:Yn(c),pattern:u};return n&&(f.searcher=Ge(u,e)),f}const l={children:[],operator:s[0]};return s.forEach(c=>{const u=r[c];$t(u)&&u.forEach(f=>{l.children.push(i(f))})}),l};return Vn(t)||(t=tr(t)),i(t)}function Gn(t,{ignoreFieldNorm:e=L.ignoreFieldNorm}){let n=1;return t.forEach(({key:i,norm:r,score:s})=>{const o=i?i.weight:null;n*=Math.pow(s===0&&o?Number.EPSILON:s,(o||1)*(e?1:r))}),n}function tl(t,{ignoreFieldNorm:e=L.ignoreFieldNorm}){t.forEach(n=>{n.score=Gn(n.matches,{ignoreFieldNorm:e})})}class el{constructor(e){this.limit=e,this.heap=[]}get size(){return this.heap.length}shouldInsert(e){return this.size<this.limit||e<this.heap[0].score}insert(e){this.size<this.limit?(this.heap.push(e),this._bubbleUp(this.size-1)):e.score<this.heap[0].score&&(this.heap[0]=e,this._sinkDown(0))}extractSorted(e){return this.heap.sort(e)}_bubbleUp(e){const n=this.heap;for(;e>0;){const i=e-1>>1;if(n[e].score<=n[i].score)break;const r=n[e];n[e]=n[i],n[i]=r,e=i}}_sinkDown(e){const n=this.heap,i=n.length;let r=e;do{e=r;const s=2*e+1,o=2*e+2;if(s<i&&n[s].score>n[r].score&&(r=s),o<i&&n[o].score>n[r].score&&(r=o),r!==e){const l=n[e];n[e]=n[r],n[r]=l}}while(r!==e)}}function nl(t,e){const n=t.matches;e.matches=[],J(n)&&n.forEach(i=>{if(!J(i.indices)||!i.indices.length)return;const{indices:r,value:s}=i,o={indices:r,value:s};i.key&&(o.key=i.key.src),i.idx>-1&&(o.refIndex=i.idx),e.matches.push(o)})}function il(t,e){e.score=t.score}function rl(t,e,{includeMatches:n=L.includeMatches,includeScore:i=L.includeScore}={}){const r=[];return n&&r.push(nl),i&&r.push(il),t.map(s=>{const{idx:o}=s,l={item:e[o],refIndex:o};return r.length&&r.forEach(c=>{c(s,l)}),l})}const sl=/\b\w+\b/g;function Kn({isCaseSensitive:t=!1,ignoreDiacritics:e=!1}={}){return{tokenize(n){return t||(n=n.toLowerCase()),e&&(n=be(n)),n.match(sl)||[]}}}function ol(t,e,n){const i=new Map,r=new Map;let s=0;function o(l,c,u,f){const p=n.tokenize(l);if(!p.length)return;s++;const m=new Map;for(const d of p)m.set(d,(m.get(d)||0)+1);for(const[d,y]of m){const v={docIdx:c,keyIdx:u,subIdx:f,tf:y};let w=i.get(d);w||(w=[],i.set(d,w)),w.push(v),r.set(d,(r.get(d)||0)+1)}}for(const l of t){const{i:c,v:u,$:f}=l;if(u!==void 0){o(u,c,-1,-1);continue}if(f)for(let p=0;p<e;p++){const m=f[p];if(m)if(Array.isArray(m))for(const d of m)o(d.v,c,p,d.i??-1);else o(m.v,c,p,-1)}}return{terms:i,fieldCount:s,df:r}}function al(t,e,n,i){const{i:r,v:s,$:o}=e;function l(c,u,f){const p=i.tokenize(c);if(!p.length)return;t.fieldCount++;const m=new Map;for(const d of p)m.set(d,(m.get(d)||0)+1);for(const[d,y]of m){const v={docIdx:r,keyIdx:u,subIdx:f,tf:y};let w=t.terms.get(d);w||(w=[],t.terms.set(d,w)),w.push(v),t.df.set(d,(t.df.get(d)||0)+1)}}if(s!==void 0){l(s,-1,-1);return}if(o)for(let c=0;c<n;c++){const u=o[c];if(u)if(Array.isArray(u))for(const f of u)l(f.v,c,f.i??-1);else l(u.v,c,-1)}}function er(t,e){for(const[n,i]of t.terms){const r=i.filter(o=>o.docIdx!==e),s=i.length-r.length;s>0&&(t.fieldCount-=s,t.df.set(n,(t.df.get(n)||0)-s),r.length===0?(t.terms.delete(n),t.df.delete(n)):t.terms.set(n,r))}}class ft{constructor(e,n,i){this.options={...L,...n},this.options.useExtendedSearch,this.options.useTokenSearch,this._keyStore=new La(this.options.keys),this._docs=e,this._myIndex=null,this._invertedIndex=null,this.setCollection(e,i),this._lastQuery=null,this._lastSearcher=null}_getSearcher(e){if(this._lastQuery===e)return this._lastSearcher;const n=this._invertedIndex?{...this.options,_invertedIndex:this._invertedIndex}:this.options,i=Ge(e,n);return this._lastQuery=e,this._lastSearcher=i,i}setCollection(e,n){if(this._docs=e,n&&!(n instanceof di))throw new Error(_a);if(this._myIndex=n||Cr(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight}),this.options.useTokenSearch){const i=Kn({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics});this._invertedIndex=ol(this._myIndex.records,this._myIndex.keys.length,i)}}add(e){if(J(e)&&(this._docs.push(e),this._myIndex.add(e),this._invertedIndex)){const n=this._myIndex.records[this._myIndex.records.length-1],i=Kn({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics});al(this._invertedIndex,n,this._myIndex.keys.length,i)}}remove(e=()=>!1){const n=[],i=[];for(let r=0,s=this._docs.length;r<s;r+=1)e(this._docs[r],r)&&(n.push(this._docs[r]),i.push(r));if(i.length){if(this._invertedIndex)for(const r of i)er(this._invertedIndex,r);for(let r=i.length-1;r>=0;r-=1)this._docs.splice(i[r],1);this._myIndex.removeAll(i)}return n}removeAt(e){this._invertedIndex&&er(this._invertedIndex,e);const n=this._docs.splice(e,1)[0];return this._myIndex.removeAt(e),n}getIndex(){return this._myIndex}search(e,n){const{limit:i=-1}=n||{},{includeMatches:r,includeScore:s,shouldSort:o,sortFn:l,ignoreFieldNorm:c}=this.options;if(W(e)&&!e.trim()){let p=this._docs.map((m,d)=>({item:m,refIndex:d}));return Ve(i)&&i>-1&&(p=p.slice(0,i)),p}const u=Ve(i)&&i>0&&W(e);let f;if(u){const p=new el(i);W(this._docs[0])?this._searchStringList(e,{heap:p,ignoreFieldNorm:c}):this._searchObjectList(e,{heap:p,ignoreFieldNorm:c}),f=p.extractSorted(l)}else f=W(e)?W(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e),tl(f,{ignoreFieldNorm:c}),o&&f.sort(l),Ve(i)&&i>-1&&(f=f.slice(0,i));return rl(f,this._docs,{includeMatches:r,includeScore:s})}_searchStringList(e,{heap:n,ignoreFieldNorm:i}={}){const r=this._getSearcher(e),{records:s}=this._myIndex,o=n?null:[];return s.forEach(({v:l,i:c,n:u})=>{if(!J(l))return;const{isMatch:f,score:p,indices:m}=r.searchIn(l);if(f){const d={item:l,idx:c,matches:[{score:p,value:l,norm:u,indices:m}]};n?(d.score=Gn(d.matches,{ignoreFieldNorm:i}),n.shouldInsert(d.score)&&n.insert(d)):o.push(d)}}),o}_searchLogical(e){const n=$r(e,this.options),i=(l,c,u)=>{if(!("children"in l)){const{keyId:d,searcher:y}=l;let v;return d===null?(v=[],this._myIndex.keys.forEach((w,_)=>{v.push(...this._findMatches({key:w,value:c[_],searcher:y}))})):v=this._findMatches({key:this._keyStore.get(d),value:this._myIndex.getValueForItemAtKeyId(c,d),searcher:y}),v&&v.length?[{idx:u,item:c,matches:v}]:[]}const{children:f,operator:p}=l,m=[];for(let d=0,y=f.length;d<y;d+=1){const v=f[d],w=i(v,c,u);if(w.length)m.push(...w);else if(p===Ke.AND)return[]}return m},r=this._myIndex.records,s=new Map,o=[];return r.forEach(({$:l,i:c})=>{if(J(l)){const u=i(n,l,c);u.length&&(s.has(c)||(s.set(c,{idx:c,item:l,matches:[]}),o.push(s.get(c))),u.forEach(({matches:f})=>{s.get(c).matches.push(...f)}))}}),o}_searchObjectList(e,{heap:n,ignoreFieldNorm:i}={}){const r=this._getSearcher(e),{keys:s,records:o}=this._myIndex,l=n?null:[];return o.forEach(({$:c,i:u})=>{if(!J(c))return;const f=[];let p=!1,m=!1;if(s.forEach((d,y)=>{const v=this._findMatches({key:d,value:c[y],searcher:r});v.length?(f.push(...v),v[0].hasInverse&&(m=!0)):p=!0}),!(m&&p)&&f.length){const d={idx:u,item:c,matches:f};n?(d.score=Gn(d.matches,{ignoreFieldNorm:i}),n.shouldInsert(d.score)&&n.insert(d)):l.push(d)}}),l}_findMatches({key:e,value:n,searcher:i}){if(!J(n))return[];const r=[];if($t(n))n.forEach(({v:s,i:o,n:l})=>{if(!J(s))return;const{isMatch:c,score:u,indices:f,hasInverse:p}=i.searchIn(s);c&&r.push({score:u,key:e,value:s,idx:o,norm:l,indices:f,hasInverse:p})});else{const{v:s,n:o}=n,{isMatch:l,score:c,indices:u,hasInverse:f}=i.searchIn(s);l&&r.push({score:c,key:e,value:s,norm:o,indices:u,hasInverse:f})}return r}}class ll{static condition(e,n){return n.useTokenSearch}constructor(e,n){this.options=n,this.analyzer=Kn({isCaseSensitive:n.isCaseSensitive,ignoreDiacritics:n.ignoreDiacritics});const i=this.analyzer.tokenize(e),r=n._invertedIndex,{df:s,fieldCount:o}=r;this.termSearchers=[],this.idfWeights=[];for(const l of i){this.termSearchers.push(new gi(l,{location:n.location,threshold:n.threshold,distance:n.distance,includeMatches:n.includeMatches,findAllMatches:n.findAllMatches,minMatchCharLength:n.minMatchCharLength,isCaseSensitive:n.isCaseSensitive,ignoreDiacritics:n.ignoreDiacritics,ignoreLocation:!0}));const c=s.get(l)||0,u=Math.log(1+(o-c+.5)/(c+.5));this.idfWeights.push(u)}}searchIn(e){if(!this.termSearchers.length)return{isMatch:!1,score:1};const n=[];let i=0,r=0,s=0;for(let c=0;c<this.termSearchers.length;c++){const u=this.termSearchers[c].searchIn(e),f=this.idfWeights[c];r+=f,u.isMatch&&(s++,i+=f*(1-u.score),u.indices&&n.push(...u.indices))}if(s===0)return{isMatch:!1,score:1};const o=r>0?1-i/r:0,l={isMatch:!0,score:Math.max(.001,o)};return this.options.includeMatches&&n.length&&(l.indices=pi(n)),l}}ft.version="7.3.0";ft.createIndex=Cr;ft.parseIndex=Oa;ft.config=L;ft.match=function(t,e,n){return Ge(t,{...L,...n}).searchIn(e)};ft.parseQuery=$r;mi(Ja);mi(ll);ft.use=function(...t){t.forEach(e=>mi(e))};function Rr(t,e){const n=new ft(e.filterProperties,{keys:["title"]});if(!(t.target instanceof HTMLInputElement))return;const i=t.target.value,s=n.search(i).map(o=>o.item.key||o.item.keys.join("|"));Object.keys(e.filters).forEach(o=>{e.querySelector(`[data-details="${o}"]`).parentElement.style.display=s.includes(o)||!i?"":"none"})}function cl(t,e){if(!(t.target instanceof HTMLElement))return;const n=t.target.getAttribute("data-close").replace("|","-");e.querySelector(`#filter-${n}`).reset(),e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}const Jn=Math.min,Zt=Math.max,Je=Math.round,qe=Math.floor,lt=t=>({x:t,y:t});function ul(t,e){return typeof t=="function"?t(e):t}function fl(t){return t.split("-")[0]}function hl(t){return t.split("-")[1]}function dl(t){return t==="x"?"y":"x"}function pl(t){return t==="y"?"height":"width"}function Br(t){const e=t[0];return e==="t"||e==="b"?"y":"x"}function gl(t){return dl(Br(t))}function ml(t){return{top:0,right:0,bottom:0,left:0,...t}}function yl(t){return typeof t!="number"?ml(t):{top:t,right:t,bottom:t,left:t}}function Qe(t){const{x:e,y:n,width:i,height:r}=t;return{width:i,height:r,top:n,left:e,right:e+i,bottom:n+r,x:e,y:n}}function nr(t,e,n){let{reference:i,floating:r}=t;const s=Br(e),o=gl(e),l=pl(o),c=fl(e),u=s==="y",f=i.x+i.width/2-r.width/2,p=i.y+i.height/2-r.height/2,m=i[l]/2-r[l]/2;let d;switch(c){case"top":d={x:f,y:i.y-r.height};break;case"bottom":d={x:f,y:i.y+i.height};break;case"right":d={x:i.x+i.width,y:p};break;case"left":d={x:i.x-r.width,y:p};break;default:d={x:i.x,y:i.y}}switch(hl(e)){case"start":d[o]-=m*(n&&u?-1:1);break;case"end":d[o]+=m*(n&&u?-1:1);break}return d}async function vl(t,e){var n;e===void 0&&(e={});const{x:i,y:r,platform:s,rects:o,elements:l,strategy:c}=t,{boundary:u="clippingAncestors",rootBoundary:f="viewport",elementContext:p="floating",altBoundary:m=!1,padding:d=0}=ul(e,t),y=yl(d),w=l[m?p==="floating"?"reference":"floating":p],_=Qe(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(w)))==null||n?w:w.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:u,rootBoundary:f,strategy:c})),C=p==="floating"?{x:i,y:r,width:o.floating.width,height:o.floating.height}:o.reference,A=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),$=await(s.isElement==null?void 0:s.isElement(A))?await(s.getScale==null?void 0:s.getScale(A))||{x:1,y:1}:{x:1,y:1},D=Qe(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:C,offsetParent:A,strategy:c}):C);return{top:(_.top-D.top+y.top)/$.y,bottom:(D.bottom-_.bottom+y.bottom)/$.y,left:(_.left-D.left+y.left)/$.x,right:(D.right-_.right+y.right)/$.x}}const bl=50,wl=async(t,e,n)=>{const{placement:i="bottom",strategy:r="absolute",middleware:s=[],platform:o}=n,l=o.detectOverflow?o:{...o,detectOverflow:vl},c=await(o.isRTL==null?void 0:o.isRTL(e));let u=await o.getElementRects({reference:t,floating:e,strategy:r}),{x:f,y:p}=nr(u,i,c),m=i,d=0;const y={};for(let v=0;v<s.length;v++){const w=s[v];if(!w)continue;const{name:_,fn:C}=w,{x:A,y:$,data:D,reset:H}=await C({x:f,y:p,initialPlacement:i,placement:m,strategy:r,middlewareData:y,rects:u,platform:l,elements:{reference:t,floating:e}});f=A??f,p=$??p,y[_]={...y[_],...D},H&&d<bl&&(d++,typeof H=="object"&&(H.placement&&(m=H.placement),H.rects&&(u=H.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:r}):H.rects),{x:f,y:p}=nr(u,m,c)),v=-1)}return{x:f,y:p,placement:m,strategy:r,middlewareData:y}};function un(){return typeof window<"u"}function oe(t){return Dr(t)?(t.nodeName||"").toLowerCase():"#document"}function Z(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function ht(t){var e;return(e=(Dr(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Dr(t){return un()?t instanceof Node||t instanceof Z(t).Node:!1}function st(t){return un()?t instanceof Element||t instanceof Z(t).Element:!1}function wt(t){return un()?t instanceof HTMLElement||t instanceof Z(t).HTMLElement:!1}function ir(t){return!un()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Z(t).ShadowRoot}function Ae(t){const{overflow:e,overflowX:n,overflowY:i,display:r}=ot(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&r!=="inline"&&r!=="contents"}function xl(t){return/^(table|td|th)$/.test(oe(t))}function fn(t){try{if(t.matches(":popover-open"))return!0}catch{}try{return t.matches(":modal")}catch{return!1}}const _l=/transform|translate|scale|rotate|perspective|filter/,Ml=/paint|layout|strict|content/,Ot=t=>!!t&&t!=="none";let Dn;function yi(t){const e=st(t)?ot(t):t;return Ot(e.transform)||Ot(e.translate)||Ot(e.scale)||Ot(e.rotate)||Ot(e.perspective)||!vi()&&(Ot(e.backdropFilter)||Ot(e.filter))||_l.test(e.willChange||"")||Ml.test(e.contain||"")}function Al(t){let e=Lt(t);for(;wt(e)&&!ne(e);){if(yi(e))return e;if(fn(e))return null;e=Lt(e)}return null}function vi(){return Dn==null&&(Dn=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Dn}function ne(t){return/^(html|body|#document)$/.test(oe(t))}function ot(t){return Z(t).getComputedStyle(t)}function hn(t){return st(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Lt(t){if(oe(t)==="html")return t;const e=t.assignedSlot||t.parentNode||ir(t)&&t.host||ht(t);return ir(e)?e.host:e}function Pr(t){const e=Lt(t);return ne(e)?t.ownerDocument?t.ownerDocument.body:t.body:wt(e)&&Ae(e)?e:Pr(e)}function we(t,e,n){var i;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=Pr(t),s=r===((i=t.ownerDocument)==null?void 0:i.body),o=Z(r);if(s){const l=Qn(o);return e.concat(o,o.visualViewport||[],Ae(r)?r:[],l&&n?we(l):[])}else return e.concat(r,we(r,[],n))}function Qn(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function kr(t){const e=ot(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=wt(t),s=r?t.offsetWidth:n,o=r?t.offsetHeight:i,l=Je(n)!==s||Je(i)!==o;return l&&(n=s,i=o),{width:n,height:i,$:l}}function bi(t){return st(t)?t:t.contextElement}function te(t){const e=bi(t);if(!wt(e))return lt(1);const n=e.getBoundingClientRect(),{width:i,height:r,$:s}=kr(e);let o=(s?Je(n.width):n.width)/i,l=(s?Je(n.height):n.height)/r;return(!o||!Number.isFinite(o))&&(o=1),(!l||!Number.isFinite(l))&&(l=1),{x:o,y:l}}const Cl=lt(0);function Or(t){const e=Z(t);return!vi()||!e.visualViewport?Cl:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Sl(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==Z(t)?!1:e}function Ft(t,e,n,i){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),s=bi(t);let o=lt(1);e&&(i?st(i)&&(o=te(i)):o=te(t));const l=Sl(s,n,i)?Or(s):lt(0);let c=(r.left+l.x)/o.x,u=(r.top+l.y)/o.y,f=r.width/o.x,p=r.height/o.y;if(s){const m=Z(s),d=i&&st(i)?Z(i):i;let y=m,v=Qn(y);for(;v&&i&&d!==y;){const w=te(v),_=v.getBoundingClientRect(),C=ot(v),A=_.left+(v.clientLeft+parseFloat(C.paddingLeft))*w.x,$=_.top+(v.clientTop+parseFloat(C.paddingTop))*w.y;c*=w.x,u*=w.y,f*=w.x,p*=w.y,c+=A,u+=$,y=Z(v),v=Qn(y)}}return Qe({width:f,height:p,x:c,y:u})}function dn(t,e){const n=hn(t).scrollLeft;return e?e.left+n:Ft(ht(t)).left+n}function Tr(t,e){const n=t.getBoundingClientRect(),i=n.left+e.scrollLeft-dn(t,n),r=n.top+e.scrollTop;return{x:i,y:r}}function Ll(t){let{elements:e,rect:n,offsetParent:i,strategy:r}=t;const s=r==="fixed",o=ht(i),l=e?fn(e.floating):!1;if(i===o||l&&s)return n;let c={scrollLeft:0,scrollTop:0},u=lt(1);const f=lt(0),p=wt(i);if((p||!p&&!s)&&((oe(i)!=="body"||Ae(o))&&(c=hn(i)),p)){const d=Ft(i);u=te(i),f.x=d.x+i.clientLeft,f.y=d.y+i.clientTop}const m=o&&!p&&!s?Tr(o,c):lt(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-c.scrollLeft*u.x+f.x+m.x,y:n.y*u.y-c.scrollTop*u.y+f.y+m.y}}function El(t){return Array.from(t.getClientRects())}function $l(t){const e=ht(t),n=hn(t),i=t.ownerDocument.body,r=Zt(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=Zt(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let o=-n.scrollLeft+dn(t);const l=-n.scrollTop;return ot(i).direction==="rtl"&&(o+=Zt(e.clientWidth,i.clientWidth)-r),{width:r,height:s,x:o,y:l}}const rr=25;function Rl(t,e){const n=Z(t),i=ht(t),r=n.visualViewport;let s=i.clientWidth,o=i.clientHeight,l=0,c=0;if(r){s=r.width,o=r.height;const f=vi();(!f||f&&e==="fixed")&&(l=r.offsetLeft,c=r.offsetTop)}const u=dn(i);if(u<=0){const f=i.ownerDocument,p=f.body,m=getComputedStyle(p),d=f.compatMode==="CSS1Compat"&&parseFloat(m.marginLeft)+parseFloat(m.marginRight)||0,y=Math.abs(i.clientWidth-p.clientWidth-d);y<=rr&&(s-=y)}else u<=rr&&(s+=u);return{width:s,height:o,x:l,y:c}}function Bl(t,e){const n=Ft(t,!0,e==="fixed"),i=n.top+t.clientTop,r=n.left+t.clientLeft,s=wt(t)?te(t):lt(1),o=t.clientWidth*s.x,l=t.clientHeight*s.y,c=r*s.x,u=i*s.y;return{width:o,height:l,x:c,y:u}}function sr(t,e,n){let i;if(e==="viewport")i=Rl(t,n);else if(e==="document")i=$l(ht(t));else if(st(e))i=Bl(e,n);else{const r=Or(t);i={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return Qe(i)}function Ir(t,e){const n=Lt(t);return n===e||!st(n)||ne(n)?!1:ot(n).position==="fixed"||Ir(n,e)}function Dl(t,e){const n=e.get(t);if(n)return n;let i=we(t,[],!1).filter(l=>st(l)&&oe(l)!=="body"),r=null;const s=ot(t).position==="fixed";let o=s?Lt(t):t;for(;st(o)&&!ne(o);){const l=ot(o),c=yi(o);!c&&l.position==="fixed"&&(r=null),(s?!c&&!r:!c&&l.position==="static"&&!!r&&(r.position==="absolute"||r.position==="fixed")||Ae(o)&&!c&&Ir(t,o))?i=i.filter(f=>f!==o):r=l,o=Lt(o)}return e.set(t,i),i}function Pl(t){let{element:e,boundary:n,rootBoundary:i,strategy:r}=t;const o=[...n==="clippingAncestors"?fn(e)?[]:Dl(e,this._c):[].concat(n),i],l=sr(e,o[0],r);let c=l.top,u=l.right,f=l.bottom,p=l.left;for(let m=1;m<o.length;m++){const d=sr(e,o[m],r);c=Zt(d.top,c),u=Jn(d.right,u),f=Jn(d.bottom,f),p=Zt(d.left,p)}return{width:u-p,height:f-c,x:p,y:c}}function kl(t){const{width:e,height:n}=kr(t);return{width:e,height:n}}function Ol(t,e,n){const i=wt(e),r=ht(e),s=n==="fixed",o=Ft(t,!0,s,e);let l={scrollLeft:0,scrollTop:0};const c=lt(0);function u(){c.x=dn(r)}if(i||!i&&!s)if((oe(e)!=="body"||Ae(r))&&(l=hn(e)),i){const d=Ft(e,!0,s,e);c.x=d.x+e.clientLeft,c.y=d.y+e.clientTop}else r&&u();s&&!i&&r&&u();const f=r&&!i&&!s?Tr(r,l):lt(0),p=o.left+l.scrollLeft-c.x-f.x,m=o.top+l.scrollTop-c.y-f.y;return{x:p,y:m,width:o.width,height:o.height}}function Pn(t){return ot(t).position==="static"}function or(t,e){if(!wt(t)||ot(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return ht(t)===n&&(n=n.ownerDocument.body),n}function jr(t,e){const n=Z(t);if(fn(t))return n;if(!wt(t)){let r=Lt(t);for(;r&&!ne(r);){if(st(r)&&!Pn(r))return r;r=Lt(r)}return n}let i=or(t,e);for(;i&&xl(i)&&Pn(i);)i=or(i,e);return i&&ne(i)&&Pn(i)&&!yi(i)?n:i||Al(t)||n}const Tl=async function(t){const e=this.getOffsetParent||jr,n=this.getDimensions,i=await n(t.floating);return{reference:Ol(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Il(t){return ot(t).direction==="rtl"}const jl={convertOffsetParentRelativeRectToViewportRelativeRect:Ll,getDocumentElement:ht,getClippingRect:Pl,getOffsetParent:jr,getElementRects:Tl,getClientRects:El,getDimensions:kl,getScale:te,isElement:st,isRTL:Il};function Nr(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Nl(t,e){let n=null,i;const r=ht(t);function s(){var l;clearTimeout(i),(l=n)==null||l.disconnect(),n=null}function o(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),s();const u=t.getBoundingClientRect(),{left:f,top:p,width:m,height:d}=u;if(l||e(),!m||!d)return;const y=qe(p),v=qe(r.clientWidth-(f+m)),w=qe(r.clientHeight-(p+d)),_=qe(f),A={rootMargin:-y+"px "+-v+"px "+-w+"px "+-_+"px",threshold:Zt(0,Jn(1,c))||1};let $=!0;function D(H){const tt=H[0].intersectionRatio;if(tt!==c){if(!$)return o();tt?o(!1,tt):i=setTimeout(()=>{o(!1,1e-7)},1e3)}tt===1&&!Nr(u,t.getBoundingClientRect())&&o(),$=!1}try{n=new IntersectionObserver(D,{...A,root:r.ownerDocument})}catch{n=new IntersectionObserver(D,A)}n.observe(t)}return o(!0),s}function Fl(t,e,n,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=i,u=bi(t),f=r||s?[...u?we(u):[],...e?we(e):[]]:[];f.forEach(_=>{r&&_.addEventListener("scroll",n,{passive:!0}),s&&_.addEventListener("resize",n)});const p=u&&l?Nl(u,n):null;let m=-1,d=null;o&&(d=new ResizeObserver(_=>{let[C]=_;C&&C.target===u&&d&&e&&(d.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var A;(A=d)==null||A.observe(e)})),n()}),u&&!c&&d.observe(u),e&&d.observe(e));let y,v=c?Ft(t):null;c&&w();function w(){const _=Ft(t);v&&!Nr(v,_)&&n(),v=_,y=requestAnimationFrame(w)}return n(),()=>{var _;f.forEach(C=>{r&&C.removeEventListener("scroll",n),s&&C.removeEventListener("resize",n)}),p==null||p(),(_=d)==null||_.disconnect(),d=null,c&&cancelAnimationFrame(y)}}const Hl=(t,e,n)=>{const i=new Map,r={platform:jl,...n},s={...r.platform,_c:i};return wl(t,e,{...r,platform:s})};function ql(t){const e=t.renderRoot.querySelector(".inline-container-wrapper"),n=t.renderRoot.querySelector("[popover]");return Fl(e,n,()=>{n.matches(":popover-open")&&Hl(e,n,{strategy:"fixed"}).then(({x:r,y:s})=>{Object.assign(n.style,{left:`${r}px`,top:`${s}px`,width:`${e.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function Fr(t){t.renderRoot.querySelector("#eox-itemfilter-input-search").value="",Rr({target:{value:""}},t)}function zl(t,e){e.inlineMode&&t.stopPropagation()}function Yl(t){t.inlineMode&&(t.showDropdown=!0)}function Xl(t,e){e.inlineMode&&(t.stopPropagation(),e.showDropdown=!0)}function Wl(t,e){e.inlineMode&&t.key==="Escape"&&e.showDropdown&&(Fr(e),e.showDropdown=!1)}function Ul(t,e){e.inlineMode&&t.target instanceof HTMLElement&&t.target.tagName!=="DROPDOWN-FORM"&&t.target.tagName!=="EOX-ITEMFILTER"&&e.showDropdown&&(Fr(e),e.showDropdown=!1)}function Vl(t,e){var n,i,r=0,s,o,l,c,u,f,p,m=t[0],d=t[1],y=e.length;for(n=0;n<y;n++){i=0;var v=e[n],w=v.length-1;if(f=v[0],f[0]!==v[w][0]&&f[1]!==v[w][1])throw new Error("First and last coordinates in a ring must be the same");for(o=f[0]-m,l=f[1]-d,i;i<w;i++){if(p=v[i+1],c=p[0]-m,u=p[1]-d,l===0&&u===0){if(c<=0&&o>=0||o<=0&&c>=0)return 0}else if(u>=0&&l<=0||u<=0&&l>=0){if(s=da(o,c,l,u,0,0),s===0)return 0;(s>0&&u>0&&l<=0||s<0&&u<=0&&l>0)&&r++}f=p,l=u,o=c}}return r%2!==0}function ct(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if(t.type==="Feature"&&t.geometry!==null&&t.geometry.type==="Point")return[...t.geometry.coordinates];if(t.type==="Point")return[...t.coordinates]}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return[...t];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function Nt(t){if(Array.isArray(t))return t;if(t.type==="Feature"){if(t.geometry!==null)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function ie(t){return t.type==="Feature"?t.geometry:t}function ar(t,e){return t.type==="FeatureCollection"?"FeatureCollection":t.type==="GeometryCollection"?"GeometryCollection":t.type==="Feature"&&t.geometry!==null?t.geometry.type:t.type}function rt(t,e,n={}){if(!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");const i=ct(t),r=ie(e),s=r.type,o=e.bbox;let l=r.coordinates;if(o&&Gl(i,o)===!1)return!1;s==="Polygon"&&(l=[l]);let c=!1;for(var u=0;u<l.length;++u){const f=Vl(i,l[u]);if(f===0)return!n.ignoreBoundary;f&&(c=!0)}return c}function Gl(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}class Hr{constructor(e=[],n=Kl){if(this.data=e,this.length=this.data.length,this.compare=n,this.length>0)for(let i=(this.length>>1)-1;i>=0;i--)this._down(i)}push(e){this.data.push(e),this.length++,this._up(this.length-1)}pop(){if(this.length===0)return;const e=this.data[0],n=this.data.pop();return this.length--,this.length>0&&(this.data[0]=n,this._down(0)),e}peek(){return this.data[0]}_up(e){const{data:n,compare:i}=this,r=n[e];for(;e>0;){const s=e-1>>1,o=n[s];if(i(r,o)>=0)break;n[e]=o,e=s}n[e]=r}_down(e){const{data:n,compare:i}=this,r=this.length>>1,s=n[e];for(;e<r;){let o=(e<<1)+1,l=n[o];const c=o+1;if(c<this.length&&i(n[c],l)<0&&(o=c,l=n[c]),i(l,s)>=0)break;n[e]=l,e=o}n[e]=s}}function Kl(t,e){return t<e?-1:t>e?1:0}function qr(t,e){return t.p.x>e.p.x?1:t.p.x<e.p.x?-1:t.p.y!==e.p.y?t.p.y>e.p.y?1:-1:1}function Jl(t,e){return t.rightSweepEvent.p.x>e.rightSweepEvent.p.x?1:t.rightSweepEvent.p.x<e.rightSweepEvent.p.x?-1:t.rightSweepEvent.p.y!==e.rightSweepEvent.p.y?t.rightSweepEvent.p.y<e.rightSweepEvent.p.y?1:-1:1}class lr{constructor(e,n,i,r){this.p={x:e[0],y:e[1]},this.featureId=n,this.ringId=i,this.eventId=r,this.otherEvent=null,this.isLeftEndpoint=null}isSamePoint(e){return this.p.x===e.p.x&&this.p.y===e.p.y}}function Ql(t,e){if(t.type==="FeatureCollection"){const n=t.features;for(let i=0;i<n.length;i++)cr(n[i],e)}else cr(t,e)}let ze=0,Ye=0,Xe=0;function cr(t,e){const n=t.type==="Feature"?t.geometry:t;let i=n.coordinates;(n.type==="Polygon"||n.type==="MultiLineString")&&(i=[i]),n.type==="LineString"&&(i=[[i]]);for(let r=0;r<i.length;r++)for(let s=0;s<i[r].length;s++){let o=i[r][s][0],l=null;Ye=Ye+1;for(let c=0;c<i[r][s].length-1;c++){l=i[r][s][c+1];const u=new lr(o,ze,Ye,Xe),f=new lr(l,ze,Ye,Xe+1);u.otherEvent=f,f.otherEvent=u,qr(u,f)>0?(f.isLeftEndpoint=!0,u.isLeftEndpoint=!1):(u.isLeftEndpoint=!0,f.isLeftEndpoint=!1),e.push(u),e.push(f),o=l,Xe=Xe+1}}ze=ze+1}class Zl{constructor(e){this.leftSweepEvent=e,this.rightSweepEvent=e.otherEvent}}function tc(t,e){if(t===null||e===null||t.leftSweepEvent.ringId===e.leftSweepEvent.ringId&&(t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.rightSweepEvent)||t.leftSweepEvent.isSamePoint(e.leftSweepEvent)||t.leftSweepEvent.isSamePoint(e.rightSweepEvent)))return!1;const n=t.leftSweepEvent.p.x,i=t.leftSweepEvent.p.y,r=t.rightSweepEvent.p.x,s=t.rightSweepEvent.p.y,o=e.leftSweepEvent.p.x,l=e.leftSweepEvent.p.y,c=e.rightSweepEvent.p.x,u=e.rightSweepEvent.p.y,f=(u-l)*(r-n)-(c-o)*(s-i),p=(c-o)*(i-l)-(u-l)*(n-o),m=(r-n)*(i-l)-(s-i)*(n-o);if(f===0)return!1;const d=p/f,y=m/f;if(d>=0&&d<=1&&y>=0&&y<=1){const v=n+d*(r-n),w=i+d*(s-i);return[v,w]}return!1}function ec(t,e){e=e||!1;const n=[],i=new Hr([],Jl);for(;t.length;){const r=t.pop();if(r.isLeftEndpoint){const s=new Zl(r);for(let o=0;o<i.data.length;o++){const l=i.data[o];if(e&&l.leftSweepEvent.featureId===r.featureId)continue;const c=tc(s,l);c!==!1&&n.push(c)}i.push(s)}else r.isLeftEndpoint===!1&&i.pop()}return n}function nc(t,e){const n=new Hr([],qr);return Ql(t,n),ec(n,e)}var ic=nc;function pn(t,e,n={}){const{removeDuplicates:i=!0,ignoreSelfIntersections:r=!0}=n;let s=[];t.type==="FeatureCollection"?s=s.concat(t.features):t.type==="Feature"?s.push(t):(t.type==="LineString"||t.type==="Polygon"||t.type==="MultiLineString"||t.type==="MultiPolygon")&&s.push(ee(t)),e.type==="FeatureCollection"?s=s.concat(e.features):e.type==="Feature"?s.push(e):(e.type==="LineString"||e.type==="Polygon"||e.type==="MultiLineString"||e.type==="MultiPolygon")&&s.push(ee(e));const o=ic(it(s),r);let l=[];if(i){const c={};o.forEach(u=>{const f=u.join(",");c[f]||(c[f]=!0,l.push(u))})}else l=o;return it(l.map(c=>ge(c)))}function wi(t,e,n){if(t!==null)for(var i,r,s,o,l,c,u,f=0,p=0,m,d=t.type,y=d==="FeatureCollection",v=d==="Feature",w=y?t.features.length:1,_=0;_<w;_++){u=y?t.features[_].geometry:v?t.geometry:t,m=u?u.type==="GeometryCollection":!1,l=m?u.geometries.length:1;for(var C=0;C<l;C++){var A=0,$=0;if(o=m?u.geometries[C]:u,o!==null){c=o.coordinates;var D=o.type;switch(f=0,D){case null:break;case"Point":if(e(c,p,_,A,$)===!1)return!1;p++,A++;break;case"LineString":case"MultiPoint":for(i=0;i<c.length;i++){if(e(c[i],p,_,A,$)===!1)return!1;p++,D==="MultiPoint"&&A++}D==="LineString"&&A++;break;case"Polygon":case"MultiLineString":for(i=0;i<c.length;i++){for(r=0;r<c[i].length-f;r++){if(e(c[i][r],p,_,A,$)===!1)return!1;p++}D==="MultiLineString"&&A++,D==="Polygon"&&$++}D==="Polygon"&&A++;break;case"MultiPolygon":for(i=0;i<c.length;i++){for($=0,r=0;r<c[i].length;r++){for(s=0;s<c[i][r].length-f;s++){if(e(c[i][r][s],p,_,A,$)===!1)return!1;p++}$++}A++}break;case"GeometryCollection":for(i=0;i<o.geometries.length;i++)if(wi(o.geometries[i],e)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function gn(t,e){if(t.type==="Feature")e(t,0);else if(t.type==="FeatureCollection")for(var n=0;n<t.features.length&&e(t.features[n],n)!==!1;n++);}function rc(t,e,n){var i=n;return gn(t,function(r,s){s===0&&n===void 0?i=r:i=e(i,r,s)}),i}function sc(t,e){var n,i,r,s,o,l,c,u,f,p,m=0,d=t.type==="FeatureCollection",y=t.type==="Feature",v=d?t.features.length:1;for(n=0;n<v;n++){for(l=d?t.features[n].geometry:y?t.geometry:t,u=d?t.features[n].properties:y?t.properties:{},f=d?t.features[n].bbox:y?t.bbox:void 0,p=d?t.features[n].id:y?t.id:void 0,c=l?l.type==="GeometryCollection":!1,o=c?l.geometries.length:1,r=0;r<o;r++){if(s=c?l.geometries[r]:l,s===null){if(e(null,m,u,f,p)===!1)return!1;continue}switch(s.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(s,m,u,f,p)===!1)return!1;break}case"GeometryCollection":{for(i=0;i<s.geometries.length;i++)if(e(s.geometries[i],m,u,f,p)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}m++}}function Ht(t,e){sc(t,function(n,i,r,s,o){var l=n===null?null:n.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return e(ee(n,r,{bbox:s,id:o}),i,0)===!1?!1:void 0}var c;switch(l){case"MultiPoint":c="Point";break;case"MultiLineString":c="LineString";break;case"MultiPolygon":c="Polygon";break}for(var u=0;u<n.coordinates.length;u++){var f=n.coordinates[u],p={type:c,coordinates:f};if(e(ee(p,r),i,u)===!1)return!1}})}function Zn(t,e={}){const n=ie(t);switch(!e.properties&&t.type==="Feature"&&(e.properties=t.properties),n.type){case"Polygon":return oc(n,e);case"MultiPolygon":return ac(n,e);default:throw new Error("invalid poly")}}function oc(t,e={}){const i=ie(t).coordinates,r=e.properties?e.properties:t.type==="Feature"?t.properties:{};return zr(i,r)}function ac(t,e={}){const i=ie(t).coordinates,r=e.properties?e.properties:t.type==="Feature"?t.properties:{},s=[];return i.forEach(o=>{s.push(zr(o,r))}),it(s)}function zr(t,e){return t.length>1?pa(t,e):ve(t[0],e)}function lc(t,e,{ignoreSelfIntersections:n=!0}={ignoreSelfIntersections:!0}){let i=!0;return Ht(t,r=>{Ht(e,s=>{if(i===!1)return!1;i=cc(r.geometry,s.geometry,n)})}),i}function cc(t,e,n){switch(t.type){case"Point":switch(e.type){case"Point":return!dc(t.coordinates,e.coordinates);case"LineString":return!ur(e,t);case"Polygon":return!rt(t,e)}break;case"LineString":switch(e.type){case"Point":return!ur(t,e);case"LineString":return!uc(t,e,n);case"Polygon":return!fr(e,t,n)}break;case"Polygon":switch(e.type){case"Point":return!rt(e,t);case"LineString":return!fr(t,e,n);case"Polygon":return!fc(e,t,n)}}return!1}function ur(t,e){for(let n=0;n<t.coordinates.length-1;n++)if(hc(t.coordinates[n],t.coordinates[n+1],e.coordinates))return!0;return!1}function uc(t,e,n){return pn(t,e,{ignoreSelfIntersections:n}).features.length>0}function fr(t,e,n){for(const r of e.coordinates)if(rt(r,t))return!0;return pn(e,Zn(t),{ignoreSelfIntersections:n}).features.length>0}function fc(t,e,n){for(const r of t.coordinates[0])if(rt(r,e))return!0;for(const r of e.coordinates[0])if(rt(r,t))return!0;return pn(Zn(t),Zn(e),{ignoreSelfIntersections:n}).features.length>0}function hc(t,e,n){const i=n[0]-t[0],r=n[1]-t[1],s=e[0]-t[0],o=e[1]-t[1];return i*o-r*s!==0?!1:Math.abs(s)>=Math.abs(o)?s>0?t[0]<=n[0]&&n[0]<=e[0]:e[0]<=n[0]&&n[0]<=t[0]:o>0?t[1]<=n[1]&&n[1]<=e[1]:e[1]<=n[1]&&n[1]<=t[1]}function dc(t,e){return t[0]===e[0]&&t[1]===e[1]}function pc(t,e,{ignoreSelfIntersections:n=!0}={}){let i=!1;return Ht(t,r=>{Ht(e,s=>{if(i===!0)return!0;i=!lc(r.geometry,s.geometry,{ignoreSelfIntersections:n})})}),i}var gc=pc;function at(t,e={}){if(t.bbox!=null&&e.recompute!==!0)return t.bbox;const n=[1/0,1/0,-1/0,-1/0];return wi(t,i=>{n[0]>i[0]&&(n[0]=i[0]),n[1]>i[1]&&(n[1]=i[1]),n[2]<i[0]&&(n[2]=i[0]),n[3]<i[1]&&(n[3]=i[1])}),n}function Ze(t,e,n={}){const i=ct(t),r=Nt(e);for(let s=0;s<r.length-1;s++){let o=!1;if(n.ignoreEndVertices&&(s===0&&(o="start"),s===r.length-2&&(o="end"),s===0&&s+1===r.length-1&&(o="both")),mc(r[s],r[s+1],i,o,typeof n.epsilon>"u"?null:n.epsilon))return!0}return!1}function mc(t,e,n,i,r){const s=n[0],o=n[1],l=t[0],c=t[1],u=e[0],f=e[1],p=n[0]-l,m=n[1]-c,d=u-l,y=f-c,v=p*y-m*d;if(r!==null){if(Math.abs(v)>r)return!1}else if(v!==0)return!1;if(Math.abs(d)===Math.abs(y)&&Math.abs(d)===0)return i?!1:n[0]===t[0]&&n[1]===t[1];if(i){if(i==="start")return Math.abs(d)>=Math.abs(y)?d>0?l<s&&s<=u:u<=s&&s<l:y>0?c<o&&o<=f:f<=o&&o<c;if(i==="end")return Math.abs(d)>=Math.abs(y)?d>0?l<=s&&s<u:u<s&&s<=l:y>0?c<=o&&o<f:f<o&&o<=c;if(i==="both")return Math.abs(d)>=Math.abs(y)?d>0?l<s&&s<u:u<s&&s<l:y>0?c<o&&o<f:f<o&&o<c}else return Math.abs(d)>=Math.abs(y)?d>0?l<=s&&s<=u:u<=s&&s<=l:y>0?c<=o&&o<=f:f<=o&&o<=c;return!1}function yc(t,e,n,i,r){Yr(t,e,n||0,i||t.length-1,r||vc)}function Yr(t,e,n,i,r){for(;i>n;){if(i-n>600){var s=i-n+1,o=e-n+1,l=Math.log(s),c=.5*Math.exp(2*l/3),u=.5*Math.sqrt(l*c*(s-c)/s)*(o-s/2<0?-1:1),f=Math.max(n,Math.floor(e-o*c/s+u)),p=Math.min(i,Math.floor(e+(s-o)*c/s+u));Yr(t,e,f,p,r)}var m=t[e],d=n,y=i;for(de(t,n,e),r(t[i],m)>0&&de(t,n,i);d<y;){for(de(t,d,y),d++,y--;r(t[d],m)<0;)d++;for(;r(t[y],m)>0;)y--}r(t[n],m)===0?de(t,n,y):(y++,de(t,y,i)),y<=e&&(n=y+1),e<=y&&(i=y-1)}}function de(t,e,n){var i=t[e];t[e]=t[n],t[n]=i}function vc(t,e){return t<e?-1:t>e?1:0}let bc=class{constructor(e=9){this._maxEntries=Math.max(4,e),this._minEntries=Math.max(2,Math.ceil(this._maxEntries*.4)),this.clear()}all(){return this._all(this.data,[])}search(e){let n=this.data;const i=[];if(!Ue(e,n))return i;const r=this.toBBox,s=[];for(;n;){for(let o=0;o<n.children.length;o++){const l=n.children[o],c=n.leaf?r(l):l;Ue(e,c)&&(n.leaf?i.push(l):On(e,c)?this._all(l,i):s.push(l))}n=s.pop()}return i}collides(e){let n=this.data;if(!Ue(e,n))return!1;const i=[];for(;n;){for(let r=0;r<n.children.length;r++){const s=n.children[r],o=n.leaf?this.toBBox(s):s;if(Ue(e,o)){if(n.leaf||On(e,o))return!0;i.push(s)}}n=i.pop()}return!1}load(e){if(!(e&&e.length))return this;if(e.length<this._minEntries){for(let i=0;i<e.length;i++)this.insert(e[i]);return this}let n=this._build(e.slice(),0,e.length-1,0);if(!this.data.children.length)this.data=n;else if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){const i=this.data;this.data=n,n=i}this._insert(n,this.data.height-n.height-1,!0)}return this}insert(e){return e&&this._insert(e,this.data.height-1),this}clear(){return this.data=Jt([]),this}remove(e,n){if(!e)return this;let i=this.data;const r=this.toBBox(e),s=[],o=[];let l,c,u;for(;i||s.length;){if(i||(i=s.pop(),c=s[s.length-1],l=o.pop(),u=!0),i.leaf){const f=wc(e,i.children,n);if(f!==-1)return i.children.splice(f,1),s.push(i),this._condense(s),this}!u&&!i.leaf&&On(i,r)?(s.push(i),o.push(l),l=0,c=i,i=i.children[0]):c?(l++,i=c.children[l],u=!1):i=null}return this}toBBox(e){return e}compareMinX(e,n){return e.minX-n.minX}compareMinY(e,n){return e.minY-n.minY}toJSON(){return this.data}fromJSON(e){return this.data=e,this}_all(e,n){const i=[];for(;e;)e.leaf?n.push(...e.children):i.push(...e.children),e=i.pop();return n}_build(e,n,i,r){const s=i-n+1;let o=this._maxEntries,l;if(s<=o)return l=Jt(e.slice(n,i+1)),Kt(l,this.toBBox),l;r||(r=Math.ceil(Math.log(s)/Math.log(o)),o=Math.ceil(s/Math.pow(o,r-1))),l=Jt([]),l.leaf=!1,l.height=r;const c=Math.ceil(s/o),u=c*Math.ceil(Math.sqrt(o));hr(e,n,i,u,this.compareMinX);for(let f=n;f<=i;f+=u){const p=Math.min(f+u-1,i);hr(e,f,p,c,this.compareMinY);for(let m=f;m<=p;m+=c){const d=Math.min(m+c-1,p);l.children.push(this._build(e,m,d,r-1))}}return Kt(l,this.toBBox),l}_chooseSubtree(e,n,i,r){for(;r.push(n),!(n.leaf||r.length-1===i);){let s=1/0,o=1/0,l;for(let c=0;c<n.children.length;c++){const u=n.children[c],f=kn(u),p=Mc(e,u)-f;p<o?(o=p,s=f<s?f:s,l=u):p===o&&f<s&&(s=f,l=u)}n=l||n.children[0]}return n}_insert(e,n,i){const r=i?e:this.toBBox(e),s=[],o=this._chooseSubtree(r,this.data,n,s);for(o.children.push(e),ye(o,r);n>=0&&s[n].children.length>this._maxEntries;)this._split(s,n),n--;this._adjustParentBBoxes(r,s,n)}_split(e,n){const i=e[n],r=i.children.length,s=this._minEntries;this._chooseSplitAxis(i,s,r);const o=this._chooseSplitIndex(i,s,r),l=Jt(i.children.splice(o,i.children.length-o));l.height=i.height,l.leaf=i.leaf,Kt(i,this.toBBox),Kt(l,this.toBBox),n?e[n-1].children.push(l):this._splitRoot(i,l)}_splitRoot(e,n){this.data=Jt([e,n]),this.data.height=e.height+1,this.data.leaf=!1,Kt(this.data,this.toBBox)}_chooseSplitIndex(e,n,i){let r,s=1/0,o=1/0;for(let l=n;l<=i-n;l++){const c=me(e,0,l,this.toBBox),u=me(e,l,i,this.toBBox),f=Ac(c,u),p=kn(c)+kn(u);f<s?(s=f,r=l,o=p<o?p:o):f===s&&p<o&&(o=p,r=l)}return r||i-n}_chooseSplitAxis(e,n,i){const r=e.leaf?this.compareMinX:xc,s=e.leaf?this.compareMinY:_c,o=this._allDistMargin(e,n,i,r),l=this._allDistMargin(e,n,i,s);o<l&&e.children.sort(r)}_allDistMargin(e,n,i,r){e.children.sort(r);const s=this.toBBox,o=me(e,0,n,s),l=me(e,i-n,i,s);let c=We(o)+We(l);for(let u=n;u<i-n;u++){const f=e.children[u];ye(o,e.leaf?s(f):f),c+=We(o)}for(let u=i-n-1;u>=n;u--){const f=e.children[u];ye(l,e.leaf?s(f):f),c+=We(l)}return c}_adjustParentBBoxes(e,n,i){for(let r=i;r>=0;r--)ye(n[r],e)}_condense(e){for(let n=e.length-1,i;n>=0;n--)e[n].children.length===0?n>0?(i=e[n-1].children,i.splice(i.indexOf(e[n]),1)):this.clear():Kt(e[n],this.toBBox)}};function wc(t,e,n){if(!n)return e.indexOf(t);for(let i=0;i<e.length;i++)if(n(t,e[i]))return i;return-1}function Kt(t,e){me(t,0,t.children.length,e,t)}function me(t,e,n,i,r){r||(r=Jt(null)),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(let s=e;s<n;s++){const o=t.children[s];ye(r,t.leaf?i(o):o)}return r}function ye(t,e){return t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY),t}function xc(t,e){return t.minX-e.minX}function _c(t,e){return t.minY-e.minY}function kn(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function We(t){return t.maxX-t.minX+(t.maxY-t.minY)}function Mc(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function Ac(t,e){const n=Math.max(t.minX,e.minX),i=Math.max(t.minY,e.minY),r=Math.min(t.maxX,e.maxX),s=Math.min(t.maxY,e.maxY);return Math.max(0,r-n)*Math.max(0,s-i)}function On(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function Ue(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function Jt(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function hr(t,e,n,i,r){const s=[e,n];for(;s.length;){if(n=s.pop(),e=s.pop(),n-e<=i)continue;const o=e+Math.ceil((n-e)/i/2)*i;yc(t,o,e,n,r),s.push(e,o,o,n)}}function Tn(t){var e;if(t.bbox)e=t.bbox;else if(Array.isArray(t)&&t.length===4)e=t;else if(Array.isArray(t)&&t.length===6)e=[t[0],t[1],t[3],t[4]];else if(t.type==="Feature")e=at(t);else if(t.type==="FeatureCollection")e=at(t);else throw new Error("invalid geojson");return{minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}}var Cc=class{constructor(t=9){this.tree=new bc(t),this.tree.toBBox=Tn}insert(t){if(t.type!=="Feature")throw new Error("invalid feature");return t.bbox=t.bbox?t.bbox:at(t),this.tree.insert(t),this}load(t){var e=[];return Array.isArray(t)?t.forEach(function(n){if(n.type!=="Feature")throw new Error("invalid features");n.bbox=n.bbox?n.bbox:at(n),e.push(n)}):gn(t,function(n){if(n.type!=="Feature")throw new Error("invalid features");n.bbox=n.bbox?n.bbox:at(n),e.push(n)}),this.tree.load(e),this}remove(t,e){if(t.type!=="Feature")throw new Error("invalid feature");return t.bbox=t.bbox?t.bbox:at(t),this.tree.remove(t,e),this}clear(){return this.tree.clear(),this}search(t){var e=this.tree.search(Tn(t));return it(e)}collides(t){return this.tree.collides(Tn(t))}all(){const t=this.tree.all();return it(t)}toJSON(){return this.tree.toJSON()}fromJSON(t){return this.tree.fromJSON(t),this}};function Xr(t){return new Cc(t)}function Sc(t,e){if(e=e??{},!ga(e))throw new Error("options is invalid");var n=e.precision,i=e.coordinates,r=e.mutate;if(n=n==null||isNaN(n)?6:n,i=i==null||isNaN(i)?3:i,!t)throw new Error("<geojson> is required");if(typeof n!="number")throw new Error("<precision> must be a number");if(typeof i!="number")throw new Error("<coordinates> must be a number");(r===!1||r===void 0)&&(t=JSON.parse(JSON.stringify(t)));var s=Math.pow(10,n);return wi(t,function(o){Lc(o,s,i)}),t}function Lc(t,e,n){t.length>n&&t.splice(n,t.length);for(var i=0;i<t.length;i++)t[i]=Math.round(t[i]*e)/e;return t}function Ec(t){if(!t)throw new Error("geojson is required");const e=[];return Ht(t,n=>{$c(n,e)}),it(e)}function $c(t,e){let n=[];const i=t.geometry;if(i!==null){switch(i.type){case"Polygon":n=Nt(i);break;case"LineString":n=[Nt(i)]}n.forEach(r=>{Rc(r,t.properties).forEach(o=>{o.id=e.length,e.push(o)})})}}function Rc(t,e){const n=[];return t.reduce((i,r)=>{const s=ve([i,r],e);return s.bbox=Bc(i,r),n.push(s),r}),n}function Bc(t,e){const n=t[0],i=t[1],r=e[0],s=e[1],o=n<r?n:r,l=i<s?i:s,c=n>r?n:r,u=i>s?i:s;return[o,l,c,u]}function In(t,e,n={}){var i=ct(t),r=ct(e),s=Qt(r[1]-i[1]),o=Qt(r[0]-i[0]),l=Qt(i[1]),c=Qt(r[1]),u=Math.pow(Math.sin(s/2),2)+Math.pow(Math.sin(o/2),2)*Math.cos(l)*Math.cos(c);return ma(2*Math.atan2(Math.sqrt(u),Math.sqrt(1-u)),n.units)}var Dc=Object.defineProperty,Pc=Object.defineProperties,kc=Object.getOwnPropertyDescriptors,dr=Object.getOwnPropertySymbols,Oc=Object.prototype.hasOwnProperty,Tc=Object.prototype.propertyIsEnumerable,pr=(t,e,n)=>e in t?Dc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ic=(t,e)=>{for(var n in e||(e={}))Oc.call(e,n)&&pr(t,n,e[n]);if(dr)for(var n of dr(e))Tc.call(e,n)&&pr(t,n,e[n]);return t},jc=(t,e)=>Pc(t,kc(e));function Nc(t,e,n={}){if(!t||!e)throw new Error("lines and inputPoint are required arguments");const i=ct(e);let r=ge([1/0,1/0],{lineStringIndex:-1,segmentIndex:-1,totalDistance:-1,lineDistance:-1,segmentDistance:-1,pointDistance:1/0,multiFeatureIndex:-1,index:-1,location:-1,dist:1/0}),s=0,o=0,l=-1;return Ht(t,function(c,u,f){l!==f&&(l=f,o=0);const p=Nt(c);for(let m=0;m<p.length-1;m++){const d=ge(p[m]),y=ct(d),v=ge(p[m+1]),w=ct(v),_=In(d,v,n);let C,A;w[0]===i[0]&&w[1]===i[1]?[C,A]=[w,!0]:y[0]===i[0]&&y[1]===i[1]?[C,A]=[y,!1]:[C,A]=qc(y,w,i);const $=In(e,C,n);if($<r.properties.pointDistance){const D=In(d,C,n);r=ge(C,{lineStringIndex:f,segmentIndex:A?m+1:m,totalDistance:s+D,lineDistance:o+D,segmentDistance:D,pointDistance:$,multiFeatureIndex:-1,index:-1,location:-1,dist:1/0}),r.properties=jc(Ic({},r.properties),{multiFeatureIndex:r.properties.lineStringIndex,index:r.properties.segmentIndex,location:r.properties.totalDistance,dist:r.properties.pointDistance})}s+=_,o+=_}}),r}function Tt(t,e){const[n,i,r]=t,[s,o,l]=e;return n*s+i*o+r*l}function pe(t,e){const[n,i,r]=t,[s,o,l]=e;return[i*l-r*o,r*s-n*l,n*o-i*s]}function Fc(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2))}function gr(t){const e=Fc(t);return[t[0]/e,t[1]/e,t[2]/e]}function jn(t){const e=Qt(t[1]),n=Qt(t[0]);return[Math.cos(e)*Math.cos(n),Math.cos(e)*Math.sin(n),Math.sin(e)]}function Hc(t){const[e,n,i]=t,r=Math.min(Math.max(i,-1),1),s=Gi(Math.asin(r));return[Gi(Math.atan2(n,e)),s]}function qc(t,e,n){const i=jn(t),r=jn(e),s=jn(n),o=pe(i,r);if(o[0]===0&&o[1]===0&&o[2]===0)return Tt(i,r)>0?[[...e],!0]:[[...n],!1];const l=pe(o,s);if(l[0]===0&&l[1]===0&&l[2]===0)return[[...e],!0];const c=pe(l,o),u=gr(c),f=[-u[0],-u[1],-u[2]],p=Tt(s,u)>Tt(s,f)?u:f,m=gr(o),d=Tt(pe(i,p),m),y=Tt(pe(p,r),m);return d>=0&&y>=0?[Hc(p),!1]:Tt(i,s)>Tt(r,s)?[[...t],!1]:[[...e],!0]}function zc(t,e){if(!t)throw new Error("line is required");if(!e)throw new Error("splitter is required");const n=ar(t),i=ar(e);if(n!=="LineString")throw new Error("line must be LineString");if(i==="FeatureCollection")throw new Error("splitter cannot be a FeatureCollection");if(i==="GeometryCollection")throw new Error("splitter cannot be a GeometryCollection");var r=Sc(e,{precision:7});switch(t.type!=="Feature"&&(t=ee(t)),i){case"Point":return ti(t,r);case"MultiPoint":return mr(t,r);case"LineString":case"MultiLineString":case"Polygon":case"MultiPolygon":return mr(t,pn(t,r,{ignoreSelfIntersections:!0}))}}function mr(t,e){var n=[],i=Xr();return Ht(e,function(r){if(n.forEach(function(l,c){l.id=c}),!n.length)n=ti(t,r).features,i.load(it(n));else{var s=i.search(r);if(s.features.length){var o=Wr(r,s);n=n.filter(function(l){return l.id!==o.id}),i.remove(o),gn(ti(o,r),function(l){n.push(l),i.insert(l)})}}}),it(n)}function ti(t,e){var n=[],i=Nt(t)[0],r=Nt(t)[t.geometry.coordinates.length-1];if(Nn(i,ct(e))||Nn(r,ct(e)))return it([t]);var s=Xr(),o=Ec(t);s.load(o);var l=s.search(e);if(!l.features.length)return it([t]);var c=Wr(e,l),u=[i],f=rc(o,function(p,m,d){var y=Nt(m)[1],v=ct(e);return d===c.id?(p.push(v),n.push(ve(p)),Nn(v,y)?[v]:[v,y]):(p.push(y),p)},u);return f.length>1&&n.push(ve(f)),it(n)}function Wr(t,e){if(!e.features.length)throw new Error("lines must contain features");if(e.features.length===1)return e.features[0];var n,i=1/0;return gn(e,function(r){var s=Nc(r,t),o=s.properties.pointDistance;o<i&&(n=r,i=o)}),n}function Nn(t,e){return t[0]===e[0]&&t[1]===e[1]}function Yc(t,e){var n=ie(t),i=ie(e),r=n.type,s=i.type;switch(r){case"Point":switch(s){case"MultiPoint":return Xc(n,i);case"LineString":return Ze(n,i,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return rt(n,i,{ignoreBoundary:!0});default:throw new Error("feature2 "+s+" geometry not supported")}case"MultiPoint":switch(s){case"MultiPoint":return Wc(n,i);case"LineString":return Uc(n,i);case"Polygon":case"MultiPolygon":return Vc(n,i);default:throw new Error("feature2 "+s+" geometry not supported")}case"LineString":switch(s){case"LineString":return Gc(n,i);case"Polygon":case"MultiPolygon":return Jc(n,i);default:throw new Error("feature2 "+s+" geometry not supported")}case"Polygon":switch(s){case"Polygon":case"MultiPolygon":return Qc(n,i);default:throw new Error("feature2 "+s+" geometry not supported")}default:throw new Error("feature1 "+r+" geometry not supported")}}function Xc(t,e){var n,i=!1;for(n=0;n<e.coordinates.length;n++)if(Vr(e.coordinates[n],t.coordinates)){i=!0;break}return i}function Wc(t,e){for(var n=0;n<t.coordinates.length;n++){for(var i=!1,r=0;r<e.coordinates.length;r++)Vr(t.coordinates[n],e.coordinates[r])&&(i=!0);if(!i)return!1}return!0}function Uc(t,e){for(var n=!1,i=0;i<t.coordinates.length;i++){if(!Ze(t.coordinates[i],e))return!1;n||(n=Ze(t.coordinates[i],e,{ignoreEndVertices:!0}))}return n}function Vc(t,e){for(var n=!0,i=!1,r=0;r<t.coordinates.length;r++){if(i=rt(t.coordinates[r],e),!i){n=!1;break}i=rt(t.coordinates[r],e,{ignoreBoundary:!0})}return n&&i}function Gc(t,e){for(var n=0;n<t.coordinates.length;n++)if(!Ze(t.coordinates[n],e))return!1;return!0}function Kc(t,e){const n=t.coordinates,i=[];for(let r=0;r<n.length-1;r++){const s=ve([n[r],n[r+1]]),o=zc(s,ee(e));o.features.length===0?i.push(s):i.push(...o.features)}return it(i)}function Jc(t,e){const n=at(e),i=at(t);if(!Ur(n,i))return!1;for(const o of t.coordinates)if(!rt(o,e))return!1;let r=!1;const s=Kc(t,e);for(const o of s.features){const l=Zc(o.geometry.coordinates[0],o.geometry.coordinates[1]);if(!rt(l,e))return!1;!r&&rt(l,e,{ignoreBoundary:!0})&&(r=!0)}return r}function Qc(t,e){var n=at(t),i=at(e);if(!Ur(i,n))return!1;for(var r=0;r<t.coordinates[0].length;r++)if(!rt(t.coordinates[0][r],e))return!1;return!0}function Ur(t,e){return!(t[0]>e[0]||t[2]<e[2]||t[1]>e[1]||t[3]<e[3])}function Vr(t,e){return t[0]===e[0]&&t[1]===e[1]}function Zc(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}var tu=Yc;const eu=(t,e)=>e?gc(t,e):!0,nu=(t,e)=>e?tu(t,e):!0;function iu(t,e="highlight",n="title"){const i=(r,s=[])=>{let o="",l=0,c=0;return s.forEach((u,f)=>{const p=u[1]+1;f&&c>u[0]||(c=u[1],o+=[r.substring(l,u[0]),`<mark class="${e}">`,r.substring(u[0],p),"</mark>"].join(""),l=p)}),o+=r.substring(l),o};return t.filter(({matches:r})=>r&&r.length).map(({item:r,matches:s})=>{const o={...r};return s.forEach(l=>{if(l.key!==n)return;const c=i(cu(l.value),uu(l.indices));o.highlightedText=c}),o})}let Gr;const ru=(t,e)=>{Gr=new ft(t,{threshold:.4,distance:50,ignoreLocation:!0,includeMatches:!0,useExtendedSearch:!0,...e})},su=async(t,e,n)=>{const i=Object.entries(e).filter(([,l])=>l.type==="text"||l.type==="select"||l.type==="multiselect").reduce((l,[c,u])=>{const f="$or",p=[],m=(d,y)=>{const v={};u.type==="text"?v[d]=`${y}`:v[c]=`="${d}"`,p.push(v)};return Object.entries(u.state).filter(([,d])=>d).forEach(([d,y])=>m(d,y)),p.length>0&&l.push({[f]:p}),l},[]);let r;if(!(i.length>0)&&n.matchAllWhenEmpty!==!1)r=t;else{const l={$and:[...i]},c=Gr.search(l);r=n.enableHighlighting?iu(c,"highlight",n.titleProperty):c.map(u=>u.item)}const s=Object.entries(e).filter(([,l])=>l.type==="range").reduce((l,[c,u])=>{const f=p=>u.format==="date"?B(p).valueOf():parseFloat(p);return l[c]={min:f(u.state.min),max:f(u.state.max),format:u.format},l},{});if(Object.keys(s).length>0){const l=[];for(let c=0;c<r.length;c++){const u={};for(const[f,p]of Object.entries(s)){const m=y=>p.format==="date"?B(y).valueOf():parseFloat(y),d=X(f,r[c]);d?Array.isArray(d)?u[f]=s[f].min<=m(d[1])&&m(d[0])<=s[f].max:m(d)>=s[f].min&&m(d)<=s[f].max?u[f]=!0:u[f]=!1:u[f]=!0}Object.values(u).every(f=>!!f)&&l.push(r[c])}r=[...l]}const o=Object.entries(e).filter(([,l])=>l.type==="spatial").reduce((l,[c,u])=>(l[c]={geometry:u.state.geometry,mode:u.state.mode},l),{});if(Object.values(o).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let c=0;c<r.length;c++){const u={};for(const f of Object.keys(o)){const p=X(f,r[c]),m=o[f].mode||"within";p&&(m==="within"?nu(p,o[f].geometry):eu(p,o[f].geometry))?u[f]=!0:u[f]=!1}Object.values(u).every(f=>!!f)&&l.push(r[c])}r=[...l]}return r};function ou(t,e){return[{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}},{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...t&&{format:"GeoJSON"},...t&&{url:e}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]}]}function mn(t){if(!t.dirty)return null;switch(t.type){case"multiselect":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"range":t.state.min=t.min,t.state.max=t.max;break;case"select":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"spatial":t.state.geometry=void 0;break;case"text":t.keys.forEach(n=>{t.state[n]=void 0});break}return delete t.stringifiedState,delete t.dirty,t}function yr(t,e){return t*2+e}function au(t){return Object.keys(t).map(e=>({title:S`${t[e].title||t[e].key}:
      ${t[e].stringifiedState}`,key:e})).filter(e=>t[e.key].dirty)}function ei(t){return Object.values(t).map(e=>e.dirty).filter(e=>e).length>0}async function lu(t,e,n){const i=n.externalFilter(t,e),r=typeof i=="string"||i instanceof String?i:i.url,s=typeof i=="object"&&"fetchFn"in i?await i.fetchFn(r):await fetch(r).then(async o=>await o.json());return i.key?X(i.key,s):s}function Kr(t,e,n){let i;if(t.detail?i=t.detail.target:i=t.target,i!=null&&i.classList.contains("details-filter")){if(!i.open||e!=null&&e.expandMultipleFilters)return;n.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(r=>{const s=r.shadowRoot.querySelector(".details-filter");s&&s!==i&&s.removeAttribute("open")})}else{if(!(i!=null&&i.open)||e!=null&&e.expandMultipleResults)return;n.querySelectorAll("details").forEach(r=>{r!==i&&r.removeAttribute("open")})}}function X(t,e){return typeof t=="function"?t(e):t!=null&&t.includes(".")?t.split(".").reduce((n,i)=>n&&n[i],e):e[t]}function cu(t){return t.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}function uu(t,{mergeAdjacent:e=!1}={}){if(!Array.isArray(t))return[];const n=t.map(([r,s])=>r<=s?[r,s]:[s,r]).sort((r,s)=>r[0]-s[0]||r[1]-s[1]),i=[];for(const[r,s]of n){if(i.length===0){i.push([r,s]);continue}const o=i[i.length-1];(e?r<=o[1]+1:r<=o[1])?s>o[1]&&(o[1]=s):i.push([r,s])}return i}function tn(t){return t.format==="date"}var P,Jr,ni,ii,Qr,ri,si,Zr,oi,ts,es;class fu extends ut{constructor(){super();Y(this,P);this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=R(this,P,Qr).bind(this),this._handleKeyDown=R(this,P,ri).bind(this)}static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}set showDropdown(n){this.renderRoot.querySelector("[popover]").togglePopover(n)}get showDropdown(){var n;return(n=this.renderRoot.querySelector("[popover]"))==null?void 0:n.matches(":popover-open")}connectedCallback(){super.connectedCallback(),this.inlineMode&&R(this,P,ni).call(this)}disconnectedCallback(){this.inlineMode&&R(this,P,ii).call(this),super.disconnectedCallback()}_overlayCleanup(){}updateInline(){this.inlineMode&&this.requestUpdate()}updated(n){n.has("inlineMode")&&(this.inlineMode?R(this,P,ni).call(this):R(this,P,ii).call(this))}render(){return S`
      <style>
        ${!this.unstyled&&hi}
      </style>
      ${this.inlineMode?S`
            <div
              class="inline-container-wrapper"
              @click="${R(this,P,si)}"
            >
              <div class="inline-container square border" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips
                      .items=${au(this.filters)}
                      .controller=${{remove:n=>R(this,P,ts).call(this,n)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${I(ei(this.filters),()=>S`
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
                  class="input-container field no-margin ${ei(this.filters)?"dirty-filter-input":""}"
                >
                  <input
                    autocomplete="off"
                    id="eox-itemfilter-input-search"
                    type="text"
                    @click="${R(this,P,si)}"
                    @focus="${R(this,P,Zr)}"
                    @input="${R(this,P,es)}"
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
                  @keydown="${R(this,P,ri)}"
                  @click="${R(this,P,oi)}"
                  @focus="${R(this,P,oi)}"
                >
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `:S`<slot name="section"></slot>`}
    `}}P=new WeakSet,Jr=function(){setTimeout(()=>this._overlayCleanup=ql(this))},ni=function(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),R(this,P,Jr).call(this)},ii=function(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()},Qr=function(n){Ul(n,this)},ri=function(n){Wl(n,this)},si=function(n){Xl(n,this)},Zr=function(){Yl(this)},oi=function(n){zl(n,this)},ts=function(n){cl(n,this)},es=function(n){Rr(n,this)};customElements.define("eox-itemfilter-container",fu);function hu(t){const e=t.renderRoot.querySelector("input[type='text']");e.value="",mn(t.filterObject),t.requestUpdate()}function du(t){const e=t.renderRoot.querySelector("input[type='text']");t.isValid=e.checkValidity(),t.filterObject.keys.forEach(n=>{t.filterObject.state[n]=e.value}),t.filterObject.dirty=!0,t.filterObject.stringifiedState=e.value,t.dispatchEvent(new CustomEvent("filter")),e.value===""&&t.reset()}const pu=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,resultSorting:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),Fn=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","resultSorting","expandMultipleFilters","expandResults","expandMultipleResults","items"],re="YYYY-MM-DD";function gu(t){if(mn(t.filterObject),t.filterObject){const e=t.filterObject.min,n=t.filterObject.max,i=t.querySelector("eox-timecontrol");i&&i.dateChange([B(e).format(),B(n).format()],i);const r=t.querySelector("tc-range-slider");r&&(r.value1!==e&&(r.value1=e),r.value2!==n&&(r.value2=n))}t.requestUpdate()}function vr(t,e){const n=d=>tn(e.filterObject)?B(d).valueOf():parseFloat(d),i=n(t.detail.values[0]),r=n(t.detail.values[1]),s=n(e.filterObject.state.min),o=n(e.filterObject.state.max),l=n(e.filterObject.min),c=n(e.filterObject.max);let u,f,p,m;tn(e.filterObject)?(u=B(i).isSame(B(l),"day"),f=B(r).isSame(B(c),"day"),p=B(i).isSame(B(s),"day"),m=B(r).isSame(B(o),"day")):(u=i===l,f=r===c,p=i===s,m=r===o),!(p&&m)&&([e.filterObject.state.min,e.filterObject.state.max]=[i,r],u&&f?(delete e.filterObject.dirty,delete e.filterObject.stringifiedState):e.filterObject.dirty=!0,e.filterObject.dirty&&(e.filterObject.stringifiedState=e.filterObject.format==="date"?`${B(i).format(re)} - ${B(r).format(re)}`:`${i} - ${r}`),e.dispatchEvent(new CustomEvent("filter")),u&&f?e.reset():e.requestUpdate())}function mu(t,e,n){const i=n.filterObject.state[t],r=tn(n.filterObject)?B(i).format(re):i;return S`<div class="range-${e}">${r}</div>`}function yu(t){vu(-1,t),mn(t.filterObject),t.requestUpdate()}function vu(t,e){e.selectedItems=[],xi(e),is(e)}function ns(t,e){const n=e.selectedItems.indexOf(t);n>=0?e.selectedItems=e.selectedItems.filter((i,r)=>r!==n):e.type==="multiselect"?e.selectedItems=[...e.selectedItems,t]:(e.selectedItems=[t],e.showSuggestions=!1),xi(e),is(e)}function bu(t,e){t.target instanceof HTMLInputElement&&(e.query=t.target.value,e.showSuggestions=!0)}function wu(t,e){switch(t.key){case"ArrowDown":e.highlightedIndex=Math.min(e.highlightedIndex+1,e.filteredSuggestions.length-1);break;case"ArrowUp":e.highlightedIndex=Math.max(e.highlightedIndex-1,0);break;case"Enter":e.highlightedIndex>=0&&ns(e.filteredSuggestions[e.highlightedIndex],e);break;case"Escape":e.showSuggestions=!1;break}}function xu(t,e){(t.has("suggestions")||t.has("query"))&&xi(e)}function _u(t,e){var i;const n=((i=t.filterObject)==null?void 0:i.sort)||((r,s)=>r.toString().localeCompare(s.toString(),void 0,{numeric:!0}));return e.sort(n).map(r=>r)}function xi(t){var i,r,s;const e=(((i=t.filterObject)==null?void 0:i.filterKeys)||t.suggestions).map(o=>`${o}`);let n=e;t.query&&(n=new ft(e,{threshold:.4}).search(t.query).map(l=>l.item)),t.filteredSuggestions=(r=t.filterObject)!=null&&r.filterKeys?n:_u(t,n),(s=t.filterObject)!=null&&s.filterKeys&&(t.filterObject.state=e.reduce((o,l)=>(l in o||(o[l]=void 0),o),t.filterObject.state)),t.highlightedIndex=-1}function is(t){Object.keys(t.filterObject.state).forEach(e=>{t.filterObject.state[e]=t.selectedItems.includes(e)}),t.filterObject.stringifiedState=Object.keys(t.filterObject.state).filter(e=>t.filterObject.state[e]).join(", ")||"",t.filterObject.dirty=t.filterObject.stringifiedState.length>0,t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}function Mu(t){mn(t.filterObject),t.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),t.requestUpdate()}function Au(t){t.renderRoot.querySelector("#eox-map").innerHTML="",rs(t)}function Cu(t,e){e.filterObject.state.mode=t;const n=new CustomEvent("filter",{detail:{[e.filterObject.key]:{}}});e.dispatchEvent(n)}function rs(t){const e=t.renderRoot.querySelector("#eox-map");e.innerHTML===""&&(e.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const n=t.geometry&&Su(t.geometry),i=ou(t.geometry,n);t.eoxMap=t.renderRoot.querySelector("eox-map"),setTimeout(()=>{t.eoxMap.layers=i;const r=s=>{const o=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:s.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});t.dispatchEvent(o)};t.eoxMap.interactions.drawInteraction.on("drawend",s=>{r(s.feature),t.eoxMap.removeInteraction("drawInteraction")}),t.eoxMap.interactions.drawInteraction_modify.on("modifyend",s=>{r(s.features.getArray()[0])})},1e3)}function Su(t){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:t}]}))}`}var _e,sn;class Lu extends ut{constructor(){super();Y(this,_e,()=>{du(this)});Y(this,sn,n=>{n.key==="Enter"&&n.target.value&&this.results&&this.results.length===1&&(this.dispatchEvent(new CustomEvent("result",{detail:this.results[0]})),n.target.value="",F(this,_e).call(this))});he(this,"debouncedInputHandler",cn(F(this,_e),500,{leading:!0}));this.filterObject={},this.results=null,this.unstyled=!1,this.tabIndex=0,this.isValid=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},results:{state:!0,type:Array},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}reset(){hu(this)}createRenderRoot(){return this}render(){return I(this.filterObject,()=>{var n;return S`
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
              @click=${i=>i.stopPropagation()}
              @keydown=${F(this,sn)}
            />
          </div>
        </div>
        <small
          class="error-validation"
          style="margin-left: var(--_list-padding)"
          >${this.filterObject.validation&&this.isValid===!1?this.filterObject.validation.message:""}</small
        >
      `})}}_e=new WeakMap,sn=new WeakMap;customElements.define("eox-itemfilter-text",Lu);function Eu(t,e,n){if(!e||typeof e=="string"&&e.trim()==="")return[];const i=n.config.aggregateResults;return e==="No category"?t.filter(r=>{const s=r[i];return Array.isArray(s)?s.filter(Boolean).length===0:!s}):t.filter(r=>{const s=r[i];if(Array.isArray(s)){if(s.filter(Boolean).length===0)return!1}else if(!s)return!1;let o;return n.filters[i]&&(o=Object.keys(n.filters[i]).filter(c=>n.filters[i].state[c])),(o!=null&&o.length?o.includes(e):!0)&&Array.isArray(s)?s.includes(e):s===e})}function $u(t,e){return S`
    <details
      class="details-results"
      @toggle=${e.handleAccordion}
      ?open=${e.config.expandResults||St}
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
          <span class="title"> ${t} </span>
          <button
            class="chip"
            style="--_size: 1rem; padding: 0.7rem; font-size: small"
          >
            ${e.aggregateResults(e.results,t).length}
          </button>
        </nav>
      </summary>
      <div>
        ${ss(e,t)}
      </div>
    </details>
  `}function ss(t,e){const n=t.results,i=e?t.aggregateResults(n,e):n,r=t.config,s=o=>{var l;return((l=t.selectedResult)==null?void 0:l[r.idProperty])===o[r.idProperty]?"highlighted":St};return Vi`
    ${t.resultType==="cards"?Gt("<eox-layout fill-grid>"):Gt('<ul id="results" class="list no-space" part="results">')}
      ${ha(i,o=>o.id,o=>Vi`
        ${t.resultType==="cards"?Gt("<eox-layout-item"):Gt("<li")}
            class="${s(o)}"
            @click=${()=>{t.selectedResult===o?t.selectedResult=null:t.selectedResult=o,t.dispatchEvent(new CustomEvent("result",{detail:t.selectedResult}))}}
            @mouseenter=${()=>{t.dispatchEvent(new CustomEvent("mouseenter:result",{detail:o}))}}
            @mouseleave=${()=>{t.dispatchEvent(new CustomEvent("mouseleave:result",{detail:o}))}}
          >
            <nav id="${o.id}" class="responsive tiny-space">
              ${I(r.subTitleProperty||r.imageProperty,()=>S`
                  ${I(t.resultType==="cards",()=>X(r.imageProperty,o)?S`
                            <img
                              loading="lazy"
                              fetchpriority="low"
                              class="image"
                              src="${X(r.imageProperty,o)}"
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
                        ${X(r.imageProperty,o)?S`
                              <img
                                loading="lazy"
                                fetchpriority="low"
                                class="image"
                                src="${X(r.imageProperty,o)}"
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
                      >${Fe(o.highlightedText||X(r.titleProperty,o).toString())}</span
                    >
                    ${I(!!X(r.subTitleProperty,o),()=>S`
                        <small class="subtitle no-line truncate"
                          >${Fe(X(r.subTitleProperty,o).toString())}</small
                        >
                      `)}
                  </div>
                `,()=>S`
                  <div class="small-line max truncate">
                    <span
                      class="title truncate ${o.highlightedText?"highlight-enabled":""}"
                      >${Fe(o.highlightedText||o[r.titleProperty])}</span
                    >
                  </div>
                `)}
              ${I(t.enableResultAction,()=>S`
                  <button
                    class="result-action square transparent primary-text small"
                    @click=${l=>{l.stopPropagation(),t.dispatchEvent(new CustomEvent("click:result-action",{detail:o}))}}
                  >
                    <icon class="small"
                      >${Fe(t.resultActionIcon)}</icon
                    >
                  </button>
                `)}
            </nav>
          </li>
        `)}
    ${t.resultType==="cards"?Gt("</eox-layout>"):Gt("</ul>")}
  `}var bt,ai,os,as;class Ru extends ut{constructor(){super();Y(this,bt);this.config=null,this.results=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list",this.resultActionIcon=void 0}static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Array},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String},resultActionIcon:{attribute:!1,type:String}}}aggregateResults(n,i){return Eu(n,i,this)}createRenderRoot(){return this}handleAccordion(n){Kr(n,this.config,this)}render(){return S`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${I(this.results.length<1,()=>S`<small class="no-results">No matching items</small>`,()=>St)}
          ${I(this.config.aggregateResults,()=>ln(R(this,bt,as).call(this),n=>S`${I(this.aggregateResults(this.results,n).length===1&&this.config.autoSpreadSingle,()=>S`<div style="margin-left: -8px">
                        ${R(this,bt,ai).call(this,n)}
                      </div>`,()=>R(this,bt,os).call(this,n))}`),()=>R(this,bt,ai).call(this))}
        </div>
      </section>
    `}}bt=new WeakSet,ai=function(n){return ss(this,n)},os=function(n){return $u(n,this)},as=function(){const n=this.resultAggregation.filter(r=>this.aggregateResults(this.results,r).length);return this.aggregateResults(this.results,"No category").length>0&&n.push("No category"),n};customElements.define("eox-itemfilter-results",Ru);var Et,cs,us,fs;class ls extends ut{constructor(){super();Y(this,Et);he(this,"debouncedInputHandler",cn(R(this,Et,fs),500,{leading:!0}));this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(n){n.has("filterObject")&&this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(i=>this.filterObject.state[i]?i:null).filter(i=>!!i)),xu(n,this)}reset(){yu(this)}firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(n=>this.filterObject.state[n]?n:null).filter(n=>!!n),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}createRenderRoot(){return this}render(){const n=this.type.includes("multi")?"checkbox":"radio",i=this.filteredSuggestions.length>5?"select-overflow scroll":St;return S`
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
                @input=${R(this,Et,cs)}
                @keydown=${R(this,Et,us)}
                @blur=${()=>this.showSuggestions=!1}
                @focus=${()=>this.showSuggestions=!0}
              />
            </div>
          </div>`)}
      <div class="select-container ${i}">
        <ul class="${this.type} list no-space">
          ${this.filteredSuggestions.map(r=>S`
              <li
                data-identifier="${r.toString().toLowerCase()}"
                data-title="${r}"
              >
                <label class="${n} small max">
                  <input
                    type="${n}"
                    name=${r}
                    .checked=${this.selectedItems.includes(r)}
                    @change=${()=>this.debouncedInputHandler(r)}
                    @keydown=${s=>{s.key===" "&&this.inlineMode&&this.debouncedInputHandler(r)}}
                    tabindex=${this.tabIndex+1}
                  />
                  <span class="title small-line">${r}</span>
                </label>
              </li>
            `)}
        </ul>
      </div>
    `}}Et=new WeakSet,cs=function(n){bu(n,this)},us=function(n){wu(n,this)},fs=function(n){ns(n,this)},he(ls,"properties",{filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}});customElements.define("eox-itemfilter-select",ls);var zt,ds,li;class hs extends ut{constructor(){super();Y(this,zt);this.filterObject={},this.suggestions=[],this.tabIndex=0,this.inlineMode=!1,this.inputHandler=R(this,zt,ds).bind(this),this.debouncedInputHandler=cn(this.inputHandler,500,{leading:!1})}reset(){gu(this)}createRenderRoot(){return this}render(){return I(this.filterObject,()=>S`
        ${I(tn(this.filterObject),()=>S`
            <eox-timecontrol
              .controlValues=${[{id:this.filterObject.key,title:this.filterObject.title||"Filter",timeControlValues:(this.filterObject.filterKeys||this.suggestions||[]).map(n=>typeof n=="object"?n:{date:n})}]}
              .initDate=${[B(this.filterObject.state.min||this.filterObject.min).format(),B(this.filterObject.state.max||this.filterObject.max).format()]}
              @select=${n=>vr(new CustomEvent("values",{detail:{values:[B(n.detail.date[0]).valueOf(),B(n.detail.date[1]).valueOf()]}}),this)}
            >
              <eox-timecontrol-date
                .format=${re}
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
              ${R(this,zt,li).call(this,"min","before")}
              <tc-range-slider
                min="${this.filterObject.min}"
                max="${this.filterObject.max}"
                value1="${this.filterObject.state.min||this.filterObject.min}"
                value2="${this.filterObject.state.max||this.filterObject.max}"
                step="${this.filterObject.step||1}"
                @change=${this.debouncedInputHandler}
              ></tc-range-slider>
              ${R(this,zt,li).call(this,"max","after")}
            </div>
          `)}
      `)}}zt=new WeakSet,ds=function(n){vr(n,this)},li=function(n,i){return mu(n,i,this)},he(hs,"properties",{filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}});customElements.define("eox-itemfilter-range",hs);var on,ps;class Bu extends ut{constructor(){super();Y(this,on);this.filterObject={},this.tabIndex=0}static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}reset(){Mu(this)}createRenderRoot(){return this}render(){return I(this.filterObject,()=>{var n;return S`
        <div
          style="margin-left: var(--_list-padding); padding-right: var(--_padding)"
        >
          <nav class="no-margin wrap">
            ${ln(["intersects","within"],i=>S`
                <label class="radio small small-text">
                  <input
                    tabindex=${this.tabIndex}
                    type="radio"
                    name="mode"
                    .checked="${(this.filterObject.state.mode||"")===i||St}"
                    value="${i}"
                    @click=${()=>R(this,on,ps).call(this,i)}
                  />
                  <span style="font-size: x-small">${i} geometry</span>
                </label>
              `)}
          </nav>
          <eox-itemfilter-spatial-filter
            exportparts="map: spatial-filter-map"
            .geometry="${(n=this.filterObject.state)==null?void 0:n.geometry}"
            @filter="${i=>{this.filterObject.state.geometry=i.detail.geometry,this.filterObject.dirty=!0,this.filterObject.stringifiedState="Polygon",this.dispatchEvent(new CustomEvent("filter"))}}"
          ></eox-itemfilter-spatial-filter>
        </div>
      `})}}on=new WeakSet,ps=function(n){Cu(n,this)};customElements.define("eox-itemfilter-spatial",Bu);var an,gs;class Du extends ut{constructor(){super();Y(this,an);this.geometry=null,this.eoxMap=null}static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}firstUpdated(){R(this,an,gs).call(this)}reset(){Au(this)}render(){return S`<div id="eox-map"></div>`}}an=new WeakSet,gs=function(){rs(this)};customElements.define("eox-itemfilter-spatial-filter",Du);function Pu(t,e){e.renderRoot.querySelectorAll(".chip").forEach(n=>{n.classList.remove("highlighted")}),t.target instanceof HTMLElement&&t.target.classList.add("highlighted"),e.requestUpdate()}function ku(t,e){const{code:n,target:i}=t;i instanceof HTMLElement&&i.id!=="eox-itemfilter-input-search"||e.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(n)||(n==="Space"&&t.preventDefault(),["Escape","Space","Enter"].includes(n)||t.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(n)&&Ou(n,t.target.value??"",e))}function Ou(t,e,n){const i=n.renderRoot.querySelector(".chip.highlighted");if((t==="Escape"||e)&&i&&i.classList.remove("highlighted"),t==="Backspace"&&!e){if(n.items.length){i&&(i.querySelector(".chip-item-close").click(),n.items.splice(Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(i),1));const r=n.renderRoot.querySelectorAll(".chip")[n.renderRoot.querySelectorAll(".chip").length-1];r.classList.contains("highlighted")||r.classList.add("highlighted"),n.requestUpdate()}n._dispatchEvent()}if((t==="ArrowLeft"||t==="ArrowRight")&&!e){if(n.renderRoot.querySelectorAll(".chip").length<1)return;let r=0;const s=n.renderRoot.querySelector(".chip.highlighted");s&&(r=Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(s),s.classList.remove("highlighted")),r=r+(t==="ArrowLeft"?-1:1),t==="ArrowLeft"&&r<0&&(r=n.renderRoot.querySelectorAll(".chip").length-1),t==="ArrowRight"&&r>n.renderRoot.querySelectorAll(".chip").length-1&&(r=0),Array.from(n.renderRoot.querySelectorAll(".chip"))[r].classList.add("highlighted")}}var Yt,ci,ms;class Tu extends ut{constructor(){super();Y(this,Yt);this.items={},this.controller={}}static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",R(this,Yt,ci).bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",R(this,Yt,ci).bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}render(){return S`
      <span class="chip-container">
        ${ln(this.items,n=>S`
            <span class="chip tiny-margin" @click=${R(this,Yt,ms).bind(this)}>
              <span class="chip-title">${n.title}</span>
                <span
                  class="chip-item-close hidden"
                  data-close=${n.key}
                  @click=${i=>{i.stopPropagation(),this.controller.remove(i),this.requestUpdate()}}
                ></span>
              </span>
            </span>
          `)}
      </span>
    `}}Yt=new WeakSet,ci=function(n){ku(n,this)},ms=function(n){Pu(n,this)};customElements.define("eox-itemfilter-chips",Tu);var Iu=200,_i="__lodash_hash_undefined__",ju=1/0,Nu="[object Function]",Fu="[object GeneratorFunction]",Hu=/[\\^$.*+?()[\]{}|]/g,qu=/^\[object .+?Constructor\]$/,zu=typeof Ct=="object"&&Ct&&Ct.Object===Object&&Ct,Yu=typeof self=="object"&&self&&self.Object===Object&&self,Mi=zu||Yu||Function("return this")();function Xu(t,e){var n=t?t.length:0;return!!n&&Uu(t,e,0)>-1}function Wu(t,e,n,i){for(var r=t.length,s=n+-1;++s<r;)if(e(t[s],s,t))return s;return-1}function Uu(t,e,n){if(e!==e)return Wu(t,Vu,n);for(var i=n-1,r=t.length;++i<r;)if(t[i]===e)return i;return-1}function Vu(t){return t!==t}function Gu(t,e){return t.has(e)}function Ku(t,e){return t==null?void 0:t[e]}function Ju(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch{}return e}function ys(t){var e=-1,n=Array(t.size);return t.forEach(function(i){n[++e]=i}),n}var Qu=Array.prototype,Zu=Function.prototype,vs=Object.prototype,Hn=Mi["__core-js_shared__"],br=function(){var t=/[^.]+$/.exec(Hn&&Hn.keys&&Hn.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),bs=Zu.toString,Ai=vs.hasOwnProperty,tf=vs.toString,ef=RegExp("^"+bs.call(Ai).replace(Hu,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),nf=Qu.splice,rf=Ci(Mi,"Map"),qn=Ci(Mi,"Set"),xe=Ci(Object,"create");function qt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}function sf(){this.__data__=xe?xe(null):{}}function of(t){return this.has(t)&&delete this.__data__[t]}function af(t){var e=this.__data__;if(xe){var n=e[t];return n===_i?void 0:n}return Ai.call(e,t)?e[t]:void 0}function lf(t){var e=this.__data__;return xe?e[t]!==void 0:Ai.call(e,t)}function cf(t,e){var n=this.__data__;return n[t]=xe&&e===void 0?_i:e,this}qt.prototype.clear=sf;qt.prototype.delete=of;qt.prototype.get=af;qt.prototype.has=lf;qt.prototype.set=cf;function ae(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}function uf(){this.__data__=[]}function ff(t){var e=this.__data__,n=yn(e,t);if(n<0)return!1;var i=e.length-1;return n==i?e.pop():nf.call(e,n,1),!0}function hf(t){var e=this.__data__,n=yn(e,t);return n<0?void 0:e[n][1]}function df(t){return yn(this.__data__,t)>-1}function pf(t,e){var n=this.__data__,i=yn(n,t);return i<0?n.push([t,e]):n[i][1]=e,this}ae.prototype.clear=uf;ae.prototype.delete=ff;ae.prototype.get=hf;ae.prototype.has=df;ae.prototype.set=pf;function le(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}function gf(){this.__data__={hash:new qt,map:new(rf||ae),string:new qt}}function mf(t){return vn(this,t).delete(t)}function yf(t){return vn(this,t).get(t)}function vf(t){return vn(this,t).has(t)}function bf(t,e){return vn(this,t).set(t,e),this}le.prototype.clear=gf;le.prototype.delete=mf;le.prototype.get=yf;le.prototype.has=vf;le.prototype.set=bf;function en(t){var e=-1,n=t?t.length:0;for(this.__data__=new le;++e<n;)this.add(t[e])}function wf(t){return this.__data__.set(t,_i),this}function xf(t){return this.__data__.has(t)}en.prototype.add=en.prototype.push=wf;en.prototype.has=xf;function yn(t,e){for(var n=t.length;n--;)if($f(t[n][0],e))return n;return-1}function _f(t){if(!ws(t)||Sf(t))return!1;var e=Rf(t)||Ju(t)?ef:qu;return e.test(Lf(t))}function Mf(t,e,n){var i=-1,r=Xu,s=t.length,o=!0,l=[],c=l;if(s>=Iu){var u=Af(t);if(u)return ys(u);o=!1,r=Gu,c=new en}else c=l;t:for(;++i<s;){var f=t[i],p=f;if(f=f!==0?f:0,o&&p===p){for(var m=c.length;m--;)if(c[m]===p)continue t;l.push(f)}else r(c,p,n)||(c!==l&&c.push(p),l.push(f))}return l}var Af=qn&&1/ys(new qn([,-0]))[1]==ju?function(t){return new qn(t)}:Bf;function vn(t,e){var n=t.__data__;return Cf(e)?n[typeof e=="string"?"string":"hash"]:n.map}function Ci(t,e){var n=Ku(t,e);return _f(n)?n:void 0}function Cf(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function Sf(t){return!!br&&br in t}function Lf(t){if(t!=null){try{return bs.call(t)}catch{}try{return t+""}catch{}}return""}function Ef(t){return t&&t.length?Mf(t):[]}function $f(t,e){return t===e||t!==t&&e!==e}function Rf(t){var e=ws(t)?tf.call(t):"";return e==Nu||e==Fu}function ws(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Bf(){}var Df=Ef;const ui=wr(Df);var nn={exports:{}};nn.exports;(function(t,e){var n=200,i="Expected a function",r="__lodash_hash_undefined__",s=1,o=2,l=9007199254740991,c="[object Arguments]",u="[object Array]",f="[object Boolean]",p="[object Date]",m="[object Error]",d="[object Function]",y="[object GeneratorFunction]",v="[object Map]",w="[object Number]",_="[object Object]",C="[object Promise]",A="[object RegExp]",$="[object Set]",D="[object String]",H="[object Symbol]",tt="[object WeakMap]",j="[object ArrayBuffer]",q="[object DataView]",U="[object Float32Array]",Bt="[object Float64Array]",ce="[object Int8Array]",xt="[object Int16Array]",Si="[object Int32Array]",Q="[object Uint8Array]",Xt="[object Uint8ClampedArray]",Ce="[object Uint16Array]",Ms="[object Uint32Array]",As=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Cs=/^\w*$/,Ss=/^\./,Ls=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Es=/[\\^$.*+?()[\]{}|]/g,$s=/\\(\\)?/g,Rs=/^\[object .+?Constructor\]$/,Bs=/^(?:0|[1-9]\d*)$/,k={};k[U]=k[Bt]=k[ce]=k[xt]=k[Si]=k[Q]=k[Xt]=k[Ce]=k[Ms]=!0,k[c]=k[u]=k[j]=k[f]=k[q]=k[p]=k[m]=k[d]=k[v]=k[w]=k[_]=k[A]=k[$]=k[D]=k[tt]=!1;var Li=typeof Ct=="object"&&Ct&&Ct.Object===Object&&Ct,Ds=typeof self=="object"&&self&&self.Object===Object&&self,_t=Li||Ds||Function("return this")(),Ei=e&&!e.nodeType&&e,$i=Ei&&!0&&t&&!t.nodeType&&t,Ps=$i&&$i.exports===Ei,Ri=Ps&&Li.process,Bi=function(){try{return Ri&&Ri.binding("util")}catch{}}(),Di=Bi&&Bi.isTypedArray;function ks(a,h){for(var g=-1,b=a?a.length:0,M=Array(b);++g<b;)M[g]=h(a[g],g,a);return M}function Os(a,h){for(var g=-1,b=h.length,M=a.length;++g<b;)a[M+g]=h[g];return a}function Ts(a,h){for(var g=-1,b=a?a.length:0;++g<b;)if(h(a[g],g,a))return!0;return!1}function Is(a){return function(h){return h==null?void 0:h[a]}}function js(a,h){for(var g=-1,b=Array(a);++g<a;)b[g]=h(g);return b}function Ns(a){return function(h){return a(h)}}function Fs(a,h){return a==null?void 0:a[h]}function bn(a){var h=!1;if(a!=null&&typeof a.toString!="function")try{h=!!(a+"")}catch{}return h}function Hs(a){var h=-1,g=Array(a.size);return a.forEach(function(b,M){g[++h]=[M,b]}),g}function qs(a,h){return function(g){return a(h(g))}}function zs(a){var h=-1,g=Array(a.size);return a.forEach(function(b){g[++h]=b}),g}var Ys=Array.prototype,Xs=Function.prototype,Se=Object.prototype,wn=_t["__core-js_shared__"],Pi=function(){var a=/[^.]+$/.exec(wn&&wn.keys&&wn.keys.IE_PROTO||"");return a?"Symbol(src)_1."+a:""}(),ki=Xs.toString,dt=Se.hasOwnProperty,Wt=Se.toString,Ws=RegExp("^"+ki.call(dt).replace(Es,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Le=_t.Symbol,Oi=_t.Uint8Array,Us=Se.propertyIsEnumerable,Vs=Ys.splice,Ti=Le?Le.isConcatSpreadable:void 0,Gs=qs(Object.keys,Object),xn=Ut(_t,"DataView"),ue=Ut(_t,"Map"),_n=Ut(_t,"Promise"),Mn=Ut(_t,"Set"),An=Ut(_t,"WeakMap"),fe=Ut(Object,"create"),Ks=Pt(xn),Js=Pt(ue),Qs=Pt(_n),Zs=Pt(Mn),to=Pt(An),Ee=Le?Le.prototype:void 0,Cn=Ee?Ee.valueOf:void 0,Ii=Ee?Ee.toString:void 0;function Dt(a){var h=-1,g=a?a.length:0;for(this.clear();++h<g;){var b=a[h];this.set(b[0],b[1])}}function eo(){this.__data__=fe?fe(null):{}}function no(a){return this.has(a)&&delete this.__data__[a]}function io(a){var h=this.__data__;if(fe){var g=h[a];return g===r?void 0:g}return dt.call(h,a)?h[a]:void 0}function ro(a){var h=this.__data__;return fe?h[a]!==void 0:dt.call(h,a)}function so(a,h){var g=this.__data__;return g[a]=fe&&h===void 0?r:h,this}Dt.prototype.clear=eo,Dt.prototype.delete=no,Dt.prototype.get=io,Dt.prototype.has=ro,Dt.prototype.set=so;function pt(a){var h=-1,g=a?a.length:0;for(this.clear();++h<g;){var b=a[h];this.set(b[0],b[1])}}function oo(){this.__data__=[]}function ao(a){var h=this.__data__,g=Re(h,a);if(g<0)return!1;var b=h.length-1;return g==b?h.pop():Vs.call(h,g,1),!0}function lo(a){var h=this.__data__,g=Re(h,a);return g<0?void 0:h[g][1]}function co(a){return Re(this.__data__,a)>-1}function uo(a,h){var g=this.__data__,b=Re(g,a);return b<0?g.push([a,h]):g[b][1]=h,this}pt.prototype.clear=oo,pt.prototype.delete=ao,pt.prototype.get=lo,pt.prototype.has=co,pt.prototype.set=uo;function gt(a){var h=-1,g=a?a.length:0;for(this.clear();++h<g;){var b=a[h];this.set(b[0],b[1])}}function fo(){this.__data__={hash:new Dt,map:new(ue||pt),string:new Dt}}function ho(a){return Be(this,a).delete(a)}function po(a){return Be(this,a).get(a)}function go(a){return Be(this,a).has(a)}function mo(a,h){return Be(this,a).set(a,h),this}gt.prototype.clear=fo,gt.prototype.delete=ho,gt.prototype.get=po,gt.prototype.has=go,gt.prototype.set=mo;function $e(a){var h=-1,g=a?a.length:0;for(this.__data__=new gt;++h<g;)this.add(a[h])}function yo(a){return this.__data__.set(a,r),this}function vo(a){return this.__data__.has(a)}$e.prototype.add=$e.prototype.push=yo,$e.prototype.has=vo;function mt(a){this.__data__=new pt(a)}function bo(){this.__data__=new pt}function wo(a){return this.__data__.delete(a)}function xo(a){return this.__data__.get(a)}function _o(a){return this.__data__.has(a)}function Mo(a,h){var g=this.__data__;if(g instanceof pt){var b=g.__data__;if(!ue||b.length<n-1)return b.push([a,h]),this;g=this.__data__=new gt(b)}return g.set(a,h),this}mt.prototype.clear=bo,mt.prototype.delete=wo,mt.prototype.get=xo,mt.prototype.has=_o,mt.prototype.set=Mo;function Ao(a,h){var g=yt(a)||En(a)?js(a.length,String):[],b=g.length,M=!!b;for(var x in a)dt.call(a,x)&&!(M&&(x=="length"||Hi(x,b)))&&g.push(x);return g}function Re(a,h){for(var g=a.length;g--;)if(Yi(a[g][0],h))return g;return-1}var Co=qo(Eo);function So(a,h,g,b,M){var x=-1,E=a.length;for(g||(g=Vo),M||(M=[]);++x<E;){var O=a[x];g(O)?Os(M,O):M[M.length]=O}return M}var Lo=zo();function Eo(a,h){return a&&Lo(a,h,Ie)}function ji(a,h){h=De(h,a)?[h]:Ni(h);for(var g=0,b=h.length;a!=null&&g<b;)a=a[Pe(h[g++])];return g&&g==b?a:void 0}function $o(a){return Wt.call(a)}function Ro(a,h){return a!=null&&h in Object(a)}function Sn(a,h,g,b,M){return a===h?!0:a==null||h==null||!Oe(a)&&!Te(h)?a!==a&&h!==h:Bo(a,h,Sn,g,b,M)}function Bo(a,h,g,b,M,x){var E=yt(a),O=yt(h),T=u,N=u;E||(T=Mt(a),T=T==c?_:T),O||(N=Mt(h),N=N==c?_:N);var V=T==_&&!bn(a),G=N==_&&!bn(h),z=T==N;if(z&&!V)return x||(x=new mt),E||na(a)?Fi(a,h,g,b,M,x):Yo(a,h,T,g,b,M,x);if(!(M&o)){var et=V&&dt.call(a,"__wrapped__"),nt=G&&dt.call(h,"__wrapped__");if(et||nt){var At=et?a.value():a,vt=nt?h.value():h;return x||(x=new mt),g(At,vt,b,M,x)}}return z?(x||(x=new mt),Xo(a,h,g,b,M,x)):!1}function Do(a,h,g,b){var M=g.length,x=M;if(a==null)return!x;for(a=Object(a);M--;){var E=g[M];if(E[2]?E[1]!==a[E[0]]:!(E[0]in a))return!1}for(;++M<x;){E=g[M];var O=E[0],T=a[O],N=E[1];if(E[2]){if(T===void 0&&!(O in a))return!1}else{var V=new mt,G;if(!(G===void 0?Sn(N,T,b,s|o,V):G))return!1}}return!0}function Po(a){if(!Oe(a)||Ko(a))return!1;var h=Xi(a)||bn(a)?Ws:Rs;return h.test(Pt(a))}function ko(a){return Te(a)&&$n(a.length)&&!!k[Wt.call(a)]}function Oo(a){return typeof a=="function"?a:a==null?oa:typeof a=="object"?yt(a)?No(a[0],a[1]):jo(a):aa(a)}function To(a){if(!Jo(a))return Gs(a);var h=[];for(var g in Object(a))dt.call(a,g)&&g!="constructor"&&h.push(g);return h}function Io(a,h){var g=-1,b=ke(a)?Array(a.length):[];return Co(a,function(M,x,E){b[++g]=h(M,x,E)}),b}function jo(a){var h=Wo(a);return h.length==1&&h[0][2]?zi(h[0][0],h[0][1]):function(g){return g===a||Do(g,a,h)}}function No(a,h){return De(a)&&qi(h)?zi(Pe(a),h):function(g){var b=ra(g,a);return b===void 0&&b===h?sa(g,a):Sn(h,b,void 0,s|o)}}function Fo(a){return function(h){return ji(h,a)}}function Ho(a){if(typeof a=="string")return a;if(Rn(a))return Ii?Ii.call(a):"";var h=a+"";return h=="0"&&1/a==-1/0?"-0":h}function Ni(a){return yt(a)?a:Qo(a)}function qo(a,h){return function(g,b){if(g==null)return g;if(!ke(g))return a(g,b);for(var M=g.length,x=-1,E=Object(g);++x<M&&b(E[x],x,E)!==!1;);return g}}function zo(a){return function(h,g,b){for(var M=-1,x=Object(h),E=b(h),O=E.length;O--;){var T=E[++M];if(g(x[T],T,x)===!1)break}return h}}function Fi(a,h,g,b,M,x){var E=M&o,O=a.length,T=h.length;if(O!=T&&!(E&&T>O))return!1;var N=x.get(a);if(N&&x.get(h))return N==h;var V=-1,G=!0,z=M&s?new $e:void 0;for(x.set(a,h),x.set(h,a);++V<O;){var et=a[V],nt=h[V];if(b)var At=E?b(nt,et,V,h,a,x):b(et,nt,V,a,h,x);if(At!==void 0){if(At)continue;G=!1;break}if(z){if(!Ts(h,function(vt,kt){if(!z.has(kt)&&(et===vt||g(et,vt,b,M,x)))return z.add(kt)})){G=!1;break}}else if(!(et===nt||g(et,nt,b,M,x))){G=!1;break}}return x.delete(a),x.delete(h),G}function Yo(a,h,g,b,M,x,E){switch(g){case q:if(a.byteLength!=h.byteLength||a.byteOffset!=h.byteOffset)return!1;a=a.buffer,h=h.buffer;case j:return!(a.byteLength!=h.byteLength||!b(new Oi(a),new Oi(h)));case f:case p:case w:return Yi(+a,+h);case m:return a.name==h.name&&a.message==h.message;case A:case D:return a==h+"";case v:var O=Hs;case $:var T=x&o;if(O||(O=zs),a.size!=h.size&&!T)return!1;var N=E.get(a);if(N)return N==h;x|=s,E.set(a,h);var V=Fi(O(a),O(h),b,M,x,E);return E.delete(a),V;case H:if(Cn)return Cn.call(a)==Cn.call(h)}return!1}function Xo(a,h,g,b,M,x){var E=M&o,O=Ie(a),T=O.length,N=Ie(h),V=N.length;if(T!=V&&!E)return!1;for(var G=T;G--;){var z=O[G];if(!(E?z in h:dt.call(h,z)))return!1}var et=x.get(a);if(et&&x.get(h))return et==h;var nt=!0;x.set(a,h),x.set(h,a);for(var At=E;++G<T;){z=O[G];var vt=a[z],kt=h[z];if(b)var Wi=E?b(kt,vt,z,h,a,x):b(vt,kt,z,a,h,x);if(!(Wi===void 0?vt===kt||g(vt,kt,b,M,x):Wi)){nt=!1;break}At||(At=z=="constructor")}if(nt&&!At){var je=a.constructor,Ne=h.constructor;je!=Ne&&"constructor"in a&&"constructor"in h&&!(typeof je=="function"&&je instanceof je&&typeof Ne=="function"&&Ne instanceof Ne)&&(nt=!1)}return x.delete(a),x.delete(h),nt}function Be(a,h){var g=a.__data__;return Go(h)?g[typeof h=="string"?"string":"hash"]:g.map}function Wo(a){for(var h=Ie(a),g=h.length;g--;){var b=h[g],M=a[b];h[g]=[b,M,qi(M)]}return h}function Ut(a,h){var g=Fs(a,h);return Po(g)?g:void 0}var Mt=$o;(xn&&Mt(new xn(new ArrayBuffer(1)))!=q||ue&&Mt(new ue)!=v||_n&&Mt(_n.resolve())!=C||Mn&&Mt(new Mn)!=$||An&&Mt(new An)!=tt)&&(Mt=function(a){var h=Wt.call(a),g=h==_?a.constructor:void 0,b=g?Pt(g):void 0;if(b)switch(b){case Ks:return q;case Js:return v;case Qs:return C;case Zs:return $;case to:return tt}return h});function Uo(a,h,g){h=De(h,a)?[h]:Ni(h);for(var b,M=-1,E=h.length;++M<E;){var x=Pe(h[M]);if(!(b=a!=null&&g(a,x)))break;a=a[x]}if(b)return b;var E=a?a.length:0;return!!E&&$n(E)&&Hi(x,E)&&(yt(a)||En(a))}function Vo(a){return yt(a)||En(a)||!!(Ti&&a&&a[Ti])}function Hi(a,h){return h=h??l,!!h&&(typeof a=="number"||Bs.test(a))&&a>-1&&a%1==0&&a<h}function De(a,h){if(yt(a))return!1;var g=typeof a;return g=="number"||g=="symbol"||g=="boolean"||a==null||Rn(a)?!0:Cs.test(a)||!As.test(a)||h!=null&&a in Object(h)}function Go(a){var h=typeof a;return h=="string"||h=="number"||h=="symbol"||h=="boolean"?a!=="__proto__":a===null}function Ko(a){return!!Pi&&Pi in a}function Jo(a){var h=a&&a.constructor,g=typeof h=="function"&&h.prototype||Se;return a===g}function qi(a){return a===a&&!Oe(a)}function zi(a,h){return function(g){return g==null?!1:g[a]===h&&(h!==void 0||a in Object(g))}}var Qo=Ln(function(a){a=ia(a);var h=[];return Ss.test(a)&&h.push(""),a.replace(Ls,function(g,b,M,x){h.push(M?x.replace($s,"$1"):b||g)}),h});function Pe(a){if(typeof a=="string"||Rn(a))return a;var h=a+"";return h=="0"&&1/a==-1/0?"-0":h}function Pt(a){if(a!=null){try{return ki.call(a)}catch{}try{return a+""}catch{}}return""}function Zo(a,h){return So(ta(a,h))}function ta(a,h){var g=yt(a)?ks:Io;return g(a,Oo(h))}function Ln(a,h){if(typeof a!="function"||h&&typeof h!="function")throw new TypeError(i);var g=function(){var b=arguments,M=h?h.apply(this,b):b[0],x=g.cache;if(x.has(M))return x.get(M);var E=a.apply(this,b);return g.cache=x.set(M,E),E};return g.cache=new(Ln.Cache||gt),g}Ln.Cache=gt;function Yi(a,h){return a===h||a!==a&&h!==h}function En(a){return ea(a)&&dt.call(a,"callee")&&(!Us.call(a,"callee")||Wt.call(a)==c)}var yt=Array.isArray;function ke(a){return a!=null&&$n(a.length)&&!Xi(a)}function ea(a){return Te(a)&&ke(a)}function Xi(a){var h=Oe(a)?Wt.call(a):"";return h==d||h==y}function $n(a){return typeof a=="number"&&a>-1&&a%1==0&&a<=l}function Oe(a){var h=typeof a;return!!a&&(h=="object"||h=="function")}function Te(a){return!!a&&typeof a=="object"}function Rn(a){return typeof a=="symbol"||Te(a)&&Wt.call(a)==H}var na=Di?Ns(Di):ko;function ia(a){return a==null?"":Ho(a)}function ra(a,h,g){var b=a==null?void 0:ji(a,h);return b===void 0?g:b}function sa(a,h){return a!=null&&Uo(a,h,Ro)}function Ie(a){return ke(a)?Ao(a):To(a)}function oa(a){return a}function aa(a){return De(a)?Is(Pe(a)):Fo(a)}t.exports=Zo})(nn,nn.exports);var Pf=nn.exports;const fi=wr(Pf);function kf(t,e,n){let i=[];t.filterProperties.length&&t.filterProperties.forEach(s=>{var p,m,d,y;const o={},l=v=>s.format==="date"?B(v).valueOf():parseFloat(v);e.forEach(v=>{var w,_;if(s.type==="range"){const C=X(s.key,v);if(Array.isArray(C)){const A=[l(C[0]),l(C[1])];o.min=o.min!==void 0?Math.min(o.min,A[0]):A[0],o.max=o.max!==void 0?Math.max(o.max,A[1]):A[1]}else{const A=l(C);o.min=o.min!==void 0?Math.min(o.min,A):A,o.max=o.max!==void 0?Math.max(o.max,A):A}return}Array.isArray(v[s.key])?v[s.key].forEach(C=>{o[C]=void 0}):s.type==="spatial"?(o.geometry=((w=s==null?void 0:s.state)==null?void 0:w.geometry)||void 0,o.geometry&&(s.stringifiedState=o.geometry.type),o.mode=s.mode||"intersects"):(_=s.key)!=null&&_.includes(".")?ui(fi(n.items,s.key)).filter(C=>C).forEach(C=>{o[C]=void 0}):o[v[s.key]]=void 0});const c=s.key||s.keys.join("|"),u=n.filters[c];let f;if(s.state)if(s.type==="range"){const v=$=>s.format==="date"?B($).valueOf():parseFloat($),w=v(s.state.min),_=v(s.state.max),C=v(s.min??o.min),A=v(s.max??o.max);s.format==="date"?f=!B(w).isSame(B(C),"day")||!B(_).isSame(B(A),"day")||void 0:f=w!==C||_!==A||void 0}else f=Object.values(s.state).some(v=>v)||void 0;if(n.filters[c]=Object.assign({type:s.type||"multiselect",dirty:f||(u==null?void 0:u.dirty),key:c},s.type==="range"?{min:o.min,max:o.max,format:s.format}:{},s),s.type==="range"&&n.filters[c].dirty){const v=C=>s.format==="date"?B(C).valueOf():parseFloat(C),w=v(((p=s.state)==null?void 0:p.min)!==void 0?s.state.min:(m=u==null?void 0:u.state)==null?void 0:m.min),_=v(((d=s.state)==null?void 0:d.max)!==void 0?s.state.max:(y=u==null?void 0:u.state)==null?void 0:y.max);n.filters[c].stringifiedState=s.format==="date"?`${B(w).format(re)} - ${B(_).format(re)}`:`${w} - ${_}`}if(n.filters[c].state=Object.assign({},o,(u==null?void 0:u.state)||{},s.state),s.type==="range"&&s.state){const v=w=>s.format==="date"?B(w).valueOf():parseFloat(w);s.state.min!==void 0&&(n.filters[c].state.min=v(s.state.min)),s.state.max!==void 0&&(n.filters[c].state.max=v(s.state.max))}}),t.matchAllWhenEmpty!==!1&&(n.results=n.sortResults(e),n.requestUpdate()),t.aggregateResults&&(i=Array.from(new Set(e.reduce((s,o)=>s.concat(o[t.aggregateResults]),[]))).filter(s=>s).sort((s,o)=>s.localeCompare(o)));const r=[];return Object.values(n.filters).forEach(s=>{s.type==="text"?s.keys.forEach(o=>{r.includes(o)||r.push(o)}):(s.type==="select"||s.type==="multiselect")&&(r.includes(s.key)||r.push(s.key))}),ru(e,Object.assign({keys:r},t.fuseConfig)),i}async function Of(t,e,n){let i;n.externalFilter?i=await lu(e,n.filters,t):i=await su(e,n.filters,t),n.results=n.sortResults(i,{isExternalResult:!!n.externalFilter})}function Tf(t,e,n){const i=`filter-${t.key}`.replace("|","-");switch(t.type){case"text":return S`<eox-itemfilter-text
        data-type="filter"
        data-cy="text-filter"
        slot="filter"
        id="${i}"
        .tabIndex=${e}
        .filterObject=${t}
        .results=${n.results}
        .unstyled=${n.unstyled}
        @result=${n.updateResult}
        @filter=${()=>n.search()}
      ></eox-itemfilter-text>`;case"multiselect":case"select":return S`
        <eox-itemfilter-select
          .inlineMode=${n.inlineMode||!1}
          data-type="filter"
          id="${i}"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          .suggestions="${ui(fi(n.items,t.key)).filter(r=>r)}"
          type="${t.type}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-select>
      `;case"range":return S`
        <eox-itemfilter-range
          .inlineMode=${n.inlineMode||!1}
          id="${i}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          .suggestions="${ui(fi(n.items,t.key)).filter(r=>r)}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-range>
      `;case"spatial":return S`
        <eox-itemfilter-spatial
          id="${i}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          @filter=${()=>n.search()}
        ></eox-itemfilter-spatial>
      `;default:return S``}}function If(t,e,n={}){var o;const{resultSorting:i}=e;if(i===!1)return t;if(i===void 0)return n.isExternalResult||(o=e.fuseConfig)!=null&&o.shouldSort?t:[...t].sort((l,c)=>{const u=X(e.titleProperty,l)||"",f=X(e.titleProperty,c)||"";return u.toString().localeCompare(f.toString())});if(typeof i=="function")return[...t].sort(i);const r=typeof i=="string"?i:i.key,s=typeof i=="object"&&i.order==="desc"?-1:1;return r?[...t].sort((l,c)=>{const u=X(r,l)||"",f=X(r,c)||"";return u.toString().localeCompare(f.toString())*s}):t}function jf(t,e,n){return S`
    ${I(t.dirty,()=>S`
        <button
          type="button"
          tabindex=${e}
          slot="reset-button"
          class="reset-icon icon square primary-text transparent small no-margin"
          @click=${i=>{const r=i.target.parentElement.querySelector("[slot=filter]");r&&typeof r.reset=="function"&&r.reset(),n.search(),n.requestUpdate()}}
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
  `}function Nf(t){t.renderRoot.querySelectorAll("[data-type='filter']").forEach(e=>{typeof e.reset=="function"&&e.reset()}),t.search()}var Me,jt,K,se,xs,_s;class Ff extends ut{constructor(){super();Y(this,se);Y(this,Me,[]);Y(this,jt,[]);Y(this,K,pu);this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=cn(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.resultSorting=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.enableResultAction=!1,this.resultActionIcon='<svg style="width: 24px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>click me!</title><path fill="currentColor" d="M11.5,11L17.88,16.37L17,16.55L16.36,16.67C15.73,16.8 15.37,17.5 15.65,18.07L15.92,18.65L17.28,21.59L15.86,22.25L14.5,19.32L14.24,18.74C13.97,18.15 13.22,17.97 12.72,18.38L12.21,18.78L11.5,19.35V11M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10" /></svg>',this.styleOverride="",this.unstyled=!1}static get properties(){return{items:{type:Array},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{type:Array},fuseConfig:{type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},resultSorting:{type:Object},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},enableResultAction:{type:Boolean},resultActionIcon:{type:String},styleOverride:{type:String},unstyled:{type:Boolean}}}apply(){Vt(this,K,Fn.reduce((n,i)=>(n[i]=this[i],n),{})),Vt(this,Me,kf(F(this,K),F(this,jt),this)),this.search()}async searchHandler(){await Of(F(this,K),F(this,jt),this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(n,i){return If(n,F(this,K),i)}resetFilters(){Nf(this)}firstUpdated(n){var r;let i={};Fn.map(s=>{i={...i,[s]:this[s]}}),Vt(this,K,i),Vt(this,jt,((r=this.items)==null?void 0:r.map((s,o)=>Object.assign({id:s[this.idProperty]||`item-${o}`},s)))||[]),this.apply()}updated(n){var s;let i=!1,r=!1;Fn.forEach(o=>{n.has(o)&&(F(this,K)[o]=this[o],["items","filterProperties","idProperty","aggregateResults","fuseConfig","matchAllWhenEmpty","externalFilter"].includes(o)?i=!0:o==="resultSorting"&&(r=!0))}),i?(Vt(this,jt,((s=this.items)==null?void 0:s.map((o,l)=>Object.assign({id:o[this.idProperty]||`item-${l}`},o)))||[]),this.apply()):r&&this.search()}updateResult(n){this.selectedResult=n.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}mouseEnterResult(n){this.dispatchEvent(new CustomEvent("mouseenter:result",{detail:n.detail,bubbles:!0,composed:!0}))}mouseLeaveResult(n){this.dispatchEvent(new CustomEvent("mouseleave:result",{detail:n.detail,bubbles:!0,composed:!0}))}emitResultAction(n){this.dispatchEvent(new CustomEvent("click:result-action",{detail:n.detail,bubbles:!0,composed:!0}))}render(){var n;return S`
      <style>
        ${ya}
        ${!this.unstyled&&hi}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":St}
        @submit="${i=>i.preventDefault()}"
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
                        ${I(!this.inlineMode&&F(this,K).filterProperties&&!this.inlineMode&&F(this,K).filterProperties&&ei(this.filters),()=>S`
                            <button
                              type="button"
                              id="filter-reset"
                              class="reset-icon border small"
                              data-cy="filter-reset"
                              @click=${()=>this.resetFilters()}
                            >
                              ${this.unstyled?St:S`
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
                      ${ln(Object.values(this.filters),(i,r)=>S` <li class="no-padding">
                            <eox-itemfilter-expandcontainer
                              .filterObject=${i}
                              @details-toggled=${s=>Kr(s,F(this,K),this)}
                              data-details="${i.key}"
                            >
                              ${R(this,se,_s).call(this,i,yr(r,1))}
                              ${R(this,se,xs).call(this,i,yr(r,2))}
                            </eox-itemfilter-expandcontainer>
                          </li>`)}
                    </ul>
                  </div>
                </section>
              </eox-itemfilter-container>
            </div>
          `)}
        ${I(((n=F(this,K))==null?void 0:n.showResults)&&this.results,()=>S`
            <div class="small-space"></div>
            <eox-itemfilter-results
              .config=${F(this,K)}
              .results=${this.results}
              .filters=${this.filters}
              .resultAggregation=${F(this,Me)}
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
    `}}Me=new WeakMap,jt=new WeakMap,K=new WeakMap,se=new WeakSet,xs=function(n,i){return Tf(n,i,this)},_s=function(n,i){return jf(n,i,this)};customElements.define("eox-itemfilter",Ff);export{Ff as EOxItemFilter};
