(self.webpackChunkcorporate_blog_template=self.webpackChunkcorporate_blog_template||[]).push([[8853],{28557:(m,E,t)=>{"use strict";t.r(E),t.d(E,{default:()=>Tt});var e=t(67294),n=t(30422),o=t(16550),i=t(84419),l=t(83086),g=t(185),c=t(53979),A=t(29728),L=t(49066),y=t(11047),P=t(41580),h=t(75515),T=t(11276),D=t(67819),Z=t(16364),b=t(61467),M=t(85018),I=t(41054),S=t(86896),k=t(45697),B=t.n(k);const V=(0,e.createContext)({}),se=({children:s,value:r})=>e.createElement(V.Provider,{value:r},s),J=()=>(0,e.useContext)(V);se.propTypes={children:B().node.isRequired,value:B().object.isRequired};var K=t(97961),Re=t(48734),Ce=t(74756),Ae=t(63081),Pe=t(11700),Te=t.n(Pe);function be(s){switch(s){case"application":return"Application";case"plugin::content-manager":return"Content manager";case"plugin::content-type-builder":return"Content types builder";case"plugin::documentation":return"Documentation";case"plugin::email":return"Email";case"plugin::i18n":return"i18n";case"plugin::upload":return"Upload";case"plugin::users-permissions":return"Users-permissions";default:return Te()(s.replace("api::","").replace("plugin::",""))}}const De=be,Le=(s,r)=>{const a=Object.keys(r).sort().map(d=>({name:d,isOpen:!1}));return{...s,collapses:a}};var Me=t(89734),ae=t.n(Me),re=t(36213),oe=t(63237),Se=t(78114),Oe=t(27361),Y=t.n(Oe),X=t(71997);const ie=(0,X.iv)`
  background: ${s=>s.theme.colors.primary100};
  svg {
    opacity: 1;
  }
`,Ze=(0,X.ZP)(P.x)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    opacity: 0;
    path {
      fill: ${s=>s.theme.colors.primary600};
    }
  }

  /* Show active style both on hover and when the action is selected */
  ${s=>s.isActive&&ie}
  &:hover {
    ${ie}
  }
`,Be=X.ZP.div`
  flex: 1;
  align-self: center;
  border-top: 1px solid ${({theme:s})=>s.colors.neutral150};
`,le=({subCategory:s})=>{const{formatMessage:r}=(0,S.Z)(),{onChange:a,onChangeSelectAll:d,onSelectedAction:f,selectedAction:u,modifiedData:x}=J(),R=(0,e.useMemo)(()=>Y()(x,s.name,{}),[x,s]),C=(0,e.useMemo)(()=>Object.values(R).every(p=>p.enabled===!0),[R]),v=(0,e.useMemo)(()=>Object.values(R).some(p=>p.enabled===!0)&&!C,[R,C]),j=(0,e.useCallback)(({target:{name:p}})=>{d({target:{name:p,value:!C}})},[C,d]),O=(0,e.useCallback)(p=>u===p,[u]);return e.createElement(P.x,null,e.createElement(y.k,{justifyContent:"space-between",alignItems:"center"},e.createElement(P.x,{paddingRight:4},e.createElement(h.Z,{variant:"sigma",textColor:"neutral600"},s.label)),e.createElement(Be,null),e.createElement(P.x,{paddingLeft:4},e.createElement(re.X,{name:s.name,value:C,onValueChange:p=>j({target:{name:s.name,value:p}}),indeterminate:v},r({id:"app.utils.select-all",defaultMessage:"Select all"})))),e.createElement(y.k,{paddingTop:6,paddingBottom:6},e.createElement(T.r,{gap:2,style:{flex:1}},s.actions.map(p=>{const N=`${p.name}.enabled`;return e.createElement(D.P,{col:6,key:p.name},e.createElement(Ze,{isActive:O(p.name),padding:2,hasRadius:!0},e.createElement(re.X,{value:Y()(x,N,!1),name:N,onValueChange:w=>a({target:{name:N,value:w}})},p.label),e.createElement("button",{type:"button",onClick:()=>f(p.name),style:{display:"inline-flex",alignItems:"center"}},e.createElement(oe.T,{as:"span"},r({id:"app.utils.show-bound-route",defaultMessage:"Show bound route for {route}"},{route:p.name})),e.createElement(Se.Z,null))))}))))};le.propTypes={subCategory:B().object.isRequired};const je=le,ce=({name:s,permissions:r})=>{const a=(0,e.useMemo)(()=>ae()(Object.values(r.controllers).reduce((d,f,u)=>{const x=`${s}.controllers.${Object.keys(r.controllers)[u]}`,R=ae()(Object.keys(f).reduce((C,v)=>[...C,{...f[v],label:v,name:`${x}.${v}`}],[]),"label");return[...d,{actions:R,label:Object.keys(r.controllers)[u],name:x}]},[]),"label"),[s,r]);return e.createElement(P.x,{padding:6},a.map(d=>e.createElement(je,{key:d.name,subCategory:d})))};ce.propTypes={name:B().string.isRequired,permissions:B().object.isRequired};const Ue=ce;var q=t(18172);const Ie={collapses:[]},ke=(s,r)=>(0,q.ZP)(s,a=>{switch(r.type){case"TOGGLE_COLLAPSE":{a.collapses=s.collapses.map((d,f)=>f===r.index?{...d,isOpen:!d.isOpen}:{...d,isOpen:!1});break}default:return a}}),Ne=()=>{const{modifiedData:s}=J(),{formatMessage:r}=(0,S.Z)(),[{collapses:a},d]=(0,e.useReducer)(ke,Ie,u=>Le(u,s)),f=u=>d({type:"TOGGLE_COLLAPSE",index:u});return e.createElement(y.k,{direction:"column",alignItems:"stretch",gap:1},a.map((u,x)=>e.createElement(Re.U,{expanded:u.isOpen,onToggle:()=>f(x),key:u.name,variant:x%2===0?"secondary":void 0},e.createElement(Ce.B,{title:De(u.name),description:r({id:"users-permissions.Plugin.permissions.plugins.description",defaultMessage:"Define all allowed actions for the {name} plugin."},{name:u.name}),variant:x%2?"primary":"secondary"}),e.createElement(Ae.v,null,e.createElement(P.x,null,e.createElement(Ue,{permissions:s[u.name],name:u.name}))))))};var $e=t(41609),we=t.n($e),Fe=t(82569),Ge=t.n(Fe),We=t(35161),He=t.n(We),Ke=t(13217),Ve=t.n(Ke);const ze=s=>{switch(s){case"POST":return{text:"success600",border:"success200",background:"success100"};case"GET":return{text:"secondary600",border:"secondary200",background:"secondary100"};case"PUT":return{text:"warning600",border:"warning200",background:"warning100"};case"DELETE":return{text:"danger600",border:"danger200",background:"danger100"};default:return{text:"neutral600",border:"neutral200",background:"neutral100"}}},Ye=(0,X.ZP)(P.x)`
  margin: -1px;
  border-radius: ${({theme:s})=>s.spaces[1]} 0 0 ${({theme:s})=>s.spaces[1]};
`;function _({route:s}){const{formatMessage:r}=(0,S.Z)(),{method:a,handler:d,path:f}=s,u=f?Ve()(f.split("/")):[],[x="",R=""]=d?d.split("."):[],C=ze(s.method);return e.createElement(y.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(h.Z,{variant:"delta",as:"h3"},r({id:"users-permissions.BoundRoute.title",defaultMessage:"Bound route to"}),"\xA0",e.createElement("span",null,x),e.createElement(h.Z,{variant:"delta",textColor:"primary600"},".",R)),e.createElement(y.k,{hasRadius:!0,background:"neutral0",borderColor:"neutral200",gap:0},e.createElement(Ye,{background:C.background,borderColor:C.border,padding:2},e.createElement(h.Z,{fontWeight:"bold",textColor:C.text},a)),e.createElement(P.x,{paddingLeft:2,paddingRight:2},He()(u,v=>e.createElement(h.Z,{key:v,textColor:v.includes(":")?"neutral600":"neutral900"},"/",v)))))}_.defaultProps={route:{handler:"Nocontroller.error",method:"GET",path:"/there-is-no-path"}},_.propTypes={route:B().shape({handler:B().string,method:B().string,path:B().string})};const Xe=_,Qe=()=>{const{formatMessage:s}=(0,S.Z)(),{selectedAction:r,routes:a}=J(),d=Ge()(r.split("."),"controllers"),f=Y()(a,d[0]),u=d.slice(1).join("."),x=we()(f)?[]:f.filter(R=>R.handler.endsWith(u));return e.createElement(D.P,{col:5,background:"neutral150",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,style:{minHeight:"100%"}},r?e.createElement(y.k,{direction:"column",alignItems:"stretch",gap:2},x.map((R,C)=>e.createElement(Xe,{key:C,route:R}))):e.createElement(y.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(h.Z,{variant:"delta",as:"h3"},s({id:"users-permissions.Policies.header.title",defaultMessage:"Advanced settings"})),e.createElement(h.Z,{as:"p",textColor:"neutral600"},s({id:"users-permissions.Policies.header.hint",defaultMessage:"Select the application's actions or the plugin's actions and click on the cog icon to display the bound route"}))))},Je=(s,r,a)=>({...s,initialData:r,modifiedData:r,routes:a});var qe=t(36968),de=t.n(qe),_e=t(69572),et=t.n(_e);const tt={initialData:{},modifiedData:{},routes:{},selectedAction:"",policies:[]},nt=(s,r)=>(0,q.ZP)(s,a=>{switch(r.type){case"ON_CHANGE":{const d=r.keys.length,f=r.keys[d-1]==="enabled";if(r.value&&f){const u=et()(r.keys,d-1).join(".");a.selectedAction=u}de()(a,["modifiedData",...r.keys],r.value);break}case"ON_CHANGE_SELECT_ALL":{const d=["modifiedData",...r.keys],f=Y()(s,d,{}),u=Object.keys(f).reduce((x,R)=>(x[R]={...f[R],enabled:r.value},x),{});de()(a,d,u);break}case"ON_RESET":{a.modifiedData=s.initialData;break}case"ON_SUBMIT_SUCCEEDED":{a.initialData=s.modifiedData;break}case"SELECT_ACTION":{const{actionToSelect:d}=r;a.selectedAction=d===s.selectedAction?"":d;break}default:return a}}),ue=(0,e.forwardRef)(({permissions:s,routes:r},a)=>{const{formatMessage:d}=(0,S.Z)(),[f,u]=(0,e.useReducer)(nt,tt,j=>Je(j,s,r));(0,e.useImperativeHandle)(a,()=>({getPermissions(){return{permissions:f.modifiedData}},resetForm(){u({type:"ON_RESET"})},setFormAfterSubmit(){u({type:"ON_SUBMIT_SUCCEEDED"})}}));const v={...f,onChange:({target:{name:j,value:O}})=>u({type:"ON_CHANGE",keys:j.split("."),value:O==="empty__string_value"?"":O}),onChangeSelectAll:({target:{name:j,value:O}})=>u({type:"ON_CHANGE_SELECT_ALL",keys:j.split("."),value:O}),onSelectedAction:j=>u({type:"SELECT_ACTION",actionToSelect:j})};return e.createElement(se,{value:v},e.createElement(T.r,{gap:0,shadow:"filterShadow",hasRadius:!0,background:"neutral0"},e.createElement(D.P,{col:7,paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(y.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(y.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(h.Z,{variant:"delta",as:"h2"},d({id:(0,K.Z)("Plugins.header.title"),defaultMessage:"Permissions"})),e.createElement(h.Z,{as:"p",textColor:"neutral600"},d({id:(0,K.Z)("Plugins.header.description"),defaultMessage:"Only actions bound by a route are listed below."}))),e.createElement(Ne,null))),e.createElement(Qe,null)))});ue.propTypes={permissions:B().object.isRequired,routes:B().object.isRequired};const me=(0,e.memo)(ue),Ht={isLoading:!0,modifiedData:{}},Kt=(s,r)=>produce(s,a=>{switch(r.type){case"GET_DATA":{a.isLoading=!0,a.modifiedData={};break}case"GET_DATA_SUCCEEDED":{a.isLoading=!1,a.modifiedData=r.data;break}case"GET_DATA_ERROR":{a.isLoading=!0;break}case"ON_SUBMIT_SUCCEEDED":{a.modifiedData=r.data;break}default:return a}}),Vt=null,zt=(s,r)=>{const{isLoading:a,allowedActions:d}=useRBAC(r),[{isLoading:f,modifiedData:u},x]=useReducer(reducer,initialState),R=useNotification(),C=useRef(!0),{get:v}=useFetchClient();useEffect(()=>(a||(async()=>{try{x({type:"GET_DATA"});const{data:p}=await v(`/users-permissions/${s}`);x({type:"GET_DATA_SUCCEEDED",data:p})}catch(p){C.current&&(x({type:"GET_DATA_ERROR"}),console.error(p),R({type:"warning",message:{id:"notification.error"}}))}})(),()=>{C.current=!1}),[a,s,v,R]);const j=useCallback(O=>{x({type:"ON_SUBMIT_SUCCEEDED",data:O})},[]);return{allowedActions:d,dispatchSubmitSucceeded:j,isLoading:f,isLoadingForPermissions:a,modifiedData:u}},Yt=null,Xt={roles:[],isLoading:!0},Qt=(s,r)=>produce(s,a=>{switch(r.type){case"GET_DATA":{a.isLoading=!0,a.roles=[];break}case"GET_DATA_SUCCEEDED":{a.roles=r.data,a.isLoading=!1;break}case"GET_DATA_ERROR":{a.isLoading=!1;break}default:return a}}),Jt=null,qt=(s=!0)=>{const[{roles:r,isLoading:a},d]=useReducer(reducer,initialState,()=>init(initialState,s)),f=useNotification(),u=useRef(!0),x=useFetchClient(),R=useCallback(async()=>{try{d({type:"GET_DATA"});const{data:{roles:C}}=await x.get(`/${pluginId}/roles`);d({type:"GET_DATA_SUCCEEDED",data:C})}catch(C){const v=get(C,["response","payload","message"],"An error occured");u.current&&(d({type:"GET_DATA_ERROR"}),v!=="Forbidden"&&f({type:"warning",message:v}))}},[x,f]);return useEffect(()=>(s&&R(),()=>{u.current=!1}),[s,R]),{roles:r,isLoading:a,getData:R}},_t=null;var ee=t(88767),z=t(99688);const ge=()=>{const s=(0,n.lm)(),{get:r}=(0,n.kY)(),{formatAPIError:a}=(0,n.So)(z.OB),[{data:d,isLoading:f,error:u,refetch:x},{data:R,isLoading:C,error:v,refetch:j}]=(0,ee.useQueries)([{queryKey:[l.Z,"permissions"],async queryFn(){return(await r(`/${l.Z}/permissions`)).data.permissions}},{queryKey:[l.Z,"routes"],async queryFn(){return(await r(`/${l.Z}/routes`)).data.routes}}]),O=async()=>{await Promise.all([x(),j()])};(0,e.useEffect)(()=>{u&&s({type:"warning",message:a(u)})},[s,u,a]),(0,e.useEffect)(()=>{v&&s({type:"warning",message:a(v)})},[s,v,a]);const p=f||C;return{permissions:d?(0,z.YX)(d):{},routes:R??{},getData:O,isLoading:p}},st={role:{},isLoading:!0},at=(s,r)=>(0,q.ZP)(s,a=>{switch(r.type){case"GET_DATA_SUCCEEDED":{a.role=r.role,a.isLoading=!1;break}case"GET_DATA_ERROR":{a.isLoading=!1;break}case"ON_SUBMIT_SUCCEEDED":{a.role.name=r.name,a.role.description=r.description;break}default:return a}}),rt=s=>{const[r,a]=(0,e.useReducer)(at,st),d=(0,n.lm)(),f=(0,e.useRef)(null),{get:u}=(0,n.kY)();(0,e.useEffect)(()=>(f.current=!0,s?x(s):a({type:"GET_DATA_SUCCEEDED",role:{}}),()=>f.current=!1),[s]);const x=async C=>{try{const{data:{role:v}}=await u(`/${l.Z}/roles/${C}`);f.current&&a({type:"GET_DATA_SUCCEEDED",role:v})}catch(v){console.error(v),a({type:"GET_DATA_ERROR"}),d({type:"warning",message:{id:"notification.error"}})}},R=(0,e.useCallback)(C=>{a({type:"ON_SUBMIT_SUCCEEDED",...C})},[]);return{...r,onSubmitSucceeded:R}};var te=t(87561);const pe=te.Ry().shape({name:te.Z_().required(n.I0.required),description:te.Z_().required(n.I0.required)}),ot=()=>{const{formatMessage:s}=(0,S.Z)(),[r,a]=(0,e.useState)(!1),d=(0,n.lm)(),{goBack:f}=(0,o.k6)(),{lockApp:u,unlockApp:x}=(0,n.o1)(),{isLoading:R,permissions:C,routes:v}=ge(),{trackUsage:j}=(0,n.rS)(),O=(0,e.useRef)(),{post:p}=(0,n.kY)(),N=async w=>{u(),a(!0);try{const U=O.current.getPermissions();await p(`/${l.Z}/roles`,{...w,...U,users:[]}),j("didCreateRole"),d({type:"success",message:{id:(0,K.Z)("Settings.roles.created"),defaultMessage:"Role created"}}),f()}catch(U){console.error(U),d({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}a(!1),x()};return e.createElement(g.o,null,e.createElement(n.SL,{name:"Roles"}),e.createElement(I.J9,{enableReinitialize:!0,initialValues:{name:"",description:""},onSubmit:N,validationSchema:pe},({handleSubmit:w,values:U,handleChange:$,errors:F})=>e.createElement(n.l0,{noValidate:!0,onSubmit:w},e.createElement(c.T,{primaryAction:!R&&e.createElement(A.z,{type:"submit",loading:r,startIcon:e.createElement(M.Z,null)},s({id:"global.save",defaultMessage:"Save"})),title:s({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:s({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"})}),e.createElement(L.D,null,e.createElement(y.k,{direction:"column",alignItems:"stretch",gap:7},e.createElement(P.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(y.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(h.Z,{variant:"delta",as:"h2"},s({id:(0,K.Z)("EditPage.form.roles"),defaultMessage:"Role details"})),e.createElement(T.r,{gap:4},e.createElement(D.P,{col:6},e.createElement(Z.o,{name:"name",value:U.name||"",onChange:$,label:s({id:"global.name",defaultMessage:"Name"}),error:F.name?s({id:F.name,defaultMessage:"Invalid value"}):null})),e.createElement(D.P,{col:6},e.createElement(b.g,{id:"description",value:U.description||"",onChange:$,label:s({id:"global.description",defaultMessage:"Description"}),error:F.description?s({id:F.description,defaultMessage:"Invalid value"}):null}))))),!R&&e.createElement(me,{ref:O,permissions:C,routes:v}))))))},it=()=>e.createElement(n.O4,{permissions:i._.createRole},e.createElement(ot,null));var lt=t(67109);const ct=()=>{const{formatMessage:s}=(0,S.Z)(),[r,a]=(0,e.useState)(!1),d=(0,n.lm)(),{lockApp:f,unlockApp:u}=(0,n.o1)(),{params:{id:x}}=(0,o.$B)(`/settings/${l.Z}/roles/:id`),{isLoading:R,routes:C}=ge(),{role:v,onSubmitSucceeded:j,isLoading:O}=rt(x),p=(0,e.useRef)(),{put:N}=(0,n.kY)(),w=async U=>{f(),a(!0);try{const $=p.current.getPermissions();await N(`/${l.Z}/roles/${x}`,{...U,...$,users:[]}),j({name:U.name,description:U.description}),d({type:"success",message:{id:(0,K.Z)("Settings.roles.edited"),defaultMessage:"Role edited"}})}catch($){console.error($),d({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}a(!1),u()};return O?e.createElement(n.dO,null):e.createElement(g.o,null,e.createElement(n.SL,{name:"Roles"}),e.createElement(I.J9,{enableReinitialize:!0,initialValues:{name:v.name,description:v.description},onSubmit:w,validationSchema:pe},({handleSubmit:U,values:$,handleChange:F,errors:W})=>e.createElement(n.l0,{noValidate:!0,onSubmit:U},e.createElement(c.T,{primaryAction:!R&&e.createElement(A.z,{disabled:v.code==="strapi-super-admin",type:"submit",loading:r,startIcon:e.createElement(M.Z,null)},s({id:"global.save",defaultMessage:"Save"})),title:v.name,subtitle:v.description,navigationAction:e.createElement(n.rU,{startIcon:e.createElement(lt.Z,null),to:"/settings/users-permissions/roles"},s({id:"global.back",defaultMessage:"Back"}))}),e.createElement(L.D,null,e.createElement(y.k,{direction:"column",alignItems:"stretch",gap:7},e.createElement(P.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(y.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(h.Z,{variant:"delta",as:"h2"},s({id:(0,K.Z)("EditPage.form.roles"),defaultMessage:"Role details"})),e.createElement(T.r,{gap:4},e.createElement(D.P,{col:6},e.createElement(Z.o,{name:"name",value:$.name||"",onChange:F,label:s({id:"global.name",defaultMessage:"Name"}),error:W.name?s({id:W.name,defaultMessage:"Invalid value"}):null})),e.createElement(D.P,{col:6},e.createElement(b.g,{id:"description",value:$.description||"",onChange:F,label:s({id:"global.description",defaultMessage:"Description"}),error:W.description?s({id:W.description,defaultMessage:"Invalid value"}):null}))))),!R&&e.createElement(me,{ref:p,permissions:v.permissions,routes:C}))))))},dt=()=>e.createElement(n.O4,{permissions:i._.updateRole},e.createElement(ct,null));var ut=t(14087),mt=t(17034),gt=t(36989),pt=t(38939),ht=t(8060),he=t(79031),G=t(37909),Et=t(96315),ft=t(15234),Ee=t(12028),vt=t(4585),yt=t(20022);const ne=({sortedRoles:s,canDelete:r,permissions:a,setRoleToDelete:d,onDelete:f})=>{const{formatMessage:u}=(0,S.Z)(),{push:x}=(0,o.k6)(),[R,C]=f,v=p=>r&&!["public","authenticated"].includes(p.type),j=p=>{d(p),C(!R)},O=p=>{x(`/settings/${l.Z}/roles/${p}`)};return e.createElement(ft.p,null,s?.map(p=>e.createElement(he.Tr,{key:p.name,...(0,n.X7)({fn:()=>O(p.id)})},e.createElement(G.Td,{width:"20%"},e.createElement(h.Z,null,p.name)),e.createElement(G.Td,{width:"50%"},e.createElement(h.Z,null,p.description)),e.createElement(G.Td,{width:"30%"},e.createElement(h.Z,null,u({id:"Roles.RoleRow.user-count",defaultMessage:"{number, plural, =0 {# user} one {# user} other {# users}}"},{number:p.nb_users}))),e.createElement(G.Td,null,e.createElement(y.k,{justifyContent:"end",...n.UW},e.createElement(n.jW,{permissions:a.updateRole},e.createElement(Ee.h,{onClick:()=>O(p.id),noBorder:!0,icon:e.createElement(vt.Z,null),label:u({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:`${p.name}`})})),v(p)&&e.createElement(n.jW,{permissions:a.deleteRole},e.createElement(Ee.h,{onClick:()=>j(p.id),noBorder:!0,icon:e.createElement(yt.Z,null),label:u({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${p.name}`})})))))))},xt=ne;ne.defaultProps={canDelete:!1},ne.propTypes={onDelete:B().array.isRequired,permissions:B().object.isRequired,setRoleToDelete:B().func.isRequired,sortedRoles:B().array.isRequired,canDelete:B().bool};const Rt=async(s,r)=>{try{const{get:a}=(0,n.tg)(),{data:d}=await a("/users-permissions/roles");return r("The roles have loaded successfully"),d}catch(a){throw s({type:"warning",message:{id:"notification.error"}}),new Error(a)}},Ct=async(s,r)=>{try{const{del:a}=(0,n.tg)();await a(`/users-permissions/roles/${s}`)}catch{r({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}},At=()=>{const{trackUsage:s}=(0,n.rS)(),{formatMessage:r,locale:a}=(0,S.Z)(),{push:d}=(0,o.k6)(),f=(0,n.lm)(),{notifyStatus:u}=(0,ut.G)(),[{query:x}]=(0,n.Kx)(),R=x?._q||"",[C,v]=(0,e.useState)(!1),[j,O]=(0,e.useState)(!1),[p,N]=(0,e.useState)();(0,n.go)();const{isLoading:w,allowedActions:{canRead:U,canDelete:$}}=(0,n.ss)({create:i._.createRole,read:i._.readRoles,update:i._.updateRole,delete:i._.deleteRole}),{isLoading:F,data:{roles:W},isFetching:bt,refetch:Dt}=(0,ee.useQuery)("get-roles",()=>Rt(f,u),{initialData:{},enabled:U}),{includes:fe}=(0,n.L0)(a,{sensitivity:"base"}),ve=(0,n.Xe)(a,{sensitivity:"base"}),ye=F||bt,Lt=()=>{s("willCreateRole"),d(`/settings/${l.Z}/roles/new`)},Mt=()=>{v(!C)},St={roles:{id:(0,z.OB)("Roles.empty"),defaultMessage:"You don't have any roles yet."},search:{id:(0,z.OB)("Roles.empty.search"),defaultMessage:"No roles match the search."}},Ot=r({id:"global.roles",defaultMessage:"Roles"}),Zt=(0,ee.useMutation)(H=>Ct(H,f),{async onSuccess(){await Dt()}}),Bt=async()=>{O(!0),await Zt.mutateAsync(p),v(!C),O(!1)},Q=(W||[]).filter(H=>fe(H.name,R)||fe(H.description,R)).sort((H,xe)=>ve.compare(H.name,xe.name)||ve.compare(H.description,xe.description)),jt=R&&!Q.length?"search":"roles",Ut=4,It=(W?.length||0)+1;return e.createElement(mt.A,null,e.createElement(n.SL,{name:Ot}),e.createElement(g.o,{"aria-busy":ye},e.createElement(c.T,{title:r({id:"global.roles",defaultMessage:"Roles"}),subtitle:r({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),primaryAction:e.createElement(n.jW,{permissions:i._.createRole},e.createElement(A.z,{onClick:Lt,startIcon:e.createElement(Et.Z,null),size:"S"},r({id:(0,z.OB)("List.button.roles"),defaultMessage:"Add new role"})))}),e.createElement(gt.Z,{startActions:e.createElement(n.m,{label:r({id:"app.component.search.label",defaultMessage:"Search"})})}),e.createElement(L.D,null,!U&&e.createElement(n.ZF,null),(ye||w)&&e.createElement(n.dO,null),U&&Q&&Q?.length?e.createElement(pt.i,{colCount:Ut,rowCount:It},e.createElement(ht.h,null,e.createElement(he.Tr,null,e.createElement(G.Th,null,e.createElement(h.Z,{variant:"sigma",textColor:"neutral600"},r({id:"global.name",defaultMessage:"Name"}))),e.createElement(G.Th,null,e.createElement(h.Z,{variant:"sigma",textColor:"neutral600"},r({id:"global.description",defaultMessage:"Description"}))),e.createElement(G.Th,null,e.createElement(h.Z,{variant:"sigma",textColor:"neutral600"},r({id:"global.users",defaultMessage:"Users"}))),e.createElement(G.Th,null,e.createElement(oe.T,null,r({id:"global.actions",defaultMessage:"Actions"}))))),e.createElement(xt,{sortedRoles:Q,canDelete:$,permissions:i._,setRoleToDelete:N,onDelete:[C,v]})):e.createElement(n.x7,{content:St[jt]})),e.createElement(n.QH,{isConfirmButtonLoading:j,onConfirm:Bt,onToggleDialog:Mt,isOpen:C})))},Pt=()=>e.createElement(n.O4,{permissions:i._.accessRoles},e.createElement(At,null)),Tt=()=>e.createElement(n.O4,{permissions:i._.accessRoles},e.createElement(o.rs,null,e.createElement(o.AW,{path:`/settings/${l.Z}/roles/new`,component:it,exact:!0}),e.createElement(o.AW,{path:`/settings/${l.Z}/roles/:id`,component:dt,exact:!0}),e.createElement(o.AW,{path:`/settings/${l.Z}/roles`,component:Pt,exact:!0}),e.createElement(o.AW,{path:"",component:n.Hn})))},99688:(m,E,t)=>{"use strict";t.d(E,{YX:()=>i,OB:()=>l.Z});var e=t(41609),n=t.n(e);const i=g=>Object.keys(g).reduce((c,A)=>{const L=g[A].controllers,y=Object.keys(L).reduce((P,h)=>(n()(L[h])||(P[h]=L[h]),P),{});return n()(y)||(c[A]={controllers:y}),c},{});var l=t(97961)},47443:(m,E,t)=>{var e=t(42118);function n(o,i){var l=o==null?0:o.length;return!!l&&e(o,i,0)>-1}m.exports=n},1196:m=>{function E(t,e,n){for(var o=-1,i=t==null?0:t.length;++o<i;)if(n(e,t[o]))return!0;return!1}m.exports=E},20731:(m,E,t)=>{var e=t(88668),n=t(47443),o=t(1196),i=t(29932),l=t(7518),g=t(74757),c=200;function A(L,y,P,h){var T=-1,D=n,Z=!0,b=L.length,M=[],I=y.length;if(!b)return M;P&&(y=i(y,l(P))),h?(D=o,Z=!1):y.length>=c&&(D=g,Z=!1,y=new e(y));e:for(;++T<b;){var S=L[T],k=P==null?S:P(S);if(S=h||S!==0?S:0,Z&&k===k){for(var B=I;B--;)if(y[B]===k)continue e;M.push(S)}else D(y,k,h)||M.push(S)}return M}m.exports=A},89881:(m,E,t)=>{var e=t(47816),n=t(99291),o=n(e);m.exports=o},41848:m=>{function E(t,e,n,o){for(var i=t.length,l=n+(o?1:-1);o?l--:++l<i;)if(e(t[l],l,t))return l;return-1}m.exports=E},42118:(m,E,t)=>{var e=t(41848),n=t(62722),o=t(42351);function i(l,g,c){return g===g?o(l,g,c):e(l,n,c)}m.exports=i},62722:m=>{function E(t){return t!==t}m.exports=E},69199:(m,E,t)=>{var e=t(89881),n=t(98612);function o(i,l){var g=-1,c=n(i)?Array(i.length):[];return e(i,function(A,L,y){c[++g]=l(A,L,y)}),c}m.exports=o},82689:(m,E,t)=>{var e=t(29932),n=t(97786),o=t(67206),i=t(69199),l=t(71131),g=t(7518),c=t(85022),A=t(6557),L=t(1469);function y(P,h,T){h.length?h=e(h,function(b){return L(b)?function(M){return n(M,b.length===1?b[0]:b)}:b}):h=[A];var D=-1;h=e(h,g(o));var Z=i(P,function(b,M,I){var S=e(h,function(k){return k(b)});return{criteria:S,index:++D,value:b}});return l(Z,function(b,M){return c(b,M,T)})}m.exports=y},71131:m=>{function E(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t}m.exports=E},26393:(m,E,t)=>{var e=t(33448);function n(o,i){if(o!==i){var l=o!==void 0,g=o===null,c=o===o,A=e(o),L=i!==void 0,y=i===null,P=i===i,h=e(i);if(!y&&!h&&!A&&o>i||A&&L&&P&&!y&&!h||g&&L&&P||!l&&P||!c)return 1;if(!g&&!A&&!h&&o<i||h&&l&&c&&!g&&!A||y&&l&&c||!L&&c||!P)return-1}return 0}m.exports=n},85022:(m,E,t)=>{var e=t(26393);function n(o,i,l){for(var g=-1,c=o.criteria,A=i.criteria,L=c.length,y=l.length;++g<L;){var P=e(c[g],A[g]);if(P){if(g>=y)return P;var h=l[g];return P*(h=="desc"?-1:1)}}return o.index-i.index}m.exports=n},99291:(m,E,t)=>{var e=t(98612);function n(o,i){return function(l,g){if(l==null)return l;if(!e(l))return o(l,g);for(var c=l.length,A=i?c:-1,L=Object(l);(i?A--:++A<c)&&g(L[A],A,L)!==!1;);return l}}m.exports=n},42351:m=>{function E(t,e,n){for(var o=n-1,i=t.length;++o<i;)if(t[o]===e)return o;return-1}m.exports=E},35161:(m,E,t)=>{var e=t(29932),n=t(67206),o=t(69199),i=t(1469);function l(g,c){var A=i(g)?e:o;return A(g,n(c,3))}m.exports=l},89734:(m,E,t)=>{var e=t(21078),n=t(82689),o=t(5976),i=t(16612),l=o(function(g,c){if(g==null)return[];var A=c.length;return A>1&&i(g,c[0],c[1])?c=[]:A>2&&i(c[0],c[1],c[2])&&(c=[c[0]]),n(g,e(c,1),[])});m.exports=l},13217:(m,E,t)=>{var e=t(14259);function n(o){var i=o==null?0:o.length;return i?e(o,1,i):[]}m.exports=n},69572:(m,E,t)=>{var e=t(14259),n=t(40554);function o(i,l,g){return i&&i.length?(l=g||l===void 0?1:n(l),e(i,0,l<0?0:l)):[]}m.exports=o},82569:(m,E,t)=>{var e=t(20731),n=t(5976),o=t(29246),i=n(function(l,g){return o(l)?e(l,g):[]});m.exports=i},36989:(m,E,t)=>{"use strict";t.d(E,{Z:()=>o});var e=t(85893),n=t(11047);const o=({startActions:i,endActions:l})=>!i&&!l?null:(0,e.jsxs)(n.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(n.k,{gap:2,wrap:"wrap",children:i}),(0,e.jsx)(n.k,{gap:2,shrink:0,wrap:"wrap",children:l})]})},49066:(m,E,t)=>{"use strict";t.d(E,{D:()=>o});var e=t(85893),n=t(41580);const o=({children:i})=>(0,e.jsx)(n.x,{paddingLeft:10,paddingRight:10,children:i})},53979:(m,E,t)=>{"use strict";t.d(E,{A:()=>h,T:()=>y});var e=t(85893),n=t(67294),o=t(71997);const i=T=>{const D=(0,n.useRef)(null),[Z,b]=(0,n.useState)(!0),M=([I])=>{b(I.isIntersecting)};return(0,n.useEffect)(()=>{const I=D.current,S=new IntersectionObserver(M,T);return I&&S.observe(D.current),()=>{I&&S.disconnect()}},[D,T]),[D,Z]};var l=t(79698);const g=(T,D)=>{const Z=(0,l.W)(D);(0,n.useLayoutEffect)(()=>{const b=new ResizeObserver(Z);return Array.isArray(T)?T.forEach(M=>{M.current&&b.observe(M.current)}):T.current&&b.observe(T.current),()=>{b.disconnect()}},[T,Z])};var c=t(41580),A=t(11047),L=t(75515);const y=T=>{const D=(0,n.useRef)(null),[Z,b]=(0,n.useState)(null),[M,I]=i({root:null,rootMargin:"0px",threshold:0});return g(M,()=>{M.current&&b(M.current.getBoundingClientRect())}),(0,n.useEffect)(()=>{D.current&&b(D.current.getBoundingClientRect())},[D]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:Z?.height},ref:M,children:I&&(0,e.jsx)(h,{ref:D,...T})}),!I&&(0,e.jsx)(h,{...T,sticky:!0,width:Z?.width})]})};y.displayName="HeaderLayout";const P=(0,o.ZP)(c.x)`
  width: ${({width:T})=>T?`${T/16}rem`:void 0};
  z-index: ${({theme:T})=>T.zIndices[1]};
`,h=n.forwardRef(({navigationAction:T,primaryAction:D,secondaryAction:Z,subtitle:b,title:M,sticky:I,width:S,...k},B)=>{const V=typeof b=="string";return I?(0,e.jsx)(P,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:S,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(A.k,{justifyContent:"space-between",children:[(0,e.jsxs)(A.k,{children:[T&&(0,e.jsx)(c.x,{paddingRight:3,children:T}),(0,e.jsxs)(c.x,{children:[(0,e.jsx)(L.Z,{variant:"beta",as:"h1",...k,children:M}),V?(0,e.jsx)(L.Z,{variant:"pi",textColor:"neutral600",children:b}):b]}),Z?(0,e.jsx)(c.x,{paddingLeft:4,children:Z}):null]}),(0,e.jsx)(A.k,{children:D?(0,e.jsx)(c.x,{paddingLeft:2,children:D}):void 0})]})}):(0,e.jsxs)(c.x,{ref:B,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:T?6:8,background:"neutral100","data-strapi-header":!0,children:[T?(0,e.jsx)(c.x,{paddingBottom:2,children:T}):null,(0,e.jsxs)(A.k,{justifyContent:"space-between",children:[(0,e.jsxs)(A.k,{minWidth:0,children:[(0,e.jsx)(L.Z,{as:"h1",variant:"alpha",...k,children:M}),Z?(0,e.jsx)(c.x,{paddingLeft:4,children:Z}):null]}),D]}),V?(0,e.jsx)(L.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:b}):b]})})},17034:(m,E,t)=>{"use strict";t.d(E,{A:()=>g});var e=t(85893),n=t(71997),o=t(41580);const i=(0,n.ZP)(o.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:c})=>c?"auto 1fr":"1fr"};
`,l=(0,n.ZP)(o.x)`
  overflow-x: hidden;
`,g=({sideNav:c,children:A})=>(0,e.jsxs)(i,{hasSideNav:!!c,children:[c,(0,e.jsx)(l,{paddingBottom:10,children:A})]})},185:(m,E,t)=>{"use strict";t.d(E,{o:()=>l});var e=t(85893),n=t(71997),o=t(41580);const i=(0,n.ZP)(o.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,l=({labelledBy:g="main-content-title",...c})=>(0,e.jsx)(i,{"aria-labelledby":g,as:"main",id:"main-content",tabIndex:-1,...c})},67109:(m,E,t)=>{"use strict";t.d(E,{Z:()=>o});var e=t(85893);const n=i=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...i,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),o=n},78114:(m,E,t)=>{"use strict";t.d(E,{Z:()=>o});var e=t(85893);const n=i=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...i,children:(0,e.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 0 0-.374.68v1.65a.797.797 0 0 0 .384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 0 0 .216.744l1.167 1.166a.801.801 0 0 0 .744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 0 0 .679.374h1.649a.797.797 0 0 0 .686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 0 0 .744-.216l1.166-1.167a.803.803 0 0 0 .216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 0 0 .374-.679v-1.649a.796.796 0 0 0-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 0 0-.216-.744l-1.166-1.173a.802.802 0 0 0-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 0 0-.68-.374h-1.65a.797.797 0 0 0-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 0 0-.744.216L2.921 4.094a.802.802 0 0 0-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",clipRule:"evenodd"})}),o=n}}]);
