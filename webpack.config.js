const path = require('path');
const HtmlWebpackPligin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './build/'),
        filename: 'index.js'
    },
    devtool: 'source-map',
    mode: mode,
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPligin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    (mode === 'development') ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.m?js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    },
    devServer: {
        watchFiles: {
            paths: ['src/**/*'],
            options: {
                usePolling: false,
            },
        },
    },
}