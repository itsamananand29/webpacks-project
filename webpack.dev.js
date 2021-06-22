const path = require('path');
const {merge} = require('webpack-merge');
const common= require('./webpack.common.js');
module.exports=merge(common,{
    mode:"development",
    output:{
        filename:"app.js",
        path:path.resolve(__dirname,"javascript")
    }
});