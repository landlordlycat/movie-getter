import{S as d,c as M}from"./public.7d0cafd6.js";import{p as N}from"./path.5ccf9386.js";import{d as U,e as C,f as V}from"./api.4d446348.js";import{F as z}from"./FlashOutline.625b9bad.js";import{A,R as O}from"./RefreshCircleOutline.efa33d0c.js";import{e as E,r as p,o as I,bh as j,v as G,A as K,B as o,I as P,C as e,D as r,y as _,_ as f,h as m}from"./index.da6d6ec6.js";import{u as R}from"./use-notification.a4315ab7.js";import{N as S}from"./Icon.0be0a17c.js";import{_ as v}from"./Space.fc697dab.js";import{_ as $}from"./Input.29ccf1a1.js";import{_ as q}from"./DataTable.d11a9c94.js";import{_ as H}from"./Pagination.5cd571c8.js";import"./index.80337ce4.js";import"./base.12718b58.js";import"./data.80e5bc4f.js";import"./use-merged-state.5f7ba65f.js";import"./get-slot.40f09d44.js";import"./Checkbox.4db60b3a.js";import"./Tooltip.8f8da3ee.js";import"./next-frame-once.da993024.js";import"./Dropdown.c4c5b9b7.js";import"./create.eac446e4.js";import"./Ellipsis.cc7af03c.js";import"./Tag.56045487.js";const J={style:{display:"flex","align-items":"center",height:"100%"}},L={style:{display:"flex","align-items":"center",height:"100%"}},Q={style:{"margin-top":"15px","margin-bottom":"10px"}},xe=E({__name:"PanelMovies",setup(T){N.value=[{name:"\u5F71\u7247",params:null,to:""}];const F=p([{title:"ID",key:"id",width:"100px",align:"center"},{title:"\u5F71\u7247\u540D",key:"name",width:"200px",ellipsis:!0,align:"center",render(u,t){return m(d,{value:u.name,onUpdateValue(n){a.value[t].name=n}})}},{title:"\u65F6\u957F",key:"duration",width:"100px",align:"center",render(u,t){return m(d,{value:u.duration,onUpdateValue(n){a.value[t].duration=n}})}},{title:"\u7B80\u4ECB",key:"description",ellipsis:!0,align:"center",render(u,t){return m(d,{value:u.description,onUpdateValue(n){a.value[t].description=n}})}},{title:"\u5BFC\u6F14",key:"director",ellipsis:!0,align:"center",width:"200px"},{title:"\u64CD\u4F5C",key:"action",width:"150px",align:"center",render(u,t){return m(v,{justify:"center"},()=>m(f,{secondary:!0,type:"error",size:"small",onClick:()=>{U(u.id).then(()=>{x(),k.success({duration:2e3,content:"\u5220\u9664",meta:"\u64CD\u4F5C\u6210\u529F"})})}},()=>"\u5220\u9664"))}}]),g=20,a=p([]),i=p(""),l=p(1),s=p(1),y=M(V,500);let h;I(()=>{j(()=>{i.value.trim()!=""?(i.value.trim()!=h&&(l.value=1,h=i.value.trim()),y(i.value,g,l.value,a,s)):C(g,l.value,a,s)})});const k=R();function x(){i.value.trim()!=""?y(i.value,20,l.value,a,s):C(20,l.value,a,s)}return(u,t)=>{const n=S,w=$,B=q,D=H,b=P;return G(),K(b,{title:"\u5F71\u7247\u7BA1\u7406",size:"small"},{"header-extra":o(()=>[e(r(v),null,{default:o(()=>[e(w,{value:i.value,"onUpdate:value":t[0]||(t[0]=c=>i.value=c),placeholder:"\u641C\u7D22",round:""},{prefix:o(()=>[e(n,{component:r(z)},null,8,["component"])]),_:1},8,["value"]),_("div",J,[e(r(f),{text:"",type:"primary",style:{"font-size":"24px"},disabled:""},{default:o(()=>[e(n,null,{default:o(()=>[e(r(A))]),_:1})]),_:1})]),_("div",L,[e(r(f),{text:"",type:"info",style:{"font-size":"24px"},onClick:x},{default:o(()=>[e(n,null,{default:o(()=>[e(r(O))]),_:1})]),_:1})])]),_:1})]),default:o(()=>[e(B,{columns:F.value,data:a.value,bordered:!1,"single-line":!1},null,8,["columns","data"]),_("div",Q,[e(r(v),{justify:"center"},{default:o(()=>[e(D,{page:l.value,"onUpdate:page":t[1]||(t[1]=c=>l.value=c),"page-count":s.value},null,8,["page","page-count"])]),_:1})])]),_:1})}}});export{xe as default};