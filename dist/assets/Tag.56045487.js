import{c as ao,a5 as o,a as no,b as p,a0 as x,a7 as z,d as I,e as so,r as to,u as io,j as U,U as ho,t as go,a9 as bo,i as F,af as d,m as Co,br as L,aa as N,h as y,bs as vo,O as uo,ad as po}from"./index.da6d6ec6.js";var fo={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px",closeMarginRtl:"0 4px 0 0"};const ko=c=>{const{textColor2:h,primaryColorHover:r,primaryColorPressed:f,primaryColor:a,infoColor:i,successColor:s,warningColor:n,errorColor:t,baseColor:k,borderColor:m,opacityDisabled:g,tagColor:v,closeIconColor:e,closeIconColorHover:l,closeIconColorPressed:u,borderRadiusSmall:b,fontSizeMini:C,fontSizeTiny:S,fontSizeSmall:P,fontSizeMedium:$,heightMini:H,heightTiny:B,heightSmall:R,heightMedium:M,closeColorHover:T,closeColorPressed:E,buttonColor2Hover:_,buttonColor2Pressed:W,fontWeightStrong:j}=c;return Object.assign(Object.assign({},fo),{closeBorderRadius:b,heightTiny:H,heightSmall:B,heightMedium:R,heightLarge:M,borderRadius:b,opacityDisabled:g,fontSizeTiny:C,fontSizeSmall:S,fontSizeMedium:P,fontSizeLarge:$,fontWeightStrong:j,textColorCheckable:h,textColorHoverCheckable:h,textColorPressedCheckable:h,textColorChecked:k,colorCheckable:"#0000",colorHoverCheckable:_,colorPressedCheckable:W,colorChecked:a,colorCheckedHover:r,colorCheckedPressed:f,border:`1px solid ${m}`,textColor:h,color:v,colorBordered:"rgb(250, 250, 252)",closeIconColor:e,closeIconColorHover:l,closeIconColorPressed:u,closeColorHover:T,closeColorPressed:E,borderPrimary:`1px solid ${o(a,{alpha:.3})}`,textColorPrimary:a,colorPrimary:o(a,{alpha:.12}),colorBorderedPrimary:o(a,{alpha:.1}),closeIconColorPrimary:a,closeIconColorHoverPrimary:a,closeIconColorPressedPrimary:a,closeColorHoverPrimary:o(a,{alpha:.12}),closeColorPressedPrimary:o(a,{alpha:.18}),borderInfo:`1px solid ${o(i,{alpha:.3})}`,textColorInfo:i,colorInfo:o(i,{alpha:.12}),colorBorderedInfo:o(i,{alpha:.1}),closeIconColorInfo:i,closeIconColorHoverInfo:i,closeIconColorPressedInfo:i,closeColorHoverInfo:o(i,{alpha:.12}),closeColorPressedInfo:o(i,{alpha:.18}),borderSuccess:`1px solid ${o(s,{alpha:.3})}`,textColorSuccess:s,colorSuccess:o(s,{alpha:.12}),colorBorderedSuccess:o(s,{alpha:.1}),closeIconColorSuccess:s,closeIconColorHoverSuccess:s,closeIconColorPressedSuccess:s,closeColorHoverSuccess:o(s,{alpha:.12}),closeColorPressedSuccess:o(s,{alpha:.18}),borderWarning:`1px solid ${o(n,{alpha:.35})}`,textColorWarning:n,colorWarning:o(n,{alpha:.15}),colorBorderedWarning:o(n,{alpha:.12}),closeIconColorWarning:n,closeIconColorHoverWarning:n,closeIconColorPressedWarning:n,closeColorHoverWarning:o(n,{alpha:.12}),closeColorPressedWarning:o(n,{alpha:.18}),borderError:`1px solid ${o(t,{alpha:.23})}`,textColorError:t,colorError:o(t,{alpha:.1}),colorBorderedError:o(t,{alpha:.08}),closeIconColorError:t,closeIconColorHoverError:t,closeIconColorPressedError:t,closeColorHoverError:o(t,{alpha:.12}),closeColorPressedError:o(t,{alpha:.18})})},mo={name:"Tag",common:ao,self:ko};var xo=mo,yo={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},zo=no("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[p("strong",`
 font-weight: var(--n-font-weight-strong);
 `),x("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),x("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),x("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),x("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 cursor: pointer;
 `),p("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[x("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),x("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),p("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),p("icon, avatar",[p("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),p("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),p("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[z("disabled",[I("&:hover","background-color: var(--n-color-hover-checkable);",[z("checked","color: var(--n-text-color-hover-checkable);")]),I("&:active","background-color: var(--n-color-pressed-checkable);",[z("checked","color: var(--n-text-color-pressed-checkable);")])]),p("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[z("disabled",[I("&:hover","background-color: var(--n-color-checked-hover);"),I("&:active","background-color: var(--n-color-checked-pressed);")])])])]);const Io=Object.assign(Object.assign(Object.assign({},U.props),yo),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalStopClickPropagation:Boolean,onCheckedChange:{type:Function,validator:()=>!0,default:void 0}}),So=uo("n-tag");var $o=so({name:"Tag",props:Io,setup(c){const h=to(null),{mergedBorderedRef:r,mergedClsPrefixRef:f,inlineThemeDisabled:a,mergedRtlRef:i}=io(c),s=U("Tag","-tag",zo,xo,c,f);ho(So,{roundRef:go(c,"round")});function n(e){if(!c.disabled&&c.checkable){const{checked:l,onCheckedChange:u,onUpdateChecked:b,"onUpdate:checked":C}=c;b&&b(!l),C&&C(!l),u&&u(!l)}}function t(e){if(c.internalStopClickPropagation&&e.stopPropagation(),!c.disabled){const{onClose:l}=c;l&&po(l,e)}}const k={setTextContent(e){const{value:l}=h;l&&(l.textContent=e)}},m=bo("Tag",i,f),g=F(()=>{const{type:e,size:l,color:{color:u,textColor:b}={}}=c,{common:{cubicBezierEaseInOut:C},self:{padding:S,closeMargin:P,closeMarginRtl:$,borderRadius:H,opacityDisabled:B,textColorCheckable:R,textColorHoverCheckable:M,textColorPressedCheckable:T,textColorChecked:E,colorCheckable:_,colorHoverCheckable:W,colorPressedCheckable:j,colorChecked:V,colorCheckedHover:D,colorCheckedPressed:K,closeBorderRadius:A,fontWeightStrong:q,[d("colorBordered",e)]:G,[d("closeSize",l)]:J,[d("closeIconSize",l)]:Q,[d("fontSize",l)]:X,[d("height",l)]:w,[d("color",e)]:Y,[d("textColor",e)]:Z,[d("border",e)]:oo,[d("closeIconColor",e)]:O,[d("closeIconColorHover",e)]:eo,[d("closeIconColorPressed",e)]:ro,[d("closeColorHover",e)]:lo,[d("closeColorPressed",e)]:co}}=s.value;return{"--n-font-weight-strong":q,"--n-avatar-size-override":`calc(${w} - 8px)`,"--n-bezier":C,"--n-border-radius":H,"--n-border":oo,"--n-close-icon-size":Q,"--n-close-color-pressed":co,"--n-close-color-hover":lo,"--n-close-border-radius":A,"--n-close-icon-color":O,"--n-close-icon-color-hover":eo,"--n-close-icon-color-pressed":ro,"--n-close-icon-color-disabled":O,"--n-close-margin":P,"--n-close-margin-rtl":$,"--n-close-size":J,"--n-color":u||(r.value?G:Y),"--n-color-checkable":_,"--n-color-checked":V,"--n-color-checked-hover":D,"--n-color-checked-pressed":K,"--n-color-hover-checkable":W,"--n-color-pressed-checkable":j,"--n-font-size":X,"--n-height":w,"--n-opacity-disabled":B,"--n-padding":S,"--n-text-color":b||Z,"--n-text-color-checkable":R,"--n-text-color-checked":E,"--n-text-color-hover-checkable":M,"--n-text-color-pressed-checkable":T}}),v=a?Co("tag",F(()=>{let e="";const{type:l,size:u,color:{color:b,textColor:C}={}}=c;return e+=l[0],e+=u[0],b&&(e+=`a${L(b)}`),C&&(e+=`b${L(C)}`),r.value&&(e+="c"),e}),g,c):void 0;return Object.assign(Object.assign({},k),{rtlEnabled:m,mergedClsPrefix:f,contentRef:h,mergedBordered:r,handleClick:n,handleCloseClick:t,cssVars:a?void 0:g,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender})},render(){var c,h;const{mergedClsPrefix:r,rtlEnabled:f,closable:a,color:{borderColor:i}={},round:s,onRender:n,$slots:t}=this;n==null||n();const k=N(t.avatar,g=>g&&y("div",{class:`${r}-tag__avatar`},g)),m=N(t.icon,g=>g&&y("div",{class:`${r}-tag__icon`},g));return y("div",{class:[`${r}-tag`,this.themeClass,{[`${r}-tag--rtl`]:f,[`${r}-tag--strong`]:this.strong,[`${r}-tag--disabled`]:this.disabled,[`${r}-tag--checkable`]:this.checkable,[`${r}-tag--checked`]:this.checkable&&this.checked,[`${r}-tag--round`]:s,[`${r}-tag--avatar`]:k,[`${r}-tag--icon`]:m,[`${r}-tag--closable`]:a}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},m||k,y("span",{class:`${r}-tag__content`,ref:"contentRef"},(h=(c=this.$slots).default)===null||h===void 0?void 0:h.call(c)),!this.checkable&&a?y(vo,{clsPrefix:r,class:`${r}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:s,absolute:!0}):null,!this.checkable&&this.mergedBordered?y("div",{class:`${r}-tag__border`,style:{borderColor:i}}):null)}});export{$o as N,So as t};