const webpack = require('webpack');
const path = require('path');
const loaders = require('./loaders')
const parentDir = path.join(__dirname, '../');

module.exports = {
    entry: path.join(__dirname, '../index.js'),
    module: {
      noParse: /node_modules\/reactstrap-tether\/dist\/js\/tether.js/,
      rules: [
        loaders.css,
        loaders.eslint,
        loaders.image,
        loaders.font,
        loaders.js,
        loaders.scss,
      ],
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 1212,
        contentBase: parentDir,
        historyApiFallback: true
    }
}
