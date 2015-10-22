var path = require('path');

module.exports = {
  entry: [
    'webpack/hot/dev-server', //Hot reload
    'webpack-dev-server/client?http://localhost:8080', //Refresh when src changes
    path.resolve(__dirname, 'src/scripts/main.js')
  ],
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    },
    {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }]
  }

};
