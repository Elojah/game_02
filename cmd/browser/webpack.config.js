// var TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: /src/,
        exclude: /node_modules/,
        loader: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
    // plugins: [
    //     new TsConfigPathsPlugin(/* { tsconfig, compiler } */)
    // ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'USE_TLS': process.env.USE_TLS !== undefined
    })
  ]
};