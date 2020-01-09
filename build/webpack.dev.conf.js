const baseWebpackConfig = require("./webpack.base.conf")
const merge = require("webpack-merge")
// 开发环境下，要把样式通过 style-loader 加在 html 模板上
// 而且感觉 style-loader 和 webpack-dev-server 可以完美配合使用
module.exports = merge(baseWebpackConfig, {
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  devServer: {
    hot: true,
    host: 'localhost',
    port: '7000',
    watchContentBase: true,
    compress: true
  }
})