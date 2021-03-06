// 将所有文件移到外层以供直接引用
const path = require('path')
const fs = require('fs')
const ora = require('ora')
const rm = require('rimraf')
const copy = require('copy')
const chalk = require('chalk')

const rootPath = path.resolve(__dirname, '../')

let copying = ora('copying...')
copying.start()
rm('*.js', err => {
  if (err) throw (err)
  let folderList = fs.readdirSync(path.resolve(rootPath, 'src'))
  folderList.forEach((item, index) => {
    copy(`src/${item}/*.js`, rootPath,  (err, files) => {
      if (err) throw err
      if (index === folderList.length - 1) {
        console.log(chalk.cyan('  Copy complete.\n'))
        copying.stop()
      }
    })
  })
})