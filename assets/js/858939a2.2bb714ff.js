"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6918],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,m=s["".concat(l,".").concat(d)]||s[d]||f[d]||o;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>p});n(7294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={},i=void 0,l={unversionedId:"kubernetes/practice/change-default-timezone",id:"kubernetes/practice/change-default-timezone",title:"change-default-timezone",description:"\u901a\u8fc7\u7f16\u5199 Dockerfile,\u6784\u5efa\u81ea\u5df1\u7684 Docker \u955c\u50cf\uff0c\u53ef\u4ee5\u6c38\u4e45\u89e3\u51b3\u65f6\u533a\u95ee\u9898\u3002",source:"@site/docs/kubernetes/practice/change-default-timezone.md",sourceDirName:"kubernetes/practice",slug:"/kubernetes/practice/change-default-timezone",permalink:"/docs/kubernetes/practice/change-default-timezone",draft:!1,tags:[],version:"current",lastUpdatedAt:1675912862,formattedLastUpdatedAt:"2023\u5e742\u67089\u65e5",frontMatter:{},sidebar:"kubernetes",previous:{title:"calico",permalink:"/docs/kubernetes/practice/calico"},next:{title:"CoreDNS \u6027\u80fd\u4f18\u5316",permalink:"/docs/kubernetes/practice/coredns"}},u={},p=[{value:"1. Alpine",id:"1-alpine",level:2},{value:"2. Debian",id:"2-debian",level:2},{value:"3. Ubuntu",id:"3-ubuntu",level:2},{value:"4. CentOS",id:"4-centos",level:2}],s={toc:p},f="wrapper";function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(f,a({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u901a\u8fc7\u7f16\u5199 Dockerfile,\u6784\u5efa\u81ea\u5df1\u7684 Docker \u955c\u50cf\uff0c\u53ef\u4ee5\u6c38\u4e45\u89e3\u51b3\u65f6\u533a\u95ee\u9898\u3002"),(0,r.kt)("h2",a({},{id:"1-alpine"}),"1. Alpine"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-dockerfile"}),"ENV TZ Asia/Shanghai\n\nRUN apk add tzdata && cp /usr/share/zoneinfo/${TZ} /etc/localtime \\\n    && echo ${TZ} > /etc/timezone \\\n    && apk del tzdata\n")),(0,r.kt)("h2",a({},{id:"2-debian"}),"2. Debian"),(0,r.kt)("p",null,"Debian \u57fa\u7840\u955c\u50cf \u4e2d\u5df2\u7ecf\u5b89\u88c5\u4e86 tzdata \u5305\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u4ee5\u4e0b\u4ee3\u7801\u6dfb\u52a0\u5230 Dockerfile \u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-dockerfile"}),"ENV TZ=Asia/Shanghai \\\n    DEBIAN_FRONTEND=noninteractive\n\nRUN ln -fs /usr/share/zoneinfo/${TZ} /etc/localtime \\\n    && echo ${TZ} > /etc/timezone \\\n    && dpkg-reconfigure --frontend noninteractive tzdata \\\n    && rm -rf /var/lib/apt/lists/*\n")),(0,r.kt)("h2",a({},{id:"3-ubuntu"}),"3. Ubuntu"),(0,r.kt)("p",null,"Ubuntu \u57fa\u7840\u955c\u50cf\u4e2d\u6ca1\u6709\u5b89\u88c5\u4e86 tzdata \u5305\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u5148\u5b89\u88c5 tzdata \u5305\u3002\n\u6211\u4eec\u53ef\u4ee5\u5c06\u4ee5\u4e0b\u4ee3\u7801\u6dfb\u52a0\u5230 Dockerfile \u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-dockerfile"}),"ENV TZ=Asia/Shanghai \\\n    DEBIAN_FRONTEND=noninteractive\n\nRUN apt update \\\n    && apt install -y tzdata \\\n    && ln -fs /usr/share/zoneinfo/${TZ} /etc/localtime \\\n    && echo ${TZ} > /etc/timezone \\\n    && dpkg-reconfigure --frontend noninteractive tzdata \\\n    && rm -rf /var/lib/apt/lists/*\n")),(0,r.kt)("h2",a({},{id:"4-centos"}),"4. CentOS"),(0,r.kt)("p",null,"CentOS \u57fa\u7840\u955c\u50cf \u4e2d\u5df2\u7ecf\u5b89\u88c5\u4e86 tzdata \u5305\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u4ee5\u4e0b\u4ee3\u7801\u6dfb\u52a0\u5230 Dockerfile \u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-dockerfile"}),"ENV TZ Asia/Shanghai\n\nRUN ln -fs /usr/share/zoneinfo/${TZ} /etc/localtime \\\n    && echo ${TZ} > /etc/timezone\n")))}d.isMDXComponent=!0}}]);