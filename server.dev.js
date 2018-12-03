const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    historyApiFallback: true
}).listen(8080, '0.0.0.0', (err, result) => {
    if (err) {
        console.log(err);
    }

    console.log('Running at http://0.0.0.0:8080');
});