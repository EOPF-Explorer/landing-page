const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/main.C2xKlHXZ.js","assets/chunks/lit-element.CBn2YVps.js","assets/chunks/when.BR7zwNJC.js","assets/chunks/map.B6QQHL2e.js","assets/chunks/addCommonStyleSheet.Ct85SDKw.js","assets/chunks/XYZ.BdTVY-yK.js","assets/chunks/proj.Cao7xDc0.js","assets/chunks/commonjsHelpers.BosuxZz1.js","assets/chunks/index.BUIxO2d3.js","assets/chunks/getElement.COiK8z0h.js","assets/chunks/main.D62g98cC.js","assets/chunks/browser.DlCpMekl.js","assets/chunks/toolcool-range-slider.min.BBXDELo7.js","assets/chunks/utils.BJtOAKhC.js","assets/chunks/index.CxojoGlr.js","assets/chunks/index.BIJR-IiI.js"])))=>i.map(i=>d[i]);
var ot=Object.defineProperty;var lt=(t,e,i)=>e in t?ot(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var v=(t,e,i)=>lt(t,typeof e!="symbol"?e+"":e,i);import{aD as U,a1 as M,o as T,c as j,K as ct,k as C,j as ht,t as dt,e as L,b as ut,h as q,p as pt}from"./framework.BuBi7-L5.js";import{_ as ft,aF as mt,T as gt,aK as bt,aJ as yt,aZ as H,a_ as W,bN as vt,bO as wt,bP as xt,bG as _t,bC as kt,bQ as Tt,ah as Ct,ag as Et}from"./eo-dash.CSjcXkzF.js";import St from"./EodashLayoutSwitcher-CYUfbn6k.Bn7KfLDu.js";import{e as At}from"./mdi.I3rz4PHh.js";import"./main.DYqMioFC.js";import{f as jt,u as Lt,E as Ft,b as E,w as _,i as Dt,a as Ot}from"./lit-element.CBn2YVps.js";import{s as $t,l as O,i as $,a as Vt,b as X,q as Rt,t as It,o as Bt,p as Pt,f as Nt}from"./sequential.BdGG0OD6.js";import{a as zt,i as Ut,t as Mt}from"./map.B6QQHL2e.js";import"./commonjsHelpers.BosuxZz1.js";import"./migrate.6EXgl2HJ.js";import"./main.C2xKlHXZ.js";import"./when.BR7zwNJC.js";import"./addCommonStyleSheet.Ct85SDKw.js";import"./XYZ.BdTVY-yK.js";import"./proj.Cao7xDc0.js";import"./index.BUIxO2d3.js";import"./getElement.COiK8z0h.js";import"./VTooltip-Bp5OQWRx.Om_1Snse.js";import"./forwardRefs-CiCrugIF.CnvdveYV.js";import"./transition-CalG0CWZ.pzXBC40S.js";import"./dayjs.min.lahZ2SOr.js";import"./toolcool-range-slider.min.BBXDELo7.js";import"./index.BIJR-IiI.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qt=t=>(e,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht={attribute:!0,type:String,converter:Lt,reflect:!1,hasChanged:jt},Wt=(t=Ht,e,i)=>{const{kind:r,metadata:s}=i;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),r==="setter"&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),r==="accessor"){const{name:a}=i;return{set(o){const l=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,l,t,!0,o)},init(o){return o!==void 0&&this.C(a,void 0,t,o),o}}}if(r==="setter"){const{name:a}=i;return function(o){const l=this[a];e.call(this,o),this.requestUpdate(a,l,t,!0,o)}}throw Error("Unsupported decorator location: "+r)};function m(t){return(e,i)=>typeof i=="object"?Wt(t,e,i):((r,s,n)=>{const a=s.hasOwnProperty(n);return s.constructor.createProperty(n,r),a?Object.getOwnPropertyDescriptor(s,n):void 0})(t,e,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gt=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Xt(t,e){return(i,r,s)=>{const n=a=>{var o;return((o=a.renderRoot)==null?void 0:o.querySelector(t))??null};return Gt(i,r,{get(){return n(this)}})}}class Jt{constructor(e){this.cle=e}setColorScale(){switch(this.cle.scaleType){case"continuous":this.setContinousColorScale();break;case"log10":this.setLogColorScale();break;case"discrete":this.setDiscreteColorScale();break;case"threshold":this.setThresholdColorScale();break;case"categorical":this.setCategoricalColorScale();break;default:this.invalidScaleType(this.cle.scaleType)}}setContinousColorScale(){const{interpolator:e,domain:i,range:r}=this.cle;this.colorScale=e?$t(e).domain(i):O().range(r).domain(i).interpolate($)}setLogColorScale(){const{interpolator:e,domain:i,range:r}=this.cle;this.colorScale=e?Vt(e).domain(i):X().range(r).domain(i).interpolate($)}setDiscreteColorScale(){this.colorScale=Rt().domain(this.cle.domain).range(this.cle.range)}setThresholdColorScale(){const e=this.cle.domain;this.colorScale=It().domain(e.slice(1,e.length-1)).range(this.cle.range)}setCategoricalColorScale(){this.colorScale=Bt().domain(this.cle.domain).range(this.cle.range)}invalidScaleType(e){throw new Error(`invalid property scaletype: ${e}.
      Must be one of "categorical", "continuous", "discrete", "threshold".`)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=zt(class extends Ut{constructor(t){var e;if(super(t),t.type!==Mt.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,s;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((r=this.nt)!=null&&r.has(n))&&this.st.add(n);return this.render(e)}const i=t.element.classList;for(const n of this.st)n in e||(i.remove(n),this.st.delete(n));for(const n in e){const a=!!e[n];a===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(a?(i.add(n),this.st.add(n)):(i.remove(n),this.st.delete(n)))}return Ft}});class Kt{constructor(e){this.cle=e}render(){const e=this.cle.titleText?E`<p class="legend-title">${this.cle.titleText}</p>`:"",i={hidden:this.cle.scaleType==="categorical"},r={hidden:this.cle.scaleType!=="categorical","categorical-container":!0};return E`<div
      class="cle-container"
      style="width:${this.cle.width}px; height:auto;"
    >
      ${e}
      <slot name="subtitle"></slot>
      <svg
        class=${F(i)}
        width=${this.cle.width}
        height=${this.cle.height}
      >
        <!-- discrete and threshold -->
        <g class="rects">${this.renderDiscreteThreshold()}</g>
        <!-- continuous -->
        ${this.renderContinuous()}
        <!-- axis ticks -->
        ${this.renderAxis()}
      </svg>
      <ul class=${F(r)}>
        ${this.renderCategorical()}
      </ul>
      <slot name="footer"></slot>
    </div>`}renderCategorical(){if(this.cle.scaleType!=="categorical")return"";const{markType:e,colorScale:i,domain:r}=this.cle,s={"legend-item":!0,line:e==="line",circle:e==="circle"};return E`${r.map(n=>E`<li
          class=${F(s)}
          style="--color:${i(n)}"
        >
          ${n}
        </li>`)}`}renderContinuous(){var c;if(this.cle.scaleType!=="continuous"&&this.cle.scaleType!=="log10"||this.cle.colorScale===null)return"";const{colorScale:e,marginTop:i,marginLeft:r,marginRight:s,tickSize:n,width:a,range:o}=this.cle,l=this.cle.marginBottom+n,h=this.cle.height+n,d=((c=e.interpolator)==null?void 0:c.call(e))||Pt($,o);return _`<image
      x=${r}
      y=${i}
      width=${a-s-r}
      height=${h-i-l}
      preserveAspectRatio="none"
      href=${this.getColorRamp(d).toDataURL()}
    ></image>`}renderDiscreteThreshold(){if(this.cle.scaleType!=="discrete"&&this.cle.scaleType!=="threshold")return"";const{tickSize:e,marginTop:i,marginLeft:r,colorScale:s,xScale:n}=this.cle,a=this.cle.height+e,o=this.cle.marginBottom+e,l=s.range(),h=c=>s.invertExtent(c).map(n)[0]||r,d=c=>{let[f,y]=s.invertExtent(c).map(n);return f=f||0,y=y||n.range()[1],y-f};return _`${l.map(c=>_`<rect x=${h(c)} y=${i} width=${d(c)} height=${a-i-o} fill=${c}></rect>`)}`}renderAxis(){if(!this.cle.xScale||this.cle.scaleType==="categorical")return"";const{ticks:e,tickSize:i,tickFormat:r,tickFormatter:s,tickValues:n,xScale:a,marginTop:o}=this.cle,l=this.cle.height+i,h=this.cle.marginBottom+i,d=n!=null&&n.length?n:a.ticks.apply(a,[e,r]),c=Math.max(i,0)+3,f=()=>d.map(y=>_`<g class="tick" transform='translate(${a(y)},0)'>
      <line stroke="currentColor" y2="${i}" y1="${o+h-l}"></line>
      <text fill="currentColor" y="${c}" dy="0.71em">${s(y)}</text>
      </g>`);return _`<g
      class="x-axis"
      transform="translate(0, ${l-h})"
      text-anchor="middle"
    >${f()}</g>`}getColorRamp(e,i=256){const r=document.createElement("canvas");r.setAttribute("height","1"),r.setAttribute("width",`${i}`);const s=r.getContext("2d");for(let n=0;n<i;n++)s.fillStyle=e(n/(i-1)),s.fillRect(n,0,1,1);return r}}const Zt=325,Yt=32,Qt=6,te=12,ee=16,ie=12,V=5,se=6,J=".1f",re=[0,1],ne=["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],ae="Color Legend Element",oe="circle",le="continuous",ce=["domain","range","interpolator","scaleType"],he=["scaleType","ticks","tickSize","tickValues","tickFormat","tickFormatter","domain","range","marginLeft","marginRight","marginBottom","marginTop","width","height"];class de{constructor(e){this.cle=e}setXScale(){const{scaleType:e,marginLeft:i,width:r,marginRight:s}=this.cle;switch(e){case"continuous":this.xScale=O().domain(this.cle.domain).range([i,r-s]);break;case"log10":this.xScale=X().domain(this.cle.domain).range([i,r-s]).nice();break;case"discrete":case"threshold":this.xScale=O().domain([this.cle.domain[0],this.cle.domain[this.cle.domain.length-1]]).rangeRound([i,r-s]);break;case"categorical":this.xScale=null;break;default:throw new Error(`Unrecognized scaleType: ${e}`)}}handleAxisTicks(){var e,i,r;if(this.cle.scaleType==="log10"&&!this.cle.tickValues)this.cle.tickValues=this.xScale.ticks(this.cle.ticks||V);else if((this.cle.scaleType==="discrete"||this.cle.scaleType==="threshold")&&!this.cle.tickValues){const[s,n]=this.xScale.domain();this.cle.tickValues=[s,...((i=(e=this.cle.colorScale)==null?void 0:e.thresholds)==null?void 0:i.call(e))||this.cle.colorScale.domain(),n]}typeof this.cle.tickFormatter!="function"&&((r=this.cle.tickFormat)!=null&&r.length&&this.cle.scaleType!=="log10"?this.cle.tickFormatter=Nt(this.cle.tickFormat):this.cle.tickFormatter=this.xScale.tickFormat(this.cle.ticks||V,this.cle.tickFormat||J))}}const ue=Dt`
  :host {
    --cle-font-family: sans-serif;
    --cle-font-family-title: var(--cle-font-family);
    --cle-font-size: 0.75rem;
    --cle-font-size-title: 0.875rem;
    --cle-letter-spacing: 0.3px;
    --cle-letter-spacing-title: 0.25px;
    --cle-font-weight: 400;
    --cle-font-weight-title: 500;
    --cle-color: currentColor;
    --cle-background: #fff;
    --cle-padding: 0.375rem;
    --cle-border: none;
    --cle-border-radius: 0;
    --cle-box-sizing: content-box;
    --cle-columns: 2;
    --cle-column-width: auto;
    --cle-item-margin: 0.375rem 0.75rem 0 0;
    --cle-line-width: 24px;
    --cle-line-height: 2px;
    --cle-swatch-size: 10px;
    --cle-swatch-width: var(--cle-swatch-size);
    --cle-swatch-height: var(--cle-swatch-size);
    --cle-swatch-margin: 0 0.5rem 0 0;
  }

  :host([hidden]),
  .hidden {
    display: none !important;
  }

  div.cle-container {
    font-family: var(--cle-font-family);
    font-size: var(--cle-font-size);
    font-weight: var(--cle-font-weight);
    letter-spacing: var(--cle-letter-spacing);
    color: var(--cle-color);
    background: var(--cle-background);
    display: inline-block;
    padding: var(--cle-padding);
    border: var(--cle-border);
    border-radius: var(--cle-border-radius);
    box-sizing: var(--cle-box-sizing);
  }

  svg {
    display: block;
    overflow: visible;
  }

  svg text {
    font-family: var(--cle-font-family);
    font-size: var(--cle-font-size);
    fill: var(--cle-color);
  }

  p.legend-title {
    margin: 0;
    font-family: var(--cle-font-family-title);
    font-size: var(--cle-font-size-title);
    font-weight: var(--cle-font-weight-title);
    letter-spacing: var(--cle-letter-spacing-title);
  }

  ul.categorical-container {
    padding: 0;
    margin: 0;
    column-count: var(--cle-columns);
    column-width: var(--cle-column-width);
  }

  .legend-item {
    display: inline-flex;
    align-items: center;
    margin: var(--cle-item-margin);
  }

  .legend-item::before {
    content: "";
    width: var(--cle-swatch-width);
    height: var(--cle-swatch-height);
    margin: var(--cle-swatch-margin);
    background: var(--color);
  }

  .legend-item.line::before {
    width: var(--cle-line-width);
    height: var(--cle-line-height);
  }

  .legend-item.circle::before {
    border-radius: 50%;
  }
`;var p=function(t,e,i,r){var s=arguments.length,n=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(n=(s<3?a(n):s>3?a(e,i,n):a(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n};let u=class extends Ot{constructor(){super(...arguments),this.titleText=ae,this.width=Zt,this.height=Yt,this.marginTop=Qt,this.marginRight=te,this.marginBottom=ee,this.marginLeft=ie,this.scaleType=le,this.domain=re,this.range=ne,this.markType=oe,this.ticks=V,this.tickFormat=J,this.tickSize=se,this.colorScaleSetter=new Jt(this),this.axisTickSetter=new de(this),this.renderer=new Kt(this)}get interpolator(){return this._interpolator}set interpolator(e){if(typeof e=="function"){const i=this.interpolator;this._interpolator=e,this.requestUpdate("interpolator",i)}else throw new Error("interpolator must be a function.")}get tickFormatter(){return this._tickFormatter}set tickFormatter(e){if(typeof e=="function"){const i=this.tickFormatter;this._tickFormatter=e,this.requestUpdate("tickFormatter",i)}else throw new Error("tickFormatter must be a function.")}get colorScale(){return this.colorScaleSetter.colorScale}get xScale(){return this.axisTickSetter.xScale}render(){return this.renderer.render()}willUpdate(e){ce.some(i=>e.has(i))&&this.colorScaleSetter.setColorScale(),he.some(i=>e.has(i))&&(this.axisTickSetter.setXScale(),this.axisTickSetter.handleAxisTicks())}};u.styles=[ue];p([m({type:String})],u.prototype,"titleText",void 0);p([m({type:Number})],u.prototype,"width",void 0);p([m({type:Number})],u.prototype,"height",void 0);p([m({type:Number})],u.prototype,"marginTop",void 0);p([m({type:Number})],u.prototype,"marginRight",void 0);p([m({type:Number})],u.prototype,"marginBottom",void 0);p([m({type:Number})],u.prototype,"marginLeft",void 0);p([m({type:String})],u.prototype,"scaleType",void 0);p([m({type:Array})],u.prototype,"domain",void 0);p([m({type:Array})],u.prototype,"range",void 0);p([m({type:String})],u.prototype,"markType",void 0);p([m({type:Number})],u.prototype,"ticks",void 0);p([m({type:String})],u.prototype,"tickFormat",void 0);p([m({type:Number})],u.prototype,"tickSize",void 0);p([m({type:Array})],u.prototype,"tickValues",void 0);p([Xt("svg")],u.prototype,"svg",void 0);p([m({attribute:!1})],u.prototype,"interpolator",null);p([m({attribute:!1})],u.prototype,"tickFormatter",null);u=p([qt("color-legend")],u);function K(t){return!(t===null||typeof t!="object"||t.nodeType||t===t.window||t.constructor&&!k(t.constructor.prototype,"isPrototypeOf"))}function Z(t){return K(t)?S({},t):Array.isArray(t)?t.map(Z):t}function S(t,...e){return e.forEach(i=>{i&&Object.keys(i).forEach(r=>{i[r]&&K(i[r])?(k(t,r)||(t[r]={}),S(t[r],i[r])):Array.isArray(i[r])?t[r]=Z(i[r]):t[r]=i[r]})}),t}function k(t,e){return t&&Object.prototype.hasOwnProperty.call(t,e)}var pe=class{constructor(t,e){this.defaults=e,this.jsoneditor=t.jsoneditor,this.theme=this.jsoneditor.theme,this.template_engine=this.jsoneditor.template,this.iconlib=this.jsoneditor.iconlib,this.translate=this.jsoneditor.translate||this.defaults.translate,this.translateProperty=this.jsoneditor.translateProperty||this.defaults.translateProperty,this.original_schema=t.schema,this.schema=this.jsoneditor.expandSchema(this.original_schema),this.active=!0,this.isUiOnly=!1,this.options=S({},this.options||{},this.schema.options||{},t.schema.options||{},t),this.enforceConstEnabled=this.options.enforce_const??this.jsoneditor.options.enforce_const,this.formname=this.jsoneditor.options.form_name_root||"root",!t.path&&!this.schema.id&&(this.schema.id=this.formname),this.path=t.path||this.formname,this.formname=t.formname||this.path.replace(/\.([^.]+)/g,"[$1]"),this.parent=t.parent,this.key=this.parent!==void 0?this.path.split(".").slice(this.parent.path.split(".").length).join("."):this.path,this.link_watchers=[],this.watchLoop=!1,this.optInWidget=this.options.opt_in_widget??this.jsoneditor.options.opt_in_widget,t.container&&this.setContainer(t.container),this.registerDependencies()}onChildEditorChange(t,e){this.onChange(!0,!1,e)}notify(){this.path&&this.jsoneditor.notifyWatchers(this.path)}change(t){this.parent?this.parent.onChildEditorChange(this,t):this.jsoneditor&&this.jsoneditor.onChange(t)}onChange(t,e,i){this.notify(),e||this.watch_listener&&this.watch_listener(),t&&this.change(i)}register(){if(this.jsoneditor.registerEditor(this),this.input&&!this.label){const t=this.getTitle()||this.formname;this.input.setAttribute("aria-label",t)}this.onChange()}unregister(){this.jsoneditor&&this.jsoneditor.unregisterEditor(this)}getNumColumns(){return 12}isActive(){return this.active}activate(){this.active=!0,this.optInCheckbox.checked=!0,this.enable(),this.change()}deactivate(){this.isRequired()||(this.active=!1,this.optInCheckbox.checked=!1,this.disable(),this.change())}registerDependencies(){this.dependenciesFulfilled=!0;const t=this.options.dependencies;t&&Object.keys(t).forEach(e=>{let i;e.startsWith(this.jsoneditor.root.path)?i=e:(i=this.path.split("."),i[i.length-1]=e,i=i.join(".")),this.jsoneditor.watch(i,()=>{this.evaluateDependencies()})})}evaluateDependencies(){const t=this.container||this.control;if(!t||this.jsoneditor===null)return;const e=this.options.dependencies;if(!e)return;const i=this.dependenciesFulfilled;this.dependenciesFulfilled=!0,Object.keys(e).forEach(s=>{let n;s.startsWith(this.jsoneditor.root.path)?n=s:(n=this.path.split("."),n[n.length-1]=s,n=n.join("."));const a=e[s];this.checkDependency(n,a)}),this.dependenciesFulfilled!==i&&this.notify();let r=this.dependenciesFulfilled?"block":"none";this.options.hidden&&(r="none"),t.tagName==="TD"?Object.keys(t.childNodes).forEach(s=>t.childNodes[s].style.display=r):t.style.display=r}checkDependency(t,e){if(this.path===t||this.jsoneditor===null)return;const i=this.jsoneditor.getEditor(t),r=i?i.getValue():void 0;!i||!i.dependenciesFulfilled||r===void 0||r===null?this.dependenciesFulfilled=!1:Array.isArray(e)?this.dependenciesFulfilled=e.some(s=>{if(JSON.stringify(r)===JSON.stringify(s))return!0}):typeof e=="object"?typeof r!="object"?this.dependenciesFulfilled=e===r:Object.keys(e).some(s=>{if(!k(e,s))return!1;if(!k(r,s)||e[s]!==r[s])return this.dependenciesFulfilled=!1,!0}):typeof e=="string"||typeof e=="number"?this.dependenciesFulfilled=this.dependenciesFulfilled&&r===e:typeof e=="boolean"&&(e?this.dependenciesFulfilled=this.dependenciesFulfilled&&(r||r.length>0):this.dependenciesFulfilled=this.dependenciesFulfilled&&(!r||r.length===0))}setContainer(t){this.container=t,this.setContainerAttributes(),this.schema.id&&this.container.setAttribute("data-schemaid",this.schema.id),this.schema.type&&typeof this.schema.type=="string"&&this.container.setAttribute("data-schematype",this.schema.type),this.container.setAttribute("data-schemapath",this.path)}setOptInCheckbox(){let t;this.optInWidget==="switch"?t=this.theme.getOptInSwitch(this.formname):t=this.theme.getOptInCheckbox(this.formname),this.optInCheckbox=t.checkbox,this.optInContainer=t.container,this.optInCheckbox.addEventListener("click",()=>{this.isActive()?this.deactivate():this.activate()});const e=this.jsoneditor.options.show_opt_in,i=typeof this.parent.options.show_opt_in<"u",r=i&&this.parent.options.show_opt_in===!0,s=i&&this.parent.options.show_opt_in===!1;(r||!s&&e||!i&&e)&&this.parent&&this.parent.schema.type==="object"&&!this.isRequired()&&this.header&&(this.header.insertBefore(this.optInContainer,this.header.firstChild),this.optInAppended=!0)}preBuild(){}build(){}postBuild(){this.setupWatchListeners(),this.addLinks(),this.register(),this.setValue(this.getDefault(),!0),this.updateHeaderText(),this.onWatchedFieldChange(),this.options.titleHidden&&(this.theme.visuallyHidden(this.label),this.theme.visuallyHidden(this.header)),this.enforceConstEnabled&&this.schema.const&&this.disable()}setupWatchListeners(){if(this.watched={},this.schema.vars&&(this.schema.watch=this.schema.vars),this.watched_values={},this.watch_listener=()=>{this.refreshWatchedFieldValues()&&this.onWatchedFieldChange()},k(this.schema,"watch")){let t,e,i,r,s;const n=this.container.getAttribute("data-schemapath");Object.keys(this.schema.watch).forEach(a=>{if(t=this.schema.watch[a],Array.isArray(t)){if(t.length<2)return;e=[t[0]].concat(t[1].split("."))}else e=t.split("."),this.theme.closest(this.container,`[data-schemaid="${e[0]}"]`)||e.unshift("#");if(i=e.shift(),i==="#"&&(i=this.jsoneditor.schema.id||this.jsoneditor.root.formname),r=this.theme.closest(this.container,`[data-schemaid="${i}"]`),!r)throw new Error(`Could not find ancestor node with id ${i}`);s=`${r.getAttribute("data-schemapath")}.${e.join(".")}`,n.startsWith(s)&&(this.watchLoop=!0),this.jsoneditor.watch(s,this.watch_listener),this.watched[a]=s})}this.schema.headerTemplate&&(this.header_template=this.jsoneditor.compileTemplate(this.schema.headerTemplate,this.template_engine))}addLinks(){if(!this.no_link_holder&&(this.link_holder=this.theme.getLinksHolder(),typeof this.description<"u"?this.description.parentNode.insertBefore(this.link_holder,this.description):this.container.appendChild(this.link_holder),this.schema.links))for(let t=0;t<this.schema.links.length;t++)this.addLink(this.getLink(this.schema.links[t]))}onMove(){}getButton(t,e,i,r=[]){const s=`json-editor-btn-${e}`;this.iconlib?e=this.iconlib.getIcon(e):e=null,t=this.translate(t,r),i=this.translate(i,r),!e&&i&&(t=i,i=null);const n=this.theme.getButton(t,e,i);return n.classList.add(s),n}setButtonText(t,e,i,r,s=[]){return this.iconlib?i=this.iconlib.getIcon(i):i=null,e=this.translate(e,s),r=this.translate(r,s),!i&&r&&(e=r,r=null),this.theme.setButtonText(t,e,i,r)}addLink(t){this.link_holder&&this.link_holder.appendChild(t)}getLink(t){let e,i;const r=(t.mediaType||"application/javascript").split("/")[0],s=this.jsoneditor.compileTemplate(t.href,this.template_engine),n=this.jsoneditor.compileTemplate(t.rel?t.rel:t.href,this.template_engine);let a=null;if(t.download&&(a=t.download),a&&a!==!0&&(a=this.jsoneditor.compileTemplate(a,this.template_engine)),r==="image"){e=this.theme.getBlockLinkHolder(),i=document.createElement("a"),i.setAttribute("target","_blank");const o=document.createElement("img");this.theme.createImageLink(e,i,o),this.link_watchers.push(l=>{const h=s(l),d=n(l);i.setAttribute("href",h),i.setAttribute("title",d||h),o.setAttribute("src",h)})}else if(["audio","video"].includes(r)){e=this.theme.getBlockLinkHolder(),i=this.theme.getBlockLink(),i.setAttribute("target","_blank");const o=document.createElement(r);o.setAttribute("controls","controls"),this.theme.createMediaLink(e,i,o),this.link_watchers.push(l=>{const h=s(l),d=n(l);i.setAttribute("href",h),i.textContent=d||h,o.setAttribute("src",h)})}else i=e=this.theme.getBlockLink(),e.setAttribute("target","_blank"),e.textContent=t.rel,e.style.display="none",this.link_watchers.push(o=>{const l=s(o),h=n(o);l&&(e.style.display=""),e.setAttribute("href",l),e.textContent=h||l});return a&&i&&(a===!0?i.setAttribute("download",""):this.link_watchers.push(o=>{i.setAttribute("download",a(o))})),t.class&&t.class.split(" ").forEach(o=>{i.classList.add(o)}),e}refreshWatchedFieldValues(){if(!this.watched_values)return;const t={};let e=!1;return this.watched&&Object.keys(this.watched).forEach(i=>{const r=this.jsoneditor.getEditor(this.watched[i]),s=r?r.getValue():null;this.watched_values[i]!==s&&(e=!0),t[i]=s}),t.self=this.getValue(),this.watched_values.self!==t.self&&(e=!0),this.watched_values=t,e}getWatchedFieldValues(){return this.watched_values}updateHeaderText(){if(this.header){const t=this.getHeaderText();if(this.header.children.length){for(let e=0;e<this.header.childNodes.length;e++)if(this.header.childNodes[e].nodeType===3){this.header.childNodes[e].nodeValue=this.cleanText(t);break}}else window.DOMPurify?this.header.innerHTML=window.DOMPurify.sanitize(t):this.header.textContent=this.cleanText(t)}}purify(t){return typeof t!="string"||(window.DOMPurify?t=window.DOMPurify.sanitize(t):t=this.cleanText(t)),t}getHeaderText(t){return this.header_text?this.header_text:t?this.translateProperty(this.schema.title):this.getTitle()}getPathDepth(){return this.path.split(".").length}cleanText(t){const e=document.createElement("div");return e.innerHTML=t,e.textContent||e.innerText}onWatchedFieldChange(){let t;if(this.header_template){t=S(this.getWatchedFieldValues(),{key:this.key,i:this.key,i0:this.key*1,i1:this.key*1+1,title:this.getTitle()}),this.editors&&Object.keys(this.editors).length&&(t.properties={},Object.keys(this.editors).forEach(i=>{const r=this.editors[i];if(r.schema&&r.schema.enum&&r.schema.options&&r.schema.options.enum_titles){const s=r.schema.enum.indexOf(r.value);t.properties[i]={enumTitle:r.options.enum_titles[s]}}}));const e=this.header_template(t);e!==this.header_text&&(this.header_text=e,this.updateHeaderText(),this.notify())}if(this.link_watchers.length){t=this.getWatchedFieldValues();for(let e=0;e<this.link_watchers.length;e++)this.link_watchers[e](t)}}setValue(t){t=this.applyConstFilter(t),this.value=t}applyConstFilter(t){return this.enforceConstEnabled&&typeof this.schema.const<"u"&&(t=this.schema.const),t}getValue(){if(this.dependenciesFulfilled)return this.value}refreshValue(){}getChildEditors(){return!1}destroy(){this.unregister(this),this.watched&&Object.values(this.watched).forEach(t=>this.jsoneditor.unwatch(t,this.watch_listener)),this.watched=null,this.watched_values=null,this.watch_listener=null,this.header_text=null,this.header_template=null,this.value=null,this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container),this.container=null,this.jsoneditor=null,this.schema=null,this.path=null,this.key=null,this.parent=null}isDefaultRequired(){return this.isRequired()||!!this.jsoneditor.options.use_default_values}getDefault(){if(this.enforceConstEnabled&&this.schema.const)return this.schema.const;if(typeof this.schema.default<"u")return this.schema.default;if(typeof this.schema.enum<"u")return this.schema.enum[0];let t=this.schema.type||this.schema.oneOf;if(t&&Array.isArray(t)&&(t=t[0]),t&&typeof t=="object"&&(t=t.type),t&&Array.isArray(t)&&(t=t[0]),typeof t=="string"){if(t==="number")return this.isDefaultRequired()?0:void 0;if(t==="boolean")return this.isDefaultRequired()?!1:void 0;if(t==="integer")return this.isDefaultRequired()?0:void 0;if(t==="string")return this.isDefaultRequired()?"":void 0;if(t==="null")return null;if(t==="object")return{};if(t==="array")return[]}}getTitle(){return this.translateProperty(this.schema.title||this.key||this.formname)}enable(){this.disabled=!1}disable(){this.disabled=!0}isEnabled(){return!this.disabled}isRequired(){return typeof this.schema.required=="boolean"?this.schema.required:this.parent&&this.parent.schema&&Array.isArray(this.parent.schema.required)?this.parent.schema.required.includes(this.key):!!this.jsoneditor.options.required_by_default}getDisplayText(t){const e=[],i={};t.forEach(s=>{s.title&&(i[s.title]=i[s.title]||0,i[s.title]++),s.description&&(i[s.description]=i[s.description]||0,i[s.description]++),s.format&&(i[s.format]=i[s.format]||0,i[s.format]++),s.type&&(i[s.type]=i[s.type]||0,i[s.type]++)}),t.forEach(s=>{let n;typeof s=="string"?n=s:s.title&&i[s.title]<=1?n=s.title:s.format&&i[s.format]<=1?n=s.format:s.type&&i[s.type]<=1?n=s.type:s.description&&i[s.description]<=1?n=s.description:s.title?n=s.title:s.format?n=s.format:s.type?n=s.type:s.description?n=s.description:JSON.stringify(s).length<500?n=JSON.stringify(s):n="type",e.push(n)});const r={};return e.forEach((s,n)=>{r[s]=r[s]||0,r[s]++,i[s]>1&&(e[n]=`${s} ${r[s]}`)}),e}getValidId(t){return t=t===void 0?"":t.toString(),t.replace(/\s+/g,"-")}setInputAttributes(t,e){if(this.schema.options&&this.schema.options.inputAttributes){const i=this.schema.options.inputAttributes,r=["name","type"].concat(t),s=e||this.input;Object.keys(i).forEach(n=>{r.includes(n.toLowerCase())||s.setAttribute(n,i[n])})}}setContainerAttributes(){if(this.schema.options&&this.schema.options.containerAttributes){const t=this.schema.options.containerAttributes,e=["data-schemapath","data-schematype","data-schemaid"];Object.keys(t).forEach(i=>{e.includes(i.toLowerCase())||this.container.setAttribute(i,t[i])})}}expandCallbacks(t,e){const i=this.defaults.callbacks[t];return Object.entries(e).forEach(([r,s])=>{s===Object(s)?e[r]=this.expandCallbacks(t,s):typeof s=="string"&&typeof i=="object"&&typeof i[s]=="function"&&(e[r]=i[s].bind(null,this))}),e}showValidationErrors(t){}};function fe(t,e){var s,n,a,o,l;const i=e==="bands"?((s=t.items)==null?void 0:s.enum)??[]:((n=t.options)==null?void 0:n.enum)??t.enum??[],r=e==="bands"?(o=(a=t.items)==null?void 0:a.options)==null?void 0:o.colors:((l=t.options)==null?void 0:l.colors)||[];return r&&r.length===i.length?r:i.map(h=>{let d=0;for(let c=0;c<h.length;c++)d=h.charCodeAt(c)+((d<<5)-d);return[16,8,0].map(c=>(d>>>c&255|128).toString(16)).reduce((c,f)=>c+f,"#")})}function me(t,e,i){const r=e.indexOf(t);return r!==-1?i[r]:"#000000"}function Y(t,e){const i=document.createElement("div");return i.dataset.band=t,i.textContent=e,i.draggable=!0,i.ondragstart=r=>{var s;(s=r.dataTransfer)==null||s.setData("band",t)},i}function Q(t,e,i){var s;const r=document.createElement("div");r.classList.add("bands-palette"),e.forEach((n,a)=>{const o=i[a];r.appendChild(Y(n,o))}),(s=t.control)==null||s.appendChild(r)}function tt(t,e){const i=document.createElement("style");return i.innerHTML=`
    /* Base styles for all band elements */
    [data-band] {
      display: inline-flex;
      border: 1px solid var(--outline, darkgrey);
      border-radius: 50%;
      height: 40px;
      aspect-ratio: 1/1;
      padding: 4px;
      margin: 2px;
      align-items: center;
      justify-content: center;
      cursor: move;
      font-size: 10px;
      font-weight: 500;
      transition: box-shadow 150ms ease;
    }
    [data-band]:hover {
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
    }

    /* One card holding the palette and the slots */
    .bands-editor {
      background: var(--surface-container, #f0f0f0);
      border: 1px solid var(--outline-variant, #ccc);
      border-radius: 4px;
      padding: 12px;
      margin: 8px 0;
    }
    .bands-editor hr {
      border: none;
      border-top: 1px solid var(--outline-variant, #ccc);
      margin: 8px 0;
    }

    /* Centered palette of draggable bands */
    .bands-palette {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 4px;
      padding: 8px 0;
    }

    /* Band color styles */
    ${t.map(r=>`[data-band="${r}"] { background: ${me(r,t,e)}; color: black; }`).join(`
`)}

    /* Drop slot styles */
    [data-slot] {
      display: inline-flex;
      width: 50px;
      height: 50px;
      aspect-ratio: 1/1;
      padding: 1px;
      border: 2px solid var(--outline, #666);
      background: var(--surface-container-low, #f0f0f0);
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin: 2px;
      position: relative;
      box-sizing: border-box;
      transition: border-color 150ms ease, background 150ms ease;
    }
    [data-slot]:hover {
      border-color: var(--primary, #333);
      background: var(--surface-container-high, #f9f9f9);
    }
    [data-slot]::before {
      content: attr(data-slot);
      position: absolute;
      font-size: 12px;
      font-weight: bold;
      color: var(--on-surface-variant, #666);
      z-index: 0;
    }

    /* slots row inside the card */
    .slots-container {
      font-family: monospace;
      font-size: 18px;
      color: var(--on-surface, inherit);
      padding: 8px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 4px;
    }

    .formula-text {
      font-size: 18px;
      margin: 0 2px;
    }

    /* RGB channel affordance */
    .rgb-slots [data-slot] {
      border-style: dashed;
    }
    .rgb-slots [data-slot="R"] { border-color: #e57373; }
    .rgb-slots [data-slot="G"] { border-color: #81c784; }
    .rgb-slots [data-slot="B"] { border-color: #64b5f6; }
  `,i}function et(t,e){const i=document.createElement("div");return i.dataset.slot=t,i.ondrop=e,i.ondragover=r=>r.preventDefault(),i}function it(t,e,i){R(t),t.appendChild(Y(e,i))}function R(t){var e;(e=t.querySelector("[data-band]"))==null||e.remove()}function ge(t,e,i,r){var n,a;const s=tt(i,e);(n=t.control)==null||n.appendChild(s),Q(t,i,r),(a=t.control)==null||a.appendChild(document.createElement("hr")),be(t)}function be(t){var i;const e=document.createElement("div");e.classList.add("slots-container","rgb-slots"),t.rgbSlots=["R","G","B"].map((r,s)=>{const a=et(r,o=>{var d;o.preventDefault();const l=(d=o.dataTransfer)==null?void 0:d.getData("band");if(!l)return;const h=[...t.getValue()||[]];h[s]=l,t.setValue(h),t.onChange(!0)});return e.appendChild(a),a}),(i=t.control)==null||i.appendChild(e)}function ye(t){var i;const e=t.getValue()||[];(i=t.rgbSlots)==null||i.forEach((r,s)=>{var a,o;const n=e[s];if(!n){R(r);return}it(r,n,((o=t.bandTitles)==null?void 0:o[(a=t.bands)==null?void 0:a.indexOf(n)])||n)})}var st=/\{\{([^}]+)\}\}/g;function ve(t,e,i,r){var a,o;const s=t.schema.formulaTemplate||"{{A}}",n=tt(i,e);(a=t.control)==null||a.appendChild(n),Q(t,i,r),(o=t.control)==null||o.appendChild(document.createElement("hr")),_e(t,s)}function we(t){const e=t.schema.formulaTemplate||"{{A}}",i=t.variableValues||{};return e.replace(st,(r,s)=>i[s.trim()]||r)}function D(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function xe(t,e){const i=t.bands??[];if(!e||!i.length)return null;const r=t.schema.formulaTemplate||"{{A}}",s=[...i].sort((d,c)=>c.length-d.length).map(D).join("|"),n=[],a={},o=r.split(/(\{\{[^}]+\}\})/).map(d=>{const c=d.match(/^\{\{([^}]+)\}\}$/);if(!c)return D(d);const f=c[1].trim();return a[f]?`\\${a[f]}`:(n.push(f),a[f]=n.length,`(${s}|${D(d)})`)}).join(""),l=e.match(new RegExp(`^${o}$`));if(!l)return null;const h={};return n.forEach((d,c)=>{const f=l[c+1];f&&!f.startsWith("{{")&&(h[d]=f)}),h}function _e(t,e){var r;const i=document.createElement("div");i.classList.add("slots-container"),t.variableSlots={},e.split(/(\{\{[^}]+\}\})/).forEach(s=>{if(!s)return;if(!s.match(st)){if(s=s.trim(),s){const o=document.createElement("span");o.classList.add("formula-text"),o.textContent=s,i.appendChild(o)}return}const n=s.replace(/[{}]/g,"").trim(),a=et(n,o=>{var h;o.preventDefault();const l=(h=o.dataTransfer)==null?void 0:h.getData("band");l&&(t.variableValues[n]=l,t.setValue(we(t)),t.onChange(!0))});i.appendChild(a),t.variableSlots[n]||(t.variableSlots[n]=[]),t.variableSlots[n].push(a)}),(r=t.control)==null||r.appendChild(i)}function ke(t){var e;t.variableValues={...xe(t,t.getValue())??((e=t.options)==null?void 0:e.defaultVariables)??{}},Object.keys(t.variableSlots??{}).forEach(i=>{var a,o;const r=t.variableSlots[i],s=t.variableValues[i];if(!s){r.forEach(R);return}const n=((o=t.bandTitles)==null?void 0:o[(a=t.bands)==null?void 0:a.indexOf(s)])||s;r.forEach(l=>it(l,s,n))})}var G=class extends pe{constructor(){super(...arguments);v(this,"variableSlots",{});v(this,"rgbSlots",[]);v(this,"variableValues",{});v(this,"bands",[]);v(this,"bandTitles",[]);v(this,"colors",[])}build(){var i,r,s,n,a,o,l;super.build();const e=this.schema.format||"bands";this.bands=e==="bands"?(i=this.schema.items)==null?void 0:i.enum:((r=this.schema.options)==null?void 0:r.enum)??this.schema.enum??[],this.bandTitles=e==="bands"?(n=(s=this.schema.items)==null?void 0:s.options)==null?void 0:n.enum_titles:((a=this.schema.options)==null?void 0:a.enum_titles)||this.bands,this.colors=fe(this.schema,e),this.control=document.createElement("div"),this.control.classList.add("form-control","bands-editor"),e==="bands"?ge(this,this.colors,this.bands,this.bandTitles):e==="bands-arithmetic"&&ve(this,this.colors,this.bands,this.bandTitles),this.label=document.createElement("span"),this.label.classList.add("je-header"),this.label.textContent=this.schema.title??"",(o=this.container)==null||o.appendChild(this.label),(l=this.container)==null||l.appendChild(this.control)}setValue(e){super.setValue(e),(this.schema.format||"bands")==="bands"?ye(this):ke(this)}},Te=[{type:"array",format:"bands",func:G},{type:"string",format:"bands-arithmetic",func:G}],Ce="eox-layercontrol[data-v-569df673]{overflow:auto}",Ee={class:"d-flex flex-column"},Se=["for",".colormapRegistry",".customEditorInterfaces"],Ae={slot:"layerstitle",class:"d-flex justify-space-between ma-2 pa-2 flex-shrink-0"},je={key:0},ei=ft({__name:"EodashLayerControl",props:{map:{type:String,default:"first"},tools:{type:Array,default:()=>["datetime","info","config","legend","opacity"]},title:{type:[String,Boolean],default:"Layers"},cssVars:{type:Object,default:()=>({})},layoutIcon:{type:String,default:At},layoutTarget:{type:String}},async setup(t){let e,i;customElements.get("eox-layercontrol")||([e,i]=U(()=>M(()=>import("./main.C2xKlHXZ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))),await e,i()),customElements.get("eox-jsonform")||([e,i]=U(()=>M(()=>import("./main.D62g98cC.js"),__vite__mapDeps([10,1,2,11,7,12,13,14,4,15]))),await e,i());const r=t,s={tools:r.tools,style:r.cssVars},n=q(()=>!!r.layoutTarget&&!!r.layoutIcon),{selectedCompareStac:a,selectedStac:o,colormapRegistry:l}=mt(gt()),h=q(()=>r.map==="second"?H.value!==null&&a.value!==null:W.value!==null&&o.value!==null),d=r.map==="second"?bt:yt,c=r.map==="second"?H:W,f=pt(null),y=async g=>{var P,N;const{layer:A,datetime:at}=g.detail,B=await Tt(d,A);let b=[];if(B&&(b=await B.updateLayerJson(at,A.get("id"),((P=c.value)==null?void 0:P.layers)??[])),!(b!=null&&b.length))return;const w=(N=b==null?void 0:b.find(x=>{var z;return((z=x==null?void 0:x.properties)==null?void 0:z.id)==="AnalysisGroup"}))==null?void 0:N.layers;w!=null&&w.length&&(w==null||w.forEach(x=>{x.properties.layerControlExpand=!0,x.properties.layerControlToolsExpand=!0}),Ct(c.value,b),await Et(r.map==="second"?"compareLayertime:updated":"layertime:updated",c.value,b))};let I;const rt=g=>{clearTimeout(I),I=setTimeout(()=>{y(g)},500)},nt=g=>{vt(g.detail.layer,g.detail.jsonformValue),wt(g.detail.layer,g.detail.jsonformValue),xt(g.detail.layer,g.detail.jsonformValue,r.map==="second"?"compare":"main"),r.map==="second"?_t.value=g.detail.jsonformValue:kt.value=g.detail.jsonformValue};return(g,A)=>(T(),j("span",Ee,[h.value?(T(),j("eox-layercontrol",ct({key:C(c)},s,{ref_key:"eoxLayercontrol",ref:f,for:C(c),".colormapRegistry":C(l),".showLayerZoomState":!0,".customEditorInterfaces":C(Te),toolsAsList:"true","onDatetime:updated":rt,"on:layerConfig:change":nt}),[ht("span",Ae,[t.title?(T(),j("h4",je,dt(t.title),1)):L("v-if",!0),n.value?(T(),ut(St,{key:1,target:t.layoutTarget,icon:t.layoutIcon},null,8,["target","icon"])):L("v-if",!0)])],48,Se)):L("v-if",!0)]))}},[["styles",[Ce]],["__scopeId","data-v-569df673"]]);export{ei as default};
