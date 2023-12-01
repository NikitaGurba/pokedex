import{s as l}from"./basecomponent.esm.9280714b.js";import{a1 as a,t as i,v as r,a9 as o,ab as d,aa as s}from"./entry.cc878ff6.js";var p=`
@layer primevue {
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        top: 50%;
        left: 0;
        width: 100%;
        content: '';
    }

    .p-divider-content {
        z-index: 1;
    }

    .p-divider-vertical {
        min-height: 100%;
        margin: 0 1rem;
        display: flex;
        position: relative;
        justify-content: center;
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        top: 0;
        left: 50%;
        height: 100%;
        content: '';
    }

    .p-divider-solid.p-divider-horizontal:before {
        border-top-style: solid;
    }

    .p-divider-solid.p-divider-vertical:before {
        border-left-style: solid;
    }

    .p-divider-dashed.p-divider-horizontal:before {
        border-top-style: dashed;
    }

    .p-divider-dashed.p-divider-vertical:before {
        border-left-style: dashed;
    }

    .p-divider-dotted.p-divider-horizontal:before {
        border-top-style: dotted;
    }

    .p-divider-dotted.p-divider-vertical:before {
        border-left-style: dotted;
    }
}
`,v={root:function(n){var e=n.props;return{justifyContent:e.layout==="horizontal"?e.align==="center"||e.align===null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align===null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null}}},c={root:function(n){var e=n.props;return["p-divider p-component","p-divider-"+e.layout,"p-divider-"+e.type,{"p-divider-left":e.layout==="horizontal"&&(!e.align||e.align==="left")},{"p-divider-center":e.layout==="horizontal"&&e.align==="center"},{"p-divider-right":e.layout==="horizontal"&&e.align==="right"},{"p-divider-top":e.layout==="vertical"&&e.align==="top"},{"p-divider-center":e.layout==="vertical"&&(!e.align||e.align==="center")},{"p-divider-bottom":e.layout==="vertical"&&e.align==="bottom"}]},content:"p-divider-content"},u=a.extend({name:"divider",css:p,classes:c,inlineStyles:v}),f={name:"BaseDivider",extends:l,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:u,provide:function(){return{$parentInstance:this}}},y={name:"Divider",extends:f},g=["aria-orientation"];function h(t,n,e,m,b,z){return i(),r("div",o({class:t.cx("root"),style:t.sx("root"),role:"separator","aria-orientation":t.layout},t.ptm("root"),{"data-pc-name":"divider"}),[t.$slots.default?(i(),r("div",o({key:0,class:t.cx("content")},t.ptm("content")),[d(t.$slots,"default")],16)):s("",!0)],16,g)}y.render=h;export{y as default};
