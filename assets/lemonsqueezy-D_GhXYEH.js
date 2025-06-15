import{a0 as Oe,aQ as ze,ai as J,w as fe,aR as Ae,aS as Te,am as je,aF as ee,L as j,j as N,ap as oe,k as _,v as R,E as I,d as z,h as u,u as ye,al as Fe,G as Me,aC as H,aa as he,aT as te,a8 as G,y as xe,aU as Ee,aV as Le,aW as We,aX as He,aY as ke,m as x,af as ne,aZ as me,a2 as Ge,x as Ue,a_ as qe,a$ as Ve,b0 as Xe,b1 as Qe,b2 as Ye,b3 as Ze,b4 as Je,ae as en,ad as O,l as _e,n as nn,I as se,b5 as Se,b6 as on,b7 as tn,q as E,b8 as ve,O as rn,_ as an,P as dn,o as ln,g as L,a as W,f as ue,R as ce}from"./app-6dsjw9l8.js";import{N as sn}from"./Icon-BN3kzZDi.js";import{C as un}from"./ChevronRight-Ioy3oqZ8.js";import{b as cn,B as pn}from"./Button-BYKB_ss8.js";import{N as fn}from"./Image-BYDTDJyw.js";function hn(e={},o){const r=Oe({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:n,keyup:i}=e,t=a=>{switch(a.key){case"Control":r.ctrl=!0;break;case"Meta":r.command=!0,r.win=!0;break;case"Shift":r.shift=!0;break;case"Tab":r.tab=!0;break}n!==void 0&&Object.keys(n).forEach(h=>{if(h!==a.key)return;const b=n[h];if(typeof b=="function")b(a);else{const{stop:S=!1,prevent:P=!1}=b;S&&a.stopPropagation(),P&&a.preventDefault(),b.handler(a)}})},l=a=>{switch(a.key){case"Control":r.ctrl=!1;break;case"Meta":r.command=!1,r.win=!1;break;case"Shift":r.shift=!1;break;case"Tab":r.tab=!1;break}i!==void 0&&Object.keys(i).forEach(h=>{if(h!==a.key)return;const b=i[h];if(typeof b=="function")b(a);else{const{stop:S=!1,prevent:P=!1}=b;S&&a.stopPropagation(),P&&a.preventDefault(),b.handler(a)}})},c=()=>{(o===void 0||o.value)&&(J("keydown",document,t),J("keyup",document,l)),o!==void 0&&fe(o,a=>{a?(J("keydown",document,t),J("keyup",document,l)):(ee("keydown",document,t),ee("keyup",document,l))})};return Ae()?(Te(c),je(()=>{(o===void 0||o.value)&&(ee("keydown",document,t),ee("keyup",document,l))})):c(),ze(r)}function bn(e,o,r){const n=j(e.value);let i=null;return fe(e,t=>{i!==null&&window.clearTimeout(i),t===!0?r&&!r.value?n.value=!0:i=window.setTimeout(()=>{n.value=!0},o):n.value=!1}),n}function mn(e){return o=>{o?e.value=o.$el:e.value=null}}const m="0!important",Ne="-1px!important";function V(e){return _(`${e}-type`,[R("& +",[N("button",{},[_(`${e}-type`,[I("border",{borderLeftWidth:m}),I("state-border",{left:Ne})])])])])}function X(e){return _(`${e}-type`,[R("& +",[N("button",[_(`${e}-type`,[I("border",{borderTopWidth:m}),I("state-border",{top:Ne})])])])])}const vn=N("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[oe("vertical",{flexDirection:"row"},[oe("rtl",[N("button",[R("&:first-child:not(:last-child)",`
 margin-right: ${m};
 border-top-right-radius: ${m};
 border-bottom-right-radius: ${m};
 `),R("&:last-child:not(:first-child)",`
 margin-left: ${m};
 border-top-left-radius: ${m};
 border-bottom-left-radius: ${m};
 `),R("&:not(:first-child):not(:last-child)",`
 margin-left: ${m};
 margin-right: ${m};
 border-radius: ${m};
 `),V("default"),_("ghost",[V("primary"),V("info"),V("success"),V("warning"),V("error")])])])]),_("vertical",{flexDirection:"column"},[N("button",[R("&:first-child:not(:last-child)",`
 margin-bottom: ${m};
 margin-left: ${m};
 margin-right: ${m};
 border-bottom-left-radius: ${m};
 border-bottom-right-radius: ${m};
 `),R("&:last-child:not(:first-child)",`
 margin-top: ${m};
 margin-left: ${m};
 margin-right: ${m};
 border-top-left-radius: ${m};
 border-top-right-radius: ${m};
 `),R("&:not(:first-child):not(:last-child)",`
 margin: ${m};
 border-radius: ${m};
 `),X("default"),_("ghost",[X("primary"),X("info"),X("success"),X("warning"),X("error")])])])]),wn={size:{type:String,default:void 0},vertical:Boolean},gn=z({name:"ButtonGroup",props:wn,setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:r}=ye(e);return Fe("-button-group",vn,o),H(cn,e),{rtlEnabled:Me("ButtonGroup",r,o),mergedClsPrefix:o}},render(){const{mergedClsPrefix:e}=this;return u("div",{class:[`${e}-button-group`,this.rtlEnabled&&`${e}-button-group--rtl`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}}),be=he("n-dropdown-menu"),re=he("n-dropdown"),we=he("n-dropdown-option"),Pe=z({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return u("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),yn=z({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=G(be),{renderLabelRef:r,labelFieldRef:n,nodePropsRef:i,renderOptionRef:t}=G(re);return{labelField:n,showIcon:e,hasSubmenu:o,renderLabel:r,nodeProps:i,renderOption:t}},render(){var e;const{clsPrefix:o,hasSubmenu:r,showIcon:n,nodeProps:i,renderLabel:t,renderOption:l}=this,{rawNode:c}=this.tmNode,a=u("div",Object.assign({class:`${o}-dropdown-option`},i==null?void 0:i(c)),u("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},u("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,n&&`${o}-dropdown-option-body__prefix--show-icon`]},te(c.icon)),u("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},t?t(c):te((e=c.title)!==null&&e!==void 0?e:c[this.labelField])),u("div",{class:[`${o}-dropdown-option-body__suffix`,r&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return l?l({node:a,option:c}):a}});function pe(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function xn(e){return e.type==="group"}function Re(e){return e.type==="divider"}function kn(e){return e.type==="render"}const $e=z({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=G(re),{hoverKeyRef:r,keyboardKeyRef:n,lastToggledSubmenuKeyRef:i,pendingKeyPathRef:t,activeKeyPathRef:l,animatedRef:c,mergedShowRef:a,renderLabelRef:h,renderIconRef:b,labelFieldRef:S,childrenFieldRef:P,renderOptionRef:C,nodePropsRef:K,menuPropsRef:A}=o,k=G(we,null),v=G(be),B=G(ke),Q=x(()=>e.tmNode.rawNode),Y=x(()=>{const{value:s}=P;return pe(e.tmNode.rawNode,s)}),ie=x(()=>{const{disabled:s}=e.tmNode;return s}),ae=x(()=>{if(!Y.value)return!1;const{key:s,disabled:y}=e.tmNode;if(y)return!1;const{value:D}=r,{value:F}=n,{value:le}=i,{value:M}=t;return D!==null?M.includes(s):F!==null?M.includes(s)&&M[M.length-1]!==s:le!==null?M.includes(s):!1}),de=x(()=>n.value===null&&!c.value),Z=bn(ae,300,de),U=x(()=>!!(k!=null&&k.enteringSubmenuRef.value)),q=j(!1);H(we,{enteringSubmenuRef:q});function T(){q.value=!0}function d(){q.value=!1}function g(){const{parentKey:s,tmNode:y}=e;y.disabled||a.value&&(i.value=s,n.value=null,r.value=y.key)}function f(){const{tmNode:s}=e;s.disabled||a.value&&r.value!==s.key&&g()}function p(s){if(e.tmNode.disabled||!a.value)return;const{relatedTarget:y}=s;y&&!me({target:y},"dropdownOption")&&!me({target:y},"scrollbarRail")&&(r.value=null)}function $(){const{value:s}=Y,{tmNode:y}=e;a.value&&!s&&!y.disabled&&(o.doSelect(y.key,y.rawNode),o.doUpdateShow(!1))}return{labelField:S,renderLabel:h,renderIcon:b,siblingHasIcon:v.showIconRef,siblingHasSubmenu:v.hasSubmenuRef,menuProps:A,popoverBody:B,animated:c,mergedShowSubmenu:x(()=>Z.value&&!U.value),rawNode:Q,hasSubmenu:Y,pending:ne(()=>{const{value:s}=t,{key:y}=e.tmNode;return s.includes(y)}),childActive:ne(()=>{const{value:s}=l,{key:y}=e.tmNode,D=s.findIndex(F=>y===F);return D===-1?!1:D<s.length-1}),active:ne(()=>{const{value:s}=l,{key:y}=e.tmNode,D=s.findIndex(F=>y===F);return D===-1?!1:D===s.length-1}),mergedDisabled:ie,renderOption:C,nodeProps:K,handleClick:$,handleMouseMove:f,handleMouseEnter:g,handleMouseLeave:p,handleSubmenuBeforeEnter:T,handleSubmenuAfterEnter:d}},render(){var e,o;const{animated:r,rawNode:n,mergedShowSubmenu:i,clsPrefix:t,siblingHasIcon:l,siblingHasSubmenu:c,renderLabel:a,renderIcon:h,renderOption:b,nodeProps:S,props:P,scrollable:C}=this;let K=null;if(i){const B=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,n,n.children);K=u(Ie,Object.assign({},B,{clsPrefix:t,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const A={class:[`${t}-dropdown-option-body`,this.pending&&`${t}-dropdown-option-body--pending`,this.active&&`${t}-dropdown-option-body--active`,this.childActive&&`${t}-dropdown-option-body--child-active`,this.mergedDisabled&&`${t}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},k=S==null?void 0:S(n),v=u("div",Object.assign({class:[`${t}-dropdown-option`,k==null?void 0:k.class],"data-dropdown-option":!0},k),u("div",xe(A,P),[u("div",{class:[`${t}-dropdown-option-body__prefix`,l&&`${t}-dropdown-option-body__prefix--show-icon`]},[h?h(n):te(n.icon)]),u("div",{"data-dropdown-option":!0,class:`${t}-dropdown-option-body__label`},a?a(n):te((o=n[this.labelField])!==null&&o!==void 0?o:n.title)),u("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__suffix`,c&&`${t}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?u(sn,null,{default:()=>u(un,null)}):null)]),this.hasSubmenu?u(Ee,null,{default:()=>[u(Le,null,{default:()=>u("div",{class:`${t}-dropdown-offset-container`},u(We,{show:this.mergedShowSubmenu,placement:this.placement,to:C&&this.popoverBody||void 0,teleportDisabled:!C},{default:()=>u("div",{class:`${t}-dropdown-menu-wrapper`},r?u(He,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>K}):K)}))})]}):null);return b?b({node:v,option:n}):v}}),_n=z({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:r}=this,{children:n}=e;return u(Ge,null,u(yn,{clsPrefix:r,tmNode:e,key:e.key}),n==null?void 0:n.map(i=>{const{rawNode:t}=i;return t.show===!1?null:Re(t)?u(Pe,{clsPrefix:r,key:i.key}):i.isGroup?(Ue("dropdown","`group` node is not allowed to be put in `group` node."),null):u($e,{clsPrefix:r,tmNode:i,parentKey:o,key:i.key})}))}}),Sn=z({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return u("div",o,[e==null?void 0:e()])}}),Ie=z({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:r}=G(re);H(be,{showIconRef:x(()=>{const i=o.value;return e.tmNodes.some(t=>{var l;if(t.isGroup)return(l=t.children)===null||l===void 0?void 0:l.some(({rawNode:a})=>i?i(a):a.icon);const{rawNode:c}=t;return i?i(c):c.icon})}),hasSubmenuRef:x(()=>{const{value:i}=r;return e.tmNodes.some(t=>{var l;if(t.isGroup)return(l=t.children)===null||l===void 0?void 0:l.some(({rawNode:a})=>pe(a,i));const{rawNode:c}=t;return pe(c,i)})})});const n=j(null);return H(Xe,null),H(Qe,null),H(ke,n),{bodyRef:n}},render(){const{parentKey:e,clsPrefix:o,scrollable:r}=this,n=this.tmNodes.map(i=>{const{rawNode:t}=i;return t.show===!1?null:kn(t)?u(Sn,{tmNode:i,key:i.key}):Re(t)?u(Pe,{clsPrefix:o,key:i.key}):xn(t)?u(_n,{clsPrefix:o,tmNode:i,parentKey:e,key:i.key}):u($e,{clsPrefix:o,tmNode:i,parentKey:e,key:i.key,props:t.props,scrollable:r})});return u("div",{class:[`${o}-dropdown-menu`,r&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},r?u(qe,{contentClass:`${o}-dropdown-menu__content`},{default:()=>n}):n,this.showArrow?Ve({clsPrefix:o,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),Nn=N("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Ye(),N("dropdown-option",`
 position: relative;
 `,[R("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[R("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),N("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[R("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),oe("disabled",[_("pending",`
 color: var(--n-option-text-color-hover);
 `,[I("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),R("&::before","background-color: var(--n-option-color-hover);")]),_("active",`
 color: var(--n-option-text-color-active);
 `,[I("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),R("&::before","background-color: var(--n-option-color-active);")]),_("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[I("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),_("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),_("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[I("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[_("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),I("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[_("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),N("icon",`
 font-size: var(--n-option-icon-size);
 `)]),I("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),I("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[_("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),N("icon",`
 font-size: var(--n-option-icon-size);
 `)]),N("dropdown-menu","pointer-events: all;")]),N("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),N("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),N("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),R(">",[N("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),oe("scrollable",`
 padding: var(--n-padding);
 `),_("scrollable",[I("content",`
 padding: var(--n-padding);
 `)])]),Pn={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Rn=Object.keys(Se),$n=Object.assign(Object.assign(Object.assign({},Se),Pn),_e.props),In=z({name:"Dropdown",inheritAttrs:!1,props:$n,setup(e){const o=j(!1),r=en(O(e,"show"),o),n=x(()=>{const{keyField:d,childrenField:g}=e;return on(e.options,{getKey(f){return f[d]},getDisabled(f){return f.disabled===!0},getIgnored(f){return f.type==="divider"||f.type==="render"},getChildren(f){return f[g]}})}),i=x(()=>n.value.treeNodes),t=j(null),l=j(null),c=j(null),a=x(()=>{var d,g,f;return(f=(g=(d=t.value)!==null&&d!==void 0?d:l.value)!==null&&g!==void 0?g:c.value)!==null&&f!==void 0?f:null}),h=x(()=>n.value.getPath(a.value).keyPath),b=x(()=>n.value.getPath(e.value).keyPath),S=ne(()=>e.keyboard&&r.value);hn({keydown:{ArrowUp:{prevent:!0,handler:ie},ArrowRight:{prevent:!0,handler:Y},ArrowDown:{prevent:!0,handler:ae},ArrowLeft:{prevent:!0,handler:Q},Enter:{prevent:!0,handler:de},Escape:B}},S);const{mergedClsPrefixRef:P,inlineThemeDisabled:C}=ye(e),K=_e("Dropdown","-dropdown",Nn,tn,e,P);H(re,{labelFieldRef:O(e,"labelField"),childrenFieldRef:O(e,"childrenField"),renderLabelRef:O(e,"renderLabel"),renderIconRef:O(e,"renderIcon"),hoverKeyRef:t,keyboardKeyRef:l,lastToggledSubmenuKeyRef:c,pendingKeyPathRef:h,activeKeyPathRef:b,animatedRef:O(e,"animated"),mergedShowRef:r,nodePropsRef:O(e,"nodeProps"),renderOptionRef:O(e,"renderOption"),menuPropsRef:O(e,"menuProps"),doSelect:A,doUpdateShow:k}),fe(r,d=>{!e.animated&&!d&&v()});function A(d,g){const{onSelect:f}=e;f&&se(f,d,g)}function k(d){const{"onUpdate:show":g,onUpdateShow:f}=e;g&&se(g,d),f&&se(f,d),o.value=d}function v(){t.value=null,l.value=null,c.value=null}function B(){k(!1)}function Q(){U("left")}function Y(){U("right")}function ie(){U("up")}function ae(){U("down")}function de(){const d=Z();d!=null&&d.isLeaf&&r.value&&(A(d.key,d.rawNode),k(!1))}function Z(){var d;const{value:g}=n,{value:f}=a;return!g||f===null?null:(d=g.getNode(f))!==null&&d!==void 0?d:null}function U(d){const{value:g}=a,{value:{getFirstAvailableNode:f}}=n;let p=null;if(g===null){const $=f();$!==null&&(p=$.key)}else{const $=Z();if($){let s;switch(d){case"down":s=$.getNext();break;case"up":s=$.getPrev();break;case"right":s=$.getChild();break;case"left":s=$.getParent();break}s&&(p=s.key)}}p!==null&&(t.value=null,l.value=p)}const q=x(()=>{const{size:d,inverted:g}=e,{common:{cubicBezierEaseInOut:f},self:p}=K.value,{padding:$,dividerColor:s,borderRadius:y,optionOpacityDisabled:D,[E("optionIconSuffixWidth",d)]:F,[E("optionSuffixWidth",d)]:le,[E("optionIconPrefixWidth",d)]:M,[E("optionPrefixWidth",d)]:Ce,[E("fontSize",d)]:Ke,[E("optionHeight",d)]:Be,[E("optionIconSize",d)]:De}=p,w={"--n-bezier":f,"--n-font-size":Ke,"--n-padding":$,"--n-border-radius":y,"--n-option-height":Be,"--n-option-prefix-width":Ce,"--n-option-icon-prefix-width":M,"--n-option-suffix-width":le,"--n-option-icon-suffix-width":F,"--n-option-icon-size":De,"--n-divider-color":s,"--n-option-opacity-disabled":D};return g?(w["--n-color"]=p.colorInverted,w["--n-option-color-hover"]=p.optionColorHoverInverted,w["--n-option-color-active"]=p.optionColorActiveInverted,w["--n-option-text-color"]=p.optionTextColorInverted,w["--n-option-text-color-hover"]=p.optionTextColorHoverInverted,w["--n-option-text-color-active"]=p.optionTextColorActiveInverted,w["--n-option-text-color-child-active"]=p.optionTextColorChildActiveInverted,w["--n-prefix-color"]=p.prefixColorInverted,w["--n-suffix-color"]=p.suffixColorInverted,w["--n-group-header-text-color"]=p.groupHeaderTextColorInverted):(w["--n-color"]=p.color,w["--n-option-color-hover"]=p.optionColorHover,w["--n-option-color-active"]=p.optionColorActive,w["--n-option-text-color"]=p.optionTextColor,w["--n-option-text-color-hover"]=p.optionTextColorHover,w["--n-option-text-color-active"]=p.optionTextColorActive,w["--n-option-text-color-child-active"]=p.optionTextColorChildActive,w["--n-prefix-color"]=p.prefixColor,w["--n-suffix-color"]=p.suffixColor,w["--n-group-header-text-color"]=p.groupHeaderTextColor),w}),T=C?nn("dropdown",x(()=>`${e.size[0]}${e.inverted?"i":""}`),q,e):void 0;return{mergedClsPrefix:P,mergedTheme:K,tmNodes:i,mergedShow:r,handleAfterLeave:()=>{e.animated&&v()},doUpdateShow:k,cssVars:C?void 0:q,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const e=(n,i,t,l,c)=>{var a;const{mergedClsPrefix:h,menuProps:b}=this;(a=this.onRender)===null||a===void 0||a.call(this);const S=(b==null?void 0:b(void 0,this.tmNodes.map(C=>C.rawNode)))||{},P={ref:mn(i),class:[n,`${h}-dropdown`,this.themeClass],clsPrefix:h,tmNodes:this.tmNodes,style:[...t,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:l,onMouseleave:c};return u(Ie,xe(this.$attrs,P,S))},{mergedTheme:o}=this,r={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return u(Je,Object.assign({},Ze(this.$props,Rn),r),{trigger:()=>{var n,i;return(i=(n=this.$slots).default)===null||i===void 0?void 0:i.call(n)}})}}),ge="https://ghfast.top/",Cn=z({__name:"Desktop",async setup(e,{expose:o}){o();let r,n;const i=([r,n]=ve(()=>fetch("https://ad-api.nn.ci/v0/app/latest")),r=await r,n(),r),t=([r,n]=ve(()=>i.json()),r=await r,n(),r),l=t.version,c=[{key:"mac_arm64",label:"MacOS (Apple Silicon)",url:`https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${l}_aarch64.dmg`},{key:"mac_x64",label:"MacOS (Intel)",url:`https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${l}_x64.dmg`},{key:"win_x64",label:"Windows (X64)",url:`https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${l}_x64_en-US.msi`},{key:"win_arm64",label:"Windows (ARM64)",url:`https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${l}_arm64-setup.exe`},{key:"linux",label:"Linux",url:`https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${l}_amd64.deb`}],a=navigator.platform.toLowerCase(),h=j("win_x64");a.includes("win")?h.value="win_x64":a.includes("linux")?h.value="linux":a.includes("mac")&&(h.value="mac_arm64"),console.log(h.value);let b={down:"Download",website:"Website"};const S=x(()=>{var v;return(v=c.find(B=>B.key===h.value))==null?void 0:v.label}),P=x(()=>c.map(v=>({...v,label:`${v.label} ${h.value===v.key?"✅":""}`})));location.pathname.startsWith("/zh/")&&(b={down:"下载",website:"官网"});function C(){var B;const v=(B=c.find(Q=>Q.key===h.value))==null?void 0:B.url;window.open(`${ge}${v}`,"_blank")}function K(v){h.value=v}function A(){window.open("https://ad.nn.ci/","_blank")}const k={proxy:ge,res:i,data:t,version:l,raw:c,platform:a,plat:h,get text(){return b},set text(v){b=v},fullPlat:S,options:P,down:C,handleSelect:K,openWebsite:A,get NButtonGroup(){return gn},get NImage(){return fn},get NSpace(){return rn},get NButton(){return pn},get NDropdown(){return In}};return Object.defineProperty(k,"__isScriptSetup",{enumerable:!1,value:!0}),k}});function Kn(e,o,r,n,i,t){return ln(),dn(n.NSpace,{align:"center",vertical:"",size:"large"},{default:L(()=>[W(n.NSpace,{class:"btn"},{default:L(()=>[W(n.NButton,{size:"large",type:"info",onClick:n.openWebsite,tertiary:""},{default:L(()=>[ue(ce(n.text.website),1)]),_:1}),W(n.NButtonGroup,null,{default:L(()=>[W(n.NDropdown,{trigger:"hover",options:n.options,onSelect:n.handleSelect,size:"large"},{default:L(()=>[W(n.NButton,{size:"large",type:"primary",tertiary:""},{default:L(()=>[ue("💻"+ce(n.fullPlat),1)]),_:1})]),_:1},8,["options"]),W(n.NButton,{size:"large",onClick:n.down,type:"info",secondary:""},{default:L(()=>[ue(ce(n.text.down),1)]),_:1})]),_:1})]),_:1}),W(n.NImage,{src:"/img/guide/desktop.png"})]),_:1})}const Tn=an(Cn,[["render",Kn],["__scopeId","data-v-978f9f72"],["__file","Desktop.vue"]]),jn="/docs/img/desktop/key_mbd.png",Fn="/docs/img/desktop/logIn_mbd.png",Mn="/docs/img/desktop/key_lemonsqueezy.png",En="/docs/img/desktop/login_lemonsqueezy.png",Ln="/docs/img/desktop/mianbaoduo.png",Wn="/docs/img/desktop/lemonsqueezy.png";export{Tn as D,Mn as _,En as a,jn as b,Fn as c,Wn as d,Ln as e};
