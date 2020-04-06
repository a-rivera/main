const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BaseHrefWebpackPlugin } = require("base-href-webpack-plugin");

module.exports = (env, argv) => ({
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
      path: path.join(__dirname, "/dist"),
      filename: "bundle.js"
    },
    devServer: {
      historyApiFallback: true,
      open: true,
      port: 3000,
      watchOptions: { poll: true }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public/index.html"),
        filename: "./index.html"
      }),
      new BaseHrefWebpackPlugin({
        baseHref: argv.mode === 'production' ? '/main/' : '/'
      })
    ]
});