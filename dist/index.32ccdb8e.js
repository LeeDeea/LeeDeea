import{r as re}from"./index.4c33aefd.js";import{M as J,V as c,C as k,F as le,P as se,i as G,j,k as ce,W as ue,l as X,U as H,m as K,n as Q,L as Z,R as de,B as fe,p as me,q as $,s as ve,t as pe,r as he,o as N,u as A,v as q,w as ge,x as g,y as xe,z as Y,A as we,D as ye,E as Se,G as Ce,H as Me,I as _e,J as Pe}from"./vendor.9a3fe93b.js";import{_ as Ee}from"./plugin-vue_export-helper.2100c508.js";class ee extends J{constructor(x,e={}){super(x);const w=this,m=e.textureWidth!==void 0?e.textureWidth:512,B=e.textureHeight!==void 0?e.textureHeight:512,W=e.clipBias!==void 0?e.clipBias:0,I=e.alpha!==void 0?e.alpha:1,L=e.time!==void 0?e.time:0,b=e.waterNormals!==void 0?e.waterNormals:null,V=e.sunDirection!==void 0?e.sunDirection:new c(.70707,.70707,0),U=new k(e.sunColor!==void 0?e.sunColor:16777215),y=new k(e.waterColor!==void 0?e.waterColor:8355711),u=e.eye!==void 0?e.eye:new c(0,0,0),l=e.distortionScale!==void 0?e.distortionScale:20,R=e.side!==void 0?e.side:le,_=e.fog!==void 0?e.fog:!1,d=new se,p=new c,S=new c,T=new c,P=new G,C=new c(0,0,-1),f=new j,t=new c,o=new c,i=new j,n=new G,a=new ce,E={minFilter:Z,magFilter:Z,format:de},h=new ue(m,B,E);(!X.isPowerOfTwo(m)||!X.isPowerOfTwo(B))&&(h.texture.generateMipmaps=!1);const M={uniforms:H.merge([K.fog,K.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new G},sunColor:{value:new k(8355711)},sunDirection:{value:new c(.70707,.70707,0)},eye:{value:new c},waterColor:{value:new k(5592405)}}]),vertexShader:`
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
				}`},s=new Q({fragmentShader:M.fragmentShader,vertexShader:M.vertexShader,uniforms:H.clone(M.uniforms),lights:!0,side:R,fog:_});s.uniforms.mirrorSampler.value=h.texture,s.uniforms.textureMatrix.value=n,s.uniforms.alpha.value=I,s.uniforms.time.value=L,s.uniforms.normalSampler.value=b,s.uniforms.sunColor.value=U,s.uniforms.waterColor.value=y,s.uniforms.sunDirection.value=V,s.uniforms.distortionScale.value=l,s.uniforms.eye.value=u,w.material=s,w.onBeforeRender=function(r,oe,D){if(S.setFromMatrixPosition(w.matrixWorld),T.setFromMatrixPosition(D.matrixWorld),P.extractRotation(w.matrixWorld),p.set(0,0,1),p.applyMatrix4(P),t.subVectors(S,T),t.dot(p)>0)return;t.reflect(p).negate(),t.add(S),P.extractRotation(D.matrixWorld),C.set(0,0,-1),C.applyMatrix4(P),C.add(T),o.subVectors(S,C),o.reflect(p).negate(),o.add(S),a.position.copy(t),a.up.set(0,1,0),a.up.applyMatrix4(P),a.up.reflect(p),a.lookAt(o),a.far=D.far,a.updateMatrixWorld(),a.projectionMatrix.copy(D.projectionMatrix),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(a.projectionMatrix),n.multiply(a.matrixWorldInverse),d.setFromNormalAndCoplanarPoint(p,S),d.applyMatrix4(a.matrixWorldInverse),f.set(d.normal.x,d.normal.y,d.normal.z,d.constant);const v=a.projectionMatrix;i.x=(Math.sign(f.x)+v.elements[8])/v.elements[0],i.y=(Math.sign(f.y)+v.elements[9])/v.elements[5],i.z=-1,i.w=(1+v.elements[10])/v.elements[14],f.multiplyScalar(2/f.dot(i)),v.elements[2]=f.x,v.elements[6]=f.y,v.elements[10]=f.z+1-W,v.elements[14]=f.w,u.setFromMatrixPosition(D.matrixWorld);const ie=r.getRenderTarget(),ae=r.xr.enabled,ne=r.shadowMap.autoUpdate;w.visible=!1,r.xr.enabled=!1,r.shadowMap.autoUpdate=!1,r.setRenderTarget(h),r.state.buffers.depth.setMask(!0),r.autoClear===!1&&r.clear(),r.render(oe,a),w.visible=!0,r.xr.enabled=ae,r.shadowMap.autoUpdate=ne,r.setRenderTarget(ie);const O=D.viewport;O!==void 0&&r.state.viewport(O)}}}ee.prototype.isWater=!0;class F extends J{constructor(){const x=F.SkyShader,e=new Q({name:"SkyShader",fragmentShader:x.fragmentShader,vertexShader:x.vertexShader,uniforms:H.clone(x.uniforms),side:fe,depthWrite:!1});super(new me(1,1,1),e)}}F.prototype.isSky=!0;F.SkyShader={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new c},up:{value:new c(0,1,0)}},vertexShader:`
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

		}`};var be="./dist/waternormals.add9912b.jpg";const te=z=>(ye("data-v-6bd0f990"),z=z(),Se(),z),Re={key:0,class:"loading loading_active"},Te={class:"warp"},De=te(()=>g("div",{style:{flex:"1"}},null,-1)),ze={class:"main"},We={class:"card"},Le=["src"],Fe={class:"introduce"},Be=te(()=>g("div",{style:{flex:"1"}},null,-1)),ke={setup(z){const{appContext:x}=Ce(),e=x.config.globalProperties.$three,w=x.config.globalProperties.$OrbitControls;let m=$(null),B=re.slice(2,99),W=$([]);W=B.map(t=>({path:t.path,url:t.img,der:t.der})),W.pop();let I=!1,L=!1,b=null;const V=t=>{if(window.innerWidth<700)return!1;if(L==!1){let o=t.currentTarget,i=t.currentTarget.firstElementChild,n=t.clientX-o.offsetLeft-o.offsetWidth/2,a=t.clientY-o.offsetTop-o.offsetHeight/2;i.style.transform=`matrix3d( 1,0,0,${.1*(n/1e4)},0,1,0,${.1*(a/1e4)},0,0,1,0,0,0,0,1)`,L=!0}else b||(b=setTimeout(()=>{clearTimeout(b),b=null,L=!1},60))},U=t=>{let o=t.currentTarget.firstElementChild;o.style.transform=" matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"};let y,u,l,R,_,d;function p(){l=new e.WebGLRenderer({antialias:!0,alpha:!0}),l.setPixelRatio(window.devicePixelRatio),l.setSize(window.innerWidth,window.innerHeight),l.toneMapping=e.ACESFilmicToneMapping,m.value.appendChild(l.domElement),u=new e.Scene,y=new e.PerspectiveCamera(55,window.innerWidth/window.innerHeight,1,2e4),y.position.set(30,30,100),d=new e.Vector3;const t=new e.PlaneGeometry(1e4,1e4);_=new ee(t,{textureWidth:1024,textureHeight:1024,waterNormals:new e.TextureLoader().load(be,function(M){M.wrapS=M.wrapT=e.RepeatWrapping}),sunDirection:new e.Vector3,sunColor:16762902,waterColor:7695,distortionScale:3.7,fog:u.fog!==void 0}),_.rotation.x=-Math.PI/2,u.add(_);const o=new F;o.scale.setScalar(1e4),u.add(o);const i=o.material.uniforms;i.turbidity.value=10,i.rayleigh.value=2,i.mieCoefficient.value=.005,i.mieDirectionalG.value=.18;const n={elevation:5,azimuth:155},a=new e.PMREMGenerator(l);function E(){const M=e.MathUtils.degToRad(90-n.elevation),s=e.MathUtils.degToRad(n.azimuth);d.setFromSphericalCoords(1,M,s),o.material.uniforms.sunPosition.value.copy(d),_.material.uniforms.sunDirection.value.copy(d).normalize(),u.environment=a.fromScene(o).texture}let h=new w(y,l.domElement);h.maxPolarAngle=Math.PI*.495,h.target.set(23,4,0),h.minDistance=40,h.maxDistance=200,h.update(),E(),window.addEventListener("resize",S)}function S(){y.aspect=window.innerWidth/window.innerHeight,y.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)}function T(){R=requestAnimationFrame(T),P()}function P(){_.material.uniforms.time.value+=1/60,l.render(u,y)}ve(()=>{p(),T()});function C(t){if(t.length>0)t.forEach(o=>{C(o)});else{let o=t.children.filter(i=>i);o.forEach(i=>{i.children.length?C(i):(i.geometry&&i.geometry.dispose&&i.geometry.dispose(),i.material&&i.material.dispose&&i.material.dispose(),i.clear(),i=null)}),t.clear(),o=null}console.log("\u6267\u884C\uFF0C\u573A\u666F\u5220\u9664")}function f(t){t.renderLists.dispose(),t.dispose(),t.forceContextLoss(),t.domElement=null,t.content=null,t=null,console.log("\u6267\u884C\uFF0C\u6E32\u67D3\u5668\u5220\u9664")}return pe(()=>{u&&C(u),l&&f(l),R&&(cancelAnimationFrame(R),R=null,e.Cache.clear()),m.value&&m.value.removeChild(m.value.firstChild)}),(t,o)=>{const i=he("router-link");return N(),A(Y,null,[q(I)?(N(),A("div",Re," Please Wating Load Data ")):ge("",!0),g("div",Te,[g("div",{id:"canvas",ref:(n,a)=>{a.canvas=n,xe(m)?m.value=n:m=n}},null,512),De,g("ul",ze,[(N(!0),A(Y,null,we(q(W),(n,a)=>(N(),A("li",{key:a,class:"card_warp"},[Me(i,{tag:"a",to:{path:n.path}},{default:_e(()=>[g("div",{class:"matrix_warp",onMouseleave:o[0]||(o[0]=E=>U(E)),onMousemove:o[1]||(o[1]=E=>V(E))},[g("div",We,[g("img",{src:n.url,alt:""},null,8,Le),g("div",Fe,Pe(n.der),1)])],32)]),_:2},1032,["to"])]))),128))]),Be])],64)}}};var Ve=Ee(ke,[["__scopeId","data-v-6bd0f990"]]);export{Ve as default};
