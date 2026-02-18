var pe=Object.defineProperty;var Y=e=>{throw TypeError(e)};var he=(e,s,t)=>s in e?pe(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var S=(e,s,t)=>he(e,typeof s!="symbol"?s+"":s,t),D=(e,s,t)=>s.has(e)||Y("Cannot "+t);var w=(e,s,t)=>(D(e,s,"read from private field"),t?t.call(e):s.get(e)),H=(e,s,t)=>s.has(e)?Y("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(e):s.set(e,t),b=(e,s,t,a)=>(D(e,s,"write to private field"),a?a.call(e,t):s.set(e,t),t);import"./main.Dp6Db_n_.js";import{A as B,a as Z,b as c}from"./lit-element.CBn2YVps.js";import{e as fe,i as ye}from"./directive.CvdRHFdJ.js";import{p as me}from"./directive-helpers.Bj3rQkfn.js";import{n as q}from"./when.BR7zwNJC.js";import{a as ge,e as ve}from"./addCommonStyleSheet.BIzSfp-c.js";import{ab as we,ac as be}from"./proj.DNHHD1fb.js";import{g as He}from"./getElement.CdRlZPdn.js";import{G as Fe}from"./GeoJSON.BIOKqnY_.js";import{W as Ve}from"./WKT.Cb3FS4Ec.js";import{t as Se}from"./Feature.DClIwY0Z.js";import"./main.S134cE-A.js";import{_ as Le,af as Me,u as ke,am as Ie,an as $e,k as Ce,i as Be,a as Ae,ah as E,aq as Ne,bi as Oe,bj as xe,d as Je,e as Ge}from"./eo-dash.Hm9SOPAx.js";import{c as Ue,j as qe,P as Pe}from"./ProcessList-hcxfa8f7.D0KiEU2G.js";import _e from"./EodashChart-CagtkRvP.CVnyToeY.js";import{i as P,u as je,h as Ke}from"./handling-Df_d9h0M.ViJJnYHd.js";import{g as Re,f as Ze,n as ze}from"./async-D_q14ueQ.BvJvIBKm.js";import{w as We,x as Qe}from"./mdi.CnJQHbhh.js";import{a2 as Xe,o as C,c as T,E as Ye,k as J,e as G,b as _,j as De,w as ee,a as te,v as ne,q as se,p as L,h as j,P as Ee}from"./framework.gxKtBYjK.js";import"./sequential.BT5PQCvq.js";import"./orient2d.DArCjZZA.js";import"./Polygon.FVLon8Z8.js";import"./GeometryCollection.DptEXo7b.js";import"./browser.BIxSbS3i.js";import"./commonjsHelpers.BosuxZz1.js";import"./toolcool-range-slider.min.BBXDELo7.js";import"./utils.BJtOAKhC.js";import"./index.CxojoGlr.js";import"./index.BIJR-IiI.js";import"./item.Bx-rtsOD.js";import"./index-C5npyZY6.D-EdwPAX.js";import"./VTooltip-CifBbpCx.BPnL7Pqt.js";import"./forwardRefs-64mgSLjK.CBCgtUR-.js";import"./transition-BwFOaDL9.jlfrbM-h.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Te=fe(class extends ye{constructor(){super(...arguments),this.key=B}render(e,s){return this.key=e,s}update(e,[s,t]){return s!==this.key&&(me(e),this.key=s),t}}),et=e=>{e.hoverInteraction=e.eoxMap.selectInteractions.SelectLayerHoverInteraction,e.clickInteraction=e.eoxMap.selectInteractions.SelectLayerClickInteraction;const s=()=>{e.requestUpdate()};e.hoverInteraction.selectStyleLayer.on("change",s),e.clickInteraction.selectStyleLayer.on("change",s)},tt=(e,s,t)=>{if(e.clickId===s)return;const a=t?[]:[s];e.hoverInteraction.highlightById(a)},st=(e,s,t)=>{e.stopPropagation();const a=Number(e.target.getAttribute("index")),r=s.drawLayer.getSource().getFeatures()[a];s.drawLayer.getSource().removeFeature(r),s.drawnFeatures.splice(a,1),t.emitDrawnFeatures(),s.requestUpdate()},ae={duration:750,padding:[20,20,20,20]},re={type:"FeatureCollection",features:[]},at=(e,s)=>{const{clickId:t,drawLayer:a,olMap:r,clickInteraction:i}=s,o=i.getId(e);if(t===o){const l=a.getSource().getExtent();r.getView().fit(l,ae),i.highlightById([])}else{const l=s.eoxMap.projection||"EPSG:3857",f=s.eoxDrawTools.projection,d=e.clone().getGeometry().transform(f,l).getExtent();i.highlightById([o]),r.getView().fit(d,ae)}s.requestUpdate()};class oe extends Z{constructor(){super();S(this,"hoverInteraction");S(this,"clickInteraction");S(this,"hoverId");S(this,"clickId");this.eoxDrawTools=null,this.eoxMap=null,this.olMap=null,this.draw=null,this.drawLayer=null,this.drawnFeatures=[],this.featureName="Feature",this.featureNameKey=null,this.modify=null,this.unstyled=!1}_handleDelete(t){st(t,this,this.eoxDrawTools),this.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))}_handleFeatureSelectAndDeselect(t){at(t,this)}_handleHoverFeature(t,a=!1){tt(this,t,a)}firstUpdated(){et(this)}createRenderRoot(){return this}render(){var a,r;this.hoverId=(a=this.hoverInteraction)==null?void 0:a.selectedFids[0],this.clickId=(r=this.clickInteraction)==null?void 0:r.selectedFids[0];const t=c`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>trash-can-outline</title>
      <path
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
      />
    </svg>`;return c`
      <ul class="list no-space">
        ${this.drawnFeatures.map((i,o)=>{var u;const n=o+1,l=Object.values(this.eoxMap.selectInteractions)[0].getId(i),f=this.hoverId===l,d=this.clickId===l,m=f?"surface-container-low":d?"fill":B,g=(u=this.featureNameKey)==null?void 0:u.split("."),v=i.get(this.featureNameKey)||(g==null?void 0:g.reduce((y,U)=>y==null?void 0:y[U],{...i.getProperties()})),F=v||`${this.featureName} ${n}`;return Te(n,c`
              <li
                class="${m} no-round"
                @mouseover=${()=>this._handleHoverFeature(l)}
                @mouseout=${()=>this._handleHoverFeature(l,!0)}
                @click="${()=>this._handleFeatureSelectAndDeselect(i)}"
              >
                <div class="max">
                  <span class="title">${F}</span>
                </div>
                <button
                  index=${o}
                  data-cy="deleteFeatureBtn"
                  class="transparent square small error-text front"
                  @click="${this._handleDelete}"
                >
                  ${this.unstyled?"x":c`<i class="small">${t}</i>`}
                </button>
              </li>
            `)})}
      </ul>
    `}}S(oe,"properties",{eoxDrawTools:{attribute:!1,state:!0},eoxMap:{attribute:!1,state:!0},olMap:{attribute:!1,state:!0},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:!1,state:!0,type:String},featureNameKey:{attribute:!1,state:!0,type:String},modify:{attribute:!1,state:!0},unstyled:{type:Boolean}});customElements.define("eox-drawtools-list",oe);const rt=e=>{const{multipleFeatures:s,drawnFeatures:t,currentlyDrawing:a}=e,r=!s&&(t==null?void 0:t.length)>0||a,i=!(t!=null&&t.length)&&!a;return{drawDisabled:r,discardDisabled:i}};function it(e){navigator.clipboard.writeText(e).then(function(){},function(s){console.error("Could not copy text: ",s)})}const nt=(e,s)=>new Fe().writeFeaturesObject(e,s),ot=(e,s)=>new Ve().writeFeatures(e,s);var A,N;class le extends Z{constructor(){super();H(this,A,!0);H(this,N,!0);this.multipleFeatures=!1,this.drawnFeatures=[],this.importFeatures=!1,this.showEditor=!1,this.currentlyDrawing=!1,this.drawFunc=null,this.geoJSON="",this.type="Polygon",this.unstyled=!1,this.select=!1}updateButtonStates(){const{drawDisabled:t,discardDisabled:a}=rt(this);b(this,A,t),b(this,N,a)}createRenderRoot(){return this}render(){this.updateButtonStates();const t=this.currentlyDrawing?"drawing":"draw",a={Polygon:c`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
    </svg>`,o=c`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>pencil-outline</title>
      <path
        d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
      />
    </svg>`,n=c`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>import</title>
      <path
        d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z"
      />
    </svg>`,l=c`<svg
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
            ?disabled="${w(this,A)||B}"
            @click="${()=>this.drawFunc.start()}"
          >
            ${this.unstyled?t:c`
                  <i class="small"
                    >${this.select?r:a[this.type]}</i
                  >
                  <div class="tooltip bottom">
                    ${this.select?"Select":"Draw"}
                  </div>
                `}
          </button>

          <!-- Discard Button -->
          <button
            data-cy="discardBtn"
            class="transparent square error-text no-margin small"
            title="${this.unstyled?"Discard":""}"
            ?disabled="${w(this,N)||B}"
            @click="${()=>this.drawFunc.discard()}"
          >
            ${this.unstyled?"discard":c`
                  <i class="small">${i}</i>
                  <div class="tooltip bottom">Discard</div>
                `}
          </button>
        </div>

        <!-- Editor Button -->
        ${q(this.showEditor,()=>c`
            <button
              data-cy="editorBtn"
              class="transparent circle primary-text no-margin small"
              title="${this.unstyled?"Edit features":""}"
              @click=${()=>this.renderRoot.querySelector("#editor").classList.toggle("hidden")}
            >
              ${this.unstyled?"import":c`
                    <i class="small">${o}</i>
                    <div class="tooltip bottom">Edit features</div>
                  `}
            </button>
          `)}

        <!-- Import Button -->
        ${q(this.importFeatures,()=>c`
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
                    <i class="small">${n}</i>
                    <div class="tooltip bottom">Import features</div>
                  `}
            </button>
          `)}
      </nav>

      <!-- Geo JSON Wrapper -->
      ${q(this.showEditor,()=>c`
          <div id="editor" class="field textarea border extra hidden">
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
              @click=${()=>it(this.geoJSON)}
            >
              ${this.unstyled?"copy":c`
                    <i class="tiny">${l}</i>
                    <div class="tooltip top">Copy</div>
                  `}
            </button>
          </div>
        `)}
    `}}A=new WeakMap,N=new WeakMap,S(le,"properties",{multipleFeatures:{attribute:!1,type:Boolean},drawnFeatures:{attribute:!1,state:!0,type:Array},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},drawFunc:{attribute:!1,type:Object},select:{type:Boolean},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},geoJSON:{attribute:"geo-json",type:String},type:{attribute:"type",type:String},unstyled:{type:Boolean}});customElements.define("eox-drawtools-controller",le);ge();const lt=`
  ${ve}
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
`,ct=e=>{(()=>{var t;if(e.emitDrawnFeatures(),!e.multipleFeatures)(t=e.draw)==null||t.setActive(!1),e.selectionEvents.removeSelectionEvent(),e.currentlyDrawing=!1;else if(e.continuous)if(!e.layerId)e.drawLayer.getSource().clear(),e.drawnFeatures=[];else{const r=e.drawLayer.getSource().getFeatures().at(-1);if(e.drawLayer.getSource().clear(),!r)return;e.drawLayer.getSource().addFeature(r),e.drawnFeatures=[r]}})(),e.requestUpdate()},dt=e=>{const s=()=>{var a;e.drawLayer.set("isDrawingEnabled",!0),(a=e.draw)==null||a.setActive(!0),e.selectionEvents.addSelectionEvent()},t=()=>{e.currentlyDrawing=!0,e.requestUpdate()};s(),t(),document.addEventListener("keydown",({key:a})=>{var r;a==="Escape"&&e.currentlyDrawing&&((r=e.draw)==null||r.setActive(!1),e.currentlyDrawing=!1,e.requestUpdate())})},R=(e,s,t)=>{var l,f,d,m;if(!t||!s)return;const a=s.getLayerById(t),r=a?JSON.parse(JSON.stringify(a.get("_jsonDefinition"))):null;if(!r){console.error(`Layer with id ${t} not found`);return}const i={type:"select",active:!1,options:{id:"SelectLayerHoverInteraction",condition:"pointermove",active:!1,style:((l=e.featureStyles)==null?void 0:l.hover)||{"fill-color":"rgba(0, 0, 0,0.0)","stroke-color":"#3399CC","stroke-width":2.5}}},o={type:"select",options:{id:"SelectLayerClickInteraction",condition:"click",multi:e.multipleFeatures,modify:e.allowModify,active:!1,style:((f=e.featureStyles)==null?void 0:f.click)||{"fill-color":"rgba(0, 0, 0,0.0)","stroke-color":"rgba(0, 0, 0,0.0)"}}};r.interactions=[i,o],s.addOrUpdateLayer(r),ce(s.layers,t,[r]);const n=e.draw;e.draw=s.selectInteractions.SelectLayerClickInteraction,n==null||n.setActive(!1),(d=s.selectInteractions.SelectLayerClickInteraction)==null||d.setActive(!1),(m=s.selectInteractions.SelectLayerHoverInteraction)==null||m.setActive(!1)};function ce(e,s,t){const a=e.findIndex(r=>r.properties.id===s);if(a!==-1)return e.splice(a,1,...t),e;for(const r of e)if(r.type==="Group"){const i=ce(r.layers,s,t);i!=null&&i.length&&(r.layers=i)}return e}const M=e=>{const s=e.getGeometry();if(!s)return;let t="";if(s.getType()==="Polygon"||s.getType()==="MultiPolygon"){const a=we(s);a>1e6?t=(a/1e6).toFixed(2)+" km²":t=a.toFixed(2)+" m²"}else if(s.getType()==="LineString"||s.getType()==="MultiLineString"){const a=be(s);a>1e3?t=(a/1e3).toFixed(2)+" km":t=a.toFixed(2)+" m"}else if(s.getType()==="Circle"){const a=s.getRadius(),r=Math.PI*Math.pow(a,2);r>1e6?t=(r/1e6).toFixed(2)+" km²":t=r.toFixed(2)+" m²"}t&&e.get("measure")!==t&&e.set("measure",t)},ut=e=>{const s=e.drawLayer.getSource(),t=a=>{const r=a.feature;r&&(M(r),r.getGeometry().on("change",()=>M(r)))};s.on("addfeature",t),s.getFeatures().forEach(a=>{M(a),a.getGeometry().on("change",()=>M(a))})},K=(e,s)=>{var f,d,m,g,v,F;const a=He(e.for),r=a.map,i="0, 65, 112";e.drawLayer=a.addOrUpdateLayer({zIndex:100,type:"Vector",properties:{id:"drawLayer",layerControlHide:!0,isDrawingEnabled:!1,multipleFeatures:s},source:{type:"Vector"},style:((f=e.featureStyles)==null?void 0:f.layer)||{"fill-color":`rgba(${i}, 0.1)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":2,"circle-radius":5,"circle-fill-color":`rgba(${i}, 1)`,...e.measure&&{"text-value":["coalesce",["get","measure"],""],"text-fill-color":`rgba(${i}, 1)`,"text-stroke-color":"white","text-stroke-width":3,"text-font":"bold 14px sans-serif","text-overflow":!0}},interactions:[{type:"draw",options:{active:!1,id:"drawInteraction",type:e.type,modify:e.allowModify,stopClick:!0,style:((d=e.featureStyles)==null?void 0:d.layer)||{"fill-color":`rgba(${i}, 0.1)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":1,"stroke-line-dash":[7,3],"circle-radius":5,"circle-fill-color":`rgba(${i}, 1)`,...e.measure&&{"text-value":["coalesce",["get","measure"],""],"text-fill-color":`rgba(${i}, 1)`,"text-stroke-color":"white","text-stroke-width":3,"text-font":"bold 14px sans-serif","text-overflow":!0}}}},{type:"select",options:{id:"SelectLayerHoverInteraction",condition:"pointermove",style:((m=e.featureStyles)==null?void 0:m.hover)||{"fill-color":`rgba(${i}, 0.2)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":2},tooltip:!1}},{type:"select",options:{id:"SelectLayerClickInteraction",condition:"click",panIn:!0,style:((g=e.featureStyles)==null?void 0:g.click)||{"fill-color":`rgba(${i}, 0.2)`,"stroke-color":`rgba(${i}, 1)`,"stroke-width":2}}}]}),e.draw=a.interactions.drawInteraction,e.modify=a.interactions.drawInteractionmodify,R(e,a,e.layerId),e.measure&&ut(e);const o=()=>e.onModifyEnd(),n=()=>ct(e);return(v=e.modify)==null||v.on("modifyend",o),e.measure&&((F=e.draw)==null||F.on("drawstart",u=>{const y=u.feature;M(y),y.getGeometry().on("change",()=>M(y))})),a.addEventListener("addfeatures",n),e.drawnFeatures&&e.drawLayer.getSource().addFeatures(e.drawnFeatures),{EoxMap:a,OlMap:r,reset:u=>{var y;!u.eoxMap||!u.drawLayer||(u.drawLayer.getSource().clear(),u.eoxMap.map.removeLayer(u.drawLayer),(y=u.modify)==null||y.un("modifyend",o),u.eoxMap.removeEventListener("addfeatures",n),u.layerId||(u.draw=null),u.modify=null)}}},pt=e=>{const s=()=>{var r;e.drawnFeatures=[],(r=e.draw)==null||r.setActive(!1),!!e.layerId&&e.selectionEvents.removeSelectionEvent(),e.drawLayer.getSource().clear(),e.geoJSON=null},t=()=>{e.emitDrawnFeatures(),e.currentlyDrawing=!1,e.requestUpdate()};s(),t()},ht=(e,s)=>{setTimeout(()=>{const a=e.drawLayer.getSource().getFeatures(),r=e.eoxMap.projection||"EPSG:3857",i=e.projection;e.drawnFeatures=i?a.map(n=>{n=n.clone();const l=n.getGeometry().transform(r,i);return n.setGeometry(l),n}):a;let o;switch(e.format){case"geojson":o=nt(e.drawnFeatures);break;case"wkt":o=ot(e.drawnFeatures);break;case"feature":o=e.drawnFeatures;break;default:o=e.drawnFeatures;break}e.updateGeoJSON(),e.requestUpdate(),s(o)},0)},ft=e=>{const s=r=>{(r==null?void 0:r.detail.id)!=="SelectLayerClickInteraction"||!r.detail.feature||(typeof r.detail.feature.getGeometry().getCoordinates!="function"&&(r.detail.feature=Se(r.detail.feature)),e.drawLayer.getSource().addFeature(r.detail.feature),e.eoxMap.dispatchEvent(new CustomEvent("addfeatures",{detail:r.detail})))};return{addSelectionEvent:()=>{if(e.layerId){const r=e.eoxMap.selectInteractions.SelectLayerHoverInteraction;r==null||r.setActive(!0),e.eoxMap.addEventListener("select",s)}},removeSelectionEvent:()=>{var i;const r=(i=e.eoxMap.selectInteractions)==null?void 0:i.SelectLayerHoverInteraction;r&&(r.selectedFids=[],r==null||r.setActive(!1)),e.eoxMap.removeEventListener("select",s)}}},yt=(e,s,t,a)=>{if(s){if(t){a&&t!==a&&ie(e,s),R(e,s,t);return}if(!t&&a){ie(e,s);return}}};function ie(e,s){s&&(e.discardDrawing(),e.selectionEvents.removeSelectionEvent(),e.draw=s.interactions.drawInteraction,s.selectInteractions.SelectLayerClickInteraction.remove(),s.selectInteractions.SelectLayerHoverInteraction.remove())}function mt(e,s){function t(i){i.preventDefault(),i.stopPropagation()}function a(i){i.srcElement.style.opacity="0.4"}function r(i){i.srcElement.style.opacity="1"}["dragenter","dragover","dragleave","drop"].forEach(i=>{s.addEventListener(i,t,!1),["dragenter","dragover"].includes(i)?s.addEventListener(i,a,!1):s.addEventListener(i,r,!1)}),s.addEventListener("drop",i=>de(i,e),!1)}function gt(e){e.preventDefault(),e.stopPropagation()}function de(e,s){gt(e);let t;"dataTransfer"in e&&e.dataTransfer?t=e.dataTransfer.files:e.target&&"files"in e.target?t=e.target.files:t=[],Array.from(t).forEach(a=>vt(a,s)),e.target&&"value"in e.target&&(e.target.value="")}function vt(e,s){const t=new FileReader;t.readAsText(e),t.onloadend=function(){typeof t.result=="string"&&s.handleFeatureChange(t.result)}}var k,I,O,$,x;class wt extends Z{constructor(){super();H(this,k);H(this,I);H(this,O);H(this,$);H(this,x);this.allowModify=!1,this.for="eox-map",this.currentlyDrawing=!1,this.draw=null,this.drawLayer=null,this.layerId="",this.drawnFeatures=[],this.featureName="Feature",this.featureNameKey=null,this.featureStyles=null,this.modify=null,this.multipleFeatures=!1,this.measure=!1,this.importFeatures=!1,this.showEditor=!1,this.showList=!1,this.projection="EPSG:4326",this.type="Polygon",this.selectionEvents=null,this.format="feature",this.unstyled=!1,this.noShadow=!1}static get properties(){return{allowModify:{attribute:"allow-modify",type:Boolean},for:{type:String},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},continuous:{type:Boolean},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:"feature-name",type:String},featureNameKey:{attribute:"feature-name-key",type:String},layerId:{attribute:"layer-id",type:String},featureStyles:{attribute:!1},modify:{attribute:!1,state:!0},multipleFeatures:{attribute:"multiple-features",type:Boolean},measure:{type:Boolean},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},showList:{attribute:"show-list",type:Boolean},projection:{type:String},noShadow:{attribute:"no-shadow",type:Boolean},format:{type:String},type:{type:String},unstyled:{type:Boolean}}}set continuous(t){b(this,x,t),t&&(this.multipleFeatures=!0)}get continuous(){return w(this,x)}set layerId(t){yt(this,this.eoxMap,t,w(this,$)),b(this,$,t)}get layerId(){return w(this,$)}startDrawing(){dt(this)}discardDrawing(){pt(this)}handleFeatureChange(t,a=!1,r=!0){this.eoxMap.parseTextToFeature(t||JSON.stringify(re),this.drawLayer,this.eoxMap,a,r)}handleFilesChange(t){de(t,this)}onModifyEnd(){this.emitDrawnFeatures()}updateGeoJSON(){b(this,O,JSON.stringify(this.eoxMap.parseFeature(this.drawnFeatures)||re,void 0,2))}emitDrawnFeatures(){ht(this,a=>{this.dispatchEvent(new CustomEvent("drawupdate",{detail:a}))})}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){const{EoxMap:t,OlMap:a,reset:r}=K(this,this.multipleFeatures);this.resetLayer=r,this.eoxMap=t,b(this,I,a),this.selectionEvents=ft(this),this.importFeatures&&mt(this,this.eoxMap),this.updateGeoJSON(),this.requestUpdate()}updated(t){if(t.has("for")){const{EoxMap:a,OlMap:r}=K(this,this.multipleFeatures);this.eoxMap=a,b(this,I,r)}(t.get("type")&&t.get("type")!==this.type||t.has("measure")&&t.get("measure")!==this.measure)&&(this.resetLayer(this),this.firstUpdated(),this.currentlyDrawing=!1)}get eoxMap(){return w(this,k)}set eoxMap(t){const a=w(this,k);b(this,k,t),this.requestUpdate("eoxMap",a)}connectedCallback(){if(super.connectedCallback(),this.drawLayer&&this.eoxMap){const{reset:t}=K(this,this.multipleFeatures);this.resetLayer=t}}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resetLayer)==null||t.call(this,this)}render(){var t;return c`
      <style>
        :host { display: block; }
        ${!this.unstyled&&lt}
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
        .geoJSON=${w(this,O)}
        .type=${this.type}
      ></eox-drawtools-controller>

      <!-- List Component -->
      ${this.showList&&((t=this.drawnFeatures)!=null&&t.length)?c`<eox-drawtools-list
            .eoxDrawTools=${this}
            .eoxMap=${this.eoxMap}
            .olMap=${w(this,I)}
            .draw=${this.draw}
            .drawLayer=${this.drawLayer}
            .drawnFeatures=${this.drawnFeatures}
            .featureName=${this.featureName}
            .featureNameKey=${this.featureNameKey}
            .modify=${this.modify}
            .unstyled=${this.unstyled}
            @changed=${()=>{this.updateGeoJSON(),this.requestUpdate()}}
          ></eox-drawtools-list>`:B}
    `}}k=new WeakMap,I=new WeakMap,O=new WeakMap,$=new WeakMap,x=new WeakMap;customElements.define("eox-drawtools",wt);const bt=({selectedStac:e,jsonformEl:s,jsonformSchema:t,isProcessed:a,processResults:r,loading:i,isPolling:o,mapElement:n})=>{const l=Oe(xe);ne(async()=>{((n==null?void 0:n.layers.length)??0)>1?await P({enableCompare:(n==null?void 0:n.id)==="compare",selectedStac:e,jsonformEl:s,jsonformSchema:t,isProcessed:a,processResults:r,loading:i,isPolling:o}):l.once(async()=>{await P({enableCompare:(n==null?void 0:n.id)==="compare",selectedStac:e,jsonformEl:s,jsonformSchema:t,isProcessed:a,loading:i,processResults:r,isPolling:o})})});const f=(n==null?void 0:n.id)==="compare"?"compareLayers:updated":"layers:updated";Ne(async(d,m)=>{(d=="layertime:updated"||d=="compareLayertime:updated"||d=="time:updated"||d=="compareTime:updated")&&await je({jsonformSchema:t,newLayers:m}),d===f&&await P({enableCompare:(n==null?void 0:n.id)==="compare",selectedStac:e,jsonformEl:s,jsonformSchema:t,isProcessed:a,processResults:r,loading:i,isPolling:o})})};function Ht(e,s,t,a){const r=async n=>{await a()},i=async()=>{await Ee(()=>{var n;(n=s.value)==null||n.addEventListener("change",r)})},o=()=>{var n;(n=s.value)==null||n.removeEventListener("change",r)};se(t,n=>{var l;e.value=((l=n==null?void 0:n.options)==null?void 0:l.execute)||!1}),ne(()=>{se(e,async n=>{n?await i():o()},{immediate:!0})})}const Ft="eox-jsonform{padding:.7em;min-height:0px}",Vt={ref:"container",class:"py-1"},St=[".schema"],Lt={class:"mt-2 text-right"},Mt={__name:"index",props:{enableCompare:{type:Boolean,default:!1},vegaEmbedOptions:{type:Object,default(){return{actions:!0}}}},setup(e){const s=L(!1),t=L(null),a=Xe("jsonformEl"),r=j(()=>{var p;return(p=d.value)==null?void 0:p.links.filter(h=>h.endpoint==="eoxhub_workspaces").length}),i=L(!1),o=L(!1),n=L(!1),l=L([]),f=j(()=>!o.value&&!!t.value&&!!a.value),{selectedStac:d,selectedCompareStac:m}=Me(ke()),g=e.enableCompare?m:d,v=e.enableCompare?Ie:$e,F=e.enableCompare?Ce:Be,u=e.enableCompare?Ue:qe,y=j(()=>{var p;return F.value+((p=v.value)==null?void 0:p.id)});bt({selectedStac:g,mapElement:v.value,jsonformEl:a,jsonformSchema:t,isProcessed:s,processResults:l,loading:i,isPolling:n});const U=()=>{l.value.forEach(p=>{var V;if(!p)return;let h="";typeof p=="string"?(h=p.includes("/")?p.split("/").pop()??"":p,h=h.includes("?")?h.split("?")[0]:h):h=((V=g.value)==null?void 0:V.id)+"_process_results.json",ze(h,p)})},z=async()=>{var W,Q,X;const p=Re(t.value);if(p&&Array.isArray((W=a.value)==null?void 0:W.value[p])&&!((Q=a.value)!=null&&Q.value[p].length)){s.value=!1;const ue=e.enableCompare?Je:Ge;ue.value=null;return}const V=(X=a.value)==null?void 0:X.editor.validate();if(V!=null&&V.length){console.warn("[eodash] Form validation failed",V);return}l.value=[],await Ke({jobs:u,selectedStac:g,jsonformEl:a,jsonformSchema:t,loading:i,isPolling:n,processResults:l,mapElement:v.value}),s.value=!0,r.value&&Ze(u,F.value)};return Ht(o,a,t,z),(p,h)=>(C(),T("div",Vt,[Ye(Pe,{"map-element":J(v),"enable-compare":e.enableCompare},null,8,["map-element","enable-compare"]),t.value?(C(),T("eox-jsonform",{key:y.value,ref_key:"jsonformEl",ref:a,".schema":t.value},null,40,St)):G("v-if",!0),J(Ae)?G("v-if",!0):(C(),_(_e,{key:1,"vega-embed-options":e.vegaEmbedOptions,"enable-compare":e.enableCompare},null,8,["vega-embed-options","enable-compare"])),De("div",Lt,[f.value?(C(),_(E,{key:0,loading:i.value,style:{"margin-right":"20px"},"append-icon":[J(We)],onClick:z,color:"primary"},{default:ee(()=>[...h[0]||(h[0]=[te(" Execute ",-1)])]),_:1},8,["loading","append-icon"])):G("v-if",!0),l.value.length&&s.value&&!r.value?(C(),_(E,{key:1,color:"primary","append-icon":[J(Qe)],onClick:U},{default:ee(()=>[...h[1]||(h[1]=[te(" Download ",-1)])]),_:1},8,["append-icon"])):G("v-if",!0)])],512))}},ls=Le(Mt,[["styles",[Ft]]]);export{ls as default};
