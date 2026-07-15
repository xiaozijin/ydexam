<template>
  <div class="practice-container">
    <h2>套卷训练</h2>
    <p class="tip">40单+40判+20多，交卷出分</p>
    <div v-if="!finished">
      <p>当前进度：{{ userAnswers.filter(a => a).length }} / 100</p>
      <div class="scroll-area">
        <QuestionCard 
          v-for="(q, idx) in questions" :key="q.id" 
          :question="q" :index="idx" 
          v-model:userAnswer="userAnswers[idx]" :showResult="false" 
        />
      </div>
      <button @click="submit">交卷</button>
    </div>
    <div v-else>
      <h2>得分：{{ score }} 分</h2>
      <div class="scroll-area">
        <QuestionCard 
          v-for="(q, idx) in questions" :key="q.id" 
          :question="q" :index="idx" 
          :userAnswer="userAnswers[idx]" :showResult="true" 
        />
      </div>
      <button @click="init">重新考试</button>
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
const score = ref(0);

const init = () => {
  questions.value = getRandomQuestions(100, { single: 40, judge: 40, multi: 20 });
  userAnswers.value = new Array(100).fill('');
  finished.value = false;
  score.value = 0;
};

const submit = () => {
  let s = 0;
  questions.value.forEach((q, idx) => {
    if (userAnswers.value[idx] === q.answer) s++;
  });
  score.value = s;
  finished.value = true;
};

onMounted(init);
</script>

<style scoped>
.practice-container { max-width: 800px; margin: 0 auto; padding: 20px; }
.tip { font-size: 14px; color: #888; margin-bottom: 15px; }
.scroll-area { max-height: 60vh; overflow-y: auto; margin-bottom: 10px; }
button { margin-top: 20px; padding: 10px 20px; background: #1890ff; color: #fff; border: none; border-radius: 4px; cursor: pointer; }
</style>