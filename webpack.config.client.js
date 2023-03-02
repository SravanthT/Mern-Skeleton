const {join} = require('path');
const webpack = require('webpack');
const CURRENT_WORKING_DIR = process.cwd();

const config = {
    name:"browser",
    mode:"development",
    devtool:'inline-source-map',
    entry:[
        'webpack-hot-middleware/client?reload=true',
        join(CURRENT_WORKING_DIR,'client/main.js')
    ],
    output:{
        path: join(CURRENT_WORKING_DIR,'/dist'),
        filename: 'bundle.js',
        publicPath:'/dist/'
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                exclude: /node_modules/,
                use:[
                    'babel-loader'
                ]
            },
            {
                test:/\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
                use:'file-loader'
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    resolve:{
        alias:{
            'react-dom':'@hot-loader/react-dom'
        }
    },
    stats:{
        all:false,
        errors:true,
        warnings:true,
        colors:true,
        modules:true,
        moduleTrace:true
    }
}
module.exports = config
