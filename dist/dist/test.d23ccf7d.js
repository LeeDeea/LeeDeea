import{_ as s}from"./index.48ad47e4.js";import{o as d,b as o,p as a,j as c,e,h as t}from"./vendor.674df8de.js";function l(i){console.log(123)}const u=Object.assign(l,{install(i,n={}){i.component(n.componentName||l.name,l)}});var g="./dist/camera.8f0cceef.png",p="./dist/geomertry.4df9fb1b.png",v="./dist/light.b9faef7f.png",h="./dist/material.ec9445f6.png",f="./dist/mod.62188897.png";const m={name:"list",setup(){return{}},data(){return{router:[]}},mounted(){console.log(u)}},r=i=>(a("data-v-884492b0"),i=i(),c(),i),_={class:"content"},w=r(()=>e("div",{class:"tip",id:"content"},[e("div",null,"// e.target \u662F\u4F60\u5F53\u524D\u70B9\u51FB\u7684\u5143\u7D20"),e("br"),e("div",null,"// e.currentTarget \u662F\u4F60\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u5143\u7D20"),e("br"),e("div",null,"#\u83B7\u5F97\u70B9\u51FB\u5143\u7D20\u7684\u524D\u4E00\u4E2A\u5143\u7D20"),e("div",null,"e.currentTarget.previousElementSibling.innerHTML"),e("br"),e("div",null,"#\u83B7\u5F97\u70B9\u51FB\u5143\u7D20\u7684\u7B2C\u4E00\u4E2A\u5B50\u5143\u7D20"),e("div",null,"e.currentTarget.firstElementChild #"),e("br"),e("div",null,"\u83B7\u5F97\u70B9\u51FB\u5143\u7D20\u7684\u4E0B\u4E00\u4E2A\u5143\u7D20"),e("div",null,"e.currentTarget.nextElementSibling #"),e("br"),e("div",null,"\u83B7\u5F97\u70B9\u51FB\u5143\u7D20\u4E2Did\u4E3Astring\u7684\u5143\u7D20"),e("div",null,'e.currentTarget.getElementById("string") #'),e("br"),e("div",null,"\u83B7\u5F97\u70B9\u51FB\u5143\u7D20\u7684string\u5C5E\u6027"),e("div",null,"e.currentTarget.getAttributeNode('string') #"),e("br"),e("div",null,"\u83B7\u5F97\u70B9\u51FB\u5143\u7D20\u7684\u7236\u7EA7\u5143\u7D20"),e("div",null,"e.currentTarget.parentElement #"),e("br"),e("div",null,"\u83B7\u5F97\u70B9\u51FB\u5143\u7D20\u7684\u524D\u4E00\u4E2A\u5143\u7D20\u7684\u7B2C\u4E00\u4E2A\u5B50\u5143\u7D20\u7684HTML\u503C"),e("div",null," e.currentTarget.previousElementSibling.firstElementChild.innerHTML } "),e("br"),e("div",null,"\u4E00\uFF0Cwindow\u7A97\u53E3\u7684\u5404\u79CD\u8DDD\u79BB"),e("div",null,"screen.width/height\uFF1A \u5C4F\u5E55\u7684\u5BBD\u5EA6/\u9AD8\u5EA6"),e("div",null,"window.innerWidth/innerHeight \uFF1A \u7A97\u53E3\u663E\u793A\u533A\u7684\u5BBD\u5EA6/\u9AD8\u5EA6"),e("div",null,"window.outerWidth/outerHeight \uFF1A \u7A97\u53E3\u7684\u5916\u90E8\u5BBD\u5EA6/\u9AD8\u5EA6"),e("div",null," window.pageXOffset/pageYOffset \uFF1A \u5F53\u524D\u9875\u9762\u76F8\u5BF9\u4E8E\u7A97\u53E3\u663E\u793A\u533A\u5DE6\u4E0A\u89D2\u7684 X \u4F4D\u7F6E / Y \u4F4D\u7F6E "),e("div",null," window.screenLeft/screenTop \uFF1A \u5F53\u524D\u7A97\u53E3\u7684\u5DE6\u4E0A\u89D2\u5728\u5C4F\u5E55\u4E0A\u7684\u7684 x \u5750\u6807\u548C y \u5750\u6807\uFF1B Firefox\u652F\u6301screenX\u548CscreenY\u3002 "),e("div",null,"\u4E8C\uFF0C\u5143\u7D20\u7684\u5404\u79CD\u8DDD\u79BB \uFF08\u5E38\u7528\uFF09"),e("div",null,"1\uFF0Cel.style.width / height / left / right\uFF1A"),e("div",null," \u83B7\u53D6\u5143\u7D20\u5185\u8054\u6837\u5F0F\u7684\u5BBD\u5EA6/\u9AD8\u5EA6/left\u503C/right\u503C\u3002\u5982\u679C\u5143\u7D20\u4E0A\u6CA1\u5199\u5185\u8054\u6837\u5F0F\u5219\u8FD4\u56DE\u7A7A\u5B57\u7B26\u4E32\uFF08\u4E0D\u5305\u62ECpadding\u3001border\u548Cmargin\uFF0C\u5E76\u4E14\u8FD4\u56DE\u7684\u503C\u4F1A\u5E26\u5355\u4F4D\uFF09 "),e("div",null," 2\uFF0Cwindow.getComputedStyle().width / height / left / right\uFF1A\u83B7\u53D6\u5143\u7D20\u6700\u7EC8\u7ECF\u8FC7\u6D4F\u89C8\u5668\u8BA1\u7B97\u51FA\u6765\u7684width height left right\u3002\uFF08\u4E0D\u5305\u62ECpadding\u3001border\u548Cmargin\uFF0C\u5E76\u4E14\u8FD4\u56DE\u7684\u503C\u4F1A\u5E26\u5355\u4F4D\uFF09 "),e("div",null," 3\uFF0Cel.offsetWidth / offsetHeight \uFF1A \u83B7\u53D6\u5143\u7D20\u7684\u5BBD\u5EA6/\u9AD8\u5EA6\u3002\uFF08\u5305\u62ECpadding\u3001border\uFF09 \u3000\u3000 "),e("div",null," 4\uFF0Cel.offsetTop / offsetLeft\uFF1A \u83B7\u53D6\u5143\u7D20\u8DDD\u79BB\u6700\u8FD1\u7684\u91C7\u7528\u5B9A\u4F4D\u7684\u7956\u5148\u5143\u7D20\u7684 top/Left\uFF0C\u5982\u679C\u7956\u5148\u5143\u7D20\u6CA1\u6709\u91C7\u7528\u5B9A\u4F4D\u7684\uFF0C\u5219\u8BA1\u7B97\u5230body\u7684\u8DDD\u79BB\u3002 \u3000\u3000 "),e("div",null," 5\uFF0Cel.clientWidth / clientHeight / clientLeft / clientTop \uFF1A \u83B7\u53D6\u5F53\u524D\u5143\u7D20\u7684\u5185\u90E8\u5BBD\u5EA6/\u5185\u90E8\u9AD8\u5EA6/\u5DE6\u8FB9\u6846\u5BBD\u5EA6/\u4E0A\u8FB9\u6846\u5BBD\u5EA6 \uFF08\u5305\u542Bpadding\uFF0C\u5982\u679C\u6709\u6EDA\u52A8\u6761\uFF0C\u5219\u8981\u53BB\u6389\u6EDA\u52A8\u6761\u7684\u5BBD\u5EA6\uFF09 \u3000\u3000 "),e("div",null," 6\uFF0Cel.scrollWidth/scrollHeight \uFF1A \u5982\u679C\u6CA1\u6709\u6EDA\u52A8\u6761\uFF0C\u5219\u548CclientWidth/height\u7684\u503C\u4E00\u6837\uFF0C\u5982\u679C\u6709\u6EDA\u52A8\u6761\uFF0C\u5219\u4E3A\u5185\u90E8\u5143\u7D20\u7684\u603B\u9AD8\u5EA6/\u5BBD\u5EA6\uFF08\u5305\u542Bpadding\uFF0C\u6709\u6EDA\u52A8\u6761\u5219\u53BB\u6389\u6EDA\u52A8\u6761\u7684\u5BBD\u5EA6\uFF09 \u3000\u3000 \u3000\u3000 "),e("div",null," 7\uFF0Cel.scrollTop/scrollLeft \uFF1A \u6B64\u5C5E\u6027\u4E3A\u53EF\u8BFB\u5199\u5C5E\u6027\uFF0C\u4E3A\u5143\u7D20\u79BB\u7236\u5143\u7D20\u7684\u6EDA\u52A8\u9AD8\u5EA6\u548C\u6EDA\u52A8\u5DE6\u8FB9\u8DDD\u3002\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u5F53\u524D\u5143\u7D20\u7684\u6EDA\u52A8\u9AD8\u5EA6\u3002 \uFF08\u8FD4\u56DE\u7684\u503C\u4E0D\u5E26\u5355\u4F4D\uFF09 "),e("div",null,"\u4E09\uFF1A \u89E6\u70B9\u7684\u8DDD\u79BB"),e("div",null,"\uFF08\u8FD9\u91CC\u7684\u89E6\u70B9\u5C31\u662F\u4E8B\u4EF6\u4E2Devent\u5BF9\u8C61\u6240\u5305\u542B\u7684\u5404\u79CD\u4F4D\u7F6E\u4FE1\u606F\u3002\uFF09"),e("div",null," pageX pageY \uFF1A \u8FD9\u4E24\u4E2A\u662F\u8DDD\u79BB\u672C\u9875\u9762\u5DE6\u90E8\u548C \u9876\u90E8\u7684\u8DDD\u79BB\uFF0C \u5373\u4F7F \u9875\u9762\u6709\u6EDA\u52A8\uFF0C \u4E5F\u5305\u62EC\u6EDA\u52A8\u7684\u8DDD\u79BB \u3000\u3000 "),e("div",null," clientX\uFF0C clientY \u8FD9\u4E5F\u662F\u8DDD\u79BB\u9875\u9762\u5DE6\u90E8\u548C\u9876\u90E8\u7684\u8DDD\u79BB\uFF0C \u5982\u679C\u9875\u9762\u6CA1\u6709\u6EDA\u52A8\u6761\uFF0C \u5B83\u4FE9\u7684\u503C\u548CpageX pageY\u76F8\u540C\uFF0C \u5982\u679C\u6709\u6EDA\u52A8\u6761 \u4E0D\u5305\u542B\u6EDA\u52A8\u7684\u8DDD\u79BB\uFF01 "),e("div",null,"offsetX offsetY \uFF1A \u8DDD\u79BB\u5F53\u524D\u5143\u7D20\u7684\u5DE6\u90E8\u548C\u9876\u90E8\u7684\u8DDD\u79BB"),e("div",null,"screenX screenY \uFF1A \u83B7\u53D6\u5F53\u524D\u89E6\u70B9\u5230\u5F53\u524D\u5C4F\u5E55\u7684x\u5750\u6807\u548Cy\u5750\u6807\u3002"),e("div",null," layerX layerY \uFF1A \u83B7\u53D6\u5F53\u524D\u89E6\u70B9\u5230\u6700\u8FD1\u7684\u91C7\u7528\u5B9A\u4F4D\u7684\u7956\u5148\u5143\u7D20\u7684 x\u548Cy\u5750\u6807\u3002\u5982\u679C\u7956\u5148\u5143\u7D20\u6CA1\u6709\u5B9A\u4F4D\u5143\u7D20\uFF0C\u5219\u4EE5body\u5143\u7D20\u4E3A\u57FA\u51C6\u3002 "),e("div",null,"x y \uFF1A \u8FD4\u56DE\u5F53\u524D\u89E6\u70B9\u76F8\u5BF9\u4E8E\u53EF\u89C6\u533A\u57DF\u7684 x\u5750\u6807\u548Cy\u5750\u6807\u3002"),e("div",null,"offsetX / offsetY\uFF1A\u3000W3C- IE+ Firefox- Opera+ Safari+ chrome+"),e("div",null,"x / y\uFF1A\u3000\u3000\u3000\u3000\u3000\u3000 W3C- IE+ Firefox- Opera+ Safari+ chrome+"),e("div",null,"layerX/layerY\uFF1A\u3000\u3000 W3C- IE- Firefox+ Opera- Safari+ chrome+"),e("div",null,"pageX/pageY\uFF1A\u3000\u3000 W3C- IE- Firefox+ Opera+ Safari+ chrome+"),e("div",null,"clientX/clientY\uFF1A\u3000\u3000W3C+ IE+ Firefox+ Opera+ Safari+ chrome+"),e("div",null,"screenX/screenY\uFF1A W3C+ IE+ Firefox+ Opera+ Safari+ chrome+"),e("br")],-1)),b=r(()=>e("div",{class:"css"},[e("div",null,[t(" codepen \u5730\u5740\uFF1A"),e("a",{href:"https://link.juejin.cn/?target=https%3A%2F%2Fcodepen.io"},"codepen.io"),t(" \u5404\u8DEF\u5927\u795E\u5728\u4E0A\u9762\u53D1\u5E03\u81EA\u5DF1\u7684cs\u7279\u6548\u7F51\u7AD9\uFF0C\u53EF\u4EE5\u518D\u4E0A\u9762\u627E\u5230\u81EA\u5DF1\u611F\u5174\u8DA3\u7684css\u7F51\u7AD9\uFF0C\u548C\u4E00\u4E9B\u5E03\u5C40\u4E0A\u9762\u7684\u9700\u6C42 ")]),e("div",null,[t(" awwwards \u5730\u5740\uFF1A"),e("a",{href:"https://link.juejin.cn/?target=https%3A%2F%2Fwww.awwwards.com"},"www.awwwards.com"),t(" \u4E00\u4E2A\u6BD4\u8F83\u6743\u5A01\u7684css\u8BC4\u9009\uFF0C\u91CC\u9762\u6709\u5404\u79CDcss\u7684\u8BBE\u8BA1\uFF0C\u53EF\u4EE5\u518D\u4E0A\u9762\u627E\u5230css\u7075\u611F ")]),e("div",null,[t(" css inspiration \u5730\u5740\uFF1A"),e("a",{href:"https://link.juejin.cn/?target=https%3A%2F%2Fchokcoco.github.io%2FCSS-Inspiration"},"chokcoco.github.io/CSS-Inspira\u2026"),t(" \u56FD\u4EBA\u7F16\u5199\u7684css\u6587\u6863\uFF0C\u53EF\u4EE5\u518D\u4E0A\u9762\u627E\u5230\u81EA\u5DF1\u9700\u8981\u7684css\u6837\u5F0F\uFF0C\u52A8\u753B\uFF0C\u9634\u5F71\uFF0C\u5E03\u5C40.... , \u4E3B\u8981\u7684\u662F\u8FD9\u662F\u56FD\u4EBA\u5F00\u53D1\u975E\u5E38\u53CB\u597D ")]),e("div",null,[t(" animista \u5730\u5740\uFF1A"),e("a",{href:"https://link.juejin.cn/?target=https%3A%2F%2Fanimista.net"},"animista.net"),t(" css\u52A8\u753B\u7279\u6548\u5728\u7EBF\u7F16\u8F91\u7F51\u7AD9\uFF0C\u7F16\u8F91\u81EA\u5DF1\u9700\u8981\u7684\u52A8\u753B\uFF0C\u81EA\u52A8\u751F\u6210\u4EE3\u7801\uFF0C\u517C\u5BB9\u90FD\u5904\u7406\u597D\u7684\uFF0C\u521A\u9700\u554A ")]),e("div",null," css layout \u5730\u5740\uFF1Acsslayout.io/ css\u7EC4\u4EF6\u5E93\uFF0C\u6309\u94AE \uFF0C\u6ED1\u52A8\u6309\u94AE\uFF0C\u5404\u79CD\u5706\u89D2\uFF0C\u7B49\u7B49\u5F88\u5168\u9762\u7684\u4E00\u4E2Acss\u7EC4\u4EF6 "),e("div",{class:"imgs"},[e("img",{src:g,alt:""}),e("img",{src:p,alt:""}),e("img",{src:v,alt:""}),e("img",{src:h,alt:""}),e("img",{src:f,alt:""})]),t(" git: "),e("div",null,"\u521B\u5EFA\u5206\u652F\uFF1Agit checkout -b '\u5206\u652F\u540D'"),e("div",null,"\u521B\u5EFA\u542B\u8FDC\u7A0B\u4EE3\u7801\u7684\u5206\u652F\uFF1Agit checkout -b '\u5206\u652F\u540D' '\u8FDC\u7A0B\u540D'"),e("div",null,"\u5220\u9664\u5206\u652F\uFF1Agit branch -d '\u5206\u652F\u540D'"),e("div",null,"\u56DE\u9000\u672C\u5730\u4FEE\u6539\uFF1Agit reset --hard"),e("div",null,"\u4ECE\u5176\u4ED6\u5206\u652F\u83B7\u53D6\u6587\u4EF6\uFF1Agit checkout '\u76EE\u6807\u5206\u652F' -- '\u76EE\u6807\u6587\u4EF6\u5939'"),e("div",null,"\u5408\u5E76\u76EE\u6807\u5206\u652F\u4EE3\u7801\u5230\u672C\u5206\u652F\uFF1Agit merge '\u76EE\u6807\u5206\u652F'")],-1)),y=[w,b];function x(i,n,S,T,F,E){return d(),o("div",_,y)}var I=s(m,[["render",x],["__scopeId","data-v-884492b0"]]);export{I as default};
