const path = require('path');


console.log('dirname in webpack.config.js', __dirname)
module.exports = {
  entry: './build/blog.js',

  output: {
    path: path.resolve(__dirname, '../out_blog'),
    filename: 'intermediate.bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.whoah?$/,
        loader: 'whoa-loader',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',

      }
    ],
  },

  target: 'node'
};
