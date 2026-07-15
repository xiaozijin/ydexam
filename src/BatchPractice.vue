<template>
  <div class="practice-container">
    <h2>单次训练</h2>
    <p class="tip">随机25题，做完统一看结果</p>
    <div v-if="!finished">
      <QuestionCard 
        v-for="(q, idx) in questions" :key="q.id" 
        :question="q" :index="idx" 
        v-model:userAnswer="userAnswers[idx]" :showResult="false" 
      />
      <button @click="finished = true">提交训练</button>
    </div>
    <div v-else>
      <QuestionCard 
        v-for="(q, idx) in questions" :key="q.id" 
        :question="q" :index="idx" 
        :userAnswer="userAnswers[idx]" :showResult="true" 
      />
      <button @click="init">重新训练</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getRandomQuestions } from './utils/random';
import QuestionCard from './components/QuestionCard.vue';

const questions = ref([]);
const userAnswers = ref([]);
const finished = ref(false);

const init = () => {
  questions.value = getRandomQuestions(25);
  userAnswers.value = new Array(25).fill('');
  finished.value = false;
};

onMounted(init);
</script>

<style scoped>
.practice-container { max-width: 800px; margin: 0 auto; padding: 20px; }
.tip { font-size: 14px; color: #888; margin-bottom: 15px; }
button { margin-top: 20px; padding: 10px 20px; background: #1890ff; color: #fff; border: none; border-radius: 4px; cursor: pointer; }
</style>