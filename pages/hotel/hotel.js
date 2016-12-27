//movice.js
//先获取实例

Page({
  data:{
    movie:[],
    lastid:0,
    num:"nimabi",
    morehidden:true,
    apikey:"8a53b78c56541fb00156541fb0760000"

   
  },
  loadmore:function(offset){
    var limit=10;
    var that=this;
var apikey=that.data.apikey;
var openid="openid";
   wx.request({

url:'https://k.zx35.com/mhaapi/com/easy/api/act/codeItem.act/MYHome/getHomeEstateByUser.act',
    //url:'https://k.zx35.com/mhaapi/com/easy/api/act/MYHome/getHomeEstateByUser.act',

 //  url: 'http://mha.zx35.com/mhaapi/com/easy/api/act/MYHome/getHomeEstateByUser.act',
      // url: 'http://m.maoyan.com/movie/list.json?type=hot',


       
      data: {apikey:apikey,openid:openid},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
     
        var mdata=res.data.rtData;
        
        // var oldArr=that.data.movie;

        // var newArr=oldArr.concat(mdata)
        // var len=newArr.length;
        // that.setData({lastid: newArr.length})
       
         that.setData({movie:mdata})

      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
       

      }
    })
  },
  onLoad:function(options){
    var that=this;
    // 页面初始化 options为页面跳转所带来的参数
    this.loadmore(0);


   
  },
  onReady:function(){
    // 页面渲染完成
   
  },
  onShow:function(){
    // 页面显示
  
  },
  onHide:function(){
    // 页面隐藏
    
  },
  onUnload:function(){
    // 页面关闭
  
  },
  showmore:function(event){
    var that=this;
    var num=that.data.lastid;
    
    //草拟吗
    //取 page 中的data 里的数据 要使用 this.data.lastid
  
 
  
    
    wx.showModal({
      title: '提示',
      content: '只有这么多了',
      success: function(res) {
        if (res.confirm) {
          that.setData({
          morehidden:false

     })
        }
      }
    })
   
  
  },
  cellclick:function(e){

  }
 
})

 