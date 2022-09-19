import{k as gt,m as St,o as Dt,p as _t}from"./vendor.52d332d0.js";import{i as At}from"./dat.gui.module.ceda738c.js";import{_ as yt}from"./plugin-vue_export-helper.2100c508.js";var bt="./dist/LDR_LLL1_0.140c55bd.png";const Lt=`precision highp float;
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
`,Ut=`
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
`,Ft=`
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
`,wt=`
precision mediump float;
precision mediump sampler2D;

varying highp vec2 vUv;
uniform sampler2D uTexture;

void main () {
    gl_FragColor = texture2D(uTexture, vUv);
}
`,Ot=`
precision mediump float;
precision mediump sampler2D;

varying highp vec2 vUv;
uniform sampler2D uTexture;
uniform float value;

void main () {
    gl_FragColor = value * texture2D(uTexture, vUv);
}
`,Nt=`
precision mediump float;

uniform vec4 color;

void main () {
    gl_FragColor = color;
}
`,Bt=`
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
`,Pt=`
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
`,It=`
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
`,Ct=`
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
`,Mt=`
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
`,Gt=`
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
`,Xt=`
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
`,zt=`
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
`,Yt=`
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
}`,Ht=`
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
`,Vt=`
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
`,kt=`
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
`,Wt=`
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
`,Kt=`
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
`;var h={ver1:Lt,ver2:Ut,ver3:Ft,ver4:wt,ver5:Ot,ver6:Nt,ver7:Bt,ver8:Pt,ver9:It,ver10:Ct,ver11:Mt,ver12:Gt,ver13:Xt,ver14:zt,ver15:Yt,ver16:Ht,ver17:Vt,ver18:kt,ver19:Wt,ver20:Kt};const qt={setup(jt){const re=gt(null);let m=null;return St(Se=>{m=re.value,W()&&setTimeout(()=>{promoPopup.style.display="table"},2e4),de();let a={SIM_RESOLUTION:128,DYE_RESOLUTION:1024,CAPTURE_RESOLUTION:512,DENSITY_DISSIPATION:1,VELOCITY_DISSIPATION:.2,PRESSURE:.8,PRESSURE_ITERATIONS:20,CURL:30,SPLAT_RADIUS:.25,SPLAT_FORCE:6e3,SHADING:!0,COLORFUL:!0,COLOR_UPDATE_SPEED:10,PAUSED:!1,BACK_COLOR:{r:0,g:0,b:0},TRANSPARENT:!1,BLOOM:!0,BLOOM_ITERATIONS:8,BLOOM_RESOLUTION:256,BLOOM_INTENSITY:.8,BLOOM_THRESHOLD:.6,BLOOM_SOFT_KNEE:.7,SUNRAYS:!0,SUNRAYS_RESOLUTION:196,SUNRAYS_WEIGHT:1};function w(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[30,0,300]}let R=[],I=[];R.push(new w);const{gl:t,ext:T}=De(m);W()&&(a.DYE_RESOLUTION=512),T.supportLinearFiltering||(a.DYE_RESOLUTION=512,a.SHADING=!1,a.BLOOM=!1,a.SUNRAYS=!1),Ae();function De(e){const i={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let r=e.getContext("webgl2",i);const o=!!r;o||(r=e.getContext("webgl",i)||e.getContext("experimental-webgl",i));let n,u;o?(r.getExtension("EXT_color_buffer_float"),u=r.getExtension("OES_texture_float_linear")):(n=r.getExtension("OES_texture_half_float"),u=r.getExtension("OES_texture_half_float_linear")),r.clearColor(0,0,0,1);const l=o?r.HALF_FLOAT:n.HALF_FLOAT_OES;let c,f,g;return o?(c=y(r,r.RGBA16F,r.RGBA,l),f=y(r,r.RG16F,r.RG,l),g=y(r,r.R16F,r.RED,l)):(c=y(r,r.RGBA,r.RGBA,l),f=y(r,r.RGBA,r.RGBA,l),g=y(r,r.RGBA,r.RGBA,l)),{gl:r,ext:{formatRGBA:c,formatRG:f,formatR:g,halfFloatTexType:l,supportLinearFiltering:u}}}function y(e,i,r,o){if(!_e(e,i,r,o))switch(i){case e.R16F:return y(e,e.RG16F,e.RG,o);case e.RG16F:return y(e,e.RGBA16F,e.RGBA,o);default:return null}return{internalFormat:i,format:r}}function _e(e,i,r,o){let n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,i,4,4,0,r,o,null);let u=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,u),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0),e.checkFramebufferStatus(e.FRAMEBUFFER)==e.FRAMEBUFFER_COMPLETE}function Ae(){var e=new At.GUI({width:300});e.add(a,"DYE_RESOLUTION",{high:1024,medium:512,low:256,"very low":128}).name("quality").onFinishChange(H),e.add(a,"SIM_RESOLUTION",{32:32,64:64,128:128,256:256}).name("sim resolution").onFinishChange(H),e.add(a,"DENSITY_DISSIPATION",0,4).name("density diffusion"),e.add(a,"VELOCITY_DISSIPATION",0,4).name("velocity diffusion"),e.add(a,"PRESSURE",0,1).name("pressure"),e.add(a,"CURL",0,50).name("vorticity").step(1),e.add(a,"SPLAT_RADIUS",.01,1).name("splat radius"),e.add(a,"SHADING").name("shading").onFinishChange(V),e.add(a,"COLORFUL").name("colorful"),e.add(a,"PAUSED").name("paused").listen(),e.add({fun:()=>{I.push(parseInt(Math.random()*20)+5)}},"fun").name("Random splats");let i=e.addFolder("Bloom");i.add(a,"BLOOM").name("enabled").onFinishChange(V),i.add(a,"BLOOM_INTENSITY",.1,2).name("intensity"),i.add(a,"BLOOM_THRESHOLD",0,1).name("threshold");let r=e.addFolder("Sunrays");r.add(a,"SUNRAYS").name("enabled").onFinishChange(V),r.add(a,"SUNRAYS_WEIGHT",.3,1).name("weight");let o=e.addFolder("Capture");o.addColor(a,"BACK_COLOR").name("background color"),o.add(a,"TRANSPARENT").name("transparent"),o.add({fun:ye},"fun").name("take screenshot");let n=e.add({fun:()=>{window.open("https://github.com/PavelDoGreat/WebGL-Fluid-Simulation"),ga("send","event","link button","github")}},"fun").name("Github");n.__li.className="cr function bigFont",n.__li.style.borderLeft="3px solid #8C8C8C";let u=document.createElement("span");n.domElement.parentElement.appendChild(u),u.className="icon github";let l=e.add({fun:()=>{ga("send","event","link button","twitter"),window.open("https://twitter.com/PavelDoGreat")}},"fun").name("Twitter");l.__li.className="cr function bigFont",l.__li.style.borderLeft="3px solid #8C8C8C";let c=document.createElement("span");l.domElement.parentElement.appendChild(c),c.className="icon twitter";let f=e.add({fun:()=>{ga("send","event","link button","discord"),window.open("https://discordapp.com/invite/CeqZDDE")}},"fun").name("Discord");f.__li.className="cr function bigFont",f.__li.style.borderLeft="3px solid #8C8C8C";let g=document.createElement("span");f.domElement.parentElement.appendChild(g),g.className="icon discord";let _=e.add({fun:()=>{ga("send","event","link button","app"),window.open("http://onelink.to/5b58bn")}},"fun").name("Check out mobile app");_.__li.className="cr function appBigFont",_.__li.style.borderLeft="3px solid #00FF7F";let ge=document.createElement("span");_.domElement.parentElement.appendChild(ge),ge.className="icon app",W()&&e.close()}function W(){return/Mobi|Android/i.test(navigator.userAgent)}function ye(){let e=P(a.CAPTURE_RESOLUTION),i=D(e.width,e.height,T.formatRGBA.internalFormat,T.formatRGBA.format,T.halfFloatTexType,t.NEAREST);he(i);let r=be(i);r=Le(r,i.width,i.height);let n=Ue(r,i.width,i.height).toDataURL();Fe("fluid.png",n),URL.revokeObjectURL(n)}function be(e){t.bindFramebuffer(t.FRAMEBUFFER,e.fbo);let i=e.width*e.height*4,r=new Float32Array(i);return t.readPixels(0,0,e.width,e.height,t.RGBA,t.FLOAT,r),r}function Le(e,i,r){let o=new Uint8Array(e.length),n=0;for(let u=r-1;u>=0;u--)for(let l=0;l<i;l++){let c=u*i*4+l*4;o[c+0]=C(e[n+0])*255,o[c+1]=C(e[n+1])*255,o[c+2]=C(e[n+2])*255,o[c+3]=C(e[n+3])*255,n+=4}return o}function C(e){return Math.min(Math.max(e,0),1)}function Ue(e,i,r){let o=document.createElement("canvas"),n=o.getContext("2d");o.width=i,o.height=r;let u=n.createImageData(i,r);return u.data.set(e),n.putImageData(u,0,0),o}function Fe(e,i){let r=document.createElement("a");r.download=e,r.href=i,document.body.appendChild(r),r.click(),document.body.removeChild(r)}class we{constructor(i,r){this.vertexShader=i,this.fragmentShaderSource=r,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(i){let r=0;for(let n=0;n<i.length;n++)r+=Rt(i[n]);let o=this.programs[r];if(o==null){let n=d(t.FRAGMENT_SHADER,this.fragmentShaderSource,i);o=ie(this.vertexShader,n),this.programs[r]=o}o!=this.activeProgram&&(this.uniforms=oe(o),this.activeProgram=o)}bind(){t.useProgram(this.activeProgram)}}class p{constructor(i,r){this.uniforms={},this.program=ie(i,r),this.uniforms=oe(this.program)}bind(){t.useProgram(this.program)}}function ie(e,i){let r=t.createProgram();return t.attachShader(r,e),t.attachShader(r,i),t.linkProgram(r),t.getProgramParameter(r,t.LINK_STATUS)||console.trace(t.getProgramInfoLog(r)),r}function oe(e){let i=[],r=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<r;o++){let n=t.getActiveUniform(e,o).name;i[n]=t.getUniformLocation(e,n)}return i}function d(e,i,r){i=Oe(i,r);const o=t.createShader(e);return t.shaderSource(o,i),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS)||console.trace(t.getShaderInfoLog(o)),o}function Oe(e,i){if(i==null)return e;let r="";return i.forEach(o=>{r+="#define "+o+`
`}),r+e}const E=d(t.VERTEX_SHADER,h.ver1),Ne=d(t.VERTEX_SHADER,h.ver2),Be=d(t.FRAGMENT_SHADER,h.ver3),Pe=d(t.FRAGMENT_SHADER,h.ver4),Ie=d(t.FRAGMENT_SHADER,h.ver5),Ce=d(t.FRAGMENT_SHADER,h.ver6),Me=d(t.FRAGMENT_SHADER,h.ver7),Ge=h.ver8,Xe=d(t.FRAGMENT_SHADER,h.ver9),ze=d(t.FRAGMENT_SHADER,h.ver10),Ye=d(t.FRAGMENT_SHADER,h.ver11),He=d(t.FRAGMENT_SHADER,h.ver12),Ve=d(t.FRAGMENT_SHADER,h.ver13),ke=d(t.FRAGMENT_SHADER,h.ver14),We=d(t.FRAGMENT_SHADER,h.ver15,T.supportLinearFiltering?null:["MANUAL_FILTERING"]),Ke=d(t.FRAGMENT_SHADER,h.ver16),qe=d(t.FRAGMENT_SHADER,h.ver17),je=d(t.FRAGMENT_SHADER,h.ver18),Ze=d(t.FRAGMENT_SHADER,h.ver19),Je=d(t.FRAGMENT_SHADER,h.ver20),v=(()=>(t.bindBuffer(t.ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),t.STATIC_DRAW),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),t.STATIC_DRAW),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(0),(e,i=!1)=>{e==null?(t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),t.bindFramebuffer(t.FRAMEBUFFER,null)):(t.viewport(0,0,e.width,e.height),t.bindFramebuffer(t.FRAMEBUFFER,e.fbo)),i&&(t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT)),t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)}))();let x,s,K,q,b,j,F=[],M,ne,ae=tt(bt);const N=new p(Ne,Be),ue=new p(E,Pe),Z=new p(E,Ie),le=new p(E,Ce),ce=new p(E,Me),G=new p(E,Xe),B=new p(E,ze),X=new p(E,Ye),se=new p(E,He),J=new p(E,Ve),L=new p(E,ke),S=new p(E,We),Q=new p(E,Ke),$=new p(E,qe),O=new p(E,je),z=new p(E,Ze),Y=new p(E,Je),U=new we(E,Ge);function H(){let e=P(a.SIM_RESOLUTION),i=P(a.DYE_RESOLUTION);const r=T.halfFloatTexType,o=T.formatRGBA,n=T.formatRG,u=T.formatR,l=T.supportLinearFiltering?t.LINEAR:t.NEAREST;t.disable(t.BLEND),x==null?x=ee(i.width,i.height,o.internalFormat,o.format,r,l):x=fe(x,i.width,i.height,o.internalFormat,o.format,r,l),s==null?s=ee(e.width,e.height,n.internalFormat,n.format,r,l):s=fe(s,e.width,e.height,n.internalFormat,n.format,r,l),K=D(e.width,e.height,u.internalFormat,u.format,r,t.NEAREST),q=D(e.width,e.height,u.internalFormat,u.format,r,t.NEAREST),b=ee(e.width,e.height,u.internalFormat,u.format,r,t.NEAREST),Qe(),$e()}function Qe(){let e=P(a.BLOOM_RESOLUTION);const i=T.halfFloatTexType,r=T.formatRGBA,o=T.supportLinearFiltering?t.LINEAR:t.NEAREST;j=D(e.width,e.height,r.internalFormat,r.format,i,o),F.length=0;for(let n=0;n<a.BLOOM_ITERATIONS;n++){let u=e.width>>n+1,l=e.height>>n+1;if(u<2||l<2)break;let c=D(u,l,r.internalFormat,r.format,i,o);F.push(c)}}function $e(){let e=P(a.SUNRAYS_RESOLUTION);const i=T.halfFloatTexType,r=T.formatR,o=T.supportLinearFiltering?t.LINEAR:t.NEAREST;M=D(e.width,e.height,r.internalFormat,r.format,i,o),ne=D(e.width,e.height,r.internalFormat,r.format,i,o)}function D(e,i,r,o,n,u){t.activeTexture(t.TEXTURE0);let l=t.createTexture();t.bindTexture(t.TEXTURE_2D,l),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,u),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,u),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,r,e,i,0,o,n,null);let c=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,c),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,l,0),t.viewport(0,0,e,i),t.clear(t.COLOR_BUFFER_BIT);let f=1/e,g=1/i;return{texture:l,fbo:c,width:e,height:i,texelSizeX:f,texelSizeY:g,attach(_){return t.activeTexture(t.TEXTURE0+_),t.bindTexture(t.TEXTURE_2D,l),_}}}function ee(e,i,r,o,n,u){let l=D(e,i,r,o,n,u),c=D(e,i,r,o,n,u);return{width:e,height:i,texelSizeX:l.texelSizeX,texelSizeY:l.texelSizeY,get read(){return l},set read(f){l=f},get write(){return c},set write(f){c=f},swap(){let f=l;l=c,c=f}}}function et(e,i,r,o,n,u,l){let c=D(i,r,o,n,u,l);return ue.bind(),t.uniform1i(ue.uniforms.uTexture,e.attach(0)),v(c),c}function fe(e,i,r,o,n,u,l){return e.width==i&&e.height==r||(e.read=et(e.read,i,r,o,n,u,l),e.write=D(i,r,o,n,u,l),e.width=i,e.height=r,e.texelSizeX=1/i,e.texelSizeY=1/r),e}function tt(e){let i=t.createTexture();t.bindTexture(t.TEXTURE_2D,i),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.REPEAT),t.texImage2D(t.TEXTURE_2D,0,t.RGB,1,1,0,t.RGB,t.UNSIGNED_BYTE,new Uint8Array([255,255,255]));let r={texture:i,width:1,height:1,attach(n){return t.activeTexture(t.TEXTURE0+n),t.bindTexture(t.TEXTURE_2D,i),n}},o=new Image;return o.onload=()=>{r.width=o.width,r.height=o.height,t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,t.RGB,t.RGB,t.UNSIGNED_BYTE,o)},o.src=e,r}function V(){let e=[];a.SHADING&&e.push("SHADING"),a.BLOOM&&e.push("BLOOM"),a.SUNRAYS&&e.push("SUNRAYS"),U.setKeywords(e)}V(),H(),Te(parseInt(Math.random()*20)+5);let me=Date.now(),k=0;ve();function ve(){const e=rt();de()&&H(),it(e),ot(),a.PAUSED||nt(e),he(null),requestAnimationFrame(ve)}function rt(){let e=Date.now(),i=(e-me)/1e3;return i=Math.min(i,.016666),me=e,i}function de(){let e=A(m.clientWidth),i=A(m.clientHeight);return m.width!=e||m.height!=i?(m.width=e,m.height=i,!0):!1}function it(e){!a.COLORFUL||(k+=e*a.COLOR_UPDATE_SPEED,k>=1&&(k=Et(k,0,1),R.forEach(i=>{i.color=te()})))}function ot(){I.length>0&&Te(I.pop()),R.forEach(e=>{e.moved&&(e.moved=!1,mt(e))})}function nt(e){t.disable(t.BLEND),$.bind(),t.uniform2f($.uniforms.texelSize,s.texelSizeX,s.texelSizeY),t.uniform1i($.uniforms.uVelocity,s.read.attach(0)),v(q),O.bind(),t.uniform2f(O.uniforms.texelSize,s.texelSizeX,s.texelSizeY),t.uniform1i(O.uniforms.uVelocity,s.read.attach(0)),t.uniform1i(O.uniforms.uCurl,q.attach(1)),t.uniform1f(O.uniforms.curl,a.CURL),t.uniform1f(O.uniforms.dt,e),v(s.write),s.swap(),Q.bind(),t.uniform2f(Q.uniforms.texelSize,s.texelSizeX,s.texelSizeY),t.uniform1i(Q.uniforms.uVelocity,s.read.attach(0)),v(K),Z.bind(),t.uniform1i(Z.uniforms.uTexture,b.read.attach(0)),t.uniform1f(Z.uniforms.value,a.PRESSURE),v(b.write),b.swap(),z.bind(),t.uniform2f(z.uniforms.texelSize,s.texelSizeX,s.texelSizeY),t.uniform1i(z.uniforms.uDivergence,K.attach(0));for(let r=0;r<a.PRESSURE_ITERATIONS;r++)t.uniform1i(z.uniforms.uPressure,b.read.attach(1)),v(b.write),b.swap();Y.bind(),t.uniform2f(Y.uniforms.texelSize,s.texelSizeX,s.texelSizeY),t.uniform1i(Y.uniforms.uPressure,b.read.attach(0)),t.uniform1i(Y.uniforms.uVelocity,s.read.attach(1)),v(s.write),s.swap(),S.bind(),t.uniform2f(S.uniforms.texelSize,s.texelSizeX,s.texelSizeY),T.supportLinearFiltering||t.uniform2f(S.uniforms.dyeTexelSize,s.texelSizeX,s.texelSizeY);let i=s.read.attach(0);t.uniform1i(S.uniforms.uVelocity,i),t.uniform1i(S.uniforms.uSource,i),t.uniform1f(S.uniforms.dt,e),t.uniform1f(S.uniforms.dissipation,a.VELOCITY_DISSIPATION),v(s.write),s.swap(),T.supportLinearFiltering||t.uniform2f(S.uniforms.dyeTexelSize,x.texelSizeX,x.texelSizeY),t.uniform1i(S.uniforms.uVelocity,s.read.attach(0)),t.uniform1i(S.uniforms.uSource,x.read.attach(1)),t.uniform1f(S.uniforms.dissipation,a.DENSITY_DISSIPATION),v(x.write),x.swap()}function he(e){a.BLOOM&&ct(x.read,j),a.SUNRAYS&&(st(x.read,x.write,M),ft(M,ne,1)),e==null||!a.TRANSPARENT?(t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),t.enable(t.BLEND)):t.disable(t.BLEND),a.TRANSPARENT||at(e,pt(a.BACK_COLOR)),e==null&&a.TRANSPARENT&&ut(e),lt(e)}function at(e,i){le.bind(),t.uniform4f(le.uniforms.color,i.r,i.g,i.b,1),v(e)}function ut(e){ce.bind(),t.uniform1f(ce.uniforms.aspectRatio,m.width/m.height),v(e)}function lt(e){let i=e==null?t.drawingBufferWidth:e.width,r=e==null?t.drawingBufferHeight:e.height;if(U.bind(),a.SHADING&&t.uniform2f(U.uniforms.texelSize,1/i,1/r),t.uniform1i(U.uniforms.uTexture,x.read.attach(0)),a.BLOOM){t.uniform1i(U.uniforms.uBloom,j.attach(1)),t.uniform1i(U.uniforms.uDithering,ae.attach(2));let o=xt(ae,i,r);t.uniform2f(U.uniforms.ditherScale,o.x,o.y)}a.SUNRAYS&&t.uniform1i(U.uniforms.uSunrays,M.attach(3)),v(e)}function ct(e,i){if(F.length<2)return;let r=i;t.disable(t.BLEND),G.bind();let o=a.BLOOM_THRESHOLD*a.BLOOM_SOFT_KNEE+1e-4,n=a.BLOOM_THRESHOLD-o,u=o*2,l=.25/o;t.uniform3f(G.uniforms.curve,n,u,l),t.uniform1f(G.uniforms.threshold,a.BLOOM_THRESHOLD),t.uniform1i(G.uniforms.uTexture,e.attach(0)),v(r),B.bind();for(let c=0;c<F.length;c++){let f=F[c];t.uniform2f(B.uniforms.texelSize,r.texelSizeX,r.texelSizeY),t.uniform1i(B.uniforms.uTexture,r.attach(0)),v(f),r=f}t.blendFunc(t.ONE,t.ONE),t.enable(t.BLEND);for(let c=F.length-2;c>=0;c--){let f=F[c];t.uniform2f(B.uniforms.texelSize,r.texelSizeX,r.texelSizeY),t.uniform1i(B.uniforms.uTexture,r.attach(0)),t.viewport(0,0,f.width,f.height),v(f),r=f}t.disable(t.BLEND),X.bind(),t.uniform2f(X.uniforms.texelSize,r.texelSizeX,r.texelSizeY),t.uniform1i(X.uniforms.uTexture,r.attach(0)),t.uniform1f(X.uniforms.intensity,a.BLOOM_INTENSITY),v(i)}function st(e,i,r){t.disable(t.BLEND),se.bind(),t.uniform1i(se.uniforms.uTexture,e.attach(0)),v(i),J.bind(),t.uniform1f(J.uniforms.weight,a.SUNRAYS_WEIGHT),t.uniform1i(J.uniforms.uTexture,i.attach(0)),v(r)}function ft(e,i,r){N.bind();for(let o=0;o<r;o++)t.uniform2f(N.uniforms.texelSize,e.texelSizeX,0),t.uniform1i(N.uniforms.uTexture,e.attach(0)),v(i),t.uniform2f(N.uniforms.texelSize,0,e.texelSizeY),t.uniform1i(N.uniforms.uTexture,i.attach(0)),v(e)}function mt(e){let i=e.deltaX*a.SPLAT_FORCE,r=e.deltaY*a.SPLAT_FORCE;pe(e.texcoordX,e.texcoordY,i,r,e.color)}function Te(e){for(let i=0;i<e;i++){const r=te();r.r*=10,r.g*=10,r.b*=10;const o=Math.random(),n=Math.random(),u=1e3*(Math.random()-.5),l=1e3*(Math.random()-.5);pe(o,n,u,l,r)}}function pe(e,i,r,o,n){L.bind(),t.uniform1i(L.uniforms.uTarget,s.read.attach(0)),t.uniform1f(L.uniforms.aspectRatio,m.width/m.height),t.uniform2f(L.uniforms.point,e,i),t.uniform3f(L.uniforms.color,r,o,0),t.uniform1f(L.uniforms.radius,vt(a.SPLAT_RADIUS/100)),v(s.write),s.swap(),t.uniform1i(L.uniforms.uTarget,x.read.attach(0)),t.uniform3f(L.uniforms.color,n.r,n.g,n.b),v(x.write),x.swap()}function vt(e){let i=m.width/m.height;return i>1&&(e*=i),e}m.addEventListener("mousemove",e=>{let i=R[0];if(!i.down)return;let r=A(e.offsetX),o=A(e.offsetY);xe(i,r,o)}),m.addEventListener("mousedown",e=>{let i=A(e.offsetX),r=A(e.offsetY),o=R.find(n=>n.id==-1);o==null&&(o=new w),Ee(o,-1,i,r)}),window.addEventListener("mouseup",()=>{Re(R[0])}),m.addEventListener("touchstart",e=>{e.preventDefault();const i=e.targetTouches;for(;i.length>=R.length;)R.push(new w);for(let r=0;r<i.length;r++){let o=A(i[r].pageX),n=A(i[r].pageY);Ee(R[r+1],i[r].identifier,o,n)}}),m.addEventListener("touchmove",e=>{e.preventDefault();const i=e.targetTouches;for(let r=0;r<i.length;r++){let o=R[r+1];if(!o.down)continue;let n=A(i[r].pageX),u=A(i[r].pageY);xe(o,n,u)}},!1),window.addEventListener("touchend",e=>{const i=e.changedTouches;for(let r=0;r<i.length;r++){let o=R.find(n=>n.id==i[r].identifier);o!=null&&Re(o)}}),window.addEventListener("keydown",e=>{e.code==="KeyP"&&(a.PAUSED=!a.PAUSED),e.key===" "&&I.push(parseInt(Math.random()*20)+5)});function Ee(e,i,r,o){e.id=i,e.down=!0,e.moved=!1,e.texcoordX=r/m.width,e.texcoordY=1-o/m.height,e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.deltaX=0,e.deltaY=0,e.color=te()}function xe(e,i,r){e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.texcoordX=i/m.width,e.texcoordY=1-r/m.height,e.deltaX=dt(e.texcoordX-e.prevTexcoordX),e.deltaY=ht(e.texcoordY-e.prevTexcoordY),e.moved=Math.abs(e.deltaX)>0||Math.abs(e.deltaY)>0}function Re(e){e.down=!1}function dt(e){let i=m.width/m.height;return i<1&&(e*=i),e}function ht(e){let i=m.width/m.height;return i>1&&(e/=i),e}function te(){let e=Tt(Math.random(),1,1);return e.r*=.15,e.g*=.15,e.b*=.15,e}function Tt(e,i,r){let o,n,u,l,c,f,g,_;switch(l=Math.floor(e*6),c=e*6-l,f=r*(1-i),g=r*(1-c*i),_=r*(1-(1-c)*i),l%6){case 0:o=r,n=_,u=f;break;case 1:o=g,n=r,u=f;break;case 2:o=f,n=r,u=_;break;case 3:o=f,n=g,u=r;break;case 4:o=_,n=f,u=r;break;case 5:o=r,n=f,u=g;break}return{r:o,g:n,b:u}}function pt(e){return{r:e.r/255,g:e.g/255,b:e.b/255}}function Et(e,i,r){let o=r-i;return o==0?i:(e-i)%o+i}function P(e){let i=t.drawingBufferWidth/t.drawingBufferHeight;i<1&&(i=1/i);let r=Math.round(e),o=Math.round(e*i);return t.drawingBufferWidth>t.drawingBufferHeight?{width:o,height:r}:{width:r,height:o}}function xt(e,i,r){return{x:i/e.width,y:r/e.height}}function A(e){let i=window.devicePixelRatio||1;return Math.floor(e*i)}function Rt(e){if(e.length==0)return 0;let i=0;for(let r=0;r<e.length;r++)i=(i<<5)-i+e.charCodeAt(r),i|=0;return i}}),(Se,a)=>(Dt(),_t("canvas",{ref:(w,R)=>{R.webGl=w,re.value=w}},null,512))}};var $t=yt(qt,[["__scopeId","data-v-e3be3ab6"]]);export{$t as default};
