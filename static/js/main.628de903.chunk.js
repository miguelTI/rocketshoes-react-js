(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(n,t,e){"use strict";e.r(t);var r={};e.r(r),e.d(r,"addToCartRequest",function(){return z}),e.d(r,"addToCartSuccess",function(){return F}),e.d(r,"removeFromCart",function(){return _}),e.d(r,"updateAmountRequest",function(){return M}),e.d(r,"updateAmountSuccess",function(){return N});var a=e(0),c=e.n(a),o=e(20),u=e.n(o),i=e(19),l=e(17),s=e(28),d=(e(83),e(95),e(96),e(7)),p=Object(d.a)({basename:"rocketshoes-react-js/"}),m=e(13),b=e(14),f=(e(97),e(57)),g=e.n(f);function x(){var n=Object(m.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');\n\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    background: #191920 url(",") no-repeat center top;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, button {\n    font: 14px Roboto, sans-serif;\n  }\n\n  #root {\n    max-width: 1020px;\n    margin: 0 auto;\n    padding: 0 20px 50px;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"]);return x=function(){return n},n}var E=Object(b.a)(x(),g.a),h=e(15),v=e.n(h),O=e(24),j=e(60),y=e(61),k=e(62),w=e(70),A=e(63),S=e(72),T=e(12),C=e(18),R=e(64),U=e.n(R).a.create({baseURL:"https://my-json-server.typicode.com/miguelti/rocketshoes-react-js"}),D=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format;function z(n){return{type:"@cart/ADD_REQUEST",id:n}}function F(n){return{type:"@cart/ADD_SUCCESS",product:n}}function _(n){return{type:"@cart/REMOVE",id:n}}function M(n,t){return{type:"@cart/UPDATE_AMOUNT_REQUEST",id:n,amount:t}}function N(n,t){return{type:"@cart/UPDATE_AMOUNT_SUCCESS",id:n,amount:t}}var I=e(33);function P(){var n=Object(m.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 20px;\n  list-style: none;\n\n  li {\n    display: flex;\n    flex-direction: column;\n    background: #fff;\n    border-radius: 4px;\n    padding: 20px;\n\n    img {\n      align-self: center;\n      max-width: 250px;\n    }\n\n    > strong {\n      font-size: 16px;\n      line-height: 20px;\n      color: #333;\n      margin-top: 5px;\n    }\n\n    > span {\n      font-size: 21px;\n      font-weight: bold;\n      margin: 5px 0 20px;\n    }\n\n    button {\n      background: #7159c1;\n      color: #fff;\n      border: 0;\n      border-radius: 4px;\n      overflow: hidden;\n      margin-top: auto;\n      display: flex;\n      align-items: center;\n      transition: background 0.2s;\n\n      &:hover {\n        background: ",";\n      }\n\n      div {\n        display: flex;\n        align-items: center;\n        padding: 12px;\n        background: rgba(0, 0, 0, 0.1);\n\n        svg {\n          margin-right: 5px;\n        }\n      }\n\n      span {\n        flex: 1;\n        text-align: center;\n        font-weight: bold;\n      }\n    }\n  }\n"]);return P=function(){return n},n}var Q=b.b.ul(P(),Object(I.a)(.03,"#7159c1")),q=function(n){function t(){var n,e;Object(y.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=Object(w.a)(this,(n=Object(A.a)(t)).call.apply(n,[this].concat(a)))).state={products:[]},e.handleAddProduct=function(n){(0,e.props.addToCartRequest)(n)},e}return Object(S.a)(t,n),Object(k.a)(t,[{key:"componentDidMount",value:function(){var n=Object(j.a)(v.a.mark(function n(){var t,e;return v.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,U.get("products");case 2:t=n.sent,e=t.data.map(function(n){return Object(O.a)({},n,{priceFormatted:D(n.price)})}),this.setState({products:e});case 5:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var n=this,t=this.state.products,e=this.props.amount;return c.a.createElement(Q,null,t.map(function(t){return c.a.createElement("li",{key:t.id},c.a.createElement("img",{src:t.image,alt:t.title}),c.a.createElement("strong",null,t.title),c.a.createElement("span",null,t.priceFormatted),c.a.createElement("button",{type:"button",onClick:function(){return n.handleAddProduct(t.id)}},c.a.createElement("div",null,c.a.createElement(C.e,{size:16,color:"#FFF"}),e[t.id]||0),c.a.createElement("span",null,"ADICIONAR AO CARRINHO")))}))}}]),t}(a.Component),L=Object(l.b)(function(n){return{amount:n.cart.reduce(function(n,t){return n[t.id]=t.amount,n},{})}},function(n){return Object(T.b)(r,n)})(q);function B(){var n=Object(m.a)(["\n  display: flex;\n  align-items: baseline;\n\n  span {\n    color: #999;\n    font-weight: bold;\n  }\n\n  strong {\n    font-size: 28px;\n    margin-left: 5px;\n  }\n"]);return B=function(){return n},n}function J(){var n=Object(m.a)(["\n  width: 100%;\n\n  thead th {\n    color: #999;\n    text-align: left;\n    padding: 12px;\n  }\n\n  tbody td {\n    padding: 12px;\n    border-bottom: 1px solid #eee;\n  }\n\n  img {\n    height: 100px;\n  }\n\n  strong {\n    color: #333;\n    display: block;\n  }\n\n  span {\n    display: block;\n    margin-top: 5px;\n    font-size: 18px;\n    font-weight: bold;\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n\n    input {\n      border: 1px solid #ddd;\n      border-radius: 4px;\n      color: #666;\n      padding: 6px;\n      width: 50%;\n    }\n  }\n\n  button {\n    background: none;\n    border: 0;\n    padding: 6px;\n  }\n"]);return J=function(){return n},n}function V(){var n=Object(m.a)(["\n  padding: 30px;\n  background: #fff;\n  border-radius: 4px;\n\n  footer {\n    margin-top: 30px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  button {\n    background: #7159c1;\n    color: #fff;\n    border: 0;\n    border-radius: 4px;\n    padding: 12px 20px;\n    font-weight: bold;\n    text-transform: uppercase;\n    transition: background 0.2s;\n\n    &:hover {\n      background: ",";\n    }\n  }\n"]);return V=function(){return n},n}var H=b.b.div(V(),Object(I.a)(.3,"#7159c1")),G=b.b.table(J()),K=b.b.div(B());var W=Object(l.b)(function(n){return{cart:n.cart.map(function(n){return Object(O.a)({},n,{subtotal:D(n.price*n.amount)})}),total:D(n.cart.reduce(function(n,t){return n+t.price*t.amount},0))}},function(n){return Object(T.b)(r,n)})(function(n){var t=n.cart,e=n.total,r=n.removeFromCart,a=n.updateAmountRequest;return c.a.createElement(H,null,c.a.createElement(G,null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null),c.a.createElement("th",null,"PRODUTO"),c.a.createElement("th",null,"QTD"),c.a.createElement("th",null,"SUBTOTAL"),c.a.createElement("th",null))),c.a.createElement("tbody",null,t.map(function(n){return c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("img",{src:n.image,alt:n.title})),c.a.createElement("td",null,c.a.createElement("strong",null,n.title),c.a.createElement("span",null,n.priceFormatted)),c.a.createElement("td",null,c.a.createElement("div",null,c.a.createElement("button",{type:"button",onClick:function(){return function(n){a(n.id,n.amount-1)}(n)}},c.a.createElement(C.c,{size:20,color:"#7159c1"})),c.a.createElement("input",{type:"number",readOnly:!0,value:n.amount}),c.a.createElement("button",{type:"button",onClick:function(){return function(n){a(n.id,n.amount+1)}(n)}},c.a.createElement(C.a,{size:20,color:"#7159c1"})))),c.a.createElement("td",null,c.a.createElement("strong",null,n.subtotal)),c.a.createElement("td",null,c.a.createElement("button",{type:"button",onClick:function(){return r(n.id)}},c.a.createElement(C.b,{size:20,color:"#7159c1"}))))}))),c.a.createElement("footer",null,c.a.createElement("button",{type:"button"},"Finalizar pedido"),c.a.createElement(K,null,c.a.createElement("span",null,"TOTAL"),c.a.createElement("strong",null,e))))});function X(){return c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/",exact:!0,component:L}),c.a.createElement(i.a,{path:"/cart",exact:!0,component:W}))}var Y=e(22);function Z(){var n=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  transition: opacity 0.2s;\n\n  &:hover {\n    opacity: 0.7;\n  }\n\n  div {\n    text-align: right;\n    margin-right: 10px;\n\n    strong {\n      display: block;\n      color: #fff;\n    }\n\n    span {\n      font-size: 12px;\n      color: #999;\n    }\n  }\n"]);return Z=function(){return n},n}function $(){var n=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 50px 0;\n"]);return $=function(){return n},n}var nn=b.b.header($()),tn=Object(b.b)(Y.a)(Z()),en=e(66),rn=e.n(en);var an=Object(l.b)(function(n){return{cartSize:n.cart.length}})(function(n){var t=n.cartSize;return c.a.createElement(nn,null,c.a.createElement(Y.a,{to:"/"},c.a.createElement("img",{src:rn.a,alt:"Rocketshoes"})),c.a.createElement(tn,{to:"/cart"},c.a.createElement("div",null,c.a.createElement("strong",null,"Meu carrinho"),c.a.createElement("span",null,t," itens")),c.a.createElement(C.d,{size:36,color:"#FFF"})))}),cn=e(69),on=e(34);var un=Object(T.c)({cart:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"@cart/ADD_SUCCESS":return Object(on.a)(n,function(n){var e=t.product;n.push(e)});case"@cart/REMOVE":return Object(on.a)(n,function(n){var e=n.findIndex(function(n){return n.id===t.id});e>=0&&n.splice(e,1)});case"@cart/UPDATE_AMOUNT_SUCCESS":return Object(on.a)(n,function(n){var e=n.findIndex(function(n){return n.id===t.id});e>=0&&(n[e].amount=Number(t.amount))});default:return n}}}),ln=e(8),sn=v.a.mark(pn),dn=v.a.mark(mn);function pn(n){var t,e,r,a,c,o,u,i;return v.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return t=n.id,l.next=3,Object(ln.select)(function(n){return n.cart.find(function(n){return n.id===t})});case 3:return e=l.sent,l.next=6,Object(ln.call)(U.get,"/stock/".concat(t));case 6:if(r=l.sent,a=r.data.amount,c=e?e.amount:0,!((o=c+1)>a)){l.next=13;break}return s.b.error("Quantidade solicitada fora de estoque."),l.abrupt("return");case 13:if(!e){l.next=18;break}return l.next=16,Object(ln.put)(N(t,o));case 16:l.next=25;break;case 18:return l.next=20,Object(ln.call)(U.get,"/products/".concat(t));case 20:return u=l.sent,i=Object(O.a)({},u.data,{amount:1,priceFormatted:D(u.data.price)}),l.next=24,Object(ln.put)(F(i));case 24:p.push("/cart");case 25:case"end":return l.stop()}},sn)}function mn(n){var t,e,r,a;return v.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(t=n.id,!((e=n.amount)<=0)){c.next=3;break}return c.abrupt("return");case 3:return c.next=5,Object(ln.call)(U.get,"/stock/".concat(t));case 5:if(r=c.sent,a=r.data.amount,!(e>a)){c.next=10;break}return s.b.error("Quantidade solicitada fora de estoque."),c.abrupt("return");case 10:return c.next=12,Object(ln.put)(N(t,e));case 12:case"end":return c.stop()}},dn)}var bn=Object(ln.all)([Object(ln.takeLatest)("@cart/ADD_REQUEST",pn),Object(ln.takeLatest)("@cart/UPDATE_AMOUNT_REQUEST",mn)]),fn=v.a.mark(gn);function gn(){return v.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(ln.all)([bn]);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},fn)}var xn=Object(cn.a)({sagaMonitor:null}),En=Object(T.a)(xn),hn=Object(T.d)(un,En);xn.run(gn);var vn=hn;var On=function(){return c.a.createElement(l.a,{store:vn},c.a.createElement(i.b,{history:p},c.a.createElement(an,null),c.a.createElement(X,null),c.a.createElement(E,null),c.a.createElement(s.a,null)))};u.a.render(c.a.createElement(On,null),document.getElementById("root"))},57:function(n,t,e){n.exports=e.p+"static/media/background.3c9a1ce5.svg"},66:function(n,t,e){n.exports=e.p+"static/media/logo.879557c5.svg"},74:function(n,t,e){n.exports=e(118)}},[[74,1,2]]]);
//# sourceMappingURL=main.628de903.chunk.js.map