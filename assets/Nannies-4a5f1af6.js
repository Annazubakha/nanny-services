import{r as x,j as e,b as r,I as j,u as k,c as w,M as y,d as a,e as _,f as S,B as g,g as h,h as D,i,o as F,k as L}from"./index-c8c79650.js";const R=t=>{const n=new Date(t),d=new Date().getTime()-n.getTime();return Math.floor(d/(1e3*60*60*24*365.25))},z=t=>t.map(s=>s.charAt(0).toUpperCase()+s.slice(1)).join(", "),I=t=>t.charAt(0).toUpperCase(),Z=t=>Number(t).toFixed(1),E=()=>{const[t,n]=x.useState(!1),[s,d]=x.useState("A to Z"),c=()=>{n(l=>!l)},p=()=>{n(!1)},o=l=>{d(l),n(!1)};return e.jsxs("div",{className:r.filter_wrapper,children:[e.jsx("p",{className:r.text,children:"Filters"}),e.jsxs("button",{className:r.dropdown_btn,onClick:c,children:[s,e.jsx(j,{id:"arrow-down",size:20,className:r.icon})]}),t&&e.jsxs("ul",{className:r.dropdown_list,onMouseLeave:p,children:[e.jsx("li",{className:`${r.dropdown_list_item} ${s==="A to Z"&&r.active}`,onClick:()=>o("A to Z"),children:"A to Z"}),e.jsx("li",{className:`${r.dropdown_list_item} ${s==="Z to A"&&r.active}`,onClick:()=>o("Z to A"),children:"Z to A"}),e.jsx("li",{className:`${r.dropdown_list_item} ${s==="Less than 10$"&&r.active}`,onClick:()=>o("Less than 10$"),children:"Less than 10$"}),e.jsx("li",{className:`${r.dropdown_list_item} ${s==="Greater than 10$"&&r.active}`,onClick:()=>o("Greater than 10$"),children:"Greater than 10$"}),e.jsx("li",{className:`${r.dropdown_list_item} ${s==="Popular"&&r.active}`,onClick:()=>o("Popular"),children:"Popular"}),e.jsx("li",{className:`${r.dropdown_list_item} ${s==="Not popular"&&r.active}`,onClick:()=>o("Not popular"),children:"Not popular"}),e.jsx("li",{className:`${r.dropdown_list_item} ${s==="Show all"&&r.active}`,onClick:()=>o("Show all"),children:"Show all"})]})]})},P=({reviews:t,name:n,avatar_url:s})=>{const[d,c]=k();return e.jsxs(e.Fragment,{children:[e.jsx("ul",{className:w.list,children:t==null?void 0:t.map(({comment:p,rating:o,reviewer:l})=>e.jsx(T,{comment:p,rating:o,reviewer:l},l))}),e.jsx("button",{className:w.btn_appointment,onClick:c,children:"Make an appointment"}),d&&e.jsx(y,{title:"Make an appointment with a babysitter",toggleModal:c,children:e.jsx(U,{toggleModal:c,name:n,avatar_url:s})})]})},G=({name:t,avatar_url:n,education:s,experience:d,kids_age:c,characters:p,about:o,birthday:l,location:m,price_per_hour:N,rating:f,reviews:v})=>{const $=R(l),b=z(p),[u,C]=x.useState(!1),A=()=>{C(!u)},M=()=>{};return e.jsx("li",{className:a.item,children:e.jsxs("div",{className:a.nanny_card,children:[e.jsxs("div",{className:a.avatar_wrapper,children:[e.jsx("img",{className:a.avatar,src:n,alt:"Nanny's avatar"}),e.jsx(j,{className:a.icon_online,id:"online",size:14})]}),e.jsxs("div",{children:[e.jsx("p",{className:a.title,children:"Nanny"}),e.jsx("p",{className:a.accent_name,children:t}),e.jsxs("div",{className:a.wrapper_inside,children:[e.jsxs("p",{className:a.text_wrapper,children:["Age: ",e.jsxs("span",{className:a.accent_age,children:[" ",$]})]}),e.jsxs("p",{className:a.text_wrapper,children:["Experience:",e.jsxs("span",{className:a.accent,children:[" ",d]})]}),e.jsxs("p",{className:a.text_wrapper,children:["Kids Age:",e.jsxs("span",{className:a.accent,children:[" ",c]})]}),e.jsxs("p",{className:a.text_wrapper,children:["Characters:",e.jsxs("span",{className:a.accent,children:[" ",b]})]}),e.jsxs("p",{className:a.text_wrapper,children:["Education:",e.jsxs("span",{className:a.accent,children:[" ",s]})]})]}),e.jsx("p",{className:a.about,children:o}),u&&e.jsx(P,{reviews:v,name:t,avatar_url:n}),!u&&e.jsx("button",{className:a.btn_more,onClick:A,children:"Read more"})]}),e.jsxs("div",{className:a.wrapper_top,children:[e.jsxs("p",{className:a.wrapper_top_inside,children:[e.jsx(j,{id:"location",size:16}),m]}),e.jsxs("p",{className:a.wrapper_top_inside,children:[e.jsx(j,{className:a.icon_star,id:"star",size:16}),"Rating: ",f]}),e.jsxs("p",{className:a.price_text,children:["Price / 1 hour:",e.jsxs("span",{className:a.price,children:[" ",N,"$"]})]})]}),e.jsx("button",{className:a.btn_heart,onClick:M,children:e.jsx(j,{id:"heart",size:26})})]})})},O=()=>{const[t,n]=x.useState([]),[s,d]=x.useState(3),[c,p]=x.useState(!0);x.useEffect(()=>{(async()=>{try{const m=await S(s);n(m),(m.length===0||m.length<s)&&(p(!1),g.info("You have reached the end of nannies' list."))}catch{g.error("Something went wrong.")}})()},[s]);const o=()=>{d(l=>l+3)};return e.jsxs("div",{className:_.wrapper,children:[e.jsx("ul",{className:_.list,children:t==null?void 0:t.map(l=>e.jsx(G,{...l},l.name))}),c&&e.jsx("button",{className:_.btn_more,onClick:o,children:"Load more"})]})},T=({comment:t,rating:n,reviewer:s})=>{const d=I(s),c=Z(n);return e.jsxs("li",{className:h.item,children:[e.jsxs("div",{className:h.wrapper,children:[e.jsx("div",{className:h.letter,children:d}),e.jsxs("div",{className:h.wrapper_inside,children:[e.jsx("p",{children:s}),e.jsxs("div",{className:h.wrapper_icon,children:[e.jsx(j,{className:h.icon,id:"star",size:16}),e.jsx("p",{className:h.text_wrapper,children:c})]})]})]}),e.jsx("p",{className:h.comment,children:t})]})},U=({name:t,avatar_url:n})=>{var p,o,l,m,N;const{register:s,handleSubmit:d,formState:{errors:c}}=D({resolver:F(L)});return e.jsxs("div",{className:i.wrapper,children:[e.jsx("p",{className:i.description,children:"Arranging a meeting with a caregiver for your child is the first step to creating a safe and comfortable environment. Fill out the form below so we can match you with the perfect care partner."}),e.jsxs("div",{className:i.inside_wrapper,children:[e.jsx("img",{className:i.avatar,src:n,alt:"Nanny's avatar"}),e.jsxs("div",{children:[e.jsx("p",{className:i.description,children:"Your nanny"}),e.jsx("p",{className:i.name,children:t})]})]}),e.jsxs("form",{onSubmit:d,className:i.form,children:[e.jsxs("div",{className:i.input_wrapper,children:[e.jsx("input",{type:"text",...s("address"),placeholder:"Address"}),e.jsx("p",{className:i.form_error,children:(p=c.address)==null?void 0:p.message})]}),e.jsxs("div",{className:i.input_wrapper,children:[e.jsx("input",{type:"text",...s("age"),placeholder:"Child's age"}),e.jsx("p",{className:i.form_error,children:(o=c.age)==null?void 0:o.message})]}),e.jsxs("div",{className:i.input_wrapper,children:[e.jsx("input",{type:"email",...s("email"),placeholder:"Email"}),e.jsx("p",{className:i.form_error,children:(l=c.email)==null?void 0:l.message})]}),e.jsxs("div",{className:i.input_wrapper,children:[e.jsx("input",{type:"text",...s("text"),placeholder:"Father's or mother's name"}),e.jsx("p",{className:i.form_error,children:(m=c.text)==null?void 0:m.message})]}),e.jsxs("div",{className:i.input_wrapper,children:[e.jsx("textarea",{...s("comment"),placeholder:"Comment"}),e.jsx("p",{className:i.form_error,children:(N=c.text)==null?void 0:N.message})]}),e.jsx("button",{className:i.btn_submit,type:"submit",children:"Send"})]})]})},Y="_wrapper_1w2zx_1",B={wrapper:Y},W=()=>e.jsxs("div",{className:B.wrapper,children:[e.jsx(E,{}),e.jsx(O,{})]});export{W as default};
