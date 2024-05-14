import{j as s,b as l,I as x,c as R,d as S,q as C,l as $,g as D,B as g,u as F,e as w,M as z,r as _,f as e,h as u,i as o,k as E,m as t,o as I,n as L}from"./index-1dbe97fb.js";const k=a=>{const n=new Date(a),i=new Date().getTime()-n.getTime();return Math.floor(i/(1e3*60*60*24*365.25))},P=a=>a.map(r=>r.charAt(0).toUpperCase()+r.slice(1)).join(", "),T=a=>a.charAt(0).toUpperCase(),Z=a=>Number(a).toFixed(1),q=()=>s.jsxs("div",{className:l.filter_wrapper,children:[s.jsx("p",{className:l.text,children:"Filters"}),s.jsxs("button",{className:l.dropdown_btn,children:["A to Z",s.jsx(x,{id:"arrow-down",size:20,className:l.icon})]}),s.jsxs("ul",{className:l.dropdown_list,children:[s.jsx("li",{className:l.dropdown_list_item,children:"A to Z"}),s.jsx("li",{className:l.dropdown_list_item,children:"Z to A"}),s.jsx("li",{className:l.dropdown_list_item,children:"Less than 10$"}),s.jsx("li",{className:l.dropdown_list_item,children:"Greater than 10$"}),s.jsx("li",{className:l.dropdown_list_item,children:"Popular"}),s.jsx("li",{className:l.dropdown_list_item,children:"Not popular"}),s.jsx("li",{className:l.dropdown_list_item,children:"Show all"})]})]}),U=async()=>{try{const a=R(S,"/"),n=C(a,$(3)),r=await D(n);return r.exists()?r.val():null}catch{g.error("Something went wrong.")}},B=({reviews:a,name:n,avatar_url:r})=>{const[i,c]=F();return s.jsxs(s.Fragment,{children:[s.jsx("ul",{className:w.list,children:a==null?void 0:a.map(({comment:m,rating:p,reviewer:d})=>s.jsx(Q,{comment:m,rating:p,reviewer:d},d))}),s.jsx("button",{className:w.btn_appointment,onClick:c,children:"Make an appointment"}),i&&s.jsx(z,{title:"Make an appointment with a babysitter",toggleModal:c,children:s.jsx(W,{toggleModal:c,name:n,avatar_url:r})})]})},G=({name:a,avatar_url:n,education:r,experience:i,kids_age:c,characters:m,about:p,birthday:d,location:h,price_per_hour:j,rating:f,reviews:v})=>{const b=k(d),y=P(m),[N,A]=_.useState(!1),M=()=>{A(!N)};return s.jsx("li",{className:e.item,children:s.jsxs("div",{className:e.nanny_card,children:[s.jsxs("div",{className:e.avatar_wrapper,children:[s.jsx("img",{className:e.avatar,src:n,alt:"Nanny's avatar"}),s.jsx(x,{className:e.icon_online,id:"online",size:14})]}),s.jsxs("div",{children:[s.jsx("p",{className:e.title,children:"Nanny"}),s.jsx("p",{className:e.accent_name,children:a}),s.jsxs("div",{className:e.wrapper_inside,children:[s.jsxs("p",{className:e.text_wrapper,children:["Age: ",s.jsxs("span",{className:e.accent_age,children:[" ",b]})]}),s.jsxs("p",{className:e.text_wrapper,children:["Experience:",s.jsxs("span",{className:e.accent,children:[" ",i]})]}),s.jsxs("p",{className:e.text_wrapper,children:["Kids Age:",s.jsxs("span",{className:e.accent,children:[" ",c]})]}),s.jsxs("p",{className:e.text_wrapper,children:["Characters:",s.jsxs("span",{className:e.accent,children:[" ",y]})]}),s.jsxs("p",{className:e.text_wrapper,children:["Education:",s.jsxs("span",{className:e.accent,children:[" ",r]})]})]}),s.jsx("p",{className:e.about,children:p}),N&&s.jsx(B,{reviews:v,name:a,avatar_url:n}),!N&&s.jsx("button",{className:e.btn_more,onClick:M,children:"Read more"})]}),s.jsxs("div",{className:e.wrapper_top,children:[s.jsxs("p",{className:e.wrapper_top_inside,children:[s.jsx(x,{id:"location",size:16}),h]}),s.jsxs("p",{className:e.wrapper_top_inside,children:[s.jsx(x,{className:e.icon_star,id:"star",size:16}),"Rating: ",f]}),s.jsxs("p",{className:e.price_text,children:["Price / 1 hour:",s.jsxs("span",{className:e.price,children:[" ",j,"$"]})]})]}),s.jsx("button",{className:e.btn_heart,children:s.jsx(x,{id:"heart",size:26})})]})})},K=()=>{const[a,n]=_.useState([]);return console.log(a),_.useEffect(()=>{(async()=>{try{const i=await U();console.log(i),n(i)}catch{g.error("Something went wrong.")}})()},[]),s.jsxs("div",{className:u.wrapper,children:[s.jsx("ul",{className:u.list,children:a==null?void 0:a.map(r=>s.jsx(G,{...r},name))}),s.jsx("button",{className:u.btn_more,children:"Load more"})]})},Q=({comment:a,rating:n,reviewer:r})=>{const i=T(r),c=Z(n);return s.jsxs("li",{className:o.item,children:[s.jsxs("div",{className:o.wrapper,children:[s.jsx("div",{className:o.letter,children:i}),s.jsxs("div",{className:o.wrapper_inside,children:[s.jsx("p",{children:r}),s.jsxs("div",{className:o.wrapper_icon,children:[s.jsx(x,{className:o.icon,id:"star",size:16}),s.jsx("p",{className:o.text_wrapper,children:c})]})]})]}),s.jsx("p",{className:o.comment,children:a})]})},W=({name:a,avatar_url:n})=>{var m,p,d,h,j;const{register:r,handleSubmit:i,formState:{errors:c}}=E({resolver:I(L)});return s.jsxs("div",{className:t.wrapper,children:[s.jsx("p",{className:t.description,children:"Arranging a meeting with a caregiver for your child is the first step to creating a safe and comfortable environment. Fill out the form below so we can match you with the perfect care partner."}),s.jsxs("div",{className:t.inside_wrapper,children:[s.jsx("img",{className:t.avatar,src:n,alt:"Nanny's avatar"}),s.jsxs("div",{children:[s.jsx("p",{className:t.description,children:"Your nanny"}),s.jsx("p",{className:t.name,children:a})]})]}),s.jsxs("form",{onSubmit:i,className:t.form,children:[s.jsxs("div",{className:t.input_wrapper,children:[s.jsx("input",{type:"text",...r("address"),placeholder:"Address"}),s.jsx("p",{className:t.form_error,children:(m=c.address)==null?void 0:m.message})]}),s.jsxs("div",{className:t.input_wrapper,children:[s.jsx("input",{type:"text",...r("age"),placeholder:"Child's age"}),s.jsx("p",{className:t.form_error,children:(p=c.age)==null?void 0:p.message})]}),s.jsxs("div",{className:t.input_wrapper,children:[s.jsx("input",{type:"email",...r("email"),placeholder:"Email"}),s.jsx("p",{className:t.form_error,children:(d=c.email)==null?void 0:d.message})]}),s.jsxs("div",{className:t.input_wrapper,children:[s.jsx("input",{type:"text",...r("text"),placeholder:"Father's or mother's name"}),s.jsx("p",{className:t.form_error,children:(h=c.text)==null?void 0:h.message})]}),s.jsxs("div",{className:t.input_wrapper,children:[s.jsx("textarea",{...r("comment"),placeholder:"Comment"}),s.jsx("p",{className:t.form_error,children:(j=c.text)==null?void 0:j.message})]}),s.jsx("button",{className:t.btn_submit,type:"submit",children:"Send"})]})]})},Y="_wrapper_1w2zx_1",H={wrapper:Y},O=()=>s.jsxs("div",{className:H.wrapper,children:[s.jsx(q,{}),s.jsx(K,{})]});export{O as default};
