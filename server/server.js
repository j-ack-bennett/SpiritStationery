const express = require('express')
const path = require('path')

const itemRoutes = require('./routes/items')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/items', itemRoutes)

module.exports = server
