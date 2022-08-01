import{q as Ei,s as yi,o as Si,u as Ti}from"./vendor.67723c31.js";import{_ as wi}from"./plugin-vue_export-helper.2100c508.js";function Ri(i){if(!!i&&typeof window!="undefined"){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=i,document.head.appendChild(e),i}}function ae(i,e){var t=i.__state.conversionName.toString(),a=Math.round(i.r),r=Math.round(i.g),s=Math.round(i.b),f=i.a,_=Math.round(i.h),n=i.s.toFixed(1),v=i.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var w=i.hex.toString(16);w.length<6;)w="0"+w;return"#"+w}else{if(t==="CSS_RGB")return"rgb("+a+","+r+","+s+")";if(t==="CSS_RGBA")return"rgba("+a+","+r+","+s+","+f+")";if(t==="HEX")return"0x"+i.hex.toString(16);if(t==="RGB_ARRAY")return"["+a+","+r+","+s+"]";if(t==="RGBA_ARRAY")return"["+a+","+r+","+s+","+f+"]";if(t==="RGB_OBJ")return"{r:"+a+",g:"+r+",b:"+s+"}";if(t==="RGBA_OBJ")return"{r:"+a+",g:"+r+",b:"+s+",a:"+f+"}";if(t==="HSV_OBJ")return"{h:"+_+",s:"+n+",v:"+v+"}";if(t==="HSVA_OBJ")return"{h:"+_+",s:"+n+",v:"+v+",a:"+f+"}"}return"unknown format"}var mt=Array.prototype.forEach,de=Array.prototype.slice,h={BREAK:{},extend:function(e){return this.each(de.call(arguments,1),function(t){var a=this.isObject(t)?Object.keys(t):[];a.forEach(function(r){this.isUndefined(t[r])||(e[r]=t[r])}.bind(this))},this),e},defaults:function(e){return this.each(de.call(arguments,1),function(t){var a=this.isObject(t)?Object.keys(t):[];a.forEach(function(r){this.isUndefined(e[r])&&(e[r]=t[r])}.bind(this))},this),e},compose:function(){var e=de.call(arguments);return function(){for(var t=de.call(arguments),a=e.length-1;a>=0;a--)t=[e[a].apply(this,t)];return t[0]}},each:function(e,t,a){if(!!e){if(mt&&e.forEach&&e.forEach===mt)e.forEach(t,a);else if(e.length===e.length+0){var r=void 0,s=void 0;for(r=0,s=e.length;r<s;r++)if(r in e&&t.call(a,e[r],r)===this.BREAK)return}else for(var f in e)if(t.call(a,e[f],f)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,a){var r=void 0;return function(){var s=this,f=arguments;function _(){r=null,a||e.apply(s,f)}var n=a||!r;clearTimeout(r),r=setTimeout(_,t),n&&e.apply(s,f)}},toArray:function(e){return e.toArray?e.toArray():de.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(i){function e(t){return i.apply(this,arguments)}return e.toString=function(){return i.toString()},e}(function(i){return isNaN(i)}),isArray:Array.isArray||function(i){return i.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},Ai=[{litmus:h.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:ae},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:ae},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:ae},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:ae}}},{litmus:h.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:h.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:h.isObject,conversions:{RGBA_OBJ:{read:function(e){return h.isNumber(e.r)&&h.isNumber(e.g)&&h.isNumber(e.b)&&h.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return h.isNumber(e.r)&&h.isNumber(e.g)&&h.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return h.isNumber(e.h)&&h.isNumber(e.s)&&h.isNumber(e.v)&&h.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return h.isNumber(e.h)&&h.isNumber(e.s)&&h.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],ce=void 0,Re=void 0,Ce=function(){Re=!1;var e=arguments.length>1?h.toArray(arguments):arguments[0];return h.each(Ai,function(t){if(t.litmus(e))return h.each(t.conversions,function(a,r){if(ce=a.read(e),Re===!1&&ce!==!1)return Re=ce,ce.conversionName=r,ce.conversion=a,h.BREAK}),h.BREAK}),Re},pt=void 0,me={hsv_to_rgb:function(e,t,a){var r=Math.floor(e/60)%6,s=e/60-Math.floor(e/60),f=a*(1-t),_=a*(1-s*t),n=a*(1-(1-s)*t),v=[[a,n,f],[_,a,f],[f,a,n],[f,_,a],[n,f,a],[a,f,_]][r];return{r:v[0]*255,g:v[1]*255,b:v[2]*255}},rgb_to_hsv:function(e,t,a){var r=Math.min(e,t,a),s=Math.max(e,t,a),f=s-r,_=void 0,n=void 0;if(s!==0)n=f/s;else return{h:NaN,s:0,v:0};return e===s?_=(t-a)/f:t===s?_=2+(a-e)/f:_=4+(e-t)/f,_/=6,_<0&&(_+=1),{h:_*360,s:n,v:s/255}},rgb_to_hex:function(e,t,a){var r=this.hex_with_component(0,2,e);return r=this.hex_with_component(r,1,t),r=this.hex_with_component(r,0,a),r},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,a){return a<<(pt=t*8)|e&~(255<<pt)}},Ci=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},H=function(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")},G=function(){function i(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,a){return t&&i(e.prototype,t),a&&i(e,a),e}}(),J=function i(e,t,a){e===null&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(r===void 0){var s=Object.getPrototypeOf(e);return s===null?void 0:i(s,t,a)}else{if("value"in r)return r.value;var f=r.get;return f===void 0?void 0:f.call(a)}},q=function(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(i,e):i.__proto__=e)},Q=function(i,e){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:i},O=function(){function i(){if(H(this,i),this.__state=Ce.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return G(i,[{key:"toString",value:function(){return ae(this)}},{key:"toHexString",value:function(){return ae(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),i}();function Ve(i,e,t){Object.defineProperty(i,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(O.recalculateRGB(this,e,t),this.__state[e])},set:function(r){this.__state.space!=="RGB"&&(O.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=r}})}function Ye(i,e){Object.defineProperty(i,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(O.recalculateHSV(this),this.__state[e])},set:function(a){this.__state.space!=="HSV"&&(O.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=a}})}O.recalculateRGB=function(i,e,t){if(i.__state.space==="HEX")i.__state[e]=me.component_from_hex(i.__state.hex,t);else if(i.__state.space==="HSV")h.extend(i.__state,me.hsv_to_rgb(i.__state.h,i.__state.s,i.__state.v));else throw new Error("Corrupted color state")};O.recalculateHSV=function(i){var e=me.rgb_to_hsv(i.r,i.g,i.b);h.extend(i.__state,{s:e.s,v:e.v}),h.isNaN(e.h)?h.isUndefined(i.__state.h)&&(i.__state.h=0):i.__state.h=e.h};O.COMPONENTS=["r","g","b","h","s","v","hex","a"];Ve(O.prototype,"r",2);Ve(O.prototype,"g",1);Ve(O.prototype,"b",0);Ye(O.prototype,"h");Ye(O.prototype,"s");Ye(O.prototype,"v");Object.defineProperty(O.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(O.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=me.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var Z=function(){function i(e,t){H(this,i),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return G(i,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),i}(),Di={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},Rt={};h.each(Di,function(i,e){h.each(i,function(t){Rt[t]=e})});var Oi=/(\d+(\.\d+)?)px/;function X(i){if(i==="0"||h.isUndefined(i))return 0;var e=i.match(Oi);return h.isNull(e)?0:parseFloat(e[1])}var d={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,a){var r=a,s=t;h.isUndefined(s)&&(s=!0),h.isUndefined(r)&&(r=!0),e.style.position="absolute",s&&(e.style.left=0,e.style.right=0),r&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,a,r){var s=a||{},f=Rt[t];if(!f)throw new Error("Event type "+t+" not supported.");var _=document.createEvent(f);switch(f){case"MouseEvents":{var n=s.x||s.clientX||0,v=s.y||s.clientY||0;_.initMouseEvent(t,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,n,v,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var w=_.initKeyboardEvent||_.initKeyEvent;h.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),w(t,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{_.initEvent(t,s.bubbles||!1,s.cancelable||!0);break}}h.defaults(_,r),e.dispatchEvent(_)},bind:function(e,t,a,r){var s=r||!1;return e.addEventListener?e.addEventListener(t,a,s):e.attachEvent&&e.attachEvent("on"+t,a),d},unbind:function(e,t,a,r){var s=r||!1;return e.removeEventListener?e.removeEventListener(t,a,s):e.detachEvent&&e.detachEvent("on"+t,a),d},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var a=e.className.split(/ +/);a.indexOf(t)===-1&&(a.push(t),e.className=a.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return d},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var a=e.className.split(/ +/),r=a.indexOf(t);r!==-1&&(a.splice(r,1),e.className=a.join(" "))}else e.className=void 0;return d},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return X(t["border-left-width"])+X(t["border-right-width"])+X(t["padding-left"])+X(t["padding-right"])+X(t.width)},getHeight:function(e){var t=getComputedStyle(e);return X(t["border-top-width"])+X(t["border-bottom-width"])+X(t["padding-top"])+X(t["padding-bottom"])+X(t.height)},getOffset:function(e){var t=e,a={left:0,top:0};if(t.offsetParent)do a.left+=t.offsetLeft,a.top+=t.offsetTop,t=t.offsetParent;while(t);return a},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},$e=function(i){q(e,i);function e(t,a){H(this,e);var r=Q(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,a)),s=r;r.__prev=r.getValue(),r.__checkbox=document.createElement("input"),r.__checkbox.setAttribute("type","checkbox");function f(){s.setValue(!s.__prev)}return d.bind(r.__checkbox,"change",f,!1),r.domElement.appendChild(r.__checkbox),r.updateDisplay(),r}return G(e,[{key:"setValue",value:function(a){var r=J(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,a);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),r}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),J(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Z),At=function(i){q(e,i);function e(t,a,r){H(this,e);var s=Q(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,a)),f=r,_=s;if(s.__select=document.createElement("select"),h.isArray(f)){var n={};h.each(f,function(v){n[v]=v}),f=n}return h.each(f,function(v,w){var p=document.createElement("option");p.innerHTML=w,p.setAttribute("value",v),_.__select.appendChild(p)}),s.updateDisplay(),d.bind(s.__select,"change",function(){var v=this.options[this.selectedIndex].value;_.setValue(v)}),s.domElement.appendChild(s.__select),s}return G(e,[{key:"setValue",value:function(a){var r=J(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,a);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),r}},{key:"updateDisplay",value:function(){return d.isActive(this.__select)?this:(this.__select.value=this.getValue(),J(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(Z),Ct=function(i){q(e,i);function e(t,a){H(this,e);var r=Q(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,a)),s=r;function f(){s.setValue(s.__input.value)}function _(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),d.bind(r.__input,"keyup",f),d.bind(r.__input,"change",f),d.bind(r.__input,"blur",_),d.bind(r.__input,"keydown",function(n){n.keyCode===13&&this.blur()}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return G(e,[{key:"updateDisplay",value:function(){return d.isActive(this.__input)||(this.__input.value=this.getValue()),J(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Z);function vt(i){var e=i.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var We=function(i){q(e,i);function e(t,a,r){H(this,e);var s=Q(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,a)),f=r||{};return s.__min=f.min,s.__max=f.max,s.__step=f.step,h.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=vt(s.__impliedStep),s}return G(e,[{key:"setValue",value:function(a){var r=a;return this.__min!==void 0&&r<this.__min?r=this.__min:this.__max!==void 0&&r>this.__max&&(r=this.__max),this.__step!==void 0&&r%this.__step!==0&&(r=Math.round(r/this.__step)*this.__step),J(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,r)}},{key:"min",value:function(a){return this.__min=a,this}},{key:"max",value:function(a){return this.__max=a,this}},{key:"step",value:function(a){return this.__step=a,this.__impliedStep=a,this.__precision=vt(a),this}}]),e}(Z);function Li(i,e){var t=Math.pow(10,e);return Math.round(i*t)/t}var pe=function(i){q(e,i);function e(t,a,r){H(this,e);var s=Q(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,a,r));s.__truncationSuspended=!1;var f=s,_=void 0;function n(){var C=parseFloat(f.__input.value);h.isNaN(C)||f.setValue(C)}function v(){f.__onFinishChange&&f.__onFinishChange.call(f,f.getValue())}function w(){v()}function p(C){var E=_-C.clientY;f.setValue(f.getValue()+E*f.__impliedStep),_=C.clientY}function T(){d.unbind(window,"mousemove",p),d.unbind(window,"mouseup",T),v()}function B(C){d.bind(window,"mousemove",p),d.bind(window,"mouseup",T),_=C.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),d.bind(s.__input,"change",n),d.bind(s.__input,"blur",w),d.bind(s.__input,"mousedown",B),d.bind(s.__input,"keydown",function(C){C.keyCode===13&&(f.__truncationSuspended=!0,this.blur(),f.__truncationSuspended=!1,v())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return G(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():Li(this.getValue(),this.__precision),J(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(We);function gt(i,e,t,a,r){return a+(r-a)*((i-e)/(t-e))}var De=function(i){q(e,i);function e(t,a,r,s,f){H(this,e);var _=Q(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,a,{min:r,max:s,step:f})),n=_;_.__background=document.createElement("div"),_.__foreground=document.createElement("div"),d.bind(_.__background,"mousedown",v),d.bind(_.__background,"touchstart",T),d.addClass(_.__background,"slider"),d.addClass(_.__foreground,"slider-fg");function v(E){document.activeElement.blur(),d.bind(window,"mousemove",w),d.bind(window,"mouseup",p),w(E)}function w(E){E.preventDefault();var L=n.__background.getBoundingClientRect();return n.setValue(gt(E.clientX,L.left,L.right,n.__min,n.__max)),!1}function p(){d.unbind(window,"mousemove",w),d.unbind(window,"mouseup",p),n.__onFinishChange&&n.__onFinishChange.call(n,n.getValue())}function T(E){E.touches.length===1&&(d.bind(window,"touchmove",B),d.bind(window,"touchend",C),B(E))}function B(E){var L=E.touches[0].clientX,V=n.__background.getBoundingClientRect();n.setValue(gt(L,V.left,V.right,n.__min,n.__max))}function C(){d.unbind(window,"touchmove",B),d.unbind(window,"touchend",C),n.__onFinishChange&&n.__onFinishChange.call(n,n.getValue())}return _.updateDisplay(),_.__background.appendChild(_.__foreground),_.domElement.appendChild(_.__background),_}return G(e,[{key:"updateDisplay",value:function(){var a=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=a*100+"%",J(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(We),Ke=function(i){q(e,i);function e(t,a,r){H(this,e);var s=Q(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,a)),f=s;return s.__button=document.createElement("div"),s.__button.innerHTML=r===void 0?"Fire":r,d.bind(s.__button,"click",function(_){return _.preventDefault(),f.fire(),!1}),d.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return G(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(Z),Oe=function(i){q(e,i);function e(t,a){H(this,e);var r=Q(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,a));r.__color=new O(r.getValue()),r.__temp=new O(0);var s=r;r.domElement=document.createElement("div"),d.makeSelectable(r.domElement,!1),r.__selector=document.createElement("div"),r.__selector.className="selector",r.__saturation_field=document.createElement("div"),r.__saturation_field.className="saturation-field",r.__field_knob=document.createElement("div"),r.__field_knob.className="field-knob",r.__field_knob_border="2px solid ",r.__hue_knob=document.createElement("div"),r.__hue_knob.className="hue-knob",r.__hue_field=document.createElement("div"),r.__hue_field.className="hue-field",r.__input=document.createElement("input"),r.__input.type="text",r.__input_textShadow="0 1px 1px ",d.bind(r.__input,"keydown",function(E){E.keyCode===13&&p.call(this)}),d.bind(r.__input,"blur",p),d.bind(r.__selector,"mousedown",function(){d.addClass(this,"drag").bind(window,"mouseup",function(){d.removeClass(s.__selector,"drag")})}),d.bind(r.__selector,"touchstart",function(){d.addClass(this,"drag").bind(window,"touchend",function(){d.removeClass(s.__selector,"drag")})});var f=document.createElement("div");h.extend(r.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),h.extend(r.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:r.__field_knob_border+(r.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),h.extend(r.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),h.extend(r.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),h.extend(f.style,{width:"100%",height:"100%",background:"none"}),bt(f,"top","rgba(0,0,0,0)","#000"),h.extend(r.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),Ni(r.__hue_field),h.extend(r.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:r.__input_textShadow+"rgba(0,0,0,0.7)"}),d.bind(r.__saturation_field,"mousedown",_),d.bind(r.__saturation_field,"touchstart",_),d.bind(r.__field_knob,"mousedown",_),d.bind(r.__field_knob,"touchstart",_),d.bind(r.__hue_field,"mousedown",n),d.bind(r.__hue_field,"touchstart",n);function _(E){B(E),d.bind(window,"mousemove",B),d.bind(window,"touchmove",B),d.bind(window,"mouseup",v),d.bind(window,"touchend",v)}function n(E){C(E),d.bind(window,"mousemove",C),d.bind(window,"touchmove",C),d.bind(window,"mouseup",w),d.bind(window,"touchend",w)}function v(){d.unbind(window,"mousemove",B),d.unbind(window,"touchmove",B),d.unbind(window,"mouseup",v),d.unbind(window,"touchend",v),T()}function w(){d.unbind(window,"mousemove",C),d.unbind(window,"touchmove",C),d.unbind(window,"mouseup",w),d.unbind(window,"touchend",w),T()}function p(){var E=Ce(this.value);E!==!1?(s.__color.__state=E,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function T(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}r.__saturation_field.appendChild(f),r.__selector.appendChild(r.__field_knob),r.__selector.appendChild(r.__saturation_field),r.__selector.appendChild(r.__hue_field),r.__hue_field.appendChild(r.__hue_knob),r.domElement.appendChild(r.__input),r.domElement.appendChild(r.__selector),r.updateDisplay();function B(E){E.type.indexOf("touch")===-1&&E.preventDefault();var L=s.__saturation_field.getBoundingClientRect(),V=E.touches&&E.touches[0]||E,$=V.clientX,Y=V.clientY,ee=($-L.left)/(L.right-L.left),te=1-(Y-L.top)/(L.bottom-L.top);return te>1?te=1:te<0&&(te=0),ee>1?ee=1:ee<0&&(ee=0),s.__color.v=te,s.__color.s=ee,s.setValue(s.__color.toOriginal()),!1}function C(E){E.type.indexOf("touch")===-1&&E.preventDefault();var L=s.__hue_field.getBoundingClientRect(),V=E.touches&&E.touches[0]||E,$=V.clientY,Y=1-($-L.top)/(L.bottom-L.top);return Y>1?Y=1:Y<0&&(Y=0),s.__color.h=Y*360,s.setValue(s.__color.toOriginal()),!1}return r}return G(e,[{key:"updateDisplay",value:function(){var a=Ce(this.getValue());if(a!==!1){var r=!1;h.each(O.COMPONENTS,function(_){if(!h.isUndefined(a[_])&&!h.isUndefined(this.__color.__state[_])&&a[_]!==this.__color.__state[_])return r=!0,{}},this),r&&h.extend(this.__color.__state,a)}h.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,f=255-s;h.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,bt(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),h.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+f+","+f+","+f+",.7)"})}}]),e}(Z),Fi=["-moz-","-o-","-webkit-","-ms-",""];function bt(i,e,t,a){i.style.background="",h.each(Fi,function(r){i.style.cssText+="background: "+r+"linear-gradient("+e+", "+t+" 0%, "+a+" 100%); "})}function Ni(i){i.style.background="",i.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",i.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var Ui={load:function(e,t){var a=t||document,r=a.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,a.getElementsByTagName("head")[0].appendChild(r)},inject:function(e,t){var a=t||document,r=document.createElement("style");r.type="text/css",r.innerHTML=e;var s=a.getElementsByTagName("head")[0];try{s.appendChild(r)}catch{}}},Bi=`<div id="dg-save" class="dg dialogue">

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

</div>`,Pi=function(e,t){var a=e[t];return h.isArray(arguments[2])||h.isObject(arguments[2])?new At(e,t,arguments[2]):h.isNumber(a)?h.isNumber(arguments[2])&&h.isNumber(arguments[3])?h.isNumber(arguments[4])?new De(e,t,arguments[2],arguments[3],arguments[4]):new De(e,t,arguments[2],arguments[3]):h.isNumber(arguments[4])?new pe(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new pe(e,t,{min:arguments[2],max:arguments[3]}):h.isString(a)?new Ct(e,t):h.isFunction(a)?new Ke(e,t,""):h.isBoolean(a)?new $e(e,t):null};function ki(i){setTimeout(i,1e3/60)}var Ii=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||ki,Mi=function(){function i(){H(this,i),this.backgroundElement=document.createElement("div"),h.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),d.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),h.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;d.bind(this.backgroundElement,"click",function(){e.hide()})}return G(i,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),h.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,a=function r(){t.domElement.style.display="none",t.backgroundElement.style.display="none",d.unbind(t.domElement,"webkitTransitionEnd",r),d.unbind(t.domElement,"transitionend",r),d.unbind(t.domElement,"oTransitionEnd",r)};d.bind(this.domElement,"webkitTransitionEnd",a),d.bind(this.domElement,"transitionend",a),d.bind(this.domElement,"oTransitionEnd",a),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-d.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-d.getHeight(this.domElement)/2+"px"}}]),i}(),Hi=Ri(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);Ui.inject(Hi);var xt="dg",Et=72,yt=20,ve="Default",fe=function(){try{return!!window.localStorage}catch{return!1}}(),he=void 0,St=!0,re=void 0,He=!1,Dt=[],R=function i(e){var t=this,a=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),d.addClass(this.domElement,xt),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],a=h.defaults(a,{closeOnTop:!1,autoPlace:!0,width:i.DEFAULT_WIDTH}),a=h.defaults(a,{resizable:a.autoPlace,hideable:a.autoPlace}),h.isUndefined(a.load)?a.load={preset:ve}:a.preset&&(a.load.preset=a.preset),h.isUndefined(a.parent)&&a.hideable&&Dt.push(this),a.resizable=h.isUndefined(a.parent)&&a.resizable,a.autoPlace&&h.isUndefined(a.scrollable)&&(a.scrollable=!0);var r=fe&&localStorage.getItem(oe(this,"isLocal"))==="true",s=void 0,f=void 0;if(Object.defineProperties(this,{parent:{get:function(){return a.parent}},scrollable:{get:function(){return a.scrollable}},autoPlace:{get:function(){return a.autoPlace}},closeOnTop:{get:function(){return a.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:a.load.preset},set:function(T){t.parent?t.getRoot().preset=T:a.load.preset=T,Vi(this),t.revert()}},width:{get:function(){return a.width},set:function(T){a.width=T,Xe(t,T)}},name:{get:function(){return a.name},set:function(T){a.name=T,f&&(f.innerHTML=a.name)}},closed:{get:function(){return a.closed},set:function(T){a.closed=T,a.closed?d.addClass(t.__ul,i.CLASS_CLOSED):d.removeClass(t.__ul,i.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=T?i.TEXT_OPEN:i.TEXT_CLOSED)}},load:{get:function(){return a.load}},useLocalStorage:{get:function(){return r},set:function(T){fe&&(r=T,T?d.bind(window,"unload",s):d.unbind(window,"unload",s),localStorage.setItem(oe(t,"isLocal"),T))}}}),h.isUndefined(a.parent)){if(this.closed=a.closed||!1,d.addClass(this.domElement,i.CLASS_MAIN),d.makeSelectable(this.domElement,!1),fe&&r){t.useLocalStorage=!0;var _=localStorage.getItem(oe(this,"gui"));_&&(a.load=JSON.parse(_))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=i.TEXT_CLOSED,d.addClass(this.__closeButton,i.CLASS_CLOSE_BUTTON),a.closeOnTop?(d.addClass(this.__closeButton,i.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(d.addClass(this.__closeButton,i.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),d.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{a.closed===void 0&&(a.closed=!0);var n=document.createTextNode(a.name);d.addClass(n,"controller-name"),f=je(t,n);var v=function(T){return T.preventDefault(),t.closed=!t.closed,!1};d.addClass(this.__ul,i.CLASS_CLOSED),d.addClass(f,"title"),d.bind(f,"click",v),a.closed||(this.closed=!1)}a.autoPlace&&(h.isUndefined(a.parent)&&(St&&(re=document.createElement("div"),d.addClass(re,xt),d.addClass(re,i.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(re),St=!1),re.appendChild(this.domElement),d.addClass(this.domElement,i.CLASS_AUTO_PLACE)),this.parent||Xe(t,a.width)),this.__resizeHandler=function(){t.onResizeDebounced()},d.bind(window,"resize",this.__resizeHandler),d.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),d.bind(this.__ul,"transitionend",this.__resizeHandler),d.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),a.resizable&&Xi(this),s=function(){fe&&localStorage.getItem(oe(t,"isLocal"))==="true"&&localStorage.setItem(oe(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function w(){var p=t.getRoot();p.width+=1,h.defer(function(){p.width-=1})}a.parent||w()};R.toggleHide=function(){He=!He,h.each(Dt,function(i){i.domElement.style.display=He?"none":""})};R.CLASS_AUTO_PLACE="a";R.CLASS_AUTO_PLACE_CONTAINER="ac";R.CLASS_MAIN="main";R.CLASS_CONTROLLER_ROW="cr";R.CLASS_TOO_TALL="taller-than-window";R.CLASS_CLOSED="closed";R.CLASS_CLOSE_BUTTON="close-button";R.CLASS_CLOSE_TOP="close-top";R.CLASS_CLOSE_BOTTOM="close-bottom";R.CLASS_DRAG="drag";R.DEFAULT_WIDTH=245;R.TEXT_CLOSED="Close Controls";R.TEXT_OPEN="Open Controls";R._keydownHandler=function(i){document.activeElement.type!=="text"&&(i.which===Et||i.keyCode===Et)&&R.toggleHide()};d.bind(window,"keydown",R._keydownHandler,!1);h.extend(R.prototype,{add:function(e,t){return _e(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return _e(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;h.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&re.removeChild(this.domElement);var e=this;h.each(this.__folders,function(t){e.removeFolder(t)}),d.unbind(window,"keydown",R._keydownHandler,!1),Tt(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var a=new R(t);this.__folders[e]=a;var r=je(this,a.domElement);return d.addClass(r,"folder"),a},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],Tt(e);var t=this;h.each(e.__folders,function(a){e.removeFolder(a)}),h.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=d.getOffset(e.__ul).top,a=0;h.each(e.__ul.childNodes,function(r){e.autoPlace&&r===e.__save_row||(a+=d.getHeight(r))}),window.innerHeight-t-yt<a?(d.addClass(e.domElement,R.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-yt+"px"):(d.removeClass(e.domElement,R.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&h.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:h.debounce(function(){this.onResize()},50),remember:function(){if(h.isUndefined(he)&&(he=new Mi,he.domElement.innerHTML=Bi),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;h.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&zi(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&Xe(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=Ae(this)),e.folders={},h.each(this.__folders,function(t,a){e.folders[a]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=Ae(this),Ge(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[ve]=Ae(this,!0)),this.load.remembered[e]=Ae(this),this.preset=e,ze(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){h.each(this.__controllers,function(t){this.getRoot().load.remembered?Ot(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),h.each(this.__folders,function(t){t.revert(t)}),e||Ge(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&Lt(this.__listening)},updateDisplay:function(){h.each(this.__controllers,function(e){e.updateDisplay()}),h.each(this.__folders,function(e){e.updateDisplay()})}});function je(i,e,t){var a=document.createElement("li");return e&&a.appendChild(e),t?i.__ul.insertBefore(a,t):i.__ul.appendChild(a),i.onResize(),a}function Tt(i){d.unbind(window,"resize",i.__resizeHandler),i.saveToLocalStorageIfPossible&&d.unbind(window,"unload",i.saveToLocalStorageIfPossible)}function Ge(i,e){var t=i.__preset_select[i.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function Gi(i,e,t){if(t.__li=e,t.__gui=i,h.extend(t,{options:function(f){if(arguments.length>1){var _=t.__li.nextElementSibling;return t.remove(),_e(i,t.object,t.property,{before:_,factoryArgs:[h.toArray(arguments)]})}if(h.isArray(f)||h.isObject(f)){var n=t.__li.nextElementSibling;return t.remove(),_e(i,t.object,t.property,{before:n,factoryArgs:[f]})}},name:function(f){return t.__li.firstElementChild.firstElementChild.innerHTML=f,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof De){var a=new pe(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});h.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var f=t[s],_=a[s];t[s]=a[s]=function(){var n=Array.prototype.slice.call(arguments);return _.apply(a,n),f.apply(t,n)}}),d.addClass(e,"has-slider"),t.domElement.insertBefore(a.domElement,t.domElement.firstElementChild)}else if(t instanceof pe){var r=function(f){if(h.isNumber(t.__min)&&h.isNumber(t.__max)){var _=t.__li.firstElementChild.firstElementChild.innerHTML,n=t.__gui.__listening.indexOf(t)>-1;t.remove();var v=_e(i,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return v.name(_),n&&v.listen(),v}return f};t.min=h.compose(r,t.min),t.max=h.compose(r,t.max)}else t instanceof $e?(d.bind(e,"click",function(){d.fakeEvent(t.__checkbox,"click")}),d.bind(t.__checkbox,"click",function(s){s.stopPropagation()})):t instanceof Ke?(d.bind(e,"click",function(){d.fakeEvent(t.__button,"click")}),d.bind(e,"mouseover",function(){d.addClass(t.__button,"hover")}),d.bind(e,"mouseout",function(){d.removeClass(t.__button,"hover")})):t instanceof Oe&&(d.addClass(e,"color"),t.updateDisplay=h.compose(function(s){return e.style.borderLeftColor=t.__color.toString(),s},t.updateDisplay),t.updateDisplay());t.setValue=h.compose(function(s){return i.getRoot().__preset_select&&t.isModified()&&Ge(i.getRoot(),!0),s},t.setValue)}function Ot(i,e){var t=i.getRoot(),a=t.__rememberedObjects.indexOf(e.object);if(a!==-1){var r=t.__rememberedObjectIndecesToControllers[a];if(r===void 0&&(r={},t.__rememberedObjectIndecesToControllers[a]=r),r[e.property]=e,t.load&&t.load.remembered){var s=t.load.remembered,f=void 0;if(s[i.preset])f=s[i.preset];else if(s[ve])f=s[ve];else return;if(f[a]&&f[a][e.property]!==void 0){var _=f[a][e.property];e.initialValue=_,e.setValue(_)}}}}function _e(i,e,t,a){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var r=void 0;if(a.color)r=new Oe(e,t);else{var s=[e,t].concat(a.factoryArgs);r=Pi.apply(i,s)}a.before instanceof Z&&(a.before=a.before.__li),Ot(i,r),d.addClass(r.domElement,"c");var f=document.createElement("span");d.addClass(f,"property-name"),f.innerHTML=r.property;var _=document.createElement("div");_.appendChild(f),_.appendChild(r.domElement);var n=je(i,_,a.before);return d.addClass(n,R.CLASS_CONTROLLER_ROW),r instanceof Oe?d.addClass(n,"color"):d.addClass(n,Ci(r.getValue())),Gi(i,n,r),i.__controllers.push(r),r}function oe(i,e){return document.location.href+"."+e}function ze(i,e,t){var a=document.createElement("option");a.innerHTML=e,a.value=e,i.__preset_select.appendChild(a),t&&(i.__preset_select.selectedIndex=i.__preset_select.length-1)}function wt(i,e){e.style.display=i.useLocalStorage?"block":"none"}function zi(i){var e=i.__save_row=document.createElement("li");d.addClass(i.domElement,"has-save"),i.__ul.insertBefore(e,i.__ul.firstChild),d.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",d.addClass(t,"button gears");var a=document.createElement("span");a.innerHTML="Save",d.addClass(a,"button"),d.addClass(a,"save");var r=document.createElement("span");r.innerHTML="New",d.addClass(r,"button"),d.addClass(r,"save-as");var s=document.createElement("span");s.innerHTML="Revert",d.addClass(s,"button"),d.addClass(s,"revert");var f=i.__preset_select=document.createElement("select");if(i.load&&i.load.remembered?h.each(i.load.remembered,function(p,T){ze(i,T,T===i.preset)}):ze(i,ve,!1),d.bind(f,"change",function(){for(var p=0;p<i.__preset_select.length;p++)i.__preset_select[p].innerHTML=i.__preset_select[p].value;i.preset=this.value}),e.appendChild(f),e.appendChild(t),e.appendChild(a),e.appendChild(r),e.appendChild(s),fe){var _=document.getElementById("dg-local-explain"),n=document.getElementById("dg-local-storage"),v=document.getElementById("dg-save-locally");v.style.display="block",localStorage.getItem(oe(i,"isLocal"))==="true"&&n.setAttribute("checked","checked"),wt(i,_),d.bind(n,"change",function(){i.useLocalStorage=!i.useLocalStorage,wt(i,_)})}var w=document.getElementById("dg-new-constructor");d.bind(w,"keydown",function(p){p.metaKey&&(p.which===67||p.keyCode===67)&&he.hide()}),d.bind(t,"click",function(){w.innerHTML=JSON.stringify(i.getSaveObject(),void 0,2),he.show(),w.focus(),w.select()}),d.bind(a,"click",function(){i.save()}),d.bind(r,"click",function(){var p=prompt("Enter a new preset name.");p&&i.saveAs(p)}),d.bind(s,"click",function(){i.revert()})}function Xi(i){var e=void 0;i.__resize_handle=document.createElement("div"),h.extend(i.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(s){return s.preventDefault(),i.width+=e-s.clientX,i.onResize(),e=s.clientX,!1}function a(){d.removeClass(i.__closeButton,R.CLASS_DRAG),d.unbind(window,"mousemove",t),d.unbind(window,"mouseup",a)}function r(s){return s.preventDefault(),e=s.clientX,d.addClass(i.__closeButton,R.CLASS_DRAG),d.bind(window,"mousemove",t),d.bind(window,"mouseup",a),!1}d.bind(i.__resize_handle,"mousedown",r),d.bind(i.__closeButton,"mousedown",r),i.domElement.insertBefore(i.__resize_handle,i.domElement.firstElementChild)}function Xe(i,e){i.domElement.style.width=e+"px",i.__save_row&&i.autoPlace&&(i.__save_row.style.width=e+"px"),i.__closeButton&&(i.__closeButton.style.width=e+"px")}function Ae(i,e){var t={};return h.each(i.__rememberedObjects,function(a,r){var s={},f=i.__rememberedObjectIndecesToControllers[r];h.each(f,function(_,n){s[n]=e?_.initialValue:_.getValue()}),t[r]=s}),t}function Vi(i){for(var e=0;e<i.__preset_select.length;e++)i.__preset_select[e].value===i.preset&&(i.__preset_select.selectedIndex=e)}function Lt(i){i.length!==0&&Ii.call(window,function(){Lt(i)}),h.each(i,function(e){e.updateDisplay()})}var Yi={Color:O,math:me,interpret:Ce},$i={Controller:Z,BooleanController:$e,OptionController:At,StringController:Ct,NumberController:We,NumberControllerBox:pe,NumberControllerSlider:De,FunctionController:Ke,ColorController:Oe},Wi={dom:d},Ki={GUI:R},ji=R,Ji={color:Yi,controllers:$i,dom:Wi,gui:Ki,GUI:ji},qi="./dist/LDR_LLL1_0.140c55bd.png";const Qi={setup(i){const e=Ei(null);return yi(t=>{const a=e.value;st();let r={SIM_RESOLUTION:128,DYE_RESOLUTION:1024,CAPTURE_RESOLUTION:512,DENSITY_DISSIPATION:1,VELOCITY_DISSIPATION:.2,PRESSURE:.8,PRESSURE_ITERATIONS:20,CURL:30,SPLAT_RADIUS:.25,SPLAT_FORCE:6e3,SHADING:!0,COLORFUL:!0,COLOR_UPDATE_SPEED:10,PAUSED:!1,BACK_COLOR:{r:0,g:0,b:0},TRANSPARENT:!1,BLOOM:!0,BLOOM_ITERATIONS:8,BLOOM_RESOLUTION:256,BLOOM_INTENSITY:.8,BLOOM_THRESHOLD:.6,BLOOM_SOFT_KNEE:.7,SUNRAYS:!0,SUNRAYS_RESOLUTION:196,SUNRAYS_WEIGHT:1};function s(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[30,0,300]}let f=[],_=[];f.push(new s);const{gl:n,ext:v}=w(a);C()&&(r.DYE_RESOLUTION=512),v.supportLinearFiltering||(r.DYE_RESOLUTION=512,r.SHADING=!1,r.BLOOM=!1,r.SUNRAYS=!1),B();function w(o){const u={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let l=o.getContext("webgl2",u);const c=!!l;c||(l=o.getContext("webgl",u)||o.getContext("experimental-webgl",u));let m,g;c?(l.getExtension("EXT_color_buffer_float"),g=l.getExtension("OES_texture_float_linear")):(m=l.getExtension("OES_texture_half_float"),g=l.getExtension("OES_texture_half_float_linear")),l.clearColor(0,0,0,1);const b=c?l.HALF_FLOAT:m.HALF_FLOAT_OES;let x,S,P;return c?(x=p(l,l.RGBA16F,l.RGBA,b),S=p(l,l.RG16F,l.RG,b),P=p(l,l.R16F,l.RED,b)):(x=p(l,l.RGBA,l.RGBA,b),S=p(l,l.RGBA,l.RGBA,b),P=p(l,l.RGBA,l.RGBA,b)),{gl:l,ext:{formatRGBA:x,formatRG:S,formatR:P,halfFloatTexType:b,supportLinearFiltering:g}}}function p(o,u,l,c){if(!T(o,u,l,c))switch(u){case o.R16F:return p(o,o.RG16F,o.RG,c);case o.RG16F:return p(o,o.RGBA16F,o.RGBA,c);default:return null}return{internalFormat:u,format:l}}function T(o,u,l,c){let m=o.createTexture();o.bindTexture(o.TEXTURE_2D,m),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),o.texImage2D(o.TEXTURE_2D,0,u,4,4,0,l,c,null);let g=o.createFramebuffer();return o.bindFramebuffer(o.FRAMEBUFFER,g),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,m,0),o.checkFramebufferStatus(o.FRAMEBUFFER)==o.FRAMEBUFFER_COMPLETE}function B(){var o=new Ji.GUI({width:300});o.add(r,"DYE_RESOLUTION",{high:1024,medium:512,low:256,"very low":128}).name("quality").onFinishChange(Se),o.add(r,"SIM_RESOLUTION",{32:32,64:64,128:128,256:256}).name("sim resolution").onFinishChange(Se),o.add(r,"DENSITY_DISSIPATION",0,4).name("density diffusion"),o.add(r,"VELOCITY_DISSIPATION",0,4).name("velocity diffusion"),o.add(r,"PRESSURE",0,1).name("pressure"),o.add(r,"CURL",0,50).name("vorticity").step(1),o.add(r,"SPLAT_RADIUS",.01,1).name("splat radius"),o.add(r,"SHADING").name("shading").onFinishChange(Te),o.add(r,"COLORFUL").name("colorful"),o.add(r,"PAUSED").name("paused").listen(),o.add({fun:()=>{_.push(parseInt(Math.random()*20)+5)}},"fun").name("Random splats");let u=o.addFolder("Bloom");u.add(r,"BLOOM").name("enabled").onFinishChange(Te),u.add(r,"BLOOM_INTENSITY",.1,2).name("intensity"),u.add(r,"BLOOM_THRESHOLD",0,1).name("threshold");let l=o.addFolder("Sunrays");l.add(r,"SUNRAYS").name("enabled").onFinishChange(Te),l.add(r,"SUNRAYS_WEIGHT",.3,1).name("weight");let c=o.addFolder("Capture");c.addColor(r,"BACK_COLOR").name("background color"),c.add(r,"TRANSPARENT").name("transparent"),c.add({fun:E},"fun").name("take screenshot");let m=o.add({fun:()=>{window.open("https://github.com/PavelDoGreat/WebGL-Fluid-Simulation")}},"fun").name("Github");m.__li.className="cr function bigFont",m.__li.style.borderLeft="3px solid #8C8C8C";let g=document.createElement("span");m.domElement.parentElement.appendChild(g),g.className="icon github";let b=o.add({fun:()=>{window.open("https://twitter.com/PavelDoGreat")}},"fun").name("Twitter");b.__li.className="cr function bigFont",b.__li.style.borderLeft="3px solid #8C8C8C";let x=document.createElement("span");b.domElement.parentElement.appendChild(x),x.className="icon twitter";let S=o.add({fun:()=>{window.open("https://discordapp.com/invite/CeqZDDE")}},"fun").name("Discord");S.__li.className="cr function bigFont",S.__li.style.borderLeft="3px solid #8C8C8C";let P=document.createElement("span");S.domElement.parentElement.appendChild(P),P.className="icon discord";let M=o.add({fun:()=>{window.open("http://onelink.to/5b58bn")}},"fun").name("Check out mobile app");M.__li.className="cr function appBigFont",M.__li.style.borderLeft="3px solid #00FF7F";let _t=document.createElement("span");M.domElement.parentElement.appendChild(_t),_t.className="icon app",C()&&o.close()}function C(){return/Mobi|Android/i.test(navigator.userAgent)}function E(){let o=ue(r.CAPTURE_RESOLUTION),u=I(o.width,o.height,v.formatRGBA.internalFormat,v.formatRGBA.format,v.halfFloatTexType,n.NEAREST);lt(u);let l=L(u);l=V(l,u.width,u.height);let m=Y(l,u.width,u.height).toDataURL();ee("fluid.png",m),URL.revokeObjectURL(m)}function L(o){n.bindFramebuffer(n.FRAMEBUFFER,o.fbo);let u=o.width*o.height*4,l=new Float32Array(u);return n.readPixels(0,0,o.width,o.height,n.RGBA,n.FLOAT,l),l}function V(o,u,l){let c=new Uint8Array(o.length),m=0;for(let g=l-1;g>=0;g--)for(let b=0;b<u;b++){let x=g*u*4+b*4;c[x+0]=$(o[m+0])*255,c[x+1]=$(o[m+1])*255,c[x+2]=$(o[m+2])*255,c[x+3]=$(o[m+3])*255,m+=4}return c}function $(o){return Math.min(Math.max(o,0),1)}function Y(o,u,l){let c=document.createElement("canvas"),m=c.getContext("2d");c.width=u,c.height=l;let g=m.createImageData(u,l);return g.data.set(o),m.putImageData(g,0,0),c}function ee(o,u){let l=document.createElement("a");l.download=o,l.href=u,document.body.appendChild(l),l.click(),document.body.removeChild(l)}class te{constructor(u,l){this.vertexShader=u,this.fragmentShaderSource=l,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(u){let l=0;for(let m=0;m<u.length;m++)l+=xi(u[m]);let c=this.programs[l];if(c==null){let m=D(n.FRAGMENT_SHADER,this.fragmentShaderSource,u);c=Je(this.vertexShader,m),this.programs[l]=c}c!=this.activeProgram&&(this.uniforms=qe(c),this.activeProgram=c)}bind(){n.useProgram(this.activeProgram)}}class F{constructor(u,l){this.uniforms={},this.program=Je(u,l),this.uniforms=qe(this.program)}bind(){n.useProgram(this.program)}}function Je(o,u){let l=n.createProgram();return n.attachShader(l,o),n.attachShader(l,u),n.linkProgram(l),n.getProgramParameter(l,n.LINK_STATUS)||console.trace(n.getProgramInfoLog(l)),l}function qe(o){let u=[],l=n.getProgramParameter(o,n.ACTIVE_UNIFORMS);for(let c=0;c<l;c++){let m=n.getActiveUniform(o,c).name;u[m]=n.getUniformLocation(o,m)}return u}function D(o,u,l){u=Ft(u,l);const c=n.createShader(o);return n.shaderSource(c,u),n.compileShader(c),n.getShaderParameter(c,n.COMPILE_STATUS)||console.trace(n.getShaderInfoLog(c)),c}function Ft(o,u){if(u==null)return o;let l="";return u.forEach(c=>{l+="#define "+c+`
`}),l+o}const N=D(n.VERTEX_SHADER,`
                      precision highp float;

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
                  `),Nt=D(n.VERTEX_SHADER,`
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
                  `),Ut=D(n.FRAGMENT_SHADER,`
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
                  `),Bt=D(n.FRAGMENT_SHADER,`
                      precision mediump float;
                      precision mediump sampler2D;

                      varying highp vec2 vUv;
                      uniform sampler2D uTexture;

                      void main () {
                          gl_FragColor = texture2D(uTexture, vUv);
                      }
                  `),Pt=D(n.FRAGMENT_SHADER,`
                      precision mediump float;
                      precision mediump sampler2D;

                      varying highp vec2 vUv;
                      uniform sampler2D uTexture;
                      uniform float value;

                      void main () {
                          gl_FragColor = value * texture2D(uTexture, vUv);
                      }
                  `),kt=D(n.FRAGMENT_SHADER,`
                      precision mediump float;

                      uniform vec4 color;

                      void main () {
                          gl_FragColor = color;
                      }
                  `),It=D(n.FRAGMENT_SHADER,`
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
                  `),Mt=`
                      precision highp float;
                      precision highp sampler2D;

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
                  `,Ht=D(n.FRAGMENT_SHADER,`
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
                  `),Gt=D(n.FRAGMENT_SHADER,`
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
                  `),zt=D(n.FRAGMENT_SHADER,`
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
                  `),Xt=D(n.FRAGMENT_SHADER,`
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
                  `),Vt=D(n.FRAGMENT_SHADER,`
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
                  `),Yt=D(n.FRAGMENT_SHADER,`
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
                  `),$t=D(n.FRAGMENT_SHADER,`
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
                      }`,v.supportLinearFiltering?null:["MANUAL_FILTERING"]),Wt=D(n.FRAGMENT_SHADER,`
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
                  `),Kt=D(n.FRAGMENT_SHADER,`
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
                  `),jt=D(n.FRAGMENT_SHADER,`
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
                  `),Jt=D(n.FRAGMENT_SHADER,`
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
                  `),qt=D(n.FRAGMENT_SHADER,`
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
                  `),A=(()=>(n.bindBuffer(n.ARRAY_BUFFER,n.createBuffer()),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,n.createBuffer()),n.bufferData(n.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),n.STATIC_DRAW),n.vertexAttribPointer(0,2,n.FLOAT,!1,0,0),n.enableVertexAttribArray(0),(o,u=!1)=>{o==null?(n.viewport(0,0,n.drawingBufferWidth,n.drawingBufferHeight),n.bindFramebuffer(n.FRAMEBUFFER,null)):(n.viewport(0,0,o.width,o.height),n.bindFramebuffer(n.FRAMEBUFFER,o.fbo)),u&&(n.clearColor(0,0,0,1),n.clear(n.COLOR_BUFFER_BIT)),n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0)}))();let U,y,Le,Fe,W,Ne,ie=[],ge,Qe,Ze=ti(qi);const se=new F(Nt,Ut),et=new F(N,Bt),Ue=new F(N,Pt),tt=new F(N,kt),it=new F(N,It),be=new F(N,Ht),le=new F(N,Gt),xe=new F(N,zt),nt=new F(N,Xt),Be=new F(N,Vt),K=new F(N,Yt),k=new F(N,$t),Pe=new F(N,Wt),ke=new F(N,Kt),ne=new F(N,jt),Ee=new F(N,Jt),ye=new F(N,qt),j=new te(N,Mt);function Se(){let o=ue(r.SIM_RESOLUTION),u=ue(r.DYE_RESOLUTION);const l=v.halfFloatTexType,c=v.formatRGBA,m=v.formatRG,g=v.formatR,b=v.supportLinearFiltering?n.LINEAR:n.NEAREST;n.disable(n.BLEND),U==null?U=Ie(u.width,u.height,c.internalFormat,c.format,l,b):U=rt(U,u.width,u.height,c.internalFormat,c.format,l,b),y==null?y=Ie(o.width,o.height,m.internalFormat,m.format,l,b):y=rt(y,o.width,o.height,m.internalFormat,m.format,l,b),Le=I(o.width,o.height,g.internalFormat,g.format,l,n.NEAREST),Fe=I(o.width,o.height,g.internalFormat,g.format,l,n.NEAREST),W=Ie(o.width,o.height,g.internalFormat,g.format,l,n.NEAREST),Qt(),Zt()}function Qt(){let o=ue(r.BLOOM_RESOLUTION);const u=v.halfFloatTexType,l=v.formatRGBA,c=v.supportLinearFiltering?n.LINEAR:n.NEAREST;Ne=I(o.width,o.height,l.internalFormat,l.format,u,c),ie.length=0;for(let m=0;m<r.BLOOM_ITERATIONS;m++){let g=o.width>>m+1,b=o.height>>m+1;if(g<2||b<2)break;let x=I(g,b,l.internalFormat,l.format,u,c);ie.push(x)}}function Zt(){let o=ue(r.SUNRAYS_RESOLUTION);const u=v.halfFloatTexType,l=v.formatR,c=v.supportLinearFiltering?n.LINEAR:n.NEAREST;ge=I(o.width,o.height,l.internalFormat,l.format,u,c),Qe=I(o.width,o.height,l.internalFormat,l.format,u,c)}function I(o,u,l,c,m,g){n.activeTexture(n.TEXTURE0);let b=n.createTexture();n.bindTexture(n.TEXTURE_2D,b),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,g),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,g),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texImage2D(n.TEXTURE_2D,0,l,o,u,0,c,m,null);let x=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,x),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,b,0),n.viewport(0,0,o,u),n.clear(n.COLOR_BUFFER_BIT);let S=1/o,P=1/u;return{texture:b,fbo:x,width:o,height:u,texelSizeX:S,texelSizeY:P,attach(M){return n.activeTexture(n.TEXTURE0+M),n.bindTexture(n.TEXTURE_2D,b),M}}}function Ie(o,u,l,c,m,g){let b=I(o,u,l,c,m,g),x=I(o,u,l,c,m,g);return{width:o,height:u,texelSizeX:b.texelSizeX,texelSizeY:b.texelSizeY,get read(){return b},set read(S){b=S},get write(){return x},set write(S){x=S},swap(){let S=b;b=x,x=S}}}function ei(o,u,l,c,m,g,b){let x=I(u,l,c,m,g,b);return et.bind(),n.uniform1i(et.uniforms.uTexture,o.attach(0)),A(x),x}function rt(o,u,l,c,m,g,b){return o.width==u&&o.height==l||(o.read=ei(o.read,u,l,c,m,g,b),o.write=I(u,l,c,m,g,b),o.width=u,o.height=l,o.texelSizeX=1/u,o.texelSizeY=1/l),o}function ti(o){let u=n.createTexture();n.bindTexture(n.TEXTURE_2D,u),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.REPEAT),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.REPEAT),n.texImage2D(n.TEXTURE_2D,0,n.RGB,1,1,0,n.RGB,n.UNSIGNED_BYTE,new Uint8Array([255,255,255]));let l={texture:u,width:1,height:1,attach(m){return n.activeTexture(n.TEXTURE0+m),n.bindTexture(n.TEXTURE_2D,u),m}},c=new Image;return c.onload=()=>{l.width=c.width,l.height=c.height,n.bindTexture(n.TEXTURE_2D,u),n.texImage2D(n.TEXTURE_2D,0,n.RGB,n.RGB,n.UNSIGNED_BYTE,c)},c.src=o,l}function Te(){let o=[];r.SHADING&&o.push("SHADING"),r.BLOOM&&o.push("BLOOM"),r.SUNRAYS&&o.push("SUNRAYS"),j.setKeywords(o)}Te(),Se(),ut(parseInt(Math.random()*20)+5);let ot=Date.now(),we=0;at();function at(){const o=ii();st()&&Se(),ni(o),ri(),r.PAUSED||oi(o),lt(null),requestAnimationFrame(at)}function ii(){let o=Date.now(),u=(o-ot)/1e3;return u=Math.min(u,.016666),ot=o,u}function st(){let o=z(a.clientWidth),u=z(a.clientHeight);return a.width!=o||a.height!=u?(a.width=o,a.height=u,!0):!1}function ni(o){!r.COLORFUL||(we+=o*r.COLOR_UPDATE_SPEED,we>=1&&(we=gi(we,0,1),f.forEach(u=>{u.color=Me()})))}function ri(){_.length>0&&ut(_.pop()),f.forEach(o=>{o.moved&&(o.moved=!1,fi(o))})}function oi(o){n.disable(n.BLEND),ke.bind(),n.uniform2f(ke.uniforms.texelSize,y.texelSizeX,y.texelSizeY),n.uniform1i(ke.uniforms.uVelocity,y.read.attach(0)),A(Fe),ne.bind(),n.uniform2f(ne.uniforms.texelSize,y.texelSizeX,y.texelSizeY),n.uniform1i(ne.uniforms.uVelocity,y.read.attach(0)),n.uniform1i(ne.uniforms.uCurl,Fe.attach(1)),n.uniform1f(ne.uniforms.curl,r.CURL),n.uniform1f(ne.uniforms.dt,o),A(y.write),y.swap(),Pe.bind(),n.uniform2f(Pe.uniforms.texelSize,y.texelSizeX,y.texelSizeY),n.uniform1i(Pe.uniforms.uVelocity,y.read.attach(0)),A(Le),Ue.bind(),n.uniform1i(Ue.uniforms.uTexture,W.read.attach(0)),n.uniform1f(Ue.uniforms.value,r.PRESSURE),A(W.write),W.swap(),Ee.bind(),n.uniform2f(Ee.uniforms.texelSize,y.texelSizeX,y.texelSizeY),n.uniform1i(Ee.uniforms.uDivergence,Le.attach(0));for(let l=0;l<r.PRESSURE_ITERATIONS;l++)n.uniform1i(Ee.uniforms.uPressure,W.read.attach(1)),A(W.write),W.swap();ye.bind(),n.uniform2f(ye.uniforms.texelSize,y.texelSizeX,y.texelSizeY),n.uniform1i(ye.uniforms.uPressure,W.read.attach(0)),n.uniform1i(ye.uniforms.uVelocity,y.read.attach(1)),A(y.write),y.swap(),k.bind(),n.uniform2f(k.uniforms.texelSize,y.texelSizeX,y.texelSizeY),v.supportLinearFiltering||n.uniform2f(k.uniforms.dyeTexelSize,y.texelSizeX,y.texelSizeY);let u=y.read.attach(0);n.uniform1i(k.uniforms.uVelocity,u),n.uniform1i(k.uniforms.uSource,u),n.uniform1f(k.uniforms.dt,o),n.uniform1f(k.uniforms.dissipation,r.VELOCITY_DISSIPATION),A(y.write),y.swap(),v.supportLinearFiltering||n.uniform2f(k.uniforms.dyeTexelSize,U.texelSizeX,U.texelSizeY),n.uniform1i(k.uniforms.uVelocity,y.read.attach(0)),n.uniform1i(k.uniforms.uSource,U.read.attach(1)),n.uniform1f(k.uniforms.dissipation,r.DENSITY_DISSIPATION),A(U.write),U.swap()}function lt(o){r.BLOOM&&ui(U.read,Ne),r.SUNRAYS&&(di(U.read,U.write,ge),ci(ge,Qe,1)),o==null||!r.TRANSPARENT?(n.blendFunc(n.ONE,n.ONE_MINUS_SRC_ALPHA),n.enable(n.BLEND)):n.disable(n.BLEND),r.TRANSPARENT||ai(o,vi(r.BACK_COLOR)),o==null&&r.TRANSPARENT&&si(o),li(o)}function ai(o,u){tt.bind(),n.uniform4f(tt.uniforms.color,u.r,u.g,u.b,1),A(o)}function si(o){it.bind(),n.uniform1f(it.uniforms.aspectRatio,a.width/a.height),A(o)}function li(o){let u=o==null?n.drawingBufferWidth:o.width,l=o==null?n.drawingBufferHeight:o.height;if(j.bind(),r.SHADING&&n.uniform2f(j.uniforms.texelSize,1/u,1/l),n.uniform1i(j.uniforms.uTexture,U.read.attach(0)),r.BLOOM){n.uniform1i(j.uniforms.uBloom,Ne.attach(1)),n.uniform1i(j.uniforms.uDithering,Ze.attach(2));let c=bi(Ze,u,l);n.uniform2f(j.uniforms.ditherScale,c.x,c.y)}r.SUNRAYS&&n.uniform1i(j.uniforms.uSunrays,ge.attach(3)),A(o)}function ui(o,u){if(ie.length<2)return;let l=u;n.disable(n.BLEND),be.bind();let c=r.BLOOM_THRESHOLD*r.BLOOM_SOFT_KNEE+1e-4,m=r.BLOOM_THRESHOLD-c,g=c*2,b=.25/c;n.uniform3f(be.uniforms.curve,m,g,b),n.uniform1f(be.uniforms.threshold,r.BLOOM_THRESHOLD),n.uniform1i(be.uniforms.uTexture,o.attach(0)),A(l),le.bind();for(let x=0;x<ie.length;x++){let S=ie[x];n.uniform2f(le.uniforms.texelSize,l.texelSizeX,l.texelSizeY),n.uniform1i(le.uniforms.uTexture,l.attach(0)),A(S),l=S}n.blendFunc(n.ONE,n.ONE),n.enable(n.BLEND);for(let x=ie.length-2;x>=0;x--){let S=ie[x];n.uniform2f(le.uniforms.texelSize,l.texelSizeX,l.texelSizeY),n.uniform1i(le.uniforms.uTexture,l.attach(0)),n.viewport(0,0,S.width,S.height),A(S),l=S}n.disable(n.BLEND),xe.bind(),n.uniform2f(xe.uniforms.texelSize,l.texelSizeX,l.texelSizeY),n.uniform1i(xe.uniforms.uTexture,l.attach(0)),n.uniform1f(xe.uniforms.intensity,r.BLOOM_INTENSITY),A(u)}function di(o,u,l){n.disable(n.BLEND),nt.bind(),n.uniform1i(nt.uniforms.uTexture,o.attach(0)),A(u),Be.bind(),n.uniform1f(Be.uniforms.weight,r.SUNRAYS_WEIGHT),n.uniform1i(Be.uniforms.uTexture,u.attach(0)),A(l)}function ci(o,u,l){se.bind();for(let c=0;c<l;c++)n.uniform2f(se.uniforms.texelSize,o.texelSizeX,0),n.uniform1i(se.uniforms.uTexture,o.attach(0)),A(u),n.uniform2f(se.uniforms.texelSize,0,o.texelSizeY),n.uniform1i(se.uniforms.uTexture,u.attach(0)),A(o)}function fi(o){let u=o.deltaX*r.SPLAT_FORCE,l=o.deltaY*r.SPLAT_FORCE;dt(o.texcoordX,o.texcoordY,u,l,o.color)}function ut(o){for(let u=0;u<o;u++){const l=Me();l.r*=10,l.g*=10,l.b*=10;const c=Math.random(),m=Math.random(),g=1e3*(Math.random()-.5),b=1e3*(Math.random()-.5);dt(c,m,g,b,l)}}function dt(o,u,l,c,m){K.bind(),n.uniform1i(K.uniforms.uTarget,y.read.attach(0)),n.uniform1f(K.uniforms.aspectRatio,a.width/a.height),n.uniform2f(K.uniforms.point,o,u),n.uniform3f(K.uniforms.color,l,c,0),n.uniform1f(K.uniforms.radius,hi(r.SPLAT_RADIUS/100)),A(y.write),y.swap(),n.uniform1i(K.uniforms.uTarget,U.read.attach(0)),n.uniform3f(K.uniforms.color,m.r,m.g,m.b),A(U.write),U.swap()}function hi(o){let u=a.width/a.height;return u>1&&(o*=u),o}a.addEventListener("mousedown",o=>{let u=z(o.offsetX),l=z(o.offsetY),c=f.find(m=>m.id==-1);c==null&&(c=new s),ct(c,-1,u,l)}),a.addEventListener("mousemove",o=>{let u=f[0],l=z(o.offsetX),c=z(o.offsetY);ft(u,l,c)}),window.addEventListener("mouseup",()=>{ht(f[0])}),a.addEventListener("touchstart",o=>{o.preventDefault();const u=o.targetTouches;for(;u.length>=f.length;)f.push(new s);for(let l=0;l<u.length;l++){let c=z(u[l].pageX),m=z(u[l].pageY);ct(f[l+1],u[l].identifier,c,m)}}),a.addEventListener("touchmove",o=>{o.preventDefault();const u=o.targetTouches;for(let l=0;l<u.length;l++){let c=f[l+1];if(!c.down)continue;let m=z(u[l].pageX),g=z(u[l].pageY);ft(c,m,g)}},!1),window.addEventListener("touchend",o=>{const u=o.changedTouches;for(let l=0;l<u.length;l++){let c=f.find(m=>m.id==u[l].identifier);c!=null&&ht(c)}}),window.addEventListener("keydown",o=>{o.code==="KeyP"&&(r.PAUSED=!r.PAUSED),o.key===" "&&_.push(parseInt(Math.random()*20)+5)});function ct(o,u,l,c){o.id=u,o.down=!0,o.moved=!1,o.texcoordX=l/a.width,o.texcoordY=1-c/a.height,o.prevTexcoordX=o.texcoordX,o.prevTexcoordY=o.texcoordY,o.deltaX=0,o.deltaY=0,o.color=Me()}function ft(o,u,l){o.prevTexcoordX=o.texcoordX,o.prevTexcoordY=o.texcoordY,o.texcoordX=u/a.width,o.texcoordY=1-l/a.height,o.deltaX=_i(o.texcoordX-o.prevTexcoordX),o.deltaY=mi(o.texcoordY-o.prevTexcoordY),o.moved=Math.abs(o.deltaX)>0||Math.abs(o.deltaY)>0}function ht(o){o.down=!1}function _i(o){let u=a.width/a.height;return u<1&&(o*=u),o}function mi(o){let u=a.width/a.height;return u>1&&(o/=u),o}function Me(){let o=pi(Math.random(),1,1);return o.r*=.15,o.g*=.15,o.b*=.15,o}function pi(o,u,l){let c,m,g,b,x,S,P,M;switch(b=Math.floor(o*6),x=o*6-b,S=l*(1-u),P=l*(1-x*u),M=l*(1-(1-x)*u),b%6){case 0:c=l,m=M,g=S;break;case 1:c=P,m=l,g=S;break;case 2:c=S,m=l,g=M;break;case 3:c=S,m=P,g=l;break;case 4:c=M,m=S,g=l;break;case 5:c=l,m=S,g=P;break}return{r:c,g:m,b:g}}function vi(o){return{r:o.r/255,g:o.g/255,b:o.b/255}}function gi(o,u,l){let c=l-u;return c==0?u:(o-u)%c+u}function ue(o){let u=n.drawingBufferWidth/n.drawingBufferHeight;u<1&&(u=1/u);let l=Math.round(o),c=Math.round(o*u);return n.drawingBufferWidth>n.drawingBufferHeight?{width:c,height:l}:{width:l,height:c}}function bi(o,u,l){return{x:u/o.width,y:l/o.height}}function z(o){let u=window.devicePixelRatio||1;return Math.floor(o*u)}function xi(o){if(o.length==0)return 0;let u=0;for(let l=0;l<o.length;l++)u=(u<<5)-u+o.charCodeAt(l),u|=0;return u}}),(t,a)=>(Si(),Ti("canvas",{ref:(r,s)=>{s.webGl=r,e.value=r}},null,512))}};var tn=wi(Qi,[["__scopeId","data-v-a54ba352"]]);export{tn as default};
