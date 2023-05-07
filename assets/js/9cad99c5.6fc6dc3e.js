"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9395],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},k="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=s(r),d=a,m=k["".concat(p,".").concat(d)]||k[d]||c[d]||l;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[k]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1829:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const l={id:"AreaStyleOptions",title:"Interface: AreaStyleOptions",sidebar_label:"AreaStyleOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},i=void 0,o={unversionedId:"api/interfaces/AreaStyleOptions",id:"version-3.8/api/interfaces/AreaStyleOptions",title:"Interface: AreaStyleOptions",description:"Represents style options for an area series.",source:"@site/versioned_docs/version-3.8/api/interfaces/AreaStyleOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/AreaStyleOptions",permalink:"/lightweight-charts/docs/3.8/api/interfaces/AreaStyleOptions",draft:!1,editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"AreaStyleOptions",title:"Interface: AreaStyleOptions",sidebar_label:"AreaStyleOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},s=[{value:"Properties",id:"properties",level:2},{value:"topColor",id:"topcolor",level:3},{value:"bottomColor",id:"bottomcolor",level:3},{value:"lineColor",id:"linecolor",level:3},{value:"lineStyle",id:"linestyle",level:3},{value:"lineWidth",id:"linewidth",level:3},{value:"lineType",id:"linetype",level:3},{value:"crosshairMarkerVisible",id:"crosshairmarkervisible",level:3},{value:"crosshairMarkerRadius",id:"crosshairmarkerradius",level:3},{value:"crosshairMarkerBorderColor",id:"crosshairmarkerbordercolor",level:3},{value:"crosshairMarkerBackgroundColor",id:"crosshairmarkerbackgroundcolor",level:3},{value:"lastPriceAnimation",id:"lastpriceanimation",level:3}],u={toc:s},k="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(k,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Represents style options for an area series."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"topcolor"},"topColor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"topColor"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Color of the top part of the area."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"'rgba( 46, 220, 135, 0.4)'")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"bottomcolor"},"bottomColor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"bottomColor"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Color of the bottom part of the area."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"'rgba( 40, 221, 100, 0)'")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"linecolor"},"lineColor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"lineColor"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Line color."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"'#33D778'")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"linestyle"},"lineStyle"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"lineStyle"),": ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/enums/LineStyle"},(0,a.kt)("inlineCode",{parentName:"a"},"LineStyle"))),(0,a.kt)("p",null,"Line style."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/enums/LineStyle#solid"},"Solid")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"linewidth"},"lineWidth"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"lineWidth"),": ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#linewidth"},(0,a.kt)("inlineCode",{parentName:"a"},"LineWidth"))),(0,a.kt)("p",null,"Line width in pixels."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"3")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"linetype"},"lineType"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"lineType"),": ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/enums/LineType"},(0,a.kt)("inlineCode",{parentName:"a"},"LineType"))),(0,a.kt)("p",null,"Line type."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/enums/LineType#simple"},"Simple")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"crosshairmarkervisible"},"crosshairMarkerVisible"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"crosshairMarkerVisible"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Show the crosshair marker."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"crosshairmarkerradius"},"crosshairMarkerRadius"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"crosshairMarkerRadius"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Crosshair marker radius in pixels."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"4")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"crosshairmarkerbordercolor"},"crosshairMarkerBorderColor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"crosshairMarkerBorderColor"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Crosshair marker border color. An empty string falls back to the the color of the series under the crosshair."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"''")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"crosshairmarkerbackgroundcolor"},"crosshairMarkerBackgroundColor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"crosshairMarkerBackgroundColor"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The crosshair marker background color. An empty string falls back to the the color of the series under the crosshair."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"''")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"lastpriceanimation"},"lastPriceAnimation"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"lastPriceAnimation"),": ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/enums/LastPriceAnimationMode"},(0,a.kt)("inlineCode",{parentName:"a"},"LastPriceAnimationMode"))),(0,a.kt)("p",null,"Last price animation mode."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/enums/LastPriceAnimationMode#disabled"},"Disabled")))}c.isMDXComponent=!0}}]);