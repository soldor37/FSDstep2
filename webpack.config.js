const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        //main: './WebsitePages/Main/index.js',
        colorNtype: './Uikit/ColorNtype/ColorNtype.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer: {
        port: 4200
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'ColorNtype.html',
            template: './UIkit/ColorNtype/ColorNtype.pug'
        }),
        new CleanWebpackPlugin(),
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery'
        // }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot|png|svg|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets',
                  },
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
        ]
    }
}