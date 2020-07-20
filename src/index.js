const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')

// 获取cli命令传递的参数
const getCliParam = (() => {
  const args = process.argv.slice(1)
  const argsObj = args.reduce((acc, item) => {
    const [key, value] = item.split('=')
    if (key) {
      acc[key.replace('--', '')] = value
    }

    return acc
  }, {})

  return (key) => {

    return argsObj[key] || ''
  }
})()


/**
 * 执行callback风格函数或命令
 *
 * @param {String} cmd - 需要执行函数或命令
 * @param {Object} option - 参数
 * @return {String} 执行结果
 */
function execCmd (cmd, option) {

  return new Promise((resolve, reject) => {
    exec(cmd, (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(typeof data === 'string' ? data.trim() : data)
    })
  })
}

module.exports = {
  getCliParam,
  execCmd,
}
