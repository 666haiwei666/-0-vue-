const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const ManifestPlugin = require("webpack-manifest-plugin");
const webpack = require("webpack");
const packagejson = require('..//package.json')
const prodConfig = {
  // 模式
  mode: "production",
  entry: {
    vendor: Object.keys(packagejson.dependencies) //获取生产环境依赖的库
  },
  plugins: [
    new ManifestPlugin(),
    new webpack.optimize.SplitChunksPlugin({
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
        //打包重复出现的代码
        vendor: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5, // The default limit is too small to showcase the effect
          minSize: 0, // This is example is too small to create commons chunks
          name: 'vendor'
        },
        //打包第三方类库
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: Infinity
        }
      }
    })
  ],
};

module.exports = merge(baseConfig, prodConfig);