<template>
  <div class="practice-container">
    <h2>一题一练</h2>
    <p class="tip">随机25题，答完即显对错</p>
    
    <QuestionCard 
      v-if="currentQuestion" 
      :question="currentQuestion" 
      :index="currentIndex" 
      v-model:userAnswer="userAns" 
      :showResult="showResult" 
    />
    
    <!-- 动态按钮文案：未确认答案时显示“确认答案”，确认后显示“下一题” -->
    <button 
      class="action-btn" 
      @click="nextQuestion" 
      :disabled="currentIndex >= 24 && showResult"
    >
      {{ showResult ? '下一题' : '确认答案' }}
    </button>
    
    <!-- 最后一题确认答案后的提示 -->
    <p v-if="currentIndex >= 24 && showResult" class="finish-tip">练习结束！</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getRandomQuestions } from './utils/random';
import QuestionCard from './components/QuestionCard.vue';

const questions = ref([]);
const currentIndex = ref(0);
const currentQuestion = ref(null);
const userAns = ref('');
const showResult = ref(false);

const init = () => {
  questions.value = getRandomQuestions(25);
  currentIndex.value = 0;
  currentQuestion.value = questions.value[0];
  userAns.value = '';
  showResult.value = false;
};

const nextQuestion = () => {
  // 1. 如果还没显示答案，点击时只切换显示答案状态
  if (!showResult.value) {
    showResult.value = true;
    return; // 直接返回，不执行后面的切题逻辑
  }

  // 2. 如果已经显示了答案，再次点击才真正切换到下一题
  if (currentIndex.value < 24) {
    currentIndex.value++;
    currentQuestion.value = questions.value[currentIndex.value];
    userAns.value = '';
    showResult.value = false; // 重置状态，准备做下一题
  } 
};

onMounted(init);
</script>

<style scoped>
.practice-container { 
  max-width: 800px; 
  margin: 0 auto; 
  padding: 20px; 
}
.tip { 
  font-size: 14px; 
  color: #888; 
  margin-bottom: 15px; 
}
.action-btn { 
  margin-top: 20px; 
  padding: 10px 20px; 
  background: #1890ff; 
  color: #fff; 
  border: none; 
  border-radius: 4px; 
  cursor: pointer; 
  font-size: 16px;
}
.action-btn:hover { 
  background: #40a9ff; 
}
.action-btn:disabled { 
  background: #ccc; 
  cursor: not-allowed; 
}
.finish-tip {
  margin-top: 15px;
  color: #52c41a;
  font-weight: bold;
}
</style>