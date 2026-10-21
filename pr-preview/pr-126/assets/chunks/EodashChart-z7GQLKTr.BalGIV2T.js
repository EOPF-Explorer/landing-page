import{_ as q,K as D,L as l,M as H,N as V,O as j,P as F}from"./eo-dash.D4rFsXTi.js";import{o as z}from"./handling-CqXfGIon.Bey191cP.js";import{T as P}from"./tooltip-D12EaFED.XutrsAth.js";import{a as U,b as J}from"./mdi.Bw1XzLee.js";import"./main.CmahG0Bw.js";import{q as E,P as K,p,a4 as $,v as X,Y,o as h,c as m,a2 as G,k as u,j as S,e as I,n as w,N as A,at as M,h as i}from"./framework.BvwZPdCg.js";import"./commonjsHelpers.BosuxZz1.js";import"./main.DeDu7Zyg.js";import"./lit-element.CBn2YVps.js";import"./OSM.Bw5KDVH0.js";import"./index.OUYS7i6-.js";import"./openglobus.BCrHpIBW.js";import"./og.es.45IJsLV-.js";import"./WMTS.DP-gDils.js";import"./getElement.COiK8z0h.js";import"./addCommonStyleSheet.CvlDGOkV.js";import"./async-CjKmLaZ1.BJkT6QVa.js";import"./utils.DMAht7nH.js";import"./index.DEU_HeW8.js";import"./VTooltip-Civue18f.B6GMC7Bl.js";import"./forwardRefs-CHErCYs9.CktZNkXi.js";import"./transition-CIQsw9Qb.BC7AWPst.js";import"./sequential.BdGG0OD6.js";var Q=".bg-surface:has(.eodash-chart-wrapper){flex-direction:column;height:100%;display:flex}",Z=".eodash-chart-wrapper[data-v-7c1a1cb7]{flex-direction:column;flex-grow:1;height:100%;min-height:180px;display:flex;position:relative}.eodash-chart-wrapper.fit-x-layout[data-v-7c1a1cb7]{height:auto!important}.eodash-chart-wrapper.fit-x-maximized[data-v-7c1a1cb7]{background:#00000008;align-items:center;padding:16px 10%;overflow-y:auto}.chart-frame[data-v-7c1a1cb7]{flex-direction:column;flex-grow:1;min-height:180px;display:flex;position:relative}.chart-frame.fit-x-layout[data-v-7c1a1cb7]{height:auto!important}.eodash-chart-wrapper.fit-x-maximized .chart-frame[data-v-7c1a1cb7]{background:#fff;border-radius:8px;width:100%;max-width:900px;box-shadow:0 4px 15px #0000001a}eox-chart[data-v-7c1a1cb7]{flex-grow:1;min-height:0}eox-chart.fit-x-layout[data-v-7c1a1cb7]{height:var(--fit-height)!important}.chart-toggle[data-v-7c1a1cb7]{z-index:2;cursor:pointer;position:absolute;top:8px;right:46px}",tt={viewBox:"0 0 20 20",width:"20",height:"20","aria-hidden":"true"},et=["d"],at=[".spec",".dataValues",".opt"],Et=q({__name:"EodashChart",props:{enableCompare:{type:Boolean,default:!1},vegaEmbedOptions:{type:Object,default(){return{actions:!0}}}},setup(f){const d=i(()=>f.enableCompare?H.value:V.value),n=i(()=>f.enableCompare?j.value:F.value);function O(e){var t;return e?e.mark==="image"||((t=e.mark)==null?void 0:t.type)==="image"?!0:Array.isArray(e.layer)?e.layer.some(a=>{var r;return a.mark==="image"||((r=a.mark)==null?void 0:r.type)==="image"}):!1:!1}const B=i(()=>O(n.value)),o=i(()=>{var t;const e=n.value;return e?(e.autosize==="fit-x"||((t=e.autosize)==null?void 0:t.type)==="fit-x")&&B.value:!1}),W=i(()=>{const e=n.value;if(!e)return!1;let t=!1;const a=r=>{if(!(t||!r||typeof r!="object")){if("bind"in r&&typeof r.bind=="object"&&r.bind!==null&&"input"in r.bind){t=!0;return}Object.values(r).forEach(a)}};return a(e),t}),c=p(null);function R(e,t){let a=_(e);return a||t&&t.data&&Array.isArray(t.data.values)&&(a=_(t.data.values),a)?a:null}function _(e){if(!Array.isArray(e)||e.length===0)return null;const t=e[0];if(!t||typeof t!="object")return null;for(const a of Object.keys(t)){const r=t[a];if(typeof r=="string"&&(r.startsWith("http")||r.startsWith("/")))return r}return null}const v=p(1.414),C=p(400);E([d,n],([e,t])=>{const a=R(e,t);if(!a)return;const r=new Image;r.onload=()=>{r.naturalWidth>0&&r.naturalHeight>0&&(v.value=r.naturalHeight/r.naturalWidth)},r.src=a},{immediate:!0});const g=i(()=>Math.round(C.value*v.value));function x(){const e=k.value;if(e){const t=e.querySelector(".chart-frame");C.value=(t?t.clientWidth:e.clientWidth)||400}}E([n,v],([e])=>{if(!e){c.value=null;return}const t=JSON.parse(JSON.stringify(e));t.width="container";const a=e;o.value?t.height=g.value:typeof a.height=="number"?t.height=a.height:t.height="container",K(()=>{c.value=t,y.value=Math.random(),setTimeout(()=>{window.dispatchEvent(new Event("resize"))},150)})},{immediate:!0});const y=p(0),k=$("container");let s=null,b=null;X(()=>{const e=k.value;if(!e)return;x(),window.addEventListener("resize",x),b=window.setInterval(()=>{if(e){const a=e.querySelector("eox-chart");if(a&&a.shadowRoot&&!a.shadowRoot.querySelector("#eodash-chart-styles")){const r=document.createElement("style");r.id="eodash-chart-styles",r.innerHTML=`
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
          `,a.shadowRoot.appendChild(r)}}},200);const t=D(e);t&&(s=new MutationObserver(async()=>{getComputedStyle(t).display!=="none"&&(y.value=Math.random())}),s.observe(t,{attributes:!0,attributeFilter:["style","class"]}))}),Y(()=>{window.removeEventListener("resize",x),s==null||s.disconnect(),b&&window.clearInterval(b)});const L=i(()=>o.value?{"--fit-height":`${g.value}px`,height:`${g.value}px`,width:"100%"}:{height:"100%",width:"100%"}),N=i(()=>l.value?U:J);function T(){l.value=!l.value}return(e,t)=>(h(),m("div",{ref:"container",class:w(["eodash-chart-wrapper",{"fit-x-layout":o.value,maximized:u(l),"fit-x-maximized":o.value&&u(l)}])},[d.value&&n.value?G((h(),m("button",{key:0,class:"chart-toggle",onClick:T},[(h(),m("svg",tt,[S("path",{d:N.value},null,8,et)]))])),[[P,u(l)?"Minimize":"Maximize"]]):I("v-if",!0),S("div",{class:w(["chart-frame",{"fit-x-layout":o.value}]),style:A({paddingBottom:W.value?"25px":"0px"})},[d.value&&c.value?(h(),m("eox-chart",{key:y.value,".spec":M(c.value),".dataValues":M(d.value),style:A(L.value),class:w({"fit-x-layout":o.value}),".opt":f.vegaEmbedOptions,"onClick:item":t[0]||(t[0]=(...a)=>u(z)&&u(z)(...a))},null,46,at)):I("v-if",!0)],6)],2))}},[["styles",[Q,Z]],["__scopeId","data-v-7c1a1cb7"]]);export{Et as default};
