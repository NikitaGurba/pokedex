import{s as i}from"./basecomponent.esm.fae27831.js";import{X as o,t as r,v as s,a3 as n,x as p}from"./entry.cf2a7ce9.js";var a=`
@layer primevue {
    .p-progress-spinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progress-spinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progress-spinner-svg {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
}
`,l={root:"p-progress-spinner",spinner:"p-progress-spinner-svg",circle:"p-progress-spinner-circle"},c=o.extend({name:"progressspinner",css:a,classes:l}),g={name:"BaseProgressSpinner",extends:i,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:c,provide:function(){return{$parentInstance:this}}},d={name:"ProgressSpinner",extends:g,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},m=["fill","stroke-width"];function u(e,v,f,h,y,t){return r(),s("div",n({class:e.cx("root"),role:"progressbar"},e.ptm("root"),{"data-pc-name":"progressspinner"}),[(r(),s("svg",n({class:e.cx("spinner"),viewBox:"25 25 50 50",style:t.svgStyle},e.ptm("spinner")),[p("circle",n({class:e.cx("circle"),cx:"50",cy:"50",r:"20",fill:e.fill,"stroke-width":e.strokeWidth,strokeMiterlimit:"10"},e.ptm("circle")),null,16,m)],16))],16)}d.render=u;export{d as default};
