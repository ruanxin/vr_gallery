const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const _googleAnalyticsId = 'UA-99357643-1';
const _title = 'UBERVIS';
const _version = '1.0.0';

const extractSass = new ExtractTextPlugin({
  filename: "css/[name].css",
  allChunks: true,
});

let chunksSort = function(a, b) {
   return (a.names[0] > b.names[0])? 1 : -1;
};

module.exports = {
  entry: {
    aline2: './app/data/line2.js',
    commons: './app/index.js',
    resource: './app/resource.js',
    style: './scss/main.scss',
  },
  output: {
    filename: 'js/[name].bundle.js',
    sourceMapFilename: "js/[name].bundle.js.map",
    path: path.resolve(__dirname, 'dist')
  },
  devtool: "cheap-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    host: "0.0.0.0",
    port: 9000,
    disableHostCheck: true 

  },
  module: {
    rules: [
      {
        test: /\.scss/,
        use: extractSass.extract({
          use: [{
              loader: "css-loader"
          }, {
              loader: "sass-loader"
          }],
        })
      },
      {
        test: /\.js$/,
        enforce: "pre",
        exclude: /node_modules/,
        use: [{
          loader: "jshint-loader",
        }]
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.js?$/,
        use: [ 'babel-loader', ],
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|png)$/,
        use: [{
          loader: 'file-loader?name=[path]/[name].[ext]',
        }]
      },
      {
        test: /\.typeface\.json$/,
        use: [{
          loader: 'file-loader?name=[path]/[name].[ext]',
        }]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'VR Tourism Europe Line 2 Kaiyuan ' + _title,
      version: _version,
      keyword: 'Europe',
      filename: 'index.html',
      template: 'index.pug',
      chunks: ['aline2', 'commons'],
      chunksSortMode: chunksSort,
    }),
    new UglifyJSPlugin({
      compress: true,
      comments: false,
    }),
    extractSass
  ],
};
