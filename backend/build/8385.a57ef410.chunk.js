"use strict";(self.webpackChunkcorporate_blog_template=self.webpackChunkcorporate_blog_template||[]).push([[8385],{52713:(W,L,n)=>{n.d(L,{r:()=>I});var f=n(67294),E=n(41580),O=n(45697),v=n.n(O),K=n(99168);function F(A,b,h){if(!A||!b)return{display:"none"};const{x:P,y:U}=h;return{transform:`translate(${P}px, ${U}px)`}}function I({renderItem:A}){const{itemType:b,isDragging:h,item:P,initialOffset:U,currentOffset:B,mouseOffset:Y}=(0,K.useDragLayer)(M=>({item:M.getItem(),itemType:M.getItemType(),initialOffset:M.getInitialSourceClientOffset(),currentOffset:M.getSourceClientOffset(),isDragging:M.isDragging(),mouseOffset:M.getClientOffset()}));return h?f.createElement(E.x,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%"},f.createElement(E.x,{style:F(U,B,Y)},A({type:b,item:P}))):null}I.propTypes={renderItem:v().func.isRequired}},27661:(W,L,n)=>{var f=n(67294);const E=(0,f.createContext)();var O=null},21440:(W,L,n)=>{n.d(L,{PL:()=>K,Y9:()=>F.Y,zE:()=>ae,Ky:()=>X,fi:()=>se,zH:()=>de,r5:()=>o});var f=n(67294),E=n(86706),O=n(25398);const K=()=>{const e=(0,E.v9)(O.Z),s=(0,f.useCallback)(t=>e?.components?.[t]??{},[e]);return{...e,getComponentLayout:s}};var F=n(79116),I=n(30422),A=n(52861),b=n(42225),h=n(18172);const P={error:null,isLoading:!0,layout:{},layouts:{}},B=(e,s)=>(0,h.ZP)(e,t=>{switch(s.type){case"GET_DATA":{t.isLoading=!0,t.error=null,t.layout={};break}case"GET_DATA_SUCCEEDED":{const i=s.data.contentType.uid;t.layout=s.data,t.layouts[i]=s.data,t.isLoading=!1;break}case"GET_DATA_ERROR":{t.isLoading=!1,t.error=s.error;break}case"SET_LAYOUT_FROM_STATE":{t.error=null,t.layout=e.layouts[s.uid];break}case"UPDATE_LAYOUT":{const i=e.layout;t.layout={...i,contentType:{uid:i.contentType.uid,...s.newLayout.contentType}},t.layouts[i.contentType.uid]={...i,contentType:{uid:i.contentType.uid,...s.newLayout.contentType}};break}default:return t}});var Y=n(50361),M=n.n(Y),q=n(27361),R=n.n(q),oe=n(36968),S=n.n(oe),_=n(21892);const Q=(e,s)=>s.find(t=>t.uid===e),ie=(e,s)=>{const t=ee(e,s),i=k(t.contentType,s),m=te(t.contentType,t.components);return S()(t,["contentType","layouts","edit"],i),S()(t,["contentType","layouts","list"],m),Object.keys(t.components).forEach(c=>{const p=k(t.components[c],s);S()(t,["components",c,"layouts","edit"],p)}),t},ee=(e,s)=>{const t=(0,_.w8)(M()(e),s,"contentType"),{components:i,contentType:m}=t,c=p=>Object.keys(p.metadatas).reduce((y,C)=>{const N=R()(p,["attributes",C],{});let x=p.metadatas[C];if(N.type==="relation"){const ye=Q(N.targetModel,s),j=x.edit.mainField,G={name:j,schema:R()(ye,["attributes",j])};x={list:{...x.list,mainField:G},edit:{...x.edit,mainField:G}}}return y[C]=x,y},{});return S()(t,["contentType","metadatas"],c(m)),Object.keys(i).forEach(p=>{const y=i[p],C=c(y);S()(t,["components",p,"metadatas"],C)}),t},k=(e,s)=>e.layouts.edit.reduce((t,i)=>{const m=i.map(c=>{const p=R()(e,["attributes",c.name],{}),y={...c,fieldSchema:p,metadatas:R()(e,["metadatas",c.name,"edit"],{})};if(p.type==="relation"){const N=Q(p.targetModel,s).pluginOptions||{};S()(y,"targetModelPluginOptions",N),S()(y,"queryInfos",{shouldDisplayRelationLink:V(e,c.name,s)})}return y});return t.push(m),t},[]),te=(e,s)=>e.layouts.list.reduce((i,m)=>{const c=R()(e,["attributes",m],{}),p=R()(e,["metadatas",m,"list"],{}),y=c.type;if(y==="relation")return i.push({key:`__${m}_key__`,name:m,fieldSchema:c,metadatas:p}),i;if(y==="component"){const C=s[c.component],N=C.settings.mainField,x=C.attributes[N];return i.push({key:`__${m}_key__`,name:m,fieldSchema:c,metadatas:{...p,mainField:{...x,name:N}}}),i}return i.push({key:`__${m}_key__`,name:m,fieldSchema:c,metadatas:p}),i},[]),V=(e,s,t)=>{const i=R()(e,["attributes",s,"targetModel"],"");return Z(t).includes(i)},Z=e=>e.filter(s=>s.isDisplayed).map(({uid:s})=>s),z=ie,ae=e=>{const[{error:s,isLoading:t,layout:i,layouts:m},c]=(0,f.useReducer)(B,P),p=(0,f.useMemo)(b.Vo,[]),{schemas:y}=(0,E.v9)(j=>p(j),E.wU),C=(0,f.useRef)(!0),{get:N}=(0,I.kY)(),x=(0,f.useCallback)(async(j,G)=>{if(m[j]){c({type:"SET_LAYOUT_FROM_STATE",uid:j});return}c({type:"GET_DATA"});try{const{data:{data:re}}=await N(`/content-manager/content-types/${j}/configuration`,{cancelToken:G.token});c({type:"GET_DATA_SUCCEEDED",data:z(re,y)})}catch(re){if(A.default.isCancel(re))return;C.current&&console.error(re),C.current&&c({type:"GET_DATA_ERROR",error:re})}},[m,y,N]);(0,f.useEffect)(()=>()=>{C.current=!1},[]),(0,f.useEffect)(()=>{const G=A.default.CancelToken.source();return x(e,G),()=>{G.cancel("Operation canceled by the user.")}},[e,x]);const ye=(0,f.useCallback)(j=>{c({type:"UPDATE_LAYOUT",newLayout:z(j,y)})},[y]);return{error:s,isLoading:t,layout:i,updateLayout:ye}},ge=e=>e["content-manager_app"].collectionTypeLinks;var le=n(13218),T=n.n(le),H=n(80129);const ue=(e,s)=>Object.keys(e).reduce((t,i)=>{const m=e[i],c=R()(s,[i],m);return T()(m)?{...t,[i]:ue(m,c)}:(t[i]=c,t)},{}),ce=(e,s,t)=>{const i=e.find(({to:x})=>x.includes(s));if(!i)return"/";const{to:m,search:c}=i,p=(0,H.parse)(c),y=(0,H.parse)(t.substring(1)),C=ue(p,y);return`${m}?${(0,H.stringify)(C,{encode:!1})}`},X=e=>{const[{rawQuery:s}]=(0,I.Kx)(),t=(0,E.v9)(ge);return ce(t,e,s)};var Te=n(25950),$=n(16550);const se=()=>{const{search:e}=(0,$.TH)(),s=e?(0,H.parse)(e.substring(1)):{};return s.plugins?(0,H.stringify)({plugins:s.plugins},{encode:!1}):""},de=e=>{const s=(0,f.useRef)();return(0,f.useEffect)(()=>{s.current=e},[e]),s.current};var J=n(14996);const me=(e,s,t)=>({type:J.m,permissions:e,__meta__:{plugins:s,containerName:t}}),fe=()=>({type:J.Q}),r=e=>e["content-manager_rbacManager"].permissions,u=e=>e.rbacProvider.collectionTypesRelatedPermissions,o=(e,s,t="listView")=>{const i=(0,E.I0)(),m=(0,E.v9)(u),c=(0,E.v9)(r),p=m[s];(0,f.useEffect)(()=>p?(i(me(p,e?e.plugins:null,t)),()=>{i(fe())}):()=>{},[p,i,e,t]);const y=c?.some(C=>C.subject!==s)??!0;return{isValid:c&&!y,permissions:c}};var d=n(27661);const g=()=>useContext(WysiwygContext),l=null},79116:(W,L,n)=>{n.d(L,{Y:()=>K});var f=n(67294),E=n(99168),O=n.n(E),v=n(25950);const K=(F,{type:I="STRAPI_DND",index:A,item:b={},onStart:h,onEnd:P,onGrabItem:U,onDropItem:B,onCancel:Y,onMoveItem:M,dropSensitivity:q="regular"})=>{const R=(0,f.useRef)(null),[{handlerId:oe},S]=(0,E.useDrop)({accept:I,collect(k){return{handlerId:k.getHandlerId()}},hover(k,te){if(!R.current)return;const V=k.index,Z=A;if(V!==Z){if(q==="regular"){const z=R.current.getBoundingClientRect(),ne=(z.bottom-z.top)/2,w=te.getClientOffset().y-z.top;if(V<Z&&w<ne||V>Z&&w>ne)return}M(Z,V),k.index=Z}}}),[{isDragging:_},Q,ie]=(0,E.useDrag)({type:I,item(){h&&h();const{width:k}=R.current?.getBoundingClientRect()??{};return{index:A,width:k,...b}},end(){P&&P()},canDrag:F,isDragging:b.id?k=>b.id===k.getItem().id:void 0,collect:k=>({isDragging:k.isDragging()})}),ee=(0,v.A)(F,A,{onGrabItem:U,onDropItem:B,onCancel:Y,onMoveItem:M});return[{handlerId:oe,isDragging:_,handleKeyDown:ee},R,S,Q,ie]}},25950:(W,L,n)=>{n.d(L,{A:()=>E});var f=n(67294);const E=(O,v,{onCancel:K,onDropItem:F,onGrabItem:I,onMoveItem:A})=>{const[b,h]=(0,f.useState)(!1),P=M=>{b&&(M==="UP"?A(v-1,v):M==="DOWN"&&A(v+1,v))},U=()=>{b?(F&&F(v),h(!1)):(I&&I(v),h(!0))},B=()=>{b&&(h(!1),K&&K(v))};return M=>{if(O&&!(M.key==="Tab"&&!b))switch(M.preventDefault(),M.key){case" ":case"Enter":U();break;case"Escape":B();break;case"ArrowDown":case"ArrowRight":P("DOWN");break;case"ArrowUp":case"ArrowLeft":P("UP");break;default:}}}},42225:(W,L,n)=>{n.d(L,{Jg:()=>A,KQ:()=>F,Vo:()=>I,Yg:()=>O});var f=n(20573),E=n(23301);const O=()=>h=>h["content-manager_app"]||E.E,v=()=>createSelector(O(),h=>h),K=()=>createSelector(O(),h=>h.models),F=()=>(0,f.P1)(O(),h=>({collectionTypeLinks:h.collectionTypeLinks,singleTypeLinks:h.singleTypeLinks})),I=()=>(0,f.P1)(O(),({components:h,models:P})=>({schemas:[...h,...P]})),A=(0,f.P1)(O(),h=>h.fieldSizes);var b=null},25398:(W,L,n)=>{n.d(L,{Z:()=>E});const E=O=>O["content-manager_editViewLayoutManager"].currentLayout},56837:(W,L,n)=>{n.d(L,{Z:()=>f});const f={COMPONENT:"component",EDIT_FIELD:"editField",FIELD:"field",DYNAMIC_ZONE:"dynamicZone",RELATION:"relation"}},45283:(W,L,n)=>{n.d(L,{Z:()=>E});const E=O=>`content-manager.${O}`},21892:(W,L,n)=>{n.d(L,{_Q:()=>Z.Z,W3:()=>v,ko:()=>F,FE:()=>A,Di:()=>U,Ex:()=>fe,du:()=>q,TA:()=>S,Ts:()=>ee,Uo:()=>te,OB:()=>V.Z,w8:()=>le,kc:()=>ue});var f=n(50361),E=n.n(f);const v=(r,u,a)=>{if(Array.isArray(r)&&u>=0&&a>=0&&u<=r.length-1&&a<=r.length-1){const o=E()(r),d=o.splice(u,1);return o.splice(a,0,d[0]),o}return r},F=r=>{const{type:u}=r;return u==="relation"?!(r?.relationType??"").toLowerCase().includes("morph"):!["json","dynamiczone","richtext","password"].includes(u)&&!!u},I=(r,u)=>{typeof r=="function"?r(u):r!=null&&(r.current=u)},A=(...r)=>u=>r.forEach(a=>I(a,u));var b=n(27361),h=n.n(b);const P=(r,u)=>Object.keys(r).reduce((a,o)=>{const d=h()(r,[o],{}),{default:g,component:l,type:e,required:s,min:t,repeatable:i}=d;if(g!==void 0&&(a[o]=g),e==="component"){const m=u?.[l]?.attributes??{},c=P(m,u);if(s===!0&&(a[o]=i===!0?[]:c),t&&i===!0&&s){a[o]=[];for(let p=0;p<t;p+=1)a[o].push(c)}}return e==="dynamiczone"&&s===!0&&(a[o]=[]),a},{}),U=P;var B=n(57557),Y=n.n(B);const q=({layouts:r,metadatas:u,...a})=>{const o=r.list.map(l=>l.name?l.name:l),d=Object.keys(u).reduce((l,e)=>{const s=h()(u,[e],{});let t=s.edit;return t.mainField&&(t={...t,mainField:s.edit.mainField.name}),{...l,[e]:{edit:t,list:Y()(s.list,["mainField"])}}},{}),g=r.edit.map(l=>l.map(({name:e,size:s})=>({name:e,size:s})));return{...a,layouts:{edit:g,list:o},metadatas:d}},R=(r,u)=>r.map(a=>({...a,subject:u})),S=r=>{const u={create:[{action:"plugin::content-manager.explorer.create",subject:null}],delete:[{action:"plugin::content-manager.explorer.delete",subject:null}],publish:[{action:"plugin::content-manager.explorer.publish",subject:null}],read:[{action:"plugin::content-manager.explorer.read",subject:null}],update:[{action:"plugin::content-manager.explorer.update",subject:null}]};return Object.keys(u).reduce((a,o)=>(a[o]=R(u[o],r),a),{})};var _=n(7654),Q=n.n(_);const ee=r=>r.split(".").filter(u=>Q()(parseInt(u,10))),te=r=>{if(r.length===0)return-1;const u=Math.max.apply(Math,r.map(a=>a.__temp_key__??0));return Number.isNaN(u)?-1:u};var V=n(45283),Z=n(56837),z=n(82492),ne=n.n(z),ae=n(36968),w=n.n(ae);const le=(r,u,a)=>{const o=e=>u.find(s=>s.uid===e),d=Object.assign({},r),g=r[a].uid,l=o(g);return w()(d,[a],ne()({},l,r[a])),Object.keys(r.components).forEach(e=>{const s=o(e);w()(d,["components",e],{...r.components[e],...s})}),d};var T=n(30422);const ue=(r,u,a)=>{const o=(d,g)=>Object.keys(d).reduce((l,e)=>{const s=(0,T.UN)(g,e),t=h()(d,e),i=(0,T.k2)(g,[e,"component"]),m=(0,T.k2)(g,[e,"repeatable"]);return s==="dynamiczone"?(l[e]=t.map(c=>o(c,a[c.__component])),l):s==="component"?(m?l[e]=t&&t.map(c=>o(c,a[i])):l[e]=t&&o(t,a[i]),l):(s!=="password"&&(l[e]=t),l)},{});return o(r,u)};var pe=n(51584),ce=n.n(pe),he=n(41609),X=n.n(he),Te=n(14841),$=n.n(Te),D=n(87561),se=n(72262);D.kM(D.nK,"defined",function(){return this.test("defined",T.I0.required,r=>r!==void 0)}),D.kM(D.IX,"notEmptyMin",function(r){return this.test("notEmptyMin",T.I0.min,u=>X()(u)?!0:u.length>=r)}),D.kM(D.Z_,"isInferior",function(r,u){return this.test("isInferior",r,function(a){return!a||Number.isNaN($()(a))?!0:$()(u)>=$()(a)})}),D.kM(D.Z_,"isSuperior",function(r,u){return this.test("isSuperior",r,function(a){return!a||Number.isNaN($()(a))?!0:$()(a)>=$()(u)})});const de=r=>h()(r,["attributes"],{}),J=(r,{components:u},a={isCreatingEntry:!0,isDraft:!0,isFromComponent:!1})=>{const o=de(r);return D.Ry().shape(Object.keys(o).reduce((d,g)=>{const l=o[g];if(l.type!=="relation"&&l.type!=="component"&&l.type!=="dynamiczone"){const e=me(l.type,l,a);d[g]=e}if(l.type==="relation"&&(d[g]=["oneWay","oneToOne","manyToOne","oneToManyMorph","oneToOneMorph"].includes(l.relationType)?D.Ry().nullable():D.IX().nullable()),l.type==="component"){const e=J(u[l.component],{components:u},{...a,isFromComponent:!0});if(l.repeatable===!0){const{min:t,max:i,required:m}=l;let c=D.Vo(p=>{let y=D.IX().of(e);return t?m?y=y.min(t,T.I0.min):m!==!0&&X()(p)?y=y.nullable():y=y.min(t,T.I0.min):m&&!a.isDraft&&(y=y.min(1,T.I0.required)),i&&(y=y.max(i,T.I0.max)),y});return d[g]=c,d}const s=D.Vo(t=>t!==void 0?l.required===!0&&!a.isDraft?e.defined():e.nullable():l.required===!0?D.Ry().defined():D.Ry().nullable());return d[g]=s,d}if(l.type==="dynamiczone"){let e=D.IX().of(D.Vo(({__component:i})=>J(u[i],{components:u},{...a,isFromComponent:!0})));const{max:s,min:t}=l;t?l.required?e=e.test("min",T.I0.min,i=>a.isCreatingEntry?i&&i.length>=t:i===void 0?!0:i!==null&&i.length>=t).test("required",T.I0.required,i=>a.isCreatingEntry?i!==null||i!==void 0:i===void 0?!0:i!==null):e=e.notEmptyMin(t):l.required&&!a.isDraft&&(e=e.test("required",T.I0.required,i=>a.isCreatingEntry?i!==null||i!==void 0:i===void 0?!0:i!==null)),s&&(e=e.max(s,T.I0.max)),d[g]=e}return d},{}))},me=(r,u,a)=>{let o=D.nK();return["string","uid","text","richtext","email","password","enumeration"].includes(r)&&(o=D.Z_()),r==="json"&&(o=D.nK(T.I0.json).test("isJSON",T.I0.json,d=>{if(!d||!d.length)return!0;try{return JSON.parse(d),!0}catch{return!1}}).nullable().test("required",T.I0.required,d=>!(u.required&&(!d||!d.length)))),r==="email"&&(o=o.email(T.I0.email)),["number","integer","float","decimal"].includes(r)&&(o=D.Rx().transform(d=>Q()(d)?void 0:d).typeError()),r==="biginteger"&&(o=D.Z_().matches(/^-?\d*$/)),["date","datetime"].includes(r)&&(o=D.hT()),Object.keys(u).forEach(d=>{const g=u[d];if(g||!ce()(g)&&Number.isInteger(Math.floor(g))||g===0)switch(d){case"required":{a.isDraft||(r==="password"&&a.isCreatingEntry&&(o=o.required(T.I0.required)),r!=="password"&&(a.isCreatingEntry?o=o.required(T.I0.required):o=o.test("required",T.I0.required,l=>l===void 0&&!a.isFromComponent?!0:(0,se.Z)(r)?l===0?!0:!!l:r==="boolean"?l!=null:r==="date"||r==="datetime"?typeof l=="string"?!X()(l):!X()(l?.toString()):!X()(l))));break}case"max":{r==="biginteger"?o=o.isInferior(T.I0.max,g):o=o.max(g,T.I0.max);break}case"maxLength":o=o.max(g,T.I0.maxLength);break;case"min":{r==="biginteger"?o=o.isSuperior(T.I0.min,g):o=o.min(g,T.I0.min);break}case"minLength":{a.isDraft||(o=o.min(g,T.I0.minLength));break}case"regex":o=o.matches(new RegExp(g),{message:T.I0.regex,excludeEmptyString:!u.required});break;case"lowercase":["text","textarea","email","string"].includes(r)&&(o=o.strict().lowercase());break;case"uppercase":["text","textarea","email","string"].includes(r)&&(o=o.strict().uppercase());break;case"positive":(0,se.Z)(r)&&(o=o.positive());break;case"negative":(0,se.Z)(r)&&(o=o.negative());break;default:o=o.nullable()}}),o},fe=J},72262:(W,L,n)=>{n.d(L,{Z:()=>f});function f(E){return["integer","biginteger","decimal","float","number"].includes(E)}}}]);
