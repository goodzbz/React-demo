import Mock from "mockjs";
export const list = [
  {
    id: 1,
    name: "叶强",
    birthdate: "1998-07-26",
    gender: "男",
    hometown: "海南省 三亚市",
    ethnicity: "满族",
    hobbies: "读书",
    department: "人力资源部",
  },
  {
    id: 2,
    name: "蔡杰",
    birthdate: "2008-01-26",
    gender: "男",
    hometown: "黑龙江省 佳木斯市",
    ethnicity: "蒙古族",
    hobbies: "羽毛球",
    department: "运营部",
  },
  {
    id: 3,
    name: "潘伟",
    birthdate: "1990-09-09",
    gender: "女",
    hometown: "上海 上海市",
    ethnicity: "壮族",
    hobbies: "羽毛球",
    department: "客户服务部",
  },
  {
    id: 4,
    name: "邱磊",
    birthdate: "2014-11-27",
    gender: "女",
    hometown: "山西省 晋中市",
    ethnicity: "壮族",
    hobbies: "读书",
    department: "技术部",
  },
  {
    id: 5,
    name: "黎艳",
    birthdate: "1986-08-15",
    gender: "女",
    hometown: "湖南省 衡阳市",
    ethnicity: "满族",
    hobbies: "乒乓球",
    department: "设计部",
  },
  {
    id: 6,
    name: "姚艳",
    birthdate: "1996-05-28",
    gender: "男",
    hometown: "广东省 东莞市",
    ethnicity: "苗族",
    hobbies: "读书",
    department: "设计部",
  },
  {
    id: 7,
    name: "吕丽",
    birthdate: "2008-04-09",
    gender: "男",
    hometown: "湖北省 随州市",
    ethnicity: "满族",
    hobbies: "写代码",
    department: "采购部",
  },
  {
    id: 8,
    name: "贾磊",
    birthdate: "1980-09-27",
    gender: "女",
    hometown: "山东省 威海市",
    ethnicity: "苗族",
    hobbies: "篮球",
    department: "财务部",
  },
  {
    id: 9,
    name: "傅刚",
    birthdate: "1990-03-23",
    gender: "女",
    hometown: "西藏自治区 昌都地区",
    ethnicity: "蒙古族",
    hobbies: "篮球",

    department: "设计部",
  },
  {
    id: 10,
    name: "阎娜",
    birthdate: "1992-05-02",
    gender: "男",
    hometown: "四川省 阿坝藏族羌族自治州",
    ethnicity: "彝族",
    hobbies: "听音乐",
    department: "市场营销部",
  },
  {
    id: 11,
    name: "蔡明",
    birthdate: "2022-03-05",
    gender: "男",
    hometown: "海南省 三沙市",
    ethnicity: "汉族",
    hobbies: "读书",
    department: "品质控制部",
  },
  {
    id: 12,
    name: "唐芳",
    birthdate: "2013-11-18",
    gender: "男",
    hometown: "海南省 海口市",
    ethnicity: "彝族",
    hobbies: "读书",
    department: "客户服务部",
  },
  {
    id: 13,
    name: "侯娟",
    birthdate: "2003-07-17",
    gender: "女",
    hometown: "台湾 南投县",
    ethnicity: "回族",
    hobbies: "乒乓球",
    department: "生产部",
  },
  {
    id: 14,
    name: "朱洋",
    birthdate: "2001-01-25",
    gender: "女",
    hometown: "香港特别行政区 香港岛",
    ethnicity: "苗族",
    hobbies: "乒乓球",
    department: "销售部",
  },
  {
    id: 15,
    name: "薛杰",
    birthdate: "2002-07-28",
    gender: "男",
    hometown: "山西省 阳泉市",
    ethnicity: "维吾尔族",
    hobbies: "写代码",
    department: "设计部",
  },
  {
    id: 16,
    name: "阎芳",
    birthdate: "1982-05-08",
    gender: "女",
    hometown: "天津 天津市",
    ethnicity: "彝族",
    hobbies: "羽毛球",
    department: "供应链部",
  },
  {
    id: 17,
    name: "赖杰",
    birthdate: "1973-09-17",
    gender: "女",
    hometown: "天津 天津市",
    ethnicity: "彝族",
    hobbies: "篮球",
    department: "供应链部",
  },
  {
    id: 18,
    name: "易明",
    birthdate: "1978-05-15",
    gender: "男",
    hometown: "重庆 重庆市",
    ethnicity: "蒙古族",
    hobbies: "篮球",
    department: "研发部",
  },
  {
    id: 19,
    name: "吴杰",
    birthdate: "1993-02-05",
    gender: "男",
    hometown: "安徽省 六安市",
    ethnicity: "彝族",
    hobbies: "写代码",
    department: "市场部",
  },
  {
    id: 20,
    name: "郝丽",
    birthdate: "1991-01-17",
    gender: "女",
    hometown: "上海 上海市",
    ethnicity: "藏族",
    hobbies: "写代码",
    department: "技术部",
  },
];
const departments = [
  "人力资源部",
  "财务部",
  "销售部",
  "市场部",
  "研发部",
  "技术部",
  "客户服务部",
  "运营部",
  "采购部",
  "生产部",
  "品质控制部",
  "供应链部",
  "行政部",
  "市场营销部",
  "客户关系部",
  "数据分析部",
  "设计部",
  "市场推广部",
  "项目管理部",
  "法务部",
];
const nation = [
  "汉族",
  "壮族",
  "满族",
  "回族",
  "苗族",
  "维吾尔族",
  "土家族",
  "彝族",
  "蒙古族",
  "藏族",
];
const hobbies = ["乒乓球", "羽毛球", "篮球", "读书", "听音乐", "写代码"];
Mock.mock("/api/users", "get", {
  "users|20": [
    {
      "id|+1": 1,
      name: "@cname",
      birthdate: '@date("yyyy-MM-dd")',
      "gender|1": ["男", "女"],
      hometown: "@city(true)",
      "ethnicity|1": nation,
      "hobbies|1": hobbies,
      "department|1": departments,
    },
  ],
});
// 模拟添加用户接口
Mock.mock("/api/users", "post", (options) => {
  const { body } = JSON.parse(options.body);
  const newUser = {
    id: Mock.mock("@id"),
    ...body,
  };
  return newUser;
});

// 模拟删除用户接口
Mock.mock("/api/users/:id", "delete", (options) => {
  const { id } = options.params;
  return {
    id,
    message: "删除成功",
  };
});

// 模拟修改用户接口
Mock.mock("/api/users/:id", "put", (options) => {
  const { id } = options.params;
  const { body } = JSON.parse(options.body);
  const updatedUser = {
    id,
    ...body,
  };
  return updatedUser;
});
