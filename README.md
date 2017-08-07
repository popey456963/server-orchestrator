# server-orchestrator

```javascript
app.get('/', async (req, res) => { res.json(await Manager.listServers()) })
app.get('/server/:server', async (req, res) => { res.json(await Manager.infoServer(req.params.server)) })
app.post('/server', async (req, res) => { res.json(await Manager.createServer(req.params.server, req.body)) })
app.delete('/server/:server', async (req, res) => { res.json(await Manager.deleteServer(req.params.server)) })
app.post('/server/:server', async (req, res) => { res.json(await Manager.actionServer(req.params.server, req.body)) })
```
