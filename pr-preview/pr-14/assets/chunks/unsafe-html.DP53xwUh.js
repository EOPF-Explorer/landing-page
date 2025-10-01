import{Z as C,T as B,E as m}from"./addCommonStyleSheet.BIp1szw2.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*R(t,e){if(t!==void 0){let s=0;for(const l of t)yield e(l,s++)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},I=t=>(...e)=>({_$litDirective$:t,values:e});class M{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,l){this._$Ct=e,this._$AM=s,this._$Ci=l}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:H}=C,D=t=>t.strings===void 0,w=()=>document.createComment(""),$=(t,e,s)=>{var u;const l=t._$AA.parentNode,i=e===void 0?t._$AB:e._$AA;if(s===void 0){const r=l.insertBefore(w(),i),c=l.insertBefore(w(),i);s=new H(r,c,t,t.options)}else{const r=s._$AB.nextSibling,c=s._$AM,d=c!==t;if(d){let A;(u=s._$AQ)==null||u.call(s,t),s._$AM=t,s._$AP!==void 0&&(A=t._$AU)!==c._$AU&&s._$AP(A)}if(r!==i||d){let A=s._$AA;for(;A!==r;){const v=A.nextSibling;l.insertBefore(A,i),A=v}}}return s},_=(t,e,s=t)=>(t._$AI(e,s),t),U={},b=(t,e=U)=>t._$AH=e,L=t=>t._$AH,y=t=>{t._$AR(),t._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=(t,e,s)=>{const l=new Map;for(let i=e;i<=s;i++)l.set(t[i],i);return l},P=I(class extends M{constructor(t){if(super(t),t.type!==E.CHILD)throw Error("repeat() can only be used in text expressions")}dt(t,e,s){let l;s===void 0?s=e:e!==void 0&&(l=e);const i=[],u=[];let r=0;for(const c of t)i[r]=l?l(c,r):r,u[r]=s(c,r),r++;return{values:u,keys:i}}render(t,e,s){return this.dt(t,e,s).values}update(t,[e,s,l]){const i=L(t),{values:u,keys:r}=this.dt(e,s,l);if(!Array.isArray(i))return this.ut=r,u;const c=this.ut??(this.ut=[]),d=[];let A,v,n=0,f=i.length-1,o=0,a=u.length-1;for(;n<=f&&o<=a;)if(i[n]===null)n++;else if(i[f]===null)f--;else if(c[n]===r[o])d[o]=_(i[n],u[o]),n++,o++;else if(c[f]===r[a])d[a]=_(i[f],u[a]),f--,a--;else if(c[n]===r[a])d[a]=_(i[n],u[a]),$(t,d[a+1],i[n]),n++,a--;else if(c[f]===r[o])d[o]=_(i[f],u[o]),$(t,i[n],i[f]),f--,o++;else if(A===void 0&&(A=x(r,o,a),v=x(c,n,f)),A.has(c[n]))if(A.has(c[f])){const h=v.get(r[o]),p=h!==void 0?i[h]:null;if(p===null){const g=$(t,i[n]);_(g,u[o]),d[o]=g}else d[o]=_(p,u[o]),$(t,i[n],p),i[h]=null;o++}else y(i[f]),f--;else y(i[n]),n++;for(;o<=a;){const h=$(t,d[a+1]);_(h,u[o]),d[o++]=h}for(;n<=f;){const h=i[n++];h!==null&&y(h)}return this.ut=r,b(t,d),B}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class T extends M{constructor(e){if(super(e),this.it=m,e.type!==E.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===m||e==null)return this._t=void 0,this.it=e;if(e===B)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const s=[e];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}T.directiveName="unsafeHTML",T.resultType=1;const k=I(T);export{R as a,P as c,I as e,D as f,M as i,b as m,k as o,E as t};
