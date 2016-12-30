

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
      phonenum:"110",
      quxiao:''
   
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
   var phonenum= wx.getStorageSync('phone');
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
  },addCount:function(){

  var that=this;
  var room=that.data.room;
  if(room>=3){
    console.log(room)
  wx.showModal({
  title: '提示',
  content: '一个客人最多定三间哦',
  success: function(res) {
    if (res.confirm) {
      console.log('用户点击确定')
    }
  }
})
  }else{
room++;
  }


   
   
that.setData({
  room:room
})
   
  },minusCount:function(){
      var that=this;
  var room=that.data.room;
  if(room==1){
  
 
  }else{
room--;
  }

that.setData({
  room:room
})
   
  },
  
  
  //获取电话号码
  getnum:function(e){
   
   
   this.setData({
    phonenum:e.detail.value
   })},getname:function(e){
       this.setData({
   hehe:e.detail.value
   })

   },toPay:function(){


     
var that=this;
var hehe=that.data.hehe;
var phonenum=that.data.phonenum;
var hehe=that.data.hehe;
if(hehe&&phonenum){


  wx.showModal({
  title: '请确认后所填信息',
  content: '确认预定吗',
  success: function(res) {
    if (res.confirm) {
     
//把住店日期 离店日期 住几晚 房间数 姓名 手机号全部记录在案
   var array= wx.getStorageSync('array');
   wx.setStorageSync('name', hehe);
if(!array){
  var array=[];
}
array.push(that.data);
wx.setStorageSync('array', array);

wx.redirectTo({
  url: '../success/success',
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
  }
})
}else{
  wx.showModal({
  title: '提示',
  content: '名字和电话都要填哦',
  success: function(res) {
    if (res.confirm) {
     
    }
  }
})
}



   }
})