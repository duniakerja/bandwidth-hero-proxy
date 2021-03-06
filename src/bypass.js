const logger = require('./logger')

function bypass(req, res, buffer) {
  logger('bypass', req)

  res.setHeader('x-proxy-bypass', 1)
  res.setHeader('content-length', buffer.length)
  res.status(200)
  res.write(buffer)
  res.end()
}

module.exports = bypass
