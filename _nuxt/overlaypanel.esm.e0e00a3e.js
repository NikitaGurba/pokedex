import{a2 as S,a5 as f,a6 as o,a7 as K,a4 as D,ao as P,a8 as T,i as z,a9 as v,t as s,V as h,A as m,z as A,ae as B,aa as l,ag as b,v as p,ab as y,W as I,x as j,ac as R,_ as L}from"./entry.3eac7289.js";import{s as x}from"./index.esm.ec9e8db1.js";import{O as u}from"./overlayeventbus.esm.3f3bf6b4.js";import{s as H}from"./portal.esm.3aa44ae6.js";import{s as U}from"./basecomponent.esm.06395008.js";import"./baseicon.esm.1237762d.js";var Z=`
@layer primevue {
    .p-overlaypanel {
        margin-top: 10px;
    }

    .p-overlaypanel-flipped {
        margin-top: 0;
        margin-bottom: 10px;
    }

    .p-overlaypanel-close {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
    }

    /* Animation */
    .p-overlaypanel-enter-from {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-overlaypanel-leave-to {
        opacity: 0;
    }

    .p-overlaypanel-enter-active {
        transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-overlaypanel-leave-active {
        transition: opacity 0.1s linear;
    }

    .p-overlaypanel:after,
    .p-overlaypanel:before {
        bottom: 100%;
        left: calc(var(--overlayArrowLeft, 0) + 1.25rem);
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    .p-overlaypanel:after {
        border-width: 8px;
        margin-left: -8px;
    }

    .p-overlaypanel:before {
        border-width: 10px;
        margin-left: -10px;
    }

    .p-overlaypanel-flipped:after,
    .p-overlaypanel-flipped:before {
        bottom: auto;
        top: 100%;
    }

    .p-overlaypanel.p-overlaypanel-flipped:after {
        border-bottom-color: transparent;
    }

    .p-overlaypanel.p-overlaypanel-flipped:before {
        border-bottom-color: transparent;
    }
}
`,N={root:function(e){var t=e.instance;return["p-overlaypanel p-component",{"p-input-filled":t.$primevue.config.inputStyle==="filled","p-ripple-disabled":t.$primevue.config.ripple===!1}]},content:"p-overlaypanel-content",closeButton:"p-overlaypanel-close p-link",closeIcon:"p-overlaypanel-close-icon"},V=S.extend({name:"overlaypanel",css:Z,classes:N}),q={name:"BaseOverlayPanel",extends:U,props:{dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!1},appendTo:{type:String,default:"body"},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},breakpoints:{type:Object,default:null},closeIcon:{type:String,default:void 0},closeOnEscape:{type:Boolean,default:!0}},style:V,provide:function(){return{$parentInstance:this}}},F={name:"OverlayPanel",extends:q,inheritAttrs:!1,emits:["show","hide"],data:function(){return{visible:!1}},watch:{dismissable:{immediate:!0,handler:function(e){e?this.bindOutsideClickListener():this.unbindOutsideClickListener()}}},selfClick:!1,target:null,eventTarget:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,styleElement:null,overlayEventListener:null,documentKeydownListener:null,beforeUnmount:function(){this.dismissable&&this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.destroyStyle(),this.unbindResizeListener(),this.target=null,this.container&&this.autoZIndex&&f.clear(this.container),this.overlayEventListener&&(u.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null),this.container=null},mounted:function(){this.breakpoints&&this.createStyle()},methods:{toggle:function(e,t){this.visible?this.hide():this.show(e,t)},show:function(e,t){this.visible=!0,this.eventTarget=e.currentTarget,this.target=t||e.currentTarget},hide:function(){this.visible=!1},onContentClick:function(){this.selfClick=!0},onEnter:function(e){var t=this;this.container.setAttribute(this.attributeSelector,""),o.addStyles(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.dismissable&&this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.autoZIndex&&f.set("overlay",e,this.baseZIndex+this.$primevue.config.zIndex.overlay),this.overlayEventListener=function(r){t.container.contains(r.target)&&(t.selfClick=!0)},this.focus(),u.on("overlay-click",this.overlayEventListener),this.$emit("show"),this.closeOnEscape&&this.bindDocumentKeyDownListener()},onLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.unbindDocumentKeyDownListener(),u.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null,this.$emit("hide")},onAfterLeave:function(e){this.autoZIndex&&f.clear(e)},alignOverlay:function(){o.absolutePosition(this.container,this.target);var e=o.getOffset(this.container),t=o.getOffset(this.target),r=0;e.left<t.left&&(r=t.left-e.left),this.container.style.setProperty("--overlayArrowLeft","".concat(r,"px")),e.top<t.top&&(this.container.setAttribute("data-p-overlaypanel-flipped","true"),!this.isUnstyled&&o.addClass(this.container,"p-overlaypanel-flipped"))},onContentKeydown:function(e){e.code==="Escape"&&this.closeOnEscape&&(this.hide(),o.focus(this.target))},onButtonKeydown:function(e){switch(e.code){case"ArrowDown":case"ArrowUp":case"ArrowLeft":case"ArrowRight":e.preventDefault()}},focus:function(){var e=this.container.querySelector("[autofocus]");e&&e.focus()},onKeyDown:function(e){e.code==="Escape"&&this.closeOnEscape&&(this.visible=!1)},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var e=this;!this.outsideClickListener&&o.isClient()&&(this.outsideClickListener=function(t){e.visible&&!e.selfClick&&!e.isTargetClicked(t)&&(e.visible=!1),e.selfClick=!1},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null,this.selfClick=!1)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new K(this.target,function(){e.visible&&(e.visible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.visible&&!o.isTouchDevice()&&(e.visible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isTargetClicked:function(e){return this.eventTarget&&(this.eventTarget===e.target||this.eventTarget.contains(e.target))},containerRef:function(e){this.container=e},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var e;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",o.setAttribute(this.styleElement,"nonce",(e=this.$primevue)===null||e===void 0||(e=e.config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce),document.head.appendChild(this.styleElement);var t="";for(var r in this.breakpoints)t+=`
                        @media screen and (max-width: `.concat(r,`) {
                            .p-overlaypanel[`).concat(this.attributeSelector,`] {
                                width: `).concat(this.breakpoints[r],` !important;
                            }
                        }
                    `);this.styleElement.innerHTML=t}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},onOverlayClick:function(e){u.emit("overlay-click",{originalEvent:e,target:this.target})}},computed:{attributeSelector:function(){return D()},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{focustrap:P,ripple:T},components:{Portal:H,TimesIcon:x}};function a(n){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(n)}function w(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(c){return Object.getOwnPropertyDescriptor(n,c).enumerable})),t.push.apply(t,r)}return t}function g(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?w(Object(t),!0).forEach(function(r){M(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function M(n,e,t){return e=W(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function W(n){var e=Y(n,"string");return a(e)==="symbol"?e:String(e)}function Y(n,e){if(a(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(a(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var G=["aria-modal"],J=["aria-label"];function Q(n,e,t,r,c,i){var C=z("Portal"),k=v("ripple"),O=v("focustrap");return s(),h(C,{appendTo:n.appendTo},{default:m(function(){return[A(B,l({name:"p-overlaypanel",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},n.ptm("transition")),{default:m(function(){return[c.visible?b((s(),p("div",l({key:0,ref:i.containerRef,role:"dialog","aria-modal":c.visible,onClick:e[5]||(e[5]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)}),class:n.cx("root")},g(g({},n.$attrs),n.ptm("root"))),[n.$slots.container?y(n.$slots,"container",{key:0,onClose:i.hide,onKeydown:function(d){return i.onButtonKeydown(d)},closeCallback:i.hide,keydownCallback:function(d){return i.onButtonKeydown(d)}}):(s(),p(I,{key:1},[j("div",l({class:n.cx("content"),onClick:e[0]||(e[0]=function(){return i.onContentClick&&i.onContentClick.apply(i,arguments)}),onMousedown:e[1]||(e[1]=function(){return i.onContentClick&&i.onContentClick.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onContentKeydown&&i.onContentKeydown.apply(i,arguments)})},n.ptm("content")),[y(n.$slots,"default")],16),n.showCloseIcon?b((s(),p("button",l({key:0,class:n.cx("closeButton"),"aria-label":i.closeAriaLabel,type:"button",autofocus:"",onClick:e[3]||(e[3]=function(){return i.hide&&i.hide.apply(i,arguments)}),onKeydown:e[4]||(e[4]=function(){return i.onButtonKeydown&&i.onButtonKeydown.apply(i,arguments)})},n.ptm("closeButton")),[y(n.$slots,"closeicon",{},function(){return[(s(),h(R(n.closeIcon?"span":"TimesIcon"),l({class:[n.cx("closeIcon"),n.closeIcon]},n.ptm("closeIcon")),null,16,["class"]))]})],16,J)),[[k]]):L("",!0)],64))],16,G)),[[O]]):L("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])}F.render=Q;export{F as default};
