const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://warcraftbroker.com/',
        ws: true,
        changeOrigin: true
      },
    }
  },
  transpileDependencies: true
})
