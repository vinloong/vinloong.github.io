"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5789],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),p=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},i=function(e){var r=p(e.components);return n.createElement(u.Provider,{value:r},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),l=p(t),b=o,m=l["".concat(u,".").concat(b)]||l[b]||f[b]||c;return t?n.createElement(m,s(s({ref:r},i),{},{components:t})):n.createElement(m,s({ref:r},i))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,s=new Array(c);s[0]=b;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a[l]="string"==typeof e?e:o,s[1]=a;for(var p=2;p<c;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},323:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>b,frontMatter:()=>s,metadata:()=>u,toc:()=>i});t(7294);var n=t(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={},a=void 0,u={unversionedId:"kubernetes/reserve-compute-resources",id:"kubernetes/reserve-compute-resources",title:"reserve-compute-resources",description:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b pod \u80fd\u591f\u4f7f\u7528\u8282\u70b9\u5168\u90e8\u53ef\u7528\u8d44\u6e90\uff0c\u8fd9\u662f\u4e2a\u95ee\u9898\uff0c\u56e0\u4e3a\u8282\u70b9\u81ea\u5df1\u4e5f\u8fd0\u884c\u4e86\u4e0d\u5c11\u670d\u52a1\u8fdb\u7a0b \u548c Kubernetes \u7684\u7cfb\u7edf\u5b88\u62a4\u8fdb\u7a0b\uff0c\u53e6\u5916\u6d4b\u8bd5\u73af\u5883\u4e2d k8s  \u5df2\u7ecf\u51fa\u73b0\u8fc7\u51e0\u6b21\uff0c\u7531\u4e8e\u7cfb\u7edf\u8d44\u6e90\u5360\u7528\u8fc7\u9ad8\uff0c\u5bfc\u81f4\u8282\u70b9\u4e0d\u53ef\u7528\u6216\u4e0d\u7a33\u5b9a\u3002",source:"@site/docs/kubernetes/reserve-compute-resources.md",sourceDirName:"kubernetes",slug:"/kubernetes/reserve-compute-resources",permalink:"/docs/kubernetes/reserve-compute-resources",draft:!1,tags:[],version:"current",lastUpdatedAt:1675912862,formattedLastUpdatedAt:"2023\u5e742\u67089\u65e5",frontMatter:{},sidebar:"kubernetes",previous:{title:"secret",permalink:"/docs/kubernetes/practice/secret"},next:{title:"k8s \u4f7f\u7528\u7684\u4e00\u4e9b\u6280\u5de7",permalink:"/docs/kubernetes/sexy-tips"}},p={},i=[],l={toc:i},f="wrapper";function b(e){var{components:r}=e,t=c(e,["components"]);return(0,n.kt)(f,o({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b pod \u80fd\u591f\u4f7f\u7528\u8282\u70b9\u5168\u90e8\u53ef\u7528\u8d44\u6e90\uff0c\u8fd9\u662f\u4e2a\u95ee\u9898\uff0c\u56e0\u4e3a\u8282\u70b9\u81ea\u5df1\u4e5f\u8fd0\u884c\u4e86\u4e0d\u5c11\u670d\u52a1\u8fdb\u7a0b \u548c Kubernetes \u7684\u7cfb\u7edf\u5b88\u62a4\u8fdb\u7a0b\uff0c\u53e6\u5916\u6d4b\u8bd5\u73af\u5883\u4e2d k8s  \u5df2\u7ecf\u51fa\u73b0\u8fc7\u51e0\u6b21\uff0c\u7531\u4e8e\u7cfb\u7edf\u8d44\u6e90\u5360\u7528\u8fc7\u9ad8\uff0c\u5bfc\u81f4\u8282\u70b9\u4e0d\u53ef\u7528\u6216\u4e0d\u7a33\u5b9a\u3002\n\u90a3\u4e48\u6709\u6ca1\u6709\u4ec0\u4e48\u65b9\u5f0f\u53ef\u4ee5\u4e3a\u7cfb\u7edf\u9884\u7559\u51fa\u8db3\u591f\u7684\u8d44\u6e90\u6765\u4fdd\u8bc1\u7cfb\u7edf\u7684\u7a33\u5b9a\u8fd0\u884c\u5462?"))}b.isMDXComponent=!0}}]);