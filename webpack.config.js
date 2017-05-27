const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'dist')
};

module.exports = {
    entry: {
        app: PATHS.app + '/index.js'
    },
    output: {
        filename: '[name].js',
        path: PATHS.build
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack demo'
        })
    ]
};
