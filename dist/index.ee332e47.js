import{r as A,o as l,c as m,w as E,K as P,a as _,b as u,d as L,e as k,f as D,g as O,T,S as g,O as y,h as R,i as I}from"./vendor.b27d2840.js";const V=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}};V();const b={setup(p){return(a,s)=>{const n=A("router-view");return l(),m(n,null,{default:E(({Component:e})=>[(l(),m(P,null,[a.$route.meta.keepAlive?(l(),m(_(e),{key:a.$route.name})):u("",!0)],1024)),a.$route.meta.keepAlive?u("",!0):(l(),m(_(e),{key:0}))]),_:1})}}},C="modulepreload",d={},$="./",o=function(a,s){return!s||s.length===0?a():Promise.all(s.map(n=>{if(n=`${$}${n}`,n in d)return;d[n]=!0;const e=n.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const i=document.createElement("link");if(i.rel=e?"stylesheet":C,e||(i.as="script",i.crossOrigin=""),i.href=n,document.head.appendChild(i),e)return new Promise((v,h)=>{i.addEventListener("load",v),i.addEventListener("error",h)})})).then(()=>a())};let t;t=[{meta:{keepAlive:!1},path:"/",name:"def",redirect:"/login"},{meta:{keepAlive:!0},path:"/login",name:"login",component:()=>o(()=>import("./index.e982a23c.js"),["dist/index.e982a23c.js","dist/index.e4c8a14d.css","dist/vendor.b27d2840.js","dist/waternormals.ee32faf8.js","dist/temp4.f196eae2.js","dist/temp4.f0b8b646.css","dist/plugin-vue_export-helper.2100c508.js"])}];const w=[{meta:{keepAlive:!1},path:"/canvas/BG-1",name:"canvas",der:"canvas\u5236\u4F5C\u7684\u4E00\u4E9B\u56FE\u52A8\u6001\u6548\u679C\u56FE",component:()=>o(()=>import("./index.65353b52.js"),["dist/index.65353b52.js","dist/index.fabbe509.css","dist/plugin-vue_export-helper.2100c508.js","dist/vendor.b27d2840.js"])}],S=[{meta:{keepAlive:!1},path:"/leetCode",name:"leetCode",der:"\u529B\u6263\u5237\u9898\u7684\u4E00\u4E9B\u89E3\u9898\u6B65\u9AA4",component:()=>o(()=>import("./leeCode.7a6a5072.js"),["dist/leeCode.7a6a5072.js","dist/leeCode.e6e76aaf.css","dist/plugin-vue_export-helper.2100c508.js","dist/vendor.b27d2840.js"])}],G=[{meta:{keepAlive:!1},path:"/style/loading",name:"\u52A0\u8F7D\u6837\u5F0F",der:"css\u52A0\u8F7D\u56FE\u6807",component:()=>o(()=>import("./index.e1fc1a3c.js"),["dist/index.e1fc1a3c.js","dist/index.99f1d4fc.css","dist/plugin-vue_export-helper.2100c508.js","dist/vendor.b27d2840.js","dist/temp4.f196eae2.js","dist/temp4.f0b8b646.css"])},{meta:{keepAlive:!1},path:"/style/button",name:"\u6309\u94AE\u6837\u5F0F",der:"\u7EAFcss\u4E66\u5199\u7684\u4E00\u4E9B\u6309\u94AE\u6837\u5F0F",component:()=>o(()=>import("./index.add77357.js"),["dist/index.add77357.js","dist/index.d29dddd2.css","dist/plugin-vue_export-helper.2100c508.js","dist/vendor.b27d2840.js"])},{meta:{keepAlive:!1},path:"/style/font",name:"\u6570\u5B57\u6EDA\u52A8",der:"\u6570\u5B57\u6EDA\u52A8\u6548\u679C",component:()=>o(()=>import("./index.e473e1e0.js"),["dist/index.e473e1e0.js","dist/index.7e21fe85.css","dist/plugin-vue_export-helper.2100c508.js","dist/vendor.b27d2840.js"])}],N=[{meta:{keepAlive:!1},path:"/3D/univers",name:"3D\u6A21\u62DF",der:"3D\u7A7A\u95F4\u7684\u6A21\u62DF",component:()=>o(()=>import("./index.7a377ffa.js"),["dist/index.7a377ffa.js","dist/index.354b91af.css","dist/plugin-vue_export-helper.2100c508.js","dist/vendor.b27d2840.js"])}],W=[{meta:{keepAlive:!1},path:"/Three/univers",name:"\u8FF7\u4F60\u5B87\u5B99",der:"\u8FF7\u4F60\u5B87\u5B99Copy",component:()=>o(()=>import("./univers.166c6161.js"),["dist/univers.166c6161.js","dist/univers.17f6b157.css","dist/vendor.b27d2840.js","dist/TextGeometry.e8fa0c2b.js","dist/clearAll.7adc669e.js","dist/plugin-vue_export-helper.2100c508.js"])},{meta:{keepAlive:!1},path:"/Three/space",name:"\u7A7A\u95F4",der:"\u6D4B\u8BD5\u7528\u7684\u7A7A\u95F4\u7528\u4F8B",component:()=>o(()=>import("./space.92dbeacc.js"),["dist/space.92dbeacc.js","dist/space.c8b553ae.css","dist/clearAll.7adc669e.js","dist/plugin-vue_export-helper.2100c508.js","dist/vendor.b27d2840.js"])},{meta:{keepAlive:!1},path:"/Three/dna1",name:"DNA1",der:"DNA\u87BA\u65CB\u7ED3\u6784",component:()=>o(()=>import("./DNA1.7527c183.js"),["dist/DNA1.7527c183.js","dist/DNA1.47586d2e.css","dist/clearAll.7adc669e.js","dist/plugin-vue_export-helper.2100c508.js","dist/vendor.b27d2840.js"])},{meta:{keepAlive:!1},path:"/Three/moon",name:"\u6708\u4EAE",der:"\u6708\u4EAE\u8D34\u56FE\u5230\u7403\u5F62\u7269\u4F53\u4E0A",component:()=>o(()=>import("./Moon.596f513d.js"),["dist/Moon.596f513d.js","dist/Moon.dcf6e2d8.css","dist/clearAll.7adc669e.js","dist/plugin-vue_export-helper.2100c508.js","dist/vendor.b27d2840.js"])},{meta:{keepAlive:!1},path:"/Three/multMod",name:"\u591A\u573A\u666F\u6A21\u578B",der:"\u751F\u6210\u591A\u4E2A\u573A\u666F\u6A21\u578B",component:()=>o(()=>import("./multMod.4201e30e.js"),["dist/multMod.4201e30e.js","dist/multMod.b2284224.css","dist/clearAll.7adc669e.js","dist/plugin-vue_export-helper.2100c508.js","dist/vendor.b27d2840.js"])}],F=[{meta:{keepAlive:!1},path:"/css/card_1",name:"steam\u96C6\u6362\u5361\u6837\u5F0F",der:"steam\u96C6\u6362\u5361\u6837\u5F0F",component:()=>o(()=>import("./steamCard.a1b586c9.js"),["dist/steamCard.a1b586c9.js","dist/steamCard.2b084e95.css","dist/vendor.b27d2840.js","dist/plugin-vue_export-helper.2100c508.js"])},{meta:{keepAlive:!1},path:"/css/card_2",name:"\u5361\u7247\u6BDB\u73BB\u7483",der:"\u5361\u7247\u6BDB\u73BB\u7483\u6548\u679C",component:()=>o(()=>import("./glass.a63a4b65.js"),["dist/glass.a63a4b65.js","dist/glass.6f6f0bb9.css","dist/plugin-vue_export-helper.2100c508.js","dist/vendor.b27d2840.js"])},{meta:{keepAlive:!1},path:"/css/card_3",name:"3Dtranslate",der:"\u5C55\u793A\u5361\u7247\u80CC\u9762",component:()=>o(()=>import("./3Dtranslate.d985f87f.js"),["dist/3Dtranslate.d985f87f.js","dist/3Dtranslate.354b9f30.css","dist/plugin-vue_export-helper.2100c508.js","dist/vendor.b27d2840.js"])}],j=[{meta:{keepAlive:!1},path:"/js/Granulation",name:"Granulation",der:"\u56FE\u7247\u7C92\u5B50\u5316",component:()=>o(()=>import("./Granulation.e9477936.js"),["dist/Granulation.e9477936.js","dist/Granulation.136b2886.css","dist/vendor.b27d2840.js","dist/plugin-vue_export-helper.2100c508.js"])},{meta:{keepAlive:!1},path:"/js/WebGL-Fluid-Simulation",name:"WebGL-Fluid-Simulation",der:"WebGL-Fluid-Simulation\u6D41\u4F53\u5E93",component:()=>o(()=>import("./WebGL-Fluid-Simulation.0c0c9b39.js"),["dist/WebGL-Fluid-Simulation.0c0c9b39.js","dist/WebGL-Fluid-Simulation.31067ac8.css","dist/vendor.b27d2840.js","dist/tool.104ff763.js","dist/plugin-vue_export-helper.2100c508.js"])}],B=[{meta:{keepAlive:!1},path:"/welcome",name:"welcome",der:"ThreeJs\u6587\u672C\u6A21\u578B",component:()=>o(()=>import("./welcome.c70f23c3.js"),["dist/welcome.c70f23c3.js","dist/welcome.8fc2ba7c.css","dist/vendor.b27d2840.js","dist/tool.104ff763.js","dist/TextGeometry.e8fa0c2b.js","dist/waternormals.ee32faf8.js","dist/plugin-vue_export-helper.2100c508.js"])}],H=[{path:"/:pathMatch(.*)",name:"404",der:"",component:()=>o(()=>import("./index.e982a23c.js"),["dist/index.e982a23c.js","dist/index.e4c8a14d.css","dist/vendor.b27d2840.js","dist/waternormals.ee32faf8.js","dist/temp4.f196eae2.js","dist/temp4.f0b8b646.css","dist/plugin-vue_export-helper.2100c508.js"])}];t=t.concat(w);t=t.concat(S);t=t.concat(G);t=t.concat(N);t=t.concat(W);t=t.concat(F);t=t.concat(j);t=t.concat(B);t=t.concat(H);const f=L({history:k(),routes:t});f.beforeEach(async(p,a,s)=>{s()});const c=D(b),K=O();c.config.globalProperties.$three=T;c.config.globalProperties.$stats=g;c.config.globalProperties.$OrbitControls=y;c.config.globalProperties.$d3=R;c.config.globalProperties.$echarts=I;c.use(f);c.use(K);c.mount("#app");export{t as r};