import{s as t}from"./basecomponent.esm.e8c43e8b.js";import{a1 as o,a2 as a}from"./entry.d88141f7.js";var s=`
.p-icon {
    display: inline-block;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,i=o.extend({name:"baseicon",css:s}),l={name:"BaseIcon",extends:t,props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},style:i,beforeMount:function(){var n;i.loadStyle({nonce:(n=this.$config)===null||n===void 0||(n=n.csp)===null||n===void 0?void 0:n.nonce})},methods:{pti:function(){var n=a.isEmpty(this.label);return{class:["p-icon",{"p-icon-spin":this.spin}],role:n?void 0:"img","aria-label":n?void 0:this.label,"aria-hidden":n}}},computed:{$config:function(){var n;return(n=this.$primevue)===null||n===void 0?void 0:n.config}}};export{l as s};
