const CopyPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require("path")

module.exports = {
  context: path.resolve(__dirname, "src"),
  // context позволяет писать "./index" вместо "./src/index"
  entry: "./index",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  // можно импортировать без расширения
  resolve: {
    extensions: [".js"]
  },
  plugins: [
    // плагин для копирования статических файлов
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public/favicon.ico"),
          to: path.resolve(__dirname, "dist")
        }
      ]
    }),
    // чтобы не подключать сгенерировнные скрипты в html
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html")
    }),
    // выносит стили при сборке в отдельный файл
    new MiniCssExtractPlugin()
  ],
  module: {
    // правила работы с различными расширениями
    rules: [
      {
        test: /\.s?css$/i,
        // обработка файла идет справа налево
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpg|svg|mp3)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[hash][ext][query]"
        }
      },
      {
        test: /\.ttf$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext][query]"
        }
      }
    ]
  }
}
