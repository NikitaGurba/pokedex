import{W as b,_ as m,a2 as l,t as c,v as p,x as d,M as f,N as I,y as v,L as g,a4 as y,T}from"./entry.b80a887e.js";import{s as k}from"./basecomponent.esm.0e8a44bb.js";var S=`
@layer primevue {
    .p-steps {
        position: relative;
    }

    .p-steps .p-steps-list {
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
    }

    .p-steps-item {
        position: relative;
        display: flex;
        justify-content: center;
        flex: 1 1 auto;
        overflow: hidden;
    }

    .p-steps-item .p-menuitem-link {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        text-decoration: none;
        cursor: pointer;
    }

    .p-steps.p-steps-readonly .p-steps-item {
        cursor: auto;
    }

    .p-steps-item.p-steps-current .p-menuitem-link {
        cursor: default;
    }

    .p-steps-title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
    }

    .p-steps-number {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-steps-title {
        display: block;
    }
}
`,w={root:function(e){var t=e.props;return["p-steps p-component",{"p-readonly":t.readonly}]},menu:"p-steps-list",menuitem:function(e){var t=e.instance,r=e.item,o=e.index;return["p-steps-item",{"p-highlight p-steps-current":t.isActive(o),"p-disabled":t.isItemDisabled(r,o)}]},action:"p-menuitem-link",step:"p-steps-number",label:"p-steps-title"},P=b.extend({name:"steps",css:S,classes:w}),D={name:"BaseSteps",extends:k,props:{id:{type:String},model:{type:Array,default:null},readonly:{type:Boolean,default:!0},activeStep:{type:Number,default:0}},style:P,provide:function(){return{$parentInstance:this}}},F={name:"Steps",extends:D,emits:["update:activeStep","step-change"],data:function(){return{d_activeStep:this.activeStep}},watch:{activeStep:function(e){this.d_activeStep=e}},mounted:function(){var e=this.findFirstItem();e.tabIndex="0"},methods:{getPTOptions:function(e,t,r){return this.ptm(e,{context:{item:t,index:r,active:this.isActive(r),disabled:this.isItemDisabled(t,r)}})},onItemClick:function(e,t,r){if(this.disabled(t)||this.readonly){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),r!==this.d_activeStep&&(this.d_activeStep=r,this.$emit("update:activeStep",this.d_activeStep)),this.$emit("step-change",{originalEvent:e,index:r})},onItemKeydown:function(e,t){switch(e.code){case"ArrowRight":{this.navigateToNextItem(e.target),e.preventDefault();break}case"ArrowLeft":{this.navigateToPrevItem(e.target),e.preventDefault();break}case"Home":{this.navigateToFirstItem(e.target),e.preventDefault();break}case"End":{this.navigateToLastItem(e.target),e.preventDefault();break}case"Tab":break;case"Enter":case"Space":{this.onItemClick(e,t),e.preventDefault();break}}},navigateToNextItem:function(e){var t=this.findNextItem(e);t&&this.setFocusToMenuitem(e,t)},navigateToPrevItem:function(e){var t=this.findPrevItem(e);t&&this.setFocusToMenuitem(e,t)},navigateToFirstItem:function(e){var t=this.findFirstItem(e);t&&this.setFocusToMenuitem(e,t)},navigateToLastItem:function(e){var t=this.findLastItem(e);t&&this.setFocusToMenuitem(e,t)},findNextItem:function(e){var t=e.parentElement.nextElementSibling;return t?t.children[0]:null},findPrevItem:function(e){var t=e.parentElement.previousElementSibling;return t?t.children[0]:null},findFirstItem:function(){var e=m.findSingle(this.$refs.list,'[data-pc-section="menuitem"]');return e?e.children[0]:null},findLastItem:function(){var e=m.find(this.$refs.list,'[data-pc-section="menuitem"]');return e?e[e.length-1].children[0]:null},setFocusToMenuitem:function(e,t){e.tabIndex="-1",t.tabIndex="0",t.focus()},isActive:function(e){return e===this.d_activeStep},isItemDisabled:function(e,t){return this.disabled(e)||this.readonly&&!this.isActive(t)},visible:function(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label:function(e){return typeof e.label=="function"?e.label():e.label},getMenuItemProps:function(e,t){var r=this;return{action:l({class:this.cx("action"),onClick:function(s){return r.onItemClick(s,e)},onKeyDown:function(s){return r.onItemKeydown(s,e)}},this.getPTOptions("action",e,t)),step:l({class:this.cx("step")},this.getPTOptions("step",e,t)),label:l({class:this.cx("label")},this.getPTOptions("label",e,t))}}}},x=["id"],C=["onClick","onKeydown","data-p-highlight","data-p-disabled"];function M(n,e,t,r,o,s){return c(),p("nav",l({id:n.id,class:n.cx("root")},n.ptm("root"),{"data-pc-name":"steps"}),[d("ol",l({ref:"list",class:n.cx("menu")},n.ptm("menu")),[(c(!0),p(f,null,I(n.model,function(i,a){return c(),p(f,{key:s.label(i)+"_"+a.toString()},[s.visible(i)?(c(),p("li",l({key:0,class:[n.cx("menuitem",{item:i,index:a}),i.class],style:i.style,onClick:function(u){return s.onItemClick(u,i,a)},onKeydown:function(u){return s.onItemKeydown(u,i,a)}},s.getPTOptions("menuitem",i,a),{"data-p-highlight":s.isActive(a),"data-p-disabled":s.isItemDisabled(i,a)}),[n.$slots.item?(c(),g(y(n.$slots.item),{key:1,item:i,index:a,active:a===o.d_activeStep,label:s.label(i),props:s.getMenuItemProps(i,a)},null,8,["item","index","active","label","props"])):(c(),p("span",l({key:0,class:n.cx("action")},s.getPTOptions("action",i,a)),[d("span",l({class:n.cx("step")},s.getPTOptions("step",i,a)),v(a+1),17),d("span",l({class:n.cx("label")},s.getPTOptions("label",i,a)),v(s.label(i)),17)],16))],16,C)):T("",!0)],64)}),128))],16)],16,x)}F.render=M;export{F as default};
