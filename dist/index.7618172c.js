import{r as p,o as j,c as m,a as O,b,d as v,e as C,f as E,T as S,S as h,O as M,g as G,h as B}from"./vendor.67723c31.js";const J=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))n(A);new MutationObserver(A=>{for(const r of A)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function l(A){const r={};return A.integrity&&(r.integrity=A.integrity),A.referrerpolicy&&(r.referrerPolicy=A.referrerpolicy),A.crossorigin==="use-credentials"?r.credentials="include":A.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(A){if(A.ep)return;A.ep=!0;const r=l(A);fetch(A.href,r)}};J();const Y={setup(o){return(i,l)=>{const n=p("router-view");return j(),m(n)}}},P="modulepreload",g={},y="./",t=function(i,l){return!l||l.length===0?i():Promise.all(l.map(n=>{if(n=`${y}${n}`,n in g)return;g[n]=!0;const A=n.endsWith(".css"),r=A?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const a=document.createElement("link");if(a.rel=A?"stylesheet":P,A||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),A)return new Promise((I,f)=>{a.addEventListener("load",I),a.addEventListener("error",f)})})).then(()=>i())};var z="./dist/01.8a7c92b9.png",T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:z}),H="./dist/02.b53ff840.png",k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:H}),x="./dist/03.a68dd6e5.png",D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:x}),L="./dist/04.e0921f41.png",Q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:L}),w="data:image/png;base64,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ACCJYwAASOIYAACSOAYAgCSOAQAgiWMAAEjiGAAAkjgGAIAkjgEAIIljAABI4hgAAJI4BgCAJI4BACCJYwAASOIYAACSOAYAgCSOAQAgiWMAAEjiGAAAkjgGAIAkjgEAIIljAABI4hgAAJI4BgCAJI4BACCJYwAASOIYAACSOAYAgCSOAQAgiWMAAEjiGAAAkjgGAIAkjgEAIIljAABI4hgAAJI4BgCAJI4BACCJYwAASOIYAACSOAYAgCSOAQAgiWMAAEjiGAAAkjgGAIAkjgEAIIljAABI4hgAAJI4BgCAJI4BACCJYwAASOIYAACSOAYAgCSOAQAgiWMAAEjiGAAAkjgGAIAkjgEAIIljAABI4hgAAJI4BgCAJI4BACCJYwAASOIYAACSOAYAgCSOAQAgiWMAAEjiGAAAkjgGAIAkjgEAIIljAABI4hgAAJI4BgCAJI4BACCJYwAASOIYAACSOAYAgCSOAQAgiWMAAEjiGAAAkjgGAIAkjgEAIIljAABI4hgAAJI4BgCAJI4BACCJYwAASOIYAACSOAYAgCSOAQAgiWMAAEjiGAAA6pbE/wHJJehwWP1tkgAAAABJRU5ErkJggg==",X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:w}),V="./dist/06.74daa9b5.png",R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:V}),W="./dist/07.d54fb3d0.png",N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:W}),F="./dist/08.30108c33.png",U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:F}),q="./dist/09.cf40bf2f.png",K=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:q}),Z="./dist/10.01039774.png",$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Z}),AA="./dist/11.5487f1df.png",eA=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:AA}),tA="./dist/12.47d7003d.png",oA=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:tA}),rA="./dist/13.48ec3254.png",nA=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:rA}),aA="./dist/14.424c6199.png",iA=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:aA}),lA="./dist/15.f99df4cb.png",_A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:lA}),cA="./dist/16.ce018f1f.png",gA=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:cA});const c={},d={"./routerIMG/01.png":T,"./routerIMG/02.png":k,"./routerIMG/03.png":D,"./routerIMG/04.png":Q,"./routerIMG/05.png":X,"./routerIMG/06.png":R,"./routerIMG/07.png":N,"./routerIMG/08.png":U,"./routerIMG/09.png":K,"./routerIMG/10.png":$,"./routerIMG/11.png":eA,"./routerIMG/12.png":oA,"./routerIMG/13.png":nA,"./routerIMG/14.png":iA,"./routerIMG/15.png":_A,"./routerIMG/16.png":gA};for(const o in d)c[o.replace("./routerIMG","").replace(".png","").replace("/","img")]=d[o].default;let e;e=[{path:"/",name:"def",redirect:"/login"},{path:"/login",name:"login",component:()=>t(()=>import("./index.0cfecf22.js"),["dist/index.0cfecf22.js","dist/index.66ad88d8.css","dist/vendor.67723c31.js","dist/temp4.cdff7c25.js","dist/temp4.f0b8b646.css","dist/plugin-vue_export-helper.2100c508.js"])}];const dA=[{path:"/canvas/BG-1",name:"canvas",der:"canvas\u5236\u4F5C\u7684\u4E00\u4E9B\u56FE\u52A8\u6001\u6548\u679C\u56FE",component:()=>t(()=>import("./index.63fdf342.js"),["dist/index.63fdf342.js","dist/index.fabbe509.css","dist/plugin-vue_export-helper.2100c508.js","dist/vendor.67723c31.js"])}],uA=[{path:"/leetCode",name:"leetCode",der:"\u529B\u6263\u5237\u9898\u7684\u4E00\u4E9B\u89E3\u9898\u6B65\u9AA4",component:()=>t(()=>import("./leeCode.f7eae7a2.js"),["dist/leeCode.f7eae7a2.js","dist/leeCode.a8e044f0.css","dist/plugin-vue_export-helper.2100c508.js","dist/vendor.67723c31.js"])}],sA=[{path:"/style/loading",name:"\u52A0\u8F7D\u6837\u5F0F",img:c.img03,der:"css\u52A0\u8F7D\u56FE\u6807",component:()=>t(()=>import("./index.4fec33af.js"),["dist/index.4fec33af.js","dist/index.99f1d4fc.css","dist/plugin-vue_export-helper.2100c508.js","dist/vendor.67723c31.js","dist/temp4.cdff7c25.js","dist/temp4.f0b8b646.css"])},{path:"/style/button",name:"\u6309\u94AE\u6837\u5F0F",der:"\u7EAFcss\u4E66\u5199\u7684\u4E00\u4E9B\u6309\u94AE\u6837\u5F0F",component:()=>t(()=>import("./index.ea9a3e07.js"),["dist/index.ea9a3e07.js","dist/index.d29dddd2.css","dist/plugin-vue_export-helper.2100c508.js","dist/vendor.67723c31.js"])},{path:"/style/font",name:"\u6570\u5B57\u6EDA\u52A8",der:"\u6570\u5B57\u6EDA\u52A8\u6548\u679C",component:()=>t(()=>import("./index.ded25ef9.js"),["dist/index.ded25ef9.js","dist/index.7e21fe85.css","dist/plugin-vue_export-helper.2100c508.js","dist/vendor.67723c31.js"])}],IA=[{path:"/3D/univers",name:"3D\u6A21\u62DF",der:"3D\u7A7A\u95F4\u7684\u6A21\u62DF",component:()=>t(()=>import("./index.6920642c.js"),["dist/index.6920642c.js","dist/index.354b91af.css","dist/plugin-vue_export-helper.2100c508.js","dist/vendor.67723c31.js"])}],fA=[{path:"/Three/univers",name:"\u8FF7\u4F60\u5B87\u5B99",der:"\u8FF7\u4F60\u5B87\u5B99Copy",component:()=>t(()=>import("./univers.1897bbba.js"),["dist/univers.1897bbba.js","dist/univers.4d576afe.css","dist/vendor.67723c31.js","dist/clearAll.7adc669e.js","dist/plugin-vue_export-helper.2100c508.js"])},{path:"/Three/space",name:"\u7A7A\u95F4",der:"\u6D4B\u8BD5\u7528\u7684\u7A7A\u95F4\u7528\u4F8B",component:()=>t(()=>import("./space.e14918f8.js"),["dist/space.e14918f8.js","dist/space.f01d7933.css","dist/clearAll.7adc669e.js","dist/plugin-vue_export-helper.2100c508.js","dist/vendor.67723c31.js"])},{path:"/Three/dna1",name:"DNA1",der:"DNA\u87BA\u65CB\u7ED3\u6784",component:()=>t(()=>import("./DNA1.f5838af9.js"),["dist/DNA1.f5838af9.js","dist/DNA1.47586d2e.css","dist/clearAll.7adc669e.js","dist/plugin-vue_export-helper.2100c508.js","dist/vendor.67723c31.js"])},{path:"/Three/moon",name:"\u6708\u4EAE",der:"\u6708\u4EAE\u8D34\u56FE\u5230\u7403\u5F62\u7269\u4F53\u4E0A",component:()=>t(()=>import("./Moon.81fc0f75.js"),["dist/Moon.81fc0f75.js","dist/Moon.dcf6e2d8.css","dist/clearAll.7adc669e.js","dist/plugin-vue_export-helper.2100c508.js","dist/vendor.67723c31.js"])},{path:"/Three/multMod",name:"\u591A\u573A\u666F\u6A21\u578B",der:"\u751F\u6210\u591A\u4E2A\u573A\u666F\u6A21\u578B",component:()=>t(()=>import("./multMod.0571eb69.js"),["dist/multMod.0571eb69.js","dist/multMod.b2284224.css","dist/clearAll.7adc669e.js","dist/plugin-vue_export-helper.2100c508.js","dist/vendor.67723c31.js"])}],pA=[{path:"/css/card_1",name:"steam\u96C6\u6362\u5361\u6837\u5F0F",der:"steam\u96C6\u6362\u5361\u6837\u5F0F",component:()=>t(()=>import("./steamCard.57af3bc8.js"),["dist/steamCard.57af3bc8.js","dist/steamCard.2b084e95.css","dist/vendor.67723c31.js","dist/plugin-vue_export-helper.2100c508.js"])},{path:"/css/card_2",name:"\u5361\u7247\u6BDB\u73BB\u7483",der:"\u5361\u7247\u6BDB\u73BB\u7483\u6548\u679C",component:()=>t(()=>import("./glass.f81f37e2.js"),["dist/glass.f81f37e2.js","dist/glass.6f6f0bb9.css","dist/plugin-vue_export-helper.2100c508.js","dist/vendor.67723c31.js"])},{path:"/css/card_3",name:"3Dtranslate",der:"\u5C55\u793A\u5361\u7247\u80CC\u9762",component:()=>t(()=>import("./3Dtranslate.fdc9f50c.js"),["dist/3Dtranslate.fdc9f50c.js","dist/3Dtranslate.354b9f30.css","dist/plugin-vue_export-helper.2100c508.js","dist/vendor.67723c31.js"])}],jA=[{path:"/js/Granulation",name:"Granulation",der:"\u56FE\u7247\u7C92\u5B50\u5316",component:()=>t(()=>import("./Granulation.e42d0557.js"),["dist/Granulation.e42d0557.js","dist/Granulation.136b2886.css","dist/vendor.67723c31.js","dist/plugin-vue_export-helper.2100c508.js"])},{path:"/js/WebGL-Fluid-Simulation",name:"WebGL-Fluid-Simulation",der:"WebGL-Fluid-Simulation",component:()=>t(()=>import("./WebGL-Fluid-Simulation.da2ec788.js"),["dist/WebGL-Fluid-Simulation.da2ec788.js","dist/WebGL-Fluid-Simulation.ec18affc.css","dist/vendor.67723c31.js","dist/plugin-vue_export-helper.2100c508.js"])}],mA=[{path:"/:pathMatch(.*)",name:"404",der:"",component:()=>t(()=>import("./multMod.0571eb69.js"),["dist/multMod.0571eb69.js","dist/multMod.b2284224.css","dist/clearAll.7adc669e.js","dist/plugin-vue_export-helper.2100c508.js","dist/vendor.67723c31.js"])}];e=e.concat(dA);e=e.concat(uA);e=e.concat(sA);e=e.concat(IA);e=e.concat(fA);e=e.concat(pA);e=e.concat(jA);e=e.concat(mA);for(let o=0;o<Object.keys(c).length;o++)e[o+2].img=c[Object.keys(c)[o]];const s=O({history:b(),routes:e}),OA=v("user",{state:()=>({number:1}),actions:{increment(o){this.number++}}});var bA=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:OA});const vA={},u={"./modules/user.js":bA};for(const o in u)vA[o.replace("./modules/","").replace(".js","")]=u[o].default;s.beforeEach(async(o,i,l)=>{l()});const _=C(Y),CA=E();_.config.globalProperties.$three=S;_.config.globalProperties.$stats=h;_.config.globalProperties.$OrbitControls=M;_.config.globalProperties.$d3=G;_.config.globalProperties.$echarts=B;_.use(s);_.use(CA);_.mount("#app");export{e as r,OA as u};
