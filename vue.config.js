const path = require('path');
    function resolve (dir) {
        return path.join(__dirname, dir)
    }
module.exports = {
    publicPath: '/',
    devServer: {
    proxy: {
        '/api':{
            // context: "/api/**",
            target: "http://localhost:8002/",
            changeOrigin: true,
            pathRewrite: {
                "^/api": "/api",
            },
        },
        }
    },
}