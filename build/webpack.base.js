// 使用node的path模块
const path = require("path");

// 引入vue-loader插件
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  // 打包的出口
  // devServer配置
  devtool: "inline-source-map",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
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
          limit: 2048 //当文件小于 2048byte 时, 以 base64 打包到 js 中, 当文件大于 2048byte 时, 使用 file-loader 打包
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.styl(us)?$/,
        use: ["style-loader", "css-loader", "postcss-loader", "stylus-loader"]
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ],
  resolve: {
    alias: {
      vue: "vue/dist/vue.js"
    }
  }
};
