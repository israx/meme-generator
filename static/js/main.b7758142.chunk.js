(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],{111:function(e,t,a){e.exports=a.p+"static/media/trollface.be324d5b.png"},112:function(e,t,a){e.exports=a.p+"static/media/pedobear.a1a5fd7c.jpg"},117:function(e,t,a){e.exports=a(400)},121:function(e,t,a){},122:function(e,t,a){},400:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(14),c=a.n(r);a(121),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m=a(35),l=a(111),i=a.n(l);var s=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("img",{src:i.a,alt:"meme-troll"}),o.a.createElement("h1",{className:"header__title"},"Meme Generator"))},u=(a(122),a(112)),h=a.n(u);a(123);var p=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),l=Object(m.a)(c,2),i=l[0],u=l[1],p=Object(n.useState)(""),f=Object(m.a)(p,2),d=f[0],b=f[1],E=Object(n.useState)(h.a),g=Object(m.a)(E,2),v=g[0],j=g[1];function O(e){var t=e.target,a=t.value,n=t.name;"top"===n&&r(a),"bottom"===n&&u(a)}return Object(n.useEffect)((function(){fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(e){b(e.data.memes)}))}),[]),o.a.createElement("div",null,o.a.createElement(s,null),o.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault();var t=Math.floor(Math.random()*d.length),a=d[t].url;j(a)}},o.a.createElement("input",{type:"text",placeholder:"Top",onChange:O,value:a,name:"top"}),o.a.createElement("input",{type:"text",placeholder:"Bottom",onChange:O,value:i,name:"bottom"}),o.a.createElement("button",{onClick:function(){}},"MEME")),o.a.createElement("div",{className:"meme-container"},o.a.createElement("h1",{className:"title top"},a),o.a.createElement("img",{src:v}),o.a.createElement("h1",{className:"title bottom"},i)))};c.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[117,1,2]]]);
//# sourceMappingURL=main.b7758142.chunk.js.map