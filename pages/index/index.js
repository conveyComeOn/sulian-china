//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },

  onLoad: function () {
   
  //   var that = this
  //   //调用应用实例的方法获取全局数据
  //   app.getUserInfo(function(userInfo){
  //     //更新数据
  //     that.setData({
  //       userInfo:userInfo
  //     })
  //   })
 },gethouse:function(){
 wx.navigateTo({
   url: '../logs/logs',
   success: function(res){
     // success
   },
   fail: function() {
     // fail
   },
   complete: function() {
     // complete
   }
 })
 },myorder:function(){
 wx.showToast({
  title: '您尚未登录',
 icon:'loading',
  duration: 1000,
 
});
setTimeout(function(){
 wx.navigateTo({
     url: '../myorder/myorder',
     success: function(res){
      
     },
     fail: function() {
       // fail
     },
     complete: function() {
       // complete
     }
   })
},1000);


  
 },getnearhotel:function(){

 wx.showToast({
  title: '定位成功',
 icon:'',
  duration: 1000,
 
});

   wx.navigateTo({
     url: '../hotel/hotel',
     success: function(res){
       // success
     },
     fail: function() {
       // fail
     },
     complete: function() {
       // complete
     }
   })
 }
 
})
