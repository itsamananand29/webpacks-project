const path = require('path');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports=merge(common,{
    mode:"production",
    output:{
        filename:"[name].[contenthash].js",
        path:path.resolve(__dirname,"build")
    },
    plugins:[new MiniCssExtractPlugin({
        filename:"[name].[hash].css"
    })],
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:
                [
                    MiniCssExtractPlugin.loader,  //extract css from files   
                    "css-loader",   //2.convert css to js
                    "sass-loader"  //1.convert scss to css
                ]
            },
        ]    
    },
    
});