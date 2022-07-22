import{M as oe,V as c,C as N,F as se,P as ce,i as H,j as K,k as ue,W as de,l as Z,U as j,m as q,n as ie,L as Y,R as fe,B as me,p as ve,q as O,s as pe,t as ge,r as he,o as A,u as V,v as J,w as Q,x as v,y as ee,z as xe,A as te,D as we,E as ye,G as Se,H as Ce,I as Me,J as _e}from"./vendor.67723c31.js";import{r as Pe}from"./index.e0a5e912.js";import{t as Ee}from"./temp4.cdff7c25.js";import{_ as Te}from"./plugin-vue_export-helper.2100c508.js";class ae extends oe{constructor(y,e={}){super(y);const S=this,p=e.textureWidth!==void 0?e.textureWidth:512,k=e.textureHeight!==void 0?e.textureHeight:512,_=e.clipBias!==void 0?e.clipBias:0,P=e.alpha!==void 0?e.alpha:1,z=e.time!==void 0?e.time:0,U=e.waterNormals!==void 0?e.waterNormals:null,L=e.sunDirection!==void 0?e.sunDirection:new c(.70707,.70707,0),b=new N(e.sunColor!==void 0?e.sunColor:16777215),G=new N(e.waterColor!==void 0?e.waterColor:8355711),I=e.eye!==void 0?e.eye:new c(0,0,0),C=e.distortionScale!==void 0?e.distortionScale:20,g=e.side!==void 0?e.side:se,l=e.fog!==void 0?e.fog:!1,u=new ce,s=new c,d=new c,W=new c,E=new H,T=new c(0,0,-1),f=new K,w=new c,R=new c,o=new K,i=new H,t=new ue,r={minFilter:Y,magFilter:Y,format:fe},m=new de(p,k,r);(!Z.isPowerOfTwo(p)||!Z.isPowerOfTwo(k))&&(m.texture.generateMipmaps=!1);const h={uniforms:j.merge([q.fog,q.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new H},sunColor:{value:new N(8355711)},sunDirection:{value:new c(.70707,.70707,0)},eye:{value:new c},waterColor:{value:new N(5592405)}}]),vertexShader:`
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
				}`},n=new ie({fragmentShader:h.fragmentShader,vertexShader:h.vertexShader,uniforms:j.clone(h.uniforms),lights:!0,side:g,fog:l});n.uniforms.mirrorSampler.value=m.texture,n.uniforms.textureMatrix.value=i,n.uniforms.alpha.value=P,n.uniforms.time.value=z,n.uniforms.normalSampler.value=U,n.uniforms.sunColor.value=b,n.uniforms.waterColor.value=G,n.uniforms.sunDirection.value=L,n.uniforms.distortionScale.value=C,n.uniforms.eye.value=I,S.material=n,S.onBeforeRender=function(a,F,M){if(d.setFromMatrixPosition(S.matrixWorld),W.setFromMatrixPosition(M.matrixWorld),E.extractRotation(S.matrixWorld),s.set(0,0,1),s.applyMatrix4(E),w.subVectors(d,W),w.dot(s)>0)return;w.reflect(s).negate(),w.add(d),E.extractRotation(M.matrixWorld),T.set(0,0,-1),T.applyMatrix4(E),T.add(W),R.subVectors(d,T),R.reflect(s).negate(),R.add(d),t.position.copy(w),t.up.set(0,1,0),t.up.applyMatrix4(E),t.up.reflect(s),t.lookAt(R),t.far=M.far,t.updateMatrixWorld(),t.projectionMatrix.copy(M.projectionMatrix),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse),u.setFromNormalAndCoplanarPoint(s,d),u.applyMatrix4(t.matrixWorldInverse),f.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const x=t.projectionMatrix;o.x=(Math.sign(f.x)+x.elements[8])/x.elements[0],o.y=(Math.sign(f.y)+x.elements[9])/x.elements[5],o.z=-1,o.w=(1+x.elements[10])/x.elements[14],f.multiplyScalar(2/f.dot(o)),x.elements[2]=f.x,x.elements[6]=f.y,x.elements[10]=f.z+1-_,x.elements[14]=f.w,I.setFromMatrixPosition(M.matrixWorld);const ne=a.getRenderTarget(),re=a.xr.enabled,le=a.shadowMap.autoUpdate;S.visible=!1,a.xr.enabled=!1,a.shadowMap.autoUpdate=!1,a.setRenderTarget(m),a.state.buffers.depth.setMask(!0),a.autoClear===!1&&a.clear(),a.render(F,t),S.visible=!0,a.xr.enabled=re,a.shadowMap.autoUpdate=le,a.setRenderTarget(ne);const X=M.viewport;X!==void 0&&a.state.viewport(X)}}}ae.prototype.isWater=!0;class B extends oe{constructor(){const y=B.SkyShader,e=new ie({name:"SkyShader",fragmentShader:y.fragmentShader,vertexShader:y.vertexShader,uniforms:j.clone(y.uniforms),side:me,depthWrite:!1});super(new ve(1,1,1),e)}}B.prototype.isSky=!0;B.SkyShader={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new c},up:{value:new c(0,1,0)}},vertexShader:`
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

		}`};var be="./dist/waternormals.add9912b.jpg";const $=D=>(ye("data-v-020d6cbc"),D=D(),Se(),D),Re={key:0,class:"loading loading_active"},De=$(()=>v("p",{id:"tip"},"Wating Loading..",-1)),ze={class:"warp"},Le=$(()=>v("div",{style:{flex:"1"}},null,-1)),We={class:"main"},Fe={class:"card"},Be=["src"],ke={class:"introduce"},Ie=$(()=>v("div",{style:{flex:"1"}},null,-1)),Ne={setup(D){const{appContext:y}=Ce(),e=y.config.globalProperties.$three,S=y.config.globalProperties.$OrbitControls;let p=O(null),k=Pe.slice(2,99),_=O([]);_=k.map(o=>({path:o.path,url:o.img,der:o.der})),_.pop();let P=O(!0),z=0;const U=()=>{if(window.sessionStorage.loading)P.value=!1;else if(z++,z==_.length){let o=document.getElementById("tip");o.innerText="Card Loading completed, Wait Texture"}};let L=!1,b=null;const G=o=>{if(window.innerWidth<700)return!1;if(L==!1){let i=o.currentTarget,t=o.currentTarget.firstElementChild,r=o.clientX-i.offsetLeft-i.offsetWidth/2,m=o.clientY-i.offsetTop-i.offsetHeight/2;t.style.transform=`matrix3d( 1,0,0,${.1*(r/1e4)},0,1,0,${.1*(m/1e4)},0,0,1,0,0,0,0,1)`,L=!0}else b||(b=setTimeout(()=>{clearTimeout(b),b=null,L=!1},60))},I=o=>{let i=o.currentTarget.firstElementChild;i.style.transform=" matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"};let C,g,l,u,s,d;function W(){l=new e.WebGLRenderer({antialias:!0,alpha:!0}),l.setPixelRatio(window.devicePixelRatio),l.setSize(window.innerWidth,window.innerHeight),l.toneMapping=e.ACESFilmicToneMapping,p.value.appendChild(l.domElement),g=new e.Scene,C=new e.PerspectiveCamera(55,window.innerWidth/window.innerHeight,1,2e4),C.position.set(30,30,100),d=new e.Vector3;const o=new e.PlaneGeometry(1e4,1e4);s=new ae(o,{textureWidth:1024,textureHeight:1024,waterNormals:new e.TextureLoader().load(be,function(a){if(z==_.length){let F=document.getElementById("tip"),M=document.getElementById("load");F.innerText="Texture Loading completed",M.style.display="none",window.sessionStorage.loading=!1}a.wrapS=a.wrapT=e.RepeatWrapping}),sunDirection:new e.Vector3,sunColor:16762902,waterColor:7695,distortionScale:3.7,fog:g.fog!==void 0}),s.rotation.x=-Math.PI/2,g.add(s);const i=new B;i.scale.setScalar(1e4),g.add(i);const t=i.material.uniforms;t.turbidity.value=10,t.rayleigh.value=2,t.mieCoefficient.value=.005,t.mieDirectionalG.value=.18;const r={elevation:5,azimuth:155},m=new e.PMREMGenerator(l);function h(){const a=e.MathUtils.degToRad(90-r.elevation),F=e.MathUtils.degToRad(r.azimuth);d.setFromSphericalCoords(1,a,F),i.material.uniforms.sunPosition.value.copy(d),s.material.uniforms.sunDirection.value.copy(d).normalize(),g.environment=m.fromScene(i).texture}let n=new S(C,l.domElement);n.maxPolarAngle=Math.PI*.495,n.target.set(23,4,0),n.minDistance=40,n.maxDistance=200,n.update(),h(),window.addEventListener("resize",E)}function E(){C.aspect=window.innerWidth/window.innerHeight,C.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)}function T(){u=requestAnimationFrame(T),f()}function f(){s.material.uniforms.time.value+=1/60,l.render(g,C)}pe(()=>{W(),T()});function w(o){if(o.length>0)o.forEach(i=>{w(i)});else{let i=o.children.filter(t=>t);i.forEach(t=>{t.children.length?w(t):(t.geometry&&t.geometry.dispose&&t.geometry.dispose(),t.material&&t.material.dispose&&t.material.dispose(),t.clear(),t=null)}),o.clear(),i=null}console.log("\u6267\u884C\uFF0C\u573A\u666F\u5220\u9664")}function R(o){o.renderLists.dispose(),o.dispose(),o.forceContextLoss(),o.domElement=null,o.content=null,o=null,console.log("\u6267\u884C\uFF0C\u6E32\u67D3\u5668\u5220\u9664")}return ge(()=>{g&&w(g),l&&R(l),u&&(cancelAnimationFrame(u),u=null,e.Cache.clear()),p.value&&p.value.removeChild(p.value.firstChild)}),(o,i)=>{const t=he("router-link");return A(),V(te,null,[J(P)?(A(),V("div",Re,[De,Q(Ee,{id:"load",style:{transform:"rotate(-90deg)"}}),v("button",{class:"go__in",onClick:i[0]||(i[0]=r=>ee(P)?P.value=!1:P=!1)},"Go It")])):xe("",!0),v("div",ze,[v("div",{id:"canvas",ref:(r,m)=>{m.canvas=r,ee(p)?p.value=r:p=r}},null,512),Le,v("ul",We,[(A(!0),V(te,null,we(J(_),(r,m)=>(A(),V("li",{key:m,class:"card_warp"},[Q(t,{tag:"a",to:{path:r.path}},{default:Me(()=>[v("div",{class:"matrix_warp",onMouseleave:i[2]||(i[2]=h=>I(h)),onMousemove:i[3]||(i[3]=h=>G(h))},[v("div",Fe,[v("img",{onLoad:i[1]||(i[1]=h=>U()),src:r.url,alt:""},null,40,Be),v("div",ke,_e(r.der),1)])],32)]),_:2},1032,["to"])]))),128))]),Ie])],64)}}};var He=Te(Ne,[["__scopeId","data-v-020d6cbc"]]);export{He as default};
