// src/data/questions.js
const questions = [
  // ========== 判断题 (10道) ==========
  {
    id: 'judge-1',
    type: 'judge',
    question: '客户的绝密文件可以通过微信进行传播。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },
  {
    id: 'judge-2',
    type: 'judge',
    question: '部门私人聚餐不可以开具公司发票进行报销。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },
  {
    id: 'judge-3',
    type: 'judge',
    question: '逢年过节，客户送的100元礼物，因未到违规金额，可以私下收下。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },
  {
    id: 'judge-4',
    type: 'judge',
    question: '工作中如遇无法拒绝客户礼物的情况，应上报公司相关部门将礼物上交处理。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },
  {
    id: 'judge-5',
    type: 'judge',
    question: '违规收送名贵特产和礼品礼金属于享乐主义、奢靡之风问题。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },
  {
    id: 'judge-6',
    type: 'judge',
    question: '使用公款组织高消费娱乐、健身活动不属于违反中央八项规定精神。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },
  {
    id: 'judge-7',
    type: 'judge',
    question: '在组织谈话、函询时，可以根据个人意愿选择是否如实说明问题。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },
  {
    id: 'judge-8',
    type: 'judge',
    question: '漠视群众利益、侵害群众知情权，是违反群众纪律的典型行为。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },
  {
    id: 'judge-9',
    type: 'judge',
    question: '生活纪律仅约束党员工作时间行为，私人生活、家风家教不在约束范围内。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },
  {
    id: 'judge-10',
    type: 'judge',
    question: '借用管理和服务对象的钱款、住房、车辆，不影响公正执行公务，因此不违反廉洁纪律。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },

  // ========== 单选题 (10道) ==========
  {
    id: 'single-1',
    type: 'single',
    question: '下列哪项不属于中央八项规定？',
    options: ['A. 改进会风', 'B. 改进文风', 'C. 改进学风', 'D. 厉行勤俭节约'],
    answer: 'C'
  },
  {
    id: 'single-2',
    type: 'single',
    question: '下列哪项不属于享乐主义奢靡之风问题？',
    options: ['A. 违规吃喝问题', 'B. 违规发放津贴补贴或福利问题', 'C. 违规操办婚丧喜庆问题', 'D. 在联系服务群众中消极应付、效率低下，损害群众利益'],
    answer: 'D'
  },
  {
    id: 'single-3',
    type: 'single',
    question: '下列哪项不属于党的六大纪律？',
    options: ['A. 群众纪律', 'B. 工作纪律', 'C. 政治纪律', 'D. 学习纪律'],
    answer: 'D'
  },
  {
    id: 'single-4',
    type: 'single',
    question: '下列不属于违反政治纪律的行为是？',
    options: ['A. 不执行党中央决策部署', 'B. 涉外活动中存在有政治问题的言行', 'C. 违反出国（境）管理规定', 'D. 不坚定理想信念'],
    answer: 'C'
  },
  {
    id: 'single-5',
    type: 'single',
    question: '日常工作中合作方赠送的小礼品、土特产，正确做法是？',
    options: ['A. 碍于情面收下', 'B. 一律拒绝不收', 'C. 没人看见就收下', 'D. 转送给同事'],
    answer: 'B'
  },
  {
    id: 'single-6',
    type: 'single',
    question: '中央八项规定重点整治的核心是？',
    options: ['A. 规范作风、厉行节约', 'B. 提升业务业绩', 'C. 增加员工福利', 'D. 调整工作时间'],
    answer: 'A'
  },
  {
    id: 'single-7',
    type: 'single',
    question: '员工利用岗位便利为亲友谋取便利，属于？',
    options: ['A. 正常人情往来', 'B. 违反廉洁从业规定', 'C. 合理工作安排', 'D. 无伤大雅小事'],
    answer: 'B'
  },
  {
    id: 'single-8',
    type: 'single',
    question: '根据党的纪律要求，下列哪一项行为不是违反工作纪律的典型表现？',
    options: ['A. 在工作中弄虚作假，虚报工作业绩', 'B. 违规办理业务', 'C. 通过互联网等公共网络传输涉密文件', 'D. 串供或者伪造、销毁、转移、隐匿证据，对抗组织审查'],
    answer: 'D'
  },
  {
    id: 'single-9',
    type: 'single',
    question: '根据《中国共产党纪律处分条例》，以下哪一项是党的“六大纪律”？',
    options: ['A. 政治纪律、组织纪律、廉洁纪律、财经纪律、工作纪律、生活纪律', 'B. 政治纪律、组织纪律、廉洁纪律、群众纪律、保密纪律、生活纪律', 'C. 政治纪律、组织纪律、廉洁纪律、群众纪律、工作纪律、生活纪律', 'D. 政治纪律、人事纪律、廉洁纪律、群众纪律、工作纪律、生活纪律'],
    answer: 'C'
  },
  {
    id: 'single-10',
    type: 'single',
    question: '下列哪一项行为违反了组织纪律？',
    options: ['A. 在工作中搞“一言堂”，重大问题个人说了算，拒不执行或者变相不执行集体决策', 'B. 接受客户赠送的可能影响公正执行公务的礼品礼金', 'C. 参加迷信活动或者个人搞封建迷信', 'D. 在公务活动中提供超标准接待'],
    answer: 'A'
  },

  // ========== 多选题 (5道) ==========
  {
    id: 'multi-1',
    type: 'multi',
    question: '下列属于中央八项规定精神所列类型之问题，即“四风”的有？',
    options: ['A. 奢靡之风', 'B. 官僚主义', 'C. 享受主义', 'D. 形式主义'],
    answer: 'ABD'
  },
  {
    id: 'multi-2',
    type: 'multi',
    question: '从纪法角度，员工需要遵守的条例有？',
    options: ['A.《中国共产党章程》党员权利义务', 'B.《中国共产党纪律处分条例》党规党纪、六大纪律要求', 'C.《员工违纪违规处分条例》', 'D.《刑法》', 'E. 中央八项规定'],
    answer: 'ABD'
  },
  {
    id: 'multi-3',
    type: 'multi',
    question: '根据《中国共产党廉洁自律准则》，党员领导干部廉洁自律规范中“四个自觉”包括？',
    options: ['A. 廉洁从政，自觉保持人民公仆本色', 'B. 廉洁用权，自觉维护人民根本利益', 'C. 廉洁修身，自觉提升思想道德境界', 'D. 廉洁齐家，自觉带头树立良好家风', 'E. 廉洁奉公，自觉遵守党纪国法红线'],
    answer: 'ABCD'
  },
  {
    id: 'multi-4',
    type: 'multi',
    question: '下列行为中，违反党员干部廉洁纪律的有？',
    options: ['A. 利用职权为配偶的经营活动谋取利益', 'B. 收受下属单位以“过节慰问”名义赠送的购物卡', 'C. 将个人应承担的装修费用由管理服务对象支付', 'D. 在公务活动中收受对方企业赠送的普通纪念徽章（价值50元）并上交', 'E. 长期借用私营企业主车辆供家庭使用'],
    answer: 'ABCE'
  },
  {
    id: 'multi-5',
    type: 'multi',
    question: '关于“廉洁自律”与“反腐倡廉”的关系，以下说法正确的有？',
    options: ['A. 廉洁自律是反腐倡廉的基础性工程', 'B. 反腐倡廉主要靠外部惩治，与个人自律无关', 'C. 二者相辅相成，自律是内因，他律是外因', 'D. 廉洁自律能降低腐败发生的概率，但无法完全替代制度约束', 'E. 加强廉洁自律可以彻底消灭腐败现象'],
    answer: 'ACD'
  },
    // ========== 判断题 (11-20) ==========
  {
    id: 'judge-11',
    type: 'judge',
    question: '北京移动绩效管理包含绩效计划制定、绩效辅导、绩效评估、绩效应用四大核心环节。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },
  {
    id: 'judge-12',
    type: 'judge',
    question: '事假期间会正常发放员工固定薪酬，仅停发变动绩效奖金。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },
  {
    id: 'judge-13',
    type: 'judge',
    question: '北京移动员工序列最高职级为10级。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },
  {
    id: 'judge-14',
    type: 'judge',
    question: '重点转型领域人才薪酬水平领先平均水平。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },
  {
    id: 'judge-15',
    type: 'judge',
    question: '公司根据业绩产出、价值贡献确定薪酬分配差距，严格落实薪酬能增能减。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },
  {
    id: 'judge-16',
    type: 'judge',
    question: '变动工资由业绩奖，销售奖金，部门一次性奖励构成。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },
  {
    id: 'judge-17',
    type: 'judge',
    question: '北京移动薪酬资源向基层一线倾斜。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },
  {
    id: 'judge-18',
    type: 'judge',
    question: '对于业绩产出优秀，价值贡献高的突出个体，薪酬上不封顶。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },
  {
    id: 'judge-19',
    type: 'judge',
    question: '北京移动员工薪酬由固定薪酬和变动薪酬构成，每月上旬发放薪酬。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },
  {
    id: 'judge-20',
    type: 'judge',
    question: '员工请1天以上，5天以内事假，主管或三级经理审批即可。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },

  // ========== 单选题 (11-20) ==========
  {
    id: 'single-11',
    type: 'single',
    question: '下列哪项不属于员工的固定薪酬？',
    options: ['A. 基本工资', 'B. 业绩奖金', 'C. 兼职补贴', 'D. 职位工资'],
    answer: 'B'
  },
  {
    id: 'single-12',
    type: 'single',
    question: '北京公司现有40个二级正单位，其中市公司本部包括（）个职能部门、（）个生产中心，以及一线单位包括（）分公司。',
    options: ['A. 17、4、15', 'B. 16、4、15', 'C. 17、4、16', 'D. 17、5、15'],
    answer: 'A'
  },
  {
    id: 'single-13',
    type: 'single',
    question: '北京移动硕士以上学历人员占比居31家省公司第（）。',
    options: ['A. 1', 'B. 3', 'C. 5', 'D. 10'],
    answer: 'A'
  },
  {
    id: 'single-14',
    type: 'single',
    question: '北京移动员工平均工龄为（）年。',
    options: ['A. 15', 'B. 16', 'C. 17', 'D. 18'],
    answer: 'C'
  },
  {
    id: 'single-15',
    type: 'single',
    question: '若员工离职，需要提前（）天向所属部门提出书面申请。',
    options: ['A. 30', 'B. 20', 'C. 15', 'D. 7'],
    answer: 'A'
  },
  {
    id: 'single-16',
    type: 'single',
    question: '北京移动公司的生产一线人员占比约（）。',
    options: ['A. 26%', 'B. 52%', 'C. 73%', 'D. 84%'],
    answer: 'D'
  },
  {
    id: 'single-17',
    type: 'single',
    question: '新员工职位适应期考核评估阶段的顺序为：①培训综合考核 ②网格实践考核 ③轮岗实践考核 ④岗位实训考核',
    options: ['A. ①④③②', 'B. ①②④③', 'C. ①④②③', 'D. ①②③④'],
    answer: 'C'
  },
  {
    id: 'single-18',
    type: 'single',
    question: '员工请5天以上假期，审批流程最终需要哪一级负责人签字审批？',
    options: ['A. 仅主管审批', 'B. 仅三级经理审批', 'C. 主管、三级经理、二级经理依次审批', 'D. 仅二级经理审批'],
    answer: 'C'
  },
  {
    id: 'single-19',
    type: 'single',
    question: '在试用期时，日常绩效为E或业务考试分数低于80分或团队契合度合格率低于（），则试用期考核不通过。',
    options: ['A. 1/4', 'B. 1/2', 'C. 2/3', 'D. 3/4'],
    answer: 'C'
  },
  {
    id: 'single-20',
    type: 'single',
    question: '北京移动公司的人均主营业务收入为（）。',
    options: ['A. 280万/人年', 'B. 320万/人年', 'C. 360万/人年', 'D. 400万/人年'],
    answer: 'C'
  },

  // ========== 多选题 (6-10) ==========
  {
    id: 'multi-6',
    type: 'multi',
    question: '北京移动员工职业发展体系通道包括？',
    options: ['A. 数字政府通道', 'B. 专家通道', 'C. 岗位序列通道', 'D. 经理通道'],
    answer: 'BCD'
  },
  {
    id: 'multi-7',
    type: 'multi',
    question: '公司对新员工的评估包括？',
    options: ['A. 培训综合考核', 'B. 岗位实训考核', 'C. 网格实践考核', 'D. 轮岗实践考核'],
    answer: 'ABCD'
  },
  {
    id: 'multi-8',
    type: 'multi',
    question: '以下哪些部门或中心不属于北京移动一线单位？',
    options: ['A. 云网运营中心', 'B. 互联网战略客户中心', 'C. 客户体验部', 'D. 发展战略部'],
    answer: 'ACD'
  },
  {
    id: 'multi-9',
    type: 'multi',
    question: '北京移动全面激励机制包含以下哪些激励手段？',
    options: ['A. 中长期激励', 'B. 荣誉激励', 'C. 福利保障', 'D. 事业激励'],
    answer: 'ABCD'
  },
  {
    id: 'multi-10',
    type: 'multi',
    question: '下列哪项属于薪酬管理分配原则？',
    options: ['A. 倾斜一线', 'B. 创新驱动', 'C. 业绩、价值导向', 'D. 薪酬公开'],
    answer: 'ABC'
  },
];

export default questions;