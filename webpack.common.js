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
  }
}
