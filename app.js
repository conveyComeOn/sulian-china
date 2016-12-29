//app.js
App(
{
  onLaunch: function () {
    
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    //同步存入缓存 前面是key 后面是value
    wx.setStorageSync('logs', logs)
   
  },
  getUserInfo:function(cb){
    var that = this
   
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
   
    }else{
  
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              
              that.globalData.userInfo = res.userInfo
           typeof cb == "function" && cb(that.globalData.userInfo)
            
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  },data:{
    day:0,
    month:0,
    twoday:0,
    twomonth:0,
    daynight:0
  }
})