import{s as O}from"./index.esm.8857e1f4.js";import{s as T}from"./baseicon.esm.7c1aeeb0.js";import{a3 as S,t as p,v as y,x as a,a9 as s,a1 as V,a4 as f,a5 as o,a6 as E,i as v,z as h,ab as u,V as g,ac as b,aa as m,y as w,A as C,ae as R}from"./entry.9a7c477c.js";import z from"./inputtext.esm.2a7b825b.js";import{O as M}from"./overlayeventbus.esm.ba098b1e.js";import{s as B}from"./portal.esm.858b8b24.js";import{s as j}from"./basecomponent.esm.1cd4df10.js";var L={name:"EyeSlashIcon",extends:T,computed:{pathId:function(){return"pv_icon_clip_".concat(S())}}},x=["clipPath"],$=a("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z",fill:"currentColor"},null,-1),H=[$],U=["id"],A=a("rect",{width:"14",height:"14",fill:"white"},null,-1),q=[A];function D(e,t,n,r,l,i){return p(),y("svg",s({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),[a("g",{clipPath:"url(#".concat(i.pathId,")")},H,8,x),a("defs",null,[a("clipPath",{id:"".concat(i.pathId)},q,8,U)])],16)}L.render=D;var Z=`
@layer primevue {
    .p-password {
        display: inline-flex;
    }

    .p-password .p-password-panel {
        min-width: 100%;
    }

    .p-password-meter {
        height: 10px;
    }

    .p-password-strength {
        height: 100%;
        width: 0;
        transition: width 1s ease-in-out;
    }

    .p-fluid .p-password {
        display: flex;
    }

    .p-password-input::-ms-reveal,
    .p-password-input::-ms-clear {
        display: none;
    }
}
`,K={root:function(t){var n=t.props;return{position:n.appendTo==="self"?"relative":void 0}}},F={root:function(t){var n=t.instance,r=t.props;return["p-password p-component p-inputwrapper",{"p-inputwrapper-filled":n.filled,"p-inputwrapper-focus":n.focused,"p-input-icon-right":r.toggleMask}]},input:function(t){var n=t.props;return["p-password-input",{"p-disabled":n.disabled}]},panel:function(t){var n=t.instance;return["p-password-panel p-component",{"p-input-filled":n.$primevue.config.inputStyle==="filled","p-ripple-disabled":n.$primevue.config.ripple===!1}]},meter:"p-password-meter",meterLabel:function(t){var n=t.instance;return"p-password-strength ".concat(n.meter?n.meter.strength:"")},info:"p-password-info"},N=V.extend({name:"password",css:Z,classes:F,inlineStyles:K}),W={name:"BasePassword",extends:j,props:{modelValue:String,promptLabel:{type:String,default:null},mediumRegex:{type:String,default:"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"},strongRegex:{type:String,default:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"},weakLabel:{type:String,default:null},mediumLabel:{type:String,default:null},strongLabel:{type:String,default:null},feedback:{type:Boolean,default:!0},appendTo:{type:String,default:"body"},toggleMask:{type:Boolean,default:!1},hideIcon:{type:String,default:void 0},showIcon:{type:String,default:void 0},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},panelId:{type:String,default:null},panelClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},panelProps:{type:null,default:null},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},style:N,provide:function(){return{$parentInstance:this}}},G={name:"Password",extends:W,emits:["update:modelValue","change","focus","blur","invalid"],data:function(){return{overlayVisible:!1,meter:null,infoText:null,focused:!1,unmasked:!1}},mediumCheckRegExp:null,strongCheckRegExp:null,resizeListener:null,scrollHandler:null,overlay:null,mounted:function(){this.infoText=this.promptText,this.mediumCheckRegExp=new RegExp(this.mediumRegex),this.strongCheckRegExp=new RegExp(this.strongRegex)},beforeUnmount:function(){this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(f.clear(this.overlay),this.overlay=null)},methods:{onOverlayEnter:function(t){f.set("overlay",t,this.$primevue.config.zIndex.overlay),o.addStyles(t,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.bindScrollListener(),this.bindResizeListener()},onOverlayLeave:function(){this.unbindScrollListener(),this.unbindResizeListener(),this.overlay=null},onOverlayAfterLeave:function(t){f.clear(t)},alignOverlay:function(){this.appendTo==="self"?o.relativePosition(this.overlay,this.$refs.input.$el):(this.overlay.style.minWidth=o.getOuterWidth(this.$refs.input.$el)+"px",o.absolutePosition(this.overlay,this.$refs.input.$el))},testStrength:function(t){var n=0;return this.strongCheckRegExp.test(t)?n=3:this.mediumCheckRegExp.test(t)?n=2:t.length&&(n=1),n},onInput:function(t){this.$emit("update:modelValue",t.target.value),this.$emit("change",t)},onFocus:function(t){this.focused=!0,this.feedback&&(this.setPasswordMeter(this.modelValue),this.overlayVisible=!0),this.$emit("focus",t)},onBlur:function(t){this.focused=!1,this.feedback&&(this.overlayVisible=!1),this.$emit("blur",t)},onKeyUp:function(t){if(this.feedback){var n=t.target.value,r=this.checkPasswordStrength(n),l=r.meter,i=r.label;if(this.meter=l,this.infoText=i,t.code==="Escape"){this.overlayVisible&&(this.overlayVisible=!1);return}this.overlayVisible||(this.overlayVisible=!0)}},setPasswordMeter:function(){if(this.modelValue){var t=this.checkPasswordStrength(this.modelValue),n=t.meter,r=t.label;this.meter=n,this.infoText=r,this.overlayVisible||(this.overlayVisible=!0)}},checkPasswordStrength:function(t){var n=null,r=null;switch(this.testStrength(t)){case 1:n=this.weakText,r={strength:"weak",width:"33.33%"};break;case 2:n=this.mediumText,r={strength:"medium",width:"66.66%"};break;case 3:n=this.strongText,r={strength:"strong",width:"100%"};break;default:n=this.promptText,r=null;break}return{label:n,meter:r}},onInvalid:function(t){this.$emit("invalid",t)},bindScrollListener:function(){var t=this;this.scrollHandler||(this.scrollHandler=new E(this.$refs.input.$el,function(){t.overlayVisible&&(t.overlayVisible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=function(){t.overlayVisible&&!o.isTouchDevice()&&(t.overlayVisible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},overlayRef:function(t){this.overlay=t},onMaskToggle:function(){this.unmasked=!this.unmasked},onOverlayClick:function(t){M.emit("overlay-click",{originalEvent:t,target:this.$el})}},computed:{inputType:function(){return this.unmasked?"text":"password"},filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},weakText:function(){return this.weakLabel||this.$primevue.config.locale.weak},mediumText:function(){return this.mediumLabel||this.$primevue.config.locale.medium},strongText:function(){return this.strongLabel||this.$primevue.config.locale.strong},promptText:function(){return this.promptLabel||this.$primevue.config.locale.passwordPrompt},panelUniqueId:function(){return S()+"_panel"}},components:{PInputText:z,Portal:B,EyeSlashIcon:L,EyeIcon:O}};function d(e){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(e)}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?k(Object(n),!0).forEach(function(r){J(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function J(e,t,n){return t=Q(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Q(e){var t=X(e,"string");return d(t)==="symbol"?t:String(t)}function X(e,t){if(d(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(d(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Y=["id"];function _(e,t,n,r,l,i){var I=v("PInputText"),P=v("Portal");return p(),y("div",s({class:e.cx("root"),style:e.sx("root")},e.ptm("root"),{"data-pc-name":"password"}),[h(I,s({ref:"input",id:e.inputId,type:i.inputType,class:[e.cx("input"),e.inputClass],style:e.inputStyle,value:e.modelValue,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-controls":e.panelProps&&e.panelProps.id||e.panelId||i.panelUniqueId,"aria-expanded":l.overlayVisible,"aria-haspopup":!0,placeholder:e.placeholder,required:e.required,disabled:e.disabled,onInput:i.onInput,onFocus:i.onFocus,onBlur:i.onBlur,onKeyup:i.onKeyUp,onInvalid:i.onInvalid},c(c({},e.inputProps),e.ptm("input")),{unstyled:e.unstyled}),null,16,["id","type","class","style","value","aria-labelledby","aria-label","aria-controls","aria-expanded","placeholder","required","disabled","onInput","onFocus","onBlur","onKeyup","onInvalid","unstyled"]),e.toggleMask&&l.unmasked?u(e.$slots,"hideicon",{key:0,onClick:i.onMaskToggle,toggleCallback:i.onMaskToggle},function(){return[(p(),g(b(e.hideIcon?"i":"EyeSlashIcon"),s({class:e.hideIcon,onClick:i.onMaskToggle},e.ptm("hideIcon")),null,16,["class","onClick"]))]}):m("",!0),e.toggleMask&&!l.unmasked?u(e.$slots,"showicon",{key:1,onClick:i.onMaskToggle,toggleCallback:i.onMaskToggle},function(){return[(p(),g(b(e.showIcon?"i":"EyeIcon"),s({class:e.showIcon,onClick:i.onMaskToggle},e.ptm("showIcon")),null,16,["class","onClick"]))]}):m("",!0),a("span",s({class:"p-hidden-accessible","aria-live":"polite"},e.ptm("hiddenAccesible"),{"data-p-hidden-accessible":!0}),w(l.infoText),17),h(P,{appendTo:e.appendTo},{default:C(function(){return[h(R,s({name:"p-connected-overlay",onEnter:i.onOverlayEnter,onLeave:i.onOverlayLeave,onAfterLeave:i.onOverlayAfterLeave},e.ptm("transition")),{default:C(function(){return[l.overlayVisible?(p(),y("div",s({key:0,ref:i.overlayRef,id:e.panelId||i.panelUniqueId,class:[e.cx("panel"),e.panelClass],style:e.panelStyle,onClick:t[0]||(t[0]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)})},c(c({},e.panelProps),e.ptm("panel"))),[u(e.$slots,"header"),u(e.$slots,"content",{},function(){return[a("div",s({class:e.cx("meter")},e.ptm("meter")),[a("div",s({class:e.cx("meterLabel"),style:{width:l.meter?l.meter.width:""}},e.ptm("meterLabel")),null,16)],16),a("div",s({class:e.cx("info")},e.ptm("info")),w(l.infoText),17)]}),u(e.$slots,"footer")],16,Y)):m("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16)}G.render=_;export{G as default};
