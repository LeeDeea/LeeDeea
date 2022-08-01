import{u as se,r as ce}from"./index.7618172c.js";import{M as oe,V as f,C as I,F as ue,P as de,i as H,j as K,k as me,W as fe,l as Z,U as j,m as q,n as ie,L as Y,R as ve,B as pe,p as ge,q as O,s as he,t as xe,r as we,o as N,u as A,v as J,w as Q,x as p,y as ee,z as ye,A as te,D as Se,E as Ce,G as Me,H as _e,I as Pe,J as Ee}from"./vendor.67723c31.js";import{t as Te}from"./temp4.cdff7c25.js";import{_ as be}from"./plugin-vue_export-helper.2100c508.js";class ne extends oe{constructor(g,o={}){super(g);const n=this,B=o.textureWidth!==void 0?o.textureWidth:512,h=o.textureHeight!==void 0?o.textureHeight:512,V=o.clipBias!==void 0?o.clipBias:0,M=o.alpha!==void 0?o.alpha:1,_=o.time!==void 0?o.time:0,L=o.waterNormals!==void 0?o.waterNormals:null,U=o.sunDirection!==void 0?o.sunDirection:new f(.70707,.70707,0),W=new I(o.sunColor!==void 0?o.sunColor:16777215),b=new I(o.waterColor!==void 0?o.waterColor:8355711),k=o.eye!==void 0?o.eye:new f(0,0,0),G=o.distortionScale!==void 0?o.distortionScale:20,y=o.side!==void 0?o.side:ue,x=o.fog!==void 0?o.fog:!1,r=new de,c=new f,u=new f,S=new f,P=new H,R=new f(0,0,-1),d=new K,E=new f,C=new f,T=new K,t=new H,e=new me,i={minFilter:Y,magFilter:Y,format:ve},s=new fe(B,h,i);(!Z.isPowerOfTwo(B)||!Z.isPowerOfTwo(h))&&(s.texture.generateMipmaps=!1);const v={uniforms:j.merge([q.fog,q.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new H},sunColor:{value:new I(8355711)},sunDirection:{value:new f(.70707,.70707,0)},eye:{value:new f},waterColor:{value:new I(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <fog_fragment>
				}`},l=new ie({fragmentShader:v.fragmentShader,vertexShader:v.vertexShader,uniforms:j.clone(v.uniforms),lights:!0,side:y,fog:x});l.uniforms.mirrorSampler.value=s.texture,l.uniforms.textureMatrix.value=t,l.uniforms.alpha.value=M,l.uniforms.time.value=_,l.uniforms.normalSampler.value=L,l.uniforms.sunColor.value=W,l.uniforms.waterColor.value=b,l.uniforms.sunDirection.value=U,l.uniforms.distortionScale.value=G,l.uniforms.eye.value=k,n.material=l,n.onBeforeRender=function(a,D,w){if(u.setFromMatrixPosition(n.matrixWorld),S.setFromMatrixPosition(w.matrixWorld),P.extractRotation(n.matrixWorld),c.set(0,0,1),c.applyMatrix4(P),E.subVectors(u,S),E.dot(c)>0)return;E.reflect(c).negate(),E.add(u),P.extractRotation(w.matrixWorld),R.set(0,0,-1),R.applyMatrix4(P),R.add(S),C.subVectors(u,R),C.reflect(c).negate(),C.add(u),e.position.copy(E),e.up.set(0,1,0),e.up.applyMatrix4(P),e.up.reflect(c),e.lookAt(C),e.far=w.far,e.updateMatrixWorld(),e.projectionMatrix.copy(w.projectionMatrix),t.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),t.multiply(e.projectionMatrix),t.multiply(e.matrixWorldInverse),r.setFromNormalAndCoplanarPoint(c,u),r.applyMatrix4(e.matrixWorldInverse),d.set(r.normal.x,r.normal.y,r.normal.z,r.constant);const m=e.projectionMatrix;T.x=(Math.sign(d.x)+m.elements[8])/m.elements[0],T.y=(Math.sign(d.y)+m.elements[9])/m.elements[5],T.z=-1,T.w=(1+m.elements[10])/m.elements[14],d.multiplyScalar(2/d.dot(T)),m.elements[2]=d.x,m.elements[6]=d.y,m.elements[10]=d.z+1-V,m.elements[14]=d.w,k.setFromMatrixPosition(w.matrixWorld);const ae=a.getRenderTarget(),re=a.xr.enabled,le=a.shadowMap.autoUpdate;n.visible=!1,a.xr.enabled=!1,a.shadowMap.autoUpdate=!1,a.setRenderTarget(s),a.state.buffers.depth.setMask(!0),a.autoClear===!1&&a.clear(),a.render(D,e),n.visible=!0,a.xr.enabled=re,a.shadowMap.autoUpdate=le,a.setRenderTarget(ae);const X=w.viewport;X!==void 0&&a.state.viewport(X)}}}ne.prototype.isWater=!0;class F extends oe{constructor(){const g=F.SkyShader,o=new ie({name:"SkyShader",fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:j.clone(g.uniforms),side:pe,depthWrite:!1});super(new ge(1,1,1),o)}}F.prototype.isSky=!0;F.SkyShader={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new f},up:{value:new f(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPos );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <encodings_fragment>

		}`};var Re="./dist/waternormals.add9912b.jpg";const $=z=>(Ce("data-v-0ed8bd6c"),z=z(),Me(),z),De={key:0,class:"loading loading_active"},ze=$(()=>p("p",{id:"tip"},"Wating Loading..",-1)),Le={class:"warp"},We=$(()=>p("div",{style:{flex:"1"}},null,-1)),Fe={class:"main"},Be={class:"card"},ke=["src"],Ie={class:"introduce"},Ne=$(()=>p("div",{style:{flex:"1"}},null,-1)),Ae={setup(z){const g=se();g.count++,g.$patch({count:g.count+1}),g.increment();const{appContext:o}=_e(),n=o.config.globalProperties.$three,B=o.config.globalProperties.$OrbitControls;let h=O(null),V=ce.slice(2,99),M=O([]);M=V.map(t=>({path:t.path,url:t.img,der:t.der})),M.pop();let _=O(!0),L=0;const U=()=>{if(window.sessionStorage.loading)_.value=!1;else if(L++,L==M.length){let t=document.getElementById("tip");t.innerText="Texture Loading completed"}};let W=!1,b=null;const k=t=>{if(window.innerWidth<700)return!1;if(W==!1){let e=t.currentTarget,i=t.currentTarget.firstElementChild,s=t.clientX-e.offsetLeft-e.offsetWidth/2,v=t.clientY-e.offsetTop-e.offsetHeight/2;i.style.transform=`matrix3d( 1,0,0,${.1*(s/1e4)},0,1,0,${.1*(v/1e4)},0,0,1,0,0,0,0,1)`,W=!0}else b||(b=setTimeout(()=>{clearTimeout(b),b=null,W=!1},60))},G=t=>{let e=t.currentTarget.firstElementChild;e.style.transform=" matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"};let y,x,r,c,u,S;function P(){r=new n.WebGLRenderer({antialias:!0,alpha:!0}),r.setPixelRatio(window.devicePixelRatio),r.setSize(window.innerWidth,window.innerHeight),r.toneMapping=n.ACESFilmicToneMapping,h.value.appendChild(r.domElement),x=new n.Scene,y=new n.PerspectiveCamera(55,window.innerWidth/window.innerHeight,1,2e4),y.position.set(30,30,100),S=new n.Vector3;const t=new n.PlaneGeometry(1e4,1e4);u=new ne(t,{textureWidth:1024,textureHeight:1024,waterNormals:new n.TextureLoader().load(Re,function(D){if(L==M.length){let w=document.getElementById("tip"),m=document.getElementById("load");w.innerText="Texture Loading completed",m.style.display="none",window.sessionStorage.loading=!1}D.wrapS=D.wrapT=n.RepeatWrapping}),sunDirection:new n.Vector3,sunColor:16762902,waterColor:7695,distortionScale:3.7,fog:x.fog!==void 0}),u.rotation.x=-Math.PI/2,x.add(u);const e=new F;e.scale.setScalar(1e4),x.add(e);const i=e.material.uniforms;i.turbidity.value=10,i.rayleigh.value=2,i.mieCoefficient.value=.005,i.mieDirectionalG.value=.18;const s={elevation:5,azimuth:170},v=new n.PMREMGenerator(r);function l(){const D=n.MathUtils.degToRad(90-s.elevation),w=n.MathUtils.degToRad(s.azimuth);S.setFromSphericalCoords(1,D,w),e.material.uniforms.sunPosition.value.copy(S),u.material.uniforms.sunDirection.value.copy(S).normalize(),x.environment=v.fromScene(e).texture}let a=new B(y,r.domElement);a.maxPolarAngle=Math.PI*.495,a.target.set(23,4,0),a.minDistance=40,a.maxDistance=200,a.update(),l(),window.addEventListener("resize",R)}function R(){y.aspect=window.innerWidth/window.innerHeight,y.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)}function d(){c=requestAnimationFrame(d),E()}function E(){u.material.uniforms.time.value+=1/60,r.render(x,y)}he(()=>{P(),d()});function C(t){if(t.length>0)t.forEach(e=>{C(e)});else{let e=t.children.filter(i=>i);e.forEach(i=>{i.children.length?C(i):(i.geometry&&i.geometry.dispose&&i.geometry.dispose(),i.material&&i.material.dispose&&i.material.dispose(),i.clear(),i=null)}),t.clear(),e=null}console.log("\u6267\u884C\uFF0C\u573A\u666F\u5220\u9664")}function T(t){t.renderLists.dispose(),t.dispose(),t.forceContextLoss(),t.domElement=null,t.content=null,t=null,console.log("\u6267\u884C\uFF0C\u6E32\u67D3\u5668\u5220\u9664")}return xe(()=>{x&&C(x),r&&T(r),c&&(cancelAnimationFrame(c),c=null,n.Cache.clear()),h.value&&h.value.removeChild(h.value.firstChild)}),(t,e)=>{const i=we("router-link");return N(),A(te,null,[J(_)?(N(),A("div",De,[ze,Q(Te,{id:"load",style:{transform:"rotate(-90deg)"}}),p("button",{class:"go__in",onClick:e[0]||(e[0]=s=>ee(_)?_.value=!1:_=!1)},"Go It")])):ye("",!0),p("div",Le,[p("div",{id:"canvas",ref:(s,v)=>{v.canvas=s,ee(h)?h.value=s:h=s}},null,512),We,p("ul",Fe,[(N(!0),A(te,null,Se(J(M),(s,v)=>(N(),A("li",{key:v,class:"card_warp"},[Q(i,{tag:"a",to:{path:s.path}},{default:Pe(()=>[p("div",{class:"matrix_warp",onMouseleave:e[2]||(e[2]=l=>G(l)),onMousemove:e[3]||(e[3]=l=>k(l))},[p("div",Be,[p("img",{onLoad:e[1]||(e[1]=l=>U()),src:s.url,alt:""},null,40,ke),p("div",Ie,Ee(s.der),1)])],32)]),_:2},1032,["to"])]))),128))]),Ne])],64)}}};var Oe=be(Ae,[["__scopeId","data-v-0ed8bd6c"]]);export{Oe as default};
