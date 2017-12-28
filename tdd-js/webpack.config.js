 const webpack = require("webpack");

 module.exports = {
     entry: {
         filename: './src/main.js'
     },

     output:{
        filename: './src/build.js'
     },

     module:{
         loaders: [
             {
                 test: /\.js$/,
                 exclude: /node_modules/,
                 loader: 'babel-loader',
                 query: {
                     presets: [
                         ['env', {modules: false}]
                     ]
                 }
             }
         ]
     }
 }