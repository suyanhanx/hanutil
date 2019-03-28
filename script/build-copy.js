// 将所有文件移到外层以供直接引用
const ora = require('ora')
const rm = require('rimraf')
const chalk = require('chalk')
const webpack = require('webpack')

const config = require('./webpack.single.config')

let copying = ora('copying...')
copying.start()
rm('*.js', err => {
  if (err) throw (err)
  webpack(config,  (err, stats) => {
    if (err) throw (err)
    copying.stop()
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')
    console.log(chalk.cyan('  Build & copy complete.\n'))
  })
})
