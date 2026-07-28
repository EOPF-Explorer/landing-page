var ge=Object.defineProperty;var ee=e=>{throw TypeError(e)};var ve=(e,s,t)=>s in e?ge(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var k=(e,s,t)=>ve(e,typeof s!="symbol"?s+"":s,t),te=(e,s,t)=>s.has(e)||ee("Cannot "+t);var m=(e,s,t)=>(te(e,s,"read from private field"),t?t.call(e):s.get(e)),F=(e,s,t)=>s.has(e)?ee("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(e):s.set(e,t),S=(e,s,t,a)=>(te(e,s,"write to private field"),a?a.call(e,t):s.set(e,t),t);import"./main.DhywBHNg.js";import{A as U,a as D,b as c}from"./lit-element.CBn2YVps.js";import{e as we,i as be,p as Fe}from"./map.BuAX9fqg.js";import{n as z}from"./when.BR7zwNJC.js";import{a as Se,e as He}from"./addCommonStyleSheet.B0XXRREc.js";import{ag as Ve,ah as Le}from"./proj.DtkH-SLQ.js";import{g as ke}from"./getElement.COiK8z0h.js";import{G as Ie}from"./GeoJSON.JfrScdor.js";import{W as Me}from"./WKT.Do-zsNpS.js";import{t as Ce}from"./Feature.BEubRDnW.js";import"./main.CMyIJsgN.js";import{_ as $e,ak as xe,u as Be,aQ as Ae,aR as Ne,k as Oe,i as Je,a as Ge,am as se,aT as Ue,l as Pe,m as Re,d as je,e as _e}from"./eo-dash.ByuJz5t1.js";import{c as qe,j as Ke,P as Ze}from"./ProcessList-DovyI8fM.CZPOgkO-.js";import ze from"./EodashChart-Bixiuj3u.CqX17MOa.js";import{i as ae,u as We,h as Qe}from"./handling-By-rI32h.8DYza4IW.js";import{g as Xe,u as Ye,m as Ee}from"./async-MsPW2Z3e.BrZz6SVH.js";import{w as De,x as Te}from"./mdi.C-iBXNyW.js";import{a4 as et,q as Y,o as C,c as W,j as tt,E as st,k as Z,e as G,b as Q,w as re,a as ie,v as at,P as de,x as rt,p as $,h as X}from"./framework.CF3xkDa-.js";import"./sequential.BdGG0OD6.js";import"./orient2d.DArCjZZA.js";import"./Polygon.C0aBmf6K.js";import"./XYZ.BZLCURoo.js";import"./GeometryCollection.BLYTPSVK.js";import"./browser.DSw-IUFq.js";import"./commonjsHelpers.BosuxZz1.js";import"./toolcool-range-slider.min.BBXDELo7.js";import"./utils.BJtOAKhC.js";import"./index.CxojoGlr.js";import"./index.BIJR-IiI.js";import"./migrate.DkSLOl0d.js";import"./if-defined.B6GByRgW.js";import"./index.BUIxO2d3.js";import"./index-E6C6g93A.DPAmpz-m.js";import"./VTooltip-B5Ktvm8O.D4tVTWuP.js";import"./forwardRefs-DkaZJjPh.BRx6TbL1.js";import"./transition-D6vutObZ.D9v5D7_1.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it=we(class extends be{constructor(){super(...arguments),this.key=U}render(e,s){return this.key=e,s}update(e,[s,t]){return s!==this.key&&(Fe(e),this.key=s),t}}),nt=e=>{e.hoverInteraction=e.eoxMap.selectInteractions.SelectLayerHoverInteraction,e.clickInteraction=e.eoxMap.selectInteractions.SelectLayerClickInteraction;const s=()=>{e.requestUpdate()};e.hoverInteraction.selectStyleLayer.on("change",s),e.clickInteraction.selectStyleLayer.on("change",s)},ot=(e,s,t)=>{if(e.clickId===s)return;const a=t?[]:[s];e.hoverInteraction.highlightById(a)},lt=(e,s,t)=>{e.stopPropagation();const a=Number(e.target.getAttribute("index")),r=s.drawLayer.getSource().getFeatures()[a];s.drawLayer.getSource().removeFeature(r),s.drawnFeatures.splice(a,1),t.emitDrawnFeatures(),s.requestUpdate()},ne={duration:750,padding:[20,20,20,20]},oe={type:"FeatureCollection",features:[]},ct=(e,s)=>{const{clickId:t,drawLayer:a,olMap:r,clickInteraction:i}=s,l=i.getId(e);if(t===l){const n=a.getSource().getExtent();r.getView().fit(n,ne),i.highlightById([])}else{const n=s.eoxMap.projection||"EPSG:3857",u=s.eoxDrawTools.projection,y=e.clone().getGeometry().transform(u,n).getExtent();i.highlightById([l]),r.getView().fit(y,ne)}s.requestUpdate()};class ue extends D{constructor(){super();k(this,"hoverInteraction");k(this,"clickInteraction");k(this,"hoverId");k(this,"clickId");this.eoxDrawTools=null,this.eoxMap=null,this.olMap=null,this.draw=null,this.drawLayer=null,this.drawnFeatures=[],this.featureName="Feature",this.featureNameKey=null,this.modify=null,this.unstyled=!1}_handleDelete(t){lt(t,this,this.eoxDrawTools),this.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))}_handleFeatureSelectAndDeselect(t){ct(t,this)}_handleHoverFeature(t,a=!1){ot(this,t,a)}firstUpdated(){nt(this)}createRenderRoot(){return this}render(){var a,r;this.hoverId=(a=this.hoverInteraction)==null?void 0:a.selectedFids[0],this.clickId=(r=this.clickInteraction)==null?void 0:r.selectedFids[0];const t=c`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>trash-can-outline</title>
      <path
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
      />
    </svg>`;return c`
      <ul class="list no-space">
        ${this.drawnFeatures.map((i,l)=>{var w;const o=l+1,n=Object.values(this.eoxMap.selectInteractions)[0].getId(i),u=this.hoverId===n,y=this.clickId===n,b=u?"surface-container-low":y?"fill":U,g=(w=this.featureNameKey)==null?void 0:w.split("."),v=i.get(this.featureNameKey)||(g==null?void 0:g.reduce((V,I)=>V==null?void 0:V[I],{...i.getProperties()})),p=v||`${this.featureName} ${o}`;return it(o,c`
              <li
                class="${b} no-round"
                @mouseover=${()=>this._handleHoverFeature(n)}
                @mouseout=${()=>this._handleHoverFeature(n,!0)}
                @click="${()=>this._handleFeatureSelectAndDeselect(i)}"
              >
                <div class="max">
                  <span class="title">${p}</span>
                </div>
                <button
                  index=${l}
                  data-cy="deleteFeatureBtn"
                  class="transparent square small error-text front"
                  @click="${this._handleDelete}"
                >
                  ${this.unstyled?"x":c`<i class="small">${t}</i>`}
                </button>
              </li>
            `)})}
      </ul>
    `}}k(ue,"properties",{eoxDrawTools:{attribute:!1,state:!0},eoxMap:{attribute:!1,state:!0},olMap:{attribute:!1,state:!0},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:!1,state:!0,type:String},featureNameKey:{attribute:!1,state:!0,type:String},modify:{attribute:!1,state:!0},unstyled:{type:Boolean}});customElements.define("eox-drawtools-list",ue);const dt=e=>{const{multipleFeatures:s,drawnFeatures:t,currentlyDrawing:a}=e,r=!s&&(t==null?void 0:t.length)>0||a,i=!(t!=null&&t.length)&&!a;return{drawDisabled:r,discardDisabled:i}};function ut(e){navigator.clipboard.writeText(e).then(function(){},function(s){console.error("Could not copy text: ",s)})}const pt=(e,s)=>new Ie().writeFeaturesObject(e,s),ht=(e,s)=>new Me().writeFeatures(e,s);var P,R;class pe extends D{constructor(){super();F(this,P,!0);F(this,R,!0);this.multipleFeatures=!1,this.drawnFeatures=[],this.importFeatures=!1,this.showEditor=!1,this.currentlyDrawing=!1,this.drawFunc=null,this.geoJSON="",this.type="Polygon",this.unstyled=!1,this.select=!1}updateButtonStates(){const{drawDisabled:t,discardDisabled:a}=dt(this);S(this,P,t),S(this,R,a)}createRenderRoot(){return this}render(){this.updateButtonStates();const t=this.currentlyDrawing?"drawing":"draw",a={Polygon:c`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>shape-polygon-plus</title>
        <path
          d="M17,15.7V13H19V17L10,21L3,14L7,5H11V7H8.3L5.4,13.6L10.4,18.6L17,15.7M22,5V7H19V10H17V7H14V5H17V2H19V5H22Z"
        />
      </svg>`,Point:c`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>vector-point-plus</title>
          <path
            d="M9 9V15H15V9H9M11 11H13V13H11V11M18 15V18H15V20H18V23H20V20H23V18H20V15H18Z"
          />
        </svg>
      `,Circle:c`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>shape-circle-plus</title>
          <path
            d="M11,19A6,6 0 0,0 17,13H19A8,8 0 0,1 11,21A8,8 0 0,1 3,13A8,8 0 0,1 11,5V7A6,6 0 0,0 5,13A6,6 0 0,0 11,19M19,5H22V7H19V10H17V7H14V5H17V2H19V5Z"
          />
        </svg>
      `,LineString:c`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>vector-polyline-plus</title>
          <path
            d="M2 3V9H4.95L6.95 15H6V21H12V16.41L17.41 11H22V5H16V9.57L10.59 15H9.06L7.06 9H8V3H2M4 5H6V7H4V5M18 7H20V9H18V7M18 15V18H15V20H18V23H20V20H23V18H20V15H18M8 17H10V19H8V17Z"
          />
        </svg>
      `,Box:c`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>shape-rectangle-plus</title>
          <path
            d="M19,6H22V8H19V11H17V8H14V6H17V3H19V6M17,17V14H19V19H3V6H11V8H5V17H17Z"
          />
        </svg>
      `},r=c`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>cursor-default-click</title>
      <path
        d="M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10"
      />
    </svg>`,i=c`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>trash-can-outline</title>
      <path
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
      />
    </svg>`,l=c`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>pencil-outline</title>
      <path
        d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
      />
    </svg>`,o=c`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>import</title>
      <path
        d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z"
      />
    </svg>`,n=c`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>content-copy</title>
      <path
        d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
      />
    </svg>`;return c`
      <nav>
        <slot></slot>
        <div class="max">
          <!-- Draw Button -->
          <button
            data-cy="drawBtn"
            class="transparent square primary-text no-margin small"
            title="${this.unstyled?this.select?"Select":"Draw":""}"
            ?disabled="${m(this,P)||U}"
            @click="${()=>this.drawFunc.start()}"
          >
            ${this.unstyled?t:c`
                  <i class="small"
                    >${this.select?r:a[this.type]}</i
                  >
                  <span class="tooltip bottom">
                    ${this.select?"Select":"Draw"}
                  </span>
                `}
          </button>

          <!-- Discard Button -->
          <button
            data-cy="discardBtn"
            class="transparent square error-text no-margin small"
            title="${this.unstyled?"Discard":""}"
            ?disabled="${m(this,R)||U}"
            @click="${()=>this.drawFunc.discard()}"
          >
            ${this.unstyled?"discard":c`
                  <i class="small">${i}</i>
                  <span class="tooltip bottom">Discard</span>
                `}
          </button>
        </div>

        <!-- Editor Button -->
        ${z(this.showEditor,()=>c`
            <button
              data-cy="editorBtn"
              class="transparent circle primary-text no-margin small"
              title="${this.unstyled?"Edit features":""}"
              @click=${()=>this.renderRoot.querySelector("#editor").classList.toggle("hidden")}
            >
              ${this.unstyled?"import":c`
                    <i class="small">${l}</i>
                    <span class="tooltip bottom">Edit features</span>
                  `}
            </button>
          `)}

        <!-- Import Button -->
        ${z(this.importFeatures,()=>c`
            <!-- Import Input Field : Hidden -->
            <input
              type="file"
              id="import-file"
              style="display: none;"
              @change=${this.drawFunc.import}
            />

            <!-- Main Import Button -->
            <button
              data-cy="importBtn"
              class="transparent circle primary-text no-margin small"
              title="${this.unstyled?"Import features":""}"
              @click=${()=>this.querySelector("#import-file").click()}
            >
              ${this.unstyled?"import":c`
                    <i class="small">${o}</i>
                    <span class="tooltip bottom">Import features</span>
                  `}
            </button>
          `)}
      </nav>

      <!-- Geo JSON Wrapper -->
      ${z(this.showEditor,()=>c`
          <div id="editor" class="field border extra hidden">
            <!-- Geo JSON Editor -->
            <textarea
              style="font-family: monospace; font-size: small; line-height: 1.4; padding: 0.4rem;"
              @drop=${this.drawFunc.import}
              @input=${this.drawFunc.editor}
              .value=${this.geoJSON}
            ></textarea>

            <!-- Geo JSON Copy Button -->
            <button
              data-cy="copyBtn"
              class="circle absolute bottom right medium-margin aloha"
              style="z-index: 1"
              @click=${()=>ut(this.geoJSON)}
            >
              ${this.unstyled?"copy":c`
                    <i class="tiny">${n}</i>
                    <span class="tooltip top">Copy</span>
                  `}
            </button>
          </div>
        `)}
    `}}P=new WeakMap,R=new WeakMap,k(pe,"properties",{multipleFeatures:{attribute:!1,type:Boolean},drawnFeatures:{attribute:!1,state:!0,type:Array},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},drawFunc:{attribute:!1,type:Object},select:{type:Boolean},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},geoJSON:{attribute:"geo-json",type:String},type:{attribute:"type",type:String},unstyled:{type:Boolean}});customElements.define("eox-drawtools-controller",pe);Se();const mt=`
  ${He}
  :host {
    --padding: 0.5rem;
  }
  .drawtitle {
    padding-left: var(--padding);
    padding-right: var(--padding);
  }
  .hidden {
    display: none;
  }
`,ft=e=>{(()=>{var t;if(e.emitDrawnFeatures(),!e.multipleFeatures)(t=e.draw)==null||t.setActive(!1),e.selectionEvents.removeSelectionEvent(),e.currentlyDrawing=!1;else if(e.continuous)if(!e.layerId)e.drawLayer.getSource().clear(),e.drawnFeatures=[];else{const r=e.drawLayer.getSource().getFeatures().at(-1);if(e.drawLayer.getSource().clear(),!r)return;e.drawLayer.getSource().addFeature(r),e.drawnFeatures=[r]}})(),e.requestUpdate()},yt=e=>{const s=()=>{var a;e.drawLayer.set("isDrawingEnabled",!0),(a=e.draw)==null||a.setActive(!0),e.selectionEvents.addSelectionEvent()},t=()=>{e.currentlyDrawing=!0,e.requestUpdate()};s(),t()},E=(e,s,t)=>{var n,u,y,b;if(!t||!s)return;const a=s.getLayerById(t),r=a?JSON.parse(JSON.stringify(a.get("_jsonDefinition"))):null;if(!r){console.error(`Layer with id ${t} not found`);return}const i={type:"select",active:!1,options:{id:"SelectLayerHoverInteraction",condition:"pointermove",active:!1,style:((n=e.featureStyles)==null?void 0:n.hover)||{"fill-color":"rgba(0, 0, 0,0.0)","stroke-color":"#3399CC","stroke-width":2.5}}},l={type:"select",options:{id:"SelectLayerClickInteraction",condition:"click",multi:e.multipleFeatures,modify:e.allowModify,active:!1,style:((u=e.featureStyles)==null?void 0:u.click)||{"fill-color":"rgba(0, 0, 0,0.0)","stroke-color":"rgba(0, 0, 0,0.0)"}}};r.interactions=[i,l],s.addOrUpdateLayer(r),he(s.layers,t,[r]);const o=e.draw;e.draw=s.selectInteractions.SelectLayerClickInteraction,o==null||o.setActive(!1),(y=s.selectInteractions.SelectLayerClickInteraction)==null||y.setActive(!1),(b=s.selectInteractions.SelectLayerHoverInteraction)==null||b.setActive(!1)};function he(e,s,t){const a=e.findIndex(r=>r.properties.id===s);if(a!==-1)return e.splice(a,1,...t),e;for(const r of e)if(r.type==="Group"){const i=he(r.layers,s,t);i!=null&&i.length&&(r.layers=i)}return e}const x=e=>{const s=e.getGeometry();if(!s)return;let t="";if(s.getType()==="Polygon"||s.getType()==="MultiPolygon"){const a=Ve(s);a>1e6?t=(a/1e6).toFixed(2)+" km²":t=a.toFixed(2)+" m²"}else if(s.getType()==="LineString"||s.getType()==="MultiLineString"){const a=Le(s);a>1e3?t=(a/1e3).toFixed(2)+" km":t=a.toFixed(2)+" m"}else if(s.getType()==="Circle"){const a=s.getRadius(),r=Math.PI*Math.pow(a,2);r>1e6?t=(r/1e6).toFixed(2)+" km²":t=r.toFixed(2)+" m²"}t&&e.get("measure")!==t&&e.set("measure",t)},gt=e=>{const s=e.drawLayer.getSource(),t=a=>{const r=a.feature;r&&(x(r),r.getGeometry().on("change",()=>x(r)))};s.on("addfeature",t),s.getFeatures().forEach(a=>{x(a),a.getGeometry().on("change",()=>x(a))})},le=(e,s)=>{var u,y,b,g,v;const a=ke(e.for),r=a.map,i="0, 65, 112";e.drawLayer=a.addOrUpdateLayer({zIndex:100,type:"Vector",properties:{id:"drawLayer",layerControlHide:!0,isDrawingEnabled:!1,multipleFeatures:s},source:{type:"Vector"},style:((u=e.featureStyles)==null?void 0:u.layer)||{"fill-color":`rgba(${i}, 0.1)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":2,"circle-radius":5,"circle-fill-color":`rgba(${i}, 1)`,...e.measure&&{"text-value":["coalesce",["get","measure"],""],"text-fill-color":`rgba(${i}, 1)`,"text-stroke-color":"white","text-stroke-width":3,"text-font":"bold 14px sans-serif","text-overflow":!0}},interactions:[{type:"draw",options:{active:!1,id:"drawInteraction",type:e.type,modify:e.allowModify,stopClick:!0,style:((y=e.featureStyles)==null?void 0:y.layer)||{"fill-color":`rgba(${i}, 0.1)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":1,"stroke-line-dash":[7,3],"circle-radius":5,"circle-fill-color":`rgba(${i}, 1)`,...e.measure&&{"text-value":["coalesce",["get","measure"],""],"text-fill-color":`rgba(${i}, 1)`,"text-stroke-color":"white","text-stroke-width":3,"text-font":"bold 14px sans-serif","text-overflow":!0}}}},...e.layerId?[]:[{type:"select",options:{id:"SelectLayerHoverInteraction",condition:"pointermove",style:((b=e.featureStyles)==null?void 0:b.hover)||{"fill-color":`rgba(${i}, 0.2)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":2},tooltip:!1}},{type:"select",options:{id:"SelectLayerClickInteraction",condition:"click",panIn:!0,style:((g=e.featureStyles)==null?void 0:g.click)||{"fill-color":`rgba(${i}, 0.2)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":2}}}]]}),e.draw=a.interactions.drawInteraction,e.modify=a.interactions.drawInteraction_modify,E(e,a,e.layerId),e.measure&&gt(e);const l=()=>e.onModifyEnd(),o=()=>ft(e);return(v=e.modify)==null||v.on("modifyend",l),e.measure&&e.draw&&typeof e.draw.on=="function"&&e.draw.on("drawstart",p=>{const w=p.feature;x(w),w.getGeometry().on("change",()=>x(w))}),a.addEventListener("addfeatures",o),{EoxMap:a,OlMap:r,reset:p=>{var w;!p.eoxMap||!p.drawLayer||(p.drawLayer.getSource().clear(),p.eoxMap.map.removeLayer(p.drawLayer),(w=p.modify)==null||w.un("modifyend",l),p.eoxMap.removeEventListener("addfeatures",o),p.layerId||(p.draw=null),p.modify=null)}}},vt=e=>{const s=()=>{var r;e.drawnFeatures=[],(r=e.draw)==null||r.setActive(!1),!!e.layerId&&e.selectionEvents.removeSelectionEvent(),e.drawLayer.getSource().clear(),e.geoJSON=null},t=()=>{e.emitDrawnFeatures(),e.currentlyDrawing=!1,e.requestUpdate()};s(),t()},wt=(e,s)=>{setTimeout(()=>{const a=e.drawLayer.getSource().getFeatures(),r=e.eoxMap.projection||"EPSG:3857",i=e.projection,l=i?a.map(n=>{n=n.clone();const u=n.getGeometry().transform(r,i);return n.setGeometry(u),n}):a;e.setDrawnFeaturesInternal?e.setDrawnFeaturesInternal(l):e.drawnFeatures=l;let o;switch(e.format){case"geojson":o=pt(e.drawnFeatures);break;case"wkt":o=ht(e.drawnFeatures);break;case"feature":o=e.drawnFeatures;break;default:o=e.drawnFeatures;break}e.updateGeoJSON(),e.requestUpdate(),s(o)},0)},bt=e=>{const s=r=>{(r==null?void 0:r.detail.id)!=="SelectLayerClickInteraction"||!r.detail.feature||(typeof r.detail.feature.getGeometry().getCoordinates!="function"&&(r.detail.feature=Ce(r.detail.feature)),e.drawLayer.getSource().addFeature(r.detail.feature),e.eoxMap.dispatchEvent(new CustomEvent("addfeatures",{detail:r.detail})))};return{addSelectionEvent:()=>{if(e.layerId){const r=e.eoxMap.selectInteractions.SelectLayerHoverInteraction;r==null||r.setActive(!0),e.eoxMap.addEventListener("select",s)}},removeSelectionEvent:()=>{var i;const r=(i=e.eoxMap.selectInteractions)==null?void 0:i.SelectLayerHoverInteraction;r&&(r.selectedFids=[],r==null||r.setActive(!1)),e.eoxMap.removeEventListener("select",s)}}},Ft=(e,s,t,a)=>{if(s){if(t){a&&t!==a&&ce(e,s),E(e,s,t);return}if(!t&&a){ce(e,s);return}}};function ce(e,s){s&&(e.discardDrawing(),e.selectionEvents.removeSelectionEvent(),e.draw=s.interactions.drawInteraction,s.selectInteractions.SelectLayerClickInteraction.remove(),s.selectInteractions.SelectLayerHoverInteraction.remove())}const me=e=>{var s;e.currentlyDrawing&&((s=e.draw)==null||s.setActive(!1),e.currentlyDrawing=!1,e.requestUpdate())},St=(e,s)=>{e.key==="Escape"&&me(s)};function Ht(e,s){const t=e.drawnFeatures.indexOf(s);t>-1&&fe(e,t)}function fe(e,s){if(s>-1&&s<e.drawnFeatures.length){const t=[...e.drawnFeatures];t.splice(s,1),e.drawnFeatures=t,e.emitDrawnFeatures()}}function Vt(e,s){function t(i){i.preventDefault(),i.stopPropagation()}function a(i){i.srcElement.style.opacity="0.4"}function r(i){i.srcElement.style.opacity="1"}["dragenter","dragover","dragleave","drop"].forEach(i=>{s.addEventListener(i,t,!1),["dragenter","dragover"].includes(i)?s.addEventListener(i,a,!1):s.addEventListener(i,r,!1)}),s.addEventListener("drop",i=>ye(i,e),!1)}function Lt(e){e.preventDefault(),e.stopPropagation()}function ye(e,s){Lt(e);let t;"dataTransfer"in e&&e.dataTransfer?t=e.dataTransfer.files:e.target&&"files"in e.target?t=e.target.files:t=[],Array.from(t).forEach(a=>kt(a,s)),e.target&&"value"in e.target&&(e.target.value="")}function kt(e,s){const t=new FileReader;t.readAsText(e),t.onloadend=function(){typeof t.result=="string"&&s.handleFeatureChange(t.result)}}var B,j,_,A,N,q,O,K;class It extends D{constructor(){super();F(this,B);F(this,j);F(this,_);F(this,A);F(this,N,!1);F(this,q);F(this,O,[]);F(this,K,t=>St(t,this));this.allowModify=!1,this.for="eox-map",this.currentlyDrawing=!1,this.draw=null,this.drawLayer=null,this.layerId="",this.featureName="Feature",this.featureNameKey=null,this.featureStyles=null,this.modify=null,this.multipleFeatures=!1,this.measure=!1,this.importFeatures=!1,this.showEditor=!1,this.showList=!1,this.projection="EPSG:4326",this.type="Polygon",this.selectionEvents=null,this.format="feature",this.unstyled=!1,this.noShadow=!1}static get properties(){return{allowModify:{attribute:"allow-modify",type:Boolean},for:{type:String},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},continuous:{type:Boolean},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:"feature-name",type:String},featureNameKey:{attribute:"feature-name-key",type:String},layerId:{attribute:"layer-id",type:String},featureStyles:{type:Object},modify:{attribute:!1,state:!0},multipleFeatures:{attribute:"multiple-features",type:Boolean},measure:{type:Boolean},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},showList:{attribute:"show-list",type:Boolean},projection:{type:String},noShadow:{attribute:"no-shadow",type:Boolean},format:{type:String},type:{type:String},unstyled:{type:Boolean}}}set continuous(t){S(this,q,t),t&&(this.multipleFeatures=!0)}get continuous(){return m(this,q)}setDrawnFeaturesInternal(t){S(this,N,!0),this.drawnFeatures=t,S(this,N,!1)}set drawnFeatures(t){var r;const a=m(this,O);if(S(this,O,t),this.drawLayer&&!m(this,N)){if(this.drawLayer.getSource().clear(),t!=null&&t.length){const i=((r=this.eoxMap)==null?void 0:r.projection)||"EPSG:3857",l=this.projection||"EPSG:4326";let o=t;i!==l&&(o=t.map(n=>{n=n.clone();const u=n.getGeometry().transform(l,i);return n.setGeometry(u),n})),this.drawLayer.getSource().addFeatures(o)}this.updateGeoJSON()}this.requestUpdate("drawnFeatures",a)}get drawnFeatures(){return m(this,O)}set layerId(t){Ft(this,this.eoxMap,t,m(this,A)),S(this,A,t)}get layerId(){return m(this,A)}startDrawing(){yt(this)}stopDrawing(){me(this)}discardDrawing(){vt(this)}removeFeature(t){Ht(this,t)}removeFeatureByIndex(t){fe(this,t)}handleFeatureChange(t,a=!1,r=!0){this.eoxMap.parseTextToFeature(t||JSON.stringify(oe),this.drawLayer,this.eoxMap,a,r)}handleFilesChange(t){ye(t,this)}onModifyEnd(){this.emitDrawnFeatures()}updateGeoJSON(){S(this,_,JSON.stringify(this.eoxMap.parseFeature(this.drawnFeatures)||oe,void 0,2))}emitDrawnFeatures(){wt(this,a=>{this.dispatchEvent(new CustomEvent("drawupdate",{detail:a}))})}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}updateLayer(){this.resetLayer&&this.resetLayer(this);const{EoxMap:t,OlMap:a,reset:r}=le(this,this.multipleFeatures);this.resetLayer=r,this.eoxMap=t,S(this,j,a)}firstUpdated(){var t;this.updateLayer(),this.selectionEvents=bt(this),this.importFeatures&&Vt(this,this.eoxMap),((t=this.drawnFeatures)==null?void 0:t.length)>0?this.drawnFeatures=[...this.drawnFeatures]:this.updateGeoJSON(),this.requestUpdate()}updated(t){((r=>t.has(r)&&t.get(r)!==void 0)("for")||t.has("type")&&t.get("type")!==this.type||t.has("measure")&&t.get("measure")!==this.measure)&&(this.updateLayer(),this.currentlyDrawing=!1)}get eoxMap(){return m(this,B)}set eoxMap(t){const a=m(this,B);S(this,B,t),this.requestUpdate("eoxMap",a)}connectedCallback(){if(super.connectedCallback(),document.addEventListener("keydown",m(this,K)),this.drawLayer&&this.eoxMap){const{reset:t}=le(this,this.multipleFeatures);this.resetLayer=t}}disconnectedCallback(){var t;super.disconnectedCallback(),document.removeEventListener("keydown",m(this,K)),(t=this.resetLayer)==null||t.call(this,this)}render(){var t;return c`
      <style>
        :host { display: block; }
        ${!this.unstyled&&mt}
      </style>

      <div class="drawtitle">
        <slot name="drawtitle"
          ><p><strong>Draw</strong></p></slot
        >
      </div>

      <!-- Controller Component -->
      <eox-drawtools-controller
        .drawFunc=${{start:()=>this.startDrawing(),discard:()=>this.discardDrawing(),editor:a=>this.handleFeatureChange(a.target.value,!0),import:a=>this.handleFilesChange(a)}}
        ?select=${!!this.layerId}
        .unstyled=${this.unstyled}
        .drawnFeatures=${this.drawnFeatures}
        .currentlyDrawing=${this.currentlyDrawing}
        .multipleFeatures=${this.multipleFeatures}
        .importFeatures=${this.importFeatures}
        .showEditor=${this.showEditor}
        .geoJSON=${m(this,_)}
        .type=${this.type}
      ></eox-drawtools-controller>

      <!-- List Component -->
      ${this.showList&&((t=this.drawnFeatures)!=null&&t.length)?c`<eox-drawtools-list
            .eoxDrawTools=${this}
            .eoxMap=${this.eoxMap}
            .olMap=${m(this,j)}
            .draw=${this.draw}
            .drawLayer=${this.drawLayer}
            .drawnFeatures=${this.drawnFeatures}
            .featureName=${this.featureName}
            .featureNameKey=${this.featureNameKey}
            .modify=${this.modify}
            .unstyled=${this.unstyled}
            @changed=${()=>{this.updateGeoJSON(),this.requestUpdate()}}
          ></eox-drawtools-list>`:U}
    `}}B=new WeakMap,j=new WeakMap,_=new WeakMap,A=new WeakMap,N=new WeakMap,q=new WeakMap,O=new WeakMap,K=new WeakMap;customElements.define("eox-drawtools",It);const Mt=({selectedStac:e,jsonformSchema:s,isProcessed:t,processResults:a,loading:r,isPolling:i,mapElement:l})=>{at(async()=>{var o;await ae({enableCompare:((o=l.value)==null?void 0:o.id)==="compare",selectedStac:e,jsonformSchema:s,isProcessed:t,processResults:a,loading:r,isPolling:i,mapElement:l.value})}),Ue(async o=>{var b,g,v;const n=((b=l.value)==null?void 0:b.id)==="compare",u=n?"compareLayers:updated":"layers:updated";if((n?["compareLayertime:updated","compareTime:updated"]:["layertime:updated","time:updated"]).includes(o)){const p=await We({jsonformSchema:s.value,newLayers:n?Pe():Re(),enableCompare:n,mapElement:l.value});p&&(Object.values(p.properties??{}).some(V=>{var I,J;return(J=(I=V==null?void 0:V.options)==null?void 0:I.drawtools)==null?void 0:J.layerId})&&!((v=(g=l.value)==null?void 0:g.selectInteractions)!=null&&v.SelectLayerClickInteraction)&&(s.value=null,await de()),s.value=p)}o===u&&await ae({enableCompare:n,selectedStac:e,jsonformSchema:s,isProcessed:t,processResults:a,loading:r,isPolling:i,mapElement:l.value})})};function Ct(e,s,t,a){const r=async l=>{await a()};Y(t,l=>{var o;e.value=((o=l==null?void 0:l.options)==null?void 0:o.execute)||!1});const i=Y([e,s],async([l,o],[n,u])=>{u&&u.removeEventListener("change",r),l&&o&&(o.removeEventListener("change",r),await de(),o.addEventListener("change",r))},{immediate:!0});rt(()=>{s.value&&s.value.removeEventListener("change",r),i()})}const $t="eox-jsonform{padding:0 12px;min-height:0px;flex-shrink:0}.bg-surface:has(.eodash-process-container){height:calc(100% - 30px);overflow:hidden}.eodash-process-container{height:100%;display:flex;flex-direction:column;overflow:hidden}.eodash-process-content{flex-grow:1;overflow-y:auto;display:flex;flex-direction:column}.eodash-process-actions{text-align:right;padding:4px 12px;flex-shrink:0;border-top:1px solid rgba(0,0,0,.1);background:inherit}",xt={ref:"container",class:"eodash-process-container"},Bt={class:"eodash-process-content"},At=[".schema"],Nt={key:0,class:"eodash-process-actions"},Ot={__name:"index",props:{enableCompare:{type:Boolean,default:!1},vegaEmbedOptions:{type:Object,default(){return{actions:!0}}}},setup(e){const s=$(!1),t=$(null),a=et("jsonformEl");Y(a,d=>{if(d&&d.shadowRoot){const h="eodash-drawtools-inline-style";if(!d.shadowRoot.getElementById(h)){const f=document.createElement("style");f.id=h,f.textContent=`
        /* Compact standard form elements */
        .form-control, .form-group {
          margin-bottom: 8px !important;
        }
        .form-control > label, .form-group > label {
          margin-bottom: 2px !important;
          font-size: 0.9em;
        }
        
        /* Specific layout for drawtools */
        .form-control:has(eox-drawtools) {
          position: relative;
          padding: 8px 12px !important;
          border: none !important;
          background: transparent !important;
          margin-bottom: 8px !important;
        }
        .form-control:has(eox-drawtools) > label {
          position: absolute;
          left: 12px;
          top: 8px;
          margin: 0 !important;
          width: calc(100% - 180px); /* Give label maximum available width */
          line-height: 1.2;
          display: flex;
          align-items: flex-start;
          padding-top: 8px;
          pointer-events: none; /* Let clicks pass through to buttons if they overlap slightly */
        }
        .form-control:has(eox-drawtools) > eox-drawtools {
          display: block;
          width: 100%;
        }
      `,d.shadowRoot.appendChild(f)}const H=()=>{var L;const f=(L=d==null?void 0:d.shadowRoot)==null?void 0:L.querySelector("eox-drawtools");if(f&&f.shadowRoot&&!f.shadowRoot.getElementById("eodash-drawtools-indent-style")){const M=document.createElement("style");return M.id="eodash-drawtools-indent-style",M.textContent=`
            eox-drawtools-controller {
              display: flex;
              justify-content: flex-end; /* Push buttons to the right */
              min-height: 40px;
              width: 100%;
            }
            eox-drawtools-list {
              display: block;
              margin-top: 10px;
              width: 100%;
            }
          `,f.shadowRoot.appendChild(M),!0}return!1};if(!H()){const f=new MutationObserver(()=>{H()&&f.disconnect()});f.observe(d.shadowRoot,{childList:!0,subtree:!0})}}});const r=X(()=>{var d;return(d=y.value)==null?void 0:d.links.filter(h=>h.endpoint==="eoxhub_workspaces").length}),i=$(!1),l=$(!1),o=$(!1),n=$([]),u=X(()=>!l.value&&!!t.value&&!!a.value),{selectedStac:y,selectedCompareStac:b}=xe(Be()),g=e.enableCompare?b:y,v=e.enableCompare?Ae:Ne,p=e.enableCompare?Oe:Je,w=e.enableCompare?qe:Ke,V=X(()=>{var d;return p.value+((d=v.value)==null?void 0:d.id)+JSON.stringify(t.value)});Mt({selectedStac:g,mapElement:v,jsonformSchema:t,isProcessed:s,processResults:n,loading:i,isPolling:o});const I=()=>{n.value.forEach(d=>{var H;if(!d)return;let h="";typeof d=="string"?(h=d.includes("/")?d.split("/").pop()??"":d,h=h.includes("?")?h.split("?")[0]:h):h=((H=g.value)==null?void 0:H.id)+"_process_results.json",Ee(h,d)})},J=async()=>{var f;if(Xe(t.value).some(L=>{var M,T;return Array.isArray((M=a.value)==null?void 0:M.value[L])&&!((T=a.value)!=null&&T.value[L].length)})){s.value=!1;const L=e.enableCompare?je:_e;L.value=null;return}const H=(f=a.value)==null?void 0:f.editor.validate();if(H!=null&&H.length){console.warn("[eodash] Form validation failed",H);return}n.value=[],await Qe({jobs:w,selectedStac:g,jsonformEl:a,jsonformSchema:t,loading:i,isPolling:o,processResults:n,mapElement:v.value}),s.value=!0,r.value&&Ye(w,p.value)};return Ct(l,a,t,J),(d,h)=>(C(),W("div",xt,[tt("div",Bt,[st(Ze,{"map-element":Z(v),"enable-compare":e.enableCompare},null,8,["map-element","enable-compare"]),t.value?(C(),W("eox-jsonform",{key:V.value,ref_key:"jsonformEl",ref:a,".schema":t.value},null,40,At)):G("v-if",!0),Z(Ge)?G("v-if",!0):(C(),Q(ze,{key:1,"vega-embed-options":e.vegaEmbedOptions,"enable-compare":e.enableCompare},null,8,["vega-embed-options","enable-compare"]))]),u.value||n.value.length&&s.value&&!r.value?(C(),W("div",Nt,[u.value?(C(),Q(se,{key:0,loading:i.value,style:{"margin-right":"8px"},"append-icon":[Z(De)],onClick:J,density:"comfortable",size:"small"},{default:re(()=>[...h[0]||(h[0]=[ie(" Execute ",-1)])]),_:1},8,["loading","append-icon"])):G("v-if",!0),n.value.length&&s.value&&!r.value?(C(),Q(se,{key:1,color:"primary",style:{"margin-right":"8px"},"append-icon":[Z(Te)],onClick:I,size:"small",density:"comfortable"},{default:re(()=>[...h[1]||(h[1]=[ie(" Download ",-1)])]),_:1},8,["append-icon"])):G("v-if",!0)])):G("v-if",!0)],512))}},ws=$e(Ot,[["styles",[$t]]]);export{ws as default};
