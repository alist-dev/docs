import{j as g,k as d,v as l,d as y,x as b,h as u,y as C,u as v,l as m,m as a,n as z,z as _,A as $}from"./app-DFUtvoiZ.js";const x=g("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[d("color-transition",{transition:"color .3s var(--n-bezier)"}),d("depth",{color:"var(--n-color)"},[l("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),l("svg",{height:"1em",width:"1em"})]),R=Object.assign(Object.assign({},m.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),P=y({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:R,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=v(e),s=m("Icon","-icon",x,_,e,t),r=a(()=>{const{depth:i}=e,{common:{cubicBezierEaseInOut:c},self:h}=s.value;if(i!==void 0){const{color:f,[`opacity${i}Depth`]:p}=h;return{"--n-bezier":c,"--n-color":f,"--n-opacity":p}}return{"--n-bezier":c,"--n-color":"","--n-opacity":""}}),n=o?z("icon",a(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:t,mergedStyle:a(()=>{const{size:i,color:c}=e;return{fontSize:$(i),color:c}}),cssVars:o?void 0:r,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{$parent:t,depth:o,mergedClsPrefix:s,component:r,onRender:n,themeClass:i}=this;return!((e=t==null?void 0:t.$options)===null||e===void 0)&&e._n_icon__&&b("icon","don't wrap `n-icon` inside `n-icon`"),n==null||n(),u("i",C(this.$attrs,{role:"img",class:[`${s}-icon`,i,{[`${s}-icon--depth`]:o,[`${s}-icon--color-transition`]:o!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?u(r):this.$slots)}});export{P as N};
