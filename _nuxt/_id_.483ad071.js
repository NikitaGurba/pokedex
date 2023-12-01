import X from"./button.esm.3f106f5e.js";import Y from"./image.esm.2709ce3b.js";import F from"./skeleton.esm.9504801d.js";import L from"./card.esm.3dda2ab2.js";import Q from"./chip.esm.b3ecbdee.js";import{L as Z,r as A,M as tt,N as et,O as st,P as E,G as q,q as rt,Q as nt,R as d,K as at,c as T,S as j,T as ot,U as it,t as h,V as R,A as S,B as ct,y as D,v as x,W as U,X as N,Y as lt,z as _,x as y,Z as I,o as ut,_ as dt,$ as ht,u as ft,a0 as pt}from"./entry.9a7c477c.js";import yt from"./dialog.esm.7911ba7f.js";import mt from"./paginator.esm.88128ba1.js";import{u as gt}from"./headerData.bf0eb0e3.js";import"./badge.esm.64d28097.js";import"./basecomponent.esm.1cd4df10.js";import"./index.esm.0d3d40d5.js";import"./baseicon.esm.7c1aeeb0.js";import"./index.esm.8857e1f4.js";import"./index.esm.c70b2e4d.js";import"./portal.esm.858b8b24.js";import"./index.esm.304f4ab3.js";import"./index.esm.08769279.js";import"./dropdown.esm.868c1670.js";import"./index.esm.63e86599.js";import"./overlayeventbus.esm.ba098b1e.js";import"./virtualscroller.esm.07b2bdf7.js";import"./inputnumber.esm.b1faf076.js";import"./index.esm.b6904c3e.js";import"./index.esm.4e22529a.js";import"./inputtext.esm.2a7b825b.js";import"./index.esm.8806deed.js";function _t(...r){var k;const a=typeof r[r.length-1]=="string"?r.pop():void 0;typeof r[0]!="string"&&r.unshift(a);let[s,e,t={}]=r;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const n=rt(),o=()=>null,i=()=>n.isHydrating?n.payload.data[s]:n.static.data[s];t.server=t.server??!0,t.default=t.default??o,t.getCachedData=t.getCachedData??i,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0,t.deep=t.deep??Z.deep;const c=()=>![null,void 0].includes(t.getCachedData(s));if(!n._asyncData[s]||!t.immediate){(k=n.payload._errors)[s]??(k[s]=null);const m=t.deep?A:tt;n._asyncData[s]={data:m(t.getCachedData(s)??t.default()),pending:A(!c()),error:et(n.payload._errors,s),status:A("idle")}}const l={...n._asyncData[s]};l.refresh=l.execute=(m={})=>{if(n._asyncDataPromises[s]){if(m.dedupe===!1)return n._asyncDataPromises[s];n._asyncDataPromises[s].cancelled=!0}if((m._initial||n.isHydrating&&m._initial!==!1)&&c())return Promise.resolve(t.getCachedData(s));l.pending.value=!0,l.status.value="pending";const g=new Promise((f,b)=>{try{f(e(n))}catch(C){b(C)}}).then(f=>{if(g.cancelled)return n._asyncDataPromises[s];let b=f;t.transform&&(b=t.transform(f)),t.pick&&(b=wt(b,t.pick)),n.payload.data[s]=b,l.data.value=b,l.error.value=null,l.status.value="success"}).catch(f=>{if(g.cancelled)return n._asyncDataPromises[s];l.error.value=nt(f),l.data.value=d(t.default()),l.status.value="error"}).finally(()=>{g.cancelled||(l.pending.value=!1,delete n._asyncDataPromises[s])});return n._asyncDataPromises[s]=g,n._asyncDataPromises[s]};const p=()=>l.refresh({_initial:!0}),w=t.server!==!1&&n.payload.serverRendered;{const m=at();if(m&&!m._nuxtOnBeforeMountCbs){m._nuxtOnBeforeMountCbs=[];const f=m._nuxtOnBeforeMountCbs;m&&(st(()=>{f.forEach(b=>{b()}),f.splice(0,f.length)}),E(()=>f.splice(0,f.length)))}w&&n.isHydrating&&(l.error.value||c())?(l.pending.value=!1,l.status.value=l.error.value?"error":"success"):m&&(n.payload.serverRendered&&n.isHydrating||t.lazy)&&t.immediate?m._nuxtOnBeforeMountCbs.push(p):t.immediate&&p(),t.watch&&q(t.watch,()=>l.refresh());const g=n.hook("app:data:refresh",async f=>{(!f||f.includes(s))&&await l.refresh()});m&&E(g)}const u=Promise.resolve(n._asyncDataPromises[s]).then(()=>l);return Object.assign(u,l),u}function wt(r,a){const s={};for(const e of a)s[e]=r[e];return s}const K=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function xt(r,a){a?a={...K,...a}:a=K;const s=G(a);return s.dispatch(r),s.toString()}const bt=Object.freeze(["prototype","__proto__","constructor"]);function G(r){let a="",s=new Map;const e=t=>{a+=t};return{toString(){return a},getContext(){return s},dispatch(t){return r.replacer&&(t=r.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const n=Object.prototype.toString.call(t);let o="";const i=n.length;i<10?o="unknown:["+n+"]":o=n.slice(8,i-1),o=o.toLowerCase();let c=null;if((c=s.get(t))===void 0)s.set(t,s.size);else return this.dispatch("[CIRCULAR:"+c+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](t):r.ignoreUnknown||this.unkown(t,o);else{let l=Object.keys(t);r.unorderedObjects&&(l=l.sort());let p=[];r.respectType!==!1&&!W(t)&&(p=bt),r.excludeKeys&&(l=l.filter(u=>!r.excludeKeys(u)),p=p.filter(u=>!r.excludeKeys(u))),e("object:"+(l.length+p.length)+":");const w=u=>{this.dispatch(u),e(":"),r.excludeValues||this.dispatch(t[u]),e(",")};for(const u of l)w(u);for(const u of p)w(u)}},array(t,n){if(n=n===void 0?r.unorderedArrays!==!1:n,e("array:"+t.length+":"),!n||t.length<=1){for(const c of t)this.dispatch(c);return}const o=new Map,i=t.map(c=>{const l=G(r);l.dispatch(c);for(const[p,w]of l.getContext())o.set(p,w);return l.toString()});return s=o,i.sort(),this.array(i,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,n){if(e(n),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),W(t)?this.dispatch("[native]"):this.dispatch(t.toString()),r.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),r.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const n=[...t];return this.array(n,r.unorderedSets!==!1)},set(t){e("set:");const n=[...t];return this.array(n,r.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(r.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const J="[native code] }",kt=J.length;function W(r){return typeof r!="function"?!1:Function.prototype.toString.call(r).slice(-kt)===J}class z{constructor(a,s){a=this.words=a||[],this.sigBytes=s===void 0?a.length*4:s}toString(a){return(a||vt).stringify(this)}concat(a){if(this.clamp(),this.sigBytes%4)for(let s=0;s<a.sigBytes;s++){const e=a.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=e<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<a.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=a.words[s>>>2];return this.sigBytes+=a.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new z([...this.words])}}const vt={stringify(r){const a=[];for(let s=0;s<r.sigBytes;s++){const e=r.words[s>>>2]>>>24-s%4*8&255;a.push((e>>>4).toString(16),(e&15).toString(16))}return a.join("")}},Bt={stringify(r){const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let e=0;e<r.sigBytes;e+=3){const t=r.words[e>>>2]>>>24-e%4*8&255,n=r.words[e+1>>>2]>>>24-(e+1)%4*8&255,o=r.words[e+2>>>2]>>>24-(e+2)%4*8&255,i=t<<16|n<<8|o;for(let c=0;c<4&&e*8+c*6<r.sigBytes*8;c++)s.push(a.charAt(i>>>6*(3-c)&63))}return s.join("")}},St={parse(r){const a=r.length,s=[];for(let e=0;e<a;e++)s[e>>>2]|=(r.charCodeAt(e)&255)<<24-e%4*8;return new z(s,a)}},Dt={parse(r){return St.parse(unescape(encodeURIComponent(r)))}};class Ct{constructor(){this._data=new z,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new z,this._nDataBytes=0}_append(a){typeof a=="string"&&(a=Dt.parse(a)),this._data.concat(a),this._nDataBytes+=a.sigBytes}_doProcessBlock(a,s){}_process(a){let s,e=this._data.sigBytes/(this.blockSize*4);a?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,n=Math.min(t*4,this._data.sigBytes);if(t){for(let o=0;o<t;o+=this.blockSize)this._doProcessBlock(this._data.words,o);s=this._data.words.splice(0,t),this._data.sigBytes-=n}return new z(s,n)}}class $t extends Ct{update(a){return this._append(a),this._process(),this}finalize(a){a&&this._append(a)}}const V=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],Ot=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],P=[];class zt extends $t{constructor(){super(...arguments),this._hash=new z([...V])}reset(){super.reset(),this._hash=new z([...V])}_doProcessBlock(a,s){const e=this._hash.words;let t=e[0],n=e[1],o=e[2],i=e[3],c=e[4],l=e[5],p=e[6],w=e[7];for(let u=0;u<64;u++){if(u<16)P[u]=a[s+u]|0;else{const $=P[u-15],B=($<<25|$>>>7)^($<<14|$>>>18)^$>>>3,O=P[u-2],v=(O<<15|O>>>17)^(O<<13|O>>>19)^O>>>10;P[u]=B+P[u-7]+v+P[u-16]}const k=c&l^~c&p,m=t&n^t&o^n&o,g=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),f=(c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25),b=w+f+k+Ot[u]+P[u],C=g+m;w=p,p=l,l=c,c=i+b|0,i=o,o=n,n=t,t=b+C|0}e[0]=e[0]+t|0,e[1]=e[1]+n|0,e[2]=e[2]+o|0,e[3]=e[3]+i|0,e[4]=e[4]+c|0,e[5]=e[5]+l|0,e[6]=e[6]+p|0,e[7]=e[7]+w|0}finalize(a){super.finalize(a);const s=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(e+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function Pt(r){return new zt().finalize(r).toString(Bt)}function jt(r,a={}){const s=typeof r=="string"?r:xt(r,a);return Pt(s).slice(0,10)}function At(r,a,s){const[e={},t]=typeof a=="string"?[{},a]:[a,s],n=T(()=>{let v=r;return typeof v=="function"&&(v=v()),j(v)}),o=e.key||jt([t,typeof n.value=="string"?n.value:"",...Rt(e)]);if(!o||typeof o!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+o);if(!r)throw new Error("[nuxt] [useFetch] request is missing.");const i=o===t?"$f"+o:o;if(!e.baseURL&&typeof n.value=="string"&&n.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:c,lazy:l,default:p,transform:w,pick:u,watch:k,immediate:m,getCachedData:g,deep:f,...b}=e,C=ot({...it,...b,cache:typeof e.cache=="boolean"?void 0:e.cache}),$={server:c,lazy:l,default:p,transform:w,pick:u,immediate:m,getCachedData:g,deep:f,watch:k===!1?[]:[C,n,...k||[]]};let B;return _t(i,()=>{var H;(H=B==null?void 0:B.abort)==null||H.call(B),B=typeof AbortController<"u"?new AbortController:{};const v=j(e.timeout);return v&&setTimeout(()=>B.abort(),v),(e.$fetch||globalThis.$fetch)(n.value,{signal:B.signal,...C})},$)}function Rt(r){var s;const a=[((s=j(r.method))==null?void 0:s.toUpperCase())||"GET",j(r.baseURL)];for(const e of[r.params||r.query]){const t=j(e);if(!t)continue;const n={},o=Array.isArray(t)?t:Object.entries(t);for(const[i,c]of o)n[j(i)]=j(c);a.push(n)}return a}const M=16,Ut={fire:"--orange-500",grass:"--teal-500",poison:"--purple-400",psychic:"--pink-400",flying:"--cyan-500",ice:"--cyan-100",water:"--blue-400",ground:"--yellow-800",rock:"--orange-900"},Nt={__name:"CardWithBadges",props:{title:String,array:Array,loaded:Boolean},setup(r){const a=s=>(console.log(s),Ut[s]);return(s,e)=>{const t=Q,n=L,o=F;return r.loaded?(h(),R(n,{key:0,class:"w-full",pt:{title:"whitespace-normal break-words ",content:"p-0 flex gap-2 w-full flex-wrap"}},{title:S(()=>[ct(D(r.title),1)]),content:S(()=>[(h(!0),x(U,null,N(r.array,i=>(h(),R(t,{style:lt({background:`var(${a(i)})`}),label:i,key:i+r.title},null,8,["style","label"]))),128))]),_:1})):(h(),R(n,{key:1,class:"w-full",pt:{title:"whitespace-normal break-words ",content:"p-0 flex gap-2 w-full flex-wrap justify-center"}},{title:S(()=>[_(o,{height:"2.5rem"})]),content:S(()=>[_(o,{width:"30%",height:"2rem"}),_(o,{width:"30%",height:"2rem"}),_(o,{width:"30%",height:"2rem"})]),_:1}))}}},Mt=Nt,Ft=y("b",null,"Height",-1),Lt=y("b",null,"Weight",-1),Tt=y("b",null,"Gender",-1),Ht=y("b",null,"Category",-1),Et=y("b",null,"Abilities",-1),Kt={__name:"Chars",props:{characteristics:Object,loaded:Boolean},setup(r){const a=A(!1);return(s,e)=>{const t=yt,n=L,o=F;return h(),x("div",null,[_(t,{visible:d(a),"onUpdate:visible":e[0]||(e[0]=i=>I(a)?a.value=i:null),modal:"",header:r.characteristics.abilities.name,style:{width:"50rem"},breakpoints:{"1199px":"75vw","575px":"90vw"}},{default:S(()=>[y("p",null,D(r.characteristics.abilities.description),1)]),_:1},8,["visible","header"]),r.loaded?(h(),R(n,{key:0,class:"w-fit",pt:{content:"p-0 flex flex-row gap-4 flex-wrap"}},{content:S(()=>[y("div",null,[Ft,y("p",null,D(r.characteristics.height)+" m",1)]),y("div",null,[Lt,y("p",null,D(r.characteristics.weight)+" kg",1)]),y("div",null,[Tt,y("p",null,[(h(!0),x(U,null,N(r.characteristics.gender,i=>(h(),x("span",{key:i},D(i),1))),128))])]),y("div",null,[Ht,y("p",null,D(r.characteristics.category),1)]),y("div",{onClick:e[1]||(e[1]=i=>a.value=!0),class:"cursor-pointer text-blue-500 dark:text-blue-300"},[Et,y("p",null,D(r.characteristics.abilities.name),1)])]),_:1})):(h(),R(n,{key:1,class:"w-fit",pt:{content:"p-0 flex flex-row gap-4 flex-wrap"}},{content:S(()=>[_(o,{height:"1rem"})]),_:1}))])}}},Wt=Kt,Vt={class:"list-none flex flex-col gap-1"},qt={class:"h-4 text-center"},It={key:0,class:"bg-gray-50 dark:bg-gray-50 dark:opacity-5 h-4 rounded-2xl"},Gt={key:1,class:"bg-gray-50 dark:bg-gray-50 dark:opacity-5 h-4 rounded-2xl animate"},Jt={class:"text-xs text-center break-words"},Xt={key:1,class:"xs:w-10/12 h-80 xd:w-96 m-auto flex flex-row justify-evenly"},Yt={__name:"Bar",props:{stats:Object,loaded:Boolean},setup(r){const a=r,s=T(()=>{let n=[],o=[];return a.stats.map(i=>{n.push(Object.keys(i)),o.push(Object.values(i))}),[n,o]}),e=A(null);function t(){Array.from(e.value.getElementsByClassName("animate")).reverse().map((o,i)=>{setTimeout(()=>o.className="bg-BSBlueLight dark:bg-BSBlueDark h-4 rounded-2xl transition ease-in-out delay-150 ",50+i*80)})}return ut(()=>{a.loaded&&t()}),dt(()=>{t()}),(n,o)=>{const i=F;return r.loaded?(h(),x("div",{key:0,ref_key:"column",ref:e,class:"xs:w-full xd:w-96 m-auto flex flex-row justify-around"},[y("li",Vt,[(h(!0),x(U,null,N(d(M),c=>(h(),x("ul",{key:c+"num"},[y("div",qt,D(d(M)+1-c),1)]))),128))]),(h(!0),x(U,null,N(d(s)[0],(c,l)=>(h(),x("li",{class:"list-none xs:min-w-0 xs:w-[3rem] xd:w-12 flex flex-col gap-1",key:c},[(h(!0),x(U,null,N(d(M),p=>(h(),x("ul",{key:p+"column"},[d(s)[1][l][0]<=d(M)-p?(h(),x("div",It)):(h(),x("div",Gt))]))),128)),y("span",Jt,D(c[0]),1)]))),128))],512)):(h(),x("div",Xt,[_(i,{height:"100%"})]))}}},Qt=Yt,Zt={class:"xs:w-11/12 lg:w-full 2xl:w-5/6 m-auto xs:mt-36 lg:mt-24 flex xs:flex-col lg:flex-row gap-4 justify-center"},te={class:"2xl:w-2/6 3xl:w-1/6 order-2"},ee={key:1,class:"w-56 h-56"},se={class:"flex flex-col gap-4 w-full mt-4"},re={class:"xl:4/6 2xl:w-3/6 3xl:w-2/6 order-3"},ne={key:0},ae={key:0},oe={key:1},Ue={__name:"[id]",async setup(r){let a,s;const e=ht(),t=ft(),n=gt();let o;const i=A(null),c=A(0),{pending:l}=([a,s]=pt(()=>At("/data.json",{server:!1,onResponse({request:u,response:k,options:m}){if(o=k._data.pokemons,n.pokemonNames.length===0)for(let g=0;g<o.length;g++)n.pokemonNames.push(o[g].name);for(let g=0;g<o.length;g++)if(o[g].name===e.params.id){i.value=o[g],c.value=g,n.title=i.value.name,n.id=i.value.id;break}}},"$fWMEfz2eBP")),a=await a,s(),a),p=u=>{t.push({path:o[c.value+u].name})};q(c,()=>{t.push({path:o[c.value].name})});const w=T(()=>l);return(u,k)=>{const m=X,g=Y,f=F,b=L,C=Mt,$=Wt,B=Qt,O=mt;return h(),x("div",null,[y("article",Zt,[_(m,{icon:"pi pi-arrow-left",class:"w-12 h-16 top-1/2 order-1 xs:hidden lg:block",onClick:k[0]||(k[0]=v=>p(-1))}),_(m,{icon:"pi pi-arrow-right",class:"w-12 h-16 top-1/2 order-4 xs:hidden lg:block",onClick:k[1]||(k[1]=v=>p(1))}),y("div",te,[_(b,{pt:{content:"lg:w-fit m-auto p-0 xs:w-8/12"}},{content:S(()=>[d(w)?(h(),R(g,{key:0,src:d(i).imageUrl,alt:"Image",preview:""},null,8,["src"])):(h(),x("div",ee,[_(f,{width:"100%",height:"100%"})]))]),_:1}),y("div",se,[_(C,{title:"Types",array:d(i)?d(i).type:[],loaded:d(w)},null,8,["array","loaded"]),_(C,{title:"Weaknesses",array:d(i)?d(i).weaknesses:[],loaded:d(w)},null,8,["array","loaded"])]),_($,{loaded:d(w),characteristics:d(i)?d(i).characteristics:[],class:"w-full mt-4"},null,8,["loaded","characteristics"])]),y("div",re,[_(b,{class:"w-full mb-4",pt:{content:"text-lg p-0",title:"p-0"}},{title:S(()=>[d(w)?(h(),x("p",ne,"Description")):(h(),R(f,{key:1,height:"2.5rem",width:"50%"}))]),content:S(()=>[d(w)?(h(),x("p",ae,D(d(i).description),1)):(h(),x("div",oe,[_(f,{class:"mb-2"}),_(f,{class:"mb-2"}),_(f,{width:"70%"})]))]),_:1}),_(b,{class:"w-full",pt:{content:"p-0"}},{content:S(()=>[_(B,{loaded:d(w),stats:d(i)?d(i).stats:[]},null,8,["loaded","stats"])]),_:1})]),_(O,{class:"xs:block lg:hidden order-3 mb-16",first:d(c),"onUpdate:first":k[2]||(k[2]=v=>I(c)?c.value=v:null),rows:1,totalRecords:d(n).pokemonNames.length},null,8,["first","totalRecords"])])])}}};export{Ue as default};
