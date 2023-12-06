import P from"./image.esm.385ed758.js";import S from"./chip.esm.0d0c51a6.js";import $ from"./card.esm.8536ebbd.js";import{u as b,i as T,t as p,L,A as y,z as m,x as o,y as x,v as g,M as k,N as w,O as C,P as B,Q as N,r as O,o as q,G as M,R as h}from"./entry.b26ff408.js";import{T as R}from"./constants.486df467.js";import j from"./button.esm.cedccc95.js";import I from"./progressbar.esm.34cc89b7.js";import{g as z,u as A}from"./getPokemonsList.92fa0d36.js";import{g as D}from"./getPokemon.cec33ce2.js";import"./index.esm.3fb486f1.js";import"./baseicon.esm.c2cc336e.js";import"./basecomponent.esm.c6d8dbcb.js";import"./index.esm.67a2e20e.js";import"./portal.esm.f0feb08b.js";import"./index.esm.88ff09d3.js";import"./badge.esm.bd2e0eed.js";import"./index.esm.e44ad8fb.js";const E={class:"font-bold"},V={class:"flex flex-row gap-1"},F={__name:"PokemonItem",props:{data:Object},setup(n){const e=b(),s=n,t=[];s.data.types.map(a=>{t.push(a.type.name)});const u=a=>R[a],d=()=>{e.push({path:"/pokemon/"+s.data.name})};return(a,r)=>{const l=P,i=S,f=$,_=T("router-link");return p(),L(_,{class:"w-56 cursor-pointer",to:"/pokemon/"+s.data.name},{default:y(()=>[m(f,{pt:{content:"p-0"},onClick:d},{content:y(()=>[m(l,{src:n.data.sprites.other["official-artwork"].front_default},null,8,["src"]),o("div",E,x(n.data.name),1),o("div",V,[(p(),g(k,null,w(t,c=>m(i,{style:C({background:`var(${u(c)})`}),label:c,key:c},null,8,["style","label"])),64))])]),_:1})]),_:1},8,["to"])}}},G=F,v=50,Q=B("list",{state:()=>({list:[],searchList:[],interval:{offset:0,limit:v},pageList:[],currentLoad:void 0}),actions:{async loadNext(){const n=await z(this.interval);this.interval.offset+=v;for(let e=0;e<n.results.length;e++){this.currentLoad=(e+1)*2;let s=await D(n.results[e].name);this.list.push(s)}this.currentLoad=0}}}),U={class:"w-fit pl-1/12 pr-1/12 m-auto mt-24 flex gap-4 flex-wrap justify-center"},Y={class:"flex justify-center mt-8 items-center gap-4 mb-24"},H={class:"fixed top-20 w-full h-1;"},J=o("div",null,null,-1),K=o("div",null,null,-1),_t={__name:"index",setup(n){const e=N(),s=A(),t=Q();e.query.search!==void 0&&(typeof e.query.search=="string"?s.selectedTypes=[e.query.search]:s.selectedTypes=e.query.search);const u=O(!0),d=()=>{if(s.selectedTypes.length!==0){t.pageList=[];for(let r=0;r<t.list.length;r++){let l=[];t.list[r].types.map(i=>{l.push(i.type.name)}),s.selectedTypes.every(i=>l.includes(i))&&t.pageList.push(t.list[r])}}else t.pageList=t.list},a=async()=>{u.value=!1,await t.loadNext(),d(),u.value=!0};return q(async()=>{t.pageList.length===0&&await a(),M(s,async()=>{console.log("fas"),d()})}),(r,l)=>{const i=G,f=j,_=I;return p(),g(k,null,[o("main",U,[(p(!0),g(k,null,w(h(t).pageList,(c,W)=>(p(),L(i,{key:"pokemonitem"+c.name,data:c},null,8,["data"]))),128))]),o("div",Y,[o("span",null,x(h(t).pageList.length)+" loaded",1),m(f,{onClick:l[0]||(l[0]=c=>a(r.interval)),label:"More"})]),o("div",H,[J,m(_,{class:"h-1","aria-label":"Status",value:h(t).currentLoad},{default:y(()=>[K]),_:1},8,["value"])])],64)}}};export{_t as default};
