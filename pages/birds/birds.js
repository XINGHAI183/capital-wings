Page({
  data: {
    isLoading: true,
    hasLoaded: false,
    filterMode: 'pinyin',
    showDetail: false,
    closing: false,
    selectedBirdIndex: 0,
    birdList: [
      {
        name: '白头鹎',
        sciName: 'Pycnonotus sinensis',
        image: '/assets/birds/guide/baitoubei.jpg',
        features: ['体长17~22cm，体重26~43g。雌雄羽色相似，白色枕环从眼睛后部延伸到颈背，是该物种的显著特征。白头鹎头顶、喙黑色，颏、喉部白色，颊、耳羽、颧纹黑褐色，耳羽后有白色斑块，上体灰褐色，下体灰白色，翅缘为黄绿色，胸部灰色，臀部白色，跗蹠、爪深褐色，翅尾深褐色；幼鸟头部为橄榄色，胸部有灰色斑纹。'],
        tags: ['标签1', '标签2']
      },
      {
        name: '大麻鳽',
        sciName: 'Botaurus stellaris',
        image: '/assets/birds/guide/damajian.jpg',
        features: ['XXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX'],
        tags: ['标签1', '标签2']
      },
      {
        name: '鹪鹩',
        sciName: 'Troglodytes troglodytes',
        image: '/assets/birds/guide/jiaoliao.jpg',
        features: ['XXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX'],
        tags: ['标签1', '标签2']
      },
      {
        name: '三道眉草鹀',
        sciName: 'Emberiza cioides',
        image: '/assets/birds/guide/sandaomeicaowu.jpg',
        features: ['XXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX'],
        tags: ['标签1', '标签2']
      }
    ]
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
