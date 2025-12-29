import{M as g,g as y,w as c,a as F,b as u,c as C,W as p}from"./chunks/XYZ.DvwMvOCi.js";import{G as m,O as B}from"./chunks/ol.53XOChao.js";import{_ as b,p as k,v as f,P as A,c as d,o as n,j as a,e as h,a4 as D,a as t}from"./chunks/framework.BX3ruMRd.js";import"./chunks/Group.DKtNZ3u7.js";import"./chunks/index.jYV8uuws.js";const w={key:0,class:"warning"},S={key:1,class:"success"},x={key:2,class:"demo-section"},P=JSON.parse('{"title":"OpenLayers - False Color Infrared","description":"","frontmatter":{"title":"OpenLayers - False Color Infrared","layout":"page"},"headers":[],"relativePath":"integrations/ol/false-color.md","filePath":"integrations/ol/false-color.md"}'),_={name:"integrations/ol/false-color.md"},R=Object.assign(_,{setup(q){const e=k(null),l=k();let r=null;const E="https://s3.explorer.eopf.copernicus.eu/esa-zarr-sentinel-explorer-fra/tests-output/sentinel-2-l2a/S2B_MSIL2A_20251218T110359_N0511_R094_T30SUF_20251218T115223.zarr";f(async()=>{const i=document.createElement("canvas"),s=i.getContext("webgl")||i.getContext("experimental-webgl");e.value=s!==null,e.value&&A(()=>{v()})});function v(){if(l.value)try{const i=new m({url:E,group:"measurements/reflectance",bands:["b11","b04","b03"]});r=new g({layers:[new p({source:new B}),new p({source:i,style:{gamma:1.5,color:["color",["interpolate",["linear"],["band",1],0,0,.5,255],["interpolate",["linear"],["band",2],0,0,.5,255],["interpolate",["linear"],["band",3],0,0,.5,255],["case",["==",["+",["band",1],["band",2],["band",3]],0],0,1]]}})],target:l.value,view:y(i,c(1),F(2),u(),C(2))})}catch(i){console.error("Failed to initialize map:",i)}}function o(){navigator.clipboard.writeText(`// False color infrared
const layer = new TileLayer({
  source: new GeoZarr({
    url: zarrUrl,
    group: 'measurements/reflectance', 
    bands: ['b11', 'b04', 'b03'], // SWIR, Red, Green
  }),
  style: {
    gamma: 1.5,
    color: [
      'color',
      ['interpolate', ['linear'], ['band', 1], 0, 0, 0.5, 255], // SWIR as red
      ['interpolate', ['linear'], ['band', 2], 0, 0, 0.5, 255], // Red as green
      ['interpolate', ['linear'], ['band', 3], 0, 0, 0.5, 255], // Green as blue
      [
        'case',
        ['==', ['+', ['band', 1], ['band', 2], ['band', 3]], 0],
        0,
        1,
      ],
    ],
  },
});`)}return(i,s)=>(n(),d("div",null,[s[2]||(s[2]=a("h1",{id:"false-color-infrared",tabindex:"-1"},[t("False Color Infrared "),a("a",{class:"header-anchor",href:"#false-color-infrared","aria-label":'Permalink to "False Color Infrared"'},"​")],-1)),s[3]||(s[3]=a("p",null,"This example demonstrates false color infrared visualization, which is excellent for vegetation analysis and land cover mapping.",-1)),e.value===!1?(n(),d("div",w," ⚠️ **WebGL Not Supported**: Your browser doesn't support WebGL, which is required for GeoZarr visualization. ")):h("",!0),e.value===!0?(n(),d("div",S," ✅ **WebGL Supported**: Your browser can render false color infrared imagery. ")):h("",!0),s[4]||(s[4]=a("h2",{id:"live-demo",tabindex:"-1"},[t("Live Demo "),a("a",{class:"header-anchor",href:"#live-demo","aria-label":'Permalink to "Live Demo"'},"​")],-1)),e.value?(n(),d("div",x,[a("div",{ref_key:"mapRef",ref:l,class:"map-container"},null,512),a("div",{class:"code-section"},[a("button",{onClick:o,class:"copy-button"},"📋 Copy Code"),s[0]||(s[0]=a("p",null,"This example demonstrates false color infrared with:",-1)),s[1]||(s[1]=a("ul",null,[a("li",null,[a("strong",null,"SWIR Band"),t(" - Short-Wave Infrared (B11, 1610nm) as Red")]),a("li",null,[a("strong",null,"Red Band"),t(" - Red light (B04, 665nm) as Green")]),a("li",null,[a("strong",null,"Green Band"),t(" - Green light (B03, 560nm) as Blue")]),a("li",null,[a("strong",null,"Enhanced Contrast"),t(" - Better discrimination of land cover types")])],-1))])])):h("",!0),s[5]||(s[5]=D("",13))]))}}),M=b(R,[["__scopeId","data-v-35109ed2"]]);export{P as __pageData,M as default};
