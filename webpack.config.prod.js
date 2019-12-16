var CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let plugins = []
let entry = []

if (process.env.NODE_ENV === 'production') {
    plugins.push(
        new CopyWebpackPlugin([
                    { from: 'index.prod.html', to: 'index.html' }
                ]),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new ExtractTextPlugin('bundle.css'),
        new webpack.optimize.UglifyJsPlugin({compress: { warnings: false }}),
        new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('production') } })
    )
} else {
    plugins.push(new webpack.HotModuleReplacementPlugin())
    entry.push(
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch'
    )
}

entry.push('./src/router.js')

const config = {
    entry: entry,
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: './',
    },
    module: {
        loaders: [
            {
                test: /\.html?$/,
                loader: 'file?name=[name].[ext]'
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]')
            }, {
                test: /\.jsx?$/,
                loaders: [
                    'babel-loader'
                ],
                exclude: /node_modules/
            }, {
                    test: /\.(woff|woff2|eot|ttf)$/i,
                    loader: "file-loader?name=fonts/[name]-[hash].[ext]"
            }, {
                test: /\.(svg|png|jpg|gif)$/,
                loader: 'url-loader?limit=10000',
                exclude: /inline/
            }
        ]
    },
    plugins: plugins,
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}


module.exports = config
