import{_ as m}from"./clearAll.7adc669e.js";import{_ as f}from"./index.3bb51dc7.js";import{d as _,o as w,b as u,e as c,p as $,j as g}from"./vendor.cc5e9912.js";var v="./dist/moon.b246064f.jpg";const x=_({mixins:[m],data(){return{see1:1500,see2:1500,see3:1500}},methods:{init(){let e=new this.$three.Scene,o=new this.$three.AxesHelper(500);e.add(o);let t=new this.$three.OrthographicCamera(-500*window.innerWidth/window.innerHeight,500*window.innerWidth/window.innerHeight,500,-500,1,1e4);t.position.set(200,0,200),t.position.set(-.3,0,0);let r=4144959,n=new this.$three.WebGLRenderer({antialias:!0,alpha:!0}),s=document.getElementById("content");s.appendChild(n.domElement),n.setSize(window.innerWidth,window.innerHeight),n.setClearColor(r,1),s.lastElementChild.style="width: 100%; height: 100%;";const p=new this.$three.TextureLoader().load(v),a=new this.$three.Mesh(new this.$three.SphereGeometry(300,100,100),new this.$three.MeshStandardMaterial({map:p,side:this.$three.DoubleSide}));e.add(a);const h=new this.$three.PointLight(16777215);h.position.set(5,5,5);const l=new this.$three.AmbientLight(16777215);e.add(h,l),new this.$OrbitControls(t,n.domElement),this.initStats();let i=this;function d(){i.stats.begin(),a.rotation.y+=.001,t.position.setX(i.see1),t.position.setY(i.see2),t.position.setZ(i.see3),t.lookAt(e.position),n.render(e,t),i.stats.end(),i.animations=requestAnimationFrame(d)}d(),[this.scene,this.render]=[e,n]},HZ1(e){this.see1=e,this.see3=Math.sqrt(1500*1500-Math.pow(this.see1,2))},HZ2(e){this.see2=e},HZ3(e){this.see3=e}},mounted(){this.init()},beforeUnmount(){this.remove()}}),b=e=>($("data-v-10efdaf9"),e=e(),g(),e),S={class:"content",id:"content",ref:"threeCanvas"},C=b(()=>c("div",{class:"count"},null,-1)),H=[C];function M(e,o,t,r,n,s){return w(),u("div",null,[c("div",S,H,512)])}var E=f(x,[["render",M],["__scopeId","data-v-10efdaf9"]]);export{E as default};
