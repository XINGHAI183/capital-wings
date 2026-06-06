Page({
  data: {
    isLoading: true,
    hasLoaded: false,
    mapData: {
      longitude: 116.397463,
      latitude: 39.909187,
      scale: 10,
      markers: [
        {
          id: 0,
          latitude: 40.570467,
          longitude: 117.109259,
          title: '小漕村',
          width: 30,
          height: 40
        },
        {
          id: 1,
          latitude: 40.512542,
          longitude: 117.148444,
          title: '朱家湾及周边',
          width: 30,
          height: 40
        },
        {
          id: 2,
          latitude: 40.413557,
          longitude: 115.846995,
          title: '野鸭湖国家湿地公园',
          width: 30,
          height: 40
        },
        {
          id: 3,
          latitude: 40.317684,
          longitude: 117.100552,
          title: '西峪水库',
          width: 30,
          height: 40
        },
        {
          id: 4,
          latitude: 40.309519,
          longitude: 116.593035,
          title: '怀柔水库',
          width: 30,
          height: 40
        },
        {
          id: 5,
          latitude: 40.180524,
          longitude: 116.69273,
          title: '奥林匹克水上公园附近潮白河段',
          width: 30,
          height: 40
        },
        {
          id: 6,
          latitude: 40.137431,
          longitude: 116.303621,
          title: '沙河水库',
          width: 30,
          height: 40
        },
        {
          id: 7,
          latitude: 40.075917,
          longitude: 116.485512,
          title: '北京温榆河公园',
          width: 30,
          height: 40
        },
        {
          id: 8,
          latitude: 40.069842,
          longitude: 115.726468,
          title: '沿河城',
          width: 30,
          height: 40
        },
        {
          id: 9,
          latitude: 40.06355,
          longitude: 116.026452,
          title: '妙峰山自然风景区',
          width: 30,
          height: 40
        },
        {
          id: 10,
          latitude: 40.031959,
          longitude: 115.460534,
          title: '东灵山',
          width: 30,
          height: 40
        },
        {
          id: 11,
          latitude: 40.018635,
          longitude: 116.392159,
          title: '奥林匹克森林公园',
          width: 30,
          height: 40
        },
        {
          id: 12,
          latitude: 40.006519,
          longitude: 116.300831,
          title: '圆明园遗址公园',
          width: 30,
          height: 40
        },
        {
          id: 13,
          latitude: 39.999617,
          longitude: 116.275179,
          title: '颐和园',
          width: 30,
          height: 40
        },
        {
          id: 14,
          latitude: 39.998036,
          longitude: 116.210714,
          title: '国家植物园',
          width: 30,
          height: 40
        },
        {
          id: 15,
          latitude: 39.942105,
          longitude: 116.336701,
          title: '北京动物园',
          width: 30,
          height: 40
        },
        {
          id: 16,
          latitude: 39.928775,
          longitude: 116.391802,
          title: '北海公园',
          width: 30,
          height: 40
        },
        {
          id: 17,
          latitude: 39.91662,
          longitude: 116.319932,
          title: '玉渊潭公园',
          width: 30,
          height: 40
        },
        {
          id: 18,
          latitude: 39.887482,
          longitude: 116.182536,
          title: '永定河休闲公园',
          width: 30,
          height: 40
        },
        {
          id: 19,
          latitude: 39.881913,
          longitude: 116.410829,
          title: '天坛公园',
          width: 30,
          height: 40
        },
        {
          id: 20,
          latitude: 39.876323,
          longitude: 116.742353,
          title: '大运河森林公园',
          width: 30,
          height: 40
        },
        {
          id: 21,
          latitude: 39.840147,
          longitude: 116.225572,
          title: '宛平湖绿堤公园',
          width: 30,
          height: 40
        },
        {
          id: 22,
          latitude: 39.824549,
          longitude: 116.221514,
          title: '大宁水库及乐活中堤',
          width: 30,
          height: 40
        },
        {
          id: 23,
          latitude: 39.777746,
          longitude: 116.464223,
          title: '南海子公园',
          width: 30,
          height: 40
        },
        {
          id: 24,
          latitude: 39.638382,
          longitude: 115.59971,
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
