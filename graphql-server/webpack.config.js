"use strict"

const path = require("path")

module.exports = {
  entry: "./src/graphql.js",
  target: "node",
  resolve: {
    extensions: [ "*", ".mjs", ".js" ]
  },
  module: {
    rules: [
      {
        test: /\.(m?js)$/,
        exclude: /node_modules/,
        use: [ "babel-loader" ]
      }
    ]
  },
  externals: [
    "bufferutil",
    "utf-8-validate"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
}
