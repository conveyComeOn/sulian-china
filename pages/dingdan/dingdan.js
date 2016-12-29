

var app=getApp();
Page({
  data:{
      name:"234",
      price:100,
        day:0,
      month:0,
      twoday:0,
      twomonth:0,
      daynight:0,
      room:1,
      plus:"+",
      hehe:"近平",
      phonenum:"110"
   
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
   
     var price=options.price;
     var name=options.name;

  var twoday=app.data.twoday;
  var twomonth=app.data.twomonth;
  var day=app.data.day;
  var month=app.data.month;
  var daynight=app.data.daynight;
   var hehe = wx.getStorageSync('name') ;
   var phonenum= wx.getStorageSync('phonenum');
   if(hehe || phonenum){
     this.setData({
    
    hehe:hehe,
    phonenum:phonenum

  })
   
   }
  this.setData({
    twoday:twoday,
    twomonth:twomonth,
    day:day,
    month:month,
    daynight:daynight,
    name:name,
    price:price

  })
   
  
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
  },plus:function(){
    var that=this;

if(this.data.plus=="-"){
  var room=this.data.room-1;
  if(room<2){
      that.setData({
          plus:"+"

     })
  }
}else{

  var room=  this.data.room+1;
  if(room>3){

    wx.showModal({
      title: '提示',
      content: '一个客人最多定三间哦',
      success: function(res) {
       if (res.confirm) {
          that.setData({
          plus:"-"

     })
        }
      }
    })
    return;
  }
}




this.setData({
  room:room
})
  }
})