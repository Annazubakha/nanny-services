import{j as s,b as r,I as i,g as u,c as g,d as f,e as v,B as w,f as e,r as _,h as b}from"./index-703f3f8c.js";const y=a=>{const c=new Date(a),n=new Date().getTime()-c.getTime();return Math.floor(n/(1e3*60*60*24*365.25))},D=a=>a.map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(", "),A=()=>s.jsxs("div",{className:r.filter_wrapper,children:[s.jsx("p",{className:r.text,children:"Filters"}),s.jsxs("button",{className:r.dropdown_btn,children:["A to Z",s.jsx(i,{id:"arrow-down",size:20,className:r.icon})]}),s.jsxs("ul",{className:r.dropdown_list,children:[s.jsx("li",{className:r.dropdown_list_item,children:"A to Z"}),s.jsx("li",{className:r.dropdown_list_item,children:"Z to A"}),s.jsx("li",{className:r.dropdown_list_item,children:"Less than 10$"}),s.jsx("li",{className:r.dropdown_list_item,children:"Greater than 10$"}),s.jsx("li",{className:r.dropdown_list_item,children:"Popular"}),s.jsx("li",{className:r.dropdown_list_item,children:"Not popular"}),s.jsx("li",{className:r.dropdown_list_item,children:"Show all"})]})]}),z=async()=>{try{const a=await u(g(f(v),"/"));return a.exists()?a.val():null}catch{w.error("Something went wrong.")}},$=({name:a,avatar_url:c,education:t,experience:n,kids_age:l,characters:o,about:d,birthday:p,location:m,price_per_hour:x,rating:h})=>{const j=y(p),N=D(o);return s.jsx("li",{className:e.item,children:s.jsxs("div",{className:e.nanny_card,children:[s.jsxs("div",{className:e.avatar_wrapper,children:[s.jsx("img",{className:e.avatar,src:c,alt:"Nanny's avatar"}),s.jsx(i,{className:e.icon_online,id:"online",size:14})]}),s.jsxs("div",{children:[s.jsx("p",{className:e.title,children:"Nanny"}),s.jsx("p",{className:e.accent_name,children:a}),s.jsxs("div",{className:e.wrapper_inside,children:[s.jsxs("p",{className:e.text_wrapper,children:["Age: ",s.jsxs("span",{className:e.accent_age,children:[" ",j]})]}),s.jsxs("p",{className:e.text_wrapper,children:["Experience:",s.jsxs("span",{className:e.accent,children:[" ",n]})]}),s.jsxs("p",{className:e.text_wrapper,children:["Kids Age:",s.jsxs("span",{className:e.accent,children:[" ",l]})]}),s.jsxs("p",{className:e.text_wrapper,children:["Characters:",s.jsxs("span",{className:e.accent,children:[" ",N]})]})]}),s.jsxs("p",{className:e.text_wrapper,children:["Education:",s.jsxs("span",{className:e.accent,children:[" ",t]})]}),s.jsx("p",{className:e.about,children:d}),s.jsx("button",{className:e.btn_more,children:"Read more"})]}),s.jsxs("div",{className:e.wrapper_top,children:[s.jsxs("p",{className:e.wrapper_top_inside,children:[s.jsx(i,{id:"location",size:16}),m]}),s.jsxs("p",{className:e.wrapper_top_inside,children:[s.jsx(i,{className:e.icon_star,id:"star",size:16}),"Rating: ",h]}),s.jsxs("p",{className:e.price_text,children:["Price / 1 hour:",s.jsxs("span",{className:e.price,children:[" ",x,"$"]})]})]}),s.jsx("button",{className:e.btn_heart,children:s.jsx(i,{id:"heart",size:26})})]})})},E=()=>{const[a,c]=_.useState([]);return console.log(a),_.useEffect(()=>{(async()=>{try{const n=await z();c(n)}catch{w.error("Something went wrong.")}})()},[]),s.jsx("ul",{className:b.list,children:a==null?void 0:a.map(({name:t,avatar_url:n,education:l,experience:o,kids_age:d,characters:p,about:m,birthday:x,location:h,price_per_hour:j,rating:N})=>s.jsx($,{name:t,avatar_url:n,education:l,experience:o,kids_age:d,characters:p,about:m,birthday:x,rating:N,price_per_hour:j,location:h},t))})},C="_wrapper_1w2zx_1",S={wrapper:C},R=()=>s.jsxs("div",{className:S.wrapper,children:[s.jsx(A,{}),s.jsx(E,{})]});export{R as default};