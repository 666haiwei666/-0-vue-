// 导入webpack
const webpack = require("webpack");

const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");


const devConfig = {
  mode: "development",
  // devServer配置
  devtool: "inline-source-map",
  devServer: {
    // 指定服务器根目录
    contentBase: "./dist",
    // 自动打开浏览器
    open: true,
    // 启用热模块替换
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(), // 以便更容易查看要修补(patch)的依赖
    new webpack.HotModuleReplacementPlugin(),
  ]
};
module.exports = merge(baseConfig, devConfig);