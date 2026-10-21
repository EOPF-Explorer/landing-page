const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/main.CRFtEMFg.js","assets/chunks/lit-element.CBn2YVps.js","assets/chunks/when.BR7zwNJC.js","assets/chunks/repeat.Duc9p3Ra.js","assets/chunks/directive.CvdRHFdJ.js","assets/chunks/directive-helpers.Bj3rQkfn.js","assets/chunks/live.Cxwco_Jz.js","assets/chunks/unsafe-html.C2DIGSw-.js","assets/chunks/map.DiiNQ3pp.js","assets/chunks/addCommonStyleSheet.CvlDGOkV.js","assets/chunks/XYZ.BHFVV5Lc.js","assets/chunks/proj.BZ4gbdzJ.js","assets/chunks/intersectsextent.Bf9LnFR0.js","assets/chunks/util.rEcXUl5V.js","assets/chunks/easing.DsNKuFBo.js","assets/chunks/commonjsHelpers.BosuxZz1.js","assets/chunks/index.BUIxO2d3.js","assets/chunks/getElement.COiK8z0h.js","assets/chunks/main.D_5f54dD.js","assets/chunks/purify.es.DOSgLqqw.js","assets/chunks/toolcool-range-slider.min.BBXDELo7.js","assets/chunks/utils.DMAht7nH.js","assets/chunks/index.DEU_HeW8.js","assets/chunks/index.BIJR-IiI.js"])))=>i.map(i=>d[i]);
var dt=Object.defineProperty;var ut=(t,i,e)=>i in t?dt(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e;var w=(t,i,e)=>ut(t,typeof i!="symbol"?i+"":i,e);import{aD as W,a1 as H,o as A,c as $,k as L,N as pt,j as ft,t as mt,e as V,b as gt,h as G}from"./framework.BvwZPdCg.js";import{_ as bt,aE as yt,U as vt,a6 as wt,a7 as xt,aW as X,aX as J,bV as K,bF as kt,bE as _t,bW as Tt,b2 as Ct,bU as Z,bX as Et,bY as St,bZ as jt}from"./eo-dash.D4rFsXTi.js";import At from"./EodashLayoutSwitcher-Dg94WjNF.Cwz8K7C-.js";import{e as Lt}from"./mdi.Bw1XzLee.js";import"./main.CJ_oxAon.js";import{f as Ot,u as Dt,E as Ft,b as O,w as T,i as $t,a as Vt}from"./lit-element.CBn2YVps.js";import{s as It,l as B,i as P,a as Rt,b as Q,q as Bt,t as Pt,o as Ut,p as Nt,f as zt}from"./sequential.BdGG0OD6.js";import{e as qt,i as Mt,t as Wt}from"./directive.CvdRHFdJ.js";import"./commonjsHelpers.BosuxZz1.js";import"./main.DeDu7Zyg.js";import"./OSM.Bw5KDVH0.js";import"./index.OUYS7i6-.js";import"./openglobus.BCrHpIBW.js";import"./og.es.45IJsLV-.js";import"./WMTS.DP-gDils.js";import"./getElement.COiK8z0h.js";import"./addCommonStyleSheet.CvlDGOkV.js";import"./VTooltip-Civue18f.B6GMC7Bl.js";import"./forwardRefs-CHErCYs9.CktZNkXi.js";import"./transition-CIQsw9Qb.BC7AWPst.js";import"./dayjs.min.lahZ2SOr.js";import"./when.BR7zwNJC.js";import"./live.Cxwco_Jz.js";import"./directive-helpers.Bj3rQkfn.js";import"./util.rEcXUl5V.js";import"./index.BIJR-IiI.js";import"./map.DiiNQ3pp.js";import"./toolcool-range-slider.min.BBXDELo7.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht=t=>(i,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(t,i)}):customElements.define(t,i)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gt={attribute:!0,type:String,converter:Dt,reflect:!1,hasChanged:Ot},Xt=(t=Gt,i,e)=>{const{kind:r,metadata:s}=e;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),r==="setter"&&((t=Object.create(t)).wrapped=!0),n.set(e.name,t),r==="accessor"){const{name:o}=e;return{set(a){const l=i.get.call(this);i.set.call(this,a),this.requestUpdate(o,l,t,!0,a)},init(a){return a!==void 0&&this.C(o,void 0,t,a),a}}}if(r==="setter"){const{name:o}=e;return function(a){const l=this[o];i.call(this,a),this.requestUpdate(o,l,t,!0,a)}}throw Error("Unsupported decorator location: "+r)};function m(t){return(i,e)=>typeof e=="object"?Xt(t,i,e):((r,s,n)=>{const o=s.hasOwnProperty(n);return s.constructor.createProperty(n,r),o?Object.getOwnPropertyDescriptor(s,n):void 0})(t,i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jt=(t,i,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof i!="object"&&Object.defineProperty(t,i,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Kt(t,i){return(e,r,s)=>{const n=o=>{var a;return((a=o.renderRoot)==null?void 0:a.querySelector(t))??null};return Jt(e,r,{get(){return n(this)}})}}class Yt{constructor(i){this.cle=i}setColorScale(){switch(this.cle.scaleType){case"continuous":this.setContinousColorScale();break;case"log10":this.setLogColorScale();break;case"discrete":this.setDiscreteColorScale();break;case"threshold":this.setThresholdColorScale();break;case"categorical":this.setCategoricalColorScale();break;default:this.invalidScaleType(this.cle.scaleType)}}setContinousColorScale(){const{interpolator:i,domain:e,range:r}=this.cle;this.colorScale=i?It(i).domain(e):B().range(r).domain(e).interpolate(P)}setLogColorScale(){const{interpolator:i,domain:e,range:r}=this.cle;this.colorScale=i?Rt(i).domain(e):Q().range(r).domain(e).interpolate(P)}setDiscreteColorScale(){this.colorScale=Bt().domain(this.cle.domain).range(this.cle.range)}setThresholdColorScale(){const i=this.cle.domain;this.colorScale=Pt().domain(i.slice(1,i.length-1)).range(this.cle.range)}setCategoricalColorScale(){this.colorScale=Ut().domain(this.cle.domain).range(this.cle.range)}invalidScaleType(i){throw new Error(`invalid property scaletype: ${i}.
      Must be one of "categorical", "continuous", "discrete", "threshold".`)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=qt(class extends Mt{constructor(t){var i;if(super(t),t.type!==Wt.ATTRIBUTE||t.name!=="class"||((i=t.strings)==null?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(i=>t[i]).join(" ")+" "}update(t,[i]){var r,s;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in i)i[n]&&!((r=this.nt)!=null&&r.has(n))&&this.st.add(n);return this.render(i)}const e=t.element.classList;for(const n of this.st)n in i||(e.remove(n),this.st.delete(n));for(const n in i){const o=!!i[n];o===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(o?(e.add(n),this.st.add(n)):(e.remove(n),this.st.delete(n)))}return Ft}});class Zt{constructor(i){this.cle=i}render(){const i=this.cle.titleText?O`<p class="legend-title">${this.cle.titleText}</p>`:"",e={hidden:this.cle.scaleType==="categorical"},r={hidden:this.cle.scaleType!=="categorical","categorical-container":!0};return O`<div
      class="cle-container"
      style="width:${this.cle.width}px; height:auto;"
    >
      ${i}
      <slot name="subtitle"></slot>
      <svg
        class=${I(e)}
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
      <ul class=${I(r)}>
        ${this.renderCategorical()}
      </ul>
      <slot name="footer"></slot>
    </div>`}renderCategorical(){if(this.cle.scaleType!=="categorical")return"";const{markType:i,colorScale:e,domain:r}=this.cle,s={"legend-item":!0,line:i==="line",circle:i==="circle"};return O`${r.map(n=>O`<li
          class=${I(s)}
          style="--color:${e(n)}"
        >
          ${n}
        </li>`)}`}renderContinuous(){var d;if(this.cle.scaleType!=="continuous"&&this.cle.scaleType!=="log10"||this.cle.colorScale===null)return"";const{colorScale:i,marginTop:e,marginLeft:r,marginRight:s,tickSize:n,width:o,range:a}=this.cle,l=this.cle.marginBottom+n,c=this.cle.height+n,h=((d=i.interpolator)==null?void 0:d.call(i))||Nt(P,a);return T`<image
      x=${r}
      y=${e}
      width=${o-s-r}
      height=${c-e-l}
      preserveAspectRatio="none"
      href=${this.getColorRamp(h).toDataURL()}
    ></image>`}renderDiscreteThreshold(){if(this.cle.scaleType!=="discrete"&&this.cle.scaleType!=="threshold")return"";const{tickSize:i,marginTop:e,marginLeft:r,colorScale:s,xScale:n}=this.cle,o=this.cle.height+i,a=this.cle.marginBottom+i,l=s.range(),c=d=>s.invertExtent(d).map(n)[0]||r,h=d=>{let[u,g]=s.invertExtent(d).map(n);return u=u||0,g=g||n.range()[1],g-u};return T`${l.map(d=>T`<rect x=${c(d)} y=${e} width=${h(d)} height=${o-e-a} fill=${d}></rect>`)}`}renderAxis(){if(!this.cle.xScale||this.cle.scaleType==="categorical")return"";const{ticks:i,tickSize:e,tickFormat:r,tickFormatter:s,tickValues:n,xScale:o,marginTop:a}=this.cle,l=this.cle.height+e,c=this.cle.marginBottom+e,h=n!=null&&n.length?n:o.ticks.apply(o,[i,r]),d=Math.max(e,0)+3,u=()=>h.map(g=>T`<g class="tick" transform='translate(${o(g)},0)'>
      <line stroke="currentColor" y2="${e}" y1="${a+c-l}"></line>
      <text fill="currentColor" y="${d}" dy="0.71em">${s(g)}</text>
      </g>`);return T`<g
      class="x-axis"
      transform="translate(0, ${l-c})"
      text-anchor="middle"
    >${u()}</g>`}getColorRamp(i,e=256){const r=document.createElement("canvas");r.setAttribute("height","1"),r.setAttribute("width",`${e}`);const s=r.getContext("2d");for(let n=0;n<e;n++)s.fillStyle=i(n/(e-1)),s.fillRect(n,0,1,1);return r}}const Qt=325,te=32,ee=6,ie=12,se=16,re=12,U=5,ne=6,tt=".1f",ae=[0,1],oe=["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],le="Color Legend Element",ce="circle",he="continuous",de=["domain","range","interpolator","scaleType"],ue=["scaleType","ticks","tickSize","tickValues","tickFormat","tickFormatter","domain","range","marginLeft","marginRight","marginBottom","marginTop","width","height"];class pe{constructor(i){this.cle=i}setXScale(){const{scaleType:i,marginLeft:e,width:r,marginRight:s}=this.cle;switch(i){case"continuous":this.xScale=B().domain(this.cle.domain).range([e,r-s]);break;case"log10":this.xScale=Q().domain(this.cle.domain).range([e,r-s]).nice();break;case"discrete":case"threshold":this.xScale=B().domain([this.cle.domain[0],this.cle.domain[this.cle.domain.length-1]]).rangeRound([e,r-s]);break;case"categorical":this.xScale=null;break;default:throw new Error(`Unrecognized scaleType: ${i}`)}}handleAxisTicks(){var i,e,r;if(this.cle.scaleType==="log10"&&!this.cle.tickValues)this.cle.tickValues=this.xScale.ticks(this.cle.ticks||U);else if((this.cle.scaleType==="discrete"||this.cle.scaleType==="threshold")&&!this.cle.tickValues){const[s,n]=this.xScale.domain();this.cle.tickValues=[s,...((e=(i=this.cle.colorScale)==null?void 0:i.thresholds)==null?void 0:e.call(i))||this.cle.colorScale.domain(),n]}typeof this.cle.tickFormatter!="function"&&((r=this.cle.tickFormat)!=null&&r.length&&this.cle.scaleType!=="log10"?this.cle.tickFormatter=zt(this.cle.tickFormat):this.cle.tickFormatter=this.xScale.tickFormat(this.cle.ticks||U,this.cle.tickFormat||tt))}}const fe=$t`
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
`;var f=function(t,i,e,r){var s=arguments.length,n=s<3?i:r===null?r=Object.getOwnPropertyDescriptor(i,e):r,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,i,e,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(i,e,n):o(i,e))||n);return s>3&&n&&Object.defineProperty(i,e,n),n};let p=class extends Vt{constructor(){super(...arguments),this.titleText=le,this.width=Qt,this.height=te,this.marginTop=ee,this.marginRight=ie,this.marginBottom=se,this.marginLeft=re,this.scaleType=he,this.domain=ae,this.range=oe,this.markType=ce,this.ticks=U,this.tickFormat=tt,this.tickSize=ne,this.colorScaleSetter=new Yt(this),this.axisTickSetter=new pe(this),this.renderer=new Zt(this)}get interpolator(){return this._interpolator}set interpolator(i){if(typeof i=="function"){const e=this.interpolator;this._interpolator=i,this.requestUpdate("interpolator",e)}else throw new Error("interpolator must be a function.")}get tickFormatter(){return this._tickFormatter}set tickFormatter(i){if(typeof i=="function"){const e=this.tickFormatter;this._tickFormatter=i,this.requestUpdate("tickFormatter",e)}else throw new Error("tickFormatter must be a function.")}get colorScale(){return this.colorScaleSetter.colorScale}get xScale(){return this.axisTickSetter.xScale}render(){return this.renderer.render()}willUpdate(i){de.some(e=>i.has(e))&&this.colorScaleSetter.setColorScale(),ue.some(e=>i.has(e))&&(this.axisTickSetter.setXScale(),this.axisTickSetter.handleAxisTicks())}};p.styles=[fe];f([m({type:String})],p.prototype,"titleText",void 0);f([m({type:Number})],p.prototype,"width",void 0);f([m({type:Number})],p.prototype,"height",void 0);f([m({type:Number})],p.prototype,"marginTop",void 0);f([m({type:Number})],p.prototype,"marginRight",void 0);f([m({type:Number})],p.prototype,"marginBottom",void 0);f([m({type:Number})],p.prototype,"marginLeft",void 0);f([m({type:String})],p.prototype,"scaleType",void 0);f([m({type:Array})],p.prototype,"domain",void 0);f([m({type:Array})],p.prototype,"range",void 0);f([m({type:String})],p.prototype,"markType",void 0);f([m({type:Number})],p.prototype,"ticks",void 0);f([m({type:String})],p.prototype,"tickFormat",void 0);f([m({type:Number})],p.prototype,"tickSize",void 0);f([m({type:Array})],p.prototype,"tickValues",void 0);f([Kt("svg")],p.prototype,"svg",void 0);f([m({attribute:!1})],p.prototype,"interpolator",null);f([m({attribute:!1})],p.prototype,"tickFormatter",null);p=f([Ht("color-legend")],p);function me(t,i,e){const r=t.get("_jsonDefinition"),s=i.bands;if(!Et(r)||!s)return;const n=r.source.bands;JSON.stringify(s)!==JSON.stringify(n)&&Z(e,St((e==null?void 0:e.layers)??[],t.get("id"),[{...r,source:{...r.source,bands:[...s]}}]))}function ge(t,i){const[e,r]=t.split("?"),s=new URLSearchParams(r||"");for(const[o,a]of Object.entries(i))a!=null&&a!==""?s.set(o,a):s.delete(o);const n=s.toString();return n?`${e}?${n}`:e}function be(t,i){var l,c,h,d;const e=t.get("_jsonDefinition");if(!e||e.type!=="VectorTile")return!1;const r=(c=(l=e.properties)==null?void 0:l.layerConfig)==null?void 0:c.schema,s=jt(r);if(Object.keys(s).length===0)return!1;let n=t.get("originalUrl")||((h=e.source)==null?void 0:h.url);if(!n||typeof n!="string")return!1;t.get("originalUrl")||t.set("originalUrl",n);const o={};for(const[u,g]of Object.entries(s))o[g]=i[u];const a=ge(n,o);if((d=e.source)!=null&&d.url){if(e.source.url===a||(e.source.url=a,t.get("injectedUrl")===a))return!1;const u=t.getSource();if(t.set("injectedUrl",a),u&&"setUrl"in u)return u.setUrl(a),!0;if(u&&"setUrls"in u)return u.setUrls([a]),!0}return!1}function et(t){return!(t===null||typeof t!="object"||t.nodeType||t===t.window||t.constructor&&!C(t.constructor.prototype,"isPrototypeOf"))}function it(t){return et(t)?D({},t):Array.isArray(t)?t.map(it):t}function D(t,...i){return i.forEach(e=>{e&&Object.keys(e).forEach(r=>{e[r]&&et(e[r])?(C(t,r)||(t[r]={}),D(t[r],e[r])):Array.isArray(e[r])?t[r]=it(e[r]):t[r]=e[r]})}),t}function C(t,i){return t&&Object.prototype.hasOwnProperty.call(t,i)}var ye=class{constructor(t,i){this.defaults=i,this.jsoneditor=t.jsoneditor,this.theme=this.jsoneditor.theme,this.template_engine=this.jsoneditor.template,this.iconlib=this.jsoneditor.iconlib,this.translate=this.jsoneditor.translate||this.defaults.translate,this.translateProperty=this.jsoneditor.translateProperty||this.defaults.translateProperty,this.original_schema=t.schema,this.schema=this.jsoneditor.expandSchema(this.original_schema),this.active=!0,this.isUiOnly=!1,this.options=D({},this.options||{},this.schema.options||{},t.schema.options||{},t),this.enforceConstEnabled=this.options.enforce_const??this.jsoneditor.options.enforce_const,this.formname=this.jsoneditor.options.form_name_root||"root",!t.path&&!this.schema.id&&(this.schema.id=this.formname),this.path=t.path||this.formname,this.formname=t.formname||this.path.replace(/\.([^.]+)/g,"[$1]"),this.parent=t.parent,this.key=this.parent!==void 0?this.path.split(".").slice(this.parent.path.split(".").length).join("."):this.path,this.link_watchers=[],this.watchLoop=!1,this.optInWidget=this.options.opt_in_widget??this.jsoneditor.options.opt_in_widget,t.container&&this.setContainer(t.container),this.registerDependencies()}onChildEditorChange(t,i){this.onChange(!0,!1,i)}notify(){this.path&&this.jsoneditor.notifyWatchers(this.path)}change(t){this.parent?this.parent.onChildEditorChange(this,t):this.jsoneditor&&this.jsoneditor.onChange(t)}onChange(t,i,e){this.notify(),i||this.watch_listener&&this.watch_listener(),t&&this.change(e)}register(){if(this.jsoneditor.registerEditor(this),this.input&&!this.label){const t=this.getTitle()||this.formname;this.input.setAttribute("aria-label",t)}this.onChange()}unregister(){this.jsoneditor&&this.jsoneditor.unregisterEditor(this)}getNumColumns(){return 12}isActive(){return this.active}activate(){this.active=!0,this.optInCheckbox.checked=!0,this.enable(),this.change()}deactivate(){this.isRequired()||(this.active=!1,this.optInCheckbox.checked=!1,this.disable(),this.change())}registerDependencies(){this.dependenciesFulfilled=!0;const t=this.options.dependencies;t&&Object.keys(t).forEach(i=>{let e;i.startsWith(this.jsoneditor.root.path)?e=i:(e=this.path.split("."),e[e.length-1]=i,e=e.join(".")),this.jsoneditor.watch(e,()=>{this.evaluateDependencies()})})}evaluateDependencies(){const t=this.container||this.control;if(!t||this.jsoneditor===null)return;const i=this.options.dependencies;if(!i)return;const e=this.dependenciesFulfilled;this.dependenciesFulfilled=!0,Object.keys(i).forEach(s=>{let n;s.startsWith(this.jsoneditor.root.path)?n=s:(n=this.path.split("."),n[n.length-1]=s,n=n.join("."));const o=i[s];this.checkDependency(n,o)}),this.dependenciesFulfilled!==e&&this.notify();let r=this.dependenciesFulfilled?"block":"none";this.options.hidden&&(r="none"),t.tagName==="TD"?Object.keys(t.childNodes).forEach(s=>t.childNodes[s].style.display=r):t.style.display=r}checkDependency(t,i){if(this.path===t||this.jsoneditor===null)return;const e=this.jsoneditor.getEditor(t),r=e?e.getValue():void 0;!e||!e.dependenciesFulfilled||r===void 0||r===null?this.dependenciesFulfilled=!1:Array.isArray(i)?this.dependenciesFulfilled=i.some(s=>{if(JSON.stringify(r)===JSON.stringify(s))return!0}):typeof i=="object"?typeof r!="object"?this.dependenciesFulfilled=i===r:Object.keys(i).some(s=>{if(!C(i,s))return!1;if(!C(r,s)||i[s]!==r[s])return this.dependenciesFulfilled=!1,!0}):typeof i=="string"||typeof i=="number"?this.dependenciesFulfilled=this.dependenciesFulfilled&&r===i:typeof i=="boolean"&&(i?this.dependenciesFulfilled=this.dependenciesFulfilled&&(r||r.length>0):this.dependenciesFulfilled=this.dependenciesFulfilled&&(!r||r.length===0))}setContainer(t){this.container=t,this.setContainerAttributes(),this.schema.id&&this.container.setAttribute("data-schemaid",this.schema.id),this.schema.type&&typeof this.schema.type=="string"&&this.container.setAttribute("data-schematype",this.schema.type),this.container.setAttribute("data-schemapath",this.path)}setOptInCheckbox(){let t;this.optInWidget==="switch"?t=this.theme.getOptInSwitch(this.formname):t=this.theme.getOptInCheckbox(this.formname),this.optInCheckbox=t.checkbox,this.optInContainer=t.container,this.optInCheckbox.addEventListener("click",()=>{this.isActive()?this.deactivate():this.activate()});const i=this.jsoneditor.options.show_opt_in,e=typeof this.parent.options.show_opt_in<"u",r=e&&this.parent.options.show_opt_in===!0,s=e&&this.parent.options.show_opt_in===!1;(r||!s&&i||!e&&i)&&this.parent&&this.parent.schema.type==="object"&&!this.isRequired()&&this.header&&(this.header.insertBefore(this.optInContainer,this.header.firstChild),this.optInAppended=!0)}preBuild(){}build(){}postBuild(){this.setupWatchListeners(),this.addLinks(),this.register(),this.setValue(this.getDefault(),!0),this.updateHeaderText(),this.onWatchedFieldChange(),this.options.titleHidden&&(this.theme.visuallyHidden(this.label),this.theme.visuallyHidden(this.header)),this.enforceConstEnabled&&this.schema.const&&this.disable()}setupWatchListeners(){if(this.watched={},this.schema.vars&&(this.schema.watch=this.schema.vars),this.watched_values={},this.watch_listener=()=>{this.refreshWatchedFieldValues()&&this.onWatchedFieldChange()},C(this.schema,"watch")){let t,i,e,r,s;const n=this.container.getAttribute("data-schemapath");Object.keys(this.schema.watch).forEach(o=>{if(t=this.schema.watch[o],Array.isArray(t)){if(t.length<2)return;i=[t[0]].concat(t[1].split("."))}else i=t.split("."),this.theme.closest(this.container,`[data-schemaid="${i[0]}"]`)||i.unshift("#");if(e=i.shift(),e==="#"&&(e=this.jsoneditor.schema.id||this.jsoneditor.root.formname),r=this.theme.closest(this.container,`[data-schemaid="${e}"]`),!r)throw new Error(`Could not find ancestor node with id ${e}`);s=`${r.getAttribute("data-schemapath")}.${i.join(".")}`,n.startsWith(s)&&(this.watchLoop=!0),this.jsoneditor.watch(s,this.watch_listener),this.watched[o]=s})}this.schema.headerTemplate&&(this.header_template=this.jsoneditor.compileTemplate(this.schema.headerTemplate,this.template_engine))}addLinks(){if(!this.no_link_holder&&(this.link_holder=this.theme.getLinksHolder(),typeof this.description<"u"?this.description.parentNode.insertBefore(this.link_holder,this.description):this.container.appendChild(this.link_holder),this.schema.links))for(let t=0;t<this.schema.links.length;t++)this.addLink(this.getLink(this.schema.links[t]))}onMove(){}getButton(t,i,e,r=[]){const s=`json-editor-btn-${i}`;this.iconlib?i=this.iconlib.getIcon(i):i=null,t=this.translate(t,r),e=this.translate(e,r),!i&&e&&(t=e,e=null);const n=this.theme.getButton(t,i,e);return n.classList.add(s),n}setButtonText(t,i,e,r,s=[]){return this.iconlib?e=this.iconlib.getIcon(e):e=null,i=this.translate(i,s),r=this.translate(r,s),!e&&r&&(i=r,r=null),this.theme.setButtonText(t,i,e,r)}addLink(t){this.link_holder&&this.link_holder.appendChild(t)}getLink(t){let i,e;const r=(t.mediaType||"application/javascript").split("/")[0],s=this.jsoneditor.compileTemplate(t.href,this.template_engine),n=this.jsoneditor.compileTemplate(t.rel?t.rel:t.href,this.template_engine);let o=null;if(t.download&&(o=t.download),o&&o!==!0&&(o=this.jsoneditor.compileTemplate(o,this.template_engine)),r==="image"){i=this.theme.getBlockLinkHolder(),e=document.createElement("a"),e.setAttribute("target","_blank");const a=document.createElement("img");this.theme.createImageLink(i,e,a),this.link_watchers.push(l=>{const c=s(l),h=n(l);e.setAttribute("href",c),e.setAttribute("title",h||c),a.setAttribute("src",c)})}else if(["audio","video"].includes(r)){i=this.theme.getBlockLinkHolder(),e=this.theme.getBlockLink(),e.setAttribute("target","_blank");const a=document.createElement(r);a.setAttribute("controls","controls"),this.theme.createMediaLink(i,e,a),this.link_watchers.push(l=>{const c=s(l),h=n(l);e.setAttribute("href",c),e.textContent=h||c,a.setAttribute("src",c)})}else e=i=this.theme.getBlockLink(),i.setAttribute("target","_blank"),i.textContent=t.rel,i.style.display="none",this.link_watchers.push(a=>{const l=s(a),c=n(a);l&&(i.style.display=""),i.setAttribute("href",l),i.textContent=c||l});return o&&e&&(o===!0?e.setAttribute("download",""):this.link_watchers.push(a=>{e.setAttribute("download",o(a))})),t.class&&t.class.split(" ").forEach(a=>{e.classList.add(a)}),i}refreshWatchedFieldValues(){if(!this.watched_values)return;const t={};let i=!1;return this.watched&&Object.keys(this.watched).forEach(e=>{const r=this.jsoneditor.getEditor(this.watched[e]),s=r?r.getValue():null;this.watched_values[e]!==s&&(i=!0),t[e]=s}),t.self=this.getValue(),this.watched_values.self!==t.self&&(i=!0),this.watched_values=t,i}getWatchedFieldValues(){return this.watched_values}updateHeaderText(){if(this.header){const t=this.getHeaderText();if(this.header.children.length){for(let i=0;i<this.header.childNodes.length;i++)if(this.header.childNodes[i].nodeType===3){this.header.childNodes[i].nodeValue=this.cleanText(t);break}}else window.DOMPurify?this.header.innerHTML=window.DOMPurify.sanitize(t):this.header.textContent=this.cleanText(t)}}purify(t){return typeof t!="string"||(window.DOMPurify?t=window.DOMPurify.sanitize(t):t=this.cleanText(t)),t}getHeaderText(t){return this.header_text?this.header_text:t?this.translateProperty(this.schema.title):this.getTitle()}getPathDepth(){return this.path.split(".").length}cleanText(t){const i=document.createElement("div");return i.innerHTML=t,i.textContent||i.innerText}onWatchedFieldChange(){let t;if(this.header_template){t=D(this.getWatchedFieldValues(),{key:this.key,i:this.key,i0:this.key*1,i1:this.key*1+1,title:this.getTitle()}),this.editors&&Object.keys(this.editors).length&&(t.properties={},Object.keys(this.editors).forEach(e=>{const r=this.editors[e];if(r.schema&&r.schema.enum&&r.schema.options&&r.schema.options.enum_titles){const s=r.schema.enum.indexOf(r.value);t.properties[e]={enumTitle:r.options.enum_titles[s]}}}));const i=this.header_template(t);i!==this.header_text&&(this.header_text=i,this.updateHeaderText(),this.notify())}if(this.link_watchers.length){t=this.getWatchedFieldValues();for(let i=0;i<this.link_watchers.length;i++)this.link_watchers[i](t)}}setValue(t){t=this.applyConstFilter(t),this.value=t}applyConstFilter(t){return this.enforceConstEnabled&&typeof this.schema.const<"u"&&(t=this.schema.const),t}getValue(){if(this.dependenciesFulfilled)return this.value}refreshValue(){}getChildEditors(){return!1}destroy(){this.unregister(this),this.watched&&Object.values(this.watched).forEach(t=>this.jsoneditor.unwatch(t,this.watch_listener)),this.watched=null,this.watched_values=null,this.watch_listener=null,this.header_text=null,this.header_template=null,this.value=null,this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container),this.container=null,this.jsoneditor=null,this.schema=null,this.path=null,this.key=null,this.parent=null}isDefaultRequired(){return this.isRequired()||!!this.jsoneditor.options.use_default_values}getDefault(){if(this.enforceConstEnabled&&this.schema.const)return this.schema.const;if(typeof this.schema.default<"u")return this.schema.default;if(typeof this.schema.enum<"u")return this.schema.enum[0];let t=this.schema.type||this.schema.oneOf;if(t&&Array.isArray(t)&&(t=t[0]),t&&typeof t=="object"&&(t=t.type),t&&Array.isArray(t)&&(t=t[0]),typeof t=="string"){if(t==="number")return this.isDefaultRequired()?0:void 0;if(t==="boolean")return this.isDefaultRequired()?!1:void 0;if(t==="integer")return this.isDefaultRequired()?0:void 0;if(t==="string")return this.isDefaultRequired()?"":void 0;if(t==="null")return null;if(t==="object")return{};if(t==="array")return[]}}getTitle(){return this.translateProperty(this.schema.title||this.key||this.formname)}enable(){this.disabled=!1}disable(){this.disabled=!0}isEnabled(){return!this.disabled}isRequired(){return typeof this.schema.required=="boolean"?this.schema.required:this.parent&&this.parent.schema&&Array.isArray(this.parent.schema.required)?this.parent.schema.required.includes(this.key):!!this.jsoneditor.options.required_by_default}getDisplayText(t){const i=[],e={};t.forEach(s=>{s.title&&(e[s.title]=e[s.title]||0,e[s.title]++),s.description&&(e[s.description]=e[s.description]||0,e[s.description]++),s.format&&(e[s.format]=e[s.format]||0,e[s.format]++),s.type&&(e[s.type]=e[s.type]||0,e[s.type]++)}),t.forEach(s=>{let n;typeof s=="string"?n=s:s.title&&e[s.title]<=1?n=s.title:s.format&&e[s.format]<=1?n=s.format:s.type&&e[s.type]<=1?n=s.type:s.description&&e[s.description]<=1?n=s.description:s.title?n=s.title:s.format?n=s.format:s.type?n=s.type:s.description?n=s.description:JSON.stringify(s).length<500?n=JSON.stringify(s):n="type",i.push(n)});const r={};return i.forEach((s,n)=>{r[s]=r[s]||0,r[s]++,e[s]>1&&(i[n]=`${s} ${r[s]}`)}),i}getValidId(t){return t=t===void 0?"":t.toString(),t.replace(/\s+/g,"-")}setInputAttributes(t,i){if(this.schema.options&&this.schema.options.inputAttributes){const e=this.schema.options.inputAttributes,r=["name","type"].concat(t),s=i||this.input;Object.keys(e).forEach(n=>{r.includes(n.toLowerCase())||s.setAttribute(n,e[n])})}}setContainerAttributes(){if(this.schema.options&&this.schema.options.containerAttributes){const t=this.schema.options.containerAttributes,i=["data-schemapath","data-schematype","data-schemaid"];Object.keys(t).forEach(e=>{i.includes(e.toLowerCase())||this.container.setAttribute(e,t[e])})}}expandCallbacks(t,i){const e=this.defaults.callbacks[t];return Object.entries(i).forEach(([r,s])=>{s===Object(s)?i[r]=this.expandCallbacks(t,s):typeof s=="string"&&typeof e=="object"&&typeof e[s]=="function"&&(i[r]=e[s].bind(null,this))}),i}showValidationErrors(t){}};function ve(t,i){var s,n,o,a,l;const e=i==="bands"?((s=t.items)==null?void 0:s.enum)??[]:((n=t.options)==null?void 0:n.enum)??t.enum??[],r=i==="bands"?(a=(o=t.items)==null?void 0:o.options)==null?void 0:a.colors:((l=t.options)==null?void 0:l.colors)||[];return r&&r.length===e.length?r:e.map(c=>{let h=0;for(let d=0;d<c.length;d++)h=c.charCodeAt(d)+((h<<5)-h);return[16,8,0].map(d=>(h>>>d&255|128).toString(16)).reduce((d,u)=>d+u,"#")})}function we(t,i,e){const r=i.indexOf(t);return r!==-1?e[r]:"#000000"}function st(t,i){const e=document.createElement("div");return e.dataset.band=t,e.textContent=i,e.draggable=!0,e.ondragstart=r=>{var s;(s=r.dataTransfer)==null||s.setData("band",t)},e}function rt(t,i,e){var s;const r=document.createElement("div");r.classList.add("bands-palette"),i.forEach((n,o)=>{const a=e[o];r.appendChild(st(n,a))}),(s=t.control)==null||s.appendChild(r)}function nt(t,i){const e=document.createElement("style");return e.innerHTML=`
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
    ${t.map(r=>`[data-band="${r}"] { background: ${we(r,t,i)}; color: black; }`).join(`
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
  `,e}function at(t,i){const e=document.createElement("div");return e.dataset.slot=t,e.ondrop=i,e.ondragover=r=>r.preventDefault(),e}function ot(t,i,e){N(t),t.appendChild(st(i,e))}function N(t){var i;(i=t.querySelector("[data-band]"))==null||i.remove()}function xe(t,i,e,r){var n,o;const s=nt(e,i);(n=t.control)==null||n.appendChild(s),rt(t,e,r),(o=t.control)==null||o.appendChild(document.createElement("hr")),ke(t)}function ke(t){var e;const i=document.createElement("div");i.classList.add("slots-container","rgb-slots"),t.rgbSlots=["R","G","B"].map((r,s)=>{const o=at(r,a=>{var h;a.preventDefault();const l=(h=a.dataTransfer)==null?void 0:h.getData("band");if(!l)return;const c=[...t.getValue()||[]];c[s]=l,t.setValue(c),t.onChange(!0)});return i.appendChild(o),o}),(e=t.control)==null||e.appendChild(i)}function _e(t){var e;const i=t.getValue()||[];(e=t.rgbSlots)==null||e.forEach((r,s)=>{var o,a;const n=i[s];if(!n){N(r);return}ot(r,n,((a=t.bandTitles)==null?void 0:a[(o=t.bands)==null?void 0:o.indexOf(n)])||n)})}var lt=/\{\{([^}]+)\}\}/g;function Te(t,i,e,r){var o,a;const s=t.schema.formulaTemplate||"{{A}}",n=nt(e,i);(o=t.control)==null||o.appendChild(n),rt(t,e,r),(a=t.control)==null||a.appendChild(document.createElement("hr")),Ee(t,s)}function Ce(t){const i=t.schema.formulaTemplate||"{{A}}",e=t.variableValues||{};return i.replace(lt,(r,s)=>e[s.trim()]||r)}function R(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ct(t,i){const e=t.bands??[];if(!i||!e.length)return null;const r=t.schema.formulaTemplate||"{{A}}",s=[...e].sort((h,d)=>d.length-h.length).map(R).join("|"),n=[],o={},a=r.split(/(\{\{[^}]+\}\})/).map(h=>{const d=h.match(/^\{\{([^}]+)\}\}$/);if(!d)return R(h);const u=d[1].trim();return o[u]?`\\${o[u]}`:(n.push(u),o[u]=n.length,`(${s}|${R(h)})`)}).join(""),l=i.match(new RegExp(`^${a}$`));if(!l)return null;const c={};return n.forEach((h,d)=>{const u=l[d+1];u&&!u.startsWith("{{")&&(c[h]=u)}),c}function Ee(t,i){var r;const e=document.createElement("div");e.classList.add("slots-container"),t.variableSlots={},i.split(/(\{\{[^}]+\}\})/).forEach(s=>{if(!s)return;if(!s.match(lt)){if(s=s.trim(),s){const a=document.createElement("span");a.classList.add("formula-text"),a.textContent=s,e.appendChild(a)}return}const n=s.replace(/[{}]/g,"").trim(),o=at(n,a=>{var c;a.preventDefault();const l=(c=a.dataTransfer)==null?void 0:c.getData("band");l&&(t.variableValues[n]=l,t.setValue(Ce(t)),t.onChange(!0))});e.appendChild(o),t.variableSlots[n]||(t.variableSlots[n]=[]),t.variableSlots[n].push(o)}),(r=t.control)==null||r.appendChild(e)}function Se(t){var i;t.variableValues={...ct(t,t.getValue())??((i=t.options)==null?void 0:i.defaultVariables)??{}},Object.keys(t.variableSlots??{}).forEach(e=>{var o,a;const r=t.variableSlots[e],s=t.variableValues[e];if(!s){r.forEach(N);return}const n=((a=t.bandTitles)==null?void 0:a[(o=t.bands)==null?void 0:o.indexOf(s)])||s;r.forEach(l=>ot(l,s,n))})}var Y=class ht extends ye{constructor(){super(...arguments);w(this,"variableSlots",{});w(this,"rgbSlots",[]);w(this,"variableValues",{});w(this,"bands",[]);w(this,"bandTitles",[]);w(this,"colors",[])}build(){var r,s,n,o,a,l,c;if(super.build(),this.schema.watch)return;const e=this.schema.format||"bands";this.bands=e==="bands"?(r=this.schema.items)==null?void 0:r.enum:((s=this.schema.options)==null?void 0:s.enum)??this.schema.enum??[],this.bandTitles=e==="bands"?(o=(n=this.schema.items)==null?void 0:n.options)==null?void 0:o.enum_titles:((a=this.schema.options)==null?void 0:a.enum_titles)||this.bands,this.colors=ve(this.schema,e),this.control=document.createElement("div"),this.control.classList.add("form-control","bands-editor"),e==="bands"?xe(this,this.colors,this.bands,this.bandTitles):e==="bands-arithmetic"&&Te(this,this.colors,this.bands,this.bandTitles),this.label=document.createElement("span"),this.label.classList.add("je-header"),this.label.textContent=this.schema.title??"",(l=this.container)==null||l.appendChild(this.label),(c=this.container)==null||c.appendChild(this.control)}setValue(e){super.setValue(e),(this.schema.format||"bands")==="bands"?_e(this):Se(this)}onWatchedFieldChange(){super.onWatchedFieldChange();const{watched:e,jsoneditor:r,path:s}=this,[n]=Object.values(e??{}),o=n&&r.getEditor(n);if(!(o instanceof ht))return;const a=ct(o,o.getValue());if(!a)return;const l=[...new Set(Object.values(a))],c=s.slice(0,s.lastIndexOf("."));let h=JSON.stringify(l)!==JSON.stringify(this.getValue());for(const[d,u]of Object.entries(a)){const g=l.indexOf(u)+1,_=r.getEditor(`${c}.${d}`);_&&_.getValue()!==g&&(_.setValue(g),h=!0)}h&&(this.setValue(l),this.onChange(!0))}},je=[{type:"array",format:"bands",func:Y},{type:"string",format:"bands-arithmetic",func:Y}],Ae="eox-layercontrol[data-v-3400e71e]{overflow:auto}",Le={class:"d-flex flex-column"},Oe=["for",".tools",".colormapRegistry",".customEditorInterfaces"],De={slot:"layerstitle",class:"d-flex justify-space-between ma-2 pa-2 flex-shrink-0"},Fe={key:0},hi=bt({__name:"EodashLayerControl",props:{map:{type:String,default:"first"},tools:{type:Array,default:()=>["datetime","info","config","legend","opacity"]},title:{type:[String,Boolean],default:"Layers"},cssVars:{type:Object,default:()=>({})},layoutIcon:{type:String,default:Lt},layoutTarget:{type:String},datetimeDebounce:{type:Number,default:500}},async setup(t){let i,e;customElements.get("eox-layercontrol")||([i,e]=W(()=>H(()=>import("./main.CRFtEMFg.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]))),await i,e()),customElements.get("eox-jsonform")||([i,e]=W(()=>H(()=>import("./main.D_5f54dD.js"),__vite__mapDeps([18,1,2,19,15,20,21,22,9,23]))),await i,e());const r=t,s=G(()=>!!r.layoutTarget&&!!r.layoutIcon),{selectedCompareStac:n,selectedStac:o,colormapRegistry:a}=yt(vt()),l=G(()=>r.map==="second"?X.value!==null&&n.value!==null:J.value!==null&&o.value!==null),c=r.map==="second"?wt:xt,h=r.map==="second"?X:J,d=async b=>{var z,q;const{layer:y,datetime:F}=b.detail;if((z=y.get("layerDatetime"))!=null&&z.sliceMap)return;const E=K(c,y.get("id"));if(!E)return;const{layers:x,projections:S}=await E.updateLayers(F,y.get("id"),((q=h.value)==null?void 0:q.layers)??[]);if(!x.length)return;await Tt(S);const v=x.find(k=>{var M;return((M=k==null?void 0:k.properties)==null?void 0:M.id)===Ct}),j=(v==null?void 0:v.type)==="Group"?v.layers:void 0;j!=null&&j.length&&(j.forEach(k=>{k.properties.layerControlExpand=!0,k.properties.layerControlToolsExpand=!0}),await Z(h.value,x,r.map==="second"?"compareLayertime:updated":"layertime:updated"))};let u;const g=b=>{clearTimeout(u),u=setTimeout(()=>{d(b)},r.datetimeDebounce)},_=b=>{var x,S,v;me(b.detail.layer,b.detail.jsonformValue,h.value),be(b.detail.layer,b.detail.jsonformValue);const{layer:y,jsonformValue:F}=b.detail,E=(S=(x=y.get("_jsonDefinition"))==null?void 0:x.properties)==null?void 0:S.layerConfig;(v=K(c,y.get("id")))==null||v.persistLayerConfig(E,F),r.map==="second"?kt.value=b.detail.jsonformValue:_t.value=b.detail.jsonformValue};return(b,y)=>(A(),$("span",Le,[l.value?(A(),$("eox-layercontrol",{key:L(h),style:pt(t.cssVars),for:L(h),".tools":t.tools,".colormapRegistry":L(a),".showLayerZoomState":!0,".customEditorInterfaces":L(je),toolsAsList:"true","onDatetime:updated":g,"on:layerConfig:change":_},[ft("span",De,[t.title?(A(),$("h4",Fe,mt(t.title),1)):V("v-if",!0),s.value?(A(),gt(At,{key:1,target:t.layoutTarget,icon:t.layoutIcon},null,8,["target","icon"])):V("v-if",!0)])],44,Oe)):V("v-if",!0)]))}},[["styles",[Ae]],["__scopeId","data-v-3400e71e"]]);export{hi as default};
