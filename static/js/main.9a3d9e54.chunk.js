(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),l=a.n(r),c=(a(15),a(6)),o=a(1),s=a(2),d=a(4),u=a(3),m=a(5),h=(a(17),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).minDate=(new Date).toISOString().slice(0,10),a.state={text:"",date:a.minDate,checked:!1,finishDate:a.minDate},a.handleDate=function(e){a.setState({date:e.target.value})},a.handleClick=function(e){a.state.text.length>2?(a.props.addTask(a.state),a.setState({text:"",checked:!1,date:a.minDate})):(alert("Za krotka nazwa"),console.log("Za krotka nazwa"))},a.handleInput=function(e){a.setState({text:e.target.value})},a.handleImportant=function(e){a.setState({checked:e.target.checked})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=1*(new Date).toISOString().slice(0,4)+1;return e+="-12-31",i.a.createElement("div",{className:"form"},i.a.createElement("input",{type:"text",placeholder:"dodaj zadanie",value:this.state.text,onChange:this.handleInput}),i.a.createElement("input",{type:"checkbox",id:"important",checked:this.state.checked,onChange:this.handleImportant}),i.a.createElement("label",{htmlFor:"important"},"Priorytet"),i.a.createElement("br",null),i.a.createElement("label",{htmlFor:"date"},"Do kiedy zrobi\u0107"),i.a.createElement("input",{type:"date",name:"",id:"date",value:this.state.date,min:this.minDate,max:e,onChange:this.handleDate}),i.a.createElement("br",null),i.a.createElement("button",{className:"addTask",onClick:this.handleClick},"Dodaj"))}}]),t}(n.Component)),k=function(e){var t=e.task,a=t.tekst,n=t.date,r=t.id,l=t.active,c=t.finichDate,o=t.important;if(l)return i.a.createElement("div",null,i.a.createElement("p",null,o?i.a.createElement("strong",{style:{color:"red"}},a):i.a.createElement("strong",null,a)," - do ",n,i.a.createElement("button",{onClick:function(){return e.done(r)}},"Zadanie zrobione"),i.a.createElement("button",{onClick:function(){return e.delete(r)}},"X")));var s=new Date(c).toLocaleString();return i.a.createElement("div",null,i.a.createElement("p",null,i.a.createElement("strong",null,a)," ",i.a.createElement("em",null,"(zrobi\u0107 do ",n,")"),i.a.createElement("br",null),"- potwierdzenie wykonania ",s,i.a.createElement("button",{onClick:function(){return e.delete(r)}},"X")))},f=function(e){var t=e.tasks.filter(function(e){return e.active}),a=e.tasks.filter(function(e){return!e.active});console.log(t,a);var n=t.map(function(t){return i.a.createElement(k,{key:t.id,task:t,delete:e.delete,done:e.done})}),r=a.map(function(t){return i.a.createElement(k,{key:t.id,task:t,delete:e.delete,done:e.done})});return i.a.createElement("div",null,i.a.createElement("hr",null),i.a.createElement("h2",null,"Zadania do zrobienia"),n,i.a.createElement("hr",null),i.a.createElement("h3",null,"Zadania zrobione ",i.a.createElement("em",null,"(",r.length,")")),r.length>5?"Pokazuje tylko list\u0119 ostatnich 5-cu pozycji":null,r.slice(0,5))},p=9,v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={tasks:[{id:0,tekst:"Zrobi\u0107 Kurs",date:"2019-03-03",active:!0,important:!1,finichDate:null},{id:1,tekst:"Zrobi\u0107 Kurs 1",date:"2019-03-03",active:!0,important:!0,finichDate:null},{id:2,tekst:"Zrobi\u0107 Kurs 2",date:"2019-03-03",active:!0,important:!0,finichDate:null},{id:3,tekst:"Zrobi\u0107 Kurs 3",date:"2019-03-03",active:!0,important:!0,finichDate:null},{id:4,tekst:"Zrobi\u0107 Kurs 4",date:"2019-03-03",active:!0,important:!1,finichDate:null},{id:5,tekst:"Zrobi\u0107 Kurs 5",date:"2019-03-03",active:!0,important:!0,finichDate:null},{id:6,tekst:"Zrobi\u0107 Kurs 6",date:"2019-03-03",active:!0,important:!1,finichDate:null},{id:7,tekst:"Zrobi\u0107 Kurs 7",date:"2019-03-03",active:!0,important:!1,finichDate:null},{id:8,tekst:"Zrobi\u0107 Kurs 8",date:"2019-03-03",active:!0,important:!0,finichDate:null},{id:9,tekst:"Zrobi\u0107 Kurs 9",date:"2019-03-03",active:!0,important:!1,finichDate:null}]},a.deleteTask=function(e){var t=Object(c.a)(a.state.tasks),n=t.findIndex(function(t){return t.id===e});t.splice(n,1),a.setState({tasks:t})},a.taskDone=function(e){var t=Array.from(a.state.tasks);t.forEach(function(t){t.id===e&&(t.active=!1,t.finichDate=(new Date).getTime())}),a.setState({tasks:t})},a.handleAddTask=function(e){var t={id:p+1,tekst:e.text,date:e.date,active:!0,important:e.checked,finishDate:null};p++;var n=[].concat(Object(c.a)(a.state.tasks),[t]);return a.setState({tasks:n}),!0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("h2",null,"TO DO APP"),i.a.createElement(h,{addTask:this.handleAddTask,tasks:this.state.tasks}),i.a.createElement(f,{tasks:this.state.tasks,delete:this.deleteTask,done:this.taskDone}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.9a3d9e54.chunk.js.map