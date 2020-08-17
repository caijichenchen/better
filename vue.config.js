const port = 8080

const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  devServer: {
    port
  },
  //eslint编译
  lintOnSave: process.env.NODE_ENV !== 'production',
  // 生产环境不输出 map 文件
  productionSourceMap: false
}