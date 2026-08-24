import{_ as B,K as O,L as s,M,N as z,O as N,P as R}from"./eo-dash.CSjcXkzF.js";import{o as f}from"./handling-DBtsViVV.BDT8H67W.js";import{T}from"./tooltip-MB3ZDidj.Yhz4EWT-.js";import{a as I,b as D}from"./mdi.I3rz4PHh.js";import"./main.DLQC0LEl.js";import{q as L,a4 as V,v as q,Y as P,o as l,c as p,j as g,a2 as A,k as v,e as x,N as b,at as y,h as i,p as _,P as J}from"./framework.BuBi7-L5.js";import"./commonjsHelpers.BosuxZz1.js";import"./migrate.6EXgl2HJ.js";import"./main.C2xKlHXZ.js";import"./lit-element.CBn2YVps.js";import"./when.BR7zwNJC.js";import"./map.B6QQHL2e.js";import"./addCommonStyleSheet.Ct85SDKw.js";import"./XYZ.BdTVY-yK.js";import"./proj.Cao7xDc0.js";import"./index.BUIxO2d3.js";import"./getElement.COiK8z0h.js";import"./async-BPaz2M7p.Dk9TGJMg.js";import"./utils.BJtOAKhC.js";import"./index.CxojoGlr.js";import"./VTooltip-Bp5OQWRx.Om_1Snse.js";import"./forwardRefs-CiCrugIF.CnvdveYV.js";import"./transition-CalG0CWZ.pzXBC40S.js";import"./sequential.BdGG0OD6.js";import"./orient2d.DArCjZZA.js";var K=".bg-surface:has(.eodash-chart-wrapper){flex-direction:column;height:100%;display:flex}",j=".eodash-chart-wrapper[data-v-c14bc6fb]{flex-direction:column;flex-grow:1;height:100%;min-height:180px;display:flex}.chart-frame[data-v-c14bc6fb]{flex-direction:column;flex-grow:1;min-height:180px;display:flex;position:relative}eox-chart[data-v-c14bc6fb]{flex-grow:1;min-height:0}.chart-toggle[data-v-c14bc6fb]{z-index:2;cursor:pointer;position:absolute;top:8px;right:46px}",F={ref:"container",class:"eodash-chart-wrapper"},H={viewBox:"0 0 20 20",width:"20",height:"20","aria-hidden":"true"},U=["d"],Y=[".spec",".dataValues",".opt"],be=B({__name:"EodashChart",props:{enableCompare:{type:Boolean,default:!1},vegaEmbedOptions:{type:Object,default(){return{actions:!0}}}},setup(d){const c=i(()=>d.enableCompare?M.value:z.value),u=i(()=>d.enableCompare?N.value:R.value),w=i(()=>{const t=u.value;if(!t)return!1;let e=!1;const r=a=>{if(!(e||!a||typeof a!="object")){if("bind"in a&&typeof a.bind=="object"&&a.bind!==null&&"input"in a.bind){e=!0;return}Object.values(a).forEach(r)}};return r(t),e}),n=_(null);L(u,t=>{if(!t){n.value=null;return}const e=JSON.parse(JSON.stringify(t));e.height="container",e.width="container",J(()=>{n.value=e,m.value=Math.random(),setTimeout(()=>{window.dispatchEvent(new Event("resize"))},150)})},{immediate:!0});const m=_(0),C=V("container");let o=null,h=null;q(()=>{const t=C.value;if(!t)return;h=window.setInterval(()=>{if(t){const r=t.querySelector("eox-chart");if(r&&r.shadowRoot&&!r.shadowRoot.querySelector("#eodash-chart-styles")){const a=document.createElement("style");a.id="eodash-chart-styles",a.innerHTML=`
            * {
              box-sizing: border-box !important;
            }
            #vis {
              min-height: 100px !important;
              flex: 1 1 auto !important;
            }
            :host, .vega-embed {
              display: flex !important;
              flex-direction: column !important;
              height: 100% !important;
              padding: 0 !important;
              margin: 0 !important;
            }
            .vega-bindings {
              flex: 0 0 auto !important;
              display: flex !important;
              flex-wrap: wrap;
              gap: 2px !important;
              background: rgba(255, 255, 255, 0.85);
              padding: 6px 12px !important;
              border-radius: 6px;
              box-shadow: 0 2px 5px rgba(0,0,0,0.15);
              margin: 0 !important;
              margin-top: -10px !important;
              z-index: 10;
            }
            .vega-bindings:empty {
              display: none !important;
            }
            .vega-embed > canvas, .vega-embed > svg {
              height: 100% !important;
              max-width: 100% !important;
              object-fit: contain;
            }
            .vega-bind {
              display: flex;
              align-items: center;
              gap: 6px;
              margin-bottom: 0 !important;
            }
          `,r.shadowRoot.appendChild(a)}}},200);const e=O(t);e&&(o=new MutationObserver(async()=>{getComputedStyle(e).display!=="none"&&(m.value=Math.random())}),o.observe(e,{attributes:!0,attributeFilter:["style","class"]}))}),P(()=>{o==null||o.disconnect(),h&&window.clearInterval(h)});const E=i(()=>({height:"100%",width:"100%"})),S=i(()=>s.value?I:D);function k(){s.value=!s.value}return(t,e)=>(l(),p("div",F,[g("div",{class:"chart-frame",style:b({paddingBottom:w.value?"25px":"0px"})},[c.value&&u.value?A((l(),p("button",{key:0,class:"chart-toggle",onClick:k},[(l(),p("svg",H,[g("path",{d:S.value},null,8,U)]))])),[[T,v(s)?"Minimize":"Maximize"]]):x("v-if",!0),c.value&&n.value?(l(),p("eox-chart",{key:m.value,".spec":y(n.value),".dataValues":y(c.value),style:b(E.value),".opt":d.vegaEmbedOptions,"onClick:item":e[0]||(e[0]=(...r)=>v(f)&&v(f)(...r))},null,44,Y)):x("v-if",!0)],4)],512))}},[["styles",[K,j]],["__scopeId","data-v-c14bc6fb"]]);export{be as default};
