var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        filename: 'dist/vue-woopra.min.js',
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
    ],
    resolve: {
        extensions: [ '', '.js', '.json' ]
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            },
            exclude: /node_modules/
        }]
    }
}