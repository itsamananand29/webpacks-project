const path = require('path');
const {merge} = require('webpack-merge');
const common= require('./webpack.common.js');
module.exports=merge(common,{
    mode:"development",
    output:{
        filename:"[name].[contenthash].js",
        path:path.resolve(__dirname,"javascript")
    }
});