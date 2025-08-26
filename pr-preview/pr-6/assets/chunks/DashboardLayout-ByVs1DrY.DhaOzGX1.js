import{b as l,o as s,w as p,j as m,k as n,c as d,e as g,N as w,aG as b,H as v,K as f,F as x,B as _,T as k}from"./framework.1BheWlxT.js";import{_ as A,br as $}from"./eo-dash.BwVDzRxN.js";import{V as B}from"./VMain-PryTLU4a.CH_6LqWq.js";import"./commonjsHelpers.BosuxZz1.js";import"./ssrBoot-Zgc_Ttvi.BsliFrs6.js";class E extends HTMLElement{static get observedAttributes(){return["column-width","fill-grid","gap","row-height"]}constructor(){super(),this.mediaBreakpoints=[0,600,1280],this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>
      :host {
        --row-height: ${this.getAttribute("row-height")||"1fr"};
        --column-width: ${this.getAttribute("column-width")||"1fr"};
        display: grid;
        padding: ${this.getAttribute("gap")||0}px;
        height: 100%;
        box-sizing: border-box;
        gap: ${this.getAttribute("gap")||"0"}px;
        ${this.getAttribute("fill-grid")!==null?`
          grid-template-columns: repeat(auto-fill, minmax(var(--column-width, 300px), 1fr));
          grid-template-rows: repeat(auto-fill, minmax(0, var(--row-height, 300px)));
          grid-auto-columns: var(--column-width, 300px);
          grid-auto-rows: var(--row-height, 300px);
          `:`
          grid-template-columns: repeat(12, ${this.getAttribute("column-width")?"var(--column-width)":"minmax(0, var(--column-width))"});
          grid-template-rows: repeat(12, ${this.getAttribute("row-height")?"var(--row-height)":"minmax(0, var(--row-height))"});
          `}
        overflow: auto;
      }
    </style>
    <slot></slot>
  `}attributeChangedCallback(t,i,a){i!==a&&(this[t]=a),this.render()}}class C extends HTMLElement{static get observedAttributes(){return["x","y","w","h"]}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var i,a;const t=(o,r=0)=>o!=null&&o.toString().includes("/")?o.split("/")[r]:o;this.shadowRoot.innerHTML=`
      <style>
        :host {
          overflow: hidden;
        }
          ${(a=(i=this.parentElement)==null?void 0:i.mediaBreakpoints)==null?void 0:a.map((o,r)=>`
              @media (min-width: ${o}px) {
                :host {
                          ${this.parentElement&&this.parentElement.getAttribute("fill-grid")!==null?`
                          grid-column: span ${t(this.getAttribute("w"),r)};
                          grid-row: span ${t(this.getAttribute("h"),r)};
                          `:`            
                            grid-column: ${parseInt(t(this.getAttribute("x"),r))+1} / span ${t(this.getAttribute("w"),r)};
                            grid-row: ${parseInt(t(this.getAttribute("y"),r))+1} / span ${t(this.getAttribute("h"),r)};
                        `}
                  display: ${t(this.getAttribute("w"),r)==="0"||t(this.getAttribute("h"),r)==="0"?"none":"block"}
                }
              }
              `).join(`
`)}
      </style>
      <slot></slot>
    `}attributeChangedCallback(t,i,a){i!==a&&(this[t]=a),this.render()}}customElements.define("eox-layout",E);customElements.define("eox-layout-item",C);const L=".panel[data-v-835b2a14]{position:relative;overflow:auto;z-index:1;pointer-events:none}.pointer[data-v-835b2a14]{pointer-events:all}.bg-panel[data-v-835b2a14]{z-index:0;border-radius:0!important}.fade-enter-active[data-v-835b2a14],.fade-leave-active[data-v-835b2a14]{transition:opacity .25s ease}.fade-enter-from[data-v-835b2a14],.fade-leave-to[data-v-835b2a14]{opacity:0}.bg-surface[data-v-835b2a14],.bg-primary[data-v-835b2a14]{backdrop-filter:blur(10px)!important;border-radius:8px;border:none;box-shadow:0 0 1px #18274b38,0 6px 12px -6px #18274b1f,0 8px 24px -4px #18274b14;max-height:100%;overflow:auto;scrollbar-color:rgba(var(--v-theme-on-surface),.2) transparent;scrollbar-width:thin}.bg-surface[data-v-835b2a14]{background-color:rgba(var(--v-theme-surface),var(--v-surface-opacity, .8))!important}.bg-primary[data-v-835b2a14]{background-color:rgba(var(--v-theme-primary),var(--v-primary-opacity, .8))!important}",S=["gap"],T=["id","h","w","x","y"],z={class:"bg-surface pointer"},M={__name:"DashboardLayout",setup(c){const{bgWidget:t,importedWidgets:i,gap:a}=$(),o={padding:a.value+"px",overflow:"hidden !important"};return(r,y)=>(s(),l(B,null,{default:p(()=>{var h;return[m("eox-layout",{mediaBreakpoints:[0,960,1920],gap:n(a),class:"layout-container",style:o},[(h=n(t))!=null&&h.component?(s(),d("eox-layout-item",{key:n(t).id,class:"bg-panel",style:w(`margin: -${n(a)+1}px;`),x:"0",y:"0",h:"12",w:"12"},[(s(),l(b,null,{default:p(()=>{var e,u;return[(s(),l(v((e=n(t))==null?void 0:e.component),f({id:"bg-widget"},(u=n(t))==null?void 0:u.props),null,16))]}),_:1}))],4)):g("v-if",!0),(s(!0),d(x,null,_(n(i),(e,u)=>(s(),l(k,{key:u,name:"fade"},{default:p(()=>[e.value.component?(s(),d("eox-layout-item",{id:e.value.id.toString(),key:e.value.id,class:"panel",h:e.value.layout.h,w:e.value.layout.w,x:e.value.layout.x,y:e.value.layout.y},[(s(),l(b,null,{default:p(()=>[m("div",z,[(s(),l(v(e.value.component),f({key:e.value.id},{ref_for:!0},e.value.props),null,16))])]),_:2},1024))],8,T)):g("v-if",!0)]),_:2},1024))),128))],8,S)]}),_:1}))}},F=A(M,[["styles",[L]],["__scopeId","data-v-835b2a14"]]);export{F as default};
