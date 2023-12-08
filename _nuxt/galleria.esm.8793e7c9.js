import{W,_ as m,Z as C,ad as Z,a0 as T,a1 as O,t as o,v as c,x as b,a8 as I,a2 as s,L as p,a4 as v,T as d,M as K,N as F,X as V,Y as X,i as P,z as H,A as N,a6 as Y}from"./entry.7afb403f.js";import{s as q}from"./portal.esm.a9856c93.js";import{s as k}from"./basecomponent.esm.c3cbaa0c.js";import{s as _}from"./index.esm.e5b92ded.js";import{s as R}from"./index.esm.beb8e254.js";import{s as M}from"./index.esm.8281f075.js";import{s as J}from"./index.esm.b217fb06.js";import{s as Q}from"./index.esm.2cb328e8.js";import"./baseicon.esm.e3e5b612.js";var ee=`
@layer primevue {
    .p-galleria-content {
        display: flex;
        flex-direction: column;
    }

    .p-galleria-item-wrapper {
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .p-galleria-item-container {
        position: relative;
        display: flex;
        height: 100%;
    }

    .p-galleria-item-nav {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .p-galleria-item-prev {
        left: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .p-galleria-item-next {
        right: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .p-galleria-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
    }

    .p-galleria-item-nav-onhover .p-galleria-item-nav {
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
    }

    .p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav {
        pointer-events: all;
        opacity: 1;
    }

    .p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled {
        pointer-events: none;
    }

    .p-galleria-caption {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }

    /* Thumbnails */
    .p-galleria-thumbnail-wrapper {
        display: flex;
        flex-direction: column;
        overflow: auto;
        flex-shrink: 0;
    }

    .p-galleria-thumbnail-prev,
    .p-galleria-thumbnail-next {
        align-self: center;
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
    }

    .p-galleria-thumbnail-prev span,
    .p-galleria-thumbnail-next span {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .p-galleria-thumbnail-container {
        display: flex;
        flex-direction: row;
    }

    .p-galleria-thumbnail-items-container {
        overflow: hidden;
        width: 100%;
    }

    .p-galleria-thumbnail-items {
        display: flex;
    }

    .p-galleria-thumbnail-item {
        overflow: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0.5;
    }

    .p-galleria-thumbnail-item:hover {
        opacity: 1;
        transition: opacity 0.3s;
    }

    .p-galleria-thumbnail-item-current {
        opacity: 1;
    }

    /* Positions */
    /* Thumbnails */
    .p-galleria-thumbnails-left .p-galleria-content,
    .p-galleria-thumbnails-right .p-galleria-content {
        flex-direction: row;
    }

    .p-galleria-thumbnails-left .p-galleria-item-wrapper,
    .p-galleria-thumbnails-right .p-galleria-item-wrapper {
        flex-direction: row;
    }

    .p-galleria-thumbnails-left .p-galleria-item-wrapper,
    .p-galleria-thumbnails-top .p-galleria-item-wrapper {
        order: 2;
    }

    .p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,
    .p-galleria-thumbnails-top .p-galleria-thumbnail-wrapper {
        order: 1;
    }

    .p-galleria-thumbnails-left .p-galleria-thumbnail-container,
    .p-galleria-thumbnails-right .p-galleria-thumbnail-container {
        flex-direction: column;
        flex-grow: 1;
    }

    .p-galleria-thumbnails-left .p-galleria-thumbnail-items,
    .p-galleria-thumbnails-right .p-galleria-thumbnail-items {
        flex-direction: column;
        height: 100%;
    }

    /* Indicators */
    .p-galleria-indicators {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-galleria-indicator > button {
        display: inline-flex;
        align-items: center;
    }

    .p-galleria-indicators-left .p-galleria-item-wrapper,
    .p-galleria-indicators-right .p-galleria-item-wrapper {
        flex-direction: row;
        align-items: center;
    }

    .p-galleria-indicators-left .p-galleria-item-container,
    .p-galleria-indicators-top .p-galleria-item-container {
        order: 2;
    }

    .p-galleria-indicators-left .p-galleria-indicators,
    .p-galleria-indicators-top .p-galleria-indicators {
        order: 1;
    }

    .p-galleria-indicators-left .p-galleria-indicators,
    .p-galleria-indicators-right .p-galleria-indicators {
        flex-direction: column;
    }

    .p-galleria-indicator-onitem .p-galleria-indicators {
        position: absolute;
        display: flex;
        z-index: 1;
    }

    .p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators {
        top: 0;
        left: 0;
        width: 100%;
        align-items: flex-start;
    }

    .p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators {
        right: 0;
        top: 0;
        height: 100%;
        align-items: flex-end;
    }

    .p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators {
        bottom: 0;
        left: 0;
        width: 100%;
        align-items: flex-end;
    }

    .p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators {
        left: 0;
        top: 0;
        height: 100%;
        align-items: flex-start;
    }

    /* FullScreen */
    .p-galleria-mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-galleria-close {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .p-galleria-mask .p-galleria-item-nav {
        position: fixed;
        top: 50%;
        margin-top: -0.5rem;
    }

    /* Animation */
    .p-galleria-enter-active {
        transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
    }

    .p-galleria-leave-active {
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .p-galleria-enter-from,
    .p-galleria-leave-to {
        opacity: 0;
        transform: scale(0.7);
    }

    .p-galleria-enter-active .p-galleria-item-nav {
        opacity: 0;
    }

    /* Keyboard Support */
    .p-items-hidden .p-galleria-thumbnail-item {
        visibility: hidden;
    }

    .p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
        visibility: visible;
    }
}
`,te={mask:function(e){var i=e.instance;return["p-galleria-mask p-component-overlay p-component-overlay-enter",{"p-input-filled":i.$primevue.config.inputStyle==="filled","p-ripple-disabled":i.$primevue.config.ripple===!1}]},root:function(e){var i=e.instance,n=i.$attrs.showThumbnails&&i.getPositionClass("p-galleria-thumbnails",i.$attrs.thumbnailsPosition),r=i.$attrs.showIndicators&&i.getPositionClass("p-galleria-indicators",i.$attrs.indicatorsPosition);return["p-galleria p-component",{"p-galleria-fullscreen":i.$attrs.fullScreen,"p-galleria-indicator-onitem":i.$attrs.showIndicatorsOnItem,"p-galleria-item-nav-onhover":i.$attrs.showItemNavigatorsOnHover&&!i.$attrs.fullScreen},n,r]},closeButton:"p-galleria-close p-link",closeIcon:"p-galleria-close-icon",header:"p-galleria-header",content:"p-galleria-content",footer:"p-galleria-footer",itemWrapper:"p-galleria-item-wrapper",itemContainer:"p-galleria-item-container",previousItemButton:function(e){var i=e.instance;return["p-galleria-item-prev p-galleria-item-nav p-link",{"p-disabled":i.isNavBackwardDisabled()}]},previousItemIcon:"p-galleria-item-prev-icon",item:"p-galleria-item",nextItemButton:function(e){var i=e.instance;return["p-galleria-item-next p-galleria-item-nav p-link",{"p-disabled":i.isNavForwardDisabled()}]},nextItemIcon:"p-galleria-item-next-icon",caption:"p-galleria-caption",indicators:"p-galleria-indicators p-reset",indicator:function(e){var i=e.instance,n=e.index;return["p-galleria-indicator",{"p-highlight":i.isIndicatorItemActive(n)}]},indicatorButton:"p-link",thumbnailWrapper:"p-galleria-thumbnail-wrapper",thumbnailContainer:"p-galleria-thumbnail-container",previousThumbnailButton:function(e){var i=e.instance;return["p-galleria-thumbnail-prev p-link",{"p-disabled":i.isNavBackwardDisabled()}]},previousThumbnailIcon:"p-galleria-thumbnail-prev-icon",thumbnailItemsContainer:"p-galleria-thumbnail-items-container",thumbnailItems:"p-galleria-thumbnail-items",thumbnailItem:function(e){var i=e.instance,n=e.index,r=e.activeIndex;return["p-galleria-thumbnail-item",{"p-galleria-thumbnail-item-current":r===n,"p-galleria-thumbnail-item-active":i.isItemActive(n),"p-galleria-thumbnail-item-start":i.firstItemAciveIndex()===n,"p-galleria-thumbnail-item-end":i.lastItemActiveIndex()===n}]},thumbnailItemContent:"p-galleria-thumbnail-item-content",nextThumbnailButton:function(e){var i=e.instance;return["p-galleria-thumbnail-next p-link",{"p-disabled":i.isNavForwardDisabled()}]},nextThumbnailIcon:"p-galleria-thumbnail-next-icon"},ie=W.extend({name:"galleria",css:ee,classes:te}),ne={name:"BaseGalleria",extends:k,props:{id:{type:String,default:null},value:{type:Array,default:null},activeIndex:{type:Number,default:0},fullScreen:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},numVisible:{type:Number,default:3},responsiveOptions:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!1},showThumbnailNavigators:{type:Boolean,default:!0},showItemNavigatorsOnHover:{type:Boolean,default:!1},changeItemOnIndicatorHover:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},autoPlay:{type:Boolean,default:!1},transitionInterval:{type:Number,default:4e3},showThumbnails:{type:Boolean,default:!0},thumbnailsPosition:{type:String,default:"bottom"},verticalThumbnailViewPortHeight:{type:String,default:"300px"},showIndicators:{type:Boolean,default:!1},showIndicatorsOnItem:{type:Boolean,default:!1},indicatorsPosition:{type:String,default:"bottom"},baseZIndex:{type:Number,default:0},maskClass:{type:String,default:null},containerStyle:{type:null,default:null},containerClass:{type:null,default:null},containerProps:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null}},style:ie,provide:function(){return{$parentInstance:this}}},U={name:"GalleriaItem",hostName:"Galleria",extends:k,emits:["start-slideshow","stop-slideshow","update:activeIndex"],props:{circular:{type:Boolean,default:!1},activeIndex:{type:Number,default:0},value:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},slideShowActive:{type:Boolean,default:!0},changeItemOnIndicatorHover:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!1},templates:{type:null,default:null},id:{type:String,default:null}},mounted:function(){this.autoPlay&&this.$emit("start-slideshow")},methods:{getIndicatorPTOptions:function(e){return{context:{highlighted:this.activeIndex===e}}},next:function(){var e=this.activeIndex+1,i=this.circular&&this.value.length-1===this.activeIndex?0:e;this.$emit("update:activeIndex",i)},prev:function(){var e=this.activeIndex!==0?this.activeIndex-1:0,i=this.circular&&this.activeIndex===0?this.value.length-1:e;this.$emit("update:activeIndex",i)},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},navBackward:function(e){this.stopSlideShow(),this.prev(),e&&e.cancelable&&e.preventDefault()},navForward:function(e){this.stopSlideShow(),this.next(),e&&e.cancelable&&e.preventDefault()},onIndicatorClick:function(e){this.stopSlideShow(),this.$emit("update:activeIndex",e)},onIndicatorMouseEnter:function(e){this.changeItemOnIndicatorHover&&(this.stopSlideShow(),this.$emit("update:activeIndex",e))},onIndicatorKeyDown:function(e,i){switch(e.code){case"Enter":case"Space":this.stopSlideShow(),this.$emit("update:activeIndex",i),e.preventDefault();break;case"ArrowDown":case"ArrowUp":e.preventDefault();break}},isIndicatorItemActive:function(e){return this.activeIndex===e},isNavBackwardDisabled:function(){return!this.circular&&this.activeIndex===0},isNavForwardDisabled:function(){return!this.circular&&this.activeIndex===this.value.length-1},ariaSlideNumber:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,e):void 0},ariaPageLabel:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,e):void 0}},computed:{activeItem:function(){return this.value[this.activeIndex]},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0}},components:{ChevronLeftIcon:R,ChevronRightIcon:M},directives:{ripple:T}},ae=["disabled"],re=["id","aria-label","aria-roledescription"],le=["disabled"],oe=["aria-label","aria-selected","aria-controls","onClick","onMouseenter","onKeydown","data-p-highlight"];function se(t,e,i,n,r,a){var f=O("ripple");return o(),c("div",s({class:t.cx("itemWrapper")},t.ptm("itemWrapper")),[b("div",s({class:t.cx("itemContainer")},t.ptm("itemContainer")),[i.showItemNavigators?I((o(),c("button",s({key:0,type:"button",class:t.cx("previousItemButton"),onClick:e[0]||(e[0]=function(u){return a.navBackward(u)}),disabled:a.isNavBackwardDisabled()},t.ptm("previousItemButton"),{"data-pc-group-section":"itemnavigator"}),[(o(),p(v(i.templates.previousitemicon||"ChevronLeftIcon"),s({class:t.cx("previousItemIcon")},t.ptm("previousItemIcon")),null,16,["class"]))],16,ae)),[[f]]):d("",!0),b("div",s({id:i.id+"_item_"+i.activeIndex,class:t.cx("item"),role:"group","aria-label":a.ariaSlideNumber(i.activeIndex+1),"aria-roledescription":a.ariaSlideLabel},t.ptm("item")),[i.templates.item?(o(),p(v(i.templates.item),{key:0,item:a.activeItem},null,8,["item"])):d("",!0)],16,re),i.showItemNavigators?I((o(),c("button",s({key:1,type:"button",class:t.cx("nextItemButton"),onClick:e[1]||(e[1]=function(u){return a.navForward(u)}),disabled:a.isNavForwardDisabled()},t.ptm("nextItemButton"),{"data-pc-group-section":"itemnavigator"}),[(o(),p(v(i.templates.nextitemicon||"ChevronRightIcon"),s({class:t.cx("nextItemIcon")},t.ptm("nextItemIcon")),null,16,["class"]))],16,le)),[[f]]):d("",!0),i.templates.caption?(o(),c("div",s({key:2,class:t.cx("caption")},t.ptm("caption")),[i.templates.caption?(o(),p(v(i.templates.caption),{key:0,item:a.activeItem},null,8,["item"])):d("",!0)],16)):d("",!0)],16),i.showIndicators?(o(),c("ul",s({key:0,class:t.cx("indicators")},t.ptm("indicators")),[(o(!0),c(K,null,F(i.value,function(u,l){return o(),c("li",s({key:"p-galleria-indicator-".concat(l),class:t.cx("indicator",{index:l}),tabindex:"0","aria-label":a.ariaPageLabel(l+1),"aria-selected":i.activeIndex===l,"aria-controls":i.id+"_item_"+l,onClick:function(g){return a.onIndicatorClick(l)},onMouseenter:function(g){return a.onIndicatorMouseEnter(l)},onKeydown:function(g){return a.onIndicatorKeyDown(g,l)}},t.ptm("indicator",a.getIndicatorPTOptions(l)),{"data-p-highlight":a.isIndicatorItemActive(l)}),[i.templates.indicator?d("",!0):(o(),c("button",s({key:0,type:"button",tabindex:"-1",class:t.cx("indicatorButton")},t.ptm("indicatorButton",a.getIndicatorPTOptions(l))),null,16)),i.templates.indicator?(o(),p(v(i.templates.indicator),{key:1,index:l},null,8,["index"])):d("",!0)],16,oe)}),128))],16)):d("",!0)],16)}U.render=se;function A(t){return me(t)||de(t)||ce(t)||ue()}function ue(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ce(t,e){if(t){if(typeof t=="string")return B(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(t);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return B(t,e)}}function de(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function me(t){if(Array.isArray(t))return B(t)}function B(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var G={name:"GalleriaThumbnails",hostName:"Galleria",extends:k,emits:["stop-slideshow","update:activeIndex"],props:{containerId:{type:String,default:null},value:{type:Array,default:null},numVisible:{type:Number,default:3},activeIndex:{type:Number,default:0},isVertical:{type:Boolean,default:!1},slideShowActive:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},responsiveOptions:{type:Array,default:null},contentHeight:{type:String,default:"300px"},showThumbnailNavigators:{type:Boolean,default:!0},templates:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null}},startPos:null,thumbnailsStyle:null,sortedResponsiveOptions:null,data:function(){return{d_numVisible:this.numVisible,d_oldNumVisible:this.numVisible,d_activeIndex:this.activeIndex,d_oldActiveItemIndex:this.activeIndex,totalShiftedItems:0,page:0}},watch:{numVisible:function(e,i){this.d_numVisible=e,this.d_oldNumVisible=i},activeIndex:function(e,i){this.d_activeIndex=e,this.d_oldActiveItemIndex=i}},mounted:function(){this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()},updated:function(){var e=this.totalShiftedItems;(this.d_oldNumVisible!==this.d_numVisible||this.d_oldActiveItemIndex!==this.d_activeIndex)&&(this.d_activeIndex<=this.getMedianItemIndex()?e=0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this.d_activeIndex?e=this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this.d_activeIndex&&this.d_numVisible%2===0?e=this.d_activeIndex*-1+this.getMedianItemIndex()+1:e=this.d_activeIndex*-1+this.getMedianItemIndex(),e!==this.totalShiftedItems&&(this.totalShiftedItems=e),this.$refs.itemsContainer.style.transform=this.isVertical?"translate3d(0, ".concat(e*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(e*(100/this.d_numVisible),"%, 0, 0)"),this.d_oldActiveItemIndex!==this.d_activeIndex&&(document.body.setAttribute("data-p-items-hidden","false"),!this.isUnstyled&&m.removeClass(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.d_oldActiveItemIndex=this.d_activeIndex,this.d_oldNumVisible=this.d_numVisible)},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle)},methods:{step:function(e){var i=this.totalShiftedItems+e;e<0&&-1*i+this.d_numVisible>this.value.length-1?i=this.d_numVisible-this.value.length:e>0&&i>0&&(i=0),this.circular&&(e<0&&this.value.length-1===this.d_activeIndex?i=0:e>0&&this.d_activeIndex===0&&(i=this.d_numVisible-this.value.length)),this.$refs.itemsContainer&&(document.body.setAttribute("data-p-items-hidden","false"),!this.isUnstyled&&m.removeClass(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transform=this.isVertical?"translate3d(0, ".concat(i*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(i*(100/this.d_numVisible),"%, 0, 0)"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=i},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},getMedianItemIndex:function(){var e=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?e:e-1},navBackward:function(e){this.stopSlideShow();var i=this.d_activeIndex!==0?this.d_activeIndex-1:0,n=i+this.totalShiftedItems;this.d_numVisible-n-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!==0||this.circular)&&this.step(1);var r=this.circular&&this.d_activeIndex===0?this.value.length-1:i;this.$emit("update:activeIndex",r),e.cancelable&&e.preventDefault()},navForward:function(e){this.stopSlideShow();var i=this.d_activeIndex===this.value.length-1?this.value.length-1:this.d_activeIndex+1;i+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);var n=this.circular&&this.value.length-1===this.d_activeIndex?0:i;this.$emit("update:activeIndex",n),e.cancelable&&e.preventDefault()},onItemClick:function(e){this.stopSlideShow();var i=e;if(i!==this.d_activeIndex){var n=i+this.totalShiftedItems,r=0;i<this.d_activeIndex?(r=this.d_numVisible-n-1-this.getMedianItemIndex(),r>0&&-1*this.totalShiftedItems!==0&&this.step(r)):(r=this.getMedianItemIndex()-n,r<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(r)),this.$emit("update:activeIndex",i)}},onThumbnailKeydown:function(e,i){switch((e.code==="Enter"||e.code==="Space")&&(this.onItemClick(i),e.preventDefault()),e.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),e.preventDefault();break;case"End":this.onEndKey(),e.preventDefault();break;case"ArrowUp":case"ArrowDown":e.preventDefault();break;case"Tab":this.onTabKey();break}},onRightKey:function(){var e=m.find(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]'),i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,i+1===e.length?e.length-1:i+1)},onLeftKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)},onHomeKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)},onEndKey:function(){var e=m.find(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]'),i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,e.length-1)},onTabKey:function(){var e=A(m.find(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]')),i=e.findIndex(function(a){return m.getAttribute(a,"data-p-active")===!0}),n=m.findSingle(this.$refs.itemsContainer,'[tabindex="0"]'),r=e.findIndex(function(a){return a===n.parentElement});e[r].children[0].tabIndex="-1",e[i].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var e=A(m.find(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]')),i=m.findSingle(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"] > [tabindex="0"]');return e.findIndex(function(n){return n===i.parentElement})},changedFocusedIndicator:function(e,i){var n=m.find(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]');n[e].children[0].tabIndex="-1",n[i].children[0].tabIndex="0",n[i].children[0].focus()},onTransitionEnd:function(){this.$refs.itemsContainer&&(document.body.setAttribute("data-p-items-hidden","true"),!this.isUnstyled&&m.addClass(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="")},onTouchStart:function(e){var i=e.changedTouches[0];this.startPos={x:i.pageX,y:i.pageY}},onTouchMove:function(e){e.cancelable&&e.preventDefault()},onTouchEnd:function(e){var i=e.changedTouches[0];this.isVertical?this.changePageOnTouch(e,i.pageY-this.startPos.y):this.changePageOnTouch(e,i.pageX-this.startPos.x)},changePageOnTouch:function(e,i){i<0?this.navForward(e):this.navBackward(e)},getTotalPageNumber:function(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0},createStyle:function(){if(!this.thumbnailsStyle){var e;this.thumbnailsStyle=document.createElement("style"),this.thumbnailsStyle.type="text/css",m.setAttribute(this.thumbnailsStyle,"nonce",(e=this.$primevue)===null||e===void 0||(e=e.config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce),document.body.appendChild(this.thumbnailsStyle)}var i=`
                #`.concat(this.containerId,` [data-pc-section="thumbnailitem"] {
                    flex: 1 0 `).concat(100/this.d_numVisible,`%
                }
            `);if(this.responsiveOptions&&!this.isUnstyled){this.sortedResponsiveOptions=A(this.responsiveOptions);var n=V.localeComparator();this.sortedResponsiveOptions.sort(function(f,u){var l=f.breakpoint,h=u.breakpoint;return V.sort(l,h,-1,n)});for(var r=0;r<this.sortedResponsiveOptions.length;r++){var a=this.sortedResponsiveOptions[r];i+=`
                        @media screen and (max-width: `.concat(a.breakpoint,`) {
                            #`).concat(this.containerId,` .p-galleria-thumbnail-item {
                                flex: 1 0 `).concat(100/a.numVisible,`%
                            }
                        }
                    `)}}this.thumbnailsStyle.innerHTML=i},calculatePosition:function(){if(this.$refs.itemsContainer&&this.sortedResponsiveOptions){for(var e=window.innerWidth,i={numVisible:this.numVisible},n=0;n<this.sortedResponsiveOptions.length;n++){var r=this.sortedResponsiveOptions[n];parseInt(r.breakpoint,10)>=e&&(i=r)}this.d_numVisible!==i.numVisible&&(this.d_numVisible=i.numVisible)}},bindDocumentListeners:function(){var e=this;this.documentResizeListener||(this.documentResizeListener=function(){e.calculatePosition()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},isNavBackwardDisabled:function(){return!this.circular&&this.d_activeIndex===0||this.value.length<=this.d_numVisible},isNavForwardDisabled:function(){return!this.circular&&this.d_activeIndex===this.value.length-1||this.value.length<=this.d_numVisible},firstItemAciveIndex:function(){return this.totalShiftedItems*-1},lastItemActiveIndex:function(){return this.firstItemAciveIndex()+this.d_numVisible-1},isItemActive:function(e){return this.firstItemAciveIndex()<=e&&this.lastItemActiveIndex()>=e},ariaPageLabel:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,e):void 0}},computed:{ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0}},components:{ChevronLeftIcon:R,ChevronRightIcon:M,ChevronUpIcon:Q,ChevronDownIcon:J},directives:{ripple:T}};function y(t){"@babel/helpers - typeof";return y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(t)}function L(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),i.push.apply(i,n)}return i}function x(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?L(Object(i),!0).forEach(function(n){he(t,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):L(Object(i)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))})}return t}function he(t,e,i){return e=pe(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function pe(t){var e=fe(t,"string");return y(e)==="symbol"?e:String(e)}function fe(t,e){if(y(t)!=="object"||t===null)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var n=i.call(t,e||"default");if(y(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var ve=["disabled","aria-label"],be=["data-p-active","aria-selected","aria-controls","onKeydown","data-p-galleria-thumbnail-item-current","data-p-galleria-thumbnail-item-active","data-p-galleria-thumbnail-item-start","data-p-galleria-thumbnail-item-end"],ge=["tabindex","aria-label","aria-current","onClick"],Ie=["disabled","aria-label"];function ye(t,e,i,n,r,a){var f=O("ripple");return o(),c("div",s({class:t.cx("thumbnailWrapper")},t.ptm("thumbnailWrapper")),[b("div",s({class:t.cx("thumbnailContainer")},t.ptm("thumbnailContainer")),[i.showThumbnailNavigators?I((o(),c("button",s({key:0,class:t.cx("previousThumbnailButton"),disabled:a.isNavBackwardDisabled(),type:"button","aria-label":a.ariaPrevButtonLabel,onClick:e[0]||(e[0]=function(u){return a.navBackward(u)})},x(x({},i.prevButtonProps),t.ptm("previousThumbnailButton")),{"data-pc-group-section":"thumbnailnavigator"}),[(o(),p(v(i.templates.previousthumbnailicon||(i.isVertical?"ChevronUpIcon":"ChevronLeftIcon")),s({class:t.cx("previousThumbnailIcon")},t.ptm("previousThumbnailIcon")),null,16,["class"]))],16,ve)),[[f]]):d("",!0),b("div",s({class:t.cx("thumbnailItemsContainer"),style:{height:i.isVertical?i.contentHeight:""}},t.ptm("thumbnailItemsContainer")),[b("div",s({ref:"itemsContainer",class:t.cx("thumbnailItems"),role:"tablist",onTransitionend:e[1]||(e[1]=function(){return a.onTransitionEnd&&a.onTransitionEnd.apply(a,arguments)}),onTouchstart:e[2]||(e[2]=function(u){return a.onTouchStart(u)}),onTouchmove:e[3]||(e[3]=function(u){return a.onTouchMove(u)}),onTouchend:e[4]||(e[4]=function(u){return a.onTouchEnd(u)})},t.ptm("thumbnailItems")),[(o(!0),c(K,null,F(i.value,function(u,l){return o(),c("div",s({key:"p-galleria-thumbnail-item-".concat(l),class:t.cx("thumbnailItem",{index:l,activeIndex:i.activeIndex}),role:"tab","data-p-active":i.activeIndex===l,"aria-selected":i.activeIndex===l,"aria-controls":i.containerId+"_item_"+l,onKeydown:function(g){return a.onThumbnailKeydown(g,l)}},t.ptm("thumbnailItem"),{"data-p-galleria-thumbnail-item-current":i.activeIndex===l,"data-p-galleria-thumbnail-item-active":a.isItemActive(l),"data-p-galleria-thumbnail-item-start":a.firstItemAciveIndex()===l,"data-p-galleria-thumbnail-item-end":a.lastItemActiveIndex()===l}),[b("div",s({class:t.cx("thumbnailItemContent"),tabindex:i.activeIndex===l?"0":"-1","aria-label":a.ariaPageLabel(l+1),"aria-current":i.activeIndex===l?"page":void 0,onClick:function(g){return a.onItemClick(l)}},t.ptm("thumbnailItemContent")),[i.templates.thumbnail?(o(),p(v(i.templates.thumbnail),{key:0,item:u},null,8,["item"])):d("",!0)],16,ge)],16,be)}),128))],16)],16),i.showThumbnailNavigators?I((o(),c("button",s({key:1,class:t.cx("nextThumbnailButton"),disabled:a.isNavForwardDisabled(),type:"button","aria-label":a.ariaNextButtonLabel,onClick:e[5]||(e[5]=function(u){return a.navForward(u)})},x(x({},i.nextButtonProps),t.ptm("nextThumbnailButton")),{"data-pc-group-section":"thumbnailnavigator"}),[(o(),p(v(i.templates.nextthumbnailicon||(i.isVertical?"ChevronDownIcon":"ChevronRightIcon")),s({class:t.cx("nextThumbnailIcon")},t.ptm("nextThumbnailIcon")),null,16,["class"]))],16,Ie)),[[f]]):d("",!0)],16)],16)}G.render=ye;function w(t){"@babel/helpers - typeof";return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(t)}function D(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),i.push.apply(i,n)}return i}function j(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?D(Object(i),!0).forEach(function(n){we(t,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):D(Object(i)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))})}return t}function we(t,e,i){return e=Se(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Se(t){var e=xe(t,"string");return w(e)==="symbol"?e:String(e)}function xe(t,e){if(w(t)!=="object"||t===null)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var n=i.call(t,e||"default");if(w(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var z={name:"GalleriaContent",hostName:"Galleria",extends:k,inheritAttrs:!1,interval:null,emits:["activeitem-change","mask-hide"],data:function(){return{id:this.$attrs.id||X(),activeIndex:this.$attrs.activeIndex,numVisible:this.$attrs.numVisible,slideShowActive:!1}},watch:{"$attrs.value":function(e){e&&e.length<this.numVisible&&(this.numVisible=e.length)},"$attrs.activeIndex":function(e){this.activeIndex=e},"$attrs.numVisible":function(e){this.numVisible=e},"$attrs.autoPlay":function(e){e?this.startSlideShow():this.stopSlideShow()}},updated:function(){this.$emit("activeitem-change",this.activeIndex)},beforeUnmount:function(){this.slideShowActive&&this.stopSlideShow()},methods:{getPTOptions:function(e){return this.ptm(e,{props:j(j({},this.$attrs),{},{pt:this.pt,unstyled:this.unstyled})})},isAutoPlayActive:function(){return this.slideShowActive},startSlideShow:function(){var e=this;this.interval=setInterval(function(){var i=e.$attrs.circular&&e.$attrs.value.length-1===e.activeIndex?0:e.activeIndex+1;e.activeIndex=i},this.$attrs.transitionInterval),this.slideShowActive=!0},stopSlideShow:function(){this.interval&&clearInterval(this.interval),this.slideShowActive=!1},getPositionClass:function(e,i){var n=["top","left","bottom","right"],r=n.find(function(a){return a===i});return r?"".concat(e,"-").concat(r):""},isVertical:function(){return this.$attrs.thumbnailsPosition==="left"||this.$attrs.thumbnailsPosition==="right"}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{GalleriaItem:U,GalleriaThumbnails:G,TimesIcon:_},directives:{ripple:T}};function S(t){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(t)}function $(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),i.push.apply(i,n)}return i}function E(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?$(Object(i),!0).forEach(function(n){Pe(t,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):$(Object(i)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))})}return t}function Pe(t,e,i){return e=Oe(e),e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Oe(t){var e=ke(t,"string");return S(e)==="symbol"?e:String(e)}function ke(t,e){if(S(t)!=="object"||t===null)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var n=i.call(t,e||"default");if(S(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Ce=["id"],Ae=["aria-label"],Be=["aria-live"];function Te(t,e,i,n,r,a){var f=P("GalleriaItem"),u=P("GalleriaThumbnails"),l=O("ripple");return t.$attrs.value&&t.$attrs.value.length>0?(o(),c("div",s({key:0,id:r.id,class:[t.cx("root"),t.$attrs.containerClass],style:t.$attrs.containerStyle},E(E({},t.$attrs.containerProps),a.getPTOptions("root")),{"data-pc-name":"galleria"}),[t.$attrs.fullScreen?I((o(),c("button",s({key:0,autofocus:"",type:"button",class:t.cx("closeButton"),"aria-label":a.closeAriaLabel,onClick:e[0]||(e[0]=function(h){return t.$emit("mask-hide")})},a.getPTOptions("closeButton")),[(o(),p(v(t.$attrs.templates.closeicon||"TimesIcon"),s({class:t.cx("closeIcon")},a.getPTOptions("closeIcon")),null,16,["class"]))],16,Ae)),[[l]]):d("",!0),t.$attrs.templates&&t.$attrs.templates.header?(o(),c("div",s({key:1,class:t.cx("header")},a.getPTOptions("header")),[(o(),p(v(t.$attrs.templates.header)))],16)):d("",!0),b("div",s({class:t.cx("content"),"aria-live":t.$attrs.autoPlay?"polite":"off"},a.getPTOptions("content")),[H(f,{id:r.id,activeIndex:r.activeIndex,"onUpdate:activeIndex":e[1]||(e[1]=function(h){return r.activeIndex=h}),slideShowActive:r.slideShowActive,"onUpdate:slideShowActive":e[2]||(e[2]=function(h){return r.slideShowActive=h}),value:t.$attrs.value,circular:t.$attrs.circular,templates:t.$attrs.templates,showIndicators:t.$attrs.showIndicators,changeItemOnIndicatorHover:t.$attrs.changeItemOnIndicatorHover,showItemNavigators:t.$attrs.showItemNavigators,autoPlay:t.$attrs.autoPlay,onStartSlideshow:a.startSlideShow,onStopSlideshow:a.stopSlideShow,pt:t.pt,unstyled:t.unstyled},null,8,["id","activeIndex","slideShowActive","value","circular","templates","showIndicators","changeItemOnIndicatorHover","showItemNavigators","autoPlay","onStartSlideshow","onStopSlideshow","pt","unstyled"]),t.$attrs.showThumbnails?(o(),p(u,{key:0,activeIndex:r.activeIndex,"onUpdate:activeIndex":e[3]||(e[3]=function(h){return r.activeIndex=h}),slideShowActive:r.slideShowActive,"onUpdate:slideShowActive":e[4]||(e[4]=function(h){return r.slideShowActive=h}),containerId:r.id,value:t.$attrs.value,templates:t.$attrs.templates,numVisible:r.numVisible,responsiveOptions:t.$attrs.responsiveOptions,circular:t.$attrs.circular,isVertical:a.isVertical(),contentHeight:t.$attrs.verticalThumbnailViewPortHeight,showThumbnailNavigators:t.$attrs.showThumbnailNavigators,prevButtonProps:t.$attrs.prevButtonProps,nextButtonProps:t.$attrs.nextButtonProps,onStopSlideshow:a.stopSlideShow,pt:t.pt,unstyled:t.unstyled},null,8,["activeIndex","slideShowActive","containerId","value","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","prevButtonProps","nextButtonProps","onStopSlideshow","pt","unstyled"])):d("",!0)],16,Be),t.$attrs.templates&&t.$attrs.templates.footer?(o(),c("div",s({key:2,class:t.cx("footer")},a.getPTOptions("footer")),[(o(),p(v(t.$attrs.templates.footer)))],16)):d("",!0)],16,Ce)):d("",!0)}z.render=Te;var Ve={name:"Galleria",extends:ne,inheritAttrs:!1,emits:["update:activeIndex","update:visible"],container:null,mask:null,data:function(){return{containerVisible:this.visible}},updated:function(){this.fullScreen&&this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.fullScreen&&m.unblockBodyScroll(),this.mask=null,this.container&&(C.clear(this.container),this.container=null)},methods:{onBeforeEnter:function(e){C.set("modal",e,this.baseZIndex||this.$primevue.config.zIndex.modal)},onEnter:function(e){this.mask.style.zIndex=String(parseInt(e.style.zIndex,10)-1),m.blockBodyScroll(),this.focus()},onBeforeLeave:function(){!this.isUnstyled&&m.addClass(this.mask,"p-component-overlay-leave")},onAfterLeave:function(e){C.clear(e),this.containerVisible=!1,m.unblockBodyScroll()},onActiveItemChange:function(e){this.activeIndex!==e&&this.$emit("update:activeIndex",e)},maskHide:function(){this.$emit("update:visible",!1)},containerRef:function(e){this.container=e},maskRef:function(e){this.mask=e},focus:function(){var e=this.container.$el.querySelector("[autofocus]");e&&e.focus()}},components:{GalleriaContent:z,Portal:q},directives:{focustrap:Z}},Ne=["role","aria-modal"];function Le(t,e,i,n,r,a){var f=P("GalleriaContent"),u=P("Portal"),l=O("focustrap");return t.fullScreen?(o(),p(u,{key:0},{default:N(function(){return[r.containerVisible?(o(),c("div",s({key:0,ref:a.maskRef,class:[t.cx("mask"),t.maskClass],role:t.fullScreen?"dialog":"region","aria-modal":t.fullScreen?"true":void 0},t.ptm("mask")),[H(Y,s({name:"p-galleria",onBeforeEnter:a.onBeforeEnter,onEnter:a.onEnter,onBeforeLeave:a.onBeforeLeave,onAfterLeave:a.onAfterLeave,appear:""},t.ptm("transition")),{default:N(function(){return[t.visible?I((o(),p(f,s({key:0,ref:a.containerRef,onMaskHide:a.maskHide,templates:t.$slots,onActiveitemChange:a.onActiveItemChange,pt:t.pt,unstyled:t.unstyled},t.$props),null,16,["onMaskHide","templates","onActiveitemChange","pt","unstyled"])),[[l]]):d("",!0)]}),_:1},16,["onBeforeEnter","onEnter","onBeforeLeave","onAfterLeave"])],16,Ne)):d("",!0)]}),_:1})):(o(),p(f,s({key:1,templates:t.$slots,onActiveitemChange:a.onActiveItemChange,pt:t.pt,unstyled:t.unstyled},t.$props),null,16,["templates","onActiveitemChange","pt","unstyled"]))}Ve.render=Le;export{Ve as default};
