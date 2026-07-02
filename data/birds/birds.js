// 共享鸟类图鉴数据
const birdList = [
  {
    id: 0,
    name: '白头鹎',
    sciName: 'Pycnonotus sinensis',
    image: '/assets/birds/guide/baitoubei.jpg',
    features: [
      '体长17~22cm，体重26~43g。雌雄羽色相似，白色枕环从眼睛后部延伸到颈背，是该物种的显著特征。白头鹎头顶、喙黑色，颏、喉部白色，颊、耳羽、颧纹黑褐色，耳羽后有白色斑块，上体灰褐色，下体灰白色，翅缘为黄绿色，胸部灰色，臀部白色，跗蹠、爪深褐色，翅尾深褐色；幼鸟头部为橄榄色，胸部有灰色斑纹。'
    ],
    tags: ['玉渊潭', '南苑']
  },
  {
    id: 1,
    name: '大麻鳽',
    sciName: 'Botaurus stellaris',
    image: '/assets/birds/guide/damajian.jpg',
    features: ['全身麻褐色，头黑褐色，主要栖息于水域附近的沼泽草丛、芦苇丛中。'],
    tags: ['南苑', '奥森']
  },
  {
    id: 2,
    name: '鹪鹩',
    sciName: 'Troglodytes troglodytes',
    image: '/assets/birds/guide/jiaoliao.jpg',
    features: ['鹪鹩属（学名：Troglodytes）是雀形目鹪鹩科下一属，共有9种。中国有1种。体短小，体长约100毫米。嘴长适中，稍弯曲，先端无缺刻；鼻孔部分或全部被有鼻膜；翅短圆；尾短小，尾羽12枚，尾较狭窄而柔软；跗蹠前缘具盾状鳞。体羽棕或呈褐色，具众多的黑褐色横斑及部分浅色点斑。'],
    tags: ['玉渊潭', '奥森']
  },
  {
    id: 3,
    name: '三道眉草鹀',
    sciName: 'Emberiza cioides',
    image: '/assets/birds/guide/sandaomeicaowu.jpg',
    features: ['体型较大，体长15-18厘米，具醒目的黑白色头部图纹和栗色的胸带，头顶及枕深栗红色，羽缘淡黄色；眼先及下部各有一条黑纹；耳羽深栗色；眉纹白色；上体余部栗红色，向后渐淡，各羽缘以土黄色，而下体和尾上覆羽纯色；中央一对尾羽栗红色而具黑褐色羽干纹，其余尾羽黑褐色。'],
    tags: ['奥森', '天坛']
  }
];

// 首页“为你推荐”默认取第一只鸟，与图鉴数据互通
function getDailyBird() {
  return birdList[0];
}

module.exports = {
  birdList,
  getDailyBird
};
