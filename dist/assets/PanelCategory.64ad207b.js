import{S as h}from"./public.7d0cafd6.js";import{p as D}from"./path.5ccf9386.js";import{c as s}from"./data.80e5bc4f.js";import{a as l,b as x,c as B}from"./api.4d446348.js";import{F as v}from"./FlashOutline.625b9bad.js";import{A as F,R as k}from"./RefreshCircleOutline.efa33d0c.js";import{e as N,r as z,v as b,A as w,B as t,I as A,C as e,D as n,y as p,_ as u,h as r}from"./index.da6d6ec6.js";import{u as O}from"./use-notification.a4315ab7.js";import{N as I}from"./Icon.0be0a17c.js";import{_ as c}from"./Space.fc697dab.js";import{_ as V}from"./Input.29ccf1a1.js";import{_ as $}from"./DataTable.d11a9c94.js";import"./index.80337ce4.js";import"./base.12718b58.js";import"./use-merged-state.5f7ba65f.js";import"./get-slot.40f09d44.js";import"./Checkbox.4db60b3a.js";import"./Tooltip.8f8da3ee.js";import"./next-frame-once.da993024.js";import"./Dropdown.c4c5b9b7.js";import"./create.eac446e4.js";import"./Ellipsis.cc7af03c.js";import"./Pagination.5cd571c8.js";import"./Tag.56045487.js";const R={style:{display:"flex","align-items":"center",height:"100%"}},S={style:{display:"flex","align-items":"center",height:"100%"}},se=N({__name:"PanelCategory",setup(j){D.value=[{name:"\u5206\u7C7B",params:null,to:""}];const _=z([{title:"ID",key:"id",width:100,align:"center"},{title:"\u540D\u5B57",key:"name",align:"center",render(a,o){return r(h,{value:a.name,onUpdateValue(i){s.value[o].name=i}})}},{title:"\u91C7\u96C6\u7C7B\u6570",key:"classNum",width:100,align:"center"},{title:"\u5F71\u7247\u6570",key:"movieNum",width:100,align:"center"},{title:"\u64CD\u4F5C",key:"action",width:"150px",align:"center",render(a,o){return r(c,{justify:"center"},()=>[a.create?r(u,{secondary:!0,type:"info",size:"small",onClick:()=>{x(a.name).then(()=>{l(),m.success({duration:2e3,content:"\u4FDD\u5B58",meta:"\u64CD\u4F5C\u6210\u529F"})})}},()=>"\u4FDD\u5B58"):null,r(u,{secondary:!0,type:"error",size:"small",onClick:()=>{B(a.id).then(()=>{l(),m.success({duration:2e3,content:"\u5220\u9664",meta:"\u64CD\u4F5C\u6210\u529F"})})}},()=>"\u5220\u9664")])}}]),m=O();function d(){s.value.push({id:0,name:"\u5F85\u4FDD\u5B58\u5206\u7C7B",classNum:0,movieNum:0,create:!0})}return(a,o)=>{const i=I,f=V,C=$,y=A;return b(),w(y,{title:"\u5206\u7C7B\u7BA1\u7406",size:"small"},{"header-extra":t(()=>[e(n(c),null,{default:t(()=>[e(f,{placeholder:"\u641C\u7D22",disabled:!0,round:""},{prefix:t(()=>[e(i,{component:n(v)},null,8,["component"])]),_:1}),p("div",R,[e(n(u),{text:"",type:"primary",style:{"font-size":"24px"},onClick:o[0]||(o[0]=g=>d())},{default:t(()=>[e(i,null,{default:t(()=>[e(n(F))]),_:1})]),_:1})]),p("div",S,[e(n(u),{text:"",type:"info",style:{"font-size":"24px"},onClick:o[1]||(o[1]=g=>n(l)())},{default:t(()=>[e(i,null,{default:t(()=>[e(n(k))]),_:1})]),_:1})])]),_:1})]),default:t(()=>[e(C,{columns:_.value,data:n(s),bordered:!1,"single-line":!1},null,8,["columns","data"])]),_:1})}}});export{se as default};