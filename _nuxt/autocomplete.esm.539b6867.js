import X from"./button.esm.5b77e7a0.js";import{s as Z}from"./index.esm.a73125bb.js";import{s as J}from"./index.esm.176e8243.js";import{s as Q}from"./index.esm.2a9d11bb.js";import{O as Y}from"./overlayeventbus.esm.4c5859e0.js";import{s as $}from"./portal.esm.71a874fb.js";import{a1 as _,a2 as u,a3 as R,a4 as A,a5 as p,a6 as ee,a7 as te,i as x,a8 as ne,t as a,v as h,a9 as l,aa as I,W as F,X as z,ab as y,x as S,y as v,V,ac as G,ad as K,A as k,z as E,ae as ie,af as oe,B as D,ag as se}from"./entry.8a90dc5f.js";import le from"./virtualscroller.esm.a411c9a5.js";import{s as re}from"./basecomponent.esm.68a88bb9.js";import"./badge.esm.19043fc4.js";import"./baseicon.esm.913784e4.js";var ae=`
@layer primevue {
    .p-autocomplete {
        display: inline-flex;
    }

    .p-autocomplete-loader {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
    }

    .p-autocomplete-dd .p-autocomplete-input {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-autocomplete-dd .p-autocomplete-input,
    .p-autocomplete-dd .p-autocomplete-multiple-container {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .p-autocomplete-dd .p-autocomplete-dropdown {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0px;
    }

    .p-autocomplete .p-autocomplete-panel {
        min-width: 100%;
    }

    .p-autocomplete-panel {
        position: absolute;
        overflow: auto;
        top: 0;
        left: 0;
    }

    .p-autocomplete-items {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .p-autocomplete-item {
        cursor: pointer;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
    }

    .p-autocomplete-multiple-container {
        margin: 0;
        padding: 0;
        list-style-type: none;
        cursor: text;
        overflow: hidden;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .p-autocomplete-token {
        cursor: default;
        display: inline-flex;
        align-items: center;
        flex: 0 0 auto;
    }

    .p-autocomplete-token-icon {
        cursor: pointer;
    }

    .p-autocomplete-input-token {
        flex: 1 1 auto;
        display: inline-flex;
    }

    .p-autocomplete-input-token input {
        border: 0 none;
        outline: 0 none;
        background-color: transparent;
        margin: 0;
        padding: 0;
        box-shadow: none;
        border-radius: 0;
        width: 100%;
    }

    .p-fluid .p-autocomplete {
        display: flex;
    }

    .p-fluid .p-autocomplete-dd .p-autocomplete-input {
        width: 1%;
    }
}
`,ue={root:{position:"relative"}},de={root:function(e){var n=e.instance,o=e.props;return["p-autocomplete p-component p-inputwrapper",{"p-disabled":o.disabled,"p-focus":n.focused,"p-autocomplete-dd":o.dropdown,"p-autocomplete-multiple":o.multiple,"p-inputwrapper-filled":o.modelValue||u.isNotEmpty(n.inputValue),"p-inputwrapper-focus":n.focused,"p-overlay-open":n.overlayVisible}]},input:function(e){var n=e.props;return["p-autocomplete-input p-inputtext p-component",{"p-autocomplete-dd-input":n.dropdown}]},container:"p-autocomplete-multiple-container p-component p-inputtext",token:function(e){var n=e.instance,o=e.i;return["p-autocomplete-token",{"p-focus":n.focusedMultipleOptionIndex===o}]},tokenLabel:"p-autocomplete-token-label",removeTokenIcon:"p-autocomplete-token-icon",inputToken:"p-autocomplete-input-token",loadingIcon:"p-autocomplete-loader",dropdownButton:"p-autocomplete-dropdown",panel:function(e){var n=e.instance;return["p-autocomplete-panel p-component",{"p-input-filled":n.$primevue.config.inputStyle==="filled","p-ripple-disabled":n.$primevue.config.ripple===!1}]},list:"p-autocomplete-items",itemGroup:"p-autocomplete-item-group",item:function(e){var n=e.instance,o=e.option,s=e.i,i=e.getItemOptions;return["p-autocomplete-item",{"p-highlight":n.isSelected(o),"p-focus":n.focusedOptionIndex===n.getOptionIndex(s,i),"p-disabled":n.isOptionDisabled(o)}]},emptyMessage:"p-autocomplete-empty-message"},pe=_.extend({name:"autocomplete",css:ae,classes:de,inlineStyles:ue}),ce={name:"BaseAutoComplete",extends:re,props:{modelValue:null,suggestions:{type:Array,default:null},field:{type:[String,Function],default:null},optionLabel:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"200px"},dropdown:{type:Boolean,default:!1},dropdownMode:{type:String,default:"blank"},autoHighlight:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:null},dataKey:{type:String,default:null},minLength:{type:Number,default:1},delay:{type:Number,default:300},appendTo:{type:String,default:"body"},forceSelection:{type:Boolean,default:!1},completeOnFocus:{type:Boolean,default:!1},inputId:{type:String,default:null},inputStyle:{type:Object,default:null},inputClass:{type:[String,Object],default:null},inputProps:{type:null,default:null},panelStyle:{type:Object,default:null},panelClass:{type:[String,Object],default:null},panelProps:{type:null,default:null},dropdownIcon:{type:String,default:void 0},dropdownClass:{type:[String,Object],default:null},loadingIcon:{type:String,default:void 0},removeTokenIcon:{type:String,default:void 0},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!0},selectOnFocus:{type:Boolean,default:!1},searchLocale:{type:String,default:void 0},searchMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptySearchMessage:{type:String,default:null},tabindex:{type:Number,default:0},"aria-label":{type:String,default:null},"aria-labelledby":{type:String,default:null}},style:pe,provide:function(){return{$parentInstance:this}}};function B(t){"@babel/helpers - typeof";return B=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(t)}function fe(t){return ge(t)||ye(t)||me(t)||he()}function he(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function me(t,e){if(t){if(typeof t=="string")return P(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(t,e)}}function ye(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ge(t){if(Array.isArray(t))return P(t)}function P(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var Oe={name:"AutoComplete",extends:ce,emits:["update:modelValue","change","focus","blur","item-select","item-unselect","dropdown-click","clear","complete","before-show","before-hide","show","hide"],outsideClickListener:null,resizeListener:null,scrollHandler:null,overlay:null,virtualScroller:null,searchTimeout:null,focusOnHover:!1,dirty:!1,data:function(){return{id:this.$attrs.id,focused:!1,focusedOptionIndex:-1,focusedMultipleOptionIndex:-1,overlayVisible:!1,searching:!1}},watch:{"$attrs.id":function(e){this.id=e||R()},suggestions:function(){this.searching&&(this.show(),this.focusedOptionIndex=this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.searching=!1),this.autoUpdateModel()}},mounted:function(){this.id=this.id||R(),this.autoUpdateModel()},updated:function(){this.overlayVisible&&this.alignOverlay()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(A.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex:function(e,n){return this.virtualScrollerDisabled?e:n&&n(e).index},getOptionLabel:function(e){return this.field||this.optionLabel?u.resolveFieldData(e,this.field||this.optionLabel):e},getOptionValue:function(e){return e},getOptionRenderKey:function(e,n){return(this.dataKey?u.resolveFieldData(e,this.dataKey):this.getOptionLabel(e))+"_"+n},getPTOptions:function(e,n,o,s){return this.ptm(s,{context:{selected:this.isSelected(e),focused:this.focusedOptionIndex===this.getOptionIndex(o,n),disabled:this.isOptionDisabled(e)}})},isOptionDisabled:function(e){return this.optionDisabled?u.resolveFieldData(e,this.optionDisabled):!1},isOptionGroup:function(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel:function(e){return u.resolveFieldData(e,this.optionGroupLabel)},getOptionGroupChildren:function(e){return u.resolveFieldData(e,this.optionGroupChildren)},getAriaPosInset:function(e){var n=this;return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(function(o){return n.isOptionGroup(o)}).length:e)+1},show:function(e){this.$emit("before-show"),this.dirty=!0,this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,e&&p.focus(this.$refs.focusInput)},hide:function(e){var n=this,o=function(){n.$emit("before-hide"),n.dirty=e,n.overlayVisible=!1,n.focusedOptionIndex=-1,e&&p.focus(n.$refs.focusInput)};setTimeout(function(){o()},0)},onFocus:function(e){this.disabled||(!this.dirty&&this.completeOnFocus&&this.search(e,e.target.value,"focus"),this.dirty=!0,this.focused=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,this.overlayVisible&&this.scrollInView(this.focusedOptionIndex),this.$emit("focus",e))},onBlur:function(e){this.dirty=!1,this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e)},onKeyDown:function(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e);break}},onInput:function(e){var n=this;this.searchTimeout&&clearTimeout(this.searchTimeout);var o=e.target.value;this.multiple||this.updateModel(e,o),o.length===0?(this.hide(),this.$emit("clear")):o.length>=this.minLength?(this.focusedOptionIndex=-1,this.searchTimeout=setTimeout(function(){n.search(e,o,"input")},this.delay)):this.hide()},onChange:function(e){var n=this;if(this.forceSelection){var o=!1;if(this.visibleOptions){var s=this.visibleOptions.find(function(i){return n.isOptionMatched(i,n.$refs.focusInput.value||"")});s!==void 0&&(o=!0,!this.isSelected(s)&&this.onOptionSelect(e,s))}o||(this.$refs.focusInput.value="",this.$emit("clear"),!this.multiple&&this.updateModel(e,null))}},onMultipleContainerFocus:function(){this.disabled||(this.focused=!0)},onMultipleContainerBlur:function(){this.focusedMultipleOptionIndex=-1,this.focused=!1},onMultipleContainerKeyDown:function(e){if(this.disabled){e.preventDefault();return}switch(e.code){case"ArrowLeft":this.onArrowLeftKeyOnMultiple(e);break;case"ArrowRight":this.onArrowRightKeyOnMultiple(e);break;case"Backspace":this.onBackspaceKeyOnMultiple(e);break}},onContainerClick:function(e){this.disabled||this.searching||this.loading||this.isInputClicked(e)||this.isDropdownClicked(e)||(!this.overlay||!this.overlay.contains(e.target))&&p.focus(this.$refs.focusInput)},onDropdownClick:function(e){var n=void 0;this.overlayVisible?this.hide(!0):(p.focus(this.$refs.focusInput),n=this.$refs.focusInput.value,this.dropdownMode==="blank"?this.search(e,"","dropdown"):this.dropdownMode==="current"&&this.search(e,n,"dropdown")),this.$emit("dropdown-click",{originalEvent:e,query:n})},onOptionSelect:function(e,n){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=this.getOptionValue(n);this.multiple?(this.$refs.focusInput.value="",this.isSelected(n)||this.updateModel(e,[].concat(fe(this.modelValue||[]),[s]))):this.updateModel(e,s),this.$emit("item-select",{originalEvent:e,value:n}),o&&this.hide(!0)},onOptionMouseMove:function(e,n){this.focusOnHover&&this.changeFocusedOptionIndex(e,n)},onOverlayClick:function(e){Y.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown:function(e){switch(e.code){case"Escape":this.onEscapeKey(e);break}},onArrowDownKey:function(e){if(this.overlayVisible){var n=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,n),e.preventDefault()}},onArrowUpKey:function(e){if(this.overlayVisible)if(e.altKey)this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),e.preventDefault();else{var n=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,n),e.preventDefault()}},onArrowLeftKey:function(e){var n=e.currentTarget;this.focusedOptionIndex=-1,this.multiple&&(u.isEmpty(n.value)&&this.hasSelectedOption?(p.focus(this.$refs.multiContainer),this.focusedMultipleOptionIndex=this.modelValue.length):e.stopPropagation())},onArrowRightKey:function(e){this.focusedOptionIndex=-1,this.multiple&&e.stopPropagation()},onHomeKey:function(e){var n=e.currentTarget,o=n.value.length;n.setSelectionRange(0,e.shiftKey?o:0),this.focusedOptionIndex=-1,e.preventDefault()},onEndKey:function(e){var n=e.currentTarget,o=n.value.length;n.setSelectionRange(e.shiftKey?0:o,o),this.focusedOptionIndex=-1,e.preventDefault()},onPageUpKey:function(e){this.scrollInView(0),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey:function(e){this.overlayVisible?(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.hide()):this.onArrowDownKey(e),e.preventDefault()},onEscapeKey:function(e){this.overlayVisible&&this.hide(!0),e.preventDefault()},onTabKey:function(e){this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide()},onBackspaceKey:function(e){if(this.multiple){if(u.isNotEmpty(this.modelValue)&&!this.$refs.focusInput.value){var n=this.modelValue[this.modelValue.length-1],o=this.modelValue.slice(0,-1);this.$emit("update:modelValue",o),this.$emit("item-unselect",{originalEvent:e,value:n})}e.stopPropagation()}},onArrowLeftKeyOnMultiple:function(){this.focusedMultipleOptionIndex=this.focusedMultipleOptionIndex<1?0:this.focusedMultipleOptionIndex-1},onArrowRightKeyOnMultiple:function(){this.focusedMultipleOptionIndex++,this.focusedMultipleOptionIndex>this.modelValue.length-1&&(this.focusedMultipleOptionIndex=-1,p.focus(this.$refs.focusInput))},onBackspaceKeyOnMultiple:function(e){this.focusedMultipleOptionIndex!==-1&&this.removeOption(e,this.focusedMultipleOptionIndex)},onOverlayEnter:function(e){A.set("overlay",e,this.$primevue.config.zIndex.overlay),p.addStyles(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay()},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave:function(e){A.clear(e)},alignOverlay:function(){var e=this.multiple?this.$refs.multiContainer:this.$refs.focusInput;this.appendTo==="self"?p.relativePosition(this.overlay,e):(this.overlay.style.minWidth=p.getOuterWidth(e)+"px",p.absolutePosition(this.overlay,e))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){e.overlayVisible&&e.overlay&&e.isOutsideClicked(n)&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new ee(this.$refs.container,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!p.isTouchDevice()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isOutsideClicked:function(e){return!this.overlay.contains(e.target)&&!this.isInputClicked(e)&&!this.isDropdownClicked(e)},isInputClicked:function(e){return this.multiple?e.target===this.$refs.multiContainer||this.$refs.multiContainer.contains(e.target):e.target===this.$refs.focusInput},isDropdownClicked:function(e){return this.$refs.dropdownButton?e.target===this.$refs.dropdownButton||this.$refs.dropdownButton.$el.contains(e.target):!1},isOptionMatched:function(e,n){return this.isValidOption(e)&&this.getOptionLabel(e).toLocaleLowerCase(this.searchLocale)===n.toLocaleLowerCase(this.searchLocale)},isValidOption:function(e){return u.isNotEmpty(e)&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption:function(e){return this.isValidOption(e)&&this.isSelected(e)},isSelected:function(e){return u.equals(this.modelValue,this.getOptionValue(e),this.equalityKey)},findFirstOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(n){return e.isValidOption(n)})},findLastOptionIndex:function(){var e=this;return u.findLastIndex(this.visibleOptions,function(n){return e.isValidOption(n)})},findNextOptionIndex:function(e){var n=this,o=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(s){return n.isValidOption(s)}):-1;return o>-1?o+e+1:e},findPrevOptionIndex:function(e){var n=this,o=e>0?u.findLastIndex(this.visibleOptions.slice(0,e),function(s){return n.isValidOption(s)}):-1;return o>-1?o:e},findSelectedOptionIndex:function(){var e=this;return this.hasSelectedOption?this.visibleOptions.findIndex(function(n){return e.isValidSelectedOption(n)}):-1},findFirstFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},search:function(e,n,o){n!=null&&(o==="input"&&n.trim().length===0||(this.searching=!0,this.$emit("complete",{originalEvent:e,query:n})))},removeOption:function(e,n){var o=this,s=this.modelValue[n],i=this.modelValue.filter(function(b,w){return w!==n}).map(function(b){return o.getOptionValue(b)});this.updateModel(e,i),this.$emit("item-unselect",{originalEvent:e,value:s}),this.dirty=!0,p.focus(this.$refs.focusInput)},changeFocusedOptionIndex:function(e,n){this.focusedOptionIndex!==n&&(this.focusedOptionIndex=n,this.scrollInView(),(this.selectOnFocus||this.autoHighlight)&&this.onOptionSelect(e,this.visibleOptions[n],!1))},scrollInView:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,o=n!==-1?"".concat(this.id,"_").concat(n):this.focusedOptionId,s=p.findSingle(this.list,'li[id="'.concat(o,'"]'));s?s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"start"}):this.virtualScrollerDisabled||setTimeout(function(){e.virtualScroller&&e.virtualScroller.scrollToIndex(n!==-1?n:e.focusedOptionIndex)},0)},autoUpdateModel:function(){(this.selectOnFocus||this.autoHighlight)&&this.autoOptionFocus&&!this.hasSelectedOption&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex(),this.onOptionSelect(null,this.visibleOptions[this.focusedOptionIndex],!1))},updateModel:function(e,n){this.$emit("update:modelValue",n),this.$emit("change",{originalEvent:e,value:n})},flatOptions:function(e){var n=this;return(e||[]).reduce(function(o,s,i){o.push({optionGroup:s,group:!0,index:i});var b=n.getOptionGroupChildren(s);return b&&b.forEach(function(w){return o.push(w)}),o},[])},overlayRef:function(e){this.overlay=e},listRef:function(e,n){this.list=e,n&&n(e)},virtualScrollerRef:function(e){this.virtualScroller=e}},computed:{visibleOptions:function(){return this.optionGroupLabel?this.flatOptions(this.suggestions):this.suggestions||[]},inputValue:function(){if(u.isNotEmpty(this.modelValue))if(B(this.modelValue)==="object"){var e=this.getOptionLabel(this.modelValue);return e??this.modelValue}else return this.modelValue;else return""},hasSelectedOption:function(){return u.isNotEmpty(this.modelValue)},equalityKey:function(){return this.dataKey},searchResultMessageText:function(){return u.isNotEmpty(this.visibleOptions)&&this.overlayVisible?this.searchMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptySearchMessageText},searchMessageText:function(){return this.searchMessage||this.$primevue.config.locale.searchMessage||""},emptySearchMessageText:function(){return this.emptySearchMessage||this.$primevue.config.locale.emptySearchMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.hasSelectedOption?this.selectionMessageText.replaceAll("{0}",this.multiple?this.modelValue.length:"1"):this.emptySelectionMessageText},focusedOptionId:function(){return this.focusedOptionIndex!==-1?"".concat(this.id,"_").concat(this.focusedOptionIndex):null},focusedMultipleOptionId:function(){return this.focusedMultipleOptionIndex!==-1?"".concat(this.id,"_multiple_option_").concat(this.focusedMultipleOptionIndex):null},ariaSetSize:function(){var e=this;return this.visibleOptions.filter(function(n){return!e.isOptionGroup(n)}).length},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions}},components:{Button:X,VirtualScroller:le,Portal:$,ChevronDownIcon:Z,SpinnerIcon:J,TimesCircleIcon:Q},directives:{ripple:te}};function C(t){"@babel/helpers - typeof";return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(t)}function H(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,o)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?H(Object(n),!0).forEach(function(o){be(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function be(t,e,n){return e=ve(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ve(t){var e=Ie(t,"string");return C(e)==="symbol"?e:String(e)}function Ie(t,e){if(C(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e||"default");if(C(o)!=="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Se=["id","value","placeholder","tabindex","disabled","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant"],we=["aria-activedescendant"],ke=["id","aria-label","aria-setsize","aria-posinset"],Ce=["id","placeholder","tabindex","disabled","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant"],Le=["id"],Me=["id"],xe=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove","data-p-highlight","data-p-focus","data-p-disabled"];function Ve(t,e,n,o,s,i){var b=x("SpinnerIcon"),w=x("Button"),j=x("VirtualScroller"),N=x("Portal"),U=ne("ripple");return a(),h("div",l({ref:"container",class:t.cx("root"),style:t.sx("root"),onClick:e[15]||(e[15]=function(){return i.onContainerClick&&i.onContainerClick.apply(i,arguments)})},t.ptm("root"),{"data-pc-name":"autocomplete"}),[t.multiple?I("",!0):(a(),h("input",l({key:0,ref:"focusInput",id:t.inputId,type:"text",class:[t.cx("input"),t.inputClass],style:t.inputStyle,value:i.inputValue,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,disabled:t.disabled,autocomplete:"off",role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-expanded":s.overlayVisible,"aria-controls":s.id+"_list","aria-activedescendant":s.focused?i.focusedOptionId:void 0,onFocus:e[0]||(e[0]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:e[1]||(e[1]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onKeyDown&&i.onKeyDown.apply(i,arguments)}),onInput:e[3]||(e[3]=function(){return i.onInput&&i.onInput.apply(i,arguments)}),onChange:e[4]||(e[4]=function(){return i.onChange&&i.onChange.apply(i,arguments)})},O(O({},t.inputProps),t.ptm("input"))),null,16,Se)),t.multiple?(a(),h("ul",l({key:1,ref:"multiContainer",class:t.cx("container"),tabindex:"-1",role:"listbox","aria-orientation":"horizontal","aria-activedescendant":s.focused?i.focusedMultipleOptionId:void 0,onFocus:e[10]||(e[10]=function(){return i.onMultipleContainerFocus&&i.onMultipleContainerFocus.apply(i,arguments)}),onBlur:e[11]||(e[11]=function(){return i.onMultipleContainerBlur&&i.onMultipleContainerBlur.apply(i,arguments)}),onKeydown:e[12]||(e[12]=function(){return i.onMultipleContainerKeyDown&&i.onMultipleContainerKeyDown.apply(i,arguments)})},t.ptm("container")),[(a(!0),h(F,null,z(t.modelValue,function(c,f){return a(),h("li",l({key:f,id:s.id+"_multiple_option_"+f,class:t.cx("token",{i:f}),role:"option","aria-label":i.getOptionLabel(c),"aria-selected":!0,"aria-setsize":t.modelValue.length,"aria-posinset":f+1},t.ptm("token")),[y(t.$slots,"chip",{value:c},function(){return[S("span",l({class:t.cx("tokenLabel")},t.ptm("tokenLabel")),v(i.getOptionLabel(c)),17)]}),y(t.$slots,"removetokenicon",{class:K(t.cx("removeTokenIcon")),index:f,onClick:function(g){return i.removeOption(g,f)},removeCallback:function(g){return i.removeOption(g,f)}},function(){return[(a(),V(G(t.removeTokenIcon?"span":"TimesCircleIcon"),l({class:[t.cx("removeTokenIcon"),t.removeTokenIcon],onClick:function(g){return i.removeOption(g,f)},"aria-hidden":"true"},t.ptm("removeTokenIcon")),null,16,["class","onClick"]))]})],16,ke)}),128)),S("li",l({class:t.cx("inputToken"),role:"option"},t.ptm("inputToken")),[S("input",l({ref:"focusInput",id:t.inputId,type:"text",style:t.inputStyle,class:t.inputClass,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,disabled:t.disabled,autocomplete:"off",role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-autocomplete":"list","aria-expanded":s.overlayVisible,"aria-controls":s.id+"_list","aria-activedescendant":s.focused?i.focusedOptionId:void 0,onFocus:e[5]||(e[5]=function(){return i.onFocus&&i.onFocus.apply(i,arguments)}),onBlur:e[6]||(e[6]=function(){return i.onBlur&&i.onBlur.apply(i,arguments)}),onKeydown:e[7]||(e[7]=function(){return i.onKeyDown&&i.onKeyDown.apply(i,arguments)}),onInput:e[8]||(e[8]=function(){return i.onInput&&i.onInput.apply(i,arguments)}),onChange:e[9]||(e[9]=function(){return i.onChange&&i.onChange.apply(i,arguments)})},O(O({},t.inputProps),t.ptm("input"))),null,16,Ce)],16)],16,we)):I("",!0),s.searching||t.loading?y(t.$slots,"loadingicon",{key:2,class:K(t.cx("loadingIcon"))},function(){return[t.loadingIcon?(a(),h("i",l({key:0,class:["pi-spin",t.cx("loadingIcon"),t.loadingIcon],"aria-hidden":"true"},t.ptm("loadingIcon")),null,16)):(a(),V(b,l({key:1,class:[t.cx("loadingIcon"),t.loadingIcon],spin:"","aria-hidden":"true"},t.ptm("loadingIcon")),null,16,["class"]))]}):I("",!0),t.dropdown?(a(),V(w,{key:3,ref:"dropdownButton",type:"button",tabindex:"-1",class:K([t.cx("dropdownButton"),t.dropdownClass]),disabled:t.disabled,"aria-hidden":"true",onClick:i.onDropdownClick,unstyled:t.unstyled,pt:t.ptm("dropdownButton"),"data-pc-section":"dropdownbutton"},{icon:k(function(){return[y(t.$slots,"dropdownicon",{class:K(t.dropdownIcon)},function(){return[(a(),V(G(t.dropdownIcon?"span":"ChevronDownIcon"),l({class:t.dropdownIcon},t.ptm("dropdownButton").icon,{"data-pc-section":"dropdownicon"}),null,16,["class"]))]})]}),_:3},8,["class","disabled","onClick","unstyled","pt"])):I("",!0),S("span",l({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSearchResult"),{"data-p-hidden-accessible":!0}),v(i.searchResultMessageText),17),E(N,{appendTo:t.appendTo},{default:k(function(){return[E(ie,l({name:"p-connected-overlay",onEnter:i.onOverlayEnter,onAfterEnter:i.onOverlayAfterEnter,onLeave:i.onOverlayLeave,onAfterLeave:i.onOverlayAfterLeave},t.ptm("transition")),{default:k(function(){return[s.overlayVisible?(a(),h("div",l({key:0,ref:i.overlayRef,class:[t.cx("panel"),t.panelClass],style:O(O({},t.panelStyle),{},{"max-height":i.virtualScrollerDisabled?t.scrollHeight:""}),onClick:e[13]||(e[13]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)}),onKeydown:e[14]||(e[14]=function(){return i.onOverlayKeyDown&&i.onOverlayKeyDown.apply(i,arguments)})},O(O({},t.panelProps),t.ptm("panel"))),[y(t.$slots,"header",{value:t.modelValue,suggestions:i.visibleOptions}),E(j,l({ref:i.virtualScrollerRef},t.virtualScrollerOptions,{style:{height:t.scrollHeight},items:i.visibleOptions,tabindex:-1,disabled:i.virtualScrollerDisabled,pt:t.ptm("virtualScroller")}),oe({content:k(function(c){var f=c.styleClass,L=c.contentRef,g=c.items,m=c.getItemOptions,q=c.contentStyle,M=c.itemSize;return[S("ul",l({ref:function(d){return i.listRef(d,L)},id:s.id+"_list",class:[t.cx("list"),f],style:q,role:"listbox"},t.ptm("list")),[(a(!0),h(F,null,z(g,function(r,d){return a(),h(F,{key:i.getOptionRenderKey(r,i.getOptionIndex(d,m))},[i.isOptionGroup(r)?(a(),h("li",l({key:0,id:s.id+"_"+i.getOptionIndex(d,m),style:{height:M?M+"px":void 0},class:t.cx("itemGroup"),role:"option"},t.ptm("itemGroup")),[y(t.$slots,"optiongroup",{option:r.optionGroup,item:r.optionGroup,index:i.getOptionIndex(d,m)},function(){return[D(v(i.getOptionGroupLabel(r.optionGroup)),1)]})],16,Me)):se((a(),h("li",l({key:1,id:s.id+"_"+i.getOptionIndex(d,m),style:{height:M?M+"px":void 0},class:t.cx("item",{option:r,i:d,getItemOptions:m}),role:"option","aria-label":i.getOptionLabel(r),"aria-selected":i.isSelected(r),"aria-disabled":i.isOptionDisabled(r),"aria-setsize":i.ariaSetSize,"aria-posinset":i.getAriaPosInset(i.getOptionIndex(d,m)),onClick:function(T){return i.onOptionSelect(T,r)},onMousemove:function(T){return i.onOptionMouseMove(T,i.getOptionIndex(d,m))},"data-p-highlight":i.isSelected(r),"data-p-focus":s.focusedOptionIndex===i.getOptionIndex(d,m),"data-p-disabled":i.isOptionDisabled(r)},i.getPTOptions(r,m,d,"item")),[t.$slots.option?y(t.$slots,"option",{key:0,option:r,index:i.getOptionIndex(d,m)},function(){return[D(v(i.getOptionLabel(r)),1)]}):y(t.$slots,"item",{key:1,item:r,index:i.getOptionIndex(d,m)},function(){return[D(v(i.getOptionLabel(r)),1)]})],16,xe)),[[U]])],64)}),128)),!g||g&&g.length===0?(a(),h("li",l({key:0,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage")),[y(t.$slots,"empty",{},function(){return[D(v(i.searchResultMessageText),1)]})],16)):I("",!0)],16,Le)]}),_:2},[t.$slots.loader?{name:"loader",fn:k(function(c){var f=c.options;return[y(t.$slots,"loader",{options:f})]}),key:"0"}:void 0]),1040,["style","items","disabled","pt"]),y(t.$slots,"footer",{value:t.modelValue,suggestions:i.visibleOptions}),S("span",l({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),v(i.selectedMessageText),17)],16)):I("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16)}Oe.render=Ve;export{Oe as default};