import{a1 as x,a5 as l,a9 as d,a7 as y,a8 as k,t as c,v as u,x as m,W as p,X as T,ag as w,V as b,ad as P,ac as h,aa as v,y as S}from"./entry.5ab142e7.js";import{s as C}from"./basecomponent.esm.bbc5ce76.js";var D=`
@layer primevue {
    .p-tabmenu {
        overflow-x: auto;
    }

    .p-tabmenu-nav {
        display: flex;
        margin: 0;
        padding: 0;
        list-style-type: none;
        flex-wrap: nowrap;
    }

    .p-tabmenu-nav a {
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        position: relative;
        text-decoration: none;
        text-decoration: none;
        overflow: hidden;
    }

    .p-tabmenu-nav a:focus {
        z-index: 1;
    }

    .p-tabmenu-nav .p-menuitem-text {
        line-height: 1;
    }

    .p-tabmenu-ink-bar {
        display: none;
        z-index: 1;
    }

    .p-tabmenu::-webkit-scrollbar {
        display: none;
    }
}
`,F={root:"p-tabmenu p-component",menu:"p-tabmenu-nav p-reset",menuitem:function(e){var t=e.instance,r=e.index,o=e.item;return["p-tabmenuitem",{"p-highlight":t.d_activeIndex===r,"p-disabled":t.disabled(o)}]},action:"p-menuitem-link",icon:"p-menuitem-icon",label:"p-menuitem-text",inkbar:"p-tabmenu-ink-bar"},K=x.extend({name:"tabmenu",css:D,classes:F}),M={name:"BaseTabMenu",extends:C,props:{model:{type:Array,default:null},activeIndex:{type:Number,default:0},"aria-labelledby":{type:String,default:null},"aria-label":{type:String,default:null}},style:K,provide:function(){return{$parentInstance:this}}},L={name:"TabMenu",extends:M,emits:["update:activeIndex","tab-change"],timeout:null,data:function(){return{d_activeIndex:this.activeIndex}},watch:{activeIndex:function(e){this.d_activeIndex=e}},mounted:function(){this.updateInkBar();var e=this.findActiveItem();e&&(e.tabIndex="0")},updated:function(){this.updateInkBar()},beforeUnmount:function(){clearTimeout(this.timeout)},methods:{getPTOptions:function(e,t,r){return this.ptm(e,{context:{item:t,index:r}})},onItemClick:function(e,t,r){if(this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),r!==this.d_activeIndex&&(this.d_activeIndex=r,this.$emit("update:activeIndex",this.d_activeIndex)),this.$emit("tab-change",{originalEvent:e,index:r})},onKeydownItem:function(e,t,r){switch(e.code){case"ArrowRight":{this.navigateToNextItem(e.target),e.preventDefault();break}case"ArrowLeft":{this.navigateToPrevItem(e.target),e.preventDefault();break}case"Home":{this.navigateToFirstItem(e.target),e.preventDefault();break}case"End":{this.navigateToLastItem(e.target),e.preventDefault();break}case"Space":case"Enter":{this.onItemClick(e,t,r),e.preventDefault();break}case"Tab":{this.onTabKey();break}}},navigateToNextItem:function(e){var t=this.findNextItem(e);t&&this.setFocusToMenuitem(e,t)},navigateToPrevItem:function(e){var t=this.findPrevItem(e);t&&this.setFocusToMenuitem(e,t)},navigateToFirstItem:function(e){var t=this.findFirstItem(e);t&&this.setFocusToMenuitem(e,t)},navigateToLastItem:function(e){var t=this.findLastItem(e);t&&this.setFocusToMenuitem(e,t)},findNextItem:function(e){var t=e.parentElement.nextElementSibling;return t?l.getAttribute(t,"data-p-disabled")===!0?this.findNextItem(t.children[0]):t.children[0]:null},findPrevItem:function(e){var t=e.parentElement.previousElementSibling;return t?l.getAttribute(t,"data-p-disabled")===!0?this.findPrevItem(t.children[0]):t.children[0]:null},findFirstItem:function(){var e=l.findSingle(this.$refs.nav,'[data-pc-section="menuitem"][data-p-disabled="false"]');return e?e.children[0]:null},findLastItem:function(){var e=l.find(this.$refs.nav,'[data-pc-section="menuitem"][data-p-disabled="false"]');return e?e[e.length-1].children[0]:null},findActiveItem:function(){var e=l.findSingle(this.$refs.nav,'[data-pc-section="menuitem"][data-p-disabled="false"][data-p-highlight="true"]');return e?e.children[0]:null},setFocusToMenuitem:function(e,t){e.tabIndex="-1",t.tabIndex="0",t.focus()},onTabKey:function(){var e=l.findSingle(this.$refs.nav,'[data-pc-section="menuitem"][data-p-disabled="false"][data-p-highlight="true"]'),t=l.findSingle(this.$refs.nav,'[data-pc-section="action"][tabindex="0"]');t!==e.children[0]&&(e&&(e.children[0].tabIndex="0"),t.tabIndex="-1")},visible:function(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled===!0},label:function(e){return typeof e.label=="function"?e.label():e.label},updateInkBar:function(){for(var e=this.$refs.nav.children,t=!1,r=0;r<e.length;r++){var o=e[r];l.getAttribute(o,"data-p-highlight")&&(this.$refs.inkbar.style.width=l.getWidth(o)+"px",this.$refs.inkbar.style.left=l.getOffset(o).left-l.getOffset(this.$refs.nav).left+"px",t=!0)}t||(this.$refs.inkbar.style.width="0px",this.$refs.inkbar.style.left="0px")},getMenuItemProps:function(e,t){var r=this;return{action:d({class:this.cx("action"),tabindex:-1,onClick:function(i){return r.onItemClick(i,e,t)},onKeyDown:function(i){return r.onKeydownItem(i,e,t)}},this.getPTOptions("action",e,t)),icon:d({class:[this.cx("icon"),e.icon]},this.getPTOptions("icon",e,t)),label:d({class:this.cx("label")},this.getPTOptions("label",e,t))}}},directives:{ripple:y}},O=["aria-labelledby","aria-label"],B=["onClick","onKeydown","data-p-highlight","data-p-disabled"],N=["href","target","aria-label","aria-disabled"];function A(n,e,t,r,o,i){var I=k("ripple");return c(),u("div",d({class:n.cx("root")},n.ptm("root"),{"data-pc-name":"tabmenu"}),[m("ul",d({ref:"nav",class:n.cx("menu"),role:"menubar","aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel},n.ptm("menu")),[(c(!0),u(p,null,T(n.model,function(a,s){return c(),u(p,{key:i.label(a)+"_"+s.toString()},[i.visible(a)?(c(),u("li",d({key:0,ref_for:!0,ref:"tab",class:[n.cx("menuitem",{item:a,index:s}),a.class],role:"presentation",onClick:function(f){return i.onItemClick(f,a,s)},onKeydown:function(f){return i.onKeydownItem(f,a,s)}},i.getPTOptions("menuitem",a,s),{"data-p-highlight":o.d_activeIndex===s,"data-p-disabled":i.disabled(a)}),[n.$slots.item?(c(),b(h(n.$slots.item),{key:1,item:a,index:s,active:s===o.d_activeIndex,label:i.label(a),props:i.getMenuItemProps(a,s)},null,8,["item","index","active","label","props"])):w((c(),u("a",d({key:0,ref_for:!0,ref:"tabLink",role:"menuitem",href:a.url,class:n.cx("action"),target:a.target,"aria-label":i.label(a),"aria-disabled":i.disabled(a),tabindex:-1},i.getPTOptions("action",a,s)),[n.$slots.itemicon?(c(),b(h(n.$slots.itemicon),{key:0,item:a,class:P([n.cx("icon"),a.icon])},null,8,["item","class"])):a.icon?(c(),u("span",d({key:1,class:[n.cx("icon"),a.icon]},i.getPTOptions("icon",a,s)),null,16)):v("",!0),m("span",d({class:n.cx("label")},i.getPTOptions("label",a,s)),S(i.label(a)),17)],16,N)),[[I]])],16,B)):v("",!0)],64)}),128)),m("li",d({ref:"inkbar",role:"none",class:n.cx("inkbar")},n.ptm("inkbar")),null,16)],16,O)],16)}L.render=A;export{L as default};
