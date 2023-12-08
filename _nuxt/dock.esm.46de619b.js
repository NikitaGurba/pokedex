import{s as x}from"./basecomponent.esm.3bd56bb7.js";import{W as w,Y as h,X as S,_ as c,a2 as l,a0 as A,ad as D,a1 as b,t as d,v as u,x as y,M as K,N as P,a8 as g,L as k,a5 as T,a4 as v,i as C,z as E}from"./entry.aee0189e.js";var F=`
@layer primevue {
    .p-dock {
        position: absolute;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
    }

    .p-dock-list-container {
        display: flex;
        pointer-events: auto;
    }

    .p-dock-list {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-dock-item {
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        will-change: transform;
    }

    .p-dock-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        cursor: default;
    }

    .p-dock-item-second-prev,
    .p-dock-item-second-next {
        transform: scale(1.2);
    }

    .p-dock-item-prev,
    .p-dock-item-next {
        transform: scale(1.4);
    }

    .p-dock-item-current {
        transform: scale(1.6);
        z-index: 1;
    }

    /* Position */
    /* top */
    .p-dock-top {
        left: 0;
        top: 0;
        width: 100%;
    }

    .p-dock-top .p-dock-item {
        transform-origin: center top;
    }

    /* bottom */
    .p-dock-bottom {
        left: 0;
        bottom: 0;
        width: 100%;
    }

    .p-dock-bottom .p-dock-item {
        transform-origin: center bottom;
    }

    /* right */
    .p-dock-right {
        right: 0;
        top: 0;
        height: 100%;
    }

    .p-dock-right .p-dock-item {
        transform-origin: center right;
    }

    .p-dock-right .p-dock-list {
        flex-direction: column;
    }

    /* left */
    .p-dock-left {
        left: 0;
        top: 0;
        height: 100%;
    }

    .p-dock-left .p-dock-item {
        transform-origin: center left;
    }

    .p-dock-left .p-dock-list {
        flex-direction: column;
    }
}
`,B={root:function(e){var n=e.instance,o=e.props;return["p-dock p-component","p-dock-".concat(o.position),{"p-dock-mobile":n.queryMatches}]},container:"p-dock-list-container",menu:"p-dock-list",menuitem:function(e){var n=e.instance,o=e.processedItem,r=e.index,i=e.id;return["p-dock-item",{"p-focus":n.isItemActive(i),"p-disabled":n.disabled(o),"p-dock-item-second-prev":n.currentIndex-2===r,"p-dock-item-prev":n.currentIndex-1===r,"p-dock-item-current":n.currentIndex===r,"p-dock-item-next":n.currentIndex+1===r,"p-dock-item-second-next":n.currentIndex+2===r}]},content:"p-menuitem-content",action:"p-dock-link",icon:"p-dock-icon"},N=w.extend({name:"dock",css:F,classes:B}),U={name:"BaseDock",extends:x,props:{position:{type:String,default:"bottom"},model:null,class:null,style:null,tooltipOptions:null,menuId:{type:String,default:null},tabindex:{type:Number,default:0},breakpoint:{type:String,default:"960px"},"aria-label":{type:String,default:null},"aria-labelledby":{type:String,default:null}},style:N,provide:function(){return{$parentInstance:this}}};function I(t){return H(t)||z(t)||q(t)||j()}function j(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q(t,e){if(t){if(typeof t=="string")return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}}function z(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function H(t){if(Array.isArray(t))return m(t)}function m(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var O={name:"DockSub",hostName:"Dock",extends:x,emits:["focus","blur"],props:{position:{type:String,default:"bottom"},model:{type:Array,default:null},templates:{type:null,default:null},tooltipOptions:null,menuId:{type:String,default:null},tabindex:{type:Number,default:0},"aria-label":{type:String,default:null},"aria-labelledby":{type:String,default:null}},data:function(){return{id:this.menuId,currentIndex:-3,focused:!1,focusedOptionIndex:-1}},watch:{menuId:function(e){this.id=e||h()}},mounted:function(){this.id=this.id||h()},methods:{getItemId:function(e){return"".concat(this.id,"_").concat(e)},getItemProp:function(e,n){return e&&e.item?S.getItemValue(e.item[n]):void 0},getPTOptions:function(e,n,o){return this.ptm(e,{context:{index:o,item:n,active:this.isItemActive(this.getItemId(o))}})},isSameMenuItem:function(e){return e.currentTarget&&(e.currentTarget.isSameNode(e.target)||e.currentTarget.isSameNode(e.target.closest('[data-pc-section="menuitem"]')))},isItemActive:function(e){return e===this.focusedOptionIndex},onListMouseLeave:function(){this.currentIndex=-3},onItemMouseEnter:function(e){this.currentIndex=e},onItemClick:function(e,n){if(this.isSameMenuItem(e)){var o=this.getItemProp(n,"command");o&&o({originalEvent:e,item:n.item})}},onListFocus:function(e){this.focused=!0,this.changeFocusedOptionIndex(0),this.$emit("focus",e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e)},onListKeyDown:function(e){switch(e.code){case"ArrowDown":{(this.position==="left"||this.position==="right")&&this.onArrowDownKey(),e.preventDefault();break}case"ArrowUp":{(this.position==="left"||this.position==="right")&&this.onArrowUpKey(),e.preventDefault();break}case"ArrowRight":{(this.position==="top"||this.position==="bottom")&&this.onArrowDownKey(),e.preventDefault();break}case"ArrowLeft":{(this.position==="top"||this.position==="bottom")&&this.onArrowUpKey(),e.preventDefault();break}case"Home":{this.onHomeKey(),e.preventDefault();break}case"End":{this.onEndKey(),e.preventDefault();break}case"Enter":case"Space":{this.onSpaceKey(e),e.preventDefault();break}}},onArrowDownKey:function(){var e=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e)},onArrowUpKey:function(){var e=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e)},onHomeKey:function(){this.changeFocusedOptionIndex(0)},onEndKey:function(){this.changeFocusedOptionIndex(c.find(this.$refs.list,'li[data-pc-section="menuitem"][data-p-disabled="false"]').length-1)},onSpaceKey:function(){var e=c.findSingle(this.$refs.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),n=e&&c.findSingle(e,'[data-pc-section="action"]');n?n.click():e&&e.click()},findNextOptionIndex:function(e){var n=c.find(this.$refs.list,'li[data-pc-section="menuitem"][data-p-disabled="false"]'),o=I(n).findIndex(function(r){return r.id===e});return o>-1?o+1:0},findPrevOptionIndex:function(e){var n=c.find(this.$refs.list,'li[data-pc-section="menuitem"][data-p-disabled="false"]'),o=I(n).findIndex(function(r){return r.id===e});return o>-1?o-1:0},changeFocusedOptionIndex:function(e){var n=c.find(this.$refs.list,'li[data-pc-section="menuitem"][data-p-disabled="false"]'),o=e>=n.length?n.length-1:e<0?0:e;this.focusedOptionIndex=n[o].getAttribute("id")},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled},getMenuItemProps:function(e,n){return{action:l({tabindex:-1,"aria-hidden":!0,class:this.cx("action")},this.getPTOptions("action",e,n)),icon:l({class:[this.cx("icon"),e.icon]},this.getPTOptions("icon",e,n))}}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},directives:{ripple:A,tooltip:D}},V=["id","aria-orientation","aria-activedescendant","tabindex","aria-label","aria-labelledby"],R=["id","aria-label","aria-disabled","onClick","onMouseenter","data-p-focused","data-p-disabled"],W=["href","target"];function X(t,e,n,o,r,i){var p=b("ripple"),M=b("tooltip");return d(),u("div",l({class:t.cx("container")},t.ptm("container")),[y("ul",l({ref:"list",id:r.id,class:t.cx("menu"),role:"menu","aria-orientation":n.position==="bottom"||n.position==="top"?"horizontal":"vertical","aria-activedescendant":r.focused?i.focusedOptionId:void 0,tabindex:n.tabindex,"aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,onFocus:e[0]||(e[0]=function(){return i.onListFocus&&i.onListFocus.apply(i,arguments)}),onBlur:e[1]||(e[1]=function(){return i.onListBlur&&i.onListBlur.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onListKeyDown&&i.onListKeyDown.apply(i,arguments)}),onMouseleave:e[3]||(e[3]=function(){return i.onListMouseLeave&&i.onListMouseLeave.apply(i,arguments)})},t.ptm("menu")),[(d(!0),u(K,null,P(n.model,function(a,s){return d(),u("li",l({key:s,id:i.getItemId(s),class:t.cx("menuitem",{processedItem:a,index:s,id:i.getItemId(s)}),role:"menuitem","aria-label":a.label,"aria-disabled":i.disabled(a),onClick:function(f){return i.onItemClick(f,a)},onMouseenter:function(f){return i.onItemMouseEnter(s)}},i.getPTOptions("menuitem",a,s),{"data-p-focused":i.isItemActive(i.getItemId(s)),"data-p-disabled":i.disabled(a)||!1}),[y("div",l({class:t.cx("content")},i.getPTOptions("content",a,s)),[n.templates.item?(d(),k(v(n.templates.item),{key:1,item:a,index:s,label:a.label,props:i.getMenuItemProps(a,s)},null,8,["item","index","label","props"])):g((d(),u("a",l({key:0,href:a.url,class:t.cx("action"),target:a.target,tabindex:"-1","aria-hidden":"true"},i.getPTOptions("action",a,s)),[n.templates.icon?(d(),k(v(n.templates.icon),{key:1,item:a,class:T(t.cx("icon"))},null,8,["item","class"])):g((d(),u("span",l({key:0,class:[t.cx("icon"),a.icon]},i.getPTOptions("icon",a,s)),null,16)),[[p]])],16,W)),[[M,{value:a.label,disabled:!n.tooltipOptions},n.tooltipOptions]])],16)],16,R)}),128))],16,V)],16)}O.render=X;var Y={name:"Dock",extends:U,matchMediaListener:null,data:function(){return{query:null,queryMatches:!1}},mounted:function(){this.bindMatchMediaListener()},beforeUnmount:function(){this.unbindMatchMediaListener()},methods:{bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var n=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=n,this.queryMatches=n.matches,this.matchMediaListener=function(){e.queryMatches=n.matches,e.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)}},computed:{containerClass:function(){return[this.class,this.cx("root")]}},components:{DockSub:O}};function G(t,e,n,o,r,i){var p=C("DockSub");return d(),u("div",l({class:i.containerClass,style:t.style},t.ptm("root"),{"data-pc-name":"dock"}),[E(p,{model:t.model,templates:t.$slots,tooltipOptions:t.tooltipOptions,position:t.position,menuId:t.menuId,"aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,tabindex:t.tabindex,pt:t.pt,unstyled:t.unstyled},null,8,["model","templates","tooltipOptions","position","menuId","aria-label","aria-labelledby","tabindex","pt","unstyled"])],16)}Y.render=G;export{Y as default};
