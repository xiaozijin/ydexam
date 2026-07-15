<template>
  <div class="home-container">
    <h1 class="title">在线考试系统</h1>
    <p class="subtitle">请选择训练模式开始学习</p>
    
    <div class="mode-group">
      <div class="mode-card">
        <h2>一题一练</h2>
        <p class="desc">每次专注攻克一道题，适合碎片化时间快速练习。</p>
        <!-- 注意：直接写 goToExam，千万不要写 this.goToExam -->
        <button class="action-btn" @click="goToExam('single')">进入练习</button>
      </div>

      <div class="mode-card">
        <h2>单次训练</h2>
        <p class="desc">按题型或知识点进行专项强化训练。</p>
        <button class="action-btn" @click="goToExam('batch')">开始训练</button>
      </div>

      <div class="mode-card">
        <h2>套卷训练</h2>
        <p class="desc">全真模拟测试，检验阶段性学习成果。</p>
        <button class="action-btn" @click="goToExam('paper')">开始考试</button>
      </div>
    </div>
  </div>
</template>

<!-- 关键：必须是 <script setup>，不能只是 <script> -->
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToExam = (mode) => {
  router.push({ name: mode });
}
</script>

<style scoped>
/* 你的样式代码 */
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}
.mode-group {
  display: flex;
  gap: 30px;
  margin-top: 30px;
}
.mode-card {
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  width: 220px;
}
.action-btn {
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>