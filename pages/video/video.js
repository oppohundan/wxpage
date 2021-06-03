// pages/video/video.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: '获取用户名字',
    zuopin: '作品名字',
    like: 123,
    collection: 456,
    share: 789,
    talks: [],
    touchStart: 0,
    inputValue: '',
    inputBiaoqing: '',
    faces: ['https://p5.ssl.qhimgs1.com/sdr/400__/t01340dabd29dc60935.jpg'],
    names: ['aa', 'bb', 'cccc', 'ddd'],
    cfBg: false
  },
  dianji: function(){  // 通过but点击事件触发后面的函数
    wx.showToast({
      title: "已关注",
      icon: 'none',
      duration: 600     
    })  
  },
  xihuan: function(){  // 通过but点击事件触发后面的函数
    wx.showToast({
      title: "已喜欢",
      icon: 'none',
      duration: 600     
    })  
  },
  shoucang: function(){  // 通过but点击事件触发后面的函数
    wx.showToast({
      title: "已收藏",
      icon: 'none',
      duration: 600     
    })  
  },
  fenxiang: function(){  // 通过but点击事件触发后面的函数
    wx.showToast({
      title: "已分享",
      icon: 'none',
      duration: 600     
    })  
  },
  onReady: function() {
    // 评论弹出层动画创建
    this.animation = wx.createAnimation({
      duration: 400, // 整个动画过程花费的时间，单位为毫秒
      timingFunction: "ease", // 动画的类型
      delay: 0 // 动画延迟参数
    })
  },
  showTalks: function() {
    // 加载数据
    this.loadTalks();
    // 设置动画内容为：使用绝对定位显示区域，高度变为100%
    this.animation.bottom("0rpx").height("100%").step()
    this.setData({
    talksAnimationData: this.animation.export()
    })
  },
  touchMove: function(e) {
    // console.log(this.data.touchStart)
    let touchLength = e.touches[0].clientY - this.data.touchStart;
    console.log(touchLength - 100)
    if (touchLength > 100) {
      this.animation.bottom("-100%").height("0rpx").step()
      this.setData({
      talks: [],
      talksAnimationData: this.animation.export(),
      })
    }
  },
  //输入框失去焦点时触发
  bindInputBlur: function(e) {
    console.log(e)
    console.log(this.data.inputBiaoqing)
    this.data.inputValue = e.detail.value + this.data.inputBiaoqing;
  },
  //点击发布，发布评论
  faBu: function() {
    let that = this;
    this.data.talks.unshift({
      avatarUrl: this.data.faces[Math.floor(Math.random() * this.data.faces.length)],
      nickName: this.data.names[Math.floor(Math.random() * this.data.names.length)],
      content: this.data.inputValue,
      talkTime: '2089-6-39'
    })
    that.data.inputValue = '';
    that.setData({
      talks: that.data.talks,
      inputValue: that.data.inputValue,
      talksAnimationData: that.animation.export()
    }) 
  }
})