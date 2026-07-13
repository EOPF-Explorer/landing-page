import{j as C,E,A as m}from"./lit-element.CBn2YVps.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},M=t=>(...e)=>({_$litDirective$:t,values:e});let b=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,i,l){this._$Ct=e,this._$AM=i,this._$Ci=l}_$AS(e,i){return this.update(e,i)}update(e,i){return this.render(...i)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:H}=C,w=t=>t,P=t=>t.strings===void 0,x=()=>document.createComment(""),_=(t,e,i)=>{var u;const l=t._$AA.parentNode,s=e===void 0?t._$AB:e._$AA;if(i===void 0){const r=l.insertBefore(x(),s),c=l.insertBefore(x(),s);i=new H(r,c,t,t.options)}else{const r=i._$AB.nextSibling,c=i._$AM,f=c!==t;if(f){let d;(u=i._$AQ)==null||u.call(i,t),i._$AM=t,i._$AP!==void 0&&(d=t._$AU)!==c._$AU&&i._$AP(d)}if(r!==s||f){let d=i._$AA;for(;d!==r;){const v=w(d).nextSibling;w(l).insertBefore(d,s),d=v}}}return i},h=(t,e,i=t)=>(t._$AI(e,i),t),U={},L=(t,e=U)=>t._$AH=e,N=t=>t._$AH,y=t=>{t._$AR(),t._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=(t,e,i)=>{const l=new Map;for(let s=e;s<=i;s++)l.set(t[s],s);return l},k=M(class extends b{constructor(t){if(super(t),t.type!==I.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let l;i===void 0?i=e:e!==void 0&&(l=e);const s=[],u=[];let r=0;for(const c of t)s[r]=l?l(c,r):r,u[r]=i(c,r),r++;return{values:u,keys:s}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,l]){const s=N(t),{values:u,keys:r}=this.dt(e,i,l);if(!Array.isArray(s))return this.ut=r,u;const c=this.ut??(this.ut=[]),f=[];let d,v,n=0,$=s.length-1,o=0,a=u.length-1;for(;n<=$&&o<=a;)if(s[n]===null)n++;else if(s[$]===null)$--;else if(c[n]===r[o])f[o]=h(s[n],u[o]),n++,o++;else if(c[$]===r[a])f[a]=h(s[$],u[a]),$--,a--;else if(c[n]===r[a])f[a]=h(s[n],u[a]),_(t,f[a+1],s[n]),n++,a--;else if(c[$]===r[o])f[o]=h(s[$],u[o]),_(t,s[n],s[$]),$--,o++;else if(d===void 0&&(d=B(r,o,a),v=B(c,n,$)),d.has(c[n]))if(d.has(c[$])){const A=v.get(r[o]),p=A!==void 0?s[A]:null;if(p===null){const g=_(t,s[n]);h(g,u[o]),f[o]=g}else f[o]=h(p,u[o]),_(t,s[n],p),s[A]=null;o++}else y(s[$]),$--;else y(s[n]),n++;for(;o<=a;){const A=_(t,f[a+1]);h(A,u[o]),f[o++]=A}for(;n<=$;){const A=s[n++];A!==null&&y(A)}return this.ut=r,L(t,f),E}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class T extends b{constructor(e){if(super(e),this.it=m,e.type!==I.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===m||e==null)return this._t=void 0,this.it=e;if(e===E)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const i=[e];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}}T.directiveName="unsafeHTML",T.resultType=1;const O=M(T);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*S(t,e){if(t!==void 0){let i=0;for(const l of t)yield e(l,i++)}}export{M as a,O as b,k as c,T as e,b as i,S as o,L as p,P as r,I as t};
