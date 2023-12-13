import{W as d,Y as p,_ as s,t as h,v as f,x as u,a2 as a,a3 as m}from"./entry.b9c4f176.js";import{s as b}from"./basecomponent.esm.79e36941.js";var v=`
@layer primevue {
    .p-scrollpanel-wrapper {
        overflow: hidden;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
        float: left;
    }

    .p-scrollpanel-content {
        height: calc(100% + 18px);
        width: calc(100% + 18px);
        padding: 0 18px 18px 0;
        position: relative;
        overflow: auto;
        box-sizing: border-box;
        scrollbar-width: none;
    }

    .p-scrollpanel-content::-webkit-scrollbar {
        display: none;
    }

    .p-scrollpanel-bar {
        position: relative;
        background: #c1c1c1;
        border-radius: 3px;
        z-index: 2;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.25s linear;
    }

    .p-scrollpanel-bar-y {
        width: 9px;
        top: 0;
    }

    .p-scrollpanel-bar-x {
        height: 9px;
        bottom: 0;
    }

    .p-scrollpanel-hidden {
        visibility: hidden;
    }

    .p-scrollpanel:hover .p-scrollpanel-bar,
    .p-scrollpanel:active .p-scrollpanel-bar {
        opacity: 1;
    }

    .p-scrollpanel-grabbed {
        user-select: none;
    }
}
`,g={root:"p-scrollpanel p-component",wrapper:"p-scrollpanel-wrapper",content:"p-scrollpanel-content",barx:"p-scrollpanel-bar p-scrollpanel-bar-x",bary:"p-scrollpanel-bar p-scrollpanel-bar-y"},y=d.extend({name:"scrollpanel",css:v,classes:g}),B={name:"BaseScrollPanel",extends:b,props:{step:{type:Number,default:5}},style:y,provide:function(){return{$parentInstance:this}}},M={name:"ScrollPanel",extends:B,initialized:!1,documentResizeListener:null,documentMouseMoveListener:null,documentMouseUpListener:null,frame:null,scrollXRatio:null,scrollYRatio:null,isXBarClicked:!1,isYBarClicked:!1,lastPageX:null,lastPageY:null,timer:null,outsideClickListener:null,data:function(){return{id:p(),orientation:"vertical",lastScrollTop:0,lastScrollLeft:0}},mounted:function(){this.$el.offsetParent&&this.initialize()},updated:function(){!this.initialized&&this.$el.offsetParent&&this.initialize()},beforeUnmount:function(){this.unbindDocumentResizeListener(),this.frame&&window.cancelAnimationFrame(this.frame)},methods:{initialize:function(){this.moveBar(),this.bindDocumentResizeListener(),this.calculateContainerHeight()},calculateContainerHeight:function(){var e=getComputedStyle(this.$el),r=getComputedStyle(this.$refs.xBar),o=s.getHeight(this.$el)-parseInt(r.height,10);e["max-height"]!=="none"&&o===0&&(this.$refs.content.offsetHeight+parseInt(r.height,10)>parseInt(e["max-height"],10)?this.$el.style.height=e["max-height"]:this.$el.style.height=this.$refs.content.offsetHeight+parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth)+"px")},moveBar:function(){var e=this;if(this.$refs.content){var r=this.$refs.content.scrollWidth,o=this.$refs.content.clientWidth,l=(this.$el.clientHeight-this.$refs.xBar.clientHeight)*-1;this.scrollXRatio=o/r;var n=this.$refs.content.scrollHeight,i=this.$refs.content.clientHeight,c=(this.$el.clientWidth-this.$refs.yBar.clientWidth)*-1;this.scrollYRatio=i/n,this.frame=this.requestAnimationFrame(function(){e.scrollXRatio>=1?(e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","true"),!e.isUnstyled&&s.addClass(e.$refs.xBar,"p-scrollpanel-hidden")):(e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","false"),!e.isUnstyled&&s.removeClass(e.$refs.xBar,"p-scrollpanel-hidden"),e.$refs.xBar.style.cssText="width:"+Math.max(e.scrollXRatio*100,10)+"%; left:"+e.$refs.content.scrollLeft/r*100+"%;bottom:"+l+"px;"),e.scrollYRatio>=1?(e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","true"),!e.isUnstyled&&s.addClass(e.$refs.yBar,"p-scrollpanel-hidden")):(e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","false"),!e.isUnstyled&&s.removeClass(e.$refs.yBar,"p-scrollpanel-hidden"),e.$refs.yBar.style.cssText="height:"+Math.max(e.scrollYRatio*100,10)+"%; top: calc("+e.$refs.content.scrollTop/n*100+"% - "+e.$refs.xBar.clientHeight+"px);right:"+c+"px;")})}},onYBarMouseDown:function(e){this.isYBarClicked=!0,this.$refs.yBar.focus(),this.lastPageY=e.pageY,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&s.addClass(this.$refs.yBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&s.addClass(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onXBarMouseDown:function(e){this.isXBarClicked=!0,this.$refs.xBar.focus(),this.lastPageX=e.pageX,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&s.addClass(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&s.addClass(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onScroll:function(e){this.lastScrollLeft!==e.target.scrollLeft?(this.lastScrollLeft=e.target.scrollLeft,this.orientation="horizontal"):this.lastScrollTop!==e.target.scrollTop&&(this.lastScrollTop=e.target.scrollTop,this.orientation="vertical"),this.moveBar()},onKeyDown:function(e){if(this.orientation==="vertical")switch(e.code){case"ArrowDown":{this.setTimer("scrollTop",this.step),e.preventDefault();break}case"ArrowUp":{this.setTimer("scrollTop",this.step*-1),e.preventDefault();break}case"ArrowLeft":case"ArrowRight":{e.preventDefault();break}}else if(this.orientation==="horizontal")switch(e.code){case"ArrowRight":{this.setTimer("scrollLeft",this.step),e.preventDefault();break}case"ArrowLeft":{this.setTimer("scrollLeft",this.step*-1),e.preventDefault();break}case"ArrowDown":case"ArrowUp":{e.preventDefault();break}}},onKeyUp:function(){this.clearTimer()},repeat:function(e,r){this.$refs.content[e]+=r,this.moveBar()},setTimer:function(e,r){var o=this;this.clearTimer(),this.timer=setTimeout(function(){o.repeat(e,r)},40)},clearTimer:function(){this.timer&&clearTimeout(this.timer)},onDocumentMouseMove:function(e){this.isXBarClicked?this.onMouseMoveForXBar(e):this.isYBarClicked?this.onMouseMoveForYBar(e):(this.onMouseMoveForXBar(e),this.onMouseMoveForYBar(e))},onMouseMoveForXBar:function(e){var r=this,o=e.pageX-this.lastPageX;this.lastPageX=e.pageX,this.frame=this.requestAnimationFrame(function(){r.$refs.content.scrollLeft+=o/r.scrollXRatio})},onMouseMoveForYBar:function(e){var r=this,o=e.pageY-this.lastPageY;this.lastPageY=e.pageY,this.frame=this.requestAnimationFrame(function(){r.$refs.content.scrollTop+=o/r.scrollYRatio})},onFocus:function(e){this.$refs.xBar.isSameNode(e.target)?this.orientation="horizontal":this.$refs.yBar.isSameNode(e.target)&&(this.orientation="vertical")},onBlur:function(){this.orientation==="horizontal"&&(this.orientation="vertical")},onDocumentMouseUp:function(){this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&s.removeClass(this.$refs.yBar,"p-scrollpanel-grabbed"),this.$refs.xBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&s.removeClass(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&s.removeClass(document.body,"p-scrollpanel-grabbed"),this.unbindDocumentMouseListeners(),this.isXBarClicked=!1,this.isYBarClicked=!1},requestAnimationFrame:function(e){var r=window.requestAnimationFrame||this.timeoutFrame;return r(e)},refresh:function(){this.moveBar()},scrollTop:function(e){var r=this.$refs.content.scrollHeight-this.$refs.content.clientHeight;e=e>r?r:e>0?e:0,this.$refs.content.scrollTop=e},timeoutFrame:function(e){setTimeout(e,0)},bindDocumentMouseListeners:function(){var e=this;this.documentMouseMoveListener||(this.documentMouseMoveListener=function(r){e.onDocumentMouseMove(r)},document.addEventListener("mousemove",this.documentMouseMoveListener)),this.documentMouseUpListener||(this.documentMouseUpListener=function(r){e.onDocumentMouseUp(r)},document.addEventListener("mouseup",this.documentMouseUpListener))},unbindDocumentMouseListeners:function(){this.documentMouseMoveListener&&(document.removeEventListener("mousemove",this.documentMouseMoveListener),this.documentMouseMoveListener=null),this.documentMouseUpListener&&(document.removeEventListener("mouseup",this.documentMouseUpListener),this.documentMouseUpListener=null)},bindDocumentResizeListener:function(){var e=this;this.documentResizeListener||(this.documentResizeListener=function(){e.moveBar()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentResizeListener:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}}},w=["aria-valuenow"],L=["aria-valuenow"];function x(t,e,r,o,l,n){return h(),f("div",a({class:t.cx("root")},t.ptm("root"),{"data-pc-name":"scrollpanel"}),[u("div",a({class:t.cx("wrapper")},t.ptm("wrapper")),[u("div",a({ref:"content",class:t.cx("content"),onScroll:e[0]||(e[0]=function(){return n.onScroll&&n.onScroll.apply(n,arguments)}),onMouseenter:e[1]||(e[1]=function(){return n.moveBar&&n.moveBar.apply(n,arguments)})},t.ptm("content")),[m(t.$slots,"default")],16)],16),u("div",a({ref:"xBar",class:t.cx("barx"),tabindex:"0",role:"scrollbar","aria-orientation":"horizontal","aria-valuenow":l.lastScrollLeft,onMousedown:e[2]||(e[2]=function(){return n.onXBarMouseDown&&n.onXBarMouseDown.apply(n,arguments)}),onKeydown:e[3]||(e[3]=function(i){return n.onKeyDown(i)}),onKeyup:e[4]||(e[4]=function(){return n.onKeyUp&&n.onKeyUp.apply(n,arguments)}),onFocus:e[5]||(e[5]=function(){return n.onFocus&&n.onFocus.apply(n,arguments)}),onBlur:e[6]||(e[6]=function(){return n.onBlur&&n.onBlur.apply(n,arguments)})},t.ptm("barx"),{"data-pc-group-section":"bar"}),null,16,w),u("div",a({ref:"yBar",class:t.cx("bary"),tabindex:"0",role:"scrollbar","aria-orientation":"vertical","aria-valuenow":l.lastScrollTop,onMousedown:e[7]||(e[7]=function(){return n.onYBarMouseDown&&n.onYBarMouseDown.apply(n,arguments)}),onKeydown:e[8]||(e[8]=function(i){return n.onKeyDown(i)}),onKeyup:e[9]||(e[9]=function(){return n.onKeyUp&&n.onKeyUp.apply(n,arguments)}),onFocus:e[10]||(e[10]=function(){return n.onFocus&&n.onFocus.apply(n,arguments)})},t.ptm("bary"),{"data-pc-group-section":"bar"}),null,16,L)],16)}M.render=x;export{M as default};
