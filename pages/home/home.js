Page({
  data: {
    isLoading: true,
    hasLoaded: false,
    mapData: {
      longitude: 116.4074,
      latitude: 39.9042,
      scale: 10,
      markers: [
        {
          id: 0,
          latitude: 40.62,
          longitude: 116.85,
          title: '小漕村',
          width: 30,
          height: 40
        },
        {
          id: 1,
          latitude: 40.55,
          longitude: 116.80,
          title: '朱家湾及周边',
          width: 30,
          height: 40
        },
        {
          id: 2,
          latitude: 40.4711,
          longitude: 115.8467,
          title: '野鸭湖国家湿地公园',
          width: 30,
          height: 40
        },
        {
          id: 3,
          latitude: 40.2583,
          longitude: 117.1133,
          title: '西峪水库',
          width: 30,
          height: 40
        },
        {
          id: 4,
          latitude: 40.3100,
          longitude: 116.6322,
          title: '怀柔水库',
          width: 30,
          height: 40
        },
        {
          id: 5,
          latitude: 40.0303,
          longitude: 116.7044,
          title: '奥林匹克水上公园附近潮白河段',
          width: 30,
          height: 40
        },
        {
          id: 6,
          latitude: 40.1058,
          longitude: 116.2983,
          title: '沙河水库',
          width: 30,
          height: 40
        },
        {
          id: 7,
          latitude: 40.0233,
          longitude: 115.6367,
          title: '沿河城',
          width: 30,
          height: 40
        },
        {
          id: 8,
          latitude: 40.0439,
          longitude: 116.6911,
          title: '北京温榆河公园',
          width: 30,
          height: 40
        },
        {
          id: 9,
          latitude: 39.9689,
          longitude: 116.0714,
          title: '妙峰山自然风景区',
          width: 30,
          height: 40
        },
        {
          id: 10,
          latitude: 40.0167,
          longitude: 115.4333,
          title: '东灵山',
          width: 30,
          height: 40
        },
        {
          id: 11,
          latitude: 40.0061,
          longitude: 116.3917,
          title: '奥林匹克森林公园',
          width: 30,
          height: 40
        },
        {
          id: 12,
          latitude: 39.9997,
          longitude: 116.2981,
          title: '圆明园遗址公园',
          width: 30,
          height: 40
        },
        {
          id: 13,
          latitude: 39.9947,
          longitude: 116.2069,
          title: '国家植物园',
          width: 30,
          height: 40
        },
        {
          id: 14,
          latitude: 39.9997,
          longitude: 116.2750,
          title: '颐和园',
          width: 30,
          height: 40
        },
        {
          id: 15,
          latitude: 39.9419,
          longitude: 116.3383,
          title: '北京动物园',
          width: 30,
          height: 40
        },
        {
          id: 16,
          latitude: 39.9242,
          longitude: 116.3872,
          title: '北海公园',
          width: 30,
          height: 40
        },
        {
          id: 17,
          latitude: 39.9106,
          longitude: 116.3194,
          title: '玉渊潭公园',
          width: 30,
          height: 40
        },
        {
          id: 18,
          latitude: 39.9128,
          longitude: 116.1783,
          title: '永定河休闲公园',
          width: 30,
          height: 40
        },
        {
          id: 19,
          latitude: 39.8845,
          longitude: 116.4106,
          title: '天坛公园',
          width: 30,
          height: 40
        },
        {
          id: 20,
          latitude: 39.9131,
          longitude: 116.7531,
          title: '大运河森林公园',
          width: 30,
          height: 40
        },
        {
          id: 21,
          latitude: 39.8394,
          longitude: 116.2119,
          title: '宛平湖绿堤公园',
          width: 30,
          height: 40
        },
        {
          id: 22,
          latitude: 39.8419,
          longitude: 116.1283,
          title: '大宁水库及乐活中堤',
          width: 30,
          height: 40
        },
        {
          id: 23,
          latitude: 39.7561,
          longitude: 116.4711,
          title: '南海子公园',
          width: 30,
          height: 40
        },
        {
          id: 24,
          latitude: 39.6467,
          longitude: 115.5850,
          title: '拒马河十渡',
          width: 30,
          height: 40
        }
      ]
    }
  },
  onLoad() {
    // 如果是首次加载，显示加载动画
    if (!this.data.hasLoaded) {
      setTimeout(() => {
        this.setData({
          isLoading: false,
          hasLoaded: true
        });
      }, 800); // 模拟加载过程，实际项目中可以替换成真实的数据加载逻辑
    } else {
      this.setData({
        isLoading: false
      });
    }
  },
  onShow() {
    // 只有在未加载过的情况下，再次进入页面才显示加载动画
    if (!this.data.hasLoaded) {
      this.setData({
        isLoading: true
      });
      setTimeout(() => {
        this.setData({
          isLoading: false,
          hasLoaded: true
        });
      }, 800);
    }
    
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      });
      this.getTabBar().updateNavigationBar();
    }
  },
  onTabItemTap() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().updateNavigationBar();
    }
  },
  reload() {
    // 重新设置导航栏以响应主题变化
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().updateNavigationBar();
    }
    
    // 重新应用页面数据以确保样式正确更新
    this.setData({
      isLoading: true
    });
    
    // 延迟一段时间以确保主题切换系统完成
    const that = this;
    setTimeout(() => {
      // 重新设置当前页面数据以触发视图更新，确保CSS主题生效
      that.setData({
        ...that.data,
        isLoading: false
      });
    }, 600); // 稍长的延时以确保主题切换完成
  }
})
