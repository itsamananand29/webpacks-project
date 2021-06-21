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
                test:/\.css$/,
                use:["style-loader","css-loader"]
            },
        ],
    }
}