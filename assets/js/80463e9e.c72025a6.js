"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1719],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(n),d=o,m=p["".concat(c,".").concat(d)]||p[d]||k[d]||a;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});n(7294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={title:"\u5728windows \u4e0b\u4f7f\u7528 docker",date:new Date("2020-09-27T00:00:00.000Z"),category:["devops"],tag:["docker","wsl"]},s=void 0,c={unversionedId:"kubernetes/practice/play_docker_in_windows",id:"kubernetes/practice/play_docker_in_windows",title:"\u5728windows \u4e0b\u4f7f\u7528 docker",description:"\u5347\u7ea7WSL",source:"@site/docs/kubernetes/practice/play_docker_in_windows.md",sourceDirName:"kubernetes/practice",slug:"/kubernetes/practice/play_docker_in_windows",permalink:"/docs/kubernetes/practice/play_docker_in_windows",draft:!1,tags:[],version:"current",lastUpdatedAt:1675912862,formattedLastUpdatedAt:"2023\u5e742\u67089\u65e5",frontMatter:{title:"\u5728windows \u4e0b\u4f7f\u7528 docker",date:"2020-09-27T00:00:00.000Z",category:["devops"],tag:["docker","wsl"]},sidebar:"kubernetes",previous:{title:"k8s-timezone",permalink:"/docs/kubernetes/practice/k8s-timezone"},next:{title:"\u4f7f\u7528 Prometheus \u76d1\u63a7 kafka",permalink:"/docs/kubernetes/practice/prometheus-kafka"}},i={},u=[{value:"\u5347\u7ea7WSL",id:"\u5347\u7ea7wsl",level:2},{value:"\u7b80\u5355\u914d\u7f6e\u4f18\u5316",id:"\u7b80\u5355\u914d\u7f6e\u4f18\u5316",level:2},{value:"\u4f7f\u7528xshell \u8fde\u63a5",id:"\u4f7f\u7528xshell-\u8fde\u63a5",level:3},{value:"\u5b89\u88c5 docker",id:"\u5b89\u88c5-docker",level:2},{value:"\u8865\u5145",id:"\u8865\u5145",level:3}],p={toc:u},k="wrapper";function d(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)(k,o({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",o({},{id:"\u5347\u7ea7wsl"}),"\u5347\u7ea7WSL"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u68c0\u67e5\u4f60\u7684\u7cfb\u7edf\u7248\u672c\u53f7"),(0,r.kt)("p",{parentName:"blockquote"},"\u8bbe\u7f6e > \u66f4\u65b0\u548c\u5b89\u5168 > OS \u5185\u90e8\u7248\u672c\u4fe1\u606f")),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u7684\u7248\u672c\u53f7\u4f4e\u4e8e\u8fd9\u4e2a\uff0c\u63a8\u8350\u66f4\u65b0\u5b89\u88c5Windows 10 2020 \u5e74 5 \u6708\u66f4\u65b0\uff0c",(0,r.kt)("a",o({parentName:"p"},{href:"https://download.microsoft.com/download/8/3/c/83c39dca-2d27-4c24-b98b-0a4d6d921c80/Windows10Upgrade9252.exe"}),"\u66f4\u65b0\u52a9\u624b"),"\u3002"),(0,r.kt)("p",null,"\u4e3a\u4ec0\u4e48\u63a8\u8350\u66f4\u65b0\u52302004\uff1a\u4e3a\u4e86\u4f7f\u7528 WSL 2 "),(0,r.kt)("p",null,"\u4e3a\u5565\u4f7f\u7528 WLS 2 , windows docker desktop \u4e0d\u884c\u5417\uff1f"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"window docker desktop \u9700\u8981\u542f\u7528 Hyper-V ,\u8fd9\u73a9\u610f\u513f\u88c5\u4e00\u5768\u4e1c\u897f\uff0c\u81ea\u5df1\u53c8\u4e0d\u548b\u7528\uff0c\u8ddf\u7b2c\u4e09\u65b9\u7684\u865a\u62df\u673a\u8f6f\u4ef6\u4e0d\u517c\u5bb9")),(0,r.kt)("h1",o({},{id:"\u5b89\u88c5wsl-2"}),"\u5b89\u88c5WSL 2"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u542f\u7528\u201c ",(0,r.kt)("em",{parentName:"li"},"\u865a\u62df\u673a\u5e73\u53f0(Virtual Machine Platform)"),"\u201d\u53ef\u9009\u7ec4"),(0,r.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u5e76\u5b89\u88c5\u66f4\u65b0\u7ec4\u4ef6\uff1a",(0,r.kt)("a",o({parentName:"li"},{href:"https://aka.ms/wsl2kernel"}),"https://aka.ms/wsl2kernel")),(0,r.kt)("li",{parentName:"ol"})),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-cmd"}),"wsl --set-default-version 2\n\n# \u67e5\u770b\u6709\u5df2\u5b89\u88c5\u7684\u5b50\u7cfb\u7edf\nwsl -l -v\n  NAME            STATE           VERSION\n* Ubuntu-18.04    Stopped         2\n  kali-linux      Running         2\n\n# \u8fc1\u79fb\u5230version2\nwsl --set-version Ubuntu-18.04 2\n\n")),(0,r.kt)("p",null,"\u540e\u9762\u6ca1\u6709\u5b89\u88c5\u5b50\u7cfb\u7edf\u7684\u53ef\u4ee5\u5230win10 \u7684 Microsoft Store \u4e0b\u8f7d \u5b89\u88c5\u5c31\u597d\u3002"),(0,r.kt)("h1",o({},{id:"\u4f7f\u7528"}),"\u4f7f\u7528"),(0,r.kt)("h2",o({},{id:"\u7b80\u5355\u914d\u7f6e\u4f18\u5316"}),(0,r.kt)("a",o({parentName:"h2"},{href:"http://blog.lingwenlong.com/2020/04/22/ubuntu-tips/"}),"\u7b80\u5355\u914d\u7f6e\u4f18\u5316")),(0,r.kt)("h3",o({},{id:"\u4f7f\u7528xshell-\u8fde\u63a5"}),"\u4f7f\u7528xshell \u8fde\u63a5"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5b50\u7cfb\u7edf\u81ea\u5df1\u7684\u7ec8\u7aef\u4e0d\u597d\u7528\uff0c\u914d\u7f6e\u4e0b\u4f7f\u7528xhell \u6765\u8fde\u63a5\u4f7f\u7528")),(0,r.kt)("p",null,"\u4fee\u6539 ssh \u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"> sudo vi /etc/ssh/sshd_config\nPort 1022\nPasswordAuthentication yes\n\n> sudo service ssh restart\n# \u8fd9\u91cc\u53ef\u80fd\u4f1a\u62a5\u9519 error: Could not load host key: /etc/ssh/ssh_host_rsa_key ...\n\nssh-keygen -t rsa -f /etc/ssh/ssh_host_rsa_key \nssh-keygen -t dsa -f /etc/ssh/ssh_host_dsa_key\n")),(0,r.kt)("h2",o({},{id:"\u5b89\u88c5-docker"}),(0,r.kt)("a",o({parentName:"h2"},{href:"http://blog.lingwenlong.com/2020/03/28/docker-install/"}),"\u5b89\u88c5 docker")),(0,r.kt)("h3",o({},{id:"\u8865\u5145"}),"\u8865\u5145"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u7531\u4e8e\u5b50\u7cfb\u7edf\u4e2d\u4e0d\u652f\u6301\u81ea\u542f\u7a0b\u5e8f")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728 ubuntu \u4e2d \u7f16\u5199\u521d\u59cb\u5316\u811a\u672c")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"> sudo vi /etc/init.sh\n\n#!/bin/bash\n\nservice ssh start && service docker start\n\n> chmod +x /etc/init.sh\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728 windows \u4e0b\u521b\u5efa\u542f\u52a8\u811a\u672c start-ubuntu.bat(start-ubuntu.cmd)")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-cmd"}),"@echo off\n\nwsl --shutdown\nwsl -d Ubuntu-20.04 -u root /etc/init.sh\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u540e\u9762\u6bcf\u6b21\u542f\u52a8\u540e\u6267\u884c\u4e0b\u8fd9\u4e2a\u811a\u672c\uff0c\u5c31\u53ef\u4ee5\u4e86")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u60f3\u8bbe\u7f6e\u5f00\u673a\u81ea\u542f\uff1aWIN + R \u8f93\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"shell:startup")," , \u628a\u811a\u672c\u653e\u8fdb\u53bb\uff0c\u5c31\u53ef\u4ee5\u4e86")))}d.isMDXComponent=!0}}]);