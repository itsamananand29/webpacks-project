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

html-loader:
any time it find an image in template it is required (ie. require('image.png');)

We need to give a path and a rule for the images files to be handled 

When do the cache busting the problem is that each time anything is changed inside the code a new file is created . But the 
old file is not deleted . To clear the old files we use clean-webpack-plugin. 

To include the libraries which are less likely to change inside our main.js file which is more likely to change.
So we can create a vendor.js file and include all the libraries inside that file and then add that file as an entry file.

Performance wise loading our css by injecting them into the dom is not very good. Especially in dom. 
We extract css . We can use mini-css-extract-plugin. For this to work we have to remove css-loader , style-loader and sass-loader.
