webpackJsonp([6],{"9n10":function(t,n){},AMzZ:function(t,n){},Drwf:function(t,n){},M6Sr:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("KQ6f"),o={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var c=e("C7Lr")({name:"App"},o,!1,function(t){e("i3Ab")},null,null).exports,r=e("KGCO");a.a.use(r.a);var i,u=new r.a({routes:[{path:"/",name:"Home",component:function(t){return Promise.all([e.e(0),e.e(1)]).then(function(){var n=[e("wXUp")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/detail/:id",name:"Detail",component:function(t){return Promise.all([e.e(0),e.e(3)]).then(function(){var n=[e("G9XZ")];t.apply(null,n)}.bind(this)).catch(e.oe)},children:[{path:"food",name:"DetailFood",component:function(t){return Promise.all([e.e(0),e.e(4)]).then(function(){var n=[e("bg+8")];t.apply(null,n)}.bind(this)).catch(e.oe)}}]},{path:"/city",name:"City",component:function(t){return Promise.all([e.e(0),e.e(2)]).then(function(){var n=[e("KTAJ")];t.apply(null,n)}.bind(this)).catch(e.oe)}}]}),s=e("R4Sj"),l={cartCount:function(t){var n=t.cart,e=0;for(var a in n)e+=n[a].count;return e},totalPrice:function(t){var n=t.cart,e=0;for(var a in n)e+=n[a].count*n[a].price;return Number(e)},payDesc:function(t){var n=t.cart,e=0;for(var a in n)e+=n[a].count*n[a].price;return e>=20?"去结算":"还差￥"+(20-e)+"起送"}},p=e("a3Yh"),f=e.n(p),d={namespaced:!0,state:{cart:{}},mutations:(i={},f()(i,"INCREASE_GOODS_TO_CART",function(t,n){if(t.cart[n.gid]){var e=t.cart[n.gid].count;e++,a.a.set(t.cart[n.gid],"count",e)}else a.a.set(t.cart,n.gid,n),a.a.set(t.cart[n.gid],"count",1)}),f()(i,"DECREASE_GOODS_FROM_CART",function(t,n){n.count--,0===n.count&&a.a.delete(t.cart,n.gid)}),i),actions:{increase_goods_to_cart:function(t,n){(0,t.commit)("INCREASE_GOODS_TO_CART",n)},decrease_goods_from_cart:function(t,n){(0,t.commit)("DECREASE_GOODS_FROM_CART",n)}},getters:l};if(window.localStorage)var m=localStorage.getItem("city")||"广州";var _={namespaced:!0,state:{city:m},mutations:f()({},"CHANGE_CITY",function(t,n){t.city=n,localStorage.setItem("city",n)}),actions:{},getters:{}};a.a.use(s.a);var g=new s.a.Store({modules:{cart:d,city:_}}),h=e("DMPO"),v=e.n(h),A=(e("Drwf"),e("RKxg"),e("aozt")),S=e.n(A),y=e("zdS3"),O=e.n(y);e("9n10"),e("AMzZ"),e("M6Sr");a.a.config.productionTip=!1,a.a.use(v.a),S.a.defaults.baseURL="https://www.easy-mock.com/mock/5ce16c9c9b642668ade4596f/example",a.a.prototype.$axios=S.a,a.a.use(O.a,{preload:1.3,loading:"./assets/img/t.jpg"}),new a.a({el:"#app",router:u,store:g,components:{App:c},template:"<App/>"})},RKxg:function(t,n){},i3Ab:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.53d164ebea6d6e435eb5.js.map