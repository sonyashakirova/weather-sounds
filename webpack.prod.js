const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const { merge } =  require("webpack-merge")
const commonConfig = require("./webpack.common")

module.exports = merge(commonConfig, {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      // оптимизирует css
      new CssMinimizerPlugin(),
      // оптимизирует js
      new TerserPlugin()
    ],
    // выносит node_modules в отдельный файл
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          chunks: "all",
          name: "vendor",
          test: /node_modules/
        }
      }
    }
  }
})
