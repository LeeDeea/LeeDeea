import{r as ae}from"./index.3e1e54a6.js";import{M as q,V as c,C as A,F as ne,P as re,i as U,j,k as le,W as se,l as X,U as H,m as K,n as Y,L as Z,R as ce,B as ue,p as de,q as $,s as fe,t as me,r as ve,o as V,u as G,v as C,w as pe,x as he,y as ge,z as xe,A as we,D as ye,E as Se,G as Ce,H as Me,I as _e}from"./vendor.56d77867.js";import{_ as Pe}from"./plugin-vue_export-helper.2100c508.js";class J extends q{constructor(g,e={}){super(g);const x=this,u=e.textureWidth!==void 0?e.textureWidth:512,k=e.textureHeight!==void 0?e.textureHeight:512,z=e.clipBias!==void 0?e.clipBias:0,W=e.alpha!==void 0?e.alpha:1,P=e.time!==void 0?e.time:0,N=e.waterNormals!==void 0?e.waterNormals:null,I=e.sunDirection!==void 0?e.sunDirection:new c(.70707,.70707,0),w=new A(e.sunColor!==void 0?e.sunColor:16777215),f=new A(e.waterColor!==void 0?e.waterColor:8355711),r=e.eye!==void 0?e.eye:new c(0,0,0),E=e.distortionScale!==void 0?e.distortionScale:20,M=e.side!==void 0?e.side:ne,b=e.fog!==void 0?e.fog:!1,y=new re,v=new c,p=new c,L=new c,h=new U,R=new c(0,0,-1),t=new j,o=new c,i=new c,n=new j,s=new U,a=new le,_={minFilter:Z,magFilter:Z,format:ce},S=new se(u,k,_);(!X.isPowerOfTwo(u)||!X.isPowerOfTwo(k))&&(S.texture.generateMipmaps=!1);const F={uniforms:H.merge([K.fog,K.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new U},sunColor:{value:new A(8355711)},sunDirection:{value:new c(.70707,.70707,0)},eye:{value:new c},waterColor:{value:new A(5592405)}}]),vertexShader:`
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
				}`},d=new Y({fragmentShader:F.fragmentShader,vertexShader:F.vertexShader,uniforms:H.clone(F.uniforms),lights:!0,side:M,fog:b});d.uniforms.mirrorSampler.value=S.texture,d.uniforms.textureMatrix.value=s,d.uniforms.alpha.value=W,d.uniforms.time.value=P,d.uniforms.normalSampler.value=N,d.uniforms.sunColor.value=w,d.uniforms.waterColor.value=f,d.uniforms.sunDirection.value=I,d.uniforms.distortionScale.value=E,d.uniforms.eye.value=r,x.material=d,x.onBeforeRender=function(l,ee,T){if(p.setFromMatrixPosition(x.matrixWorld),L.setFromMatrixPosition(T.matrixWorld),h.extractRotation(x.matrixWorld),v.set(0,0,1),v.applyMatrix4(h),o.subVectors(p,L),o.dot(v)>0)return;o.reflect(v).negate(),o.add(p),h.extractRotation(T.matrixWorld),R.set(0,0,-1),R.applyMatrix4(h),R.add(L),i.subVectors(p,R),i.reflect(v).negate(),i.add(p),a.position.copy(o),a.up.set(0,1,0),a.up.applyMatrix4(h),a.up.reflect(v),a.lookAt(i),a.far=T.far,a.updateMatrixWorld(),a.projectionMatrix.copy(T.projectionMatrix),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(a.projectionMatrix),s.multiply(a.matrixWorldInverse),y.setFromNormalAndCoplanarPoint(v,p),y.applyMatrix4(a.matrixWorldInverse),t.set(y.normal.x,y.normal.y,y.normal.z,y.constant);const m=a.projectionMatrix;n.x=(Math.sign(t.x)+m.elements[8])/m.elements[0],n.y=(Math.sign(t.y)+m.elements[9])/m.elements[5],n.z=-1,n.w=(1+m.elements[10])/m.elements[14],t.multiplyScalar(2/t.dot(n)),m.elements[2]=t.x,m.elements[6]=t.y,m.elements[10]=t.z+1-z,m.elements[14]=t.w,r.setFromMatrixPosition(T.matrixWorld);const te=l.getRenderTarget(),oe=l.xr.enabled,ie=l.shadowMap.autoUpdate;x.visible=!1,l.xr.enabled=!1,l.shadowMap.autoUpdate=!1,l.setRenderTarget(S),l.state.buffers.depth.setMask(!0),l.autoClear===!1&&l.clear(),l.render(ee,a),x.visible=!0,l.xr.enabled=oe,l.shadowMap.autoUpdate=ie,l.setRenderTarget(te);const O=T.viewport;O!==void 0&&l.state.viewport(O)}}}J.prototype.isWater=!0;class B extends q{constructor(){const g=B.SkyShader,e=new Y({name:"SkyShader",fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:H.clone(g.uniforms),side:ue,depthWrite:!1});super(new de(1,1,1),e)}}B.prototype.isSky=!0;B.SkyShader={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new c},up:{value:new c(0,1,0)}},vertexShader:`
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

		}`};var Ee="./dist/waternormals.add9912b.jpg";const Q=D=>(we("data-v-ad3597b4"),D=D(),ye(),D),be={class:"warp"},Re=Q(()=>C("div",{style:{flex:"1"}},null,-1)),Te={class:"main"},De={class:"card"},ze=["src"],We={class:"introduce"},Le=Q(()=>C("div",{style:{flex:"1"}},null,-1)),Fe={setup(D){const{appContext:g}=Se(),e=g.config.globalProperties.$three,x=g.config.globalProperties.$OrbitControls;let u=$(null),k=ae.slice(2,99),z=$([]);z=k.map(t=>({path:t.path,url:t.img,der:t.der})),z.pop();let W=!1,P=null;const N=t=>{if(window.innerWidth<700)return!1;if(W==!1){let o=t.currentTarget,i=t.currentTarget.firstElementChild,n=t.clientX-o.offsetLeft-o.offsetWidth/2,s=t.clientY-o.offsetTop-o.offsetHeight/2;i.style.transform=`matrix3d( 1,0,0,${.1*(n/1e4)},0,1,0,${.1*(s/1e4)},0,0,1,0,0,0,0,1)`,W=!0}else P||(P=setTimeout(()=>{clearTimeout(P),P=null,W=!1},60))},I=t=>{let o=t.currentTarget.firstElementChild;o.style.transform=" matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"};let w,f,r,E,M,b;function y(){r=new e.WebGLRenderer({antialias:!0,alpha:!0}),r.setPixelRatio(window.devicePixelRatio),r.setSize(window.innerWidth,window.innerHeight),r.toneMapping=e.ACESFilmicToneMapping,u.value.appendChild(r.domElement),f=new e.Scene,w=new e.PerspectiveCamera(55,window.innerWidth/window.innerHeight,1,2e4),w.position.set(30,30,100),b=new e.Vector3;const t=new e.PlaneGeometry(1e4,1e4);M=new J(t,{textureWidth:1024,textureHeight:1024,waterNormals:new e.TextureLoader().load(Ee,function(S){S.wrapS=S.wrapT=e.RepeatWrapping}),sunDirection:new e.Vector3,sunColor:16762902,waterColor:7695,distortionScale:3.7,fog:f.fog!==void 0}),M.rotation.x=-Math.PI/2,f.add(M);const o=new B;o.scale.setScalar(1e4),f.add(o);const i=o.material.uniforms;i.turbidity.value=10,i.rayleigh.value=2,i.mieCoefficient.value=.005,i.mieDirectionalG.value=.18;const n={elevation:5,azimuth:155},s=new e.PMREMGenerator(r);function a(){const S=e.MathUtils.degToRad(90-n.elevation),F=e.MathUtils.degToRad(n.azimuth);b.setFromSphericalCoords(1,S,F),o.material.uniforms.sunPosition.value.copy(b),M.material.uniforms.sunDirection.value.copy(b).normalize(),f.environment=s.fromScene(o).texture}let _=new x(w,r.domElement);_.maxPolarAngle=Math.PI*.495,_.target.set(23,4,0),_.minDistance=40,_.maxDistance=200,_.update(),a(),window.addEventListener("resize",v)}function v(){w.aspect=window.innerWidth/window.innerHeight,w.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)}function p(){E=requestAnimationFrame(p),L()}function L(){M.material.uniforms.time.value+=1/60,r.render(f,w)}fe(()=>{y(),p()});function h(t){if(t.length>0)t.forEach(o=>{h(o)});else{let o=t.children.filter(i=>i);o.forEach(i=>{i.children.length?h(i):(i.geometry&&i.geometry.dispose&&i.geometry.dispose(),i.material&&i.material.dispose&&i.material.dispose(),i.clear(),i=null)}),t.clear(),o=null}console.log("\u6267\u884C\uFF0C\u573A\u666F\u5220\u9664")}function R(t){t.renderLists.dispose(),t.dispose(),t.forceContextLoss(),t.domElement=null,t.content=null,t=null,console.log("\u6267\u884C\uFF0C\u6E32\u67D3\u5668\u5220\u9664")}return me(()=>{f&&h(f),r&&R(r),E&&(cancelAnimationFrame(E),E=null,e.Cache.clear()),u.value&&(u.value.removeChild(u.value.firstChild),console.log(u.value))}),(t,o)=>{const i=ve("router-link");return V(),G("div",be,[C("div",{id:"canvas",ref:(n,s)=>{s.canvas=n,pe(u)?u.value=n:u=n}},null,512),Re,C("ul",Te,[(V(!0),G(he,null,ge(xe(z),(n,s)=>(V(),G("li",{key:s,class:"card_warp"},[Ce(i,{tag:"a",to:{path:n.path}},{default:Me(()=>[C("div",{class:"matrix_warp",onMouseleave:o[0]||(o[0]=a=>I(a)),onMousemove:o[1]||(o[1]=a=>N(a))},[C("div",De,[C("img",{src:n.url,alt:""},null,8,ze),C("div",We,_e(n.der),1)])],32)]),_:2},1032,["to"])]))),128))]),Le])}}};var Ne=Pe(Fe,[["__scopeId","data-v-ad3597b4"]]);export{Ne as default};
