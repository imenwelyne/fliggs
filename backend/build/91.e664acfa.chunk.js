(self.webpackChunkcorporate_blog_template=self.webpackChunkcorporate_blog_template||[]).push([[91],{44174:o=>{function i(t,n,e,s){for(var d=-1,r=t==null?0:t.length;++d<r;){var a=t[d];n(s,a,e(a),t)}return s}o.exports=i},47443:(o,i,t)=>{var n=t(42118);function e(s,d){var r=s==null?0:s.length;return!!r&&n(s,d,0)>-1}o.exports=e},1196:o=>{function i(t,n,e){for(var s=-1,d=t==null?0:t.length;++s<d;)if(e(n,t[s]))return!0;return!1}o.exports=i},48983:(o,i,t)=>{var n=t(40371),e=n("length");o.exports=e},81119:(o,i,t)=>{var n=t(89881);function e(s,d,r,a){return n(s,function(l,x,h){d(a,l,r(l),h)}),a}o.exports=e},41848:o=>{function i(t,n,e,s){for(var d=t.length,r=e+(s?1:-1);s?r--:++r<d;)if(n(t[r],r,t))return r;return-1}o.exports=i},42118:(o,i,t)=>{var n=t(41848),e=t(62722),s=t(42351);function d(r,a,l){return a===a?s(r,a,l):n(r,e,l)}o.exports=d},62722:o=>{function i(t){return t!==t}o.exports=i},45652:(o,i,t)=>{var n=t(88668),e=t(47443),s=t(1196),d=t(74757),r=t(23593),a=t(21814),l=200;function x(h,g,j){var p=-1,c=e,O=h.length,f=!0,v=[],u=v;if(j)f=!1,c=s;else if(O>=l){var m=g?null:r(h);if(m)return a(m);f=!1,c=d,u=new n}else u=g?[]:v;t:for(;++p<O;){var E=h[p],C=g?g(E):E;if(E=j||E!==0?E:0,f&&C===C){for(var M=u.length;M--;)if(u[M]===C)continue t;g&&u.push(C),v.push(E)}else c(u,C,j)||(u!==v&&u.push(C),v.push(E))}return v}o.exports=x},55189:(o,i,t)=>{var n=t(44174),e=t(81119),s=t(67206),d=t(1469);function r(a,l){return function(x,h){var g=d(x)?n:e,j=l?l():{};return g(x,a,s(h,2),j)}}o.exports=r},23593:(o,i,t)=>{var n=t(58525),e=t(50308),s=t(21814),d=1/0,r=n&&1/s(new n([,-0]))[1]==d?function(a){return new n(a)}:e;o.exports=r},42351:o=>{function i(t,n,e){for(var s=e-1,d=t.length;++s<d;)if(t[s]===n)return s;return-1}o.exports=i},88016:(o,i,t)=>{var n=t(48983),e=t(62689),s=t(21903);function d(r){return e(r)?s(r):n(r)}o.exports=d},21903:o=>{var i="\\ud800-\\udfff",t="\\u0300-\\u036f",n="\\ufe20-\\ufe2f",e="\\u20d0-\\u20ff",s=t+n+e,d="\\ufe0e\\ufe0f",r="["+i+"]",a="["+s+"]",l="\\ud83c[\\udffb-\\udfff]",x="(?:"+a+"|"+l+")",h="[^"+i+"]",g="(?:\\ud83c[\\udde6-\\uddff]){2}",j="[\\ud800-\\udbff][\\udc00-\\udfff]",p="\\u200d",c=x+"?",O="["+d+"]?",f="(?:"+p+"(?:"+[h,g,j].join("|")+")"+O+c+")*",v=O+c+f,u="(?:"+[h+a+"?",a,g,j,r].join("|")+")",m=RegExp(l+"(?="+l+")|"+u+v,"g");function E(C){for(var M=m.lastIndex=0;m.test(C);)++M;return M}o.exports=E},7739:(o,i,t)=>{var n=t(89465),e=t(55189),s=Object.prototype,d=s.hasOwnProperty,r=e(function(a,l,x){d.call(a,x)?a[x].push(l):n(a,x,[l])});o.exports=r},47037:(o,i,t)=>{var n=t(44239),e=t(1469),s=t(37005),d="[object String]";function r(a){return typeof a=="string"||!e(a)&&s(a)&&n(a)==d}o.exports=r},50308:o=>{function i(){}o.exports=i},84238:(o,i,t)=>{var n=t(280),e=t(64160),s=t(98612),d=t(47037),r=t(88016),a="[object Map]",l="[object Set]";function x(h){if(h==null)return 0;if(s(h))return d(h)?r(h):h.length;var g=e(h);return g==a||g==l?h.size:n(h).length}o.exports=x},7334:(o,i,t)=>{var n=t(79833);function e(s){return n(s).toLowerCase()}o.exports=e},44908:(o,i,t)=>{var n=t(45652);function e(s){return s&&s.length?n(s):[]}o.exports=e},90608:(o,i,t)=>{"use strict";t.d(i,{O:()=>e});var n=t(29178);const e=n.Wx},17034:(o,i,t)=>{"use strict";t.d(i,{A:()=>a});var n=t(85893),e=t(1565),s=t(41580);const d=(0,e.default)(s.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:l})=>l?"auto 1fr":"1fr"};
`,r=(0,e.default)(s.x)`
  overflow-x: hidden;
`,a=({sideNav:l,children:x})=>(0,n.jsxs)(d,{hasSideNav:!!l,children:[l,(0,n.jsx)(r,{paddingBottom:10,children:x})]})},23620:(o,i,t)=>{"use strict";t.d(i,{r:()=>j});var n=t(85893),e=t(53547),s=t(17772),d=t(75621),r=t(1565),a=t(15585),l=t(75515),x=t(41580);const h=r.default.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:p})=>p?"none":void 0};
  color: ${({disabled:p,theme:c})=>p?c.colors.neutral600:c.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${l.Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:p})=>p.colors.primary500};
  }

  &:active {
    color: ${({theme:p})=>p.colors.primary700};
  }

  ${a.BF};
`,g=(0,r.default)(x.x)`
  display: flex;
`,j=e.forwardRef(({children:p,href:c,to:O,disabled:f=!1,startIcon:v,endIcon:u,...m},E)=>(0,n.jsxs)(h,{as:O&&!f?d.OL:"a",target:c?"_blank":void 0,rel:c?"noreferrer noopener":void 0,to:f?void 0:O,href:f?"#":c,disabled:f,ref:E,...m,children:[v&&(0,n.jsx)(g,{as:"span","aria-hidden":!0,paddingRight:2,children:v}),(0,n.jsx)(l.Z,{children:p}),u&&!c&&(0,n.jsx)(g,{as:"span","aria-hidden":!0,paddingLeft:2,children:u}),c&&(0,n.jsx)(g,{as:"span","aria-hidden":!0,paddingLeft:2,children:(0,n.jsx)(s.Z,{})})]}))},53192:(o,i,t)=>{"use strict";t.d(i,{m:()=>a});var n=t(85893),e=t(1565),s=t(11276);const d=`${232/16}rem`,r=(0,e.default)(s.r)`
  width: ${d};
  background: ${({theme:l})=>l.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:l})=>l.colors.neutral200};
  z-index: 1;
`,a=({ariaLabel:l,...x})=>(0,n.jsx)(r,{"aria-label":l,as:"nav",...x})},60984:(o,i,t)=>{"use strict";t.d(i,{p:()=>v});var n=t(85893),e=t(53547),s=t(97184),d=t(1565),r=t(7801),a=t(2504);const l=u=>{const m=(0,e.useRef)();return(0,e.useEffect)(()=>{m.current=u}),m.current};var x=t(70004),h=t(41580),g=t(8509),j=t(49123),p=t(11047),c=t(75515),O=t(12028);const f=(0,d.default)(x.i)`
  width: ${24/16}rem;
  background-color: ${({theme:u})=>u.colors.neutral200};
`,v=({as:u="h2",label:m,searchLabel:E="",searchable:C=!1,onChange:M=()=>{},value:I="",onClear:D=()=>{},onSubmit:T=()=>{},id:b})=>{const[B,A]=(0,e.useState)(!1),L=l(B),S=(0,a.M)(b),R=(0,e.useRef)(void 0),y=(0,e.useRef)(void 0);(0,e.useEffect)(()=>{B&&R.current&&R.current.focus(),L&&!B&&y.current&&y.current.focus()},[B,L]);const _=()=>{A(P=>!P)},U=P=>{D(P),R.current.focus()},$=P=>{P.relatedTarget?.id!==S&&A(!1)},W=P=>{P.key===r.y.ESCAPE&&A(!1)};return B?(0,n.jsxs)(h.x,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4,children:[(0,n.jsx)(g.U,{children:(0,n.jsx)(j.w,{name:"searchbar",value:I,onChange:M,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:W,ref:R,onBlur:$,onClear:U,onSubmit:T,clearLabel:"Clear",size:"S",children:E})}),(0,n.jsx)(h.x,{paddingLeft:2,paddingTop:4,children:(0,n.jsx)(f,{})})]}):(0,n.jsxs)(h.x,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4,children:[(0,n.jsxs)(p.k,{justifyContent:"space-between",alignItems:"flex-start",children:[(0,n.jsx)(c.Z,{variant:"beta",as:u,children:m}),C&&(0,n.jsx)(O.h,{ref:y,onClick:_,label:E,icon:(0,n.jsx)(s.Z,{})})]}),(0,n.jsx)(h.x,{paddingTop:4,children:(0,n.jsx)(f,{})})]})}},52305:(o,i,t)=>{"use strict";t.d(i,{E:()=>p});var n=t(85893),e=t(53547),s=t(71818),d=t(1565),r=t(41580),a=t(75515),l=t(11047),x=t(63507);const h=(0,d.default)(r.x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:c})=>c.colors.neutral800};
  svg > * {
    fill: ${({theme:c})=>c.colors.neutral600};
  }

  &.active {
    ${({theme:c})=>`
      background-color: ${c.colors.primary100};
      border-right: 2px solid ${c.colors.primary600};
      svg > * {
        fill: ${c.colors.primary700};
      }
      ${a.Z} {
        color: ${c.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,g=(0,d.default)(s.Z)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:c,$active:O})=>O?c.colors.primary600:c.colors.neutral600};
  }
`,j=d.default.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,p=e.forwardRef(({children:c,icon:O=null,withBullet:f=!1,as:v=x.f,isSubSectionChild:u=!1,...m},E)=>(0,n.jsxs)(h,{as:v,icon:O,background:"neutral100",paddingLeft:u?9:7,paddingBottom:2,paddingTop:2,ref:E,...m,children:[(0,n.jsxs)(l.k,{children:[O?(0,n.jsx)(j,{children:O}):(0,n.jsx)(g,{}),(0,n.jsx)(r.x,{paddingLeft:2,children:(0,n.jsx)(a.Z,{as:"span",children:c})})]}),f&&(0,n.jsx)(r.x,{as:l.k,paddingRight:4,children:(0,n.jsx)(g,{$active:!0})})]}))},29489:(o,i,t)=>{"use strict";t.d(i,{D:()=>O});var n=t(85893),e=t(53547),s=t(1565),d=t(12645),r=t(11047),a=t(41580),l=t(75515);const x=(0,s.default)(r.k)`
  border: none;
  padding: 0;
  background: transparent;
`,h=s.default.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:f})=>f?"0deg":"180deg"});
`,g=({collapsable:f=!1,label:v,onClick:u=()=>{},ariaExpanded:m,ariaControls:E})=>f?(0,n.jsxs)(x,{as:"button",onClick:u,"aria-expanded":m,"aria-controls":E,textAlign:"left",children:[(0,n.jsx)(a.x,{paddingRight:1,children:(0,n.jsx)(l.Z,{variant:"sigma",textColor:"neutral600",children:v})}),f&&(0,n.jsx)(h,{rotated:m,children:(0,n.jsx)(d.Z,{"aria-hidden":!0})})]}):(0,n.jsx)(x,{children:(0,n.jsx)(a.x,{paddingRight:1,children:(0,n.jsx)(l.Z,{variant:"sigma",textColor:"neutral600",children:v})})});var j=t(2504),p=t(30190);const c=(0,s.default)(a.x)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:f})=>f.colors.neutral500};
    }
  }
`,O=({collapsable:f=!1,label:v,badgeLabel:u,children:m,id:E})=>{const[C,M]=(0,e.useState)(!0),I=(0,j.M)(E);return(0,n.jsxs)(r.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,n.jsx)(c,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,n.jsxs)(a.x,{position:"relative",paddingRight:u?6:0,children:[(0,n.jsx)(g,{onClick:()=>{M(D=>!D)},ariaExpanded:C,ariaControls:I,collapsable:f,label:v}),u&&(0,n.jsx)(p.C,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",children:u})]})}),(!f||C)&&(0,n.jsx)("ol",{id:I,children:e.Children.map(m,(D,T)=>(0,n.jsx)("li",{children:D},T))})]})}},34446:(o,i,t)=>{"use strict";t.d(i,{Z:()=>r});var n=t(85893),e=t(53547),s=t(41580),d=t(11047);const r=({children:a,spacing:l=2,horizontal:x=!1,...h})=>(0,n.jsx)(s.x,{paddingTop:2,paddingBottom:4,children:(0,n.jsx)(d.k,{as:"ol",gap:l,direction:x?"row":"column",alignItems:x?"center":"stretch",...h,children:e.Children.map(a,(g,j)=>(0,n.jsx)("li",{children:g},j))})})}}]);
