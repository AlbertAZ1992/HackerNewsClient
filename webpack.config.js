var webpack = require('webpack');
module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: './dist/',
        filename: 'index.js'
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            }
        ]
    }

};
