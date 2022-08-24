import{k as Ut,m as Ft,n as wt,o as Ot,p as Nt}from"./vendor.a1235956.js";import{i as Bt}from"./dat.gui.module.ceda738c.js";import{_ as Pt}from"./plugin-vue_export-helper.2100c508.js";var It="./dist/LDR_LLL1_0.140c55bd.png";const Ct=`precision highp float;
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
`,Mt=`
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
`,Gt=`
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
`,Xt=`
precision mediump float;
precision mediump sampler2D;

varying highp vec2 vUv;
uniform sampler2D uTexture;

void main () {
    gl_FragColor = texture2D(uTexture, vUv);
}
`,zt=`
precision mediump float;
precision mediump sampler2D;

varying highp vec2 vUv;
uniform sampler2D uTexture;
uniform float value;

void main () {
    gl_FragColor = value * texture2D(uTexture, vUv);
}
`,Yt=`
precision mediump float;

uniform vec4 color;

void main () {
    gl_FragColor = color;
}
`,Ht=`
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
`,Vt=`
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
`,kt=`
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
`,Wt=`
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
`,Kt=`
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
`,qt=`
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
`,jt=`
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
`,Zt=`
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
`,Jt=`
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
}`,Qt=`
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
`,$t=`
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
`,er=`
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
`,tr=`
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
`,rr=`
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
`;var T={ver1:Ct,ver2:Mt,ver3:Gt,ver4:Xt,ver5:zt,ver6:Yt,ver7:Ht,ver8:Vt,ver9:kt,ver10:Wt,ver11:Kt,ver12:qt,ver13:jt,ver14:Zt,ver15:Jt,ver16:Qt,ver17:$t,ver18:er,ver19:tr,ver20:rr};const ir={setup(or){const L=Ut(null);let q=null,v=null,j,Z,J,Q,$,ee,te=null;return Ft(Fe=>{const m=L.value;De();let a={SIM_RESOLUTION:128,DYE_RESOLUTION:1024,CAPTURE_RESOLUTION:512,DENSITY_DISSIPATION:1,VELOCITY_DISSIPATION:.2,PRESSURE:.8,PRESSURE_ITERATIONS:20,CURL:30,SPLAT_RADIUS:.25,SPLAT_FORCE:6e3,SHADING:!0,COLORFUL:!0,COLOR_UPDATE_SPEED:10,PAUSED:!1,BACK_COLOR:{r:0,g:0,b:0},TRANSPARENT:!1,BLOOM:!0,BLOOM_ITERATIONS:8,BLOOM_RESOLUTION:256,BLOOM_INTENSITY:.8,BLOOM_THRESHOLD:.6,BLOOM_SOFT_KNEE:.7,SUNRAYS:!0,SUNRAYS_RESOLUTION:196,SUNRAYS_WEIGHT:1};function B(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[30,0,300]}let S=[],M=[];S.push(new B);const{gl:t,ext:p}=we(m);fe()&&(a.DYE_RESOLUTION=512),p.supportLinearFiltering||(a.DYE_RESOLUTION=512,a.SHADING=!1,a.BLOOM=!1,a.SUNRAYS=!1),Ne();function we(e){const i={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let r=e.getContext("webgl2",i);const o=!!r;o||(r=e.getContext("webgl",i)||e.getContext("experimental-webgl",i));let n,u;o?(r.getExtension("EXT_color_buffer_float"),u=r.getExtension("OES_texture_float_linear")):(n=r.getExtension("OES_texture_half_float"),u=r.getExtension("OES_texture_half_float_linear")),r.clearColor(0,0,0,1);const l=o?r.HALF_FLOAT:n.HALF_FLOAT_OES;let c,f,g;return o?(c=b(r,r.RGBA16F,r.RGBA,l),f=b(r,r.RG16F,r.RG,l),g=b(r,r.R16F,r.RED,l)):(c=b(r,r.RGBA,r.RGBA,l),f=b(r,r.RGBA,r.RGBA,l),g=b(r,r.RGBA,r.RGBA,l)),{gl:r,ext:{formatRGBA:c,formatRG:f,formatR:g,halfFloatTexType:l,supportLinearFiltering:u}}}function b(e,i,r,o){if(!Oe(e,i,r,o))switch(i){case e.R16F:return b(e,e.RG16F,e.RG,o);case e.RG16F:return b(e,e.RGBA16F,e.RGBA,o);default:return null}return{internalFormat:i,format:r}}function Oe(e,i,r,o){let n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,i,4,4,0,r,o,null);let u=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,u),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0),e.checkFramebufferStatus(e.FRAMEBUFFER)==e.FRAMEBUFFER_COMPLETE}function Ne(){v=new Bt.GUI({width:300}),v.add(a,"DYE_RESOLUTION",{high:1024,medium:512,low:256,"very low":128}).name("quality").onFinishChange(k),v.add(a,"SIM_RESOLUTION",{32:32,64:64,128:128,256:256}).name("sim resolution").onFinishChange(k),v.add(a,"DENSITY_DISSIPATION",0,4).name("density diffusion"),v.add(a,"VELOCITY_DISSIPATION",0,4).name("velocity diffusion"),v.add(a,"PRESSURE",0,1).name("pressure"),v.add(a,"CURL",0,50).name("vorticity").step(1),v.add(a,"SPLAT_RADIUS",.01,1).name("splat radius"),v.add(a,"SHADING").name("shading").onFinishChange(W),v.add(a,"COLORFUL").name("colorful"),v.add(a,"PAUSED").name("paused").listen(),v.add({fun:()=>{M.push(parseInt(Math.random()*20)+5)}},"fun").name("Random splats");let e=v.addFolder("Bloom");e.add(a,"BLOOM").name("enabled").onFinishChange(W),e.add(a,"BLOOM_INTENSITY",.1,2).name("intensity"),e.add(a,"BLOOM_THRESHOLD",0,1).name("threshold");let i=v.addFolder("Sunrays");i.add(a,"SUNRAYS").name("enabled").onFinishChange(W),i.add(a,"SUNRAYS_WEIGHT",.3,1).name("weight");let r=v.addFolder("Capture");r.addColor(a,"BACK_COLOR").name("background color"),r.add(a,"TRANSPARENT").name("transparent"),r.add({fun:Be},"fun").name("take screenshot");let o=v.add({fun:()=>{window.open("https://github.com/PavelDoGreat/WebGL-Fluid-Simulation")}},"fun").name("Github");o.__li.className="cr function bigFont",o.__li.style.borderLeft="3px solid #8C8C8C";let n=document.createElement("span");o.domElement.parentElement.appendChild(n),n.className="icon github";let u=v.add({fun:()=>{window.open("https://twitter.com/PavelDoGreat")}},"fun").name("Twitter");u.__li.className="cr function bigFont",u.__li.style.borderLeft="3px solid #8C8C8C";let l=document.createElement("span");u.domElement.parentElement.appendChild(l),l.className="icon twitter";let c=v.add({fun:()=>{window.open("https://discordapp.com/invite/CeqZDDE")}},"fun").name("Discord");c.__li.className="cr function bigFont",c.__li.style.borderLeft="3px solid #8C8C8C";let f=document.createElement("span");c.domElement.parentElement.appendChild(f),f.className="icon discord";let g=v.add({fun:()=>{window.open("http://onelink.to/5b58bn")}},"fun").name("Check out mobile app");g.__li.className="cr function appBigFont",g.__li.style.borderLeft="3px solid #00FF7F";let y=document.createElement("span");g.domElement.parentElement.appendChild(y),y.className="icon app",fe()&&v.close()}function fe(){return/Mobi|Android/i.test(navigator.userAgent)}function Be(){let e=C(a.CAPTURE_RESOLUTION),i=_(e.width,e.height,p.formatRGBA.internalFormat,p.formatRGBA.format,p.halfFloatTexType,t.NEAREST);_e(i);let r=Pe(i);r=Ie(r,i.width,i.height);let n=Ce(r,i.width,i.height).toDataURL();Me("fluid.png",n),URL.revokeObjectURL(n)}function Pe(e){t.bindFramebuffer(t.FRAMEBUFFER,e.fbo);let i=e.width*e.height*4,r=new Float32Array(i);return t.readPixels(0,0,e.width,e.height,t.RGBA,t.FLOAT,r),r}function Ie(e,i,r){let o=new Uint8Array(e.length),n=0;for(let u=r-1;u>=0;u--)for(let l=0;l<i;l++){let c=u*i*4+l*4;o[c+0]=G(e[n+0])*255,o[c+1]=G(e[n+1])*255,o[c+2]=G(e[n+2])*255,o[c+3]=G(e[n+3])*255,n+=4}return o}function G(e){return Math.min(Math.max(e,0),1)}function Ce(e,i,r){let o=document.createElement("canvas"),n=o.getContext("2d");o.width=i,o.height=r;let u=n.createImageData(i,r);return u.data.set(e),n.putImageData(u,0,0),o}function Me(e,i){let r=document.createElement("a");r.download=e,r.href=i,document.body.appendChild(r),r.click(),document.body.removeChild(r)}class Ge{constructor(i,r){this.vertexShader=i,this.fragmentShaderSource=r,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(i){let r=0;for(let n=0;n<i.length;n++)r+=bt(i[n]);let o=this.programs[r];if(o==null){let n=h(t.FRAGMENT_SHADER,this.fragmentShaderSource,i);o=me(this.vertexShader,n),this.programs[r]=o}o!=this.activeProgram&&(this.uniforms=ve(o),this.activeProgram=o)}bind(){t.useProgram(this.activeProgram)}}class E{constructor(i,r){this.uniforms={},this.program=me(i,r),this.uniforms=ve(this.program)}bind(){t.useProgram(this.program)}}function me(e,i){let r=t.createProgram();return t.attachShader(r,e),t.attachShader(r,i),t.linkProgram(r),t.getProgramParameter(r,t.LINK_STATUS)||console.trace(t.getProgramInfoLog(r)),r}function ve(e){let i=[],r=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<r;o++){let n=t.getActiveUniform(e,o).name;i[n]=t.getUniformLocation(e,n)}return i}function h(e,i,r){i=Xe(i,r);const o=t.createShader(e);return t.shaderSource(o,i),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS)||console.trace(t.getShaderInfoLog(o)),o}function Xe(e,i){if(i==null)return e;let r="";return i.forEach(o=>{r+="#define "+o+`
`}),r+e}const x=h(t.VERTEX_SHADER,T.ver1),ze=h(t.VERTEX_SHADER,T.ver2),Ye=h(t.FRAGMENT_SHADER,T.ver3),He=h(t.FRAGMENT_SHADER,T.ver4),Ve=h(t.FRAGMENT_SHADER,T.ver5),ke=h(t.FRAGMENT_SHADER,T.ver6),We=h(t.FRAGMENT_SHADER,T.ver7),Ke=T.ver8,qe=h(t.FRAGMENT_SHADER,T.ver9),je=h(t.FRAGMENT_SHADER,T.ver10),Ze=h(t.FRAGMENT_SHADER,T.ver11),Je=h(t.FRAGMENT_SHADER,T.ver12),Qe=h(t.FRAGMENT_SHADER,T.ver13),$e=h(t.FRAGMENT_SHADER,T.ver14),et=h(t.FRAGMENT_SHADER,T.ver15,p.supportLinearFiltering?null:["MANUAL_FILTERING"]),tt=h(t.FRAGMENT_SHADER,T.ver16),rt=h(t.FRAGMENT_SHADER,T.ver17),it=h(t.FRAGMENT_SHADER,T.ver18),ot=h(t.FRAGMENT_SHADER,T.ver19),nt=h(t.FRAGMENT_SHADER,T.ver20),d=(()=>(t.bindBuffer(t.ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),t.STATIC_DRAW),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),t.STATIC_DRAW),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(0),(e,i=!1)=>{e==null?(t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),t.bindFramebuffer(t.FRAMEBUFFER,null)):(t.viewport(0,0,e.width,e.height),t.bindFramebuffer(t.FRAMEBUFFER,e.fbo)),i&&(t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT)),t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)}))();let R,s,re,ie,U,oe,O=[],X,de,he=ct(It);const P=new E(ze,Ye),Te=new E(x,He),ne=new E(x,Ve),pe=new E(x,ke),Ee=new E(x,We),z=new E(x,qe),I=new E(x,je),Y=new E(x,Ze),xe=new E(x,Je),ae=new E(x,Qe),F=new E(x,$e),D=new E(x,et),ue=new E(x,tt),le=new E(x,rt),N=new E(x,it),H=new E(x,ot),V=new E(x,nt),w=new Ge(x,Ke);function k(){let e=C(a.SIM_RESOLUTION),i=C(a.DYE_RESOLUTION);const r=p.halfFloatTexType,o=p.formatRGBA,n=p.formatRG,u=p.formatR,l=p.supportLinearFiltering?t.LINEAR:t.NEAREST;t.disable(t.BLEND),R==null?R=ce(i.width,i.height,o.internalFormat,o.format,r,l):R=Re(R,i.width,i.height,o.internalFormat,o.format,r,l),s==null?s=ce(e.width,e.height,n.internalFormat,n.format,r,l):s=Re(s,e.width,e.height,n.internalFormat,n.format,r,l),re=_(e.width,e.height,u.internalFormat,u.format,r,t.NEAREST),ie=_(e.width,e.height,u.internalFormat,u.format,r,t.NEAREST),U=ce(e.width,e.height,u.internalFormat,u.format,r,t.NEAREST),at(),ut()}function at(){let e=C(a.BLOOM_RESOLUTION);const i=p.halfFloatTexType,r=p.formatRGBA,o=p.supportLinearFiltering?t.LINEAR:t.NEAREST;oe=_(e.width,e.height,r.internalFormat,r.format,i,o),O.length=0;for(let n=0;n<a.BLOOM_ITERATIONS;n++){let u=e.width>>n+1,l=e.height>>n+1;if(u<2||l<2)break;let c=_(u,l,r.internalFormat,r.format,i,o);O.push(c)}}function ut(){let e=C(a.SUNRAYS_RESOLUTION);const i=p.halfFloatTexType,r=p.formatR,o=p.supportLinearFiltering?t.LINEAR:t.NEAREST;X=_(e.width,e.height,r.internalFormat,r.format,i,o),de=_(e.width,e.height,r.internalFormat,r.format,i,o)}function _(e,i,r,o,n,u){t.activeTexture(t.TEXTURE0);let l=t.createTexture();t.bindTexture(t.TEXTURE_2D,l),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,u),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,u),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,r,e,i,0,o,n,null);let c=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,c),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,l,0),t.viewport(0,0,e,i),t.clear(t.COLOR_BUFFER_BIT);let f=1/e,g=1/i;return{texture:l,fbo:c,width:e,height:i,texelSizeX:f,texelSizeY:g,attach(y){return t.activeTexture(t.TEXTURE0+y),t.bindTexture(t.TEXTURE_2D,l),y}}}function ce(e,i,r,o,n,u){let l=_(e,i,r,o,n,u),c=_(e,i,r,o,n,u);return{width:e,height:i,texelSizeX:l.texelSizeX,texelSizeY:l.texelSizeY,get read(){return l},set read(f){l=f},get write(){return c},set write(f){c=f},swap(){let f=l;l=c,c=f}}}function lt(e,i,r,o,n,u,l){let c=_(i,r,o,n,u,l);return Te.bind(),t.uniform1i(Te.uniforms.uTexture,e.attach(0)),d(c),c}function Re(e,i,r,o,n,u,l){return e.width==i&&e.height==r||(e.read=lt(e.read,i,r,o,n,u,l),e.write=_(i,r,o,n,u,l),e.width=i,e.height=r,e.texelSizeX=1/i,e.texelSizeY=1/r),e}function ct(e){let i=t.createTexture();t.bindTexture(t.TEXTURE_2D,i),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.REPEAT),t.texImage2D(t.TEXTURE_2D,0,t.RGB,1,1,0,t.RGB,t.UNSIGNED_BYTE,new Uint8Array([255,255,255]));let r={texture:i,width:1,height:1,attach(n){return t.activeTexture(t.TEXTURE0+n),t.bindTexture(t.TEXTURE_2D,i),n}},o=new Image;return o.onload=()=>{r.width=o.width,r.height=o.height,t.bindTexture(t.TEXTURE_2D,i),t.texImage2D(t.TEXTURE_2D,0,t.RGB,t.RGB,t.UNSIGNED_BYTE,o)},o.src=e,r}function W(){let e=[];a.SHADING&&e.push("SHADING"),a.BLOOM&&e.push("BLOOM"),a.SUNRAYS&&e.push("SUNRAYS"),w.setKeywords(e)}W(),k(),Ae(parseInt(Math.random()*20)+5);let ge=Date.now(),K=0;Se();function Se(){const e=st();De()&&k(),ft(e),mt(),a.PAUSED||vt(e),_e(null),q=requestAnimationFrame(Se)}function st(){let e=Date.now(),i=(e-ge)/1e3;return i=Math.min(i,.016666),ge=e,i}function De(){let e=A(m.clientWidth),i=A(m.clientHeight);return m.width!=e||m.height!=i?(m.width=e,m.height=i,!0):!1}function ft(e){!a.COLORFUL||(K+=e*a.COLOR_UPDATE_SPEED,K>=1&&(K=yt(K,0,1),S.forEach(i=>{i.color=se()})))}function mt(){M.length>0&&Ae(M.pop()),S.forEach(e=>{e.moved&&(e.moved=!1,Rt(e))})}function vt(e){t.disable(t.BLEND),le.bind(),t.uniform2f(le.uniforms.texelSize,s.texelSizeX,s.texelSizeY),t.uniform1i(le.uniforms.uVelocity,s.read.attach(0)),d(ie),N.bind(),t.uniform2f(N.uniforms.texelSize,s.texelSizeX,s.texelSizeY),t.uniform1i(N.uniforms.uVelocity,s.read.attach(0)),t.uniform1i(N.uniforms.uCurl,ie.attach(1)),t.uniform1f(N.uniforms.curl,a.CURL),t.uniform1f(N.uniforms.dt,e),d(s.write),s.swap(),ue.bind(),t.uniform2f(ue.uniforms.texelSize,s.texelSizeX,s.texelSizeY),t.uniform1i(ue.uniforms.uVelocity,s.read.attach(0)),d(re),ne.bind(),t.uniform1i(ne.uniforms.uTexture,U.read.attach(0)),t.uniform1f(ne.uniforms.value,a.PRESSURE),d(U.write),U.swap(),H.bind(),t.uniform2f(H.uniforms.texelSize,s.texelSizeX,s.texelSizeY),t.uniform1i(H.uniforms.uDivergence,re.attach(0));for(let r=0;r<a.PRESSURE_ITERATIONS;r++)t.uniform1i(H.uniforms.uPressure,U.read.attach(1)),d(U.write),U.swap();V.bind(),t.uniform2f(V.uniforms.texelSize,s.texelSizeX,s.texelSizeY),t.uniform1i(V.uniforms.uPressure,U.read.attach(0)),t.uniform1i(V.uniforms.uVelocity,s.read.attach(1)),d(s.write),s.swap(),D.bind(),t.uniform2f(D.uniforms.texelSize,s.texelSizeX,s.texelSizeY),p.supportLinearFiltering||t.uniform2f(D.uniforms.dyeTexelSize,s.texelSizeX,s.texelSizeY);let i=s.read.attach(0);t.uniform1i(D.uniforms.uVelocity,i),t.uniform1i(D.uniforms.uSource,i),t.uniform1f(D.uniforms.dt,e),t.uniform1f(D.uniforms.dissipation,a.VELOCITY_DISSIPATION),d(s.write),s.swap(),p.supportLinearFiltering||t.uniform2f(D.uniforms.dyeTexelSize,R.texelSizeX,R.texelSizeY),t.uniform1i(D.uniforms.uVelocity,s.read.attach(0)),t.uniform1i(D.uniforms.uSource,R.read.attach(1)),t.uniform1f(D.uniforms.dissipation,a.DENSITY_DISSIPATION),d(R.write),R.swap()}function _e(e){a.BLOOM&&pt(R.read,oe),a.SUNRAYS&&(Et(R.read,R.write,X),xt(X,de,1)),e==null||!a.TRANSPARENT?(t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),t.enable(t.BLEND)):t.disable(t.BLEND),a.TRANSPARENT||dt(e,At(a.BACK_COLOR)),e==null&&a.TRANSPARENT&&ht(e),Tt(e)}function dt(e,i){pe.bind(),t.uniform4f(pe.uniforms.color,i.r,i.g,i.b,1),d(e)}function ht(e){Ee.bind(),t.uniform1f(Ee.uniforms.aspectRatio,m.width/m.height),d(e)}function Tt(e){let i=e==null?t.drawingBufferWidth:e.width,r=e==null?t.drawingBufferHeight:e.height;if(w.bind(),a.SHADING&&t.uniform2f(w.uniforms.texelSize,1/i,1/r),t.uniform1i(w.uniforms.uTexture,R.read.attach(0)),a.BLOOM){t.uniform1i(w.uniforms.uBloom,oe.attach(1)),t.uniform1i(w.uniforms.uDithering,he.attach(2));let o=Lt(he,i,r);t.uniform2f(w.uniforms.ditherScale,o.x,o.y)}a.SUNRAYS&&t.uniform1i(w.uniforms.uSunrays,X.attach(3)),d(e)}function pt(e,i){if(O.length<2)return;let r=i;t.disable(t.BLEND),z.bind();let o=a.BLOOM_THRESHOLD*a.BLOOM_SOFT_KNEE+1e-4,n=a.BLOOM_THRESHOLD-o,u=o*2,l=.25/o;t.uniform3f(z.uniforms.curve,n,u,l),t.uniform1f(z.uniforms.threshold,a.BLOOM_THRESHOLD),t.uniform1i(z.uniforms.uTexture,e.attach(0)),d(r),I.bind();for(let c=0;c<O.length;c++){let f=O[c];t.uniform2f(I.uniforms.texelSize,r.texelSizeX,r.texelSizeY),t.uniform1i(I.uniforms.uTexture,r.attach(0)),d(f),r=f}t.blendFunc(t.ONE,t.ONE),t.enable(t.BLEND);for(let c=O.length-2;c>=0;c--){let f=O[c];t.uniform2f(I.uniforms.texelSize,r.texelSizeX,r.texelSizeY),t.uniform1i(I.uniforms.uTexture,r.attach(0)),t.viewport(0,0,f.width,f.height),d(f),r=f}t.disable(t.BLEND),Y.bind(),t.uniform2f(Y.uniforms.texelSize,r.texelSizeX,r.texelSizeY),t.uniform1i(Y.uniforms.uTexture,r.attach(0)),t.uniform1f(Y.uniforms.intensity,a.BLOOM_INTENSITY),d(i)}function Et(e,i,r){t.disable(t.BLEND),xe.bind(),t.uniform1i(xe.uniforms.uTexture,e.attach(0)),d(i),ae.bind(),t.uniform1f(ae.uniforms.weight,a.SUNRAYS_WEIGHT),t.uniform1i(ae.uniforms.uTexture,i.attach(0)),d(r)}function xt(e,i,r){P.bind();for(let o=0;o<r;o++)t.uniform2f(P.uniforms.texelSize,e.texelSizeX,0),t.uniform1i(P.uniforms.uTexture,e.attach(0)),d(i),t.uniform2f(P.uniforms.texelSize,0,e.texelSizeY),t.uniform1i(P.uniforms.uTexture,i.attach(0)),d(e)}function Rt(e){let i=e.deltaX*a.SPLAT_FORCE,r=e.deltaY*a.SPLAT_FORCE;ye(e.texcoordX,e.texcoordY,i,r,e.color)}function Ae(e){for(let i=0;i<e;i++){const r=se();r.r*=10,r.g*=10,r.b*=10;const o=Math.random(),n=Math.random(),u=1e3*(Math.random()-.5),l=1e3*(Math.random()-.5);ye(o,n,u,l,r)}}function ye(e,i,r,o,n){F.bind(),t.uniform1i(F.uniforms.uTarget,s.read.attach(0)),t.uniform1f(F.uniforms.aspectRatio,m.width/m.height),t.uniform2f(F.uniforms.point,e,i),t.uniform3f(F.uniforms.color,r,o,0),t.uniform1f(F.uniforms.radius,gt(a.SPLAT_RADIUS/100)),d(s.write),s.swap(),t.uniform1i(F.uniforms.uTarget,R.read.attach(0)),t.uniform3f(F.uniforms.color,n.r,n.g,n.b),d(R.write),R.swap()}function gt(e){let i=m.width/m.height;return i>1&&(e*=i),e}j=e=>{let i=A(e.offsetX),r=A(e.offsetY),o=S.find(n=>n.id==-1);o==null&&(o=new B),Le(o,-1,i,r)},Z=e=>{let i=S[0],r=A(e.offsetX),o=A(e.offsetY);be(i,r,o)},J=()=>{Ue(S[0])},Q=e=>{e.preventDefault();const i=e.targetTouches;for(;i.length>=S.length;)S.push(new B);for(let r=0;r<i.length;r++){let o=A(i[r].pageX),n=A(i[r].pageY);Le(S[r+1],i[r].identifier,o,n)}},$=e=>{e.preventDefault();const i=e.targetTouches;for(let r=0;r<i.length;r++){let o=S[r+1];if(!o.down)continue;let n=A(i[r].pageX),u=A(i[r].pageY);be(o,n,u)}},ee=e=>{const i=e.changedTouches;for(let r=0;r<i.length;r++){let o=S.find(n=>n.id==i[r].identifier);o!=null&&Ue(o)}},te=e=>{e.code==="KeyP"&&(a.PAUSED=!a.PAUSED),e.key===" "&&M.push(parseInt(Math.random()*20)+5)},m.addEventListener("mousedown",j),m.addEventListener("mousemove",Z),window.addEventListener("mouseup",J),m.addEventListener("touchstart",Q),m.addEventListener("touchmove",$,!1),window.addEventListener("touchend",ee),window.addEventListener("keydown",te);function Le(e,i,r,o){e.id=i,e.down=!0,e.moved=!1,e.texcoordX=r/m.width,e.texcoordY=1-o/m.height,e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.deltaX=0,e.deltaY=0,e.color=se()}function be(e,i,r){e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.texcoordX=i/m.width,e.texcoordY=1-r/m.height,e.deltaX=St(e.texcoordX-e.prevTexcoordX),e.deltaY=Dt(e.texcoordY-e.prevTexcoordY),e.moved=Math.abs(e.deltaX)>0||Math.abs(e.deltaY)>0}function Ue(e){e.down=!1}function St(e){let i=m.width/m.height;return i<1&&(e*=i),e}function Dt(e){let i=m.width/m.height;return i>1&&(e/=i),e}function se(){let e=_t(Math.random(),1,1);return e.r*=.15,e.g*=.15,e.b*=.15,e}function _t(e,i,r){let o,n,u,l,c,f,g,y;switch(l=Math.floor(e*6),c=e*6-l,f=r*(1-i),g=r*(1-c*i),y=r*(1-(1-c)*i),l%6){case 0:o=r,n=y,u=f;break;case 1:o=g,n=r,u=f;break;case 2:o=f,n=r,u=y;break;case 3:o=f,n=g,u=r;break;case 4:o=y,n=f,u=r;break;case 5:o=r,n=f,u=g;break}return{r:o,g:n,b:u}}function At(e){return{r:e.r/255,g:e.g/255,b:e.b/255}}function yt(e,i,r){let o=r-i;return o==0?i:(e-i)%o+i}function C(e){let i=t.drawingBufferWidth/t.drawingBufferHeight;i<1&&(i=1/i);let r=Math.round(e),o=Math.round(e*i);return t.drawingBufferWidth>t.drawingBufferHeight?{width:o,height:r}:{width:r,height:o}}function Lt(e,i,r){return{x:i/e.width,y:r/e.height}}function A(e){let i=window.devicePixelRatio||1;return Math.floor(e*i)}function bt(e){if(e.length==0)return 0;let i=0;for(let r=0;r<e.length;r++)i=(i<<5)-i+e.charCodeAt(r),i|=0;return i}}),wt(()=>{v&&v.destroy(),L.value&&L.value.remove(),cancelAnimationFrame(q),q=null,L.value.removeEventListener("mousedown",j),L.value.removeEventListener("mousemove",Z),window.removeEventListener("mouseup",J),L.value.removeEventListener("touchstart",Q),L.value.removeEventListener("touchmove",$,!1),window.removeEventListener("touchend",ee),window.removeEventListener("keydown",te)}),(Fe,m)=>(Ot(),Nt("canvas",{ref:(a,B)=>{B.webGl=a,L.value=a}},null,512))}};var lr=Pt(ir,[["__scopeId","data-v-0efda6b2"]]);export{lr as default};
