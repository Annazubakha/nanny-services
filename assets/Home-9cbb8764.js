import{j as e,s as m,a as c,I as _,r as s,L as M}from"./index-b1deb7bc.js";const k=()=>e.jsxs("div",{className:m.insideWrapper,children:[e.jsx("div",{className:m.wrapper}),e.jsx(I,{})]}),I=()=>e.jsx(L,{children:(n,t)=>e.jsx("div",{style:{position:"absolute",bottom:`${n.bottom}px`,right:`${n.right}px`},children:e.jsxs("div",{className:c.wrapper,children:[e.jsx("div",{className:c.wrapper_icon,children:e.jsx(_,{id:"done",size:30})}),e.jsxs("div",{className:c.inside_wrapper,children:[e.jsx("p",{className:c.description,children:"Experienced nannies"}),e.jsx("p",{className:c.amount,children:t})]})]})})}),A=()=>{const[n,t]=s.useState({innerWidth:window.innerWidth,innerHeight:window.innerHeight});return s.useEffect(()=>{function l(){t({innerWidth:window.innerWidth,innerHeight:window.innerHeight})}return window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}},[]),{windowSize:n}},L=({children:n})=>{const[t,l]=s.useState({bottom:90,right:0}),[i,j]=s.useState({bottom:1,right:1}),[f,v]=s.useState("15,000"),{windowSize:w}=A();return s.useEffect(()=>{const b=()=>{const r=document.querySelector(`.${m.insideWrapper}`);if(r){const u=r.clientWidth,x=r.clientHeight;let h=x-118,p=u-284;w.innerWidth<768&&(h=x-80,p=u-200),l(g=>{const S=g.bottom+5*i.bottom,z=g.right+5*i.right,o=Math.max(0,Math.min(S,h)),a=Math.max(0,Math.min(z,p)),E={bottom:o===0||o===h?-i.bottom:i.bottom,right:a===0||a===p?-i.right:i.right};return j(E),(o===0||o===h||a===0||a===p)&&W(),{bottom:o,right:a}})}},W=()=>{v(N())},N=()=>{const r=Math.random()*100;return parseFloat(r).toFixed(3)},H=setInterval(b,80);return()=>clearInterval(H)},[i,w.innerWidth]),n(t,f.replace(/\./g,","))},D="_wrapper_1fawn_1",F="_title_1fawn_26",R="_description_1fawn_56",$="_inside_wrapper_1fawn_78",y="_link_start_1fawn_101",d={wrapper:D,title:F,description:R,inside_wrapper:$,link_start:y},T=()=>{const[n,t]=s.useState(!1);return e.jsxs("div",{className:d.wrapper,children:[e.jsxs("div",{className:d.inside_wrapper,children:[e.jsx("h1",{className:d.title,children:"Make Life Easier for the Family:"}),e.jsx("p",{className:d.description,children:"Find Babysitters Online for All Occasions"}),e.jsxs(M,{to:"/nannies",className:d.link_start,onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),onFocus:()=>t(!0),children:["Get started",e.jsx(_,{id:n?"arrow-right":"arrow-top-right",size:20})]})]}),e.jsxs("div",{children:[" ",e.jsx(k,{})," "]})]})};export{T as default};