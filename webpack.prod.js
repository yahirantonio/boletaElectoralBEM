const path = require('path');
const HtmlWebPackPlugin       = require('html-webpack-plugin'); 
const MiniCssExtractPlugin    = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MinifyPlugin            = require('babel-minify-webpack-plugin');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');
const CopyPlugin              = require('copy-webpack-plugin'); 

module.exports = {
    entry: './src/index.ts',
    mode: 'production',
    resolve: {
        extensions: ['.ts','.js','.json']
    },
    optimization: {
        minimizer: [ new OptimizeCssAssetsPlugin() ]
    },
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'main.[contentHash].js',
        clean:true
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styles\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: false }
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: './[name].[contentHash].css',
            ignoreOrder: false
        }),
        new MinifyPlugin(),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns:[
                { from: 'src/favicon.ico', to: './favicon.ico' },
            ]
        }),
    ]
}

