const path = require("path");

module.exports = {
    assetsDir: '',
    outputDir: path.resolve(__dirname, "../static"),
    productionSourceMap: false,
    devServer: {
        proxy: {
            '^/api/*': {
                // proxies request for api to localhost:5000
                target: "http://localhost:5000/"
            },
        }
    },
};