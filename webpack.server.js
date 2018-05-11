const path = require('path');

module.exports = {
  target: 'node',
  entry: {
    server: path.join(__dirname, 'src/server/index.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', 'jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
