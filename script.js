// List of audio files and labels
const audioList = [
    { file: '了.m4a', label: '了' },
    { file: '我.m4a', label: '我' },
    { file: '我们.m4a', label: '我们' },
    { file: '你.m4a', label: '你' },
    { file: '你们.m4a', label: '你们' },
    { file: '他她.m4a', label: '他她' },
    { file: '这.m4a', label: '这' },
    { file: '哪.m4a', label: '哪' },
    { file: '那.m4a', label: '那' },
    { file: '谁.m4a', label: '谁' },
    { file: '什么.m4a', label: '什么' },
    { file: '多少.m4a', label: '多少' },
    { file: '几.m4a', label: '几' },
    { file: '怎么.m4a', label: '怎么' },
    { file: '怎么样.m4a', label: '怎么样' },
    { file: '一.m4a', label: '一' },
    { file: '二.m4a', label: '二' },
    { file: '三.m4a', label: '三' },
    { file: '四.m4a', label: '四' },
    { file: '五.m4a', label: '五' },
    { file: '六.m4a', label: '六' },
    { file: '七.m4a', label: '七' },
    { file: '八.m4a', label: '八' },
    { file: '九.m4a', label: '九' },
    { file: '十.m4a', label: '十' },
    { file: '零.m4a', label: '零' },
    { file: '个.m4a', label: '个' },
    { file: '岁.m4a', label: '岁' },
    { file: '本.m4a', label: '本' },
    { file: '些.m4a', label: '些' },
    { file: '快.m4a', label: '快' },
    { file: '不.m4a', label: '不' },
    { file: '没.m4a', label: '没' },
    { file: '很.m4a', label: '很' },
    { file: '太.m4a', label: '太' },
    { file: '都.m4a', label: '都' },
    { file: '和.m4a', label: '和' },
    { file: '在.m4a', label: '在' },
    { file: '的.m4a', label: '的' },
    { file: '吗.m4a', label: '吗' },
    { file: '呢.m4a', label: '呢' },
    { file: '喂.m4a', label: '喂' },
    { file: '家.m4a', label: '家' },
    { file: '学校.m4a', label: '学校' },
    { file: '饭店.m4a', label: '饭店' },
    { file: '商店.m4a', label: '商店' },
    { file: '医院.m4a', label: '医院' },
    { file: '火车站.m4a', label: '火车站' },
    { file: '中国.m4a', label: '中国' },
    { file: '北京.m4a', label: '北京' },
    { file: '上.m4a', label: '上' },
    { file: '下.m4a', label: '下' },
    { file: '前面.m4a', label: '前面' },
    { file: '后面.m4a', label: '后面' },
    { file: '里面.m4a', label: '里面' },
    { file: '今天.m4a', label: '今天' },
    { file: '明天.m4a', label: '明天' },
    { file: '昨天.m4a', label: '昨天' },
    { file: '上午.m4a', label: '上午' },
    { file: '中午.m4a', label: '中午' },
    { file: '下午.m4a', label: '下午' },
    { file: '年.m4a', label: '年' },
    { file: '月.m4a', label: '月' },
    { file: '日.m4a', label: '日' },
    { file: '星期.m4a', label: '星期' },
    { file: '点.m4a', label: '点' },
    { file: '分钟.m4a', label: '分钟' },
    { file: '现在.m4a', label: '现在' },
    { file: '时候.m4a', label: '时候' },
    { file: '爸爸.m4a', label: '爸爸' },
    { file: '妈妈.m4a', label: '妈妈' },
    { file: '儿子.m4a', label: '儿子' },
    { file: '女儿.m4a', label: '女儿' },
    { file: '老师.m4a', label: '老师' },
    { file: '学生.m4a', label: '学生' },
    { file: '同学.m4a', label: '同学' },
    { file: '朋友.m4a', label: '朋友' },
    { file: '医生.m4a', label: '医生' },
    { file: '先生.m4a', label: '先生' },
    { file: '小姐.m4a', label: '小姐' },
    { file: '衣服.m4a', label: '衣服' },
    { file: '水.m4a', label: '水' },
    { file: '菜.m4a', label: '菜' },
    { file: '米饭.m4a', label: '米饭' },
    { file: '水果.m4a', label: '水果' },
    { file: '苹果.m4a', label: '苹果' },
    { file: '茶.m4a', label: '茶' },
    { file: '杯子.m4a', label: '杯子' },
    { file: '钱.m4a', label: '钱' },
    { file: '飞机.m4a', label: '飞机' },
    { file: '出租车.m4a', label: '出租车' },
    { file: '电视.m4a', label: '电视' },
    { file: '电脑.m4a', label: '电脑' },
    { file: '电影.m4a', label: '电影' },
    { file: '天气.m4a', label: '天气' },
    { file: '猫.m4a', label: '猫' },
    { file: '狗.m4a', label: '狗' },
    { file: '东西.m4a', label: '东西' },
    { file: '人.m4a', label: '人' },
    { file: '名字.m4a', label: '名字' },
    { file: '书.m4a', label: '书' },
    { file: '汉语.m4a', label: '汉语' },
    { file: '子.m4a', label: '子' },
    { file: '桌子.m4a', label: '桌子' },
    { file: '椅子.m4a', label: '椅子' },
    { file: '谢谢.m4a', label: '谢谢' },
    { file: '不客气.m4a', label: '不客气' },
    { file: '再见.m4a', label: '再见' },
    { file: '请.m4a', label: '请' },
    { file: '对不起.m4a', label: '对不起' },
    { file: '没关系.m4a', label: '没关系' },
    { file: '是.m4a', label: '是' },
    { file: '有.m4a', label: '有' },
    { file: '看.m4a', label: '看' },
    { file: '听.m4a', label: '听' },
    { file: '说话.m4a', label: '说话' },
    { file: '读.m4a', label: '读' },
    { file: '写.m4a', label: '写' },
    { file: '看见.m4a', label: '看见' },
    { file: '叫.m4a', label: '叫' },
    { file: '来.m4a', label: '来' },
    { file: '回.m4a', label: '回' },
    { file: '去.m4a', label: '去' },
    { file: '吃.m4a', label: '吃' },
    { file: '喝.m4a', label: '喝' },
    { file: '睡觉.m4a', label: '睡觉' },
    { file: '打电话.m4a', label: '打电话' },
    { file: '做.m4a', label: '做' },
    { file: '买.m4a', label: '买' },
    { file: '开.m4a', label: '开' },
    { file: '坐.m4a', label: '坐' },
    { file: '住.m4a', label: '住' },
    { file: '学习.m4a', label: '学习' },
    { file: '工作.m4a', label: '工作' },
    { file: '下雨.m4a', label: '下雨' },
    { file: '爱.m4a', label: '爱' },
    { file: '喜欢.m4a', label: '喜欢' },
    { file: '想.m4a', label: '想' },
    { file: '认识.m4a', label: '认识' },
    { file: '会.m4a', label: '会' },
    { file: '能.m4a', label: '能' },
    { file: '好.m4a', label: '好' },
    { file: '大.m4a', label: '大' },
    { file: '小.m4a', label: '小' },
    { file: '多.m4a', label: '多' },
    { file: '少.m4a', label: '少' },
    { file: '冷.m4a', label: '冷' },
    { file: '热.m4a', label: '热' },
    { file: '高兴.m4a', label: '高兴' },
    { file: '漂亮.m4a', label: '漂亮' },
  ];  
  
  
  let remaining = [...audioList];
  let lastAudio = null;
  let lastLabel = null;
  
  const generateButton = document.querySelector('.generate-button');
  const replayButton = document.querySelector('.replay-button');
  const characterButton = document.querySelector('.character-button');
  
  // Generate random audio
  generateButton.addEventListener('click', () => {
    if (remaining.length === 0) {
      remaining = [...audioList];
    }
  
    const index = Math.floor(Math.random() * remaining.length);
    const current = remaining[index];
    remaining.splice(index, 1);
  
    lastAudio = new Audio(`audio/${current.file}`);
    lastLabel = current.label;
  
    lastAudio.play().catch((error) => {
      console.error('Audio failed to play:', error);
    });
  
    // Reset character button text
    characterButton.textContent = 'show characters';
  });
  
  // Replay last audio
  replayButton.addEventListener('click', () => {
    if (lastAudio) {
      lastAudio.currentTime = 0;
      lastAudio.play().catch((error) => {
        console.error('Replay failed:', error);
      });
    } else {
      console.warn('No audio has been played yet.');
    }
  });
  
  // Show characters
  characterButton.addEventListener('click', () => {
    if (lastLabel) {
      characterButton.textContent = lastLabel;
      setTimeout(() => {
        characterButton.textContent = 'show characters';
      }, 3000);
      
    } else {
      console.warn('No characters to display.');
    }
  });
  
  
  

  
  

  
  