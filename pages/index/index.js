//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userId: '',
    userName: '',
    userClass: ''
  },
  userNameInput: function(e){
    this.setData({userName: e.detail.value});
  },
  userIdInput: function(e){
    this.setData({userId: e.detail.value});
  },
  userClassInput: function(e){
    this.setData({userClass: e.detail.value});
  },
  submitBtnClick: function(){
    console.log('学号:' + this.data.userId + ' 姓名:' + this.data.userName +                   ' 班级:' + this.data.userClass); 
    wx.request({
      url: 'http://localhost:8090/submit',
      data: {
        'userId': this.data.userId,
        'userName': this.data.userName,
        'userClass': this.data.userClass,
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if(res.statusCode===200){
          if(res.data.code==200){
            console.log(res.data.content)

          }else{
            wx.showToast({
              title: res.data.content,
              icon:"none"
            })
          }
        }
      }
    })
  },
  resetBtnClick: function(){
    this.setData({
      userId: '',
      userName: '',
      userClass: ''
    })
  }
})
