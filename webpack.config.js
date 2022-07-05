const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const path = require('path');

/** @type {import('webpack').Configuration} */
const config = {
  mode: 'production',
  target: 'web',
  entry: path.resolve('src', 'index.tsx'),
  output: {
    path: path.resolve('server', 'hosting'),
    filename: 'main.js',
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: 'ts-loader' }],
  },
  resolve: { extensions: ['.ts', '.tsx', '.js', '.json'] },
  plugins: [
    new HtmlWebpackPlugin({ inject: true, inlineSource: '.(js|css)$', template: path.resolve('public', 'index.html') }),
    new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),
  ],
};

module.exports = config;
