var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],

  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  output: {
    path: __dirname + '/dist/assets',
    publicPath: '/assets/',
    filename: 'bundle.min.js'
  },

  devServer: {
    contentBase: './dist'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]

};
