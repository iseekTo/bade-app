const proxy = require('http-proxy-middleware')

const proxyFn = function (app: any) {
    app.use(
        proxy('/api', {
            target: 'http://127.0.0.1:3000/',
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        })
    )
}

export default proxyFn
