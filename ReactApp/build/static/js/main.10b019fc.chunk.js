(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),l=a.n(r),i=(a(12),a(1)),s=(a(13),{apiEndpoint:"http://localhost:8090",apiInterval:1e3,currencyType:0,icons:{0:"/static/lock.png",1:"/static/coin.png",2:"/static/camera.png",3:"/static/key.png",4:"/static/cocktail.png",5:"/static/flag.png"},recent_limit:6,goal:25e3}),o=a(2),u=a.n(o),m=a(3),p=function(e){var t=new Intl.NumberFormat,a=Object(n.useState)(0),r=Object(i.a)(a,2),l=r[0],o=r[1],p=Object(n.useState)(null),d=Object(i.a)(p,2),y=d[0],g=d[1];return Object(n.useEffect)(function(){var t=function(){var t=Object(m.a)(u.a.mark(function t(){var a,n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e.badgeType,e.currencyType),t.next=3,fetch(s.apiEndpoint+"/getTotal/".concat(e.badgeType,"/").concat(e.currencyType,"/"));case 3:return a=t.sent,t.next=6,a.text();case 6:a=t.sent,(n=parseInt(a))>s.goal&&(n=s.goal),o(n);case 10:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();null!=y&&clearInterval(y),g(setInterval(t,s.apiInterval))},[e.badgeType,e.currencyType]),c.a.createElement("div",{className:"pledge-container bright-text"},c.a.createElement("div",{className:"pledge-title"},c.a.createElement("div",{className:"icon"},c.a.createElement("img",{src:e.icon})),c.a.createElement("div",{style:{paddingLeft:"50px"}},t.format(l))),c.a.createElement("div",{className:"pledge-subtitle gray-text"},"pledged of"," ",c.a.createElement("span",{className:"bright-text"},t.format(e.goal))," ","goal"))},d=a(6),y=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(null),p=Object(i.a)(o,2),d=p[0],y=p[1];Object(n.useEffect)(function(){var t=function(){var t=Object(m.a)(u.a.mark(function t(){var a;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(s.apiEndpoint+"/recent/".concat(e.currencyType,"/").concat(e.currencyType+3,"/").concat(s.recent_limit,"/"));case 2:return a=t.sent,t.next=5,a.text();case 5:a=t.sent,l(JSON.parse(a));case 7:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();null!=d&&clearInterval(d),y(setInterval(t,s.apiInterval))},[e.badgeType,e.currencyType]);var g=r.map(function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",null,e.badge_id),c.a.createElement("td",null,e.badge_type),c.a.createElement("td",null,c.a.createElement("div",{className:"currency-display"},c.a.createElement("div",{className:"icon-small"},c.a.createElement("img",{src:s.icons[e.currency_type]})),c.a.createElement("div",{style:{paddingLeft:"5px"}},e.quantity))))});return c.a.createElement("table",{className:"recent-container"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Id"),c.a.createElement("th",null,"Type"),c.a.createElement("th",null,"Amount"))),c.a.createElement("tbody",null,g))};var g=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)(function(){Object(d.a)("ctrl+a",function(e,t){e.preventDefault(),r(function(e){return e+1==3?0:e+1})}),r(s.currencyType)},[]),c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"Padding"}),c.a.createElement("div",{className:"Pledges"},c.a.createElement(p,{badgeType:"Q",currencyType:a,goal:s.goal,icon:s.icons[a]}),c.a.createElement(p,{badgeType:"C",currencyType:a+3,goal:s.goal,icon:s.icons[a+3]})),c.a.createElement("div",{className:"Recents"},c.a.createElement("div",{className:"recents-title"},"Recent"),c.a.createElement("div",{className:"divider-line"}),c.a.createElement(y,{currencyType:a})),c.a.createElement("div",{className:"Padding"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,a){e.exports=a(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.10b019fc.chunk.js.map