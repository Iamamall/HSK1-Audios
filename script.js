// List of audio files and labels
const audioList = [
    { file: '了.mp3', label: '了' },
    { file: '这儿.mp3', label: '这儿' },
    { file: '哪儿.mp3', label: '哪儿' },
    { file: '那儿.mp3', label: '那儿' },
    { file: '我.mp3', label: '我' },
    { file: '我们.mp3', label: '我们' },
    { file: '他们她们.m4a', label: '了' },
    { file: '你.mp3', label: '你' },
    { file: '你们.mp3', label: '你们' },
    { file: '他她.mp3', label: '他她' },
    { file: '这.mp3', label: '这' },
    { file: '哪.mp3', label: '哪' },
    { file: '那.mp3', label: '那' },
    { file: '谁.mp3', label: '谁' },
    { file: '什么.mp3', label: '什么' },
    { file: '多少.mp3', label: '多少' },
    { file: '几.mp3', label: '几' },
    { file: '怎么.mp3', label: '怎么' },
    { file: '怎么样.mp3', label: '怎么样' },
    { file: '一.mp3', label: '一' },
    { file: '二.mp3', label: '二' },
    { file: '三.mp3', label: '三' },
    { file: '四.mp3', label: '四' },
    { file: '五.mp3', label: '五' },
    { file: '六.mp3', label: '六' },
    { file: '七.mp3', label: '七' },
    { file: '八.mp3', label: '八' },
    { file: '九.mp3', label: '九' },
    { file: '十.mp3', label: '十' },
    { file: '零.mp3', label: '零' },
    { file: '个.mp3', label: '个' },
    { file: '岁.mp3', label: '岁' },
    { file: '本.mp3', label: '本' },
    { file: '些.mp3', label: '些' },
    { file: '快.mp3', label: '快' },
    { file: '不.mp3', label: '不' },
    { file: '没.mp3', label: '没' },
    { file: '很.mp3', label: '很' },
    { file: '太.mp3', label: '太' },
    { file: '都.mp3', label: '都' },
    { file: '和.mp3', label: '和' },
    { file: '在.mp3', label: '在' },
    { file: '的.mp3', label: '的' },
    { file: '吗.mp3', label: '吗' },
    { file: '呢.mp3', label: '呢' },
    { file: '喂.mp3', label: '喂' },
    { file: '家.mp3', label: '家' },
    { file: '学校.mp3', label: '学校' },
    { file: '饭店.mp3', label: '饭店' },
    { file: '商店.mp3', label: '商店' },
    { file: '医院.mp3', label: '医院' },
    { file: '火车站.mp3', label: '火车站' },
    { file: '中国.mp3', label: '中国' },
    { file: '北京.mp3', label: '北京' },
    { file: '上.mp3', label: '上' },
    { file: '下.mp3', label: '下' },
    { file: '前面.mp3', label: '前面' },
    { file: '后面.mp3', label: '后面' },
    { file: '里.mp3', label: '里' },
    { file: '今天.mp3', label: '今天' },
    { file: '明天.mp3', label: '明天' },
    { file: '昨天.mp3', label: '昨天' },
    { file: '上午.mp3', label: '上午' },
    { file: '中午.mp3', label: '中午' },
    { file: '下午.mp3', label: '下午' },
    { file: '年.mp3', label: '年' },
    { file: '月.mp3', label: '月' },
    { file: '日.mp3', label: '日' },
    { file: '星期.mp3', label: '星期' },
    { file: '点.mp3', label: '点' },
    { file: '分钟.mp3', label: '分钟' },
    { file: '现在.mp3', label: '现在' },
    { file: '时候.mp3', label: '时候' },
    { file: '爸爸.mp3', label: '爸爸' },
    { file: '妈妈.mp3', label: '妈妈' },
    { file: '儿子.mp3', label: '儿子' },
    { file: '女儿.mp3', label: '女儿' },
    { file: '老师.mp3', label: '老师' },
    { file: '学生.mp3', label: '学生' },
    { file: '同学.mp3', label: '同学' },
    { file: '朋友.mp3', label: '朋友' },
    { file: '医生.mp3', label: '医生' },
    { file: '先生.mp3', label: '先生' },
    { file: '小姐.mp3', label: '小姐' },
    { file: '衣服.mp3', label: '衣服' },
    { file: '水.mp3', label: '水' },
    { file: '菜.mp3', label: '菜' },
    { file: '米饭.mp3', label: '米饭' },
    { file: '水果.mp3', label: '水果' },
    { file: '苹果.mp3', label: '苹果' },
    { file: '茶.mp3', label: '茶' },
    { file: '杯子.mp3', label: '杯子' },
    { file: '钱.mp3', label: '钱' },
    { file: '飞机.mp3', label: '飞机' },
    { file: '出租车.mp3', label: '出租车' },
    { file: '电视.mp3', label: '电视' },
    { file: '电脑.mp3', label: '电脑' },
    { file: '电影.mp3', label: '电影' },
    { file: '天气.mp3', label: '天气' },
    { file: '猫.mp3', label: '猫' },
    { file: '狗.mp3', label: '狗' },
    { file: '东西.mp3', label: '东西' },
    { file: '人.mp3', label: '人' },
    { file: '名字.mp3', label: '名字' },
    { file: '书.mp3', label: '书' },
    { file: '汉语.mp3', label: '汉语' },
    { file: '字.mp3', label: '字' },
    { file: '桌子.mp3', label: '桌子' },
    { file: '椅子.mp3', label: '椅子' },
    { file: '谢谢.mp3', label: '谢谢' },
    { file: '不客气.mp3', label: '不客气' },
    { file: '再见.mp3', label: '再见' },
    { file: '请.mp3', label: '请' },
    { file: '对不起.mp3', label: '对不起' },
    { file: '没关系.mp3', label: '没关系' },
    { file: '是.mp3', label: '是' },
    { file: '有.mp3', label: '有' },
    { file: '看.mp3', label: '看' },
    { file: '听.mp3', label: '听' },
    { file: '说话.mp3', label: '说话' },
    { file: '读.mp3', label: '读' },
    { file: '写.mp3', label: '写' },
    { file: '看见.mp3', label: '看见' },
    { file: '叫.mp3', label: '叫' },
    { file: '来.mp3', label: '来' },
    { file: '回.mp3', label: '回' },
    { file: '去.mp3', label: '去' },
    { file: '吃.mp3', label: '吃' },
    { file: '喝.mp3', label: '喝' },
    { file: '睡觉.mp3', label: '睡觉' },
    { file: '打电话.mp3', label: '打电话' },
    { file: '做.mp3', label: '做' },
    { file: '买.mp3', label: '买' },
    { file: '开.mp3', label: '开' },
    { file: '坐.mp3', label: '坐' },
    { file: '住.mp3', label: '住' },
    { file: '学习.mp3', label: '学习' },
    { file: '工作.mp3', label: '工作' },
    { file: '下雨.mp3', label: '下雨' },
    { file: '爱.mp3', label: '爱' },
    { file: '喜欢.mp3', label: '喜欢' },
    { file: '想.mp3', label: '想' },
    { file: '认识.mp3', label: '认识' },
    { file: '会.mp3', label: '会' },
    { file: '能.mp3', label: '能' },
    { file: '好.mp3', label: '好' },
    { file: '大.mp3', label: '大' },
    { file: '小.mp3', label: '小' },
    { file: '多.mp3', label: '多' },
    { file: '少.mp3', label: '少' },
    { file: '冷.mp3', label: '冷' },
    { file: '热.mp3', label: '热' },
    { file: '高兴.mp3', label: '高兴' },
    { file: '漂亮.mp3', label: '漂亮' },
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
    characterButton.textContent = 'characters';
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
        characterButton.textContent = 'characters';
      }, 3000);
      
    } else {
      console.warn('No characters to display.');
    }
  });
  
  
  

  
  

  
  