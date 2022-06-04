const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
}

module.exports = {
  entry: {
    pageStart: PATHS.src + '/pages/pageStart/pageStart.js',
    setColorsType: PATHS.src + '/pages/setColorsType/setColorsType.js',
    headersFooters: PATHS.src + '/pages/headersFooters/headersFooters.js',
    cards: PATHS.src + '/pages/cards/cards.js',
    formElements: PATHS.src + '/pages/formElements/formElements.js',
  },
  output: {
    path: PATHS.dist,
    filename: '[name].js'
  },
  watch: true,
  watchOptions: {
      aggregateTimeout: 100,
      ignored: [/node_modules/]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        filename: 'pageStart.html',
        template: PATHS.src + '/pages/pageStart/pageStart.pug'
      }
    ),
    new HtmlWebpackPlugin(
      {
        filename: 'setColorsType.html',
        template: PATHS.src + '/pages/setColorsType/setColorsType.pug'
      }
    ),
    new HtmlWebpackPlugin(
      {
        filename: 'headersFooters.html',
        template: PATHS.src + '/pages/headersFooters/headersFooters.pug'
      }
    ),
    new HtmlWebpackPlugin(
      {
        filename: 'formElements.html',
        template: PATHS.src + '/pages/formElements/formElements.pug'
      },
    ),
    new HtmlWebpackPlugin(
      {
        filename: 'cards.html',
        template: PATHS.src + '/pages/cards/cards.pug'
      },
    ),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/images'),
          to:   path.resolve(__dirname, 'dist/images')
        },
        {
          from: path.resolve(__dirname, 'src/favicons'),
          to:   path.resolve(__dirname, 'dist/images')
        }
      ],
    })
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
          name: '[name].[ext]'
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
