const path = require('path');
const chalk = require('chalk');

console.log(chalk.blue('dirname in webpack.config.js'), __dirname);
module.exports = {
  entry: './internals/build/blog.js',

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
        exclude: path.resolve(__dirname, '../../blog'),
      },
      {
        test: /\.jsx?$/,
        loader: 'raw-loader',
        include: path.resolve(__dirname, '../../blog'),
      },
    ],
  },

  target: 'node',
};
