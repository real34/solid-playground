const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    host: '0.0.0.0',
    port: 1234,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      inject: false,
      template: require('html-webpack-template'),
      mobile: true,

      title: 'Solid words',
      lang: 'en-US',
      appMountId: 'app'
    }),
    new WriteFilePlugin(),
    new CopyWebpackPlugin(['./public/'])
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  // see https://www.npmjs.com/package/@solid/react#configuring-webpack
  externals: require('@solid/react/webpack/webpack.bundle.config').externals
};
