(this.webpackJsonphomework=this.webpackJsonphomework||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports={message:"HelloVisitor_message__xW9Bs",commentBubble:"HelloVisitor_commentBubble__1pe0M",userName:"HelloVisitor_userName__2lxl7",helloVisitor:"HelloVisitor_helloVisitor__3j4d_",time:"HelloVisitor_time__3gywL"}},,,,function(e,t,a){e.exports={input:"MyInput_input__m23Nw",error:"MyInput_error__3apq5",errorMessage:"MyInput_errorMessage__1pG4d"}},function(e,t,a){e.exports={todoListTask:"TodolistTask_todoListTask__11A_7",done:"TodolistTask_done__2BSNL",taskWrap:"TodolistTask_taskWrap__1R8j6",wordWrap:"TodolistTask_wordWrap__3Ho-T",selector:"TodolistTask_selector__3c_-Z",deleteButton:"TodolistTask_deleteButton__3xHQb",taskTime:"TodolistTask_taskTime__3Dxqq",displayBlockNone:"TodolistTask_displayBlockNone__7MnA6"}},,,function(e,t,a){e.exports={TodoListHeader:"TodolistHeader_TodoListHeader__AgtLA",todoListHeaderTitle:"TodolistHeader_todoListHeaderTitle__2wMn2",todoListNewTaskForm:"TodolistHeader_todoListNewTaskForm__3RDWc",todoList:"TodolistHeader_todoList__3n9yF",todoListTask:"TodolistHeader_todoListTask__UmW1_",error:"TodolistHeader_error__k5FK0",inputText:"TodolistHeader_inputText__fq_NH",errorMessage:"TodolistHeader_errorMessage__2d4Ve"}},,function(e,t,a){e.exports={mainWrapper:"Visitors_mainWrapper__1OAyV",message:"Visitors_message__3ypqu",commentBubble:"Visitors_commentBubble__UKY5B",userName:"Visitors_userName__3K2w7",helloVisitor:"Visitors_helloVisitor__33LpY",time:"Visitors_time__3KqDm"}},function(e,t,a){e.exports={nav:"NavLink_nav__25y2c",item:"NavLink_item__2CfjE",activeLink:"NavLink_activeLink__1PdyU"}},,,,,,function(e,t,a){e.exports={myName:"MyName_myName__1GLEM"}},function(e,t,a){e.exports={mainContainer:"PreJunior_mainContainer__3OHrL"}},function(e,t,a){e.exports=a.p+"static/media/avatar1.1a286469.jpg"},function(e,t,a){e.exports={displayVisitors:"AllVisitors_displayVisitors__3UMev"}},function(e,t,a){e.exports={button:"MyButton_button__arfqX"}},function(e,t,a){e.exports={tuesday:"Todolist_tuesday__29G5Z",todoList:"Todolist_todoList__sM8AU"}},function(e,t,a){e.exports={todoListTask:"TodolistTasks_todoListTask__kvPF7"}},function(e,t,a){e.exports={checkbox:"MyCheckbox_checkbox__l8Xej"}},function(e,t,a){e.exports={todoListFooter:"TodolistFooter_todoListFooter__3jmY9","filter-active":"TodolistFooter_filter-active__1gU97"}},function(e,t,a){e.exports={nav:"Navbar_nav__1nP-r",item:"Navbar_item__3eTov",activeLink:"Navbar_activeLink__2Iy_l"}},,function(e,t,a){e.exports={mainContainer:"Junior_mainContainer__2fpR8"}},function(e,t,a){e.exports={mainContainer:"JuniorPlus_mainContainer__2McwV"}},,function(e,t,a){e.exports=a(51)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),i=a.n(o),l=(a(44),a(3)),c=(a(45),a(25)),s=a.n(c);var u=function(e){return r.a.createElement("div",{className:s.a.myName},e.name)},m=a(26),d=a.n(m),_=a(11),v=a(18),p=a.n(v),k=a(8),f=a.n(k),E=a(27),h=a.n(E),T=function(e){return r.a.createElement("div",{className:f.a.myName},r.a.createElement("div",{className:f.a.message},r.a.createElement("img",{src:h.a,alt:"avatar"}),r.a.createElement("div",{className:f.a.commentBubble},r.a.createElement("div",{className:f.a.userName},e.name),r.a.createElement("div",{className:f.a.helloVisitor},e.title),r.a.createElement("div",{className:f.a.time},e.timeAdded))))},g=a(52),b=a(28),N=a.n(b),y=function(e){return r.a.createElement("div",{className:N.a.displayVisitors},e.visitors.map((function(e){return r.a.createElement("div",null,e.title)})))},L=a(12),j=a.n(L);function C(e){var t=e.error?j.a.error+" "+j.a.input:j.a.input;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{value:e.value,placeholder:e.placeholder,className:t,onChange:function(t){return e.onChange(t.currentTarget.value)},onKeyPress:function(t){e.onEnter&&e.onEnter(t)},type:"text"}),e.error&&r.a.createElement("div",{className:j.a.errorMessage},e.error))}var x=a(29),O=a.n(x);function w(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:O.a.button,onClick:e.onClick},e.name))}var H=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(""),c=Object(l.a)(i,2),s=c[0],u=c[1],m=function(e){return e<10&&(e="0"+e),e},d=function(){var e=new Date;return"".concat(m(e.getHours()),":").concat(m(e.getMinutes()))},v=Object(n.useState)(d()),k=Object(l.a)(v,2),f=k[0],E=k[1],h=Object(n.useState)(null),b=Object(l.a)(h,2),N=b[0],L=b[1];function j(){if(""!==s.trim()){var e=[{id:Object(g.a)(),title:s}].concat(Object(_.a)(a));o(e),E(d),u("")}else L("Title is required")}return r.a.createElement("div",{className:p.a.mainWrapper},r.a.createElement("div",{className:p.a.message},r.a.createElement("div",null,"Enter your name:"),r.a.createElement(C,{placeholder:"\u0418\u043c\u044f \u0441\u0432\u043e\u0451 \u0432\u0432\u0435\u0434\u0438",value:s,error:N,onEnter:function(e){L(null),13===e.charCode&&j()},onChange:function(e){u(e)}}),r.a.createElement(w,{onClick:j,name:"ADD"})),a.length?r.a.createElement("div",null,r.a.createElement(T,{title:a[o.length-1]?a[o.length-1].title:"",name:"Saveliy",timeAdded:a[o.length-1]?f:""}),"\u041f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u0438:",r.a.createElement(y,{visitors:a})):r.a.createElement("div",null,"\u041f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u0438: \u043d\u0435\u0442\u0443"))},S=a(30),V=a.n(S),M=a(16),F=a.n(M);var D=function(e){var t=Object(n.useState)(null),a=Object(l.a)(t,2),o=a[0],i=a[1],c=Object(n.useState)(""),s=Object(l.a)(c,2),u=s[0],m=s[1],d=function(){""!==u.trim()?(e.addTask(u),m("")):i("Title is required")};return r.a.createElement("div",{className:F.a.TodoListHeader},r.a.createElement("h3",{className:F.a.todoListHeaderTitle},"What to Learn"),r.a.createElement("div",{className:F.a.todoListNewTaskForm},r.a.createElement(C,{placeholder:"New task name",onChange:function(e){m(e)},onEnter:function(e){i(null),13===e.charCode&&d()},value:u,error:o}),r.a.createElement(w,{onClick:d,name:"ADD"})))},B=a(31),A=a.n(B),W=a(13),J=a.n(W),q=a(32),P=a.n(q);function U(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{checked:e.checked,className:P.a.checkbox,onChange:function(t){e.onChange(t)},type:"checkbox"}))}var I=function(e){var t=!0===e.task.isDone?J.a.done:"";return r.a.createElement("div",{className:J.a.todoListTask+" "+t},r.a.createElement("div",{className:J.a.taskWrap},r.a.createElement(U,{checked:e.task.isDone,onChange:function(t){e.changeStatus(e.task.id,t.currentTarget.checked)}}),r.a.createElement("span",null,e.task.title,"-priority:"),r.a.createElement("div",null,r.a.createElement("select",{className:J.a.selector},r.a.createElement("option",null,"high"),r.a.createElement("option",null,"medium"),r.a.createElement("option",null,"low"))),r.a.createElement(w,{onClick:function(){e.deleteTask(e.task.id)},name:"X"})))};var K=function(e){var t=e.tasks.map((function(t,a){return r.a.createElement(I,{key:a,task:t,deleteTask:e.deleteTask,changeStatus:e.changeStatus})}));return r.a.createElement("div",{className:A.a.todoListTask},t)},G=a(33),R=a.n(G);var Y=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),o=a[0],i=a[1];return r.a.createElement("div",{className:R.a.todoListFooter},!o&&r.a.createElement("div",null,r.a.createElement(w,{onClick:function(){e.changeFilter("all")},name:"All"}),r.a.createElement(w,{onClick:function(){e.changeFilter("active")},name:"Active"}),r.a.createElement(w,{onClick:function(){e.changeFilter("completed")},name:"Completed"})),!o&&r.a.createElement("span",{onClick:function(){i(!0)}},"hide"),o&&r.a.createElement("span",{onClick:function(){i(!1)}},"show"))};var X=function(){var e=Object(n.useState)([{id:Object(g.a)(),title:"CSS",isDone:!0,priority:"low"},{id:Object(g.a)(),title:"JS",isDone:!0,priority:"medium"},{id:Object(g.a)(),title:"ReactJS",isDone:!1,priority:"high"}]),t=Object(l.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)("all"),c=Object(l.a)(i,2),s=c[0],u=c[1],m=a;return"active"===s&&(m=a.filter((function(e){return!1===e.isDone}))),"completed"===s&&(m=a.filter((function(e){return!0===e.isDone}))),r.a.createElement("div",null,r.a.createElement("div",{className:V.a.todoList},r.a.createElement(D,{addTask:function(e){var t={id:Object(g.a)(),title:e,isDone:!1,priority:"high"},n=[].concat(Object(_.a)(a),[t]);o(n)}}),r.a.createElement(K,{deleteTask:function(e){var t=a.filter((function(t){return t.id!==e}));o(t)},changeStatus:function(e,t){var n=a.find((function(t){return t.id===e}));n&&(n.isDone=t,o(Object(_.a)(a)))},tasks:m}),r.a.createElement(Y,{changeFilter:function(e){u(e)}})))},Z=function(){return r.a.createElement("div",{className:d.a.mainContainer},r.a.createElement(u,{name:"Biryukov Saveliy-Georgiy Yurievich"}),r.a.createElement(H,null),r.a.createElement(X,null))},Q=a(15),$=a(1),z=a(34),ee=a.n(z),te=a(19),ae=a.n(te),ne=function(e){return r.a.createElement("div",{className:ae.a.item},r.a.createElement(Q.b,{to:e.pages.link,activeClassName:ae.a.activeLink,onClick:e.onClick},e.pages.title))};var re=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),o=(a[0],a[1]);function i(e){o(e.currentTarget.textContent)}var c=e.pages.map((function(e,t){return r.a.createElement(ne,{key:t,pages:e,onClick:i})}));return r.a.createElement("nav",{className:ee.a.nav},c)},oe=a(36),ie=a.n(oe),le=function(){return r.a.createElement("div",{className:ie.a.mainContainer})},ce=a(37),se=a.n(ce),ue=function(){return r.a.createElement("div",{className:se.a.mainContainer})},me=function(){var e=Object(n.useState)([{title:"preJunior",link:"/preJunior",style:"styles.activeLink"},{title:"Junior",link:"/junior",style:"styles.activeLink"},{title:"Junior+",link:"/junior+",style:"styles.activeLink"}]),t=Object(l.a)(e,2),a=t[0];t[1];return r.a.createElement(Q.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(re,{pages:a}),r.a.createElement($.a,{path:"/preJunior",render:function(){return r.a.createElement(Z,null)}}),r.a.createElement($.a,{path:"/junior",render:function(){return r.a.createElement(le,null)}}),r.a.createElement($.a,{path:"/junior+",render:function(){return r.a.createElement(ue,null)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[39,1,2]]]);
//# sourceMappingURL=main.28a50f4f.chunk.js.map