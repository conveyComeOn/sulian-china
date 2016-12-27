

Page({
  data:{
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
  }
})