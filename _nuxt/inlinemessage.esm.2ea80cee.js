import{s as p}from"./basecomponent.esm.0e8a44bb.js";import{W as l,t as o,v as c,a3 as r,L as m,a2 as i,a4 as u,x as d,B as f}from"./entry.b80a887e.js";import{s as v}from"./index.esm.1c7f169a.js";import{s as g,a as y}from"./index.esm.9cbdb18c.js";import{s as $}from"./index.esm.aeddeff0.js";import"./baseicon.esm.fffe226a.js";var h=`
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
`,x={root:function(n){var s=n.props,t=n.instance;return["p-inline-message p-component p-inline-message-"+s.severity,{"p-inline-message-icon-only":!t.$slots.default}]},icon:function(n){var s=n.props;return["p-inline-message-icon",s.icon]},text:"p-inline-message-text"},B=l.extend({name:"inlinemessage",css:h,classes:x}),k={name:"BaseInlineMessage",extends:p,props:{severity:{type:String,default:"error"},icon:{type:String,default:void 0}},style:B,provide:function(){return{$parentInstance:this}}},S={name:"InlineMessage",extends:k,timeout:null,data:function(){return{visible:!0}},mounted:function(){var n=this;this.sticky||setTimeout(function(){n.visible=!1},this.life)},computed:{iconComponent:function(){return{info:g,success:v,warn:y,error:$}[this.severity]}}};function C(e,n,s,t,I,a){return o(),c("div",i({"aria-live":"polite",class:e.cx("root")},e.ptm("root")),[r(e.$slots,"icon",{},function(){return[(o(),m(u(e.icon?"span":a.iconComponent),i({class:e.cx("icon")},e.ptm("icon")),null,16,["class"]))]}),d("span",i({class:e.cx("text")},e.ptm("text")),[r(e.$slots,"default",{},function(){return[f(" ")]})],16)],16)}S.render=C;export{S as default};