<!-- src/views/HardLevelView.vue -->
<template>
  <div class="hard-level-container">
    <div class="header">
      <h2>🔥 难度题训练</h2>
      <p class="tip">共10道高难度题，逐题作答并即时反馈</p>
    </div>
    
    <div v-if="questions.length > 0" class="question-area">
      <QuestionCard 
        :question="currentQuestion" 
        :index="currentIndex" 
        v-model:userAnswer="userAnswers[currentIndex]" 
        :showResult="showResult" 
      />
      
      <div class="action-bar">
        <button v-if="!showResult" @click="checkAnswer" :disabled="!userAnswers[currentIndex]">
          确认答案
        </button>
        <button v-else @click="nextQuestion">
          {{ currentIndex < questions.length - 1 ? '下一题' : '查看总结' }}
        </button>
      </div>
    </div>

    <div v-else class="empty-tip">
      <p>暂无高难度题目，请检查题库数据。</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { getRandomQuestions } from '../src/utils/random.js';
import QuestionCard from '../src/components/QuestionCard.vue';

const questions = ref([]);
const userAnswers = ref([]);
const currentIndex = ref(0);
const showResult = ref(false);

const currentQuestion = computed(() => questions.value[currentIndex.value]);

const init = () => {
  // 随机抽取10道 level 为 1 的题目
  questions.value = getRandomQuestions(10, { level: 1 });
  userAnswers.value = new Array(10).fill('');
  currentIndex.value = 0;
  showResult.value = false;
};

console.log('抽到的难题数量:', questions.value.length);

const checkAnswer = () => {
  showResult.value = true;
};

const nextQuestion = () => {
  if (currentIndex.value < questions.value.length - 1) {
    currentIndex.value++;
    showResult.value = false;
  } else {
    // 这里可以跳转到总结页或显示最终得分
    alert(`训练结束！您完成了 ${questions.value.length} 道难度题。`);
    // 或者重新初始化：init();
  }
};

onMounted(() => {
  init();
});
</script>

<style scoped>
.hard-level-container { max-width: 800px; margin: 0 auto; padding: 20px; }
.header { margin-bottom: 20px; }
.tip { font-size: 14px; color: #888; }
.question-area { display: flex; flex-direction: column; gap: 20px; }
.action-bar { margin-top: 20px; display: flex; justify-content: flex-end; }
button { padding: 12px 24px; background: #1890ff; color: #fff; border: none; border-radius: 4px; cursor: pointer; font-size: 16px; }
button:hover:not(:disabled) { background: #40a9ff; }
button:disabled { background: #ccc; cursor: not-allowed; }
.empty-tip { text-align: center; padding: 40px; color: #999; }
</style>