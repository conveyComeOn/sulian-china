


Page({
  data:{
    menuarr:[{
     currentpage:"0",
      text:"普通登陆"
    },{
      currentpage:"1",
 text:"手机动态码登录"
    }],
    currentMenuID:"0",
    pagenow:"0",
    apikey:"8a53b78c56541fb00156541fb0760000",
    telephone:"123",
    vcode:"123"
 
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
   
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载

  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作

  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
 
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },swmove:function(e){
  

this.setData({
  currentMenuID:e.detail.current
})
  },bindchange:function(e){
   
    
var current=e.target.id;


this.setData({
  pagenow:current
})
  },//获取电话号码
  getnum:function(e){
   
   
   this.setData({
     telephone:e.detail.value
   })
  },makesure:function(e){
    
    
    var vcode=e.detail.value;
    this.setData({
      vcode:vcode
    })

  },loadup:function(){
  
     var apikey=this.data.apikey;
     var telenum=this.data.telephone;
     var vcode=this.data.vcode;
wx.request({
  url:'http://mha.zx35.com/mhaapi/com/easy/api/act/MYSms/verify.act',
  data: {
    apikey:apikey,
mobile:telenum,
vcode:vcode
  },
  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  // header: {}, // 设置请求的 header
  success: function(res){
    // success
    console.log('正确了');
  },
  fail: function() {
    // fail
     cosonle.log('失败了');
  },
  complete: function() {
    // complete
  }
})
  },


  phoneDataChange:function(e){
   console.log(e);
  },//获取验证码
  getVerifyCode:function(){
    var apikey=this.data.apikey;
    var telenum=this.data.telephone;
wx.request({
  url: 'http://mha.zx35.com/mhaapi/com/easy/api/act/MYSms/send.act',
  data: {apikey:apikey,mobile:telenum},
  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  // header: {}, // 设置请求的 header
  success: function(res){
  console.log(res);
  },
  fail: function() {
    
  },
  complete: function() {
    
  }
})
  },zhuce:function(){
    wx.navigateTo({
      url: '../zhuce/zhuce',
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