(this.webpackJsonptodaylist=this.webpackJsonptodaylist||[]).push([[0],{2:function(n,e){n.exports={colorVars:{primaryDark:"#4a55a5",primaryGreen:"#37dcd4",primaryPink:"#e795ab",primaryYellow:"#fffdc4",primaryBlue:"#A3BBFC",linkHover:"#FFF2C6"},fontVars:{titleFont:"'Righteous', cursive",mainFont:"'Source Code Pro', monospace"}}},45:function(n,e,t){"use strict";t.r(e);var o,i,r,a,c,s,l=t(0),d=t.n(l),p=t(24),b=t.n(p),x=t(7),m=t(13),f=t(11),u=t(16),j=t(3),g=t(46),h=t(9),O=t(10),y=t(1),v=function(n){var e=n.className,t=n.addNewList;return Object(y.jsx)("nav",{className:e,children:Object(y.jsxs)("div",{id:"nav-flexbox",children:[Object(y.jsx)(u.b,{to:"/TodayList/",id:"logo-link",children:Object(y.jsx)("div",{id:"logo",children:"TodayList"})}),Object(y.jsx)("ul",{children:Object(y.jsx)(u.b,{to:"/TodayList/",children:Object(y.jsx)("li",{className:"nav-link new-list",onClick:t,children:"New list"})})})]})})},w=t(2),k=Object(O.b)(v)(o||(o=Object(h.a)(["\n  height: 100px;\n  border-bottom: solid 2.8px rgba(55, 220, 212, 0.95);\n  padding-top: 8px;\n  background: rgba(55, 220, 212, 0.25);\n\n  .new-list {\n    /* border: solid black 3px; */\n    /* background: black; */\n    border-radius: 8px;\n    padding: 0 7px 0 7px;\n    margin-right: 40px;\n    font-weight: 600;\n    animation: color-change 1.8s infinite;\n    font-size: 35px;\n  }\n\n  @keyframes color-change {\n    0% {\n      color: #b38dff;\n    }\n    50% {\n      color: #ff90f3;\n    }\n    100% {\n      color: #b38dff;\n    }\n  }\n\n  & #nav-flexbox {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  div#logo {\n    margin-top: 15px;\n    margin-left: 40px;\n    font-size: 45px;\n    font-family: 'Righteous', cursive;\n    color: rgba(55, 220, 212, 1);\n  }\n\n  & ul {\n    display: flex;\n    justify-content: flex-end;\n\n    & li,\n    a {\n      margin-right: 30px;\n      font-size: 30px;\n      transition: color 0.4s;\n      text-decoration: none;\n      color: ",";\n\n      &:visited {\n        color: ",";\n      }\n\n      &:hover {\n        color: ",";\n        transition: color 0.4s;\n      }\n    }\n  }\n\n  @media screen and (max-width: 700px) {\n    ul {\n      padding: 0;\n      margin-right: 0;\n    }\n    .new-list {\n      margin-right: 0;\n      font-size: 28px;\n      letter-spacing: -1.2px;\n      position: relative;\n      left: 10px;\n      text-align: center;\n    }\n\n    div#logo {\n      margin-left: 20px;\n      margin-right: 40px;\n      font-size: 38px;\n    }\n  }\n\n  @media screen and (max-width: 370px) {\n    .new-list {\n      font-size: 24px;\n    }\n\n    div#logo {\n      font-size: 32px;\n    }\n  }\n"])),w.colorVars.primaryPink,w.colorVars.primaryPink,w.colorVars.linkHover),N=Object(O.a)(i||(i=Object(h.a)(["\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: ",";\n}\n\nbutton:hover, a:hover {\n  cursor: pointer;\n}\n\nbutton:active {\n  transform: translateY(5px);\n}\n\nhtml, body {\n    height: 100%;\n}\n\na,\n  a:visited {\n    text-decoration: none;\n    color: ",";\n    font-family: ",";\n  }\n\n  body {\n    background-color: black;\n    margin: 0px;\n    padding: 0px;\n    overflow-x: hidden;\n    height: 100%; \n    min-height: 100%;\n\n    li, p, div {\n      font-family: ",";\n      color: white;\n    }\n\n    li {\n      list-style-type: none;\n    }\n  }\n\n"])),w.fontVars.mainFont,w.colorVars.linkHover,w.fontVars.mainFont,w.fontVars.mainFont),V=function(n){var e=n.addTodo,t=n.listId,o=Object(l.useState)({id:"",listId:t,task:"",completed:!1}),i=Object(f.a)(o,2),r=i[0],a=i[1];return Object(y.jsxs)("form",{onSubmit:function(n){n.preventDefault(),r.task.trim()&&(e(Object(x.a)(Object(x.a)({},r),{},{id:Object(g.a)()})),a(Object(x.a)(Object(x.a)({},r),{},{task:""})))},children:[Object(y.jsx)("input",{type:"text",name:"task",placeholder:"add new task",value:r.task,onChange:function(n){a(Object(x.a)(Object(x.a)({},r),{},{task:n.target.value}))}}),Object(y.jsx)("button",{type:"submit",className:"tomorrow",children:Object(y.jsx)("i",{className:"fas fa-plus"})})]})},z=function(n){var e=n.todo,t=n.toggleComplete,o=n.removeTodo;return Object(y.jsxs)("div",{id:"todo-input",children:[Object(y.jsxs)("div",{className:"todo-item",children:[Object(y.jsx)("div",{className:"todo-optns",children:Object(y.jsx)("button",{id:"complete-todo-btn",type:"button",onClick:function(){t(e.id)},children:e.completed?Object(y.jsx)("i",{className:"far fa-check-square"}):Object(y.jsx)("i",{className:"far fa-square"})})}),Object(y.jsx)("li",{style:{textDecoration:e.completed?"line-through":null},children:e.task})]}),Object(y.jsx)("button",{id:"remove-todo-btn",type:"button",onClick:function(){o(e.id)},children:Object(y.jsx)("i",{className:"fas fa-times-circle"})})]})},L=function(n){var e=n.todos,t=n.removeTodo,o=n.toggleComplete;return Object(y.jsx)("ul",{children:e.map((function(n){return Object(y.jsx)(z,{todo:n,removeTodo:t,toggleComplete:o},n.id)}))})},S=function(n){var e=n.list,t=n.addNewList,o=n.addTodo,i=n.todos,r=n.removeTodo,a=n.toggleComplete,c=n.deleteList,s=n.renameList,d=Object(l.useState)(!1),p=Object(f.a)(d,2),b=p[0],x=p[1],m=Object(l.useState)(""),u=Object(f.a)(m,2),j=u[0],g=u[1];return Object(y.jsx)("section",{className:"list-container",children:Object(y.jsxs)("div",{className:"today list",children:[Object(y.jsx)("h2",{children:e.name}),Object(y.jsx)(V,{className:"today",addTodo:o,listId:e.id}),i.length?Object(y.jsx)(L,{todos:i,deleteList:c,toggleComplete:a,removeTodo:r,addNewList:t}):function(){if(!i.length)return Object(y.jsx)("div",{id:"no-todos-yet",children:"No tasks have been added."})}(),Object(y.jsxs)("div",{className:"btn-container",children:[Object(y.jsx)("button",{className:"btn delete",type:"button",onClick:function(){return n=e.id,void c(n);var n},children:"Delete list"}),Object(y.jsx)("button",{className:"btn rename",type:"button",onClick:function(){x(!b)},children:"Rename list"})]}),Object(y.jsx)("div",{className:"rename",children:b&&Object(y.jsxs)("form",{id:"rename-form",onSubmit:function(n){n.preventDefault(),s(e.id,j),x(!1)},children:[Object(y.jsx)("input",{type:"text",placeholder:"new name",onChange:function(n){g(n.target.value)}}),Object(y.jsx)("button",{id:"rename-btn",type:"submit",children:"confirm"})]})})]})},e.id)},C="todaylist-todos",T=Object(O.b)((function(n){var e=n.className,t=n.lists,o=(n.addNewList,n.deleteList),i=n.renameList,r=Object(l.useState)([]),a=Object(f.a)(r,2),c=a[0],s=a[1];Object(l.useEffect)((function(){var n=JSON.parse(localStorage.getItem(C));n&&s(n)}),[]),Object(l.useEffect)((function(){localStorage.setItem(C,JSON.stringify(c))}),[c]);var d=function(n){s([n].concat(Object(m.a)(c)))},p=function(n){s(c.map((function(e){return e.id===n?Object(x.a)(Object(x.a)({},e),{},{completed:!e.completed}):e})))},b=function(n){s(c.filter((function(e){return e.id!==n})))};return Object(y.jsxs)("main",{className:e,children:[function(){if(!t.length)return Object(y.jsxs)("p",{id:"no-list-yet",children:["You have no lists yet! Click on ",Object(y.jsx)("span",{children:"New list"})," to get started."]})}(),t.map((function(n){return Object(y.jsx)(S,{list:n,todos:c.filter((function(e){return e.listId===n.id})),addTodo:d,removeTodo:b,toggleComplete:p,deleteList:o,renameList:i,lists:t},n.id)}))]})}))(r||(r=Object(h.a)(["\n  height: fit-content;\n  width: 100vw;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  font-size: 20px;\n  margin-top: 50px;\n\n  #rename-btn {\n    border-radius: 5px;\n    padding: 5px;\n    font-size: 18px;\n    background: ",";\n    color: black;\n\n    :active {\n      transform: translateY(4px);\n    }\n  }\n\n  #rename-form {\n    margin-top: 20px;\n  }\n\n  #no-list-yet {\n    color: ",";\n    margin-top: 10%;\n    margin-left: 5%;\n    margin-right: 5%;\n    font-size: 25px;\n    height: 40vh;\n  }\n\n  #no-todos-yet {\n    margin: 60px 0px 60px 10px;\n  }\n\n  .todo-optns {\n    /* border: solid blue 2px; */\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    padding: 5px;\n    align-self: flex-start;\n    margin-top: 2px;\n\n    & i {\n      font-size: 16px !important;\n      color: maroon;\n      padding: 0;\n      margin: 0 0 0 0.5px;\n      opacity: 0.7;\n    }\n  }\n\n  .list-container {\n    margin-bottom: 90px;\n    margin-left: 2vw;\n    margin-right: 2vw;\n  }\n\n  form {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 30px;\n\n    & input {\n      padding-left: 8px;\n      width: 80%;\n      height: 40px;\n      font-size: 22px;\n      border-radius: 5px;\n      margin-right: 10px;\n      border: solid 2px ",";\n      background: none;\n      color: white;\n\n      ::placeholder {\n        font-size: 22px;\n        color: ",";\n        opacity: 0.9;\n      }\n    }\n\n    button {\n      background: none;\n      border: none;\n\n      & i {\n        color: ",";\n        font-size: 40px;\n\n        :active {\n          transform: translateY(4px);\n        }\n      }\n    }\n  }\n\n  .list {\n    margin: 20px 50px 0 50px;\n  }\n\n  & h2 {\n    font-family: ",";\n    font-size: 34px;\n    margin-bottom: 20px;\n    font-weight: 600;\n  }\n\n  .today h2 {\n    color: ",";\n  }\n\n  .today ul {\n    border: solid "," 3px;\n    background: ",";\n  }\n\n  ul {\n    border-radius: 6px;\n    padding: 20px 20px 0 20px;\n    margin-bottom: 30px;\n\n    & li {\n      margin-bottom: 25px;\n      min-width: 200px;\n      color: black;\n\n      & span {\n        margin-right: 15px;\n      }\n    }\n  }\n\n  .rename {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .btn-container {\n    display: flex;\n    justify-content: space-between;\n  }\n\n  button.btn {\n    font-size: 20px;\n    border: none;\n    border-radius: 5px;\n    padding: 5px;\n    background: none;\n\n    &.delete {\n      border: solid 2px #fca4a3;\n      color: #fca4a3;\n\n      &:hover {\n        background: #fca4a3;\n        color: black;\n      }\n\n      /* & :active {\n        transform: translateY(4px);\n      } */\n    }\n\n    &.new-list {\n      border: solid 2px ",";\n      color: ",";\n\n      &:hover {\n        background: ",";\n        color: black;\n      }\n    }\n\n    &.rename {\n      border: solid 2px ",";\n      color: ",";\n\n      &:hover {\n        background: ",";\n        color: black;\n      }\n    }\n  }\n\n  #complete-todo-btn {\n    background: none;\n    border: none;\n\n    & i {\n      color: black;\n      margin-right: 5px;\n    }\n  }\n\n  #remove-todo-btn {\n    background: none;\n    border: none;\n    height: 25px;\n\n    & i {\n      font-size: 25px;\n      opacity: 0.75;\n      /* border: solid red 3px; */\n      position: relative;\n      right: 0px;\n    }\n  }\n\n  ul {\n    width: fit-content;\n  }\n\n  #todo-input {\n    width: 300px;\n    display: flex;\n    margin-bottom: 15px;\n    padding-top: 10px;\n    background: #90aeff;\n    border-radius: 5px;\n    justify-content: space-evenly;\n\n    & li {\n      word-wrap: break-word;\n      max-width: 70%;\n    }\n\n    & .todo-item {\n      width: 80%;\n      display: flex;\n      align-items: center;\n      word-wrap: break-word;\n      margin-bottom: 10px;\n      /* border: solid yellow 3px; */\n    }\n  }\n\n  @media screen and (max-width: 700px) {\n    #no-list-yet {\n      font-size: 20px;\n      padding: 0 20px 0 0;\n    }\n  }\n\n  @media screen and (max-width: 440px) {\n    form input {\n      font-size: 18px;\n\n      &::placeholder {\n        font-size: 18px;\n      }\n    }\n\n    li {\n      width: 60vw;\n      font-size: 18px;\n      padding: 5px 5px 0 0;\n      align-self: center;\n    }\n\n    ul li {\n      margin-bottom: 25px;\n      min-width: 50px;\n      color: black;\n    }\n\n    .list-container {\n      width: 80vw;\n\n      & ul {\n        max-width: 100%;\n        padding: 2px;\n      }\n    }\n\n    .list {\n      margin: 20px 0 0 0;\n    }\n  }\n"])),w.colorVars.primaryGreen,w.colorVars.primaryPink,w.colorVars.primaryBlue,w.colorVars.primaryBlue,w.colorVars.primaryGreen,w.fontVars.mainFont,w.colorVars.primaryPink,w.colorVars.primaryBlue,w.colorVars.primaryBlue,w.colorVars.primaryGreen,w.colorVars.primaryGreen,w.colorVars.primaryGreen,w.colorVars.primaryYellow,w.colorVars.primaryYellow,w.colorVars.primaryYellow),B=O.b.div(a||(a=Object(h.a)(["\n  /* border: solid blue 3px; */\n"]))),F=O.b.div(c||(c=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n"]))),I=function(n){var e=n.className;return Object(y.jsx)("footer",{className:e,children:Object(y.jsx)("div",{className:"credits",children:Object(y.jsxs)("p",{children:["This app was made by ",Object(y.jsx)("a",{href:"https://www.linkedin.com/in/solene-delumeau/",children:"Sol\xe8ne"})]})})})},Y=Object(O.b)(I)(s||(s=Object(h.a)(["\n  div.credits {\n    height: 50px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 15px 30px 10px 30px;\n    margin: 50px 0 30px 0;\n    width: 100%;\n    border-top: solid "," 2px;\n\n    p {\n      color: ",";\n    }\n\n    a {\n      color: ",";\n    }\n  }\n\n  @media screen and (max-width: 700px) {\n    div.credits {\n      flex-direction: column;\n      align-items: flex-start;\n\n      & p {\n        margin-bottom: 5px;\n      }\n    }\n  }\n"])),w.colorVars.primaryBlue,w.colorVars.primaryPink,w.colorVars.primaryBlue),P="todaylist-lists";var G=function(){var n=Object(l.useState)([]),e=Object(f.a)(n,2),t=e[0],o=e[1];Object(l.useEffect)((function(){var n=JSON.parse(localStorage.getItem(P));n&&o(n)}),[]),Object(l.useEffect)((function(){localStorage.setItem(P,JSON.stringify(t))}),[t]);var i=function(){var n={id:Object(g.a)(),name:"my list"};o((function(e){return[].concat(Object(m.a)(e),[n])}))},r=function(n){o((function(e){return Object(m.a)(e.filter((function(e){return e.id!==n})))}))};return Object(y.jsx)(u.a,{children:Object(y.jsxs)(B,{children:[Object(y.jsx)(N,{}),Object(y.jsx)(k,{deleteList:r,addNewList:i,lists:t}),Object(y.jsx)(F,{children:Object(y.jsx)(j.c,{children:Object(y.jsx)(j.a,{exact:!0,path:"/TodayList/",children:Object(y.jsx)(T,{deleteList:r,addNewList:i,lists:t,renameList:function(n,e){var i=Object(m.a)(t),r=i.findIndex((function(e){return e.id===n}));i.splice(r,1,Object(x.a)(Object(x.a)({},i[r]),{},{name:e})),o(i)}})})})}),Object(y.jsx)(Y,{})]})})};b.a.render(Object(y.jsx)(d.a.StrictMode,{children:Object(y.jsx)(G,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.358fca0e.chunk.js.map