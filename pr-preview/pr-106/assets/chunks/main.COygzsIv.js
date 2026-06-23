var zi=Object.defineProperty;var Ro=e=>{throw TypeError(e)};var Wi=(e,t,o)=>t in e?zi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var I=(e,t,o)=>Wi(e,typeof t!="symbol"?t+"":t,o),Ke=(e,t,o)=>t.has(e)||Ro("Cannot "+o);var x=(e,t,o)=>(Ke(e,t,"read from private field"),o?o.call(e):t.get(e)),T=(e,t,o)=>t.has(e)?Ro("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),ut=(e,t,o,i)=>(Ke(e,t,"write to private field"),i?i.call(e,o):t.set(e,o),o),L=(e,t,o)=>(Ke(e,t,"access private method"),o);import{b as p,E as ue,A as Tt,a as lt,i as po}from"./lit-element.CBn2YVps.js";import{n as V}from"./when.BR7zwNJC.js";import{c as Gi}from"./repeat.Duc9p3Ra.js";import{e as Ji,i as Ki,t as Rt}from"./directive.CvdRHFdJ.js";import{r as Qi,p as tn}from"./directive-helpers.Bj3rQkfn.js";import{o as en}from"./unsafe-html.C2DIGSw-.js";import{o as ye}from"./map.DiiNQ3pp.js";import{e as xo,a as on}from"./addCommonStyleSheet.DvmmsNVm.js";import{X as nn}from"./XYZ.CD7tH8id.js";import{c as ce,g as rn}from"./commonjsHelpers.BosuxZz1.js";import{_ as an}from"./index.BUIxO2d3.js";import{g as sn}from"./getElement.COiK8z0h.js";import"./proj.XUhRMV6f.js";import"./intersectsextent.D2P7AHpG.js";import"./easing.DsNKuFBo.js";/**
 * wms-capabilities @0.6.0
 * @description WMS service Capabilities > JSON, based on openlayers 
 * @license BSD-2-Clause
 * @preserve
 */var E=e=>e!==void 0,zo=(e,t,o)=>t in e?e[t]:e[t]=o;const oe={ELEMENT:1,TEXT:3,CDATA_SECTION:4};class ln{constructor(t){this._parser=new t}toDocument(t){return this._parser.parseFromString(t,"application/xml")}getAllTextContent(t,o){return Ge(t,o).join("")}}function Ge(e,t){return Wo(e,t,[]).join("")}function Wo(e,t,o){if(e.nodeType===oe.CDATA_SECTION||e.nodeType===oe.TEXT)t?o.push(String(e.nodeValue).replace(/(\r\n|\r|\n)/g,"")):o.push(e.nodeValue);else{var i;for(i=e.firstChild;i;i=i.nextSibling)Wo(i,t,o)}return o}function un(e,t,o,i){for(var n=cn(t);n;n=dn(n)){var r=n.namespaceURI||null,a=e[r];if(E(a)){var s=a[n.localName];E(s)&&s.call(i,n,o)}}}function cn(e){let t=e.firstElementChild||e.firstChild;for(;t&&t.nodeType!==oe.ELEMENT;)t=t.nextSibling;return t}function dn(e){let t=e.nextElementSibling||e.nextSibling;for(;t&&t.nodeType!==oe.ELEMENT;)t=t.nextSibling;return t}function F(e,t,o){return hn(e,t,o)}function hn(e,t,o){var i=E(o)?o:{},n,r;for(n=0,r=e.length;n<r;++n)i[e[n]]=t;return i}function Go(e,t){return function(o,i){var n=e.call(E(t)?t:this,o,i);if(E(n)){var r=i[i.length-1];r.push(n)}}}function N(e,t,o,i,n){return i.push(e),un(t,o,i,n),i.pop()}function f(e,t,o){return function(i,n){let r=e.call(E(o)?o:this,i,n);if(E(r)){var a=n[n.length-1],s=E(t)?t:i.localName;a[s]=r}}}function J(e,t,o){return function(i,n){var r=e.call(E(o)?o:this,i,n);if(E(r)){var a=n[n.length-1],s=E(t)?t:i.localName,l=zo(a,s,[]);l.push(r)}}}const pn=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function fn(e){return e.replace(pn,"")}function Lt(e){const t=/^\s*(true|1)|(false|0)\s*$/.exec(e);if(t)return E(t[1])||!1}function Ot(e){return gt(Ge(e,!1))}function gt(e){const t=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(e);if(t)return parseFloat(t[1])}function Qe(e){return xe(Ge(e,!1))}function xe(e){const t=/^\s*(\d+)\s*$/.exec(e);if(t)return parseInt(t[1],10)}function C(e){return fn(Ge(e,!1))}const gn="http://www.w3.org/1999/xlink";function Eo(e){return e.getAttributeNS(gn,"href")}function yn(e,t){return N({},qn,e,t)}function Jo(e){return[gt(e.getAttribute("minx")),gt(e.getAttribute("miny")),gt(e.getAttribute("maxx")),gt(e.getAttribute("maxy"))]}function mn(e,t){const o=Jo(e),i=[gt(e.getAttribute("resx")),gt(e.getAttribute("resy"))];return{crs:e.getAttribute("CRS")||e.getAttribute("SRS"),extent:o,res:i}}function vn(e,t){const o=Jo(e);if(!(!E(o[0])||!E(o[1])||!E(o[2])||!E(o[3])))return o}function bn(e,t){const o=parseFloat(e.getAttribute("min")),i=parseFloat(e.getAttribute("max"));return{min:o,max:i}}function wn(e,t){const o=N({},jn,e,t);if(!E(o))return;const i=o.westBoundLongitude,n=o.southBoundLatitude,r=o.eastBoundLongitude,a=o.northBoundLatitude;if(!(!E(i)||!E(n)||!E(r)||!E(a)))return[i,n,r,a]}function Sn(e,t){return N({},On,e,t)}function xn(e,t){return N({},Bn,e,t)}function En(e,t){return N({},Nn,e,t)}function $n(e,t){return N({},kn,e,t)}function An(e,t){return N({},Un,e,t)}function Tn(e,t){return N([],Fn,e,t)}function Cn(e,t){const o=Lt(e.getAttribute("queryable"));return N({queryable:E(o)?o:!1},ti,e,t)}function _n(e,t){var o=t[t.length-1];const i=N({},ti,e,t);if(!E(i))return;let n=Lt(e.getAttribute("queryable"));E(n)||(n=o.queryable),i.queryable=E(n)?n:!1;let r=xe(e.getAttribute("cascaded"));E(r)||(r=o.cascaded),i.cascaded=r;let a=Lt(e.getAttribute("opaque"));E(a)||(a=o.opaque),i.opaque=E(a)?a:!1;let s=Lt(e.getAttribute("noSubsets"));E(s)||(s=o.noSubsets),i.noSubsets=E(s)?s:!1;let l=gt(e.getAttribute("fixedWidth"));E(l)||(l=o.fixedWidth),i.fixedWidth=l;let u=gt(e.getAttribute("fixedHeight"));E(u)||(u=o.fixedHeight),i.fixedHeight=u;const h=["Style","CRS","AuthorityURL"];for(let g=0,b=h.length;g<b;g++){const y=h[g],S=o[y];if(E(S)){let H=zo(i,y,[]);H=H.concat(S),i[y]=H}}const d=["EX_GeographicBoundingBox","BoundingBox","Dimension","Attribution","MinScaleDenominator","MaxScaleDenominator"];for(let g=0,b=d.length;g<b;g++){const y=d[g],S=i[y];if(!E(S)){const H=o[y];i[y]=H}}return i}function Dn(e,t){return{name:e.getAttribute("name"),units:e.getAttribute("units"),unitSymbol:e.getAttribute("unitSymbol"),default:e.getAttribute("default"),multipleValues:Lt(e.getAttribute("multipleValues")),nearestValue:Lt(e.getAttribute("nearestValue")),current:Lt(e.getAttribute("current")),values:C(e)}}function mt(e,t){return N({},Gn,e,t)}function Vn(e,t){return N({},Zn,e,t)}function Ln(e,t){return N({},Yn,e,t)}function Rn(e,t){return N({},zn,e,t)}function to(e,t){return N({},Xn,e,t)}function Ko(e,t){var o=mt(e,t);if(E(o)){const i=[xe(e.getAttribute("width")),xe(e.getAttribute("height"))];return o.size=i,o}}function In(e,t){var o=mt(e,t);if(E(o))return o.name=e.getAttribute("name"),o}function Pn(e,t){var o=mt(e,t);if(E(o))return o.type=e.getAttribute("type"),o}function Hn(e,t){return N({},Wn,e,t)}function Qo(e,t){return N([],Jn,e,t)}const q=[null,"http://www.opengis.net/wms"],Mn=F(q,{Service:f(xn),Capability:f(Sn)}),On=F(q,{Request:f(Vn),Exception:f(Tn),Layer:f(Cn)}),Bn=F(q,{Name:f(C),Title:f(C),Abstract:f(C),KeywordList:f(Qo),OnlineResource:f(Eo),ContactInformation:f(En),Fees:f(C),AccessConstraints:f(C),LayerLimit:f(Qe),MaxWidth:f(Qe),MaxHeight:f(Qe)}),Nn=F(q,{ContactPersonPrimary:f($n),ContactPosition:f(C),ContactAddress:f(An),ContactVoiceTelephone:f(C),ContactFacsimileTelephone:f(C),ContactElectronicMailAddress:f(C)}),kn=F(q,{ContactPerson:f(C),ContactOrganization:f(C)}),Un=F(q,{AddressType:f(C),Address:f(C),City:f(C),StateOrProvince:f(C),PostCode:f(C),Country:f(C)}),Fn=F(q,{Format:Go(C)}),ti=F(q,{Name:f(C),Title:f(C),Abstract:f(C),KeywordList:f(Qo),CRS:J(C),SRS:J(C),EX_GeographicBoundingBox:f(wn),LatLonBoundingBox:f(vn),BoundingBox:J(mn),Dimension:J(Dn),Attribution:f(yn),AuthorityURL:J(In),Identifier:J(C),MetadataURL:J(Pn),DataURL:J(mt),FeatureListURL:J(mt),Style:J(Hn),MinScaleDenominator:f(Ot),MaxScaleDenominator:f(Ot),ScaleHint:f(bn),Layer:J(_n)}),qn=F(q,{Title:f(C),OnlineResource:f(Eo),LogoURL:f(Ko)}),jn=F(q,{westBoundLongitude:f(Ot),eastBoundLongitude:f(Ot),southBoundLatitude:f(Ot),northBoundLatitude:f(Ot)}),Zn=F(q,{GetCapabilities:f(to),GetMap:f(to),GetFeatureInfo:f(to)}),Xn=F(q,{Format:J(C),DCPType:J(Ln)}),Yn=F(q,{HTTP:f(Rn)}),zn=F(q,{Get:f(mt),Post:f(mt)}),Wn=F(q,{Name:f(C),Title:f(C),Abstract:f(C),LegendURL:J(Ko),StyleSheetURL:f(mt),StyleURL:f(mt)}),Gn=F(q,{Format:f(C),OnlineResource:f(Eo)}),Jn=F(q,{Keyword:Go(C)});class Kn{constructor(t,o){!o&&typeof window<"u"&&(o=window.DOMParser),this.version=void 0,this._parser=new ln(o),this._data=t}data(t){return this._data=t,this}toJSON(t){return t=t||this._data,this.parse(t)}parse(t){return this.readFromDocument(this._parser.toDocument(t))}readFromDocument(t){for(let o=t.firstChild;o;o=o.nextSibling)if(o.nodeType==oe.ELEMENT)return this.readFromNode(o);return null}readFromNode(t){return this.version=t.getAttribute("version"),N({version:this.version},Mn,t,[])||null}}async function Qn(e){let t=new URL(e),o=t.searchParams;o.set("SERVICE","WMS"),o.set("REQUEST","GetCapabilities");let i=t.toString();const n=await fetch(i);if(n.ok){const r=await n.text();return new Kn(r).toJSON()}else throw new Error(`Error: ${n.status}`)}function $o(e){const t=/\b(?:wms|ows)\b/i,o=/{(?:z|x|y-?)}\/{(?:z|x|y-?)}\/{(?:z|x|y-?)}/i;return t.test(e)?"TileWMS":o.test(e)?"XYZ":!1}function tr(e){const o=/^(?:(?:https?|ftp):\/\/|\/\/)?(?:localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:\w+[\w-]*\.)+\w+)(?::\d+)?(?:\/\S*)?$/.test(e),i=$o(e);return!!(e&&o&&i)}function ei(e){return e.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,'"$2": ').replace(/,\s*}/g,"}").replace(/,\s*]/g,"]").replace(/\s*(\{|}|\[|\]|,)\s*/g,"$1").replaceAll('": //',"://")}function er(e){try{return JSON.parse(ei(e)),!!e}catch{return!1}}function eo(e,t){const o=new URL(e).searchParams;Object.entries(t).forEach(([a,s])=>{typeof s=="object"&&!Array.isArray(s)&&s!==null?Object.keys(s).forEach(l=>{o.set(l,s[l])}):Array.isArray(s)?(o.delete(a),s.forEach(l=>{o.append(a,l)})):o.set(a,s)});const i=e.split("?")[0],n=o.toString();return`${i}?${n}`}/**!
 * Sortable 1.15.7
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function or(e,t,o){return(t=ar(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function vt(){return vt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)({}).hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},vt.apply(null,arguments)}function Io(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),o.push.apply(o,i)}return o}function ht(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?Io(Object(o),!0).forEach(function(i){or(e,i,o[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Io(Object(o)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(o,i))})}return e}function ir(e,t){if(e==null)return{};var o,i,n=nr(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],t.indexOf(o)===-1&&{}.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function nr(e,t){if(e==null)return{};var o={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(t.indexOf(i)!==-1)continue;o[i]=e[i]}return o}function rr(e,t){if(typeof e!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var i=o.call(e,t);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ar(e){var t=rr(e,"string");return typeof t=="symbol"?t:t+""}function fo(e){"@babel/helpers - typeof";return fo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fo(e)}var sr="1.15.7";function yt(e){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(e)}var bt=yt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),ae=yt(/Edge/i),Po=yt(/firefox/i),Gt=yt(/safari/i)&&!yt(/chrome/i)&&!yt(/android/i),Ao=yt(/iP(ad|od|hone)/i),oi=yt(/chrome/i)&&yt(/android/i),ii={capture:!1,passive:!1};function A(e,t,o){e.addEventListener(t,o,!bt&&ii)}function $(e,t,o){e.removeEventListener(t,o,!bt&&ii)}function Ee(e,t){if(t){if(t[0]===">"&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch{return!1}return!1}}function ni(e){return e.host&&e!==document&&e.host.nodeType&&e.host!==e?e.host:e.parentNode}function st(e,t,o,i){if(e){o=o||document;do{if(t!=null&&(t[0]===">"?e.parentNode===o&&Ee(e,t):Ee(e,t))||i&&e===o)return e;if(e===o)break}while(e=ni(e))}return null}var Ho=/\s+/g;function tt(e,t,o){if(e&&t)if(e.classList)e.classList[o?"add":"remove"](t);else{var i=(" "+e.className+" ").replace(Ho," ").replace(" "+t+" "," ");e.className=(i+(o?" "+t:"")).replace(Ho," ")}}function m(e,t,o){var i=e&&e.style;if(i){if(o===void 0)return document.defaultView&&document.defaultView.getComputedStyle?o=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(o=e.currentStyle),t===void 0?o:o[t];!(t in i)&&t.indexOf("webkit")===-1&&(t="-webkit-"+t),i[t]=o+(typeof o=="string"?"":"px")}}function Nt(e,t){var o="";if(typeof e=="string")o=e;else do{var i=m(e,"transform");i&&i!=="none"&&(o=i+" "+o)}while(!t&&(e=e.parentNode));var n=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return n&&new n(o)}function ri(e,t,o){if(e){var i=e.getElementsByTagName(t),n=0,r=i.length;if(o)for(;n<r;n++)o(i[n],n);return i}return[]}function dt(){var e=document.scrollingElement;return e||document.documentElement}function O(e,t,o,i,n){if(!(!e.getBoundingClientRect&&e!==window)){var r,a,s,l,u,h,d;if(e!==window&&e.parentNode&&e!==dt()?(r=e.getBoundingClientRect(),a=r.top,s=r.left,l=r.bottom,u=r.right,h=r.height,d=r.width):(a=0,s=0,l=window.innerHeight,u=window.innerWidth,h=window.innerHeight,d=window.innerWidth),(t||o)&&e!==window&&(n=n||e.parentNode,!bt))do if(n&&n.getBoundingClientRect&&(m(n,"transform")!=="none"||o&&m(n,"position")!=="static")){var g=n.getBoundingClientRect();a-=g.top+parseInt(m(n,"border-top-width")),s-=g.left+parseInt(m(n,"border-left-width")),l=a+r.height,u=s+r.width;break}while(n=n.parentNode);if(i&&e!==window){var b=Nt(n||e),y=b&&b.a,S=b&&b.d;b&&(a/=S,s/=y,d/=y,h/=S,l=a+h,u=s+d)}return{top:a,left:s,bottom:l,right:u,width:d,height:h}}}function Mo(e,t,o){for(var i=At(e,!0),n=O(e)[t];i;){var r=O(i)[o],a=void 0;if(a=n>=r,!a)return i;if(i===dt())break;i=At(i,!1)}return!1}function Ut(e,t,o,i){for(var n=0,r=0,a=e.children;r<a.length;){if(a[r].style.display!=="none"&&a[r]!==v.ghost&&(i||a[r]!==v.dragged)&&st(a[r],o.draggable,e,!1)){if(n===t)return a[r];n++}r++}return null}function To(e,t){for(var o=e.lastElementChild;o&&(o===v.ghost||m(o,"display")==="none"||t&&!Ee(o,t));)o=o.previousElementSibling;return o||null}function it(e,t){var o=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)e.nodeName.toUpperCase()!=="TEMPLATE"&&e!==v.clone&&(!t||Ee(e,t))&&o++;return o}function Oo(e){var t=0,o=0,i=dt();if(e)do{var n=Nt(e),r=n.a,a=n.d;t+=e.scrollLeft*r,o+=e.scrollTop*a}while(e!==i&&(e=e.parentNode));return[t,o]}function lr(e,t){for(var o in e)if(e.hasOwnProperty(o)){for(var i in t)if(t.hasOwnProperty(i)&&t[i]===e[o][i])return Number(o)}return-1}function At(e,t){if(!e||!e.getBoundingClientRect)return dt();var o=e,i=!1;do if(o.clientWidth<o.scrollWidth||o.clientHeight<o.scrollHeight){var n=m(o);if(o.clientWidth<o.scrollWidth&&(n.overflowX=="auto"||n.overflowX=="scroll")||o.clientHeight<o.scrollHeight&&(n.overflowY=="auto"||n.overflowY=="scroll")){if(!o.getBoundingClientRect||o===document.body)return dt();if(i||t)return o;i=!0}}while(o=o.parentNode);return dt()}function ur(e,t){if(e&&t)for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);return e}function oo(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}var Jt;function ai(e,t){return function(){if(!Jt){var o=arguments,i=this;o.length===1?e.call(i,o[0]):e.apply(i,o),Jt=setTimeout(function(){Jt=void 0},t)}}}function cr(){clearTimeout(Jt),Jt=void 0}function si(e,t,o){e.scrollLeft+=t,e.scrollTop+=o}function li(e){var t=window.Polymer,o=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):o?o(e).clone(!0)[0]:e.cloneNode(!0)}function ui(e,t,o){var i={};return Array.from(e.children).forEach(function(n){var r,a,s,l;if(!(!st(n,t.draggable,e,!1)||n.animated||n===o)){var u=O(n);i.left=Math.min((r=i.left)!==null&&r!==void 0?r:1/0,u.left),i.top=Math.min((a=i.top)!==null&&a!==void 0?a:1/0,u.top),i.right=Math.max((s=i.right)!==null&&s!==void 0?s:-1/0,u.right),i.bottom=Math.max((l=i.bottom)!==null&&l!==void 0?l:-1/0,u.bottom)}}),i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}var K="Sortable"+new Date().getTime();function dr(){var e=[],t;return{captureAnimationState:function(){if(e=[],!!this.options.animation){var i=[].slice.call(this.el.children);i.forEach(function(n){if(!(m(n,"display")==="none"||n===v.ghost)){e.push({target:n,rect:O(n)});var r=ht({},e[e.length-1].rect);if(n.thisAnimationDuration){var a=Nt(n,!0);a&&(r.top-=a.f,r.left-=a.e)}n.fromRect=r}})}},addAnimationState:function(i){e.push(i)},removeAnimationState:function(i){e.splice(lr(e,{target:i}),1)},animateAll:function(i){var n=this;if(!this.options.animation){clearTimeout(t),typeof i=="function"&&i();return}var r=!1,a=0;e.forEach(function(s){var l=0,u=s.target,h=u.fromRect,d=O(u),g=u.prevFromRect,b=u.prevToRect,y=s.rect,S=Nt(u,!0);S&&(d.top-=S.f,d.left-=S.e),u.toRect=d,u.thisAnimationDuration&&oo(g,d)&&!oo(h,d)&&(y.top-d.top)/(y.left-d.left)===(h.top-d.top)/(h.left-d.left)&&(l=pr(y,g,b,n.options)),oo(d,h)||(u.prevFromRect=h,u.prevToRect=d,l||(l=n.options.animation),n.animate(u,y,d,l)),l&&(r=!0,a=Math.max(a,l),clearTimeout(u.animationResetTimer),u.animationResetTimer=setTimeout(function(){u.animationTime=0,u.prevFromRect=null,u.fromRect=null,u.prevToRect=null,u.thisAnimationDuration=null},l),u.thisAnimationDuration=l)}),clearTimeout(t),r?t=setTimeout(function(){typeof i=="function"&&i()},a):typeof i=="function"&&i(),e=[]},animate:function(i,n,r,a){if(a){m(i,"transition",""),m(i,"transform","");var s=Nt(this.el),l=s&&s.a,u=s&&s.d,h=(n.left-r.left)/(l||1),d=(n.top-r.top)/(u||1);i.animatingX=!!h,i.animatingY=!!d,m(i,"transform","translate3d("+h+"px,"+d+"px,0)"),this.forRepaintDummy=hr(i),m(i,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),m(i,"transform","translate3d(0,0,0)"),typeof i.animated=="number"&&clearTimeout(i.animated),i.animated=setTimeout(function(){m(i,"transition",""),m(i,"transform",""),i.animated=!1,i.animatingX=!1,i.animatingY=!1},a)}}}}function hr(e){return e.offsetWidth}function pr(e,t,o,i){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-o.top,2)+Math.pow(t.left-o.left,2))*i.animation}var It=[],io={initializeByDefault:!0},se={mount:function(t){for(var o in io)io.hasOwnProperty(o)&&!(o in t)&&(t[o]=io[o]);It.forEach(function(i){if(i.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),It.push(t)},pluginEvent:function(t,o,i){var n=this;this.eventCanceled=!1,i.cancel=function(){n.eventCanceled=!0};var r=t+"Global";It.forEach(function(a){o[a.pluginName]&&(o[a.pluginName][r]&&o[a.pluginName][r](ht({sortable:o},i)),o.options[a.pluginName]&&o[a.pluginName][t]&&o[a.pluginName][t](ht({sortable:o},i)))})},initializePlugins:function(t,o,i,n){It.forEach(function(s){var l=s.pluginName;if(!(!t.options[l]&&!s.initializeByDefault)){var u=new s(t,o,t.options);u.sortable=t,u.options=t.options,t[l]=u,vt(i,u.defaults)}});for(var r in t.options)if(t.options.hasOwnProperty(r)){var a=this.modifyOption(t,r,t.options[r]);typeof a<"u"&&(t.options[r]=a)}},getEventProperties:function(t,o){var i={};return It.forEach(function(n){typeof n.eventProperties=="function"&&vt(i,n.eventProperties.call(o[n.pluginName],t))}),i},modifyOption:function(t,o,i){var n;return It.forEach(function(r){t[r.pluginName]&&r.optionListeners&&typeof r.optionListeners[o]=="function"&&(n=r.optionListeners[o].call(t[r.pluginName],i))}),n}};function fr(e){var t=e.sortable,o=e.rootEl,i=e.name,n=e.targetEl,r=e.cloneEl,a=e.toEl,s=e.fromEl,l=e.oldIndex,u=e.newIndex,h=e.oldDraggableIndex,d=e.newDraggableIndex,g=e.originalEvent,b=e.putSortable,y=e.extraEventProperties;if(t=t||o&&o[K],!!t){var S,H=t.options,W="on"+i.charAt(0).toUpperCase()+i.substr(1);window.CustomEvent&&!bt&&!ae?S=new CustomEvent(i,{bubbles:!0,cancelable:!0}):(S=document.createEvent("Event"),S.initEvent(i,!0,!0)),S.to=a||o,S.from=s||o,S.item=n||o,S.clone=r,S.oldIndex=l,S.newIndex=u,S.oldDraggableIndex=h,S.newDraggableIndex=d,S.originalEvent=g,S.pullMode=b?b.lastPutMode:void 0;var B=ht(ht({},y),se.getEventProperties(i,t));for(var Q in B)S[Q]=B[Q];o&&o.dispatchEvent(S),H[W]&&H[W].call(t,S)}}var gr=["evt"],G=function(t,o){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=i.evt,r=ir(i,gr);se.pluginEvent.bind(v)(t,o,ht({dragEl:c,parentEl:P,ghostEl:w,rootEl:D,nextEl:Vt,lastDownEl:me,cloneEl:R,cloneHidden:Et,dragStarted:Yt,putSortable:k,activeSortable:v.active,originalEvent:n,oldIndex:Bt,oldDraggableIndex:Kt,newIndex:et,newDraggableIndex:xt,hideGhostForTarget:pi,unhideGhostForTarget:fi,cloneNowHidden:function(){Et=!0},cloneNowShown:function(){Et=!1},dispatchSortableEvent:function(s){z({sortable:o,name:s,originalEvent:n})}},r))};function z(e){fr(ht({putSortable:k,cloneEl:R,targetEl:c,rootEl:D,oldIndex:Bt,oldDraggableIndex:Kt,newIndex:et,newDraggableIndex:xt},e))}var c,P,w,D,Vt,me,R,Et,Bt,et,Kt,xt,de,k,Ht=!1,$e=!1,Ae=[],_t,at,no,ro,Bo,No,Yt,Pt,Qt,te=!1,he=!1,ve,X,ao=[],go=!1,Te=[],Je=typeof document<"u",pe=Ao,ko=ae||bt?"cssFloat":"float",yr=Je&&!oi&&!Ao&&"draggable"in document.createElement("div"),ci=function(){if(Je){if(bt)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto",e.style.pointerEvents==="auto"}}(),di=function(t,o){var i=m(t),n=parseInt(i.width)-parseInt(i.paddingLeft)-parseInt(i.paddingRight)-parseInt(i.borderLeftWidth)-parseInt(i.borderRightWidth),r=Ut(t,0,o),a=Ut(t,1,o),s=r&&m(r),l=a&&m(a),u=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+O(r).width,h=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+O(a).width;if(i.display==="flex")return i.flexDirection==="column"||i.flexDirection==="column-reverse"?"vertical":"horizontal";if(i.display==="grid")return i.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(r&&s.float&&s.float!=="none"){var d=s.float==="left"?"left":"right";return a&&(l.clear==="both"||l.clear===d)?"vertical":"horizontal"}return r&&(s.display==="block"||s.display==="flex"||s.display==="table"||s.display==="grid"||u>=n&&i[ko]==="none"||a&&i[ko]==="none"&&u+h>n)?"vertical":"horizontal"},mr=function(t,o,i){var n=i?t.left:t.top,r=i?t.right:t.bottom,a=i?t.width:t.height,s=i?o.left:o.top,l=i?o.right:o.bottom,u=i?o.width:o.height;return n===s||r===l||n+a/2===s+u/2},vr=function(t,o){var i;return Ae.some(function(n){var r=n[K].options.emptyInsertThreshold;if(!(!r||To(n))){var a=O(n),s=t>=a.left-r&&t<=a.right+r,l=o>=a.top-r&&o<=a.bottom+r;if(s&&l)return i=n}}),i},hi=function(t){function o(r,a){return function(s,l,u,h){var d=s.options.group.name&&l.options.group.name&&s.options.group.name===l.options.group.name;if(r==null&&(a||d))return!0;if(r==null||r===!1)return!1;if(a&&r==="clone")return r;if(typeof r=="function")return o(r(s,l,u,h),a)(s,l,u,h);var g=(a?s:l).options.group.name;return r===!0||typeof r=="string"&&r===g||r.join&&r.indexOf(g)>-1}}var i={},n=t.group;(!n||fo(n)!="object")&&(n={name:n}),i.name=n.name,i.checkPull=o(n.pull,!0),i.checkPut=o(n.put),i.revertClone=n.revertClone,t.group=i},pi=function(){!ci&&w&&m(w,"display","none")},fi=function(){!ci&&w&&m(w,"display","")};Je&&!oi&&document.addEventListener("click",function(e){if($e)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),$e=!1,!1},!0);var Dt=function(t){if(c){t=t.touches?t.touches[0]:t;var o=vr(t.clientX,t.clientY);if(o){var i={};for(var n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);i.target=i.rootEl=o,i.preventDefault=void 0,i.stopPropagation=void 0,o[K]._onDragOver(i)}}},br=function(t){c&&c.parentNode[K]._isOutsideThisEl(t.target)};function v(e,t){if(!(e&&e.nodeType&&e.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=vt({},t),e[K]=this;var o={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return di(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,s){a.setData("Text",s.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:v.supportPointer!==!1&&"PointerEvent"in window&&(!Gt||Ao),emptyInsertThreshold:5};se.initializePlugins(this,e,o);for(var i in o)!(i in t)&&(t[i]=o[i]);hi(t);for(var n in this)n.charAt(0)==="_"&&typeof this[n]=="function"&&(this[n]=this[n].bind(this));this.nativeDraggable=t.forceFallback?!1:yr,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?A(e,"pointerdown",this._onTapStart):(A(e,"mousedown",this._onTapStart),A(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(A(e,"dragover",this),A(e,"dragenter",this)),Ae.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),vt(this,dr())}v.prototype={constructor:v,_isOutsideThisEl:function(t){!this.el.contains(t)&&t!==this.el&&(Pt=null)},_getDirection:function(t,o){return typeof this.options.direction=="function"?this.options.direction.call(this,t,o,c):this.options.direction},_onTapStart:function(t){if(t.cancelable){var o=this,i=this.el,n=this.options,r=n.preventOnFilter,a=t.type,s=t.touches&&t.touches[0]||t.pointerType&&t.pointerType==="touch"&&t,l=(s||t).target,u=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||l,h=n.filter;if(Cr(i),!c&&!(/mousedown|pointerdown/.test(a)&&t.button!==0||n.disabled)&&!u.isContentEditable&&!(!this.nativeDraggable&&Gt&&l&&l.tagName.toUpperCase()==="SELECT")&&(l=st(l,n.draggable,i,!1),!(l&&l.animated)&&me!==l)){if(Bt=it(l),Kt=it(l,n.draggable),typeof h=="function"){if(h.call(this,t,l,this)){z({sortable:o,rootEl:u,name:"filter",targetEl:l,toEl:i,fromEl:i}),G("filter",o,{evt:t}),r&&t.preventDefault();return}}else if(h&&(h=h.split(",").some(function(d){if(d=st(u,d.trim(),i,!1),d)return z({sortable:o,rootEl:d,name:"filter",targetEl:l,fromEl:i,toEl:i}),G("filter",o,{evt:t}),!0}),h)){r&&t.preventDefault();return}n.handle&&!st(u,n.handle,i,!1)||this._prepareDragStart(t,s,l)}}},_prepareDragStart:function(t,o,i){var n=this,r=n.el,a=n.options,s=r.ownerDocument,l;if(i&&!c&&i.parentNode===r){var u=O(i);if(D=r,c=i,P=c.parentNode,Vt=c.nextSibling,me=i,de=a.group,v.dragged=c,_t={target:c,clientX:(o||t).clientX,clientY:(o||t).clientY},Bo=_t.clientX-u.left,No=_t.clientY-u.top,this._lastX=(o||t).clientX,this._lastY=(o||t).clientY,c.style["will-change"]="all",l=function(){if(G("delayEnded",n,{evt:t}),v.eventCanceled){n._onDrop();return}n._disableDelayedDragEvents(),!Po&&n.nativeDraggable&&(c.draggable=!0),n._triggerDragStart(t,o),z({sortable:n,name:"choose",originalEvent:t}),tt(c,a.chosenClass,!0)},a.ignore.split(",").forEach(function(h){ri(c,h.trim(),so)}),A(s,"dragover",Dt),A(s,"mousemove",Dt),A(s,"touchmove",Dt),a.supportPointer?(A(s,"pointerup",n._onDrop),!this.nativeDraggable&&A(s,"pointercancel",n._onDrop)):(A(s,"mouseup",n._onDrop),A(s,"touchend",n._onDrop),A(s,"touchcancel",n._onDrop)),Po&&this.nativeDraggable&&(this.options.touchStartThreshold=4,c.draggable=!0),G("delayStart",this,{evt:t}),a.delay&&(!a.delayOnTouchOnly||o)&&(!this.nativeDraggable||!(ae||bt))){if(v.eventCanceled){this._onDrop();return}a.supportPointer?(A(s,"pointerup",n._disableDelayedDrag),A(s,"pointercancel",n._disableDelayedDrag)):(A(s,"mouseup",n._disableDelayedDrag),A(s,"touchend",n._disableDelayedDrag),A(s,"touchcancel",n._disableDelayedDrag)),A(s,"mousemove",n._delayedDragTouchMoveHandler),A(s,"touchmove",n._delayedDragTouchMoveHandler),a.supportPointer&&A(s,"pointermove",n._delayedDragTouchMoveHandler),n._dragStartTimer=setTimeout(l,a.delay)}else l()}},_delayedDragTouchMoveHandler:function(t){var o=t.touches?t.touches[0]:t;Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){c&&so(c),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;$(t,"mouseup",this._disableDelayedDrag),$(t,"touchend",this._disableDelayedDrag),$(t,"touchcancel",this._disableDelayedDrag),$(t,"pointerup",this._disableDelayedDrag),$(t,"pointercancel",this._disableDelayedDrag),$(t,"mousemove",this._delayedDragTouchMoveHandler),$(t,"touchmove",this._delayedDragTouchMoveHandler),$(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,o){o=o||t.pointerType=="touch"&&t,!this.nativeDraggable||o?this.options.supportPointer?A(document,"pointermove",this._onTouchMove):o?A(document,"touchmove",this._onTouchMove):A(document,"mousemove",this._onTouchMove):(A(c,"dragend",this),A(D,"dragstart",this._onDragStart));try{document.selection?be(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(t,o){if(Ht=!1,D&&c){G("dragStarted",this,{evt:o}),this.nativeDraggable&&A(document,"dragover",br);var i=this.options;!t&&tt(c,i.dragClass,!1),tt(c,i.ghostClass,!0),v.active=this,t&&this._appendGhost(),z({sortable:this,name:"start",originalEvent:o})}else this._nulling()},_emulateDragOver:function(){if(at){this._lastX=at.clientX,this._lastY=at.clientY,pi();for(var t=document.elementFromPoint(at.clientX,at.clientY),o=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(at.clientX,at.clientY),t!==o);)o=t;if(c.parentNode[K]._isOutsideThisEl(t),o)do{if(o[K]){var i=void 0;if(i=o[K]._onDragOver({clientX:at.clientX,clientY:at.clientY,target:t,rootEl:o}),i&&!this.options.dragoverBubble)break}t=o}while(o=ni(o));fi()}},_onTouchMove:function(t){if(_t){var o=this.options,i=o.fallbackTolerance,n=o.fallbackOffset,r=t.touches?t.touches[0]:t,a=w&&Nt(w,!0),s=w&&a&&a.a,l=w&&a&&a.d,u=pe&&X&&Oo(X),h=(r.clientX-_t.clientX+n.x)/(s||1)+(u?u[0]-ao[0]:0)/(s||1),d=(r.clientY-_t.clientY+n.y)/(l||1)+(u?u[1]-ao[1]:0)/(l||1);if(!v.active&&!Ht){if(i&&Math.max(Math.abs(r.clientX-this._lastX),Math.abs(r.clientY-this._lastY))<i)return;this._onDragStart(t,!0)}if(w){a?(a.e+=h-(no||0),a.f+=d-(ro||0)):a={a:1,b:0,c:0,d:1,e:h,f:d};var g="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");m(w,"webkitTransform",g),m(w,"mozTransform",g),m(w,"msTransform",g),m(w,"transform",g),no=h,ro=d,at=r}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!w){var t=this.options.fallbackOnBody?document.body:D,o=O(c,!0,pe,!0,t),i=this.options;if(pe){for(X=t;m(X,"position")==="static"&&m(X,"transform")==="none"&&X!==document;)X=X.parentNode;X!==document.body&&X!==document.documentElement?(X===document&&(X=dt()),o.top+=X.scrollTop,o.left+=X.scrollLeft):X=dt(),ao=Oo(X)}w=c.cloneNode(!0),tt(w,i.ghostClass,!1),tt(w,i.fallbackClass,!0),tt(w,i.dragClass,!0),m(w,"transition",""),m(w,"transform",""),m(w,"box-sizing","border-box"),m(w,"margin",0),m(w,"top",o.top),m(w,"left",o.left),m(w,"width",o.width),m(w,"height",o.height),m(w,"opacity","0.8"),m(w,"position",pe?"absolute":"fixed"),m(w,"zIndex","100000"),m(w,"pointerEvents","none"),v.ghost=w,t.appendChild(w),m(w,"transform-origin",Bo/parseInt(w.style.width)*100+"% "+No/parseInt(w.style.height)*100+"%")}},_onDragStart:function(t,o){var i=this,n=t.dataTransfer,r=i.options;if(G("dragStart",this,{evt:t}),v.eventCanceled){this._onDrop();return}G("setupClone",this),v.eventCanceled||(R=li(c),R.removeAttribute("id"),R.draggable=!1,R.style["will-change"]="",this._hideClone(),tt(R,this.options.chosenClass,!1),v.clone=R),i.cloneId=be(function(){G("clone",i),!v.eventCanceled&&(i.options.removeCloneOnHide||D.insertBefore(R,c),i._hideClone(),z({sortable:i,name:"clone"}))}),!o&&tt(c,r.dragClass,!0),o?($e=!0,i._loopId=setInterval(i._emulateDragOver,50)):($(document,"mouseup",i._onDrop),$(document,"touchend",i._onDrop),$(document,"touchcancel",i._onDrop),n&&(n.effectAllowed="move",r.setData&&r.setData.call(i,n,c)),A(document,"drop",i),m(c,"transform","translateZ(0)")),Ht=!0,i._dragStartId=be(i._dragStarted.bind(i,o,t)),A(document,"selectstart",i),Yt=!0,window.getSelection().removeAllRanges(),Gt&&m(document.body,"user-select","none")},_onDragOver:function(t){var o=this.el,i=t.target,n,r,a,s=this.options,l=s.group,u=v.active,h=de===l,d=s.sort,g=k||u,b,y=this,S=!1;if(go)return;function H(Xt,Xi){G(Xt,y,ht({evt:t,isOwner:h,axis:b?"vertical":"horizontal",revert:a,dragRect:n,targetRect:r,canSort:d,fromSortable:g,target:i,completed:B,onMove:function(Lo,Yi){return fe(D,o,c,n,Lo,O(Lo),t,Yi)},changed:Q},Xi))}function W(){H("dragOverAnimationCapture"),y.captureAnimationState(),y!==g&&g.captureAnimationState()}function B(Xt){return H("dragOverCompleted",{insertion:Xt}),Xt&&(h?u._hideClone():u._showClone(y),y!==g&&(tt(c,k?k.options.ghostClass:u.options.ghostClass,!1),tt(c,s.ghostClass,!0)),k!==y&&y!==v.active?k=y:y===v.active&&k&&(k=null),g===y&&(y._ignoreWhileAnimating=i),y.animateAll(function(){H("dragOverAnimationComplete"),y._ignoreWhileAnimating=null}),y!==g&&(g.animateAll(),g._ignoreWhileAnimating=null)),(i===c&&!c.animated||i===o&&!i.animated)&&(Pt=null),!s.dragoverBubble&&!t.rootEl&&i!==document&&(c.parentNode[K]._isOutsideThisEl(t.target),!Xt&&Dt(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),S=!0}function Q(){et=it(c),xt=it(c,s.draggable),z({sortable:y,name:"change",toEl:o,newIndex:et,newDraggableIndex:xt,originalEvent:t})}if(t.preventDefault!==void 0&&t.cancelable&&t.preventDefault(),i=st(i,s.draggable,o,!0),H("dragOver"),v.eventCanceled)return S;if(c.contains(t.target)||i.animated&&i.animatingX&&i.animatingY||y._ignoreWhileAnimating===i)return B(!1);if($e=!1,u&&!s.disabled&&(h?d||(a=P!==D):k===this||(this.lastPutMode=de.checkPull(this,u,c,t))&&l.checkPut(this,u,c,t))){if(b=this._getDirection(t,i)==="vertical",n=O(c),H("dragOverValid"),v.eventCanceled)return S;if(a)return P=D,W(),this._hideClone(),H("revert"),v.eventCanceled||(Vt?D.insertBefore(c,Vt):D.appendChild(c)),B(!0);var Y=To(o,s.draggable);if(!Y||Er(t,b,this)&&!Y.animated){if(Y===c)return B(!1);if(Y&&o===t.target&&(i=Y),i&&(r=O(i)),fe(D,o,c,n,i,r,t,!!i)!==!1)return W(),Y&&Y.nextSibling?o.insertBefore(c,Y.nextSibling):o.appendChild(c),P=o,Q(),B(!0)}else if(Y&&xr(t,b,this)){var nt=Ut(o,0,s,!0);if(nt===c)return B(!1);if(i=nt,r=O(i),fe(D,o,c,n,i,r,t,!1)!==!1)return W(),o.insertBefore(c,nt),P=o,Q(),B(!0)}else if(i.parentNode===o){r=O(i);var _=0,j,rt=c.parentNode!==o,Z=!mr(c.animated&&c.toRect||n,i.animated&&i.toRect||r,b),qt=b?"top":"left",wt=Mo(i,"top","top")||Mo(c,"top","top"),jt=wt?wt.scrollTop:void 0;Pt!==i&&(j=r[qt],te=!1,he=!Z&&s.invertSwap||rt),_=$r(t,i,r,b,Z?1:s.swapThreshold,s.invertedSwapThreshold==null?s.swapThreshold:s.invertedSwapThreshold,he,Pt===i);var pt;if(_!==0){var Ct=it(c);do Ct-=_,pt=P.children[Ct];while(pt&&(m(pt,"display")==="none"||pt===w))}if(_===0||pt===i)return B(!1);Pt=i,Qt=_;var Zt=i.nextElementSibling,St=!1;St=_===1;var le=fe(D,o,c,n,i,r,t,St);if(le!==!1)return(le===1||le===-1)&&(St=le===1),go=!0,setTimeout(Sr,30),W(),St&&!Zt?o.appendChild(c):i.parentNode.insertBefore(c,St?Zt:i),wt&&si(wt,0,jt-wt.scrollTop),P=c.parentNode,j!==void 0&&!he&&(ve=Math.abs(j-O(i)[qt])),Q(),B(!0)}if(o.contains(c))return B(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){$(document,"mousemove",this._onTouchMove),$(document,"touchmove",this._onTouchMove),$(document,"pointermove",this._onTouchMove),$(document,"dragover",Dt),$(document,"mousemove",Dt),$(document,"touchmove",Dt)},_offUpEvents:function(){var t=this.el.ownerDocument;$(t,"mouseup",this._onDrop),$(t,"touchend",this._onDrop),$(t,"pointerup",this._onDrop),$(t,"pointercancel",this._onDrop),$(t,"touchcancel",this._onDrop),$(document,"selectstart",this)},_onDrop:function(t){var o=this.el,i=this.options;if(et=it(c),xt=it(c,i.draggable),G("drop",this,{evt:t}),P=c&&c.parentNode,et=it(c),xt=it(c,i.draggable),v.eventCanceled){this._nulling();return}Ht=!1,he=!1,te=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),yo(this.cloneId),yo(this._dragStartId),this.nativeDraggable&&($(document,"drop",this),$(o,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Gt&&m(document.body,"user-select",""),m(c,"transform",""),t&&(Yt&&(t.cancelable&&t.preventDefault(),!i.dropBubble&&t.stopPropagation()),w&&w.parentNode&&w.parentNode.removeChild(w),(D===P||k&&k.lastPutMode!=="clone")&&R&&R.parentNode&&R.parentNode.removeChild(R),c&&(this.nativeDraggable&&$(c,"dragend",this),so(c),c.style["will-change"]="",Yt&&!Ht&&tt(c,k?k.options.ghostClass:this.options.ghostClass,!1),tt(c,this.options.chosenClass,!1),z({sortable:this,name:"unchoose",toEl:P,newIndex:null,newDraggableIndex:null,originalEvent:t}),D!==P?(et>=0&&(z({rootEl:P,name:"add",toEl:P,fromEl:D,originalEvent:t}),z({sortable:this,name:"remove",toEl:P,originalEvent:t}),z({rootEl:P,name:"sort",toEl:P,fromEl:D,originalEvent:t}),z({sortable:this,name:"sort",toEl:P,originalEvent:t})),k&&k.save()):et!==Bt&&et>=0&&(z({sortable:this,name:"update",toEl:P,originalEvent:t}),z({sortable:this,name:"sort",toEl:P,originalEvent:t})),v.active&&((et==null||et===-1)&&(et=Bt,xt=Kt),z({sortable:this,name:"end",toEl:P,originalEvent:t}),this.save()))),this._nulling()},_nulling:function(){G("nulling",this),D=c=P=w=Vt=R=me=Et=_t=at=Yt=et=xt=Bt=Kt=Pt=Qt=k=de=v.dragged=v.ghost=v.clone=v.active=null;var t=this.el;Te.forEach(function(o){t.contains(o)&&(o.checked=!0)}),Te.length=no=ro=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":c&&(this._onDragOver(t),wr(t));break;case"selectstart":t.preventDefault();break}},toArray:function(){for(var t=[],o,i=this.el.children,n=0,r=i.length,a=this.options;n<r;n++)o=i[n],st(o,a.draggable,this.el,!1)&&t.push(o.getAttribute(a.dataIdAttr)||Tr(o));return t},sort:function(t,o){var i={},n=this.el;this.toArray().forEach(function(r,a){var s=n.children[a];st(s,this.options.draggable,n,!1)&&(i[r]=s)},this),o&&this.captureAnimationState(),t.forEach(function(r){i[r]&&(n.removeChild(i[r]),n.appendChild(i[r]))}),o&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,o){return st(t,o||this.options.draggable,this.el,!1)},option:function(t,o){var i=this.options;if(o===void 0)return i[t];var n=se.modifyOption(this,t,o);typeof n<"u"?i[t]=n:i[t]=o,t==="group"&&hi(i)},destroy:function(){G("destroy",this);var t=this.el;t[K]=null,$(t,"mousedown",this._onTapStart),$(t,"touchstart",this._onTapStart),$(t,"pointerdown",this._onTapStart),this.nativeDraggable&&($(t,"dragover",this),$(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(o){o.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Ae.splice(Ae.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!Et){if(G("hideClone",this),v.eventCanceled)return;m(R,"display","none"),this.options.removeCloneOnHide&&R.parentNode&&R.parentNode.removeChild(R),Et=!0}},_showClone:function(t){if(t.lastPutMode!=="clone"){this._hideClone();return}if(Et){if(G("showClone",this),v.eventCanceled)return;c.parentNode==D&&!this.options.group.revertClone?D.insertBefore(R,c):Vt?D.insertBefore(R,Vt):D.appendChild(R),this.options.group.revertClone&&this.animate(c,R),m(R,"display",""),Et=!1}}};function wr(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault()}function fe(e,t,o,i,n,r,a,s){var l,u=e[K],h=u.options.onMove,d;return window.CustomEvent&&!bt&&!ae?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=t,l.from=e,l.dragged=o,l.draggedRect=i,l.related=n||t,l.relatedRect=r||O(t),l.willInsertAfter=s,l.originalEvent=a,e.dispatchEvent(l),h&&(d=h.call(u,l,a)),d}function so(e){e.draggable=!1}function Sr(){go=!1}function xr(e,t,o){var i=O(Ut(o.el,0,o.options,!0)),n=ui(o.el,o.options,w),r=10;return t?e.clientX<n.left-r||e.clientY<i.top&&e.clientX<i.right:e.clientY<n.top-r||e.clientY<i.bottom&&e.clientX<i.left}function Er(e,t,o){var i=O(To(o.el,o.options.draggable)),n=ui(o.el,o.options,w),r=10;return t?e.clientX>n.right+r||e.clientY>i.bottom&&e.clientX>i.left:e.clientY>n.bottom+r||e.clientX>i.right&&e.clientY>i.top}function $r(e,t,o,i,n,r,a,s){var l=i?e.clientY:e.clientX,u=i?o.height:o.width,h=i?o.top:o.left,d=i?o.bottom:o.right,g=!1;if(!a){if(s&&ve<u*n){if(!te&&(Qt===1?l>h+u*r/2:l<d-u*r/2)&&(te=!0),te)g=!0;else if(Qt===1?l<h+ve:l>d-ve)return-Qt}else if(l>h+u*(1-n)/2&&l<d-u*(1-n)/2)return Ar(t)}return g=g||a,g&&(l<h+u*r/2||l>d-u*r/2)?l>h+u/2?1:-1:0}function Ar(e){return it(c)<it(e)?1:-1}function Tr(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,o=t.length,i=0;o--;)i+=t.charCodeAt(o);return i.toString(36)}function Cr(e){Te.length=0;for(var t=e.getElementsByTagName("input"),o=t.length;o--;){var i=t[o];i.checked&&Te.push(i)}}function be(e){return setTimeout(e,0)}function yo(e){return clearTimeout(e)}Je&&A(document,"touchmove",function(e){(v.active||Ht)&&e.cancelable&&e.preventDefault()});v.utils={on:A,off:$,css:m,find:ri,is:function(t,o){return!!st(t,o,t,!1)},extend:ur,throttle:ai,closest:st,toggleClass:tt,clone:li,index:it,nextTick:be,cancelNextTick:yo,detectDirection:di,getChild:Ut,expando:K};v.get=function(e){return e[K]};v.mount=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];t[0].constructor===Array&&(t=t[0]),t.forEach(function(i){if(!i.prototype||!i.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(i));i.utils&&(v.utils=ht(ht({},v.utils),i.utils)),se.mount(i)})};v.create=function(e,t){return new v(e,t)};v.version=sr;var M=[],zt,mo,vo=!1,lo,uo,Ce,Wt;function _r(){function e(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var t in this)t.charAt(0)==="_"&&typeof this[t]=="function"&&(this[t]=this[t].bind(this))}return e.prototype={dragStarted:function(o){var i=o.originalEvent;this.sortable.nativeDraggable?A(document,"dragover",this._handleAutoScroll):this.options.supportPointer?A(document,"pointermove",this._handleFallbackAutoScroll):i.touches?A(document,"touchmove",this._handleFallbackAutoScroll):A(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(o){var i=o.originalEvent;!this.options.dragOverBubble&&!i.rootEl&&this._handleAutoScroll(i)},drop:function(){this.sortable.nativeDraggable?$(document,"dragover",this._handleAutoScroll):($(document,"pointermove",this._handleFallbackAutoScroll),$(document,"touchmove",this._handleFallbackAutoScroll),$(document,"mousemove",this._handleFallbackAutoScroll)),Uo(),we(),cr()},nulling:function(){Ce=mo=zt=vo=Wt=lo=uo=null,M.length=0},_handleFallbackAutoScroll:function(o){this._handleAutoScroll(o,!0)},_handleAutoScroll:function(o,i){var n=this,r=(o.touches?o.touches[0]:o).clientX,a=(o.touches?o.touches[0]:o).clientY,s=document.elementFromPoint(r,a);if(Ce=o,i||this.options.forceAutoScrollFallback||ae||bt||Gt){co(o,this.options,s,i);var l=At(s,!0);vo&&(!Wt||r!==lo||a!==uo)&&(Wt&&Uo(),Wt=setInterval(function(){var u=At(document.elementFromPoint(r,a),!0);u!==l&&(l=u,we()),co(o,n.options,u,i)},10),lo=r,uo=a)}else{if(!this.options.bubbleScroll||At(s,!0)===dt()){we();return}co(o,this.options,At(s,!1),!1)}}},vt(e,{pluginName:"scroll",initializeByDefault:!0})}function we(){M.forEach(function(e){clearInterval(e.pid)}),M=[]}function Uo(){clearInterval(Wt)}var co=ai(function(e,t,o,i){if(t.scroll){var n=(e.touches?e.touches[0]:e).clientX,r=(e.touches?e.touches[0]:e).clientY,a=t.scrollSensitivity,s=t.scrollSpeed,l=dt(),u=!1,h;mo!==o&&(mo=o,we(),zt=t.scroll,h=t.scrollFn,zt===!0&&(zt=At(o,!0)));var d=0,g=zt;do{var b=g,y=O(b),S=y.top,H=y.bottom,W=y.left,B=y.right,Q=y.width,Y=y.height,nt=void 0,_=void 0,j=b.scrollWidth,rt=b.scrollHeight,Z=m(b),qt=b.scrollLeft,wt=b.scrollTop;b===l?(nt=Q<j&&(Z.overflowX==="auto"||Z.overflowX==="scroll"||Z.overflowX==="visible"),_=Y<rt&&(Z.overflowY==="auto"||Z.overflowY==="scroll"||Z.overflowY==="visible")):(nt=Q<j&&(Z.overflowX==="auto"||Z.overflowX==="scroll"),_=Y<rt&&(Z.overflowY==="auto"||Z.overflowY==="scroll"));var jt=nt&&(Math.abs(B-n)<=a&&qt+Q<j)-(Math.abs(W-n)<=a&&!!qt),pt=_&&(Math.abs(H-r)<=a&&wt+Y<rt)-(Math.abs(S-r)<=a&&!!wt);if(!M[d])for(var Ct=0;Ct<=d;Ct++)M[Ct]||(M[Ct]={});(M[d].vx!=jt||M[d].vy!=pt||M[d].el!==b)&&(M[d].el=b,M[d].vx=jt,M[d].vy=pt,clearInterval(M[d].pid),(jt!=0||pt!=0)&&(u=!0,M[d].pid=setInterval((function(){i&&this.layer===0&&v.active._onTouchMove(Ce);var Zt=M[this.layer].vy?M[this.layer].vy*s:0,St=M[this.layer].vx?M[this.layer].vx*s:0;typeof h=="function"&&h.call(v.dragged.parentNode[K],St,Zt,e,Ce,M[this.layer].el)!=="continue"||si(M[this.layer].el,St,Zt)}).bind({layer:d}),24))),d++}while(t.bubbleScroll&&g!==l&&(g=At(g,!1)));vo=u}},30),gi=function(t){var o=t.originalEvent,i=t.putSortable,n=t.dragEl,r=t.activeSortable,a=t.dispatchSortableEvent,s=t.hideGhostForTarget,l=t.unhideGhostForTarget;if(o){var u=i||r;s();var h=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:o,d=document.elementFromPoint(h.clientX,h.clientY);l(),u&&!u.el.contains(d)&&(a("spill"),this.onSpill({dragEl:n,putSortable:i}))}};function Co(){}Co.prototype={startIndex:null,dragStart:function(t){var o=t.oldDraggableIndex;this.startIndex=o},onSpill:function(t){var o=t.dragEl,i=t.putSortable;this.sortable.captureAnimationState(),i&&i.captureAnimationState();var n=Ut(this.sortable.el,this.startIndex,this.options);n?this.sortable.el.insertBefore(o,n):this.sortable.el.appendChild(o),this.sortable.animateAll(),i&&i.animateAll()},drop:gi};vt(Co,{pluginName:"revertOnSpill"});function _o(){}_o.prototype={onSpill:function(t){var o=t.dragEl,i=t.putSortable,n=i||this.sortable;n.captureAnimationState(),o.parentNode&&o.parentNode.removeChild(o),n.animateAll()},drop:gi};vt(_o,{pluginName:"removeOnSpill"});v.mount(new _r);v.mount(_o,Co);const Dr=e=>{const t=e.item;let o=Array.prototype.slice.call(t.parentNode.childNodes);return o=o.filter(i=>i.nodeType!=Node.ELEMENT_NODE||!i.classList.contains("sortable-fallback")),o},Vr=(e,t,o,i,n,r)=>{const s=e.item.parentNode;for(const S of o)s.appendChild(S);if(e.oldIndex==e.newIndex)return;const l=i.getArray(),u=e.item.querySelector("eox-layercontrol-layer").layer.get(n),h=l.find(S=>S.get(n)===u),d=r.dataset.layer,g=l.find(S=>S.get(n)==d);let b,y;for(b=0;b<l.length;b++)if(l[b]==h){i.removeAt(b);break}for(y=0;y<l.length;y++)if(l[y]===g){b>y?i.insertAt(y,h):i.insertAt(y+1,h);break}t.requestUpdate()};function Lr(e,t,o,i){let n=[],r=null;e._sortable=v.create(e,{handle:".drag-handle",filter:".drag-handle.disabled",swapThreshold:.5,animation:150,easing:"cubic-bezier(1, 0, 0, 1)",onStart:a=>{console.log(a),n=Dr(a)},onMove:a=>{r=a.related},onEnd:a=>Vr(a,i,n,t,o,r)})}function Rr(e,t,o,i){const n=e.getArray();let r=!1;n.forEach(a=>{const s=a.ol_uid;a.get(t)||(a.set(t,s),r=!0),a.get(o)||(a.set(o,`layer ${s}`),r=!0),r&&i.requestUpdate()})}function Do(e,t,o){let i=[];const n=(r,a,s)=>{i=[...i,...r.filter(u=>u.get(a)===s)];const l=r.filter(u=>u.getLayers);return l.length>0&&l.forEach(u=>n(u.getLayers().getArray(),a,s)),i};return n(e,t,o),i}function Ir(e,t,o){if(!e||!t)return!1;if(!yi(e,o))return!0;const i=e.get("minZoom"),n=e.get("maxZoom"),r=t.getView().getZoom();return r>i&&r<n}function yi(e,t){const o=e.get("minZoom"),i=e.get("maxZoom");return!!(t&&(o!==-1/0||i!==1/0))}function Fo(e,t){var n,r,a;return!e||!t?void 0:e.getLayers?"group":((a=(n=t.getInteractions().getArray().filter(s=>s.freehand_!==void 0).map(s=>s.source_))==null?void 0:n.ol_uid)==null?void 0:a.includes(e.getSource?(r=e.getSource())==null?void 0:r.ol_uid:void 0))?"draw":e.declutter_!==void 0||e.get("type")==="Vector"?"vector":"raster"}const Pr=(e,t,o)=>{let i=t;o.layer.getSource().getTileUrlFunction()&&(i||(i=o.layer.getSource().getTileUrlFunction()),o.layer.getSource().setTileUrlFunction((...r)=>{var l,u;const a=new URL(i(...r)),s=((u=(l=o.layerConfig.schema)==null?void 0:l.options)==null?void 0:u.removeProperties)??[];return o.layer.getSource()instanceof nn&&(o.layer.getSource()._updatedUrl=eo(o.layer.getSource().getUrls()[0],e)),s.forEach(h=>a.searchParams.delete(h)),eo(a.href,e)}),o.layer.getSource().setKey(new Date));const n=document.querySelector("eox-map");if(n){const r=n.globe;if(r){const a=r.planet.layers.filter(s=>s.name==o.layer.get("id"))[0];a.setUrl(eo(a.url,e)),window.eoxMapGlobe.refresh()}}return i};function Hr(e,t,o){const i="updateStyleVariables"in t,n="setStyle"in t,r=i?t.style_:o.style;let a=r==null?void 0:r.variables;if(a){const s=Vo(e);if(r.variables={...a,...s},i)t.updateStyleVariables(s);else if(n){const l=Mr(r);t.setStyle(l)}}}const Vo=e=>{const t={};for(const o in e)if(typeof e[o]=="object"&&e[o]!==null){const i=Vo(e[o]);for(const n in i)t[n]=i==null?void 0:i[n]}else t[o]=e==null?void 0:e[o];return t};function Mr(e){let t=e;if("variables"in e){let o=JSON.stringify(e);const{variables:i}=e;for(const n in i)typeof i[n]=="number"?o=o.replaceAll(`["var","${n}"]`,String(i[n])):o=o.replaceAll(`["var","${n}"]`,`"${i[n]}"`);t=JSON.parse(o)}return t}const Or=(e,t)=>{if(!e)return;const o=Vo(t);let i,n;return Array.isArray(e)?n=structuredClone(e):n=[structuredClone(e)],i=n.filter(r=>{if(!("boundTo"in r))return!0;const a=r.boundTo.key,s=r.boundTo.value;return a in o&&o[a]==s}),i.length||(i=null),i==null?void 0:i.map(r=>{var a;return delete r.boundTo,!("domainProperties"in r)||"domain"in r?r:(a=Object.keys(r))==null?void 0:a.reduce((s,l)=>(l==="domainProperties"?s.domain=r[l].map(u=>o[u]):s[l]=r[l],s),{})})};function mi(e,t){var i;let o={};for(const n in e){const r=e[n].type;if(r&&r!=="object"&&t[n]!==void 0)o[n]=r==="number"?Number(t[n]):t[n];else if(typeof e[n]=="object"&&((i=e[n])!=null&&i.properties)){const a=mi(e[n].properties,t);Object.keys(a).length>0&&(o[n]=a)}}return o}function Br(e,t){var r,a,s,l,u;if(!t)return null;let o={},i="updateStyleVariables"in e?(r=e.style_)==null?void 0:r.variables:(a=t.style)==null?void 0:a.variables;if((t.type==="style"||t.style)&&i)o=i;else if((l=(s=e.getSource())==null?void 0:s.getTileUrlFunction)!=null&&l.call(s)){const h=new URL(e.getSource().getTileUrlFunction()([0,0,0]));o={};for(const[d,g]of h.searchParams.entries()){const b=h.searchParams.getAll(d);o[d]=b.length>1?b:g}}else return null;const n=mi(((u=t.schema)==null?void 0:u.properties)||t.schema,o);return Object.keys(n).length?n:null}const vi=(e,t)=>e==null?void 0:e.filter(o=>["remove","sort"].filter(i=>t!=null&&t.get("layerControlDisable")?i!=="sort":!0).includes(o)),bi=(e,t)=>e==null?void 0:e.filter(o=>{let i=!0;return["remove","sort"].includes(o)&&(i=!1),o==="info"&&(i=t.get("description")),o==="config"&&(i=t.get("layerConfig")),o==="datetime"&&(i=t.get("layerDatetime")),o==="legend"&&(i=t.get("layerLegend")),i}),Nr=(e,t,o)=>p`
  <button
    slot="${e}-icon"
    class="no-margin transparent square primary-text small"
  >
    ${o?e:p`<i class="small primary-text">${t}</i>`}
  </button>
`,wi=(e,t)=>p`
  <button
    class="remove-icon no-margin transparent square small action"
    @click=${()=>{const{layer:o}=e;o==null||o.set("layerControlOptional",!0),o==null||o.setVisible(!1),e.dispatchEvent(new CustomEvent("changed",{detail:o,bubbles:!0}))}}
  >
    ${e.unstyled?"x":p`<i class="small red-text">${t}</i>`}
  </button>
`,Si=(e,t,o)=>p`
  <button
    class="sort-icon no-margin transparent square primary-text drag-handle small action ${e.layer.get("layerControlDisable")?"disabled":""}"
    style="cursor: ns-resize;"
  >
    ${o?"═":p`<i class="small primary-text">${t}</i>`}
  </button>
`;function ee(){return{dots:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>menu-down</title>
      <path d="M7,10L12,15L17,10H7Z" />
    </svg>`,info:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>information-outline</title>
      <path
        d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
      />
    </svg>`,opacity:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>circle-opacity</title>
      <path
        d="M18 10V8H20V10H18M18 12V10H16V12H18M18 8V6H16V8H18M16 2.84V4H18C17.37 3.54 16.71 3.15 16 2.84M18 4V6H20C19.42 5.25 18.75 4.58 18 4M20 6V8H21.16C20.85 7.29 20.46 6.63 20 6M22 12C22 11.32 21.93 10.65 21.8 10H20V12H22M16 6V4H14V6H16M16 16H18V14H16V16M18 18H20L20 18V16H18V18M16 20H18L18 20V18H16V20M14 21.8C14.7 21.66 15.36 21.44 16 21.16V20H14V21.8M18 14H20V12H18V14M16 8H14V10H16V8M20 16H21.16C21.44 15.36 21.66 14.7 21.8 14H20V16M16 12H14V14H16V12M12 18V16H14V14H12V12H14V10H12V8H14V6H12V4H14V2.2C13.35 2.07 12.69 2 12 2C6.5 2 2 6.5 2 12S6.5 22 12 22V20H14V18H12M14 18H16V16H14V18Z"
      />
    </svg>`,config:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>tune</title>
      <path
        d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z"
      />
    </svg>`,datetime:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>calendar-clock-outline</title>
      <path
        d="M6 1V3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11.1C12.36 22.24 14.09 23 16 23C19.87 23 23 19.87 23 16C23 14.09 22.24 12.36 21 11.1V5C21 3.9 20.11 3 19 3H18V1H16V3H8V1M5 5H19V7H5M5 9H19V9.67C18.09 9.24 17.07 9 16 9C12.13 9 9 12.13 9 16C9 17.07 9.24 18.09 9.67 19H5M16 11.15C18.68 11.15 20.85 13.32 20.85 16C20.85 18.68 18.68 20.85 16 20.85C13.32 20.85 11.15 18.68 11.15 16C11.15 13.32 13.32 11.15 16 11.15M15 13V16.69L18.19 18.53L18.94 17.23L16.5 15.82V13Z"
      />
    </svg>`,legend:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>map-legend</title>
      <path
        d="M9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3L20.34,3.03L15,5.1L9,3M8,5.45V17.15L5,18.31V6.46L8,5.45M10,5.47L14,6.87V18.53L10,17.13V5.47M19,5.7V17.54L16,18.55V6.86L19,5.7M7.46,6.3L5.57,6.97V9.12L7.46,8.45V6.3M7.46,9.05L5.57,9.72V11.87L7.46,11.2V9.05M7.46,11.8L5.57,12.47V14.62L7.46,13.95V11.8M7.46,14.55L5.57,15.22V17.37L7.46,16.7V14.55Z"
      />
    </svg>`,remove:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>delete-outline</title>
      <path
        d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"
      />
    </svg>`,sort:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>drag-horizontal-variant</title>
      <path d="M21 11H3V9H21V11M21 13H3V15H21V13Z" />
    </svg>`}}const xi=e=>{var o;const t=["layerControlHide","layerControlOptional"];return(o=e==null?void 0:e.getArray())==null?void 0:o.filter(i=>t.every(n=>!i.get(n)))};function Ei(e,t){t.dispatchEvent(new CustomEvent("datetime:updated",{detail:e.detail,bubbles:!0}))}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bo=Ji(class extends Ki{constructor(e){if(super(e),e.type!==Rt.PROPERTY&&e.type!==Rt.ATTRIBUTE&&e.type!==Rt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Qi(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===ue||t===Tt)return t;const o=e.element,i=e.name;if(e.type===Rt.PROPERTY){if(t===o[i])return ue}else if(e.type===Rt.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(i))return ue}else if(e.type===Rt.ATTRIBUTE&&o.getAttribute(i)===t+"")return ue;return tn(e),t}});var $i="Expected a function",qo=NaN,kr="[object Symbol]",Ur=/^\s+|\s+$/g,Fr=/^[-+]0x[0-9a-f]+$/i,qr=/^0b[01]+$/i,jr=/^0o[0-7]+$/i,Zr=parseInt,Xr=typeof ce=="object"&&ce&&ce.Object===Object&&ce,Yr=typeof self=="object"&&self&&self.Object===Object&&self,zr=Xr||Yr||Function("return this")(),Wr=Object.prototype,Gr=Wr.toString,Jr=Math.max,Kr=Math.min,ho=function(){return zr.Date.now()};function Qr(e,t,o){var i,n,r,a,s,l,u=0,h=!1,d=!1,g=!0;if(typeof e!="function")throw new TypeError($i);t=jo(t)||0,_e(o)&&(h=!!o.leading,d="maxWait"in o,r=d?Jr(jo(o.maxWait)||0,t):r,g="trailing"in o?!!o.trailing:g);function b(_){var j=i,rt=n;return i=n=void 0,u=_,a=e.apply(rt,j),a}function y(_){return u=_,s=setTimeout(W,t),h?b(_):a}function S(_){var j=_-l,rt=_-u,Z=t-j;return d?Kr(Z,r-rt):Z}function H(_){var j=_-l,rt=_-u;return l===void 0||j>=t||j<0||d&&rt>=r}function W(){var _=ho();if(H(_))return B(_);s=setTimeout(W,S(_))}function B(_){return s=void 0,g&&i?b(_):(i=n=void 0,a)}function Q(){s!==void 0&&clearTimeout(s),u=0,i=l=n=s=void 0}function Y(){return s===void 0?a:B(ho())}function nt(){var _=ho(),j=H(_);if(i=arguments,n=this,l=_,j){if(s===void 0)return y(l);if(d)return s=setTimeout(W,t),b(l)}return s===void 0&&(s=setTimeout(W,t)),a}return nt.cancel=Q,nt.flush=Y,nt}function ta(e,t,o){var i=!0,n=!0;if(typeof e!="function")throw new TypeError($i);return _e(o)&&(i="leading"in o?!!o.leading:i,n="trailing"in o?!!o.trailing:n),Qr(e,t,{leading:i,maxWait:t,trailing:n})}function _e(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function ea(e){return!!e&&typeof e=="object"}function oa(e){return typeof e=="symbol"||ea(e)&&Gr.call(e)==kr}function jo(e){if(typeof e=="number")return e;if(oa(e))return qo;if(_e(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=_e(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Ur,"");var o=qr.test(e);return o||jr.test(e)?Zr(e.slice(2),o?2:8):Fr.test(e)?qo:+e}var ia=ta;const Zo=rn(ia);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=e=>e??Tt;var ot,De,Ve;class Ai extends lt{constructor(){super();T(this,ot,[]);T(this,De,po`
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
  `);T(this,Ve,"");this.unstyled=!1,this.noShadow=!1,this.layer=null}get layerLegend(){return x(this,ot)?x(this,ot).length>1?x(this,ot):x(this,ot)[0]:null}set layerLegend(o){var i;o?Array.isArray(o)?ut(this,ot,o.map((n,r)=>{var a;return{id:(((a=this.layer)==null?void 0:a.get("id"))??"")+r,...n}})):ut(this,ot,[{id:(((i=this.layer)==null?void 0:i.get("id"))??"")+0,...o}]):ut(this,ot,null)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){this.layerLegend&&new ResizeObserver(()=>{var o;ut(this,ot,(o=x(this,ot))==null?void 0:o.map(i=>(this.offsetWidth!==i.width&&(i.width=this.offsetWidth),{...i}))),this.requestUpdate()}).observe(this.renderRoot.querySelector(".legend-container"))}render(){return customElements.get("color-legend")||console.error("Please import `color-legend-element` in order to use layerLegend"),p`
      <style>
        ${x(this,De)}
        ${!this.unstyled&&x(this,Ve)}
      </style>
      ${V(this.layerLegend,()=>p`
          <div class="legend-container">
            <!-- Render color-legend-->
            ${x(this,ot).map((o,i,n)=>p`
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
                ${i!==n.length-1?p`<div class="separator"></div>`:Tt}
              `)}
          </div>
        `)}
    `}}ot=new WeakMap,De=new WeakMap,Ve=new WeakMap,I(Ai,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerLegend:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-legend",Ai);var ft,kt,ie,ne,wo,Le,Re;class Ti extends lt{constructor(){super();T(this,ne);T(this,ft,{});T(this,kt,null);T(this,ie);T(this,Le,po`
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
  `);T(this,Re,po`
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
  `);this.layer=null,this.unstyled=!1,this.noShadow=!1,this.layerConfig=null,this.throttleDataChange=Zo(L(this,ne,wo),1e3),this.customEditorInterfaces=[]}updated(o){if(o.has("layerConfig")){const i=this.layerConfig.type==="style"||this.layerConfig.style?100:1e3;this.throttleDataChange=Zo(L(this,ne,wo),i),this.requestUpdate()}}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){ut(this,kt,Br(this.layer,this.layerConfig)),Object.keys(x(this,ft)).length!==0&&ut(this,kt,x(this,ft)),customElements.get("eox-jsonform")||console.error("Please import @eox/jsonform in order to use layerconfig");const o={disable_edit_json:!0,disable_collapse:!0,disable_properties:!0};return p`
      <style>
        ${x(this,Le)}
        ${!this.unstyled&&x(this,Re)}
      </style>
      ${V(this.layerConfig,()=>p`
          ${V(this.layerConfig.legend,()=>p`
              <eox-layercontrol-layer-legend
                .noShadow=${!0}
                .unstyled=${this.unstyled}
                .layer=${this.layer}
                .layerLegend=${Or(this.layerConfig.legend,x(this,ft))}
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
    `}}ft=new WeakMap,kt=new WeakMap,ie=new WeakMap,ne=new WeakSet,wo=function(o){ut(this,ft,o.detail),this.layerConfig.type==="style"||this.layerConfig.style?"setStyle"in this.layer||"updateStyleVariables"in this.layer?Hr(x(this,ft),this.layer,this.layerConfig):console.error(`Layer type ${this.layer.get("type")??""} does not support styles configuration`):ut(this,ie,Pr(x(this,ft),x(this,ie),this)),this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:o.detail,layer:this.layer}})),this.requestUpdate()},Le=new WeakMap,Re=new WeakMap,I(Ti,"properties",{layer:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},layerConfig:{attribute:!1},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layerconfig",Ti);var Ie,_i,Pe,He;class Ci extends lt{constructor(){super();T(this,Ie);T(this,Pe,"");T(this,He,"");this.unstyled=!1,this.noShadow=!1,this.layerDatetime=null,this.layer=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return customElements.get("eox-timecontrol")||console.error("Please import @eox/timecontrol in order to use layerDatetime"),p`
      <style>
        ${x(this,Pe)}
        ${!this.unstyled&&x(this,He)}
      </style>
      ${V(this.layerDatetime,()=>p`
          <eox-timecontrol
            .initDate=${this.layerDatetime.currentStep?[this.layerDatetime.currentStep]:void 0}
            .controlValues=${[{id:this.layer.get("id"),name:this.layer.get("name")||this.layer.get("title"),timeControlValues:this.layerDatetime.controlValues.map(o=>({date:o}))}]}
            @select=${L(this,Ie,_i)}
            .showUTC=${this.layerDatetime.showUTC||!1}
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
    `}}Ie=new WeakSet,_i=function(o){var a;const i=new Date(o.detail.date[0]),n=(a=this.layerDatetime.controlValues)==null?void 0:a.some(s=>typeof s=="string"&&s.includes("T"));let r;n?r=i.toISOString():r=(l=>`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}-${String(l.getDate()).padStart(2,"0")}`)(i),r!==this.layerDatetime.currentStep&&(this.dispatchEvent(new CustomEvent("datetime:updated",{bubbles:!0,detail:{datetime:r,layer:this.layer}})),this.layerDatetime.currentStep=r,this.requestUpdate())},Pe=new WeakMap,He=new WeakMap,I(Ci,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerDatetime:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-datetime",Ci);var re,Me,Oe;class Di extends lt{constructor(){super();T(this,re,o=>(this.selectedTab===o||this.toolsAsList)&&"highlighted");T(this,Me,`
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
  `);T(this,Oe,`
    ${xo}
    figure {
      padding: var(--padding-vertical) var(--padding);
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
      border-bottom: 1px solid var(--surface-variant);
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
  `);this.actions=[],this.selectedTab=0,this.tabs=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const o=this.tabs,i=this.actions,n=i.length+o.length>1;return p`
      <style>
        ${x(this,Me)}
        ${!this.unstyled&&x(this,Oe)}
      </style>
      <div class="${this.toolsAsList?"listed":"tabbed"}">
        <!-- Navigation for tabs and actions -->
        ${V(n,()=>p`
            <nav>
              ${V(!this.toolsAsList,()=>p`
                  <div>
                    <!-- Labels for tabs -->
                    ${ye(o,(r,a)=>p`
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
                    ${ye(i,r=>p`
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
          ${ye(o,(r,a)=>p`
              ${V(this.toolsAsList,()=>p`
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
              ${V(this.toolsAsList&&a<o.length-1,()=>p`<hr class="small" />`)}
            `)}
        </figure>
      </div>
    `}}re=new WeakMap,Me=new WeakMap,Oe=new WeakMap,I(Di,"properties",{actions:{attribute:!1},selectedTab:{state:!0},tabs:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-tools-items",Di);var Be,Li,Ne,ke;class Vi extends lt{constructor(){super();T(this,Be);I(this,"_removeButton",o=>wi(this,o));I(this,"_sortButton",o=>Si(this,o,this.unstyled));I(this,"_button",(o,i)=>Nr(o,i,this.unstyled));I(this,"_getDefaultTools",o=>{var i,n;return p`
      <div slot="info-content">
        ${en(this.layer.get("description"))}
      </div>
      <div slot="opacity-content">
        <div class="row">
          <!-- Input for opacity -->
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value=${bo((i=this.layer)==null?void 0:i.getOpacity())}
            class="tiny max"
            @input=${r=>{this.layer.setOpacity(parseFloat(r.target.value)),this.requestUpdate()}}
          />
          <span class="small-text" style="width: 30px; text-align: right">${Math.round(((n=this.layer)==null?void 0:n.getOpacity())*100)}%</span>
        </div class="row">
      </div>
      <div slot="config-content">
        <!-- Layer configuration -->
        ${V(this.layer.get("layerConfig"),()=>p`
            <eox-layercontrol-layerconfig
              slot="config-content"
              .layer=${this.layer}
              .noShadow=${!0}
              .layerConfig=${this.layer.get("layerConfig")}
              .unstyled=${this.unstyled}
              .customEditorInterfaces=${this.customEditorInterfaces}
              @changed=${()=>this.requestUpdate()}
              @layerConfig:change=${L(this,Be,Li)}
            ></eox-layercontrol-layerconfig>
          `)}
      </div>
      <div slot="datetime-content">
        <!-- Layer datetime -->
        ${V(this.layer.get("layerDatetime"),()=>p`
            <eox-layercontrol-layer-datetime
              slot="datetime-content"
              .noShadow=${!0}
              .layerDatetime=${this.layer.get("layerDatetime")}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
              @datetime:updated=${r=>Ei(r,this)}
            ></eox-layercontrol-layer-datetime>
          `)}
      </div>
      <div slot="legend-content">
        <!-- Layer legend -->
        ${V(this.layer.get("layerLegend"),()=>p`
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
    `});T(this,Ne,"");T(this,ke,`
    ${this.embedded?"":xo}
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
    :host {
      display: block;
      margin-block: var(--padding-vertical) !important;
    }
    details[open] eox-layercontrol-tools-items {
      display: block;
    }
  `);this.layer=null,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.open=!1,this.toolsAutoExpand=!1,setTimeout(()=>{var i,n,r;const o=this.parentElement||((i=this.getRootNode())==null?void 0:i.host);this.embedded=(o==null?void 0:o.tagName)==="EOX-LAYERCONTROL-LAYER",(typeof this.open>"u"||this.open===!1||this.open===null)&&(this.open=this.toolsAutoExpand?!!((n=this.layer)!=null&&n.getVisible()):this.embedded===!1?!0:!!((r=this.layer)!=null&&r.get("layerControlToolsExpand")))}),this.customEditorInterfaces=[]}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}updated(o){var i;this.toolsAutoExpand&&(o.has("toolsAutoExpand")||o.has("layer"))&&(this.open=!!((i=this.layer)!=null&&i.getVisible()))}render(){const o=vi(this.tools,this.layer),i=bi(this.tools,this.layer),n=o==null?void 0:o.length,r=i==null?void 0:i.length;return p`
      <style>
        ${x(this,Ne)}
        ${!this.unstyled&&x(this,ke)}
      </style>
      ${V(n+r>0,()=>p`
          ${V(!(n===1&&r===0),()=>p`
              <details
                class="tools"
                .open=${bo(this.open)}
                @toggle=${a=>{this.open=a.target.open}}
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
    `}}Be=new WeakSet,Li=function(o){this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:o.detail.jsonformValue,layer:o.detail.layer}}))},Ne=new WeakMap,ke=new WeakMap,I(Vi,"properties",{layer:{attribute:!1},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},open:{type:Boolean,reflect:!0},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},embedded:{state:!0},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-tools",Vi);const na=e=>{const t=()=>{const o=Ir(e.layer,e.map,e.showLayerZoomState);let i=!1;!o&&e.currLayerVisibilityBasedOnZoom?(e.currLayerVisibilityBasedOnZoom=!1,i=!0):o&&!e.currLayerVisibilityBasedOnZoom&&(e.currLayerVisibilityBasedOnZoom=!0,i=!0),i&&(e.requestUpdate(),e.dispatchEvent(new CustomEvent("change:resolution",{bubbles:!0})))};yi(e.layer,e.showLayerZoomState)&&(t(),e.map.getView().on("change:resolution",()=>t()))},ra=(e,t)=>{const o=t.layer;if(o.setVisible(e.target.checked),t.toolsAutoExpand){const i=t.renderRoot.querySelector("eox-layercontrol-layer-tools");i&&(i.open=e.target.checked)}e.target.checked&&o.get("layerControlExclusive")&&t.closest(`${t.globallyExclusiveLayers?".layers":"eox-layercontrol-layer-list"} > ul`).querySelectorAll("eox-layercontrol-layer").forEach(n=>{var r;if(n.layer!==o&&((r=n.layer)!=null&&r.get("layerControlExclusive"))){if(n.layer.setVisible(!1),n.toolsAutoExpand){const a=n.renderRoot.querySelector("eox-layercontrol-layer-tools");a&&(a.open=!1)}n.requestUpdate()}}),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0,detail:o})),t.requestUpdate()};var ct,Mt,Ii,Ue,Fe;class Ri extends lt{constructor(){super();T(this,ct);I(this,"currLayerVisibilityBasedOnZoom",!0);T(this,Ue,"");T(this,Fe,`
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
    eox-layercontrol-layer:has(eox-layercontrol-layer-tools[open]) .action.tools.dots {
      transform: rotate(180deg);
    }
    eox-layercontrol-layer > nav > .action.visibility {
      padding: .3rem;
      transform: translateX(.3rem);
    }
    eox-layercontrol-layer > nav > .action.visibility span::after {
      border-radius: 0.25rem !important;
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
  `);this.layer=null,this.layerType=void 0,this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[]}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){na(this)}render(){var h,d;const o=this.layer.getVisible(),i=o?"visible":"",n=this.currLayerVisibilityBasedOnZoom?"":"zoom-state-invisible",r=L(this,ct,Mt).call(this,"layerControlDisable")?"disabled":"",a=L(this,ct,Mt).call(this,"layerControlExclusive")?"radio":"checkbox",s=((h=vi(this.tools,this.layer))==null?void 0:h.length)>0,l=((d=bi(this.tools,this.layer))==null?void 0:d.length)>0,u=document.querySelector("eox-layercontrol-layer-tools");return u&&Object.assign(u,{layer:this.layer,tools:this.tools,toolsAsList:this.toolsAsList}),p`
      <style>
        ${x(this,Ue)}
        ${!this.unstyled&&x(this,Fe)}
        
        /* Make sure the CSS variable is applied to the layer type icon */
        .small.grey-text {
          display: var(--layer-type-visibility);
        }
      </style>
      ${V(this.layer,()=>p`
          <!-- Render the layer -->
          <nav
            class="layer ${r} ${i} ${n} responsive tiny-space"
          >
            ${V(!this.unstyled,()=>{if(L(this,ct,Mt).call(this,"color"))return p`
                  <i class="small" style="color: ${L(this,ct,Mt).call(this,"color")}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>square-rounded</title>
                      <path
                        d="M8 3H16C18.76 3 21 5.24 21 8V16C21 18.76 18.76 21 16 21H8C5.24 21 3 18.76 3 16V8C3 5.24 5.24 3 8 3Z"
                      />
                    </svg>
                  </i>
                `;switch(this.layerType){case"group":return p` <i class="small"> </i> `;case"draw":return p`
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
                  `;case"vector":return p`
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
                  `;case"raster":return p`
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
                  `;default:return p` <i class="small grey-text"> </i> `}})}

            <!-- Layer title -->
            <div class="max truncate drag-handle ${r}">
              <span class="layertitle truncate"
                >${L(this,ct,Mt).call(this,this.titleProperty)}</span
              >
            </div>

            ${V(l&&!this.toolsAutoExpand,()=>p`
                <button
                  class="transparent square primary-text small action tools ${this.tools.length===1?this.tools[0]:"dots"}"
                  @click=${()=>{const g=this.renderRoot.querySelector("eox-layercontrol-layer-tools");g.open=!g.open}}
                >
                  <i class="small">
                    ${ee()[this.tools.length>1?"dots":this.tools[0]]}
                  </i>
                  <!--<span class="tooltip top" style="pointer-events: none">Tools</span>-->
                </button>
              `)}
            ${V(!l&&s,()=>this.tools[0]==="remove"?wi(this,ee()[this.tools[0]]):Si(this,ee()[this.tools[0]],!1))}

            <!-- Input element for layer visibility -->
            <label
              class="${r} ${a} icon primary-text action visibility small"
            >
              <input
                type=${a}
                .checked=${bo(o)}
                @click=${L(this,ct,Ii)}
                disabled=${r||Tt}
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
              <!--<span class="tooltip top" style="pointer-events: none">${o?"Hide":"Show"}</span>-->
            </label>
          </nav>
        `)}

      <!-- Render layer tools -->
      ${V(l&&!u,()=>p`
          <eox-layercontrol-layer-tools
            .noShadow=${!1}
            .layer=${this.layer}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
            .toolsAsList=${this.toolsAsList}
            .toolsAutoExpand=${this.toolsAutoExpand}
            .customEditorInterfaces=${this.customEditorInterfaces}
          ></eox-layercontrol-layer-tools>
        `)}
    `}}ct=new WeakSet,Mt=function(o){var i;return(i=this.layer)==null?void 0:i.get(o)},Ii=function(o){ra(o,this)},Ue=new WeakMap,Fe=new WeakMap,I(Ri,"properties",{layer:{attribute:!1},layerType:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer",Ri);var qe,je;class Pi extends lt{constructor(){super();T(this,qe,"");T(this,je,`
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
  `);this.group=null,this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[]}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var n,r;const o=!!((n=this.group)!=null&&n.get("layerControlExpand")),i=(r=xi(this.group.getLayers()))==null?void 0:r.length;return p`
      <style>
        ${x(this,qe)}
        ${!this.unstyled&&x(this,je)}
      </style>
      ${V(this.group,()=>p`
          <!-- Render the details element with the layer control -->
          <details
            class="max-width"
            open=${o||Tt}
            data-children-length=${i}
          >
            <summary class="square">
              ${V(i>0,()=>p`
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
                .toolsAutoExpand=${this.toolsAutoExpand}
                .customEditorInterfaces=${this.customEditorInterfaces}
                @changed=${()=>this.requestUpdate()}
              ></eox-layercontrol-layer>
            </summary>

            <!-- Render the list of layers within the details -->
            <eox-layercontrol-layer-list
              .noShadow=${this.noShadow}
              .idProperty=${this.idProperty}
              .layers=${this.group.getLayers()}
              .map=${this.map}
              .titleProperty=${this.titleProperty}
              .showLayerZoomState=${this.showLayerZoomState}
              .tools=${this.tools}
              .unstyled=${this.unstyled}
              .toolsAsList=${this.toolsAsList}
              .globallyExclusiveLayers=${this.globallyExclusiveLayers}
              .toolsAutoExpand=${this.toolsAutoExpand}
              .customEditorInterfaces=${this.customEditorInterfaces}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-list>
          </details>
        `)}
    `}}qe=new WeakMap,je=new WeakMap,I(Pi,"properties",{group:{attribute:!1},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-group",Pi);const aa=e=>{const{layers:t,idProperty:o,titleProperty:i,renderRoot:n}=e,r=an(()=>{e.requestUpdate(),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))},50),a=()=>r();if(t&&(t.hasListener("change:length")&&(t==null||t.un("change:length",a)),t.on("change:length",a),t)){const s=n.querySelector("ul");Rr(t,o,i,e),Lr(s,t,o,e)}};var Ze,Xe;class Hi extends lt{constructor(){super();T(this,Ze,"");T(this,Xe,`
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
    .list.no-space {
      margin-block: var(--padding-inline) !important;
    }
    .list.no-space li.square {
      padding: 0;
    }
  `);this.idProperty="id",this.layers=null,this.map=null,this.tools=void 0,this.titleProperty="title",this.showLayerZoomState=!1,this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[]}firstUpdated(){aa(this)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const o=this.layers?xi(this.layers).reverse():[];return p`
      <style>
        ${x(this,Ze)}
        ${!this.unstyled&&x(this,Xe)}
      </style>
      <ul class="list no-space">
        ${V(this.layers,()=>p`
            ${Gi(o,i=>i,i=>p`
                <li
                  data-layer="${i.get(this.idProperty)}"
                  data-type="${Fo(i,this.map)}"
                  class="square"
                >
                  ${i.getLayers?p`
                          <eox-layercontrol-layer-group
                            .noShadow=${this.noShadow}
                            .group=${i}
                            .idProperty=${this.idProperty}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
                            .toolsAutoExpand=${this.toolsAutoExpand}
                            .customEditorInterfaces=${this.customEditorInterfaces}
                            @changed=${()=>this.requestUpdate()}
                          >
                          </eox-layercontrol-layer-group>
                        `:p`
                          <eox-layercontrol-layer
                            .noShadow=${this.noShadow}
                            .layer=${i}
                            .layerType=${Fo(i,this.map)}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
                            .toolsAutoExpand=${this.toolsAutoExpand}
                            .customEditorInterfaces=${this.customEditorInterfaces}
                            @changed=${()=>this.requestUpdate()}
                          ></eox-layercontrol-layer>
                        `}
                </li>
              `)}
          `)}
      </ul>
    `}}Ze=new WeakMap,Xe=new WeakMap,I(Hi,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-list",Hi);const sa=e=>{const t=e.querySelector("select[name=optional]"),o=t?t.value:null,i=Do(e.layers.getArray(),"layerControlOptional",!0).find(n=>(n.get(e.idProperty)||n.ol_uid)===o);i==null||i.set("layerControlOptional",!1),i==null||i.setVisible(!0),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0})),e.renderRoot.parentNode.querySelectorAll("eox-layercontrol-layer-list").forEach(n=>n.requestUpdate()),e.requestUpdate()};var Ye,Oi;class Mi extends lt{constructor(){super();T(this,Ye);this.idProperty="id",this.layers=null,this.titleProperty="title",this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const o=Do(this.layers.getArray(),"layerControlOptional",!0);return p`
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
            ${o.map(i=>{const n=i.get(this.idProperty)||i.ol_uid,r=i.get(this.titleProperty),a=`layer ${i.get(this.idProperty)}`;return p` <option value="${n}">${r||a}</option> `})}
          </select>

          <!-- Label for the dropdown -->
          <label for="optional">Optional layers</label>
        </div>

        <!-- Button to handle adding layers -->
        <button class="small" @click="${L(this,Ye,Oi)}">Add</button>
      </nav>
    `}}Ye=new WeakSet,Oi=function(){sa(this)},I(Mi,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},titleProperty:{attribute:"title-property",type:String},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-optional-list",Mi);const la=(e,t)=>{t.jsonInput=e.target.value,t.requestUpdate()},Xo=e=>{const t=JSON.parse(`{"data":${ei(e.jsonInput)}}`);Array.isArray(t.data)?t.data.forEach(o=>{e.eoxMap.addOrUpdateLayer(o)}):e.eoxMap.addOrUpdateLayer(t.data),e.jsonInput=null,e.requestUpdate()},ua=(e,t)=>{t.urlInput=e.target.value,t.requestUpdate()};async function ca(e){const t=e.urlInput;if(e.wmsCapabilities=null,e.searchLoad=!0,e.requestUpdate(),!t)return!1;if($o(t)==="XYZ")return{Name:t};try{const o=await Qn(t);e.wmsCapabilities=o}catch{}finally{e.searchLoad=!1,e.requestUpdate()}return!1}const da=(e,t)=>{const{Name:o}=e,i=$o(t.urlInput)||"XYZ",n={type:"Tile",properties:{id:o,title:o},source:{type:i,url:t.urlInput,params:{LAYERS:o}}};t.jsonInput=JSON.stringify(n)},ha=(e,t)=>{t.open=e||null,t.urlInput=null,t.jsonInput=null,t.wmsCapabilities=null,t.requestUpdate()};var U,Ni,ki,So,Ui,Fi,Se,ze;class Bi extends lt{constructor(){super();T(this,U);I(this,"urlInput",null);I(this,"jsonInput",null);I(this,"open",null);I(this,"searchLoad",!1);I(this,"wmsCapabilities",null);T(this,ze,`
    .eox-add-layer-main .open {
      position: relative;
    }
    .eox-add-layer-main .close {
      display: none;
    }
    .field.small > :is(input, textarea, select) {
      font-size: 0.75rem;
    }
  `);this.eoxMap=null,this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const o={add:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>layers-plus</title>
        <path
          d="M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z"
        />
      </svg>`,plus:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>plus</title>
        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
      </svg>`,search:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>magnify</title>
        <path
          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
        />
      </svg>`},i=this.open?"open":"close",n=this.open==="url",r=this.open==="json",a=!tr(this.urlInput)||this.searchLoad?!0:Tt;return p`
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
              @click=${()=>L(this,U,Se).call(this,"url")}
              class="${n?"active":""}"
            >
              URL
            </a>
            <a
              @click=${()=>L(this,U,Se).call(this,"json")}
              class="${r?"active":""}"
            >
              JSON
            </a>
          </div>

          <div class="max"></div>

          <!-- Button to toggle tabs -->
          <button
            class="add-icon transparent square primary-text small"
            @click=${()=>L(this,U,Se).call(this,this.open?null:"url")}
          >
            ${this.unstyled?"Add Layer":p`<i class="small primary-text">${o.add}</i>`}
          </button>
        </nav>
        <div class="eox-add ${i}" style="padding: 15px 0">
          ${n?p`
                <nav>
                  <!-- Input field for URL -->
                  <div class="eox-add-layer-col field border small responsive">
                    <input
                      type="text"
                      class="add-url"
                      placeholder="Add URL (WMS/XYZ)"
                      .value="${this.urlInput}"
                      @input=${L(this,U,Ni)}
                    />
                  </div>
                  <!-- Search button for URL -->
                  <button
                    class="search-icon"
                    disabled=${a}
                    @click=${L(this,U,ki)}
                  >
                    ${this.unstyled?"Search":p`<i class="small">${o.search}</i>`}
                  </button>
                </nav>

                <!-- Display layers for WMS capabilities -->
                ${this.wmsCapabilities?p`<ul class="search-lists">
                      ${this.wmsCapabilities.Capability.Layer.Layer.map(s=>{const l=s.Name;return p`
                            <li class="search-list">
                              ${l}
                              <!-- Button to add layer -->
                              <button
                                class="add-layer-icon icon"
                                @click=${()=>L(this,U,So).call(this,s)}
                              >
                                ${this.unstyled?"+":""}
                              </button>
                            </li>
                          `})}
                    </ul>`:Tt}
              `:p`
                <!-- Textarea for JSON input -->
                <div class="field small border no-margin">
                  <textarea
                    class="add-layer-input small"
                    style="overflow-wrap: break-word; font-family: monospace;"
                    placeholder="Please input a valid eox-map layer JSON."
                    @input=${L(this,U,Fi)}
                    .value=${this.jsonInput}
                  ></textarea>
                </div>

                <!-- Button to add JSON layer -->
                <button
                  class="add-layer-icon json-add-layer small square small-margin"
                  style="position: absolute; bottom: 15px; right: 0; z-index: 1;"
                  disabled=${er(this.jsonInput)?Tt:!0}
                  @click=${L(this,U,Ui)}
                >
                  ${this.unstyled?"Add JSON":p`<i class="small">${o.plus}</i>`}
                </button>
              `}
        </div>
      </div>
    `}}U=new WeakSet,Ni=function(o){ua(o,this)},ki=async function(){const o=await ca(this);o&&L(this,U,So).call(this,o)},So=function(o){da(o,this),Xo(this)},Ui=function(){Xo(this)},Fi=function(o){la(o,this)},Se=function(o){ha(o,this)},ze=new WeakMap,I(Bi,"properties",{eoxMap:{attribute:!1,state:!0},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-add-layers",Bi);const pa=(e,t)=>{if(t.requestUpdate(),e.target.tagName==="EOX-LAYERCONTROL-LAYER-TOOLS"){const o=t.renderRoot.querySelector("eox-layercontrol-optional-list");o==null||o.requestUpdate()}},Yo=e=>{const t=sn(e.for);return t&&t.map!==e.map&&(e.map=t.map),t};on();var $t,Ft,ji,Zi,We;class qi extends lt{constructor(){super();T(this,Ft);T(this,$t);T(this,We,`
    ${xo}
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
    summary > * {
      pointer-events: all !important;
    }
  `);this.for="eox-map",this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=["info","opacity","datetime","config","remove","sort"],this.addExternalLayers=!1,this.unstyled=!1,this.styleOverride="",this.toolsAsList=!1,this.globallyExclusiveLayers=!1,this.toolsAutoExpand=!1,this.customEditorInterfaces=[]}firstUpdated(){this.eoxMap=Yo(this)}updated(o){o.has("for")&&(this.eoxMap=Yo(this))}get eoxMap(){return x(this,$t)}set eoxMap(o){const i=x(this,$t);ut(this,$t,o),this.requestUpdate("eoxMap",i)}render(){var n,r,a;const o=(n=this.map)==null?void 0:n.getLayers().getArray(),i=o&&((r=Do(o,"layerControlOptional",!0))==null?void 0:r.length)>0;return p`
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
      ${V(this.addExternalLayers&&((a=x(this,$t))==null?void 0:a.addOrUpdateLayer),()=>p`
          <eox-layercontrol-add-layers
            .noShadow=${!0}
            .eoxMap=${x(this,$t)}
            .unstyled=${this.unstyled}
          ></eox-layercontrol-add-layers>
        `)}

      <!-- Conditional rendering of layer list component -->
      ${V(this.map,()=>p`
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
            .toolsAutoExpand=${this.toolsAutoExpand}
            .customEditorInterfaces=${this.customEditorInterfaces}
            @changed=${L(this,Ft,ji)}
            @datetime:updated=${s=>Ei(s,this)}
            @layerConfig:change=${L(this,Ft,Zi)}
          ></eox-layercontrol-layer-list>
        `)}

      <!-- Conditional rendering of optional list component -->
      ${V(i,()=>p`
          <eox-layercontrol-optional-list
            .noShadow=${!0}
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .titleProperty=${this.titleProperty}
            @changed=${()=>this.requestUpdate()}
          ></eox-layercontrol-optional-list>
        `)}
    `}}$t=new WeakMap,Ft=new WeakSet,ji=function(o){pa(o,this),this.dispatchEvent(new CustomEvent("layerchange",{detail:o.detail}))},Zi=function(o){this.dispatchEvent(new CustomEvent("layerConfig:change",{detail:o.detail}))},We=new WeakMap,I(qi,"properties",{for:{type:String},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{type:Array},addExternalLayers:{attribute:"add-external-layers",type:Boolean},unstyled:{type:Boolean},styleOverride:{type:String},toolsAsList:{type:Boolean},globallyExclusiveLayers:{attribute:"globally-exclusive-layers",type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},customEditorInterfaces:{type:Array}});customElements.define("eox-layercontrol",qi);export{qi as EOxLayerControl,Mr as updateVectorLayerStyle};
