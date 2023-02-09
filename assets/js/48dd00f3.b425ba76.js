"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9683],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),k=p(n),s=l,d=k["".concat(u,".").concat(s)]||k[s]||m[s]||i;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[k]="string"==typeof e?e:l,a[1]=o;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},845:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>u,toc:()=>c});n(7294);var r=n(3905);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const a={},o=void 0,u={unversionedId:"kubernetes/kubectl-conventions",id:"kubernetes/kubectl-conventions",title:"kubectl-conventions",description:"kubectl \u7684\u63a8\u8350\u7528\u6cd5\u7ea6\u5b9a\u3002",source:"@site/docs/kubernetes/kubectl-conventions.md",sourceDirName:"kubernetes",slug:"/kubernetes/kubectl-conventions",permalink:"/docs/kubernetes/kubectl-conventions",draft:!1,tags:[],version:"current",lastUpdatedAt:1675912862,formattedLastUpdatedAt:"2023\u5e742\u67089\u65e5",frontMatter:{},sidebar:"kubernetes",previous:{title:"\u5e38\u7528\u7684 kubectl \u547d\u4ee4\u548c\u6807\u5fd7",permalink:"/docs/kubernetes/kubectl-cm-cmds"},next:{title:"microk8s \u5165\u95e8",permalink:"/docs/kubernetes/microk8s"}},p={},c=[{value:"\u5728\u53ef\u91cd\u7528\u811a\u672c\u4e2d\u4f7f\u7528 <code>kubectl</code>",id:"\u5728\u53ef\u91cd\u7528\u811a\u672c\u4e2d\u4f7f\u7528-kubectl",level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"<code>kubectl run</code>",id:"kubectl-run",level:3},{value:"\u751f\u6210\u5668",id:"\u751f\u6210\u5668",level:4},{value:"<code>kubectl apply</code>",id:"kubectl-apply",level:3}],k={toc:c},m="wrapper";function s(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(m,l({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u7684\u63a8\u8350\u7528\u6cd5\u7ea6\u5b9a\u3002"),(0,r.kt)("h2",l({},{id:"\u5728\u53ef\u91cd\u7528\u811a\u672c\u4e2d\u4f7f\u7528-kubectl"}),"\u5728\u53ef\u91cd\u7528\u811a\u672c\u4e2d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"h2"},"kubectl")),(0,r.kt)("p",null,"\u5bf9\u4e8e\u811a\u672c\u4e2d\u7684\u7a33\u5b9a\u8f93\u51fa\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u4e00\u4e2a\u9762\u5411\u673a\u5668\u7684\u8f93\u51fa\u683c\u5f0f\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"-o name"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"-o json"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"-o yaml"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"-o go template")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"-o jsonpath"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5b8c\u5168\u9650\u5b9a\u7248\u672c\u3002\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"jobs.v1.batch/myjob"),"\u3002\u8fd9\u5c06\u786e\u4fdd kubectl \u4e0d\u4f1a\u4f7f\u7528\u5176\u9ed8\u8ba4\u7248\u672c\uff0c\u8be5\u7248\u672c\u4f1a\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\u800c\u66f4\u6539\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u4f9d\u8d56\u4e0a\u4e0b\u6587\u3001\u9996\u9009\u9879\u6216\u5176\u4ed6\u9690\u5f0f\u72b6\u6001\u3002")),(0,r.kt)("h2",l({},{id:"\u6700\u4f73\u5b9e\u8df5"}),"\u6700\u4f73\u5b9e\u8df5"),(0,r.kt)("h3",l({},{id:"kubectl-run"}),(0,r.kt)("inlineCode",{parentName:"h3"},"kubectl run")),(0,r.kt)("p",null,"\u82e5\u5e0c\u671b ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl run")," \u6ee1\u8db3\u57fa\u7840\u8bbe\u65bd\u5373\u4ee3\u7801\u7684\u8981\u6c42\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u7279\u5b9a\u7248\u672c\u7684\u6807\u7b7e\u6807\u8bb0\u955c\u50cf\uff0c\u4e0d\u8981\u5c06\u8be5\u6807\u7b7e\u79fb\u52a8\u5230\u65b0\u7248\u672c\u3002\u4f8b\u5982\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},":v1234"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"v1.2.3"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"r03062016-1-4"),"\uff0c\u800c\u4e0d\u662f ",(0,r.kt)("inlineCode",{parentName:"li"},":latest"),"\uff08\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",l({parentName:"li"},{href:"https://kubernetes.io/zh-cn/docs/concepts/configuration/overview/#container-images"}),"\u914d\u7f6e\u7684\u6700\u4f73\u5b9e\u8df5"),")\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u57fa\u4e8e\u7248\u672c\u63a7\u5236\u7684\u811a\u672c\u6765\u8fd0\u884c\u5305\u542b\u5927\u91cf\u53c2\u6570\u7684\u955c\u50cf\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u65e0\u6cd5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl run")," \u53c2\u6570\u6765\u8868\u793a\u7684\u529f\u80fd\u7279\u6027\uff0c\u4f7f\u7528\u57fa\u4e8e\u6e90\u7801\u63a7\u5236\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u4ee5\u8bb0\u5f55\u8981\u4f7f\u7528\u7684\u529f\u80fd\u7279\u6027\u3002")),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"--dry-run=client")," \u53c2\u6570\u6765\u9884\u89c8\u800c\u4e0d\u771f\u6b63\u63d0\u4ea4\u5373\u5c06\u4e0b\u53d1\u5230\u96c6\u7fa4\u7684\u5bf9\u8c61\u5b9e\u4f8b\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"}," \u6240\u6709\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl run")," \u751f\u6210\u5668\u5df2\u5f03\u7528\u3002\u67e5\u9605 Kubernetes v1.17 \u6587\u6863\u4e2d\u7684\u751f\u6210\u5668",(0,r.kt)("a",l({parentName:"p"},{href:"https://v1-17.docs.kubernetes.io/docs/reference/kubectl/conventions/#generators"}),"\u5217\u8868"),"\u4ee5\u53ca\u5b83\u4eec\u7684\u7528\u6cd5\u3002")),(0,r.kt)("h4",l({},{id:"\u751f\u6210\u5668"}),"\u751f\u6210\u5668"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 kubectl \u547d\u4ee4\u751f\u6210\u4ee5\u4e0b\u8d44\u6e90\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl create --dry-run=client -o yaml"),"\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clusterrole"),":         \u521b\u5efa ClusterRole\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clusterrolebinding"),":  \u4e3a\u7279\u5b9a\u7684 ClusterRole \u521b\u5efa ClusterRoleBinding\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"configmap"),":           \u4f7f\u7528\u672c\u5730\u6587\u4ef6\u3001\u76ee\u5f55\u6216\u6587\u672c\u503c\u521b\u5efa Configmap\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cronjob"),":             \u4f7f\u7528\u6307\u5b9a\u7684\u540d\u79f0\u521b\u5efa Cronjob\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"deployment"),":          \u4f7f\u7528\u6307\u5b9a\u7684\u540d\u79f0\u521b\u5efa Deployment\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"job"),":                 \u4f7f\u7528\u6307\u5b9a\u7684\u540d\u79f0\u521b\u5efa Job\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"namespace"),":           \u4f7f\u7528\u6307\u5b9a\u7684\u540d\u79f0\u521b\u5efa\u540d\u79f0\u7a7a\u95f4\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"poddisruptionbudget"),": \u4f7f\u7528\u6307\u5b9a\u540d\u79f0\u521b\u5efa Pod \u5e72\u6270\u9884\u7b97\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"priorityclass"),":       \u4f7f\u7528\u6307\u5b9a\u7684\u540d\u79f0\u521b\u5efa Priorityclass\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"quota"),":               \u4f7f\u7528\u6307\u5b9a\u7684\u540d\u79f0\u521b\u5efa\u914d\u989d\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"role"),":                \u4f7f\u7528\u5355\u4e00\u89c4\u5219\u521b\u5efa\u89d2\u8272\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rolebinding"),":         \u4e3a\u7279\u5b9a\u89d2\u8272\u6216 ClusterRole \u521b\u5efa RoleBinding\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"secret"),":              \u4f7f\u7528\u6307\u5b9a\u7684\u5b50\u547d\u4ee4\u521b\u5efa Secret\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"service"),":             \u4f7f\u7528\u6307\u5b9a\u7684\u5b50\u547d\u4ee4\u521b\u5efa\u670d\u52a1\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"serviceaccount"),":      \u4f7f\u7528\u6307\u5b9a\u7684\u540d\u79f0\u521b\u5efa\u670d\u52a1\u5e10\u6237\u3002")),(0,r.kt)("h3",l({},{id:"kubectl-apply"}),(0,r.kt)("inlineCode",{parentName:"h3"},"kubectl apply")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl apply")," \u547d\u4ee4\u521b\u5efa\u6216\u66f4\u65b0\u8d44\u6e90\u3002\u6709\u5173\u4f7f\u7528 kubectl apply \u66f4\u65b0\u8d44\u6e90\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",l({parentName:"li"},{href:"https://kubectl.docs.kubernetes.io"}),"Kubectl \u6587\u6863"),"\u3002")))}s.isMDXComponent=!0}}]);