var $o=Object.defineProperty;var Mr=t=>{throw TypeError(t)};var _o=(t,e,n)=>e in t?$o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var pe=(t,e,n)=>_o(t,typeof e!="symbol"?e+"":e,n),Mn=(t,e,n)=>e.has(t)||Mr("Cannot "+n);var rt=(t,e,n)=>(Mn(t,e,"read from private field"),n?n.call(t):e.get(t)),it=(t,e,n)=>e.has(t)?Mr("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Be=(t,e,n,r)=>(Mn(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),j=(t,e,n)=>(Mn(t,e,"access private method"),n);import{e as Co,a as So,i as xt,E as jt,x as S}from"./addCommonStyleSheet.BIp1szw2.js";import{c as Lo,o as Oe,a as en}from"./unsafe-html.DP53xwUh.js";import{n as Z}from"./when.BR7zwNJC.js";import{g as Vn,c as Dt}from"./commonjsHelpers.Cpj98o6Y.js";import{_ as nn}from"./index.DpJ-aFtE.js";import{f as qe,a as Ln,p as Eo,m as Do,l as Ro}from"./toolcool-range-slider.min.CG0RIoNP.js";import{o as Po}from"./orient2d.DArCjZZA.js";const To=`
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
`;So();const Yn=`
${Co}
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
  padding: .5rem var(--padding);
  gap: var(--card-gap, 16px);
  --column-width: var(--card-width, 300px);
  --row-height: var(--card-height, 200px);
}
eox-layout-item {
  position: relative;
  border-radius: var(--card-border-radius, 8px);
  cursor: pointer;
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
.inline-content::-webkit-scrollbar {
  inline-size: 0.4rem;
  block-size: 0.4rem;
}
-container-results::-webkit-scrollbar-thumb,
.inline-container::-webkit-scrollbar-thumb,
.inline-content::-webkit-scrollbar-thumb {
  background: lightgrey;
  border-radius: 1rem;
  cursor: default;
}
.inline-container:is(:hover,:focus)::-webkit-scrollbar-thumb,
.inline-content:is(:hover,:focus)::-webkit-scrollbar-thumb {
  background: var(--outline);
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
  color: white;
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
`;var Je,Wr;class ko extends xt{constructor(){super();it(this,Je);this.filterObject={},this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}render(){return S`
      <style>
        ${!this.unstyled&&Yn}
      </style>

      ${Z(this.filterObject.featured,()=>S`<slot name="filter"></slot>`,()=>S`<details
            @toggle="${j(this,Je,Wr)}"
            class="details-filter max-width"
            ?open=${this.filterObject.expanded||jt}
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
    `}}Je=new WeakSet,Wr=function(n){this.dispatchEvent(new CustomEvent("details-toggled",{detail:n,bubbles:!0,composed:!0}))};customElements.define("eox-itemfilter-expandcontainer",ko);function Rt(t){return Array.isArray?Array.isArray(t):Gr(t)==="[object Array]"}function Bo(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function Oo(t){return t==null?"":Bo(t)}function bt(t){return typeof t=="string"}function Ur(t){return typeof t=="number"}function jo(t){return t===!0||t===!1||No(t)&&Gr(t)=="[object Boolean]"}function zr(t){return typeof t=="object"}function No(t){return zr(t)&&t!==null}function ct(t){return t!=null}function $n(t){return!t.trim().length}function Gr(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const Ho="Incorrect 'index' type",Io=t=>`Invalid value for key ${t}`,Fo=t=>`Pattern length exceeds max of ${t}.`,qo=t=>`Missing ${t} property in key`,Wo=t=>`Property 'weight' in key '${t}' must be a positive integer`,$r=Object.prototype.hasOwnProperty;class Uo{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=Kr(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Kr(t){let e=null,n=null,r=null,i=1,o=null;if(bt(t)||Rt(t))r=t,e=_r(t),n=En(t);else{if(!$r.call(t,"name"))throw new Error(qo("name"));const a=t.name;if(r=a,$r.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(Wo(a));e=_r(a),n=En(a),o=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:o}}function _r(t){return Rt(t)?t:t.split(".")}function En(t){return Rt(t)?t.join("."):t}function zo(t,e){let n=[],r=!1;const i=(o,a,l)=>{if(ct(o))if(!a[l])n.push(o);else{let f=a[l];const u=o[f];if(!ct(u))return;if(l===a.length-1&&(bt(u)||Ur(u)||jo(u)))n.push(Oo(u));else if(Rt(u)){r=!0;for(let h=0,p=u.length;h<p;h+=1)i(u[h],a,l+1)}else a.length&&i(u,a,l+1)}};return i(t,bt(e)?e.split("."):e,0),r?n:n[0]}const Go={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Ko={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},Vo={location:0,threshold:.6,distance:100},Yo={useExtendedSearch:!1,getFn:zo,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var L={...Ko,...Go,...Vo,...Yo};const Xo=/[^ ]+/g;function Jo(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const o=i.match(Xo).length;if(n.has(o))return n.get(o);const a=1/Math.pow(o,.5*t),l=parseFloat(Math.round(a*r)/r);return n.set(o,l),l},clear(){n.clear()}}}class Xn{constructor({getFn:e=L.getFn,fieldNormWeight:n=L.fieldNormWeight}={}){this.norm=Jo(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,bt(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();bt(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!ct(e)||$n(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,o)=>{let a=i.getFn?i.getFn(e):this.getFn(e,i.path);if(ct(a)){if(Rt(a)){let l=[];const f=[{nestedArrIndex:-1,value:a}];for(;f.length;){const{nestedArrIndex:u,value:h}=f.pop();if(ct(h))if(bt(h)&&!$n(h)){let p={v:h,i:u,n:this.norm.get(h)};l.push(p)}else Rt(h)&&h.forEach((p,y)=>{f.push({nestedArrIndex:y,value:p})})}r.$[o]=l}else if(bt(a)&&!$n(a)){let l={v:a,n:this.norm.get(a)};r.$[o]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Vr(t,e,{getFn:n=L.getFn,fieldNormWeight:r=L.fieldNormWeight}={}){const i=new Xn({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(Kr)),i.setSources(e),i.create(),i}function Zo(t,{getFn:e=L.getFn,fieldNormWeight:n=L.fieldNormWeight}={}){const{keys:r,records:i}=t,o=new Xn({getFn:e,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(i),o}function je(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=L.distance,ignoreLocation:o=L.ignoreLocation}={}){const a=e/t.length;if(o)return a;const l=Math.abs(r-n);return i?a+l/i:l?1:a}function Qo(t=[],e=L.minMatchCharLength){let n=[],r=-1,i=-1,o=0;for(let a=t.length;o<a;o+=1){let l=t[o];l&&r===-1?r=o:!l&&r!==-1&&(i=o-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[o-1]&&o-r>=e&&n.push([r,o-1]),n}const zt=32;function ta(t,e,n,{location:r=L.location,distance:i=L.distance,threshold:o=L.threshold,findAllMatches:a=L.findAllMatches,minMatchCharLength:l=L.minMatchCharLength,includeMatches:f=L.includeMatches,ignoreLocation:u=L.ignoreLocation}={}){if(e.length>zt)throw new Error(Fo(zt));const h=e.length,p=t.length,y=Math.max(0,Math.min(r,p));let g=o,b=y;const M=l>1||f,T=M?Array(p):[];let E;for(;(E=t.indexOf(e,b))>-1;){let W=je(e,{currentLocation:E,expectedLocation:y,distance:i,ignoreLocation:u});if(g=Math.min(W,g),b=E+h,M){let et=0;for(;et<h;)T[E+et]=1,et+=1}}b=-1;let N=[],k=1,H=h+p;const I=1<<h-1;for(let W=0;W<h;W+=1){let et=0,X=H;for(;et<X;)je(e,{errors:W,currentLocation:y+X,expectedLocation:y,distance:i,ignoreLocation:u})<=g?et=X:H=X,X=Math.floor((H-et)/2+et);H=X;let U=Math.max(1,y-X+1),B=a?p:Math.min(y+X,p)+h,lt=Array(B+2);lt[B+1]=(1<<W)-1;for(let $=B;$>=U;$-=1){let w=$-1,v=n[t.charAt(w)];if(M&&(T[w]=+!!v),lt[$]=(lt[$+1]<<1|1)&v,W&&(lt[$]|=(N[$+1]|N[$])<<1|1|N[$+1]),lt[$]&I&&(k=je(e,{errors:W,currentLocation:w,expectedLocation:y,distance:i,ignoreLocation:u}),k<=g)){if(g=k,b=w,b<=y)break;U=Math.max(1,2*y-b)}}if(je(e,{errors:W+1,currentLocation:y,expectedLocation:y,distance:i,ignoreLocation:u})>g)break;N=lt}const Q={isMatch:b>=0,score:Math.max(.001,k)};if(M){const W=Qo(T,l);W.length?f&&(Q.indices=W):Q.isMatch=!1}return Q}function ea(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}const We=String.prototype.normalize?t=>t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,""):t=>t;class Yr{constructor(e,{location:n=L.location,threshold:r=L.threshold,distance:i=L.distance,includeMatches:o=L.includeMatches,findAllMatches:a=L.findAllMatches,minMatchCharLength:l=L.minMatchCharLength,isCaseSensitive:f=L.isCaseSensitive,ignoreDiacritics:u=L.ignoreDiacritics,ignoreLocation:h=L.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:f,ignoreDiacritics:u,ignoreLocation:h},e=f?e:e.toLowerCase(),e=u?We(e):e,this.pattern=e,this.chunks=[],!this.pattern.length)return;const p=(g,b)=>{this.chunks.push({pattern:g,alphabet:ea(g),startIndex:b})},y=this.pattern.length;if(y>zt){let g=0;const b=y%zt,M=y-b;for(;g<M;)p(this.pattern.substr(g,zt),g),g+=zt;if(b){const T=y-zt;p(this.pattern.substr(T),T)}}else p(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,ignoreDiacritics:r,includeMatches:i}=this.options;if(e=n?e:e.toLowerCase(),e=r?We(e):e,this.pattern===e){let M={isMatch:!0,score:0};return i&&(M.indices=[[0,e.length-1]]),M}const{location:o,distance:a,threshold:l,findAllMatches:f,minMatchCharLength:u,ignoreLocation:h}=this.options;let p=[],y=0,g=!1;this.chunks.forEach(({pattern:M,alphabet:T,startIndex:E})=>{const{isMatch:N,score:k,indices:H}=ta(e,M,T,{location:o+E,distance:a,threshold:l,findAllMatches:f,minMatchCharLength:u,includeMatches:i,ignoreLocation:h});N&&(g=!0),y+=k,N&&H&&(p=[...p,...H])});let b={isMatch:g,score:g?y/this.chunks.length:1};return g&&i&&(b.indices=p),b}}class It{constructor(e){this.pattern=e}static isMultiMatch(e){return Cr(e,this.multiRegex)}static isSingleMatch(e){return Cr(e,this.singleRegex)}search(){}}function Cr(t,e){const n=t.match(e);return n?n[1]:null}class na extends It{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class ra extends It{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class ia extends It{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class sa extends It{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class oa extends It{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class aa extends It{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Xr extends It{constructor(e,{location:n=L.location,threshold:r=L.threshold,distance:i=L.distance,includeMatches:o=L.includeMatches,findAllMatches:a=L.findAllMatches,minMatchCharLength:l=L.minMatchCharLength,isCaseSensitive:f=L.isCaseSensitive,ignoreDiacritics:u=L.ignoreDiacritics,ignoreLocation:h=L.ignoreLocation}={}){super(e),this._bitapSearch=new Yr(e,{location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:f,ignoreDiacritics:u,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Jr extends It{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],o=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+o,i.push([r,n-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const Dn=[na,Jr,ia,sa,aa,oa,ra,Xr],Sr=Dn.length,la=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,ca="|";function ua(t,e={}){return t.split(ca).map(n=>{let r=n.trim().split(la).filter(o=>o&&!!o.trim()),i=[];for(let o=0,a=r.length;o<a;o+=1){const l=r[o];let f=!1,u=-1;for(;!f&&++u<Sr;){const h=Dn[u];let p=h.isMultiMatch(l);p&&(i.push(new h(p,e)),f=!0)}if(!f)for(u=-1;++u<Sr;){const h=Dn[u];let p=h.isSingleMatch(l);if(p){i.push(new h(p,e));break}}}return i})}const fa=new Set([Xr.type,Jr.type]);class ha{constructor(e,{isCaseSensitive:n=L.isCaseSensitive,ignoreDiacritics:r=L.ignoreDiacritics,includeMatches:i=L.includeMatches,minMatchCharLength:o=L.minMatchCharLength,ignoreLocation:a=L.ignoreLocation,findAllMatches:l=L.findAllMatches,location:f=L.location,threshold:u=L.threshold,distance:h=L.distance}={}){this.query=null,this.options={isCaseSensitive:n,ignoreDiacritics:r,includeMatches:i,minMatchCharLength:o,findAllMatches:l,ignoreLocation:a,location:f,threshold:u,distance:h},e=n?e:e.toLowerCase(),e=r?We(e):e,this.pattern=e,this.query=ua(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i,ignoreDiacritics:o}=this.options;e=i?e:e.toLowerCase(),e=o?We(e):e;let a=0,l=[],f=0;for(let u=0,h=n.length;u<h;u+=1){const p=n[u];l.length=0,a=0;for(let y=0,g=p.length;y<g;y+=1){const b=p[y],{isMatch:M,indices:T,score:E}=b.search(e);if(M){if(a+=1,f+=E,r){const N=b.constructor.type;fa.has(N)?l=[...l,...T]:l.push(T)}}else{f=0,a=0,l.length=0;break}}if(a){let y={isMatch:!0,score:f/a};return r&&(y.indices=l),y}}return{isMatch:!1,score:1}}}const Rn=[];function da(...t){Rn.push(...t)}function Pn(t,e){for(let n=0,r=Rn.length;n<r;n+=1){let i=Rn[n];if(i.condition(t,e))return new i(t,e)}return new Yr(t,e)}const Ue={AND:"$and",OR:"$or"},Tn={PATH:"$path",PATTERN:"$val"},kn=t=>!!(t[Ue.AND]||t[Ue.OR]),pa=t=>!!t[Tn.PATH],ga=t=>!Rt(t)&&zr(t)&&!kn(t),Lr=t=>({[Ue.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function Zr(t,e,{auto:n=!0}={}){const r=i=>{let o=Object.keys(i);const a=pa(i);if(!a&&o.length>1&&!kn(i))return r(Lr(i));if(ga(i)){const f=a?i[Tn.PATH]:o[0],u=a?i[Tn.PATTERN]:i[f];if(!bt(u))throw new Error(Io(f));const h={keyId:En(f),pattern:u};return n&&(h.searcher=Pn(u,e)),h}let l={children:[],operator:o[0]};return o.forEach(f=>{const u=i[f];Rt(u)&&u.forEach(h=>{l.children.push(r(h))})}),l};return kn(t)||(t=Lr(t)),r(t)}function ya(t,{ignoreFieldNorm:e=L.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:o,score:a})=>{const l=i?i.weight:null;r*=Math.pow(a===0&&l?Number.EPSILON:a,(l||1)*(e?1:o))}),n.score=r})}function ma(t,e){const n=t.matches;e.matches=[],ct(n)&&n.forEach(r=>{if(!ct(r.indices)||!r.indices.length)return;const{indices:i,value:o}=r;let a={indices:i,value:o};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),e.matches.push(a)})}function ba(t,e){e.score=t.score}function va(t,e,{includeMatches:n=L.includeMatches,includeScore:r=L.includeScore}={}){const i=[];return n&&i.push(ma),r&&i.push(ba),t.map(o=>{const{idx:a}=o,l={item:e[a],refIndex:a};return i.length&&i.forEach(f=>{f(o,l)}),l})}class Ft{constructor(e,n={},r){this.options={...L,...n},this.options.useExtendedSearch,this._keyStore=new Uo(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof Xn))throw new Error(Ho);this._myIndex=n||Vr(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){ct(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const o=this._docs[r];e(o,r)&&(this.removeAt(r),r-=1,i-=1,n.push(o))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:o,sortFn:a,ignoreFieldNorm:l}=this.options;let f=bt(e)?bt(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return ya(f,{ignoreFieldNorm:l}),o&&f.sort(a),Ur(n)&&n>-1&&(f=f.slice(0,n)),va(f,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=Pn(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:o,i:a,n:l})=>{if(!ct(o))return;const{isMatch:f,score:u,indices:h}=n.searchIn(o);f&&i.push({item:o,idx:a,matches:[{score:u,value:o,norm:l,indices:h}]})}),i}_searchLogical(e){const n=Zr(e,this.options),r=(l,f,u)=>{if(!l.children){const{keyId:p,searcher:y}=l,g=this._findMatches({key:this._keyStore.get(p),value:this._myIndex.getValueForItemAtKeyId(f,p),searcher:y});return g&&g.length?[{idx:u,item:f,matches:g}]:[]}const h=[];for(let p=0,y=l.children.length;p<y;p+=1){const g=l.children[p],b=r(g,f,u);if(b.length)h.push(...b);else if(l.operator===Ue.AND)return[]}return h},i=this._myIndex.records,o={},a=[];return i.forEach(({$:l,i:f})=>{if(ct(l)){let u=r(n,l,f);u.length&&(o[f]||(o[f]={idx:f,item:l,matches:[]},a.push(o[f])),u.forEach(({matches:h})=>{o[f].matches.push(...h)}))}}),a}_searchObjectList(e){const n=Pn(e,this.options),{keys:r,records:i}=this._myIndex,o=[];return i.forEach(({$:a,i:l})=>{if(!ct(a))return;let f=[];r.forEach((u,h)=>{f.push(...this._findMatches({key:u,value:a[h],searcher:n}))}),f.length&&o.push({idx:l,item:a,matches:f})}),o}_findMatches({key:e,value:n,searcher:r}){if(!ct(n))return[];let i=[];if(Rt(n))n.forEach(({v:o,i:a,n:l})=>{if(!ct(o))return;const{isMatch:f,score:u,indices:h}=r.searchIn(o);f&&i.push({score:u,key:e,value:o,idx:a,norm:l,indices:h})});else{const{v:o,n:a}=n,{isMatch:l,score:f,indices:u}=r.searchIn(o);l&&i.push({score:f,key:e,value:o,norm:a,indices:u})}return i}}Ft.version="7.1.0";Ft.createIndex=Vr;Ft.parseIndex=Zo;Ft.config=L;Ft.parseQuery=Zr;da(ha);function Qr(t,e){const n=new Ft(e.filterProperties,{keys:["title"]});if(!(t.target instanceof HTMLInputElement))return;const r=t.target.value,o=n.search(r).map(a=>a.item.key||a.item.keys.join("|"));Object.keys(e.filters).forEach(a=>{e.querySelector(`[data-details="${a}"]`).parentElement.style.display=o.includes(a)||!r?"":"none"})}function wa(t,e){if(!(t.target instanceof HTMLElement))return;const n=t.target.getAttribute("data-close").replace("|","-");e.querySelector(`#filter-${n}`).reset(),e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}const Bn=Math.min,ne=Math.max,ze=Math.round,Ne=Math.floor,vt=t=>({x:t,y:t});function ti(t){return t.split("-")[0]}function xa(t){return t.split("-")[1]}function Aa(t){return t==="x"?"y":"x"}function Ma(t){return t==="y"?"height":"width"}const $a=new Set(["top","bottom"]);function ei(t){return $a.has(ti(t))?"y":"x"}function _a(t){return Aa(ei(t))}function ni(t){const{x:e,y:n,width:r,height:i}=t;return{width:r,height:i,top:n,left:e,right:e+r,bottom:n+i,x:e,y:n}}function Er(t,e,n){let{reference:r,floating:i}=t;const o=ei(e),a=_a(e),l=Ma(a),f=ti(e),u=o==="y",h=r.x+r.width/2-i.width/2,p=r.y+r.height/2-i.height/2,y=r[l]/2-i[l]/2;let g;switch(f){case"top":g={x:h,y:r.y-i.height};break;case"bottom":g={x:h,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:p};break;case"left":g={x:r.x-i.width,y:p};break;default:g={x:r.x,y:r.y}}switch(xa(e)){case"start":g[a]-=y*(n&&u?-1:1);break;case"end":g[a]+=y*(n&&u?-1:1);break}return g}const Ca=async(t,e,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:a}=n,l=o.filter(Boolean),f=await(a.isRTL==null?void 0:a.isRTL(e));let u=await a.getElementRects({reference:t,floating:e,strategy:i}),{x:h,y:p}=Er(u,r,f),y=r,g={},b=0;for(let M=0;M<l.length;M++){const{name:T,fn:E}=l[M],{x:N,y:k,data:H,reset:I}=await E({x:h,y:p,initialPlacement:r,placement:y,strategy:i,middlewareData:g,rects:u,platform:a,elements:{reference:t,floating:e}});h=N??h,p=k??p,g={...g,[T]:{...g[T],...H}},I&&b<=50&&(b++,typeof I=="object"&&(I.placement&&(y=I.placement),I.rects&&(u=I.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:i}):I.rects),{x:h,y:p}=Er(u,y,f)),M=-1)}return{x:h,y:p,placement:y,strategy:i,middlewareData:g}};function rn(){return typeof window<"u"}function le(t){return ri(t)?(t.nodeName||"").toLowerCase():"#document"}function ut(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function At(t){var e;return(e=(ri(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function ri(t){return rn()?t instanceof Node||t instanceof ut(t).Node:!1}function yt(t){return rn()?t instanceof Element||t instanceof ut(t).Element:!1}function wt(t){return rn()?t instanceof HTMLElement||t instanceof ut(t).HTMLElement:!1}function Dr(t){return!rn()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof ut(t).ShadowRoot}const Sa=new Set(["inline","contents"]);function we(t){const{overflow:e,overflowX:n,overflowY:r,display:i}=mt(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!Sa.has(i)}const La=new Set(["table","td","th"]);function Ea(t){return La.has(le(t))}const Da=[":popover-open",":modal"];function sn(t){return Da.some(e=>{try{return t.matches(e)}catch{return!1}})}const Ra=["transform","translate","scale","rotate","perspective"],Pa=["transform","translate","scale","rotate","perspective","filter"],Ta=["paint","layout","strict","content"];function Jn(t){const e=Zn(),n=yt(t)?mt(t):t;return Ra.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||Pa.some(r=>(n.willChange||"").includes(r))||Ta.some(r=>(n.contain||"").includes(r))}function ka(t){let e=Nt(t);for(;wt(e)&&!se(e);){if(Jn(e))return e;if(sn(e))return null;e=Nt(e)}return null}function Zn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Ba=new Set(["html","body","#document"]);function se(t){return Ba.has(le(t))}function mt(t){return ut(t).getComputedStyle(t)}function on(t){return yt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function Nt(t){if(le(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Dr(t)&&t.host||At(t);return Dr(e)?e.host:e}function ii(t){const e=Nt(t);return se(e)?t.ownerDocument?t.ownerDocument.body:t.body:wt(e)&&we(e)?e:ii(e)}function ge(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=ii(t),o=i===((r=t.ownerDocument)==null?void 0:r.body),a=ut(i);if(o){const l=On(a);return e.concat(a,a.visualViewport||[],we(i)?i:[],l&&n?ge(l):[])}return e.concat(i,ge(i,[],n))}function On(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function si(t){const e=mt(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const i=wt(t),o=i?t.offsetWidth:n,a=i?t.offsetHeight:r,l=ze(n)!==o||ze(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function Qn(t){return yt(t)?t:t.contextElement}function re(t){const e=Qn(t);if(!wt(e))return vt(1);const n=e.getBoundingClientRect(),{width:r,height:i,$:o}=si(e);let a=(o?ze(n.width):n.width)/r,l=(o?ze(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const Oa=vt(0);function oi(t){const e=ut(t);return!Zn()||!e.visualViewport?Oa:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ja(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==ut(t)?!1:e}function Kt(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),o=Qn(t);let a=vt(1);e&&(r?yt(r)&&(a=re(r)):a=re(t));const l=ja(o,n,r)?oi(o):vt(0);let f=(i.left+l.x)/a.x,u=(i.top+l.y)/a.y,h=i.width/a.x,p=i.height/a.y;if(o){const y=ut(o),g=r&&yt(r)?ut(r):r;let b=y,M=On(b);for(;M&&r&&g!==b;){const T=re(M),E=M.getBoundingClientRect(),N=mt(M),k=E.left+(M.clientLeft+parseFloat(N.paddingLeft))*T.x,H=E.top+(M.clientTop+parseFloat(N.paddingTop))*T.y;f*=T.x,u*=T.y,h*=T.x,p*=T.y,f+=k,u+=H,b=ut(M),M=On(b)}}return ni({width:h,height:p,x:f,y:u})}function an(t,e){const n=on(t).scrollLeft;return e?e.left+n:Kt(At(t)).left+n}function ai(t,e){const n=t.getBoundingClientRect(),r=n.left+e.scrollLeft-an(t,n),i=n.top+e.scrollTop;return{x:r,y:i}}function Na(t){let{elements:e,rect:n,offsetParent:r,strategy:i}=t;const o=i==="fixed",a=At(r),l=e?sn(e.floating):!1;if(r===a||l&&o)return n;let f={scrollLeft:0,scrollTop:0},u=vt(1);const h=vt(0),p=wt(r);if((p||!p&&!o)&&((le(r)!=="body"||we(a))&&(f=on(r)),wt(r))){const g=Kt(r);u=re(r),h.x=g.x+r.clientLeft,h.y=g.y+r.clientTop}const y=a&&!p&&!o?ai(a,f):vt(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-f.scrollLeft*u.x+h.x+y.x,y:n.y*u.y-f.scrollTop*u.y+h.y+y.y}}function Ha(t){return Array.from(t.getClientRects())}function Ia(t){const e=At(t),n=on(t),r=t.ownerDocument.body,i=ne(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),o=ne(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+an(t);const l=-n.scrollTop;return mt(r).direction==="rtl"&&(a+=ne(e.clientWidth,r.clientWidth)-i),{width:i,height:o,x:a,y:l}}const Rr=25;function Fa(t,e){const n=ut(t),r=At(t),i=n.visualViewport;let o=r.clientWidth,a=r.clientHeight,l=0,f=0;if(i){o=i.width,a=i.height;const h=Zn();(!h||h&&e==="fixed")&&(l=i.offsetLeft,f=i.offsetTop)}const u=an(r);if(u<=0){const h=r.ownerDocument,p=h.body,y=getComputedStyle(p),g=h.compatMode==="CSS1Compat"&&parseFloat(y.marginLeft)+parseFloat(y.marginRight)||0,b=Math.abs(r.clientWidth-p.clientWidth-g);b<=Rr&&(o-=b)}else u<=Rr&&(o+=u);return{width:o,height:a,x:l,y:f}}const qa=new Set(["absolute","fixed"]);function Wa(t,e){const n=Kt(t,!0,e==="fixed"),r=n.top+t.clientTop,i=n.left+t.clientLeft,o=wt(t)?re(t):vt(1),a=t.clientWidth*o.x,l=t.clientHeight*o.y,f=i*o.x,u=r*o.y;return{width:a,height:l,x:f,y:u}}function Pr(t,e,n){let r;if(e==="viewport")r=Fa(t,n);else if(e==="document")r=Ia(At(t));else if(yt(e))r=Wa(e,n);else{const i=oi(t);r={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return ni(r)}function li(t,e){const n=Nt(t);return n===e||!yt(n)||se(n)?!1:mt(n).position==="fixed"||li(n,e)}function Ua(t,e){const n=e.get(t);if(n)return n;let r=ge(t,[],!1).filter(l=>yt(l)&&le(l)!=="body"),i=null;const o=mt(t).position==="fixed";let a=o?Nt(t):t;for(;yt(a)&&!se(a);){const l=mt(a),f=Jn(a);!f&&l.position==="fixed"&&(i=null),(o?!f&&!i:!f&&l.position==="static"&&!!i&&qa.has(i.position)||we(a)&&!f&&li(t,a))?r=r.filter(h=>h!==a):i=l,a=Nt(a)}return e.set(t,r),r}function za(t){let{element:e,boundary:n,rootBoundary:r,strategy:i}=t;const a=[...n==="clippingAncestors"?sn(e)?[]:Ua(e,this._c):[].concat(n),r],l=a[0],f=a.reduce((u,h)=>{const p=Pr(e,h,i);return u.top=ne(p.top,u.top),u.right=Bn(p.right,u.right),u.bottom=Bn(p.bottom,u.bottom),u.left=ne(p.left,u.left),u},Pr(e,l,i));return{width:f.right-f.left,height:f.bottom-f.top,x:f.left,y:f.top}}function Ga(t){const{width:e,height:n}=si(t);return{width:e,height:n}}function Ka(t,e,n){const r=wt(e),i=At(e),o=n==="fixed",a=Kt(t,!0,o,e);let l={scrollLeft:0,scrollTop:0};const f=vt(0);function u(){f.x=an(i)}if(r||!r&&!o)if((le(e)!=="body"||we(i))&&(l=on(e)),r){const g=Kt(e,!0,o,e);f.x=g.x+e.clientLeft,f.y=g.y+e.clientTop}else i&&u();o&&!r&&i&&u();const h=i&&!r&&!o?ai(i,l):vt(0),p=a.left+l.scrollLeft-f.x-h.x,y=a.top+l.scrollTop-f.y-h.y;return{x:p,y,width:a.width,height:a.height}}function _n(t){return mt(t).position==="static"}function Tr(t,e){if(!wt(t)||mt(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return At(t)===n&&(n=n.ownerDocument.body),n}function ci(t,e){const n=ut(t);if(sn(t))return n;if(!wt(t)){let i=Nt(t);for(;i&&!se(i);){if(yt(i)&&!_n(i))return i;i=Nt(i)}return n}let r=Tr(t,e);for(;r&&Ea(r)&&_n(r);)r=Tr(r,e);return r&&se(r)&&_n(r)&&!Jn(r)?n:r||ka(t)||n}const Va=async function(t){const e=this.getOffsetParent||ci,n=this.getDimensions,r=await n(t.floating);return{reference:Ka(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Ya(t){return mt(t).direction==="rtl"}const Xa={convertOffsetParentRelativeRectToViewportRelativeRect:Na,getDocumentElement:At,getClippingRect:za,getOffsetParent:ci,getElementRects:Va,getClientRects:Ha,getDimensions:Ga,getScale:re,isElement:yt,isRTL:Ya};function ui(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Ja(t,e){let n=null,r;const i=At(t);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,f){l===void 0&&(l=!1),f===void 0&&(f=1),o();const u=t.getBoundingClientRect(),{left:h,top:p,width:y,height:g}=u;if(l||e(),!y||!g)return;const b=Ne(p),M=Ne(i.clientWidth-(h+y)),T=Ne(i.clientHeight-(p+g)),E=Ne(h),k={rootMargin:-b+"px "+-M+"px "+-T+"px "+-E+"px",threshold:ne(0,Bn(1,f))||1};let H=!0;function I(Q){const W=Q[0].intersectionRatio;if(W!==f){if(!H)return a();W?a(!1,W):r=setTimeout(()=>{a(!1,1e-7)},1e3)}W===1&&!ui(u,t.getBoundingClientRect())&&a(),H=!1}try{n=new IntersectionObserver(I,{...k,root:i.ownerDocument})}catch{n=new IntersectionObserver(I,k)}n.observe(t)}return a(!0),o}function Za(t,e,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:f=!1}=r,u=Qn(t),h=i||o?[...u?ge(u):[],...ge(e)]:[];h.forEach(E=>{i&&E.addEventListener("scroll",n,{passive:!0}),o&&E.addEventListener("resize",n)});const p=u&&l?Ja(u,n):null;let y=-1,g=null;a&&(g=new ResizeObserver(E=>{let[N]=E;N&&N.target===u&&g&&(g.unobserve(e),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var k;(k=g)==null||k.observe(e)})),n()}),u&&!f&&g.observe(u),g.observe(e));let b,M=f?Kt(t):null;f&&T();function T(){const E=Kt(t);M&&!ui(M,E)&&n(),M=E,b=requestAnimationFrame(T)}return n(),()=>{var E;h.forEach(N=>{i&&N.removeEventListener("scroll",n),o&&N.removeEventListener("resize",n)}),p==null||p(),(E=g)==null||E.disconnect(),g=null,f&&cancelAnimationFrame(b)}}const Qa=(t,e,n)=>{const r=new Map,i={platform:Xa,...n},o={...i.platform,_c:r};return Ca(t,e,{...i,platform:o})};function tl(t){const e=t.renderRoot.querySelector(".inline-container-wrapper"),n=t.renderRoot.querySelector("[popover]");return Za(e,n,()=>{n.matches(":popover-open")&&Qa(e,n,{strategy:"fixed"}).then(({x:i,y:o})=>{Object.assign(n.style,{left:`${i}px`,top:`${o}px`,width:`${e.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function fi(t){t.renderRoot.querySelector("#eox-itemfilter-input-search").value="",Qr({target:{value:""}},t)}function el(t,e){e.inlineMode&&t.stopPropagation()}function nl(t){t.inlineMode&&(t.showDropdown=!0)}function rl(t,e){e.inlineMode&&(t.stopPropagation(),e.showDropdown=!0)}function il(t,e){e.inlineMode&&t.key==="Escape"&&e.showDropdown&&(fi(e),e.showDropdown=!1)}function sl(t,e){e.inlineMode&&t.target instanceof HTMLElement&&t.target.tagName!=="DROPDOWN-FORM"&&t.target.tagName!=="EOX-ITEMFILTER"&&e.showDropdown&&(fi(e),e.showDropdown=!1)}function ol(t,e){var n,r,i=0,o,a,l,f,u,h,p,y=t[0],g=t[1],b=e.length;for(n=0;n<b;n++){r=0;var M=e[n],T=M.length-1;if(h=M[0],h[0]!==M[T][0]&&h[1]!==M[T][1])throw new Error("First and last coordinates in a ring must be the same");for(a=h[0]-y,l=h[1]-g,r;r<T;r++){if(p=M[r+1],f=p[0]-y,u=p[1]-g,l===0&&u===0){if(f<=0&&a>=0||a<=0&&f>=0)return 0}else if(u>=0&&l<=0||u<=0&&l>=0){if(o=Po(a,f,l,u,0,0),o===0)return 0;(o>0&&u>0&&l<=0||o<0&&u<=0&&l>0)&&i++}h=p,l=u,a=f}}return i%2!==0}function hi(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if(t.type==="Feature"&&t.geometry!==null&&t.geometry.type==="Point")return[...t.geometry.coordinates];if(t.type==="Point")return[...t.coordinates]}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return[...t];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function al(t){if(Array.isArray(t))return t;if(t.type==="Feature"){if(t.geometry!==null)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function oe(t){return t.type==="Feature"?t.geometry:t}function pt(t,e,n={}){if(!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");const r=hi(t),i=oe(e),o=i.type,a=e.bbox;let l=i.coordinates;if(a&&ll(r,a)===!1)return!1;o==="Polygon"&&(l=[l]);let f=!1;for(var u=0;u<l.length;++u){const h=ol(r,l[u]);if(h===0)return!n.ignoreBoundary;h&&(f=!0)}return f}function ll(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}class di{constructor(e=[],n=cl){if(this.data=e,this.length=this.data.length,this.compare=n,this.length>0)for(let r=(this.length>>1)-1;r>=0;r--)this._down(r)}push(e){this.data.push(e),this.length++,this._up(this.length-1)}pop(){if(this.length===0)return;const e=this.data[0],n=this.data.pop();return this.length--,this.length>0&&(this.data[0]=n,this._down(0)),e}peek(){return this.data[0]}_up(e){const{data:n,compare:r}=this,i=n[e];for(;e>0;){const o=e-1>>1,a=n[o];if(r(i,a)>=0)break;n[e]=a,e=o}n[e]=i}_down(e){const{data:n,compare:r}=this,i=this.length>>1,o=n[e];for(;e<i;){let a=(e<<1)+1,l=n[a];const f=a+1;if(f<this.length&&r(n[f],l)<0&&(a=f,l=n[f]),r(l,o)>=0)break;n[e]=l,e=a}n[e]=o}}function cl(t,e){return t<e?-1:t>e?1:0}function pi(t,e){return t.p.x>e.p.x?1:t.p.x<e.p.x?-1:t.p.y!==e.p.y?t.p.y>e.p.y?1:-1:1}function ul(t,e){return t.rightSweepEvent.p.x>e.rightSweepEvent.p.x?1:t.rightSweepEvent.p.x<e.rightSweepEvent.p.x?-1:t.rightSweepEvent.p.y!==e.rightSweepEvent.p.y?t.rightSweepEvent.p.y<e.rightSweepEvent.p.y?1:-1:1}class kr{constructor(e,n,r,i){this.p={x:e[0],y:e[1]},this.featureId=n,this.ringId=r,this.eventId=i,this.otherEvent=null,this.isLeftEndpoint=null}isSamePoint(e){return this.p.x===e.p.x&&this.p.y===e.p.y}}function fl(t,e){if(t.type==="FeatureCollection"){const n=t.features;for(let r=0;r<n.length;r++)Br(n[r],e)}else Br(t,e)}let He=0,Ie=0,Fe=0;function Br(t,e){const n=t.type==="Feature"?t.geometry:t;let r=n.coordinates;(n.type==="Polygon"||n.type==="MultiLineString")&&(r=[r]),n.type==="LineString"&&(r=[[r]]);for(let i=0;i<r.length;i++)for(let o=0;o<r[i].length;o++){let a=r[i][o][0],l=null;Ie=Ie+1;for(let f=0;f<r[i][o].length-1;f++){l=r[i][o][f+1];const u=new kr(a,He,Ie,Fe),h=new kr(l,He,Ie,Fe+1);u.otherEvent=h,h.otherEvent=u,pi(u,h)>0?(h.isLeftEndpoint=!0,u.isLeftEndpoint=!1):(u.isLeftEndpoint=!0,h.isLeftEndpoint=!1),e.push(u),e.push(h),a=l,Fe=Fe+1}}He=He+1}class hl{constructor(e){this.leftSweepEvent=e,this.rightSweepEvent=e.otherEvent}}function dl(t,e){if(t===null||e===null||t.leftSweepEvent.ringId===e.leftSweepEvent.ringId&&(t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.rightSweepEvent)||t.leftSweepEvent.isSamePoint(e.leftSweepEvent)||t.leftSweepEvent.isSamePoint(e.rightSweepEvent)))return!1;const n=t.leftSweepEvent.p.x,r=t.leftSweepEvent.p.y,i=t.rightSweepEvent.p.x,o=t.rightSweepEvent.p.y,a=e.leftSweepEvent.p.x,l=e.leftSweepEvent.p.y,f=e.rightSweepEvent.p.x,u=e.rightSweepEvent.p.y,h=(u-l)*(i-n)-(f-a)*(o-r),p=(f-a)*(r-l)-(u-l)*(n-a),y=(i-n)*(r-l)-(o-r)*(n-a);if(h===0)return!1;const g=p/h,b=y/h;if(g>=0&&g<=1&&b>=0&&b<=1){const M=n+g*(i-n),T=r+g*(o-r);return[M,T]}return!1}function pl(t,e){e=e||!1;const n=[],r=new di([],ul);for(;t.length;){const i=t.pop();if(i.isLeftEndpoint){const o=new hl(i);for(let a=0;a<r.data.length;a++){const l=r.data[a];if(e&&l.leftSweepEvent.featureId===i.featureId)continue;const f=dl(o,l);f!==!1&&n.push(f)}r.push(o)}else i.isLeftEndpoint===!1&&r.pop()}return n}function gl(t,e){const n=new di([],pi);return fl(t,n),pl(n,e)}var yl=gl;function tr(t,e,n={}){const{removeDuplicates:r=!0,ignoreSelfIntersections:i=!0}=n;let o=[];t.type==="FeatureCollection"?o=o.concat(t.features):t.type==="Feature"?o.push(t):(t.type==="LineString"||t.type==="Polygon"||t.type==="MultiLineString"||t.type==="MultiPolygon")&&o.push(qe(t)),e.type==="FeatureCollection"?o=o.concat(e.features):e.type==="Feature"?o.push(e):(e.type==="LineString"||e.type==="Polygon"||e.type==="MultiLineString"||e.type==="MultiPolygon")&&o.push(qe(e));const a=yl(Ln(o),i);let l=[];if(r){const f={};a.forEach(u=>{const h=u.join(",");f[h]||(f[h]=!0,l.push(u))})}else l=a;return Ln(l.map(f=>Eo(f)))}function gi(t,e,n){if(t!==null)for(var r,i,o,a,l,f,u,h=0,p=0,y,g=t.type,b=g==="FeatureCollection",M=g==="Feature",T=b?t.features.length:1,E=0;E<T;E++){u=b?t.features[E].geometry:M?t.geometry:t,y=u?u.type==="GeometryCollection":!1,l=y?u.geometries.length:1;for(var N=0;N<l;N++){var k=0,H=0;if(a=y?u.geometries[N]:u,a!==null){f=a.coordinates;var I=a.type;switch(h=0,I){case null:break;case"Point":if(e(f,p,E,k,H)===!1)return!1;p++,k++;break;case"LineString":case"MultiPoint":for(r=0;r<f.length;r++){if(e(f[r],p,E,k,H)===!1)return!1;p++,I==="MultiPoint"&&k++}I==="LineString"&&k++;break;case"Polygon":case"MultiLineString":for(r=0;r<f.length;r++){for(i=0;i<f[r].length-h;i++){if(e(f[r][i],p,E,k,H)===!1)return!1;p++}I==="MultiLineString"&&k++,I==="Polygon"&&H++}I==="Polygon"&&k++;break;case"MultiPolygon":for(r=0;r<f.length;r++){for(H=0,i=0;i<f[r].length;i++){for(o=0;o<f[r][i].length-h;o++){if(e(f[r][i][o],p,E,k,H)===!1)return!1;p++}H++}k++}break;case"GeometryCollection":for(r=0;r<a.geometries.length;r++)if(gi(a.geometries[r],e)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function ml(t,e){var n,r,i,o,a,l,f,u,h,p,y=0,g=t.type==="FeatureCollection",b=t.type==="Feature",M=g?t.features.length:1;for(n=0;n<M;n++){for(l=g?t.features[n].geometry:b?t.geometry:t,u=g?t.features[n].properties:b?t.properties:{},h=g?t.features[n].bbox:b?t.bbox:void 0,p=g?t.features[n].id:b?t.id:void 0,f=l?l.type==="GeometryCollection":!1,a=f?l.geometries.length:1,i=0;i<a;i++){if(o=f?l.geometries[i]:l,o===null){if(e(null,y,u,h,p)===!1)return!1;continue}switch(o.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(o,y,u,h,p)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<o.geometries.length;r++)if(e(o.geometries[r],y,u,h,p)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}y++}}function Ge(t,e){ml(t,function(n,r,i,o,a){var l=n===null?null:n.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return e(qe(n,i,{bbox:o,id:a}),r,0)===!1?!1:void 0}var f;switch(l){case"MultiPoint":f="Point";break;case"MultiLineString":f="LineString";break;case"MultiPolygon":f="Polygon";break}for(var u=0;u<n.coordinates.length;u++){var h=n.coordinates[u],p={type:f,coordinates:h};if(e(qe(p,i),r,u)===!1)return!1}})}function jn(t,e={}){const n=oe(t);switch(!e.properties&&t.type==="Feature"&&(e.properties=t.properties),n.type){case"Polygon":return bl(n,e);case"MultiPolygon":return vl(n,e);default:throw new Error("invalid poly")}}function bl(t,e={}){const r=oe(t).coordinates,i=e.properties?e.properties:t.type==="Feature"?t.properties:{};return yi(r,i)}function vl(t,e={}){const r=oe(t).coordinates,i=e.properties?e.properties:t.type==="Feature"?t.properties:{},o=[];return r.forEach(a=>{o.push(yi(a,i))}),Ln(o)}function yi(t,e){return t.length>1?Do(t,e):Ro(t[0],e)}function wl(t,e,{ignoreSelfIntersections:n=!0}={ignoreSelfIntersections:!0}){let r=!0;return Ge(t,i=>{Ge(e,o=>{if(r===!1)return!1;r=xl(i.geometry,o.geometry,n)})}),r}function xl(t,e,n){switch(t.type){case"Point":switch(e.type){case"Point":return!_l(t.coordinates,e.coordinates);case"LineString":return!Or(e,t);case"Polygon":return!pt(t,e)}break;case"LineString":switch(e.type){case"Point":return!Or(t,e);case"LineString":return!Al(t,e,n);case"Polygon":return!jr(e,t,n)}break;case"Polygon":switch(e.type){case"Point":return!pt(e,t);case"LineString":return!jr(t,e,n);case"Polygon":return!Ml(e,t,n)}}return!1}function Or(t,e){for(let n=0;n<t.coordinates.length-1;n++)if($l(t.coordinates[n],t.coordinates[n+1],e.coordinates))return!0;return!1}function Al(t,e,n){return tr(t,e,{ignoreSelfIntersections:n}).features.length>0}function jr(t,e,n){for(const i of e.coordinates)if(pt(i,t))return!0;return tr(e,jn(t),{ignoreSelfIntersections:n}).features.length>0}function Ml(t,e,n){for(const i of t.coordinates[0])if(pt(i,e))return!0;for(const i of e.coordinates[0])if(pt(i,t))return!0;return tr(jn(t),jn(e),{ignoreSelfIntersections:n}).features.length>0}function $l(t,e,n){const r=n[0]-t[0],i=n[1]-t[1],o=e[0]-t[0],a=e[1]-t[1];return r*a-i*o!==0?!1:Math.abs(o)>=Math.abs(a)?o>0?t[0]<=n[0]&&n[0]<=e[0]:e[0]<=n[0]&&n[0]<=t[0]:a>0?t[1]<=n[1]&&n[1]<=e[1]:e[1]<=n[1]&&n[1]<=t[1]}function _l(t,e){return t[0]===e[0]&&t[1]===e[1]}function Cl(t,e,{ignoreSelfIntersections:n=!0}={}){let r=!1;return Ge(t,i=>{Ge(e,o=>{if(r===!0)return!0;r=!wl(i.geometry,o.geometry,{ignoreSelfIntersections:n})})}),r}var Sl=Cl;function Ke(t,e={}){if(t.bbox!=null&&e.recompute!==!0)return t.bbox;const n=[1/0,1/0,-1/0,-1/0];return gi(t,r=>{n[0]>r[0]&&(n[0]=r[0]),n[1]>r[1]&&(n[1]=r[1]),n[2]<r[0]&&(n[2]=r[0]),n[3]<r[1]&&(n[3]=r[1])}),n}function Ve(t,e,n={}){const r=hi(t),i=al(e);for(let o=0;o<i.length-1;o++){let a=!1;if(n.ignoreEndVertices&&(o===0&&(a="start"),o===i.length-2&&(a="end"),o===0&&o+1===i.length-1&&(a="both")),Ll(i[o],i[o+1],r,a,typeof n.epsilon>"u"?null:n.epsilon))return!0}return!1}function Ll(t,e,n,r,i){const o=n[0],a=n[1],l=t[0],f=t[1],u=e[0],h=e[1],p=n[0]-l,y=n[1]-f,g=u-l,b=h-f,M=p*b-y*g;if(i!==null){if(Math.abs(M)>i)return!1}else if(M!==0)return!1;if(Math.abs(g)===Math.abs(b)&&Math.abs(g)===0)return r?!1:n[0]===t[0]&&n[1]===t[1];if(r){if(r==="start")return Math.abs(g)>=Math.abs(b)?g>0?l<o&&o<=u:u<=o&&o<l:b>0?f<a&&a<=h:h<=a&&a<f;if(r==="end")return Math.abs(g)>=Math.abs(b)?g>0?l<=o&&o<u:u<o&&o<=l:b>0?f<=a&&a<h:h<a&&a<=f;if(r==="both")return Math.abs(g)>=Math.abs(b)?g>0?l<o&&o<u:u<o&&o<l:b>0?f<a&&a<h:h<a&&a<f}else return Math.abs(g)>=Math.abs(b)?g>0?l<=o&&o<=u:u<=o&&o<=l:b>0?f<=a&&a<=h:h<=a&&a<=f;return!1}function El(t,e){var n=oe(t),r=oe(e),i=n.type,o=r.type;switch(i){case"Point":switch(o){case"MultiPoint":return Dl(n,r);case"LineString":return Ve(n,r,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return pt(n,r,{ignoreBoundary:!0});default:throw new Error("feature2 "+o+" geometry not supported")}case"MultiPoint":switch(o){case"MultiPoint":return Rl(n,r);case"LineString":return Pl(n,r);case"Polygon":case"MultiPolygon":return Tl(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"LineString":switch(o){case"LineString":return kl(n,r);case"Polygon":case"MultiPolygon":return Bl(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"Polygon":switch(o){case"Polygon":case"MultiPolygon":return Ol(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}default:throw new Error("feature1 "+i+" geometry not supported")}}function Dl(t,e){var n,r=!1;for(n=0;n<e.coordinates.length;n++)if(bi(e.coordinates[n],t.coordinates)){r=!0;break}return r}function Rl(t,e){for(var n=0;n<t.coordinates.length;n++){for(var r=!1,i=0;i<e.coordinates.length;i++)bi(t.coordinates[n],e.coordinates[i])&&(r=!0);if(!r)return!1}return!0}function Pl(t,e){for(var n=!1,r=0;r<t.coordinates.length;r++){if(!Ve(t.coordinates[r],e))return!1;n||(n=Ve(t.coordinates[r],e,{ignoreEndVertices:!0}))}return n}function Tl(t,e){for(var n=!0,r=!1,i=0;i<t.coordinates.length;i++){if(r=pt(t.coordinates[i],e),!r){n=!1;break}r=pt(t.coordinates[i],e,{ignoreBoundary:!0})}return n&&r}function kl(t,e){for(var n=0;n<t.coordinates.length;n++)if(!Ve(t.coordinates[n],e))return!1;return!0}function Bl(t,e){var n=Ke(e),r=Ke(t);if(!mi(n,r))return!1;for(var i=!1,o=0;o<t.coordinates.length;o++){if(!pt(t.coordinates[o],e))return!1;if(i||(i=pt(t.coordinates[o],e,{ignoreBoundary:!0})),!i&&o<t.coordinates.length-1){var a=jl(t.coordinates[o],t.coordinates[o+1]);i=pt(a,e,{ignoreBoundary:!0})}}return i}function Ol(t,e){var n=Ke(t),r=Ke(e);if(!mi(r,n))return!1;for(var i=0;i<t.coordinates[0].length;i++)if(!pt(t.coordinates[0][i],e))return!1;return!0}function mi(t,e){return!(t[0]>e[0]||t[2]<e[2]||t[1]>e[1]||t[3]<e[3])}function bi(t,e){return t[0]===e[0]&&t[1]===e[1]}function jl(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}var Nl=El;const Hl=(t,e)=>e?Sl(t,e):!0,Il=(t,e)=>e?Nl(t,e):!0;function Fl(t,e="highlight",n="title"){const r=(i,o=[])=>{let a="",l=0,f=0;return o.forEach((u,h)=>{const p=u[1]+1;h&&f>u[0]||(f=u[1],a+=[i.substring(l,u[0]),`<mark class="${e}">`,i.substring(u[0],p),"</mark>"].join(""),l=p)}),a+=i.substring(l),a};return t.filter(({matches:i})=>i&&i.length).map(({item:i,matches:o})=>{const a={...i};return o.forEach(l=>{if(l.key!==n)return;const f=r(Vl(l.value),Yl(l.indices));a.highlightedText=f}),a})}var vi={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(Dt,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",a="second",l="minute",f="hour",u="day",h="week",p="month",y="quarter",g="year",b="date",M="Invalid Date",T=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,E=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,N={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function($){var w=["th","st","nd","rd"],v=$%100;return"["+$+(w[(v-20)%10]||w[v]||w[0])+"]"}},k=function($,w,v){var C=String($);return!C||C.length>=w?$:""+Array(w+1-C.length).join(v)+$},H={s:k,z:function($){var w=-$.utcOffset(),v=Math.abs(w),C=Math.floor(v/60),x=v%60;return(w<=0?"+":"-")+k(C,2,"0")+":"+k(x,2,"0")},m:function $(w,v){if(w.date()<v.date())return-$(v,w);var C=12*(v.year()-w.year())+(v.month()-w.month()),x=w.clone().add(C,p),D=v-x<0,R=w.clone().add(C+(D?-1:1),p);return+(-(C+(v-x)/(D?x-R:R-x))||0)},a:function($){return $<0?Math.ceil($)||0:Math.floor($)},p:function($){return{M:p,y:g,w:h,d:u,D:b,h:f,m:l,s:a,ms:o,Q:y}[$]||String($||"").toLowerCase().replace(/s$/,"")},u:function($){return $===void 0}},I="en",Q={};Q[I]=N;var W="$isDayjsObject",et=function($){return $ instanceof lt||!(!$||!$[W])},X=function $(w,v,C){var x;if(!w)return I;if(typeof w=="string"){var D=w.toLowerCase();Q[D]&&(x=D),v&&(Q[D]=v,x=D);var R=w.split("-");if(!x&&R.length>1)return $(R[0])}else{var F=w.name;Q[F]=w,x=F}return!C&&x&&(I=x),x||!C&&I},U=function($,w){if(et($))return $.clone();var v=typeof w=="object"?w:{};return v.date=$,v.args=arguments,new lt(v)},B=H;B.l=X,B.i=et,B.w=function($,w){return U($,{locale:w.$L,utc:w.$u,x:w.$x,$offset:w.$offset})};var lt=function(){function $(v){this.$L=X(v.locale,null,!0),this.parse(v),this.$x=this.$x||v.x||{},this[W]=!0}var w=$.prototype;return w.parse=function(v){this.$d=function(C){var x=C.date,D=C.utc;if(x===null)return new Date(NaN);if(B.u(x))return new Date;if(x instanceof Date)return new Date(x);if(typeof x=="string"&&!/Z$/i.test(x)){var R=x.match(T);if(R){var F=R[2]-1||0,z=(R[7]||"0").substring(0,3);return D?new Date(Date.UTC(R[1],F,R[3]||1,R[4]||0,R[5]||0,R[6]||0,z)):new Date(R[1],F,R[3]||1,R[4]||0,R[5]||0,R[6]||0,z)}}return new Date(x)}(v),this.init()},w.init=function(){var v=this.$d;this.$y=v.getFullYear(),this.$M=v.getMonth(),this.$D=v.getDate(),this.$W=v.getDay(),this.$H=v.getHours(),this.$m=v.getMinutes(),this.$s=v.getSeconds(),this.$ms=v.getMilliseconds()},w.$utils=function(){return B},w.isValid=function(){return this.$d.toString()!==M},w.isSame=function(v,C){var x=U(v);return this.startOf(C)<=x&&x<=this.endOf(C)},w.isAfter=function(v,C){return U(v)<this.startOf(C)},w.isBefore=function(v,C){return this.endOf(C)<U(v)},w.$g=function(v,C,x){return B.u(v)?this[C]:this.set(x,v)},w.unix=function(){return Math.floor(this.valueOf()/1e3)},w.valueOf=function(){return this.$d.getTime()},w.startOf=function(v,C){var x=this,D=!!B.u(C)||C,R=B.p(v),F=function(Mt,G){var gt=B.w(x.$u?Date.UTC(x.$y,G,Mt):new Date(x.$y,G,Mt),x);return D?gt:gt.endOf(u)},z=function(Mt,G){return B.w(x.toDate()[Mt].apply(x.toDate("s"),(D?[0,0,0,0]:[23,59,59,999]).slice(G)),x)},Y=this.$W,J=this.$M,st=this.$D,Pt="set"+(this.$u?"UTC":"");switch(R){case g:return D?F(1,0):F(31,11);case p:return D?F(1,J):F(0,J+1);case h:var O=this.$locale().weekStart||0,Tt=(Y<O?Y+7:Y)-O;return F(D?st-Tt:st+(6-Tt),J);case u:case b:return z(Pt+"Hours",0);case f:return z(Pt+"Minutes",1);case l:return z(Pt+"Seconds",2);case a:return z(Pt+"Milliseconds",3);default:return this.clone()}},w.endOf=function(v){return this.startOf(v,!1)},w.$set=function(v,C){var x,D=B.p(v),R="set"+(this.$u?"UTC":""),F=(x={},x[u]=R+"Date",x[b]=R+"Date",x[p]=R+"Month",x[g]=R+"FullYear",x[f]=R+"Hours",x[l]=R+"Minutes",x[a]=R+"Seconds",x[o]=R+"Milliseconds",x)[D],z=D===u?this.$D+(C-this.$W):C;if(D===p||D===g){var Y=this.clone().set(b,1);Y.$d[F](z),Y.init(),this.$d=Y.set(b,Math.min(this.$D,Y.daysInMonth())).$d}else F&&this.$d[F](z);return this.init(),this},w.set=function(v,C){return this.clone().$set(v,C)},w.get=function(v){return this[B.p(v)]()},w.add=function(v,C){var x,D=this;v=Number(v);var R=B.p(C),F=function(J){var st=U(D);return B.w(st.date(st.date()+Math.round(J*v)),D)};if(R===p)return this.set(p,this.$M+v);if(R===g)return this.set(g,this.$y+v);if(R===u)return F(1);if(R===h)return F(7);var z=(x={},x[l]=r,x[f]=i,x[a]=n,x)[R]||1,Y=this.$d.getTime()+v*z;return B.w(Y,this)},w.subtract=function(v,C){return this.add(-1*v,C)},w.format=function(v){var C=this,x=this.$locale();if(!this.isValid())return x.invalidDate||M;var D=v||"YYYY-MM-DDTHH:mm:ssZ",R=B.z(this),F=this.$H,z=this.$m,Y=this.$M,J=x.weekdays,st=x.months,Pt=x.meridiem,O=function(G,gt,kt,Zt){return G&&(G[gt]||G(C,D))||kt[gt].slice(0,Zt)},Tt=function(G){return B.s(F%12||12,G,"0")},Mt=Pt||function(G,gt,kt){var Zt=G<12?"AM":"PM";return kt?Zt.toLowerCase():Zt};return D.replace(E,function(G,gt){return gt||function(kt){switch(kt){case"YY":return String(C.$y).slice(-2);case"YYYY":return B.s(C.$y,4,"0");case"M":return Y+1;case"MM":return B.s(Y+1,2,"0");case"MMM":return O(x.monthsShort,Y,st,3);case"MMMM":return O(st,Y);case"D":return C.$D;case"DD":return B.s(C.$D,2,"0");case"d":return String(C.$W);case"dd":return O(x.weekdaysMin,C.$W,J,2);case"ddd":return O(x.weekdaysShort,C.$W,J,3);case"dddd":return J[C.$W];case"H":return String(F);case"HH":return B.s(F,2,"0");case"h":return Tt(1);case"hh":return Tt(2);case"a":return Mt(F,z,!0);case"A":return Mt(F,z,!1);case"m":return String(z);case"mm":return B.s(z,2,"0");case"s":return String(C.$s);case"ss":return B.s(C.$s,2,"0");case"SSS":return B.s(C.$ms,3,"0");case"Z":return R}return null}(G)||R.replace(":","")})},w.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},w.diff=function(v,C,x){var D,R=this,F=B.p(C),z=U(v),Y=(z.utcOffset()-this.utcOffset())*r,J=this-z,st=function(){return B.m(R,z)};switch(F){case g:D=st()/12;break;case p:D=st();break;case y:D=st()/3;break;case h:D=(J-Y)/6048e5;break;case u:D=(J-Y)/864e5;break;case f:D=J/i;break;case l:D=J/r;break;case a:D=J/n;break;default:D=J}return x?D:B.a(D)},w.daysInMonth=function(){return this.endOf(p).$D},w.$locale=function(){return Q[this.$L]},w.locale=function(v,C){if(!v)return this.$L;var x=this.clone(),D=X(v,C,!0);return D&&(x.$L=D),x},w.clone=function(){return B.w(this.$d,this)},w.toDate=function(){return new Date(this.valueOf())},w.toJSON=function(){return this.isValid()?this.toISOString():null},w.toISOString=function(){return this.$d.toISOString()},w.toString=function(){return this.$d.toUTCString()},$}(),fe=lt.prototype;return U.prototype=fe,[["$ms",o],["$s",a],["$m",l],["$H",f],["$W",u],["$M",p],["$y",g],["$D",b]].forEach(function($){fe[$[1]]=function(w){return this.$g(w,$[0],$[1])}}),U.extend=function($,w){return $.$i||($(w,lt,U),$.$i=!0),U},U.locale=X,U.isDayjs=et,U.unix=function($){return U(1e3*$)},U.en=Q[I],U.Ls=Q,U.p={},U})})(vi);var ql=vi.exports;const ye=Vn(ql);let wi;const Wl=(t,e)=>{wi=new Ft(t,{threshold:.4,distance:50,ignoreLocation:!0,includeMatches:!0,useExtendedSearch:!0,...e})},Ul=async(t,e,n)=>{const r=Object.entries(e).filter(([,l])=>l.type==="text"||l.type==="select"||l.type==="multiselect").reduce((l,[f,u])=>{const h="$or",p=[],y=(g,b)=>{const M={};u.type==="text"?M[g]=`${b}`:M[f]=`="${g}"`,p.push(M)};return Object.entries(u.state).filter(([,g])=>g).forEach(([g,b])=>y(g,b)),p.length>0&&l.push({[h]:p}),l},[]);let i;if(!(r.length>0)&&n.matchAllWhenEmpty!==!1)i=t;else{const l={$and:[...r]},f=wi.search(l);i=n.enableHighlighting?Fl(f,"highlight",n.titleProperty):f.map(u=>u.item)}const o=Object.entries(e).filter(([,l])=>l.type==="range").reduce((l,[f,u])=>(l[f]={min:u.state.min,max:u.state.max,format:u.format},l),{});if(Object.keys(o).length>0){const l=[];for(let f=0;f<i.length;f++){const u={};for(const[h,p]of Object.entries(o)){const y=b=>p.format==="date"?ye(b).unix():b,g=Gt(h,i[f]);g?Array.isArray(g)?u[h]=o[h].min<=y(g[1])&&y(g[0])<=o[h].max:y(g)>=o[h].min&&y(g)<=o[h].max?u[h]=!0:u[h]=!1:u[h]=!0}Object.values(u).every(h=>!!h)&&l.push(i[f])}i=[...l]}const a=Object.entries(e).filter(([,l])=>l.type==="spatial").reduce((l,[f,u])=>(l[f]={geometry:u.state.geometry,mode:u.state.mode},l),{});if(Object.values(a).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let f=0;f<i.length;f++){const u={};for(const h of Object.keys(a)){const p=Gt(h,i[f]),y=a[h].mode||"within";p&&(y==="within"?Il(p,a[h].geometry):Hl(p,a[h].geometry))?u[h]=!0:u[h]=!1}Object.values(u).every(h=>!!h)&&l.push(i[f])}i=[...l]}return i};function zl(t,e){return[{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...t&&{format:"GeoJSON"},...t&&{url:e}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]},{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}}]}function ln(t){if(!t.dirty)return null;switch(t.type){case"multiselect":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"range":t.state.min=t.min,t.state.max=t.max;break;case"select":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"spatial":t.state.geometry=void 0;break;case"text":t.keys.forEach(n=>{t.state[n]=void 0});break}return delete t.stringifiedState,delete t.dirty,t}function Nr(t,e){return t*2+e}function Gl(t){return Object.keys(t).map(e=>({title:S`${t[e].title||t[e].key}:
      ${t[e].stringifiedState}`,key:e})).filter(e=>t[e.key].dirty)}function Nn(t){return Object.values(t).map(e=>e.dirty).filter(e=>e).length>0}async function Kl(t,e,n){return await(await fetch(`${n.externalFilter(t,e)}`)).json()}function xi(t,e,n){let r;if(t.detail?r=t.detail.target:r=t.target,r!=null&&r.classList.contains("details-filter")){if(!r.open||e!=null&&e.expandMultipleFilters)return;n.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(i=>{const o=i.shadowRoot.querySelector(".details-filter");o&&o!==r&&o.removeAttribute("open")})}else{if(!(r!=null&&r.open)||e!=null&&e.expandMultipleResults)return;n.querySelectorAll("details").forEach(i=>{i!==r&&i.removeAttribute("open")})}}function Gt(t,e){return t!=null&&t.includes(".")?t.split(".").reduce((n,r)=>n&&n[r],e):e[t]}function Vl(t){return t.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}function Yl(t,{mergeAdjacent:e=!1}={}){if(!Array.isArray(t))return[];const n=t.map(([i,o])=>i<=o?[i,o]:[o,i]).sort((i,o)=>i[0]-o[0]||i[1]-o[1]),r=[];for(const[i,o]of n){if(r.length===0){r.push([i,o]);continue}const a=r[r.length-1];(e?i<=a[1]+1:i<=a[1])?o>a[1]&&(a[1]=o):r.push([i,o])}return r}var q,Ai,Hn,In,Mi,Fn,qn,$i,Wn,_i,Ci;class Xl extends xt{constructor(){super();it(this,q);this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=j(this,q,Mi).bind(this),this._handleKeyDown=j(this,q,Fn).bind(this)}static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}set showDropdown(n){this.renderRoot.querySelector("[popover]").togglePopover(n)}get showDropdown(){var n;return(n=this.renderRoot.querySelector("[popover]"))==null?void 0:n.matches(":popover-open")}connectedCallback(){super.connectedCallback(),this.inlineMode&&j(this,q,Hn).call(this)}disconnectedCallback(){this.inlineMode&&j(this,q,In).call(this),super.disconnectedCallback()}_overlayCleanup(){}updateInline(){this.inlineMode&&this.requestUpdate()}updated(n){n.has("inlineMode")&&(this.inlineMode?j(this,q,Hn).call(this):j(this,q,In).call(this))}render(){return S`
      <style>
        ${!this.unstyled&&Yn}
      </style>
      ${this.inlineMode?S`
            <div
              class="inline-container-wrapper"
              @click="${j(this,q,qn)}"
            >
              <div class="inline-container square border" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips
                      .items=${Gl(this.filters)}
                      .controller=${{remove:n=>j(this,q,_i).call(this,n)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${Z(Nn(this.filters),()=>S`
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
                  class="input-container field no-margin ${Nn(this.filters)?"dirty-filter-input":""}"
                >
                  <input
                    autocomplete="off"
                    id="eox-itemfilter-input-search"
                    type="text"
                    @click="${j(this,q,qn)}"
                    @focus="${j(this,q,$i)}"
                    @input="${j(this,q,Ci)}"
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
                  @keydown="${j(this,q,Fn)}"
                  @click="${j(this,q,Wn)}"
                  @focus="${j(this,q,Wn)}"
                >
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `:S`<slot name="section"></slot>`}
    `}}q=new WeakSet,Ai=function(){setTimeout(()=>this._overlayCleanup=tl(this))},Hn=function(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),j(this,q,Ai).call(this)},In=function(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()},Mi=function(n){sl(n,this)},Fn=function(n){il(n,this)},qn=function(n){rl(n,this)},$i=function(){nl(this)},Wn=function(n){el(n,this)},_i=function(n){wa(n,this)},Ci=function(n){Qr(n,this)};customElements.define("eox-itemfilter-container",Xl);function Jl(t){const e=t.renderRoot.querySelector("input[type='text']");e.value="",ln(t.filterObject),t.requestUpdate()}function Zl(t){const e=t.renderRoot.querySelector("input[type='text']");t.isValid=e.checkValidity(),t.filterObject.keys.forEach(n=>{t.filterObject.state[n]=e.value}),t.filterObject.dirty=!0,t.filterObject.stringifiedState=e.value,t.dispatchEvent(new CustomEvent("filter")),e.value===""&&t.reset()}const Un="ddd, D MMM YYYY HH:mm:ss";function Ql(t){if(t.filterObject=ln(t.filterObject),t.filterObject){const e=t.querySelector("tc-range-slider"),n=t.filterObject.min,r=t.filterObject.max;e.value1!==n&&(e.value1=n),e.value2!==r&&(e.value2=r)}t.requestUpdate()}function tc(t,e){const[n,r]=t.detail.values;(n!==e.filterObject.state.min||r!==e.filterObject.state.max)&&([e.filterObject.state.min,e.filterObject.state.max]=[n,r],e.filterObject.dirty=!0),e.filterObject.dirty&&(e.filterObject.stringifiedState=e.filterObject.format==="date"?`${ye.unix(n).format(Un)} - ${ye.unix(r).format(Un)}`:`${n} - ${r}`),e.dispatchEvent(new CustomEvent("filter")),n===e.filterObject.min&&r===e.filterObject.max?e.reset():e.requestUpdate()}function ec(t,e,n){const r=n.filterObject.format==="date",i=n.filterObject.state[t],o=r?ye.unix(i).format(Un):i;return S`<div class="range-${e}">${o}</div>`}function nc(t){rc(-1,t),ln(t.filterObject),t.requestUpdate()}function rc(t,e){e.selectedItems=[],er(e),Li(e)}function Si(t,e){const n=e.selectedItems.indexOf(t);n>=0?e.selectedItems=e.selectedItems.filter((r,i)=>i!==n):e.type==="multiselect"?e.selectedItems=[...e.selectedItems,t]:(e.selectedItems=[t],e.showSuggestions=!1),er(e),Li(e)}function ic(t,e){t.target instanceof HTMLInputElement&&(e.query=t.target.value,e.showSuggestions=!0)}function sc(t,e){switch(t.key){case"ArrowDown":e.highlightedIndex=Math.min(e.highlightedIndex+1,e.filteredSuggestions.length-1);break;case"ArrowUp":e.highlightedIndex=Math.max(e.highlightedIndex-1,0);break;case"Enter":e.highlightedIndex>=0&&Si(e.filteredSuggestions[e.highlightedIndex],e);break;case"Escape":e.showSuggestions=!1;break}}function oc(t,e){(t.has("suggestions")||t.has("query"))&&er(e)}function ac(t,e){var r;const n=((r=t.filterObject)==null?void 0:r.sort)||((i,o)=>i.toString().localeCompare(o.toString(),void 0,{numeric:!0}));return e.sort(n).map(i=>i)}function er(t){var r,i,o;const e=(((r=t.filterObject)==null?void 0:r.filterKeys)||t.suggestions).map(a=>`${a}`);let n=e;t.query&&(n=new Ft(e,{threshold:.4}).search(t.query).map(l=>l.item)),t.filteredSuggestions=(i=t.filterObject)!=null&&i.filterKeys?n:ac(t,n),(o=t.filterObject)!=null&&o.filterKeys&&(t.filterObject.state=e.reduce((a,l)=>(l in a||(a[l]=void 0),a),t.filterObject.state)),t.highlightedIndex=-1}function Li(t){Object.keys(t.filterObject.state).forEach(e=>{t.filterObject.state[e]=t.selectedItems.includes(e)}),t.filterObject.stringifiedState=Object.keys(t.filterObject.state).filter(e=>t.filterObject.state[e]).join(", ")||"",t.filterObject.dirty=t.filterObject.stringifiedState.length>0,t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}function lc(t){ln(t.filterObject),t.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),t.requestUpdate()}function cc(t){t.renderRoot.querySelector("#eox-map").innerHTML="",Ei(t)}function uc(t,e){e.filterObject.state.mode=t;const n=new CustomEvent("filter",{detail:{[e.filterObject.key]:{}}});e.dispatchEvent(n)}function Ei(t){const e=t.renderRoot.querySelector("#eox-map");e.innerHTML===""&&(e.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const n=t.geometry&&fc(t.geometry),r=zl(t.geometry,n);t.eoxMap=t.renderRoot.querySelector("eox-map"),setTimeout(()=>{t.eoxMap.layers=r;const i=o=>{const a=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:o.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});t.dispatchEvent(a)};t.eoxMap.interactions.drawInteraction.on("drawend",o=>{i(o.feature),t.eoxMap.removeInteraction("drawInteraction")}),t.eoxMap.interactions.drawInteraction_modify.on("modifyend",o=>{i(o.features.getArray()[0])})},1e3)}function fc(t){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:t}]}))}`}var be,Ze;class hc extends xt{constructor(){super();it(this,be,()=>{Zl(this)});it(this,Ze,n=>{n.key==="Enter"&&n.target.value&&this.results&&this.results.length===1&&(this.dispatchEvent(new CustomEvent("result",{detail:this.results[0]})),n.target.value="",rt(this,be).call(this))});pe(this,"debouncedInputHandler",nn(rt(this,be),500,{leading:!0}));this.filterObject={},this.results=null,this.unstyled=!1,this.tabIndex=0,this.isValid=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},results:{state:!0,type:Array},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}reset(){Jl(this)}createRenderRoot(){return this}render(){return Z(this.filterObject,()=>{var n;return S`
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
              @keydown=${rt(this,Ze)}
            />
          </div>
        </div>
        <small class="error-validation" style="margin-left: var(--list-padding)"
          >${this.filterObject.validation&&this.isValid===!1?this.filterObject.validation.message:""}</small
        >
      `})}}be=new WeakMap,Ze=new WeakMap;customElements.define("eox-itemfilter-text",hc);function dc(t,e,n){return t.filter(r=>{const i=r[n.config.aggregateResults];let o;return n.filters[n.config.aggregateResults]&&(o=Object.keys(n.filters[n.config.aggregateResults]).filter(l=>n.filters[n.config.aggregateResults].state[l])),(o!=null&&o.length?o.includes(e):!0)&&Array.isArray(i)?i.includes(e):i===e})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Di=Symbol.for(""),pc=t=>{if((t==null?void 0:t.r)===Di)return t==null?void 0:t._$litStatic$},ee=t=>({_$litStatic$:t,r:Di}),Hr=new Map,gc=t=>(e,...n)=>{const r=n.length;let i,o;const a=[],l=[];let f,u=0,h=!1;for(;u<r;){for(f=e[u];u<r&&(o=n[u],(i=pc(o))!==void 0);)f+=i+e[++u],h=!0;u!==r&&l.push(o),a.push(f),u++}if(u===r&&a.push(e[r]),h){const p=a.join("$$lit$$");(e=Hr.get(p))===void 0&&(a.raw=a,Hr.set(p,e=a)),n=l}return t(e,...n)},Ir=gc(S);function yc(t,e){return S`
    <details
      class="details-results"
      @toggle=${e.handleAccordion}
      ?open=${e.config.expandResults||jt}
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
        ${Ri(e,t)}
      </div>
    </details>
  `}function Ri(t,e){const n=t.results,r=e?t.aggregateResults(n,e):n,i=t.config,o=a=>{var l;return((l=t.selectedResult)==null?void 0:l[i.idProperty])===a[i.idProperty]?"highlighted":jt};return Ir`
    ${t.resultType==="cards"?ee("<eox-layout fill-grid>"):ee('<ul id="results" class="list no-space" part="results">')}
      ${Lo(r,a=>a.id,a=>Ir`
        ${t.resultType==="cards"?ee("<eox-layout-item"):ee("<li")}
            class="${o(a)}"
            @click=${()=>{t.selectedResult===a?t.selectedResult=null:t.selectedResult=a,t.dispatchEvent(new CustomEvent("result",{detail:t.selectedResult}))}}
          >
            <nav id="${a.id}" class="responsive tiny-space">
              ${Z(i.subTitleProperty||i.imageProperty,()=>S`
                  ${Z(t.resultType==="cards",()=>Gt(i.imageProperty,a)?S`
                            <img
                              class="image"
                              src="${Gt(i.imageProperty,a)}"
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
                        ${Gt(i.imageProperty,a)?S`
                              <img
                                class="image"
                                src="${Gt(i.imageProperty,a)}"
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
                      class="title truncate ${a.highlightedText?"highlight-enabled":""}"
                      >${Oe(a.highlightedText||a[i.titleProperty])}</span
                    >
                    ${Z(!!a[i.subTitleProperty],()=>S`
                        <small class="subtitle no-line truncate"
                          >${Oe(a[i.subTitleProperty].toString())}</small
                        >
                      `)}
                  </div>
                `,()=>S`
                  <div class="small-line max truncate">
                    <span
                      class="title truncate ${a.highlightedText?"highlight-enabled":""}"
                      >${Oe(a.highlightedText||a[i.titleProperty])}</span
                    >
                  </div>
                `)}
              ${Z(t.enableResultAction,()=>S`
                  <button
                    class="result-action square transparent primary-text small"
                    @click=${l=>{l.stopPropagation(),t.dispatchEvent(new CustomEvent("click:result-action",{detail:a}))}}
                  >
                    <icon class="small"
                      >${Oe(t.resultActionIcon)}</icon
                    >
                  </button>
                `)}
            </nav>
          </li>
        `)}
    ${t.resultType==="cards"?ee("</eox-layout>"):ee("</ul>")}
  `}var Yt,zn,Pi;class mc extends xt{constructor(){super();it(this,Yt);this.config=null,this.results=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list",this.resultActionIcon=void 0}static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Array},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String},resultActionIcon:{attribute:!1,type:String}}}aggregateResults(n,r){return dc(n,r,this)}createRenderRoot(){return this}handleAccordion(n){xi(n,this.config,this)}render(){return S`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${Z(this.results.length<1,()=>S`<small class="no-results">No matching items</small>`,()=>jt)}
          ${Z(this.config.aggregateResults,()=>en(this.resultAggregation.filter(n=>this.aggregateResults(this.results,n).length),n=>S`${Z(this.aggregateResults(this.results,n).length===1&&this.config.autoSpreadSingle,()=>S`<div style="margin-left: -8px">
                        ${j(this,Yt,zn).call(this,n)}
                      </div>`,()=>j(this,Yt,Pi).call(this,n))}`),()=>j(this,Yt,zn).call(this))}
        </div>
      </section>
    `}}Yt=new WeakSet,zn=function(n){return Ri(this,n)},Pi=function(n){return yc(n,this)};customElements.define("eox-itemfilter-results",mc);var Ht,ki,Bi,Oi;class Ti extends xt{constructor(){super();it(this,Ht);pe(this,"debouncedInputHandler",nn(j(this,Ht,Oi),500,{leading:!0}));this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(n){oc(n,this)}reset(){nc(this)}firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(n=>this.filterObject.state[n]?n:null).filter(n=>!!n),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}createRenderRoot(){return this}render(){const n=this.type.includes("multi")?"checkbox":"radio",r=this.filteredSuggestions.length>5?"select-overflow scroll":jt;return S`
      <style>
        :host,
        :root {
          --select-filter-max-items: 5;
        }
      </style>
      ${Z((this.filterObject.filterKeys||this.suggestions).length>=10,()=>S`<div class="autocomplete-container">
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
                @input=${j(this,Ht,ki)}
                @keydown=${j(this,Ht,Bi)}
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
                <label class="${n} small max">
                  <input
                    type="${n}"
                    name=${i}
                    .checked=${this.selectedItems.includes(i)}
                    @change=${()=>this.debouncedInputHandler(i)}
                    @keydown=${o=>{o.key===" "&&this.inlineMode&&this.debouncedInputHandler(i)}}
                    tabindex=${this.tabIndex+1}
                  />
                  <span class="title small-line">${i}</span>
                </label>
              </li>
            `)}
        </ul>
      </div>
    `}}Ht=new WeakSet,ki=function(n){ic(n,this)},Bi=function(n){sc(n,this)},Oi=function(n){Si(n,this)},pe(Ti,"properties",{filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}});customElements.define("eox-itemfilter-select",Ti);var Xt,Ni,Gn;class ji extends xt{constructor(){super();it(this,Xt);this.filterObject={},this.tabIndex=0,this.inputHandler=j(this,Xt,Ni).bind(this),this.debouncedInputHandler=nn(this.inputHandler,500,{leading:!1})}reset(){Ql(this)}createRenderRoot(){return this}render(){return Z(this.filterObject,()=>S`
        <div style="margin-left: var(--list-padding)">
          ${j(this,Xt,Gn).call(this,"min","before")}
          <tc-range-slider
            min="${this.filterObject.min}"
            max="${this.filterObject.max}"
            value1="${this.filterObject.state.min||this.filterObject.min}"
            value2="${this.filterObject.state.max||this.filterObject.max}"
            step="${this.filterObject.step||1}"
            @change=${this.debouncedInputHandler}
          ></tc-range-slider>
          ${j(this,Xt,Gn).call(this,"max","after")}
        </div>
      `)}}Xt=new WeakSet,Ni=function(n){tc(n,this)},Gn=function(n,r){return ec(n,r,this)},pe(ji,"properties",{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number}});customElements.define("eox-itemfilter-range",ji);var Qe,Hi;class bc extends xt{constructor(){super();it(this,Qe);this.filterObject={},this.tabIndex=0}static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}reset(){lc(this)}createRenderRoot(){return this}render(){return Z(this.filterObject,()=>{var n;return S`
        <div style="margin-left: var(--list-padding)">
          <nav class="vertical-margin small-margin wrap">
            ${en(["intersects","within"],r=>S`
                <label class="radio small small-text">
                  <input
                    tabindex=${this.tabIndex}
                    type="radio"
                    name="mode"
                    .checked="${(this.filterObject.state.mode||"")===r||jt}"
                    value="${r}"
                    @click=${()=>j(this,Qe,Hi).call(this,r)}
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
      `})}}Qe=new WeakSet,Hi=function(n){uc(n,this)};customElements.define("eox-itemfilter-spatial",bc);var tn,Ii;class vc extends xt{constructor(){super();it(this,tn);this.geometry=null,this.eoxMap=null}static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}firstUpdated(){j(this,tn,Ii).call(this)}reset(){cc(this)}render(){return S`<div id="eox-map"></div>`}}tn=new WeakSet,Ii=function(){Ei(this)};customElements.define("eox-itemfilter-spatial-filter",vc);function wc(t,e){e.renderRoot.querySelectorAll(".chip").forEach(n=>{n.classList.remove("highlighted")}),t.target instanceof HTMLElement&&t.target.classList.add("highlighted"),e.requestUpdate()}function xc(t,e){const{code:n,target:r}=t;r instanceof HTMLElement&&r.id!=="eox-itemfilter-input-search"||e.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(n)||(n==="Space"&&t.preventDefault(),["Escape","Space","Enter"].includes(n)||t.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(n)&&Ac(n,t.target.value??"",e))}function Ac(t,e,n){const r=n.renderRoot.querySelector(".chip.highlighted");if((t==="Escape"||e)&&r&&r.classList.remove("highlighted"),t==="Backspace"&&!e){if(n.items.length){r&&(r.querySelector(".chip-item-close").click(),n.items.splice(Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(r),1));const i=n.renderRoot.querySelectorAll(".chip")[n.renderRoot.querySelectorAll(".chip").length-1];i.classList.contains("highlighted")||i.classList.add("highlighted"),n.requestUpdate()}n._dispatchEvent()}if((t==="ArrowLeft"||t==="ArrowRight")&&!e){if(n.renderRoot.querySelectorAll(".chip").length<1)return;let i=0;const o=n.renderRoot.querySelector(".chip.highlighted");o&&(i=Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(o),o.classList.remove("highlighted")),i=i+(t==="ArrowLeft"?-1:1),t==="ArrowLeft"&&i<0&&(i=n.renderRoot.querySelectorAll(".chip").length-1),t==="ArrowRight"&&i>n.renderRoot.querySelectorAll(".chip").length-1&&(i=0),Array.from(n.renderRoot.querySelectorAll(".chip"))[i].classList.add("highlighted")}}var Jt,Kn,Fi;class Mc extends xt{constructor(){super();it(this,Jt);this.items={},this.controller={}}static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",j(this,Jt,Kn).bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",j(this,Jt,Kn).bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}render(){return S`
      <span class="chip-container">
        ${en(this.items,n=>S`
            <span class="chip tiny-margin" @click=${j(this,Jt,Fi).bind(this)}>
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
    `}}Jt=new WeakSet,Kn=function(n){xc(n,this)},Fi=function(n){wc(n,this)};customElements.define("eox-itemfilter-chips",Mc);const $c=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),Fr=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","expandMultipleFilters","expandResults","expandMultipleResults","items"];var _c=200,nr="__lodash_hash_undefined__",Cc=1/0,Sc="[object Function]",Lc="[object GeneratorFunction]",Ec=/[\\^$.*+?()[\]{}|]/g,Dc=/^\[object .+?Constructor\]$/,Rc=typeof Dt=="object"&&Dt&&Dt.Object===Object&&Dt,Pc=typeof self=="object"&&self&&self.Object===Object&&self,rr=Rc||Pc||Function("return this")();function Tc(t,e){var n=t?t.length:0;return!!n&&Bc(t,e,0)>-1}function kc(t,e,n,r){for(var i=t.length,o=n+-1;++o<i;)if(e(t[o],o,t))return o;return-1}function Bc(t,e,n){if(e!==e)return kc(t,Oc,n);for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}function Oc(t){return t!==t}function jc(t,e){return t.has(e)}function Nc(t,e){return t==null?void 0:t[e]}function Hc(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch{}return e}function qi(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var Ic=Array.prototype,Fc=Function.prototype,Wi=Object.prototype,Cn=rr["__core-js_shared__"],qr=function(){var t=/[^.]+$/.exec(Cn&&Cn.keys&&Cn.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Ui=Fc.toString,ir=Wi.hasOwnProperty,qc=Wi.toString,Wc=RegExp("^"+Ui.call(ir).replace(Ec,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Uc=Ic.splice,zc=sr(rr,"Map"),Sn=sr(rr,"Set"),me=sr(Object,"create");function Vt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Gc(){this.__data__=me?me(null):{}}function Kc(t){return this.has(t)&&delete this.__data__[t]}function Vc(t){var e=this.__data__;if(me){var n=e[t];return n===nr?void 0:n}return ir.call(e,t)?e[t]:void 0}function Yc(t){var e=this.__data__;return me?e[t]!==void 0:ir.call(e,t)}function Xc(t,e){var n=this.__data__;return n[t]=me&&e===void 0?nr:e,this}Vt.prototype.clear=Gc;Vt.prototype.delete=Kc;Vt.prototype.get=Vc;Vt.prototype.has=Yc;Vt.prototype.set=Xc;function ce(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Jc(){this.__data__=[]}function Zc(t){var e=this.__data__,n=cn(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():Uc.call(e,n,1),!0}function Qc(t){var e=this.__data__,n=cn(e,t);return n<0?void 0:e[n][1]}function tu(t){return cn(this.__data__,t)>-1}function eu(t,e){var n=this.__data__,r=cn(n,t);return r<0?n.push([t,e]):n[r][1]=e,this}ce.prototype.clear=Jc;ce.prototype.delete=Zc;ce.prototype.get=Qc;ce.prototype.has=tu;ce.prototype.set=eu;function ue(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function nu(){this.__data__={hash:new Vt,map:new(zc||ce),string:new Vt}}function ru(t){return un(this,t).delete(t)}function iu(t){return un(this,t).get(t)}function su(t){return un(this,t).has(t)}function ou(t,e){return un(this,t).set(t,e),this}ue.prototype.clear=nu;ue.prototype.delete=ru;ue.prototype.get=iu;ue.prototype.has=su;ue.prototype.set=ou;function Ye(t){var e=-1,n=t?t.length:0;for(this.__data__=new ue;++e<n;)this.add(t[e])}function au(t){return this.__data__.set(t,nr),this}function lu(t){return this.__data__.has(t)}Ye.prototype.add=Ye.prototype.push=au;Ye.prototype.has=lu;function cn(t,e){for(var n=t.length;n--;)if(yu(t[n][0],e))return n;return-1}function cu(t){if(!zi(t)||du(t))return!1;var e=mu(t)||Hc(t)?Wc:Dc;return e.test(pu(t))}function uu(t,e,n){var r=-1,i=Tc,o=t.length,a=!0,l=[],f=l;if(o>=_c){var u=fu(t);if(u)return qi(u);a=!1,i=jc,f=new Ye}else f=l;t:for(;++r<o;){var h=t[r],p=h;if(h=h!==0?h:0,a&&p===p){for(var y=f.length;y--;)if(f[y]===p)continue t;l.push(h)}else i(f,p,n)||(f!==l&&f.push(p),l.push(h))}return l}var fu=Sn&&1/qi(new Sn([,-0]))[1]==Cc?function(t){return new Sn(t)}:bu;function un(t,e){var n=t.__data__;return hu(e)?n[typeof e=="string"?"string":"hash"]:n.map}function sr(t,e){var n=Nc(t,e);return cu(n)?n:void 0}function hu(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function du(t){return!!qr&&qr in t}function pu(t){if(t!=null){try{return Ui.call(t)}catch{}try{return t+""}catch{}}return""}function gu(t){return t&&t.length?uu(t):[]}function yu(t,e){return t===e||t!==t&&e!==e}function mu(t){var e=zi(t)?qc.call(t):"";return e==Sc||e==Lc}function zi(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function bu(){}var vu=gu;const Gi=Vn(vu);var Xe={exports:{}};Xe.exports;(function(t,e){var n=200,r="Expected a function",i="__lodash_hash_undefined__",o=1,a=2,l=9007199254740991,f="[object Arguments]",u="[object Array]",h="[object Boolean]",p="[object Date]",y="[object Error]",g="[object Function]",b="[object GeneratorFunction]",M="[object Map]",T="[object Number]",E="[object Object]",N="[object Promise]",k="[object RegExp]",H="[object Set]",I="[object String]",Q="[object Symbol]",W="[object WeakMap]",et="[object ArrayBuffer]",X="[object DataView]",U="[object Float32Array]",B="[object Float64Array]",lt="[object Int8Array]",fe="[object Int16Array]",$="[object Int32Array]",w="[object Uint8Array]",v="[object Uint8ClampedArray]",C="[object Uint16Array]",x="[object Uint32Array]",D=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,R=/^\w*$/,F=/^\./,z=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Y=/[\\^$.*+?()[\]{}|]/g,J=/\\(\\)?/g,st=/^\[object .+?Constructor\]$/,Pt=/^(?:0|[1-9]\d*)$/,O={};O[U]=O[B]=O[lt]=O[fe]=O[$]=O[w]=O[v]=O[C]=O[x]=!0,O[f]=O[u]=O[et]=O[h]=O[X]=O[p]=O[y]=O[g]=O[M]=O[T]=O[E]=O[k]=O[H]=O[I]=O[W]=!1;var Tt=typeof Dt=="object"&&Dt&&Dt.Object===Object&&Dt,Mt=typeof self=="object"&&self&&self.Object===Object&&self,G=Tt||Mt||Function("return this")(),gt=e&&!e.nodeType&&e,kt=gt&&!0&&t&&!t.nodeType&&t,Zt=kt&&kt.exports===gt,or=Zt&&Tt.process,ar=function(){try{return or&&or.binding("util")}catch{}}(),lr=ar&&ar.isTypedArray;function Xi(s,c){for(var d=-1,m=s?s.length:0,_=Array(m);++d<m;)_[d]=c(s[d],d,s);return _}function Ji(s,c){for(var d=-1,m=c.length,_=s.length;++d<m;)s[_+d]=c[d];return s}function Zi(s,c){for(var d=-1,m=s?s.length:0;++d<m;)if(c(s[d],d,s))return!0;return!1}function Qi(s){return function(c){return c==null?void 0:c[s]}}function ts(s,c){for(var d=-1,m=Array(s);++d<s;)m[d]=c(d);return m}function es(s){return function(c){return s(c)}}function ns(s,c){return s==null?void 0:s[c]}function fn(s){var c=!1;if(s!=null&&typeof s.toString!="function")try{c=!!(s+"")}catch{}return c}function rs(s){var c=-1,d=Array(s.size);return s.forEach(function(m,_){d[++c]=[_,m]}),d}function is(s,c){return function(d){return s(c(d))}}function ss(s){var c=-1,d=Array(s.size);return s.forEach(function(m){d[++c]=m}),d}var os=Array.prototype,as=Function.prototype,xe=Object.prototype,hn=G["__core-js_shared__"],cr=function(){var s=/[^.]+$/.exec(hn&&hn.keys&&hn.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),ur=as.toString,$t=xe.hasOwnProperty,Qt=xe.toString,ls=RegExp("^"+ur.call($t).replace(Y,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ae=G.Symbol,fr=G.Uint8Array,cs=xe.propertyIsEnumerable,us=os.splice,hr=Ae?Ae.isConcatSpreadable:void 0,fs=is(Object.keys,Object),dn=te(G,"DataView"),he=te(G,"Map"),pn=te(G,"Promise"),gn=te(G,"Set"),yn=te(G,"WeakMap"),de=te(Object,"create"),hs=Wt(dn),ds=Wt(he),ps=Wt(pn),gs=Wt(gn),ys=Wt(yn),Me=Ae?Ae.prototype:void 0,mn=Me?Me.valueOf:void 0,dr=Me?Me.toString:void 0;function qt(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function ms(){this.__data__=de?de(null):{}}function bs(s){return this.has(s)&&delete this.__data__[s]}function vs(s){var c=this.__data__;if(de){var d=c[s];return d===i?void 0:d}return $t.call(c,s)?c[s]:void 0}function ws(s){var c=this.__data__;return de?c[s]!==void 0:$t.call(c,s)}function xs(s,c){var d=this.__data__;return d[s]=de&&c===void 0?i:c,this}qt.prototype.clear=ms,qt.prototype.delete=bs,qt.prototype.get=vs,qt.prototype.has=ws,qt.prototype.set=xs;function _t(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function As(){this.__data__=[]}function Ms(s){var c=this.__data__,d=_e(c,s);if(d<0)return!1;var m=c.length-1;return d==m?c.pop():us.call(c,d,1),!0}function $s(s){var c=this.__data__,d=_e(c,s);return d<0?void 0:c[d][1]}function _s(s){return _e(this.__data__,s)>-1}function Cs(s,c){var d=this.__data__,m=_e(d,s);return m<0?d.push([s,c]):d[m][1]=c,this}_t.prototype.clear=As,_t.prototype.delete=Ms,_t.prototype.get=$s,_t.prototype.has=_s,_t.prototype.set=Cs;function Ct(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function Ss(){this.__data__={hash:new qt,map:new(he||_t),string:new qt}}function Ls(s){return Ce(this,s).delete(s)}function Es(s){return Ce(this,s).get(s)}function Ds(s){return Ce(this,s).has(s)}function Rs(s,c){return Ce(this,s).set(s,c),this}Ct.prototype.clear=Ss,Ct.prototype.delete=Ls,Ct.prototype.get=Es,Ct.prototype.has=Ds,Ct.prototype.set=Rs;function $e(s){var c=-1,d=s?s.length:0;for(this.__data__=new Ct;++c<d;)this.add(s[c])}function Ps(s){return this.__data__.set(s,i),this}function Ts(s){return this.__data__.has(s)}$e.prototype.add=$e.prototype.push=Ps,$e.prototype.has=Ts;function St(s){this.__data__=new _t(s)}function ks(){this.__data__=new _t}function Bs(s){return this.__data__.delete(s)}function Os(s){return this.__data__.get(s)}function js(s){return this.__data__.has(s)}function Ns(s,c){var d=this.__data__;if(d instanceof _t){var m=d.__data__;if(!he||m.length<n-1)return m.push([s,c]),this;d=this.__data__=new Ct(m)}return d.set(s,c),this}St.prototype.clear=ks,St.prototype.delete=Bs,St.prototype.get=Os,St.prototype.has=js,St.prototype.set=Ns;function Hs(s,c){var d=Lt(s)||wn(s)?ts(s.length,String):[],m=d.length,_=!!m;for(var A in s)$t.call(s,A)&&!(_&&(A=="length"||mr(A,m)))&&d.push(A);return d}function _e(s,c){for(var d=s.length;d--;)if(wr(s[d][0],c))return d;return-1}var Is=ro(Ws);function Fs(s,c,d,m,_){var A=-1,P=s.length;for(d||(d=co),_||(_=[]);++A<P;){var K=s[A];d(K)?Ji(_,K):_[_.length]=K}return _}var qs=io();function Ws(s,c){return s&&qs(s,c,Pe)}function pr(s,c){c=Se(c,s)?[c]:gr(c);for(var d=0,m=c.length;s!=null&&d<m;)s=s[Le(c[d++])];return d&&d==m?s:void 0}function Us(s){return Qt.call(s)}function zs(s,c){return s!=null&&c in Object(s)}function bn(s,c,d,m,_){return s===c?!0:s==null||c==null||!De(s)&&!Re(c)?s!==s&&c!==c:Gs(s,c,bn,d,m,_)}function Gs(s,c,d,m,_,A){var P=Lt(s),K=Lt(c),V=u,tt=u;P||(V=Bt(s),V=V==f?E:V),K||(tt=Bt(c),tt=tt==f?E:tt);var ot=V==E&&!fn(s),at=tt==E&&!fn(c),nt=V==tt;if(nt&&!ot)return A||(A=new St),P||bo(s)?yr(s,c,d,m,_,A):so(s,c,V,d,m,_,A);if(!(_&a)){var ft=ot&&$t.call(s,"__wrapped__"),ht=at&&$t.call(c,"__wrapped__");if(ft||ht){var Ot=ft?s.value():s,Et=ht?c.value():c;return A||(A=new St),d(Ot,Et,m,_,A)}}return nt?(A||(A=new St),oo(s,c,d,m,_,A)):!1}function Ks(s,c,d,m){var _=d.length,A=_;if(s==null)return!A;for(s=Object(s);_--;){var P=d[_];if(P[2]?P[1]!==s[P[0]]:!(P[0]in s))return!1}for(;++_<A;){P=d[_];var K=P[0],V=s[K],tt=P[1];if(P[2]){if(V===void 0&&!(K in s))return!1}else{var ot=new St,at;if(!(at===void 0?bn(tt,V,m,o|a,ot):at))return!1}}return!0}function Vs(s){if(!De(s)||fo(s))return!1;var c=xr(s)||fn(s)?ls:st;return c.test(Wt(s))}function Ys(s){return Re(s)&&xn(s.length)&&!!O[Qt.call(s)]}function Xs(s){return typeof s=="function"?s:s==null?Ao:typeof s=="object"?Lt(s)?to(s[0],s[1]):Qs(s):Mo(s)}function Js(s){if(!ho(s))return fs(s);var c=[];for(var d in Object(s))$t.call(s,d)&&d!="constructor"&&c.push(d);return c}function Zs(s,c){var d=-1,m=Ee(s)?Array(s.length):[];return Is(s,function(_,A,P){m[++d]=c(_,A,P)}),m}function Qs(s){var c=ao(s);return c.length==1&&c[0][2]?vr(c[0][0],c[0][1]):function(d){return d===s||Ks(d,s,c)}}function to(s,c){return Se(s)&&br(c)?vr(Le(s),c):function(d){var m=wo(d,s);return m===void 0&&m===c?xo(d,s):bn(c,m,void 0,o|a)}}function eo(s){return function(c){return pr(c,s)}}function no(s){if(typeof s=="string")return s;if(An(s))return dr?dr.call(s):"";var c=s+"";return c=="0"&&1/s==-1/0?"-0":c}function gr(s){return Lt(s)?s:po(s)}function ro(s,c){return function(d,m){if(d==null)return d;if(!Ee(d))return s(d,m);for(var _=d.length,A=-1,P=Object(d);++A<_&&m(P[A],A,P)!==!1;);return d}}function io(s){return function(c,d,m){for(var _=-1,A=Object(c),P=m(c),K=P.length;K--;){var V=P[++_];if(d(A[V],V,A)===!1)break}return c}}function yr(s,c,d,m,_,A){var P=_&a,K=s.length,V=c.length;if(K!=V&&!(P&&V>K))return!1;var tt=A.get(s);if(tt&&A.get(c))return tt==c;var ot=-1,at=!0,nt=_&o?new $e:void 0;for(A.set(s,c),A.set(c,s);++ot<K;){var ft=s[ot],ht=c[ot];if(m)var Ot=P?m(ht,ft,ot,c,s,A):m(ft,ht,ot,s,c,A);if(Ot!==void 0){if(Ot)continue;at=!1;break}if(nt){if(!Zi(c,function(Et,Ut){if(!nt.has(Ut)&&(ft===Et||d(ft,Et,m,_,A)))return nt.add(Ut)})){at=!1;break}}else if(!(ft===ht||d(ft,ht,m,_,A))){at=!1;break}}return A.delete(s),A.delete(c),at}function so(s,c,d,m,_,A,P){switch(d){case X:if(s.byteLength!=c.byteLength||s.byteOffset!=c.byteOffset)return!1;s=s.buffer,c=c.buffer;case et:return!(s.byteLength!=c.byteLength||!m(new fr(s),new fr(c)));case h:case p:case T:return wr(+s,+c);case y:return s.name==c.name&&s.message==c.message;case k:case I:return s==c+"";case M:var K=rs;case H:var V=A&a;if(K||(K=ss),s.size!=c.size&&!V)return!1;var tt=P.get(s);if(tt)return tt==c;A|=o,P.set(s,c);var ot=yr(K(s),K(c),m,_,A,P);return P.delete(s),ot;case Q:if(mn)return mn.call(s)==mn.call(c)}return!1}function oo(s,c,d,m,_,A){var P=_&a,K=Pe(s),V=K.length,tt=Pe(c),ot=tt.length;if(V!=ot&&!P)return!1;for(var at=V;at--;){var nt=K[at];if(!(P?nt in c:$t.call(c,nt)))return!1}var ft=A.get(s);if(ft&&A.get(c))return ft==c;var ht=!0;A.set(s,c),A.set(c,s);for(var Ot=P;++at<V;){nt=K[at];var Et=s[nt],Ut=c[nt];if(m)var Ar=P?m(Ut,Et,nt,c,s,A):m(Et,Ut,nt,s,c,A);if(!(Ar===void 0?Et===Ut||d(Et,Ut,m,_,A):Ar)){ht=!1;break}Ot||(Ot=nt=="constructor")}if(ht&&!Ot){var Te=s.constructor,ke=c.constructor;Te!=ke&&"constructor"in s&&"constructor"in c&&!(typeof Te=="function"&&Te instanceof Te&&typeof ke=="function"&&ke instanceof ke)&&(ht=!1)}return A.delete(s),A.delete(c),ht}function Ce(s,c){var d=s.__data__;return uo(c)?d[typeof c=="string"?"string":"hash"]:d.map}function ao(s){for(var c=Pe(s),d=c.length;d--;){var m=c[d],_=s[m];c[d]=[m,_,br(_)]}return c}function te(s,c){var d=ns(s,c);return Vs(d)?d:void 0}var Bt=Us;(dn&&Bt(new dn(new ArrayBuffer(1)))!=X||he&&Bt(new he)!=M||pn&&Bt(pn.resolve())!=N||gn&&Bt(new gn)!=H||yn&&Bt(new yn)!=W)&&(Bt=function(s){var c=Qt.call(s),d=c==E?s.constructor:void 0,m=d?Wt(d):void 0;if(m)switch(m){case hs:return X;case ds:return M;case ps:return N;case gs:return H;case ys:return W}return c});function lo(s,c,d){c=Se(c,s)?[c]:gr(c);for(var m,_=-1,P=c.length;++_<P;){var A=Le(c[_]);if(!(m=s!=null&&d(s,A)))break;s=s[A]}if(m)return m;var P=s?s.length:0;return!!P&&xn(P)&&mr(A,P)&&(Lt(s)||wn(s))}function co(s){return Lt(s)||wn(s)||!!(hr&&s&&s[hr])}function mr(s,c){return c=c??l,!!c&&(typeof s=="number"||Pt.test(s))&&s>-1&&s%1==0&&s<c}function Se(s,c){if(Lt(s))return!1;var d=typeof s;return d=="number"||d=="symbol"||d=="boolean"||s==null||An(s)?!0:R.test(s)||!D.test(s)||c!=null&&s in Object(c)}function uo(s){var c=typeof s;return c=="string"||c=="number"||c=="symbol"||c=="boolean"?s!=="__proto__":s===null}function fo(s){return!!cr&&cr in s}function ho(s){var c=s&&s.constructor,d=typeof c=="function"&&c.prototype||xe;return s===d}function br(s){return s===s&&!De(s)}function vr(s,c){return function(d){return d==null?!1:d[s]===c&&(c!==void 0||s in Object(d))}}var po=vn(function(s){s=vo(s);var c=[];return F.test(s)&&c.push(""),s.replace(z,function(d,m,_,A){c.push(_?A.replace(J,"$1"):m||d)}),c});function Le(s){if(typeof s=="string"||An(s))return s;var c=s+"";return c=="0"&&1/s==-1/0?"-0":c}function Wt(s){if(s!=null){try{return ur.call(s)}catch{}try{return s+""}catch{}}return""}function go(s,c){return Fs(yo(s,c))}function yo(s,c){var d=Lt(s)?Xi:Zs;return d(s,Xs(c))}function vn(s,c){if(typeof s!="function"||c&&typeof c!="function")throw new TypeError(r);var d=function(){var m=arguments,_=c?c.apply(this,m):m[0],A=d.cache;if(A.has(_))return A.get(_);var P=s.apply(this,m);return d.cache=A.set(_,P),P};return d.cache=new(vn.Cache||Ct),d}vn.Cache=Ct;function wr(s,c){return s===c||s!==s&&c!==c}function wn(s){return mo(s)&&$t.call(s,"callee")&&(!cs.call(s,"callee")||Qt.call(s)==f)}var Lt=Array.isArray;function Ee(s){return s!=null&&xn(s.length)&&!xr(s)}function mo(s){return Re(s)&&Ee(s)}function xr(s){var c=De(s)?Qt.call(s):"";return c==g||c==b}function xn(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=l}function De(s){var c=typeof s;return!!s&&(c=="object"||c=="function")}function Re(s){return!!s&&typeof s=="object"}function An(s){return typeof s=="symbol"||Re(s)&&Qt.call(s)==Q}var bo=lr?es(lr):Ys;function vo(s){return s==null?"":no(s)}function wo(s,c,d){var m=s==null?void 0:pr(s,c);return m===void 0?d:m}function xo(s,c){return s!=null&&lo(s,c,zs)}function Pe(s){return Ee(s)?Hs(s):Js(s)}function Ao(s){return s}function Mo(s){return Se(s)?Qi(Le(s)):eo(s)}t.exports=go})(Xe,Xe.exports);var wu=Xe.exports;const Ki=Vn(wu);function xu(t,e,n){let r=[];t.filterProperties.length&&t.filterProperties.forEach(o=>{const a={},l=u=>o.format==="date"?ye(u).unix():parseFloat(u);e.forEach(u=>{var h,p;if(o.type==="range"){const y=Gt(o.key,u);if(Array.isArray(y)){const g=[l(y[0]),l(y[1])];a.min=a.min!==void 0?Math.min(a.min,g[0]):g[0],a.max=a.max!==void 0?Math.max(a.max,g[1]):g[1]}else{const g=l(y);a.min=a.min!==void 0?Math.min(a.min,g):g,a.max=a.max!==void 0?Math.max(a.max,g):g}return}Array.isArray(u[o.key])?u[o.key].forEach(y=>{a[y]=void 0}):o.type==="spatial"?(a.geometry=((h=o==null?void 0:o.state)==null?void 0:h.geometry)||void 0,a.geometry&&(o.stringifiedState=a.geometry.type),a.mode=o.mode||"intersects"):(p=o.key)!=null&&p.includes(".")?Gi(Ki(n.items,o.key)).filter(y=>y).forEach(y=>{a[y]=void 0}):a[u[o.key]]=void 0});const f=o.key||o.keys.join("|");n.filters[f]=Object.assign({type:o.type||"multiselect",dirty:o.state?Object.values(o.state).some(u=>u):void 0,key:f},o.type==="range"?{min:a.min,max:a.max,format:o.format}:{},o),n.filters[f].state=Object.assign({},a,o.state)}),t.matchAllWhenEmpty!==!1&&(n.results=n.sortResults(e),n.requestUpdate()),t.aggregateResults&&(r=Array.from(new Set(e.reduce((o,a)=>o.concat(a[t.aggregateResults]),[]))).sort((o,a)=>o.localeCompare(a)));const i=[];return Object.values(n.filters).forEach(o=>{o.type==="text"?o.keys.forEach(a=>{i.includes(a)||i.push(a)}):(o.type==="select"||o.type==="multiselect")&&(i.includes(o.key)||i.push(o.key))}),Wl(e,Object.assign({keys:i},t.fuseConfig)),r}async function Au(t,e,n){let r;n.externalFilter?r=await Kl(e,n.filters,t):r=await Ul(e,n.filters,t),n.results=n.sortResults(r)}function Mu(t,e,n){const r=`filter-${t.key}`.replace("|","-");switch(t.type){case"text":return S`<eox-itemfilter-text
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
      ></eox-itemfilter-text>`;case"multiselect":case"select":return S`
        <eox-itemfilter-select
          .inlineMode=${n.inlineMode||!1}
          data-type="filter"
          id="${r}"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          .suggestions="${Gi(Ki(n.items,t.key)).filter(i=>i)}"
          type="${t.type}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-select>
      `;case"range":return S`
        <eox-itemfilter-range
          id="${r}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-range>
      `;case"spatial":return S`
        <eox-itemfilter-spatial
          id="${r}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          @filter=${()=>n.search()}
        ></eox-itemfilter-spatial>
      `;default:return S``}}function $u(t,e){return[...t].sort((n,r)=>n[e.titleProperty].localeCompare(r[e.titleProperty]))}function _u(t,e,n){return S`
    ${Z(t.dirty,()=>S`
        <button
          type="button"
          tabindex=${e}
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
                <div class="tooltip left">Reset filter</div>
              `}
        </button>
      `)}
  `}function Cu(t){t.renderRoot.querySelectorAll("[data-type='filter']").forEach(e=>{typeof e.reset=="function"&&e.reset()}),t.search()}var ve,ie,dt,ae,Vi,Yi;class Su extends xt{constructor(){super();it(this,ae);it(this,ve,[]);it(this,ie,[]);it(this,dt,$c);this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=nn(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.enableResultAction=!1,this.resultActionIcon='<svg style="width: 24px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>click me!</title><path fill="currentColor" d="M11.5,11L17.88,16.37L17,16.55L16.36,16.67C15.73,16.8 15.37,17.5 15.65,18.07L15.92,18.65L17.28,21.59L15.86,22.25L14.5,19.32L14.24,18.74C13.97,18.15 13.22,17.97 12.72,18.38L12.21,18.78L11.5,19.35V11M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10" /></svg>',this.styleOverride="",this.unstyled=!1}static get properties(){return{items:{attribute:!1,type:Object},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{attribute:!1,type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{attribute:!1,type:Array},fuseConfig:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},enableResultAction:{attribute:!1,type:Boolean},resultActionIcon:{attribute:!1,type:String},styleOverride:{type:String},unstyled:{type:Boolean}}}apply(){Be(this,ve,xu(rt(this,dt),rt(this,ie),this)),this.search()}async searchHandler(){await Au(rt(this,dt),rt(this,ie),this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(n){return $u(n,rt(this,dt))}resetFilters(){Cu(this)}firstUpdated(n){var i;let r={};Fr.map(o=>{r={...r,[o]:this[o]}}),Be(this,dt,r),Be(this,ie,((i=this.items)==null?void 0:i.map((o,a)=>Object.assign({id:o[this.idProperty]||`item-${a}`},o)))||[]),this.apply()}updated(n){Fr.map(r=>n.has(r)?(this.firstUpdated(void 0),!0):!1)}updateResult(n){this.selectedResult=n.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}emitResultAction(n){this.dispatchEvent(new CustomEvent("click:result-action",{detail:n.detail,bubbles:!0,composed:!0}))}render(){var n;return S`
      <style>
        ${To}
        ${!this.unstyled&&Yn}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":jt}
        @submit="${r=>r.preventDefault()}"
      >
        ${Z(this.filterProperties,()=>S`
            <div style="display: var(--filter-display);">
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
                  ${Z(!this.inlineMode,()=>S`
                      <nav class="title-nav">
                        <div class="max">
                          <slot name="filterstitle"
                            ><p><strong>Filters</strong></p></slot
                          >
                        </div>
                        ${Z(!this.inlineMode&&rt(this,dt).filterProperties&&!this.inlineMode&&rt(this,dt).filterProperties&&Nn(this.filters),()=>S`
                            <button
                              type="button"
                              id="filter-reset"
                              class="reset-icon border small"
                              data-cy="filter-reset"
                              @click=${()=>this.resetFilters()}
                            >
                              ${this.unstyled?jt:S`
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
                  <div class="scroll" style="flex: 1;">
                    <ul id="filters" class="list no-space">
                      ${en(Object.values(this.filters),(r,i)=>S` <li class="no-padding">
                            <eox-itemfilter-expandcontainer
                              .filterObject=${r}
                              @details-toggled=${o=>xi(o,rt(this,dt),this)}
                              data-details="${r.key}"
                            >
                              ${j(this,ae,Yi).call(this,r,Nr(i,1))}
                              ${j(this,ae,Vi).call(this,r,Nr(i,2))}
                            </eox-itemfilter-expandcontainer>
                          </li>`)}
                    </ul>
                  </div>
                </section>
              </eox-itemfilter-container>
            </div>
          `)}
        ${Z(((n=rt(this,dt))==null?void 0:n.showResults)&&this.results,()=>S`
            <div class="small-space"></div>
            <eox-itemfilter-results
              .config=${rt(this,dt)}
              .results=${this.results}
              .filters=${this.filters}
              .resultAggregation=${rt(this,ve)}
              .selectedResult=${this.selectedResult}
              .resultType=${this.resultType}
              .enableResultAction=${this.enableResultAction}
              .resultActionIcon=${this.resultActionIcon}
              @result=${this.updateResult}
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
    `}}ve=new WeakMap,ie=new WeakMap,dt=new WeakMap,ae=new WeakSet,Vi=function(n,r){return Mu(n,r,this)},Yi=function(n,r){return _u(n,r,this)};customElements.define("eox-itemfilter",Su);export{Su as EOxItemFilter};
