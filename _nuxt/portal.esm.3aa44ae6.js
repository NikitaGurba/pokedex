import{a6 as r,ab as t,t as d,V as s,ar as l,_ as i}from"./entry.3eac7289.js";var u={name:"Portal",props:{appendTo:{type:String,default:"body"},disabled:{type:Boolean,default:!1}},data:function(){return{mounted:!1}},mounted:function(){this.mounted=r.isClient()},computed:{inline:function(){return this.disabled||this.appendTo==="self"}}};function p(e,f,n,m,a,o){return o.inline?t(e.$slots,"default",{key:0}):a.mounted?(d(),s(l,{key:1,to:n.appendTo},[t(e.$slots,"default")],8,["to"])):i("",!0)}u.render=p;export{u as s};