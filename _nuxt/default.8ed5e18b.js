import H from"./inputtext.esm.13da0a1d.js";import M from"./listbox.esm.cd774443.js";import O from"./multiselect.esm.14781a04.js";import E from"./inputswitch.esm.541e500c.js";import K from"./toolbar.esm.c07b7908.js";import{P as G,u as Q,Q as q,r as p,o as J,G as V,c as W,V as X,i as Y,t as h,v as g,z as x,A as N,R as e,L as A,T as w,x as u,y as I,a5 as Z,S as T,C as ee,D as te,a3 as oe}from"./entry.7afb403f.js";import{u as se}from"./pokemon.7efbe3c3.js";import{g as L,u as le}from"./getPokemonsList.38ebffd7.js";import{_ as $}from"./_plugin-vue_export-helper.c27b6911.js";import"./basecomponent.esm.c3cbaa0c.js";import"./index.esm.1fa9a9ce.js";import"./baseicon.esm.e3e5b612.js";import"./virtualscroller.esm.8eb13ab4.js";import"./index.esm.cf294e55.js";import"./index.esm.59eb180a.js";import"./index.esm.b217fb06.js";import"./index.esm.e5b92ded.js";import"./index.esm.033cc52d.js";import"./overlayeventbus.esm.932f5de5.js";import"./portal.esm.a9856c93.js";import"./getPokemon.cec33ce2.js";const ne=G("listNames",{state:()=>({listNames:[]}),actions:{async getListNames(){if(this.listNames.length===0){const y={offset:0,limit:(await L()).count};(await L(y)).results.map(m=>{this.listNames.push(m.name)})}}}});const ae=t=>(ee("data-v-6ba2e3c6"),t=t(),te(),t),ce=ae(()=>u("i",{class:"pi pi-arrow-left"},null,-1)),re={key:1,class:"xs:mr-2 xd:mr-4 xs:flex xs:flex-col xd:block"},ie={class:"xs:mr-0 xd:mr-2 text-xl font-bold"},pe={class:"text-zinc-500 text-xl dark:text-zinc-300 font-bold"},ue={class:"xs:w-11/12 xd:w-40"},me={class:"p-input-icon-left"},de={key:2,class:"xs:w-11/12 xd:w-fit"},fe={class:"w-16 xs:self-start xs:ml-4 xd:ml-0 xd:self-auto flex align-middle"},_e={__name:"AppHeader",props:{color:Object,themes:Array},setup(t){const s=t,y=Q(),n=q(),m=se(),a=le(),b=ne(),c=p();a.getTypes();const l=p(),d=p();J(()=>{d.value=!!s.themes.indexOf(s.color.value)}),V(d,()=>{s.color.preference=s.themes[Number(d.value)]});const f=p(!1),v=p(!1),z=W(()=>f.value?"pi-spin pi-spinner":v.value?"pi-check":"pi-search"),B=p(null),r=p([]),C=async()=>{l.value.length<3&&l.value.length>0?(f.value=!0,r.value=[]):l.value!==""?(r.value=b.listNames.filter(_=>_.includes(l.value)),r.value.length!==0?(f.value=!1,v.value=!0):(f.value=!1,v.value=!1)):(f.value=!1,v.value=!1,r.value=[])};n.name==="index"&&V(a,()=>{if(a.selectedTypes.length!==0){let _="search="+String(a.selectedTypes).replaceAll(",","&search=");window.history.replaceState({},"",`?${_}`)}else window.history.replaceState({},"","/pokedex/")}),X(async()=>{await b.getListNames()}),V(c,()=>{c.value!==""&&(y.push({path:"/pokemon/"+c.value}),f.value=!1,v.value=!1,r.value=[],c.value="",l.value="")});function P(_,o=500){let k;return(...S)=>{clearTimeout(k),k=setTimeout(()=>{_.apply(this,S)},o)}}const F=P(()=>C());return(_,o)=>{const k=Y("router-link"),S=H,R=M,U=O,j=E,D=K;return h(),g("div",null,[x(D,{class:"fixed w-full z-10 top-0 xs:h-40 xd:h-20 p-0",pt:{center:"flex gap-4 w-full justify-center xs:flex-col xd:flex-row"}},{center:N(()=>[e(n).name==="pokemon-id"?(h(),A(k,{key:0,class:"flex items-center",to:"/"},{default:N(()=>[ce]),_:1})):w("",!0),e(n).name==="pokemon-id"?(h(),g("div",re,[u("span",ie,I(e(m).pokemon.name),1),u("span",pe,"#"+I(e(m).pokemon.id),1)])):w("",!0),u("form",ue,[u("div",me,[u("i",{class:Z("pi "+e(z))},null,2),x(S,{onKeyup:e(F),class:"w-full",modelValue:e(l),"onUpdate:modelValue":o[0]||(o[0]=i=>T(l)?l.value=i:null),placeholder:"Search",spellcheck:"false"},null,8,["onKeyup","modelValue"])]),e(r).length!==0?(h(),A(R,{key:0,ref_key:"list",ref:B,modelValue:e(c),"onUpdate:modelValue":o[1]||(o[1]=i=>T(c)?c.value=i:null),options:e(r),class:"w-fit md:w-14rem absolute z-10",listStyle:"max-height:250px"},null,8,["modelValue","options"])):w("",!0)]),e(n).name==="index"?(h(),g("div",de,[x(U,{modelValue:e(a).selectedTypes,"onUpdate:modelValue":o[2]||(o[2]=i=>e(a).selectedTypes=i),options:e(a).types,placeholder:"Select types",display:"chip",filter:"",maxSelectedLabels:3,selectionLimit:3,class:"w-full md:w-20rem"},null,8,["modelValue","options"])])):w("",!0),u("div",fe,[x(j,{modelValue:e(d),"onUpdate:modelValue":o[3]||(o[3]=i=>T(d)?d.value=i:null)},null,8,["modelValue"])])]),_:1})])}}},he=$(_e,[["__scopeId","data-v-6ba2e3c6"]]),xe={};function ve(t,s){return null}const ye=$(xe,[["render",ve]]),He={__name:"default",props:{color:Object,changeTheme:Function,themes:Array},setup(t){return(s,y)=>{const n=he,m=ye;return h(),g("div",null,[x(n,{color:t.color,changeTheme:t.changeTheme,themes:t.themes},null,8,["color","changeTheme","themes"]),oe(s.$slots,"default"),x(m)])}}};export{He as default};