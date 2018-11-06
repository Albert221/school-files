const path = require('path');
const webpack = require('webpack');

let entry = [
    process.env.NODE_ENV === 'production' ? ''
            : 'webpack-dev-server/client?http://localhost:8080',
    'babel-polyfill',
    './src/index.js'
].filter(el => el !== '');

module.exports = {
    devtool: 'eval',
    entry: entry,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src'),
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    }
};