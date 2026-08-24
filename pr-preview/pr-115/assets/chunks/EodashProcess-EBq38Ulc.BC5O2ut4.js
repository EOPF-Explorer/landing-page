var ye=Object.defineProperty;var T=e=>{throw TypeError(e)};var ge=(e,s,t)=>s in e?ye(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var L=(e,s,t)=>ge(e,typeof s!="symbol"?s+"":s,t),ee=(e,s,t)=>s.has(e)||T("Cannot "+t);var y=(e,s,t)=>(ee(e,s,"read from private field"),t?t.call(e):s.get(e)),F=(e,s,t)=>s.has(e)?T("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(e):s.set(e,t),S=(e,s,t,a)=>(ee(e,s,"write to private field"),a?a.call(e,t):s.set(e,t),t);import{_ as ve,aF as we,T as be,aZ as Fe,a_ as Se,X as He,R as Ve,L as Le,aI as te,b2 as ke,$ as Ie,a0 as Me,O as Ce,P as $e}from"./eo-dash.CSjcXkzF.js";import{m as xe,g as Be,u as Ae}from"./async-BPaz2M7p.Dk9TGJMg.js";import{i as se,u as Oe,h as Ne}from"./handling-DBtsViVV.BDT8H67W.js";import _e from"./EodashChart-CHbOCVHx.CKlEIxEW.js";import Je,{t as Ge,n as Ue}from"./ProcessList-D3Cpyb7z.DFnMk9XC.js";import{x as Re,y as je}from"./mdi.I3rz4PHh.js";import"./main.DLQC0LEl.js";import{A as N,a as E,b as d}from"./lit-element.CBn2YVps.js";import{a as Pe,i as qe,p as Ke}from"./map.B6QQHL2e.js";import{n as Z}from"./when.BR7zwNJC.js";import{a as Ze,e as ze}from"./addCommonStyleSheet.Ct85SDKw.js";import{ak as We,al as Qe}from"./proj.Cao7xDc0.js";import{g as Xe}from"./getElement.COiK8z0h.js";import{G as Ye}from"./GeoJSON.CXhIz4t_.js";import{W as Ee}from"./WKT.BHlDgio7.js";import{t as De}from"./Feature.BW_ECUdc.js";import"./main.D62g98cC.js";import{a4 as Te,q as X,o as k,c as z,j as et,E as tt,k as P,e as O,b as W,w as ae,a as re,p as I,h as Q,v as st,P as ce,x as at}from"./framework.BuBi7-L5.js";import"./commonjsHelpers.BosuxZz1.js";import"./migrate.6EXgl2HJ.js";import"./main.C2xKlHXZ.js";import"./XYZ.BdTVY-yK.js";import"./index.BUIxO2d3.js";import"./utils.BJtOAKhC.js";import"./index.CxojoGlr.js";import"./tooltip-MB3ZDidj.Yhz4EWT-.js";import"./VTooltip-Bp5OQWRx.Om_1Snse.js";import"./forwardRefs-CiCrugIF.CnvdveYV.js";import"./transition-CalG0CWZ.pzXBC40S.js";import"./sequential.BdGG0OD6.js";import"./orient2d.DArCjZZA.js";import"./Polygon.PzwaaCqo.js";import"./GeometryCollection.BdEFWMfg.js";import"./browser.DlCpMekl.js";import"./toolcool-range-slider.min.BBXDELo7.js";import"./index.BIJR-IiI.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt=Pe(class extends qe{constructor(){super(...arguments),this.key=N}render(e,s){return this.key=e,s}update(e,[s,t]){return s!==this.key&&(Ke(e),this.key=s),t}}),it=e=>{e.hoverInteraction=e.eoxMap.selectInteractions.SelectLayerHoverInteraction,e.clickInteraction=e.eoxMap.selectInteractions.SelectLayerClickInteraction;const s=()=>{e.requestUpdate()};e.hoverInteraction.selectStyleLayer.on("change",s),e.clickInteraction.selectStyleLayer.on("change",s)},nt=(e,s,t)=>{if(e.clickId===s)return;const a=t?[]:[s];e.hoverInteraction.highlightById(a)},ot=(e,s,t)=>{e.stopPropagation();const a=Number(e.target.getAttribute("index")),r=s.drawLayer.getSource().getFeatures()[a];s.drawLayer.getSource().removeFeature(r),s.drawnFeatures.splice(a,1),t.emitDrawnFeatures(),s.requestUpdate()},ie={duration:750,padding:[20,20,20,20]},ne={type:"FeatureCollection",features:[]},lt=(e,s)=>{const{clickId:t,drawLayer:a,olMap:r,clickInteraction:i}=s,l=i.getId(e);if(t===l){const n=a.getSource().getExtent();r.getView().fit(n,ie),i.highlightById([])}else{const n=s.eoxMap.projection||"EPSG:3857",u=s.eoxDrawTools.projection,m=e.clone().getGeometry().transform(u,n).getExtent();i.highlightById([l]),r.getView().fit(m,ie)}s.requestUpdate()};class de extends E{constructor(){super();L(this,"hoverInteraction");L(this,"clickInteraction");L(this,"hoverId");L(this,"clickId");this.eoxDrawTools=null,this.eoxMap=null,this.olMap=null,this.draw=null,this.drawLayer=null,this.drawnFeatures=[],this.featureName="Feature",this.featureNameKey=null,this.modify=null,this.unstyled=!1}_handleDelete(t){ot(t,this,this.eoxDrawTools),this.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))}_handleFeatureSelectAndDeselect(t){lt(t,this)}_handleHoverFeature(t,a=!1){nt(this,t,a)}firstUpdated(){it(this)}createRenderRoot(){return this}render(){var a,r;this.hoverId=(a=this.hoverInteraction)==null?void 0:a.selectedFids[0],this.clickId=(r=this.clickInteraction)==null?void 0:r.selectedFids[0];const t=d`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>trash-can-outline</title>
      <path
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
      />
    </svg>`;return d`
      <ul class="list no-space">
        ${this.drawnFeatures.map((i,l)=>{var f;const o=l+1,n=Object.values(this.eoxMap.selectInteractions)[0].getId(i),u=this.hoverId===n,m=this.clickId===n,b=u?"surface-container-low":m?"fill":N,w=(f=this.featureNameKey)==null?void 0:f.split("."),g=i.get(this.featureNameKey)||(w==null?void 0:w.reduce((V,q)=>V==null?void 0:V[q],{...i.getProperties()})),p=g||`${this.featureName} ${o}`;return rt(o,d`
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
                  ${this.unstyled?"x":d`<i class="small">${t}</i>`}
                </button>
              </li>
            `)})}
      </ul>
    `}}L(de,"properties",{eoxDrawTools:{attribute:!1,state:!0},eoxMap:{attribute:!1,state:!0},olMap:{attribute:!1,state:!0},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:!1,state:!0,type:String},featureNameKey:{attribute:!1,state:!0,type:String},modify:{attribute:!1,state:!0},unstyled:{type:Boolean}});customElements.define("eox-drawtools-list",de);const ct=e=>{const{multipleFeatures:s,drawnFeatures:t,currentlyDrawing:a}=e,r=!s&&(t==null?void 0:t.length)>0||a,i=!(t!=null&&t.length)&&!a;return{drawDisabled:r,discardDisabled:i}};function dt(e){navigator.clipboard.writeText(e).then(function(){},function(s){console.error("Could not copy text: ",s)})}const ut=(e,s)=>new Ye().writeFeaturesObject(e,s),pt=(e,s)=>new Ee().writeFeatures(e,s);var _,J;class ue extends E{constructor(){super();F(this,_,!0);F(this,J,!0);this.multipleFeatures=!1,this.drawnFeatures=[],this.importFeatures=!1,this.showEditor=!1,this.currentlyDrawing=!1,this.drawFunc=null,this.geoJSON="",this.type="Polygon",this.unstyled=!1,this.select=!1}updateButtonStates(){const{drawDisabled:t,discardDisabled:a}=ct(this);S(this,_,t),S(this,J,a)}createRenderRoot(){return this}render(){this.updateButtonStates();const t=this.currentlyDrawing?"drawing":"draw",a={Polygon:d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>shape-polygon-plus</title>
        <path
          d="M17,15.7V13H19V17L10,21L3,14L7,5H11V7H8.3L5.4,13.6L10.4,18.6L17,15.7M22,5V7H19V10H17V7H14V5H17V2H19V5H22Z"
        />
      </svg>`,Point:d`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>vector-point-plus</title>
          <path
            d="M9 9V15H15V9H9M11 11H13V13H11V11M18 15V18H15V20H18V23H20V20H23V18H20V15H18Z"
          />
        </svg>
      `,Circle:d`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>shape-circle-plus</title>
          <path
            d="M11,19A6,6 0 0,0 17,13H19A8,8 0 0,1 11,21A8,8 0 0,1 3,13A8,8 0 0,1 11,5V7A6,6 0 0,0 5,13A6,6 0 0,0 11,19M19,5H22V7H19V10H17V7H14V5H17V2H19V5Z"
          />
        </svg>
      `,LineString:d`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>vector-polyline-plus</title>
          <path
            d="M2 3V9H4.95L6.95 15H6V21H12V16.41L17.41 11H22V5H16V9.57L10.59 15H9.06L7.06 9H8V3H2M4 5H6V7H4V5M18 7H20V9H18V7M18 15V18H15V20H18V23H20V20H23V18H20V15H18M8 17H10V19H8V17Z"
          />
        </svg>
      `,Box:d`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>shape-rectangle-plus</title>
          <path
            d="M19,6H22V8H19V11H17V8H14V6H17V3H19V6M17,17V14H19V19H3V6H11V8H5V17H17Z"
          />
        </svg>
      `},r=d`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>cursor-default-click</title>
      <path
        d="M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10"
      />
    </svg>`,i=d`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>trash-can-outline</title>
      <path
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
      />
    </svg>`,l=d`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>pencil-outline</title>
      <path
        d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
      />
    </svg>`,o=d`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>import</title>
      <path
        d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z"
      />
    </svg>`,n=d`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>content-copy</title>
      <path
        d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
      />
    </svg>`;return d`
      <nav>
        <slot></slot>
        <div class="max">
          <!-- Draw Button -->
          <button
            data-cy="drawBtn"
            class="transparent square primary-text no-margin small"
            title="${this.unstyled?this.select?"Select":"Draw":""}"
            ?disabled="${y(this,_)||N}"
            @click="${()=>this.drawFunc.start()}"
          >
            ${this.unstyled?t:d`
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
            ?disabled="${y(this,J)||N}"
            @click="${()=>this.drawFunc.discard()}"
          >
            ${this.unstyled?"discard":d`
                  <i class="small">${i}</i>
                  <span class="tooltip bottom">Discard</span>
                `}
          </button>
        </div>

        <!-- Editor Button -->
        ${Z(this.showEditor,()=>d`
            <button
              data-cy="editorBtn"
              class="transparent circle primary-text no-margin small"
              title="${this.unstyled?"Edit features":""}"
              @click=${()=>this.renderRoot.querySelector("#editor").classList.toggle("hidden")}
            >
              ${this.unstyled?"import":d`
                    <i class="small">${l}</i>
                    <span class="tooltip bottom">Edit features</span>
                  `}
            </button>
          `)}

        <!-- Import Button -->
        ${Z(this.importFeatures,()=>d`
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
              ${this.unstyled?"import":d`
                    <i class="small">${o}</i>
                    <span class="tooltip bottom">Import features</span>
                  `}
            </button>
          `)}
      </nav>

      <!-- Geo JSON Wrapper -->
      ${Z(this.showEditor,()=>d`
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
              @click=${()=>dt(this.geoJSON)}
            >
              ${this.unstyled?"copy":d`
                    <i class="tiny">${n}</i>
                    <span class="tooltip top">Copy</span>
                  `}
            </button>
          </div>
        `)}
    `}}_=new WeakMap,J=new WeakMap,L(ue,"properties",{multipleFeatures:{attribute:!1,type:Boolean},drawnFeatures:{attribute:!1,state:!0,type:Array},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},drawFunc:{attribute:!1,type:Object},select:{type:Boolean},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},geoJSON:{attribute:"geo-json",type:String},type:{attribute:"type",type:String},unstyled:{type:Boolean}});customElements.define("eox-drawtools-controller",ue);Ze();const ht=`
  ${ze}
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
`,mt=e=>{(()=>{var t;if(e.emitDrawnFeatures(),!e.multipleFeatures)(t=e.draw)==null||t.setActive(!1),e.selectionEvents.removeSelectionEvent(),e.currentlyDrawing=!1;else if(e.continuous)if(!e.layerId)e.drawLayer.getSource().clear(),e.drawnFeatures=[];else{const r=e.drawLayer.getSource().getFeatures().at(-1);if(e.drawLayer.getSource().clear(),!r)return;e.drawLayer.getSource().addFeature(r),e.drawnFeatures=[r]}})(),e.requestUpdate()},ft=e=>{const s=()=>{var a;e.drawLayer.set("isDrawingEnabled",!0),(a=e.draw)==null||a.setActive(!0),e.selectionEvents.addSelectionEvent()},t=()=>{e.currentlyDrawing=!0,e.requestUpdate()};s(),t()},Y=(e,s,t)=>{var n,u,m,b;if(!t||!s)return;const a=s.getLayerById(t),r=a?JSON.parse(JSON.stringify(a.get("_jsonDefinition"))):null;if(!r){console.error(`Layer with id ${t} not found`);return}const i={type:"select",active:!1,options:{id:"SelectLayerHoverInteraction",condition:"pointermove",active:!1,style:((n=e.featureStyles)==null?void 0:n.hover)||{"fill-color":"rgba(0, 0, 0,0.0)","stroke-color":"#3399CC","stroke-width":2.5}}},l={type:"select",options:{id:"SelectLayerClickInteraction",condition:"click",multi:e.multipleFeatures,modify:e.allowModify,active:!1,style:((u=e.featureStyles)==null?void 0:u.click)||{"fill-color":"rgba(0, 0, 0,0.0)","stroke-color":"rgba(0, 0, 0,0.0)"}}};r.interactions=[i,l],s.addOrUpdateLayer(r),pe(s.layers,t,[r]);const o=e.draw;e.draw=s.selectInteractions.SelectLayerClickInteraction,o==null||o.setActive(!1),(m=s.selectInteractions.SelectLayerClickInteraction)==null||m.setActive(!1),(b=s.selectInteractions.SelectLayerHoverInteraction)==null||b.setActive(!1)};function pe(e,s,t){const a=e.findIndex(r=>r.properties.id===s);if(a!==-1)return e.splice(a,1,...t),e;for(const r of e)if(r.type==="Group"){const i=pe(r.layers,s,t);i!=null&&i.length&&(r.layers=i)}return e}const M=e=>{const s=e.getGeometry();if(!s)return;let t="";if(s.getType()==="Polygon"||s.getType()==="MultiPolygon"){const a=We(s);a>1e6?t=(a/1e6).toFixed(2)+" km²":t=a.toFixed(2)+" m²"}else if(s.getType()==="LineString"||s.getType()==="MultiLineString"){const a=Qe(s);a>1e3?t=(a/1e3).toFixed(2)+" km":t=a.toFixed(2)+" m"}else if(s.getType()==="Circle"){const a=s.getRadius(),r=Math.PI*Math.pow(a,2);r>1e6?t=(r/1e6).toFixed(2)+" km²":t=r.toFixed(2)+" m²"}t&&e.get("measure")!==t&&e.set("measure",t)},yt=e=>{const s=e.drawLayer.getSource(),t=a=>{const r=a.feature;r&&(M(r),r.getGeometry().on("change",()=>M(r)))};s.on("addfeature",t),s.getFeatures().forEach(a=>{M(a),a.getGeometry().on("change",()=>M(a))})},oe=(e,s)=>{var u,m,b,w,g;const a=Xe(e.for),r=a.map,i="0, 65, 112";e.drawLayer=a.addOrUpdateLayer({zIndex:100,type:"Vector",properties:{id:"drawLayer",layerControlHide:!0,isDrawingEnabled:!1,multipleFeatures:s},source:{type:"Vector"},style:((u=e.featureStyles)==null?void 0:u.layer)||{"fill-color":`rgba(${i}, 0.1)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":2,"circle-radius":5,"circle-fill-color":`rgba(${i}, 1)`,...e.measure&&{"text-value":["coalesce",["get","measure"],""],"text-fill-color":`rgba(${i}, 1)`,"text-stroke-color":"white","text-stroke-width":3,"text-font":"bold 14px sans-serif","text-overflow":!0}},interactions:[{type:"draw",options:{active:!1,id:"drawInteraction",type:e.type,modify:e.allowModify,stopClick:!0,style:((m=e.featureStyles)==null?void 0:m.layer)||{"fill-color":`rgba(${i}, 0.1)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":1,"stroke-line-dash":[7,3],"circle-radius":5,"circle-fill-color":`rgba(${i}, 1)`,...e.measure&&{"text-value":["coalesce",["get","measure"],""],"text-fill-color":`rgba(${i}, 1)`,"text-stroke-color":"white","text-stroke-width":3,"text-font":"bold 14px sans-serif","text-overflow":!0}}}},...e.layerId?[]:[{type:"select",options:{id:"SelectLayerHoverInteraction",condition:"pointermove",style:((b=e.featureStyles)==null?void 0:b.hover)||{"fill-color":`rgba(${i}, 0.2)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":2},tooltip:!1}},{type:"select",options:{id:"SelectLayerClickInteraction",condition:"click",panIn:!0,style:((w=e.featureStyles)==null?void 0:w.click)||{"fill-color":`rgba(${i}, 0.2)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":2}}}]]}),e.draw=a.interactions.drawInteraction,e.modify=a.interactions.drawInteraction_modify,Y(e,a,e.layerId),e.measure&&yt(e);const l=()=>e.onModifyEnd(),o=()=>mt(e);return(g=e.modify)==null||g.on("modifyend",l),e.measure&&e.draw&&typeof e.draw.on=="function"&&e.draw.on("drawstart",p=>{const f=p.feature;M(f),f.getGeometry().on("change",()=>M(f))}),a.addEventListener("addfeatures",o),{EoxMap:a,OlMap:r,reset:p=>{var f;!p.eoxMap||!p.drawLayer||(p.drawLayer.getSource().clear(),p.eoxMap.map.removeLayer(p.drawLayer),(f=p.modify)==null||f.un("modifyend",l),p.eoxMap.removeEventListener("addfeatures",o),p.layerId||(p.draw=null),p.modify=null)}}},gt=e=>{const s=()=>{var r;e.drawnFeatures=[],(r=e.draw)==null||r.setActive(!1),!!e.layerId&&e.selectionEvents.removeSelectionEvent(),e.drawLayer.getSource().clear(),e.geoJSON=null},t=()=>{e.emitDrawnFeatures(),e.currentlyDrawing=!1,e.requestUpdate()};s(),t()},vt=(e,s)=>{setTimeout(()=>{const a=e.drawLayer.getSource().getFeatures(),r=e.eoxMap.projection||"EPSG:3857",i=e.projection,l=i?a.map(n=>{n=n.clone();const u=n.getGeometry().transform(r,i);return n.setGeometry(u),n}):a;e.setDrawnFeaturesInternal?e.setDrawnFeaturesInternal(l):e.drawnFeatures=l;let o;switch(e.format){case"geojson":o=ut(e.drawnFeatures);break;case"wkt":o=pt(e.drawnFeatures);break;case"feature":o=e.drawnFeatures;break;default:o=e.drawnFeatures;break}e.updateGeoJSON(),e.requestUpdate(),s(o)},0)},wt=e=>{const s=r=>{(r==null?void 0:r.detail.id)!=="SelectLayerClickInteraction"||!r.detail.feature||(typeof r.detail.feature.getGeometry().getCoordinates!="function"&&(r.detail.feature=De(r.detail.feature)),e.drawLayer.getSource().addFeature(r.detail.feature),e.eoxMap.dispatchEvent(new CustomEvent("addfeatures",{detail:r.detail})))};return{addSelectionEvent:()=>{if(e.layerId){const r=e.eoxMap.selectInteractions.SelectLayerHoverInteraction;r==null||r.setActive(!0),e.eoxMap.addEventListener("select",s)}},removeSelectionEvent:()=>{var i;const r=(i=e.eoxMap.selectInteractions)==null?void 0:i.SelectLayerHoverInteraction;r&&(r.selectedFids=[],r==null||r.setActive(!1)),e.eoxMap.removeEventListener("select",s)}}},bt=(e,s,t,a)=>{if(s){if(t){a&&t!==a&&le(e,s),Y(e,s,t);return}if(!t&&a){le(e,s);return}}};function le(e,s){s&&(e.discardDrawing(),e.selectionEvents.removeSelectionEvent(),e.draw=s.interactions.drawInteraction,s.selectInteractions.SelectLayerClickInteraction.remove(),s.selectInteractions.SelectLayerHoverInteraction.remove())}const he=e=>{var s;e.currentlyDrawing&&((s=e.draw)==null||s.setActive(!1),e.currentlyDrawing=!1,e.requestUpdate())},Ft=(e,s)=>{e.key==="Escape"&&he(s)};function St(e,s){const t=e.drawnFeatures.indexOf(s);t>-1&&me(e,t)}function me(e,s){if(s>-1&&s<e.drawnFeatures.length){const t=[...e.drawnFeatures];t.splice(s,1),e.drawnFeatures=t,e.emitDrawnFeatures()}}function Ht(e,s){function t(i){i.preventDefault(),i.stopPropagation()}function a(i){i.srcElement.style.opacity="0.4"}function r(i){i.srcElement.style.opacity="1"}["dragenter","dragover","dragleave","drop"].forEach(i=>{s.addEventListener(i,t,!1),["dragenter","dragover"].includes(i)?s.addEventListener(i,a,!1):s.addEventListener(i,r,!1)}),s.addEventListener("drop",i=>fe(i,e),!1)}function Vt(e){e.preventDefault(),e.stopPropagation()}function fe(e,s){Vt(e);let t;"dataTransfer"in e&&e.dataTransfer?t=e.dataTransfer.files:e.target&&"files"in e.target?t=e.target.files:t=[],Array.from(t).forEach(a=>Lt(a,s)),e.target&&"value"in e.target&&(e.target.value="")}function Lt(e,s){const t=new FileReader;t.readAsText(e),t.onloadend=function(){typeof t.result=="string"&&s.handleFeatureChange(t.result)}}var C,G,U,$,x,R,B,j;class kt extends E{constructor(){super();F(this,C);F(this,G);F(this,U);F(this,$);F(this,x,!1);F(this,R);F(this,B,[]);F(this,j,t=>Ft(t,this));this.allowModify=!1,this.for="eox-map",this.currentlyDrawing=!1,this.draw=null,this.drawLayer=null,this.layerId="",this.featureName="Feature",this.featureNameKey=null,this.featureStyles=null,this.modify=null,this.multipleFeatures=!1,this.measure=!1,this.importFeatures=!1,this.showEditor=!1,this.showList=!1,this.projection="EPSG:4326",this.type="Polygon",this.selectionEvents=null,this.format="feature",this.unstyled=!1,this.noShadow=!1}static get properties(){return{allowModify:{attribute:"allow-modify",type:Boolean},for:{type:String},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},continuous:{type:Boolean},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:"feature-name",type:String},featureNameKey:{attribute:"feature-name-key",type:String},layerId:{attribute:"layer-id",type:String},featureStyles:{type:Object},modify:{attribute:!1,state:!0},multipleFeatures:{attribute:"multiple-features",type:Boolean},measure:{type:Boolean},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},showList:{attribute:"show-list",type:Boolean},projection:{type:String},noShadow:{attribute:"no-shadow",type:Boolean},format:{type:String},type:{type:String},unstyled:{type:Boolean}}}set continuous(t){S(this,R,t),t&&(this.multipleFeatures=!0)}get continuous(){return y(this,R)}setDrawnFeaturesInternal(t){S(this,x,!0),this.drawnFeatures=t,S(this,x,!1)}set drawnFeatures(t){var r;const a=y(this,B);if(S(this,B,t),this.drawLayer&&!y(this,x)){if(this.drawLayer.getSource().clear(),t!=null&&t.length){const i=((r=this.eoxMap)==null?void 0:r.projection)||"EPSG:3857",l=this.projection||"EPSG:4326";let o=t;i!==l&&(o=t.map(n=>{n=n.clone();const u=n.getGeometry().transform(l,i);return n.setGeometry(u),n})),this.drawLayer.getSource().addFeatures(o)}this.updateGeoJSON()}this.requestUpdate("drawnFeatures",a)}get drawnFeatures(){return y(this,B)}set layerId(t){bt(this,this.eoxMap,t,y(this,$)),S(this,$,t)}get layerId(){return y(this,$)}startDrawing(){ft(this)}stopDrawing(){he(this)}discardDrawing(){gt(this)}removeFeature(t){St(this,t)}removeFeatureByIndex(t){me(this,t)}handleFeatureChange(t,a=!1,r=!0){this.eoxMap.parseTextToFeature(t||JSON.stringify(ne),this.drawLayer,this.eoxMap,a,r)}handleFilesChange(t){fe(t,this)}onModifyEnd(){this.emitDrawnFeatures()}updateGeoJSON(){S(this,U,JSON.stringify(this.eoxMap.parseFeature(this.drawnFeatures)||ne,void 0,2))}emitDrawnFeatures(){vt(this,a=>{this.dispatchEvent(new CustomEvent("drawupdate",{detail:a}))})}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}updateLayer(){this.resetLayer&&this.resetLayer(this);const{EoxMap:t,OlMap:a,reset:r}=oe(this,this.multipleFeatures);this.resetLayer=r,this.eoxMap=t,S(this,G,a)}firstUpdated(){var t;this.updateLayer(),this.selectionEvents=wt(this),this.importFeatures&&Ht(this,this.eoxMap),((t=this.drawnFeatures)==null?void 0:t.length)>0?this.drawnFeatures=[...this.drawnFeatures]:this.updateGeoJSON(),this.requestUpdate()}updated(t){((r=>t.has(r)&&t.get(r)!==void 0)("for")||t.has("type")&&t.get("type")!==this.type||t.has("measure")&&t.get("measure")!==this.measure)&&(this.updateLayer(),this.currentlyDrawing=!1)}get eoxMap(){return y(this,C)}set eoxMap(t){const a=y(this,C);S(this,C,t),this.requestUpdate("eoxMap",a)}connectedCallback(){if(super.connectedCallback(),document.addEventListener("keydown",y(this,j)),this.drawLayer&&this.eoxMap){const{reset:t}=oe(this,this.multipleFeatures);this.resetLayer=t}}disconnectedCallback(){var t;super.disconnectedCallback(),document.removeEventListener("keydown",y(this,j)),(t=this.resetLayer)==null||t.call(this,this)}render(){var t;return d`
      <style>
        :host { display: block; }
        ${!this.unstyled&&ht}
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
        .geoJSON=${y(this,U)}
        .type=${this.type}
      ></eox-drawtools-controller>

      <!-- List Component -->
      ${this.showList&&((t=this.drawnFeatures)!=null&&t.length)?d`<eox-drawtools-list
            .eoxDrawTools=${this}
            .eoxMap=${this.eoxMap}
            .olMap=${y(this,G)}
            .draw=${this.draw}
            .drawLayer=${this.drawLayer}
            .drawnFeatures=${this.drawnFeatures}
            .featureName=${this.featureName}
            .featureNameKey=${this.featureNameKey}
            .modify=${this.modify}
            .unstyled=${this.unstyled}
            @changed=${()=>{this.updateGeoJSON(),this.requestUpdate()}}
          ></eox-drawtools-list>`:N}
    `}}C=new WeakMap,G=new WeakMap,U=new WeakMap,$=new WeakMap,x=new WeakMap,R=new WeakMap,B=new WeakMap,j=new WeakMap;customElements.define("eox-drawtools",kt);var It=({selectedStac:e,jsonformSchema:s,isProcessed:t,processResults:a,loading:r,isPolling:i,mapElement:l})=>{st(async()=>{var o;await se({enableCompare:((o=l.value)==null?void 0:o.id)==="compare",selectedStac:e,jsonformSchema:s,isProcessed:t,processResults:a,loading:r,isPolling:i,mapElement:l.value})}),ke(async o=>{var m,b,w;const n=((m=l.value)==null?void 0:m.id)==="compare",u=n?"compareLayers:updated":"layers:updated";if((n?["compareLayertime:updated","compareTime:updated"]:["layertime:updated","time:updated"]).includes(o)){const g=await Oe({jsonformSchema:s.value,newLayers:n?Ie():Me(),enableCompare:n,mapElement:l.value});g&&(Object.values(g.properties??{}).some(p=>{var f,V;return(V=(f=p==null?void 0:p.options)==null?void 0:f.drawtools)==null?void 0:V.layerId})&&!((w=(b=l.value)==null?void 0:b.selectInteractions)!=null&&w.SelectLayerClickInteraction)&&(s.value=null,await ce()),s.value=g)}o===u&&await se({enableCompare:n,selectedStac:e,jsonformSchema:s,isProcessed:t,processResults:a,loading:r,isPolling:i,mapElement:l.value})})};function Mt(e,s,t,a){const r=async l=>{await a()};X(t,l=>{var o;e.value=((o=l==null?void 0:l.options)==null?void 0:o.execute)||!1});const i=X([e,s],async([l,o],[n,u])=>{u&&u.removeEventListener("change",r),l&&o&&(o.removeEventListener("change",r),await ce(),o.addEventListener("change",r))},{immediate:!0});at(()=>{s.value&&s.value.removeEventListener("change",r),i()})}var Ct="eox-jsonform{flex-shrink:0;min-height:0;padding:0 12px}.bg-surface:has(.eodash-process-container){height:calc(100% - 30px);overflow:hidden}.eodash-process-container{flex-direction:column;height:100%;display:flex;overflow:hidden}.eodash-process-content{flex-direction:column;flex-grow:1;display:flex;overflow-y:auto}.eodash-process-actions{text-align:right;background:inherit;border-top:1px solid #0000001a;flex-shrink:0;padding:4px 12px}",$t={ref:"container",class:"eodash-process-container"},xt={class:"eodash-process-content"},Bt=[".schema"],At={key:0,class:"eodash-process-actions"},gs=ve({__name:"index",props:{enableCompare:{type:Boolean,default:!1},vegaEmbedOptions:{type:Object,default(){return{actions:!0}}}},setup(e){const s=I(!1),t=I(null),a=Te("jsonformEl");X(a,c=>{if(c&&c.shadowRoot){const h="eodash-drawtools-inline-style";if(!c.shadowRoot.getElementById(h)){const v=document.createElement("style");v.id=h,v.textContent=`
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
      `,c.shadowRoot.appendChild(v)}const H=()=>{var A;const v=(A=c==null?void 0:c.shadowRoot)==null?void 0:A.querySelector("eox-drawtools");if(v&&v.shadowRoot&&!v.shadowRoot.getElementById("eodash-drawtools-indent-style")){const K=document.createElement("style");return K.id="eodash-drawtools-indent-style",K.textContent=`
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
          `,v.shadowRoot.appendChild(K),!0}return!1};if(!H()){const v=new MutationObserver(()=>{H()&&v.disconnect()});v.observe(c.shadowRoot,{childList:!0,subtree:!0})}}});const r=Q(()=>{var c;return(c=m.value)==null?void 0:c.links.filter(h=>h.endpoint==="eoxhub_workspaces").length}),i=I(!1),l=I(!1),o=I(!1),n=I([]),u=Q(()=>!l.value&&!!t.value&&!!a.value),{selectedStac:m,selectedCompareStac:b}=we(be()),w=e.enableCompare?b:m,g=e.enableCompare?Fe:Se,p=e.enableCompare?He:Ve,f=e.enableCompare?Ge:Ue,V=Q(()=>{var c;return p.value+((c=g.value)==null?void 0:c.id)+JSON.stringify(t.value)});It({selectedStac:w,mapElement:g,jsonformSchema:t,isProcessed:s,processResults:n,loading:i,isPolling:o});const q=()=>{n.value.forEach(c=>{var H;if(!c)return;let h="";typeof c=="string"?(h=c.includes("/")?c.split("/").pop()??"":c,h=h.includes("?")?h.split("?")[0]:h):h=((H=w.value)==null?void 0:H.id)+"_process_results.json",xe(h,c)})},D=async()=>{var h;if(Be(t.value).some(H=>{var v,A;return Array.isArray((v=a.value)==null?void 0:v.value[H])&&!((A=a.value)!=null&&A.value[H].length)})){s.value=!1;const H=e.enableCompare?Ce:$e;H.value=null;return}const c=(h=a.value)==null?void 0:h.editor.validate();if(c!=null&&c.length){console.warn("[eodash] Form validation failed",c);return}n.value=[],await Ne({jobs:f,selectedStac:w,jsonformEl:a,jsonformSchema:t,loading:i,isPolling:o,processResults:n,mapElement:g.value}),s.value=!0,r.value&&Ae(f,p.value)};return Mt(l,a,t,D),(c,h)=>(k(),z("div",$t,[et("div",xt,[tt(Je,{"map-element":P(g),"enable-compare":e.enableCompare},null,8,["map-element","enable-compare"]),t.value?(k(),z("eox-jsonform",{key:V.value,ref_key:"jsonformEl",ref:a,".schema":t.value},null,40,Bt)):O("v-if",!0),P(Le)?O("v-if",!0):(k(),W(_e,{key:1,"vega-embed-options":e.vegaEmbedOptions,"enable-compare":e.enableCompare},null,8,["vega-embed-options","enable-compare"]))]),u.value||n.value.length&&s.value&&!r.value?(k(),z("div",At,[u.value?(k(),W(te,{key:0,loading:i.value,style:{"margin-right":"8px"},"append-icon":[P(Re)],density:"comfortable",size:"small",onClick:D},{default:ae(()=>[...h[0]||(h[0]=[re(" Execute ",-1)])]),_:1},8,["loading","append-icon"])):O("v-if",!0),n.value.length&&s.value&&!r.value?(k(),W(te,{key:1,color:"primary",style:{"margin-right":"8px"},"append-icon":[P(je)],size:"small",density:"comfortable",onClick:q},{default:ae(()=>[...h[1]||(h[1]=[re(" Download ",-1)])]),_:1},8,["append-icon"])):O("v-if",!0)])):O("v-if",!0)],512))}},[["styles",[Ct]]]);export{gs as default};
