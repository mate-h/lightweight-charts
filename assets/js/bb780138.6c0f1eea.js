"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1711],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(a),d=i,g=h["".concat(l,".").concat(d)]||h[d]||u[d]||n;return a?r.createElement(g,o(o({ref:t},p),{},{components:a})):r.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<n;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8672:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=a(7462),i=(a(7294),a(3905));const n={id:"ios",description:"You can use Lightweight Charts\u2122 inside an iOS application. To use Lightweight Charts\u2122 in that context, you can use our iOS wrapper, which will allow you to interact with Lightweight Charts\u2122 library, which will be rendered in a web view.",keywords:["charts","iOS","canvas","charting library","charting","html5 charts","financial charting library"],sidebar_position:6},o="iOS wrapper",s={unversionedId:"ios",id:"version-3.8/ios",title:"iOS wrapper",description:"You can use Lightweight Charts\u2122 inside an iOS application. To use Lightweight Charts\u2122 in that context, you can use our iOS wrapper, which will allow you to interact with Lightweight Charts\u2122 library, which will be rendered in a web view.",source:"@site/versioned_docs/version-3.8/ios.md",sourceDirName:".",slug:"/ios",permalink:"/lightweight-charts/docs/3.8/ios",draft:!1,tags:[],version:"3.8",sidebarPosition:6,frontMatter:{id:"ios",description:"You can use Lightweight Charts\u2122 inside an iOS application. To use Lightweight Charts\u2122 in that context, you can use our iOS wrapper, which will allow you to interact with Lightweight Charts\u2122 library, which will be rendered in a web view.",keywords:["charts","iOS","canvas","charting library","charting","html5 charts","financial charting library"],sidebar_position:6},sidebar:"docsSidebar",previous:{title:"From v2 to v3",permalink:"/lightweight-charts/docs/3.8/migrations/from-v2-to-v3"},next:{title:"Android wrapper",permalink:"/lightweight-charts/docs/3.8/android"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"CocoaPods",id:"cocoapods",level:3},{value:"Swift Package Manager",id:"swift-package-manager",level:3},{value:"Usage",id:"usage",level:2},{value:"How to run the provided example",id:"how-to-run-the-provided-example",level:2}],p={toc:c},h="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(h,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ios-wrapper"},"iOS wrapper"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You can find the source code of the Lightweight Charts\u2122 iOS wrapper in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tradingview/LightweightChartsIOS"},"this repository"),".")),(0,i.kt)("p",null,"You can use Lightweight Charts\u2122 inside an iOS application. To use Lightweight Charts\u2122 in that context, you can use our iOS wrapper, which will allow you to interact with Lightweight Charts\u2122 library, which will be rendered in a web view."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Requires iOS 10.0+")),(0,i.kt)("h3",{id:"cocoapods"},"CocoaPods"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://cocoapods.org"},"CocoaPods")," is a dependency manager for Cocoa projects. For usage and installation instructions, visit their website. To integrate LightweightCharts into your Xcode project using CocoaPods, specify it in your ",(0,i.kt)("inlineCode",{parentName:"p"},"Podfile"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ruby"},"pod 'LightweightCharts', '~> 3.8.0'\n")),(0,i.kt)("h3",{id:"swift-package-manager"},"Swift Package Manager"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://swift.org/package-manager/"},"Swift Package Manager")," is a tool for automating the distribution of Swift code and is integrated into the ",(0,i.kt)("inlineCode",{parentName:"p"},"swift")," compiler."),(0,i.kt)("p",null,"Once you have your Swift package set up, adding LightweightCharts as a dependency is as easy as adding it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," value of your ",(0,i.kt)("inlineCode",{parentName:"p"},"Package.swift"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'dependencies: [\n    .package(url: "https://github.com/tradingview/LightweightChartsIOS", .upToNextMajor(from: "3.8.0"))\n]\n')),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Once the library has been installed in your repo, you're ready to create your first chart."),(0,i.kt)("p",null,"First of all, in a file where you would like to create a chart, you need to import the library:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"import LightweightCharts\n")),(0,i.kt)("p",null,"Create instance of LightweightCharts, which is a subclass of UIView, and add it to your view."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"var chart: LightweightCharts!\n\n// ...\nchart = LightweightCharts()\nview.addSubview(chart)\n// ... setup layout\n")),(0,i.kt)("p",null,"Add any series to the chart and store a reference to it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"var series: BarSeries!\n\n// ...\nseries = chart.addBarSeries(options: nil)\n")),(0,i.kt)("p",null,"Add data to the series."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'let data = [\n    BarData(time: .string("2018-10-19"), open: 180.34, high: 180.99, low: 178.57, close: 179.85),\n    BarData(time: .string("2018-10-22"), open: 180.82, high: 181.40, low: 177.56, close: 178.75),\n    BarData(time: .string("2018-10-23"), open: 175.77, high: 179.49, low: 175.44, close: 178.53),\n    BarData(time: .string("2018-10-24"), open: 178.58, high: 182.37, low: 176.31, close: 176.97),\n    BarData(time: .string("2018-10-25"), open: 177.52, high: 180.50, low: 176.83, close: 179.07)\n]\n\n// ...\nseries.setData(data: data)\n')),(0,i.kt)("h2",{id:"how-to-run-the-provided-example"},"How to run the provided example"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tradingview/LightweightChartsIOS"},"GitHub repository")," for LightweightChartsIOS contains an example of the library in action. To run the example, start by cloning the repository, go to the ",(0,i.kt)("em",{parentName:"p"},"Example")," directory, and then run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pod install\n")))}u.isMDXComponent=!0}}]);