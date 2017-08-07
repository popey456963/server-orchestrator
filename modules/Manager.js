const shortid = require('shortid')
const SERVER_IP = '127.0.0.1'

function listServers() {
  return new Promise(async (resolve) => {
    const info = await db.all('SELECT * FROM instances')
    resolve({
      time: +new Date(),
      status: 200,
      message: 'Listed Available Servers',
      data: info
    })
  })
}

function infoServer(node) {
  return new Promise(async (resolve) => {
    const info = await db.all('SELECT * FROM instances WHERE id=?', node)
    resolve({
      time: +new Date(),
      status: 200,
      message: 'Server Query Successful',
      data: info
    })
  })
}

function createServer(node, settings) {
  return new Promise(async (resolve) => {
    const uuid = shortid.generate()
    const server_port = Math.ceil(Math.random() * 20000)
    await db.all('INSERT INTO instances (id, type, server_ip, server_port, running) VALUES (?, ?, ?, ?, ?);', uuid, settings.type, SERVER_IP, server_port, true)
    resolve(await infoServer(uuid))
  })
}

function deleteServer(node) {
  return new Promise(async (resolve) => {
    const query_response = await db.all('DELETE from instances WHERE id=?', node)
    resolve({
      time: +new Date(),
      status: 200,
      message: 'Successfully removed server.',
      data: query_response
    })
  })
}

function actionServer(node, settings) {
  return new Promise(async (resolve) => {
    // Run the fancy command on the server.
    resolve({
      time: +new Date(),
      status: 200,
      message: 'Successfully completed the action.',
      data: {}
    })
  })
}

module.exports = { listServers, infoServer, createServer, deleteServer, actionServer }
