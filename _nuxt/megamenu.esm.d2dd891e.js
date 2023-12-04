import{s as z}from"./index.esm.f4f84253.js";import{a2 as D,a4 as w,a3 as o,a5 as M,a6 as g,aa as c,a8 as T,i as K,a9 as O,t as l,v as d,y as S,_ as b,W as v,X as L,x as P,ag as N,V as y,ad as E,ac as k,Y as B,ab as x,z as A,ai as R,aj as G}from"./entry.3eac7289.js";import{s as F}from"./basecomponent.esm.06395008.js";import{s as H}from"./index.esm.d0c80ee6.js";import{s as U}from"./index.esm.25496dc6.js";import"./baseicon.esm.1237762d.js";var q=`
@layer primevue {
    .p-megamenu {
        display: flex;
        position: relative;
    }

    .p-megamenu-root-list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .p-megamenu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    .p-megamenu .p-menuitem-text {
        line-height: 1;
    }

    .p-megamenu-panel {
        display: none;
        width: auto;
        z-index: 1;
        left: 0;
        min-width: 100%;
    }

    .p-megamenu-panel:not(.p-megamenu-mobile) {
        position: absolute;
    }

    .p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {
        display: block;
    }

    .p-megamenu-submenu {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .p-megamenu-button {
        display: none;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }

    /* Horizontal */
    .p-megamenu-horizontal {
        align-items: center;
    }

    .p-megamenu-horizontal .p-megamenu-root-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .p-megamenu-horizontal .p-megamenu-end {
        margin-left: auto;
        align-self: center;
    }

    /* Vertical */
    .p-megamenu-vertical {
        flex-direction: column;
    }

    .p-megamenu-vertical .p-megamenu-root-list {
        flex-direction: column;
    }

    .p-megamenu-vertical:not(.p-megamenu-mobile) .p-megamenu-root-list > .p-menuitem-active > .p-megamenu-panel {
        left: 100%;
        top: 0;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-menuitem > .p-menuitem-content > .p-menuitem-link > .p-submenu-icon {
        margin-left: auto;
    }

    .p-megamenu-grid {
        display: flex;
    }

    .p-megamenu-col-2,
    .p-megamenu-col-3,
    .p-megamenu-col-4,
    .p-megamenu-col-6,
    .p-megamenu-col-12 {
        flex: 0 0 auto;
        padding: 0.5rem;
    }

    .p-megamenu-col-2 {
        width: 16.6667%;
    }

    .p-megamenu-col-3 {
        width: 25%;
    }

    .p-megamenu-col-4 {
        width: 33.3333%;
    }

    .p-megamenu-col-6 {
        width: 50%;
    }

    .p-megamenu-col-12 {
        width: 100%;
    }

    .p-megamenu.p-megamenu-mobile .p-megamenu-button {
        display: flex;
    }

    .p-megamenu.p-megamenu-mobile .p-megamenu-root-list {
        position: absolute;
        display: none;
        width: 100%;
    }

    .p-megamenu.p-megamenu-mobile .p-submenu-list {
        width: 100%;
        position: static;
        box-shadow: none;
        border: 0 none;
    }

    .p-megamenu.p-megamenu-mobile .p-megamenu-root-list .p-menuitem {
        width: 100%;
        position: static;
    }

    .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list {
        display: flex;
        flex-direction: column;
        top: 100%;
        left: 0;
        z-index: 1;
    }

    .p-megamenu.p-megamenu-mobile .p-megamenu-grid {
        flex-wrap: wrap;
        overflow: auto;
        max-height: 90%;
    }
}
`,j={submenu:function(e){var n=e.instance,s=e.processedItem;return{display:n.isItemActive(s)?"block":"none"}}},W={root:function(e){var n=e.instance;return["p-megamenu p-component",{"p-megamenu-mobile":n.queryMatches,"p-megamenu-mobile-active":n.mobileActive,"p-megamenu-horizontal":n.horizontal,"p-megamenu-vertical":n.vertical}]},start:"p-megamenu-start",menubutton:"p-megamenu-button",menu:"p-megamenu-root-list",submenuHeader:function(e){var n=e.instance,s=e.processedItem;return["p-megamenu-submenu-header p-submenu-header",{"p-disabled":n.isItemDisabled(s)}]},menuitem:function(e){var n=e.instance,s=e.processedItem;return["p-menuitem",{"p-menuitem-active p-highlight":n.isItemActive(s),"p-focus":n.isItemFocused(s),"p-disabled":n.isItemDisabled(s)}]},content:"p-menuitem-content",action:"p-menuitem-link",icon:"p-menuitem-icon",label:"p-menuitem-text",submenuIcon:"p-submenu-icon",panel:"p-megamenu-panel",grid:"p-megamenu-grid",column:function(e){var n=e.instance,s=e.processedItem,u=n.isItemGroup(s)?s.items.length:0,i;if(n.$parentInstance.queryMatches)i="p-megamenu-col-12";else switch(u){case 2:i="p-megamenu-col-6";break;case 3:i="p-megamenu-col-4";break;case 4:i="p-megamenu-col-3";break;case 6:i="p-megamenu-col-2";break;default:i="p-megamenu-col-12";break}return i},submenu:"p-submenu-list p-megamenu-submenu",submenuLabel:"p-menuitem-text",separator:"p-menuitem-separator",end:"p-megamenu-end"},X=D.extend({name:"megamenu",css:q,classes:W,inlineStyles:j}),Y={name:"BaseMegaMenu",extends:F,props:{model:{type:Array,default:null},orientation:{type:String,default:"horizontal"},breakpoint:{type:String,default:"960px"},disabled:{type:Boolean,default:!1},tabindex:{type:Number,default:0},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},style:X,provide:function(){return{$parentInstance:this}}},C={name:"MegaMenuSub",hostName:"MegaMenu",extends:F,emits:["item-click","item-mouseenter"],props:{menuId:{type:String,default:null},focusedItemId:{type:String,default:null},horizontal:{type:Boolean,default:!1},submenu:{type:Object,default:null},mobileActive:{type:Boolean,default:!1},items:{type:Array,default:null},level:{type:Number,default:0},templates:{type:Object,default:null},activeItem:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getSubListId:function(e){return"".concat(this.getItemId(e),"_list")},getSubListKey:function(e){return this.getSubListId(e)},getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,n,s){return e&&e.item?o.getItemValue(e.item[n],s):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getPTOptions:function(e,n,s){return this.ptm(s,{context:{item:e,index:n,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e)}})},isItemActive:function(e){return o.isNotEmpty(this.activeItem)?this.activeItem.key===e.key:!1},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return o.isNotEmpty(e.items)},onItemClick:function(e,n){this.getItemProp(n,"command",{originalEvent:e,item:n.item}),this.$emit("item-click",{originalEvent:e,processedItem:n,isFocus:!0})},onItemMouseEnter:function(e,n){this.$emit("item-mouseenter",{originalEvent:e,processedItem:n})},getAriaSetSize:function(){var e=this;return this.items.filter(function(n){return e.isItemVisible(n)&&!e.getItemProp(n,"separator")}).length},getAriaPosInset:function(e){var n=this;return e-this.items.slice(0,e).filter(function(s){return n.isItemVisible(s)&&n.getItemProp(s,"separator")}).length+1},getMenuItemProps:function(e,n){return{action:c({class:this.cx("action"),tabindex:-1,"aria-hidden":!0},this.getPTOptions(e,n,"action")),icon:c({class:[this.cx("icon"),this.getItemProp(e,"icon")]},this.getPTOptions(e,n,"icon")),label:c({class:this.cx("label")},this.getPTOptions(e,n,"label")),submenuicon:c({class:this.cx("submenuIcon")},this.getPTOptions(e,n,"submenuIcon"))}}},components:{AngleRightIcon:U,AngleDownIcon:H},directives:{ripple:T}},Z=["tabindex"],J=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-highlight","data-p-focused","data-p-disabled"],Q=["onClick","onMouseenter"],_=["href","target"],$=["id"];function ee(t,e,n,s,u,i){var m=K("MegaMenuSub",!0),h=O("ripple");return l(),d("ul",c({class:n.level===0?t.cx("menu"):t.cx("submenu"),tabindex:n.tabindex},n.level===0?t.ptm("menu"):t.ptm("submenu")),[n.submenu?(l(),d("li",c({key:0,class:[t.cx("submenuHeader",{submenu:n.submenu}),i.getItemProp(n.submenu,"class")],style:i.getItemProp(n.submenu,"style"),role:"presentation"},t.ptm("submenuHeader")),S(i.getItemLabel(n.submenu)),17)):b("",!0),(l(!0),d(v,null,L(n.items,function(a,r){return l(),d(v,{key:i.getItemKey(a)},[i.isItemVisible(a)&&!i.getItemProp(a,"separator")?(l(),d("li",c({key:0,id:i.getItemId(a),style:i.getItemProp(a,"style"),class:[t.cx("menuitem",{processedItem:a}),i.getItemProp(a,"class")],role:"menuitem","aria-label":i.getItemLabel(a),"aria-disabled":i.isItemDisabled(a)||void 0,"aria-expanded":i.isItemGroup(a)?i.isItemActive(a):void 0,"aria-haspopup":i.isItemGroup(a)&&!i.getItemProp(a,"to")?"menu":void 0,"aria-level":n.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(r)},i.getPTOptions(a,r,"menuitem"),{"data-p-highlight":i.isItemActive(a),"data-p-focused":i.isItemFocused(a),"data-p-disabled":i.isItemDisabled(a)}),[P("div",c({class:t.cx("content"),onClick:function(f){return i.onItemClick(f,a)},onMouseenter:function(f){return i.onItemMouseEnter(f,a)}},i.getPTOptions(a,r,"content")),[n.templates.item?(l(),y(k(n.templates.item),{key:1,item:a.item,hasSubmenu:i.isItemGroup(a),label:i.getItemLabel(a),props:i.getMenuItemProps(a,r)},null,8,["item","hasSubmenu","label","props"])):N((l(),d("a",c({key:0,href:i.getItemProp(a,"url"),class:t.cx("action"),target:i.getItemProp(a,"target"),tabindex:"-1","aria-hidden":"true"},i.getPTOptions(a,r,"action")),[n.templates.itemicon?(l(),y(k(n.templates.itemicon),{key:0,item:a.item,class:E([t.cx("icon"),i.getItemProp(a,"icon")])},null,8,["item","class"])):i.getItemProp(a,"icon")?(l(),d("span",c({key:1,class:[t.cx("icon"),i.getItemProp(a,"icon")]},i.getPTOptions(a,r,"icon")),null,16)):b("",!0),P("span",c({class:n.level===0?t.cx("label"):t.cx("submenuLabel")},n.level===0?i.getPTOptions(a,r,"label"):i.getPTOptions(a,r,"submenuLabel")),S(i.getItemLabel(a)),17),i.isItemGroup(a)?(l(),d(v,{key:2},[n.templates.submenuicon?(l(),y(k(n.templates.submenuicon),c({key:0,active:i.isItemActive(a),class:t.cx("submenuIcon")},i.getPTOptions(a,r,"submenuIcon")),null,16,["active","class"])):(l(),y(k(n.horizontal||n.mobileActive?"AngleDownIcon":"AngleRightIcon"),c({key:1,class:t.cx("submenuIcon")},i.getPTOptions(a,r,"submenuIcon")),null,16,["class"]))],64)):b("",!0)],16,_)),[[h]])],16,Q),i.isItemVisible(a)&&i.isItemGroup(a)?(l(),d("div",c({key:0,class:t.cx("panel")},t.ptm("panel")),[P("div",c({class:t.cx("grid")},t.ptm("grid")),[(l(!0),d(v,null,L(a.items,function(I){return l(),d("div",c({key:i.getItemKey(I),class:t.cx("column",{processedItem:a})},t.ptm("column")),[(l(!0),d(v,null,L(I,function(f){return l(),y(m,{key:i.getSubListKey(f),id:i.getSubListId(f),style:B(t.sx("submenu",!0,{processedItem:a})),role:"menu",menuId:n.menuId,focusedItemId:n.focusedItemId,submenu:f,items:f.items,templates:n.templates,level:n.level+1,mobileActive:n.mobileActive,pt:t.pt,unstyled:t.unstyled,onItemClick:e[0]||(e[0]=function(p){return t.$emit("item-click",p)}),onItemMouseenter:e[1]||(e[1]=function(p){return t.$emit("item-mouseenter",p)})},null,8,["id","style","menuId","focusedItemId","submenu","items","templates","level","mobileActive","pt","unstyled"])}),128))],16)}),128))],16)],16)):b("",!0)],16,J)):b("",!0),i.isItemVisible(a)&&i.getItemProp(a,"separator")?(l(),d("li",c({key:1,id:i.getItemId(a),class:[t.cx("separator"),i.getItemProp(a,"class")],style:i.getItemProp(a,"style"),role:"separator"},t.ptm("separator")),null,16,$)):b("",!0)],64)}),128))],16,Z)}C.render=ee;var te={name:"MegaMenu",extends:Y,emits:["focus","blur"],outsideClickListener:null,resizeListener:null,matchMediaListener:null,container:null,menubar:null,searchTimeout:null,searchValue:null,data:function(){return{id:this.$attrs.id,mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,key:"",parentKey:""},activeItem:null,dirty:!1,query:null,queryMatches:!1}},watch:{"$attrs.id":function(e){this.id=e||w()},activeItem:function(e){o.isNotEmpty(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},mounted:function(){this.id=this.id||w(),this.bindMatchMediaListener()},beforeUnmount:function(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener()},methods:{getItemProp:function(e,n){return e?o.getItemValue(e[n]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemGroup:function(e){return o.isNotEmpty(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&o.isNotEmpty(e.items)},toggle:function(e){var n=this;this.mobileActive?(this.mobileActive=!1,M.clear(this.menubar),this.hide()):(this.mobileActive=!0,M.set("menu",this.menubar,this.$primevue.config.zIndex.menu),setTimeout(function(){n.show()},1)),this.bindOutsideClickListener(),e.preventDefault()},show:function(){this.focusedItemInfo={index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},g.focus(this.menubar)},hide:function(e,n){var s=this;this.mobileActive&&(this.mobileActive=!1,setTimeout(function(){g.focus(s.$refs.menubutton)},0)),this.activeItem=null,this.focusedItemInfo={index:-1,key:"",parentKey:""},n&&g.focus(this.menubar),this.dirty=!1},onFocus:function(e){if(this.focused=!0,this.focusedItemInfo.index===-1){var n=this.findFirstFocusedItemIndex(),s=this.findVisibleItem(n);this.focusedItemInfo={index:n,key:s.key,parentKey:s.parentKey}}this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,key:"",parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown:function(e){if(this.disabled){e.preventDefault();return}var n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&o.isPrintableCharacter(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e){var n=e.processedItem,s=e.isFocus;if(!o.isEmpty(n)){var u=n.index,i=n.key,m=n.parentKey,h=n.items,a=o.isNotEmpty(h);a&&(this.activeItem=n),this.focusedItemInfo={index:u,key:i,parentKey:m},a&&(this.dirty=!0),s&&g.focus(this.menubar)}},onItemClick:function(e){var n=e.originalEvent,s=e.processedItem,u=this.isProccessedItemGroup(s),i=o.isEmpty(s.parent),m=this.isSelected(s);if(m){var h=s.index,a=s.key,r=s.parentKey;this.activeItem=null,this.focusedItemInfo={index:h,key:a,parentKey:r},this.dirty=!i,g.focus(this.menubar)}else if(u)this.onItemChange(e);else{var I=i?s:this.activeItem;this.hide(n),this.changeFocusedItemInfo(n,I?I.index:-1),this.mobileActive=!1,g.focus(this.menubar)}},onItemMouseEnter:function(e){!this.mobileActive&&this.dirty&&this.onItemChange(e)},menuButtonClick:function(e){this.toggle(e)},menuButtonKeydown:function(e){(e.code==="Enter"||e.code==="Space")&&this.menuButtonClick(e)},onArrowDownKey:function(e){if(this.horizontal)if(o.isNotEmpty(this.activeItem)&&this.activeItem.key===this.focusedItemInfo.key)this.focusedItemInfo={index:-1,key:"",parentKey:this.activeItem.key};else{var n=this.findVisibleItem(this.focusedItemInfo.index),s=this.isProccessedItemGroup(n);s&&(this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo={index:-1,key:n.key,parentKey:n.parentKey},this.searchValue="")}var u=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,u),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.horizontal){if(this.focusedItemInfo.index!==-1){var n=this.findVisibleItem(this.focusedItemInfo.index),s=this.isProccessedItemGroup(n);!s&&o.isNotEmpty(this.activeItem)&&(this.focusedItemInfo.index===0?(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key,parentKey:this.activeItem.parentKey},this.activeItem=null):this.changeFocusedItemInfo(e,this.findFirstItemIndex()))}e.preventDefault()}else{var u=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,u),e.preventDefault()}},onArrowLeftKey:function(e){var n=this.findVisibleItem(this.focusedItemInfo.index),s=this.isProccessedItemGroup(n);if(s){if(this.horizontal){var u=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,u)}}else{this.vertical&&o.isNotEmpty(this.activeItem)&&n.columnIndex===0&&(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key,parentKey:this.activeItem.parentKey},this.activeItem=null);var i=n.columnIndex-1,m=this.visibleItems.findIndex(function(h){return h.columnIndex===i});m!==-1&&this.changeFocusedItemInfo(e,m)}e.preventDefault()},onArrowRightKey:function(e){var n=this.findVisibleItem(this.focusedItemInfo.index),s=this.isProccessedItemGroup(n);if(s){if(this.vertical)if(o.isNotEmpty(this.activeItem)&&this.activeItem.key===n.key)this.focusedItemInfo={index:-1,key:"",parentKey:this.activeItem.key};else{var u=this.findVisibleItem(this.focusedItemInfo.index),i=this.isProccessedItemGroup(u);i&&(this.onItemChange({originalEvent:e,processedItem:u}),this.focusedItemInfo={index:-1,key:u.key,parentKey:u.parentKey},this.searchValue="")}var m=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,m)}else{var h=n.columnIndex+1,a=this.visibleItems.findIndex(function(r){return r.columnIndex===h});a!==-1&&this.changeFocusedItemInfo(e,a)}e.preventDefault()},onHomeKey:function(e){this.changeFocusedItemInfo(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemInfo(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var n=g.findSingle(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),s=n&&g.findSingle(n,'a[data-pc-section="action"]');s?s.click():n&&n.click();var u=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(u);!i&&this.changeFocusedItemInfo(e,this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){o.isNotEmpty(this.activeItem)&&(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key},this.activeItem=null),e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var n=this.findVisibleItem(this.focusedItemInfo.index),s=this.isProccessedItemGroup(n);!s&&this.onItemChange({originalEvent:e,processedItem:n})}this.hide()},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){var s=e.container&&!e.container.contains(n.target),u=!(e.target&&(e.target===n.target||e.target.contains(n.target)));s&&u&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(n){g.isTouchDevice()||e.hide(n,!0),e.mobileActive=!1},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var n=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=n,this.queryMatches=n.matches,this.matchMediaListener=function(){e.queryMatches=n.matches,e.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return o.isNotEmpty(this.activeItem)?this.activeItem.key===e.key:!1},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(n){return e.isValidItem(n)})},findLastItemIndex:function(){var e=this;return o.findLastIndex(this.visibleItems,function(n){return e.isValidItem(n)})},findNextItemIndex:function(e){var n=this,s=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(u){return n.isValidItem(u)}):-1;return s>-1?s+e+1:e},findPrevItemIndex:function(e){var n=this,s=e>0?o.findLastIndex(this.visibleItems.slice(0,e),function(u){return n.isValidItem(u)}):-1;return s>-1?s:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(n){return e.isValidSelectedItem(n)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},findVisibleItem:function(e){return o.isNotEmpty(this.visibleItems)?this.visibleItems[e]:null},searchItems:function(e,n){var s=this;this.searchValue=(this.searchValue||"")+n;var u=-1,i=!1;return this.focusedItemInfo.index!==-1?(u=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(m){return s.isItemMatched(m)}),u=u===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(m){return s.isItemMatched(m)}):u+this.focusedItemInfo.index):u=this.visibleItems.findIndex(function(m){return s.isItemMatched(m)}),u!==-1&&(i=!0),u===-1&&this.focusedItemInfo.index===-1&&(u=this.findFirstFocusedItemIndex()),u!==-1&&this.changeFocusedItemInfo(e,u),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){s.searchValue="",s.searchTimeout=null},500),i},changeFocusedItemInfo:function(e,n){var s=this.findVisibleItem(n);this.focusedItemInfo.index=n,this.focusedItemInfo.key=o.isNotEmpty(s)?s.key:"",this.scrollInView()},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,n=e!==-1?"".concat(this.id,"_").concat(e):this.focusedItemId,s=g.findSingle(this.menubar,'li[id="'.concat(n,'"]'));s&&s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var n=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",m=arguments.length>4?arguments[4]:void 0,h=[];return e&&e.forEach(function(a,r){var I=(i!==""?i+"_":"")+(m!==void 0?m+"_":"")+r,f={item:a,index:r,level:s,key:I,parent:u,parentKey:i,columnIndex:m!==void 0?m:u.columnIndex!==void 0?u.columnIndex:r};f.items=s===0&&a.items&&a.items.length>0?a.items.map(function(p,V){return n.createProcessedItems(p,s+1,f,I,V)}):n.createProcessedItems(a.items,s+1,f,I),h.push(f)}),h},containerRef:function(e){this.container=e},menubarRef:function(e){this.menubar=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=o.isNotEmpty(this.activeItem)?this.activeItem:null;return e&&e.key===this.focusedItemInfo.parentKey?e.items.reduce(function(n,s){return s.forEach(function(u){u.items.forEach(function(i){n.push(i)})}),n},[]):this.processedItems},horizontal:function(){return this.orientation==="horizontal"},vertical:function(){return this.orientation==="vertical"},focusedItemId:function(){return o.isNotEmpty(this.focusedItemInfo.key)?"".concat(this.id,"_").concat(this.focusedItemInfo.key):null}},components:{MegaMenuSub:C,BarsIcon:z}},ne=["id"],ie=["aria-haspopup","aria-expanded","aria-controls","aria-label"];function se(t,e,n,s,u,i){var m=K("BarsIcon"),h=K("MegaMenuSub");return l(),d("div",c({ref:i.containerRef,id:u.id,class:t.cx("root")},t.ptm("root"),{"data-pc-name":"megamenu"}),[t.$slots.start?(l(),d("div",c({key:0,class:t.cx("start")},t.ptm("start")),[x(t.$slots,"start")],16)):b("",!0),x(t.$slots,"menubutton",{id:u.id,class:E(t.cx("menubutton")),toggleCallback:function(r){return i.menuButtonClick(r)}},function(){var a;return[t.model&&t.model.length>0?(l(),d("a",c({key:0,ref:"menubutton",role:"button",tabindex:"0",class:t.cx("menubutton"),"aria-haspopup":!!(t.model.length&&t.model.length>0),"aria-expanded":u.mobileActive,"aria-controls":u.id,"aria-label":(a=t.$primevue.config.locale.aria)===null||a===void 0?void 0:a.navigation,onClick:e[0]||(e[0]=function(r){return i.menuButtonClick(r)}),onKeydown:e[1]||(e[1]=function(r){return i.menuButtonKeydown(r)})},t.ptm("menubutton")),[x(t.$slots,"menubuttonicon",{},function(){return[A(m,R(G(t.ptm("menubuttonicon"))),null,16)]})],16,ie)):b("",!0)]}),A(h,{ref:i.menubarRef,id:u.id+"_list",tabindex:t.disabled?-1:t.tabindex,role:"menubar","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-disabled":t.disabled||void 0,"aria-orientation":t.orientation,"aria-activedescendant":u.focused?i.focusedItemId:void 0,menuId:u.id,focusedItemId:u.focused?i.focusedItemId:void 0,items:i.processedItems,horizontal:i.horizontal,templates:t.$slots,activeItem:u.activeItem,mobileActive:u.mobileActive,level:0,pt:t.pt,unstyled:t.unstyled,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter},null,8,["id","tabindex","aria-label","aria-labelledby","aria-disabled","aria-orientation","aria-activedescendant","menuId","focusedItemId","items","horizontal","templates","activeItem","mobileActive","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter"]),t.$slots.end?(l(),d("div",c({key:1,class:t.cx("end")},t.ptm("end")),[x(t.$slots,"end")],16)):b("",!0)],16,ne)}te.render=se;export{te as default};
