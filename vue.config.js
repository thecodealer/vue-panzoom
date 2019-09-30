module.exports = {
    productionSourceMap: false,
    filenameHashing: false,
    chainWebpack: config => {
        config.plugins.delete('html');
        config.plugins.delete('preload');
        config.plugins.delete('prefetch');
    },
    configureWebpack: {
        output: {
            filename: 'vue-panzoom.js'
        },
        optimization: {
            splitChunks: false,
        },
    },
}
