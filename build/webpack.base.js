// 使用node的path模块
const path = require("path");
const webpack = require("webpack");

// 引入vue-loader插件
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/main.js",
    first: './src/first.js',
    second: './src/second.js',
    // vendor: Object.keys(packagejson.dependencies)
  },
  // 打包的出口

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "..", "dist"),
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: "vue-loader",
      },
      // 图片必须引入才会被打包  以http形式
      // {
      //   test: /\.(jpg|jpeg|png|svg)$/,
      //   loader: "file-loader",
      //   options: {   // 使文件保存原名
      //     name: "[name].[ext]",
      //   },
      // },

      //url-loader 直接将小图片打包以 base64 打包在 js 中, 减少 Http 请求的次数, 提高访问效率
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        loader: "url-loader",
        options: {
          esModule: false,
          name: "[name].[ext]",
          limit: 2048, //当文件小于 2048byte 时, 以 base64 打包到 js 中, 当文件大于 2048byte 时, 使用 file-loader 打包
        },
      },

      // 加载字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.styl(us)?$/,
        use: ["style-loader", "css-loader", "postcss-loader", "stylus-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      //数据文件引入
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"],
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"],
      },
    ],
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
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
  resolve: {
    alias: {
      vue: "vue/dist/vue.js",
    },
  },
};