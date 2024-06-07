const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const pageName = 'index';
module.exports = {
  entry: `./source/pages/${pageName}/${pageName}.tsx`,
  output: {
    filename: `${pageName}.js`,
    path: path.resolve(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Index Page',
      template: `./source/pages/${pageName}/${pageName}.html`,
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'public'),
    compress: true,
    port: 8080,
  },
};
