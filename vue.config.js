const path = require('path');
// function resolve(dir) {
//     return path.join(__dirname, dir);
// }
module.exports = {
    // lintOnSave: true,
    // chainWebpack: (config) => {
    //     config.resolve.alias
    //     .set('@', resolve('src'))
    // },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://179.10.8.14:10099/iot_measurement_dictionaryTool/dictionaryTool',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}