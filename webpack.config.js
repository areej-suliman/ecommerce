var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry:  {
    app:'./src/index.js'
  },
  
  output: {
    path: path.join(__dirname, "/dist"),
    publicPath: '',
    filename: "main.js",
  },

  mode: 'development',

  devServer: {
    contentBase: path.join(__dirname, "/dist"),
    port: 1239,
    writeToDisk: true,
    open: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        use:[{
            loader: "html-loader",
            options: {
                minimize: true,
            }
        }]
      },

      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
              publicPath: "",
            },
          },
          "css-loader",
        ],
      },

      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
          },
        },
        ],
      },

    ],
  },

  plugins: [
      new HtmlWebpackPlugin({
          filename: "index.html",
          template: "./src/index.html",
      }),

      new MiniCssExtractPlugin({
          filename: "css/style.css",
      }),
    
    
    ],

};