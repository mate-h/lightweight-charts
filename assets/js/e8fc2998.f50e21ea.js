"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3402],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(o),m=a,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return o?n.createElement(h,r(r({ref:t},d),{},{components:o})):n.createElement(h,r({ref:t},d))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=o[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},5887:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=o(7462),a=(o(7294),o(3905));const i={sidebar_position:4},r="Working with time zones",l={unversionedId:"time-zones",id:"version-3.8/time-zones",title:"Working with time zones",description:"This doc describes what do you need to do if you want to add time zone support to your chart.",source:"@site/versioned_docs/version-3.8/time-zones.md",sourceDirName:".",slug:"/time-zones",permalink:"/lightweight-charts/docs/3.8/time-zones",draft:!1,tags:[],version:"3.8",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Time scale",permalink:"/lightweight-charts/docs/3.8/time-scale"},next:{title:"From v2 to v3",permalink:"/lightweight-charts/docs/3.8/migrations/from-v2-to-v3"}},s={},u=[{value:"Background",id:"background",level:2},{value:"How to add time zone support to your chart",id:"how-to-add-time-zone-support-to-your-chart",level:2},{value:"<code>Date</code> solution",id:"date-solution",level:3},{value:"Note about converting to a &quot;local&quot; time zone",id:"note-about-converting-to-a-local-time-zone",level:4},{value:"<code>date-fns-tz</code> solution",id:"date-fns-tz-solution",level:3},{value:"<code>tzdata</code> solution",id:"tzdata-solution",level:3},{value:"Why we didn&#39;t implement it in the library",id:"why-we-didnt-implement-it-in-the-library",level:2},{value:"Note about converting business days",id:"note-about-converting-business-days",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"working-with-time-zones"},"Working with time zones"),(0,a.kt)("p",null,"This doc describes what do you need to do if you want to add time zone support to your chart."),(0,a.kt)("h2",{id:"background"},"Background"),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"lightweight-charts")," doesn't support time zones of any kind, just because JavaScript doesn't have an API to do that.\nThings that the library uses internally includes an API to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Format a date"),(0,a.kt)("li",{parentName:"ul"},"Get a date and/or time parts of a date object (year, month, day, hours, etc)")),(0,a.kt)("p",null,"Out of the box we could rely on 2 APIs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"},"Date")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"},"Intl"))),(0,a.kt)("p",null,"And even if to format a date we could (and we do) use ",(0,a.kt)("inlineCode",{parentName:"p"},"Date")," object with its ",(0,a.kt)("inlineCode",{parentName:"p"},"toLocaleString")," method (and we could even pass a ",(0,a.kt)("inlineCode",{parentName:"p"},"timeZone")," field as an option),\nbut how about date/time field?"),(0,a.kt)("p",null,"All to solve this it seems that the only solution we have is ",(0,a.kt)("inlineCode",{parentName:"p"},"Date"),"'s getters, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"getHours"),". Here we could use 2 APIs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"UTC-based methods like ",(0,a.kt)("inlineCode",{parentName:"li"},"getUTCHours")," to get the date/time in UTC"),(0,a.kt)("li",{parentName:"ul"},"Client-based methods like ",(0,a.kt)("inlineCode",{parentName:"li"},"getHours")," to get the date/time in ",(0,a.kt)("em",{parentName:"li"},"a local (for the client)")," time zone")),(0,a.kt)("p",null,"As you can see we just unable to get date/time parts in desired time zone without using custom libraries (like ",(0,a.kt)("inlineCode",{parentName:"p"},"date-fns"),") out of the box."),(0,a.kt)("p",null,"Because of this we decided not to handle time zones in the library. The library treats all dates and times as UTC internally."),(0,a.kt)("p",null,"But don't worry - it's easy to add time-zone support in your own code!"),(0,a.kt)("h2",{id:"how-to-add-time-zone-support-to-your-chart"},"How to add time zone support to your chart"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"TL;DR"),' - time for every bar should be "corrected" by a time zone offset.'),(0,a.kt)("p",null,"The only way to do this is to change a time in your data."),(0,a.kt)("p",null,"As soon as the library relies on UTC-based methods, you could change a time of your data item so in UTC it could be as it is in desired time zone."),(0,a.kt)("p",null,"Let's consider an example."),(0,a.kt)("p",null,"Lets say you have a bar with time ",(0,a.kt)("inlineCode",{parentName:"p"},"2021-01-01T10:00:00.000Z")," (a string representation is just for better readability).\nAnd you want to display your chart in ",(0,a.kt)("inlineCode",{parentName:"p"},"Europe/Moscow")," time zone."),(0,a.kt)("p",null,"According to tz database, for ",(0,a.kt)("inlineCode",{parentName:"p"},"Europe/Moscow")," time zone a time offset at this time is ",(0,a.kt)("inlineCode",{parentName:"p"},"UTC+03:00"),", i.e. +3 hours (pay attention that you cannot use the same offset all the time, because of DST and many other things!)."),(0,a.kt)("p",null,"By this means, the time for ",(0,a.kt)("inlineCode",{parentName:"p"},"Europe/Moscow")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"2021-01-01 13:00:00.000")," (so basically you want to display this time over the UTC one)."),(0,a.kt)("p",null,"To display your chart in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Europe/Moscow")," time zone you would need to adjust the time of your data by +3 hours. So ",(0,a.kt)("inlineCode",{parentName:"p"},"2021-01-01T10:00:00.000Z")," would become ",(0,a.kt)("inlineCode",{parentName:"p"},"2021-01-01T13:00:00.000Z"),"."),(0,a.kt)("p",null,"Note that due a time zone offset the date could be changed as well (not only time part)."),(0,a.kt)("p",null,"This looks tricky, but hopefully you need to implement it once and then just forget this ever happened \ud83d\ude00"),(0,a.kt)("h3",{id:"date-solution"},(0,a.kt)("inlineCode",{parentName:"h3"},"Date")," solution"),(0,a.kt)("p",null,"One of possible solutions (and looks like the most simplest one) is to use approach from ",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/54127122/3893439"},"this answer on StackOverflow"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// you could use this function to convert all your times to required time zone\nfunction timeToTz(originalTime, timeZone) {\n    const zonedDate = new Date(new Date(originalTime * 1000).toLocaleString('en-US', { timeZone }));\n    return zonedDate.getTime() / 1000;\n}\n")),(0,a.kt)("h4",{id:"note-about-converting-to-a-local-time-zone"},'Note about converting to a "local" time zone'),(0,a.kt)("p",null,"If you don't need to work with time zones in general, but only needs to support a client time zone (i.e. local), you could use the following trick:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function timeToLocal(originalTime) {\n    const d = new Date(originalTime * 1000);\n    return Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds()) / 1000;\n}\n")),(0,a.kt)("h3",{id:"date-fns-tz-solution"},(0,a.kt)("inlineCode",{parentName:"h3"},"date-fns-tz")," solution"),(0,a.kt)("p",null,"You could also achieve the result by using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/marnusw/date-fns-tz"},(0,a.kt)("inlineCode",{parentName:"a"},"date-fns-tz"))," library in the following way:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { utcToZonedTime } from 'date-fns-tz';\n\nfunction timeToTz(originalTime, timeZone) {\n    const zonedDate = utcToZonedTime(new Date(originalTime * 1000), timeZone);\n    return zonedDate.getTime() / 1000;\n}\n")),(0,a.kt)("h3",{id:"tzdata-solution"},(0,a.kt)("inlineCode",{parentName:"h3"},"tzdata")," solution"),(0,a.kt)("p",null,"If you have lots of data items and the performance of other solutions doesn't fit your requirements you could try to implement more complex solution by using raw ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/tzdata"},(0,a.kt)("inlineCode",{parentName:"a"},"tzdata")),"."),(0,a.kt)("p",null,"The better performance could be achieved with this approach because:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"you don't need to parse dates every time you want to get an offset so you could use ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Upper_and_lower_bounds"},"lowerbound algorithm")," (which is ",(0,a.kt)("inlineCode",{parentName:"li"},"O(log N)"),") to find an offset of very first data point quickly"),(0,a.kt)("li",{parentName:"ul"},"after you found an offset, you go through all data items and check whether an offset should be changed or not to the next one (based on a time of the next time shift)")),(0,a.kt)("h2",{id:"why-we-didnt-implement-it-in-the-library"},"Why we didn't implement it in the library"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Date")," solution is quite slow (in our tests it took more than 20 seconds for 100k points)"),(0,a.kt)("li",{parentName:"ul"},"Albeit ",(0,a.kt)("inlineCode",{parentName:"li"},"date-fns-tz")," solution is a bit faster that the solution with ",(0,a.kt)("inlineCode",{parentName:"li"},"Date")," but it is still very slow (~17-18 seconds for 100k points) and additionally it requires to add another set of dependencies to the package"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tzdata")," solution requires to increase the size of the library by ",(0,a.kt)("a",{parentName:"li",href:"https://bundlephobia.com/package/tzdata"},"more than 31kB min.gz")," (which is almost the size of the whole library!)")),(0,a.kt)("p",null,"Keep in mind that time zones feature is not an issue for everybody so this is up to you to decide whether you want/need to support it or not and so far we don't want to sacrifice performance/package size for everybody by this feature."),(0,a.kt)("h2",{id:"note-about-converting-business-days"},"Note about converting business days"),(0,a.kt)("p",null,"If you're using a business day for your time (either ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/BusinessDay"},"object")," or ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#time"},"string")," representation), for example because of DWM nature of your data,\nmost likely you ",(0,a.kt)("strong",{parentName:"p"},"shouldn't")," convert that time to a zoned one, because this time represents a day."))}c.isMDXComponent=!0}}]);