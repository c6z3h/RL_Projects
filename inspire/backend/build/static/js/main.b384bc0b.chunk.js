(this.webpackJsonpinspire=this.webpackJsonpinspire||[]).push([[0],{43:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var c=t(2),o=t.n(c),i=t(18),a=t.n(i),r=(t(19),t(4)),s=t(0),l=function(e){var n=e.url,t=e.randomNumber;return console.log("GIFs: ",n),console.log("GIFs randNo: ",t),0!==n.length?Object(s.jsx)("div",{children:Object(s.jsxs)("p",{children:[Object(s.jsx)("img",{src:n[t].link,alt:"GIF"}),Object(s.jsx)("br",{})]})}):null},u=function(e){var n=e.url,t=e.randomNumber;return console.log("weblinks: ",n),console.log("weblinks randNo: ",t),0!==n.length?Object(s.jsx)("div",{children:Object(s.jsx)("a",{href:n[t].link,children:"Inspiration here!"})}):null},j=function(e){var n=e.addLink,t=e.data;return Object(s.jsx)("form",{onSubmit:n,children:Object(s.jsxs)("div",{children:["URL: ",Object(s.jsx)("input",{value:t.newLink,onChange:t.handleLinkChange,placeholder:"https://upload.wikimedia.org/wikipedia/commons/..."}),Object(s.jsxs)("select",{value:t.newType,onChange:t.handleTypeChange,children:[Object(s.jsx)("option",{children:" "}),Object(s.jsx)("option",{value:"GIF",children:"GIF"}),Object(s.jsx)("option",{value:"link",children:"Link"})]}),Object(s.jsx)("button",{type:"submit",children:"add"})]})})},d=function(e){var n=e.message;return""===n?null:Object(s.jsx)("div",{className:"notif",children:n})},b=t(3),h=t.n(b),O="/api/links",f=function(){return h.a.get("".concat(O,"/GIF")).then((function(e){return console.log(e),e.data}))},p=function(){return h.a.get("".concat(O,"/link")).then((function(e){return console.log(e),e.data}))},g=function(e){return h.a.post(O,e).then((function(e){return e.data}))},x=(t(43),function(){return Object(s.jsx)("div",{style:{color:"blue",background:"gray",fontStyle:"italic",fontSize:25},children:Object(s.jsxs)("em",{children:["comments/feedback to: ",Object(s.jsx)("a",{href:"https://github.com/c6z3h",children:"c6z3h"})]})})}),m=function(){Object(c.useEffect)((function(){f().then((function(e){console.log("this is allLinks: ".concat(e)),N(e)}))}),[]);Object(c.useEffect)((function(){p().then((function(e){console.log("this is allLinks: ".concat(e)),E(e)}))}),[]);var e=Object(c.useState)([]),n=Object(r.a)(e,2),t=n[0],o=n[1],i=Object(c.useState)(""),a=Object(r.a)(i,2),b=a[0],h=a[1],O=Object(c.useState)("GIF"),m=Object(r.a)(O,2),k=m[0],v=m[1],y=Object(c.useState)(""),w=Object(r.a)(y,2),L=w[0],S=w[1],I=Object(c.useState)([]),F=Object(r.a)(I,2),G=F[0],N=F[1],T=Object(c.useState)([]),C=Object(r.a)(T,2),z=C[0],E=C[1],M={newLink:b,newType:k,handleLinkChange:function(e){return h(e.target.value)},handleTypeChange:function(e){return v(e.target.value)}},J=function(e){return Math.floor(Math.random()*e.length)};return Object(s.jsxs)("div",{children:[Object(s.jsx)(d,{message:L}),Object(s.jsx)("br",{}),Object(s.jsx)("h1",{children:"Welcome! What inspiration will you find today?"}),Object(s.jsx)("br",{}),Object(s.jsx)(l,{url:G,randomNumber:J(G)}),Object(s.jsx)(u,{url:z,randomNumber:J(z)}),Object(s.jsx)(j,{addLink:function(e){e.preventDefault();var n={link:b,type:k};console.log("This is the linkObject ".concat(n,", link ").concat(n.link,", and type ").concat(n.type)),g(n).then((function(e){o(t.concat(e)),S("Added ".concat(n.link)),setTimeout((function(){S("")}),5e3)})).catch((function(e){console.log(e.response.data),S("".concat(e.response.data.error)),setTimeout((function(){S("")}),5e3)})),h(""),v("")},data:M}),Object(s.jsx)(x,{})]})};a.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.b384bc0b.chunk.js.map