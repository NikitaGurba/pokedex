import{s as p}from"./basecomponent.esm.71909cb5.js";import{V as l,t as o,v as c,a2 as r,L as m,a1 as i,a3 as u,x as d,B as f}from"./entry.187228e3.js";import{s as v}from"./index.esm.d1dfc4cd.js";import{s as g,a as y}from"./index.esm.51ea432a.js";import{s as $}from"./index.esm.9d34ac29.js";import"./baseicon.esm.0750af78.js";var h=`
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