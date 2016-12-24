


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
    pagenow:"0"
 
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
  }
})