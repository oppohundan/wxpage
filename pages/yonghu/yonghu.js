Page({
  data: {
    name: '安然月月',
    time: '28分钟',
    where: '摩尔庄园',
    money: '999',
    day: '天'
  },
  lianxi: function(){  // 通过but点击事件触发后面的函数
    wx.showToast({
      title: "联系成功",
      icon: 'none',
      duration: 600     
    })  
  }
})