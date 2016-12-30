

Page({
  data:{
     items: [
      {name: '1', value: '女'},
      {name: '2', value: '男', checked: 'true'},
      {name: '0', value: '未知'},
  
    ],
    noworno:"true",
    telephone:"",
    vcode:"",
    psw:"",
    noname:"false",
    apikey:'8a53b78c56541fb00156541fb0760000',
    ma:'获取验证码',
    back:0,
    name:''
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
  },//获取电话号码
  getnum:function(e){
   
   
   this.setData({
     telephone:e.detail.value
   })},makesure:function(e){
    
    
    var vcode=e.detail.value;
    this.setData({
      vcode:vcode
    })

  },
  radioChange:function(e){
    console.log(e);
  },//获取验证码
  getVerifyCode:function(){
    var that=this;
     if(that.data.back>0) {return};
    var apikey=this.data.apikey;
    var telenum=this.data.telephone;
     if(!telenum){
return;
    } 
wx.request({

url:'https://wxapi.hotapp.cn/proxy/?appkey=hotapp11377340&url=http://k.zx35.com/mhaapi/com/easy/api/act/MYSms/send.act',
 // url: 'http://mha.zx35.com/mhaapi/com/easy/api/act/MYSms/send.act',
  data: {apikey:apikey,mobile:telenum},
  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  // header: {}, // 设置请求的 header
  success: function(res){
  console.log(res,'success');

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
    console.log('fail');
  },
  complete: function() {
    
  }
})
  },myname:function(e){
   var that=this;
      var apikey=this.data.apikey;
     var telenum=this.data.telephone;
     var vcode=this.data.vcode;
     var name=e.detail.value;
     that.setData({
       name:name
     })
    if(vcode&&telenum){
    
wx.request({
  url:'https://wxapi.hotapp.cn/proxy/?appkey=hotapp11377340&url=http://k.zx35.com/mhaapi/com/easy/api/act/MYSms/verify.act',
 // url:'http://mha.zx35.com/mhaapi/com/easy/api/act/MYSms/verify.act',
  data: {
    apikey:apikey,
mobile:telenum,
vcode:2323
  },
  method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  // header: {}, // 设置请求的 header
  success: function(res){
    // success
    console.log('正确了');

    that.setData({
        noworno:false
     })
  },
  fail: function() {
    // fail
     cosonle.log('失败了');
     that.setData({
       noname:true
     })
  },
  complete: function() {
    // complete
  }
})
    }
  },
  
  
  //获取到密码
  getpsw:function(e){
var psw=e.detail.value;
    this.setData({
      psw:psw
    })

        
    

   


  },zhuce:function(){
 var apikey=this.data.apikey;
     var telenum=this.data.telephone;
     var psw=this.data.psw;
     var name=this.data.name;
     console.log(name);


     if(telenum&&psw){
   wx.request({

    //  https://k.zx35.com/mhaapi/com/easy/api/act/MYRegister/reg.act?passwd=123456&&mobile=15617736121&&apikey=8a53b78c56541fb00156541fb0760000&&openid:open
//    url:'https://mha.zx35.com/mhaapi/com/easy/api/act/MYRegister/reg.act?',

  url:'https://wxapi.hotapp.cn/proxy/?appkey=hotapp11377340&url=http://k.zx35.com/mhaapi/com/easy/api/act/MYRegister/reg.act?', 
 //  url:'http://mha.zx35.com/mhaapi/com/easy/api/act/MYRegister/reg.act?',
     
      data: {mobile:telenum,apikey:'8a53b78c56541fb00156541fb0760000',openid:'ope'},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {passwd:psw}, // 设置请求的 header
      success: function(res){
        console.log(res);
       var success=true;
  wx.setStorageSync('login', success);
    wx.setStorageSync('phone',telenum);
    wx.setStorageSync('name',name);

        // success
  wx.showToast({
  title: '注册成功啦',

 icon:'',
  duration: 1000,
 
});

  setTimeout(function(){
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
  },1000);
      },
      fail: function(fail) {
        // fail
         console.log(fail);
      },
      complete: function() {
        // complete
      }
    })
      }
 
    
     }
})