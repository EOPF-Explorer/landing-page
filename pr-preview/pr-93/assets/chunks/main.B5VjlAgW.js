var oa=Object.defineProperty;var Yr=t=>{throw TypeError(t)};var aa=(t,e,n)=>e in t?oa(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ce=(t,e,n)=>aa(t,typeof e!="symbol"?e+"":e,n),$n=(t,e,n)=>e.has(t)||Yr("Cannot "+n);var q=(t,e,n)=>($n(t,e,"read from private field"),n?n.call(t):e.get(t)),z=(t,e,n)=>e.has(t)?Yr("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),ue=(t,e,n,r)=>($n(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),R=(t,e,n)=>($n(t,e,"access private method"),n);import{a as ct,A as Ct,b as A}from"./lit-element.CBn2YVps.js";import{o as on}from"./map.DiiNQ3pp.js";import{n as O}from"./when.BR7zwNJC.js";import{e as la,a as ca}from"./addCommonStyleSheet.DtB6og58.js";import{d as ye}from"./dayjs.min.Ba62AOpW.js";import{_ as an}from"./index.BUIxO2d3.js";import{s as Wt,u as Xr}from"./static.DLFxBHrh.js";import{c as ua}from"./repeat.Duc9p3Ra.js";import{o as Ne}from"./unsafe-html.C2DIGSw-.js";import"./toolcool-range-slider.min.BBXDELo7.js";import{o as fa}from"./orient2d.DArCjZZA.js";import{f as Zt,a as nt,b as de,m as ha,l as me,i as da,d as Kt,r as pa,c as Wr}from"./index.CxojoGlr.js";import{g as yi,c as At}from"./commonjsHelpers.BosuxZz1.js";import"./directive.CvdRHFdJ.js";import"./directive-helpers.Bj3rQkfn.js";const ga=`
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
`;ca();const cr=`
${la}
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
summary > * {
  pointer-events: all;
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
`;var en,mi;class ya extends ct{constructor(){super();z(this,en);this.filterObject={},this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}render(){return A`
      <style>
        ${!this.unstyled&&cr}
      </style>

      ${O(this.filterObject.featured,()=>A`<slot name="filter"></slot>`,()=>A`<details
            @toggle="${R(this,en,mi)}"
            class="details-filter max-width"
            ?open=${this.filterObject.expanded||Ct}
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
    `}}en=new WeakSet,mi=function(n){this.dispatchEvent(new CustomEvent("details-toggled",{detail:n,bubbles:!0,composed:!0}))};customElements.define("eox-itemfilter-expandcontainer",ya);function Et(t){return Array.isArray?Array.isArray(t):bi(t)==="[object Array]"}function ma(t){if(typeof t=="string")return t;if(typeof t=="bigint")return t.toString();const e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function Hn(t){return t==null?"":ma(t)}function X(t){return typeof t=="string"}function Ue(t){return typeof t=="number"}function va(t){return t===!0||t===!1||ba(t)&&bi(t)=="[object Boolean]"}function vi(t){return typeof t=="object"}function ba(t){return vi(t)&&t!==null}function K(t){return t!=null}function Fe(t){return!t.trim().length}function bi(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const wa="Incorrect 'index' type",xa=t=>`Invalid value for key ${t}`,_a=t=>`Pattern length exceeds max of ${t}.`,Ma=t=>`Missing ${t} property in key`,Aa=t=>`Property 'weight' in key '${t}' must be a positive integer`,Ur=Object.prototype.hasOwnProperty;class Ca{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{const i=wi(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function wi(t){let e=null,n=null,r=null,i=1,s=null;if(X(t)||Et(t))r=t,e=Gr(t),n=qn(t);else{if(!Ur.call(t,"name"))throw new Error(Ma("name"));const o=t.name;if(r=o,Ur.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(Aa(o));e=Gr(o),n=qn(o),s=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:s}}function Gr(t){return Et(t)?t:t.split(".")}function qn(t){return Et(t)?t.join("."):t}function Sa(t,e){const n=[];let r=!1;const i=(s,o,l,c)=>{if(K(s))if(!o[l])n.push(c!==void 0?{v:s,i:c}:s);else{const u=o[l],f=s[u];if(!K(f))return;if(l===o.length-1&&(X(f)||Ue(f)||va(f)||typeof f=="bigint"))n.push(c!==void 0?{v:Hn(f),i:c}:Hn(f));else if(Et(f)){r=!0;for(let p=0,g=f.length;p<g;p+=1)i(f[p],o,l+1,p)}else o.length&&i(f,o,l+1,c)}};return i(t,X(e)?e.split("."):e,0),r?n:n[0]}const La={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Ea={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},$a={location:0,threshold:.6,distance:100},Ra={useExtendedSearch:!1,useTokenSearch:!1,getFn:Sa,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1},C=Object.freeze({...Ea,...La,...$a,...Ra}),Ba=/[^ ]+/g;function Pa(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const s=i.match(Ba).length;if(n.has(s))return n.get(s);const o=1/Math.pow(s,.5*t),l=parseFloat(Math.round(o*r)/r);return n.set(s,l),l},clear(){n.clear()}}}class ur{constructor({getFn:e=C.getFn,fieldNormWeight:n=C.fieldNormWeight}={}){this.norm=Pa(n,3),this.getFn=e,this.isCreated=!1,this.docs=[],this.keys=[],this._keysMap={},this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,X(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();X(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}removeAll(e){for(let n=e.length-1;n>=0;n-=1)this.records.splice(e[n],1);for(let n=0,r=this.records.length;n<r;n+=1)this.records[n].i=n}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!K(e)||Fe(e))return;const r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){const r={i:n,$:{}};this.keys.forEach((i,s)=>{const o=i.getFn?i.getFn(e):this.getFn(e,i.path);if(K(o)){if(Et(o)){const l=[];for(let c=0,u=o.length;c<u;c+=1){const f=o[c];if(K(f)){if(X(f)){if(!Fe(f)){const p={v:f,i:c,n:this.norm.get(f)};l.push(p)}}else if(K(f.v)){const p=X(f.v)?f.v:Hn(f.v);if(!Fe(p)){const g={v:p,i:f.i,n:this.norm.get(p)};l.push(g)}}}}r.$[s]=l}else if(X(o)&&!Fe(o)){const l={v:o,n:this.norm.get(o)};r.$[s]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys.map(({getFn:e,...n})=>n),records:this.records}}}function xi(t,e,{getFn:n=C.getFn,fieldNormWeight:r=C.fieldNormWeight}={}){const i=new ur({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(wi)),i.setSources(e),i.create(),i}function Da(t,{getFn:e=C.getFn,fieldNormWeight:n=C.fieldNormWeight}={}){const{keys:r,records:i}=t,s=new ur({getFn:e,fieldNormWeight:n});return s.setKeys(r),s.setIndexRecords(i),s}function ka(t=[],e=C.minMatchCharLength){const n=[];let r=-1,i=-1,s=0;for(let o=t.length;s<o;s+=1){const l=t[s];l&&r===-1?r=s:!l&&r!==-1&&(i=s-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[s-1]&&s-r>=e&&n.push([r,s-1]),n}const Ot=32;function Ta(t,e,n,{location:r=C.location,distance:i=C.distance,threshold:s=C.threshold,findAllMatches:o=C.findAllMatches,minMatchCharLength:l=C.minMatchCharLength,includeMatches:c=C.includeMatches,ignoreLocation:u=C.ignoreLocation}={}){if(e.length>Ot)throw new Error(_a(Ot));const f=e.length,p=t.length,g=Math.max(0,Math.min(r,p));let d=s,m=g;const b=(I,F)=>{const W=I/f;if(u)return W;const Rt=Math.abs(g-F);return i?W+Rt/i:Rt?1:W},x=l>1||c,M=x?Array(p):[];let E;for(;(E=t.indexOf(e,m))>-1;){const I=b(0,E);if(d=Math.min(I,d),m=E+f,x){let F=0;for(;F<f;)M[E+F]=1,F+=1}}m=-1;let S=[],$=1,B=f+p;const N=1<<f-1;for(let I=0;I<f;I+=1){let F=0,W=B;for(;F<W;)b(I,g+W)<=d?F=W:B=W,W=Math.floor((B-F)/2+F);B=W;let Rt=Math.max(1,g-W+1);const oe=o?p:Math.min(g+W,p)+f,wt=Array(oe+2);wt[oe+1]=(1<<I)-1;for(let V=oe;V>=Rt;V-=1){const zt=V-1,Ae=n[t[zt]];if(x&&(M[zt]=+!!Ae),wt[V]=(wt[V+1]<<1|1)&Ae,I&&(wt[V]|=(S[V+1]|S[V])<<1|1|S[V+1]),wt[V]&N&&($=b(I,zt),$<=d)){if(d=$,m=zt,m<=g)break;Rt=Math.max(1,2*g-m)}}if(b(I+1,g)>d)break;S=wt}const Z={isMatch:m>=0,score:Math.max(.001,$)};if(x){const I=ka(M,l);I.length?c&&(Z.indices=I):Z.isMatch=!1}return Z}function Oa(t){const e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}function fr(t){if(t.length<=1)return t;t.sort((n,r)=>n[0]-r[0]||n[1]-r[1]);const e=[t[0]];for(let n=1,r=t.length;n<r;n+=1){const i=e[e.length-1],s=t[n];s[0]<=i[1]+1?i[1]=Math.max(i[1],s[1]):e.push(s)}return e}const _i={ł:"l",Ł:"L",đ:"d",Đ:"D",ø:"o",Ø:"O",ħ:"h",Ħ:"H",ŧ:"t",Ŧ:"T",ı:"i",ß:"ss"},Ia=new RegExp("["+Object.keys(_i).join("")+"]","g"),ve=String.prototype.normalize?t=>t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,"").replace(Ia,e=>_i[e]):t=>t;class hr{constructor(e,{location:n=C.location,threshold:r=C.threshold,distance:i=C.distance,includeMatches:s=C.includeMatches,findAllMatches:o=C.findAllMatches,minMatchCharLength:l=C.minMatchCharLength,isCaseSensitive:c=C.isCaseSensitive,ignoreDiacritics:u=C.ignoreDiacritics,ignoreLocation:f=C.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:s,findAllMatches:o,minMatchCharLength:l,isCaseSensitive:c,ignoreDiacritics:u,ignoreLocation:f},e=c?e:e.toLowerCase(),e=u?ve(e):e,this.pattern=e,this.chunks=[],!this.pattern.length)return;const p=(d,m)=>{this.chunks.push({pattern:d,alphabet:Oa(d),startIndex:m})},g=this.pattern.length;if(g>Ot){let d=0;const m=g%Ot,b=g-m;for(;d<b;)p(this.pattern.substr(d,Ot),d),d+=Ot;if(m){const x=g-Ot;p(this.pattern.substr(x),x)}}else p(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,ignoreDiacritics:r,includeMatches:i}=this.options;if(e=n?e:e.toLowerCase(),e=r?ve(e):e,this.pattern===e){const b={isMatch:!0,score:0};return i&&(b.indices=[[0,e.length-1]]),b}const{location:s,distance:o,threshold:l,findAllMatches:c,minMatchCharLength:u,ignoreLocation:f}=this.options,p=[];let g=0,d=!1;this.chunks.forEach(({pattern:b,alphabet:x,startIndex:M})=>{const{isMatch:E,score:S,indices:$}=Ta(e,b,x,{location:s+M,distance:o,threshold:l,findAllMatches:c,minMatchCharLength:u,includeMatches:i,ignoreLocation:f});E&&(d=!0),g+=S,E&&$&&p.push(...$)});const m={isMatch:d,score:d?g/this.chunks.length:1};return d&&i&&(m.indices=fr(p)),m}}class $t{constructor(e){this.pattern=e}static isMultiMatch(e){return Kr(e,this.multiRegex)}static isSingleMatch(e){return Kr(e,this.singleRegex)}search(e){return{isMatch:!1,score:1}}}function Kr(t,e){const n=t.match(e);return n?n[1]:null}class ja extends $t{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Na extends $t{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class Fa extends $t{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Ha extends $t{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class qa extends $t{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class za extends $t{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Mi extends $t{constructor(e,{location:n=C.location,threshold:r=C.threshold,distance:i=C.distance,includeMatches:s=C.includeMatches,findAllMatches:o=C.findAllMatches,minMatchCharLength:l=C.minMatchCharLength,isCaseSensitive:c=C.isCaseSensitive,ignoreDiacritics:u=C.ignoreDiacritics,ignoreLocation:f=C.ignoreLocation}={}){super(e),this._bitapSearch=new hr(e,{location:n,threshold:r,distance:i,includeMatches:s,findAllMatches:o,minMatchCharLength:l,isCaseSensitive:c,ignoreDiacritics:u,ignoreLocation:f})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Ai extends $t{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],s=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+s,i.push([r,n-1]);const o=!!i.length;return{isMatch:o,score:o?0:1,indices:i}}}const zn=[ja,Ai,Fa,Ha,za,qa,Na,Mi],Vr=zn.length,Ya="\0",Xa="|";function Wa(t){const e=[],n=t.length;let r=0;for(;r<n;){for(;r<n&&t[r]===" ";)r++;if(r>=n)break;let i=r;for(;i<n&&t[i]!==" "&&t[i]!=='"';)i++;if(i<n&&t[i]==='"'){for(i++;i<n;){if(t[i]==='"'){const s=i+1;if(s>=n||t[s]===" "){i++;break}if(t[s]==="$"&&(s+1>=n||t[s+1]===" ")){i+=2;break}}i++}e.push(t.substring(r,i)),r=i}else{for(;i<n&&t[i]!==" ";)i++;e.push(t.substring(r,i)),r=i}}return e}function Ua(t,e={}){return t.replace(/\\\|/g,Ya).split(Xa).map(r=>{const i=r.replace(/\u0000/g,"|"),s=Wa(i.trim()).filter(l=>l&&!!l.trim()),o=[];for(let l=0,c=s.length;l<c;l+=1){const u=s[l];let f=!1,p=-1;for(;!f&&++p<Vr;){const g=zn[p],d=g.isMultiMatch(u);d&&(o.push(new g(d,e)),f=!0)}if(!f)for(p=-1;++p<Vr;){const g=zn[p],d=g.isSingleMatch(u);if(d){o.push(new g(d,e));break}}}return o})}const Ga=new Set([Mi.type,Ai.type]);class Ka{constructor(e,{isCaseSensitive:n=C.isCaseSensitive,ignoreDiacritics:r=C.ignoreDiacritics,includeMatches:i=C.includeMatches,minMatchCharLength:s=C.minMatchCharLength,ignoreLocation:o=C.ignoreLocation,findAllMatches:l=C.findAllMatches,location:c=C.location,threshold:u=C.threshold,distance:f=C.distance}={}){this.query=null,this.options={isCaseSensitive:n,ignoreDiacritics:r,includeMatches:i,minMatchCharLength:s,findAllMatches:l,ignoreLocation:o,location:c,threshold:u,distance:f},e=n?e:e.toLowerCase(),e=r?ve(e):e,this.pattern=e,this.query=Ua(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i,ignoreDiacritics:s}=this.options;e=i?e:e.toLowerCase(),e=s?ve(e):e;let o=0;const l=[];let c=0,u=!1;for(let f=0,p=n.length;f<p;f+=1){const g=n[f];l.length=0,o=0,u=!1;for(let d=0,m=g.length;d<m;d+=1){const b=g[d],{isMatch:x,indices:M,score:E}=b.search(e);if(x){o+=1,c+=E;const S=b.constructor.type;S.startsWith("inverse")&&(u=!0),r&&(Ga.has(S)?l.push(...M):l.push(M))}else{c=0,o=0,l.length=0,u=!1;break}}if(o){const d={isMatch:!0,score:c/o};return u&&(d.hasInverse=!0),r&&(d.indices=fr(l)),d}}return{isMatch:!1,score:1}}}const Yn=[];function dr(...t){Yn.push(...t)}function Ge(t,e){for(let n=0,r=Yn.length;n<r;n+=1){const i=Yn[n];if(i.condition(t,e))return new i(t,e)}return new hr(t,e)}const Ke={AND:"$and",OR:"$or"},Xn={PATH:"$path",PATTERN:"$val"},Wn=t=>!!(t[Ke.AND]||t[Ke.OR]),Va=t=>!!t[Xn.PATH],Ja=t=>!Et(t)&&vi(t)&&!Wn(t),Jr=t=>({[Ke.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Ci(t,e,{auto:n=!0}={}){const r=i=>{if(X(i)){const c={keyId:null,pattern:i};return n&&(c.searcher=Ge(i,e)),c}const s=Object.keys(i),o=Va(i);if(!o&&s.length>1&&!Wn(i))return r(Jr(i));if(Ja(i)){const c=o?i[Xn.PATH]:s[0],u=o?i[Xn.PATTERN]:i[c];if(!X(u))throw new Error(xa(c));const f={keyId:qn(c),pattern:u};return n&&(f.searcher=Ge(u,e)),f}const l={children:[],operator:s[0]};return s.forEach(c=>{const u=i[c];Et(u)&&u.forEach(f=>{l.children.push(r(f))})}),l};return Wn(t)||(t=Jr(t)),r(t)}function Un(t,{ignoreFieldNorm:e=C.ignoreFieldNorm}){let n=1;return t.forEach(({key:r,norm:i,score:s})=>{const o=r?r.weight:null;n*=Math.pow(s===0&&o?Number.EPSILON:s,(o||1)*(e?1:i))}),n}function Qa(t,{ignoreFieldNorm:e=C.ignoreFieldNorm}){t.forEach(n=>{n.score=Un(n.matches,{ignoreFieldNorm:e})})}class Za{constructor(e){this.limit=e,this.heap=[]}get size(){return this.heap.length}shouldInsert(e){return this.size<this.limit||e<this.heap[0].score}insert(e){this.size<this.limit?(this.heap.push(e),this._bubbleUp(this.size-1)):e.score<this.heap[0].score&&(this.heap[0]=e,this._sinkDown(0))}extractSorted(e){return this.heap.sort(e)}_bubbleUp(e){const n=this.heap;for(;e>0;){const r=e-1>>1;if(n[e].score<=n[r].score)break;const i=n[e];n[e]=n[r],n[r]=i,e=r}}_sinkDown(e){const n=this.heap,r=n.length;let i=e;do{e=i;const s=2*e+1,o=2*e+2;if(s<r&&n[s].score>n[i].score&&(i=s),o<r&&n[o].score>n[i].score&&(i=o),i!==e){const l=n[e];n[e]=n[i],n[i]=l}}while(i!==e)}}function tl(t,e){const n=t.matches;e.matches=[],K(n)&&n.forEach(r=>{if(!K(r.indices)||!r.indices.length)return;const{indices:i,value:s}=r,o={indices:i,value:s};r.key&&(o.key=r.key.src),r.idx>-1&&(o.refIndex=r.idx),e.matches.push(o)})}function el(t,e){e.score=t.score}function nl(t,e,{includeMatches:n=C.includeMatches,includeScore:r=C.includeScore}={}){const i=[];return n&&i.push(tl),r&&i.push(el),t.map(s=>{const{idx:o}=s,l={item:e[o],refIndex:o};return i.length&&i.forEach(c=>{c(s,l)}),l})}const rl=/\b\w+\b/g;function Gn({isCaseSensitive:t=!1,ignoreDiacritics:e=!1}={}){return{tokenize(n){return t||(n=n.toLowerCase()),e&&(n=ve(n)),n.match(rl)||[]}}}function il(t,e,n){const r=new Map,i=new Map;let s=0;function o(l,c,u,f){const p=n.tokenize(l);if(!p.length)return;s++;const g=new Map;for(const d of p)g.set(d,(g.get(d)||0)+1);for(const[d,m]of g){const b={docIdx:c,keyIdx:u,subIdx:f,tf:m};let x=r.get(d);x||(x=[],r.set(d,x)),x.push(b),i.set(d,(i.get(d)||0)+1)}}for(const l of t){const{i:c,v:u,$:f}=l;if(u!==void 0){o(u,c,-1,-1);continue}if(f)for(let p=0;p<e;p++){const g=f[p];if(g)if(Array.isArray(g))for(const d of g)o(d.v,c,p,d.i??-1);else o(g.v,c,p,-1)}}return{terms:r,fieldCount:s,df:i}}function sl(t,e,n,r){const{i,v:s,$:o}=e;function l(c,u,f){const p=r.tokenize(c);if(!p.length)return;t.fieldCount++;const g=new Map;for(const d of p)g.set(d,(g.get(d)||0)+1);for(const[d,m]of g){const b={docIdx:i,keyIdx:u,subIdx:f,tf:m};let x=t.terms.get(d);x||(x=[],t.terms.set(d,x)),x.push(b),t.df.set(d,(t.df.get(d)||0)+1)}}if(s!==void 0){l(s,-1,-1);return}if(o)for(let c=0;c<n;c++){const u=o[c];if(u)if(Array.isArray(u))for(const f of u)l(f.v,c,f.i??-1);else l(u.v,c,-1)}}function Qr(t,e){for(const[n,r]of t.terms){const i=r.filter(o=>o.docIdx!==e),s=r.length-i.length;s>0&&(t.fieldCount-=s,t.df.set(n,(t.df.get(n)||0)-s),i.length===0?(t.terms.delete(n),t.df.delete(n)):t.terms.set(n,i))}}class ut{constructor(e,n,r){this.options={...C,...n},this.options.useExtendedSearch,this.options.useTokenSearch,this._keyStore=new Ca(this.options.keys),this._docs=e,this._myIndex=null,this._invertedIndex=null,this.setCollection(e,r),this._lastQuery=null,this._lastSearcher=null}_getSearcher(e){if(this._lastQuery===e)return this._lastSearcher;const n=this._invertedIndex?{...this.options,_invertedIndex:this._invertedIndex}:this.options,r=Ge(e,n);return this._lastQuery=e,this._lastSearcher=r,r}setCollection(e,n){if(this._docs=e,n&&!(n instanceof ur))throw new Error(wa);if(this._myIndex=n||xi(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight}),this.options.useTokenSearch){const r=Gn({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics});this._invertedIndex=il(this._myIndex.records,this._myIndex.keys.length,r)}}add(e){if(K(e)&&(this._docs.push(e),this._myIndex.add(e),this._invertedIndex)){const n=this._myIndex.records[this._myIndex.records.length-1],r=Gn({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics});sl(this._invertedIndex,n,this._myIndex.keys.length,r)}}remove(e=()=>!1){const n=[],r=[];for(let i=0,s=this._docs.length;i<s;i+=1)e(this._docs[i],i)&&(n.push(this._docs[i]),r.push(i));if(r.length){if(this._invertedIndex)for(const i of r)Qr(this._invertedIndex,i);for(let i=r.length-1;i>=0;i-=1)this._docs.splice(r[i],1);this._myIndex.removeAll(r)}return n}removeAt(e){this._invertedIndex&&Qr(this._invertedIndex,e);const n=this._docs.splice(e,1)[0];return this._myIndex.removeAt(e),n}getIndex(){return this._myIndex}search(e,n){const{limit:r=-1}=n||{},{includeMatches:i,includeScore:s,shouldSort:o,sortFn:l,ignoreFieldNorm:c}=this.options;if(X(e)&&!e.trim()){let p=this._docs.map((g,d)=>({item:g,refIndex:d}));return Ue(r)&&r>-1&&(p=p.slice(0,r)),p}const u=Ue(r)&&r>0&&X(e);let f;if(u){const p=new Za(r);X(this._docs[0])?this._searchStringList(e,{heap:p,ignoreFieldNorm:c}):this._searchObjectList(e,{heap:p,ignoreFieldNorm:c}),f=p.extractSorted(l)}else f=X(e)?X(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e),Qa(f,{ignoreFieldNorm:c}),o&&f.sort(l),Ue(r)&&r>-1&&(f=f.slice(0,r));return nl(f,this._docs,{includeMatches:i,includeScore:s})}_searchStringList(e,{heap:n,ignoreFieldNorm:r}={}){const i=this._getSearcher(e),{records:s}=this._myIndex,o=n?null:[];return s.forEach(({v:l,i:c,n:u})=>{if(!K(l))return;const{isMatch:f,score:p,indices:g}=i.searchIn(l);if(f){const d={item:l,idx:c,matches:[{score:p,value:l,norm:u,indices:g}]};n?(d.score=Un(d.matches,{ignoreFieldNorm:r}),n.shouldInsert(d.score)&&n.insert(d)):o.push(d)}}),o}_searchLogical(e){const n=Ci(e,this.options),r=(l,c,u)=>{if(!("children"in l)){const{keyId:d,searcher:m}=l;let b;return d===null?(b=[],this._myIndex.keys.forEach((x,M)=>{b.push(...this._findMatches({key:x,value:c[M],searcher:m}))})):b=this._findMatches({key:this._keyStore.get(d),value:this._myIndex.getValueForItemAtKeyId(c,d),searcher:m}),b&&b.length?[{idx:u,item:c,matches:b}]:[]}const{children:f,operator:p}=l,g=[];for(let d=0,m=f.length;d<m;d+=1){const b=f[d],x=r(b,c,u);if(x.length)g.push(...x);else if(p===Ke.AND)return[]}return g},i=this._myIndex.records,s=new Map,o=[];return i.forEach(({$:l,i:c})=>{if(K(l)){const u=r(n,l,c);u.length&&(s.has(c)||(s.set(c,{idx:c,item:l,matches:[]}),o.push(s.get(c))),u.forEach(({matches:f})=>{s.get(c).matches.push(...f)}))}}),o}_searchObjectList(e,{heap:n,ignoreFieldNorm:r}={}){const i=this._getSearcher(e),{keys:s,records:o}=this._myIndex,l=n?null:[];return o.forEach(({$:c,i:u})=>{if(!K(c))return;const f=[];let p=!1,g=!1;if(s.forEach((d,m)=>{const b=this._findMatches({key:d,value:c[m],searcher:i});b.length?(f.push(...b),b[0].hasInverse&&(g=!0)):p=!0}),!(g&&p)&&f.length){const d={idx:u,item:c,matches:f};n?(d.score=Un(d.matches,{ignoreFieldNorm:r}),n.shouldInsert(d.score)&&n.insert(d)):l.push(d)}}),l}_findMatches({key:e,value:n,searcher:r}){if(!K(n))return[];const i=[];if(Et(n))n.forEach(({v:s,i:o,n:l})=>{if(!K(s))return;const{isMatch:c,score:u,indices:f,hasInverse:p}=r.searchIn(s);c&&i.push({score:u,key:e,value:s,idx:o,norm:l,indices:f,hasInverse:p})});else{const{v:s,n:o}=n,{isMatch:l,score:c,indices:u,hasInverse:f}=r.searchIn(s);l&&i.push({score:c,key:e,value:s,norm:o,indices:u,hasInverse:f})}return i}}class ol{static condition(e,n){return n.useTokenSearch}constructor(e,n){this.options=n,this.analyzer=Gn({isCaseSensitive:n.isCaseSensitive,ignoreDiacritics:n.ignoreDiacritics});const r=this.analyzer.tokenize(e),i=n._invertedIndex,{df:s,fieldCount:o}=i;this.termSearchers=[],this.idfWeights=[];for(const l of r){this.termSearchers.push(new hr(l,{location:n.location,threshold:n.threshold,distance:n.distance,includeMatches:n.includeMatches,findAllMatches:n.findAllMatches,minMatchCharLength:n.minMatchCharLength,isCaseSensitive:n.isCaseSensitive,ignoreDiacritics:n.ignoreDiacritics,ignoreLocation:!0}));const c=s.get(l)||0,u=Math.log(1+(o-c+.5)/(c+.5));this.idfWeights.push(u)}}searchIn(e){if(!this.termSearchers.length)return{isMatch:!1,score:1};const n=[];let r=0,i=0,s=0;for(let c=0;c<this.termSearchers.length;c++){const u=this.termSearchers[c].searchIn(e),f=this.idfWeights[c];i+=f,u.isMatch&&(s++,r+=f*(1-u.score),u.indices&&n.push(...u.indices))}if(s===0)return{isMatch:!1,score:1};const o=i>0?1-r/i:0,l={isMatch:!0,score:Math.max(.001,o)};return this.options.includeMatches&&n.length&&(l.indices=fr(n)),l}}ut.version="7.3.0";ut.createIndex=xi;ut.parseIndex=Da;ut.config=C;ut.match=function(t,e,n){return Ge(t,{...C,...n}).searchIn(e)};ut.parseQuery=Ci;dr(Ka);dr(ol);ut.use=function(...t){t.forEach(e=>dr(e))};function Si(t,e){const n=new ut(e.filterProperties,{keys:["title"]});if(!(t.target instanceof HTMLInputElement))return;const r=t.target.value,s=n.search(r).map(o=>o.item.key||o.item.keys.join("|"));Object.keys(e.filters).forEach(o=>{e.querySelector(`[data-details="${o}"]`).parentElement.style.display=s.includes(o)||!r?"":"none"})}function al(t,e){if(!(t.target instanceof HTMLElement))return;const n=t.target.getAttribute("data-close").replace("|","-");e.querySelector(`#filter-${n}`).reset(),e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}const Kn=Math.min,Vt=Math.max,Ve=Math.round,He=Math.floor,at=t=>({x:t,y:t});function ll(t,e){return typeof t=="function"?t(e):t}function cl(t){return t.split("-")[0]}function ul(t){return t.split("-")[1]}function fl(t){return t==="x"?"y":"x"}function hl(t){return t==="y"?"height":"width"}function Li(t){const e=t[0];return e==="t"||e==="b"?"y":"x"}function dl(t){return fl(Li(t))}function pl(t){return{top:0,right:0,bottom:0,left:0,...t}}function gl(t){return typeof t!="number"?pl(t):{top:t,right:t,bottom:t,left:t}}function Je(t){const{x:e,y:n,width:r,height:i}=t;return{width:r,height:i,top:n,left:e,right:e+r,bottom:n+i,x:e,y:n}}function Zr(t,e,n){let{reference:r,floating:i}=t;const s=Li(e),o=dl(e),l=hl(o),c=cl(e),u=s==="y",f=r.x+r.width/2-i.width/2,p=r.y+r.height/2-i.height/2,g=r[l]/2-i[l]/2;let d;switch(c){case"top":d={x:f,y:r.y-i.height};break;case"bottom":d={x:f,y:r.y+r.height};break;case"right":d={x:r.x+r.width,y:p};break;case"left":d={x:r.x-i.width,y:p};break;default:d={x:r.x,y:r.y}}switch(ul(e)){case"start":d[o]-=g*(n&&u?-1:1);break;case"end":d[o]+=g*(n&&u?-1:1);break}return d}async function yl(t,e){var n;e===void 0&&(e={});const{x:r,y:i,platform:s,rects:o,elements:l,strategy:c}=t,{boundary:u="clippingAncestors",rootBoundary:f="viewport",elementContext:p="floating",altBoundary:g=!1,padding:d=0}=ll(e,t),m=gl(d),x=l[g?p==="floating"?"reference":"floating":p],M=Je(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(x)))==null||n?x:x.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:u,rootBoundary:f,strategy:c})),E=p==="floating"?{x:r,y:i,width:o.floating.width,height:o.floating.height}:o.reference,S=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),$=await(s.isElement==null?void 0:s.isElement(S))?await(s.getScale==null?void 0:s.getScale(S))||{x:1,y:1}:{x:1,y:1},B=Je(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:E,offsetParent:S,strategy:c}):E);return{top:(M.top-B.top+m.top)/$.y,bottom:(B.bottom-M.bottom+m.bottom)/$.y,left:(M.left-B.left+m.left)/$.x,right:(B.right-M.right+m.right)/$.x}}const ml=50,vl=async(t,e,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:s=[],platform:o}=n,l=o.detectOverflow?o:{...o,detectOverflow:yl},c=await(o.isRTL==null?void 0:o.isRTL(e));let u=await o.getElementRects({reference:t,floating:e,strategy:i}),{x:f,y:p}=Zr(u,r,c),g=r,d=0;const m={};for(let b=0;b<s.length;b++){const x=s[b];if(!x)continue;const{name:M,fn:E}=x,{x:S,y:$,data:B,reset:N}=await E({x:f,y:p,initialPlacement:r,placement:g,strategy:i,middlewareData:m,rects:u,platform:l,elements:{reference:t,floating:e}});f=S??f,p=$??p,m[M]={...m[M],...B},N&&d<ml&&(d++,typeof N=="object"&&(N.placement&&(g=N.placement),N.rects&&(u=N.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:i}):N.rects),{x:f,y:p}=Zr(u,g,c)),b=-1)}return{x:f,y:p,placement:g,strategy:i,middlewareData:m}};function ln(){return typeof window<"u"}function re(t){return Ei(t)?(t.nodeName||"").toLowerCase():"#document"}function Q(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function ft(t){var e;return(e=(Ei(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ei(t){return ln()?t instanceof Node||t instanceof Q(t).Node:!1}function it(t){return ln()?t instanceof Element||t instanceof Q(t).Element:!1}function bt(t){return ln()?t instanceof HTMLElement||t instanceof Q(t).HTMLElement:!1}function ti(t){return!ln()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Q(t).ShadowRoot}function Me(t){const{overflow:e,overflowX:n,overflowY:r,display:i}=st(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&i!=="inline"&&i!=="contents"}function bl(t){return/^(table|td|th)$/.test(re(t))}function cn(t){try{if(t.matches(":popover-open"))return!0}catch{}try{return t.matches(":modal")}catch{return!1}}const wl=/transform|translate|scale|rotate|perspective|filter/,xl=/paint|layout|strict|content/,kt=t=>!!t&&t!=="none";let Rn;function pr(t){const e=it(t)?st(t):t;return kt(e.transform)||kt(e.translate)||kt(e.scale)||kt(e.rotate)||kt(e.perspective)||!gr()&&(kt(e.backdropFilter)||kt(e.filter))||wl.test(e.willChange||"")||xl.test(e.contain||"")}function _l(t){let e=St(t);for(;bt(e)&&!te(e);){if(pr(e))return e;if(cn(e))return null;e=St(e)}return null}function gr(){return Rn==null&&(Rn=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),Rn}function te(t){return/^(html|body|#document)$/.test(re(t))}function st(t){return Q(t).getComputedStyle(t)}function un(t){return it(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function St(t){if(re(t)==="html")return t;const e=t.assignedSlot||t.parentNode||ti(t)&&t.host||ft(t);return ti(e)?e.host:e}function $i(t){const e=St(t);return te(e)?t.ownerDocument?t.ownerDocument.body:t.body:bt(e)&&Me(e)?e:$i(e)}function be(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=$i(t),s=i===((r=t.ownerDocument)==null?void 0:r.body),o=Q(i);if(s){const l=Vn(o);return e.concat(o,o.visualViewport||[],Me(i)?i:[],l&&n?be(l):[])}else return e.concat(i,be(i,[],n))}function Vn(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Ri(t){const e=st(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const i=bt(t),s=i?t.offsetWidth:n,o=i?t.offsetHeight:r,l=Ve(n)!==s||Ve(r)!==o;return l&&(n=s,r=o),{width:n,height:r,$:l}}function yr(t){return it(t)?t:t.contextElement}function Jt(t){const e=yr(t);if(!bt(e))return at(1);const n=e.getBoundingClientRect(),{width:r,height:i,$:s}=Ri(e);let o=(s?Ve(n.width):n.width)/r,l=(s?Ve(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!l||!Number.isFinite(l))&&(l=1),{x:o,y:l}}const Ml=at(0);function Bi(t){const e=Q(t);return!gr()||!e.visualViewport?Ml:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Al(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==Q(t)?!1:e}function jt(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=yr(t);let o=at(1);e&&(r?it(r)&&(o=Jt(r)):o=Jt(t));const l=Al(s,n,r)?Bi(s):at(0);let c=(i.left+l.x)/o.x,u=(i.top+l.y)/o.y,f=i.width/o.x,p=i.height/o.y;if(s){const g=Q(s),d=r&&it(r)?Q(r):r;let m=g,b=Vn(m);for(;b&&r&&d!==m;){const x=Jt(b),M=b.getBoundingClientRect(),E=st(b),S=M.left+(b.clientLeft+parseFloat(E.paddingLeft))*x.x,$=M.top+(b.clientTop+parseFloat(E.paddingTop))*x.y;c*=x.x,u*=x.y,f*=x.x,p*=x.y,c+=S,u+=$,m=Q(b),b=Vn(m)}}return Je({width:f,height:p,x:c,y:u})}function fn(t,e){const n=un(t).scrollLeft;return e?e.left+n:jt(ft(t)).left+n}function Pi(t,e){const n=t.getBoundingClientRect(),r=n.left+e.scrollLeft-fn(t,n),i=n.top+e.scrollTop;return{x:r,y:i}}function Cl(t){let{elements:e,rect:n,offsetParent:r,strategy:i}=t;const s=i==="fixed",o=ft(r),l=e?cn(e.floating):!1;if(r===o||l&&s)return n;let c={scrollLeft:0,scrollTop:0},u=at(1);const f=at(0),p=bt(r);if((p||!p&&!s)&&((re(r)!=="body"||Me(o))&&(c=un(r)),p)){const d=jt(r);u=Jt(r),f.x=d.x+r.clientLeft,f.y=d.y+r.clientTop}const g=o&&!p&&!s?Pi(o,c):at(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-c.scrollLeft*u.x+f.x+g.x,y:n.y*u.y-c.scrollTop*u.y+f.y+g.y}}function Sl(t){return Array.from(t.getClientRects())}function Ll(t){const e=ft(t),n=un(t),r=t.ownerDocument.body,i=Vt(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),s=Vt(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let o=-n.scrollLeft+fn(t);const l=-n.scrollTop;return st(r).direction==="rtl"&&(o+=Vt(e.clientWidth,r.clientWidth)-i),{width:i,height:s,x:o,y:l}}const ei=25;function El(t,e){const n=Q(t),r=ft(t),i=n.visualViewport;let s=r.clientWidth,o=r.clientHeight,l=0,c=0;if(i){s=i.width,o=i.height;const f=gr();(!f||f&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}const u=fn(r);if(u<=0){const f=r.ownerDocument,p=f.body,g=getComputedStyle(p),d=f.compatMode==="CSS1Compat"&&parseFloat(g.marginLeft)+parseFloat(g.marginRight)||0,m=Math.abs(r.clientWidth-p.clientWidth-d);m<=ei&&(s-=m)}else u<=ei&&(s+=u);return{width:s,height:o,x:l,y:c}}function $l(t,e){const n=jt(t,!0,e==="fixed"),r=n.top+t.clientTop,i=n.left+t.clientLeft,s=bt(t)?Jt(t):at(1),o=t.clientWidth*s.x,l=t.clientHeight*s.y,c=i*s.x,u=r*s.y;return{width:o,height:l,x:c,y:u}}function ni(t,e,n){let r;if(e==="viewport")r=El(t,n);else if(e==="document")r=Ll(ft(t));else if(it(e))r=$l(e,n);else{const i=Bi(t);r={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return Je(r)}function Di(t,e){const n=St(t);return n===e||!it(n)||te(n)?!1:st(n).position==="fixed"||Di(n,e)}function Rl(t,e){const n=e.get(t);if(n)return n;let r=be(t,[],!1).filter(l=>it(l)&&re(l)!=="body"),i=null;const s=st(t).position==="fixed";let o=s?St(t):t;for(;it(o)&&!te(o);){const l=st(o),c=pr(o);!c&&l.position==="fixed"&&(i=null),(s?!c&&!i:!c&&l.position==="static"&&!!i&&(i.position==="absolute"||i.position==="fixed")||Me(o)&&!c&&Di(t,o))?r=r.filter(f=>f!==o):i=l,o=St(o)}return e.set(t,r),r}function Bl(t){let{element:e,boundary:n,rootBoundary:r,strategy:i}=t;const o=[...n==="clippingAncestors"?cn(e)?[]:Rl(e,this._c):[].concat(n),r],l=ni(e,o[0],i);let c=l.top,u=l.right,f=l.bottom,p=l.left;for(let g=1;g<o.length;g++){const d=ni(e,o[g],i);c=Vt(d.top,c),u=Kn(d.right,u),f=Kn(d.bottom,f),p=Vt(d.left,p)}return{width:u-p,height:f-c,x:p,y:c}}function Pl(t){const{width:e,height:n}=Ri(t);return{width:e,height:n}}function Dl(t,e,n){const r=bt(e),i=ft(e),s=n==="fixed",o=jt(t,!0,s,e);let l={scrollLeft:0,scrollTop:0};const c=at(0);function u(){c.x=fn(i)}if(r||!r&&!s)if((re(e)!=="body"||Me(i))&&(l=un(e)),r){const d=jt(e,!0,s,e);c.x=d.x+e.clientLeft,c.y=d.y+e.clientTop}else i&&u();s&&!r&&i&&u();const f=i&&!r&&!s?Pi(i,l):at(0),p=o.left+l.scrollLeft-c.x-f.x,g=o.top+l.scrollTop-c.y-f.y;return{x:p,y:g,width:o.width,height:o.height}}function Bn(t){return st(t).position==="static"}function ri(t,e){if(!bt(t)||st(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return ft(t)===n&&(n=n.ownerDocument.body),n}function ki(t,e){const n=Q(t);if(cn(t))return n;if(!bt(t)){let i=St(t);for(;i&&!te(i);){if(it(i)&&!Bn(i))return i;i=St(i)}return n}let r=ri(t,e);for(;r&&bl(r)&&Bn(r);)r=ri(r,e);return r&&te(r)&&Bn(r)&&!pr(r)?n:r||_l(t)||n}const kl=async function(t){const e=this.getOffsetParent||ki,n=this.getDimensions,r=await n(t.floating);return{reference:Dl(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Tl(t){return st(t).direction==="rtl"}const Ol={convertOffsetParentRelativeRectToViewportRelativeRect:Cl,getDocumentElement:ft,getClippingRect:Bl,getOffsetParent:ki,getElementRects:kl,getClientRects:Sl,getDimensions:Pl,getScale:Jt,isElement:it,isRTL:Tl};function Ti(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Il(t,e){let n=null,r;const i=ft(t);function s(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function o(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),s();const u=t.getBoundingClientRect(),{left:f,top:p,width:g,height:d}=u;if(l||e(),!g||!d)return;const m=He(p),b=He(i.clientWidth-(f+g)),x=He(i.clientHeight-(p+d)),M=He(f),S={rootMargin:-m+"px "+-b+"px "+-x+"px "+-M+"px",threshold:Vt(0,Kn(1,c))||1};let $=!0;function B(N){const Z=N[0].intersectionRatio;if(Z!==c){if(!$)return o();Z?o(!1,Z):r=setTimeout(()=>{o(!1,1e-7)},1e3)}Z===1&&!Ti(u,t.getBoundingClientRect())&&o(),$=!1}try{n=new IntersectionObserver(B,{...S,root:i.ownerDocument})}catch{n=new IntersectionObserver(B,S)}n.observe(t)}return o(!0),s}function jl(t,e,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,u=yr(t),f=i||s?[...u?be(u):[],...e?be(e):[]]:[];f.forEach(M=>{i&&M.addEventListener("scroll",n,{passive:!0}),s&&M.addEventListener("resize",n)});const p=u&&l?Il(u,n):null;let g=-1,d=null;o&&(d=new ResizeObserver(M=>{let[E]=M;E&&E.target===u&&d&&e&&(d.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var S;(S=d)==null||S.observe(e)})),n()}),u&&!c&&d.observe(u),e&&d.observe(e));let m,b=c?jt(t):null;c&&x();function x(){const M=jt(t);b&&!Ti(b,M)&&n(),b=M,m=requestAnimationFrame(x)}return n(),()=>{var M;f.forEach(E=>{i&&E.removeEventListener("scroll",n),s&&E.removeEventListener("resize",n)}),p==null||p(),(M=d)==null||M.disconnect(),d=null,c&&cancelAnimationFrame(m)}}const Nl=(t,e,n)=>{const r=new Map,i={platform:Ol,...n},s={...i.platform,_c:r};return vl(t,e,{...i,platform:s})};function Fl(t){const e=t.renderRoot.querySelector(".inline-container-wrapper"),n=t.renderRoot.querySelector("[popover]");return jl(e,n,()=>{n.matches(":popover-open")&&Nl(e,n,{strategy:"fixed"}).then(({x:i,y:s})=>{Object.assign(n.style,{left:`${i}px`,top:`${s}px`,width:`${e.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function Oi(t){t.renderRoot.querySelector("#eox-itemfilter-input-search").value="",Si({target:{value:""}},t)}function Hl(t,e){e.inlineMode&&t.stopPropagation()}function ql(t){t.inlineMode&&(t.showDropdown=!0)}function zl(t,e){e.inlineMode&&(t.stopPropagation(),e.showDropdown=!0)}function Yl(t,e){e.inlineMode&&t.key==="Escape"&&e.showDropdown&&(Oi(e),e.showDropdown=!1)}function Xl(t,e){e.inlineMode&&t.target instanceof HTMLElement&&t.target.tagName!=="DROPDOWN-FORM"&&t.target.tagName!=="EOX-ITEMFILTER"&&e.showDropdown&&(Oi(e),e.showDropdown=!1)}function Wl(t,e){var n,r,i=0,s,o,l,c,u,f,p,g=t[0],d=t[1],m=e.length;for(n=0;n<m;n++){r=0;var b=e[n],x=b.length-1;if(f=b[0],f[0]!==b[x][0]&&f[1]!==b[x][1])throw new Error("First and last coordinates in a ring must be the same");for(o=f[0]-g,l=f[1]-d,r;r<x;r++){if(p=b[r+1],c=p[0]-g,u=p[1]-d,l===0&&u===0){if(c<=0&&o>=0||o<=0&&c>=0)return 0}else if(u>=0&&l<=0||u<=0&&l>=0){if(s=fa(o,c,l,u,0,0),s===0)return 0;(s>0&&u>0&&l<=0||s<0&&u<=0&&l>0)&&i++}f=p,l=u,o=c}}return i%2!==0}function lt(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if(t.type==="Feature"&&t.geometry!==null&&t.geometry.type==="Point")return[...t.geometry.coordinates];if(t.type==="Point")return[...t.coordinates]}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return[...t];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function It(t){if(Array.isArray(t))return t;if(t.type==="Feature"){if(t.geometry!==null)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function ee(t){return t.type==="Feature"?t.geometry:t}function ii(t,e){return t.type==="FeatureCollection"?"FeatureCollection":t.type==="GeometryCollection"?"GeometryCollection":t.type==="Feature"&&t.geometry!==null?t.geometry.type:t.type}function rt(t,e,n={}){if(!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");const r=lt(t),i=ee(e),s=i.type,o=e.bbox;let l=i.coordinates;if(o&&Ul(r,o)===!1)return!1;s==="Polygon"&&(l=[l]);let c=!1;for(var u=0;u<l.length;++u){const f=Wl(r,l[u]);if(f===0)return!n.ignoreBoundary;f&&(c=!0)}return c}function Ul(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}class Ii{constructor(e=[],n=Gl){if(this.data=e,this.length=this.data.length,this.compare=n,this.length>0)for(let r=(this.length>>1)-1;r>=0;r--)this._down(r)}push(e){this.data.push(e),this.length++,this._up(this.length-1)}pop(){if(this.length===0)return;const e=this.data[0],n=this.data.pop();return this.length--,this.length>0&&(this.data[0]=n,this._down(0)),e}peek(){return this.data[0]}_up(e){const{data:n,compare:r}=this,i=n[e];for(;e>0;){const s=e-1>>1,o=n[s];if(r(i,o)>=0)break;n[e]=o,e=s}n[e]=i}_down(e){const{data:n,compare:r}=this,i=this.length>>1,s=n[e];for(;e<i;){let o=(e<<1)+1,l=n[o];const c=o+1;if(c<this.length&&r(n[c],l)<0&&(o=c,l=n[c]),r(l,s)>=0)break;n[e]=l,e=o}n[e]=s}}function Gl(t,e){return t<e?-1:t>e?1:0}function ji(t,e){return t.p.x>e.p.x?1:t.p.x<e.p.x?-1:t.p.y!==e.p.y?t.p.y>e.p.y?1:-1:1}function Kl(t,e){return t.rightSweepEvent.p.x>e.rightSweepEvent.p.x?1:t.rightSweepEvent.p.x<e.rightSweepEvent.p.x?-1:t.rightSweepEvent.p.y!==e.rightSweepEvent.p.y?t.rightSweepEvent.p.y<e.rightSweepEvent.p.y?1:-1:1}class si{constructor(e,n,r,i){this.p={x:e[0],y:e[1]},this.featureId=n,this.ringId=r,this.eventId=i,this.otherEvent=null,this.isLeftEndpoint=null}isSamePoint(e){return this.p.x===e.p.x&&this.p.y===e.p.y}}function Vl(t,e){if(t.type==="FeatureCollection"){const n=t.features;for(let r=0;r<n.length;r++)oi(n[r],e)}else oi(t,e)}let qe=0,ze=0,Ye=0;function oi(t,e){const n=t.type==="Feature"?t.geometry:t;let r=n.coordinates;(n.type==="Polygon"||n.type==="MultiLineString")&&(r=[r]),n.type==="LineString"&&(r=[[r]]);for(let i=0;i<r.length;i++)for(let s=0;s<r[i].length;s++){let o=r[i][s][0],l=null;ze=ze+1;for(let c=0;c<r[i][s].length-1;c++){l=r[i][s][c+1];const u=new si(o,qe,ze,Ye),f=new si(l,qe,ze,Ye+1);u.otherEvent=f,f.otherEvent=u,ji(u,f)>0?(f.isLeftEndpoint=!0,u.isLeftEndpoint=!1):(u.isLeftEndpoint=!0,f.isLeftEndpoint=!1),e.push(u),e.push(f),o=l,Ye=Ye+1}}qe=qe+1}class Jl{constructor(e){this.leftSweepEvent=e,this.rightSweepEvent=e.otherEvent}}function Ql(t,e){if(t===null||e===null||t.leftSweepEvent.ringId===e.leftSweepEvent.ringId&&(t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.rightSweepEvent)||t.leftSweepEvent.isSamePoint(e.leftSweepEvent)||t.leftSweepEvent.isSamePoint(e.rightSweepEvent)))return!1;const n=t.leftSweepEvent.p.x,r=t.leftSweepEvent.p.y,i=t.rightSweepEvent.p.x,s=t.rightSweepEvent.p.y,o=e.leftSweepEvent.p.x,l=e.leftSweepEvent.p.y,c=e.rightSweepEvent.p.x,u=e.rightSweepEvent.p.y,f=(u-l)*(i-n)-(c-o)*(s-r),p=(c-o)*(r-l)-(u-l)*(n-o),g=(i-n)*(r-l)-(s-r)*(n-o);if(f===0)return!1;const d=p/f,m=g/f;if(d>=0&&d<=1&&m>=0&&m<=1){const b=n+d*(i-n),x=r+d*(s-r);return[b,x]}return!1}function Zl(t,e){e=e||!1;const n=[],r=new Ii([],Kl);for(;t.length;){const i=t.pop();if(i.isLeftEndpoint){const s=new Jl(i);for(let o=0;o<r.data.length;o++){const l=r.data[o];if(e&&l.leftSweepEvent.featureId===i.featureId)continue;const c=Ql(s,l);c!==!1&&n.push(c)}r.push(s)}else i.isLeftEndpoint===!1&&r.pop()}return n}function tc(t,e){const n=new Ii([],ji);return Vl(t,n),Zl(n,e)}var ec=tc;function hn(t,e,n={}){const{removeDuplicates:r=!0,ignoreSelfIntersections:i=!0}=n;let s=[];t.type==="FeatureCollection"?s=s.concat(t.features):t.type==="Feature"?s.push(t):(t.type==="LineString"||t.type==="Polygon"||t.type==="MultiLineString"||t.type==="MultiPolygon")&&s.push(Zt(t)),e.type==="FeatureCollection"?s=s.concat(e.features):e.type==="Feature"?s.push(e):(e.type==="LineString"||e.type==="Polygon"||e.type==="MultiLineString"||e.type==="MultiPolygon")&&s.push(Zt(e));const o=ec(nt(s),i);let l=[];if(r){const c={};o.forEach(u=>{const f=u.join(",");c[f]||(c[f]=!0,l.push(u))})}else l=o;return nt(l.map(c=>de(c)))}function mr(t,e,n){if(t!==null)for(var r,i,s,o,l,c,u,f=0,p=0,g,d=t.type,m=d==="FeatureCollection",b=d==="Feature",x=m?t.features.length:1,M=0;M<x;M++){u=m?t.features[M].geometry:b?t.geometry:t,g=u?u.type==="GeometryCollection":!1,l=g?u.geometries.length:1;for(var E=0;E<l;E++){var S=0,$=0;if(o=g?u.geometries[E]:u,o!==null){c=o.coordinates;var B=o.type;switch(f=0,B){case null:break;case"Point":if(e(c,p,M,S,$)===!1)return!1;p++,S++;break;case"LineString":case"MultiPoint":for(r=0;r<c.length;r++){if(e(c[r],p,M,S,$)===!1)return!1;p++,B==="MultiPoint"&&S++}B==="LineString"&&S++;break;case"Polygon":case"MultiLineString":for(r=0;r<c.length;r++){for(i=0;i<c[r].length-f;i++){if(e(c[r][i],p,M,S,$)===!1)return!1;p++}B==="MultiLineString"&&S++,B==="Polygon"&&$++}B==="Polygon"&&S++;break;case"MultiPolygon":for(r=0;r<c.length;r++){for($=0,i=0;i<c[r].length;i++){for(s=0;s<c[r][i].length-f;s++){if(e(c[r][i][s],p,M,S,$)===!1)return!1;p++}$++}S++}break;case"GeometryCollection":for(r=0;r<o.geometries.length;r++)if(mr(o.geometries[r],e)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function dn(t,e){if(t.type==="Feature")e(t,0);else if(t.type==="FeatureCollection")for(var n=0;n<t.features.length&&e(t.features[n],n)!==!1;n++);}function nc(t,e,n){var r=n;return dn(t,function(i,s){s===0&&n===void 0?r=i:r=e(r,i,s)}),r}function rc(t,e){var n,r,i,s,o,l,c,u,f,p,g=0,d=t.type==="FeatureCollection",m=t.type==="Feature",b=d?t.features.length:1;for(n=0;n<b;n++){for(l=d?t.features[n].geometry:m?t.geometry:t,u=d?t.features[n].properties:m?t.properties:{},f=d?t.features[n].bbox:m?t.bbox:void 0,p=d?t.features[n].id:m?t.id:void 0,c=l?l.type==="GeometryCollection":!1,o=c?l.geometries.length:1,i=0;i<o;i++){if(s=c?l.geometries[i]:l,s===null){if(e(null,g,u,f,p)===!1)return!1;continue}switch(s.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(s,g,u,f,p)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<s.geometries.length;r++)if(e(s.geometries[r],g,u,f,p)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}g++}}function Nt(t,e){rc(t,function(n,r,i,s,o){var l=n===null?null:n.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return e(Zt(n,i,{bbox:s,id:o}),r,0)===!1?!1:void 0}var c;switch(l){case"MultiPoint":c="Point";break;case"MultiLineString":c="LineString";break;case"MultiPolygon":c="Polygon";break}for(var u=0;u<n.coordinates.length;u++){var f=n.coordinates[u],p={type:c,coordinates:f};if(e(Zt(p,i),r,u)===!1)return!1}})}function Jn(t,e={}){const n=ee(t);switch(!e.properties&&t.type==="Feature"&&(e.properties=t.properties),n.type){case"Polygon":return ic(n,e);case"MultiPolygon":return sc(n,e);default:throw new Error("invalid poly")}}function ic(t,e={}){const r=ee(t).coordinates,i=e.properties?e.properties:t.type==="Feature"?t.properties:{};return Ni(r,i)}function sc(t,e={}){const r=ee(t).coordinates,i=e.properties?e.properties:t.type==="Feature"?t.properties:{},s=[];return r.forEach(o=>{s.push(Ni(o,i))}),nt(s)}function Ni(t,e){return t.length>1?ha(t,e):me(t[0],e)}function oc(t,e,{ignoreSelfIntersections:n=!0}={ignoreSelfIntersections:!0}){let r=!0;return Nt(t,i=>{Nt(e,s=>{if(r===!1)return!1;r=ac(i.geometry,s.geometry,n)})}),r}function ac(t,e,n){switch(t.type){case"Point":switch(e.type){case"Point":return!fc(t.coordinates,e.coordinates);case"LineString":return!ai(e,t);case"Polygon":return!rt(t,e)}break;case"LineString":switch(e.type){case"Point":return!ai(t,e);case"LineString":return!lc(t,e,n);case"Polygon":return!li(e,t,n)}break;case"Polygon":switch(e.type){case"Point":return!rt(e,t);case"LineString":return!li(t,e,n);case"Polygon":return!cc(e,t,n)}}return!1}function ai(t,e){for(let n=0;n<t.coordinates.length-1;n++)if(uc(t.coordinates[n],t.coordinates[n+1],e.coordinates))return!0;return!1}function lc(t,e,n){return hn(t,e,{ignoreSelfIntersections:n}).features.length>0}function li(t,e,n){for(const i of e.coordinates)if(rt(i,t))return!0;return hn(e,Jn(t),{ignoreSelfIntersections:n}).features.length>0}function cc(t,e,n){for(const i of t.coordinates[0])if(rt(i,e))return!0;for(const i of e.coordinates[0])if(rt(i,t))return!0;return hn(Jn(t),Jn(e),{ignoreSelfIntersections:n}).features.length>0}function uc(t,e,n){const r=n[0]-t[0],i=n[1]-t[1],s=e[0]-t[0],o=e[1]-t[1];return r*o-i*s!==0?!1:Math.abs(s)>=Math.abs(o)?s>0?t[0]<=n[0]&&n[0]<=e[0]:e[0]<=n[0]&&n[0]<=t[0]:o>0?t[1]<=n[1]&&n[1]<=e[1]:e[1]<=n[1]&&n[1]<=t[1]}function fc(t,e){return t[0]===e[0]&&t[1]===e[1]}function hc(t,e,{ignoreSelfIntersections:n=!0}={}){let r=!1;return Nt(t,i=>{Nt(e,s=>{if(r===!0)return!0;r=!oc(i.geometry,s.geometry,{ignoreSelfIntersections:n})})}),r}var dc=hc;function ot(t,e={}){if(t.bbox!=null&&e.recompute!==!0)return t.bbox;const n=[1/0,1/0,-1/0,-1/0];return mr(t,r=>{n[0]>r[0]&&(n[0]=r[0]),n[1]>r[1]&&(n[1]=r[1]),n[2]<r[0]&&(n[2]=r[0]),n[3]<r[1]&&(n[3]=r[1])}),n}function Qe(t,e,n={}){const r=lt(t),i=It(e);for(let s=0;s<i.length-1;s++){let o=!1;if(n.ignoreEndVertices&&(s===0&&(o="start"),s===i.length-2&&(o="end"),s===0&&s+1===i.length-1&&(o="both")),pc(i[s],i[s+1],r,o,typeof n.epsilon>"u"?null:n.epsilon))return!0}return!1}function pc(t,e,n,r,i){const s=n[0],o=n[1],l=t[0],c=t[1],u=e[0],f=e[1],p=n[0]-l,g=n[1]-c,d=u-l,m=f-c,b=p*m-g*d;if(i!==null){if(Math.abs(b)>i)return!1}else if(b!==0)return!1;if(Math.abs(d)===Math.abs(m)&&Math.abs(d)===0)return r?!1:n[0]===t[0]&&n[1]===t[1];if(r){if(r==="start")return Math.abs(d)>=Math.abs(m)?d>0?l<s&&s<=u:u<=s&&s<l:m>0?c<o&&o<=f:f<=o&&o<c;if(r==="end")return Math.abs(d)>=Math.abs(m)?d>0?l<=s&&s<u:u<s&&s<=l:m>0?c<=o&&o<f:f<o&&o<=c;if(r==="both")return Math.abs(d)>=Math.abs(m)?d>0?l<s&&s<u:u<s&&s<l:m>0?c<o&&o<f:f<o&&o<c}else return Math.abs(d)>=Math.abs(m)?d>0?l<=s&&s<=u:u<=s&&s<=l:m>0?c<=o&&o<=f:f<=o&&o<=c;return!1}function gc(t,e,n,r,i){Fi(t,e,n||0,r||t.length-1,i||yc)}function Fi(t,e,n,r,i){for(;r>n;){if(r-n>600){var s=r-n+1,o=e-n+1,l=Math.log(s),c=.5*Math.exp(2*l/3),u=.5*Math.sqrt(l*c*(s-c)/s)*(o-s/2<0?-1:1),f=Math.max(n,Math.floor(e-o*c/s+u)),p=Math.min(r,Math.floor(e+(s-o)*c/s+u));Fi(t,e,f,p,i)}var g=t[e],d=n,m=r;for(fe(t,n,e),i(t[r],g)>0&&fe(t,n,r);d<m;){for(fe(t,d,m),d++,m--;i(t[d],g)<0;)d++;for(;i(t[m],g)>0;)m--}i(t[n],g)===0?fe(t,n,m):(m++,fe(t,m,r)),m<=e&&(n=m+1),e<=m&&(r=m-1)}}function fe(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function yc(t,e){return t<e?-1:t>e?1:0}let mc=class{constructor(e=9){this._maxEntries=Math.max(4,e),this._minEntries=Math.max(2,Math.ceil(this._maxEntries*.4)),this.clear()}all(){return this._all(this.data,[])}search(e){let n=this.data;const r=[];if(!We(e,n))return r;const i=this.toBBox,s=[];for(;n;){for(let o=0;o<n.children.length;o++){const l=n.children[o],c=n.leaf?i(l):l;We(e,c)&&(n.leaf?r.push(l):Dn(e,c)?this._all(l,r):s.push(l))}n=s.pop()}return r}collides(e){let n=this.data;if(!We(e,n))return!1;const r=[];for(;n;){for(let i=0;i<n.children.length;i++){const s=n.children[i],o=n.leaf?this.toBBox(s):s;if(We(e,o)){if(n.leaf||Dn(e,o))return!0;r.push(s)}}n=r.pop()}return!1}load(e){if(!(e&&e.length))return this;if(e.length<this._minEntries){for(let r=0;r<e.length;r++)this.insert(e[r]);return this}let n=this._build(e.slice(),0,e.length-1,0);if(!this.data.children.length)this.data=n;else if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){const r=this.data;this.data=n,n=r}this._insert(n,this.data.height-n.height-1,!0)}return this}insert(e){return e&&this._insert(e,this.data.height-1),this}clear(){return this.data=Gt([]),this}remove(e,n){if(!e)return this;let r=this.data;const i=this.toBBox(e),s=[],o=[];let l,c,u;for(;r||s.length;){if(r||(r=s.pop(),c=s[s.length-1],l=o.pop(),u=!0),r.leaf){const f=vc(e,r.children,n);if(f!==-1)return r.children.splice(f,1),s.push(r),this._condense(s),this}!u&&!r.leaf&&Dn(r,i)?(s.push(r),o.push(l),l=0,c=r,r=r.children[0]):c?(l++,r=c.children[l],u=!1):r=null}return this}toBBox(e){return e}compareMinX(e,n){return e.minX-n.minX}compareMinY(e,n){return e.minY-n.minY}toJSON(){return this.data}fromJSON(e){return this.data=e,this}_all(e,n){const r=[];for(;e;)e.leaf?n.push(...e.children):r.push(...e.children),e=r.pop();return n}_build(e,n,r,i){const s=r-n+1;let o=this._maxEntries,l;if(s<=o)return l=Gt(e.slice(n,r+1)),Ut(l,this.toBBox),l;i||(i=Math.ceil(Math.log(s)/Math.log(o)),o=Math.ceil(s/Math.pow(o,i-1))),l=Gt([]),l.leaf=!1,l.height=i;const c=Math.ceil(s/o),u=c*Math.ceil(Math.sqrt(o));ci(e,n,r,u,this.compareMinX);for(let f=n;f<=r;f+=u){const p=Math.min(f+u-1,r);ci(e,f,p,c,this.compareMinY);for(let g=f;g<=p;g+=c){const d=Math.min(g+c-1,p);l.children.push(this._build(e,g,d,i-1))}}return Ut(l,this.toBBox),l}_chooseSubtree(e,n,r,i){for(;i.push(n),!(n.leaf||i.length-1===r);){let s=1/0,o=1/0,l;for(let c=0;c<n.children.length;c++){const u=n.children[c],f=Pn(u),p=xc(e,u)-f;p<o?(o=p,s=f<s?f:s,l=u):p===o&&f<s&&(s=f,l=u)}n=l||n.children[0]}return n}_insert(e,n,r){const i=r?e:this.toBBox(e),s=[],o=this._chooseSubtree(i,this.data,n,s);for(o.children.push(e),ge(o,i);n>=0&&s[n].children.length>this._maxEntries;)this._split(s,n),n--;this._adjustParentBBoxes(i,s,n)}_split(e,n){const r=e[n],i=r.children.length,s=this._minEntries;this._chooseSplitAxis(r,s,i);const o=this._chooseSplitIndex(r,s,i),l=Gt(r.children.splice(o,r.children.length-o));l.height=r.height,l.leaf=r.leaf,Ut(r,this.toBBox),Ut(l,this.toBBox),n?e[n-1].children.push(l):this._splitRoot(r,l)}_splitRoot(e,n){this.data=Gt([e,n]),this.data.height=e.height+1,this.data.leaf=!1,Ut(this.data,this.toBBox)}_chooseSplitIndex(e,n,r){let i,s=1/0,o=1/0;for(let l=n;l<=r-n;l++){const c=pe(e,0,l,this.toBBox),u=pe(e,l,r,this.toBBox),f=_c(c,u),p=Pn(c)+Pn(u);f<s?(s=f,i=l,o=p<o?p:o):f===s&&p<o&&(o=p,i=l)}return i||r-n}_chooseSplitAxis(e,n,r){const i=e.leaf?this.compareMinX:bc,s=e.leaf?this.compareMinY:wc,o=this._allDistMargin(e,n,r,i),l=this._allDistMargin(e,n,r,s);o<l&&e.children.sort(i)}_allDistMargin(e,n,r,i){e.children.sort(i);const s=this.toBBox,o=pe(e,0,n,s),l=pe(e,r-n,r,s);let c=Xe(o)+Xe(l);for(let u=n;u<r-n;u++){const f=e.children[u];ge(o,e.leaf?s(f):f),c+=Xe(o)}for(let u=r-n-1;u>=n;u--){const f=e.children[u];ge(l,e.leaf?s(f):f),c+=Xe(l)}return c}_adjustParentBBoxes(e,n,r){for(let i=r;i>=0;i--)ge(n[i],e)}_condense(e){for(let n=e.length-1,r;n>=0;n--)e[n].children.length===0?n>0?(r=e[n-1].children,r.splice(r.indexOf(e[n]),1)):this.clear():Ut(e[n],this.toBBox)}};function vc(t,e,n){if(!n)return e.indexOf(t);for(let r=0;r<e.length;r++)if(n(t,e[r]))return r;return-1}function Ut(t,e){pe(t,0,t.children.length,e,t)}function pe(t,e,n,r,i){i||(i=Gt(null)),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(let s=e;s<n;s++){const o=t.children[s];ge(i,t.leaf?r(o):o)}return i}function ge(t,e){return t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY),t}function bc(t,e){return t.minX-e.minX}function wc(t,e){return t.minY-e.minY}function Pn(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function Xe(t){return t.maxX-t.minX+(t.maxY-t.minY)}function xc(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function _c(t,e){const n=Math.max(t.minX,e.minX),r=Math.max(t.minY,e.minY),i=Math.min(t.maxX,e.maxX),s=Math.min(t.maxY,e.maxY);return Math.max(0,i-n)*Math.max(0,s-r)}function Dn(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function We(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function Gt(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function ci(t,e,n,r,i){const s=[e,n];for(;s.length;){if(n=s.pop(),e=s.pop(),n-e<=r)continue;const o=e+Math.ceil((n-e)/r/2)*r;gc(t,o,e,n,i),s.push(e,o,o,n)}}function kn(t){var e;if(t.bbox)e=t.bbox;else if(Array.isArray(t)&&t.length===4)e=t;else if(Array.isArray(t)&&t.length===6)e=[t[0],t[1],t[3],t[4]];else if(t.type==="Feature")e=ot(t);else if(t.type==="FeatureCollection")e=ot(t);else throw new Error("invalid geojson");return{minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}}var Mc=class{constructor(t=9){this.tree=new mc(t),this.tree.toBBox=kn}insert(t){if(t.type!=="Feature")throw new Error("invalid feature");return t.bbox=t.bbox?t.bbox:ot(t),this.tree.insert(t),this}load(t){var e=[];return Array.isArray(t)?t.forEach(function(n){if(n.type!=="Feature")throw new Error("invalid features");n.bbox=n.bbox?n.bbox:ot(n),e.push(n)}):dn(t,function(n){if(n.type!=="Feature")throw new Error("invalid features");n.bbox=n.bbox?n.bbox:ot(n),e.push(n)}),this.tree.load(e),this}remove(t,e){if(t.type!=="Feature")throw new Error("invalid feature");return t.bbox=t.bbox?t.bbox:ot(t),this.tree.remove(t,e),this}clear(){return this.tree.clear(),this}search(t){var e=this.tree.search(kn(t));return nt(e)}collides(t){return this.tree.collides(kn(t))}all(){const t=this.tree.all();return nt(t)}toJSON(){return this.tree.toJSON()}fromJSON(t){return this.tree.fromJSON(t),this}};function Hi(t){return new Mc(t)}function Ac(t,e){if(e=e??{},!da(e))throw new Error("options is invalid");var n=e.precision,r=e.coordinates,i=e.mutate;if(n=n==null||isNaN(n)?6:n,r=r==null||isNaN(r)?3:r,!t)throw new Error("<geojson> is required");if(typeof n!="number")throw new Error("<precision> must be a number");if(typeof r!="number")throw new Error("<coordinates> must be a number");(i===!1||i===void 0)&&(t=JSON.parse(JSON.stringify(t)));var s=Math.pow(10,n);return mr(t,function(o){Cc(o,s,r)}),t}function Cc(t,e,n){t.length>n&&t.splice(n,t.length);for(var r=0;r<t.length;r++)t[r]=Math.round(t[r]*e)/e;return t}function Sc(t){if(!t)throw new Error("geojson is required");const e=[];return Nt(t,n=>{Lc(n,e)}),nt(e)}function Lc(t,e){let n=[];const r=t.geometry;if(r!==null){switch(r.type){case"Polygon":n=It(r);break;case"LineString":n=[It(r)]}n.forEach(i=>{Ec(i,t.properties).forEach(o=>{o.id=e.length,e.push(o)})})}}function Ec(t,e){const n=[];return t.reduce((r,i)=>{const s=me([r,i],e);return s.bbox=$c(r,i),n.push(s),i}),n}function $c(t,e){const n=t[0],r=t[1],i=e[0],s=e[1],o=n<i?n:i,l=r<s?r:s,c=n>i?n:i,u=r>s?r:s;return[o,l,c,u]}function Tn(t,e,n={}){var r=lt(t),i=lt(e),s=Kt(i[1]-r[1]),o=Kt(i[0]-r[0]),l=Kt(r[1]),c=Kt(i[1]),u=Math.pow(Math.sin(s/2),2)+Math.pow(Math.sin(o/2),2)*Math.cos(l)*Math.cos(c);return pa(2*Math.atan2(Math.sqrt(u),Math.sqrt(1-u)),n.units)}var Rc=Object.defineProperty,Bc=Object.defineProperties,Pc=Object.getOwnPropertyDescriptors,ui=Object.getOwnPropertySymbols,Dc=Object.prototype.hasOwnProperty,kc=Object.prototype.propertyIsEnumerable,fi=(t,e,n)=>e in t?Rc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Tc=(t,e)=>{for(var n in e||(e={}))Dc.call(e,n)&&fi(t,n,e[n]);if(ui)for(var n of ui(e))kc.call(e,n)&&fi(t,n,e[n]);return t},Oc=(t,e)=>Bc(t,Pc(e));function Ic(t,e,n={}){if(!t||!e)throw new Error("lines and inputPoint are required arguments");const r=lt(e);let i=de([1/0,1/0],{lineStringIndex:-1,segmentIndex:-1,totalDistance:-1,lineDistance:-1,segmentDistance:-1,pointDistance:1/0,multiFeatureIndex:-1,index:-1,location:-1,dist:1/0}),s=0,o=0,l=-1;return Nt(t,function(c,u,f){l!==f&&(l=f,o=0);const p=It(c);for(let g=0;g<p.length-1;g++){const d=de(p[g]),m=lt(d),b=de(p[g+1]),x=lt(b),M=Tn(d,b,n);let E,S;x[0]===r[0]&&x[1]===r[1]?[E,S]=[x,!0]:m[0]===r[0]&&m[1]===r[1]?[E,S]=[m,!1]:[E,S]=Fc(m,x,r);const $=Tn(e,E,n);if($<i.properties.pointDistance){const B=Tn(d,E,n);i=de(E,{lineStringIndex:f,segmentIndex:S?g+1:g,totalDistance:s+B,lineDistance:o+B,segmentDistance:B,pointDistance:$,multiFeatureIndex:-1,index:-1,location:-1,dist:1/0}),i.properties=Oc(Tc({},i.properties),{multiFeatureIndex:i.properties.lineStringIndex,index:i.properties.segmentIndex,location:i.properties.totalDistance,dist:i.properties.pointDistance})}s+=M,o+=M}}),i}function Tt(t,e){const[n,r,i]=t,[s,o,l]=e;return n*s+r*o+i*l}function he(t,e){const[n,r,i]=t,[s,o,l]=e;return[r*l-i*o,i*s-n*l,n*o-r*s]}function jc(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2))}function hi(t){const e=jc(t);return[t[0]/e,t[1]/e,t[2]/e]}function On(t){const e=Kt(t[1]),n=Kt(t[0]);return[Math.cos(e)*Math.cos(n),Math.cos(e)*Math.sin(n),Math.sin(e)]}function Nc(t){const[e,n,r]=t,i=Math.min(Math.max(r,-1),1),s=Wr(Math.asin(i));return[Wr(Math.atan2(n,e)),s]}function Fc(t,e,n){const r=On(t),i=On(e),s=On(n),o=he(r,i);if(o[0]===0&&o[1]===0&&o[2]===0)return Tt(r,i)>0?[[...e],!0]:[[...n],!1];const l=he(o,s);if(l[0]===0&&l[1]===0&&l[2]===0)return[[...e],!0];const c=he(l,o),u=hi(c),f=[-u[0],-u[1],-u[2]],p=Tt(s,u)>Tt(s,f)?u:f,g=hi(o),d=Tt(he(r,p),g),m=Tt(he(p,i),g);return d>=0&&m>=0?[Nc(p),!1]:Tt(r,s)>Tt(i,s)?[[...t],!1]:[[...e],!0]}function Hc(t,e){if(!t)throw new Error("line is required");if(!e)throw new Error("splitter is required");const n=ii(t),r=ii(e);if(n!=="LineString")throw new Error("line must be LineString");if(r==="FeatureCollection")throw new Error("splitter cannot be a FeatureCollection");if(r==="GeometryCollection")throw new Error("splitter cannot be a GeometryCollection");var i=Ac(e,{precision:7});switch(t.type!=="Feature"&&(t=Zt(t)),r){case"Point":return Qn(t,i);case"MultiPoint":return di(t,i);case"LineString":case"MultiLineString":case"Polygon":case"MultiPolygon":return di(t,hn(t,i,{ignoreSelfIntersections:!0}))}}function di(t,e){var n=[],r=Hi();return Nt(e,function(i){if(n.forEach(function(l,c){l.id=c}),!n.length)n=Qn(t,i).features,r.load(nt(n));else{var s=r.search(i);if(s.features.length){var o=qi(i,s);n=n.filter(function(l){return l.id!==o.id}),r.remove(o),dn(Qn(o,i),function(l){n.push(l),r.insert(l)})}}}),nt(n)}function Qn(t,e){var n=[],r=It(t)[0],i=It(t)[t.geometry.coordinates.length-1];if(In(r,lt(e))||In(i,lt(e)))return nt([t]);var s=Hi(),o=Sc(t);s.load(o);var l=s.search(e);if(!l.features.length)return nt([t]);var c=qi(e,l),u=[r],f=nc(o,function(p,g,d){var m=It(g)[1],b=lt(e);return d===c.id?(p.push(b),n.push(me(p)),In(b,m)?[b]:[b,m]):(p.push(m),p)},u);return f.length>1&&n.push(me(f)),nt(n)}function qi(t,e){if(!e.features.length)throw new Error("lines must contain features");if(e.features.length===1)return e.features[0];var n,r=1/0;return dn(e,function(i){var s=Ic(i,t),o=s.properties.dist;o<r&&(n=i,r=o)}),n}function In(t,e){return t[0]===e[0]&&t[1]===e[1]}function qc(t,e){var n=ee(t),r=ee(e),i=n.type,s=r.type;switch(i){case"Point":switch(s){case"MultiPoint":return zc(n,r);case"LineString":return Qe(n,r,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return rt(n,r,{ignoreBoundary:!0});default:throw new Error("feature2 "+s+" geometry not supported")}case"MultiPoint":switch(s){case"MultiPoint":return Yc(n,r);case"LineString":return Xc(n,r);case"Polygon":case"MultiPolygon":return Wc(n,r);default:throw new Error("feature2 "+s+" geometry not supported")}case"LineString":switch(s){case"LineString":return Uc(n,r);case"Polygon":case"MultiPolygon":return Kc(n,r);default:throw new Error("feature2 "+s+" geometry not supported")}case"Polygon":switch(s){case"Polygon":case"MultiPolygon":return Vc(n,r);default:throw new Error("feature2 "+s+" geometry not supported")}default:throw new Error("feature1 "+i+" geometry not supported")}}function zc(t,e){var n,r=!1;for(n=0;n<e.coordinates.length;n++)if(Yi(e.coordinates[n],t.coordinates)){r=!0;break}return r}function Yc(t,e){for(var n=0;n<t.coordinates.length;n++){for(var r=!1,i=0;i<e.coordinates.length;i++)Yi(t.coordinates[n],e.coordinates[i])&&(r=!0);if(!r)return!1}return!0}function Xc(t,e){for(var n=!1,r=0;r<t.coordinates.length;r++){if(!Qe(t.coordinates[r],e))return!1;n||(n=Qe(t.coordinates[r],e,{ignoreEndVertices:!0}))}return n}function Wc(t,e){for(var n=!0,r=!1,i=0;i<t.coordinates.length;i++){if(r=rt(t.coordinates[i],e),!r){n=!1;break}r=rt(t.coordinates[i],e,{ignoreBoundary:!0})}return n&&r}function Uc(t,e){for(var n=0;n<t.coordinates.length;n++)if(!Qe(t.coordinates[n],e))return!1;return!0}function Gc(t,e){const n=t.coordinates,r=[];for(let i=0;i<n.length-1;i++){const s=me([n[i],n[i+1]]),o=Hc(s,Zt(e));o.features.length===0?r.push(s):r.push(...o.features)}return nt(r)}function Kc(t,e){const n=ot(e),r=ot(t);if(!zi(n,r))return!1;for(const o of t.coordinates)if(!rt(o,e))return!1;let i=!1;const s=Gc(t,e);for(const o of s.features){const l=Jc(o.geometry.coordinates[0],o.geometry.coordinates[1]);if(!rt(l,e))return!1;!i&&rt(l,e,{ignoreBoundary:!0})&&(i=!0)}return i}function Vc(t,e){var n=ot(t),r=ot(e);if(!zi(r,n))return!1;for(var i=0;i<t.coordinates[0].length;i++)if(!rt(t.coordinates[0][i],e))return!1;return!0}function zi(t,e){return!(t[0]>e[0]||t[2]<e[2]||t[1]>e[1]||t[3]<e[3])}function Yi(t,e){return t[0]===e[0]&&t[1]===e[1]}function Jc(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}var Qc=qc;const Zc=(t,e)=>e?dc(t,e):!0,tu=(t,e)=>e?Qc(t,e):!0;function eu(t,e="highlight",n="title"){const r=(i,s=[])=>{let o="",l=0,c=0;return s.forEach((u,f)=>{const p=u[1]+1;f&&c>u[0]||(c=u[1],o+=[i.substring(l,u[0]),`<mark class="${e}">`,i.substring(u[0],p),"</mark>"].join(""),l=p)}),o+=i.substring(l),o};return t.filter(({matches:i})=>i&&i.length).map(({item:i,matches:s})=>{const o={...i};return s.forEach(l=>{if(l.key!==n)return;const c=r(au(l.value),lu(l.indices));o.highlightedText=c}),o})}let Xi;const nu=(t,e)=>{Xi=new ut(t,{threshold:.4,distance:50,ignoreLocation:!0,includeMatches:!0,useExtendedSearch:!0,...e})},ru=async(t,e,n)=>{const r=Object.entries(e).filter(([,l])=>l.type==="text"||l.type==="select"||l.type==="multiselect").reduce((l,[c,u])=>{const f="$or",p=[],g=(d,m)=>{const b={};u.type==="text"?b[d]=`${m}`:b[c]=`="${d}"`,p.push(b)};return Object.entries(u.state).filter(([,d])=>d).forEach(([d,m])=>g(d,m)),p.length>0&&l.push({[f]:p}),l},[]);let i;if(!(r.length>0)&&n.matchAllWhenEmpty!==!1)i=t;else{const l={$and:[...r]},c=Xi.search(l);i=n.enableHighlighting?eu(c,"highlight",n.titleProperty):c.map(u=>u.item)}const s=Object.entries(e).filter(([,l])=>l.type==="range").reduce((l,[c,u])=>(l[c]={min:u.state.min,max:u.state.max,format:u.format},l),{});if(Object.keys(s).length>0){const l=[];for(let c=0;c<i.length;c++){const u={};for(const[f,p]of Object.entries(s)){const g=m=>p.format==="date"?ye(m).unix():m,d=Y(f,i[c]);d?Array.isArray(d)?u[f]=s[f].min<=g(d[1])&&g(d[0])<=s[f].max:g(d)>=s[f].min&&g(d)<=s[f].max?u[f]=!0:u[f]=!1:u[f]=!0}Object.values(u).every(f=>!!f)&&l.push(i[c])}i=[...l]}const o=Object.entries(e).filter(([,l])=>l.type==="spatial").reduce((l,[c,u])=>(l[c]={geometry:u.state.geometry,mode:u.state.mode},l),{});if(Object.values(o).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let c=0;c<i.length;c++){const u={};for(const f of Object.keys(o)){const p=Y(f,i[c]),g=o[f].mode||"within";p&&(g==="within"?tu(p,o[f].geometry):Zc(p,o[f].geometry))?u[f]=!0:u[f]=!1}Object.values(u).every(f=>!!f)&&l.push(i[c])}i=[...l]}return i};function iu(t,e){return[{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}},{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...t&&{format:"GeoJSON"},...t&&{url:e}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]}]}function pn(t){if(!t.dirty)return null;switch(t.type){case"multiselect":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"range":t.state.min=t.min,t.state.max=t.max;break;case"select":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"spatial":t.state.geometry=void 0;break;case"text":t.keys.forEach(n=>{t.state[n]=void 0});break}return delete t.stringifiedState,delete t.dirty,t}function pi(t,e){return t*2+e}function su(t){return Object.keys(t).map(e=>({title:A`${t[e].title||t[e].key}:
      ${t[e].stringifiedState}`,key:e})).filter(e=>t[e.key].dirty)}function Zn(t){return Object.values(t).map(e=>e.dirty).filter(e=>e).length>0}async function ou(t,e,n){const r=n.externalFilter(t,e),i=typeof r=="string"||r instanceof String?r:r.url,s=typeof r=="object"&&"fetchFn"in r?await r.fetchFn(i):await fetch(i).then(async o=>await o.json());return r.key?Y(r.key,s):s}function Wi(t,e,n){let r;if(t.detail?r=t.detail.target:r=t.target,r!=null&&r.classList.contains("details-filter")){if(!r.open||e!=null&&e.expandMultipleFilters)return;n.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(i=>{const s=i.shadowRoot.querySelector(".details-filter");s&&s!==r&&s.removeAttribute("open")})}else{if(!(r!=null&&r.open)||e!=null&&e.expandMultipleResults)return;n.querySelectorAll("details").forEach(i=>{i!==r&&i.removeAttribute("open")})}}function Y(t,e){return typeof t=="function"?t(e):t!=null&&t.includes(".")?t.split(".").reduce((n,r)=>n&&n[r],e):e[t]}function au(t){return t.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}function lu(t,{mergeAdjacent:e=!1}={}){if(!Array.isArray(t))return[];const n=t.map(([i,s])=>i<=s?[i,s]:[s,i]).sort((i,s)=>i[0]-s[0]||i[1]-s[1]),r=[];for(const[i,s]of n){if(r.length===0){r.push([i,s]);continue}const o=r[r.length-1];(e?i<=o[1]+1:i<=o[1])?s>o[1]&&(o[1]=s):r.push([i,s])}return r}var P,Ui,tr,er,Gi,nr,rr,Ki,ir,Vi,Ji;class cu extends ct{constructor(){super();z(this,P);this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=R(this,P,Gi).bind(this),this._handleKeyDown=R(this,P,nr).bind(this)}static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}set showDropdown(n){this.renderRoot.querySelector("[popover]").togglePopover(n)}get showDropdown(){var n;return(n=this.renderRoot.querySelector("[popover]"))==null?void 0:n.matches(":popover-open")}connectedCallback(){super.connectedCallback(),this.inlineMode&&R(this,P,tr).call(this)}disconnectedCallback(){this.inlineMode&&R(this,P,er).call(this),super.disconnectedCallback()}_overlayCleanup(){}updateInline(){this.inlineMode&&this.requestUpdate()}updated(n){n.has("inlineMode")&&(this.inlineMode?R(this,P,tr).call(this):R(this,P,er).call(this))}render(){return A`
      <style>
        ${!this.unstyled&&cr}
      </style>
      ${this.inlineMode?A`
            <div
              class="inline-container-wrapper"
              @click="${R(this,P,rr)}"
            >
              <div class="inline-container square border" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips
                      .items=${su(this.filters)}
                      .controller=${{remove:n=>R(this,P,Vi).call(this,n)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${O(Zn(this.filters),()=>A`
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
                  class="input-container field no-margin ${Zn(this.filters)?"dirty-filter-input":""}"
                >
                  <input
                    autocomplete="off"
                    id="eox-itemfilter-input-search"
                    type="text"
                    @click="${R(this,P,rr)}"
                    @focus="${R(this,P,Ki)}"
                    @input="${R(this,P,Ji)}"
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
                  @keydown="${R(this,P,nr)}"
                  @click="${R(this,P,ir)}"
                  @focus="${R(this,P,ir)}"
                >
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `:A`<slot name="section"></slot>`}
    `}}P=new WeakSet,Ui=function(){setTimeout(()=>this._overlayCleanup=Fl(this))},tr=function(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),R(this,P,Ui).call(this)},er=function(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()},Gi=function(n){Xl(n,this)},nr=function(n){Yl(n,this)},rr=function(n){zl(n,this)},Ki=function(){ql(this)},ir=function(n){Hl(n,this)},Vi=function(n){al(n,this)},Ji=function(n){Si(n,this)};customElements.define("eox-itemfilter-container",cu);function uu(t){const e=t.renderRoot.querySelector("input[type='text']");e.value="",pn(t.filterObject),t.requestUpdate()}function fu(t){const e=t.renderRoot.querySelector("input[type='text']");t.isValid=e.checkValidity(),t.filterObject.keys.forEach(n=>{t.filterObject.state[n]=e.value}),t.filterObject.dirty=!0,t.filterObject.stringifiedState=e.value,t.dispatchEvent(new CustomEvent("filter")),e.value===""&&t.reset()}const sr="ddd, D MMM YYYY HH:mm:ss";function hu(t){if(t.filterObject=pn(t.filterObject),t.filterObject){const e=t.querySelector("tc-range-slider"),n=t.filterObject.min,r=t.filterObject.max;e.value1!==n&&(e.value1=n),e.value2!==r&&(e.value2=r)}t.requestUpdate()}function du(t,e){const[n,r]=t.detail.values;(n!==e.filterObject.state.min||r!==e.filterObject.state.max)&&([e.filterObject.state.min,e.filterObject.state.max]=[n,r],e.filterObject.dirty=!0),e.filterObject.dirty&&(e.filterObject.stringifiedState=e.filterObject.format==="date"?`${ye.unix(n).format(sr)} - ${ye.unix(r).format(sr)}`:`${n} - ${r}`),e.dispatchEvent(new CustomEvent("filter")),n===e.filterObject.min&&r===e.filterObject.max?e.reset():e.requestUpdate()}function pu(t,e,n){const r=n.filterObject.format==="date",i=n.filterObject.state[t],s=r?ye.unix(i).format(sr):i;return A`<div class="range-${e}">${s}</div>`}function gu(t){yu(-1,t),pn(t.filterObject),t.requestUpdate()}function yu(t,e){e.selectedItems=[],vr(e),Zi(e)}function Qi(t,e){const n=e.selectedItems.indexOf(t);n>=0?e.selectedItems=e.selectedItems.filter((r,i)=>i!==n):e.type==="multiselect"?e.selectedItems=[...e.selectedItems,t]:(e.selectedItems=[t],e.showSuggestions=!1),vr(e),Zi(e)}function mu(t,e){t.target instanceof HTMLInputElement&&(e.query=t.target.value,e.showSuggestions=!0)}function vu(t,e){switch(t.key){case"ArrowDown":e.highlightedIndex=Math.min(e.highlightedIndex+1,e.filteredSuggestions.length-1);break;case"ArrowUp":e.highlightedIndex=Math.max(e.highlightedIndex-1,0);break;case"Enter":e.highlightedIndex>=0&&Qi(e.filteredSuggestions[e.highlightedIndex],e);break;case"Escape":e.showSuggestions=!1;break}}function bu(t,e){(t.has("suggestions")||t.has("query"))&&vr(e)}function wu(t,e){var r;const n=((r=t.filterObject)==null?void 0:r.sort)||((i,s)=>i.toString().localeCompare(s.toString(),void 0,{numeric:!0}));return e.sort(n).map(i=>i)}function vr(t){var r,i,s;const e=(((r=t.filterObject)==null?void 0:r.filterKeys)||t.suggestions).map(o=>`${o}`);let n=e;t.query&&(n=new ut(e,{threshold:.4}).search(t.query).map(l=>l.item)),t.filteredSuggestions=(i=t.filterObject)!=null&&i.filterKeys?n:wu(t,n),(s=t.filterObject)!=null&&s.filterKeys&&(t.filterObject.state=e.reduce((o,l)=>(l in o||(o[l]=void 0),o),t.filterObject.state)),t.highlightedIndex=-1}function Zi(t){Object.keys(t.filterObject.state).forEach(e=>{t.filterObject.state[e]=t.selectedItems.includes(e)}),t.filterObject.stringifiedState=Object.keys(t.filterObject.state).filter(e=>t.filterObject.state[e]).join(", ")||"",t.filterObject.dirty=t.filterObject.stringifiedState.length>0,t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}function xu(t){pn(t.filterObject),t.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),t.requestUpdate()}function _u(t){t.renderRoot.querySelector("#eox-map").innerHTML="",ts(t)}function Mu(t,e){e.filterObject.state.mode=t;const n=new CustomEvent("filter",{detail:{[e.filterObject.key]:{}}});e.dispatchEvent(n)}function ts(t){const e=t.renderRoot.querySelector("#eox-map");e.innerHTML===""&&(e.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const n=t.geometry&&Au(t.geometry),r=iu(t.geometry,n);t.eoxMap=t.renderRoot.querySelector("eox-map"),setTimeout(()=>{t.eoxMap.layers=r;const i=s=>{const o=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:s.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});t.dispatchEvent(o)};t.eoxMap.interactions.drawInteraction.on("drawend",s=>{i(s.feature),t.eoxMap.removeInteraction("drawInteraction")}),t.eoxMap.interactions.drawInteraction_modify.on("modifyend",s=>{i(s.features.getArray()[0])})},1e3)}function Au(t){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:t}]}))}`}var xe,nn;class Cu extends ct{constructor(){super();z(this,xe,()=>{fu(this)});z(this,nn,n=>{n.key==="Enter"&&n.target.value&&this.results&&this.results.length===1&&(this.dispatchEvent(new CustomEvent("result",{detail:this.results[0]})),n.target.value="",q(this,xe).call(this))});ce(this,"debouncedInputHandler",an(q(this,xe),500,{leading:!0}));this.filterObject={},this.results=null,this.unstyled=!1,this.tabIndex=0,this.isValid=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},results:{state:!0,type:Array},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}reset(){uu(this)}createRenderRoot(){return this}render(){return O(this.filterObject,()=>{var n;return A`
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
              @keydown=${q(this,nn)}
            />
          </div>
        </div>
        <small class="error-validation" style="margin-left: var(--list-padding)"
          >${this.filterObject.validation&&this.isValid===!1?this.filterObject.validation.message:""}</small
        >
      `})}}xe=new WeakMap,nn=new WeakMap;customElements.define("eox-itemfilter-text",Cu);function Su(t,e,n){if(!e||typeof e=="string"&&e.trim()==="")return[];const r=n.config.aggregateResults;return e==="No category"?t.filter(i=>{const s=i[r];return Array.isArray(s)?s.filter(Boolean).length===0:!s}):t.filter(i=>{const s=i[r];if(Array.isArray(s)){if(s.filter(Boolean).length===0)return!1}else if(!s)return!1;let o;return n.filters[r]&&(o=Object.keys(n.filters[r]).filter(c=>n.filters[r].state[c])),(o!=null&&o.length?o.includes(e):!0)&&Array.isArray(s)?s.includes(e):s===e})}function Lu(t,e){return A`
    <details
      class="details-results"
      @toggle=${e.handleAccordion}
      ?open=${e.config.expandResults||Ct}
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
        ${es(e,t)}
      </div>
    </details>
  `}function es(t,e){const n=t.results,r=e?t.aggregateResults(n,e):n,i=t.config,s=o=>{var l;return((l=t.selectedResult)==null?void 0:l[i.idProperty])===o[i.idProperty]?"highlighted":Ct};return Xr`
    ${t.resultType==="cards"?Wt("<eox-layout fill-grid>"):Wt('<ul id="results" class="list no-space" part="results">')}
      ${ua(r,o=>o.id,o=>Xr`
        ${t.resultType==="cards"?Wt("<eox-layout-item"):Wt("<li")}
            class="${s(o)}"
            @click=${()=>{t.selectedResult===o?t.selectedResult=null:t.selectedResult=o,t.dispatchEvent(new CustomEvent("result",{detail:t.selectedResult}))}}
            @mouseenter=${()=>{t.dispatchEvent(new CustomEvent("mouseenter:result",{detail:o}))}}
            @mouseleave=${()=>{t.dispatchEvent(new CustomEvent("mouseleave:result",{detail:o}))}}
          >
            <nav id="${o.id}" class="responsive tiny-space">
              ${O(i.subTitleProperty||i.imageProperty,()=>A`
                  ${O(t.resultType==="cards",()=>Y(i.imageProperty,o)?A`
                            <img
                              loading="lazy"
                              fetchpriority="low"
                              class="image"
                              src="${Y(i.imageProperty,o)}"
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
                        ${Y(i.imageProperty,o)?A`
                              <img
                                loading="lazy"
                                fetchpriority="low"
                                class="image"
                                src="${Y(i.imageProperty,o)}"
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
                      >${Ne(o.highlightedText||Y(i.titleProperty,o).toString())}</span
                    >
                    ${O(!!Y(i.subTitleProperty,o),()=>A`
                        <small class="subtitle no-line truncate"
                          >${Ne(Y(i.subTitleProperty,o).toString())}</small
                        >
                      `)}
                  </div>
                `,()=>A`
                  <div class="small-line max truncate">
                    <span
                      class="title truncate ${o.highlightedText?"highlight-enabled":""}"
                      >${Ne(o.highlightedText||o[i.titleProperty])}</span
                    >
                  </div>
                `)}
              ${O(t.enableResultAction,()=>A`
                  <button
                    class="result-action square transparent primary-text small"
                    @click=${l=>{l.stopPropagation(),t.dispatchEvent(new CustomEvent("click:result-action",{detail:o}))}}
                  >
                    <icon class="small"
                      >${Ne(t.resultActionIcon)}</icon
                    >
                  </button>
                `)}
            </nav>
          </li>
        `)}
    ${t.resultType==="cards"?Wt("</eox-layout>"):Wt("</ul>")}
  `}var vt,or,ns,rs;class Eu extends ct{constructor(){super();z(this,vt);this.config=null,this.results=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list",this.resultActionIcon=void 0}static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Array},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String},resultActionIcon:{attribute:!1,type:String}}}aggregateResults(n,r){return Su(n,r,this)}createRenderRoot(){return this}handleAccordion(n){Wi(n,this.config,this)}render(){return A`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${O(this.results.length<1,()=>A`<small class="no-results">No matching items</small>`,()=>Ct)}
          ${O(this.config.aggregateResults,()=>on(R(this,vt,rs).call(this),n=>A`${O(this.aggregateResults(this.results,n).length===1&&this.config.autoSpreadSingle,()=>A`<div style="margin-left: -8px">
                        ${R(this,vt,or).call(this,n)}
                      </div>`,()=>R(this,vt,ns).call(this,n))}`),()=>R(this,vt,or).call(this))}
        </div>
      </section>
    `}}vt=new WeakSet,or=function(n){return es(this,n)},ns=function(n){return Lu(n,this)},rs=function(){const n=this.resultAggregation.filter(i=>this.aggregateResults(this.results,i).length);return this.aggregateResults(this.results,"No category").length>0&&n.push("No category"),n};customElements.define("eox-itemfilter-results",Eu);var Lt,ss,os,as;class is extends ct{constructor(){super();z(this,Lt);ce(this,"debouncedInputHandler",an(R(this,Lt,as),500,{leading:!0}));this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(n){bu(n,this)}reset(){gu(this)}firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(n=>this.filterObject.state[n]?n:null).filter(n=>!!n),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}createRenderRoot(){return this}render(){const n=this.type.includes("multi")?"checkbox":"radio",r=this.filteredSuggestions.length>5?"select-overflow scroll":Ct;return A`
      <style>
        :host,
        :root {
          --select-filter-max-items: 5;
        }
      </style>
      ${O((this.filterObject.filterKeys||this.suggestions).length>=10,()=>A`<div class="autocomplete-container">
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
                @input=${R(this,Lt,ss)}
                @keydown=${R(this,Lt,os)}
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
    `}}Lt=new WeakSet,ss=function(n){mu(n,this)},os=function(n){vu(n,this)},as=function(n){Qi(n,this)},ce(is,"properties",{filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}});customElements.define("eox-itemfilter-select",is);var Ht,cs,ar;class ls extends ct{constructor(){super();z(this,Ht);this.filterObject={},this.tabIndex=0,this.inputHandler=R(this,Ht,cs).bind(this),this.debouncedInputHandler=an(this.inputHandler,500,{leading:!1})}reset(){hu(this)}createRenderRoot(){return this}render(){return O(this.filterObject,()=>A`
        <div
          style="margin-left: var(--list-padding); display: flex; gap: .5rem; align-items: center;"
        >
          ${R(this,Ht,ar).call(this,"min","before")}
          <tc-range-slider
            min="${this.filterObject.min}"
            max="${this.filterObject.max}"
            value1="${this.filterObject.state.min||this.filterObject.min}"
            value2="${this.filterObject.state.max||this.filterObject.max}"
            step="${this.filterObject.step||1}"
            @change=${this.debouncedInputHandler}
          ></tc-range-slider>
          ${R(this,Ht,ar).call(this,"max","after")}
        </div>
      `)}}Ht=new WeakSet,cs=function(n){du(n,this)},ar=function(n,r){return pu(n,r,this)},ce(ls,"properties",{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number}});customElements.define("eox-itemfilter-range",ls);var rn,us;class $u extends ct{constructor(){super();z(this,rn);this.filterObject={},this.tabIndex=0}static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}reset(){xu(this)}createRenderRoot(){return this}render(){return O(this.filterObject,()=>{var n;return A`
        <div style="margin-left: var(--list-padding)">
          <nav class="vertical-margin small-margin wrap">
            ${on(["intersects","within"],r=>A`
                <label class="radio small small-text">
                  <input
                    tabindex=${this.tabIndex}
                    type="radio"
                    name="mode"
                    .checked="${(this.filterObject.state.mode||"")===r||Ct}"
                    value="${r}"
                    @click=${()=>R(this,rn,us).call(this,r)}
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
      `})}}rn=new WeakSet,us=function(n){Mu(n,this)};customElements.define("eox-itemfilter-spatial",$u);var sn,fs;class Ru extends ct{constructor(){super();z(this,sn);this.geometry=null,this.eoxMap=null}static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}firstUpdated(){R(this,sn,fs).call(this)}reset(){_u(this)}render(){return A`<div id="eox-map"></div>`}}sn=new WeakSet,fs=function(){ts(this)};customElements.define("eox-itemfilter-spatial-filter",Ru);function Bu(t,e){e.renderRoot.querySelectorAll(".chip").forEach(n=>{n.classList.remove("highlighted")}),t.target instanceof HTMLElement&&t.target.classList.add("highlighted"),e.requestUpdate()}function Pu(t,e){const{code:n,target:r}=t;r instanceof HTMLElement&&r.id!=="eox-itemfilter-input-search"||e.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(n)||(n==="Space"&&t.preventDefault(),["Escape","Space","Enter"].includes(n)||t.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(n)&&Du(n,t.target.value??"",e))}function Du(t,e,n){const r=n.renderRoot.querySelector(".chip.highlighted");if((t==="Escape"||e)&&r&&r.classList.remove("highlighted"),t==="Backspace"&&!e){if(n.items.length){r&&(r.querySelector(".chip-item-close").click(),n.items.splice(Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(r),1));const i=n.renderRoot.querySelectorAll(".chip")[n.renderRoot.querySelectorAll(".chip").length-1];i.classList.contains("highlighted")||i.classList.add("highlighted"),n.requestUpdate()}n._dispatchEvent()}if((t==="ArrowLeft"||t==="ArrowRight")&&!e){if(n.renderRoot.querySelectorAll(".chip").length<1)return;let i=0;const s=n.renderRoot.querySelector(".chip.highlighted");s&&(i=Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(s),s.classList.remove("highlighted")),i=i+(t==="ArrowLeft"?-1:1),t==="ArrowLeft"&&i<0&&(i=n.renderRoot.querySelectorAll(".chip").length-1),t==="ArrowRight"&&i>n.renderRoot.querySelectorAll(".chip").length-1&&(i=0),Array.from(n.renderRoot.querySelectorAll(".chip"))[i].classList.add("highlighted")}}var qt,lr,hs;class ku extends ct{constructor(){super();z(this,qt);this.items={},this.controller={}}static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",R(this,qt,lr).bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",R(this,qt,lr).bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}render(){return A`
      <span class="chip-container">
        ${on(this.items,n=>A`
            <span class="chip tiny-margin" @click=${R(this,qt,hs).bind(this)}>
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
    `}}qt=new WeakSet,lr=function(n){Pu(n,this)},hs=function(n){Bu(n,this)};customElements.define("eox-itemfilter-chips",ku);const Tu=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,resultSorting:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),jn=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","resultSorting","expandMultipleFilters","expandResults","expandMultipleResults","items"];var Ou=200,br="__lodash_hash_undefined__",Iu=1/0,ju="[object Function]",Nu="[object GeneratorFunction]",Fu=/[\\^$.*+?()[\]{}|]/g,Hu=/^\[object .+?Constructor\]$/,qu=typeof At=="object"&&At&&At.Object===Object&&At,zu=typeof self=="object"&&self&&self.Object===Object&&self,wr=qu||zu||Function("return this")();function Yu(t,e){var n=t?t.length:0;return!!n&&Wu(t,e,0)>-1}function Xu(t,e,n,r){for(var i=t.length,s=n+-1;++s<i;)if(e(t[s],s,t))return s;return-1}function Wu(t,e,n){if(e!==e)return Xu(t,Uu,n);for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}function Uu(t){return t!==t}function Gu(t,e){return t.has(e)}function Ku(t,e){return t==null?void 0:t[e]}function Vu(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch{}return e}function ds(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var Ju=Array.prototype,Qu=Function.prototype,ps=Object.prototype,Nn=wr["__core-js_shared__"],gi=function(){var t=/[^.]+$/.exec(Nn&&Nn.keys&&Nn.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),gs=Qu.toString,xr=ps.hasOwnProperty,Zu=ps.toString,tf=RegExp("^"+gs.call(xr).replace(Fu,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ef=Ju.splice,nf=_r(wr,"Map"),Fn=_r(wr,"Set"),we=_r(Object,"create");function Ft(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function rf(){this.__data__=we?we(null):{}}function sf(t){return this.has(t)&&delete this.__data__[t]}function of(t){var e=this.__data__;if(we){var n=e[t];return n===br?void 0:n}return xr.call(e,t)?e[t]:void 0}function af(t){var e=this.__data__;return we?e[t]!==void 0:xr.call(e,t)}function lf(t,e){var n=this.__data__;return n[t]=we&&e===void 0?br:e,this}Ft.prototype.clear=rf;Ft.prototype.delete=sf;Ft.prototype.get=of;Ft.prototype.has=af;Ft.prototype.set=lf;function ie(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function cf(){this.__data__=[]}function uf(t){var e=this.__data__,n=gn(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():ef.call(e,n,1),!0}function ff(t){var e=this.__data__,n=gn(e,t);return n<0?void 0:e[n][1]}function hf(t){return gn(this.__data__,t)>-1}function df(t,e){var n=this.__data__,r=gn(n,t);return r<0?n.push([t,e]):n[r][1]=e,this}ie.prototype.clear=cf;ie.prototype.delete=uf;ie.prototype.get=ff;ie.prototype.has=hf;ie.prototype.set=df;function se(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function pf(){this.__data__={hash:new Ft,map:new(nf||ie),string:new Ft}}function gf(t){return yn(this,t).delete(t)}function yf(t){return yn(this,t).get(t)}function mf(t){return yn(this,t).has(t)}function vf(t,e){return yn(this,t).set(t,e),this}se.prototype.clear=pf;se.prototype.delete=gf;se.prototype.get=yf;se.prototype.has=mf;se.prototype.set=vf;function Ze(t){var e=-1,n=t?t.length:0;for(this.__data__=new se;++e<n;)this.add(t[e])}function bf(t){return this.__data__.set(t,br),this}function wf(t){return this.__data__.has(t)}Ze.prototype.add=Ze.prototype.push=bf;Ze.prototype.has=wf;function gn(t,e){for(var n=t.length;n--;)if(Ef(t[n][0],e))return n;return-1}function xf(t){if(!ys(t)||Cf(t))return!1;var e=$f(t)||Vu(t)?tf:Hu;return e.test(Sf(t))}function _f(t,e,n){var r=-1,i=Yu,s=t.length,o=!0,l=[],c=l;if(s>=Ou){var u=Mf(t);if(u)return ds(u);o=!1,i=Gu,c=new Ze}else c=l;t:for(;++r<s;){var f=t[r],p=f;if(f=f!==0?f:0,o&&p===p){for(var g=c.length;g--;)if(c[g]===p)continue t;l.push(f)}else i(c,p,n)||(c!==l&&c.push(p),l.push(f))}return l}var Mf=Fn&&1/ds(new Fn([,-0]))[1]==Iu?function(t){return new Fn(t)}:Rf;function yn(t,e){var n=t.__data__;return Af(e)?n[typeof e=="string"?"string":"hash"]:n.map}function _r(t,e){var n=Ku(t,e);return xf(n)?n:void 0}function Af(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function Cf(t){return!!gi&&gi in t}function Sf(t){if(t!=null){try{return gs.call(t)}catch{}try{return t+""}catch{}}return""}function Lf(t){return t&&t.length?_f(t):[]}function Ef(t,e){return t===e||t!==t&&e!==e}function $f(t){var e=ys(t)?Zu.call(t):"";return e==ju||e==Nu}function ys(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Rf(){}var Bf=Lf;const ms=yi(Bf);var tn={exports:{}};tn.exports;(function(t,e){var n=200,r="Expected a function",i="__lodash_hash_undefined__",s=1,o=2,l=9007199254740991,c="[object Arguments]",u="[object Array]",f="[object Boolean]",p="[object Date]",g="[object Error]",d="[object Function]",m="[object GeneratorFunction]",b="[object Map]",x="[object Number]",M="[object Object]",E="[object Promise]",S="[object RegExp]",$="[object Set]",B="[object String]",N="[object Symbol]",Z="[object WeakMap]",I="[object ArrayBuffer]",F="[object DataView]",W="[object Float32Array]",Rt="[object Float64Array]",oe="[object Int8Array]",wt="[object Int16Array]",Mr="[object Int32Array]",V="[object Uint8Array]",zt="[object Uint8ClampedArray]",Ae="[object Uint16Array]",xs="[object Uint32Array]",_s=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ms=/^\w*$/,As=/^\./,Cs=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ss=/[\\^$.*+?()[\]{}|]/g,Ls=/\\(\\)?/g,Es=/^\[object .+?Constructor\]$/,$s=/^(?:0|[1-9]\d*)$/,D={};D[W]=D[Rt]=D[oe]=D[wt]=D[Mr]=D[V]=D[zt]=D[Ae]=D[xs]=!0,D[c]=D[u]=D[I]=D[f]=D[F]=D[p]=D[g]=D[d]=D[b]=D[x]=D[M]=D[S]=D[$]=D[B]=D[Z]=!1;var Ar=typeof At=="object"&&At&&At.Object===Object&&At,Rs=typeof self=="object"&&self&&self.Object===Object&&self,xt=Ar||Rs||Function("return this")(),Cr=e&&!e.nodeType&&e,Sr=Cr&&!0&&t&&!t.nodeType&&t,Bs=Sr&&Sr.exports===Cr,Lr=Bs&&Ar.process,Er=function(){try{return Lr&&Lr.binding("util")}catch{}}(),$r=Er&&Er.isTypedArray;function Ps(a,h){for(var y=-1,v=a?a.length:0,_=Array(v);++y<v;)_[y]=h(a[y],y,a);return _}function Ds(a,h){for(var y=-1,v=h.length,_=a.length;++y<v;)a[_+y]=h[y];return a}function ks(a,h){for(var y=-1,v=a?a.length:0;++y<v;)if(h(a[y],y,a))return!0;return!1}function Ts(a){return function(h){return h==null?void 0:h[a]}}function Os(a,h){for(var y=-1,v=Array(a);++y<a;)v[y]=h(y);return v}function Is(a){return function(h){return a(h)}}function js(a,h){return a==null?void 0:a[h]}function mn(a){var h=!1;if(a!=null&&typeof a.toString!="function")try{h=!!(a+"")}catch{}return h}function Ns(a){var h=-1,y=Array(a.size);return a.forEach(function(v,_){y[++h]=[_,v]}),y}function Fs(a,h){return function(y){return a(h(y))}}function Hs(a){var h=-1,y=Array(a.size);return a.forEach(function(v){y[++h]=v}),y}var qs=Array.prototype,zs=Function.prototype,Ce=Object.prototype,vn=xt["__core-js_shared__"],Rr=function(){var a=/[^.]+$/.exec(vn&&vn.keys&&vn.keys.IE_PROTO||"");return a?"Symbol(src)_1."+a:""}(),Br=zs.toString,ht=Ce.hasOwnProperty,Yt=Ce.toString,Ys=RegExp("^"+Br.call(ht).replace(Ss,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Se=xt.Symbol,Pr=xt.Uint8Array,Xs=Ce.propertyIsEnumerable,Ws=qs.splice,Dr=Se?Se.isConcatSpreadable:void 0,Us=Fs(Object.keys,Object),bn=Xt(xt,"DataView"),ae=Xt(xt,"Map"),wn=Xt(xt,"Promise"),xn=Xt(xt,"Set"),_n=Xt(xt,"WeakMap"),le=Xt(Object,"create"),Gs=Pt(bn),Ks=Pt(ae),Vs=Pt(wn),Js=Pt(xn),Qs=Pt(_n),Le=Se?Se.prototype:void 0,Mn=Le?Le.valueOf:void 0,kr=Le?Le.toString:void 0;function Bt(a){var h=-1,y=a?a.length:0;for(this.clear();++h<y;){var v=a[h];this.set(v[0],v[1])}}function Zs(){this.__data__=le?le(null):{}}function to(a){return this.has(a)&&delete this.__data__[a]}function eo(a){var h=this.__data__;if(le){var y=h[a];return y===i?void 0:y}return ht.call(h,a)?h[a]:void 0}function no(a){var h=this.__data__;return le?h[a]!==void 0:ht.call(h,a)}function ro(a,h){var y=this.__data__;return y[a]=le&&h===void 0?i:h,this}Bt.prototype.clear=Zs,Bt.prototype.delete=to,Bt.prototype.get=eo,Bt.prototype.has=no,Bt.prototype.set=ro;function dt(a){var h=-1,y=a?a.length:0;for(this.clear();++h<y;){var v=a[h];this.set(v[0],v[1])}}function io(){this.__data__=[]}function so(a){var h=this.__data__,y=$e(h,a);if(y<0)return!1;var v=h.length-1;return y==v?h.pop():Ws.call(h,y,1),!0}function oo(a){var h=this.__data__,y=$e(h,a);return y<0?void 0:h[y][1]}function ao(a){return $e(this.__data__,a)>-1}function lo(a,h){var y=this.__data__,v=$e(y,a);return v<0?y.push([a,h]):y[v][1]=h,this}dt.prototype.clear=io,dt.prototype.delete=so,dt.prototype.get=oo,dt.prototype.has=ao,dt.prototype.set=lo;function pt(a){var h=-1,y=a?a.length:0;for(this.clear();++h<y;){var v=a[h];this.set(v[0],v[1])}}function co(){this.__data__={hash:new Bt,map:new(ae||dt),string:new Bt}}function uo(a){return Re(this,a).delete(a)}function fo(a){return Re(this,a).get(a)}function ho(a){return Re(this,a).has(a)}function po(a,h){return Re(this,a).set(a,h),this}pt.prototype.clear=co,pt.prototype.delete=uo,pt.prototype.get=fo,pt.prototype.has=ho,pt.prototype.set=po;function Ee(a){var h=-1,y=a?a.length:0;for(this.__data__=new pt;++h<y;)this.add(a[h])}function go(a){return this.__data__.set(a,i),this}function yo(a){return this.__data__.has(a)}Ee.prototype.add=Ee.prototype.push=go,Ee.prototype.has=yo;function gt(a){this.__data__=new dt(a)}function mo(){this.__data__=new dt}function vo(a){return this.__data__.delete(a)}function bo(a){return this.__data__.get(a)}function wo(a){return this.__data__.has(a)}function xo(a,h){var y=this.__data__;if(y instanceof dt){var v=y.__data__;if(!ae||v.length<n-1)return v.push([a,h]),this;y=this.__data__=new pt(v)}return y.set(a,h),this}gt.prototype.clear=mo,gt.prototype.delete=vo,gt.prototype.get=bo,gt.prototype.has=wo,gt.prototype.set=xo;function _o(a,h){var y=yt(a)||Sn(a)?Os(a.length,String):[],v=y.length,_=!!v;for(var w in a)ht.call(a,w)&&!(_&&(w=="length"||jr(w,v)))&&y.push(w);return y}function $e(a,h){for(var y=a.length;y--;)if(Hr(a[y][0],h))return y;return-1}var Mo=Fo(So);function Ao(a,h,y,v,_){var w=-1,L=a.length;for(y||(y=Wo),_||(_=[]);++w<L;){var k=a[w];y(k)?Ds(_,k):_[_.length]=k}return _}var Co=Ho();function So(a,h){return a&&Co(a,h,Oe)}function Tr(a,h){h=Be(h,a)?[h]:Or(h);for(var y=0,v=h.length;a!=null&&y<v;)a=a[Pe(h[y++])];return y&&y==v?a:void 0}function Lo(a){return Yt.call(a)}function Eo(a,h){return a!=null&&h in Object(a)}function An(a,h,y,v,_){return a===h?!0:a==null||h==null||!ke(a)&&!Te(h)?a!==a&&h!==h:$o(a,h,An,y,v,_)}function $o(a,h,y,v,_,w){var L=yt(a),k=yt(h),T=u,j=u;L||(T=_t(a),T=T==c?M:T),k||(j=_t(h),j=j==c?M:j);var U=T==M&&!mn(a),G=j==M&&!mn(h),H=T==j;if(H&&!U)return w||(w=new gt),L||ta(a)?Ir(a,h,y,v,_,w):qo(a,h,T,y,v,_,w);if(!(_&o)){var tt=U&&ht.call(a,"__wrapped__"),et=G&&ht.call(h,"__wrapped__");if(tt||et){var Mt=tt?a.value():a,mt=et?h.value():h;return w||(w=new gt),y(Mt,mt,v,_,w)}}return H?(w||(w=new gt),zo(a,h,y,v,_,w)):!1}function Ro(a,h,y,v){var _=y.length,w=_;if(a==null)return!w;for(a=Object(a);_--;){var L=y[_];if(L[2]?L[1]!==a[L[0]]:!(L[0]in a))return!1}for(;++_<w;){L=y[_];var k=L[0],T=a[k],j=L[1];if(L[2]){if(T===void 0&&!(k in a))return!1}else{var U=new gt,G;if(!(G===void 0?An(j,T,v,s|o,U):G))return!1}}return!0}function Bo(a){if(!ke(a)||Go(a))return!1;var h=qr(a)||mn(a)?Ys:Es;return h.test(Pt(a))}function Po(a){return Te(a)&&Ln(a.length)&&!!D[Yt.call(a)]}function Do(a){return typeof a=="function"?a:a==null?ia:typeof a=="object"?yt(a)?Io(a[0],a[1]):Oo(a):sa(a)}function ko(a){if(!Ko(a))return Us(a);var h=[];for(var y in Object(a))ht.call(a,y)&&y!="constructor"&&h.push(y);return h}function To(a,h){var y=-1,v=De(a)?Array(a.length):[];return Mo(a,function(_,w,L){v[++y]=h(_,w,L)}),v}function Oo(a){var h=Yo(a);return h.length==1&&h[0][2]?Fr(h[0][0],h[0][1]):function(y){return y===a||Ro(y,a,h)}}function Io(a,h){return Be(a)&&Nr(h)?Fr(Pe(a),h):function(y){var v=na(y,a);return v===void 0&&v===h?ra(y,a):An(h,v,void 0,s|o)}}function jo(a){return function(h){return Tr(h,a)}}function No(a){if(typeof a=="string")return a;if(En(a))return kr?kr.call(a):"";var h=a+"";return h=="0"&&1/a==-1/0?"-0":h}function Or(a){return yt(a)?a:Vo(a)}function Fo(a,h){return function(y,v){if(y==null)return y;if(!De(y))return a(y,v);for(var _=y.length,w=-1,L=Object(y);++w<_&&v(L[w],w,L)!==!1;);return y}}function Ho(a){return function(h,y,v){for(var _=-1,w=Object(h),L=v(h),k=L.length;k--;){var T=L[++_];if(y(w[T],T,w)===!1)break}return h}}function Ir(a,h,y,v,_,w){var L=_&o,k=a.length,T=h.length;if(k!=T&&!(L&&T>k))return!1;var j=w.get(a);if(j&&w.get(h))return j==h;var U=-1,G=!0,H=_&s?new Ee:void 0;for(w.set(a,h),w.set(h,a);++U<k;){var tt=a[U],et=h[U];if(v)var Mt=L?v(et,tt,U,h,a,w):v(tt,et,U,a,h,w);if(Mt!==void 0){if(Mt)continue;G=!1;break}if(H){if(!ks(h,function(mt,Dt){if(!H.has(Dt)&&(tt===mt||y(tt,mt,v,_,w)))return H.add(Dt)})){G=!1;break}}else if(!(tt===et||y(tt,et,v,_,w))){G=!1;break}}return w.delete(a),w.delete(h),G}function qo(a,h,y,v,_,w,L){switch(y){case F:if(a.byteLength!=h.byteLength||a.byteOffset!=h.byteOffset)return!1;a=a.buffer,h=h.buffer;case I:return!(a.byteLength!=h.byteLength||!v(new Pr(a),new Pr(h)));case f:case p:case x:return Hr(+a,+h);case g:return a.name==h.name&&a.message==h.message;case S:case B:return a==h+"";case b:var k=Ns;case $:var T=w&o;if(k||(k=Hs),a.size!=h.size&&!T)return!1;var j=L.get(a);if(j)return j==h;w|=s,L.set(a,h);var U=Ir(k(a),k(h),v,_,w,L);return L.delete(a),U;case N:if(Mn)return Mn.call(a)==Mn.call(h)}return!1}function zo(a,h,y,v,_,w){var L=_&o,k=Oe(a),T=k.length,j=Oe(h),U=j.length;if(T!=U&&!L)return!1;for(var G=T;G--;){var H=k[G];if(!(L?H in h:ht.call(h,H)))return!1}var tt=w.get(a);if(tt&&w.get(h))return tt==h;var et=!0;w.set(a,h),w.set(h,a);for(var Mt=L;++G<T;){H=k[G];var mt=a[H],Dt=h[H];if(v)var zr=L?v(Dt,mt,H,h,a,w):v(mt,Dt,H,a,h,w);if(!(zr===void 0?mt===Dt||y(mt,Dt,v,_,w):zr)){et=!1;break}Mt||(Mt=H=="constructor")}if(et&&!Mt){var Ie=a.constructor,je=h.constructor;Ie!=je&&"constructor"in a&&"constructor"in h&&!(typeof Ie=="function"&&Ie instanceof Ie&&typeof je=="function"&&je instanceof je)&&(et=!1)}return w.delete(a),w.delete(h),et}function Re(a,h){var y=a.__data__;return Uo(h)?y[typeof h=="string"?"string":"hash"]:y.map}function Yo(a){for(var h=Oe(a),y=h.length;y--;){var v=h[y],_=a[v];h[y]=[v,_,Nr(_)]}return h}function Xt(a,h){var y=js(a,h);return Bo(y)?y:void 0}var _t=Lo;(bn&&_t(new bn(new ArrayBuffer(1)))!=F||ae&&_t(new ae)!=b||wn&&_t(wn.resolve())!=E||xn&&_t(new xn)!=$||_n&&_t(new _n)!=Z)&&(_t=function(a){var h=Yt.call(a),y=h==M?a.constructor:void 0,v=y?Pt(y):void 0;if(v)switch(v){case Gs:return F;case Ks:return b;case Vs:return E;case Js:return $;case Qs:return Z}return h});function Xo(a,h,y){h=Be(h,a)?[h]:Or(h);for(var v,_=-1,L=h.length;++_<L;){var w=Pe(h[_]);if(!(v=a!=null&&y(a,w)))break;a=a[w]}if(v)return v;var L=a?a.length:0;return!!L&&Ln(L)&&jr(w,L)&&(yt(a)||Sn(a))}function Wo(a){return yt(a)||Sn(a)||!!(Dr&&a&&a[Dr])}function jr(a,h){return h=h??l,!!h&&(typeof a=="number"||$s.test(a))&&a>-1&&a%1==0&&a<h}function Be(a,h){if(yt(a))return!1;var y=typeof a;return y=="number"||y=="symbol"||y=="boolean"||a==null||En(a)?!0:Ms.test(a)||!_s.test(a)||h!=null&&a in Object(h)}function Uo(a){var h=typeof a;return h=="string"||h=="number"||h=="symbol"||h=="boolean"?a!=="__proto__":a===null}function Go(a){return!!Rr&&Rr in a}function Ko(a){var h=a&&a.constructor,y=typeof h=="function"&&h.prototype||Ce;return a===y}function Nr(a){return a===a&&!ke(a)}function Fr(a,h){return function(y){return y==null?!1:y[a]===h&&(h!==void 0||a in Object(y))}}var Vo=Cn(function(a){a=ea(a);var h=[];return As.test(a)&&h.push(""),a.replace(Cs,function(y,v,_,w){h.push(_?w.replace(Ls,"$1"):v||y)}),h});function Pe(a){if(typeof a=="string"||En(a))return a;var h=a+"";return h=="0"&&1/a==-1/0?"-0":h}function Pt(a){if(a!=null){try{return Br.call(a)}catch{}try{return a+""}catch{}}return""}function Jo(a,h){return Ao(Qo(a,h))}function Qo(a,h){var y=yt(a)?Ps:To;return y(a,Do(h))}function Cn(a,h){if(typeof a!="function"||h&&typeof h!="function")throw new TypeError(r);var y=function(){var v=arguments,_=h?h.apply(this,v):v[0],w=y.cache;if(w.has(_))return w.get(_);var L=a.apply(this,v);return y.cache=w.set(_,L),L};return y.cache=new(Cn.Cache||pt),y}Cn.Cache=pt;function Hr(a,h){return a===h||a!==a&&h!==h}function Sn(a){return Zo(a)&&ht.call(a,"callee")&&(!Xs.call(a,"callee")||Yt.call(a)==c)}var yt=Array.isArray;function De(a){return a!=null&&Ln(a.length)&&!qr(a)}function Zo(a){return Te(a)&&De(a)}function qr(a){var h=ke(a)?Yt.call(a):"";return h==d||h==m}function Ln(a){return typeof a=="number"&&a>-1&&a%1==0&&a<=l}function ke(a){var h=typeof a;return!!a&&(h=="object"||h=="function")}function Te(a){return!!a&&typeof a=="object"}function En(a){return typeof a=="symbol"||Te(a)&&Yt.call(a)==N}var ta=$r?Is($r):Po;function ea(a){return a==null?"":No(a)}function na(a,h,y){var v=a==null?void 0:Tr(a,h);return v===void 0?y:v}function ra(a,h){return a!=null&&Xo(a,h,Eo)}function Oe(a){return De(a)?_o(a):ko(a)}function ia(a){return a}function sa(a){return Be(a)?Ts(Pe(a)):jo(a)}t.exports=Jo})(tn,tn.exports);var Pf=tn.exports;const vs=yi(Pf);function Df(t,e,n){let r=[];t.filterProperties.length&&t.filterProperties.forEach(s=>{const o={},l=u=>s.format==="date"?ye(u).unix():parseFloat(u);e.forEach(u=>{var f,p;if(s.type==="range"){const g=Y(s.key,u);if(Array.isArray(g)){const d=[l(g[0]),l(g[1])];o.min=o.min!==void 0?Math.min(o.min,d[0]):d[0],o.max=o.max!==void 0?Math.max(o.max,d[1]):d[1]}else{const d=l(g);o.min=o.min!==void 0?Math.min(o.min,d):d,o.max=o.max!==void 0?Math.max(o.max,d):d}return}Array.isArray(u[s.key])?u[s.key].forEach(g=>{o[g]=void 0}):s.type==="spatial"?(o.geometry=((f=s==null?void 0:s.state)==null?void 0:f.geometry)||void 0,o.geometry&&(s.stringifiedState=o.geometry.type),o.mode=s.mode||"intersects"):(p=s.key)!=null&&p.includes(".")?ms(vs(n.items,s.key)).filter(g=>g).forEach(g=>{o[g]=void 0}):o[u[s.key]]=void 0});const c=s.key||s.keys.join("|");n.filters[c]=Object.assign({type:s.type||"multiselect",dirty:s.state?Object.values(s.state).some(u=>u):void 0,key:c},s.type==="range"?{min:o.min,max:o.max,format:s.format}:{},s),n.filters[c].state=Object.assign({},o,s.state)}),t.matchAllWhenEmpty!==!1&&(n.results=n.sortResults(e),n.requestUpdate()),t.aggregateResults&&(r=Array.from(new Set(e.reduce((s,o)=>s.concat(o[t.aggregateResults]),[]))).filter(s=>s).sort((s,o)=>s.localeCompare(o)));const i=[];return Object.values(n.filters).forEach(s=>{s.type==="text"?s.keys.forEach(o=>{i.includes(o)||i.push(o)}):(s.type==="select"||s.type==="multiselect")&&(i.includes(s.key)||i.push(s.key))}),nu(e,Object.assign({keys:i},t.fuseConfig)),r}async function kf(t,e,n){let r;n.externalFilter?r=await ou(e,n.filters,t):r=await ru(e,n.filters,t),n.results=n.sortResults(r,{isExternalResult:!!n.externalFilter})}function Tf(t,e,n){const r=`filter-${t.key}`.replace("|","-");switch(t.type){case"text":return A`<eox-itemfilter-text
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
          .suggestions="${ms(vs(n.items,t.key)).filter(i=>i)}"
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
      `;default:return A``}}function Of(t,e,n={}){var o;const{resultSorting:r}=e;if(r===!1)return t;if(r===void 0)return n.isExternalResult||(o=e.fuseConfig)!=null&&o.shouldSort?t:[...t].sort((l,c)=>{const u=Y(e.titleProperty,l)||"",f=Y(e.titleProperty,c)||"";return u.toString().localeCompare(f.toString())});if(typeof r=="function")return[...t].sort(r);const i=typeof r=="string"?r:r.key,s=typeof r=="object"&&r.order==="desc"?-1:1;return i?[...t].sort((l,c)=>{const u=Y(i,l)||"",f=Y(i,c)||"";return u.toString().localeCompare(f.toString())*s}):t}function If(t,e,n){return A`
    ${O(t.dirty,()=>A`
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
                <span class="tooltip left">Reset filter</span>
              `}
        </button>
      `)}
  `}function jf(t){t.renderRoot.querySelectorAll("[data-type='filter']").forEach(e=>{typeof e.reset=="function"&&e.reset()}),t.search()}var _e,Qt,J,ne,bs,ws;class Nf extends ct{constructor(){super();z(this,ne);z(this,_e,[]);z(this,Qt,[]);z(this,J,Tu);this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=an(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.resultSorting=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.enableResultAction=!1,this.resultActionIcon='<svg style="width: 24px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>click me!</title><path fill="currentColor" d="M11.5,11L17.88,16.37L17,16.55L16.36,16.67C15.73,16.8 15.37,17.5 15.65,18.07L15.92,18.65L17.28,21.59L15.86,22.25L14.5,19.32L14.24,18.74C13.97,18.15 13.22,17.97 12.72,18.38L12.21,18.78L11.5,19.35V11M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10" /></svg>',this.styleOverride="",this.unstyled=!1}static get properties(){return{items:{attribute:!1,type:Object},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{attribute:!1,type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{attribute:!1,type:Array},fuseConfig:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},resultSorting:{attribute:!1,type:Object},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},enableResultAction:{attribute:!1,type:Boolean},resultActionIcon:{attribute:!1,type:String},styleOverride:{type:String},unstyled:{type:Boolean}}}apply(){ue(this,J,jn.reduce((n,r)=>(n[r]=this[r],n),{})),ue(this,_e,Df(q(this,J),q(this,Qt),this)),this.search()}async searchHandler(){await kf(q(this,J),q(this,Qt),this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(n,r){return Of(n,q(this,J),r)}resetFilters(){jf(this)}firstUpdated(n){var i;let r={};jn.map(s=>{r={...r,[s]:this[s]}}),ue(this,J,r),ue(this,Qt,((i=this.items)==null?void 0:i.map((s,o)=>Object.assign({id:s[this.idProperty]||`item-${o}`},s)))||[]),this.apply()}updated(n){jn.map(r=>n.has(r)?(this.firstUpdated(void 0),!0):!1)}updateResult(n){this.selectedResult=n.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}mouseEnterResult(n){this.dispatchEvent(new CustomEvent("mouseenter:result",{detail:n.detail,bubbles:!0,composed:!0}))}mouseLeaveResult(n){this.dispatchEvent(new CustomEvent("mouseleave:result",{detail:n.detail,bubbles:!0,composed:!0}))}emitResultAction(n){this.dispatchEvent(new CustomEvent("click:result-action",{detail:n.detail,bubbles:!0,composed:!0}))}render(){var n;return A`
      <style>
        ${ga}
        ${!this.unstyled&&cr}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":Ct}
        @submit="${r=>r.preventDefault()}"
      >
        ${O(this.filterProperties,()=>A`
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
                  ${O(!this.inlineMode,()=>A`
                      <nav class="title-nav">
                        <div class="max">
                          <slot name="filterstitle"
                            ><p><strong>Filters</strong></p></slot
                          >
                        </div>
                        ${O(!this.inlineMode&&q(this,J).filterProperties&&!this.inlineMode&&q(this,J).filterProperties&&Zn(this.filters),()=>A`
                            <button
                              type="button"
                              id="filter-reset"
                              class="reset-icon border small"
                              data-cy="filter-reset"
                              @click=${()=>this.resetFilters()}
                            >
                              ${this.unstyled?Ct:A`
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
                      ${on(Object.values(this.filters),(r,i)=>A` <li class="no-padding">
                            <eox-itemfilter-expandcontainer
                              .filterObject=${r}
                              @details-toggled=${s=>Wi(s,q(this,J),this)}
                              data-details="${r.key}"
                            >
                              ${R(this,ne,ws).call(this,r,pi(i,1))}
                              ${R(this,ne,bs).call(this,r,pi(i,2))}
                            </eox-itemfilter-expandcontainer>
                          </li>`)}
                    </ul>
                  </div>
                </section>
              </eox-itemfilter-container>
            </div>
          `)}
        ${O(((n=q(this,J))==null?void 0:n.showResults)&&this.results,()=>A`
            <div class="small-space"></div>
            <eox-itemfilter-results
              .config=${q(this,J)}
              .results=${this.results}
              .filters=${this.filters}
              .resultAggregation=${q(this,_e)}
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
    `}}_e=new WeakMap,Qt=new WeakMap,J=new WeakMap,ne=new WeakSet,bs=function(n,r){return Tf(n,r,this)},ws=function(n,r){return If(n,r,this)};customElements.define("eox-itemfilter",Nf);export{Nf as EOxItemFilter};
