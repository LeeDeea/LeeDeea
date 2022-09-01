import{k as Nt,m as Bt,n as Pt,o as It,p as Ct}from"./vendor.a1235956.js";import{i as Mt}from"./dat.gui.module.ceda738c.js";import{_ as Gt}from"./plugin-vue_export-helper.2100c508.js";var Xt="./dist/LDR_LLL1_0.140c55bd.png";const zt=`precision highp float;
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
`,Yt=`
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
`,Ht=`
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
`,Vt=`
precision mediump float;
precision mediump sampler2D;

varying highp vec2 vUv;
uniform sampler2D uTexture;

void main () {
    gl_FragColor = texture2D(uTexture, vUv);
}
`,kt=`
precision mediump float;
precision mediump sampler2D;

varying highp vec2 vUv;
uniform sampler2D uTexture;
uniform float value;

void main () {
    gl_FragColor = value * texture2D(uTexture, vUv);
}
`,Wt=`
precision mediump float;

uniform vec4 color;

void main () {
    gl_FragColor = color;
}
`,Kt=`
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
`,qt=`
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
`,jt=`
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
`,Zt=`
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
`,Jt=`
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
`,Qt=`
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
`,$t=`
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
`,er=`
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
`,tr=`
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
}`,rr=`
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
`,ir=`
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
`,or=`
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
`,ar=`
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
`,nr=`
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
`;var x={ver1:zt,ver2:Yt,ver3:Ht,ver4:Vt,ver5:kt,ver6:Wt,ver7:Kt,ver8:qt,ver9:jt,ver10:Zt,ver11:Jt,ver12:Qt,ver13:$t,ver14:er,ver15:tr,ver16:rr,ver17:ir,ver18:or,ver19:ar,ver20:nr};const ur={setup(lr){let ne=null;const P=Nt(null);let d=null;const O=t=>{let o=window.devicePixelRatio||1;return Math.floor(t*o)},_e=()=>{let t=O(d.clientWidth),o=O(d.clientHeight);return d.width!=t||d.height!=o?(d.width=t,d.height=o,!0):!1};let L=[];class ue{constructor(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[30,0,300]}}L.push(new ue);const Ae=()=>/Mobi|Android/i.test(navigator.userAgent),rt=()=>{Ae()&&(l.DYE_RESOLUTION=512),R.supportLinearFiltering||(l.DYE_RESOLUTION=512,l.SHADING=!1,l.BLOOM=!1,l.SUNRAYS=!1)};let e,R;const it=(t,o,i,u)=>{let c=t.createTexture();t.bindTexture(t.TEXTURE_2D,c),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,o,4,4,0,i,u,null);let f=t.createFramebuffer();return t.bindFramebuffer(t.FRAMEBUFFER,f),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,c,0),t.checkFramebufferStatus(t.FRAMEBUFFER)==t.FRAMEBUFFER_COMPLETE},I=(t,o,i,u)=>{if(!it(t,o,i,u))switch(o){case t.R16F:return I(t,t.RG16F,t.RG,u);case t.RG16F:return I(t,t.RGBA16F,t.RGBA,u);default:return null}return{internalFormat:o,format:i}},ye=t=>{const o={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let i=t.getContext("webgl2",o);const u=!!i;u||(i=t.getContext("webgl",o)||t.getContext("experimental-webgl",o));let c,f;u?(i.getExtension("EXT_color_buffer_float"),f=i.getExtension("OES_texture_float_linear")):(c=i.getExtension("OES_texture_half_float"),f=i.getExtension("OES_texture_half_float_linear")),i.clearColor(0,0,0,1);const m=u?i.HALF_FLOAT:c.HALF_FLOAT_OES;let h,D,F;return u?(h=I(i,i.RGBA16F,i.RGBA,m),D=I(i,i.RG16F,i.RG,m),F=I(i,i.R16F,i.RED,m)):(h=I(i,i.RGBA,i.RGBA,m),D=I(i,i.RGBA,i.RGBA,m),F=I(i,i.RGBA,i.RGBA,m)),{gl:i,ext:{formatRGBA:h,formatRG:D,formatR:F,halfFloatTexType:m,supportLinearFiltering:f}}},ot=t=>{if(t.length==0)return 0;let o=0;for(let i=0;i<t.length;i++)o=(o<<5)-o+t.charCodeAt(i),o|=0;return o},at=(t,o)=>{if(o==null)return t;let i="";return o.forEach(u=>{i+="#define "+u+`
`}),i+t},E=(t,o,i)=>{o=at(o,i);const u=e.createShader(t);return e.shaderSource(u,o),e.compileShader(u),e.getShaderParameter(u,e.COMPILE_STATUS)||console.trace(e.getShaderInfoLog(u)),u},be=(t,o)=>{let i=e.createProgram();return e.attachShader(i,t),e.attachShader(i,o),e.linkProgram(i),e.getProgramParameter(i,e.LINK_STATUS)||console.trace(e.getProgramInfoLog(i)),i},Le=t=>{let o=[],i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<i;u++){let c=e.getActiveUniform(t,u).name;o[c]=e.getUniformLocation(t,c)}return o};class nt{constructor(o,i){this.vertexShader=o,this.fragmentShaderSource=i,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(o){let i=0;for(let c=0;c<o.length;c++)i+=ot(o[c]);let u=this.programs[i];if(u==null){let c=E(e.FRAGMENT_SHADER,this.fragmentShaderSource,o);u=be(this.vertexShader,c),this.programs[i]=u}u!=this.activeProgram&&(this.uniforms=Le(u),this.activeProgram=u)}bind(){e.useProgram(this.activeProgram)}}class S{constructor(o,i){this.uniforms={},this.program=be(o,i),this.uniforms=Le(this.program)}bind(){e.useProgram(this.program)}}let N;const ut=()=>{N=new nt(g,Pe)};let Y,le,j,ce,se,V,H,k,fe,Z,B,b,J,Q,M,W,K=null;const lt=()=>{Y=new S(Ue,Fe),le=new S(g,we),j=new S(g,Oe),ce=new S(g,Ne),se=new S(g,Be),V=new S(g,Ie),H=new S(g,Ce),k=new S(g,Me),fe=new S(g,Ge),Z=new S(g,Xe),B=new S(g,ze),b=new S(g,Ye),J=new S(g,He),Q=new S(g,Ve),M=new S(g,ke),W=new S(g,We),K=new S(g,Ke)};let g,Ue,Fe,we,Oe,Ne,Be,Pe,Ie,Ce,Me,Ge,Xe,ze,Ye,He,Ve,ke,We,Ke=null;const ct=()=>{g=E(e.VERTEX_SHADER,x.ver1),Ue=E(e.VERTEX_SHADER,x.ver2),Fe=E(e.FRAGMENT_SHADER,x.ver3),we=E(e.FRAGMENT_SHADER,x.ver4),Oe=E(e.FRAGMENT_SHADER,x.ver5),Ne=E(e.FRAGMENT_SHADER,x.ver6),Be=E(e.FRAGMENT_SHADER,x.ver7),Pe=x.ver8,Ie=E(e.FRAGMENT_SHADER,x.ver9),Ce=E(e.FRAGMENT_SHADER,x.ver10),Me=E(e.FRAGMENT_SHADER,x.ver11),Ge=E(e.FRAGMENT_SHADER,x.ver12),Xe=E(e.FRAGMENT_SHADER,x.ver13),ze=E(e.FRAGMENT_SHADER,x.ver14),Ye=E(e.FRAGMENT_SHADER,x.ver15,R.supportLinearFiltering?null:["MANUAL_FILTERING"]),He=E(e.FRAGMENT_SHADER,x.ver16),Ve=E(e.FRAGMENT_SHADER,x.ver17),ke=E(e.FRAGMENT_SHADER,x.ver18),We=E(e.FRAGMENT_SHADER,x.ver19),Ke=E(e.FRAGMENT_SHADER,x.ver20)};let me,ve,de,he,Te,pe,Ee=null,l={SIM_RESOLUTION:128,DYE_RESOLUTION:1024,CAPTURE_RESOLUTION:512,DENSITY_DISSIPATION:1,VELOCITY_DISSIPATION:.2,PRESSURE:.8,PRESSURE_ITERATIONS:20,CURL:30,SPLAT_RADIUS:.25,SPLAT_FORCE:6e3,SHADING:!0,COLORFUL:!0,COLOR_UPDATE_SPEED:10,PAUSED:!1,BACK_COLOR:{r:0,g:0,b:0},TRANSPARENT:!1,BLOOM:!0,BLOOM_ITERATIONS:8,BLOOM_RESOLUTION:256,BLOOM_INTENSITY:.8,BLOOM_THRESHOLD:.6,BLOOM_SOFT_KNEE:.7,SUNRAYS:!0,SUNRAYS_RESOLUTION:196,SUNRAYS_WEIGHT:1},p=null,$=[],_,v,xe,Re,C,ge,G=[],ee,qe;function q(t){let o=e.drawingBufferWidth/e.drawingBufferHeight;o<1&&(o=1/o);let i=Math.round(t),u=Math.round(t*o);return e.drawingBufferWidth>e.drawingBufferHeight?{width:u,height:i}:{width:i,height:u}}function te(){let t=[];l.SHADING&&t.push("SHADING"),l.BLOOM&&t.push("BLOOM"),l.SUNRAYS&&t.push("SUNRAYS"),N.setKeywords(t)}function re(){let t=q(l.SIM_RESOLUTION),o=q(l.DYE_RESOLUTION);const i=R.halfFloatTexType,u=R.formatRGBA,c=R.formatRG,f=R.formatR,m=R.supportLinearFiltering?e.LINEAR:e.NEAREST;e.disable(e.BLEND),_=_==null?Se(o.width,o.height,u.internalFormat,u.format,i,m):je(_,o.width,o.height,u.internalFormat,u.format,i,m),v==null?v=Se(t.width,t.height,c.internalFormat,c.format,i,m):v=je(v,t.width,t.height,c.internalFormat,c.format,i,m),xe=U(t.width,t.height,f.internalFormat,f.format,i,e.NEAREST),Re=U(t.width,t.height,f.internalFormat,f.format,i,e.NEAREST),C=Se(t.width,t.height,f.internalFormat,f.format,i,e.NEAREST),st(),ft()}function st(){let t=q(l.BLOOM_RESOLUTION);const o=R.halfFloatTexType,i=R.formatRGBA,u=R.supportLinearFiltering?e.LINEAR:e.NEAREST;ge=U(t.width,t.height,i.internalFormat,i.format,o,u),G.length=0;for(let c=0;c<l.BLOOM_ITERATIONS;c++){let f=t.width>>c+1,m=t.height>>c+1;if(f<2||m<2)break;let h=U(f,m,i.internalFormat,i.format,o,u);G.push(h)}}function ft(){let t=q(l.SUNRAYS_RESOLUTION);const o=R.halfFloatTexType,i=R.formatR,u=R.supportLinearFiltering?e.LINEAR:e.NEAREST;ee=U(t.width,t.height,i.internalFormat,i.format,o,u),qe=U(t.width,t.height,i.internalFormat,i.format,o,u)}function U(t,o,i,u,c,f){e.activeTexture(e.TEXTURE0);let m=e.createTexture();e.bindTexture(e.TEXTURE_2D,m),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,f),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,f),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,i,t,o,0,u,c,null);let h=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,h),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,m,0),e.viewport(0,0,t,o),e.clear(e.COLOR_BUFFER_BIT);let D=1/t,F=1/o;return{texture:m,fbo:h,width:t,height:o,texelSizeX:D,texelSizeY:F,attach(X){return e.activeTexture(e.TEXTURE0+X),e.bindTexture(e.TEXTURE_2D,m),X}}}function Se(t,o,i,u,c,f){let m=U(t,o,i,u,c,f),h=U(t,o,i,u,c,f);return{width:t,height:o,texelSizeX:m.texelSizeX,texelSizeY:m.texelSizeY,get read(){return m},set read(D){m=D},get write(){return h},set write(D){h=D},swap(){let D=m;m=h,h=D}}}function mt(t,o,i,u,c,f,m){let h=U(o,i,u,c,f,m);return le.bind(),e.uniform1i(le.uniforms.uTexture,t.attach(0)),h}function je(t,o,i,u,c,f,m){return t.width==o&&t.height==i||(t.read=mt(t.read,o,i,u,c,f,m),t.write=U(o,i,u,c,f,m),t.width=o,t.height=i,t.texelSizeX=1/o,t.texelSizeY=1/i),t}function vt(){p=new Mt.GUI({width:300}),p.add(l,"DYE_RESOLUTION",{high:1024,medium:512,low:256,"very low":128}).name("quality").onFinishChange(re),p.add(l,"SIM_RESOLUTION",{32:32,64:64,128:128,256:256}).name("sim resolution").onFinishChange(re),p.add(l,"DENSITY_DISSIPATION",0,4).name("density diffusion"),p.add(l,"VELOCITY_DISSIPATION",0,4).name("velocity diffusion"),p.add(l,"PRESSURE",0,1).name("pressure"),p.add(l,"CURL",0,50).name("vorticity").step(1),p.add(l,"SPLAT_RADIUS",.01,1).name("splat radius"),p.add(l,"SHADING").name("shading").onFinishChange(te),p.add(l,"COLORFUL").name("colorful"),p.add(l,"PAUSED").name("paused").listen(),p.add({fun:()=>{$.push(parseInt(Math.random()*20)+5)}},"fun").name("Random splats");let t=p.addFolder("Bloom");t.add(l,"BLOOM").name("enabled").onFinishChange(te),t.add(l,"BLOOM_INTENSITY",.1,2).name("intensity"),t.add(l,"BLOOM_THRESHOLD",0,1).name("threshold");let o=p.addFolder("Sunrays");o.add(l,"SUNRAYS").name("enabled").onFinishChange(te),o.add(l,"SUNRAYS_WEIGHT",.3,1).name("weight");let i=p.addFolder("Capture");i.addColor(l,"BACK_COLOR").name("background color"),i.add(l,"TRANSPARENT").name("transparent"),i.add({fun:dt},"fun").name("take screenshot");let u=p.add({fun:()=>{window.open("https://github.com/PavelDoGreat/WebGL-Fluid-Simulation")}},"fun").name("Github");u.__li.className="cr function bigFont",u.__li.style.borderLeft="3px solid #8C8C8C";let c=document.createElement("span");u.domElement.parentElement.appendChild(c),c.className="icon github";let f=p.add({fun:()=>{window.open("https://twitter.com/PavelDoGreat")}},"fun").name("Twitter");f.__li.className="cr function bigFont",f.__li.style.borderLeft="3px solid #8C8C8C";let m=document.createElement("span");f.domElement.parentElement.appendChild(m),m.className="icon twitter";let h=p.add({fun:()=>{window.open("https://discordapp.com/invite/CeqZDDE")}},"fun").name("Discord");h.__li.className="cr function bigFont",h.__li.style.borderLeft="3px solid #8C8C8C";let D=document.createElement("span");h.domElement.parentElement.appendChild(D),D.className="icon discord";let F=p.add({fun:()=>{window.open("http://onelink.to/5b58bn")}},"fun").name("Check out mobile app");F.__li.className="cr function appBigFont",F.__li.style.borderLeft="3px solid #00FF7F";let X=document.createElement("span");F.domElement.parentElement.appendChild(X),X.className="icon app",Ae()&&p.close()}function dt(){let t=q(l.CAPTURE_RESOLUTION),o=U(t.width,t.height,R.formatRGBA.internalFormat,R.formatRGBA.format,R.halfFloatTexType,e.NEAREST);render(o);let i=ht(o);i=Tt(i,o.width,o.height);let c=pt(i,o.width,o.height).toDataURL();Et("fluid.png",c),URL.revokeObjectURL(c)}function ht(t){e.bindFramebuffer(e.FRAMEBUFFER,t.fbo);let o=t.width*t.height*4,i=new Float32Array(o);return e.readPixels(0,0,t.width,t.height,e.RGBA,e.FLOAT,i),i}function Tt(t,o,i){let u=new Uint8Array(t.length),c=0;for(let f=i-1;f>=0;f--)for(let m=0;m<o;m++){let h=f*o*4+m*4;u[h+0]=ie(t[c+0])*255,u[h+1]=ie(t[c+1])*255,u[h+2]=ie(t[c+2])*255,u[h+3]=ie(t[c+3])*255,c+=4}return u}function ie(t){return Math.min(Math.max(t,0),1)}function pt(t,o,i){let u=document.createElement("canvas"),c=u.getContext("2d");u.width=o,u.height=i;let f=c.createImageData(o,i);return f.data.set(t),c.putImageData(f,0,0),u}function Et(t,o){let i=document.createElement("a");i.download=t,i.href=o,document.body.appendChild(i),i.click(),document.body.removeChild(i)}return Bt(t=>{d=P.value,[e,R]=[ye(d).gl,ye(d).ext],rt(),ct();const o=(()=>(e.bindBuffer(e.ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),e.STATIC_DRAW),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),e.STATIC_DRAW),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.enableVertexAttribArray(0),(r,a=!1)=>{r==null?(e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight),e.bindFramebuffer(e.FRAMEBUFFER,null)):(e.viewport(0,0,r.width,r.height),e.bindFramebuffer(e.FRAMEBUFFER,r.fbo)),a&&(e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT)),e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0)}))();ut(),lt(),vt();let i=u(Xt);function u(r){let a=e.createTexture();e.bindTexture(e.TEXTURE_2D,a),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.texImage2D(e.TEXTURE_2D,0,e.RGB,1,1,0,e.RGB,e.UNSIGNED_BYTE,new Uint8Array([255,255,255]));let n={texture:a,width:1,height:1,attach(T){return e.activeTexture(e.TEXTURE0+T),e.bindTexture(e.TEXTURE_2D,a),T}},s=new Image;return s.onload=()=>{n.width=s.width,n.height=s.height,e.bindTexture(e.TEXTURE_2D,a),e.texImage2D(e.TEXTURE_2D,0,e.RGB,e.RGB,e.UNSIGNED_BYTE,s)},s.src=r,n}let c=Date.now(),f=0;function m(){let r=Date.now(),a=(r-c)/1e3;return a=Math.min(a,.016666),c=r,a}function h(r){!l.COLORFUL||(f+=r*l.COLOR_UPDATE_SPEED,f>=1&&(f=wt(f,0,1),L.forEach(a=>{a.color=De()})))}function D(){$.length>0&&Ze($.pop()),L.forEach(r=>{r.moved&&(r.moved=!1,At(r))})}function F(r){e.disable(e.BLEND),Q.bind(),e.uniform2f(Q.uniforms.texelSize,v.texelSizeX,v.texelSizeY),e.uniform1i(Q.uniforms.uVelocity,v.read.attach(0)),o(Re),M.bind(),e.uniform2f(M.uniforms.texelSize,v.texelSizeX,v.texelSizeY),e.uniform1i(M.uniforms.uVelocity,v.read.attach(0)),e.uniform1i(M.uniforms.uCurl,Re.attach(1)),e.uniform1f(M.uniforms.curl,l.CURL),e.uniform1f(M.uniforms.dt,r),o(v.write),v.swap(),J.bind(),e.uniform2f(J.uniforms.texelSize,v.texelSizeX,v.texelSizeY),e.uniform1i(J.uniforms.uVelocity,v.read.attach(0)),o(xe),j.bind(),e.uniform1i(j.uniforms.uTexture,C.read.attach(0)),e.uniform1f(j.uniforms.value,l.PRESSURE),o(C.write),C.swap(),W.bind(),e.uniform2f(W.uniforms.texelSize,v.texelSizeX,v.texelSizeY),e.uniform1i(W.uniforms.uDivergence,xe.attach(0));for(let n=0;n<l.PRESSURE_ITERATIONS;n++)e.uniform1i(W.uniforms.uPressure,C.read.attach(1)),o(C.write),C.swap();K.bind(),e.uniform2f(K.uniforms.texelSize,v.texelSizeX,v.texelSizeY),e.uniform1i(K.uniforms.uPressure,C.read.attach(0)),e.uniform1i(K.uniforms.uVelocity,v.read.attach(1)),o(v.write),v.swap(),b.bind(),e.uniform2f(b.uniforms.texelSize,v.texelSizeX,v.texelSizeY),R.supportLinearFiltering||e.uniform2f(b.uniforms.dyeTexelSize,v.texelSizeX,v.texelSizeY);let a=v.read.attach(0);e.uniform1i(b.uniforms.uVelocity,a),e.uniform1i(b.uniforms.uSource,a),e.uniform1f(b.uniforms.dt,r),e.uniform1f(b.uniforms.dissipation,l.VELOCITY_DISSIPATION),o(v.write),v.swap(),R.supportLinearFiltering||e.uniform2f(b.uniforms.dyeTexelSize,_.texelSizeX,_.texelSizeY),e.uniform1i(b.uniforms.uVelocity,v.read.attach(0)),e.uniform1i(b.uniforms.uSource,_.read.attach(1)),e.uniform1f(b.uniforms.dissipation,l.DENSITY_DISSIPATION),o(_.write),_.swap()}function X(r){l.BLOOM&&St(_.read,ge),l.SUNRAYS&&(Dt(_.read,_.write,ee),_t(ee,qe,1)),r==null||!l.TRANSPARENT?(e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.enable(e.BLEND)):e.disable(e.BLEND),l.TRANSPARENT||xt(r,Ft(l.BACK_COLOR)),r==null&&l.TRANSPARENT&&Rt(r),gt(r)}function xt(r,a){ce.bind(),e.uniform4f(ce.uniforms.color,a.r,a.g,a.b,1),o(r)}function Rt(r){se.bind(),e.uniform1f(se.uniforms.aspectRatio,d.width/d.height),o(r)}function gt(r){let a=r==null?e.drawingBufferWidth:r.width,n=r==null?e.drawingBufferHeight:r.height;if(N.bind(),l.SHADING&&e.uniform2f(N.uniforms.texelSize,1/a,1/n),e.uniform1i(N.uniforms.uTexture,_.read.attach(0)),l.BLOOM){e.uniform1i(N.uniforms.uBloom,ge.attach(1)),e.uniform1i(N.uniforms.uDithering,i.attach(2));let s=Ot(i,a,n);e.uniform2f(N.uniforms.ditherScale,s.x,s.y)}l.SUNRAYS&&e.uniform1i(N.uniforms.uSunrays,ee.attach(3)),o(r)}function St(r,a){if(G.length<2)return;let n=a;e.disable(e.BLEND),V.bind();let s=l.BLOOM_THRESHOLD*l.BLOOM_SOFT_KNEE+1e-4,T=l.BLOOM_THRESHOLD-s,y=s*2,z=.25/s;e.uniform3f(V.uniforms.curve,T,y,z),e.uniform1f(V.uniforms.threshold,l.BLOOM_THRESHOLD),e.uniform1i(V.uniforms.uTexture,r.attach(0)),o(n),H.bind();for(let w=0;w<G.length;w++){let A=G[w];e.uniform2f(H.uniforms.texelSize,n.texelSizeX,n.texelSizeY),e.uniform1i(H.uniforms.uTexture,n.attach(0)),o(A),n=A}e.blendFunc(e.ONE,e.ONE),e.enable(e.BLEND);for(let w=G.length-2;w>=0;w--){let A=G[w];e.uniform2f(H.uniforms.texelSize,n.texelSizeX,n.texelSizeY),e.uniform1i(H.uniforms.uTexture,n.attach(0)),e.viewport(0,0,A.width,A.height),o(A),n=A}e.disable(e.BLEND),k.bind(),e.uniform2f(k.uniforms.texelSize,n.texelSizeX,n.texelSizeY),e.uniform1i(k.uniforms.uTexture,n.attach(0)),e.uniform1f(k.uniforms.intensity,l.BLOOM_INTENSITY),o(a)}function Dt(r,a,n){e.disable(e.BLEND),fe.bind(),e.uniform1i(fe.uniforms.uTexture,r.attach(0)),o(a),Z.bind(),e.uniform1f(Z.uniforms.weight,l.SUNRAYS_WEIGHT),e.uniform1i(Z.uniforms.uTexture,a.attach(0)),o(n)}function _t(r,a,n){Y.bind();for(let s=0;s<n;s++)e.uniform2f(Y.uniforms.texelSize,r.texelSizeX,0),e.uniform1i(Y.uniforms.uTexture,r.attach(0)),o(a),e.uniform2f(Y.uniforms.texelSize,0,r.texelSizeY),e.uniform1i(Y.uniforms.uTexture,a.attach(0)),o(r)}function At(r){let a=r.deltaX*l.SPLAT_FORCE,n=r.deltaY*l.SPLAT_FORCE;Je(r.texcoordX,r.texcoordY,a,n,r.color)}function Ze(r){for(let a=0;a<r;a++){const n=De();n.r*=10,n.g*=10,n.b*=10;const s=Math.random(),T=Math.random(),y=1e3*(Math.random()-.5),z=1e3*(Math.random()-.5);Je(s,T,y,z,n)}}function Je(r,a,n,s,T){B.bind(),e.uniform1i(B.uniforms.uTarget,v.read.attach(0)),e.uniform1f(B.uniforms.aspectRatio,d.width/d.height),e.uniform2f(B.uniforms.point,r,a),e.uniform3f(B.uniforms.color,n,s,0),e.uniform1f(B.uniforms.radius,yt(l.SPLAT_RADIUS/100)),o(v.write),v.swap(),e.uniform1i(B.uniforms.uTarget,_.read.attach(0)),e.uniform3f(B.uniforms.color,T.r,T.g,T.b),o(_.write),_.swap()}function yt(r){let a=d.width/d.height;return a>1&&(r*=a),r}me=r=>{let a=O(r.offsetX),n=O(r.offsetY),s=L.find(T=>T.id==-1);s==null&&(s=new ue),Qe(s,-1,a,n)},ve=r=>{let a=L[0],n=O(r.offsetX),s=O(r.offsetY);$e(a,n,s)},de=()=>{et(L[0])},he=r=>{r.preventDefault();const a=r.targetTouches;for(;a.length>=L.length;)L.push(new ue);for(let n=0;n<a.length;n++){let s=O(a[n].pageX),T=O(a[n].pageY);Qe(L[n+1],a[n].identifier,s,T)}},Te=r=>{r.preventDefault();const a=r.targetTouches;for(let n=0;n<a.length;n++){let s=L[n+1];if(!s.down)continue;let T=O(a[n].pageX),y=O(a[n].pageY);$e(s,T,y)}},pe=r=>{const a=r.changedTouches;for(let n=0;n<a.length;n++){let s=L.find(T=>T.id==a[n].identifier);s!=null&&et(s)}},Ee=r=>{r.code==="KeyP"&&(l.PAUSED=!l.PAUSED),r.key===" "&&$.push(parseInt(Math.random()*20)+5)},d.addEventListener("mousedown",me),d.addEventListener("mousemove",ve),window.addEventListener("mouseup",de),d.addEventListener("touchstart",he),d.addEventListener("touchmove",Te,!1),window.addEventListener("touchend",pe),window.addEventListener("keydown",Ee);function Qe(r,a,n,s){r.id=a,r.down=!0,r.moved=!1,r.texcoordX=n/d.width,r.texcoordY=1-s/d.height,r.prevTexcoordX=r.texcoordX,r.prevTexcoordY=r.texcoordY,r.deltaX=0,r.deltaY=0,r.color=De()}function $e(r,a,n){r.prevTexcoordX=r.texcoordX,r.prevTexcoordY=r.texcoordY,r.texcoordX=a/d.width,r.texcoordY=1-n/d.height,r.deltaX=bt(r.texcoordX-r.prevTexcoordX),r.deltaY=Lt(r.texcoordY-r.prevTexcoordY),r.moved=Math.abs(r.deltaX)>0||Math.abs(r.deltaY)>0}function et(r){r.down=!1}function bt(r){let a=d.width/d.height;return a<1&&(r*=a),r}function Lt(r){let a=d.width/d.height;return a>1&&(r/=a),r}function De(){let r=Ut(Math.random(),1,1);return r.r*=.15,r.g*=.15,r.b*=.15,r}function Ut(r,a,n){let s,T,y,z,w,A,oe,ae;switch(z=Math.floor(r*6),w=r*6-z,A=n*(1-a),oe=n*(1-w*a),ae=n*(1-(1-w)*a),z%6){case 0:s=n,T=ae,y=A;break;case 1:s=oe,T=n,y=A;break;case 2:s=A,T=n,y=ae;break;case 3:s=A,T=oe,y=n;break;case 4:s=ae,T=A,y=n;break;case 5:s=n,T=A,y=oe;break}return{r:s,g:T,b:y}}function Ft(r){return{r:r.r/255,g:r.g/255,b:r.b/255}}function wt(r,a,n){let s=n-a;return s==0?a:(r-a)%s+a}function Ot(r,a,n){return{x:a/r.width,y:n/r.height}}function tt(){const r=m();_e()&&re(),h(r),D(),l.PAUSED||F(r),X(null),ne=requestAnimationFrame(tt)}tt(),te(),_e(),re(),Ze(parseInt(Math.random()*20)+5)}),Pt(()=>{p&&p.destroy(),P.value&&P.value.remove(),cancelAnimationFrame(ne),ne=null,P.value.removeEventListener("mousedown",me),P.value.removeEventListener("mousemove",ve),window.removeEventListener("mouseup",de),P.value.removeEventListener("touchstart",he),P.value.removeEventListener("touchmove",Te,!1),window.removeEventListener("touchend",pe),window.removeEventListener("keydown",Ee)}),(t,o)=>(It(),Ct("canvas",{ref:(i,u)=>{u.webGl=i,P.value=i}},null,512))}};var mr=Gt(ur,[["__scopeId","data-v-47088b7b"]]);export{mr as default};
