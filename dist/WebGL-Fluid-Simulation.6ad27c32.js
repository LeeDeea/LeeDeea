import{t as xi,v as Ei,x as yi,o as Si,y as Ti}from"./vendor.ef7c6805.js";import{_ as wi}from"./plugin-vue_export-helper.2100c508.js";function Ai(i){if(!!i&&typeof window!="undefined"){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=i,document.head.appendChild(e),i}}function ae(i,e){var t=i.__state.conversionName.toString(),o=Math.round(i.r),a=Math.round(i.g),s=Math.round(i.b),f=i.a,_=Math.round(i.h),p=i.s.toFixed(1),E=i.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var T=i.hex.toString(16);T.length<6;)T="0"+T;return"#"+T}else{if(t==="CSS_RGB")return"rgb("+o+","+a+","+s+")";if(t==="CSS_RGBA")return"rgba("+o+","+a+","+s+","+f+")";if(t==="HEX")return"0x"+i.hex.toString(16);if(t==="RGB_ARRAY")return"["+o+","+a+","+s+"]";if(t==="RGBA_ARRAY")return"["+o+","+a+","+s+","+f+"]";if(t==="RGB_OBJ")return"{r:"+o+",g:"+a+",b:"+s+"}";if(t==="RGBA_OBJ")return"{r:"+o+",g:"+a+",b:"+s+",a:"+f+"}";if(t==="HSV_OBJ")return"{h:"+_+",s:"+p+",v:"+E+"}";if(t==="HSVA_OBJ")return"{h:"+_+",s:"+p+",v:"+E+",a:"+f+"}"}return"unknown format"}var dt=Array.prototype.forEach,de=Array.prototype.slice,c={BREAK:{},extend:function(e){return this.each(de.call(arguments,1),function(t){var o=this.isObject(t)?Object.keys(t):[];o.forEach(function(a){this.isUndefined(t[a])||(e[a]=t[a])}.bind(this))},this),e},defaults:function(e){return this.each(de.call(arguments,1),function(t){var o=this.isObject(t)?Object.keys(t):[];o.forEach(function(a){this.isUndefined(e[a])&&(e[a]=t[a])}.bind(this))},this),e},compose:function(){var e=de.call(arguments);return function(){for(var t=de.call(arguments),o=e.length-1;o>=0;o--)t=[e[o].apply(this,t)];return t[0]}},each:function(e,t,o){if(!!e){if(dt&&e.forEach&&e.forEach===dt)e.forEach(t,o);else if(e.length===e.length+0){var a=void 0,s=void 0;for(a=0,s=e.length;a<s;a++)if(a in e&&t.call(o,e[a],a)===this.BREAK)return}else for(var f in e)if(t.call(o,e[f],f)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,o){var a=void 0;return function(){var s=this,f=arguments;function _(){a=null,o||e.apply(s,f)}var p=o||!a;clearTimeout(a),a=setTimeout(_,t),p&&e.apply(s,f)}},toArray:function(e){return e.toArray?e.toArray():de.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(i){function e(t){return i.apply(this,arguments)}return e.toString=function(){return i.toString()},e}(function(i){return isNaN(i)}),isArray:Array.isArray||function(i){return i.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},Ri=[{litmus:c.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:ae},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:ae},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:ae},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:ae}}},{litmus:c.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:c.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:c.isObject,conversions:{RGBA_OBJ:{read:function(e){return c.isNumber(e.r)&&c.isNumber(e.g)&&c.isNumber(e.b)&&c.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return c.isNumber(e.r)&&c.isNumber(e.g)&&c.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return c.isNumber(e.h)&&c.isNumber(e.s)&&c.isNumber(e.v)&&c.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return c.isNumber(e.h)&&c.isNumber(e.s)&&c.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],ce=void 0,Se=void 0,Pe=function(){Se=!1;var e=arguments.length>1?c.toArray(arguments):arguments[0];return c.each(Ri,function(t){if(t.litmus(e))return c.each(t.conversions,function(o,a){if(ce=o.read(e),Se===!1&&ce!==!1)return Se=ce,ce.conversionName=a,ce.conversion=o,c.BREAK}),c.BREAK}),Se},ct=void 0,we={hsv_to_rgb:function(e,t,o){var a=Math.floor(e/60)%6,s=e/60-Math.floor(e/60),f=o*(1-t),_=o*(1-s*t),p=o*(1-(1-s)*t),E=[[o,p,f],[_,o,f],[f,o,p],[f,_,o],[p,f,o],[o,f,_]][a];return{r:E[0]*255,g:E[1]*255,b:E[2]*255}},rgb_to_hsv:function(e,t,o){var a=Math.min(e,t,o),s=Math.max(e,t,o),f=s-a,_=void 0,p=void 0;if(s!==0)p=f/s;else return{h:NaN,s:0,v:0};return e===s?_=(t-o)/f:t===s?_=2+(o-e)/f:_=4+(e-t)/f,_/=6,_<0&&(_+=1),{h:_*360,s:p,v:s/255}},rgb_to_hex:function(e,t,o){var a=this.hex_with_component(0,2,e);return a=this.hex_with_component(a,1,t),a=this.hex_with_component(a,0,o),a},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,o){return o<<(ct=t*8)|e&~(255<<ct)}},Ci=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},H=function(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")},z=function(){function i(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,t,o){return t&&i(e.prototype,t),o&&i(e,o),e}}(),j=function i(e,t,o){e===null&&(e=Function.prototype);var a=Object.getOwnPropertyDescriptor(e,t);if(a===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:i(s,t,o)}else{if("value"in a)return a.value;var f=a.get;return f===void 0?void 0:f.call(o)}},J=function(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(i,e):i.__proto__=e)},Q=function(i,e){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:i},B=function(){function i(){if(H(this,i),this.__state=Pe.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return z(i,[{key:"toString",value:function(){return ae(this)}},{key:"toHexString",value:function(){return ae(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),i}();function Xe(i,e,t){Object.defineProperty(i,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(B.recalculateRGB(this,e,t),this.__state[e])},set:function(a){this.__state.space!=="RGB"&&(B.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=a}})}function Ve(i,e){Object.defineProperty(i,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(B.recalculateHSV(this),this.__state[e])},set:function(o){this.__state.space!=="HSV"&&(B.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=o}})}B.recalculateRGB=function(i,e,t){if(i.__state.space==="HEX")i.__state[e]=we.component_from_hex(i.__state.hex,t);else if(i.__state.space==="HSV")c.extend(i.__state,we.hsv_to_rgb(i.__state.h,i.__state.s,i.__state.v));else throw new Error("Corrupted color state")};B.recalculateHSV=function(i){var e=we.rgb_to_hsv(i.r,i.g,i.b);c.extend(i.__state,{s:e.s,v:e.v}),c.isNaN(e.h)?c.isUndefined(i.__state.h)&&(i.__state.h=0):i.__state.h=e.h};B.COMPONENTS=["r","g","b","h","s","v","hex","a"];Xe(B.prototype,"r",2);Xe(B.prototype,"g",1);Xe(B.prototype,"b",0);Ve(B.prototype,"h");Ve(B.prototype,"s");Ve(B.prototype,"v");Object.defineProperty(B.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(B.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=we.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var ie=function(){function i(e,t){H(this,i),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return z(i,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),i}(),Di={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},Et={};c.each(Di,function(i,e){c.each(i,function(t){Et[t]=e})});var Oi=/(\d+(\.\d+)?)px/;function Y(i){if(i==="0"||c.isUndefined(i))return 0;var e=i.match(Oi);return c.isNull(e)?0:parseFloat(e[1])}var d={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,o){var a=o,s=t;c.isUndefined(s)&&(s=!0),c.isUndefined(a)&&(a=!0),e.style.position="absolute",s&&(e.style.left=0,e.style.right=0),a&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,o,a){var s=o||{},f=Et[t];if(!f)throw new Error("Event type "+t+" not supported.");var _=document.createEvent(f);switch(f){case"MouseEvents":{var p=s.x||s.clientX||0,E=s.y||s.clientY||0;_.initMouseEvent(t,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,p,E,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var T=_.initKeyboardEvent||_.initKeyEvent;c.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),T(t,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{_.initEvent(t,s.bubbles||!1,s.cancelable||!0);break}}c.defaults(_,a),e.dispatchEvent(_)},bind:function(e,t,o,a){var s=a||!1;return e.addEventListener?e.addEventListener(t,o,s):e.attachEvent&&e.attachEvent("on"+t,o),d},unbind:function(e,t,o,a){var s=a||!1;return e.removeEventListener?e.removeEventListener(t,o,s):e.detachEvent&&e.detachEvent("on"+t,o),d},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var o=e.className.split(/ +/);o.indexOf(t)===-1&&(o.push(t),e.className=o.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return d},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var o=e.className.split(/ +/),a=o.indexOf(t);a!==-1&&(o.splice(a,1),e.className=o.join(" "))}else e.className=void 0;return d},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return Y(t["border-left-width"])+Y(t["border-right-width"])+Y(t["padding-left"])+Y(t["padding-right"])+Y(t.width)},getHeight:function(e){var t=getComputedStyle(e);return Y(t["border-top-width"])+Y(t["border-bottom-width"])+Y(t["padding-top"])+Y(t["padding-bottom"])+Y(t.height)},getOffset:function(e){var t=e,o={left:0,top:0};if(t.offsetParent)do o.left+=t.offsetLeft,o.top+=t.offsetTop,t=t.offsetParent;while(t);return o},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},yt=function(i){J(e,i);function e(t,o){H(this,e);var a=Q(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,o)),s=a;a.__prev=a.getValue(),a.__checkbox=document.createElement("input"),a.__checkbox.setAttribute("type","checkbox");function f(){s.setValue(!s.__prev)}return d.bind(a.__checkbox,"change",f,!1),a.domElement.appendChild(a.__checkbox),a.updateDisplay(),a}return z(e,[{key:"setValue",value:function(o){var a=j(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,o);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),a}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),j(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(ie),Li=function(i){J(e,i);function e(t,o,a){H(this,e);var s=Q(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,o)),f=a,_=s;if(s.__select=document.createElement("select"),c.isArray(f)){var p={};c.each(f,function(E){p[E]=E}),f=p}return c.each(f,function(E,T){var m=document.createElement("option");m.innerHTML=T,m.setAttribute("value",E),_.__select.appendChild(m)}),s.updateDisplay(),d.bind(s.__select,"change",function(){var E=this.options[this.selectedIndex].value;_.setValue(E)}),s.domElement.appendChild(s.__select),s}return z(e,[{key:"setValue",value:function(o){var a=j(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,o);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),a}},{key:"updateDisplay",value:function(){return d.isActive(this.__select)?this:(this.__select.value=this.getValue(),j(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(ie),Fi=function(i){J(e,i);function e(t,o){H(this,e);var a=Q(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,o)),s=a;function f(){s.setValue(s.__input.value)}function _(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return a.__input=document.createElement("input"),a.__input.setAttribute("type","text"),d.bind(a.__input,"keyup",f),d.bind(a.__input,"change",f),d.bind(a.__input,"blur",_),d.bind(a.__input,"keydown",function(p){p.keyCode===13&&this.blur()}),a.updateDisplay(),a.domElement.appendChild(a.__input),a}return z(e,[{key:"updateDisplay",value:function(){return d.isActive(this.__input)||(this.__input.value=this.getValue()),j(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(ie);function ft(i){var e=i.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var St=function(i){J(e,i);function e(t,o,a){H(this,e);var s=Q(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,o)),f=a||{};return s.__min=f.min,s.__max=f.max,s.__step=f.step,c.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=ft(s.__impliedStep),s}return z(e,[{key:"setValue",value:function(o){var a=o;return this.__min!==void 0&&a<this.__min?a=this.__min:this.__max!==void 0&&a>this.__max&&(a=this.__max),this.__step!==void 0&&a%this.__step!==0&&(a=Math.round(a/this.__step)*this.__step),j(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,a)}},{key:"min",value:function(o){return this.__min=o,this}},{key:"max",value:function(o){return this.__max=o,this}},{key:"step",value:function(o){return this.__step=o,this.__impliedStep=o,this.__precision=ft(o),this}}]),e}(ie);function Bi(i,e){var t=Math.pow(10,e);return Math.round(i*t)/t}var Ae=function(i){J(e,i);function e(t,o,a){H(this,e);var s=Q(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,o,a));s.__truncationSuspended=!1;var f=s,_=void 0;function p(){var w=parseFloat(f.__input.value);c.isNaN(w)||f.setValue(w)}function E(){f.__onFinishChange&&f.__onFinishChange.call(f,f.getValue())}function T(){E()}function m(w){var y=_-w.clientY;f.setValue(f.getValue()+y*f.__impliedStep),_=w.clientY}function v(){d.unbind(window,"mousemove",m),d.unbind(window,"mouseup",v),E()}function N(w){d.bind(window,"mousemove",m),d.bind(window,"mouseup",v),_=w.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),d.bind(s.__input,"change",p),d.bind(s.__input,"blur",T),d.bind(s.__input,"mousedown",N),d.bind(s.__input,"keydown",function(w){w.keyCode===13&&(f.__truncationSuspended=!0,this.blur(),f.__truncationSuspended=!1,E())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return z(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():Bi(this.getValue(),this.__precision),j(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(St);function ht(i,e,t,o,a){return o+(a-o)*((i-e)/(t-e))}var Ie=function(i){J(e,i);function e(t,o,a,s,f){H(this,e);var _=Q(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,o,{min:a,max:s,step:f})),p=_;_.__background=document.createElement("div"),_.__foreground=document.createElement("div"),d.bind(_.__background,"mousedown",E),d.bind(_.__background,"touchstart",v),d.addClass(_.__background,"slider"),d.addClass(_.__foreground,"slider-fg");function E(y){document.activeElement.blur(),d.bind(window,"mousemove",T),d.bind(window,"mouseup",m),T(y)}function T(y){y.preventDefault();var n=p.__background.getBoundingClientRect();return p.setValue(ht(y.clientX,n.left,n.right,p.__min,p.__max)),!1}function m(){d.unbind(window,"mousemove",T),d.unbind(window,"mouseup",m),p.__onFinishChange&&p.__onFinishChange.call(p,p.getValue())}function v(y){y.touches.length===1&&(d.bind(window,"touchmove",N),d.bind(window,"touchend",w),N(y))}function N(y){var n=y.touches[0].clientX,D=p.__background.getBoundingClientRect();p.setValue(ht(n,D.left,D.right,p.__min,p.__max))}function w(){d.unbind(window,"touchmove",N),d.unbind(window,"touchend",w),p.__onFinishChange&&p.__onFinishChange.call(p,p.getValue())}return _.updateDisplay(),_.__background.appendChild(_.__foreground),_.domElement.appendChild(_.__background),_}return z(e,[{key:"updateDisplay",value:function(){var o=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=o*100+"%",j(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(St),Tt=function(i){J(e,i);function e(t,o,a){H(this,e);var s=Q(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,o)),f=s;return s.__button=document.createElement("div"),s.__button.innerHTML=a===void 0?"Fire":a,d.bind(s.__button,"click",function(_){return _.preventDefault(),f.fire(),!1}),d.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return z(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(ie),Me=function(i){J(e,i);function e(t,o){H(this,e);var a=Q(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,o));a.__color=new B(a.getValue()),a.__temp=new B(0);var s=a;a.domElement=document.createElement("div"),d.makeSelectable(a.domElement,!1),a.__selector=document.createElement("div"),a.__selector.className="selector",a.__saturation_field=document.createElement("div"),a.__saturation_field.className="saturation-field",a.__field_knob=document.createElement("div"),a.__field_knob.className="field-knob",a.__field_knob_border="2px solid ",a.__hue_knob=document.createElement("div"),a.__hue_knob.className="hue-knob",a.__hue_field=document.createElement("div"),a.__hue_field.className="hue-field",a.__input=document.createElement("input"),a.__input.type="text",a.__input_textShadow="0 1px 1px ",d.bind(a.__input,"keydown",function(y){y.keyCode===13&&m.call(this)}),d.bind(a.__input,"blur",m),d.bind(a.__selector,"mousedown",function(){d.addClass(this,"drag").bind(window,"mouseup",function(){d.removeClass(s.__selector,"drag")})}),d.bind(a.__selector,"touchstart",function(){d.addClass(this,"drag").bind(window,"touchend",function(){d.removeClass(s.__selector,"drag")})});var f=document.createElement("div");c.extend(a.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),c.extend(a.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:a.__field_knob_border+(a.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),c.extend(a.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),c.extend(a.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),c.extend(f.style,{width:"100%",height:"100%",background:"none"}),_t(f,"top","rgba(0,0,0,0)","#000"),c.extend(a.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),Ui(a.__hue_field),c.extend(a.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:a.__input_textShadow+"rgba(0,0,0,0.7)"}),d.bind(a.__saturation_field,"mousedown",_),d.bind(a.__saturation_field,"touchstart",_),d.bind(a.__field_knob,"mousedown",_),d.bind(a.__field_knob,"touchstart",_),d.bind(a.__hue_field,"mousedown",p),d.bind(a.__hue_field,"touchstart",p);function _(y){N(y),d.bind(window,"mousemove",N),d.bind(window,"touchmove",N),d.bind(window,"mouseup",E),d.bind(window,"touchend",E)}function p(y){w(y),d.bind(window,"mousemove",w),d.bind(window,"touchmove",w),d.bind(window,"mouseup",T),d.bind(window,"touchend",T)}function E(){d.unbind(window,"mousemove",N),d.unbind(window,"touchmove",N),d.unbind(window,"mouseup",E),d.unbind(window,"touchend",E),v()}function T(){d.unbind(window,"mousemove",w),d.unbind(window,"touchmove",w),d.unbind(window,"mouseup",T),d.unbind(window,"touchend",T),v()}function m(){var y=Pe(this.value);y!==!1?(s.__color.__state=y,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function v(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}a.__saturation_field.appendChild(f),a.__selector.appendChild(a.__field_knob),a.__selector.appendChild(a.__saturation_field),a.__selector.appendChild(a.__hue_field),a.__hue_field.appendChild(a.__hue_knob),a.domElement.appendChild(a.__input),a.domElement.appendChild(a.__selector),a.updateDisplay();function N(y){y.type.indexOf("touch")===-1&&y.preventDefault();var n=s.__saturation_field.getBoundingClientRect(),D=y.touches&&y.touches[0]||y,se=D.clientX,P=D.clientY,q=(se-n.left)/(n.right-n.left),Z=1-(P-n.top)/(n.bottom-n.top);return Z>1?Z=1:Z<0&&(Z=0),q>1?q=1:q<0&&(q=0),s.__color.v=Z,s.__color.s=q,s.setValue(s.__color.toOriginal()),!1}function w(y){y.type.indexOf("touch")===-1&&y.preventDefault();var n=s.__hue_field.getBoundingClientRect(),D=y.touches&&y.touches[0]||y,se=D.clientY,P=1-(se-n.top)/(n.bottom-n.top);return P>1?P=1:P<0&&(P=0),s.__color.h=P*360,s.setValue(s.__color.toOriginal()),!1}return a}return z(e,[{key:"updateDisplay",value:function(){var o=Pe(this.getValue());if(o!==!1){var a=!1;c.each(B.COMPONENTS,function(_){if(!c.isUndefined(o[_])&&!c.isUndefined(this.__color.__state[_])&&o[_]!==this.__color.__state[_])return a=!0,{}},this),a&&c.extend(this.__color.__state,o)}c.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,f=255-s;c.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,_t(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),c.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+f+","+f+","+f+",.7)"})}}]),e}(ie),Ni=["-moz-","-o-","-webkit-","-ms-",""];function _t(i,e,t,o){i.style.background="",c.each(Ni,function(a){i.style.cssText+="background: "+a+"linear-gradient("+e+", "+t+" 0%, "+o+" 100%); "})}function Ui(i){i.style.background="",i.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",i.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var ki={load:function(e,t){var o=t||document,a=o.createElement("link");a.type="text/css",a.rel="stylesheet",a.href=e,o.getElementsByTagName("head")[0].appendChild(a)},inject:function(e,t){var o=t||document,a=document.createElement("style");a.type="text/css",a.innerHTML=e;var s=o.getElementsByTagName("head")[0];try{s.appendChild(a)}catch{}}},Pi=`<div id="dg-save" class="dg dialogue">

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

</div>`,Ii=function(e,t){var o=e[t];return c.isArray(arguments[2])||c.isObject(arguments[2])?new Li(e,t,arguments[2]):c.isNumber(o)?c.isNumber(arguments[2])&&c.isNumber(arguments[3])?c.isNumber(arguments[4])?new Ie(e,t,arguments[2],arguments[3],arguments[4]):new Ie(e,t,arguments[2],arguments[3]):c.isNumber(arguments[4])?new Ae(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Ae(e,t,{min:arguments[2],max:arguments[3]}):c.isString(o)?new Fi(e,t):c.isFunction(o)?new Tt(e,t,""):c.isBoolean(o)?new yt(e,t):null};function Mi(i){setTimeout(i,1e3/60)}var Hi=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||Mi,zi=function(){function i(){H(this,i),this.backgroundElement=document.createElement("div"),c.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),d.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),c.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;d.bind(this.backgroundElement,"click",function(){e.hide()})}return z(i,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),c.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,o=function a(){t.domElement.style.display="none",t.backgroundElement.style.display="none",d.unbind(t.domElement,"webkitTransitionEnd",a),d.unbind(t.domElement,"transitionend",a),d.unbind(t.domElement,"oTransitionEnd",a)};d.bind(this.domElement,"webkitTransitionEnd",o),d.bind(this.domElement,"transitionend",o),d.bind(this.domElement,"oTransitionEnd",o),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-d.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-d.getHeight(this.domElement)/2+"px"}}]),i}(),Gi=Ai(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);ki.inject(Gi);var mt="dg",vt=72,pt=20,me="Default",fe=function(){try{return!!window.localStorage}catch{return!1}}(),he=void 0,gt=!0,re=void 0,ke=!1,wt=[],C=function i(e){var t=this,o=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),d.addClass(this.domElement,mt),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],o=c.defaults(o,{closeOnTop:!1,autoPlace:!0,width:i.DEFAULT_WIDTH}),o=c.defaults(o,{resizable:o.autoPlace,hideable:o.autoPlace}),c.isUndefined(o.load)?o.load={preset:me}:o.preset&&(o.load.preset=o.preset),c.isUndefined(o.parent)&&o.hideable&&wt.push(this),o.resizable=c.isUndefined(o.parent)&&o.resizable,o.autoPlace&&c.isUndefined(o.scrollable)&&(o.scrollable=!0);var a=fe&&localStorage.getItem(oe(this,"isLocal"))==="true",s=void 0,f=void 0;if(Object.defineProperties(this,{parent:{get:function(){return o.parent}},scrollable:{get:function(){return o.scrollable}},autoPlace:{get:function(){return o.autoPlace}},closeOnTop:{get:function(){return o.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:o.load.preset},set:function(v){t.parent?t.getRoot().preset=v:o.load.preset=v,$i(this),t.revert()}},width:{get:function(){return o.width},set:function(v){o.width=v,Ge(t,v)}},name:{get:function(){return o.name},set:function(v){o.name=v,f&&(f.innerHTML=o.name)}},closed:{get:function(){return o.closed},set:function(v){o.closed=v,o.closed?d.addClass(t.__ul,i.CLASS_CLOSED):d.removeClass(t.__ul,i.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=v?i.TEXT_OPEN:i.TEXT_CLOSED)}},load:{get:function(){return o.load}},useLocalStorage:{get:function(){return a},set:function(v){fe&&(a=v,v?d.bind(window,"unload",s):d.unbind(window,"unload",s),localStorage.setItem(oe(t,"isLocal"),v))}}}),c.isUndefined(o.parent)){if(this.closed=o.closed||!1,d.addClass(this.domElement,i.CLASS_MAIN),d.makeSelectable(this.domElement,!1),fe&&a){t.useLocalStorage=!0;var _=localStorage.getItem(oe(this,"gui"));_&&(o.load=JSON.parse(_))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=i.TEXT_CLOSED,d.addClass(this.__closeButton,i.CLASS_CLOSE_BUTTON),o.closeOnTop?(d.addClass(this.__closeButton,i.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(d.addClass(this.__closeButton,i.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),d.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{o.closed===void 0&&(o.closed=!0);var p=document.createTextNode(o.name);d.addClass(p,"controller-name"),f=Ye(t,p);var E=function(v){return v.preventDefault(),t.closed=!t.closed,!1};d.addClass(this.__ul,i.CLASS_CLOSED),d.addClass(f,"title"),d.bind(f,"click",E),o.closed||(this.closed=!1)}o.autoPlace&&(c.isUndefined(o.parent)&&(gt&&(re=document.createElement("div"),d.addClass(re,mt),d.addClass(re,i.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(re),gt=!1),re.appendChild(this.domElement),d.addClass(this.domElement,i.CLASS_AUTO_PLACE)),this.parent||Ge(t,o.width)),this.__resizeHandler=function(){t.onResizeDebounced()},d.bind(window,"resize",this.__resizeHandler),d.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),d.bind(this.__ul,"transitionend",this.__resizeHandler),d.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),o.resizable&&Yi(this),s=function(){fe&&localStorage.getItem(oe(t,"isLocal"))==="true"&&localStorage.setItem(oe(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function T(){var m=t.getRoot();m.width+=1,c.defer(function(){m.width-=1})}o.parent||T()};C.toggleHide=function(){ke=!ke,c.each(wt,function(i){i.domElement.style.display=ke?"none":""})};C.CLASS_AUTO_PLACE="a";C.CLASS_AUTO_PLACE_CONTAINER="ac";C.CLASS_MAIN="main";C.CLASS_CONTROLLER_ROW="cr";C.CLASS_TOO_TALL="taller-than-window";C.CLASS_CLOSED="closed";C.CLASS_CLOSE_BUTTON="close-button";C.CLASS_CLOSE_TOP="close-top";C.CLASS_CLOSE_BOTTOM="close-bottom";C.CLASS_DRAG="drag";C.DEFAULT_WIDTH=245;C.TEXT_CLOSED="Close Controls";C.TEXT_OPEN="Open Controls";C._keydownHandler=function(i){document.activeElement.type!=="text"&&(i.which===vt||i.keyCode===vt)&&C.toggleHide()};d.bind(window,"keydown",C._keydownHandler,!1);c.extend(C.prototype,{add:function(e,t){return _e(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return _e(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;c.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&re.removeChild(this.domElement);var e=this;c.each(this.__folders,function(t){e.removeFolder(t)}),d.unbind(window,"keydown",C._keydownHandler,!1),bt(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var o=new C(t);this.__folders[e]=o;var a=Ye(this,o.domElement);return d.addClass(a,"folder"),o},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],bt(e);var t=this;c.each(e.__folders,function(o){e.removeFolder(o)}),c.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=d.getOffset(e.__ul).top,o=0;c.each(e.__ul.childNodes,function(a){e.autoPlace&&a===e.__save_row||(o+=d.getHeight(a))}),window.innerHeight-t-pt<o?(d.addClass(e.domElement,C.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-pt+"px"):(d.removeClass(e.domElement,C.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&c.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:c.debounce(function(){this.onResize()},50),remember:function(){if(c.isUndefined(he)&&(he=new zi,he.domElement.innerHTML=Pi),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;c.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&Vi(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&Ge(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=Te(this)),e.folders={},c.each(this.__folders,function(t,o){e.folders[o]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=Te(this),He(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[me]=Te(this,!0)),this.load.remembered[e]=Te(this),this.preset=e,ze(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){c.each(this.__controllers,function(t){this.getRoot().load.remembered?At(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),c.each(this.__folders,function(t){t.revert(t)}),e||He(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&Rt(this.__listening)},updateDisplay:function(){c.each(this.__controllers,function(e){e.updateDisplay()}),c.each(this.__folders,function(e){e.updateDisplay()})}});function Ye(i,e,t){var o=document.createElement("li");return e&&o.appendChild(e),t?i.__ul.insertBefore(o,t):i.__ul.appendChild(o),i.onResize(),o}function bt(i){d.unbind(window,"resize",i.__resizeHandler),i.saveToLocalStorageIfPossible&&d.unbind(window,"unload",i.saveToLocalStorageIfPossible)}function He(i,e){var t=i.__preset_select[i.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function Xi(i,e,t){if(t.__li=e,t.__gui=i,c.extend(t,{options:function(f){if(arguments.length>1){var _=t.__li.nextElementSibling;return t.remove(),_e(i,t.object,t.property,{before:_,factoryArgs:[c.toArray(arguments)]})}if(c.isArray(f)||c.isObject(f)){var p=t.__li.nextElementSibling;return t.remove(),_e(i,t.object,t.property,{before:p,factoryArgs:[f]})}},name:function(f){return t.__li.firstElementChild.firstElementChild.innerHTML=f,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof Ie){var o=new Ae(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});c.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var f=t[s],_=o[s];t[s]=o[s]=function(){var p=Array.prototype.slice.call(arguments);return _.apply(o,p),f.apply(t,p)}}),d.addClass(e,"has-slider"),t.domElement.insertBefore(o.domElement,t.domElement.firstElementChild)}else if(t instanceof Ae){var a=function(f){if(c.isNumber(t.__min)&&c.isNumber(t.__max)){var _=t.__li.firstElementChild.firstElementChild.innerHTML,p=t.__gui.__listening.indexOf(t)>-1;t.remove();var E=_e(i,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return E.name(_),p&&E.listen(),E}return f};t.min=c.compose(a,t.min),t.max=c.compose(a,t.max)}else t instanceof yt?(d.bind(e,"click",function(){d.fakeEvent(t.__checkbox,"click")}),d.bind(t.__checkbox,"click",function(s){s.stopPropagation()})):t instanceof Tt?(d.bind(e,"click",function(){d.fakeEvent(t.__button,"click")}),d.bind(e,"mouseover",function(){d.addClass(t.__button,"hover")}),d.bind(e,"mouseout",function(){d.removeClass(t.__button,"hover")})):t instanceof Me&&(d.addClass(e,"color"),t.updateDisplay=c.compose(function(s){return e.style.borderLeftColor=t.__color.toString(),s},t.updateDisplay),t.updateDisplay());t.setValue=c.compose(function(s){return i.getRoot().__preset_select&&t.isModified()&&He(i.getRoot(),!0),s},t.setValue)}function At(i,e){var t=i.getRoot(),o=t.__rememberedObjects.indexOf(e.object);if(o!==-1){var a=t.__rememberedObjectIndecesToControllers[o];if(a===void 0&&(a={},t.__rememberedObjectIndecesToControllers[o]=a),a[e.property]=e,t.load&&t.load.remembered){var s=t.load.remembered,f=void 0;if(s[i.preset])f=s[i.preset];else if(s[me])f=s[me];else return;if(f[o]&&f[o][e.property]!==void 0){var _=f[o][e.property];e.initialValue=_,e.setValue(_)}}}}function _e(i,e,t,o){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var a=void 0;if(o.color)a=new Me(e,t);else{var s=[e,t].concat(o.factoryArgs);a=Ii.apply(i,s)}o.before instanceof ie&&(o.before=o.before.__li),At(i,a),d.addClass(a.domElement,"c");var f=document.createElement("span");d.addClass(f,"property-name"),f.innerHTML=a.property;var _=document.createElement("div");_.appendChild(f),_.appendChild(a.domElement);var p=Ye(i,_,o.before);return d.addClass(p,C.CLASS_CONTROLLER_ROW),a instanceof Me?d.addClass(p,"color"):d.addClass(p,Ci(a.getValue())),Xi(i,p,a),i.__controllers.push(a),a}function oe(i,e){return document.location.href+"."+e}function ze(i,e,t){var o=document.createElement("option");o.innerHTML=e,o.value=e,i.__preset_select.appendChild(o),t&&(i.__preset_select.selectedIndex=i.__preset_select.length-1)}function xt(i,e){e.style.display=i.useLocalStorage?"block":"none"}function Vi(i){var e=i.__save_row=document.createElement("li");d.addClass(i.domElement,"has-save"),i.__ul.insertBefore(e,i.__ul.firstChild),d.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",d.addClass(t,"button gears");var o=document.createElement("span");o.innerHTML="Save",d.addClass(o,"button"),d.addClass(o,"save");var a=document.createElement("span");a.innerHTML="New",d.addClass(a,"button"),d.addClass(a,"save-as");var s=document.createElement("span");s.innerHTML="Revert",d.addClass(s,"button"),d.addClass(s,"revert");var f=i.__preset_select=document.createElement("select");if(i.load&&i.load.remembered?c.each(i.load.remembered,function(m,v){ze(i,v,v===i.preset)}):ze(i,me,!1),d.bind(f,"change",function(){for(var m=0;m<i.__preset_select.length;m++)i.__preset_select[m].innerHTML=i.__preset_select[m].value;i.preset=this.value}),e.appendChild(f),e.appendChild(t),e.appendChild(o),e.appendChild(a),e.appendChild(s),fe){var _=document.getElementById("dg-local-explain"),p=document.getElementById("dg-local-storage"),E=document.getElementById("dg-save-locally");E.style.display="block",localStorage.getItem(oe(i,"isLocal"))==="true"&&p.setAttribute("checked","checked"),xt(i,_),d.bind(p,"change",function(){i.useLocalStorage=!i.useLocalStorage,xt(i,_)})}var T=document.getElementById("dg-new-constructor");d.bind(T,"keydown",function(m){m.metaKey&&(m.which===67||m.keyCode===67)&&he.hide()}),d.bind(t,"click",function(){T.innerHTML=JSON.stringify(i.getSaveObject(),void 0,2),he.show(),T.focus(),T.select()}),d.bind(o,"click",function(){i.save()}),d.bind(a,"click",function(){var m=prompt("Enter a new preset name.");m&&i.saveAs(m)}),d.bind(s,"click",function(){i.revert()})}function Yi(i){var e=void 0;i.__resize_handle=document.createElement("div"),c.extend(i.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(s){return s.preventDefault(),i.width+=e-s.clientX,i.onResize(),e=s.clientX,!1}function o(){d.removeClass(i.__closeButton,C.CLASS_DRAG),d.unbind(window,"mousemove",t),d.unbind(window,"mouseup",o)}function a(s){return s.preventDefault(),e=s.clientX,d.addClass(i.__closeButton,C.CLASS_DRAG),d.bind(window,"mousemove",t),d.bind(window,"mouseup",o),!1}d.bind(i.__resize_handle,"mousedown",a),d.bind(i.__closeButton,"mousedown",a),i.domElement.insertBefore(i.__resize_handle,i.domElement.firstElementChild)}function Ge(i,e){i.domElement.style.width=e+"px",i.__save_row&&i.autoPlace&&(i.__save_row.style.width=e+"px"),i.__closeButton&&(i.__closeButton.style.width=e+"px")}function Te(i,e){var t={};return c.each(i.__rememberedObjects,function(o,a){var s={},f=i.__rememberedObjectIndecesToControllers[a];c.each(f,function(_,p){s[p]=e?_.initialValue:_.getValue()}),t[a]=s}),t}function $i(i){for(var e=0;e<i.__preset_select.length;e++)i.__preset_select[e].value===i.preset&&(i.__preset_select.selectedIndex=e)}function Rt(i){i.length!==0&&Hi.call(window,function(){Rt(i)}),c.each(i,function(e){e.updateDisplay()})}var Wi="./dist/LDR_LLL1_0.140c55bd.png";const Ki=`precision highp float;
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
`,ji=`
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
`,Ji=`
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
`,Qi=`
precision mediump float;
precision mediump sampler2D;

varying highp vec2 vUv;
uniform sampler2D uTexture;

void main () {
    gl_FragColor = texture2D(uTexture, vUv);
}
`,qi=`
precision mediump float;
precision mediump sampler2D;

varying highp vec2 vUv;
uniform sampler2D uTexture;
uniform float value;

void main () {
    gl_FragColor = value * texture2D(uTexture, vUv);
}
`,Zi=`
precision mediump float;

uniform vec4 color;

void main () {
    gl_FragColor = color;
}
`,en=`
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
`,tn=`
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
`,nn=`
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
`,rn=`
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
`,on=`
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
`,an=`
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
`,sn=`
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
`,un=`
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
`,ln=`
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
}`,dn=`
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
`,cn=`
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
`,fn=`
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
`,hn=`
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
`,_n=`
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
`;var F={ver1:Ki,ver2:ji,ver3:Ji,ver4:Qi,ver5:qi,ver6:Zi,ver7:en,ver8:tn,ver9:nn,ver10:rn,ver11:on,ver12:an,ver13:sn,ver14:un,ver15:ln,ver16:dn,ver17:cn,ver18:fn,ver19:hn,ver20:_n};const mn={setup(i){const e=xi(null);let t=null,o,a,s,f,_,p,E=null;return Ei(T=>{const m=e.value;rt();let v={SIM_RESOLUTION:128,DYE_RESOLUTION:1024,CAPTURE_RESOLUTION:512,DENSITY_DISSIPATION:1,VELOCITY_DISSIPATION:.2,PRESSURE:.8,PRESSURE_ITERATIONS:20,CURL:30,SPLAT_RADIUS:.25,SPLAT_FORCE:6e3,SHADING:!0,COLORFUL:!0,COLOR_UPDATE_SPEED:10,PAUSED:!1,BACK_COLOR:{r:0,g:0,b:0},TRANSPARENT:!1,BLOOM:!0,BLOOM_ITERATIONS:8,BLOOM_RESOLUTION:256,BLOOM_INTENSITY:.8,BLOOM_THRESHOLD:.6,BLOOM_SOFT_KNEE:.7,SUNRAYS:!0,SUNRAYS_RESOLUTION:196,SUNRAYS_WEIGHT:1};function N(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[30,0,300]}let w=[],y=[];w.push(new N);const{gl:n,ext:D}=se(m);Z()&&(v.DYE_RESOLUTION=512),D.supportLinearFiltering||(v.DYE_RESOLUTION=512,v.SHADING=!1,v.BLOOM=!1,v.SUNRAYS=!1);function se(r){const l={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let u=r.getContext("webgl2",l);const h=!!u;h||(u=r.getContext("webgl",l)||r.getContext("experimental-webgl",l));let g,x;h?(u.getExtension("EXT_color_buffer_float"),x=u.getExtension("OES_texture_float_linear")):(g=u.getExtension("OES_texture_half_float"),x=u.getExtension("OES_texture_half_float_linear")),u.clearColor(0,0,0,1);const b=h?u.HALF_FLOAT:g.HALF_FLOAT_OES;let A,R,V;return h?(A=P(u,u.RGBA16F,u.RGBA,b),R=P(u,u.RG16F,u.RG,b),V=P(u,u.R16F,u.RED,b)):(A=P(u,u.RGBA,u.RGBA,b),R=P(u,u.RGBA,u.RGBA,b),V=P(u,u.RGBA,u.RGBA,b)),{gl:u,ext:{formatRGBA:A,formatRG:R,formatR:V,halfFloatTexType:b,supportLinearFiltering:x}}}function P(r,l,u,h){if(!q(r,l,u,h))switch(l){case r.R16F:return P(r,r.RG16F,r.RG,h);case r.RG16F:return P(r,r.RGBA16F,r.RGBA,h);default:return null}return{internalFormat:l,format:u}}function q(r,l,u,h){let g=r.createTexture();r.bindTexture(r.TEXTURE_2D,g),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.texImage2D(r.TEXTURE_2D,0,l,4,4,0,u,h,null);let x=r.createFramebuffer();return r.bindFramebuffer(r.FRAMEBUFFER,x),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,g,0),r.checkFramebufferStatus(r.FRAMEBUFFER)==r.FRAMEBUFFER_COMPLETE}function Z(){return/Mobi|Android/i.test(navigator.userAgent)}class Ct{constructor(l,u){this.vertexShader=l,this.fragmentShaderSource=u,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(l){let u=0;for(let g=0;g<l.length;g++)u+=bi(l[g]);let h=this.programs[u];if(h==null){let g=L(n.FRAGMENT_SHADER,this.fragmentShaderSource,l);h=$e(this.vertexShader,g),this.programs[u]=h}h!=this.activeProgram&&(this.uniforms=We(h),this.activeProgram=h)}bind(){n.useProgram(this.activeProgram)}}class U{constructor(l,u){this.uniforms={},this.program=$e(l,u),this.uniforms=We(this.program)}bind(){n.useProgram(this.program)}}function $e(r,l){let u=n.createProgram();return n.attachShader(u,r),n.attachShader(u,l),n.linkProgram(u),n.getProgramParameter(u,n.LINK_STATUS)||console.trace(n.getProgramInfoLog(u)),u}function We(r){let l=[],u=n.getProgramParameter(r,n.ACTIVE_UNIFORMS);for(let h=0;h<u;h++){let g=n.getActiveUniform(r,h).name;l[g]=n.getUniformLocation(r,g)}return l}function L(r,l,u){l=Dt(l,u);const h=n.createShader(r);return n.shaderSource(h,l),n.compileShader(h),n.getShaderParameter(h,n.COMPILE_STATUS)||console.trace(n.getShaderInfoLog(h)),h}function Dt(r,l){if(l==null)return r;let u="";return l.forEach(h=>{u+="#define "+h+`
`}),u+r}const k=L(n.VERTEX_SHADER,F.ver1),Ot=L(n.VERTEX_SHADER,F.ver2),Lt=L(n.FRAGMENT_SHADER,F.ver3),Ft=L(n.FRAGMENT_SHADER,F.ver4),Bt=L(n.FRAGMENT_SHADER,F.ver5),Nt=L(n.FRAGMENT_SHADER,F.ver6),Ut=L(n.FRAGMENT_SHADER,F.ver7),kt=F.ver8,Pt=L(n.FRAGMENT_SHADER,F.ver9),It=L(n.FRAGMENT_SHADER,F.ver10),Mt=L(n.FRAGMENT_SHADER,F.ver11),Ht=L(n.FRAGMENT_SHADER,F.ver12),zt=L(n.FRAGMENT_SHADER,F.ver13),Gt=L(n.FRAGMENT_SHADER,F.ver14),Xt=L(n.FRAGMENT_SHADER,F.ver15,D.supportLinearFiltering?null:["MANUAL_FILTERING"]),Vt=L(n.FRAGMENT_SHADER,F.ver16),Yt=L(n.FRAGMENT_SHADER,F.ver17),$t=L(n.FRAGMENT_SHADER,F.ver18),Wt=L(n.FRAGMENT_SHADER,F.ver19),Kt=L(n.FRAGMENT_SHADER,F.ver20),O=(()=>(n.bindBuffer(n.ARRAY_BUFFER,n.createBuffer()),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,n.createBuffer()),n.bufferData(n.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),n.STATIC_DRAW),n.vertexAttribPointer(0,2,n.FLOAT,!1,0,0),n.enableVertexAttribArray(0),(r,l=!1)=>{r==null?(n.viewport(0,0,n.drawingBufferWidth,n.drawingBufferHeight),n.bindFramebuffer(n.FRAMEBUFFER,null)):(n.viewport(0,0,r.width,r.height),n.bindFramebuffer(n.FRAMEBUFFER,r.fbo)),l&&(n.clearColor(0,0,0,1),n.clear(n.COLOR_BUFFER_BIT)),n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0)}))();let I,S,Re,Ce,$,De,ee=[],ve,Ke,je=qt(Wi);const ue=new U(Ot,Lt),Je=new U(k,Ft),Oe=new U(k,Bt),Qe=new U(k,Nt),qe=new U(k,Ut),pe=new U(k,Pt),le=new U(k,It),ge=new U(k,Mt),Ze=new U(k,Ht),Le=new U(k,zt),W=new U(k,Gt),M=new U(k,Xt),Fe=new U(k,Vt),Be=new U(k,Yt),ne=new U(k,$t),be=new U(k,Wt),xe=new U(k,Kt),K=new Ct(k,kt);function et(){let r=ye(v.SIM_RESOLUTION),l=ye(v.DYE_RESOLUTION);const u=D.halfFloatTexType,h=D.formatRGBA,g=D.formatRG,x=D.formatR,b=D.supportLinearFiltering?n.LINEAR:n.NEAREST;n.disable(n.BLEND),I==null?I=Ne(l.width,l.height,h.internalFormat,h.format,u,b):I=tt(I,l.width,l.height,h.internalFormat,h.format,u,b),S==null?S=Ne(r.width,r.height,g.internalFormat,g.format,u,b):S=tt(S,r.width,r.height,g.internalFormat,g.format,u,b),Re=G(r.width,r.height,x.internalFormat,x.format,u,n.NEAREST),Ce=G(r.width,r.height,x.internalFormat,x.format,u,n.NEAREST),$=Ne(r.width,r.height,x.internalFormat,x.format,u,n.NEAREST),jt(),Jt()}function jt(){let r=ye(v.BLOOM_RESOLUTION);const l=D.halfFloatTexType,u=D.formatRGBA,h=D.supportLinearFiltering?n.LINEAR:n.NEAREST;De=G(r.width,r.height,u.internalFormat,u.format,l,h),ee.length=0;for(let g=0;g<v.BLOOM_ITERATIONS;g++){let x=r.width>>g+1,b=r.height>>g+1;if(x<2||b<2)break;let A=G(x,b,u.internalFormat,u.format,l,h);ee.push(A)}}function Jt(){let r=ye(v.SUNRAYS_RESOLUTION);const l=D.halfFloatTexType,u=D.formatR,h=D.supportLinearFiltering?n.LINEAR:n.NEAREST;ve=G(r.width,r.height,u.internalFormat,u.format,l,h),Ke=G(r.width,r.height,u.internalFormat,u.format,l,h)}function G(r,l,u,h,g,x){n.activeTexture(n.TEXTURE0);let b=n.createTexture();n.bindTexture(n.TEXTURE_2D,b),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,x),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,x),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texImage2D(n.TEXTURE_2D,0,u,r,l,0,h,g,null);let A=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,A),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,b,0),n.viewport(0,0,r,l),n.clear(n.COLOR_BUFFER_BIT);let R=1/r,V=1/l;return{texture:b,fbo:A,width:r,height:l,texelSizeX:R,texelSizeY:V,attach(te){return n.activeTexture(n.TEXTURE0+te),n.bindTexture(n.TEXTURE_2D,b),te}}}function Ne(r,l,u,h,g,x){let b=G(r,l,u,h,g,x),A=G(r,l,u,h,g,x);return{width:r,height:l,texelSizeX:b.texelSizeX,texelSizeY:b.texelSizeY,get read(){return b},set read(R){b=R},get write(){return A},set write(R){A=R},swap(){let R=b;b=A,A=R}}}function Qt(r,l,u,h,g,x,b){let A=G(l,u,h,g,x,b);return Je.bind(),n.uniform1i(Je.uniforms.uTexture,r.attach(0)),O(A),A}function tt(r,l,u,h,g,x,b){return r.width==l&&r.height==u||(r.read=Qt(r.read,l,u,h,g,x,b),r.write=G(l,u,h,g,x,b),r.width=l,r.height=u,r.texelSizeX=1/l,r.texelSizeY=1/u),r}function qt(r){let l=n.createTexture();n.bindTexture(n.TEXTURE_2D,l),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.REPEAT),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.REPEAT),n.texImage2D(n.TEXTURE_2D,0,n.RGB,1,1,0,n.RGB,n.UNSIGNED_BYTE,new Uint8Array([255,255,255]));let u={texture:l,width:1,height:1,attach(g){return n.activeTexture(n.TEXTURE0+g),n.bindTexture(n.TEXTURE_2D,l),g}},h=new Image;return h.onload=()=>{u.width=h.width,u.height=h.height,n.bindTexture(n.TEXTURE_2D,l),n.texImage2D(n.TEXTURE_2D,0,n.RGB,n.RGB,n.UNSIGNED_BYTE,h)},h.src=r,u}function Zt(){let r=[];v.SHADING&&r.push("SHADING"),v.BLOOM&&r.push("BLOOM"),v.SUNRAYS&&r.push("SUNRAYS"),K.setKeywords(r)}Zt(),et(),ot(parseInt(Math.random()*20)+5);let it=Date.now(),Ee=0;nt();function nt(){const r=ei();rt()&&et(),ti(r),ii(),v.PAUSED||ni(r),ri(null),t=requestAnimationFrame(nt)}function ei(){let r=Date.now(),l=(r-it)/1e3;return l=Math.min(l,.016666),it=r,l}function rt(){let r=X(m.clientWidth),l=X(m.clientHeight);return m.width!=r||m.height!=l?(m.width=r,m.height=l,!0):!1}function ti(r){Ee+=r*v.COLOR_UPDATE_SPEED,Ee>=1&&(Ee=pi(Ee,0,1),w.forEach(l=>{l.color=Ue()}))}function ii(){y.length>0&&ot(y.pop()),w.forEach(r=>{r.moved&&(r.moved=!1,ci(r))})}function ni(r){n.disable(n.BLEND),Be.bind(),n.uniform2f(Be.uniforms.texelSize,S.texelSizeX,S.texelSizeY),n.uniform1i(Be.uniforms.uVelocity,S.read.attach(0)),O(Ce),ne.bind(),n.uniform2f(ne.uniforms.texelSize,S.texelSizeX,S.texelSizeY),n.uniform1i(ne.uniforms.uVelocity,S.read.attach(0)),n.uniform1i(ne.uniforms.uCurl,Ce.attach(1)),n.uniform1f(ne.uniforms.curl,v.CURL),n.uniform1f(ne.uniforms.dt,r),O(S.write),S.swap(),Fe.bind(),n.uniform2f(Fe.uniforms.texelSize,S.texelSizeX,S.texelSizeY),n.uniform1i(Fe.uniforms.uVelocity,S.read.attach(0)),O(Re),Oe.bind(),n.uniform1i(Oe.uniforms.uTexture,$.read.attach(0)),n.uniform1f(Oe.uniforms.value,v.PRESSURE),O($.write),$.swap(),be.bind(),n.uniform2f(be.uniforms.texelSize,S.texelSizeX,S.texelSizeY),n.uniform1i(be.uniforms.uDivergence,Re.attach(0));for(let u=0;u<v.PRESSURE_ITERATIONS;u++)n.uniform1i(be.uniforms.uPressure,$.read.attach(1)),O($.write),$.swap();xe.bind(),n.uniform2f(xe.uniforms.texelSize,S.texelSizeX,S.texelSizeY),n.uniform1i(xe.uniforms.uPressure,$.read.attach(0)),n.uniform1i(xe.uniforms.uVelocity,S.read.attach(1)),O(S.write),S.swap(),M.bind(),n.uniform2f(M.uniforms.texelSize,S.texelSizeX,S.texelSizeY),D.supportLinearFiltering||n.uniform2f(M.uniforms.dyeTexelSize,S.texelSizeX,S.texelSizeY);let l=S.read.attach(0);n.uniform1i(M.uniforms.uVelocity,l),n.uniform1i(M.uniforms.uSource,l),n.uniform1f(M.uniforms.dt,r),n.uniform1f(M.uniforms.dissipation,v.VELOCITY_DISSIPATION),O(S.write),S.swap(),D.supportLinearFiltering||n.uniform2f(M.uniforms.dyeTexelSize,I.texelSizeX,I.texelSizeY),n.uniform1i(M.uniforms.uVelocity,S.read.attach(0)),n.uniform1i(M.uniforms.uSource,I.read.attach(1)),n.uniform1f(M.uniforms.dissipation,v.DENSITY_DISSIPATION),O(I.write),I.swap()}function ri(r){v.BLOOM&&ui(I.read,De),v.SUNRAYS&&(li(I.read,I.write,ve),di(ve,Ke,1)),r==null||!v.TRANSPARENT?(n.blendFunc(n.ONE,n.ONE_MINUS_SRC_ALPHA),n.enable(n.BLEND)):n.disable(n.BLEND),oi(r,vi(v.BACK_COLOR)),r==null&&v.TRANSPARENT&&ai(r),si(r)}function oi(r,l){Qe.bind(),n.uniform4f(Qe.uniforms.color,l.r,l.g,l.b,1),O(r)}function ai(r){qe.bind(),n.uniform1f(qe.uniforms.aspectRatio,m.width/m.height),O(r)}function si(r){let l=r==null?n.drawingBufferWidth:r.width,u=r==null?n.drawingBufferHeight:r.height;if(K.bind(),v.SHADING&&n.uniform2f(K.uniforms.texelSize,1/l,1/u),n.uniform1i(K.uniforms.uTexture,I.read.attach(0)),v.BLOOM){n.uniform1i(K.uniforms.uBloom,De.attach(1)),n.uniform1i(K.uniforms.uDithering,je.attach(2));let h=gi(je,l,u);n.uniform2f(K.uniforms.ditherScale,h.x,h.y)}v.SUNRAYS&&n.uniform1i(K.uniforms.uSunrays,ve.attach(3)),O(r)}function ui(r,l){if(ee.length<2)return;let u=l;n.disable(n.BLEND),pe.bind();let h=v.BLOOM_THRESHOLD*v.BLOOM_SOFT_KNEE+1e-4,g=v.BLOOM_THRESHOLD-h,x=h*2,b=.25/h;n.uniform3f(pe.uniforms.curve,g,x,b),n.uniform1f(pe.uniforms.threshold,v.BLOOM_THRESHOLD),n.uniform1i(pe.uniforms.uTexture,r.attach(0)),O(u),le.bind();for(let A=0;A<ee.length;A++){let R=ee[A];n.uniform2f(le.uniforms.texelSize,u.texelSizeX,u.texelSizeY),n.uniform1i(le.uniforms.uTexture,u.attach(0)),O(R),u=R}n.blendFunc(n.ONE,n.ONE),n.enable(n.BLEND);for(let A=ee.length-2;A>=0;A--){let R=ee[A];n.uniform2f(le.uniforms.texelSize,u.texelSizeX,u.texelSizeY),n.uniform1i(le.uniforms.uTexture,u.attach(0)),n.viewport(0,0,R.width,R.height),O(R),u=R}n.disable(n.BLEND),ge.bind(),n.uniform2f(ge.uniforms.texelSize,u.texelSizeX,u.texelSizeY),n.uniform1i(ge.uniforms.uTexture,u.attach(0)),n.uniform1f(ge.uniforms.intensity,v.BLOOM_INTENSITY),O(l)}function li(r,l,u){n.disable(n.BLEND),Ze.bind(),n.uniform1i(Ze.uniforms.uTexture,r.attach(0)),O(l),Le.bind(),n.uniform1f(Le.uniforms.weight,v.SUNRAYS_WEIGHT),n.uniform1i(Le.uniforms.uTexture,l.attach(0)),O(u)}function di(r,l,u){ue.bind();for(let h=0;h<u;h++)n.uniform2f(ue.uniforms.texelSize,r.texelSizeX,0),n.uniform1i(ue.uniforms.uTexture,r.attach(0)),O(l),n.uniform2f(ue.uniforms.texelSize,0,r.texelSizeY),n.uniform1i(ue.uniforms.uTexture,l.attach(0)),O(r)}function ci(r){let l=r.deltaX*v.SPLAT_FORCE,u=r.deltaY*v.SPLAT_FORCE;at(r.texcoordX,r.texcoordY,l,u,r.color)}function ot(r){for(let l=0;l<r;l++){const u=Ue();u.r*=10,u.g*=10,u.b*=10;const h=Math.random(),g=Math.random(),x=1e3*(Math.random()-.5),b=1e3*(Math.random()-.5);at(h,g,x,b,u)}}function at(r,l,u,h,g){W.bind(),n.uniform1i(W.uniforms.uTarget,S.read.attach(0)),n.uniform1f(W.uniforms.aspectRatio,m.width/m.height),n.uniform2f(W.uniforms.point,r,l),n.uniform3f(W.uniforms.color,u,h,0),n.uniform1f(W.uniforms.radius,fi(v.SPLAT_RADIUS/100)),O(S.write),S.swap(),n.uniform1i(W.uniforms.uTarget,I.read.attach(0)),n.uniform3f(W.uniforms.color,g.r,g.g,g.b),O(I.write),I.swap()}function fi(r){let l=m.width/m.height;return l>1&&(r*=l),r}o=r=>{let l=X(r.offsetX),u=X(r.offsetY),h=w.find(g=>g.id==-1);h==null&&(h=new N),st(h,-1,l,u)},a=r=>{let l=w[0],u=X(r.offsetX),h=X(r.offsetY);ut(l,u,h)},s=()=>{lt(w[0])},f=r=>{r.preventDefault();const l=r.targetTouches;for(;l.length>=w.length;)w.push(new N);for(let u=0;u<l.length;u++){let h=X(l[u].pageX),g=X(l[u].pageY);st(w[u+1],l[u].identifier,h,g)}},_=r=>{r.preventDefault();const l=r.targetTouches;for(let u=0;u<l.length;u++){let h=w[u+1];if(!h.down)continue;let g=X(l[u].pageX),x=X(l[u].pageY);ut(h,g,x)}},p=r=>{const l=r.changedTouches;for(let u=0;u<l.length;u++){let h=w.find(g=>g.id==l[u].identifier);h!=null&&lt(h)}},E=r=>{r.code==="KeyP"&&(v.PAUSED=!v.PAUSED),r.key===" "&&y.push(parseInt(Math.random()*20)+5)},m.addEventListener("mousedown",o),m.addEventListener("mousemove",a),window.addEventListener("mouseup",s),m.addEventListener("touchstart",f),m.addEventListener("touchmove",_,!1),window.addEventListener("touchend",p),window.addEventListener("keydown",E);function st(r,l,u,h){r.id=l,r.down=!0,r.moved=!1,r.texcoordX=u/m.width,r.texcoordY=1-h/m.height,r.prevTexcoordX=r.texcoordX,r.prevTexcoordY=r.texcoordY,r.deltaX=0,r.deltaY=0,r.color=Ue()}function ut(r,l,u){r.prevTexcoordX=r.texcoordX,r.prevTexcoordY=r.texcoordY,r.texcoordX=l/m.width,r.texcoordY=1-u/m.height,r.deltaX=hi(r.texcoordX-r.prevTexcoordX),r.deltaY=_i(r.texcoordY-r.prevTexcoordY),r.moved=Math.abs(r.deltaX)>0||Math.abs(r.deltaY)>0}function lt(r){r.down=!1}function hi(r){let l=m.width/m.height;return l<1&&(r*=l),r}function _i(r){let l=m.width/m.height;return l>1&&(r/=l),r}function Ue(){let r=mi(Math.random(),1,1);return r.r*=.15,r.g*=.15,r.b*=.15,r}function mi(r,l,u){let h,g,x,b,A,R,V,te;switch(b=Math.floor(r*6),A=r*6-b,R=u*(1-l),V=u*(1-A*l),te=u*(1-(1-A)*l),b%6){case 0:h=u,g=te,x=R;break;case 1:h=V,g=u,x=R;break;case 2:h=R,g=u,x=te;break;case 3:h=R,g=V,x=u;break;case 4:h=te,g=R,x=u;break;case 5:h=u,g=R,x=V;break}return{r:h,g,b:x}}function vi(r){return{r:r.r/255,g:r.g/255,b:r.b/255}}function pi(r,l,u){let h=u-l;return h==0?l:(r-l)%h+l}function ye(r){let l=n.drawingBufferWidth/n.drawingBufferHeight;l<1&&(l=1/l);let u=Math.round(r),h=Math.round(r*l);return n.drawingBufferWidth>n.drawingBufferHeight?{width:h,height:u}:{width:u,height:h}}function gi(r,l,u){return{x:l/r.width,y:u/r.height}}function X(r){let l=window.devicePixelRatio||1;return Math.floor(r*l)}function bi(r){if(r.length==0)return 0;let l=0;for(let u=0;u<r.length;u++)l=(l<<5)-l+r.charCodeAt(u),l|=0;return l}}),yi(()=>{let T=document.getElementsByClassName("ac");T[0]&&T[0].removeChild(T[0].childNodes[0]),cancelAnimationFrame(t),t=null,e.value.removeEventListener("mousedown",o),e.value.removeEventListener("mousemove",a),window.removeEventListener("mouseup",s),e.value.removeEventListener("touchstart",f),e.value.removeEventListener("touchmove",_,!1),window.removeEventListener("touchend",p),window.removeEventListener("keydown",E)}),(T,m)=>(Si(),Ti("canvas",{ref:(v,N)=>{N.webGl=v,e.value=v}},null,512))}};var gn=wi(mn,[["__scopeId","data-v-03c69fa6"]]);export{gn as default};
