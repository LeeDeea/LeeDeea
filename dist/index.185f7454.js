import{_ as v}from"./plugin-vue_export-helper.2100c508.js";import{o as p,u,A as g,D as m,v as n,N as C,Q as F,r as h,G as $}from"./vendor.56d77867.js";const N={},A=a=>(g("data-v-5d377c77"),a=a(),m(),a),V={class:"loadingbox"},L=A(()=>n("div",{class:"loading"},[n("div"),n("div"),n("div"),n("div")],-1)),O=[L];function q(a,t,c,r,i,_){return p(),u("div",V,O)}var D=v(N,[["render",q],["__scopeId","data-v-5d377c77"]]);const Q={},T={class:"content"},U=C('<div class="container" data-v-07c864ed><div class="thing" data-v-07c864ed></div><div class="thing" data-v-07c864ed></div><div class="thing" data-v-07c864ed></div><div class="thing" data-v-07c864ed></div><div class="thing" data-v-07c864ed></div><div class="thing" data-v-07c864ed></div><div class="thing" data-v-07c864ed></div><div class="thing" data-v-07c864ed></div><div class="thing" data-v-07c864ed></div><div class="thing" data-v-07c864ed></div></div>',1),W=[U];function j(a,t,c,r,i,_){return p(),u("div",T,W)}var z=v(Q,[["render",j],["__scopeId","data-v-07c864ed"]]);const H={data(){return{timer:null}},methods:{init(){let a=document.getElementById("loading"),t=a.getContext("2d"),c=a.width=50,r=a.height=50,i=[],_=20,b=this,e={x:c/2,y:r/2,radius:80,speed:2,rotation:0,angleStart:270,angleEnd:90,hue:220,thickness:10,blur:25},l=function(d,s){return~~(Math.random()*(s-d+1)+d)},o=function(d){return d*(Math.PI/180)},x=function(){e.rotation<360?e.rotation+=e.speed:e.rotation=0},y=function(){t.save(),t.translate(e.x,e.y),t.rotate(o(e.rotation)),t.scale(.25,.25),t.beginPath(),t.arc(0,0,e.radius,o(e.angleStart),o(e.angleEnd),!0),t.lineWidth=e.thickness,t.strokeStyle=S,t.stroke(),t.restore()},w=function(){t.save(),t.translate(e.x,e.y),t.rotate(o(e.rotation)),t.scale(.25,.25),t.beginPath(),t.arc(0,0,e.radius+e.thickness/2,o(e.angleStart),o(e.angleEnd),!0),t.strokeStyle=f,t.stroke(),t.restore()},P=function(){t.save(),t.translate(e.x,e.y),t.rotate(o(e.rotation+e.angleStart-e.angleEnd)),t.scale(.25,.25),t.beginPath(),t.arc(0,e.radius,30,0,Math.PI*2),t.closePath();let d=t.createRadialGradient(0,e.radius,10,0,e.radius,35);d.addColorStop(0,"hsla(330, 50%, 50%, .35)"),d.addColorStop(1,"hsla(330, 50%, 50%, 0)"),t.fillStyle=d,t.fill(),t.restore()},k=function(){t.save(),t.translate(e.x,e.y),t.rotate(o(e.rotation+e.angleStart-e.angleEnd)),t.scale(.25,.25),t.beginPath(),t.arc(0,e.radius,5,0,Math.PI*2),t.closePath();let d=t.createRadialGradient(0,e.radius,10,0,e.radius,35);d.addColorStop(0,"hsla(30, 100%, 50%, .5)"),d.addColorStop(1,"hsla(30, 100%, 50%, 0)"),t.fillStyle=d,t.fill(),t.restore()},E=function(){i.length<_&&i.push({x:e.x+e.radius/4*Math.cos(o(e.rotation-85))+(l(0,e.thickness/2*2)-e.thickness/2),y:e.y+e.radius/4*Math.sin(o(e.rotation-85))+(l(0,e.thickness/2*2)-e.thickness/2),vx:(l(0,100)-50)/1e3,vy:(l(0,100)-50)/1e3,radius:l(1,4)/2,alpha:l(10,20)/100})},M=function(){let d=i.length;for(;d--;){let s=i[d];s.vx+=(l(0,100)-50)/750,s.vy+=(l(0,100)-50)/750,s.x+=s.vx,s.y+=s.vy,s.alpha-=.01,s.alpha<.02&&i.splice(d,1)}},B=function(){let d=i.length;for(;d--;){let s=i[d];t.beginPath(),t.fillRect(s.x,s.y,s.radius,s.radius),t.closePath(),t.fillStyle="hsla(0, 0%, 100%, "+s.alpha+")"}},G=function(){t.globalCompositeOperation="destination-out",t.fillStyle="rgba(0, 0, 0, .1)",t.fillRect(0,0,c,r),t.globalCompositeOperation="lighter"},S=t.createLinearGradient(0,-e.radius,0,e.radius),f=t.createLinearGradient(0,-e.radius,0,e.radius);S.addColorStop(0,"hsla("+e.hue+", 60%, 50%, .25)"),S.addColorStop(1,"hsla("+e.hue+", 60%, 50%, 0)"),f.addColorStop(0,"hsla("+e.hue+", 100%, 50%, 0)"),f.addColorStop(.1,"hsla("+e.hue+", 100%, 100%, .7)"),f.addColorStop(1,"hsla("+e.hue+", 100%, 50%, 0)");let R=function(){G(),x(),y(),w(),P(),k(),E(),M(),B()};function I(){R(),b.timer=requestAnimationFrame(I)}I()}},mounted(){this.init()},beforeUnmount(){cancelAnimationFrame(this.timer),this.timer=null}},J=a=>(g("data-v-6b08b79e"),a=a(),m(),a),K={class:"content"},X=J(()=>n("canvas",{id:"loading"},null,-1)),Y=[X];function Z(a,t,c,r,i,_){return p(),u("div",K,Y)}var tt=v(H,[["render",Z],["__scopeId","data-v-6b08b79e"]]);const et={},at={class:"content"},dt=C('<div class="loader" data-v-469b7dcb><div class="loader-line-wrap" data-v-469b7dcb><div class="loader-line" data-v-469b7dcb></div></div><div class="loader-line-wrap" data-v-469b7dcb><div class="loader-line" data-v-469b7dcb></div></div><div class="loader-line-wrap" data-v-469b7dcb><div class="loader-line" data-v-469b7dcb></div></div><div class="loader-line-wrap" data-v-469b7dcb><div class="loader-line" data-v-469b7dcb></div></div><div class="loader-line-wrap" data-v-469b7dcb><div class="loader-line" data-v-469b7dcb></div></div></div>',1),st=[dt];function it(a,t,c,r,i,_){return p(),u("div",at,st)}var nt=v(et,[["render",it],["__scopeId","data-v-469b7dcb"]]);const ot={},ct={class:"content"},rt=C('<div class="circle" data-v-75e11668><div class="line" data-v-75e11668></div><div class="line" data-v-75e11668></div><div class="line" data-v-75e11668></div><div class="line" data-v-75e11668></div><div class="line" data-v-75e11668></div><div class="line" data-v-75e11668></div><div class="circle_inside" data-v-75e11668></div></div>',1),lt=[rt];function _t(a,t,c,r,i,_){return p(),u("div",ct,lt)}var vt=v(ot,[["render",_t],["__scopeId","data-v-75e11668"]]);const pt={},ut=a=>(g("data-v-2ce3ba88"),a=a(),m(),a),ht={class:"content"},$t=ut(()=>n("div",{class:"loader"},null,-1)),ft=[$t];function gt(a,t,c,r,i,_){return p(),u("div",ht,ft)}var mt=v(pt,[["render",gt],["__scopeId","data-v-2ce3ba88"]]);const bt={},xt=a=>(g("data-v-0f16b793"),a=a(),m(),a),yt={class:"content"},St=xt(()=>n("div",{class:"loading"},[n("span"),n("span"),n("span"),n("span"),n("span")],-1)),Ct=[St];function It(a,t,c,r,i,_){return p(),u("div",yt,Ct)}var wt=v(bt,[["render",It],["__scopeId","data-v-0f16b793"]]);const Pt=F({components:{t1:D,t2:z,t3:tt,t4:nt,t5:vt,t7:mt,t8:wt}}),kt={class:"warp"};function Et(a,t,c,r,i,_){const b=h("t1"),e=h("t2"),l=h("t3"),o=h("t4"),x=h("t5"),y=h("t7");return p(),u("div",kt,[$(b),$(e),$(l),$(o),$(x),$(y)])}var Gt=v(Pt,[["render",Et],["__scopeId","data-v-532f1a93"]]);export{Gt as default};
