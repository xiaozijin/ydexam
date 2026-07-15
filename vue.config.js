const { defineConfig } = require('@vue/cli-service')
const path = require('path') // 引入 path 模块

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src') // 配置 @ 指向 src 目录
      }
    }
  }
})