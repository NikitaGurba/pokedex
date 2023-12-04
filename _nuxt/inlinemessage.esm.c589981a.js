import{s as p}from"./basecomponent.esm.06395008.js";import{a2 as l,t as a,v as c,ab as o,V as m,aa as i,ac as u,x as d,B as f}from"./entry.3eac7289.js";import{s as v}from"./index.esm.cdfa85cc.js";import{s as g,a as y}from"./index.esm.58d67c2a.js";import{s as $}from"./index.esm.3eeb2abb.js";import"./baseicon.esm.1237762d.js";var h=`
@layer primevue {
    .p-inline-message {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: top;
    }
    
    .p-inline-message-icon {
        flex-shrink: 0;
    }

    .p-inline-message-icon-only .p-inline-message-text {
        visibility: hidden;
        width: 0;
    }

    .p-fluid .p-inline-message {
        display: flex;
    }
}
`,x={root:function(n){var s=n.props,t=n.instance;return["p-inline-message p-component p-inline-message-"+s.severity,{"p-inline-message-icon-only":!t.$slots.default}]},icon:function(n){var s=n.props;return["p-inline-message-icon",s.icon]},text:"p-inline-message-text"},B=l.extend({name:"inlinemessage",css:h,classes:x}),k={name:"BaseInlineMessage",extends:p,props:{severity:{type:String,default:"error"},icon:{type:String,default:void 0}},style:B,provide:function(){return{$parentInstance:this}}},S={name:"InlineMessage",extends:k,timeout:null,data:function(){return{visible:!0}},mounted:function(){var n=this;this.sticky||setTimeout(function(){n.visible=!1},this.life)},computed:{iconComponent:function(){return{info:g,success:v,warn:y,error:$}[this.severity]}}};function b(e,n,s,t,C,r){return a(),c("div",i({"aria-live":"polite",class:e.cx("root")},e.ptm("root")),[o(e.$slots,"icon",{},function(){return[(a(),m(u(e.icon?"span":r.iconComponent),i({class:e.cx("icon")},e.ptm("icon")),null,16,["class"]))]}),d("span",i({class:e.cx("text")},e.ptm("text")),[o(e.$slots,"default",{},function(){return[f(" ")]})],16)],16)}S.render=b;export{S as default};
