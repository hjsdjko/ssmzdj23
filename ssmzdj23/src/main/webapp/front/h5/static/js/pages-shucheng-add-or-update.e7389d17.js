(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shucheng-add-or-update"],{"0637":function(e,r,t){var i=t("24fb");r=i(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-2638b303]{padding:%?20?%}.content[data-v-2638b303]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-2638b303]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-2638b303]{width:%?180?%}.avator[data-v-2638b303]{width:%?150?%;height:%?60?%}.right-input[data-v-2638b303]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-2638b303]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-2638b303]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-2638b303]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-2638b303]{border:0}.cu-form-group uni-input[data-v-2638b303]{padding:0 %?30?%}.uni-input[data-v-2638b303]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-2638b303]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-2638b303]::after{line-height:%?88?%}.select .uni-input[data-v-2638b303]{line-height:%?88?%}.input .right-input[data-v-2638b303]{line-height:%?88?%}',""]),e.exports=r},"28ed":function(e,r,t){"use strict";var i=t("8ce2"),o=t.n(i);o.a},"4adc":function(e,r,t){"use strict";t.r(r);var i=t("e7e3"),o=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(r,e,(function(){return i[e]}))}(a);r["default"]=o.a},"6bc9":function(e,r,t){"use strict";var i={"w-picker":t("e2b1").default},o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 020rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[e._v("小说编号")]),t("v-uni-view",{staticClass:"right-input",style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.xiaoshuobianhao))])],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 020rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[e._v("小说名称")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.xiaoshuomingcheng,placeholder:"小说名称"},model:{value:e.ruleForm.xiaoshuomingcheng,callback:function(r){e.$set(e.ruleForm,"xiaoshuomingcheng",r)},expression:"ruleForm.xiaoshuomingcheng"}})],1),t("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[e._v("小说分类")]),t("v-uni-picker",{attrs:{value:e.xiaoshuofenleiIndex,range:e.xiaoshuofenleiOptions},on:{change:function(r){arguments[0]=r=e.$handleEvent(r),e.xiaoshuofenleiChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.xiaoshuofenlei?e.ruleForm.xiaoshuofenlei:"请选择小说分类"))])],1)],1),t("v-uni-view",{staticClass:"cu-form-group",class:"left"==e.left?"":"active",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.tupianfengmianTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[e._v("图片封面")]),t("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[e.ruleForm.tupianfengmian?t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:e.ruleForm.tupianfengmian,mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 020rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[e._v("作者")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.zuozhe,placeholder:"作者"},model:{value:e.ruleForm.zuozhe,callback:function(r){e.$set(e.ruleForm,"zuozhe",r)},expression:"ruleForm.zuozhe"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 020rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[e._v("出版社")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.chubanshe,placeholder:"出版社"},model:{value:e.ruleForm.chubanshe,callback:function(r){e.$set(e.ruleForm,"chubanshe",r)},expression:"ruleForm.chubanshe"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 020rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[e._v("总章节")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.zongzhangjie,placeholder:"总章节"},model:{value:e.ruleForm.zongzhangjie,callback:function(r){e.$set(e.ruleForm,"zongzhangjie",r)},expression:"ruleForm.zongzhangjie"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 020rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[e._v("字数")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.zishu,placeholder:"字数"},model:{value:e.ruleForm.zishu,callback:function(r){e.$set(e.ruleForm,"zishu",r)},expression:"ruleForm.zishu"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 020rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[e._v("价格")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.jiage,placeholder:"价格"},model:{value:e.ruleForm.jiage,callback:function(r){e.$set(e.ruleForm,"jiage",r)},expression:"ruleForm.jiage"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"308rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(255, 153, 0, 1)",textAlign:"left"}},[e._v("介绍")]),t("v-uni-textarea",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(255, 153, 0, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"300rpx"},attrs:{placeholder:"介绍"},model:{value:e.ruleForm.jieshao,callback:function(r){e.$set(e.ruleForm,"jieshao",r)},expression:"ruleForm.jieshao"}})],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"rgba(255, 153, 0, 1)",borderColor:"rgba(255, 255, 0, 1)",borderRadius:"8rpx",color:"rgba(255, 255, 255, 1)",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),t("w-picker",{ref:"clicktime",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(r){arguments[0]=r=e.$handleEvent(r),e.clicktimeConfirm.apply(void 0,arguments)}}})],1)},a=[];t.d(r,"b",(function(){return o})),t.d(r,"c",(function(){return a})),t.d(r,"a",(function(){return i}))},7404:function(e,r,t){"use strict";t.r(r);var i=t("6bc9"),o=t("4adc");for(var a in o)"default"!==a&&function(e){t.d(r,e,(function(){return o[e]}))}(a);t("28ed");var n,s=t("f0c5"),u=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"2638b303",null,!1,i["a"],n);r["default"]=u.exports},"8ce2":function(e,r,t){var i=t("0637");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=t("4f06").default;o("10ede7ae",i,!0,{sourceMap:!1,shadowMode:!1})},e7e3:function(e,r,t){"use strict";var i=t("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,t("ac6a"),t("96cf");var o=i(t("3b8d")),a=i(t("e2b1")),n={data:function(){return{ruleForm:{xiaoshuobianhao:this.getUUID(),xiaoshuomingcheng:"",xiaoshuofenlei:"",tupianfengmian:"",zuozhe:"",chubanshe:"",zongzhangjie:"",zishu:"",jieshao:"",jiage:"",clicktime:"",clicknum:""},xiaoshuofenleiOptions:[],xiaoshuofenleiIndex:0,user:{},ro:{xiaoshuobianhao:!1,xiaoshuomingcheng:!1,xiaoshuofenlei:!1,tupianfengmian:!1,zuozhe:!1,chubanshe:!1,zongzhangjie:!1,zishu:!1,jieshao:!1,jiage:!1,clicktime:!1,clicknum:!1}}},components:{wPicker:a.default},computed:{},onLoad:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(r){var t,i,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(t);case 3:return i=e.sent,this.user=i.data,e.next=7,this.$api.option("xiaoshuofenlei","xiaoshuofenlei",{});case 7:if(i=e.sent,this.xiaoshuofenleiOptions=i.data,this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){e.next=17;break}return this.ruleForm.id=r.id,e.next=15,this.$api.info("shucheng",this.ruleForm.id);case 15:i=e.sent,this.ruleForm=i.data;case 17:if(!r.cross){e.next=72;break}o=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(o);case 20:if((e.t1=e.t0()).done){e.next=72;break}if(a=e.t1.value,"xiaoshuobianhao"!=a){e.next=26;break}return this.ruleForm.xiaoshuobianhao=o[a],this.ro.xiaoshuobianhao=!0,e.abrupt("continue",20);case 26:if("xiaoshuomingcheng"!=a){e.next=30;break}return this.ruleForm.xiaoshuomingcheng=o[a],this.ro.xiaoshuomingcheng=!0,e.abrupt("continue",20);case 30:if("xiaoshuofenlei"!=a){e.next=34;break}return this.ruleForm.xiaoshuofenlei=o[a],this.ro.xiaoshuofenlei=!0,e.abrupt("continue",20);case 34:if("tupianfengmian"!=a){e.next=38;break}return this.ruleForm.tupianfengmian=o[a],this.ro.tupianfengmian=!0,e.abrupt("continue",20);case 38:if("zuozhe"!=a){e.next=42;break}return this.ruleForm.zuozhe=o[a],this.ro.zuozhe=!0,e.abrupt("continue",20);case 42:if("chubanshe"!=a){e.next=46;break}return this.ruleForm.chubanshe=o[a],this.ro.chubanshe=!0,e.abrupt("continue",20);case 46:if("zongzhangjie"!=a){e.next=50;break}return this.ruleForm.zongzhangjie=o[a],this.ro.zongzhangjie=!0,e.abrupt("continue",20);case 50:if("zishu"!=a){e.next=54;break}return this.ruleForm.zishu=o[a],this.ro.zishu=!0,e.abrupt("continue",20);case 54:if("jieshao"!=a){e.next=58;break}return this.ruleForm.jieshao=o[a],this.ro.jieshao=!0,e.abrupt("continue",20);case 58:if("jiage"!=a){e.next=62;break}return this.ruleForm.jiage=o[a],this.ro.jiage=!0,e.abrupt("continue",20);case 62:if("clicktime"!=a){e.next=66;break}return this.ruleForm.clicktime=o[a],this.ro.clicktime=!0,e.abrupt("continue",20);case 66:if("clicknum"!=a){e.next=70;break}return this.ruleForm.clicknum=o[a],this.ro.clicknum=!0,e.abrupt("continue",20);case 70:e.next=20;break;case 72:this.styleChange();case 73:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},xiaoshuofenleiChange:function(e){this.xiaoshuofenleiIndex=e.target.value,this.ruleForm.xiaoshuofenlei=this.xiaoshuofenleiOptions[this.xiaoshuofenleiIndex]},tupianfengmianTap:function(){var e=this;this.$api.upload((function(r){e.ruleForm.tupianfengmian=e.$base.url+"upload/"+r.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,o.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.xiaoshuomingcheng){e.next=3;break}return this.$utils.msg("小说名称不能为空"),e.abrupt("return");case 3:if(!this.ruleForm.zishu||this.$validate.isIntNumer(this.ruleForm.zishu)){e.next=6;break}return this.$utils.msg("字数应输入整数"),e.abrupt("return");case 6:if(!this.ruleForm.jiage||this.$validate.isIntNumer(this.ruleForm.jiage)){e.next=9;break}return this.$utils.msg("价格应输入整数"),e.abrupt("return");case 9:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){e.next=12;break}return this.$utils.msg("点击次数应输入整数"),e.abrupt("return");case 12:if(!this.ruleForm.id){e.next=17;break}return e.next=15,this.$api.update("shucheng",this.ruleForm);case 15:e.next=19;break;case 17:return e.next=19,this.$api.add("shucheng",this.ruleForm);case 19:this.$utils.msgBack("提交成功");case 20:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,t=r.getFullYear(),i=r.getMonth()+1,o=r.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,o=o>9?o:"0"+o,"".concat(t,"-").concat(i,"-").concat(o)},toggleTab:function(e){this.$refs[e].show()}}};r.default=n}}]);