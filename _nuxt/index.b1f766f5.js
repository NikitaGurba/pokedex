import S from"./image.esm.1a47f5fb.js";import b from"./chip.esm.4b3b1d73.js";import T from"./card.esm.800b1e7a.js";import{u as $,i as C,t as c,L,A as y,z as p,x as r,y as v,v as g,M as k,N as P,O as B,P as N,Q as O,o as q,G as x,R as h}from"./entry.b80a887e.js";import{T as H}from"./constants.486df467.js";import M from"./button.esm.42ebc8ba.js";import R from"./progressbar.esm.5b0c756c.js";import{g as j,u as I}from"./getPokemonsList.4685a64d.js";import{g as z}from"./getPokemon.cec33ce2.js";import"./index.esm.b7089371.js";import"./baseicon.esm.fffe226a.js";import"./basecomponent.esm.0e8a44bb.js";import"./index.esm.0c4867f1.js";import"./portal.esm.d0e0134e.js";import"./index.esm.aeddeff0.js";import"./badge.esm.4055b498.js";import"./index.esm.e1eecae7.js";const A={class:"font-bold"},D={class:"flex flex-row gap-1 flex-wrap"},E={__name:"PokemonItem",props:{data:Object},setup(a){const o=$(),s=a,t=[];s.data.types.map(e=>{t.push(e.type.name)});const m=e=>H[e],u=()=>{o.push({path:"/pokemon/"+s.data.name})};return(e,l)=>{const n=S,f=b,_=T,i=C("router-link");return c(),L(i,{class:"xs:w-10/12 xd:w-56 cursor-pointer",to:"/pokemon/"+s.data.name},{default:y(()=>[p(_,{pt:{content:"p-0"},onClick:u},{content:y(()=>[p(n,{src:a.data.sprites.other["official-artwork"].front_default},null,8,["src"]),r("div",A,v(a.data.name),1),r("div",D,[(c(),g(k,null,P(t,d=>p(f,{style:B({background:`var(${m(d)})`}),label:d,key:d},null,8,["style","label"])),64))])]),_:1})]),_:1},8,["to"])}}},V=E,w=50,Y=N("list",{state:()=>({list:[],searchList:[],interval:{offset:0,limit:w},pageList:[],currentLoad:void 0}),actions:{async loadNext(){const a=await j(this.interval);this.interval.offset+=w;for(let o=0;o<a.results.length;o++){this.currentLoad=(o+1)*2;let s=await z(a.results[o].name);this.list.push(s)}this.currentLoad=0}}}),F={class:"w-full pl-1/12 pr-1/12 m-auto xs:mt-44 xd:mt-24 flex gap-4 flex-wrap justify-center"},G={class:"flex justify-center mt-8 items-center gap-4 mb-24"},Q={class:"fixed xs:top-40 xd:top-20 w-full h-1;"},U=r("div",null,null,-1),J=r("div",null,null,-1),dt={__name:"index",setup(a){const o=O(),s=I(),t=Y();o.query.search!==void 0&&(typeof o.query.search=="string"?s.selectedTypes=[o.query.search]:s.selectedTypes=o.query.search);const m=()=>{if(s.selectedTypes.length!==0){t.pageList=[];for(let e=0;e<t.list.length;e++){let l=[];t.list[e].types.map(n=>{l.push(n.type.name)}),s.selectedTypes.every(n=>l.includes(n))&&t.pageList.push(t.list[e])}}else t.pageList=t.list},u=async()=>{await t.loadNext(),m()};return q(async()=>{t.pageList.length===0&&await u(),x(s,async()=>{m()})}),x(t,()=>{let e=document.body.scrollHeight;window.scrollY+window.innerHeight+200>e&&window.scrollTo(0,document.body.scrollHeight)}),(e,l)=>{const n=V,f=M,_=R;return c(),g(k,null,[r("main",F,[(c(!0),g(k,null,P(h(t).pageList,(i,d)=>(c(),L(n,{key:"pokemonitem"+i.name,data:i},null,8,["data"]))),128))]),r("div",G,[r("span",null,v(h(t).pageList.length)+" loaded",1),p(f,{onClick:l[0]||(l[0]=i=>u(e.interval)),label:"More"})]),r("div",Q,[U,p(_,{class:"h-1","aria-label":"Status",value:h(t).currentLoad},{default:y(()=>[J]),_:1},8,["value"])])],64)}}};export{dt as default};