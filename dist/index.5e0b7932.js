import{M as ae,V as m,C as A,F as se,P as ce,k as X,l as Y,m as ue,W as de,n as J,U as Z,p as Q,q as ne,L as ee,R as fe,B as me,s as ve,t as E,u as pe,v as ge,x as he,r as we,o as V,y as U,z as xe,A as ye,D as G,E as v,G as te,H as oe,b as Se,I as Ce,J as ie,N as Me,Q as _e,X as Pe,Y as Ee,w as Te,Z as be}from"./vendor.ef7c6805.js";import{u as Re,r as De}from"./index.58f59d0d.js";import{t as ze}from"./temp4.7ba750bb.js";import{_ as Le}from"./plugin-vue_export-helper.2100c508.js";class re extends ae{constructor(p,o={}){super(p);const n=this,N=o.textureWidth!==void 0?o.textureWidth:512,g=o.textureHeight!==void 0?o.textureHeight:512,H=o.clipBias!==void 0?o.clipBias:0,y=o.alpha!==void 0?o.alpha:1,M=o.time!==void 0?o.time:0,T=o.waterNormals!==void 0?o.waterNormals:null,W=o.sunDirection!==void 0?o.sunDirection:new m(.70707,.70707,0),F=new A(o.sunColor!==void 0?o.sunColor:16777215),O=new A(o.waterColor!==void 0?o.waterColor:8355711),I=o.eye!==void 0?o.eye:new m(0,0,0),B=o.distortionScale!==void 0?o.distortionScale:20,b=o.side!==void 0?o.side:se,$=o.fog!==void 0?o.fog:!1,S=new ce,u=new m,s=new m,c=new m,h=new X,w=new m(0,0,-1),d=new Y,_=new m,R=new m,C=new Y,D=new X,r=new ue,j={minFilter:ee,magFilter:ee,format:fe},e=new de(N,g,j);(!J.isPowerOfTwo(N)||!J.isPowerOfTwo(g))&&(e.texture.generateMipmaps=!1);const i={uniforms:Z.merge([Q.fog,Q.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new X},sunColor:{value:new A(8355711)},sunDirection:{value:new m(.70707,.70707,0)},eye:{value:new m},waterColor:{value:new A(5592405)}}]),vertexShader:`
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
				}`},t=new ne({fragmentShader:i.fragmentShader,vertexShader:i.vertexShader,uniforms:Z.clone(i.uniforms),lights:!0,side:b,fog:$});t.uniforms.mirrorSampler.value=e.texture,t.uniforms.textureMatrix.value=D,t.uniforms.alpha.value=y,t.uniforms.time.value=M,t.uniforms.normalSampler.value=T,t.uniforms.sunColor.value=F,t.uniforms.waterColor.value=O,t.uniforms.sunDirection.value=W,t.uniforms.distortionScale.value=B,t.uniforms.eye.value=I,n.material=t,n.onBeforeRender=function(a,x,f){if(s.setFromMatrixPosition(n.matrixWorld),c.setFromMatrixPosition(f.matrixWorld),h.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(h),_.subVectors(s,c),_.dot(u)>0)return;_.reflect(u).negate(),_.add(s),h.extractRotation(f.matrixWorld),w.set(0,0,-1),w.applyMatrix4(h),w.add(c),R.subVectors(s,w),R.reflect(u).negate(),R.add(s),r.position.copy(_),r.up.set(0,1,0),r.up.applyMatrix4(h),r.up.reflect(u),r.lookAt(R),r.far=f.far,r.updateMatrixWorld(),r.projectionMatrix.copy(f.projectionMatrix),D.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),D.multiply(r.projectionMatrix),D.multiply(r.matrixWorldInverse),S.setFromNormalAndCoplanarPoint(u,s),S.applyMatrix4(r.matrixWorldInverse),d.set(S.normal.x,S.normal.y,S.normal.z,S.constant);const l=r.projectionMatrix;C.x=(Math.sign(d.x)+l.elements[8])/l.elements[0],C.y=(Math.sign(d.y)+l.elements[9])/l.elements[5],C.z=-1,C.w=(1+l.elements[10])/l.elements[14],d.multiplyScalar(2/d.dot(C)),l.elements[2]=d.x,l.elements[6]=d.y,l.elements[10]=d.z+1-H,l.elements[14]=d.w,I.setFromMatrixPosition(f.matrixWorld);const z=a.getRenderTarget(),P=a.xr.enabled,le=a.shadowMap.autoUpdate;n.visible=!1,a.xr.enabled=!1,a.shadowMap.autoUpdate=!1,a.setRenderTarget(e),a.state.buffers.depth.setMask(!0),a.autoClear===!1&&a.clear(),a.render(x,r),n.visible=!0,a.xr.enabled=P,a.shadowMap.autoUpdate=le,a.setRenderTarget(z);const q=f.viewport;q!==void 0&&a.state.viewport(q)}}}re.prototype.isWater=!0;class k extends ae{constructor(){const p=k.SkyShader,o=new ne({name:"SkyShader",fragmentShader:p.fragmentShader,vertexShader:p.vertexShader,uniforms:Z.clone(p.uniforms),side:me,depthWrite:!1});super(new ve(1,1,1),o)}}k.prototype.isSky=!0;k.SkyShader={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new m},up:{value:new m(0,1,0)}},vertexShader:`
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

		}`};var We="./dist/waternormals.add9912b.jpg";const K=L=>(_e("data-v-55ea4514"),L=L(),Pe(),L),Fe=K(()=>v("p",{id:"tip"},"Wating Loading..",-1)),Be={class:"warp"},ke=K(()=>v("div",{style:{flex:"1"}},null,-1)),Ne={class:"main"},Ie={class:"card"},Ae=["src"],Ve={class:"introduce"},Ue=K(()=>v("div",{style:{flex:"1"}},null,-1)),Ge={setup(L){const p=Re();p.count++,p.$patch({count:p.count+1}),p.increment();const{appContext:o}=Ee(),n=o.config.globalProperties.$three,N=o.config.globalProperties.$OrbitControls;let g=E(null),H=De.slice(2,99),y=E([]);y=H.map(e=>({path:e.path,url:e.img,der:e.der})),y.pop();let M=E(!0),T=E(0),W=E(!1);E(null);let F=E(!1);const O=()=>{if(F.value=!0,window.sessionStorage.loading)F.value=!1,M.value=!1;else if(T.value++,T.value==y.length){let e=document.getElementById("tip");e.style.opacity=1,e.innerText="Card Loading Completed",W?window.sessionStorage.loading=!1:e.style.opacity=0}},I=pe(()=>T.value==y.length&&W);let B=!1,b=null;const $=e=>{if(window.innerWidth<700)return!1;if(B==!1){let i=e.currentTarget,t=e.currentTarget.firstElementChild,a=e.clientX-i.offsetLeft-i.offsetWidth/2,x=e.clientY-i.offsetTop-i.offsetHeight/2;t.style.transform=`matrix3d( 1,0,0,${.1*(a/1e4)},0,1,0,${.1*(x/1e4)},0,0,1,0,0,0,0,1)`,B=!0}else b||(b=setTimeout(()=>{clearTimeout(b),b=null,B=!1},60))},S=e=>{let i=e.currentTarget.firstElementChild;i.style.transform=" matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"};let u,s,c,h,w,d;function _(){c=new n.WebGLRenderer({antialias:!0,alpha:!0}),c.setPixelRatio(window.devicePixelRatio),c.setSize(window.innerWidth,window.innerHeight),c.toneMapping=n.ACESFilmicToneMapping,g.value.appendChild(c.domElement),s=new n.Scene,u=new n.PerspectiveCamera(55,window.innerWidth/window.innerHeight,1,2e4),u.position.set(30,30,100),d=new n.Vector3;const e=new n.PlaneGeometry(1e4,1e4);w=new re(e,{textureWidth:1024,textureHeight:1024,waterNormals:new n.TextureLoader().load(We,function(z){z.wrapS=z.wrapT=n.RepeatWrapping;let P=document.getElementById("tip");T.value==y.length?(W=!0,P.innerText="Texture Loading completed",P.style.opacity=1,window.sessionStorage.loading=!1):window.sessionStorage||(P.style.opacity=0)}),sunDirection:new n.Vector3,sunColor:16762902,waterColor:7695,distortionScale:3.7,fog:s.fog!==void 0}),w.rotation.x=-Math.PI/2,s.add(w);const i=new k;i.scale.setScalar(1e4),s.add(i);const t=i.material.uniforms;t.turbidity.value=10,t.rayleigh.value=2,t.mieCoefficient.value=.005,t.mieDirectionalG.value=.18;const a={elevation:5,azimuth:170},x=new n.PMREMGenerator(c);function f(){const z=n.MathUtils.degToRad(90-a.elevation),P=n.MathUtils.degToRad(a.azimuth);d.setFromSphericalCoords(1,z,P),i.material.uniforms.sunPosition.value.copy(d),w.material.uniforms.sunDirection.value.copy(d).normalize(),s.environment=x.fromScene(i).texture}let l=new N(u,c.domElement);l.maxPolarAngle=Math.PI*.495,l.target.set(23,4,0),l.minDistance=40,l.maxDistance=200,l.update(),f(),window.addEventListener("resize",R)}function R(){u.aspect=window.innerWidth/window.innerHeight,u.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight)}function C(){h=requestAnimationFrame(C),D()}function D(){w.material.uniforms.time.value+=1/60,c.render(s,u)}ge(()=>{_(),C()});function r(e){if(e.length>0)e.forEach(i=>{r(i)});else{let i=e.children.filter(t=>t);i.forEach(t=>{t.children.length?r(t):(t.geometry&&t.geometry.dispose&&t.geometry.dispose(),t.material&&t.material.dispose&&t.material.dispose(),t.clear(),t=null)}),e.clear(),i=null}}function j(e){e.renderLists.dispose(),e.dispose(),e.forceContextLoss(),e.domElement=null,e.content=null,e=null}return he(()=>{s&&r(s),c&&j(c),h&&(cancelAnimationFrame(h),h=null,n.Cache.clear()),g.value&&g.value.removeChild(g.value.firstChild)}),(e,i)=>{const t=we("router-link");return V(),U(ie,null,[xe(v("div",{class:Ce(["loading",G(M)?"":"loading_active"])},[Fe,te(ze,{id:"load",style:{transform:"rotate(-90deg)"}}),G(I)?(V(),U("button",{key:0,class:"go__in",onClick:i[0]||(i[0]=a=>oe(M)?M.value=!1:M=!1)}," Go It ")):Se("",!0)],2),[[ye,G(F)]]),v("div",Be,[v("div",{id:"canvas",ref:(a,x)=>{x.canvas=a,oe(g)?g.value=a:g=a}},null,512),ke,v("ul",Ne,[(V(!0),U(ie,null,Me(G(y),(a,x)=>(V(),U("li",{key:x,class:"card_warp"},[te(t,{tag:"a",to:{path:a.path}},{default:Te(()=>[v("div",{class:"matrix_warp",onMouseleave:i[2]||(i[2]=f=>S(f)),onMousemove:i[3]||(i[3]=f=>$(f))},[v("div",Ie,[v("img",{onLoad:i[1]||(i[1]=f=>O()),src:a.url,alt:""},null,40,Ae),v("div",Ve,be(a.der),1)])],32)]),_:2},1032,["to"])]))),128))]),Ue])],64)}}};var Xe=Le(Ge,[["__scopeId","data-v-55ea4514"]]);export{Xe as default};
