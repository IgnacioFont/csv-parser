const express = require('express')
const app = express()
const { baseUrl, port } = require('./config.js')

const fetchData = require('./utils/fetchData')

const formatCSVList = require('./utils/formatCSVList')

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
  next()
})

app.get('/ping', (req, res) => {
  res.send('pong')
})

app.get('/files/data', async (req, res) => {
  const fileName = req.query.fileName
  if (fileName) {
    const { data } = await fetchData(`${baseUrl}/v1/secret/file/${fileName}`)
    res.json(data)
  }
  const {
    data: { files }
  } = await fetchData(`${baseUrl}/v1/secret/files`)
  const formattedCSVs = await formatCSVList(files)
  res.json(formattedCSVs)
})

app.get('/files/list', async (req, res) => {
  const { data } = await fetchData(`${baseUrl}/v1/secret/files`)
  res.json(data)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
