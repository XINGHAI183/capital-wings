const { birdList } = require('../../data/birds/birds.js');

Page({
  data: {
    isLoading: true,
    hasLoaded: false,
    filterMode: 'pinyin',
    showDetail: false,
    closing: false,
    selectedBirdIndex: 0,
    birdList
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
        selected: 1
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
  },
  onFilterTap(e) {
    const mode = e.currentTarget.dataset.mode;
    if (mode && mode !== this.data.filterMode) {
      this.setData({
        filterMode: mode
      });
    }
  },
  onEcosystemArrowTap() {
    // TODO: 跳转到生态区详情页
  },
  onBirdCardTap(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      selectedBirdIndex: index,
      showDetail: true
    });
  },
  onCloseDetail() {
    if (this.data.closing) return;
    this.setData({
      closing: true
    });
    setTimeout(() => {
      this.setData({
        showDetail: false,
        closing: false
      });
    }, 350);
  },
  onModalContentTap() {
    // 阻止点击弹窗内容时冒泡关闭
  },
  preventTouchMove() {
    // 阻止弹窗上的滑动事件穿透到下方页面
  }
})
