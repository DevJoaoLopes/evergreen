(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[584],{93748:function(e,t,n){"use strict";n.d(t,{h:function(){return s}});var r=n(67294),i=n(65115),o=n(69662);function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.disabled,n=void 0!==t&&t,s=e.onKeyDown,a=e.tabIndex,c=void 0===a?0:a,l=(0,o.d)(s),d=(0,r.useCallback)((function(e){(0,i.Z)(l.current,e),e.defaultPrevented||n||e.metaKey||e.target===e.currentTarget&&("Enter"!==e.key&&" "!==e.key&&"Spacebar"!==e.key||(e.preventDefault(),e.currentTarget.click()))}),[n]);return{tabIndex:n?-1:c,onKeyDown:d}}},69662:function(e,t,n){"use strict";n.d(t,{d:function(){return i}});var r=n(67294);function i(e){var t=r.useRef(e);return t.current=e,t}},65115:function(e,t,n){"use strict";function r(e){if("function"===typeof e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e.apply(void 0,n)}}n.d(t,{Z:function(){return r}})},21608:function(e,t,n){"use strict";var r=n(87462),i=n(4942),o=n(45987),s=n(67294),a=n(94184),c=n.n(a),l=n(45697),d=n.n(l),u=n(42369),p=n(69662),f=n(93748),h=n(65115),g=n(94693),m=["appearance","direction","disabled","is","isSelected","onKeyDown","onSelect","height","className","tabIndex"],x=["className"];function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(){},v={_active:"&:active",_after:"&:after",_before:"&:before",_current:'&[aria-current="page"], &[aria-selected="true"]',_disabled:'&[aria-disabled="true"]',_focus:"&:focus",_hover:"&:hover"},y=(0,s.memo)((0,s.forwardRef)((function(e,t){var n,i=e.appearance,a=void 0===i?"secondary":i,l=e.direction,d=void 0===l?"horizontal":l,j=e.disabled,y=void 0!==j&&j,w=e.is,k=void 0===w?"span":w,_=e.isSelected,O=e.onKeyDown,z=void 0===O?b:O,C=e.onSelect,S=void 0===C?b:C,D=e.height,R=void 0===D?28:D,E=e.className,I=e.tabIndex,T=(0,o.Z)(e,m),P=(0,u.m)("Tab",{appearance:a,direction:d},v,function(e){return{alignItems:"center",justifyContent:"horizontal"===e?"center":"flex-start",textDecoration:"none",cursor:"pointer",outline:"none",WebkitFontSmoothing:"antialiased",WebkitAppearance:"none",MozAppearance:"none","&::-moz-focus-inner ":{border:0},display:"horizontal"===e?"inline-flex":"flex",width:"horizontal"===e?"auto":"100%"}}(d)),N=P.className,B=(0,o.Z)(P,x),F=(0,p.d)(e.onClick),H=(0,s.useCallback)((function(e){(0,h.Z)(F.current,e),y||S()}),[y,S]),K=(0,f.h)({disabled:y,onKeyDown:z,tabIndex:I});return y&&(n={"aria-disabled":!0}),n="a"===k?_?Z(Z({},n),{},{"aria-current":"page"}):{}:Z(Z({},n),{},{"aria-selected":_,role:"tab"}),s.createElement(g.Z,(0,r.Z)({className:c()(E,N),is:k,size:300,height:R,ref:t,tabIndex:0},B,T,{onClick:H},K,n))})));y.propTypes=Z(Z({},g.Z.propTypes),{},{onSelect:d().func,isSelected:d().bool,appearance:d().string,direction:d().oneOf(["horizontal","vertical"]),className:d().string}),t.Z=y},95176:function(e,t,n){"use strict";var r=n(87462),i=n(67294),o=n(80079),s=n.n(o),a=(0,i.forwardRef)((function(e,t){return i.createElement(s(),(0,r.Z)({role:"tablist"},e,{ref:t}))}));a.propTypes=s().propTypes,t.Z=a},17019:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resources",function(){return n(87619)}])},40475:function(e,t,n){"use strict";var r=n(85893),i=(n(67294),n(11163)),o=n(36811),s=n(36448),a=n(77117),c=n(70979),l=n(71898),d=n(47341),u=n(95176),p=n(21608);t.Z=function(e){var t=e.description,n=e.githubLink,f=e.tabs,h=e.title,g=(0,i.useRouter)();return(0,r.jsxs)(o.Z,{display:"flex",width:"100%",justifyContent:"space-between",flexDirection:"column",alignItems:"flex-start",children:[(0,r.jsxs)(o.Z,{display:"flex",width:"100%",justifyContent:"space-between",marginBottom:(0,s.Z)(4),children:[(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(a.Z,{size:900,marginBottom:(0,s.Z)(1),children:h}),t&&(0,r.jsx)(c.Z,{children:t})]}),(0,r.jsx)(o.Z,{children:n&&(0,r.jsx)(l.ZP,{is:d.Z,href:n,appearance:"default",target:"_blank",children:"Open in GitHub"})})]}),f&&(0,r.jsx)(u.Z,{width:"100%",borderBottom:"1px solid #efefef",marginBottom:(0,s.Z)(2),paddingTop:(0,s.Z)(1),children:f.map((function(e,t){var n=e.label,i=e.to;return(0,r.jsx)(p.Z,{appearance:"primary",isSelected:g.asPath===i,onSelect:function(){return g.push(i)},children:n},t)}))})]})}},19065:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(85893),i=n(67294),o=n(47546),s=n(36811),a=n(36448),c=n(94693),l=n(47341),d=function(){var e=(0,i.useCallback)((function(e){e.preventDefault(),(0,o.G)()}),[]);return(0,r.jsxs)(s.Z,{is:"footer",width:"100%",height:(0,a.Z)(8),borderTop:"muted",paddingX:(0,a.Z)(5),paddingY:(0,a.Z)(3),marginTop:(0,a.Z)(5),display:"flex",justifyContent:"space-between",children:[(0,r.jsxs)(s.Z,{display:"flex",alignItems:"center",children:[(0,r.jsx)(s.Z,{is:"img",width:80,src:"/segment-logo.svg",marginRight:(0,a.Z)(5)}),(0,r.jsxs)(c.Z,{size:300,color:"muted",children:["\xa9 ",(new Date).getFullYear(),", Segment.io, Inc."]})]}),(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(l.Z,{size:300,color:"neutral",href:"https://segment.com/jobs/",target:"_blank",marginRight:(0,a.Z)(2),children:"We're hiring!"}),(0,r.jsx)(l.Z,{size:300,color:"neutral",href:"#",onClick:e,children:"Website Data Collection"})]})]})},u=n(9008),p=function(e){return"https://evergreen.segment.com".concat(e||"")},f="Evergreen is a React UI Framework for building ambitious products on the web. Made by Segment in San Francisco, CA.",h=function(e){var t=e.title;return(0,r.jsxs)(u.default,{children:[(0,r.jsx)("title",{children:"Evergreen ".concat(t||"")}),(0,r.jsx)("meta",{property:"og:title",content:"Evergreen"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=0.65, maximum-scale=5.0, minimum-scale=0.65"}),(0,r.jsx)("meta",{property:"og:url",content:p()}),(0,r.jsx)("meta",{property:"og:description",content:f}),(0,r.jsx)("meta",{property:"og:image",content:p("/og-image.png")}),(0,r.jsx)("meta",{property:"twitter:card",content:"summary"}),(0,r.jsx)("meta",{property:"twitter:description",content:f}),(0,r.jsx)("meta",{property:"twitter:site",content:"@segment"}),(0,r.jsx)("meta",{name:"twitter:creator",content:"@segment"}),(0,r.jsx)("meta",{name:"description",content:f}),(0,r.jsx)("meta",{property:"twitter:image",content:p("/twitter-og.png")}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"})]})},g=n(41664),m=n.n(g),x=n(11163),j=n(86038),Z=n.n(j),b=(n(97824),function(){var e=(0,x.useRouter)().pathname.split("/")[1];return(0,r.jsxs)(s.Z,{is:"nav",width:"100%",position:"sticky",top:0,backgroundColor:"white",zIndex:10,height:(0,a.Z)(8),flexShrink:0,display:"flex",alignItems:"center",borderBottom:"muted",paddingX:(0,a.Z)(5),children:[(0,r.jsx)(s.Z,{display:"flex",alignItems:"center",width:236,children:(0,r.jsx)(m(),{href:"/",children:(0,r.jsx)(s.Z,{is:"img",width:100,height:24,src:"/evergreen-logo.svg",cursor:"pointer"})})}),(0,r.jsxs)(s.Z,{flex:1,children:[(0,r.jsx)(m(),{href:"/introduction/getting-started",passHref:!0,children:(0,r.jsx)(l.Z,{color:"introduction"!==e?"neutral":void 0,marginRight:(0,a.Z)(3),children:"Introduction"})}),(0,r.jsx)(m(),{href:"/foundations",passHref:!0,children:(0,r.jsx)(l.Z,{color:"foundations"!==e?"neutral":void 0,marginRight:(0,a.Z)(3),children:"Foundations"})}),(0,r.jsx)(m(),{href:"/components",passHref:!0,children:(0,r.jsx)(l.Z,{color:"components"!==e?"neutral":void 0,marginRight:(0,a.Z)(3),children:"Components"})}),(0,r.jsx)(m(),{href:"/patterns",passHref:!0,children:(0,r.jsx)(l.Z,{color:"patterns"!==e?"neutral":void 0,marginRight:(0,a.Z)(3),children:"Patterns"})}),(0,r.jsx)(m(),{href:"/resources",passHref:!0,children:(0,r.jsx)(l.Z,{color:"resources"!==e?"neutral":void 0,marginRight:(0,a.Z)(3),children:"Resources"})})]}),(0,r.jsx)(s.Z,{display:"flex",justifyContent:"flex-end",width:236,children:(0,r.jsx)(Z(),{type:"stargazers",namespace:"segmentio",repo:"evergreen"})})]})}),v=function(e){var t=e.children,n=e.title,i=void 0===n?"":n;return(0,r.jsxs)("div",{children:[(0,r.jsx)(h,{title:i}),(0,r.jsxs)(s.Z,{width:"100vw",display:"flex",flexDirection:"column",minHeight:"100vh",children:[(0,r.jsx)(b,{}),(0,r.jsxs)(s.Z,{flex:1,height:"100%",children:[t,(0,r.jsx)(d,{})]})]})]})}},87619:function(e,t,n){"use strict";n.r(t);var r=n(85893),i=n(36811),o=n(36448),s=n(77117),a=n(70979),c=n(47341),l=(n(67294),n(19065)),d=n(40475);t.default=function(){return(0,r.jsx)(l.Z,{title:"Resources",children:(0,r.jsxs)(i.Z,{padding:(0,o.Z)(5),paddingLeft:"276px",children:[(0,r.jsx)(d.Z,{title:"Resources",description:"Design products and side-projects with our official design resource for the Evergreen community."}),(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(s.Z,{size:700,children:"Figma Library"}),(0,r.jsxs)(a.Z,{marginTop:(0,o.Z)(2),marginBottom:(0,o.Z)(4),size:400,children:["Evergreen Figma library is available on Figma Community:"," ",(0,r.jsx)(c.Z,{href:"https://www.figma.com/@segment",color:"blue",target:"_blank",children:"https://www.figma.com/@segment"})]}),(0,r.jsx)(i.Z,{is:"img",src:"/resource-img-figma.png",display:"flex",width:"100%",maxWidth:(0,o.Z)(116)})]}),(0,r.jsx)(i.Z,{borderTop:"muted",width:(0,o.Z)(116),marginY:(0,o.Z)(8)}),(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(s.Z,{size:700,children:"Segment Brand"}),(0,r.jsxs)(a.Z,{marginTop:(0,o.Z)(2),size:400,children:["A collection of Segment Brand resources:"," ",(0,r.jsx)(c.Z,{href:"https://brand.segment.com/",color:"blue",target:"_blank",children:"https://brand.segment.com/"})]})]})]})})}}},function(e){e.O(0,[613,774,888,179],(function(){return t=17019,e(e.s=t);var t}));var t=e.O();_N_E=t}]);