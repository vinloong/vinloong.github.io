(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6103,7918],{1748:(e,t,n)=>{var r={"./locale":9234,"./locale.js":9234};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=1748},5250:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var r=n(7294),o=n(6010),a=n(3355),l=n(7560),c=n(3895),i=n(1224),s=n(5477),u=n(7692),f=n(3578);function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function p(e){const{nextItem:t,prevItem:n}=e;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&r.createElement(f.Z,m({},n,{subLabel:r.createElement(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&r.createElement(f.Z,m({},t,{subLabel:r.createElement(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function b(){const{assets:e,metadata:t}=(0,c.C)(),{title:n,description:o,date:l,tags:i,authors:s,frontMatter:u}=t,{keywords:f}=u;var m;const p=null!==(m=e.image)&&void 0!==m?m:u.image;return r.createElement(a.d,{title:n,description:o,keywords:f,image:p},r.createElement("meta",{property:"og:type",content:"article"}),r.createElement("meta",{property:"article:published_time",content:l}),s.some((e=>e.url))&&r.createElement("meta",{property:"article:author",content:s.map((e=>e.url)).filter(Boolean).join(",")}),i.length>0&&r.createElement("meta",{property:"article:tag",content:i.map((e=>e.label)).join(",")}))}var d=n(59);function g({sidebar:e,children:t}){const{metadata:n,toc:o}=(0,c.C)(),{nextItem:a,prevItem:l,frontMatter:u}=n,{hide_table_of_contents:f,toc_min_heading_level:m,toc_max_heading_level:b}=u;return r.createElement(i.Z,{sidebar:e,toc:!f&&o.length>0?r.createElement(d.Z,{toc:o,minHeadingLevel:m,maxHeadingLevel:b}):void 0},r.createElement(s.Z,null,t),(a||l)&&r.createElement(p,{nextItem:a,prevItem:l}))}function v(e){const t=e.content;return r.createElement(c.n,{content:e.content,isBlogPostPage:!0},r.createElement(a.FG,{className:(0,o.Z)(l.k.wrapper.blogPages,l.k.page.blogPostPage)},r.createElement(b,null),r.createElement(g,{sidebar:e.sidebar},r.createElement(t,null))))}},3096:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(7294),o=n(6757);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}function c(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e){const t=e.map((e=>c(l({},e),{parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t}));const r=[];return t.forEach((e=>{const{parentIndex:n}=e,o=i(e,["parentIndex"]);n>=0?t[n].children.push(o):r.push(o)})),r}function u({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return e.flatMap((e=>{const r=u({toc:e.children,minHeadingLevel:t,maxHeadingLevel:n});return function(e){return e.level>=t&&e.level<=n}(e)?[c(l({},e),{children:r})]:r}))}function f(e){const t=e.getBoundingClientRect();return t.top===t.bottom?f(e.parentNode):t}function m(e,{anchorTopOffset:t}){const n=e.find((e=>f(e).top>=t));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(f(n))?n:null!==(r=e[e.indexOf(n)-1])&&void 0!==r?r:null;var r}var o;return null!==(o=e[e.length-1])&&void 0!==o?o:null}function p(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function b(e){const t=(0,r.useRef)(void 0),n=p();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:o,minHeadingLevel:a,maxHeadingLevel:l}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),c=function({minHeadingLevel:e,maxHeadingLevel:t}){const n=[];for(let r=e;r<=t;r+=1)n.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:a,maxHeadingLevel:l}),i=m(c,{anchorTopOffset:n.current}),s=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===s)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function d({toc:e,className:t,linkClassName:n,isChild:o}){return e.length?r.createElement("ul",{className:o?void 0:t},e.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(d,{isChild:!0,toc:e.children,className:t,linkClassName:n}))))):null}const g=r.memo(d);function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function y(e){var{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:i}=e,f=O(e,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);const m=(0,o.L)(),p=null!=c?c:m.tableOfContents.minHeadingLevel,d=null!=i?i:m.tableOfContents.maxHeadingLevel,y=function({toc:e,minHeadingLevel:t,maxHeadingLevel:n}){return(0,r.useMemo)((()=>u({toc:s(e),minHeadingLevel:t,maxHeadingLevel:n})),[e,t,n])}({toc:t,minHeadingLevel:p,maxHeadingLevel:d});return b((0,r.useMemo)((()=>{if(a&&l)return{linkClassName:a,linkActiveClassName:l,minHeadingLevel:p,maxHeadingLevel:d}}),[a,l,p,d])),r.createElement(g,v({toc:y,className:n,linkClassName:a},f))}},59:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(7294),o=n(6010),a=n(3096);const l={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s="table-of-contents__link toc-highlight",u="table-of-contents__link--active";function f(e){var{className:t}=e,n=i(e,["className"]);return r.createElement("div",{className:(0,o.Z)(l.tableOfContents,"thin-scrollbar",t)},r.createElement(a.Z,c({},n,{linkClassName:s,linkActiveClassName:u})))}},2101:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(7294),o=n(567);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e){return r.createElement(o.Z,a({},e))}},9252:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(741),o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const l=(c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},r.Z),i=null!=(i={highlight:function({children:e,color:t}){return o.createElement("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},e)}})?i:{},Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(i)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(i)).forEach((function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(i,e))})),c);var c,i},5379:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r={};n.r(r),n.d(r,{ButtonExample:()=>i});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}function i(e){return o.createElement("button",l({type:"button"},e,{style:c({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}({React:o},o,r)}}]);