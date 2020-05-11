window.console.log('module.js')
async function start() {
  return await Promise.resolve('async working')
}

start().then(window.console.log)
