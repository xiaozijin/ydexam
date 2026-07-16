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
    level: 1,
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
    level: 1,
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
    level: 1,
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
    level: 1,
    options: ['A. 奢靡之风', 'B. 官僚主义', 'C. 享受主义', 'D. 形式主义'],
    answer: 'ABD'
  },
  {
    id: 'multi-2',
    type: 'multi',
    question: '从纪法角度，员工需要遵守的条例有？',
    level: 1,
    options: ['A.《中国共产党章程》党员权利义务', 'B.《中国共产党纪律处分条例》党规党纪、六大纪律要求', 'C.《员工违纪违规处分条例》', 'D.《刑法》', 'E. 中央八项规定'],
    answer: 'ABD'
  },
  {
    id: 'multi-3',
    type: 'multi',
    question: '根据《中国共产党廉洁自律准则》，党员领导干部廉洁自律规范中“四个自觉”包括？',
    level: 1,
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
    level: 1,
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },
  {
    id: 'judge-12',
    type: 'judge',
    question: '事假期间会正常发放员工固定薪酬，仅停发变动绩效奖金。',
    level: 1,
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
    level: 1,
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
    level: 1,
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
    level: 1,
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
    level: 1,
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
    level: 1,
    options: ['A. 1/4', 'B. 1/2', 'C. 2/3', 'D. 3/4'],
    answer: 'C'
  },
  {
    id: 'single-20',
    type: 'single',
    question: '北京移动公司的人均主营业务收入为（）。',
    level: 1,
    options: ['A. 280万/人年', 'B. 320万/人年', 'C. 360万/人年', 'D. 400万/人年'],
    answer: 'C'
  },

  // ========== 多选题 (6-10) ==========
  {
    id: 'multi-6',
    type: 'multi',
    question: '北京移动员工职业发展体系通道包括？',
    level: 1,
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
    level: 1,
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
    {
    id: 'judge-21',
    type: 'judge',
    question: '动感地带品牌主要面向商务高端政企客户设计。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },
  {
    id: 'judge-22',
    type: 'judge',
    question: '手机充值卡需要记名。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },
  {
    id: 'judge-23',
    type: 'judge',
    question: '全球通、动感地带、神州行客户均可以开通国际漫游服务。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },
  {
    id: 'judge-24',
    type: 'judge',
    question: '每天都可以办理开通国际漫游服务。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },
  {
    id: 'judge-25',
    type: 'judge',
    question: 'PIN码不可以修改。',
    level: 1,
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },
  {
    id: 'judge-26',
    type: 'judge',
    question: '客户更换SIM卡后，原PUK码随之改变。',
    level: 1,
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },
  {
    id: 'judge-27',
    type: 'judge',
    question: '万能副卡不可分享主卡套餐内的流量、语音和短彩信资源。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },
  {
    id: 'judge-28',
    type: 'judge',
    question: '未接来电可在手机营业厅APP通话详单中查询，查询范围为近12个月。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },
  {
    id: 'judge-29',
    type: 'judge',
    question: '办理爱家共享融合活动，需满足主卡前6个月的消费均值达到38元及以上。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },
  {
    id: 'judge-30',
    type: 'judge',
    question: '客户每月话费账单（不含赠送减免部分）可以进行消费积分，每一元积十分。', 
    level: 1,
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },

  // ========== 单选题 (21-30) ==========
  {
    id: 'single-21',
    type: 'single',
    question: '我国5G网络正式商用的年份是？',
    options: ['A. 2018', 'B. 2019', 'C. 2020', 'D. 2021'],
    answer: 'B'
  },
  {
    id: 'single-22',
    type: 'single',
    question: '每一张身份证可以申请（）张中国移动SIM卡？',
    options: ['A. 4', 'B. 5', 'C. 6', 'D. 7'],
    answer: 'B'
  },
  {
    id: 'single-23',
    type: 'single',
    question: '中国移动“全球通”承载了绝大多数新业务，其网络覆盖国内（不含港澳台）所有地市和多少以上的县区？',
    options: ['A. 90%', 'B. 95%', 'C. 99%', 'D. 100%'],
    answer: 'C'
  },
  {
    id: 'single-24',
    type: 'single',
    question: '话费流量直通车电话号码是（）。',
    options: ['A. 10086', 'B. 10085', 'C. 1008611', 'D. 10080'],
    answer: 'C'
  },
  {
    id: 'single-25',
    type: 'single',
    question: 'PIN初始密码是（）。',
    options: ['A. 身份证件号后四位', 'B. 0000', 'C. 1122', 'D. 1234'],
    answer: 'D'
  },
  {
    id: 'single-26',
    type: 'single',
    question: 'PIN码连续输入错误多少次后，SIM卡会被锁定？',
    level: 1,
    options: ['A. 3次', 'B. 5次', 'C. 8次', 'D. 10次'],
    answer: 'A'
  },
  {
    id: 'single-27',
    type: 'single',
    question: '主卡最多可增加多少个副卡成员？',
    level: 1,
    options: ['A. 5', 'B. 6', 'C. 7', 'D. 8'],
    answer: 'C'
  },
  {
    id: 'single-28',
    type: 'single',
    question: '万能副卡每月月费是多少？',
    options: ['A. 5元', 'B. 10元', 'C. 15元', 'D. 免费'],
    answer: 'B'
  },
  {
    id: 'single-29',
    type: 'single',
    question: '每月最后一天的什么时间之后，不再受理开通、取消和查询国际漫游业务？',
    options: ['A. 19:00', 'B. 19:30', 'C. 20:00', 'D. 20:30'],
    answer: 'A'
  },
  {
    id: 'single-30',
    type: 'single',
    question: '主卡和成员均需满足入网多少个月及以上才可参与爱家共享融合活动？',
    options: ['A. 2', 'B. 3', 'C. 4', 'D. 5'],
    answer: 'B'
  },

  // ========== 多选题 (11-15) ==========
  {
    id: 'multi-11',
    type: 'multi',
    question: '属于中国移动的客户品牌有哪些？',
    options: ['A. 全球通', 'B. 动感地带', 'C. 神州行', 'D. 天翼'],
    answer: 'ABC'
  },
  {
    id: 'multi-12',
    type: 'multi',
    question: '关于SIM卡描述正确的是？',
    level: 1,
    options: ['A. SIM卡储存客户信息、PIN、PUK码', 'B. PUK码累计错误超过10次（部分机型为7次），SIM卡将自动报废', 'C. PUK码初始密码统一为1234', 'D. 更换SIM卡后，原PUK码失效变更'],
    answer: 'ABD'
  },
  {
    id: 'multi-13',
    type: 'multi',
    question: '中国移动 99Plus 套餐包含以下哪些资费档次？',
    level: 1,
    options: ['A. 99元/次', 'B. 139元/次', 'C. 159元/次', 'D. 199元/次'],
    answer: 'ABD'
  },
  {
    id: 'multi-14',
    type: 'multi',
    question: '开通国际漫游的方式有哪些？',
    options: ['A. 短信', 'B. 网站', 'C. 营业厅', 'D. 10086人工'],
    answer: 'ABCD'
  },
  {
    id: 'multi-15',
    type: 'multi',
    question: '关于“和家庭分享”业务，以下哪些操作可以当月办理立即生效？',
    options: ['A. 业务取消', 'B. 增加副卡', 'C. 删除副卡', 'D. 取消零副卡提醒服务'],
    answer: 'ABCD'
  },
    {
    id: 'judge-31',
    type: 'judge',
    question: 'MPLS VPN依托移动IP网络搭建企业内部专网，可实现省内、跨省、国际多点异地组网。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },
  {
    id: 'judge-32',
    type: 'judge',
    question: '商务快线、企业宽带定位一致，均面向大型互联网企业提供独享高品质带宽。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },
  {
    id: 'judge-33',
    type: 'judge',
    question: '移动云为用户提供“公私混专”四种服务模式，其中专属云是单独开发部署，资源独享的方案配置。',
    level: 1,
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },
  {
    id: 'judge-34',
    type: 'judge',
    question: '移动云落实国家“东数西算”战略，采用“4+N+31+X”构建泛在算力布局，目前已实现资源省份100%覆盖，建设速度业界连续三年保持第一。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },
  {
    id: 'judge-35',
    type: 'judge',
    question: '北京移动在北京及廊坊合计布局12个机房，机房总机柜数量超14000架，包含两座钻石五星机房。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },
  {
    id: 'judge-36',
    type: 'judge',
    question: '“呼叫中心直连”业务只能支持单点接入，不支持一点及全国多点的接入方式。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },
  {
    id: 'judge-37',
    type: 'judge',
    question: '人流量检测中不会运用到大数据分析。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },
  {
    id: 'judge-38',
    type: 'judge',
    question: '5G专网的尊享服务模式通常适用于对数据安全和网络隔离要求极高的特殊行业场景，例如需要在厂区独立建设专用网络系统的石化企业或煤矿井下。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },
  {
    id: 'judge-39',
    type: 'judge',
    question: '移动安全设备图谱场景板块包含等保合规、安全运营、数据安全、信创安全。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },
  {
    id: 'judge-40',
    type: 'judge',
    question: '政企客户仅包含各级政府机关事业单位，不包含小微企业、个体工商户。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },

  // ========== 单选题 (31-40) ==========
  {
    id: 'single-31',
    type: 'single',
    question: '下列关于互联网BGP专线的目标客户，描述准确的是？',
    level: 1,
    options: ['A. 街边商铺、小型门店', 'B. 互联网信息服务提供商，如百度、腾讯等企业', 'C. 仅适用于跨省组网的集团公司', 'D. 对价格高度敏感的小微企业'],
    answer: 'B'
  },
  {
    id: 'single-32',
    type: 'single',
    question: '移动云产品数量达230+款，产品丰富度行业领先，下列哪项是SaaS应用产品？',
    level: 1,
    options: ['A. 云空间', 'B. 中移商情', 'C. 微服务平台', 'D. AI训练平台'],
    answer: 'B'
  },
  {
    id: 'single-33',
    type: 'single',
    question: '北京移动IDC三大基础业务类型不包含以下哪一项？',
    options: ['A. 主机托管', 'B. 网络接入', 'C. 增值服务', 'D. 云桌面租赁'],
    answer: 'D'
  },
  {
    id: 'single-34',
    type: 'single',
    question: '下列不属于IDC增值服务中网络安全类服务的是？',
    level: 1,
    options: ['A. 流量清洗', 'B. 漏洞扫描', 'C. 视频监控', 'D. 防火墙防护'],
    answer: 'C'
  },
  {
    id: 'single-35',
    type: 'single',
    question: '在打车、外卖、快递等即时配送场景中，为了保护用户隐私，防止双方真实号码暴露，通常推荐使用以下哪项产品？',
    options: ['A. 呼叫中心直连', 'B. 中间号', 'C. 统一Centrex', 'D. 云客服'],
    answer: 'B'
  },
  {
    id: 'single-36',
    type: 'single',
    question: '以下不属于ICT相关能力的有？',
    options: ['A. 规划设计能力', 'B. 产品研发能力', 'C. 运营运维能力', 'D. 财务核算能力'],
    answer: 'D'
  },
  {
    id: 'single-37',
    type: 'single',
    question: '在5G赋能的工业控制场景中，以下哪一项最能体现“超低时延”特性对生产安全的保障作用？',
    level: 1,
    options: ['A. 矿区高清监控视频的实时回传', 'B. 港口远程遥控天车进行集装箱吊装', 'C. 工厂内海量传感器的数据批量上报', 'D. 工业园区内员工的5G手机高速上网'],
    answer: 'B'
  },
  {
    id: 'single-38',
    type: 'single',
    question: '以下哪个案例属于DDoS高防落地场景？',
    level: 1,
    options: ['A. 北京市政务云等保服务', 'B. 各大银行流量清洗安全防护', 'C. 事业单位攻防演练', 'D. 政务密码测评'],
    answer: 'B'
  },
  {
    id: 'single-39',
    type: 'single',
    question: 'BASIC6框架中，字母C代表的是？',
    level: 1,
    options: ['A. 人工智能', 'B. 算力网络', 'C. 大数据', 'D. 安全'],
    answer: 'B'
  },
  {
    id: 'single-40',
    type: 'single',
    question: '移动AI产品Tokens计费模式不包含哪几种？',
    options: ['A. 按量付费', 'B. 一次性计费点数资费包', 'C. Coding Plan包月资费包', 'D. 年付专属套餐'],
    answer: 'D'
  },

  // ========== 多选题 (16-20) ==========
  {
    id: 'multi-16',
    type: 'multi',
    question: '集团短彩信业务面向企业客户开放，其功能主要分为以下哪几大类？',
    level: 1,
    options: ['A. 基本功能（如短信发送、日程提醒等）', 'B. 高级功能（如短信抽奖、投票调查等）', 'C. 管理功能（如黑白名单管理、权限管理等）', 'D. 业务融合功能（如视频通话、云盘存储）'],
    answer: 'ABC'
  },
  {
    id: 'multi-17',
    type: 'multi',
    question: '中国移动大数据产品服务具备的优势有？',
    options: ['A. 全面性', 'B. 时效性', 'C. 丰富性', 'D. 真实性'],
    answer: 'ABCD'
  },
  {
    id: 'multi-18',
    type: 'multi',
    question: '以下哪些属于5G物联网在产业端的典型应用？',
    options: ['A. 共享单车智能锁的蜂窝网络连接', 'B. 自动收割机依托高精度定位实现自动驾驶', 'C. 偏远地区远程医疗手术中的设备互联', 'D. 家庭智能音箱的语音交互网络支撑'],
    answer: 'ABC'
  },
  {
    id: 'multi-19',
    type: 'multi',
    question: '哪几项属于专线卫士六大核心安全能力？',
    level: 1,
    options: ['A. 入侵检测防护', 'B. 七层智能流控', 'C. 管端安全联动', 'D. DDoS流量清洗'],
    answer: 'ABC'
  },
  {
    id: 'multi-20',
    type: 'multi',
    question: '下列全部属于政企九大线条产品的是？',
    options: ['A. 专线、IDC、安全类', 'B. 云类、5G物联网、AI类', 'C. 语音短信、大数据、ICT', 'D. 个人宽带、家庭融合套餐'],
    answer: 'ABC'
  },
];

export default questions;