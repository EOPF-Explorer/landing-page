var fe=Object.defineProperty;var E=e=>{throw TypeError(e)};var ge=(e,s,t)=>s in e?fe(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var S=(e,s,t)=>ge(e,typeof s!="symbol"?s+"":s,t),T=(e,s,t)=>s.has(e)||E("Cannot "+t);var h=(e,s,t)=>(T(e,s,"read from private field"),t?t.call(e):s.get(e)),w=(e,s,t)=>s.has(e)?E("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(e):s.set(e,t),F=(e,s,t,a)=>(T(e,s,"write to private field"),a?a.call(e,t):s.set(e,t),t);import"./main.oIpkMiQk.js";import{A,a as W,b as c}from"./lit-element.CBn2YVps.js";import{e as ve,i as we}from"./directive.CvdRHFdJ.js";import{p as Fe}from"./directive-helpers.Bj3rQkfn.js";import{n as K}from"./when.BR7zwNJC.js";import{a as be,e as He}from"./addCommonStyleSheet.B4EeKayB.js";import{an as Se,ao as Ve}from"./proj.XUhRMV6f.js";import{g as Le}from"./getElement.COiK8z0h.js";import{G as Me}from"./GeoJSON.CFlC_aZm.js";import{W as Ie}from"./WKT.Dr9aXOaA.js";import{t as ke}from"./Feature.BY3bZvzO.js";import"./main.CnAd7xXS.js";import{_ as $e,ak as Ce,u as Be,aQ as Ae,aR as Ne,k as Oe,i as Je,a as Ge,am as ee,aT as Ue,l as xe,m as Pe,d as je,e as _e}from"./eo-dash.DUxTdNWO.js";import{c as qe,j as Ke,P as Re}from"./ProcessList-BK2Pylls.43DV43Bk.js";import Ze from"./EodashChart-aZlQmDEW.DO5nWsq1.js";import{i as te,u as ze,h as We}from"./handling-CPXNU-Ck.VcK1fwCY.js";import{g as Qe,u as Xe,m as Ye}from"./async-5D8BC5o0.D7ukD3wq.js";import{w as De,x as Ee}from"./mdi.C-iBXNyW.js";import{a4 as Te,o as B,c as se,E as et,k as j,e as _,b as R,j as tt,w as ae,a as re,v as st,q as ie,x as at,p as V,h as Z,P as rt}from"./framework.CfAMW0bC.js";import"./sequential.BdGG0OD6.js";import"./orient2d.DArCjZZA.js";import"./Polygon.B2Ji1U_T.js";import"./intersectsextent.D2P7AHpG.js";import"./GeometryCollection.D54yWljz.js";import"./browser.DSw-IUFq.js";import"./commonjsHelpers.BosuxZz1.js";import"./toolcool-range-slider.min.BBXDELo7.js";import"./utils.BJtOAKhC.js";import"./index.CxojoGlr.js";import"./index.BIJR-IiI.js";import"./migrate.DkSLOl0d.js";import"./index-j1mmzFIo.S3wEqp6W.js";import"./VTooltip-r9fmZfs8.B_nr6oIU.js";import"./forwardRefs-Cm4pR4cc.EZl0tdHP.js";import"./transition-wKMnGPPZ.0yNeuTKD.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it=ve(class extends we{constructor(){super(...arguments),this.key=A}render(e,s){return this.key=e,s}update(e,[s,t]){return s!==this.key&&(Fe(e),this.key=s),t}}),nt=e=>{e.hoverInteraction=e.eoxMap.selectInteractions.SelectLayerHoverInteraction,e.clickInteraction=e.eoxMap.selectInteractions.SelectLayerClickInteraction;const s=()=>{e.requestUpdate()};e.hoverInteraction.selectStyleLayer.on("change",s),e.clickInteraction.selectStyleLayer.on("change",s)},ot=(e,s,t)=>{if(e.clickId===s)return;const a=t?[]:[s];e.hoverInteraction.highlightById(a)},lt=(e,s,t)=>{e.stopPropagation();const a=Number(e.target.getAttribute("index")),r=s.drawLayer.getSource().getFeatures()[a];s.drawLayer.getSource().removeFeature(r),s.drawnFeatures.splice(a,1),t.emitDrawnFeatures(),s.requestUpdate()},ne={duration:750,padding:[20,20,20,20]},oe={type:"FeatureCollection",features:[]},ct=(e,s)=>{const{clickId:t,drawLayer:a,olMap:r,clickInteraction:i}=s,l=i.getId(e);if(t===l){const n=a.getSource().getExtent();r.getView().fit(n,ne),i.highlightById([])}else{const n=s.eoxMap.projection||"EPSG:3857",d=s.eoxDrawTools.projection,y=e.clone().getGeometry().transform(d,n).getExtent();i.highlightById([l]),r.getView().fit(y,ne)}s.requestUpdate()};class de extends W{constructor(){super();S(this,"hoverInteraction");S(this,"clickInteraction");S(this,"hoverId");S(this,"clickId");this.eoxDrawTools=null,this.eoxMap=null,this.olMap=null,this.draw=null,this.drawLayer=null,this.drawnFeatures=[],this.featureName="Feature",this.featureNameKey=null,this.modify=null,this.unstyled=!1}_handleDelete(t){lt(t,this,this.eoxDrawTools),this.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))}_handleFeatureSelectAndDeselect(t){ct(t,this)}_handleHoverFeature(t,a=!1){ot(this,t,a)}firstUpdated(){nt(this)}createRenderRoot(){return this}render(){var a,r;this.hoverId=(a=this.hoverInteraction)==null?void 0:a.selectedFids[0],this.clickId=(r=this.clickInteraction)==null?void 0:r.selectedFids[0];const t=c`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>trash-can-outline</title>
      <path
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
      />
    </svg>`;return c`
      <ul class="list no-space">
        ${this.drawnFeatures.map((i,l)=>{var v;const o=l+1,n=Object.values(this.eoxMap.selectInteractions)[0].getId(i),d=this.hoverId===n,y=this.clickId===n,g=d?"surface-container-low":y?"fill":A,f=(v=this.featureNameKey)==null?void 0:v.split("."),b=i.get(this.featureNameKey)||(f==null?void 0:f.reduce((C,q)=>C==null?void 0:C[q],{...i.getProperties()})),u=b||`${this.featureName} ${o}`;return it(o,c`
              <li
                class="${g} no-round"
                @mouseover=${()=>this._handleHoverFeature(n)}
                @mouseout=${()=>this._handleHoverFeature(n,!0)}
                @click="${()=>this._handleFeatureSelectAndDeselect(i)}"
              >
                <div class="max">
                  <span class="title">${u}</span>
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
    `}}S(de,"properties",{eoxDrawTools:{attribute:!1,state:!0},eoxMap:{attribute:!1,state:!0},olMap:{attribute:!1,state:!0},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:!1,state:!0,type:String},featureNameKey:{attribute:!1,state:!0,type:String},modify:{attribute:!1,state:!0},unstyled:{type:Boolean}});customElements.define("eox-drawtools-list",de);const dt=e=>{const{multipleFeatures:s,drawnFeatures:t,currentlyDrawing:a}=e,r=!s&&(t==null?void 0:t.length)>0||a,i=!(t!=null&&t.length)&&!a;return{drawDisabled:r,discardDisabled:i}};function ut(e){navigator.clipboard.writeText(e).then(function(){},function(s){console.error("Could not copy text: ",s)})}const pt=(e,s)=>new Me().writeFeaturesObject(e,s),ht=(e,s)=>new Ie().writeFeatures(e,s);var N,O;class ue extends W{constructor(){super();w(this,N,!0);w(this,O,!0);this.multipleFeatures=!1,this.drawnFeatures=[],this.importFeatures=!1,this.showEditor=!1,this.currentlyDrawing=!1,this.drawFunc=null,this.geoJSON="",this.type="Polygon",this.unstyled=!1,this.select=!1}updateButtonStates(){const{drawDisabled:t,discardDisabled:a}=dt(this);F(this,N,t),F(this,O,a)}createRenderRoot(){return this}render(){this.updateButtonStates();const t=this.currentlyDrawing?"drawing":"draw",a={Polygon:c`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
            ?disabled="${h(this,N)||A}"
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
            ?disabled="${h(this,O)||A}"
            @click="${()=>this.drawFunc.discard()}"
          >
            ${this.unstyled?"discard":c`
                  <i class="small">${i}</i>
                  <span class="tooltip bottom">Discard</span>
                `}
          </button>
        </div>

        <!-- Editor Button -->
        ${K(this.showEditor,()=>c`
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
        ${K(this.importFeatures,()=>c`
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
      ${K(this.showEditor,()=>c`
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
    `}}N=new WeakMap,O=new WeakMap,S(ue,"properties",{multipleFeatures:{attribute:!1,type:Boolean},drawnFeatures:{attribute:!1,state:!0,type:Array},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},drawFunc:{attribute:!1,type:Object},select:{type:Boolean},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},geoJSON:{attribute:"geo-json",type:String},type:{attribute:"type",type:String},unstyled:{type:Boolean}});customElements.define("eox-drawtools-controller",ue);be();const mt=`
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
`,yt=e=>{(()=>{var t;if(e.emitDrawnFeatures(),!e.multipleFeatures)(t=e.draw)==null||t.setActive(!1),e.selectionEvents.removeSelectionEvent(),e.currentlyDrawing=!1;else if(e.continuous)if(!e.layerId)e.drawLayer.getSource().clear(),e.drawnFeatures=[];else{const r=e.drawLayer.getSource().getFeatures().at(-1);if(e.drawLayer.getSource().clear(),!r)return;e.drawLayer.getSource().addFeature(r),e.drawnFeatures=[r]}})(),e.requestUpdate()},ft=e=>{const s=()=>{var a;e.drawLayer.set("isDrawingEnabled",!0),(a=e.draw)==null||a.setActive(!0),e.selectionEvents.addSelectionEvent()},t=()=>{e.currentlyDrawing=!0,e.requestUpdate()};s(),t()},z=(e,s,t)=>{var n,d,y,g;if(!t||!s)return;const a=s.getLayerById(t),r=a?JSON.parse(JSON.stringify(a.get("_jsonDefinition"))):null;if(!r){console.error(`Layer with id ${t} not found`);return}const i={type:"select",active:!1,options:{id:"SelectLayerHoverInteraction",condition:"pointermove",active:!1,style:((n=e.featureStyles)==null?void 0:n.hover)||{"fill-color":"rgba(0, 0, 0,0.0)","stroke-color":"#3399CC","stroke-width":2.5}}},l={type:"select",options:{id:"SelectLayerClickInteraction",condition:"click",multi:e.multipleFeatures,modify:e.allowModify,active:!1,style:((d=e.featureStyles)==null?void 0:d.click)||{"fill-color":"rgba(0, 0, 0,0.0)","stroke-color":"rgba(0, 0, 0,0.0)"}}};r.interactions=[i,l],s.addOrUpdateLayer(r),pe(s.layers,t,[r]);const o=e.draw;e.draw=s.selectInteractions.SelectLayerClickInteraction,o==null||o.setActive(!1),(y=s.selectInteractions.SelectLayerClickInteraction)==null||y.setActive(!1),(g=s.selectInteractions.SelectLayerHoverInteraction)==null||g.setActive(!1)};function pe(e,s,t){const a=e.findIndex(r=>r.properties.id===s);if(a!==-1)return e.splice(a,1,...t),e;for(const r of e)if(r.type==="Group"){const i=pe(r.layers,s,t);i!=null&&i.length&&(r.layers=i)}return e}const L=e=>{const s=e.getGeometry();if(!s)return;let t="";if(s.getType()==="Polygon"||s.getType()==="MultiPolygon"){const a=Se(s);a>1e6?t=(a/1e6).toFixed(2)+" km²":t=a.toFixed(2)+" m²"}else if(s.getType()==="LineString"||s.getType()==="MultiLineString"){const a=Ve(s);a>1e3?t=(a/1e3).toFixed(2)+" km":t=a.toFixed(2)+" m"}else if(s.getType()==="Circle"){const a=s.getRadius(),r=Math.PI*Math.pow(a,2);r>1e6?t=(r/1e6).toFixed(2)+" km²":t=r.toFixed(2)+" m²"}t&&e.get("measure")!==t&&e.set("measure",t)},gt=e=>{const s=e.drawLayer.getSource(),t=a=>{const r=a.feature;r&&(L(r),r.getGeometry().on("change",()=>L(r)))};s.on("addfeature",t),s.getFeatures().forEach(a=>{L(a),a.getGeometry().on("change",()=>L(a))})},le=(e,s)=>{var d,y,g,f,b;const a=Le(e.for),r=a.map,i="0, 65, 112";e.drawLayer=a.addOrUpdateLayer({zIndex:100,type:"Vector",properties:{id:"drawLayer",layerControlHide:!0,isDrawingEnabled:!1,multipleFeatures:s},source:{type:"Vector"},style:((d=e.featureStyles)==null?void 0:d.layer)||{"fill-color":`rgba(${i}, 0.1)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":2,"circle-radius":5,"circle-fill-color":`rgba(${i}, 1)`,...e.measure&&{"text-value":["coalesce",["get","measure"],""],"text-fill-color":`rgba(${i}, 1)`,"text-stroke-color":"white","text-stroke-width":3,"text-font":"bold 14px sans-serif","text-overflow":!0}},interactions:[{type:"draw",options:{active:!1,id:"drawInteraction",type:e.type,modify:e.allowModify,stopClick:!0,style:((y=e.featureStyles)==null?void 0:y.layer)||{"fill-color":`rgba(${i}, 0.1)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":1,"stroke-line-dash":[7,3],"circle-radius":5,"circle-fill-color":`rgba(${i}, 1)`,...e.measure&&{"text-value":["coalesce",["get","measure"],""],"text-fill-color":`rgba(${i}, 1)`,"text-stroke-color":"white","text-stroke-width":3,"text-font":"bold 14px sans-serif","text-overflow":!0}}}},...e.layerId?[]:[{type:"select",options:{id:"SelectLayerHoverInteraction",condition:"pointermove",style:((g=e.featureStyles)==null?void 0:g.hover)||{"fill-color":`rgba(${i}, 0.2)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":2},tooltip:!1}},{type:"select",options:{id:"SelectLayerClickInteraction",condition:"click",panIn:!0,style:((f=e.featureStyles)==null?void 0:f.click)||{"fill-color":`rgba(${i}, 0.2)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":2}}}]]}),e.draw=a.interactions.drawInteraction,e.modify=a.interactions.drawInteraction_modify,z(e,a,e.layerId),e.measure&&gt(e);const l=()=>e.onModifyEnd(),o=()=>yt(e);return(b=e.modify)==null||b.on("modifyend",l),e.measure&&e.draw&&typeof e.draw.on=="function"&&e.draw.on("drawstart",u=>{const v=u.feature;L(v),v.getGeometry().on("change",()=>L(v))}),a.addEventListener("addfeatures",o),{EoxMap:a,OlMap:r,reset:u=>{var v;!u.eoxMap||!u.drawLayer||(u.drawLayer.getSource().clear(),u.eoxMap.map.removeLayer(u.drawLayer),(v=u.modify)==null||v.un("modifyend",l),u.eoxMap.removeEventListener("addfeatures",o),u.layerId||(u.draw=null),u.modify=null)}}},vt=e=>{const s=()=>{var r;e.drawnFeatures=[],(r=e.draw)==null||r.setActive(!1),!!e.layerId&&e.selectionEvents.removeSelectionEvent(),e.drawLayer.getSource().clear(),e.geoJSON=null},t=()=>{e.emitDrawnFeatures(),e.currentlyDrawing=!1,e.requestUpdate()};s(),t()},wt=(e,s)=>{setTimeout(()=>{const a=e.drawLayer.getSource().getFeatures(),r=e.eoxMap.projection||"EPSG:3857",i=e.projection,l=i?a.map(n=>{n=n.clone();const d=n.getGeometry().transform(r,i);return n.setGeometry(d),n}):a;e.setDrawnFeaturesInternal?e.setDrawnFeaturesInternal(l):e.drawnFeatures=l;let o;switch(e.format){case"geojson":o=pt(e.drawnFeatures);break;case"wkt":o=ht(e.drawnFeatures);break;case"feature":o=e.drawnFeatures;break;default:o=e.drawnFeatures;break}e.updateGeoJSON(),e.requestUpdate(),s(o)},0)},Ft=e=>{const s=r=>{(r==null?void 0:r.detail.id)!=="SelectLayerClickInteraction"||!r.detail.feature||(typeof r.detail.feature.getGeometry().getCoordinates!="function"&&(r.detail.feature=ke(r.detail.feature)),e.drawLayer.getSource().addFeature(r.detail.feature),e.eoxMap.dispatchEvent(new CustomEvent("addfeatures",{detail:r.detail})))};return{addSelectionEvent:()=>{if(e.layerId){const r=e.eoxMap.selectInteractions.SelectLayerHoverInteraction;r==null||r.setActive(!0),e.eoxMap.addEventListener("select",s)}},removeSelectionEvent:()=>{var i;const r=(i=e.eoxMap.selectInteractions)==null?void 0:i.SelectLayerHoverInteraction;r&&(r.selectedFids=[],r==null||r.setActive(!1)),e.eoxMap.removeEventListener("select",s)}}},bt=(e,s,t,a)=>{if(s){if(t){a&&t!==a&&ce(e,s),z(e,s,t);return}if(!t&&a){ce(e,s);return}}};function ce(e,s){s&&(e.discardDrawing(),e.selectionEvents.removeSelectionEvent(),e.draw=s.interactions.drawInteraction,s.selectInteractions.SelectLayerClickInteraction.remove(),s.selectInteractions.SelectLayerHoverInteraction.remove())}const he=e=>{var s;e.currentlyDrawing&&((s=e.draw)==null||s.setActive(!1),e.currentlyDrawing=!1,e.requestUpdate())},Ht=(e,s)=>{e.key==="Escape"&&he(s)};function St(e,s){const t=e.drawnFeatures.indexOf(s);t>-1&&me(e,t)}function me(e,s){if(s>-1&&s<e.drawnFeatures.length){const t=[...e.drawnFeatures];t.splice(s,1),e.drawnFeatures=t,e.emitDrawnFeatures()}}function Vt(e,s){function t(i){i.preventDefault(),i.stopPropagation()}function a(i){i.srcElement.style.opacity="0.4"}function r(i){i.srcElement.style.opacity="1"}["dragenter","dragover","dragleave","drop"].forEach(i=>{s.addEventListener(i,t,!1),["dragenter","dragover"].includes(i)?s.addEventListener(i,a,!1):s.addEventListener(i,r,!1)}),s.addEventListener("drop",i=>ye(i,e),!1)}function Lt(e){e.preventDefault(),e.stopPropagation()}function ye(e,s){Lt(e);let t;"dataTransfer"in e&&e.dataTransfer?t=e.dataTransfer.files:e.target&&"files"in e.target?t=e.target.files:t=[],Array.from(t).forEach(a=>Mt(a,s)),e.target&&"value"in e.target&&(e.target.value="")}function Mt(e,s){const t=new FileReader;t.readAsText(e),t.onloadend=function(){typeof t.result=="string"&&s.handleFeatureChange(t.result)}}var M,J,G,I,k,U,$,x;class It extends W{constructor(){super();w(this,M);w(this,J);w(this,G);w(this,I);w(this,k,!1);w(this,U);w(this,$,[]);w(this,x,t=>Ht(t,this));this.allowModify=!1,this.for="eox-map",this.currentlyDrawing=!1,this.draw=null,this.drawLayer=null,this.layerId="",this.featureName="Feature",this.featureNameKey=null,this.featureStyles=null,this.modify=null,this.multipleFeatures=!1,this.measure=!1,this.importFeatures=!1,this.showEditor=!1,this.showList=!1,this.projection="EPSG:4326",this.type="Polygon",this.selectionEvents=null,this.format="feature",this.unstyled=!1,this.noShadow=!1}static get properties(){return{allowModify:{attribute:"allow-modify",type:Boolean},for:{type:String},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},continuous:{type:Boolean},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:"feature-name",type:String},featureNameKey:{attribute:"feature-name-key",type:String},layerId:{attribute:"layer-id",type:String},featureStyles:{type:Object},modify:{attribute:!1,state:!0},multipleFeatures:{attribute:"multiple-features",type:Boolean},measure:{type:Boolean},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},showList:{attribute:"show-list",type:Boolean},projection:{type:String},noShadow:{attribute:"no-shadow",type:Boolean},format:{type:String},type:{type:String},unstyled:{type:Boolean}}}set continuous(t){F(this,U,t),t&&(this.multipleFeatures=!0)}get continuous(){return h(this,U)}setDrawnFeaturesInternal(t){F(this,k,!0),this.drawnFeatures=t,F(this,k,!1)}set drawnFeatures(t){var r;const a=h(this,$);if(F(this,$,t),this.drawLayer&&!h(this,k)){if(this.drawLayer.getSource().clear(),t!=null&&t.length){const i=((r=this.eoxMap)==null?void 0:r.projection)||"EPSG:3857",l=this.projection||"EPSG:4326";let o=t;i!==l&&(o=t.map(n=>{n=n.clone();const d=n.getGeometry().transform(l,i);return n.setGeometry(d),n})),this.drawLayer.getSource().addFeatures(o)}this.updateGeoJSON()}this.requestUpdate("drawnFeatures",a)}get drawnFeatures(){return h(this,$)}set layerId(t){bt(this,this.eoxMap,t,h(this,I)),F(this,I,t)}get layerId(){return h(this,I)}startDrawing(){ft(this)}stopDrawing(){he(this)}discardDrawing(){vt(this)}removeFeature(t){St(this,t)}removeFeatureByIndex(t){me(this,t)}handleFeatureChange(t,a=!1,r=!0){this.eoxMap.parseTextToFeature(t||JSON.stringify(oe),this.drawLayer,this.eoxMap,a,r)}handleFilesChange(t){ye(t,this)}onModifyEnd(){this.emitDrawnFeatures()}updateGeoJSON(){F(this,G,JSON.stringify(this.eoxMap.parseFeature(this.drawnFeatures)||oe,void 0,2))}emitDrawnFeatures(){wt(this,a=>{this.dispatchEvent(new CustomEvent("drawupdate",{detail:a}))})}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}updateLayer(){this.resetLayer&&this.resetLayer(this);const{EoxMap:t,OlMap:a,reset:r}=le(this,this.multipleFeatures);this.resetLayer=r,this.eoxMap=t,F(this,J,a)}firstUpdated(){var t;this.updateLayer(),this.selectionEvents=Ft(this),this.importFeatures&&Vt(this,this.eoxMap),((t=this.drawnFeatures)==null?void 0:t.length)>0?this.drawnFeatures=[...this.drawnFeatures]:this.updateGeoJSON(),this.requestUpdate()}updated(t){((r=>t.has(r)&&t.get(r)!==void 0)("for")||t.has("type")&&t.get("type")!==this.type||t.has("measure")&&t.get("measure")!==this.measure)&&(this.updateLayer(),this.currentlyDrawing=!1)}get eoxMap(){return h(this,M)}set eoxMap(t){const a=h(this,M);F(this,M,t),this.requestUpdate("eoxMap",a)}connectedCallback(){if(super.connectedCallback(),document.addEventListener("keydown",h(this,x)),this.drawLayer&&this.eoxMap){const{reset:t}=le(this,this.multipleFeatures);this.resetLayer=t}}disconnectedCallback(){var t;super.disconnectedCallback(),document.removeEventListener("keydown",h(this,x)),(t=this.resetLayer)==null||t.call(this,this)}render(){var t;return c`
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
        .geoJSON=${h(this,G)}
        .type=${this.type}
      ></eox-drawtools-controller>

      <!-- List Component -->
      ${this.showList&&((t=this.drawnFeatures)!=null&&t.length)?c`<eox-drawtools-list
            .eoxDrawTools=${this}
            .eoxMap=${this.eoxMap}
            .olMap=${h(this,J)}
            .draw=${this.draw}
            .drawLayer=${this.drawLayer}
            .drawnFeatures=${this.drawnFeatures}
            .featureName=${this.featureName}
            .featureNameKey=${this.featureNameKey}
            .modify=${this.modify}
            .unstyled=${this.unstyled}
            @changed=${()=>{this.updateGeoJSON(),this.requestUpdate()}}
          ></eox-drawtools-list>`:A}
    `}}M=new WeakMap,J=new WeakMap,G=new WeakMap,I=new WeakMap,k=new WeakMap,U=new WeakMap,$=new WeakMap,x=new WeakMap;customElements.define("eox-drawtools",It);const kt=({selectedStac:e,jsonformSchema:s,isProcessed:t,processResults:a,loading:r,isPolling:i,mapElement:l})=>{st(async()=>{var o;await te({enableCompare:((o=l.value)==null?void 0:o.id)==="compare",selectedStac:e,jsonformSchema:s,isProcessed:t,processResults:a,loading:r,isPolling:i,mapElement:l.value})}),Ue(async o=>{var g;const n=((g=l.value)==null?void 0:g.id)==="compare",d=n?"compareLayers:updated":"layers:updated";if((n?["compareLayertime:updated","compareTime:updated"]:["layertime:updated","time:updated"]).includes(o)){const f=await ze({jsonformSchema:s.value,newLayers:n?xe():Pe(),enableCompare:n,mapElement:l.value});f&&(s.value=f)}o===d&&await te({enableCompare:n,selectedStac:e,jsonformSchema:s,isProcessed:t,processResults:a,loading:r,isPolling:i,mapElement:l.value})})};function $t(e,s,t,a){const r=async l=>{await a()};ie(t,l=>{var o;e.value=((o=l==null?void 0:l.options)==null?void 0:o.execute)||!1});const i=ie([e,s],async([l,o],[n,d])=>{d&&d.removeEventListener("change",r),l&&o&&(o.removeEventListener("change",r),await rt(),o.addEventListener("change",r))},{immediate:!0});at(()=>{s.value&&s.value.removeEventListener("change",r),i()})}const Ct="eox-jsonform{padding:.7em;min-height:0px}",Bt={ref:"container",class:"py-1"},At=[".schema"],Nt={class:"text-right"},Ot={__name:"index",props:{enableCompare:{type:Boolean,default:!1},vegaEmbedOptions:{type:Object,default(){return{actions:!0}}}},setup(e){const s=V(!1),t=V(null),a=Te("jsonformEl"),r=Z(()=>{var m;return(m=y.value)==null?void 0:m.links.filter(p=>p.endpoint==="eoxhub_workspaces").length}),i=V(!1),l=V(!1),o=V(!1),n=V([]),d=Z(()=>!l.value&&!!t.value&&!!a.value),{selectedStac:y,selectedCompareStac:g}=Ce(Be()),f=e.enableCompare?g:y,b=e.enableCompare?Ae:Ne,u=e.enableCompare?Oe:Je,v=e.enableCompare?qe:Ke,C=Z(()=>{var m;return u.value+((m=b.value)==null?void 0:m.id)+JSON.stringify(t.value)});kt({selectedStac:f,mapElement:b,jsonformSchema:t,isProcessed:s,processResults:n,loading:i,isPolling:o});const q=()=>{n.value.forEach(m=>{var H;if(!m)return;let p="";typeof m=="string"?(p=m.includes("/")?m.split("/").pop()??"":m,p=p.includes("?")?p.split("?")[0]:p):p=((H=f.value)==null?void 0:H.id)+"_process_results.json",Ye(p,m)})},Q=async()=>{var X;if(Qe(t.value).some(P=>{var Y,D;return Array.isArray((Y=a.value)==null?void 0:Y.value[P])&&!((D=a.value)!=null&&D.value[P].length)})){s.value=!1;const P=e.enableCompare?je:_e;P.value=null;return}const H=(X=a.value)==null?void 0:X.editor.validate();if(H!=null&&H.length){console.warn("[eodash] Form validation failed",H);return}n.value=[],await We({jobs:v,selectedStac:f,jsonformEl:a,jsonformSchema:t,loading:i,isPolling:o,processResults:n,mapElement:b.value}),s.value=!0,r.value&&Xe(v,u.value)};return $t(l,a,t,Q),(m,p)=>(B(),se("div",Bt,[et(Re,{"map-element":j(b),"enable-compare":e.enableCompare},null,8,["map-element","enable-compare"]),t.value?(B(),se("eox-jsonform",{key:C.value,ref_key:"jsonformEl",ref:a,".schema":t.value},null,40,At)):_("v-if",!0),j(Ge)?_("v-if",!0):(B(),R(Ze,{key:1,"vega-embed-options":e.vegaEmbedOptions,"enable-compare":e.enableCompare},null,8,["vega-embed-options","enable-compare"])),tt("div",Nt,[d.value?(B(),R(ee,{key:0,loading:i.value,style:{"margin-right":"8px"},"append-icon":[j(De)],onClick:Q,density:"comfortable",size:"small"},{default:ae(()=>[...p[0]||(p[0]=[re(" Execute ",-1)])]),_:1},8,["loading","append-icon"])):_("v-if",!0),n.value.length&&s.value&&!r.value?(B(),R(ee,{key:1,color:"primary",style:{"margin-right":"8px"},"append-icon":[j(Ee)],onClick:q,size:"small",density:"comfortable"},{default:ae(()=>[...p[1]||(p[1]=[re(" Download ",-1)])]),_:1},8,["append-icon"])):_("v-if",!0)])],512))}},gs=$e(Ot,[["styles",[Ct]]]);export{gs as default};
