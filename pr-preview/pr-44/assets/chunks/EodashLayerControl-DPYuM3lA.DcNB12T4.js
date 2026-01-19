const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/main.C_rlz-5S.js","assets/chunks/addCommonStyleSheet.Be-rnLMW.js","assets/chunks/when.BR7zwNJC.js","assets/chunks/repeat.Bq2Q4zSV.js","assets/chunks/directive.CvdRHFdJ.js","assets/chunks/directive-helpers.MmG03ohT.js","assets/chunks/unsafe-html.DBTIrAnm.js","assets/chunks/map.DiiNQ3pp.js","assets/chunks/commonjsHelpers.BosuxZz1.js","assets/chunks/index.BUIxO2d3.js","assets/chunks/getElement.CdRlZPdn.js","assets/chunks/main.CLqP7CS_.js","assets/chunks/browser.CvBADTdS.js","assets/chunks/toolcool-range-slider.min.BBXDELo7.js","assets/chunks/utils.BJtOAKhC.js","assets/chunks/index.CxojoGlr.js","assets/chunks/index.BIJR-IiI.js"])))=>i.map(i=>d[i]);
var it=Object.defineProperty;var st=(n,t,e)=>t in n?it(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var w=(n,t,e)=>st(n,typeof t!="symbol"?t+"":t,e);import{ao as V,h as nt,p as rt,c as A,o as j,e as B,K as ot,k as F,r as at,j as P,t as lt,a5 as N}from"./framework.CtCpW42i.js";import{f as ct,u as ht,E as dt,b as C,w as _,i as ut,c as pt}from"./addCommonStyleSheet.Be-rnLMW.js";import{s as ft,l as D,i as q,q as mt,t as gt,o as yt,p as bt,f as vt}from"./sequential.BT5PQCvq.js";import{e as kt,i as wt,t as xt}from"./directive.CvdRHFdJ.js";import"./main.D2mZej9D.js";import{_ as _t,s as Tt,a as Ct,b2 as z,m as U,g as Et,f as St,b6 as At,b5 as jt,bg as Ft}from"./eo-dash.S3SNQFH7.js";import"./dayjs.min.Ba62AOpW.js";import"./commonjsHelpers.BosuxZz1.js";import"./when.BR7zwNJC.js";import"./map.DiiNQ3pp.js";import"./toolcool-range-slider.min.BBXDELo7.js";import"./getElement.CdRlZPdn.js";import"./index.BIJR-IiI.js";import"./item.Bx-rtsOD.js";import"./mdi.CilvuGMU.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt={attribute:!0,type:String,converter:ht,reflect:!1,hasChanged:ct},Ot=(n=Dt,t,e)=>{const{kind:i,metadata:r}=e;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),i==="setter"&&((n=Object.create(n)).wrapped=!0),s.set(e.name,n),i==="accessor"){const{name:o}=e;return{set(a){const c=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,c,n,!0,a)},init(a){return a!==void 0&&this.C(o,void 0,n,a),a}}}if(i==="setter"){const{name:o}=e;return function(a){const c=this[o];t.call(this,a),this.requestUpdate(o,c,n,!0,a)}}throw Error("Unsupported decorator location: "+i)};function m(n){return(t,e)=>typeof e=="object"?Ot(n,t,e):((i,r,s)=>{const o=r.hasOwnProperty(s);return r.constructor.createProperty(s,i),o?Object.getOwnPropertyDescriptor(r,s):void 0})(n,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t=(n,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(n,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function It(n,t){return(e,i,r)=>{const s=o=>{var a;return((a=o.renderRoot)==null?void 0:a.querySelector(n))??null};return $t(e,i,{get(){return s(this)}})}}class Rt{constructor(t){this.cle=t}setColorScale(){switch(this.cle.scaleType){case"continuous":this.setContinousColorScale();break;case"discrete":this.setDiscreteColorScale();break;case"threshold":this.setThresholdColorScale();break;case"categorical":this.setCategoricalColorScale();break;default:this.invalidScaleType(this.cle.scaleType)}}setContinousColorScale(){const{interpolator:t,domain:e,range:i}=this.cle;this.colorScale=t?ft(t).domain(e):D().range(i).domain(e).interpolate(q)}setDiscreteColorScale(){this.colorScale=mt().domain(this.cle.domain).range(this.cle.range)}setThresholdColorScale(){const t=this.cle.domain;this.colorScale=gt().domain(t.slice(1,t.length-1)).range(this.cle.range)}setCategoricalColorScale(){this.colorScale=yt().domain(this.cle.domain).range(this.cle.range)}invalidScaleType(t){throw new Error(`invalid property scaletype: ${t}.
      Must be one of "categorical", "continuous", "discrete", "threshold".`)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=kt(class extends wt{constructor(n){var t;if(super(n),n.type!==xt.ATTRIBUTE||n.name!=="class"||((t=n.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(t=>n[t]).join(" ")+" "}update(n,[t]){var i,r;if(this.st===void 0){this.st=new Set,n.strings!==void 0&&(this.nt=new Set(n.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!((i=this.nt)!=null&&i.has(s))&&this.st.add(s);return this.render(t)}const e=n.element.classList;for(const s of this.st)s in t||(e.remove(s),this.st.delete(s));for(const s in t){const o=!!t[s];o===this.st.has(s)||(r=this.nt)!=null&&r.has(s)||(o?(e.add(s),this.st.add(s)):(e.remove(s),this.st.delete(s)))}return dt}});class Vt{constructor(t){this.cle=t}render(){const t=this.cle.titleText?C`<p class="legend-title">${this.cle.titleText}</p>`:"",e={hidden:this.cle.scaleType==="categorical"},i={hidden:this.cle.scaleType!=="categorical","categorical-container":!0};return C`<div
      class="cle-container"
      style="width:${this.cle.width}px; height:auto;"
    >
      ${t}
      <slot name="subtitle"></slot>
      <svg
        class=${L(e)}
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
      <ul class=${L(i)}>
        ${this.renderCategorical()}
      </ul>
      <slot name="footer"></slot>
    </div>`}renderCategorical(){if(this.cle.scaleType!=="categorical")return"";const{markType:t,colorScale:e,domain:i}=this.cle,r={"legend-item":!0,line:t==="line",circle:t==="circle"};return C`${i.map(s=>C`<li
          class=${L(r)}
          style="--color:${e(s)}"
        >
          ${s}
        </li>`)}`}renderContinuous(){var d;if(this.cle.scaleType!=="continuous"||this.cle.colorScale===null)return"";const{colorScale:t,marginTop:e,marginLeft:i,marginRight:r,tickSize:s,width:o,range:a}=this.cle,c=this.cle.marginBottom+s,h=this.cle.height+s,l=((d=t.interpolator)==null?void 0:d.call(t))||bt(q,a);return _`<image
      x=${i}
      y=${e}
      width=${o-r-i}
      height=${h-e-c}
      preserveAspectRatio="none"
      href=${this.getColorRamp(l).toDataURL()}
    ></image>`}renderDiscreteThreshold(){if(this.cle.scaleType!=="discrete"&&this.cle.scaleType!=="threshold")return"";const{tickSize:t,marginTop:e,marginLeft:i,colorScale:r,xScale:s}=this.cle,o=this.cle.height+t,a=this.cle.marginBottom+t,c=r.range(),h=d=>r.invertExtent(d).map(s)[0]||i,l=d=>{let[f,g]=r.invertExtent(d).map(s);return f=f||0,g=g||s.range()[1],g-f};return _`${c.map(d=>_`<rect x=${h(d)} y=${e} width=${l(d)} height=${o-e-a} fill=${d}></rect>`)}`}renderAxis(){if(!this.cle.xScale||this.cle.scaleType==="categorical")return"";const{ticks:t,tickSize:e,tickFormat:i,tickFormatter:r,tickValues:s,xScale:o,marginTop:a}=this.cle,c=this.cle.height+e,h=this.cle.marginBottom+e,l=s!=null&&s.length?s:o.ticks.apply(o,[t,i]),d=Math.max(e,0)+3,f=()=>l.map(g=>_`<g class="tick" transform='translate(${o(g)},0)'>
      <line stroke="currentColor" y2="${e}" y1="${a+h-c}"></line>
      <text fill="currentColor" y="${d}" dy="0.71em">${r(g)}</text>
      </g>`);return _`<g
      class="x-axis"
      transform="translate(0, ${c-h})"
      text-anchor="middle"
    >${f()}</g>`}getColorRamp(t,e=256){const i=document.createElement("canvas");i.setAttribute("height","1"),i.setAttribute("width",`${e}`);const r=i.getContext("2d");for(let s=0;s<e;s++)r.fillStyle=t(s/(e-1)),r.fillRect(s,0,1,1);return i}}const Bt=325,Pt=32,Nt=6,zt=12,Ut=16,Mt=12,H=5,qt=6,W=".1f",Ht=[0,1],Wt=["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],Gt="Color Legend Element",Xt="circle",Jt="continuous",Kt=["domain","range","interpolator","scaleType"],Yt=["scaleType","ticks","tickSize","tickValues","tickFormat","tickFormatter","domain","range","marginLeft","marginRight","marginBottom","marginTop","width","height"];class Zt{constructor(t){this.cle=t}setXScale(){const{scaleType:t,marginLeft:e,width:i,marginRight:r}=this.cle;switch(t){case"continuous":this.xScale=D().domain(this.cle.domain).range([e,i-r]);break;case"discrete":case"threshold":this.xScale=D().domain([this.cle.domain[0],this.cle.domain[this.cle.domain.length-1]]).rangeRound([e,i-r]);break;case"categorical":this.xScale=null;break;default:throw new Error(`Unrecognized scaleType: ${t}`)}}handleAxisTicks(){var t,e,i;if((this.cle.scaleType==="discrete"||this.cle.scaleType==="threshold")&&!this.cle.tickValues){const[r,s]=this.xScale.domain();this.cle.tickValues=[r,...((e=(t=this.cle.colorScale)==null?void 0:t.thresholds)==null?void 0:e.call(t))||this.cle.colorScale.domain(),s]}typeof this.cle.tickFormatter!="function"&&((i=this.cle.tickFormat)!=null&&i.length?this.cle.tickFormatter=vt(this.cle.tickFormat):this.cle.tickFormatter=this.xScale.tickFormat(this.cle.ticks||H,this.cle.tickFormat||W))}}const Qt=ut`
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
`;var p=function(n,t,e,i){var r=arguments.length,s=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,t,e,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(s=(r<3?o(s):r>3?o(t,e,s):o(t,e))||s);return r>3&&s&&Object.defineProperty(t,e,s),s};let u=class extends pt{constructor(){super(...arguments),this.titleText=Gt,this.width=Bt,this.height=Pt,this.marginTop=Nt,this.marginRight=zt,this.marginBottom=Ut,this.marginLeft=Mt,this.scaleType=Jt,this.domain=Ht,this.range=Wt,this.markType=Xt,this.ticks=H,this.tickFormat=W,this.tickSize=qt,this.colorScaleSetter=new Rt(this),this.axisTickSetter=new Zt(this),this.renderer=new Vt(this)}get interpolator(){return this._interpolator}set interpolator(t){if(typeof t=="function"){const e=this.interpolator;this._interpolator=t,this.requestUpdate("interpolator",e)}else throw new Error("interpolator must be a function.")}get tickFormatter(){return this._tickFormatter}set tickFormatter(t){if(typeof t=="function"){const e=this.tickFormatter;this._tickFormatter=t,this.requestUpdate("tickFormatter",e)}else throw new Error("tickFormatter must be a function.")}get colorScale(){return this.colorScaleSetter.colorScale}get xScale(){return this.axisTickSetter.xScale}render(){return this.renderer.render()}willUpdate(t){Kt.some(e=>t.has(e))&&this.colorScaleSetter.setColorScale(),Yt.some(e=>t.has(e))&&(this.axisTickSetter.setXScale(),this.axisTickSetter.handleAxisTicks())}};u.styles=[Qt];p([m({type:String})],u.prototype,"titleText",void 0);p([m({type:Number})],u.prototype,"width",void 0);p([m({type:Number})],u.prototype,"height",void 0);p([m({type:Number})],u.prototype,"marginTop",void 0);p([m({type:Number})],u.prototype,"marginRight",void 0);p([m({type:Number})],u.prototype,"marginBottom",void 0);p([m({type:Number})],u.prototype,"marginLeft",void 0);p([m({type:String})],u.prototype,"scaleType",void 0);p([m({type:Array})],u.prototype,"domain",void 0);p([m({type:Array})],u.prototype,"range",void 0);p([m({type:String})],u.prototype,"markType",void 0);p([m({type:Number})],u.prototype,"ticks",void 0);p([m({type:String})],u.prototype,"tickFormat",void 0);p([m({type:Number})],u.prototype,"tickSize",void 0);p([m({type:Array})],u.prototype,"tickValues",void 0);p([It("svg")],u.prototype,"svg",void 0);p([m({attribute:!1})],u.prototype,"interpolator",null);p([m({attribute:!1})],u.prototype,"tickFormatter",null);u=p([Lt("color-legend")],u);function G(n){return!(n===null||typeof n!="object"||n.nodeType||n===n.window||n.constructor&&!T(n.constructor.prototype,"isPrototypeOf"))}function X(n){return G(n)?E({},n):Array.isArray(n)?n.map(X):n}function E(n,...t){return t.forEach(e=>{e&&Object.keys(e).forEach(i=>{e[i]&&G(e[i])?(T(n,i)||(n[i]={}),E(n[i],e[i])):Array.isArray(e[i])?n[i]=X(e[i]):n[i]=e[i]})}),n}function T(n,t){return n&&Object.prototype.hasOwnProperty.call(n,t)}class te{constructor(t,e){this.defaults=e,this.jsoneditor=t.jsoneditor,this.theme=this.jsoneditor.theme,this.template_engine=this.jsoneditor.template,this.iconlib=this.jsoneditor.iconlib,this.translate=this.jsoneditor.translate||this.defaults.translate,this.translateProperty=this.jsoneditor.translateProperty||this.defaults.translateProperty,this.original_schema=t.schema,this.schema=this.jsoneditor.expandSchema(this.original_schema),this.active=!0,this.isUiOnly=!1,this.options=E({},this.options||{},this.schema.options||{},t.schema.options||{},t),this.enforceConstEnabled=this.options.enforce_const??this.jsoneditor.options.enforce_const,this.formname=this.jsoneditor.options.form_name_root||"root",!t.path&&!this.schema.id&&(this.schema.id=this.formname),this.path=t.path||this.formname,this.formname=t.formname||this.path.replace(/\.([^.]+)/g,"[$1]"),this.parent=t.parent,this.key=this.parent!==void 0?this.path.split(".").slice(this.parent.path.split(".").length).join("."):this.path,this.link_watchers=[],this.watchLoop=!1,this.optInWidget=this.options.opt_in_widget??this.jsoneditor.options.opt_in_widget,t.container&&this.setContainer(t.container),this.registerDependencies()}onChildEditorChange(t,e){this.onChange(!0,!1,e)}notify(){this.path&&this.jsoneditor.notifyWatchers(this.path)}change(t){this.parent?this.parent.onChildEditorChange(this,t):this.jsoneditor&&this.jsoneditor.onChange(t)}onChange(t,e,i){this.notify(),e||this.watch_listener&&this.watch_listener(),t&&this.change(i)}register(){if(this.jsoneditor.registerEditor(this),this.input&&!this.label){const t=this.getTitle()||this.formname;this.input.setAttribute("aria-label",t)}this.onChange()}unregister(){this.jsoneditor&&this.jsoneditor.unregisterEditor(this)}getNumColumns(){return 12}isActive(){return this.active}activate(){this.active=!0,this.optInCheckbox.checked=!0,this.enable(),this.change()}deactivate(){this.isRequired()||(this.active=!1,this.optInCheckbox.checked=!1,this.disable(),this.change())}registerDependencies(){this.dependenciesFulfilled=!0;const t=this.options.dependencies;t&&Object.keys(t).forEach(e=>{let i;e.startsWith(this.jsoneditor.root.path)?i=e:(i=this.path.split("."),i[i.length-1]=e,i=i.join(".")),this.jsoneditor.watch(i,()=>{this.evaluateDependencies()})})}evaluateDependencies(){const t=this.container||this.control;if(!t||this.jsoneditor===null)return;const e=this.options.dependencies;if(!e)return;const i=this.dependenciesFulfilled;this.dependenciesFulfilled=!0,Object.keys(e).forEach(s=>{let o;s.startsWith(this.jsoneditor.root.path)?o=s:(o=this.path.split("."),o[o.length-1]=s,o=o.join("."));const c=e[s];this.checkDependency(o,c)}),this.dependenciesFulfilled!==i&&this.notify();let r=this.dependenciesFulfilled?"block":"none";this.options.hidden&&(r="none"),t.tagName==="TD"?Object.keys(t.childNodes).forEach(s=>t.childNodes[s].style.display=r):t.style.display=r}checkDependency(t,e){if(this.path===t||this.jsoneditor===null)return;const i=this.jsoneditor.getEditor(t),r=i?i.getValue():void 0;!i||!i.dependenciesFulfilled||!r?this.dependenciesFulfilled=!1:Array.isArray(e)?this.dependenciesFulfilled=e.some(s=>{if(JSON.stringify(r)===JSON.stringify(s))return!0}):typeof e=="object"?typeof r!="object"?this.dependenciesFulfilled=e===r:Object.keys(e).some(s=>{if(!T(e,s))return!1;if(!T(r,s)||e[s]!==r[s])return this.dependenciesFulfilled=!1,!0}):typeof e=="string"||typeof e=="number"?this.dependenciesFulfilled=this.dependenciesFulfilled&&r===e:typeof e=="boolean"&&(e?this.dependenciesFulfilled=this.dependenciesFulfilled&&(r||r.length>0):this.dependenciesFulfilled=this.dependenciesFulfilled&&(!r||r.length===0))}setContainer(t){this.container=t,this.setContainerAttributes(),this.schema.id&&this.container.setAttribute("data-schemaid",this.schema.id),this.schema.type&&typeof this.schema.type=="string"&&this.container.setAttribute("data-schematype",this.schema.type),this.container.setAttribute("data-schemapath",this.path)}setOptInCheckbox(){let t;this.optInWidget==="switch"?t=this.theme.getOptInSwitch(this.formname):t=this.theme.getOptInCheckbox(this.formname),this.optInCheckbox=t.checkbox,this.optInContainer=t.container,this.optInCheckbox.addEventListener("click",()=>{this.isActive()?this.deactivate():this.activate()});const e=this.jsoneditor.options.show_opt_in,i=typeof this.parent.options.show_opt_in<"u",r=i&&this.parent.options.show_opt_in===!0,s=i&&this.parent.options.show_opt_in===!1;(r||!s&&e||!i&&e)&&this.parent&&this.parent.schema.type==="object"&&!this.isRequired()&&this.header&&(this.header.insertBefore(this.optInContainer,this.header.firstChild),this.optInAppended=!0)}preBuild(){}build(){}postBuild(){this.setupWatchListeners(),this.addLinks(),this.register(),this.setValue(this.getDefault(),!0),this.updateHeaderText(),this.onWatchedFieldChange(),this.options.titleHidden&&(this.theme.visuallyHidden(this.label),this.theme.visuallyHidden(this.header)),this.enforceConstEnabled&&this.schema.const&&this.disable()}setupWatchListeners(){if(this.watched={},this.schema.vars&&(this.schema.watch=this.schema.vars),this.watched_values={},this.watch_listener=()=>{this.refreshWatchedFieldValues()&&this.onWatchedFieldChange()},T(this.schema,"watch")){let t,e,i,r,s;const o=this.container.getAttribute("data-schemapath");Object.keys(this.schema.watch).forEach(a=>{if(t=this.schema.watch[a],Array.isArray(t)){if(t.length<2)return;e=[t[0]].concat(t[1].split("."))}else e=t.split("."),this.theme.closest(this.container,`[data-schemaid="${e[0]}"]`)||e.unshift("#");if(i=e.shift(),i==="#"&&(i=this.jsoneditor.schema.id||this.jsoneditor.root.formname),r=this.theme.closest(this.container,`[data-schemaid="${i}"]`),!r)throw new Error(`Could not find ancestor node with id ${i}`);s=`${r.getAttribute("data-schemapath")}.${e.join(".")}`,o.startsWith(s)&&(this.watchLoop=!0),this.jsoneditor.watch(s,this.watch_listener),this.watched[a]=s})}this.schema.headerTemplate&&(this.header_template=this.jsoneditor.compileTemplate(this.schema.headerTemplate,this.template_engine))}addLinks(){if(!this.no_link_holder&&(this.link_holder=this.theme.getLinksHolder(),typeof this.description<"u"?this.description.parentNode.insertBefore(this.link_holder,this.description):this.container.appendChild(this.link_holder),this.schema.links))for(let t=0;t<this.schema.links.length;t++)this.addLink(this.getLink(this.schema.links[t]))}onMove(){}getButton(t,e,i,r=[]){const s=`json-editor-btn-${e}`;this.iconlib?e=this.iconlib.getIcon(e):e=null,t=this.translate(t,r),i=this.translate(i,r),!e&&i&&(t=i,i=null);const o=this.theme.getButton(t,e,i);return o.classList.add(s),o}setButtonText(t,e,i,r,s=[]){return this.iconlib?i=this.iconlib.getIcon(i):i=null,e=this.translate(e,s),r=this.translate(r,s),!i&&r&&(e=r,r=null),this.theme.setButtonText(t,e,i,r)}addLink(t){this.link_holder&&this.link_holder.appendChild(t)}getLink(t){let e,i;const s=(t.mediaType||"application/javascript").split("/")[0],o=this.jsoneditor.compileTemplate(t.href,this.template_engine),a=this.jsoneditor.compileTemplate(t.rel?t.rel:t.href,this.template_engine);let c=null;if(t.download&&(c=t.download),c&&c!==!0&&(c=this.jsoneditor.compileTemplate(c,this.template_engine)),s==="image"){e=this.theme.getBlockLinkHolder(),i=document.createElement("a"),i.setAttribute("target","_blank");const h=document.createElement("img");this.theme.createImageLink(e,i,h),this.link_watchers.push(l=>{const d=o(l),f=a(l);i.setAttribute("href",d),i.setAttribute("title",f||d),h.setAttribute("src",d)})}else if(["audio","video"].includes(s)){e=this.theme.getBlockLinkHolder(),i=this.theme.getBlockLink(),i.setAttribute("target","_blank");const h=document.createElement(s);h.setAttribute("controls","controls"),this.theme.createMediaLink(e,i,h),this.link_watchers.push(l=>{const d=o(l),f=a(l);i.setAttribute("href",d),i.textContent=f||d,h.setAttribute("src",d)})}else i=e=this.theme.getBlockLink(),e.setAttribute("target","_blank"),e.textContent=t.rel,e.style.display="none",this.link_watchers.push(h=>{const l=o(h),d=a(h);l&&(e.style.display=""),e.setAttribute("href",l),e.textContent=d||l});return c&&i&&(c===!0?i.setAttribute("download",""):this.link_watchers.push(h=>{i.setAttribute("download",c(h))})),t.class&&t.class.split(" ").forEach(l=>{i.classList.add(l)}),e}refreshWatchedFieldValues(){if(!this.watched_values)return;const t={};let e=!1;return this.watched&&Object.keys(this.watched).forEach(i=>{const r=this.jsoneditor.getEditor(this.watched[i]),s=r?r.getValue():null;this.watched_values[i]!==s&&(e=!0),t[i]=s}),t.self=this.getValue(),this.watched_values.self!==t.self&&(e=!0),this.watched_values=t,e}getWatchedFieldValues(){return this.watched_values}updateHeaderText(){if(this.header){const t=this.getHeaderText();if(this.header.children.length){for(let e=0;e<this.header.childNodes.length;e++)if(this.header.childNodes[e].nodeType===3){this.header.childNodes[e].nodeValue=this.cleanText(t);break}}else window.DOMPurify?this.header.innerHTML=window.DOMPurify.sanitize(t):this.header.textContent=this.cleanText(t)}}getHeaderText(t){return this.header_text?this.header_text:t?this.translateProperty(this.schema.title):this.getTitle()}getPathDepth(){return this.path.split(".").length}cleanText(t){const e=document.createElement("div");return e.innerHTML=t,e.textContent||e.innerText}onWatchedFieldChange(){let t;if(this.header_template){t=E(this.getWatchedFieldValues(),{key:this.key,i:this.key,i0:this.key*1,i1:this.key*1+1,title:this.getTitle()}),this.editors&&Object.keys(this.editors).length&&(t.properties={},Object.keys(this.editors).forEach(i=>{const r=this.editors[i];if(r.schema&&r.schema.enum&&r.schema.options&&r.schema.options.enum_titles){const s=r.schema.enum.indexOf(r.value),o=r.options.enum_titles[s];t.properties[i]={enumTitle:o}}}));const e=this.header_template(t);e!==this.header_text&&(this.header_text=e,this.updateHeaderText(),this.notify())}if(this.link_watchers.length){t=this.getWatchedFieldValues();for(let e=0;e<this.link_watchers.length;e++)this.link_watchers[e](t)}}setValue(t){t=this.applyConstFilter(t),this.value=t}applyConstFilter(t){return this.enforceConstEnabled&&typeof this.schema.const<"u"&&(t=this.schema.const),t}getValue(){if(this.dependenciesFulfilled)return this.value}refreshValue(){}getChildEditors(){return!1}destroy(){this.unregister(this),this.watched&&Object.values(this.watched).forEach(t=>this.jsoneditor.unwatch(t,this.watch_listener)),this.watched=null,this.watched_values=null,this.watch_listener=null,this.header_text=null,this.header_template=null,this.value=null,this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container),this.container=null,this.jsoneditor=null,this.schema=null,this.path=null,this.key=null,this.parent=null}isDefaultRequired(){return this.isRequired()||!!this.jsoneditor.options.use_default_values}getDefault(){if(this.enforceConstEnabled&&this.schema.const)return this.schema.const;if(typeof this.schema.default<"u")return this.schema.default;if(typeof this.schema.enum<"u")return this.schema.enum[0];let t=this.schema.type||this.schema.oneOf;if(t&&Array.isArray(t)&&(t=t[0]),t&&typeof t=="object"&&(t=t.type),t&&Array.isArray(t)&&(t=t[0]),typeof t=="string"){if(t==="number")return this.isDefaultRequired()?0:void 0;if(t==="boolean")return this.isDefaultRequired()?!1:void 0;if(t==="integer")return this.isDefaultRequired()?0:void 0;if(t==="string")return this.isDefaultRequired()?"":void 0;if(t==="null")return null;if(t==="object")return{};if(t==="array")return[]}}getTitle(){return this.translateProperty(this.schema.title||this.key||this.formname)}enable(){this.disabled=!1}disable(){this.disabled=!0}isEnabled(){return!this.disabled}isRequired(){return typeof this.schema.required=="boolean"?this.schema.required:this.parent&&this.parent.schema&&Array.isArray(this.parent.schema.required)?this.parent.schema.required.includes(this.key):!!this.jsoneditor.options.required_by_default}getDisplayText(t){const e=[],i={};t.forEach(s=>{s.title&&(i[s.title]=i[s.title]||0,i[s.title]++),s.description&&(i[s.description]=i[s.description]||0,i[s.description]++),s.format&&(i[s.format]=i[s.format]||0,i[s.format]++),s.type&&(i[s.type]=i[s.type]||0,i[s.type]++)}),t.forEach(s=>{let o;typeof s=="string"?o=s:s.title&&i[s.title]<=1?o=s.title:s.format&&i[s.format]<=1?o=s.format:s.type&&i[s.type]<=1?o=s.type:s.description&&i[s.description]<=1?o=s.description:s.title?o=s.title:s.format?o=s.format:s.type?o=s.type:s.description?o=s.description:JSON.stringify(s).length<500?o=JSON.stringify(s):o="type",e.push(o)});const r={};return e.forEach((s,o)=>{r[s]=r[s]||0,r[s]++,i[s]>1&&(e[o]=`${s} ${r[s]}`)}),e}getValidId(t){return t=t===void 0?"":t.toString(),t.replace(/\s+/g,"-")}setInputAttributes(t,e){if(this.schema.options&&this.schema.options.inputAttributes){const i=this.schema.options.inputAttributes,r=["name","type"].concat(t),s=e||this.input;Object.keys(i).forEach(o=>{r.includes(o.toLowerCase())||s.setAttribute(o,i[o])})}}setContainerAttributes(){if(this.schema.options&&this.schema.options.containerAttributes){const t=this.schema.options.containerAttributes,e=["data-schemapath","data-schematype","data-schemaid"];Object.keys(t).forEach(i=>{e.includes(i.toLowerCase())||this.container.setAttribute(i,t[i])})}}expandCallbacks(t,e){const i=this.defaults.callbacks[t];return Object.entries(e).forEach(([r,s])=>{s===Object(s)?e[r]=this.expandCallbacks(t,s):typeof s=="string"&&typeof i=="object"&&typeof i[s]=="function"&&(e[r]=i[s].bind(null,this))}),e}showValidationErrors(t){}}function ee(n,t){var r,s,o,a;const e=t==="bands"?(r=n.items)==null?void 0:r.enum:n.enum||[],i=t==="bands"?(o=(s=n.items)==null?void 0:s.options)==null?void 0:o.colors:((a=n.options)==null?void 0:a.colors)||[];return i&&i.length===e.length?i:e.map(()=>"#"+Math.floor(Math.random()*16777215).toString(16).padStart(6,"0"))}function ie(n,t,e){const i=t.indexOf(n);return i!==-1?e[i]:"#000000"}function J(n,t){const e=document.createElement("div");return e.dataset.band=n,e.textContent=t,e.draggable=!0,e.ondragstart=i=>{var r;(r=i.dataTransfer)==null||r.setData("band",n)},e}function K(n,t,e){t.forEach((i,r)=>{var a;const s=e[r],o=J(i,s);(a=n.control)==null||a.appendChild(o)})}function Y(n,t){const e=document.createElement("style");return e.innerHTML=`
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
    ${n.map(i=>`[data-band="${i}"] { background: ${ie(i,n,t)}; color: black; }`).join(`
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
  `,e}function Z(n,t){const e=document.createElement("div");return e.dataset.slot=n,e.ondrop=t,e.ondragover=i=>i.preventDefault(),e}function O(n,t,e){const i=n.querySelector("[data-band]");i&&i.remove();const r=J(t,e);n.appendChild(r)}function se(n,t,e,i){var s,o;const r=Y(e,t);(s=n.control)==null||s.appendChild(r),K(n,e,i),(o=n.control)==null||o.appendChild(document.createElement("hr")),ne(n,e,i)}function ne(n,t,e){var r;const i=document.createElement("div");i.classList.add("slots-container"),["R","G","B"].forEach((s,o)=>{const c=Z(s,h=>{var b;h.preventDefault();const l=(b=h.dataTransfer)==null?void 0:b.getData("band");if(!l)return;const d=t.indexOf(l),f=e[d]||l;O(c,l,f);const g=n.getValue()||[];g[o]=l,n.setValue(g),n.onChange(!0)});re(c),i.appendChild(c),setTimeout(()=>{const h=n.getValue();if(h!=null&&h[o]){const l=h[o],d=t.indexOf(l),f=e[d]||l;l&&O(c,l,f)}})}),(r=n.control)==null||r.appendChild(i)}function re(n){switch(n.style.border="2px dashed",n.dataset.slot){case"R":{n.style.borderColor="#F88",n.style.background="#FEE";break}case"G":{n.style.borderColor="#8F8",n.style.background="#EFE";break}case"B":{n.style.borderColor="#88F",n.style.background="#EEF";break}}}const Q=/\{\{([^}]+)\}\}/g;function oe(n,t,e,i){var o,a;const r=n.schema.formulaTemplate||"{{A}}",s=Y(e,t);(o=n.control)==null||o.appendChild(s),K(n,e,i),(a=n.control)==null||a.appendChild(document.createElement("hr")),le(n,r,e,i)}function ae(n){const t=n.schema.formulaTemplate||"{{A}}",e=n.variableValues||{};return t.replace(Q,(i,r)=>e[r.trim()]||i)}function le(n,t,e,i){var o;const r=document.createElement("div");r.classList.add("slots-container"),n.variableSlots={},t.split(/(\{\{[^}]+\}\})/).forEach(a=>{if(!a)return;if(!a.match(Q)){if(a=a.trim(),a){const l=document.createElement("span");l.classList.add("formula-text"),l.textContent=a,r.appendChild(l)}return}const c=a.replace(/[{}]/g,"").trim(),h=Z(c,l=>{var b;l.preventDefault();const d=(b=l.dataTransfer)==null?void 0:b.getData("band");if(!d)return;const f=e.indexOf(d),g=i[f]||d;n.variableValues[c]=d,tt(n,c,d,g),n.value=ae(n),n.onChange(!0)});r.appendChild(h),n.variableSlots[c]||(n.variableSlots[c]=[]),n.variableSlots[c].push(h)}),(o=n.control)==null||o.appendChild(r),setTimeout(()=>{ce(n)})}function ce(n){n.variableValues&&n.variableSlots&&Object.keys(n.variableValues).forEach(t=>{var a;const e=n.variableValues[t],i=n.bands||n.schema.enum||[],r=n.bandTitles||((a=n.schema.options)==null?void 0:a.enum_titles)||i,s=i.indexOf(e),o=r[s]||e;tt(n,t,e,o)})}function tt(n,t,e,i){n.variableSlots&&n.variableSlots[t]&&n.variableSlots[t].forEach(r=>{O(r,e,i)})}class M extends te{constructor(){super(...arguments);w(this,"variableSlots",{});w(this,"variableValues",{});w(this,"bands",[]);w(this,"bandTitles",[]);w(this,"colors",[])}build(){var i,r,s,o,a;super.build();const e=this.schema.format||"bands";this.bands=e==="bands"?(i=this.schema.items)==null?void 0:i.enum:this.schema.enum||[],this.bandTitles=e==="bands"?(s=(r=this.schema.items)==null?void 0:r.options)==null?void 0:s.enum_titles:this.schema.options.enum_titles||this.bands,this.colors=ee(this.schema,e),this.control=document.createElement("div"),this.control.classList.add("form-control"),e==="bands"?se(this,this.colors,this.bands,this.bandTitles):e==="bands-arithmetic"&&oe(this,this.colors,this.bands,this.bandTitles),this.label=document.createElement("span"),this.label.classList.add("je-header"),this.label.textContent=this.schema.title??"",(o=this.container)==null||o.appendChild(this.label),(a=this.container)==null||a.appendChild(this.control)}}const he=[{type:"array",format:"bands",func:M},{type:"string",format:"bands-arithmetic",func:M}],de="eox-layercontrol[data-v-219e33f9]{overflow:auto}",ue={class:"d-flex flex-column"},pe=["for",".customEditorInterfaces"],fe={key:0,class:"mt-2 mb-2"},me={__name:"EodashLayerControl",props:{map:{type:String,default:"first"},tools:{type:Array,default:()=>["datetime","info","config","legend","opacity"]},title:{type:String||Boolean,default:"Layers"},cssVars:{type:Object}},async setup(n){let t,e;customElements.get("eox-layercontrol")||([t,e]=V(()=>N(()=>import("./main.C_rlz-5S.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))),await t,e()),customElements.get("eox-jsonform")||([t,e]=V(()=>N(()=>import("./main.CLqP7CS_.js"),__vite__mapDeps([11,1,2,12,8,13,14,15,16]))),await t,e());const i=n,r={tools:i.tools,style:i.cssVars},{selectedCompareStac:s,selectedStac:o}=Tt(Ct()),a=nt(()=>i.map==="second"?z.value!==null&&s.value!==null:U.value!==null&&o.value!==null),c=i.map==="second"?Et:St,h=i.map==="second"?z:U,l=rt(null),d=async y=>{var I;const{layer:S,datetime:et}=y.detail,$=await Ft(c,S);let x=[];$&&(x=await $.updateLayerJson(et,S.get("id"),i.map));const v=(I=x==null?void 0:x.find(k=>{var R;return((R=k==null?void 0:k.properties)==null?void 0:R.id)==="AnalysisGroup"}))==null?void 0:I.layers;v!=null&&v.length&&(v==null||v.forEach(k=>{k.properties.layerControlExpand=!0,k.properties.layerControlToolsExpand=!0}),h.value.layers=x)};let f;const g=y=>{clearTimeout(f),f=setTimeout(()=>{d(y)},500)},b=y=>{i.map==="second"?At.value=y.detail.jsonformValue:jt.value=y.detail.jsonformValue};return(y,S)=>(j(),A("span",ue,[a.value?(j(),A("eox-layercontrol",ot({key:F(h)},r,{for:F(h),".customEditorInterfaces":F(he),"onDatetime:updated":g,toolsAsList:"true",ref_key:"eoxLayercontrol",ref:l,"on:layerConfig:change":b}),[at(y.$slots,"layerstitle",{},()=>[P("div",null,[n.title?(j(),A("p",fe,[P("strong",null,lt(n.title),1)])):B("v-if",!0)])],!0)],48,pe)):B("v-if",!0)]))}},Oe=_t(me,[["styles",[de]],["__scopeId","data-v-219e33f9"]]);export{Oe as default};
