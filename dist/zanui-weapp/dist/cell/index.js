var webpackRequire=require("././../../../webpack-require");webpackRequire("./node_modules/zanui-weapp/dist/cell/index.js",{"./node_modules/zanui-weapp/dist/cell/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/zanui-weapp/dist/cell/index.js ***!
  \*****************************************************/
/*! no static exports found */function(t,e,i){"use strict";var a=function(t,e){console.warn(t)};function n(){var t=this.data.url,e=void 0===t?"":t,i=typeof this.data.isLink;this.data.isLink&&e&&"true"!==e&&"false"!==e&&("boolean"===i||"string"===i?-1!==["navigateTo","redirectTo","switchTab","reLaunch"].indexOf(this.data.linkType)?wx[this.data.linkType].call(wx,{url:e}):a("linkType 属性可选值为 navigateTo，redirectTo，switchTab，reLaunch",this.data.linkType):a("isLink 属性值必须是一个字符串或布尔值",this.data.isLink))}Component({externalClasses:["cell-class","title-class"],options:{multipleSlots:!0},relations:{"../cell-group/index":{type:"parent"}},properties:{title:{type:String,description:"左侧标题"},label:{type:String,description:"标题下方的描述信息"},value:{type:String,description:"右侧内容"},onlyTapFooter:{type:Boolean,description:"只有点击 footer 区域才触发 tab 事件"},isLink:{type:null,value:"",description:"是否展示右侧箭头并开启尝试以 url 跳转"},linkType:{type:String,value:"navigateTo",description:"链接类型，可选值为 navigateTo，redirectTo，switchTab，reLaunch"},url:{type:String,value:""},noBorder:Boolean},data:{isLastCell:!0,titleWidth:"auto"},methods:{footerTap:function(){this.data.onlyTapFooter&&(this.triggerEvent("tap",{}),n.call(this))},cellTap:function(){this.data.onlyTapFooter||(this.triggerEvent("tap",{}),n.call(this))},updateIsLastElement:function(t){this.setData({isLastCell:t})},setTitleWidth:function(t){this.setData({titleWidth:t+"px"})}}})}});