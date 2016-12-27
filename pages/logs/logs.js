//logs.js
// var util = require('../../utils/util.js')
var app=getApp();
Page({
  data: {
    logs: [],
    nighttime:1,
    reducecolor:"black",
    address:"正在定位",
    month:1,
    today:1,
    day:1,
    tormmer:1, 
    allday:['日','一','二','三','四','五','六']
    

  },
  onLoad: function (e) {

    var that=this;

 var date=new Date;
   var year=date.getFullYear();
   var today=date.getDate();
   var day=date.getDay();//星期几
 
     var month=date.getMonth();
    
   that.gettommer(day,1);
    
     
     month++;
     if(month>12){
      month=1;
      year++;
     
    }
    var allday=that.data.allday;
  
   that.setData({
     month:month,
     today:today,
      day:allday[day],
     

   })


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
  },onShow:function(){
    var that=this;
  
    if(app.data.day){ 
   var today=app.data.day;
        that.setData({
     today:today
   })
  }

  

  },
  
  
  bindreduce:function(){
    if(this.data.nighttime>0){
this.data.nighttime--;
if(this.data.nighttime==0){
  this.setData({
    reducecolor:"grey"
  })


}
 var date=new Date();
 
    var num=this.data.nighttime;
    this.gettommer(date.getDay(),num);
  
    this.setData({
        nighttime:this.data.nighttime
    })
    } 

  },bindplus:function(){


    var date=new Date();
    this.data.nighttime++
    var num=this.data.nighttime;
    this.gettommer(date.getDay(),num);



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
  },gettommer:function(day,num){

var that=this;
    var tormmer=day+num;
       
     
   tormmer=tormmer%7;
var allday=that.data.allday;
      that.setData({
    
      tormmer:allday[tormmer]

   })

 
   
  },mynear:function(){
    wx.navigateTo({
      url: '../hotel/hotel',
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
