const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy: {
      '^/info': {
        target: 'https://warcraftbroker.com/',
        ws: true,
        changeOrigin: true
      },
      '^/api': {
        target: 'https://warcraftbroker.com/',
        ws: true,
        changeOrigin: true
      },
      '^/auth': {
        target: 'https://warcraftbroker.com/',
        ws: true,
        changeOrigin: true
      },
      '^/logout': {
        target: 'https://warcraftbroker.com/',
        ws: true,
        changeOrigin: true
      },
    }
  },
  transpileDependencies: true
})
