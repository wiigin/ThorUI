Page({
  data: {
    list: [{
        id: 'map',
        name: '地图',
        open: false,
        pages: [{
          name: "拖拽定位",
          page: "location"
        }, {
          name: "周边兴趣点",
          page: "maps"
        }, {
          name: "地址解析",
          page: "longlat"
        }, {
          name: "天气",
          page: "weather"
        }]
      },
      {
        id: 'form',
        name: '索引列表',
        open: false,
        pages: [{
          name: "城市选择",
          page: "selectCity"
        }, {
          name: "索引列表",
          page: "indexList"
        }]
      },
      {
        id: 'nav',
        name: '三级联动',
        open: false,
        pages: [{
          name: "picker三级联动",
          page: "picker"
        }, {
          name: "picker-view三级联动",
          page: "picker-view"
        }]
      },
      {
        id: 'canvas',
        name: '二维码生成',
        open: false,
        pages: [{
          name: "二维码生成",
          page: "qrcode"
        }]
      },
      {
        id: 'drawer',
        name: 'drawer抽屉',
        open: false,
        pages: [{
          name: "drawer抽屉",
          page: "drawer"
        }]
      },
      {
        id: 'swipe',
        name: '滑动菜单',
        open: false,
        pages: [{
          name: "滑动菜单",
          page: "swipe-action"
        }]
      },
      {
        id: 'class',
        name: '分类菜单',
        open: false,
        pages: [{
            name: "顶部选项卡",
            page: "navbar-1"
          },
          {
            name: "垂直导航",
            page: "navbar-2"
          }
        ]
      },
      {
        id: 'refresh',
        name: '上拉加载下拉刷新',
        open: false,
        pages: [{
          name: "新闻列表",
          page: "news"
        }, {
          name: "商品列表",
          page: "product"
        }]
      },
      {
        id: 'play',
        name: '其他',
        open: false,
        pages: [{
          name: "基础组件",
          page: "basic"
        }, {
          name: "消息通知",
          page: "basic"
        }, {
          name: "吸顶容器",
          page: "sticky"
        }, {
          name: "抽奖转盘",
          page: "luckdraw"
        }, {
          name: "数字键盘",
          page: "keyboard"
        }]
      }
    ]
  },
  kindToggle: function(e) {
    var id = e.currentTarget.id,
      list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },
  emit(city) {
    setTimeout(() => {
      wx.showToast({
        title: "您选择了：" + city,
        icon: "none"
      })
    }, 350)
  }
});