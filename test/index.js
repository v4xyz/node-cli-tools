const { getCliParam, execCmd } = require('../src')

const getPm2Cmd = (serviceName) => {

  return `pm2 list|grep ${ serviceName }|awk -F │ '{print $10}'`
}

/**
 * 程序入口
 */
(async function () {
  console.log(process.argv)
  const cmd = getPm2Cmd(getCliParam('name'))
  const result = await execCmd(cmd)

  console.log(result, result === 'online')
})()
