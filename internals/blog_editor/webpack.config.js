/** HMR not working! */

const path = require('path');
const webpack = require('webpack');

console.log('dirname in webpack.config.js', __dirname);
module.exports = {
  entry: ['react-hot-loader/patch', path.resolve(__dirname, './index.js')],

  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Enable HMR
  ],

  output: {
    path: path.resolve(__dirname, './'),
    filename: 'bundle.js',
    publicPath: './',
  },

  module: {
    rules: [
            // {
      //   test: /\.whoah?$/,
      //   loader: 'whoa-loader',
      // },
      {
        test: [/\.jsx?$/, /\.whoa/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              'latest',
              {
                es2015: {
                  modules: false,
                },
              },
            ],
            'react',
          ],
          plugins: [
            'react-hot-loader/babel',
            'styled-jsx/babel',
            'transform-react-jsx',
            'transform-class-properties',
            'transform-object-rest-spread',
          ],
        },
      },
    ],
  },

  resolve: {
    alias: {
      components: path.resolve(__dirname, '../../components'),
      internals: path.resolve(__dirname, '../../internals'),
      blog: path.resolve(__dirname, '../../blog'),
    },
    extensions: ['.js', '.json'],
  },

  devServer: {
    publicPath: '/',
    hot: true,
    // compress: true,
    contentBase: path.resolve(__dirname, '../../'),

    port: 9000,
  },

  devtool: 'cheap-eval-source-map',
};
