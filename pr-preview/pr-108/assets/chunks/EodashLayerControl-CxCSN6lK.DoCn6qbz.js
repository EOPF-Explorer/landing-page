const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/main.BHf_YhEi.js","assets/chunks/lit-element.CBn2YVps.js","assets/chunks/when.BR7zwNJC.js","assets/chunks/map.B6QQHL2e.js","assets/chunks/addCommonStyleSheet.BL0mKR1r.js","assets/chunks/XYZ.BZLCURoo.js","assets/chunks/proj.DtkH-SLQ.js","assets/chunks/commonjsHelpers.BosuxZz1.js","assets/chunks/index.BUIxO2d3.js","assets/chunks/getElement.COiK8z0h.js","assets/chunks/main.iyUhaqfz.js","assets/chunks/browser.DSw-IUFq.js","assets/chunks/toolcool-range-slider.min.BBXDELo7.js","assets/chunks/utils.BJtOAKhC.js","assets/chunks/index.CxojoGlr.js","assets/chunks/index.BIJR-IiI.js"])))=>i.map(i=>d[i]);
var ot=Object.defineProperty;var lt=(n,t,e)=>t in n?ot(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var w=(n,t,e)=>lt(n,typeof t!="symbol"?t+"":t,e);import{aD as U,a1 as M,o as C,c as F,K as ct,k as E,j as ht,t as dt,e as L,b as ut,h as q,p as pt}from"./framework.W58BR3_i.js";import{f as ft,u as mt,E as gt,b as S,w as _,i as yt,a as bt}from"./lit-element.CBn2YVps.js";import{s as kt,l as O,i as I,a as wt,b as X,q as vt,t as xt,o as _t,p as Tt,f as Ct}from"./sequential.BdGG0OD6.js";import{a as Et,i as St,t as At}from"./map.B6QQHL2e.js";import"./main.4as2RmBs.js";import{_ as jt,ak as Ft,u as Lt,aq as Dt,ap as Ot,aQ as W,aR as H,bG as It,bH as Vt,bu as $t,bo as Rt,bI as Bt,G as Pt}from"./eo-dash.CGP4fRNq.js";import Nt from"./EodashLayoutSwitcher-Ci9J_ZX5.BpYTQiBX.js";import{e as zt}from"./mdi.C-iBXNyW.js";import"./addCommonStyleSheet.BL0mKR1r.js";import"./dayjs.min.lahZ2SOr.js";import"./commonjsHelpers.BosuxZz1.js";import"./when.BR7zwNJC.js";import"./toolcool-range-slider.min.BBXDELo7.js";import"./getElement.COiK8z0h.js";import"./index.BIJR-IiI.js";import"./migrate.DkSLOl0d.js";import"./main.BHf_YhEi.js";import"./XYZ.BZLCURoo.js";import"./proj.DtkH-SLQ.js";import"./index.BUIxO2d3.js";import"./VTooltip-CJpaHPhm.BqAmEapf.js";import"./forwardRefs-Kl3OtrB6.CTSgYcUI.js";import"./transition-M1WmWTSn.BLgUeisG.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ut=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt={attribute:!0,type:String,converter:mt,reflect:!1,hasChanged:ft},qt=(n=Mt,t,e)=>{const{kind:i,metadata:a}=e;let s=globalThis.litPropertyMetadata.get(a);if(s===void 0&&globalThis.litPropertyMetadata.set(a,s=new Map),i==="setter"&&((n=Object.create(n)).wrapped=!0),s.set(e.name,n),i==="accessor"){const{name:r}=e;return{set(o){const l=t.get.call(this);t.set.call(this,o),this.requestUpdate(r,l,n,!0,o)},init(o){return o!==void 0&&this.C(r,void 0,n,o),o}}}if(i==="setter"){const{name:r}=e;return function(o){const l=this[r];t.call(this,o),this.requestUpdate(r,l,n,!0,o)}}throw Error("Unsupported decorator location: "+i)};function m(n){return(t,e)=>typeof e=="object"?qt(n,t,e):((i,a,s)=>{const r=a.hasOwnProperty(s);return a.constructor.createProperty(s,i),r?Object.getOwnPropertyDescriptor(a,s):void 0})(n,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wt=(n,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(n,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ht(n,t){return(e,i,a)=>{const s=r=>{var o;return((o=r.renderRoot)==null?void 0:o.querySelector(n))??null};return Wt(e,i,{get(){return s(this)}})}}class Gt{constructor(t){this.cle=t}setColorScale(){switch(this.cle.scaleType){case"continuous":this.setContinousColorScale();break;case"log10":this.setLogColorScale();break;case"discrete":this.setDiscreteColorScale();break;case"threshold":this.setThresholdColorScale();break;case"categorical":this.setCategoricalColorScale();break;default:this.invalidScaleType(this.cle.scaleType)}}setContinousColorScale(){const{interpolator:t,domain:e,range:i}=this.cle;this.colorScale=t?kt(t).domain(e):O().range(i).domain(e).interpolate(I)}setLogColorScale(){const{interpolator:t,domain:e,range:i}=this.cle;this.colorScale=t?wt(t).domain(e):X().range(i).domain(e).interpolate(I)}setDiscreteColorScale(){this.colorScale=vt().domain(this.cle.domain).range(this.cle.range)}setThresholdColorScale(){const t=this.cle.domain;this.colorScale=xt().domain(t.slice(1,t.length-1)).range(this.cle.range)}setCategoricalColorScale(){this.colorScale=_t().domain(this.cle.domain).range(this.cle.range)}invalidScaleType(t){throw new Error(`invalid property scaletype: ${t}.
      Must be one of "categorical", "continuous", "discrete", "threshold".`)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=Et(class extends St{constructor(n){var t;if(super(n),n.type!==At.ATTRIBUTE||n.name!=="class"||((t=n.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(t=>n[t]).join(" ")+" "}update(n,[t]){var i,a;if(this.st===void 0){this.st=new Set,n.strings!==void 0&&(this.nt=new Set(n.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!((i=this.nt)!=null&&i.has(s))&&this.st.add(s);return this.render(t)}const e=n.element.classList;for(const s of this.st)s in t||(e.remove(s),this.st.delete(s));for(const s in t){const r=!!t[s];r===this.st.has(s)||(a=this.nt)!=null&&a.has(s)||(r?(e.add(s),this.st.add(s)):(e.remove(s),this.st.delete(s)))}return gt}});class Xt{constructor(t){this.cle=t}render(){const t=this.cle.titleText?S`<p class="legend-title">${this.cle.titleText}</p>`:"",e={hidden:this.cle.scaleType==="categorical"},i={hidden:this.cle.scaleType!=="categorical","categorical-container":!0};return S`<div
      class="cle-container"
      style="width:${this.cle.width}px; height:auto;"
    >
      ${t}
      <slot name="subtitle"></slot>
      <svg
        class=${D(e)}
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
      <ul class=${D(i)}>
        ${this.renderCategorical()}
      </ul>
      <slot name="footer"></slot>
    </div>`}renderCategorical(){if(this.cle.scaleType!=="categorical")return"";const{markType:t,colorScale:e,domain:i}=this.cle,a={"legend-item":!0,line:t==="line",circle:t==="circle"};return S`${i.map(s=>S`<li
          class=${D(a)}
          style="--color:${e(s)}"
        >
          ${s}
        </li>`)}`}renderContinuous(){var c;if(this.cle.scaleType!=="continuous"&&this.cle.scaleType!=="log10"||this.cle.colorScale===null)return"";const{colorScale:t,marginTop:e,marginLeft:i,marginRight:a,tickSize:s,width:r,range:o}=this.cle,l=this.cle.marginBottom+s,d=this.cle.height+s,h=((c=t.interpolator)==null?void 0:c.call(t))||Tt(I,o);return _`<image
      x=${i}
      y=${e}
      width=${r-a-i}
      height=${d-e-l}
      preserveAspectRatio="none"
      href=${this.getColorRamp(h).toDataURL()}
    ></image>`}renderDiscreteThreshold(){if(this.cle.scaleType!=="discrete"&&this.cle.scaleType!=="threshold")return"";const{tickSize:t,marginTop:e,marginLeft:i,colorScale:a,xScale:s}=this.cle,r=this.cle.height+t,o=this.cle.marginBottom+t,l=a.range(),d=c=>a.invertExtent(c).map(s)[0]||i,h=c=>{let[f,g]=a.invertExtent(c).map(s);return f=f||0,g=g||s.range()[1],g-f};return _`${l.map(c=>_`<rect x=${d(c)} y=${e} width=${h(c)} height=${r-e-o} fill=${c}></rect>`)}`}renderAxis(){if(!this.cle.xScale||this.cle.scaleType==="categorical")return"";const{ticks:t,tickSize:e,tickFormat:i,tickFormatter:a,tickValues:s,xScale:r,marginTop:o}=this.cle,l=this.cle.height+e,d=this.cle.marginBottom+e,h=s!=null&&s.length?s:r.ticks.apply(r,[t,i]),c=Math.max(e,0)+3,f=()=>h.map(g=>_`<g class="tick" transform='translate(${r(g)},0)'>
      <line stroke="currentColor" y2="${e}" y1="${o+d-l}"></line>
      <text fill="currentColor" y="${c}" dy="0.71em">${a(g)}</text>
      </g>`);return _`<g
      class="x-axis"
      transform="translate(0, ${l-d})"
      text-anchor="middle"
    >${f()}</g>`}getColorRamp(t,e=256){const i=document.createElement("canvas");i.setAttribute("height","1"),i.setAttribute("width",`${e}`);const a=i.getContext("2d");for(let s=0;s<e;s++)a.fillStyle=t(s/(e-1)),a.fillRect(s,0,1,1);return i}}const Jt=325,Kt=32,Zt=6,Yt=12,Qt=16,te=12,V=5,ee=6,J=".1f",ie=[0,1],se=["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],ne="Color Legend Element",ae="circle",re="continuous",oe=["domain","range","interpolator","scaleType"],le=["scaleType","ticks","tickSize","tickValues","tickFormat","tickFormatter","domain","range","marginLeft","marginRight","marginBottom","marginTop","width","height"];class ce{constructor(t){this.cle=t}setXScale(){const{scaleType:t,marginLeft:e,width:i,marginRight:a}=this.cle;switch(t){case"continuous":this.xScale=O().domain(this.cle.domain).range([e,i-a]);break;case"log10":this.xScale=X().domain(this.cle.domain).range([e,i-a]).nice();break;case"discrete":case"threshold":this.xScale=O().domain([this.cle.domain[0],this.cle.domain[this.cle.domain.length-1]]).rangeRound([e,i-a]);break;case"categorical":this.xScale=null;break;default:throw new Error(`Unrecognized scaleType: ${t}`)}}handleAxisTicks(){var t,e,i;if(this.cle.scaleType==="log10"&&!this.cle.tickValues)this.cle.tickValues=this.xScale.ticks(this.cle.ticks||V);else if((this.cle.scaleType==="discrete"||this.cle.scaleType==="threshold")&&!this.cle.tickValues){const[a,s]=this.xScale.domain();this.cle.tickValues=[a,...((e=(t=this.cle.colorScale)==null?void 0:t.thresholds)==null?void 0:e.call(t))||this.cle.colorScale.domain(),s]}typeof this.cle.tickFormatter!="function"&&((i=this.cle.tickFormat)!=null&&i.length&&this.cle.scaleType!=="log10"?this.cle.tickFormatter=Ct(this.cle.tickFormat):this.cle.tickFormatter=this.xScale.tickFormat(this.cle.ticks||V,this.cle.tickFormat||J))}}const he=yt`
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
`;var p=function(n,t,e,i){var a=arguments.length,s=a<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,t,e,i);else for(var o=n.length-1;o>=0;o--)(r=n[o])&&(s=(a<3?r(s):a>3?r(t,e,s):r(t,e))||s);return a>3&&s&&Object.defineProperty(t,e,s),s};let u=class extends bt{constructor(){super(...arguments),this.titleText=ne,this.width=Jt,this.height=Kt,this.marginTop=Zt,this.marginRight=Yt,this.marginBottom=Qt,this.marginLeft=te,this.scaleType=re,this.domain=ie,this.range=se,this.markType=ae,this.ticks=V,this.tickFormat=J,this.tickSize=ee,this.colorScaleSetter=new Gt(this),this.axisTickSetter=new ce(this),this.renderer=new Xt(this)}get interpolator(){return this._interpolator}set interpolator(t){if(typeof t=="function"){const e=this.interpolator;this._interpolator=t,this.requestUpdate("interpolator",e)}else throw new Error("interpolator must be a function.")}get tickFormatter(){return this._tickFormatter}set tickFormatter(t){if(typeof t=="function"){const e=this.tickFormatter;this._tickFormatter=t,this.requestUpdate("tickFormatter",e)}else throw new Error("tickFormatter must be a function.")}get colorScale(){return this.colorScaleSetter.colorScale}get xScale(){return this.axisTickSetter.xScale}render(){return this.renderer.render()}willUpdate(t){oe.some(e=>t.has(e))&&this.colorScaleSetter.setColorScale(),le.some(e=>t.has(e))&&(this.axisTickSetter.setXScale(),this.axisTickSetter.handleAxisTicks())}};u.styles=[he];p([m({type:String})],u.prototype,"titleText",void 0);p([m({type:Number})],u.prototype,"width",void 0);p([m({type:Number})],u.prototype,"height",void 0);p([m({type:Number})],u.prototype,"marginTop",void 0);p([m({type:Number})],u.prototype,"marginRight",void 0);p([m({type:Number})],u.prototype,"marginBottom",void 0);p([m({type:Number})],u.prototype,"marginLeft",void 0);p([m({type:String})],u.prototype,"scaleType",void 0);p([m({type:Array})],u.prototype,"domain",void 0);p([m({type:Array})],u.prototype,"range",void 0);p([m({type:String})],u.prototype,"markType",void 0);p([m({type:Number})],u.prototype,"ticks",void 0);p([m({type:String})],u.prototype,"tickFormat",void 0);p([m({type:Number})],u.prototype,"tickSize",void 0);p([m({type:Array})],u.prototype,"tickValues",void 0);p([Ht("svg")],u.prototype,"svg",void 0);p([m({attribute:!1})],u.prototype,"interpolator",null);p([m({attribute:!1})],u.prototype,"tickFormatter",null);u=p([Ut("color-legend")],u);function K(n){return!(n===null||typeof n!="object"||n.nodeType||n===n.window||n.constructor&&!T(n.constructor.prototype,"isPrototypeOf"))}function Z(n){return K(n)?A({},n):Array.isArray(n)?n.map(Z):n}function A(n,...t){return t.forEach(e=>{e&&Object.keys(e).forEach(i=>{e[i]&&K(e[i])?(T(n,i)||(n[i]={}),A(n[i],e[i])):Array.isArray(e[i])?n[i]=Z(e[i]):n[i]=e[i]})}),n}function T(n,t){return n&&Object.prototype.hasOwnProperty.call(n,t)}class de{constructor(t,e){this.defaults=e,this.jsoneditor=t.jsoneditor,this.theme=this.jsoneditor.theme,this.template_engine=this.jsoneditor.template,this.iconlib=this.jsoneditor.iconlib,this.translate=this.jsoneditor.translate||this.defaults.translate,this.translateProperty=this.jsoneditor.translateProperty||this.defaults.translateProperty,this.original_schema=t.schema,this.schema=this.jsoneditor.expandSchema(this.original_schema),this.active=!0,this.isUiOnly=!1,this.options=A({},this.options||{},this.schema.options||{},t.schema.options||{},t),this.enforceConstEnabled=this.options.enforce_const??this.jsoneditor.options.enforce_const,this.formname=this.jsoneditor.options.form_name_root||"root",!t.path&&!this.schema.id&&(this.schema.id=this.formname),this.path=t.path||this.formname,this.formname=t.formname||this.path.replace(/\.([^.]+)/g,"[$1]"),this.parent=t.parent,this.key=this.parent!==void 0?this.path.split(".").slice(this.parent.path.split(".").length).join("."):this.path,this.link_watchers=[],this.watchLoop=!1,this.optInWidget=this.options.opt_in_widget??this.jsoneditor.options.opt_in_widget,t.container&&this.setContainer(t.container),this.registerDependencies()}onChildEditorChange(t,e){this.onChange(!0,!1,e)}notify(){this.path&&this.jsoneditor.notifyWatchers(this.path)}change(t){this.parent?this.parent.onChildEditorChange(this,t):this.jsoneditor&&this.jsoneditor.onChange(t)}onChange(t,e,i){this.notify(),e||this.watch_listener&&this.watch_listener(),t&&this.change(i)}register(){if(this.jsoneditor.registerEditor(this),this.input&&!this.label){const t=this.getTitle()||this.formname;this.input.setAttribute("aria-label",t)}this.onChange()}unregister(){this.jsoneditor&&this.jsoneditor.unregisterEditor(this)}getNumColumns(){return 12}isActive(){return this.active}activate(){this.active=!0,this.optInCheckbox.checked=!0,this.enable(),this.change()}deactivate(){this.isRequired()||(this.active=!1,this.optInCheckbox.checked=!1,this.disable(),this.change())}registerDependencies(){this.dependenciesFulfilled=!0;const t=this.options.dependencies;t&&Object.keys(t).forEach(e=>{let i;e.startsWith(this.jsoneditor.root.path)?i=e:(i=this.path.split("."),i[i.length-1]=e,i=i.join(".")),this.jsoneditor.watch(i,()=>{this.evaluateDependencies()})})}evaluateDependencies(){const t=this.container||this.control;if(!t||this.jsoneditor===null)return;const e=this.options.dependencies;if(!e)return;const i=this.dependenciesFulfilled;this.dependenciesFulfilled=!0,Object.keys(e).forEach(s=>{let r;s.startsWith(this.jsoneditor.root.path)?r=s:(r=this.path.split("."),r[r.length-1]=s,r=r.join("."));const l=e[s];this.checkDependency(r,l)}),this.dependenciesFulfilled!==i&&this.notify();let a=this.dependenciesFulfilled?"block":"none";this.options.hidden&&(a="none"),t.tagName==="TD"?Object.keys(t.childNodes).forEach(s=>t.childNodes[s].style.display=a):t.style.display=a}checkDependency(t,e){if(this.path===t||this.jsoneditor===null)return;const i=this.jsoneditor.getEditor(t),a=i?i.getValue():void 0;!i||!i.dependenciesFulfilled||a===void 0||a===null?this.dependenciesFulfilled=!1:Array.isArray(e)?this.dependenciesFulfilled=e.some(s=>{if(JSON.stringify(a)===JSON.stringify(s))return!0}):typeof e=="object"?typeof a!="object"?this.dependenciesFulfilled=e===a:Object.keys(e).some(s=>{if(!T(e,s))return!1;if(!T(a,s)||e[s]!==a[s])return this.dependenciesFulfilled=!1,!0}):typeof e=="string"||typeof e=="number"?this.dependenciesFulfilled=this.dependenciesFulfilled&&a===e:typeof e=="boolean"&&(e?this.dependenciesFulfilled=this.dependenciesFulfilled&&(a||a.length>0):this.dependenciesFulfilled=this.dependenciesFulfilled&&(!a||a.length===0))}setContainer(t){this.container=t,this.setContainerAttributes(),this.schema.id&&this.container.setAttribute("data-schemaid",this.schema.id),this.schema.type&&typeof this.schema.type=="string"&&this.container.setAttribute("data-schematype",this.schema.type),this.container.setAttribute("data-schemapath",this.path)}setOptInCheckbox(){let t;this.optInWidget==="switch"?t=this.theme.getOptInSwitch(this.formname):t=this.theme.getOptInCheckbox(this.formname),this.optInCheckbox=t.checkbox,this.optInContainer=t.container,this.optInCheckbox.addEventListener("click",()=>{this.isActive()?this.deactivate():this.activate()});const e=this.jsoneditor.options.show_opt_in,i=typeof this.parent.options.show_opt_in<"u",a=i&&this.parent.options.show_opt_in===!0,s=i&&this.parent.options.show_opt_in===!1;(a||!s&&e||!i&&e)&&this.parent&&this.parent.schema.type==="object"&&!this.isRequired()&&this.header&&(this.header.insertBefore(this.optInContainer,this.header.firstChild),this.optInAppended=!0)}preBuild(){}build(){}postBuild(){this.setupWatchListeners(),this.addLinks(),this.register(),this.setValue(this.getDefault(),!0),this.updateHeaderText(),this.onWatchedFieldChange(),this.options.titleHidden&&(this.theme.visuallyHidden(this.label),this.theme.visuallyHidden(this.header)),this.enforceConstEnabled&&this.schema.const&&this.disable()}setupWatchListeners(){if(this.watched={},this.schema.vars&&(this.schema.watch=this.schema.vars),this.watched_values={},this.watch_listener=()=>{this.refreshWatchedFieldValues()&&this.onWatchedFieldChange()},T(this.schema,"watch")){let t,e,i,a,s;const r=this.container.getAttribute("data-schemapath");Object.keys(this.schema.watch).forEach(o=>{if(t=this.schema.watch[o],Array.isArray(t)){if(t.length<2)return;e=[t[0]].concat(t[1].split("."))}else e=t.split("."),this.theme.closest(this.container,`[data-schemaid="${e[0]}"]`)||e.unshift("#");if(i=e.shift(),i==="#"&&(i=this.jsoneditor.schema.id||this.jsoneditor.root.formname),a=this.theme.closest(this.container,`[data-schemaid="${i}"]`),!a)throw new Error(`Could not find ancestor node with id ${i}`);s=`${a.getAttribute("data-schemapath")}.${e.join(".")}`,r.startsWith(s)&&(this.watchLoop=!0),this.jsoneditor.watch(s,this.watch_listener),this.watched[o]=s})}this.schema.headerTemplate&&(this.header_template=this.jsoneditor.compileTemplate(this.schema.headerTemplate,this.template_engine))}addLinks(){if(!this.no_link_holder&&(this.link_holder=this.theme.getLinksHolder(),typeof this.description<"u"?this.description.parentNode.insertBefore(this.link_holder,this.description):this.container.appendChild(this.link_holder),this.schema.links))for(let t=0;t<this.schema.links.length;t++)this.addLink(this.getLink(this.schema.links[t]))}onMove(){}getButton(t,e,i,a=[]){const s=`json-editor-btn-${e}`;this.iconlib?e=this.iconlib.getIcon(e):e=null,t=this.translate(t,a),i=this.translate(i,a),!e&&i&&(t=i,i=null);const r=this.theme.getButton(t,e,i);return r.classList.add(s),r}setButtonText(t,e,i,a,s=[]){return this.iconlib?i=this.iconlib.getIcon(i):i=null,e=this.translate(e,s),a=this.translate(a,s),!i&&a&&(e=a,a=null),this.theme.setButtonText(t,e,i,a)}addLink(t){this.link_holder&&this.link_holder.appendChild(t)}getLink(t){let e,i;const s=(t.mediaType||"application/javascript").split("/")[0],r=this.jsoneditor.compileTemplate(t.href,this.template_engine),o=this.jsoneditor.compileTemplate(t.rel?t.rel:t.href,this.template_engine);let l=null;if(t.download&&(l=t.download),l&&l!==!0&&(l=this.jsoneditor.compileTemplate(l,this.template_engine)),s==="image"){e=this.theme.getBlockLinkHolder(),i=document.createElement("a"),i.setAttribute("target","_blank");const d=document.createElement("img");this.theme.createImageLink(e,i,d),this.link_watchers.push(h=>{const c=r(h),f=o(h);i.setAttribute("href",c),i.setAttribute("title",f||c),d.setAttribute("src",c)})}else if(["audio","video"].includes(s)){e=this.theme.getBlockLinkHolder(),i=this.theme.getBlockLink(),i.setAttribute("target","_blank");const d=document.createElement(s);d.setAttribute("controls","controls"),this.theme.createMediaLink(e,i,d),this.link_watchers.push(h=>{const c=r(h),f=o(h);i.setAttribute("href",c),i.textContent=f||c,d.setAttribute("src",c)})}else i=e=this.theme.getBlockLink(),e.setAttribute("target","_blank"),e.textContent=t.rel,e.style.display="none",this.link_watchers.push(d=>{const h=r(d),c=o(d);h&&(e.style.display=""),e.setAttribute("href",h),e.textContent=c||h});return l&&i&&(l===!0?i.setAttribute("download",""):this.link_watchers.push(d=>{i.setAttribute("download",l(d))})),t.class&&t.class.split(" ").forEach(h=>{i.classList.add(h)}),e}refreshWatchedFieldValues(){if(!this.watched_values)return;const t={};let e=!1;return this.watched&&Object.keys(this.watched).forEach(i=>{const a=this.jsoneditor.getEditor(this.watched[i]),s=a?a.getValue():null;this.watched_values[i]!==s&&(e=!0),t[i]=s}),t.self=this.getValue(),this.watched_values.self!==t.self&&(e=!0),this.watched_values=t,e}getWatchedFieldValues(){return this.watched_values}updateHeaderText(){if(this.header){const t=this.getHeaderText();if(this.header.children.length){for(let e=0;e<this.header.childNodes.length;e++)if(this.header.childNodes[e].nodeType===3){this.header.childNodes[e].nodeValue=this.cleanText(t);break}}else window.DOMPurify?this.header.innerHTML=window.DOMPurify.sanitize(t):this.header.textContent=this.cleanText(t)}}purify(t){return typeof t!="string"||(window.DOMPurify?t=window.DOMPurify.sanitize(t):t=this.cleanText(t)),t}getHeaderText(t){return this.header_text?this.header_text:t?this.translateProperty(this.schema.title):this.getTitle()}getPathDepth(){return this.path.split(".").length}cleanText(t){const e=document.createElement("div");return e.innerHTML=t,e.textContent||e.innerText}onWatchedFieldChange(){let t;if(this.header_template){t=A(this.getWatchedFieldValues(),{key:this.key,i:this.key,i0:this.key*1,i1:this.key*1+1,title:this.getTitle()}),this.editors&&Object.keys(this.editors).length&&(t.properties={},Object.keys(this.editors).forEach(i=>{const a=this.editors[i];if(a.schema&&a.schema.enum&&a.schema.options&&a.schema.options.enum_titles){const s=a.schema.enum.indexOf(a.value),r=a.options.enum_titles[s];t.properties[i]={enumTitle:r}}}));const e=this.header_template(t);e!==this.header_text&&(this.header_text=e,this.updateHeaderText(),this.notify())}if(this.link_watchers.length){t=this.getWatchedFieldValues();for(let e=0;e<this.link_watchers.length;e++)this.link_watchers[e](t)}}setValue(t){t=this.applyConstFilter(t),this.value=t}applyConstFilter(t){return this.enforceConstEnabled&&typeof this.schema.const<"u"&&(t=this.schema.const),t}getValue(){if(this.dependenciesFulfilled)return this.value}refreshValue(){}getChildEditors(){return!1}destroy(){this.unregister(this),this.watched&&Object.values(this.watched).forEach(t=>this.jsoneditor.unwatch(t,this.watch_listener)),this.watched=null,this.watched_values=null,this.watch_listener=null,this.header_text=null,this.header_template=null,this.value=null,this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container),this.container=null,this.jsoneditor=null,this.schema=null,this.path=null,this.key=null,this.parent=null}isDefaultRequired(){return this.isRequired()||!!this.jsoneditor.options.use_default_values}getDefault(){if(this.enforceConstEnabled&&this.schema.const)return this.schema.const;if(typeof this.schema.default<"u")return this.schema.default;if(typeof this.schema.enum<"u")return this.schema.enum[0];let t=this.schema.type||this.schema.oneOf;if(t&&Array.isArray(t)&&(t=t[0]),t&&typeof t=="object"&&(t=t.type),t&&Array.isArray(t)&&(t=t[0]),typeof t=="string"){if(t==="number")return this.isDefaultRequired()?0:void 0;if(t==="boolean")return this.isDefaultRequired()?!1:void 0;if(t==="integer")return this.isDefaultRequired()?0:void 0;if(t==="string")return this.isDefaultRequired()?"":void 0;if(t==="null")return null;if(t==="object")return{};if(t==="array")return[]}}getTitle(){return this.translateProperty(this.schema.title||this.key||this.formname)}enable(){this.disabled=!1}disable(){this.disabled=!0}isEnabled(){return!this.disabled}isRequired(){return typeof this.schema.required=="boolean"?this.schema.required:this.parent&&this.parent.schema&&Array.isArray(this.parent.schema.required)?this.parent.schema.required.includes(this.key):!!this.jsoneditor.options.required_by_default}getDisplayText(t){const e=[],i={};t.forEach(s=>{s.title&&(i[s.title]=i[s.title]||0,i[s.title]++),s.description&&(i[s.description]=i[s.description]||0,i[s.description]++),s.format&&(i[s.format]=i[s.format]||0,i[s.format]++),s.type&&(i[s.type]=i[s.type]||0,i[s.type]++)}),t.forEach(s=>{let r;typeof s=="string"?r=s:s.title&&i[s.title]<=1?r=s.title:s.format&&i[s.format]<=1?r=s.format:s.type&&i[s.type]<=1?r=s.type:s.description&&i[s.description]<=1?r=s.description:s.title?r=s.title:s.format?r=s.format:s.type?r=s.type:s.description?r=s.description:JSON.stringify(s).length<500?r=JSON.stringify(s):r="type",e.push(r)});const a={};return e.forEach((s,r)=>{a[s]=a[s]||0,a[s]++,i[s]>1&&(e[r]=`${s} ${a[s]}`)}),e}getValidId(t){return t=t===void 0?"":t.toString(),t.replace(/\s+/g,"-")}setInputAttributes(t,e){if(this.schema.options&&this.schema.options.inputAttributes){const i=this.schema.options.inputAttributes,a=["name","type"].concat(t),s=e||this.input;Object.keys(i).forEach(r=>{a.includes(r.toLowerCase())||s.setAttribute(r,i[r])})}}setContainerAttributes(){if(this.schema.options&&this.schema.options.containerAttributes){const t=this.schema.options.containerAttributes,e=["data-schemapath","data-schematype","data-schemaid"];Object.keys(t).forEach(i=>{e.includes(i.toLowerCase())||this.container.setAttribute(i,t[i])})}}expandCallbacks(t,e){const i=this.defaults.callbacks[t];return Object.entries(e).forEach(([a,s])=>{s===Object(s)?e[a]=this.expandCallbacks(t,s):typeof s=="string"&&typeof i=="object"&&typeof i[s]=="function"&&(e[a]=i[s].bind(null,this))}),e}showValidationErrors(t){}}function ue(n,t){var a,s,r,o,l;const e=t==="bands"?(a=n.items)==null?void 0:a.enum:((s=n.options)==null?void 0:s.enum)??n.enum??[],i=t==="bands"?(o=(r=n.items)==null?void 0:r.options)==null?void 0:o.colors:((l=n.options)==null?void 0:l.colors)||[];return i&&i.length===e.length?i:e.map(()=>"#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0"))}function pe(n,t,e){const i=t.indexOf(n);return i!==-1?e[i]:"#000000"}function Y(n,t){const e=document.createElement("div");return e.dataset.band=n,e.textContent=t,e.draggable=!0,e.ondragstart=i=>{var a;(a=i.dataTransfer)==null||a.setData("band",n)},e}function Q(n,t,e){t.forEach((i,a)=>{var o;const s=e[a],r=Y(i,s);(o=n.control)==null||o.appendChild(r)})}function tt(n,t){const e=document.createElement("style");return e.innerHTML=`
    /* Base styles for all band elements */
    [data-band] {
      display: inline-flex;
      border: 1px solid darkgrey;
      border-radius: 50%;
      height: 40px;
      aspect-ratio: 1/1;
      padding: 4px;
      margin: 2px;
      align-items: center;
      justify-content: center;
      cursor: move;
      font-size: 10px;
    }

    /* Band color styles */
    ${n.map(i=>`[data-band="${i}"] { background: ${pe(i,n,t)}; color: black; }`).join(`
`)}

    /* RGB slot styles */
    [data-slot] {
      display: inline-flex;
      width: 50px;
      height: 50px;
      aspect-ratio: 1/1;
      padding: 1px;
      border: 2px solid #666;
      background: #f0f0f0;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      margin: 2px;
      position: relative;
      box-sizing: border-box;
    }
    [data-slot]:hover {
      border-color: #333;
      background: #f9f9f9;
    }
    [data-slot]::before {
      content: attr(data-slot);
      position: absolute;
      font-size: 12px;
      font-weight: bold;
      color: #666;
      z-index: 0;
    }

    /* container */
    .slots-container {
      font-family: monospace;
      font-size: 18px;
      padding: 16px;
      background: #f0f0f0;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin: 8px 0;
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
  `,e}function et(n,t){const e=document.createElement("div");return e.dataset.slot=n,e.ondrop=t,e.ondragover=i=>i.preventDefault(),e}function $(n,t,e){const i=n.querySelector("[data-band]");i&&i.remove();const a=Y(t,e);n.appendChild(a)}function fe(n,t,e,i){var s,r;const a=tt(e,t);(s=n.control)==null||s.appendChild(a),Q(n,e,i),(r=n.control)==null||r.appendChild(document.createElement("hr")),me(n,e,i)}function me(n,t,e){var a;const i=document.createElement("div");i.classList.add("slots-container"),["R","G","B"].forEach((s,r)=>{const l=et(s,d=>{var k;d.preventDefault();const h=(k=d.dataTransfer)==null?void 0:k.getData("band");if(!h)return;const c=t.indexOf(h),f=e[c]||h;$(l,h,f);const g=n.getValue()||[];g[r]=h,n.setValue(g),n.onChange(!0)});ge(l),i.appendChild(l),setTimeout(()=>{const d=n.getValue();if(d!=null&&d[r]){const h=d[r],c=t.indexOf(h),f=e[c]||h;h&&$(l,h,f)}})}),(a=n.control)==null||a.appendChild(i)}function ge(n){switch(n.style.border="2px dashed",n.dataset.slot){case"R":{n.style.borderColor="#F88",n.style.background="#FEE";break}case"G":{n.style.borderColor="#8F8",n.style.background="#EFE";break}case"B":{n.style.borderColor="#88F",n.style.background="#EEF";break}}}const R=/\{\{([^}]+)\}\}/g;function ye(n,t,e,i){var o,l,d;const a=n.schema.formulaTemplate||"{{A}}",s=(o=n.schema.options)==null?void 0:o.defaultVariables;s&&!Object.keys(n.variableValues??{}).length&&(n.variableValues={...s});const r=tt(e,t);(l=n.control)==null||l.appendChild(r),Q(n,e,i),(d=n.control)==null||d.appendChild(document.createElement("hr")),ke(n,a,e,i),n.regenerate=()=>{n.value=it(n),n.onChange(!0)}}function be(n,t){var i;const e=((i=n.getWatchedFieldValues)==null?void 0:i.call(n))??{};return t.replace(R,(a,s)=>{const r=e[s.trim()];return typeof r=="string"?r:a})}function it(n){const t=n.schema.formulaTemplate||"{{A}}",e=n.variableValues||{},i=t.replace(R,(a,s)=>e[s.trim()]||a);return be(n,i)}function ke(n,t,e,i){var r;const a=document.createElement("div");a.classList.add("slots-container"),n.variableSlots={},t.split(/(\{\{[^}]+\}\})/).forEach(o=>{if(!o)return;if(!o.match(R)){if(o=o.trim(),o){const h=document.createElement("span");h.classList.add("formula-text"),h.textContent=o,a.appendChild(h)}return}const l=o.replace(/[{}]/g,"").trim(),d=et(l,h=>{var k;h.preventDefault();const c=(k=h.dataTransfer)==null?void 0:k.getData("band");if(!c)return;const f=e.indexOf(c),g=i[f]||c;n.variableValues[l]=c,st(n,l,c,g),n.value=it(n),n.onChange(!0)});a.appendChild(d),n.variableSlots[l]||(n.variableSlots[l]=[]),n.variableSlots[l].push(d)}),(r=n.control)==null||r.appendChild(a),setTimeout(()=>{we(n)})}function we(n){n.variableValues&&n.variableSlots&&Object.keys(n.variableValues).forEach(t=>{var o;const e=n.variableValues[t],i=n.bands||n.schema.enum||[],a=n.bandTitles||((o=n.schema.options)==null?void 0:o.enum_titles)||i,s=i.indexOf(e),r=a[s]||e;st(n,t,e,r)})}function st(n,t,e,i){n.variableSlots&&n.variableSlots[t]&&n.variableSlots[t].forEach(a=>{$(a,e,i)})}class G extends de{constructor(){super(...arguments);w(this,"variableSlots",{});w(this,"variableValues",{});w(this,"bands",[]);w(this,"bandTitles",[]);w(this,"colors",[]);w(this,"regenerate")}build(){var i,a,s,r,o,l;super.build();const e=this.schema.format||"bands";this.bands=e==="bands"?(i=this.schema.items)==null?void 0:i.enum:((a=this.schema.options)==null?void 0:a.enum)??this.schema.enum??[],this.bandTitles=e==="bands"?(r=(s=this.schema.items)==null?void 0:s.options)==null?void 0:r.enum_titles:this.schema.options.enum_titles||this.bands,this.colors=ue(this.schema,e),this.control=document.createElement("div"),this.control.classList.add("form-control"),e==="bands"?fe(this,this.colors,this.bands,this.bandTitles):e==="bands-arithmetic"&&ye(this,this.colors,this.bands,this.bandTitles),this.label=document.createElement("span"),this.label.classList.add("je-header"),this.label.textContent=this.schema.title??"",(o=this.container)==null||o.appendChild(this.label),(l=this.container)==null||l.appendChild(this.control)}onWatchedFieldChange(){var e;super.onWatchedFieldChange(),(e=this.regenerate)==null||e.call(this)}}const ve=[{type:"array",format:"bands",func:G},{type:"string",format:"bands-arithmetic",func:G}],xe="eox-layercontrol[data-v-8c6e0291]{overflow:auto}",_e={class:"d-flex flex-column"},Te=["for",".colormapRegistry",".customEditorInterfaces"],Ce={slot:"layerstitle",class:"d-flex justify-space-between ma-2 pa-2 flex-shrink-0"},Ee={key:0},Se={__name:"EodashLayerControl",props:{map:{type:String,default:"first"},tools:{type:Array,default:()=>["datetime","info","config","legend","opacity"]},title:{type:[String,Boolean],default:"Layers"},cssVars:{type:Object,default:{}},layoutIcon:{type:String,default:zt},layoutTarget:{type:String}},async setup(n){let t,e;customElements.get("eox-layercontrol")||([t,e]=U(()=>M(()=>import("./main.BHf_YhEi.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))),await t,e()),customElements.get("eox-jsonform")||([t,e]=U(()=>M(()=>import("./main.iyUhaqfz.js"),__vite__mapDeps([10,1,2,11,7,12,13,14,4,15]))),await t,e());const i=n,a={tools:i.tools,style:i.cssVars},s=q(()=>!!i.layoutTarget&&!!i.layoutIcon),{selectedCompareStac:r,selectedStac:o,colormapRegistry:l}=Ft(Lt()),d=q(()=>i.map==="second"?W.value!==null&&r.value!==null:H.value!==null&&o.value!==null),h=i.map==="second"?Dt:Ot,c=i.map==="second"?W:H,f=pt(null),g=async y=>{var P,N;const{layer:j,datetime:rt}=y.detail,B=await Bt(h,j);let b=[];if(B&&(b=await B.updateLayerJson(rt,j.get("id"),((P=c.value)==null?void 0:P.layers)??[])),!(b!=null&&b.length))return;const v=(N=b==null?void 0:b.find(x=>{var z;return((z=x==null?void 0:x.properties)==null?void 0:z.id)==="AnalysisGroup"}))==null?void 0:N.layers;v!=null&&v.length&&(v==null||v.forEach(x=>{x.properties.layerControlExpand=!0,x.properties.layerControlToolsExpand=!0}),c.value.layers=b,await Pt(i.map==="second"?"compareLayertime:updated":"layertime:updated",c.value,b))};let k;const nt=y=>{clearTimeout(k),k=setTimeout(()=>{g(y)},500)},at=y=>{It(y.detail.layer,y.detail.jsonformValue),Vt(y.detail.layer,y.detail.jsonformValue),i.map==="second"?$t.value=y.detail.jsonformValue:Rt.value=y.detail.jsonformValue};return(y,j)=>(C(),F("span",_e,[d.value?(C(),F("eox-layercontrol",ct({key:E(c)},a,{for:E(c),".colormapRegistry":E(l),".showLayerZoomState":!0,".customEditorInterfaces":E(ve),"onDatetime:updated":nt,toolsAsList:"true",ref_key:"eoxLayercontrol",ref:f,"on:layerConfig:change":at}),[ht("span",Ce,[n.title?(C(),F("h4",Ee,dt(n.title),1)):L("v-if",!0),s.value?(C(),ut(Nt,{key:1,target:n.layoutTarget,icon:n.layoutIcon},null,8,["target","icon"])):L("v-if",!0)])],48,Te)):L("v-if",!0)]))}},Qe=jt(Se,[["styles",[xe]],["__scopeId","data-v-8c6e0291"]]);export{Qe as default};
