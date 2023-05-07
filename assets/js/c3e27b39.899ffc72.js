"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[185],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=o,m=c["".concat(p,".").concat(d)]||c[d]||f[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={id:"LayoutOptions",title:"Interface: LayoutOptions",sidebar_label:"LayoutOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},i=void 0,l={unversionedId:"api/interfaces/LayoutOptions",id:"version-4.0/api/interfaces/LayoutOptions",title:"Interface: LayoutOptions",description:"Represents layout options",source:"@site/versioned_docs/version-4.0/api/interfaces/LayoutOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/LayoutOptions",permalink:"/lightweight-charts/docs/api/interfaces/LayoutOptions",draft:!1,editUrl:null,tags:[],version:"4.0",sidebarPosition:0,frontMatter:{id:"LayoutOptions",title:"Interface: LayoutOptions",sidebar_label:"LayoutOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},s=[{value:"Properties",id:"properties",level:2},{value:"background",id:"background",level:3},{value:"textColor",id:"textcolor",level:3},{value:"fontSize",id:"fontsize",level:3},{value:"fontFamily",id:"fontfamily",level:3}],u={toc:s},c="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Represents layout options"),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"background"},"background"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"background"),": ",(0,o.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#background"},(0,o.kt)("inlineCode",{parentName:"a"},"Background"))),(0,o.kt)("p",null,"Chart and scales background color."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"{ type: ColorType.Solid, color: '#FFFFFF' }")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"textcolor"},"textColor"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"textColor"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"Color of text on the scales."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"'#191919'")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"fontsize"},"fontSize"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"fontSize"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"Font size of text on scales in pixels."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"11")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"fontfamily"},"fontFamily"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"fontFamily"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"Font family of text on the scales."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif")))}f.isMDXComponent=!0}}]);