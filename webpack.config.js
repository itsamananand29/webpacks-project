const { NONAME } = require('dns');
const path = require('path');
module.exports={
    entry:"./src/app.js",
    mode:"development",
    output:{
        filename:"app.js",
        path:path.resolve(__dirname,"javascript")
    },
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
        ],
    }
}