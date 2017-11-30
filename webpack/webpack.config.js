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
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
        }],
      },
      {
        test: /\.jsx?$/,
        use: [{
          loader: 'babel-loader',
          options: {
            sourceMaps: 'both',
          },
        }],
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
