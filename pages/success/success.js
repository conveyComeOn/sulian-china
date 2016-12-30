
Page({
  data:{
   time:""
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    var that=this;
   var zong=12;
  var timer= setInterval(function(){
    zong--;
    if(zong<=0){
      clearInterval(timer);
    //  that.backhome();


    }
    if(zong<10){
       var time="00:00:0"+zong;
    }else{
 var time="00:00:"+zong;
    }
   
 that.setData({
   time:time
 })

   },1000);
 
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
  },backhome:function(){
    wx.redirectTo({
        url: '../index/index',
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
  },checkout:function(){
  
    wx.redirectTo({
        url: '../pao/pao',
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