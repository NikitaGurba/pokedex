import H from"./inputtext.esm.463a84f4.js";import M from"./listbox.esm.c6a41bd4.js";import O from"./multiselect.esm.6548a832.js";import E from"./inputswitch.esm.2225aac5.js";import K from"./toolbar.esm.3f7e041f.js";import{P as G,u as Q,Q as q,r as p,o as J,G as b,c as W,V as X,i as Y,t as _,v as S,z as v,A as V,R as e,L as A,T as g,x as h,y as I,a5 as Z,S as T,C as ee,D as te,a3 as oe}from"./entry.b26ff408.js";import{u as se}from"./pokemon.f6ca9a1b.js";import{g as L,u as le}from"./getPokemonsList.92fa0d36.js";import{_ as $}from"./_plugin-vue_export-helper.c27b6911.js";import"./basecomponent.esm.c6d8dbcb.js";import"./index.esm.c161efce.js";import"./baseicon.esm.c2cc336e.js";import"./virtualscroller.esm.95023db1.js";import"./index.esm.e44ad8fb.js";import"./index.esm.eb8bc2d8.js";import"./index.esm.2a3ca308.js";import"./index.esm.67a2e20e.js";import"./index.esm.88ff09d3.js";import"./overlayeventbus.esm.0c6d49ab.js";import"./portal.esm.f0feb08b.js";import"./getPokemon.cec33ce2.js";const ne=G("listNames",{state:()=>({listNames:[]}),actions:{async getListNames(){if(this.listNames.length===0){const y={offset:0,limit:(await L()).count};(await L(y)).results.map(u=>{this.listNames.push(u.name)})}}}});const ae=t=>(ee("data-v-852b38b0"),t=t(),te(),t),re=ae(()=>h("i",{class:"pi pi-arrow-left"},null,-1)),ce={key:1,class:"xs:mr-2 xd:mr-4 xs:flex xs:flex-col xd:block"},ie={class:"xs:mr-0 xd:mr-2 text-xl font-bold"},pe={class:"text-zinc-500 text-xl dark:text-zinc-300 font-bold"},ue={class:"p-input-icon-left"},me={key:2},de={__name:"AppHeader",props:{color:Object,themes:Array},setup(t){const s=t,y=Q(),n=q(),u=se(),a=le(),N=ne(),r=p();a.getTypes();const l=p(),m=p();J(()=>{m.value=!!s.themes.indexOf(s.color.value)}),b(m,()=>{s.color.preference=s.themes[Number(m.value)]});const d=p(!1),x=p(!1),B=W(()=>d.value?"pi-spin pi-spinner":x.value?"pi-check":"pi-search"),C=p(null),c=p([]),P=async()=>{l.value.length<3&&l.value.length>0?(d.value=!0,c.value=[]):l.value!==""?(c.value=N.listNames.filter(f=>f.includes(l.value)),c.value.length!==0?(d.value=!1,x.value=!0):(d.value=!1,x.value=!1)):(d.value=!1,x.value=!1,c.value=[])};n.name==="index"&&b(a,()=>{if(a.selectedTypes.length!==0){let f="search="+String(a.selectedTypes).replaceAll(",","&search=");window.history.replaceState({},"",`?${f}`)}else window.history.replaceState({},"","/pokedex/")}),X(async()=>{await N.getListNames()}),b(r,()=>{r.value!==""&&(y.push({path:"/pokemon/"+r.value}),d.value=!1,x.value=!1,c.value=[],r.value="",l.value="")});function z(f,o=500){let k;return(...w)=>{clearTimeout(k),k=setTimeout(()=>{f.apply(this,w)},o)}}const F=z(()=>P());return(f,o)=>{const k=Y("router-link"),w=H,R=M,U=O,j=E,D=K;return _(),S("div",null,[v(D,{class:"fixed w-full z-10 top-0 xs:h-20 xd:h-20 justify-center",pt:{center:"flex gap-4"}},{start:V(()=>[]),center:V(()=>[e(n).name==="pokemon-id"?(_(),A(k,{key:0,class:"flex items-center",to:"/"},{default:V(()=>[re]),_:1})):g("",!0),e(n).name==="pokemon-id"?(_(),S("div",ce,[h("span",ie,I(e(u).pokemon.name),1),h("span",pe,"#"+I(e(u).pokemon.id),1)])):g("",!0),h("form",null,[h("div",ue,[h("i",{class:Z("pi "+e(B))},null,2),v(w,{onKeyup:e(F),class:"xs:w-32 xd:w-56",modelValue:e(l),"onUpdate:modelValue":o[0]||(o[0]=i=>T(l)?l.value=i:null),placeholder:"Search",spellcheck:"false"},null,8,["onKeyup","modelValue"])]),e(c).length!==0?(_(),A(R,{key:0,ref_key:"list",ref:C,modelValue:e(r),"onUpdate:modelValue":o[1]||(o[1]=i=>T(r)?r.value=i:null),options:e(c),class:"w-fit md:w-14rem absolute",listStyle:"max-height:250px"},null,8,["modelValue","options"])):g("",!0)]),e(n).name==="index"?(_(),S("div",me,[v(U,{modelValue:e(a).selectedTypes,"onUpdate:modelValue":o[2]||(o[2]=i=>e(a).selectedTypes=i),options:e(a).types,placeholder:"Select types",display:"chip",filter:"",maxSelectedLabels:3,selectionLimit:3,class:"w-full md:w-20rem"},null,8,["modelValue","options"])])):g("",!0),v(j,{modelValue:e(m),"onUpdate:modelValue":o[3]||(o[3]=i=>T(m)?m.value=i:null)},null,8,["modelValue"])]),_:1})])}}},fe=$(de,[["__scopeId","data-v-852b38b0"]]),_e={};function he(t,s){return null}const ve=$(_e,[["render",he]]),je={__name:"default",props:{color:Object,changeTheme:Function,themes:Array},setup(t){return(s,y)=>{const n=fe,u=ve;return _(),S("div",null,[v(n,{color:t.color,changeTheme:t.changeTheme,themes:t.themes},null,8,["color","changeTheme","themes"]),oe(s.$slots,"default"),v(u)])}}};export{je as default};
