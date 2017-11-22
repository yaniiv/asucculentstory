exports.eslint = {
  test: /\.jsx?$/,
  enforce: 'pre',
  exclude: /node_modules/,
  loader: 'eslint-loader',
  options: {
    emitError: true,
    emitWarning: true,
  },
}

exports.css = {
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader',
  ],
}

exports.scss = {
  test: /\.scss$/,
  use: [
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
      },
    },
  ],
}

const jsloaders = {
  loader: 'babel-loader',
  options: {
    sourceMaps: 'both',
  },
}

exports.js = {
  test: /\.jsx?$/,
  use: [jsloaders],
  exclude: /node_modules/,
}

exports.image = {
  test: /\.(png|jpg|jpeg|gif|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  use: [
    {
      loader: 'url-loader',
      options: {
        prefix: 'img',
        limit: 500,
      },
    },
  ],
}

exports.font = {
  test: /\.(woff|woff2|ttf|eot)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  use: [
    {
      loader: 'url-loader',
      options: {
        prefix: 'font',
        limit: 5000,
      },
    },
  ],
}
