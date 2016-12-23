//logs.js
// var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    nighttime:1,
    reducecolor:"black",
    address:"正在定位",
  },
  onLoad: function () {
    var that=this;
wx.getLocation({
  type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
  success: function(res){
    // success
    var latitude=res.latitude;
    var longitude=res.longitude;
  

    if(wx.getStorageSync('longitude')==longitude||wx.getStorageSync('latitude')==latitude){
      that.setData({
      
      address:wx.getStorageSync('address'),
    })
return;
    } 
else{
  that.reverseloca();
}
   
  },
  fail: function() {
    // fail
  },
  complete: function() {
    // complete
  }
})



    this.setData({
      // logs: (wx.getStorageSync('logs') || []).map(function (log) {
      //   return util.formatTime(new Date(log))
      // })


    })
  },bindreduce:function(){
    if(this.data.nighttime>0){
this.data.nighttime--;
if(this.data.nighttime==0){
  this.setData({
    reducecolor:"grey"
  })

}

    this.setData({
        nighttime:this.data.nighttime
    })
    } 
 
  },bindplus:function(){
this.data.nighttime++;
if(this.data.nighttime>0){
this.setData({
      reducecolor:"black",
        nighttime:this.data.nighttime
    })
}
    
  },reverseloca:function(){
    var that=this;
    wx.chooseLocation({
  success: function(res){

      wx.setStorageSync('latitude', res.latitude);
      wx.setStorageSync('longitude',res.longitude);
        wx.setStorageSync('address',res.name);
    that.setData({
      
      address:res.name,
  
      
    })
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
