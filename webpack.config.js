var webpack = require('webpack');
module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: './dist/',
        filename: 'build.js'
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.html$/,
                loader: 'vue-html'
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url',
                query: {
                    limit: 50000,
                    name: '[path][name].[ext]?[hash]'
                }
            },
            {
                test:/\.less$/,
                loaders:["style","css","less"]
            },
            {
                test:/\.css$/,
                loader:'css'
            }
        ]
    }
};
