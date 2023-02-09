"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1306],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},P=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),P=a,d=c["".concat(i,".").concat(P)]||c[P]||m[P]||o;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=P;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}P.displayName="MDXCreateElement"},7776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>P,frontMatter:()=>s,metadata:()=>i,toc:()=>u});n(7294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={},l="\u6301\u4e45\u5377",i={unversionedId:"kubernetes/storage/persistent-volumes",id:"kubernetes/storage/persistent-volumes",title:"\u6301\u4e45\u5377",description:"\u7b80\u4ecb",source:"@site/docs/kubernetes/storage/02-persistent-volumes.md",sourceDirName:"kubernetes/storage",slug:"/kubernetes/storage/persistent-volumes",permalink:"/docs/kubernetes/storage/persistent-volumes",draft:!1,tags:[],version:"current",lastUpdatedAt:1675912862,formattedLastUpdatedAt:"2023\u5e742\u67089\u65e5",sidebarPosition:2,frontMatter:{},sidebar:"kubernetes",previous:{title:"\u5377",permalink:"/docs/kubernetes/storage/volumes"},next:{title:"examples",permalink:"/docs/kubernetes/storage/examples"}},p={},u=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u5377\u548c\u7533\u9886\u7684\u751f\u547d\u5468\u671f",id:"\u5377\u548c\u7533\u9886\u7684\u751f\u547d\u5468\u671f",level:2},{value:"\u4f9b\u5e94",id:"\u4f9b\u5e94",level:3},{value:"\u9759\u6001\u4f9b\u5e94",id:"\u9759\u6001\u4f9b\u5e94",level:4},{value:"\u52a8\u6001\u4f9b\u5e94",id:"\u52a8\u6001\u4f9b\u5e94",level:4},{value:"\u7ed1\u5b9a",id:"\u7ed1\u5b9a",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:3},{value:"\u4fdd\u62a4\u4f7f\u7528\u4e2d\u7684\u5b58\u50a8\u5bf9\u8c61",id:"\u4fdd\u62a4\u4f7f\u7528\u4e2d\u7684\u5b58\u50a8\u5bf9\u8c61",level:3}],c={toc:u},m="wrapper";function P(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)(m,a({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",a({},{id:"\u6301\u4e45\u5377"}),"\u6301\u4e45\u5377"),(0,r.kt)("h2",a({},{id:"\u7b80\u4ecb"}),"\u7b80\u4ecb"),(0,r.kt)("p",null,"\u5728 k8s  \u4e2d PersistentVolume  \u5b50\u6a21\u5757\u63d0\u4f9b\u4e86\u4e00\u7ec4 API \uff1a \u5c06\u5b58\u50a8\u5982\u4f55\u4f9b\u5e94\u7684\u7ec6\u8282\u4ece\u5176\u5982\u4f55\u88ab\u4f7f\u7528\u4e2d\u62bd\u8c61\u51fa\u6765\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u5b9e\u73b0\u8fd9\u70b9\uff0c\u53c8\u5f15\u5165\u4e86\u4e24\u4e2a API \u8d44\u6e90\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"PersistentVolume")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"PersistentVolumeClaim"),"\u3002"),(0,r.kt)("p",null,"\u6301\u4e45\u5377\uff08PersistentVolume\uff0cPV\uff09\u662f\u96c6\u7fa4\u4e2d\u7684\u4e00\u5757\u5b58\u50a8\uff0c\u53ef\u4ee5\u7531\u7ba1\u7406\u5458\u4e8b\u5148\u4f9b\u5e94\uff0c\u6216\u8005 \u4f7f\u7528",(0,r.kt)("a",a({parentName:"p"},{href:"https://kubernetes.io/zh/docs/concepts/storage/storage-classes/"}),"\u5b58\u50a8\u7c7b\uff08Storage Class\uff09"),"\u6765\u52a8\u6001\u4f9b\u5e94\u3002 \u6301\u4e45\u5377\u662f\u96c6\u7fa4\u8d44\u6e90\uff0c\u5c31\u50cf\u8282\u70b9\u4e5f\u662f\u96c6\u7fa4\u8d44\u6e90\u4e00\u6837\u3002PV \u6301\u4e45\u5377\u548c\u666e\u901a\u7684 Volume \u4e00\u6837\uff0c\u4e5f\u662f\u4f7f\u7528 \u5377\u63d2\u4ef6\u6765\u5b9e\u73b0\u7684\uff0c\u53ea\u662f\u5b83\u4eec\u62e5\u6709\u72ec\u7acb\u4e8e\u4efb\u4f55\u4f7f\u7528 PV \u7684 Pod \u7684\u751f\u547d\u5468\u671f\u3002 \u6b64 API \u5bf9\u8c61\u4e2d\u8bb0\u8ff0\u4e86\u5b58\u50a8\u7684\u5b9e\u73b0\u7ec6\u8282\uff0c\u65e0\u8bba\u5176\u80cc\u540e\u662f NFS\u3001iSCSI \u8fd8\u662f\u7279\u5b9a\u4e8e\u4e91\u5e73\u53f0\u7684\u5b58\u50a8\u7cfb\u7edf\u3002"),(0,r.kt)("p",null,"\u6301\u4e45\u5377\u7533\u9886\uff08PersistentVolumeClaim\uff0cPVC\uff09\u8868\u8fbe\u7684\u662f\u7528\u6237\u5bf9\u5b58\u50a8\u7684\u8bf7\u6c42\u3002\u6982\u5ff5\u4e0a\u4e0e Pod \u7c7b\u4f3c\u3002 Pod \u4f1a\u8017\u7528\u8282\u70b9\u8d44\u6e90\uff0c\u800c PVC \u7533\u9886\u4f1a\u8017\u7528 PV \u8d44\u6e90\u3002Pod \u53ef\u4ee5\u8bf7\u6c42\u7279\u5b9a\u6570\u91cf\u7684\u8d44\u6e90\uff08CPU \u548c\u5185\u5b58\uff09\uff1b\u540c\u6837 PVC \u7533\u9886\u4e5f\u53ef\u4ee5\u8bf7\u6c42\u7279\u5b9a\u7684\u5927\u5c0f\u548c\u8bbf\u95ee\u6a21\u5f0f \uff08\u4f8b\u5982\uff0c\u53ef\u4ee5\u8981\u6c42 PV \u5377\u80fd\u591f\u4ee5 ReadWriteOnce\u3001ReadOnlyMany \u6216 ReadWriteMany \u6a21\u5f0f\u4e4b\u4e00\u6765\u6302\u8f7d\uff0c\u53c2\u89c1",(0,r.kt)("a",a({parentName:"p"},{href:"https://kubernetes.io/zh/docs/concepts/storage/persistent-volumes/#access-modes"}),"\u8bbf\u95ee\u6a21\u5f0f"),"\uff09\u3002\u5c3d\u7ba1 PersistentVolumeClaim \u5141\u8bb8\u7528\u6237\u6d88\u8017\u62bd\u8c61\u7684\u5b58\u50a8\u8d44\u6e90\uff0c\u5e38\u89c1\u7684\u60c5\u51b5\u662f\u9488\u5bf9\u4e0d\u540c\u7684 \u95ee\u9898\u7528\u6237\u9700\u8981\u7684\u662f\u5177\u6709\u4e0d\u540c\u5c5e\u6027\uff08\u5982\uff0c\u6027\u80fd\uff09\u7684 PersistentVolume \u5377\u3002 \u96c6\u7fa4\u7ba1\u7406\u5458\u9700\u8981\u80fd\u591f\u63d0\u4f9b\u4e0d\u540c\u6027\u8d28\u7684 PersistentVolume\uff0c\u5e76\u4e14\u8fd9\u4e9b PV \u5377\u4e4b\u95f4\u7684\u5dee\u522b\u4e0d \u4ec5\u9650\u4e8e\u5377\u5927\u5c0f\u548c\u8bbf\u95ee\u6a21\u5f0f\uff0c\u540c\u65f6\u53c8\u4e0d\u80fd\u5c06\u5377\u662f\u5982\u4f55\u5b9e\u73b0\u7684\u8fd9\u4e9b\u7ec6\u8282\u66b4\u9732\u7ed9\u7528\u6237\u3002 \u4e3a\u4e86\u6ee1\u8db3\u8fd9\u7c7b\u9700\u6c42\uff0c\u5c31\u6709\u4e86 ",(0,r.kt)("em",{parentName:"p"},"\u5b58\u50a8\u7c7b\uff08StorageClass\uff09")," \u8d44\u6e90\u3002"),(0,r.kt)("p",null,'StorageClass \u4e3a\u7ba1\u7406\u5458\u63d0\u4f9b\u4e86\u63cf\u8ff0\u5b58\u50a8 "\u7c7b" \u7684\u65b9\u6cd5\u3002 \u4e0d\u540c\u7684\u7c7b\u578b\u53ef\u80fd\u4f1a\u6620\u5c04\u5230\u4e0d\u540c\u7684\u670d\u52a1\u8d28\u91cf\u7b49\u7ea7\u6216\u5907\u4efd\u7b56\u7565\uff0c\u6216\u662f\u7531\u96c6\u7fa4\u7ba1\u7406\u5458\u5236\u5b9a\u7684\u4efb\u610f\u7b56\u7565\u3002 Kubernetes \u672c\u8eab\u5e76\u4e0d\u6e05\u695a\u5404\u79cd\u7c7b\u4ee3\u8868\u7684\u4ec0\u4e48\u3002\u8fd9\u4e2a\u7c7b\u7684\u6982\u5ff5\u5728\u5176\u4ed6\u5b58\u50a8\u7cfb\u7edf\u4e2d\u6709\u65f6\u88ab\u79f0\u4e3a "\u914d\u7f6e\u6587\u4ef6". \u6bcf\u4e2a StorageClass \u90fd\u5305\u542b ',(0,r.kt)("inlineCode",{parentName:"p"},"provisioner"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"parameters")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"reclaimPolicy")," \u5b57\u6bb5\uff0c \u8fd9\u4e9b\u5b57\u6bb5\u4f1a\u5728 StorageClass \u9700\u8981\u52a8\u6001\u5206\u914d PersistentVolume \u65f6\u4f1a\u4f7f\u7528\u5230\u3002StorageClass \u5bf9\u8c61\u7684\u547d\u540d\u5f88\u91cd\u8981\uff0c\u7528\u6237\u4f7f\u7528\u8fd9\u4e2a\u547d\u540d\u6765\u8bf7\u6c42\u751f\u6210\u4e00\u4e2a\u7279\u5b9a\u7684\u7c7b\u3002 \u5f53\u521b\u5efa StorageClass \u5bf9\u8c61\u65f6\uff0c\u7ba1\u7406\u5458\u8bbe\u7f6e StorageClass \u5bf9\u8c61\u7684\u547d\u540d\u548c\u5176\u4ed6\u53c2\u6570\uff0c\u4e00\u65e6\u521b\u5efa\u4e86\u5bf9\u8c61\u5c31\u4e0d\u80fd\u518d\u5bf9\u5176\u66f4\u65b0\u3002"),(0,r.kt)("h2",a({},{id:"\u5377\u548c\u7533\u9886\u7684\u751f\u547d\u5468\u671f"}),"\u5377\u548c\u7533\u9886\u7684\u751f\u547d\u5468\u671f"),(0,r.kt)("p",null,"PV \u5377\u662f\u96c6\u7fa4\u4e2d\u7684\u8d44\u6e90\u3002PVC \u7533\u9886\u662f\u5bf9\u8fd9\u4e9b\u8d44\u6e90\u7684\u8bf7\u6c42\uff0c\u4e5f\u88ab\u7528\u6765\u6267\u884c\u5bf9\u8d44\u6e90\u7684\u7533\u9886\u68c0\u67e5\u3002 PV \u5377\u548c PVC \u7533\u9886\u4e4b\u95f4\u7684\u4e92\u52a8\u9075\u5faa\u5982\u4e0b\u751f\u547d\u5468\u671f\uff1a"),(0,r.kt)("h3",a({},{id:"\u4f9b\u5e94"}),"\u4f9b\u5e94"),(0,r.kt)("p",null,"PV \u5377\u7684\u4f9b\u5e94\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a\u9759\u6001\u4f9b\u5e94\u6216\u52a8\u6001\u4f9b\u5e94\u3002"),(0,r.kt)("h4",a({},{id:"\u9759\u6001\u4f9b\u5e94"}),"\u9759\u6001\u4f9b\u5e94"),(0,r.kt)("p",null,"\u96c6\u7fa4\u7ba1\u7406\u5458\u521b\u5efa\u82e5\u5e72 PV \u5377\u3002\u8fd9\u4e9b\u5377\u5bf9\u8c61\u5e26\u6709\u771f\u5b9e\u5b58\u50a8\u7684\u7ec6\u8282\u4fe1\u606f\uff0c\u5e76\u4e14\u5bf9\u96c6\u7fa4 \u7528\u6237\u53ef\u7528\uff08\u53ef\u89c1\uff09\u3002PV \u5377\u5bf9\u8c61\u5b58\u5728\u4e8e Kubernetes API \u4e2d\uff0c\u53ef\u4f9b\u7528\u6237\u6d88\u8d39\uff08\u4f7f\u7528\uff09"),(0,r.kt)("h4",a({},{id:"\u52a8\u6001\u4f9b\u5e94"}),"\u52a8\u6001\u4f9b\u5e94"),(0,r.kt)("p",null,"\u5982\u679c\u7ba1\u7406\u5458\u6240\u521b\u5efa\u7684\u6240\u6709\u9759\u6001 PV \u5377\u90fd\u65e0\u6cd5\u4e0e\u7528\u6237\u7684 PersistentVolumeClaim \u5339\u914d\uff0c \u96c6\u7fa4\u53ef\u4ee5\u5c1d\u8bd5\u4e3a\u8be5 PVC \u7533\u9886\u52a8\u6001\u4f9b\u5e94\u4e00\u4e2a\u5b58\u50a8\u5377\u3002 \u8fd9\u4e00\u4f9b\u5e94\u64cd\u4f5c\u662f\u57fa\u4e8e StorageClass \u6765\u5b9e\u73b0\u7684\uff1aPVC \u7533\u9886\u5fc5\u987b\u8bf7\u6c42\u67d0\u4e2a ",(0,r.kt)("a",a({parentName:"p"},{href:"https://kubernetes.io/zh/docs/concepts/storage/storage-classes/"}),"\u5b58\u50a8\u7c7b"),"\uff0c\u540c\u65f6\u96c6\u7fa4\u7ba1\u7406\u5458\u5fc5\u987b \u5df2\u7ecf\u521b\u5efa\u5e76\u914d\u7f6e\u4e86\u8be5\u7c7b\uff0c\u8fd9\u6837\u52a8\u6001\u4f9b\u5e94\u5377\u7684\u52a8\u4f5c\u624d\u4f1a\u53d1\u751f\u3002 \u5982\u679c PVC \u7533\u9886\u6307\u5b9a\u5b58\u50a8\u7c7b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},'""'),"\uff0c\u5219\u76f8\u5f53\u4e8e\u4e3a\u81ea\u8eab\u7981\u6b62\u4f7f\u7528\u52a8\u6001\u4f9b\u5e94\u7684\u5377\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u57fa\u4e8e\u5b58\u50a8\u7c7b\u5b8c\u6210\u52a8\u6001\u7684\u5b58\u50a8\u4f9b\u5e94\uff0c\u96c6\u7fa4\u7ba1\u7406\u5458\u9700\u8981\u5728 API \u670d\u52a1\u5668\u4e0a\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultStorageClass")," ",(0,r.kt)("a",a({parentName:"p"},{href:"https://kubernetes.io/zh/docs/reference/access-authn-authz/admission-controllers/#defaultstorageclass"}),"\u8bbe\u7f6e\u6388\u6743"),"\u3002 \u4e3e\u4f8b\u800c\u8a00\uff0c\u53ef\u4ee5\u901a\u8fc7\u4fdd\u8bc1 ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultStorageClass")," \u51fa\u73b0\u5728 API \u670d\u52a1\u5668\u7ec4\u4ef6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"--enable-admission-plugins")," \u6807\u5fd7\u503c\u4e2d\u5b9e\u73b0\u8fd9\u70b9\uff1b\u8be5\u6807\u5fd7\u7684\u503c\u53ef\u4ee5\u662f\u9017\u53f7 \u5206\u9694\u7684\u6709\u5e8f\u5217\u8868\u3002\u5173\u4e8e API \u670d\u52a1\u5668\u6807\u5fd7\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",a({parentName:"p"},{href:"https://kubernetes.io/zh/docs/reference/command-line-tools-reference/kube-apiserver/"}),"kube-apiserver")," \u6587\u6863\u3002"),(0,r.kt)("h3",a({},{id:"\u7ed1\u5b9a"}),"\u7ed1\u5b9a"),(0,r.kt)("p",null,"\u7528\u6237\u521b\u5efa\u4e00\u4e2a\u5e26\u6709\u7279\u5b9a\u5b58\u50a8\u5bb9\u91cf\u548c\u7279\u5b9a\u8bbf\u95ee\u6a21\u5f0f\u9700\u6c42\u7684 PersistentVolumeClaim \u5bf9\u8c61\uff1b \u5728\u52a8\u6001\u4f9b\u5e94\u573a\u666f\u4e0b\uff0c\u8fd9\u4e2a PVC \u5bf9\u8c61\u53ef\u80fd\u5df2\u7ecf\u521b\u5efa\u5b8c\u6bd5\u3002 \u4e3b\u63a7\u8282\u70b9\u4e2d\u7684\u63a7\u5236\u56de\u8def\u76d1\u6d4b\u65b0\u7684 PVC \u5bf9\u8c61\uff0c\u5bfb\u627e\u4e0e\u4e4b\u5339\u914d\u7684 PV \u5377\uff08\u5982\u679c\u53ef\u80fd\u7684\u8bdd\uff09\uff0c \u5e76\u5c06\u4e8c\u8005\u7ed1\u5b9a\u5230\u4e00\u8d77\u3002 \u5982\u679c\u4e3a\u4e86\u65b0\u7684 PVC \u7533\u9886\u52a8\u6001\u4f9b\u5e94\u4e86 PV \u5377\uff0c\u5219\u63a7\u5236\u56de\u8def\u603b\u662f\u5c06\u8be5 PV \u5377\u7ed1\u5b9a\u5230\u8fd9\u4e00 PVC \u7533\u9886\u3002 \u5426\u5219\uff0c\u7528\u6237\u603b\u662f\u80fd\u591f\u83b7\u5f97\u4ed6\u4eec\u6240\u8bf7\u6c42\u7684\u8d44\u6e90\uff0c\u53ea\u662f\u6240\u83b7\u5f97\u7684 PV \u5377\u53ef\u80fd\u4f1a\u8d85\u51fa\u6240\u8bf7\u6c42\u7684\u914d\u7f6e\u3002 \u4e00\u65e6\u7ed1\u5b9a\u5173\u7cfb\u5efa\u7acb\uff0c\u5219 PersistentVolumeClaim \u7ed1\u5b9a\u5c31\u662f\u6392\u4ed6\u6027\u7684\uff0c\u65e0\u8bba\u8be5 PVC \u7533\u9886\u662f \u5982\u4f55\u4e0e PV \u5377\u5efa\u7acb\u7684\u7ed1\u5b9a\u5173\u7cfb\u3002 PVC \u7533\u9886\u4e0e PV \u5377\u4e4b\u95f4\u7684\u7ed1\u5b9a\u662f\u4e00\u79cd\u4e00\u5bf9\u4e00\u7684\u6620\u5c04\uff0c\u5b9e\u73b0\u4e0a\u4f7f\u7528 ClaimRef \u6765\u8bb0\u8ff0 PV \u5377 \u4e0e PVC \u7533\u9886\u95f4\u7684\u53cc\u5411\u7ed1\u5b9a\u5173\u7cfb\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u627e\u4e0d\u5230\u5339\u914d\u7684 PV \u5377\uff0cPVC \u7533\u9886\u4f1a\u65e0\u9650\u671f\u5730\u5904\u4e8e\u672a\u7ed1\u5b9a\u72b6\u6001\u3002 \u5f53\u4e0e\u4e4b\u5339\u914d\u7684 PV \u5377\u53ef\u7528\u65f6\uff0cPVC \u7533\u9886\u4f1a\u88ab\u7ed1\u5b9a\u3002 \u4f8b\u5982\uff0c\u5373\u4f7f\u67d0\u96c6\u7fa4\u4e0a\u4f9b\u5e94\u4e86\u5f88\u591a 50 Gi \u5927\u5c0f\u7684 PV \u5377\uff0c\u4e5f\u65e0\u6cd5\u4e0e\u8bf7\u6c42 100 Gi \u5927\u5c0f\u7684\u5b58\u50a8\u7684 PVC \u5339\u914d\u3002\u5f53\u65b0\u7684 100 Gi PV \u5377\u88ab\u52a0\u5165\u5230\u96c6\u7fa4\u65f6\uff0c\u8be5 PVC \u624d\u6709\u53ef\u80fd\u88ab\u7ed1\u5b9a\u3002"),(0,r.kt)("h3",a({},{id:"\u4f7f\u7528"}),"\u4f7f\u7528"),(0,r.kt)("p",null,"Pod \u5c06 PVC \u7533\u9886\u5f53\u505a\u5b58\u50a8\u5377\u6765\u4f7f\u7528\u3002\u96c6\u7fa4\u4f1a\u68c0\u89c6 PVC \u7533\u9886\uff0c\u627e\u5230\u6240\u7ed1\u5b9a\u7684\u5377\uff0c\u5e76 \u4e3a Pod \u6302\u8f7d\u8be5\u5377\u3002\u5bf9\u4e8e\u652f\u6301\u591a\u79cd\u8bbf\u95ee\u6a21\u5f0f\u7684\u5377\uff0c\u7528\u6237\u8981\u5728 Pod \u4e2d\u4ee5\u5377\u7684\u5f62\u5f0f\u4f7f\u7528\u7533\u9886 \u65f6\u6307\u5b9a\u671f\u671b\u7684\u8bbf\u95ee\u6a21\u5f0f\u3002"),(0,r.kt)("p",null,"\u4e00\u65e6\u7528\u6237\u6709\u4e86\u7533\u9886\u5bf9\u8c61\u5e76\u4e14\u8be5\u7533\u9886\u5df2\u7ecf\u88ab\u7ed1\u5b9a\uff0c\u5219\u6240\u7ed1\u5b9a\u7684 PV \u5377\u5728\u7528\u6237\u4ecd\u7136\u9700\u8981\u5b83\u671f\u95f4 \u4e00\u76f4\u5c5e\u4e8e\u8be5\u7528\u6237\u3002\u7528\u6237\u901a\u8fc7\u5728 Pod \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"volumes")," \u5757\u4e2d\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"p"},"persistentVolumeClaim")," \u8282\u533a\u6765\u8c03\u5ea6 Pod\uff0c\u8bbf\u95ee\u6240\u7533\u9886\u7684 PV \u5377\u3002 \u76f8\u5173\u7ec6\u8282\u53ef\u53c2\u9605",(0,r.kt)("a",a({parentName:"p"},{href:"https://kubernetes.io/zh/docs/concepts/storage/persistent-volumes/#claims-as-volumes"}),"\u4f7f\u7528\u7533\u9886\u4f5c\u4e3a\u5377"),"\u3002"),(0,r.kt)("h3",a({},{id:"\u4fdd\u62a4\u4f7f\u7528\u4e2d\u7684\u5b58\u50a8\u5bf9\u8c61"}),"\u4fdd\u62a4\u4f7f\u7528\u4e2d\u7684\u5b58\u50a8\u5bf9\u8c61"),(0,r.kt)("p",null,"\u4fdd\u62a4\u4f7f\u7528\u4e2d\u7684\u5b58\u50a8\u5bf9\u8c61\uff08Storage Object in Use Protection\uff09\u8fd9\u4e00\u529f\u80fd\u7279\u6027\u7684\u76ee\u7684 \u662f\u786e\u4fdd\u4ecd\u88ab Pod \u4f7f\u7528\u7684 PersistentVolumeClaim\uff08PVC\uff09\u5bf9\u8c61\u53ca\u5176\u6240\u7ed1\u5b9a\u7684 PersistentVolume\uff08PV\uff09\u5bf9\u8c61\u5728\u7cfb\u7edf\u4e2d\u4e0d\u4f1a\u88ab\u5220\u9664\uff0c\u56e0\u4e3a\u8fd9\u6837\u505a\u53ef\u80fd\u4f1a\u5f15\u8d77\u6570\u636e\u4e22\u5931\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf4\u660e\uff1a")," \u5f53\u4f7f\u7528\u67d0 PVC \u7684 Pod \u5bf9\u8c61\u4ecd\u7136\u5b58\u5728\u65f6\uff0c\u8ba4\u4e3a\u8be5 PVC \u4ecd\u88ab\u6b64 Pod \u4f7f\u7528\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u7528\u6237\u5220\u9664\u88ab\u67d0 Pod \u4f7f\u7528\u7684 PVC \u5bf9\u8c61\uff0c\u8be5 PVC \u7533\u9886\u4e0d\u4f1a\u88ab\u7acb\u5373\u79fb\u9664\u3002 PVC \u5bf9\u8c61\u7684\u79fb\u9664\u4f1a\u88ab\u63a8\u8fdf\uff0c\u76f4\u81f3\u5176\u4e0d\u518d\u88ab\u4efb\u4f55 Pod \u4f7f\u7528\u3002 \u6b64\u5916\uff0c\u5982\u679c\u7ba1\u7406\u5458\u5220\u9664\u5df2\u7ed1\u5b9a\u5230\u67d0 PVC \u7533\u9886\u7684 PV \u5377\uff0c\u8be5 PV \u5377\u4e5f\u4e0d\u4f1a\u88ab\u7acb\u5373\u79fb\u9664\u3002 PV \u5bf9\u8c61\u7684\u79fb\u9664\u4e5f\u8981\u63a8\u8fdf\u5230\u8be5 PV \u4e0d\u518d\u7ed1\u5b9a\u5230 PVC\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u770b\u5230\u5f53 PVC \u7684\u72b6\u6001\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Terminating")," \u4e14\u5176 ",(0,r.kt)("inlineCode",{parentName:"p"},"Finalizers")," \u5217\u8868\u4e2d\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"p"},"kubernetes.io/pvc-protection")," \u65f6\uff0cPVC \u5bf9\u8c61\u662f\u5904\u4e8e\u88ab\u4fdd\u62a4\u72b6\u6001\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-yaml"}),'$ kubectl describe pvc gitea-data-pvc -n devops\nName:          gitea-data-pvc\nNamespace:     devops\nStorageClass:  microk8s-localhost\nStatus:        Bound\nVolume:        gitea-data-pv\nLabels:        app=gitea\nAnnotations:   control-plane.alpha.kubernetes.io/leader:\n                 {"holderIdentity":"76beea0f-f8c4-11eb-8e3c-2af9db8e5bc3","leaseDurationSeconds":15,"acquireTime":"2021-08-11T09:05:48Z","renewTime":"2021-...\n               pv.kubernetes.io/bind-completed: yes\n               pv.kubernetes.io/bound-by-controller: yes\nFinalizers:    [kubernetes.io/pvc-protection]\nCapacity:      500Gi\nAccess Modes:  RWX\nVolumeMode:    Filesystem\nUsed By:       gitea-c4b69d788-pq7jv\nEvents:        <none>\n\n')),(0,r.kt)("p",null,"PV\u662f\u5bf9\u5e95\u5c42\u7f51\u7edc\u5171\u4eab\u5b58\u50a8\u7684\u62bd\u8c61\uff0c\u5c06\u5171\u4eab\u5b58\u50a8\u5b9a\u4e49\u4e3a\u4e00\u79cd\u201c\u8d44\u6e90\u201d\uff0c\u6bd4\u5982Node\u4e5f\u662f\u5bb9\u5668\u5e94\u7528\u53ef\u4ee5\u6d88\u8d39\u7684\u8d44\u6e90\u3002PV\u7531\u7ba1\u7406\u5458\u521b\u5efa\u548c\u914d\u7f6e\uff0c\u4e0e\u5171\u4eab\u5b58\u50a8\u7684\u5177\u4f53\u5b9e\u73b0\u76f4\u63a5\u76f8\u5173\u3002"),(0,r.kt)("p",null,"PVC\u5219\u662f\u7528\u6237\u5bf9\u5b58\u50a8\u8d44\u6e90\u7684\u4e00\u4e2a\u201c\u7533\u8bf7\u201d\uff0c\u5c31\u50cfPod\u6d88\u8d39Node\u8d44\u6e90\u4e00\u6837\uff0cPVC\u80fd\u591f\u6d88\u8d39PV\u8d44\u6e90\u3002PVC\u53ef\u4ee5\u7533\u8bf7\u7279\u5b9a\u7684\u5b58\u50a8\u7a7a\u95f4\u548c\u8bbf\u95ee\u6a21\u5f0f\u3002"),(0,r.kt)("p",null,"StorageClass\uff0c\u7528\u4e8e\u6807\u8bb0\u5b58\u50a8\u8d44\u6e90\u7684\u7279\u6027\u548c\u6027\u80fd\uff0c\u7ba1\u7406\u5458\u53ef\u4ee5\u5c06\u5b58\u50a8\u8d44\u6e90\u5b9a\u4e49\u4e3a\u67d0\u79cd\u7c7b\u522b\uff0c\u6b63\u5982\u5b58\u50a8\u8bbe\u5907\u5bf9\u4e8e\u81ea\u8eab\u7684\u914d\u7f6e\u63cf\u8ff0\uff08Profile\uff09\u3002\u6839\u636eStorageClass\u7684\u63cf\u8ff0\u53ef\u4ee5\u76f4\u89c2\u7684\u5f97\u77e5\u5404\u79cd\u5b58\u50a8\u8d44\u6e90\u7684\u7279\u6027\uff0c\u5c31\u53ef\u4ee5\u6839\u636e\u5e94\u7528\u5bf9\u5b58\u50a8\u8d44\u6e90\u7684\u9700\u6c42\u53bb\u7533\u8bf7\u5b58\u50a8\u8d44\u6e90\u4e86\u3002\u5b58\u50a8\u5377\u53ef\u4ee5\u6309\u9700\u521b\u5efa\u3002"))}P.isMDXComponent=!0}}]);