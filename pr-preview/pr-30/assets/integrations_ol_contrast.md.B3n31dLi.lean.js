import{_ as S,p as o,v as k,P as q,c as l,o as c,j as a,e as f,a4 as C,a as e,a0 as p,aF as g,t as h}from"./chunks/framework.BX3ruMRd.js";import{W as b,M as _,g as T,w as I,a as L,b as P,c as V}from"./chunks/XYZ.DvwMvOCi.js";import{G as D,O as N}from"./chunks/ol.53XOChao.js";import"./chunks/Group.DKtNZ3u7.js";import"./chunks/index.jYV8uuws.js";const A={key:0,class:"warning"},W={key:1,class:"success"},j={key:2,class:"demo-section"},E={class:"controls"},Q=JSON.parse('{"title":"OpenLayers - Interactive Contrast","description":"","frontmatter":{"title":"OpenLayers - Interactive Contrast","layout":"page"},"headers":[],"relativePath":"integrations/ol/contrast.md","filePath":"integrations/ol/contrast.md"}'),F={name:"integrations/ol/contrast.md"},R=Object.assign(F,{setup(O){const r=o(null),u=o(),d=o(0),i=o(.5);let y=null,s=null;const x="https://s3.explorer.eopf.copernicus.eu/esa-zarr-sentinel-explorer-fra/tests-output/sentinel-2-l2a/S2B_MSIL2A_20251218T110359_N0511_R094_T30SUF_20251218T115223.zarr";k(async()=>{const n=document.createElement("canvas"),t=n.getContext("webgl")||n.getContext("experimental-webgl");r.value=t!==null,r.value&&q(()=>{w()})});function w(){if(u.value)try{const n=new D({url:x,group:"measurements/reflectance",bands:["b04","b03","b02"]});s=new b({source:n,style:{variables:{contrastMin:d.value,contrastMax:i.value},color:["color",["interpolate",["linear"],["band",1],["var","contrastMin"],0,["var","contrastMax"],255],["interpolate",["linear"],["band",2],["var","contrastMin"],0,["var","contrastMax"],255],["interpolate",["linear"],["band",3],["var","contrastMin"],0,["var","contrastMax"],255],["case",["==",["+",["band",1],["band",2],["band",3]],0],0,255]]}}),y=new _({layers:[new b({source:new N}),s],target:u.value,view:T(n,I(1),L(2),P(),V(2))})}catch(n){console.error("Failed to initialize map:",n)}}function m(){s&&s.updateStyleVariables({contrastMin:d.value,contrastMax:i.value})}function M(){navigator.clipboard.writeText(`// Dynamic contrast stretching
const layer = new TileLayer({
  source: source,
  style: {
    variables: {
      contrastMin: 0.0,
      contrastMax: 0.5,
    },
    color: [
      'color',
      ['interpolate', ['linear'], ['band', 1], ['var', 'contrastMin'], 0, ['var', 'contrastMax'], 255],
      ['interpolate', ['linear'], ['band', 2], ['var', 'contrastMin'], 0, ['var', 'contrastMax'], 255],
      ['interpolate', ['linear'], ['band', 3], ['var', 'contrastMin'], 0, ['var', 'contrastMax'], 255],
      [
        'case',
        ['==', ['+', ['band', 1], ['band', 2], ['band', 3]], 0],
        0,
        255,
      ],
    ],
  },
});

// Update contrast dynamically
layer.updateStyleVariables({
  contrastMin: newMin,
  contrastMax: newMax,
});`)}return(n,t)=>(c(),l("div",null,[t[6]||(t[6]=a("h1",{id:"interactive-contrast-stretching",tabindex:"-1"},[e("Interactive Contrast Stretching "),a("a",{class:"header-anchor",href:"#interactive-contrast-stretching","aria-label":'Permalink to "Interactive Contrast Stretching"'},"​")],-1)),t[7]||(t[7]=a("p",null,"This example demonstrates dynamic contrast adjustment using OpenLayers style variables, allowing real-time enhancement of satellite imagery.",-1)),r.value===!1?(c(),l("div",A," ⚠️ **WebGL Not Supported**: Your browser doesn't support WebGL, which is required for interactive contrast adjustment. ")):f("",!0),r.value===!0?(c(),l("div",W," ✅ **WebGL Supported**: Your browser can perform real-time contrast adjustments. ")):f("",!0),t[8]||(t[8]=a("h2",{id:"live-demo",tabindex:"-1"},[e("Live Demo "),a("a",{class:"header-anchor",href:"#live-demo","aria-label":'Permalink to "Live Demo"'},"​")],-1)),r.value?(c(),l("div",j,[a("div",{ref_key:"mapRef",ref:u,class:"map-container"},null,512),a("div",E,[a("label",null,[t[2]||(t[2]=e(" Contrast Min: ",-1)),p(a("input",{"onUpdate:modelValue":t[0]||(t[0]=v=>d.value=v),type:"range",min:"0",max:"0.4",step:"0.01",onInput:m},null,544),[[g,d.value,void 0,{number:!0}]]),e(" "+h(d.value.toFixed(2)),1)]),a("label",null,[t[3]||(t[3]=e(" Contrast Max: ",-1)),p(a("input",{"onUpdate:modelValue":t[1]||(t[1]=v=>i.value=v),type:"range",min:"0.2",max:"1.0",step:"0.01",onInput:m},null,544),[[g,i.value,void 0,{number:!0}]]),e(" "+h(i.value.toFixed(2)),1)])]),a("div",{class:"code-section"},[a("button",{onClick:M,class:"copy-button"},"📋 Copy Code"),t[4]||(t[4]=a("p",null,"This example demonstrates dynamic contrast with:",-1)),t[5]||(t[5]=a("ul",null,[a("li",null,[a("strong",null,"Style Variables"),e(" - Updateable parameters in WebGL expressions")]),a("li",null,[a("strong",null,"Linear Stretching"),e(" - Map input range to full 0-255 output")]),a("li",null,[a("strong",null,"Real-time Updates"),e(" - No re-rendering required")]),a("li",null,[a("strong",null,"Interactive Controls"),e(" - Adjust min/max values dynamically")])],-1))])])):f("",!0),t[9]||(t[9]=C("",18))]))}}),Y=S(R,[["__scopeId","data-v-d1e2d4f6"]]);export{Q as __pageData,Y as default};
