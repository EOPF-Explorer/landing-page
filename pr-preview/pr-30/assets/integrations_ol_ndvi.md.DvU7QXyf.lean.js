import{M as v,g as o,w as g,a as y,b as F,c as u,W as h}from"./chunks/XYZ.DvwMvOCi.js";import{G as C,O as B}from"./chunks/ol.53XOChao.js";import{_ as m,p,v as f,P as D,c as l,o as b,j as a,e,a4 as N,a as t}from"./chunks/framework.BX3ruMRd.js";import"./chunks/Group.DKtNZ3u7.js";import"./chunks/index.jYV8uuws.js";const w={key:0,class:"warning"},q={key:1,class:"success"},A={key:2,class:"demo-section"},P=JSON.parse('{"title":"OpenLayers - NDVI Calculation","description":"","frontmatter":{"title":"OpenLayers - NDVI Calculation","layout":"page"},"headers":[],"relativePath":"integrations/ol/ndvi.md","filePath":"integrations/ol/ndvi.md"}'),I={name:"integrations/ol/ndvi.md"},V=Object.assign(I,{setup(x){const n=p(null),d=p();let k=null;const c="https://s3.explorer.eopf.copernicus.eu/esa-zarr-sentinel-explorer-fra/tests-output/sentinel-2-l2a/S2B_MSIL2A_20251218T110359_N0511_R094_T30SUF_20251218T115223.zarr";f(async()=>{const i=document.createElement("canvas"),s=i.getContext("webgl")||i.getContext("experimental-webgl");n.value=s!==null,n.value&&D(()=>{r()})});function r(){if(d.value)try{const i=new C({url:c,group:"measurements/reflectance",bands:["b05","b04"]});k=new v({layers:[new h({source:new B}),new h({source:i,style:{color:["array",["*",["band",1],255],["*",["band",1],255],["*",["band",1],255],255]}})],target:d.value,view:o(i,g(1),y(2),F(),u(2))})}catch(i){console.error("Failed to initialize map:",i)}}function E(){navigator.clipboard.writeText(`// NDVI calculation
const layer = new TileLayer({
  source: new GeoZarr({
    url: zarrUrl,
    group: 'measurements/reflectance',
    bands: ['b05', 'b04'], // NIR, Red
  }),
  style: {
    color: [
      'case',
      // NDVI > 0.3 = vegetation (green)
      ['>', 
        ['/', 
          ['-', ['band', 1], ['band', 2]], 
          ['+', ['band', 1], ['band', 2]]
        ], 
        0.3
      ],
      [0, 200, 0, 255], // Green for vegetation
      [200, 100, 0, 255] // Brown for non-vegetation
    ],
  },
});`)}return(i,s)=>(b(),l("div",null,[s[2]||(s[2]=a("h1",{id:"ndvi-calculation",tabindex:"-1"},[t("NDVI Calculation "),a("a",{class:"header-anchor",href:"#ndvi-calculation","aria-label":'Permalink to "NDVI Calculation"'},"​")],-1)),s[3]||(s[3]=a("p",null,"This example demonstrates real-time calculation of the Normalized Difference Vegetation Index (NDVI) directly in the browser using WebGL expressions.",-1)),n.value===!1?(b(),l("div",w," ⚠️ **WebGL Not Supported**: Your browser doesn't support WebGL, which is required for GeoZarr visualization and NDVI calculation. ")):e("",!0),n.value===!0?(b(),l("div",q," ✅ **WebGL Supported**: Your browser can perform real-time NDVI calculations. ")):e("",!0),s[4]||(s[4]=a("h2",{id:"live-demo",tabindex:"-1"},[t("Live Demo "),a("a",{class:"header-anchor",href:"#live-demo","aria-label":'Permalink to "Live Demo"'},"​")],-1)),n.value?(b(),l("div",A,[a("div",{ref_key:"mapRef",ref:d,class:"map-container"},null,512),a("div",{class:"code-section"},[a("button",{onClick:E,class:"copy-button"},"📋 Copy Code"),s[0]||(s[0]=a("p",null,"This example demonstrates NDVI calculation with:",-1)),s[1]||(s[1]=a("ul",null,[a("li",null,[a("strong",null,"NIR Band"),t(" - Near-infrared (B08, 842nm)")]),a("li",null,[a("strong",null,"Red Band"),t(" - Red light (B04, 665nm)")]),a("li",null,[a("strong",null,"Real-time Calculation"),t(" - NDVI = (NIR - Red) / (NIR + Red)")]),a("li",null,[a("strong",null,"Linear Color Scale"),t(" - Yellow to green for NDVI range -0.6 to 0.8")])],-1))])])):e("",!0),s[5]||(s[5]=N("",21))]))}}),M=m(V,[["__scopeId","data-v-b2130c0b"]]);export{P as __pageData,M as default};
