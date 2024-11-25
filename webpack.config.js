const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash:8].js',
    clean: true
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      inject: 'body',
      scriptLoading: 'blocking'
    })
  ],
  devServer: {
    port: '8080', // 开启的端口号，一般是 8080
    hot: true, // 是否启用 webpack 的 Hot Module Replacement 功能，也就是模块热替换
    stats: 'errors-only', // 终端仅打印 error
    compress: true // 是否启用 gzip 压缩
  }
}
