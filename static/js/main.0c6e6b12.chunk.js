(this.webpackJsonphomework=this.webpackJsonphomework||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports={todoListTask:"TodoListTask_todoListTask__1Y7NU",done:"TodoListTask_done__251hI",taskWrap:"TodoListTask_taskWrap__3bhTJ",wordWrap:"TodoListTask_wordWrap__2c8gq",selector:"TodoListTask_selector__Wff_O",deleteButton:"TodoListTask_deleteButton__1bafv",taskTime:"TodoListTask_taskTime__1ZUSA",displayBlockNone:"TodoListTask_displayBlockNone__7twbj"}},function(e,t,a){e.exports={message:"Message_message__1oye5",commentBubble:"Message_commentBubble__3VmqJ",userName:"Message_userName__31smT",helloVisitor:"Message_helloVisitor__3gKMD",time:"Message_time__3-ANu"}},function(e,t,a){e.exports={TodoListHeader:"TodoListHeader_TodoListHeader__2-zJQ",todoListHeaderTitle:"TodoListHeader_todoListHeaderTitle__2MMjO",todoListNewTaskForm:"TodoListHeader_todoListNewTaskForm__gJ6Nw",todoList:"TodoListHeader_todoList__fEmhg",todoListTask:"TodoListHeader_todoListTask__U_Vlt",error:"TodoListHeader_error__3arFn",inputText:"TodoListHeader_inputText__6OGgF"}},,,,,,function(e,t,a){e.exports={nav:"NavLink_nav__25y2c",item:"NavLink_item__2CfjE",activeLink:"NavLink_activeLink__1PdyU"}},,,,,,function(e,t,a){e.exports={myName:"MyName_myName__1mgL_"}},function(e,t,a){e.exports=a.p+"static/media/avatar1.1a286469.jpg"},function(e,t,a){e.exports={mainContainer:"Monday_mainContainer__3g18H"}},function(e,t,a){e.exports={tuesday:"Tuesday_tuesday__1LDes",todoList:"Tuesday_todoList__1C1g2"}},function(e,t,a){e.exports={todoListTask:"TodoListTasks_todoListTask__9x8kl"}},function(e,t,a){e.exports={todoListFooter:"TodoListFooter_todoListFooter__yAUIz","filter-active":"TodoListFooter_filter-active__2Utld"}},function(e,t,a){e.exports={nav:"Navbar_nav__1nP-r",item:"Navbar_item__3eTov",activeLink:"Navbar_activeLink__2Iy_l"}},,,function(e,t,a){e.exports=a(43)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(21),r=a.n(i),s=(a(36),a(3)),c=(a(37),a(22)),l=a.n(c);var d=function(e){return o.a.createElement("div",{className:l.a.myName},e.name)},m=a(9),u=a.n(m),_=a(23),v=a.n(_);var k=function(e){return o.a.createElement("div",{className:u.a.message},o.a.createElement("img",{src:v.a,alt:"avatar"}),o.a.createElement("div",{className:u.a.commentBubble},o.a.createElement("div",{className:u.a.userName},e.name),o.a.createElement("div",{className:u.a.helloVisitor},"some message"),o.a.createElement("div",{className:u.a.time},e.timeAdded)))},f=a(24),T=a.n(f);var E=function(){function e(e){return e<10&&(e="0"+e),e}var t=Object(n.useState)(function(){var t=new Date;return"".concat(e(t.getHours()),":").concat(e(t.getMinutes()))}()),a=Object(s.a)(t,2),i=a[0];return a[1],o.a.createElement("div",{className:T.a.mainContainer},o.a.createElement(d,{name:"Biryukov Saveliy-Georgiy Yurievich"}),o.a.createElement(k,{name:"Saveliy",timeAdded:i}))},p=a(14),L=a(1),y=a(30),b=a(25),N=a.n(b),h=a(10),g=a.n(h);var O=function(e){var t=Object(n.useState)(!0),a=Object(s.a)(t,2),i=a[0],r=a[1],c=Object(n.useState)(!1),l=Object(s.a)(c,2),d=l[0],m=l[1],u=Object(n.useState)(""),_=Object(s.a)(u,2),v=_[0],k=_[1];function f(){var t=v;v="",e.addTask(t),r(!0),m(!1),k("")}var T=d?g.a.error:g.a.inputText;return o.a.createElement("div",{className:g.a.TodoListHeader},o.a.createElement("h3",{className:g.a.todoListHeaderTitle},"What to Learn"),o.a.createElement("div",{className:g.a.todoListNewTaskForm},o.a.createElement("input",{type:"text",placeholder:"New task name",className:T,onKeyPress:function(e){"Enter"===e.key&&f()},value:v}),o.a.createElement("button",{onClick:f,disabled:i},"Add")))},j=a(26),w=a.n(j),x=a(8),S=a.n(x);var C=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),i=a[0],r=a[1],c=!0===e.task.isDone?S.a.done:"";return o.a.createElement("div",{className:S.a.todoListTask+" "+c},o.a.createElement("div",{className:S.a.taskWrap},o.a.createElement("input",{type:"checkbox",checked:e.task.isDone}),i?o.a.createElement("input",{type:"text",value:e.task.title,autoFocus:!0,onBlur:function(){r(!1)}}):o.a.createElement("div",{className:S.a.wordWrap},e.task.id,"-",e.task.title,"-priority:"),o.a.createElement("div",null,o.a.createElement("select",{className:S.a.selector},o.a.createElement("option",null,"high"),o.a.createElement("option",null,"medium"),o.a.createElement("option",null,"low"))),o.a.createElement("button",{className:S.a.deleteButton,onMouseDown:function(){e.deleteTask(e.task.id)}},"X")))};var F=function(e){var t=e.tasks.map((function(t,a){return o.a.createElement(C,{key:a,task:t,deleteTask:e.deleteTask})}));return o.a.createElement("div",{className:w.a.todoListTask},t)},H=a(27),W=a.n(H);var M=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),i=a[0],r=a[1];return o.a.createElement("div",{className:W.a.todoListFooter},!i&&o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){e.changeFilter("all")}},"All"),o.a.createElement("button",{onClick:function(){e.changeFilter("active")}},"Active"),o.a.createElement("button",{onClick:function(){e.changeFilter("completed")}},"Completed")),!i&&o.a.createElement("span",{onClick:function(){r(!0)}},"hide"),i&&o.a.createElement("span",{onClick:function(){r(!1)}},"show"))};var B=function(){var e=Object(n.useState)([{id:0,title:"CSS",isDone:!0,priority:"low"},{id:1,title:"JS",isDone:!0,priority:"medium"},{id:2,title:"ReactJS",isDone:!1,priority:"high"}]),t=Object(s.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)("all"),c=Object(s.a)(r,2),l=c[0],d=c[1],m=Object(n.useState)(2),u=Object(s.a)(m,2),_=u[0],v=(u[1],a);return"active"===l&&(v=a.filter((function(e){return!1===e.isDone}))),"completed"===l&&(v=a.filter((function(e){return!0===e.isDone}))),o.a.createElement("div",null,o.a.createElement("div",{className:N.a.todoList},o.a.createElement(O,{addTask:function(e){var t={id:_++,title:e,isDone:!1,priority:"high"},n=[].concat(Object(y.a)(a),[t]);i(n)}}),o.a.createElement(F,{deleteTask:function(e){var t=a.filter((function(t){return t.id!==e}));i(t)},tasks:v}),o.a.createElement(M,{changeFilter:function(e){d(e)}})))},D=a(28),A=a.n(D),J=a(16),U=a.n(J),V=function(e){return o.a.createElement("div",{className:U.a.item},o.a.createElement(p.b,{to:e.dayOfWeek.link,activeClassName:U.a.activeLink,onClick:e.onClick},e.dayOfWeek.title))};var I=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),i=(a[0],a[1]);function r(e){i(e.currentTarget.textContent)}var c=e.daysOfWeek.map((function(e){return o.a.createElement(V,{dayOfWeek:e,onClick:r})}));return o.a.createElement("nav",{className:A.a.nav},c)};var P=function(){var e=Object(n.useState)([{title:"monday",link:"/monday",style:"styles.activeLink"},{title:"tuesday",link:"/tuesday",style:"styles.activeLink"}]),t=Object(s.a)(e,2),a=t[0];return t[1],o.a.createElement(p.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(I,{daysOfWeek:a}),o.a.createElement(L.a,{path:"/monday",render:function(){return o.a.createElement(E,null)}}),o.a.createElement(L.a,{path:"/tuesday",render:function(){return o.a.createElement(B,null)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[31,1,2]]]);
//# sourceMappingURL=main.0c6e6b12.chunk.js.map