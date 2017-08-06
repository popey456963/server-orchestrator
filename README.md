# node-orchestrator

```javascript
app.get('/list', async (req, res) => { res.json(await Manager.listServers()) })
app.get('/info/:node', async (req, res) => { res.json(await Manager.infoServer(req.params.node)) })
app.post('/create', async (req, res) => { res.json(await Manager.createServer(req.params.node, req.body)) })
app.delete('/delete/:node', async (req, res) => { res.json(await Manager.deleteServer(req.params.node)) })
app.post('/action/:node', async (req, res) => { res.json(await Manager.actionServer(req.params.server, req.body)) })
```
