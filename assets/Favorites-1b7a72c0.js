import{r as t,j as e,c as n,d as g,g as F,B as u,e as w}from"./index-6bd2b1d3.js";import{G as L,N as b,F as S}from"./GetUser-28a74e2e.js";const y=()=>{const[i,h]=t.useState([]),[c,v]=t.useState(!0),[r,f]=t.useState(3),[p,l]=t.useState(!1),[j,x]=t.useState(0),o=L();t.useEffect(()=>{(async()=>{l(!0);try{const m=await F(o);if(m){const s=Object.values(m);x(s.length),(s.length===0||s.length===3||s.length<r)&&(l(!1),u.info("You have reached the end of nannies' list."))}const d=await w(o,r);if(d){const s=Object.values(d);h(s)}else return;v(!1)}catch{u.error("Something went wrong.")}})()},[r,o,j]);const N=()=>{f(a=>a+3)};return e.jsxs("div",{className:n.wrapper,children:[e.jsx("ul",{className:n.list,children:i.map(a=>e.jsx(b,{...a},a.name))}),p&&e.jsx("button",{className:n.btn_more,onClick:N,children:"Load more"}),i.length===0&&!c&&e.jsx("div",{className:n.text_any,children:"There are no favorite nannies."}),c&&e.jsx(g,{size:450})]})},_="_wrapper_1w2zx_1",O={wrapper:_},T=()=>e.jsxs("div",{className:O.wrapper,children:[e.jsx(S,{}),e.jsx(y,{})]});export{T as default};
