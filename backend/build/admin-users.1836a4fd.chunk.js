"use strict";(self.webpackChunkcorporate_blog_template=self.webpackChunkcorporate_blog_template||[]).push([[5199],{54920:(x,d,e)=>{e.d(d,{R:()=>c});var t=e(1784),i=e(88767);function c(m={},u={}){const{id:a="",...s}=m,{get:g}=(0,t.kY)(),{data:n,isError:p,isLoading:h,refetch:A}=(0,i.useQuery)(["users",a,s],async()=>{const{data:{data:P}}=await g(`/admin/users/${a}`,{params:s});return P},u);let C=[];return a&&n?C=[n]:Array.isArray(n?.results)&&(C=n.results),{users:C,pagination:n?.pagination??null,isLoading:h,isError:p,refetch:A}}},71359:(x,d,e)=>{e.d(d,{Z:()=>p});var t=e(53547),i=e(41580),c=e(29728),m=e(1784),u=e(89597),a=e(45697),s=e.n(a),g=e(86896);const n=({displayedFilters:h})=>{const[A,C]=(0,t.useState)(!1),{formatMessage:P}=(0,g.Z)(),T=(0,t.useRef)(),B=()=>{C(D=>!D)};return t.createElement(t.Fragment,null,t.createElement(i.x,{paddingTop:1,paddingBottom:1},t.createElement(c.z,{variant:"tertiary",ref:T,startIcon:t.createElement(u.Z,null),onClick:B,size:"S"},P({id:"app.utils.filters",defaultMessage:"Filters"})),A&&t.createElement(m.J5,{displayedFilters:h,isVisible:A,onToggle:B,source:T})),t.createElement(m.W$,{filtersSchema:h}))};n.propTypes={displayedFilters:s().arrayOf(s().shape({name:s().string.isRequired,metadatas:s().shape({label:s().string}),fieldSchema:s().shape({type:s().string})})).isRequired};const p=n},61611:(x,d,e)=>{e.d(d,{W:()=>pe,Z:()=>Fe});var t=e(53547),i=e(185),c=e(53979),m=e(36989),u=e(49066),a=e(1784),s=e(80129),g=e.n(s),n=e(86896),p=e(88767),h=e(86706),A=e(89548),C=e(54920),P=e(80902),T=e(36364),B=e(71359),D=e(29728),F=e(23293),se=e(45697),o=e.n(se);const q=({onClick:l})=>{const{formatMessage:f}=(0,n.Z)();return t.createElement(D.z,{onClick:l,startIcon:t.createElement(F.Z,null),size:"S"},f({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}))};q.propTypes={onClick:o().func.isRequired};var ne=e(15234),Z=e(79031),G=e(37909),le=e(92155),b=e(75515),z=e(11047),ee=e(12028),E=e(41580),fe=e(4585),Me=e(20022),re=e(35209);const oe=({canDelete:l,headers:f,entriesToDelete:L,onClickDelete:k,onSelectRow:Y,withMainAction:$,withBulkActions:W,rows:U})=>{const{push:v,location:{pathname:V}}=(0,A.k6)(),{formatMessage:O}=(0,n.Z)();return t.createElement(ne.p,null,U.map(r=>{const j=L.findIndex(I=>I===r.id)!==-1;return t.createElement(Z.Tr,{key:r.id,...(0,a.X7)({fn:()=>v(`${V}/${r.id}`),condition:W})},$&&t.createElement(G.Td,{...a.UW},t.createElement(le.C,{"aria-label":O({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,re.Pp)(r.firstname,r.lastname)}),checked:j,onChange:()=>{Y({name:r.id,value:!j})}})),f.map(({key:I,cellFormatter:H,name:K,...N})=>t.createElement(G.Td,{key:I},typeof H=="function"?H(r,{key:I,name:K,formatMessage:O,...N}):t.createElement(b.Z,{textColor:"neutral800"},r[K]||"-"))),W&&t.createElement(G.Td,null,t.createElement(z.k,{justifyContent:"end"},t.createElement(ee.h,{onClick:()=>v(`${V}/${r.id}`),label:O({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,re.Pp)(r.firstname,r.lastname)}),noBorder:!0,icon:t.createElement(fe.Z,null)}),l&&t.createElement(E.x,{paddingLeft:1,...a.UW},t.createElement(ee.h,{onClick:()=>k(r.id),label:O({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,re.Pp)(r.firstname,r.lastname)}),noBorder:!0,icon:t.createElement(Me.Z,null)})))))}))};oe.defaultProps={canDelete:!1,entriesToDelete:[],onClickDelete(){},onSelectRow(){},rows:[],withBulkActions:!1,withMainAction:!1},oe.propTypes={canDelete:o().bool,entriesToDelete:o().array,headers:o().array.isRequired,onClickDelete:o().func,onSelectRow:o().func,rows:o().array,withBulkActions:o().bool,withMainAction:o().bool};const ye=oe;var Pe=e(42866),ve=e(24969),he=e(59946),de=e(11276),ie=e(67819),Ae=e(36856),Ce=e(63321),De=e(36773),Oe=e(41054),Te=e(30164),Le=e(85078),J=e(87561);const ue={firstname:"",lastname:"",email:"",roles:[]},Re=[],Ue=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]],Ie=J.Ry().shape({firstname:J.Z_().trim().required(a.I0.required),lastname:J.Z_(),email:J.Z_().email(a.I0.email).required(a.I0.required),roles:J.IX().min(1,a.I0.required).required(a.I0.required)}),Se={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}},Ee=({onSuccess:l,onToggle:f})=>{const[L,k]=(0,t.useState)("create"),[Y,$]=(0,t.useState)(!1),[W,U]=(0,t.useState)(null),{formatMessage:v}=(0,n.Z)(),V=(0,a.lm)(),{lockApp:O,unlockApp:r}=(0,a.o1)(),{post:j}=(0,a.kY)(),I=(0,P.c)(Re,async()=>(await e.e(9329).then(e.bind(e,99329))).ROLE_LAYOUT,{combine(y,S){return[...y,S]},defaultValue:[]}),H=(0,P.c)(ue,async()=>(await e.e(9329).then(e.bind(e,99329))).FORM_INITIAL_VALUES,{combine(y,S){return{...y,...S}},defaultValue:ue}),K=(0,P.c)(Te.A,async()=>(await e.e(566).then(e.bind(e,20566))).MagicLinkEE),N=(0,p.useMutation)(y=>j("/admin/users",y),{async onSuccess({data:y}){U(y.data.registrationToken),await l(),ae(),$(!1)},onError(y){throw $(!1),V({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),y},onSettled(){r()}}),w=v({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),te=async(y,{setErrors:S})=>{O(),$(!0);try{await N.mutateAsync(y)}catch(X){r(),X?.response?.data?.error.message==="Email already taken"&&S({email:X.response.data.error.message})}},ae=()=>{M?k(M):f()},{buttonSubmitLabel:_,isDisabled:Q,next:M}=Se[L],Ze=L==="create"?t.createElement(D.z,{type:"submit",loading:Y},v(_)):t.createElement(D.z,{type:"button",loading:Y,onClick:f},v(_));return K?t.createElement(Pe.P,{onClose:f,labelledBy:"title"},t.createElement(ve.x,null,t.createElement(Ce.O,{label:w},t.createElement(De.$,{isCurrent:!0},w))),t.createElement(Oe.J9,{enableReinitialize:!0,initialValues:H,onSubmit:te,validationSchema:Ie,validateOnChange:!1},({errors:y,handleChange:S,values:X})=>t.createElement(a.l0,null,t.createElement(he.f,null,t.createElement(z.k,{direction:"column",alignItems:"stretch",gap:6},L!=="create"&&t.createElement(K,{registrationToken:W}),t.createElement(E.x,null,t.createElement(b.Z,{variant:"beta",as:"h2"},v({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})),t.createElement(E.x,{paddingTop:4},t.createElement(z.k,{direction:"column",alignItems:"stretch",gap:1},t.createElement(de.r,{gap:5},Ue.map(me=>me.map(R=>t.createElement(ie.P,{key:R.name,...R.size},t.createElement(a.jm,{...R,disabled:Q,error:y[R.name],onChange:S,value:X[R.name]})))))))),t.createElement(E.x,null,t.createElement(b.Z,{variant:"beta",as:"h2"},v({id:"global.roles",defaultMessage:"User's role"})),t.createElement(E.x,{paddingTop:4},t.createElement(de.r,{gap:5},t.createElement(ie.P,{col:6,xs:12},t.createElement(Le.Z,{disabled:Q,error:y.roles,onChange:S,value:X.roles})),I.map(me=>me.map(R=>t.createElement(ie.P,{key:R.name,...R.size},t.createElement(a.jm,{...R,disabled:Q,onChange:S,value:X[R.name]}))))))))),t.createElement(Ae.m,{startActions:t.createElement(D.z,{variant:"tertiary",onClick:f,type:"button"},v({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:Ze})))):null};Ee.propTypes={onToggle:o().func.isRequired,onSuccess:o().func.isRequired};const Be=Ee,ce=({pagination:l})=>t.createElement(E.x,{paddingTop:4},t.createElement(z.k,{alignItems:"flex-end",justifyContent:"space-between"},t.createElement(a.v4,null),t.createElement(a.tU,{pagination:l})));ce.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},ce.propTypes={pagination:o().shape({page:o().number,pageCount:o().number,pageSize:o().number,total:o().number})};const We=ce,Ke=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}],xe=[{name:"firstname",key:"firstname",metadatas:{label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0}},{key:"email",name:"email",metadatas:{label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0}},{key:"roles",name:"roles",metadatas:{label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1},cellFormatter({roles:l},{formatMessage:f}){return t.createElement(b.Z,{textColor:"neutral800"},l.map(L=>f({id:`Settings.permissions.users.${L.code}`,defaultMessage:L.name})).join(`,
`))}},{key:"username",name:"username",metadatas:{label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1},cellFormatter({isActive:l},{formatMessage:f}){return t.createElement(z.k,null,t.createElement(a.qb,{isActive:l,variant:l?"success":"danger"}),t.createElement(b.Z,{textColor:"neutral800"},f({id:l?"Settings.permissions.users.active":"Settings.permissions.users.inactive",defaultMessage:l?"Active":"Inactive"})))}}],ge=["ee","license-limit-info"],pe=()=>{const{post:l}=(0,a.kY)(),{formatAPIError:f}=(0,a.So)(),[L,k]=(0,t.useState)(!1),Y=(0,h.v9)(T._),{allowedActions:{canCreate:$,canDelete:W,canRead:U}}=(0,a.ss)(Y.settings.users),v=(0,p.useQueryClient)(),V=(0,a.lm)(),{formatMessage:O}=(0,n.Z)(),{search:r}=(0,A.TH)();(0,a.go)();const{users:j,pagination:I,isError:H,isLoading:K,refetch:N}=(0,C.R)(g().parse(r,{ignoreQueryPrefix:!0}),{cacheTime:0,enabled:U}),w=(0,P.c)(q,async()=>(await e.e(5833).then(e.bind(e,85833))).CreateActionEE),te=xe.map(M=>({...M,metadatas:{...M.metadatas,label:O(M.metadatas.label)}})),ae=O({id:"global.users",defaultMessage:"Users"}),_=()=>{k(M=>!M)},Q=(0,p.useMutation)(async M=>{await l("/admin/users/batch-delete",{ids:M})},{async onSuccess(){await N(),await v.refetchQueries(ge)},onError(M){V({type:"warning",message:{id:"notification.error",message:f(M),defaultMessage:"An error occured"}})}});return w?t.createElement(i.o,{"aria-busy":K},t.createElement(a.SL,{name:"Users"}),t.createElement(c.T,{primaryAction:$&&t.createElement(w,{onClick:_}),title:ae,subtitle:O({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),U&&t.createElement(m.Z,{startActions:t.createElement(t.Fragment,null,t.createElement(a.m,{label:O({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:ae})}),t.createElement(B.Z,{displayedFilters:Ke}))}),t.createElement(u.D,{canRead:U},!U&&t.createElement(a.ZF,null),H&&t.createElement("div",null,"TODO: An error occurred"),U&&t.createElement(t.Fragment,null,t.createElement(a.tM,{contentType:"Users",isLoading:K,onConfirmDeleteAll:Q.mutateAsync,onConfirmDelete:M=>Q.mutateAsync([M]),headers:te,rows:j,withBulkActions:!0,withMainAction:W},t.createElement(ye,{canDelete:W,headers:te,rows:j,withBulkActions:!0,withMainAction:W})),I&&t.createElement(We,{pagination:I}))),L&&t.createElement(Be,{onSuccess:async()=>{await N(),await v.refetchQueries(ge)},onToggle:_})):null},Fe=()=>{const l=(0,P.c)(pe,async()=>(await e.e(5481).then(e.bind(e,17403))).UserListPageEE);return l?t.createElement(l,null):null}},87901:(x,d,e)=>{e.r(d),e.d(d,{default:()=>s});var t=e(53547),i=e(1784),c=e(86706),m=e(36364),u=e(61611);const s=()=>{const g=(0,c.v9)(m._);return t.createElement(i.O4,{permissions:g.settings.users.main},t.createElement(u.Z,null))}},6324:(x,d,e)=>{e.d(d,{Z:()=>n});var t=e(53547),i=e(12028),c=e(1784),m=e(65186),u=e(45697),a=e.n(u),s=e(86896);const g=({children:p,target:h})=>{const A=(0,c.lm)(),{formatMessage:C}=(0,s.Z)(),{copy:P}=(0,c.VP)(),T=C({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),B=async()=>{await P(h)&&A({type:"info",message:{id:"notification.link-copied"}})};return t.createElement(c.Y_,{endAction:t.createElement(i.h,{label:T,noBorder:!0,icon:t.createElement(m.Z,null),onClick:B}),title:h,titleEllipsis:!0,subtitle:p,icon:t.createElement("span",{style:{fontSize:32}},"\u2709\uFE0F"),iconBackground:"neutral100"})};g.propTypes={children:a().oneOfType([a().element,a().string]).isRequired,target:a().string.isRequired};const n=g},30164:(x,d,e)=>{e.d(d,{A:()=>s});var t=e(53547),i=e(45697),c=e.n(i),m=e(86896),u=e(95651),a=e(6324);const s=({registrationToken:g})=>{const{formatMessage:n}=(0,m.Z)(),p=`${window.location.origin}${u.Z}auth/register?registrationToken=${g}`;return t.createElement(a.Z,{target:p},n({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};s.defaultProps={registrationToken:""},s.propTypes={registrationToken:c().string}},85078:(x,d,e)=>{e.d(d,{Z:()=>B});var t=e(53547),i=e(40619),c=e(82562),m=e(1784),u=e(86647),a=e(45697),s=e.n(a),g=e(86896),n=e(88767),p=e(1565);const h=(0,p.keyframes)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,A=p.default.div`
  animation: ${h} 2s infinite linear;
`,C=()=>t.createElement(A,null,t.createElement(u.Z,null)),P=async()=>{const{get:D}=(0,m.tg)(),{data:F}=await D("/admin/roles");return F.data},T=({disabled:D,error:F,onChange:se,value:o})=>{const{status:q,data:ne}=(0,n.useQuery)(["roles"],P,{staleTime:5e4}),{formatMessage:Z}=(0,g.Z)(),G=F?Z({id:F,defaultMessage:F}):"",le=Z({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),b=Z({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),z=Z({id:"app.components.Select.placeholder",defaultMessage:"Select"}),ee=q==="loading"?t.createElement(C,null):void 0;return t.createElement(i.P,{id:"roles",disabled:D,error:G,hint:b,label:le,name:"roles",onChange:E=>{se({target:{name:"roles",value:E}})},placeholder:z,multi:!0,startIcon:ee,value:o.map(E=>E.toString()),withTags:!0,required:!0},(ne||[]).map(E=>t.createElement(c.W,{key:E.id,value:E.id.toString()},Z({id:`global.${E.code}`,defaultMessage:E.name}))))};T.defaultProps={disabled:!1,error:void 0},T.propTypes={disabled:s().bool,error:s().string,onChange:s().func.isRequired,value:s().array.isRequired};const B=T},36989:(x,d,e)=>{e.d(d,{Z:()=>c});var t=e(85893),i=e(11047);const c=({startActions:m,endActions:u})=>!m&&!u?null:(0,t.jsxs)(i.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,t.jsx)(i.k,{gap:2,wrap:"wrap",children:m}),(0,t.jsx)(i.k,{gap:2,shrink:0,wrap:"wrap",children:u})]})}}]);
