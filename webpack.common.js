const CopyPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
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
    })
  ]
}
