const webpack = require('webpack');
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const ManifestPlugin = require('webpack-manifest-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const prodConfig = {
  // 模式
  mode: "production",
  devtool: "inline-source-map",
  plugins: [
    new ManifestPlugin({
      fileName: 'manifest.json',
      basePath: './',
    }),
    // uglifyJsPlugin 用来对js文件进行压缩，从而减小js文件的大小，加速load速度。
    // uglifyJsPlugin会拖慢webpack的编译速度，所有建议在开发简单将其关闭，部署的时候再将其打开。
    new UglifyJsPlugin({
      sourceMap: true,
      uglifyOptions: {
        ie8: true,
        ecma: 8,
        warnings: false,
      },
    }),
    // 配置环境变量
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify('production')
    // })
  ],
};

module.exports = merge(baseConfig, prodConfig);