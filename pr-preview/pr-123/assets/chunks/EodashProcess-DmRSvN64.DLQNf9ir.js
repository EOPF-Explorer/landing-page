var ke=Object.defineProperty;var ie=r=>{throw TypeError(r)};var Ve=(r,e,t)=>e in r?ke(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var x=(r,e,t)=>Ve(r,typeof e!="symbol"?e+"":e,t),ae=(r,e,t)=>e.has(r)||ie("Cannot "+t);var g=(r,e,t)=>(ae(r,e,"read from private field"),t?t.call(r):e.get(r)),b=(r,e,t)=>e.has(r)?ie("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t),M=(r,e,t,s)=>(ae(r,e,"write to private field"),s?s.call(r,t):e.set(r,t),t);import{_ as Ce,aD as Ne,U as Pe,aV as Ge,aW as Oe,Y as Ae,T as $e,L as Te,aG as ne,O as Re,P as Be,b2 as Ee,a1 as Ue,a2 as je,bd as Je}from"./eo-dash.4wCfycuo.js";import{m as Ye,b as Ze,u as qe}from"./async-CUNrJzSV.CqpRJjsI.js";import{h as Xe,i as oe,u as Ke}from"./handling-DvfnUx8W.DweV4eeQ.js";import ze from"./EodashChart-BWtXu5Ef.6AI5ANDH.js";import We,{t as Qe,n as De}from"./ProcessList-BVTAjNBk.DZQFKaRp.js";import{x as et,y as tt}from"./mdi.Bw1XzLee.js";import"./main.D27k3VDF.js";import{A as $,a as te,b as d}from"./lit-element.CBn2YVps.js";import{e as rt,i as st}from"./directive.CvdRHFdJ.js";import{p as it}from"./directive-helpers.Bj3rQkfn.js";import{n as X}from"./when.BR7zwNJC.js";import{a as at,e as nt}from"./addCommonStyleSheet.Bb_JF1lq.js";import{ac as ot,ad as lt}from"./proj.-IuDk-D5.js";import{g as ct}from"./getElement.COiK8z0h.js";import{F as ut,t as le,G as dt}from"./GeoJSON.Bq0URM7T.js";import{F as ce,G as Q,a as ht,M as pt,b as mt,L as ft,t as yt}from"./GeometryCollection.CVhJDEYV.js";import{P as gt,a as wt}from"./Polygon.BL3HYzGT.js";import{d as I}from"./intersectsextent.CUX3CYM4.js";import"./main.BeFsmaJt.js";import{a4 as vt,q as D,o as H,c as K,j as Lt,E as Ft,k as J,e as A,b as z,w as ue,a as de,p as k,h as W,v as bt,P as ye,x as Mt}from"./framework.ifyLXRBT.js";import"./commonjsHelpers.BosuxZz1.js";import"./main.DYhIBoJH.js";import"./OSM.Dz8dDNRl.js";import"./index.OUYS7i6-.js";import"./openglobus.Ba4j1BOe.js";import"./og.es.45IJsLV-.js";import"./WMTS.BPWxvsE1.js";import"./ops.D9PLSCob.js";import"./utils.gKoLMd31.js";import"./tooltip-Btzqvp0g.CNQDEHWY.js";import"./VTooltip-BuQr_87W.BD91ondq.js";import"./forwardRefs-CPP4MaQf.BaCPI4jg.js";import"./transition-DPJbTaav.BxDy50ol.js";import"./sequential.BdGG0OD6.js";import"./orient2d.DArCjZZA.js";import"./browser.CZE2qH0M.js";import"./toolcool-range-slider.min.BBXDELo7.js";import"./index.BIJR-IiI.js";class St extends ut{constructor(){super()}getType(){return"text"}readFeature(e,t){return this.readFeatureFromText(Y(e),this.adaptOptions(t))}readFeatureFromText(e,t){return I()}readFeatures(e,t){return this.readFeaturesFromText(Y(e),this.adaptOptions(t))}readFeaturesFromText(e,t){return I()}readGeometry(e,t){return this.readGeometryFromText(Y(e),this.adaptOptions(t))}readGeometryFromText(e,t){return I()}readProjection(e){return this.readProjectionFromText(Y(e))}readProjectionFromText(e){return this.dataProjection}writeFeature(e,t){return this.writeFeatureText(e,this.adaptOptions(t))}writeFeatureText(e,t){return I()}writeFeatures(e,t){return this.writeFeaturesText(e,this.adaptOptions(t))}writeFeaturesText(e,t){return I()}writeGeometry(e,t){return this.writeGeometryText(e,this.adaptOptions(t))}writeGeometryText(e,t){return I()}}function Y(r){return typeof r=="string"?r:""}const _t={POINT:wt,LINESTRING:ft,POLYGON:gt,MULTIPOINT:mt,MULTILINESTRING:pt,MULTIPOLYGON:ht},ge="EMPTY",we="Z",ve="M",xt="ZM",c={START:0,TEXT:1,LEFT_PAREN:2,RIGHT_PAREN:3,NUMBER:4,COMMA:5,EOF:6},It={Point:"POINT",LineString:"LINESTRING",Polygon:"POLYGON",MultiPoint:"MULTIPOINT",MultiLineString:"MULTILINESTRING",MultiPolygon:"MULTIPOLYGON",GeometryCollection:"GEOMETRYCOLLECTION",Circle:"CIRCLE"};class Ht{constructor(e){this.wkt=e,this.index_=-1}isAlpha_(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"}isNumeric_(e,t){return t=t!==void 0?t:!1,e>="0"&&e<="9"||e=="."&&!t}isWhiteSpace_(e){return e==" "||e=="	"||e=="\r"||e==`
`}nextChar_(){return this.wkt.charAt(++this.index_)}nextToken(){const e=this.nextChar_(),t=this.index_;let s=e,i;if(e=="(")i=c.LEFT_PAREN;else if(e==",")i=c.COMMA;else if(e==")")i=c.RIGHT_PAREN;else if(this.isNumeric_(e)||e=="-")i=c.NUMBER,s=this.readNumber_();else if(this.isAlpha_(e))i=c.TEXT,s=this.readText_();else{if(this.isWhiteSpace_(e))return this.nextToken();if(e==="")i=c.EOF;else throw new Error("Unexpected character: "+e)}return{position:t,value:s,type:i}}readNumber_(){let e;const t=this.index_;let s=!1,i=!1;do e=="."?s=!0:(e=="e"||e=="E")&&(i=!0),e=this.nextChar_();while(this.isNumeric_(e,s)||!i&&(e=="e"||e=="E")||i&&(e=="-"||e=="+"));return parseFloat(this.wkt.substring(t,this.index_--))}readText_(){let e;const t=this.index_;do e=this.nextChar_();while(this.isAlpha_(e));return this.wkt.substring(t,this.index_--).toUpperCase()}}class kt{constructor(e){this.lexer_=e,this.token_={position:0,type:c.START},this.layout_="XY"}consume_(){this.token_=this.lexer_.nextToken()}isTokenType(e){return this.token_.type==e}match(e){const t=this.isTokenType(e);return t&&this.consume_(),t}parse(){return this.consume_(),this.parseGeometry_()}parseGeometryLayout_(){let e="XY";const t=this.token_;if(this.isTokenType(c.TEXT)){const s=t.value;s===we?e="XYZ":s===ve?e="XYM":s===xt&&(e="XYZM"),e!=="XY"&&this.consume_()}return e}parseGeometryCollectionText_(){if(this.match(c.LEFT_PAREN)){const e=[];do e.push(this.parseGeometry_());while(this.match(c.COMMA));if(this.match(c.RIGHT_PAREN))return e}throw new Error(this.formatErrorMessage_())}parsePointText_(){if(this.match(c.LEFT_PAREN)){const e=this.parsePoint_();if(this.match(c.RIGHT_PAREN))return e}throw new Error(this.formatErrorMessage_())}parseLineStringText_(){if(this.match(c.LEFT_PAREN)){const e=this.parsePointList_();if(this.match(c.RIGHT_PAREN))return e}throw new Error(this.formatErrorMessage_())}parsePolygonText_(){if(this.match(c.LEFT_PAREN)){const e=this.parseLineStringTextList_();if(this.match(c.RIGHT_PAREN))return e}throw new Error(this.formatErrorMessage_())}parseMultiPointText_(){if(this.match(c.LEFT_PAREN)){let e;if(this.token_.type==c.LEFT_PAREN?e=this.parsePointTextList_():e=this.parsePointList_(),this.match(c.RIGHT_PAREN))return e}throw new Error(this.formatErrorMessage_())}parseMultiLineStringText_(){if(this.match(c.LEFT_PAREN)){const e=this.parseLineStringTextList_();if(this.match(c.RIGHT_PAREN))return e}throw new Error(this.formatErrorMessage_())}parseMultiPolygonText_(){if(this.match(c.LEFT_PAREN)){const e=this.parsePolygonTextList_();if(this.match(c.RIGHT_PAREN))return e}throw new Error(this.formatErrorMessage_())}parsePoint_(){const e=[],t=this.layout_.length;for(let s=0;s<t;++s){const i=this.token_;if(this.match(c.NUMBER))e.push(i.value);else break}if(e.length==t)return e;throw new Error(this.formatErrorMessage_())}parsePointList_(){const e=[this.parsePoint_()];for(;this.match(c.COMMA);)e.push(this.parsePoint_());return e}parsePointTextList_(){const e=[this.parsePointText_()];for(;this.match(c.COMMA);)e.push(this.parsePointText_());return e}parseLineStringTextList_(){const e=[this.parseLineStringText_()];for(;this.match(c.COMMA);)e.push(this.parseLineStringText_());return e}parsePolygonTextList_(){const e=[this.parsePolygonText_()];for(;this.match(c.COMMA);)e.push(this.parsePolygonText_());return e}isEmptyGeometry_(){const e=this.isTokenType(c.TEXT)&&this.token_.value==ge;return e&&this.consume_(),e}formatErrorMessage_(){return"Unexpected `"+this.token_.value+"` at position "+this.token_.position+" in `"+this.lexer_.wkt+"`"}parseGeometry_(){const e=this.token_;if(this.match(c.TEXT)){const t=e.value;this.layout_=this.parseGeometryLayout_();const s=this.isEmptyGeometry_();if(t=="GEOMETRYCOLLECTION"){if(s)return new Q([]);const o=this.parseGeometryCollectionText_();return new Q(o)}const i=_t[t];if(!i)throw new Error("Invalid geometry type: "+t);let a;if(s)t=="POINT"?a=[NaN,NaN]:a=[];else switch(t){case"POINT":{a=this.parsePointText_();break}case"LINESTRING":{a=this.parseLineStringText_();break}case"POLYGON":{a=this.parsePolygonText_();break}case"MULTIPOINT":{a=this.parseMultiPointText_();break}case"MULTILINESTRING":{a=this.parseMultiLineStringText_();break}case"MULTIPOLYGON":{a=this.parseMultiPolygonText_();break}}return new i(a,this.layout_)}throw new Error(this.formatErrorMessage_())}}class Vt extends St{constructor(e){super(),e=e||{},this.splitCollection_=e.splitCollection!==void 0?e.splitCollection:!1}parse_(e){const t=new Ht(e);return new kt(t).parse()}readFeatureFromText(e,t){const s=this.readGeometryFromText(e,t),i=new ce;return i.setGeometry(s),i}readFeaturesFromText(e,t){let s=[];const i=this.readGeometryFromText(e,t);this.splitCollection_&&i.getType()=="GeometryCollection"?s=i.getGeometriesArray():s=[i];const a=[];for(let o=0,l=s.length;o<l;++o){const n=new ce;n.setGeometry(s[o]),a.push(n)}return a}readGeometryFromText(e,t){const s=this.parse_(e);return le(s,!1,t)}writeFeatureText(e,t){const s=e.getGeometry();return s?this.writeGeometryText(s,t):""}writeFeaturesText(e,t){if(e.length==1)return this.writeFeatureText(e[0],t);const s=[];for(let a=0,o=e.length;a<o;++a)s.push(e[a].getGeometry());const i=new Q(s);return this.writeGeometryText(i,t)}writeGeometryText(e,t){return be(le(e,!0,t))}}function Le(r){const e=r.getCoordinates();return e.length===0?"":e.join(" ")}function Ct(r){const e=[],t=r.getPoints();for(let s=0,i=t.length;s<i;++s)e.push("("+Le(t[s])+")");return e.join(",")}function Nt(r){const e=[],t=r.getGeometries();for(let s=0,i=t.length;s<i;++s)e.push(be(t[s]));return e.join(",")}function re(r){const e=r.getCoordinates(),t=[];for(let s=0,i=e.length;s<i;++s)t.push(e[s].join(" "));return t.join(",")}function Pt(r){const e=[],t=r.getLineStrings();for(let s=0,i=t.length;s<i;++s)e.push("("+re(t[s])+")");return e.join(",")}function Fe(r){const e=[],t=r.getLinearRings();for(let s=0,i=t.length;s<i;++s)e.push("("+re(t[s])+")");return e.join(",")}function Gt(r){const e=[],t=r.getPolygons();for(let s=0,i=t.length;s<i;++s)e.push("("+Fe(t[s])+")");return e.join(",")}function Ot(r){const e=r.getLayout();let t="";return(e==="XYZ"||e==="XYZM")&&(t+=we),(e==="XYM"||e==="XYZM")&&(t+=ve),t}const At={Point:Le,LineString:re,Polygon:Fe,MultiPoint:Ct,MultiLineString:Pt,MultiPolygon:Gt,GeometryCollection:Nt};function be(r){const e=r.getType(),t=At[e],s=t(r);let i=It[e];if(typeof r.getFlatCoordinates=="function"){const a=Ot(r);a.length>0&&(i+=" "+a)}return s.length===0?i+" "+ge:i+"("+s+")"}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t=rt(class extends st{constructor(){super(...arguments),this.key=$}render(r,e){return this.key=r,e}update(r,[e,t]){return e!==this.key&&(it(r),this.key=e),t}}),Tt=r=>{r.hoverInteraction=r.eoxMap.selectInteractions.SelectLayerHoverInteraction,r.clickInteraction=r.eoxMap.selectInteractions.SelectLayerClickInteraction;const e=()=>{r.requestUpdate()};r.hoverInteraction.selectStyleLayer.on("change",e),r.clickInteraction.selectStyleLayer.on("change",e)},Rt=(r,e,t)=>{if(r.clickId===e)return;const s=t?[]:[e];r.hoverInteraction.highlightById(s)},Bt=(r,e,t)=>{r.stopPropagation();const s=Number(r.target.getAttribute("index")),i=e.drawLayer.getSource().getFeatures()[s];e.drawLayer.getSource().removeFeature(i),e.drawnFeatures.splice(s,1),t.emitDrawnFeatures(),e.requestUpdate()},he={duration:750,padding:[20,20,20,20]},pe={type:"FeatureCollection",features:[]},Et=(r,e)=>{const{clickId:t,drawLayer:s,olMap:i,clickInteraction:a}=e,o=a.getId(r);if(t===o){const n=s.getSource().getExtent();i.getView().fit(n,he),a.highlightById([])}else{const n=e.eoxMap.projection||"EPSG:3857",h=e.eoxDrawTools.projection,f=r.clone().getGeometry().transform(h,n).getExtent();a.highlightById([o]),i.getView().fit(f,he)}e.requestUpdate()};class Me extends te{constructor(){super();x(this,"hoverInteraction");x(this,"clickInteraction");x(this,"hoverId");x(this,"clickId");this.eoxDrawTools=null,this.eoxMap=null,this.olMap=null,this.draw=null,this.drawLayer=null,this.drawnFeatures=[],this.featureName="Feature",this.featureNameKey=null,this.modify=null,this.unstyled=!1}_handleDelete(t){Bt(t,this,this.eoxDrawTools),this.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))}_handleFeatureSelectAndDeselect(t){Et(t,this)}_handleHoverFeature(t,s=!1){Rt(this,t,s)}firstUpdated(){Tt(this)}createRenderRoot(){return this}render(){var s,i;this.hoverId=(s=this.hoverInteraction)==null?void 0:s.selectedFids[0],this.clickId=(i=this.clickInteraction)==null?void 0:i.selectedFids[0];const t=d`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>trash-can-outline</title>
      <path
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
      />
    </svg>`;return d`
      <ul class="list no-space">
        ${this.drawnFeatures.map((a,o)=>{var y;const l=o+1,n=Object.values(this.eoxMap.selectInteractions)[0].getId(a),h=this.hoverId===n,f=this.clickId===n,F=h?"surface-container-low":f?"fill":$,L=(y=this.featureNameKey)==null?void 0:y.split("."),w=a.get(this.featureNameKey)||(L==null?void 0:L.reduce((_,Z)=>_==null?void 0:_[Z],{...a.getProperties()})),p=w||`${this.featureName} ${l}`;return $t(l,d`
              <li
                class="${F} no-round"
                @mouseover=${()=>this._handleHoverFeature(n)}
                @mouseout=${()=>this._handleHoverFeature(n,!0)}
                @click="${()=>this._handleFeatureSelectAndDeselect(a)}"
              >
                <div class="max">
                  <span class="title">${p}</span>
                </div>
                <button
                  index=${o}
                  data-cy="deleteFeatureBtn"
                  class="transparent square small error-text front"
                  @click="${this._handleDelete}"
                >
                  ${this.unstyled?"x":d`<i class="small">${t}</i>`}
                </button>
              </li>
            `)})}
      </ul>
    `}}x(Me,"properties",{eoxDrawTools:{attribute:!1,state:!0},eoxMap:{attribute:!1,state:!0},olMap:{attribute:!1,state:!0},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:!1,state:!0,type:String},featureNameKey:{attribute:!1,state:!0,type:String},modify:{attribute:!1,state:!0},unstyled:{type:Boolean}});customElements.define("eox-drawtools-list",Me);const Ut=r=>{const{multipleFeatures:e,drawnFeatures:t,currentlyDrawing:s}=r,i=!e&&(t==null?void 0:t.length)>0||s,a=!(t!=null&&t.length)&&!s;return{drawDisabled:i,discardDisabled:a}};function jt(r){navigator.clipboard.writeText(r).then(function(){},function(e){console.error("Could not copy text: ",e)})}const Jt=(r,e)=>new dt().writeFeaturesObject(r,e),Yt=(r,e)=>new Vt().writeFeatures(r,e);var T,R;class Se extends te{constructor(){super();b(this,T,!0);b(this,R,!0);this.multipleFeatures=!1,this.drawnFeatures=[],this.importFeatures=!1,this.showEditor=!1,this.currentlyDrawing=!1,this.drawFunc=null,this.geoJSON="",this.type="Polygon",this.unstyled=!1,this.select=!1}updateButtonStates(){const{drawDisabled:t,discardDisabled:s}=Ut(this);M(this,T,t),M(this,R,s)}createRenderRoot(){return this}render(){this.updateButtonStates();const t=this.currentlyDrawing?"drawing":"draw",s={Polygon:d`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
      `},i=d`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>cursor-default-click</title>
      <path
        d="M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10"
      />
    </svg>`,a=d`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>trash-can-outline</title>
      <path
        d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
      />
    </svg>`,o=d`<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <title>pencil-outline</title>
      <path
        d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
      />
    </svg>`,l=d`<svg
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
            ?disabled="${g(this,T)||$}"
            @click="${()=>this.drawFunc.start()}"
          >
            ${this.unstyled?t:d`
                  <i class="small"
                    >${this.select?i:s[this.type]}</i
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
            ?disabled="${g(this,R)||$}"
            @click="${()=>this.drawFunc.discard()}"
          >
            ${this.unstyled?"discard":d`
                  <i class="small">${a}</i>
                  <span class="tooltip bottom">Discard</span>
                `}
          </button>
        </div>

        <!-- Editor Button -->
        ${X(this.showEditor,()=>d`
            <button
              data-cy="editorBtn"
              class="transparent circle primary-text no-margin small"
              title="${this.unstyled?"Edit features":""}"
              @click=${()=>this.renderRoot.querySelector("#editor").classList.toggle("hidden")}
            >
              ${this.unstyled?"import":d`
                    <i class="small">${o}</i>
                    <span class="tooltip bottom">Edit features</span>
                  `}
            </button>
          `)}

        <!-- Import Button -->
        ${X(this.importFeatures,()=>d`
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
                    <i class="small">${l}</i>
                    <span class="tooltip bottom">Import features</span>
                  `}
            </button>
          `)}
      </nav>

      <!-- Geo JSON Wrapper -->
      ${X(this.showEditor,()=>d`
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
              @click=${()=>jt(this.geoJSON)}
            >
              ${this.unstyled?"copy":d`
                    <i class="tiny">${n}</i>
                    <span class="tooltip top">Copy</span>
                  `}
            </button>
          </div>
        `)}
    `}}T=new WeakMap,R=new WeakMap,x(Se,"properties",{multipleFeatures:{attribute:!1,type:Boolean},drawnFeatures:{attribute:!1,state:!0,type:Array},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},drawFunc:{attribute:!1,type:Object},select:{type:Boolean},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},geoJSON:{attribute:"geo-json",type:String},type:{attribute:"type",type:String},unstyled:{type:Boolean}});customElements.define("eox-drawtools-controller",Se);at();const Zt=`
  ${nt}
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
`,qt=r=>{(()=>{var t;if(r.emitDrawnFeatures(),!r.multipleFeatures)(t=r.draw)==null||t.setActive(!1),r.selectionEvents.removeSelectionEvent(),r.currentlyDrawing=!1;else if(r.continuous)if(!r.layerId)r.drawLayer.getSource().clear(),r.drawnFeatures=[];else{const i=r.drawLayer.getSource().getFeatures().at(-1);if(r.drawLayer.getSource().clear(),!i)return;r.drawLayer.getSource().addFeature(i),r.drawnFeatures=[i]}})(),r.requestUpdate()},Xt=r=>{const e=()=>{var s;r.drawLayer.set("isDrawingEnabled",!0),(s=r.draw)==null||s.setActive(!0),r.selectionEvents.addSelectionEvent()},t=()=>{r.currentlyDrawing=!0,r.requestUpdate()};e(),t()},ee=(r,e,t)=>{var n,h,f,F;if(!t||!e)return;const s=e.getLayerById(t),i=s?JSON.parse(JSON.stringify(s.get("_jsonDefinition"))):null;if(!i){console.error(`Layer with id ${t} not found`);return}const a={type:"select",active:!1,options:{id:"SelectLayerHoverInteraction",condition:"pointermove",active:!1,style:((n=r.featureStyles)==null?void 0:n.hover)||{"fill-color":"rgba(0, 0, 0,0.0)","stroke-color":"#3399CC","stroke-width":2.5}}},o={type:"select",options:{id:"SelectLayerClickInteraction",condition:"click",multi:r.multipleFeatures,modify:r.allowModify,active:!1,style:((h=r.featureStyles)==null?void 0:h.click)||{"fill-color":"rgba(0, 0, 0,0.0)","stroke-color":"rgba(0, 0, 0,0.0)"}}};i.interactions=[a,o],e.addOrUpdateLayer(i),_e(e.layers,t,[i]);const l=r.draw;r.draw=e.selectInteractions.SelectLayerClickInteraction,l==null||l.setActive(!1),(f=e.selectInteractions.SelectLayerClickInteraction)==null||f.setActive(!1),(F=e.selectInteractions.SelectLayerHoverInteraction)==null||F.setActive(!1)};function _e(r,e,t){const s=r.findIndex(i=>i.properties.id===e);if(s!==-1)return r.splice(s,1,...t),r;for(const i of r)if(i.type==="Group"){const a=_e(i.layers,e,t);a!=null&&a.length&&(i.layers=a)}return r}const V=r=>{const e=r.getGeometry();if(!e)return;let t="";if(e.getType()==="Polygon"||e.getType()==="MultiPolygon"){const s=ot(e);s>1e6?t=(s/1e6).toFixed(2)+" km²":t=s.toFixed(2)+" m²"}else if(e.getType()==="LineString"||e.getType()==="MultiLineString"){const s=lt(e);s>1e3?t=(s/1e3).toFixed(2)+" km":t=s.toFixed(2)+" m"}else if(e.getType()==="Circle"){const s=e.getRadius(),i=Math.PI*Math.pow(s,2);i>1e6?t=(i/1e6).toFixed(2)+" km²":t=i.toFixed(2)+" m²"}t&&r.get("measure")!==t&&r.set("measure",t)},Kt=r=>{const e=r.drawLayer.getSource(),t=s=>{const i=s.feature;i&&(V(i),i.getGeometry().on("change",()=>V(i)))};e.on("addfeature",t),e.getFeatures().forEach(s=>{V(s),s.getGeometry().on("change",()=>V(s))})},me=(r,e)=>{var h,f,F,L,w;const s=ct(r.for),i=s.map,a="0, 65, 112";r.drawLayer=s.addOrUpdateLayer({zIndex:100,type:"Vector",properties:{id:"drawLayer",layerControlHide:!0,isDrawingEnabled:!1,multipleFeatures:e},source:{type:"Vector"},style:((h=r.featureStyles)==null?void 0:h.layer)||{"fill-color":`rgba(${a}, 0.1)`,"stroke-color":`rgba(${a}, 1)`,"stroke-width":2,"circle-radius":5,"circle-fill-color":`rgba(${a}, 1)`,...r.measure&&{"text-value":["coalesce",["get","measure"],""],"text-fill-color":`rgba(${a}, 1)`,"text-stroke-color":"white","text-stroke-width":3,"text-font":"bold 14px sans-serif","text-overflow":!0}},interactions:[{type:"draw",options:{active:!1,id:"drawInteraction",type:r.type,modify:r.allowModify,stopClick:!0,style:((f=r.featureStyles)==null?void 0:f.layer)||{"fill-color":`rgba(${a}, 0.1)`,"stroke-color":`rgba(${a}, 1)`,"stroke-width":1,"stroke-line-dash":[7,3],"circle-radius":5,"circle-fill-color":`rgba(${a}, 1)`,...r.measure&&{"text-value":["coalesce",["get","measure"],""],"text-fill-color":`rgba(${a}, 1)`,"text-stroke-color":"white","text-stroke-width":3,"text-font":"bold 14px sans-serif","text-overflow":!0}}}},...r.layerId?[]:[{type:"select",options:{id:"SelectLayerHoverInteraction",condition:"pointermove",style:((F=r.featureStyles)==null?void 0:F.hover)||{"fill-color":`rgba(${a}, 0.2)`,"stroke-color":`rgba(${a}, 1)`,"stroke-width":2},tooltip:!1}},{type:"select",options:{id:"SelectLayerClickInteraction",condition:"click",panIn:!0,style:((L=r.featureStyles)==null?void 0:L.click)||{"fill-color":`rgba(${a}, 0.2)`,"stroke-color":`rgba(${a}, 1)`,"stroke-width":2}}}]]}),r.draw=s.interactions.drawInteraction,r.modify=s.interactions.drawInteraction_modify,ee(r,s,r.layerId),r.measure&&Kt(r);const o=()=>r.onModifyEnd(),l=()=>qt(r);return(w=r.modify)==null||w.on("modifyend",o),r.measure&&r.draw&&typeof r.draw.on=="function"&&r.draw.on("drawstart",p=>{const y=p.feature;V(y),y.getGeometry().on("change",()=>V(y))}),s.addEventListener("addfeatures",l),{EoxMap:s,OlMap:i,reset:p=>{var y;!p.eoxMap||!p.drawLayer||(p.drawLayer.getSource().clear(),p.eoxMap.map.removeLayer(p.drawLayer),(y=p.modify)==null||y.un("modifyend",o),p.eoxMap.removeEventListener("addfeatures",l),p.layerId||(p.draw=null),p.modify=null)}}},zt=r=>{const e=()=>{var i;r.drawnFeatures=[],(i=r.draw)==null||i.setActive(!1),!!r.layerId&&r.selectionEvents.removeSelectionEvent(),r.drawLayer.getSource().clear(),r.geoJSON=null},t=()=>{r.emitDrawnFeatures(),r.currentlyDrawing=!1,r.requestUpdate()};e(),t()},Wt=(r,e)=>{setTimeout(()=>{const s=r.drawLayer.getSource().getFeatures(),i=r.eoxMap.projection||"EPSG:3857",a=r.projection,o=a?s.map(n=>{n=n.clone();const h=n.getGeometry().transform(i,a);return n.setGeometry(h),n}):s;r.setDrawnFeaturesInternal?r.setDrawnFeaturesInternal(o):r.drawnFeatures=o;let l;switch(r.format){case"geojson":l=Jt(r.drawnFeatures);break;case"wkt":l=Yt(r.drawnFeatures);break;case"feature":l=r.drawnFeatures;break;default:l=r.drawnFeatures;break}r.updateGeoJSON(),r.requestUpdate(),e(l)},0)},Qt=r=>{const e=i=>{(i==null?void 0:i.detail.id)!=="SelectLayerClickInteraction"||!i.detail.feature||(typeof i.detail.feature.getGeometry().getCoordinates!="function"&&(i.detail.feature=yt(i.detail.feature)),r.drawLayer.getSource().addFeature(i.detail.feature),r.eoxMap.dispatchEvent(new CustomEvent("addfeatures",{detail:i.detail})))};return{addSelectionEvent:()=>{if(r.layerId){const i=r.eoxMap.selectInteractions.SelectLayerHoverInteraction;i==null||i.setActive(!0),r.eoxMap.addEventListener("select",e)}},removeSelectionEvent:()=>{var a;const i=(a=r.eoxMap.selectInteractions)==null?void 0:a.SelectLayerHoverInteraction;i&&(i.selectedFids=[],i==null||i.setActive(!1)),r.eoxMap.removeEventListener("select",e)}}},Dt=(r,e,t,s)=>{if(e){if(t){s&&t!==s&&fe(r,e),ee(r,e,t);return}if(!t&&s){fe(r,e);return}}};function fe(r,e){e&&(r.discardDrawing(),r.selectionEvents.removeSelectionEvent(),r.draw=e.interactions.drawInteraction,e.selectInteractions.SelectLayerClickInteraction.remove(),e.selectInteractions.SelectLayerHoverInteraction.remove())}const xe=r=>{var e;r.currentlyDrawing&&((e=r.draw)==null||e.setActive(!1),r.currentlyDrawing=!1,r.requestUpdate())},er=(r,e)=>{r.key==="Escape"&&xe(e)};function tr(r,e){const t=r.drawnFeatures.indexOf(e);t>-1&&Ie(r,t)}function Ie(r,e){if(e>-1&&e<r.drawnFeatures.length){const t=[...r.drawnFeatures];t.splice(e,1),r.drawnFeatures=t,r.emitDrawnFeatures()}}function rr(r,e){function t(a){a.preventDefault(),a.stopPropagation()}function s(a){a.srcElement.style.opacity="0.4"}function i(a){a.srcElement.style.opacity="1"}["dragenter","dragover","dragleave","drop"].forEach(a=>{e.addEventListener(a,t,!1),["dragenter","dragover"].includes(a)?e.addEventListener(a,s,!1):e.addEventListener(a,i,!1)}),e.addEventListener("drop",a=>He(a,r),!1)}function sr(r){r.preventDefault(),r.stopPropagation()}function He(r,e){sr(r);let t;"dataTransfer"in r&&r.dataTransfer?t=r.dataTransfer.files:r.target&&"files"in r.target?t=r.target.files:t=[],Array.from(t).forEach(s=>ir(s,e)),r.target&&"value"in r.target&&(r.target.value="")}function ir(r,e){const t=new FileReader;t.readAsText(r),t.onloadend=function(){typeof t.result=="string"&&e.handleFeatureChange(t.result)}}var C,B,E,N,P,U,G,j;class ar extends te{constructor(){super();b(this,C);b(this,B);b(this,E);b(this,N);b(this,P,!1);b(this,U);b(this,G,[]);b(this,j,t=>er(t,this));this.allowModify=!1,this.for="eox-map",this.currentlyDrawing=!1,this.draw=null,this.drawLayer=null,this.layerId="",this.featureName="Feature",this.featureNameKey=null,this.featureStyles=null,this.modify=null,this.multipleFeatures=!1,this.measure=!1,this.importFeatures=!1,this.showEditor=!1,this.showList=!1,this.projection="EPSG:4326",this.type="Polygon",this.selectionEvents=null,this.format="feature",this.unstyled=!1,this.noShadow=!1}static get properties(){return{allowModify:{attribute:"allow-modify",type:Boolean},for:{type:String},currentlyDrawing:{attribute:!1,state:!0,type:Boolean},continuous:{type:Boolean},draw:{attribute:!1,state:!0},drawLayer:{attribute:!1,state:!0},drawnFeatures:{attribute:!1,state:!0,type:Array},featureName:{attribute:"feature-name",type:String},featureNameKey:{attribute:"feature-name-key",type:String},layerId:{attribute:"layer-id",type:String},featureStyles:{type:Object},modify:{attribute:!1,state:!0},multipleFeatures:{attribute:"multiple-features",type:Boolean},measure:{type:Boolean},importFeatures:{attribute:"import-features",type:Boolean},showEditor:{attribute:"show-editor",type:Boolean},showList:{attribute:"show-list",type:Boolean},projection:{type:String},noShadow:{attribute:"no-shadow",type:Boolean},format:{type:String},type:{type:String},unstyled:{type:Boolean}}}set continuous(t){M(this,U,t),t&&(this.multipleFeatures=!0)}get continuous(){return g(this,U)}setDrawnFeaturesInternal(t){M(this,P,!0),this.drawnFeatures=t,M(this,P,!1)}set drawnFeatures(t){var i;const s=g(this,G);if(M(this,G,t),this.drawLayer&&!g(this,P)){if(this.drawLayer.getSource().clear(),t!=null&&t.length){const a=((i=this.eoxMap)==null?void 0:i.projection)||"EPSG:3857",o=this.projection||"EPSG:4326";let l=t;a!==o&&(l=t.map(n=>{n=n.clone();const h=n.getGeometry().transform(o,a);return n.setGeometry(h),n})),this.drawLayer.getSource().addFeatures(l)}this.updateGeoJSON()}this.requestUpdate("drawnFeatures",s)}get drawnFeatures(){return g(this,G)}set layerId(t){Dt(this,this.eoxMap,t,g(this,N)),M(this,N,t)}get layerId(){return g(this,N)}startDrawing(){Xt(this)}stopDrawing(){xe(this)}discardDrawing(){zt(this)}removeFeature(t){tr(this,t)}removeFeatureByIndex(t){Ie(this,t)}handleFeatureChange(t,s=!1,i=!0){this.eoxMap.parseTextToFeature(t||JSON.stringify(pe),this.drawLayer,this.eoxMap,s,i)}handleFilesChange(t){He(t,this)}onModifyEnd(){this.emitDrawnFeatures()}updateGeoJSON(){M(this,E,JSON.stringify(this.eoxMap.parseFeature(this.drawnFeatures)||pe,void 0,2))}emitDrawnFeatures(){Wt(this,s=>{this.dispatchEvent(new CustomEvent("drawupdate",{detail:s}))})}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}updateLayer(){this.resetLayer&&this.resetLayer(this);const{EoxMap:t,OlMap:s,reset:i}=me(this,this.multipleFeatures);this.resetLayer=i,this.eoxMap=t,M(this,B,s)}firstUpdated(){var t;this.updateLayer(),this.selectionEvents=Qt(this),this.importFeatures&&rr(this,this.eoxMap),((t=this.drawnFeatures)==null?void 0:t.length)>0?this.drawnFeatures=[...this.drawnFeatures]:this.updateGeoJSON(),this.requestUpdate()}updated(t){((i=>t.has(i)&&t.get(i)!==void 0)("for")||t.has("type")&&t.get("type")!==this.type||t.has("measure")&&t.get("measure")!==this.measure)&&(this.updateLayer(),this.currentlyDrawing=!1)}get eoxMap(){return g(this,C)}set eoxMap(t){const s=g(this,C);M(this,C,t),this.requestUpdate("eoxMap",s)}connectedCallback(){if(super.connectedCallback(),document.addEventListener("keydown",g(this,j)),this.drawLayer&&this.eoxMap){const{reset:t}=me(this,this.multipleFeatures);this.resetLayer=t}}disconnectedCallback(){var t;super.disconnectedCallback(),document.removeEventListener("keydown",g(this,j)),(t=this.resetLayer)==null||t.call(this,this)}render(){var t;return d`
      <style>
        :host { display: block; }
        ${!this.unstyled&&Zt}
      </style>

      <div class="drawtitle">
        <slot name="drawtitle"
          ><p><strong>Draw</strong></p></slot
        >
      </div>

      <!-- Controller Component -->
      <eox-drawtools-controller
        .drawFunc=${{start:()=>this.startDrawing(),discard:()=>this.discardDrawing(),editor:s=>this.handleFeatureChange(s.target.value,!0),import:s=>this.handleFilesChange(s)}}
        ?select=${!!this.layerId}
        .unstyled=${this.unstyled}
        .drawnFeatures=${this.drawnFeatures}
        .currentlyDrawing=${this.currentlyDrawing}
        .multipleFeatures=${this.multipleFeatures}
        .importFeatures=${this.importFeatures}
        .showEditor=${this.showEditor}
        .geoJSON=${g(this,E)}
        .type=${this.type}
      ></eox-drawtools-controller>

      <!-- List Component -->
      ${this.showList&&((t=this.drawnFeatures)!=null&&t.length)?d`<eox-drawtools-list
            .eoxDrawTools=${this}
            .eoxMap=${this.eoxMap}
            .olMap=${g(this,B)}
            .draw=${this.draw}
            .drawLayer=${this.drawLayer}
            .drawnFeatures=${this.drawnFeatures}
            .featureName=${this.featureName}
            .featureNameKey=${this.featureNameKey}
            .modify=${this.modify}
            .unstyled=${this.unstyled}
            @changed=${()=>{this.updateGeoJSON(),this.requestUpdate()}}
          ></eox-drawtools-list>`:$}
    `}}C=new WeakMap,B=new WeakMap,E=new WeakMap,N=new WeakMap,P=new WeakMap,U=new WeakMap,G=new WeakMap,j=new WeakMap;customElements.define("eox-drawtools",ar);var nr=({selectedStac:r,jsonformSchema:e,isProcessed:t,processResults:s,loading:i,isPolling:a,mapElement:o})=>{bt(async()=>{var l;await oe({enableCompare:((l=o.value)==null?void 0:l.id)==="compare",selectedStac:r,jsonformSchema:e,isProcessed:t,processResults:s,loading:i,isPolling:a,mapElement:o.value})}),Ee(async l=>{var f,F,L;const n=((f=o.value)==null?void 0:f.id)==="compare",h=n?"compareLayers:updated":"layers:updated";if((n?["compareLayertime:updated","compareTime:updated"]:["layertime:updated","time:updated"]).includes(l)){const w=await Ke({jsonformSchema:e.value,newLayers:n?Ue():je(),enableCompare:n,mapElement:o.value});w&&(Object.values(w.properties??{}).some(p=>{var y,_;return(_=(y=p==null?void 0:p.options)==null?void 0:y.drawtools)==null?void 0:_.layerId})&&!((L=(F=o.value)==null?void 0:F.selectInteractions)!=null&&L.SelectLayerClickInteraction)&&(e.value=null,await ye()),e.value=w)}l===h&&await oe({enableCompare:n,selectedStac:r,jsonformSchema:e,isProcessed:t,processResults:s,loading:i,isPolling:a,mapElement:o.value})})};function or(r,e,t,s){const i=Je(()=>s(),200);D(t,o=>{var l;r.value=((l=o==null?void 0:o.options)==null?void 0:l.execute)||!1});const a=D([r,e],async([o,l],[n,h])=>{h&&h.removeEventListener("change",i),o&&l&&(l.removeEventListener("change",i),await ye(),l.addEventListener("change",i))},{immediate:!0});Mt(()=>{e.value&&e.value.removeEventListener("change",i),a()})}var lr="eox-jsonform{flex-shrink:0;min-height:0;padding:0 12px}.bg-surface:has(.eodash-process-container){height:calc(100% - 30px);overflow:hidden}.eodash-process-container{flex-direction:column;height:100%;display:flex;overflow:hidden}.eodash-process-content{flex-direction:column;flex-grow:1;display:flex;overflow-y:auto}.eodash-process-actions{text-align:right;background:inherit;border-top:1px solid #0000001a;flex-shrink:0;padding:4px 12px}",cr={ref:"container",class:"eodash-process-container"},ur={class:"eodash-process-content"},dr=[".schema"],hr={key:0,class:"eodash-process-actions"},Qr=Ce({__name:"index",props:{enableCompare:{type:Boolean,default:!1},vegaEmbedOptions:{type:Object,default(){return{actions:!0}}}},setup(r){const e=k(!1),t=k(null),s=vt("jsonformEl");D(s,u=>{if(u&&u.shadowRoot){const m="eodash-drawtools-inline-style";if(!u.shadowRoot.getElementById(m)){const v=document.createElement("style");v.id=m,v.textContent=`
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
      `,u.shadowRoot.appendChild(v)}const S=()=>{var O;const v=(O=u==null?void 0:u.shadowRoot)==null?void 0:O.querySelector("eox-drawtools");if(v&&v.shadowRoot&&!v.shadowRoot.getElementById("eodash-drawtools-indent-style")){const q=document.createElement("style");return q.id="eodash-drawtools-indent-style",q.textContent=`
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
          `,v.shadowRoot.appendChild(q),!0}return!1};if(!S()){const v=new MutationObserver(()=>{S()&&v.disconnect()});v.observe(u.shadowRoot,{childList:!0,subtree:!0})}}});const i=W(()=>{var u;return(u=f.value)==null?void 0:u.links.filter(m=>m.endpoint==="eoxhub_workspaces").length}),a=k(!1),o=k(!1),l=k(!1),n=k([]),h=W(()=>!o.value&&!!t.value&&!!s.value),{selectedStac:f,selectedCompareStac:F}=Ne(Pe()),L=r.enableCompare?F:f,w=r.enableCompare?Ge:Oe,p=r.enableCompare?Ae:$e,y=r.enableCompare?Qe:De,_=W(()=>{var u;return p.value+((u=w.value)==null?void 0:u.id)+JSON.stringify(t.value)});nr({selectedStac:L,mapElement:w,jsonformSchema:t,isProcessed:e,processResults:n,loading:a,isPolling:l});const Z=()=>{n.value.forEach(u=>{var S;if(!u)return;let m="";typeof u=="string"?(m=u.includes("/")?u.split("/").pop()??"":u,m=m.includes("?")?m.split("?")[0]:m):m=((S=L.value)==null?void 0:S.id)+"_process_results.json",Ye(m,u)})},se=async()=>{var m;if(Ze(t.value).some(S=>{var v,O;return Array.isArray((v=s.value)==null?void 0:v.value[S])&&!((O=s.value)!=null&&O.value[S].length)})){e.value=!1;const S=r.enableCompare?Re:Be;S.value=null;return}const u=(m=s.value)==null?void 0:m.editor.validate();if(u!=null&&u.length){console.warn("[eodash] Form validation failed",u);return}n.value=[],await Xe({jobs:y,selectedStac:L,jsonformEl:s,jsonformSchema:t,loading:a,isPolling:l,processResults:n,mapElement:w.value}),e.value=!0,i.value&&qe(y,p.value)};return or(o,s,t,se),(u,m)=>(H(),K("div",cr,[Lt("div",ur,[Ft(We,{"map-element":J(w),"enable-compare":r.enableCompare},null,8,["map-element","enable-compare"]),t.value?(H(),K("eox-jsonform",{key:_.value,ref_key:"jsonformEl",ref:s,".schema":t.value},null,40,dr)):A("v-if",!0),J(Te)?A("v-if",!0):(H(),z(ze,{key:1,"vega-embed-options":r.vegaEmbedOptions,"enable-compare":r.enableCompare},null,8,["vega-embed-options","enable-compare"]))]),h.value||n.value.length&&e.value&&!i.value?(H(),K("div",hr,[h.value?(H(),z(ne,{key:0,loading:a.value,style:{"margin-right":"8px"},"append-icon":[J(et)],density:"comfortable",size:"small",onClick:se},{default:ue(()=>[...m[0]||(m[0]=[de(" Execute ",-1)])]),_:1},8,["loading","append-icon"])):A("v-if",!0),n.value.length&&e.value&&!i.value?(H(),z(ne,{key:1,color:"primary",style:{"margin-right":"8px"},"append-icon":[J(tt)],size:"small",density:"comfortable",onClick:Z},{default:ue(()=>[...m[1]||(m[1]=[de(" Download ",-1)])]),_:1},8,["append-icon"])):A("v-if",!0)])):A("v-if",!0)],512))}},[["styles",[lr]]]);export{Qr as default};
