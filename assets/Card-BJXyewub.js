import{v as t,j as f,B as U,C as X,D as Y,k as s,E as d,d as Z,h as i,F as b,u as ee,l as y,G as oe,m as S,n as re,H as g,N as ne,I as te,J as de,q as z,K as ae}from"./app-DFUtvoiZ.js";const se=t([f("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[Y({background:"var(--n-color-modal)"}),s("hoverable",[t("&:hover","box-shadow: var(--n-box-shadow);")]),s("content-segmented",[t(">",[d("content",{paddingTop:"var(--n-padding-bottom)"})])]),s("content-soft-segmented",[t(">",[d("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),s("footer-segmented",[t(">",[d("footer",{paddingTop:"var(--n-padding-bottom)"})])]),s("footer-soft-segmented",[t(">",[d("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),t(">",[f("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[d("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),d("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),d("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),d("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),d("content","flex: 1; min-width: 0;"),d("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[t("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),d("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),f("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[t("img",`
 display: block;
 width: 100%;
 `)]),s("bordered",`
 border: 1px solid var(--n-border-color);
 `,[t("&:target","border-color: var(--n-color-target);")]),s("action-segmented",[t(">",[d("action",[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),s("content-segmented, content-soft-segmented",[t(">",[d("content",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),s("footer-segmented, footer-soft-segmented",[t(">",[d("footer",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),s("embedded",`
 background-color: var(--n-color-embedded);
 `)]),U(f("card",`
 background: var(--n-color-modal);
 `,[s("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),X(f("card",`
 background: var(--n-color-popover);
 `,[s("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),ie={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function},le=Object.assign(Object.assign({},y.props),ie),be=Z({name:"Card",props:le,slots:Object,setup(o){const u=()=>{const{onClose:n}=o;n&&te(n)},{inlineThemeDisabled:h,mergedClsPrefixRef:e,mergedRtlRef:p}=ee(o),c=y("Card","-card",se,de,o,e),x=oe("Card",p,e),v=S(()=>{const{size:n}=o,{self:{color:r,colorModal:l,colorTarget:C,textColor:m,titleTextColor:k,titleFontWeight:$,borderColor:w,actionColor:E,borderRadius:T,lineHeight:B,closeIconColor:R,closeIconColorHover:_,closeIconColorPressed:F,closeColorHover:P,closeColorPressed:j,closeBorderRadius:O,closeIconSize:I,closeSize:M,boxShadow:H,colorPopover:N,colorEmbedded:V,colorEmbeddedModal:D,colorEmbeddedPopover:K,[z("padding",n)]:L,[z("fontSize",n)]:W,[z("titleFontSize",n)]:q},common:{cubicBezierEaseInOut:A}}=c.value,{top:G,left:J,bottom:Q}=ae(L);return{"--n-bezier":A,"--n-border-radius":T,"--n-color":r,"--n-color-modal":l,"--n-color-popover":N,"--n-color-embedded":V,"--n-color-embedded-modal":D,"--n-color-embedded-popover":K,"--n-color-target":C,"--n-text-color":m,"--n-line-height":B,"--n-action-color":E,"--n-title-text-color":k,"--n-title-font-weight":$,"--n-close-icon-color":R,"--n-close-icon-color-hover":_,"--n-close-icon-color-pressed":F,"--n-close-color-hover":P,"--n-close-color-pressed":j,"--n-border-color":w,"--n-box-shadow":H,"--n-padding-top":G,"--n-padding-bottom":Q,"--n-padding-left":J,"--n-font-size":W,"--n-title-font-size":q,"--n-close-size":M,"--n-close-icon-size":I,"--n-close-border-radius":O}}),a=h?re("card",S(()=>o.size[0]),v,o):void 0;return{rtlEnabled:x,mergedClsPrefix:e,mergedTheme:c,handleCloseClick:u,cssVars:h?void 0:v,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){const{segmented:o,bordered:u,hoverable:h,mergedClsPrefix:e,rtlEnabled:p,onRender:c,embedded:x,tag:v,$slots:a}=this;return c==null||c(),i(v,{class:[`${e}-card`,this.themeClass,x&&`${e}-card--embedded`,{[`${e}-card--rtl`]:p,[`${e}-card--content${typeof o!="boolean"&&o.content==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.content,[`${e}-card--footer${typeof o!="boolean"&&o.footer==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.footer,[`${e}-card--action-segmented`]:o===!0||o!==!1&&o.action,[`${e}-card--bordered`]:u,[`${e}-card--hoverable`]:h}],style:this.cssVars,role:this.role},b(a.cover,n=>{const r=this.cover?g([this.cover()]):n;return r&&i("div",{class:`${e}-card-cover`,role:"none"},r)}),b(a.header,n=>{const{title:r}=this,l=r?g(typeof r=="function"?[r()]:[r]):n;return l||this.closable?i("div",{class:[`${e}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},i("div",{class:`${e}-card-header__main`,role:"heading"},l),b(a["header-extra"],C=>{const m=this.headerExtra?g([this.headerExtra()]):C;return m&&i("div",{class:[`${e}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},m)}),this.closable&&i(ne,{clsPrefix:e,class:`${e}-card-header__close`,onClick:this.handleCloseClick,absolute:!0})):null}),b(a.default,n=>{const{content:r}=this,l=r?g(typeof r=="function"?[r()]:[r]):n;return l&&i("div",{class:[`${e}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},l)}),b(a.footer,n=>{const r=this.footer?g([this.footer()]):n;return r&&i("div",{class:[`${e}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},r)}),b(a.action,n=>{const r=this.action?g([this.action()]):n;return r&&i("div",{class:`${e}-card__action`,role:"none"},r)}))}});export{be as N};
