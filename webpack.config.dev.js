const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        './src/router.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [
            {
                test: /\.html?$/,
                loader: 'file?name=[name].[ext]'
            }, {
                test: /\.css$/,
                loader__: 'style!css-loader',
                loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]'
            }, {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            }, {
                test: /\/inline\/(\S*)?\.(png|jpg|gif)(\?\S*)?$/,
                loader: 'file-loader?limit=10000'
            }, {
                test: (path) => {

                    let images = new RegExp(/\.(png|jpg|gif)(\?\S*)?$/).test(path)

                    if (!images) {
                        return false
                    }

                    return !new RegExp(/\/inline\/(.)*/).test(path)
                },
                loader: 'url-loader?limit=10000'
            }, {
                test: /\.(woff|eot|ttf|svg|woff2)(\?\S*)?$/,
                loader: 'url-loader?limit=10000'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
