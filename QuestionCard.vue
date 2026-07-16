<!-- src/components/QuestionCard.vue -->
<template>
  <div class="question-card" v-if="question">
    <p class="q-title">{{ index + 1 }}. {{ question.question }}</p>
    <div class="options">
      <div 
        v-for="(opt, idx) in question.options" 
        :key="idx"
        class="option-item"
        :class="{ 
          selected: userAnswer.includes(opt.charAt(0)), 
          // 核心修复：将 answer 字符串转为数组，再判断当前选项字母是否在其中
          correct: showResult && question.answer.split('').includes(opt.charAt(0)), 
          wrong: showResult && userAnswer.includes(opt.charAt(0)) && !question.answer.split('').includes(opt.charAt(0)) 
        }"
        @click="selectOption(opt.charAt(0))"
      >
        {{ opt }}
      </div>
    </div>
    <div v-if="showResult" class="result-tip">
      <span :class="isCorrect ? 'text-green' : 'text-red'">
        {{ isCorrect ? '✅ 回答正确' : '❌ 回答错误' }}
      </span>
      <span v-if="!isCorrect">，正确答案：{{ question.answer }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  question: Object,
  index: Number,
  userAnswer: String,
  showResult: Boolean
});

const emit = defineEmits(['update:userAnswer']);

const isCorrect = computed(() => props.userAnswer === props.question.answer);

const selectOption = (letter) => {
  if (props.showResult) return; // 结果展示后禁止修改
  if (props.question.type === 'multi') {
    // 多选题逻辑
    let ans = props.userAnswer || '';
    if (ans.includes(letter)) {
      ans = ans.replace(letter, '');
    } else {
      ans += letter;
    }
    emit('update:userAnswer', ans.split('').sort().join(''));
  } else {
    // 单选/判断逻辑
    emit('update:userAnswer', letter);
  }
};
</script>

<style scoped>
.question-card { margin-bottom: 15px; padding: 10px; border: 1px solid #eee; border-radius: 8px; }
.q-title { font-weight: bold; margin-bottom: 10px; }
.option-item { padding: 8px 12px; margin: 5px 0; border: 1px solid #ddd; border-radius: 4px; cursor: pointer; transition: 0.2s; }
.option-item:hover { background: #f9f9f9; }
.selected { background: #e6f7ff; border-color: #1890ff; }
.correct { background: #f6ffed; border-color: #52c41a; }
.wrong { background: #fff2f0; border-color: #ff4d4f; }
.result-tip { margin-top: 10px; font-size: 14px; }
.text-green { color: #52c41a; font-weight: bold; }
.text-red { color: #ff4d4f; font-weight: bold; }
</style>