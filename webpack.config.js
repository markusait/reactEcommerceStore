var webpack = require('webpack')

var config = {
  entry: './index',
  output: {
    filename: 'bundle.js',
    path: __dirname,
    publicPath: '/login/'
  }
}

//if (process.env.NODE_ENV !== 'production') {
if (true) {
  devServer = {
    inline: true,
    historyApiFallback: true,
    port: 3002,
    compress: true,
    disableHostCheck: true
    //host: 'awesome.app'
  }
}

module.exports = config
