'use strict'

const path = require('path')

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const HtmlWebpackConfig = {
  template: './src/index.html'
}

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: { esModule: false }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(HtmlWebpackConfig),
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      '@': path.resolve(__dirname, 'src')
    }
  },
  devServer: {
    historyApiFallback: true
  }
}
