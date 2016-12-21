//logs.js
// var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    nighttime:1,
    reducecolor:"black"
  },
  onLoad: function () {
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
    
  }
})
