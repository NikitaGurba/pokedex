import{s as d}from"./basecomponent.esm.bbc5ce76.js";import{a1 as f,t as b,v as y,x as u,a9 as o}from"./entry.5ab142e7.js";var m=`
@layer primevue {
    .p-inputswitch {
        display: inline-block;
    }

    .p-inputswitch-slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 1px solid transparent;
    }

    .p-inputswitch-slider:before {
        position: absolute;
        content: '';
        top: 50%;
    }
}
`,h={root:{position:"relative"}},v={root:function(t){var n=t.instance,r=t.props;return["p-inputswitch p-component",{"p-inputswitch-checked":n.checked,"p-disabled":r.disabled,"p-focus":n.focused}]},slider:"p-inputswitch-slider"},S=f.extend({name:"inputswitch",css:m,classes:v,inlineStyles:h}),g={name:"BaseInputSwitch",extends:d,props:{modelValue:{type:null,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},disabled:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},style:S,provide:function(){return{$parentInstance:this}}},w={name:"InputSwitch",extends:g,emits:["click","update:modelValue","change","input","focus","blur"],data:function(){return{focused:!1}},methods:{onClick:function(t){if(!this.disabled){var n=this.checked?this.falseValue:this.trueValue;this.$emit("click",t),this.$emit("update:modelValue",n),this.$emit("change",t),this.$emit("input",n),this.$refs.input.focus()}},onFocus:function(t){this.focused=!0,this.$emit("focus",t)},onBlur:function(t){this.focused=!1,this.$emit("blur",t)}},computed:{checked:function(){return this.modelValue===this.trueValue}}};function s(e){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(r){O(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function O(e,t,n){return t=k(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e){var t=P(e,"string");return s(t)==="symbol"?t:String(t)}function P(e,t){if(s(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(s(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var j=["id","checked","disabled","aria-checked","aria-labelledby","aria-label"];function B(e,t,n,r,a,i){return b(),y("div",o({class:e.cx("root"),style:e.sx("root"),onClick:t[2]||(t[2]=function(l){return i.onClick(l)})},e.ptm("root"),{"data-pc-name":"inputswitch"}),[u("div",o({class:"p-hidden-accessible"},e.ptm("hiddenInputWrapper"),{"data-p-hidden-accessible":!0}),[u("input",o({ref:"input",id:e.inputId,type:"checkbox",role:"switch",class:e.inputClass,style:e.inputStyle,checked:i.checked,disabled:e.disabled,"aria-checked":i.checked,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,onFocus:t[0]||(t[0]=function(l){return i.onFocus(l)}),onBlur:t[1]||(t[1]=function(l){return i.onBlur(l)})},p(p({},e.inputProps),e.ptm("hiddenInput"))),null,16,j)],16),u("span",o({class:e.cx("slider")},e.ptm("slider")),null,16)],16)}w.render=B;export{w as default};
