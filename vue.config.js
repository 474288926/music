const path = require('path');

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {'^/api' : ''}
      }
    }
  },
  
  pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'less',
        patterns: [
          path.resolve(__dirname, './src/assets/common/global.less')
        ]
      }
    }

}
 