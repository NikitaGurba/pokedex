import{P as c}from"./entry.cf2a7ce9.js";import{P as o,g as m}from"./getPokemon.cec33ce2.js";const g=new o({cache:!0}),h=async n=>{const e=await g.getPokemonSpeciesByName(n);let t=[];return e.flavor_text_entries.map((a,s)=>{a.language.name==="en"&&t.push(s)}),e.flavor_text_entries[t[t.length-2]].flavor_text.replaceAll(`
`," ")},u=new o({cache:!0}),y=async n=>{const e=await u.getAbilityByName(n);let t=[];return e.flavor_text_entries.map((a,s)=>{a.language.name==="en"&&t.push(s)}),e.flavor_text_entries[t[t.length-2]].flavor_text},d=new o({cache:!0}),f=async n=>{const e=await d.getTypeByName(n),t=[];return e.damage_relations.double_damage_from.map(a=>{t.push(a.name)}),t},_=c("pokemon",{state:()=>({pokemon:{name:"",id:""}}),actions:{async getPokemonData(n){const e=await m(n),t=e.abilities[0].ability.url.split("ability")[1].replaceAll("/","");let a=[];e.types.map(i=>{a.push(i.type.name)});let s=[];a.map(async i=>{let l=await f(i);s.push(...l),s=s.filter(p=>a.indexOf(p)<0),s=[...new Set(s)]});let r=[];e.stats.map(i=>{r.push({[i.stat.name.replace("-"," ")]:Math.floor(i.base_stat/10-1)})}),this.pokemon={name:e.name,id:e.id,description:await h(e.id),imageUrl:e.sprites.other["official-artwork"].front_default,characteristics:{height:e.height/10,weight:e.weight/10,gender:["m","f"],abilities:{name:e.abilities[0].ability.name.replace("-"," "),description:await y(t)}},types:a,weaknesses:s,stats:r}}}});export{_ as u};
