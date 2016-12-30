
var md = require('../../utils/md5.js')

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
    pagenow:"0",
    apikey:"8a53b78c56541fb00156541fb0760000",
    telephone:"",
    vcode:"123",
     ma:'获取验证码',
     back:0,
     password:123456
 
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
  },//获取电话号码
  getnum:function(e){
   
   
   this.setData({
     telephone:e.detail.value
   })
  },makesure:function(e){
    
    
    var vcode=e.detail.value;
    this.setData({
      vcode:vcode
    })

  },loadup:function(){
  
     var apikey=this.data.apikey;
     var telenum=this.data.telephone;
     var vcode=this.data.vcode;
wx.request({

//url:'https://wxapi.hotapp.cn/proxy/?appkey=hotapp11377340&url=https://k.zx35.com/mhaapi/com/easy/api/act/MYSms/verify.act',


url:'https://wxapi.hotapp.cn/proxy/?appkey=hotapp11377340&&url=http://mha.zx35.com/mhaapi/com/easy/api/act/MYSms/verify.act',
  data: {
    apikey:apikey,
mobile:telenum,
vcode:2323
  },
  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  // header: {}, // 设置请求的 header
  success: function(res){
    // success
    console.log(res);


  var success=true;
  wx.setStorageSync('login', success);
    wx.setStorageSync('phone',telenum);
  //  wx.setStorageSync('name',name);
wx.navigateBack({
  delta: 3, // 回退前 delta(默认为1) 页面
  success: function(res){
    
      // success
    wx.navigateTo({
      url: '../logs/logs',
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
  },
  fail: function() {
    // fail
  },
  complete: function() {
    // complete
  }
})



  },
  fail: function(res) {
    // fail
     console.log(res);
  },
  complete: function() {
    // complete
  }
})
  },


  phoneDataChange:function(e){
   this.setData({
     telephone:e.detail.value
   })
  
  },getpasd:function(e){
     
   this.setData({
     password:e.detail.value
   })

  },
  //登录
  loadin:function(){
    
 var apikey=this.data.apikey;
    var telenum=this.data.telephone;
    var password=this.data.password;

   var passwd=md.hex_md5(password);
   console.log(telenum,password);
    if(telenum && password){


     wx.request({

//url:'https://k.zx35.com/mhaapi/com/easy/api/act/MYRegister/loginmv.act?',
url:'https://wxapi.hotapp.cn/proxy/?appkey=hotapp11377340&url=http://k.zx35.com/mhaapi/com/easy/api/act/MYRegister/loginms.act?',




    data: {apikey:apikey,mobile:telenum,passwd:passwd},

  // data: {apikey:apikey,mobile:telenum,vcode:2323},

       method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
       // header: {}, // 设置请求的 header
       success: function(res){
         // success
         console.log(res);
    //      console.log(res,'success');
          if(res.data.rtState==0){
            
                    var success=true;
  wx.setStorageSync('login', success);
    wx.setStorageSync('phone',telenum);
       wx.navigateBack({
      delta: 3, // 回退前 delta(默认为1) 页面
      success: function(res){
        // success
        
    wx.navigateTo({
      url: '../logs/logs',
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
      },
      fail: function(res) {
        // fail
      
      },
      complete: function() {
        // complete
      }
    })
          }else{
            wx.showModal({
  title: '提示',
  content: '账号或密码错误',
 
})
          }
       
       
       },
       fail: function(res) {
         // fail
           console.log(res,'fail');
       },
       complete: function() {
         // complete
       }
     })
    }
  },
  
  
  
  
   //获取验证码
  getVerifyCode:function(){

    var that=this;
    if(that.data.back>0){
 return;
    }
    var apikey=that.data.apikey;
    var telenum=that.data.telephone;
    if(!telenum || !that.isMobilePhone(telenum)){
      
      wx.showToast({
  title: '这就不是个电话',
  icon: 'loading',
  duration: 1000
})
return;
    } 

  

wx.request({

//url=https://k.zx35.com/mhaapi/com/easy/api/act/MYSms/send.act'
url:'https://wxapi.hotapp.cn/proxy/?appkey=hotapp11377340&&url=http://mha.zx35.com/mhaapi/com/easy/api/act/MYSms/send.act?',
 // url: 'http://mha.zx35.com/mhaapi/com/easy/api/act/MYSms/send.act',
  data: {apikey:apikey,mobile:telenum},
 

  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  // header: {}, // 设置请求的 header
  success: function(res){
  console.log(res);


  
var num=60;
 var time= setInterval(function(){
num--;

var hehe=num+'秒后重发';
that.setData({
  ma:hehe,
  back:num
})
if(num<=0){
  clearInterval(time);
 
  that.setData({
  ma:'重新获取'
})
}
   },1000);






  },
  fail: function() {
    
  },
  complete: function() {
    
  }
})
  },zhuce:function(){
    wx.navigateTo({
      url: '../zhuce/zhuce',
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
  },// 判断是否为手机号
isMobilePhone:function(phone) {
    // your implement


    var re=/^([0-9]{11})|(13[56][0-9]{8})$/;
    if (re.test(phone)) return true;
    else {
      
        return false;
    }
}
})