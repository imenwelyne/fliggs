"use strict";(self.webpackChunkcorporate_blog_template=self.webpackChunkcorporate_blog_template||[]).push([[8936],{36318:(fe,y,t)=>{t.r(y),t.d(y,{default:()=>K});var e=t(67294),i=t(30422),u=t(86706),x=t(36364),F=t(29728),m=t(11047),V=t(77197),E=t(75515),X=t(85018),d=t(41054),Y=t(36968),Z=t.n(Y),z=t(86896),B=t(88767),H=t(16550),N=t(92686),P=t(79194),j=t(7761),k=t(11984),g=t(43390),c=t(38705),J=t(68997),Q=t(85230),n=t(86978),G=t(52258),S=t(3848),U=t(66578);function $(){const{formatMessage:s}=(0,z.Z)(),{post:b}=(0,i.kY)(),{push:q}=(0,H.k6)(),{formatAPIError:_}=(0,i.So)(),w=(0,u.I0)(),C=(0,i.lm)(),{collectionTypes:ee,singleTypes:te,isLoading:oe}=(0,N.G)(),{isLoading:T,meta:v,workflows:M}=(0,G.n)(),{clientState:{currentWorkflow:{data:l,isDirty:se}}}=(0,u.v9)(o=>o?.[n.sN]??S.E),[I,f]=e.useState(!1),{isLoading:L,getFeature:ne}=(0,j.q5)(),[ae,le]=e.useState(null),[W,h]=e.useState({}),a=ne("review-workflows"),A=M.flatMap(o=>o.contentTypes),{mutateAsync:re,isLoading:R}=(0,B.useMutation)(async({workflow:o})=>{const{data:{data:r}}=await b("/admin/review-workflows/workflows",{data:o});return r},{onSuccess(){C({type:"success",message:{id:"Settings.review-workflows.create.page.notification.success",defaultMessage:"Workflow successfully created"}})}}),D=async()=>{h({});try{const o=await re({workflow:l});return q(`/settings/review-workflows/${o.id}`),o}catch(o){return o.response.data?.error?.name==="ValidationError"&&o.response.data?.error?.details?.errors?.length>0&&le(o.response.data?.error?.details?.errors.reduce((r,O)=>(Z()(r,O.path,O.message),r),{})),C({type:"warning",message:_(o)}),null}},ie=async()=>{await D()},ce=()=>{h({})},p=(0,d.TA)({enableReinitialize:!0,initialErrors:ae,initialValues:l,async onSubmit(){const o=l.contentTypes.some(r=>A.includes(r));a?.[n.Ef]&&v?.workflowCount>=parseInt(a[n.Ef],10)?f("workflow"):a?.[n._X]&&l.stages.length>=parseInt(a[n._X],10)?f("stage"):o?h(r=>({...r,hasReassignedContentTypes:!0})):D()},validate(o){return(0,U.V)({values:o,formatMessage:s})}});return(0,P.v)(n.sN,S.I),e.useEffect(()=>{w((0,k.Js)()),w((0,k.CI)({name:""}))},[w]),e.useEffect(()=>{!T&&!L&&(a?.[n.Ef]&&v?.workflowsTotal>=parseInt(a[n.Ef],10)?f("workflow"):a?.[n._X]&&l.stages.length>=parseInt(a[n._X],10)&&f("stage"))},[L,T,a,v?.workflowsTotal,l.stages.length]),e.createElement(e.Fragment,null,e.createElement(g.lx,null),e.createElement(d.Hy,{value:p},e.createElement(d.l0,{onSubmit:p.handleSubmit},e.createElement(g.h4,{navigationAction:e.createElement(g.eJ,{href:"/settings/review-workflows"}),primaryAction:e.createElement(F.z,{startIcon:e.createElement(X.Z,null),type:"submit",size:"M",disabled:!se,isLoading:R},s({id:"global.save",defaultMessage:"Save"})),title:s({id:"Settings.review-workflows.create.page.title",defaultMessage:"Create Review Workflow"}),subtitle:s({id:"Settings.review-workflows.page.subtitle",defaultMessage:"{count, plural, one {# stage} other {# stages}}"},{count:l?.stages?.length??0})}),e.createElement(g.fC,null,e.createElement(m.k,{alignItems:"stretch",direction:"column",gap:7},oe?e.createElement(V.a,null,s({id:"Settings.review-workflows.page.isLoading",defaultMessage:"Workflow is loading"})):e.createElement(m.k,{alignItems:"stretch",direction:"column",gap:7},e.createElement(Q.Y,{contentTypes:{collectionTypes:ee,singleTypes:te},workflows:M}),e.createElement(J.U,{stages:p.values?.stages})))))),e.createElement(i.QH.Root,{isConfirmButtonLoading:R,isOpen:Object.keys(W).length>0,onToggleDialog:ce,onConfirm:ie},e.createElement(i.QH.Body,null,e.createElement(m.k,{direction:"column",gap:5},W.hasReassignedContentTypes&&e.createElement(E.Z,{textAlign:"center",variant:"omega"},s({id:"Settings.review-workflows.page.delete.confirm.contentType.body",defaultMessage:"{count} {count, plural, one {content-type} other {content-types}} {count, plural, one {is} other {are}} already mapped to {count, plural, one {another workflow} other {other workflows}}. If you save changes, {count, plural, one {this} other {these}} {count, plural, one {content-type} other {{count} content-types}} will no more be mapped to the {count, plural, one {another workflow} other {other workflows}} and all corresponding information will be removed."},{count:A.filter(o=>l.contentTypes.includes(o)).length})),e.createElement(E.Z,{textAlign:"center",variant:"omega"},s({id:"Settings.review-workflows.page.delete.confirm.confirm",defaultMessage:"Are you sure you want to save?"}))))),e.createElement(c.fC,{isOpen:I==="workflow",onClose:()=>f(!1)},e.createElement(c.Dx,null,s({id:"Settings.review-workflows.create.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})),e.createElement(c.uT,null,s({id:"Settings.review-workflows.create.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."}))),e.createElement(c.fC,{isOpen:I==="stage",onClose:()=>f(!1)},e.createElement(c.Dx,null,s({id:"Settings.review-workflows.create.page.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})),e.createElement(c.uT,null,s({id:"Settings.review-workflows.create.page.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."}))))}function K(){const s=(0,u.v9)(x._);return e.createElement(i.O4,{permissions:s.settings["review-workflows"].create},e.createElement($,null))}}}]);
