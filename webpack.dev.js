const path = require('path');
const {merge} = require('webpack-merge');
const common= require('./webpack.common.js');
module.exports=merge(common,{
    mode:"development",
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:
                [
                    "style-loader",  //inject js in dom   
                    "css-loader",   //2.convert css to js
                    "sass-loader"  //1.convert scss to css
                ]
            },
        ]    
    },
    output:{
        filename:"[name].[contenthash].js",
        path:path.resolve(__dirname,"javascript")
    }
});