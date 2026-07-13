import"./main.B_5CY3O5.js";import{o as v}from"./handling-ZSJ-G9Pd.DZLTrCMb.js";import{_ as B,g as O,a as s,c as z,b as M,d as R,e as T}from"./eo-dash.DiE07fHv.js";import{a as I,b as N}from"./mdi.C-iBXNyW.js";import{T as D}from"./index-hlXwdczO.BxxzHVzp.js";import{q as V,a4 as q,v as L,Y as A,o as l,c as p,j as g,a2 as J,k as f,e as x,N as y,ao as b,p as w,h as i,P}from"./framework.W58BR3_i.js";import"./lit-element.CBn2YVps.js";import"./addCommonStyleSheet.BL0mKR1r.js";import"./sequential.BdGG0OD6.js";import"./orient2d.DArCjZZA.js";import"./async-B2Ievw09.Ko9EjTha.js";import"./utils.BJtOAKhC.js";import"./index.CxojoGlr.js";import"./migrate.DkSLOl0d.js";import"./commonjsHelpers.BosuxZz1.js";import"./main.BHf_YhEi.js";import"./when.BR7zwNJC.js";import"./map.B6QQHL2e.js";import"./XYZ.BZLCURoo.js";import"./proj.DtkH-SLQ.js";import"./index.BUIxO2d3.js";import"./getElement.COiK8z0h.js";import"./VTooltip-B_krlDHj.Do1mukZ9.js";import"./forwardRefs-CECQ0dlw.BUgXSN76.js";import"./transition-umvsycHf.CDDJ6dPG.js";const j=".bg-surface:has(.eodash-chart-wrapper){height:100%;display:flex;flex-direction:column}",F=".eodash-chart-wrapper[data-v-29f0a1a6]{height:100%;flex-grow:1;min-height:180px;display:flex;flex-direction:column}.chart-frame[data-v-29f0a1a6]{position:relative;flex-grow:1;min-height:180px;display:flex;flex-direction:column}eox-chart[data-v-29f0a1a6]{flex-grow:1;min-height:0}.chart-toggle[data-v-29f0a1a6]{position:absolute;top:8px;right:46px;z-index:2;cursor:pointer}",H={ref:"container",class:"eodash-chart-wrapper"},K={viewBox:"0 0 20 20",width:"20",height:"20","aria-hidden":"true"},U=["d"],Y=[".spec",".dataValues",".opt"],G={__name:"EodashChart",props:{enableCompare:{type:Boolean,default:!1},vegaEmbedOptions:{type:Object,default(){return{actions:!0}}}},setup(c){const d=i(()=>c.enableCompare?z.value:M.value),m=i(()=>c.enableCompare?R.value:T.value),C=i(()=>{const a=m.value;if(!a)return!1;let t=!1;const o=e=>{if(!(t||!e||typeof e!="object")){if("bind"in e&&typeof e.bind=="object"&&e.bind!==null&&"input"in e.bind){t=!0;return}Object.values(e).forEach(o)}};return o(a),t}),n=w(null);V(m,a=>{if(!a){n.value=null;return}const t=JSON.parse(JSON.stringify(a));t.height="container",t.width="container",P(()=>{n.value=t,u.value=Math.random(),setTimeout(()=>{window.dispatchEvent(new Event("resize"))},150)})},{immediate:!0});const u=w(0),_=q("container");let r=null,h=null;L(()=>{const a=_.value;if(!a)return;h=window.setInterval(()=>{if(a){const o=a.querySelector("eox-chart");if(o&&o.shadowRoot&&!o.shadowRoot.querySelector("#eodash-chart-styles")){const e=document.createElement("style");e.id="eodash-chart-styles",e.innerHTML=`
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
          `,o.shadowRoot.appendChild(e)}}},200);const t=O(a);t&&(r=new MutationObserver(async()=>{getComputedStyle(t).display!=="none"&&(u.value=Math.random())}),r.observe(t,{attributes:!0,attributeFilter:["style","class"]}))}),A(()=>{r==null||r.disconnect(),h&&window.clearInterval(h)});const S=i(()=>({height:"100%",width:"100%"})),E=i(()=>s.value?I:N);function k(){s.value=!s.value}return(a,t)=>(l(),p("div",H,[g("div",{class:"chart-frame",style:y({paddingBottom:C.value?"25px":"0px"})},[d.value&&m.value?J((l(),p("button",{key:0,class:"chart-toggle",onClick:k},[(l(),p("svg",K,[g("path",{d:E.value},null,8,U)]))])),[[D,f(s)?"Minimize":"Maximize"]]):x("v-if",!0),d.value&&n.value?(l(),p("eox-chart",{".spec":b(n.value),key:u.value,".dataValues":b(d.value),"onClick:item":t[0]||(t[0]=(...o)=>f(v)&&f(v)(...o)),style:y(S.value),".opt":c.vegaEmbedOptions},null,44,Y)):x("v-if",!0)],4)],512))}},bt=B(G,[["styles",[j,F]],["__scopeId","data-v-29f0a1a6"]]);export{bt as default};
