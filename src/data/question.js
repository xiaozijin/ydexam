// src/data/questions.js
const questions = [];

// 生成 20 道单选题 (2N, N=10)
for (let i = 1; i <= 20; i++) {
  questions.push({
    id: `single-${i}`,
    type: 'single',
    question: `【单选题】这是第 ${i} 道单选题的题目内容？`,
    options: ['A. 选项一', 'B. 选项二', 'C. 选项三', 'D. 选项四'],
    answer: 'A'
  });
}

// 生成 20 道判断题 (2N, N=10)
for (let i = 1; i <= 20; i++) {
  questions.push({
    id: `judge-${i}`,
    type: 'judge',
    question: `【判断题】这是第 ${i} 道判断题的题目内容？`,
    options: ['A. 正确', 'B. 错误'],
    answer: 'A'
  });
}

// 生成 10 道多选题 (N, N=10)
for (let i = 1; i <= 10; i++) {
  questions.push({
    id: `multi-${i}`,
    type: 'multi',
    question: `【多选题】这是第 ${i} 道多选题的题目内容？`,
    options: ['A. 选项一', 'B. 选项二', 'C. 选项三', 'D. 选项四'],
    answer: 'AB'
  });
}

export default questions;