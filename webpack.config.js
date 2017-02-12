var webpack = require('webpack');

module.exports = {
    entry:[
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx',
    ],
    externals:{
        jquery: 'jQuery'
    },
    pligins:[
        new webpack.ProvidePlugin({
            '$':'jquery',
            'jQuery':'jquery'
        })
    ],
    output :{
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
           Main : 'app/components/Main.jsx',
           Nav : 'app/components/Nav.jsx',
           Showcase : 'app/components/Showcase.jsx',
           SearchForm : 'app/components/SearchForm',
           SearchMessage :'app/components/SearchMessage',
           About : 'app/components/About.jsx',
           Careers : 'app/components/Careers.jsx',
           Footer : 'app/components/Footer.jsx'
        },
        extensions: ['','.js','.jsx']
    },
    module :{
        loaders:[{
            loader : 'babel-loader',
            query:{
                presets:['react','es2015']
            },
            test: /\.jsx?$/,
            exclude:/(node_modules|bower_components)/
        }
        ]
    }

};