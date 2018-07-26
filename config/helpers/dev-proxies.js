const proxy = require('http-proxy-middleware')
 
const environment = require('./environment')
const API_PATH = require('./api-paths')
const API_PATH_LOCALHOST = API_PATH[environment]
 
const proxyPort = '3000'
 
const filterNoFile = (pathname)  => pathname.indexOf('/assets/') === -1 || pathname.indexOf('/js/') === -1
module.exports = {
  proxyPort,
  getProxies: () => [
      proxy(['/newbie/api'],
        {
          target: API_PATH_LOCALHOST,
          pathRewrite: { '/newbie/api': '' },
          secure: false,
        }
      ),
      proxy('/mb',
        {
          target: 'http://localhost:2525',
          pathRewrite: { '^/mb': '' },
          secure: false
        }
      ),
      proxy(['**/assets/**', '**/js/**', '**/**.html'],
        {
          target: `http://localhost:${proxyPort}`,
          pathRewrite: {
            '.*/assets': '/assets',
            '.*/js': '/js',
            '.*/*.html': '/*.html',
          },
          secure: false,
        }
      ),
      proxy(filterNoFile,
        {
          target: `http://localhost:${proxyPort}`,
          pathRewrite: { '.*': ''},
          secure: false,
        }
      ),
  ]
}