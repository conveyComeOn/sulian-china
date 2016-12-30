
var app=getApp();
Page({
  data:{
  ineed:[true,false,false,false],

      day:0,
      month:0,
      twoday:0,
      twomonth:0,
      daynight:0,
    movie:[
      {
        name:"时尚大床房",
        minprice:500
      },
        {
        name:"牛逼双床房",
        minprice:400
      },
        {
        name:"崧泽马荣床",
        minprice:1000
      },
        {
        name: "就是得劲床",
        minprice:200
      },],
      fav:'star'
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载

  var twoday=app.data.twoday;
  var twomonth=app.data.twomonth;
  var day=app.data.day;
  var month=app.data.month;
  var daynight=app.data.daynight;
  this.setData({
    twoday:twoday,
    twomonth:twomonth,
    day:day,
    month:month,
    daynight:daynight

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
   
  },share:function(){
  this.onShareAppMessage();
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },call:function(){
    wx.makePhoneCall({
      phoneNumber: '123456',
      success: function(res) {
        // success
        console.log(res);
      }
    })
  },
  favEvent: function(e) {
   
    if (this.data.fav === 'star') {
      this.setData({
        fav:'like'
      });
      return;
    }

    this.setData({
      fav: 'star'
    });
  },cellclick:function(e){
    console.log();
    var array=[];
    for(var i=0;i<4;i++){

      if(i==e.currentTarget.dataset.id){
         array.push(true);
      }else{
         array.push(false);
      }
     
    }
    this.setData({
      ineed:array
    })
  },yuding:function(e){
    console.log(e);
    var price=e.target.dataset.id;
    var name=e.target.dataset.name;
    var succe=wx.getStorageSync('login');
    console.log(succe);
    if(succe){


      console.log('突然这是咋回事');
wx.navigateTo({
      url: `../dingdan/dingdan?price=${price}&&name=${name}`,
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
    }else{
wx.showModal({
  title: '您还未登录',
  content: '不登陆咋预定呢',
  success: function(res) {
    if (res.confirm) {
      wx.navigateTo({
      url: '../myorder/myorder',
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




     
    }
    
    

  }
})