<template>
  <div class="home-container">
    <h1 class="title">2班出品，通过无忧</h1>
    <p class="subtitle">请选择训练模式开始学习</p>
    
    <div class="mode-group">
      <div class="mode-card">
        <h2>一题一练</h2>
        <p class="desc">一题一反馈。</p>
        <button class="action-btn" @click="goToExam('single')">进入练习</button>
      </div>

      <div class="mode-card">
        <h2>单次训练</h2>
        <p class="desc">25题一次速通。</p>
        <button class="action-btn" @click="goToExam('batch')">开始训练</button>
      </div>

      <div class="mode-card">
        <h2>套卷训练</h2>
        <p class="desc">100分，说的是你。</p>
        <button class="action-btn" @click="goToExam('paper')">开始考试</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToExam = (mode) => {
  router.push({ name: mode });
}
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* 使用 min-height 防止内容过多时撑破布局 */
  text-align: center;
  padding: 20px; /* 增加内边距，防止手机端文字贴边 */
  box-sizing: border-box;
}

.title {
  font-size: 28px;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
}

/* 电脑端：左中右横向排列 */
.mode-group {
  display: flex;
  gap: 30px;
}

.mode-card {
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.action-btn {
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.action-btn:hover {
  background-color: #38a373;
}

/* 移动端适配：当屏幕宽度小于 768px 时，卡片改为纵向排列 */
@media (max-width: 768px) {
  .mode-group {
    flex-direction: column; /* 改为垂直排列 */
    align-items: center;
    gap: 20px;
    width: 100%;
  }

  .mode-card {
    width: 100%; /* 卡片宽度占满父容器 */
    max-width: 350px; /* 限制最大宽度，防止在平板上拉得太宽 */
  }

  .title {
    font-size: 24px;
  }
}
</style>