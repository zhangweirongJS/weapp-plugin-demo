var webpackRequire=require("././../../../webpack-require");webpackRequire("./src/packages/cart/cart/index.js",{"./src/packages/cart/cart/index.js":
/*!*****************************************!*\
  !*** ./src/packages/cart/cart/index.js ***!
  \*****************************************/
/*! no static exports found */function(a,d){Page({data:{openId:"",appId:"",shopId:""},onLoad:function(a){this.setData({openId:a.openId,appId:a.appId,shopId:a.shopId})},goBuy:function(a){var d=a.detail.bookKey,o=this.data,p=o.openId,e=o.appId,n=o.shopId;wx.navigateTo({url:"plugin://yzTradePlugin/buy?bookKey="+d+"&openId="+p+"&appId="+e+"&shopId="+n})},goGoodsDetail:function(a){var d=a.detail.goodsId,o=this.data,p=o.openId,e=o.appId,n=o.shopId;wx.navigateTo({url:"plugin://yzTradePlugin/goods-detail?goodsId="+d+"&openId="+p+"&appId="+e+"&shopId="+n})}})}});