(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-xiaoshuozixun-add-or-update"],{"36e2":function(t,e,r){"use strict";var i=r("cb98"),n=r.n(i);n.a},3814:function(t,e,r){"use strict";var i=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("ac6a"),r("96cf");var n=i(r("3b8d")),a=i(r("e2b1")),o={data:function(){return{ruleForm:{biaoti:"",fengmian:"",zixunlaiyuan:"",fabushijian:"",neirong:"",clicknum:""},user:{},ro:{biaoti:!1,fengmian:!1,zixunlaiyuan:!1,fabushijian:!1,neirong:!1,clicknum:!1}}},components:{wPicker:a.default},computed:{},onLoad:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(e){var r,i,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=uni.getStorageSync("nowTable"),t.next=3,this.$api.session(r);case 3:if(i=t.sent,this.user=i.data,this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){t.next=13;break}return this.ruleForm.id=e.id,t.next=11,this.$api.info("xiaoshuozixun",this.ruleForm.id);case 11:i=t.sent,this.ruleForm=i.data;case 13:if(!e.cross){t.next=44;break}n=uni.getStorageSync("crossObj"),t.t0=regeneratorRuntime.keys(n);case 16:if((t.t1=t.t0()).done){t.next=44;break}if(a=t.t1.value,"biaoti"!=a){t.next=22;break}return this.ruleForm.biaoti=n[a],this.ro.biaoti=!0,t.abrupt("continue",16);case 22:if("fengmian"!=a){t.next=26;break}return this.ruleForm.fengmian=n[a],this.ro.fengmian=!0,t.abrupt("continue",16);case 26:if("zixunlaiyuan"!=a){t.next=30;break}return this.ruleForm.zixunlaiyuan=n[a],this.ro.zixunlaiyuan=!0,t.abrupt("continue",16);case 30:if("fabushijian"!=a){t.next=34;break}return this.ruleForm.fabushijian=n[a],this.ro.fabushijian=!0,t.abrupt("continue",16);case 34:if("neirong"!=a){t.next=38;break}return this.ruleForm.neirong=n[a],this.ro.neirong=!0,t.abrupt("continue",16);case 38:if("clicknum"!=a){t.next=42;break}return this.ruleForm.clicknum=n[a],this.ro.clicknum=!0,t.abrupt("continue",16);case 42:t.next=16;break;case 44:this.styleChange();case 45:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},fabushijianChange:function(t){this.ruleForm.fabushijian=t.target.value,this.$forceUpdate()},fengmianTap:function(){var t=this;this.$api.upload((function(e){t.ruleForm.fengmian=t.$base.url+"upload/"+e.file,t.$forceUpdate(),t.$nextTick((function(){t.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.biaoti){t.next=3;break}return this.$utils.msg("标题不能为空"),t.abrupt("return");case 3:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){t.next=6;break}return this.$utils.msg("点击次数应输入整数"),t.abrupt("return");case 6:if(!this.ruleForm.id){t.next=11;break}return t.next=9,this.$api.update("xiaoshuozixun",this.ruleForm);case 9:t.next=13;break;case 11:return t.next=13,this.$api.add("xiaoshuozixun",this.ruleForm);case 13:this.$utils.msgBack("提交成功");case 14:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),optionsChange:function(t){this.index=t.target.value},bindDateChange:function(t){this.date=t.target.value},getDate:function(t){var e=new Date,r=e.getFullYear(),i=e.getMonth()+1,n=e.getDate();return"start"===t?r-=60:"end"===t&&(r+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(r,"-").concat(i,"-").concat(n)},toggleTab:function(t){this.$refs[t].show()}}};e.default=o},a061:function(t,e,r){"use strict";var i,n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"content"},[r("v-uni-form",{staticClass:"app-update-pv"},[r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 020rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[t._v("标题")]),r("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:t.ro.biaoti,placeholder:"标题"},model:{value:t.ruleForm.biaoti,callback:function(e){t.$set(t.ruleForm,"biaoti",e)},expression:"ruleForm.biaoti"}})],1),r("v-uni-view",{staticClass:"cu-form-group",class:"left"==t.left?"":"active",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.fengmianTap.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[t._v("封面")]),r("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[t.ruleForm.fengmian?r("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:t.ruleForm.fengmian,mode:"aspectFill"}}):r("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 020rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[t._v("资讯来源")]),r("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:t.ro.zixunlaiyuan,placeholder:"资讯来源"},model:{value:t.ruleForm.zixunlaiyuan,callback:function(e){t.$set(t.ruleForm,"zixunlaiyuan",e)},expression:"ruleForm.zixunlaiyuan"}})],1),r("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[t._v("发布时间")]),r("v-uni-picker",{attrs:{mode:"date",value:t.ruleForm.fabushijian},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.fabushijianChange.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[t._v(t._s(t.ruleForm.fabushijian?t.ruleForm.fabushijian:"请选择发布时间"))])],1)],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"308rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[t._v("内容")]),r("v-uni-textarea",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"300rpx"},attrs:{placeholder:"内容"},model:{value:t.ruleForm.neirong,callback:function(e){t.$set(t.ruleForm,"neirong",e)},expression:"ruleForm.neirong"}})],1),r("v-uni-view",{staticClass:"btn"},[r("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"rgba(255, 153, 0, 1)",borderColor:"rgba(255, 255, 0, 1)",borderRadius:"8rpx",color:"rgba(255, 255, 255, 1)",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onSubmitTap.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)],1)},a=[];r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return a})),r.d(e,"a",(function(){return i}))},c0b5:function(t,e,r){"use strict";r.r(e);var i=r("3814"),n=r.n(i);for(var a in i)"default"!==a&&function(t){r.d(e,t,(function(){return i[t]}))}(a);e["default"]=n.a},cb98:function(t,e,r){var i=r("de62");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=r("4f06").default;n("3a4fc32c",i,!0,{sourceMap:!1,shadowMode:!1})},de62:function(t,e,r){var i=r("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-db01f166]{padding:%?20?%}.content[data-v-db01f166]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-db01f166]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-db01f166]{width:%?180?%}.avator[data-v-db01f166]{width:%?150?%;height:%?60?%}.right-input[data-v-db01f166]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-db01f166]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-db01f166]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-db01f166]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-db01f166]{border:0}.cu-form-group uni-input[data-v-db01f166]{padding:0 %?30?%}.uni-input[data-v-db01f166]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-db01f166]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-db01f166]::after{line-height:%?88?%}.select .uni-input[data-v-db01f166]{line-height:%?88?%}.input .right-input[data-v-db01f166]{line-height:%?88?%}',""]),t.exports=e},e2f6:function(t,e,r){"use strict";r.r(e);var i=r("a061"),n=r("c0b5");for(var a in n)"default"!==a&&function(t){r.d(e,t,(function(){return n[t]}))}(a);r("36e2");var o,u=r("f0c5"),s=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"db01f166",null,!1,i["a"],o);e["default"]=s.exports}}]);