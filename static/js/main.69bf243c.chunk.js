(this.webpackJsonphomework=this.webpackJsonphomework||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports={message:"HelloVisitor_message__xW9Bs",commentBubble:"HelloVisitor_commentBubble__1pe0M",userName:"HelloVisitor_userName__2lxl7",helloVisitor:"HelloVisitor_helloVisitor__3j4d_",time:"HelloVisitor_time__3gywL"}},function(e,t,a){e.exports={select:"MySelect_select__3ODDh",main:"MySelect_main__3Rxf2",items:"MySelect_items__2QuMv",item:"MySelect_item__1kuod",selected:"MySelect_selected__2UT0y"}},,,,function(e,t,a){e.exports={input:"MyInput_input__m23Nw",error:"MyInput_error__3apq5",errorMessage:"MyInput_errorMessage__1pG4d"}},function(e,t,a){e.exports={todoListTask:"TodolistTask_todoListTask__11A_7",done:"TodolistTask_done__2BSNL",taskWrap:"TodolistTask_taskWrap__1R8j6",wordWrap:"TodolistTask_wordWrap__3Ho-T",selector:"TodolistTask_selector__3c_-Z",deleteButton:"TodolistTask_deleteButton__3xHQb",taskTime:"TodolistTask_taskTime__3Dxqq",displayBlockNone:"TodolistTask_displayBlockNone__7MnA6"}},,,function(e,t,a){e.exports={TodoListHeader:"TodolistHeader_TodoListHeader__AgtLA",todoListHeaderTitle:"TodolistHeader_todoListHeaderTitle__2wMn2",todoListNewTaskForm:"TodolistHeader_todoListNewTaskForm__3RDWc",todoList:"TodolistHeader_todoList__3n9yF",todoListTask:"TodolistHeader_todoListTask__UmW1_",error:"TodolistHeader_error__k5FK0",inputText:"TodolistHeader_inputText__fq_NH",errorMessage:"TodolistHeader_errorMessage__2d4Ve"}},,function(e,t,a){e.exports={mainWrapper:"Visitors_mainWrapper__1OAyV",message:"Visitors_message__3ypqu",commentBubble:"Visitors_commentBubble__UKY5B",userName:"Visitors_userName__3K2w7",helloVisitor:"Visitors_helloVisitor__33LpY",time:"Visitors_time__3KqDm"}},function(e,t,a){e.exports={nav:"NavLink_nav__25y2c",item:"NavLink_item__2CfjE",activeLink:"NavLink_activeLink__1PdyU"}},,,function(e,t,a){e.exports={mainContainer:"Junior_mainContainer__2fpR8",mainWrapper:"Junior_mainWrapper__2Cl4a"}},,,,,function(e,t,a){e.exports={myName:"MyName_myName__1GLEM"}},function(e,t,a){e.exports={mainContainer:"PreJunior_mainContainer__3OHrL"}},function(e,t,a){e.exports=a.p+"static/media/avatar1.1a286469.jpg"},function(e,t,a){e.exports={displayVisitors:"AllVisitors_displayVisitors__3UMev"}},function(e,t,a){e.exports={button:"MyButton_button__arfqX"}},function(e,t,a){e.exports={tuesday:"Todolist_tuesday__29G5Z",todoList:"Todolist_todoList__sM8AU"}},function(e,t,a){e.exports={todoListTask:"TodolistTasks_todoListTask__kvPF7"}},function(e,t,a){e.exports={checkbox:"MyCheckbox_checkbox__l8Xej"}},function(e,t,a){e.exports={todoListFooter:"TodolistFooter_todoListFooter__3jmY9","filter-active":"TodolistFooter_filter-active__1gU97"}},function(e,t,a){e.exports={nav:"Navbar_nav__1nP-r",item:"Navbar_item__3eTov",activeLink:"Navbar_activeLink__2Iy_l"}},,function(e,t,a){e.exports={mainContainer:"JuniorPlus_mainContainer__2McwV"}},function(e,t,a){e.exports=a(52)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(27),o=a.n(i),l=(a(45),a(1)),c=(a(46),a(28)),s=a.n(c);var u=function(e){return r.a.createElement("div",{className:s.a.myName},e.name)},m=a(29),d=a.n(m),_=a(12),v=a(19),p=a.n(v),f=a(8),E=a.n(f),k=a(30),h=a.n(k),g=function(e){return r.a.createElement("div",{className:E.a.myName},r.a.createElement("div",{className:E.a.message},r.a.createElement("img",{src:h.a,alt:"avatar"}),r.a.createElement("div",{className:E.a.commentBubble},r.a.createElement("div",{className:E.a.userName},e.name),r.a.createElement("div",{className:E.a.helloVisitor},e.title),r.a.createElement("div",{className:E.a.time},e.timeAdded))))},b=a(53),y=a(31),T=a.n(y),N=function(e){return r.a.createElement("div",{className:T.a.displayVisitors},e.visitors.map((function(e){return r.a.createElement("div",null,e.title)})))},j=a(13),C=a.n(j);function O(e){var t=e.error?C.a.error+" "+C.a.input:C.a.input;return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{value:e.value,placeholder:e.placeholder,className:t,onChange:function(t){e.onChange(t.currentTarget.value)},onKeyPress:function(t){e.onEnter&&e.onEnter(t)},type:"text",onBlur:e.onBlur}),e.error&&r.a.createElement("div",{className:C.a.errorMessage},e.error))}var L=a(32),S=a.n(L);function x(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:S.a.button,onClick:e.onClick},e.name))}var w=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)(""),c=Object(l.a)(o,2),s=c[0],u=c[1],m=function(e){return e<10&&(e="0"+e),e},d=function(){var e=new Date;return"".concat(m(e.getHours()),":").concat(m(e.getMinutes()))},v=Object(n.useState)(d()),f=Object(l.a)(v,2),E=f[0],k=f[1],h=Object(n.useState)(null),y=Object(l.a)(h,2),T=y[0],j=y[1];function C(){if(""!==s.trim()){var e=[{id:Object(b.a)(),title:s}].concat(Object(_.a)(a));i(e),k(d),u("")}else j("Title is required")}return r.a.createElement("div",{className:p.a.mainWrapper},r.a.createElement("div",{className:p.a.message},r.a.createElement("div",null,"Enter your name:"),r.a.createElement(O,{placeholder:"\u0418\u043c\u044f \u0441\u0432\u043e\u0451 \u0432\u0432\u0435\u0434\u0438",value:s,error:T,onEnter:function(e){j(null),13===e.charCode&&C()},onChange:function(e){u(e)}}),r.a.createElement(x,{onClick:C,name:"ADD"})),a.length?r.a.createElement("div",null,r.a.createElement(g,{title:a[i.length-1]?a[i.length-1].title:"",name:"Saveliy",timeAdded:a[i.length-1]?E:""}),"\u041f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u0438:",r.a.createElement(N,{visitors:a})):r.a.createElement("div",null,"\u041f\u043e\u0441\u0435\u0442\u0438\u0442\u0435\u043b\u0438: \u043d\u0435\u0442\u0443"))},M=a(33),H=a.n(M),V=a(17),D=a.n(V);var B=function(e){var t=Object(n.useState)(null),a=Object(l.a)(t,2),i=a[0],o=a[1],c=Object(n.useState)(""),s=Object(l.a)(c,2),u=s[0],m=s[1],d=function(){""!==u.trim()?(e.addTask(u),m("")):o("Title is required")};return r.a.createElement("div",{className:D.a.TodoListHeader},r.a.createElement("h3",{className:D.a.todoListHeaderTitle},"What to Learn"),r.a.createElement("div",{className:D.a.todoListNewTaskForm},r.a.createElement(O,{placeholder:"New task name",onChange:function(e){m(e)},onEnter:function(e){o(null),13===e.charCode&&d()},value:u,error:i}),r.a.createElement(x,{onClick:d,name:"ADD"})))},F=a(34),A=a.n(F),W=a(14),J=a.n(W),q=a(35),U=a.n(q);function P(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{checked:e.checked,className:U.a.checkbox,onChange:function(t){e.onChange(t)},type:"checkbox"}))}var I=function(e){var t=!0===e.task.isDone?J.a.done:"";return r.a.createElement("div",{className:J.a.todoListTask+" "+t},r.a.createElement("div",{className:J.a.taskWrap},r.a.createElement(P,{checked:e.task.isDone,onChange:function(t){e.changeStatus(e.task.id,t.currentTarget.checked)}}),r.a.createElement("span",null,e.task.title,"-priority:"),r.a.createElement("div",null,r.a.createElement("select",{className:J.a.selector},r.a.createElement("option",null,"high"),r.a.createElement("option",null,"medium"),r.a.createElement("option",null,"low"))),r.a.createElement(x,{onClick:function(){e.deleteTask(e.task.id)},name:"X"})))};var K=function(e){var t=e.tasks.map((function(t,a){return r.a.createElement(I,{key:a,task:t,deleteTask:e.deleteTask,changeStatus:e.changeStatus})}));return r.a.createElement("div",{className:A.a.todoListTask},t)},R=a(36),G=a.n(R);var Y=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),i=a[0],o=a[1];return r.a.createElement("div",{className:G.a.todoListFooter},!i&&r.a.createElement("div",null,r.a.createElement(x,{onClick:function(){e.changeFilter("all")},name:"All"}),r.a.createElement(x,{onClick:function(){e.changeFilter("active")},name:"Active"}),r.a.createElement(x,{onClick:function(){e.changeFilter("completed")},name:"Completed"})),!i&&r.a.createElement("span",{onClick:function(){o(!0)}},"hide"),i&&r.a.createElement("span",{onClick:function(){o(!1)}},"show"))};var X=function(){var e=Object(n.useState)([{id:Object(b.a)(),title:"CSS",isDone:!0,priority:"low"},{id:Object(b.a)(),title:"JS",isDone:!0,priority:"medium"},{id:Object(b.a)(),title:"ReactJS",isDone:!1,priority:"high"}]),t=Object(l.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)("all"),c=Object(l.a)(o,2),s=c[0],u=c[1],m=a;return"active"===s&&(m=a.filter((function(e){return!1===e.isDone}))),"completed"===s&&(m=a.filter((function(e){return!0===e.isDone}))),r.a.createElement("div",null,r.a.createElement("div",{className:H.a.todoList},r.a.createElement(B,{addTask:function(e){var t={id:Object(b.a)(),title:e,isDone:!1,priority:"high"},n=[].concat(Object(_.a)(a),[t]);i(n)}}),r.a.createElement(K,{deleteTask:function(e){var t=a.filter((function(t){return t.id!==e}));i(t)},changeStatus:function(e,t){var n=a.find((function(t){return t.id===e}));n&&(n.isDone=t,i(Object(_.a)(a)))},tasks:m}),r.a.createElement(Y,{changeFilter:function(e){u(e)}})))},Q=function(){return r.a.createElement("div",{className:d.a.mainContainer},r.a.createElement(u,{name:"Biryukov Saveliy-Georgiy Yurievich"}),r.a.createElement(w,null),r.a.createElement(X,null))},Z=a(16),$=a(2),z=a(37),ee=a.n(z),te=a(20),ae=a.n(te),ne=function(e){return r.a.createElement("div",{className:ae.a.item},r.a.createElement(Z.b,{to:e.pages.link,activeClassName:ae.a.activeLink,onClick:e.onClick},e.pages.title))};var re=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),i=(a[0],a[1]);function o(e){i(e.currentTarget.textContent||"")}var c=e.pages.map((function(e,t){return r.a.createElement(ne,{key:t,pages:e,onClick:o})}));return r.a.createElement("nav",{className:ee.a.nav},c)},ie=a(23),oe=a.n(ie);function le(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),i=a[0],o=a[1];return i?r.a.createElement(O,{value:e.title,placeholder:e.placeholder,onChange:e.onChange,onBlur:function(){o(!1),e.onChange(e.title)}}):r.a.createElement("span",{onDoubleClick:function(){o(!0)}},e.title)}var ce=a(9),se=a.n(ce);function ue(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),i=a[0],o=a[1],c=Object(n.useState)(e.value),s=Object(l.a)(c,2),u=s[0],m=s[1],d=e.items.find((function(t){return t.value===e.value})),_=e.items.find((function(e){return e.value===u}));Object(n.useEffect)((function(){m(e.value)}),[e.value]);var v=function(){return o(!i)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:se.a.select,onKeyUp:function(t){if("ArrowDown"===t.key||"ArrowUp"===t.key){for(var a=0;a<e.items.length;a++)if(e.items[a].value===u){var n="ArrowDown"===t.key?e.items[a+1]:e.items[a-1];if(n)return void e.onChange(n.value)}d||e.onChange(e.items[0].value)}"Enter"!==t.key&&"Escape"!==t.key||o(!1)}},r.a.createElement("span",{className:se.a.main,onClick:v},d&&d.title),i&&r.a.createElement("div",{className:se.a.items},e.items.map((function(t){return r.a.createElement("option",{onMouseEnter:function(){m(t.value)},className:se.a.item+" "+(_===t?se.a.selected:""),key:t.value,onClick:function(){var a;a=t.value,e.onChange(a),v()}},t.title)})))))}function me(e){return r.a.createElement("div",null,r.a.createElement("div",null,e.items.map((function(t){return r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:e.name,key:t.id,value:e.value,onClick:function(){var a;a=t.title,e.onChange(a)}}),r.a.createElement("span",null,t.title))}))))}var de=function(){var e=Object(n.useState)("\u044f \u043e\u0431\u044b\u0447\u043d\u044b\u0439 \u0441\u043f\u0430\u043d"),t=Object(l.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)("2"),c=Object(l.a)(o,2),s=c[0],u=c[1],m=Object(n.useState)("Email"),d=Object(l.a)(m,2),_=d[0],v=d[1];return r.a.createElement("div",{className:oe.a.mainContainer},r.a.createElement("div",{className:oe.a.mainWrapper},r.a.createElement(le,{title:a,placeholder:"write something here",onChange:function(e){i(e)}}),r.a.createElement(x,{onClick:function(){!function(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}("title",{title:a})},name:"save value"}),r.a.createElement(x,{onClick:function(){var e=function(e,t){var a=localStorage.getItem(e);return null!==a&&(t=JSON.parse(a)),t}("title",{title:a});i(e.title)},name:"restore value"})),r.a.createElement("div",null,r.a.createElement("span",null,"Choose your city"),r.a.createElement(ue,{value:s,items:[{value:"1",title:"Moscow"},{value:"2",title:"Kiev"},{value:"3",title:"Minsk"}],onChange:u})),r.a.createElement("span",null,"Please select your preferred contact method:"),r.a.createElement(me,{name:"contacts",value:_,onChange:v,items:[{id:Object(b.a)(),title:"Email"},{id:Object(b.a)(),title:"Phone"},{id:Object(b.a)(),title:"Mail"}]}))},_e=a(39),ve=a.n(_e),pe=function(){return r.a.createElement("div",{className:ve.a.mainContainer})},fe=function(){var e=Object(n.useState)([{title:"preJunior",link:"/preJunior",style:"styles.activeLink"},{title:"Junior",link:"/junior",style:"styles.activeLink"},{title:"Junior+",link:"/junior+",style:"styles.activeLink"}]),t=Object(l.a)(e,2),a=t[0];t[1];return r.a.createElement(Z.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(re,{pages:a}),r.a.createElement($.a,{path:"/preJunior",render:function(){return r.a.createElement(Q,null)}}),r.a.createElement($.a,{path:"/junior",render:function(){return r.a.createElement(de,null)}}),r.a.createElement($.a,{path:"/junior+",render:function(){return r.a.createElement(pe,null)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[40,1,2]]]);
//# sourceMappingURL=main.69bf243c.chunk.js.map