import{s as i}from"./basecomponent.esm.ec477ef3.js";import{a1 as r,t as l,v as o,a9 as u}from"./entry.3bdf10b2.js";var p=`
@layer primevue {
    .p-inputtextarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-fluid .p-inputtextarea {
        width: 100%;
    }
}
`,d={root:function(t){var s=t.instance,n=t.props;return["p-inputtextarea p-inputtext p-component",{"p-filled":s.filled,"p-inputtextarea-resizable ":n.autoResize}]}},h=r.extend({name:"textarea",css:p,classes:d}),m={name:"BaseTextarea",extends:i,props:{modelValue:null,autoResize:Boolean},style:h,provide:function(){return{$parentInstance:this}}},f={name:"Textarea",extends:m,emits:["update:modelValue"],mounted:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},updated:function(){this.$el.offsetParent&&this.autoResize&&this.resize()},methods:{resize:function(){this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden"},onInput:function(t){this.autoResize&&this.resize(),this.$emit("update:modelValue",t.target.value)}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},ptmParams:function(){return{context:{disabled:this.$attrs.disabled||this.$attrs.disabled===""}}}}},c=["value"];function x(e,t,s,n,v,a){return l(),o("textarea",u({class:e.cx("root"),value:e.modelValue,onInput:t[0]||(t[0]=function(){return a.onInput&&a.onInput.apply(a,arguments)})},e.ptm("root",a.ptmParams),{"data-pc-name":"textarea"}),null,16,c)}f.render=x;export{f as default};
