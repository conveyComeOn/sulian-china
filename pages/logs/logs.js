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
    now:1,
    twomonth:1,
    twoday:1,
    year:2016,

    allday:['日','一','二','三','四','五','六']
    

  },
  onLoad: function (e) {

    var that=this;

 var date=new Date;
   var year=date.getFullYear();
    var month=date.getMonth();
   var today=date.getDate();
   var day=date.getDay();//星期几
 
    
    
   that.gettommer(day,1);
   
 
     month++;
     if(month>12){
      month=1;
      year++;
     
    }
//本月共多少天
 var monthDay = new Date(year,month,0).getDate();
 that.gettwo(monthDay,month,today);

//  var mingtian=today+1;
//  console.log(monthDay);
// var mingyue=month;
// if (mingtian>monthDay) {
// 	console.log("-----");
//  	mingtian=1;
//  	mingyue=month+1;
//  	 if(mingyue>12){
//  	 	console.log(mingyue);
//       mingyue=1;
//     }
 	
//  };
//  that.setData({
//  		twoday:mingtian,
//  		twomonth:mingyue
//  	})

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

        var date=new Date();
    	 var year=date.getFullYear();
    var month=date.getMonth();
    // var day=date.getDate();

     month++;
 
     if(month>12){
      month=1;
      year++;
     
    }
    if(app.data.month){
 	month=app.data.month;
 }


//本月共多少天
 var monthDay = new Date(year,month,0).getDate();
 

    	//被点击入住的日期
   var today=app.data.day;
   that.gettwo(monthDay,month,today);
   ///一星期的数组
   var allday=that.data.allday;
   //
   //2 31 5 2016
   var firstDay = new Date(year,month-1,today).getDay();
 
   console.log(month);
    that.gettommer(firstDay,1);
   console.log(month);
        that.setData({
     today:today,
     day:allday[firstDay],
      nighttime:1,
      month:month,
      year:year
      // now:firstDay
   })
  }

  

  },
  
  
  bindreduce:function(){
  	var that=this;
    if(that.data.nighttime>1){
that.data.nighttime--;
if(that.data.nighttime==1){
  that.setData({
    reducecolor:"grey"
  })
}


    var date=new Date();
 var year=that.data.year
    var num=that.data.nighttime;
    that.gettommer(this.data.now,-1);
  
    var move=that.data.twoday-1;
       var twomonth=that.data.twomonth;
        if (move<=0) {
       	move=monthDay;
        twomonth--;
       	if (twomonth<=0) {
       		year--;
       		twomonth=12
       	};


       };
       
       var monthDay = new Date(year,twomonth,0).getDate();
      

    that.setData({
        nighttime:this.data.nighttime,
         twoday:move,
        twomonth:twomonth,
        year:year
    })
    } 

  },bindplus:function(){

var that=this;
    var date=new Date();

    that.data.nighttime++;
    var num=this.data.nighttime;
    //6 1 4

    that.gettommer(that.data.now,1);
       var move=that.data.twoday+1;
       var twomonth=that.data.twomonth;
       var year=that.data.year
       var monthDay = new Date(year,twomonth,0).getDate();
       if (move>=monthDay) {
       	move=1;
      twomonth++;
       	if (twomonth>=12) {
       		twomonth=1
       		year++;
       	};


       };
  that.setData({
        twoday:move,
        twomonth:twomonth,
        year:year
        
  })

if(that.data.nighttime>0){
that.setData({
      reducecolor:"black",
        nighttime:that.data.nighttime
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
    if (tormmer<0) {
    	tormmer=6
    };
    

    
   tormmer=Math.abs(tormmer)%7;
var allday=that.data.allday;
 
      that.setData({
      now:tormmer,
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
  },gettwo:function(monthDay,month,today){
  	var that=this;
var mingtian=today+1;

var mingyue=month;
if (mingtian>monthDay) {
	
 	mingtian=1;
 	mingyue=month+1;
 	 if(mingyue>12){
      mingyue=1;
    }
 	
 };
 that.setData({
 		twoday:mingtian,
 		twomonth:mingyue
 	})

  }
})
