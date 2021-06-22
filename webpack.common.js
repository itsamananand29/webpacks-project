const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports={
    entry:{
        main:"./src/app.js",
        vendor:"./src/vendor.js"
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        }),
        
    ],
    module:{
        rules:[
            {
                test: /\.(jpe?g|png|gif)$/,
                type: 'asset/resource',
                generator: {
                  filename: 'images/[name].[hash].[ext]'
                }
            },
            {
                test:/\.(html)$/,
                use:[
                    "html-loader"
                ]
            },
            
        ],
    }
}