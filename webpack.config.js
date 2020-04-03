const path = require("path");
const webpack = require("webpack");
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const openBrowserPlugin = new OpenBrowserPlugin({url: 'http://localhost:3000'});
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "public/index.html"),
    filename: "./index.html"
});

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.join(__dirname, "dist"),
    //publicPath: "dist/",
    filename: "bundle.js"
  },
  devServer: {
    //contentBase: path.join(__dirname, "public/"),
    port: 3000,
    //publicPath: "http://localhost:3000/dist/",
    watchOptions: { poll: true }
  },
  plugins: [htmlWebpackPlugin, openBrowserPlugin]
};