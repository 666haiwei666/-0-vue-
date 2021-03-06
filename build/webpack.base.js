// 使用node的path模块
const path = require("path");
// 引入vue-loader插件
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");

module.exports = {
  // 打包的入口
  entry: {
    main: "./main.js", //以test目录为路径
    first: './src/first.js',
    second: './src/seconds.js',
  },
  // // 打包的出口
  // output: {
  //   filename: '[name].[hash].js',
  //   path: path.resolve(__dirname, "..", "dist"),
  // },
  devtool: "inline-source-map",
  module: {
    rules: [{
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',  // 优先执行
        include: [resolve('src'), resolve('test')],
        options: {
          limit: 10000,
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 不检测node-modules
        loader: "babel-loader",
        options:{
          //开启babel 缓存
          // 第二次构建会读取之前的缓存 
          cacheDirectory:true,
          // limit: 10000,
        }
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        loader: "url-loader",
        options: {
          name: "images/[name]_[hash:7].[ext]",
          limit: 2048,
          // outputPath: "/images",
          // publicPath: "/images/",
          esModule: false, // 解决[object Module]
        },
      },
      {
        test: /\.css$/,
        use: [{
            loader: MiniCssExtractPlugin.loader,
            options: {
              // 这里可以指定一个 publicPath
              // 默认使用 webpackOptions.output中的publicPath
              publicPath: "../",
              limit: 10000,
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "less-loader",
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.styl$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "stylus-loader",
          },
        ],
      },
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"],
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"],
      },
      {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader",
        options: {
          limit: 10000,
          name: "fonts/[name].[hash:7].[ext]",
        },
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
      minify: {
        // 移除注释
        removeComments: true,
        // 移除空格
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
    }),
    new MiniCssExtractPlugin({
      filename: "assets/main.css",
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorPluginOptions: {
        preset: [
          "default",
          {
            discardComments: {
              removeAll: true,
            },
          },
        ],
      },
      canPrint: true,
    }),
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
  ],
  resolve: {
    alias: {
      vue: "vue/dist/vue.js",
    },
  },
};
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}