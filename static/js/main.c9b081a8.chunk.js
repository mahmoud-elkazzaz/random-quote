(this["webpackJsonprandom-quote"]=this["webpackJsonprandom-quote"]||[]).push([[0],[,,,,,,function(t,e,n){t.exports=n(17)},,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},,,function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),c=n(4),r=n.n(c),i=(n(11),n(2)),s=(n(12),n(13),n(14),n(1)),l=n.n(s),u=n(19);var f=function(){setTimeout((function(){return l()(".quote-box").css("opacity",1)}),500);var t=n(15)({luminosity:"dark"}),e=Object(o.useState)(t),c=Object(i.a)(e,2),r=c[0],s=c[1],f=Object(o.useState)(1),m=Object(i.a)(f,2),d=m[0],b=m[1],h=Object(o.useState)(""),p=Object(i.a)(h,2),w=p[0],E=p[1],g=Object(o.useState)(1),k=Object(i.a)(g,2),x=k[0],y=(k[1],Object(o.useState)("")),v=Object(i.a)(y,2),j=v[0],q=v[1],O={backgroundColor:r,height:"100vh"};return l()("button").click((function(){l()("p").addClass("quote  ")})),l()("p").on("webkitAnimationEnd oanimationend msAnimationEnd animationend",(function(){l()(this).removeClass("quote"),console.log("Class Removed")})),Object(o.useEffect)((function(){var e=Math.floor(1643*Math.random());fetch("https://type.fit/api/quotes/").then((function(t){return t.json()})).then((function(t){E((function(n){return t[e].text})),t[e].author?q((function(n){return t[e].author})):q((function(t){return"Unknown"}))})),s((function(e){return t}))}),[d]),a.a.createElement("div",{style:O,className:"App container-fluid d-flex align-items-center"},a.a.createElement("div",{style:{backgroundColor:"white",width:"500px",height:"auto",padding:30,border:"2px solid black",opacity:0},className:"quote-box container d-flex flex-column"},a.a.createElement("p",{style:{color:r,opacity:x},class:" text-center mb-4"},a.a.createElement("i",{class:"fas fa-quote-left fa-2x mr-2"}),w),a.a.createElement("p",{style:{color:r},className:"text-right"},"-",j),a.a.createElement("div",null,a.a.createElement("button",{style:{backgroundColor:r},onClick:function(){b((function(t){return t+1}))},type:"button",class:"btn btn-primary float-right"},"New Quote"),a.a.createElement("a",{target:"_blank",text:w,href:"https://twitter.com/intent/tweet?text=".concat(w,"--").concat(j)},a.a.createElement("i",{class:"fab fa-twitter-square fa-3x icons",style:{color:r}})),a.a.createElement(u.a,{url:"https://www.facebook.com",quote:"".concat(w," --").concat(j)},a.a.createElement("i",{class:"fab fa-facebook-square fa-3x icons mr-3",style:{color:r}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.c9b081a8.chunk.js.map