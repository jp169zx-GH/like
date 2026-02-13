// ======================
// 星座
// ======================
function getConstellation(month, day) {
  const dates = [21,19,21,20,21,22,23,23,23,24,23,22];
  const names = ["摩羯","水瓶","双鱼","白羊","金牛","双子","巨蟹","狮子","处女","天秤","天蝎","射手"];
  return day < dates[month-1] ? names[month-1] : names[month%12];
}

// ======================
// 生肖
// ======================
function getZodiac(year) {
  const animals = ["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"];
  return animals[(year - 4) % 12];
}

// ======================
// 生肖配对 + 完整喜好
// ======================
const zodiacData = {
  "鼠": {
    best: "龙、猴、牛",
    color: "蓝、黑、金",
    food: "清淡、汤品、精致小份",
    friend: "聪明、守信、低调",
    activity: "阅读、桌游、短途旅行",
    social: "聪明、可靠、细心",
    consume: "性价比、实用、品质"
  },
  "牛": {
    best: "鼠、蛇、鸡",
    color: "黄、红、棕",
    food: "扎实主食、肉类、炖汤",
    friend: "稳重、真诚、踏实",
    activity: "园艺、散步、家庭活动",
    social: "稳重、可靠、勤奋",
    consume: "耐用、实用、不花哨"
  },
  "虎": {
    best: "马、狗、猪",
    color: "绿、蓝、橙",
    food: "香辣、烧烤、特色菜",
    friend: "热情、直爽、有魄力",
    activity: "运动、探险、户外",
    social: "勇敢、大气、有领导力",
    consume: "品牌、气场、有面子"
  },
  "兔": {
    best: "羊、狗、猪",
    color: "粉、绿、白",
    food: "甜品、清淡、精致料理",
    friend: "温柔、体贴、善解人意",
    activity: "文艺、看展、下午茶",
    social: "温柔、优雅、好相处",
    consume: "颜值、质感、舒适"
  },
  "龙": {
    best: "鼠、猴、鸡",
    color: "金、红、紫",
    food: "高端、排场、特色硬菜",
    friend: "大气、有能力、正能量",
    activity: "商务、旅行、文化活动",
    social: "大气、有能力、有格局",
    consume: "高端、品牌、有档次"
  },
  "蛇": {
    best: "牛、鸡、猴",
    color: "黑、红、紫",
    food: "精致、私房、少而精",
    friend: "内敛、聪明、有深度",
    activity: "静思、电影、私人小聚",
    social: "智慧、神秘、有品位",
    consume: "低调奢华、质感"
  },
  "马": {
    best: "虎、羊、狗",
    color: "红、绿、紫",
    food: "热闹、火锅、烧烤",
    friend: "开朗、自由、讲义气",
    activity: "运动、旅行、社交",
    social: "开朗、自由、有活力",
    consume: "时尚、体验、新潮"
  },
  "羊": {
    best: "兔、马、猪",
    color: "绿、粉、米",
    food: "温和、养生、煲汤",
    friend: "温和、善良、包容",
    activity: "手工、花艺、休闲",
    social: "善良、温和、体贴",
    consume: "舒适、温馨、有美感"
  },
  "猴": {
    best: "鼠、龙、蛇",
    color: "白、金、蓝",
    food: "新奇、小吃、特色",
    friend: "机灵、幽默、灵活",
    activity: "游戏、新鲜体验、聚会",
    social: "聪明、幽默、灵活",
    consume: "新奇、好玩、有趣"
  },
  "鸡": {
    best: "牛、龙、蛇",
    color: "金、白、棕",
    food: "干净、精致、定时规律",
    friend: "整洁、上进、守时",
    activity: "学习、打扮、社交",
    social: "精致、上进、得体",
    consume: "精致、整洁、有质感"
  },
  "狗": {
    best: "虎、兔、马",
    color: "绿、棕、橙",
    food: "家常、实在、分享",
    friend: "忠诚、真诚、仗义",
    activity: "家庭、朋友聚会、散步",
    social: "忠诚、可靠、仗义",
    consume: "实在、放心、口碑"
  },
  "猪": {
    best: "虎、兔、羊",
    color: "黄、灰、蓝",
    food: "美食、丰盛、享受型",
    friend: "大方、随和、不计较",
    activity: "美食、休闲、度假",
    social: "大方、随和、福气",
    consume: "享受、舒适、品质"
  }
};

// ======================
// 星座配对
// ======================
const constellBest = {
  "摩羯": "金牛、处女、双鱼",
  "水瓶": "双子、天秤、射手",
  "双鱼": "巨蟹、天蝎、摩羯",
  "白羊": "狮子、射手、水瓶",
  "金牛": "处女、摩羯、巨蟹",
  "双子": "天秤、水瓶、射手",
  "巨蟹": "双鱼、天蝎、金牛",
  "狮子": "白羊、射手、双子",
  "处女": "金牛、摩羯、巨蟹",
  "天秤": "双子、水瓶、狮子",
  "天蝎": "双鱼、巨蟹、处女",
  "射手": "白羊、狮子、水瓶"
};

// ======================
// 主逻辑
// ======================
function analyze() {
  const birthday = document.getElementById("birthday").value;
  if (!birthday) {
    alert("请选择生日");
    return;
  }
  const [y, m, d] = birthday.split("-").map(Number);
  const c = getConstellation(m, d);
  const z = getZodiac(y);
  const zInfo = zodiacData[z];
  const cBest = constellBest[c];

  document.getElementById("bday").innerText = birthday;
  document.getElementById("constell").innerText = c;
  document.getElementById("zodiac").innerText = z;
  document.getElementById("zBest").innerText = zInfo.best;
  document.getElementById("cBest").innerText = cBest;
  document.getElementById("color").innerText = zInfo.color;
  document.getElementById("food").innerText = zInfo.food;
  document.getElementById("friend").innerText = zInfo.friend;
  document.getElementById("activity").innerText = zInfo.activity;
  document.getElementById("social").innerText = zInfo.social;
  document.getElementById("consume").innerText = zInfo.consume;

  document.getElementById("result").style.display = "block";
}

function reset() {
  document.getElementById("birthday").value = "";
  document.getElementById("result").style.display = "none";
}