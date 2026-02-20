var Qo=Object.defineProperty;var Tr=t=>{throw TypeError(t)};var ta=(t,e,n)=>e in t?Qo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var oe=(t,e,n)=>ta(t,typeof e!="symbol"?e+"":e,n),Cn=(t,e,n)=>e.has(t)||Tr("Cannot "+n);var H=(t,e,n)=>(Cn(t,e,"read from private field"),n?n.call(t):e.get(t)),q=(t,e,n)=>e.has(t)?Tr("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Oe=(t,e,n,r)=>(Cn(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),B=(t,e,n)=>(Cn(t,e,"access private method"),n);import{a as ct,A as _t,b as A}from"./lit-element.CBn2YVps.js";import{o as en}from"./map.DiiNQ3pp.js";import{n as I}from"./when.BR7zwNJC.js";import{e as ea,a as na}from"./addCommonStyleSheet.ifc4352L.js";import{d as he}from"./dayjs.min.Ba62AOpW.js";import{_ as nn}from"./index.BUIxO2d3.js";import{s as Yt,u as Or}from"./static.DLFxBHrh.js";import{c as ra}from"./repeat.Duc9p3Ra.js";import{o as ke}from"./unsafe-html.C2DIGSw-.js";import"./toolcool-range-slider.min.BBXDELo7.js";import{o as ia}from"./orient2d.DArCjZZA.js";import{f as Kt,a as Q,b as ce,m as sa,l as de,i as oa,d as Ut,r as aa,c as kr}from"./index.CxojoGlr.js";import{g as oi,c as At}from"./commonjsHelpers.BosuxZz1.js";import"./directive.CvdRHFdJ.js";import"./directive-helpers.Bj3rQkfn.js";const la=`
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
`;na();const nr=`
${ea}
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
`;var Je,ai;class ca extends ct{constructor(){super();q(this,Je);this.filterObject={},this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}render(){return A`
      <style>
        ${!this.unstyled&&nr}
      </style>

      ${I(this.filterObject.featured,()=>A`<slot name="filter"></slot>`,()=>A`<details
            @toggle="${B(this,Je,ai)}"
            class="details-filter max-width"
            ?open=${this.filterObject.expanded||_t}
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
    `}}Je=new WeakSet,ai=function(n){this.dispatchEvent(new CustomEvent("details-toggled",{detail:n,bubbles:!0,composed:!0}))};customElements.define("eox-itemfilter-expandcontainer",ca);function mt(t){return Array.isArray?Array.isArray(t):ui(t)==="[object Array]"}function ua(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function fa(t){return t==null?"":ua(t)}function it(t){return typeof t=="string"}function li(t){return typeof t=="number"}function ha(t){return t===!0||t===!1||da(t)&&ui(t)=="[object Boolean]"}function ci(t){return typeof t=="object"}function da(t){return ci(t)&&t!==null}function G(t){return t!=null}function Sn(t){return!t.trim().length}function ui(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const pa="Incorrect 'index' type",ga=t=>`Invalid value for key ${t}`,ya=t=>`Pattern length exceeds max of ${t}.`,ma=t=>`Missing ${t} property in key`,ba=t=>`Property 'weight' in key '${t}' must be a positive integer`,Ir=Object.prototype.hasOwnProperty;class va{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=fi(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function fi(t){let e=null,n=null,r=null,i=1,s=null;if(it(t)||mt(t))r=t,e=Nr(t),n=kn(t);else{if(!Ir.call(t,"name"))throw new Error(ma("name"));const o=t.name;if(r=o,Ir.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(ba(o));e=Nr(o),n=kn(o),s=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:s}}function Nr(t){return mt(t)?t:t.split(".")}function kn(t){return mt(t)?t.join("."):t}function wa(t,e){let n=[],r=!1;const i=(s,o,l)=>{if(G(s))if(!o[l])n.push(s);else{let c=o[l];const u=s[c];if(!G(u))return;if(l===o.length-1&&(it(u)||li(u)||ha(u)))n.push(fa(u));else if(mt(u)){r=!0;for(let h=0,d=u.length;h<d;h+=1)i(u[h],o,l+1)}else o.length&&i(u,o,l+1)}};return i(t,it(e)?e.split("."):e,0),r?n:n[0]}const xa={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Ma={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},Aa={location:0,threshold:.6,distance:100},_a={useExtendedSearch:!1,getFn:wa,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var C={...Ma,...xa,...Aa,..._a};const Ca=/[^ ]+/g;function Sa(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const s=i.match(Ca).length;if(n.has(s))return n.get(s);const o=1/Math.pow(s,.5*t),l=parseFloat(Math.round(o*r)/r);return n.set(s,l),l},clear(){n.clear()}}}class rr{constructor({getFn:e=C.getFn,fieldNormWeight:n=C.fieldNormWeight}={}){this.norm=Sa(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,it(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();it(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!G(e)||Sn(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,s)=>{let o=i.getFn?i.getFn(e):this.getFn(e,i.path);if(G(o)){if(mt(o)){let l=[];const c=[{nestedArrIndex:-1,value:o}];for(;c.length;){const{nestedArrIndex:u,value:h}=c.pop();if(G(h))if(it(h)&&!Sn(h)){let d={v:h,i:u,n:this.norm.get(h)};l.push(d)}else mt(h)&&h.forEach((d,y)=>{c.push({nestedArrIndex:y,value:d})})}r.$[s]=l}else if(it(o)&&!Sn(o)){let l={v:o,n:this.norm.get(o)};r.$[s]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function hi(t,e,{getFn:n=C.getFn,fieldNormWeight:r=C.fieldNormWeight}={}){const i=new rr({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(fi)),i.setSources(e),i.create(),i}function La(t,{getFn:e=C.getFn,fieldNormWeight:n=C.fieldNormWeight}={}){const{keys:r,records:i}=t,s=new rr({getFn:e,fieldNormWeight:n});return s.setKeys(r),s.setIndexRecords(i),s}function Ie(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=C.distance,ignoreLocation:s=C.ignoreLocation}={}){const o=e/t.length;if(s)return o;const l=Math.abs(r-n);return i?o+l/i:l?1:o}function Ea(t=[],e=C.minMatchCharLength){let n=[],r=-1,i=-1,s=0;for(let o=t.length;s<o;s+=1){let l=t[s];l&&r===-1?r=s:!l&&r!==-1&&(i=s-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[s-1]&&s-r>=e&&n.push([r,s-1]),n}const Dt=32;function $a(t,e,n,{location:r=C.location,distance:i=C.distance,threshold:s=C.threshold,findAllMatches:o=C.findAllMatches,minMatchCharLength:l=C.minMatchCharLength,includeMatches:c=C.includeMatches,ignoreLocation:u=C.ignoreLocation}={}){if(e.length>Dt)throw new Error(ya(Dt));const h=e.length,d=t.length,y=Math.max(0,Math.min(r,d));let g=s,m=y;const w=l>1||c,_=w?Array(d):[];let M;for(;(M=t.indexOf(e,m))>-1;){let k=Ie(e,{currentLocation:M,expectedLocation:y,distance:i,ignoreLocation:u});if(g=Math.min(k,g),m=M+h,w){let et=0;for(;et<h;)_[M+et]=1,et+=1}}m=-1;let E=[],L=1,$=h+d;const P=1<<h-1;for(let k=0;k<h;k+=1){let et=0,z=$;for(;et<z;)Ie(e,{errors:k,currentLocation:y+z,expectedLocation:y,distance:i,ignoreLocation:u})<=g?et=z:$=z,z=Math.floor(($-et)/2+et);$=z;let ve=Math.max(1,y-z+1),re=o?d:Math.min(y+z,d)+h,vt=Array(re+2);vt[re+1]=(1<<k)-1;for(let U=re;U>=ve;U-=1){let Ft=U-1,we=n[t.charAt(Ft)];if(w&&(_[Ft]=+!!we),vt[U]=(vt[U+1]<<1|1)&we,k&&(vt[U]|=(E[U+1]|E[U])<<1|1|E[U+1]),vt[U]&P&&(L=Ie(e,{errors:k,currentLocation:Ft,expectedLocation:y,distance:i,ignoreLocation:u}),L<=g)){if(g=L,m=Ft,m<=y)break;ve=Math.max(1,2*y-m)}}if(Ie(e,{errors:k+1,currentLocation:y,expectedLocation:y,distance:i,ignoreLocation:u})>g)break;E=vt}const N={isMatch:m>=0,score:Math.max(.001,L)};if(w){const k=Ea(_,l);k.length?c&&(N.indices=k):N.isMatch=!1}return N}function Ba(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}const Xe=String.prototype.normalize?t=>t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,""):t=>t;class di{constructor(e,{location:n=C.location,threshold:r=C.threshold,distance:i=C.distance,includeMatches:s=C.includeMatches,findAllMatches:o=C.findAllMatches,minMatchCharLength:l=C.minMatchCharLength,isCaseSensitive:c=C.isCaseSensitive,ignoreDiacritics:u=C.ignoreDiacritics,ignoreLocation:h=C.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:s,findAllMatches:o,minMatchCharLength:l,isCaseSensitive:c,ignoreDiacritics:u,ignoreLocation:h},e=c?e:e.toLowerCase(),e=u?Xe(e):e,this.pattern=e,this.chunks=[],!this.pattern.length)return;const d=(g,m)=>{this.chunks.push({pattern:g,alphabet:Ba(g),startIndex:m})},y=this.pattern.length;if(y>Dt){let g=0;const m=y%Dt,w=y-m;for(;g<w;)d(this.pattern.substr(g,Dt),g),g+=Dt;if(m){const _=y-Dt;d(this.pattern.substr(_),_)}}else d(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,ignoreDiacritics:r,includeMatches:i}=this.options;if(e=n?e:e.toLowerCase(),e=r?Xe(e):e,this.pattern===e){let w={isMatch:!0,score:0};return i&&(w.indices=[[0,e.length-1]]),w}const{location:s,distance:o,threshold:l,findAllMatches:c,minMatchCharLength:u,ignoreLocation:h}=this.options;let d=[],y=0,g=!1;this.chunks.forEach(({pattern:w,alphabet:_,startIndex:M})=>{const{isMatch:E,score:L,indices:$}=$a(e,w,_,{location:s+M,distance:o,threshold:l,findAllMatches:c,minMatchCharLength:u,includeMatches:i,ignoreLocation:h});E&&(g=!0),y+=L,E&&$&&(d=[...d,...$])});let m={isMatch:g,score:g?y/this.chunks.length:1};return g&&i&&(m.indices=d),m}}class Lt{constructor(e){this.pattern=e}static isMultiMatch(e){return jr(e,this.multiRegex)}static isSingleMatch(e){return jr(e,this.singleRegex)}search(){}}function jr(t,e){const n=t.match(e);return n?n[1]:null}class Ra extends Lt{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Pa extends Lt{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class Da extends Lt{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Ta extends Lt{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Oa extends Lt{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class ka extends Lt{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class pi extends Lt{constructor(e,{location:n=C.location,threshold:r=C.threshold,distance:i=C.distance,includeMatches:s=C.includeMatches,findAllMatches:o=C.findAllMatches,minMatchCharLength:l=C.minMatchCharLength,isCaseSensitive:c=C.isCaseSensitive,ignoreDiacritics:u=C.ignoreDiacritics,ignoreLocation:h=C.ignoreLocation}={}){super(e),this._bitapSearch=new di(e,{location:n,threshold:r,distance:i,includeMatches:s,findAllMatches:o,minMatchCharLength:l,isCaseSensitive:c,ignoreDiacritics:u,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class gi extends Lt{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],s=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+s,i.push([r,n-1]);const o=!!i.length;return{isMatch:o,score:o?0:1,indices:i}}}const In=[Ra,gi,Da,Ta,ka,Oa,Pa,pi],Fr=In.length,Ia=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Na="|";function ja(t,e={}){return t.split(Na).map(n=>{let r=n.trim().split(Ia).filter(s=>s&&!!s.trim()),i=[];for(let s=0,o=r.length;s<o;s+=1){const l=r[s];let c=!1,u=-1;for(;!c&&++u<Fr;){const h=In[u];let d=h.isMultiMatch(l);d&&(i.push(new h(d,e)),c=!0)}if(!c)for(u=-1;++u<Fr;){const h=In[u];let d=h.isSingleMatch(l);if(d){i.push(new h(d,e));break}}}return i})}const Fa=new Set([pi.type,gi.type]);class Ha{constructor(e,{isCaseSensitive:n=C.isCaseSensitive,ignoreDiacritics:r=C.ignoreDiacritics,includeMatches:i=C.includeMatches,minMatchCharLength:s=C.minMatchCharLength,ignoreLocation:o=C.ignoreLocation,findAllMatches:l=C.findAllMatches,location:c=C.location,threshold:u=C.threshold,distance:h=C.distance}={}){this.query=null,this.options={isCaseSensitive:n,ignoreDiacritics:r,includeMatches:i,minMatchCharLength:s,findAllMatches:l,ignoreLocation:o,location:c,threshold:u,distance:h},e=n?e:e.toLowerCase(),e=r?Xe(e):e,this.pattern=e,this.query=ja(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i,ignoreDiacritics:s}=this.options;e=i?e:e.toLowerCase(),e=s?Xe(e):e;let o=0,l=[],c=0;for(let u=0,h=n.length;u<h;u+=1){const d=n[u];l.length=0,o=0;for(let y=0,g=d.length;y<g;y+=1){const m=d[y],{isMatch:w,indices:_,score:M}=m.search(e);if(w){if(o+=1,c+=M,r){const E=m.constructor.type;Fa.has(E)?l=[...l,..._]:l.push(_)}}else{c=0,o=0,l.length=0;break}}if(o){let y={isMatch:!0,score:c/o};return r&&(y.indices=l),y}}return{isMatch:!1,score:1}}}const Nn=[];function qa(...t){Nn.push(...t)}function jn(t,e){for(let n=0,r=Nn.length;n<r;n+=1){let i=Nn[n];if(i.condition(t,e))return new i(t,e)}return new di(t,e)}const ze={AND:"$and",OR:"$or"},Fn={PATH:"$path",PATTERN:"$val"},Hn=t=>!!(t[ze.AND]||t[ze.OR]),Ya=t=>!!t[Fn.PATH],Xa=t=>!mt(t)&&ci(t)&&!Hn(t),Hr=t=>({[ze.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function yi(t,e,{auto:n=!0}={}){const r=i=>{let s=Object.keys(i);const o=Ya(i);if(!o&&s.length>1&&!Hn(i))return r(Hr(i));if(Xa(i)){const c=o?i[Fn.PATH]:s[0],u=o?i[Fn.PATTERN]:i[c];if(!it(u))throw new Error(ga(c));const h={keyId:kn(c),pattern:u};return n&&(h.searcher=jn(u,e)),h}let l={children:[],operator:s[0]};return s.forEach(c=>{const u=i[c];mt(u)&&u.forEach(h=>{l.children.push(r(h))})}),l};return Hn(t)||(t=Hr(t)),r(t)}function za(t,{ignoreFieldNorm:e=C.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:s,score:o})=>{const l=i?i.weight:null;r*=Math.pow(o===0&&l?Number.EPSILON:o,(l||1)*(e?1:s))}),n.score=r})}function Ua(t,e){const n=t.matches;e.matches=[],G(n)&&n.forEach(r=>{if(!G(r.indices)||!r.indices.length)return;const{indices:i,value:s}=r;let o={indices:i,value:s};r.key&&(o.key=r.key.src),r.idx>-1&&(o.refIndex=r.idx),e.matches.push(o)})}function Wa(t,e){e.score=t.score}function Ga(t,e,{includeMatches:n=C.includeMatches,includeScore:r=C.includeScore}={}){const i=[];return n&&i.push(Ua),r&&i.push(Wa),t.map(s=>{const{idx:o}=s,l={item:e[o],refIndex:o};return i.length&&i.forEach(c=>{c(s,l)}),l})}class Et{constructor(e,n={},r){this.options={...C,...n},this.options.useExtendedSearch,this._keyStore=new va(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof rr))throw new Error(pa);this._myIndex=n||hi(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){G(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const s=this._docs[r];e(s,r)&&(this.removeAt(r),r-=1,i-=1,n.push(s))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:s,sortFn:o,ignoreFieldNorm:l}=this.options;let c=it(e)?it(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return za(c,{ignoreFieldNorm:l}),s&&c.sort(o),li(n)&&n>-1&&(c=c.slice(0,n)),Ga(c,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=jn(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:s,i:o,n:l})=>{if(!G(s))return;const{isMatch:c,score:u,indices:h}=n.searchIn(s);c&&i.push({item:s,idx:o,matches:[{score:u,value:s,norm:l,indices:h}]})}),i}_searchLogical(e){const n=yi(e,this.options),r=(l,c,u)=>{if(!l.children){const{keyId:d,searcher:y}=l,g=this._findMatches({key:this._keyStore.get(d),value:this._myIndex.getValueForItemAtKeyId(c,d),searcher:y});return g&&g.length?[{idx:u,item:c,matches:g}]:[]}const h=[];for(let d=0,y=l.children.length;d<y;d+=1){const g=l.children[d],m=r(g,c,u);if(m.length)h.push(...m);else if(l.operator===ze.AND)return[]}return h},i=this._myIndex.records,s={},o=[];return i.forEach(({$:l,i:c})=>{if(G(l)){let u=r(n,l,c);u.length&&(s[c]||(s[c]={idx:c,item:l,matches:[]},o.push(s[c])),u.forEach(({matches:h})=>{s[c].matches.push(...h)}))}}),o}_searchObjectList(e){const n=jn(e,this.options),{keys:r,records:i}=this._myIndex,s=[];return i.forEach(({$:o,i:l})=>{if(!G(o))return;let c=[];r.forEach((u,h)=>{c.push(...this._findMatches({key:u,value:o[h],searcher:n}))}),c.length&&s.push({idx:l,item:o,matches:c})}),s}_findMatches({key:e,value:n,searcher:r}){if(!G(n))return[];let i=[];if(mt(n))n.forEach(({v:s,i:o,n:l})=>{if(!G(s))return;const{isMatch:c,score:u,indices:h}=r.searchIn(s);c&&i.push({score:u,key:e,value:s,idx:o,norm:l,indices:h})});else{const{v:s,n:o}=n,{isMatch:l,score:c,indices:u}=r.searchIn(s);l&&i.push({score:c,key:e,value:s,norm:o,indices:u})}return i}}Et.version="7.1.0";Et.createIndex=hi;Et.parseIndex=La;Et.config=C;Et.parseQuery=yi;qa(Ha);function mi(t,e){const n=new Et(e.filterProperties,{keys:["title"]});if(!(t.target instanceof HTMLInputElement))return;const r=t.target.value,s=n.search(r).map(o=>o.item.key||o.item.keys.join("|"));Object.keys(e.filters).forEach(o=>{e.querySelector(`[data-details="${o}"]`).parentElement.style.display=s.includes(o)||!r?"":"none"})}function Va(t,e){if(!(t.target instanceof HTMLElement))return;const n=t.target.getAttribute("data-close").replace("|","-");e.querySelector(`#filter-${n}`).reset(),e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}const qn=Math.min,Wt=Math.max,Ue=Math.round,Ne=Math.floor,ot=t=>({x:t,y:t});function Ka(t,e){return typeof t=="function"?t(e):t}function bi(t){return t.split("-")[0]}function Ja(t){return t.split("-")[1]}function Za(t){return t==="x"?"y":"x"}function Qa(t){return t==="y"?"height":"width"}const tl=new Set(["top","bottom"]);function vi(t){return tl.has(bi(t))?"y":"x"}function el(t){return Za(vi(t))}function nl(t){return{top:0,right:0,bottom:0,left:0,...t}}function rl(t){return typeof t!="number"?nl(t):{top:t,right:t,bottom:t,left:t}}function We(t){const{x:e,y:n,width:r,height:i}=t;return{width:r,height:i,top:n,left:e,right:e+r,bottom:n+i,x:e,y:n}}function qr(t,e,n){let{reference:r,floating:i}=t;const s=vi(e),o=el(e),l=Qa(o),c=bi(e),u=s==="y",h=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,y=r[l]/2-i[l]/2;let g;switch(c){case"top":g={x:h,y:r.y-i.height};break;case"bottom":g={x:h,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:d};break;case"left":g={x:r.x-i.width,y:d};break;default:g={x:r.x,y:r.y}}switch(Ja(e)){case"start":g[o]-=y*(n&&u?-1:1);break;case"end":g[o]+=y*(n&&u?-1:1);break}return g}async function il(t,e){var n;e===void 0&&(e={});const{x:r,y:i,platform:s,rects:o,elements:l,strategy:c}=t,{boundary:u="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:y=!1,padding:g=0}=Ka(e,t),m=rl(g),_=l[y?d==="floating"?"reference":"floating":d],M=We(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(_)))==null||n?_:_.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:u,rootBoundary:h,strategy:c})),E=d==="floating"?{x:r,y:i,width:o.floating.width,height:o.floating.height}:o.reference,L=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),$=await(s.isElement==null?void 0:s.isElement(L))?await(s.getScale==null?void 0:s.getScale(L))||{x:1,y:1}:{x:1,y:1},P=We(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:E,offsetParent:L,strategy:c}):E);return{top:(M.top-P.top+m.top)/$.y,bottom:(P.bottom-M.bottom+m.bottom)/$.y,left:(M.left-P.left+m.left)/$.x,right:(P.right-M.right+m.right)/$.x}}const sl=async(t,e,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:s=[],platform:o}=n,l=s.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(e));let u=await o.getElementRects({reference:t,floating:e,strategy:i}),{x:h,y:d}=qr(u,r,c),y=r,g={},m=0;for(let _=0;_<l.length;_++){var w;const{name:M,fn:E}=l[_],{x:L,y:$,data:P,reset:N}=await E({x:h,y:d,initialPlacement:r,placement:y,strategy:i,middlewareData:g,rects:u,platform:{...o,detectOverflow:(w=o.detectOverflow)!=null?w:il},elements:{reference:t,floating:e}});h=L??h,d=$??d,g={...g,[M]:{...g[M],...P}},N&&m<=50&&(m++,typeof N=="object"&&(N.placement&&(y=N.placement),N.rects&&(u=N.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:i}):N.rects),{x:h,y:d}=qr(u,y,c)),_=-1)}return{x:h,y:d,placement:y,strategy:i,middlewareData:g}};function rn(){return typeof window<"u"}function te(t){return wi(t)?(t.nodeName||"").toLowerCase():"#document"}function V(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function ut(t){var e;return(e=(wi(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function wi(t){return rn()?t instanceof Node||t instanceof V(t).Node:!1}function nt(t){return rn()?t instanceof Element||t instanceof V(t).Element:!1}function lt(t){return rn()?t instanceof HTMLElement||t instanceof V(t).HTMLElement:!1}function Yr(t){return!rn()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof V(t).ShadowRoot}const ol=new Set(["inline","contents"]);function be(t){const{overflow:e,overflowX:n,overflowY:r,display:i}=rt(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!ol.has(i)}const al=new Set(["table","td","th"]);function ll(t){return al.has(te(t))}const cl=[":popover-open",":modal"];function sn(t){return cl.some(e=>{try{return t.matches(e)}catch{return!1}})}const ul=["transform","translate","scale","rotate","perspective"],fl=["transform","translate","scale","rotate","perspective","filter"],hl=["paint","layout","strict","content"];function ir(t){const e=sr(),n=nt(t)?rt(t):t;return ul.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||fl.some(r=>(n.willChange||"").includes(r))||hl.some(r=>(n.contain||"").includes(r))}function dl(t){let e=Ct(t);for(;lt(e)&&!Jt(e);){if(ir(e))return e;if(sn(e))return null;e=Ct(e)}return null}function sr(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const pl=new Set(["html","body","#document"]);function Jt(t){return pl.has(te(t))}function rt(t){return V(t).getComputedStyle(t)}function on(t){return nt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Ct(t){if(te(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Yr(t)&&t.host||ut(t);return Yr(e)?e.host:e}function xi(t){const e=Ct(t);return Jt(e)?t.ownerDocument?t.ownerDocument.body:t.body:lt(e)&&be(e)?e:xi(e)}function pe(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=xi(t),s=i===((r=t.ownerDocument)==null?void 0:r.body),o=V(i);if(s){const l=Yn(o);return e.concat(o,o.visualViewport||[],be(i)?i:[],l&&n?pe(l):[])}return e.concat(i,pe(i,[],n))}function Yn(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Mi(t){const e=rt(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const i=lt(t),s=i?t.offsetWidth:n,o=i?t.offsetHeight:r,l=Ue(n)!==s||Ue(r)!==o;return l&&(n=s,r=o),{width:n,height:r,$:l}}function or(t){return nt(t)?t:t.contextElement}function Gt(t){const e=or(t);if(!lt(e))return ot(1);const n=e.getBoundingClientRect(),{width:r,height:i,$:s}=Mi(e);let o=(s?Ue(n.width):n.width)/r,l=(s?Ue(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!l||!Number.isFinite(l))&&(l=1),{x:o,y:l}}const gl=ot(0);function Ai(t){const e=V(t);return!sr()||!e.visualViewport?gl:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function yl(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==V(t)?!1:e}function Ot(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=or(t);let o=ot(1);e&&(r?nt(r)&&(o=Gt(r)):o=Gt(t));const l=yl(s,n,r)?Ai(s):ot(0);let c=(i.left+l.x)/o.x,u=(i.top+l.y)/o.y,h=i.width/o.x,d=i.height/o.y;if(s){const y=V(s),g=r&&nt(r)?V(r):r;let m=y,w=Yn(m);for(;w&&r&&g!==m;){const _=Gt(w),M=w.getBoundingClientRect(),E=rt(w),L=M.left+(w.clientLeft+parseFloat(E.paddingLeft))*_.x,$=M.top+(w.clientTop+parseFloat(E.paddingTop))*_.y;c*=_.x,u*=_.y,h*=_.x,d*=_.y,c+=L,u+=$,m=V(w),w=Yn(m)}}return We({width:h,height:d,x:c,y:u})}function an(t,e){const n=on(t).scrollLeft;return e?e.left+n:Ot(ut(t)).left+n}function _i(t,e){const n=t.getBoundingClientRect(),r=n.left+e.scrollLeft-an(t,n),i=n.top+e.scrollTop;return{x:r,y:i}}function ml(t){let{elements:e,rect:n,offsetParent:r,strategy:i}=t;const s=i==="fixed",o=ut(r),l=e?sn(e.floating):!1;if(r===o||l&&s)return n;let c={scrollLeft:0,scrollTop:0},u=ot(1);const h=ot(0),d=lt(r);if((d||!d&&!s)&&((te(r)!=="body"||be(o))&&(c=on(r)),lt(r))){const g=Ot(r);u=Gt(r),h.x=g.x+r.clientLeft,h.y=g.y+r.clientTop}const y=o&&!d&&!s?_i(o,c):ot(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-c.scrollLeft*u.x+h.x+y.x,y:n.y*u.y-c.scrollTop*u.y+h.y+y.y}}function bl(t){return Array.from(t.getClientRects())}function vl(t){const e=ut(t),n=on(t),r=t.ownerDocument.body,i=Wt(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),s=Wt(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let o=-n.scrollLeft+an(t);const l=-n.scrollTop;return rt(r).direction==="rtl"&&(o+=Wt(e.clientWidth,r.clientWidth)-i),{width:i,height:s,x:o,y:l}}const Xr=25;function wl(t,e){const n=V(t),r=ut(t),i=n.visualViewport;let s=r.clientWidth,o=r.clientHeight,l=0,c=0;if(i){s=i.width,o=i.height;const h=sr();(!h||h&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}const u=an(r);if(u<=0){const h=r.ownerDocument,d=h.body,y=getComputedStyle(d),g=h.compatMode==="CSS1Compat"&&parseFloat(y.marginLeft)+parseFloat(y.marginRight)||0,m=Math.abs(r.clientWidth-d.clientWidth-g);m<=Xr&&(s-=m)}else u<=Xr&&(s+=u);return{width:s,height:o,x:l,y:c}}const xl=new Set(["absolute","fixed"]);function Ml(t,e){const n=Ot(t,!0,e==="fixed"),r=n.top+t.clientTop,i=n.left+t.clientLeft,s=lt(t)?Gt(t):ot(1),o=t.clientWidth*s.x,l=t.clientHeight*s.y,c=i*s.x,u=r*s.y;return{width:o,height:l,x:c,y:u}}function zr(t,e,n){let r;if(e==="viewport")r=wl(t,n);else if(e==="document")r=vl(ut(t));else if(nt(e))r=Ml(e,n);else{const i=Ai(t);r={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return We(r)}function Ci(t,e){const n=Ct(t);return n===e||!nt(n)||Jt(n)?!1:rt(n).position==="fixed"||Ci(n,e)}function Al(t,e){const n=e.get(t);if(n)return n;let r=pe(t,[],!1).filter(l=>nt(l)&&te(l)!=="body"),i=null;const s=rt(t).position==="fixed";let o=s?Ct(t):t;for(;nt(o)&&!Jt(o);){const l=rt(o),c=ir(o);!c&&l.position==="fixed"&&(i=null),(s?!c&&!i:!c&&l.position==="static"&&!!i&&xl.has(i.position)||be(o)&&!c&&Ci(t,o))?r=r.filter(h=>h!==o):i=l,o=Ct(o)}return e.set(t,r),r}function _l(t){let{element:e,boundary:n,rootBoundary:r,strategy:i}=t;const o=[...n==="clippingAncestors"?sn(e)?[]:Al(e,this._c):[].concat(n),r],l=o[0],c=o.reduce((u,h)=>{const d=zr(e,h,i);return u.top=Wt(d.top,u.top),u.right=qn(d.right,u.right),u.bottom=qn(d.bottom,u.bottom),u.left=Wt(d.left,u.left),u},zr(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Cl(t){const{width:e,height:n}=Mi(t);return{width:e,height:n}}function Sl(t,e,n){const r=lt(e),i=ut(e),s=n==="fixed",o=Ot(t,!0,s,e);let l={scrollLeft:0,scrollTop:0};const c=ot(0);function u(){c.x=an(i)}if(r||!r&&!s)if((te(e)!=="body"||be(i))&&(l=on(e)),r){const g=Ot(e,!0,s,e);c.x=g.x+e.clientLeft,c.y=g.y+e.clientTop}else i&&u();s&&!r&&i&&u();const h=i&&!r&&!s?_i(i,l):ot(0),d=o.left+l.scrollLeft-c.x-h.x,y=o.top+l.scrollTop-c.y-h.y;return{x:d,y,width:o.width,height:o.height}}function Ln(t){return rt(t).position==="static"}function Ur(t,e){if(!lt(t)||rt(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return ut(t)===n&&(n=n.ownerDocument.body),n}function Si(t,e){const n=V(t);if(sn(t))return n;if(!lt(t)){let i=Ct(t);for(;i&&!Jt(i);){if(nt(i)&&!Ln(i))return i;i=Ct(i)}return n}let r=Ur(t,e);for(;r&&ll(r)&&Ln(r);)r=Ur(r,e);return r&&Jt(r)&&Ln(r)&&!ir(r)?n:r||dl(t)||n}const Ll=async function(t){const e=this.getOffsetParent||Si,n=this.getDimensions,r=await n(t.floating);return{reference:Sl(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function El(t){return rt(t).direction==="rtl"}const $l={convertOffsetParentRelativeRectToViewportRelativeRect:ml,getDocumentElement:ut,getClippingRect:_l,getOffsetParent:Si,getElementRects:Ll,getClientRects:bl,getDimensions:Cl,getScale:Gt,isElement:nt,isRTL:El};function Li(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Bl(t,e){let n=null,r;const i=ut(t);function s(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function o(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),s();const u=t.getBoundingClientRect(),{left:h,top:d,width:y,height:g}=u;if(l||e(),!y||!g)return;const m=Ne(d),w=Ne(i.clientWidth-(h+y)),_=Ne(i.clientHeight-(d+g)),M=Ne(h),L={rootMargin:-m+"px "+-w+"px "+-_+"px "+-M+"px",threshold:Wt(0,qn(1,c))||1};let $=!0;function P(N){const k=N[0].intersectionRatio;if(k!==c){if(!$)return o();k?o(!1,k):r=setTimeout(()=>{o(!1,1e-7)},1e3)}k===1&&!Li(u,t.getBoundingClientRect())&&o(),$=!1}try{n=new IntersectionObserver(P,{...L,root:i.ownerDocument})}catch{n=new IntersectionObserver(P,L)}n.observe(t)}return o(!0),s}function Rl(t,e,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,u=or(t),h=i||s?[...u?pe(u):[],...pe(e)]:[];h.forEach(M=>{i&&M.addEventListener("scroll",n,{passive:!0}),s&&M.addEventListener("resize",n)});const d=u&&l?Bl(u,n):null;let y=-1,g=null;o&&(g=new ResizeObserver(M=>{let[E]=M;E&&E.target===u&&g&&(g.unobserve(e),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var L;(L=g)==null||L.observe(e)})),n()}),u&&!c&&g.observe(u),g.observe(e));let m,w=c?Ot(t):null;c&&_();function _(){const M=Ot(t);w&&!Li(w,M)&&n(),w=M,m=requestAnimationFrame(_)}return n(),()=>{var M;h.forEach(E=>{i&&E.removeEventListener("scroll",n),s&&E.removeEventListener("resize",n)}),d==null||d(),(M=g)==null||M.disconnect(),g=null,c&&cancelAnimationFrame(m)}}const Pl=(t,e,n)=>{const r=new Map,i={platform:$l,...n},s={...i.platform,_c:r};return sl(t,e,{...i,platform:s})};function Dl(t){const e=t.renderRoot.querySelector(".inline-container-wrapper"),n=t.renderRoot.querySelector("[popover]");return Rl(e,n,()=>{n.matches(":popover-open")&&Pl(e,n,{strategy:"fixed"}).then(({x:i,y:s})=>{Object.assign(n.style,{left:`${i}px`,top:`${s}px`,width:`${e.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function Ei(t){t.renderRoot.querySelector("#eox-itemfilter-input-search").value="",mi({target:{value:""}},t)}function Tl(t,e){e.inlineMode&&t.stopPropagation()}function Ol(t){t.inlineMode&&(t.showDropdown=!0)}function kl(t,e){e.inlineMode&&(t.stopPropagation(),e.showDropdown=!0)}function Il(t,e){e.inlineMode&&t.key==="Escape"&&e.showDropdown&&(Ei(e),e.showDropdown=!1)}function Nl(t,e){e.inlineMode&&t.target instanceof HTMLElement&&t.target.tagName!=="DROPDOWN-FORM"&&t.target.tagName!=="EOX-ITEMFILTER"&&e.showDropdown&&(Ei(e),e.showDropdown=!1)}function jl(t,e){var n,r,i=0,s,o,l,c,u,h,d,y=t[0],g=t[1],m=e.length;for(n=0;n<m;n++){r=0;var w=e[n],_=w.length-1;if(h=w[0],h[0]!==w[_][0]&&h[1]!==w[_][1])throw new Error("First and last coordinates in a ring must be the same");for(o=h[0]-y,l=h[1]-g,r;r<_;r++){if(d=w[r+1],c=d[0]-y,u=d[1]-g,l===0&&u===0){if(c<=0&&o>=0||o<=0&&c>=0)return 0}else if(u>=0&&l<=0||u<=0&&l>=0){if(s=ia(o,c,l,u,0,0),s===0)return 0;(s>0&&u>0&&l<=0||s<0&&u<=0&&l>0)&&i++}h=d,l=u,o=c}}return i%2!==0}function at(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if(t.type==="Feature"&&t.geometry!==null&&t.geometry.type==="Point")return[...t.geometry.coordinates];if(t.type==="Point")return[...t.coordinates]}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return[...t];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function Tt(t){if(Array.isArray(t))return t;if(t.type==="Feature"){if(t.geometry!==null)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function Zt(t){return t.type==="Feature"?t.geometry:t}function Wr(t,e){return t.type==="FeatureCollection"?"FeatureCollection":t.type==="GeometryCollection"?"GeometryCollection":t.type==="Feature"&&t.geometry!==null?t.geometry.type:t.type}function tt(t,e,n={}){if(!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");const r=at(t),i=Zt(e),s=i.type,o=e.bbox;let l=i.coordinates;if(o&&Fl(r,o)===!1)return!1;s==="Polygon"&&(l=[l]);let c=!1;for(var u=0;u<l.length;++u){const h=jl(r,l[u]);if(h===0)return!n.ignoreBoundary;h&&(c=!0)}return c}function Fl(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}class $i{constructor(e=[],n=Hl){if(this.data=e,this.length=this.data.length,this.compare=n,this.length>0)for(let r=(this.length>>1)-1;r>=0;r--)this._down(r)}push(e){this.data.push(e),this.length++,this._up(this.length-1)}pop(){if(this.length===0)return;const e=this.data[0],n=this.data.pop();return this.length--,this.length>0&&(this.data[0]=n,this._down(0)),e}peek(){return this.data[0]}_up(e){const{data:n,compare:r}=this,i=n[e];for(;e>0;){const s=e-1>>1,o=n[s];if(r(i,o)>=0)break;n[e]=o,e=s}n[e]=i}_down(e){const{data:n,compare:r}=this,i=this.length>>1,s=n[e];for(;e<i;){let o=(e<<1)+1,l=n[o];const c=o+1;if(c<this.length&&r(n[c],l)<0&&(o=c,l=n[c]),r(l,s)>=0)break;n[e]=l,e=o}n[e]=s}}function Hl(t,e){return t<e?-1:t>e?1:0}function Bi(t,e){return t.p.x>e.p.x?1:t.p.x<e.p.x?-1:t.p.y!==e.p.y?t.p.y>e.p.y?1:-1:1}function ql(t,e){return t.rightSweepEvent.p.x>e.rightSweepEvent.p.x?1:t.rightSweepEvent.p.x<e.rightSweepEvent.p.x?-1:t.rightSweepEvent.p.y!==e.rightSweepEvent.p.y?t.rightSweepEvent.p.y<e.rightSweepEvent.p.y?1:-1:1}class Gr{constructor(e,n,r,i){this.p={x:e[0],y:e[1]},this.featureId=n,this.ringId=r,this.eventId=i,this.otherEvent=null,this.isLeftEndpoint=null}isSamePoint(e){return this.p.x===e.p.x&&this.p.y===e.p.y}}function Yl(t,e){if(t.type==="FeatureCollection"){const n=t.features;for(let r=0;r<n.length;r++)Vr(n[r],e)}else Vr(t,e)}let je=0,Fe=0,He=0;function Vr(t,e){const n=t.type==="Feature"?t.geometry:t;let r=n.coordinates;(n.type==="Polygon"||n.type==="MultiLineString")&&(r=[r]),n.type==="LineString"&&(r=[[r]]);for(let i=0;i<r.length;i++)for(let s=0;s<r[i].length;s++){let o=r[i][s][0],l=null;Fe=Fe+1;for(let c=0;c<r[i][s].length-1;c++){l=r[i][s][c+1];const u=new Gr(o,je,Fe,He),h=new Gr(l,je,Fe,He+1);u.otherEvent=h,h.otherEvent=u,Bi(u,h)>0?(h.isLeftEndpoint=!0,u.isLeftEndpoint=!1):(u.isLeftEndpoint=!0,h.isLeftEndpoint=!1),e.push(u),e.push(h),o=l,He=He+1}}je=je+1}class Xl{constructor(e){this.leftSweepEvent=e,this.rightSweepEvent=e.otherEvent}}function zl(t,e){if(t===null||e===null||t.leftSweepEvent.ringId===e.leftSweepEvent.ringId&&(t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.rightSweepEvent)||t.leftSweepEvent.isSamePoint(e.leftSweepEvent)||t.leftSweepEvent.isSamePoint(e.rightSweepEvent)))return!1;const n=t.leftSweepEvent.p.x,r=t.leftSweepEvent.p.y,i=t.rightSweepEvent.p.x,s=t.rightSweepEvent.p.y,o=e.leftSweepEvent.p.x,l=e.leftSweepEvent.p.y,c=e.rightSweepEvent.p.x,u=e.rightSweepEvent.p.y,h=(u-l)*(i-n)-(c-o)*(s-r),d=(c-o)*(r-l)-(u-l)*(n-o),y=(i-n)*(r-l)-(s-r)*(n-o);if(h===0)return!1;const g=d/h,m=y/h;if(g>=0&&g<=1&&m>=0&&m<=1){const w=n+g*(i-n),_=r+g*(s-r);return[w,_]}return!1}function Ul(t,e){e=e||!1;const n=[],r=new $i([],ql);for(;t.length;){const i=t.pop();if(i.isLeftEndpoint){const s=new Xl(i);for(let o=0;o<r.data.length;o++){const l=r.data[o];if(e&&l.leftSweepEvent.featureId===i.featureId)continue;const c=zl(s,l);c!==!1&&n.push(c)}r.push(s)}else i.isLeftEndpoint===!1&&r.pop()}return n}function Wl(t,e){const n=new $i([],Bi);return Yl(t,n),Ul(n,e)}var Gl=Wl;function ln(t,e,n={}){const{removeDuplicates:r=!0,ignoreSelfIntersections:i=!0}=n;let s=[];t.type==="FeatureCollection"?s=s.concat(t.features):t.type==="Feature"?s.push(t):(t.type==="LineString"||t.type==="Polygon"||t.type==="MultiLineString"||t.type==="MultiPolygon")&&s.push(Kt(t)),e.type==="FeatureCollection"?s=s.concat(e.features):e.type==="Feature"?s.push(e):(e.type==="LineString"||e.type==="Polygon"||e.type==="MultiLineString"||e.type==="MultiPolygon")&&s.push(Kt(e));const o=Gl(Q(s),i);let l=[];if(r){const c={};o.forEach(u=>{const h=u.join(",");c[h]||(c[h]=!0,l.push(u))})}else l=o;return Q(l.map(c=>ce(c)))}function ar(t,e,n){if(t!==null)for(var r,i,s,o,l,c,u,h=0,d=0,y,g=t.type,m=g==="FeatureCollection",w=g==="Feature",_=m?t.features.length:1,M=0;M<_;M++){u=m?t.features[M].geometry:w?t.geometry:t,y=u?u.type==="GeometryCollection":!1,l=y?u.geometries.length:1;for(var E=0;E<l;E++){var L=0,$=0;if(o=y?u.geometries[E]:u,o!==null){c=o.coordinates;var P=o.type;switch(h=0,P){case null:break;case"Point":if(e(c,d,M,L,$)===!1)return!1;d++,L++;break;case"LineString":case"MultiPoint":for(r=0;r<c.length;r++){if(e(c[r],d,M,L,$)===!1)return!1;d++,P==="MultiPoint"&&L++}P==="LineString"&&L++;break;case"Polygon":case"MultiLineString":for(r=0;r<c.length;r++){for(i=0;i<c[r].length-h;i++){if(e(c[r][i],d,M,L,$)===!1)return!1;d++}P==="MultiLineString"&&L++,P==="Polygon"&&$++}P==="Polygon"&&L++;break;case"MultiPolygon":for(r=0;r<c.length;r++){for($=0,i=0;i<c[r].length;i++){for(s=0;s<c[r][i].length-h;s++){if(e(c[r][i][s],d,M,L,$)===!1)return!1;d++}$++}L++}break;case"GeometryCollection":for(r=0;r<o.geometries.length;r++)if(ar(o.geometries[r],e)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function cn(t,e){if(t.type==="Feature")e(t,0);else if(t.type==="FeatureCollection")for(var n=0;n<t.features.length&&e(t.features[n],n)!==!1;n++);}function Vl(t,e,n){var r=n;return cn(t,function(i,s){s===0&&n===void 0?r=i:r=e(r,i,s)}),r}function Kl(t,e){var n,r,i,s,o,l,c,u,h,d,y=0,g=t.type==="FeatureCollection",m=t.type==="Feature",w=g?t.features.length:1;for(n=0;n<w;n++){for(l=g?t.features[n].geometry:m?t.geometry:t,u=g?t.features[n].properties:m?t.properties:{},h=g?t.features[n].bbox:m?t.bbox:void 0,d=g?t.features[n].id:m?t.id:void 0,c=l?l.type==="GeometryCollection":!1,o=c?l.geometries.length:1,i=0;i<o;i++){if(s=c?l.geometries[i]:l,s===null){if(e(null,y,u,h,d)===!1)return!1;continue}switch(s.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(s,y,u,h,d)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<s.geometries.length;r++)if(e(s.geometries[r],y,u,h,d)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}y++}}function kt(t,e){Kl(t,function(n,r,i,s,o){var l=n===null?null:n.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return e(Kt(n,i,{bbox:s,id:o}),r,0)===!1?!1:void 0}var c;switch(l){case"MultiPoint":c="Point";break;case"MultiLineString":c="LineString";break;case"MultiPolygon":c="Polygon";break}for(var u=0;u<n.coordinates.length;u++){var h=n.coordinates[u],d={type:c,coordinates:h};if(e(Kt(d,i),r,u)===!1)return!1}})}function Xn(t,e={}){const n=Zt(t);switch(!e.properties&&t.type==="Feature"&&(e.properties=t.properties),n.type){case"Polygon":return Jl(n,e);case"MultiPolygon":return Zl(n,e);default:throw new Error("invalid poly")}}function Jl(t,e={}){const r=Zt(t).coordinates,i=e.properties?e.properties:t.type==="Feature"?t.properties:{};return Ri(r,i)}function Zl(t,e={}){const r=Zt(t).coordinates,i=e.properties?e.properties:t.type==="Feature"?t.properties:{},s=[];return r.forEach(o=>{s.push(Ri(o,i))}),Q(s)}function Ri(t,e){return t.length>1?sa(t,e):de(t[0],e)}function Ql(t,e,{ignoreSelfIntersections:n=!0}={ignoreSelfIntersections:!0}){let r=!0;return kt(t,i=>{kt(e,s=>{if(r===!1)return!1;r=tc(i.geometry,s.geometry,n)})}),r}function tc(t,e,n){switch(t.type){case"Point":switch(e.type){case"Point":return!ic(t.coordinates,e.coordinates);case"LineString":return!Kr(e,t);case"Polygon":return!tt(t,e)}break;case"LineString":switch(e.type){case"Point":return!Kr(t,e);case"LineString":return!ec(t,e,n);case"Polygon":return!Jr(e,t,n)}break;case"Polygon":switch(e.type){case"Point":return!tt(e,t);case"LineString":return!Jr(t,e,n);case"Polygon":return!nc(e,t,n)}}return!1}function Kr(t,e){for(let n=0;n<t.coordinates.length-1;n++)if(rc(t.coordinates[n],t.coordinates[n+1],e.coordinates))return!0;return!1}function ec(t,e,n){return ln(t,e,{ignoreSelfIntersections:n}).features.length>0}function Jr(t,e,n){for(const i of e.coordinates)if(tt(i,t))return!0;return ln(e,Xn(t),{ignoreSelfIntersections:n}).features.length>0}function nc(t,e,n){for(const i of t.coordinates[0])if(tt(i,e))return!0;for(const i of e.coordinates[0])if(tt(i,t))return!0;return ln(Xn(t),Xn(e),{ignoreSelfIntersections:n}).features.length>0}function rc(t,e,n){const r=n[0]-t[0],i=n[1]-t[1],s=e[0]-t[0],o=e[1]-t[1];return r*o-i*s!==0?!1:Math.abs(s)>=Math.abs(o)?s>0?t[0]<=n[0]&&n[0]<=e[0]:e[0]<=n[0]&&n[0]<=t[0]:o>0?t[1]<=n[1]&&n[1]<=e[1]:e[1]<=n[1]&&n[1]<=t[1]}function ic(t,e){return t[0]===e[0]&&t[1]===e[1]}function sc(t,e,{ignoreSelfIntersections:n=!0}={}){let r=!1;return kt(t,i=>{kt(e,s=>{if(r===!0)return!0;r=!Ql(i.geometry,s.geometry,{ignoreSelfIntersections:n})})}),r}var oc=sc;function st(t,e={}){if(t.bbox!=null&&e.recompute!==!0)return t.bbox;const n=[1/0,1/0,-1/0,-1/0];return ar(t,r=>{n[0]>r[0]&&(n[0]=r[0]),n[1]>r[1]&&(n[1]=r[1]),n[2]<r[0]&&(n[2]=r[0]),n[3]<r[1]&&(n[3]=r[1])}),n}function Ge(t,e,n={}){const r=at(t),i=Tt(e);for(let s=0;s<i.length-1;s++){let o=!1;if(n.ignoreEndVertices&&(s===0&&(o="start"),s===i.length-2&&(o="end"),s===0&&s+1===i.length-1&&(o="both")),ac(i[s],i[s+1],r,o,typeof n.epsilon>"u"?null:n.epsilon))return!0}return!1}function ac(t,e,n,r,i){const s=n[0],o=n[1],l=t[0],c=t[1],u=e[0],h=e[1],d=n[0]-l,y=n[1]-c,g=u-l,m=h-c,w=d*m-y*g;if(i!==null){if(Math.abs(w)>i)return!1}else if(w!==0)return!1;if(Math.abs(g)===Math.abs(m)&&Math.abs(g)===0)return r?!1:n[0]===t[0]&&n[1]===t[1];if(r){if(r==="start")return Math.abs(g)>=Math.abs(m)?g>0?l<s&&s<=u:u<=s&&s<l:m>0?c<o&&o<=h:h<=o&&o<c;if(r==="end")return Math.abs(g)>=Math.abs(m)?g>0?l<=s&&s<u:u<s&&s<=l:m>0?c<=o&&o<h:h<o&&o<=c;if(r==="both")return Math.abs(g)>=Math.abs(m)?g>0?l<s&&s<u:u<s&&s<l:m>0?c<o&&o<h:h<o&&o<c}else return Math.abs(g)>=Math.abs(m)?g>0?l<=s&&s<=u:u<=s&&s<=l:m>0?c<=o&&o<=h:h<=o&&o<=c;return!1}function lc(t,e,n,r,i){Pi(t,e,n||0,r||t.length-1,i||cc)}function Pi(t,e,n,r,i){for(;r>n;){if(r-n>600){var s=r-n+1,o=e-n+1,l=Math.log(s),c=.5*Math.exp(2*l/3),u=.5*Math.sqrt(l*c*(s-c)/s)*(o-s/2<0?-1:1),h=Math.max(n,Math.floor(e-o*c/s+u)),d=Math.min(r,Math.floor(e+(s-o)*c/s+u));Pi(t,e,h,d,i)}var y=t[e],g=n,m=r;for(ae(t,n,e),i(t[r],y)>0&&ae(t,n,r);g<m;){for(ae(t,g,m),g++,m--;i(t[g],y)<0;)g++;for(;i(t[m],y)>0;)m--}i(t[n],y)===0?ae(t,n,m):(m++,ae(t,m,r)),m<=e&&(n=m+1),e<=m&&(r=m-1)}}function ae(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function cc(t,e){return t<e?-1:t>e?1:0}let uc=class{constructor(e=9){this._maxEntries=Math.max(4,e),this._minEntries=Math.max(2,Math.ceil(this._maxEntries*.4)),this.clear()}all(){return this._all(this.data,[])}search(e){let n=this.data;const r=[];if(!Ye(e,n))return r;const i=this.toBBox,s=[];for(;n;){for(let o=0;o<n.children.length;o++){const l=n.children[o],c=n.leaf?i(l):l;Ye(e,c)&&(n.leaf?r.push(l):$n(e,c)?this._all(l,r):s.push(l))}n=s.pop()}return r}collides(e){let n=this.data;if(!Ye(e,n))return!1;const r=[];for(;n;){for(let i=0;i<n.children.length;i++){const s=n.children[i],o=n.leaf?this.toBBox(s):s;if(Ye(e,o)){if(n.leaf||$n(e,o))return!0;r.push(s)}}n=r.pop()}return!1}load(e){if(!(e&&e.length))return this;if(e.length<this._minEntries){for(let r=0;r<e.length;r++)this.insert(e[r]);return this}let n=this._build(e.slice(),0,e.length-1,0);if(!this.data.children.length)this.data=n;else if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){const r=this.data;this.data=n,n=r}this._insert(n,this.data.height-n.height-1,!0)}return this}insert(e){return e&&this._insert(e,this.data.height-1),this}clear(){return this.data=zt([]),this}remove(e,n){if(!e)return this;let r=this.data;const i=this.toBBox(e),s=[],o=[];let l,c,u;for(;r||s.length;){if(r||(r=s.pop(),c=s[s.length-1],l=o.pop(),u=!0),r.leaf){const h=fc(e,r.children,n);if(h!==-1)return r.children.splice(h,1),s.push(r),this._condense(s),this}!u&&!r.leaf&&$n(r,i)?(s.push(r),o.push(l),l=0,c=r,r=r.children[0]):c?(l++,r=c.children[l],u=!1):r=null}return this}toBBox(e){return e}compareMinX(e,n){return e.minX-n.minX}compareMinY(e,n){return e.minY-n.minY}toJSON(){return this.data}fromJSON(e){return this.data=e,this}_all(e,n){const r=[];for(;e;)e.leaf?n.push(...e.children):r.push(...e.children),e=r.pop();return n}_build(e,n,r,i){const s=r-n+1;let o=this._maxEntries,l;if(s<=o)return l=zt(e.slice(n,r+1)),Xt(l,this.toBBox),l;i||(i=Math.ceil(Math.log(s)/Math.log(o)),o=Math.ceil(s/Math.pow(o,i-1))),l=zt([]),l.leaf=!1,l.height=i;const c=Math.ceil(s/o),u=c*Math.ceil(Math.sqrt(o));Zr(e,n,r,u,this.compareMinX);for(let h=n;h<=r;h+=u){const d=Math.min(h+u-1,r);Zr(e,h,d,c,this.compareMinY);for(let y=h;y<=d;y+=c){const g=Math.min(y+c-1,d);l.children.push(this._build(e,y,g,i-1))}}return Xt(l,this.toBBox),l}_chooseSubtree(e,n,r,i){for(;i.push(n),!(n.leaf||i.length-1===r);){let s=1/0,o=1/0,l;for(let c=0;c<n.children.length;c++){const u=n.children[c],h=En(u),d=pc(e,u)-h;d<o?(o=d,s=h<s?h:s,l=u):d===o&&h<s&&(s=h,l=u)}n=l||n.children[0]}return n}_insert(e,n,r){const i=r?e:this.toBBox(e),s=[],o=this._chooseSubtree(i,this.data,n,s);for(o.children.push(e),fe(o,i);n>=0&&s[n].children.length>this._maxEntries;)this._split(s,n),n--;this._adjustParentBBoxes(i,s,n)}_split(e,n){const r=e[n],i=r.children.length,s=this._minEntries;this._chooseSplitAxis(r,s,i);const o=this._chooseSplitIndex(r,s,i),l=zt(r.children.splice(o,r.children.length-o));l.height=r.height,l.leaf=r.leaf,Xt(r,this.toBBox),Xt(l,this.toBBox),n?e[n-1].children.push(l):this._splitRoot(r,l)}_splitRoot(e,n){this.data=zt([e,n]),this.data.height=e.height+1,this.data.leaf=!1,Xt(this.data,this.toBBox)}_chooseSplitIndex(e,n,r){let i,s=1/0,o=1/0;for(let l=n;l<=r-n;l++){const c=ue(e,0,l,this.toBBox),u=ue(e,l,r,this.toBBox),h=gc(c,u),d=En(c)+En(u);h<s?(s=h,i=l,o=d<o?d:o):h===s&&d<o&&(o=d,i=l)}return i||r-n}_chooseSplitAxis(e,n,r){const i=e.leaf?this.compareMinX:hc,s=e.leaf?this.compareMinY:dc,o=this._allDistMargin(e,n,r,i),l=this._allDistMargin(e,n,r,s);o<l&&e.children.sort(i)}_allDistMargin(e,n,r,i){e.children.sort(i);const s=this.toBBox,o=ue(e,0,n,s),l=ue(e,r-n,r,s);let c=qe(o)+qe(l);for(let u=n;u<r-n;u++){const h=e.children[u];fe(o,e.leaf?s(h):h),c+=qe(o)}for(let u=r-n-1;u>=n;u--){const h=e.children[u];fe(l,e.leaf?s(h):h),c+=qe(l)}return c}_adjustParentBBoxes(e,n,r){for(let i=r;i>=0;i--)fe(n[i],e)}_condense(e){for(let n=e.length-1,r;n>=0;n--)e[n].children.length===0?n>0?(r=e[n-1].children,r.splice(r.indexOf(e[n]),1)):this.clear():Xt(e[n],this.toBBox)}};function fc(t,e,n){if(!n)return e.indexOf(t);for(let r=0;r<e.length;r++)if(n(t,e[r]))return r;return-1}function Xt(t,e){ue(t,0,t.children.length,e,t)}function ue(t,e,n,r,i){i||(i=zt(null)),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(let s=e;s<n;s++){const o=t.children[s];fe(i,t.leaf?r(o):o)}return i}function fe(t,e){return t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY),t}function hc(t,e){return t.minX-e.minX}function dc(t,e){return t.minY-e.minY}function En(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function qe(t){return t.maxX-t.minX+(t.maxY-t.minY)}function pc(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function gc(t,e){const n=Math.max(t.minX,e.minX),r=Math.max(t.minY,e.minY),i=Math.min(t.maxX,e.maxX),s=Math.min(t.maxY,e.maxY);return Math.max(0,i-n)*Math.max(0,s-r)}function $n(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function Ye(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function zt(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function Zr(t,e,n,r,i){const s=[e,n];for(;s.length;){if(n=s.pop(),e=s.pop(),n-e<=r)continue;const o=e+Math.ceil((n-e)/r/2)*r;lc(t,o,e,n,i),s.push(e,o,o,n)}}function Bn(t){var e;if(t.bbox)e=t.bbox;else if(Array.isArray(t)&&t.length===4)e=t;else if(Array.isArray(t)&&t.length===6)e=[t[0],t[1],t[3],t[4]];else if(t.type==="Feature")e=st(t);else if(t.type==="FeatureCollection")e=st(t);else throw new Error("invalid geojson");return{minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}}var yc=class{constructor(t=9){this.tree=new uc(t),this.tree.toBBox=Bn}insert(t){if(t.type!=="Feature")throw new Error("invalid feature");return t.bbox=t.bbox?t.bbox:st(t),this.tree.insert(t),this}load(t){var e=[];return Array.isArray(t)?t.forEach(function(n){if(n.type!=="Feature")throw new Error("invalid features");n.bbox=n.bbox?n.bbox:st(n),e.push(n)}):cn(t,function(n){if(n.type!=="Feature")throw new Error("invalid features");n.bbox=n.bbox?n.bbox:st(n),e.push(n)}),this.tree.load(e),this}remove(t,e){if(t.type!=="Feature")throw new Error("invalid feature");return t.bbox=t.bbox?t.bbox:st(t),this.tree.remove(t,e),this}clear(){return this.tree.clear(),this}search(t){var e=this.tree.search(Bn(t));return Q(e)}collides(t){return this.tree.collides(Bn(t))}all(){const t=this.tree.all();return Q(t)}toJSON(){return this.tree.toJSON()}fromJSON(t){return this.tree.fromJSON(t),this}};function Di(t){return new yc(t)}function mc(t,e){if(e=e??{},!oa(e))throw new Error("options is invalid");var n=e.precision,r=e.coordinates,i=e.mutate;if(n=n==null||isNaN(n)?6:n,r=r==null||isNaN(r)?3:r,!t)throw new Error("<geojson> is required");if(typeof n!="number")throw new Error("<precision> must be a number");if(typeof r!="number")throw new Error("<coordinates> must be a number");(i===!1||i===void 0)&&(t=JSON.parse(JSON.stringify(t)));var s=Math.pow(10,n);return ar(t,function(o){bc(o,s,r)}),t}function bc(t,e,n){t.length>n&&t.splice(n,t.length);for(var r=0;r<t.length;r++)t[r]=Math.round(t[r]*e)/e;return t}function vc(t){if(!t)throw new Error("geojson is required");const e=[];return kt(t,n=>{wc(n,e)}),Q(e)}function wc(t,e){let n=[];const r=t.geometry;if(r!==null){switch(r.type){case"Polygon":n=Tt(r);break;case"LineString":n=[Tt(r)]}n.forEach(i=>{xc(i,t.properties).forEach(o=>{o.id=e.length,e.push(o)})})}}function xc(t,e){const n=[];return t.reduce((r,i)=>{const s=de([r,i],e);return s.bbox=Mc(r,i),n.push(s),i}),n}function Mc(t,e){const n=t[0],r=t[1],i=e[0],s=e[1],o=n<i?n:i,l=r<s?r:s,c=n>i?n:i,u=r>s?r:s;return[o,l,c,u]}function Rn(t,e,n={}){var r=at(t),i=at(e),s=Ut(i[1]-r[1]),o=Ut(i[0]-r[0]),l=Ut(r[1]),c=Ut(i[1]),u=Math.pow(Math.sin(s/2),2)+Math.pow(Math.sin(o/2),2)*Math.cos(l)*Math.cos(c);return aa(2*Math.atan2(Math.sqrt(u),Math.sqrt(1-u)),n.units)}var Ac=Object.defineProperty,_c=Object.defineProperties,Cc=Object.getOwnPropertyDescriptors,Qr=Object.getOwnPropertySymbols,Sc=Object.prototype.hasOwnProperty,Lc=Object.prototype.propertyIsEnumerable,ti=(t,e,n)=>e in t?Ac(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Ec=(t,e)=>{for(var n in e||(e={}))Sc.call(e,n)&&ti(t,n,e[n]);if(Qr)for(var n of Qr(e))Lc.call(e,n)&&ti(t,n,e[n]);return t},$c=(t,e)=>_c(t,Cc(e));function Bc(t,e,n={}){if(!t||!e)throw new Error("lines and inputPoint are required arguments");const r=at(e);let i=ce([1/0,1/0],{lineStringIndex:-1,segmentIndex:-1,totalDistance:-1,lineDistance:-1,segmentDistance:-1,pointDistance:1/0,multiFeatureIndex:-1,index:-1,location:-1,dist:1/0}),s=0,o=0,l=-1;return kt(t,function(c,u,h){l!==h&&(l=h,o=0);const d=Tt(c);for(let y=0;y<d.length-1;y++){const g=ce(d[y]),m=at(g),w=ce(d[y+1]),_=at(w),M=Rn(g,w,n);let E,L;_[0]===r[0]&&_[1]===r[1]?[E,L]=[_,!0]:m[0]===r[0]&&m[1]===r[1]?[E,L]=[m,!1]:[E,L]=Dc(m,_,r);const $=Rn(e,E,n);if($<i.properties.pointDistance){const P=Rn(g,E,n);i=ce(E,{lineStringIndex:h,segmentIndex:L?y+1:y,totalDistance:s+P,lineDistance:o+P,segmentDistance:P,pointDistance:$,multiFeatureIndex:-1,index:-1,location:-1,dist:1/0}),i.properties=$c(Ec({},i.properties),{multiFeatureIndex:i.properties.lineStringIndex,index:i.properties.segmentIndex,location:i.properties.totalDistance,dist:i.properties.pointDistance})}s+=M,o+=M}}),i}function Pt(t,e){const[n,r,i]=t,[s,o,l]=e;return n*s+r*o+i*l}function le(t,e){const[n,r,i]=t,[s,o,l]=e;return[r*l-i*o,i*s-n*l,n*o-r*s]}function Rc(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2))}function ei(t){const e=Rc(t);return[t[0]/e,t[1]/e,t[2]/e]}function Pn(t){const e=Ut(t[1]),n=Ut(t[0]);return[Math.cos(e)*Math.cos(n),Math.cos(e)*Math.sin(n),Math.sin(e)]}function Pc(t){const[e,n,r]=t,i=Math.min(Math.max(r,-1),1),s=kr(Math.asin(i));return[kr(Math.atan2(n,e)),s]}function Dc(t,e,n){const r=Pn(t),i=Pn(e),s=Pn(n),o=le(r,i);if(o[0]===0&&o[1]===0&&o[2]===0)return Pt(r,i)>0?[[...e],!0]:[[...n],!1];const l=le(o,s);if(l[0]===0&&l[1]===0&&l[2]===0)return[[...e],!0];const c=le(l,o),u=ei(c),h=[-u[0],-u[1],-u[2]],d=Pt(s,u)>Pt(s,h)?u:h,y=ei(o),g=Pt(le(r,d),y),m=Pt(le(d,i),y);return g>=0&&m>=0?[Pc(d),!1]:Pt(r,s)>Pt(i,s)?[[...t],!1]:[[...e],!0]}function Tc(t,e){if(!t)throw new Error("line is required");if(!e)throw new Error("splitter is required");const n=Wr(t),r=Wr(e);if(n!=="LineString")throw new Error("line must be LineString");if(r==="FeatureCollection")throw new Error("splitter cannot be a FeatureCollection");if(r==="GeometryCollection")throw new Error("splitter cannot be a GeometryCollection");var i=mc(e,{precision:7});switch(t.type!=="Feature"&&(t=Kt(t)),r){case"Point":return zn(t,i);case"MultiPoint":return ni(t,i);case"LineString":case"MultiLineString":case"Polygon":case"MultiPolygon":return ni(t,ln(t,i,{ignoreSelfIntersections:!0}))}}function ni(t,e){var n=[],r=Di();return kt(e,function(i){if(n.forEach(function(l,c){l.id=c}),!n.length)n=zn(t,i).features,r.load(Q(n));else{var s=r.search(i);if(s.features.length){var o=Ti(i,s);n=n.filter(function(l){return l.id!==o.id}),r.remove(o),cn(zn(o,i),function(l){n.push(l),r.insert(l)})}}}),Q(n)}function zn(t,e){var n=[],r=Tt(t)[0],i=Tt(t)[t.geometry.coordinates.length-1];if(Dn(r,at(e))||Dn(i,at(e)))return Q([t]);var s=Di(),o=vc(t);s.load(o);var l=s.search(e);if(!l.features.length)return Q([t]);var c=Ti(e,l),u=[r],h=Vl(o,function(d,y,g){var m=Tt(y)[1],w=at(e);return g===c.id?(d.push(w),n.push(de(d)),Dn(w,m)?[w]:[w,m]):(d.push(m),d)},u);return h.length>1&&n.push(de(h)),Q(n)}function Ti(t,e){if(!e.features.length)throw new Error("lines must contain features");if(e.features.length===1)return e.features[0];var n,r=1/0;return cn(e,function(i){var s=Bc(i,t),o=s.properties.dist;o<r&&(n=i,r=o)}),n}function Dn(t,e){return t[0]===e[0]&&t[1]===e[1]}function Oc(t,e){var n=Zt(t),r=Zt(e),i=n.type,s=r.type;switch(i){case"Point":switch(s){case"MultiPoint":return kc(n,r);case"LineString":return Ge(n,r,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return tt(n,r,{ignoreBoundary:!0});default:throw new Error("feature2 "+s+" geometry not supported")}case"MultiPoint":switch(s){case"MultiPoint":return Ic(n,r);case"LineString":return Nc(n,r);case"Polygon":case"MultiPolygon":return jc(n,r);default:throw new Error("feature2 "+s+" geometry not supported")}case"LineString":switch(s){case"LineString":return Fc(n,r);case"Polygon":case"MultiPolygon":return qc(n,r);default:throw new Error("feature2 "+s+" geometry not supported")}case"Polygon":switch(s){case"Polygon":case"MultiPolygon":return Yc(n,r);default:throw new Error("feature2 "+s+" geometry not supported")}default:throw new Error("feature1 "+i+" geometry not supported")}}function kc(t,e){var n,r=!1;for(n=0;n<e.coordinates.length;n++)if(ki(e.coordinates[n],t.coordinates)){r=!0;break}return r}function Ic(t,e){for(var n=0;n<t.coordinates.length;n++){for(var r=!1,i=0;i<e.coordinates.length;i++)ki(t.coordinates[n],e.coordinates[i])&&(r=!0);if(!r)return!1}return!0}function Nc(t,e){for(var n=!1,r=0;r<t.coordinates.length;r++){if(!Ge(t.coordinates[r],e))return!1;n||(n=Ge(t.coordinates[r],e,{ignoreEndVertices:!0}))}return n}function jc(t,e){for(var n=!0,r=!1,i=0;i<t.coordinates.length;i++){if(r=tt(t.coordinates[i],e),!r){n=!1;break}r=tt(t.coordinates[i],e,{ignoreBoundary:!0})}return n&&r}function Fc(t,e){for(var n=0;n<t.coordinates.length;n++)if(!Ge(t.coordinates[n],e))return!1;return!0}function Hc(t,e){const n=t.coordinates,r=[];for(let i=0;i<n.length-1;i++){const s=de([n[i],n[i+1]]),o=Tc(s,Kt(e));o.features.length===0?r.push(s):r.push(...o.features)}return Q(r)}function qc(t,e){const n=st(e),r=st(t);if(!Oi(n,r))return!1;for(const o of t.coordinates)if(!tt(o,e))return!1;let i=!1;const s=Hc(t,e);for(const o of s.features){const l=Xc(o.geometry.coordinates[0],o.geometry.coordinates[1]);if(!tt(l,e))return!1;!i&&tt(l,e,{ignoreBoundary:!0})&&(i=!0)}return i}function Yc(t,e){var n=st(t),r=st(e);if(!Oi(r,n))return!1;for(var i=0;i<t.coordinates[0].length;i++)if(!tt(t.coordinates[0][i],e))return!1;return!0}function Oi(t,e){return!(t[0]>e[0]||t[2]<e[2]||t[1]>e[1]||t[3]<e[3])}function ki(t,e){return t[0]===e[0]&&t[1]===e[1]}function Xc(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}var zc=Oc;const Uc=(t,e)=>e?oc(t,e):!0,Wc=(t,e)=>e?zc(t,e):!0;function Gc(t,e="highlight",n="title"){const r=(i,s=[])=>{let o="",l=0,c=0;return s.forEach((u,h)=>{const d=u[1]+1;h&&c>u[0]||(c=u[1],o+=[i.substring(l,u[0]),`<mark class="${e}">`,i.substring(u[0],d),"</mark>"].join(""),l=d)}),o+=i.substring(l),o};return t.filter(({matches:i})=>i&&i.length).map(({item:i,matches:s})=>{const o={...i};return s.forEach(l=>{if(l.key!==n)return;const c=r(tu(l.value),eu(l.indices));o.highlightedText=c}),o})}let Ii;const Vc=(t,e)=>{Ii=new Et(t,{threshold:.4,distance:50,ignoreLocation:!0,includeMatches:!0,useExtendedSearch:!0,...e})},Kc=async(t,e,n)=>{const r=Object.entries(e).filter(([,l])=>l.type==="text"||l.type==="select"||l.type==="multiselect").reduce((l,[c,u])=>{const h="$or",d=[],y=(g,m)=>{const w={};u.type==="text"?w[g]=`${m}`:w[c]=`="${g}"`,d.push(w)};return Object.entries(u.state).filter(([,g])=>g).forEach(([g,m])=>y(g,m)),d.length>0&&l.push({[h]:d}),l},[]);let i;if(!(r.length>0)&&n.matchAllWhenEmpty!==!1)i=t;else{const l={$and:[...r]},c=Ii.search(l);i=n.enableHighlighting?Gc(c,"highlight",n.titleProperty):c.map(u=>u.item)}const s=Object.entries(e).filter(([,l])=>l.type==="range").reduce((l,[c,u])=>(l[c]={min:u.state.min,max:u.state.max,format:u.format},l),{});if(Object.keys(s).length>0){const l=[];for(let c=0;c<i.length;c++){const u={};for(const[h,d]of Object.entries(s)){const y=m=>d.format==="date"?he(m).unix():m,g=W(h,i[c]);g?Array.isArray(g)?u[h]=s[h].min<=y(g[1])&&y(g[0])<=s[h].max:y(g)>=s[h].min&&y(g)<=s[h].max?u[h]=!0:u[h]=!1:u[h]=!0}Object.values(u).every(h=>!!h)&&l.push(i[c])}i=[...l]}const o=Object.entries(e).filter(([,l])=>l.type==="spatial").reduce((l,[c,u])=>(l[c]={geometry:u.state.geometry,mode:u.state.mode},l),{});if(Object.values(o).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let c=0;c<i.length;c++){const u={};for(const h of Object.keys(o)){const d=W(h,i[c]),y=o[h].mode||"within";d&&(y==="within"?Wc(d,o[h].geometry):Uc(d,o[h].geometry))?u[h]=!0:u[h]=!1}Object.values(u).every(h=>!!h)&&l.push(i[c])}i=[...l]}return i};function Jc(t,e){return[{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}},{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...t&&{format:"GeoJSON"},...t&&{url:e}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]}]}function un(t){if(!t.dirty)return null;switch(t.type){case"multiselect":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"range":t.state.min=t.min,t.state.max=t.max;break;case"select":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"spatial":t.state.geometry=void 0;break;case"text":t.keys.forEach(n=>{t.state[n]=void 0});break}return delete t.stringifiedState,delete t.dirty,t}function ri(t,e){return t*2+e}function Zc(t){return Object.keys(t).map(e=>({title:A`${t[e].title||t[e].key}:
      ${t[e].stringifiedState}`,key:e})).filter(e=>t[e.key].dirty)}function Un(t){return Object.values(t).map(e=>e.dirty).filter(e=>e).length>0}async function Qc(t,e,n){const r=n.externalFilter(t,e),i=typeof r=="string"||r instanceof String?r:r.url,s=typeof r=="object"&&"fetchFn"in r?await r.fetchFn(i):await fetch(i).then(async o=>await o.json());return r.key?W(r.key,s):s}function Ni(t,e,n){let r;if(t.detail?r=t.detail.target:r=t.target,r!=null&&r.classList.contains("details-filter")){if(!r.open||e!=null&&e.expandMultipleFilters)return;n.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(i=>{const s=i.shadowRoot.querySelector(".details-filter");s&&s!==r&&s.removeAttribute("open")})}else{if(!(r!=null&&r.open)||e!=null&&e.expandMultipleResults)return;n.querySelectorAll("details").forEach(i=>{i!==r&&i.removeAttribute("open")})}}function W(t,e){return typeof t=="function"?t(e):t!=null&&t.includes(".")?t.split(".").reduce((n,r)=>n&&n[r],e):e[t]}function tu(t){return t.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}function eu(t,{mergeAdjacent:e=!1}={}){if(!Array.isArray(t))return[];const n=t.map(([i,s])=>i<=s?[i,s]:[s,i]).sort((i,s)=>i[0]-s[0]||i[1]-s[1]),r=[];for(const[i,s]of n){if(r.length===0){r.push([i,s]);continue}const o=r[r.length-1];(e?i<=o[1]+1:i<=o[1])?s>o[1]&&(o[1]=s):r.push([i,s])}return r}var R,ji,Wn,Gn,Fi,Vn,Kn,Hi,Jn,qi,Yi;class nu extends ct{constructor(){super();q(this,R);this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=B(this,R,Fi).bind(this),this._handleKeyDown=B(this,R,Vn).bind(this)}static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}set showDropdown(n){this.renderRoot.querySelector("[popover]").togglePopover(n)}get showDropdown(){var n;return(n=this.renderRoot.querySelector("[popover]"))==null?void 0:n.matches(":popover-open")}connectedCallback(){super.connectedCallback(),this.inlineMode&&B(this,R,Wn).call(this)}disconnectedCallback(){this.inlineMode&&B(this,R,Gn).call(this),super.disconnectedCallback()}_overlayCleanup(){}updateInline(){this.inlineMode&&this.requestUpdate()}updated(n){n.has("inlineMode")&&(this.inlineMode?B(this,R,Wn).call(this):B(this,R,Gn).call(this))}render(){return A`
      <style>
        ${!this.unstyled&&nr}
      </style>
      ${this.inlineMode?A`
            <div
              class="inline-container-wrapper"
              @click="${B(this,R,Kn)}"
            >
              <div class="inline-container square border" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips
                      .items=${Zc(this.filters)}
                      .controller=${{remove:n=>B(this,R,qi).call(this,n)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${I(Un(this.filters),()=>A`
                      <button
                        class="chip-close circle transparent small no-margin"
                        @click=${()=>this.dispatchEvent(new CustomEvent("reset"))}
                      >
                        ${this.unstyled?"x":A`
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
                  class="input-container field no-margin ${Un(this.filters)?"dirty-filter-input":""}"
                >
                  <input
                    autocomplete="off"
                    id="eox-itemfilter-input-search"
                    type="text"
                    @click="${B(this,R,Kn)}"
                    @focus="${B(this,R,Hi)}"
                    @input="${B(this,R,Yi)}"
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
                  @keydown="${B(this,R,Vn)}"
                  @click="${B(this,R,Jn)}"
                  @focus="${B(this,R,Jn)}"
                >
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `:A`<slot name="section"></slot>`}
    `}}R=new WeakSet,ji=function(){setTimeout(()=>this._overlayCleanup=Dl(this))},Wn=function(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),B(this,R,ji).call(this)},Gn=function(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()},Fi=function(n){Nl(n,this)},Vn=function(n){Il(n,this)},Kn=function(n){kl(n,this)},Hi=function(){Ol(this)},Jn=function(n){Tl(n,this)},qi=function(n){Va(n,this)},Yi=function(n){mi(n,this)};customElements.define("eox-itemfilter-container",nu);function ru(t){const e=t.renderRoot.querySelector("input[type='text']");e.value="",un(t.filterObject),t.requestUpdate()}function iu(t){const e=t.renderRoot.querySelector("input[type='text']");t.isValid=e.checkValidity(),t.filterObject.keys.forEach(n=>{t.filterObject.state[n]=e.value}),t.filterObject.dirty=!0,t.filterObject.stringifiedState=e.value,t.dispatchEvent(new CustomEvent("filter")),e.value===""&&t.reset()}const Zn="ddd, D MMM YYYY HH:mm:ss";function su(t){if(t.filterObject=un(t.filterObject),t.filterObject){const e=t.querySelector("tc-range-slider"),n=t.filterObject.min,r=t.filterObject.max;e.value1!==n&&(e.value1=n),e.value2!==r&&(e.value2=r)}t.requestUpdate()}function ou(t,e){const[n,r]=t.detail.values;(n!==e.filterObject.state.min||r!==e.filterObject.state.max)&&([e.filterObject.state.min,e.filterObject.state.max]=[n,r],e.filterObject.dirty=!0),e.filterObject.dirty&&(e.filterObject.stringifiedState=e.filterObject.format==="date"?`${he.unix(n).format(Zn)} - ${he.unix(r).format(Zn)}`:`${n} - ${r}`),e.dispatchEvent(new CustomEvent("filter")),n===e.filterObject.min&&r===e.filterObject.max?e.reset():e.requestUpdate()}function au(t,e,n){const r=n.filterObject.format==="date",i=n.filterObject.state[t],s=r?he.unix(i).format(Zn):i;return A`<div class="range-${e}">${s}</div>`}function lu(t){cu(-1,t),un(t.filterObject),t.requestUpdate()}function cu(t,e){e.selectedItems=[],lr(e),zi(e)}function Xi(t,e){const n=e.selectedItems.indexOf(t);n>=0?e.selectedItems=e.selectedItems.filter((r,i)=>i!==n):e.type==="multiselect"?e.selectedItems=[...e.selectedItems,t]:(e.selectedItems=[t],e.showSuggestions=!1),lr(e),zi(e)}function uu(t,e){t.target instanceof HTMLInputElement&&(e.query=t.target.value,e.showSuggestions=!0)}function fu(t,e){switch(t.key){case"ArrowDown":e.highlightedIndex=Math.min(e.highlightedIndex+1,e.filteredSuggestions.length-1);break;case"ArrowUp":e.highlightedIndex=Math.max(e.highlightedIndex-1,0);break;case"Enter":e.highlightedIndex>=0&&Xi(e.filteredSuggestions[e.highlightedIndex],e);break;case"Escape":e.showSuggestions=!1;break}}function hu(t,e){(t.has("suggestions")||t.has("query"))&&lr(e)}function du(t,e){var r;const n=((r=t.filterObject)==null?void 0:r.sort)||((i,s)=>i.toString().localeCompare(s.toString(),void 0,{numeric:!0}));return e.sort(n).map(i=>i)}function lr(t){var r,i,s;const e=(((r=t.filterObject)==null?void 0:r.filterKeys)||t.suggestions).map(o=>`${o}`);let n=e;t.query&&(n=new Et(e,{threshold:.4}).search(t.query).map(l=>l.item)),t.filteredSuggestions=(i=t.filterObject)!=null&&i.filterKeys?n:du(t,n),(s=t.filterObject)!=null&&s.filterKeys&&(t.filterObject.state=e.reduce((o,l)=>(l in o||(o[l]=void 0),o),t.filterObject.state)),t.highlightedIndex=-1}function zi(t){Object.keys(t.filterObject.state).forEach(e=>{t.filterObject.state[e]=t.selectedItems.includes(e)}),t.filterObject.stringifiedState=Object.keys(t.filterObject.state).filter(e=>t.filterObject.state[e]).join(", ")||"",t.filterObject.dirty=t.filterObject.stringifiedState.length>0,t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}function pu(t){un(t.filterObject),t.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),t.requestUpdate()}function gu(t){t.renderRoot.querySelector("#eox-map").innerHTML="",Ui(t)}function yu(t,e){e.filterObject.state.mode=t;const n=new CustomEvent("filter",{detail:{[e.filterObject.key]:{}}});e.dispatchEvent(n)}function Ui(t){const e=t.renderRoot.querySelector("#eox-map");e.innerHTML===""&&(e.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const n=t.geometry&&mu(t.geometry),r=Jc(t.geometry,n);t.eoxMap=t.renderRoot.querySelector("eox-map"),setTimeout(()=>{t.eoxMap.layers=r;const i=s=>{const o=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:s.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});t.dispatchEvent(o)};t.eoxMap.interactions.drawInteraction.on("drawend",s=>{i(s.feature),t.eoxMap.removeInteraction("drawInteraction")}),t.eoxMap.interactions.drawInteraction_modify.on("modifyend",s=>{i(s.features.getArray()[0])})},1e3)}function mu(t){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:t}]}))}`}var ye,Ze;class bu extends ct{constructor(){super();q(this,ye,()=>{iu(this)});q(this,Ze,n=>{n.key==="Enter"&&n.target.value&&this.results&&this.results.length===1&&(this.dispatchEvent(new CustomEvent("result",{detail:this.results[0]})),n.target.value="",H(this,ye).call(this))});oe(this,"debouncedInputHandler",nn(H(this,ye),500,{leading:!0}));this.filterObject={},this.results=null,this.unstyled=!1,this.tabIndex=0,this.isValid=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},results:{state:!0,type:Array},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}reset(){ru(this)}createRenderRoot(){return this}render(){return I(this.filterObject,()=>{var n;return A`
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
              pattern="${((n=this.filterObject.validation)==null?void 0:n.pattern)||".*"}"
              @input="${this.debouncedInputHandler}"
              @click=${r=>r.stopPropagation()}
              @keydown=${H(this,Ze)}
            />
          </div>
        </div>
        <small class="error-validation" style="margin-left: var(--list-padding)"
          >${this.filterObject.validation&&this.isValid===!1?this.filterObject.validation.message:""}</small
        >
      `})}}ye=new WeakMap,Ze=new WeakMap;customElements.define("eox-itemfilter-text",bu);function vu(t,e,n){if(!e||typeof e=="string"&&e.trim()==="")return[];const r=n.config.aggregateResults;return e==="No category"?t.filter(i=>{const s=i[r];return Array.isArray(s)?s.filter(Boolean).length===0:!s}):t.filter(i=>{const s=i[r];if(Array.isArray(s)){if(s.filter(Boolean).length===0)return!1}else if(!s)return!1;let o;return n.filters[r]&&(o=Object.keys(n.filters[r]).filter(c=>n.filters[r].state[c])),(o!=null&&o.length?o.includes(e):!0)&&Array.isArray(s)?s.includes(e):s===e})}function wu(t,e){return A`
    <details
      class="details-results"
      @toggle=${e.handleAccordion}
      ?open=${e.config.expandResults||_t}
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
        ${Wi(e,t)}
      </div>
    </details>
  `}function Wi(t,e){const n=t.results,r=e?t.aggregateResults(n,e):n,i=t.config,s=o=>{var l;return((l=t.selectedResult)==null?void 0:l[i.idProperty])===o[i.idProperty]?"highlighted":_t};return Or`
    ${t.resultType==="cards"?Yt("<eox-layout fill-grid>"):Yt('<ul id="results" class="list no-space" part="results">')}
      ${ra(r,o=>o.id,o=>Or`
        ${t.resultType==="cards"?Yt("<eox-layout-item"):Yt("<li")}
            class="${s(o)}"
            @click=${()=>{t.selectedResult===o?t.selectedResult=null:t.selectedResult=o,t.dispatchEvent(new CustomEvent("result",{detail:t.selectedResult}))}}
            @mouseenter=${()=>{t.dispatchEvent(new CustomEvent("mouseenter:result",{detail:o}))}}
            @mouseleave=${()=>{t.dispatchEvent(new CustomEvent("mouseleave:result",{detail:o}))}}
          >
            <nav id="${o.id}" class="responsive tiny-space">
              ${I(i.subTitleProperty||i.imageProperty,()=>A`
                  ${I(t.resultType==="cards",()=>W(i.imageProperty,o)?A`
                            <img
                              loading="lazy"
                              fetchpriority="low"
                              class="image"
                              src="${W(i.imageProperty,o)}"
                            />
                          `:A`
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
                          `,()=>A`
                      <i class="small">
                        ${W(i.imageProperty,o)?A`
                              <img
                                loading="lazy"
                                fetchpriority="low"
                                class="image"
                                src="${W(i.imageProperty,o)}"
                              />
                            `:A`
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
                      >${ke(o.highlightedText||W(i.titleProperty,o).toString())}</span
                    >
                    ${I(!!W(i.subTitleProperty,o),()=>A`
                        <small class="subtitle no-line truncate"
                          >${ke(W(i.subTitleProperty,o).toString())}</small
                        >
                      `)}
                  </div>
                `,()=>A`
                  <div class="small-line max truncate">
                    <span
                      class="title truncate ${o.highlightedText?"highlight-enabled":""}"
                      >${ke(o.highlightedText||o[i.titleProperty])}</span
                    >
                  </div>
                `)}
              ${I(t.enableResultAction,()=>A`
                  <button
                    class="result-action square transparent primary-text small"
                    @click=${l=>{l.stopPropagation(),t.dispatchEvent(new CustomEvent("click:result-action",{detail:o}))}}
                  >
                    <icon class="small"
                      >${ke(t.resultActionIcon)}</icon
                    >
                  </button>
                `)}
            </nav>
          </li>
        `)}
    ${t.resultType==="cards"?Yt("</eox-layout>"):Yt("</ul>")}
  `}var bt,Qn,Gi,Vi;class xu extends ct{constructor(){super();q(this,bt);this.config=null,this.results=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list",this.resultActionIcon=void 0}static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Array},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String},resultActionIcon:{attribute:!1,type:String}}}aggregateResults(n,r){return vu(n,r,this)}createRenderRoot(){return this}handleAccordion(n){Ni(n,this.config,this)}render(){return A`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${I(this.results.length<1,()=>A`<small class="no-results">No matching items</small>`,()=>_t)}
          ${I(this.config.aggregateResults,()=>en(B(this,bt,Vi).call(this),n=>A`${I(this.aggregateResults(this.results,n).length===1&&this.config.autoSpreadSingle,()=>A`<div style="margin-left: -8px">
                        ${B(this,bt,Qn).call(this,n)}
                      </div>`,()=>B(this,bt,Gi).call(this,n))}`),()=>B(this,bt,Qn).call(this))}
        </div>
      </section>
    `}}bt=new WeakSet,Qn=function(n){return Wi(this,n)},Gi=function(n){return wu(n,this)},Vi=function(){const n=this.resultAggregation.filter(i=>this.aggregateResults(this.results,i).length);return this.aggregateResults(this.results,"No category").length>0&&n.push("No category"),n};customElements.define("eox-itemfilter-results",xu);var St,Ji,Zi,Qi;class Ki extends ct{constructor(){super();q(this,St);oe(this,"debouncedInputHandler",nn(B(this,St,Qi),500,{leading:!0}));this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(n){hu(n,this)}reset(){lu(this)}firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(n=>this.filterObject.state[n]?n:null).filter(n=>!!n),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}createRenderRoot(){return this}render(){const n=this.type.includes("multi")?"checkbox":"radio",r=this.filteredSuggestions.length>5?"select-overflow scroll":_t;return A`
      <style>
        :host,
        :root {
          --select-filter-max-items: 5;
        }
      </style>
      ${I((this.filterObject.filterKeys||this.suggestions).length>=10,()=>A`<div class="autocomplete-container">
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
                @input=${B(this,St,Ji)}
                @keydown=${B(this,St,Zi)}
                @blur=${()=>this.showSuggestions=!1}
                @focus=${()=>this.showSuggestions=!0}
              />
            </div>
          </div>`)}
      <div class="select-container ${r}">
        <ul class="${this.type} list no-space">
          ${this.filteredSuggestions.map(i=>A`
              <li
                data-identifier="${i.toString().toLowerCase()}"
                data-title="${i}"
              >
                <label class="${n} small max">
                  <input
                    type="${n}"
                    name=${i}
                    .checked=${this.selectedItems.includes(i)}
                    @change=${()=>this.debouncedInputHandler(i)}
                    @keydown=${s=>{s.key===" "&&this.inlineMode&&this.debouncedInputHandler(i)}}
                    tabindex=${this.tabIndex+1}
                  />
                  <span class="title small-line">${i}</span>
                </label>
              </li>
            `)}
        </ul>
      </div>
    `}}St=new WeakSet,Ji=function(n){uu(n,this)},Zi=function(n){fu(n,this)},Qi=function(n){Xi(n,this)},oe(Ki,"properties",{filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}});customElements.define("eox-itemfilter-select",Ki);var Nt,es,tr;class ts extends ct{constructor(){super();q(this,Nt);this.filterObject={},this.tabIndex=0,this.inputHandler=B(this,Nt,es).bind(this),this.debouncedInputHandler=nn(this.inputHandler,500,{leading:!1})}reset(){su(this)}createRenderRoot(){return this}render(){return I(this.filterObject,()=>A`
        <div
          style="margin-left: var(--list-padding); display: flex; gap: .5rem; align-items: center;"
        >
          ${B(this,Nt,tr).call(this,"min","before")}
          <tc-range-slider
            min="${this.filterObject.min}"
            max="${this.filterObject.max}"
            value1="${this.filterObject.state.min||this.filterObject.min}"
            value2="${this.filterObject.state.max||this.filterObject.max}"
            step="${this.filterObject.step||1}"
            @change=${this.debouncedInputHandler}
          ></tc-range-slider>
          ${B(this,Nt,tr).call(this,"max","after")}
        </div>
      `)}}Nt=new WeakSet,es=function(n){ou(n,this)},tr=function(n,r){return au(n,r,this)},oe(ts,"properties",{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number}});customElements.define("eox-itemfilter-range",ts);var Qe,ns;class Mu extends ct{constructor(){super();q(this,Qe);this.filterObject={},this.tabIndex=0}static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}reset(){pu(this)}createRenderRoot(){return this}render(){return I(this.filterObject,()=>{var n;return A`
        <div style="margin-left: var(--list-padding)">
          <nav class="vertical-margin small-margin wrap">
            ${en(["intersects","within"],r=>A`
                <label class="radio small small-text">
                  <input
                    tabindex=${this.tabIndex}
                    type="radio"
                    name="mode"
                    .checked="${(this.filterObject.state.mode||"")===r||_t}"
                    value="${r}"
                    @click=${()=>B(this,Qe,ns).call(this,r)}
                  />
                  <span>${r} filter geometry</span>
                </label>
              `)}
          </nav>
          <eox-itemfilter-spatial-filter
            exportparts="map: spatial-filter-map"
            .geometry="${(n=this.filterObject.state)==null?void 0:n.geometry}"
            @filter="${r=>{this.filterObject.state.geometry=r.detail.geometry,this.filterObject.dirty=!0,this.filterObject.stringifiedState="Polygon",this.dispatchEvent(new CustomEvent("filter"))}}"
          ></eox-itemfilter-spatial>
        </div>
      `})}}Qe=new WeakSet,ns=function(n){yu(n,this)};customElements.define("eox-itemfilter-spatial",Mu);var tn,rs;class Au extends ct{constructor(){super();q(this,tn);this.geometry=null,this.eoxMap=null}static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}firstUpdated(){B(this,tn,rs).call(this)}reset(){gu(this)}render(){return A`<div id="eox-map"></div>`}}tn=new WeakSet,rs=function(){Ui(this)};customElements.define("eox-itemfilter-spatial-filter",Au);function _u(t,e){e.renderRoot.querySelectorAll(".chip").forEach(n=>{n.classList.remove("highlighted")}),t.target instanceof HTMLElement&&t.target.classList.add("highlighted"),e.requestUpdate()}function Cu(t,e){const{code:n,target:r}=t;r instanceof HTMLElement&&r.id!=="eox-itemfilter-input-search"||e.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(n)||(n==="Space"&&t.preventDefault(),["Escape","Space","Enter"].includes(n)||t.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(n)&&Su(n,t.target.value??"",e))}function Su(t,e,n){const r=n.renderRoot.querySelector(".chip.highlighted");if((t==="Escape"||e)&&r&&r.classList.remove("highlighted"),t==="Backspace"&&!e){if(n.items.length){r&&(r.querySelector(".chip-item-close").click(),n.items.splice(Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(r),1));const i=n.renderRoot.querySelectorAll(".chip")[n.renderRoot.querySelectorAll(".chip").length-1];i.classList.contains("highlighted")||i.classList.add("highlighted"),n.requestUpdate()}n._dispatchEvent()}if((t==="ArrowLeft"||t==="ArrowRight")&&!e){if(n.renderRoot.querySelectorAll(".chip").length<1)return;let i=0;const s=n.renderRoot.querySelector(".chip.highlighted");s&&(i=Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(s),s.classList.remove("highlighted")),i=i+(t==="ArrowLeft"?-1:1),t==="ArrowLeft"&&i<0&&(i=n.renderRoot.querySelectorAll(".chip").length-1),t==="ArrowRight"&&i>n.renderRoot.querySelectorAll(".chip").length-1&&(i=0),Array.from(n.renderRoot.querySelectorAll(".chip"))[i].classList.add("highlighted")}}var jt,er,is;class Lu extends ct{constructor(){super();q(this,jt);this.items={},this.controller={}}static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",B(this,jt,er).bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",B(this,jt,er).bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}render(){return A`
      <span class="chip-container">
        ${en(this.items,n=>A`
            <span class="chip tiny-margin" @click=${B(this,jt,is).bind(this)}>
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
    `}}jt=new WeakSet,er=function(n){Cu(n,this)},is=function(n){_u(n,this)};customElements.define("eox-itemfilter-chips",Lu);const Eu=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),ii=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","expandMultipleFilters","expandResults","expandMultipleResults","items"];var $u=200,cr="__lodash_hash_undefined__",Bu=1/0,Ru="[object Function]",Pu="[object GeneratorFunction]",Du=/[\\^$.*+?()[\]{}|]/g,Tu=/^\[object .+?Constructor\]$/,Ou=typeof At=="object"&&At&&At.Object===Object&&At,ku=typeof self=="object"&&self&&self.Object===Object&&self,ur=Ou||ku||Function("return this")();function Iu(t,e){var n=t?t.length:0;return!!n&&ju(t,e,0)>-1}function Nu(t,e,n,r){for(var i=t.length,s=n+-1;++s<i;)if(e(t[s],s,t))return s;return-1}function ju(t,e,n){if(e!==e)return Nu(t,Fu,n);for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}function Fu(t){return t!==t}function Hu(t,e){return t.has(e)}function qu(t,e){return t==null?void 0:t[e]}function Yu(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch{}return e}function ss(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var Xu=Array.prototype,zu=Function.prototype,os=Object.prototype,Tn=ur["__core-js_shared__"],si=function(){var t=/[^.]+$/.exec(Tn&&Tn.keys&&Tn.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),as=zu.toString,fr=os.hasOwnProperty,Uu=os.toString,Wu=RegExp("^"+as.call(fr).replace(Du,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Gu=Xu.splice,Vu=hr(ur,"Map"),On=hr(ur,"Set"),ge=hr(Object,"create");function It(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Ku(){this.__data__=ge?ge(null):{}}function Ju(t){return this.has(t)&&delete this.__data__[t]}function Zu(t){var e=this.__data__;if(ge){var n=e[t];return n===cr?void 0:n}return fr.call(e,t)?e[t]:void 0}function Qu(t){var e=this.__data__;return ge?e[t]!==void 0:fr.call(e,t)}function tf(t,e){var n=this.__data__;return n[t]=ge&&e===void 0?cr:e,this}It.prototype.clear=Ku;It.prototype.delete=Ju;It.prototype.get=Zu;It.prototype.has=Qu;It.prototype.set=tf;function ee(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function ef(){this.__data__=[]}function nf(t){var e=this.__data__,n=fn(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():Gu.call(e,n,1),!0}function rf(t){var e=this.__data__,n=fn(e,t);return n<0?void 0:e[n][1]}function sf(t){return fn(this.__data__,t)>-1}function of(t,e){var n=this.__data__,r=fn(n,t);return r<0?n.push([t,e]):n[r][1]=e,this}ee.prototype.clear=ef;ee.prototype.delete=nf;ee.prototype.get=rf;ee.prototype.has=sf;ee.prototype.set=of;function ne(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function af(){this.__data__={hash:new It,map:new(Vu||ee),string:new It}}function lf(t){return hn(this,t).delete(t)}function cf(t){return hn(this,t).get(t)}function uf(t){return hn(this,t).has(t)}function ff(t,e){return hn(this,t).set(t,e),this}ne.prototype.clear=af;ne.prototype.delete=lf;ne.prototype.get=cf;ne.prototype.has=uf;ne.prototype.set=ff;function Ve(t){var e=-1,n=t?t.length:0;for(this.__data__=new ne;++e<n;)this.add(t[e])}function hf(t){return this.__data__.set(t,cr),this}function df(t){return this.__data__.has(t)}Ve.prototype.add=Ve.prototype.push=hf;Ve.prototype.has=df;function fn(t,e){for(var n=t.length;n--;)if(xf(t[n][0],e))return n;return-1}function pf(t){if(!ls(t)||bf(t))return!1;var e=Mf(t)||Yu(t)?Wu:Tu;return e.test(vf(t))}function gf(t,e,n){var r=-1,i=Iu,s=t.length,o=!0,l=[],c=l;if(s>=$u){var u=yf(t);if(u)return ss(u);o=!1,i=Hu,c=new Ve}else c=l;t:for(;++r<s;){var h=t[r],d=h;if(h=h!==0?h:0,o&&d===d){for(var y=c.length;y--;)if(c[y]===d)continue t;l.push(h)}else i(c,d,n)||(c!==l&&c.push(d),l.push(h))}return l}var yf=On&&1/ss(new On([,-0]))[1]==Bu?function(t){return new On(t)}:Af;function hn(t,e){var n=t.__data__;return mf(e)?n[typeof e=="string"?"string":"hash"]:n.map}function hr(t,e){var n=qu(t,e);return pf(n)?n:void 0}function mf(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function bf(t){return!!si&&si in t}function vf(t){if(t!=null){try{return as.call(t)}catch{}try{return t+""}catch{}}return""}function wf(t){return t&&t.length?gf(t):[]}function xf(t,e){return t===e||t!==t&&e!==e}function Mf(t){var e=ls(t)?Uu.call(t):"";return e==Ru||e==Pu}function ls(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Af(){}var _f=wf;const cs=oi(_f);var Ke={exports:{}};Ke.exports;(function(t,e){var n=200,r="Expected a function",i="__lodash_hash_undefined__",s=1,o=2,l=9007199254740991,c="[object Arguments]",u="[object Array]",h="[object Boolean]",d="[object Date]",y="[object Error]",g="[object Function]",m="[object GeneratorFunction]",w="[object Map]",_="[object Number]",M="[object Object]",E="[object Promise]",L="[object RegExp]",$="[object Set]",P="[object String]",N="[object Symbol]",k="[object WeakMap]",et="[object ArrayBuffer]",z="[object DataView]",ve="[object Float32Array]",re="[object Float64Array]",vt="[object Int8Array]",dr="[object Int16Array]",U="[object Int32Array]",Ft="[object Uint8Array]",we="[object Uint8ClampedArray]",ds="[object Uint16Array]",ps="[object Uint32Array]",gs=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ys=/^\w*$/,ms=/^\./,bs=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,vs=/[\\^$.*+?()[\]{}|]/g,ws=/\\(\\)?/g,xs=/^\[object .+?Constructor\]$/,Ms=/^(?:0|[1-9]\d*)$/,D={};D[ve]=D[re]=D[vt]=D[dr]=D[U]=D[Ft]=D[we]=D[ds]=D[ps]=!0,D[c]=D[u]=D[et]=D[h]=D[z]=D[d]=D[y]=D[g]=D[w]=D[_]=D[M]=D[L]=D[$]=D[P]=D[k]=!1;var pr=typeof At=="object"&&At&&At.Object===Object&&At,As=typeof self=="object"&&self&&self.Object===Object&&self,wt=pr||As||Function("return this")(),gr=e&&!e.nodeType&&e,yr=gr&&!0&&t&&!t.nodeType&&t,_s=yr&&yr.exports===gr,mr=_s&&pr.process,br=function(){try{return mr&&mr.binding("util")}catch{}}(),vr=br&&br.isTypedArray;function Cs(a,f){for(var p=-1,b=a?a.length:0,x=Array(b);++p<b;)x[p]=f(a[p],p,a);return x}function Ss(a,f){for(var p=-1,b=f.length,x=a.length;++p<b;)a[x+p]=f[p];return a}function Ls(a,f){for(var p=-1,b=a?a.length:0;++p<b;)if(f(a[p],p,a))return!0;return!1}function Es(a){return function(f){return f==null?void 0:f[a]}}function $s(a,f){for(var p=-1,b=Array(a);++p<a;)b[p]=f(p);return b}function Bs(a){return function(f){return a(f)}}function Rs(a,f){return a==null?void 0:a[f]}function dn(a){var f=!1;if(a!=null&&typeof a.toString!="function")try{f=!!(a+"")}catch{}return f}function Ps(a){var f=-1,p=Array(a.size);return a.forEach(function(b,x){p[++f]=[x,b]}),p}function Ds(a,f){return function(p){return a(f(p))}}function Ts(a){var f=-1,p=Array(a.size);return a.forEach(function(b){p[++f]=b}),p}var Os=Array.prototype,ks=Function.prototype,xe=Object.prototype,pn=wt["__core-js_shared__"],wr=function(){var a=/[^.]+$/.exec(pn&&pn.keys&&pn.keys.IE_PROTO||"");return a?"Symbol(src)_1."+a:""}(),xr=ks.toString,ft=xe.hasOwnProperty,Ht=xe.toString,Is=RegExp("^"+xr.call(ft).replace(vs,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Me=wt.Symbol,Mr=wt.Uint8Array,Ns=xe.propertyIsEnumerable,js=Os.splice,Ar=Me?Me.isConcatSpreadable:void 0,Fs=Ds(Object.keys,Object),gn=qt(wt,"DataView"),ie=qt(wt,"Map"),yn=qt(wt,"Promise"),mn=qt(wt,"Set"),bn=qt(wt,"WeakMap"),se=qt(Object,"create"),Hs=Bt(gn),qs=Bt(ie),Ys=Bt(yn),Xs=Bt(mn),zs=Bt(bn),Ae=Me?Me.prototype:void 0,vn=Ae?Ae.valueOf:void 0,_r=Ae?Ae.toString:void 0;function $t(a){var f=-1,p=a?a.length:0;for(this.clear();++f<p;){var b=a[f];this.set(b[0],b[1])}}function Us(){this.__data__=se?se(null):{}}function Ws(a){return this.has(a)&&delete this.__data__[a]}function Gs(a){var f=this.__data__;if(se){var p=f[a];return p===i?void 0:p}return ft.call(f,a)?f[a]:void 0}function Vs(a){var f=this.__data__;return se?f[a]!==void 0:ft.call(f,a)}function Ks(a,f){var p=this.__data__;return p[a]=se&&f===void 0?i:f,this}$t.prototype.clear=Us,$t.prototype.delete=Ws,$t.prototype.get=Gs,$t.prototype.has=Vs,$t.prototype.set=Ks;function ht(a){var f=-1,p=a?a.length:0;for(this.clear();++f<p;){var b=a[f];this.set(b[0],b[1])}}function Js(){this.__data__=[]}function Zs(a){var f=this.__data__,p=Ce(f,a);if(p<0)return!1;var b=f.length-1;return p==b?f.pop():js.call(f,p,1),!0}function Qs(a){var f=this.__data__,p=Ce(f,a);return p<0?void 0:f[p][1]}function to(a){return Ce(this.__data__,a)>-1}function eo(a,f){var p=this.__data__,b=Ce(p,a);return b<0?p.push([a,f]):p[b][1]=f,this}ht.prototype.clear=Js,ht.prototype.delete=Zs,ht.prototype.get=Qs,ht.prototype.has=to,ht.prototype.set=eo;function dt(a){var f=-1,p=a?a.length:0;for(this.clear();++f<p;){var b=a[f];this.set(b[0],b[1])}}function no(){this.__data__={hash:new $t,map:new(ie||ht),string:new $t}}function ro(a){return Se(this,a).delete(a)}function io(a){return Se(this,a).get(a)}function so(a){return Se(this,a).has(a)}function oo(a,f){return Se(this,a).set(a,f),this}dt.prototype.clear=no,dt.prototype.delete=ro,dt.prototype.get=io,dt.prototype.has=so,dt.prototype.set=oo;function _e(a){var f=-1,p=a?a.length:0;for(this.__data__=new dt;++f<p;)this.add(a[f])}function ao(a){return this.__data__.set(a,i),this}function lo(a){return this.__data__.has(a)}_e.prototype.add=_e.prototype.push=ao,_e.prototype.has=lo;function pt(a){this.__data__=new ht(a)}function co(){this.__data__=new ht}function uo(a){return this.__data__.delete(a)}function fo(a){return this.__data__.get(a)}function ho(a){return this.__data__.has(a)}function po(a,f){var p=this.__data__;if(p instanceof ht){var b=p.__data__;if(!ie||b.length<n-1)return b.push([a,f]),this;p=this.__data__=new dt(b)}return p.set(a,f),this}pt.prototype.clear=co,pt.prototype.delete=uo,pt.prototype.get=fo,pt.prototype.has=ho,pt.prototype.set=po;function go(a,f){var p=gt(a)||Mn(a)?$s(a.length,String):[],b=p.length,x=!!b;for(var v in a)ft.call(a,v)&&!(x&&(v=="length"||Er(v,b)))&&p.push(v);return p}function Ce(a,f){for(var p=a.length;p--;)if(Rr(a[p][0],f))return p;return-1}var yo=Do(vo);function mo(a,f,p,b,x){var v=-1,S=a.length;for(p||(p=jo),x||(x=[]);++v<S;){var T=a[v];p(T)?Ss(x,T):x[x.length]=T}return x}var bo=To();function vo(a,f){return a&&bo(a,f,Pe)}function Cr(a,f){f=Le(f,a)?[f]:Sr(f);for(var p=0,b=f.length;a!=null&&p<b;)a=a[Ee(f[p++])];return p&&p==b?a:void 0}function wo(a){return Ht.call(a)}function xo(a,f){return a!=null&&f in Object(a)}function wn(a,f,p,b,x){return a===f?!0:a==null||f==null||!Be(a)&&!Re(f)?a!==a&&f!==f:Mo(a,f,wn,p,b,x)}function Mo(a,f,p,b,x,v){var S=gt(a),T=gt(f),O=u,j=u;S||(O=xt(a),O=O==c?M:O),T||(j=xt(f),j=j==c?M:j);var Y=O==M&&!dn(a),X=j==M&&!dn(f),F=O==j;if(F&&!Y)return v||(v=new pt),S||Wo(a)?Lr(a,f,p,b,x,v):Oo(a,f,O,p,b,x,v);if(!(x&o)){var K=Y&&ft.call(a,"__wrapped__"),J=X&&ft.call(f,"__wrapped__");if(K||J){var Mt=K?a.value():a,yt=J?f.value():f;return v||(v=new pt),p(Mt,yt,b,x,v)}}return F?(v||(v=new pt),ko(a,f,p,b,x,v)):!1}function Ao(a,f,p,b){var x=p.length,v=x;if(a==null)return!v;for(a=Object(a);x--;){var S=p[x];if(S[2]?S[1]!==a[S[0]]:!(S[0]in a))return!1}for(;++x<v;){S=p[x];var T=S[0],O=a[T],j=S[1];if(S[2]){if(O===void 0&&!(T in a))return!1}else{var Y=new pt,X;if(!(X===void 0?wn(j,O,b,s|o,Y):X))return!1}}return!0}function _o(a){if(!Be(a)||Ho(a))return!1;var f=Pr(a)||dn(a)?Is:xs;return f.test(Bt(a))}function Co(a){return Re(a)&&An(a.length)&&!!D[Ht.call(a)]}function So(a){return typeof a=="function"?a:a==null?Jo:typeof a=="object"?gt(a)?Bo(a[0],a[1]):$o(a):Zo(a)}function Lo(a){if(!qo(a))return Fs(a);var f=[];for(var p in Object(a))ft.call(a,p)&&p!="constructor"&&f.push(p);return f}function Eo(a,f){var p=-1,b=$e(a)?Array(a.length):[];return yo(a,function(x,v,S){b[++p]=f(x,v,S)}),b}function $o(a){var f=Io(a);return f.length==1&&f[0][2]?Br(f[0][0],f[0][1]):function(p){return p===a||Ao(p,a,f)}}function Bo(a,f){return Le(a)&&$r(f)?Br(Ee(a),f):function(p){var b=Vo(p,a);return b===void 0&&b===f?Ko(p,a):wn(f,b,void 0,s|o)}}function Ro(a){return function(f){return Cr(f,a)}}function Po(a){if(typeof a=="string")return a;if(_n(a))return _r?_r.call(a):"";var f=a+"";return f=="0"&&1/a==-1/0?"-0":f}function Sr(a){return gt(a)?a:Yo(a)}function Do(a,f){return function(p,b){if(p==null)return p;if(!$e(p))return a(p,b);for(var x=p.length,v=-1,S=Object(p);++v<x&&b(S[v],v,S)!==!1;);return p}}function To(a){return function(f,p,b){for(var x=-1,v=Object(f),S=b(f),T=S.length;T--;){var O=S[++x];if(p(v[O],O,v)===!1)break}return f}}function Lr(a,f,p,b,x,v){var S=x&o,T=a.length,O=f.length;if(T!=O&&!(S&&O>T))return!1;var j=v.get(a);if(j&&v.get(f))return j==f;var Y=-1,X=!0,F=x&s?new _e:void 0;for(v.set(a,f),v.set(f,a);++Y<T;){var K=a[Y],J=f[Y];if(b)var Mt=S?b(J,K,Y,f,a,v):b(K,J,Y,a,f,v);if(Mt!==void 0){if(Mt)continue;X=!1;break}if(F){if(!Ls(f,function(yt,Rt){if(!F.has(Rt)&&(K===yt||p(K,yt,b,x,v)))return F.add(Rt)})){X=!1;break}}else if(!(K===J||p(K,J,b,x,v))){X=!1;break}}return v.delete(a),v.delete(f),X}function Oo(a,f,p,b,x,v,S){switch(p){case z:if(a.byteLength!=f.byteLength||a.byteOffset!=f.byteOffset)return!1;a=a.buffer,f=f.buffer;case et:return!(a.byteLength!=f.byteLength||!b(new Mr(a),new Mr(f)));case h:case d:case _:return Rr(+a,+f);case y:return a.name==f.name&&a.message==f.message;case L:case P:return a==f+"";case w:var T=Ps;case $:var O=v&o;if(T||(T=Ts),a.size!=f.size&&!O)return!1;var j=S.get(a);if(j)return j==f;v|=s,S.set(a,f);var Y=Lr(T(a),T(f),b,x,v,S);return S.delete(a),Y;case N:if(vn)return vn.call(a)==vn.call(f)}return!1}function ko(a,f,p,b,x,v){var S=x&o,T=Pe(a),O=T.length,j=Pe(f),Y=j.length;if(O!=Y&&!S)return!1;for(var X=O;X--;){var F=T[X];if(!(S?F in f:ft.call(f,F)))return!1}var K=v.get(a);if(K&&v.get(f))return K==f;var J=!0;v.set(a,f),v.set(f,a);for(var Mt=S;++X<O;){F=T[X];var yt=a[F],Rt=f[F];if(b)var Dr=S?b(Rt,yt,F,f,a,v):b(yt,Rt,F,a,f,v);if(!(Dr===void 0?yt===Rt||p(yt,Rt,b,x,v):Dr)){J=!1;break}Mt||(Mt=F=="constructor")}if(J&&!Mt){var De=a.constructor,Te=f.constructor;De!=Te&&"constructor"in a&&"constructor"in f&&!(typeof De=="function"&&De instanceof De&&typeof Te=="function"&&Te instanceof Te)&&(J=!1)}return v.delete(a),v.delete(f),J}function Se(a,f){var p=a.__data__;return Fo(f)?p[typeof f=="string"?"string":"hash"]:p.map}function Io(a){for(var f=Pe(a),p=f.length;p--;){var b=f[p],x=a[b];f[p]=[b,x,$r(x)]}return f}function qt(a,f){var p=Rs(a,f);return _o(p)?p:void 0}var xt=wo;(gn&&xt(new gn(new ArrayBuffer(1)))!=z||ie&&xt(new ie)!=w||yn&&xt(yn.resolve())!=E||mn&&xt(new mn)!=$||bn&&xt(new bn)!=k)&&(xt=function(a){var f=Ht.call(a),p=f==M?a.constructor:void 0,b=p?Bt(p):void 0;if(b)switch(b){case Hs:return z;case qs:return w;case Ys:return E;case Xs:return $;case zs:return k}return f});function No(a,f,p){f=Le(f,a)?[f]:Sr(f);for(var b,x=-1,S=f.length;++x<S;){var v=Ee(f[x]);if(!(b=a!=null&&p(a,v)))break;a=a[v]}if(b)return b;var S=a?a.length:0;return!!S&&An(S)&&Er(v,S)&&(gt(a)||Mn(a))}function jo(a){return gt(a)||Mn(a)||!!(Ar&&a&&a[Ar])}function Er(a,f){return f=f??l,!!f&&(typeof a=="number"||Ms.test(a))&&a>-1&&a%1==0&&a<f}function Le(a,f){if(gt(a))return!1;var p=typeof a;return p=="number"||p=="symbol"||p=="boolean"||a==null||_n(a)?!0:ys.test(a)||!gs.test(a)||f!=null&&a in Object(f)}function Fo(a){var f=typeof a;return f=="string"||f=="number"||f=="symbol"||f=="boolean"?a!=="__proto__":a===null}function Ho(a){return!!wr&&wr in a}function qo(a){var f=a&&a.constructor,p=typeof f=="function"&&f.prototype||xe;return a===p}function $r(a){return a===a&&!Be(a)}function Br(a,f){return function(p){return p==null?!1:p[a]===f&&(f!==void 0||a in Object(p))}}var Yo=xn(function(a){a=Go(a);var f=[];return ms.test(a)&&f.push(""),a.replace(bs,function(p,b,x,v){f.push(x?v.replace(ws,"$1"):b||p)}),f});function Ee(a){if(typeof a=="string"||_n(a))return a;var f=a+"";return f=="0"&&1/a==-1/0?"-0":f}function Bt(a){if(a!=null){try{return xr.call(a)}catch{}try{return a+""}catch{}}return""}function Xo(a,f){return mo(zo(a,f))}function zo(a,f){var p=gt(a)?Cs:Eo;return p(a,So(f))}function xn(a,f){if(typeof a!="function"||f&&typeof f!="function")throw new TypeError(r);var p=function(){var b=arguments,x=f?f.apply(this,b):b[0],v=p.cache;if(v.has(x))return v.get(x);var S=a.apply(this,b);return p.cache=v.set(x,S),S};return p.cache=new(xn.Cache||dt),p}xn.Cache=dt;function Rr(a,f){return a===f||a!==a&&f!==f}function Mn(a){return Uo(a)&&ft.call(a,"callee")&&(!Ns.call(a,"callee")||Ht.call(a)==c)}var gt=Array.isArray;function $e(a){return a!=null&&An(a.length)&&!Pr(a)}function Uo(a){return Re(a)&&$e(a)}function Pr(a){var f=Be(a)?Ht.call(a):"";return f==g||f==m}function An(a){return typeof a=="number"&&a>-1&&a%1==0&&a<=l}function Be(a){var f=typeof a;return!!a&&(f=="object"||f=="function")}function Re(a){return!!a&&typeof a=="object"}function _n(a){return typeof a=="symbol"||Re(a)&&Ht.call(a)==N}var Wo=vr?Bs(vr):Co;function Go(a){return a==null?"":Po(a)}function Vo(a,f,p){var b=a==null?void 0:Cr(a,f);return b===void 0?p:b}function Ko(a,f){return a!=null&&No(a,f,xo)}function Pe(a){return $e(a)?go(a):Lo(a)}function Jo(a){return a}function Zo(a){return Le(a)?Es(Ee(a)):Ro(a)}t.exports=Xo})(Ke,Ke.exports);var Cf=Ke.exports;const us=oi(Cf);function Sf(t,e,n){let r=[];t.filterProperties.length&&t.filterProperties.forEach(s=>{const o={},l=u=>s.format==="date"?he(u).unix():parseFloat(u);e.forEach(u=>{var h,d;if(s.type==="range"){const y=W(s.key,u);if(Array.isArray(y)){const g=[l(y[0]),l(y[1])];o.min=o.min!==void 0?Math.min(o.min,g[0]):g[0],o.max=o.max!==void 0?Math.max(o.max,g[1]):g[1]}else{const g=l(y);o.min=o.min!==void 0?Math.min(o.min,g):g,o.max=o.max!==void 0?Math.max(o.max,g):g}return}Array.isArray(u[s.key])?u[s.key].forEach(y=>{o[y]=void 0}):s.type==="spatial"?(o.geometry=((h=s==null?void 0:s.state)==null?void 0:h.geometry)||void 0,o.geometry&&(s.stringifiedState=o.geometry.type),o.mode=s.mode||"intersects"):(d=s.key)!=null&&d.includes(".")?cs(us(n.items,s.key)).filter(y=>y).forEach(y=>{o[y]=void 0}):o[u[s.key]]=void 0});const c=s.key||s.keys.join("|");n.filters[c]=Object.assign({type:s.type||"multiselect",dirty:s.state?Object.values(s.state).some(u=>u):void 0,key:c},s.type==="range"?{min:o.min,max:o.max,format:s.format}:{},s),n.filters[c].state=Object.assign({},o,s.state)}),t.matchAllWhenEmpty!==!1&&(n.results=n.sortResults(e),n.requestUpdate()),t.aggregateResults&&(r=Array.from(new Set(e.reduce((s,o)=>s.concat(o[t.aggregateResults]),[]))).filter(s=>s).sort((s,o)=>s.localeCompare(o)));const i=[];return Object.values(n.filters).forEach(s=>{s.type==="text"?s.keys.forEach(o=>{i.includes(o)||i.push(o)}):(s.type==="select"||s.type==="multiselect")&&(i.includes(s.key)||i.push(s.key))}),Vc(e,Object.assign({keys:i},t.fuseConfig)),r}async function Lf(t,e,n){let r;n.externalFilter?r=await Qc(e,n.filters,t):r=await Kc(e,n.filters,t),n.results=n.sortResults(r)}function Ef(t,e,n){const r=`filter-${t.key}`.replace("|","-");switch(t.type){case"text":return A`<eox-itemfilter-text
        data-type="filter"
        data-cy="text-filter"
        slot="filter"
        id="${r}"
        .tabIndex=${e}
        .filterObject=${t}
        .results=${n.results}
        .unstyled=${n.unstyled}
        @result=${n.updateResult}
        @filter=${()=>n.search()}
      ></eox-itemfilter-text>`;case"multiselect":case"select":return A`
        <eox-itemfilter-select
          .inlineMode=${n.inlineMode||!1}
          data-type="filter"
          id="${r}"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          .suggestions="${cs(us(n.items,t.key)).filter(i=>i)}"
          type="${t.type}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-select>
      `;case"range":return A`
        <eox-itemfilter-range
          id="${r}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-range>
      `;case"spatial":return A`
        <eox-itemfilter-spatial
          id="${r}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          @filter=${()=>n.search()}
        ></eox-itemfilter-spatial>
      `;default:return A``}}function $f(t,e){return[...t].sort((n,r)=>W(e.titleProperty,n).toString().localeCompare(W(e.titleProperty,r)).toString())}function Bf(t,e,n){return A`
    ${I(t.dirty,()=>A`
        <button
          type="button"
          tabindex=${e}
          slot="reset-button"
          class="reset-icon icon square primary-text transparent small no-margin"
          @click=${r=>{const i=r.target.parentElement.querySelector("[slot=filter]");i&&typeof i.reset=="function"&&i.reset(),n.search(),n.requestUpdate()}}
        >
          ${n.unstyled?"Reset":A`
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
  `}function Rf(t){t.renderRoot.querySelectorAll("[data-type='filter']").forEach(e=>{typeof e.reset=="function"&&e.reset()}),t.search()}var me,Vt,Z,Qt,fs,hs;class Pf extends ct{constructor(){super();q(this,Qt);q(this,me,[]);q(this,Vt,[]);q(this,Z,Eu);this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=nn(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.enableResultAction=!1,this.resultActionIcon='<svg style="width: 24px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>click me!</title><path fill="currentColor" d="M11.5,11L17.88,16.37L17,16.55L16.36,16.67C15.73,16.8 15.37,17.5 15.65,18.07L15.92,18.65L17.28,21.59L15.86,22.25L14.5,19.32L14.24,18.74C13.97,18.15 13.22,17.97 12.72,18.38L12.21,18.78L11.5,19.35V11M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10" /></svg>',this.styleOverride="",this.unstyled=!1}static get properties(){return{items:{attribute:!1,type:Object},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{attribute:!1,type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{attribute:!1,type:Array},fuseConfig:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},enableResultAction:{attribute:!1,type:Boolean},resultActionIcon:{attribute:!1,type:String},styleOverride:{type:String},unstyled:{type:Boolean}}}apply(){Oe(this,me,Sf(H(this,Z),H(this,Vt),this)),this.search()}async searchHandler(){await Lf(H(this,Z),H(this,Vt),this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(n){return $f(n,H(this,Z))}resetFilters(){Rf(this)}firstUpdated(n){var i;let r={};ii.map(s=>{r={...r,[s]:this[s]}}),Oe(this,Z,r),Oe(this,Vt,((i=this.items)==null?void 0:i.map((s,o)=>Object.assign({id:s[this.idProperty]||`item-${o}`},s)))||[]),this.apply()}updated(n){ii.map(r=>n.has(r)?(this.firstUpdated(void 0),!0):!1)}updateResult(n){this.selectedResult=n.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}mouseEnterResult(n){this.dispatchEvent(new CustomEvent("mouseenter:result",{detail:n.detail,bubbles:!0,composed:!0}))}mouseLeaveResult(n){this.dispatchEvent(new CustomEvent("mouseleave:result",{detail:n.detail,bubbles:!0,composed:!0}))}emitResultAction(n){this.dispatchEvent(new CustomEvent("click:result-action",{detail:n.detail,bubbles:!0,composed:!0}))}render(){var n;return A`
      <style>
        ${la}
        ${!this.unstyled&&nr}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":_t}
        @submit="${r=>r.preventDefault()}"
      >
        ${I(this.filterProperties,()=>A`
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
                  ${I(!this.inlineMode,()=>A`
                      <nav class="title-nav">
                        <div class="max">
                          <slot name="filterstitle"
                            ><p><strong>Filters</strong></p></slot
                          >
                        </div>
                        ${I(!this.inlineMode&&H(this,Z).filterProperties&&!this.inlineMode&&H(this,Z).filterProperties&&Un(this.filters),()=>A`
                            <button
                              type="button"
                              id="filter-reset"
                              class="reset-icon border small"
                              data-cy="filter-reset"
                              @click=${()=>this.resetFilters()}
                            >
                              ${this.unstyled?_t:A`
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
                      ${en(Object.values(this.filters),(r,i)=>A` <li class="no-padding">
                            <eox-itemfilter-expandcontainer
                              .filterObject=${r}
                              @details-toggled=${s=>Ni(s,H(this,Z),this)}
                              data-details="${r.key}"
                            >
                              ${B(this,Qt,hs).call(this,r,ri(i,1))}
                              ${B(this,Qt,fs).call(this,r,ri(i,2))}
                            </eox-itemfilter-expandcontainer>
                          </li>`)}
                    </ul>
                  </div>
                </section>
              </eox-itemfilter-container>
            </div>
          `)}
        ${I(((n=H(this,Z))==null?void 0:n.showResults)&&this.results,()=>A`
            <div class="small-space"></div>
            <eox-itemfilter-results
              .config=${H(this,Z)}
              .results=${this.results}
              .filters=${this.filters}
              .resultAggregation=${H(this,me)}
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
    `}}me=new WeakMap,Vt=new WeakMap,Z=new WeakMap,Qt=new WeakSet,fs=function(n,r){return Ef(n,r,this)},hs=function(n,r){return Bf(n,r,this)};customElements.define("eox-itemfilter",Pf);export{Pf as EOxItemFilter};
