(this["webpackJsonpreact-sneakers"]=this["webpackJsonpreact-sneakers"]||[]).push([[0],{21:function(e,t,a){e.exports={overlay:"Drawer_overlay__2ECiq",overlayVisible:"Drawer_overlayVisible__2myRl",drawer:"Drawer_drawer__1nimL",items:"Drawer_items__2ZGHc"}},25:function(e,t,a){e.exports={card:"Card_card__4Tby-",plus:"Card_plus__cMkUo",favorite:"Card_favorite__1nsyo"}},43:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(35),s=a.n(n),i=a(14),l=(a(43),a(44),a(11)),o=a(12),d=a(8),j=a.n(d),u=a(13),b=a(4),m=a(5),x=a.n(m),h=a(2),p=r.a.createContext({}),f=function(){var e=r.a.useContext(p),t=e.cartItems,a=e.setCartItems,c=t.reduce((function(e,t){return t.price+e}),0);return{cartItems:t,setCartItems:a,totalPrice:c}},O=a(1),v=function(e){var t=e.title,a=e.image,c=e.description,n=r.a.useContext(p).setCartOpened;return Object(O.jsxs)("div",{className:"cartEmpty d-flex align-center justify-center flex-column flex",children:[Object(O.jsx)("img",{className:"mb-20",width:"120px",src:a,alt:"empty"}),Object(O.jsx)("h2",{children:t}),Object(O.jsx)("p",{className:"opacity-6",children:c}),Object(O.jsxs)("button",{onClick:function(){return n(!1)},className:"greenButton",children:[Object(O.jsx)("img",{src:"/img/arrow.svg",alt:"Arrow"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})]})},g=a(21),N=a.n(g),k=function(e){return new Promise((function(t){return setTimeout(t,e)}))};var w=function(e){var t=e.onClose,a=e.onRemove,c=e.items,n=void 0===c?[]:c,s=e.opened,i=f(),l=i.cartItems,o=i.setCartItems,d=i.totalPrice,m=r.a.useState(!1),h=Object(b.a)(m,2),p=h[0],g=h[1],w=r.a.useState(!1),C=Object(b.a)(w,2),y=C[0],I=C[1],_=r.a.useState(null),S=Object(b.a)(_,2),A=S[0],T=S[1],B=function(){var e=Object(u.a)(j.a.mark((function e(){var t,a,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,I(!0),e.next=4,x.a.post("https://6156e726e039a0001725ac90.mockapi.io/orders",{items:l});case 4:t=e.sent,a=t.data,T(a.id),g(!0),o([]),c=0;case 10:if(!(c<l.length)){e.next=18;break}return r=l[c],e.next=14,x.a.delete("https://6156e726e039a0001725ac90.mockapi.io/cart/"+r.id);case 14:k(1e3);case 15:c++,e.next=10;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),alert(e.t0.message);case 23:I(!1);case 24:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"".concat(N.a.overlay," ").concat(s?N.a.overlayVisible:""),children:Object(O.jsxs)("div",{className:N.a.drawer,children:[Object(O.jsxs)("h2",{className:"d-flex justify-between mb-30",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430 ",Object(O.jsx)("img",{onClick:t,className:"cu-p",src:"img/btn-remove.svg",alt:"Close"})]}),n.length>0?Object(O.jsxs)("div",{className:"d-flex flex-column flex",children:[Object(O.jsx)("div",{className:"items flex",children:n.map((function(e){return Object(O.jsxs)("div",{className:"cartItem d-flex align-center mb-20",children:[Object(O.jsx)("div",{style:{backgroundImage:"url(".concat(e.imageUrl,")")},className:"cartItemImg"}),Object(O.jsxs)("div",{className:"mr-20 flex",children:[Object(O.jsx)("p",{className:"mb-5",children:e.title}),Object(O.jsxs)("b",{children:[e.price," \u0440\u0443\u0431."]})]}),Object(O.jsx)("img",{onClick:function(){return a(e.id)},className:"removeBtn",src:"/img/btn-remove.svg",alt:"Remove"})]},e.id)}))}),Object(O.jsxs)("div",{className:"cartTotalBlock",children:[Object(O.jsxs)("ul",{className:"cartTotalBlock",children:[Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(O.jsx)("div",{}),Object(O.jsxs)("b",{children:[d," \u0440\u0443\u0431."]})]}),Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{children:"\u041d\u0430\u043b\u043e\u0433 5%:"}),Object(O.jsx)("div",{}),Object(O.jsxs)("b",{children:[.05*d," \u0440\u0443\u0431."]})]})]}),Object(O.jsxs)("button",{disabled:y,onClick:B,className:"greenButton",children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437",Object(O.jsx)("img",{src:"/img/arrow.svg",alt:"Arrow"})]})]})]}):Object(O.jsx)(v,{title:p?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f",description:p?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 #".concat(A," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437",image:p?"/img/complete-order.jpg":"/img/empty-cart.jpg"})]})})};var C=function(e){var t=f().totalPrice;return Object(O.jsxs)("header",{className:"d-flex justify-between align-center p-40",children:[Object(O.jsx)(i.b,{to:"/",children:Object(O.jsxs)("div",{className:"d-flex align-center",children:[Object(O.jsx)("img",{width:40,height:40,src:"/img/logo.png",alt:"logo"}),Object(O.jsxs)("div",{className:"headerInfo",children:[Object(O.jsx)("h3",{className:"text-uppercase",children:"React Sneakers"}),Object(O.jsx)("p",{className:"opacity-5",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a"})]})]})}),Object(O.jsxs)("ul",{className:"d-flex ",children:[Object(O.jsxs)("li",{className:"mr-30 cu-p",onClick:e.onClickCart,children:[Object(O.jsx)("img",{width:18,height:18,src:"/img/cart.svg",alt:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(O.jsxs)("span",{children:[t," \u0440\u0443\u0431."]})]}),Object(O.jsx)("li",{children:Object(O.jsx)(i.b,{to:"/favorites",children:Object(O.jsx)("img",{className:"mr-30 cu-p",width:18,height:18,src:"/img/heart.svg",alt:"\u0417\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})})}),Object(O.jsx)("li",{children:Object(O.jsx)(i.b,{to:"/orders",children:Object(O.jsx)("img",{width:18,height:18,src:"/img/user.svg",alt:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"})})})]})]})},y=a(25),I=a.n(y),_=a(38);var S=function(e){var t=e.id,a=e.title,c=e.imageUrl,n=e.price,s=e.onFavorite,i=e.onPlus,l=e.favorited,o=void 0!==l&&l,d=e.loading,j=void 0!==d&&d,u=r.a.useContext(p).isItemAdded,m=r.a.useState(o),x=Object(b.a)(m,2),h=x[0],f=x[1],v={id:t,parentId:t,title:a,imageUrl:c,price:n};return Object(O.jsx)("div",{className:I.a.card,children:j?Object(O.jsxs)(_.a,{speed:2,width:165,height:250,viewBox:"0 0 160 265",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(O.jsx)("rect",{x:"0",y:"0",rx:"10",ry:"10",width:"155",height:"155"}),Object(O.jsx)("rect",{x:"0",y:"167",rx:"5",ry:"5",width:"155",height:"15"}),Object(O.jsx)("rect",{x:"0",y:"187",rx:"5",ry:"5",width:"100",height:"15"}),Object(O.jsx)("rect",{x:"0",y:"234",rx:"5",ry:"5",width:"80",height:"25"}),Object(O.jsx)("rect",{x:"124",y:"230",rx:"10",ry:"10",width:"35",height:"35"})]}):Object(O.jsxs)(O.Fragment,{children:[s&&Object(O.jsx)("div",{className:I.a.favorite,children:Object(O.jsx)("img",{onClick:function(){s(v),f(!h)},src:h?"/img/heart-liked.svg":"/img/heart-unliked.svg",alt:"Unliked"})}),Object(O.jsx)("img",{width:"100%",height:135,src:c,alt:"Sneakers"}),Object(O.jsx)("h5",{children:a}),Object(O.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(O.jsxs)("div",{className:"d-flex flex-column",children:[Object(O.jsx)("span",{children:"\u0426\u0435\u043d\u0430:"}),Object(O.jsxs)("b",{children:[n," \u0440\u0443\u0431."]})]}),i&&Object(O.jsx)("img",{className:"plus",onClick:function(){i(v)},src:u(t)?"/img/btn-checked.svg":"/img/btn-plus.svg",alt:"plus"})]})]})})};var A=function(e){var t=e.items,a=e.searchValue,c=e.setSearchValue,r=e.onChangeSearchInput,n=e.onAddToFavorites,s=e.onAddToCart,i=e.isLoading;return Object(O.jsxs)("div",{className:"content p-40",children:[Object(O.jsxs)("div",{className:"d-flex align-center mb-40 justify-between",children:[Object(O.jsx)("h1",{children:a?'\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443:"'.concat(a,'"'):"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438"}),Object(O.jsxs)("div",{className:"search-block d-flex",children:[Object(O.jsx)("img",{src:"/img/search.svg",alt:"Search"}),a&&Object(O.jsx)("img",{onClick:function(){return c("")},className:"clear removeBtn cu-p",src:"/img/btn-remove.svg",alt:"Clear"}),Object(O.jsx)("input",{onChange:r,value:a,type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a..."})]})]}),Object(O.jsx)("div",{className:"d-flex flex-wrap",children:function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())}));return(i?Object(o.a)(Array(8)):e).map((function(e,t){return Object(O.jsx)(S,Object(l.a)({onFavorite:function(e){return n(e)},onPlus:function(e){return s(e)},loading:i},e),t)}))}()})]})};var T=function(){var e=r.a.useContext(p),t=e.favorites,a=e.onAddToFavorites;return Object(O.jsxs)("div",{className:"content p-40",children:[Object(O.jsxs)("div",{className:"d-flex align-center mb-40",children:[Object(O.jsx)("img",{className:"cu-p",width:35,height:35,src:"/img/back-btn.svg",alt:""}),Object(O.jsx)("h1",{className:"ml-20",children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})]}),Object(O.jsx)("div",{className:"d-flex flex-wrap",children:t.map((function(e,t){return Object(O.jsx)(S,Object(l.a)({favorited:!0,onFavorite:a},e),t)}))})]})};var B=function(){var e=r.a.useState([]),t=Object(b.a)(e,2),a=t[0],c=t[1],n=r.a.useState(!0),s=Object(b.a)(n,2),i=s[0],d=s[1];return r.a.useEffect((function(){Object(u.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://6156e726e039a0001725ac90.mockapi.io/orders");case 3:t=e.sent,a=t.data,c(a.reduce((function(e,t){return[].concat(Object(o.a)(e),Object(o.a)(t.items))}),[])),d(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(O.jsxs)("div",{className:"content p-40",children:[Object(O.jsx)("div",{className:"d-flex align-center mb-40",children:Object(O.jsx)("h1",{className:"ml-20",children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"})}),Object(O.jsx)("div",{className:"d-flex flex-wrap",children:(i?Object(o.a)(Array(8)):a).map((function(e,t){return Object(O.jsx)(S,Object(l.a)({loading:i},e),t)}))})]})};var F=function(){var e=r.a.useState([]),t=Object(b.a)(e,2),a=t[0],c=t[1],n=r.a.useState([]),s=Object(b.a)(n,2),i=s[0],d=s[1],m=r.a.useState([]),f=Object(b.a)(m,2),v=f[0],g=f[1],N=r.a.useState(""),k=Object(b.a)(N,2),y=k[0],I=k[1],_=r.a.useState(!1),S=Object(b.a)(_,2),F=S[0],P=S[1],V=r.a.useState(!0),E=Object(b.a)(V,2),L=E[0],R=E[1];r.a.useEffect((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){var t,a,r,n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([x.a.get("https://6156e726e039a0001725ac90.mockapi.io/cart"),x.a.get("https://6156e726e039a0001725ac90.mockapi.io/favorites"),x.a.get("https://6156e726e039a0001725ac90.mockapi.io/items")]);case 3:t=e.sent,a=Object(b.a)(t,3),r=a[0],n=a[1],s=a[2],R(!1),d(r.data),g(n.data),c(s.data),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),alert(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var U=function(){var e=Object(u.a)(j.a.mark((function e(t){var a,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(a=i.find((function(e){return Number(e.parentId)===Number(t.id)})))){e.next=8;break}return d((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=6,x.a.delete("https://6156e726e039a0001725ac90.mockapi.io/cart/".concat(a.id));case 6:e.next=14;break;case 8:return d((function(e){return[].concat(Object(o.a)(e),[t])})),e.next=11,x.a.post("https://6156e726e039a0001725ac90.mockapi.io/cart",t);case 11:c=e.sent,r=c.data,d((function(e){return e.map((function(e){return e.parentId===r.parentId?Object(l.a)(Object(l.a)({},e),{},{id:r.id}):e}))}));case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443");case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(u.a)(j.a.mark((function e(t){var a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!v.find((function(e){return Number(e.id)===Number(t.id)}))){e.next=6;break}x.a.delete("https://6156e726e039a0001725ac90.mockapi.io/favorites/".concat(t.id)),g((function(e){return e.filter((function(e){return Number(e.id)!==Number(t.id)}))})),e.next=11;break;case 6:return e.next=8,x.a.post("https://6156e726e039a0001725ac90.mockapi.io/favorites",t);case 8:a=e.sent,c=a.data,g((function(e){return[].concat(Object(o.a)(e),[c])}));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0444\u0430\u0432\u043e\u0440\u0438\u0442\u044b");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)(p.Provider,{value:{items:a,cartItems:i,favorites:v,isItemAdded:function(e){return i.some((function(t){return Number(t.parentId)===Number(e)}))},onAddToFavorites:D,setCartOpened:P,setCartItems:d,onAddToCart:U},children:Object(O.jsxs)("div",{className:"wrapper clear",children:[Object(O.jsx)(w,{items:i,onClose:function(){return P(!1)},onRemove:function(e){try{x.a.delete("https://6156e726e039a0001725ac90.mockapi.io/cart/".concat(e)),d((function(t){return t.filter((function(t){return t.id!==e}))}))}catch(t){alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b")}},opened:F}),Object(O.jsx)(C,{onClickCart:function(){return P(!0)}}),Object(O.jsx)(h.a,{path:"/",exact:!0,children:Object(O.jsx)(A,{items:a,cartItems:i,searchValue:y,setSearchValue:I,onChangeSearchInput:function(e){I(e.target.value)},onAddToFavorites:D,onAddToCart:U,isLoading:L})}),Object(O.jsx)(h.a,{path:"/favorites",exact:!0,children:Object(O.jsx)(T,{})}),Object(O.jsx)(h.a,{path:"/orders",exact:!0,children:Object(O.jsx)(B,{})})]})})};s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(i.a,{children:Object(O.jsx)(F,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.5f0d9c74.chunk.js.map