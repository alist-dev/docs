import{j as w,v as d,k as h,d as z,h as $,u as v,l as c,m as f,n as T,t as R,q as a}from"./app-6dsjw9l8.js";const B=w("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[d("&:first-child",{marginTop:0}),h("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[h("align-text",{paddingLeft:0},[d("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),d("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),d("&::before",{backgroundColor:"var(--n-bar-color)"})])]),P=Object.assign(Object.assign({},c.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),W=n=>z({name:`H${n}`,props:P,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:o}=v(e),t=c("Typography","-h",B,R,e,i),s=f(()=>{const{type:l}=e,{common:{cubicBezierEaseInOut:g},self:{headerFontWeight:u,headerTextColor:m,[a("headerPrefixWidth",n)]:b,[a("headerFontSize",n)]:p,[a("headerMargin",n)]:x,[a("headerBarWidth",n)]:C,[a("headerBarColor",l)]:y}}=t.value;return{"--n-bezier":g,"--n-font-size":p,"--n-margin":x,"--n-bar-color":y,"--n-bar-width":C,"--n-font-weight":u,"--n-text-color":m,"--n-prefix-width":b}}),r=o?T(`h${n}`,f(()=>e.type[0]),s,e):void 0;return{mergedClsPrefix:i,cssVars:o?void 0:s,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;const{prefix:i,alignText:o,mergedClsPrefix:t,cssVars:s,$slots:r}=this;return(e=this.onRender)===null||e===void 0||e.call(this),$(`h${n}`,{class:[`${t}-h`,`${t}-h${n}`,this.themeClass,{[`${t}-h--prefix-bar`]:i,[`${t}-h--align-text`]:o}],style:s},r)}}),S=W("1");export{S as N};
