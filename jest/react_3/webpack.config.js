const path = require('path');
module.exports = {
    /* 
        entry point to bundle -- import everything 
        needed in index.js
    */ 
    entry: path.resolve(__dirname, './src/index.js'),
    
    // the result and where it resides
    output: {
        path: path.resolve(__dirname, '/public'),
        filename: 'bundle.js'
    },

    // where we serve application to browser
    devServer: {
        contentBase: path.resolve(__dirname, './public'),
    },

    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js']
    }
};
