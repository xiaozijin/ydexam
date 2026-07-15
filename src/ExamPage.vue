<!-- src/App.vue -->
<template>
  <div class="app-container">
    <!-- 左侧：一题一练 -->
    <div class="panel">
      <h3>一题一练</h3>
      <p class="tip">随机25题，答完即显对错</p>
      <QuestionCard 
        v-if="singleCurrent" 
        :question="singleCurrent" 
        :index="singleIndex" 
        v-model:userAnswer="singleUserAns" 
        :showResult="singleShowResult" 
      />
      <button @click="nextSingle" :disabled="singleIndex >= 24">下一题</button>
      <p v-if="singleIndex >= 24 && singleShowResult">练习结束！</p>
    </div>

    <!-- 中间：单次训练 -->
    <div class="panel">
      <h3>单次训练</h3>
      <p class="tip">随机25题，做完统一看结果</p>
      <div v-if="!batchFinished">
        <QuestionCard 
          v-for="(q, idx) in batchQuestions" 
          :key="q.id" 
          :question="q" 
          :index="idx" 
          v-model:userAnswer="batchUserAnswers[idx]" 
          :showResult="false" 
        />
        <button @click="submitBatch">提交训练</button>
      </div>
      <div v-else>
        <QuestionCard 
          v-for="(q, idx) in batchQuestions" 
          :key="q.id" 
          :question="q" 
          :index="idx" 
          :userAnswer="batchUserAnswers[idx]" 
          :showResult="true" 
        />
        <button @click="initBatch">重新训练</button>
      </div>
    </div>

    <!-- 右侧：套卷训练 -->
    <div class="panel">
      <h3>套卷训练</h3>
      <p class="tip">40单+40判+20多，交卷出分</p>
      <div v-if="!examFinished">
        <p>当前进度：{{ examUserAnswers.filter(a => a).length }} / 100</p>
        <div class="scroll-area">
          <QuestionCard 
            v-for="(q, idx) in examQuestions" 
            :key="q.id" 
            :question="q" 
            :index="idx" 
            v-model:userAnswer="examUserAnswers[idx]" 
            :showResult="false" 
          />
        </div>
        <button @click="submitExam">交卷</button>
      </div>
      <div v-else>
        <h2>得分：{{ examScore }} 分</h2>
        <div class="scroll-area">
          <QuestionCard 
            v-for="(q, idx) in examQuestions" 
            :key="q.id" 
            :question="q" 
            :index="idx" 
            :userAnswer="examUserAnswers[idx]" 
            :showResult="true" 
          />
        </div>
        <button @click="initExam">重新考试</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getRandomQuestions } from './utils/random';
import QuestionCard from './components/QuestionCard.vue';

// --- 一题一练逻辑 ---
const singleQuestions = ref([]);
const singleIndex = ref(0);
const singleCurrent = ref(null);
const singleUserAns = ref('');
const singleShowResult = ref(false);

const initSingle = () => {
  singleQuestions.value = getRandomQuestions(25);
  singleIndex.value = 0;
  singleCurrent.value = singleQuestions.value[0];
  singleUserAns.value = '';
  singleShowResult.value = false;
};

const nextSingle = () => {
  if (singleIndex.value < 24) {
    singleIndex.value++;
    singleCurrent.value = singleQuestions.value[singleIndex.value];
    singleUserAns.value = '';
    singleShowResult.value = false;
  } else {
    singleShowResult.value = true;
  }
};

// --- 单次训练逻辑 ---
const batchQuestions = ref([]);
const batchUserAnswers = ref([]);
const batchFinished = ref(false);

const initBatch = () => {
  batchQuestions.value = getRandomQuestions(25);
  batchUserAnswers.value = new Array(25).fill('');
  batchFinished.value = false;
};

const submitBatch = () => {
  batchFinished.value = true;
};

// --- 套卷训练逻辑 ---
const examQuestions = ref([]);
const examUserAnswers = ref([]);
const examFinished = ref(false);
const examScore = ref(0);

const initExam = () => {
  examQuestions.value = getRandomQuestions(100, { single: 40, judge: 40, multi: 20 });
  examUserAnswers.value = new Array(100).fill('');
  examFinished.value = false;
  examScore.value = 0;
};

const submitExam = () => {
  let score = 0;
  examQuestions.value.forEach((q, idx) => {
    if (examUserAnswers.value[idx] === q.answer) score++;
  });
  examScore.value = score;
  examFinished.value = true;
};

// 初始化
onMounted(() => {
  initSingle();
  initBatch();
  initExam();
});
</script>

<style>
/* 全局样式 */
body { margin: 0; font-family: sans-serif; }
.app-container { display: flex; height: 100vh; box-sizing: border-box; }
.panel { flex: 1; padding: 20px; border-right: 1px solid #eee; display: flex; flex-direction: column; overflow-y: auto; }
.panel:last-child { border-right: none; }
h3 { margin: 0 0 5px; }
.tip { font-size: 12px; color: #888; margin-bottom: 15px; }
button { margin-top: auto; padding: 10px; background: #1890ff; color: #fff; border: none; border-radius: 4px; cursor: pointer; }
button:hover { background: #40a9ff; }
button:disabled { background: #ccc; cursor: not-allowed; }
.scroll-area { flex: 1; overflow-y: auto; margin-bottom: 10px; padding-right: 5px; }
</style>