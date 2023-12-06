import{s as T}from"./index.esm.7d58a70f.js";import{s as _}from"./index.esm.96699609.js";import{s as x}from"./index.esm.adb484a7.js";import{s as L}from"./index.esm.7f0f43f5.js";import{W as O,_ as c,X as V,Y as N,a0 as D,a1 as K,t as l,v as u,a2 as o,a3 as h,S as f,x as v,a8 as k,L as A,a4 as P,M as g,N as y}from"./entry.60175b74.js";import{s as E}from"./basecomponent.esm.6b5a7c00.js";import"./baseicon.esm.5dd21594.js";var j=`
@layer primevue {
    .p-carousel {
        display: flex;
        flex-direction: column;
    }

    .p-carousel-content {
        display: flex;
        flex-direction: column;
        overflow: auto;
    }

    .p-carousel-prev,
    .p-carousel-next {
        align-self: center;
        flex-grow: 0;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
    }

    .p-carousel-container {
        display: flex;
        flex-direction: row;
    }

    .p-carousel-items-content {
        overflow: hidden;
        width: 100%;
    }

    .p-carousel-items-container {
        display: flex;
        flex-direction: row;
    }

    .p-carousel-indicators {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }

    .p-carousel-indicator > button {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* Vertical */
    .p-carousel-vertical .p-carousel-container {
        flex-direction: column;
    }

    .p-carousel-vertical .p-carousel-items-container {
        flex-direction: column;
        height: 100%;
    }

    /* Keyboard Support */
    .p-items-hidden .p-carousel-item {
        visibility: hidden;
    }

    .p-items-hidden .p-carousel-item.p-carousel-item-active {
        visibility: visible;
    }
}
`,F={root:function(t){var i=t.instance;return["p-carousel p-component",{"p-carousel-vertical":i.isVertical(),"p-carousel-horizontal":!i.isVertical()}]},header:"p-carousel-header",content:"p-carousel-content",container:"p-carousel-container",previousButton:function(t){var i=t.instance;return["p-carousel-prev p-link",{"p-disabled":i.backwardIsDisabled}]},previousButtonIcon:"p-carousel-next-icon",itemsContent:"p-carousel-items-content",itemsContainer:"p-carousel-items-container",itemCloned:function(t){var i=t.index,n=t.value,r=t.totalShiftedItems,a=t.d_numVisible;return["p-carousel-item p-carousel-item-cloned",{"p-carousel-item-active":r*-1===n.length+a,"p-carousel-item-start":i===0,"p-carousel-item-end":n.slice(-1*a).length-1===i}]},item:function(t){var i=t.instance,n=t.index;return["p-carousel-item",{"p-carousel-item-active":i.firstIndex()<=n&&i.lastIndex()>=n,"p-carousel-item-start":i.firstIndex()===n,"p-carousel-item-end":i.lastIndex()===n}]},nextButton:function(t){var i=t.instance;return["p-carousel-next p-link",{"p-disabled":i.forwardIsDisabled}]},nextButtonIcon:"p-carousel-prev-icon",indicators:"p-carousel-indicators p-reset",indicator:function(t){var i=t.instance,n=t.index;return["p-carousel-indicator",{"p-highlight":i.d_page===n}]},indicatorButton:"p-link",footer:"p-carousel-footer"},R=O.extend({name:"carousel",css:j,classes:F}),M={name:"BaseCarousel",extends:E,props:{value:null,page:{type:Number,default:0},numVisible:{type:Number,default:1},numScroll:{type:Number,default:1},responsiveOptions:Array,orientation:{type:String,default:"horizontal"},verticalViewPortHeight:{type:String,default:"300px"},contentClass:String,containerClass:String,indicatorsContentClass:String,circular:{type:Boolean,default:!1},autoplayInterval:{type:Number,default:0},showNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null}},style:R,provide:function(){return{$parentInstance:this}}};function m(e){return W(e)||H(e)||z(e)||U()}function U(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z(e,t){if(e){if(typeof e=="string")return C(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if(i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set")return Array.from(e);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return C(e,t)}}function H(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function W(e){if(Array.isArray(e))return C(e)}function C(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var X={name:"Carousel",extends:M,emits:["update:page"],isRemainingItemsAdded:!1,data:function(){return{remainingItems:0,d_numVisible:this.numVisible,d_numScroll:this.numScroll,d_oldNumScroll:0,d_oldNumVisible:0,d_oldValue:null,d_page:this.page,totalShiftedItems:this.page*this.numScroll*-1,allowAutoplay:!!this.autoplayInterval,d_circular:this.circular||this.allowAutoplay,swipeThreshold:20}},watch:{page:function(t){t>this.d_page?this.navForward({},t):t<this.d_page&&this.navBackward({},t),this.d_page=t},circular:function(t){this.d_circular=t},numVisible:function(t,i){this.d_numVisible=t,this.d_oldNumVisible=i},numScroll:function(t,i){this.d_oldNumScroll=i,this.d_numScroll=t},value:function(t){this.d_oldValue=t}},mounted:function(){var t=!1;if(this.$el.setAttribute(this.attributeSelector,""),this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners(),this.isCircular()){var i=this.totalShiftedItems;this.d_page===0?i=-1*this.d_numVisible:i===0&&(i=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),i!==this.totalShiftedItems&&(this.totalShiftedItems=i,t=!0)}!t&&this.isAutoplay()&&this.startAutoplay()},updated:function(){var t=this.isCircular(),i=!1,n=this.totalShiftedItems;if(this.autoplayInterval&&this.stopAutoplay(),this.d_oldNumScroll!==this.d_numScroll||this.d_oldNumVisible!==this.d_numVisible||this.d_oldValue.length!==this.value.length){this.remainingItems=(this.value.length-this.d_numVisible)%this.d_numScroll;var r=this.d_page;this.totalIndicators!==0&&r>=this.totalIndicators&&(r=this.totalIndicators-1,this.$emit("update:page",r),this.d_page=r,i=!0),n=r*this.d_numScroll*-1,t&&(n-=this.d_numVisible),r===this.totalIndicators-1&&this.remainingItems>0?(n+=-1*this.remainingItems+this.d_numScroll,this.isRemainingItemsAdded=!0):this.isRemainingItemsAdded=!1,n!==this.totalShiftedItems&&(this.totalShiftedItems=n,i=!0),this.d_oldNumScroll=this.d_numScroll,this.d_oldNumVisible=this.d_numVisible,this.d_oldValue=this.value,this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(n*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(n*(100/this.d_numVisible),"%, 0, 0)")}t&&(this.d_page===0?n=-1*this.d_numVisible:n===0&&(n=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),n!==this.totalShiftedItems&&(this.totalShiftedItems=n,i=!0)),!i&&this.isAutoplay()&&this.startAutoplay()},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.autoplayInterval&&this.stopAutoplay()},methods:{getIndicatorPTOptions:function(t){return{context:{highlighted:t===this.d_page}}},step:function(t,i){var n=this.totalShiftedItems,r=this.isCircular();if(i!=null)n=this.d_numScroll*i*-1,r&&(n-=this.d_numVisible),this.isRemainingItemsAdded=!1;else{n+=this.d_numScroll*t,this.isRemainingItemsAdded&&(n+=this.remainingItems-this.d_numScroll*t,this.isRemainingItemsAdded=!1);var a=r?n+this.d_numVisible:n;i=Math.abs(Math.floor(a/this.d_numScroll))}r&&this.d_page===this.totalIndicators-1&&t===-1?(n=-1*(this.value.length+this.d_numVisible),i=0):r&&this.d_page===0&&t===1?(n=0,i=this.totalIndicators-1):i===this.totalIndicators-1&&this.remainingItems>0&&(n+=this.remainingItems*-1-this.d_numScroll*t,this.isRemainingItemsAdded=!0),this.$refs.itemsContainer&&(!this.isUnstyled&&c.removeClass(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(n*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(n*(100/this.d_numVisible),"%, 0, 0)"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=n,this.$emit("update:page",i),this.d_page=i},calculatePosition:function(){if(this.$refs.itemsContainer&&this.responsiveOptions){for(var t=window.innerWidth,i={numVisible:this.numVisible,numScroll:this.numScroll},n=0;n<this.responsiveOptions.length;n++){var r=this.responsiveOptions[n];parseInt(r.breakpoint,10)>=t&&(i=r)}if(this.d_numScroll!==i.numScroll){var a=this.d_page;a=parseInt(a*this.d_numScroll/i.numScroll),this.totalShiftedItems=i.numScroll*a*-1,this.isCircular()&&(this.totalShiftedItems-=i.numVisible),this.d_numScroll=i.numScroll,this.$emit("update:page",a),this.d_page=a}this.d_numVisible!==i.numVisible&&(this.d_numVisible=i.numVisible)}},navBackward:function(t,i){(this.d_circular||this.d_page!==0)&&this.step(1,i),this.allowAutoplay=!1,t.cancelable&&t.preventDefault()},navForward:function(t,i){(this.d_circular||this.d_page<this.totalIndicators-1)&&this.step(-1,i),this.allowAutoplay=!1,t.cancelable&&t.preventDefault()},onIndicatorClick:function(t,i){var n=this.d_page;i>n?this.navForward(t,i):i<n&&this.navBackward(t,i)},onTransitionEnd:function(){this.$refs.itemsContainer&&(!this.isUnstyled&&c.addClass(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="",(this.d_page===0||this.d_page===this.totalIndicators-1)&&this.isCircular()&&(this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(this.totalShiftedItems*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(this.totalShiftedItems*(100/this.d_numVisible),"%, 0, 0)")))},onTouchStart:function(t){var i=t.changedTouches[0];this.startPos={x:i.pageX,y:i.pageY}},onTouchMove:function(t){t.cancelable&&t.preventDefault()},onTouchEnd:function(t){var i=t.changedTouches[0];this.isVertical()?this.changePageOnTouch(t,i.pageY-this.startPos.y):this.changePageOnTouch(t,i.pageX-this.startPos.x)},changePageOnTouch:function(t,i){Math.abs(i)>this.swipeThreshold&&(i<0?this.navForward(t):this.navBackward(t))},onIndicatorKeydown:function(t){switch(t.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),t.preventDefault();break;case"End":this.onEndKey(),t.preventDefault();break;case"ArrowUp":case"ArrowDown":t.preventDefault();break;case"Tab":this.onTabKey();break}},onRightKey:function(){var t=m(c.find(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,i+1===t.length?t.length-1:i+1)},onLeftKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)},onHomeKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)},onEndKey:function(){var t=m(c.find(this.$refs.indicatorContent,'[data-pc-section="indicator"]r')),i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,t.length-1)},onTabKey:function(){var t=m(c.find(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),i=t.findIndex(function(a){return c.getAttribute(a,"data-p-highlight")===!0}),n=c.findSingle(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]'),r=t.findIndex(function(a){return a===n.parentElement});t[r].children[0].tabIndex="-1",t[i].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var t=m(c.find(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),i=c.findSingle(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]');return t.findIndex(function(n){return n===i.parentElement})},changedFocusedIndicator:function(t,i){var n=m(c.find(this.$refs.indicatorContent,'[data-pc-section="indicator"]'));n[t].children[0].tabIndex="-1",n[i].children[0].tabIndex="0",n[i].children[0].focus()},bindDocumentListeners:function(){var t=this;this.documentResizeListener||(this.documentResizeListener=function(i){t.calculatePosition(i)},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},startAutoplay:function(){var t=this;this.interval=setInterval(function(){t.d_page===t.totalIndicators-1?t.step(-1,0):t.step(-1,t.d_page+1)},this.autoplayInterval)},stopAutoplay:function(){this.interval&&clearInterval(this.interval)},createStyle:function(){if(!this.carouselStyle){var t;this.carouselStyle=document.createElement("style"),this.carouselStyle.type="text/css",c.setAttribute(this.carouselStyle,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.body.appendChild(this.carouselStyle)}var i=`
                .p-carousel[`.concat(this.attributeSelector,`] .p-carousel-item {
                    flex: 1 0 `).concat(100/this.d_numVisible,`%
                }
            `);if(this.responsiveOptions&&!this.isUnstyled){var n=m(this.responsiveOptions),r=V.localeComparator();n.sort(function(d,s){var w=d.breakpoint,S=s.breakpoint;return V.sort(w,S,-1,r)});for(var a=0;a<n.length;a++){var p=n[a];i+=`
                        @media screen and (max-width: `.concat(p.breakpoint,`) {
                            .p-carousel[`).concat(this.attributeSelector,`] .p-carousel-item {
                                flex: 1 0 `).concat(100/p.numVisible,`%
                            }
                        }
                    `)}}this.carouselStyle.innerHTML=i},isVertical:function(){return this.orientation==="vertical"},isCircular:function(){return this.value&&this.d_circular&&this.value.length>=this.d_numVisible},isAutoplay:function(){return this.autoplayInterval&&this.allowAutoplay},firstIndex:function(){return this.isCircular()?-1*(this.totalShiftedItems+this.d_numVisible):this.totalShiftedItems*-1},lastIndex:function(){return this.firstIndex()+this.d_numVisible-1},ariaSlideNumber:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,t):void 0},ariaPageLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},computed:{totalIndicators:function(){return this.value?Math.max(Math.ceil((this.value.length-this.d_numVisible)/this.d_numScroll)+1,0):0},backwardIsDisabled:function(){return this.value&&(!this.circular||this.value.length<this.d_numVisible)&&this.d_page===0},forwardIsDisabled:function(){return this.value&&(!this.circular||this.value.length<this.d_numVisible)&&(this.d_page===this.totalIndicators-1||this.totalIndicators===0)},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0},ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0},attributeSelector:function(){return N()}},components:{ChevronRightIcon:x,ChevronDownIcon:T,ChevronLeftIcon:_,ChevronUpIcon:L},directives:{ripple:D}};function b(e){"@babel/helpers - typeof";return b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(e)}function B(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),i.push.apply(i,n)}return i}function I(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?B(Object(i),!0).forEach(function(n){Y(e,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):B(Object(i)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))})}return e}function Y(e,t,i){return t=q(t),t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function q(e){var t=G(e,"string");return b(t)==="symbol"?t:String(t)}function G(e,t){if(b(e)!=="object"||e===null)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var n=i.call(e,t||"default");if(b(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var J=["aria-live"],Q=["disabled","aria-label"],Z=["data-p-carousel-item-active","data-p-carousel-item-start","data-p-carousel-item-end"],$=["aria-hidden","aria-label","aria-roledescription","data-p-carousel-item-active","data-p-carousel-item-start","data-p-carousel-item-end"],tt=["disabled","aria-label"],et=["data-p-highlight"],it=["tabindex","aria-label","aria-current","onClick"];function nt(e,t,i,n,r,a){var p=K("ripple");return l(),u("div",o({class:e.cx("root"),role:"region"},e.ptm("root")),[e.$slots.header?(l(),u("div",o({key:0,class:e.cx("header")},e.ptm("header")),[h(e.$slots,"header")],16)):f("",!0),v("div",o({class:[e.cx("content"),e.contentClass]},e.ptm("content")),[v("div",o({class:[e.cx("container"),e.containerClass],"aria-live":r.allowAutoplay?"polite":"off"},e.ptm("container")),[e.showNavigators?k((l(),u("button",o({key:0,type:"button",class:e.cx("previousButton"),disabled:a.backwardIsDisabled,"aria-label":a.ariaPrevButtonLabel,onClick:t[0]||(t[0]=function(){return a.navBackward&&a.navBackward.apply(a,arguments)})},I(I({},e.prevButtonProps),e.ptm("previousButton")),{"data-pc-group-section":"navigator"}),[h(e.$slots,"previousicon",{},function(){return[(l(),A(P(a.isVertical()?"ChevronUpIcon":"ChevronLeftIcon"),o({class:e.cx("previousButtonIcon")},e.ptm("previousButtonIcon")),null,16,["class"]))]})],16,Q)),[[p]]):f("",!0),v("div",o({class:e.cx("itemsContent"),style:[{height:a.isVertical()?e.verticalViewPortHeight:"auto"}],onTouchend:t[2]||(t[2]=function(){return a.onTouchEnd&&a.onTouchEnd.apply(a,arguments)}),onTouchstart:t[3]||(t[3]=function(){return a.onTouchStart&&a.onTouchStart.apply(a,arguments)}),onTouchmove:t[4]||(t[4]=function(){return a.onTouchMove&&a.onTouchMove.apply(a,arguments)})},e.ptm("itemsContent")),[v("div",o({ref:"itemsContainer",class:e.cx("itemsContainer"),onTransitionend:t[1]||(t[1]=function(){return a.onTransitionEnd&&a.onTransitionEnd.apply(a,arguments)})},e.ptm("itemsContainer")),[a.isCircular()?(l(!0),u(g,{key:0},y(e.value.slice(-1*r.d_numVisible),function(d,s){return l(),u("div",o({key:s+"_scloned",class:e.cx("itemCloned",{index:s,value:e.value,totalShiftedItems:r.totalShiftedItems,d_numVisible:r.d_numVisible})},e.ptm("itemCloned"),{"data-p-carousel-item-active":r.totalShiftedItems*-1===e.value.length+r.d_numVisible,"data-p-carousel-item-start":s===0,"data-p-carousel-item-end":e.value.slice(-1*r.d_numVisible).length-1===s}),[h(e.$slots,"item",{data:d,index:s})],16,Z)}),128)):f("",!0),(l(!0),u(g,null,y(e.value,function(d,s){return l(),u("div",o({key:s,class:e.cx("item",{index:s}),role:"group","aria-hidden":a.firstIndex()>s||a.lastIndex()<s?!0:void 0,"aria-label":a.ariaSlideNumber(s),"aria-roledescription":a.ariaSlideLabel},e.ptm("item"),{"data-p-carousel-item-active":a.firstIndex()<=s&&a.lastIndex()>=s,"data-p-carousel-item-start":a.firstIndex()===s,"data-p-carousel-item-end":a.lastIndex()===s}),[h(e.$slots,"item",{data:d,index:s})],16,$)}),128)),a.isCircular()?(l(!0),u(g,{key:1},y(e.value.slice(0,r.d_numVisible),function(d,s){return l(),u("div",o({key:s+"_fcloned",class:e.cx("itemCloned",{index:s,value:e.value,totalShiftedItems:r.totalShiftedItems,d_numVisible:r.d_numVisible})},e.ptm("itemCloned")),[h(e.$slots,"item",{data:d,index:s})],16)}),128)):f("",!0)],16)],16),e.showNavigators?k((l(),u("button",o({key:1,type:"button",class:e.cx("nextButton"),disabled:a.forwardIsDisabled,"aria-label":a.ariaNextButtonLabel,onClick:t[5]||(t[5]=function(){return a.navForward&&a.navForward.apply(a,arguments)})},I(I({},e.nextButtonProps),e.ptm("nextButton")),{"data-pc-group-section":"navigator"}),[h(e.$slots,"nexticon",{},function(){return[(l(),A(P(a.isVertical()?"ChevronDownIcon":"ChevronRightIcon"),o({class:e.cx("nextButtonIcon")},e.ptm("nextButtonIcon")),null,16,["class"]))]})],16,tt)),[[p]]):f("",!0)],16,J),a.totalIndicators>=0&&e.showIndicators?(l(),u("ul",o({key:0,ref:"indicatorContent",class:[e.cx("indicators"),e.indicatorsContentClass],onKeydown:t[6]||(t[6]=function(){return a.onIndicatorKeydown&&a.onIndicatorKeydown.apply(a,arguments)})},e.ptm("indicators")),[(l(!0),u(g,null,y(a.totalIndicators,function(d,s){return l(),u("li",o({key:"p-carousel-indicator-"+s.toString(),class:e.cx("indicator",{index:s})},e.ptm("indicator",a.getIndicatorPTOptions(s)),{"data-p-highlight":r.d_page===s}),[v("button",o({class:e.cx("indicatorButton"),type:"button",tabindex:r.d_page===s?"0":"-1","aria-label":a.ariaPageLabel(s+1),"aria-current":r.d_page===s?"page":void 0,onClick:function(S){return a.onIndicatorClick(S,s)}},e.ptm("indicatorButton",a.getIndicatorPTOptions(s))),null,16,it)],16,et)}),128))],16)):f("",!0)],16),e.$slots.footer?(l(),u("div",o({key:1,class:e.cx("footer")},e.ptm("footer")),[h(e.$slots,"footer")],16)):f("",!0)],16)}X.render=nt;export{X as default};