const webpack = require('webpack');
const path = require('path');
module.exports = {
    /* 
        entry point to bundle -- import everything 
        needed in index.js
    */ 
    entry: path.resolve(__dirname, './src/index.js'),
    
    // the result and where it resides
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js'
    },

    plugins:
        [new webpack.HotModuleReplacementPlugin()]
    ,

    // where we serve application to browser
    devServer: {
        contentBase: path.resolve(__dirname, './public'),
        hot: true,
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
};
