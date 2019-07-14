(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(20),o=t.n(c),i=t(19),u=t(14),l=t(28),s=(t(79),t(91),t(92),t(7)),d=Object(s.a)({basename:"rocketshoes-react-js/"}),p=t(12),m=t(13),b=(t(93),t(57)),f=t.n(b);function g(){var n=Object(p.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');\n\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    background: #191920 url(",") no-repeat center top;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, button {\n    font: 14px Roboto, sans-serif;\n  }\n\n  #root {\n    max-width: 1020px;\n    margin: 0 auto;\n    padding: 0 20px 50px;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"]);return g=function(){return n},n}var x=Object(m.a)(g(),f.a),E=t(15),O=t.n(E),v=t(24),h=t(60),j=t(67),y=t(18),k=t(61),w=t.n(k).a.create({baseURL:"https://my-json-server.typicode.com/miguelti/rocketshoes-react-js"}),U=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format;function A(n,e){return{type:"@cart/UPDATE_AMOUNT_REQUEST",id:n,amount:e}}function S(n,e){return{type:"@cart/UPDATE_AMOUNT_SUCCESS",id:n,amount:e}}var T=t(33);function R(){var n=Object(p.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 20px;\n  list-style: none;\n\n  li {\n    display: flex;\n    flex-direction: column;\n    background: #fff;\n    border-radius: 4px;\n    padding: 20px;\n\n    img {\n      align-self: center;\n      max-width: 250px;\n    }\n\n    > strong {\n      font-size: 16px;\n      line-height: 20px;\n      color: #333;\n      margin-top: 5px;\n    }\n\n    > span {\n      font-size: 21px;\n      font-weight: bold;\n      margin: 5px 0 20px;\n    }\n\n    button {\n      background: #7159c1;\n      color: #fff;\n      border: 0;\n      border-radius: 4px;\n      overflow: hidden;\n      margin-top: auto;\n      display: flex;\n      align-items: center;\n      transition: background 0.2s;\n\n      &:hover {\n        background: ",";\n      }\n\n      div {\n        display: flex;\n        align-items: center;\n        padding: 12px;\n        background: rgba(0, 0, 0, 0.1);\n\n        svg {\n          margin-right: 5px;\n        }\n      }\n\n      span {\n        flex: 1;\n        text-align: center;\n        font-weight: bold;\n      }\n    }\n  }\n"]);return R=function(){return n},n}var D=m.b.ul(R(),Object(T.a)(.03,"#7159c1"));function C(){var n=Object(r.useState)([]),e=Object(j.a)(n,2),t=e[0],c=e[1],o=Object(u.c)(function(n){return n.cart.reduce(function(n,e){return n[e.id]=e.amount,n},{})}),i=Object(u.b)();return Object(r.useEffect)(function(){function n(){return(n=Object(h.a)(O.a.mark(function n(){var e,t;return O.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.get("products");case 2:e=n.sent,t=e.data.map(function(n){return Object(v.a)({},n,{priceFormatted:U(n.price)})}),c(t);case 5:case"end":return n.stop()}},n)}))).apply(this,arguments)}!function(){n.apply(this,arguments)}()},[]),a.a.createElement(D,null,t.map(function(n){return a.a.createElement("li",{key:n.id},a.a.createElement("img",{src:n.image,alt:n.title}),a.a.createElement("strong",null,n.title),a.a.createElement("span",null,n.priceFormatted),a.a.createElement("button",{type:"button",onClick:function(){return e=n.id,void i(function(n){return{type:"@cart/ADD_REQUEST",id:n}}(e));var e}},a.a.createElement("div",null,a.a.createElement(y.e,{size:16,color:"#FFF"}),o[n.id]||0),a.a.createElement("span",null,"ADICIONAR AO CARRINHO")))}))}function z(){var n=Object(p.a)(["\n  display: flex;\n  align-items: baseline;\n\n  span {\n    color: #999;\n    font-weight: bold;\n  }\n\n  strong {\n    font-size: 28px;\n    margin-left: 5px;\n  }\n"]);return z=function(){return n},n}function F(){var n=Object(p.a)(["\n  width: 100%;\n\n  thead th {\n    color: #999;\n    text-align: left;\n    padding: 12px;\n  }\n\n  tbody td {\n    padding: 12px;\n    border-bottom: 1px solid #eee;\n  }\n\n  img {\n    height: 100px;\n  }\n\n  strong {\n    color: #333;\n    display: block;\n  }\n\n  span {\n    display: block;\n    margin-top: 5px;\n    font-size: 18px;\n    font-weight: bold;\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n\n    input {\n      border: 1px solid #ddd;\n      border-radius: 4px;\n      color: #666;\n      padding: 6px;\n      width: 50%;\n    }\n  }\n\n  button {\n    background: none;\n    border: 0;\n    padding: 6px;\n  }\n"]);return F=function(){return n},n}function _(){var n=Object(p.a)(["\n  padding: 30px;\n  background: #fff;\n  border-radius: 4px;\n\n  footer {\n    margin-top: 30px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  button {\n    background: #7159c1;\n    color: #fff;\n    border: 0;\n    border-radius: 4px;\n    padding: 12px 20px;\n    font-weight: bold;\n    text-transform: uppercase;\n    transition: background 0.2s;\n\n    &:hover {\n      background: ",";\n    }\n  }\n"]);return _=function(){return n},n}var M=m.b.div(_(),Object(T.a)(.3,"#7159c1")),N=m.b.table(F()),I=m.b.div(z());function Q(){var n=Object(u.c)(function(n){return U(n.cart.reduce(function(n,e){return n+e.price*e.amount},0))}),e=Object(u.c)(function(n){return n.cart.map(function(n){return Object(v.a)({},n,{subtotal:U(n.price*n.amount)})})}),t=Object(u.b)();return a.a.createElement(M,null,a.a.createElement(N,null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null),a.a.createElement("th",null,"PRODUTO"),a.a.createElement("th",null,"QTD"),a.a.createElement("th",null,"SUBTOTAL"),a.a.createElement("th",null))),a.a.createElement("tbody",null,e.map(function(n){return a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("img",{src:n.image,alt:n.title})),a.a.createElement("td",null,a.a.createElement("strong",null,n.title),a.a.createElement("span",null,n.priceFormatted)),a.a.createElement("td",null,a.a.createElement("div",null,a.a.createElement("button",{type:"button",onClick:function(){return function(n){t(A(n.id,n.amount-1))}(n)}},a.a.createElement(y.c,{size:20,color:"#7159c1"})),a.a.createElement("input",{type:"number",readOnly:!0,value:n.amount}),a.a.createElement("button",{type:"button",onClick:function(){return function(n){t(A(n.id,n.amount+1))}(n)}},a.a.createElement(y.a,{size:20,color:"#7159c1"})))),a.a.createElement("td",null,a.a.createElement("strong",null,n.subtotal)),a.a.createElement("td",null,a.a.createElement("button",{type:"button",onClick:function(){return t({type:"@cart/REMOVE",id:n.id})}},a.a.createElement(y.b,{size:20,color:"#7159c1"}))))}))),a.a.createElement("footer",null,a.a.createElement("button",{type:"button"},"Finalizar pedido"),a.a.createElement(I,null,a.a.createElement("span",null,"TOTAL"),a.a.createElement("strong",null,n))))}function L(){return a.a.createElement(i.c,null,a.a.createElement(i.a,{path:"/",exact:!0,component:C}),a.a.createElement(i.a,{path:"/cart",exact:!0,component:Q}))}var P=t(22);function B(){var n=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  transition: opacity 0.2s;\n\n  &:hover {\n    opacity: 0.7;\n  }\n\n  div {\n    text-align: right;\n    margin-right: 10px;\n\n    strong {\n      display: block;\n      color: #fff;\n    }\n\n    span {\n      font-size: 12px;\n      color: #999;\n    }\n  }\n"]);return B=function(){return n},n}function q(){var n=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 50px 0;\n"]);return q=function(){return n},n}var J=m.b.header(q()),V=Object(m.b)(P.a)(B()),H=t(63),G=t.n(H);function K(){var n=Object(u.c)(function(n){return n.cart.length});return a.a.createElement(J,null,a.a.createElement(P.a,{to:"/"},a.a.createElement("img",{src:G.a,alt:"Rocketshoes"})),a.a.createElement(V,{to:"/cart"},a.a.createElement("div",null,a.a.createElement("strong",null,"Meu carrinho"),a.a.createElement("span",null,n," itens")),a.a.createElement(y.d,{size:36,color:"#FFF"})))}var W=t(17),X=t(66),Y=t(34);var Z=Object(W.c)({cart:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"@cart/ADD_SUCCESS":return Object(Y.a)(n,function(n){var t=e.product;n.push(t)});case"@cart/REMOVE":return Object(Y.a)(n,function(n){var t=n.findIndex(function(n){return n.id===e.id});t>=0&&n.splice(t,1)});case"@cart/UPDATE_AMOUNT_SUCCESS":return Object(Y.a)(n,function(n){var t=n.findIndex(function(n){return n.id===e.id});t>=0&&(n[t].amount=Number(e.amount))});default:return n}}}),$=t(8),nn=O.a.mark(tn),en=O.a.mark(rn);function tn(n){var e,t,r,a,c,o,i,u;return O.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return e=n.id,s.next=3,Object($.select)(function(n){return n.cart.find(function(n){return n.id===e})});case 3:return t=s.sent,s.next=6,Object($.call)(w.get,"/stock/".concat(e));case 6:if(r=s.sent,a=r.data.amount,c=t?t.amount:0,!((o=c+1)>a)){s.next=13;break}return l.b.error("Quantidade solicitada fora de estoque."),s.abrupt("return");case 13:if(!t){s.next=18;break}return s.next=16,Object($.put)(S(e,o));case 16:s.next=25;break;case 18:return s.next=20,Object($.call)(w.get,"/products/".concat(e));case 20:return i=s.sent,u=Object(v.a)({},i.data,{amount:1,priceFormatted:U(i.data.price)}),s.next=24,Object($.put)({type:"@cart/ADD_SUCCESS",product:u});case 24:d.push("/cart");case 25:case"end":return s.stop()}},nn)}function rn(n){var e,t,r,a;return O.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(e=n.id,!((t=n.amount)<=0)){c.next=3;break}return c.abrupt("return");case 3:return c.next=5,Object($.call)(w.get,"/stock/".concat(e));case 5:if(r=c.sent,a=r.data.amount,!(t>a)){c.next=10;break}return l.b.error("Quantidade solicitada fora de estoque."),c.abrupt("return");case 10:return c.next=12,Object($.put)(S(e,t));case 12:case"end":return c.stop()}},en)}var an=Object($.all)([Object($.takeLatest)("@cart/ADD_REQUEST",tn),Object($.takeLatest)("@cart/UPDATE_AMOUNT_REQUEST",rn)]),cn=O.a.mark(on);function on(){return O.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object($.all)([an]);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},cn)}var un=Object(X.a)({sagaMonitor:null}),ln=Object(W.a)(un),sn=Object(W.d)(Z,ln);un.run(on);var dn=sn;var pn=function(){return a.a.createElement(u.a,{store:dn},a.a.createElement(i.b,{history:d},a.a.createElement(K,null),a.a.createElement(L,null),a.a.createElement(x,null),a.a.createElement(l.a,null)))};o.a.render(a.a.createElement(pn,null),document.getElementById("root"))},57:function(n,e,t){n.exports=t.p+"static/media/background.3c9a1ce5.svg"},63:function(n,e,t){n.exports=t.p+"static/media/logo.879557c5.svg"},70:function(n,e,t){n.exports=t(114)}},[[70,1,2]]]);
//# sourceMappingURL=main.547c5041.chunk.js.map