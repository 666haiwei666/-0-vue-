const webpack = require('webpack')
const path = require("path");
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
process.env.NODE_ENV='development'
const devConfig = {
  // 模式
  mode: 'development',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, "..", "dist"),
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    // 指定服务器根目录
    contentBase: './dist',
    // 自动打开浏览器
    open: true,
    // 启用热模块替换
    hot: true,
    compress:true,
    port:3000
  },
  // 插件

  // 模块热替换
  plugins: [new webpack.HotModuleReplacementPlugin()]
}

module.exports = merge(baseConfig, devConfig)
