import{_ as l,u as d,r as p,a as m,c as h,w as v,o as n,b as u,d as f,e,t as i,f as r,V as g,p as x,g as V,h as w}from"./index-2e89b60b.js";const t=s=>(x("data-v-e5232c47"),s=s(),V(),s),b={key:0,class:"page loading"},y={key:1,class:"user page"},S=t(()=>e("div",{class:"user__left"},[e("img",{class:"user__image",src:w,alt:""})],-1)),q={class:"user__info"},U={class:"user__contacts"},k={class:"title"},I={class:"user__contacts-item"},B=t(()=>e("strong",null,"email:",-1)),E={class:"user__contacts-item"},N=t(()=>e("strong",null,"phone:",-1)),D=t(()=>e("div",{class:"user__about"},[e("h2",{class:"title"},"О себе"),e("p",{class:"user__about-text"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")],-1)),L={__name:"UserView",setup(s){const _=d(),a=p(!1),c=m(),o=h(()=>c.state.users.user);return v(async()=>{a.value=!0,await c.dispatch("getUser",_.params.id),a.value=!1}),(R,T)=>a.value?(n(),u("div",b,[f(g)])):(n(),u("div",y,[S,e("div",q,[e("div",U,[e("h2",k,i(o.value.name),1),e("div",I,[B,r(" "+i(o.value.email),1)]),e("div",E,[N,r(" "+i(o.value.phone),1)])]),D])]))}},z=l(L,[["__scopeId","data-v-e5232c47"]]);export{z as default};