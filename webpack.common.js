const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:"./src/app.js",
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        })
    ],
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