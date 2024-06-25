const rules = require('./webpack.rules');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('node:path');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        // {
        //   from: path.join(__dirname, 'src', 'assets'),
        //   to: path.join(__dirname, '.webpack/renderer', 'assets'),
        // },
        {
          from: path.join(__dirname, 'src', 'pages'),
          to: path.join(__dirname, '.webpack/renderer', 'pages'),
        },
        {
          from: path.join(__dirname, 'python'),
          to: path.join(__dirname, '.webpack/renderer', 'python'),
        },
      ],
    }),
  ],
};
