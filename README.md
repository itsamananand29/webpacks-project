# webpacks-project

It is responsible to bundle our project into a smaller group of files.
It manages the dependencies . Like it includes the files 

install webpack:
npm install --save-dev webpack webpack-cli

to start the build we use npm webpack or use script in package.json and change start with webpack

to have config file use npm webpack -config filename;

this file should have an entry point and the output filename and path.

by default it will work for js

For css, saas and other thing we need loaders

For css there is css loader and style loader
The css loader will convert the css to js code and add it to your js file 
style loader will apply that css inside our js file on our index.html

Cache busting :
The files are generally cached in the browser so to prevent the caching of the files 
we use a class contentHash
eg :
filename : 'app.[contenthash].js'
but we cannot guess the contentHash value and hence to include that file in our index.html 
we will use plugin HtmlWebpackPlugin in webpack-config so this will an empty html template with the js files included
along with hashed value added in the filename.The template name by default will be index.html

This index.html file will not have our html content .To add it we will have to mention it as a template inside the plugin new HtmlWebPackPlugin({
    template: "./src/index.html"
})

We can seperate the dev and production environment and the merge them usig webpack-merge. 
We create a common config files , a dev config file and a production config file and add configurations accrodingy.