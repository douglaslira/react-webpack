const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,  
            exclude: /node_modules/,  
            use: {  
                loader: 'babel-loader',  
                options: {  
                    cacheDirectory: true  
                }  
            }  
        },{
            test: /\.scss$/,
            use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader", "sass-loader"]
        },{
            test: /\.(png|jpg)$/,
            use: {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "images/"
              }
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React + Webpack :: Douglas Lira',
            template: __dirname + '/template/index.html',
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            },
            hash: true
        }),
        new MiniCssExtractPlugin({
          filename: "css/[name].css"
        })
    ],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        config: JSON.stringify({
            apiUrl: 'http://localhost:10010'
        })
    }
};
