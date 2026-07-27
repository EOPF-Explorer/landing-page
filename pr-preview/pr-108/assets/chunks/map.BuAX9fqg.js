import{j as C,E,A as m}from"./lit-element.CBn2YVps.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},M=t=>(...e)=>({_$litDirective$:t,values:e});let b=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,l){this._$Ct=e,this._$AM=s,this._$Ci=l}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:H}=C,w=t=>t,P=t=>t.strings===void 0,x=()=>document.createComment(""),_=(t,e,s)=>{var u;const l=t._$AA.parentNode,i=e===void 0?t._$AB:e._$AA;if(s===void 0){const r=l.insertBefore(x(),i),c=l.insertBefore(x(),i);s=new H(r,c,t,t.options)}else{const r=s._$AB.nextSibling,c=s._$AM,a=c!==t;if(a){let d;(u=s._$AQ)==null||u.call(s,t),s._$AM=t,s._$AP!==void 0&&(d=t._$AU)!==c._$AU&&s._$AP(d)}if(r!==i||a){let d=s._$AA;for(;d!==r;){const v=w(d).nextSibling;w(l).insertBefore(d,i),d=v}}}return s},h=(t,e,s=t)=>(t._$AI(e,s),t),U={},L=(t,e=U)=>t._$AH=e,N=t=>t._$AH,y=t=>{t._$AR(),t._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=(t,e,s)=>{const l=new Map;for(let i=e;i<=s;i++)l.set(t[i],i);return l},k=M(class extends b{constructor(t){if(super(t),t.type!==I.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let l;s===void 0?s=e:e!==void 0&&(l=e);const i=[],u=[];let r=0;for(const c of t)i[r]=l?l(c,r):r,u[r]=s(c,r),r++;return{values:u,keys:i}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,l]){const i=N(t),{values:u,keys:r}=this.dt(e,s,l);if(!Array.isArray(i))return this.ut=r,u;const c=this.ut??(this.ut=[]),a=[];let d,v,n=0,$=i.length-1,o=0,f=u.length-1;for(;n<=$&&o<=f;)if(i[n]===null)n++;else if(i[$]===null)$--;else if(c[n]===r[o])a[o]=h(i[n],u[o]),n++,o++;else if(c[$]===r[f])a[f]=h(i[$],u[f]),$--,f--;else if(c[n]===r[f])a[f]=h(i[n],u[f]),_(t,a[f+1],i[n]),n++,f--;else if(c[$]===r[o])a[o]=h(i[$],u[o]),_(t,i[n],i[$]),$--,o++;else if(d===void 0&&(d=B(r,o,f),v=B(c,n,$)),d.has(c[n]))if(d.has(c[$])){const A=v.get(r[o]),p=A!==void 0?i[A]:null;if(p===null){const g=_(t,i[n]);h(g,u[o]),a[o]=g}else a[o]=h(p,u[o]),_(t,i[n],p),i[A]=null;o++}else y(i[$]),$--;else y(i[n]),n++;for(;o<=f;){const A=_(t,a[f+1]);h(A,u[o]),a[o++]=A}for(;n<=$;){const A=i[n++];A!==null&&y(A)}return this.ut=r,L(t,a),E}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class T extends b{constructor(e){if(super(e),this.it=m,e.type!==I.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===m||e==null)return this._t=void 0,this.it=e;if(e===E)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const s=[e];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}T.directiveName="unsafeHTML",T.resultType=1;const O=M(T);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*S(t,e){if(t!==void 0){let s=0;for(const l of t)yield e(l,s++)}}export{T as a,O as b,k as c,M as e,b as i,S as o,L as p,P as r,I as t};
