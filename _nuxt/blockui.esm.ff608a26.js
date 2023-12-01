import{a1 as i,a5 as s,a4 as o,t as a,v as l,ab as c,a9 as r}from"./entry.265777e0.js";import{s as d}from"./basecomponent.esm.c4894367.js";var m=`
@layer primevue {
    .p-blockui-container {
        position: relative;
    }

    .p-blockui.p-component-overlay {
        position: absolute;
    }

    .p-blockui-document.p-component-overlay {
        position: fixed;
    }
}
`,p={root:"p-blockui-container"},u=i.extend({name:"blockui",css:m,classes:p}),k={name:"BaseBlockUI",extends:d,props:{blocked:{type:Boolean,default:!1},fullScreen:{type:Boolean,default:!1},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0}},style:u,provide:function(){return{$parentInstance:this}}},h={name:"BlockUI",extends:k,emits:["block","unblock"],mask:null,data:function(){return{isBlocked:!1}},watch:{blocked:function(t){t===!0?this.block():this.unblock()}},mounted:function(){this.blocked&&this.block()},methods:{block:function(){var t="p-blockui p-component-overlay p-component-overlay-enter";this.fullScreen?(t+=" p-blockui-document",this.mask=s.createElement("div",{"data-pc-section":"mask",style:{position:"fixed",top:"0",left:"0",width:"100%",height:"100%"},class:!this.isUnstyled&&t,"p-bind":this.ptm("mask")}),document.body.appendChild(this.mask),s.blockBodyScroll(),document.activeElement.blur()):(this.mask=s.createElement("div",{"data-pc-section":"mask",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},class:!this.isUnstyled&&t,"p-bind":this.ptm("mask")}),this.$refs.container.appendChild(this.mask)),this.autoZIndex&&o.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal),this.isBlocked=!0,this.$emit("block")},unblock:function(){var t=this;!this.isUnstyled&&s.addClass(this.mask,"p-component-overlay-leave"),s.hasCSSAnimation(this.mask)>0?this.mask.addEventListener("animationend",function(){t.removeMask()}):this.removeMask()},removeMask:function(){o.clear(this.mask),this.fullScreen?(document.body.removeChild(this.mask),s.unblockBodyScroll()):this.$refs.container.removeChild(this.mask),this.isBlocked=!1,this.$emit("unblock")}}},f=["aria-busy"];function b(e,t,v,y,n,B){return a(),l("div",r({ref:"container",class:e.cx("root"),"aria-busy":n.isBlocked},e.ptm("root")),[c(e.$slots,"default")],16,f)}h.render=b;export{h as default};
