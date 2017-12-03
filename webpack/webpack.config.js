const path = require('path')

const parentDir = path.join(__dirname, '../')

module.exports = {
  entry: path.join(__dirname, '../index.js'),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  devServer: {
    port: 1212,
    contentBase: parentDir,
    historyApiFallback: true,
  },
}
