const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
  pages: path.resolve(__dirname, "pages"),
  docs: path.resolve(__dirname, "docs"),
  projBlocks: path.resolve(__dirname, "project.blocks"),
  libBlocks: path.resolve(__dirname, "library.blocks"),
}

module.exports = {
  entry: {
    bundle: PATHS.pages + "/index.js"
  },
  output: {
    filename: "[name].js",
    path: PATHS.docs,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: PATHS.pages + '/index.pug',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },
      {
        test: /\.s[ac]ss$/i,
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
          },
        ]
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
            pretty: true
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        include: path.resolve(__dirname, 'project.blocks/fonts/'),
        use: [
                {
                  loader: 'file-loader?name=fonts/[name].[ext]'
                }
             ]
      },
      {
        test: /\.(jpg|png|svg)$/,
        exclude: path.resolve(__dirname, 'project.blocks/fonts/'),
        use: [
                {
                  loader: 'file-loader?name=images/[name].[ext]'
                }
             ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, PATHS.docs)
  }
}