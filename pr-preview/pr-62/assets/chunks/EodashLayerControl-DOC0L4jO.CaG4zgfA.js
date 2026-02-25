const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/main.a3EU58W3.js","assets/chunks/lit-element.CBn2YVps.js","assets/chunks/when.BR7zwNJC.js","assets/chunks/repeat.Duc9p3Ra.js","assets/chunks/directive.CvdRHFdJ.js","assets/chunks/directive-helpers.Bj3rQkfn.js","assets/chunks/unsafe-html.C2DIGSw-.js","assets/chunks/map.DiiNQ3pp.js","assets/chunks/commonjsHelpers.BosuxZz1.js","assets/chunks/index.BUIxO2d3.js","assets/chunks/main.BK-iEy3Z.js","assets/chunks/browser.BIxSbS3i.js","assets/chunks/toolcool-range-slider.min.BBXDELo7.js","assets/chunks/utils.BJtOAKhC.js","assets/chunks/index.CxojoGlr.js","assets/chunks/index.BIJR-IiI.js"])))=>i.map(i=>d[i]);
var st=Object.defineProperty;var nt=(n,t,e)=>t in n?st(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var w=(n,t,e)=>nt(n,typeof t!="symbol"?t+"":t,e);import{aC as B,a5 as P,o as C,c as j,K as rt,k as F,j as ot,t as at,e as L,b as lt,h as N,p as ct}from"./framework.-yi2pkQ4.js";import{f as ht,u as dt,E as ut,b as E,w as _,i as ft,a as pt}from"./lit-element.CBn2YVps.js";import{s as mt,l as O,i as q,q as gt,t as yt,o as bt,p as kt,f as vt}from"./sequential.BT5PQCvq.js";import{e as wt,i as xt,t as _t}from"./directive.CvdRHFdJ.js";import"./main.BYiQqjEO.js";import{_ as Tt,af as Ct,u as Et,al as St,ak as At,aL as z,aM as M,bh as jt,bg as Ft,br as Lt}from"./eo-dash.DckP5olI.js";import Dt from"./EodashLayoutSwitcher-BZBaS-Bp.BHFaaj1G.js";import{e as Ot}from"./mdi.CnJQHbhh.js";import"./addCommonStyleSheet.BN-d4VcA.js";import"./dayjs.min.Ba62AOpW.js";import"./commonjsHelpers.BosuxZz1.js";import"./when.BR7zwNJC.js";import"./map.DiiNQ3pp.js";import"./toolcool-range-slider.min.BBXDELo7.js";import"./getElement.CdRlZPdn.js";import"./index.BIJR-IiI.js";import"./item.Bx-rtsOD.js";import"./VTooltip-WpXO7799.B3F1YfG5.js";import"./forwardRefs-BycDBi0f.DclkY7QX.js";import"./transition-C72kFE6R.Cz1a1e7R.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t={attribute:!0,type:String,converter:dt,reflect:!1,hasChanged:ht},Rt=(n=$t,t,e)=>{const{kind:i,metadata:r}=e;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),i==="setter"&&((n=Object.create(n)).wrapped=!0),s.set(e.name,n),i==="accessor"){const{name:o}=e;return{set(a){const c=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,c,n,!0,a)},init(a){return a!==void 0&&this.C(o,void 0,n,a),a}}}if(i==="setter"){const{name:o}=e;return function(a){const c=this[o];t.call(this,a),this.requestUpdate(o,c,n,!0,a)}}throw Error("Unsupported decorator location: "+i)};function m(n){return(t,e)=>typeof e=="object"?Rt(n,t,e):((i,r,s)=>{const o=r.hasOwnProperty(s);return r.constructor.createProperty(s,i),o?Object.getOwnPropertyDescriptor(r,s):void 0})(n,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vt=(n,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(n,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Bt(n,t){return(e,i,r)=>{const s=o=>{var a;return((a=o.renderRoot)==null?void 0:a.querySelector(n))??null};return Vt(e,i,{get(){return s(this)}})}}class Pt{constructor(t){this.cle=t}setColorScale(){switch(this.cle.scaleType){case"continuous":this.setContinousColorScale();break;case"discrete":this.setDiscreteColorScale();break;case"threshold":this.setThresholdColorScale();break;case"categorical":this.setCategoricalColorScale();break;default:this.invalidScaleType(this.cle.scaleType)}}setContinousColorScale(){const{interpolator:t,domain:e,range:i}=this.cle;this.colorScale=t?mt(t).domain(e):O().range(i).domain(e).interpolate(q)}setDiscreteColorScale(){this.colorScale=gt().domain(this.cle.domain).range(this.cle.range)}setThresholdColorScale(){const t=this.cle.domain;this.colorScale=yt().domain(t.slice(1,t.length-1)).range(this.cle.range)}setCategoricalColorScale(){this.colorScale=bt().domain(this.cle.domain).range(this.cle.range)}invalidScaleType(t){throw new Error(`invalid property scaletype: ${t}.
      Must be one of "categorical", "continuous", "discrete", "threshold".`)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=wt(class extends xt{constructor(n){var t;if(super(n),n.type!==_t.ATTRIBUTE||n.name!=="class"||((t=n.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(t=>n[t]).join(" ")+" "}update(n,[t]){var i,r;if(this.st===void 0){this.st=new Set,n.strings!==void 0&&(this.nt=new Set(n.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!((i=this.nt)!=null&&i.has(s))&&this.st.add(s);return this.render(t)}const e=n.element.classList;for(const s of this.st)s in t||(e.remove(s),this.st.delete(s));for(const s in t){const o=!!t[s];o===this.st.has(s)||(r=this.nt)!=null&&r.has(s)||(o?(e.add(s),this.st.add(s)):(e.remove(s),this.st.delete(s)))}return ut}});class Nt{constructor(t){this.cle=t}render(){const t=this.cle.titleText?E`<p class="legend-title">${this.cle.titleText}</p>`:"",e={hidden:this.cle.scaleType==="categorical"},i={hidden:this.cle.scaleType!=="categorical","categorical-container":!0};return E`<div
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
    </div>`}renderCategorical(){if(this.cle.scaleType!=="categorical")return"";const{markType:t,colorScale:e,domain:i}=this.cle,r={"legend-item":!0,line:t==="line",circle:t==="circle"};return E`${i.map(s=>E`<li
          class=${D(r)}
          style="--color:${e(s)}"
        >
          ${s}
        </li>`)}`}renderContinuous(){var h;if(this.cle.scaleType!=="continuous"||this.cle.colorScale===null)return"";const{colorScale:t,marginTop:e,marginLeft:i,marginRight:r,tickSize:s,width:o,range:a}=this.cle,c=this.cle.marginBottom+s,d=this.cle.height+s,l=((h=t.interpolator)==null?void 0:h.call(t))||kt(q,a);return _`<image
      x=${i}
      y=${e}
      width=${o-r-i}
      height=${d-e-c}
      preserveAspectRatio="none"
      href=${this.getColorRamp(l).toDataURL()}
    ></image>`}renderDiscreteThreshold(){if(this.cle.scaleType!=="discrete"&&this.cle.scaleType!=="threshold")return"";const{tickSize:t,marginTop:e,marginLeft:i,colorScale:r,xScale:s}=this.cle,o=this.cle.height+t,a=this.cle.marginBottom+t,c=r.range(),d=h=>r.invertExtent(h).map(s)[0]||i,l=h=>{let[p,g]=r.invertExtent(h).map(s);return p=p||0,g=g||s.range()[1],g-p};return _`${c.map(h=>_`<rect x=${d(h)} y=${e} width=${l(h)} height=${o-e-a} fill=${h}></rect>`)}`}renderAxis(){if(!this.cle.xScale||this.cle.scaleType==="categorical")return"";const{ticks:t,tickSize:e,tickFormat:i,tickFormatter:r,tickValues:s,xScale:o,marginTop:a}=this.cle,c=this.cle.height+e,d=this.cle.marginBottom+e,l=s!=null&&s.length?s:o.ticks.apply(o,[t,i]),h=Math.max(e,0)+3,p=()=>l.map(g=>_`<g class="tick" transform='translate(${o(g)},0)'>
      <line stroke="currentColor" y2="${e}" y1="${a+d-c}"></line>
      <text fill="currentColor" y="${h}" dy="0.71em">${r(g)}</text>
      </g>`);return _`<g
      class="x-axis"
      transform="translate(0, ${c-d})"
      text-anchor="middle"
    >${p()}</g>`}getColorRamp(t,e=256){const i=document.createElement("canvas");i.setAttribute("height","1"),i.setAttribute("width",`${e}`);const r=i.getContext("2d");for(let s=0;s<e;s++)r.fillStyle=t(s/(e-1)),r.fillRect(s,0,1,1);return i}}const zt=325,Mt=32,Ut=6,qt=12,Ht=16,Wt=12,H=5,Gt=6,W=".1f",Xt=[0,1],Jt=["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],Kt="Color Legend Element",Yt="circle",Zt="continuous",Qt=["domain","range","interpolator","scaleType"],te=["scaleType","ticks","tickSize","tickValues","tickFormat","tickFormatter","domain","range","marginLeft","marginRight","marginBottom","marginTop","width","height"];class ee{constructor(t){this.cle=t}setXScale(){const{scaleType:t,marginLeft:e,width:i,marginRight:r}=this.cle;switch(t){case"continuous":this.xScale=O().domain(this.cle.domain).range([e,i-r]);break;case"discrete":case"threshold":this.xScale=O().domain([this.cle.domain[0],this.cle.domain[this.cle.domain.length-1]]).rangeRound([e,i-r]);break;case"categorical":this.xScale=null;break;default:throw new Error(`Unrecognized scaleType: ${t}`)}}handleAxisTicks(){var t,e,i;if((this.cle.scaleType==="discrete"||this.cle.scaleType==="threshold")&&!this.cle.tickValues){const[r,s]=this.xScale.domain();this.cle.tickValues=[r,...((e=(t=this.cle.colorScale)==null?void 0:t.thresholds)==null?void 0:e.call(t))||this.cle.colorScale.domain(),s]}typeof this.cle.tickFormatter!="function"&&((i=this.cle.tickFormat)!=null&&i.length?this.cle.tickFormatter=vt(this.cle.tickFormat):this.cle.tickFormatter=this.xScale.tickFormat(this.cle.ticks||H,this.cle.tickFormat||W))}}const ie=ft`
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
`;var f=function(n,t,e,i){var r=arguments.length,s=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,t,e,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(s=(r<3?o(s):r>3?o(t,e,s):o(t,e))||s);return r>3&&s&&Object.defineProperty(t,e,s),s};let u=class extends pt{constructor(){super(...arguments),this.titleText=Kt,this.width=zt,this.height=Mt,this.marginTop=Ut,this.marginRight=qt,this.marginBottom=Ht,this.marginLeft=Wt,this.scaleType=Zt,this.domain=Xt,this.range=Jt,this.markType=Yt,this.ticks=H,this.tickFormat=W,this.tickSize=Gt,this.colorScaleSetter=new Pt(this),this.axisTickSetter=new ee(this),this.renderer=new Nt(this)}get interpolator(){return this._interpolator}set interpolator(t){if(typeof t=="function"){const e=this.interpolator;this._interpolator=t,this.requestUpdate("interpolator",e)}else throw new Error("interpolator must be a function.")}get tickFormatter(){return this._tickFormatter}set tickFormatter(t){if(typeof t=="function"){const e=this.tickFormatter;this._tickFormatter=t,this.requestUpdate("tickFormatter",e)}else throw new Error("tickFormatter must be a function.")}get colorScale(){return this.colorScaleSetter.colorScale}get xScale(){return this.axisTickSetter.xScale}render(){return this.renderer.render()}willUpdate(t){Qt.some(e=>t.has(e))&&this.colorScaleSetter.setColorScale(),te.some(e=>t.has(e))&&(this.axisTickSetter.setXScale(),this.axisTickSetter.handleAxisTicks())}};u.styles=[ie];f([m({type:String})],u.prototype,"titleText",void 0);f([m({type:Number})],u.prototype,"width",void 0);f([m({type:Number})],u.prototype,"height",void 0);f([m({type:Number})],u.prototype,"marginTop",void 0);f([m({type:Number})],u.prototype,"marginRight",void 0);f([m({type:Number})],u.prototype,"marginBottom",void 0);f([m({type:Number})],u.prototype,"marginLeft",void 0);f([m({type:String})],u.prototype,"scaleType",void 0);f([m({type:Array})],u.prototype,"domain",void 0);f([m({type:Array})],u.prototype,"range",void 0);f([m({type:String})],u.prototype,"markType",void 0);f([m({type:Number})],u.prototype,"ticks",void 0);f([m({type:String})],u.prototype,"tickFormat",void 0);f([m({type:Number})],u.prototype,"tickSize",void 0);f([m({type:Array})],u.prototype,"tickValues",void 0);f([Bt("svg")],u.prototype,"svg",void 0);f([m({attribute:!1})],u.prototype,"interpolator",null);f([m({attribute:!1})],u.prototype,"tickFormatter",null);u=f([It("color-legend")],u);function G(n){return!(n===null||typeof n!="object"||n.nodeType||n===n.window||n.constructor&&!T(n.constructor.prototype,"isPrototypeOf"))}function X(n){return G(n)?S({},n):Array.isArray(n)?n.map(X):n}function S(n,...t){return t.forEach(e=>{e&&Object.keys(e).forEach(i=>{e[i]&&G(e[i])?(T(n,i)||(n[i]={}),S(n[i],e[i])):Array.isArray(e[i])?n[i]=X(e[i]):n[i]=e[i]})}),n}function T(n,t){return n&&Object.prototype.hasOwnProperty.call(n,t)}class se{constructor(t,e){this.defaults=e,this.jsoneditor=t.jsoneditor,this.theme=this.jsoneditor.theme,this.template_engine=this.jsoneditor.template,this.iconlib=this.jsoneditor.iconlib,this.translate=this.jsoneditor.translate||this.defaults.translate,this.translateProperty=this.jsoneditor.translateProperty||this.defaults.translateProperty,this.original_schema=t.schema,this.schema=this.jsoneditor.expandSchema(this.original_schema),this.active=!0,this.isUiOnly=!1,this.options=S({},this.options||{},this.schema.options||{},t.schema.options||{},t),this.enforceConstEnabled=this.options.enforce_const??this.jsoneditor.options.enforce_const,this.formname=this.jsoneditor.options.form_name_root||"root",!t.path&&!this.schema.id&&(this.schema.id=this.formname),this.path=t.path||this.formname,this.formname=t.formname||this.path.replace(/\.([^.]+)/g,"[$1]"),this.parent=t.parent,this.key=this.parent!==void 0?this.path.split(".").slice(this.parent.path.split(".").length).join("."):this.path,this.link_watchers=[],this.watchLoop=!1,this.optInWidget=this.options.opt_in_widget??this.jsoneditor.options.opt_in_widget,t.container&&this.setContainer(t.container),this.registerDependencies()}onChildEditorChange(t,e){this.onChange(!0,!1,e)}notify(){this.path&&this.jsoneditor.notifyWatchers(this.path)}change(t){this.parent?this.parent.onChildEditorChange(this,t):this.jsoneditor&&this.jsoneditor.onChange(t)}onChange(t,e,i){this.notify(),e||this.watch_listener&&this.watch_listener(),t&&this.change(i)}register(){if(this.jsoneditor.registerEditor(this),this.input&&!this.label){const t=this.getTitle()||this.formname;this.input.setAttribute("aria-label",t)}this.onChange()}unregister(){this.jsoneditor&&this.jsoneditor.unregisterEditor(this)}getNumColumns(){return 12}isActive(){return this.active}activate(){this.active=!0,this.optInCheckbox.checked=!0,this.enable(),this.change()}deactivate(){this.isRequired()||(this.active=!1,this.optInCheckbox.checked=!1,this.disable(),this.change())}registerDependencies(){this.dependenciesFulfilled=!0;const t=this.options.dependencies;t&&Object.keys(t).forEach(e=>{let i;e.startsWith(this.jsoneditor.root.path)?i=e:(i=this.path.split("."),i[i.length-1]=e,i=i.join(".")),this.jsoneditor.watch(i,()=>{this.evaluateDependencies()})})}evaluateDependencies(){const t=this.container||this.control;if(!t||this.jsoneditor===null)return;const e=this.options.dependencies;if(!e)return;const i=this.dependenciesFulfilled;this.dependenciesFulfilled=!0,Object.keys(e).forEach(s=>{let o;s.startsWith(this.jsoneditor.root.path)?o=s:(o=this.path.split("."),o[o.length-1]=s,o=o.join("."));const c=e[s];this.checkDependency(o,c)}),this.dependenciesFulfilled!==i&&this.notify();let r=this.dependenciesFulfilled?"block":"none";this.options.hidden&&(r="none"),t.tagName==="TD"?Object.keys(t.childNodes).forEach(s=>t.childNodes[s].style.display=r):t.style.display=r}checkDependency(t,e){if(this.path===t||this.jsoneditor===null)return;const i=this.jsoneditor.getEditor(t),r=i?i.getValue():void 0;!i||!i.dependenciesFulfilled||r===void 0||r===null?this.dependenciesFulfilled=!1:Array.isArray(e)?this.dependenciesFulfilled=e.some(s=>{if(JSON.stringify(r)===JSON.stringify(s))return!0}):typeof e=="object"?typeof r!="object"?this.dependenciesFulfilled=e===r:Object.keys(e).some(s=>{if(!T(e,s))return!1;if(!T(r,s)||e[s]!==r[s])return this.dependenciesFulfilled=!1,!0}):typeof e=="string"||typeof e=="number"?this.dependenciesFulfilled=this.dependenciesFulfilled&&r===e:typeof e=="boolean"&&(e?this.dependenciesFulfilled=this.dependenciesFulfilled&&(r||r.length>0):this.dependenciesFulfilled=this.dependenciesFulfilled&&(!r||r.length===0))}setContainer(t){this.container=t,this.setContainerAttributes(),this.schema.id&&this.container.setAttribute("data-schemaid",this.schema.id),this.schema.type&&typeof this.schema.type=="string"&&this.container.setAttribute("data-schematype",this.schema.type),this.container.setAttribute("data-schemapath",this.path)}setOptInCheckbox(){let t;this.optInWidget==="switch"?t=this.theme.getOptInSwitch(this.formname):t=this.theme.getOptInCheckbox(this.formname),this.optInCheckbox=t.checkbox,this.optInContainer=t.container,this.optInCheckbox.addEventListener("click",()=>{this.isActive()?this.deactivate():this.activate()});const e=this.jsoneditor.options.show_opt_in,i=typeof this.parent.options.show_opt_in<"u",r=i&&this.parent.options.show_opt_in===!0,s=i&&this.parent.options.show_opt_in===!1;(r||!s&&e||!i&&e)&&this.parent&&this.parent.schema.type==="object"&&!this.isRequired()&&this.header&&(this.header.insertBefore(this.optInContainer,this.header.firstChild),this.optInAppended=!0)}preBuild(){}build(){}postBuild(){this.setupWatchListeners(),this.addLinks(),this.register(),this.setValue(this.getDefault(),!0),this.updateHeaderText(),this.onWatchedFieldChange(),this.options.titleHidden&&(this.theme.visuallyHidden(this.label),this.theme.visuallyHidden(this.header)),this.enforceConstEnabled&&this.schema.const&&this.disable()}setupWatchListeners(){if(this.watched={},this.schema.vars&&(this.schema.watch=this.schema.vars),this.watched_values={},this.watch_listener=()=>{this.refreshWatchedFieldValues()&&this.onWatchedFieldChange()},T(this.schema,"watch")){let t,e,i,r,s;const o=this.container.getAttribute("data-schemapath");Object.keys(this.schema.watch).forEach(a=>{if(t=this.schema.watch[a],Array.isArray(t)){if(t.length<2)return;e=[t[0]].concat(t[1].split("."))}else e=t.split("."),this.theme.closest(this.container,`[data-schemaid="${e[0]}"]`)||e.unshift("#");if(i=e.shift(),i==="#"&&(i=this.jsoneditor.schema.id||this.jsoneditor.root.formname),r=this.theme.closest(this.container,`[data-schemaid="${i}"]`),!r)throw new Error(`Could not find ancestor node with id ${i}`);s=`${r.getAttribute("data-schemapath")}.${e.join(".")}`,o.startsWith(s)&&(this.watchLoop=!0),this.jsoneditor.watch(s,this.watch_listener),this.watched[a]=s})}this.schema.headerTemplate&&(this.header_template=this.jsoneditor.compileTemplate(this.schema.headerTemplate,this.template_engine))}addLinks(){if(!this.no_link_holder&&(this.link_holder=this.theme.getLinksHolder(),typeof this.description<"u"?this.description.parentNode.insertBefore(this.link_holder,this.description):this.container.appendChild(this.link_holder),this.schema.links))for(let t=0;t<this.schema.links.length;t++)this.addLink(this.getLink(this.schema.links[t]))}onMove(){}getButton(t,e,i,r=[]){const s=`json-editor-btn-${e}`;this.iconlib?e=this.iconlib.getIcon(e):e=null,t=this.translate(t,r),i=this.translate(i,r),!e&&i&&(t=i,i=null);const o=this.theme.getButton(t,e,i);return o.classList.add(s),o}setButtonText(t,e,i,r,s=[]){return this.iconlib?i=this.iconlib.getIcon(i):i=null,e=this.translate(e,s),r=this.translate(r,s),!i&&r&&(e=r,r=null),this.theme.setButtonText(t,e,i,r)}addLink(t){this.link_holder&&this.link_holder.appendChild(t)}getLink(t){let e,i;const s=(t.mediaType||"application/javascript").split("/")[0],o=this.jsoneditor.compileTemplate(t.href,this.template_engine),a=this.jsoneditor.compileTemplate(t.rel?t.rel:t.href,this.template_engine);let c=null;if(t.download&&(c=t.download),c&&c!==!0&&(c=this.jsoneditor.compileTemplate(c,this.template_engine)),s==="image"){e=this.theme.getBlockLinkHolder(),i=document.createElement("a"),i.setAttribute("target","_blank");const d=document.createElement("img");this.theme.createImageLink(e,i,d),this.link_watchers.push(l=>{const h=o(l),p=a(l);i.setAttribute("href",h),i.setAttribute("title",p||h),d.setAttribute("src",h)})}else if(["audio","video"].includes(s)){e=this.theme.getBlockLinkHolder(),i=this.theme.getBlockLink(),i.setAttribute("target","_blank");const d=document.createElement(s);d.setAttribute("controls","controls"),this.theme.createMediaLink(e,i,d),this.link_watchers.push(l=>{const h=o(l),p=a(l);i.setAttribute("href",h),i.textContent=p||h,d.setAttribute("src",h)})}else i=e=this.theme.getBlockLink(),e.setAttribute("target","_blank"),e.textContent=t.rel,e.style.display="none",this.link_watchers.push(d=>{const l=o(d),h=a(d);l&&(e.style.display=""),e.setAttribute("href",l),e.textContent=h||l});return c&&i&&(c===!0?i.setAttribute("download",""):this.link_watchers.push(d=>{i.setAttribute("download",c(d))})),t.class&&t.class.split(" ").forEach(l=>{i.classList.add(l)}),e}refreshWatchedFieldValues(){if(!this.watched_values)return;const t={};let e=!1;return this.watched&&Object.keys(this.watched).forEach(i=>{const r=this.jsoneditor.getEditor(this.watched[i]),s=r?r.getValue():null;this.watched_values[i]!==s&&(e=!0),t[i]=s}),t.self=this.getValue(),this.watched_values.self!==t.self&&(e=!0),this.watched_values=t,e}getWatchedFieldValues(){return this.watched_values}updateHeaderText(){if(this.header){const t=this.getHeaderText();if(this.header.children.length){for(let e=0;e<this.header.childNodes.length;e++)if(this.header.childNodes[e].nodeType===3){this.header.childNodes[e].nodeValue=this.cleanText(t);break}}else window.DOMPurify?this.header.innerHTML=window.DOMPurify.sanitize(t):this.header.textContent=this.cleanText(t)}}purify(t){return typeof t!="string"||(window.DOMPurify?t=window.DOMPurify.sanitize(t):t=this.cleanText(t)),t}getHeaderText(t){return this.header_text?this.header_text:t?this.translateProperty(this.schema.title):this.getTitle()}getPathDepth(){return this.path.split(".").length}cleanText(t){const e=document.createElement("div");return e.innerHTML=t,e.textContent||e.innerText}onWatchedFieldChange(){let t;if(this.header_template){t=S(this.getWatchedFieldValues(),{key:this.key,i:this.key,i0:this.key*1,i1:this.key*1+1,title:this.getTitle()}),this.editors&&Object.keys(this.editors).length&&(t.properties={},Object.keys(this.editors).forEach(i=>{const r=this.editors[i];if(r.schema&&r.schema.enum&&r.schema.options&&r.schema.options.enum_titles){const s=r.schema.enum.indexOf(r.value),o=r.options.enum_titles[s];t.properties[i]={enumTitle:o}}}));const e=this.header_template(t);e!==this.header_text&&(this.header_text=e,this.updateHeaderText(),this.notify())}if(this.link_watchers.length){t=this.getWatchedFieldValues();for(let e=0;e<this.link_watchers.length;e++)this.link_watchers[e](t)}}setValue(t){t=this.applyConstFilter(t),this.value=t}applyConstFilter(t){return this.enforceConstEnabled&&typeof this.schema.const<"u"&&(t=this.schema.const),t}getValue(){if(this.dependenciesFulfilled)return this.value}refreshValue(){}getChildEditors(){return!1}destroy(){this.unregister(this),this.watched&&Object.values(this.watched).forEach(t=>this.jsoneditor.unwatch(t,this.watch_listener)),this.watched=null,this.watched_values=null,this.watch_listener=null,this.header_text=null,this.header_template=null,this.value=null,this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container),this.container=null,this.jsoneditor=null,this.schema=null,this.path=null,this.key=null,this.parent=null}isDefaultRequired(){return this.isRequired()||!!this.jsoneditor.options.use_default_values}getDefault(){if(this.enforceConstEnabled&&this.schema.const)return this.schema.const;if(typeof this.schema.default<"u")return this.schema.default;if(typeof this.schema.enum<"u")return this.schema.enum[0];let t=this.schema.type||this.schema.oneOf;if(t&&Array.isArray(t)&&(t=t[0]),t&&typeof t=="object"&&(t=t.type),t&&Array.isArray(t)&&(t=t[0]),typeof t=="string"){if(t==="number")return this.isDefaultRequired()?0:void 0;if(t==="boolean")return this.isDefaultRequired()?!1:void 0;if(t==="integer")return this.isDefaultRequired()?0:void 0;if(t==="string")return this.isDefaultRequired()?"":void 0;if(t==="null")return null;if(t==="object")return{};if(t==="array")return[]}}getTitle(){return this.translateProperty(this.schema.title||this.key||this.formname)}enable(){this.disabled=!1}disable(){this.disabled=!0}isEnabled(){return!this.disabled}isRequired(){return typeof this.schema.required=="boolean"?this.schema.required:this.parent&&this.parent.schema&&Array.isArray(this.parent.schema.required)?this.parent.schema.required.includes(this.key):!!this.jsoneditor.options.required_by_default}getDisplayText(t){const e=[],i={};t.forEach(s=>{s.title&&(i[s.title]=i[s.title]||0,i[s.title]++),s.description&&(i[s.description]=i[s.description]||0,i[s.description]++),s.format&&(i[s.format]=i[s.format]||0,i[s.format]++),s.type&&(i[s.type]=i[s.type]||0,i[s.type]++)}),t.forEach(s=>{let o;typeof s=="string"?o=s:s.title&&i[s.title]<=1?o=s.title:s.format&&i[s.format]<=1?o=s.format:s.type&&i[s.type]<=1?o=s.type:s.description&&i[s.description]<=1?o=s.description:s.title?o=s.title:s.format?o=s.format:s.type?o=s.type:s.description?o=s.description:JSON.stringify(s).length<500?o=JSON.stringify(s):o="type",e.push(o)});const r={};return e.forEach((s,o)=>{r[s]=r[s]||0,r[s]++,i[s]>1&&(e[o]=`${s} ${r[s]}`)}),e}getValidId(t){return t=t===void 0?"":t.toString(),t.replace(/\s+/g,"-")}setInputAttributes(t,e){if(this.schema.options&&this.schema.options.inputAttributes){const i=this.schema.options.inputAttributes,r=["name","type"].concat(t),s=e||this.input;Object.keys(i).forEach(o=>{r.includes(o.toLowerCase())||s.setAttribute(o,i[o])})}}setContainerAttributes(){if(this.schema.options&&this.schema.options.containerAttributes){const t=this.schema.options.containerAttributes,e=["data-schemapath","data-schematype","data-schemaid"];Object.keys(t).forEach(i=>{e.includes(i.toLowerCase())||this.container.setAttribute(i,t[i])})}}expandCallbacks(t,e){const i=this.defaults.callbacks[t];return Object.entries(e).forEach(([r,s])=>{s===Object(s)?e[r]=this.expandCallbacks(t,s):typeof s=="string"&&typeof i=="object"&&typeof i[s]=="function"&&(e[r]=i[s].bind(null,this))}),e}showValidationErrors(t){}}function ne(n,t){var r,s,o,a;const e=t==="bands"?(r=n.items)==null?void 0:r.enum:n.enum||[],i=t==="bands"?(o=(s=n.items)==null?void 0:s.options)==null?void 0:o.colors:((a=n.options)==null?void 0:a.colors)||[];return i&&i.length===e.length?i:e.map(()=>"#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0"))}function re(n,t,e){const i=t.indexOf(n);return i!==-1?e[i]:"#000000"}function J(n,t){const e=document.createElement("div");return e.dataset.band=n,e.textContent=t,e.draggable=!0,e.ondragstart=i=>{var r;(r=i.dataTransfer)==null||r.setData("band",n)},e}function K(n,t,e){t.forEach((i,r)=>{var a;const s=e[r],o=J(i,s);(a=n.control)==null||a.appendChild(o)})}function Y(n,t){const e=document.createElement("style");return e.innerHTML=`
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
    ${n.map(i=>`[data-band="${i}"] { background: ${re(i,n,t)}; color: black; }`).join(`
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
  `,e}function Z(n,t){const e=document.createElement("div");return e.dataset.slot=n,e.ondrop=t,e.ondragover=i=>i.preventDefault(),e}function I(n,t,e){const i=n.querySelector("[data-band]");i&&i.remove();const r=J(t,e);n.appendChild(r)}function oe(n,t,e,i){var s,o;const r=Y(e,t);(s=n.control)==null||s.appendChild(r),K(n,e,i),(o=n.control)==null||o.appendChild(document.createElement("hr")),ae(n,e,i)}function ae(n,t,e){var r;const i=document.createElement("div");i.classList.add("slots-container"),["R","G","B"].forEach((s,o)=>{const c=Z(s,d=>{var y;d.preventDefault();const l=(y=d.dataTransfer)==null?void 0:y.getData("band");if(!l)return;const h=t.indexOf(l),p=e[h]||l;I(c,l,p);const g=n.getValue()||[];g[o]=l,n.setValue(g),n.onChange(!0)});le(c),i.appendChild(c),setTimeout(()=>{const d=n.getValue();if(d!=null&&d[o]){const l=d[o],h=t.indexOf(l),p=e[h]||l;l&&I(c,l,p)}})}),(r=n.control)==null||r.appendChild(i)}function le(n){switch(n.style.border="2px dashed",n.dataset.slot){case"R":{n.style.borderColor="#F88",n.style.background="#FEE";break}case"G":{n.style.borderColor="#8F8",n.style.background="#EFE";break}case"B":{n.style.borderColor="#88F",n.style.background="#EEF";break}}}const Q=/\{\{([^}]+)\}\}/g;function ce(n,t,e,i){var o,a;const r=n.schema.formulaTemplate||"{{A}}",s=Y(e,t);(o=n.control)==null||o.appendChild(s),K(n,e,i),(a=n.control)==null||a.appendChild(document.createElement("hr")),de(n,r,e,i)}function he(n){const t=n.schema.formulaTemplate||"{{A}}",e=n.variableValues||{};return t.replace(Q,(i,r)=>e[r.trim()]||i)}function de(n,t,e,i){var o;const r=document.createElement("div");r.classList.add("slots-container"),n.variableSlots={},t.split(/(\{\{[^}]+\}\})/).forEach(a=>{if(!a)return;if(!a.match(Q)){if(a=a.trim(),a){const l=document.createElement("span");l.classList.add("formula-text"),l.textContent=a,r.appendChild(l)}return}const c=a.replace(/[{}]/g,"").trim(),d=Z(c,l=>{var y;l.preventDefault();const h=(y=l.dataTransfer)==null?void 0:y.getData("band");if(!h)return;const p=e.indexOf(h),g=i[p]||h;n.variableValues[c]=h,tt(n,c,h,g),n.value=he(n),n.onChange(!0)});r.appendChild(d),n.variableSlots[c]||(n.variableSlots[c]=[]),n.variableSlots[c].push(d)}),(o=n.control)==null||o.appendChild(r),setTimeout(()=>{ue(n)})}function ue(n){n.variableValues&&n.variableSlots&&Object.keys(n.variableValues).forEach(t=>{var a;const e=n.variableValues[t],i=n.bands||n.schema.enum||[],r=n.bandTitles||((a=n.schema.options)==null?void 0:a.enum_titles)||i,s=i.indexOf(e),o=r[s]||e;tt(n,t,e,o)})}function tt(n,t,e,i){n.variableSlots&&n.variableSlots[t]&&n.variableSlots[t].forEach(r=>{I(r,e,i)})}class U extends se{constructor(){super(...arguments);w(this,"variableSlots",{});w(this,"variableValues",{});w(this,"bands",[]);w(this,"bandTitles",[]);w(this,"colors",[])}build(){var i,r,s,o,a;super.build();const e=this.schema.format||"bands";this.bands=e==="bands"?(i=this.schema.items)==null?void 0:i.enum:this.schema.enum||[],this.bandTitles=e==="bands"?(s=(r=this.schema.items)==null?void 0:r.options)==null?void 0:s.enum_titles:this.schema.options.enum_titles||this.bands,this.colors=ne(this.schema,e),this.control=document.createElement("div"),this.control.classList.add("form-control"),e==="bands"?oe(this,this.colors,this.bands,this.bandTitles):e==="bands-arithmetic"&&ce(this,this.colors,this.bands,this.bandTitles),this.label=document.createElement("span"),this.label.classList.add("je-header"),this.label.textContent=this.schema.title??"",(o=this.container)==null||o.appendChild(this.label),(a=this.container)==null||a.appendChild(this.control)}}const fe=[{type:"array",format:"bands",func:U},{type:"string",format:"bands-arithmetic",func:U}],pe="eox-layercontrol[data-v-0cf6eb1f]{overflow:auto}",me={class:"d-flex flex-column"},ge=["for",".customEditorInterfaces"],ye={slot:"layerstitle",class:"d-flex justify-space-between ma-2 pa-2 flex-shrink-0"},be={key:0},ke={__name:"EodashLayerControl",props:{map:{type:String,default:"first"},tools:{type:Array,default:()=>["datetime","info","config","legend","opacity"]},title:{type:String||Boolean,default:"Layers"},cssVars:{type:Object},layoutIcon:{type:String,default:Ot},layoutTarget:{type:String}},async setup(n){let t,e;customElements.get("eox-layercontrol")||([t,e]=B(()=>P(()=>import("./main.a3EU58W3.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))),await t,e()),customElements.get("eox-jsonform")||([t,e]=B(()=>P(()=>import("./main.BK-iEy3Z.js"),__vite__mapDeps([10,1,2,11,8,12,13,14,15]))),await t,e());const i=n,r={tools:i.tools,style:i.cssVars},s=N(()=>!!i.layoutTarget&&!!i.layoutIcon),{selectedCompareStac:o,selectedStac:a}=Ct(Et()),c=N(()=>i.map==="second"?z.value!==null&&o.value!==null:M.value!==null&&a.value!==null),d=i.map==="second"?St:At,l=i.map==="second"?z:M,h=ct(null),p=async b=>{var R;const{layer:A,datetime:it}=b.detail,$=await Lt(d,A);let x=[];$&&(x=await $.updateLayerJson(it,A.get("id"),i.map));const k=(R=x==null?void 0:x.find(v=>{var V;return((V=v==null?void 0:v.properties)==null?void 0:V.id)==="AnalysisGroup"}))==null?void 0:R.layers;k!=null&&k.length&&(k==null||k.forEach(v=>{v.properties.layerControlExpand=!0,v.properties.layerControlToolsExpand=!0}),l.value.layers=x)};let g;const y=b=>{clearTimeout(g),g=setTimeout(()=>{p(b)},500)},et=b=>{i.map==="second"?jt.value=b.detail.jsonformValue:Ft.value=b.detail.jsonformValue};return(b,A)=>(C(),j("span",me,[c.value?(C(),j("eox-layercontrol",rt({key:F(l)},r,{for:F(l),".customEditorInterfaces":F(fe),"onDatetime:updated":y,toolsAsList:"true",ref_key:"eoxLayercontrol",ref:h,"on:layerConfig:change":et}),[ot("span",ye,[n.title?(C(),j("h4",be,at(n.title),1)):L("v-if",!0),s.value?(C(),lt(Dt,{key:1,target:n.layoutTarget,icon:n.layoutIcon},null,8,["target","icon"])):L("v-if",!0)])],48,ge)):L("v-if",!0)]))}},Me=Tt(ke,[["styles",[pe]],["__scopeId","data-v-0cf6eb1f"]]);export{Me as default};
