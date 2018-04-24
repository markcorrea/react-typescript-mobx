var path = require('path');

module.exports = {
    entry: "./src/index.tsx",
    devtool: "source-map",
    mode: 'development',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "./bundle.js",
        publicPath: '/static/'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules:[{
            test: /\.tsx?$/,
            loader: "ts-loader"
        }]
    }
};