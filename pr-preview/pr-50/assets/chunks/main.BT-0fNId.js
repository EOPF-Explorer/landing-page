var Yn=Object.defineProperty;var Di=e=>{throw TypeError(e)};var zn=(e,t,i)=>t in e?Yn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var H=(e,t,i)=>zn(e,typeof t!="symbol"?t+"":t,i),Qe=(e,t,i)=>t.has(e)||Di("Cannot "+i);var x=(e,t,i)=>(Qe(e,t,"read from private field"),i?i.call(e):t.get(e)),A=(e,t,i)=>t.has(e)?Di("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),ut=(e,t,i,n)=>(Qe(e,t,"write to private field"),n?n.call(e,i):t.set(e,i),i),I=(e,t,i)=>(Qe(e,t,"access private method"),i);import{b as h,E as ue,A as yt,i as lt,c as hi,e as bi,a as Wn}from"./addCommonStyleSheet.CwyJxROK.js";import{n as L}from"./when.BR7zwNJC.js";import{c as Gn}from"./repeat.DhuuQ_3F.js";import{e as Jn,i as Kn,t as It}from"./directive.CvdRHFdJ.js";import{r as Qn,p as to}from"./directive-helpers.CkiyOaWT.js";import{o as eo}from"./unsafe-html.ZJKU0XOR.js";import{o as ye}from"./map.DiiNQ3pp.js";import{c as ce,g as io}from"./commonjsHelpers.BosuxZz1.js";import{_ as no}from"./index.BUIxO2d3.js";import{g as oo}from"./getElement.CdRlZPdn.js";/**
 * wms-capabilities @0.6.0
 * @description WMS service Capabilities > JSON, based on openlayers 
 * @license BSD-2-Clause
 * @preserve
 */var E=e=>e!==void 0,Xi=(e,t,i)=>t in e?e[t]:e[t]=i;const ie={ELEMENT:1,TEXT:3,CDATA_SECTION:4};class ro{constructor(t){this._parser=new t}toDocument(t){return this._parser.parseFromString(t,"application/xml")}getAllTextContent(t,i){return Je(t,i).join("")}}function Je(e,t){return ji(e,t,[]).join("")}function ji(e,t,i){if(e.nodeType===ie.CDATA_SECTION||e.nodeType===ie.TEXT)t?i.push(String(e.nodeValue).replace(/(\r\n|\r|\n)/g,"")):i.push(e.nodeValue);else{var n;for(n=e.firstChild;n;n=n.nextSibling)ji(n,t,i)}return i}function ao(e,t,i,n){for(var o=so(t);o;o=lo(o)){var r=o.namespaceURI||null,a=e[r];if(E(a)){var s=a[o.localName];E(s)&&s.call(n,o,i)}}}function so(e){let t=e.firstElementChild||e.firstChild;for(;t&&t.nodeType!==ie.ELEMENT;)t=t.nextSibling;return t}function lo(e){let t=e.nextElementSibling||e.nextSibling;for(;t&&t.nodeType!==ie.ELEMENT;)t=t.nextSibling;return t}function F(e,t,i){return uo(e,t,i)}function uo(e,t,i){var n=E(i)?i:{},o,r;for(o=0,r=e.length;o<r;++o)n[e[o]]=t;return n}function Yi(e,t){return function(i,n){var o=e.call(E(t)?t:this,i,n);if(E(o)){var r=n[n.length-1];r.push(o)}}}function N(e,t,i,n,o){return n.push(e),ao(t,i,n,o),n.pop()}function p(e,t,i){return function(n,o){let r=e.call(E(i)?i:this,n,o);if(E(r)){var a=o[o.length-1],s=E(t)?t:n.localName;a[s]=r}}}function J(e,t,i){return function(n,o){var r=e.call(E(i)?i:this,n,o);if(E(r)){var a=o[o.length-1],s=E(t)?t:n.localName,l=Xi(a,s,[]);l.push(r)}}}const co=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function ho(e){return e.replace(co,"")}function Vt(e){const t=/^\s*(true|1)|(false|0)\s*$/.exec(e);if(t)return E(t[1])||!1}function Mt(e){return gt(Je(e,!1))}function gt(e){const t=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(e);if(t)return parseFloat(t[1])}function ti(e){return Ee(Je(e,!1))}function Ee(e){const t=/^\s*(\d+)\s*$/.exec(e);if(t)return parseInt(t[1],10)}function T(e){return ho(Je(e,!1))}const fo="http://www.w3.org/1999/xlink";function wi(e){return e.getAttributeNS(fo,"href")}function po(e,t){return N({},Uo,e,t)}function zi(e){return[gt(e.getAttribute("minx")),gt(e.getAttribute("miny")),gt(e.getAttribute("maxx")),gt(e.getAttribute("maxy"))]}function go(e,t){const i=zi(e),n=[gt(e.getAttribute("resx")),gt(e.getAttribute("resy"))];return{crs:e.getAttribute("CRS")||e.getAttribute("SRS"),extent:i,res:n}}function yo(e,t){const i=zi(e);if(!(!E(i[0])||!E(i[1])||!E(i[2])||!E(i[3])))return i}function mo(e,t){const i=parseFloat(e.getAttribute("min")),n=parseFloat(e.getAttribute("max"));return{min:i,max:n}}function vo(e,t){const i=N({},Fo,e,t);if(!E(i))return;const n=i.westBoundLongitude,o=i.southBoundLatitude,r=i.eastBoundLongitude,a=i.northBoundLatitude;if(!(!E(n)||!E(o)||!E(r)||!E(a)))return[n,o,r,a]}function bo(e,t){return N({},Po,e,t)}function wo(e,t){return N({},Oo,e,t)}function So(e,t){return N({},Mo,e,t)}function xo(e,t){return N({},Bo,e,t)}function Eo(e,t){return N({},No,e,t)}function $o(e,t){return N([],ko,e,t)}function Co(e,t){const i=Vt(e.getAttribute("queryable"));return N({queryable:E(i)?i:!1},Ji,e,t)}function Ao(e,t){var i=t[t.length-1];const n=N({},Ji,e,t);if(!E(n))return;let o=Vt(e.getAttribute("queryable"));E(o)||(o=i.queryable),n.queryable=E(o)?o:!1;let r=Ee(e.getAttribute("cascaded"));E(r)||(r=i.cascaded),n.cascaded=r;let a=Vt(e.getAttribute("opaque"));E(a)||(a=i.opaque),n.opaque=E(a)?a:!1;let s=Vt(e.getAttribute("noSubsets"));E(s)||(s=i.noSubsets),n.noSubsets=E(s)?s:!1;let l=gt(e.getAttribute("fixedWidth"));E(l)||(l=i.fixedWidth),n.fixedWidth=l;let u=gt(e.getAttribute("fixedHeight"));E(u)||(u=i.fixedHeight),n.fixedHeight=u;const f=["Style","CRS","AuthorityURL"];for(let y=0,b=f.length;y<b;y++){const g=f[y],w=i[g];if(E(w)){let V=Xi(n,g,[]);V=V.concat(w),n[g]=V}}const d=["EX_GeographicBoundingBox","BoundingBox","Dimension","Attribution","MinScaleDenominator","MaxScaleDenominator"];for(let y=0,b=d.length;y<b;y++){const g=d[y],w=n[g];if(!E(w)){const V=i[g];n[g]=V}}return n}function To(e,t){return{name:e.getAttribute("name"),units:e.getAttribute("units"),unitSymbol:e.getAttribute("unitSymbol"),default:e.getAttribute("default"),multipleValues:Vt(e.getAttribute("multipleValues")),nearestValue:Vt(e.getAttribute("nearestValue")),current:Vt(e.getAttribute("current")),values:T(e)}}function vt(e,t){return N({},zo,e,t)}function _o(e,t){return N({},qo,e,t)}function Do(e,t){return N({},Xo,e,t)}function Lo(e,t){return N({},jo,e,t)}function ei(e,t){return N({},Zo,e,t)}function Wi(e,t){var i=vt(e,t);if(E(i)){const n=[Ee(e.getAttribute("width")),Ee(e.getAttribute("height"))];return i.size=n,i}}function Vo(e,t){var i=vt(e,t);if(E(i))return i.name=e.getAttribute("name"),i}function Io(e,t){var i=vt(e,t);if(E(i))return i.type=e.getAttribute("type"),i}function Ro(e,t){return N({},Yo,e,t)}function Gi(e,t){return N([],Wo,e,t)}const q=[null,"http://www.opengis.net/wms"],Ho=F(q,{Service:p(wo),Capability:p(bo)}),Po=F(q,{Request:p(_o),Exception:p($o),Layer:p(Co)}),Oo=F(q,{Name:p(T),Title:p(T),Abstract:p(T),KeywordList:p(Gi),OnlineResource:p(wi),ContactInformation:p(So),Fees:p(T),AccessConstraints:p(T),LayerLimit:p(ti),MaxWidth:p(ti),MaxHeight:p(ti)}),Mo=F(q,{ContactPersonPrimary:p(xo),ContactPosition:p(T),ContactAddress:p(Eo),ContactVoiceTelephone:p(T),ContactFacsimileTelephone:p(T),ContactElectronicMailAddress:p(T)}),Bo=F(q,{ContactPerson:p(T),ContactOrganization:p(T)}),No=F(q,{AddressType:p(T),Address:p(T),City:p(T),StateOrProvince:p(T),PostCode:p(T),Country:p(T)}),ko=F(q,{Format:Yi(T)}),Ji=F(q,{Name:p(T),Title:p(T),Abstract:p(T),KeywordList:p(Gi),CRS:J(T),SRS:J(T),EX_GeographicBoundingBox:p(vo),LatLonBoundingBox:p(yo),BoundingBox:J(go),Dimension:J(To),Attribution:p(po),AuthorityURL:J(Vo),Identifier:J(T),MetadataURL:J(Io),DataURL:J(vt),FeatureListURL:J(vt),Style:J(Ro),MinScaleDenominator:p(Mt),MaxScaleDenominator:p(Mt),ScaleHint:p(mo),Layer:J(Ao)}),Uo=F(q,{Title:p(T),OnlineResource:p(wi),LogoURL:p(Wi)}),Fo=F(q,{westBoundLongitude:p(Mt),eastBoundLongitude:p(Mt),southBoundLatitude:p(Mt),northBoundLatitude:p(Mt)}),qo=F(q,{GetCapabilities:p(ei),GetMap:p(ei),GetFeatureInfo:p(ei)}),Zo=F(q,{Format:J(T),DCPType:J(Do)}),Xo=F(q,{HTTP:p(Lo)}),jo=F(q,{Get:p(vt),Post:p(vt)}),Yo=F(q,{Name:p(T),Title:p(T),Abstract:p(T),LegendURL:J(Wi),StyleSheetURL:p(vt),StyleURL:p(vt)}),zo=F(q,{Format:p(T),OnlineResource:p(wi)}),Wo=F(q,{Keyword:Yi(T)});class Go{constructor(t,i){!i&&typeof window<"u"&&(i=window.DOMParser),this.version=void 0,this._parser=new ro(i),this._data=t}data(t){return this._data=t,this}toJSON(t){return t=t||this._data,this.parse(t)}parse(t){return this.readFromDocument(this._parser.toDocument(t))}readFromDocument(t){for(let i=t.firstChild;i;i=i.nextSibling)if(i.nodeType==ie.ELEMENT)return this.readFromNode(i);return null}readFromNode(t){return this.version=t.getAttribute("version"),N({version:this.version},Ho,t,[])||null}}async function Jo(e){let t=new URL(e),i=t.searchParams;i.set("SERVICE","WMS"),i.set("REQUEST","GetCapabilities");let n=t.toString();const o=await fetch(n);if(o.ok){const r=await o.text();return new Go(r).toJSON()}else throw new Error(`Error: ${o.status}`)}function Si(e){const t=/\b(?:wms|ows)\b/i,i=/{(?:z|x|y-?)}\/{(?:z|x|y-?)}\/{(?:z|x|y-?)}/i;return t.test(e)?"TileWMS":i.test(e)?"XYZ":!1}function Ko(e){const i=/^(?:(?:https?|ftp):\/\/|\/\/)?(?:localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:\w+[\w-]*\.)+\w+)(?::\d+)?(?:\/\S*)?$/.test(e),n=Si(e);return!!(e&&i&&n)}function Ki(e){return e.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,'"$2": ').replace(/,\s*}/g,"}").replace(/,\s*]/g,"]").replace(/\s*(\{|}|\[|\]|,)\s*/g,"$1").replaceAll('": //',"://")}function Qo(e){try{return JSON.parse(Ki(e)),!!e}catch{return!1}}function tr(e,t){const i=new URL(e).searchParams;Object.entries(t).forEach(([a,s])=>{typeof s=="object"&&!Array.isArray(s)&&s!==null?Object.keys(s).forEach(l=>{i.set(l,s[l])}):Array.isArray(s)?(i.delete(a),s.forEach(l=>{i.append(a,l)})):i.set(a,s)});const n=e.split("?")[0],o=i.toString();return`${n}?${o}`}/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function Li(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),i.push.apply(i,n)}return i}function ht(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?Li(Object(i),!0).forEach(function(n){er(e,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Li(Object(i)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))})}return e}function me(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?me=function(t){return typeof t}:me=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},me(e)}function er(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function bt(){return bt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},bt.apply(this,arguments)}function ir(e,t){if(e==null)return{};var i={},n=Object.keys(e),o,r;for(r=0;r<n.length;r++)o=n[r],!(t.indexOf(o)>=0)&&(i[o]=e[o]);return i}function nr(e,t){if(e==null)return{};var i=ir(e,t),n,o;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var or="1.15.6";function mt(e){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(e)}var wt=mt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),ae=mt(/Edge/i),Vi=mt(/firefox/i),Gt=mt(/safari/i)&&!mt(/chrome/i)&&!mt(/android/i),xi=mt(/iP(ad|od|hone)/i),Qi=mt(/chrome/i)&&mt(/android/i),tn={capture:!1,passive:!1};function C(e,t,i){e.addEventListener(t,i,!wt&&tn)}function $(e,t,i){e.removeEventListener(t,i,!wt&&tn)}function $e(e,t){if(t){if(t[0]===">"&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch{return!1}return!1}}function en(e){return e.host&&e!==document&&e.host.nodeType?e.host:e.parentNode}function st(e,t,i,n){if(e){i=i||document;do{if(t!=null&&(t[0]===">"?e.parentNode===i&&$e(e,t):$e(e,t))||n&&e===i)return e;if(e===i)break}while(e=en(e))}return null}var Ii=/\s+/g;function tt(e,t,i){if(e&&t)if(e.classList)e.classList[i?"add":"remove"](t);else{var n=(" "+e.className+" ").replace(Ii," ").replace(" "+t+" "," ");e.className=(n+(i?" "+t:"")).replace(Ii," ")}}function m(e,t,i){var n=e&&e.style;if(n){if(i===void 0)return document.defaultView&&document.defaultView.getComputedStyle?i=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(i=e.currentStyle),t===void 0?i:i[t];!(t in n)&&t.indexOf("webkit")===-1&&(t="-webkit-"+t),n[t]=i+(typeof i=="string"?"":"px")}}function Nt(e,t){var i="";if(typeof e=="string")i=e;else do{var n=m(e,"transform");n&&n!=="none"&&(i=n+" "+i)}while(!t&&(e=e.parentNode));var o=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return o&&new o(i)}function nn(e,t,i){if(e){var n=e.getElementsByTagName(t),o=0,r=n.length;if(i)for(;o<r;o++)i(n[o],o);return n}return[]}function dt(){var e=document.scrollingElement;return e||document.documentElement}function M(e,t,i,n,o){if(!(!e.getBoundingClientRect&&e!==window)){var r,a,s,l,u,f,d;if(e!==window&&e.parentNode&&e!==dt()?(r=e.getBoundingClientRect(),a=r.top,s=r.left,l=r.bottom,u=r.right,f=r.height,d=r.width):(a=0,s=0,l=window.innerHeight,u=window.innerWidth,f=window.innerHeight,d=window.innerWidth),(t||i)&&e!==window&&(o=o||e.parentNode,!wt))do if(o&&o.getBoundingClientRect&&(m(o,"transform")!=="none"||i&&m(o,"position")!=="static")){var y=o.getBoundingClientRect();a-=y.top+parseInt(m(o,"border-top-width")),s-=y.left+parseInt(m(o,"border-left-width")),l=a+r.height,u=s+r.width;break}while(o=o.parentNode);if(n&&e!==window){var b=Nt(o||e),g=b&&b.a,w=b&&b.d;b&&(a/=w,s/=g,d/=g,f/=w,l=a+f,u=s+d)}return{top:a,left:s,bottom:l,right:u,width:d,height:f}}}function Ri(e,t,i){for(var n=At(e,!0),o=M(e)[t];n;){var r=M(n)[i],a=void 0;if(a=o>=r,!a)return n;if(n===dt())break;n=At(n,!1)}return!1}function Ut(e,t,i,n){for(var o=0,r=0,a=e.children;r<a.length;){if(a[r].style.display!=="none"&&a[r]!==v.ghost&&(n||a[r]!==v.dragged)&&st(a[r],i.draggable,e,!1)){if(o===t)return a[r];o++}r++}return null}function Ei(e,t){for(var i=e.lastElementChild;i&&(i===v.ghost||m(i,"display")==="none"||t&&!$e(i,t));)i=i.previousElementSibling;return i||null}function nt(e,t){var i=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)e.nodeName.toUpperCase()!=="TEMPLATE"&&e!==v.clone&&(!t||$e(e,t))&&i++;return i}function Hi(e){var t=0,i=0,n=dt();if(e)do{var o=Nt(e),r=o.a,a=o.d;t+=e.scrollLeft*r,i+=e.scrollTop*a}while(e!==n&&(e=e.parentNode));return[t,i]}function rr(e,t){for(var i in e)if(e.hasOwnProperty(i)){for(var n in t)if(t.hasOwnProperty(n)&&t[n]===e[i][n])return Number(i)}return-1}function At(e,t){if(!e||!e.getBoundingClientRect)return dt();var i=e,n=!1;do if(i.clientWidth<i.scrollWidth||i.clientHeight<i.scrollHeight){var o=m(i);if(i.clientWidth<i.scrollWidth&&(o.overflowX=="auto"||o.overflowX=="scroll")||i.clientHeight<i.scrollHeight&&(o.overflowY=="auto"||o.overflowY=="scroll")){if(!i.getBoundingClientRect||i===document.body)return dt();if(n||t)return i;n=!0}}while(i=i.parentNode);return dt()}function ar(e,t){if(e&&t)for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return e}function ii(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}var Jt;function on(e,t){return function(){if(!Jt){var i=arguments,n=this;i.length===1?e.call(n,i[0]):e.apply(n,i),Jt=setTimeout(function(){Jt=void 0},t)}}}function sr(){clearTimeout(Jt),Jt=void 0}function rn(e,t,i){e.scrollLeft+=t,e.scrollTop+=i}function an(e){var t=window.Polymer,i=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):i?i(e).clone(!0)[0]:e.cloneNode(!0)}function sn(e,t,i){var n={};return Array.from(e.children).forEach(function(o){var r,a,s,l;if(!(!st(o,t.draggable,e,!1)||o.animated||o===i)){var u=M(o);n.left=Math.min((r=n.left)!==null&&r!==void 0?r:1/0,u.left),n.top=Math.min((a=n.top)!==null&&a!==void 0?a:1/0,u.top),n.right=Math.max((s=n.right)!==null&&s!==void 0?s:-1/0,u.right),n.bottom=Math.max((l=n.bottom)!==null&&l!==void 0?l:-1/0,u.bottom)}}),n.width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n}var K="Sortable"+new Date().getTime();function lr(){var e=[],t;return{captureAnimationState:function(){if(e=[],!!this.options.animation){var n=[].slice.call(this.el.children);n.forEach(function(o){if(!(m(o,"display")==="none"||o===v.ghost)){e.push({target:o,rect:M(o)});var r=ht({},e[e.length-1].rect);if(o.thisAnimationDuration){var a=Nt(o,!0);a&&(r.top-=a.f,r.left-=a.e)}o.fromRect=r}})}},addAnimationState:function(n){e.push(n)},removeAnimationState:function(n){e.splice(rr(e,{target:n}),1)},animateAll:function(n){var o=this;if(!this.options.animation){clearTimeout(t),typeof n=="function"&&n();return}var r=!1,a=0;e.forEach(function(s){var l=0,u=s.target,f=u.fromRect,d=M(u),y=u.prevFromRect,b=u.prevToRect,g=s.rect,w=Nt(u,!0);w&&(d.top-=w.f,d.left-=w.e),u.toRect=d,u.thisAnimationDuration&&ii(y,d)&&!ii(f,d)&&(g.top-d.top)/(g.left-d.left)===(f.top-d.top)/(f.left-d.left)&&(l=cr(g,y,b,o.options)),ii(d,f)||(u.prevFromRect=f,u.prevToRect=d,l||(l=o.options.animation),o.animate(u,g,d,l)),l&&(r=!0,a=Math.max(a,l),clearTimeout(u.animationResetTimer),u.animationResetTimer=setTimeout(function(){u.animationTime=0,u.prevFromRect=null,u.fromRect=null,u.prevToRect=null,u.thisAnimationDuration=null},l),u.thisAnimationDuration=l)}),clearTimeout(t),r?t=setTimeout(function(){typeof n=="function"&&n()},a):typeof n=="function"&&n(),e=[]},animate:function(n,o,r,a){if(a){m(n,"transition",""),m(n,"transform","");var s=Nt(this.el),l=s&&s.a,u=s&&s.d,f=(o.left-r.left)/(l||1),d=(o.top-r.top)/(u||1);n.animatingX=!!f,n.animatingY=!!d,m(n,"transform","translate3d("+f+"px,"+d+"px,0)"),this.forRepaintDummy=ur(n),m(n,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),m(n,"transform","translate3d(0,0,0)"),typeof n.animated=="number"&&clearTimeout(n.animated),n.animated=setTimeout(function(){m(n,"transition",""),m(n,"transform",""),n.animated=!1,n.animatingX=!1,n.animatingY=!1},a)}}}}function ur(e){return e.offsetWidth}function cr(e,t,i,n){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-i.top,2)+Math.pow(t.left-i.left,2))*n.animation}var Rt=[],ni={initializeByDefault:!0},se={mount:function(t){for(var i in ni)ni.hasOwnProperty(i)&&!(i in t)&&(t[i]=ni[i]);Rt.forEach(function(n){if(n.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),Rt.push(t)},pluginEvent:function(t,i,n){var o=this;this.eventCanceled=!1,n.cancel=function(){o.eventCanceled=!0};var r=t+"Global";Rt.forEach(function(a){i[a.pluginName]&&(i[a.pluginName][r]&&i[a.pluginName][r](ht({sortable:i},n)),i.options[a.pluginName]&&i[a.pluginName][t]&&i[a.pluginName][t](ht({sortable:i},n)))})},initializePlugins:function(t,i,n,o){Rt.forEach(function(s){var l=s.pluginName;if(!(!t.options[l]&&!s.initializeByDefault)){var u=new s(t,i,t.options);u.sortable=t,u.options=t.options,t[l]=u,bt(n,u.defaults)}});for(var r in t.options)if(t.options.hasOwnProperty(r)){var a=this.modifyOption(t,r,t.options[r]);typeof a<"u"&&(t.options[r]=a)}},getEventProperties:function(t,i){var n={};return Rt.forEach(function(o){typeof o.eventProperties=="function"&&bt(n,o.eventProperties.call(i[o.pluginName],t))}),n},modifyOption:function(t,i,n){var o;return Rt.forEach(function(r){t[r.pluginName]&&r.optionListeners&&typeof r.optionListeners[i]=="function"&&(o=r.optionListeners[i].call(t[r.pluginName],n))}),o}};function dr(e){var t=e.sortable,i=e.rootEl,n=e.name,o=e.targetEl,r=e.cloneEl,a=e.toEl,s=e.fromEl,l=e.oldIndex,u=e.newIndex,f=e.oldDraggableIndex,d=e.newDraggableIndex,y=e.originalEvent,b=e.putSortable,g=e.extraEventProperties;if(t=t||i&&i[K],!!t){var w,V=t.options,W="on"+n.charAt(0).toUpperCase()+n.substr(1);window.CustomEvent&&!wt&&!ae?w=new CustomEvent(n,{bubbles:!0,cancelable:!0}):(w=document.createEvent("Event"),w.initEvent(n,!0,!0)),w.to=a||i,w.from=s||i,w.item=o||i,w.clone=r,w.oldIndex=l,w.newIndex=u,w.oldDraggableIndex=f,w.newDraggableIndex=d,w.originalEvent=y,w.pullMode=b?b.lastPutMode:void 0;var B=ht(ht({},g),se.getEventProperties(n,t));for(var Q in B)w[Q]=B[Q];i&&i.dispatchEvent(w),V[W]&&V[W].call(t,w)}}var hr=["evt"],G=function(t,i){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=n.evt,r=nr(n,hr);se.pluginEvent.bind(v)(t,i,ht({dragEl:c,parentEl:P,ghostEl:S,rootEl:D,nextEl:Lt,lastDownEl:ve,cloneEl:R,cloneHidden:$t,dragStarted:Yt,putSortable:k,activeSortable:v.active,originalEvent:o,oldIndex:Bt,oldDraggableIndex:Kt,newIndex:et,newDraggableIndex:Et,hideGhostForTarget:dn,unhideGhostForTarget:hn,cloneNowHidden:function(){$t=!0},cloneNowShown:function(){$t=!1},dispatchSortableEvent:function(s){z({sortable:i,name:s,originalEvent:o})}},r))};function z(e){dr(ht({putSortable:k,cloneEl:R,targetEl:c,rootEl:D,oldIndex:Bt,oldDraggableIndex:Kt,newIndex:et,newDraggableIndex:Et},e))}var c,P,S,D,Lt,ve,R,$t,Bt,et,Kt,Et,de,k,Pt=!1,Ce=!1,Ae=[],_t,at,oi,ri,Pi,Oi,Yt,Ht,Qt,te=!1,he=!1,be,j,ai=[],fi=!1,Te=[],Ke=typeof document<"u",fe=xi,Mi=ae||wt?"cssFloat":"float",fr=Ke&&!Qi&&!xi&&"draggable"in document.createElement("div"),ln=function(){if(Ke){if(wt)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto",e.style.pointerEvents==="auto"}}(),un=function(t,i){var n=m(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),r=Ut(t,0,i),a=Ut(t,1,i),s=r&&m(r),l=a&&m(a),u=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+M(r).width,f=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+M(a).width;if(n.display==="flex")return n.flexDirection==="column"||n.flexDirection==="column-reverse"?"vertical":"horizontal";if(n.display==="grid")return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(r&&s.float&&s.float!=="none"){var d=s.float==="left"?"left":"right";return a&&(l.clear==="both"||l.clear===d)?"vertical":"horizontal"}return r&&(s.display==="block"||s.display==="flex"||s.display==="table"||s.display==="grid"||u>=o&&n[Mi]==="none"||a&&n[Mi]==="none"&&u+f>o)?"vertical":"horizontal"},pr=function(t,i,n){var o=n?t.left:t.top,r=n?t.right:t.bottom,a=n?t.width:t.height,s=n?i.left:i.top,l=n?i.right:i.bottom,u=n?i.width:i.height;return o===s||r===l||o+a/2===s+u/2},gr=function(t,i){var n;return Ae.some(function(o){var r=o[K].options.emptyInsertThreshold;if(!(!r||Ei(o))){var a=M(o),s=t>=a.left-r&&t<=a.right+r,l=i>=a.top-r&&i<=a.bottom+r;if(s&&l)return n=o}}),n},cn=function(t){function i(r,a){return function(s,l,u,f){var d=s.options.group.name&&l.options.group.name&&s.options.group.name===l.options.group.name;if(r==null&&(a||d))return!0;if(r==null||r===!1)return!1;if(a&&r==="clone")return r;if(typeof r=="function")return i(r(s,l,u,f),a)(s,l,u,f);var y=(a?s:l).options.group.name;return r===!0||typeof r=="string"&&r===y||r.join&&r.indexOf(y)>-1}}var n={},o=t.group;(!o||me(o)!="object")&&(o={name:o}),n.name=o.name,n.checkPull=i(o.pull,!0),n.checkPut=i(o.put),n.revertClone=o.revertClone,t.group=n},dn=function(){!ln&&S&&m(S,"display","none")},hn=function(){!ln&&S&&m(S,"display","")};Ke&&!Qi&&document.addEventListener("click",function(e){if(Ce)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),Ce=!1,!1},!0);var Dt=function(t){if(c){t=t.touches?t.touches[0]:t;var i=gr(t.clientX,t.clientY);if(i){var n={};for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o]);n.target=n.rootEl=i,n.preventDefault=void 0,n.stopPropagation=void 0,i[K]._onDragOver(n)}}},yr=function(t){c&&c.parentNode[K]._isOutsideThisEl(t.target)};function v(e,t){if(!(e&&e.nodeType&&e.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=bt({},t),e[K]=this;var i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return un(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,s){a.setData("Text",s.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:v.supportPointer!==!1&&"PointerEvent"in window&&(!Gt||xi),emptyInsertThreshold:5};se.initializePlugins(this,e,i);for(var n in i)!(n in t)&&(t[n]=i[n]);cn(t);for(var o in this)o.charAt(0)==="_"&&typeof this[o]=="function"&&(this[o]=this[o].bind(this));this.nativeDraggable=t.forceFallback?!1:fr,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?C(e,"pointerdown",this._onTapStart):(C(e,"mousedown",this._onTapStart),C(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(C(e,"dragover",this),C(e,"dragenter",this)),Ae.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),bt(this,lr())}v.prototype={constructor:v,_isOutsideThisEl:function(t){!this.el.contains(t)&&t!==this.el&&(Ht=null)},_getDirection:function(t,i){return typeof this.options.direction=="function"?this.options.direction.call(this,t,i,c):this.options.direction},_onTapStart:function(t){if(t.cancelable){var i=this,n=this.el,o=this.options,r=o.preventOnFilter,a=t.type,s=t.touches&&t.touches[0]||t.pointerType&&t.pointerType==="touch"&&t,l=(s||t).target,u=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||l,f=o.filter;if($r(n),!c&&!(/mousedown|pointerdown/.test(a)&&t.button!==0||o.disabled)&&!u.isContentEditable&&!(!this.nativeDraggable&&Gt&&l&&l.tagName.toUpperCase()==="SELECT")&&(l=st(l,o.draggable,n,!1),!(l&&l.animated)&&ve!==l)){if(Bt=nt(l),Kt=nt(l,o.draggable),typeof f=="function"){if(f.call(this,t,l,this)){z({sortable:i,rootEl:u,name:"filter",targetEl:l,toEl:n,fromEl:n}),G("filter",i,{evt:t}),r&&t.preventDefault();return}}else if(f&&(f=f.split(",").some(function(d){if(d=st(u,d.trim(),n,!1),d)return z({sortable:i,rootEl:d,name:"filter",targetEl:l,fromEl:n,toEl:n}),G("filter",i,{evt:t}),!0}),f)){r&&t.preventDefault();return}o.handle&&!st(u,o.handle,n,!1)||this._prepareDragStart(t,s,l)}}},_prepareDragStart:function(t,i,n){var o=this,r=o.el,a=o.options,s=r.ownerDocument,l;if(n&&!c&&n.parentNode===r){var u=M(n);if(D=r,c=n,P=c.parentNode,Lt=c.nextSibling,ve=n,de=a.group,v.dragged=c,_t={target:c,clientX:(i||t).clientX,clientY:(i||t).clientY},Pi=_t.clientX-u.left,Oi=_t.clientY-u.top,this._lastX=(i||t).clientX,this._lastY=(i||t).clientY,c.style["will-change"]="all",l=function(){if(G("delayEnded",o,{evt:t}),v.eventCanceled){o._onDrop();return}o._disableDelayedDragEvents(),!Vi&&o.nativeDraggable&&(c.draggable=!0),o._triggerDragStart(t,i),z({sortable:o,name:"choose",originalEvent:t}),tt(c,a.chosenClass,!0)},a.ignore.split(",").forEach(function(f){nn(c,f.trim(),si)}),C(s,"dragover",Dt),C(s,"mousemove",Dt),C(s,"touchmove",Dt),a.supportPointer?(C(s,"pointerup",o._onDrop),!this.nativeDraggable&&C(s,"pointercancel",o._onDrop)):(C(s,"mouseup",o._onDrop),C(s,"touchend",o._onDrop),C(s,"touchcancel",o._onDrop)),Vi&&this.nativeDraggable&&(this.options.touchStartThreshold=4,c.draggable=!0),G("delayStart",this,{evt:t}),a.delay&&(!a.delayOnTouchOnly||i)&&(!this.nativeDraggable||!(ae||wt))){if(v.eventCanceled){this._onDrop();return}a.supportPointer?(C(s,"pointerup",o._disableDelayedDrag),C(s,"pointercancel",o._disableDelayedDrag)):(C(s,"mouseup",o._disableDelayedDrag),C(s,"touchend",o._disableDelayedDrag),C(s,"touchcancel",o._disableDelayedDrag)),C(s,"mousemove",o._delayedDragTouchMoveHandler),C(s,"touchmove",o._delayedDragTouchMoveHandler),a.supportPointer&&C(s,"pointermove",o._delayedDragTouchMoveHandler),o._dragStartTimer=setTimeout(l,a.delay)}else l()}},_delayedDragTouchMoveHandler:function(t){var i=t.touches?t.touches[0]:t;Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){c&&si(c),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;$(t,"mouseup",this._disableDelayedDrag),$(t,"touchend",this._disableDelayedDrag),$(t,"touchcancel",this._disableDelayedDrag),$(t,"pointerup",this._disableDelayedDrag),$(t,"pointercancel",this._disableDelayedDrag),$(t,"mousemove",this._delayedDragTouchMoveHandler),$(t,"touchmove",this._delayedDragTouchMoveHandler),$(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,i){i=i||t.pointerType=="touch"&&t,!this.nativeDraggable||i?this.options.supportPointer?C(document,"pointermove",this._onTouchMove):i?C(document,"touchmove",this._onTouchMove):C(document,"mousemove",this._onTouchMove):(C(c,"dragend",this),C(D,"dragstart",this._onDragStart));try{document.selection?we(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(t,i){if(Pt=!1,D&&c){G("dragStarted",this,{evt:i}),this.nativeDraggable&&C(document,"dragover",yr);var n=this.options;!t&&tt(c,n.dragClass,!1),tt(c,n.ghostClass,!0),v.active=this,t&&this._appendGhost(),z({sortable:this,name:"start",originalEvent:i})}else this._nulling()},_emulateDragOver:function(){if(at){this._lastX=at.clientX,this._lastY=at.clientY,dn();for(var t=document.elementFromPoint(at.clientX,at.clientY),i=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(at.clientX,at.clientY),t!==i);)i=t;if(c.parentNode[K]._isOutsideThisEl(t),i)do{if(i[K]){var n=void 0;if(n=i[K]._onDragOver({clientX:at.clientX,clientY:at.clientY,target:t,rootEl:i}),n&&!this.options.dragoverBubble)break}t=i}while(i=en(i));hn()}},_onTouchMove:function(t){if(_t){var i=this.options,n=i.fallbackTolerance,o=i.fallbackOffset,r=t.touches?t.touches[0]:t,a=S&&Nt(S,!0),s=S&&a&&a.a,l=S&&a&&a.d,u=fe&&j&&Hi(j),f=(r.clientX-_t.clientX+o.x)/(s||1)+(u?u[0]-ai[0]:0)/(s||1),d=(r.clientY-_t.clientY+o.y)/(l||1)+(u?u[1]-ai[1]:0)/(l||1);if(!v.active&&!Pt){if(n&&Math.max(Math.abs(r.clientX-this._lastX),Math.abs(r.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}if(S){a?(a.e+=f-(oi||0),a.f+=d-(ri||0)):a={a:1,b:0,c:0,d:1,e:f,f:d};var y="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");m(S,"webkitTransform",y),m(S,"mozTransform",y),m(S,"msTransform",y),m(S,"transform",y),oi=f,ri=d,at=r}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!S){var t=this.options.fallbackOnBody?document.body:D,i=M(c,!0,fe,!0,t),n=this.options;if(fe){for(j=t;m(j,"position")==="static"&&m(j,"transform")==="none"&&j!==document;)j=j.parentNode;j!==document.body&&j!==document.documentElement?(j===document&&(j=dt()),i.top+=j.scrollTop,i.left+=j.scrollLeft):j=dt(),ai=Hi(j)}S=c.cloneNode(!0),tt(S,n.ghostClass,!1),tt(S,n.fallbackClass,!0),tt(S,n.dragClass,!0),m(S,"transition",""),m(S,"transform",""),m(S,"box-sizing","border-box"),m(S,"margin",0),m(S,"top",i.top),m(S,"left",i.left),m(S,"width",i.width),m(S,"height",i.height),m(S,"opacity","0.8"),m(S,"position",fe?"absolute":"fixed"),m(S,"zIndex","100000"),m(S,"pointerEvents","none"),v.ghost=S,t.appendChild(S),m(S,"transform-origin",Pi/parseInt(S.style.width)*100+"% "+Oi/parseInt(S.style.height)*100+"%")}},_onDragStart:function(t,i){var n=this,o=t.dataTransfer,r=n.options;if(G("dragStart",this,{evt:t}),v.eventCanceled){this._onDrop();return}G("setupClone",this),v.eventCanceled||(R=an(c),R.removeAttribute("id"),R.draggable=!1,R.style["will-change"]="",this._hideClone(),tt(R,this.options.chosenClass,!1),v.clone=R),n.cloneId=we(function(){G("clone",n),!v.eventCanceled&&(n.options.removeCloneOnHide||D.insertBefore(R,c),n._hideClone(),z({sortable:n,name:"clone"}))}),!i&&tt(c,r.dragClass,!0),i?(Ce=!0,n._loopId=setInterval(n._emulateDragOver,50)):($(document,"mouseup",n._onDrop),$(document,"touchend",n._onDrop),$(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",r.setData&&r.setData.call(n,o,c)),C(document,"drop",n),m(c,"transform","translateZ(0)")),Pt=!0,n._dragStartId=we(n._dragStarted.bind(n,i,t)),C(document,"selectstart",n),Yt=!0,window.getSelection().removeAllRanges(),Gt&&m(document.body,"user-select","none")},_onDragOver:function(t){var i=this.el,n=t.target,o,r,a,s=this.options,l=s.group,u=v.active,f=de===l,d=s.sort,y=k||u,b,g=this,w=!1;if(fi)return;function V(jt,Xn){G(jt,g,ht({evt:t,isOwner:f,axis:b?"vertical":"horizontal",revert:a,dragRect:o,targetRect:r,canSort:d,fromSortable:y,target:n,completed:B,onMove:function(_i,jn){return pe(D,i,c,o,_i,M(_i),t,jn)},changed:Q},Xn))}function W(){V("dragOverAnimationCapture"),g.captureAnimationState(),g!==y&&y.captureAnimationState()}function B(jt){return V("dragOverCompleted",{insertion:jt}),jt&&(f?u._hideClone():u._showClone(g),g!==y&&(tt(c,k?k.options.ghostClass:u.options.ghostClass,!1),tt(c,s.ghostClass,!0)),k!==g&&g!==v.active?k=g:g===v.active&&k&&(k=null),y===g&&(g._ignoreWhileAnimating=n),g.animateAll(function(){V("dragOverAnimationComplete"),g._ignoreWhileAnimating=null}),g!==y&&(y.animateAll(),y._ignoreWhileAnimating=null)),(n===c&&!c.animated||n===i&&!n.animated)&&(Ht=null),!s.dragoverBubble&&!t.rootEl&&n!==document&&(c.parentNode[K]._isOutsideThisEl(t.target),!jt&&Dt(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),w=!0}function Q(){et=nt(c),Et=nt(c,s.draggable),z({sortable:g,name:"change",toEl:i,newIndex:et,newDraggableIndex:Et,originalEvent:t})}if(t.preventDefault!==void 0&&t.cancelable&&t.preventDefault(),n=st(n,s.draggable,i,!0),V("dragOver"),v.eventCanceled)return w;if(c.contains(t.target)||n.animated&&n.animatingX&&n.animatingY||g._ignoreWhileAnimating===n)return B(!1);if(Ce=!1,u&&!s.disabled&&(f?d||(a=P!==D):k===this||(this.lastPutMode=de.checkPull(this,u,c,t))&&l.checkPut(this,u,c,t))){if(b=this._getDirection(t,n)==="vertical",o=M(c),V("dragOverValid"),v.eventCanceled)return w;if(a)return P=D,W(),this._hideClone(),V("revert"),v.eventCanceled||(Lt?D.insertBefore(c,Lt):D.appendChild(c)),B(!0);var Y=Ei(i,s.draggable);if(!Y||wr(t,b,this)&&!Y.animated){if(Y===c)return B(!1);if(Y&&i===t.target&&(n=Y),n&&(r=M(n)),pe(D,i,c,o,n,r,t,!!n)!==!1)return W(),Y&&Y.nextSibling?i.insertBefore(c,Y.nextSibling):i.appendChild(c),P=i,Q(),B(!0)}else if(Y&&br(t,b,this)){var ot=Ut(i,0,s,!0);if(ot===c)return B(!1);if(n=ot,r=M(n),pe(D,i,c,o,n,r,t,!1)!==!1)return W(),i.insertBefore(c,ot),P=i,Q(),B(!0)}else if(n.parentNode===i){r=M(n);var _=0,Z,rt=c.parentNode!==i,X=!pr(c.animated&&c.toRect||o,n.animated&&n.toRect||r,b),qt=b?"top":"left",St=Ri(n,"top","top")||Ri(c,"top","top"),Zt=St?St.scrollTop:void 0;Ht!==n&&(Z=r[qt],te=!1,he=!X&&s.invertSwap||rt),_=Sr(t,n,r,b,X?1:s.swapThreshold,s.invertedSwapThreshold==null?s.swapThreshold:s.invertedSwapThreshold,he,Ht===n);var ft;if(_!==0){var Tt=nt(c);do Tt-=_,ft=P.children[Tt];while(ft&&(m(ft,"display")==="none"||ft===S))}if(_===0||ft===n)return B(!1);Ht=n,Qt=_;var Xt=n.nextElementSibling,xt=!1;xt=_===1;var le=pe(D,i,c,o,n,r,t,xt);if(le!==!1)return(le===1||le===-1)&&(xt=le===1),fi=!0,setTimeout(vr,30),W(),xt&&!Xt?i.appendChild(c):n.parentNode.insertBefore(c,xt?Xt:n),St&&rn(St,0,Zt-St.scrollTop),P=c.parentNode,Z!==void 0&&!he&&(be=Math.abs(Z-M(n)[qt])),Q(),B(!0)}if(i.contains(c))return B(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){$(document,"mousemove",this._onTouchMove),$(document,"touchmove",this._onTouchMove),$(document,"pointermove",this._onTouchMove),$(document,"dragover",Dt),$(document,"mousemove",Dt),$(document,"touchmove",Dt)},_offUpEvents:function(){var t=this.el.ownerDocument;$(t,"mouseup",this._onDrop),$(t,"touchend",this._onDrop),$(t,"pointerup",this._onDrop),$(t,"pointercancel",this._onDrop),$(t,"touchcancel",this._onDrop),$(document,"selectstart",this)},_onDrop:function(t){var i=this.el,n=this.options;if(et=nt(c),Et=nt(c,n.draggable),G("drop",this,{evt:t}),P=c&&c.parentNode,et=nt(c),Et=nt(c,n.draggable),v.eventCanceled){this._nulling();return}Pt=!1,he=!1,te=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),pi(this.cloneId),pi(this._dragStartId),this.nativeDraggable&&($(document,"drop",this),$(i,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Gt&&m(document.body,"user-select",""),m(c,"transform",""),t&&(Yt&&(t.cancelable&&t.preventDefault(),!n.dropBubble&&t.stopPropagation()),S&&S.parentNode&&S.parentNode.removeChild(S),(D===P||k&&k.lastPutMode!=="clone")&&R&&R.parentNode&&R.parentNode.removeChild(R),c&&(this.nativeDraggable&&$(c,"dragend",this),si(c),c.style["will-change"]="",Yt&&!Pt&&tt(c,k?k.options.ghostClass:this.options.ghostClass,!1),tt(c,this.options.chosenClass,!1),z({sortable:this,name:"unchoose",toEl:P,newIndex:null,newDraggableIndex:null,originalEvent:t}),D!==P?(et>=0&&(z({rootEl:P,name:"add",toEl:P,fromEl:D,originalEvent:t}),z({sortable:this,name:"remove",toEl:P,originalEvent:t}),z({rootEl:P,name:"sort",toEl:P,fromEl:D,originalEvent:t}),z({sortable:this,name:"sort",toEl:P,originalEvent:t})),k&&k.save()):et!==Bt&&et>=0&&(z({sortable:this,name:"update",toEl:P,originalEvent:t}),z({sortable:this,name:"sort",toEl:P,originalEvent:t})),v.active&&((et==null||et===-1)&&(et=Bt,Et=Kt),z({sortable:this,name:"end",toEl:P,originalEvent:t}),this.save()))),this._nulling()},_nulling:function(){G("nulling",this),D=c=P=S=Lt=R=ve=$t=_t=at=Yt=et=Et=Bt=Kt=Ht=Qt=k=de=v.dragged=v.ghost=v.clone=v.active=null,Te.forEach(function(t){t.checked=!0}),Te.length=oi=ri=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":c&&(this._onDragOver(t),mr(t));break;case"selectstart":t.preventDefault();break}},toArray:function(){for(var t=[],i,n=this.el.children,o=0,r=n.length,a=this.options;o<r;o++)i=n[o],st(i,a.draggable,this.el,!1)&&t.push(i.getAttribute(a.dataIdAttr)||Er(i));return t},sort:function(t,i){var n={},o=this.el;this.toArray().forEach(function(r,a){var s=o.children[a];st(s,this.options.draggable,o,!1)&&(n[r]=s)},this),i&&this.captureAnimationState(),t.forEach(function(r){n[r]&&(o.removeChild(n[r]),o.appendChild(n[r]))}),i&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,i){return st(t,i||this.options.draggable,this.el,!1)},option:function(t,i){var n=this.options;if(i===void 0)return n[t];var o=se.modifyOption(this,t,i);typeof o<"u"?n[t]=o:n[t]=i,t==="group"&&cn(n)},destroy:function(){G("destroy",this);var t=this.el;t[K]=null,$(t,"mousedown",this._onTapStart),$(t,"touchstart",this._onTapStart),$(t,"pointerdown",this._onTapStart),this.nativeDraggable&&($(t,"dragover",this),$(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(i){i.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Ae.splice(Ae.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!$t){if(G("hideClone",this),v.eventCanceled)return;m(R,"display","none"),this.options.removeCloneOnHide&&R.parentNode&&R.parentNode.removeChild(R),$t=!0}},_showClone:function(t){if(t.lastPutMode!=="clone"){this._hideClone();return}if($t){if(G("showClone",this),v.eventCanceled)return;c.parentNode==D&&!this.options.group.revertClone?D.insertBefore(R,c):Lt?D.insertBefore(R,Lt):D.appendChild(R),this.options.group.revertClone&&this.animate(c,R),m(R,"display",""),$t=!1}}};function mr(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault()}function pe(e,t,i,n,o,r,a,s){var l,u=e[K],f=u.options.onMove,d;return window.CustomEvent&&!wt&&!ae?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=t,l.from=e,l.dragged=i,l.draggedRect=n,l.related=o||t,l.relatedRect=r||M(t),l.willInsertAfter=s,l.originalEvent=a,e.dispatchEvent(l),f&&(d=f.call(u,l,a)),d}function si(e){e.draggable=!1}function vr(){fi=!1}function br(e,t,i){var n=M(Ut(i.el,0,i.options,!0)),o=sn(i.el,i.options,S),r=10;return t?e.clientX<o.left-r||e.clientY<n.top&&e.clientX<n.right:e.clientY<o.top-r||e.clientY<n.bottom&&e.clientX<n.left}function wr(e,t,i){var n=M(Ei(i.el,i.options.draggable)),o=sn(i.el,i.options,S),r=10;return t?e.clientX>o.right+r||e.clientY>n.bottom&&e.clientX>n.left:e.clientY>o.bottom+r||e.clientX>n.right&&e.clientY>n.top}function Sr(e,t,i,n,o,r,a,s){var l=n?e.clientY:e.clientX,u=n?i.height:i.width,f=n?i.top:i.left,d=n?i.bottom:i.right,y=!1;if(!a){if(s&&be<u*o){if(!te&&(Qt===1?l>f+u*r/2:l<d-u*r/2)&&(te=!0),te)y=!0;else if(Qt===1?l<f+be:l>d-be)return-Qt}else if(l>f+u*(1-o)/2&&l<d-u*(1-o)/2)return xr(t)}return y=y||a,y&&(l<f+u*r/2||l>d-u*r/2)?l>f+u/2?1:-1:0}function xr(e){return nt(c)<nt(e)?1:-1}function Er(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,i=t.length,n=0;i--;)n+=t.charCodeAt(i);return n.toString(36)}function $r(e){Te.length=0;for(var t=e.getElementsByTagName("input"),i=t.length;i--;){var n=t[i];n.checked&&Te.push(n)}}function we(e){return setTimeout(e,0)}function pi(e){return clearTimeout(e)}Ke&&C(document,"touchmove",function(e){(v.active||Pt)&&e.cancelable&&e.preventDefault()});v.utils={on:C,off:$,css:m,find:nn,is:function(t,i){return!!st(t,i,t,!1)},extend:ar,throttle:on,closest:st,toggleClass:tt,clone:an,index:nt,nextTick:we,cancelNextTick:pi,detectDirection:un,getChild:Ut,expando:K};v.get=function(e){return e[K]};v.mount=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t[0].constructor===Array&&(t=t[0]),t.forEach(function(n){if(!n.prototype||!n.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));n.utils&&(v.utils=ht(ht({},v.utils),n.utils)),se.mount(n)})};v.create=function(e,t){return new v(e,t)};v.version=or;var O=[],zt,gi,yi=!1,li,ui,_e,Wt;function Cr(){function e(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var t in this)t.charAt(0)==="_"&&typeof this[t]=="function"&&(this[t]=this[t].bind(this))}return e.prototype={dragStarted:function(i){var n=i.originalEvent;this.sortable.nativeDraggable?C(document,"dragover",this._handleAutoScroll):this.options.supportPointer?C(document,"pointermove",this._handleFallbackAutoScroll):n.touches?C(document,"touchmove",this._handleFallbackAutoScroll):C(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(i){var n=i.originalEvent;!this.options.dragOverBubble&&!n.rootEl&&this._handleAutoScroll(n)},drop:function(){this.sortable.nativeDraggable?$(document,"dragover",this._handleAutoScroll):($(document,"pointermove",this._handleFallbackAutoScroll),$(document,"touchmove",this._handleFallbackAutoScroll),$(document,"mousemove",this._handleFallbackAutoScroll)),Bi(),Se(),sr()},nulling:function(){_e=gi=zt=yi=Wt=li=ui=null,O.length=0},_handleFallbackAutoScroll:function(i){this._handleAutoScroll(i,!0)},_handleAutoScroll:function(i,n){var o=this,r=(i.touches?i.touches[0]:i).clientX,a=(i.touches?i.touches[0]:i).clientY,s=document.elementFromPoint(r,a);if(_e=i,n||this.options.forceAutoScrollFallback||ae||wt||Gt){ci(i,this.options,s,n);var l=At(s,!0);yi&&(!Wt||r!==li||a!==ui)&&(Wt&&Bi(),Wt=setInterval(function(){var u=At(document.elementFromPoint(r,a),!0);u!==l&&(l=u,Se()),ci(i,o.options,u,n)},10),li=r,ui=a)}else{if(!this.options.bubbleScroll||At(s,!0)===dt()){Se();return}ci(i,this.options,At(s,!1),!1)}}},bt(e,{pluginName:"scroll",initializeByDefault:!0})}function Se(){O.forEach(function(e){clearInterval(e.pid)}),O=[]}function Bi(){clearInterval(Wt)}var ci=on(function(e,t,i,n){if(t.scroll){var o=(e.touches?e.touches[0]:e).clientX,r=(e.touches?e.touches[0]:e).clientY,a=t.scrollSensitivity,s=t.scrollSpeed,l=dt(),u=!1,f;gi!==i&&(gi=i,Se(),zt=t.scroll,f=t.scrollFn,zt===!0&&(zt=At(i,!0)));var d=0,y=zt;do{var b=y,g=M(b),w=g.top,V=g.bottom,W=g.left,B=g.right,Q=g.width,Y=g.height,ot=void 0,_=void 0,Z=b.scrollWidth,rt=b.scrollHeight,X=m(b),qt=b.scrollLeft,St=b.scrollTop;b===l?(ot=Q<Z&&(X.overflowX==="auto"||X.overflowX==="scroll"||X.overflowX==="visible"),_=Y<rt&&(X.overflowY==="auto"||X.overflowY==="scroll"||X.overflowY==="visible")):(ot=Q<Z&&(X.overflowX==="auto"||X.overflowX==="scroll"),_=Y<rt&&(X.overflowY==="auto"||X.overflowY==="scroll"));var Zt=ot&&(Math.abs(B-o)<=a&&qt+Q<Z)-(Math.abs(W-o)<=a&&!!qt),ft=_&&(Math.abs(V-r)<=a&&St+Y<rt)-(Math.abs(w-r)<=a&&!!St);if(!O[d])for(var Tt=0;Tt<=d;Tt++)O[Tt]||(O[Tt]={});(O[d].vx!=Zt||O[d].vy!=ft||O[d].el!==b)&&(O[d].el=b,O[d].vx=Zt,O[d].vy=ft,clearInterval(O[d].pid),(Zt!=0||ft!=0)&&(u=!0,O[d].pid=setInterval((function(){n&&this.layer===0&&v.active._onTouchMove(_e);var Xt=O[this.layer].vy?O[this.layer].vy*s:0,xt=O[this.layer].vx?O[this.layer].vx*s:0;typeof f=="function"&&f.call(v.dragged.parentNode[K],xt,Xt,e,_e,O[this.layer].el)!=="continue"||rn(O[this.layer].el,xt,Xt)}).bind({layer:d}),24))),d++}while(t.bubbleScroll&&y!==l&&(y=At(y,!1)));yi=u}},30),fn=function(t){var i=t.originalEvent,n=t.putSortable,o=t.dragEl,r=t.activeSortable,a=t.dispatchSortableEvent,s=t.hideGhostForTarget,l=t.unhideGhostForTarget;if(i){var u=n||r;s();var f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:i,d=document.elementFromPoint(f.clientX,f.clientY);l(),u&&!u.el.contains(d)&&(a("spill"),this.onSpill({dragEl:o,putSortable:n}))}};function $i(){}$i.prototype={startIndex:null,dragStart:function(t){var i=t.oldDraggableIndex;this.startIndex=i},onSpill:function(t){var i=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var o=Ut(this.sortable.el,this.startIndex,this.options);o?this.sortable.el.insertBefore(i,o):this.sortable.el.appendChild(i),this.sortable.animateAll(),n&&n.animateAll()},drop:fn};bt($i,{pluginName:"revertOnSpill"});function Ci(){}Ci.prototype={onSpill:function(t){var i=t.dragEl,n=t.putSortable,o=n||this.sortable;o.captureAnimationState(),i.parentNode&&i.parentNode.removeChild(i),o.animateAll()},drop:fn};bt(Ci,{pluginName:"removeOnSpill"});v.mount(new Cr);v.mount(Ci,$i);const Ar=e=>{const t=e.item;let i=Array.prototype.slice.call(t.parentNode.childNodes);return i=i.filter(n=>n.nodeType!=Node.ELEMENT_NODE||!n.classList.contains("sortable-fallback")),i},Tr=(e,t,i,n,o,r)=>{const s=e.item.parentNode;for(const w of i)s.appendChild(w);if(e.oldIndex==e.newIndex)return;const l=n.getArray(),u=e.item.querySelector("eox-layercontrol-layer").layer.get(o),f=l.find(w=>w.get(o)===u),d=r.dataset.layer,y=l.find(w=>w.get(o)==d);let b,g;for(b=0;b<l.length;b++)if(l[b]==f){n.removeAt(b);break}for(g=0;g<l.length;g++)if(l[g]===y){b>g?n.insertAt(g,f):n.insertAt(g+1,f);break}t.requestUpdate()};function _r(e,t,i,n){let o=[],r=null;e._sortable=v.create(e,{handle:".drag-handle",filter:".drag-handle.disabled",swapThreshold:.5,animation:150,easing:"cubic-bezier(1, 0, 0, 1)",onStart:a=>{console.log(a),o=Ar(a)},onMove:a=>{r=a.related},onEnd:a=>Tr(a,n,o,t,i,r)})}function Dr(e,t,i,n){const o=e.getArray();let r=!1;o.forEach(a=>{const s=a.ol_uid;a.get(t)||(a.set(t,s),r=!0),a.get(i)||(a.set(i,`layer ${s}`),r=!0),r&&n.requestUpdate()})}function Ai(e,t,i){let n=[];const o=(r,a,s)=>{n=[...n,...r.filter(u=>u.get(a)===s)];const l=r.filter(u=>u.getLayers);return l.length>0&&l.forEach(u=>o(u.getLayers().getArray(),a,s)),n};return o(e,t,i),n}function Lr(e,t,i){if(!e||!t)return!1;if(!pn(e,i))return!0;const n=e.get("minZoom"),o=e.get("maxZoom"),r=t.getView().getZoom();return r>n&&r<o}function pn(e,t){const i=e.get("minZoom"),n=e.get("maxZoom");return!!(t&&(i!==-1/0||n!==1/0))}function Ni(e,t){var o,r,a;return!e||!t?void 0:e.getLayers?"group":((a=(o=t.getInteractions().getArray().filter(s=>s.freehand_!==void 0).map(s=>s.source_))==null?void 0:o.ol_uid)==null?void 0:a.includes(e.getSource?(r=e.getSource())==null?void 0:r.ol_uid:void 0))?"draw":e.declutter_!==void 0||e.get("type")==="Vector"?"vector":"raster"}const Vr=(e,t,i)=>{let n=t;return i.layer.getSource().getTileUrlFunction()&&(n||(n=i.layer.getSource().getTileUrlFunction()),i.layer.getSource().setTileUrlFunction((...o)=>tr(n(...o),e)),i.layer.getSource().setKey(new Date)),n};function Ir(e,t,i){const n="updateStyleVariables"in t,o="setStyle"in t,r=n?t.style_:i.style;let a=r==null?void 0:r.variables;if(a){const s=Ti(e);if(r.variables={...a,...s},n)t.updateStyleVariables(s);else if(o){const l=Rr(r);t.setStyle(l)}}}const Ti=e=>{const t={};for(const i in e)if(typeof e[i]=="object"&&e[i]!==null){const n=Ti(e[i]);for(const o in n)t[o]=n==null?void 0:n[o]}else t[i]=e==null?void 0:e[i];return t};function Rr(e){let t=e;if("variables"in e){let i=JSON.stringify(e);const{variables:n}=e;for(const o in n)typeof n[o]=="number"?i=i.replaceAll(`["var","${o}"]`,String(n[o])):i=i.replaceAll(`["var","${o}"]`,`"${n[o]}"`);t=JSON.parse(i)}return t}const Hr=(e,t)=>{if(!e)return;const i=Ti(t);let n,o;return Array.isArray(e)?o=structuredClone(e):o=[structuredClone(e)],n=o.filter(r=>{if(!("boundTo"in r))return!0;const a=r.boundTo.key,s=r.boundTo.value;return a in i&&i[a]==s}),n.length||(n=null),n==null?void 0:n.map(r=>{var a;return delete r.boundTo,!("domainProperties"in r)||"domain"in r?r:(a=Object.keys(r))==null?void 0:a.reduce((s,l)=>(l==="domainProperties"?s.domain=r[l].map(u=>i[u]):s[l]=r[l],s),{})})};function gn(e,t){var n;let i={};for(const o in e){const r=e[o].type;if(r&&r!=="object"&&t[o]!==void 0)i[o]=r==="number"?Number(t[o]):t[o];else if(typeof e[o]=="object"&&((n=e[o])!=null&&n.properties)){const a=gn(e[o].properties,t);Object.keys(a).length>0&&(i[o]=a)}}return i}function Pr(e,t){var r,a,s,l,u,f,d;if(!t)return null;let i={},n="updateStyleVariables"in e?(r=e.style_)==null?void 0:r.variables:(a=t.style)==null?void 0:a.variables;if((t.type==="style"||t.style)&&n)i=n;else if((l=(s=e.getSource())==null?void 0:s.getTileUrlFunction)!=null&&l.call(s)){const y=new URL(e.getSource().getTileUrlFunction()([0,0,0]));(((f=(u=t.schema)==null?void 0:u.options)==null?void 0:f.removeProperties)??[]).forEach(g=>y.searchParams.delete(g)),i={};for(const[g,w]of y.searchParams.entries()){const V=y.searchParams.getAll(g);i[g]=V.length>1?V:w}}else return null;const o=gn(((d=t.schema)==null?void 0:d.properties)||t.schema,i);return Object.keys(o).length?o:null}const yn=(e,t)=>e==null?void 0:e.filter(i=>["remove","sort"].filter(n=>t!=null&&t.get("layerControlDisable")?n!=="sort":!0).includes(i)),mn=(e,t)=>e==null?void 0:e.filter(i=>{let n=!0;return["remove","sort"].includes(i)&&(n=!1),i==="info"&&(n=t.get("description")),i==="config"&&(n=t.get("layerConfig")),i==="datetime"&&(n=t.get("layerDatetime")),i==="legend"&&(n=t.get("layerLegend")),n}),Or=(e,t,i)=>h`
  <button
    slot="${e}-icon"
    class="no-margin transparent square primary-text small"
  >
    ${i?e:h`<i class="small primary-text">${t}</i>`}
  </button>
`,vn=(e,t)=>h`
  <button
    class="remove-icon no-margin transparent square small action"
    @click=${()=>{const{layer:i}=e;i==null||i.set("layerControlOptional",!0),i==null||i.setVisible(!1),e.dispatchEvent(new CustomEvent("changed",{detail:i,bubbles:!0}))}}
  >
    ${e.unstyled?"x":h`<i class="small red-text">${t}</i>`}
  </button>
`,bn=(e,t,i)=>h`
  <button
    class="sort-icon no-margin transparent square primary-text drag-handle small action ${e.layer.get("layerControlDisable")?"disabled":""}"
    style="cursor: ns-resize;"
  >
    ${i?"═":h`<i class="small primary-text">${t}</i>`}
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
    </svg>`}}const wn=e=>{var i;const t=["layerControlHide","layerControlOptional"];return(i=e==null?void 0:e.getArray())==null?void 0:i.filter(n=>t.every(o=>!n.get(o)))};function Sn(e,t){t.dispatchEvent(new CustomEvent("datetime:updated",{detail:e.detail,bubbles:!0}))}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xn=Jn(class extends Kn{constructor(e){if(super(e),e.type!==It.PROPERTY&&e.type!==It.ATTRIBUTE&&e.type!==It.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Qn(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===ue||t===yt)return t;const i=e.element,n=e.name;if(e.type===It.PROPERTY){if(t===i[n])return ue}else if(e.type===It.BOOLEAN_ATTRIBUTE){if(!!t===i.hasAttribute(n))return ue}else if(e.type===It.ATTRIBUTE&&i.getAttribute(n)===t+"")return ue;return to(e),t}});var En="Expected a function",ki=NaN,Mr="[object Symbol]",Br=/^\s+|\s+$/g,Nr=/^[-+]0x[0-9a-f]+$/i,kr=/^0b[01]+$/i,Ur=/^0o[0-7]+$/i,Fr=parseInt,qr=typeof ce=="object"&&ce&&ce.Object===Object&&ce,Zr=typeof self=="object"&&self&&self.Object===Object&&self,Xr=qr||Zr||Function("return this")(),jr=Object.prototype,Yr=jr.toString,zr=Math.max,Wr=Math.min,di=function(){return Xr.Date.now()};function Gr(e,t,i){var n,o,r,a,s,l,u=0,f=!1,d=!1,y=!0;if(typeof e!="function")throw new TypeError(En);t=Ui(t)||0,De(i)&&(f=!!i.leading,d="maxWait"in i,r=d?zr(Ui(i.maxWait)||0,t):r,y="trailing"in i?!!i.trailing:y);function b(_){var Z=n,rt=o;return n=o=void 0,u=_,a=e.apply(rt,Z),a}function g(_){return u=_,s=setTimeout(W,t),f?b(_):a}function w(_){var Z=_-l,rt=_-u,X=t-Z;return d?Wr(X,r-rt):X}function V(_){var Z=_-l,rt=_-u;return l===void 0||Z>=t||Z<0||d&&rt>=r}function W(){var _=di();if(V(_))return B(_);s=setTimeout(W,w(_))}function B(_){return s=void 0,y&&n?b(_):(n=o=void 0,a)}function Q(){s!==void 0&&clearTimeout(s),u=0,n=l=o=s=void 0}function Y(){return s===void 0?a:B(di())}function ot(){var _=di(),Z=V(_);if(n=arguments,o=this,l=_,Z){if(s===void 0)return g(l);if(d)return s=setTimeout(W,t),b(l)}return s===void 0&&(s=setTimeout(W,t)),a}return ot.cancel=Q,ot.flush=Y,ot}function Jr(e,t,i){var n=!0,o=!0;if(typeof e!="function")throw new TypeError(En);return De(i)&&(n="leading"in i?!!i.leading:n,o="trailing"in i?!!i.trailing:o),Gr(e,t,{leading:n,maxWait:t,trailing:o})}function De(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Kr(e){return!!e&&typeof e=="object"}function Qr(e){return typeof e=="symbol"||Kr(e)&&Yr.call(e)==Mr}function Ui(e){if(typeof e=="number")return e;if(Qr(e))return ki;if(De(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=De(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Br,"");var i=kr.test(e);return i||Ur.test(e)?Fr(e.slice(2),i?2:8):Nr.test(e)?ki:+e}var ta=Jr;const Fi=io(ta);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=e=>e??yt;var it,Le,Ve;class $n extends lt{constructor(){super();A(this,it,[]);A(this,Le,hi`
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
  `);A(this,Ve,"");this.unstyled=!1,this.noShadow=!1,this.layer=null}get layerLegend(){return x(this,it)?x(this,it).length>1?x(this,it):x(this,it)[0]:null}set layerLegend(i){var n;i?Array.isArray(i)?ut(this,it,i.map((o,r)=>{var a;return{id:(((a=this.layer)==null?void 0:a.get("id"))??"")+r,...o}})):ut(this,it,[{id:(((n=this.layer)==null?void 0:n.get("id"))??"")+0,...i}]):ut(this,it,null)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){this.layerLegend&&new ResizeObserver(()=>{var i;ut(this,it,(i=x(this,it))==null?void 0:i.map(n=>(this.offsetWidth!==n.width&&(n.width=this.offsetWidth),{...n}))),this.requestUpdate()}).observe(this.renderRoot.querySelector(".legend-container"))}render(){return customElements.get("color-legend")||console.error("Please import `color-legend-element` in order to use layerLegend"),h`
      <style>
        ${x(this,Le)}
        ${!this.unstyled&&x(this,Ve)}
      </style>
      ${L(this.layerLegend,()=>h`
          <div class="legend-container">
            <!-- Render color-legend-->
            ${x(this,it).map((i,n,o)=>h`
                <color-legend
                  id="${i.id}"
                  width=${i.width??325}
                  scaleType="${ge(i.scaleType)}"
                  markType="${ge(i.markType)}"
                  titleText="${ge(i.title)}"
                  .range=${i.range}
                  .domain=${i.domain}
                  tickFormat="${ge(i.tickFormat)}"
                  .ticks=${i.ticks??5}
                  .tickValues=${i.tickValues}
                  .marginLeft=${8}
                  .marginRight=${8}
                >
                </color-legend>
                ${n!==o.length-1?h`<div class="separator"></div>`:yt}
              `)}
          </div>
        `)}
    `}}it=new WeakMap,Le=new WeakMap,Ve=new WeakMap,H($n,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerLegend:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-legend",$n);var pt,kt,ne,oe,mi,Ie,Re;class Cn extends lt{constructor(){super();A(this,oe);A(this,pt,{});A(this,kt,null);A(this,ne);A(this,Ie,hi`
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
  `);A(this,Re,hi`
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
  `);this.layer=null,this.unstyled=!1,this.noShadow=!1,this.layerConfig=null,this.throttleDataChange=Fi(I(this,oe,mi),1e3),this.customEditorInterfaces=[]}updated(i){if(i.has("layerConfig")){const n=this.layerConfig.type==="style"||this.layerConfig.style?100:1e3;this.throttleDataChange=Fi(I(this,oe,mi),n),this.requestUpdate()}}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){ut(this,kt,Pr(this.layer,this.layerConfig)),Object.keys(x(this,pt)).length!==0&&ut(this,kt,x(this,pt)),customElements.get("eox-jsonform")||console.error("Please import @eox/jsonform in order to use layerconfig");const i={disable_edit_json:!0,disable_collapse:!0,disable_properties:!0};return h`
      <style>
        ${x(this,Ie)}
        ${!this.unstyled&&x(this,Re)}
      </style>
      ${L(this.layerConfig,()=>h`
          ${L(this.layerConfig.legend,()=>h`
              <eox-layercontrol-layer-legend
                .noShadow=${!0}
                .unstyled=${this.unstyled}
                .layer=${this.layer}
                .layerLegend=${Hr(this.layerConfig.legend,x(this,pt))}
              ></eox-layercontrol-layer-legend>
            `)}
          <!-- Render a JSON form for layer configuration -->
          <eox-jsonform
            .schema=${this.layerConfig.schema}
            .value=${x(this,kt)}
            .options=${i}
            .noShadow=${!0}
            .customEditorInterfaces=${this.customEditorInterfaces}
            @change=${this.throttleDataChange}
          ></eox-jsonform>
        `)}
    `}}pt=new WeakMap,kt=new WeakMap,ne=new WeakMap,oe=new WeakSet,mi=function(i){ut(this,pt,i.detail),this.layerConfig.type==="style"||this.layerConfig.style?"setStyle"in this.layer||"updateStyleVariables"in this.layer?Ir(x(this,pt),this.layer,this.layerConfig):console.error(`Layer type ${this.layer.get("type")??""} does not support styles configuration`):ut(this,ne,Vr(x(this,pt),x(this,ne),this)),this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:i.detail,layer:this.layer}})),this.requestUpdate()},Ie=new WeakMap,Re=new WeakMap,H(Cn,"properties",{layer:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},layerConfig:{attribute:!1},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layerconfig",Cn);var He,Tn,Pe,Oe;class An extends lt{constructor(){super();A(this,He);A(this,Pe,"");A(this,Oe,"");this.unstyled=!1,this.noShadow=!1,this.layerDatetime=null,this.layer=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return customElements.get("eox-timecontrol")||console.error("Please import @eox/timecontrol in order to use layerDatetime"),h`
      <style>
        ${x(this,Pe)}
        ${!this.unstyled&&x(this,Oe)}
      </style>
      ${L(this.layerDatetime,()=>h`
          <eox-timecontrol
            .initDate=${this.layerDatetime.currentStep?[this.layerDatetime.currentStep]:void 0}
            .controlValues=${[{id:this.layer.get("id"),name:this.layer.get("name")||this.layer.get("title"),timeControlValues:this.layerDatetime.controlValues.map(i=>({date:i}))}]}
            @select=${I(this,He,Tn)}
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
    `}}He=new WeakSet,Tn=function(i){var a;const n=new Date(i.detail.date[0]),o=(a=this.layerDatetime.controlValues)==null?void 0:a.some(s=>typeof s=="string"&&s.includes("T"));let r;o?r=n.toISOString():r=(l=>`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}-${String(l.getDate()).padStart(2,"0")}`)(n),r!==this.layerDatetime.currentStep&&(this.dispatchEvent(new CustomEvent("datetime:updated",{bubbles:!0,detail:{datetime:r,layer:this.layer}})),this.layerDatetime.currentStep=r,this.requestUpdate())},Pe=new WeakMap,Oe=new WeakMap,H(An,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerDatetime:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-datetime",An);var re,Me,Be;class _n extends lt{constructor(){super();A(this,re,i=>(this.selectedTab===i||this.toolsAsList)&&"highlighted");A(this,Me,`
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
  `);A(this,Be,`
    ${bi}
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
  `);this.actions=[],this.selectedTab=0,this.tabs=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const i=this.tabs,n=this.actions,o=n.length+i.length>1;return h`
      <style>
        ${x(this,Me)}
        ${!this.unstyled&&x(this,Be)}
      </style>
      <div class="${this.toolsAsList?"listed":"tabbed"}">
        <!-- Navigation for tabs and actions -->
        ${L(o,()=>h`
            <nav>
              ${L(!this.toolsAsList,()=>h`
                  <div>
                    <!-- Labels for tabs -->
                    ${ye(i,(r,a)=>h`
                        <label
                          class=${x(this,re).call(this,a)}
                          @click=${()=>this.selectedTab=a}
                        >
                          <!-- Customizable icon for each tab -->
                          <slot name=${`${r}-icon`}>${r}</slot>
                        </label>
                      `)}
                  </div>
                  <div>
                    <!-- Icons for actions -->
                    ${ye(n,r=>h`
                        <span>
                          <!-- Customizable icon for each action -->
                          <slot name=${`${r}-icon`}>${r}</slot>
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
          ${ye(i,(r,a)=>h`
              ${L(this.toolsAsList,()=>h`
                  <label>
                    <!-- Customizable icon for each tab -->
                    <slot name=${`${r}-icon`}>${r}</slot>
                    <span>${r}</span>
                  </label>
                `)}
              <div class="tab ${x(this,re).call(this,a)}">
                <!-- Content slot for each tab -->
                <slot name=${`${r}-content`}>${r}</slot>
              </div>
              ${L(this.toolsAsList&&a<i.length-1,()=>h`<hr class="small" />`)}
            `)}
        </figure>
      </div>
    `}}re=new WeakMap,Me=new WeakMap,Be=new WeakMap,H(_n,"properties",{actions:{attribute:!1},selectedTab:{state:!0},tabs:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-tools-items",_n);var Ne,Ln,ke,Ue;class Dn extends lt{constructor(){super();A(this,Ne);H(this,"_removeButton",i=>vn(this,i));H(this,"_sortButton",i=>bn(this,i,this.unstyled));H(this,"_button",(i,n)=>Or(i,n,this.unstyled));H(this,"_getDefaultTools",i=>{var n,o;return h`
      <div slot="info-content">
        ${eo(this.layer.get("description"))}
      </div>
      <div slot="opacity-content">
        <div class="row">
          <!-- Input for opacity -->
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value=${xn((n=this.layer)==null?void 0:n.getOpacity())}
            class="tiny max"
            @input=${r=>{this.layer.setOpacity(parseFloat(r.target.value)),this.requestUpdate()}}
          />
          <span class="small-text" style="width: 30px; text-align: right">${Math.round(((o=this.layer)==null?void 0:o.getOpacity())*100)}%</span>
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
              @layerConfig:change=${I(this,Ne,Ln)}
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
              @datetime:updated=${r=>Sn(r,this)}
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
      <div slot="remove-icon">${this._removeButton(i.remove)}</div>
      <div slot="sort-icon">${this._sortButton(i.sort)}</div>
    `});A(this,ke,"");A(this,Ue,`
    ${this.embedded?"":bi}
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
  `);this.layer=null,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,setTimeout(()=>{var i;this.embedded=((i=this.parentElement)==null?void 0:i.tagName)==="EOX-LAYERCONTROL-LAYER"}),this.customEditorInterfaces=[]}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const i=yn(this.tools,this.layer),n=mn(this.tools,this.layer),o=i==null?void 0:i.length,r=n==null?void 0:n.length;return h`
      <style>
        ${x(this,ke)}
        ${!this.unstyled&&x(this,Ue)}
      </style>
      ${L(o+r>0,()=>h`
          ${L(!(o===1&&r===0),()=>h`
              <details
                class="tools"
                open=${this.embedded===!1?!0:this.layer.get("layerControlToolsExpand")||yt}
              >
                <summary></summary>
                <eox-layercontrol-tools-items
                  class="${this.toolsAsList?"tools-list":"tools-tab"}"
                  .noShadow=${!1}
                  .actions=${i}
                  .tabs=${n}
                  .unstyled=${this.unstyled}
                  .toolsAsList=${this.toolsAsList}
                >
                  <!-- Rendering tabs and content -->
                  ${ye(n,a=>this._button(a,ee()[a]))}
                  <!-- Including default tools -->
                  ${this._getDefaultTools(ee())}
                </eox-layercontrol-tools-items>
              </details>
            `)}
        `)}
    `}}Ne=new WeakSet,Ln=function(i){this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:i.detail.jsonformValue,layer:i.detail.layer}}))},ke=new WeakMap,Ue=new WeakMap,H(Dn,"properties",{layer:{attribute:!1},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},embedded:{state:!0},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-tools",Dn);const ea=e=>{const t=()=>{const i=Lr(e.layer,e.map,e.showLayerZoomState);let n=!1;!i&&e.currLayerVisibilityBasedOnZoom?(e.currLayerVisibilityBasedOnZoom=!1,n=!0):i&&!e.currLayerVisibilityBasedOnZoom&&(e.currLayerVisibilityBasedOnZoom=!0,n=!0),n&&(e.requestUpdate(),e.dispatchEvent(new CustomEvent("change:resolution",{bubbles:!0})))};pn(e.layer,e.showLayerZoomState)&&(t(),e.map.getView().on("change:resolution",()=>t()))},ia=(e,t)=>{const i=t.layer;i.setVisible(e.target.checked),e.target.checked&&i.get("layerControlExclusive")&&t.closest(`${t.globallyExclusiveLayers?".layers":"eox-layercontrol-layer-list"} > ul`).querySelectorAll("eox-layercontrol-layer").forEach(o=>{var r;o.layer!==i&&((r=o.layer)!=null&&r.get("layerControlExclusive"))&&(o.layer.setVisible(!1),o.requestUpdate())}),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0,detail:i})),t.requestUpdate()};var ct,Ot,In,Fe,qe;class Vn extends lt{constructor(){super();A(this,ct);H(this,"currLayerVisibilityBasedOnZoom",!0);A(this,Fe,"");A(this,qe,`
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
  `);this.layer=null,this.layerType=void 0,this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[]}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){ea(this)}render(){var f,d;const i=this.layer.getVisible(),n=i?"visible":"",o=this.currLayerVisibilityBasedOnZoom?"":"zoom-state-invisible",r=I(this,ct,Ot).call(this,"layerControlDisable")?"disabled":"",a=I(this,ct,Ot).call(this,"layerControlExclusive")?"radio":"checkbox",s=((f=yn(this.tools,this.layer))==null?void 0:f.length)>0,l=((d=mn(this.tools,this.layer))==null?void 0:d.length)>0,u=document.querySelector("eox-layercontrol-layer-tools");return u&&Object.assign(u,{layer:this.layer,tools:this.tools,toolsAsList:this.toolsAsList}),h`
      <style>
        ${x(this,Fe)}
        ${!this.unstyled&&x(this,qe)}
      </style>
      ${L(this.layer,()=>h`
          <!-- Render the layer -->
          <nav
            class="layer ${r} ${n} ${o} responsive tiny-space"
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
            <div class="max truncate drag-handle ${r}">
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
            ${L(!l&&s,()=>this.tools[0]==="remove"?vn(this,ee()[this.tools[0]]):bn(this,ee()[this.tools[0]],!1))}

            <!-- Input element for layer visibility -->
            <label
              class="${r} ${a} icon square primary-text action visibility small"
            >
              <input
                type=${a}
                .checked=${xn(i)}
                @click=${I(this,ct,In)}
                disabled=${r||yt}
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
              <!--<div class="tooltip top" style="pointer-events: none">${i?"Hide":"Show"}</div>-->
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
    `}}ct=new WeakSet,Ot=function(i){var n;return(n=this.layer)==null?void 0:n.get(i)},In=function(i){ia(i,this)},Fe=new WeakMap,qe=new WeakMap,H(Vn,"properties",{layer:{attribute:!1},layerType:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer",Vn);var Ze,Xe;class Rn extends lt{constructor(){super();A(this,Ze,"");A(this,Xe,`
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
  `);this.group=null,this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[]}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var o,r;const i=!!((o=this.group)!=null&&o.get("layerControlExpand")),n=(r=wn(this.group.getLayers()))==null?void 0:r.length;return h`
      <style>
        ${x(this,Ze)}
        ${!this.unstyled&&x(this,Xe)}
      </style>
      ${L(this.group,()=>h`
          <!-- Render the details element with the layer control -->
          <details
            class="max-width"
            open=${i||yt}
            data-children-length=${n}
          >
            <summary class="square">
              ${L(n>0,()=>h`
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
    `}}Ze=new WeakMap,Xe=new WeakMap,H(Rn,"properties",{group:{attribute:!1},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-group",Rn);const na=e=>{const{layers:t,idProperty:i,titleProperty:n,renderRoot:o}=e,r=no(()=>{e.requestUpdate(),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))},50),a=()=>r();if(t&&(t.hasListener("change:length")&&(t==null||t.un("change:length",a)),t.on("change:length",a),t)){const s=o.querySelector("ul");Dr(t,i,n,e),_r(s,t,i,e)}};var je,Ye;class Hn extends lt{constructor(){super();A(this,je,"");A(this,Ye,`
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
  `);this.idProperty="id",this.layers=null,this.map=null,this.tools=void 0,this.titleProperty="title",this.showLayerZoomState=!1,this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[]}firstUpdated(){na(this)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const i=this.layers?wn(this.layers).reverse():[];return h`
      <style>
        ${x(this,je)}
        ${!this.unstyled&&x(this,Ye)}
      </style>
      <ul class="list no-space">
        ${L(this.layers,()=>h`
            ${Gn(i,n=>n,n=>h`
                <li
                  data-layer="${n.get(this.idProperty)}"
                  data-type="${Ni(n,this.map)}"
                  class="square"
                >
                  ${n.getLayers?h`
                          <eox-layercontrol-layer-group
                            .noShadow=${!0}
                            .group=${n}
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
                            .layer=${n}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .layerType=${Ni(n,this.map)}
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
    `}}je=new WeakMap,Ye=new WeakMap,H(Hn,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-list",Hn);const oa=e=>{const t=e.querySelector("select[name=optional]"),i=t?t.value:null,n=Ai(e.layers.getArray(),"layerControlOptional",!0).find(o=>(o.get(e.idProperty)||o.ol_uid)===i);n==null||n.set("layerControlOptional",!1),n==null||n.setVisible(!0),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0})),e.renderRoot.parentNode.querySelectorAll("eox-layercontrol-layer-list").forEach(o=>o.requestUpdate()),e.requestUpdate()};var ze,On;class Pn extends lt{constructor(){super();A(this,ze);this.idProperty="id",this.layers=null,this.titleProperty="title",this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const i=Ai(this.layers.getArray(),"layerControlOptional",!0);return h`
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
            ${i.map(n=>{const o=n.get(this.idProperty)||n.ol_uid,r=n.get(this.titleProperty),a=`layer ${n.get(this.idProperty)}`;return h` <option value="${o}">${r||a}</option> `})}
          </select>

          <!-- Label for the dropdown -->
          <label for="optional">Optional layers</label>
        </div>

        <!-- Button to handle adding layers -->
        <button class="small" @click="${I(this,ze,On)}">Add</button>
      </nav>
    `}}ze=new WeakSet,On=function(){oa(this)},H(Pn,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},titleProperty:{attribute:"title-property",type:String},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-optional-list",Pn);const ra=(e,t)=>{t.jsonInput=e.target.value,t.requestUpdate()},qi=e=>{const t=JSON.parse(`{"data":${Ki(e.jsonInput)}}`);Array.isArray(t.data)?t.data.forEach(i=>{e.eoxMap.addOrUpdateLayer(i)}):e.eoxMap.addOrUpdateLayer(t.data),e.jsonInput=null,e.requestUpdate()},aa=(e,t)=>{t.urlInput=e.target.value,t.requestUpdate()};async function sa(e){const t=e.urlInput;if(e.wmsCapabilities=null,e.searchLoad=!0,e.requestUpdate(),!t)return!1;if(Si(t)==="XYZ")return{Name:t};try{const i=await Jo(t);e.wmsCapabilities=i}catch{}finally{e.searchLoad=!1,e.requestUpdate()}return!1}const la=(e,t)=>{const{Name:i}=e,n=Si(t.urlInput)||"XYZ",o={type:"Tile",properties:{id:i,title:i},source:{type:n,url:t.urlInput,params:{LAYERS:i}}};t.jsonInput=JSON.stringify(o)},ua=(e,t)=>{t.open=e||null,t.urlInput=null,t.jsonInput=null,t.wmsCapabilities=null,t.requestUpdate()};var U,Bn,Nn,vi,kn,Un,xe,We;class Mn extends lt{constructor(){super();A(this,U);H(this,"urlInput",null);H(this,"jsonInput",null);H(this,"open",null);H(this,"searchLoad",!1);H(this,"wmsCapabilities",null);A(this,We,`
    .eox-add-layer-main .open {
      position: relative;
    }
    .eox-add-layer-main .close {
      display: none;
    }
    .field.small > :is(input, textarea, select) {
      font-size: 0.75rem;
    }
  `);this.eoxMap=null,this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const i={add:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
      </svg>`},n=this.open?"open":"close",o=this.open==="url",r=this.open==="json",a=!Ko(this.urlInput)||this.searchLoad?!0:yt;return h`
      <style>
        ${x(this,We)}
      </style>
      <div class="eox-add-layer-main">
        <nav class="eox-add-layer-col">
          <!-- Tabbed interface for URL and JSON -->
          <div
            class="eox-add-layer-tab tabs min left-align ${n}"
          >
            <a
              @click=${()=>I(this,U,xe).call(this,"url")}
              class="${o?"active":""}"
            >
              URL
            </a>
            <a
              @click=${()=>I(this,U,xe).call(this,"json")}
              class="${r?"active":""}"
            >
              JSON
            </a>
          </div>

          <div class="max"></div>

          <!-- Button to toggle tabs -->
          <button
            class="add-icon transparent square primary-text small"
            @click=${()=>I(this,U,xe).call(this,this.open?null:"url")}
          >
            ${this.unstyled?"Add Layer":h`<i class="small primary-text">${i.add}</i>`}
          </button>
        </nav>
        <div class="eox-add ${n}" style="padding: 15px 0">
          ${o?h`
                <nav>
                  <!-- Input field for URL -->
                  <div class="eox-add-layer-col field border small responsive">
                    <input
                      type="text"
                      class="add-url"
                      placeholder="Add URL (WMS/XYZ)"
                      .value="${this.urlInput}"
                      @input=${I(this,U,Bn)}
                    />
                  </div>
                  <!-- Search button for URL -->
                  <button
                    class="search-icon"
                    disabled=${a}
                    @click=${I(this,U,Nn)}
                  >
                    ${this.unstyled?"Search":h`<i class="small">${i.search}</i>`}
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
                                @click=${()=>I(this,U,vi).call(this,s)}
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
                    @input=${I(this,U,Un)}
                    .value=${this.jsonInput}
                  ></textarea>
                </div>

                <!-- Button to add JSON layer -->
                <button
                  class="add-layer-icon json-add-layer small square small-margin"
                  style="position: absolute; bottom: 15px; right: 0; z-index: 1;"
                  disabled=${Qo(this.jsonInput)?yt:!0}
                  @click=${I(this,U,kn)}
                >
                  ${this.unstyled?"Add JSON":h`<i class="small">${i.plus}</i>`}
                </button>
              `}
        </div>
      </div>
    `}}U=new WeakSet,Bn=function(i){aa(i,this)},Nn=async function(){const i=await sa(this);i&&I(this,U,vi).call(this,i)},vi=function(i){la(i,this),qi(this)},kn=function(){qi(this)},Un=function(i){ra(i,this)},xe=function(i){ua(i,this)},We=new WeakMap,H(Mn,"properties",{eoxMap:{attribute:!1,state:!0},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-add-layers",Mn);const ca=(e,t)=>{if(t.requestUpdate(),e.target.tagName==="EOX-LAYERCONTROL-LAYER-TOOLS"){const i=t.renderRoot.querySelector("eox-layercontrol-optional-list");i==null||i.requestUpdate()}},Zi=e=>{const t=oo(e.for);return t&&t.map!==e.map&&(e.map=t.map),t};Wn();var Ct,Ft,qn,Zn,Ge;class Fn extends lt{constructor(){super();A(this,Ft);A(this,Ct);A(this,Ge,`
    ${bi}
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
  `);this.for="eox-map",this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=["info","opacity","datetime","config","remove","sort"],this.addExternalLayers=!1,this.unstyled=!1,this.styleOverride="",this.toolsAsList=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[]}firstUpdated(){this.eoxMap=Zi(this)}updated(i){i.has("for")&&(this.eoxMap=Zi(this))}get eoxMap(){return x(this,Ct)}set eoxMap(i){const n=x(this,Ct);ut(this,Ct,i),this.requestUpdate("eoxMap",n)}render(){var o,r,a;const i=(o=this.map)==null?void 0:o.getLayers().getArray(),n=i&&((r=Ai(i,"layerControlOptional",!0))==null?void 0:r.length)>0;return h`
      <style>
        ${!this.unstyled&&x(this,Ge)}
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
            @changed=${I(this,Ft,qn)}
            @datetime:updated=${s=>Sn(s,this)}
            @layerConfig:change=${I(this,Ft,Zn)}
          ></eox-layercontrol-layer-list>
        `)}

      <!-- Conditional rendering of optional list component -->
      ${L(n,()=>h`
          <eox-layercontrol-optional-list
            .noShadow=${!0}
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .titleProperty=${this.titleProperty}
            @changed=${()=>this.requestUpdate()}
          ></eox-layercontrol-optional-list>
        `)}
    `}}Ct=new WeakMap,Ft=new WeakSet,qn=function(i){ca(i,this),this.dispatchEvent(new CustomEvent("layerchange",{detail:i.detail}))},Zn=function(i){this.dispatchEvent(new CustomEvent("layerConfig:change",{detail:i.detail}))},Ge=new WeakMap,H(Fn,"properties",{for:{type:String},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},addExternalLayers:{attribute:!1},unstyled:{type:Boolean},styleOverride:{type:String},toolsAsList:{type:Boolean},globallyExclusiveLayers:{attribute:"globally-exclusive-layers",type:Boolean},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol",Fn);export{Fn as EOxLayerControl};
