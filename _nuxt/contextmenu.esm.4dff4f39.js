import{s as V}from"./portal.esm.858b8b24.js";import{a1 as T,a3 as C,a2 as d,a4 as P,a5 as m,a9 as c,a7 as z,i as y,a8 as R,t as u,V as p,A as K,v as h,W as L,X as N,x as E,ag as _,ac as k,ad as w,aa as v,y as B,ae as D,z as S}from"./entry.9a7c477c.js";import{s as M}from"./basecomponent.esm.1cd4df10.js";import{s as j}from"./index.esm.8806deed.js";import"./baseicon.esm.7c1aeeb0.js";var G=`
@layer primevue {
    .p-contextmenu ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .p-contextmenu .p-submenu-list {
        position: absolute;
        min-width: 100%;
        z-index: 1;
    }

    .p-contextmenu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    .p-contextmenu .p-menuitem-text {
        line-height: 1;
    }

    .p-contextmenu .p-menuitem {
        position: relative;
    }

    .p-contextmenu .p-menuitem-link .p-submenu-icon {
        margin-left: auto;
    }

    .p-contextmenu-enter-from,
    .p-contextmenu-leave-active {
        opacity: 0;
    }

    .p-contextmenu-enter-active {
        transition: opacity 250ms;
    }
}
`,U={root:function(e){var t=e.instance;return["p-contextmenu p-component",{"p-input-filled":t.$primevue.config.inputStyle==="filled","p-ripple-disabled":t.$primevue.config.ripple===!1}]},menu:"p-contextmenu-root-list",menuitem:function(e){var t=e.instance,s=e.processedItem;return["p-menuitem",{"p-menuitem-active p-highlight":t.isItemActive(s),"p-focus":t.isItemFocused(s),"p-disabled":t.isItemDisabled(s)}]},content:"p-menuitem-content",action:"p-menuitem-link",icon:"p-menuitem-icon",label:"p-menuitem-text",submenuIcon:"p-submenu-icon",submenu:"p-submenu-list",separator:"p-menuitem-separator"},H=T.extend({name:"contextmenu",css:G,classes:U}),Z={name:"BaseContextMenu",extends:M,props:{model:{type:Array,default:null},appendTo:{type:String,default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},global:{type:Boolean,default:!1},tabindex:{type:Number,default:0},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},style:H,provide:function(){return{$parentInstance:this}}},F={name:"ContextMenuSub",hostName:"ContextMenu",extends:M,emits:["item-click","item-mouseenter"],props:{items:{type:Array,default:null},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},root:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,t,s){return e&&e.item?d.getItemValue(e.item[t],s):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getPTOptions:function(e,t,s){return this.ptm(e,{context:{item:t,active:this.isItemActive(t),focused:this.isItemFocused(t),disabled:this.isItemDisabled(t),index:s}})},isItemActive:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return d.isNotEmpty(e.items)},onItemClick:function(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-click",{originalEvent:e,processedItem:t,isFocus:!0})},onItemMouseEnter:function(e,t){this.$emit("item-mouseenter",{originalEvent:e,processedItem:t})},getAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&!e.getItemProp(t,"separator")}).length},getAriaPosInset:function(e){var t=this;return e-this.items.slice(0,e).filter(function(s){return t.isItemVisible(s)&&t.getItemProp(s,"separator")}).length+1},onEnter:function(){m.nestedPosition(this.$refs.container,this.level)},getMenuItemProps:function(e,t){return{action:c({class:this.cx("action"),tabindex:-1,"aria-hidden":!0},this.getPTOptions("action",e,t)),icon:c({class:[this.cx("icon"),this.getItemProp(e,"icon")]},this.getPTOptions("icon",e,t)),label:c({class:this.cx("label")},this.getPTOptions("label",e,t)),submenuicon:c({class:this.cx("submenuIcon")},this.getPTOptions("submenuicon",e,t))}}},components:{AngleRightIcon:j},directives:{ripple:z}},W=["tabindex"],X=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-highlight","data-p-focused","data-p-disabled"],Y=["onClick","onMouseenter"],q=["href","target"],J=["id"];function Q(i,e,t,s,a,n){var o=y("AngleRightIcon"),f=y("ContextMenuSub",!0),I=R("ripple");return u(),p(D,c({name:"p-contextmenusub",onEnter:n.onEnter},i.ptm("menu.transition")),{default:K(function(){return[t.root||t.visible?(u(),h("ul",c({key:0,ref:"container",tabindex:t.tabindex},i.ptm("menu")),[(u(!0),h(L,null,N(t.items,function(r,l){return u(),h(L,{key:n.getItemKey(r)},[n.isItemVisible(r)&&!n.getItemProp(r,"separator")?(u(),h("li",c({key:0,id:n.getItemId(r),style:n.getItemProp(r,"style"),class:[i.cx("menuitem",{processedItem:r}),n.getItemProp(r,"class")],role:"menuitem","aria-label":n.getItemLabel(r),"aria-disabled":n.isItemDisabled(r)||void 0,"aria-expanded":n.isItemGroup(r)?n.isItemActive(r):void 0,"aria-haspopup":n.isItemGroup(r)&&!n.getItemProp(r,"to")?"menu":void 0,"aria-level":t.level+1,"aria-setsize":n.getAriaSetSize(),"aria-posinset":n.getAriaPosInset(l)},n.getPTOptions("menuitem",r,l),{"data-p-highlight":n.isItemActive(r),"data-p-focused":n.isItemFocused(r),"data-p-disabled":n.isItemDisabled(r)}),[E("div",c({class:i.cx("content"),onClick:function(x){return n.onItemClick(x,r)},onMouseenter:function(x){return n.onItemMouseEnter(x,r)}},n.getPTOptions("content",r,l)),[t.templates.item?(u(),p(k(t.templates.item),{key:1,item:r.item,hasSubmenu:n.getItemProp(r,"items"),label:n.getItemLabel(r),props:n.getMenuItemProps(r,l)},null,8,["item","hasSubmenu","label","props"])):_((u(),h("a",c({key:0,href:n.getItemProp(r,"url"),class:i.cx("action"),target:n.getItemProp(r,"target"),tabindex:"-1","aria-hidden":"true"},n.getPTOptions("action",r,l)),[t.templates.itemicon?(u(),p(k(t.templates.itemicon),{key:0,item:r.item,class:w([i.cx("icon"),n.getItemProp(r,"icon")])},null,8,["item","class"])):n.getItemProp(r,"icon")?(u(),h("span",c({key:1,class:[i.cx("icon"),n.getItemProp(r,"icon")]},n.getPTOptions("icon",r,l)),null,16)):v("",!0),E("span",c({class:i.cx("label")},n.getPTOptions("label",r,l)),B(n.getItemLabel(r)),17),n.getItemProp(r,"items")?(u(),h(L,{key:2},[t.templates.submenuicon?(u(),p(k(t.templates.submenuicon),{key:0,active:n.isItemActive(r),class:w(i.cx("submenuIcon"))},null,8,["active","class"])):(u(),p(o,c({key:1,class:i.cx("submenuIcon")},n.getPTOptions("submenuicon",r,l)),null,16,["class"]))],64)):v("",!0)],16,q)),[[I]])],16,Y),n.isItemVisible(r)&&n.isItemGroup(r)?(u(),p(f,c({key:0,id:n.getItemId(r)+"_list",role:"menu",class:i.cx("submenu"),menuId:t.menuId,focusedItemId:t.focusedItemId,items:r.items,templates:t.templates,activeItemPath:t.activeItemPath,level:t.level+1,visible:n.isItemActive(r)&&n.isItemGroup(r),pt:i.pt,unstyled:i.unstyled,onItemClick:e[0]||(e[0]=function(b){return i.$emit("item-click",b)}),onItemMouseenter:e[1]||(e[1]=function(b){return i.$emit("item-mouseenter",b)})},i.ptm("submenu")),null,16,["id","class","menuId","focusedItemId","items","templates","activeItemPath","level","visible","pt","unstyled"])):v("",!0)],16,X)):v("",!0),n.isItemVisible(r)&&n.getItemProp(r,"separator")?(u(),h("li",c({key:1,id:n.getItemId(r),style:n.getItemProp(r,"style"),class:[i.cx("separator"),n.getItemProp(r,"class")],role:"separator"},i.ptm("separator")),null,16,J)):v("",!0)],64)}),128))],16,W)):v("",!0)]}),_:1},16,["onEnter"])}F.render=Q;var $={name:"ContextMenu",extends:Z,inheritAttrs:!1,emits:["focus","blur","show","hide"],target:null,outsideClickListener:null,resizeListener:null,documentContextMenuListener:null,pageX:null,pageY:null,container:null,list:null,data:function(){return{id:this.$attrs.id,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],visible:!1,submenuVisible:!1}},watch:{"$attrs.id":function(e){this.id=e||C()},activeItemPath:function(e){d.isNotEmpty(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):this.visible||(this.unbindOutsideClickListener(),this.unbindResizeListener())}},mounted:function(){this.id=this.id||C(),this.global&&this.bindDocumentContextMenuListener()},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.unbindDocumentContextMenuListener(),this.container&&this.autoZIndex&&P.clear(this.container),this.target=null,this.container=null},methods:{getItemProp:function(e,t){return e?d.getItemValue(e[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemGroup:function(e){return d.isNotEmpty(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&d.isNotEmpty(e.items)},toggle:function(e){this.visible?this.hide():this.show(e)},show:function(e){this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},m.focus(this.list),this.pageX=e.pageX,this.pageY=e.pageY,this.visible?this.position():this.visible=!0,e.stopPropagation(),e.preventDefault()},hide:function(){this.visible=!1,this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""}},onFocus:function(e){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:-1,level:0,parentKey:""},this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.$emit("blur",e)},onKeyDown:function(e){var t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&d.isPrintableCharacter(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e){var t=e.processedItem,s=e.isFocus;if(!d.isEmpty(t)){var a=t.index,n=t.key,o=t.level,f=t.parentKey,I=t.items,r=d.isNotEmpty(I),l=this.activeItemPath.filter(function(b){return b.parentKey!==f&&b.parentKey!==n});r&&(l.push(t),this.submenuVisible=!0),this.focusedItemInfo={index:a,level:o,parentKey:f},this.activeItemPath=l,s&&m.focus(this.list)}},onItemClick:function(e){var t=e.processedItem,s=this.isProccessedItemGroup(t),a=this.isSelected(t);if(a){var n=t.index,o=t.key,f=t.level,I=t.parentKey;this.activeItemPath=this.activeItemPath.filter(function(r){return o!==r.key&&o.startsWith(r.key)}),this.focusedItemInfo={index:n,level:f,parentKey:I},m.focus(this.list)}else s?this.onItemChange(e):this.hide()},onItemMouseEnter:function(e){this.onItemChange(e)},onArrowDownKey:function(e){var t=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,t),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey){if(this.focusedItemInfo.index!==-1){var t=this.visibleItems[this.focusedItemInfo.index],s=this.isProccessedItemGroup(t);!s&&this.onItemChange({originalEvent:e,processedItem:t})}this.popup&&this.hide(),e.preventDefault()}else{var a=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,a),e.preventDefault()}},onArrowLeftKey:function(e){var t=this,s=this.visibleItems[this.focusedItemInfo.index],a=this.activeItemPath.find(function(o){return o.key===s.parentKey}),n=d.isEmpty(s.parent);n||(this.focusedItemInfo={index:-1,parentKey:a?a.parentKey:""},this.searchValue="",this.onArrowDownKey(e)),this.activeItemPath=this.activeItemPath.filter(function(o){return o.parentKey!==t.focusedItemInfo.parentKey}),e.preventDefault()},onArrowRightKey:function(e){var t=this.visibleItems[this.focusedItemInfo.index],s=this.isProccessedItemGroup(t);s&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.searchValue="",this.onArrowDownKey(e)),e.preventDefault()},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var t=m.findSingle(this.list,'li[id="'.concat("".concat(this.focusedItemId),'"]')),s=t&&m.findSingle(t,'a[data-pc-section="action"]');s?s.click():t&&t.click();var a=this.visibleItems[this.focusedItemInfo.index],n=this.isProccessedItemGroup(a);!n&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){this.hide(),!this.popup&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex()),e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var t=this.visibleItems[this.focusedItemInfo.index],s=this.isProccessedItemGroup(t);!s&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()},onEnter:function(e){m.addStyles(e,{position:"absolute"}),this.position(),this.autoZIndex&&P.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu)},onAfterEnter:function(){this.bindOutsideClickListener(),this.bindResizeListener(),this.$emit("show"),m.focus(this.list)},onLeave:function(){this.$emit("hide"),this.container=null},onAfterLeave:function(e){this.autoZIndex&&P.clear(e),this.unbindOutsideClickListener(),this.unbindResizeListener()},position:function(){var e=this.pageX+1,t=this.pageY+1,s=this.container.offsetParent?this.container.offsetWidth:m.getHiddenElementOuterWidth(this.container),a=this.container.offsetParent?this.container.offsetHeight:m.getHiddenElementOuterHeight(this.container),n=m.getViewport();e+s-document.body.scrollLeft>n.width&&(e-=s),t+a-document.body.scrollTop>n.height&&(t-=a),e<document.body.scrollLeft&&(e=document.body.scrollLeft),t<document.body.scrollTop&&(t=document.body.scrollTop),this.container.style.left=e+"px",this.container.style.top=t+"px"},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var s=e.container&&!e.container.contains(t.target),a=e.visible?!(e.target&&(e.target===t.target||e.target.contains(t.target))):!0;s&&a&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.visible&&!m.isTouchDevice()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindDocumentContextMenuListener:function(){var e=this;this.documentContextMenuListener||(this.documentContextMenuListener=function(t){t.button===2&&e.show(t)},document.addEventListener("contextmenu",this.documentContextMenuListener))},unbindDocumentContextMenuListener:function(){this.documentContextMenuListener&&(document.removeEventListener("contextmenu",this.documentContextMenuListener),this.documentContextMenuListener=null)},isItemMatched:function(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidItem(t)})},findLastItemIndex:function(){var e=this;return d.findLastIndex(this.visibleItems,function(t){return e.isValidItem(t)})},findNextItemIndex:function(e){var t=this,s=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(a){return t.isValidItem(a)}):-1;return s>-1?s+e+1:e},findPrevItemIndex:function(e){var t=this,s=e>0?d.findLastIndex(this.visibleItems.slice(0,e),function(a){return t.isValidItem(a)}):-1;return s>-1?s:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidSelectedItem(t)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,t){var s=this;this.searchValue=(this.searchValue||"")+t;var a=-1,n=!1;return this.focusedItemInfo.index!==-1?(a=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(o){return s.isItemMatched(o)}),a=a===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(o){return s.isItemMatched(o)}):a+this.focusedItemInfo.index):a=this.visibleItems.findIndex(function(o){return s.isItemMatched(o)}),a!==-1&&(n=!0),a===-1&&this.focusedItemInfo.index===-1&&(a=this.findFirstFocusedItemIndex()),a!==-1&&this.changeFocusedItemIndex(e,a),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){s.searchValue="",s.searchTimeout=null},500),n},changeFocusedItemIndex:function(e,t){this.focusedItemInfo.index!==t&&(this.focusedItemInfo.index=t,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,t=e!==-1?"".concat(this.id,"_").concat(e):this.focusedItemId,s=m.findSingle(this.list,'li[id="'.concat(t,'"]'));s&&s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var t=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",o=[];return e&&e.forEach(function(f,I){var r=(n!==""?n+"_":"")+I,l={item:f,index:I,level:s,key:r,parent:a,parentKey:n};l.items=t.createProcessedItems(f.items,s+1,l,r),o.push(l)}),o},containerRef:function(e){this.container=e},listRef:function(e){this.list=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,t=this.activeItemPath.find(function(s){return s.key===e.focusedItemInfo.parentKey});return t?t.items:this.processedItems},focusedItemId:function(){return this.focusedItemInfo.index!==-1?"".concat(this.id).concat(d.isNotEmpty(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{ContextMenuSub:F,Portal:V}};function g(i){"@babel/helpers - typeof";return g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(i)}function A(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(i);e&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(i,a).enumerable})),t.push.apply(t,s)}return t}function O(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?A(Object(t),!0).forEach(function(s){ee(i,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach(function(s){Object.defineProperty(i,s,Object.getOwnPropertyDescriptor(t,s))})}return i}function ee(i,e,t){return e=te(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function te(i){var e=ie(i,"string");return g(e)==="symbol"?e:String(e)}function ie(i,e){if(g(i)!=="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var s=t.call(i,e||"default");if(g(s)!=="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function ne(i,e,t,s,a,n){var o=y("ContextMenuSub"),f=y("Portal");return u(),p(f,{appendTo:i.appendTo},{default:K(function(){return[S(D,c({name:"p-contextmenu",onEnter:n.onEnter,onAfterEnter:n.onAfterEnter,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave},i.ptm("transition")),{default:K(function(){return[a.visible?(u(),h("div",c({key:0,ref:n.containerRef,class:i.cx("root")},O(O({},i.$attrs),i.ptm("root")),{"data-pc-name":"contextmenu"}),[S(o,{ref:n.listRef,id:a.id+"_list",class:w(i.cx("menu")),role:"menubar",root:!0,tabindex:i.tabindex,"aria-orientation":"vertical","aria-activedescendant":a.focused?n.focusedItemId:void 0,menuId:a.id,focusedItemId:a.focused?n.focusedItemId:void 0,items:n.processedItems,templates:i.$slots,activeItemPath:a.activeItemPath,"aria-labelledby":i.ariaLabelledby,"aria-label":i.ariaLabel,level:0,visible:a.submenuVisible,pt:i.pt,unstyled:i.unstyled,onFocus:n.onFocus,onBlur:n.onBlur,onKeydown:n.onKeyDown,onItemClick:n.onItemClick,onItemMouseenter:n.onItemMouseEnter},null,8,["id","class","tabindex","aria-activedescendant","menuId","focusedItemId","items","templates","activeItemPath","aria-labelledby","aria-label","visible","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter"])],16)):v("",!0)]}),_:1},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:1},8,["appendTo"])}$.render=ne;export{$ as default};
