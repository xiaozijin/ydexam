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
    // ========== 判断题 (41-50) ==========
  {
    id: 'judge-41',
    type: 'judge',
    question: '在商务场合下，女士着裙装就坐通常需要用手背轻拢裙摆。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },
  {
    id: 'judge-42',
    type: 'judge',
    question: '在职业场合中，男士发型可以留短寸头。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },
  {
    id: 'judge-43',
    type: 'judge',
    question: '作为下属，和领导乘坐电梯时，让领导先进先出。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },
  {
    id: 'judge-44',
    type: 'judge',
    question: '上下楼梯时，让领导行走在远离楼梯扶手的位置，保证其安全。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },
  {
    id: 'judge-45',
    type: 'judge',
    question: '首因效应是指表达内容7%+外在形象38%+行为表现55%。',
    level: 1,
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },
  {
    id: 'judge-46',
    type: 'judge',
    question: '低手位手势中，手腕和腹部在同一位置。',
    level: 1,
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },
  {
    id: 'judge-47',
    type: 'judge',
    question: '在职业场合下，女士长发及肩者不用束起低马尾或盘起。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },
  {
    id: 'judge-48',
    type: 'judge',
    question: '初次与他人商务会见时，应当保持“一度微笑”，即嘴角微微上扬，笑容不露牙齿。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },
  {
    id: 'judge-49',
    type: 'judge',
    question: '职业礼仪中，鼻毛不得超出鼻孔1mm。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },
  {
    id: 'judge-50',
    type: 'judge',
    question: '接待客户时，应该引导客户站在有楼梯的一侧。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },

  // ========== 单选题 (41-50) ==========
  {
    id: 'single-41',
    type: 'single',
    question: '在接待客户时，面对不熟悉的客户，目光应该看向客户的（）。',
    options: ['A. 眼额正三角区', 'B. 眼鼻倒三角区', 'C. 眼睛', 'D. 锁骨'],
    answer: 'A'
  },
  {
    id: 'single-42',
    type: 'single',
    question: '当客户来我司做客谈项目时，接待者应该站在客户的（）。',
    options: ['A. 正前方', 'B. 正后方', 'C. 前方斜侧45度', 'D. 正侧面'],
    answer: 'C'
  },
  {
    id: 'single-43',
    type: 'single',
    question: '收到对方递来的文件时，正确的做法是（）。',
    options: ['A. 字对着对方', 'B. 浏览3s再收下', 'C. 眼睛直视对方手指', 'D. 抓走文件'],
    answer: 'B'
  },
  {
    id: 'single-44',
    type: 'single',
    question: '接待来访客户，正确握手时长为（）。',
    options: ['A. 5-10秒', 'B. 1-3秒', 'C. 20秒以上', 'D. 不握手直接摆手'],
    answer: 'B'
  },
  {
    id: 'single-45',
    type: 'single',
    question: '职场中，握手的力度应为多重？',
    options: ['A. 1斤', 'B. 2斤', 'C. 3斤', 'D. 4斤'],
    answer: 'B'
  },
  {
    id: 'single-46',
    type: 'single',
    question: '男人的“酒窝”长在什么地方？',
    options: ['A. 脸', 'B. 领带窝', 'C. 西服', 'D. 眼额正三角区'],
    answer: 'B'
  },
  {
    id: 'single-47',
    type: 'single',
    question: '在商务接待场合下，先介绍（），（）先伸手。',
    level: 1,
    options: ['A. 上级，上级', 'B. 上级，下级', 'C. 下级，上级', 'D. 下级，下级'],
    answer: 'C'
  },
  {
    id: 'single-48',
    type: 'single',
    question: '在商务礼仪中，为了体现专业与尊重，不宜出现的鞠躬角度是（）。',
    options: ['A. 15°', 'B. 30°', 'C. 45°', 'D. 90°'],
    answer: 'D'
  },
  {
    id: 'single-49',
    type: 'single',
    question: '在三十分钟以上的商务洽谈中，女士可以坐在椅子的什么部位？',
    options: ['A. 1/3', 'B. 2/3', 'C. 1/2', 'D. 全部'],
    answer: 'C'
  },
  {
    id: 'single-50',
    type: 'single',
    question: '下述女士的着装中，符合商务礼仪的是（）。',
    options: ['A. 皮裙', 'B. 黑色透肉丝袜', 'C. 超短裙', 'D. 八分西裤'],
    answer: 'D'
  },

  // ========== 多选题 (21-25) ==========
  {
    id: 'multi-21',
    type: 'multi',
    question: '中餐上菜摆盘方位符合礼仪要求的有？',
    options: ['A. 优先上凉菜开胃', 'B. 炒制类家常菜优先于焖炖、煨煮的大菜上桌', 'C. 直接把鱼脊、鸡尾正对贵客摆放', 'D. 上菜时兼顾主宾用餐便利，优先把食材优质部位朝向主位宾客'],
    answer: 'ABD'
  },
  {
    id: 'multi-22',
    type: 'multi',
    question: '商务活动握手需要满足哪些条件？',
    level: 1,
    options: ['A. 晃动力度2斤', 'B. 晃动3-5s', 'C. 男士握女士手只能触碰指腹', 'D. 不能鞠躬'],
    answer: 'ABD'
  },
  {
    id: 'multi-23',
    type: 'multi',
    question: '职场中，微笑一般分为两种类型，其中三度微笑应漏出几颗牙齿？',
    options: ['A. 5', 'B. 6', 'C. 7', 'D. 8'],
    answer: 'BD'
  },
  {
    id: 'multi-24',
    type: 'multi',
    question: '关于办公软件与沟通工具的规范使用，以下说法正确的有？',
    options: ['A. 在发送协同邮件时，若需相关部门领导审批，应确保流程合规', 'B. 在进行视频沟通时，无论是正式场合对接还是一般事务沟通，都应注意保持环境的安静及整洁', 'C. 使用钉钉汇报工作时，重点在于描述详细的过程和困难', 'D. 微信作为常用沟通工具，在使用文字和语音时都应遵循相应的职场礼仪规范'],
    answer: 'ABD'
  },
  {
    id: 'multi-25',
    type: 'multi',
    question: '公务场合下，男士领带最好佩戴什么样式？',
    options: ['A. 纯色', 'B. 复杂几何图形', 'C. 条纹', 'D. 圆点'],
    answer: 'ACD'
  },
    // ========== 判断题 (51-60) ==========
  {
    id: 'judge-51',
    type: 'judge',
    question: '中国移动规划2035年基本建成世界一流科技服务企业。',
    level: 1,
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },
  {
    id: 'judge-52',
    type: 'judge',
    question: '中国移动2025年《财富》世界500强排第58位，位列全球电信运营商首位。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },
  {
    id: 'judge-53',
    type: 'judge',
    question: '1988年首个移动电话诞生。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },
  {
    id: 'judge-54',
    type: 'judge',
    question: '中国移动的企业愿景：建设网络强国、数字中国。',
    level: 1,
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },
  {
    id: 'judge-55',
    type: 'judge',
    question: '中国移动是世界数据组织首届理事单位。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },
  {
    id: 'judge-56',
    type: 'judge',
    question: '党性是政绩观的决定性因素。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },
  {
    id: 'judge-57',
    type: 'judge',
    question: '党建工作只有可量化的“显绩”，不存在凝心聚力的“潜绩”。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },
  {
    id: 'judge-58',
    type: 'judge',
    question: '党性是党员干部立身、立业、立言、立德的基石。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },
  {
    id: 'judge-59',
    type: 'judge',
    question: '以人民为中心的发展思想是正确政绩观的核心要求。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },
  {
    id: 'judge-60',
    type: 'judge',
    question: '北京移动共有30个团组织，其中有1个团委，29个直属团支部（其中包括1个联合团支部）。',
    level: 1,
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },

  // ========== 单选题 (51-60) ==========
  {
    id: 'single-51',
    type: 'single',
    question: '中国移动的奋斗文化氛围是？',
    options: ['A. 团结、务实、高效', 'B. 担当、创新、争先', 'C. 诚信、协作、共赢', 'D. 严谨、细致、卓越'],
    answer: 'B'
  },
  {
    id: 'single-52',
    type: 'single',
    question: 'BrandZ全球品牌价值百强榜中中国移动排名为？',
    level: 1,
    options: ['A. 58位', 'B. 62位', 'C. 10位', 'D. 首位'],
    answer: 'B'
  },
  {
    id: 'single-53',
    type: 'single',
    question: '中国移动核心价值观是？',
    options: ['A. 建设网络强国、数字中国', 'B. 世界一流科技服务企业', 'C. 正德厚生，臻于至善', 'D. 担当、创新、争先'],
    answer: 'C'
  },
  {
    id: 'single-54',
    type: 'single',
    question: '中国移动连续多少年获评中央企业负责人经营业绩考核A级？',
    options: ['A. 6年', 'B. 21年', 'C. 4年', 'D. 20年'],
    answer: 'B'
  },
  {
    id: 'single-55',
    type: 'single',
    question: '中国电信日是？',
    options: ['A. 1月17日', 'B. 5月16日', 'C. 5月17日', 'D. 4月17日'],
    answer: 'C'
  },
  {
    id: 'single-56',
    type: 'single',
    question: '中国移动北京公司共青团公众号是什么？',
    options: ['A. 北移青年', 'B. 北移青峰', 'C. 北移青锋', 'D. 北移共青团'],
    answer: 'C'
  },
  {
    id: 'single-57',
    type: 'single',
    question: '“青锋体验官”专项行动属于公司团委引领青年聚焦岗位建功，在作用发挥上远在前，做的哪一举措？',
    level: 1,
    options: ['A. 深化青年思想铸魂工程', 'B. 引领青年岗位建功活动', 'C. 深化青年创新创效活动', 'D. 深化青年志愿者活动'],
    answer: 'B'
  },
  {
    id: 'single-58',
    type: 'single',
    question: '青年践行正确政绩观要牢固树立的境界是？',
    options: ['A. 功成不必在我、功成必定有我', 'B. 重业务、轻党建', 'C. 只看短期考核', 'D. 重视纸面材料'],
    answer: 'A'
  },
  {
    id: 'single-59',
    type: 'single',
    question: '群团工作室的工作职责是什么？',
    level: 1,
    options: ['A. “服务、支撑、托举”青年员工', 'B. “保障、支持、托举”青年员工', 'C. “服务、支持、托举”青年员工', 'D. “服务、支持、承托”青年员工'],
    answer: 'C'
  },
  {
    id: 'single-60',
    type: 'single',
    question: '在中国通信技术的发展史上，对于通信技术所处代际和中国通信业所处地位的对应错误的一项是？',
    level: 1,
    options: ['A. 1G空白', 'B. 2G跟随', 'C. 3G并跑', 'D. 5G引领'],
    answer: 'C'
  },

  // ========== 多选题 (26-30) ==========
  {
    id: 'multi-26',
    type: 'multi',
    question: '中国移动目前实现“三个全球第一”的规模指标包含？',
    options: ['A. 网络规模', 'B. 客户规模', 'C. 收入规模', 'D. 品牌价值'],
    answer: 'ABC'
  },
  {
    id: 'multi-27',
    type: 'multi',
    question: '中国移动基础体量与经营核心数据，下列表述正确的有？',
    options: ['A. 集团下设所属单位数量超过60家', 'B. 企业员工总数量达到50万人', 'C. 企业年度营运收入为10502亿元', 'D. 全网整体连接规模数量超过39亿个'],
    answer: 'ABCD'
  },
  {
    id: 'multi-28',
    type: 'multi',
    question: '中国移动三大核心主业包括？',
    options: ['A. 通信服务', 'B. 算力服务', 'C. 智能服务', 'D. 金融服务'],
    answer: 'ABC'
  },
  {
    id: 'multi-29',
    type: 'multi',
    question: '陈忠岳董事长2026五四致辞中希望青年？',
    options: ['A. 做信念坚定，胸怀大局的有志青年', 'B. 做勇于创新，锐意进取的有为青年', 'C. 做勤学善思，精益求精的有识青年', 'D. 做实干担当，清正廉洁的有德青年'],
    answer: 'ABCD'
  },
  {
    id: 'multi-30',
    type: 'multi',
    question: '北京移动立足首都“四个中心”战略定位和“四个服务”核心职责。坚持（），全力服务首都发展大局。括号内的四字短语包括？',
    level: 1,
    options: ['A. 首都站位', 'B. 首要职责', 'C. 首善标准', 'D. 首位担当'],
    answer: 'ACD'
  },
    // ========== 判断题 (61-70) ==========
  {
    id: 'judge-61',
    type: 'judge',
    question: '4G开启“万物互联”新模式。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },
  {
    id: 'judge-62',
    type: 'judge',
    question: '5G的三大应用场景是eMBB、URLLC、mMTC。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },
  {
    id: 'judge-63',
    type: 'judge',
    question: 'IMSI码与IMEI码都有15位。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },
  {
    id: 'judge-64',
    type: 'judge',
    question: 'IMSI的码从左到右前两位代表国家，其次紧挨着两位代表运营商。',
    level: 1,
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },
  {
    id: 'judge-65',
    type: 'judge',
    question: 'MSISDN即移动台国际ISDN号码，就是公众日常使用的手机号码。',
    level: 1,
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },
  {
    id: 'judge-66',
    type: 'judge',
    question: '4G系统的控制面与承载面不做分离设计。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },
  {
    id: 'judge-67',
    type: 'judge',
    question: '手机号码欠费停机状态下，依旧可以向10086发起视频通话。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },
  {
    id: 'judge-68',
    type: 'judge',
    question: 'IMSI是国际移动设备识别码。',
    level: 1,
    options: ['A. 正确', 'B. 错误'],
    answer: 'B'
  },
  {
    id: 'judge-69',
    type: 'judge',
    question: '智慧路灯是物联网的应用场景。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },
  {
    id: 'judge-70',
    type: 'judge',
    question: 'NB-IoT 是由 3GPP 定义的基于蜂窝网络的窄带物联网技术。',
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  },

  // ========== 单选题 (61-71) ==========
  {
    id: 'single-61',
    type: 'single',
    question: 'CHBN中B代表？',
    options: ['A. 个人', 'B. 家庭', 'C. 政企', 'D. 新兴业务'],
    answer: 'C'
  },
  {
    id: 'single-62',
    type: 'single',
    question: '可以在4G网络直接打电话、同时上网的方案是？',
    options: ['A. 单卡双待方案', 'B. CSFB方案', 'C. VoLTE方案', 'D. 2G纯语音方案'],
    answer: 'C'
  },
  {
    id: 'single-63',
    type: 'single',
    question: 'IMSI国际移动用户识别码一共有多少位？',
    options: ['A. 11位', 'B. 15位', 'C. 13位', 'D. 18位'],
    answer: 'B'
  },
  {
    id: 'single-64',
    type: 'single',
    question: '5G对应的无线空口缩写是？',
    level: 1,
    options: ['A. GSM', 'B. LTE', 'C. NR', 'D. CDMA'],
    answer: 'C'
  },
  {
    id: 'single-65',
    type: 'single',
    question: 'VoLTE对应的中文含义是？',
    options: ['A. 窄带物联网', 'B. 高清语音', 'C. 网络功能虚拟化', 'D. 归属签约用户服务器'],
    answer: 'B'
  },
  {
    id: 'single-66',
    type: 'single',
    question: '在2G核心网中，CS域与PS域分工明确，负责传统语音通话业务的是？',
    level: 1,
    options: ['A. PS域', 'B. CS域', 'C. 应用域', 'D. 终端域'],
    answer: 'B'
  },
  {
    id: 'single-67',
    type: 'single',
    question: '物联网总体网络架构自上而下层级排序正确的是？',
    level: 1,
    options: ['A. 应用层→网络层→平台层→终端层', 'B. 终端层→网络层→平台层→应用层', 'C. 应用层→平台层→网络层→终端层', 'D. 平台层→应用层→网络层→终端层'],
    answer: 'C'
  },
  {
    id: 'single-68',
    type: 'single',
    question: '下列不属于5G三大核心技术特点的是？',
    options: ['A. 超高带宽', 'B. 超低时延', 'C. 海量连接', 'D. 传输距离无限'],
    answer: 'D'
  },
  {
    id: 'single-69',
    type: 'single',
    question: '下列哪个缩写代表“窄带物联网”？',
    options: ['A. IMSI', 'B. NFV', 'C. HSS/UDM', 'D. NB-IOT'],
    answer: 'D'
  },
  {
    id: 'single-70',
    type: 'single',
    question: '在携号转网的组网架构中，负责存储三家运营商用户携入、携出信息的系统是？',
    level: 1,
    options: ['A. 集团SMS/SOA/BOSS', 'B. CSMS (集中业务管理系统)', 'C. 彩信ENUM/DNS', 'D. NP MSC'],
    answer: 'B'
  },
  {
    id: 'single-71',
    type: 'single',
    question: 'HSS/UDM 在通信网络中的中文名称是？',
    options: ['A. 窄带物联网', 'B. 网络功能虚拟化', 'C. 归属签约用户服务器', 'D. 高清语音'],
    answer: 'C'
  },

  // ========== 多选题 (31-34) ==========
  {
    id: 'multi-31',
    type: 'multi',
    question: '完整移动通信网络的组成部分包含？',
    options: ['A. 无线网', 'B. 传输网', 'C. 核心网', 'D. 承载网'],
    answer: 'ABCD'
  },
  {
    id: 'multi-32',
    type: 'multi',
    question: 'NB-IoT具备四大核心优势，分别是？',
    options: ['A. 海量连接', 'B. 深度覆盖', 'C. 低功耗', 'D. 低成本'],
    answer: 'ABCD'
  },
  {
    id: 'multi-33',
    type: 'multi',
    question: '5G包含三大典型应用场景，分别是？',
    options: ['A. eMBB（增强移动宽带）', 'B. mMTC（海量物联）', 'C. uRLLC（高可靠低时延连接）', 'D. IMT-2020'],
    answer: 'ABC'
  },
  {
    id: 'multi-34',
    type: 'multi',
    question: '对比4G，5G（IMT-2020）在网络能力上实现全面跃升，下列属于5G关键性能指标的有？',
    options: ['A. 下行峰值速率20Gbps，上行峰值速率10Gbps', 'B. 空口时延可低至0.5ms（uRLLC用户面）', 'C. 连接数密度达到100万终端/km²', 'D. 移动性最高支持500km/h'],
    answer: 'ABCD'
  }
];

export default questions;