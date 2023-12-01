import{s as U}from"./portal.esm.353507e7.js";import{a1 as N,aB as l,a4 as S,a2 as Z,a5 as z,a3 as K,a7 as M,a8 as V,t as s,v as c,V as u,ac as d,a9 as i,W as B,x as v,y as P,ai as X,ag as Y,aa as H,i as C,A as O,z as W,ay as q,X as F}from"./entry.27521827.js";import{s as D}from"./basecomponent.esm.47a4fb52.js";import{s as T}from"./index.esm.ab8b7dd2.js";import{s as j,a as E}from"./index.esm.e5ef6de9.js";import{s as $}from"./index.esm.d6e486f6.js";import{s as A}from"./index.esm.5a6910b6.js";import"./baseicon.esm.d812501b.js";function f(e){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(e)}function g(e,t,n){return t=J(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J(e){var t=Q(e,"string");return f(t)==="symbol"?t:String(t)}function Q(e,t){if(f(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(f(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var _=`
@layer primevue {
    .p-toast {
        width: 25rem;
        white-space: pre-line;
        word-break: break-word;
    }

    .p-toast-message-icon {
        flex-shrink: 0;
    }

    .p-toast-message-content {
        display: flex;
        align-items: flex-start;
    }

    .p-toast-message-text {
        flex: 1 1 auto;
    }

    .p-toast-top-center {
        transform: translateX(-50%);
    }

    .p-toast-bottom-center {
        transform: translateX(-50%);
    }

    .p-toast-center {
        min-width: 20vw;
        transform: translate(-50%, -50%);
    }

    .p-toast-icon-close {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }

    .p-toast-icon-close.p-link {
        cursor: pointer;
    }

    /* Animations */
    .p-toast-message-enter-from {
        opacity: 0;
        -webkit-transform: translateY(50%);
        -ms-transform: translateY(50%);
        transform: translateY(50%);
    }

    .p-toast-message-leave-from {
        max-height: 1000px;
    }

    .p-toast .p-toast-message.p-toast-message-leave-to {
        max-height: 0;
        opacity: 0;
        margin-bottom: 0;
        overflow: hidden;
    }

    .p-toast-message-enter-active {
        -webkit-transition: transform 0.3s, opacity 0.3s;
        transition: transform 0.3s, opacity 0.3s;
    }

    .p-toast-message-leave-active {
        -webkit-transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin-bottom 0.3s;
    }
}
`,ee={root:function(t){var n=t.position;return{position:"fixed",top:n==="top-right"||n==="top-left"||n==="top-center"?"20px":n==="center"?"50%":null,right:(n==="top-right"||n==="bottom-right")&&"20px",bottom:(n==="bottom-left"||n==="bottom-right"||n==="bottom-center")&&"20px",left:n==="top-left"||n==="bottom-left"?"20px":n==="center"||n==="top-center"||n==="bottom-center"?"50%":null}}},te={root:function(t){var n=t.props,o=t.instance;return["p-toast p-component p-toast-"+n.position,{"p-input-filled":o.$primevue.config.inputStyle==="filled","p-ripple-disabled":o.$primevue.config.ripple===!1}]},container:function(t){var n=t.props;return["p-toast-message",{"p-toast-message-info":n.message.severity==="info"||n.message.severity===void 0,"p-toast-message-warn":n.message.severity==="warn","p-toast-message-error":n.message.severity==="error","p-toast-message-success":n.message.severity==="success"}]},content:"p-toast-message-content",icon:function(t){var n=t.props;return["p-toast-message-icon",g(g(g(g({},n.infoIcon,n.message.severity==="info"),n.warnIcon,n.message.severity==="warn"),n.errorIcon,n.message.severity==="error"),n.successIcon,n.message.severity==="success")]},text:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail",closeButton:"p-toast-icon-close p-link",closeIcon:"p-toast-icon-close-icon"},ne=N.extend({name:"toast",css:_,classes:te,inlineStyles:ee}),oe={name:"BaseToast",extends:D,props:{group:{type:String,default:null},position:{type:String,default:"top-right"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},breakpoints:{type:Object,default:null},closeIcon:{type:String,default:void 0},infoIcon:{type:String,default:void 0},warnIcon:{type:String,default:void 0},errorIcon:{type:String,default:void 0},successIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null}},style:ne,provide:function(){return{$parentInstance:this}}},R={name:"ToastMessage",hostName:"Toast",extends:D,emits:["close"],closeTimeout:null,props:{message:{type:null,default:null},templates:{type:Object,default:null},closeIcon:{type:String,default:null},infoIcon:{type:String,default:null},warnIcon:{type:String,default:null},errorIcon:{type:String,default:null},successIcon:{type:String,default:null},closeButtonProps:{type:null,default:null}},mounted:function(){var t=this;this.message.life&&(this.closeTimeout=setTimeout(function(){t.close({message:t.message,type:"life-end"})},this.message.life))},beforeUnmount:function(){this.clearCloseTimeout()},methods:{close:function(t){this.$emit("close",t)},onCloseClick:function(){this.clearCloseTimeout(),this.close({message:this.message,type:"close"})},clearCloseTimeout:function(){this.closeTimeout&&(clearTimeout(this.closeTimeout),this.closeTimeout=null)}},computed:{iconComponent:function(){return{info:!this.infoIcon&&j,success:!this.successIcon&&T,warn:!this.warnIcon&&E,error:!this.errorIcon&&A}[this.message.severity]},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{TimesIcon:$,InfoCircleIcon:j,CheckIcon:T,ExclamationTriangleIcon:E,TimesCircleIcon:A},directives:{ripple:M}};function p(e){"@babel/helpers - typeof";return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(e)}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?k(Object(n),!0).forEach(function(o){re(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function re(e,t,n){return t=se(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function se(e){var t=ie(e,"string");return p(t)==="symbol"?t:String(t)}function ie(e,t){if(p(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(p(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ae=["aria-label"];function le(e,t,n,o,a,r){var h=V("ripple");return s(),c("div",i({class:[e.cx("container"),n.message.styleClass],role:"alert","aria-live":"assertive","aria-atomic":"true"},e.ptm("container")),[n.templates.container?(s(),u(d(n.templates.container),{key:0,message:n.message,onClose:r.onCloseClick,closeCallback:r.onCloseClick},null,40,["message","onClose","closeCallback"])):(s(),c("div",i({key:1,class:[e.cx("content"),n.message.contentStyleClass]},e.ptm("content")),[n.templates.message?(s(),u(d(n.templates.message),{key:1,message:n.message},null,8,["message"])):(s(),c(B,{key:0},[(s(),u(d(n.templates.icon?n.templates.icon:r.iconComponent&&r.iconComponent.name?r.iconComponent:"span"),i({class:e.cx("icon")},e.ptm("icon")),null,16,["class"])),v("div",i({class:e.cx("text")},e.ptm("text")),[v("span",i({class:e.cx("summary")},e.ptm("summary")),P(n.message.summary),17),v("div",i({class:e.cx("detail")},e.ptm("detail")),P(n.message.detail),17)],16)],64)),n.message.closable!==!1?(s(),c("div",X(i({key:2},e.ptm("buttonContainer"))),[Y((s(),c("button",i({class:e.cx("closeButton"),type:"button","aria-label":r.closeAriaLabel,onClick:t[0]||(t[0]=function(){return r.onCloseClick&&r.onCloseClick.apply(r,arguments)}),autofocus:""},m(m(m({},n.closeButtonProps),e.ptm("button")),e.ptm("closeButton"))),[(s(),u(d(n.templates.closeicon||"TimesIcon"),i({class:[e.cx("closeIcon"),n.closeIcon]},m(m({},e.ptm("buttonIcon")),e.ptm("closeIcon"))),null,16,["class"]))],16,ae)),[[h]])],16)):H("",!0)],16))],16)}R.render=le;function ce(e){return pe(e)||fe(e)||me(e)||ue()}function ue(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function me(e,t){if(e){if(typeof e=="string")return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(e,t)}}function fe(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function pe(e){if(Array.isArray(e))return I(e)}function I(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var ye=0,de={name:"Toast",extends:oe,inheritAttrs:!1,emits:["close","life-end"],data:function(){return{messages:[]}},styleElement:null,mounted:function(){l.on("add",this.onAdd),l.on("remove",this.onRemove),l.on("remove-group",this.onRemoveGroup),l.on("remove-all-groups",this.onRemoveAllGroups),this.breakpoints&&this.createStyle()},beforeUnmount:function(){this.destroyStyle(),this.$refs.container&&this.autoZIndex&&S.clear(this.$refs.container),l.off("add",this.onAdd),l.off("remove",this.onRemove),l.off("remove-group",this.onRemoveGroup),l.off("remove-all-groups",this.onRemoveAllGroups)},methods:{add:function(t){t.id==null&&(t.id=ye++),this.messages=[].concat(ce(this.messages),[t])},remove:function(t){for(var n=-1,o=0;o<this.messages.length;o++)if(this.messages[o]===t.message){n=o;break}this.messages.splice(n,1),this.$emit(t.type,{message:t.message})},onAdd:function(t){this.group==t.group&&this.add(t)},onRemove:function(t){this.remove({message:t,type:"close"})},onRemoveGroup:function(t){this.group===t&&(this.messages=[])},onRemoveAllGroups:function(){this.messages=[]},onEnter:function(){this.$refs.container.setAttribute(this.attributeSelector,""),this.autoZIndex&&S.set("modal",this.$refs.container,this.baseZIndex||this.$primevue.config.zIndex.modal)},onLeave:function(){var t=this;this.$refs.container&&this.autoZIndex&&Z.isEmpty(this.messages)&&setTimeout(function(){S.clear(t.$refs.container)},200)},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var t;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",z.setAttribute(this.styleElement,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.head.appendChild(this.styleElement);var n="";for(var o in this.breakpoints){var a="";for(var r in this.breakpoints[o])a+=r+":"+this.breakpoints[o][r]+"!important;";n+=`
                        @media screen and (max-width: `.concat(o,`) {
                            .p-toast[`).concat(this.attributeSelector,`] {
                                `).concat(a,`
                            }
                        }
                    `)}this.styleElement.innerHTML=n}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)}},computed:{attributeSelector:function(){return K()}},components:{ToastMessage:R,Portal:U}};function y(e){"@babel/helpers - typeof";return y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(e)}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,o)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?x(Object(n),!0).forEach(function(o){ge(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function ge(e,t,n){return t=be(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function be(e){var t=ve(e,"string");return y(t)==="symbol"?t:String(t)}function ve(e,t){if(y(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(y(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function he(e,t,n,o,a,r){var h=C("ToastMessage"),G=C("Portal");return s(),u(G,null,{default:O(function(){return[v("div",i({ref:"container",class:e.cx("root"),style:e.sx("root",!0,{position:e.position})},b(b({},e.$attrs),e.ptm("root"))),[W(q,i({name:"p-toast-message",tag:"div",onEnter:r.onEnter,onLeave:r.onLeave},b(b({},e.ptm("message")),e.ptm("transition"))),{default:O(function(){return[(s(!0),c(B,null,F(a.messages,function(w){return s(),u(h,{key:w.id,message:w,templates:e.$slots,closeIcon:e.closeIcon,infoIcon:e.infoIcon,warnIcon:e.warnIcon,errorIcon:e.errorIcon,successIcon:e.successIcon,closeButtonProps:e.closeButtonProps,onClose:t[0]||(t[0]=function(L){return r.remove(L)}),pt:e.pt},null,8,["message","templates","closeIcon","infoIcon","warnIcon","errorIcon","successIcon","closeButtonProps","pt"])}),128))]}),_:1},16,["onEnter","onLeave"])],16)]}),_:1})}de.render=he;export{de as default};
