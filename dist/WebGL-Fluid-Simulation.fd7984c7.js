import{t as Oi,v as Li,x as Fi,o as Ni,y as Bi}from"./vendor.ef7c6805.js";import{_ as Ui}from"./plugin-vue_export-helper.2100c508.js";function ki(i){if(!!i&&typeof window!="undefined"){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=i,document.head.appendChild(e),i}}function ae(i,e){var t=i.__state.conversionName.toString(),o=Math.round(i.r),a=Math.round(i.g),l=Math.round(i.b),h=i.a,_=Math.round(i.h),g=i.s.toFixed(1),E=i.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var w=i.hex.toString(16);w.length<6;)w="0"+w;return"#"+w}else{if(t==="CSS_RGB")return"rgb("+o+","+a+","+l+")";if(t==="CSS_RGBA")return"rgba("+o+","+a+","+l+","+h+")";if(t==="HEX")return"0x"+i.hex.toString(16);if(t==="RGB_ARRAY")return"["+o+","+a+","+l+"]";if(t==="RGBA_ARRAY")return"["+o+","+a+","+l+","+h+"]";if(t==="RGB_OBJ")return"{r:"+o+",g:"+a+",b:"+l+"}";if(t==="RGBA_OBJ")return"{r:"+o+",g:"+a+",b:"+l+",a:"+h+"}";if(t==="HSV_OBJ")return"{h:"+_+",s:"+g+",v:"+E+"}";if(t==="HSVA_OBJ")return"{h:"+_+",s:"+g+",v:"+E+",a:"+h+"}"}return"unknown format"}var gt=Array.prototype.forEach,ce=Array.prototype.slice,f={BREAK:{},extend:function(e){return this.each(ce.call(arguments,1),function(t){var o=this.isObject(t)?Object.keys(t):[];o.forEach(function(a){this.isUndefined(t[a])||(e[a]=t[a])}.bind(this))},this),e},defaults:function(e){return this.each(ce.call(arguments,1),function(t){var o=this.isObject(t)?Object.keys(t):[];o.forEach(function(a){this.isUndefined(e[a])&&(e[a]=t[a])}.bind(this))},this),e},compose:function(){var e=ce.call(arguments);return function(){for(var t=ce.call(arguments),o=e.length-1;o>=0;o--)t=[e[o].apply(this,t)];return t[0]}},each:function(e,t,o){if(!!e){if(gt&&e.forEach&&e.forEach===gt)e.forEach(t,o);else if(e.length===e.length+0){var a=void 0,l=void 0;for(a=0,l=e.length;a<l;a++)if(a in e&&t.call(o,e[a],a)===this.BREAK)return}else for(var h in e)if(t.call(o,e[h],h)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,o){var a=void 0;return function(){var l=this,h=arguments;function _(){a=null,o||e.apply(l,h)}var g=o||!a;clearTimeout(a),a=setTimeout(_,t),g&&e.apply(l,h)}},toArray:function(e){return e.toArray?e.toArray():ce.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(i){function e(t){return i.apply(this,arguments)}return e.toString=function(){return i.toString()},e}(function(i){return isNaN(i)}),isArray:Array.isArray||function(i){return i.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},Pi=[{litmus:f.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:ae},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:ae},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:ae},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:ae}}},{litmus:f.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:f.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:f.isObject,conversions:{RGBA_OBJ:{read:function(e){return f.isNumber(e.r)&&f.isNumber(e.g)&&f.isNumber(e.b)&&f.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return f.isNumber(e.r)&&f.isNumber(e.g)&&f.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return f.isNumber(e.h)&&f.isNumber(e.s)&&f.isNumber(e.v)&&f.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return f.isNumber(e.h)&&f.isNumber(e.s)&&f.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],fe=void 0,Ce=void 0,Oe=function(){Ce=!1;var e=arguments.length>1?f.toArray(arguments):arguments[0];return f.each(Pi,function(t){if(t.litmus(e))return f.each(t.conversions,function(o,a){if(fe=o.read(e),Ce===!1&&fe!==!1)return Ce=fe,fe.conversionName=a,fe.conversion=o,f.BREAK}),f.BREAK}),Ce},bt=void 0,pe={hsv_to_rgb:function(e,t,o){var a=Math.floor(e/60)%6,l=e/60-Math.floor(e/60),h=o*(1-t),_=o*(1-l*t),g=o*(1-(1-l)*t),E=[[o,g,h],[_,o,h],[h,o,g],[h,_,o],[g,h,o],[o,h,_]][a];return{r:E[0]*255,g:E[1]*255,b:E[2]*255}},rgb_to_hsv:function(e,t,o){var a=Math.min(e,t,o),l=Math.max(e,t,o),h=l-a,_=void 0,g=void 0;if(l!==0)g=h/l;else return{h:NaN,s:0,v:0};return e===l?_=(t-o)/h:t===l?_=2+(o-e)/h:_=4+(e-t)/h,_/=6,_<0&&(_+=1),{h:_*360,s:g,v:l/255}},rgb_to_hex:function(e,t,o){var a=this.hex_with_component(0,2,e);return a=this.hex_with_component(a,1,t),a=this.hex_with_component(a,0,o),a},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,o){return o<<(bt=t*8)|e&~(255<<bt)}},Ii=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},X=function(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")},V=function(){function i(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,o){return t&&i(e.prototype,t),o&&i(e,o),e}}(),J=function i(e,t,o){e===null&&(e=Function.prototype);var a=Object.getOwnPropertyDescriptor(e,t);if(a===void 0){var l=Object.getPrototypeOf(e);return l===null?void 0:i(l,t,o)}else{if("value"in a)return a.value;var h=a.get;return h===void 0?void 0:h.call(o)}},q=function(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(i,e):i.__proto__=e)},Q=function(i,e){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:i},N=function(){function i(){if(X(this,i),this.__state=Oe.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return V(i,[{key:"toString",value:function(){return ae(this)}},{key:"toHexString",value:function(){return ae(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),i}();function $e(i,e,t){Object.defineProperty(i,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(N.recalculateRGB(this,e,t),this.__state[e])},set:function(a){this.__state.space!=="RGB"&&(N.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=a}})}function We(i,e){Object.defineProperty(i,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(N.recalculateHSV(this),this.__state[e])},set:function(o){this.__state.space!=="HSV"&&(N.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=o}})}N.recalculateRGB=function(i,e,t){if(i.__state.space==="HEX")i.__state[e]=pe.component_from_hex(i.__state.hex,t);else if(i.__state.space==="HSV")f.extend(i.__state,pe.hsv_to_rgb(i.__state.h,i.__state.s,i.__state.v));else throw new Error("Corrupted color state")};N.recalculateHSV=function(i){var e=pe.rgb_to_hsv(i.r,i.g,i.b);f.extend(i.__state,{s:e.s,v:e.v}),f.isNaN(e.h)?f.isUndefined(i.__state.h)&&(i.__state.h=0):i.__state.h=e.h};N.COMPONENTS=["r","g","b","h","s","v","hex","a"];$e(N.prototype,"r",2);$e(N.prototype,"g",1);$e(N.prototype,"b",0);We(N.prototype,"h");We(N.prototype,"s");We(N.prototype,"v");Object.defineProperty(N.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(N.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=pe.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var Z=function(){function i(e,t){X(this,i),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return V(i,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),i}(),Mi={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},Dt={};f.each(Mi,function(i,e){f.each(i,function(t){Dt[t]=e})});var Hi=/(\d+(\.\d+)?)px/;function $(i){if(i==="0"||f.isUndefined(i))return 0;var e=i.match(Hi);return f.isNull(e)?0:parseFloat(e[1])}var d={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,o){var a=o,l=t;f.isUndefined(l)&&(l=!0),f.isUndefined(a)&&(a=!0),e.style.position="absolute",l&&(e.style.left=0,e.style.right=0),a&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,o,a){var l=o||{},h=Dt[t];if(!h)throw new Error("Event type "+t+" not supported.");var _=document.createEvent(h);switch(h){case"MouseEvents":{var g=l.x||l.clientX||0,E=l.y||l.clientY||0;_.initMouseEvent(t,l.bubbles||!1,l.cancelable||!0,window,l.clickCount||1,0,0,g,E,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var w=_.initKeyboardEvent||_.initKeyEvent;f.defaults(l,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),w(t,l.bubbles||!1,l.cancelable,window,l.ctrlKey,l.altKey,l.shiftKey,l.metaKey,l.keyCode,l.charCode);break}default:{_.initEvent(t,l.bubbles||!1,l.cancelable||!0);break}}f.defaults(_,a),e.dispatchEvent(_)},bind:function(e,t,o,a){var l=a||!1;return e.addEventListener?e.addEventListener(t,o,l):e.attachEvent&&e.attachEvent("on"+t,o),d},unbind:function(e,t,o,a){var l=a||!1;return e.removeEventListener?e.removeEventListener(t,o,l):e.detachEvent&&e.detachEvent("on"+t,o),d},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var o=e.className.split(/ +/);o.indexOf(t)===-1&&(o.push(t),e.className=o.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return d},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var o=e.className.split(/ +/),a=o.indexOf(t);a!==-1&&(o.splice(a,1),e.className=o.join(" "))}else e.className=void 0;return d},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return $(t["border-left-width"])+$(t["border-right-width"])+$(t["padding-left"])+$(t["padding-right"])+$(t.width)},getHeight:function(e){var t=getComputedStyle(e);return $(t["border-top-width"])+$(t["border-bottom-width"])+$(t["padding-top"])+$(t["padding-bottom"])+$(t.height)},getOffset:function(e){var t=e,o={left:0,top:0};if(t.offsetParent)do o.left+=t.offsetLeft,o.top+=t.offsetTop,t=t.offsetParent;while(t);return o},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},Ke=function(i){q(e,i);function e(t,o){X(this,e);var a=Q(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,o)),l=a;a.__prev=a.getValue(),a.__checkbox=document.createElement("input"),a.__checkbox.setAttribute("type","checkbox");function h(){l.setValue(!l.__prev)}return d.bind(a.__checkbox,"change",h,!1),a.domElement.appendChild(a.__checkbox),a.updateDisplay(),a}return V(e,[{key:"setValue",value:function(o){var a=J(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,o);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),a}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),J(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Z),Ot=function(i){q(e,i);function e(t,o,a){X(this,e);var l=Q(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,o)),h=a,_=l;if(l.__select=document.createElement("select"),f.isArray(h)){var g={};f.each(h,function(E){g[E]=E}),h=g}return f.each(h,function(E,w){var v=document.createElement("option");v.innerHTML=w,v.setAttribute("value",E),_.__select.appendChild(v)}),l.updateDisplay(),d.bind(l.__select,"change",function(){var E=this.options[this.selectedIndex].value;_.setValue(E)}),l.domElement.appendChild(l.__select),l}return V(e,[{key:"setValue",value:function(o){var a=J(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,o);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),a}},{key:"updateDisplay",value:function(){return d.isActive(this.__select)?this:(this.__select.value=this.getValue(),J(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(Z),Lt=function(i){q(e,i);function e(t,o){X(this,e);var a=Q(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,o)),l=a;function h(){l.setValue(l.__input.value)}function _(){l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return a.__input=document.createElement("input"),a.__input.setAttribute("type","text"),d.bind(a.__input,"keyup",h),d.bind(a.__input,"change",h),d.bind(a.__input,"blur",_),d.bind(a.__input,"keydown",function(g){g.keyCode===13&&this.blur()}),a.updateDisplay(),a.domElement.appendChild(a.__input),a}return V(e,[{key:"updateDisplay",value:function(){return d.isActive(this.__input)||(this.__input.value=this.getValue()),J(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Z);function xt(i){var e=i.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var je=function(i){q(e,i);function e(t,o,a){X(this,e);var l=Q(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,o)),h=a||{};return l.__min=h.min,l.__max=h.max,l.__step=h.step,f.isUndefined(l.__step)?l.initialValue===0?l.__impliedStep=1:l.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(l.initialValue))/Math.LN10))/10:l.__impliedStep=l.__step,l.__precision=xt(l.__impliedStep),l}return V(e,[{key:"setValue",value:function(o){var a=o;return this.__min!==void 0&&a<this.__min?a=this.__min:this.__max!==void 0&&a>this.__max&&(a=this.__max),this.__step!==void 0&&a%this.__step!==0&&(a=Math.round(a/this.__step)*this.__step),J(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,a)}},{key:"min",value:function(o){return this.__min=o,this}},{key:"max",value:function(o){return this.__max=o,this}},{key:"step",value:function(o){return this.__step=o,this.__impliedStep=o,this.__precision=xt(o),this}}]),e}(Z);function Gi(i,e){var t=Math.pow(10,e);return Math.round(i*t)/t}var ve=function(i){q(e,i);function e(t,o,a){X(this,e);var l=Q(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,o,a));l.__truncationSuspended=!1;var h=l,_=void 0;function g(){var R=parseFloat(h.__input.value);f.isNaN(R)||h.setValue(R)}function E(){h.__onFinishChange&&h.__onFinishChange.call(h,h.getValue())}function w(){E()}function v(R){var y=_-R.clientY;h.setValue(h.getValue()+y*h.__impliedStep),_=R.clientY}function m(){d.unbind(window,"mousemove",v),d.unbind(window,"mouseup",m),E()}function B(R){d.bind(window,"mousemove",v),d.bind(window,"mouseup",m),_=R.clientY}return l.__input=document.createElement("input"),l.__input.setAttribute("type","text"),d.bind(l.__input,"change",g),d.bind(l.__input,"blur",w),d.bind(l.__input,"mousedown",B),d.bind(l.__input,"keydown",function(R){R.keyCode===13&&(h.__truncationSuspended=!0,this.blur(),h.__truncationSuspended=!1,E())}),l.updateDisplay(),l.domElement.appendChild(l.__input),l}return V(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():Gi(this.getValue(),this.__precision),J(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(je);function Et(i,e,t,o,a){return o+(a-o)*((i-e)/(t-e))}var Le=function(i){q(e,i);function e(t,o,a,l,h){X(this,e);var _=Q(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,o,{min:a,max:l,step:h})),g=_;_.__background=document.createElement("div"),_.__foreground=document.createElement("div"),d.bind(_.__background,"mousedown",E),d.bind(_.__background,"touchstart",m),d.addClass(_.__background,"slider"),d.addClass(_.__foreground,"slider-fg");function E(y){document.activeElement.blur(),d.bind(window,"mousemove",w),d.bind(window,"mouseup",v),w(y)}function w(y){y.preventDefault();var r=g.__background.getBoundingClientRect();return g.setValue(Et(y.clientX,r.left,r.right,g.__min,g.__max)),!1}function v(){d.unbind(window,"mousemove",w),d.unbind(window,"mouseup",v),g.__onFinishChange&&g.__onFinishChange.call(g,g.getValue())}function m(y){y.touches.length===1&&(d.bind(window,"touchmove",B),d.bind(window,"touchend",R),B(y))}function B(y){var r=y.touches[0].clientX,D=g.__background.getBoundingClientRect();g.setValue(Et(r,D.left,D.right,g.__min,g.__max))}function R(){d.unbind(window,"touchmove",B),d.unbind(window,"touchend",R),g.__onFinishChange&&g.__onFinishChange.call(g,g.getValue())}return _.updateDisplay(),_.__background.appendChild(_.__foreground),_.domElement.appendChild(_.__background),_}return V(e,[{key:"updateDisplay",value:function(){var o=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=o*100+"%",J(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(je),Je=function(i){q(e,i);function e(t,o,a){X(this,e);var l=Q(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,o)),h=l;return l.__button=document.createElement("div"),l.__button.innerHTML=a===void 0?"Fire":a,d.bind(l.__button,"click",function(_){return _.preventDefault(),h.fire(),!1}),d.addClass(l.__button,"button"),l.domElement.appendChild(l.__button),l}return V(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(Z),Fe=function(i){q(e,i);function e(t,o){X(this,e);var a=Q(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,o));a.__color=new N(a.getValue()),a.__temp=new N(0);var l=a;a.domElement=document.createElement("div"),d.makeSelectable(a.domElement,!1),a.__selector=document.createElement("div"),a.__selector.className="selector",a.__saturation_field=document.createElement("div"),a.__saturation_field.className="saturation-field",a.__field_knob=document.createElement("div"),a.__field_knob.className="field-knob",a.__field_knob_border="2px solid ",a.__hue_knob=document.createElement("div"),a.__hue_knob.className="hue-knob",a.__hue_field=document.createElement("div"),a.__hue_field.className="hue-field",a.__input=document.createElement("input"),a.__input.type="text",a.__input_textShadow="0 1px 1px ",d.bind(a.__input,"keydown",function(y){y.keyCode===13&&v.call(this)}),d.bind(a.__input,"blur",v),d.bind(a.__selector,"mousedown",function(){d.addClass(this,"drag").bind(window,"mouseup",function(){d.removeClass(l.__selector,"drag")})}),d.bind(a.__selector,"touchstart",function(){d.addClass(this,"drag").bind(window,"touchend",function(){d.removeClass(l.__selector,"drag")})});var h=document.createElement("div");f.extend(a.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),f.extend(a.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:a.__field_knob_border+(a.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),f.extend(a.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),f.extend(a.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),f.extend(h.style,{width:"100%",height:"100%",background:"none"}),yt(h,"top","rgba(0,0,0,0)","#000"),f.extend(a.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),Xi(a.__hue_field),f.extend(a.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:a.__input_textShadow+"rgba(0,0,0,0.7)"}),d.bind(a.__saturation_field,"mousedown",_),d.bind(a.__saturation_field,"touchstart",_),d.bind(a.__field_knob,"mousedown",_),d.bind(a.__field_knob,"touchstart",_),d.bind(a.__hue_field,"mousedown",g),d.bind(a.__hue_field,"touchstart",g);function _(y){B(y),d.bind(window,"mousemove",B),d.bind(window,"touchmove",B),d.bind(window,"mouseup",E),d.bind(window,"touchend",E)}function g(y){R(y),d.bind(window,"mousemove",R),d.bind(window,"touchmove",R),d.bind(window,"mouseup",w),d.bind(window,"touchend",w)}function E(){d.unbind(window,"mousemove",B),d.unbind(window,"touchmove",B),d.unbind(window,"mouseup",E),d.unbind(window,"touchend",E),m()}function w(){d.unbind(window,"mousemove",R),d.unbind(window,"touchmove",R),d.unbind(window,"mouseup",w),d.unbind(window,"touchend",w),m()}function v(){var y=Oe(this.value);y!==!1?(l.__color.__state=y,l.setValue(l.__color.toOriginal())):this.value=l.__color.toString()}function m(){l.__onFinishChange&&l.__onFinishChange.call(l,l.__color.toOriginal())}a.__saturation_field.appendChild(h),a.__selector.appendChild(a.__field_knob),a.__selector.appendChild(a.__saturation_field),a.__selector.appendChild(a.__hue_field),a.__hue_field.appendChild(a.__hue_knob),a.domElement.appendChild(a.__input),a.domElement.appendChild(a.__selector),a.updateDisplay();function B(y){y.type.indexOf("touch")===-1&&y.preventDefault();var r=l.__saturation_field.getBoundingClientRect(),D=y.touches&&y.touches[0]||y,se=D.clientX,P=D.clientY,ee=(se-r.left)/(r.right-r.left),te=1-(P-r.top)/(r.bottom-r.top);return te>1?te=1:te<0&&(te=0),ee>1?ee=1:ee<0&&(ee=0),l.__color.v=te,l.__color.s=ee,l.setValue(l.__color.toOriginal()),!1}function R(y){y.type.indexOf("touch")===-1&&y.preventDefault();var r=l.__hue_field.getBoundingClientRect(),D=y.touches&&y.touches[0]||y,se=D.clientY,P=1-(se-r.top)/(r.bottom-r.top);return P>1?P=1:P<0&&(P=0),l.__color.h=P*360,l.setValue(l.__color.toOriginal()),!1}return a}return V(e,[{key:"updateDisplay",value:function(){var o=Oe(this.getValue());if(o!==!1){var a=!1;f.each(N.COMPONENTS,function(_){if(!f.isUndefined(o[_])&&!f.isUndefined(this.__color.__state[_])&&o[_]!==this.__color.__state[_])return a=!0,{}},this),a&&f.extend(this.__color.__state,o)}f.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var l=this.__color.v<.5||this.__color.s>.5?255:0,h=255-l;f.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+l+","+l+","+l+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,yt(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),f.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+l+","+l+","+l+")",textShadow:this.__input_textShadow+"rgba("+h+","+h+","+h+",.7)"})}}]),e}(Z),zi=["-moz-","-o-","-webkit-","-ms-",""];function yt(i,e,t,o){i.style.background="",f.each(zi,function(a){i.style.cssText+="background: "+a+"linear-gradient("+e+", "+t+" 0%, "+o+" 100%); "})}function Xi(i){i.style.background="",i.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",i.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var Vi={load:function(e,t){var o=t||document,a=o.createElement("link");a.type="text/css",a.rel="stylesheet",a.href=e,o.getElementsByTagName("head")[0].appendChild(a)},inject:function(e,t){var o=t||document,a=document.createElement("style");a.type="text/css",a.innerHTML=e;var l=o.getElementsByTagName("head")[0];try{l.appendChild(a)}catch{}}},Yi=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,$i=function(e,t){var o=e[t];return f.isArray(arguments[2])||f.isObject(arguments[2])?new Ot(e,t,arguments[2]):f.isNumber(o)?f.isNumber(arguments[2])&&f.isNumber(arguments[3])?f.isNumber(arguments[4])?new Le(e,t,arguments[2],arguments[3],arguments[4]):new Le(e,t,arguments[2],arguments[3]):f.isNumber(arguments[4])?new ve(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new ve(e,t,{min:arguments[2],max:arguments[3]}):f.isString(o)?new Lt(e,t):f.isFunction(o)?new Je(e,t,""):f.isBoolean(o)?new Ke(e,t):null};function Wi(i){setTimeout(i,1e3/60)}var Ki=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||Wi,ji=function(){function i(){X(this,i),this.backgroundElement=document.createElement("div"),f.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),d.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),f.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;d.bind(this.backgroundElement,"click",function(){e.hide()})}return V(i,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),f.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,o=function a(){t.domElement.style.display="none",t.backgroundElement.style.display="none",d.unbind(t.domElement,"webkitTransitionEnd",a),d.unbind(t.domElement,"transitionend",a),d.unbind(t.domElement,"oTransitionEnd",a)};d.bind(this.domElement,"webkitTransitionEnd",o),d.bind(this.domElement,"transitionend",o),d.bind(this.domElement,"oTransitionEnd",o),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-d.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-d.getHeight(this.domElement)/2+"px"}}]),i}(),Ji=ki(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);Vi.inject(Ji);var St="dg",Tt=72,wt=20,ge="Default",he=function(){try{return!!window.localStorage}catch{return!1}}(),me=void 0,At=!0,re=void 0,ze=!1,Ft=[],C=function i(e){var t=this,o=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),d.addClass(this.domElement,St),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],o=f.defaults(o,{closeOnTop:!1,autoPlace:!0,width:i.DEFAULT_WIDTH}),o=f.defaults(o,{resizable:o.autoPlace,hideable:o.autoPlace}),f.isUndefined(o.load)?o.load={preset:ge}:o.preset&&(o.load.preset=o.preset),f.isUndefined(o.parent)&&o.hideable&&Ft.push(this),o.resizable=f.isUndefined(o.parent)&&o.resizable,o.autoPlace&&f.isUndefined(o.scrollable)&&(o.scrollable=!0);var a=he&&localStorage.getItem(oe(this,"isLocal"))==="true",l=void 0,h=void 0;if(Object.defineProperties(this,{parent:{get:function(){return o.parent}},scrollable:{get:function(){return o.scrollable}},autoPlace:{get:function(){return o.autoPlace}},closeOnTop:{get:function(){return o.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:o.load.preset},set:function(m){t.parent?t.getRoot().preset=m:o.load.preset=m,en(this),t.revert()}},width:{get:function(){return o.width},set:function(m){o.width=m,Ye(t,m)}},name:{get:function(){return o.name},set:function(m){o.name=m,h&&(h.innerHTML=o.name)}},closed:{get:function(){return o.closed},set:function(m){o.closed=m,o.closed?d.addClass(t.__ul,i.CLASS_CLOSED):d.removeClass(t.__ul,i.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=m?i.TEXT_OPEN:i.TEXT_CLOSED)}},load:{get:function(){return o.load}},useLocalStorage:{get:function(){return a},set:function(m){he&&(a=m,m?d.bind(window,"unload",l):d.unbind(window,"unload",l),localStorage.setItem(oe(t,"isLocal"),m))}}}),f.isUndefined(o.parent)){if(this.closed=o.closed||!1,d.addClass(this.domElement,i.CLASS_MAIN),d.makeSelectable(this.domElement,!1),he&&a){t.useLocalStorage=!0;var _=localStorage.getItem(oe(this,"gui"));_&&(o.load=JSON.parse(_))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=i.TEXT_CLOSED,d.addClass(this.__closeButton,i.CLASS_CLOSE_BUTTON),o.closeOnTop?(d.addClass(this.__closeButton,i.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(d.addClass(this.__closeButton,i.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),d.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{o.closed===void 0&&(o.closed=!0);var g=document.createTextNode(o.name);d.addClass(g,"controller-name"),h=qe(t,g);var E=function(m){return m.preventDefault(),t.closed=!t.closed,!1};d.addClass(this.__ul,i.CLASS_CLOSED),d.addClass(h,"title"),d.bind(h,"click",E),o.closed||(this.closed=!1)}o.autoPlace&&(f.isUndefined(o.parent)&&(At&&(re=document.createElement("div"),d.addClass(re,St),d.addClass(re,i.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(re),At=!1),re.appendChild(this.domElement),d.addClass(this.domElement,i.CLASS_AUTO_PLACE)),this.parent||Ye(t,o.width)),this.__resizeHandler=function(){t.onResizeDebounced()},d.bind(window,"resize",this.__resizeHandler),d.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),d.bind(this.__ul,"transitionend",this.__resizeHandler),d.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),o.resizable&&Zi(this),l=function(){he&&localStorage.getItem(oe(t,"isLocal"))==="true"&&localStorage.setItem(oe(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=l;function w(){var v=t.getRoot();v.width+=1,f.defer(function(){v.width-=1})}o.parent||w()};C.toggleHide=function(){ze=!ze,f.each(Ft,function(i){i.domElement.style.display=ze?"none":""})};C.CLASS_AUTO_PLACE="a";C.CLASS_AUTO_PLACE_CONTAINER="ac";C.CLASS_MAIN="main";C.CLASS_CONTROLLER_ROW="cr";C.CLASS_TOO_TALL="taller-than-window";C.CLASS_CLOSED="closed";C.CLASS_CLOSE_BUTTON="close-button";C.CLASS_CLOSE_TOP="close-top";C.CLASS_CLOSE_BOTTOM="close-bottom";C.CLASS_DRAG="drag";C.DEFAULT_WIDTH=245;C.TEXT_CLOSED="Close Controls";C.TEXT_OPEN="Open Controls";C._keydownHandler=function(i){document.activeElement.type!=="text"&&(i.which===Tt||i.keyCode===Tt)&&C.toggleHide()};d.bind(window,"keydown",C._keydownHandler,!1);f.extend(C.prototype,{add:function(e,t){return _e(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return _e(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;f.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&re.removeChild(this.domElement);var e=this;f.each(this.__folders,function(t){e.removeFolder(t)}),d.unbind(window,"keydown",C._keydownHandler,!1),Rt(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var o=new C(t);this.__folders[e]=o;var a=qe(this,o.domElement);return d.addClass(a,"folder"),o},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],Rt(e);var t=this;f.each(e.__folders,function(o){e.removeFolder(o)}),f.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=d.getOffset(e.__ul).top,o=0;f.each(e.__ul.childNodes,function(a){e.autoPlace&&a===e.__save_row||(o+=d.getHeight(a))}),window.innerHeight-t-wt<o?(d.addClass(e.domElement,C.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-wt+"px"):(d.removeClass(e.domElement,C.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&f.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:f.debounce(function(){this.onResize()},50),remember:function(){if(f.isUndefined(me)&&(me=new ji,me.domElement.innerHTML=Yi),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;f.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&Qi(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&Ye(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=De(this)),e.folders={},f.each(this.__folders,function(t,o){e.folders[o]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=De(this),Xe(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[ge]=De(this,!0)),this.load.remembered[e]=De(this),this.preset=e,Ve(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){f.each(this.__controllers,function(t){this.getRoot().load.remembered?Nt(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),f.each(this.__folders,function(t){t.revert(t)}),e||Xe(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&Bt(this.__listening)},updateDisplay:function(){f.each(this.__controllers,function(e){e.updateDisplay()}),f.each(this.__folders,function(e){e.updateDisplay()})}});function qe(i,e,t){var o=document.createElement("li");return e&&o.appendChild(e),t?i.__ul.insertBefore(o,t):i.__ul.appendChild(o),i.onResize(),o}function Rt(i){d.unbind(window,"resize",i.__resizeHandler),i.saveToLocalStorageIfPossible&&d.unbind(window,"unload",i.saveToLocalStorageIfPossible)}function Xe(i,e){var t=i.__preset_select[i.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function qi(i,e,t){if(t.__li=e,t.__gui=i,f.extend(t,{options:function(h){if(arguments.length>1){var _=t.__li.nextElementSibling;return t.remove(),_e(i,t.object,t.property,{before:_,factoryArgs:[f.toArray(arguments)]})}if(f.isArray(h)||f.isObject(h)){var g=t.__li.nextElementSibling;return t.remove(),_e(i,t.object,t.property,{before:g,factoryArgs:[h]})}},name:function(h){return t.__li.firstElementChild.firstElementChild.innerHTML=h,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof Le){var o=new ve(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});f.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(l){var h=t[l],_=o[l];t[l]=o[l]=function(){var g=Array.prototype.slice.call(arguments);return _.apply(o,g),h.apply(t,g)}}),d.addClass(e,"has-slider"),t.domElement.insertBefore(o.domElement,t.domElement.firstElementChild)}else if(t instanceof ve){var a=function(h){if(f.isNumber(t.__min)&&f.isNumber(t.__max)){var _=t.__li.firstElementChild.firstElementChild.innerHTML,g=t.__gui.__listening.indexOf(t)>-1;t.remove();var E=_e(i,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return E.name(_),g&&E.listen(),E}return h};t.min=f.compose(a,t.min),t.max=f.compose(a,t.max)}else t instanceof Ke?(d.bind(e,"click",function(){d.fakeEvent(t.__checkbox,"click")}),d.bind(t.__checkbox,"click",function(l){l.stopPropagation()})):t instanceof Je?(d.bind(e,"click",function(){d.fakeEvent(t.__button,"click")}),d.bind(e,"mouseover",function(){d.addClass(t.__button,"hover")}),d.bind(e,"mouseout",function(){d.removeClass(t.__button,"hover")})):t instanceof Fe&&(d.addClass(e,"color"),t.updateDisplay=f.compose(function(l){return e.style.borderLeftColor=t.__color.toString(),l},t.updateDisplay),t.updateDisplay());t.setValue=f.compose(function(l){return i.getRoot().__preset_select&&t.isModified()&&Xe(i.getRoot(),!0),l},t.setValue)}function Nt(i,e){var t=i.getRoot(),o=t.__rememberedObjects.indexOf(e.object);if(o!==-1){var a=t.__rememberedObjectIndecesToControllers[o];if(a===void 0&&(a={},t.__rememberedObjectIndecesToControllers[o]=a),a[e.property]=e,t.load&&t.load.remembered){var l=t.load.remembered,h=void 0;if(l[i.preset])h=l[i.preset];else if(l[ge])h=l[ge];else return;if(h[o]&&h[o][e.property]!==void 0){var _=h[o][e.property];e.initialValue=_,e.setValue(_)}}}}function _e(i,e,t,o){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var a=void 0;if(o.color)a=new Fe(e,t);else{var l=[e,t].concat(o.factoryArgs);a=$i.apply(i,l)}o.before instanceof Z&&(o.before=o.before.__li),Nt(i,a),d.addClass(a.domElement,"c");var h=document.createElement("span");d.addClass(h,"property-name"),h.innerHTML=a.property;var _=document.createElement("div");_.appendChild(h),_.appendChild(a.domElement);var g=qe(i,_,o.before);return d.addClass(g,C.CLASS_CONTROLLER_ROW),a instanceof Fe?d.addClass(g,"color"):d.addClass(g,Ii(a.getValue())),qi(i,g,a),i.__controllers.push(a),a}function oe(i,e){return document.location.href+"."+e}function Ve(i,e,t){var o=document.createElement("option");o.innerHTML=e,o.value=e,i.__preset_select.appendChild(o),t&&(i.__preset_select.selectedIndex=i.__preset_select.length-1)}function Ct(i,e){e.style.display=i.useLocalStorage?"block":"none"}function Qi(i){var e=i.__save_row=document.createElement("li");d.addClass(i.domElement,"has-save"),i.__ul.insertBefore(e,i.__ul.firstChild),d.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",d.addClass(t,"button gears");var o=document.createElement("span");o.innerHTML="Save",d.addClass(o,"button"),d.addClass(o,"save");var a=document.createElement("span");a.innerHTML="New",d.addClass(a,"button"),d.addClass(a,"save-as");var l=document.createElement("span");l.innerHTML="Revert",d.addClass(l,"button"),d.addClass(l,"revert");var h=i.__preset_select=document.createElement("select");if(i.load&&i.load.remembered?f.each(i.load.remembered,function(v,m){Ve(i,m,m===i.preset)}):Ve(i,ge,!1),d.bind(h,"change",function(){for(var v=0;v<i.__preset_select.length;v++)i.__preset_select[v].innerHTML=i.__preset_select[v].value;i.preset=this.value}),e.appendChild(h),e.appendChild(t),e.appendChild(o),e.appendChild(a),e.appendChild(l),he){var _=document.getElementById("dg-local-explain"),g=document.getElementById("dg-local-storage"),E=document.getElementById("dg-save-locally");E.style.display="block",localStorage.getItem(oe(i,"isLocal"))==="true"&&g.setAttribute("checked","checked"),Ct(i,_),d.bind(g,"change",function(){i.useLocalStorage=!i.useLocalStorage,Ct(i,_)})}var w=document.getElementById("dg-new-constructor");d.bind(w,"keydown",function(v){v.metaKey&&(v.which===67||v.keyCode===67)&&me.hide()}),d.bind(t,"click",function(){w.innerHTML=JSON.stringify(i.getSaveObject(),void 0,2),me.show(),w.focus(),w.select()}),d.bind(o,"click",function(){i.save()}),d.bind(a,"click",function(){var v=prompt("Enter a new preset name.");v&&i.saveAs(v)}),d.bind(l,"click",function(){i.revert()})}function Zi(i){var e=void 0;i.__resize_handle=document.createElement("div"),f.extend(i.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(l){return l.preventDefault(),i.width+=e-l.clientX,i.onResize(),e=l.clientX,!1}function o(){d.removeClass(i.__closeButton,C.CLASS_DRAG),d.unbind(window,"mousemove",t),d.unbind(window,"mouseup",o)}function a(l){return l.preventDefault(),e=l.clientX,d.addClass(i.__closeButton,C.CLASS_DRAG),d.bind(window,"mousemove",t),d.bind(window,"mouseup",o),!1}d.bind(i.__resize_handle,"mousedown",a),d.bind(i.__closeButton,"mousedown",a),i.domElement.insertBefore(i.__resize_handle,i.domElement.firstElementChild)}function Ye(i,e){i.domElement.style.width=e+"px",i.__save_row&&i.autoPlace&&(i.__save_row.style.width=e+"px"),i.__closeButton&&(i.__closeButton.style.width=e+"px")}function De(i,e){var t={};return f.each(i.__rememberedObjects,function(o,a){var l={},h=i.__rememberedObjectIndecesToControllers[a];f.each(h,function(_,g){l[g]=e?_.initialValue:_.getValue()}),t[a]=l}),t}function en(i){for(var e=0;e<i.__preset_select.length;e++)i.__preset_select[e].value===i.preset&&(i.__preset_select.selectedIndex=e)}function Bt(i){i.length!==0&&Ki.call(window,function(){Bt(i)}),f.each(i,function(e){e.updateDisplay()})}var tn={Color:N,math:pe,interpret:Oe},nn={Controller:Z,BooleanController:Ke,OptionController:Ot,StringController:Lt,NumberController:je,NumberControllerBox:ve,NumberControllerSlider:Le,FunctionController:Je,ColorController:Fe},rn={dom:d},on={GUI:C},an=C,sn={color:tn,controllers:nn,dom:rn,gui:on,GUI:an},ln="./dist/LDR_LLL1_0.140c55bd.png";const un=`precision highp float;
attribute vec2 aPosition;
varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;
uniform vec2 texelSize;

void main () {
    vUv = aPosition * 0.5 + 0.5;
    vL = vUv - vec2(texelSize.x, 0.0);
    vR = vUv + vec2(texelSize.x, 0.0);
    vT = vUv + vec2(0.0, texelSize.y);
    vB = vUv - vec2(0.0, texelSize.y);
    gl_Position = vec4(aPosition, 0.0, 1.0);
}
`,dn=`
precision highp float;

attribute vec2 aPosition;
varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
uniform vec2 texelSize;

void main () {
    vUv = aPosition * 0.5 + 0.5;
    float offset = 1.33333333;
    vL = vUv - texelSize * offset;
    vR = vUv + texelSize * offset;
    gl_Position = vec4(aPosition, 0.0, 1.0);
}
`,cn=`
precision mediump float;
precision mediump sampler2D;

varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
uniform sampler2D uTexture;

void main () {
    vec4 sum = texture2D(uTexture, vUv) * 0.29411764;
    sum += texture2D(uTexture, vL) * 0.35294117;
    sum += texture2D(uTexture, vR) * 0.35294117;
    gl_FragColor = sum;
}
`,fn=`
precision mediump float;
precision mediump sampler2D;

varying highp vec2 vUv;
uniform sampler2D uTexture;

void main () {
    gl_FragColor = texture2D(uTexture, vUv);
}
`,hn=`
precision mediump float;
precision mediump sampler2D;

varying highp vec2 vUv;
uniform sampler2D uTexture;
uniform float value;

void main () {
    gl_FragColor = value * texture2D(uTexture, vUv);
}
`,mn=`
precision mediump float;

uniform vec4 color;

void main () {
    gl_FragColor = color;
}
`,_n=`
precision highp float;
precision highp sampler2D;

varying vec2 vUv;
uniform sampler2D uTexture;
uniform float aspectRatio;

#define SCALE 25.0

void main () {
    vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));
    float v = mod(uv.x + uv.y, 2.0);
    v = v * 0.1 + 0.8;
    gl_FragColor = vec4(vec3(v), 1.0);
}
`,pn=`
precision highp float; 
precision highp sampler2D; 
precision highp float;
varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;
uniform sampler2D uTexture;
uniform sampler2D uBloom;
uniform sampler2D uSunrays;
uniform sampler2D uDithering;
uniform vec2 ditherScale;
uniform vec2 texelSize;

vec3 linearToGamma (vec3 color) {
    color = max(color, vec3(0));
    return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
}

void main () {
    vec3 c = texture2D(uTexture, vUv).rgb;

#ifdef SHADING
    vec3 lc = texture2D(uTexture, vL).rgb;
    vec3 rc = texture2D(uTexture, vR).rgb;
    vec3 tc = texture2D(uTexture, vT).rgb;
    vec3 bc = texture2D(uTexture, vB).rgb;

    float dx = length(rc) - length(lc);
    float dy = length(tc) - length(bc);

    vec3 n = normalize(vec3(dx, dy, length(texelSize)));
    vec3 l = vec3(0.0, 0.0, 1.0);

    float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
    c *= diffuse;
#endif

#ifdef BLOOM
    vec3 bloom = texture2D(uBloom, vUv).rgb;
#endif

#ifdef SUNRAYS
    float sunrays = texture2D(uSunrays, vUv).r;
    c *= sunrays;
#ifdef BLOOM
    bloom *= sunrays;
#endif
#endif

#ifdef BLOOM
    float noise = texture2D(uDithering, vUv * ditherScale).r;
    noise = noise * 2.0 - 1.0;
    bloom += noise / 255.0;
    bloom = linearToGamma(bloom);
    c += bloom;
#endif

    float a = max(c.r, max(c.g, c.b));
    gl_FragColor = vec4(c, a);
}
`,vn=`
precision mediump float;
precision mediump sampler2D;

varying vec2 vUv;
uniform sampler2D uTexture;
uniform vec3 curve;
uniform float threshold;

void main () {
    vec3 c = texture2D(uTexture, vUv).rgb;
    float br = max(c.r, max(c.g, c.b));
    float rq = clamp(br - curve.x, 0.0, curve.y);
    rq = curve.z * rq * rq;
    c *= max(rq, br - threshold) / max(br, 0.0001);
    gl_FragColor = vec4(c, 0.0);
}
`,gn=`
precision mediump float;
precision mediump sampler2D;

varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;
uniform sampler2D uTexture;

void main () {
    vec4 sum = vec4(0.0);
    sum += texture2D(uTexture, vL);
    sum += texture2D(uTexture, vR);
    sum += texture2D(uTexture, vT);
    sum += texture2D(uTexture, vB);
    sum *= 0.25;
    gl_FragColor = sum;
}
`,bn=`
precision mediump float;
precision mediump sampler2D;

varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;
uniform sampler2D uTexture;
uniform float intensity;

void main () {
    vec4 sum = vec4(0.0);
    sum += texture2D(uTexture, vL);
    sum += texture2D(uTexture, vR);
    sum += texture2D(uTexture, vT);
    sum += texture2D(uTexture, vB);
    sum *= 0.25;
    gl_FragColor = sum * intensity;
}
`,xn=`
precision highp float;
precision highp sampler2D;

varying vec2 vUv;
uniform sampler2D uTexture;

void main () {
    vec4 c = texture2D(uTexture, vUv);
    float br = max(c.r, max(c.g, c.b));
    c.a = 1.0 - min(max(br * 20.0, 0.0), 0.8);
    gl_FragColor = c;
}
`,En=`
precision highp float;
precision highp sampler2D;

varying vec2 vUv;
uniform sampler2D uTexture;
uniform float weight;

#define ITERATIONS 16

void main () {
    float Density = 0.3;
    float Decay = 0.95;
    float Exposure = 0.7;

    vec2 coord = vUv;
    vec2 dir = vUv - 0.5;

    dir *= 1.0 / float(ITERATIONS) * Density;
    float illuminationDecay = 1.0;

    float color = texture2D(uTexture, vUv).a;

    for (int i = 0; i < ITERATIONS; i++)
    {
        coord -= dir;
        float col = texture2D(uTexture, coord).a;
        color += col * illuminationDecay * weight;
        illuminationDecay *= Decay;
    }

    gl_FragColor = vec4(color * Exposure, 0.0, 0.0, 1.0);
}
`,yn=`
precision highp float;
precision highp sampler2D;

varying vec2 vUv;
uniform sampler2D uTarget;
uniform float aspectRatio;
uniform vec3 color;
uniform vec2 point;
uniform float radius;

void main () {
    vec2 p = vUv - point.xy;
    p.x *= aspectRatio;
    vec3 splat = exp(-dot(p, p) / radius) * color;
    vec3 base = texture2D(uTarget, vUv).xyz;
    gl_FragColor = vec4(base + splat, 1.0);
}
`,Sn=`
precision highp float;
precision highp sampler2D;

varying vec2 vUv;
uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform vec2 texelSize;
uniform vec2 dyeTexelSize;
uniform float dt;
uniform float dissipation;

vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
    vec2 st = uv / tsize - 0.5;

    vec2 iuv = floor(st);
    vec2 fuv = fract(st);

    vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
    vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
    vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
    vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

    return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
}

void main () {
#ifdef MANUAL_FILTERING
    vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
    vec4 result = bilerp(uSource, coord, dyeTexelSize);
#else
    vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
    vec4 result = texture2D(uSource, coord);
#endif
    float decay = 1.0 + dissipation * dt;
    gl_FragColor = result / decay;
}`,Tn=`
precision mediump float;
precision mediump sampler2D;

varying highp vec2 vUv;
varying highp vec2 vL;
varying highp vec2 vR;
varying highp vec2 vT;
varying highp vec2 vB;
uniform sampler2D uVelocity;

void main () {
    float L = texture2D(uVelocity, vL).x;
    float R = texture2D(uVelocity, vR).x;
    float T = texture2D(uVelocity, vT).y;
    float B = texture2D(uVelocity, vB).y;

    vec2 C = texture2D(uVelocity, vUv).xy;
    if (vL.x < 0.0) { L = -C.x; }
    if (vR.x > 1.0) { R = -C.x; }
    if (vT.y > 1.0) { T = -C.y; }
    if (vB.y < 0.0) { B = -C.y; }

    float div = 0.5 * (R - L + T - B);
    gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
}
`,wn=`
precision mediump float;
precision mediump sampler2D;

varying highp vec2 vUv;
varying highp vec2 vL;
varying highp vec2 vR;
varying highp vec2 vT;
varying highp vec2 vB;
uniform sampler2D uVelocity;

void main () {
    float L = texture2D(uVelocity, vL).y;
    float R = texture2D(uVelocity, vR).y;
    float T = texture2D(uVelocity, vT).x;
    float B = texture2D(uVelocity, vB).x;
    float vorticity = R - L - T + B;
    gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
}
`,An=`
precision highp float;
precision highp sampler2D;

varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;
uniform sampler2D uVelocity;
uniform sampler2D uCurl;
uniform float curl;
uniform float dt;

void main () {
    float L = texture2D(uCurl, vL).x;
    float R = texture2D(uCurl, vR).x;
    float T = texture2D(uCurl, vT).x;
    float B = texture2D(uCurl, vB).x;
    float C = texture2D(uCurl, vUv).x;

    vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
    force /= length(force) + 0.0001;
    force *= curl * C;
    force.y *= -1.0;

    vec2 velocity = texture2D(uVelocity, vUv).xy;
    velocity += force * dt;
    velocity = min(max(velocity, -1000.0), 1000.0);
    gl_FragColor = vec4(velocity, 0.0, 1.0);
}
`,Rn=`
precision mediump float;
precision mediump sampler2D;

varying highp vec2 vUv;
varying highp vec2 vL;
varying highp vec2 vR;
varying highp vec2 vT;
varying highp vec2 vB;
uniform sampler2D uPressure;
uniform sampler2D uDivergence;

void main () {
    float L = texture2D(uPressure, vL).x;
    float R = texture2D(uPressure, vR).x;
    float T = texture2D(uPressure, vT).x;
    float B = texture2D(uPressure, vB).x;
    float C = texture2D(uPressure, vUv).x;
    float divergence = texture2D(uDivergence, vUv).x;
    float pressure = (L + R + B + T - divergence) * 0.25;
    gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
}
`,Cn=`
precision mediump float;
precision mediump sampler2D;

varying highp vec2 vUv;
varying highp vec2 vL;
varying highp vec2 vR;
varying highp vec2 vT;
varying highp vec2 vB;
uniform sampler2D uPressure;
uniform sampler2D uVelocity;

void main () {
    float L = texture2D(uPressure, vL).x;
    float R = texture2D(uPressure, vR).x;
    float T = texture2D(uPressure, vT).x;
    float B = texture2D(uPressure, vB).x;
    vec2 velocity = texture2D(uVelocity, vUv).xy;
    velocity.xy -= vec2(R - L, T - B);
    gl_FragColor = vec4(velocity, 0.0, 1.0);
}
`;var F={ver1:un,ver2:dn,ver3:cn,ver4:fn,ver5:hn,ver6:mn,ver7:_n,ver8:pn,ver9:vn,ver10:gn,ver11:bn,ver12:xn,ver13:En,ver14:yn,ver15:Sn,ver16:Tn,ver17:wn,ver18:An,ver19:Rn,ver20:Cn};const Dn={setup(i){const e=Oi(null);let t=null,o,a,l,h,_,g,E=null;return Li(w=>{const v=e.value;dt();let m={SIM_RESOLUTION:128,DYE_RESOLUTION:1024,CAPTURE_RESOLUTION:512,DENSITY_DISSIPATION:1,VELOCITY_DISSIPATION:.2,PRESSURE:.8,PRESSURE_ITERATIONS:20,CURL:30,SPLAT_RADIUS:.25,SPLAT_FORCE:6e3,SHADING:!0,COLORFUL:!0,COLOR_UPDATE_SPEED:10,PAUSED:!1,BACK_COLOR:{r:0,g:0,b:0},TRANSPARENT:!1,BLOOM:!0,BLOOM_ITERATIONS:8,BLOOM_RESOLUTION:256,BLOOM_INTENSITY:.8,BLOOM_THRESHOLD:.6,BLOOM_SOFT_KNEE:.7,SUNRAYS:!0,SUNRAYS_RESOLUTION:196,SUNRAYS_WEIGHT:1};function B(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[30,0,300]}let R=[],y=[];R.push(new B);const{gl:r,ext:D}=se(v);Qe()&&(m.DYE_RESOLUTION=512),D.supportLinearFiltering||(m.DYE_RESOLUTION=512,m.SHADING=!1,m.BLOOM=!1,m.SUNRAYS=!1),te();function se(n){const u={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let s=n.getContext("webgl2",u);const c=!!s;c||(s=n.getContext("webgl",u)||n.getContext("experimental-webgl",u));let p,b;c?(s.getExtension("EXT_color_buffer_float"),b=s.getExtension("OES_texture_float_linear")):(p=s.getExtension("OES_texture_half_float"),b=s.getExtension("OES_texture_half_float_linear")),s.clearColor(0,0,0,1);const x=c?s.HALF_FLOAT:p.HALF_FLOAT_OES;let S,A,M;return c?(S=P(s,s.RGBA16F,s.RGBA,x),A=P(s,s.RG16F,s.RG,x),M=P(s,s.R16F,s.RED,x)):(S=P(s,s.RGBA,s.RGBA,x),A=P(s,s.RGBA,s.RGBA,x),M=P(s,s.RGBA,s.RGBA,x)),{gl:s,ext:{formatRGBA:S,formatRG:A,formatR:M,halfFloatTexType:x,supportLinearFiltering:b}}}function P(n,u,s,c){if(!ee(n,u,s,c))switch(u){case n.R16F:return P(n,n.RG16F,n.RG,c);case n.RG16F:return P(n,n.RGBA16F,n.RGBA,c);default:return null}return{internalFormat:u,format:s}}function ee(n,u,s,c){let p=n.createTexture();n.bindTexture(n.TEXTURE_2D,p),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texImage2D(n.TEXTURE_2D,0,u,4,4,0,s,c,null);let b=n.createFramebuffer();return n.bindFramebuffer(n.FRAMEBUFFER,b),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,p,0),n.checkFramebufferStatus(n.FRAMEBUFFER)==n.FRAMEBUFFER_COMPLETE}function te(){var n=new sn.GUI({width:300});n.add(m,"DYE_RESOLUTION",{high:1024,medium:512,low:256,"very low":128}).name("quality").onFinishChange(we),n.add(m,"SIM_RESOLUTION",{32:32,64:64,128:128,256:256}).name("sim resolution").onFinishChange(we),n.add(m,"DENSITY_DISSIPATION",0,4).name("density diffusion"),n.add(m,"VELOCITY_DISSIPATION",0,4).name("velocity diffusion"),n.add(m,"PRESSURE",0,1).name("pressure"),n.add(m,"CURL",0,50).name("vorticity").step(1),n.add(m,"SPLAT_RADIUS",.01,1).name("splat radius"),n.add(m,"SHADING").name("shading").onFinishChange(Ae),n.add(m,"COLORFUL").name("colorful"),n.add(m,"PAUSED").name("paused").listen(),n.add({fun:()=>{y.push(parseInt(Math.random()*20)+5)}},"fun").name("Random splats");let u=n.addFolder("Bloom");u.add(m,"BLOOM").name("enabled").onFinishChange(Ae),u.add(m,"BLOOM_INTENSITY",.1,2).name("intensity"),u.add(m,"BLOOM_THRESHOLD",0,1).name("threshold");let s=n.addFolder("Sunrays");s.add(m,"SUNRAYS").name("enabled").onFinishChange(Ae),s.add(m,"SUNRAYS_WEIGHT",.3,1).name("weight");let c=n.addFolder("Capture");c.addColor(m,"BACK_COLOR").name("background color"),c.add(m,"TRANSPARENT").name("transparent"),c.add({fun:Ut},"fun").name("take screenshot");let p=n.add({fun:()=>{window.open("https://github.com/PavelDoGreat/WebGL-Fluid-Simulation")}},"fun").name("Github");p.__li.className="cr function bigFont",p.__li.style.borderLeft="3px solid #8C8C8C";let b=document.createElement("span");p.domElement.parentElement.appendChild(b),b.className="icon github";let x=n.add({fun:()=>{window.open("https://twitter.com/PavelDoGreat")}},"fun").name("Twitter");x.__li.className="cr function bigFont",x.__li.style.borderLeft="3px solid #8C8C8C";let S=document.createElement("span");x.domElement.parentElement.appendChild(S),S.className="icon twitter";let A=n.add({fun:()=>{window.open("https://discordapp.com/invite/CeqZDDE")}},"fun").name("Discord");A.__li.className="cr function bigFont",A.__li.style.borderLeft="3px solid #8C8C8C";let M=document.createElement("span");A.domElement.parentElement.appendChild(M),M.className="icon discord";let z=n.add({fun:()=>{window.open("http://onelink.to/5b58bn")}},"fun").name("Check out mobile app");z.__li.className="cr function appBigFont",z.__li.style.borderLeft="3px solid #00FF7F";let vt=document.createElement("span");z.domElement.parentElement.appendChild(vt),vt.className="icon app",Qe()&&n.close()}function Qe(){return/Mobi|Android/i.test(navigator.userAgent)}function Ut(){let n=de(m.CAPTURE_RESOLUTION),u=G(n.width,n.height,D.formatRGBA.internalFormat,D.formatRGBA.format,D.halfFloatTexType,r.NEAREST);ct(u);let s=kt(u);s=Pt(s,u.width,u.height);let p=It(s,u.width,u.height).toDataURL();Mt("fluid.png",p),URL.revokeObjectURL(p)}function kt(n){r.bindFramebuffer(r.FRAMEBUFFER,n.fbo);let u=n.width*n.height*4,s=new Float32Array(u);return r.readPixels(0,0,n.width,n.height,r.RGBA,r.FLOAT,s),s}function Pt(n,u,s){let c=new Uint8Array(n.length),p=0;for(let b=s-1;b>=0;b--)for(let x=0;x<u;x++){let S=b*u*4+x*4;c[S+0]=be(n[p+0])*255,c[S+1]=be(n[p+1])*255,c[S+2]=be(n[p+2])*255,c[S+3]=be(n[p+3])*255,p+=4}return c}function be(n){return Math.min(Math.max(n,0),1)}function It(n,u,s){let c=document.createElement("canvas"),p=c.getContext("2d");c.width=u,c.height=s;let b=p.createImageData(u,s);return b.data.set(n),p.putImageData(b,0,0),c}function Mt(n,u){let s=document.createElement("a");s.download=n,s.href=u,document.body.appendChild(s),s.click(),document.body.removeChild(s)}class Ht{constructor(u,s){this.vertexShader=u,this.fragmentShaderSource=s,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(u){let s=0;for(let p=0;p<u.length;p++)s+=Di(u[p]);let c=this.programs[s];if(c==null){let p=L(r.FRAGMENT_SHADER,this.fragmentShaderSource,u);c=Ze(this.vertexShader,p),this.programs[s]=c}c!=this.activeProgram&&(this.uniforms=et(c),this.activeProgram=c)}bind(){r.useProgram(this.activeProgram)}}class U{constructor(u,s){this.uniforms={},this.program=Ze(u,s),this.uniforms=et(this.program)}bind(){r.useProgram(this.program)}}function Ze(n,u){let s=r.createProgram();return r.attachShader(s,n),r.attachShader(s,u),r.linkProgram(s),r.getProgramParameter(s,r.LINK_STATUS)||console.trace(r.getProgramInfoLog(s)),s}function et(n){let u=[],s=r.getProgramParameter(n,r.ACTIVE_UNIFORMS);for(let c=0;c<s;c++){let p=r.getActiveUniform(n,c).name;u[p]=r.getUniformLocation(n,p)}return u}function L(n,u,s){u=Gt(u,s);const c=r.createShader(n);return r.shaderSource(c,u),r.compileShader(c),r.getShaderParameter(c,r.COMPILE_STATUS)||console.trace(r.getShaderInfoLog(c)),c}function Gt(n,u){if(u==null)return n;let s="";return u.forEach(c=>{s+="#define "+c+`
`}),s+n}const k=L(r.VERTEX_SHADER,F.ver1),zt=L(r.VERTEX_SHADER,F.ver2),Xt=L(r.FRAGMENT_SHADER,F.ver3),Vt=L(r.FRAGMENT_SHADER,F.ver4),Yt=L(r.FRAGMENT_SHADER,F.ver5),$t=L(r.FRAGMENT_SHADER,F.ver6),Wt=L(r.FRAGMENT_SHADER,F.ver7),Kt=F.ver8,jt=L(r.FRAGMENT_SHADER,F.ver9),Jt=L(r.FRAGMENT_SHADER,F.ver10),qt=L(r.FRAGMENT_SHADER,F.ver11),Qt=L(r.FRAGMENT_SHADER,F.ver12),Zt=L(r.FRAGMENT_SHADER,F.ver13),ei=L(r.FRAGMENT_SHADER,F.ver14),ti=L(r.FRAGMENT_SHADER,F.ver15,D.supportLinearFiltering?null:["MANUAL_FILTERING"]),ii=L(r.FRAGMENT_SHADER,F.ver16),ni=L(r.FRAGMENT_SHADER,F.ver17),ri=L(r.FRAGMENT_SHADER,F.ver18),oi=L(r.FRAGMENT_SHADER,F.ver19),ai=L(r.FRAGMENT_SHADER,F.ver20),O=(()=>(r.bindBuffer(r.ARRAY_BUFFER,r.createBuffer()),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),r.STATIC_DRAW),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,r.createBuffer()),r.bufferData(r.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),r.STATIC_DRAW),r.vertexAttribPointer(0,2,r.FLOAT,!1,0,0),r.enableVertexAttribArray(0),(n,u=!1)=>{n==null?(r.viewport(0,0,r.drawingBufferWidth,r.drawingBufferHeight),r.bindFramebuffer(r.FRAMEBUFFER,null)):(r.viewport(0,0,n.width,n.height),r.bindFramebuffer(r.FRAMEBUFFER,n.fbo)),u&&(r.clearColor(0,0,0,1),r.clear(r.COLOR_BUFFER_BIT)),r.drawElements(r.TRIANGLES,6,r.UNSIGNED_SHORT,0)}))();let I,T,Ne,Be,W,Ue,ie=[],xe,tt,it=di(ln);const le=new U(zt,Xt),nt=new U(k,Vt),ke=new U(k,Yt),rt=new U(k,$t),ot=new U(k,Wt),Ee=new U(k,jt),ue=new U(k,Jt),ye=new U(k,qt),at=new U(k,Qt),Pe=new U(k,Zt),K=new U(k,ei),H=new U(k,ti),Ie=new U(k,ii),Me=new U(k,ni),ne=new U(k,ri),Se=new U(k,oi),Te=new U(k,ai),j=new Ht(k,Kt);function we(){let n=de(m.SIM_RESOLUTION),u=de(m.DYE_RESOLUTION);const s=D.halfFloatTexType,c=D.formatRGBA,p=D.formatRG,b=D.formatR,x=D.supportLinearFiltering?r.LINEAR:r.NEAREST;r.disable(r.BLEND),I==null?I=He(u.width,u.height,c.internalFormat,c.format,s,x):I=st(I,u.width,u.height,c.internalFormat,c.format,s,x),T==null?T=He(n.width,n.height,p.internalFormat,p.format,s,x):T=st(T,n.width,n.height,p.internalFormat,p.format,s,x),Ne=G(n.width,n.height,b.internalFormat,b.format,s,r.NEAREST),Be=G(n.width,n.height,b.internalFormat,b.format,s,r.NEAREST),W=He(n.width,n.height,b.internalFormat,b.format,s,r.NEAREST),si(),li()}function si(){let n=de(m.BLOOM_RESOLUTION);const u=D.halfFloatTexType,s=D.formatRGBA,c=D.supportLinearFiltering?r.LINEAR:r.NEAREST;Ue=G(n.width,n.height,s.internalFormat,s.format,u,c),ie.length=0;for(let p=0;p<m.BLOOM_ITERATIONS;p++){let b=n.width>>p+1,x=n.height>>p+1;if(b<2||x<2)break;let S=G(b,x,s.internalFormat,s.format,u,c);ie.push(S)}}function li(){let n=de(m.SUNRAYS_RESOLUTION);const u=D.halfFloatTexType,s=D.formatR,c=D.supportLinearFiltering?r.LINEAR:r.NEAREST;xe=G(n.width,n.height,s.internalFormat,s.format,u,c),tt=G(n.width,n.height,s.internalFormat,s.format,u,c)}function G(n,u,s,c,p,b){r.activeTexture(r.TEXTURE0);let x=r.createTexture();r.bindTexture(r.TEXTURE_2D,x),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,b),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,b),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texImage2D(r.TEXTURE_2D,0,s,n,u,0,c,p,null);let S=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,S),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,x,0),r.viewport(0,0,n,u),r.clear(r.COLOR_BUFFER_BIT);let A=1/n,M=1/u;return{texture:x,fbo:S,width:n,height:u,texelSizeX:A,texelSizeY:M,attach(z){return r.activeTexture(r.TEXTURE0+z),r.bindTexture(r.TEXTURE_2D,x),z}}}function He(n,u,s,c,p,b){let x=G(n,u,s,c,p,b),S=G(n,u,s,c,p,b);return{width:n,height:u,texelSizeX:x.texelSizeX,texelSizeY:x.texelSizeY,get read(){return x},set read(A){x=A},get write(){return S},set write(A){S=A},swap(){let A=x;x=S,S=A}}}function ui(n,u,s,c,p,b,x){let S=G(u,s,c,p,b,x);return nt.bind(),r.uniform1i(nt.uniforms.uTexture,n.attach(0)),O(S),S}function st(n,u,s,c,p,b,x){return n.width==u&&n.height==s||(n.read=ui(n.read,u,s,c,p,b,x),n.write=G(u,s,c,p,b,x),n.width=u,n.height=s,n.texelSizeX=1/u,n.texelSizeY=1/s),n}function di(n){let u=r.createTexture();r.bindTexture(r.TEXTURE_2D,u),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.REPEAT),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.REPEAT),r.texImage2D(r.TEXTURE_2D,0,r.RGB,1,1,0,r.RGB,r.UNSIGNED_BYTE,new Uint8Array([255,255,255]));let s={texture:u,width:1,height:1,attach(p){return r.activeTexture(r.TEXTURE0+p),r.bindTexture(r.TEXTURE_2D,u),p}},c=new Image;return c.onload=()=>{s.width=c.width,s.height=c.height,r.bindTexture(r.TEXTURE_2D,u),r.texImage2D(r.TEXTURE_2D,0,r.RGB,r.RGB,r.UNSIGNED_BYTE,c)},c.src=n,s}function Ae(){let n=[];m.SHADING&&n.push("SHADING"),m.BLOOM&&n.push("BLOOM"),m.SUNRAYS&&n.push("SUNRAYS"),j.setKeywords(n)}Ae(),we(),ft(parseInt(Math.random()*20)+5);let lt=Date.now(),Re=0;ut();function ut(){const n=ci();dt()&&we(),fi(n),hi(),m.PAUSED||mi(n),ct(null),t=requestAnimationFrame(ut)}function ci(){let n=Date.now(),u=(n-lt)/1e3;return u=Math.min(u,.016666),lt=n,u}function dt(){let n=Y(v.clientWidth),u=Y(v.clientHeight);return v.width!=n||v.height!=u?(v.width=n,v.height=u,!0):!1}function fi(n){!m.COLORFUL||(Re+=n*m.COLOR_UPDATE_SPEED,Re>=1&&(Re=Ri(Re,0,1),R.forEach(u=>{u.color=Ge()})))}function hi(){y.length>0&&ft(y.pop()),R.forEach(n=>{n.moved&&(n.moved=!1,Ei(n))})}function mi(n){r.disable(r.BLEND),Me.bind(),r.uniform2f(Me.uniforms.texelSize,T.texelSizeX,T.texelSizeY),r.uniform1i(Me.uniforms.uVelocity,T.read.attach(0)),O(Be),ne.bind(),r.uniform2f(ne.uniforms.texelSize,T.texelSizeX,T.texelSizeY),r.uniform1i(ne.uniforms.uVelocity,T.read.attach(0)),r.uniform1i(ne.uniforms.uCurl,Be.attach(1)),r.uniform1f(ne.uniforms.curl,m.CURL),r.uniform1f(ne.uniforms.dt,n),O(T.write),T.swap(),Ie.bind(),r.uniform2f(Ie.uniforms.texelSize,T.texelSizeX,T.texelSizeY),r.uniform1i(Ie.uniforms.uVelocity,T.read.attach(0)),O(Ne),ke.bind(),r.uniform1i(ke.uniforms.uTexture,W.read.attach(0)),r.uniform1f(ke.uniforms.value,m.PRESSURE),O(W.write),W.swap(),Se.bind(),r.uniform2f(Se.uniforms.texelSize,T.texelSizeX,T.texelSizeY),r.uniform1i(Se.uniforms.uDivergence,Ne.attach(0));for(let s=0;s<m.PRESSURE_ITERATIONS;s++)r.uniform1i(Se.uniforms.uPressure,W.read.attach(1)),O(W.write),W.swap();Te.bind(),r.uniform2f(Te.uniforms.texelSize,T.texelSizeX,T.texelSizeY),r.uniform1i(Te.uniforms.uPressure,W.read.attach(0)),r.uniform1i(Te.uniforms.uVelocity,T.read.attach(1)),O(T.write),T.swap(),H.bind(),r.uniform2f(H.uniforms.texelSize,T.texelSizeX,T.texelSizeY),D.supportLinearFiltering||r.uniform2f(H.uniforms.dyeTexelSize,T.texelSizeX,T.texelSizeY);let u=T.read.attach(0);r.uniform1i(H.uniforms.uVelocity,u),r.uniform1i(H.uniforms.uSource,u),r.uniform1f(H.uniforms.dt,n),r.uniform1f(H.uniforms.dissipation,m.VELOCITY_DISSIPATION),O(T.write),T.swap(),D.supportLinearFiltering||r.uniform2f(H.uniforms.dyeTexelSize,I.texelSizeX,I.texelSizeY),r.uniform1i(H.uniforms.uVelocity,T.read.attach(0)),r.uniform1i(H.uniforms.uSource,I.read.attach(1)),r.uniform1f(H.uniforms.dissipation,m.DENSITY_DISSIPATION),O(I.write),I.swap()}function ct(n){m.BLOOM&&gi(I.read,Ue),m.SUNRAYS&&(bi(I.read,I.write,xe),xi(xe,tt,1)),n==null||!m.TRANSPARENT?(r.blendFunc(r.ONE,r.ONE_MINUS_SRC_ALPHA),r.enable(r.BLEND)):r.disable(r.BLEND),m.TRANSPARENT||_i(n,Ai(m.BACK_COLOR)),n==null&&m.TRANSPARENT&&pi(n),vi(n)}function _i(n,u){rt.bind(),r.uniform4f(rt.uniforms.color,u.r,u.g,u.b,1),O(n)}function pi(n){ot.bind(),r.uniform1f(ot.uniforms.aspectRatio,v.width/v.height),O(n)}function vi(n){let u=n==null?r.drawingBufferWidth:n.width,s=n==null?r.drawingBufferHeight:n.height;if(j.bind(),m.SHADING&&r.uniform2f(j.uniforms.texelSize,1/u,1/s),r.uniform1i(j.uniforms.uTexture,I.read.attach(0)),m.BLOOM){r.uniform1i(j.uniforms.uBloom,Ue.attach(1)),r.uniform1i(j.uniforms.uDithering,it.attach(2));let c=Ci(it,u,s);r.uniform2f(j.uniforms.ditherScale,c.x,c.y)}m.SUNRAYS&&r.uniform1i(j.uniforms.uSunrays,xe.attach(3)),O(n)}function gi(n,u){if(ie.length<2)return;let s=u;r.disable(r.BLEND),Ee.bind();let c=m.BLOOM_THRESHOLD*m.BLOOM_SOFT_KNEE+1e-4,p=m.BLOOM_THRESHOLD-c,b=c*2,x=.25/c;r.uniform3f(Ee.uniforms.curve,p,b,x),r.uniform1f(Ee.uniforms.threshold,m.BLOOM_THRESHOLD),r.uniform1i(Ee.uniforms.uTexture,n.attach(0)),O(s),ue.bind();for(let S=0;S<ie.length;S++){let A=ie[S];r.uniform2f(ue.uniforms.texelSize,s.texelSizeX,s.texelSizeY),r.uniform1i(ue.uniforms.uTexture,s.attach(0)),O(A),s=A}r.blendFunc(r.ONE,r.ONE),r.enable(r.BLEND);for(let S=ie.length-2;S>=0;S--){let A=ie[S];r.uniform2f(ue.uniforms.texelSize,s.texelSizeX,s.texelSizeY),r.uniform1i(ue.uniforms.uTexture,s.attach(0)),r.viewport(0,0,A.width,A.height),O(A),s=A}r.disable(r.BLEND),ye.bind(),r.uniform2f(ye.uniforms.texelSize,s.texelSizeX,s.texelSizeY),r.uniform1i(ye.uniforms.uTexture,s.attach(0)),r.uniform1f(ye.uniforms.intensity,m.BLOOM_INTENSITY),O(u)}function bi(n,u,s){r.disable(r.BLEND),at.bind(),r.uniform1i(at.uniforms.uTexture,n.attach(0)),O(u),Pe.bind(),r.uniform1f(Pe.uniforms.weight,m.SUNRAYS_WEIGHT),r.uniform1i(Pe.uniforms.uTexture,u.attach(0)),O(s)}function xi(n,u,s){le.bind();for(let c=0;c<s;c++)r.uniform2f(le.uniforms.texelSize,n.texelSizeX,0),r.uniform1i(le.uniforms.uTexture,n.attach(0)),O(u),r.uniform2f(le.uniforms.texelSize,0,n.texelSizeY),r.uniform1i(le.uniforms.uTexture,u.attach(0)),O(n)}function Ei(n){let u=n.deltaX*m.SPLAT_FORCE,s=n.deltaY*m.SPLAT_FORCE;ht(n.texcoordX,n.texcoordY,u,s,n.color)}function ft(n){for(let u=0;u<n;u++){const s=Ge();s.r*=10,s.g*=10,s.b*=10;const c=Math.random(),p=Math.random(),b=1e3*(Math.random()-.5),x=1e3*(Math.random()-.5);ht(c,p,b,x,s)}}function ht(n,u,s,c,p){K.bind(),r.uniform1i(K.uniforms.uTarget,T.read.attach(0)),r.uniform1f(K.uniforms.aspectRatio,v.width/v.height),r.uniform2f(K.uniforms.point,n,u),r.uniform3f(K.uniforms.color,s,c,0),r.uniform1f(K.uniforms.radius,yi(m.SPLAT_RADIUS/100)),O(T.write),T.swap(),r.uniform1i(K.uniforms.uTarget,I.read.attach(0)),r.uniform3f(K.uniforms.color,p.r,p.g,p.b),O(I.write),I.swap()}function yi(n){let u=v.width/v.height;return u>1&&(n*=u),n}o=n=>{let u=Y(n.offsetX),s=Y(n.offsetY),c=R.find(p=>p.id==-1);c==null&&(c=new B),mt(c,-1,u,s)},a=n=>{let u=R[0],s=Y(n.offsetX),c=Y(n.offsetY);_t(u,s,c)},l=()=>{pt(R[0])},h=n=>{n.preventDefault();const u=n.targetTouches;for(;u.length>=R.length;)R.push(new B);for(let s=0;s<u.length;s++){let c=Y(u[s].pageX),p=Y(u[s].pageY);mt(R[s+1],u[s].identifier,c,p)}},_=n=>{n.preventDefault();const u=n.targetTouches;for(let s=0;s<u.length;s++){let c=R[s+1];if(!c.down)continue;let p=Y(u[s].pageX),b=Y(u[s].pageY);_t(c,p,b)}},g=n=>{const u=n.changedTouches;for(let s=0;s<u.length;s++){let c=R.find(p=>p.id==u[s].identifier);c!=null&&pt(c)}},E=n=>{n.code==="KeyP"&&(m.PAUSED=!m.PAUSED),n.key===" "&&y.push(parseInt(Math.random()*20)+5)},v.addEventListener("mousedown",o),v.addEventListener("mousemove",a),window.addEventListener("mouseup",l),v.addEventListener("touchstart",h),v.addEventListener("touchmove",_,!1),window.addEventListener("touchend",g),window.addEventListener("keydown",E);function mt(n,u,s,c){n.id=u,n.down=!0,n.moved=!1,n.texcoordX=s/v.width,n.texcoordY=1-c/v.height,n.prevTexcoordX=n.texcoordX,n.prevTexcoordY=n.texcoordY,n.deltaX=0,n.deltaY=0,n.color=Ge()}function _t(n,u,s){n.prevTexcoordX=n.texcoordX,n.prevTexcoordY=n.texcoordY,n.texcoordX=u/v.width,n.texcoordY=1-s/v.height,n.deltaX=Si(n.texcoordX-n.prevTexcoordX),n.deltaY=Ti(n.texcoordY-n.prevTexcoordY),n.moved=Math.abs(n.deltaX)>0||Math.abs(n.deltaY)>0}function pt(n){n.down=!1}function Si(n){let u=v.width/v.height;return u<1&&(n*=u),n}function Ti(n){let u=v.width/v.height;return u>1&&(n/=u),n}function Ge(){let n=wi(Math.random(),1,1);return n.r*=.15,n.g*=.15,n.b*=.15,n}function wi(n,u,s){let c,p,b,x,S,A,M,z;switch(x=Math.floor(n*6),S=n*6-x,A=s*(1-u),M=s*(1-S*u),z=s*(1-(1-S)*u),x%6){case 0:c=s,p=z,b=A;break;case 1:c=M,p=s,b=A;break;case 2:c=A,p=s,b=z;break;case 3:c=A,p=M,b=s;break;case 4:c=z,p=A,b=s;break;case 5:c=s,p=A,b=M;break}return{r:c,g:p,b}}function Ai(n){return{r:n.r/255,g:n.g/255,b:n.b/255}}function Ri(n,u,s){let c=s-u;return c==0?u:(n-u)%c+u}function de(n){let u=r.drawingBufferWidth/r.drawingBufferHeight;u<1&&(u=1/u);let s=Math.round(n),c=Math.round(n*u);return r.drawingBufferWidth>r.drawingBufferHeight?{width:c,height:s}:{width:s,height:c}}function Ci(n,u,s){return{x:u/n.width,y:s/n.height}}function Y(n){let u=window.devicePixelRatio||1;return Math.floor(n*u)}function Di(n){if(n.length==0)return 0;let u=0;for(let s=0;s<n.length;s++)u=(u<<5)-u+n.charCodeAt(s),u|=0;return u}}),Fi(()=>{let w=document.getElementsByClassName("ac");w[0]&&w[0].removeChild(w[0].childNodes[0]),cancelAnimationFrame(t),t=null,e.value.removeEventListener("mousedown",o),e.value.removeEventListener("mousemove",a),window.removeEventListener("mouseup",l),e.value.removeEventListener("touchstart",h),e.value.removeEventListener("touchmove",_,!1),window.removeEventListener("touchend",g),window.removeEventListener("keydown",E)}),(w,v)=>(Ni(),Bi("canvas",{ref:(m,B)=>{B.webGl=m,e.value=m}},null,512))}};var Fn=Ui(Dn,[["__scopeId","data-v-283f3584"]]);export{Fn as default};
