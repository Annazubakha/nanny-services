import{r as t,j as e,d as i,g as N,B as d,e as g,c as F}from"./index-a8573856.js";import{G as w,N as b,F as L}from"./GetUser-94fd6474.js";const S=({setLoading:a})=>{const[n,u]=t.useState([]),[o,f]=t.useState(3),[j,l]=t.useState(!1),[v,p]=t.useState(0),c=w();t.useEffect(()=>{(async()=>{l(!0);try{a(!0);const m=await N(c);if(m){const s=Object.values(m);p(s.length),(s.length===0||s.length===3||s.length<o)&&(l(!1),d.info("You have reached the end of nannies' list."))}const h=await g(c,o);if(a(!1),h){const s=Object.values(h);u(s)}else return}catch{d.error("Something went wrong.")}})()},[o,c,v,a]);const x=()=>{f(r=>r+3)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:i.wrapper,children:[e.jsx("ul",{className:i.list,children:n.map(r=>e.jsx(b,{...r},r.name))}),n.length===0&&e.jsx("div",{className:i.text_any,children:"There are no favorite nannies."}),j&&n.length!==0&&e.jsx("button",{className:i.btn_more,onClick:x,children:"Load more"})]})})},y="_wrapper_a9k5w_1",_={wrapper:y},I=()=>{const[a,n]=t.useState(!1);return e.jsxs(e.Fragment,{children:[a&&e.jsx(F,{size:25}),e.jsxs("div",{className:_.wrapper,children:[e.jsx(L,{}),e.jsx(S,{setLoading:n})]})]})};export{I as default};