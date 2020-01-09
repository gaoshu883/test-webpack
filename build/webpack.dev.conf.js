const baseWebpackConfig = require("./webpack.base.conf")
const merge = require("webpack-merge")

module.exports = merge(baseWebpackConfig, {
  devServer: {
    hot: true,
    host: 'localhost',
    port: '7000',
    watchContentBase: true,
    compress: true
  }
})