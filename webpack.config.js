const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  watch: true,
  watchOptions: {
      aggregateTimeout: 100
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        // chunks: ['index'],
        // template: PATHS.src + '/index.pug'
        template: 'index.pug',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
  ],
  module: {
    rules: [
        {
            test: /\.pug$/,
            loader: 'pug-loader',
            options: {
                pretty: true
            }
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { sourceMap: true }
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: true }
            }
            ]
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          ]
        },
        {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'img',
          // name: '[name].[ext]',
          }
        },
        {
        test: /\.(eot|svg|ttf|woff)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'fonts',
          name: '[name].[ext]',
          }
        }
    ]
  }
};
