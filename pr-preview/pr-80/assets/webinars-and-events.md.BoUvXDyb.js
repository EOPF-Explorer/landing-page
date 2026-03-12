import{o as e,c as n,j as t,e as o,F as h,B as g,n as m,t as c,a as f,h as E,b as S,p as O,E as _}from"./chunks/framework.cQKVF8Ur.js";const T={class:"no-padding fill margin-bottom small-elevate"},C={class:"grid no-space surface"},F={class:"s12 m4 relative"},W=["src"],Z={class:"s12 m6"},A={class:"padding"},L={class:"small"},P={key:0,class:"small-text"},$={key:0},D={key:1},G={key:1,class:"medium-text"},M=["href","target"],j=["onClick"],B={__name:"EventCard",props:{event:{type:Object,required:!0}},emits:["open-dialog"],setup(r){const l=r,v=E(()=>Array.isArray(l.event.actions)&&l.event.actions.length>0?l.event.actions:l.event.action?[l.event.action]:[]);return(a,i)=>(e(),n("article",T,[t("div",C,[t("div",F,[r.event.image?(e(),n("img",{key:0,class:"responsive",src:r.event.image},null,8,W)):o("",!0)]),t("div",Z,[t("div",A,[(e(!0),n(h,null,g(r.event.chips,s=>(e(),n("span",{key:s.text,class:m(["small small-text chip",s.class])},c(s.text),3))),128)),t("h5",L,c(r.event.title),1),r.event.date||r.event.location?(e(),n("p",P,[r.event.date?(e(),n("span",$,[i[0]||(i[0]=t("i",{class:"small mdi mdi-calendar-blank"},null,-1)),f(" "+c(r.event.date)+" ",1),i[1]||(i[1]=t("br",null,null,-1))])):o("",!0),r.event.location?(e(),n("span",D,[i[2]||(i[2]=t("i",{class:"small mdi mdi-map-marker-outline"},null,-1)),f(" "+c(r.event.location),1)])):o("",!0)])):o("",!0),r.event.description?(e(),n("p",G,c(r.event.description),1)):o("",!0),t("nav",null,[(e(!0),n(h,null,g(v.value,s=>(e(),n(h,{key:`${r.event.title}-${s.text}`},[s.type==="link"?(e(),n("a",{key:0,class:"button border secondary-text",href:s.link,target:s.target||"_blank"},c(s.text),9,M)):(e(),n("button",{key:1,class:"button border secondary-text",onClick:b=>a.$emit("open-dialog",s)},c(s.text),9,j))],64))),128))])])])])]))}},N={class:"grid large-space margin-top"},R={class:"s12 m12 l12"},H=["innerHTML"],V=["innerHTML"],q={key:2},I=["src"],U={class:"right-align justify-end no-space"},z=["href","target"],J={__name:"EventsGallery",props:{events:{type:Array,required:!0}},setup(r){const l=r,v=u=>{const d=u.match(/youtu\.be\/([\w-]{11})/);if(d)return`https://www.youtube.com/embed/${d[1]}`;const p=u.match(/[?&]v=([\w-]{11})/);return p?`https://www.youtube.com/embed/${p[1]}`:""},a=O(null),i=E(()=>a.value?a.value.dialog:null),s=u=>{u.type==="dialog"&&(a.value=u)},b=()=>{a.value=null};return(u,d)=>{var p,w,y,k;return e(),n(h,null,[t("div",N,[t("div",R,[(e(!0),n(h,null,g(l.events,x=>(e(),S(B,{key:x.title,event:x,onOpenDialog:s},null,8,["event"]))),128))])]),t("div",{class:m(["overlay blur center-align",{active:!!a.value}]),onClick:b},null,2),t("dialog",{class:m(["surface elevate",{active:!!a.value}]),style:{"min-width":"80%"}},[(p=i.value)!=null&&p.title?(e(),n("h5",{key:0,innerHTML:i.value.title},null,8,H)):o("",!0),d[0]||(d[0]=t("div",{class:"large-space"},null,-1)),(w=i.value)!=null&&w.description?(e(),n("div",{key:1,class:"medium-text",innerHTML:i.value.description},null,8,V)):o("",!0),d[1]||(d[1]=t("div",{class:"large-space"},null,-1)),(y=i.value)!=null&&y.recording?(e(),n("div",q,[i.value.recording?(e(),n("iframe",{key:0,class:"responsive margin-top",style:{width:"100%",height:"30rem"},src:v(i.value.recording),title:"Webinar recording",allow:`
          accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture;
          web-share;
        `,allowfullscreen:"",referrerpolicy:"strict-origin-when-cross-origin"},null,8,I)):o("",!0)])):o("",!0),t("nav",U,[t("button",{class:"transparent link",onClick:b},"Close"),(k=i.value)!=null&&k.confirmLink?(e(),n("button",{key:0,class:"transparent link",onClick:b},[t("a",{href:i.value.confirmLink.link,target:i.value.confirmLink.target||"_blank"},c(i.value.confirmLink.text||"Open"),9,z)])):o("",!0)])],2)],64)}}},Y=JSON.parse('{"title":"Webinars & Events","description":"","frontmatter":{"layout":"page"},"headers":[],"relativePath":"webinars-and-events.md","filePath":"webinars-and-events.md"}'),Q={name:"webinars-and-events.md"},K=Object.assign(Q,{setup(r){const l=[{title:"EOPF Explorer Webinar #2 - Advanced Analysis with Sentinel Zarr",image:"/assets/globe-hero.jpg",chips:[{text:"Upcoming event",class:"green-text"}],date:"Mon 20 Apr 2026 15:00 - 16:00 CEST",location:"Online",description:"Webinar #2 focuses on advanced cloud-native analysis with Sentinel Zarr, covering TiTiler server-side rendering, openEO integration, and practical workflows that take users from exploration to actionable insights.",actions:[{type:"dialog",text:"View details",dialog:{title:"EOPF Explorer Webinar #2 - Advanced Analysis with Sentinel Zarr",description:`Following the launch session focused on discovery and screening, this second webinar dives deeper into analysis workflows enabled by the EOPF Sentinel Zarr Explorer.
        <br/><br/>
        If Webinar #1 showed you what is possible, Webinar #2 explores how to go further.
        <br/><br/>
        <strong>What This Session Focuses On</strong>
        <br/>
        We move beyond browsing and band combinations into:
        <ul>
          <li>On-the-fly analysis with cloud-native Sentinel Zarr</li>
          <li>Server-side rendering and advanced band expressions using TiTiler</li>
          <li>Moving from visual exploration to structured analytical workflows</li>
          <li>Bridging into tools such as openEO / openEO Studio</li>
          <li>Building interactive stories and dashboards (eodash / EOxElements)</li>
        </ul>
        This session will demonstrate how the EOPF Explorer supports the full user journey, from initial discovery to actionable analysis, without requiring traditional download-heavy workflows.
        <br/><br/>
        <strong>Why This Matters</strong>
        <br/>
        Zarr is the planned future distribution format for Copernicus Sentinel data.
        <br/><br/>
        The EOPF Explorer demonstrates how enhanced GeoZarr conventions unlock:
        <ul>
          <li>Faster analysis directly in the browser</li>
          <li>Scalable cloud-native processing</li>
          <li>Reduced friction between exploration and insight</li>
          <li>Open standards-based interoperability</li>
        </ul>
        For developers, this means access to:
        <ul>
          <li>Client-side rendering (OpenLayers + WebGL)</li>
          <li>Server-side visualization (TiTiler)</li>
          <li>Open specifications (STAC, GeoZarr conventions)</li>
        </ul>
        For users and researchers, this means:
        <ul>
          <li>Immediate analytical capability</li>
          <li>Less overhead</li>
          <li>Faster experimentation and iteration</li>
        </ul>
        <strong>Addressing Common Questions</strong>
        <ul>
          <li>How the Explorer relates to the Zarr Sample Service</li>
          <li>What is evolving in the GeoZarr conventions</li>
          <li>When broader Sentinel distribution in this enhanced format may happen</li>
          <li>How you can engage now and shape the direction of EOPF</li>
        </ul>
        This is an exciting phase of development: community input matters.
        <br/><br/>
        <strong>Who Should Attend</strong>
        <ul>
          <li>Earth observation data users and researchers</li>
          <li>Data scientists interested in cloud-native workflows</li>
          <li>Web developers creating geospatial applications</li>
          <li>Anyone curious about the future of Copernicus data distribution</li>
        </ul>
        <strong>Learn More</strong>
        <ul>
          <li>Software and services: <a href="https://explorer.eopf.copernicus.eu/software-services" target="_blank" rel="noopener">https://explorer.eopf.copernicus.eu/software-services</a></li>
          <li>Data model: <a href="https://explorer.eopf.copernicus.eu/datamodel/" target="_blank" rel="noopener">https://explorer.eopf.copernicus.eu/datamodel/</a></li>
          <li>Project site: <a href="https://explorer.eopf.copernicus.eu/" target="_blank" rel="noopener">https://explorer.eopf.copernicus.eu/</a></li>
        </ul>
        Be part of the conversation. Shape the future of Sentinel data use.`,confirmLink:{link:"https://buytickets.at/thrivegeo/2073515/r/explorerwebsite",text:"Register now",target:"_blank"}}},{type:"link",text:"Register now",link:"https://buytickets.at/thrivegeo/2073515/r/explorerwebsite",target:"_blank"}]},{title:"Cloud-Native Sentinel Data: EOPF Sentinel Zarr Explorer Launch Webinar",image:"/assets/globe-hero.jpg",chips:[{text:"Past event",class:""},{text:"Recording",class:""}],date:new Date("03-09-2026").toString().split(" ").splice(0,4).join(" "),location:"Online",description:"This webinar marks the official launch of the EOPF Sentinel Zarr Explorer, a new platform enabling cloud-native visualisation of Copernicus Sentinel data directly in the browser.",action:{type:"dialog",text:"View details",dialog:{title:"EOPF Sentinel Zarr Explorer Launch Webinar",description:`This webinar marks the official launch of the EOPF Sentinel Zarr Explorer, a new platform enabling cloud-native visualisation of Copernicus Sentinel data directly in the browser.
        <br/>
        In this session, experts from ESA, Development Seed, EOX, and thriveGEO demonstrate how GeoZarr-formatted Sentinel data can be explored instantly without downloads or preprocessing. The Explorer shows how open-source technologies enable fast, scalable access to Earth observation data.
        <br/>
        The webinar walks through the full workflow: from STAC-based discovery to real-time visualisation and storytelling with satellite imagery.
        <br/>
        Get the slides
        https://drive.google.com/file/d/14nW0...
        <br/>
        What you’ll see in this webinar
        <ul>
        <li>Browsing Sentinel data using STAC catalogs</li>
        <li>Real-time visualisation of Sentinel imagery in the browser</li>
        <li>Dynamic band combinations and rapid data screening</li>
        <li>Cloud-native workflows powered by GeoZarr</li>
        <li>Open-source tools including OpenLayers, GDAL, and TiTiler</li>
        <li>Why this matters</li>
        <li>Zarr is the planned future distribution format for Copernicus Sentinel data.</li>
        </ul>
        <br/>
        The EOPF Explorer demonstrates how cloud-native data formats enable faster access, scalable analysis, and interactive exploration of Earth observation datasets.
        <br/>
        EOPF Sentinel Zarr Explorer
        https://explorer.eopf.copernicus.eu/s...
        <br/>
        Learn more about the data model
        https://explorer.eopf.copernicus.eu/d...
        <br/>
        Upcoming webinar
        📅 April 20 | 15:00-16:00 CET
        <br/>
        Join our online workshop exploring advanced analysis workflows using Sentinel Zarr data, including server-side visualisation and analytical tools such as TiTiler and openEO.
        <br/>
        Register here
        https://buytickets.at/thrivegeo/20735...
        <br/>
        #EOPF #Copernicus #EarthObservation #GeoZarr #CloudNative #SentinelData #Geospatial #OpenSource`,recording:"https://www.youtube.com/watch?v=ddR5OEF4-yM"}}}];return(v,a)=>(e(),n("div",null,[a[0]||(a[0]=t("h1",{id:"webinars-events",tabindex:"-1"},[f("Webinars & Events "),t("a",{class:"header-anchor link",href:"#webinars-events","aria-label":'Permalink to "Webinars & Events"'},"​")],-1)),a[1]||(a[1]=t("p",null,"Stay up to date with the latest advancements, events, and releases from the EOPF Explorer community.",-1)),_(J,{events:l})]))}});export{Y as __pageData,K as default};
