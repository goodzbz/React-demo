var Mock = require('mockjs')

//数据分类
const departments = [
  '人力资源部',
  '财务部',
  '销售部',
  '市场部',
  '研发部',
  '技术部',
  '客户服务部',
  '运营部',
  '采购部',
  '生产部',
  '品质控制部',
  '供应链部',
  '行政部',
  '市场营销部',
  '客户关系部',
  '数据分析部',
  '设计部',
  '市场推广部',
  '项目管理部',
  '法务部',
]
const nation = ['汉族', '壮族', '满族', '回族', '苗族', '维吾尔族', '土家族', '彝族', '蒙古族', '藏族']
const hobbies = ['乒乓球', '羽毛球', '篮球', '读书', '听音乐', '写代码']
//数据生成
var data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'users|20': [
    {
      'id|+1': 1,
      name: '@cname',
      birthdate: '@date("yyyy-MM-dd")',
      'gender|1': ['男', '女'],
      hometown: '@city(true)',
      'ethnicity|1': nation,
      'hobbies|1': hobbies,
      'department|1': departments,
    },
  ],
})
// 结果
console.log(JSON.stringify(data, null, 4), 11)
