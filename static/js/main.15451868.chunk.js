(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{291:function(e,t,a){},294:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a(21),n=a.n(r),s=a(106),i=(a(291),a(57)),o=a.n(i),u=a(105),l=a(37),p=a(2),j=a.n(p),h=a(3),b=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(""),s=Object(l.a)(n,2),i=s[0],p=s[1],b=Object(c.useState)(""),d=Object(l.a)(b,2),m=d[0],O=d[1],f=function(){var e=Object(u.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c={"Project-ID":"e393001f-b16a-4c57-8270-681fc34c4940","User-Name":a,"User-Secret":i},e.prev=2,e.next=5,j.a.get("https://api.chatengine.io/chats",{headers:c});case 5:localStorage.setItem("username",a),localStorage.setItem("password",i),window.location.reload(),O(""),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),O("Oops, incorrect credentials.");case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)("div",{className:"wrapper",children:Object(h.jsxs)("div",{className:"form",children:[Object(h.jsx)("h1",{className:"title",children:"Chat Application"}),Object(h.jsxs)("form",{onSubmit:f,children:[Object(h.jsx)("input",{type:"text",value:a,onChange:function(e){return r(e.target.value)},className:"input",placeholder:"Username",required:!0}),Object(h.jsx)("input",{type:"password",value:i,onChange:function(e){return p(e.target.value)},className:"input",placeholder:"Password",required:!0}),Object(h.jsx)("div",{align:"center",children:Object(h.jsx)("button",{type:"submit",className:"button",children:Object(h.jsx)("span",{children:"Start chatting"})})})]}),Object(h.jsx)("h1",{children:m})]})})};var d=function(){return localStorage.getItem("username")?Object(h.jsx)(s.d,{height:"100vh",projectID:"e393001f-b16a-4c57-8270-681fc34c4940",userName:"chat application",userSecret:"123123"}):Object(h.jsx)(b,{})};n.a.render(Object(h.jsx)(d,{}),document.getElementById("root"))}},[[294,1,2]]]);
//# sourceMappingURL=main.15451868.chunk.js.map