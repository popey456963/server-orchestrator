const Manager = require('./modules/Manager')

global.db = require('sqlite')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

if (process.env.NODE_ENV === 'production' && !process.env.KEY) throw new Error('Error, universal key not given.')

app.get('/list', async (req, res) => { res.json(await Manager.listServers()) })
app.get('/info/:node', async (req, res) => { res.json(await Manager.infoServer(req.params.node)) })
app.post('/create', async (req, res) => { res.json(await Manager.createServer(req.params.node, req.body)) })
app.delete('/delete/:node', async (req, res) => { res.json(await Manager.deleteServer(req.params.node)) })
app.post('/action/:node', async (req, res) => { res.json(await Manager.actionServer(req.params.server, req.body)) })

// db { id, type, server_ip, server_port, running }

;(async () => {
  await db.open('./db/sqlite.db')
  await db.all('CREATE TABLE IF NOT EXISTS instances (id TEXT, type TEXT, server_ip TEXT, server_port TEXT, running BOOLEAN);')
  // await db.all('CREATE TABLE IF NOT EXISTS server (id TEXT, server_ip TEXT)')
  app.listen(6400, function () {
    console.log('Example app listening on port 6400!')
  })
})()
