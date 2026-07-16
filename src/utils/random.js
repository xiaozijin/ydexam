// src/utils/random.js
import questions from '../data/question.js';

/**
 * 从题库中随机抽取指定数量的题目
 * @param {Number} count 抽取数量
 * @param {Object} filter 过滤条件 { single: 40, judge: 40, multi: 20 }
 */
export function getRandomQuestions(count, filter = null) {
  let pool = [...questions];

  if (filter) {
    // 1. 优先按 level 过滤（必须在清空数组之前执行，且基于完整题库）
    if (filter.level !== undefined) {
      pool = pool.filter(q => (q.level || 0) === filter.level);
    }

    // 2. 如果指定了按题型抽取（用于套卷训练）
    if (filter.single || filter.judge || filter.multi) {
      let typePool = [];
      if (filter.single) typePool.push(...questions.filter(q => q.type === 'single'));
      if (filter.judge) typePool.push(...questions.filter(q => q.type === 'judge'));
      if (filter.multi) typePool.push(...questions.filter(q => q.type === 'multi'));
      pool = typePool;
    }
  }

  // 洗牌算法 (Fisher-Yates)
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  return pool.slice(0, count);
}