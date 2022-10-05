const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");
const ghpages = require('gh-pages');

const PAGES_DIR = path.resolve(__dirname, 'src/pages');

const PAGES = fs
  .readdirSync(PAGES_DIR)
  .map((item) => item.replace(/\.[^/.]+$/, ''));

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
}

const entryPoints = PAGES.map(page => ({ [page]: `${PAGES_DIR}/${page}/${page}.js`, }));
const entryPointsTotal = Object.assign({}, ...entryPoints);

module.exports = {
  entry: entryPointsTotal,
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
    ...PAGES.map(page => new HtmlWebpackPlugin({
      filename: `${page}.html`,
      template: `${PAGES_DIR}/${page}/${page}.pug`,
      chunks: [page],
    })
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
          outputPath: 'images',
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
ghpages.publish('dist', function(err) {});
