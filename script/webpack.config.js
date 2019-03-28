var pkg = require("../package.json");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/index.js",
  output: {
    filename: `${pkg.name}.min.js`,
    library: `${pkg.name}`,
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js"]
  },
  performance: {
    hints: false
  },
  plugins: [
    new UglifyJSPlugin({
      uglifyOptions: {
        warning: "verbose",
        ecma: 5,
        output: {
          comments: false,
          beautify: false
        },
        compress: {
          warnings: false
        }
      }
    })
  ]
};
