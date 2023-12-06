import{W as s,X as t,t as i,v as o,a3 as d,B as p,y as l,a2 as g}from"./entry.60175b74.js";import{s as u}from"./basecomponent.esm.6b5a7c00.js";var c=`
@layer primevue {
    .p-badge {
        display: inline-block;
        border-radius: 10px;
        text-align: center;
        padding: 0 .5rem;
    }

    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge .p-badge {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%,-50%);
        transform-origin: 100% 0;
        margin: 0;
    }

    .p-badge-dot {
        width: .5rem;
        min-width: .5rem;
        height: .5rem;
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-no-gutter {
        padding: 0;
        border-radius: 50%;
    }
}
`,b={root:function(a){var e=a.props,r=a.instance;return["p-badge p-component",{"p-badge-no-gutter":t.isNotEmpty(e.value)&&String(e.value).length===1,"p-badge-dot":t.isEmpty(e.value)&&!r.$slots.default,"p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge","p-badge-info":e.severity==="info","p-badge-success":e.severity==="success","p-badge-warning":e.severity==="warning","p-badge-danger":e.severity==="danger"}]}},m=s.extend({name:"badge",css:c,classes:b}),v={name:"BaseBadge",extends:u,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:m,provide:function(){return{$parentInstance:this}}},y={name:"Badge",extends:v};function f(n,a,e,r,$,h){return i(),o("span",g({class:n.cx("root")},n.ptm("root"),{"data-pc-name":"badge"}),[d(n.$slots,"default",{},function(){return[p(l(n.value),1)]})],16)}y.render=f;export{y as default};
