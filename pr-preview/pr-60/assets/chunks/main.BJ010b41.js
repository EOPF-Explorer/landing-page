var Yi=Object.defineProperty;var Lo=e=>{throw TypeError(e)};var zi=(e,t,o)=>t in e?Yi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var P=(e,t,o)=>zi(e,typeof t!="symbol"?t+"":t,o),Ke=(e,t,o)=>t.has(e)||Lo("Cannot "+o);var x=(e,t,o)=>(Ke(e,t,"read from private field"),o?o.call(e):t.get(e)),A=(e,t,o)=>t.has(e)?Lo("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),ut=(e,t,o,i)=>(Ke(e,t,"write to private field"),i?i.call(e,o):t.set(e,o),o),I=(e,t,o)=>(Ke(e,t,"access private method"),o);import{b as h,E as ue,A as yt,a as lt,i as ho}from"./lit-element.CBn2YVps.js";import{n as L}from"./when.BR7zwNJC.js";import{c as Wi}from"./repeat.Duc9p3Ra.js";import{e as Gi,i as Ji,t as It}from"./directive.CvdRHFdJ.js";import{r as Ki,p as Qi}from"./directive-helpers.Bj3rQkfn.js";import{o as tr}from"./unsafe-html.C2DIGSw-.js";import{o as ye}from"./map.DiiNQ3pp.js";import{e as wo,a as er}from"./addCommonStyleSheet.BIzSfp-c.js";import{c as ce,g as or}from"./commonjsHelpers.BosuxZz1.js";import{_ as ir}from"./index.BUIxO2d3.js";import{g as rr}from"./getElement.CdRlZPdn.js";/**
 * wms-capabilities @0.6.0
 * @description WMS service Capabilities > JSON, based on openlayers 
 * @license BSD-2-Clause
 * @preserve
 */var E=e=>e!==void 0,Xo=(e,t,o)=>t in e?e[t]:e[t]=o;const oe={ELEMENT:1,TEXT:3,CDATA_SECTION:4};class nr{constructor(t){this._parser=new t}toDocument(t){return this._parser.parseFromString(t,"application/xml")}getAllTextContent(t,o){return Ge(t,o).join("")}}function Ge(e,t){return Yo(e,t,[]).join("")}function Yo(e,t,o){if(e.nodeType===oe.CDATA_SECTION||e.nodeType===oe.TEXT)t?o.push(String(e.nodeValue).replace(/(\r\n|\r|\n)/g,"")):o.push(e.nodeValue);else{var i;for(i=e.firstChild;i;i=i.nextSibling)Yo(i,t,o)}return o}function ar(e,t,o,i){for(var r=sr(t);r;r=lr(r)){var n=r.namespaceURI||null,a=e[n];if(E(a)){var s=a[r.localName];E(s)&&s.call(i,r,o)}}}function sr(e){let t=e.firstElementChild||e.firstChild;for(;t&&t.nodeType!==oe.ELEMENT;)t=t.nextSibling;return t}function lr(e){let t=e.nextElementSibling||e.nextSibling;for(;t&&t.nodeType!==oe.ELEMENT;)t=t.nextSibling;return t}function F(e,t,o){return ur(e,t,o)}function ur(e,t,o){var i=E(o)?o:{},r,n;for(r=0,n=e.length;r<n;++r)i[e[r]]=t;return i}function zo(e,t){return function(o,i){var r=e.call(E(t)?t:this,o,i);if(E(r)){var n=i[i.length-1];n.push(r)}}}function N(e,t,o,i,r){return i.push(e),ar(t,o,i,r),i.pop()}function p(e,t,o){return function(i,r){let n=e.call(E(o)?o:this,i,r);if(E(n)){var a=r[r.length-1],s=E(t)?t:i.localName;a[s]=n}}}function J(e,t,o){return function(i,r){var n=e.call(E(o)?o:this,i,r);if(E(n)){var a=r[r.length-1],s=E(t)?t:i.localName,l=Xo(a,s,[]);l.push(n)}}}const cr=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function dr(e){return e.replace(cr,"")}function Vt(e){const t=/^\s*(true|1)|(false|0)\s*$/.exec(e);if(t)return E(t[1])||!1}function Mt(e){return gt(Ge(e,!1))}function gt(e){const t=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(e);if(t)return parseFloat(t[1])}function Qe(e){return xe(Ge(e,!1))}function xe(e){const t=/^\s*(\d+)\s*$/.exec(e);if(t)return parseInt(t[1],10)}function T(e){return dr(Ge(e,!1))}const hr="http://www.w3.org/1999/xlink";function So(e){return e.getAttributeNS(hr,"href")}function fr(e,t){return N({},kr,e,t)}function Wo(e){return[gt(e.getAttribute("minx")),gt(e.getAttribute("miny")),gt(e.getAttribute("maxx")),gt(e.getAttribute("maxy"))]}function pr(e,t){const o=Wo(e),i=[gt(e.getAttribute("resx")),gt(e.getAttribute("resy"))];return{crs:e.getAttribute("CRS")||e.getAttribute("SRS"),extent:o,res:i}}function gr(e,t){const o=Wo(e);if(!(!E(o[0])||!E(o[1])||!E(o[2])||!E(o[3])))return o}function yr(e,t){const o=parseFloat(e.getAttribute("min")),i=parseFloat(e.getAttribute("max"));return{min:o,max:i}}function mr(e,t){const o=N({},Ur,e,t);if(!E(o))return;const i=o.westBoundLongitude,r=o.southBoundLatitude,n=o.eastBoundLongitude,a=o.northBoundLatitude;if(!(!E(i)||!E(r)||!E(n)||!E(a)))return[i,r,n,a]}function vr(e,t){return N({},Pr,e,t)}function br(e,t){return N({},Hr,e,t)}function wr(e,t){return N({},Or,e,t)}function Sr(e,t){return N({},Mr,e,t)}function xr(e,t){return N({},Br,e,t)}function Er(e,t){return N([],Nr,e,t)}function $r(e,t){const o=Vt(e.getAttribute("queryable"));return N({queryable:E(o)?o:!1},Ko,e,t)}function Cr(e,t){var o=t[t.length-1];const i=N({},Ko,e,t);if(!E(i))return;let r=Vt(e.getAttribute("queryable"));E(r)||(r=o.queryable),i.queryable=E(r)?r:!1;let n=xe(e.getAttribute("cascaded"));E(n)||(n=o.cascaded),i.cascaded=n;let a=Vt(e.getAttribute("opaque"));E(a)||(a=o.opaque),i.opaque=E(a)?a:!1;let s=Vt(e.getAttribute("noSubsets"));E(s)||(s=o.noSubsets),i.noSubsets=E(s)?s:!1;let l=gt(e.getAttribute("fixedWidth"));E(l)||(l=o.fixedWidth),i.fixedWidth=l;let u=gt(e.getAttribute("fixedHeight"));E(u)||(u=o.fixedHeight),i.fixedHeight=u;const f=["Style","CRS","AuthorityURL"];for(let y=0,b=f.length;y<b;y++){const g=f[y],w=o[g];if(E(w)){let V=Xo(i,g,[]);V=V.concat(w),i[g]=V}}const d=["EX_GeographicBoundingBox","BoundingBox","Dimension","Attribution","MinScaleDenominator","MaxScaleDenominator"];for(let y=0,b=d.length;y<b;y++){const g=d[y],w=i[g];if(!E(w)){const V=o[g];i[g]=V}}return i}function Ar(e,t){return{name:e.getAttribute("name"),units:e.getAttribute("units"),unitSymbol:e.getAttribute("unitSymbol"),default:e.getAttribute("default"),multipleValues:Vt(e.getAttribute("multipleValues")),nearestValue:Vt(e.getAttribute("nearestValue")),current:Vt(e.getAttribute("current")),values:T(e)}}function vt(e,t){return N({},Yr,e,t)}function Tr(e,t){return N({},Fr,e,t)}function _r(e,t){return N({},jr,e,t)}function Dr(e,t){return N({},Zr,e,t)}function to(e,t){return N({},qr,e,t)}function Go(e,t){var o=vt(e,t);if(E(o)){const i=[xe(e.getAttribute("width")),xe(e.getAttribute("height"))];return o.size=i,o}}function Lr(e,t){var o=vt(e,t);if(E(o))return o.name=e.getAttribute("name"),o}function Vr(e,t){var o=vt(e,t);if(E(o))return o.type=e.getAttribute("type"),o}function Ir(e,t){return N({},Xr,e,t)}function Jo(e,t){return N([],zr,e,t)}const q=[null,"http://www.opengis.net/wms"],Rr=F(q,{Service:p(br),Capability:p(vr)}),Pr=F(q,{Request:p(Tr),Exception:p(Er),Layer:p($r)}),Hr=F(q,{Name:p(T),Title:p(T),Abstract:p(T),KeywordList:p(Jo),OnlineResource:p(So),ContactInformation:p(wr),Fees:p(T),AccessConstraints:p(T),LayerLimit:p(Qe),MaxWidth:p(Qe),MaxHeight:p(Qe)}),Or=F(q,{ContactPersonPrimary:p(Sr),ContactPosition:p(T),ContactAddress:p(xr),ContactVoiceTelephone:p(T),ContactFacsimileTelephone:p(T),ContactElectronicMailAddress:p(T)}),Mr=F(q,{ContactPerson:p(T),ContactOrganization:p(T)}),Br=F(q,{AddressType:p(T),Address:p(T),City:p(T),StateOrProvince:p(T),PostCode:p(T),Country:p(T)}),Nr=F(q,{Format:zo(T)}),Ko=F(q,{Name:p(T),Title:p(T),Abstract:p(T),KeywordList:p(Jo),CRS:J(T),SRS:J(T),EX_GeographicBoundingBox:p(mr),LatLonBoundingBox:p(gr),BoundingBox:J(pr),Dimension:J(Ar),Attribution:p(fr),AuthorityURL:J(Lr),Identifier:J(T),MetadataURL:J(Vr),DataURL:J(vt),FeatureListURL:J(vt),Style:J(Ir),MinScaleDenominator:p(Mt),MaxScaleDenominator:p(Mt),ScaleHint:p(yr),Layer:J(Cr)}),kr=F(q,{Title:p(T),OnlineResource:p(So),LogoURL:p(Go)}),Ur=F(q,{westBoundLongitude:p(Mt),eastBoundLongitude:p(Mt),southBoundLatitude:p(Mt),northBoundLatitude:p(Mt)}),Fr=F(q,{GetCapabilities:p(to),GetMap:p(to),GetFeatureInfo:p(to)}),qr=F(q,{Format:J(T),DCPType:J(_r)}),jr=F(q,{HTTP:p(Dr)}),Zr=F(q,{Get:p(vt),Post:p(vt)}),Xr=F(q,{Name:p(T),Title:p(T),Abstract:p(T),LegendURL:J(Go),StyleSheetURL:p(vt),StyleURL:p(vt)}),Yr=F(q,{Format:p(T),OnlineResource:p(So)}),zr=F(q,{Keyword:zo(T)});class Wr{constructor(t,o){!o&&typeof window<"u"&&(o=window.DOMParser),this.version=void 0,this._parser=new nr(o),this._data=t}data(t){return this._data=t,this}toJSON(t){return t=t||this._data,this.parse(t)}parse(t){return this.readFromDocument(this._parser.toDocument(t))}readFromDocument(t){for(let o=t.firstChild;o;o=o.nextSibling)if(o.nodeType==oe.ELEMENT)return this.readFromNode(o);return null}readFromNode(t){return this.version=t.getAttribute("version"),N({version:this.version},Rr,t,[])||null}}async function Gr(e){let t=new URL(e),o=t.searchParams;o.set("SERVICE","WMS"),o.set("REQUEST","GetCapabilities");let i=t.toString();const r=await fetch(i);if(r.ok){const n=await r.text();return new Wr(n).toJSON()}else throw new Error(`Error: ${r.status}`)}function xo(e){const t=/\b(?:wms|ows)\b/i,o=/{(?:z|x|y-?)}\/{(?:z|x|y-?)}\/{(?:z|x|y-?)}/i;return t.test(e)?"TileWMS":o.test(e)?"XYZ":!1}function Jr(e){const o=/^(?:(?:https?|ftp):\/\/|\/\/)?(?:localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:\w+[\w-]*\.)+\w+)(?::\d+)?(?:\/\S*)?$/.test(e),i=xo(e);return!!(e&&o&&i)}function Qo(e){return e.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,'"$2": ').replace(/,\s*}/g,"}").replace(/,\s*]/g,"]").replace(/\s*(\{|}|\[|\]|,)\s*/g,"$1").replaceAll('": //',"://")}function Kr(e){try{return JSON.parse(Qo(e)),!!e}catch{return!1}}function Qr(e,t){const o=new URL(e).searchParams;Object.entries(t).forEach(([a,s])=>{typeof s=="object"&&!Array.isArray(s)&&s!==null?Object.keys(s).forEach(l=>{o.set(l,s[l])}):Array.isArray(s)?(o.delete(a),s.forEach(l=>{o.append(a,l)})):o.set(a,s)});const i=e.split("?")[0],r=o.toString();return`${i}?${r}`}/**!
 * Sortable 1.15.7
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function tn(e,t,o){return(t=nn(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function bt(){return bt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)({}).hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},bt.apply(null,arguments)}function Vo(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),o.push.apply(o,i)}return o}function ht(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?Vo(Object(o),!0).forEach(function(i){tn(e,i,o[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Vo(Object(o)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(o,i))})}return e}function en(e,t){if(e==null)return{};var o,i,r=on(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)===-1&&{}.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function on(e,t){if(e==null)return{};var o={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(t.indexOf(i)!==-1)continue;o[i]=e[i]}return o}function rn(e,t){if(typeof e!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var i=o.call(e,t);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function nn(e){var t=rn(e,"string");return typeof t=="symbol"?t:t+""}function fo(e){"@babel/helpers - typeof";return fo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fo(e)}var an="1.15.7";function mt(e){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(e)}var wt=mt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),ae=mt(/Edge/i),Io=mt(/firefox/i),Gt=mt(/safari/i)&&!mt(/chrome/i)&&!mt(/android/i),Eo=mt(/iP(ad|od|hone)/i),ti=mt(/chrome/i)&&mt(/android/i),ei={capture:!1,passive:!1};function C(e,t,o){e.addEventListener(t,o,!wt&&ei)}function $(e,t,o){e.removeEventListener(t,o,!wt&&ei)}function Ee(e,t){if(t){if(t[0]===">"&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch{return!1}return!1}}function oi(e){return e.host&&e!==document&&e.host.nodeType&&e.host!==e?e.host:e.parentNode}function st(e,t,o,i){if(e){o=o||document;do{if(t!=null&&(t[0]===">"?e.parentNode===o&&Ee(e,t):Ee(e,t))||i&&e===o)return e;if(e===o)break}while(e=oi(e))}return null}var Ro=/\s+/g;function tt(e,t,o){if(e&&t)if(e.classList)e.classList[o?"add":"remove"](t);else{var i=(" "+e.className+" ").replace(Ro," ").replace(" "+t+" "," ");e.className=(i+(o?" "+t:"")).replace(Ro," ")}}function m(e,t,o){var i=e&&e.style;if(i){if(o===void 0)return document.defaultView&&document.defaultView.getComputedStyle?o=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(o=e.currentStyle),t===void 0?o:o[t];!(t in i)&&t.indexOf("webkit")===-1&&(t="-webkit-"+t),i[t]=o+(typeof o=="string"?"":"px")}}function Nt(e,t){var o="";if(typeof e=="string")o=e;else do{var i=m(e,"transform");i&&i!=="none"&&(o=i+" "+o)}while(!t&&(e=e.parentNode));var r=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return r&&new r(o)}function ii(e,t,o){if(e){var i=e.getElementsByTagName(t),r=0,n=i.length;if(o)for(;r<n;r++)o(i[r],r);return i}return[]}function dt(){var e=document.scrollingElement;return e||document.documentElement}function M(e,t,o,i,r){if(!(!e.getBoundingClientRect&&e!==window)){var n,a,s,l,u,f,d;if(e!==window&&e.parentNode&&e!==dt()?(n=e.getBoundingClientRect(),a=n.top,s=n.left,l=n.bottom,u=n.right,f=n.height,d=n.width):(a=0,s=0,l=window.innerHeight,u=window.innerWidth,f=window.innerHeight,d=window.innerWidth),(t||o)&&e!==window&&(r=r||e.parentNode,!wt))do if(r&&r.getBoundingClientRect&&(m(r,"transform")!=="none"||o&&m(r,"position")!=="static")){var y=r.getBoundingClientRect();a-=y.top+parseInt(m(r,"border-top-width")),s-=y.left+parseInt(m(r,"border-left-width")),l=a+n.height,u=s+n.width;break}while(r=r.parentNode);if(i&&e!==window){var b=Nt(r||e),g=b&&b.a,w=b&&b.d;b&&(a/=w,s/=g,d/=g,f/=w,l=a+f,u=s+d)}return{top:a,left:s,bottom:l,right:u,width:d,height:f}}}function Po(e,t,o){for(var i=At(e,!0),r=M(e)[t];i;){var n=M(i)[o],a=void 0;if(a=r>=n,!a)return i;if(i===dt())break;i=At(i,!1)}return!1}function Ut(e,t,o,i){for(var r=0,n=0,a=e.children;n<a.length;){if(a[n].style.display!=="none"&&a[n]!==v.ghost&&(i||a[n]!==v.dragged)&&st(a[n],o.draggable,e,!1)){if(r===t)return a[n];r++}n++}return null}function $o(e,t){for(var o=e.lastElementChild;o&&(o===v.ghost||m(o,"display")==="none"||t&&!Ee(o,t));)o=o.previousElementSibling;return o||null}function it(e,t){var o=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)e.nodeName.toUpperCase()!=="TEMPLATE"&&e!==v.clone&&(!t||Ee(e,t))&&o++;return o}function Ho(e){var t=0,o=0,i=dt();if(e)do{var r=Nt(e),n=r.a,a=r.d;t+=e.scrollLeft*n,o+=e.scrollTop*a}while(e!==i&&(e=e.parentNode));return[t,o]}function sn(e,t){for(var o in e)if(e.hasOwnProperty(o)){for(var i in t)if(t.hasOwnProperty(i)&&t[i]===e[o][i])return Number(o)}return-1}function At(e,t){if(!e||!e.getBoundingClientRect)return dt();var o=e,i=!1;do if(o.clientWidth<o.scrollWidth||o.clientHeight<o.scrollHeight){var r=m(o);if(o.clientWidth<o.scrollWidth&&(r.overflowX=="auto"||r.overflowX=="scroll")||o.clientHeight<o.scrollHeight&&(r.overflowY=="auto"||r.overflowY=="scroll")){if(!o.getBoundingClientRect||o===document.body)return dt();if(i||t)return o;i=!0}}while(o=o.parentNode);return dt()}function ln(e,t){if(e&&t)for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);return e}function eo(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}var Jt;function ri(e,t){return function(){if(!Jt){var o=arguments,i=this;o.length===1?e.call(i,o[0]):e.apply(i,o),Jt=setTimeout(function(){Jt=void 0},t)}}}function un(){clearTimeout(Jt),Jt=void 0}function ni(e,t,o){e.scrollLeft+=t,e.scrollTop+=o}function ai(e){var t=window.Polymer,o=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):o?o(e).clone(!0)[0]:e.cloneNode(!0)}function si(e,t,o){var i={};return Array.from(e.children).forEach(function(r){var n,a,s,l;if(!(!st(r,t.draggable,e,!1)||r.animated||r===o)){var u=M(r);i.left=Math.min((n=i.left)!==null&&n!==void 0?n:1/0,u.left),i.top=Math.min((a=i.top)!==null&&a!==void 0?a:1/0,u.top),i.right=Math.max((s=i.right)!==null&&s!==void 0?s:-1/0,u.right),i.bottom=Math.max((l=i.bottom)!==null&&l!==void 0?l:-1/0,u.bottom)}}),i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}var K="Sortable"+new Date().getTime();function cn(){var e=[],t;return{captureAnimationState:function(){if(e=[],!!this.options.animation){var i=[].slice.call(this.el.children);i.forEach(function(r){if(!(m(r,"display")==="none"||r===v.ghost)){e.push({target:r,rect:M(r)});var n=ht({},e[e.length-1].rect);if(r.thisAnimationDuration){var a=Nt(r,!0);a&&(n.top-=a.f,n.left-=a.e)}r.fromRect=n}})}},addAnimationState:function(i){e.push(i)},removeAnimationState:function(i){e.splice(sn(e,{target:i}),1)},animateAll:function(i){var r=this;if(!this.options.animation){clearTimeout(t),typeof i=="function"&&i();return}var n=!1,a=0;e.forEach(function(s){var l=0,u=s.target,f=u.fromRect,d=M(u),y=u.prevFromRect,b=u.prevToRect,g=s.rect,w=Nt(u,!0);w&&(d.top-=w.f,d.left-=w.e),u.toRect=d,u.thisAnimationDuration&&eo(y,d)&&!eo(f,d)&&(g.top-d.top)/(g.left-d.left)===(f.top-d.top)/(f.left-d.left)&&(l=hn(g,y,b,r.options)),eo(d,f)||(u.prevFromRect=f,u.prevToRect=d,l||(l=r.options.animation),r.animate(u,g,d,l)),l&&(n=!0,a=Math.max(a,l),clearTimeout(u.animationResetTimer),u.animationResetTimer=setTimeout(function(){u.animationTime=0,u.prevFromRect=null,u.fromRect=null,u.prevToRect=null,u.thisAnimationDuration=null},l),u.thisAnimationDuration=l)}),clearTimeout(t),n?t=setTimeout(function(){typeof i=="function"&&i()},a):typeof i=="function"&&i(),e=[]},animate:function(i,r,n,a){if(a){m(i,"transition",""),m(i,"transform","");var s=Nt(this.el),l=s&&s.a,u=s&&s.d,f=(r.left-n.left)/(l||1),d=(r.top-n.top)/(u||1);i.animatingX=!!f,i.animatingY=!!d,m(i,"transform","translate3d("+f+"px,"+d+"px,0)"),this.forRepaintDummy=dn(i),m(i,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),m(i,"transform","translate3d(0,0,0)"),typeof i.animated=="number"&&clearTimeout(i.animated),i.animated=setTimeout(function(){m(i,"transition",""),m(i,"transform",""),i.animated=!1,i.animatingX=!1,i.animatingY=!1},a)}}}}function dn(e){return e.offsetWidth}function hn(e,t,o,i){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-o.top,2)+Math.pow(t.left-o.left,2))*i.animation}var Rt=[],oo={initializeByDefault:!0},se={mount:function(t){for(var o in oo)oo.hasOwnProperty(o)&&!(o in t)&&(t[o]=oo[o]);Rt.forEach(function(i){if(i.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),Rt.push(t)},pluginEvent:function(t,o,i){var r=this;this.eventCanceled=!1,i.cancel=function(){r.eventCanceled=!0};var n=t+"Global";Rt.forEach(function(a){o[a.pluginName]&&(o[a.pluginName][n]&&o[a.pluginName][n](ht({sortable:o},i)),o.options[a.pluginName]&&o[a.pluginName][t]&&o[a.pluginName][t](ht({sortable:o},i)))})},initializePlugins:function(t,o,i,r){Rt.forEach(function(s){var l=s.pluginName;if(!(!t.options[l]&&!s.initializeByDefault)){var u=new s(t,o,t.options);u.sortable=t,u.options=t.options,t[l]=u,bt(i,u.defaults)}});for(var n in t.options)if(t.options.hasOwnProperty(n)){var a=this.modifyOption(t,n,t.options[n]);typeof a<"u"&&(t.options[n]=a)}},getEventProperties:function(t,o){var i={};return Rt.forEach(function(r){typeof r.eventProperties=="function"&&bt(i,r.eventProperties.call(o[r.pluginName],t))}),i},modifyOption:function(t,o,i){var r;return Rt.forEach(function(n){t[n.pluginName]&&n.optionListeners&&typeof n.optionListeners[o]=="function"&&(r=n.optionListeners[o].call(t[n.pluginName],i))}),r}};function fn(e){var t=e.sortable,o=e.rootEl,i=e.name,r=e.targetEl,n=e.cloneEl,a=e.toEl,s=e.fromEl,l=e.oldIndex,u=e.newIndex,f=e.oldDraggableIndex,d=e.newDraggableIndex,y=e.originalEvent,b=e.putSortable,g=e.extraEventProperties;if(t=t||o&&o[K],!!t){var w,V=t.options,W="on"+i.charAt(0).toUpperCase()+i.substr(1);window.CustomEvent&&!wt&&!ae?w=new CustomEvent(i,{bubbles:!0,cancelable:!0}):(w=document.createEvent("Event"),w.initEvent(i,!0,!0)),w.to=a||o,w.from=s||o,w.item=r||o,w.clone=n,w.oldIndex=l,w.newIndex=u,w.oldDraggableIndex=f,w.newDraggableIndex=d,w.originalEvent=y,w.pullMode=b?b.lastPutMode:void 0;var B=ht(ht({},g),se.getEventProperties(i,t));for(var Q in B)w[Q]=B[Q];o&&o.dispatchEvent(w),V[W]&&V[W].call(t,w)}}var pn=["evt"],G=function(t,o){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=i.evt,n=en(i,pn);se.pluginEvent.bind(v)(t,o,ht({dragEl:c,parentEl:H,ghostEl:S,rootEl:D,nextEl:Lt,lastDownEl:me,cloneEl:R,cloneHidden:$t,dragStarted:Yt,putSortable:k,activeSortable:v.active,originalEvent:r,oldIndex:Bt,oldDraggableIndex:Kt,newIndex:et,newDraggableIndex:Et,hideGhostForTarget:di,unhideGhostForTarget:hi,cloneNowHidden:function(){$t=!0},cloneNowShown:function(){$t=!1},dispatchSortableEvent:function(s){z({sortable:o,name:s,originalEvent:r})}},n))};function z(e){fn(ht({putSortable:k,cloneEl:R,targetEl:c,rootEl:D,oldIndex:Bt,oldDraggableIndex:Kt,newIndex:et,newDraggableIndex:Et},e))}var c,H,S,D,Lt,me,R,$t,Bt,et,Kt,Et,de,k,Ht=!1,$e=!1,Ce=[],_t,at,io,ro,Oo,Mo,Yt,Pt,Qt,te=!1,he=!1,ve,X,no=[],po=!1,Ae=[],Je=typeof document<"u",fe=Eo,Bo=ae||wt?"cssFloat":"float",gn=Je&&!ti&&!Eo&&"draggable"in document.createElement("div"),li=function(){if(Je){if(wt)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto",e.style.pointerEvents==="auto"}}(),ui=function(t,o){var i=m(t),r=parseInt(i.width)-parseInt(i.paddingLeft)-parseInt(i.paddingRight)-parseInt(i.borderLeftWidth)-parseInt(i.borderRightWidth),n=Ut(t,0,o),a=Ut(t,1,o),s=n&&m(n),l=a&&m(a),u=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+M(n).width,f=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+M(a).width;if(i.display==="flex")return i.flexDirection==="column"||i.flexDirection==="column-reverse"?"vertical":"horizontal";if(i.display==="grid")return i.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(n&&s.float&&s.float!=="none"){var d=s.float==="left"?"left":"right";return a&&(l.clear==="both"||l.clear===d)?"vertical":"horizontal"}return n&&(s.display==="block"||s.display==="flex"||s.display==="table"||s.display==="grid"||u>=r&&i[Bo]==="none"||a&&i[Bo]==="none"&&u+f>r)?"vertical":"horizontal"},yn=function(t,o,i){var r=i?t.left:t.top,n=i?t.right:t.bottom,a=i?t.width:t.height,s=i?o.left:o.top,l=i?o.right:o.bottom,u=i?o.width:o.height;return r===s||n===l||r+a/2===s+u/2},mn=function(t,o){var i;return Ce.some(function(r){var n=r[K].options.emptyInsertThreshold;if(!(!n||$o(r))){var a=M(r),s=t>=a.left-n&&t<=a.right+n,l=o>=a.top-n&&o<=a.bottom+n;if(s&&l)return i=r}}),i},ci=function(t){function o(n,a){return function(s,l,u,f){var d=s.options.group.name&&l.options.group.name&&s.options.group.name===l.options.group.name;if(n==null&&(a||d))return!0;if(n==null||n===!1)return!1;if(a&&n==="clone")return n;if(typeof n=="function")return o(n(s,l,u,f),a)(s,l,u,f);var y=(a?s:l).options.group.name;return n===!0||typeof n=="string"&&n===y||n.join&&n.indexOf(y)>-1}}var i={},r=t.group;(!r||fo(r)!="object")&&(r={name:r}),i.name=r.name,i.checkPull=o(r.pull,!0),i.checkPut=o(r.put),i.revertClone=r.revertClone,t.group=i},di=function(){!li&&S&&m(S,"display","none")},hi=function(){!li&&S&&m(S,"display","")};Je&&!ti&&document.addEventListener("click",function(e){if($e)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),$e=!1,!1},!0);var Dt=function(t){if(c){t=t.touches?t.touches[0]:t;var o=mn(t.clientX,t.clientY);if(o){var i={};for(var r in t)t.hasOwnProperty(r)&&(i[r]=t[r]);i.target=i.rootEl=o,i.preventDefault=void 0,i.stopPropagation=void 0,o[K]._onDragOver(i)}}},vn=function(t){c&&c.parentNode[K]._isOutsideThisEl(t.target)};function v(e,t){if(!(e&&e.nodeType&&e.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=bt({},t),e[K]=this;var o={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return ui(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,s){a.setData("Text",s.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:v.supportPointer!==!1&&"PointerEvent"in window&&(!Gt||Eo),emptyInsertThreshold:5};se.initializePlugins(this,e,o);for(var i in o)!(i in t)&&(t[i]=o[i]);ci(t);for(var r in this)r.charAt(0)==="_"&&typeof this[r]=="function"&&(this[r]=this[r].bind(this));this.nativeDraggable=t.forceFallback?!1:gn,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?C(e,"pointerdown",this._onTapStart):(C(e,"mousedown",this._onTapStart),C(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(C(e,"dragover",this),C(e,"dragenter",this)),Ce.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),bt(this,cn())}v.prototype={constructor:v,_isOutsideThisEl:function(t){!this.el.contains(t)&&t!==this.el&&(Pt=null)},_getDirection:function(t,o){return typeof this.options.direction=="function"?this.options.direction.call(this,t,o,c):this.options.direction},_onTapStart:function(t){if(t.cancelable){var o=this,i=this.el,r=this.options,n=r.preventOnFilter,a=t.type,s=t.touches&&t.touches[0]||t.pointerType&&t.pointerType==="touch"&&t,l=(s||t).target,u=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||l,f=r.filter;if(An(i),!c&&!(/mousedown|pointerdown/.test(a)&&t.button!==0||r.disabled)&&!u.isContentEditable&&!(!this.nativeDraggable&&Gt&&l&&l.tagName.toUpperCase()==="SELECT")&&(l=st(l,r.draggable,i,!1),!(l&&l.animated)&&me!==l)){if(Bt=it(l),Kt=it(l,r.draggable),typeof f=="function"){if(f.call(this,t,l,this)){z({sortable:o,rootEl:u,name:"filter",targetEl:l,toEl:i,fromEl:i}),G("filter",o,{evt:t}),n&&t.preventDefault();return}}else if(f&&(f=f.split(",").some(function(d){if(d=st(u,d.trim(),i,!1),d)return z({sortable:o,rootEl:d,name:"filter",targetEl:l,fromEl:i,toEl:i}),G("filter",o,{evt:t}),!0}),f)){n&&t.preventDefault();return}r.handle&&!st(u,r.handle,i,!1)||this._prepareDragStart(t,s,l)}}},_prepareDragStart:function(t,o,i){var r=this,n=r.el,a=r.options,s=n.ownerDocument,l;if(i&&!c&&i.parentNode===n){var u=M(i);if(D=n,c=i,H=c.parentNode,Lt=c.nextSibling,me=i,de=a.group,v.dragged=c,_t={target:c,clientX:(o||t).clientX,clientY:(o||t).clientY},Oo=_t.clientX-u.left,Mo=_t.clientY-u.top,this._lastX=(o||t).clientX,this._lastY=(o||t).clientY,c.style["will-change"]="all",l=function(){if(G("delayEnded",r,{evt:t}),v.eventCanceled){r._onDrop();return}r._disableDelayedDragEvents(),!Io&&r.nativeDraggable&&(c.draggable=!0),r._triggerDragStart(t,o),z({sortable:r,name:"choose",originalEvent:t}),tt(c,a.chosenClass,!0)},a.ignore.split(",").forEach(function(f){ii(c,f.trim(),ao)}),C(s,"dragover",Dt),C(s,"mousemove",Dt),C(s,"touchmove",Dt),a.supportPointer?(C(s,"pointerup",r._onDrop),!this.nativeDraggable&&C(s,"pointercancel",r._onDrop)):(C(s,"mouseup",r._onDrop),C(s,"touchend",r._onDrop),C(s,"touchcancel",r._onDrop)),Io&&this.nativeDraggable&&(this.options.touchStartThreshold=4,c.draggable=!0),G("delayStart",this,{evt:t}),a.delay&&(!a.delayOnTouchOnly||o)&&(!this.nativeDraggable||!(ae||wt))){if(v.eventCanceled){this._onDrop();return}a.supportPointer?(C(s,"pointerup",r._disableDelayedDrag),C(s,"pointercancel",r._disableDelayedDrag)):(C(s,"mouseup",r._disableDelayedDrag),C(s,"touchend",r._disableDelayedDrag),C(s,"touchcancel",r._disableDelayedDrag)),C(s,"mousemove",r._delayedDragTouchMoveHandler),C(s,"touchmove",r._delayedDragTouchMoveHandler),a.supportPointer&&C(s,"pointermove",r._delayedDragTouchMoveHandler),r._dragStartTimer=setTimeout(l,a.delay)}else l()}},_delayedDragTouchMoveHandler:function(t){var o=t.touches?t.touches[0]:t;Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){c&&ao(c),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;$(t,"mouseup",this._disableDelayedDrag),$(t,"touchend",this._disableDelayedDrag),$(t,"touchcancel",this._disableDelayedDrag),$(t,"pointerup",this._disableDelayedDrag),$(t,"pointercancel",this._disableDelayedDrag),$(t,"mousemove",this._delayedDragTouchMoveHandler),$(t,"touchmove",this._delayedDragTouchMoveHandler),$(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,o){o=o||t.pointerType=="touch"&&t,!this.nativeDraggable||o?this.options.supportPointer?C(document,"pointermove",this._onTouchMove):o?C(document,"touchmove",this._onTouchMove):C(document,"mousemove",this._onTouchMove):(C(c,"dragend",this),C(D,"dragstart",this._onDragStart));try{document.selection?be(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(t,o){if(Ht=!1,D&&c){G("dragStarted",this,{evt:o}),this.nativeDraggable&&C(document,"dragover",vn);var i=this.options;!t&&tt(c,i.dragClass,!1),tt(c,i.ghostClass,!0),v.active=this,t&&this._appendGhost(),z({sortable:this,name:"start",originalEvent:o})}else this._nulling()},_emulateDragOver:function(){if(at){this._lastX=at.clientX,this._lastY=at.clientY,di();for(var t=document.elementFromPoint(at.clientX,at.clientY),o=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(at.clientX,at.clientY),t!==o);)o=t;if(c.parentNode[K]._isOutsideThisEl(t),o)do{if(o[K]){var i=void 0;if(i=o[K]._onDragOver({clientX:at.clientX,clientY:at.clientY,target:t,rootEl:o}),i&&!this.options.dragoverBubble)break}t=o}while(o=oi(o));hi()}},_onTouchMove:function(t){if(_t){var o=this.options,i=o.fallbackTolerance,r=o.fallbackOffset,n=t.touches?t.touches[0]:t,a=S&&Nt(S,!0),s=S&&a&&a.a,l=S&&a&&a.d,u=fe&&X&&Ho(X),f=(n.clientX-_t.clientX+r.x)/(s||1)+(u?u[0]-no[0]:0)/(s||1),d=(n.clientY-_t.clientY+r.y)/(l||1)+(u?u[1]-no[1]:0)/(l||1);if(!v.active&&!Ht){if(i&&Math.max(Math.abs(n.clientX-this._lastX),Math.abs(n.clientY-this._lastY))<i)return;this._onDragStart(t,!0)}if(S){a?(a.e+=f-(io||0),a.f+=d-(ro||0)):a={a:1,b:0,c:0,d:1,e:f,f:d};var y="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");m(S,"webkitTransform",y),m(S,"mozTransform",y),m(S,"msTransform",y),m(S,"transform",y),io=f,ro=d,at=n}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!S){var t=this.options.fallbackOnBody?document.body:D,o=M(c,!0,fe,!0,t),i=this.options;if(fe){for(X=t;m(X,"position")==="static"&&m(X,"transform")==="none"&&X!==document;)X=X.parentNode;X!==document.body&&X!==document.documentElement?(X===document&&(X=dt()),o.top+=X.scrollTop,o.left+=X.scrollLeft):X=dt(),no=Ho(X)}S=c.cloneNode(!0),tt(S,i.ghostClass,!1),tt(S,i.fallbackClass,!0),tt(S,i.dragClass,!0),m(S,"transition",""),m(S,"transform",""),m(S,"box-sizing","border-box"),m(S,"margin",0),m(S,"top",o.top),m(S,"left",o.left),m(S,"width",o.width),m(S,"height",o.height),m(S,"opacity","0.8"),m(S,"position",fe?"absolute":"fixed"),m(S,"zIndex","100000"),m(S,"pointerEvents","none"),v.ghost=S,t.appendChild(S),m(S,"transform-origin",Oo/parseInt(S.style.width)*100+"% "+Mo/parseInt(S.style.height)*100+"%")}},_onDragStart:function(t,o){var i=this,r=t.dataTransfer,n=i.options;if(G("dragStart",this,{evt:t}),v.eventCanceled){this._onDrop();return}G("setupClone",this),v.eventCanceled||(R=ai(c),R.removeAttribute("id"),R.draggable=!1,R.style["will-change"]="",this._hideClone(),tt(R,this.options.chosenClass,!1),v.clone=R),i.cloneId=be(function(){G("clone",i),!v.eventCanceled&&(i.options.removeCloneOnHide||D.insertBefore(R,c),i._hideClone(),z({sortable:i,name:"clone"}))}),!o&&tt(c,n.dragClass,!0),o?($e=!0,i._loopId=setInterval(i._emulateDragOver,50)):($(document,"mouseup",i._onDrop),$(document,"touchend",i._onDrop),$(document,"touchcancel",i._onDrop),r&&(r.effectAllowed="move",n.setData&&n.setData.call(i,r,c)),C(document,"drop",i),m(c,"transform","translateZ(0)")),Ht=!0,i._dragStartId=be(i._dragStarted.bind(i,o,t)),C(document,"selectstart",i),Yt=!0,window.getSelection().removeAllRanges(),Gt&&m(document.body,"user-select","none")},_onDragOver:function(t){var o=this.el,i=t.target,r,n,a,s=this.options,l=s.group,u=v.active,f=de===l,d=s.sort,y=k||u,b,g=this,w=!1;if(po)return;function V(Xt,Zi){G(Xt,g,ht({evt:t,isOwner:f,axis:b?"vertical":"horizontal",revert:a,dragRect:r,targetRect:n,canSort:d,fromSortable:y,target:i,completed:B,onMove:function(Do,Xi){return pe(D,o,c,r,Do,M(Do),t,Xi)},changed:Q},Zi))}function W(){V("dragOverAnimationCapture"),g.captureAnimationState(),g!==y&&y.captureAnimationState()}function B(Xt){return V("dragOverCompleted",{insertion:Xt}),Xt&&(f?u._hideClone():u._showClone(g),g!==y&&(tt(c,k?k.options.ghostClass:u.options.ghostClass,!1),tt(c,s.ghostClass,!0)),k!==g&&g!==v.active?k=g:g===v.active&&k&&(k=null),y===g&&(g._ignoreWhileAnimating=i),g.animateAll(function(){V("dragOverAnimationComplete"),g._ignoreWhileAnimating=null}),g!==y&&(y.animateAll(),y._ignoreWhileAnimating=null)),(i===c&&!c.animated||i===o&&!i.animated)&&(Pt=null),!s.dragoverBubble&&!t.rootEl&&i!==document&&(c.parentNode[K]._isOutsideThisEl(t.target),!Xt&&Dt(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),w=!0}function Q(){et=it(c),Et=it(c,s.draggable),z({sortable:g,name:"change",toEl:o,newIndex:et,newDraggableIndex:Et,originalEvent:t})}if(t.preventDefault!==void 0&&t.cancelable&&t.preventDefault(),i=st(i,s.draggable,o,!0),V("dragOver"),v.eventCanceled)return w;if(c.contains(t.target)||i.animated&&i.animatingX&&i.animatingY||g._ignoreWhileAnimating===i)return B(!1);if($e=!1,u&&!s.disabled&&(f?d||(a=H!==D):k===this||(this.lastPutMode=de.checkPull(this,u,c,t))&&l.checkPut(this,u,c,t))){if(b=this._getDirection(t,i)==="vertical",r=M(c),V("dragOverValid"),v.eventCanceled)return w;if(a)return H=D,W(),this._hideClone(),V("revert"),v.eventCanceled||(Lt?D.insertBefore(c,Lt):D.appendChild(c)),B(!0);var Y=$o(o,s.draggable);if(!Y||xn(t,b,this)&&!Y.animated){if(Y===c)return B(!1);if(Y&&o===t.target&&(i=Y),i&&(n=M(i)),pe(D,o,c,r,i,n,t,!!i)!==!1)return W(),Y&&Y.nextSibling?o.insertBefore(c,Y.nextSibling):o.appendChild(c),H=o,Q(),B(!0)}else if(Y&&Sn(t,b,this)){var rt=Ut(o,0,s,!0);if(rt===c)return B(!1);if(i=rt,n=M(i),pe(D,o,c,r,i,n,t,!1)!==!1)return W(),o.insertBefore(c,rt),H=o,Q(),B(!0)}else if(i.parentNode===o){n=M(i);var _=0,j,nt=c.parentNode!==o,Z=!yn(c.animated&&c.toRect||r,i.animated&&i.toRect||n,b),qt=b?"top":"left",St=Po(i,"top","top")||Po(c,"top","top"),jt=St?St.scrollTop:void 0;Pt!==i&&(j=n[qt],te=!1,he=!Z&&s.invertSwap||nt),_=En(t,i,n,b,Z?1:s.swapThreshold,s.invertedSwapThreshold==null?s.swapThreshold:s.invertedSwapThreshold,he,Pt===i);var ft;if(_!==0){var Tt=it(c);do Tt-=_,ft=H.children[Tt];while(ft&&(m(ft,"display")==="none"||ft===S))}if(_===0||ft===i)return B(!1);Pt=i,Qt=_;var Zt=i.nextElementSibling,xt=!1;xt=_===1;var le=pe(D,o,c,r,i,n,t,xt);if(le!==!1)return(le===1||le===-1)&&(xt=le===1),po=!0,setTimeout(wn,30),W(),xt&&!Zt?o.appendChild(c):i.parentNode.insertBefore(c,xt?Zt:i),St&&ni(St,0,jt-St.scrollTop),H=c.parentNode,j!==void 0&&!he&&(ve=Math.abs(j-M(i)[qt])),Q(),B(!0)}if(o.contains(c))return B(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){$(document,"mousemove",this._onTouchMove),$(document,"touchmove",this._onTouchMove),$(document,"pointermove",this._onTouchMove),$(document,"dragover",Dt),$(document,"mousemove",Dt),$(document,"touchmove",Dt)},_offUpEvents:function(){var t=this.el.ownerDocument;$(t,"mouseup",this._onDrop),$(t,"touchend",this._onDrop),$(t,"pointerup",this._onDrop),$(t,"pointercancel",this._onDrop),$(t,"touchcancel",this._onDrop),$(document,"selectstart",this)},_onDrop:function(t){var o=this.el,i=this.options;if(et=it(c),Et=it(c,i.draggable),G("drop",this,{evt:t}),H=c&&c.parentNode,et=it(c),Et=it(c,i.draggable),v.eventCanceled){this._nulling();return}Ht=!1,he=!1,te=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),go(this.cloneId),go(this._dragStartId),this.nativeDraggable&&($(document,"drop",this),$(o,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Gt&&m(document.body,"user-select",""),m(c,"transform",""),t&&(Yt&&(t.cancelable&&t.preventDefault(),!i.dropBubble&&t.stopPropagation()),S&&S.parentNode&&S.parentNode.removeChild(S),(D===H||k&&k.lastPutMode!=="clone")&&R&&R.parentNode&&R.parentNode.removeChild(R),c&&(this.nativeDraggable&&$(c,"dragend",this),ao(c),c.style["will-change"]="",Yt&&!Ht&&tt(c,k?k.options.ghostClass:this.options.ghostClass,!1),tt(c,this.options.chosenClass,!1),z({sortable:this,name:"unchoose",toEl:H,newIndex:null,newDraggableIndex:null,originalEvent:t}),D!==H?(et>=0&&(z({rootEl:H,name:"add",toEl:H,fromEl:D,originalEvent:t}),z({sortable:this,name:"remove",toEl:H,originalEvent:t}),z({rootEl:H,name:"sort",toEl:H,fromEl:D,originalEvent:t}),z({sortable:this,name:"sort",toEl:H,originalEvent:t})),k&&k.save()):et!==Bt&&et>=0&&(z({sortable:this,name:"update",toEl:H,originalEvent:t}),z({sortable:this,name:"sort",toEl:H,originalEvent:t})),v.active&&((et==null||et===-1)&&(et=Bt,Et=Kt),z({sortable:this,name:"end",toEl:H,originalEvent:t}),this.save()))),this._nulling()},_nulling:function(){G("nulling",this),D=c=H=S=Lt=R=me=$t=_t=at=Yt=et=Et=Bt=Kt=Pt=Qt=k=de=v.dragged=v.ghost=v.clone=v.active=null;var t=this.el;Ae.forEach(function(o){t.contains(o)&&(o.checked=!0)}),Ae.length=io=ro=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":c&&(this._onDragOver(t),bn(t));break;case"selectstart":t.preventDefault();break}},toArray:function(){for(var t=[],o,i=this.el.children,r=0,n=i.length,a=this.options;r<n;r++)o=i[r],st(o,a.draggable,this.el,!1)&&t.push(o.getAttribute(a.dataIdAttr)||Cn(o));return t},sort:function(t,o){var i={},r=this.el;this.toArray().forEach(function(n,a){var s=r.children[a];st(s,this.options.draggable,r,!1)&&(i[n]=s)},this),o&&this.captureAnimationState(),t.forEach(function(n){i[n]&&(r.removeChild(i[n]),r.appendChild(i[n]))}),o&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,o){return st(t,o||this.options.draggable,this.el,!1)},option:function(t,o){var i=this.options;if(o===void 0)return i[t];var r=se.modifyOption(this,t,o);typeof r<"u"?i[t]=r:i[t]=o,t==="group"&&ci(i)},destroy:function(){G("destroy",this);var t=this.el;t[K]=null,$(t,"mousedown",this._onTapStart),$(t,"touchstart",this._onTapStart),$(t,"pointerdown",this._onTapStart),this.nativeDraggable&&($(t,"dragover",this),$(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(o){o.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Ce.splice(Ce.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!$t){if(G("hideClone",this),v.eventCanceled)return;m(R,"display","none"),this.options.removeCloneOnHide&&R.parentNode&&R.parentNode.removeChild(R),$t=!0}},_showClone:function(t){if(t.lastPutMode!=="clone"){this._hideClone();return}if($t){if(G("showClone",this),v.eventCanceled)return;c.parentNode==D&&!this.options.group.revertClone?D.insertBefore(R,c):Lt?D.insertBefore(R,Lt):D.appendChild(R),this.options.group.revertClone&&this.animate(c,R),m(R,"display",""),$t=!1}}};function bn(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault()}function pe(e,t,o,i,r,n,a,s){var l,u=e[K],f=u.options.onMove,d;return window.CustomEvent&&!wt&&!ae?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=t,l.from=e,l.dragged=o,l.draggedRect=i,l.related=r||t,l.relatedRect=n||M(t),l.willInsertAfter=s,l.originalEvent=a,e.dispatchEvent(l),f&&(d=f.call(u,l,a)),d}function ao(e){e.draggable=!1}function wn(){po=!1}function Sn(e,t,o){var i=M(Ut(o.el,0,o.options,!0)),r=si(o.el,o.options,S),n=10;return t?e.clientX<r.left-n||e.clientY<i.top&&e.clientX<i.right:e.clientY<r.top-n||e.clientY<i.bottom&&e.clientX<i.left}function xn(e,t,o){var i=M($o(o.el,o.options.draggable)),r=si(o.el,o.options,S),n=10;return t?e.clientX>r.right+n||e.clientY>i.bottom&&e.clientX>i.left:e.clientY>r.bottom+n||e.clientX>i.right&&e.clientY>i.top}function En(e,t,o,i,r,n,a,s){var l=i?e.clientY:e.clientX,u=i?o.height:o.width,f=i?o.top:o.left,d=i?o.bottom:o.right,y=!1;if(!a){if(s&&ve<u*r){if(!te&&(Qt===1?l>f+u*n/2:l<d-u*n/2)&&(te=!0),te)y=!0;else if(Qt===1?l<f+ve:l>d-ve)return-Qt}else if(l>f+u*(1-r)/2&&l<d-u*(1-r)/2)return $n(t)}return y=y||a,y&&(l<f+u*n/2||l>d-u*n/2)?l>f+u/2?1:-1:0}function $n(e){return it(c)<it(e)?1:-1}function Cn(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,o=t.length,i=0;o--;)i+=t.charCodeAt(o);return i.toString(36)}function An(e){Ae.length=0;for(var t=e.getElementsByTagName("input"),o=t.length;o--;){var i=t[o];i.checked&&Ae.push(i)}}function be(e){return setTimeout(e,0)}function go(e){return clearTimeout(e)}Je&&C(document,"touchmove",function(e){(v.active||Ht)&&e.cancelable&&e.preventDefault()});v.utils={on:C,off:$,css:m,find:ii,is:function(t,o){return!!st(t,o,t,!1)},extend:ln,throttle:ri,closest:st,toggleClass:tt,clone:ai,index:it,nextTick:be,cancelNextTick:go,detectDirection:ui,getChild:Ut,expando:K};v.get=function(e){return e[K]};v.mount=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];t[0].constructor===Array&&(t=t[0]),t.forEach(function(i){if(!i.prototype||!i.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(i));i.utils&&(v.utils=ht(ht({},v.utils),i.utils)),se.mount(i)})};v.create=function(e,t){return new v(e,t)};v.version=an;var O=[],zt,yo,mo=!1,so,lo,Te,Wt;function Tn(){function e(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var t in this)t.charAt(0)==="_"&&typeof this[t]=="function"&&(this[t]=this[t].bind(this))}return e.prototype={dragStarted:function(o){var i=o.originalEvent;this.sortable.nativeDraggable?C(document,"dragover",this._handleAutoScroll):this.options.supportPointer?C(document,"pointermove",this._handleFallbackAutoScroll):i.touches?C(document,"touchmove",this._handleFallbackAutoScroll):C(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(o){var i=o.originalEvent;!this.options.dragOverBubble&&!i.rootEl&&this._handleAutoScroll(i)},drop:function(){this.sortable.nativeDraggable?$(document,"dragover",this._handleAutoScroll):($(document,"pointermove",this._handleFallbackAutoScroll),$(document,"touchmove",this._handleFallbackAutoScroll),$(document,"mousemove",this._handleFallbackAutoScroll)),No(),we(),un()},nulling:function(){Te=yo=zt=mo=Wt=so=lo=null,O.length=0},_handleFallbackAutoScroll:function(o){this._handleAutoScroll(o,!0)},_handleAutoScroll:function(o,i){var r=this,n=(o.touches?o.touches[0]:o).clientX,a=(o.touches?o.touches[0]:o).clientY,s=document.elementFromPoint(n,a);if(Te=o,i||this.options.forceAutoScrollFallback||ae||wt||Gt){uo(o,this.options,s,i);var l=At(s,!0);mo&&(!Wt||n!==so||a!==lo)&&(Wt&&No(),Wt=setInterval(function(){var u=At(document.elementFromPoint(n,a),!0);u!==l&&(l=u,we()),uo(o,r.options,u,i)},10),so=n,lo=a)}else{if(!this.options.bubbleScroll||At(s,!0)===dt()){we();return}uo(o,this.options,At(s,!1),!1)}}},bt(e,{pluginName:"scroll",initializeByDefault:!0})}function we(){O.forEach(function(e){clearInterval(e.pid)}),O=[]}function No(){clearInterval(Wt)}var uo=ri(function(e,t,o,i){if(t.scroll){var r=(e.touches?e.touches[0]:e).clientX,n=(e.touches?e.touches[0]:e).clientY,a=t.scrollSensitivity,s=t.scrollSpeed,l=dt(),u=!1,f;yo!==o&&(yo=o,we(),zt=t.scroll,f=t.scrollFn,zt===!0&&(zt=At(o,!0)));var d=0,y=zt;do{var b=y,g=M(b),w=g.top,V=g.bottom,W=g.left,B=g.right,Q=g.width,Y=g.height,rt=void 0,_=void 0,j=b.scrollWidth,nt=b.scrollHeight,Z=m(b),qt=b.scrollLeft,St=b.scrollTop;b===l?(rt=Q<j&&(Z.overflowX==="auto"||Z.overflowX==="scroll"||Z.overflowX==="visible"),_=Y<nt&&(Z.overflowY==="auto"||Z.overflowY==="scroll"||Z.overflowY==="visible")):(rt=Q<j&&(Z.overflowX==="auto"||Z.overflowX==="scroll"),_=Y<nt&&(Z.overflowY==="auto"||Z.overflowY==="scroll"));var jt=rt&&(Math.abs(B-r)<=a&&qt+Q<j)-(Math.abs(W-r)<=a&&!!qt),ft=_&&(Math.abs(V-n)<=a&&St+Y<nt)-(Math.abs(w-n)<=a&&!!St);if(!O[d])for(var Tt=0;Tt<=d;Tt++)O[Tt]||(O[Tt]={});(O[d].vx!=jt||O[d].vy!=ft||O[d].el!==b)&&(O[d].el=b,O[d].vx=jt,O[d].vy=ft,clearInterval(O[d].pid),(jt!=0||ft!=0)&&(u=!0,O[d].pid=setInterval((function(){i&&this.layer===0&&v.active._onTouchMove(Te);var Zt=O[this.layer].vy?O[this.layer].vy*s:0,xt=O[this.layer].vx?O[this.layer].vx*s:0;typeof f=="function"&&f.call(v.dragged.parentNode[K],xt,Zt,e,Te,O[this.layer].el)!=="continue"||ni(O[this.layer].el,xt,Zt)}).bind({layer:d}),24))),d++}while(t.bubbleScroll&&y!==l&&(y=At(y,!1)));mo=u}},30),fi=function(t){var o=t.originalEvent,i=t.putSortable,r=t.dragEl,n=t.activeSortable,a=t.dispatchSortableEvent,s=t.hideGhostForTarget,l=t.unhideGhostForTarget;if(o){var u=i||n;s();var f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:o,d=document.elementFromPoint(f.clientX,f.clientY);l(),u&&!u.el.contains(d)&&(a("spill"),this.onSpill({dragEl:r,putSortable:i}))}};function Co(){}Co.prototype={startIndex:null,dragStart:function(t){var o=t.oldDraggableIndex;this.startIndex=o},onSpill:function(t){var o=t.dragEl,i=t.putSortable;this.sortable.captureAnimationState(),i&&i.captureAnimationState();var r=Ut(this.sortable.el,this.startIndex,this.options);r?this.sortable.el.insertBefore(o,r):this.sortable.el.appendChild(o),this.sortable.animateAll(),i&&i.animateAll()},drop:fi};bt(Co,{pluginName:"revertOnSpill"});function Ao(){}Ao.prototype={onSpill:function(t){var o=t.dragEl,i=t.putSortable,r=i||this.sortable;r.captureAnimationState(),o.parentNode&&o.parentNode.removeChild(o),r.animateAll()},drop:fi};bt(Ao,{pluginName:"removeOnSpill"});v.mount(new Tn);v.mount(Ao,Co);const _n=e=>{const t=e.item;let o=Array.prototype.slice.call(t.parentNode.childNodes);return o=o.filter(i=>i.nodeType!=Node.ELEMENT_NODE||!i.classList.contains("sortable-fallback")),o},Dn=(e,t,o,i,r,n)=>{const s=e.item.parentNode;for(const w of o)s.appendChild(w);if(e.oldIndex==e.newIndex)return;const l=i.getArray(),u=e.item.querySelector("eox-layercontrol-layer").layer.get(r),f=l.find(w=>w.get(r)===u),d=n.dataset.layer,y=l.find(w=>w.get(r)==d);let b,g;for(b=0;b<l.length;b++)if(l[b]==f){i.removeAt(b);break}for(g=0;g<l.length;g++)if(l[g]===y){b>g?i.insertAt(g,f):i.insertAt(g+1,f);break}t.requestUpdate()};function Ln(e,t,o,i){let r=[],n=null;e._sortable=v.create(e,{handle:".drag-handle",filter:".drag-handle.disabled",swapThreshold:.5,animation:150,easing:"cubic-bezier(1, 0, 0, 1)",onStart:a=>{console.log(a),r=_n(a)},onMove:a=>{n=a.related},onEnd:a=>Dn(a,i,r,t,o,n)})}function Vn(e,t,o,i){const r=e.getArray();let n=!1;r.forEach(a=>{const s=a.ol_uid;a.get(t)||(a.set(t,s),n=!0),a.get(o)||(a.set(o,`layer ${s}`),n=!0),n&&i.requestUpdate()})}function To(e,t,o){let i=[];const r=(n,a,s)=>{i=[...i,...n.filter(u=>u.get(a)===s)];const l=n.filter(u=>u.getLayers);return l.length>0&&l.forEach(u=>r(u.getLayers().getArray(),a,s)),i};return r(e,t,o),i}function In(e,t,o){if(!e||!t)return!1;if(!pi(e,o))return!0;const i=e.get("minZoom"),r=e.get("maxZoom"),n=t.getView().getZoom();return n>i&&n<r}function pi(e,t){const o=e.get("minZoom"),i=e.get("maxZoom");return!!(t&&(o!==-1/0||i!==1/0))}function ko(e,t){var r,n,a;return!e||!t?void 0:e.getLayers?"group":((a=(r=t.getInteractions().getArray().filter(s=>s.freehand_!==void 0).map(s=>s.source_))==null?void 0:r.ol_uid)==null?void 0:a.includes(e.getSource?(n=e.getSource())==null?void 0:n.ol_uid:void 0))?"draw":e.declutter_!==void 0||e.get("type")==="Vector"?"vector":"raster"}const Rn=(e,t,o)=>{let i=t;return o.layer.getSource().getTileUrlFunction()&&(i||(i=o.layer.getSource().getTileUrlFunction()),o.layer.getSource().setTileUrlFunction((...r)=>Qr(i(...r),e)),o.layer.getSource().setKey(new Date)),i};function Pn(e,t,o){const i="updateStyleVariables"in t,r="setStyle"in t,n=i?t.style_:o.style;let a=n==null?void 0:n.variables;if(a){const s=_o(e);if(n.variables={...a,...s},i)t.updateStyleVariables(s);else if(r){const l=Hn(n);t.setStyle(l)}}}const _o=e=>{const t={};for(const o in e)if(typeof e[o]=="object"&&e[o]!==null){const i=_o(e[o]);for(const r in i)t[r]=i==null?void 0:i[r]}else t[o]=e==null?void 0:e[o];return t};function Hn(e){let t=e;if("variables"in e){let o=JSON.stringify(e);const{variables:i}=e;for(const r in i)typeof i[r]=="number"?o=o.replaceAll(`["var","${r}"]`,String(i[r])):o=o.replaceAll(`["var","${r}"]`,`"${i[r]}"`);t=JSON.parse(o)}return t}const On=(e,t)=>{if(!e)return;const o=_o(t);let i,r;return Array.isArray(e)?r=structuredClone(e):r=[structuredClone(e)],i=r.filter(n=>{if(!("boundTo"in n))return!0;const a=n.boundTo.key,s=n.boundTo.value;return a in o&&o[a]==s}),i.length||(i=null),i==null?void 0:i.map(n=>{var a;return delete n.boundTo,!("domainProperties"in n)||"domain"in n?n:(a=Object.keys(n))==null?void 0:a.reduce((s,l)=>(l==="domainProperties"?s.domain=n[l].map(u=>o[u]):s[l]=n[l],s),{})})};function gi(e,t){var i;let o={};for(const r in e){const n=e[r].type;if(n&&n!=="object"&&t[r]!==void 0)o[r]=n==="number"?Number(t[r]):t[r];else if(typeof e[r]=="object"&&((i=e[r])!=null&&i.properties)){const a=gi(e[r].properties,t);Object.keys(a).length>0&&(o[r]=a)}}return o}function Mn(e,t){var n,a,s,l,u,f,d;if(!t)return null;let o={},i="updateStyleVariables"in e?(n=e.style_)==null?void 0:n.variables:(a=t.style)==null?void 0:a.variables;if((t.type==="style"||t.style)&&i)o=i;else if((l=(s=e.getSource())==null?void 0:s.getTileUrlFunction)!=null&&l.call(s)){const y=new URL(e.getSource().getTileUrlFunction()([0,0,0]));(((f=(u=t.schema)==null?void 0:u.options)==null?void 0:f.removeProperties)??[]).forEach(g=>y.searchParams.delete(g)),o={};for(const[g,w]of y.searchParams.entries()){const V=y.searchParams.getAll(g);o[g]=V.length>1?V:w}}else return null;const r=gi(((d=t.schema)==null?void 0:d.properties)||t.schema,o);return Object.keys(r).length?r:null}const yi=(e,t)=>e==null?void 0:e.filter(o=>["remove","sort"].filter(i=>t!=null&&t.get("layerControlDisable")?i!=="sort":!0).includes(o)),mi=(e,t)=>e==null?void 0:e.filter(o=>{let i=!0;return["remove","sort"].includes(o)&&(i=!1),o==="info"&&(i=t.get("description")),o==="config"&&(i=t.get("layerConfig")),o==="datetime"&&(i=t.get("layerDatetime")),o==="legend"&&(i=t.get("layerLegend")),i}),Bn=(e,t,o)=>h`
  <button
    slot="${e}-icon"
    class="no-margin transparent square primary-text small"
  >
    ${o?e:h`<i class="small primary-text">${t}</i>`}
  </button>
`,vi=(e,t)=>h`
  <button
    class="remove-icon no-margin transparent square small action"
    @click=${()=>{const{layer:o}=e;o==null||o.set("layerControlOptional",!0),o==null||o.setVisible(!1),e.dispatchEvent(new CustomEvent("changed",{detail:o,bubbles:!0}))}}
  >
    ${e.unstyled?"x":h`<i class="small red-text">${t}</i>`}
  </button>
`,bi=(e,t,o)=>h`
  <button
    class="sort-icon no-margin transparent square primary-text drag-handle small action ${e.layer.get("layerControlDisable")?"disabled":""}"
    style="cursor: ns-resize;"
  >
    ${o?"═":h`<i class="small primary-text">${t}</i>`}
  </button>
`;function ee(){return{dots:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>menu-down</title>
      <path d="M7,10L12,15L17,10H7Z" />
    </svg>`,info:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>information-outline</title>
      <path
        d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
      />
    </svg>`,opacity:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>circle-opacity</title>
      <path
        d="M18 10V8H20V10H18M18 12V10H16V12H18M18 8V6H16V8H18M16 2.84V4H18C17.37 3.54 16.71 3.15 16 2.84M18 4V6H20C19.42 5.25 18.75 4.58 18 4M20 6V8H21.16C20.85 7.29 20.46 6.63 20 6M22 12C22 11.32 21.93 10.65 21.8 10H20V12H22M16 6V4H14V6H16M16 16H18V14H16V16M18 18H20L20 18V16H18V18M16 20H18L18 20V18H16V20M14 21.8C14.7 21.66 15.36 21.44 16 21.16V20H14V21.8M18 14H20V12H18V14M16 8H14V10H16V8M20 16H21.16C21.44 15.36 21.66 14.7 21.8 14H20V16M16 12H14V14H16V12M12 18V16H14V14H12V12H14V10H12V8H14V6H12V4H14V2.2C13.35 2.07 12.69 2 12 2C6.5 2 2 6.5 2 12S6.5 22 12 22V20H14V18H12M14 18H16V16H14V18Z"
      />
    </svg>`,config:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>tune</title>
      <path
        d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z"
      />
    </svg>`,datetime:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>calendar-clock-outline</title>
      <path
        d="M6 1V3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11.1C12.36 22.24 14.09 23 16 23C19.87 23 23 19.87 23 16C23 14.09 22.24 12.36 21 11.1V5C21 3.9 20.11 3 19 3H18V1H16V3H8V1M5 5H19V7H5M5 9H19V9.67C18.09 9.24 17.07 9 16 9C12.13 9 9 12.13 9 16C9 17.07 9.24 18.09 9.67 19H5M16 11.15C18.68 11.15 20.85 13.32 20.85 16C20.85 18.68 18.68 20.85 16 20.85C13.32 20.85 11.15 18.68 11.15 16C11.15 13.32 13.32 11.15 16 11.15M15 13V16.69L18.19 18.53L18.94 17.23L16.5 15.82V13Z"
      />
    </svg>`,legend:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>map-legend</title>
      <path
        d="M9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3L20.34,3.03L15,5.1L9,3M8,5.45V17.15L5,18.31V6.46L8,5.45M10,5.47L14,6.87V18.53L10,17.13V5.47M19,5.7V17.54L16,18.55V6.86L19,5.7M7.46,6.3L5.57,6.97V9.12L7.46,8.45V6.3M7.46,9.05L5.57,9.72V11.87L7.46,11.2V9.05M7.46,11.8L5.57,12.47V14.62L7.46,13.95V11.8M7.46,14.55L5.57,15.22V17.37L7.46,16.7V14.55Z"
      />
    </svg>`,remove:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>delete-outline</title>
      <path
        d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"
      />
    </svg>`,sort:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>drag-horizontal-variant</title>
      <path d="M21 11H3V9H21V11M21 13H3V15H21V13Z" />
    </svg>`}}const wi=e=>{var o;const t=["layerControlHide","layerControlOptional"];return(o=e==null?void 0:e.getArray())==null?void 0:o.filter(i=>t.every(r=>!i.get(r)))};function Si(e,t){t.dispatchEvent(new CustomEvent("datetime:updated",{detail:e.detail,bubbles:!0}))}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xi=Gi(class extends Ji{constructor(e){if(super(e),e.type!==It.PROPERTY&&e.type!==It.ATTRIBUTE&&e.type!==It.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ki(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===ue||t===yt)return t;const o=e.element,i=e.name;if(e.type===It.PROPERTY){if(t===o[i])return ue}else if(e.type===It.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(i))return ue}else if(e.type===It.ATTRIBUTE&&o.getAttribute(i)===t+"")return ue;return Qi(e),t}});var Ei="Expected a function",Uo=NaN,Nn="[object Symbol]",kn=/^\s+|\s+$/g,Un=/^[-+]0x[0-9a-f]+$/i,Fn=/^0b[01]+$/i,qn=/^0o[0-7]+$/i,jn=parseInt,Zn=typeof ce=="object"&&ce&&ce.Object===Object&&ce,Xn=typeof self=="object"&&self&&self.Object===Object&&self,Yn=Zn||Xn||Function("return this")(),zn=Object.prototype,Wn=zn.toString,Gn=Math.max,Jn=Math.min,co=function(){return Yn.Date.now()};function Kn(e,t,o){var i,r,n,a,s,l,u=0,f=!1,d=!1,y=!0;if(typeof e!="function")throw new TypeError(Ei);t=Fo(t)||0,_e(o)&&(f=!!o.leading,d="maxWait"in o,n=d?Gn(Fo(o.maxWait)||0,t):n,y="trailing"in o?!!o.trailing:y);function b(_){var j=i,nt=r;return i=r=void 0,u=_,a=e.apply(nt,j),a}function g(_){return u=_,s=setTimeout(W,t),f?b(_):a}function w(_){var j=_-l,nt=_-u,Z=t-j;return d?Jn(Z,n-nt):Z}function V(_){var j=_-l,nt=_-u;return l===void 0||j>=t||j<0||d&&nt>=n}function W(){var _=co();if(V(_))return B(_);s=setTimeout(W,w(_))}function B(_){return s=void 0,y&&i?b(_):(i=r=void 0,a)}function Q(){s!==void 0&&clearTimeout(s),u=0,i=l=r=s=void 0}function Y(){return s===void 0?a:B(co())}function rt(){var _=co(),j=V(_);if(i=arguments,r=this,l=_,j){if(s===void 0)return g(l);if(d)return s=setTimeout(W,t),b(l)}return s===void 0&&(s=setTimeout(W,t)),a}return rt.cancel=Q,rt.flush=Y,rt}function Qn(e,t,o){var i=!0,r=!0;if(typeof e!="function")throw new TypeError(Ei);return _e(o)&&(i="leading"in o?!!o.leading:i,r="trailing"in o?!!o.trailing:r),Kn(e,t,{leading:i,maxWait:t,trailing:r})}function _e(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function ta(e){return!!e&&typeof e=="object"}function ea(e){return typeof e=="symbol"||ta(e)&&Wn.call(e)==Nn}function Fo(e){if(typeof e=="number")return e;if(ea(e))return Uo;if(_e(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=_e(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(kn,"");var o=Fn.test(e);return o||qn.test(e)?jn(e.slice(2),o?2:8):Un.test(e)?Uo:+e}var oa=Qn;const qo=or(oa);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=e=>e??yt;var ot,De,Le;class $i extends lt{constructor(){super();A(this,ot,[]);A(this,De,ho`
    .separator {
      margin: 0 0 24px 0;
    }
    color-legend {
      --cle-background: transparent;
      --cle-font-family: inherit;
      --cle-font-size: 12px;
      --cle-font-size-title: 12px;
      --cle-font-weight: 400;
      --cle-font-weight-title: 400;
      --cle-letter-spacing: inherit;
      --cle-letter-spacing-title: inherit;
      --cle-padding: 0;
    }
  `);A(this,Le,"");this.unstyled=!1,this.noShadow=!1,this.layer=null}get layerLegend(){return x(this,ot)?x(this,ot).length>1?x(this,ot):x(this,ot)[0]:null}set layerLegend(o){var i;o?Array.isArray(o)?ut(this,ot,o.map((r,n)=>{var a;return{id:(((a=this.layer)==null?void 0:a.get("id"))??"")+n,...r}})):ut(this,ot,[{id:(((i=this.layer)==null?void 0:i.get("id"))??"")+0,...o}]):ut(this,ot,null)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){this.layerLegend&&new ResizeObserver(()=>{var o;ut(this,ot,(o=x(this,ot))==null?void 0:o.map(i=>(this.offsetWidth!==i.width&&(i.width=this.offsetWidth),{...i}))),this.requestUpdate()}).observe(this.renderRoot.querySelector(".legend-container"))}render(){return customElements.get("color-legend")||console.error("Please import `color-legend-element` in order to use layerLegend"),h`
      <style>
        ${x(this,De)}
        ${!this.unstyled&&x(this,Le)}
      </style>
      ${L(this.layerLegend,()=>h`
          <div class="legend-container">
            <!-- Render color-legend-->
            ${x(this,ot).map((o,i,r)=>h`
                <color-legend
                  id="${o.id}"
                  width=${o.width??325}
                  scaleType="${ge(o.scaleType)}"
                  markType="${ge(o.markType)}"
                  titleText="${ge(o.title)}"
                  .range=${o.range}
                  .domain=${o.domain}
                  tickFormat="${ge(o.tickFormat)}"
                  .ticks=${o.ticks??5}
                  .tickValues=${o.tickValues}
                  .marginLeft=${8}
                  .marginRight=${8}
                >
                </color-legend>
                ${i!==r.length-1?h`<div class="separator"></div>`:yt}
              `)}
          </div>
        `)}
    `}}ot=new WeakMap,De=new WeakMap,Le=new WeakMap,P($i,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerLegend:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-legend",$i);var pt,kt,ie,re,vo,Ve,Ie;class Ci extends lt{constructor(){super();A(this,re);A(this,pt,{});A(this,kt,null);A(this,ie);A(this,Ve,ho`
    color-legend {
      --cle-background: transparent;
      --cle-font-family: inherit;
      --cle-font-size: 12px;
      --cle-font-size-title: 12px;
      --cle-font-weight: 400;
      --cle-font-weight-title: 400;
      --cle-letter-spacing: inherit;
      --cle-letter-spacing-title: inherit;
      font-size: small;
    }
  `);A(this,Ie,ho`
    input[type="range"],
    eox-jsonform {
      --eox-slider-thumb-height: 10px !important;
      --eox-slider-thumb-width: 10px !important;
      --eox-slider-track-height: 4px !important;
      --eox-panel-spacing: 0 !important;
      --eox-slider-margin: 0 !important;
      font-size: small;
    }
    eox-layercontrol-layer-legend {
      display: block;
      margin-bottom: 1rem;
    }
  `);this.layer=null,this.unstyled=!1,this.noShadow=!1,this.layerConfig=null,this.throttleDataChange=qo(I(this,re,vo),1e3),this.customEditorInterfaces=[]}updated(o){if(o.has("layerConfig")){const i=this.layerConfig.type==="style"||this.layerConfig.style?100:1e3;this.throttleDataChange=qo(I(this,re,vo),i),this.requestUpdate()}}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){ut(this,kt,Mn(this.layer,this.layerConfig)),Object.keys(x(this,pt)).length!==0&&ut(this,kt,x(this,pt)),customElements.get("eox-jsonform")||console.error("Please import @eox/jsonform in order to use layerconfig");const o={disable_edit_json:!0,disable_collapse:!0,disable_properties:!0};return h`
      <style>
        ${x(this,Ve)}
        ${!this.unstyled&&x(this,Ie)}
      </style>
      ${L(this.layerConfig,()=>h`
          ${L(this.layerConfig.legend,()=>h`
              <eox-layercontrol-layer-legend
                .noShadow=${!0}
                .unstyled=${this.unstyled}
                .layer=${this.layer}
                .layerLegend=${On(this.layerConfig.legend,x(this,pt))}
              ></eox-layercontrol-layer-legend>
            `)}
          <!-- Render a JSON form for layer configuration -->
          <eox-jsonform
            .schema=${this.layerConfig.schema}
            .value=${x(this,kt)}
            .options=${o}
            .noShadow=${!0}
            .customEditorInterfaces=${this.customEditorInterfaces}
            @change=${this.throttleDataChange}
          ></eox-jsonform>
        `)}
    `}}pt=new WeakMap,kt=new WeakMap,ie=new WeakMap,re=new WeakSet,vo=function(o){ut(this,pt,o.detail),this.layerConfig.type==="style"||this.layerConfig.style?"setStyle"in this.layer||"updateStyleVariables"in this.layer?Pn(x(this,pt),this.layer,this.layerConfig):console.error(`Layer type ${this.layer.get("type")??""} does not support styles configuration`):ut(this,ie,Rn(x(this,pt),x(this,ie),this)),this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:o.detail,layer:this.layer}})),this.requestUpdate()},Ve=new WeakMap,Ie=new WeakMap,P(Ci,"properties",{layer:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},layerConfig:{attribute:!1},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layerconfig",Ci);var Re,Ti,Pe,He;class Ai extends lt{constructor(){super();A(this,Re);A(this,Pe,"");A(this,He,"");this.unstyled=!1,this.noShadow=!1,this.layerDatetime=null,this.layer=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return customElements.get("eox-timecontrol")||console.error("Please import @eox/timecontrol in order to use layerDatetime"),h`
      <style>
        ${x(this,Pe)}
        ${!this.unstyled&&x(this,He)}
      </style>
      ${L(this.layerDatetime,()=>h`
          <eox-timecontrol
            .initDate=${this.layerDatetime.currentStep?[this.layerDatetime.currentStep]:void 0}
            .controlValues=${[{id:this.layer.get("id"),name:this.layer.get("name")||this.layer.get("title"),timeControlValues:this.layerDatetime.controlValues.map(o=>({date:o}))}]}
            @select=${I(this,Re,Ti)}
          >
            <eox-timecontrol-date
              .navigation=${this.layerDatetime.navigation??!1}
              .format=${this.layerDatetime.displayFormat}
            ></eox-timecontrol-date>
            <eox-timecontrol-slider
              animate-onclick-interval="${this.layerDatetime.animateOnClickInterval??"0.3s"}"
            ></eox-timecontrol-slider>
          </eox-timecontrol>
        `)}
    `}}Re=new WeakSet,Ti=function(o){var a;const i=new Date(o.detail.date[0]),r=(a=this.layerDatetime.controlValues)==null?void 0:a.some(s=>typeof s=="string"&&s.includes("T"));let n;r?n=i.toISOString():n=(l=>`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}-${String(l.getDate()).padStart(2,"0")}`)(i),n!==this.layerDatetime.currentStep&&(this.dispatchEvent(new CustomEvent("datetime:updated",{bubbles:!0,detail:{datetime:n,layer:this.layer}})),this.layerDatetime.currentStep=n,this.requestUpdate())},Pe=new WeakMap,He=new WeakMap,P(Ai,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerDatetime:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-datetime",Ai);var ne,Oe,Me;class _i extends lt{constructor(){super();A(this,ne,o=>(this.selectedTab===o||this.toolsAsList)&&"highlighted");A(this,Oe,`
    .tabbed figure,
    .listed figure {
      margin: 0;
    }
    .tabbed nav,
    .listed nav {
      display: flex;
      justify-content: space-between;
    }
    .tabbed nav div,
    .listed nav div {
      display: flex;
    }
    .tabbed .tab,
    .listed .tab {
      display: none;
    }
    .tabbed .tab.highlighted,
    .listed .tab.highlighted {
      display: block;
    }
    .listed .tab {
      margin-bottom: .5rem;
    }
  `);A(this,Me,`
    ${wo}
    figure {
      padding: var(--padding-vertical) var(--padding);
      background-color: var(--surface); /* fallback */
      background-color: var(--item-hover-color);
    }
    .listed [name*=-icon] {
      display: none;
    }
    .listed [name*=-icon]+span {
      text-transform: capitalize;
      font-weight: bold;
    }
    .tabbed > nav > div > label,
    .tabbed > nav > div > span {
      border-bottom: 1px solid var(--surface);
    }
    .tabbed > nav > div > label.highlighted,
    .tabbed > nav > div > span.highlighted {
      border-bottom: 2px solid var(--outline-variant);
    }
    :host {
      --eox-slider-thumb-height: 10px !important;
      --eox-slider-thumb-width: 10px !important;
      --eox-slider-track-height: 4px !important;
      --eox-panel-spacing: 0 !important;
      --eox-slider-margin: 0 !important;
      font-size: small;
    }
  `);this.actions=[],this.selectedTab=0,this.tabs=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const o=this.tabs,i=this.actions,r=i.length+o.length>1;return h`
      <style>
        ${x(this,Oe)}
        ${!this.unstyled&&x(this,Me)}
      </style>
      <div class="${this.toolsAsList?"listed":"tabbed"}">
        <!-- Navigation for tabs and actions -->
        ${L(r,()=>h`
            <nav>
              ${L(!this.toolsAsList,()=>h`
                  <div>
                    <!-- Labels for tabs -->
                    ${ye(o,(n,a)=>h`
                        <label
                          class=${x(this,ne).call(this,a)}
                          @click=${()=>this.selectedTab=a}
                        >
                          <!-- Customizable icon for each tab -->
                          <slot name=${`${n}-icon`}>${n}</slot>
                        </label>
                      `)}
                  </div>
                  <div>
                    <!-- Icons for actions -->
                    ${ye(i,n=>h`
                        <span>
                          <!-- Customizable icon for each action -->
                          <slot name=${`${n}-icon`}>${n}</slot>
                        </span>
                      `)}
                  </div>
                `)}
            </nav>
          `)}
        <figure
          class="no-round small-padding vertical-padding"
          style="overflow: hidden; white-space: normal"
        >
          <!-- Content for each tab -->
          ${ye(o,(n,a)=>h`
              ${L(this.toolsAsList,()=>h`
                  <label>
                    <!-- Customizable icon for each tab -->
                    <slot name=${`${n}-icon`}>${n}</slot>
                    <span>${n}</span>
                  </label>
                `)}
              <div class="tab ${x(this,ne).call(this,a)}">
                <!-- Content slot for each tab -->
                <slot name=${`${n}-content`}>${n}</slot>
              </div>
              ${L(this.toolsAsList&&a<o.length-1,()=>h`<hr class="small" />`)}
            `)}
        </figure>
      </div>
    `}}ne=new WeakMap,Oe=new WeakMap,Me=new WeakMap,P(_i,"properties",{actions:{attribute:!1},selectedTab:{state:!0},tabs:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-tools-items",_i);var Be,Li,Ne,ke;class Di extends lt{constructor(){super();A(this,Be);P(this,"_removeButton",o=>vi(this,o));P(this,"_sortButton",o=>bi(this,o,this.unstyled));P(this,"_button",(o,i)=>Bn(o,i,this.unstyled));P(this,"_getDefaultTools",o=>{var i,r;return h`
      <div slot="info-content">
        ${tr(this.layer.get("description"))}
      </div>
      <div slot="opacity-content">
        <div class="row">
          <!-- Input for opacity -->
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value=${xi((i=this.layer)==null?void 0:i.getOpacity())}
            class="tiny max"
            @input=${n=>{this.layer.setOpacity(parseFloat(n.target.value)),this.requestUpdate()}}
          />
          <span class="small-text" style="width: 30px; text-align: right">${Math.round(((r=this.layer)==null?void 0:r.getOpacity())*100)}%</span>
        </div class="row">
      </div>
      <div slot="config-content">
        <!-- Layer configuration -->
        ${L(this.layer.get("layerConfig"),()=>h`
            <eox-layercontrol-layerconfig
              slot="config-content"
              .layer=${this.layer}
              .noShadow=${!0}
              .layerConfig=${this.layer.get("layerConfig")}
              .unstyled=${this.unstyled}
              .customEditorInterfaces=${this.customEditorInterfaces}
              @changed=${()=>this.requestUpdate()}
              @layerConfig:change=${I(this,Be,Li)}
            ></eox-layercontrol-layerconfig>
          `)}
      </div>
      <div slot="datetime-content">
        <!-- Layer datetime -->
        ${L(this.layer.get("layerDatetime"),()=>h`
            <eox-layercontrol-layer-datetime
              slot="datetime-content"
              .noShadow=${!0}
              .layerDatetime=${this.layer.get("layerDatetime")}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
              @datetime:updated=${n=>Si(n,this)}
            ></eox-layercontrol-layer-datetime>
          `)}
      </div>
      <div slot="legend-content">
        <!-- Layer legend -->
        ${L(this.layer.get("layerLegend"),()=>h`
            <eox-layercontrol-layer-legend
              slot="legend-content"
              .noShadow=${!0}
              .layerLegend=${this.layer.get("layerLegend")}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-legend>
          `)}
      </div>
      <div slot="remove-icon">${this._removeButton(o.remove)}</div>
      <div slot="sort-icon">${this._sortButton(o.sort)}</div>
    `});A(this,Ne,"");A(this,ke,`
    ${this.embedded?"":wo}
    .drag-handle {
      -webkit-user-drag: element;
      user-select: none;
    }
    .single-action-container,
    details.tools {
      position: relative;
    }
    .single-action {
      position: relative;
    }
    details.tools summary button {
      pointer-events: none;
    }
    .single-action,
    details.tools summary {
      position: absolute;
      right: 1.5rem;
      top: -32px;
      height: 24px;
      cursor: pointer;
      display: var(--layer-tools-button-visibility);
    }
    .single-action,
    details.tools summary {
      transition: opacity .2s;
    }
    .single-action,
    details.tools summary {
      opacity: .5;
    }
    .single-action:hover,
    details.tools summary:hover {
      opacity: 1;
    }
    [slot=info-content],
    [slot=opacity-content],
    [slot=config-content],
    [slot=datetime-content],
    [slot=legend-content] {
      padding: 6px 0;
    }
    [slot=info-content] * {
      max-width: 100%;
    }
    /*eox-layercontrol-layerconfig {
      border: 1px solid var(--outline-variant);
      padding: .5rem !important;
      display: block;
    }*/
  `);this.layer=null,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,setTimeout(()=>{var o;this.embedded=((o=this.parentElement)==null?void 0:o.tagName)==="EOX-LAYERCONTROL-LAYER"}),this.customEditorInterfaces=[]}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const o=yi(this.tools,this.layer),i=mi(this.tools,this.layer),r=o==null?void 0:o.length,n=i==null?void 0:i.length;return h`
      <style>
        ${x(this,Ne)}
        ${!this.unstyled&&x(this,ke)}
      </style>
      ${L(r+n>0,()=>h`
          ${L(!(r===1&&n===0),()=>h`
              <details
                class="tools"
                open=${this.embedded===!1?!0:this.layer.get("layerControlToolsExpand")||yt}
              >
                <summary></summary>
                <eox-layercontrol-tools-items
                  class="${this.toolsAsList?"tools-list":"tools-tab"}"
                  .noShadow=${!1}
                  .actions=${o}
                  .tabs=${i}
                  .unstyled=${this.unstyled}
                  .toolsAsList=${this.toolsAsList}
                >
                  <!-- Rendering tabs and content -->
                  ${ye(i,a=>this._button(a,ee()[a]))}
                  <!-- Including default tools -->
                  ${this._getDefaultTools(ee())}
                </eox-layercontrol-tools-items>
              </details>
            `)}
        `)}
    `}}Be=new WeakSet,Li=function(o){this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:o.detail.jsonformValue,layer:o.detail.layer}}))},Ne=new WeakMap,ke=new WeakMap,P(Di,"properties",{layer:{attribute:!1},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},embedded:{state:!0},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-tools",Di);const ia=e=>{const t=()=>{const o=In(e.layer,e.map,e.showLayerZoomState);let i=!1;!o&&e.currLayerVisibilityBasedOnZoom?(e.currLayerVisibilityBasedOnZoom=!1,i=!0):o&&!e.currLayerVisibilityBasedOnZoom&&(e.currLayerVisibilityBasedOnZoom=!0,i=!0),i&&(e.requestUpdate(),e.dispatchEvent(new CustomEvent("change:resolution",{bubbles:!0})))};pi(e.layer,e.showLayerZoomState)&&(t(),e.map.getView().on("change:resolution",()=>t()))},ra=(e,t)=>{const o=t.layer;o.setVisible(e.target.checked),e.target.checked&&o.get("layerControlExclusive")&&t.closest(`${t.globallyExclusiveLayers?".layers":"eox-layercontrol-layer-list"} > ul`).querySelectorAll("eox-layercontrol-layer").forEach(r=>{var n;r.layer!==o&&((n=r.layer)!=null&&n.get("layerControlExclusive"))&&(r.layer.setVisible(!1),r.requestUpdate())}),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0,detail:o})),t.requestUpdate()};var ct,Ot,Ii,Ue,Fe;class Vi extends lt{constructor(){super();A(this,ct);P(this,"currLayerVisibilityBasedOnZoom",!0);A(this,Ue,"");A(this,Fe,`
    eox-layercontrol-layer {
      width: 100%;
      position: relative;
    }
    eox-layercontrol-layer nav {
      height: 32px;
      margin-block-start: 0 !important;
    }
    eox-layercontrol-layer > nav > .action.tools {
      display: var(--layer-tools-button-visibility);
    }
    eox-layercontrol-layer .action.tools.dots {
      transition: rotate 0s;
    }
    eox-layercontrol-layer:has(eox-layercontrol-layer-tools > details[open]) .action.tools.dots {
      transform: rotate(180deg);
    }
    eox-layercontrol-layer > nav > .action.visibility {
      padding: .3rem;  
      transform: translateX(.3rem);
    }
    @media (pointer:fine) {
      eox-layercontrol-layer:not(:hover) > nav > .action {
        display: var(--layer-toggle-button-visibility);
      }
    }
    eox-layercontrol-layer nav:has(.action input[type=checkbox]:not(:checked)),
    eox-layercontrol-layer nav:has(.action input[type=radio]:not(:checked)),
    eox-layercontrol-layer:has(.action input[type=checkbox]:not(:checked)) eox-layercontrol-layer-tools,
    eox-layercontrol-layer:has(.action input[type=radio]:not(:checked)) eox-layercontrol-layer-tools,
    eox-layercontrol-layer-group:has(summary .action input[type=checkbox]:not(:checked)) eox-layercontrol-layer-list,
    eox-layercontrol-layer-group:has(summary .action input[type=radio]:not(:checked)) eox-layercontrol-layer-list,
    eox-layercontrol-layer-group:has(summary .action input[type=checkbox]:not(:checked)) .arrow-container,
    eox-layercontrol-layer-group:has(summary .action input[type=radio]:not(:checked)) .arrow-container,
    eox-layercontrol-layer-group:has(summary .action input[type=checkbox]:not(:checked)) eox-layercontrol-layer-tools,
    eox-layercontrol-layer-group:has(summary .action input[type=radio]:not(:checked)) eox-layercontrol-layer-tools {
      opacity: .5;
    }
    .tooltip {
      opacity: 1;
    }
    .layer input[type=checkbox],
    .layer input[type=radio] {
      display: var(--layer-input-visibility);
    }
    .layer.zoom-state-invisible {
      opacity: 0.5;
    }
    .layer {
      padding: var(--padding-vertical) 0;
      display: var(--layer-visibility);
      user-select: none;
    }
    .layertitle {
      display: var(--layer-title-visibility);
    }
    .drag-handle {
      -webkit-user-drag: element;
      user-select: none;
    }
    :is(.checkbox,.radio)>span:after {
      transition: none !important;
    }
  `);this.layer=null,this.layerType=void 0,this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[]}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){ia(this)}render(){var f,d;const o=this.layer.getVisible(),i=o?"visible":"",r=this.currLayerVisibilityBasedOnZoom?"":"zoom-state-invisible",n=I(this,ct,Ot).call(this,"layerControlDisable")?"disabled":"",a=I(this,ct,Ot).call(this,"layerControlExclusive")?"radio":"checkbox",s=((f=yi(this.tools,this.layer))==null?void 0:f.length)>0,l=((d=mi(this.tools,this.layer))==null?void 0:d.length)>0,u=document.querySelector("eox-layercontrol-layer-tools");return u&&Object.assign(u,{layer:this.layer,tools:this.tools,toolsAsList:this.toolsAsList}),h`
      <style>
        ${x(this,Ue)}
        ${!this.unstyled&&x(this,Fe)}
      </style>
      ${L(this.layer,()=>h`
          <!-- Render the layer -->
          <nav
            class="layer ${n} ${i} ${r} responsive tiny-space"
          >
            ${L(!this.unstyled,()=>{if(I(this,ct,Ot).call(this,"color"))return h`
                  <i class="small" style="color: ${I(this,ct,Ot).call(this,"color")}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>square-rounded</title>
                      <path
                        d="M8 3H16C18.76 3 21 5.24 21 8V16C21 18.76 18.76 21 16 21H8C5.24 21 3 18.76 3 16V8C3 5.24 5.24 3 8 3Z"
                      />
                    </svg>
                  </i>
                `;switch(this.layerType){case"group":return h` <i class="small"> </i> `;case"draw":return h`
                    <i class="small grey-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>vector-square-edit</title>
                        <path
                          d="M22.7 14.4L21.7 15.4L19.6 13.3L20.6 12.3C20.8 12.1 21.2 12.1 21.4 12.3L22.7 13.6C22.9 13.8 22.9 14.1 22.7 14.4M13 19.9L19.1 13.8L21.2 15.9L15.1 22H13V19.9M11 19.9V19.1L11.6 18.5L12.1 18H8V16H6V8H8V6H16V8H18V12.1L19.1 11L19.3 10.8C19.5 10.6 19.8 10.4 20.1 10.3V8H22.1V2H16.1V4H8V2H2V8H4V16H2V22H8V20L11 19.9M18 4H20V6H18V4M4 4H6V6H4V4M6 20H4V18H6V20Z"
                        />
                      </svg>
                    </i>
                  `;case"vector":return h`
                    <i class="small grey-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>vector-polygon</title>
                        <path
                          d="M2,2V8H4.28L5.57,16H4V22H10V20.06L15,20.05V22H21V16H19.17L20,9H22V3H16V6.53L14.8,8H9.59L8,5.82V2M4,4H6V6H4M18,5H20V7H18M6.31,8H7.11L9,10.59V14H15V10.91L16.57,9H18L17.16,16H15V18.06H10V16H7.6M11,10H13V12H11M6,18H8V20H6M17,18H19V20H17"
                        />
                      </svg>
                    </i>
                  `;case"raster":return h`
                    <i class="small grey-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>checkerboard</title>
                        <path
                          d="M2 2V22H22V2H2M20 12H16V16H20V20H16V16H12V20H8V16H4V12H8V8H4V4H8V8H12V4H16V8H20V12M16 8V12H12V8H16M12 12V16H8V12H12Z"
                        />
                      </svg>
                    </i>
                  `;default:return h` <i class="small grey-text"> </i> `}})}

            <!-- Layer title -->
            <div class="max truncate drag-handle ${n}">
              <span class="layertitle truncate"
                >${I(this,ct,Ot).call(this,this.titleProperty)}</span
              >
            </div>

            ${L(l,()=>h`
                <button
                  class="transparent square primary-text small action tools ${this.tools.length===1?this.tools[0]:"dots"}"
                  @click=${()=>{var b,g,w;const y=((g=(b=this.renderRoot.querySelector("eox-layercontrol-layer-tools"))==null?void 0:b.shadowRoot)==null?void 0:g.querySelector("details"))||((w=this.renderRoot.querySelector("eox-layercontrol-layer-tools"))==null?void 0:w.querySelector("details"));y.open=!y.open}}
                >
                  <i class="small">
                    ${ee()[this.tools.length>1?"dots":this.tools[0]]}
                  </i>
                  <!--<div class="tooltip top" style="pointer-events: none">Tools</div>-->
                </button>
              `)}
            ${L(!l&&s,()=>this.tools[0]==="remove"?vi(this,ee()[this.tools[0]]):bi(this,ee()[this.tools[0]],!1))}

            <!-- Input element for layer visibility -->
            <label
              class="${n} ${a} icon square primary-text action visibility small"
            >
              <input
                type=${a}
                .checked=${xi(o)}
                @click=${I(this,ct,Ii)}
                disabled=${n||yt}
              />
              <span>
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>eye-off-outline</title>
                    <path
                      d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z"
                    />
                  </svg>
                </i>
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>eye</title>
                    <path
                      d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                    />
                  </svg>
                </i>
              </span>
              <!--<div class="tooltip top" style="pointer-events: none">${o?"Hide":"Show"}</div>-->
            </label>
          </nav>
        `)}

      <!-- Render layer tools -->
      ${L(l&&!u,()=>h`
          <eox-layercontrol-layer-tools
            .noShadow=${!1}
            .layer=${this.layer}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
            .toolsAsList=${this.toolsAsList}
            .customEditorInterfaces=${this.customEditorInterfaces}
          ></eox-layercontrol-layer-tools>
        `)}
    `}}ct=new WeakSet,Ot=function(o){var i;return(i=this.layer)==null?void 0:i.get(o)},Ii=function(o){ra(o,this)},Ue=new WeakMap,Fe=new WeakMap,P(Vi,"properties",{layer:{attribute:!1},layerType:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer",Vi);var qe,je;class Ri extends lt{constructor(){super();A(this,qe,"");A(this,je,`
    details > summary {
      min-block-size: 0rem;
      display: var(--layer-summary-visibility);
      user-select: none;
    }
    details .arrow-container > i {
      transition: transform 0.1s ease-in-out;
    }
    details[open] > summary > .arrow-container > i {
      transform: rotate(90deg);
    }
    .arrow-container {
      position: absolute;
      height: 32px;
      display: flex;
      align-items: center;
      left: calc(var(--padding));
      z-index: 1;
    }
    .list li ul.list > li .arrow-container {
      left: calc(var(--padding) + var(--list-padding) - .5rem);
    }
  `);this.group=null,this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[]}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var r,n;const o=!!((r=this.group)!=null&&r.get("layerControlExpand")),i=(n=wi(this.group.getLayers()))==null?void 0:n.length;return h`
      <style>
        ${x(this,qe)}
        ${!this.unstyled&&x(this,je)}
      </style>
      ${L(this.group,()=>h`
          <!-- Render the details element with the layer control -->
          <details
            class="max-width"
            open=${o||yt}
            data-children-length=${i}
          >
            <summary class="square">
              ${L(i>0,()=>h`
                  <!-- Open/close arrow -->
                  <div class="arrow-container">
                    <i class="small">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>chevron-right</title>
                        <path
                          d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                        />
                      </svg>
                    </i>
                  </div>
                `)}

              <!-- Render the layer control within the summary -->
              <eox-layercontrol-layer
                .noShadow=${!0}
                .layer=${this.group}
                .map=${this.map}
                .titleProperty=${this.titleProperty}
                .showLayerZoomState=${this.showLayerZoomState}
                .layerType=${"group"}
                .tools=${this.tools}
                .unstyled=${this.unstyled}
                .toolsAsList=${this.toolsAsList}
                .globallyExclusiveLayers=${this.globallyExclusiveLayers}
                .customEditorInterfaces=${this.customEditorInterfaces}
                @changed=${()=>this.requestUpdate()}
              ></eox-layercontrol-layer>
            </summary>

            <!-- Render the list of layers within the details -->
            <eox-layercontrol-layer-list
              .noShadow=${!0}
              .idProperty=${this.idProperty}
              .layers=${this.group.getLayers()}
              .map=${this.map}
              .titleProperty=${this.titleProperty}
              .showLayerZoomState=${this.showLayerZoomState}
              .tools=${this.tools}
              .unstyled=${this.unstyled}
              .toolsAsList=${this.toolsAsList}
              .globallyExclusiveLayers=${this.globallyExclusiveLayers}
              .customEditorInterfaces=${this.customEditorInterfaces}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-list>
          </details>
        `)}
    `}}qe=new WeakMap,je=new WeakMap,P(Ri,"properties",{group:{attribute:!1},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-group",Ri);const na=e=>{const{layers:t,idProperty:o,titleProperty:i,renderRoot:r}=e,n=ir(()=>{e.requestUpdate(),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))},50),a=()=>n();if(t&&(t.hasListener("change:length")&&(t==null||t.un("change:length",a)),t.on("change:length",a),t)){const s=r.querySelector("ul");Vn(t,o,i,e),Ln(s,t,o,e)}};var Ze,Xe;class Pi extends lt{constructor(){super();A(this,Ze,"");A(this,Xe,`
    eox-layercontrol-layer-group {
      box-sizing: border-box;
      width: 100%;
    }
    eox-layercontrol-layer.sortable-chosen {
      background: #eeea !important;
    }
    eox-layercontrol-layer.sortable-drag {
      opacity: 0;
    }
    eox-layercontrol-layer.sortable-ghost {
    }
    eox-layercontrol-layer {
      padding: 0 var(--padding);
    }
    @media (pointer:fine) {
      eox-layercontrol-layer:not(:has(details[open])):hover {
        background-color: var(--item-hover-color);
      }
    }
    .list li ul.list > li eox-layercontrol-layer {
      padding-left: var(--list-padding);
    }
    .list li ul.list li ul.list > li eox-layercontrol-layer {
      padding-left: calc(var(--list-padding) * 2 - .5rem);
    }
    .list li ul.list > li:has(details[open]) eox-layercontrol-tools-items {
      display: block;
    }
    .list.no-space li.square {
      padding: 0;
    }
  `);this.idProperty="id",this.layers=null,this.map=null,this.tools=void 0,this.titleProperty="title",this.showLayerZoomState=!1,this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[]}firstUpdated(){na(this)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const o=this.layers?wi(this.layers).reverse():[];return h`
      <style>
        ${x(this,Ze)}
        ${!this.unstyled&&x(this,Xe)}
      </style>
      <ul class="list no-space">
        ${L(this.layers,()=>h`
            ${Wi(o,i=>i,i=>h`
                <li
                  data-layer="${i.get(this.idProperty)}"
                  data-type="${ko(i,this.map)}"
                  class="square"
                >
                  ${i.getLayers?h`
                          <eox-layercontrol-layer-group
                            .noShadow=${!0}
                            .group=${i}
                            .idProperty=${this.idProperty}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
                            .customEditorInterfaces=${this.customEditorInterfaces}
                            @changed=${()=>this.requestUpdate()}
                          >
                          </eox-layercontrol-layer-group>
                        `:h`
                          <eox-layercontrol-layer
                            .noShadow=${!0}
                            .layer=${i}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .layerType=${ko(i,this.map)}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
                            .customEditorInterfaces=${this.customEditorInterfaces}
                            @changed=${()=>this.requestUpdate()}
                          ></eox-layercontrol-layer>
                        `}
                </li>
              `)}
          `)}
      </ul>
    `}}Ze=new WeakMap,Xe=new WeakMap,P(Pi,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-list",Pi);const aa=e=>{const t=e.querySelector("select[name=optional]"),o=t?t.value:null,i=To(e.layers.getArray(),"layerControlOptional",!0).find(r=>(r.get(e.idProperty)||r.ol_uid)===o);i==null||i.set("layerControlOptional",!1),i==null||i.setVisible(!0),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0})),e.renderRoot.parentNode.querySelectorAll("eox-layercontrol-layer-list").forEach(r=>r.requestUpdate()),e.requestUpdate()};var Ye,Oi;class Hi extends lt{constructor(){super();A(this,Ye);this.idProperty="id",this.layers=null,this.titleProperty="title",this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const o=To(this.layers.getArray(),"layerControlOptional",!0);return h`
      <nav class="bottom-padding large-padding">
        <div class="field suffix border small max">
          <!-- Dropdown select element -->
          <select
            name="optional"
            data-cy="optionalLayers"
            class="small-padding"
            style="font-size: small"
          >
            <!-- Default placeholder option -->
            <option disabled selected value>-- select --</option>

            <!-- Mapping through filtered layers list to generate dropdown options -->
            ${o.map(i=>{const r=i.get(this.idProperty)||i.ol_uid,n=i.get(this.titleProperty),a=`layer ${i.get(this.idProperty)}`;return h` <option value="${r}">${n||a}</option> `})}
          </select>

          <!-- Label for the dropdown -->
          <label for="optional">Optional layers</label>
        </div>

        <!-- Button to handle adding layers -->
        <button class="small" @click="${I(this,Ye,Oi)}">Add</button>
      </nav>
    `}}Ye=new WeakSet,Oi=function(){aa(this)},P(Hi,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},titleProperty:{attribute:"title-property",type:String},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-optional-list",Hi);const sa=(e,t)=>{t.jsonInput=e.target.value,t.requestUpdate()},jo=e=>{const t=JSON.parse(`{"data":${Qo(e.jsonInput)}}`);Array.isArray(t.data)?t.data.forEach(o=>{e.eoxMap.addOrUpdateLayer(o)}):e.eoxMap.addOrUpdateLayer(t.data),e.jsonInput=null,e.requestUpdate()},la=(e,t)=>{t.urlInput=e.target.value,t.requestUpdate()};async function ua(e){const t=e.urlInput;if(e.wmsCapabilities=null,e.searchLoad=!0,e.requestUpdate(),!t)return!1;if(xo(t)==="XYZ")return{Name:t};try{const o=await Gr(t);e.wmsCapabilities=o}catch{}finally{e.searchLoad=!1,e.requestUpdate()}return!1}const ca=(e,t)=>{const{Name:o}=e,i=xo(t.urlInput)||"XYZ",r={type:"Tile",properties:{id:o,title:o},source:{type:i,url:t.urlInput,params:{LAYERS:o}}};t.jsonInput=JSON.stringify(r)},da=(e,t)=>{t.open=e||null,t.urlInput=null,t.jsonInput=null,t.wmsCapabilities=null,t.requestUpdate()};var U,Bi,Ni,bo,ki,Ui,Se,ze;class Mi extends lt{constructor(){super();A(this,U);P(this,"urlInput",null);P(this,"jsonInput",null);P(this,"open",null);P(this,"searchLoad",!1);P(this,"wmsCapabilities",null);A(this,ze,`
    .eox-add-layer-main .open {
      position: relative;
    }
    .eox-add-layer-main .close {
      display: none;
    }
    .field.small > :is(input, textarea, select) {
      font-size: 0.75rem;
    }
  `);this.eoxMap=null,this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const o={add:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>layers-plus</title>
        <path
          d="M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z"
        />
      </svg>`,plus:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>plus</title>
        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
      </svg>`,search:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>magnify</title>
        <path
          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
        />
      </svg>`},i=this.open?"open":"close",r=this.open==="url",n=this.open==="json",a=!Jr(this.urlInput)||this.searchLoad?!0:yt;return h`
      <style>
        ${x(this,ze)}
      </style>
      <div class="eox-add-layer-main">
        <nav class="eox-add-layer-col">
          <!-- Tabbed interface for URL and JSON -->
          <div
            class="eox-add-layer-tab tabs min left-align ${i}"
          >
            <a
              @click=${()=>I(this,U,Se).call(this,"url")}
              class="${r?"active":""}"
            >
              URL
            </a>
            <a
              @click=${()=>I(this,U,Se).call(this,"json")}
              class="${n?"active":""}"
            >
              JSON
            </a>
          </div>

          <div class="max"></div>

          <!-- Button to toggle tabs -->
          <button
            class="add-icon transparent square primary-text small"
            @click=${()=>I(this,U,Se).call(this,this.open?null:"url")}
          >
            ${this.unstyled?"Add Layer":h`<i class="small primary-text">${o.add}</i>`}
          </button>
        </nav>
        <div class="eox-add ${i}" style="padding: 15px 0">
          ${r?h`
                <nav>
                  <!-- Input field for URL -->
                  <div class="eox-add-layer-col field border small responsive">
                    <input
                      type="text"
                      class="add-url"
                      placeholder="Add URL (WMS/XYZ)"
                      .value="${this.urlInput}"
                      @input=${I(this,U,Bi)}
                    />
                  </div>
                  <!-- Search button for URL -->
                  <button
                    class="search-icon"
                    disabled=${a}
                    @click=${I(this,U,Ni)}
                  >
                    ${this.unstyled?"Search":h`<i class="small">${o.search}</i>`}
                  </button>
                </nav>

                <!-- Display layers for WMS capabilities -->
                ${this.wmsCapabilities?h`<ul class="search-lists">
                      ${this.wmsCapabilities.Capability.Layer.Layer.map(s=>{const l=s.Name;return h`
                            <li class="search-list">
                              ${l}
                              <!-- Button to add layer -->
                              <button
                                class="add-layer-icon icon"
                                @click=${()=>I(this,U,bo).call(this,s)}
                              >
                                ${this.unstyled?"+":""}
                              </button>
                            </li>
                          `})}
                    </ul>`:yt}
              `:h`
                <!-- Textarea for JSON input -->
                <div class="field textarea small border no-margin">
                  <textarea
                    class="add-layer-input small"
                    style="overflow-wrap: break-word; font-family: monospace;"
                    placeholder="Please input a valid eox-map layer JSON."
                    @input=${I(this,U,Ui)}
                    .value=${this.jsonInput}
                  ></textarea>
                </div>

                <!-- Button to add JSON layer -->
                <button
                  class="add-layer-icon json-add-layer small square small-margin"
                  style="position: absolute; bottom: 15px; right: 0; z-index: 1;"
                  disabled=${Kr(this.jsonInput)?yt:!0}
                  @click=${I(this,U,ki)}
                >
                  ${this.unstyled?"Add JSON":h`<i class="small">${o.plus}</i>`}
                </button>
              `}
        </div>
      </div>
    `}}U=new WeakSet,Bi=function(o){la(o,this)},Ni=async function(){const o=await ua(this);o&&I(this,U,bo).call(this,o)},bo=function(o){ca(o,this),jo(this)},ki=function(){jo(this)},Ui=function(o){sa(o,this)},Se=function(o){da(o,this)},ze=new WeakMap,P(Mi,"properties",{eoxMap:{attribute:!1,state:!0},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-add-layers",Mi);const ha=(e,t)=>{if(t.requestUpdate(),e.target.tagName==="EOX-LAYERCONTROL-LAYER-TOOLS"){const o=t.renderRoot.querySelector("eox-layercontrol-optional-list");o==null||o.requestUpdate()}},Zo=e=>{const t=rr(e.for);return t&&t.map!==e.map&&(e.map=t.map),t};er();var Ct,Ft,qi,ji,We;class Fi extends lt{constructor(){super();A(this,Ft);A(this,Ct);A(this,We,`
    ${wo}
    :host, :root {
      --padding: 0.5rem;
      --padding-vertical: .2rem;
      --list-padding: 2rem;
      --layer-input-visibility: flex;
      --layer-summary-visibility: flex;
      --layer-type-visibility: block;
      --layer-title-visibility: inline;
      --layer-visibility: flex;
      --layer-tools-button-visibility: flex;
      --layer-toggle-button-visibility: none;

      --primary-color: var(--primary);
      --secondary-color: var(--secondary);
      --item-color: color-mix(
        in srgb,
        var(--primary-color) 10%,
        transparent
      );
      --item-hover-color: color-mix(
        in srgb,
        var(--surface) 80%,
        transparent
      );

      display: flex;
      flex-direction: column;
      --background-color: var(--eox-background-color, transparent);
      background-color: var(--background-color, transparent);
    }
    
    .layerstitle {
      display: block;
      padding-left: var(--padding);
      padding-right: var(--padding);
    }
    select {
      background-color: var(--background-color);
    }
  `);this.for="eox-map",this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=["info","opacity","datetime","config","remove","sort"],this.addExternalLayers=!1,this.unstyled=!1,this.styleOverride="",this.toolsAsList=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[]}firstUpdated(){this.eoxMap=Zo(this)}updated(o){o.has("for")&&(this.eoxMap=Zo(this))}get eoxMap(){return x(this,Ct)}set eoxMap(o){const i=x(this,Ct);ut(this,Ct,o),this.requestUpdate("eoxMap",i)}render(){var r,n,a;const o=(r=this.map)==null?void 0:r.getLayers().getArray(),i=o&&((n=To(o,"layerControlOptional",!0))==null?void 0:n.length)>0;return h`
      <style>
        ${!this.unstyled&&x(this,We)}
        ${this.styleOverride}
      </style>

      <span class="layerstitle">
        <slot name="layerstitle"
          ><p><strong>Layers</strong></p></slot
        >
      </span>

      <!-- Conditional rendering of add layers component -->
      ${L(this.addExternalLayers&&((a=x(this,Ct))==null?void 0:a.addOrUpdateLayer),()=>h`
          <eox-layercontrol-add-layers
            .noShadow=${!0}
            .eoxMap=${x(this,Ct)}
            .unstyled=${this.unstyled}
          ></eox-layercontrol-add-layers>
        `)}

      <!-- Conditional rendering of layer list component -->
      ${L(this.map,()=>h`
          <eox-layercontrol-layer-list
            .noShadow=${!0}
            class="layers"
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .map=${this.map}
            .titleProperty=${this.titleProperty}
            .showLayerZoomState=${this.showLayerZoomState}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
            .toolsAsList=${this.toolsAsList}
            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
            .customEditorInterfaces=${this.customEditorInterfaces}
            @changed=${I(this,Ft,qi)}
            @datetime:updated=${s=>Si(s,this)}
            @layerConfig:change=${I(this,Ft,ji)}
          ></eox-layercontrol-layer-list>
        `)}

      <!-- Conditional rendering of optional list component -->
      ${L(i,()=>h`
          <eox-layercontrol-optional-list
            .noShadow=${!0}
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .titleProperty=${this.titleProperty}
            @changed=${()=>this.requestUpdate()}
          ></eox-layercontrol-optional-list>
        `)}
    `}}Ct=new WeakMap,Ft=new WeakSet,qi=function(o){ha(o,this),this.dispatchEvent(new CustomEvent("layerchange",{detail:o.detail}))},ji=function(o){this.dispatchEvent(new CustomEvent("layerConfig:change",{detail:o.detail}))},We=new WeakMap,P(Fi,"properties",{for:{type:String},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},addExternalLayers:{attribute:!1},unstyled:{type:Boolean},styleOverride:{type:String},toolsAsList:{type:Boolean},globallyExclusiveLayers:{attribute:"globally-exclusive-layers",type:Boolean},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol",Fi);export{Fi as EOxLayerControl};
