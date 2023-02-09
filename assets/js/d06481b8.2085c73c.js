"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7058],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=d(n),c=a,s=k["".concat(p,".").concat(c)]||k[c]||m[c]||l;return n?r.createElement(s,o(o({ref:t},u),{},{components:n})):r.createElement(s,o({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[k]="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});n(7294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={},i="pod \u751f\u547d\u5468\u671f",p={unversionedId:"kubernetes/pod",id:"kubernetes/pod",title:"pod \u751f\u547d\u5468\u671f",description:"pod\u8ddf\u4e00\u4e2a\u4e00\u4e2a\u72ec\u7acb\u7684\u5e94\u7528\u4e00\u6837\uff0c\u4e5f\u662f\u4e00\u4e2a\u76f8\u5bf9\u4e34\u65f6\u6027\u7684\u4e2a\u4f53\u3002",source:"@site/docs/kubernetes/pod.md",sourceDirName:"kubernetes",slug:"/kubernetes/pod",permalink:"/docs/kubernetes/pod",draft:!1,tags:[],version:"current",lastUpdatedAt:1675912862,formattedLastUpdatedAt:"2023\u5e742\u67089\u65e5",frontMatter:{},sidebar:"kubernetes",previous:{title:"minikube",permalink:"/docs/kubernetes/minikube"},next:{title:"argo",permalink:"/docs/kubernetes/practice/argo"}},d={},u=[{value:"<code>Pod</code>",id:"pod",level:2},{value:"<code>\u5bb9\u5668\u72b6\u6001</code>",id:"\u5bb9\u5668\u72b6\u6001",level:2},{value:"Probe \u914d\u7f6e",id:"probe-\u914d\u7f6e",level:2},{value:"HTTP Probes \u914d\u7f6e",id:"http-probes-\u914d\u7f6e",level:2}],k={toc:u},m="wrapper";function c(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)(m,a({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"pod-\u751f\u547d\u5468\u671f"}),"pod \u751f\u547d\u5468\u671f"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pod"),"\u8ddf\u4e00\u4e2a\u4e00\u4e2a\u72ec\u7acb\u7684\u5e94\u7528\u4e00\u6837\uff0c\u4e5f\u662f\u4e00\u4e2a\u76f8\u5bf9\u4e34\u65f6\u6027\u7684\u4e2a\u4f53\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pod"),"\u4f1a\u88ab\u521b\u5efa\u3001\u8c03\u5ea6\u3001\u8fd0\u884c\u3001\u7ec8\u6b62\u7b49\u72b6\u6001\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pod"),"  \u81ea\u8eab\u4e0d\u5177\u6709\u81ea\u6108\u80fd\u529b\u3002"),(0,r.kt)("h2",a({},{id:"pod"}),(0,r.kt)("inlineCode",{parentName:"h2"},"Pod")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u72b6\u6001"),(0,r.kt)("th",a({parentName:"tr"},{align:null})),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Pending")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"\u60ac\u51b3")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Pod \u5df2\u88ab Kubernetes \u7cfb\u7edf\u63a5\u53d7\uff0c\u4f46\u6709\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u5bb9\u5668\u5c1a\u672a\u521b\u5efa\u4ea6\u672a\u8fd0\u884c\u3002",(0,r.kt)("br",null),"\u6b64\u9636\u6bb5\u5305\u62ec\u7b49\u5f85 Pod \u88ab\u8c03\u5ea6\u7684\u65f6\u95f4\u548c\u901a\u8fc7\u7f51\u7edc\u4e0b\u8f7d\u955c\u50cf\u7684\u65f6\u95f4\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Running")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"\u8fd0\u884c\u4e2d")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Pod \u5df2\u7ecf\u7ed1\u5b9a\u5230\u4e86\u67d0\u4e2a\u8282\u70b9\uff0cPod \u4e2d\u6240\u6709\u7684\u5bb9\u5668\u90fd\u5df2\u88ab\u521b\u5efa\u3002\u81f3\u5c11\u6709\u4e00\u4e2a\u5bb9\u5668\u4ecd\u5728\u8fd0\u884c\uff0c\u6216\u8005\u6b63\u5904\u4e8e\u542f\u52a8\u6216\u91cd\u542f\u72b6\u6001\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Succeeded")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"\u6210\u529f")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Pod \u4e2d\u7684\u6240\u6709\u5bb9\u5668\u90fd\u5df2\u6210\u529f\u7ec8\u6b62\uff0c\u5e76\u4e14\u4e0d\u4f1a\u518d\u91cd\u542f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Failed")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"\u5931\u8d25")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Pod \u4e2d\u7684\u6240\u6709\u5bb9\u5668\u90fd\u5df2\u7ec8\u6b62\uff0c\u5e76\u4e14\u81f3\u5c11\u6709\u4e00\u4e2a\u5bb9\u5668\u662f\u56e0\u4e3a\u5931\u8d25\u7ec8\u6b62\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5bb9\u5668\u4ee5\u975e 0 \u72b6\u6001\u9000\u51fa\u6216\u8005\u88ab\u7cfb\u7edf\u7ec8\u6b62\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Unknown")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"\u672a\u77e5")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u56e0\u4e3a\u67d0\u4e9b\u539f\u56e0\u65e0\u6cd5\u53d6\u5f97 Pod \u7684\u72b6\u6001\u3002\u8fd9\u79cd\u60c5\u51b5\u901a\u5e38\u662f\u56e0\u4e3a\u4e0e Pod \u6240\u5728\u4e3b\u673a\u901a\u4fe1\u5931\u8d25")))),(0,r.kt)("h2",a({},{id:"\u5bb9\u5668\u72b6\u6001"}),(0,r.kt)("inlineCode",{parentName:"h2"},"\u5bb9\u5668\u72b6\u6001")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u72b6\u6001"),(0,r.kt)("th",a({parentName:"tr"},{align:null})),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Waiting")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u7b49\u5f85"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u4e8e ",(0,r.kt)("inlineCode",{parentName:"td"},"Waiting")," \u72b6\u6001\u7684\u5bb9\u5668\u4ecd\u5728\u8fd0\u884c\u5b83\u5b8c\u6210\u542f\u52a8\u6240\u9700\u8981\u7684\u64cd\u4f5c\uff1a",(0,r.kt)("br",null),"\u4f8b\u5982\uff0c\u4ece\u67d0\u4e2a\u5bb9\u5668\u955c\u50cf \u4ed3\u5e93\u62c9\u53d6\u5bb9\u5668\u955c\u50cf\uff0c\u6216\u8005\u5411\u5bb9\u5668\u5e94\u7528 Secret \u6570\u636e\u7b49\u7b49")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Running")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u8fd0\u884c\u4e2d"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Running")," \u72b6\u6001\u8868\u660e\u5bb9\u5668\u6b63\u5728\u6267\u884c\u72b6\u6001\u5e76\u4e14\u6ca1\u6709\u95ee\u9898\u53d1\u751f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"Terminated")),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u5df2\u7ec8\u6b62"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"\u5904\u4e8e ",(0,r.kt)("inlineCode",{parentName:"td"},"Terminated")," \u72b6\u6001\u7684\u5bb9\u5668\u5df2\u7ecf\u5f00\u59cb\u6267\u884c\u5e76\u4e14\u6216\u8005\u6b63\u5e38\u7ed3\u675f\u6216\u8005\u56e0\u4e3a\u67d0\u4e9b\u539f\u56e0\u5931\u8d25")))),(0,r.kt)("h1",a({},{id:"\u914d\u7f6e\u5b58\u6d3b\u5c31\u7eea\u548c\u542f\u52a8\u63a2\u6d4b\u5668"}),"\u914d\u7f6e\u5b58\u6d3b\u3001\u5c31\u7eea\u548c\u542f\u52a8\u63a2\u6d4b\u5668"),(0,r.kt)("h2",a({},{id:"probe-\u914d\u7f6e"}),"Probe \u914d\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"initialDelaySeconds"),"\uff1a\u5bb9\u5668\u542f\u52a8\u540e\u8981\u7b49\u5f85\u591a\u5c11\u79d2\u540e\u5b58\u6d3b\u548c\u5c31\u7eea\u63a2\u6d4b\u5668\u624d\u88ab\u521d\u59cb\u5316\uff0c\u9ed8\u8ba4\u662f 0 \u79d2\uff0c\u6700\u5c0f\u503c\u662f 0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"periodSeconds"),"\uff1a\u6267\u884c\u63a2\u6d4b\u7684\u65f6\u95f4\u95f4\u9694\uff08\u5355\u4f4d\u662f\u79d2\uff09\u3002\u9ed8\u8ba4\u662f 10 \u79d2\u3002\u6700\u5c0f\u503c\u662f 1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timeoutSeconds"),"\uff1a\u63a2\u6d4b\u7684\u8d85\u65f6\u540e\u7b49\u5f85\u591a\u5c11\u79d2\u3002\u9ed8\u8ba4\u503c\u662f 1 \u79d2\u3002\u6700\u5c0f\u503c\u662f 1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"successThreshold"),"\uff1a\u63a2\u6d4b\u5668\u5728\u5931\u8d25\u540e\uff0c\u88ab\u89c6\u4e3a\u6210\u529f\u7684\u6700\u5c0f\u8fde\u7eed\u6210\u529f\u6570\u3002\u9ed8\u8ba4\u503c\u662f 1\u3002 \u5b58\u6d3b\u548c\u542f\u52a8\u63a2\u6d4b\u7684\u8fd9\u4e2a\u503c\u5fc5\u987b\u662f 1\u3002\u6700\u5c0f\u503c\u662f 1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"failureThreshold"),"\uff1a\u5f53\u63a2\u6d4b\u5931\u8d25\u65f6\uff0cKubernetes \u7684\u91cd\u8bd5\u6b21\u6570\u3002 \u5b58\u6d3b\u63a2\u6d4b\u60c5\u51b5\u4e0b\u7684\u653e\u5f03\u5c31\u610f\u5473\u7740\u91cd\u65b0\u542f\u52a8\u5bb9\u5668\u3002 \u5c31\u7eea\u63a2\u6d4b\u60c5\u51b5\u4e0b\u7684\u653e\u5f03 Pod \u4f1a\u88ab\u6253\u4e0a\u672a\u5c31\u7eea\u7684\u6807\u7b7e\u3002\u9ed8\u8ba4\u503c\u662f 3\u3002\u6700\u5c0f\u503c\u662f 1")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-yaml"}),"...\n...\n    readinessProbe:\n      tcpSocket:\n        port: 8080\n      initialDelaySeconds: 5\n      periodSeconds: 10\n    livenessProbe:\n      tcpSocket:\n        port: 8080\n      initialDelaySeconds: 15\n      periodSeconds: 20      \n...\n...      \n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e0a\u9762\u4f8b\u5b50\uff1a"),(0,r.kt)("p",{parentName:"blockquote"},"  ",(0,r.kt)("inlineCode",{parentName:"p"},"kubelet")," \u4f1a\u5728\u5bb9\u5668\u542f\u52a8 5 \u79d2\u540e\uff0c\u53d1\u9001\u7b2c\u4e00\u4e2a\u5c31\u7eea\u63a2\u6d4b\uff0c\u5c1d\u8bd5\u8fde\u63a5\u5bb9\u5668\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"8080")," \u7aef\u53e3\uff0c\u5982\u679c\u63a2\u6d4b\u6210\u529f\uff0c\u8fd9\u4e2a Pod \u4f1a\u88ab\u6807\u8bb0\u4e3a\u5c31\u7eea\u72b6\u6001\uff0ckubelet \u5c06\u7ee7\u7eed\u6bcf\u9694 10 \u79d2\u8fd0\u884c\u4e00\u6b21\u68c0\u6d4b\u3002"),(0,r.kt)("p",{parentName:"blockquote"},"  \u9664\u4e86\u5c31\u7eea\u63a2\u6d4b\uff0c\u8fd9\u4e2a\u914d\u7f6e\u5305\u62ec\u4e86\u4e00\u4e2a\u5b58\u6d3b\u63a2\u6d4b\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubelet "),"\u4f1a\u5728\u5bb9\u5668\u542f\u52a8 15 \u79d2\u540e\u8fdb\u884c\u7b2c\u4e00\u6b21\u5b58\u6d3b\u63a2\u6d4b\u3002 \u5c31\u50cf\u5c31\u7eea\u63a2\u6d4b\u4e00\u6837\uff0c\u4f1a\u5c1d\u8bd5\u8fde\u63a5 \u5bb9\u5668\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"8080")," \u7aef\u53e3\u3002 \u5982\u679c\u5b58\u6d3b\u63a2\u6d4b\u5931\u8d25\uff0c\u8fd9\u4e2a\u5bb9\u5668\u4f1a\u88ab\u91cd\u65b0\u542f\u52a8,20\u79d2\u8fdb\u884c\u4e00\u6b21\u5b58\u6d3b\u63a2\u6d4b\u3002")),(0,r.kt)("h2",a({},{id:"http-probes-\u914d\u7f6e"}),"HTTP Probes \u914d\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"host"),"\uff1a\u8fde\u63a5\u4f7f\u7528\u7684\u4e3b\u673a\u540d\uff0c\u9ed8\u8ba4\u662f Pod \u7684 IP\u3002\u4e5f\u53ef\u4ee5\u5728 HTTP \u5934\u4e2d\u8bbe\u7f6e \u201cHost\u201d \u6765\u4ee3\u66ff\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scheme")," \uff1a\u7528\u4e8e\u8bbe\u7f6e\u8fde\u63a5\u4e3b\u673a\u7684\u65b9\u5f0f\uff08HTTP \u8fd8\u662f HTTPS\uff09\u3002\u9ed8\u8ba4\u662f HTTP\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path"),"\uff1a\u8bbf\u95ee HTTP \u670d\u52a1\u7684\u8def\u5f84\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"httpHeaders"),"\uff1a\u8bf7\u6c42\u4e2d\u81ea\u5b9a\u4e49\u7684 HTTP \u5934\u3002HTTP \u5934\u5b57\u6bb5\u5141\u8bb8\u91cd\u590d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"port"),"\uff1a\u8bbf\u95ee\u5bb9\u5668\u7684\u7aef\u53e3\u53f7\u6216\u8005\u7aef\u53e3\u540d\u3002\u5982\u679c\u6570\u5b57\u5fc5\u987b\u5728 1 \uff5e 65535 \u4e4b\u95f4\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"}," \u6709\u65f6\u5019\uff0c\u4f1a\u6709\u4e00\u4e9b\u73b0\u6709\u7684\u5e94\u7528\u7a0b\u5e8f\u5728\u542f\u52a8\u65f6\u9700\u8981\u8f83\u591a\u7684\u521d\u59cb\u5316\u65f6\u95f4\u3002 \u8981\u4e0d\u5f71\u54cd\u5bf9\u5f15\u8d77\u63a2\u6d4b\u6b7b\u9501\u7684\u5feb\u901f\u54cd\u5e94\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8bbe\u7f6e\u5b58\u6d3b\u63a2\u6d4b\u53c2\u6570\u662f\u8981\u6280\u5de7\u7684\u3002 \u6280\u5de7\u5c31\u662f\u4f7f\u7528\u4e00\u4e2a\u547d\u4ee4\u6765\u8bbe\u7f6e\u542f\u52a8\u63a2\u6d4b\uff0c\u9488\u5bf9HTTP \u6216\u8005 TCP \u68c0\u6d4b\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"failureThreshold * periodSeconds")," \u53c2\u6570\u6765\u4fdd\u8bc1\u6709\u8db3\u591f\u957f\u7684\u65f6\u95f4\u5e94\u5bf9\u7cdf\u7cd5\u60c5\u51b5\u4e0b\u7684\u542f\u52a8\u65f6\u95f4\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-yaml"}),"ports:\n- name: liveness-port\n  containerPort: 8080\n  hostPort: 8080\n\nlivenessProbe:\n  httpGet:\n    path: /healthz\n    port: liveness-port\n  failureThreshold: 1\n  periodSeconds: 10\n\nstartupProbe:\n  httpGet:\n    path: /healthz\n    port: liveness-port\n  failureThreshold: 30\n  periodSeconds: 10\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e0a\u9762\u4f8b\u5b50\uff1a"),(0,r.kt)("p",{parentName:"blockquote"},"\u5e94\u7528\u7a0b\u5e8f\u5c06\u4f1a\u6709\u6700\u591a 5 \u5206\u949f(30 * 10 = 300s) \u7684\u65f6\u95f4\u6765\u5b8c\u6210\u5b83\u7684\u542f\u52a8\uff0c\u4e00\u65e6\u542f\u52a8\u63a2\u6d4b\u6210\u529f\u4e00\u6b21\uff0c\u5b58\u6d3b\u63a2\u6d4b\u4efb\u52a1\u5c31\u4f1a\u63a5\u7ba1\u5bf9\u5bb9\u5668\u7684\u63a2\u6d4b\uff0c\u5bf9\u5bb9\u5668\u6b7b\u9501\u53ef\u4ee5\u5feb\u901f\u54cd\u5e94\u3002 \u5982\u679c\u542f\u52a8\u63a2\u6d4b\u4e00\u76f4\u6ca1\u6709\u6210\u529f\uff0c\u5bb9\u5668\u4f1a\u5728 300 \u79d2\u540e\u88ab\u6740\u6b7b")))}c.isMDXComponent=!0}}]);