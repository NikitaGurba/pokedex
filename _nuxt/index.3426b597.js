import S from"./image.esm.bb3c00d8.js";import b from"./chip.esm.f2a5e778.js";import T from"./card.esm.d3b8d82e.js";import{u as $,i as C,t as p,L as v,A as y,z as m,x as a,y as L,v as g,M as k,N as P,O as B,P as N,Q as O,r as q,o as H,G as x,R as h}from"./entry.aee0189e.js";import{T as M}from"./constants.486df467.js";import R from"./button.esm.27508e5d.js";import j from"./progressbar.esm.7d40e611.js";import{g as I,u as z}from"./getPokemonsList.73aedfaa.js";import{g as A}from"./getPokemon.cec33ce2.js";import"./index.esm.2f88f910.js";import"./baseicon.esm.3edcd5d5.js";import"./basecomponent.esm.3bd56bb7.js";import"./index.esm.8d19dd1f.js";import"./portal.esm.0aaaac23.js";import"./index.esm.17e8ff2f.js";import"./badge.esm.8de6909b.js";import"./index.esm.d26bf4ab.js";const D={class:"font-bold"},E={class:"flex flex-row gap-1 flex-wrap"},V={__name:"PokemonItem",props:{data:Object},setup(l){const e=$(),o=l,t=[];o.data.types.map(i=>{t.push(i.type.name)});const u=i=>M[i],d=()=>{e.push({path:"/pokemon/"+o.data.name})};return(i,s)=>{const n=S,r=b,f=T,_=C("router-link");return p(),v(_,{class:"xs:w-10/12 xd:w-56 cursor-pointer",to:"/pokemon/"+o.data.name},{default:y(()=>[m(f,{pt:{content:"p-0"},onClick:d},{content:y(()=>[m(n,{src:l.data.sprites.other["official-artwork"].front_default},null,8,["src"]),a("div",D,L(l.data.name),1),a("div",E,[(p(),g(k,null,P(t,c=>m(r,{style:B({background:`var(${u(c)})`}),label:c,key:c},null,8,["style","label"])),64))])]),_:1})]),_:1},8,["to"])}}},Y=V,w=50,F=N("list",{state:()=>({list:[],searchList:[],interval:{offset:0,limit:w},pageList:[],currentLoad:void 0}),actions:{async loadNext(){const l=await I(this.interval);this.interval.offset+=w;for(let e=0;e<l.results.length;e++){this.currentLoad=(e+1)*2;let o=await A(l.results[e].name);this.list.push(o)}this.currentLoad=0}}}),G={class:"w-full pl-1/12 pr-1/12 m-auto xs:mt-36 xd:mt-24 flex gap-4 flex-wrap justify-center"},Q={class:"flex justify-center mt-8 items-center gap-4 mb-24"},U={class:"fixed xs:top-40 xd:top-20 w-full h-1;"},J=a("div",null,null,-1),K=a("div",null,null,-1),_t={__name:"index",setup(l){const e=O(),o=z(),t=F();e.query.search!==void 0&&(typeof e.query.search=="string"?o.selectedTypes=[e.query.search]:o.selectedTypes=e.query.search);const u=q(!0),d=()=>{if(o.selectedTypes.length!==0){t.pageList=[];for(let s=0;s<t.list.length;s++){let n=[];t.list[s].types.map(r=>{n.push(r.type.name)}),o.selectedTypes.every(r=>n.includes(r))&&t.pageList.push(t.list[s])}}else t.pageList=t.list},i=async()=>{u.value=!1,await t.loadNext(),d(),u.value=!0};return H(async()=>{t.pageList.length===0&&await i(),x(o,async()=>{console.log("fas"),d()})}),x(t,()=>{let s=document.body.scrollHeight;window.scrollY+window.innerHeight+200>s&&window.scrollTo(0,document.body.scrollHeight)}),(s,n)=>{const r=Y,f=R,_=j;return p(),g(k,null,[a("main",G,[(p(!0),g(k,null,P(h(t).pageList,(c,W)=>(p(),v(r,{key:"pokemonitem"+c.name,data:c},null,8,["data"]))),128))]),a("div",Q,[a("span",null,L(h(t).pageList.length)+" loaded",1),m(f,{onClick:n[0]||(n[0]=c=>i(s.interval)),label:"More"})]),a("div",U,[J,m(_,{class:"h-1","aria-label":"Status",value:h(t).currentLoad},{default:y(()=>[K]),_:1},8,["value"])])],64)}}};export{_t as default};
