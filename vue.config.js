module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "" : "/",
    outputDir: "docs",
    chainWebpack: config => {
        config.performance
            .maxEntrypointSize(400000)
            .maxAssetSize(400000)
    }
};


