// 将所有文件移到外层以供直接引用
const path = require('path')
const fs = require('fs')

const UglifyJSPlugin = require("uglifyjs-webpack-plugin")

const rootPath = path.resolve(__dirname, '../')

let folderList = fs.readdirSync(path.resolve(rootPath, 'src'))
let entry = {}
folderList.forEach(item => {
  if (item === "index.js") return false

  let dir = path.resolve(rootPath, `src/${item}/`)
  fs.readdirSync(dir).forEach(file => {
    entry[file.split('.')[0]] = `./src/${item}/${file}`
  })
})


module.exports = {
  mode: process.env.NODE_ENV,
  entry: entry,
  output: {
    filename: '[name].js',
    path: rootPath
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
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
}
