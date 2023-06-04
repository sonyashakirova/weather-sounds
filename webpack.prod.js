const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin")
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
      new TerserPlugin(),
      // оптимизирует картинки
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["jpegtran", { progressive: true }],
              ["svgo",  { name: "preset-default" }]
            ]
          }
        }
      })
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
