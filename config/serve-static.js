const express = require('express')
const serveStatic = require('serve-static')

const configProxies = require('./helpers/dev-proxies')

const server = express()
const proxyPort = '4200'
// Serve up public/ftp folder
const serve = serveStatic('build', {index: ['index.html', 'index.htm']})

// Create Insecure server

server.use(serve)
server.use(configProxies.getProxies())

server.listen(proxyPort)
// eslint-disable-next-line no-console
console.log(`server started at http://localhost:${proxyPort}`)
