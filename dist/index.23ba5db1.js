import{_ as d}from"./plugin-vue_export-helper.2100c508.js";import{o as m,p as o,A as h,B as p,s as r,D as f,q as V,a0 as g,_ as u,r as v,t as b}from"./vendor.a1235956.js";const y={setup(){return{timer:null}},methods:{init(){function l(i){i=i.toString(),i.length<4?(i="0"+i,l(i)):i.length===4&&(a=i.split("")),t(a)}function t(i){const c=document.getElementsByClassName("numberItem"),s=i.filter(n=>!isNaN(n));for(let n=0;n<c.length;n++){const _=c[n];_.style.transform=`translate(-50%, -${s[n]*10}%)`}}let a=["0","0","0","0"],e="";for(let i=0;i<a.length;i++)isNaN(a[i])?e+='<li><span class="comma">'+a[i]+"</span></li>":e+='<li class="number-item"><span><i class="numberItem">0123456789</i></span></li>';document.getElementById("areaNumber").innerHTML=e,this.timer=setInterval(function(){const i=Math.round(Math.random()*1e4);l(i)},2e3)}},mounted(){this.init()},beforeUnmount(){clearInterval(this.timer),this.timer=null}},x=l=>(h("data-v-4f464280"),l=l(),p(),l),S={class:"total-area"},C=x(()=>r("span",{id:"areaNumber",class:"area-number"},null,-1)),N=[C];function $(l,t,a,e,i,c){return m(),o("div",S,N)}var k=d(y,[["render",$],["__scopeId","data-v-4f464280"]]);const D={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator(l){return l>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default(l,t,a,e){return a*(-Math.pow(2,-10*l/e)+1)*1024/1023+t}}},data(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown(){return this.startVal>this.endVal}},watch:{startVal(){this.autoplay&&this.start()},endVal(){this.autoplay&&this.start()}},mounted(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=requestAnimationFrame(this.count)},pauseResume(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause(){cancelAnimationFrame(this.rAF)},resume(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,requestAnimationFrame(this.count)},reset(){this.startTime=null,cancelAnimationFrame(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count(l){this.startTime||(this.startTime=l),this.timestamp=l;const t=l-this.startTime;this.remaining=this.localDuration-t,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(t,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(t,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(t/this.localDuration):this.printVal=this.localStartVal+(this.endVal-this.localStartVal)*(t/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),t<this.localDuration?this.rAF=requestAnimationFrame(this.count):this.$emit("callback")},isNumber(l){return!isNaN(parseFloat(l))},formatNumber(l){l=l.toFixed(this.decimals),l+="";const t=l.split(".");let a=t[0];const e=t.length>1?this.decimal+t[1]:"",i=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;i.test(a);)a=a.replace(i,"$1"+this.separator+"$2");return this.prefix+a+e+this.suffix}},beforeUnmount(){cancelAnimationFrame(this.rAF),this.rAF=null}},F={class:"content"};function T(l,t,a,e,i,c){return m(),o("div",F,[r("span",null,f(i.displayValue),1)])}var I=d(D,[["render",T],["__scopeId","data-v-01e34863"]]);const q={data(){return{timer:null}},methods:{focus(l){l.currentTarget.parentElement.classList.add("timer_span-focused"),l.currentTarget.nextElementSibling.style.display="block",l.currentTarget.nextElementSibling.style.color="black"},timerClick(l,t){this.timer||(this.timer="00:00:00");for(let c of l.currentTarget.children)c.style.color="black";l.target.style.color="red";let a=this.timer.slice(0,2),e=this.timer.slice(3,5),i=this.timer.slice(6,8);switch(t){case"hour":a=l.target.textContent;break;case"min":e=l.target.textContent;break;case"second":i=l.target.textContent;break}this.timer=`${a}:${e}:${i}`,l.currentTarget.scrollTo({left:0,top:l.target.offsetTop-l.target.offsetHeight*2,behavior:"smooth"})},complate(l){l.currentTarget.parentElement.style.display="none",document.querySelector(".timer_span").classList.remove("timer_span-focused")}}},A=l=>(h("data-v-64bc3757"),l=l(),p(),l),E={class:"timer_span"},w={class:"timer"},B={class:"timer_list"},M=u('<li class="time-cell" data-v-64bc3757>00</li><li class="time-cell" data-v-64bc3757>01</li><li class="time-cell" data-v-64bc3757>02</li><li class="time-cell" data-v-64bc3757>03</li><li class="time-cell" data-v-64bc3757>04</li><li class="time-cell" data-v-64bc3757>05</li><li class="time-cell" data-v-64bc3757>06</li><li class="time-cell" data-v-64bc3757>07</li><li class="time-cell" data-v-64bc3757>08</li><li class="time-cell" data-v-64bc3757>09</li><li class="time-cell" data-v-64bc3757>10</li><li class="time-cell" data-v-64bc3757>11</li><li class="time-cell" data-v-64bc3757>12</li><li class="time-cell" data-v-64bc3757>13</li><li class="time-cell" data-v-64bc3757>14</li><li class="time-cell" data-v-64bc3757>15</li><li class="time-cell" data-v-64bc3757>16</li><li class="time-cell" data-v-64bc3757>17</li><li class="time-cell" data-v-64bc3757>18</li><li class="time-cell" data-v-64bc3757>19</li><li class="time-cell" data-v-64bc3757>20</li><li class="time-cell" data-v-64bc3757>21</li><li class="time-cell" data-v-64bc3757>22</li><li class="time-cell" data-v-64bc3757>23</li>',24),U=[M],L=u('<li class="time-cell" data-v-64bc3757>00</li><li class="time-cell" data-v-64bc3757>01</li><li class="time-cell" data-v-64bc3757>02</li><li class="time-cell" data-v-64bc3757>03</li><li class="time-cell" data-v-64bc3757>04</li><li class="time-cell" data-v-64bc3757>05</li><li class="time-cell" data-v-64bc3757>06</li><li class="time-cell" data-v-64bc3757>07</li><li class="time-cell" data-v-64bc3757>08</li><li class="time-cell" data-v-64bc3757>09</li><li class="time-cell" data-v-64bc3757>10</li><li class="time-cell" data-v-64bc3757>11</li><li class="time-cell" data-v-64bc3757>12</li><li class="time-cell" data-v-64bc3757>13</li><li class="time-cell" data-v-64bc3757>14</li><li class="time-cell" data-v-64bc3757>15</li><li class="time-cell" data-v-64bc3757>16</li><li class="time-cell" data-v-64bc3757>17</li><li class="time-cell" data-v-64bc3757>18</li><li class="time-cell" data-v-64bc3757>19</li><li class="time-cell" data-v-64bc3757>20</li><li class="time-cell" data-v-64bc3757>21</li><li class="time-cell" data-v-64bc3757>22</li><li class="time-cell" data-v-64bc3757>23</li><li class="time-cell" data-v-64bc3757>24</li><li class="time-cell" data-v-64bc3757>25</li><li class="time-cell" data-v-64bc3757>26</li><li class="time-cell" data-v-64bc3757>27</li><li class="time-cell" data-v-64bc3757>28</li><li class="time-cell" data-v-64bc3757>29</li><li class="time-cell" data-v-64bc3757>30</li><li class="time-cell" data-v-64bc3757>31</li><li class="time-cell" data-v-64bc3757>32</li><li class="time-cell" data-v-64bc3757>33</li><li class="time-cell" data-v-64bc3757>34</li><li class="time-cell" data-v-64bc3757>35</li><li class="time-cell" data-v-64bc3757>36</li><li class="time-cell" data-v-64bc3757>37</li><li class="time-cell" data-v-64bc3757>38</li><li class="time-cell" data-v-64bc3757>39</li><li class="time-cell" data-v-64bc3757>40</li><li class="time-cell" data-v-64bc3757>41</li><li class="time-cell" data-v-64bc3757>42</li><li class="time-cell" data-v-64bc3757>43</li><li class="time-cell" data-v-64bc3757>44</li><li class="time-cell" data-v-64bc3757>45</li><li class="time-cell" data-v-64bc3757>46</li><li class="time-cell" data-v-64bc3757>47</li><li class="time-cell" data-v-64bc3757>48</li><li class="time-cell" data-v-64bc3757>49</li><li class="time-cell" data-v-64bc3757>50</li><li class="time-cell" data-v-64bc3757>51</li><li class="time-cell" data-v-64bc3757>52</li><li class="time-cell" data-v-64bc3757>53</li><li class="time-cell" data-v-64bc3757>54</li><li class="time-cell" data-v-64bc3757>55</li><li class="time-cell" data-v-64bc3757>56</li><li class="time-cell" data-v-64bc3757>57</li><li class="time-cell" data-v-64bc3757>58</li><li class="time-cell" data-v-64bc3757>59</li>',60),H=[L],P=u('<li class="time-cell" data-v-64bc3757>00</li><li class="time-cell" data-v-64bc3757>01</li><li class="time-cell" data-v-64bc3757>02</li><li class="time-cell" data-v-64bc3757>03</li><li class="time-cell" data-v-64bc3757>04</li><li class="time-cell" data-v-64bc3757>05</li><li class="time-cell" data-v-64bc3757>06</li><li class="time-cell" data-v-64bc3757>07</li><li class="time-cell" data-v-64bc3757>08</li><li class="time-cell" data-v-64bc3757>09</li><li class="time-cell" data-v-64bc3757>10</li><li class="time-cell" data-v-64bc3757>11</li><li class="time-cell" data-v-64bc3757>12</li><li class="time-cell" data-v-64bc3757>13</li><li class="time-cell" data-v-64bc3757>14</li><li class="time-cell" data-v-64bc3757>15</li><li class="time-cell" data-v-64bc3757>16</li><li class="time-cell" data-v-64bc3757>17</li><li class="time-cell" data-v-64bc3757>18</li><li class="time-cell" data-v-64bc3757>19</li><li class="time-cell" data-v-64bc3757>20</li><li class="time-cell" data-v-64bc3757>21</li><li class="time-cell" data-v-64bc3757>22</li><li class="time-cell" data-v-64bc3757>23</li><li class="time-cell" data-v-64bc3757>24</li><li class="time-cell" data-v-64bc3757>25</li><li class="time-cell" data-v-64bc3757>26</li><li class="time-cell" data-v-64bc3757>27</li><li class="time-cell" data-v-64bc3757>28</li><li class="time-cell" data-v-64bc3757>29</li><li class="time-cell" data-v-64bc3757>30</li><li class="time-cell" data-v-64bc3757>31</li><li class="time-cell" data-v-64bc3757>32</li><li class="time-cell" data-v-64bc3757>33</li><li class="time-cell" data-v-64bc3757>34</li><li class="time-cell" data-v-64bc3757>35</li><li class="time-cell" data-v-64bc3757>36</li><li class="time-cell" data-v-64bc3757>37</li><li class="time-cell" data-v-64bc3757>38</li><li class="time-cell" data-v-64bc3757>39</li><li class="time-cell" data-v-64bc3757>40</li><li class="time-cell" data-v-64bc3757>41</li><li class="time-cell" data-v-64bc3757>42</li><li class="time-cell" data-v-64bc3757>43</li><li class="time-cell" data-v-64bc3757>44</li><li class="time-cell" data-v-64bc3757>45</li><li class="time-cell" data-v-64bc3757>46</li><li class="time-cell" data-v-64bc3757>47</li><li class="time-cell" data-v-64bc3757>48</li><li class="time-cell" data-v-64bc3757>49</li><li class="time-cell" data-v-64bc3757>50</li><li class="time-cell" data-v-64bc3757>51</li><li class="time-cell" data-v-64bc3757>52</li><li class="time-cell" data-v-64bc3757>53</li><li class="time-cell" data-v-64bc3757>54</li><li class="time-cell" data-v-64bc3757>55</li><li class="time-cell" data-v-64bc3757>56</li><li class="time-cell" data-v-64bc3757>57</li><li class="time-cell" data-v-64bc3757>58</li><li class="time-cell" data-v-64bc3757>59</li>',60),j=[P],R=A(()=>r("i",{class:"iconfont iconshijian"},null,-1));function z(l,t,a,e,i,c){return m(),o("span",E,[V(r("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>i.timer=s),class:"timer_input",placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",type:"text",onFocus:t[1]||(t[1]=s=>c.focus(s))},null,544),[[g,i.timer]]),r("div",w,[r("div",B,[r("ul",{class:"time-ul",onClick:t[2]||(t[2]=s=>c.timerClick(s,"hour"))},U),r("ul",{class:"time-ul",onClick:t[3]||(t[3]=s=>c.timerClick(s,"min"))},H),r("ul",{class:"time-ul",onClick:t[4]||(t[4]=s=>c.timerClick(s,"second"))},j)]),r("button",{class:"complate",onClick:t[5]||(t[5]=s=>c.complate(s))},"\u5B8C\u6210")]),R])}var G=d(q,[["render",z],["__scopeId","data-v-64bc3757"]]);const J={components:{scrollNum:k,vueCount:I,timePicker:G},data(){return{timer:null,vueCountStar:1e3,vueCountEnd:9999,vueCountDuration:2e3}},methods:{init(){function l(a,e){return~~(Math.random()*(e-a+1))+a}let t=this;this.timer=setInterval(function(){t.vueCountStar=t.vueCountEnd,t.vueCountEnd=l(1e3,9999)},this.vueCountDuration+300)}},mounted(){this.init()},beforeUnmount(){clearInterval(this.timer),this.timer=null}},K={class:"wrap"};function O(l,t,a,e,i,c){const s=v("scroll-num"),n=v("vue-count");return m(),o("div",K,[b(s),b(n,{"start-val":i.vueCountStar,"end-val":i.vueCountEnd,duration:i.vueCountDuration,style:{color:"#639aff"}},null,8,["start-val","end-val","duration"])])}var X=d(J,[["render",O],["__scopeId","data-v-5fe00445"]]);export{X as default};
