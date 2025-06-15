import{j as d,E as t,k as g,S as j,v as H,d as F,h as r,T as M,u as N,l as C,G as O,m as p,n as V,L as W,y as K,N as q,U as D,V as G,W as U,X,Y,Z,F as J,K as Q,q as i,$ as ee}from"./app-6dsjw9l8.js";const ne=d("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[t("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),g("closable",[d("alert-body",[t("title",`
 padding-right: 24px;
 `)])]),t("icon",{color:"var(--n-icon-color)"}),d("alert-body",{padding:"var(--n-padding)"},[t("title",{color:"var(--n-title-text-color)"}),t("content",{color:"var(--n-content-text-color)"})]),j({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),t("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),t("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),g("show-icon",[d("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),g("right-adjust",[d("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),d("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[t("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[H("& +",[t("content",{marginTop:"9px"})])]),t("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),t("icon",{transition:"color .3s var(--n-bezier)"})]),re=Object.assign(Object.assign({},C.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),ie=F({name:"Alert",inheritAttrs:!1,props:re,slots:Object,setup(o){const{mergedClsPrefixRef:e,mergedBorderedRef:a,inlineThemeDisabled:h,mergedRtlRef:f}=N(o),u=C("Alert","-alert",ne,ee,o,e),z=O("Alert",f,e),b=p(()=>{const{common:{cubicBezierEaseInOut:l},self:n}=u.value,{fontSize:x,borderRadius:R,titleFontWeight:I,lineHeight:$,iconSize:A,iconMargin:m,iconMarginRtl:w,closeIconSize:T,closeBorderRadius:P,closeSize:_,closeMargin:B,closeMarginRtl:S,padding:k}=n,{type:s}=o,{left:L,right:E}=Q(m);return{"--n-bezier":l,"--n-color":n[i("color",s)],"--n-close-icon-size":T,"--n-close-border-radius":P,"--n-close-color-hover":n[i("closeColorHover",s)],"--n-close-color-pressed":n[i("closeColorPressed",s)],"--n-close-icon-color":n[i("closeIconColor",s)],"--n-close-icon-color-hover":n[i("closeIconColorHover",s)],"--n-close-icon-color-pressed":n[i("closeIconColorPressed",s)],"--n-icon-color":n[i("iconColor",s)],"--n-border":n[i("border",s)],"--n-title-text-color":n[i("titleTextColor",s)],"--n-content-text-color":n[i("contentTextColor",s)],"--n-line-height":$,"--n-border-radius":R,"--n-font-size":x,"--n-title-font-weight":I,"--n-icon-size":A,"--n-icon-margin":m,"--n-icon-margin-rtl":w,"--n-close-size":_,"--n-close-margin":B,"--n-close-margin-rtl":S,"--n-padding":k,"--n-icon-margin-left":L,"--n-icon-margin-right":E}}),c=h?V("alert",p(()=>o.type[0]),b,o):void 0,v=W(!0),y=()=>{const{onAfterLeave:l,onAfterHide:n}=o;l&&l(),n&&n()};return{rtlEnabled:z,mergedClsPrefix:e,mergedBordered:a,visible:v,handleCloseClick:()=>{var l;Promise.resolve((l=o.onClose)===null||l===void 0?void 0:l.call(o)).then(n=>{n!==!1&&(v.value=!1)})},handleAfterLeave:()=>{y()},mergedTheme:u,cssVars:h?void 0:b,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){var o;return(o=this.onRender)===null||o===void 0||o.call(this),r(M,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:e,$slots:a}=this,h={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?r("div",Object.assign({},K(this.$attrs,h)),this.closable&&r(q,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&r("div",{class:`${e}-alert__border`}),this.showIcon&&r("div",{class:`${e}-alert__icon`,"aria-hidden":"true"},D(a.icon,()=>[r(G,{clsPrefix:e},{default:()=>{switch(this.type){case"success":return r(Z,null);case"info":return r(Y,null);case"warning":return r(X,null);case"error":return r(U,null);default:return null}}})])),r("div",{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},J(a.header,f=>{const u=f||this.title;return u?r("div",{class:`${e}-alert-body__title`},u):null}),a.default&&r("div",{class:`${e}-alert-body__content`},a))):null}})}});export{ie as N};
