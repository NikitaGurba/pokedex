import{s as v}from"./index.esm.0f5867cb.js";import{s as h}from"./index.esm.c0e4ab6d.js";import{a1 as P,a3 as w,a7 as O,a8 as S,t as p,v as c,x as i,ab as d,a9 as o,y as g,aa as u,ag as f,V as j,ac as B,z as D,A as I,ah as K,ae as E}from"./entry.9a7c477c.js";import{s as C}from"./basecomponent.esm.1cd4df10.js";import"./baseicon.esm.7c1aeeb0.js";var k=`
@layer primevue {
    .p-fieldset-legend > a,
    .p-fieldset-legend > span {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-fieldset-toggleable .p-fieldset-legend a {
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        text-decoration: none;
    }

    .p-fieldset-legend-text {
        line-height: 1;
    }
}
`,A={root:function(t){var n=t.props;return["p-fieldset p-component",{"p-fieldset-toggleable":n.toggleable}]},legend:"p-fieldset-legend",legendtitle:"p-fieldset-legend-text",togglericon:"p-fieldset-toggler",toggleablecontent:"p-toggleable-content",content:"p-fieldset-content"},N=P.extend({name:"fieldset",css:k,classes:A}),V={name:"BaseFieldset",extends:C,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:N,provide:function(){return{$parentInstance:this}}},F={name:"Fieldset",extends:V,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(t){this.d_collapsed=t}},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{ariaId:function(){return w()},buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps["aria-label"]?this.toggleButtonProps["aria-label"]:this.legend}},directives:{ripple:O},components:{PlusIcon:h,MinusIcon:v}};function s(e){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(e)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?m(Object(n),!0).forEach(function(r){L(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function L(e,t,n){return t=M(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e){var t=T(e,"string");return s(t)==="symbol"?t:String(t)}function T(e,t){if(s(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(s(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var _=["id"],q=["id","aria-controls","aria-expanded","aria-label"],z=["id","aria-labelledby"];function R(e,t,n,r,a,l){var y=S("ripple");return p(),c("fieldset",o({class:e.cx("root")},e.ptm("root"),{"data-pc-name":"fieldset"}),[i("legend",o({class:e.cx("legend")},e.ptm("legend")),[e.toggleable?u("",!0):d(e.$slots,"legend",{key:0},function(){return[i("span",o({id:l.ariaId+"_header",class:e.cx("legendtitle")},e.ptm("legendtitle")),g(e.legend),17,_)]}),e.toggleable?f((p(),c("a",o({key:1,id:l.ariaId+"_header",tabindex:"0",role:"button","aria-controls":l.ariaId+"_content","aria-expanded":!a.d_collapsed,"aria-label":l.buttonAriaLabel,onClick:t[0]||(t[0]=function(){return l.toggle&&l.toggle.apply(l,arguments)}),onKeydown:t[1]||(t[1]=function(){return l.onKeyDown&&l.onKeyDown.apply(l,arguments)})},b(b({},e.toggleButtonProps),e.ptm("toggler"))),[d(e.$slots,"togglericon",{collapsed:a.d_collapsed},function(){return[(p(),j(B(a.d_collapsed?"PlusIcon":"MinusIcon"),o({class:e.cx("togglericon")},e.ptm("togglericon")),null,16,["class"]))]}),d(e.$slots,"legend",{},function(){return[i("span",o({class:e.cx("legendtitle")},e.ptm("legendtitle")),g(e.legend),17)]})],16,q)),[[y]]):u("",!0)],16),D(E,o({name:"p-toggleable-content"},e.ptm("transition")),{default:I(function(){return[f(i("div",o({id:l.ariaId+"_content",class:e.cx("toggleablecontent"),role:"region","aria-labelledby":l.ariaId+"_header"},e.ptm("toggleablecontent")),[i("div",o({class:e.cx("content")},e.ptm("content")),[d(e.$slots,"default")],16)],16,z),[[K,!a.d_collapsed]])]}),_:3},16)],16)}F.render=R;export{F as default};
