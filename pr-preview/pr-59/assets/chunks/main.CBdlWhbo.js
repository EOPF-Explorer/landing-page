var Qo=Object.defineProperty;var Dr=t=>{throw TypeError(t)};var ta=(t,e,n)=>e in t?Qo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var oe=(t,e,n)=>ta(t,typeof e!="symbol"?e+"":e,n),_n=(t,e,n)=>e.has(t)||Dr("Cannot "+n);var F=(t,e,n)=>(_n(t,e,"read from private field"),n?n.call(t):e.get(t)),H=(t,e,n)=>e.has(t)?Dr("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),ke=(t,e,n,r)=>(_n(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),E=(t,e,n)=>(_n(t,e,"access private method"),n);import{e as ea,a as na,i as ct,A as _t,b as M}from"./addCommonStyleSheet.4Ot-O0kF.js";import{o as tn}from"./map.DiiNQ3pp.js";import{n as I}from"./when.BR7zwNJC.js";import{d as he}from"./dayjs.min.Ba62AOpW.js";import{_ as en}from"./index.BUIxO2d3.js";import{s as Yt,u as Tr}from"./static.C1TqfVvO.js";import{c as ra}from"./repeat.DkGZT0eO.js";import{o as Oe}from"./unsafe-html.Pgp1ry0A.js";import"./toolcool-range-slider.min.BBXDELo7.js";import{o as ia}from"./orient2d.DArCjZZA.js";import{f as Vt,a as Q,p as ce,m as sa,l as de,i as oa,d as Ut,r as aa,b as kr}from"./index.2GfG_t-c.js";import{g as si,c as At}from"./commonjsHelpers.BosuxZz1.js";import"./directive.CvdRHFdJ.js";import"./directive-helpers.Lgruo5wx.js";const la=`
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
`;na();const er=`
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
`;var Ve,oi;class ca extends ct{constructor(){super();H(this,Ve);this.filterObject={},this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}render(){return M`
      <style>
        ${!this.unstyled&&er}
      </style>

      ${I(this.filterObject.featured,()=>M`<slot name="filter"></slot>`,()=>M`<details
            @toggle="${E(this,Ve,oi)}"
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
    `}}Ve=new WeakSet,oi=function(n){this.dispatchEvent(new CustomEvent("details-toggled",{detail:n,bubbles:!0,composed:!0}))};customElements.define("eox-itemfilter-expandcontainer",ca);function mt(t){return Array.isArray?Array.isArray(t):ci(t)==="[object Array]"}function ua(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function fa(t){return t==null?"":ua(t)}function it(t){return typeof t=="string"}function ai(t){return typeof t=="number"}function ha(t){return t===!0||t===!1||da(t)&&ci(t)=="[object Boolean]"}function li(t){return typeof t=="object"}function da(t){return li(t)&&t!==null}function G(t){return t!=null}function Cn(t){return!t.trim().length}function ci(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const pa="Incorrect 'index' type",ga=t=>`Invalid value for key ${t}`,ya=t=>`Pattern length exceeds max of ${t}.`,ma=t=>`Missing ${t} property in key`,ba=t=>`Property 'weight' in key '${t}' must be a positive integer`,Or=Object.prototype.hasOwnProperty;class va{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=ui(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function ui(t){let e=null,n=null,r=null,i=1,s=null;if(it(t)||mt(t))r=t,e=Ir(t),n=kn(t);else{if(!Or.call(t,"name"))throw new Error(ma("name"));const o=t.name;if(r=o,Or.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(ba(o));e=Ir(o),n=kn(o),s=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:s}}function Ir(t){return mt(t)?t:t.split(".")}function kn(t){return mt(t)?t.join("."):t}function wa(t,e){let n=[],r=!1;const i=(s,o,l)=>{if(G(s))if(!o[l])n.push(s);else{let c=o[l];const u=s[c];if(!G(u))return;if(l===o.length-1&&(it(u)||ai(u)||ha(u)))n.push(fa(u));else if(mt(u)){r=!0;for(let h=0,d=u.length;h<d;h+=1)i(u[h],o,l+1)}else o.length&&i(u,o,l+1)}};return i(t,it(e)?e.split("."):e,0),r?n:n[0]}const xa={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Ma={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},Aa={location:0,threshold:.6,distance:100},_a={useExtendedSearch:!1,getFn:wa,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var A={...Ma,...xa,...Aa,..._a};const Ca=/[^ ]+/g;function Sa(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const s=i.match(Ca).length;if(n.has(s))return n.get(s);const o=1/Math.pow(s,.5*t),l=parseFloat(Math.round(o*r)/r);return n.set(s,l),l},clear(){n.clear()}}}class nr{constructor({getFn:e=A.getFn,fieldNormWeight:n=A.fieldNormWeight}={}){this.norm=Sa(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,it(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();it(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!G(e)||Cn(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,s)=>{let o=i.getFn?i.getFn(e):this.getFn(e,i.path);if(G(o)){if(mt(o)){let l=[];const c=[{nestedArrIndex:-1,value:o}];for(;c.length;){const{nestedArrIndex:u,value:h}=c.pop();if(G(h))if(it(h)&&!Cn(h)){let d={v:h,i:u,n:this.norm.get(h)};l.push(d)}else mt(h)&&h.forEach((d,y)=>{c.push({nestedArrIndex:y,value:d})})}r.$[s]=l}else if(it(o)&&!Cn(o)){let l={v:o,n:this.norm.get(o)};r.$[s]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function fi(t,e,{getFn:n=A.getFn,fieldNormWeight:r=A.fieldNormWeight}={}){const i=new nr({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(ui)),i.setSources(e),i.create(),i}function La(t,{getFn:e=A.getFn,fieldNormWeight:n=A.fieldNormWeight}={}){const{keys:r,records:i}=t,s=new nr({getFn:e,fieldNormWeight:n});return s.setKeys(r),s.setIndexRecords(i),s}function Ie(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=A.distance,ignoreLocation:s=A.ignoreLocation}={}){const o=e/t.length;if(s)return o;const l=Math.abs(r-n);return i?o+l/i:l?1:o}function Ea(t=[],e=A.minMatchCharLength){let n=[],r=-1,i=-1,s=0;for(let o=t.length;s<o;s+=1){let l=t[s];l&&r===-1?r=s:!l&&r!==-1&&(i=s-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[s-1]&&s-r>=e&&n.push([r,s-1]),n}const Dt=32;function $a(t,e,n,{location:r=A.location,distance:i=A.distance,threshold:s=A.threshold,findAllMatches:o=A.findAllMatches,minMatchCharLength:l=A.minMatchCharLength,includeMatches:c=A.includeMatches,ignoreLocation:u=A.ignoreLocation}={}){if(e.length>Dt)throw new Error(ya(Dt));const h=e.length,d=t.length,y=Math.max(0,Math.min(r,d));let g=s,m=y;const v=l>1||c,S=v?Array(d):[];let _;for(;(_=t.indexOf(e,m))>-1;){let O=Ie(e,{currentLocation:_,expectedLocation:y,distance:i,ignoreLocation:u});if(g=Math.min(O,g),m=_+h,v){let et=0;for(;et<h;)S[_+et]=1,et+=1}}m=-1;let $=[],L=1,B=h+d;const R=1<<h-1;for(let O=0;O<h;O+=1){let et=0,z=B;for(;et<z;)Ie(e,{errors:O,currentLocation:y+z,expectedLocation:y,distance:i,ignoreLocation:u})<=g?et=z:B=z,z=Math.floor((B-et)/2+et);B=z;let ve=Math.max(1,y-z+1),re=o?d:Math.min(y+z,d)+h,vt=Array(re+2);vt[re+1]=(1<<O)-1;for(let U=re;U>=ve;U-=1){let Ft=U-1,we=n[t.charAt(Ft)];if(v&&(S[Ft]=+!!we),vt[U]=(vt[U+1]<<1|1)&we,O&&(vt[U]|=($[U+1]|$[U])<<1|1|$[U+1]),vt[U]&R&&(L=Ie(e,{errors:O,currentLocation:Ft,expectedLocation:y,distance:i,ignoreLocation:u}),L<=g)){if(g=L,m=Ft,m<=y)break;ve=Math.max(1,2*y-m)}}if(Ie(e,{errors:O+1,currentLocation:y,expectedLocation:y,distance:i,ignoreLocation:u})>g)break;$=vt}const X={isMatch:m>=0,score:Math.max(.001,L)};if(v){const O=Ea(S,l);O.length?c&&(X.indices=O):X.isMatch=!1}return X}function Ba(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}const Xe=String.prototype.normalize?t=>t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,""):t=>t;class hi{constructor(e,{location:n=A.location,threshold:r=A.threshold,distance:i=A.distance,includeMatches:s=A.includeMatches,findAllMatches:o=A.findAllMatches,minMatchCharLength:l=A.minMatchCharLength,isCaseSensitive:c=A.isCaseSensitive,ignoreDiacritics:u=A.ignoreDiacritics,ignoreLocation:h=A.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:s,findAllMatches:o,minMatchCharLength:l,isCaseSensitive:c,ignoreDiacritics:u,ignoreLocation:h},e=c?e:e.toLowerCase(),e=u?Xe(e):e,this.pattern=e,this.chunks=[],!this.pattern.length)return;const d=(g,m)=>{this.chunks.push({pattern:g,alphabet:Ba(g),startIndex:m})},y=this.pattern.length;if(y>Dt){let g=0;const m=y%Dt,v=y-m;for(;g<v;)d(this.pattern.substr(g,Dt),g),g+=Dt;if(m){const S=y-Dt;d(this.pattern.substr(S),S)}}else d(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,ignoreDiacritics:r,includeMatches:i}=this.options;if(e=n?e:e.toLowerCase(),e=r?Xe(e):e,this.pattern===e){let v={isMatch:!0,score:0};return i&&(v.indices=[[0,e.length-1]]),v}const{location:s,distance:o,threshold:l,findAllMatches:c,minMatchCharLength:u,ignoreLocation:h}=this.options;let d=[],y=0,g=!1;this.chunks.forEach(({pattern:v,alphabet:S,startIndex:_})=>{const{isMatch:$,score:L,indices:B}=$a(e,v,S,{location:s+_,distance:o,threshold:l,findAllMatches:c,minMatchCharLength:u,includeMatches:i,ignoreLocation:h});$&&(g=!0),y+=L,$&&B&&(d=[...d,...B])});let m={isMatch:g,score:g?y/this.chunks.length:1};return g&&i&&(m.indices=d),m}}class Lt{constructor(e){this.pattern=e}static isMultiMatch(e){return Nr(e,this.multiRegex)}static isSingleMatch(e){return Nr(e,this.singleRegex)}search(){}}function Nr(t,e){const n=t.match(e);return n?n[1]:null}class Pa extends Lt{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Ra extends Lt{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class Da extends Lt{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Ta extends Lt{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class ka extends Lt{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Oa extends Lt{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class di extends Lt{constructor(e,{location:n=A.location,threshold:r=A.threshold,distance:i=A.distance,includeMatches:s=A.includeMatches,findAllMatches:o=A.findAllMatches,minMatchCharLength:l=A.minMatchCharLength,isCaseSensitive:c=A.isCaseSensitive,ignoreDiacritics:u=A.ignoreDiacritics,ignoreLocation:h=A.ignoreLocation}={}){super(e),this._bitapSearch=new hi(e,{location:n,threshold:r,distance:i,includeMatches:s,findAllMatches:o,minMatchCharLength:l,isCaseSensitive:c,ignoreDiacritics:u,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class pi extends Lt{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],s=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+s,i.push([r,n-1]);const o=!!i.length;return{isMatch:o,score:o?0:1,indices:i}}}const On=[Pa,pi,Da,Ta,Oa,ka,Ra,di],jr=On.length,Ia=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Na="|";function ja(t,e={}){return t.split(Na).map(n=>{let r=n.trim().split(Ia).filter(s=>s&&!!s.trim()),i=[];for(let s=0,o=r.length;s<o;s+=1){const l=r[s];let c=!1,u=-1;for(;!c&&++u<jr;){const h=On[u];let d=h.isMultiMatch(l);d&&(i.push(new h(d,e)),c=!0)}if(!c)for(u=-1;++u<jr;){const h=On[u];let d=h.isSingleMatch(l);if(d){i.push(new h(d,e));break}}}return i})}const Fa=new Set([di.type,pi.type]);class Ha{constructor(e,{isCaseSensitive:n=A.isCaseSensitive,ignoreDiacritics:r=A.ignoreDiacritics,includeMatches:i=A.includeMatches,minMatchCharLength:s=A.minMatchCharLength,ignoreLocation:o=A.ignoreLocation,findAllMatches:l=A.findAllMatches,location:c=A.location,threshold:u=A.threshold,distance:h=A.distance}={}){this.query=null,this.options={isCaseSensitive:n,ignoreDiacritics:r,includeMatches:i,minMatchCharLength:s,findAllMatches:l,ignoreLocation:o,location:c,threshold:u,distance:h},e=n?e:e.toLowerCase(),e=r?Xe(e):e,this.pattern=e,this.query=ja(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i,ignoreDiacritics:s}=this.options;e=i?e:e.toLowerCase(),e=s?Xe(e):e;let o=0,l=[],c=0;for(let u=0,h=n.length;u<h;u+=1){const d=n[u];l.length=0,o=0;for(let y=0,g=d.length;y<g;y+=1){const m=d[y],{isMatch:v,indices:S,score:_}=m.search(e);if(v){if(o+=1,c+=_,r){const $=m.constructor.type;Fa.has($)?l=[...l,...S]:l.push(S)}}else{c=0,o=0,l.length=0;break}}if(o){let y={isMatch:!0,score:c/o};return r&&(y.indices=l),y}}return{isMatch:!1,score:1}}}const In=[];function qa(...t){In.push(...t)}function Nn(t,e){for(let n=0,r=In.length;n<r;n+=1){let i=In[n];if(i.condition(t,e))return new i(t,e)}return new hi(t,e)}const ze={AND:"$and",OR:"$or"},jn={PATH:"$path",PATTERN:"$val"},Fn=t=>!!(t[ze.AND]||t[ze.OR]),Ya=t=>!!t[jn.PATH],Xa=t=>!mt(t)&&li(t)&&!Fn(t),Fr=t=>({[ze.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function gi(t,e,{auto:n=!0}={}){const r=i=>{let s=Object.keys(i);const o=Ya(i);if(!o&&s.length>1&&!Fn(i))return r(Fr(i));if(Xa(i)){const c=o?i[jn.PATH]:s[0],u=o?i[jn.PATTERN]:i[c];if(!it(u))throw new Error(ga(c));const h={keyId:kn(c),pattern:u};return n&&(h.searcher=Nn(u,e)),h}let l={children:[],operator:s[0]};return s.forEach(c=>{const u=i[c];mt(u)&&u.forEach(h=>{l.children.push(r(h))})}),l};return Fn(t)||(t=Fr(t)),r(t)}function za(t,{ignoreFieldNorm:e=A.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:s,score:o})=>{const l=i?i.weight:null;r*=Math.pow(o===0&&l?Number.EPSILON:o,(l||1)*(e?1:s))}),n.score=r})}function Ua(t,e){const n=t.matches;e.matches=[],G(n)&&n.forEach(r=>{if(!G(r.indices)||!r.indices.length)return;const{indices:i,value:s}=r;let o={indices:i,value:s};r.key&&(o.key=r.key.src),r.idx>-1&&(o.refIndex=r.idx),e.matches.push(o)})}function Wa(t,e){e.score=t.score}function Ga(t,e,{includeMatches:n=A.includeMatches,includeScore:r=A.includeScore}={}){const i=[];return n&&i.push(Ua),r&&i.push(Wa),t.map(s=>{const{idx:o}=s,l={item:e[o],refIndex:o};return i.length&&i.forEach(c=>{c(s,l)}),l})}class Et{constructor(e,n={},r){this.options={...A,...n},this.options.useExtendedSearch,this._keyStore=new va(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof nr))throw new Error(pa);this._myIndex=n||fi(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){G(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const s=this._docs[r];e(s,r)&&(this.removeAt(r),r-=1,i-=1,n.push(s))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:s,sortFn:o,ignoreFieldNorm:l}=this.options;let c=it(e)?it(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return za(c,{ignoreFieldNorm:l}),s&&c.sort(o),ai(n)&&n>-1&&(c=c.slice(0,n)),Ga(c,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=Nn(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:s,i:o,n:l})=>{if(!G(s))return;const{isMatch:c,score:u,indices:h}=n.searchIn(s);c&&i.push({item:s,idx:o,matches:[{score:u,value:s,norm:l,indices:h}]})}),i}_searchLogical(e){const n=gi(e,this.options),r=(l,c,u)=>{if(!l.children){const{keyId:d,searcher:y}=l,g=this._findMatches({key:this._keyStore.get(d),value:this._myIndex.getValueForItemAtKeyId(c,d),searcher:y});return g&&g.length?[{idx:u,item:c,matches:g}]:[]}const h=[];for(let d=0,y=l.children.length;d<y;d+=1){const g=l.children[d],m=r(g,c,u);if(m.length)h.push(...m);else if(l.operator===ze.AND)return[]}return h},i=this._myIndex.records,s={},o=[];return i.forEach(({$:l,i:c})=>{if(G(l)){let u=r(n,l,c);u.length&&(s[c]||(s[c]={idx:c,item:l,matches:[]},o.push(s[c])),u.forEach(({matches:h})=>{s[c].matches.push(...h)}))}}),o}_searchObjectList(e){const n=Nn(e,this.options),{keys:r,records:i}=this._myIndex,s=[];return i.forEach(({$:o,i:l})=>{if(!G(o))return;let c=[];r.forEach((u,h)=>{c.push(...this._findMatches({key:u,value:o[h],searcher:n}))}),c.length&&s.push({idx:l,item:o,matches:c})}),s}_findMatches({key:e,value:n,searcher:r}){if(!G(n))return[];let i=[];if(mt(n))n.forEach(({v:s,i:o,n:l})=>{if(!G(s))return;const{isMatch:c,score:u,indices:h}=r.searchIn(s);c&&i.push({score:u,key:e,value:s,idx:o,norm:l,indices:h})});else{const{v:s,n:o}=n,{isMatch:l,score:c,indices:u}=r.searchIn(s);l&&i.push({score:c,key:e,value:s,norm:o,indices:u})}return i}}Et.version="7.1.0";Et.createIndex=fi;Et.parseIndex=La;Et.config=A;Et.parseQuery=gi;qa(Ha);function yi(t,e){const n=new Et(e.filterProperties,{keys:["title"]});if(!(t.target instanceof HTMLInputElement))return;const r=t.target.value,s=n.search(r).map(o=>o.item.key||o.item.keys.join("|"));Object.keys(e.filters).forEach(o=>{e.querySelector(`[data-details="${o}"]`).parentElement.style.display=s.includes(o)||!r?"":"none"})}function Ka(t,e){if(!(t.target instanceof HTMLElement))return;const n=t.target.getAttribute("data-close").replace("|","-");e.querySelector(`#filter-${n}`).reset(),e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}const Hn=Math.min,Wt=Math.max,Ue=Math.round,Ne=Math.floor,ot=t=>({x:t,y:t});function mi(t){return t.split("-")[0]}function Va(t){return t.split("-")[1]}function Ja(t){return t==="x"?"y":"x"}function Za(t){return t==="y"?"height":"width"}const Qa=new Set(["top","bottom"]);function bi(t){return Qa.has(mi(t))?"y":"x"}function tl(t){return Ja(bi(t))}function vi(t){const{x:e,y:n,width:r,height:i}=t;return{width:r,height:i,top:n,left:e,right:e+r,bottom:n+i,x:e,y:n}}function Hr(t,e,n){let{reference:r,floating:i}=t;const s=bi(e),o=tl(e),l=Za(o),c=mi(e),u=s==="y",h=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,y=r[l]/2-i[l]/2;let g;switch(c){case"top":g={x:h,y:r.y-i.height};break;case"bottom":g={x:h,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:d};break;case"left":g={x:r.x-i.width,y:d};break;default:g={x:r.x,y:r.y}}switch(Va(e)){case"start":g[o]-=y*(n&&u?-1:1);break;case"end":g[o]+=y*(n&&u?-1:1);break}return g}const el=async(t,e,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:s=[],platform:o}=n,l=s.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(e));let u=await o.getElementRects({reference:t,floating:e,strategy:i}),{x:h,y:d}=Hr(u,r,c),y=r,g={},m=0;for(let v=0;v<l.length;v++){const{name:S,fn:_}=l[v],{x:$,y:L,data:B,reset:R}=await _({x:h,y:d,initialPlacement:r,placement:y,strategy:i,middlewareData:g,rects:u,platform:o,elements:{reference:t,floating:e}});h=$??h,d=L??d,g={...g,[S]:{...g[S],...B}},R&&m<=50&&(m++,typeof R=="object"&&(R.placement&&(y=R.placement),R.rects&&(u=R.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:i}):R.rects),{x:h,y:d}=Hr(u,y,c)),v=-1)}return{x:h,y:d,placement:y,strategy:i,middlewareData:g}};function nn(){return typeof window<"u"}function te(t){return wi(t)?(t.nodeName||"").toLowerCase():"#document"}function K(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function ut(t){var e;return(e=(wi(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function wi(t){return nn()?t instanceof Node||t instanceof K(t).Node:!1}function nt(t){return nn()?t instanceof Element||t instanceof K(t).Element:!1}function lt(t){return nn()?t instanceof HTMLElement||t instanceof K(t).HTMLElement:!1}function qr(t){return!nn()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof K(t).ShadowRoot}const nl=new Set(["inline","contents"]);function be(t){const{overflow:e,overflowX:n,overflowY:r,display:i}=rt(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!nl.has(i)}const rl=new Set(["table","td","th"]);function il(t){return rl.has(te(t))}const sl=[":popover-open",":modal"];function rn(t){return sl.some(e=>{try{return t.matches(e)}catch{return!1}})}const ol=["transform","translate","scale","rotate","perspective"],al=["transform","translate","scale","rotate","perspective","filter"],ll=["paint","layout","strict","content"];function rr(t){const e=ir(),n=nt(t)?rt(t):t;return ol.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||al.some(r=>(n.willChange||"").includes(r))||ll.some(r=>(n.contain||"").includes(r))}function cl(t){let e=Ct(t);for(;lt(e)&&!Jt(e);){if(rr(e))return e;if(rn(e))return null;e=Ct(e)}return null}function ir(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const ul=new Set(["html","body","#document"]);function Jt(t){return ul.has(te(t))}function rt(t){return K(t).getComputedStyle(t)}function sn(t){return nt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Ct(t){if(te(t)==="html")return t;const e=t.assignedSlot||t.parentNode||qr(t)&&t.host||ut(t);return qr(e)?e.host:e}function xi(t){const e=Ct(t);return Jt(e)?t.ownerDocument?t.ownerDocument.body:t.body:lt(e)&&be(e)?e:xi(e)}function pe(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=xi(t),s=i===((r=t.ownerDocument)==null?void 0:r.body),o=K(i);if(s){const l=qn(o);return e.concat(o,o.visualViewport||[],be(i)?i:[],l&&n?pe(l):[])}return e.concat(i,pe(i,[],n))}function qn(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Mi(t){const e=rt(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const i=lt(t),s=i?t.offsetWidth:n,o=i?t.offsetHeight:r,l=Ue(n)!==s||Ue(r)!==o;return l&&(n=s,r=o),{width:n,height:r,$:l}}function sr(t){return nt(t)?t:t.contextElement}function Gt(t){const e=sr(t);if(!lt(e))return ot(1);const n=e.getBoundingClientRect(),{width:r,height:i,$:s}=Mi(e);let o=(s?Ue(n.width):n.width)/r,l=(s?Ue(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!l||!Number.isFinite(l))&&(l=1),{x:o,y:l}}const fl=ot(0);function Ai(t){const e=K(t);return!ir()||!e.visualViewport?fl:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function hl(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==K(t)?!1:e}function kt(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=sr(t);let o=ot(1);e&&(r?nt(r)&&(o=Gt(r)):o=Gt(t));const l=hl(s,n,r)?Ai(s):ot(0);let c=(i.left+l.x)/o.x,u=(i.top+l.y)/o.y,h=i.width/o.x,d=i.height/o.y;if(s){const y=K(s),g=r&&nt(r)?K(r):r;let m=y,v=qn(m);for(;v&&r&&g!==m;){const S=Gt(v),_=v.getBoundingClientRect(),$=rt(v),L=_.left+(v.clientLeft+parseFloat($.paddingLeft))*S.x,B=_.top+(v.clientTop+parseFloat($.paddingTop))*S.y;c*=S.x,u*=S.y,h*=S.x,d*=S.y,c+=L,u+=B,m=K(v),v=qn(m)}}return vi({width:h,height:d,x:c,y:u})}function on(t,e){const n=sn(t).scrollLeft;return e?e.left+n:kt(ut(t)).left+n}function _i(t,e){const n=t.getBoundingClientRect(),r=n.left+e.scrollLeft-on(t,n),i=n.top+e.scrollTop;return{x:r,y:i}}function dl(t){let{elements:e,rect:n,offsetParent:r,strategy:i}=t;const s=i==="fixed",o=ut(r),l=e?rn(e.floating):!1;if(r===o||l&&s)return n;let c={scrollLeft:0,scrollTop:0},u=ot(1);const h=ot(0),d=lt(r);if((d||!d&&!s)&&((te(r)!=="body"||be(o))&&(c=sn(r)),lt(r))){const g=kt(r);u=Gt(r),h.x=g.x+r.clientLeft,h.y=g.y+r.clientTop}const y=o&&!d&&!s?_i(o,c):ot(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-c.scrollLeft*u.x+h.x+y.x,y:n.y*u.y-c.scrollTop*u.y+h.y+y.y}}function pl(t){return Array.from(t.getClientRects())}function gl(t){const e=ut(t),n=sn(t),r=t.ownerDocument.body,i=Wt(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),s=Wt(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let o=-n.scrollLeft+on(t);const l=-n.scrollTop;return rt(r).direction==="rtl"&&(o+=Wt(e.clientWidth,r.clientWidth)-i),{width:i,height:s,x:o,y:l}}const Yr=25;function yl(t,e){const n=K(t),r=ut(t),i=n.visualViewport;let s=r.clientWidth,o=r.clientHeight,l=0,c=0;if(i){s=i.width,o=i.height;const h=ir();(!h||h&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}const u=on(r);if(u<=0){const h=r.ownerDocument,d=h.body,y=getComputedStyle(d),g=h.compatMode==="CSS1Compat"&&parseFloat(y.marginLeft)+parseFloat(y.marginRight)||0,m=Math.abs(r.clientWidth-d.clientWidth-g);m<=Yr&&(s-=m)}else u<=Yr&&(s+=u);return{width:s,height:o,x:l,y:c}}const ml=new Set(["absolute","fixed"]);function bl(t,e){const n=kt(t,!0,e==="fixed"),r=n.top+t.clientTop,i=n.left+t.clientLeft,s=lt(t)?Gt(t):ot(1),o=t.clientWidth*s.x,l=t.clientHeight*s.y,c=i*s.x,u=r*s.y;return{width:o,height:l,x:c,y:u}}function Xr(t,e,n){let r;if(e==="viewport")r=yl(t,n);else if(e==="document")r=gl(ut(t));else if(nt(e))r=bl(e,n);else{const i=Ai(t);r={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return vi(r)}function Ci(t,e){const n=Ct(t);return n===e||!nt(n)||Jt(n)?!1:rt(n).position==="fixed"||Ci(n,e)}function vl(t,e){const n=e.get(t);if(n)return n;let r=pe(t,[],!1).filter(l=>nt(l)&&te(l)!=="body"),i=null;const s=rt(t).position==="fixed";let o=s?Ct(t):t;for(;nt(o)&&!Jt(o);){const l=rt(o),c=rr(o);!c&&l.position==="fixed"&&(i=null),(s?!c&&!i:!c&&l.position==="static"&&!!i&&ml.has(i.position)||be(o)&&!c&&Ci(t,o))?r=r.filter(h=>h!==o):i=l,o=Ct(o)}return e.set(t,r),r}function wl(t){let{element:e,boundary:n,rootBoundary:r,strategy:i}=t;const o=[...n==="clippingAncestors"?rn(e)?[]:vl(e,this._c):[].concat(n),r],l=o[0],c=o.reduce((u,h)=>{const d=Xr(e,h,i);return u.top=Wt(d.top,u.top),u.right=Hn(d.right,u.right),u.bottom=Hn(d.bottom,u.bottom),u.left=Wt(d.left,u.left),u},Xr(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function xl(t){const{width:e,height:n}=Mi(t);return{width:e,height:n}}function Ml(t,e,n){const r=lt(e),i=ut(e),s=n==="fixed",o=kt(t,!0,s,e);let l={scrollLeft:0,scrollTop:0};const c=ot(0);function u(){c.x=on(i)}if(r||!r&&!s)if((te(e)!=="body"||be(i))&&(l=sn(e)),r){const g=kt(e,!0,s,e);c.x=g.x+e.clientLeft,c.y=g.y+e.clientTop}else i&&u();s&&!r&&i&&u();const h=i&&!r&&!s?_i(i,l):ot(0),d=o.left+l.scrollLeft-c.x-h.x,y=o.top+l.scrollTop-c.y-h.y;return{x:d,y,width:o.width,height:o.height}}function Sn(t){return rt(t).position==="static"}function zr(t,e){if(!lt(t)||rt(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return ut(t)===n&&(n=n.ownerDocument.body),n}function Si(t,e){const n=K(t);if(rn(t))return n;if(!lt(t)){let i=Ct(t);for(;i&&!Jt(i);){if(nt(i)&&!Sn(i))return i;i=Ct(i)}return n}let r=zr(t,e);for(;r&&il(r)&&Sn(r);)r=zr(r,e);return r&&Jt(r)&&Sn(r)&&!rr(r)?n:r||cl(t)||n}const Al=async function(t){const e=this.getOffsetParent||Si,n=this.getDimensions,r=await n(t.floating);return{reference:Ml(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function _l(t){return rt(t).direction==="rtl"}const Cl={convertOffsetParentRelativeRectToViewportRelativeRect:dl,getDocumentElement:ut,getClippingRect:wl,getOffsetParent:Si,getElementRects:Al,getClientRects:pl,getDimensions:xl,getScale:Gt,isElement:nt,isRTL:_l};function Li(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Sl(t,e){let n=null,r;const i=ut(t);function s(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function o(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),s();const u=t.getBoundingClientRect(),{left:h,top:d,width:y,height:g}=u;if(l||e(),!y||!g)return;const m=Ne(d),v=Ne(i.clientWidth-(h+y)),S=Ne(i.clientHeight-(d+g)),_=Ne(h),L={rootMargin:-m+"px "+-v+"px "+-S+"px "+-_+"px",threshold:Wt(0,Hn(1,c))||1};let B=!0;function R(X){const O=X[0].intersectionRatio;if(O!==c){if(!B)return o();O?o(!1,O):r=setTimeout(()=>{o(!1,1e-7)},1e3)}O===1&&!Li(u,t.getBoundingClientRect())&&o(),B=!1}try{n=new IntersectionObserver(R,{...L,root:i.ownerDocument})}catch{n=new IntersectionObserver(R,L)}n.observe(t)}return o(!0),s}function Ll(t,e,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,u=sr(t),h=i||s?[...u?pe(u):[],...pe(e)]:[];h.forEach(_=>{i&&_.addEventListener("scroll",n,{passive:!0}),s&&_.addEventListener("resize",n)});const d=u&&l?Sl(u,n):null;let y=-1,g=null;o&&(g=new ResizeObserver(_=>{let[$]=_;$&&$.target===u&&g&&(g.unobserve(e),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var L;(L=g)==null||L.observe(e)})),n()}),u&&!c&&g.observe(u),g.observe(e));let m,v=c?kt(t):null;c&&S();function S(){const _=kt(t);v&&!Li(v,_)&&n(),v=_,m=requestAnimationFrame(S)}return n(),()=>{var _;h.forEach($=>{i&&$.removeEventListener("scroll",n),s&&$.removeEventListener("resize",n)}),d==null||d(),(_=g)==null||_.disconnect(),g=null,c&&cancelAnimationFrame(m)}}const El=(t,e,n)=>{const r=new Map,i={platform:Cl,...n},s={...i.platform,_c:r};return el(t,e,{...i,platform:s})};function $l(t){const e=t.renderRoot.querySelector(".inline-container-wrapper"),n=t.renderRoot.querySelector("[popover]");return Ll(e,n,()=>{n.matches(":popover-open")&&El(e,n,{strategy:"fixed"}).then(({x:i,y:s})=>{Object.assign(n.style,{left:`${i}px`,top:`${s}px`,width:`${e.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function Ei(t){t.renderRoot.querySelector("#eox-itemfilter-input-search").value="",yi({target:{value:""}},t)}function Bl(t,e){e.inlineMode&&t.stopPropagation()}function Pl(t){t.inlineMode&&(t.showDropdown=!0)}function Rl(t,e){e.inlineMode&&(t.stopPropagation(),e.showDropdown=!0)}function Dl(t,e){e.inlineMode&&t.key==="Escape"&&e.showDropdown&&(Ei(e),e.showDropdown=!1)}function Tl(t,e){e.inlineMode&&t.target instanceof HTMLElement&&t.target.tagName!=="DROPDOWN-FORM"&&t.target.tagName!=="EOX-ITEMFILTER"&&e.showDropdown&&(Ei(e),e.showDropdown=!1)}function kl(t,e){var n,r,i=0,s,o,l,c,u,h,d,y=t[0],g=t[1],m=e.length;for(n=0;n<m;n++){r=0;var v=e[n],S=v.length-1;if(h=v[0],h[0]!==v[S][0]&&h[1]!==v[S][1])throw new Error("First and last coordinates in a ring must be the same");for(o=h[0]-y,l=h[1]-g,r;r<S;r++){if(d=v[r+1],c=d[0]-y,u=d[1]-g,l===0&&u===0){if(c<=0&&o>=0||o<=0&&c>=0)return 0}else if(u>=0&&l<=0||u<=0&&l>=0){if(s=ia(o,c,l,u,0,0),s===0)return 0;(s>0&&u>0&&l<=0||s<0&&u<=0&&l>0)&&i++}h=d,l=u,o=c}}return i%2!==0}function at(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if(t.type==="Feature"&&t.geometry!==null&&t.geometry.type==="Point")return[...t.geometry.coordinates];if(t.type==="Point")return[...t.coordinates]}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return[...t];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function Tt(t){if(Array.isArray(t))return t;if(t.type==="Feature"){if(t.geometry!==null)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function Zt(t){return t.type==="Feature"?t.geometry:t}function Ur(t,e){return t.type==="FeatureCollection"?"FeatureCollection":t.type==="GeometryCollection"?"GeometryCollection":t.type==="Feature"&&t.geometry!==null?t.geometry.type:t.type}function tt(t,e,n={}){if(!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");const r=at(t),i=Zt(e),s=i.type,o=e.bbox;let l=i.coordinates;if(o&&Ol(r,o)===!1)return!1;s==="Polygon"&&(l=[l]);let c=!1;for(var u=0;u<l.length;++u){const h=kl(r,l[u]);if(h===0)return!n.ignoreBoundary;h&&(c=!0)}return c}function Ol(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}class $i{constructor(e=[],n=Il){if(this.data=e,this.length=this.data.length,this.compare=n,this.length>0)for(let r=(this.length>>1)-1;r>=0;r--)this._down(r)}push(e){this.data.push(e),this.length++,this._up(this.length-1)}pop(){if(this.length===0)return;const e=this.data[0],n=this.data.pop();return this.length--,this.length>0&&(this.data[0]=n,this._down(0)),e}peek(){return this.data[0]}_up(e){const{data:n,compare:r}=this,i=n[e];for(;e>0;){const s=e-1>>1,o=n[s];if(r(i,o)>=0)break;n[e]=o,e=s}n[e]=i}_down(e){const{data:n,compare:r}=this,i=this.length>>1,s=n[e];for(;e<i;){let o=(e<<1)+1,l=n[o];const c=o+1;if(c<this.length&&r(n[c],l)<0&&(o=c,l=n[c]),r(l,s)>=0)break;n[e]=l,e=o}n[e]=s}}function Il(t,e){return t<e?-1:t>e?1:0}function Bi(t,e){return t.p.x>e.p.x?1:t.p.x<e.p.x?-1:t.p.y!==e.p.y?t.p.y>e.p.y?1:-1:1}function Nl(t,e){return t.rightSweepEvent.p.x>e.rightSweepEvent.p.x?1:t.rightSweepEvent.p.x<e.rightSweepEvent.p.x?-1:t.rightSweepEvent.p.y!==e.rightSweepEvent.p.y?t.rightSweepEvent.p.y<e.rightSweepEvent.p.y?1:-1:1}class Wr{constructor(e,n,r,i){this.p={x:e[0],y:e[1]},this.featureId=n,this.ringId=r,this.eventId=i,this.otherEvent=null,this.isLeftEndpoint=null}isSamePoint(e){return this.p.x===e.p.x&&this.p.y===e.p.y}}function jl(t,e){if(t.type==="FeatureCollection"){const n=t.features;for(let r=0;r<n.length;r++)Gr(n[r],e)}else Gr(t,e)}let je=0,Fe=0,He=0;function Gr(t,e){const n=t.type==="Feature"?t.geometry:t;let r=n.coordinates;(n.type==="Polygon"||n.type==="MultiLineString")&&(r=[r]),n.type==="LineString"&&(r=[[r]]);for(let i=0;i<r.length;i++)for(let s=0;s<r[i].length;s++){let o=r[i][s][0],l=null;Fe=Fe+1;for(let c=0;c<r[i][s].length-1;c++){l=r[i][s][c+1];const u=new Wr(o,je,Fe,He),h=new Wr(l,je,Fe,He+1);u.otherEvent=h,h.otherEvent=u,Bi(u,h)>0?(h.isLeftEndpoint=!0,u.isLeftEndpoint=!1):(u.isLeftEndpoint=!0,h.isLeftEndpoint=!1),e.push(u),e.push(h),o=l,He=He+1}}je=je+1}class Fl{constructor(e){this.leftSweepEvent=e,this.rightSweepEvent=e.otherEvent}}function Hl(t,e){if(t===null||e===null||t.leftSweepEvent.ringId===e.leftSweepEvent.ringId&&(t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.rightSweepEvent)||t.leftSweepEvent.isSamePoint(e.leftSweepEvent)||t.leftSweepEvent.isSamePoint(e.rightSweepEvent)))return!1;const n=t.leftSweepEvent.p.x,r=t.leftSweepEvent.p.y,i=t.rightSweepEvent.p.x,s=t.rightSweepEvent.p.y,o=e.leftSweepEvent.p.x,l=e.leftSweepEvent.p.y,c=e.rightSweepEvent.p.x,u=e.rightSweepEvent.p.y,h=(u-l)*(i-n)-(c-o)*(s-r),d=(c-o)*(r-l)-(u-l)*(n-o),y=(i-n)*(r-l)-(s-r)*(n-o);if(h===0)return!1;const g=d/h,m=y/h;if(g>=0&&g<=1&&m>=0&&m<=1){const v=n+g*(i-n),S=r+g*(s-r);return[v,S]}return!1}function ql(t,e){e=e||!1;const n=[],r=new $i([],Nl);for(;t.length;){const i=t.pop();if(i.isLeftEndpoint){const s=new Fl(i);for(let o=0;o<r.data.length;o++){const l=r.data[o];if(e&&l.leftSweepEvent.featureId===i.featureId)continue;const c=Hl(s,l);c!==!1&&n.push(c)}r.push(s)}else i.isLeftEndpoint===!1&&r.pop()}return n}function Yl(t,e){const n=new $i([],Bi);return jl(t,n),ql(n,e)}var Xl=Yl;function an(t,e,n={}){const{removeDuplicates:r=!0,ignoreSelfIntersections:i=!0}=n;let s=[];t.type==="FeatureCollection"?s=s.concat(t.features):t.type==="Feature"?s.push(t):(t.type==="LineString"||t.type==="Polygon"||t.type==="MultiLineString"||t.type==="MultiPolygon")&&s.push(Vt(t)),e.type==="FeatureCollection"?s=s.concat(e.features):e.type==="Feature"?s.push(e):(e.type==="LineString"||e.type==="Polygon"||e.type==="MultiLineString"||e.type==="MultiPolygon")&&s.push(Vt(e));const o=Xl(Q(s),i);let l=[];if(r){const c={};o.forEach(u=>{const h=u.join(",");c[h]||(c[h]=!0,l.push(u))})}else l=o;return Q(l.map(c=>ce(c)))}function or(t,e,n){if(t!==null)for(var r,i,s,o,l,c,u,h=0,d=0,y,g=t.type,m=g==="FeatureCollection",v=g==="Feature",S=m?t.features.length:1,_=0;_<S;_++){u=m?t.features[_].geometry:v?t.geometry:t,y=u?u.type==="GeometryCollection":!1,l=y?u.geometries.length:1;for(var $=0;$<l;$++){var L=0,B=0;if(o=y?u.geometries[$]:u,o!==null){c=o.coordinates;var R=o.type;switch(h=0,R){case null:break;case"Point":if(e(c,d,_,L,B)===!1)return!1;d++,L++;break;case"LineString":case"MultiPoint":for(r=0;r<c.length;r++){if(e(c[r],d,_,L,B)===!1)return!1;d++,R==="MultiPoint"&&L++}R==="LineString"&&L++;break;case"Polygon":case"MultiLineString":for(r=0;r<c.length;r++){for(i=0;i<c[r].length-h;i++){if(e(c[r][i],d,_,L,B)===!1)return!1;d++}R==="MultiLineString"&&L++,R==="Polygon"&&B++}R==="Polygon"&&L++;break;case"MultiPolygon":for(r=0;r<c.length;r++){for(B=0,i=0;i<c[r].length;i++){for(s=0;s<c[r][i].length-h;s++){if(e(c[r][i][s],d,_,L,B)===!1)return!1;d++}B++}L++}break;case"GeometryCollection":for(r=0;r<o.geometries.length;r++)if(or(o.geometries[r],e)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function ln(t,e){if(t.type==="Feature")e(t,0);else if(t.type==="FeatureCollection")for(var n=0;n<t.features.length&&e(t.features[n],n)!==!1;n++);}function zl(t,e,n){var r=n;return ln(t,function(i,s){s===0&&n===void 0?r=i:r=e(r,i,s)}),r}function Ul(t,e){var n,r,i,s,o,l,c,u,h,d,y=0,g=t.type==="FeatureCollection",m=t.type==="Feature",v=g?t.features.length:1;for(n=0;n<v;n++){for(l=g?t.features[n].geometry:m?t.geometry:t,u=g?t.features[n].properties:m?t.properties:{},h=g?t.features[n].bbox:m?t.bbox:void 0,d=g?t.features[n].id:m?t.id:void 0,c=l?l.type==="GeometryCollection":!1,o=c?l.geometries.length:1,i=0;i<o;i++){if(s=c?l.geometries[i]:l,s===null){if(e(null,y,u,h,d)===!1)return!1;continue}switch(s.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(s,y,u,h,d)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<s.geometries.length;r++)if(e(s.geometries[r],y,u,h,d)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}y++}}function Ot(t,e){Ul(t,function(n,r,i,s,o){var l=n===null?null:n.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return e(Vt(n,i,{bbox:s,id:o}),r,0)===!1?!1:void 0}var c;switch(l){case"MultiPoint":c="Point";break;case"MultiLineString":c="LineString";break;case"MultiPolygon":c="Polygon";break}for(var u=0;u<n.coordinates.length;u++){var h=n.coordinates[u],d={type:c,coordinates:h};if(e(Vt(d,i),r,u)===!1)return!1}})}function Yn(t,e={}){const n=Zt(t);switch(!e.properties&&t.type==="Feature"&&(e.properties=t.properties),n.type){case"Polygon":return Wl(n,e);case"MultiPolygon":return Gl(n,e);default:throw new Error("invalid poly")}}function Wl(t,e={}){const r=Zt(t).coordinates,i=e.properties?e.properties:t.type==="Feature"?t.properties:{};return Pi(r,i)}function Gl(t,e={}){const r=Zt(t).coordinates,i=e.properties?e.properties:t.type==="Feature"?t.properties:{},s=[];return r.forEach(o=>{s.push(Pi(o,i))}),Q(s)}function Pi(t,e){return t.length>1?sa(t,e):de(t[0],e)}function Kl(t,e,{ignoreSelfIntersections:n=!0}={ignoreSelfIntersections:!0}){let r=!0;return Ot(t,i=>{Ot(e,s=>{if(r===!1)return!1;r=Vl(i.geometry,s.geometry,n)})}),r}function Vl(t,e,n){switch(t.type){case"Point":switch(e.type){case"Point":return!tc(t.coordinates,e.coordinates);case"LineString":return!Kr(e,t);case"Polygon":return!tt(t,e)}break;case"LineString":switch(e.type){case"Point":return!Kr(t,e);case"LineString":return!Jl(t,e,n);case"Polygon":return!Vr(e,t,n)}break;case"Polygon":switch(e.type){case"Point":return!tt(e,t);case"LineString":return!Vr(t,e,n);case"Polygon":return!Zl(e,t,n)}}return!1}function Kr(t,e){for(let n=0;n<t.coordinates.length-1;n++)if(Ql(t.coordinates[n],t.coordinates[n+1],e.coordinates))return!0;return!1}function Jl(t,e,n){return an(t,e,{ignoreSelfIntersections:n}).features.length>0}function Vr(t,e,n){for(const i of e.coordinates)if(tt(i,t))return!0;return an(e,Yn(t),{ignoreSelfIntersections:n}).features.length>0}function Zl(t,e,n){for(const i of t.coordinates[0])if(tt(i,e))return!0;for(const i of e.coordinates[0])if(tt(i,t))return!0;return an(Yn(t),Yn(e),{ignoreSelfIntersections:n}).features.length>0}function Ql(t,e,n){const r=n[0]-t[0],i=n[1]-t[1],s=e[0]-t[0],o=e[1]-t[1];return r*o-i*s!==0?!1:Math.abs(s)>=Math.abs(o)?s>0?t[0]<=n[0]&&n[0]<=e[0]:e[0]<=n[0]&&n[0]<=t[0]:o>0?t[1]<=n[1]&&n[1]<=e[1]:e[1]<=n[1]&&n[1]<=t[1]}function tc(t,e){return t[0]===e[0]&&t[1]===e[1]}function ec(t,e,{ignoreSelfIntersections:n=!0}={}){let r=!1;return Ot(t,i=>{Ot(e,s=>{if(r===!0)return!0;r=!Kl(i.geometry,s.geometry,{ignoreSelfIntersections:n})})}),r}var nc=ec;function st(t,e={}){if(t.bbox!=null&&e.recompute!==!0)return t.bbox;const n=[1/0,1/0,-1/0,-1/0];return or(t,r=>{n[0]>r[0]&&(n[0]=r[0]),n[1]>r[1]&&(n[1]=r[1]),n[2]<r[0]&&(n[2]=r[0]),n[3]<r[1]&&(n[3]=r[1])}),n}function We(t,e,n={}){const r=at(t),i=Tt(e);for(let s=0;s<i.length-1;s++){let o=!1;if(n.ignoreEndVertices&&(s===0&&(o="start"),s===i.length-2&&(o="end"),s===0&&s+1===i.length-1&&(o="both")),rc(i[s],i[s+1],r,o,typeof n.epsilon>"u"?null:n.epsilon))return!0}return!1}function rc(t,e,n,r,i){const s=n[0],o=n[1],l=t[0],c=t[1],u=e[0],h=e[1],d=n[0]-l,y=n[1]-c,g=u-l,m=h-c,v=d*m-y*g;if(i!==null){if(Math.abs(v)>i)return!1}else if(v!==0)return!1;if(Math.abs(g)===Math.abs(m)&&Math.abs(g)===0)return r?!1:n[0]===t[0]&&n[1]===t[1];if(r){if(r==="start")return Math.abs(g)>=Math.abs(m)?g>0?l<s&&s<=u:u<=s&&s<l:m>0?c<o&&o<=h:h<=o&&o<c;if(r==="end")return Math.abs(g)>=Math.abs(m)?g>0?l<=s&&s<u:u<s&&s<=l:m>0?c<=o&&o<h:h<o&&o<=c;if(r==="both")return Math.abs(g)>=Math.abs(m)?g>0?l<s&&s<u:u<s&&s<l:m>0?c<o&&o<h:h<o&&o<c}else return Math.abs(g)>=Math.abs(m)?g>0?l<=s&&s<=u:u<=s&&s<=l:m>0?c<=o&&o<=h:h<=o&&o<=c;return!1}function ic(t,e,n,r,i){Ri(t,e,n||0,r||t.length-1,i||sc)}function Ri(t,e,n,r,i){for(;r>n;){if(r-n>600){var s=r-n+1,o=e-n+1,l=Math.log(s),c=.5*Math.exp(2*l/3),u=.5*Math.sqrt(l*c*(s-c)/s)*(o-s/2<0?-1:1),h=Math.max(n,Math.floor(e-o*c/s+u)),d=Math.min(r,Math.floor(e+(s-o)*c/s+u));Ri(t,e,h,d,i)}var y=t[e],g=n,m=r;for(ae(t,n,e),i(t[r],y)>0&&ae(t,n,r);g<m;){for(ae(t,g,m),g++,m--;i(t[g],y)<0;)g++;for(;i(t[m],y)>0;)m--}i(t[n],y)===0?ae(t,n,m):(m++,ae(t,m,r)),m<=e&&(n=m+1),e<=m&&(r=m-1)}}function ae(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function sc(t,e){return t<e?-1:t>e?1:0}let oc=class{constructor(e=9){this._maxEntries=Math.max(4,e),this._minEntries=Math.max(2,Math.ceil(this._maxEntries*.4)),this.clear()}all(){return this._all(this.data,[])}search(e){let n=this.data;const r=[];if(!Ye(e,n))return r;const i=this.toBBox,s=[];for(;n;){for(let o=0;o<n.children.length;o++){const l=n.children[o],c=n.leaf?i(l):l;Ye(e,c)&&(n.leaf?r.push(l):En(e,c)?this._all(l,r):s.push(l))}n=s.pop()}return r}collides(e){let n=this.data;if(!Ye(e,n))return!1;const r=[];for(;n;){for(let i=0;i<n.children.length;i++){const s=n.children[i],o=n.leaf?this.toBBox(s):s;if(Ye(e,o)){if(n.leaf||En(e,o))return!0;r.push(s)}}n=r.pop()}return!1}load(e){if(!(e&&e.length))return this;if(e.length<this._minEntries){for(let r=0;r<e.length;r++)this.insert(e[r]);return this}let n=this._build(e.slice(),0,e.length-1,0);if(!this.data.children.length)this.data=n;else if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){const r=this.data;this.data=n,n=r}this._insert(n,this.data.height-n.height-1,!0)}return this}insert(e){return e&&this._insert(e,this.data.height-1),this}clear(){return this.data=zt([]),this}remove(e,n){if(!e)return this;let r=this.data;const i=this.toBBox(e),s=[],o=[];let l,c,u;for(;r||s.length;){if(r||(r=s.pop(),c=s[s.length-1],l=o.pop(),u=!0),r.leaf){const h=ac(e,r.children,n);if(h!==-1)return r.children.splice(h,1),s.push(r),this._condense(s),this}!u&&!r.leaf&&En(r,i)?(s.push(r),o.push(l),l=0,c=r,r=r.children[0]):c?(l++,r=c.children[l],u=!1):r=null}return this}toBBox(e){return e}compareMinX(e,n){return e.minX-n.minX}compareMinY(e,n){return e.minY-n.minY}toJSON(){return this.data}fromJSON(e){return this.data=e,this}_all(e,n){const r=[];for(;e;)e.leaf?n.push(...e.children):r.push(...e.children),e=r.pop();return n}_build(e,n,r,i){const s=r-n+1;let o=this._maxEntries,l;if(s<=o)return l=zt(e.slice(n,r+1)),Xt(l,this.toBBox),l;i||(i=Math.ceil(Math.log(s)/Math.log(o)),o=Math.ceil(s/Math.pow(o,i-1))),l=zt([]),l.leaf=!1,l.height=i;const c=Math.ceil(s/o),u=c*Math.ceil(Math.sqrt(o));Jr(e,n,r,u,this.compareMinX);for(let h=n;h<=r;h+=u){const d=Math.min(h+u-1,r);Jr(e,h,d,c,this.compareMinY);for(let y=h;y<=d;y+=c){const g=Math.min(y+c-1,d);l.children.push(this._build(e,y,g,i-1))}}return Xt(l,this.toBBox),l}_chooseSubtree(e,n,r,i){for(;i.push(n),!(n.leaf||i.length-1===r);){let s=1/0,o=1/0,l;for(let c=0;c<n.children.length;c++){const u=n.children[c],h=Ln(u),d=uc(e,u)-h;d<o?(o=d,s=h<s?h:s,l=u):d===o&&h<s&&(s=h,l=u)}n=l||n.children[0]}return n}_insert(e,n,r){const i=r?e:this.toBBox(e),s=[],o=this._chooseSubtree(i,this.data,n,s);for(o.children.push(e),fe(o,i);n>=0&&s[n].children.length>this._maxEntries;)this._split(s,n),n--;this._adjustParentBBoxes(i,s,n)}_split(e,n){const r=e[n],i=r.children.length,s=this._minEntries;this._chooseSplitAxis(r,s,i);const o=this._chooseSplitIndex(r,s,i),l=zt(r.children.splice(o,r.children.length-o));l.height=r.height,l.leaf=r.leaf,Xt(r,this.toBBox),Xt(l,this.toBBox),n?e[n-1].children.push(l):this._splitRoot(r,l)}_splitRoot(e,n){this.data=zt([e,n]),this.data.height=e.height+1,this.data.leaf=!1,Xt(this.data,this.toBBox)}_chooseSplitIndex(e,n,r){let i,s=1/0,o=1/0;for(let l=n;l<=r-n;l++){const c=ue(e,0,l,this.toBBox),u=ue(e,l,r,this.toBBox),h=fc(c,u),d=Ln(c)+Ln(u);h<s?(s=h,i=l,o=d<o?d:o):h===s&&d<o&&(o=d,i=l)}return i||r-n}_chooseSplitAxis(e,n,r){const i=e.leaf?this.compareMinX:lc,s=e.leaf?this.compareMinY:cc,o=this._allDistMargin(e,n,r,i),l=this._allDistMargin(e,n,r,s);o<l&&e.children.sort(i)}_allDistMargin(e,n,r,i){e.children.sort(i);const s=this.toBBox,o=ue(e,0,n,s),l=ue(e,r-n,r,s);let c=qe(o)+qe(l);for(let u=n;u<r-n;u++){const h=e.children[u];fe(o,e.leaf?s(h):h),c+=qe(o)}for(let u=r-n-1;u>=n;u--){const h=e.children[u];fe(l,e.leaf?s(h):h),c+=qe(l)}return c}_adjustParentBBoxes(e,n,r){for(let i=r;i>=0;i--)fe(n[i],e)}_condense(e){for(let n=e.length-1,r;n>=0;n--)e[n].children.length===0?n>0?(r=e[n-1].children,r.splice(r.indexOf(e[n]),1)):this.clear():Xt(e[n],this.toBBox)}};function ac(t,e,n){if(!n)return e.indexOf(t);for(let r=0;r<e.length;r++)if(n(t,e[r]))return r;return-1}function Xt(t,e){ue(t,0,t.children.length,e,t)}function ue(t,e,n,r,i){i||(i=zt(null)),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(let s=e;s<n;s++){const o=t.children[s];fe(i,t.leaf?r(o):o)}return i}function fe(t,e){return t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY),t}function lc(t,e){return t.minX-e.minX}function cc(t,e){return t.minY-e.minY}function Ln(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function qe(t){return t.maxX-t.minX+(t.maxY-t.minY)}function uc(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function fc(t,e){const n=Math.max(t.minX,e.minX),r=Math.max(t.minY,e.minY),i=Math.min(t.maxX,e.maxX),s=Math.min(t.maxY,e.maxY);return Math.max(0,i-n)*Math.max(0,s-r)}function En(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function Ye(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function zt(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function Jr(t,e,n,r,i){const s=[e,n];for(;s.length;){if(n=s.pop(),e=s.pop(),n-e<=r)continue;const o=e+Math.ceil((n-e)/r/2)*r;ic(t,o,e,n,i),s.push(e,o,o,n)}}function $n(t){var e;if(t.bbox)e=t.bbox;else if(Array.isArray(t)&&t.length===4)e=t;else if(Array.isArray(t)&&t.length===6)e=[t[0],t[1],t[3],t[4]];else if(t.type==="Feature")e=st(t);else if(t.type==="FeatureCollection")e=st(t);else throw new Error("invalid geojson");return{minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}}var hc=class{constructor(t=9){this.tree=new oc(t),this.tree.toBBox=$n}insert(t){if(t.type!=="Feature")throw new Error("invalid feature");return t.bbox=t.bbox?t.bbox:st(t),this.tree.insert(t),this}load(t){var e=[];return Array.isArray(t)?t.forEach(function(n){if(n.type!=="Feature")throw new Error("invalid features");n.bbox=n.bbox?n.bbox:st(n),e.push(n)}):ln(t,function(n){if(n.type!=="Feature")throw new Error("invalid features");n.bbox=n.bbox?n.bbox:st(n),e.push(n)}),this.tree.load(e),this}remove(t,e){if(t.type!=="Feature")throw new Error("invalid feature");return t.bbox=t.bbox?t.bbox:st(t),this.tree.remove(t,e),this}clear(){return this.tree.clear(),this}search(t){var e=this.tree.search($n(t));return Q(e)}collides(t){return this.tree.collides($n(t))}all(){const t=this.tree.all();return Q(t)}toJSON(){return this.tree.toJSON()}fromJSON(t){return this.tree.fromJSON(t),this}};function Di(t){return new hc(t)}function dc(t,e){if(e=e??{},!oa(e))throw new Error("options is invalid");var n=e.precision,r=e.coordinates,i=e.mutate;if(n=n==null||isNaN(n)?6:n,r=r==null||isNaN(r)?3:r,!t)throw new Error("<geojson> is required");if(typeof n!="number")throw new Error("<precision> must be a number");if(typeof r!="number")throw new Error("<coordinates> must be a number");(i===!1||i===void 0)&&(t=JSON.parse(JSON.stringify(t)));var s=Math.pow(10,n);return or(t,function(o){pc(o,s,r)}),t}function pc(t,e,n){t.length>n&&t.splice(n,t.length);for(var r=0;r<t.length;r++)t[r]=Math.round(t[r]*e)/e;return t}function gc(t){if(!t)throw new Error("geojson is required");const e=[];return Ot(t,n=>{yc(n,e)}),Q(e)}function yc(t,e){let n=[];const r=t.geometry;if(r!==null){switch(r.type){case"Polygon":n=Tt(r);break;case"LineString":n=[Tt(r)]}n.forEach(i=>{mc(i,t.properties).forEach(o=>{o.id=e.length,e.push(o)})})}}function mc(t,e){const n=[];return t.reduce((r,i)=>{const s=de([r,i],e);return s.bbox=bc(r,i),n.push(s),i}),n}function bc(t,e){const n=t[0],r=t[1],i=e[0],s=e[1],o=n<i?n:i,l=r<s?r:s,c=n>i?n:i,u=r>s?r:s;return[o,l,c,u]}function Bn(t,e,n={}){var r=at(t),i=at(e),s=Ut(i[1]-r[1]),o=Ut(i[0]-r[0]),l=Ut(r[1]),c=Ut(i[1]),u=Math.pow(Math.sin(s/2),2)+Math.pow(Math.sin(o/2),2)*Math.cos(l)*Math.cos(c);return aa(2*Math.atan2(Math.sqrt(u),Math.sqrt(1-u)),n.units)}var vc=Object.defineProperty,wc=Object.defineProperties,xc=Object.getOwnPropertyDescriptors,Zr=Object.getOwnPropertySymbols,Mc=Object.prototype.hasOwnProperty,Ac=Object.prototype.propertyIsEnumerable,Qr=(t,e,n)=>e in t?vc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,_c=(t,e)=>{for(var n in e||(e={}))Mc.call(e,n)&&Qr(t,n,e[n]);if(Zr)for(var n of Zr(e))Ac.call(e,n)&&Qr(t,n,e[n]);return t},Cc=(t,e)=>wc(t,xc(e));function Sc(t,e,n={}){if(!t||!e)throw new Error("lines and inputPoint are required arguments");const r=at(e);let i=ce([1/0,1/0],{lineStringIndex:-1,segmentIndex:-1,totalDistance:-1,lineDistance:-1,segmentDistance:-1,pointDistance:1/0,multiFeatureIndex:-1,index:-1,location:-1,dist:1/0}),s=0,o=0,l=-1;return Ot(t,function(c,u,h){l!==h&&(l=h,o=0);const d=Tt(c),y=d.length-2;for(let g=0;g<d.length-1;g++){const m=ce(d[g]),v=at(m),S=ce(d[g+1]),_=at(S),$=Bn(m,S,n);let L,B;_[0]===r[0]&&_[1]===r[1]?[L,B]=[_,!0]:v[0]===r[0]&&v[1]===r[1]?[L,B]=[v,!1]:[L,B]=$c(v,_,r);const R=Bn(e,L,n);if(R<i.properties.pointDistance){const X=Bn(m,L,n);i=ce(L,{lineStringIndex:h,segmentIndex:B&&g+1<=y?g+1:g,totalDistance:s+X,lineDistance:o+X,segmentDistance:X,pointDistance:R,multiFeatureIndex:-1,index:-1,location:-1,dist:1/0}),i.properties=Cc(_c({},i.properties),{multiFeatureIndex:i.properties.lineStringIndex,index:i.properties.segmentIndex,location:i.properties.totalDistance,dist:i.properties.pointDistance})}s+=$,o+=$}}),i}function Rt(t,e){const[n,r,i]=t,[s,o,l]=e;return n*s+r*o+i*l}function le(t,e){const[n,r,i]=t,[s,o,l]=e;return[r*l-i*o,i*s-n*l,n*o-r*s]}function Lc(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2))}function ti(t){const e=Lc(t);return[t[0]/e,t[1]/e,t[2]/e]}function Pn(t){const e=Ut(t[1]),n=Ut(t[0]);return[Math.cos(e)*Math.cos(n),Math.cos(e)*Math.sin(n),Math.sin(e)]}function Ec(t){const[e,n,r]=t,i=Math.min(Math.max(r,-1),1),s=kr(Math.asin(i));return[kr(Math.atan2(n,e)),s]}function $c(t,e,n){const r=Pn(t),i=Pn(e),s=Pn(n),o=le(r,i);if(o[0]===0&&o[1]===0&&o[2]===0)return Rt(r,i)>0?[[...e],!0]:[[...n],!1];const l=le(o,s);if(l[0]===0&&l[1]===0&&l[2]===0)return[[...e],!0];const c=le(l,o),u=ti(c),h=[-u[0],-u[1],-u[2]],d=Rt(s,u)>Rt(s,h)?u:h,y=ti(o),g=Rt(le(r,d),y),m=Rt(le(d,i),y);return g>=0&&m>=0?[Ec(d),!1]:Rt(r,s)>Rt(i,s)?[[...t],!1]:[[...e],!0]}function Bc(t,e){if(!t)throw new Error("line is required");if(!e)throw new Error("splitter is required");const n=Ur(t),r=Ur(e);if(n!=="LineString")throw new Error("line must be LineString");if(r==="FeatureCollection")throw new Error("splitter cannot be a FeatureCollection");if(r==="GeometryCollection")throw new Error("splitter cannot be a GeometryCollection");var i=dc(e,{precision:7});switch(t.type!=="Feature"&&(t=Vt(t)),r){case"Point":return Xn(t,i);case"MultiPoint":return ei(t,i);case"LineString":case"MultiLineString":case"Polygon":case"MultiPolygon":return ei(t,an(t,i,{ignoreSelfIntersections:!0}))}}function ei(t,e){var n=[],r=Di();return Ot(e,function(i){if(n.forEach(function(l,c){l.id=c}),!n.length)n=Xn(t,i).features,r.load(Q(n));else{var s=r.search(i);if(s.features.length){var o=Ti(i,s);n=n.filter(function(l){return l.id!==o.id}),r.remove(o),ln(Xn(o,i),function(l){n.push(l),r.insert(l)})}}}),Q(n)}function Xn(t,e){var n=[],r=Tt(t)[0],i=Tt(t)[t.geometry.coordinates.length-1];if(Rn(r,at(e))||Rn(i,at(e)))return Q([t]);var s=Di(),o=gc(t);s.load(o);var l=s.search(e);if(!l.features.length)return Q([t]);var c=Ti(e,l),u=[r],h=zl(o,function(d,y,g){var m=Tt(y)[1],v=at(e);return g===c.id?(d.push(v),n.push(de(d)),Rn(v,m)?[v]:[v,m]):(d.push(m),d)},u);return h.length>1&&n.push(de(h)),Q(n)}function Ti(t,e){if(!e.features.length)throw new Error("lines must contain features");if(e.features.length===1)return e.features[0];var n,r=1/0;return ln(e,function(i){var s=Sc(i,t),o=s.properties.dist;o<r&&(n=i,r=o)}),n}function Rn(t,e){return t[0]===e[0]&&t[1]===e[1]}function Pc(t,e){var n=Zt(t),r=Zt(e),i=n.type,s=r.type;switch(i){case"Point":switch(s){case"MultiPoint":return Rc(n,r);case"LineString":return We(n,r,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return tt(n,r,{ignoreBoundary:!0});default:throw new Error("feature2 "+s+" geometry not supported")}case"MultiPoint":switch(s){case"MultiPoint":return Dc(n,r);case"LineString":return Tc(n,r);case"Polygon":case"MultiPolygon":return kc(n,r);default:throw new Error("feature2 "+s+" geometry not supported")}case"LineString":switch(s){case"LineString":return Oc(n,r);case"Polygon":case"MultiPolygon":return Nc(n,r);default:throw new Error("feature2 "+s+" geometry not supported")}case"Polygon":switch(s){case"Polygon":case"MultiPolygon":return jc(n,r);default:throw new Error("feature2 "+s+" geometry not supported")}default:throw new Error("feature1 "+i+" geometry not supported")}}function Rc(t,e){var n,r=!1;for(n=0;n<e.coordinates.length;n++)if(Oi(e.coordinates[n],t.coordinates)){r=!0;break}return r}function Dc(t,e){for(var n=0;n<t.coordinates.length;n++){for(var r=!1,i=0;i<e.coordinates.length;i++)Oi(t.coordinates[n],e.coordinates[i])&&(r=!0);if(!r)return!1}return!0}function Tc(t,e){for(var n=!1,r=0;r<t.coordinates.length;r++){if(!We(t.coordinates[r],e))return!1;n||(n=We(t.coordinates[r],e,{ignoreEndVertices:!0}))}return n}function kc(t,e){for(var n=!0,r=!1,i=0;i<t.coordinates.length;i++){if(r=tt(t.coordinates[i],e),!r){n=!1;break}r=tt(t.coordinates[i],e,{ignoreBoundary:!0})}return n&&r}function Oc(t,e){for(var n=0;n<t.coordinates.length;n++)if(!We(t.coordinates[n],e))return!1;return!0}function Ic(t,e){const n=t.coordinates,r=[];for(let i=0;i<n.length-1;i++){const s=de([n[i],n[i+1]]),o=Bc(s,Vt(e));o.features.length===0?r.push(s):r.push(...o.features)}return Q(r)}function Nc(t,e){const n=st(e),r=st(t);if(!ki(n,r))return!1;for(const o of t.coordinates)if(!tt(o,e))return!1;let i=!1;const s=Ic(t,e);for(const o of s.features){const l=Fc(o.geometry.coordinates[0],o.geometry.coordinates[1]);if(!tt(l,e))return!1;!i&&tt(l,e,{ignoreBoundary:!0})&&(i=!0)}return i}function jc(t,e){var n=st(t),r=st(e);if(!ki(r,n))return!1;for(var i=0;i<t.coordinates[0].length;i++)if(!tt(t.coordinates[0][i],e))return!1;return!0}function ki(t,e){return!(t[0]>e[0]||t[2]<e[2]||t[1]>e[1]||t[3]<e[3])}function Oi(t,e){return t[0]===e[0]&&t[1]===e[1]}function Fc(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}var Hc=Pc;const qc=(t,e)=>e?nc(t,e):!0,Yc=(t,e)=>e?Hc(t,e):!0;function Xc(t,e="highlight",n="title"){const r=(i,s=[])=>{let o="",l=0,c=0;return s.forEach((u,h)=>{const d=u[1]+1;h&&c>u[0]||(c=u[1],o+=[i.substring(l,u[0]),`<mark class="${e}">`,i.substring(u[0],d),"</mark>"].join(""),l=d)}),o+=i.substring(l),o};return t.filter(({matches:i})=>i&&i.length).map(({item:i,matches:s})=>{const o={...i};return s.forEach(l=>{if(l.key!==n)return;const c=r(Vc(l.value),Jc(l.indices));o.highlightedText=c}),o})}let Ii;const zc=(t,e)=>{Ii=new Et(t,{threshold:.4,distance:50,ignoreLocation:!0,includeMatches:!0,useExtendedSearch:!0,...e})},Uc=async(t,e,n)=>{const r=Object.entries(e).filter(([,l])=>l.type==="text"||l.type==="select"||l.type==="multiselect").reduce((l,[c,u])=>{const h="$or",d=[],y=(g,m)=>{const v={};u.type==="text"?v[g]=`${m}`:v[c]=`="${g}"`,d.push(v)};return Object.entries(u.state).filter(([,g])=>g).forEach(([g,m])=>y(g,m)),d.length>0&&l.push({[h]:d}),l},[]);let i;if(!(r.length>0)&&n.matchAllWhenEmpty!==!1)i=t;else{const l={$and:[...r]},c=Ii.search(l);i=n.enableHighlighting?Xc(c,"highlight",n.titleProperty):c.map(u=>u.item)}const s=Object.entries(e).filter(([,l])=>l.type==="range").reduce((l,[c,u])=>(l[c]={min:u.state.min,max:u.state.max,format:u.format},l),{});if(Object.keys(s).length>0){const l=[];for(let c=0;c<i.length;c++){const u={};for(const[h,d]of Object.entries(s)){const y=m=>d.format==="date"?he(m).unix():m,g=W(h,i[c]);g?Array.isArray(g)?u[h]=s[h].min<=y(g[1])&&y(g[0])<=s[h].max:y(g)>=s[h].min&&y(g)<=s[h].max?u[h]=!0:u[h]=!1:u[h]=!0}Object.values(u).every(h=>!!h)&&l.push(i[c])}i=[...l]}const o=Object.entries(e).filter(([,l])=>l.type==="spatial").reduce((l,[c,u])=>(l[c]={geometry:u.state.geometry,mode:u.state.mode},l),{});if(Object.values(o).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let c=0;c<i.length;c++){const u={};for(const h of Object.keys(o)){const d=W(h,i[c]),y=o[h].mode||"within";d&&(y==="within"?Yc(d,o[h].geometry):qc(d,o[h].geometry))?u[h]=!0:u[h]=!1}Object.values(u).every(h=>!!h)&&l.push(i[c])}i=[...l]}return i};function Wc(t,e){return[{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}},{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...t&&{format:"GeoJSON"},...t&&{url:e}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]}]}function cn(t){if(!t.dirty)return null;switch(t.type){case"multiselect":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"range":t.state.min=t.min,t.state.max=t.max;break;case"select":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"spatial":t.state.geometry=void 0;break;case"text":t.keys.forEach(n=>{t.state[n]=void 0});break}return delete t.stringifiedState,delete t.dirty,t}function ni(t,e){return t*2+e}function Gc(t){return Object.keys(t).map(e=>({title:M`${t[e].title||t[e].key}:
      ${t[e].stringifiedState}`,key:e})).filter(e=>t[e.key].dirty)}function zn(t){return Object.values(t).map(e=>e.dirty).filter(e=>e).length>0}async function Kc(t,e,n){const r=n.externalFilter(t,e),i=typeof r=="string"||r instanceof String?r:r.url,s=typeof r=="object"&&"fetchFn"in r?await r.fetchFn(i):await fetch(i).then(async o=>await o.json());return r.key?W(r.key,s):s}function Ni(t,e,n){let r;if(t.detail?r=t.detail.target:r=t.target,r!=null&&r.classList.contains("details-filter")){if(!r.open||e!=null&&e.expandMultipleFilters)return;n.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(i=>{const s=i.shadowRoot.querySelector(".details-filter");s&&s!==r&&s.removeAttribute("open")})}else{if(!(r!=null&&r.open)||e!=null&&e.expandMultipleResults)return;n.querySelectorAll("details").forEach(i=>{i!==r&&i.removeAttribute("open")})}}function W(t,e){return typeof t=="function"?t(e):t!=null&&t.includes(".")?t.split(".").reduce((n,r)=>n&&n[r],e):e[t]}function Vc(t){return t.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}function Jc(t,{mergeAdjacent:e=!1}={}){if(!Array.isArray(t))return[];const n=t.map(([i,s])=>i<=s?[i,s]:[s,i]).sort((i,s)=>i[0]-s[0]||i[1]-s[1]),r=[];for(const[i,s]of n){if(r.length===0){r.push([i,s]);continue}const o=r[r.length-1];(e?i<=o[1]+1:i<=o[1])?s>o[1]&&(o[1]=s):r.push([i,s])}return r}var P,ji,Un,Wn,Fi,Gn,Kn,Hi,Vn,qi,Yi;class Zc extends ct{constructor(){super();H(this,P);this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=E(this,P,Fi).bind(this),this._handleKeyDown=E(this,P,Gn).bind(this)}static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}set showDropdown(n){this.renderRoot.querySelector("[popover]").togglePopover(n)}get showDropdown(){var n;return(n=this.renderRoot.querySelector("[popover]"))==null?void 0:n.matches(":popover-open")}connectedCallback(){super.connectedCallback(),this.inlineMode&&E(this,P,Un).call(this)}disconnectedCallback(){this.inlineMode&&E(this,P,Wn).call(this),super.disconnectedCallback()}_overlayCleanup(){}updateInline(){this.inlineMode&&this.requestUpdate()}updated(n){n.has("inlineMode")&&(this.inlineMode?E(this,P,Un).call(this):E(this,P,Wn).call(this))}render(){return M`
      <style>
        ${!this.unstyled&&er}
      </style>
      ${this.inlineMode?M`
            <div
              class="inline-container-wrapper"
              @click="${E(this,P,Kn)}"
            >
              <div class="inline-container square border" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips
                      .items=${Gc(this.filters)}
                      .controller=${{remove:n=>E(this,P,qi).call(this,n)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${I(zn(this.filters),()=>M`
                      <button
                        class="chip-close circle transparent small no-margin"
                        @click=${()=>this.dispatchEvent(new CustomEvent("reset"))}
                      >
                        ${this.unstyled?"x":M`
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
                  class="input-container field no-margin ${zn(this.filters)?"dirty-filter-input":""}"
                >
                  <input
                    autocomplete="off"
                    id="eox-itemfilter-input-search"
                    type="text"
                    @click="${E(this,P,Kn)}"
                    @focus="${E(this,P,Hi)}"
                    @input="${E(this,P,Yi)}"
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
                  @keydown="${E(this,P,Gn)}"
                  @click="${E(this,P,Vn)}"
                  @focus="${E(this,P,Vn)}"
                >
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `:M`<slot name="section"></slot>`}
    `}}P=new WeakSet,ji=function(){setTimeout(()=>this._overlayCleanup=$l(this))},Un=function(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),E(this,P,ji).call(this)},Wn=function(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()},Fi=function(n){Tl(n,this)},Gn=function(n){Dl(n,this)},Kn=function(n){Rl(n,this)},Hi=function(){Pl(this)},Vn=function(n){Bl(n,this)},qi=function(n){Ka(n,this)},Yi=function(n){yi(n,this)};customElements.define("eox-itemfilter-container",Zc);function Qc(t){const e=t.renderRoot.querySelector("input[type='text']");e.value="",cn(t.filterObject),t.requestUpdate()}function tu(t){const e=t.renderRoot.querySelector("input[type='text']");t.isValid=e.checkValidity(),t.filterObject.keys.forEach(n=>{t.filterObject.state[n]=e.value}),t.filterObject.dirty=!0,t.filterObject.stringifiedState=e.value,t.dispatchEvent(new CustomEvent("filter")),e.value===""&&t.reset()}const Jn="ddd, D MMM YYYY HH:mm:ss";function eu(t){if(t.filterObject=cn(t.filterObject),t.filterObject){const e=t.querySelector("tc-range-slider"),n=t.filterObject.min,r=t.filterObject.max;e.value1!==n&&(e.value1=n),e.value2!==r&&(e.value2=r)}t.requestUpdate()}function nu(t,e){const[n,r]=t.detail.values;(n!==e.filterObject.state.min||r!==e.filterObject.state.max)&&([e.filterObject.state.min,e.filterObject.state.max]=[n,r],e.filterObject.dirty=!0),e.filterObject.dirty&&(e.filterObject.stringifiedState=e.filterObject.format==="date"?`${he.unix(n).format(Jn)} - ${he.unix(r).format(Jn)}`:`${n} - ${r}`),e.dispatchEvent(new CustomEvent("filter")),n===e.filterObject.min&&r===e.filterObject.max?e.reset():e.requestUpdate()}function ru(t,e,n){const r=n.filterObject.format==="date",i=n.filterObject.state[t],s=r?he.unix(i).format(Jn):i;return M`<div class="range-${e}">${s}</div>`}function iu(t){su(-1,t),cn(t.filterObject),t.requestUpdate()}function su(t,e){e.selectedItems=[],ar(e),zi(e)}function Xi(t,e){const n=e.selectedItems.indexOf(t);n>=0?e.selectedItems=e.selectedItems.filter((r,i)=>i!==n):e.type==="multiselect"?e.selectedItems=[...e.selectedItems,t]:(e.selectedItems=[t],e.showSuggestions=!1),ar(e),zi(e)}function ou(t,e){t.target instanceof HTMLInputElement&&(e.query=t.target.value,e.showSuggestions=!0)}function au(t,e){switch(t.key){case"ArrowDown":e.highlightedIndex=Math.min(e.highlightedIndex+1,e.filteredSuggestions.length-1);break;case"ArrowUp":e.highlightedIndex=Math.max(e.highlightedIndex-1,0);break;case"Enter":e.highlightedIndex>=0&&Xi(e.filteredSuggestions[e.highlightedIndex],e);break;case"Escape":e.showSuggestions=!1;break}}function lu(t,e){(t.has("suggestions")||t.has("query"))&&ar(e)}function cu(t,e){var r;const n=((r=t.filterObject)==null?void 0:r.sort)||((i,s)=>i.toString().localeCompare(s.toString(),void 0,{numeric:!0}));return e.sort(n).map(i=>i)}function ar(t){var r,i,s;const e=(((r=t.filterObject)==null?void 0:r.filterKeys)||t.suggestions).map(o=>`${o}`);let n=e;t.query&&(n=new Et(e,{threshold:.4}).search(t.query).map(l=>l.item)),t.filteredSuggestions=(i=t.filterObject)!=null&&i.filterKeys?n:cu(t,n),(s=t.filterObject)!=null&&s.filterKeys&&(t.filterObject.state=e.reduce((o,l)=>(l in o||(o[l]=void 0),o),t.filterObject.state)),t.highlightedIndex=-1}function zi(t){Object.keys(t.filterObject.state).forEach(e=>{t.filterObject.state[e]=t.selectedItems.includes(e)}),t.filterObject.stringifiedState=Object.keys(t.filterObject.state).filter(e=>t.filterObject.state[e]).join(", ")||"",t.filterObject.dirty=t.filterObject.stringifiedState.length>0,t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}function uu(t){cn(t.filterObject),t.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),t.requestUpdate()}function fu(t){t.renderRoot.querySelector("#eox-map").innerHTML="",Ui(t)}function hu(t,e){e.filterObject.state.mode=t;const n=new CustomEvent("filter",{detail:{[e.filterObject.key]:{}}});e.dispatchEvent(n)}function Ui(t){const e=t.renderRoot.querySelector("#eox-map");e.innerHTML===""&&(e.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const n=t.geometry&&du(t.geometry),r=Wc(t.geometry,n);t.eoxMap=t.renderRoot.querySelector("eox-map"),setTimeout(()=>{t.eoxMap.layers=r;const i=s=>{const o=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:s.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});t.dispatchEvent(o)};t.eoxMap.interactions.drawInteraction.on("drawend",s=>{i(s.feature),t.eoxMap.removeInteraction("drawInteraction")}),t.eoxMap.interactions.drawInteraction_modify.on("modifyend",s=>{i(s.features.getArray()[0])})},1e3)}function du(t){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:t}]}))}`}var ye,Je;class pu extends ct{constructor(){super();H(this,ye,()=>{tu(this)});H(this,Je,n=>{n.key==="Enter"&&n.target.value&&this.results&&this.results.length===1&&(this.dispatchEvent(new CustomEvent("result",{detail:this.results[0]})),n.target.value="",F(this,ye).call(this))});oe(this,"debouncedInputHandler",en(F(this,ye),500,{leading:!0}));this.filterObject={},this.results=null,this.unstyled=!1,this.tabIndex=0,this.isValid=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},results:{state:!0,type:Array},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}reset(){Qc(this)}createRenderRoot(){return this}render(){return I(this.filterObject,()=>{var n;return M`
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
              @keydown=${F(this,Je)}
            />
          </div>
        </div>
        <small class="error-validation" style="margin-left: var(--list-padding)"
          >${this.filterObject.validation&&this.isValid===!1?this.filterObject.validation.message:""}</small
        >
      `})}}ye=new WeakMap,Je=new WeakMap;customElements.define("eox-itemfilter-text",pu);function gu(t,e,n){if(!e||typeof e=="string"&&e.trim()==="")return[];const r=n.config.aggregateResults;return e==="No category"?t.filter(i=>{const s=i[r];return Array.isArray(s)?s.filter(Boolean).length===0:!s}):t.filter(i=>{const s=i[r];if(Array.isArray(s)){if(s.filter(Boolean).length===0)return!1}else if(!s)return!1;let o;return n.filters[r]&&(o=Object.keys(n.filters[r]).filter(c=>n.filters[r].state[c])),(o!=null&&o.length?o.includes(e):!0)&&Array.isArray(s)?s.includes(e):s===e})}function yu(t,e){return M`
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
  `}function Wi(t,e){const n=t.results,r=e?t.aggregateResults(n,e):n,i=t.config,s=o=>{var l;return((l=t.selectedResult)==null?void 0:l[i.idProperty])===o[i.idProperty]?"highlighted":_t};return Tr`
    ${t.resultType==="cards"?Yt("<eox-layout fill-grid>"):Yt('<ul id="results" class="list no-space" part="results">')}
      ${ra(r,o=>o.id,o=>Tr`
        ${t.resultType==="cards"?Yt("<eox-layout-item"):Yt("<li")}
            class="${s(o)}"
            @click=${()=>{t.selectedResult===o?t.selectedResult=null:t.selectedResult=o,t.dispatchEvent(new CustomEvent("result",{detail:t.selectedResult}))}}
            @mouseenter=${()=>{t.dispatchEvent(new CustomEvent("mouseenter:result",{detail:o}))}}
            @mouseleave=${()=>{t.dispatchEvent(new CustomEvent("mouseleave:result",{detail:o}))}}
          >
            <nav id="${o.id}" class="responsive tiny-space">
              ${I(i.subTitleProperty||i.imageProperty,()=>M`
                  ${I(t.resultType==="cards",()=>W(i.imageProperty,o)?M`
                            <img
                              loading="lazy"
                              fetchpriority="low"
                              class="image"
                              src="${W(i.imageProperty,o)}"
                            />
                          `:M`
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
                          `,()=>M`
                      <i class="small">
                        ${W(i.imageProperty,o)?M`
                              <img
                                loading="lazy"
                                fetchpriority="low"
                                class="image"
                                src="${W(i.imageProperty,o)}"
                              />
                            `:M`
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
                      >${Oe(o.highlightedText||W(i.titleProperty,o).toString())}</span
                    >
                    ${I(!!W(i.subTitleProperty,o),()=>M`
                        <small class="subtitle no-line truncate"
                          >${Oe(W(i.subTitleProperty,o).toString())}</small
                        >
                      `)}
                  </div>
                `,()=>M`
                  <div class="small-line max truncate">
                    <span
                      class="title truncate ${o.highlightedText?"highlight-enabled":""}"
                      >${Oe(o.highlightedText||o[i.titleProperty])}</span
                    >
                  </div>
                `)}
              ${I(t.enableResultAction,()=>M`
                  <button
                    class="result-action square transparent primary-text small"
                    @click=${l=>{l.stopPropagation(),t.dispatchEvent(new CustomEvent("click:result-action",{detail:o}))}}
                  >
                    <icon class="small"
                      >${Oe(t.resultActionIcon)}</icon
                    >
                  </button>
                `)}
            </nav>
          </li>
        `)}
    ${t.resultType==="cards"?Yt("</eox-layout>"):Yt("</ul>")}
  `}var bt,Zn,Gi,Ki;class mu extends ct{constructor(){super();H(this,bt);this.config=null,this.results=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list",this.resultActionIcon=void 0}static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Array},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String},resultActionIcon:{attribute:!1,type:String}}}aggregateResults(n,r){return gu(n,r,this)}createRenderRoot(){return this}handleAccordion(n){Ni(n,this.config,this)}render(){return M`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${I(this.results.length<1,()=>M`<small class="no-results">No matching items</small>`,()=>_t)}
          ${I(this.config.aggregateResults,()=>tn(E(this,bt,Ki).call(this),n=>M`${I(this.aggregateResults(this.results,n).length===1&&this.config.autoSpreadSingle,()=>M`<div style="margin-left: -8px">
                        ${E(this,bt,Zn).call(this,n)}
                      </div>`,()=>E(this,bt,Gi).call(this,n))}`),()=>E(this,bt,Zn).call(this))}
        </div>
      </section>
    `}}bt=new WeakSet,Zn=function(n){return Wi(this,n)},Gi=function(n){return yu(n,this)},Ki=function(){const n=this.resultAggregation.filter(i=>this.aggregateResults(this.results,i).length);return this.aggregateResults(this.results,"No category").length>0&&n.push("No category"),n};customElements.define("eox-itemfilter-results",mu);var St,Ji,Zi,Qi;class Vi extends ct{constructor(){super();H(this,St);oe(this,"debouncedInputHandler",en(E(this,St,Qi),500,{leading:!0}));this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(n){lu(n,this)}reset(){iu(this)}firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(n=>this.filterObject.state[n]?n:null).filter(n=>!!n),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}createRenderRoot(){return this}render(){const n=this.type.includes("multi")?"checkbox":"radio",r=this.filteredSuggestions.length>5?"select-overflow scroll":_t;return M`
      <style>
        :host,
        :root {
          --select-filter-max-items: 5;
        }
      </style>
      ${I((this.filterObject.filterKeys||this.suggestions).length>=10,()=>M`<div class="autocomplete-container">
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
                @input=${E(this,St,Ji)}
                @keydown=${E(this,St,Zi)}
                @blur=${()=>this.showSuggestions=!1}
                @focus=${()=>this.showSuggestions=!0}
              />
            </div>
          </div>`)}
      <div class="select-container ${r}">
        <ul class="${this.type} list no-space">
          ${this.filteredSuggestions.map(i=>M`
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
    `}}St=new WeakSet,Ji=function(n){ou(n,this)},Zi=function(n){au(n,this)},Qi=function(n){Xi(n,this)},oe(Vi,"properties",{filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}});customElements.define("eox-itemfilter-select",Vi);var Nt,es,Qn;class ts extends ct{constructor(){super();H(this,Nt);this.filterObject={},this.tabIndex=0,this.inputHandler=E(this,Nt,es).bind(this),this.debouncedInputHandler=en(this.inputHandler,500,{leading:!1})}reset(){eu(this)}createRenderRoot(){return this}render(){return I(this.filterObject,()=>M`
        <div
          style="margin-left: var(--list-padding); display: flex; gap: .5rem; align-items: center;"
        >
          ${E(this,Nt,Qn).call(this,"min","before")}
          <tc-range-slider
            min="${this.filterObject.min}"
            max="${this.filterObject.max}"
            value1="${this.filterObject.state.min||this.filterObject.min}"
            value2="${this.filterObject.state.max||this.filterObject.max}"
            step="${this.filterObject.step||1}"
            @change=${this.debouncedInputHandler}
          ></tc-range-slider>
          ${E(this,Nt,Qn).call(this,"max","after")}
        </div>
      `)}}Nt=new WeakSet,es=function(n){nu(n,this)},Qn=function(n,r){return ru(n,r,this)},oe(ts,"properties",{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number}});customElements.define("eox-itemfilter-range",ts);var Ze,ns;class bu extends ct{constructor(){super();H(this,Ze);this.filterObject={},this.tabIndex=0}static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}reset(){uu(this)}createRenderRoot(){return this}render(){return I(this.filterObject,()=>{var n;return M`
        <div style="margin-left: var(--list-padding)">
          <nav class="vertical-margin small-margin wrap">
            ${tn(["intersects","within"],r=>M`
                <label class="radio small small-text">
                  <input
                    tabindex=${this.tabIndex}
                    type="radio"
                    name="mode"
                    .checked="${(this.filterObject.state.mode||"")===r||_t}"
                    value="${r}"
                    @click=${()=>E(this,Ze,ns).call(this,r)}
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
      `})}}Ze=new WeakSet,ns=function(n){hu(n,this)};customElements.define("eox-itemfilter-spatial",bu);var Qe,rs;class vu extends ct{constructor(){super();H(this,Qe);this.geometry=null,this.eoxMap=null}static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}firstUpdated(){E(this,Qe,rs).call(this)}reset(){fu(this)}render(){return M`<div id="eox-map"></div>`}}Qe=new WeakSet,rs=function(){Ui(this)};customElements.define("eox-itemfilter-spatial-filter",vu);function wu(t,e){e.renderRoot.querySelectorAll(".chip").forEach(n=>{n.classList.remove("highlighted")}),t.target instanceof HTMLElement&&t.target.classList.add("highlighted"),e.requestUpdate()}function xu(t,e){const{code:n,target:r}=t;r instanceof HTMLElement&&r.id!=="eox-itemfilter-input-search"||e.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(n)||(n==="Space"&&t.preventDefault(),["Escape","Space","Enter"].includes(n)||t.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(n)&&Mu(n,t.target.value??"",e))}function Mu(t,e,n){const r=n.renderRoot.querySelector(".chip.highlighted");if((t==="Escape"||e)&&r&&r.classList.remove("highlighted"),t==="Backspace"&&!e){if(n.items.length){r&&(r.querySelector(".chip-item-close").click(),n.items.splice(Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(r),1));const i=n.renderRoot.querySelectorAll(".chip")[n.renderRoot.querySelectorAll(".chip").length-1];i.classList.contains("highlighted")||i.classList.add("highlighted"),n.requestUpdate()}n._dispatchEvent()}if((t==="ArrowLeft"||t==="ArrowRight")&&!e){if(n.renderRoot.querySelectorAll(".chip").length<1)return;let i=0;const s=n.renderRoot.querySelector(".chip.highlighted");s&&(i=Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(s),s.classList.remove("highlighted")),i=i+(t==="ArrowLeft"?-1:1),t==="ArrowLeft"&&i<0&&(i=n.renderRoot.querySelectorAll(".chip").length-1),t==="ArrowRight"&&i>n.renderRoot.querySelectorAll(".chip").length-1&&(i=0),Array.from(n.renderRoot.querySelectorAll(".chip"))[i].classList.add("highlighted")}}var jt,tr,is;class Au extends ct{constructor(){super();H(this,jt);this.items={},this.controller={}}static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",E(this,jt,tr).bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",E(this,jt,tr).bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}render(){return M`
      <span class="chip-container">
        ${tn(this.items,n=>M`
            <span class="chip tiny-margin" @click=${E(this,jt,is).bind(this)}>
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
    `}}jt=new WeakSet,tr=function(n){xu(n,this)},is=function(n){wu(n,this)};customElements.define("eox-itemfilter-chips",Au);const _u=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),ri=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","expandMultipleFilters","expandResults","expandMultipleResults","items"];var Cu=200,lr="__lodash_hash_undefined__",Su=1/0,Lu="[object Function]",Eu="[object GeneratorFunction]",$u=/[\\^$.*+?()[\]{}|]/g,Bu=/^\[object .+?Constructor\]$/,Pu=typeof At=="object"&&At&&At.Object===Object&&At,Ru=typeof self=="object"&&self&&self.Object===Object&&self,cr=Pu||Ru||Function("return this")();function Du(t,e){var n=t?t.length:0;return!!n&&ku(t,e,0)>-1}function Tu(t,e,n,r){for(var i=t.length,s=n+-1;++s<i;)if(e(t[s],s,t))return s;return-1}function ku(t,e,n){if(e!==e)return Tu(t,Ou,n);for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}function Ou(t){return t!==t}function Iu(t,e){return t.has(e)}function Nu(t,e){return t==null?void 0:t[e]}function ju(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch{}return e}function ss(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var Fu=Array.prototype,Hu=Function.prototype,os=Object.prototype,Dn=cr["__core-js_shared__"],ii=function(){var t=/[^.]+$/.exec(Dn&&Dn.keys&&Dn.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),as=Hu.toString,ur=os.hasOwnProperty,qu=os.toString,Yu=RegExp("^"+as.call(ur).replace($u,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Xu=Fu.splice,zu=fr(cr,"Map"),Tn=fr(cr,"Set"),ge=fr(Object,"create");function It(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Uu(){this.__data__=ge?ge(null):{}}function Wu(t){return this.has(t)&&delete this.__data__[t]}function Gu(t){var e=this.__data__;if(ge){var n=e[t];return n===lr?void 0:n}return ur.call(e,t)?e[t]:void 0}function Ku(t){var e=this.__data__;return ge?e[t]!==void 0:ur.call(e,t)}function Vu(t,e){var n=this.__data__;return n[t]=ge&&e===void 0?lr:e,this}It.prototype.clear=Uu;It.prototype.delete=Wu;It.prototype.get=Gu;It.prototype.has=Ku;It.prototype.set=Vu;function ee(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Ju(){this.__data__=[]}function Zu(t){var e=this.__data__,n=un(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():Xu.call(e,n,1),!0}function Qu(t){var e=this.__data__,n=un(e,t);return n<0?void 0:e[n][1]}function tf(t){return un(this.__data__,t)>-1}function ef(t,e){var n=this.__data__,r=un(n,t);return r<0?n.push([t,e]):n[r][1]=e,this}ee.prototype.clear=Ju;ee.prototype.delete=Zu;ee.prototype.get=Qu;ee.prototype.has=tf;ee.prototype.set=ef;function ne(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function nf(){this.__data__={hash:new It,map:new(zu||ee),string:new It}}function rf(t){return fn(this,t).delete(t)}function sf(t){return fn(this,t).get(t)}function of(t){return fn(this,t).has(t)}function af(t,e){return fn(this,t).set(t,e),this}ne.prototype.clear=nf;ne.prototype.delete=rf;ne.prototype.get=sf;ne.prototype.has=of;ne.prototype.set=af;function Ge(t){var e=-1,n=t?t.length:0;for(this.__data__=new ne;++e<n;)this.add(t[e])}function lf(t){return this.__data__.set(t,lr),this}function cf(t){return this.__data__.has(t)}Ge.prototype.add=Ge.prototype.push=lf;Ge.prototype.has=cf;function un(t,e){for(var n=t.length;n--;)if(mf(t[n][0],e))return n;return-1}function uf(t){if(!ls(t)||pf(t))return!1;var e=bf(t)||ju(t)?Yu:Bu;return e.test(gf(t))}function ff(t,e,n){var r=-1,i=Du,s=t.length,o=!0,l=[],c=l;if(s>=Cu){var u=hf(t);if(u)return ss(u);o=!1,i=Iu,c=new Ge}else c=l;t:for(;++r<s;){var h=t[r],d=h;if(h=h!==0?h:0,o&&d===d){for(var y=c.length;y--;)if(c[y]===d)continue t;l.push(h)}else i(c,d,n)||(c!==l&&c.push(d),l.push(h))}return l}var hf=Tn&&1/ss(new Tn([,-0]))[1]==Su?function(t){return new Tn(t)}:vf;function fn(t,e){var n=t.__data__;return df(e)?n[typeof e=="string"?"string":"hash"]:n.map}function fr(t,e){var n=Nu(t,e);return uf(n)?n:void 0}function df(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function pf(t){return!!ii&&ii in t}function gf(t){if(t!=null){try{return as.call(t)}catch{}try{return t+""}catch{}}return""}function yf(t){return t&&t.length?ff(t):[]}function mf(t,e){return t===e||t!==t&&e!==e}function bf(t){var e=ls(t)?qu.call(t):"";return e==Lu||e==Eu}function ls(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function vf(){}var wf=yf;const cs=si(wf);var Ke={exports:{}};Ke.exports;(function(t,e){var n=200,r="Expected a function",i="__lodash_hash_undefined__",s=1,o=2,l=9007199254740991,c="[object Arguments]",u="[object Array]",h="[object Boolean]",d="[object Date]",y="[object Error]",g="[object Function]",m="[object GeneratorFunction]",v="[object Map]",S="[object Number]",_="[object Object]",$="[object Promise]",L="[object RegExp]",B="[object Set]",R="[object String]",X="[object Symbol]",O="[object WeakMap]",et="[object ArrayBuffer]",z="[object DataView]",ve="[object Float32Array]",re="[object Float64Array]",vt="[object Int8Array]",hr="[object Int16Array]",U="[object Int32Array]",Ft="[object Uint8Array]",we="[object Uint8ClampedArray]",ds="[object Uint16Array]",ps="[object Uint32Array]",gs=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ys=/^\w*$/,ms=/^\./,bs=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,vs=/[\\^$.*+?()[\]{}|]/g,ws=/\\(\\)?/g,xs=/^\[object .+?Constructor\]$/,Ms=/^(?:0|[1-9]\d*)$/,D={};D[ve]=D[re]=D[vt]=D[hr]=D[U]=D[Ft]=D[we]=D[ds]=D[ps]=!0,D[c]=D[u]=D[et]=D[h]=D[z]=D[d]=D[y]=D[g]=D[v]=D[S]=D[_]=D[L]=D[B]=D[R]=D[O]=!1;var dr=typeof At=="object"&&At&&At.Object===Object&&At,As=typeof self=="object"&&self&&self.Object===Object&&self,wt=dr||As||Function("return this")(),pr=e&&!e.nodeType&&e,gr=pr&&!0&&t&&!t.nodeType&&t,_s=gr&&gr.exports===pr,yr=_s&&dr.process,mr=function(){try{return yr&&yr.binding("util")}catch{}}(),br=mr&&mr.isTypedArray;function Cs(a,f){for(var p=-1,b=a?a.length:0,x=Array(b);++p<b;)x[p]=f(a[p],p,a);return x}function Ss(a,f){for(var p=-1,b=f.length,x=a.length;++p<b;)a[x+p]=f[p];return a}function Ls(a,f){for(var p=-1,b=a?a.length:0;++p<b;)if(f(a[p],p,a))return!0;return!1}function Es(a){return function(f){return f==null?void 0:f[a]}}function $s(a,f){for(var p=-1,b=Array(a);++p<a;)b[p]=f(p);return b}function Bs(a){return function(f){return a(f)}}function Ps(a,f){return a==null?void 0:a[f]}function hn(a){var f=!1;if(a!=null&&typeof a.toString!="function")try{f=!!(a+"")}catch{}return f}function Rs(a){var f=-1,p=Array(a.size);return a.forEach(function(b,x){p[++f]=[x,b]}),p}function Ds(a,f){return function(p){return a(f(p))}}function Ts(a){var f=-1,p=Array(a.size);return a.forEach(function(b){p[++f]=b}),p}var ks=Array.prototype,Os=Function.prototype,xe=Object.prototype,dn=wt["__core-js_shared__"],vr=function(){var a=/[^.]+$/.exec(dn&&dn.keys&&dn.keys.IE_PROTO||"");return a?"Symbol(src)_1."+a:""}(),wr=Os.toString,ft=xe.hasOwnProperty,Ht=xe.toString,Is=RegExp("^"+wr.call(ft).replace(vs,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Me=wt.Symbol,xr=wt.Uint8Array,Ns=xe.propertyIsEnumerable,js=ks.splice,Mr=Me?Me.isConcatSpreadable:void 0,Fs=Ds(Object.keys,Object),pn=qt(wt,"DataView"),ie=qt(wt,"Map"),gn=qt(wt,"Promise"),yn=qt(wt,"Set"),mn=qt(wt,"WeakMap"),se=qt(Object,"create"),Hs=Bt(pn),qs=Bt(ie),Ys=Bt(gn),Xs=Bt(yn),zs=Bt(mn),Ae=Me?Me.prototype:void 0,bn=Ae?Ae.valueOf:void 0,Ar=Ae?Ae.toString:void 0;function $t(a){var f=-1,p=a?a.length:0;for(this.clear();++f<p;){var b=a[f];this.set(b[0],b[1])}}function Us(){this.__data__=se?se(null):{}}function Ws(a){return this.has(a)&&delete this.__data__[a]}function Gs(a){var f=this.__data__;if(se){var p=f[a];return p===i?void 0:p}return ft.call(f,a)?f[a]:void 0}function Ks(a){var f=this.__data__;return se?f[a]!==void 0:ft.call(f,a)}function Vs(a,f){var p=this.__data__;return p[a]=se&&f===void 0?i:f,this}$t.prototype.clear=Us,$t.prototype.delete=Ws,$t.prototype.get=Gs,$t.prototype.has=Ks,$t.prototype.set=Vs;function ht(a){var f=-1,p=a?a.length:0;for(this.clear();++f<p;){var b=a[f];this.set(b[0],b[1])}}function Js(){this.__data__=[]}function Zs(a){var f=this.__data__,p=Ce(f,a);if(p<0)return!1;var b=f.length-1;return p==b?f.pop():js.call(f,p,1),!0}function Qs(a){var f=this.__data__,p=Ce(f,a);return p<0?void 0:f[p][1]}function to(a){return Ce(this.__data__,a)>-1}function eo(a,f){var p=this.__data__,b=Ce(p,a);return b<0?p.push([a,f]):p[b][1]=f,this}ht.prototype.clear=Js,ht.prototype.delete=Zs,ht.prototype.get=Qs,ht.prototype.has=to,ht.prototype.set=eo;function dt(a){var f=-1,p=a?a.length:0;for(this.clear();++f<p;){var b=a[f];this.set(b[0],b[1])}}function no(){this.__data__={hash:new $t,map:new(ie||ht),string:new $t}}function ro(a){return Se(this,a).delete(a)}function io(a){return Se(this,a).get(a)}function so(a){return Se(this,a).has(a)}function oo(a,f){return Se(this,a).set(a,f),this}dt.prototype.clear=no,dt.prototype.delete=ro,dt.prototype.get=io,dt.prototype.has=so,dt.prototype.set=oo;function _e(a){var f=-1,p=a?a.length:0;for(this.__data__=new dt;++f<p;)this.add(a[f])}function ao(a){return this.__data__.set(a,i),this}function lo(a){return this.__data__.has(a)}_e.prototype.add=_e.prototype.push=ao,_e.prototype.has=lo;function pt(a){this.__data__=new ht(a)}function co(){this.__data__=new ht}function uo(a){return this.__data__.delete(a)}function fo(a){return this.__data__.get(a)}function ho(a){return this.__data__.has(a)}function po(a,f){var p=this.__data__;if(p instanceof ht){var b=p.__data__;if(!ie||b.length<n-1)return b.push([a,f]),this;p=this.__data__=new dt(b)}return p.set(a,f),this}pt.prototype.clear=co,pt.prototype.delete=uo,pt.prototype.get=fo,pt.prototype.has=ho,pt.prototype.set=po;function go(a,f){var p=gt(a)||xn(a)?$s(a.length,String):[],b=p.length,x=!!b;for(var w in a)ft.call(a,w)&&!(x&&(w=="length"||Lr(w,b)))&&p.push(w);return p}function Ce(a,f){for(var p=a.length;p--;)if(Br(a[p][0],f))return p;return-1}var yo=Do(vo);function mo(a,f,p,b,x){var w=-1,C=a.length;for(p||(p=jo),x||(x=[]);++w<C;){var T=a[w];p(T)?Ss(x,T):x[x.length]=T}return x}var bo=To();function vo(a,f){return a&&bo(a,f,Re)}function _r(a,f){f=Le(f,a)?[f]:Cr(f);for(var p=0,b=f.length;a!=null&&p<b;)a=a[Ee(f[p++])];return p&&p==b?a:void 0}function wo(a){return Ht.call(a)}function xo(a,f){return a!=null&&f in Object(a)}function vn(a,f,p,b,x){return a===f?!0:a==null||f==null||!Be(a)&&!Pe(f)?a!==a&&f!==f:Mo(a,f,vn,p,b,x)}function Mo(a,f,p,b,x,w){var C=gt(a),T=gt(f),k=u,N=u;C||(k=xt(a),k=k==c?_:k),T||(N=xt(f),N=N==c?_:N);var q=k==_&&!hn(a),Y=N==_&&!hn(f),j=k==N;if(j&&!q)return w||(w=new pt),C||Wo(a)?Sr(a,f,p,b,x,w):ko(a,f,k,p,b,x,w);if(!(x&o)){var V=q&&ft.call(a,"__wrapped__"),J=Y&&ft.call(f,"__wrapped__");if(V||J){var Mt=V?a.value():a,yt=J?f.value():f;return w||(w=new pt),p(Mt,yt,b,x,w)}}return j?(w||(w=new pt),Oo(a,f,p,b,x,w)):!1}function Ao(a,f,p,b){var x=p.length,w=x;if(a==null)return!w;for(a=Object(a);x--;){var C=p[x];if(C[2]?C[1]!==a[C[0]]:!(C[0]in a))return!1}for(;++x<w;){C=p[x];var T=C[0],k=a[T],N=C[1];if(C[2]){if(k===void 0&&!(T in a))return!1}else{var q=new pt,Y;if(!(Y===void 0?vn(N,k,b,s|o,q):Y))return!1}}return!0}function _o(a){if(!Be(a)||Ho(a))return!1;var f=Pr(a)||hn(a)?Is:xs;return f.test(Bt(a))}function Co(a){return Pe(a)&&Mn(a.length)&&!!D[Ht.call(a)]}function So(a){return typeof a=="function"?a:a==null?Jo:typeof a=="object"?gt(a)?Bo(a[0],a[1]):$o(a):Zo(a)}function Lo(a){if(!qo(a))return Fs(a);var f=[];for(var p in Object(a))ft.call(a,p)&&p!="constructor"&&f.push(p);return f}function Eo(a,f){var p=-1,b=$e(a)?Array(a.length):[];return yo(a,function(x,w,C){b[++p]=f(x,w,C)}),b}function $o(a){var f=Io(a);return f.length==1&&f[0][2]?$r(f[0][0],f[0][1]):function(p){return p===a||Ao(p,a,f)}}function Bo(a,f){return Le(a)&&Er(f)?$r(Ee(a),f):function(p){var b=Ko(p,a);return b===void 0&&b===f?Vo(p,a):vn(f,b,void 0,s|o)}}function Po(a){return function(f){return _r(f,a)}}function Ro(a){if(typeof a=="string")return a;if(An(a))return Ar?Ar.call(a):"";var f=a+"";return f=="0"&&1/a==-1/0?"-0":f}function Cr(a){return gt(a)?a:Yo(a)}function Do(a,f){return function(p,b){if(p==null)return p;if(!$e(p))return a(p,b);for(var x=p.length,w=-1,C=Object(p);++w<x&&b(C[w],w,C)!==!1;);return p}}function To(a){return function(f,p,b){for(var x=-1,w=Object(f),C=b(f),T=C.length;T--;){var k=C[++x];if(p(w[k],k,w)===!1)break}return f}}function Sr(a,f,p,b,x,w){var C=x&o,T=a.length,k=f.length;if(T!=k&&!(C&&k>T))return!1;var N=w.get(a);if(N&&w.get(f))return N==f;var q=-1,Y=!0,j=x&s?new _e:void 0;for(w.set(a,f),w.set(f,a);++q<T;){var V=a[q],J=f[q];if(b)var Mt=C?b(J,V,q,f,a,w):b(V,J,q,a,f,w);if(Mt!==void 0){if(Mt)continue;Y=!1;break}if(j){if(!Ls(f,function(yt,Pt){if(!j.has(Pt)&&(V===yt||p(V,yt,b,x,w)))return j.add(Pt)})){Y=!1;break}}else if(!(V===J||p(V,J,b,x,w))){Y=!1;break}}return w.delete(a),w.delete(f),Y}function ko(a,f,p,b,x,w,C){switch(p){case z:if(a.byteLength!=f.byteLength||a.byteOffset!=f.byteOffset)return!1;a=a.buffer,f=f.buffer;case et:return!(a.byteLength!=f.byteLength||!b(new xr(a),new xr(f)));case h:case d:case S:return Br(+a,+f);case y:return a.name==f.name&&a.message==f.message;case L:case R:return a==f+"";case v:var T=Rs;case B:var k=w&o;if(T||(T=Ts),a.size!=f.size&&!k)return!1;var N=C.get(a);if(N)return N==f;w|=s,C.set(a,f);var q=Sr(T(a),T(f),b,x,w,C);return C.delete(a),q;case X:if(bn)return bn.call(a)==bn.call(f)}return!1}function Oo(a,f,p,b,x,w){var C=x&o,T=Re(a),k=T.length,N=Re(f),q=N.length;if(k!=q&&!C)return!1;for(var Y=k;Y--;){var j=T[Y];if(!(C?j in f:ft.call(f,j)))return!1}var V=w.get(a);if(V&&w.get(f))return V==f;var J=!0;w.set(a,f),w.set(f,a);for(var Mt=C;++Y<k;){j=T[Y];var yt=a[j],Pt=f[j];if(b)var Rr=C?b(Pt,yt,j,f,a,w):b(yt,Pt,j,a,f,w);if(!(Rr===void 0?yt===Pt||p(yt,Pt,b,x,w):Rr)){J=!1;break}Mt||(Mt=j=="constructor")}if(J&&!Mt){var De=a.constructor,Te=f.constructor;De!=Te&&"constructor"in a&&"constructor"in f&&!(typeof De=="function"&&De instanceof De&&typeof Te=="function"&&Te instanceof Te)&&(J=!1)}return w.delete(a),w.delete(f),J}function Se(a,f){var p=a.__data__;return Fo(f)?p[typeof f=="string"?"string":"hash"]:p.map}function Io(a){for(var f=Re(a),p=f.length;p--;){var b=f[p],x=a[b];f[p]=[b,x,Er(x)]}return f}function qt(a,f){var p=Ps(a,f);return _o(p)?p:void 0}var xt=wo;(pn&&xt(new pn(new ArrayBuffer(1)))!=z||ie&&xt(new ie)!=v||gn&&xt(gn.resolve())!=$||yn&&xt(new yn)!=B||mn&&xt(new mn)!=O)&&(xt=function(a){var f=Ht.call(a),p=f==_?a.constructor:void 0,b=p?Bt(p):void 0;if(b)switch(b){case Hs:return z;case qs:return v;case Ys:return $;case Xs:return B;case zs:return O}return f});function No(a,f,p){f=Le(f,a)?[f]:Cr(f);for(var b,x=-1,C=f.length;++x<C;){var w=Ee(f[x]);if(!(b=a!=null&&p(a,w)))break;a=a[w]}if(b)return b;var C=a?a.length:0;return!!C&&Mn(C)&&Lr(w,C)&&(gt(a)||xn(a))}function jo(a){return gt(a)||xn(a)||!!(Mr&&a&&a[Mr])}function Lr(a,f){return f=f??l,!!f&&(typeof a=="number"||Ms.test(a))&&a>-1&&a%1==0&&a<f}function Le(a,f){if(gt(a))return!1;var p=typeof a;return p=="number"||p=="symbol"||p=="boolean"||a==null||An(a)?!0:ys.test(a)||!gs.test(a)||f!=null&&a in Object(f)}function Fo(a){var f=typeof a;return f=="string"||f=="number"||f=="symbol"||f=="boolean"?a!=="__proto__":a===null}function Ho(a){return!!vr&&vr in a}function qo(a){var f=a&&a.constructor,p=typeof f=="function"&&f.prototype||xe;return a===p}function Er(a){return a===a&&!Be(a)}function $r(a,f){return function(p){return p==null?!1:p[a]===f&&(f!==void 0||a in Object(p))}}var Yo=wn(function(a){a=Go(a);var f=[];return ms.test(a)&&f.push(""),a.replace(bs,function(p,b,x,w){f.push(x?w.replace(ws,"$1"):b||p)}),f});function Ee(a){if(typeof a=="string"||An(a))return a;var f=a+"";return f=="0"&&1/a==-1/0?"-0":f}function Bt(a){if(a!=null){try{return wr.call(a)}catch{}try{return a+""}catch{}}return""}function Xo(a,f){return mo(zo(a,f))}function zo(a,f){var p=gt(a)?Cs:Eo;return p(a,So(f))}function wn(a,f){if(typeof a!="function"||f&&typeof f!="function")throw new TypeError(r);var p=function(){var b=arguments,x=f?f.apply(this,b):b[0],w=p.cache;if(w.has(x))return w.get(x);var C=a.apply(this,b);return p.cache=w.set(x,C),C};return p.cache=new(wn.Cache||dt),p}wn.Cache=dt;function Br(a,f){return a===f||a!==a&&f!==f}function xn(a){return Uo(a)&&ft.call(a,"callee")&&(!Ns.call(a,"callee")||Ht.call(a)==c)}var gt=Array.isArray;function $e(a){return a!=null&&Mn(a.length)&&!Pr(a)}function Uo(a){return Pe(a)&&$e(a)}function Pr(a){var f=Be(a)?Ht.call(a):"";return f==g||f==m}function Mn(a){return typeof a=="number"&&a>-1&&a%1==0&&a<=l}function Be(a){var f=typeof a;return!!a&&(f=="object"||f=="function")}function Pe(a){return!!a&&typeof a=="object"}function An(a){return typeof a=="symbol"||Pe(a)&&Ht.call(a)==X}var Wo=br?Bs(br):Co;function Go(a){return a==null?"":Ro(a)}function Ko(a,f,p){var b=a==null?void 0:_r(a,f);return b===void 0?p:b}function Vo(a,f){return a!=null&&No(a,f,xo)}function Re(a){return $e(a)?go(a):Lo(a)}function Jo(a){return a}function Zo(a){return Le(a)?Es(Ee(a)):Po(a)}t.exports=Xo})(Ke,Ke.exports);var xf=Ke.exports;const us=si(xf);function Mf(t,e,n){let r=[];t.filterProperties.length&&t.filterProperties.forEach(s=>{const o={},l=u=>s.format==="date"?he(u).unix():parseFloat(u);e.forEach(u=>{var h,d;if(s.type==="range"){const y=W(s.key,u);if(Array.isArray(y)){const g=[l(y[0]),l(y[1])];o.min=o.min!==void 0?Math.min(o.min,g[0]):g[0],o.max=o.max!==void 0?Math.max(o.max,g[1]):g[1]}else{const g=l(y);o.min=o.min!==void 0?Math.min(o.min,g):g,o.max=o.max!==void 0?Math.max(o.max,g):g}return}Array.isArray(u[s.key])?u[s.key].forEach(y=>{o[y]=void 0}):s.type==="spatial"?(o.geometry=((h=s==null?void 0:s.state)==null?void 0:h.geometry)||void 0,o.geometry&&(s.stringifiedState=o.geometry.type),o.mode=s.mode||"intersects"):(d=s.key)!=null&&d.includes(".")?cs(us(n.items,s.key)).filter(y=>y).forEach(y=>{o[y]=void 0}):o[u[s.key]]=void 0});const c=s.key||s.keys.join("|");n.filters[c]=Object.assign({type:s.type||"multiselect",dirty:s.state?Object.values(s.state).some(u=>u):void 0,key:c},s.type==="range"?{min:o.min,max:o.max,format:s.format}:{},s),n.filters[c].state=Object.assign({},o,s.state)}),t.matchAllWhenEmpty!==!1&&(n.results=n.sortResults(e),n.requestUpdate()),t.aggregateResults&&(r=Array.from(new Set(e.reduce((s,o)=>s.concat(o[t.aggregateResults]),[]))).filter(s=>s).sort((s,o)=>s.localeCompare(o)));const i=[];return Object.values(n.filters).forEach(s=>{s.type==="text"?s.keys.forEach(o=>{i.includes(o)||i.push(o)}):(s.type==="select"||s.type==="multiselect")&&(i.includes(s.key)||i.push(s.key))}),zc(e,Object.assign({keys:i},t.fuseConfig)),r}async function Af(t,e,n){let r;n.externalFilter?r=await Kc(e,n.filters,t):r=await Uc(e,n.filters,t),n.results=n.sortResults(r)}function _f(t,e,n){const r=`filter-${t.key}`.replace("|","-");switch(t.type){case"text":return M`<eox-itemfilter-text
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
      ></eox-itemfilter-text>`;case"multiselect":case"select":return M`
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
      `;case"range":return M`
        <eox-itemfilter-range
          id="${r}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-range>
      `;case"spatial":return M`
        <eox-itemfilter-spatial
          id="${r}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          @filter=${()=>n.search()}
        ></eox-itemfilter-spatial>
      `;default:return M``}}function Cf(t,e){return[...t].sort((n,r)=>W(e.titleProperty,n).toString().localeCompare(W(e.titleProperty,r)).toString())}function Sf(t,e,n){return M`
    ${I(t.dirty,()=>M`
        <button
          type="button"
          tabindex=${e}
          slot="reset-button"
          class="reset-icon icon square primary-text transparent small no-margin"
          @click=${r=>{const i=r.target.parentElement.querySelector("[slot=filter]");i&&typeof i.reset=="function"&&i.reset(),n.search(),n.requestUpdate()}}
        >
          ${n.unstyled?"Reset":M`
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
  `}function Lf(t){t.renderRoot.querySelectorAll("[data-type='filter']").forEach(e=>{typeof e.reset=="function"&&e.reset()}),t.search()}var me,Kt,Z,Qt,fs,hs;class Ef extends ct{constructor(){super();H(this,Qt);H(this,me,[]);H(this,Kt,[]);H(this,Z,_u);this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=en(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.enableResultAction=!1,this.resultActionIcon='<svg style="width: 24px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>click me!</title><path fill="currentColor" d="M11.5,11L17.88,16.37L17,16.55L16.36,16.67C15.73,16.8 15.37,17.5 15.65,18.07L15.92,18.65L17.28,21.59L15.86,22.25L14.5,19.32L14.24,18.74C13.97,18.15 13.22,17.97 12.72,18.38L12.21,18.78L11.5,19.35V11M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10" /></svg>',this.styleOverride="",this.unstyled=!1}static get properties(){return{items:{attribute:!1,type:Object},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{attribute:!1,type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{attribute:!1,type:Array},fuseConfig:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},enableResultAction:{attribute:!1,type:Boolean},resultActionIcon:{attribute:!1,type:String},styleOverride:{type:String},unstyled:{type:Boolean}}}apply(){ke(this,me,Mf(F(this,Z),F(this,Kt),this)),this.search()}async searchHandler(){await Af(F(this,Z),F(this,Kt),this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(n){return Cf(n,F(this,Z))}resetFilters(){Lf(this)}firstUpdated(n){var i;let r={};ri.map(s=>{r={...r,[s]:this[s]}}),ke(this,Z,r),ke(this,Kt,((i=this.items)==null?void 0:i.map((s,o)=>Object.assign({id:s[this.idProperty]||`item-${o}`},s)))||[]),this.apply()}updated(n){ri.map(r=>n.has(r)?(this.firstUpdated(void 0),!0):!1)}updateResult(n){this.selectedResult=n.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}mouseEnterResult(n){this.dispatchEvent(new CustomEvent("mouseenter:result",{detail:n.detail,bubbles:!0,composed:!0}))}mouseLeaveResult(n){this.dispatchEvent(new CustomEvent("mouseleave:result",{detail:n.detail,bubbles:!0,composed:!0}))}emitResultAction(n){this.dispatchEvent(new CustomEvent("click:result-action",{detail:n.detail,bubbles:!0,composed:!0}))}render(){var n;return M`
      <style>
        ${la}
        ${!this.unstyled&&er}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":_t}
        @submit="${r=>r.preventDefault()}"
      >
        ${I(this.filterProperties,()=>M`
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
                  ${I(!this.inlineMode,()=>M`
                      <nav class="title-nav">
                        <div class="max">
                          <slot name="filterstitle"
                            ><p><strong>Filters</strong></p></slot
                          >
                        </div>
                        ${I(!this.inlineMode&&F(this,Z).filterProperties&&!this.inlineMode&&F(this,Z).filterProperties&&zn(this.filters),()=>M`
                            <button
                              type="button"
                              id="filter-reset"
                              class="reset-icon border small"
                              data-cy="filter-reset"
                              @click=${()=>this.resetFilters()}
                            >
                              ${this.unstyled?_t:M`
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
                      ${tn(Object.values(this.filters),(r,i)=>M` <li class="no-padding">
                            <eox-itemfilter-expandcontainer
                              .filterObject=${r}
                              @details-toggled=${s=>Ni(s,F(this,Z),this)}
                              data-details="${r.key}"
                            >
                              ${E(this,Qt,hs).call(this,r,ni(i,1))}
                              ${E(this,Qt,fs).call(this,r,ni(i,2))}
                            </eox-itemfilter-expandcontainer>
                          </li>`)}
                    </ul>
                  </div>
                </section>
              </eox-itemfilter-container>
            </div>
          `)}
        ${I(((n=F(this,Z))==null?void 0:n.showResults)&&this.results,()=>M`
            <div class="small-space"></div>
            <eox-itemfilter-results
              .config=${F(this,Z)}
              .results=${this.results}
              .filters=${this.filters}
              .resultAggregation=${F(this,me)}
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
    `}}me=new WeakMap,Kt=new WeakMap,Z=new WeakMap,Qt=new WeakSet,fs=function(n,r){return _f(n,r,this)},hs=function(n,r){return Sf(n,r,this)};customElements.define("eox-itemfilter",Ef);export{Ef as EOxItemFilter};
