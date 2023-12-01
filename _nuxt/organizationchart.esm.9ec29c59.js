import{s as k}from"./basecomponent.esm.47a4fb52.js";import{a1 as T,a5 as b,i as O,t as a,v as s,x as r,ai as v,a9 as i,V as y,ac as f,aa as g,W as m,X as N,z,aj as P}from"./entry.27521827.js";import{s as S}from"./index.esm.0b0ed70b.js";import{s as D}from"./index.esm.51f98c9a.js";import"./baseicon.esm.d812501b.js";var j=`
@layer primevue {
    .p-organizationchart-table {
        border-spacing: 0;
        border-collapse: separate;
        margin: 0 auto;
    }

    .p-organizationchart-table > tbody > tr > td {
        text-align: center;
        vertical-align: top;
        padding: 0 0.75rem;
    }

    .p-organizationchart-node-content {
        display: inline-block;
        position: relative;
    }

    .p-organizationchart-node-content .p-node-toggler {
        position: absolute;
        bottom: -0.75rem;
        margin-left: -0.75rem;
        z-index: 2;
        left: 50%;
        user-select: none;
        cursor: pointer;
        width: 1.5rem;
        height: 1.5rem;
        text-decoration: none;
    }

    .p-organizationchart-node-content .p-node-toggler .p-node-toggler-icon {
        position: relative;
        top: 0.25rem;
    }

    .p-organizationchart-line-down {
        margin: 0 auto;
        height: 20px;
        width: 1px;
    }

    .p-organizationchart-line-right {
        border-radius: 0px;
    }

    .p-organizationchart-line-left {
        border-radius: 0;
    }

    .p-organizationchart-selectable-node {
        cursor: pointer;
    }
}
`,x={root:"p-organizationchart p-component",table:"p-organizationchart-table",node:function(n){var t=n.instance;return["p-organizationchart-node-content",{"p-organizationchart-selectable-node":t.selectable,"p-highlight":t.selected}]},nodeToggler:"p-node-toggler",nodeTogglerIcon:"p-node-toggler-icon",lines:"p-organizationchart-lines",lineDown:"p-organizationchart-line-down",lineLeft:function(n){var t=n.index;return["p-organizationchart-line-left",{"p-organizationchart-line-top":t!==0}]},lineRight:function(n){var t=n.props,l=n.index;return["p-organizationchart-line-right",{"p-organizationchart-line-top":l!==t.node.children.length-1}]},nodes:"p-organizationchart-nodes"},M=T.extend({name:"organizationchart",css:j,classes:x}),I={name:"BaseOrganizationChart",extends:k,props:{value:{type:null,default:null},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null},collapsible:{type:Boolean,default:!1},collapsedKeys:{type:null,default:null}},style:M,provide:function(){return{$parentInstance:this}}},w={name:"OrganizationChartNode",hostName:"OrganizationChart",extends:k,emits:["node-click","node-toggle"],props:{node:{type:null,default:null},templates:{type:null,default:null},collapsible:{type:Boolean,default:!1},collapsedKeys:{type:null,default:null},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null}},methods:{getPTOptions:function(n){return this.ptm(n,{context:{expanded:this.expanded,selectable:this.selectable,selected:this.selected,toggleable:this.toggleable,active:this.selected}})},getNodeOptions:function(n,t){return this.ptm(t,{context:{lineTop:n}})},onNodeClick:function(n){b.getAttribute(n.target,"nodeToggler")||b.getAttribute(n.target,"nodeTogglerIcon")||this.selectionMode&&this.$emit("node-click",this.node)},onChildNodeClick:function(n){this.$emit("node-click",n)},toggleNode:function(){this.$emit("node-toggle",this.node)},onChildNodeToggle:function(n){this.$emit("node-toggle",n)},onKeydown:function(n){(n.code==="Enter"||n.code==="Space")&&(this.toggleNode(),n.preventDefault())}},computed:{leaf:function(){return this.node.leaf===!1?!1:!(this.node.children&&this.node.children.length)},colspan:function(){return this.node.children&&this.node.children.length?this.node.children.length*2:null},childStyle:function(){return{visibility:!this.leaf&&this.expanded?"inherit":"hidden"}},expanded:function(){return this.collapsedKeys[this.node.key]===void 0},selectable:function(){return this.selectionMode&&this.node.selectable!==!1},selected:function(){return this.selectable&&this.selectionKeys&&this.selectionKeys[this.node.key]===!0},toggleable:function(){return this.collapsible&&this.node.collapsible!==!1&&!this.leaf}},components:{ChevronDownIcon:S,ChevronUpIcon:D}},B=["colspan"],E=["colspan"],L=["colspan"];function R(e,n,t,l,c,o){var h=O("OrganizationChartNode",!0);return a(),s("table",i({class:e.cx("table")},e.ptm("table")),[r("tbody",v(P(e.ptm("body"))),[t.node?(a(),s("tr",v(i({key:0},e.ptm("row"))),[r("td",i({colspan:o.colspan},e.ptm("cell")),[r("div",i({class:[e.cx("node"),t.node.styleClass],onClick:n[2]||(n[2]=function(){return o.onNodeClick&&o.onNodeClick.apply(o,arguments)})},o.getPTOptions("node")),[(a(),y(f(t.templates[t.node.type]||t.templates.default),{node:t.node},null,8,["node"])),o.toggleable?(a(),s("a",i({key:0,tabindex:"0",class:e.cx("nodeToggler"),onClick:n[0]||(n[0]=function(){return o.toggleNode&&o.toggleNode.apply(o,arguments)}),onKeydown:n[1]||(n[1]=function(){return o.onKeydown&&o.onKeydown.apply(o,arguments)})},o.getPTOptions("nodeToggler")),[t.templates.togglericon?(a(),y(f(t.templates.togglericon),{key:0,expanded:o.expanded,class:"p-node-toggler-icon"},null,8,["expanded"])):(a(),y(f(o.expanded?"ChevronDownIcon":"ChevronUpIcon"),i({key:1,class:e.cx("nodeTogglerIcon")},o.getPTOptions("nodeTogglerIcon")),null,16,["class"]))],16)):g("",!0)],16)],16,B)],16)):g("",!0),r("tr",i({style:o.childStyle,class:e.cx("lines")},e.ptm("lines")),[r("td",i({colspan:o.colspan},e.ptm("lineCell")),[r("div",i({class:e.cx("lineDown")},e.ptm("lineDown")),null,16)],16,E)],16),r("tr",i({style:o.childStyle,class:e.cx("lines")},e.ptm("lines")),[t.node.children&&t.node.children.length===1?(a(),s("td",i({key:0,colspan:o.colspan},e.ptm("lineCell")),[r("div",i({class:e.cx("lineDown")},e.ptm("lineDown")),null,16)],16,L)):g("",!0),t.node.children&&t.node.children.length>1?(a(!0),s(m,{key:1},N(t.node.children,function(p,u){return a(),s(m,{key:p.key},[r("td",i({class:e.cx("lineLeft",{index:u})},o.getNodeOptions(u!==0,"lineLeft"))," ",16),r("td",i({class:e.cx("lineRight",{index:u})},o.getNodeOptions(u!==t.node.children.length-1,"lineRight"))," ",16)],64)}),128)):g("",!0)],16),r("tr",i({style:o.childStyle,class:e.cx("nodes")},e.ptm("nodes")),[(a(!0),s(m,null,N(t.node.children,function(p){return a(),s("td",i({key:p.key,colspan:"2"},e.ptm("nodeCell")),[z(h,{node:p,templates:t.templates,collapsedKeys:t.collapsedKeys,onNodeToggle:o.onChildNodeToggle,collapsible:t.collapsible,selectionMode:t.selectionMode,selectionKeys:t.selectionKeys,onNodeClick:o.onChildNodeClick,pt:e.pt,unstyled:e.unstyled},null,8,["node","templates","collapsedKeys","onNodeToggle","collapsible","selectionMode","selectionKeys","onNodeClick","pt","unstyled"])],16)}),128))],16)],16)],16)}w.render=R;function d(e){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},d(e)}function C(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),t.push.apply(t,l)}return t}function K(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?C(Object(t),!0).forEach(function(l){V(e,l,t[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))})}return e}function V(e,n,t){return n=A(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function A(e){var n=U(e,"string");return d(n)==="symbol"?n:String(n)}function U(e,n){if(d(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var l=t.call(e,n||"default");if(d(l)!=="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var F={name:"OrganizationChart",extends:I,emits:["node-unselect","node-select","update:selectionKeys","node-expand","node-collapse","update:collapsedKeys"],data:function(){return{d_collapsedKeys:this.collapsedKeys||{}}},watch:{collapsedKeys:function(n){this.d_collapsedKeys=n}},methods:{onNodeClick:function(n){var t=n.key;if(this.selectionMode){var l=this.selectionKeys?K({},this.selectionKeys):{};l[t]?(delete l[t],this.$emit("node-unselect",n)):(this.selectionMode==="single"&&(l={}),l[t]=!0,this.$emit("node-select",n)),this.$emit("update:selectionKeys",l)}},onNodeToggle:function(n){var t=n.key;this.d_collapsedKeys[t]?(delete this.d_collapsedKeys[t],this.$emit("node-expand",n)):(this.d_collapsedKeys[t]=!0,this.$emit("node-collapse",n)),this.d_collapsedKeys=K({},this.d_collapsedKeys),this.$emit("update:collapsedKeys",this.d_collapsedKeys)}},components:{OrganizationChartNode:w}};function H(e,n,t,l,c,o){var h=O("OrganizationChartNode");return a(),s("div",i({class:e.cx("root")},e.ptm("root")),[z(h,{node:e.value,templates:e.$slots,onNodeToggle:o.onNodeToggle,collapsedKeys:c.d_collapsedKeys,collapsible:e.collapsible,onNodeClick:o.onNodeClick,selectionMode:e.selectionMode,selectionKeys:e.selectionKeys,pt:e.pt,unstyled:e.unstyled},null,8,["node","templates","onNodeToggle","collapsedKeys","collapsible","onNodeClick","selectionMode","selectionKeys","pt","unstyled"])],16)}F.render=H;export{F as default};
