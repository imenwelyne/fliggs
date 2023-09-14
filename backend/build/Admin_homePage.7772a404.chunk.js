"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[3981],{62019:(z,b,n)=>{n.r(b),n.d(b,{HomePageCE:()=>U,default:()=>We});var e=n(53547),c=n(41580),T=n(17034),P=n(185),k=n(11276),y=n(67819),l=n(1784),H=n(64593),I=n(97582),v=n(86896),O=n(680);function N(t,o){var a=t.values,r=(0,I._T)(t,["values"]),i=o.values,u=(0,I._T)(o,["values"]);return(0,O.wU)(i,a)&&(0,O.wU)(r,u)}function W(t){var o=(0,v.Z)(),a=o.formatMessage,r=o.textComponent,i=r===void 0?e.Fragment:r,u=t.id,C=t.description,M=t.defaultMessage,f=t.values,p=t.children,h=t.tagName,x=h===void 0?i:h,D=t.ignoreTag,Ge={id:u,description:C,defaultMessage:M},S=a(Ge,f,{ignoreTag:D});return typeof p=="function"?p(Array.isArray(S)?S:[S]):x?e.createElement(x,null,e.Children.toArray(S)):e.createElement(e.Fragment,null,S)}W.displayName="FormattedMessage";var G=e.memo(W,N);G.displayName="MemoizedFormattedMessage";const $=G;var K=n(89548),d=n(1565),m=n(11047),E=n(75515),F=n(29728),A=n(37323),V=n(99571),Y=n(45697),s=n.n(Y),g=n(16334),w=n(43234),J=n(2364);const L=({type:t,title:o,number:a,content:r,hasLine:i})=>{const{formatMessage:u}=(0,v.Z)();return e.createElement(c.x,null,e.createElement(m.k,null,e.createElement(c.x,{minWidth:(0,l.Q1)(30),marginRight:5},e.createElement(J.Z,{type:t,number:a})),e.createElement(E.Z,{variant:"delta",as:"h3"},u(o))),e.createElement(m.k,{alignItems:"flex-start"},e.createElement(m.k,{justifyContent:"center",minWidth:(0,l.Q1)(30),marginBottom:3,marginTop:3,marginRight:5},i&&e.createElement(w.Z,{type:t,minHeight:t===g.lW?(0,l.Q1)(85):(0,l.Q1)(65)})),e.createElement(c.x,{marginTop:2},t===g.lW&&r)))};L.defaultProps={content:void 0,number:void 0,type:g.VM,hasLine:!0},L.propTypes={content:s().node,number:s().number,title:s().shape({id:s().string,defaultMessage:s().string}).isRequired,type:s().oneOf([g.lW,g.hx,g.VM]),hasLine:s().bool};const X=L,q=(t,o)=>t===-1||o<t?g.hx:o>t?g.VM:g.lW,Z=({sections:t,currentSectionKey:o})=>{const a=t.findIndex(r=>r.key===o);return e.createElement(c.x,null,t.map((r,i)=>e.createElement(X,{key:r.key,title:r.title,content:r.content,number:i+1,type:q(a,i),hasLine:i!==t.length-1})))};Z.defaultProps={currentSectionKey:void 0},Z.propTypes={sections:s().arrayOf(s().shape({key:s().string.isRequired,title:s().shape({id:s().string,defaultMessage:s().string}).isRequired,content:s().node})).isRequired,currentSectionKey:s().string};const _=Z,ee=()=>{const{guidedTourState:t,setSkipped:o}=(0,l.c1)(),{formatMessage:a}=(0,v.Z)(),{trackUsage:r}=(0,l.rS)(),i=Object.entries(V.Z).map(([f,p])=>({key:f,title:p.home.title,content:e.createElement(l.Qj,{onClick:()=>r(p.home.trackingEvent),to:p.home.cta.target,endIcon:e.createElement(A.Z,null)},a(p.home.cta.title))})),C=i.map(f=>({isDone:Object.entries(t[f.key]).every(([,p])=>p),...f})).find(f=>!f.isDone)?.key,M=()=>{o(!0),r("didSkipGuidedtour")};return e.createElement(c.x,{hasRadius:!0,shadow:"tableShadow",paddingTop:7,paddingRight:4,paddingLeft:7,paddingBottom:4,background:"neutral0"},e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(E.Z,{variant:"beta",as:"h2"},a({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"})),e.createElement(_,{sections:i,currentSectionKey:C})),e.createElement(m.k,{justifyContent:"flex-end"},e.createElement(F.z,{variant:"tertiary",onClick:M},a({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"}))))},te=t=>Object.entries(t).every(([,o])=>Object.entries(o).every(([,a])=>a));var ne=n(92686),ae=n(80902);const oe=n.p+"7e9af4fb7e723fcebf1f.svg";var le=n(45349),re=n(34023),se=n(18540),ie=n(76863);const ce=n.p+"27d16aefee06412db90a.png",de=n.p+"bb4d0d527bdfb161bc5a.svg",me=n.p+"bb3108f7fd1e6179bde1.svg",ue=d.default.a`
  text-decoration: none;
`,pe=(0,d.default)(c.x)`
  background-image: url(${({backgroundImage:t})=>t});
`,ge=(0,d.default)(m.k)`
  background: rgba(255, 255, 255, 0.3);
`,fe=()=>{const{formatMessage:t}=(0,v.Z)(),{trackUsage:o}=(0,l.rS)();return e.createElement(ue,{href:"https://cloud.strapi.io",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>{o("didClickOnTryStrapiCloudSection")}},e.createElement(m.k,{shadow:"tableShadow",hasRadius:!0,padding:6,background:"neutral0",position:"relative",gap:6},e.createElement(pe,{backgroundImage:ce,hasRadius:!0,padding:3},e.createElement(ge,{width:(0,l.Q1)(32),height:(0,l.Q1)(32),justifyContent:"center",hasRadius:!0,alignItems:"center"},e.createElement("img",{src:me,alt:t({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"})}))),e.createElement(m.k,{gap:1,direction:"column",alignItems:"start"},e.createElement(m.k,null,e.createElement(E.Z,{fontWeight:"semiBold",variant:"pi"},t({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"}))),e.createElement(E.Z,{textColor:"neutral600"},t({id:"app.components.BlockLink.cloud.content",defaultMessage:"A fully composable, and collaborative platform to boost your team velocity."})),e.createElement(c.x,{src:de,position:"absolute",top:0,right:0,as:"img"}))))},B=d.default.a`
  text-decoration: none;
`,he=()=>{const{formatMessage:t}=(0,v.Z)(),{trackUsage:o}=(0,l.rS)(),a=r=>{o(r)};return e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:5},e.createElement(fe,null),e.createElement(B,{href:"https://strapi.io/resource-center",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>a("didClickonReadTheDocumentationSection")},e.createElement(l.Y_,{title:t({id:"global.documentation",defaultMessage:"Documentation"}),subtitle:t({id:"app.components.BlockLink.documentation.content",defaultMessage:"Discover the essential concepts, guides and instructions."}),icon:e.createElement(le.Z,null),iconBackground:"primary100"})),e.createElement(B,{href:"https://strapi.io/starters",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>a("didClickonCodeExampleSection")},e.createElement(l.Y_,{title:t({id:"app.components.BlockLink.code",defaultMessage:"Code example"}),subtitle:t({id:"app.components.BlockLink.code.content",defaultMessage:"Learn by using ready-made starters for your projects."}),icon:e.createElement(re.Z,null),iconBackground:"warning100"})),e.createElement(B,{href:"https://strapi.io/blog/categories/tutorials",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>a("didClickonTutorialSection")},e.createElement(l.Y_,{title:t({id:"app.components.BlockLink.tutorial",defaultMessage:"Tutorials"}),subtitle:t({id:"app.components.BlockLink.tutorial.content",defaultMessage:"Follow step-by-step instructions to use and customize Strapi."}),icon:e.createElement(se.Z,null),iconBackground:"secondary100"})),e.createElement(B,{href:"https://strapi.io/blog",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>a("didClickonBlogSection")},e.createElement(l.Y_,{title:t({id:"app.components.BlockLink.blog",defaultMessage:"Blog"}),subtitle:t({id:"app.components.BlockLink.blog.content",defaultMessage:"Read the latest news about Strapi and the ecosystem."}),icon:e.createElement(ie.Z,null),iconBackground:"alternative100"})))};var Q=n(36182);const Ee=(0,d.default)(E.Z)`
  word-break: break-word;
`,R=({hasCreatedContentType:t,onCreateCT:o})=>{const{formatMessage:a}=(0,v.Z)();return e.createElement("div",null,e.createElement(c.x,{paddingLeft:6,paddingBottom:10},e.createElement(m.k,{direction:"column",alignItems:"flex-start",gap:5},e.createElement(E.Z,{as:"h1",variant:"alpha"},a(t?{id:"app.components.HomePage.welcome.again",defaultMessage:"Welcome \u{1F44B}"}:{id:"app.components.HomePage.welcome",defaultMessage:"Welcome on board!"})),e.createElement(Ee,{textColor:"neutral600",variant:"epsilon"},a(t?{id:"app.components.HomePage.welcomeBlock.content.again",defaultMessage:"We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback."}:{id:"app.components.HomePage.welcomeBlock.content",defaultMessage:"Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!"})),t?e.createElement(Q.r,{isExternal:!0,href:"https://strapi.io/blog"},a({id:"app.components.HomePage.button.blog",defaultMessage:"See more on the blog"})):e.createElement(F.z,{size:"L",onClick:o,endIcon:e.createElement(A.Z,null)},a({id:"app.components.HomePage.create",defaultMessage:"Create your first Content type"})))))};R.defaultProps={hasCreatedContentType:void 0,onCreateCT:void 0},R.propTypes={hasCreatedContentType:s().bool,onCreateCT:s().func};const ve=R;var ye=n(80994),ke=n(76840),Ce=n(11039),Me=n(16860),Se=n(11462),be=n(50515),Te=n(57750),Be=n(17772);const xe=(0,d.default)(ke.Z)`
  path {
    fill: #7289da !important;
  }
`,Pe=(0,d.default)(Ce.Z)`
  > path:first-child {
    fill: #ff4500;
  }
`,j=(0,d.default)(Me.Z)`
  > path:first-child {
    fill: #4945ff;
  }
  > path:nth-child(2) {
    fill: #fff;
  }
  > path:nth-child(4) {
    fill: #9593ff;
  }
`,He=(0,d.default)(Se.Z)`
  path {
    fill: #1da1f2 !important;
  }
`,Le=(0,d.default)(be.Z)`
  > path:first-child {
    fill: #231f20;
  }
  > path:nth-child(2) {
    fill: #fff9ae;
  }
  > path:nth-child(3) {
    fill: #00aeef;
  }
  > path:nth-child(4) {
    fill: #00a94f;
  }
  > path:nth-child(5) {
    fill: #f15d22;
  }
  > path:nth-child(6) {
    fill: #e31b23;
  }
`,Ze=[{name:{id:"app.components.HomePage.community.links.github",defaultMessage:"Github"},link:"https://github.com/strapi/strapi/",icon:e.createElement(Te.Z,{fill:"#7289DA"}),alt:"github"},{name:{id:"app.components.HomePage.community.links.discord",defaultMessage:"Discord"},link:"https://discord.strapi.io/",icon:e.createElement(xe,null),alt:"discord"},{name:{id:"app.components.HomePage.community.links.reddit",defaultMessage:"Reddit"},link:"https://www.reddit.com/r/Strapi/",icon:e.createElement(Pe,null),alt:"reddit"},{name:{id:"app.components.HomePage.community.links.twitter",defaultMessage:"Twitter"},link:"https://twitter.com/strapijs",icon:e.createElement(He,null),alt:"twitter"},{name:{id:"app.components.HomePage.community.links.forum",defaultMessage:"Forum"},link:"https://forum.strapi.io",icon:e.createElement(Le,null),alt:"forum"},{name:{id:"app.components.HomePage.community.links.blog",defaultMessage:"Blog"},link:"https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page",icon:e.createElement(j,null),alt:"blog"},{name:{id:"app.components.HomePage.community.links.career",defaultMessage:"We are hiring!"},link:"https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog",icon:e.createElement(j,null),alt:"career"}],Re=(0,d.default)(ye.Q)`
  display: flex;
  align-items: center;
  border: none;

  svg {
    width: ${({theme:t})=>t.spaces[6]};
    height: ${({theme:t})=>t.spaces[6]};
  }

  span {
    word-break: keep-all;
  }
`,je=(0,d.default)(k.r)`
  row-gap: ${({theme:t})=>t.spaces[2]};
  column-gap: ${({theme:t})=>t.spaces[4]};
`,De=()=>{const{formatMessage:t}=(0,v.Z)(),{communityEdition:o}=(0,l.L7)(),a=[...Ze,{icon:e.createElement(j,null),link:o?"https://discord.strapi.io":"https://support.strapi.io/support/home",name:{id:"Settings.application.get-help",defaultMessage:"Get help"}}];return e.createElement(c.x,{as:"aside","aria-labelledby":"join-the-community",background:"neutral0",hasRadius:!0,paddingRight:5,paddingLeft:5,paddingTop:6,paddingBottom:6,shadow:"tableShadow"},e.createElement(c.x,{paddingBottom:7},e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:5},e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:3},e.createElement(E.Z,{variant:"delta",as:"h2",id:"join-the-community"},t({id:"app.components.HomePage.community",defaultMessage:"Join the community"})),e.createElement(E.Z,{textColor:"neutral600"},t({id:"app.components.HomePage.community.content",defaultMessage:"Discuss with team members, contributors and developers on different channels"}))),e.createElement(Q.r,{href:"https://feedback.strapi.io/",isExternal:!0,endIcon:e.createElement(Be.Z,null)},t({id:"app.components.HomePage.roadmap",defaultMessage:"See our road map"})))),e.createElement(je,null,a.map(({icon:r,link:i,name:u})=>e.createElement(y.P,{col:6,s:12,key:u.id},e.createElement(Re,{size:"L",startIcon:r,variant:"tertiary",href:i,isExternal:!0},t(u))))))},Ie=(0,d.default)(c.x)`
  position: absolute;
  top: 0;
  right: 0;

  img {
    width: ${150/16}rem;
  }
`,U=()=>{const{collectionTypes:t,singleTypes:o,isLoading:a}=(0,ne.G)(),{guidedTourState:r,isGuidedTourVisible:i,isSkipped:u}=(0,l.c1)(),C=!te(r)&&i&&!u,{push:M}=(0,K.k6)(),f=h=>{h.preventDefault(),M("/plugins/content-type-builder/content-types/create-content-type")},p=(0,e.useMemo)(()=>{const h=x=>x.filter(D=>D.isDisplayed);return h(t).length>1||h(o).length>0},[t,o]);return a?e.createElement(l.dO,null):e.createElement(T.A,null,e.createElement($,{id:"HomePage.helmet.title",defaultMessage:"Homepage"},h=>e.createElement(H.q,{title:h[0]})),e.createElement(P.o,null,e.createElement(Ie,null,e.createElement("img",{alt:"","aria-hidden":!0,src:oe})),e.createElement(c.x,{padding:10},e.createElement(k.r,null,e.createElement(y.P,{col:8,s:12},e.createElement(ve,{onCreateCT:f,hasCreatedContentType:p}))),e.createElement(k.r,{gap:6},e.createElement(y.P,{col:8,s:12},C?e.createElement(ee,null):e.createElement(he,null)),e.createElement(y.P,{col:4,s:12},e.createElement(De,null))))))};function Oe(){const t=(0,ae.c)(U,async()=>(await n.e(8296).then(n.bind(n,66831))).HomePageEE);return t?e.createElement(t,null):null}const We=Oe},17034:(z,b,n)=>{n.d(b,{A:()=>y});var e=n(85893),c=n(1565),T=n(41580);const P=(0,c.default)(T.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:l})=>l?"auto 1fr":"1fr"};
`,k=(0,c.default)(T.x)`
  overflow-x: hidden;
`,y=({sideNav:l,children:H})=>(0,e.jsxs)(P,{hasSideNav:!!l,children:[l,(0,e.jsx)(k,{paddingBottom:10,children:H})]})}}]);
