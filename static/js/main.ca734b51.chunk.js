(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,function(e,t,a){e.exports={logbook:"Logbook_logbook__NXDl9",logbookHeader:"Logbook_logbookHeader__V40ye",divAdd:"Logbook_divAdd__3kv1t",addBtn:"Logbook_addBtn__30SNj",search:"Logbook_search__QGDaz",count:"Logbook_count__3XJbm",sort:"Logbook_sort__1iyFY",sortBtn:"Logbook_sortBtn__2NzTe",arrowDown:"Logbook_arrowDown__Wo3Ax",jobParam:"Logbook_jobParam__1EmEX",jobParamName:"Logbook_jobParamName__mElGo",jobParamItem:"Logbook_jobParamItem__Rkan7"}},,,,,,function(e,t,a){e.exports={job:"Item_job__22GEe",jobName:"Item_jobName__cxa84",jobPrice:"Item_jobPrice__2lcb0",jobMileage:"Item_jobMileage__3ZAeF",btnDes:"Item_btnDes__1c4tr",description:"Item_description__19-CW",close:"Item_close__3n_gf"}},function(e,t,a){e.exports={addJob:"NewItem_addJob__2eFMq",formAddJob:"NewItem_formAddJob__ZiGwB",errorInput:"NewItem_errorInput__2cnXS",validInput:"NewItem_validInput__16nFN"}},,,,,,,function(e,t,a){e.exports={item:"NavItem_item__3c6dk",activeLink:"NavItem_activeLink__2tq-_"}},,,function(e,t,a){e.exports={footer:"Footer_footer__2Nk5g",footerTitle:"Footer_footerTitle__pJ--R"}},,,,function(e,t,a){e.exports={header:"Header_header__35KdL"}},function(e,t,a){e.exports={nav:"Nav_nav__8ymvs"}},,function(e,t,a){e.exports={logo:"Logo_logo__1XBVG"}},function(e,t,a){e.exports={home:"Home_home__3VxIB"}},function(e,t,a){e.exports=a(40)},,,,,function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(23),o=a(0),r=a.n(o),c=(a(34),a(24)),l=a.n(c),m=a(25),i=a.n(m),u=a(17),s=a.n(u),b=a(8),d=function(e){return r.a.createElement("div",{className:s.a.item},r.a.createElement(b.c,{to:e.path,activeClassName:s.a.activeLink},e.name))},_=function(){return r.a.createElement("nav",{className:i.a.nav},r.a.createElement(d,{path:"/home",name:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),r.a.createElement(d,{path:"/bmw-e46",name:"BMW e46"}))},p=a(27),E=a.n(p),f=function(){return r.a.createElement("div",{className:E.a.logo},r.a.createElement(b.c,{to:"/home"},"\u0411\u043e\u0440\u0442\u0436\u0443\u0440\u043d\u0430\u043b"))},v=function(){return r.a.createElement("header",{className:l.a.header},r.a.createElement("div",{className:"container"},r.a.createElement(f,null),r.a.createElement(_,null)))},N=a(28),g=a.n(N),h=function(){return r.a.createElement("div",{className:g.a.home},r.a.createElement("p",null,"\u0412\u0441\u044f \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f \u0412\u0430\u0448\u0435\u0433\u043e \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f \u0432 \u043e\u0434\u043d\u043e\u043c \u043c\u0435\u0441\u0442\u0435"))},j=a(20),k=a.n(j),I=function(){return r.a.createElement("div",{className:k.a.footer},r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:k.a.footerTitle},"\u0411\u043e\u0440\u0442\u0436\u0443\u0440\u043d\u0430\u043b 2020")))},w=a(1),O=a(15),x=a(7),L=Object(o.createContext)({}),P=function(){return Object(o.useContext)(L)},y=function(e){var t=e.children,a=Object(o.useState)([]),n=Object(x.a)(a,2),c=n[0],l=n[1],m={logbook:c,deleteItem:function(e){l((function(t){return t.filter((function(t){return t.id!==e}))}))},sortPrice:function(){l((function(e){return Object(O.a)(e).sort((function(e,t){return e.price>t.price?1:-1}))}))},addItem:function(e,t,a,n){l((function(o){return[{id:Math.random().toString(36).substr(2,9),name:e,price:t,mileage:a,description:n}].concat(Object(O.a)(o))}))},sortName:function(){l((function(e){return Object(O.a)(e).sort((function(e,t){return e.name>t.name?1:-1}))}))}};return Object(o.useEffect)((function(){var e=localStorage.getItem("logbook")||[];l((function(){return JSON.parse(e)}))}),[]),Object(o.useEffect)((function(){localStorage.setItem("logbook",JSON.stringify(c))}),[c]),r.a.createElement(L.Provider,{value:m},t)},S=a(3),B=a.n(S),C=a(9),J=a.n(C),D=function(e){var t=e.name,a=e.price,n=e.id,c=e.mileage,l=e.description,m=P().deleteItem,i=Object(o.useState)(!1),u=Object(x.a)(i,2),s=u[0],b=u[1];return r.a.createElement("div",null,r.a.createElement("div",{className:J.a.job},r.a.createElement("div",{className:J.a.jobName},t),r.a.createElement("div",{className:J.a.jobPrice},a),r.a.createElement("div",{className:J.a.jobMileage},c),r.a.createElement("button",{className:J.a.close,onClick:function(){return m(n)}}),r.a.createElement("button",{className:J.a.btnDes,onClick:function(){return b((function(e){return!e}))}},s?"\u0421\u043a\u0440\u044b\u0442\u044c":"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435")),s&&r.a.createElement("div",{className:J.a.description},l))},A=function(){var e=P(),t=e.logbook,a=e.sortName,n=e.sortPrice,c=Object(o.useState)(""),l=Object(x.a)(c,2),m=l[0],i=l[1];return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:B.a.logbook},r.a.createElement("div",{className:B.a.logbookHeader},r.a.createElement("div",{className:B.a.divAdd},r.a.createElement(b.c,{className:B.a.addBtn,to:"/new-job"},"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0432 \u0431\u043e\u0440\u0442\u0436\u0443\u0440\u043d\u0430\u043b")),r.a.createElement("input",{className:B.a.search,placeholder:"\u041f\u043e\u0438\u0441\u043a",type:"text",onInput:function(e){i(e.target.value.toLowerCase())}}),r.a.createElement("p",{className:B.a.count},"\u0417\u0430\u043f\u0438\u0441\u0435\u0439 \u0432 \u0436\u0443\u0440\u043d\u0430\u043b\u0435: ",t.length," "),r.a.createElement("div",{className:B.a.sort},r.a.createElement("p",null,"\u041e\u0442\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c:"),r.a.createElement("button",{className:B.a.sortBtn,onClick:function(){return a()}},"\u041f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e ",r.a.createElement("i",{className:B.a.arrowDown})),r.a.createElement("button",{className:B.a.sortBtn,onClick:function(){return n()}},"\u041f\u043e \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438 ",r.a.createElement("i",{className:B.a.arrowDown})))),r.a.createElement("div",{className:B.a.jobParam},r.a.createElement("div",{className:B.a.jobParamName},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),r.a.createElement("div",{className:B.a.jobParamItem},"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c (BYN)"),r.a.createElement("div",{className:B.a.jobParamItem},"\u041f\u0440\u043e\u0431\u0435\u0433 (\u043a\u043c)")),t.filter((function(e){return e.name.search(m)>=0})).map((function(e){var t=e.id,a=e.name,n=e.price,o=e.mileage,c=e.description;return r.a.createElement(D,{key:t,id:t,name:a,price:n,mileage:o,description:c})}))))},F=a(10),M=a.n(F),G=function(){var e=P().addItem,t=Object(o.useState)(""),a=Object(x.a)(t,2),n=a[0],c=a[1],l=Object(o.useState)(""),m=Object(x.a)(l,2),i=m[0],u=m[1],s=Object(o.useState)(""),b=Object(x.a)(s,2),d=b[0],_=b[1],p=Object(o.useState)(""),E=Object(x.a)(p,2),f=E[0],v=E[1],N=function(e){e.target.value.trim().length<1?e.target.className="".concat(M.a.errorInput):e.target.className="".concat(M.a.validInput)};return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:M.a.addJob},r.a.createElement("h2",{className:M.a.title},"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c : "),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),[].forEach.call(t.target.elements,(function(e){e.value||(e.className="".concat(M.a.errorInput))})),n.trim()&&i&&d&&f.trim()&&(e(n,i,d,f),c(""),u(""),_(""),v(""),window.location.hash="/bmw-e46")},className:M.a.formAddJob},r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("p",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435:*"),r.a.createElement("input",{className:M.a.inputName,type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",value:n,onInput:N,onChange:function(e){c(e.target.value)}}))),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("p",null,"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c:*"),r.a.createElement("input",{type:"number",min:"0",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",value:i,onInput:N,onChange:function(e){return u(e.target.value)}}))),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("p",null,"\u041f\u0440\u043e\u0431\u0435\u0433:*"),r.a.createElement("input",{type:"number",min:"0",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",value:d,onInput:N,onChange:function(e){return _(e.target.value)}}))),r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("p",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:*"),r.a.createElement("textarea",{type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435",value:f,onInput:N,onChange:function(e){return v(e.target.value)}}))),r.a.createElement("button",{type:"submit"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c"))))},H=function(){return r.a.createElement(b.b,null,r.a.createElement(y,null,r.a.createElement("div",{className:"wrapper"},r.a.createElement(v,null),r.a.createElement(w.b,{exact:!0,path:"/",render:function(){return r.a.createElement(w.a,{to:"/home"})}}),r.a.createElement(w.b,{path:"/home",component:h}),r.a.createElement(w.b,{path:"/bmw-e46",component:A}),r.a.createElement(w.b,{path:"/new-job",component:G}),r.a.createElement(I,null))))};Object(n.render)(r.a.createElement(b.a,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.ca734b51.chunk.js.map