import{s as D}from"./index.esm.08a68f7a.js";import{a1 as V,a3 as S,a2 as c,a4 as k,a5 as I,a9 as l,a7 as z,i as K,a8 as T,t as m,v as h,W as L,X as B,x as A,ag as R,V as v,ad as w,ac as P,aa as p,y as j,Y as N,ab as x,z as M,ai as G,aj as U}from"./entry.9a7c477c.js";import{s as E}from"./basecomponent.esm.1cd4df10.js";import{s as q}from"./index.esm.b6904c3e.js";import{s as H}from"./index.esm.8806deed.js";import"./baseicon.esm.7c1aeeb0.js";var W=`
@layer primevue {
    .p-menubar {
        display: flex;
        align-items: center;
    }

    .p-menubar ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .p-menubar .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    .p-menubar .p-menuitem-text {
        line-height: 1;
    }

    .p-menubar .p-menuitem {
        position: relative;
    }

    .p-menubar-root-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .p-menubar-root-list > li ul {
        display: none;
        z-index: 1;
    }

    .p-menubar-root-list > .p-menuitem-active > .p-submenu-list {
        display: block;
    }

    .p-menubar .p-submenu-list {
        display: none;
        position: absolute;
        z-index: 1;
    }

    .p-menubar .p-submenu-list > .p-menuitem-active > .p-submenu-list {
        display: block;
        left: 100%;
        top: 0;
    }

    .p-menubar .p-submenu-list .p-menuitem .p-menuitem-content .p-menuitem-link .p-submenu-icon {
        margin-left: auto;
    }

    .p-menubar .p-menubar-end {
        margin-left: auto;
        align-self: center;
    }

    .p-menubar-button {
        display: none;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }

    .p-menubar.p-menubar-mobile {
        position: relative; 
    }

    .p-menubar.p-menubar-mobile .p-menubar-button {
        display: flex;
    }

    .p-menubar.p-menubar-mobile .p-menubar-root-list {
        position: absolute;
        display: none;
        width: 100%;
    }

    .p-menubar.p-menubar-mobile .p-submenu-list {
        width: 100%;
        position: static;
        box-shadow: none;
        border: 0 none;
    }

    .p-menubar.p-menubar-mobile .p-menubar-root-list .p-menuitem {
        width: 100%;
        position: static;
    }

    .p-menubar.p-menubar-mobile-active .p-menubar-root-list {
        display: flex;
        flex-direction: column;
        top: 100%;
        left: 0;
        z-index: 1;
    }
}
`,X={submenu:function(e){var n=e.instance,i=e.processedItem;return{display:n.isItemActive(i)?"block":"none"}}},Y={root:function(e){var n=e.instance;return["p-menubar p-component",{"p-menubar-mobile":n.queryMatches,"p-menubar-mobile-active":n.mobileActive}]},start:"p-menubar-start",button:"p-menubar-button",menu:"p-menubar-root-list",menuitem:function(e){var n=e.instance,i=e.processedItem;return["p-menuitem",{"p-menuitem-active p-highlight":n.isItemActive(i),"p-focus":n.isItemFocused(i),"p-disabled":n.isItemDisabled(i)}]},content:"p-menuitem-content",action:"p-menuitem-link",icon:"p-menuitem-icon",label:"p-menuitem-text",submenuIcon:"p-submenu-icon",submenu:"p-submenu-list",separator:"p-menuitem-separator",end:"p-menubar-end"},Z=V.extend({name:"menubar",css:W,classes:Y,inlineStyles:X}),J={name:"BaseMenubar",extends:E,props:{model:{type:Array,default:null},buttonProps:{type:null,default:null},breakpoint:{type:String,default:"960px"},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},style:Z,provide:function(){return{$parentInstance:this}}},O={name:"MenubarSub",hostName:"Menubar",extends:E,emits:["item-mouseenter","item-click"],props:{items:{type:Array,default:null},root:{type:Boolean,default:!1},popup:{type:Boolean,default:!1},mobileActive:{type:Boolean,default:!1},templates:{type:Object,default:null},level:{type:Number,default:0},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},activeItemPath:{type:Object,default:null}},list:null,methods:{getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,n,i){return e&&e.item?c.getItemValue(e.item[n],i):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getPTOptions:function(e,n,i){return this.ptm(i,{context:{item:e,index:n,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e),level:this.level}})},isItemActive:function(e){return this.activeItemPath.some(function(n){return n.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return c.isNotEmpty(e.items)},onItemClick:function(e,n){this.getItemProp(n,"command",{originalEvent:e,item:n.item}),this.$emit("item-click",{originalEvent:e,processedItem:n,isFocus:!0})},onItemMouseEnter:function(e,n){this.$emit("item-mouseenter",{originalEvent:e,processedItem:n})},getAriaSetSize:function(){var e=this;return this.items.filter(function(n){return e.isItemVisible(n)&&!e.getItemProp(n,"separator")}).length},getAriaPosInset:function(e){var n=this;return e-this.items.slice(0,e).filter(function(i){return n.isItemVisible(i)&&n.getItemProp(i,"separator")}).length+1},getMenuItemProps:function(e,n){return{action:l({class:this.cx("action"),tabindex:-1,"aria-hidden":!0},this.getPTOptions(e,n,"action")),icon:l({class:[this.cx("icon"),this.getItemProp(e,"icon")]},this.getPTOptions(e,n,"icon")),label:l({class:this.cx("label")},this.getPTOptions(e,n,"label")),submenuicon:l({class:this.cx("submenuIcon")},this.getPTOptions(e,n,"submenuIcon"))}}},components:{AngleRightIcon:H,AngleDownIcon:q},directives:{ripple:z}},Q=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-highlight","data-p-focused","data-p-disabled"],_=["onClick","onMouseenter"],$=["href","target"],ee=["id"];function te(t,e,n,i,a,s){var u=K("MenubarSub",!0),d=T("ripple");return m(),h("ul",l({class:n.level===0?t.cx("menu"):t.cx("submenu")},n.level===0?t.ptm("menu"):t.ptm("submenu")),[(m(!0),h(L,null,B(n.items,function(r,o){return m(),h(L,{key:s.getItemKey(r)},[s.isItemVisible(r)&&!s.getItemProp(r,"separator")?(m(),h("li",l({key:0,id:s.getItemId(r),style:s.getItemProp(r,"style"),class:[t.cx("menuitem",{processedItem:r}),s.getItemProp(r,"class")],role:"menuitem","aria-label":s.getItemLabel(r),"aria-disabled":s.isItemDisabled(r)||void 0,"aria-expanded":s.isItemGroup(r)?s.isItemActive(r):void 0,"aria-haspopup":s.isItemGroup(r)&&!s.getItemProp(r,"to")?"menu":void 0,"aria-level":n.level+1,"aria-setsize":s.getAriaSetSize(),"aria-posinset":s.getAriaPosInset(o)},s.getPTOptions(r,o,"menuitem"),{"data-p-highlight":s.isItemActive(r),"data-p-focused":s.isItemFocused(r),"data-p-disabled":s.isItemDisabled(r)}),[A("div",l({class:t.cx("content"),onClick:function(b){return s.onItemClick(b,r)},onMouseenter:function(b){return s.onItemMouseEnter(b,r)}},s.getPTOptions(r,o,"content")),[n.templates.item?(m(),v(P(n.templates.item),{key:1,item:r.item,root:n.root,hasSubmenu:s.getItemProp(r,"items"),label:s.getItemLabel(r),props:s.getMenuItemProps(r,o)},null,8,["item","root","hasSubmenu","label","props"])):R((m(),h("a",l({key:0,href:s.getItemProp(r,"url"),class:t.cx("action"),target:s.getItemProp(r,"target"),tabindex:"-1","aria-hidden":"true"},s.getPTOptions(r,o,"action")),[n.templates.itemicon?(m(),v(P(n.templates.itemicon),{key:0,item:r.item,class:w([t.cx("icon"),s.getItemProp(r,"icon")])},null,8,["item","class"])):s.getItemProp(r,"icon")?(m(),h("span",l({key:1,class:[t.cx("icon"),s.getItemProp(r,"icon")]},s.getPTOptions(r,o,"icon")),null,16)):p("",!0),A("span",l({class:t.cx("label")},s.getPTOptions(r,o,"label")),j(s.getItemLabel(r)),17),s.getItemProp(r,"items")?(m(),h(L,{key:2},[n.templates.submenuicon?(m(),v(P(n.templates.submenuicon),{key:0,root:n.root,active:s.isItemActive(r),class:w(t.cx("submenuIcon"))},null,8,["root","active","class"])):(m(),v(P(n.root?"AngleDownIcon":"AngleRightIcon"),l({key:1,class:t.cx("submenuIcon")},s.getPTOptions(r,o,"submenuIcon")),null,16,["class"]))],64)):p("",!0)],16,$)),[[d]])],16,_),s.isItemVisible(r)&&s.isItemGroup(r)?(m(),v(u,{key:0,menuId:n.menuId,role:"menu",style:N(t.sx("submenu",!0,{processedItem:r})),focusedItemId:n.focusedItemId,items:r.items,mobileActive:n.mobileActive,activeItemPath:n.activeItemPath,templates:n.templates,level:n.level+1,pt:t.pt,unstyled:t.unstyled,onItemClick:e[0]||(e[0]=function(f){return t.$emit("item-click",f)}),onItemMouseenter:e[1]||(e[1]=function(f){return t.$emit("item-mouseenter",f)})},null,8,["menuId","style","focusedItemId","items","mobileActive","activeItemPath","templates","level","pt","unstyled"])):p("",!0)],16,Q)):p("",!0),s.isItemVisible(r)&&s.getItemProp(r,"separator")?(m(),h("li",l({key:1,id:s.getItemId(r),class:[t.cx("separator"),s.getItemProp(r,"class")],style:s.getItemProp(r,"style"),role:"separator"},t.ptm("separator")),null,16,ee)):p("",!0)],64)}),128))],16)}O.render=te;var ne={name:"Menubar",extends:J,emits:["focus","blur"],matchMediaListener:null,data:function(){return{id:this.$attrs.id,mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],dirty:!1,query:null,queryMatches:!1}},watch:{"$attrs.id":function(e){this.id=e||S()},activeItemPath:function(e){c.isNotEmpty(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},outsideClickListener:null,container:null,menubar:null,mounted:function(){this.id=this.id||S(),this.bindMatchMediaListener()},beforeUnmount:function(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),this.container&&k.clear(this.container),this.container=null},methods:{getItemProp:function(e,n){return e?c.getItemValue(e[n]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemGroup:function(e){return c.isNotEmpty(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&c.isNotEmpty(e.items)},toggle:function(e){var n=this;this.mobileActive?(this.mobileActive=!1,k.clear(this.menubar),this.hide()):(this.mobileActive=!0,k.set("menu",this.menubar,this.$primevue.config.zIndex.menu),setTimeout(function(){n.show()},1)),this.bindOutsideClickListener(),e.preventDefault()},show:function(){this.focusedItemInfo={index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},I.focus(this.menubar)},hide:function(e,n){var i=this;this.mobileActive&&(this.mobileActive=!1,setTimeout(function(){I.focus(i.$refs.menubutton)},0)),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},n&&I.focus(this.menubar),this.dirty=!1},onFocus:function(e){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown:function(e){var n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&c.isPrintableCharacter(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e){var n=e.processedItem,i=e.isFocus;if(!c.isEmpty(n)){var a=n.index,s=n.key,u=n.level,d=n.parentKey,r=n.items,o=c.isNotEmpty(r),f=this.activeItemPath.filter(function(b){return b.parentKey!==d&&b.parentKey!==s});o&&f.push(n),this.focusedItemInfo={index:a,level:u,parentKey:d},this.activeItemPath=f,o&&(this.dirty=!0),i&&I.focus(this.menubar)}},onItemClick:function(e){var n=e.originalEvent,i=e.processedItem,a=this.isProccessedItemGroup(i),s=c.isEmpty(i.parent),u=this.isSelected(i);if(u){var d=i.index,r=i.key,o=i.level,f=i.parentKey;this.activeItemPath=this.activeItemPath.filter(function(g){return r!==g.key&&r.startsWith(g.key)}),this.focusedItemInfo={index:d,level:o,parentKey:f},this.dirty=!s,I.focus(this.menubar)}else if(a)this.onItemChange(e);else{var b=s?i:this.activeItemPath.find(function(g){return g.parentKey===""});this.hide(n),this.changeFocusedItemIndex(n,b?b.index:-1),this.mobileActive=!1,I.focus(this.menubar)}},onItemMouseEnter:function(e){!this.mobileActive&&this.dirty&&this.onItemChange(e)},menuButtonClick:function(e){this.toggle(e)},menuButtonKeydown:function(e){(e.code==="Enter"||e.code==="Space")&&this.menuButtonClick(e)},onArrowDownKey:function(e){var n=this.visibleItems[this.focusedItemInfo.index],i=n?c.isEmpty(n.parent):null;if(i){var a=this.isProccessedItemGroup(n);a&&(this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo={index:-1,parentKey:n.key},this.onArrowRightKey(e))}else{var s=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,s),e.preventDefault()}},onArrowUpKey:function(e){var n=this,i=this.visibleItems[this.focusedItemInfo.index],a=c.isEmpty(i.parent);if(a){var s=this.isProccessedItemGroup(i);if(s){this.onItemChange({originalEvent:e,processedItem:i}),this.focusedItemInfo={index:-1,parentKey:i.key};var u=this.findLastItemIndex();this.changeFocusedItemIndex(e,u)}}else{var d=this.activeItemPath.find(function(o){return o.key===i.parentKey});if(this.focusedItemInfo.index===0)this.focusedItemInfo={index:-1,parentKey:d?d.parentKey:""},this.searchValue="",this.onArrowLeftKey(e),this.activeItemPath=this.activeItemPath.filter(function(o){return o.parentKey!==n.focusedItemInfo.parentKey});else{var r=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,r)}}e.preventDefault()},onArrowLeftKey:function(e){var n=this,i=this.visibleItems[this.focusedItemInfo.index],a=i?this.activeItemPath.find(function(u){return u.key===i.parentKey}):null;if(a)this.onItemChange({originalEvent:e,processedItem:a}),this.activeItemPath=this.activeItemPath.filter(function(u){return u.parentKey!==n.focusedItemInfo.parentKey}),e.preventDefault();else{var s=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,s),e.preventDefault()}},onArrowRightKey:function(e){var n=this.visibleItems[this.focusedItemInfo.index],i=n?this.activeItemPath.find(function(u){return u.key===n.parentKey}):null;if(i){var a=this.isProccessedItemGroup(n);a&&(this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo={index:-1,parentKey:n.key},this.onArrowDownKey(e))}else{var s=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,s),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var n=I.findSingle(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),i=n&&I.findSingle(n,'a[data-pc-section="action"]');i?i.click():n&&n.click();var a=this.visibleItems[this.focusedItemInfo.index],s=this.isProccessedItemGroup(a);!s&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){this.hide(e,!0),this.focusedItemInfo.index=this.findFirstFocusedItemIndex(),e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var n=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(n);!i&&this.onItemChange({originalEvent:e,processedItem:n})}this.hide()},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){var i=e.container&&!e.container.contains(n.target),a=!(e.target&&(e.target===n.target||e.target.contains(n.target)));i&&a&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(n){I.isTouchDevice()||e.hide(n,!0),e.mobileActive=!1},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var n=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=n,this.queryMatches=n.matches,this.matchMediaListener=function(){e.queryMatches=n.matches,e.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(n){return n.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(n){return e.isValidItem(n)})},findLastItemIndex:function(){var e=this;return c.findLastIndex(this.visibleItems,function(n){return e.isValidItem(n)})},findNextItemIndex:function(e){var n=this,i=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(a){return n.isValidItem(a)}):-1;return i>-1?i+e+1:e},findPrevItemIndex:function(e){var n=this,i=e>0?c.findLastIndex(this.visibleItems.slice(0,e),function(a){return n.isValidItem(a)}):-1;return i>-1?i:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(n){return e.isValidSelectedItem(n)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,n){var i=this;this.searchValue=(this.searchValue||"")+n;var a=-1,s=!1;return this.focusedItemInfo.index!==-1?(a=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(u){return i.isItemMatched(u)}),a=a===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(u){return i.isItemMatched(u)}):a+this.focusedItemInfo.index):a=this.visibleItems.findIndex(function(u){return i.isItemMatched(u)}),a!==-1&&(s=!0),a===-1&&this.focusedItemInfo.index===-1&&(a=this.findFirstFocusedItemIndex()),a!==-1&&this.changeFocusedItemIndex(e,a),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){i.searchValue="",i.searchTimeout=null},500),s},changeFocusedItemIndex:function(e,n){this.focusedItemInfo.index!==n&&(this.focusedItemInfo.index=n,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,n=e!==-1?"".concat(this.id,"_").concat(e):this.focusedItemId,i=I.findSingle(this.menubar,'li[id="'.concat(n,'"]'));i&&i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var n=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",u=[];return e&&e.forEach(function(d,r){var o=(s!==""?s+"_":"")+r,f={item:d,index:r,level:i,key:o,parent:a,parentKey:s};f.items=n.createProcessedItems(d.items,i+1,f,o),u.push(f)}),u},containerRef:function(e){this.container=e},menubarRef:function(e){this.menubar=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,n=this.activeItemPath.find(function(i){return i.key===e.focusedItemInfo.parentKey});return n?n.items:this.processedItems},focusedItemId:function(){return this.focusedItemInfo.index!==-1?"".concat(this.id).concat(c.isNotEmpty(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{MenubarSub:O,BarsIcon:D}};function y(t){"@babel/helpers - typeof";return y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(t)}function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,i)}return n}function F(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?C(Object(n),!0).forEach(function(i){ie(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function ie(t,e,n){return e=se(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function se(t){var e=re(t,"string");return y(e)==="symbol"?e:String(e)}function re(t,e){if(y(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(y(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var ae=["aria-haspopup","aria-expanded","aria-controls","aria-label"];function oe(t,e,n,i,a,s){var u=K("BarsIcon"),d=K("MenubarSub");return m(),h("div",l({ref:s.containerRef,class:t.cx("root")},t.ptm("root")),[t.$slots.start?(m(),h("div",l({key:0,class:t.cx("start")},t.ptm("start")),[x(t.$slots,"start")],16)):p("",!0),x(t.$slots,"menubutton",{id:a.id,class:w(t.cx("button")),toggleCallback:function(o){return s.menuButtonClick(o)}},function(){var r;return[t.model&&t.model.length>0?(m(),h("a",l({key:0,ref:"menubutton",role:"button",tabindex:"0",class:t.cx("button"),"aria-haspopup":!!(t.model.length&&t.model.length>0),"aria-expanded":a.mobileActive,"aria-controls":a.id,"aria-label":(r=t.$primevue.config.locale.aria)===null||r===void 0?void 0:r.navigation,onClick:e[0]||(e[0]=function(o){return s.menuButtonClick(o)}),onKeydown:e[1]||(e[1]=function(o){return s.menuButtonKeydown(o)})},F(F({},t.buttonProps),t.ptm("button"))),[x(t.$slots,"menubuttonicon",{},function(){return[M(u,G(U(t.ptm("menubuttonicon"))),null,16)]})],16,ae)):p("",!0)]}),M(d,{ref:s.menubarRef,id:a.id,role:"menubar",items:s.processedItems,templates:t.$slots,root:!0,mobileActive:a.mobileActive,tabindex:"0","aria-activedescendant":a.focused?s.focusedItemId:void 0,menuId:a.id,focusedItemId:a.focused?s.focusedItemId:void 0,activeItemPath:a.activeItemPath,level:0,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,pt:t.pt,unstyled:t.unstyled,onFocus:s.onFocus,onBlur:s.onBlur,onKeydown:s.onKeyDown,onItemClick:s.onItemClick,onItemMouseenter:s.onItemMouseEnter},null,8,["id","items","templates","mobileActive","aria-activedescendant","menuId","focusedItemId","activeItemPath","aria-labelledby","aria-label","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter"]),t.$slots.end?(m(),h("div",l({key:1,class:t.cx("end")},t.ptm("end")),[x(t.$slots,"end")],16)):p("",!0)],16)}ne.render=oe;export{ne as default};
