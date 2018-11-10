const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        'hello-world': './src/hello-world',
        'kiwi': './src/kiwi.js'
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, './dist'),
        publicPath: ""
    },
    mode: "production",
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 1000,
            automaticNameDelimiter: "_"
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ],
            },
            {
                test: /\.css/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.scss/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['transform-class-properties']
                    }
                }
            }, {
                test: /\.hbs/,
                use: [
                    'handlebars-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin('dist'),
        new HtmlWebpackPlugin({
            filename: 'hello-world.html',
            chunks: ['hello-world', 'vendors~hello-world~kiwi'],
            title: 'Hello world',
            template: 'src/page-template.hbs',
            description: 'Some description'
        }),
        new HtmlWebpackPlugin({
            filename: 'kiwi.html',
            chunks: ['kiwi', 'vendors~hello-world~kiwi'],
            title: 'Kiwi',
            template: 'src/page-template.hbs',
            description: 'Kiwi'
        })
    ]
};