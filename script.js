const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? '關閉選單' : '開啟選單');
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const ripeness = {
  green: {
    stage: 'DAY 01 — 02',
    title: '青綠蕉・清爽出發',
    description: '微青的蕉，口感扎實、甜度清淡。適合切片入沙拉，搭配優格和堅果，當早餐剛剛好。',
    recipe: '蕉香優格燕麥碗',
    tip: '放在室溫通風處，讓好滋味慢慢長出來。',
    icon: '🍌',
  },
  yellow: {
    stage: 'DAY 03 — 05',
    title: '金黃蕉・香甜正好',
    description: '果皮轉成漂亮金黃，香氣與甜度最平衡。剝開直接吃，就是旗山蕉最經典的香甜 Q 彈。',
    recipe: '冰心鮮奶蕉昔',
    tip: '和蘋果分開放，熟成速度會更從容。',
    icon: '🍌',
  },
  spotty: {
    stage: 'DAY 06 — 08',
    title: '點點蕉・熟甜濃郁',
    description: '褐色小斑點是熟成的香甜記號。風味更濃、口感更軟，做成鬆餅或香蕉蛋糕最合拍。',
    recipe: '焦香煎蕉鬆餅',
    tip: '熟度正好吃不完？剝皮冷凍，打成果昔超方便。',
    icon: '🍌',
  },
};

document.querySelectorAll('.ripeness-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.ripeness-tab').forEach((item) => {
      item.classList.remove('active');
      item.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    const guide = ripeness[tab.dataset.stage];
    document.querySelector('.guide-stage').textContent = guide.stage;
    document.querySelector('.guide-title').textContent = guide.title;
    document.querySelector('.guide-description').textContent = guide.description;
    document.querySelector('.guide-recipe').textContent = guide.recipe;
    document.querySelector('.guide-tip-text').textContent = guide.tip;
    document.querySelector('.banana-art').textContent = guide.icon;
  });
});

document.querySelector('#inquiry-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = form.get('name').trim();
  const email = form.get('email').trim();
  const type = form.get('type');
  const message = form.get('message').trim();
  const subject = encodeURIComponent(`旗山蕉合作詢問｜${type}｜${name}`);
  const body = encodeURIComponent(`稱呼／公司：${name}\n回覆信箱：${email}\n合作類型：${type}\n\n需求說明：\n${message}`);
  document.querySelector('.form-message').textContent = '已為你準備好詢價內容，請在郵件程式中確認並寄出。';
  window.location.href = `mailto:hello@jiao-friend.tw?subject=${subject}&body=${body}`;
});
