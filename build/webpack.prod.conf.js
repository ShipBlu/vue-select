const TerserPlugin = require('terser-webpack-plugin')
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

module.exports = merge(baseWebpackConfig, {
  entry: './src/index.js',
  output: {
    filename: 'shipblu-vue-select.js',
    library: 'ShipbluVueSelect',
    libraryTarget: 'umd',
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
})
