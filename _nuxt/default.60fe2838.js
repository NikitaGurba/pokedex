import{s as V}from"./dropdown.esm.fda348fb.js";import k from"./inputswitch.esm.828b0c47.js";import w from"./toolbar.esm.25615a2a.js";import{u as y}from"./headerData.a6a37b9d.js";import{r as u,u as A,G as T,t as h,v as x,z as c,A as _,x as p,y as d,R as o,Z as i,ab as $}from"./entry.e3627a47.js";import{_ as f}from"./_plugin-vue_export-helper.c27b6911.js";import"./index.esm.85b35b13.js";import"./baseicon.esm.096e60a8.js";import"./basecomponent.esm.dfb808e1.js";import"./index.esm.79ef86f9.js";import"./index.esm.c55367f1.js";import"./overlayeventbus.esm.bf91a562.js";import"./portal.esm.5041baf4.js";import"./virtualscroller.esm.82e22099.js";const z={class:"xs:mr-2 xd:mr-4 xs:flex xs:flex-col xd:block"},B={class:"xs:mr-0 xd:mr-2"},H={class:"text-zinc-500 dark:text-zinc-300 font-bold"},N={__name:"AppHeader",props:{color:Object,changeTheme:Function,themes:Array},setup(t){const e=t,s=u(),r=y(),m=A(),a=u(!!e.themes.indexOf(e.color.value));return T(a,()=>{e.color.preference=e.themes[Number(a.value)],e.changeTheme()}),(O,n)=>{const v=V,b=k,g=w;return h(),x("div",null,[c(g,{class:"fixed w-full z-10 top-0 xs:h-20 xd:h-20 justify-center"},{start:_(()=>[]),center:_(()=>[p("div",z,[p("span",B,d(o(r).title),1),p("span",H,"#"+d(o(r).id),1)]),c(v,{modelValue:o(s),"onUpdate:modelValue":n[0]||(n[0]=l=>i(s)?s.value=l:null),options:o(r).pokemonNames,filter:"",placeholder:"Search",class:"xs:w-32 xd:w-56",onChange:n[1]||(n[1]=l=>{o(m).push({path:o(s)}),s.value=""})},null,8,["modelValue","options"]),c(b,{modelValue:o(a),"onUpdate:modelValue":n[2]||(n[2]=l=>i(a)?a.value=l:null),class:"xs:ml-2 xd:ml-4"},null,8,["modelValue"])]),_:1})])}}},S=f(N,[["__scopeId","data-v-bee01689"]]),j={};function D(t,e){return null}const F=f(j,[["render",D]]),W={__name:"default",props:{color:Object,changeTheme:Function,themes:Array},setup(t){return(e,s)=>{const r=S,m=F;return h(),x("div",null,[c(r,{color:t.color,changeTheme:t.changeTheme,themes:t.themes},null,8,["color","changeTheme","themes"]),$(e.$slots,"default"),c(m)])}}};export{W as default};
